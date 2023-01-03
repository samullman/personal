<script>
	import Eqs from '../../../../components/equations/eqs.svelte';
	import courses from '../../courses.json';

	const course = courses
		.filter((el) => {
			return el.slug == '/physics';
		})[0]
		.courses.filter((el) => {
			return el.slug == '/classical-mechanics';
		})[0];
</script>

<svelte:head>
	<title>Classical Mechnics</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>Classical Mechanics</h1>

<div>
	<a href={course.platform.url} target="_blank"> {course.platform.title} </a>
</div>

<Eqs filter="trigonometric-identities" />

<Eqs filter="hyperbolic-functions" />

<Eqs filter="series-expansion" />

<Eqs filter="some-derivatives" />

<Eqs filter="some-integrals" />

<br />

<h2>Chapter I: Newton's Laws of Motion</h2>

<h3>1.1 Classical Mechanics</h3>

<ul>
	<li>
		Greeks, <a href="https://en.wikipedia.org/wiki/Galileo_Galilei" target="_blank" title="Galileo"
			>Galileo</a
		>, <a href="https://en.wikipedia.org/wiki/Isaac_Newton" target="_blank"> Newton </a>
	</li>
	<li>Lagrange, Hamilton</li>
</ul>

<h3>1.2 Space & Time</h3>

<div>
	<a href="/learning/physics" class="cancel-background">
		<button>
			{'<'} Physics
		</button>
	</a>
</div>
