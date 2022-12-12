<script>
	import { page } from '$app/stores';
	import LazyImage from '../components/lazy-image.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>Home</h1>

<LazyImage src="/hero.jpeg" alt="Galaxy" />

<style lang="scss">
</style>
