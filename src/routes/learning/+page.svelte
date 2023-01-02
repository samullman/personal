<script lang="ts">
	import Lazy from 'svelte-lazy';
	import jump from 'jump.js';
	import 'animate.css';

	import courses from './courses.json';
	import links from './links.json';

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

<h2>Courses</h2>

<ul>
	{#each courses as { slug, title }}
		<li>
			<a href={'/learning' + slug} {title}> {title} </a>
		</li>
	{/each}
</ul>

<h2>Links</h2>

<ul>
	{#each links as { url, title }}
		<li>
			<a href={url} {title} target="_blank"> {title} </a>
		</li>
	{/each}
</ul>

<br />

<div class="return-btn">
	<a href="/projects" class="cancel-background">
		<button>
			{'<'} Projects
		</button>
	</a>
</div>

<style lang="scss">
	h2 {
		padding: 0 !important;
		margin: 0;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding-left: 0;
		list-style: none;
		margin-bottom: 2rem;
	}
</style>
