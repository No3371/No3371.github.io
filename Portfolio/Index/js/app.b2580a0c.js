(function(t){function o(o){for(var n,r,s=o[0],l=o[1],c=o[2],p=0,h=[];p<s.length;p++)r=s[p],i[r]&&h.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(o);while(h.length)h.shift()();return a.push.apply(a,c||[]),e()}function e(){for(var t,o=0;o<a.length;o++){for(var e=a[o],n=!0,s=1;s<e.length;s++){var l=e[s];0!==i[l]&&(n=!1)}n&&(a.splice(o--,1),t=r(r.s=e[0]))}return t}var n={},i={app:0},a=[];function r(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,o,e){r.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,o){if(1&o&&(t=r(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)r.d(e,n,function(o){return t[o]}.bind(null,n));return e},r.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(o,"a",o),o},r.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},r.p="/Portfolio/Index/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=o,s=s.slice();for(var c=0;c<s.length;c++)o(s[c]);var u=l;a.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"034f":function(t,o,e){"use strict";var n=e("64a9"),i=e.n(n);i.a},1:function(t,o){},2935:function(t,o,e){},"2a70":function(t,o,e){},"47a5":function(t,o,e){},"56d7":function(t,o,e){"use strict";e.r(o);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("body",{attrs:{id:"app-body"}},[t._m(0),e("div",{staticStyle:{height:"2em"}}),e("slideout-panel"),e("div",{attrs:{id:"Portfolio-Wrap"}},[e("h1",{staticClass:"globalText"},[t._v("遊戲")]),e("div",{attrs:{id:"Portfolio"}},[t._l(t.products,function(o){return e("info-card",{key:o.title,attrs:{info:o,image:o.image},on:{"card-clicked":function(e){return t.get_content(e,o)}}})}),t._l(8,function(t){return e("div",{key:t,staticClass:"place-holder"})})],2)]),e("div",{attrs:{id:"Portfolio-Wrap"}},[e("h1",{staticClass:"globalText"},[t._v("迷你專案")]),e("div",{attrs:{id:"Portfolio"}},[t._l(t.projects,function(o){return e("info-card",{key:o.title,attrs:{info:o,image:o.image},on:{"card-clicked":function(e){return t.get_content(e,o)}}})}),t._l(8,function(t){return e("div",{key:t,staticClass:"place-holder"})})],2)]),e("div",{attrs:{id:"Portfolio-Wrap"}},[e("h1",{staticClass:"globalText"},[t._v("工具箱")]),e("div",{attrs:{id:"Portfolio"}},[t._l(t.toolbox,function(o){return e("info-card",{key:o.title,attrs:{info:o,image:o.image},on:{"card-clicked":function(e){return t.get_content(e,o)}}})}),t._l(8,function(t){return e("div",{key:t,staticClass:"place-holder"})})],2)]),e("div",{attrs:{id:"Portfolio-Wrap"}},[e("h1",{staticClass:"globalText"},[t._v("設計專案")]),e("div",{attrs:{id:"Portfolio"}},[t._l(t.designs,function(o){return e("info-card",{key:o.title,attrs:{info:o,image:o.image},on:{"card-clicked":function(e){return t.get_content(e,o)}}})}),t._l(8,function(t){return e("div",{key:t,staticClass:"place-holder"})})],2)])],1)},a=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"brief"}},[e("div",{attrs:{id:"briefPhoto"}},[e("img",{attrs:{id:"photo",src:"https://aboutme.imgix.net/background/users/l/a/u/laugholouder_1551342166_037.jpg?q=40&dpr=2&auto=format&fit=max&w=960&h=540"}})]),e("div",{attrs:{id:"briefTextZone"}},[e("h1",{staticClass:"globalText"},[t._v("Ren Chen / 陳銘仁")]),e("h3",{staticClass:"globalText secondary"},[t._v("Unity C# Developer / UI Designer")]),e("div",{attrs:{id:"doubleAbout"}},[e("div",{attrs:{id:"aboutPro"}},[e("h4",{staticClass:"globalText accentColor"},[t._v("About My Profession")]),e("p",{staticClass:"globalText"},[t._v("> C# 開發者，主攻 Unity 應用、拓展與遊戲製作")]),e("p",{staticClass:"globalText"},[t._v("> Freelance 圖形/UI 設計師經驗")]),e("p",{staticClass:"globalText"},[t._v("> 具備基礎 HTML / JS 能力")]),e("p",{staticClass:"globalText"},[t._v("> 因興趣廣泛在團隊中跨領域溝通無礙")]),e("p",{staticClass:"globalText"},[t._v("> 理念：設計先行、體驗為王")])]),e("div",{staticClass:"vSpp"}),e("div",{staticClass:"v-place-holder-1em"}),e("div",{attrs:{id:"aboutme"}},[e("h4",{staticClass:"globalText accentColor"},[t._v("About Me")]),e("p",{staticClass:"globalText"},[t._v("> 樂於傾聽，不愛多說話")]),e("p",{staticClass:"globalText"},[t._v("> 畢生的興趣是創作，日常的興趣是宅")]),e("p",{staticClass:"globalText"},[t._v("> 喜歡使用各種顏文字(๑´ㅂ`๑)")]),e("p",{staticClass:"globalText"},[t._v("> 什麼都想學、什麼都感興趣")]),e("p",{staticClass:"globalText"},[t._v("> 有點工作狂，但生活中非常懶")])])]),e("div",{staticClass:"v-place-holder-1em"}),e("div",{attrs:{id:"doubleAbout"}},[e("div",{attrs:{id:"aboutNext"}},[e("h4",{staticClass:"globalText accentColor"},[t._v("What's Next")]),e("p",{staticClass:"globalText"},[t._v("> 圖學知識與 Shader 技術")]),e("p",{staticClass:"globalText"},[t._v("> 3D 遊戲與 VR/AR 技術嘗試")]),e("p",{staticClass:"globalText"},[t._v("> C#/Golang 伺服器技術")]),e("p",{staticClass:"globalText"},[t._v("> 研究 Node.js 與其他 JS 框架")]),e("p",{staticClass:"globalText"},[t._v("> Enjin 或其他區塊鏈技術體系")])]),e("div",{staticClass:"vSpp"}),e("div",{staticClass:"v-place-holder-1em"}),e("div",{attrs:{id:"aboutThoughts"}},[e("h4",{staticClass:"globalText accentColor"},[t._v("My Thoughts")]),e("p",{staticClass:"globalText"},[t._v("> 認為遊戲的下一個十年屬於「社群」")]),e("p",{staticClass:"globalText"},[t._v("> 認為 VR 的普及取決於感官設備的進展")]),e("p",{staticClass:"globalText"},[t._v("> 認為 AR 會更偏向現實的生活與工作強化")]),e("p",{staticClass:"globalText"},[t._v("> 期待區塊鏈技術的普及與大規模商用")]),e("p",{staticClass:"globalText"},[t._v("> 自認可能可以領導，但不可能學會管理")])])]),e("div",{staticClass:"v-place-holder-1em"}),e("h4",{staticClass:"globalText accentColor"},[t._v("Bio")]),e("p",{staticClass:"globalText"},[t._v("\n        電繪、設計、自己做遊戲，任何形式的創作都令我著迷。\n        "),e("br"),t._v("熱衷於解決問題，製作解決方案為我帶來樂趣。\n        "),e("br"),t._v("喜歡模擬、策略、戰旗、RougeLike、生存、非線性、高自由度、細節豐富、玩的時候不會腦子放空的遊戲。\n        "),e("br"),t._v("長期的目標是製作精緻的社群 MMORPG；短期的目標是精巧、優雅而有趣的小遊戲。\n        "),e("br"),t._v("期望能與優秀的團隊夥伴一起努力。\n      ")]),e("p",[e("br")])])])}],r=(e("ac6a"),e("5df3"),e("f400"),function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"info-card-wrapper",on:{click:function(o){return o.preventDefault(),t.handler(o)}}},[e("div",{staticClass:"info-card"},[e("div",{staticClass:"info-image-wrapper"},[e("img",{staticClass:"info-image",attrs:{src:t.info.image}})]),e("div",{staticClass:"info-desc"},[e("div",{staticClass:"info-desc-wrapper"},[e("h3",[t._v(t._s(t.info.title))]),e("p",[t._v(t._s(t.info.brief))])])])])])}),s=[],l={name:"info-card",props:{info:{type:Object,required:!0,default:null}},methods:{handler:function(){this.$emit("card-clicked",this.info)}}},c=l,u=(e("fc74"),e("2877")),p=Object(u["a"])(c,r,s,!1,null,"37b7285e",null),h=p.exports,d=e("7ee8"),g=e.n(d),f=(e("2935"),e("2a70"),e("3022"),e("02dd"),{components:{InfoCard:h,VueSlideoutPanel:g.a},data:function(){return{products:[{title:"HomingMeSoul",brief:"#GGJ2019 #PartyGame",content_url:"https://cors-anywhere.herokuapp.com/https://no3371.github.io/Portfolio/HomingMeSoul/HomingMeSoul.html",image:"https://raw.githubusercontent.com/No3371/No3371.github.io/master/Portfolio/HomingMeSoul/Assets/Screenshot.jpg"},{title:"Hourglass",brief:"#RPG #劇情 #時空穿梭 #畢製專案",content_url:"https://www.facebook.com/HourglassPN/",image:"https://raw.githubusercontent.com/No3371/No3371.github.io/master/Portfolio/Hourglass/Resources/Splash.jpg",is_portal:!0}],projects:[{title:"材質分區染色",brief:"#3D #染色 #通道混合",content_url:"https://cors-anywhere.herokuapp.com/https://no3371.github.io/Portfolio/Develop_ModelMultiDye/info.html",image:"https://raw.githubusercontent.com/No3371/No3371.github.io/master/Portfolio/Develop_ModelMultiDye/Assets/SS.jpg"}],toolbox:[{title:"StorySystem",brief:"#Unity #故事編輯/演出 #節點式架構",content_url:"https://cors-anywhere.herokuapp.com/https://no3371.github.io/Portfolio/StorySystem/StorySystem.html",image:"https://raw.githubusercontent.com/No3371/No3371.github.io/master/Portfolio/StorySystem/Resources/Editor.jpg"},{title:"Localiza",brief:"#Unity #多國語系編輯器",content_url:"https://cors-anywhere.herokuapp.com/https://no3371.github.io/Portfolio/Localiza/Localiza.html",image:"https://raw.githubusercontent.com/No3371/No3371.github.io/master/Portfolio/Localiza/Resources/Editor2.png"},{title:"StatePattern",brief:"#C_Sharp #隨插即用狀態模式框架",image:"https://raw.githubusercontent.com/No3371/No3371.github.io/master/Portfolio/Resources/C%23%20Framework.png",content_url:"https://gitlab.com/No3371/statepatterncsharp?fbclid=IwAR3117b9e22byeTXNiuzjxaEfbXE3j7hwORzBfcjSp3q7Cd_pnGwRQEXhIU",is_portal:!0},{title:"PhysicCaster2D",brief:"#Unity #FastPrototyping #2D碰撞檢測",image:"https://raw.githubusercontent.com/No3371/No3371.github.io/master/Portfolio/Resources/C%23%20Library.png",content_url:"https://gitlab.com/No3371/physiccaster2d",is_portal:!0},{title:"InteractionFramework",brief:"#Unity #物件互動系統框架",image:"https://raw.githubusercontent.com/No3371/No3371.github.io/master/Portfolio/Resources/C%23%20Framework.png",content_url:"https://cors-anywhere.herokuapp.com/https://no3371.github.io/Portfolio/Develop_InteractionFramework/Info.html"},{title:"InventorySystem",brief:"#Unity #輕量物品系統 #資料導向",image:"https://raw.githubusercontent.com/No3371/No3371.github.io/master/Portfolio/Resources/C%23%20Library.png",content_url:"https://cors-anywhere.herokuapp.com/https://no3371.github.io/Portfolio/Develop_InventorySystem/Info.html"},{title:"GameObjectPool",brief:"#Unity #ObjectPooling",image:"https://raw.githubusercontent.com/No3371/No3371.github.io/master/Portfolio/Resources/C%23%20Library.png",content_url:"https://gitlab.com/No3371/gameobjectpool",is_portal:!0},{title:"BiMapCSharp",brief:"#C_Sharp #雙向 Dictionary",image:"https://raw.githubusercontent.com/No3371/No3371.github.io/master/Portfolio/Resources/C%23%20Library.png",content_url:"https://gitlab.com/No3371/bimapcsharp",is_portal:!0},{title:"GenericCallbacks",brief:"#Unity #FastPrototyping",image:"https://raw.githubusercontent.com/No3371/No3371.github.io/master/Portfolio/Resources/C%23%20Library.png",content_url:"https://gitlab.com/No3371/unity_generictrigger",is_portal:!0},{title:"SingletonLocator",brief:"#C_Sharp #Singleton",image:"https://raw.githubusercontent.com/No3371/No3371.github.io/master/Portfolio/Resources/C%23%20Library.png",content_url:"https://gitlab.com/No3371/singletonlocatorcsharp",is_portal:!0},{title:"DontDestroyOnLoad_Extension",brief:"#Unity #Extension",image:"https://raw.githubusercontent.com/No3371/No3371.github.io/master/Portfolio/Resources/C%23%20Library.png",content_url:"https://gitlab.com/No3371/dontdestoryonload_ext_unity",is_portal:!0}],designs:[{title:"HeyYZU",brief:"#App #UI/UX #校園助手/Portal",image:"https://raw.githubusercontent.com/No3371/No3371.github.io/master/Portfolio/Design_HeyYZU/Assets/AppIcon.png",content_url:"https://cors-anywhere.herokuapp.com/https://no3371.github.io/Portfolio/Design_HeyYZU/info.html"},{title:"點餐網站模型",brief:"#Mockup #線上點餐",image:"https://drive.google.com/uc?export=view&id=1Tt6AN2-hppKjDnwC4lWV44dVYGZO0rO2",content_url:"https://cors-anywhere.herokuapp.com/https://no3371.github.io/Portfolio/Design_FeedMe/info.html"},{title:"MFCT Logo",brief:"#網路品牌",image:"https://raw.githubusercontent.com/No3371/No3371.github.io/master/Portfolio/Design_MFCT/Logo.jpg",content_url:"https://www.facebook.com/marvel.figures.custom.taiwan/",is_portal:!0},{title:"其他 Web 設計",brief:"",image:"https://raw.githubusercontent.com/No3371/No3371.github.io/master/Portfolio/Resources/Design.png",content_url:"https://cors-anywhere.herokuapp.com/https://no3371.github.io/Portfolio/Design_WebsiteProjects/Info.html"},{title:"其他圖形設計",brief:"",image:"https://raw.githubusercontent.com/No3371/No3371.github.io/master/Portfolio/Resources/Design.png",content_url:"https://cors-anywhere.herokuapp.com/https://no3371.github.io/Portfolio/Design_GraphicProjects/Info.html"}],panelInstance:null,content_url:null,shouldClosed:{v:!1},activeHash:"#Index",panel1Form:{openOn:"right"},project_detail_loaded:!1,content_cache:null}},mounted:function(){var t=this;this.content_cache=new Map;var o=this;window.onload=function(){t.activeHash="#Index",window.location.hash=t.activeHash},window.addEventListener("hashchange",function(t){o.activeHash=window.location.hash},!1)},watch:{activeHash:function(t,o){"#Index"===t&&"#Index"!=o&&(this.shouldClosed.v=!0)}},methods:{showPanel:function(){this.shouldClosed.v=!1,this.panelInstance=this.$showPanel({component:"panel-1",cssClass:"panel-1",props:{shouldClosed:this.shouldClosed},keepAlive:!1}),this.panelInstance.promise.then(function(t){window.location.hash="#Index"})},get_content:function(t,o){var e=this;if(o.is_portal)window.open(o.content_url,"_blank");else{if(this.project_detail_loaded=!1,this.showPanel(),window.location.hash="#"+o.title,void 0!=o.content_url&&null!=o.content_url)return this.content_cache.has(o.content_url)?(console.log("Using cache for "+o.content_url),void document.arrive("#loadingStatus",{onceOnly:!0},function(){return document.getElementById("panel-content").innerHTML=e.content_cache.get(o.content_url)})):(console.log("Getting "+o.content_url),void this.$http.get(o.content_url,{before:function(t){this.previousRequest&&(this.previousRequest.abort(),console.log("Aborting ongoing request.")),this.previousRequest=t}}).then(function(t){e.content_cache.set(o.content_url,t.body),document.getElementById("panel-content").innerHTML=t.body,e.project_detail_loaded=!0,e.previousRequest=null},function(t){document.getElementById("loadingStatus").innerHTML="(；´Д`)\nFailed",e.project_detail_loaded=!0,e.previousRequest=null}));document.arrive("#loadingStatus",{onceOnly:!0},function(){return document.getElementById("loadingStatus").innerHTML="(；´Д`)\nTarget URL unset"})}}}}),b=f,m=(e("034f"),Object(u["a"])(b,i,a,!1,null,null,null)),_=m.exports,v=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"panel-wrapper"}},[e("div",{attrs:{id:"panel-content"}},[t.panel_content_loaded?t._e():e("h1",{staticClass:"shake-little shake-constant",attrs:{id:"loadingStatus"}},[t._v(t._s(t.status)+" "+t._s(t.kao))])]),e("div",{staticClass:"v-place-holder-2em"}),e("button",{staticClass:"btn btn-primary",on:{click:function(o){return o.preventDefault(),t.closePanel(o)}}},[t._v("Back")])])},y=[],C={name:"panel-1",data:function(){return{kao:"(ノД`)",status:"Thinking Hard"}},props:["panel_content_loaded","shouldClosed"],methods:{closePanel:function(){this.$emit("closePanel",{})},setStatus:function(t){this.getElementById("panel-content").innerHTML=t}},watch:{shouldClosed:{deep:!0,handler:function(t,o){t.v&&this.closePanel()}}}},w=C,P=(e("7887"),Object(u["a"])(w,v,y,!1,null,"72255a66",null)),x=P.exports,T=e("28dd");n["a"].use(T["a"]),n["a"].use(g.a),n["a"].config.productionTip=!1,n["a"].component("panel-1",x),new n["a"]({render:function(t){return t(_)}}).$mount("#app")},"64a9":function(t,o,e){},7887:function(t,o,e){"use strict";var n=e("47a5"),i=e.n(n);i.a},c730:function(t,o,e){},fc74:function(t,o,e){"use strict";var n=e("c730"),i=e.n(n);i.a}});
//# sourceMappingURL=app.b2580a0c.js.map