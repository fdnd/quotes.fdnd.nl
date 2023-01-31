import { GraphQLClient, gql } from 'graphql-request';
import { HYGRAPH_KEY, HYGRAPH_URL } from '$env/static/private';

const responseInit = { headers: { 'cache-control': 'public, max-age=3600' } };
const hygraph = new GraphQLClient(HYGRAPH_URL, {
	headers: { Authorization: `Bearer ${HYGRAPH_KEY}` }
});

// adhv. https://www.jefmeijvis.com/blog/006-sveltekit-api-endpoints?ref=redirect

export async function GET({ url }) {
	// let filter = url.searchParams.get('filter') ?? 'default';

	const query = gql`
    query getQuotes() {
      quotes() {
        id
        text
        author
      }
    }
  `;
	const data = await hygraph.request(query);

	return new Response(JSON.stringify(data), responseInit);
}

export async function POST({ request }) {
	const request_data = await request.json();
	let firstName = request_data.firstName;
	let lastName = request_data.lastName;
	return new Response('Hello ' + firstName + ' ' + lastName);
}
