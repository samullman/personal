<script>
	import { page } from '$app/stores';
	import LazyImage from '../../components/lazy-image.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>About</h1>
<div class="profile-img">
	<LazyImage src="/crossed-arms.png" alt="Sam Ullman" />
</div>

<p>
	currently, living in <a href="https://goo.gl/maps/fr29rLrDqvXRUSsx5" target="_blank">austin, tx</a
	>,
</p>

<p>i'm helping organizations build and scale their offerings.</p>

<p>let's build the <a href="/contact">future together</a>.</p>

<style lang="scss">
	.profile-img {
		width: 12rem;
		height: 12rem;
		object-fit: cover;
		border-radius: 2rem;
		overflow: hidden;
		margin-bottom: 1rem;
	}
</style>
