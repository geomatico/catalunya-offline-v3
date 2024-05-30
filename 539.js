/*! For license information please see 539.js.LICENSE.txt */
"use strict";(self.webpackChunkcatalunya_offline=self.webpackChunkcatalunya_offline||[]).push([[539],{56539:(e,t,n)=>{n.r(t),n.d(t,{PhotoViewerWeb:()=>l});var s=n(29895),o=n(25058);!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}();class l extends s.Uw{constructor(){super(...arguments),this._imageList=[],this._options={},this._mode="one",this._startFrom=0,this._modeList=["one","gallery","slider"]}async echo(e){return e}async show(e){return new Promise(((t,n)=>{var s;if(((e,t)=>{"undefined"==typeof window?Promise.resolve():(0,o.p)().then((()=>(0,o.b)([["jeep-photo-buttons_6",[[1,"jeep-photoviewer",{imageList:[16],options:[16],mode:[513,"pvmode"],startFrom:[514,"pvstartfrom"],innerImageList:[32],innerOptions:[32],innerMode:[32],innerStartFrom:[32],showHScroll:[32],close:[32],init:[64],closePhotoHScroll:[64]},[[9,"resize","handleWindowResize"],[0,"jeepPhotoHscrollClose","handleJeepPhotoHscrollClose"],[0,"jeepPhotoButtonsClose","handleJeepPhotoButtonsClose"],[0,"jeepPhotoHscrollResult","handleJeepPhotoHscrollResult"]]],[1,"jeep-photo-hscroll",{position:[514,"selposition"],imageList:[16],options:[16],mode:[513,"pvmode"],innerImageList:[32],innerOptions:[32],innerPosition:[32],innerMode:[32],buttonsVisibility:[32],isFullscreen:[32],photoZoom:[32],share:[32],shareShow:[32],titleShow:[32],maxZoomScale:[32],currentIndex:[32],init:[64],setCarousel:[64]},[[9,"resize","handleWindowResize"],[0,"jeepPhotoButtonsClose","handleJeepPhotoButtonsClose"],[0,"jeepPhotoButtonsShare","handleJeepPhotoButtonsShare"],[0,"jeepPhotoShareCompleted","handleJeepPhotoShareCompleted"],[0,"jeepPhotoRequestFullscreen","handleJeepPhotoFullscreenRequest"],[0,"jeepPhotoRequestMinimize","handleJeepPhotoMinimizeRequest"],[0,"jeepPhotoZoomOneTap","handleJeepPhotoZoomOneTap"],[0,"jeepPhotoSwipe","handleJeepPhotoSwipe"]]],[1,"jeep-photo-buttons",{share:[513,"sharevisible"],viewmode:[513],closebutton:[513],fromcomponent:[513],innerShare:[32],innerViewmode:[32],innerCloseButton:[32],innerFromComponent:[32],visible:[32],mode:[32],init:[64],setPhotoButtons:[64],setJeepPhotoButtonsVisibility:[64]}],[1,"jeep-photo-share",{surl:[513],stitle:[513],stext:[513],innerUrl:[32],innerTitle:[32],innerText:[32],init:[64],setShare:[64]}],[1,"jeep-photo-swipe",{timeThreshold:[514,"timethreshold"],thresholdX:[514,"thresholdx"],thresholdY:[514,"thresholdy"],innerTimeThreshold:[32],innerThresholdX:[32],innerThresholdY:[32],init:[64],handleTouchStart:[64],handleTouchEnd:[64],handleMouseDown:[64],handleMouseUp:[64]}],[1,"jeep-photo-zoom",{url:[513],maxzoomscale:[514],innerUrl:[32],innerMaxZoomScale:[32],init:[64],setPhoto:[64]}]]]],t)))})(window),Object.keys(e).includes("images")&&(this._imageList=e.images),Object.keys(e).includes("options")&&(this._options=null!==(s=e.options)&&void 0!==s?s:{}),Object.keys(e).includes("mode")){const t=e.mode;this._modeList.includes(t)&&(this._mode=null!=t?t:"one")}if(Object.keys(e).includes("startFrom")){const t=e.startFrom;this._startFrom=null!=t?t:0}const l=document.createElement("jeep-photoviewer");l.imageList=this._imageList,l.mode=this._mode,"one"!==this._mode&&"slider"!==this._mode||(l.startFrom=this._startFrom);const r=Object.keys(this._options);let i;if(r.length>0?(l.options=this._options,i=r.includes("divid")?this._options.divid:"photoviewer-container"):i="photoviewer-container",this._container=document.querySelector(`#${i}`),null!=this._container){const e=this._container.querySelector("jeep-photoviewer");null!=e&&this._container.removeChild(e),l.addEventListener("jeepPhotoViewerResult",(async e=>{const s=e.detail;null===s?n("Error: event does not include detail "):(this.notifyListeners("jeepCapPhotoViewerExit",s),this._container.removeChild(l),t(s))}),!1),this._container.appendChild(l)}else n("Div id='photoviewer-container' not found")}))}}},25058:(e,t,n)=>{n.d(t,{H:()=>h,b:()=>z,c:()=>m,g:()=>d,h:()=>$,p:()=>ee,r:()=>U});let s,o,l=!1,r=!1;const i={},a=e=>"object"==(e=typeof e)||"function"===e,$=(e,t,...n)=>{let s=null,o=!1,l=!1;const r=[],i=t=>{for(let n=0;n<t.length;n++)s=t[n],Array.isArray(s)?i(s):null!=s&&"boolean"!=typeof s&&((o="function"!=typeof e&&!a(s))&&(s=String(s)),o&&l?r[r.length-1].$text$+=s:r.push(o?c(null,s):s),l=o)};if(i(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const $=c(e,null);return $.$attrs$=t,r.length>0&&($.$children$=r),$},c=(e,t)=>({$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null}),h={},d=e=>V(e).$hostElement$,m=(e,t,n)=>{const s=d(e);return{emit:e=>u(s,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},u=(e,t,n)=>{const s=Q.ce(t,n);return e.dispatchEvent(s),s},p=new WeakMap,f=(e,t)=>"sc-"+e.$tagName$,g=(e,t,n,s,o,l)=>{if(n!==s){let r=W(e,t),i=t.toLowerCase();if("class"===t){const t=e.classList,o=w(n),l=w(s);t.remove(...o.filter((e=>e&&!l.includes(e)))),t.add(...l.filter((e=>e&&!o.includes(e))))}else if("style"===t){for(const t in n)s&&null!=s[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in s)n&&s[t]===n[t]||(t.includes("-")?e.style.setProperty(t,s[t]):e.style[t]=s[t])}else if(r||"o"!==t[0]||"n"!==t[1]){const i=a(s);if((r||i&&null!==s)&&!o)try{if(e.tagName.includes("-"))e[t]=s;else{const o=null==s?"":s;"list"===t?r=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(e){}null==s||!1===s?!1===s&&""!==e.getAttribute(t)||e.removeAttribute(t):(!r||4&l||o)&&!i&&(s=!0===s?"":s,e.setAttribute(t,s))}else t="-"===t[2]?t.slice(3):W(G,i)?i.slice(2):i[2]+t.slice(3),n&&Q.rel(e,t,n,!1),s&&Q.ael(e,t,s,!1)}},y=/\s/,w=e=>e?e.split(y):[],b=(e,t,n,s)=>{const o=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,l=e&&e.$attrs$||i,r=t.$attrs$||i;for(s in l)s in r||g(o,s,l[s],void 0,n,t.$flags$);for(s in r)g(o,s,l[s],r[s],n,t.$flags$)},v=(e,t,n,o)=>{const r=t.$children$[n];let i,a,$=0;if(null!==r.$text$)i=r.$elm$=K.createTextNode(r.$text$);else{if(l||(l="svg"===r.$tag$),i=r.$elm$=K.createElementNS(l?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",r.$tag$),l&&"foreignObject"===r.$tag$&&(l=!1),b(null,r,l),null!=s&&i["s-si"]!==s&&i.classList.add(i["s-si"]=s),r.$children$)for($=0;$<r.$children$.length;++$)a=v(e,r,$),a&&i.appendChild(a);"svg"===r.$tag$?l=!1:"foreignObject"===i.tagName&&(l=!0)}return i},P=(e,t,n,s,l,r)=>{let i,a=e;for(a.shadowRoot&&a.tagName===o&&(a=a.shadowRoot);l<=r;++l)s[l]&&(i=v(null,n,l),i&&(s[l].$elm$=i,a.insertBefore(i,t)))},S=(e,t,n,s,o)=>{for(;t<=n;++t)(s=e[t])&&s.$elm$.remove()},j=(e,t)=>e.$tag$===t.$tag$,R=(e,t)=>{const n=t.$elm$=e.$elm$,s=e.$children$,o=t.$children$,r=t.$tag$,i=t.$text$;null===i?(l="svg"===r||"foreignObject"!==r&&l,"slot"===r||b(e,t,l),null!==s&&null!==o?((e,t,n,s)=>{let o,l=0,r=0,i=t.length-1,a=t[0],$=t[i],c=s.length-1,h=s[0],d=s[c];for(;l<=i&&r<=c;)null==a?a=t[++l]:null==$?$=t[--i]:null==h?h=s[++r]:null==d?d=s[--c]:j(a,h)?(R(a,h),a=t[++l],h=s[++r]):j($,d)?(R($,d),$=t[--i],d=s[--c]):j(a,d)?(R(a,d),e.insertBefore(a.$elm$,$.$elm$.nextSibling),a=t[++l],d=s[--c]):j($,h)?(R($,h),e.insertBefore($.$elm$,a.$elm$),$=t[--i],h=s[++r]):(o=v(t&&t[r],n,r),h=s[++r],o&&a.$elm$.parentNode.insertBefore(o,a.$elm$));l>i?P(e,null==s[c+1]?null:s[c+1].$elm$,n,s,r,c):r>c&&S(t,l,i)})(n,s,t,o):null!==o?(null!==e.$text$&&(n.textContent=""),P(n,null,t,o,0,o.length-1)):null!==s&&S(s,0,s.length-1),l&&"svg"===r&&(l=!1)):e.$text$!==i&&(n.data=i)},L=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.$onRenderResolve$=t)))},C=(e,t)=>{if(e.$flags$|=16,!(4&e.$flags$))return L(e,e.$ancestorComponent$),ae((()=>E(e,t)));e.$flags$|=512},E=(e,t)=>{const n=(e.$cmpMeta$.$tagName$,()=>{}),s=e.$lazyInstance$;let o;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((([e,t])=>x(s,e,t))),e.$queuedListeners$=null),o=x(s,"componentWillLoad")),n(),O(o,(()=>M(e,s,t)))},M=async(e,t,n)=>{const s=e.$hostElement$,o=(e.$cmpMeta$.$tagName$,()=>{}),l=s["s-rc"];n&&(e=>{const t=e.$cmpMeta$,n=e.$hostElement$,s=t.$flags$,o=(t.$tagName$,()=>{}),l=((e,t,n,s)=>{let o=f(t);const l=Y.get(o);if(e=11===e.nodeType?e:K,l)if("string"==typeof l){e=e.head||e;let t,n=p.get(e);n||p.set(e,n=new Set),n.has(o)||(t=K.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),n&&n.add(o))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return o})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&s&&(n["s-sc"]=l,n.classList.add(l+"-h")),o()})(e);const r=(e.$cmpMeta$.$tagName$,()=>{});T(e,t),l&&(l.map((e=>e())),s["s-rc"]=void 0),r(),o();{const t=s["s-p"],n=()=>N(e);0===t.length?n():(Promise.all(t).then(n),e.$flags$|=4,t.length=0)}},T=(e,t,n)=>{try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,((e,t)=>{const n=e.$hostElement$,l=e.$cmpMeta$,r=e.$vnode$||c(null,null),i=(a=t)&&a.$tag$===h?t:$(null,null,t);var a;o=n.tagName,l.$attrsToReflect$&&(i.$attrs$=i.$attrs$||{},l.$attrsToReflect$.map((([e,t])=>i.$attrs$[t]=n[e]))),i.$tag$=null,i.$flags$|=4,e.$vnode$=i,i.$elm$=r.$elm$=n.shadowRoot||n,s=n["s-sc"],R(r,i)})(e,t)}catch(t){Z(t,e.$hostElement$)}return null},N=e=>{e.$cmpMeta$.$tagName$;const t=e.$hostElement$,n=e.$lazyInstance$,s=e.$ancestorComponent$;x(n,"componentDidRender"),64&e.$flags$||(e.$flags$|=64,k(t),x(n,"componentDidLoad"),e.$onReadyResolve$(t),s||_()),e.$onInstanceResolve$(t),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&ie((()=>C(e,!1))),e.$flags$&=-517},_=e=>{k(K.documentElement),ie((()=>u(G,"appload",{detail:{namespace:"jeep-photoviewer"}})))},x=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){Z(e)}},O=(e,t)=>e&&e.then?e.then(t):t(),k=e=>e.classList.add("hydrated"),B=(e,t,n)=>{if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);const s=Object.entries(t.$members$),o=e.prototype;if(s.map((([e,[s]])=>{31&s||2&n&&32&s?Object.defineProperty(o,e,{get(){return t=e,V(this).$instanceValues$.get(t);var t},set(n){((e,t,n,s)=>{const o=V(e),l=o.$hostElement$,r=o.$instanceValues$.get(t),i=o.$flags$,$=o.$lazyInstance$;var c,h;c=n,h=s.$members$[t][0],n=null==c||a(c)?c:2&h?parseFloat(c):1&h?String(c):c;const d=Number.isNaN(r)&&Number.isNaN(n);if((!(8&i)||void 0===r)&&n!==r&&!d&&(o.$instanceValues$.set(t,n),$)){if(s.$watchers$&&128&i){const e=s.$watchers$[t];e&&e.map((e=>{try{$[e](n,r,t)}catch(e){Z(e,l)}}))}2==(18&i)&&C(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&s&&Object.defineProperty(o,e,{value(...t){const n=V(this);return n.$onInstancePromise$.then((()=>n.$lazyInstance$[e](...t)))}})})),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,s){Q.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))s=this[t],delete this[t];else if(o.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==s)return;this[t]=(null!==s||"boolean"!=typeof this[t])&&s}))},e.observedAttributes=s.filter((([e,t])=>15&t[0])).map((([e,s])=>{const o=s[1]||e;return n.set(o,e),512&s[0]&&t.$attrsToReflect$.push([e,o]),o}))}}return e},z=(e,t={})=>{const n=[],s=t.exclude||[],o=G.customElements,l=K.head,r=l.querySelector("meta[charset]"),i=K.createElement("style"),a=[];let $,c=!0;Object.assign(Q,t),Q.$resourcesUrl$=new URL(t.resourcesUrl||"./",K.baseURI).href,e.map((e=>{e[1].map((t=>{const l={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};l.$members$=t[2],l.$listeners$=t[3],l.$attrsToReflect$=[],l.$watchers$={};const r=l.$tagName$,i=class extends HTMLElement{constructor(e){super(e),A(e=this,l),1&l.$flags$&&e.attachShadow({mode:"open"})}connectedCallback(){$&&(clearTimeout($),$=null),c?a.push(this):Q.jmp((()=>(e=>{if(0==(1&Q.$flags$)){const t=V(e),n=t.$cmpMeta$,s=(n.$tagName$,()=>{});if(1&t.$flags$)H(e,t,n.$listeners$);else{t.$flags$|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){L(t,t.$ancestorComponent$=n);break}}n.$members$&&Object.entries(n.$members$).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,s,o)=>{if(0==(32&t.$flags$)){{if(t.$flags$|=32,(o=X(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.$watchers$=o.watchers,B(o,n,2),o.isProxied=!0);const e=(n.$tagName$,()=>{});t.$flags$|=8;try{new o(t)}catch(e){Z(e)}t.$flags$&=-9,t.$flags$|=128,e()}if(o.style){let e=o.style;const t=f(n);if(!Y.has(t)){const s=(n.$tagName$,()=>{});((e,t,n)=>{let s=Y.get(e);te&&n?(s=s||new CSSStyleSheet,"string"==typeof s?s=t:s.replaceSync(t)):s=t,Y.set(e,s)})(t,e,!!(1&n.$flags$)),s()}}}const l=t.$ancestorComponent$,r=()=>C(t,!0);l&&l["s-rc"]?l["s-rc"].push(r):r()})(0,t,n)}s()}})(this)))}disconnectedCallback(){Q.jmp((()=>(e=>{if(0==(1&Q.$flags$)){const t=V(e);t.$rmListeners$&&(t.$rmListeners$.map((e=>e())),t.$rmListeners$=void 0)}})(this)))}componentOnReady(){return V(this).$onReadyPromise$}};l.$lazyBundleId$=e[0],s.includes(r)||o.get(r)||(n.push(r),o.define(r,B(i,l,1)))}))})),i.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",i.setAttribute("data-styles",""),l.insertBefore(i,r?r.nextSibling:l.firstChild),c=!1,a.length?a.map((e=>e.connectedCallback())):Q.jmp((()=>$=setTimeout(_,30)))},H=(e,t,n,s)=>{n&&n.map((([n,s,o])=>{const l=q(e,n),r=I(t,o),i=F(n);Q.ael(l,s,r,i),(t.$rmListeners$=t.$rmListeners$||[]).push((()=>Q.rel(l,s,r,i)))}))},I=(e,t)=>n=>{try{256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}catch(e){Z(e)}},q=(e,t)=>8&t?G:e,F=e=>0!=(2&e),J=new WeakMap,V=e=>J.get(e),U=(e,t)=>J.set(t.$lazyInstance$=e,t),A=(e,t)=>{const n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onInstancePromise$=new Promise((e=>n.$onInstanceResolve$=e)),n.$onReadyPromise$=new Promise((e=>n.$onReadyResolve$=e)),e["s-p"]=[],e["s-rc"]=[],H(e,n,t.$listeners$),J.set(e,n)},W=(e,t)=>t in e,Z=(e,t)=>(0,console.error)(e,t),D=new Map,X=(e,t,s)=>{const o=e.$tagName$.replace(/-/g,"_"),l=e.$lazyBundleId$,r=D.get(l);return r?r[o]:n(35418)(`./${l}.entry.js`).then((e=>(D.set(l,e),e[o])),Z)},Y=new Map,G="undefined"!=typeof window?window:{},K=G.document||{head:{}},Q={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,s)=>e.addEventListener(t,n,s),rel:(e,t,n,s)=>e.removeEventListener(t,n,s),ce:(e,t)=>new CustomEvent(e,t)},ee=e=>Promise.resolve(e),te=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),ne=[],se=[],oe=(e,t)=>n=>{e.push(n),r||(r=!0,t&&4&Q.$flags$?ie(re):Q.raf(re))},le=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){Z(e)}e.length=0},re=()=>{le(ne),le(se),(r=ne.length>0)&&Q.raf(re)},ie=e=>ee().then(e),ae=oe(se,!0)}}]);
//# sourceMappingURL=539.js.map