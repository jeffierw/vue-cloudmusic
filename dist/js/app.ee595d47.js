(function(e){function n(n){for(var c,a,u=n[0],i=n[1],s=n[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);h&&h(n);while(d.length)d.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],c=!0,a=1;a<t.length;a++){var u=t[a];0!==r[u]&&(c=!1)}c&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},a={app:0},r={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b3129":"01d01505","chunk-2d0bfe79":"e3e2ebb1","chunk-2d0c76ba":"0b4fb576","chunk-2d0d0271":"ea1c2850","chunk-2d0d66d9":"4fd390dc","chunk-2d20ec40":"62d1345c","chunk-3423dcac":"a5a2d4a2","chunk-5ad36cca":"20b7725a","chunk-5b87fd17":"201ed48e","chunk-89eb8eba":"75d7c5ac","chunk-0fa6cc3c":"14b7eab6","chunk-4cfe0541":"e94f7764","chunk-a1ae1680":"3435bcd2","chunk-1087a1e2":"c97c76bd","chunk-34fb766b":"67449775","chunk-53b74b66":"4c9c8a3c","chunk-6f9679b2":"c5a12266","chunk-7de4eb8c":"ddcab83d","chunk-8e3b523a":"31f258bc","chunk-ad63baac":"a05f16dc","chunk-de5c820c":"34c959ca","chunk-be6451bc":"fd5d792f"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-3423dcac":1,"chunk-5ad36cca":1,"chunk-5b87fd17":1,"chunk-4cfe0541":1,"chunk-a1ae1680":1,"chunk-1087a1e2":1,"chunk-34fb766b":1,"chunk-53b74b66":1,"chunk-6f9679b2":1,"chunk-7de4eb8c":1,"chunk-8e3b523a":1,"chunk-ad63baac":1,"chunk-de5c820c":1,"chunk-be6451bc":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-2d0b3129":"31d6cfe0","chunk-2d0bfe79":"31d6cfe0","chunk-2d0c76ba":"31d6cfe0","chunk-2d0d0271":"31d6cfe0","chunk-2d0d66d9":"31d6cfe0","chunk-2d20ec40":"31d6cfe0","chunk-3423dcac":"4229b527","chunk-5ad36cca":"846bdc5b","chunk-5b87fd17":"eac3536e","chunk-89eb8eba":"31d6cfe0","chunk-0fa6cc3c":"31d6cfe0","chunk-4cfe0541":"e6eb1eab","chunk-a1ae1680":"4a8a8e40","chunk-1087a1e2":"c20e8766","chunk-34fb766b":"f7d4487a","chunk-53b74b66":"bb6879d7","chunk-6f9679b2":"db6214d1","chunk-7de4eb8c":"fa8f9a75","chunk-8e3b523a":"f51a6ca7","chunk-ad63baac":"b3dc7de1","chunk-de5c820c":"d3dc3a96","chunk-be6451bc":"5793da2d"}[e]+".css",r=i.p+c,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===c||l===r))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===c||l===r)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var c=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete a[e],h.parentNode.removeChild(h),t(o)},h.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){a[e]=0})));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var o=new Promise((function(n,t){c=r[e]=[n,t]}));n.push(c[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(h);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",d.name="ChunkLoadError",d.type=c,d.request=a,t[1](d)}r[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var h=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"05f6":function(e,n,t){"use strict";var c=t("fd41"),a=t.n(c);a.a},"14df":function(e,n,t){},"17d3":function(e,n,t){"use strict";var c=t("e40d"),a=t.n(c);a.a},"1c1a":function(e,n,t){e.exports=t.p+"img/search.cea1e234.svg"},"2d7d":function(e,n,t){},4811:function(e,n,t){e.exports=t.p+"img/menu.e4b15515.svg"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("main-tab-bar"),t("keep-alive",{attrs:{exclude:"RankItem,songSheet,Profile"}},[t("router-view")],1),t("player")],1)},r=[],o=function(){var e=this,n=e.$createElement,c=e._self._c||n;return c("nav-bar",[c("div",{staticClass:"left",attrs:{slot:"left"},slot:"left"},[0!==e.isChoose?c("img",{attrs:{src:t("4811")}}):c("img",{attrs:{src:t("a69b")}})]),c("div",{staticClass:"center",attrs:{slot:"center"},slot:"center"},e._l(e.navbar_center,(function(n,t){return c("div",{key:t,staticClass:"center_item",class:{chooseItem:e.isChoose==t},on:{click:function(n){return e.itemClick(t)}}},[e._v(e._s(n))])})),0),c("div",{attrs:{slot:"right"},slot:"right"},[0!==e.isChoose?c("img",{attrs:{src:t("1c1a")}}):c("img",{attrs:{src:t("f95f")}})])])},u=[],i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"navbar"}},[t("div",{staticClass:"left"},[e._t("left")],2),t("div",{staticClass:"center"},[e._t("center")],2),t("div",{staticClass:"right"},[e._t("right")],2)])},s=[],l={name:"NavBar"},d=l,h=(t("a04a"),t("2877")),f=Object(h["a"])(d,i,s,!1,null,"01e1ec15",null),b=f.exports,p={name:"MainTabBar",components:{NavBar:b},data:function(){return{navbar_center:["我的","发现","视频"],path:["/profile","/find","/video"],isChoose:1}},created:function(){this.$router.push(this.path[1])},methods:{itemClick:function(e){this.isChoose=e,this.$router.push(this.path[e])}}},m=p,k=(t("71d9"),Object(h["a"])(m,o,u,!1,null,"383a4179",null)),v=k.exports,g=function(){var e=this,n=e.$createElement,c=e._self._c||n;return e.$store.state.show?c("div",{staticClass:"player"},[e.$store.state.music.songItem?c("div",{staticClass:"bottom_player"},[c("div",{staticClass:"pic",on:{click:e.goDetail}},[c("img",{attrs:{src:e.$store.state.music.songItem.picUrl}})]),c("div",{staticClass:"songName"},[c("p",[e._v(e._s(e.$store.state.music.songItem.songName))]),null!=e.$store.state.music.songItem.alia&&e.$store.state.music.songItem.alia?c("p",[e._v(" ( "+e._s(e.$store.state.music.songItem.alia)+" )")]):e._e()]),c("div",{staticClass:"playButton"},[c("div",{staticClass:"angle",on:{click:e.pause}},[e.$store.state.Pause?c("div",[c("img",{attrs:{src:t("96bb")}})]):c("div",{staticClass:"angles"})])]),c("div",{staticClass:"list"})]):e._e(),c("audio",{attrs:{src:e.$store.state.music.url,id:"audio",controls:"",autoplay:"",loop:""}})]):e._e()},y=[],_=t("2f62"),w={name:"Player",methods:{pause:function(){this.$store.commit("isPause");var e=document.getElementById("audio");this.$store.state.Pause?e.play():e.pause()},goDetail:function(){this.$router.push("/playDetail")}}},C=w,P=(t("fe94"),Object(h["a"])(C,g,y,!1,null,"715003c5",null)),O=P.exports,j={name:"App",components:{MainTabBar:v,Player:O}},I=j,S=(t("05f6"),Object(h["a"])(I,a,r,!1,null,"49693382",null)),$=S.exports,x=(t("d3b7"),t("8c4f")),T=x["a"].prototype.push;x["a"].prototype.push=function(e){return T.call(this,e).catch((function(e){return e}))},c["a"].use(x["a"]);var E,N=function(){return Promise.all([t.e("chunk-89eb8eba"),t.e("chunk-0fa6cc3c"),t.e("chunk-a1ae1680")]).then(t.bind(null,"5d97"))},A=function(){return t.e("chunk-3423dcac").then(t.bind(null,"8f06"))},B=function(){return t.e("chunk-2d0d66d9").then(t.bind(null,"7307"))},M=function(){return t.e("chunk-2d0b3129").then(t.bind(null,"278f"))},D=function(){return t.e("chunk-2d0c76ba").then(t.bind(null,"5119"))},L=function(){return Promise.all([t.e("chunk-89eb8eba"),t.e("chunk-7de4eb8c")]).then(t.bind(null,"3c36"))},J=function(){return Promise.all([t.e("chunk-89eb8eba"),t.e("chunk-8e3b523a")]).then(t.bind(null,"72ad"))},q=function(){return t.e("chunk-2d0d0271").then(t.bind(null,"6782"))},U=function(){return t.e("chunk-be6451bc").then(t.bind(null,"b6ed"))},F=function(){return t.e("chunk-5ad36cca").then(t.bind(null,"959d"))},H=function(){return Promise.all([t.e("chunk-89eb8eba"),t.e("chunk-6f9679b2")]).then(t.bind(null,"3f2d"))},K=function(){return Promise.all([t.e("chunk-89eb8eba"),t.e("chunk-0fa6cc3c"),t.e("chunk-4cfe0541")]).then(t.bind(null,"0a78"))},R=function(){return Promise.all([t.e("chunk-89eb8eba"),t.e("chunk-53b74b66")]).then(t.bind(null,"b381"))},V=function(){return Promise.all([t.e("chunk-89eb8eba"),t.e("chunk-34fb766b")]).then(t.bind(null,"6354"))},z=function(){return Promise.all([t.e("chunk-89eb8eba"),t.e("chunk-de5c820c")]).then(t.bind(null,"5ad1"))},G=function(){return Promise.all([t.e("chunk-89eb8eba"),t.e("chunk-1087a1e2")]).then(t.bind(null,"521e"))},Q=function(){return Promise.all([t.e("chunk-89eb8eba"),t.e("chunk-ad63baac")]).then(t.bind(null,"9666"))},W=function(){return t.e("chunk-2d20ec40").then(t.bind(null,"b183"))},X=function(){return t.e("chunk-2d0bfe79").then(t.bind(null,"4007"))},Y=function(){return t.e("chunk-5b87fd17").then(t.bind(null,"e02a"))},Z=[{path:"",redirect:"/find"},{path:"/find",component:N},{path:"/recommend",component:M},{path:"/songlist",component:D},{path:"/rank",component:L},{path:"/radio",component:J},{path:"/online",component:q},{path:"/profile",component:A,children:[{path:"",redirect:"create"},{path:"create",component:R},{path:"collected",component:V}]},{path:"/video",component:B},{path:"/rank/:id",component:K,name:"/rank/"},{path:"/find/:id",component:K,name:"/find/"},{path:"/login",component:F},{path:"/login/tel",component:H},{path:"/collect",component:U,children:[{path:"",redirect:"album"},{path:"album",component:z},{path:"singer",component:G},{path:"collectVideo",component:Q},{path:"column",component:W},{path:"mlog",component:X}]},{path:"/playDetail",component:Y}],ee=new x["a"]({routes:Z,mode:"history"}),ne=ee,te=t("ade3"),ce="getMusic",ae="isShow",re="isPause",oe="recommendClick",ue="worldClick",ie="moreClick",se="loginAfter",le="createInfo",de="collectedInfo",he=(t("90b9"),E={},Object(te["a"])(E,ce,(function(e,n){var t=n.index,c=n.url,a=n.songItem;e.music={index:t,url:c,songItem:a}})),Object(te["a"])(E,ae,(function(e){e.show=!0})),Object(te["a"])(E,re,(function(e){e.Pause=!e.Pause})),Object(te["a"])(E,oe,(function(e){e.rank="recommend"})),Object(te["a"])(E,ue,(function(e){e.rank="world"})),Object(te["a"])(E,ie,(function(e){e.rank="more"})),Object(te["a"])(E,se,(function(e,n){console.log(n),localStorage.setItem("userInfo",JSON.stringify(n)),e.userInfo=n})),Object(te["a"])(E,le,(function(e,n){e.createInfo=n})),Object(te["a"])(E,de,(function(e,n){e.collectInfo=n})),E),fe={AddMusic:function(e,n){return new Promise((function(t,c){null==n.url?t("歌曲暂无版权"):(e.commit(ce,n),t("歌曲即将播放"))}))}};c["a"].use(_["a"]);var be={music:{},show:!1,Pause:!0,rank:"recommend",userInfo:localStorage.getItem("userInfo")||{},createInfo:[],collectInfo:[]},pe=new _["a"].Store({state:be,mutations:he,actions:fe}),me=pe,ke=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.ToastShow,expression:"ToastShow"}],staticClass:"toast"},[t("div",[e._v(e._s(e.message))])])},ve=[],ge={name:"Toast",data:function(){return{ToastShow:!1,message:""}},methods:{show:function(e){var n=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500;this.ToastShow=!0,this.message=e,setTimeout((function(){n.ToastShow=!1,n.message=""}),t)}}},ye=ge,_e=(t("17d3"),Object(h["a"])(ye,ke,ve,!1,null,"51392af9",null)),we=_e.exports,Ce={install:function(e){var n=e.extend(we),t=new n;t.$mount(document.createElement("div")),document.body.appendChild(t.$el),e.prototype.$toast=t}},Pe=Ce;c["a"].config.productionTip=!1,c["a"].use(Pe),new c["a"]({render:function(e){return e($)},router:ne,store:me}).$mount("#app")},"5f72":function(e,n,t){},"71d9":function(e,n,t){"use strict";var c=t("14df"),a=t.n(c);a.a},"90b9":function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));t("d3b7"),t("25f0"),t("4d90");function c(e){var n=Math.floor(e/60),t=e-60*n;return n.toString().padStart(2,"0")+":"+t.toString().padStart(2,"0")}},"96bb":function(e,n,t){e.exports=t.p+"img/pause.b8e2cf6c.svg"},a04a:function(e,n,t){"use strict";var c=t("2d7d"),a=t.n(c);a.a},a69b:function(e,n,t){e.exports=t.p+"img/_menu_white.b780011b.svg"},e40d:function(e,n,t){},f95f:function(e,n,t){e.exports=t.p+"img/search_white.ebdb409c.svg"},fd41:function(e,n,t){},fe94:function(e,n,t){"use strict";var c=t("5f72"),a=t.n(c);a.a}});
//# sourceMappingURL=app.ee595d47.js.map