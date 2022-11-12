<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import atoms from '../atoms.json';
	import Atom from '../atom.svelte';
	debugger;
	const key = data.slug;
	const value = atoms[key];
</script>

<div class="atom">
	<h2>{value.name}</h2>
	<Atom {key} {value} />
	<br />

	<div class="shell">
		{#each value.shells as shell, i}
			<div class="valence">
				{#each Array(shell) as _}
					<span class="valence-electron" />
				{/each}
			</div>
		{/each}
	</div>

	<p>
		<a href={value.source} target="_blank"> Source </a>
	</p>

	<p>
		{value.summary}
	</p>

	<img src={value.spectral_img} class="spectra" loading="lazy" />

	<!-- <p>
		<img
			src={value.crystalStructure}
			alt={value.crystal}
			class="crystal-structure"
			loading="lazy"
		/>
	</p> -->

	<br />

	<div>
		<a href="/samples/periodic-table">
			<button>
				{'<'} Periodic Table
			</button>
		</a>
	</div>
</div>

<style lang="scss">
	.atom {
		display: flex;
		justify-content: center;
		flex-direction: column;
		max-width: 32rem;
		margin: 0 auto;
		text-align: center;
	}

	h2 {
		font-size: 2em;
		margin-top: 0;
	}

	.element {
		margin-bottom: 2em;
	}

	.number {
		font-size: 2em;
	}
	.title {
		display: flex;
		justify-content: space-between;
	}

	.shell {
		margin: 0 auto;
		margin-bottom: 1em;
		text-align: center;
	}

	p {
		margin-top: 0;
	}

	.stats {
		display: flex;
		gap: 0.5em;
	}

	.valence {
		display: flex;
		gap: 0.5em;
		margin-bottom: 0.25em;

		.valence-electron {
			width: 0.5em;
			height: 0.5em;
			border-radius: 50%;
			background-color: #000;
		}
	}

	.spectra {
		width: 100%;
		height: 5em;
		border-radius: 0.5em;
	}

	.crystal-structure {
		width: 6em;
	}
</style>
