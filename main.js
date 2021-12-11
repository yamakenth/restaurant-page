(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>q});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(189),t.b),l=new URL(t(282),t.b),p=new URL(t(219),t.b),u=new URL(t(290),t.b),f=new URL(t(652),t.b),m=new URL(t(261),t.b),h=new URL(t(936),t.b),g=new URL(t(990),t.b),b=new URL(t(332),t.b),v=new URL(t(105),t.b),x=new URL(t(873),t.b),y=i()(o()),w=s()(d),C=s()(d,{hash:"?#iefix"}),L=s()(l),E=s()(p),S=s()(u),M=s()(f,{hash:"#Corinthia"}),I=s()(m),R=s()(m,{hash:"?#iefix"}),U=s()(h),T=s()(g),j=s()(b),k=s()(v,{hash:"#CormorantGaramond"}),A=s()(x);y.push([e.id,"/* corinthia-regular - latin */\n@font-face {\n  font-family: 'Corinthia';\n  font-style: normal;\n  font-weight: 400;\n  src: url("+w+"); /* IE9 Compat Modes */\n  src: local(''),\n       url("+C+") format('embedded-opentype'), /* IE6-IE8 */\n       url("+L+") format('woff2'), /* Super Modern Browsers */\n       url("+E+") format('woff'), /* Modern Browsers */\n       url("+S+") format('truetype'), /* Safari, Android, iOS */\n       url("+M+") format('svg'); /* Legacy iOS */\n}\n\n/* cormorant-garamond-regular - latin */\n@font-face {\n  font-family: 'Cormorant Garamond';\n  font-style: normal;\n  font-weight: 400;\n  src: url("+I+"); /* IE9 Compat Modes */\n  src: local(''),\n       url("+R+") format('embedded-opentype'), /* IE6-IE8 */\n       url("+U+") format('woff2'), /* Super Modern Browsers */\n       url("+T+") format('woff'), /* Modern Browsers */\n       url("+j+") format('truetype'), /* Safari, Android, iOS */\n       url("+k+") format('svg'); /* Legacy iOS */\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  height: 100vh;\n  background-image: url("+A+");\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  color: #ffffff;\n  font-family: 'Cormorant Garamond', serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n}\n\nh2 {\n  font-size: 40px;\n}\n\nh3 {\n  font-size: 26px;\n}\n\nh4 {\n  font-size: 18px;\n}\n\nbutton {\n  font-size: 26px;\n  border: none;\n  background: none;\n  color: #ffffff;\n  font-family: 'Cormorant Garamond', serif;\n}\n\n.header {\n  background-color: #000000;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 26px;\n}\n\n.logo {\n  font-family: 'Corinthia', cursive;\n  font-size: 50px;\n  font-weight: 100;\n}\n\n.nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 18px;\n}\n\n.display-area {\n  flex: 1;\n  background-color: #00000090;\n  margin: 34px 46px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  padding: 20px;\n}\n\n#main-image {\n  height: 360px;\n  width: auto;\n}\n\n.description {\n  text-align: center;\n}\n\n.menu-subsection {\n  text-align: center;\n}\n\n.top {\n  display: flex;\n  justify-content: space-between;\n  gap: 160px;\n  text-align: center;\n}\n\n#map-image {\n  height: 360px;\n  width: auto;\n}",""]);const q=y},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},189:(e,n,t)=>{e.exports=t.p+"711058d6ab90d928803f.eot"},652:(e,n,t)=>{e.exports=t.p+"9d1606c3047256b6a2d8.svg"},290:(e,n,t)=>{e.exports=t.p+"8c38195a8f16e0379cb3.ttf"},219:(e,n,t)=>{e.exports=t.p+"58d8979eefc3fd8107a5.woff"},282:(e,n,t)=>{e.exports=t.p+"32a5323d4b07d1bbfd3a.woff2"},261:(e,n,t)=>{e.exports=t.p+"4a3530e7f538a788fd32.eot"},105:(e,n,t)=>{e.exports=t.p+"d2e0beae3272c6680959.svg"},332:(e,n,t)=>{e.exports=t.p+"8ba664d58a0bf4349cfe.ttf"},990:(e,n,t)=>{e.exports=t.p+"da9f289d115b1b0cb95d.woff"},936:(e,n,t)=>{e.exports=t.p+"a429316cb82cb4d19c6b.woff2"},873:(e,n,t)=>{e.exports=t.p+"fc52553b257f10676499.png"},524:(e,n,t)=>{e.exports=t.p+"c2f3207039a53262d621.png"},489:(e,n,t)=>{e.exports=t.p+"0874f013adb2abc7c99c.png"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{var e=t(524);t(489);var n=t(379),r=t.n(n),o=t(795),a=t.n(o),i=t(569),c=t.n(i),s=t(565),d=t.n(s),l=t(216),p=t.n(l),u=t(589),f=t.n(u),m=t(426),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),r()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("header");const t=document.createElement("h1");t.classList.add("logo"),t.textContent="LeCoffee Cafe";const r=document.createElement("div");r.classList.add("nav");const o=document.createElement("button");o.classList.add("home-nav"),o.textContent="Home";const a=document.createElement("button");a.classList.add("menu-nav"),a.textContent="Menu";const i=document.createElement("button");i.classList.add("contact-nav"),i.textContent="Contact";const c=document.createElement("div");c.classList.add("display-area"),r.appendChild(o),r.appendChild(a),r.appendChild(i),n.appendChild(t),n.appendChild(r),e.appendChild(n),e.appendChild(c)}();const g=document.querySelector(".display-area");function b(){console.log("click");let e=g.lastElementChild;for(;e;)g.removeChild(e),e=g.lastElementChild}!function(n){const t=document.createElement("h2");t.textContent="25 Years of Coffee and Community";const r=new Image;r.src=e,r.id="main-image";const o=document.createElement("h3");o.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis aenean et tortor at risus. At auctor urna nunc id cursus metus aliquam eleifend mi.",o.classList.add("description"),n.appendChild(t),n.appendChild(r),n.appendChild(o)}(g),document.querySelector(".home-nav").addEventListener("click",(()=>{b()})),document.querySelector(".menu-nav").addEventListener("click",(()=>{b()})),document.querySelector(".contact-nav").addEventListener("click",(()=>{b()}))})()})();