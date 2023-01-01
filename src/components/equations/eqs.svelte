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
		<div class="item">
			<div>
				<Katex {title} {math} />
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.equation-grid {
		display: flex;
		gap: 2em;
		flex-wrap: wrap;
		margin-bottom: 2em;

		.item {
			div {
				background: lightgray;
				padding: 1rem 1.6rem;
				padding-bottom: 1rem;
				border-radius: 0.75rem;
			}
		}
	}
</style>
