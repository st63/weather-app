if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,t,o)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(t.map((s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}}))).then((e=>{const s=o(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-039c9a03"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"api/index.ts",revision:"23aa7b4dc54c88aeef66dae5b14bcc91"},{url:"api/module.d.ts",revision:"a5ecfe850d3260a826b0b01800b6c66b"},{url:"App.tsx",revision:"0fb34cb2124be69d69fb8c8977360cea"},{url:"components/CitySelect/index.tsx",revision:"42d11b739e89fdba251b04a77ab4a5ac"},{url:"components/CitySelect/styles.tsx",revision:"6eb844d90c48a663c85235e074910b6d"},{url:"components/Input/index.tsx",revision:"b717d384eb0a80bb36e8afb4365516c1"},{url:"components/Input/styles.tsx",revision:"5d9f6b2d30e94b880671f72950af776d"},{url:"components/WeatherBlock/hooks.ts",revision:"21bfc9dad4505b12470b12a7fa805d89"},{url:"components/WeatherBlock/styles.tsx",revision:"80052d9668588530c7a77ed409274288"},{url:"components/WeatherBlock/WeatherBlockOfThePast/hooks.ts",revision:"8f8c55b261a15341e7efe5e2906c11ad"},{url:"components/WeatherBlock/WeatherBlockOfThePast/index.tsx",revision:"c729b4f62ecb0d866c0ad0d171feb7e5"},{url:"components/WeatherBlock/WeatherBlockOfThePast/styles.tsx",revision:"a1157297ce049fa966de65feb995ab4f"},{url:"components/WeatherBlock/WeatherBlockOnSevenDays/hooks.ts",revision:"bddcb75ca34dc2655fa05f65d2c287aa"},{url:"components/WeatherBlock/WeatherBlockOnSevenDays/index.tsx",revision:"3c26e42d2134a6040de6a9cc4d441961"},{url:"components/WeatherBlock/WeatherBlockOnSevenDays/styles.tsx",revision:"abc13d22f03f3bb122c1a1c666f63e26"},{url:"components/WeatherCard/index.tsx",revision:"5b541e895d2709faf34e4c0f63fb6472"},{url:"components/WeatherCard/styles.tsx",revision:"9b00ef09bfc8a7fb1f01e2d859c44be7"},{url:"config.ts",revision:"e8fbfd06c42f5e48bf9971e3a60e3126"},{url:"images/background-bottom.png",revision:"711aeab9c13d42accc144f48aef8e7b7"},{url:"images/background-top.png",revision:"6f33049fb7014d0216b093e8e4733ed7"},{url:"images/placeholder-icon.svg",revision:"6637301a1891b49a919c07e56d04e41b"},{url:"index.tsx",revision:"4dbbf030b5bb52f6d19f678a7c858a67"},{url:"module.d.ts",revision:"533fa3523798be6e0c06c826d51e182e"},{url:"pages/MainPage/index.tsx",revision:"05e92d5e28e5b1df56db63ce84f09745"},{url:"pages/styles.tsx",revision:"818aae72453deb98478557e6fc622fc7"},{url:"react-app-env.d.ts",revision:"3b12a2a445e35988cd2eb9f73d12c500"},{url:"redux/store.tsx",revision:"80db32f9f1d45b02a78d65ee9f33e7b3"},{url:"redux/weather/actions.ts",revision:"b6003f22c718a1ccdb494bb5efd8468d"},{url:"redux/weather/reducer.ts",revision:"ed1562fc6dda966c9c364e99e6a2767d"},{url:"redux/weather/selectors.ts",revision:"132715035974c94cb67f956e06459382"},{url:"redux/weather/types.ts",revision:"14be94c3927089093bb137da1f848357"},{url:"styles.tsx",revision:"f4f3d05571b1dd7d6894c00fe4fb418c"},{url:"utils.ts",revision:"c55a45762460e5adff3169234eb7a15f"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
