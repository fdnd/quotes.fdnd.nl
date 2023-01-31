<script>
	import { Footer, Wrapper, Branding, Header, Nav } from '@fdnd/components';

	const nav = {
		Menu: {
			Quotes: '/',
			QuoteAPIv1: '/api/v1/quotes'
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

	<main>
		<slot />
	</main>

	<Wrapper>
		<Footer />
	</Wrapper>
</Branding>

<style>
	main {
		container-type: inline-size;
	}
</style>
