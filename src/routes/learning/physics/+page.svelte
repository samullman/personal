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
		{#each courses as course}
			<li>
				<div>
					<a href={'/learning' + slug + course.slug}>{course.title}</a>
				</div>
				<div>
					Platform: <a href={course.platform.url} target="_blank">{course.platform.title}</a>
				</div>
			</li>
		{/each}
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
		margin-bottom: 1rem;
	}

	ul {
		padding-left: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 2rem;

		li {
			flex-direction: column;
			display: flex;
			gap: 0.75rem;
		}
	}
</style>
