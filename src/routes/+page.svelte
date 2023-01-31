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
		margin-bottom: 2rem;
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

	article {
		position: sticky;
		top: 0;
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-content: flex-start;
	}

	blockquote {
		position: relative;
		margin: 0 var(--component-padding);
		padding: var(--component-padding);
		font-size: clamp(1rem, 4vw, 3.8rem);
		max-width: 70vw;
		border-radius: var(--rounded);
	}

	cite {
		position: absolute;
		font-size: clamp(1rem, 2vw, 1.6rem);
		height: 3rem;
		line-height: 3rem;
		padding: 0 var(--component-padding);
		display: block;
		bottom: -4rem;
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

	/* @media (min-width: 30rem) {
		blockquote {
			background: red !important;
			font-size: 1.4rem;
		}
		cite {
			font-size: 1.1rem;
		}
	} */
</style>
