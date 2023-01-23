<script>
	export let data;
</script>

<a href="/new" class="link-new"><span>new</span></a>

{#each data.quotes as quote}
	<article>
		<blockquote>
			{quote.text}
			<cite>{quote.author}</cite>
		</blockquote>
		<a href="/edit/{quote.id}" class="link-edit"><span>edit</span></a>
		<a href="/delete/{quote.id}" class="link-delete"><span>delete</span></a>
	</article>
{/each}

<style>
	h1 {
		font-size: 2.8rem;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	blockquote {
		margin: 0;
		font-size: 2rem;
		max-width: 40rem;
	}

	article {
		margin-bottom: 2rem;
	}

	.link-new,
	.link-edit,
	.link-delete {
		display: inline-block;
		width: 5rem;
		text-decoration: none;
		background: silver;
		border: 1px solid black;
		border-radius: 0.2rem;
		line-height: 1.5rem;
		text-align: center;
		color: black;
	}

	.link-new:hover,
	.link-new:active,
	.link-new:focus,
	.link-edit:hover,
	.link-edit:active,
	.link-edit:focus,
	.link-delete:hover,
	.link-delete:active,
	.link-delete:focus {
		font-weight: bold;
	}
</style>
