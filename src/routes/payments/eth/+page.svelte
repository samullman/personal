<script>
	import Qrcode from '../../../components/qrcode.svelte';
</script>

<svelte:head>
	<title>Ethereum</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>Ethereum</h1>

<br />

<div class="img-grid">
	<div>
		<img class="logo" src="/eth.png" alt="Ethereum Logo" />
	</div>

	<div>
		<img class="qr" src="/eth-qr.png" alt="Ethereum QR" />
	</div>

	<div>
		<button> Copy </button>
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
