<script>
	import Lazy from 'svelte-lazy';
	import wallet from './tokens.json';

	console.log(wallet[0]);
</script>

<svelte:head>
	<title>Addresses</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>Addresses</h1>

<br />

<div class="logo-grid">
	{#each wallet as item}
		<div class="item">
			<a href={'/addresses/' + item.slug} class="cancel-background">
				<img src={'/tokens' + item.logoSrc} alt={item.title} />

				<div>
					{item.title}
				</div>
			</a>
		</div>
	{/each}
</div>

<br />

<style lang="scss">
	.logo-grid {
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		gap: 4rem;

		.item {
			cursor: pointer;
			transition: all 0.2s ease;
			object-fit: contain;
			text-align: center;

			&:hover {
				transform: scale(1.04);
				opacity: 0.9;

				a {
					color: inherit !important;
				}
			}

			&:active {
				transform: scale(0.94);
				opacity: 1;
			}
		}

		img {
			margin-bottom: 0.4rem;

			@media screen and (max-width: 500px) {
				max-width: 200px;
			}

			@media screen and (min-width: $breakpoint) {
				max-width: 100px;
			}
		}
	}
</style>
