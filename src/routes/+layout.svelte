<script>
	import { page } from '$app/stores';
	import '../../src/app.scss';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
</script>

<Header />

<div class="std-spacing max-width">
	<main>
		<h1>
			{$page.url.pathname}
		</h1>

		<slot />
	</main>
</div>

<Footer />

<style lang="scss">
</style>
