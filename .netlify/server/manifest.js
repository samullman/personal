export const manifest = {
	appDir: "_app",
	assets: new Set(["app.scss","chevron-up-outline.svg","close-outline.svg","favicon.png","max-logo.png","panels.jpg","reorder-two-outline.svg","sunny-outline.svg","sunset.png"]),
	mimeTypes: {".scss":"text/x-scss",".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		entry: {"file":"_app/immutable/start-b6a84c1a.js","imports":["_app/immutable/start-b6a84c1a.js","_app/immutable/chunks/index-a067bef0.js","_app/immutable/chunks/singletons-676ac91f.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js')
		],
		routes: [
			{
					id: "",
					pattern: /^\/$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":2},
					endpoint: null
				},
			{
					id: "about",
					pattern: /^\/about\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":3},
					endpoint: null
				},
			{
					id: "contact",
					pattern: /^\/contact\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":4},
					endpoint: null
				},
			{
					id: "help",
					pattern: /^\/help\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":5},
					endpoint: null
				},
			{
					id: "prayer",
					pattern: /^\/prayer\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":6},
					endpoint: null
				},
			{
					id: "services",
					pattern: /^\/services\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":7},
					endpoint: null
				}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
