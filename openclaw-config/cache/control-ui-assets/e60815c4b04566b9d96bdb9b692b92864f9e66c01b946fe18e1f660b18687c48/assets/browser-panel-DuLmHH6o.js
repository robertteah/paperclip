import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,Zn as n,nr as r}from"./control-ui-foundation-DMb6IeIq.js";import{Hc as i,Kc as a,Uc as o,Yo as s,do as c,qc as ee,qo as te,uo as l}from"./control-ui-core-DzidtL-P.js";import{$ as ne,K as u,Q as d,X as f,dt as re,q as p,st as m}from"./lit-runtime-vxhGQLC6.js";import{N as ie,P as ae,Vn as h}from"./control-ui-core-CaKBexnk.js";import{Bt as g,Ft as _,Gt as v,It as y,M as b,V as oe,f as se,p as ce}from"./control-ui-core-uEI6aN5p.js";import{Cn as x,En as S,Tn as C,wn as le}from"./control-ui-boot-shared-Cyt1Zyts.js";import{An as ue,Bn as de,Bt as fe,Cn as pe,Dn as me,En as he,Fn as ge,Gt as _e,Hn as ve,Ht as ye,In as be,Jt as w,Kt as xe,Ln as T,Mn as E,Nn as Se,On as Ce,Pn as D,Rn as we,Sn as Te,Tn as Ee,Un as De,Ut as Oe,Vn as ke,Wt as Ae,jn as O,kn as k,qt as je,wn as Me,zn as Ne,zt as Pe}from"./control-ui-boot-chat-pu3gR1ly.js";import{_a as Fe,ga as Ie}from"./control-ui-boot-shared-CH-OC11d.js";import{n as Le,r as Re,t as ze}from"./dock-layout-controller-CX9mJz3R.js";import{n as Be,t as Ve}from"./scrollbar-styles-DxwFVPWs.js";import{n as He,r as Ue,t as A}from"./panel-tab-strip-DnNDQ8xL.js";import{n as We}from"./gateway-websocket-url-DeLAU9tz.js";import{n as Ge,t as Ke}from"./dock-destination-controls-CkTWFxAL.js";function j(){return typeof window>`u`?void 0:window}function qe(){return j()?.webkit?.messageHandlers?.openclawBrowser}function M(e){return typeof e==`string`&&e.length>0&&e.trim()===e}function N(e){return typeof e==`number`&&Number.isFinite(e)}function P(e){if(e===`about:blank`)return!0;if(typeof e!=`string`)return!1;try{let t=new URL(e);return t.protocol===`http:`||t.protocol===`https:`}catch{return!1}}function F(e){return r(e)&&N(e.x)&&N(e.y)&&N(e.width)&&e.width>=0&&N(e.height)&&e.height>=0}function Je(e){if(!r(e))return!1;if(e.type===`release-scope`)return M(e.scope);if(e.type===`present`)return M(e.scope)&&(e.tabId===null||M(e.tabId))&&(e.rect===null||F(e.rect))&&typeof e.visible==`boolean`;if(!M(e.tabId))return!1;switch(e.type){case`open`:return P(e.url)&&(e.activate===void 0||typeof e.activate==`boolean`);case`navigate`:return P(e.url);case`inspect`:return N(e.x)&&e.x>=0&&N(e.y)&&e.y>=0;case`back`:case`forward`:case`reload`:case`stop`:case`close`:case`snapshot`:return!0;default:return!1}}function I(e){if(!r(e)||!Number.isSafeInteger(e.revision)||typeof e.revision!=`number`||e.revision<0||!Array.isArray(e.tabs))return!1;let t=new Set;return Array.from(e.tabs).every(e=>!r(e)||!M(e.id)||t.has(e.id)||!P(e.url)||typeof e.title!=`string`||typeof e.loading!=`boolean`||typeof e.canGoBack!=`boolean`||typeof e.canGoForward!=`boolean`||e.openedBy!==`web`&&e.openedBy!==`native`||e.openerTabId!==void 0&&!M(e.openerTabId)?!1:(t.add(e.id),!0))}function Ye(e){return e===null||r(e)&&typeof e.tag==`string`&&typeof e.id==`string`&&Array.isArray(e.classes)&&e.classes.every(e=>typeof e==`string`)&&typeof e.role==`string`&&typeof e.name==`string`&&typeof e.focusable==`boolean`&&F(e.rect)}async function L(e){let t=qe();if(typeof t?.postMessage!=`function`)return null;if(!Je(e))return{ok:!1,error:`Invalid native browser request`};try{let n=await t.postMessage.bind(t)(e);return r(n)&&n.ok===!1&&typeof n.error==`string`?{ok:!1,error:n.error}:!r(n)||n.ok!==!0?{ok:!1,error:`Invalid native browser reply`}:e.type===`open`?M(n.tabId)?{ok:!0,tabId:n.tabId}:{ok:!1,error:`Invalid native browser reply`}:e.type===`snapshot`?typeof n.dataUrl!=`string`||!n.dataUrl.startsWith(`data:image/png;base64,`)||!N(n.cssWidth)||n.cssWidth<=0||!N(n.cssHeight)||n.cssHeight<=0?{ok:!1,error:`Invalid native browser snapshot`}:{ok:!0,dataUrl:n.dataUrl,cssWidth:n.cssWidth,cssHeight:n.cssHeight}:e.type===`inspect`?Ye(n.node)?{ok:!0,node:n.node}:{ok:!1,error:`Invalid native browser inspection`}:{ok:!0}}catch(e){return{ok:!1,error:e instanceof Error?e.message:`Native browser request failed`}}}function R(){if(!h())return null;let e=j()?.__OPENCLAW_NATIVE_BROWSER__;return I(e)?e:null}function Xe(e){if(!h())return()=>{};let t=R()?.revision??-1,n=n=>{let r=n instanceof CustomEvent?n.detail:null;I(r)&&r.revision>t&&(t=r.revision,e(r))};return window.addEventListener(z,n),()=>window.removeEventListener(z,n)}var z;function B(){return(B=e((()=>{z=`openclaw:native-browser-state`})))()}function V(e){return new Promise((t,n)=>{let r=new Image;r.addEventListener(`load`,()=>t(r)),r.addEventListener(`error`,()=>n(Error(v(`browser.errors.screenshotDecodeFailed`)))),r.src=e})}function Ze(e){return tt.has(e)||e.length===1}function H(e,t){if(!e)return null;let n=e.getBoundingClientRect();return n.width<=0||n.height<=0?null:{x:(t.clientX-n.left)/n.width,y:(t.clientY-n.top)/n.height}}function U(e,t,n){let r=H(e,t);if(!r||!n)return null;let i=n.metrics?.cssWidth??n.image.naturalWidth,a=n.metrics?.cssHeight??n.image.naturalHeight;return{x:r.x*i,y:r.y*a}}function Qe(e,t){if(!e||!t)return null;let n=e.metrics?.cssWidth??e.image.naturalWidth,r=e.metrics?.cssHeight??e.image.naturalHeight;return n<=0||r<=0?null:{x:t.rect.x/n,y:t.rect.y/r,width:t.rect.width/n,height:t.rect.height/r}}function $e(e,t,n,r){if(!e||!t)return;let i=Math.max(1,Math.round(t.clientWidth)),a=Math.max(1,Math.round(t.clientHeight));(e.width!==i||e.height!==a)&&(e.width=i,e.height=a);let o=e.getContext(`2d`);o&&(o.clearRect(0,0,i,a),xe(o,{width:i,height:a,strokes:n,highlight:r}))}function et(e,t,n,r,i){let a=e.metrics?.url||e.url||t?.url||``,o=e.metrics?.title||t?.title||``,s=ye({url:a,title:o,strokes:n,element:r,browserTab:e.kind===`native`?void 0:e.browserTab}),c=Oe({image:e.image,width:e.image.naturalWidth,height:e.image.naturalHeight,strokes:n,highlight:i});return Ae({...s,dataUrl:c,fileName:`annotated-page.png`})}var tt;function W(){return(W=e((()=>{g(),_e(),tt=new Set([`Enter`,`Backspace`,`Delete`,`Tab`,`Escape`,`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`,`PageUp`,`PageDown`])})))()}var nt,rt;function it(){return(it=e((()=>{g(),k(),W(),nt=120,rt=class{constructor(e){this.host=e,this.drawingGesture=null,this.suppressStageClick=!1,this.inspectionError=null}resetCaptureState(){this.host.pendingInput.clearInput(),this.cancelOverlayPointerGesture()}stageElement(){return this.host.host.renderRoot.querySelector(`.bp-stage`)}remotePoint(e){return U(this.stageElement(),e,this.host.view)}inspectHighlightRegion(){return Qe(this.host.view,this.host.inspected)}handleStageClick(e){if(this.suppressStageClick){this.suppressStageClick=!1;return}if(this.host.mode!==`interact`)return;this.host.host.renderRoot.querySelector(`.bp-viewport`)?.focus({preventScroll:!0});let t=this.remotePoint(e),n=this.host.activeTargetId;!t||!n||this.host.runAction(e=>Me(e,{targetId:n,x:t.x,y:t.y}))}handleWheel(e){if(this.host.mode!==`interact`||!this.host.view)return;let t=this.host.operations.captureClient(),n=this.host.activeTargetId;if(!t||!n)return;e.preventDefault();let r=this.host.operations.epoch;this.host.pendingInput.queueWheel(e.deltaX,e.deltaY,150,(e,i)=>{!this.host.operations.isLive(r,t)||this.host.activeTargetId!==n||this.host.mode!==`interact`||this.host.runAction(async t=>{if(this.host.evaluateUnavailable){await T(t,{targetId:n,key:i>=0?`PageDown`:`PageUp`});return}await ve(t,{targetId:n,deltaX:e,deltaY:i})})})}handleViewportKeydown(e){if(this.host.mode!==`interact`||!this.host.view||e.metaKey||e.ctrlKey||e.altKey)return;let t=e.key,n=this.host.activeTargetId;!Ze(t)||!n||(e.preventDefault(),this.host.runAction(e=>T(e,{targetId:n,key:t})))}handleOverlayPointerDown(e){if(this.host.mode===`inspect`){this.suppressStageClick=!0,this.sendAnnotation({element:this.host.inspected});return}if(this.host.mode!==`annotate`||e.button!==0||this.drawingGesture)return;let t=H(this.stageElement(),e);if(!t)return;let n=e.currentTarget instanceof HTMLElement?e.currentTarget:e.target instanceof HTMLElement?e.target:null;if(!n)return;e.preventDefault();try{n.setPointerCapture(e.pointerId)}catch{}let r={pointerId:e.pointerId,captureTarget:n,stroke:{points:[t]}};this.drawingGesture=r,this.host.setState(`strokes`,[...this.host.strokes,r.stroke]),this.paintOverlay()}handleOverlayPointerMove(e){if(this.host.mode===`annotate`){let t=this.drawingGesture;if(!t||e.pointerId!==t.pointerId)return;let n=H(this.stageElement(),e);n&&(t.stroke.points.push(n),this.paintOverlay());return}this.host.mode===`inspect`&&this.queueInspect(e)}handleOverlayPointerUp(e){e.pointerId===this.drawingGesture?.pointerId&&(this.drawingGesture=null)}cancelOverlayPointerGesture(){let e=this.drawingGesture;if(this.drawingGesture=null,e)try{e.captureTarget.hasPointerCapture(e.pointerId)&&e.captureTarget.releasePointerCapture(e.pointerId)}catch{}}queueInspect(e){let t=this.host.operations.captureClient(),n=this.remotePoint(e),r=H(this.stageElement(),e),i=this.host.activeTargetId;if(!t||!n||!r||!i||this.host.evaluateUnavailable)return;let a=this.host.operations.beginInspection(t,()=>this.host.activeTargetId===i&&this.host.view?.targetId===i&&this.host.mode===`inspect`);this.host.setState(`inspected`,null),this.host.setState(`inspectPointer`,r),this.paintOverlay(),this.host.pendingInput.queueInspection(nt,a,()=>{ue(t,{targetId:i,x:n.x,y:n.y}).then(e=>{a()&&(this.inspectionError!==null&&this.host.errorText===this.inspectionError&&this.host.setState(`errorText`,null),this.inspectionError=null,this.host.setState(`inspected`,e),this.paintOverlay())}).catch(e=>{if(a()){if(O(e)){this.host.setState(`evaluateUnavailable`,!0),this.host.setState(`errorText`,v(`browser.inspectUnavailable`)),this.host.setState(`mode`,`interact`);return}this.host.reportError(e),this.inspectionError=this.host.errorText}})})}undoStroke(){this.cancelOverlayPointerGesture(),this.host.setState(`strokes`,this.host.strokes.slice(0,-1)),this.paintOverlay()}clearStrokes(){this.cancelOverlayPointerGesture(),this.host.setState(`strokes`,[]),this.paintOverlay()}async sendAnnotation(e){this.cancelOverlayPointerGesture();let t=this.host.view,n=this.host.tabs.find(e=>e.id===this.host.activeTargetId),r=e.element??null;if(!t||this.host.strokes.length===0&&!r)return;let i=r?this.inspectHighlightRegion():null,a;try{a=et(t,n,this.host.strokes,r,i)}catch(e){this.host.reportError(e);return}if(a===`unhandled`){this.host.setState(`noticeText`,null),this.host.setState(`errorText`,v(`browser.noChatTarget`));return}if(a===`rejected`){this.host.setState(`noticeText`,null),this.host.setState(`errorText`,v(`browser.annotationLimitReached`));return}this.host.setState(`errorText`,null),this.host.setState(`noticeText`,v(`browser.annotationSent`)),this.host.exitCaptureModes()}paintOverlay(){$e(this.host.host.renderRoot.querySelector(`.bp-overlay`),this.stageElement(),this.host.strokes,this.host.mode===`inspect`?this.inspectHighlightRegion():null)}}})))()}var at,ot;function st(){return(st=e((()=>{B(),i(),c(),at=0,ot=class{constructor(e){this.controller=e,this.scope=l(),this.presentedTabId=null,this.lastPresented=0,this.stage=null,this.resizeObserver=null,this.intersectionObserver=null,this.intersecting=!0,this.occluded=!1,this.frame=null,this.lastPayload=``,this.connected=!1,this.schedule=()=>{!this.connected||this.frame!==null||(this.frame=requestAnimationFrame(()=>{this.frame=null,this.report()}))}}connect(){this.connected||(this.connected=!0,this.unsubscribeOcclusion=o(e=>{this.occluded=e,e&&this.hide(),this.schedule()}),document.addEventListener(`scroll`,this.schedule,!0),window.addEventListener(`resize`,this.schedule),this.update())}disconnect(){this.hide(),this.connected=!1,this.frame!==null&&(cancelAnimationFrame(this.frame),this.frame=null),this.resizeObserver?.disconnect(),this.intersectionObserver?.disconnect(),this.stage=null,this.unsubscribeOcclusion?.(),this.unsubscribeOcclusion=void 0,document.removeEventListener(`scroll`,this.schedule,!0),window.removeEventListener(`resize`,this.schedule),this.lastPayload=``,L({type:`release-scope`,scope:this.scope})}update(){if(!this.connected)return;let e=this.controller.host.renderRoot.querySelector(`.bp-stage`);e!==this.stage&&(this.resizeObserver?.disconnect(),this.intersectionObserver?.disconnect(),this.stage=e,this.intersecting=!0,e&&(typeof ResizeObserver==`function`&&(this.resizeObserver??=new ResizeObserver(this.schedule),this.resizeObserver.observe(e)),typeof IntersectionObserver==`function`&&(this.intersectionObserver??=new IntersectionObserver(e=>{let t=e.find(e=>e.target===this.stage);t&&(this.intersecting=t.isIntersecting,this.schedule())}),this.intersectionObserver.observe(e)))),this.canPresent()||this.hide(),this.schedule()}renew(){this.lastPayload=``,this.schedule()}hide(){this.connected&&this.send(null,null)}canPresent(){return!!(this.connected&&this.controller.host.isConnected&&this.controller.host.browserPanelIsOpen()&&this.controller.native.activeTab&&this.controller.mode===`interact`&&!this.occluded&&this.intersecting)}report(){let e=this.stage;if(!e||!this.canPresent()){this.hide();return}let t=e.getBoundingClientRect(),n=this.controller.host.renderRoot,r=n instanceof ShadowRoot?n.host:n,i=document.elementFromPoint(t.x+t.width/2,t.y+t.height/2);for(;i?.shadowRoot&&typeof i.shadowRoot.elementFromPoint==`function`;){let e=i.shadowRoot.elementFromPoint(t.x+t.width/2,t.y+t.height/2);if(!e||e===i)break;i=e}let a=i;for(;a&&a!==r;)a=a instanceof ShadowRoot?a.host:a.parentNode;if(!a||t.width<=0||t.height<=0){this.hide();return}this.send(this.controller.activeTargetId,{x:t.x,y:t.y,width:t.width,height:t.height})}send(e,t){let n={type:`present`,scope:this.scope,tabId:e,rect:t,visible:!!e},r=JSON.stringify(n);r!==this.lastPayload&&(this.lastPayload=r,this.presentedTabId=e,e&&(this.lastPresented=++at),L(n).then(e=>{e&&!e.ok&&this.connected&&this.controller.reportError(e.error)}))}}})))()}var G,K,ct;function lt(){return(lt=e((()=>{B(),c(),k(),st(),W(),G=new Set,K=new Map,ct=class{constructor(e){this.controller=e,this.nativeTabs=[],this.revision=-1,this.pendingActivation=null,this.pendingAddressFocus=null,this.captureGeneration=0,this.inspectionGeneration=0,this.presentation=new ot(e)}get activeTab(){return this.nativeTabs.find(e=>e.id===this.controller.activeTargetId)}get tabs(){return this.nativeTabs.map(e=>({...e,targetId:e.id,kind:`native`}))}connect(){if(!h()||this.unsubscribeState)return;G.add(this),this.revision=-1;let e=R();e&&this.acceptState(e,!1),this.unsubscribeState=Xe(e=>this.acceptState(e,!0)),this.presentation.connect()}disconnect(){this.unsubscribeState&&(this.unsubscribeState(),this.unsubscribeState=void 0,G.delete(this),this.pendingActivation=null,this.cancelCapture(),this.presentation.disconnect())}mergeRemoteTabs(e){return[...this.tabs,...e.filter(e=>e.kind!==`native`)]}acceptState(e,t){if(e.revision<=this.revision)return;let n=new Set(this.nativeTabs.map(e=>e.id)),r=this.activeTab;this.revision=e.revision,this.nativeTabs=e.tabs,this.controller.setState(`tabs`,this.mergeRemoteTabs(this.controller.tabs));let i=this.controller.view;i?.kind===`native`&&this.nativeTabs.find(e=>e.id===i.targetId)?.url!==i.url&&(this.controller.exitCaptureModes(),this.controller.setState(`view`,null));for(let t of K.keys())e.tabs.some(e=>e.id===t)||K.delete(t);for(let r of e.tabs)if(r.id===this.pendingActivation)this.pendingActivation=null,this.controller.selectTab(r.id).then(()=>{this.pendingAddressFocus===r.id&&this.focusAddress(r.id)});else if(t&&r.openedBy===`native`&&!n.has(r.id)){if(!K.has(r.id)){let e=[...G],t=e.filter(e=>e.presentation.presentedTabId===r.openerTabId).toSorted((e,t)=>t.presentation.lastPresented-e.presentation.lastPresented)[0]??e.filter(e=>e.presentation.lastPresented>0).toSorted((e,t)=>t.presentation.lastPresented-e.presentation.lastPresented)[0];t&&K.set(r.id,t.presentation.scope)}K.get(r.id)===this.presentation.scope&&this.controller.selectTab(r.id)}if(r&&!this.activeTab){let e=this.controller.tabs[0];this.controller.setState(`activeTargetId`,null),this.controller.setState(`view`,null),this.controller.exitCaptureModes(),e&&!this.pendingActivation?this.controller.selectTab(e.id):e||this.controller.syncUrlDraft(``)}else!this.controller.activeTargetId&&!this.pendingActivation&&this.nativeTabs[0]&&this.controller.selectTab(this.nativeTabs[0].id);this.activeTab&&(this.controller.syncUrlDraft(this.activeTab.url),this.controller.mode===`interact`&&this.controller.setState(`loading`,this.activeTab.loading)),this.presentation.update()}async send(e){let t=await L(e);return t&&!t.ok&&this.controller.reportError(t.error),t?.ok===!0}cancelPendingActivation(e){this.pendingActivation=null,this.pendingAddressFocus!==e&&(this.pendingAddressFocus=null)}async open(e,t,n=!1){if(this.controller.setState(`errorText`,null),this.controller.setState(`pendingNewTab`,!1),!t&&this.activeTab){let t=this.activeTab.id;return this.controller.exitCaptureModes(),await this.send({type:`navigate`,tabId:t,url:e})?t:null}let r=`mac-${l()}`;this.pendingActivation=r,this.pendingAddressFocus=n?r:null;let i=await L({type:`open`,tabId:r,url:e,activate:!0});return this.pendingActivation===r?!i?.ok||!i.tabId?(this.cancelPendingActivation(),i&&!i.ok&&this.controller.reportError(i.error),null):(this.pendingActivation=i.tabId,n&&(this.pendingAddressFocus=i.tabId),this.nativeTabs.some(e=>e.id===i.tabId)?(this.pendingActivation=null,await this.controller.selectTab(i.tabId),this.presentation.renew(),i.tabId):null):null}async beginNewTab(){let e=await this.open(`about:blank`,!0,!0);!e||this.pendingAddressFocus!==e||(await this.controller.host.updateComplete,this.focusAddress(e))}focusAddress(e){this.controller.activeTargetId===e&&(this.pendingAddressFocus=null,this.controller.host.isConnected&&this.controller.host.browserPanelIsOpen()&&(this.controller.setState(`urlDraft`,``),this.controller.host.renderRoot.querySelector(`.bp-url`)?.focus()))}cancelCapture(){this.captureGeneration+=1,this.inspectionGeneration+=1}async capture(e){let t=this.activeTab;if(!t)return;let n=++this.captureGeneration;this.controller.setState(`loading`,!0);let r=()=>n===this.captureGeneration&&this.controller.host.isConnected&&this.controller.host.browserPanelIsOpen()&&this.activeTab?.id===t.id&&this.activeTab.url===t.url;try{let n=await L({type:`snapshot`,tabId:t.id});if(!r())return;if(!n?.ok||typeof n.dataUrl!=`string`||typeof n.cssWidth!=`number`||typeof n.cssHeight!=`number`){n&&!n.ok&&this.controller.reportError(n.error);return}let i=await V(n.dataUrl);if(!r())return;this.controller.setState(`view`,{kind:`native`,targetId:t.id,dataUrl:n.dataUrl,image:i,url:t.url,metrics:{cssWidth:n.cssWidth,cssHeight:n.cssHeight,title:t.title,url:t.url}}),this.controller.setState(`mode`,e),this.presentation.hide()}catch(e){r()&&this.controller.reportError(e)}finally{r()&&this.controller.setState(`loading`,!1)}}inspect(e){let t=this.activeTab,n=this.controller.view,r=this.controller.host.renderRoot.querySelector(`.bp-stage`),i=U(r,e,n),a=H(r,e);if(!t||n?.kind!==`native`||n.targetId!==t.id||n.url!==t.url||!i||!a||this.controller.mode!==`inspect`)return;let o=++this.inspectionGeneration,s=()=>o===this.inspectionGeneration&&this.controller.host.isConnected&&this.controller.host.browserPanelIsOpen()&&this.activeTab?.id===t.id&&this.activeTab.url===n.url&&this.controller.view===n&&this.controller.mode===`inspect`;this.controller.setState(`inspectPointer`,a),this.controller.setState(`inspected`,null),this.controller.pendingInput.queueInspection(120,s,()=>{L({type:`inspect`,tabId:t.id,x:i.x,y:i.y}).then(e=>{s()&&(e&&!e.ok?this.controller.reportError(e.error):e?.ok&&`node`in e&&(this.controller.setState(`inspected`,we(e.node)),this.controller.paintOverlay()))})})}}})))()}async function ut(e,t,n,r,i){if(n||!r())return null;try{return await Ne(e,t)}catch(e){if(r()&&E(e))throw e;return r()&&O(e)&&i(),null}}async function dt(e){let t=await pe(e.client,e.targetId);if(!e.current())return null;let n=await he({resourceBasePath:e.host.resourceBasePath,authToken:e.host.authToken,path:t.path});if(!e.current())return null;let r=await V(n);if(!e.current())return null;let i=await ut(e.client,e.targetId,e.isEvaluateUnavailable(),e.current,e.markEvaluateUnavailable);if(!e.current())return null;let a=t.url&&i?.url&&t.url!==i.url?null:i;return{targetId:e.targetId,dataUrl:n,image:r,url:t.url,metrics:a,...e.route?{browserTab:{...e.route,targetId:e.targetId}}:{}}}var ft;function q(){return(q=e((()=>{k(),W(),ft=class{constructor(e){this.host=e,this.lifecycleEpoch=0,this.requestedMutation=0,this.requestedSnapshot=0,this.acceptedSnapshot=0,this.requestedCapture=0,this.requestedInspection=0,this.capturePending=!1,this.navigationQueues=new WeakMap,this.navigationCommits=new WeakMap}get epoch(){return this.lifecycleEpoch}get hasPendingCapture(){return this.capturePending}captureClient(){let e=this.host.client;if(!(this.host.remoteAvailable??this.host.available)||!e||!this.host.isConnected||!this.host.browserPanelIsOpen())return null;if(this.scope?.gateway!==e){let t=Te(e,this.route,()=>this.scope?.client===t&&this.scope.gateway===this.host.client&&(this.host.remoteAvailable??this.host.available)&&this.host.isConnected&&this.host.browserPanelIsOpen());this.scope={gateway:e,client:t}}return this.scope.client}resetRoute(e){this.invalidate(),this.route=e,this.scope=void 0}isLive(e,t){return this.host.isConnected&&this.host.available&&this.host.browserPanelIsOpen()&&this.lifecycleEpoch===e&&(t===void 0||this.scope?.gateway===this.host.client&&this.scope.client===t)}invalidate(){this.lifecycleEpoch+=1,this.capturePending=!1,this.invalidateInspection()}invalidateInspection(){this.requestedInspection+=1}beginMutation(e){this.requestedCapture+=1,this.capturePending=!1;let t={client:e,epoch:this.lifecycleEpoch,id:++this.requestedMutation,mutationId:this.requestedMutation,isCurrent:()=>this.isLive(t.epoch,e)&&t.id===this.requestedMutation};return t}hasQueuedNavigation(e,t){return this.navigationQueues.get(e)?.has(t)??!1}hasUnreconciledNavigation(e,t){return!e||!t?!1:this.navigationCommits.get(e)?.has(t)??!1}hasPendingNavigation(e,t){return!!(e&&t&&(this.hasQueuedNavigation(e,t)||this.hasUnreconciledNavigation(e,t)))}markNavigationCommitted(e,t){let n=this.navigationCommits.get(e);n||(n=new Set,this.navigationCommits.set(e,n)),n.add(t)}markNavigationReconciled(e,t){this.forgetNavigation(e,t)}forgetNavigation(e,t){let n=this.navigationCommits.get(e);n?.delete(t),n?.size===0&&this.navigationCommits.delete(e)}retainTabSnapshot(e,t){let n=this.navigationCommits.get(e);if(!n)return t;let r=new Set(t.map(e=>e.id));for(let e of n.keys())r.has(e)||n.delete(e);return n.size===0&&this.navigationCommits.delete(e),t}capturedTabs(e,t,n,r){let i=e.find(e=>e.id===t);if(!i)return e;let a=n?.title??i.title,o=n?.url||r||i.url;return a===i.title&&o===i.url&&!i.urlUnavailableReason?e:e.map(e=>e.id===t?{...e,title:a,url:o,urlUnavailableReason:void 0}:e)}async queueNavigation(e,t,n){let r=this.navigationQueues.get(e);r||(r=new Map,this.navigationQueues.set(e,r));let i=r.get(t),a=i?i.then(n,n):n();r.set(t,a);try{return await a}finally{r.get(t)===a&&(r.delete(t),r.size===0&&this.navigationQueues.delete(e))}}beginSnapshot(e){let t=this.requestedMutation,n={client:e,epoch:this.lifecycleEpoch,id:++this.requestedSnapshot,mutationId:t,isCurrent:()=>this.isLive(n.epoch,e)&&n.id===this.requestedSnapshot&&t===this.requestedMutation};return n}acceptSnapshot(e,t,n){return!this.isLive(e.epoch,e.client)||e.id<this.acceptedSnapshot||!e.isCurrent()&&n!==t?!1:(this.acceptedSnapshot=e.id,!0)}canCaptureSnapshot(e){return this.isLive(e.epoch,e.client)&&e.mutationId===this.requestedMutation}survivingInvocation(e,t){let n=this.lifecycleEpoch,r=this.requestedMutation;return()=>this.isLive(n,t)&&r===this.requestedMutation&&(r!==e.id||n!==e.epoch)}beginCapture(e,t,n,r=this.lifecycleEpoch){if(!this.isLive(r,e)||n()!==t)return null;let i=++this.requestedCapture;return this.capturePending=!0,()=>this.isLive(r,e)&&n()===t&&i===this.requestedCapture}completeCapture(){this.capturePending=!1}beginInspection(e,t){let n=this.lifecycleEpoch,r=++this.requestedInspection;return()=>this.isLive(n,e)&&r===this.requestedInspection&&t()}}})))()}var pt;function mt(){return(mt=e((()=>{pt=class{constructor(){this.refreshTimer=null,this.viewportResizeTimer=null,this.wheelTimer=null,this.inspectTimer=null,this.wheelDeltaX=0,this.wheelDeltaY=0,this.lastInspectAt=0}clear(){this.refreshTimer!==null&&(clearTimeout(this.refreshTimer),this.refreshTimer=null),this.viewportResizeTimer!==null&&(clearTimeout(this.viewportResizeTimer),this.viewportResizeTimer=null),this.clearInput()}clearInput(){this.wheelTimer!==null&&(clearTimeout(this.wheelTimer),this.wheelTimer=null),this.inspectTimer!==null&&(clearTimeout(this.inspectTimer),this.inspectTimer=null),this.wheelDeltaX=0,this.wheelDeltaY=0,this.lastInspectAt=0}scheduleRefresh(e,t){this.refreshTimer!==null&&clearTimeout(this.refreshTimer),this.refreshTimer=window.setTimeout(()=>{this.refreshTimer=null,t()},e)}scheduleViewportResize(e,t){this.viewportResizeTimer!==null&&clearTimeout(this.viewportResizeTimer),this.viewportResizeTimer=window.setTimeout(()=>{this.viewportResizeTimer=null,t()},e)}queueWheel(e,t,n,r){this.wheelDeltaX+=e,this.wheelDeltaY+=t,this.wheelTimer===null&&(this.wheelTimer=window.setTimeout(()=>{this.wheelTimer=null;let e=this.wheelDeltaX,t=this.wheelDeltaY;this.wheelDeltaX=0,this.wheelDeltaY=0,(e!==0||t!==0)&&r(e,t)},n))}queueInspection(e,t,n){let r=()=>{t()&&(this.lastInspectAt=Date.now(),n())};if(Date.now()-this.lastInspectAt>=e){r();return}this.inspectTimer!==null&&clearTimeout(this.inspectTimer),this.inspectTimer=window.setTimeout(()=>{this.inspectTimer=null,r()},e)}}})))()}var ht;function gt(){return(gt=e((()=>{k(),q(),ht=class{constructor(e,t){this.controller=e,this.viewport=t}async capture(e,t=this.controller.operations.epoch){let n=this.controller.operations.captureClient();if(this.controller.native.activeTab||!n||!this.controller.operations.isLive(t,n)||this.controller.activeTargetId!==e||this.controller.clearUnavailableView()||this.controller.stream.ownsView(e))return;let r=this.controller.operations.beginCapture(n,e,()=>this.controller.activeTargetId,t);if(!r)return;this.controller.setState(`loading`,!0);let i=this.controller.stream,a=i.frameRevision,o=()=>r()&&a===i.frameRevision&&!i.ownsView(e);try{if(await i.ensure(e,n,t)||!r()||i.ownsView(e))return;a=i.frameRevision;let s=await dt({client:n,targetId:e,route:this.controller.operations.route,host:this.controller.host,isEvaluateUnavailable:()=>this.controller.evaluateUnavailable,current:o,markEvaluateUnavailable:()=>this.controller.setState(`evaluateUnavailable`,!0)});if(!s||!o())return;let{metrics:c}=s;this.controller.setState(`tabs`,this.controller.operations.capturedTabs(this.controller.tabs,e,c,s.url)),this.controller.setState(`view`,s),i.releaseReplacedView(),this.viewport.captured(c),s.url&&this.controller.syncUrlDraft(s.url)}catch(t){o()&&(E(t)?(this.controller.setState(`tabs`,this.controller.tabs.map(t=>t.id===e?{...t,url:``,urlUnavailableReason:`navigation_blocked`}:t)),this.controller.clearUnavailableView()||this.controller.reportError(t)):this.controller.reportError(t))}finally{r()&&(this.controller.operations.completeCapture(),this.controller.setState(`loading`,!1))}}}})))()}var _t;function vt(){return(vt=e((()=>{_t=class{constructor(e,t=e=>new WebSocket(e)){this.options=e,this.closed=!1,this.socket=t(We(e.wsPath,e.gatewayUrl)),this.socket.binaryType=`arraybuffer`,this.socket.addEventListener(`message`,e=>this.receive(e.data)),this.socket.addEventListener(`close`,({code:e,reason:t})=>this.finish(e,t)),this.socket.addEventListener(`error`,()=>{this.finish(1006,``),this.socket.close()})}close(){this.closed=!0,this.socket.close()}finish(e,t){this.closed||(this.closed=!0,this.options.onClose({code:e,reason:t}))}receive(e){if(!this.closed)try{if(typeof e==`string`){let t=n(JSON.parse(e));if(t?.type===`error`){this.finish(1011,``),this.socket.close();return}if(typeof t?.url!=`string`||typeof t.title!=`string`)throw Error(`Invalid screencast metadata`);if(t.type===`ready`&&typeof t.targetId==`string`)this.options.onReady({targetId:t.targetId,url:t.url,title:t.title});else if(t.type===`meta`)this.options.onMeta({url:t.url,title:t.title});else throw Error(`Invalid screencast message`);return}if(!(e instanceof ArrayBuffer)||e.byteLength<5)throw Error(`Invalid screencast frame`);let t=new DataView(e).getUint32(0);if(t===0||t>=e.byteLength-4)throw Error(`Invalid screencast header length`);let r=n(JSON.parse(new TextDecoder().decode(new Uint8Array(e,4,t))));if(typeof r?.url!=`string`||typeof r.cssWidth!=`number`||!Number.isFinite(r.cssWidth)||r.cssWidth<=0||typeof r.cssHeight!=`number`||!Number.isFinite(r.cssHeight)||r.cssHeight<=0)throw Error(`Invalid screencast dimensions`);this.options.onFrame({blob:new Blob([new Uint8Array(e,4+t)],{type:`image/jpeg`}),url:r.url,cssWidth:r.cssWidth,cssHeight:r.cssHeight})}catch{this.finish(1002,``),this.socket.close()}}}})))()}var yt,bt,xt,St;function Ct(){return(Ct=e((()=>{k(),W(),vt(),C(),yt=1500,bt=1e4,xt=500,St=class{constructor(e){this.host=e,this.frameRevision=0,this.unsupported=!1,this.lastFailures=new Map,this.viewportSyncPending=!1,this.retiringUrls=new Set}ownsView(e){return!!(this.attempt?.live&&this.attempt.targetId===e&&this.current(this.attempt))}current(e){return this.attempt===e&&this.host.activeTargetId===e.targetId&&this.host.operations.isLive(e.epoch,e.client)}dimensions(){let e=this.host.host.renderRoot.querySelector(`.bp-stage`),t=this.host.host.renderRoot.querySelector(`.bp-viewport`),n=e?.clientWidth||t?.clientWidth||this.host.observedViewportSize?.width||1280,r=t?.clientHeight||this.host.observedViewportSize?.height||n,i=globalThis.devicePixelRatio||1;return{width:n,maxWidth:Math.min(2e3,Math.ceil(n*i)),maxHeight:Math.min(2e3,Math.ceil(Math.max(n,r)*i))}}async ensure(e,t,n){let r=x(this.host.operations.route);if((!this.scope||this.scope.client!==this.host.host.client||this.scope.route!==r)&&(this.close(),this.scope={client:this.host.host.client,route:r},this.unsupported=!1,this.lastFailures.clear()),this.attempt&&this.current(this.attempt)&&this.attempt.targetId===e)return this.attempt.live||await this.attempt.firstFrame;if(this.close(!1),this.unsupported||Date.now()-(this.lastFailures.get(e)??-1/0)<bt)return!1;let i=this.dimensions(),a,o=new Promise(e=>{let t=setTimeout(()=>e(!1),yt);a=n=>{clearTimeout(t),e(n)}}),s={targetId:e,client:t,epoch:n,width:i.width,live:!1,firstFrame:o,settle:a,decoding:!1,presented:!1};return this.attempt=s,this.connect(s,{maxWidth:i.maxWidth,maxHeight:i.maxHeight}),await o}async connect(e,t){try{let n=await de(e.client,{targetId:e.targetId,...t});if(!this.current(e))return;e.connection=new _t({gatewayUrl:this.host.host.client.gatewayUrl,wsPath:n.wsPath,onReady:({url:t,title:n})=>this.updateMetadata(e,{url:t,title:n}),onMeta:t=>this.updateMetadata(e,t),onFrame:t=>{this.current(e)&&(this.frameRevision+=1,e.live=!0,e.pendingFrame=t,e.decoding||this.decodeFrames(e))},onClose:({code:t})=>{this.current(e)&&(t!==4003&&t!==4004&&this.lastFailures.set(e.targetId,Date.now()),this.close(t===4003||t===4004),t===4003?(this.host.setState(`tabs`,this.host.tabs.map(t=>t.id===e.targetId?{...t,url:``,urlUnavailableReason:`navigation_blocked`}:t)),this.host.clearUnavailableView()):t===4004&&this.host.refreshAll())}})}catch(t){this.current(e)&&(this.unsupported=Se(t),this.unsupported||this.lastFailures.set(e.targetId,Date.now()),this.close(!1))}}updateMetadata(e,t){this.current(e)&&(e.metadata=t,this.host.setState(`tabs`,this.host.tabs.map(n=>n.id===e.targetId?{...n,...t,urlUnavailableReason:void 0}:n)),this.host.urlDraftEditing||this.host.setState(`urlDraft`,t.url))}flushPendingFrame(){let e=this.attempt;e&&this.current(e)&&!e.decoding&&this.decodeFrames(e)}async decodeFrames(e){e.decoding=!0;try{for(;this.current(e)&&e.pendingFrame;){if(this.host.mode!==`interact`)return;let t=e.pendingFrame,n=e.metadata;e.pendingFrame=void 0;let r=URL.createObjectURL(t.blob);this.decodingUrl=r;let i=await V(r);if(!this.current(e))return;if(this.host.mode!==`interact`){e.pendingFrame??=t,URL.revokeObjectURL(r),this.decodingUrl=void 0;return}if(n!==e.metadata&&e.metadata?.url!==t.url){URL.revokeObjectURL(r),this.decodingUrl=void 0;continue}let a=this.objectUrl;this.decodingUrl=void 0,this.objectUrl=r;let o=e.metadata?.url===t.url?e.metadata.title:this.host.tabs.find(t=>t.id===e.targetId)?.title??``,s={cssWidth:t.cssWidth,cssHeight:t.cssHeight,title:o,url:t.url};this.host.setState(`tabs`,this.host.operations.capturedTabs(this.host.tabs,e.targetId,s,t.url)),this.host.setState(`view`,{targetId:e.targetId,dataUrl:r,image:i,url:t.url,metrics:s,...this.host.operations.route?{browserTab:{...this.host.operations.route,targetId:e.targetId}}:{}}),this.host.operations.markNavigationReconciled(e.client,e.targetId),this.host.urlDraftEditing||this.host.setState(`urlDraft`,t.url),this.host.observedViewportSize&&(Math.abs(t.cssWidth-this.host.observedViewportSize.width)>1||Math.abs(t.cssHeight-this.host.observedViewportSize.height)>1)&&!this.viewportSyncPending&&(this.viewportSyncPending=!0,this.host.scheduleViewportSync()),e.presented||(e.presented=!0,this.host.setState(`loading`,!1)),e.settle(!0),await this.retireAfterUpdate(a)}}catch{this.current(e)&&this.close(!1)}finally{e.decoding=!1}}resize(){this.viewportSyncPending=!1;let e=this.attempt;!e||!this.current(e)||Math.abs(this.dimensions().width-e.width)/e.width<=.3||(this.resizeTimer??=setTimeout(()=>{this.resizeTimer=void 0,!(this.attempt!==e||!this.current(e)||Math.abs(this.dimensions().width-e.width)/e.width<=.3)&&(this.close(!1),this.host.refreshView(e.targetId))},xt))}releaseReplacedView(){let e=this.objectUrl;this.objectUrl=void 0,this.retireAfterUpdate(e)}async retireAfterUpdate(e){e&&this.retiringUrls.add(e),await this.host.host.updateComplete,e&&this.retiringUrls.delete(e)&&URL.revokeObjectURL(e)}close(e=!0){clearTimeout(this.resizeTimer),this.resizeTimer=void 0,this.viewportSyncPending=!1;let t=this.attempt;this.attempt=void 0,t?.settle(!1),t?.connection?.close();for(let t of[e?this.objectUrl:void 0,this.decodingUrl,...e?this.retiringUrls:[]])t&&URL.revokeObjectURL(t);e&&(this.objectUrl=void 0,this.retiringUrls.clear()),this.decodingUrl=void 0}}})))()}var wt,J,Y,Tt;function Et(){return(Et=e((()=>{k(),wt=300,J=100,Y=8192,Tt=class{constructor(e){this.controller=e,this.observedViewportSize=null,this.lastRequestedViewport=null}invalidate(){this.lastRequestedViewport=null}captured(e){e&&this.observedViewportSize&&(Math.abs(e.cssWidth-this.observedViewportSize.width)>1||Math.abs(e.cssHeight-this.observedViewportSize.height)>1)&&this.schedule()}resize(e,t){this.observedViewportSize={width:e,height:t},this.schedule()}schedule(){this.controller.native.activeTab||this.controller.pendingInput.scheduleViewportResize(wt,()=>this.syncViewport())}syncViewport(){let e=this.controller.activeTargetId,t=this.observedViewportSize;if(this.controller.native.activeTab||!this.controller.host.browserPanelIsOpen()||!this.controller.operations.captureClient()||!e||!t)return;this.controller.stream.resize();let n=Math.min(Y,Math.max(J,Math.round(t.width))),r=Math.min(Y,Math.max(J,Math.round(t.height))),i=this.controller.view?.targetId===e?this.controller.view:null;if(!i)return;let a=i.metrics;a&&Math.abs(a.cssWidth-n)<=1&&Math.abs(a.cssHeight-r)<=1||(this.lastRequestedViewport?.targetId!==e||this.lastRequestedViewport.width!==n||this.lastRequestedViewport.height!==r)&&(this.lastRequestedViewport={targetId:e,width:n,height:r},this.controller.runAction(t=>ke(t,{targetId:e,width:n,height:r})))}}})))()}function X(e){let t=e.trim();if(!t)return null;let n=/^[a-z][a-z0-9+.-]*:(?![0-9])/i.test(t);if(n&&!/^https?:\/\//i.test(t))return null;let r=n?t:`https://${t}`;try{let e=new URL(r);return e.protocol===`http:`||e.protocol===`https:`?e.toString():null}catch{return null}}var Dt,Z;function Ot(){return(Ot=e((()=>{B(),ie(),g(),s(),Ie(),k(),it(),lt(),q(),mt(),gt(),Ct(),Et(),C(),Dt=350,Z=class{constructor(e){this.host=e,this.running=null,this.tabs=[],this.activeTargetId=null,this.view=null,this.loading=!1,this.errorText=null,this.noticeText=null,this.mode=`interact`,this.strokes=[],this.inspected=null,this.inspectPointer=null,this.evaluateUnavailable=!1,this.urlDraft=``,this.pendingNewTab=!1,this.pendingInput=new pt,this.activeClient=null,this.urlDraftEditing=!1,this.viewport=new Tt(this),this.snapshot=new ht(this,this.viewport),this.operations=new ft(e),this.input=new rt(this),this.stream=new St(this),this.native=new ct(this),e.addController(this)}hostConnected(){this.native.connect()}hostUpdated(){this.native.presentation.update()}hostDisconnected(){this.suspendView(),this.native.disconnect()}suspendView(){this.native.cancelCapture(),this.native.presentation.hide(),this.input.cancelOverlayPointerGesture(),this.invalidateViewOperations(),this.view?.dataUrl.startsWith(`blob:`)&&this.setState(`view`,null),this.setState(`loading`,!1)}setState(e,t){Object.is(this[e],t)||((e===`view`&&t===null||e===`activeTargetId`)&&this.stream.close(),Object.assign(this,{[e]:t}),this.host.requestUpdate(),(e===`activeTargetId`||e===`mode`)&&this.native.presentation.update())}synchronizeClient(){return this.host.client!==this.activeClient&&(this.activeClient=this.host.client,this.operations.resetRoute(),this.resetBrowserState(),!0)}get unavailableTabText(){let e=this.tabs.find(e=>e.id===this.activeTargetId)?.urlUnavailableReason;return e?v(e===`navigation_blocked`?`browser.navigationBlocked`:`browser.navigationCheckFailed`):null}clearUnavailableView(){return this.unavailableTabText?(this.invalidateViewOperations(),this.setState(`view`,null),this.setState(`loading`,!1),this.setState(`urlDraft`,``),this.setState(`errorText`,null),this.exitCaptureModes(),!0):!1}invalidateViewOperations(){this.stream.close(),this.operations.invalidate(),this.pendingInput.clear(),this.viewport.invalidate()}resetBrowserState(){this.invalidateViewOperations(),this.setState(`running`,null);let e=this.native.activeTab??this.native.tabs[0];this.setState(`tabs`,this.native.tabs),this.setState(`activeTargetId`,e?.id??null),this.setState(`view`,null),this.setState(`loading`,!1),this.setState(`errorText`,null),this.setState(`noticeText`,null),this.setState(`mode`,`interact`),this.setState(`strokes`,[]),this.input.resetCaptureState(),this.setState(`inspected`,null),this.setState(`inspectPointer`,null),this.urlDraftEditing=!1,this.setState(`urlDraft`,e?.url??``),this.setState(`pendingNewTab`,!1),this.setState(`evaluateUnavailable`,!1)}reportError(e){let t=E(e)?v(`browser.navigationBlocked`):te(e);this.setState(`errorText`,v(`browser.errors.requestFailed`,{error:t}))}async refreshAll(){this.native.presentation.update();let e=this.operations.captureClient();if(!e)return;let t=this.operations.beginSnapshot(e);this.setState(`errorText`,null),!this.native.activeTab&&!this.stream.ownsView(this.activeTargetId)&&this.setState(`loading`,!0);try{let n=await D(e),r=n.tabs.find(e=>e.id===this.activeTargetId||e.targetId===this.activeTargetId),i=r??n.tabs.find(e=>!e.urlUnavailableReason)??n.tabs[0];if(!this.operations.acceptSnapshot(t,this.activeTargetId,i?.id??null)||(this.setState(`running`,n.running),this.setState(`tabs`,this.native.mergeRemoteTabs(this.operations.retainTabSnapshot(e,n.tabs))),this.native.activeTab)||!this.operations.canCaptureSnapshot(t))return;n.running||this.setState(`view`,null),this.activeTargetId!==null&&!r&&(this.invalidateViewOperations(),t.epoch=this.operations.epoch,this.setState(`view`,null),this.exitCaptureModes()),this.setState(`activeTargetId`,i?.id??null),this.urlDraftEditing||this.setState(`urlDraft`,i?.url??``),i?await this.refreshView(i.id,t.epoch):this.setState(`view`,null)}catch(e){t.isCurrent()&&this.reportError(e)}finally{t.isCurrent()&&!this.native.activeTab&&this.setState(`loading`,!1)}}async refreshView(e,t=this.operations.epoch){await this.snapshot.capture(e,t)}async runAction(e,t=!0){let n=this.operations.captureClient();if(!n)return!1;let r=this.operations.epoch,i=()=>this.operations.isLive(r,n);try{return this.setState(`errorText`,null),await e(n),i()&&t&&this.pendingInput.scheduleRefresh(Dt,()=>{i()&&this.activeTargetId&&this.refreshView(this.activeTargetId,r)}),i()}catch(e){return i()?(O(e)&&this.setState(`evaluateUnavailable`,!0),this.reportError(e),this.operations.hasPendingCapture||this.setState(`loading`,!1),!1):!1}}get observedViewportSize(){return this.viewport.observedViewportSize}scheduleViewportSync(){this.viewport.schedule()}handleViewportResize(e,t){this.viewport.resize(e,t)}async startBrowserNow(){if(!this.operations.captureClient())return;let e=this.operations.epoch;this.setState(`loading`,!0),await this.runAction(async t=>{await De(t),this.operations.isLive(e,t)&&await this.refreshAll()},!1)}async openUrl(e,t){if(h()&&(t.native||t.newTab||this.native.activeTab||!this.activeTargetId)){await this.native.open(e,t.newTab||!this.native.activeTab);return}let n=this.operations.captureClient();if(!n)return;let r=this.operations.beginMutation(n);this.setState(`loading`,!0),this.setState(`errorText`,null),this.setState(`pendingNewTab`,!1);let i=!1;try{if(t.newTab||!this.activeTargetId){let t=await be(n,e);if(!r.isCurrent()){await this.refreshTabsOnly(n,this.operations.survivingInvocation(r,n));return}let i=t?.id??this.activeTargetId;i!==this.activeTargetId&&(this.invalidateViewOperations(),r.epoch=this.operations.epoch,this.setState(`view`,null),this.exitCaptureModes()),this.setState(`activeTargetId`,i)}else{this.invalidateViewOperations(),r.epoch=this.operations.epoch,this.exitCaptureModes();let t=this.activeTargetId;if(i=this.operations.hasQueuedNavigation(n,t)||this.operations.hasUnreconciledNavigation(n,t),await this.operations.queueNavigation(n,t,async()=>{r.isCurrent()&&(await ge(n,{url:e,targetId:t}),this.operations.markNavigationCommitted(n,t))}),!r.isCurrent())return;this.setState(`view`,null)}if(await this.refreshTabsOnly(n,()=>r.isCurrent())!==`rejected`&&r.isCurrent()&&this.activeTargetId){let e=this.activeTargetId;await this.refreshView(e,r.epoch),!t.newTab&&r.isCurrent()&&this.view?.targetId===e&&this.operations.markNavigationReconciled(n,e)}}catch(e){if(r.isCurrent()){if(i&&this.activeTargetId){let e=this.activeTargetId,t=await this.refreshTabsOnly(n,()=>r.isCurrent()),i=this.tabs.find(t=>t.id===e);t===`accepted`&&r.isCurrent()&&i&&(this.setState(`view`,null),await this.refreshView(e,r.epoch),r.isCurrent()&&this.view?.targetId===e&&this.operations.markNavigationReconciled(n,e)),r.isCurrent()&&this.operations.hasUnreconciledNavigation(n,e)&&(this.setState(`activeTargetId`,null),this.setState(`view`,null),this.urlDraftEditing||this.setState(`urlDraft`,``))}this.reportError(e)}}finally{r.isCurrent()&&this.setState(`loading`,!1)}}async refreshTabsOnly(e,t){let n=this.operations.beginSnapshot(e);try{let r=await D(e);return t()&&this.operations.acceptSnapshot(n,this.activeTargetId,this.activeTargetId)?(this.setState(`running`,r.running),this.setState(`tabs`,this.native.mergeRemoteTabs(this.operations.retainTabSnapshot(e,r.tabs))),this.clearUnavailableView(),`accepted`):`rejected`}catch{return t()&&n.isCurrent()?`failed`:`rejected`}}async selectTab(e,t){this.native.cancelPendingActivation(e);let n=this.native.tabs.find(t=>t.id===e);if(n){this.invalidateViewOperations(),this.exitCaptureModes(),this.setState(`activeTargetId`,e),this.setState(`view`,null),this.setState(`urlDraft`,n.url),this.setState(`loading`,this.native.activeTab?.loading??!1),this.setState(`errorText`,null),this.native.presentation.renew();return}if(t&&x(this.operations.route)!==x(t))this.operations.resetRoute(t),this.resetBrowserState();else if(e===this.activeTargetId&&!t)return;let r=this.operations.captureClient(),i={targetId:this.activeTargetId,view:this.view};this.invalidateViewOperations();let a=this.operations.epoch;if(this.setState(`activeTargetId`,t?null:e),this.setState(`view`,null),this.exitCaptureModes(),!(!t&&this.clearUnavailableView())&&!await this.runAction(async n=>{if(t){if(await this.refreshTabsOnly(n,()=>this.operations.isLive(a,n)),!this.operations.isLive(a,n))return;let t=this.tabs.find(t=>t.id===e||t.targetId===e);if(this.setState(`activeTargetId`,this.running===!1?null:t?.id??e),this.clearUnavailableView())return}let r=this.activeTargetId;r&&(await me(n,r),this.operations.isLive(a,n)&&(await this.refreshView(r,a),this.operations.isLive(a,n)&&this.activeTargetId===r&&this.view?.targetId===r&&this.operations.markNavigationReconciled(n,r)))},!1)&&this.operations.isLive(a)&&this.activeTargetId===e){if(this.operations.hasPendingNavigation(r,i.targetId)){this.setState(`activeTargetId`,null),this.urlDraftEditing||this.setState(`urlDraft`,``);return}this.setState(`activeTargetId`,i.targetId),this.setState(`view`,i.view?.dataUrl.startsWith(`blob:`)?null:i.view),i.targetId&&i.view?.dataUrl.startsWith(`blob:`)&&await this.refreshView(i.targetId)}}async closeTab(e){if(this.native.tabs.some(t=>t.id===e)){await this.native.send({type:`close`,tabId:e});return}await this.runAction(async t=>{let n=this.operations.epoch;if(await Ee(t,e),this.operations.forgetNavigation(t,e),!this.operations.isLive(n,t)){this.operations.isLive(this.operations.epoch,t)&&await this.refreshAll();return}this.setState(`tabs`,this.tabs.filter(t=>t.id!==e));let r=await this.refreshTabsOnly(t,()=>this.operations.isLive(n,t));if(!this.operations.isLive(n,t))return;if(this.activeTargetId!==e){r!==`rejected`&&!this.operations.hasPendingCapture&&this.setState(`loading`,!1);return}let i=this.tabs.find(e=>!e.urlUnavailableReason)??this.tabs[0]??null;if(i?.kind===`native`){await this.selectTab(i.id);return}this.invalidateViewOperations(),this.setState(`activeTargetId`,i?.id??null),this.setState(`view`,null),this.exitCaptureModes(),i?await this.refreshView(i.id):this.setState(`loading`,!1)},!1),await this.host.updateComplete}reloadPage(){if(this.native.activeTab){this.exitCaptureModes(),this.native.send({type:this.native.activeTab.loading?`stop`:`reload`,tabId:this.native.activeTab.id});return}if(this.unavailableTabText){this.refreshAll();return}let e=X(this.view?.metrics?.url||this.view?.url||this.urlDraft);if(this.activeTargetId){if(!e){this.refreshView(this.activeTargetId);return}this.openUrl(e,{newTab:!1})}}goHistory(e){if(this.native.activeTab){this.exitCaptureModes(),this.native.send({type:e===-1?`back`:`forward`,tabId:this.native.activeTab.id});return}let t=this.activeTargetId;!t||!this.view||this.runAction(n=>Ce(n,{targetId:t,delta:e}))}commitUrlDraft(){let e=X(this.urlDraft);e&&this.openUrl(e,{newTab:this.pendingNewTab||this.tabs.length===0})}beginNewTab(){if(h()){this.native.beginNewTab();return}this.setState(`pendingNewTab`,!0),this.setState(`urlDraft`,``);let e=this.operations.epoch;this.host.updateComplete.then(()=>{this.operations.isLive(e)&&this.host.renderRoot.querySelector(`.bp-url`)?.focus()})}setUrlDraft(e){this.setState(`urlDraft`,e)}setUrlDraftEditing(e){this.urlDraftEditing=e}resetUrlDraftFromView(){this.setState(`urlDraft`,this.native.activeTab?.url||this.view?.metrics?.url||this.view?.url||``)}syncUrlDraft(e){this.urlDraftEditing||this.setState(`urlDraft`,e)}openExternal(){let e=this.native.activeTab?.url||this.view?.metrics?.url||this.view?.url||this.urlDraft;e&&!(this.native.activeTab&&ae(e))&&Fe(e)}exitCaptureModes(){this.native.cancelCapture(),this.native.activeTab&&this.setState(`view`,null),this.operations.invalidateInspection(),this.input.resetCaptureState(),this.setState(`mode`,`interact`),this.setState(`strokes`,[]),this.setState(`inspected`,null),this.setState(`inspectPointer`,null),this.stream.flushPendingFrame()}setMode(e){if(this.mode===e){this.exitCaptureModes();return}if(this.exitCaptureModes(),this.native.activeTab&&e!==`interact`){this.native.capture(e);return}this.setState(`mode`,e),this.setState(`noticeText`,null),e===`inspect`&&this.evaluateUnavailable&&(this.setState(`errorText`,v(`browser.inspectUnavailable`)),this.setState(`mode`,`interact`))}inspectHighlightRegion(){return this.input.inspectHighlightRegion()}handleStageClick(e){this.native.activeTab||this.input.handleStageClick(e)}handleWheel(e){this.native.activeTab||this.input.handleWheel(e)}handleViewportKeydown(e){this.native.activeTab||this.input.handleViewportKeydown(e)}handleOverlayPointerDown(e){this.input.handleOverlayPointerDown(e)}handleOverlayPointerMove(e){this.native.activeTab&&this.mode===`inspect`?this.native.inspect(e):this.input.handleOverlayPointerMove(e)}handleOverlayPointerUp(e){this.input.handleOverlayPointerUp(e)}cancelOverlayPointerGesture(){this.input.cancelOverlayPointerGesture()}undoStroke(){this.input.undoStroke()}clearStrokes(){this.input.clearStrokes()}async sendAnnotation(e){await this.input.sendAnnotation(e)}paintOverlay(){this.input.paintOverlay()}}})))()}function kt(e){if(e.title.trim())return e.title.trim();try{return new URL(e.url).host||v(`browser.untitledTab`)}catch{return e.url||v(`browser.untitledTab`)}}function At(e){let t=e.tabs.map(e=>{let t=kt(e);return{id:e.id,domId:`browser-tab-${e.id}`,label:t,title:`${v(e.kind===`native`?`browser.nativeTab`:`browser.remoteTab`)}: ${e.url}`,icon:e.kind===`native`?_.monitor:_.globe,closeLabel:`${v(`browser.closeTab`)}: ${t}`}});return Ue({tabs:t,activeId:e.activeTargetId,ariaControls:`browser-tab-panel`,onSelect:e.onSelect,onClose:e.onClose,onNew:e.onNew,newLabel:v(`browser.newTab`),newTabAction:!0,...e.hideNewControl?{newControl:p}:{}})}function jt(){return(jt=e((()=>{u(),g(),y(),A()})))()}function Mt(e,t){return At({tabs:e.tabs,activeTargetId:e.activeTargetId,onSelect:t=>void e.selectTab(t),onClose:t=>e.closeTab(t),onNew:()=>e.beginNewTab(),hideNewControl:t})}function Nt(e,t,n,r){let i=e.native.activeTab?.url||e.view?.metrics?.url||e.view?.url||e.urlDraft;return f`
    <div class="rail-header__actions bp-actions">
      ${Ge({current:t,groupClass:`bp-dock-modes`,groupLabel:v(`browser.title`),destinations:[{dock:`bottom`,label:v(`browser.dockBottom`),icon:_.panelBottomOpen,className:`bp-icon`},{dock:`right`,label:v(`browser.dockRight`),icon:_.panelRightOpen,className:`bp-icon`}],onSelect:n})}
      <button
        class="rail-header__action bp-icon"
        type="button"
        data-new-tab-action
        title=${v(`browser.openExternal`)}
        aria-label=${v(`browser.openExternal`)}
        ?disabled=${!i}
        @click=${()=>e.openExternal()}
      >
        ${_.externalLink}
      </button>
      <button
        class="rail-header__action bp-icon"
        type="button"
        title=${v(`browser.close`)}
        aria-label=${v(`browser.close`)}
        @click=${r}
      >
        ${_.x}
      </button>
    </div>
  `}function Pt(e,t){let n=e.native.activeTab,r=!!(n||e.view);return f`
    <div class="bp-toolbar">
      ${!n&&e.operations.route?f`<span
              class="bp-profile"
              title=${v(`browser.profile`,{profile:e.operations.route.profile})}
              >${e.operations.route.profile}</span
            >`:p}
      ${t?f`<button
              class="bp-icon"
              type="button"
              data-new-tab-action
              title=${v(`browser.newTab`)}
              aria-label=${v(`browser.newTab`)}
              @click=${()=>e.beginNewTab()}
            >
              ${_.plus}
            </button>`:p}
      <button
        class="bp-icon"
        type="button"
        title=${v(`browser.back`)}
        aria-label=${v(`browser.back`)}
        ?disabled=${n?!n.canGoBack:!r||e.evaluateUnavailable}
        @click=${()=>e.goHistory(-1)}
      >
        ${Bt}
      </button>
      <button
        class="bp-icon"
        type="button"
        title=${v(`browser.forward`)}
        aria-label=${v(`browser.forward`)}
        ?disabled=${n?!n.canGoForward:!r||e.evaluateUnavailable}
        @click=${()=>e.goHistory(1)}
      >
        ${Vt}
      </button>
      <button
        class="bp-icon"
        type="button"
        title=${v(n?.loading?`browser.stop`:`browser.reload`)}
        aria-label=${v(n?.loading?`browser.stop`:`browser.reload`)}
        ?disabled=${!e.activeTargetId}
        @click=${()=>e.reloadPage()}
      >
        ${n?.loading?Q:Ht}
      </button>
      <input
        class="bp-url"
        type="text"
        spellcheck="false"
        autocomplete="off"
        placeholder=${v(`browser.urlPlaceholder`)}
        .value=${e.urlDraft}
        @focus=${t=>{e.setUrlDraftEditing(!0),t.target.select()}}
        @blur=${()=>e.setUrlDraftEditing(!1)}
        @input=${t=>e.setUrlDraft(t.target.value)}
        @keydown=${t=>{t.key===`Enter`?(t.preventDefault(),e.commitUrlDraft(),t.target.blur()):t.key===`Escape`&&(e.resetUrlDraftFromView(),t.target.blur())}}
      />
      ${t?f`<button
              class="bp-icon"
              type="button"
              data-new-tab-action
              title=${v(`browser.openExternal`)}
              aria-label=${v(`browser.openExternal`)}
              ?disabled=${!r}
              @click=${()=>e.openExternal()}
            >
              ${_.externalLink}
            </button>`:p}
      <button
        class="bp-icon ${e.mode===`annotate`?`is-active`:``}"
        type="button"
        title=${v(`browser.annotate`)}
        aria-label=${v(`browser.annotate`)}
        ?disabled=${!r}
        @click=${()=>e.setMode(`annotate`)}
      >
        ${Ut}
      </button>
      <button
        class="bp-icon ${e.mode===`inspect`?`is-active`:``}"
        type="button"
        title=${!n&&e.evaluateUnavailable?v(`browser.inspectUnavailable`):v(`browser.inspect`)}
        aria-label=${v(`browser.inspect`)}
        ?disabled=${!r||!n&&e.evaluateUnavailable}
        @click=${()=>e.setMode(`inspect`)}
      >
        ${Wt}
      </button>
    </div>
  `}function Ft(e){return e.mode===`annotate`?f`
    <div class="bp-annotatebar">
      <span class="bp-annotatebar__hint">${v(`browser.annotateHint`)}</span>
      <button
        class="bp-btn"
        type="button"
        ?disabled=${e.strokes.length===0}
        @click=${()=>e.undoStroke()}
      >
        ${v(`browser.annotateUndo`)}
      </button>
      <button
        class="bp-btn"
        type="button"
        ?disabled=${e.strokes.length===0}
        @click=${()=>e.clearStrokes()}
      >
        ${v(`browser.annotateClear`)}
      </button>
      <button
        class="bp-btn"
        type="button"
        title=${v(`browser.annotateDone`)}
        @click=${()=>e.exitCaptureModes()}
      >
        ${Q}
      </button>
      <button
        class="bp-btn bp-btn--primary"
        type="button"
        ?disabled=${e.strokes.length===0}
        @click=${()=>void e.sendAnnotation({})}
      >
        ${v(`browser.annotateSend`)}
      </button>
    </div>
  `:p}function It(e){let t=e.inspected,n=e.inspectPointer;if(e.mode!==`inspect`||!t||!n)return p;let r=`${Math.min(92,Math.max(0,n.x*100))}%`,i=`${Math.min(92,Math.max(0,n.y*100+2))}%`,a=t.classes.map(e=>`.${e}`).join(``);return f`
    <div class="bp-tooltip" style="left:${r};top:${i}">
      <div class="bp-tooltip__title">
        <span class="bp-tooltip__selector"
          >${t.tag}${t.id?`#${t.id}`:``}${a}</span
        >
        <span class="bp-tooltip__size"
          >${Math.round(t.rect.width)} × ${Math.round(t.rect.height)}</span
        >
      </div>
      ${t.name?f`<div class="bp-tooltip__row">
              <span>${v(`browser.inspectName`)}</span><span>${t.name}</span>
            </div>`:p}
      ${t.role?f`<div class="bp-tooltip__row">
              <span>${v(`browser.inspectRole`)}</span><span>${t.role}</span>
            </div>`:p}
      <div class="bp-tooltip__row">
        <span>${v(`browser.inspectFocusable`)}</span><span>${t.focusable?`✓`:`–`}</span>
      </div>
    </div>
  `}function Lt(e){if(e.native.activeTab&&e.mode===`interact`)return f`<div
      class="bp-stage bp-stage--native"
      aria-busy=${e.native.activeTab.loading}
    >
      ${e.native.activeTab.loading?f`<span class="bp-native-loading" role="status">${v(`browser.loading`)}</span>`:p}
    </div>`;if(!e.native.activeTab&&e.running===!1)return fe({icon:_.globe,heading:v(`chat.sidePanel.browser`),description:v(`browser.notRunning`),action:f`
        <button class="bp-btn" type="button" @click=${()=>void e.startBrowserNow()}>
          ${v(`browser.start`)}
        </button>
      `});if(!e.view&&e.unavailableTabText)return f`<div class="bp-status" role="status">${e.unavailableTabText}</div>`;if(!e.view)return e.loading?w(`browser`,v(`browser.loading`)):fe({icon:_.globe,heading:v(`chat.sidePanel.browser`),description:v(`chat.sidePanel.browserEmpty`)});let t=e.mode===`annotate`?`bp-overlay--annotate`:e.mode===`inspect`?`bp-overlay--inspect`:``;return f`
    <div class="bp-stage">
      <img
        class="bp-shot"
        src=${e.view.dataUrl}
        alt=${e.view.metrics?.title||``}
      />
      <canvas
        class="bp-overlay ${t}"
        @click=${t=>e.handleStageClick(t)}
        @pointerdown=${t=>e.handleOverlayPointerDown(t)}
        @pointermove=${t=>e.handleOverlayPointerMove(t)}
        @pointerup=${t=>e.handleOverlayPointerUp(t)}
        @pointercancel=${t=>e.handleOverlayPointerUp(t)}
        @lostpointercapture=${t=>e.handleOverlayPointerUp(t)}
      ></canvas>
      ${It(e)}
    </div>
  `}function Rt(e){return f`
    <wa-tab-panel
      id="browser-tab-panel"
      class="bp-viewport"
      name=${e.activeTargetId??`browser`}
      active
      aria-labelledby=${e.activeTargetId?`browser-tab-${e.activeTargetId}`:p}
      tabindex="0"
      @wheel=${t=>e.handleWheel(t)}
      @keydown=${t=>e.handleViewportKeydown(t)}
      aria-busy=${e.loading?`true`:`false`}
    >
      ${Lt(e)}
      ${!e.native.activeTab&&e.loading&&e.view?w(`browser`,v(`browser.loading`),!1,!0):p}
    </wa-tab-panel>
  `}function zt(e,t,n,r,i,a,o,s=!1){let c=s?p:t===`bottom`?`height:${n}px`:`width:${r}px`;return f`
    <section
      class="bp bp--${s?`embedded`:t}"
      style=${c}
      aria-label=${v(`browser.title`)}
    >
      ${s?p:o}
      ${s&&e.tabs.length===0?p:f`<header class="rail-header bp-header">
              ${Mt(e,s)}
              ${s?p:Nt(e,t,i,a)}
            </header>`}
      ${Pt(e,s)} ${Ft(e)}
      ${e.errorText?f`<div class="bp-note bp-note--error" role="alert">${e.errorText}</div>`:e.noticeText?f`<div class="bp-note" role="status">${e.noticeText}</div>`:p}
      ${Rt(e)}
    </section>
  `}var Q,Bt,Vt,Ht,Ut,Wt;function Gt(){return(Gt=e((()=>{u(),g(),Ke(),y(),Pe(),je(),jt(),Q=d`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 4l8 8M12 4l-8 8" /></svg>`,Bt=d`<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3L5 8l5 5" /></svg>`,Vt=d`<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3l5 5-5 5" /></svg>`,Ht=d`<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M13 8a5 5 0 1 1-1.5-3.6M13 2.5V5h-2.5" /></svg>`,Ut=d`<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M11.3 2.7l2 2L5 13H3v-2z" /></svg>`,Wt=d`<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l5.5 10 1.2-4.3L14 7.5z" /></svg>`})))()}var Kt;function qt(){return(qt=e((()=>{u(),Kt=re`
  /* Docked panels get a single hairline separator on the inner edge so they
     read as layout, not as a floating card. The browser dock yields to the
     terminal dock's reserved edges so the two panels tile instead of
     overlapping when both are open. */
  .bp--bottom {
    left: var(--shell-nav-width, 0);
    right: var(--oc-terminal-reserve-right, 0px);
    bottom: var(--oc-terminal-reserve-bottom, 0px);
  }
  .bp--right {
    top: var(--shell-topbar-height, 0);
    right: var(--oc-terminal-reserve-right, 0px);
    bottom: var(--oc-terminal-reserve-bottom, 0px);
  }
  .bp--embedded {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .bp-actions {
    flex: none;
  }
  .bp-profile {
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--muted);
    font-size: 11px;
  }

  .bp-toolbar {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 5px 8px;
    border-bottom: 1px solid var(--border, #262b34);
  }
  .bp-toolbar .bp-icon {
    display: inline-flex;
    width: 28px;
    height: 28px;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    border-radius: 6px;
    background: transparent;
    color: var(--muted, #8a919e);
  }
  .bp-toolbar .bp-icon:hover,
  .bp-toolbar .bp-icon:focus-visible {
    background: color-mix(in srgb, var(--text, #d7dae0) 10%, transparent);
    color: var(--text, #d7dae0);
  }
  .bp-url {
    flex: 1;
    min-width: 0;
    height: 28px;
    padding: 0 12px;
    border: 1px solid transparent;
    border-radius: 14px;
    background: color-mix(in srgb, var(--text, #d7dae0) 8%, transparent);
    color: var(--text, #d7dae0);
    font-size: 12.5px;
    font-family: inherit;
    outline: none;
    text-overflow: ellipsis;
  }
  .bp-url:focus {
    border-color: var(--accent, #ff5c5c);
    background: var(--bg, #0e1015);
  }
  .bp-annotatebar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 10px;
    font-size: 12px;
    color: var(--muted, #8a919e);
    border-bottom: 1px solid var(--border, #262b34);
    background: color-mix(in srgb, var(--accent, #ff5c5c) 7%, transparent);
  }
  .bp-annotatebar__hint {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .bp-btn {
    border: 1px solid var(--border, #262b34);
    background: transparent;
    color: var(--text, #d7dae0);
    font-size: 12px;
    font-family: inherit;
    border-radius: 6px;
    padding: 3px 10px;
  }
  .bp-btn:hover {
    background: color-mix(in srgb, var(--text, #d7dae0) 10%, transparent);
  }
  .bp-btn--primary {
    border-color: var(--accent, #ff5c5c);
    color: var(--accent, #ff5c5c);
  }
  .bp-viewport {
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
    flex-direction: column;
    overflow: auto;
    background: var(--bg, #0e1015);
    outline: none;
  }
  /* The tab panel's own body must stretch, otherwise an empty state sizes to its
     content and sits in the upper third instead of centring in the viewport. */
  .bp-viewport::part(base) {
    display: flex;
    flex: 1 1 auto;
    min-height: 0;
    flex-direction: column;
  }
  .bp-stage {
    position: relative;
    width: 100%;
  }
  .bp-stage--native {
    flex: 1 1 auto;
    min-height: 100px;
  }
  .bp-native-loading {
    display: block;
    padding: var(--space-2);
    color: var(--muted);
    font-size: var(--font-size-xs);
  }
  .bp-shot {
    display: block;
    width: 100%;
    height: auto;
    user-select: none;
    -webkit-user-drag: none;
  }
  .bp-overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    touch-action: none;
  }
  .bp-overlay--annotate {
    cursor: crosshair;
  }
  .bp-overlay--inspect {
    cursor: default;
  }
  .bp-tooltip {
    position: absolute;
    z-index: 3;
    max-width: 320px;
    padding: 8px 10px;
    border-radius: 8px;
    border: 1px solid var(--border, #262b34);
    background: var(--bg, #0e1015);
    box-shadow: var(--shadow-md, 0 4px 16px rgba(0, 0, 0, 0.3));
    font-size: 12px;
    pointer-events: none;
  }
  .bp-tooltip__title {
    display: flex;
    align-items: baseline;
    gap: 8px;
    justify-content: space-between;
  }
  .bp-tooltip__selector {
    color: var(--accent, #6ea8fe);
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    word-break: break-all;
  }
  .bp-tooltip__size {
    color: var(--muted, #8a919e);
    white-space: nowrap;
  }
  .bp-tooltip__row {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-top: 4px;
    color: var(--muted, #8a919e);
  }
  .bp-tooltip__row span:last-child {
    color: var(--text, #d7dae0);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .bp-status {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 100%;
    padding: 20px;
    font-size: 12.5px;
    color: var(--muted, #8a919e);
    text-align: center;
  }
  .bp-note {
    padding: 6px 12px;
    font-size: 12px;
    color: var(--muted, #8a919e);
    border-bottom: 1px solid var(--border, #262b34);
  }
  .bp-note--error {
    color: var(--danger, #ff6b6b);
  }
`})))()}var $;function Jt(){return(Jt=e((()=>{u(),ne(),B(),g(),ee(),Ve(),Re(),ce(),A(),oe(),Ot(),Gt(),qt(),C(),$=class extends a{constructor(...e){super(...e),this.client=null,this.available=!1,this.remoteAvailable=!0,this.suppressed=!1,this.resourceBasePath=``,this.authToken=null,this.embedded=!1,this.presented=!1,this.refreshOnPresentation=!0,this.sessionKey=``,this.activeSessionKey=``,this.browserPanelController=new Z(this),this.dockLayout=new ze(this,{layout:se,reservationPrefix:`browser`,isAvailable:()=>this.available}),this.onToggleRequest=e=>this.handleToggleRequest(e),this.viewportResizeObserver=null,this.observedViewportElement=null}static{this.styles=[He,Le,Kt,Be]}connectedCallback(){super.connectedCallback(),this.embedded||window.addEventListener(b,this.onToggleRequest),this.dockLayout.setSuppressed(this.suppressed),!this.embedded&&this.dockLayout.open&&this.browserPanelController.refreshAll()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(b,this.onToggleRequest),this.viewportResizeObserver?.disconnect(),this.viewportResizeObserver=null,this.observedViewportElement=null}updated(e){if(e.has(`embedded`)&&(this.embedded?window.removeEventListener(b,this.onToggleRequest):window.addEventListener(b,this.onToggleRequest)),e.has(`suppressed`)){let e=this.dockLayout.setSuppressed(this.suppressed);this.suppressed?this.browserPanelController.suspendView():e&&this.browserPanelIsOpen()&&this.browserPanelController.refreshAll()}let t=e.has(`client`)||e.has(`available`),n=this.embedded&&(e.has(`embedded`)||e.has(`presented`)),r=this.synchronizeBrowserContext(),i=this.refreshOnPresentation&&this.followPreferredTab();this.embedded?!this.presented||!this.available||!this.client&&!h()?(n||t)&&this.browserPanelController.suspendView():this.refreshOnPresentation&&!i&&(r||n||t)&&this.browserPanelController.refreshAll():t&&(!this.available&&this.dockLayout.open?(this.dockLayout.hideWithoutPersisting(),this.browserPanelController.resetBrowserState()):this.available&&(this.dockLayout.restoreOpenState()||r&&this.browserPanelIsOpen())&&!i&&this.browserPanelController.refreshAll()),this.browserPanelController.native.presentation.update(),this.dockLayout.syncReservation(),this.browserPanelController.paintOverlay();let a=this.renderRoot.querySelector(`.bp-viewport`);a!==this.observedViewportElement&&(this.viewportResizeObserver?.disconnect(),this.observedViewportElement=a,a&&typeof ResizeObserver==`function`&&(this.viewportResizeObserver??=new ResizeObserver(e=>{let t=e[0];t&&this.browserPanelController.handleViewportResize(t.contentRect.width,t.contentRect.height)}),this.viewportResizeObserver.observe(a)))}synchronizeBrowserContext(){let e=this.browserPanelController.synchronizeClient(),t=this.activeSessionKey!==this.sessionKey;return t&&(this.activeSessionKey=this.sessionKey,this.browserPanelController.operations.resetRoute(),this.browserPanelController.resetBrowserState()),(e||t)&&(this.consumedPreferredRevision=void 0),e||t}preferredRevision(){let e=this.preferredTab;return e&&S(e.tab)?JSON.stringify([le(e.tab),e.revision]):void 0}followPreferredTab(){let e=this.preferredRevision();if(!this.browserPanelIsOpen()||!this.available||!this.client||!this.preferredTab||!e||e===this.consumedPreferredRevision)return!1;this.consumedPreferredRevision=e;let t=S(this.preferredTab.tab);return t&&this.browserPanelController.selectTab(t.targetId,t),!0}browserPanelIsOpen(){return this.embedded?this.presented&&!this.suppressed:this.dockLayout.open}toggle(){this.available&&(this.dockLayout.open?this.closePanel():(this.dockLayout.setOpen(!0),this.browserPanelController.refreshAll()))}handleToggleRequest(e){let t=e instanceof CustomEvent&&typeof e.detail==`object`&&e.detail!==null?e.detail:null;this.synchronizeBrowserContext();let n=S(t?.browserTab);if(t?.browserTab!==void 0&&!n)return;if(this.embedded){if(!this.browserPanelIsOpen()||t?.open===!1||!this.available)return;let e=typeof t?.url==`string`?X(t.url):null;e?this.browserPanelController.openUrl(e,{newTab:!0,native:t?.native}):n?(this.consumedPreferredRevision=this.preferredRevision(),this.browserPanelController.selectTab(n.targetId,n)):t?.newTab===!0?this.browserPanelController.beginNewTab():this.followPreferredTab()||this.browserPanelController.refreshAll();return}if((t?.dock===`right`||t?.dock===`bottom`)&&this.dockLayout.setDock(t.dock,!1),t?.open===!1){this.closePanel();return}let r=typeof t?.url==`string`?X(t.url):null;if(r||t?.open===!0){if(!this.available)return;let e=this.dockLayout.open;this.dockLayout.setOpen(!0),r?this.browserPanelController.openUrl(r,{newTab:!0,native:t?.native}):n?(this.consumedPreferredRevision=this.preferredRevision(),this.browserPanelController.selectTab(n.targetId,n)):t?.newTab===!0?this.browserPanelController.beginNewTab():!e&&!this.followPreferredTab()&&this.browserPanelController.refreshAll();return}this.toggle()}closePanel(){this.browserPanelController.suspendView(),this.dockLayout.setOpen(!1)}setDock(e){this.dockLayout.setDock(e)}render(){return!this.available||!this.embedded&&!this.dockLayout.open?p:zt(this.browserPanelController,this.dockLayout.dock,this.dockLayout.height,this.dockLayout.width,e=>this.setDock(e),()=>this.closePanel(),this.dockLayout.renderResizer(`bp`,v(`browser.resize`)),this.embedded)}},t([m({attribute:!1})],$.prototype,`client`,void 0),t([m({type:Boolean})],$.prototype,`available`,void 0),t([m({type:Boolean})],$.prototype,`remoteAvailable`,void 0),t([m({type:Boolean})],$.prototype,`suppressed`,void 0),t([m({attribute:!1})],$.prototype,`resourceBasePath`,void 0),t([m({attribute:!1})],$.prototype,`authToken`,void 0),t([m({type:Boolean})],$.prototype,`embedded`,void 0),t([m({type:Boolean})],$.prototype,`presented`,void 0),t([m({type:Boolean})],$.prototype,`refreshOnPresentation`,void 0),t([m({attribute:!1})],$.prototype,`sessionKey`,void 0),t([m({attribute:!1})],$.prototype,`preferredTab`,void 0),customElements.get(`openclaw-browser-panel`)||customElements.define(`openclaw-browser-panel`,$)})))()}Jt();
//# sourceMappingURL=browser-panel-DuLmHH6o.js.map