<script>
	import '../../src/app.scss';
	import Header from '../components/header.svelte';
</script>

<a href="/" preload>
	<img class="logo" src="/max-logo.png" alt="Massive Logo" />
</a>

<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/services">Services</a>
	<a href="/contact">Contact</a>
</nav>

<main>
	<div class="page">
		<slot />
	</div>
</main>

<hr />
<div>Massive Technologes, LLC</div>
<div>2022</div>

<Header />

<style lang="scss">
	nav {
		display: flex;
		gap: 0.5rem;
		margin: 1rem 0rem;

		a {
			color: #3a3a3a;
			transition: color 0.2s ease;
		}

		@media screen and (min-width: $breakpoint) {
			justify-content: center;
		}
	}

	:global(.dark-mode) nav a {
		color: #cacaca;
	}

	.logo {
		width: 10rem;
		margin-bottom: 1rem;
		display: block;

		@media screen and (min-width: $breakpoint) {
			margin: 0 auto;
			margin-bottom: 1rem;
		}
	}

	main {
		min-height: 60vh;
		display: flex;
		flex-direction: column;
	}

	.page {
		padding-top: 1rem;
		max-width: 40rem;
		margin: 0 auto;
	}

	hr {
		margin: 2rem 0 1rem 0;
	}
</style>
