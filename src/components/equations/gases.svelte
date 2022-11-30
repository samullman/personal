<script>
	import Katex from '$lib/components/katex.svelte';
</script>

<div class="equation-grid">
	<Katex title="Ideal Gas Law" math={'PV=nRT '} />
	<Katex title="Energy Total" math={'E_{total} = E_{kinetic} + E_{potential}'} />
	<Katex title="Average Kinetic Energy" math={'\\overline{E} = \\frac{3}{2} RT '} />
	<Katex
		title="Gas constant"
		math={'R = 8.31446 \\thickspace \\frac{J}{K \\cdot mol} = 0.0820574 \\frac{L \\cdot atm }{K \\cdot mol}'}
	/>
</div>

<style lang="scss">
	.equation-grid {
		display: flex;
		gap: 2em;
		flex-wrap: wrap;
		margin-bottom: 2em;
	}
</style>
