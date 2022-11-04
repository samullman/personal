<script>
	import Lazy from 'svelte-lazy';
</script>

<svelte:head>
	<title>404 Not Found</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>404 Not Found</h1>

<Lazy height={400} fadeOption={{ delay: 0, duration: 50 }}>
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

	.wallet-grid {
		height: 600px;
	}

	.logo-grid {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2rem;

		img {
			@media screen and (max-width: 500px) {
				max-width: 100px;
			}

			@media screen and (min-width: $breakpoint) {
				max-width: 80px;
			}

			cursor: pointer;
			transition: all 0.2s ease;
			object-fit: contain;

			&:hover {
				transform: scale(1.04);
				opacity: 0.9;
			}

			&:active {
				transform: scale(0.94);
				opacity: 1;
			}
		}
	}

	h2,
	h3 {
		font-size: 1.5rem;
		text-align: center;
		text-transform: uppercase;
	}

	.title {
		font-size: 1.2rem;
	}

	.name {
		font-size: 1.14rem;
	}

	.title-img {
		width: 8rem;
		height: 8rem;
		object-fit: cover;
		border-radius: 50%;
		margin: 1.2rem auto;
		display: block;
	}

	img.main {
		max-height: 400px;
	}
	.breaker-img {
		position: relative;
		max-height: 400px;
		max-width: 800px;
		margin: 2rem auto;
		display: block;
	}
</style>
