<script>
	import LazyImage from '../../components/lazy-image.svelte';

	const projects = [
		{
			src: '/sunset.jpeg',
			title: 'Sunset'
		}
	];

	const history = [
		{
			title: '1906',
			link: 'https://1906newhighs.com/',
			description:
				'I worked with a design agency to build their site from scratch. We used the Gatsby.js web framework on the frontend and connected it to a Shopify SDK/CMS on the backend.',
			image: '/history/1906.png',
			tags: ['Gatsby.js', 'JavaScript', 'SCSS', 'Styled Components']
		},

		{
			title: 'Code Nation',
			link: 'https://codenation.org/',
			image: '/history/code-nation.png',

			description:
				'I built multiple marketing websites for Code Nation through a design agency located in Portland, OR, USA. We built a scrollable interface translatable into multiple languages. ',
			tags: ['Next.js', 'Chakra UI', 'JavaScript', 'Chart.js', 'SCSS']
		},

		{
			title: 'Marinade Finance',
			link: 'https://marinade.finance/',
			image: '/history/marinade.png',
			description:
				'After competing in the Solana hackathon I was invited to participate in full stack development for a winning project. With the team we built out the landing pages and began instantiating the internals of the Marinade platform. ',
			tags: ['Next.js', 'Chakra UI', 'React-Query']
		},

		{
			title: 'Munchery',
			link: 'https://munchery.com/',
			image: '/history/munchery.png',
			description:
				'I ran a performance audit on the Munchery platform to diagnose a number of breaking issues as well as image optimizations.  I was able to decrease page load times by 30% as well as increase image resoltion across the website.',
			tags: ['React.js', 'JavaScript', 'SCSS', 'Performance Audit']
		}
	];
</script>

<svelte:head>
	<title>Past</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<div class="vertical-flex">
	{#each history as item}
		<div class="portfolio-item">
			<div class="info">
				<h3>{item.title}</h3>

				<div>
					<a href={item.link} target="_blank">
						{item.link}
					</a>
				</div>

				<!-- <div>
					{item.description}
				</div> -->

				<div class="tags">
					{#each item.tags as tag}
						<div class="tag">
							{tag}
						</div>
					{/each}
				</div>
			</div>

			<!-- <LazyImage src={item.image} alt={item.title} /> -->
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
			font-size: 1.08rem;

			h3 {
				margin: 0;
			}

			.tags {
				margin-top: 0.3rem;
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
