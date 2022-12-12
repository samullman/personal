<script lang="ts">
	import Lazy from 'svelte-lazy';
	import jump from 'jump.js';
	import 'animate.css';

	import courses from './courses.json';

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
	<title>Learning</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>Learning</h1>

<ul>
	{#each courses as { slug, title }}
		<li>
			<a href={'/learning' + slug} {title}> {title} </a>
		</li>
	{/each}
</ul>

<style lang="scss">
	h2 {
		padding: 0 !important;
	}

	ul {
		padding-left: 0;
		list-style: none;
	}
</style>
