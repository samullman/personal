<script>
	import Drawer from 'svelte-drawer-component';
	import { page } from '$app/stores';

	let hidden = true;
	export let showOnPx = 150;
	let open = false;

	function goTop() {
		document.body.scrollIntoView({ behavior: 'smooth' });
	}

	function toggle() {
		window.document.body.classList.toggle('dark-mode');
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	}

	import links from './links.json';
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="header">
	<button class="chevron-button back-to-top" on:click={goTop} class:hidden>
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

	<!-- <button class="sunny-button" on:click={toggle}>
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
	</button> -->

	<button class="menu-button" on:click={() => (open = true)}>
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

<Drawer {open} size="70%" placement="top" duration="0.2" on:clickAway={() => (open = false)}>
	<div class="drawer">
		<div class="close-button-container">
			<button class="close-button" on:click={() => (open = false)}>
				<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"
					><title>Close</title><path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="32"
						d="M368 368L144 144M368 144L144 368"
					/></svg
				>
			</button>
		</div>

		<div class="contents">
			<!-- <h3>{$page.url.host}</h3> -->

			<nav>
				<div>
					<a href="/" on:click={() => (open = false)}>{$page.url.host}</a>
				</div>

				{#each links as link}
					<div>
						<a href={link.url} title={link.title} on:click={() => (open = false)}>
							{link.title}
						</a>
					</div>
				{/each}

				<div class="social-icons">
					<a
						class="cancel-background"
						href="https://github.com/samullman"
						target="_blank"
						title="Github"
					>
						<img src="/github.svg" alt="Github" />
					</a>

					<a
						class="cancel-background"
						href="https://linkedin.com/in/samullman"
						target="_blank"
						title="Github"
					>
						<img src="/linkedin.svg" alt="LinkedIn" />
					</a>
				</div>

				<br />
			</nav>
		</div>
	</div>
</Drawer>

<style lang="scss">
	.social-icons {
		margin-top: 1rem;
		display: flex;
		gap: 1rem;

		img {
			width: 28.4px;
			height: 28.4px;
		}
	}
	.header {
		position: fixed;
		top: 0.75rem;
		right: 0.75rem;
		display: flex;
		flex-direction: column-reverse;

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
			top: 2rem;
			bottom: auto;
		}

		@media screen and (min-width: $header-breakpoint) {
			right: 2rem;
			top: 2rem;
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
		padding-bottom: 0.05rem;

		@media screen and (min-width: $breakpoint) {
			padding-bottom: 0.35rem;
		}

		@media screen and (min-width: $header-breakpoint) {
			display: none;
		}

		svg {
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
		padding-bottom: 0rem;

		@media screen and (min-width: $breakpoint) {
			padding-bottom: 0.35rem;
		}

		svg {
			width: 1.7rem;
		}
		opacity: 1;
		transition: 0.2s ease;
	}

	.back-to-top.hidden {
		display: none;
		opacity: 0;
		visibility: hidden;
	}

	.close-button {
		padding: 0.35rem 0.9rem;
		padding-bottom: 0rem;

		svg {
			width: 1.5rem;
			height: 1.5rem;
		}
	}

	.drawer {
		padding: 1rem;
		background: $light;
		height: calc(100% - 2rem);

		.contents {
			padding: 1rem;

			padding-top: 2rem;
		}

		@media screen and (min-width: $breakpoint) {
			padding: 1.8rem;
		}
	}

	nav {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		a {
			font-size: 1rem;
		}
	}

	button {
		font-size: 1.5rem;
		padding: 0.35rem 0.75rem;
		background: #677ea0;
		border: none;
		color: $light;
		border-radius: 0.25rem;

		&:hover {
			background: $dark;
		}
	}

	.close-button-container {
		text-align: right;
	}
</style>
