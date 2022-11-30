<script>
	import links from "$lib/data/links.json";
	import Drawer from './drawer.svelte';
</script>

<header class="max-width std-spacing">
	<div>
		<strong>
			<a href="/"> Sam Ullman ↔ Web Developer </a>
		</strong>
	</div>
	<div>
		<nav>
			<ul>
				{#each links as link}
					<li>
						<a href={link.url} title={link.title}>
							{link.title}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<Drawer />

<style lang="scss">
	header {
		padding-bottom: 0;
	}
	nav {
		ul {
			display: flex;
			flex-direction: row;
			gap: 1.5rem;
			padding-left: 0;
			list-style: none;

			@media screen and (max-width: $breakpoint) {
				display: none;
			}
		}

	}
</style>
