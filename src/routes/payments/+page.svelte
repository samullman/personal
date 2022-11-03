<script>
	const wallet = [
		{
			title: 'Ethereum',
			target: '/eth',
			image: '/eth.png'
		},

		{
			title: 'Bitcoin',
			target: 'https://www.calendly.com/samullman/',
			image: '/bitcoin.png'
		},

		{
			title: 'Solana',
			target: 'https://www.calendly.com/samullman/',
			image: '/sol.png'
		},

		{
			title: 'Near',
			target: 'https://www.calendly.com/samullman/',
			image: '/near.png'
		},

		{
			title: 'Doge',
			target: 'https://www.calendly.com/samullman/',
			image: '/doge.png'
		},

		{
			title: 'Avalance',
			target: 'https://www.calendly.com/samullman/',
			image: '/avax.png'
		},

		{
			title: 'Tezos',
			target: 'https://www.calendly.com/samullman/',
			image: '/tezos.png'
		},

		{
			title: 'Celo',
			target: '/celo',
			image: '/celo.png'
		}
	];
</script>

<svelte:head>
	<title>Payments</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<img class="rounded breaker-img" src="/coins.jpeg" alt="Coins" />

<br />

<div class="logo-grid">
	{#each wallet as item}
		<a href={'/payment' + item.target}>
			<img src={item.image} title={item.title} />
		</a>
	{/each}
</div>

<br />

<style lang="scss">
	.logo-grid {
		max-width: 800px;
		margin: 0 auto;
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

	.breaker-img {
		max-height: 400px;
		max-width: 800px;
		margin: 2rem auto;
		display: block;
	}
</style>
