import { c as create_ssr_component } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-d9nabn{font-size:3rem}p.svelte-d9nabn{text-align:center;max-width:40rem;margin:1rem auto}.hero.svelte-d9nabn{position:relative;height:30rem;width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 class="${"svelte-d9nabn"}">It&#39;s Massive</h1>
<p class="${"svelte-d9nabn"}">We&#39;re a energy and solar company based in Austin, TX.</p>

<br>

<div class="${"hero rounded svelte-d9nabn"}"><img class="${"rounded"}" src="${"/sunset.png"}" alt="${"Sunset"}"></div>
<br>

<p class="${"svelte-d9nabn"}">We help individuals and organizations achieve smart energy solutions at their residence.</p>`;
});
export {
  Page as default
};
