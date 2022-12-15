<script>
	import { page } from '$app/stores';
	import '../../src/app.scss';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	function linkify2(url) {
		let foo = url.split('/').slice(1);
		let arr = [];

		foo.forEach((el, idx) => {
			arr.push({
				title: el,
				url: el
			});
		});

		return arr;
	}

	function linkify(url) {
		return url;
	}
</script>

<Header />

<div class="std-spacing max-width">
	<main>
		<h4>
			<!-- {#each linkify() as { title, url }}
				<span>
					{'/'}
				</span>

				<a href={url}>
					{title}
				</a>
			{/each} -->
			{linkify($page.url.pathname)}
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
