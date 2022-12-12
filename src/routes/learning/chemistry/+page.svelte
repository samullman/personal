<script lang="ts">
	import courses from '../courses.json';
</script>

<svelte:head>
	<title>Chemistry</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>Chemistry</h1>

<h3>Courses</h3>

<ul>
	{#each courses as { slug, title, courses }}
		<li>
			{#each courses as course}
				<div>
					<a href={'/learning' + slug + course.slug}>{course.title}</a>
				</div>
				<div>
					Platform: <a href={course.platform.url} target="_blank">{course.platform.title}</a>
				</div>
			{/each}
		</li>
	{/each}
</ul>

<style lang="scss">
	h2 {
		padding: 0 !important;
	}

	ul {
		padding-left: 0;
		list-style: none;

		li {
			flex-direction: column;
			display: flex;
			gap: 0.75rem;
		}
	}
</style>
