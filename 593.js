"use strict";(self.webpackChunkcatalunya_offline=self.webpackChunkcatalunya_offline||[]).push([[593],{10593:(e,t,i)=>{i.r(t),i.d(t,{FilePickerWeb:()=>o});var n=i(29895);class o extends n.Uw{constructor(){super(...arguments),this.ERROR_PICK_FILE_CANCELED="pickFiles canceled."}async convertHeicToJpeg(e){throw this.unimplemented("Not implemented on web.")}async pickFiles(e){const t=await this.openFilePicker(e);if(!t)throw new Error(this.ERROR_PICK_FILE_CANCELED);const i={files:[]};for(const n of t){const t={blob:n,modifiedAt:n.lastModified,mimeType:this.getMimeTypeFromUrl(n),name:this.getNameFromUrl(n),path:void 0,size:this.getSizeFromUrl(n)};(null==e?void 0:e.readData)&&(t.data=await this.getDataFromFile(n)),i.files.push(t)}return i}async pickImages(e){throw this.unimplemented("Not implemented on web.")}async pickMedia(e){throw this.unimplemented("Not implemented on web.")}async pickVideos(e){throw this.unimplemented("Not implemented on web.")}async openFilePicker(e){var t;const i=(null===(t=null==e?void 0:e.types)||void 0===t?void 0:t.join(","))||"",n=!!(null==e?void 0:e.multiple);return new Promise((e=>{let t=!1;const o=document.createElement("input");o.type="file",o.accept=i,o.multiple=n,o.addEventListener("change",(()=>{t=!0;const i=Array.from(o.files||[]);e(i)}),{once:!0}),window.addEventListener("focus",(async()=>{await this.wait(1e3),t||e(void 0)}),{once:!0}),o.click()}))}async getDataFromFile(e){return new Promise(((t,i)=>{const n=new FileReader;n.readAsDataURL(e),n.onload=()=>{const e=("string"==typeof n.result?n.result:"").split("base64,")[1]||"";t(e)},n.onerror=e=>{i(e)}}))}getNameFromUrl(e){return e.name}getMimeTypeFromUrl(e){return e.type}getSizeFromUrl(e){return e.size}async wait(e){return new Promise((t=>setTimeout(t,e)))}}}}]);
//# sourceMappingURL=593.js.map