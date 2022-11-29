<script>
	import '../../src/app.scss';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
</script>

<Header />

<div class="std-spacing max-width">
	<main>
		<slot />
	</main>
</div>

<Footer />

<style lang="scss">
</style>
