import { c as create_ssr_component, b as createEventDispatcher, d as add_attribute, e as escape, v as validate_component } from "../../chunks/index.js";
const app = "";
const Drawer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".drawer.svelte-1c92i6o.svelte-1c92i6o{position:fixed;top:0;left:0;height:100%;width:100%;z-index:-1;transition:z-index var(--duration) step-end}.drawer.open.svelte-1c92i6o.svelte-1c92i6o{z-index:99;transition:z-index var(--duration) step-start}.overlay.svelte-1c92i6o.svelte-1c92i6o{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(100, 100, 100, 0.5);opacity:0;z-index:2;transition:opacity var(--duration) ease}.drawer.open.svelte-1c92i6o .overlay.svelte-1c92i6o{opacity:1}.panel.svelte-1c92i6o.svelte-1c92i6o{position:fixed;width:100%;height:100%;background:white;z-index:3;transition:transform var(--duration) ease;overflow:auto}.panel.left.svelte-1c92i6o.svelte-1c92i6o{left:0;transform:translate(-100%, 0)}.panel.right.svelte-1c92i6o.svelte-1c92i6o{right:0;transform:translate(100%, 0)}.panel.top.svelte-1c92i6o.svelte-1c92i6o{top:0;transform:translate(0, -100%)}.panel.bottom.svelte-1c92i6o.svelte-1c92i6o{bottom:0;transform:translate(0, 100%)}.panel.left.size.svelte-1c92i6o.svelte-1c92i6o,.panel.right.size.svelte-1c92i6o.svelte-1c92i6o{max-width:var(--size)}.panel.top.size.svelte-1c92i6o.svelte-1c92i6o,.panel.bottom.size.svelte-1c92i6o.svelte-1c92i6o{max-height:var(--size)}.drawer.open.svelte-1c92i6o .panel.svelte-1c92i6o{transform:translate(0, 0)}",
  map: null
};
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let style;
  let { open = false } = $$props;
  let { duration = 0.2 } = $$props;
  let { placement = "left" } = $$props;
  let { size = null } = $$props;
  createEventDispatcher();
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$2);
  style = `--duration: ${duration}s; --size: ${size};`;
  return `<aside class="${["drawer svelte-1c92i6o", open ? "open" : ""].join(" ").trim()}"${add_attribute("style", style, 0)}><div class="${"overlay svelte-1c92i6o"}"></div>

    <div class="${["panel " + escape(placement, true) + " svelte-1c92i6o", size ? "size" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div>

</aside>`;
});
const header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".header.svelte-1xmlpo1.svelte-1xmlpo1{position:fixed;bottom:1rem;right:1rem;display:flex;flex-direction:column;gap:0.5rem;padding:0.4rem;background:white;backdrop-filter:blur(5px);border-radius:0.5rem;overflow:hidden;border:0.2rem;transition:background 0.2s ease}@media screen and (min-width: 30rem){.header.svelte-1xmlpo1.svelte-1xmlpo1{flex-direction:row;right:1.5rem;padding:0.5rem;top:1rem;bottom:auto}}.dark-mode .header.svelte-1xmlpo1.svelte-1xmlpo1{background:#0a0a0a}.ionicon.svelte-1xmlpo1.svelte-1xmlpo1{margin:0;height:100%}.menu-button.svelte-1xmlpo1.svelte-1xmlpo1{display:block}.menu-button.svelte-1xmlpo1 svg.svelte-1xmlpo1{margin-bottom:-0.12rem;width:1.9rem}.sunny-button.svelte-1xmlpo1.svelte-1xmlpo1{padding-top:0.44rem;padding-bottom:0.42rem}@media screen and (min-width: 30rem){.sunny-button.svelte-1xmlpo1.svelte-1xmlpo1{padding-top:0.4rem}}.sunny-button.svelte-1xmlpo1 svg.svelte-1xmlpo1{width:1.6rem;margin-bottom:-0.2rem}.chevron-button.svelte-1xmlpo1.svelte-1xmlpo1{opacity:1;transition:0.2s ease}.chevron-button.svelte-1xmlpo1 svg.svelte-1xmlpo1{width:1.7rem}.back-to-top.hidden.svelte-1xmlpo1.svelte-1xmlpo1{display:none;opacity:0;visibility:hidden}.close-button.svelte-1xmlpo1.svelte-1xmlpo1{padding-top:0.38rem}.close-button.svelte-1xmlpo1 svg.svelte-1xmlpo1{width:1.5rem;height:1.5rem}.drawer.svelte-1xmlpo1.svelte-1xmlpo1{padding:1rem}.drawer.svelte-1xmlpo1 .contents.svelte-1xmlpo1{padding-top:1rem}@media screen and (min-width: 30rem){.drawer.svelte-1xmlpo1.svelte-1xmlpo1{padding:1.8rem}}nav.svelte-1xmlpo1.svelte-1xmlpo1{display:flex;flex-direction:column}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showOnPx = 150 } = $$props;
  let open = false;
  if ($$props.showOnPx === void 0 && $$bindings.showOnPx && showOnPx !== void 0)
    $$bindings.showOnPx(showOnPx);
  $$result.css.add(css$1);
  return `

<div class="${"header svelte-1xmlpo1"}"><button class="${["chevron-button back-to-top svelte-1xmlpo1", "hidden"].join(" ").trim()}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"ionicon svelte-1xmlpo1"}" viewBox="${"0 0 512 512"}"><title>Chevron Up</title><path fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"48"}" d="${"M112 328l144-144 144 144"}"></path></svg></button>

	<button class="${"sunny-button svelte-1xmlpo1"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"ionicon svelte-1xmlpo1"}" viewBox="${"0 0 512 512"}"><title>Sunny</title><path fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-miterlimit="${"10"}" stroke-width="${"32"}" d="${"M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"}"></path><circle cx="${"256"}" cy="${"256"}" r="${"80"}" fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-miterlimit="${"10"}" stroke-width="${"32"}"></circle></svg></button>

	<button class="${"menu-button svelte-1xmlpo1"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"ionicon svelte-1xmlpo1"}" viewBox="${"0 0 512 512"}"><title>Reorder Two</title><path fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"32"}" d="${"M112 304h288M112 208h288"}"></path></svg></button></div>

${validate_component(Drawer, "Drawer").$$render(
    $$result,
    {
      open,
      size: "50%",
      placement: "right",
      duration: "0.2"
    },
    {},
    {
      default: () => {
        return `<div class="${"drawer svelte-1xmlpo1"}"><button class="${"close-button svelte-1xmlpo1"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"ionicon svelte-1xmlpo1"}" viewBox="${"0 0 512 512"}"><title>Close</title><path fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"32"}" d="${"M368 368L144 144M368 144L144 368"}"></path></svg></button>

		<div class="${"contents svelte-1xmlpo1"}"><nav class="${"svelte-1xmlpo1"}"><a href="${"/"}">Home</a>
				<a href="${"/about"}">About</a>
				<a href="${"/services"}">Services</a>
				<a href="${"/contact"}">Contact</a></nav></div></div>`;
      }
    }
  )}`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-pi5pbk.svelte-pi5pbk{display:flex;gap:0.5rem;margin:1rem 0rem}nav.svelte-pi5pbk a.svelte-pi5pbk{color:#3a3a3a;transition:color 0.2s ease}@media screen and (min-width: 30rem){nav.svelte-pi5pbk.svelte-pi5pbk{justify-content:center}}.dark-mode nav.svelte-pi5pbk a.svelte-pi5pbk{color:#cacaca}.logo.svelte-pi5pbk.svelte-pi5pbk{width:10rem;margin-bottom:1rem;display:block}@media screen and (min-width: 30rem){.logo.svelte-pi5pbk.svelte-pi5pbk{margin:0 auto;margin-bottom:1rem}}main.svelte-pi5pbk.svelte-pi5pbk{min-height:60vh;display:flex;flex-direction:column}.page.svelte-pi5pbk.svelte-pi5pbk{padding-top:1rem;max-width:40rem;margin:0 auto}hr.svelte-pi5pbk.svelte-pi5pbk{margin:2rem 0 1rem 0}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<a href="${"/"}" preload><img class="${"logo svelte-pi5pbk"}" src="${"/max-logo.png"}" alt="${"Massive Logo"}"></a>

<nav class="${"svelte-pi5pbk"}"><a href="${"/"}" class="${"svelte-pi5pbk"}">Home</a>
	<a href="${"/about"}" class="${"svelte-pi5pbk"}">About</a>
	<a href="${"/services"}" class="${"svelte-pi5pbk"}">Services</a>
	<a href="${"/contact"}" class="${"svelte-pi5pbk"}">Contact</a></nav>

<main class="${"svelte-pi5pbk"}"><div class="${"page svelte-pi5pbk"}">${slots.default ? slots.default({}) : ``}</div></main>

<hr class="${"svelte-pi5pbk"}">
<div>Massive Technologes, LLC</div>
<div>2022</div>

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
