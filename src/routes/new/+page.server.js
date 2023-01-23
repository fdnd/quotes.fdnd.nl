import { GraphQLClient, gql } from 'graphql-request';
import { HYGRAPH_KEY, HYGRAPH_URL } from '$env/static/private';

// See form actions: https://kit.svelte.dev/docs/form-actions
export const actions = {
	default: async ({ request }) => {
		const fdata = await request.formData();
		const text = fdata.get('text');
		const author = fdata.get('author');

		// Authorize using our key
		const hygraph = new GraphQLClient(HYGRAPH_URL, {
			headers: { Authorization: `Bearer ${HYGRAPH_KEY}` }
		});

		// See mutations: https://hygraph.com/docs/api-reference/content-api/mutations
		const mutation = gql`
			mutation addQuote($text: String!, $author: String!) {
				createQuote(data: { text: $text, author: $author }) {
					id
					text
					author
				}
			}
		`;
		const vars = {
			text: text,
			author: author
		};
		const data = await hygraph.request(mutation, vars);

		// See publishing content: https://hygraph.com/docs/api-reference/content-api/content-stages
		const publication = gql`
			mutation publishQuote($id: ID!) {
				publishQuote(where: { id: $id }, to: PUBLISHED) {
					id
				}
			}
		`;
		const pubVars = { id: data.createQuote.id };
		const pubData = await hygraph.request(publication, pubVars);

		return pubData;
	}
};
