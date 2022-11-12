<script>
	export let key = '';
	export let value = {};
</script>

<a href={'/samples/periodic-table/' + key}>
	<div class={'atom ' + 'period-' + value.period}>
		<div>
			<div class="number">
				{value.atomicNumber}
			</div>
			<h2>{value.symbol}</h2>
			<div class="name">
				{value.name}
			</div>
			<div class="atomic-weight">
				{value.atomicWeight.toFixed(5)}
			</div>
		</div>

		<div class="shells">
			{#each value.shells as shell, i}
				<div class="shell">
					{shell}
				</div>
			{/each}
		</div>
	</div>
</a>

<style lang="scss">
	a {
		color: black;
		text-decoration: none;
	}

	.atom {
		display: inline-flex;
		gap: 2em;
		justify-content: space-between;
		padding: 1em;
		border-radius: 0.5em;
		border: 0.2rem dashed;
		box-sizing: border-box;
		min-width: 10em;
		transition: all 0.2s ease;
		cursor: pointer !important;

		&:hover {
			opacity: 0.82;
			transform: scale(1.06);
		}

		&:active {
			transform: scale(0.95);
		}

		h2 {
			font-size: 3.2em;
			margin: 0;
		}

		.name {
			margin-bottom: 0.25em;
		}

		.number {
			font-size: 1.5em;
		}

		.atomic-weight {
			font-size: 1.15em;
		}

		.shells {
			font-size: 0.85em;
			text-align: right;
			color: #fff;
		}

		&.period-1 {
			background: mediumaquamarine;
			border-color: #13664a;
		}

		&.period-2 {
			background: plum;
			border-color: #6f226f;
		}

		&.period-3 {
			background: lightcoral;
			border-color: #f080807;
		}

		&.period-4 {
			background: paleturquoise;
			border-color: #276767;
		}

		&.period-5 {
			background: lightsalmon;
			border-color: #994d2f;
		}

		&.period-6 {
			background: palegoldenrod;
			border-color: #9a9451;
		}

		&.period-7 {
			background: pink;
			border-color: #894954;
		}
	}
</style>
