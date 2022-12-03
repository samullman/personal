<script lang="ts">

	interface eventType {
		target: HTMLFormElement, 
	}

	interface errorType {
		message: object, 
	}

	function handleSubmit(e: eventType) {
		e.preventDefault();
		var status = document.querySelectorAll('.status')[0];
		var data = new FormData(e.target);
		fetch(e.target.action, {
			method: 'POST',
			body: data,
			headers: {
				Accept: 'application/json'
			}
		})
			.then((response) => {
				if (response.ok) {
					debugger;
					status.innerHTML = 'Thanks for your submission!';
					document.querySelectorAll('form')[0].reset();
				} else {
					response.json().then((data) => {
						if (Object.hasOwn(data, 'errors')) {
							debugger;
							status.innerHTML = data['errors'].map((error: object) => error['message']).join(', ');
						} else {
							debugger;
							status.innerHTML = 'Oops! There was a problem submitting your form';
						}
					});
				}
			})
			.catch((error) => {
				debugger;
				status.innerHTML = 'Oops! There was a problem submitting your form';
			});
	}
</script>

<svelte:head>
	<title>Contact | Massive</title>
	<meta name="description" content="Turning energy into assets." />
</svelte:head>

<h1>Contact</h1>

<p>
	I would love to hear from you sometime. Please use the form below or schedule with me directly via <a
		href="https://www.calendly.com/samullman/meeting"
		target="_blank">Calendly</a
	>.
</p>

<br />

<div class="grid">
	<form
		class="form"
		action="https://formspree.io/f/mqknbjry"
		method="POST"
		on:submit={handleSubmit}
	>
		<div>
			<label for="name">Name</label>
			<input name="name" required />
		</div>

		<div>
			<label for="email">Email</label>
			<input type="email" name="name" required />
		</div>

		<div>
			<label for="phone">Phone</label>
			<input type="tel" name="name" />
		</div>

		<div>
			<label for="organization">Organization</label>
			<input name="organization" />
		</div>

		<div>
			<label for="message">Message</label>
			<textarea name="message" rows="5" />
		</div>

		<div>
			<button type="submit"> Submit </button>
		</div>
	</form>

	<br />

	<div class="status" />
</div>

<!-- <div class="logo-grid">
	{#each socials as item}
		<a class="cancel-background" href={item.target} target="_blank">
			<img src={item.image} alt={item.title} />
		</a>
	{/each}
</div> -->
<style lang="scss">
	label {
		display: block;
		font-size: 0.9rem;
		margin-bottom: 0.25rem;
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	input,
	textarea {
		width: 100%;
		font-family: Space Mono;
		font-size: 1.3rem;
		padding: 0.2rem 0.5rem;
	}

	input {
		max-width: 20rem;
	}

	textarea {
		max-width: 90%;
	}
</style>
