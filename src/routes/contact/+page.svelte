<script>
	const socials = [
		{
			title: 'Calendly',
			target: 'https://www.calendly.com/samullman/',
			image: '/calendly.png'
		}
	];

	function handleSubmit(e) {
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
							status.innerHTML = data['errors'].map((error) => error['message']).join(', ');
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

<br />
<hr />
<br />

<div class="logo-grid">
	{#each socials as item}
		<a href={item.target} target="_blank">
			<img src={item.image} alt={item.title} />
		</a>
	{/each}
</div>

<style lang="scss">
	label {
		display: block;
		font-size: 1rem;
		margin-bottom: 0.25rem;
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	select {
		max-width: 10rem;
	}

	input {
		width: 100%;
		max-width: 12rem;
	}

	textarea {
		width: 100%;
		max-width: 24rem;
	}

	.logo-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;

		img {
			@media screen and (max-width: 500px) {
				max-width: 100px;
			}

			@media screen and (min-width: $breakpoint) {
				max-width: 80px;
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
