"use strict";(self.webpackChunkcatalunya_offline=self.webpackChunkcatalunya_offline||[]).push([[541],{43541:(t,e,i)=>{i.r(e),i.d(e,{jeep_photo_buttons:()=>c,jeep_photo_hscroll:()=>d,jeep_photo_share:()=>u,jeep_photo_swipe:()=>m,jeep_photo_zoom:()=>p,jeep_photoviewer:()=>_});var s=i(66256);const o=t=>window.btoa(t),h="url('data:image/svg+xml;base64,"+o("<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-share-2'><circle cx='18' cy='5' r='3'></circle><circle cx='6' cy='12' r='3'></circle><circle cx='18' cy='19' r='3'></circle><line x1='8.59' y1='13.51' x2='15.42' y2='17.49'></line><line x1='15.41' y1='6.51' x2='8.59' y2='10.49'></line></svg>")+"')",n="url('data:image/svg+xml;base64,"+o("<svg xmlns='http://www.w3.org/2000/svg'   viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-x'><line x1='18' y1='6' x2='6' y2='18'></line><line x1='6' y1='6' x2='18' y2='18'></line></svg>")+"')",r="url('data:image/svg+xml;base64,"+o("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-minimize'><path d='M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3'></path></svg>")+"')",l="url('data:image/svg+xml;base64,"+o("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-maximize'><path d='M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3'></path></svg>")+"')",a="url('data:image/svg+xml;base64,"+o("<svg id='No_Image' data-name='No_Image' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'>\n<rect x='50' y='70' width='140' height='140' rx='20' ry='20' fill='#3700B3' mask='url(#hole)'/>\n<mask id='hole'>\n    <rect x='50' y='70' width='140' height='140'  rx='20' ry='20' fill='#b49393'/>\n    <path d='M70 190,H170,L135 100,L110 150,L92.5 130 z' stroke='red' fill='#3700B3'></path>\n</mask>\n</svg>\n")+"')",c=class{constructor(t){(0,s.r)(this,t),this.onPhotoButtonsClose=(0,s.c)(this,"jeepPhotoButtonsClose",7),this.onPhotoRequestFullscreen=(0,s.c)(this,"jeepPhotoRequestFullscreen",7),this.onPhotoRequestMinimize=(0,s.c)(this,"jeepPhotoRequestMinimize",7),this.onPhotoButtonsShare=(0,s.c)(this,"jeepPhotoButtonsShare",7),this.share=void 0,this.viewmode=void 0,this.closebutton=void 0,this.fromcomponent=void 0,this.innerShare=void 0,this.innerViewmode=void 0,this.innerCloseButton=void 0,this.innerFromComponent=void 0,this.visible=void 0,this.mode=void 0}parseShare(t){this.innerShare=t}parseViewmode(t){this.innerViewmode=t}parseCloseButton(t){this.innerCloseButton=t}parseFromComponent(t){this.innerFromComponent=t}async init(){return await this._init()}setPhotoButtons(){return Promise.resolve(this._setPhotoButtons())}setJeepPhotoButtonsVisibility(t){t?(this._photoButtonsEl.classList.remove("hidden"),this.visible=!0):(this._photoButtonsEl.classList.add("hidden"),this.visible=!1)}async componentWillLoad(){this._window=window,await this.init()}async componentDidLoad(){await this.setPhotoButtons()}async _init(){this._element=this.el.shadowRoot,this.parseShare(this.share?this.share:"visible"),this.parseViewmode(this.viewmode?this.viewmode:"normal"),this.parseCloseButton(this.closebutton?this.closebutton:"yes"),this.parseFromComponent(this.fromcomponent?this.fromcomponent:"jeep-photoviewer"),"fullscreen"===this.innerViewmode?(this.mode="minimize",this._modeUrl=r):(this.mode="fullscreen",this._modeUrl=l)}async _setPhotoButtons(){this._photoButtonsEl=this._element.querySelector(".photobuttons-container"),"visible"===this.innerShare&&"jeep-photo-hscroll"===this.innerFromComponent&&(this._shareEl=this._photoButtonsEl.querySelector(".share-button"),this._shareEl.style.setProperty("background-image",`${h}`)),"jeep-photo-hscroll"===this.innerFromComponent&&(this._modeEl=this._photoButtonsEl.querySelector(".mode-button"),this._modeEl.style.setProperty("background-image",`${this._modeUrl}`)),"yes"===this.innerCloseButton&&(this._closeEl=this._photoButtonsEl.querySelector(".close-button"),this._closeEl.style.setProperty("background-image",`${n}`))}_handleClick(t){switch(t){case"share":this.onPhotoButtonsShare.emit();break;case"close":this.onPhotoButtonsClose.emit({component:this.innerFromComponent});break;case"mode":"fullscreen"===this.mode?(this._modeUrl=r,this._modeEl.style.setProperty("background-image",`${this._modeUrl}`),this.onPhotoRequestFullscreen.emit(),this.mode="minimize"):(this._modeUrl=l,this._modeEl.style.setProperty("background-image",`${this._modeUrl}`),this.onPhotoRequestMinimize.emit(),this.mode="fullscreen")}}render(){let t=[];return"visible"===this.innerShare&&"jeep-photo-hscroll"===this.innerFromComponent&&(t=[...t,(0,s.h)("div",{class:"share-button",onClick:()=>this._handleClick("share")})]),"jeep-photo-hscroll"===this.innerFromComponent&&(t=[...t,(0,s.h)("div",{class:"mode-button",onClick:()=>this._handleClick("mode")})]),"yes"===this.innerCloseButton&&(t=[...t,(0,s.h)("div",{class:"close-button",onClick:()=>this._handleClick("close")})]),(0,s.h)(s.H,null,(0,s.h)("div",{class:"photobuttons-container"},(0,s.h)("div",{class:"wrapper"},t)))}get el(){return(0,s.g)(this)}static get watchers(){return{share:["parseShare"],viewmode:["parseViewmode"],closebutton:["parseCloseButton"],fromcomponent:["parseFromComponent"]}}};c.style=":host{display:block;--photo-buttons-height:min(7vmin, 40px);--photo-buttons-padding:3px}.photobuttons-container{position:absolute;top:5vh;left:0;width:100vw;height:var(--photo-buttons-height);background-color:rgba(125,125,125,0.3);visibility:visible}.wrapper{width:100%;height:100%}.share-button{position:absolute;top:0;left:7vmin;width:var(--photo-buttons-height);height:var(--photo-buttons-height);background-position:center;background-repeat:no-repeat;background-size:cover}.mode-button{position:absolute;top:0;left:calc(100vw / 2 - var(--photo-buttons-height) / 2);width:var(--photo-buttons-height);height:var(--photo-buttons-height);background-position:center;background-repeat:no-repeat;background-size:cover}.close-button{position:absolute;top:0;left:calc(100vw - var(--photo-buttons-height) - 7vmin);width:var(--photo-buttons-height);height:var(--photo-buttons-height);background-position:center;background-repeat:no-repeat;background-size:cover}.hidden{visibility:hidden}";const d=class{constructor(t){(0,s.r)(this,t),this.onPhotoHscrollResult=(0,s.c)(this,"jeepPhotoHscrollResult",7),this.onPhotoZoom=(0,s.c)(this,"jeepPhotoZoom",7),this.onPhotoPhotoHscrollClose=(0,s.c)(this,"jeepPhotoHscrollClose",7),this._tapped=!1,this._tappedTime=null,this._tapNum=0,this._timerStart=!1,this._photoZoomOneTap=!1,this._ticking=!1,this._isScrollListener=!1,this._shareUrl="",this._shareTitle="",this._shareText="",this.position=void 0,this.imageList=void 0,this.options=void 0,this.mode=void 0,this.innerImageList=void 0,this.innerOptions=void 0,this.innerPosition=void 0,this.innerMode=void 0,this.buttonsVisibility=void 0,this.isFullscreen=void 0,this.photoZoom=void 0,this.share=void 0,this.shareShow=!1,this.titleShow=!0,this.maxZoomScale=void 0,this.currentIndex=void 0}parsePosition(t){this.innerPosition=t}parseImageList(t){this.innerImageList=t}parseOptions(t){this.innerOptions=t}parseMode(t){this.innerMode=t}async handleWindowResize(){this._currentPosition=this.currentIndex*this._window.innerWidth,await this._scrollToPosition(this.currentIndex)}async handleJeepPhotoButtonsClose(){this.isFullscreen&&await this._fullscreenExit(),"gallery"!==this.innerMode&&(this.currentIndex="slider"===this.innerMode?this._getCurrentPhotoIndex():this.innerPosition,this.onPhotoHscrollResult.emit({result:!0,imageIndex:this.currentIndex}))}async handleJeepPhotoButtonsShare(){this.shareShow=!0,this._shareUrl=this.innerImageList[this.currentIndex].url,this._shareTitle=this.innerImageList[this.currentIndex].title,this._shareText="Share API Demo"}async handleJeepPhotoShareCompleted(t){t.detail?t.detail.result?this.onPhotoHscrollResult.emit({result:!0,message:"Photo has been shared successfully"}):this.onPhotoHscrollResult.emit({result:!1,message:`Error: ${t.detail.message}`}):this.onPhotoHscrollResult.emit({result:!1,message:"Error: No message returned"}),this.shareShow=!1}async handleJeepPhotoFullscreenRequest(){await this._fullscreenRequest(document.documentElement)}async handleJeepPhotoMinimizeRequest(){const t=this._getCurrentPhotoIndex();await this._fullscreenExit(),this.currentIndex=t}async handleJeepPhotoZoomOneTap(){this.photoZoom=!1,this.onPhotoZoom.emit({isZoom:this.photoZoom}),this._photoZoomOneTap=!0,this.buttonsVisibility=!this.buttonsVisibility}async handleJeepPhotoSwipe(t){if(t.detail&&!this.photoZoom){let e=t.detail;(e.up||e.down)&&(this.isFullscreen&&await this._fullscreenExit(),"gallery"!==this.innerMode?(this.currentIndex="slider"===this.innerMode?this._getCurrentPhotoIndex():this.innerPosition,this.onPhotoHscrollResult.emit({result:!0,imageIndex:this.currentIndex})):this.onPhotoPhotoHscrollClose.emit())}}async init(){return await this._init()}setCarousel(){return Promise.resolve(this._setCarousel())}async componentWillLoad(){this._window=window,await this.init()}async componentDidLoad(){await this.setCarousel()}async componentDidRender(){this._photoZoomOneTap&&(await this.setCarousel(),this._photoZoomOneTap=!1)}async _init(){this._element=this.el.shadowRoot,this.parseImageList(this.imageList?this.imageList:null),this.parseOptions(this.options?this.options:null),this.parseMode(this.mode?this.mode:"one"),this.parsePosition(this.position>=0?this.position:0),this.buttonsVisibility=!0,this.isFullscreen=!1,this.photoZoom=!1,this.onPhotoZoom.emit({isZoom:this.photoZoom}),this.share="visible",this.share=null!=this.innerOptions&&Object.keys(this.innerOptions).includes("share")?this.innerOptions.share?"visible":"hidden":"visible",this.titleShow=null==this.innerOptions||!Object.keys(this.innerOptions).includes("title")||this.innerOptions.title,this.maxZoomScale=null!=this.innerOptions&&this.innerOptions.maxzoomscale?this.innerOptions.maxzoomscale:3,this.currentIndex=this.innerPosition,this._widthFullscreen=this._window.innerWidth}async _setCarousel(){this._hsContEl=this._element.querySelector(".hscroll-container"),this._hsContEl.addEventListener("wheel",this._wheelHandler.bind(this)),this._carouselEl=this._element.querySelector(".carousel"),await this._scrollToPosition(this.currentIndex),this._currentPosition=this.currentIndex*this._window.innerWidth,this._previousScrollWidth=this._carouselEl.scrollWidth,this._carouselEl.classList.remove("hidden"),this._isScrollListener||(this._isScrollListener=!0,this._carouselEl.addEventListener("scroll",(()=>{this._ticking||(setTimeout((async()=>{if(this._carouselEl.scrollWidth===this._previousScrollWidth){const t=this._getCurrentPhotoIndex();t!==this.currentIndex&&(this.currentIndex=t)}this._ticking=!1}),500),this._ticking=!0)}),!1))}_wheelHandler(t){t.ctrlKey&&t.preventDefault()}async _scrollToPosition(t){this._currentPosition=t*this._window.innerWidth,this._carouselEl&&this._carouselEl.scrollTo(this._currentPosition,0)}_getCurrentPhotoIndex(){let t=0;return this._currentPosition=Number(this._carouselEl.scrollLeft),Math.abs(this._carouselEl.scrollWidth/this.innerImageList.length-this._window.innerWidth)<=2&&(t=Math.round(this._currentPosition/this._window.innerWidth)),t}async _fullscreenRequest(t){t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen?t.msRequestFullscreen():this.onPhotoHscrollResult.emit({result:!1,message:"Error: Fullscreen API is not supported."}),this.isFullscreen=!0}async _fullscreenExit(){let t=document;t&&t.exitFullscreen?t.exitFullscreen():t&&t.webkitExitFullscreen?t.webkitExitFullscreen():t&&t.mozExitFullscreen?t.mozExitFullscreen():t&&t.msExitFullscreen?t.msExitFullscreen():this.onPhotoHscrollResult.emit({result:!1,message:"Error: Fullscreen API is not supported."}),this.isFullscreen=!1}_handleClick(){"gallery"===this.innerMode||"slider"===this.innerMode?(this.currentIndex=this._getCurrentPhotoIndex(),this._currentPosition=this.currentIndex*this._window.innerWidth):this.currentIndex=this.innerPosition,this.buttonsVisibility=!this.buttonsVisibility,this.photoZoom=!0,this.onPhotoZoom.emit({isZoom:this.photoZoom})}render(){let t=[];if(null!=this.innerImageList&&this.innerImageList.length>0){const i=this.titleShow?"carousel-title":"carousel-title hidden";if("gallery"===this.innerMode||"slider"===this.innerMode)for(var e=0;e<this.innerImageList.length;e++)t=[...t,(0,s.h)("div",{class:"carousel-item",onClick:()=>this._handleClick()},(0,s.h)("img",{src:this.innerImageList[e].url,alt:this.innerImageList[e].title,class:"carousel-image"}),(0,s.h)("p",{class:i},this.innerImageList[e].title))];"one"===this.innerMode&&(t=[...t,(0,s.h)("div",{class:"carousel-item",onClick:()=>this._handleClick()},(0,s.h)("img",{src:this.innerImageList[this.innerPosition].url,alt:this.innerImageList[this.innerPosition].title,class:"carousel-image"}),(0,s.h)("p",{class:i},this.innerImageList[this.innerPosition].title))])}let i=[];if(this.buttonsVisibility){const t=this.isFullscreen?"fullscreen":"normal";i=[...i,(0,s.h)("jeep-photo-buttons",{share:this.share,viewmode:t,closebutton:"yes",fromcomponent:"jeep-photo-hscroll"})]}let o=[];return this.shareShow&&(o=[...o,(0,s.h)("jeep-photo-share",{surl:this._shareUrl,stitle:this._shareTitle,stext:this._shareText})]),(0,s.h)(s.H,null,(0,s.h)("div",{class:"hscroll-container"},(0,s.h)("div",{class:"wrapper"},this.photoZoom?(0,s.h)("jeep-photo-zoom",{url:this.innerImageList[this.currentIndex].url,maxzoomscale:this.maxZoomScale}):(0,s.h)("div",null,(0,s.h)("jeep-photo-swipe",null,(0,s.h)("div",{class:"carousel hidden"},t)),i,o))))}get el(){return(0,s.g)(this)}static get watchers(){return{position:["parsePosition"],imageList:["parseImageList"],options:["parseOptions"],mode:["parseMode"]}}};d.style=":host{display:block;--hscroll-background-color:var(--photoviewer-background-color);--hscroll-title-color:#d3d3d3}.hscroll-container{position:absolute;top:0;bottom:0;right:0;left:0;overflow-y:hidden;background-color:var(--hscroll-background-color)}.wrapper{box-sizing:border-box;padding:0;margin:0;position:relative;width:100%;height:100%}.carousel{box-sizing:border-box;margin:0;padding:0;width:100vw;height:100vh;scroll-snap-type:x mandatory;display:flex;-ms-scroll-snap-type:x mandatory;-webkit-scroll-snap-type:x mandatory;-webkit-scroll-snap-destination:0% 0%;-webkit-overflow-scrolling:touch;overflow-x:scroll;-ms-overflow-style:none;visibility:visible}.carousel::-webkit-scrollbar{display:none}.carousel-item{border-right:1px solid white;padding:0;min-width:100vw;min-height:100vh;scroll-snap-align:start;text-align:center;position:relative}.carousel-image{width:100vw;height:100vh;object-fit:contain}.carousel-title{position:absolute;bottom:0;visibility:visible;width:100vw;height:3vh;color:var(--hscroll-title-color);font:2.5vh Arial, sans-serif}.hidden{visibility:hidden}";const u=class{constructor(t){(0,s.r)(this,t),this.onPhotoShareCompleted=(0,s.c)(this,"jeepPhotoShareCompleted",7),this.surl=null,this.stitle=null,this.stext=null,this.innerUrl=void 0,this.innerTitle=void 0,this.innerText=void 0}parseUrl(t){this.innerUrl=t}parseTitle(t){this.innerTitle=t}parseText(t){this.innerText=t}async init(){return await this._init()}setShare(){return Promise.resolve(this._setShare())}async componentWillLoad(){this._window=window,await this.init()}async componentDidLoad(){await this.setShare()}async _init(){this._element=this.el.shadowRoot,this.parseUrl(this.surl?this.surl:null),this.parseTitle(this.stitle?this.stitle:null),this.parseText(this.stext?this.stext:null)}async _setShare(){if(navigator.share)navigator.share({title:this.innerTitle,url:this.innerUrl,text:this.innerText}).then((()=>{this.onPhotoShareCompleted.emit({result:!0})})).catch((t=>{this.onPhotoShareCompleted.emit({result:!1,message:t})}));else{const t="Share not implemented on this browser";this.onPhotoShareCompleted.emit({result:!1,message:t})}}render(){return(0,s.h)(s.H,null)}get el(){return(0,s.g)(this)}static get watchers(){return{surl:["parseUrl"],stitle:["parseTitle"],stext:["parseText"]}}};u.style=":host{display:block;--share-background-color:#000;--share-width:100vw;--share-height:100vh;--share-top:0px;--share-left:0px}.share-container{position:absolute;top:0;bottom:0;right:0;left:0;background-color:var(--zoom-background-color)}.wrapper{padding:0;margin:0;position:relative;width:100%;height:100%}";const m=class{constructor(t){(0,s.r)(this,t),this.onPhotoSwipe=(0,s.c)(this,"jeepPhotoSwipe",7),this._startPoint={},this._endPoint={},this._totalTime=0,this._getSwipeDirection=(t,e,i,s)=>{var o={up:!1,right:!1,down:!1,left:!1};return t.x>e.x&&t.x-e.x>=i?o.left=!0:t.x<e.x&&e.x-t.x>=i&&(o.right=!0),t.y<e.y&&e.y-t.y>=s?o.down=!0:t.y>e.y&&t.y-e.y>=s&&(o.up=!0),o},this.timeThreshold=200,this.thresholdX=100,this.thresholdY=100,this.innerTimeThreshold=void 0,this.innerThresholdX=void 0,this.innerThresholdY=void 0}parseTimeThreshold(t){this.innerTimeThreshold=t}parseThresholdX(t){this.innerThresholdX=t}parseThresholdY(t){this.innerThresholdY=t}async init(){return await this._init()}async handleTouchStart(t){this._startPoint.x=t.touches[0].clientX,this._startPoint.y=t.touches[0].clientY,this._time=setInterval((()=>{this._totalTime+=10}),10)}async handleTouchEnd(t){if(this._endPoint.x=t.changedTouches[0].clientX,this._endPoint.y=t.changedTouches[0].clientY,clearInterval(this._time),this._totalTime>=this.innerTimeThreshold){let t=this._getSwipeDirection(this._startPoint,this._endPoint,this.innerThresholdX,this.innerThresholdY);this.onPhotoSwipe.emit({up:t.up,down:t.down,left:t.left,right:t.right})}this._totalTime=0}async handleMouseDown(t){t.preventDefault(),this._startPoint.x=t.clientX,this._startPoint.y=t.clientY,this._time=setInterval((()=>{this._totalTime+=10}),10)}async handleMouseUp(t){if(this._endPoint.x=t.clientX,this._endPoint.y=t.clientY,clearInterval(this._time),this._totalTime>=this.innerTimeThreshold){let t=this._getSwipeDirection(this._startPoint,this._endPoint,this.innerThresholdX,this.innerThresholdY);this.onPhotoSwipe.emit({up:t.up,down:t.down,left:t.left,right:t.right})}this._totalTime=0}async componentWillLoad(){this._window=window,await this.init()}async _init(){this._element=this.el.shadowRoot,this.parseTimeThreshold(this.timeThreshold?this.timeThreshold:200),this.parseThresholdX(this.thresholdX?this.thresholdX:100),this.parseThresholdY(this.thresholdY?this.thresholdY:100)}render(){return(0,s.h)(s.H,null,(0,s.h)("div",{class:"swipe-container",onTouchStart:t=>this.handleTouchStart(t),onTouchEnd:t=>this.handleTouchEnd(t),onMouseDown:t=>this.handleMouseDown(t),onMouseUp:t=>this.handleMouseUp(t)},(0,s.h)("slot",null)))}get el(){return(0,s.g)(this)}static get watchers(){return{timeThreshold:["parseTimeThreshold"],thresholdX:["parseThresholdX"],thresholdY:["parseThresholdY"]}}};m.style="";const p=class{constructor(t){(0,s.r)(this,t),this.onPhotoZoomOneTap=(0,s.c)(this,"jeepPhotoZoomOneTap",7),this._tapedTime=null,this._tapNum=0,this._timerStart=!1,this._imageNatural={},this._view={},this._imageInView={},this._curPan={},this._startPoint={},this._movePoint={},this._lastPoint={},this._toggleDoubleTouch=!1,this._touchStart=!1,this._touchMove=!1,this._touchWheel=!1,this._touchStartTime=0,this._waiTime=500,this._initialDistance=null,this._pinchPoint={},this._WHEEL_SCALE_SPEEDUP=2,this.url=void 0,this.maxzoomscale=3,this.innerUrl=void 0,this.innerMaxZoomScale=void 0}parseUrl(t){this.innerUrl=t}parseMaxZooScale(t){this.innerMaxZoomScale=t}async init(){return await this._init()}setPhoto(){return Promise.resolve(this._setPhoto())}async componentWillLoad(){this._window=window,await this.init()}async componentDidLoad(){await this.setPhoto()}async _init(){this._element=this.el.shadowRoot,this.parseUrl(this.url?this.url:null),this.parseMaxZooScale(this.maxzoomscale?this.maxzoomscale:3),this._curZoomScale=1,this._curPan={x:0,y:0},this._lastPoint={x:this._window.innerWidth/2,y:this._window.innerHeight/2}}async _setPhoto(){this._photoEl=this._element.querySelector(".zoom-item"),this._photoEl.addEventListener("touchstart",this._startHandler.bind(this)),this._photoEl.addEventListener("touchmove",this._moveHandler.bind(this)),this._photoEl.addEventListener("touchend",this._endHandler.bind(this)),this._photoEl.addEventListener("mousedown",this._startHandler.bind(this)),this._photoEl.addEventListener("mousemove",this._moveHandler.bind(this)),this._photoEl.addEventListener("mouseup",this._endHandler.bind(this)),this._photoEl.addEventListener("wheel",this._wheelHandler.bind(this)),await this.setImage(),this._imageEl=this._photoEl.querySelector(".zoom-image"),this._view={left:0,top:0,width:this._window.innerWidth,height:this._window.innerHeight},this._imageNatural={left:0,top:0,width:this._imageEl.naturalWidth,height:this._imageEl.naturalHeight},this._imageInView=this._calculateImageInView(),this._maxZoomScale=this._calculateMaxZooScale(),this._setHostProperties(this._curZoomScale,this._curPan),this._lastPoint.x=this._imageInView.width/2,this._lastPoint.y=this._imageInView.height/2}async setImage(){return new Promise((t=>{var e=new Image;e.onload=()=>{this._photoEl.append(e),t()},e.src=this.innerUrl,e.className="zoom-image"}))}_setHostProperties(t,e){const i=`scale(${t}) translateX(${e.x}px) translateY(${e.y}px)`;this.el.style.setProperty("--zoom-left",`${this._imageInView.left}px`),this.el.style.setProperty("--zoom-top",`${this._imageInView.top}px`),this.el.style.setProperty("--zoom-width",`${this._imageInView.width}px`),this.el.style.setProperty("--zoom-height",`${this._imageInView.height}px`),this.el.style.setProperty("--zoom-transform",`${i}`)}_calculateImageInView(){let t={};const e=Math.max(this._imageNatural.width/this._view.width,this._imageNatural.height/this._view.height);return t.width=this._imageNatural.width/e,t.height=this._imageNatural.height/e,t.left=Math.max(0,(this._view.width-t.width)/2),t.top=Math.max(0,(this._view.height-t.height)/2),t}_calculateMaxZooScale(){return Math.max(this.innerMaxZoomScale,Math.max(this._view.width/this._imageInView.width,this._view.height/this._imageInView.height))}_getTouchPoint(t){let e={};return t.targetTouches?(e.x=t.targetTouches[0].clientX,e.y=t.targetTouches[0].clientY):(e.x=t.clientX,e.y=t.clientY),e}_wheelHandler(t){if(t.ctrlKey)if(t.preventDefault(),this._initialDistance){const e=t.deltaY<=0?1-this._WHEEL_SCALE_SPEEDUP*t.deltaY/100:1/(1+this._WHEEL_SCALE_SPEEDUP*t.deltaY/100);this._curZoomScale=this._curZoomScale*e,this._curZoomScale=Math.min(this._maxZoomScale,Math.max(1,this._curZoomScale)),this._curPan.x=(this._view.width/2-this._pinchPoint.x)*(this._curZoomScale-1)/this._curZoomScale,this._curPan.y=(this._view.height/2-this._pinchPoint.y)*(this._curZoomScale-1)/this._curZoomScale,this._setHostProperties(this._curZoomScale,this._curPan),this._curZoomScale<1.005&&(this._touchWheel=!1,this._initialDistance=null,this._curZoomScale=1,this._curPan={x:0,y:0},this._setHostProperties(this._curZoomScale,this._curPan))}else this._initialDistance=t.deltaY,this._pinchPoint={x:t.clientX,y:t.clientY},this._touchWheel=!0}_startHandler(t){this._startPoint=this._getTouchPoint(t),this._touchStartTime=(new Date).getTime(),1===this._curZoomScale&&(this._touchWheel=!1),this._tapNum++,this._touchStart=!0,this._touchMove=!1,this._tapedTime=setTimeout((()=>{1!==this._tapNum||this._touchWheel||this._toggleDoubleTouch||this._handleSingleTap(),this._tapNum=0}),this._waiTime),t.preventDefault()}_moveHandler(t){if(this._toggleDoubleTouch||this._touchWheel){this._touchWheel&&(this._initialDistance=null),this._movePoint=this._getTouchPoint(t),this._touchMove=!0;const e={x:this._lastPoint.x-this._movePoint.x,y:this._lastPoint.y-this._movePoint.y};this._curPan.x+=e.x*(this._maxZoomScale-1)/this._maxZoomScale,this._curPan.y+=e.y*(this._maxZoomScale-1)/this._maxZoomScale,this._lastPoint=this._movePoint,this._setHostProperties(this._maxZoomScale,this._curPan)}}_endHandler(){const t=(new Date).getTime()-this._touchStartTime;2===this._tapNum&&t<this._waiTime&&(this._lastPoint={x:this._startPoint.x,y:this._startPoint.y},clearTimeout(this._tapedTime),this._handleDoubleTap(this._startPoint),this._touchWheel?(this._touchWheel=!1,this._initialDistance=null):this._toggleDoubleTouch=!this._toggleDoubleTouch,this._tapNum=0),this._touchStart=!1,this._touchMove=!1}_handleSingleTap(){this._curZoomScale=1,this._curPan={x:0,y:0},this._setHostProperties(this._curZoomScale,this._curPan),this.onPhotoZoomOneTap.emit()}_handleDoubleTap(t){1===this._curZoomScale?(this._curZoomScale=this._maxZoomScale,this._curPan.x=(this._view.width/2-t.x)*(this._curZoomScale-1)/this._curZoomScale,this._curPan.y=(this._view.height/2-t.y)*(this._curZoomScale-1)/this._curZoomScale,this._setHostProperties(this._curZoomScale,this._curPan)):(this._curZoomScale=1,this._curPan={x:0,y:0},this._setHostProperties(this._curZoomScale,this._curPan))}render(){return(0,s.h)(s.H,null,(0,s.h)("div",{class:"zoom-container"},(0,s.h)("div",{class:"wrapper"},(0,s.h)("div",{class:"zoom-item"}))))}get el(){return(0,s.g)(this)}static get watchers(){return{url:["parseUrl"],maxzoomscale:["parseMaxZooScale"]}}};p.style=":host{display:block;--zoom-background-color:var(--photoviewer-background-color);--zoom-width:100vw;--zoom-height:100vh;--zoom-offset-x:0px;--zoom-offset-y:0px;--zoom-top:0px;--zoom-left:0px;--zoom-transform:scale(1) translateX(0px) translateY(0px)}.zoom-container{position:absolute;top:0;bottom:0;right:0;left:0;background-color:var(--zoom-background-color)}.wrapper{padding:0;margin:0;position:relative;width:100%;height:100%}.zoom-item{margin:0;padding:0;width:100vw;height:100vh;position:relative}.zoom-image{position:absolute;offset:var(--zoom-offset-x) var(--zoom-offset-y);top:var(--zoom-top);left:var(--zoom-left);width:var(--zoom-width);height:var(--zoom-height);transform:var(--zoom-transform)}";const _=class{constructor(t){(0,s.r)(this,t),this.onPhotoViewerResult=(0,s.c)(this,"jeepPhotoViewerResult",7),this._isScale=!1,this._backRange=["white","ivory","lightgrey","darkgrey","dimgrey","grey","black"],this.imageList=void 0,this.options=void 0,this.mode=void 0,this.startFrom=void 0,this.innerImageList=void 0,this.innerOptions=void 0,this.innerMode=void 0,this.innerStartFrom=void 0,this.showHScroll=!1,this.close=!1}parseImageList(t){this.innerImageList=t}parseOptions(t){this.innerOptions=t}parseMode(t){const e=["one","gallery","slider"].includes(t)?t:"one";this.innerMode=e}parseStartFrom(t){const e=t<0||t>this.innerImageList.length?0:t;this.innerStartFrom=e}handleWindowResize(){this._windowResize()}async handleJeepPhotoHscrollClose(){"gallery"===this.innerMode&&(this.close=!1,await this.closePhotoHScroll())}async handleJeepPhotoButtonsClose(t){"gallery"===this.innerMode&&("jeep-photo-hscroll"===t.detail.component?(this.close=!1,await this.closePhotoHScroll()):(this.close=!0,this.onPhotoViewerResult.emit({result:!0}))),"one"!==this.innerMode&&"slider"!==this.innerMode||(this.close=!0)}handleJeepPhotoHscrollResult(t){t.detail&&this.onPhotoViewerResult.emit(t.detail)}async init(){return await this._init()}closePhotoHScroll(){return Promise.resolve(this._closeHScroll())}async componentWillLoad(){this._window=window,await this.init()}async _init(){this._element=this.el.shadowRoot,this.parseImageList(this.imageList?this.imageList:null),this.parseOptions(this.options?this.options:null),this.parseMode(this.mode?this.mode:"one");let t=0;null!=this.startFrom&&(t=this.startFrom>this.imageList.length-1?this.imageList.length-1:this.startFrom),this.parseStartFrom(t),this._setProperties()}async _windowResize(){this._setProperties()}_setProperties(){if(null!=this.innerImageList&&0!=this.innerImageList.length||this.onPhotoViewerResult.emit({result:!1,message:"You must provide an image or an image array"}),("gallery"===this.innerMode||"slider"===this.innerMode)&&this.innerImageList.length<=1&&this.onPhotoViewerResult.emit({result:!1,message:`Image array should be greater than one for mode : ${this.innerMode}`}),"gallery"===this.innerMode){var t=null!=this.options&&this.options.spancount?this.options.spancount:3;this._window.innerWidth>this._window.innerHeight&&(t+=1)}else"slider"===this.innerMode?(t=1,this._selPos=this.innerStartFrom,this.showHScroll=!0):"one"===this.innerMode?(t=1,this._selPos=this.innerImageList.length>1?this.innerStartFrom:0,this.showHScroll=!0):this.onPhotoViewerResult.emit({result:!1,message:"mode must be in ['one', 'gallery', 'slider']"});const e=(100/t).toFixed(4);var i="";for(let e=0;e<t;e++)i+="auto ";i=i.substring(0,i.length-1);var s=null!=this.options&&this._backRange.includes(this.options.backgroundcolor)?this.options.backgroundcolor:"black";this.el.style.setProperty("--gallery-box-width",`${e}vw`),this.el.style.setProperty("--gallery-template-columns",`${i}`),this.el.style.setProperty("--photoviewer-background-color",`${s}`)}_handleClick(t){this._selPos=Number(t.substr(t.lastIndexOf("-")+1)),this.showHScroll=!0}async _closeHScroll(){this.showHScroll=!1}render(){let t=[];if(null!=this.innerImageList&&this.innerImageList.length>0)for(var e=0;e<this.innerImageList.length;e++){const i={"background-image":`${a}`},o={"background-image":`url(${this.innerImageList[e].url})`},h=`gallery-box-${e}`;t="gallery"===this.innerMode?[...t,(0,s.h)("div",{class:"placeholder",style:i},(0,s.h)("div",{id:h,class:"image",onClick:()=>this._handleClick(h),style:o},(0,s.h)("img",null)))]:[...t,(0,s.h)("div",{class:"placeholder",style:i},(0,s.h)("div",{id:h,class:"image",style:o},(0,s.h)("img",null)))]}return(0,s.h)(s.H,null,this.close?null:(0,s.h)("div",{class:"photoviewer-container"},this.showHScroll?(0,s.h)("jeep-photo-hscroll",{position:this._selPos,imageList:this.innerImageList,options:this.innerOptions,mode:this.innerMode}):(0,s.h)("div",{class:"wrapper"},t,(0,s.h)("jeep-photo-buttons",{share:"false",viewmode:"normal",closebutton:"yes",fromcomponent:"jeep-photoviewer"}))))}static get assetsDirs(){return["assets"]}get el(){return(0,s.g)(this)}static get watchers(){return{imageList:["parseImageList"],options:["parseOptions"],mode:["parseMode"],startFrom:["parseStartFrom"]}}};_.style=":host{display:block;--gallery-box-width:33.33vw;--gallery-template-columns:auto auto auto;--photoviewer-background-color:black}.photoviewer-container::-webkit-scrollbar{display:none}.photoviewer-container{-ms-autohiding-scrollbar:none;scrollbar-width:0}.wrapper{position:absolute;top:0;left:0;display:grid;width:100vw;grid-template-columns:var(--gallery-template-columns);grid-row-gap:2px;column-gap:2px;background-color:var(--photoviewer-background-color)}.placeholder{width:var(--gallery-box-width);height:var(--gallery-box-width);line-height:var(--gallery-box-width);text-align:center;background-position:center;background-repeat:no-repeat;background-size:cover;background-color:#bdbbbb}.image{width:100%;background-position:center;background-repeat:no-repeat;background-size:cover;background-color:#fffff0}"}}]);
//# sourceMappingURL=541.js.map