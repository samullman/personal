<script>
	import '../../src/app.scss';
	import Header from '../components/header.svelte';
	import { page } from '$app/stores';
</script>

<div class="title">
	<a href="/">
		{$page.url.host}
	</a>
</div>

<main>
	<div class="page">
		<slot />
	</div>
</main>

<hr />

<div class="built-with">
	Built with <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a> ✌️
</div>
<div>{$page.url.host}</div>

<Header />

<style lang="scss">
	.title {
		font-size: 1.2rem;
		text-align: center;

		a {
			color: inherit;
			text-decoration: none;
		}
	}

	.built-with {
		float: right;
	}

	.page {
		padding-top: 1rem;
		max-width: 80rem;
		width: 100%;
		margin: 0 auto;
	}

	hr {
		margin: 2rem 0 1rem 0;
	}
</style>
