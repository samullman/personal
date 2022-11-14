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

<p class="title">Health, frequency, and growth!</p>
<p class="title">My name is Sam Ullman and I'm a creative living in Austin, TX.</p>

<br />

<LazyImage src="/forrest.jpeg" alt="Forrest" />

<br />

<p class="title">
	I have been developing Full-stack JavaScript applications for 7+ years and am now working with
	organizations to skyrocket their bottrom line.
</p>

<p class="title">
	In the past, I've worked for Fortune 500 clients, on remote teams, and for various creative
	agencies.
</p>

<p class="title">
	<a href="/contact" title="Contact">Let's work together</a>.
</p>

<br />

<div class="logo-grid">
	{#each socials as item}
		<a class="cancel-background" href={item.target} target="_blank">
			<img src={item.image} alt={item.title} />
		</a>
	{/each}
</div>

<style lang="scss">
	p {
		font-size: 1.1rem;
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
