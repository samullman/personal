import { c as create_ssr_component, h as each, e as escape, d as add_attribute } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h2.svelte-itirj2.svelte-itirj2{text-align:center}.services-list.svelte-itirj2.svelte-itirj2{display:flex;list-style:none;padding:0;gap:1.5rem;margin-bottom:3rem}.services-list.svelte-itirj2 li.svelte-itirj2{display:block;width:100%;flex:1}.services-list.svelte-itirj2 li img.svelte-itirj2{width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = [
    { title: "Solar", image: "/panels.jpg" },
    { title: "Solar", image: "/panels.jpg" },
    { title: "Solar", image: "/panels.jpg" }
  ];
  $$result.css.add(css);
  return `<h1>Services</h1>
<p>We help individuals and businesses become energetically independent and financially free through:
</p>

<ul class="${"services-list svelte-itirj2"}">${each(data, (item) => {
    return `<li class="${"svelte-itirj2"}"><p>${escape(item.title)}</p>
			<img${add_attribute("src", item.image, 0)}${add_attribute("alt", item.title, 0)} class="${"svelte-itirj2"}">
		</li>`;
  })}</ul>

<h2 class="${"svelte-itirj2"}">Additional Services</h2>`;
});
export {
  Page as default
};
