<script>
	function toggle() {
		window.document.body.classList.toggle('dark-mode');
	}
</script>

<div class="header">
	<button class="chevron-button">
		<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"
			><title>Chevron Up</title><path
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="48"
				d="M112 328l144-144 144 144"
			/></svg
		>
	</button>

	<button class="sunny-button" on:click={toggle}>
		<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"
			><title>Sunny</title><path
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-miterlimit="10"
				stroke-width="32"
				d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
			/><circle
				cx="256"
				cy="256"
				r="80"
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-miterlimit="10"
				stroke-width="32"
			/></svg
		>
	</button>

	<button class="menu-button">
		<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"
			><title>Reorder Two</title><path
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="32"
				d="M112 304h288M112 208h288"
			/>
		</svg>
	</button>
</div>

<style lang="scss">
	.header {
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.4rem;
		background: $light;
		backdrop-filter: blur(5px);
		border-radius: 0.5rem;
		overflow: hidden;
		border: 0.2rem;
		transition: background 0.2s ease;

		@media screen and (min-width: $breakpoint) {
			flex-direction: row;
			right: 1.5rem;
			padding: 0.5rem;
			top: 1rem;
			bottom: auto;
		}
	}

	:global(.dark-mode) .header {
		background: $dark;
	}

	.ionicon {
		margin: 0;
		height: 100%;
	}

	.menu-button {
		display: block;

		svg {
			margin-bottom: -0.12rem;
			width: 1.9rem;
		}
	}

	.sunny-button {
		padding-top: 0.44rem;
		padding-bottom: 0.42rem;

		@media screen and (min-width: $breakpoint) {
			padding-top: 0.4rem;
		}

		svg {
			width: 1.6rem;
			margin-bottom: -0.2rem;
		}
	}

	.chevron-button {
		svg {
			width: 1.7rem;
		}
	}
</style>
