<script>
	import Lazy from 'svelte-lazy';

	import LazyImage from '../components/lazy-image.svelte';

	const links = [
		{
			url: '/',
			title: 'Home'
		},

		{
			url: '/portfolio',
			title: 'Portfolio'
		},

		{
			url: '/samples',
			title: 'Samples'
		},

		{
			url: '/about',
			title: 'About'
		},

		{
			url: '/payments',
			title: 'Payments'
		},

		{
			url: '/resources',
			title: 'Resources'
		},

		{
			url: '/contact',
			title: 'Contact'
		},

		{
			url: '/book',
			title: 'Book'
		}
	];
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
		gap: 0.15rem;
	}
	.image-styles {
		position: relative;
		max-height: 400px;
		max-width: 800px;
		margin-top: 2rem;
		margin-bottom: 1rem;
		display: block;
	}
</style>
