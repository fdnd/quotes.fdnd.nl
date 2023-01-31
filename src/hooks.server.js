import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';

import GitHub from '@auth/core/providers/github';
import { SvelteKitAuth } from '@auth/sveltekit';
import { redirect } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

// Use github as authentication provider
const authentication = SvelteKitAuth({
	providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })]
});

// augmenting it
export const getSession = async (request) => {
	const { user } = await authentication.getSession(request);
	console.log('test');
	return { user };
};

// Protect routes under /admin, automagically redirect to GitHub login
const authorization = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/admin')) {
		const session = await event.locals.getSession();
		if (!session) throw redirect(303, '/auth/signin');
	}
	// Continue rendering
	return await resolve(event, { transformPageChunk: ({ html }) => html });
};

// Preflight options call returns 200-ok for our API to function as a backend
const options = async ({ event, resolve }) => {
	if (event.request.method !== 'OPTIONS') {
		return await resolve(event);
	}
	return new Response(new Blob(), { status: 200 });
};

// First handle authentication, then authorization, then options
// Each function acts as a middleware, receiving the request handle
// And returning a handle which gets passed to the next function
export const handle = sequence(authentication, authorization, options);
