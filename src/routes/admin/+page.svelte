<script>
	export let data;

	function truncateString(str, n) {
		if (str.length > n) {
			return str.substring(0, n) + '...';
		} else {
			return str;
		}
	}

	let selected;
	let author = '';
	let text = '';
	let action = 'Add quote';

	function populate() {
		if (selected != 'null') {
			let quote = data.quotes.find((quote) => quote.id === selected) || null;
			author = quote.author;
			text = quote.text;
			action = 'Update quote';
		} else {
			author = text = '';
			action = 'Add quote';
		}
	}
</script>

<section>
	<form method="post">
		<label for="quoteId">Change an existing quote?</label>
		<select name="quoteId" id="quoteId" bind:value={selected} on:change={populate}>
			<option value="null">No thanks i'll add a new one...</option>
			{#each data.quotes as quote}
				<option value={quote.id}
					>{truncateString(quote.text, 50 - quote.author.length)} - {quote.author}</option
				>
			{/each}
		</select>

		<label for="text">Please add/edit your quote...</label>
		<textarea
			name="text"
			id="text"
			cols="30"
			rows="10"
			bind:value={text}
			placeholder="Type right here..."
		/>

		<label for="author">Really? Who said that?</label>
		<input
			type="text"
			name="author"
			id="author"
			bind:value={author}
			placeholder="Authors full name here..."
		/>

		<label for="submit" />
		<input type="submit" bind:value={action} />
	</form>
</section>

<style>
	section {
		max-width: 50rem;
		background: var(--c-green);
		color: var(--c-blue);
		padding: var(--component-padding);
		border-radius: var(--rounded);
	}
	label {
		margin: 0.2rem 0;
		display: block;
		font-size: 1.6rem;
	}
	select,
	textarea,
	input[type='text'],
	input[type='submit'] {
		font-family: monospace;
		padding: var(--component-padding);
		width: 100%;
		font-size: 2rem;
		background-color: #fff4;
		border: 1px solid currentColor;
		border-radius: var(--rounded);
		color: var(--c-blue);
	}
	textarea {
		height: 8em;
	}
	textarea:focus,
	input[type='text']:focus {
		outline: none !important;
		box-shadow: 0 0 10px var(--c-blue);
	}
	input[type='text'] {
		height: 2em;
	}
	input[type='submit'] {
		margin-top: 1rem;
		background: var(--c-blue);
		color: var(--c-green);
		border-radius: var(--pilled);
	}
</style>
