<script>
	import Lazy from 'svelte-lazy';
	import { error } from '@sveltejs/kit';
	/** @type {import('./$types').PageData} */
	export let data;

	const tokens = {
		bitcoin: {
			pubKey: '1B4UKbmdesmwrPCNryCwJaXHa9WtJCER6M',
			title: 'Bitcoin',
			url: 'https://bitcoin.org/',
			logoSrc: '/bitcoin.png',
			qrSrc: '/bitcoin-qr.png'
		},

		ethereum: {
			pubKey: '0x4FAf81D1a9285b5D52A3E8B896945642b57C4134',
			title: 'Ethereum',
			url: 'https://ethereum.org/',
			logoSrc: '/eth.png',
			qrSrc: '/eth-qr.png'
		},

		celo: {
			pubKey: '0x36Bc0cCeb4b4833C0c8fC92d9e74f49695943737',
			title: 'Celo',
			url: 'https://celo.org/',
			logoSrc: '/celo.png',
			qrSrc: '/celo-qr.png'
		},

		solana: {
			pubKey: 'HBYwWygwci4mQ1FCbGh3YwkJaW6VshqTMSJe6SEJ186w',
			title: 'Solana',
			url: 'https://solana.org/',
			logoSrc: '/sol.png',
			qrSrc: '/sol-qr.png'
		},

		near: {
			pubKey: 'e5b872fd42d360202445dd67e4204f3cb1ee1e63ae4db76f63ec269ede237a29',
			title: 'Near',
			url: 'https://near.org/',
			logoSrc: '/near.png',
			qrSrc: '/near-qr.png'
		},

		doge: {
			pubKey: 'DGhQ1bWiknHFxe1iZwzWiz91H3dk2E8RHu',
			title: 'Doge',
			url: 'https://dogecoin.com/',
			logoSrc: '/doge.png',
			qrSrc: '/doge-qr.png'
		},

		avalanche: {
			pubKey: '0xeDa5C156989C9b0f7BC020aA07cAf01DCd491fa5',
			title: 'Avalanche',
			url: 'https://www.avax.network/',
			logoSrc: '/avax.png',
			qrSrc: '/avax-qr.png'
		}
	};

	const token = tokens[data.slug];

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

<div class="img-grid">
	<div>
		<a href={token.url} target="_blank">
			<Lazy height={100} fadeOption={{ delay: 0, duration: 50 }}>
				<img class="logo" src={'/tokens' + token.logoSrc} alt={token.title + ' Logo'} />
			</Lazy>
		</a>
	</div>

	<div>
		<Lazy height={200} fadeOption={{ delay: 0, duration: 50 }}>
			<img class="qr" src={'/tokens' + token.qrSrc} alt={token.title + ' QR Code'} />
		</Lazy>
	</div>

	<div>{token.pubKey}</div>
	<br />
	<div>
		<button on:click={copy}> Copy </button>
		<a href="/payments">
			<button> {'<'} Payments </button>
		</a>
	</div>
</div>

<style lang="scss">
	.img-grid {
		text-align: center;
	}
	.logo {
		width: 100px;
	}

	.qr {
		width: 200px;
	}
</style>
