import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,L as n,R as r,tn as i}from"./control-ui-foundation-DMb6IeIq.js";import{Cr as a,Gc as o,Gn as s,Jc as c,Jo as l,Kn as ee,Sr as te,Xt as ne,Yo as u,Ys as re,do as ie,oc as ae,on as oe,qc as se,qo as d,uo as ce,yr as le}from"./control-ui-core-DzidtL-P.js";import{$ as ue,K as f,X as p,_ as de,at as m,b as fe,q as h,st as pe}from"./lit-runtime-vxhGQLC6.js";import{Rn as me,Tn as he,h as ge,m as _e,nn as g,sn as ve,zn as ye}from"./control-ui-core-CaKBexnk.js";import{Bt as _,Ft as v,Gt as y,It as b,kt as x}from"./control-ui-core-uEI6aN5p.js";import{I as be,L as S,R as C,Sr as xe,_r as Se,dr as Ce,gr as we,lr as Te,vr as Ee,xr as De,yr as Oe}from"./control-ui-boot-shared-nBxCfWV5.js";import{a as w,r as ke}from"./gateway-runtime-DP4whqrA.js";import{Et as Ae,ao as je,co as Me,eo as T,io as E,lo as Ne,no as Pe,ro as D,to as O,wt as Fe}from"./control-ui-boot-shared-Cyt1Zyts.js";import{oi as Ie}from"./control-ui-boot-shared-CH-OC11d.js";import{r as Le,t as Re}from"./wizard-step-controls-BVdQYpIH.js";import{p as ze,u as Be}from"./control-ui-boot-chat-CDBbQQw1.js";import{n as Ve,t as He}from"./settings-workspace-IBRfeTG9.js";var k,Ue;function We(){return(We=e((()=>{xe(),k=class{oHash;iHash;blockLen;outputLen;canXOF=!1;finished=!1;destroyed=!1;constructor(e,t){if(Ee(e),we(t,void 0,`key`),this.iHash=e.create(),typeof this.iHash.update!=`function`)throw Error(`expected Hash instance`);this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let n=this.blockLen,r=new Uint8Array(n);r.set(t.length>n?e.create().update(t).digest():t);for(let e=0;e<r.length;e++)r[e]^=54;this.iHash.update(r),this.oHash=e.create();for(let e=0;e<r.length;e++)r[e]^=106;this.oHash.update(r),De(r)}update(e){return Se(this),this.iHash.update(e),this}digestInto(e){Se(this),Oe(e,this),this.finished=!0;let t=e.subarray(0,this.outputLen);this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||=Object.create(Object.getPrototypeOf(this),{});let{oHash:t,iHash:n,finished:r,destroyed:i,blockLen:a,outputLen:o,canXOF:s}=this;return e=e,e.finished=r,e.destroyed=i,e.blockLen=a,e.outputLen=o,e.canXOF=s,e.oHash=t._cloneInto(e.oHash),e.iHash=n._cloneInto(e.iHash),e}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},Ue=(()=>{let e=((e,t,n)=>new k(e,t).update(n).digest());return e.create=(e,t)=>new k(e,t),e})()})))()}function Ge(e){return e===`provider-auth`?15e5:Qe}function A(e,t){return`${e}\u0000${t}`}function Ke(e){let{result:t}=e;if(t.ok&&t.modelRef){let n=[t.gatewayRestartRequired?e.restartWarning:null,e.refreshWarning].filter(Boolean).join(`
`);return{phase:`success`,modelRef:t.modelRef,...typeof t.latencyMs==`number`?{latencyMs:t.latencyMs}:{},...n?{warning:n}:{}}}return{phase:`failure`,targetId:e.targetId,status:t.status&&t.status!==`ok`?t.status:`unknown`,error:l(t.error,e.fallbackError)}}function qe(e){return e.ok?{phase:`ok`,modelRef:e.modelRef,...typeof e.latencyMs==`number`?{latencyMs:e.latencyMs}:{}}:{phase:`failed`,status:e.status,error:l(e.error)}}function Je(e,t,n){return!t.done&&t.step?{phase:`step`,authChoice:e,step:t.step,busy:!1,validationError:t.error?.trim()?l(t.error):null}:t.done&&t.status===`done`?{phase:`done`,authChoice:e,...t.preparedModelRef?{preparedModelRef:t.preparedModelRef}:{}}:t.status===`cancelled`?{phase:`cancelled`,message:l(t.error,n)}:{phase:`error`,message:l(t.error,n)}}function Ye(e){return e.type===`multiselect`?Array.isArray(e.initialValue)?[...e.initialValue]:[]:e.initialValue}var Xe,Ze,Qe,j;function M(){return(M=e((()=>{u(),Xe=4e4,Ze=15e4,Qe=48e4,j=3e4})))()}function $e(e){let t=t=>{t.key===z&&t.newValue===null&&t.oldValue&&e(t.oldValue)};return H.add(e),window.addEventListener(`storage`,t),()=>{H.delete(e),window.removeEventListener(`storage`,t)}}function N(e,t,n){try{let r=JSON.parse(n.getItem(B)??`null`);if(r?.version!==1||typeof r.privateKey!=`string`||!r.privateKey)return null;let i=e.gateway.connection,a=i.token||i.password||i.bootstrapToken,o=a?``:e.gateway.snapshot.hello?.auth?.deviceToken;if(!a&&!o)return null;let s=[t.gatewayUrl,t.agentId,t.modelRef??``,t.kind,String(t.deadlineMs),i.token,i.password,i.bootstrapToken,i.bootstrapProfile??``,o??``],c=new TextEncoder,l=s.map(e=>`${c.encode(e).length}:${e}`).join(`|`);return Array.from(Ue(Ce,c.encode(r.privateKey),c.encode(l))).map(e=>e.toString(16).padStart(2,`0`)).join(``)}catch{return null}}function P(e,t){try{let n=e.getItem(z);if((t===void 0||t&&n===JSON.stringify(t))&&(e.removeItem(z),n))for(let e of H)e(n)}catch{}}function F(e,t){let n=c();if(!n||e.gateway.snapshot.phase!==`connected`)return null;try{let r=n.getItem(z);if(!r||t&&r!==JSON.stringify(t))return null;let a=JSON.parse(r);if(a?.version!==1||typeof a.gatewayUrl!=`string`||typeof a.agentId!=`string`||a.modelRef!==null&&typeof a.modelRef!=`string`||typeof a.kind!=`string`||typeof a.deadlineMs!=`number`||!Number.isFinite(a.deadlineMs)||a.deadlineMs<=Date.now()||typeof a.owner!=`string`||a.gatewayUrl!==i(e.gateway.connection.gatewayUrl)||a.agentId!==(e.agentSelection.state.selectedId??``))return P(n),null;let{owner:o,...s}=a;return N(e,s,n)===o?a:(P(n),null)}catch{return P(n),null}}function I(e){return Date.now()+Ge(e)+V}function L(e,t){let n=c();if(!n||e.gateway.snapshot.phase!==`connected`)return null;try{let r={version:1,gatewayUrl:i(e.gateway.connection.gatewayUrl),agentId:e.agentSelection.state.selectedId??``,modelRef:t.modelRef??null,kind:t.kind,deadlineMs:t.deadlineMs??I(t.kind)},a=N(e,r,n);if(!a)return null;let o={...r,owner:a};return n.setItem(z,JSON.stringify(o)),o}catch{return null}}function R(e){let t=c();t&&P(t,e)}function et(e,t,n,r,i,a){let{context:o}=e,s=o.gateway.snapshot;!i()&&s.phase===`connected`&&s.client===t.client&&s.hello===t.hello&&o.gateway.connectionRevision===n&&(o.agentSelection.state.selectedId?.trim()||null)===r&&e.isStillDefaultLanding()&&F(o)!==null&&e.redirect(),a()}var z,B,V,H;function U(){return(U=e((()=>{We(),Te(),M(),z=`openclaw.modelSetup.pendingActivation.v1`,B=`openclaw-device-identity-v1`,V=5e3,H=new Set})))()}function W(e){return d(e,y(`modelSetup.errors.requestFailed`))}async function tt(e,t){try{return{client:e,value:await t()}}catch(t){return{client:e,error:t}}}function G(){return(G=e((()=>{_(),u()})))()}function nt(e,t,n=null){let r=e.gateway.snapshot;return{client:r.client,hello:r.hello,agentId:e.agentSelection.state.selectedId,connected:r.phase===`connected`,firstRun:t,connectionRevision:e.gateway.connectionRevision,recoveryScope:r.phase===`connected`?r.hello?.auth?.recoveryScope??null:n}}var rt;function it(){return(it=e((()=>{_(),oe(),U(),G(),M(),rt=class{constructor(e){this.host=e,this.generation=0,this.started=!1,this.readyConnection=null,this.pending=null}subscribe(e){return $e(t=>{let n=this.pending;n?.receipt&&JSON.stringify(n.receipt)===t&&(this.pending=null,n.outcome===`verified`&&this.host.setActivationState({phase:`idle`}),this.host.setVerifyState({phase:`idle`}),e())})}setReadyConnection(e){this.readyConnection=e}routeChanged(){let e=this.pending?.receipt??null;this.reset(),this.readyConnection=null,this.pending=null,this.host.routeData()?.firstRun===!1&&R(e)}connectionChanged(e){if(this.reset(),this.readyConnection=null,this.pending&&(!this.pending.owner.recoveryScope||e.agentId!==this.pending.owner.connection.agentId||this.host.context().gateway.connectionRevision!==this.pending.owner.connectionRevision||this.host.context().gateway.snapshot.phase===`connected`&&(e.hello?.auth?.recoveryScope??null)!==this.pending.owner.recoveryScope)){let e=this.pending.receipt;this.pending=null,R(e)}}reconnectActivation(e){let t=this.pending;if(!t)return;let n=this.host.context();!t.owner.recoveryScope||t.owner.connectionRevision!==n.gateway.connectionRevision||t.owner.recoveryScope!==(e.hello?.auth?.recoveryScope??null)||t.owner.connection.agentId!==e.agentId||t.owner.firstRun!==this.host.routeData()?.firstRun||(t.owner=this.owner(t.owner.firstRun))}retryDetection(){if(this.host.actionsDisabled())return!1;if(this.pending&&Date.now()<this.pending.deadlineMs)return this.host.setRefreshWarning(y(`modelSetup.recovery.wait`,{time:ne(this.pending.deadlineMs)})),!0;if(this.host.routeData()?.firstRun){let e=this.host.pageState(),t=this.pending&&e.phase===`ready`&&e.result.configuredModel;this.pending=null,R(),this.host.setRefreshWarning(null),this.reset(),this.started=!!t}return!0}dispose(){this.reset(),this.readyConnection=null,this.pending=null}visiblePageState(e){let t=this.host.pageState();return this.host.routeData()?.firstRun&&t.phase===`ready`&&t.result.setupComplete&&t.result.configuredModel&&!e?{...t,result:{...t.result,setupComplete:!1}}:t}start(){let e=this.host.routeData(),t=this.host.context(),n=t.gateway.snapshot,r=this.host.pageState(),i=this.readyConnection;if(!e?.firstRun||this.started||r.phase!==`ready`||!i||i.client!==n.client||i.hello!==n.hello||i.agentId!==t.agentSelection.state.selectedId||this.host.actionsDisabled()||!this.host.canUseSetup(n.client))return;let a=F(t);this.pending?.receipt&&a?.owner!==this.pending.receipt.owner&&(this.pending=null);let o=a??this.pending;if(o&&(this.pending={owner:this.owner(e.firstRun),modelRef:o.modelRef,kind:o.kind,deadlineMs:o.deadlineMs,receipt:a,outcome:`pending`}),!this.pending){this.started=!0;return}let s=r.result.setupComplete&&r.result.configuredModel;if(this.pending&&(!s||!this.pending.modelRef)){this.started=!0,this.showUnresolved();return}if(s&&!this.host.canVerify(n.client)){this.started=!0,this.host.setVerifyState({phase:`failed`,status:`unknown`,error:`${y(`modelSetup.access.gatewayTooOld`)}. ${y(`updates.confirm.action`)}. ${y(`desktop.reconnect`)}.`});return}this.started=!0,this.run(this.owner(e.firstRun),r.result)}beginActivation(e){let t=this.host.routeData();if(!t?.firstRun)return null;let n=this.owner(t.firstRun),r=L(this.host.context(),e);return this.pending={owner:n,kind:e.kind,modelRef:e.modelRef??null,receipt:r,outcome:`pending`,deadlineMs:r?.deadlineMs??I(e.kind)},this.started=!0,this.pending}recordActivation(e,t){if(!e)return;if(t.status===`cancelled`||t.status===`not-admitted`||t.status===`error`&&t.activationRejection?.disposition===`rejected-before-promotion`){this.ownsActivation(e)&&(e.outcome=`rejected`),R(e.receipt),this.pending===e&&(this.pending=null);return}let n=t.status===`done`?t.modelActivation?.modelRef:void 0;!n||this.pending!==e||!this.ownsActivation(e)||(e.modelRef=n,e.outcome=`verified`,e.receipt=L(this.host.context(),e))}finishActivation(e,t,n){!this.pending||!this.ownsActivation()||!e.ok||!e.modelRef||(e.gatewayRestartRequired?(this.host.setActivationState({phase:`testing`,targetId:t}),this.host.setRefreshWarning(n??y(`updates.dialog.restarting`))):n||this.completeNavigation())}get unresolved(){return this.pending!==null}async useCurrentModel(){let e=this.host.pageState(),t=this.pending;if(!t||e.phase!==`ready`||!e.result.configuredModel||this.host.actionsDisabled())return;let n=e.result.configuredModel,r=this.owner(t.owner.firstRun),i=await this.verify();!this.owns(r)||this.pending!==t||!i||`error`in i||(i.value.ok&&i.value.modelRef===n?this.completeNavigation():i.value.ok&&this.showUnresolved())}owner(e){let t=nt(this.host.context(),e);return{generation:this.generation,firstRun:e,connectionRevision:t.connectionRevision,recoveryScope:t.recoveryScope,connection:t}}clearPending(){this.pending=null,R()}ownsActivation(e=this.pending){return e?this.owns(e.owner)?e.outcome===`rejected`?this.pending===null:this.pending===e&&(!e.receipt||F(this.host.context(),e.receipt)!==null)&&Date.now()<e.deadlineMs:!1:!this.host.routeData()?.firstRun}async verify(){let e=this.host.routeData();if(!e)return;let t=this.owner(e.firstRun),n=this.pending,r=await this.host.verify();if(!(!this.owns(t)||!r)){if(this.pending!==n||n&&!this.ownsActivation(n)){this.host.setVerifyState({phase:`idle`});return}return this.host.setVerifyState(`error`in r?{phase:`failed`,status:`unknown`,error:W(r.error)}:qe(r.value)),r}}continueSetup(){this.pending?this.pending.outcome===`verified`&&this.ownsActivation()&&this.completeNavigation():this.host.context().navigate(`chat`)}completeNavigation(){this.clearPending(),this.host.setRefreshWarning(null),this.host.context().navigate(`custodian`,{search:`?onboarding=1`})}showUnresolved(){this.host.setRefreshWarning(null),this.host.setVerifyState({phase:`failed`,status:`unknown`,error:`${y(`modelSetup.errors.activationFailed`)} ${this.pending?.modelRef??``}`.trim()})}reset(){this.generation+=1,this.started=!1}owns(e){let t=this.host.context(),n=t.gateway.snapshot;return e.generation===this.generation&&e.connectionRevision===t.gateway.connectionRevision&&e.recoveryScope===(n.hello?.auth?.recoveryScope??null)&&e.firstRun===this.host.routeData()?.firstRun&&n.phase===`connected`&&n.client===e.connection.client&&n.hello===e.connection.hello&&t.agentSelection.state.selectedId===e.connection.agentId}async run(e,t){if(t.setupComplete&&t.configuredModel){if(this.pending&&t.configuredModel!==this.pending.modelRef){this.showUnresolved();return}let n=await this.verify();if(!this.owns(e)||!n||`error`in n)return;n.value.ok&&this.finishVerified(n.value.modelRef)}}finishVerified(e){this.pending?this.pending.modelRef===e?this.completeNavigation():this.showUnresolved():this.host.context().navigate(`chat`)}}})))()}function at(e){return e.brandId&&T(e.brandId)?e.brandId:null}function K(e,t,n=``){let r=at(t);if(r)return E(r,{className:`model-setup__icon ${n}`.trim()});let i=t.icon?e.iconUrls[t.icon]:void 0;return!t.icon||!i?je(t.label,{className:`model-setup__icon ${n}`.trim()}):p`<img
    class=${`model-setup__icon ${n}`.trim()}
    src=${i}
    alt=${t.label}
    width="24"
    height="24"
    @error=${()=>e.onIconError(t.icon)}
  />`}var ot;function q(){return(q=e((()=>{f(),O(),ze(),ot=class{constructor(e,t,n){this.getContext=e,this.getPageState=t,this.onChange=n,this.urls={},this.misses=new Set,this.requests=new Map}reconcile(){let e=this.currentIconUrls(),t={...this.urls},n=!1;for(let[r,i]of Object.entries(t))e.has(r)||(URL.revokeObjectURL(i),delete t[r],n=!0);n&&this.publish(t);for(let[t,n]of this.requests)e.has(t)||(clearTimeout(n.timeout),n.controller.abort(),this.requests.delete(t));for(let t of this.misses)e.has(t)||this.misses.delete(t);for(let t of e)!this.urls[t]&&!this.misses.has(t)&&!this.requests.has(t)&&this.fetch(t)}invalidate(e){let t=this.requests.get(e);t&&(clearTimeout(t.timeout),t.controller.abort(),this.requests.delete(e));let n=this.urls[e];n&&URL.revokeObjectURL(n);let r={...this.urls};delete r[e],this.publish(r),this.misses.add(e)}reset(){for(let e of this.requests.values())clearTimeout(e.timeout),e.controller.abort();for(let e of Object.values(this.urls))URL.revokeObjectURL(e);this.requests.clear(),this.misses.clear(),this.publish({})}currentIconUrls(){let e=this.getPageState();if(e.phase!==`ready`)return new Set;let t=e.result;return new Set([...t.candidates,...t.unavailableCandidates??[],...t.manualProviders,...t.authOptions??[],...t.prepareOptions??[],...t.recommendedInstalls??[]].flatMap(e=>e.icon&&!at(e)?[e.icon]:[]))}fetch(e){let t=new AbortController,n=setTimeout(()=>t.abort(new DOMException(`catalog icon fetch timed out`,`TimeoutError`)),1e4),r={controller:t,timeout:n};this.requests.set(e,r);let i=this.getContext();Be({iconUrl:e,resourceBasePath:i.resourceBasePath,gatewayUrl:i.gateway.connection.gatewayUrl,auth:{hello:i.gateway.snapshot.hello,settings:{token:i.gateway.connection.token},password:i.gateway.connection.password},signal:t.signal}).then(t=>{if(this.requests.get(e)!==r||this.getContext().gateway.snapshot.phase!==`connected`||!this.currentIconUrls().has(e)){t&&URL.revokeObjectURL(t);return}t?this.publish({...this.urls,[e]:t}):this.misses.add(e)}).catch(()=>{this.requests.get(e)===r&&this.misses.add(e)}).finally(()=>{clearTimeout(n),this.requests.get(e)===r&&this.requests.delete(e)})}publish(e){this.urls=e,this.onChange(e)}}})))()}function J(e){return`provider-auto:${encodeURIComponent(e)}`}function st(e){let t=[{id:`ollama`,brandId:`ollama`,label:y(`modelSetup.prepare.ollamaLabel`),hint:y(`modelSetup.prepare.ollamaHint`)},{id:`llama-cpp`,brandId:`llama-cpp`,label:y(`modelSetup.prepare.llamaCppLabel`)}];return(e.prepareOptions??t).filter(t=>!e.candidates.some(e=>e.credentials!==!1&&(e.kind===J(t.id)||e.modelRef.startsWith(`${t.brandId??t.id}/`))))}function ct(e,t){return e.candidates.find(e=>e.kind===J(t)&&e.credentials!==!1)}function Y(){return(Y=e((()=>{_()})))()}function lt(e,t,n){return e.request(`openclaw.setup.detect`,t?{agentId:t}:{},{timeoutMs:Xe,...n?{signal:n}:{}})}function ut(e,t,n){return e.request(`openclaw.setup.verify`,t?{agentId:t}:{},{timeoutMs:Ze,...n?{signal:n}:{}})}function dt(){return(dt=e((()=>{M()})))()}function ft(e){let t={auth:y(`modelSetup.failure.auth`),rate_limit:y(`modelSetup.failure.rateLimit`),billing:y(`modelSetup.failure.billing`),timeout:y(`modelSetup.failure.timeout`),format:y(`modelSetup.failure.format`),unavailable:y(`modelSetup.failure.unavailable`),unknown:y(`modelSetup.failure.unknown`)};return t[e]??t.unknown}function pt(e){let t={auth:y(`modelSetup.failureGuidance.auth`),rate_limit:y(`modelSetup.failureGuidance.rateLimit`),billing:y(`modelSetup.failureGuidance.billing`),timeout:y(`modelSetup.failureGuidance.timeout`),format:y(`modelSetup.failureGuidance.format`),unavailable:h,unknown:y(`modelSetup.failureGuidance.unknown`)};return t[e]??t.unknown}function mt(e,t){return p`
    <div class="model-setup__failure" role="alert">
      <span class="model-setup__failure-icon" aria-hidden="true">${v.alertTriangle}</span>
      <span><strong>${ft(e)}.</strong> ${t} ${pt(e)}</span>
    </div>
  `}function ht(e){let t=e.indexOf(`/`);return t<0?e:e.slice(t+1)}function gt(e,t){return e.candidates.find(e=>e.modelRef===t)}function _t(e,t){let n=ht(t),r=e?.detail.trim();return!r||e?.kind===`existing-model`?n:r.toLowerCase().includes(n.toLowerCase())?r:`${n} · ${r}`}function vt(e){switch(e.phase){case`checking`:return y(`modelSetup.verify.checkingButton`);case`failed`:return y(`modelSetup.verify.retry`);case`ok`:return y(`modelSetup.verify.checkAgain`);default:return y(`modelSetup.verify.button`)}}function yt(e){let t=e.result.configuredModel,n=e.verify.phase===`ok`?e.verify.modelRef:t,r=D(n),i=n===t?gt(e.result,t):void 0,a=r?Pe(r):n,o=_t(i,n);return p`
    <section class="settings-section model-setup__current" data-verify-phase=${e.verify.phase}>
      <div class="settings-section__header">
        <h2>${y(`modelSetup.verify.title`)}</h2>
      </div>
      <div class="model-setup__row">
        <div class="model-setup__provider-copy">
          ${r?E(r,{className:`model-setup__icon`}):h}
          <div class="model-setup__current-copy">
            <strong>${a}</strong>
            <div class="muted">${o}</div>
            ${e.verify.phase===`checking`?p`<div class="model-setup__testing" role="status">
                    ${y(`modelSetup.verify.checking`,{modelRef:t})}
                  </div>`:e.verify.phase===`ok`?p`<div class="model-setup__verified" role="status">
                      ${e.verify.latencyMs===void 0?y(`modelSetup.verify.ready`):y(`modelSetup.verify.readyIn`,{latencyMs:String(e.verify.latencyMs)})}
                    </div>`:e.verify.phase===`failed`?mt(e.verify.status,e.verify.error):h}
          </div>
        </div>
        <div class="model-setup__row-actions">
          ${e.canVerify?p`<button
                  type="button"
                  class="btn"
                  ?disabled=${e.actionsDisabled}
                  @click=${e.onVerify}
                >
                  ${vt(e.verify)}
                </button>`:h}
          ${e.onContinue?p`<button type="button" class="btn primary" @click=${e.onContinue}>
                  ${v.messageSquare} ${y(`modelSetup.success.continueSetup`)}
                </button>`:h}
        </div>
      </div>
    </section>
  `}function bt(){return(bt=e((()=>{f(),b(),O(),_()})))()}function xt(e){let t=e.currentTarget,n=Array.from(t.querySelectorAll(`wa-dropdown-item[data-manual-provider]:not([disabled])`)),r=n.find(e=>e.hasAttribute(`data-selected`))??n[0];if(r){for(let e of n)e.active=e===r;r.focus({preventScroll:!0}),r.scrollIntoView?.({block:`nearest`})}}function St(e){let t=e.currentTarget;if(t.open){if(e.key===`Tab`){e.preventDefault(),e.stopPropagation();let n=e.shiftKey?t.querySelector(`[slot="trigger"]`):t.closest(`.model-setup__manual`)?.querySelector(`input[type="password"]`);t.addEventListener(`wa-after-hide`,()=>n?.focus({preventScroll:!0}),{once:!0}),t.open=!1;return}e.key===`Escape`&&(e.preventDefault(),t.addEventListener(`wa-after-hide`,()=>t.querySelector(`[slot="trigger"]`)?.focus({preventScroll:!0}),{once:!0}))}}function Ct(e,t,n){let r=e.detail.item,i=e.currentTarget,a=r.value??r.getAttribute(`value`);if(a){if(a!==t){i.addEventListener(`wa-after-hide`,()=>i.querySelector(`[slot="trigger"]`)?.focus({preventScroll:!0}),{once:!0}),n(a);return}e.preventDefault(),r.checked=!0,i.querySelector(`[slot="trigger"]`)?.focus({preventScroll:!0}),i.open=!1}}function X(e){return e.groupLabel?.trim()||e.label}function wt(e){let t=e.label.trim();return t===X(e)?void 0:t}function Tt(e,t,n){let r=n?wt(n):void 0,i=n?[X(n),r].filter(Boolean).join(`, `):y(`modelSetup.manual.selectProvider`);return p`
    <wa-dropdown
      class="model-setup-provider-select"
      placement="bottom-start"
      aria-label=${y(`modelSetup.manual.provider`)}
      @wa-select=${t=>Ct(t,e.manualProviderId,e.onManualProviderChange)}
      @wa-after-show=${xt}
      @keydown=${St}
    >
      <button
        slot="trigger"
        type="button"
        class="model-setup-provider-select__trigger"
        aria-label=${`${y(`modelSetup.manual.provider`)}: ${i}`}
        ?disabled=${e.actionsDisabled||t.manualProviders.length===0}
      >
        ${n?K(e,n,`model-setup__icon--picker`):p`<span class="model-setup-provider-select__placeholder-icon" aria-hidden="true">
                ${v.key}
              </span>`}
        <span class="model-setup-provider-select__copy">
          <strong>
            ${n?X(n):y(`modelSetup.manual.selectProvider`)}
          </strong>
          ${n?r?p`<span>${r}</span>`:h:p`<span>${y(`modelSetup.manual.selectProviderHint`)}</span>`}
        </span>
        <span class="model-setup-provider-select__chevron" aria-hidden="true">
          ${v.chevronDown}
        </span>
      </button>
      ${t.manualProviders.toSorted((e,t)=>X(e).localeCompare(X(t))).map(t=>{let n=t.id===e.manualProviderId,r=wt(t),i=[X(t),r,t.hint].filter(Boolean).join(`, `);return p`
            <wa-dropdown-item
              class="model-setup-provider-select__option"
              data-manual-provider=${t.id}
              ?data-selected=${n}
              aria-label=${i}
              .value=${t.id}
              type="checkbox"
              .checked=${n}
              ?disabled=${e.actionsDisabled}
              ${fe(e=>Ne(e,n))}
            >
              <span slot="icon">
                ${K(e,t,`model-setup__icon--picker`)}
              </span>
              <span class="model-setup-provider-select__copy">
                <strong>${X(t)}</strong>
                ${r?p`<span>${r}</span>`:h}
                ${t.hint?p`<small>${t.hint}</small>`:h}
              </span>
            </wa-dropdown-item>
          `})}
    </wa-dropdown>
  `}function Z(){return(Z=e((()=>{f(),de(),b(),Me(),_(),q()})))()}function Et(e,t,n,r){let i=D(e.modelRef),a=i&&T(i)?i:null,o=e.warning??y(`modelSetup.success.body`,{modelRef:e.modelRef}),s=r?y(`modelSetup.success.continueSetup`):e.warning?y(`tabs.chat`):y(`modelSetup.success.openChat`);return p`
    <openclaw-modal-dialog
      label=${y(`modelSetup.success.title`)}
      description=${o}
      @modal-cancel=${n}
    >
      <section class="model-setup-success" role="status">
        <div
          class=${`model-setup-success__icon${a?` model-setup-success__icon--provider`:``}`}
          aria-hidden="true"
        >
          ${a?p`
                  ${E(a,{className:`model-setup-success__provider-icon`})}
                  <span class="model-setup-success__status-badge">${v.check}</span>
                `:v.shieldCheck}
        </div>
        <div class="model-setup-success__copy">
          <h2>${y(`modelSetup.success.title`)}</h2>
          ${e.warning?h:p`<p>${o}</p>`}
        </div>
        ${e.warning?p`<div class="model-setup-success__warning">${e.warning}</div>`:h}
        <div class="model-setup-success__summary">
          <span>${y(`modelSetup.success.activeModel`)}</span>
          <strong>${e.modelRef}</strong>
          ${e.latencyMs===void 0?h:p`<span>
                  ${y(`modelSetup.success.latency`,{latencyMs:String(e.latencyMs)})}
                </span>`}
        </div>
        <footer class="model-setup-success__actions">
          <button type="button" class="btn" @click=${n}>
            ${y(`modelSetup.success.stayHere`)}
          </button>
          <button type="button" class="btn primary" autofocus @click=${t}>
            ${v.messageSquare} ${s}
          </button>
        </footer>
      </section>
    </openclaw-modal-dialog>
  `}function Dt(){return(Dt=e((()=>{f(),b(),x(),O(),_()})))()}function Ot(e){if(e.state.phase===`idle`)return h;let t=e.state.phase===`starting`||e.state.phase===`step`||e.state.phase===`done`;return p`
    <openclaw-modal-dialog
      label=${y(e.mode===`prepare`?`modelSetup.wizard.prepareDialogLabel`:e.mode===`activate`?`modelSetup.heading`:`modelSetup.wizard.dialogLabel`)}
      @modal-cancel=${t?e.onCancel:e.onClose}
    >
      <div class="model-setup-wizard">
        <div class="model-setup-wizard__header">
          <h2>
            ${e.state.phase===`step`&&e.state.step.title?e.state.step.title:y(e.mode===`prepare`?`modelSetup.wizard.prepareTitle`:e.mode===`activate`?`modelSetup.heading`:`modelSetup.wizard.title`)}
          </h2>
        </div>
        <div class="model-setup-wizard__body">
          ${[e.refreshWarning,e.cancellationNotice].map(e=>e?p`<div class="callout warning" role="alert">${e}</div>`:h)}
          ${e.state.phase===`starting`?p`<div role="status">
                  ${y(e.mode===`prepare`?`modelSetup.wizard.prepareStarting`:e.mode===`activate`?`modelSetup.wizard.checking`:`modelSetup.wizard.starting`)}
                </div>`:e.state.phase===`done`?p`<div role="status">${y(`modelSetup.wizard.checking`)}</div>`:e.state.phase===`error`||e.state.phase===`cancelled`?p`<div class="callout danger" role="alert">${e.state.message}</div>`:p`
                      ${e.state.validationError?p`<div class="callout danger" role="alert">
                              ${e.state.validationError}
                            </div>`:h}
                      ${Le({step:e.state.step,value:e.value,busy:e.state.busy,inputId:kt,confirmAffirmativeLabel:e.mode===`prepare`&&e.state.step.type===`confirm`?y(`modelSetup.wizard.continue`):void 0,leadingAction:p`<button
                          type="button"
                          class="btn"
                          @click=${e.onCancel}
                        >
                          ${y(`common.cancel`)}
                        </button>`,onValueChange:e.onValueChange,onAnswer:e.onAnswer})}
                      ${e.state.busy?p`<div role="status">${y(`modelSetup.wizard.working`)}</div>`:h}
                    `}
        </div>
        ${e.state.phase===`step`?h:p`
                <div class="model-setup-wizard__footer">
                  <button
                    type="button"
                    class="btn"
                    @click=${t?e.onCancel:e.onClose}
                  >
                    ${y(t?`common.cancel`:`common.close`)}
                  </button>
                </div>
              `}
      </div>
    </openclaw-modal-dialog>
  `}var kt;function At(){return(At=e((()=>{f(),Re(),_(),x(),kt=`model-setup-wizard-text-input`})))()}function jt(e){return e.recommended?y(`modelSetup.candidates.recommended`):e.credentials===!0?y(`modelSetup.candidates.credentialsReady`):e.credentials===!1?y(`modelSetup.candidates.signInNeeded`):y(`modelSetup.candidates.detected`)}function Mt(e,t){let n=t.configuredModel?t.candidates.filter(e=>e.kind!==`existing-model`&&e.modelRef!==t.configuredModel):t.candidates;return n.length===0?h:p`
    <section class="settings-section">
      <div class="settings-section__header">
        <h2>${y(`modelSetup.candidates.title`)}</h2>
      </div>
      <div class="model-setup__rows">
        ${n.toSorted((e,t)=>e.label.localeCompare(t.label)).map(t=>{let n=e.activation.phase===`testing`&&e.activation.targetId===A(t.kind,t.modelRef),r=e.activation.phase===`failure`&&e.activation.targetId===A(t.kind,t.modelRef)?e.activation:null;return p`
              <div class="model-setup__row" data-candidate-kind=${t.kind}>
                <div class="model-setup__row-main">
                  <div class="model-setup__row-title">
                    ${K(e,t)}
                    <strong>${t.label}</strong>
                    <span class="model-setup__chip">${jt(t)}</span>
                  </div>
                  <div class="muted">
                    ${t.modelRef} · ${l(t.detail)}
                  </div>
                </div>
                <div class="model-setup__row-actions">
                  <button
                    type="button"
                    class=${`btn ${r?``:`primary`}`}
                    ?disabled=${e.actionsDisabled}
                    @click=${()=>e.onActivateCandidate(t)}
                  >
                    <span>
                      ${y(n?`modelSetup.candidates.testingButton`:r?`modelSetup.candidates.retry`:`modelSetup.candidates.testAndUse`)}
                    </span>
                  </button>
                </div>
              </div>
            `})}
      </div>
    </section>
  `}function Nt(e,t){let n=t.recommendedInstalls??[];return t.candidates.length>0||(t.authOptions?.length??0)>0||n.length===0?h:p`
    <section class="settings-section model-setup__empty">
      <div class="settings-section__header">
        <h2>${y(`modelSetup.empty.title`)}</h2>
      </div>
      <p class="muted">${y(`modelSetup.empty.intro`)}</p>
      <div class="model-setup__recommendations">
        ${n.map(t=>p`
            <div class="model-setup__recommendation" data-recommended-install=${t.id}>
              ${K(e,t,`model-setup__icon--recommendation`)}
              <div class="model-setup__row-main">
                <strong>${t.label}</strong>
                <div class="muted">${t.hint}</div>
                <a href=${t.website} target="_blank" rel="noopener">${t.website}</a>
              </div>
            </div>
          `)}
      </div>
    </section>
  `}function Pt(e,t){return t.unavailableCandidates?.length?p`
    <section class="settings-section">
      <div class="settings-section__header">
        <h2>${y(`modelSetup.unavailable.title`)}</h2>
      </div>
      <div class="model-setup__rows">
        ${t.unavailableCandidates.map(n=>{let r=(t.authOptions??[]).find(e=>e.id===n.authOptionId),i=t.manualProviders.find(e=>e.id===n.manualProviderId);return p`
            <div
              class="model-setup__row model-setup__row--info"
              data-unavailable-candidate=${n.id}
            >
              <div class="model-setup__provider-copy">
                ${K(e,n)}
                <div>
                  <div>
                    <strong>${n.label}</strong> — ${l(n.detail)}
                  </div>
                  <div class="muted">${l(n.reason)}</div>
                </div>
              </div>
              <div class="model-setup__row-actions">
                ${r?p`<button
                        type="button"
                        class="btn primary"
                        ?disabled=${e.actionsDisabled}
                        @click=${()=>e.onStartAuth(r)}
                      >
                        ${y(`modelSetup.unavailable.signIn`,{provider:r.groupLabel??r.label})}
                      </button>`:h}
                ${i?p`<button
                        type="button"
                        class="btn"
                        ?disabled=${e.actionsDisabled}
                        @click=${()=>e.onUseManualProvider(i.id)}
                      >
                        ${y(`modelSetup.unavailable.useApiKey`)}
                      </button>`:h}
                <button
                  type="button"
                  class="btn"
                  ?disabled=${e.actionsDisabled}
                  @click=${e.onDetect}
                >
                  ${y(`modelSetup.checkAgain`)}
                </button>
              </div>
            </div>
          `})}
      </div>
    </section>
  `:h}function Ft(e,t){return p`
    <div class="model-setup__row" data-auth-choice=${t.id}>
      <div class="model-setup__provider-copy">
        ${K(e,t)}
        <div>
          <strong>${t.label}</strong>
          ${t.groupLabel?p`<div class="muted">${t.groupLabel}</div>`:h}
          ${t.hint?p`<div class="muted">${t.hint}</div>`:h}
        </div>
      </div>
      <button
        type="button"
        class="btn"
        ?disabled=${e.actionsDisabled}
        @click=${()=>e.onStartAuth(t)}
      >
        ${t.kind===`device-code`?y(`modelSetup.signIn.pair`):t.kind===`install`?y(`modelSetup.signIn.install`):t.kind===`custom`?y(`modelSetup.signIn.custom`):y(`modelSetup.signIn.signIn`)}
      </button>
    </div>
  `}function It(e,t){let n=(t.authOptions??[]).toSorted((e,t)=>e.label.localeCompare(t.label));if(n.length===0)return h;let r=n.filter(e=>e.featured||e.kind===`install`||e.kind===`custom`),i=n.filter(e=>!r.includes(e));return p`
    <section class="settings-section">
      <div class="settings-section__header">
        <h2>${y(`modelSetup.signIn.title`)}</h2>
      </div>
      <div class="model-setup__rows">${r.map(t=>Ft(e,t))}</div>
      ${i.length?p`<details
              class="model-setup__more"
              .open=${e.moreSignInOpen}
              @toggle=${t=>e.onMoreSignInToggle(t.currentTarget.open)}
            >
              <summary>${y(`modelSetup.signIn.more`)}</summary>
              <div class="model-setup__rows">
                ${i.map(t=>Ft(e,t))}
              </div>
            </details>`:h}
    </section>
  `}function Lt(e,t){if(!e.canPrepare)return h;let n=st(t);return n.length===0?h:p`
    <section class="settings-section">
      <div class="settings-section__header">
        <h2>${y(`modelSetup.prepare.title`)}</h2>
      </div>
      <p class="muted">${y(`modelSetup.prepare.intro`)}</p>
      <div class="model-setup__rows">
        ${n.map(t=>p`
            <div class="model-setup__row" data-prepare-choice=${t.id}>
              <div class="model-setup__provider-copy">
                ${K(e,t)}
                <div>
                  <strong>${t.label}</strong>
                  ${t.hint?p`<div class="muted">${t.hint}</div>`:h}
                </div>
              </div>
              <button
                type="button"
                class="btn"
                ?disabled=${e.actionsDisabled}
                @click=${()=>e.onStartPrepare(t)}
              >
                ${t.actionLabel??y(`modelSetup.prepare.ollamaButton`)}
              </button>
            </div>
          `)}
      </div>
    </section>
  `}function Rt(e,t){let n=t.manualProviders.find(t=>t.id===e.manualProviderId),r=`manual:${e.manualProviderId}`,i=e.activation.phase===`testing`&&e.activation.targetId===r;return p`
    <section class="settings-section">
      <div class="settings-section__header">
        <h2>${y(`modelSetup.manual.title`)}</h2>
      </div>
      <div class="model-setup__manual">
        <div class="field">
          <span>${y(`modelSetup.manual.provider`)}</span>
          ${Tt(e,t,n)}
        </div>
        <label class="field">
          <span>
            ${n?y(`modelSetup.manual.accessValueFor`,{provider:X(n)}):y(`modelSetup.manual.accessValue`)}
          </span>
          <input
            class="input"
            type="password"
            autocomplete="off"
            .value=${e.manualApiKey}
            ?disabled=${e.actionsDisabled}
            placeholder=${y(`modelSetup.manual.accessValuePlaceholder`)}
            @input=${t=>e.onManualApiKeyChange(t.currentTarget.value)}
          />
        </label>
        <div class="model-setup__manual-help">
          ${v.shieldCheck}
          <span>${y(`modelSetup.manual.verifyHint`)}</span>
        </div>
        ${e.manualError?p`<div class="callout danger" role="alert">${e.manualError}</div>`:h}
        <button
          type="button"
          class="btn primary"
          ?disabled=${e.actionsDisabled||!e.manualProviderId}
          @click=${e.onManualConnect}
        >
          ${y(i?`modelSetup.candidates.testingButton`:`modelSetup.manual.connectAndVerify`)}
        </button>
      </div>
    </section>
  `}function zt(e){e.querySelector(`.model-setup > .model-setup__testing, .model-setup > .model-setup__failure`)?.scrollIntoView?.({block:`nearest`,behavior:`auto`})}function Bt(e){return e.phase===`testing`?p`<div class="model-setup__testing" role="status">${y(`modelSetup.testing`)}</div>`:e.phase===`failure`?mt(e.status,e.error):h}function Vt(e,t){return t.nativeSessionCatalogPreferenceRequired!==!0||!t.nativeSessionCatalogs?.length?h:p`
    <section class="settings-section model-setup__native-discovery">
      <div class="settings-section__header"><h2>${y(`modelSetup.nativeDiscovery.title`)}</h2></div>
      <p class="muted">${y(`modelSetup.nativeDiscovery.body`)}</p>
      <p>${t.nativeSessionCatalogs.map(e=>e.label).join(`, `)}</p>
      <label>
        <input
          type="checkbox"
          .checked=${e.nativeSessionCatalogsEnabled===!0}
          ?disabled=${e.actionsDisabled}
          @change=${t=>{let n=t.currentTarget;e.onNativeSessionCatalogsChange?.(n.checked)}}
        />
        ${y(`modelSetup.nativeDiscovery.enable`)}
      </label>
      <p class="muted">${y(`modelSetup.nativeDiscovery.decline`)}</p>
    </section>
  `}function Ht(e,t){let n=e.firstRun&&t.setupComplete&&e.activation.phase!==`success`?e.onOpenChat:void 0,r=t.configuredModel?yt({result:t,verify:e.verify,canVerify:e.canVerify,actionsDisabled:e.actionsDisabled,onVerify:e.onVerify,onContinue:n}):h;return e.canAdmin?e.gatewayTooOld?p`${r}
      <div class="callout warning" role="note">${y(`modelSetup.access.gatewayTooOld`)}</div>`:p`
    ${r} ${Vt(e,t)} ${Nt(e,t)}
    ${Mt(e,t)} ${Pt(e,t)}
    ${Lt(e,t)} ${It(e,t)} ${Rt(e,t)}
  `:p`${r}
      <div class="callout warning" role="note">${y(`modelSetup.access.adminRequired`)}</div>`}function Q(e){return p`
    <section class=${`settings-section ${e.className??``}`.trim()}>
      <div class="settings-section__header"><h2>${e.title}</h2></div>
      ${e.intro?p`<p class="muted">${e.intro}</p>`:h}
      <div class="model-setup__rows">
        ${Array.from({length:e.rows??1},(t,n)=>p`
            <div class="model-setup__row model-setup__loading-row">
              <span class="model-setup__loading-icon skeleton"></span>
              <span class="model-setup__loading-copy">
                ${n===0&&e.status?p`<span class="model-setup__loading-status">${e.status}</span>`:p`<span class="skeleton skeleton-line skeleton-line--medium"></span>`}
                <span class="skeleton skeleton-line skeleton-line--long"></span>
              </span>
              <span class="model-setup__loading-action skeleton"></span>
            </div>
          `)}
      </div>
    </section>
  `}function Ut(e){return p`
    <div
      class="model-setup__loading"
      role="status"
      aria-busy="true"
      aria-label=${y(`modelSetup.loading`)}
    >
      <div class="model-setup__loading-sections" aria-hidden="true">
        ${e?Q({title:y(`modelSetup.verify.title`),className:`model-setup__loading-section--selected`,status:y(`modelSetup.loading`)}):h}
        ${Q({title:y(`modelSetup.candidates.title`),className:`model-setup__loading-section--candidates`,status:e?void 0:y(`modelSetup.loading`)})}
        ${Q({title:y(`modelSetup.prepare.title`),intro:y(`modelSetup.prepare.intro`),rows:2})}
        ${Q({title:y(`modelSetup.signIn.title`),className:`model-setup__loading-section--sign-in`})}
        ${Q({title:y(`modelSetup.manual.title`)})}
      </div>
    </div>
  `}function Wt(e){let t;e.page.phase===`ready`?t=Ht({...e,actionsDisabled:e.actionsDisabled||e.activationUnresolved===!0},e.page.result):e.canAdmin?e.gatewayTooOld?t=p`<div class="callout warning" role="note">
      ${y(`modelSetup.access.gatewayTooOld`)}
    </div>`:e.page.phase===`loading`?t=Ut(e.modelConfigured===!0):e.page.phase===`detect-error`&&(t=p`
      <div class="callout danger" role="alert">${e.page.message}</div>
      <button type="button" class="btn" @click=${e.onDetect}>${y(`modelSetup.retry`)}</button>
    `):t=p`<div class="callout warning" role="note">
      ${y(`modelSetup.access.adminRequired`)}
    </div>`;let n=p`
    <div class="model-setup">
      <div class="model-setup__intro">
        <div>
          <h1>${y(`modelSetup.heading`)}</h1>
          <p>${y(`modelSetup.intro`)}</p>
        </div>
        ${e.page.phase===`ready`&&!e.page.result.configuredModel&&e.activation.phase!==`success`&&e.canAdmin&&!e.gatewayTooOld?p`<button
                type="button"
                class="btn"
                ?disabled=${e.actionsDisabled}
                @click=${e.onDetect}
              >
                ${y(`modelSetup.checkAgain`)}
              </button>`:h}
      </div>
      ${e.canAdmin&&!e.gatewayTooOld?Bt(e.activation):h}
      ${e.refreshWarning?p`<div class="callout warning" role="alert">${e.refreshWarning}</div>`:h}
      ${e.activationUnresolved&&!e.actionsDisabled&&e.activation.phase!==`success`?p`<div class="model-setup__recovery">
              <p>${y(`modelSetup.recovery.unknown`)}</p>
              ${e.page.phase===`ready`&&e.page.result.configuredModel&&e.canVerify?p`<button
                      type="button"
                      class="btn primary"
                      @click=${e.onUseCurrentModel}
                    >
                      ${y(`modelSetup.recovery.useCurrent`)}
                    </button>`:h}
              <button type="button" class="btn" @click=${e.onDetect}>
                ${y(`modelSetup.checkAgain`)}
              </button>
            </div>`:h}
      ${t}
    </div>
    ${Ot({mode:e.wizardMode,state:e.wizard,refreshWarning:e.refreshWarning,cancellationNotice:e.cancellationNotice,value:e.wizardValue,onValueChange:e.onWizardValueChange,onAnswer:e.onWizardAnswer,onCancel:e.onWizardCancel,onClose:e.onWizardClose})}
    ${e.activation.phase===`success`?Et(e.activation,e.onOpenChat,e.onSuccessClose,e.firstRun):h}
  `;return p`
    <section class="content-header">
      <div>
        <div class="page-title">${ye(`model-setup`)}</div>
        <div class="page-subtitle">
          ${me(`model-setup`)} ${Ae(Gt)}
        </div>
      </div>
    </section>
    ${Ve(n)}
  `}var Gt;function Kt(){return(Kt=e((()=>{f(),he(),b(),Fe(),He(),_(),u(),bt(),q(),Y(),Z(),M(),Dt(),At(),Gt=`https://docs.openclaw.ai/concepts/model-providers`})))()}var qt;function Jt(){return(Jt=e((()=>{u(),le(),ie(),M(),qt=class{constructor(e){this.options=e,this.currentState={phase:`idle`},this.session=null,this.retirementGeneration=0}get state(){return this.currentState}get hasAdmittedSession(){return this.session?.admitted===!0}suspend(){let e=this.session;e&&(e.suspended=!0,e.abortController.abort(),this.setState({phase:`starting`,authChoice:e.authChoice}))}async resume(){let e=this.session,t=this.options.getClient();if(!e?.admitted||!t)return null;e.retired=!0,e.abortController.abort();let n={...e,client:t,abortController:new AbortController,cancellationPromise:void 0,suspended:!1,retired:!1};this.session=n,this.setState({phase:`starting`,authChoice:n.authChoice});try{return n.terminalResult?this.applyResult(n,n.authChoice,n.terminalResult):await this.requestNext(n,n.authChoice)}catch(e){return this.handleError(e,n),null}}async start(e,t=`openclaw.setup.auth.start`,n={}){return this.startSession(e,t,{authChoice:e,...n})}activate(e,t){return this.startSession(e.authChoice??e.kind,`openclaw.setup.activate.start`,e,t)}async startSession(e,t,n,r){let i=this.options.getClient();if(!i||this.currentState.phase!==`idle`)return null;let a={client:i,sessionId:ce(),retirementGeneration:this.retirementGeneration,authChoice:e,abortController:new AbortController,startMethod:t,activationTargetId:r,onTerminalResult:this.options.onStart?.(t,`kind`in n?n:void 0)};this.session=a,this.setState({phase:`starting`,authChoice:e});try{let r=this.options.getAgentId(),o=i.request(t,{sessionId:a.sessionId,...n,...r?{agentId:r}:{}},{timeoutMs:null}).catch(e=>{if(!te(e))throw e;return{done:!0,status:`not-admitted`,error:d(e,this.options.requestFailedMessage())}}),s=await this.awaitWizardStart(a,o);return s.done||(a.admitted=!0),a!==this.session&&!s.done?(await this.cancelSession(a),null):s.done?this.applyResult(a,e,s):await this.requestNext(a,e)}catch(e){return this.handleError(e,a),null}}async answer(e,t=!0){let n=this.currentState,r=this.session;if(n.phase!==`step`||n.busy||!r)return null;this.setState({...n,busy:!0,validationError:null});let i=t?{stepId:n.step.id,value:e}:{stepId:n.step.id};try{return await this.requestNext(r,n.authChoice,i)}catch(e){return this.handleError(e,r),null}}async cancel(e={}){let t=this.session;e.settleActiveRequest||t?.abortController.abort(),this.session=null,this.setState({phase:`idle`}),t&&await this.cancelSession(t)}async requestCancellation(){let e=this.session;if(!e)return this.close(),`cancelled`;let t;try{t=await this.sendCancellation(e)}catch(t){if(e!==this.session||this.isRetired(e)||e.suspended)return;if(a(t)){this.handleError(t,e);return}throw t}if(!(e!==this.session||this.isRetired(e)||e.suspended)){if(t?.status===`cancelled`||t?.status===`error`)return this.close(),`cancelled`;if(t?.status===`running`)return`running`}}close(e={}){e.retireOwner&&(this.retirementGeneration+=1),this.session?.abortController.abort(),this.session=null,this.setState({phase:`idle`})}fail(e){this.session=null,this.setState({phase:`error`,message:e})}async awaitWizardStart(e,t){let n=!1,r,i=t.then(async t=>(n&&(t.done?this.reportTerminalResult(e,t):await this.cancelSession(e)),t));try{return await Promise.race([i,new Promise((t,i)=>{r=setTimeout(()=>{n=!0,i(Error(`gateway request timed out after ${j}ms: ${e.startMethod}`))},j)})])}finally{clearTimeout(r)}}async requestNext(e,t,n){if(e.suspended||this.isRetired(e))return null;let{client:r,sessionId:i,abortController:a}=e,o=a.signal,s=n;for(;;){let n=await r.request(`wizard.next`,{sessionId:i,...s?{answer:s}:{}},{timeoutMs:null,signal:o}),a=this.applyResult(e,t,n);if(e!==this.session||a)return a;let c=this.currentState;if(c.phase!==`step`||c.step.executor!==`gateway`)return null;s=void 0}}applyResult(e,t,n){if(e===this.session&&e.suspended&&n.done)return e.terminalResult=n,null;let r=this.reportTerminalResult(e,n);if(e!==this.session||e.suspended)return null;if(r?.()===!1)return this.close(),null;let i=Je(t,n,n.status===`cancelled`?this.options.cancelledMessage():this.options.requestFailedMessage());return n.done&&(this.session=null),this.setState(i),!n.done||n.status!==`done`?null:{startMethod:e.startMethod,...e.activationTargetId?{activationTargetId:e.activationTargetId}:{},...r?{isCurrent:r}:{},...n.preparedModelRef?{preparedModelRef:n.preparedModelRef}:{},...n.modelActivation?{modelActivation:n.modelActivation}:{}}}handleError(e,t){if(t!==this.session||t.suspended)return;this.session=null,t.abortController.abort();let n=a(e);n||this.cancelSession(t);let r=n?this.options.sessionExpiredMessage():d(e,this.options.requestFailedMessage());this.setState({phase:`error`,message:r})}async cancelSession(e){try{return await this.sendCancellation(e)}catch{return}}async sendCancellation(e){if(!this.isRetired(e))return e.cancellationPromise||=e.client.request(`wizard.cancel`,{sessionId:e.sessionId},{timeoutMs:j}).then(t=>((t.status===`cancelled`||t.status===`error`)&&this.reportTerminalResult(e,{done:!0,...t}),t)).finally(()=>{e.cancellationPromise=void 0}),e.cancellationPromise}reportTerminalResult(e,t){if(this.isRetired(e)||e.suspended)return;let n=t.status===`cancelled`||t.status===`error`||t.status===`not-admitted`;if(t.done&&(e===this.session||n))return e.onTerminalResult?.(t)}isRetired(e){return e.retired===!0||e.retirementGeneration!==this.retirementGeneration}setState(e){this.currentState=e,this.options.onChange(e)}}})))()}var $;function Yt(){return(Yt=e((()=>{r(),be(),ue(),ge(),ve(),_(),ke(),re(),se(),ee(),it(),q(),G(),Y(),dt(),M(),Kt(),Jt(),U(),$=class extends o{constructor(...e){super(...e),this.pageState={phase:`loading`},this.activationState={phase:`idle`},this.verifyState={phase:`idle`},this.wizardState={phase:`idle`},this.wizardMode=`auth`,this.manualProviderId=``,this.manualApiKey=``,this.manualError=null,this.moreSignInOpen=!1,this.nativeSessionCatalogsEnabled=!1,this.iconUrls={},this.setupRefreshWarning=null,this.cancellationNotice=null,this.observedConnection=null,this.pendingPrepareOption=null,this.wizardMutationGeneration=0,this.wizardMutationActive=!1,this.wizardReturnFocus=null,this.firstRun=new rt({context:()=>this.context,routeData:()=>this.routeData,pageState:()=>this.pageState,actionsDisabled:()=>this.actionsDisabled(),canUseSetup:e=>this.canUseSetup(e),canVerify:e=>this.canVerify(e),verify:()=>this.verifyConnection().then(()=>this.verifyTask.value),setVerifyState:e=>this.verifyState=e,setActivationState:e=>this.activationState=e,setRefreshWarning:e=>this.setupRefreshWarning=e}),this.iconLoader=new ot(()=>this.context,()=>this.pageState,e=>this.iconUrls=e),this.subscriptions=new s(this).watch(()=>this.context?.gateway,(e,t)=>e.subscribe(t),e=>this.synchronizeGateway(e.snapshot)).watch(()=>this.context?.agentSelection,(e,t)=>e.subscribe(t),()=>this.synchronizeGateway(this.context.gateway.snapshot)).watch(()=>this.firstRun,(e,t)=>e.subscribe(t)),this.wizard=new qt({getClient:()=>this.context?.gateway.snapshot.client??null,getAgentId:()=>this.context?.agentSelection.state.selectedId??null,onChange:e=>{e.phase!==`starting`&&e.phase!==`done`&&(this.activationState={phase:`idle`});let t=this.wizardState.phase===`step`?this.wizardState.step.id:null;this.wizardState=e.phase===`step`&&this.wizardMutationActive?{...e,busy:!0}:e,e.phase===`step`&&e.step.id!==t?this.wizardValue=Ye(e.step):e.phase===`idle`&&(this.wizardValue=void 0,this.cancellationNotice=null)},onStart:(e,t)=>{if(e===`openclaw.setup.prepare.start`)return;let n=this.firstRun.beginActivation(t??{kind:`provider-auth`});return e=>(this.firstRun.recordActivation(n,e),this.requestUpdate(),()=>this.firstRun.ownsActivation(n))},requestFailedMessage:()=>y(`modelSetup.errors.requestFailed`),cancelledMessage:()=>y(`modelSetup.wizard.cancelled`),sessionExpiredMessage:()=>y(`modelSetup.wizard.sessionExpired`)}),this.detectTask=new S(this,{autoRun:!1,args:()=>{let e=this.context?.gateway.snapshot.client??null;return[this.canUseSetup(e)?e:null,this.context?.agentSelection.state.selectedId??null,null]},task:async([e,t,n],{signal:r})=>{if(!e||!n)return C;let i=this.context.gateway.snapshot.hello;return{...await tt(e,()=>lt(e,t??void 0,r)),agentId:t,hello:i,token:n}},onComplete:e=>{if(this.context.gateway.snapshot.client===e.client&&this.context.gateway.snapshot.hello===e.hello&&this.context.agentSelection.state.selectedId===e.agentId){if(`error`in e){this.firstRun.setReadyConnection(null),this.pageState={phase:`detect-error`,message:W(e.error)};return}this.firstRun.setReadyConnection({client:e.client,hello:e.hello,agentId:e.agentId}),this.pageState={phase:`ready`,result:e.value},e.value.manualProviders.some(e=>e.id===this.manualProviderId)||(this.manualProviderId=``)}}}),this.verifyTask=new S(this,{autoRun:!1,args:()=>[null,null],task:async([e,t],{signal:n})=>e?tt(e,()=>ut(e,t??void 0,n)):C})}disconnectedCallback(){this.firstRun.dispose(),this.resetActivity(),this.observedConnection=null,this.subscriptions.clear(),super.disconnectedCallback()}willUpdate(){this.synchronizeGateway(this.context.gateway.snapshot)}updated(e){this.isConnected&&(e.has(`activationState`)&&this.activationState.phase!==`idle`&&zt(this.renderRoot),this.wizardState.phase!==`idle`&&this.querySelector(`openclaw-modal-dialog`)?.setReturnFocusTarget(this.wizardReturnFocus),this.iconLoader.reconcile(),this.firstRun.start())}synchronizeGateway(e){let t=this.routeData;if(!this.isConnected||!t)return;let n=this.observedConnection,r=nt(this.context,t.firstRun,n?.recoveryScope);if(n&&r.client===n.client&&r.hello===n.hello&&r.agentId===n.agentId&&r.connected===n.connected&&r.firstRun===n.firstRun&&r.connectionRevision===n.connectionRevision&&r.recoveryScope===n.recoveryScope)return;this.observedConnection=r;let i=n&&(!r.recoveryScope||r.recoveryScope!==n.recoveryScope),a=n&&(r.agentId!==n.agentId||r.firstRun!==n.firstRun||r.connectionRevision!==n.connectionRevision||i),o=r.connected&&!g(e.hello?.auth??null);if((i||o)&&this.wizard.close({retireOwner:!0}),a&&(this.nativeSessionCatalogsEnabled=!1,this.manualProviderId=``,this.manualApiKey=``,this.manualError=null),n&&r.recoveryScope&&!a&&this.wizard.hasAdmittedSession){this.wizardMutationGeneration+=1,this.wizardMutationActive=!1,this.wizard.suspend(),this.canUseSetup(r.client)&&(this.firstRun.reconnectActivation(r),this.runWizardMutation(()=>this.wizard.resume()));return}r.firstRun===n?.firstRun?this.firstRun.connectionChanged(r):this.firstRun.routeChanged(),this.resetActivity(),this.pageState={phase:`loading`},this.canUseSetup(r.client)&&this.detect()}resetActivity(){this.wizardMutationGeneration+=1,this.wizardMutationActive=!1,this.detectTask.run([null,null,null]),this.activationState={phase:`idle`},this.resetVerify(),this.iconLoader.reset(),this.pendingPrepareOption=null,this.wizard.cancel()}canUseSetup(e){let t=this.context.gateway.snapshot;return!!(e&&t.phase===`connected`&&g(t.hello?.auth??null)&&w(t,`openclaw.setup.detect`)===!0)}async detect(){let e=this.context.gateway.snapshot.client;if(!this.canUseSetup(e))return null;this.resetVerify(),this.pageState={phase:`loading`};let t={};await this.detectTask.run([e,this.context.agentSelection.state.selectedId,t]);let n=this.detectTask.value;return n?.token===t&&`value`in n?n.value:null}canVerify(e){let t=this.context.gateway.snapshot;return this.canUseSetup(e)&&w(t,`openclaw.setup.verify`)===!0}resetVerify(){this.verifyState={phase:`idle`},this.verifyTask.run([null,null])}async verifyConnection(){let e=this.context.gateway.snapshot.client;!this.canVerify(e)||this.actionsDisabled()||(this.verifyState={phase:`checking`},await this.verifyTask.run([e,this.context.agentSelection.state.selectedId]))}async activate(e,t){let n=this.context.gateway.snapshot.client;!this.canUseSetup(n)||this.actionsDisabled()||this.firstRun.unresolved||(this.manualError=null,this.activationState={phase:`testing`,targetId:t},this.pendingPrepareOption=null,this.wizardMode=`activate`,await this.runWizardMutation(()=>this.wizard.activate({...e,...this.nativeSessionCatalogPreference()},t)))}nativeSessionCatalogPreference(){return this.pageState.phase===`ready`&&this.pageState.result.nativeSessionCatalogPreferenceRequired===!0?{nativeSessionCatalogsEnabled:this.nativeSessionCatalogsEnabled}:{}}finishActivation(e,t,n){this.activationState=Ke({result:e,targetId:t,fallbackError:y(`modelSetup.errors.activationFailed`),restartWarning:y(`labsPage.restartRequired`),refreshWarning:n}),this.activationState.phase===`success`&&(this.manualApiKey=``),this.firstRun.finishActivation(e,t,n)}activateCandidate(e){this.activate({kind:e.kind,modelRef:e.modelRef},A(e.kind,e.modelRef))}connectManual(){let e=this.manualApiKey.trim();if(!this.manualProviderId||!e){this.manualError=y(`modelSetup.manual.required`);return}this.activate({kind:`api-key`,authChoice:this.manualProviderId,apiKey:e},`manual:${this.manualProviderId}`)}selectManualProvider(e){e!==this.manualProviderId&&(this.manualApiKey=``),this.manualProviderId=e,this.manualError=null}async useManualProvider(e){this.selectManualProvider(e),await this.updateComplete;let t=this.renderRoot.querySelector(`.model-setup__manual input[type="password"]`);t?.scrollIntoView?.({block:`center`,behavior:Ie()}),t?.focus()}async handleWizardDone({startMethod:e,preparedModelRef:t,activationTargetId:n,modelActivation:r,isCurrent:i}){let a=e===`openclaw.setup.prepare.start`?this.pendingPrepareOption:null,o=this.nativeSessionCatalogPreference();if(this.pendingPrepareOption=null,a&&t){let e=J(a.id);this.wizard.close(),this.activate({kind:e,modelRef:t,...o},A(e,t));return}if(e!==`openclaw.setup.prepare.start`){if(i?.()===!1){this.wizard.close();return}if(!r){this.wizard.fail(y(e===`openclaw.setup.activate.start`?`modelSetup.errors.activationFailed`:`modelSetup.wizard.notComplete`));return}this.wizard.close(),this.finishActivation({ok:!0,...r},n??`provider-auth`,this.setupRefreshWarning);return}let s=await this.detect();if(!s){this.wizard.fail(y(`modelSetup.errors.requestFailed`));return}if(a){this.pageState={phase:`ready`,result:{...s,configuredModel:void 0,setupComplete:!1}};let e=ct(s,a.id);if(!e){this.wizard.fail(y(`modelSetup.prepare.providerNotReady`,{provider:a.label}));return}this.wizard.close(),this.activate({kind:e.kind,modelRef:e.modelRef,...o},A(e.kind,e.modelRef));return}this.wizard.close()}closeWizard(){this.wizardMutationGeneration+=1,this.wizardMutationActive=!1,this.pendingPrepareOption=null,this.activationState={phase:`idle`},this.wizard.close()}async runWizardMutation(e){let t=this.context.gateway.snapshot.client;if(this.wizardMutationActive||!this.canUseSetup(t)||this.wizard.state.phase===`idle`&&this.firstRun.unresolved)return;if(this.wizard.state.phase===`idle`){let e=this.ownerDocument.activeElement;this.wizardReturnFocus=e instanceof HTMLElement&&this.contains(e)?e:null}let n=++this.wizardMutationGeneration;this.wizardMutationActive=!0,this.requestUpdate();try{let r=await this.context.runtimeConfig.runExternalMutation(async n=>{if(n!==t)throw Error(`Connection changed before model setup continued.`);return await e()},{canDispatch:()=>n===this.wizardMutationGeneration&&this.context.gateway.snapshot.client===t&&this.canUseSetup(t),dispatchError:y(`modelSetup.errors.requestFailed`)});if(n!==this.wizardMutationGeneration){r.ok&&!r.refresh.ok&&this.isConnected&&(this.setupRefreshWarning=r.refresh.error),this.isConnected&&this.canUseSetup(this.context.gateway.snapshot.client)&&this.detect();return}if(!r.ok){this.wizard.fail(r.error);return}this.setupRefreshWarning=r.refresh.ok?null:r.refresh.error;let i=r.value;i?(this.wizardMutationActive=!1,await this.handleWizardDone(i)):this.wizardState.phase===`step`&&this.wizardState.busy&&(this.wizardState={...this.wizardState,busy:!1})}catch(e){n===this.wizardMutationGeneration&&this.wizard.fail(W(e))}finally{n===this.wizardMutationGeneration&&(this.wizardMutationActive=!1,this.requestUpdate())}}async cancelWizard(){let e=this.wizardMutationGeneration;this.cancellationNotice=null;try{let t=await this.wizard.requestCancellation();if(e!==this.wizardMutationGeneration)return;if(t===`running`){this.cancellationNotice=y(`modelSetup.wizard.finishingStep`);return}if(t!==`cancelled`)return;this.wizardMutationGeneration+=1,this.wizardMutationActive=!1,this.pendingPrepareOption=null,this.activationState={phase:`idle`}}catch(t){e===this.wizardMutationGeneration&&(this.wizardState.phase===`starting`||this.wizardState.phase===`step`)&&(this.cancellationNotice=y(`modelSetup.wizard.cancelFailed`,{error:W(t)}))}}actionsDisabled(){return this.activationState.phase===`testing`||this.verifyState.phase===`checking`||this.wizardMutationActive||this.wizardState.phase!==`idle`&&this.wizardState.phase!==`error`&&this.wizardState.phase!==`cancelled`}render(){let e=this.context.gateway.snapshot,t=g(e.hello?.auth??null),n=e.phase===`connected`&&w(e,`openclaw.setup.detect`)!==!0,r=t&&!n&&w(e,`openclaw.setup.verify`)===!0;return Wt({page:this.firstRun.visiblePageState(this.verifyState.phase===`ok`),activation:this.activationState,verify:this.verifyState,wizard:this.wizardState,wizardMode:this.wizardMode,wizardValue:this.wizardValue,canAdmin:t,canVerify:r,canPrepare:t&&!n&&w(e,`openclaw.setup.prepare.start`)===!0,modelConfigured:ae(e)?.modelConfigured===!0,gatewayTooOld:n,refreshWarning:this.setupRefreshWarning,cancellationNotice:this.cancellationNotice,activationUnresolved:this.firstRun.unresolved,onUseCurrentModel:()=>void this.firstRun.useCurrentModel(),actionsDisabled:this.actionsDisabled(),manualProviderId:this.manualProviderId,manualApiKey:this.manualApiKey,manualError:this.manualError,moreSignInOpen:this.moreSignInOpen,nativeSessionCatalogsEnabled:this.nativeSessionCatalogsEnabled,onNativeSessionCatalogsChange:e=>this.nativeSessionCatalogsEnabled=e,firstRun:this.routeData?.firstRun===!0,iconUrls:this.iconUrls,onDetect:()=>{this.firstRun.retryDetection()&&this.detect()},onVerify:()=>void this.firstRun.verify(),onActivateCandidate:e=>this.activateCandidate(e),onStartAuth:e=>{this.pendingPrepareOption=null,this.wizardMode=`auth`,this.runWizardMutation(()=>this.wizard.start(e.id,`openclaw.setup.auth.start`,this.nativeSessionCatalogPreference()))},onStartPrepare:e=>{this.pendingPrepareOption=e,this.wizardMode=`prepare`,this.runWizardMutation(()=>this.wizard.start(e.id,`openclaw.setup.prepare.start`))},onManualProviderChange:e=>this.selectManualProvider(e),onUseManualProvider:e=>void this.useManualProvider(e),onManualApiKeyChange:e=>{this.manualApiKey=e,this.manualError=null},onManualConnect:()=>this.connectManual(),onMoreSignInToggle:e=>this.moreSignInOpen=e,onIconError:e=>this.iconLoader.invalidate(e),onOpenChat:()=>this.firstRun.continueSetup(),onSuccessClose:()=>{this.activationState={phase:`idle`},this.detect()},onWizardValueChange:e=>this.wizardValue=e,onWizardAnswer:(e,t)=>void this.runWizardMutation(()=>this.wizard.answer(e,t)),onWizardCancel:()=>void this.cancelWizard(),onWizardClose:()=>this.closeWizard()})}},t([n({context:_e,subscribe:!0})],$.prototype,`context`,void 0),t([pe({attribute:!1})],$.prototype,`routeData`,void 0),t([m()],$.prototype,`pageState`,void 0),t([m()],$.prototype,`activationState`,void 0),t([m()],$.prototype,`verifyState`,void 0),t([m()],$.prototype,`wizardState`,void 0),t([m()],$.prototype,`wizardMode`,void 0),t([m()],$.prototype,`wizardValue`,void 0),t([m()],$.prototype,`manualProviderId`,void 0),t([m()],$.prototype,`manualApiKey`,void 0),t([m()],$.prototype,`manualError`,void 0),t([m()],$.prototype,`moreSignInOpen`,void 0),t([m()],$.prototype,`nativeSessionCatalogsEnabled`,void 0),t([m()],$.prototype,`iconUrls`,void 0),t([m()],$.prototype,`setupRefreshWarning`,void 0),t([m()],$.prototype,`cancellationNotice`,void 0),customElements.get(`openclaw-model-setup-page`)||customElements.define(`openclaw-model-setup-page`,$)})))()}Yt();export{et as resumeFirstRunActivation};
//# sourceMappingURL=model-setup-page-DBuKbf77.js.map