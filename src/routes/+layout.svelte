<script>
	import { Footer, Wrapper, Branding, Header, Nav } from '@fdnd/components';

	const nav = {
		Menu: {
			Quotes: '/',
			QuoteAPIv1: '/api/v1/quotes',
			// Admin: '/admin'
		}
	};
</script>

<svelte:head>
	<title>FDND Quotes</title>
</svelte:head>

<Branding>
	<Wrapper>
		<Nav data={nav} />
		<Header
			title="Quotes"
			punchline="In need of a frontend quote? These quotes are used in the frontend design and development courses of the two year associate degree programme Frontend Design & Development, at the Amsterdam University of Applied Science."
		/>
	</Wrapper>

	<slot />

	<Wrapper>
		<Footer />
	</Wrapper>
</Branding>

<style>
	:global(body) {
		scroll-snap-type: y proximity;
		background: var(--c-blue);
	}
	:global(div :has(footer)) {
		padding-top: 4rem !important;
		padding-bottom: 2rem !important;
		margin-bottom: 0 !important;
		background: var(--c-blue);
	}
	:global(.branding:nth-last-of-type(2)) {
		margin-top: -2.1rem;
		background: var(--c-blue);
	}
</style>
