import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "label.svelte-bf0dl6.svelte-bf0dl6{display:block;font-size:0.8rem;margin-bottom:0.25rem}.form.svelte-bf0dl6 div.svelte-bf0dl6{margin-bottom:0.5rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1>Contact</h1>

<div class="${"grid"}"><div><iframe width="${"600"}" height="${"450"}" style="${"border:0"}" loading="${"lazy"}" allowfullscreen referrerpolicy="${"no-referrer-when-downgrade"}" src="${"https://www.google.com/maps/embed/v1/place?key=API_KEY\n    &q=Space+Needle,Seattle+WA"}"></iframe></div>

	<form class="${"form svelte-bf0dl6"}" name="${"contact"}" netlify><div class="${"svelte-bf0dl6"}"><label class="${"svelte-bf0dl6"}">Name</label>
			<input name="${"name"}"></div>

		<div class="${"svelte-bf0dl6"}"><label class="${"svelte-bf0dl6"}">Email</label>
			<input type="${"email"}" name="${"name"}" required></div>

		<div class="${"svelte-bf0dl6"}"><label class="${"svelte-bf0dl6"}">Phone</label>
			<input type="${"tel"}" name="${"name"}"></div>

		<div class="${"svelte-bf0dl6"}"><label class="${"svelte-bf0dl6"}">Organization</label>
			<input name="${"organization"}"></div>

		<div class="${"svelte-bf0dl6"}"><label class="${"svelte-bf0dl6"}">Note</label>
			<textarea name="${"message"}"></textarea></div>

		<button type="${"submit"}">Submit </button></form>
</div>`;
});
export {
  Page as default
};
