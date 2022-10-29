<script>
	const data = [
		{
			title: 'Solar',
			image: '/panels.jpg',
			link: '/services/solar'
		},

		{
			title: 'Solar',
			image: '/panels.jpg',
			link: '/services/solar'
		},

		{
			title: 'Solar',
			image: '/panels.jpg',
			link: '/services/solar'
		}
	];
</script>

<h1>Services</h1>

<br />

<p>
	We help individuals and businesses become energetically independent and financially free through:
</p>

<ul class="services-list">
	{#each data as item}
		<li>
			<a href={item.link}>
				<h3>{item.title}</h3>
				<img src={item.image} alt={item.title} />
			</a>
		</li>
	{/each}
</ul>

<h2>Additional Services</h2>

<style lang="scss">
	p {
		text-align: center;
	}

	h2 {
		text-align: center;
	}

	.services-list {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		padding: 0;
		gap: 1.5rem;
		margin-bottom: 3rem;
		justify-content: center;

		li {
			flex: 0 0 1;
			display: block;
			width: 100%;
			max-height: 20rem;
			overflow: hidden;

			@media screen and (min-width: $breakpoint) {
				flex: 0 0 20em;
			}

			a {
				text-decoration: none;
				color: inherit;
			}

			h3 {
				font-size: 1.2rem;
				margin-bottom: 0.5rem;
				text-transform: uppercase;
			}

			img {
				width: 100%;
				height: 100%;
				box-sizing: border-box;
				object-fit: cover;
			}
		}
	}
</style>
