<script>
	import { page } from '$app/stores';
	import { each } from 'svelte/internal';

	import Lazy from 'svelte-lazy';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>Startup & Enterprise Consulting</h1>

<Lazy height={400} fadeOption={{ delay: 0, duration: 50 }}>
	<img class="breaker-img rounded" src="/hero.jpeg" alt="Galaxy" />
</Lazy>

<div class="page-buttons">
	<a href="/about">
		<button> About </button>
	</a>

	<a href="/payments">
		<button> Payments </button>
	</a>

	<a href="/portfolio">
		<button> Portfolio </button>
	</a>

	<a href="/samples">
		<button> Samples </button>
	</a>
</div>

<br />

<style lang="scss">
	h1 {
		text-align: center;
		font-size: 1.5rem;
		font-weight: 400;
		margin: 1rem;
	}

	.page-buttons {
		text-align: center;

		button {
			font-size: 1.2rem;
			padding: 0.5rem 1rem;
			margin: 0.25rem;
		}
	}

	.breaker-img {
		position: relative;
		max-height: 400px;
		max-width: 800px;
		margin: 2rem auto;
		display: block;
	}
</style>
