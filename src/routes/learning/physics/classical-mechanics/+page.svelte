<script>
	import Eqs from '../../../../components/equations/eqs.svelte';
	import courses from '../../courses.json';
</script>

<svelte:head>
	<title>Classical Mechnics</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>Classical Mechanics</h1>

<Eqs filter="trigonometric-identities" />

<Eqs filter="hyperbolic-functions" />

<Eqs filter="series-expansion" />

<Eqs filter="some-derivatives" />

<Eqs filter="some-integrals" />

<br />

<div>
	<a href="/learning/physics" class="cancel-background">
		<button>
			{'<'} Physics
		</button>
	</a>
</div>
