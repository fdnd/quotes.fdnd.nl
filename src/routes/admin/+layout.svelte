<script>
	import { Wrapper } from '@fdnd/components';
	import { signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';

	let user = $page.data.session.user;
</script>

<aside>
	<img src={user?.image ?? '/placeholder.jpg'} alt="Signed in as {user?.name ?? 'User'}" />
	<button on:click={() => signOut()}><span>Sign out</span></button>
</aside>

<Wrapper>
	<main>
		<slot />
	</main>
</Wrapper>

<style>
	aside {
		position: absolute;
		top: 5rem;
		right: 1rem;
		width: 4rem;
		display: flex;
		flex-flow: column nowrap;
	}
	aside img {
		width: 100%;
		border-radius: 50%;
	}
	button {
		position: absolute;
		width: 100%;
		height: 100%;
		line-height: 3rem;
		font-size: 3rem;
		font-weight: bold;
		color: var(--c-blue);
		background: transparent;
		border: 0;
	}
	button span {
		display: none;
	}
	button:hover::before {
		content: '⏻';
	}
</style>
