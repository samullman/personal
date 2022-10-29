<svelte:head>
	<title>Contact | Massive</title>
	<meta name="description" content="Turning energy into assets." />
</svelte:head>

<h1>Contact</h1>

<div class="grid">
	<div>
		<iframe
			width="600"
			height="450"
			style="border:0"
			loading="lazy"
			allowfullscreen
			referrerpolicy="no-referrer-when-downgrade"
			src="https://www.google.com/maps/embed/v1/place?key=API_KEY
    &q=Space+Needle,Seattle+WA"
		/>
	</div>

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
