<script lang="ts">
	import book from '../courses.json';
	let courses = book.filter((el) => {
		return el.title == 'Physics';
	});
</script>

<svelte:head>
	<title>Physics</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>Physics</h1>

<h2>Courses</h2>

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

<br />

<div>
	<a href="/learning" class="cancel-background">
		<button>
			{'<'} Learning
		</button>
	</a>
</div>

<style lang="scss">
	h2 {
		padding: 0 !important;
		margin: 0;
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
