<script>
	import { page } from '$app/stores';
	import links from './header.json';
	import Drawer from './drawer.svelte';
</script>

<header class="max-width std-spacing">
	<div>
		<a href="/">{$page.url.host}</a>
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
		display: flex;
		justify-items: center;
		justify-content: space-between;

		a {
			color: inherit;

			&:hover {
				color: white;
			}
		}
	}

	nav {
		ul {
			display: flex;
			flex-direction: row;
			gap: 1.5rem;
			padding-left: 0;
			list-style: none;
			margin: 0;

			@media screen and (max-width: $breakpoint) {
				display: none;
			}
		}
	}
</style>
