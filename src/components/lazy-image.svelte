<script lang="ts">
	import Lazy from 'svelte-lazy';
	export let src: string;
	export let alt: string;
	export let height: number = 400;
</script>

<Lazy {height} fadeOption={{ delay: 0, duration: 250 }}>
	<img class="lazy-image rounded" {src} {alt} />
</Lazy>

<style lang="scss">
	img {
		max-height: 400px;
		max-width: 100%;
		margin: 0.5rem auto;
	}
</style>
