<script>
	import Qrcode from '../../../components/qrcode.svelte';
</script>

<svelte:head>
	<title>Celo</title>
	<meta name="description" content="Turning energy into assets." />
</svelte:head>

<h1>Celo</h1>

<Qrcode value="https://github.com/" />

<div class="grid">
	<form class="form" name="contact" netlify>
		<div>
			<label>Name</label>
			<input name="name" />
		</div>

		<div>
			<label>Email</label>
			<input type="email" name="name" required />
		</div>

		<div>
			<label>Phone</label>
			<input type="tel" name="name" />
		</div>

		<div>
			<label>Organization</label>
			<input name="organization" />
		</div>

		<div>
			<label>Note</label>
			<textarea name="message" />
		</div>

		<button type="submit"> Submit </button>
	</form>
</div>

<style lang="scss">
	label {
		display: block;
		font-size: 0.8rem;
		margin-bottom: 0.25rem;
	}

	.form div {
		margin-bottom: 0.5rem;
	}

	select {
		max-width: 10rem;
	}
</style>
