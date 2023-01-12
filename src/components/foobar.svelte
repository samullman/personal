<script>
	import LazyImage from '../components/lazy-image.svelte';
	import Section from '../components/section.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Turning energy into assets." />
</svelte:head>

<Section>
	<h2>Welcome</h2>

	<p>
		It's time to protect your property from rising energy costs and inflation. The best way to do
		that is through energy independence.
	</p>
</Section>

<br />

<LazyImage src="/sunset.png" alt="Sunset" />

<br />

<h2>How</h2>

<p>
	With solarvoltaic technology and wind turbines. You need to secure home with the latest
	advancements in residential energy technology.
</p>

<div class="special">
	<div class="message-wrapper">
		<div class="message">
			<h2>Hi fuck you</h2>
		</div>
	</div>
</div>

<style lang="scss">
	.special {
		padding: 4rem 0rem;
		position: relative;

		.message-wrapper {
			margin: 0 auto;
			padding: 0 5rem;
			position: relative;
			z-index: 5;
			text-align: center;

			.message {
				display: inline-block;
				background: $light;
				padding: 5rem;
				border-radius: 1rem;
			}
		}

		.background {
			position: absolute;
			width: 100%;
			height: 100%;
			opacity: 20%;
			z-index: 0;
			top: 0;
			background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='20' height='80' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='green'/><path d='M-5 5L5.1 15 15 5l10 10'  stroke-linecap='square' stroke-width='2.5' stroke='gray' fill='none'/><path d='M-5 25L5.1 35 15 25l10 10'  stroke-linecap='square' stroke-width='2.5' stroke='gray' fill='none'/><path d='M-5 45L5.1 55 15 45l10 10'  stroke-linecap='square' stroke-width='2.5' stroke='gray' fill='none'/><path d='M-5 65L5.1 75 15 65l10 10'  stroke-linecap='square' stroke-width='2.5' stroke='gray' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
		}
	}
</style>
