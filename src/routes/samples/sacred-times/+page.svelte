<script lang="ts">
	let times: {hour: number, minute: number}[] = [];
	let hour = 1;

	// iterate hours
	while (hour <= 12) {
		checkTime(hour);
		hour += 1;
	}

	function checkTime(hour: number) {
		let minute = 0;

		// iterate minutes
		while (minute <= 60) {
			let str = hour.toString() + minute.toString();

			if (isSpecial(hour, minute) || isPalidrome(str) || isDouble(str)) {
				times.push({
					hour,
					minute
				});
			}

			minute += 1;
		}
	}

	function reverse(str: string) {
		return str.split('').reverse().join('');
	}

	function isPalidrome(str: string) {
		return str === reverse(str);
	}

	function isDouble(str: string) {
		return str.slice(0, 2) == str.slice(2, 4);
	}

	function isSpecial(hour: number, minute: number) {
		if (hour == 1 && minute == 23) {
			return true;
		} else if (hour == 12 && minute == 34) {
			return true;
		} else if (hour == 2 && minute == 34) {
			return true;
		} else if (hour == 3 && minute == 45) {
			return true;
		} else if (hour == 4 && minute == 56) {
			return true;
		} else if (hour == 3 && minute == 21) {
			return true;
		} else if (hour == 4 && minute == 32) {
			return true;
		} else {
			return false;
		}
	}

	// for adding 0 to minute values less than 10
	function parseMinute(minute: number) {
		if (minute < 10) {
			return '0' + minute;
		} else {
			return minute;
		}
	}
</script>

<h1>Sacred Times</h1>

<p>
	Programatically generated, color-coded list of digital times that mean something?
</p>

<div class="sacred-times">
	{#each times as { hour, minute }}
		<div class={'time color-' + hour + ' ' + 'index-' + minute}>
			{hour}:{parseMinute(minute)}
		</div>
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

	.sacred-times {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
		margin-top: 1.5rem;

		.time {
			border: 0.1rem solid $dark;
			padding: 0.25rem 0.5rem;
			border-radius: 0.25rem;
			transition: all 0.2s ease;
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

			&:hover {
				transform: scale(1.08);
			}
			&:active {
				transform: scale(0.96);
			}
		}
	}

	.return-btn {
		margin: 2rem 0rem;
	}

	.code-box {
		img {
			border-radius: 0.5rem;
		}
	}
</style>
