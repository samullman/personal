<script>
	import { error } from '@sveltejs/kit';
	/** @type {import('./$types').PageData} */
	export let data;

	import files from '../../../lib/files.json';

	const doc = files[data.slug];

	if (!doc) {
		throw error(404, 'Not found');
	}

	const { title, author } = doc;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="Startup & Enterprise Consulting." />
</svelte:head>

<h1>{title}</h1>

<p>
	{author}
</p>

<p>
	{data.slug}
</p>
