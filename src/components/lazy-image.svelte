<script>
	import Lazy from 'svelte-lazy';
	export let src;
	export let alt;
	export let height = 400;
</script>

<Lazy {height} fadeOption={{ delay: 0, duration: 250 }}>
	<img class="lazy-image rounded" {src} {alt} />
</Lazy>

<style lang="scss">
	img {
		max-height: 400px;
		max-width: 100%;
	}
</style>
