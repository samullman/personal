<script>
	import data from './data.json';
	import LazyImage from '../../components/lazy-image.svelte';
</script>

<svelte:head>
	<title>Work</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>Work</h1>

<div class="vertical-flex">
	{#each data as item}
		<div class="portfolio-item">
			<h2>{item.time}</h2>

			{#each item.work as workItem}
				<div class="info">
					<h3>{workItem.title}</h3>

					<div>
						<a href={workItem.link} target="_blank">
							{workItem.link}
						</a>
					</div>

					<div class="desc">
						{workItem.description}
					</div>

					<div class="tags">
						{#each workItem.tags as tag}
							<div class="tag">
								{tag}
							</div>
						{/each}
					</div>

					<div class="image">
						<a class="cancel-background" href={workItem.link} target="_blank">
							<LazyImage src={workItem.image} alt={workItem.title} />
						</a>
					</div>
				</div>
			{/each}
		</div>
	{/each}
</div>

<br />

<style lang="scss">
	.vertical-flex {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: center;
		gap: 3rem;

		.info {
			display: flex;
			flex-direction: column;
			gap: 0.4rem;
			margin-bottom: 0.8rem;
			font-size: 1rem;

			h3 {
				margin: 0;
			}

			.image {
				max-width: 600px;
			}

			.desc {
				max-width: 800px;
			}

			.tags {
				margin-top: 0.3rem;
				margin-bottom: 0.5rem;
				display: flex;
				gap: 0.25rem;
				flex-wrap: wrap;

				.tag {
					font-size: 0.75rem;
					letter-spacing: 0.1rem;
					padding: 0.25rem 0.5rem;
					background: rgb(50, 48, 48);
					text-transform: uppercase;
					color: white;
					display: inline-block;
					border-radius: 0.35rem;
					user-select: none;
				}
			}
		}
	}
</style>
