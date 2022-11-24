import { error } from '@sveltejs/kit';

export function load(props) {
	return {
		slug: props.params.slug,
	};

	throw error(404, 'Not found');
}