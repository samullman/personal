<script>
	import Katex from '$lib/components/katex.svelte';
</script>

<svelte:head>
	<title>Terms</title>
</svelte:head>

<a href="/learning/">Learning</a>
> <a href="/learning/chemistry">Chemistry</a>
> Glossary

<h2>Constants</h2>
<div class="equation-grid">
	<Katex title="Pi" math={'\\pi = 3.1415972'} />

	<Katex
		title="Gas constant"
		math={'R = 8.31446 \\thickspace \\frac{J}{K \\cdot mol} = 0.0820574 \\frac{L \\cdot atm }{K \\cdot mol}'}
	/>

	<Katex
		title="Boltzmann's Constant"
		math={'k_B = 1.38605 \\times 10^{-23} \\thickspace \\frac{J}{K}'}
	/>

	<Katex title="Bohr Radius" math={'a_0 = 5.29177 \\times 10^{-11} \\thickspace m'} />

	<Katex
		title="Vacuum Permittivity"
		math={'\\varepsilon_0 = 8.85419 \\times 10^{-12} \\thickspace \\frac{C^2}{J \\cdot mol}'}
	/>

	<Katex title="Rydberg Constant" math={'R_H = 13.6057 \\thickspace eV'} />

	<Katex title="Atomic Mass" math={'1 \\space amu = 1.66054 \\times 10^{-27} \\thickspace kg'} />

	<Katex title="Electron Volt" math={'1 \\space eV = 1.60218 \\times 10^{-19} \\thickspace J'} />

	<Katex
		title="Debye"
		math={'1 \\space D = 3.336 \\times 10^{-30} \\thickspace C \\cdot m = 0.02082 \\thickspace \\text{\\AA}'}
	/>
	<Katex title="Speed of light" math={'c = 2.99792 \\times 10^8 \\thickspace \\frac{m}{s}'} />

	<Katex title="Elementary charge" math={'e = 1.60218 \\times 10^{-19} \\thickspace C'} />

	<Katex title="Electron mass" math={'m_e = 9.10938 \\times 10^{-31} \\thickspace kg'} />

	<Katex title="Proton mass" math={'m_p = 1.67262 \\times 10^{-27} \\thickspace kg'} />

	<Katex title="Neutron mass" math={'m_n = 1.67493 \\times 10^{-27} \\thickspace kg'} />

	<Katex title="Planck's Constant" math={'h = 6.2607 \\times 10^{23} \\thickspace J\\cdot s'} />

	<Katex
		title="Avagadro's Number"
		math={'h = 6.02214 \\times 10^{23} \\thickspace \\frac{1}{mol}'}
	/>
</div>

<div>
	<h2>Notable People</h2>

	<ul>
		<li>
			<a href="https://en.wikipedia.org/wiki/Robert_Boyle" target="_blank">Robert Boyle</a>
		</li>

		<li><a href="https://en.wikipedia.org/wiki/John_Dalton" target="_blank">Adam Dolton</a></li>

		<li>
			<a href="https://en.wikipedia.org/wiki/Antoine_Lavoisier" target="_blank">Antoine Lavoisier</a
			>
		</li>

		<li>
			<a href="https://en.wikipedia.org/wiki/Blaise_Pascal">Blaise Pascal</a>
		</li>
	</ul>
</div>

<div class="images">
	<div>
		<h2>Standard Quantities</h2>
		<img src="/terms/quantities.png" />
	</div>

	<div>
		<h2>Base</h2>
		<img src="/terms/base.png" />
	</div>

	<div>
		<h2>Exponents</h2>
		<img src="/terms/exponents.png" />
	</div>

	<div>
		<h2>Millis</h2>
		<img src="/terms/milli.png" />
	</div>
</div>

<div>Pascal</div>
<div>1 Pa = 1 N/m2</div>
<div>kg⋅m−1⋅s−2</div>

<style lang="scss">
	h2 {
		font-size: 2em;
		margin-top: 0;
		margin-bottom: 0;
	}

	.equation-grid {
		display: flex;
		gap: 4em;
		flex-wrap: wrap;
		margin-bottom: 2em;
	}
	.images {
		display: flex;
		justify-content: center;
		gap: 2em;
		flex-wrap: wrap;

		h2 {
			font-size: 1.5em;
		}

		img {
			width: 100%;
		}
	}
</style>
