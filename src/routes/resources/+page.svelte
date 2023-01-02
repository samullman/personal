<script>
	import data from './data.json';
</script>

<svelte:head>
	<title>Resources</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>Resources</h1>

<div class="resources">
	{#each data.order as item}
		<div class="resource">
			<h2>
				{data.sections[item].title}
			</h2>

			<!-- <p>{data.sections[item].desc}</p> -->
			<p />

			<div class="items">
				{#each data.sections[item].els as el}
					<a href={data.techs[el].url} title={data.techs[el].title} target="_blank">
						{data.techs[el].title}
					</a>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	h2 {
		margin-bottom: 0;
	}

	.resources {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.items {
		display: flex;
		gap: 1rem;
	}
</style>
