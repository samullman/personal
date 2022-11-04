<script>
	import Lazy from 'svelte-lazy';

	const socials = [
		{
			title: 'Calendly',
			target: 'https://www.calendly.com/samullman/',
			image: '/calendly.png'
		},
		{
			title: 'LinkedIn',
			target: 'https://www.linkedin.com/in/samullman/',
			image: '/linkedin.png'
		},

		{
			title: 'Github',
			target: 'https://www.github.com/samullman/',
			image: '/github.png'
		}
	];
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>About</h1>

<Lazy height={400} fadeOption={{ delay: 0, duration: 50 }}>
	<img class="rounded breaker-img" src="/forrest.jpeg" alt="Forrest" />
</Lazy>

<p class="title">
	My name is Sam Ullman. I am interested in health, frequency, and the pursuit of true knowledge.
</p>

<p class="title">I am currently based in Austin, TX.</p>

<br />

<div class="logo-grid">
	{#each socials as item}
		<a href={item.target} target="_blank">
			<img src={item.image} title={item.title} />
		</a>
	{/each}
</div>

<br />

<style lang="scss">
	h1 {
		text-align: center;
		font-size: 1.5rem;
		font-weight: 400;
		margin: 1rem;
	}

	p {
		text-align: center;
		max-width: $breakpoint;
		margin: 1rem auto;
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

	.breaker-img {
		max-height: 400px;
		max-width: 800px;
		margin: 2rem auto;
		display: block;
	}
</style>
