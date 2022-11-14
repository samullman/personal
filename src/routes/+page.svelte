<script>
	import Lazy from 'svelte-lazy';

	import LazyImage from '../components/lazy-image.svelte';

	import links from '../data/links.json';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>Peace of mind.</h1>

<h3>Sitemap:</h3>

<ul>
	{#each links as link}
		<li>
			<a href={link.url} title={link.title}>
				{link.title}
			</a>
		</li>
	{/each}
</ul>

<div class="image-styles">
	<LazyImage src="/hero.jpeg" alt="Galaxy" />
</div>

<br />

<style lang="scss">
	ul {
		font-size: 1.12rem;
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}
	.image-styles {
		position: relative;
		max-height: 400px;
		max-width: 800px;
		margin-top: 2rem;
		margin-bottom: 1rem;
		display: block;
	}

	.icon {
		width: 0.8rem;
		position: relative;
		top: 0.1rem;
		left: 0.12rem;
	}
</style>
