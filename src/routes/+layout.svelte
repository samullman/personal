<script>
	import '../../src/app.scss';
	import Header from '../components/header.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import pageViews from '../stores/page';
	import { beforeUpdate } from 'svelte';
	import links from '../data/links.json';

	$pageViews;

	beforeUpdate(() => {
		$pageViews[$page.url.pathname] = true;
		pageViews.set($pageViews);
	});
</script>

<header>
	<strong>
		<a href="/">
			<!-- {$page.url.host} -->
			Sam Ullman ↔ Web Developer
		</a>
	</strong>
</header>

<nav>
	<ul>
		{#each links as link}
			<li>
				<a href={link.url} title={link.title}>
					{link.title}
				</a>
			</li>
		{/each}
	</ul>
</nav>

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
		<a href="/" data-sveltekit-prefetch>
			{$page.url.host}
		</a>
	</div>
</footer>

<Header />

<style lang="scss">
	header,
	nav {
		ul {
			display: flex;
			flex-direction: row;
			gap: 1.5rem;
			padding-left: 0;
			list-style: none;

			@media screen and (max-width: $breakpoint) {
				display: none;
			}
		}

		max-width: 42rem;
		margin: 0 auto;
	}

	footer {
		max-width: 42rem;
		margin: 0 auto;
	}

	.built-with {
		float: right;
	}

	.page {
		max-width: 42rem;
		width: 100%;
		margin: 0 auto;
	}

	hr {
		margin: 2rem 0 1rem 0;
	}
</style>
