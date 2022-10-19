import { c as create_ssr_component, h as each, d as add_attribute, e as escape } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-htxo3q.svelte-htxo3q{text-align:center}h2.svelte-htxo3q.svelte-htxo3q{text-align:center}.services-list.svelte-htxo3q.svelte-htxo3q{display:flex;flex-wrap:wrap;list-style:none;padding:0;gap:1.5rem;margin-bottom:3rem;justify-content:center}.services-list.svelte-htxo3q li.svelte-htxo3q{flex:0 0 1;display:block;width:100%;max-height:20rem;overflow:hidden}@media screen and (min-width: 30rem){.services-list.svelte-htxo3q li.svelte-htxo3q{flex:0 0 20em}}.services-list.svelte-htxo3q li a.svelte-htxo3q{text-decoration:none;color:inherit}.services-list.svelte-htxo3q li h3.svelte-htxo3q{font-size:1.2rem;margin-bottom:0.5rem;text-transform:uppercase}.services-list.svelte-htxo3q li img.svelte-htxo3q{width:100%;height:100%;box-sizing:border-box;object-fit:cover}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = [
    {
      title: "Solar",
      image: "/panels.jpg",
      link: "/services/solar"
    },
    {
      title: "Solar",
      image: "/panels.jpg",
      link: "/services/solar"
    },
    {
      title: "Solar",
      image: "/panels.jpg",
      link: "/services/solar"
    }
  ];
  $$result.css.add(css);
  return `<h1>Services</h1>

<br>

<p class="${"svelte-htxo3q"}">We help individuals and businesses become energetically independent and financially free through:
</p>

<ul class="${"services-list svelte-htxo3q"}">${each(data, (item) => {
    return `<li class="${"svelte-htxo3q"}"><a${add_attribute("href", item.link, 0)} class="${"svelte-htxo3q"}"><h3 class="${"svelte-htxo3q"}">${escape(item.title)}</h3>
				<img${add_attribute("src", item.image, 0)}${add_attribute("alt", item.title, 0)} class="${"svelte-htxo3q"}"></a>
		</li>`;
  })}</ul>

<h2 class="${"svelte-htxo3q"}">Additional Services</h2>`;
});
export {
  Page as default
};
