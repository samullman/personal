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
	> and been building web applications for 7 years.
</p>

<p><a href="/contact">Let's build the future together</a>.</p>

<style lang="scss">
	p {
		max-width: 800px;
	}

	.profile-img {
		width: 12rem;
		height: 12rem;
		object-fit: cover;
		border-radius: 8rem;
		overflow: hidden;
		margin-bottom: 1rem;
	}
</style>
