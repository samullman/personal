<script lang="ts">
	import Katex from '../katex.svelte';
	import data from './data.json';
	export let filter: string;

	const group = data.filter((el) => {
		return el.filter == filter;
	})[0];
</script>

<h2>{group.title}</h2>

<div class="equation-grid">
	{#each group.eqs as { title, math }}
		<Katex {title} {math} />
	{/each}
</div>

<style lang="scss">
	.equation-grid {
		display: flex;
		gap: 2em;
		flex-wrap: wrap;
		margin-bottom: 2em;
	}
</style>
