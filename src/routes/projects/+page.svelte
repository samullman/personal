<script>
	import projects from './data.json';

	function compare(a, b) {
		return 0;

		if (a.title[0] < b.title[0]) {
			return -1;
		}
		if (a.title[0] > b.title[0]) {
			return 1;
		}

		// names must be equal
		return 0;
	}
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>Projects</h1>

<ul>
	{#each projects.sort(compare) as { title, slug }}
		<li>
			<a href={'/projects' + slug} {title}> {title} </a>
		</li>
	{/each}
</ul>

<ul />

<style lang="scss">
	ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 0;
		list-style: none;
	}
</style>
