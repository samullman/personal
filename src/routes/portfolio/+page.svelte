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
				'I worked with a design agency to build their site from the ground up. We cooredinated accross time zones to deliver to a client based in Denver, Colorado, USA.',
			image: '/history/1906.png',
			tags: ['Gatsby.js', 'JavaScript', 'SCSS', 'Styled Components', 'E-commerce']
		},

		// {
		// 	title: 'Applied Materials',
		// 	link: 'https://www.appliedmaterials.com/interactive-proxy/',
		// 	image: '/history/applied.png'
		// },

		{
			title: 'Code Nation',
			link: 'https://codenation.org/',
			image: '/history/code-nation.png',

			description:
				'I built multiple marketing websites for Code Nation through a design agency located in Portland, OR, USA. We built a scrollable interface translatable into multiple languages. ',
			tags: ['Next.js', 'Chakra UI', 'JavaScript', 'Chart.js', 'SCSS', 'Scollspy']
		},

		{
			title: 'Marinade Finance',
			link: 'https://marinade.finance/',
			image: '/history/marinade.png',
			description:
				'After competing in the Solana hackathon I was invited to participate in full stack development for a winning project. With the team we built out the landing pages and began instantiating the internals of the Marinade platform. ',
			tags: ['Next.js', 'Chakra UI', 'JavaScript', 'SCSS', 'APIs', 'SDKs']
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
	<title>Portfolio</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>Portfolio</h1>

<br />
<!-- <h2>Current:</h2>

<div class="logo-grid" />

<br />

<h2>Past:</h2> -->

<div class="vertical-flex">
	{#each history as item}
		<div class="portfolio-item">
			<div class="info">
				<div>
					<b>Title:</b>
					{item.title}
				</div>

				<div>
					<b>Website:</b>
					<a href={item.link} target="_blank">
						{item.link}
					</a>
				</div>

				<div>
					<b>Description:</b>
					{item.description}
				</div>

				<div class="tags">
					{#each item.tags as tag}
						<div class="tag">
							{tag}
						</div>
					{/each}
				</div>
			</div>

			<a class="cancel-background" href={item.link} target="_blank">
				<LazyImage src={item.image} alt={item.title} />
			</a>
		</div>
	{/each}
</div>

<br />

<style lang="scss">
	p {
		text-align: center;
		max-width: 40rem;
		margin: 1rem auto;
	}

	.vertical-flex {
		display: flex;
		max-width: 800px;
		margin: 0 auto;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: center;
		gap: 3rem;

		.portfolio-item {
			border: 0.16rem dashed $dark;
			border-radius: 0.6rem;
			padding: 1rem;
		}

		.info {
			display: flex;
			flex-direction: column;
			gap: 0.4rem;
			margin-bottom: 1.25rem;
			font-size: 1.08rem;

			.tags {
				display: flex;
				gap: 0.25rem;
				flex-wrap: wrap;

				.tag {
					font-size: 0.8rem;
					padding: 0.25rem 0.5rem;
					background: gray;
					color: white;
					display: inline-block;
					border-radius: 0.35rem;
					user-select: none;
				}
			}
		}

		img {
			transition: all 0.2s ease;
			object-fit: cover;
			height: 25rem;
			border-radius: 0.25rem;
		}
	}

	.title {
		font-size: 1.2rem;
	}

	.breaker-img {
		max-height: 400px;
		max-width: 800px;
		margin: 2rem auto;
		display: block;
	}
</style>
