import { persist, createLocalStorage } from '@macfja/svelte-persistent-store';
import { writable } from 'svelte/store';

import links from '$lib/data/links.json';

var result = links.reduce(function (map, obj) {
	map[obj.url] = false;
	return map;
}, {});

console.log(result);

const pageViews = persist(writable(result), createLocalStorage(), 'pageViews');

export default pageViews;

// import pageViews from '../stores/page';

// $pageViews;

// const result = links.reduce(function (map, obj) {
// 	map[obj.url] = false;
// 	return map;
// }, {});

// function resetPageViews() {
// 	$pageViews = result;
// 	pageViews.set(result);
// }

// { #if $pageViews[link.url] == true }
// <img class="icon" src="/green-check.svg" alt="Green Check" />
// {/if}

// <div>
// 	<small>
// 		<a href="JavaScript:Void(0);" on:click={resetPageViews}> Reset </a>
// 	</small>
// </div>

// function store() {
// 	const { subscribe, set, update } = writable(result);

// 	return {
// 		subscribe,
// 		increment: () => update(n => n + 1),
// 		decrement: () => update(n => n - 1),
// 	};
// }
