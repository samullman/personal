<script>
	import LazyImage from '../../components/lazy-image.svelte';

	const socials = [
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

<div class="profile-img">
	<LazyImage src="/crossed-arms.png" alt="Sam Ullman" />
</div>

<p>
	My name is Sam Ullman and I live in <a
		href="https://goo.gl/maps/fr29rLrDqvXRUSsx5"
		target="_blank">Austin, TX</a
	>.
</p>

<p>
	Currently, I am helping organizations and comapanies build out and scale their web infrastructure
	and reach.
</p>

<p>
	Whether you are global or local – I would love to help you grow your product from first launch and
	beyond.
</p>

<p>
	I started programming in 2015 at a coding bootcamp in San Francisco and have since learned
	Fullstack and Frontend Development with JavaSript and Typescript.
</p>

<br />

<br />

<div class="logo-grid">
	{#each socials as item}
		<a class="cancel-background" href={item.target} target="_blank">
			<img src={item.image} alt={item.title} preload />
		</a>
	{/each}
</div>

<style lang="scss">
	p {
		font-size: 1.1rem;
	}

	.profile-img {
		width: 12rem;
		height: 12rem;
		border-radius: 50%;
		overflow: hidden;
		margin-bottom: 1.5rem;
	}

	.logo-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;

		img {
			@media screen and (max-width: $breakpoint) {
				max-width: 50px;
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
</style>
