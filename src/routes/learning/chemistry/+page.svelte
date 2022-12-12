<script lang="ts">
	import resources from './data.json';
	import Lazy from 'svelte-lazy';
	import jump from 'jump.js';
	import 'animate.css';

	const topics = [
		{
			title: 'chemistry',
			slug: '/chemistry'
		}
	];

	let jumping = false;

	function destinationReached(tag: string) {
		document.querySelectorAll(`[data-name=${tag}]`)[0].classList += ' animate__headShake';

		setTimeout(() => {
			removeAnimation(tag);
		}, 500);
	}

	function removeAnimation(tag: string) {
		jumping = false;
		document.querySelectorAll(`[data-name=${tag}]`)[0].classList.remove('animate__headShake');
	}
</script>

<svelte:head>
	<title>Chemistry</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>Chemistry</h1>

<ul>
	{#each topics as { slug, title }}
		<li>
			<a href={'/learning' + slug} {title}>
				{title}
			</a>
		</li>
	{/each}
</ul>

<style lang="scss">
</style>
