<script lang="ts">
	import resources from '../../data/resources.json';
	import Lazy from 'svelte-lazy';
	import jump from 'jump.js';
	import 'animate.css';

	let jumping = false;

	function destinationReached(tag: string) {
		document.querySelectorAll(`[data-name=${tag}]`)[0].classList += ' animate__headShake';

		setTimeout(() => {
			removeAnimation(tag);
		}, 500);
	}

	function removeAnimation(tag: string) {
		jumping = false;
		document.querySelectorAll(`[data-name=${tag}]`)[0].classList.remove('animate__headShake');
	}
</script>

<svelte:head>
	<title>Resources</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>Resources</h1>

<h2>Let's get it started.</h2>

{#each resources as resource}
	<div>
		<b>
			<h3>
				{resource.title}
			</h3>

			<ul>
				{#each resource.items as item}
					<li>
						<div class="item animate__animated" data-name={item.title}>
							<a id={item.alt} href={item.website} alt={item.alt} target="_blank">
								{item.title}
							</a>

							<div class="tags">
								{#if item.tags}
									{#each item.tags as tag}
										<button
											class="tag"
											on:click={() => {
												if (jumping) {
													return;
												} else {
													jumping = true;
												}

												jump(`[data-name=${tag}]`, {
													duration: 450,
													offset: -12,

													callback: () => {
														destinationReached(tag);
													}
												});
											}}
										>
											{tag}
										</button>
									{/each}
								{/if}
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</b>
	</div>
{/each}

<style lang="scss">
	.item {
		display: inline-flex;
		gap: 1rem;
		flex-wrap: wrap;
		display: flex;
		align-items: baseline;
	}

	.tags {
		margin-top: 0.3rem;
		display: inline-flex;
		gap: 0.35rem;
		flex-wrap: wrap;

		.tag {
			font-size: 0.75rem !important;
			letter-spacing: 0.1rem;
			padding: 0.25rem 0.55rem;
			text-transform: uppercase;
			color: white;
			display: inline-block;
			border-radius: 0.35rem;
			position: relative;
			bottom: 0.1rem;
		}
	}
</style>
