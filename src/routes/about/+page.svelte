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

<h3 class="title">
	<b> Health, frequency, and growth! </b>
</h3>
<p class="title">
	My name is Sam Ullman and I'm a autodidact living in <a
		href="https://goo.gl/maps/pPS75NfQHdm7QTcz6"
		target="_blank">Austin, TX</a
	>. Originally from
	<a href="https://goo.gl/maps/ZgB2YxeobpSsr1Qs9" target="_blank">Portland, OR</a>, I went to school
	in Southern California at
	<a href="https://www.cmc.edu/" target="_blank">Claremont McKenna College</a> where I got a B.A. in
	Science & Management (Biotechnology).
</p>

<br />

<LazyImage src="/forrest.jpeg" alt="Forrest" />

<br />

<p class="title">
	I have since been developing <a href="/portfolio" title="Portfolio">Full-stack Web Applications</a
	> for 8 years and am currently working with individuals and organizations to grow out their bottom
	line.
</p>

<p class="title">
	In the past, I've worked with Fortune 500 clients, for distributed teams and creative agencies.
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
