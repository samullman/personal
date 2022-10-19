export const manifest = {
	appDir: "_app",
	assets: new Set(["app.scss","chevron-up-outline.svg","close-outline.svg","favicon.png","max-logo.png","panels.jpg","reorder-two-outline.svg","sunny-outline.svg","sunset.png"]),
	mimeTypes: {".scss":"text/x-scss",".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		entry: {"file":"_app/immutable/start-a5ccb004.js","imports":["_app/immutable/start-a5ccb004.js","_app/immutable/chunks/index-a067bef0.js","_app/immutable/chunks/singletons-906afddf.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
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
					id: "contact",
					pattern: /^\/contact\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":3},
					endpoint: null
				},
			{
					id: "services",
					pattern: /^\/services\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":4},
					endpoint: null
				},
			{
					id: "services/solar",
					pattern: /^\/services\/solar\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":5},
					endpoint: null
				}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
