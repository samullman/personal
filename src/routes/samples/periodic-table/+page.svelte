<script>
	import atoms from './atoms.json';
	import Atom from './atom.svelte';
	let per1 = Object.entries(atoms).filter(([key, value]) => {
		return value.period == 1;
	});

	let per2 = Object.entries(atoms).filter(([key, value]) => {
		return value.period == 2;
	});

	let per3 = Object.entries(atoms).filter(([key, value]) => {
		return value.period == 3;
	});

	let per4 = Object.entries(atoms).filter(([key, value]) => {
		return value.period == 4;
	});

	let per5 = Object.entries(atoms).filter(([key, value]) => {
		return value.period == 5;
	});

	let per6 = Object.entries(atoms).filter(([key, value]) => {
		return value.period == 6;
	});

	let per7 = Object.entries(atoms).filter(([key, value]) => {
		return value.period == 7;
	});
</script>

<h1>Periodic Table</h1>

<div class="table">
	<h2>Period 1</h2>
	<div class="atom-grid period-1">
		{#each per1 as [key, value]}
			<Atom {key} {value} />
		{/each}
	</div>

	<h2>Period 2</h2>
	<div class="atom-grid period-2">
		{#each per2 as [key, value]}
			<Atom {key} {value} />
		{/each}
	</div>

	<h2>Period 3</h2>
	<div class="atom-grid period-3">
		{#each per3 as [key, value]}
			<Atom {key} {value} />
		{/each}
	</div>

	<h2>Period 4</h2>
	<div class="atom-grid period-4">
		{#each per4 as [key, value]}
			<Atom {key} {value} />
		{/each}
	</div>

	<h2>Period 5</h2>
	<div class="atom-grid period-5">
		{#each per5 as [key, value]}
			<Atom {key} {value} />
		{/each}
	</div>

	<h2>Period 6</h2>
	<div class="atom-grid period-6">
		{#each per6 as [key, value]}
			<Atom {key} {value} />
		{/each}
	</div>

	<h2>Period 7</h2>
	<div class="atom-grid period-7">
		{#each per7 as [key, value]}
			<Atom {key} {value} />
		{/each}
	</div>
</div>

<style lang="scss">
	.table {
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 0.75rem;
		max-width: 40rem;
		margin: 2rem auto;
	}

	h1 {
		text-align: center;
		font-size: 1.5rem;
		font-weight: 400;
		margin: 1rem;
	}

	h2 {
		margin-top: 0;
		font-size: 1.2rem;
		text-align: center;
		text-transform: uppercase;
	}

	.atom-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 2em;
		margin-bottom: 2em;
		justify-content: center;
	}
</style>
