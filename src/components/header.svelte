<script>
	import { page } from '$app/stores';
	import links from './links.json';
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

				<li>
					<a
						class="cancel-background"
						href="https://github.com/samullman"
						target="_blank"
						title="Github"
					>
						<img src="/github.svg" alt="Github" />
					</a>
				</li>

				<li>
					<a
						class="cancel-background"
						href="https://linkedin.com/in/samullman"
						target="_blank"
						title="Github"
					>
						<img src="/linkedin.svg" alt="LinkedIn" />
					</a>
				</li>
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
		font-size: 1.05rem;

		a {
			color: inherit;

			&:hover {
				color: white;
			}
		}
	}

	img {
		height: 28.4px;
		width: 28.4px;
	}

	nav {
		ul {
			display: flex;
			flex-direction: row;
			gap: 1.5rem;
			padding-left: 0;
			list-style: none;
			margin: 0;
			justify-items: center;

			@media screen and (max-width: $header-breakpoint) {
				display: none;
			}
		}
	}
</style>
