<script>
	import { page } from '$app/stores';
	import '../../src/app.scss';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
</script>

<Header />

<div class="std-spacing max-width">
	<main>
		<h4>
			{$page.url.pathname}
		</h4>

		<slot />
	</main>
</div>

<Footer />

<style lang="scss">
	h4 {
		margin-top: 0.25rem;
		margin-bottom: 0.5rem;
	}
</style>
