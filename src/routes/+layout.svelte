<script>
	import '../../src/app.scss';
	import Header from '../components/header.svelte';
	import { page } from '$app/stores';
</script>

<h1>
	{$page.url.host}
</h1>

<main>
	<div class="page">
		<slot />
	</div>
</main>

<hr />
<div>{$page.url.host}</div>

<Header />

<style lang="scss">
	h1 {
		text-align: center;
	}

	nav {
		display: flex;
		gap: 0.5rem;
		margin: 1rem 0rem;

		a {
			color: #3a3a3a;
			transition: color 0.2s ease;
		}

		justify-content: center;
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

	.page {
		padding-top: 1rem;
		max-width: 80rem;
		width: 100%;
		margin: 0 auto;
		user-select: none;
	}

	.forms {
		background: $dark-cyan;
		margin-top: 2rem;
		padding: 1.5rem;
		text-align: center;

		@media screen and (min-width: $breakpoint) {
			padding: 2rem;
		}

		h2 {
			color: white;
		}

		button {
			font-size: 1.5rem;
			padding: 1rem 2rem;
		}
	}

	:global(.dark-mode) .forms {
		h2 {
			color: $dark;
		}
		background: $cyan;
	}

	hr {
		margin: 2rem 0 1rem 0;
	}
</style>
