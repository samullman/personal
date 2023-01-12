<script>
	import { page } from '$app/stores';
	import LazyImage from '../../components/lazy-image.svelte';
	import portfolio from './portfolio.json';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>About</h1>

<div class="profile-img">
	<LazyImage src="/avatar.png" alt="Sam Ullman" />
</div>

<div class="portfolio">
	{#each portfolio as { title, url }}
		<p class="item">
			<a href={url} {title} target="_blank">
				{title}
			</a>
		</p>
	{/each}
</div>

<style lang="scss">
	p {
		max-width: 800px;
	}

	.portfolio {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.profile-img {
		width: 12rem;
		height: 100%;
		object-fit: cover;
		overflow: hidden;
		margin-bottom: 1rem;
	}

	ul {
		list-style: none;
		padding-left: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
