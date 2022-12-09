<script>
	import { page } from '$app/stores';
	import LazyImage from '../components/lazy-image.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h2>Hello! My name is Sam...</h2>

<p>... helping you grow with systems you've already picked and ones you have not heard of yet.</p>

<LazyImage src="/hero.jpeg" alt="Galaxy" />

<style lang="scss">
	p {
		margin-top: 0;
		margin-bottom: 2rem;
	}
</style>
