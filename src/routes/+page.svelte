<script>
	export let data;
</script>

<div class="skip-to-content">
	<a href="#first">↓</a>
</div>

{#each data.quotes as quote, index}
	<article id={index === 0 ? 'first' : null}>
		<blockquote>
			{quote.text}
			<cite>{quote.author}</cite>
		</blockquote>
		<a href="/admin/issue/?a{quote.id}" class="link-issue" alt="Report an issue with this quote."
			><span>issue</span></a
		>
	</article>
{/each}

<style>
	.skip-to-content {
		margin: 0 auto;
		background: var(--c-green);
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		line-height: 3rem;
		text-align: center;
		color: var(--c-blue);
		font-size: 2rem;
	}
	.skip-to-content a {
		text-decoration: none;
	}
	h1 {
		font-size: 2.8rem;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}
	article {
		position: sticky;
		top: 0;
		margin: 0;
		height: 100vh;
		width: 100vw;
		scroll-snap-align: center;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-content: flex-start;
	}

	blockquote {
		position: relative;
		margin: 0 var(--component-padding);
		padding: var(--component-padding);
		font-size: 3rem;
		max-width: 70vw;
		border-radius: var(--rounded);
	}

	cite {
		position: absolute;
		font-size: 1.5rem;
		height: 3rem;
		line-height: 3rem;
		padding: 0 var(--component-padding);
		display: block;
		bottom: -5rem;
		border: 1px solid currentColor;
		border-radius: var(--pilled);
		left: 0;
	}
	article:nth-of-type(1n) {
		background: var(--c-green);
	}
	article:nth-of-type(1n) blockquote {
		background-color: var(--c-blue);
		color: var(--c-green);
	}
	article:nth-of-type(1n) cite {
		color: var(--c-blue);
	}
	article:nth-of-type(2n) {
		background: var(--c-purple);
	}
	article:nth-of-type(2n) blockquote {
		background-color: var(--c-blue);
		color: var(--c-purple);
	}
	article:nth-of-type(2n) cite {
		color: var(--c-blue);
	}
	article:nth-of-type(3n) {
		background: var(--c-light);
	}
	article:nth-of-type(3n) blockquote {
		background-color: var(--c-blue);
		color: var(--c-white);
	}
	article:nth-of-type(3n) cite {
		color: var(--c-blue);
	}
	article:nth-of-type(4n) {
		background: var(--c-blue);
	}
	article:nth-of-type(4n) blockquote {
		background-color: var(--c-light);
		color: var(--c-blue);
	}
	article:nth-of-type(4n) cite {
		color: var(--c-light);
	}

	.link-issue {
		/* margin: var(--component-padding); */
		align-self: flex-end;
		/* justify-self: ; */
	}
	.link-issue span {
		display: none;
	}
	.link-issue::before {
		content: '';
		display: block;
		/* background: url('/issue-draft-24.svg'); */
		background-position: center;
		background-size: contain;
		width: 1.8rem;
		height: 1.8rem;
	}
</style>
