"use strict";(self.webpackChunkcatalunya_offline=self.webpackChunkcatalunya_offline||[]).push([[539],{22539:(n,e,t)=>{t.r(e),t.d(e,{Network:()=>s,NetworkWeb:()=>a});var o=t(16546);function i(){const n=window.navigator.connection||window.navigator.mozConnection||window.navigator.webkitConnection;let e="unknown";const t=n?n.type||n.effectiveType:null;if(t&&"string"==typeof t)switch(t){case"bluetooth":case"cellular":case"slow-2g":case"2g":case"3g":e="cellular";break;case"none":e="none";break;case"ethernet":case"wifi":case"wimax":case"4g":e="wifi";break;case"other":case"unknown":e="unknown"}return e}class a extends o.E_{constructor(){super(),this.handleOnline=()=>{const n={connected:!0,connectionType:i()};this.notifyListeners("networkStatusChange",n)},this.handleOffline=()=>{this.notifyListeners("networkStatusChange",{connected:!1,connectionType:"none"})},"undefined"!=typeof window&&(window.addEventListener("online",this.handleOnline),window.addEventListener("offline",this.handleOffline))}async getStatus(){if(!window.navigator)throw this.unavailable("Browser does not support the Network Information API");const n=window.navigator.onLine,e=i();return{connected:n,connectionType:n?e:"none"}}}const s=new a}}]);
//# sourceMappingURL=539.js.map