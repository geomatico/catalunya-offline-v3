"use strict";(self.webpackChunkcatalunya_offline=self.webpackChunkcatalunya_offline||[]).push([[811],{24811:(a,e,t)=>{t.r(e),t.d(e,{ShareWeb:()=>r});var n=t(29895);class r extends n.Uw{async canShare(){return"undefined"!=typeof navigator&&navigator.share?{value:!0}:{value:!1}}async share(a){if("undefined"==typeof navigator||!navigator.share)throw this.unavailable("Share API not available in this browser");return await navigator.share({title:a.title,text:a.text,url:a.url}),{}}}}}]);
//# sourceMappingURL=811.js.map