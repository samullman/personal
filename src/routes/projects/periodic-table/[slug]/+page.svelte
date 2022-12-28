<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import atoms from '../atoms.json';
	import Atom from '../atom.svelte';
	debugger;
	const key = data.slug;
	const value = atoms[key];
</script>

<h1>{value.name}</h1>

<br />
<div class="atom">
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
		<a href="/samples/periodic-table" class="cancel-background">
			<button>
				{'<'} Periodic Table
			</button>
		</a>
	</div>
</div>

<style lang="scss">
	.atom {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
	}

	.shell {
		margin-bottom: 1em;
	}

	p {
		margin-top: 0;
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
</style>
