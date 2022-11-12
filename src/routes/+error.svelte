<script>
	import Lazy from 'svelte-lazy';
</script>

<svelte:head>
	<title>404: Not Found</title>

	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>404: Not Found</h1>

<Lazy height={140} fadeOption={{ delay: 0, duration: 50 }}>
	<img src="/flower.png" alt="Flower" />
</Lazy>

<div class="page-buttons">
	<a href="/">
		<button> Home </button>
	</a>

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

	img {
		width: 120px;
		display: block;
		margin: 2rem auto;
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
