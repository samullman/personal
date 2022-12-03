<script>
	import Lazy from 'svelte-lazy';
	import wallet from './tokens.json';

	console.log(wallet[0]);
</script>

<svelte:head>
	<title>Wallets</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>Wallets</h1>

<br />

<div class="logo-grid">
	{#each wallet as item}
		<a href={'/wallets/' + item.slug} class="cancel-background">
			<img src={'/tokens' + item.logoSrc} alt={item.title} />
		</a>
	{/each}
</div>

<br />

<style lang="scss">
	.logo-grid {
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		gap: 4rem;

		img {
			@media screen and (max-width: 500px) {
				max-width: 200px;
			}

			@media screen and (min-width: $breakpoint) {
				max-width: 100px;
			}

			cursor: pointer;
			transition: all 0.2s ease;
			object-fit: contain;

			&:hover {
				transform: scale(1.04);
				opacity: 0.9;
			}

			&:active {
				transform: scale(0.94);
				opacity: 1;
			}
		}
	}

</style>
