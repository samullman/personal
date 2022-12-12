<script lang="ts">
	import courses from '../../courses.json';
	import Gases from '../../../../components/equations/gases.svelte';
	import Katex from '../../../../components/katex.svelte';
</script>

<svelte:head>
	<title>General Chemistry I</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>General Chemistry I</h1>

<h2>Week 1</h2>

<h3>Classifications of Matter</h3>
<ul>
	<li>Pure Substances and Mixtures</li>
	<li>Physical vs. Chemical Change</li>
	<li>
		Avagadro's Hypothesis

		<ul>
			<li>Pressure, volume, and number of molecules are proportional.</li>
		</ul>
	</li>
	<li>Moles and Molar Mass</li>
	<li>The Laws of Definite and Multiple Proportions</li>
	<li>Empirical and Molecular Formulas</li>
</ul>

<h2>Week 2</h2>

<h3>Gases</h3>

<ul>
	<li>
		Gases Pressure

		<div class="eq">
			<Katex math={'P = \\frac{F}{A} (\\frac{kg}{m \\cdot s^2}) '} />
		</div>

		<div class="ref">
			<small>
				See:
				<a href="https://en.wikipedia.org/wiki/Pascal_(unit)" target="_blank">Pascals</a>
			</small>
		</div>
	</li>

	<li>
		Energy of Gases

		<div class="eq">
			<Katex math={'E_{total} = E_{kinetic} + E_{potential}'} />
		</div>

		<div class="eq">
			<Katex math={'\\bar{E} = \\frac{3}{2} R T '} />
		</div>

		<div class="eq">
			<Katex math={'R = 8.31446  \\frac{J}{mol \\cdot K}'} />
		</div>
	</li>
	<li>
		Ideal Gases

		<ul>
			<li>
				Boyle's Law
				<div class="eq">
					<Katex math={'PV = constant'} />
				</div>

				<div class="eq">
					<Katex math={'P_1 V_1 = P_2 V_2'} />
				</div>
			</li>

			<li>
				Charles's Law

				<div class="eq">
					<Katex math={'\\frac{V_1}{V_2} = \\frac{T_1}{T_2}'} />
				</div>
			</li>

			<li>
				Gay-Lussac's Law

				<div class="eq">
					<Katex math={'\\frac{P_1}{T_1} = \\frac{P_2}{T_2}'} />
				</div>
			</li>

			<li>
				Avogadro's Hypothesis

				<div class="eq">
					<Katex math={'\\frac{V_1}{n_1} = \\frac{V_2}{n_2}'} />
				</div>
			</li>

			<li>
				Ideal Gas Equation

				<div class="eq">
					<Katex math={'PV = n RT'} />
				</div>
			</li>
		</ul>
	</li>
</ul>

<div>
	<Katex
		title="Avagadro's Number"
		math={'h = 6.02214 \\times 10^{23} \\thickspace \\frac{1}{mol}'}
	/>
</div>

<br />

<Gases />

<style lang="scss">
	h2 {
		padding: 0 !important;
	}

	ul {
		padding-top: 0rem;

		ul {
			list-style-type: '- ';

			li .eq {
				padding: 0.11rem 1.25rem;
				margin-bottom: 0;

				&:last-of-type {
					padding-bottom: 1rem;
				}
			}
		}

		li {
			.eq {
				margin-top: -0.75rem;
				margin-bottom: 0.75rem;
			}

			.ref {
				margin-bottom: 0.75rem;
			}
		}
	}
</style>
