<script>
	// export let data;
	export let form;
	console.log(form);
</script>

{#if form?.succes}
	<p>Nieuwe quote succesvol toegevoegd! Nog een? Vul dan weer het formulier in.</p>
{:else}
	<p>Voeg een nieuwe quote toe door het formulier in te vullen.</p>
{/if}

<form method="post">
	<label for="text">Nieuwe Quote</label>
	<textarea name="text" id="text" cols="30" rows="10" />

	<label for="author">Auteur</label>
	<input type="text" name="author" id="author" />

	<label for="submit" />
	<input type="submit" value="Versturen" />
</form>

<style>
	form {
		max-width: 30rem;
	}
	label {
		display: block;
	}
</style>
