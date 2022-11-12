<script>
	const hours = [];
	const minutes = [];

	let counter = 0;
	while (counter < 60) {
		// populate minutes array
		if (counter == 0) {
			minutes.push('00');
		} else if (counter < 10) {
			minutes.push('0' + counter.toString());
		} else {
			minutes.push(counter.toString());
		}

		// populate hours array
		if (counter < 13 && counter > 0) {
			hours.push(counter.toString());
		}

		counter += 1;
	}

	function reverse(str) {
		return str.split('').reverse().join('');
	}

	function isPalidrome(str) {
		return str === reverse(str);
	}

	function isDouble(str) {
		return str.slice(0, 2) == str.slice(2, 4);
	}
</script>

<h1>Sacred Times</h1>

<div class="sacred-times">
	{#each hours as hour, h}
		{#each minutes as minute, m}
			{#if isPalidrome(hour + minute) || isDouble(hour + minute)}
				<div class="wrapper">
					<div class={'time color-' + hour + ' ' + 'index-' + m}>
						{hour}:{minute}
					</div>
				</div>
			{/if}
		{/each}
	{/each}
</div>

<div class="return-btn">
	<a href="/samples">
		<button>
			{'<'} Samples
		</button>
	</a>
</div>

<div class="code-box">
	<h2>Svelte Code</h2>
	<div>
		<img class="rounded" src="/samples/sacred-times.png" alt="Sacred Times Code" />
	</div>
</div>

<style lang="scss">
	@use 'sass:math';

	h1 {
		text-align: center;
		font-size: 1.5rem;
		font-weight: 400;
		margin: 1rem;
	}

	.sacred-times {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
		justify-content: center;
		max-width: 28rem;
		margin: 0 auto;
		margin-top: 1.5rem;

		.wrapper {
			&:hover {
				.time {
					transform: rotateY(360deg);
				}
			}
		}

		.time {
			border: 0.1rem solid $dark;
			padding: 0.25rem 0.5rem;
			border-radius: 0.25rem;
			transition: all 0.2s ease, transform 0.5s linear;
			user-select: none;
			cursor: pointer;
			font-weight: 500;

			$step: math.div(255, 11);

			$times: (
				'1': 0 * $step,
				'2': 1 * $step,
				'3': 2 * $step,
				'4': 3 * $step,
				'5': 4 * $step,
				'6': 5 * $step,
				'7': 6 * $step,
				'8': 7 * $step,
				'9': 8 * $step,
				'10': 9 * $step,
				'11': 10 * $step,
				'12': 11 * $step
			);

			@each $key, $value in $times {
				&.color-#{$key} {
					color: hsl(calc(#{$value}), 70%, 45%);
					background: hsl(calc(#{$value}), 80%, 90%);
					border-color: hsl(calc(#{$value}), 70%, 50%);
				}
			}

			// &:active {
			// 	transform: scale(0.96);
			// }
		}
	}

	.return-btn {
		text-align: center;
		margin: 2rem 0rem;
	}

	.code-box {
		text-align: center;
		max-width: 40rem;
		margin: 0 auto;

		img {
			border-radius: 0.5rem;
		}
	}
</style>
