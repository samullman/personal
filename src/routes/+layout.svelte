<script>
	import '../../src/app.scss';
	import Header from '../components/header.svelte';
	import { page } from '$app/stores';
</script>

<header>
	<a href="/">
		{$page.url.host}
	</a>
</header>

<main>
	<div class="page">
		<slot />
	</div>
</main>

<footer>
	<hr />

	<div class="built-with">
		Built with <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a> 🤯
	</div>
	<div>
		<a href="/" sveltekit:prefetch>
			{$page.url.host}
		</a>
	</div>
</footer>

<Header />

<style lang="scss">
	header {
		font-size: 1.2rem;
		max-width: 42rem;
		margin: 0 auto;
	}

	footer {
		font-size: 1.2rem;
		max-width: 50rem;
		margin: 0 auto;
	}

	.built-with {
		float: right;
	}

	.page {
		padding-top: 1rem;
		max-width: 42rem;
		width: 100%;
		margin: 0 auto;
	}

	hr {
		margin: 2rem 0 1rem 0;
	}
</style>
