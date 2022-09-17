<script>
	const data = [
		{
			title: 'Solar',
			image: '/panels.jpg'
		},

		{
			title: 'Solar',
			image: '/panels.jpg'
		},

		{
			title: 'Solar',
			image: '/panels.jpg'
		}
	];
</script>

<h1>Services</h1>
<p>
	We help individuals and businesses become energetically independent and financially free through:
</p>

<ul class="services-list">
	{#each data as item}
		<li>
			<p>{item.title}</p>
			<img src={item.image} alt={item.title} />
		</li>
	{/each}
</ul>

<h2>Additional Services</h2>

<style lang="scss">
	h2 {
		text-align: center;
	}

	.services-list {
		display: flex;
		list-style: none;
		padding: 0;
		gap: 1.5rem;
		margin-bottom: 3rem;

		li {
			display: block;
			width: 100%;
			flex: 1;

			img {
				width: 100%;
			}
		}
	}
</style>
