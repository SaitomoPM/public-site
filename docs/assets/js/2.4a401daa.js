(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{244:function(t,e,s){"use strict";s.d(e,"c",(function(){return n})),s.d(e,"e",(function(){return l})),s.d(e,"f",(function(){return c})),s.d(e,"g",(function(){return u})),s.d(e,"a",(function(){return h})),s.d(e,"d",(function(){return d})),s.d(e,"i",(function(){return p})),s.d(e,"j",(function(){return f})),s.d(e,"b",(function(){return m})),s.d(e,"h",(function(){return v}));s(91);const n=/#.*$/,i=/\.(md|html)$/,a=/\/$/,o=/^[a-z]+:/i;function r(t){return decodeURI(t).replace(n,"").replace(i,"")}function l(t){return o.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;const e=t.match(n),s=e?e[0]:"",i=r(t);return a.test(i)?t:i+".html"+s}function d(t,e){const s=decodeURIComponent(t.hash),i=function(t){const e=t.match(n);if(e)return e[0]}(e);if(i&&s!==i)return!1;return r(t.path)===r(e)}function p(t,e,s){if(l(e))return{type:"external",path:e};s&&(e=function(t,e,s){const n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;const i=e.split("/");s&&i[i.length-1]||i.pop();const a=t.replace(/^\//,"").split("/");for(let t=0;t<a.length;t++){const e=a[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,s));const n=r(e);for(let e=0;e<t.length;e++)if(r(t[e].regularPath)===n)return Object.assign({},t[e],{type:"page",path:h(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function f(t,e,s,n){const{pages:i,themeConfig:a}=s,o=n&&a.locales&&a.locales[n]||a;if("auto"===(t.frontmatter.sidebar||o.sidebar||a.sidebar))return g(t);const r=o.sidebar||a.sidebar;if(r){const{base:s,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const n in e)if(0===(s=t,/(\.html|\/)$/.test(s)?s:s+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var s;return{}}(e,r);return"auto"===n?g(t):n?n.map(t=>function t(e,s,n,i=1){if("string"==typeof e)return p(s,e,n);if(Array.isArray(e))return Object.assign(p(s,e[0],n),{title:e[1]});{const a=e.children||[];return 0===a.length&&e.path?Object.assign(p(s,e.path,n),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:a.map(e=>t(e,s,n,i+1)),collapsable:!1!==e.collapsable}}}(t,i,s)):[]}return[]}function g(t){const e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function m(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},245:function(t,e,s){},246:function(t,e,s){},247:function(t,e,s){},248:function(t,e,s){},249:function(t,e,s){},250:function(t,e,s){},251:function(t,e,s){},252:function(t,e){t.exports=function(t){return null==t}},253:function(t,e,s){},254:function(t,e,s){},255:function(t,e,s){},256:function(t,e,s){},257:function(t,e,s){},258:function(t,e,s){},259:function(t,e,s){},263:function(t,e,s){"use strict";s.r(e);var n=s(244),i={name:"SidebarGroup",components:{DropdownTransition:s(264).a},props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=s(263).default},methods:{isActive:n.d}},a=(s(276),s(10)),o=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[e("span",{staticClass:"subHeaderGroupTitle"},[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[e("span",{staticClass:"subHeaderGroupTitle"},[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),e("DropdownTransition",[t.open||!t.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;function r(t,e,s,n,i){const a={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:n,"sidebar-link":!0}};return i>2&&(a.style={"padding-left":i+"rem"}),t("RouterLink",a,s)}function l(t,e,s,i,a,o=1){return!e||o>a?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const c=Object(n.d)(i,s+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[r(t,s+"#"+e.slug,e.title,c,e.level-1),l(t,e.children,s,i,a,o+1)])}))}var c={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:s,$route:i,$themeConfig:a,$themeLocaleConfig:o},props:{item:c,sidebarDepth:u}}){const h=Object(n.d)(i,c.path),d="auto"===c.type?h||c.children.some(t=>Object(n.d)(i,c.basePath+"#"+t.slug)):h,p="external"===c.type?function(t,e,s){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[s,t("OutboundLink")])}(t,c.path,c.title||c.path):r(t,c.path,c.title||c.path,d),f=[e.frontmatter.sidebarDepth,u,o.sidebarDepth,a.sidebarDepth,1].find(t=>void 0!==t),g=o.displayAllHeaders||a.displayAllHeaders;if("auto"===c.type)return[p,l(t,c.children,c.basePath,i,f)];if((d||g)&&c.headers&&!n.c.test(c.path)){return[p,l(t,Object(n.b)(c.headers),c.path,i,f)]}return p}};s(277);function u(t,e){if("group"===e.type){const s=e.path&&Object(n.d)(t,e.path),i=e.children.some(e=>"group"===e.type?u(t,e):"page"===e.type&&Object(n.d)(t,e.path));return s||i}return!1}var h={name:"SidebarLinks",components:{SidebarGroup:o,SidebarLink:Object(a.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=function(t,e){for(let s=0;s<e.length;s++){const n=e[s];if(u(t,n))return s}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(n.d)(this.$route,t.regularPath)}}},d=Object(a.a)(h,(function(){var t=this,e=t._self._c;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(s,n){return e("li",{key:n},["group"===s.type?e("SidebarGroup",{attrs:{item:s,open:n===t.openGroupIndex,collapsable:s.collapsable||s.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(n)}}}):e("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:s}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=d.exports},264:function(t,e,s){"use strict";var n={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},i=(s(268),s(10)),a=Object(i.a)(n,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},265:function(t,e,s){"use strict";s(245)},266:function(t,e,s){"use strict";s(246)},267:function(t,e,s){"use strict";s(247)},268:function(t,e,s){"use strict";s(248)},269:function(t,e,s){"use strict";s(249)},270:function(t,e,s){"use strict";s(250)},271:function(t,e,s){"use strict";s(251)},272:function(t,e,s){"use strict";s(253)},273:function(t,e,s){var n=s(12),i=s(4),a=s(11);t.exports=function(t){return"string"==typeof t||!i(t)&&a(t)&&"[object String]"==n(t)}},274:function(t,e,s){"use strict";s(254)},275:function(t,e,s){"use strict";s(255)},276:function(t,e,s){"use strict";s(256)},277:function(t,e,s){"use strict";s(257)},278:function(t,e,s){"use strict";s(258)},279:function(t,e,s){"use strict";s(259)},283:function(t,e,s){"use strict";s.r(e);var n=s(244),i={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(n.a)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isNonHttpURI(){return Object(n.f)(this.link)||Object(n.g)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(n.e)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(n.e)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},a=s(10),o=Object(a.a)(i,(function(){var t=this,e=t._self._c;return t.isInternal?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null).exports,r={name:"Home",components:{NavLink:o},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(s(265),Object(a.a)(r,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?e("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(s,n){return e("div",{key:n,staticClass:"feature"},[e("h2",[t._v(t._s(s.title))]),t._v(" "),e("p",[t._v(t._s(s.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):e("Content",{staticClass:"footer",attrs:{"slot-key":"footer"}})],1)}),[],!1,null,null,null).exports),c=(s(91),s(92)),u=s.n(c),h=(t,e,s=null)=>{let n=u()(e,"title","");return u()(e,"frontmatter.tags")&&(n+=" "+e.frontmatter.tags.join(" ")),s&&(n+=" "+s),d(t,n)};const d=(t,e)=>{const s=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),n=new RegExp("[^\0-]"),i=t.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t);if(n.test(t))return i.some(t=>e.toLowerCase().indexOf(t)>-1);{const n=t.endsWith(" ");return new RegExp(i.map((t,e)=>i.length!==e+1||n?`(?=.*\\b${s(t)}\\b)`:`(?=.*\\b${s(t)})`).join("")+".+","gi").test(e)}};var p={name:"SearchBox",data:()=>({query:"",focused:!1,focusIndex:0}),computed:{searchPlaceholder(){return this.$site.themeConfig.searchPlaceholder||""},showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,s=this.$site.themeConfig.searchMaxSuggestions||5,n=this.$localePath,i=[];for(let a=0;a<e.length&&!(i.length>=s);a++){const o=e[a];if(this.getPageLocalePath(o)===n&&this.isSearchable(o))if(h(t,o))i.push(o);else if(o.headers)for(let e=0;e<o.headers.length&&!(i.length>=s);e++){const s=o.headers[e];s.title&&h(t,o,s.title)&&i.push(Object.assign({},o,{path:o.path+"#"+s.slug,header:s}))}}return i},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},methods:{openModal(){this.$emit("open-search-modal")},getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e),e.filter(e=>t.path.match(e)).length>0)},onHotkey(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},f=(s(266),Object(a.a)(p,(function(){var t=this._self._c;return t("div",{staticClass:"search-box",on:{click:this.openModal}},[t("input",{ref:"input",class:{focused:this.focused},attrs:{"aria-label":"Search",placeholder:this.searchPlaceholder,autocomplete:"off",spellcheck:"false",readonly:""},domProps:{value:this.query}})])}),[],!1,null,null,null).exports),g=(s(267),Object(a.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[e("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),m=s(264),v=s(93),C=s.n(v),b={name:"DropdownLink",components:{NavLink:o,DropdownTransition:m.a},props:{item:{required:!0}},data:()=>({open:!1}),computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},watch:{$route(){this.open=!1}},methods:{setOpen(t){this.open=t},isLastItemOfArray:(t,e)=>C()(e)===t,handleDropdown(){0===event.detail&&this.setOpen(!this.open)}}},k=(s(269),{name:"NavLinks",components:{NavLink:o,DropdownLink:Object(a.a)(b,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow down"})]),t._v(" "),e("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(s,n){return e("li",{key:s.link||n,staticClass:"dropdown-item"},["links"===s.type?e("h4",[t._v("\n          "+t._s(s.text)+"\n        ")]):t._e(),t._v(" "),"links"===s.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(s.items,(function(n){return e("li",{key:n.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,s.items)&&t.isLastItemOfArray(s,t.item.items)&&t.setOpen(!1)}}})],1)})),0):e("NavLink",{attrs:{item:s},on:{focusout:function(e){t.isLastItemOfArray(s,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,s=this.$router.options.routes,n=this.$site.themeConfig.locales||{},i={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(i=>{const a=t[i],o=n[i]&&n[i].label||a.lang;let r;return a.lang===this.$lang?r=e:(r=e.replace(this.$localeConfig.path,i),s.some(t=>t.path===r)||(r=i)),{text:o,link:r}})};return[...this.userNav,i]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(n.h)(t),{items:(t.items||[]).map(n.h)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let s=0;s<e.length;s++){const n=e[s];if(new RegExp(n,"i").test(t))return n}return"Source"}}}),_=(s(270),Object(a.a)(k,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function L(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var y={name:"Navbar",components:{SidebarButton:g,NavLinks:_,SearchBox:f,AlgoliaSearchBox:{}},data:()=>({linksWrapMaxWidth:null,isLight:!1}),methods:{toggleLightMode(){this.$store.commit("toggleLightMode"),this.$store.state.isLight?console.log("Light mode activated."):this.$store.state.isLight||console.log("Light mode deactivated.")}},computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(L(this.$el,"paddingLeft"))+parseInt(L(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},x=(s(271),Object(a.a)(y,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[e("img",{staticClass:"logo",attrs:{src:t.$site.themeConfig.logo,alt:t.$siteTitle}}),t._v(" "),t.$siteTitle?e("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),e("NavLinks",{staticClass:"can-hide"}),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[e("a",{staticClass:"nav-link-right",attrs:{href:"https://discord.gg/7zUPfN4D6g"}},[e("svg",{staticClass:"discord-logo icon",attrs:{length:"current",viewBox:"0 0 27 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",fill:"currentColor","clip-rule":"evenodd",d:"M15.932 11.4C15.932 12.132 15.392 12.732 14.708 12.732C14.036 12.732 13.484 12.132 13.484 11.4C13.484 10.668 14.024 10.068 14.708 10.068C15.392 10.068 15.932 10.668 15.932 11.4ZM10.328 10.068C9.644 10.068 9.104 10.668 9.104 11.4C9.104 12.132 9.656 12.732 10.328 12.732C11.012 12.732 11.552 12.132 11.552 11.4C11.564 10.668 11.012 10.068 10.328 10.068ZM23 2.472V24C19.9768 21.3284 20.9437 22.2127 17.432 18.948L18.068 21.168H4.46C3.104 21.168 2 20.064 2 18.696V2.472C2 1.104 3.104 0 4.46 0H20.54C21.896 0 23 1.104 23 2.472ZM19.58 13.848C19.58 9.984 17.852 6.852 17.852 6.852C16.124 5.556 14.48 5.592 14.48 5.592L14.312 5.784C16.352 6.408 17.3 7.308 17.3 7.308C14.4495 5.7457 11.1011 5.74542 8.336 6.96C7.892 7.164 7.628 7.308 7.628 7.308C7.628 7.308 8.624 6.36 10.784 5.736L10.664 5.592C10.664 5.592 9.02 5.556 7.292 6.852C7.292 6.852 5.564 9.984 5.564 13.848C5.564 13.848 6.572 15.588 9.224 15.672C9.224 15.672 9.668 15.132 10.028 14.676C8.504 14.22 7.928 13.26 7.928 13.26C8.10453 13.3836 8.39563 13.5437 8.42 13.56C10.4455 14.6943 13.3226 15.0659 15.908 13.98C16.328 13.824 16.796 13.596 17.288 13.272C17.288 13.272 16.688 14.256 15.116 14.7C15.476 15.156 15.908 15.672 15.908 15.672C18.56 15.588 19.58 13.848 19.58 13.848Z"}})])]),t._v(" "),e("a",{staticClass:"nav-link-right",attrs:{href:"https://github.com/ar-io",target:"_blank"}},[e("svg",{staticClass:"github-logo icon",attrs:{length:"current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",fill:"currentColor","clip-rule":"evenodd",d:"M10 0C15.523 0 20 4.59 20 10.253C20 14.782 17.138 18.624 13.167 19.981C12.66 20.082 12.48 19.762 12.48 19.489C12.48 19.151 12.492 18.047 12.492 16.675C12.492 15.719 12.172 15.095 11.813 14.777C14.04 14.523 16.38 13.656 16.38 9.718C16.38 8.598 15.992 7.684 15.35 6.966C15.454 6.707 15.797 5.664 15.252 4.252C15.252 4.252 14.414 3.977 12.505 5.303C11.706 5.076 10.85 4.962 10 4.958C9.15 4.962 8.295 5.076 7.497 5.303C5.586 3.977 4.746 4.252 4.746 4.252C4.203 5.664 4.546 6.707 4.649 6.966C4.01 7.684 3.619 8.598 3.619 9.718C3.619 13.646 5.954 14.526 8.175 14.785C7.889 15.041 7.63 15.493 7.54 16.156C6.97 16.418 5.522 16.871 4.63 15.304C4.63 15.304 4.101 14.319 3.097 14.247C3.097 14.247 2.122 14.234 3.029 14.87C3.029 14.87 3.684 15.185 4.139 16.37C4.139 16.37 4.726 18.2 7.508 17.58C7.513 18.437 7.522 19.245 7.522 19.489C7.522 19.76 7.338 20.077 6.839 19.982C2.865 18.627 0 14.783 0 10.253C0 4.59 4.478 0 10 0"}})])]),t._v(" "),e("svg",{staticClass:"theme-toggle icon nav-link-right",attrs:{length:"current",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.toggleLightMode}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 6C12.5523 6 13 5.55228 13 5V3C13 2.44771 12.5523 2 12 2C11.4477 2 11 2.44771 11 3V5C11 5.55229 11.4477 6 12 6ZM21 11H19C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11ZM5 11C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13H3C2.44771 13 2 12.5523 2 12C2 11.4477 2.44771 11 3 11H5ZM6.21828 4.99995C5.81235 4.61611 5.17212 4.63402 4.78828 5.03995C4.40444 5.44588 4.42235 6.08611 4.82828 6.46995L6.26828 7.85995C6.46353 8.04848 6.72703 8.14955 6.99828 8.13995C7.27047 8.13891 7.53047 8.02696 7.71828 7.82995C8.106 7.43991 8.106 6.80999 7.71828 6.41995L6.21828 4.99995ZM17.6916 7.85877C17.5062 8.03745 17.259 8.13774 17.0016 8.13877C16.7504 8.12219 16.5147 8.01149 16.3416 7.82877C15.9538 7.43873 15.9538 6.80881 16.3416 6.41877L17.7816 4.99877C18.1729 4.68338 18.7375 4.7074 19.1006 5.0549C19.4996 5.43676 19.5134 6.06977 19.1316 6.46877L17.6916 7.85877ZM12 18C11.4477 18 11 18.4477 11 19V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V19C13 18.4477 12.5523 18 12 18ZM16.315 16.165C16.6988 15.7674 17.3324 15.7562 17.73 16.14L19.19 17.56L19.1958 17.5658C19.5847 17.9579 19.5821 18.5911 19.19 18.98C19.0005 19.1733 18.7407 19.2816 18.47 19.28C18.2125 19.279 17.9654 19.1787 17.78 19L16.34 17.58C15.9424 17.1962 15.9312 16.5626 16.315 16.165ZM6.27001 16.1413L4.83001 17.5313C4.43789 17.9203 4.43529 18.5534 4.82421 18.9455L4.83001 18.9513C5.01951 19.1447 5.27929 19.2529 5.55001 19.2513C5.79652 19.2534 6.03513 19.1644 6.22001 19.0013L7.66001 17.6113C8.05765 17.2275 8.06885 16.594 7.68501 16.1963C7.30117 15.7987 6.66766 15.7875 6.27001 16.1713V16.1413ZM8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z",fill:"currentColor"}})]),t._v(" "),t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox",{ref:"modalOpener",on:{"open-search-modal":function(e){return t.$emit("open-search-modal")}}}):t._e()],1)],1)}),[],!1,null,null,null).exports),$=s(252),w=s.n($);const S=/\/$/,O=/^[a-z]+:/i;var I={name:"PageEdit",computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=w()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:s="",docsBranch:n="master",docsRepo:i=e}=this.$site.themeConfig;return t&&i&&this.$page.relativePath?this.createEditLink(e,i,s,n,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,s,n,i){if(/bitbucket.org/.test(e)){return e.replace(S,"")+"/src"+`/${n}/`+(s?s.replace(S,"")+"/":"")+i+`?mode=edit&spa=0&at=${n}&fileviewer=file-view-default`}if(/gitlab.com/.test(e)){return e.replace(S,"")+"/-/edit"+`/${n}/`+(s?s.replace(S,"")+"/":"")+i}return(O.test(e)?e:"https://github.com/"+e).replace(S,"")+"/edit"+`/${n}/`+(s?s.replace(S,"")+"/":"")+i}}},P=(s(272),Object(a.a)(I,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"page-edit"},[t.editLink?e("div",{staticClass:"edit-link"},[e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),e("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?e("div",{staticClass:"last-updated"},[e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),j=s(273),M=s.n(j),T={name:"PageNav",props:["sidebarItems","isLight"],computed:{prev(){return D(E.PREV,this)},next(){return D(E.NEXT,this)},prevStyle(){return this.isLight?{backgroundColor:"#f1eff0"}:{backgroundColor:"#555"}},nextStyle(){return this.isLight?{backgroundColor:"#f1eff0"}:{backgroundColor:"#555"}}}};const E={NEXT:{resolveLink:function(t,e){return N(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return N(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function D(t,{$themeConfig:e,$page:s,$route:i,$site:a,sidebarItems:o}){const{resolveLink:r,getThemeLinkConfig:l,getPageLinkConfig:c}=t,u=l(e),h=c(s),d=w()(h)?u:h;return!1===d?void 0:M()(d)?Object(n.i)(a.pages,d,i.path):r(s,o)}function N(t,e,s){const n=[];!function t(e,s){for(let n=0,i=e.length;n<i;n++)"group"===e[n].type?t(e[n].children||[],s):s.push(e[n])}(e,n);for(let e=0;e<n.length;e++){const i=n[e];if("page"===i.type&&i.path===decodeURIComponent(t.path))return n[e+s]}}var A=T,H=(s(274),{components:{PageEdit:P,PageNav:Object(a.a)(A,(function(){var t=this,e=t._self._c;return t.prev||t.next?e("div",{staticClass:"page-nav"},[e("div",{staticClass:"inner"},[t.prev?e("router-link",{staticClass:"nav-link prev",style:t.prevStyle,attrs:{to:t.prev.path}},[e("i",{staticClass:"pointer last"},[t._v("←")]),t._v(" "),e("span",[t._v(t._s(t.prev.title||t.prev.path))])]):t._e(),t._v(" "),e("div",{staticClass:"spacer"}),t._v(" "),t.next?e("router-link",{staticClass:"nav-link next",style:t.nextStyle,attrs:{to:t.next.path}},[e("span",[t._v(t._s(t.next.title||t.next.path))]),t._v(" "),e("i",{staticClass:"pointer forward"},[t._v("→")])]):t._e()],1)]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems","isLight"]}),B=(s(275),Object(a.a)(H,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"page"},[t._t("top"),t._v(" "),e("Content",{staticClass:"theme-default-content"}),t._v(" "),e("PageEdit"),t._v(" "),e("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems,isLight:t.isLight},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),U={name:"Sidebar",components:{SidebarLinks:s(263).default,NavLinks:_},props:["items"]},R=(s(278),Object(a.a)(U,(function(){var t=this._self._c;return t("aside",{staticClass:"sidebar"},[t("NavLinks"),this._v(" "),this._t("top"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),G={name:"SearchModal",data:()=>({query:"",focused:!1,focusIndex:0}),computed:{searchPlaceholder(){return this.$site.themeConfig.searchPlaceholder||""},showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,s=this.$site.themeConfig.searchMaxSuggestions||5,n=this.$localePath,i=[];for(let a=0;a<e.length&&!(i.length>=s);a++){const o=e[a];if(this.getPageLocalePath(o)===n&&this.isSearchable(o))if(h(t,o))i.push(o);else if(o.headers)for(let e=0;e<o.headers.length&&!(i.length>=s);e++){const s=o.headers[e];s.title&&h(t,o,s.title)&&i.push(Object.assign({},o,{path:o.path+"#"+s.slug,header:s}))}}return i},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey),document.addEventListener("keydown",this.onEscapeKey),this.$refs.input.focus(),document.addEventListener("click",this.handleDocumentClick)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey),document.removeEventListener("click",this.handleDocumentClick),document.removeEventListener("keydown",this.onEscapeKey)},methods:{onEscapeKey(t){"Escape"!==t.key&&27!==t.keyCode||this.$emit("close-modal")},handleDocumentClick(t){const e=this.$refs.modalOuter,s=this.$refs.modalProper;e.contains(t.target)&&!s.contains(t.target)&&this.$store.commit("closeSearchModal")},onInputFocus(){this.focused=!0},onInputBlur(){setTimeout(()=>{this.focused=!1},200)},openModal(){this.$emit("open-search-modal")},getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e),e.filter(e=>t.path.match(e)).length>0)},onHotkey(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp(){this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1},onDown(){this.focusIndex=(this.focusIndex+1)%this.suggestions.length},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0,this.$emit("close-modal"))},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},W=(s(279),{name:"Layout",components:{Home:l,Page:B,Sidebar:R,Navbar:x,SearchModal:Object(a.a)(G,(function(){var t=this,e=t._self._c;return e("div",{ref:"modalOuter",staticClass:"search-modal"},[e("div",{ref:"modalProper",staticClass:"search-modal-content"},[e("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.searchPlaceholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:t.onInputFocus,blur:t.onInputBlur,keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:(e.preventDefault(),t.onUp.apply(null,arguments))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:(e.preventDefault(),t.onDown.apply(null,arguments))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.go(t.focusIndex))}]}}),t._v(" "),e("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(s,n){return e("li",{key:n,staticClass:"suggestion",class:{focused:n===t.focusIndex},on:{mousedown:function(e){return t.go(n)},mouseenter:function(e){return t.focus(n)}}},[e("a",{attrs:{href:s.path},on:{click:function(t){t.preventDefault()}}},[e("span",{staticClass:"page-title"},[t._v(t._s(s.title||s.path))]),t._v(" "),s.header?e("span",{staticClass:"header"},[t._v("> "+t._s(s.header.title))]):t._e()])])})),0),t._v(" "),e("button",{on:{click:function(e){return t.$emit("close-modal")}}},[t._v("Close")])])])}),[],!1,null,null,null).exports},watch:{isLight(){this.updateTheme()}},data:()=>({isSidebarOpen:!1,showSearchModal:!1}),computed:{isSearchModalOpen(){return this.$store.state.isSearchModalOpen},isLight(){return this.$store.state.isLight},shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(n.j)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1}),this.updateTheme()},methods:{openSearchModal(){this.$store.commit("openSearchModal")},closeSearchModal(){console.log("close modal"),this.$store.commit("closeSearchModal")},updateTheme(){const t=this.isLight?"#fafafa":"#0a0b09",e=this.isLight?"#F1EFF0":"#0a0b09",s=this.isLight?"#ddd":"#2e2e2e",n=this.isLight?"#111":"white",i=(this.isLight,"#fe0230"),a=this.isLight?"#ddd":"#555",o=this.isLight?"#d1d1d1":"#555",r=(this.isLight,i),l=this.isLight?"#eaeaea":"#222";document.documentElement.style.setProperty("--BgColor1",t),document.documentElement.style.setProperty("--BgColor2",e),document.documentElement.style.setProperty("--SearchColor",s),document.documentElement.style.setProperty("--TextColor",n),document.documentElement.style.setProperty("--AccentColor",i),document.documentElement.style.setProperty("--LineColor",a),document.documentElement.style.setProperty("--BorderColor",o),document.documentElement.style.setProperty("--InLineCodeText",r),document.documentElement.style.setProperty("--InLineCodeBG",l)},toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,s=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(s)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),Z=Object(a.a)(W,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar,"open-search-modal":t.openSearchModal}}):t._e(),t._v(" "),this.isSearchModalOpen?e("SearchModal",{on:{"close-modal":t.closeSearchModal}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?e("Home"):e("Page",{attrs:{"sidebar-items":t.sidebarItems,isLight:t.isLight},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=Z.exports}}]);