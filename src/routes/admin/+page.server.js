import { GraphQLClient, gql } from 'graphql-request';
import { HYGRAPH_KEY, HYGRAPH_URL } from '$env/static/private';

// See form actions: https://kit.svelte.dev/docs/form-actions
export const actions = {
	default: async ({ request }) => {
		const fdata = await request.formData();
		const quoteId = fdata.get('quoteId');
		const text = fdata.get('text');
		const author = fdata.get('author');

		// Authorize using our key
		const hygraph = new GraphQLClient(HYGRAPH_URL, {
			headers: { Authorization: `Bearer ${HYGRAPH_KEY}` }
		});

		// See mutations: https://hygraph.com/docs/api-reference/content-api/mutations
		const mutation = gql`
			mutation upsertQuote($id: ID!, $text: String!, $author: String!) {
				upsertQuote(
					where: { id: $id }
					upsert: {
						create: { text: $text, author: $author }
						update: { text: $text, author: $author }
					}
				) {
					id
					text
					author
				}
			}
		`;
		const vars = {
			id: quoteId,
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
		const pubVars = { id: data.upsertQuote.id };
		const pubData = await hygraph.request(publication, pubVars);

		return pubData;
	}
};

// Load the quotes from hygraph
export async function load() {
	const hygraph = new GraphQLClient(HYGRAPH_URL, {
		headers: { Authorization: `Bearer ${HYGRAPH_KEY}` }
	});

	const query = gql`
    query getQuotes() {
      quotes(last: 100, orderBy: createdAt_DESC) {
        id
        text
        author
      }
    }
  `;

	const data = await hygraph.request(query);
	return data;
}
