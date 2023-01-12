<script>
	import LazyImage from '$components/lazy-image.svelte';
</script>

<svelte:head>
	<title>404: Not Found</title>

	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>404: Not Found</h1>

<LazyImage src="/hero.jpeg" alt="Galaxy" />

<style lang="scss">
	h1 {
		text-align: center;
		font-size: 1.5rem;
		font-weight: 400;
		margin: 1rem;
	}

	img {
		width: 200px;
		display: block;
		margin: 2rem auto;
		border-radius: 0.5rem;
	}

	.page-buttons {
		text-align: center;

		button {
			font-size: 1.2rem;
			padding: 0.5rem 1rem;
			margin: 0.25rem;
		}
	}
</style>
