<script>
	import Lazy from 'svelte-lazy';
	import { error } from '@sveltejs/kit';
	/** @type {import('./$types').PageData} */
	export let data;

	import wallet from '../tokens.json';

	const token = wallet.find((el) => el.slug == data.slug);

	if (!token) {
		throw error(404, 'Not found');
	}

	function copy() {
		navigator.clipboard
			.writeText(token.pubKey)
			.then(() => {
				alert('Copied!');
			})
			.catch((err) => {
				console.log(err);
				alert('Error!');
			});
	}
</script>

<svelte:head>
	<title>Payments | {token.title}</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>{token.title}</h1>

<br />

<div class="title-grid">
	<Lazy height={100} fadeOption={{ delay: 0, duration: 50 }}>
		<img class="logo" src={'/tokens' + token.logoSrc} alt={token.title + ' Logo'} />
	</Lazy>

	<div class="title">
		{token.symbol}
	</div>
</div>

<br />
<div>
	<Lazy height={300} fadeOption={{ delay: 0, duration: 50 }}>
		<img class="qr rounded" src={'/tokens' + token.qrSrc} alt={token.title + ' QR Code'} />
	</Lazy>
</div>

<br />

<div class="token">{token.pubKey}</div>

<br />

<div class="buttons">
	<button on:click={copy}> Copy </button>

	<a href={token.url} target="_blank" class="cancel-background">
		<button>Website</button>
	</a>

	<a href="/wallets">
		<button> {'<'} Wallets </button>
	</a>
</div>

<style lang="scss">
	.logo {
		width: 100px;
	}

	.title-grid {
		display: inline-flex;
		align-items: center;
		justify-items: center;
		gap: 1.75rem;

		.title {
			font-size: 2rem;
			font-weight: bold;
		}
	}

	.token {
		font-size: 1.3rem;
		margin: 0.15rem 0;
	}

	.qr {
		width: 300px;
	}

	.buttons {
		margin-top: 0.25rem;
	}
</style>
