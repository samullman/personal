import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "label.svelte-bf0dl6.svelte-bf0dl6{display:block;font-size:0.8rem;margin-bottom:0.25rem}.form.svelte-bf0dl6 div.svelte-bf0dl6{margin-bottom:0.5rem}select.svelte-bf0dl6.svelte-bf0dl6{max-width:10rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1>Help</h1>

<p>Sometimes we just need to talk, sometimes we just need to be heard</p>

<div class="${"form svelte-bf0dl6"}"><div class="${"svelte-bf0dl6"}"><label class="${"svelte-bf0dl6"}">How can I help?</label>
		<select class="${"svelte-bf0dl6"}"><option value="${""}"></option><option value="${"I'd like to chat"}">I&#39;d like to chat</option><option value="${"There's something I don't understand"}">There&#39;s something I don&#39;t understand</option></select></div>

	<div class="${"svelte-bf0dl6"}"><label class="${"svelte-bf0dl6"}">Name</label>
		<input></div>

	<div class="${"svelte-bf0dl6"}"><label class="${"svelte-bf0dl6"}">Email</label>
		<input></div>

	<div class="${"svelte-bf0dl6"}"><label class="${"svelte-bf0dl6"}">Phone</label>
		<input></div>
</div>`;
});
export {
  Page as default
};
