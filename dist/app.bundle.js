(()=>{"use strict";function e(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function t(t){return function(){var n=this,r=arguments;return new Promise((function(o,a){var i=t.apply(n,r);function c(t){e(i,o,a,c,u,"next",t)}function u(t){e(i,o,a,c,u,"throw",t)}c(void 0)}))}}var n=new Request("data.json",{method:"GET",headers:{Accept:"application/json","Content-type":"application/json"},mode:"cors",cache:"default"}),r=function(){var e=t(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=t(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:return t=e.sent,n=t.photographers,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=t(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:return t=e.sent,n=t.media,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function i(){return c.apply(this,arguments)}function c(){return(c=t(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:t=e.sent,n=new URLSearchParams(window.location.search),r=0;case 5:if(!(r<t.length)){e.next=11;break}if(t[r].id!=n.get("id")){e.next=8;break}return e.abrupt("return",t[r]);case 8:r++,e.next=5;break;case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return s.apply(this,arguments)}function s(){return(s=t(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:return t=e.sent,n=new URLSearchParams(window.location.search),r=[],t.forEach((function(e){e.photographerId==n.get("id")&&r.push(e)})),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=function e(t){if("string"==typeof t)return document.createTextNode(t);var n=document.createElement(t.tag);return t.props&&Object.entries(t.props).forEach((function(e){var t,r,o=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],i=o[1];n[a]=i})),t.children&&t.children.forEach((function(t){n.appendChild(e(t))})),n},d=function(e,t,n){return{tag:e,props:t,children:n}},p=function e(t,n,r){if(!n&&""!==n)return t.remove();if("string"==typeof r||"string"==typeof n){if(r!==n)return t.replaceWith(f(n))}else{if((null==r?void 0:r.tag)!==n.tag)return t.replaceWith(f(n));if(r){for(var o in r.props)if(r.props[o]===n.props[o])return t.replaceWith(f(n));for(var a=t.childNodes.length-1;a>=0;a--)e(t.childNodes[a],n.children[a],r.children[a])}}};function m(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){m(a,r,o,i,c,"next",e)}function c(e){m(a,r,o,i,c,"throw",e)}i(void 0)}))}}function h(){return y.apply(this,arguments)}function y(){return(y=v(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d("a",{href:"#",alt:"redirect to main content",className:"redirect",ariaModal:"true",ariaLabel:"modal is loaded",role:"dialog",ariaHidden:"true",ariaExpanded:"false"},["Passer au contenu"]),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return d("a",{className:"header__logo",href:"index.html"},[e])}function g(){return d("img",{src:"./logo/logo.svg",alt:"Fisheye page d'acceuil",tabindex:"0"})}function w(e){var t=e[0].toUpperCase()+e.slice(1);return d("button",{id:"".concat(e),className:"nav--button",type:"button",tabindex:"0",role:"menuitem",value:"".concat(e)},["#".concat(t)])}function x(){return d("nav",{className:"header__nav",ariaLabel:"trier par catégorie",tabindex:"0",role:"navigation"},[w("portrait"),w("art"),w("fashion"),w("architecture"),w("travel"),w("sport"),w("animals"),w("events")])}function S(){return d("h1",{className:"header__title",tabindex:"0"},["Nos photographes"])}function k(){return A.apply(this,arguments)}function A(){return(A=v(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d("header",{className:"header"},[b(g()),x(),S()]),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return L.apply(this,arguments)}function L(){return(L=v(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d("header",void 0,[b(g())]),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function _(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){N(a,r,o,i,c,"next",e)}function c(e){N(a,r,o,i,c,"throw",e)}i(void 0)}))}}function P(e,t){return d("div",{id:"Order-wrapper"},[e,t])}function q(){return d("span",{id:"Order_by"},["Trier par"])}function R(){return d("button",{id:"sort_button",role:"button",ariaHashpopup:"listbox",ariaLabelledby:"Order_by sort_button",ariaExpanded:"false",className:"choose",value:"popularité"},[d("span",{className:"sortBy"},["Popularité"]),d("i",{className:"chevron fas fa-chevron-up",ariaHidden:"true"},void 0)])}function I(){return d("ul",{id:"tri",role:"listbox",ariaLabelledby:"Order_by",tabIndex:"-1",style:"display: none"},[d("li",{id:"pop",className:"choose",role:"option"},["Popularité"]),d("li",{className:"chevronRotate"},[d("i",{className:"chevron fas fa-chevron-up",ariaHidden:"true"},void 0)]),d("li",{className:"dropdown-divider",role:"separator",tabIndex:"-1"},void 0),d("li",{id:"titre",className:"choose",role:"option"},["Titre"]),d("li",{className:"dropdown-divider",role:"separator",tabIndex:"-1"},void 0),d("li",{id:"date",className:"choose",role:"option"},["Date"])])}function T(){return j.apply(this,arguments)}function j(){return(j=_(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d("div",{className:"sort"},[q(),P(R(),I())]),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function M(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){C(a,r,o,i,c,"next",e)}function c(e){C(a,r,o,i,c,"throw",e)}i(void 0)}))}}function O(e,t){return d("div",{className:"photographer-main"},[e,t])}function D(e,t,n,r){return d("div",{className:"photographer-profile"},[e,t,n,r])}function H(e){return d("h1",{className:"photographer-profile--name"},[e])}function U(e,t){return d("p",{className:"photographer-profile--location"},[" ".concat(e,", ").concat(t)])}function B(e){return d("p",{className:"photographer-profile--philosophy"},[e])}function W(e){return d("div",{className:"img"},[e])}function F(e){return d("img",{className:"photographer-profile--photo",alt:"Photo portrait du photographe",src:"./FishEyePhotos/Sample Photos/Photographers ID Photos/".concat(e)},void 0)}function z(e){return d("a",{className:"nav--button button--photographer",href:"index.html?".concat(e,"=true"),value:"".concat(e)},["#".concat(e),d("span",{className:"sr-only"},["#".concat(e)])])}function $(e){return d("div",{className:"containerTags"},e)}function K(){return d("button",{className:"contact-me"},["Contactez-moi"])}function G(){return V.apply(this,arguments)}function V(){return(V=M(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:return t=e.sent,n=t.tags.map((function(e){return z(e)})),r=d("article",{className:"photographer-header"},[O(D(H(t.name),U(t.city,t.country),B(t.tagline),$(n)),K()),W(F(t.portrait))]),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function J(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){Y(a,r,o,i,c,"next",e)}function c(e){Y(a,r,o,i,c,"throw",e)}i(void 0)}))}}function Q(){return X.apply(this,arguments)}function X(){return(X=J(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d("div",{className:"likesContainer"},[d("div",{className:"totalLikes"},[d("p",{className:"totalLikes--number"},void 0),d("p",{className:"totalLikes--heart"},[d("img",{src:"./images/heart.svg"},void 0)])]),d("div",{className:"salaire"},[d("p",{className:"salaire--journalier"},void 0)])]),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}var ee=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,n,r,o,a,c,u,s,l,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:t=e.sent,document.querySelector(".contact-name").innerHTML="".concat(t.name),n=document.getElementById("closeButton"),r=null,o=document.querySelector(".contact-me"),a="button, a, input, textarea",c=[],u=function(e){e.preventDefault(),r=document.querySelector(".contact-modal"),(c=Array.from(r.querySelectorAll(a)))[0].focus(),console.log(r.querySelectorAll(a)),console.log(c),r.style.display=null,r.removeAttribute("aria-hidden"),r.setAttribute("aria-modal",!0),n.addEventListener("click",s),r.addEventListener("click",s),document.querySelector(".modal--wrapper").addEventListener("click",f),console.log(document.querySelector(".contact-me").style.zIndex),document.querySelector(".contact-me").style.zIndex="-1",console.log(document.querySelector(".Order-wrapper")),document.querySelector("#Order-wrapper").style.zIndex="0"},s=function e(t){t.preventDefault(),window.setTimeout((function(){r.style.display="none"}),300),r.setAttribute("aria-hidden",!0),r.removeAttribute("aria-modal"),n.removeEventListener("click",e),r.removeEventListener("click",e),document.querySelector(".modal--wrapper").removeEventListener("click",f),document.querySelector(".contact-me").style.zIndex="1",document.querySelector("#Order-wrapper").style.zIndex="20",o.focus()},o.addEventListener("click",u),l=function(e){e.preventDefault();var t=c.findIndex((function(e){return e===r.querySelector(":focus")}));!0===e.shiftKey||"ArrowUp"===e.key?t--:t++,t>=c.length&&(t=0),t<0&&(t=c.length-1),c[t].focus()},f=function(e){e.stopPropagation()},window.addEventListener("keydown",(function(e){"Escape"!==e.key&&"Esc"!==e.key||null===r||(console.log("close modal"),s(e)),"Tab"!==e.key&&"ArrowDown"!==e.key&&"ArrowUp"!==e.key||null===r||l(e)}));case 16:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){Z(a,r,o,i,c,"next",e)}function c(e){Z(a,r,o,i,c,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();function te(e,t){return d("div",{className:"formData"},[e,t])}function ne(e,t){return d("label",{for:"".concat(e)},["".concat(t)])}function re(e,t,n,r){return d("input",{className:"text-control ".concat(r),type:"".concat(e),id:"".concat(t),name:"".concat(t),ariaLabel:"".concat(n),required:"true"},void 0)}function oe(){return d("aside",{className:"contact-modal",role:"dialog",ariaModal:"false",ariaHidden:"true",ariaLabelledby:"contact__title",style:"display: none"},[d("div",{className:"modal--wrapper"},[d("header",{id:"form-header"},[d("h1",{id:"contact__title"},["Contactez moi",d("span",{className:"contact-name"},["Mimi Keel"])]),d("a",{href:"",id:"closeButton",className:"close",ariaLabel:"Fermer le formulaire"},[d("img",{src:"logo/Vector (2).svg",alt:"cross"},void 0)])]),d("form",{id:"form",name:"fisheye"},[te(ne("first","Prénom"),re("text","first","prénom")),te(ne("last","Nom"),re("text","last","nom de famille")),te(ne("email","E-mail"),re("email","email","email")),te(ne("comment","Votre message"),("comment","commentaire","comment",d("textarea",{className:"text-control ".concat("comment"),id:"".concat("comment"),ariaLabel:"".concat("commentaire"),required:"true"},void 0))),d("input",{className:"submit",value:"Envoyer",ariaLabel:"send",type:"submit"},void 0)])])])}function ae(e){return ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ae(e)}function ie(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function ce(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){ie(a,r,o,i,c,"next",e)}function c(e){ie(a,r,o,i,c,"throw",e)}i(void 0)}))}}function ue(){return se.apply(this,arguments)}function se(){return(se=ce(regeneratorRuntime.mark((function e(){var t,n,r,o,a,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:return t=e.sent,e.next=5,u();case 5:n=e.sent,r=n.map((function(e){return e.likes})),o=r.reduce((function(e,t){return e+t}),0),(a=document.querySelector(".totalLikes--number")).innerHTML="".concat(o),document.querySelector(".salaire--journalier").innerHTML="".concat(t.price,"€ / jour"),c=document.querySelectorAll(".heart"),console.log(c),c.forEach((function(e){e.addEventListener("click",(function(){console.log(ae(Number(a.textContent))),a.textContent="".concat(Number(a.textContent)+1),e.firstElementChild.textContent="".concat(Number(e.firstElementChild.textContent)+1)}))}));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}var fe=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:n=e.sent,e.t0=t,e.next="Date"===e.t0?6:"Popularité"===e.t0?9:"Titre"===e.t0?11:13;break;case 6:return n.forEach((function(e){var t=e.date.split("-").join(" "),n=new Date(t);e.date=n})),n.sort((function(e,t){return t.date-e.date})),e.abrupt("break",14);case 9:return n.sort((function(e,t){return t.likes-e.likes})),e.abrupt("break",14);case 11:return n.sort((function(e,t){return e.title.localeCompare(t.title)})),e.abrupt("break",14);case 13:n.sort((function(e,t){return t.likes-e.likes}));case 14:return e.abrupt("return",n);case 15:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){le(a,r,o,i,c,"next",e)}function c(e){le(a,r,o,i,c,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}();function de(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function pe(e,t){return d("figure",void 0,[e,t])}function me(e,t,n){return d("source",{src:"./FishEyePhotos/Sample Photos/".concat(e,"/").concat(t),className:"img-card",type:"video/mp4",alt:"".concat(n)},void 0)}function ve(e,t){return d("figcaption",void 0,[e,t])}function he(e){return d("p",{className:"textfig"},[e])}function ye(e){return d("button",{className:"heart",tabIndex:"0",ariaLabel:"Nombre de likes ".concat(e)},[d("div",{className:"likes"},["".concat(e)]),d("i",{className:"fas fa-heart"})])}var be=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:return n=e.sent,e.next=5,fe(t);case 5:return r=e.sent,o=d("section",{className:"sectioncontainer"},r.map((function(e){return Object.keys(e).includes("image")?pe((r=n.name,o=e.image,a=e.altTextMedia,d("img",{src:"./FishEyePhotos/Sample Photos/".concat(r,"/").concat(o.replace(".jpg",""),"_resultat.jpg"),className:"img-card",alt:"".concat(a),tabIndex:"0"},void 0)),ve(he(e.title),ye(e.likes))):pe((t=me(n.name,e.video,e.altTextMedia),d("video",{className:"img-card",muted:!0,controls:!0},[t])),ve(he(e.title),ye(e.likes)));var t,r,o,a}))),e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){de(a,r,o,i,c,"next",e)}function c(e){de(a,r,o,i,c,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}();function ge(e){return function(e){if(Array.isArray(e))return we(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return we(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?we(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function we(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var xe=function(){var e=ge(document.querySelectorAll(".img-card")),t=ge(document.querySelectorAll("img.img-card, source")).map((function(e){return"".concat(e.src)}));e.forEach((function(e){e.addEventListener("click",(function(n){var r=document.createElement("div");function o(e){console.log("clické sur close"),r.classList.add("fadeOut"),window.setTimeout((function(){r.remove(),r=null}),500)}function a(){n.preventDefault();var o=r.querySelector("img, video");o.currentSrc.endsWith("mp4")&&(o=o.querySelector("source"));var a=t.findIndex((function(e){return e===o.src}));(a+=1)>=t.length&&(a=0),t[a].endsWith("mp4")?(console.log("ceci est une vidéo"),r.querySelector(".lightbox__container").innerHTML='\n          <video class="img-card" muted  controls>\n          <source src="'.concat(t[a],'" type="video/mp4" alt="').concat(e.alt,'">\n  \n          </video>\n          ')):r.querySelector(".lightbox__container").innerHTML='\n          <img src="'.concat(t[a],'" alt="').concat(e.alt,'">\n          ')}function i(){n.preventDefault();var o=r.querySelector("img, video");o.currentSrc.endsWith("mp4")&&(o=o.querySelector("source"));var a=t.findIndex((function(e){return e===o.src}));(a-=1)<0&&(a=t.length-1),t[a].endsWith("mp4")?(console.log("ceci est une vidéo"),r.querySelector(".lightbox__container").innerHTML='\n          <video class="img-card" muted  controls>\n          <source src="'.concat(t[a],'" type="video/mp4" alt="').concat(e.alt,'">\n  \n          </video>\n          ')):r.querySelector(".lightbox__container").innerHTML='\n          <img src="'.concat(t[a],'" alt="').concat(e.alt,'">\n          ')}r.classList.add("lightbox"),"IMG"==e.nodeName?r.innerHTML='\n        <button class="lightbox__close" tab-index="1">Fermer</button>\n          <button class="lightbox__next" tab-index="1">Suivant</button>\n          <button class="lightbox__prev"tab-index="1" >Précédent</button>\n  \n          <div class="lightbox__container">\n           <img src="'.concat(e.src,'" alt="').concat(e.alt,'" tab-index="1">\n          </div>\n        '):(e.pause(),r.innerHTML='\n          <button class="lightbox__close">Fermer</button>\n          <button class="lightbox__next">Suivant</button>\n          <button class="lightbox__prev">Précédent</button>\n  \n          <div class="lightbox__container">\n          <video class="img-card" muted  controls>\n          <source src="'.concat(e.currentSrc,'" type="video/mp4" alt="').concat(e.alt,'">\n  \n          </video>\n          </div>\n        ')),r.querySelector(".lightbox__close").addEventListener("click",o),r.querySelector(".lightbox__prev").addEventListener("click",i),r.querySelector(".lightbox__next").addEventListener("click",a),window.addEventListener("keydown",(function(e){null!==r&&"Escape"===e.key&&o(),null!==r&&"ArrowLeft"===e.key&&i(),null!==r&&"ArrowRight"===e.key&&a(),null!==r&&"Tab"===e.key&&function(e){e.preventDefault();var t=Array.from(document.querySelectorAll(".lightbox__prev, .lightbox__next, .lightbox__close, .lightbox__container img"));console.log(t);var n=t.findIndex((function(e){return e===document.querySelector(":focus")}));console.log(n),!0===e.shiftKey?n--:n++,n>=t.length-1&&(n=0),n<0&&(n=t.length-1),t[n].focus()}(e)})),document.body.appendChild(r),document.querySelector(".lightbox__close").focus()}))}))};function Se(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function ke(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){Se(a,r,o,i,c,"next",e)}function c(e){Se(a,r,o,i,c,"throw",e)}i(void 0)}))}}var Ae,Ee,Le=function(){var e=ke(regeneratorRuntime.mark((function e(){var t,n,r,o,a,i,c,u,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=function(){return c=ke(regeneratorRuntime.mark((function e(){var a,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=r){e.next=2;break}return e.abrupt("return");case 2:return t.removeEventListener("click",i),document.getElementById("Order-wrapper").removeEventListener("click",s),document.removeEventListener("click",i),t.setAttribute("aria-expanded",!1),r.style.display="none",t.focus(),o[n].classList.remove("buttonSortClicked"),r.querySelector(".chevronRotate").classList.remove("activateRotate"),a=document.querySelector(".sectioncontainer"),e.next=14,be(t.value);case 14:c=e.sent,console.log(c),p(a,c),xe(),ue(),r=null;case 20:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)},i=function(){return c.apply(this,arguments)},t=document.getElementById("sort_button"),n=0,r=null,o=[],a=function(e){null===r&&(r=document.getElementById("tri"),t.setAttribute("aria-expanded",!0),(o=Array.from(document.querySelectorAll("li.choose")))[0].focus(),o[0].classList.add("buttonSortClicked"),o[0].setAttribute("aria-selected",!0),r.style.display=null,r.querySelector(".chevronRotate").classList.add("activateRotate"),document.getElementById("Order-wrapper").addEventListener("click",s),o.forEach((function(e){return e.addEventListener("click",(function(){e.setAttribute("aria-selected",!0),t.value=e.innerText.trim(),t.querySelector("span").innerText=e.innerText.trim(),console.log("cliqué sur les LI pour et ça a close"),i()}))})),document.addEventListener("click",i))},t.addEventListener("click",(function(){console.log("bouton openmenu"),a()})),u=function(e){e.preventDefault(),o[0].classList.remove("buttonSortClicked"),o[n].setAttribute("aria-selected",!1),o[n].classList.remove("buttonSortClicked"),console.log(n),!0===e.shiftKey||"ArrowUp"===e.key?n--:n++,n>=o.length&&(n=0),n<0&&(n=o.length-1),console.log(n),console.log(o[n]),o[n].focus(),o[n].setAttribute("aria-selected",!0),t.setAttribute("value",o[n].innerText.trim()),t.querySelector("span").innerText=o[n].innerText.trim(),r.setAttribute("aria-activedescendant",o[n].id),o[n].classList.add("buttonSortClicked")},s=function(e){console.log("arrête de te propager"),e.stopPropagation()},window.addEventListener("keydown",(function(e){"Tab"===e.key&&null!==r&&(console.log("tab close"),i()),"Escape"!==e.key&&"Esc"!==e.key||(console.log("escape"),i()),"ArrowDown"!==e.key&&"ArrowUp"!==e.key||null===r||u(e)})),window.addEventListener("keydown",(function(e){"Enter"===e.key&&null!==r&&i()})),t.addEventListener("keydown",(function(e){"ArrowDown"!==e.key&&"ArrowUp"!==e.key||null!=r||a()}));case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function Ne(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function _e(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){Ne(a,r,o,i,c,"next",e)}function c(e){Ne(a,r,o,i,c,"throw",e)}i(void 0)}))}}function Pe(){return(Pe=_e(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.querySelector(".wrapper").innerHTML="",E().then((function(e){var t=f(e);document.querySelector(".wrapper").insertAdjacentElement("afterbegin",t)})),G().then((function(e){console.log("jetnre dabord ans le card");var t=f(e);document.querySelector(".wrapper").insertAdjacentElement("beforeend",t)})).then((function(){var e=f(oe());document.querySelector(".wrapper").appendChild(e)})).then((function(){ee()})).then((function(){T().then((function(e){var t=f(e);document.querySelector(".wrapper").insertAdjacentElement("beforeend",t)})).then((function(){Le()}))})).then((function(){be().then((function(e){console.log(e);var t=f(e);document.querySelector(".wrapper").insertAdjacentElement("beforeEnd",t),xe()}))})).then((function(){Q().then((function(e){var t=f(e);document.querySelector(".wrapper").insertAdjacentElement("beforeEnd",t)})).then((function(){ue()}))}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function qe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||Te(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Re(e){return function(e){if(Array.isArray(e))return je(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Te(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ie(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Te(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function Te(e,t){if(e){if("string"==typeof e)return je(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?je(e,t):void 0}}function je(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ce(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function Me(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){Ce(a,r,o,i,c,"next",e)}function c(e){Ce(a,r,o,i,c,"throw",e)}i(void 0)}))}}function Oe(e){return De.apply(this,arguments)}function De(){return(De=Me(regeneratorRuntime.mark((function e(t){var n,o,a,i,c,u,s,l,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:if(n=e.sent,o=n.photographers,null!=t&&""!=t.toLocaleString()){e.next=8;break}return e.abrupt("return",o);case 8:a=[],c=Ie(t.entries());try{for(c.s();!(u=c.n()).done;)for(s=qe(u.value,2),l=s[0],s[1],f=0;f<o.length;f++)o[f].tags.includes(l)&&a.push(o[f])}catch(e){c.e(e)}finally{c.f()}return i=Re(a.reduce((function(e,t){return e.set(t.id,t)}),new Map).values()),e.abrupt("return",i);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function He(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function Ue(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){He(a,r,o,i,c,"next",e)}function c(e){He(a,r,o,i,c,"throw",e)}i(void 0)}))}}function Be(e){return d("h2",{className:"main__name"},[e])}function We(e,t){return d("p",{className:"main__location"},["".concat(e,", ").concat(t)])}function Fe(e){return d("p",{className:"main__philosophy"},[e])}function ze(e){return d("p",{className:"main__tarif"},["".concat(e," €")])}function $e(e,t){return d("img",{className:"main__photo",src:"./FishEyePhotos/Sample Photos/Photographers ID Photos/".concat(e),alt:"Portrait du photographe ".concat(t)},void 0)}function Ke(e){return d("button",{className:"nav--button tagTri",type:"button",value:"".concat(e)},["#".concat(e)])}function Ge(e){return d("div",{className:"tags"},e)}function Ve(e){return Ye.apply(this,arguments)}function Ye(){return(Ye=Ue(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return n=e.sent,r=d("main",{id:"articles"},n.map((function(e){var t=e.tags.map((function(e){return Ke(e)}));return d("article",{className:"main"},[d("a",{href:"http://127.0.0.1:5500/index.html?id=".concat(e.id),className:"main__link",onclick:"mafonction(this)"},[$e(e.portrait,e.name),Be(e.name)]),d("p",{className:"main__paragraph"},[We(e.city,e.country),Fe(e.tagline),ze(e.price),Ge(t)])])}))),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Je(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||Xe(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Qe(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Xe(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function Xe(e,t){if(e){if("string"==typeof e)return Ze(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ze(e,t):void 0}}function Ze(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function et(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}var tt=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n,r,o,a,i,c,u,s,l,f,d,m,v,h,y,b,g;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams(window.location.search),r=new URLSearchParams(window.location.search),n.has(t)?n.delete(t):null!==t&&n.append(t,!0),e.next=5,Ve(Oe(r));case 5:return Ae=e.sent,e.next=8,Ve(Oe(n));case 8:for(Ee=e.sent,o=n.toLocaleString(),history.pushState({},null,"?".concat(o)),a=document.getElementById("articles"),p(a,Ee,Ae),i=document.querySelectorAll("button.nav--button"),c=0;c<i.length;c++){u=Qe(n.entries());try{for(u.s();!(s=u.n()).done;)l=Je(s.value,2),f=l[0],l[1],console.log(f),i[c].value==f?(console.log("".concat(i," + key = ").concat(f)),i[c].classList.add("focused")):i[c].classList.contains("focused")&&i[c].value!=f&&i[c].classList.remove("focused")}catch(e){u.e(e)}finally{u.f()}}d=document.querySelectorAll("nav button.nav--button"),m=[],v=Qe(n.keys());try{for(v.s();!(h=v.n()).done;)y=h.value,m.push(y)}catch(e){v.e(e)}finally{v.f()}for(b=0;b<d.length;b++)d[b].classList.contains("focused")&&d[b].classList.remove("focused");for(g=0;g<d.length;g++)m.includes(d[g].value)&&d[g].classList.add("focused");i.forEach((function(e){e.addEventListener("click",(function(){tt(e.value)}))}));case 22:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){et(a,r,o,i,c,"next",e)}function c(e){et(a,r,o,i,c,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}();function nt(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return rt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?rt(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function rt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ot(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function at(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){ot(a,r,o,i,c,"next",e)}function c(e){ot(a,r,o,i,c,"throw",e)}i(void 0)}))}}function it(){return ct.apply(this,arguments)}function ct(){return(ct=at(regeneratorRuntime.mark((function e(){var t,n,r,o,a,i,c,u,s,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=document.querySelector(".wrapper")).innerHTML="",k().then((function(e){var n=f(e);t.appendChild(n)})),h().then((function(e){var t=f(e);document.body.insertAdjacentElement("afterbegin",t);var n=document.querySelector(".redirect");window.addEventListener("scroll",(function(){window.scrollY>0?(n.style.display="flex",n.setAttribute("tabindex",1),n.setAttribute("aria-expanded","true")):(n.style.display="none",n.setAttribute("tabindex",-1),n.setAttribute("aria-expanded","false"))}))})),n=new URLSearchParams(window.location.search),e.next=7,Ve(Oe(n));case 7:r=e.sent,o=f(r),t.insertAdjacentElement("beforeEnd",o),a=document.querySelectorAll("button.nav--button"),i=document.querySelectorAll("nav button.nav--button"),c=[],u=nt(n.keys());try{for(u.s();!(s=u.n()).done;)l=s.value,c.push(l)}catch(e){u.e(e)}finally{u.f()}for(d=0;d<i.length;d++)c.includes(i[d].value)&&i[d].classList.add("focused");console.log(c),a.forEach((function(e){e.addEventListener("click",(function(){tt(e.value)}))}));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}""===window.location.search||window.location.search.endsWith("true")?it():window.location.search.startsWith("?id")?function(){Pe.apply(this,arguments)}():(window.location.search="",history.pushState({},null,"index.html"),it())})();