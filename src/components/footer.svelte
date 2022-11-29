<script>
	import { page } from '$app/stores';
</script>

<footer class="max-width std-spacing">
	<div>
		<a href="/" data-sveltekit-prefetch>
			{$page.url.host}
		</a>
	</div>

	<div class="built-with">
		Built with <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a> 🤯
	</div>
</footer>

<style lang="scss">
	footer {
		margin-top: 4rem;
		margin-bottom: 1rem;
		display: flex;
		justify-content: space-between;

		@media screen and (max-width: $breakpoint) {
			flex-direction: column;
			justify-content: left;
		}
	}
</style>
