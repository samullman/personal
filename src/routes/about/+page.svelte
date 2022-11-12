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

<div class="profile-img">
	<img src="/crossed-arms.png" alt="Sam Ullman" />
</div>

<p class="title">
	My name is Sam Ullman. I am a Fullstack JavaScript developer with an eye for performance and
	design. I have implemented a wide array of tooling ranging from database integrations, content
	management systems, payment processing, and web app functionality.
</p>

<p class="title">
	<a href="/portfolio">
		<button> Portfolio </button>
	</a>
</p>

<p class="title">
	I have worked for Fortune 500 companies, entreprenuers, and in Web3 remote teams (Near, Solana,
	and more) to build out custom UIs with the latest web technologies. One thing is for sure and that
	is we will use the most robust web assets to secure your digital footprint.
</p>

<p class="title">Based in Austin, TX, USA.</p>

<br />

<div class="logo-grid">
	{#each socials as item}
		<a href={item.target} target="_blank">
			<img src={item.image} alt={item.title} />
		</a>
	{/each}
</div>

<br />

<p class="title">Health, frequency, and the pursuit of knowledge!</p>

<style lang="scss">
	h1 {
		text-align: center;
		font-size: 1.5rem;
		font-weight: 400;
		margin: 1rem;
	}

	p {
		text-align: center;
		max-width: 40rem;
		margin: 1rem auto;

		button {
			font-size: 1.2rem;
			padding: 0.5rem 1rem;
			margin: 0.25rem;
		}
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

	.title {
		font-size: 1.2rem;
	}

	.breaker-img {
		max-height: 400px;
		max-width: 800px;
		margin: 2rem auto;
		display: block;
	}

	.profile-img {
		text-align: center;

		img {
			width: 10rem;
			height: 10rem;
			border-radius: 50%;
		}
	}
</style>
