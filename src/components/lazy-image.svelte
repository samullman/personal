<script lang="ts">
	import Lazy from 'svelte-lazy';
	export let src: string;
	export let alt: string;
	export let height: number = 400;
</script>

<div class="lazy-img">
	<Lazy {height} fadeOption={{ delay: 0, duration: 250 }}>
		<img class="lazy-image" {src} {alt} />
	</Lazy>
</div>

<style lang="scss">
	.lazy-img {
		max-height: 90vh;
	}

	img {
		max-width: 100%;
		max-height: 88vh;
		margin: 0.5rem auto;
		border-radius: 0.2rem;
	}
</style>
