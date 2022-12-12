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
	My name is Sam Ullman. I live in <a href="https://goo.gl/maps/fr29rLrDqvXRUSsx5" target="_blank"
		>Austin, TX</a
	>. I have 7 years experience building Web Applications and a background in Biology and Economics.
</p>

<p>
	I'm available to help individuals, venture, and organizations build and scale their offerings.
</p>

<p><a href="/contact">Let's build together</a>.</p>

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
