import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,L as n,R as r,Zn as i,ia as a}from"./control-ui-foundation-DMb6IeIq.js";import{Da as o,Ds as s,Ea as c,Gc as l,Gn as u,Gt as d,Jo as f,Kn as p,Qt as m,Yo as h,Ys as g,ks as _,on as v,qc as y,qo as ee,qt as te,rn as ne,ss as re,us as ie,ya as ae}from"./control-ui-core-DzidtL-P.js";import{$ as oe,K as b,Q as se,X as x,at as S,m as ce,p as le,q as C,st as ue}from"./lit-runtime-vxhGQLC6.js";import{Tn as de,h as fe,m as pe,nn as me,sn as he,zn as ge}from"./control-ui-core-CaKBexnk.js";import{Bt as w,Ft as T,Gt as E,It as D,Lt as _e,Rt as ve}from"./control-ui-core-uEI6aN5p.js";import{F as O,I as ye,L as be,P as xe,R as Se}from"./control-ui-boot-shared-nBxCfWV5.js";import{a as Ce,r as we}from"./gateway-runtime-DP4whqrA.js";import{Et as Te,Ft as k,Ht as Ee,K as De,Lt as A,Nt as j,Ot as M,Pt as Oe,Rt as ke,io as Ae,jt as je,kt as N,no as P,q as Me,to as Ne,wt as F,zt as I}from"./control-ui-boot-shared-Cyt1Zyts.js";import{Nt as Pe,Pt as Fe}from"./control-ui-boot-chat-pu3gR1ly.js";import{Fs as Ie,Is as Le,Ls as Re,Qs as ze,Rs as Be,Zs as Ve}from"./control-ui-boot-shared-CH-OC11d.js";import{a as He,i as Ue}from"./control-ui-boot-shared-BiKnED0X.js";import{n as We,t as Ge}from"./en-settings-D6ws8ujh.js";import{a as Ke,i as qe}from"./control-ui-boot-shared-D2DaCK2F.js";import{n as Je,t as Ye}from"./settings-workspace-IBRfeTG9.js";import{n as L,t as Xe}from"./model-picker-i-vL0MMG.js";import{n as Ze,t as Qe}from"./agent-scope-control-CqnA-t3U.js";import{a as $e,i as et,n as tt,r as nt,t as rt}from"./load-B2dCeN17.js";import{a as it,i as at,n as ot,r as st}from"./usage-Cyuow4XD.js";function R(e){return ee(e,E(`modelProviders.requestFailed`))}async function ct(e,t){let{agentEpoch:n,runtimeConfig:r}=e;e.setBusy(!0),e.setMessage(null);try{if(await r.ensureLoaded(),!e.isCurrentClient())return{ok:!1};let i=await r.patch({raw:t.raw,note:t.note,...t.replacePaths?{replacePaths:t.replacePaths}:{}});if(!e.isCurrentClient())return{ok:!1};if(!i)return e.isCurrentAgent()&&e.setMessage({kind:`error`,text:r.state.lastError??E(`modelProviders.configUnavailable`)}),{ok:!1};let a=null;try{await r.refresh(),a=r.state.lastError,!a&&e.isCurrentClient()&&await e.refreshProviders()}catch(e){a=R(e)}return e.isCurrentClient()?(e.isCurrentAgent()&&e.setMessage({kind:`success`,text:t.success,...a?{warning:a}:{}}),{ok:!0,agentEpoch:n,warning:a}):{ok:!1}}catch(t){return e.isCurrentClient()&&e.isCurrentAgent()&&e.setMessage({kind:`error`,text:R(t)}),{ok:!1}}finally{e.isCurrentClient()&&e.isCurrentAgent()&&e.setBusy(!1)}}function z(){return(z=e((()=>{w(),h()})))()}function B(e){return Ie(e)}function lt(e){switch(e.status){case`ok`:case`expiring`:case`expired`:case`missing`:return e.status;default:return`api-key`}}function V(e,t){return e.find(e=>t.some(t=>e.ids.has(t)))}function H(e,t,n){let r=V(e,[t]);if(r)return r;let i={ids:new Set([t]),card:{id:t,displayName:n,profiles:[],profileProviderIds:{},profileOrders:{},profileOrderExplicitProviders:[],profileOrderStoredProviders:[],profileOrderLocks:{},credentialProviderIds:[],logoutTargets:[],hasConfigApiKey:!1,modelCount:0,availableModelCount:0},hasModelAuth:!1};return e.push(i),i}function ut(e,t){let n=O(t);n&&!e.some(e=>O(e)===n)&&e.push(t)}function dt(e,t,n){if(n.length===0)return;let r=O(t),i=e.find(e=>O(e.provider)===r);if(!i){e.push({provider:t,profileIds:[...new Set(n)]});return}i.profileIds=[...new Set([...i.profileIds,...n])]}function ft(e){let t=[],n=new Map,r=new Map,i=new Set;for(let t of e.authStatus?.providerCapabilities??[]){let e=B(t.provider);e&&n.set(e,n.get(e)===!0||t.apiKeySupported)}for(let n of e.configProviderIds??[]){let e=B(n);e&&(H(t,e,P(e)).card.configKey??=n)}for(let n of e.configApiKeyProviderIds??[]){let e=B(n);if(e){let r=H(t,e,P(e)).card;r.configKey=n,r.hasConfigApiKey=!0,ut(r.credentialProviderIds,n)}}for(let[n,r]of Object.entries(e.configProviderAuthModes??{})){let e=B(n);e&&(H(t,e,P(e)).card.configAuthMode=r)}for(let n of e.providerOutcomes??[]){let e=B(n.provider);if(!e)continue;let r=H(t,e,P(e)),i=r.catalogOutcome,a=n.profileId===void 0,o=gt[a?`provider`:`profile`];(!i||(a===(i.profileId===void 0)?o.indexOf(n.status)<o.indexOf(i.status):a))&&(r.catalogOutcome=n)}for(let n of e.models??[]){let e=B(n.provider);if(!e)continue;let r=H(t,e,P(e));r.card.modelCount+=1,n.available===!0&&(r.card.availableModelCount+=1)}for(let a of e.authStatus?.providers??[]){let e=B(a.provider);if(!e)continue;let o=a.usage?B(a.usage.providerId):e,s=[...new Set([e,o])],c=V(t,s)??H(t,o,P(o));for(let e of s)c.ids.add(e);if(c.card.displayName=a.displayName||c.card.displayName,c.card.profiles.push(...a.profiles),a.profiles.length>0){let e=a.authProvider||a.provider;for(let t of a.profiles)c.card.profileProviderIds[t.profileId]=e;a.profileOrder!==void 0&&i.add(e);let t=a.profileOrder??a.profiles.map(e=>e.profileId);r.set(e,[...new Set([...r.get(e)??[],...t])]),c.card.profileOrders[e]=t,a.profileOrderStored===!0&&!c.card.profileOrderStoredProviders.includes(e)&&c.card.profileOrderStoredProviders.push(e),a.profileOrderLocked!==void 0&&(c.card.profileOrderLocks[e]??=a.profileOrderLocked)}(a.apiKey||a.profiles.length>0)&&ut(c.card.credentialProviderIds,a.provider),dt(c.card.logoutTargets,a.provider,a.profiles.filter(e=>e.logoutSupported===!0).map(e=>e.profileId)),c.card.apiKey??=a.apiKey,c.hasModelAuth||=Re(a)||n.has(e);let l=a.usage;l&&!c.card.usage&&(c.card.usage={provider:l.providerId,displayName:a.displayName,windows:l.windows,...l.summary?{summary:l.summary}:{},...l.plan?{plan:l.plan}:{},...l.billing?.length?{billing:l.billing}:{}})}for(let e of t){e.card.profileOrderExplicitProviders=Object.keys(e.card.profileOrders).filter(e=>i.has(e));for(let t of Object.keys(e.card.profileOrders)){let n=r.get(t);n&&(e.card.profileOrders[t]=n)}}for(let n of Be(e.authStatus?.providers??[])){let e=V(t,[B(n.provider)]);e&&(e.card.auth={kind:lt(n),profileCount:n.profiles.length,...n.expiry?.label?{expiryLabel:n.expiry.label}:{}})}for(let n of e.providerUsage?.providers??[]){let e=B(n.provider);if(!e)continue;let r=V(t,[e])??H(t,e,n.displayName||P(e));r.ids.add(e),r.card.usage=n}for(let n of e.costByProvider??[]){let e=B(n.provider??``);if(!e)continue;let r=V(t,[e])??H(t,e,P(e)),i={totalCost:n.totals.totalCost,totalTokens:n.totals.totalTokens,sessionCount:n.count},a=r.card.localCost;r.card.localCost=a?{totalCost:a.totalCost+i.totalCost,totalTokens:a.totalTokens+i.totalTokens,sessionCount:a.sessionCount+i.sessionCount}:i}return t.filter(t=>t.hasModelAuth||(e.configProviderIds??[]).some(e=>B(e)===t.card.id)||!!t.card.usage||t.card.modelCount>0||!!t.catalogOutcome||(t.card.localCost?.totalTokens??0)>0).map(e=>{let t=n.get(e.card.id);return Object.assign({},e.card,e.catalogOutcome?{catalogStatus:e.catalogOutcome.status}:{},t===void 0?{}:{apiKeySupported:t})}).toSorted((e,t)=>e.displayName.localeCompare(t.displayName))}function U(e){return e.selectionRef===void 0?e.id.startsWith(`${e.provider}/`)?e.id:`${e.provider}/${e.id}`:e.selectionRef}function pt(e,t){let n=new Set([t.primary,...t.fallbacks,t.utilityModel].filter(e=>typeof e==`string`&&e.length>0)),r=(e??[]).filter(e=>e.available!==!1||n.has(U(e))),i=new Set(r.map(U)),a=e===null?{}:{available:!1};for(let t of n){if(i.has(t))continue;let n=t.indexOf(`/`);if(n<=0||n===t.length-1){let n=t.trim().toLowerCase(),i=(e??[]).find(e=>e.alias?.trim().toLowerCase()===n||e.id.trim()===t.trim());r.push({...i??{provider:``,id:t,name:t,...a},selectionRef:t});continue}r.push({provider:t.slice(0,n),id:t.slice(n+1),name:t,...a})}return r}function mt(e){let t=i(e?.models),n=i(t?.providers),r=i(e?.agents),a=i(r?.defaults),o=a?.model,s=i(o),c=typeof o==`string`?o:typeof s?.primary==`string`?s.primary:``,l=Array.isArray(s?.fallbacks)?s.fallbacks.filter(e=>typeof e==`string`):[];return{providerIds:Object.keys(n??{}),apiKeyProviderIds:Object.entries(n??{}).filter(([,e])=>{let t=i(e);return t?Object.hasOwn(t,`apiKey`)&&t.apiKey!=null:!1}).map(([e])=>e),providerAuthModes:Object.fromEntries(Object.entries(n??{}).flatMap(([e,t])=>{let n=i(t)?.auth;return typeof n==`string`?[[e,n]]:[]})),defaults:{primary:c,fallbacks:l,utilityModel:typeof a?.utilityModel==`string`?a.utilityModel:null}}}function ht(e,t){let n=new Set(Array.from(t,B)),r=new Map;for(let t of e??[]){let e=B(t.provider);t.quickApiKeySetup&&e&&!n.has(e)&&!r.has(e)&&r.set(e,{id:e,displayName:P(e)})}return[...r.values()].toSorted((e,t)=>e.displayName.localeCompare(t.displayName))}var gt;function W(){return(W=e((()=>{xe(),Ne(),Le(),gt={provider:[`auth-rejected`,`unavailable`,`ready`],profile:[`ready`,`auth-rejected`,`unavailable`]}})))()}function _t(e){let t=e?.thinkingDefault,n=e?.fastModeDefault;return{thinkingLevel:typeof t==`string`?t:void 0,thinkingOverridden:e!==null&&Object.hasOwn(e,`thinkingDefault`),fastMode:n===`auto`||typeof n==`boolean`?n:void 0,fastModeOverridden:e!==null&&Object.hasOwn(e,`fastModeDefault`)}}function G(e,t){return{models:{providers:{[e]:{apiKey:t}}}}}function vt(e){return{agents:{defaults:{...e.primary?{model:e.fallbacks.length>0?{primary:e.primary,fallbacks:[...e.fallbacks]}:e.primary}:{},utilityModel:e.utilityModel,thinkingDefault:e.thinkingOverridden&&e.thinkingLevel?e.thinkingLevel:null,fastModeDefault:e.fastModeOverridden&&e.fastMode!==void 0?e.fastMode:null}}}}var yt;function bt(){return(bt=e((()=>{yt=[`agents.defaults.model.fallbacks`]})))()}function xt(e){return/method (?:not found|not supported)|unknown method/iu.test(R(e))}function St(e,t){if(t.length===1)return t[0];let n=t.some(e=>e.status===`ok`)?`ok`:Ct.find(e=>t.some(t=>t.status===e))??`unknown`,r=t.find(e=>e.status===n)?.error;return{provider:e,status:n,...r?{error:r}:{},results:t.flatMap(e=>e.results.map(t=>({...t,label:`${e.provider}: ${t.label}`})))}}var Ct;function wt(){return(wt=e((()=>{z(),Ct=[`auth`,`billing`,`rate_limit`,`timeout`,`format`,`no_model`,`unknown`]})))()}var Tt;function Et(){return(Et=e((()=>{Tt=class{constructor(e){this.options=e,this.pendingOrders=new Map,this.activeOrderProviders=new Set}resetOrders(){this.pendingOrders.clear(),this.options.setOrders({})}setOrder(e,t,n){let r=this.options.getData()?.authStatus?.providers.find(e=>e.provider===t),i=n??r?.profiles.map(e=>e.profileId)??[];this.options.setOrders({...this.options.getOrders(),[t]:i}),this.pendingOrders.set(t,{cardId:e,profileIds:n,optimisticOrder:i}),this.options.clearMessage(e),this.flushOrder(t)}flushPendingOrders(){if(this.options.canMutate())for(let e of this.pendingOrders.keys())this.flushOrder(e)}async logout(e,t){let n=this.options.getClient(),r=`logout:${e}`;if(!n||!this.options.canMutate()||this.options.isBusy(r))return;let i=this.options.getClientEpoch(),a=this.options.getAgentId(),o=this.options.getAgentEpoch(),s=()=>this.isCurrentScope(n,i,o,a);this.options.clearProbe(e),this.options.setBusy(r,!0),this.options.clearMessage(e);try{let r;try{await n.request(`models.authLogout`,{...t,agentId:a})}catch(e){r=e}if(!s()||(await this.options.refresh(),!s()))return;if(r){this.options.setError(e,r);return}this.options.setLogoutSuccess(e)}catch(t){s()&&this.options.setError(e,t)}finally{s()&&this.options.setBusy(r,!1)}}async flushOrder(e){if(!this.activeOrderProviders.has(e)){this.activeOrderProviders.add(e);try{for(;;){let t=this.pendingOrders.get(e);if(!t)return;let n=this.options.getClient();if(!n||!this.options.canMutate())return;this.pendingOrders.delete(e);let r=this.options.getClientEpoch(),i=this.options.getAgentEpoch(),a=this.options.getAgentId();try{let o=await n.request(`models.authOrderSet`,{provider:e,...t.profileIds?{profileIds:t.profileIds}:{},agentId:a});if(!this.isCurrentScope(n,r,i,a))return;if(t.profileIds&&!o.warning)this.options.cancelRefresh(),this.applyOrder(e,t.profileIds),this.options.refresh();else if(await this.options.refresh(),!this.isCurrentScope(n,r,i,a))return;this.clearOptimisticOrder(e,t.optimisticOrder)&&o.warning&&this.options.setError(t.cardId,o.warning)}catch(o){if(!this.isCurrentScope(n,r,i,a))return;this.clearOptimisticOrder(e,t.optimisticOrder)&&this.options.setError(t.cardId,o)}}}finally{this.activeOrderProviders.delete(e),this.pendingOrders.has(e)&&this.options.canMutate()&&this.flushOrder(e)}}}isCurrentScope(e,t,n,r){return this.options.isCurrentClient(e,t)&&this.options.getAgentEpoch()===n&&this.options.getAgentId()===r}clearOptimisticOrder(e,t){let n=this.options.getOrders();if(n[e]!==t)return!1;let r={...n};return delete r[e],this.options.setOrders(r),!0}applyOrder(e,t){let n=this.options.getData(),r=n?.authStatus;if(!n||!r)return;let i=[...r.providers];for(let[n,r]of i.entries()){if((r.authProvider??r.provider)!==e)continue;let{profileOrder:a,profileOrderStored:o,...s}=r;i[n]={...s,profileOrder:[...t],profileOrderStored:!0}}this.options.setData({...n,authStatus:{...r,providers:i}})}}})))()}function K(e,t,n){let r={...e};return n===null?delete r[t]:r[t]=n,r}var Dt;function Ot(){return(Ot=e((()=>{ye(),tt(),Dt=class{constructor(e,t){this.options=t,this.pending=new Set,this.usageTask=this.createTask(e,`usage`,et,e=>({providerUsage:e}),(e,t)=>this.options.refreshPolicy.markProviderUsage(e,Date.now(),t)),this.costTask=this.createTask(e,`cost`,nt,e=>({costByProvider:e}))}get loading(){return this.pending.size>0}get usageLoading(){return this.pending.has(`usage`)}adoptCoreData(e,t){let n=e===this.options.getDataClient()?this.options.getData():null;this.options.setData({...t,providerUsage:n?.providerUsage??t.providerUsage,costByProvider:n?.costByProvider??t.costByProvider}),this.options.setDataClient(e),t.providerUsage!==null&&this.options.refreshPolicy.markProviderUsage(t.providerUsage,t.updatedAt,this.options.getGateway().epoch),e&&!this.options.isCoreLoading()&&!this.loading&&t.providerUsage===null&&t.costByProvider===null&&this.load(e)}invalidate(){this.options.refreshPolicy.interrupt(),this.cancelGeneration()}beginCoreRefresh(e){this.cancelGeneration(),e&&this.options.refreshPolicy.resetPayload()}cancelGeneration(){this.pending.clear();let e=this.options.getGateway().epoch;this.usageTask.run([null,e]),this.costTask.run([null,e])}load(e){return this.loadRequests(e,!0)}loadUsage(){return this.loadRequests(void 0,!1)}async loadRequests(e,t){let n=this.options.getGateway(),r=e??n.client;if(!n.connected||!r){this.options.refreshPolicy.markLoadDeferred();return}this.options.refreshPolicy.beginLoad(),this.pending.add(`usage`);let i=this.usageTask.run([r,n.epoch]);if(!t){await i;return}this.pending.add(`cost`),await Promise.all([i,this.costTask.run([r,n.epoch])])}createTask(e,t,n,r,i){return new be(e,{autoRun:!1,task:([e,t],{signal:r})=>e?n(e,r).then(n=>({client:e,data:n,epoch:t})):Se,onComplete:({client:e,data:n,epoch:a})=>{this.pending.delete(t);let o=this.options.getData();o&&e===this.options.getDataClient()&&this.options.getGateway().isCurrent({client:e,epoch:a})&&(this.options.setData({...o,...r(n)}),i?.(n,a)),this.options.refreshPolicy.flushPending()},onError:()=>{this.pending.delete(t),this.options.refreshPolicy.flushPending()}})}}})))()}function q(e){let t=new Set,n=[];for(let r of e){let e=U(r);t.has(e)||(t.add(e),n.push({value:e,label:r.name||e,...r.provider?{provider:r.provider}:{}}))}return n.toSorted((e,t)=>e.label.localeCompare(t.label))}function J(e){return x`
    <span class="model-providers__label-with-help">
      <span>${e.title}</span>
      <span class="settings-section__docs">
        <openclaw-tooltip open-on-click>
          <button
            id=${e.triggerId}
            type="button"
            class="settings-section__help-button model-providers__help-button"
            aria-label=${e.label}
            @keydown=${e=>{e.key===`Escape`&&e.stopPropagation()}}
          >
            ${T.info}
          </button>
          <div slot="content" class="settings-section__help-panel">${e.body}</div>
        </openclaw-tooltip>
      </span>
    </span>
  `}function kt(e){return x`
    <span class="model-providers__segment-label">
      <span>${e.label}</span>
      <openclaw-tooltip open-on-click .content=${e.help}>
        <button
          type="button"
          class="model-providers__segment-info"
          aria-label=${e.help}
          @click=${e=>e.stopPropagation()}
          @keydown=${e=>{e.key===`Escape`&&e.stopPropagation()}}
        >
          ${T.info}
        </button>
      </openclaw-tooltip>
    </span>
  `}function At(e){return e===`auto`?`auto`:e===`on`}function jt(e){let t=!e.canMutate||e.models.length===0,n=!e.canMutate,r=!!e.busy.defaults,i=e.mutationBlockedReason??``,a=e.thinkingLevel&&!It.has(e.thinkingLevel)?[...X,e.thinkingLevel]:X,o=e.fastMode===void 0?``:qe(e.fastMode),s=e.selection.fallbacks[0]??``,c=x`
    <div class="model-providers__defaults">
      ${!e.loading&&e.models.length===0?x`<div class="callout warning">${E(`modelProviders.defaults.noModels`)}</div>`:C}
      ${k({title:E(`modelProviders.defaults.primary`),stackedOnNarrow:!0,control:L({label:E(`modelProviders.defaults.primary`),value:e.selection.primary,options:[{value:``,label:E(`modelProviders.defaults.selectModel`),disabled:!!e.selection.primary},...q(e.models)],disabled:t||r,title:i,onChange:e.onPrimaryChange})})}
      ${k({title:J({title:E(`modelProviders.defaults.utility`),label:E(`modelProviders.defaults.utilityHelpLabel`),triggerId:Nt,body:x`
            <p>${E(`modelProviders.defaults.utilityHelpPurpose`)}</p>
            <p>${E(`modelProviders.defaults.utilityHelpAutomatic`)}</p>
          `}),stackedOnNarrow:!0,control:L({id:Mt,label:E(`modelProviders.defaults.utility`),value:e.selection.utilityModel??Y,options:[{value:Y,label:E(`quickSettings.model.fastModes.auto`)},{value:``,label:E(`modelProviders.defaults.disabled`)},...q(e.models)],disabled:t||r,title:i,onChange:t=>e.onUtilityChange(t===Y?null:t)})})}
      ${k({title:E(`modelProviders.defaults.fallback`),stackedOnNarrow:!0,control:L({label:E(`modelProviders.defaults.fallback`),value:s,options:[{value:``,label:E(`modelProviders.defaults.noFallback`)},...q(e.models.filter(t=>U(t)!==e.selection.primary))],disabled:t||r||!e.selection.primary,title:i,onChange:t=>e.onFallbackChange(t||null)})})}
      ${k({title:J({title:E(`quickSettings.model.thinking`),label:E(`modelProviders.defaults.thinkingHelpLabel`),triggerId:Pt,body:x`<p>${E(`modelProviders.defaults.thinkingHelp`)}</p>`}),stackedOnNarrow:!0,control:x`
          ${ke({value:e.thinkingLevel??``,options:[{value:``,label:kt({label:E(`quickSettings.model.default`),help:E(`modelProviders.defaults.thinkingDefaultHelp`)})},...a.map(e=>({value:e,label:It.has(e)?E(`quickSettings.model.thinkingLevels.${e}`):De(e)}))],disabled:r||n,onChange:(t,n)=>t===``?e.onThinkingReset():e.onThinkingChange(t,n),onReselect:t=>{t===``&&e.thinkingOverridden&&e.onThinkingReset()}})}
        `})}
      ${k({title:J({title:E(`quickSettings.model.fastMode`),label:E(`modelProviders.defaults.fastModeHelpLabel`),triggerId:Ft,body:x`<p>${E(`modelProviders.defaults.fastModeHelp`)}</p>`}),stackedOnNarrow:!0,control:x`
          ${ke({value:o,options:[{value:``,label:kt({label:E(`quickSettings.model.default`),help:E(`modelProviders.defaults.fastModeDefaultHelp`)})},{value:`auto`,label:E(`quickSettings.model.fastModes.auto`)},{value:`on`,label:E(`quickSettings.model.fastModes.on`)},{value:`off`,label:E(`quickSettings.model.fastModes.off`)}],disabled:r||n,onChange:t=>{t===``?e.onFastModeReset():t!==o&&e.onFastModeChange(At(t))},onReselect:t=>{t===``&&e.fastModeOverridden&&e.onFastModeReset()}})}
        `})}
      ${e.canMutate&&e.message?x`<div
              class="callout ${e.message.kind}"
              role=${e.message.kind===`error`?`alert`:`status`}
            >
              ${e.message.text}
            </div>`:C}
      ${e.canMutate&&e.message?.warning?x`<div class="callout warning" role="status">${e.message.warning}</div>`:C}
    </div>
  `;return A({title:E(`modelProviders.defaults.title`),description:E(`modelProviders.defaults.subtitle`)},c)}var Y,Mt,Nt,Pt,Ft,X,It;function Lt(){return(Lt=e((()=>{b(),He(),Ke(),D(),Xe(),F(),w(),Me(),W(),Y=`__openclaw_automatic_utility__`,Mt=`model-providers-utility-model`,Nt=`model-providers-utility-help`,Pt=`model-providers-thinking-help`,Ft=`model-providers-fast-mode-help`,X=Ue.filter(e=>e!==`minimal`),It=new Set(X)})))()}function Rt(e){return e.email||e.displayName||e.profileId}function zt(e){switch(e.source){case`config`:return E(`modelProviders.profiles.sourceConfig`);case`external`:return e.displayName||E(`modelProviders.profiles.sourceExternal`);case`inherited`:return E(`modelProviders.profiles.sourceInherited`);case`saved`:return E(`modelProviders.profiles.sourceSaved`);default:return}}function Bt(e){if(e.apiKey?.source===`config`)return E(`modelProviders.credentials.configKey`);if(e.apiKey?.source===`env`)return e.apiKey.envVar?E(`modelProviders.credentials.envKeyNamed`,{name:e.apiKey.envVar}):E(`modelProviders.credentials.envKey`)}function Vt(e){return E(e===`auth-config`?`modelProviders.profiles.priorityManagedByAuth`:`modelProviders.profiles.priorityManagedByProvider`)}function Ht(e){let t=[],n=zt(e);return n&&t.push(n),e.email&&e.displayName&&e.displayName!==n?t.push(e.displayName):!n&&Rt(e)!==e.profileId&&t.push(e.profileId),e.lastUsedAt&&t.push(E(`modelProviders.profiles.lastUsed`,{time:m(Date.now()-e.lastUsedAt)})),t.join(` · `)}function Ut(e){let t=(Rt(e).split(`@`)[0]??``).split(/[^a-z0-9]+/iu).filter(Boolean);return(t.length>1?`${t[0]?.[0]??``}${t.at(-1)?.[0]??``}`:t[0]?.slice(0,2)??``).toLocaleUpperCase()||`?`}function Wt(e){if(e.externallyManaged&&(e.status===`expired`||e.status===`expiring`))return I({kind:`ok`,label:E(`modelProviders.status.ready`)});switch(e.status){case`ok`:case`static`:return I({kind:`ok`,label:E(`modelProviders.status.ready`)});case`expiring`:return I({kind:`warn`,label:E(`modelProviders.status.expiring`)});case`expired`:return I({kind:`danger`,label:E(`modelProviders.status.expired`)});default:return I({kind:`muted`,label:E(`modelProviders.status.missing`)})}}function Gt(e,t){return e.profiles.filter(n=>(e.profileProviderIds[n.profileId]??e.id)===t)}function Kt(e,t){return e.logoutTargets.find(e=>e.profileIds.includes(t))?.provider}function qt(e,t){let n=new Set(e.map(e=>e.profileId));return[...t.filter(e=>n.delete(e)),...e.flatMap(e=>n.delete(e.profileId)?[e.profileId]:[])]}function Jt(e,t){if(e.length!==t.length)return!1;let n=new Set(e.map(e=>e.profileId));return n.size===e.length&&t.every(e=>n.delete(e))}function Yt(e,t){return[...new Set(e.profiles.map(t=>e.profileProviderIds[t.profileId]??e.id))].map(n=>{let r=Gt(e,n),i=t[n]??e.profileOrders[n]??[],a=e.profileOrderLocks[n],o=Jt(r,i),s=e.profileOrderStoredProviders.includes(n),c=t[n]!==void 0||e.profileOrderExplicitProviders.includes(n),l=a?Vt(a):o?void 0:E(s?`modelProviders.profiles.partialStoredOrder`:`modelProviders.profiles.partialOrder`),u=new Map(r.map(e=>[e.profileId,e]));return{provider:n,order:i,lock:a,complete:o,stored:s,explicit:c,explanation:l,profiles:qt(r,i).flatMap(e=>{let t=u.get(e);return t?[t]:[]})}})}function Xt(e,t){return[...e.querySelectorAll(t)]}function Zt(e){e.classList.remove(tn);for(let t of Xt(e,`.model-providers__profile`))t.classList.remove(en),t.style.removeProperty(`translate`)}function Qt(e){if(!e.canMove||e.event.button!==0)return;let t=e.event.currentTarget;if(!(t instanceof HTMLElement))return;let n=t.closest(`.model-providers__profile`),r=t.closest(`.model-providers__profiles`);if(!n||!r)return;let i=r.getBoundingClientRect().top,a=Xt(r,`.model-providers__profile`).filter(t=>t.dataset.profileProvider===e.provider).map(e=>({element:e,bounds:e.getBoundingClientRect()})),o=a.find(e=>e.element===n);if(!o)return;let s=a.filter(e=>e!==o),c,l=`before`;e.event.preventDefault(),r.classList.add(tn),n.classList.add(en);try{t.setPointerCapture?.(e.event.pointerId)}catch{}let u=t=>{if(t.pointerId!==e.event.pointerId)return;let u=i-r.getBoundingClientRect().top,d=t.clientY-e.event.clientY+u;n.style.translate=`${t.clientX-e.event.clientX}px ${d}px`;let f=document.elementFromPoint(t.clientX,t.clientY),p=f?.closest(`.model-providers__profile`),m=t.clientY+u,h=f&&r.contains(f)&&(!p||p.dataset.profileProvider===e.provider)&&a.some(({bounds:e})=>t.clientX>=e.left&&t.clientX<=e.right&&m>=e.top&&m<=e.bottom),g=(d>0?o.bounds.bottom:o.bounds.top)+d;c=h?s.find(({bounds:e})=>g<e.top+e.height/2):void 0,l=c?`before`:`after`,h&&!c&&(c=s.at(-1));let _=c?ae(a,o,c,l):a;_.indexOf(o)===a.indexOf(o)&&(c=void 0);let v=a[0]?.bounds.top??0;for(let e of _)e!==o&&(e.element.style.translate=`0px ${v-e.bounds.top}px`),v+=e.bounds.height},d=(n,i)=>{if(n.pointerId!==e.event.pointerId)return;u(n);let a=c?.element.dataset.profileId;Zt(r),t.removeEventListener(`pointermove`,f),t.removeEventListener(`pointerup`,p),t.removeEventListener(`pointercancel`,m),t.removeEventListener(`lostpointercapture`,m),document.removeEventListener(`keydown`,h,!0);try{t.releasePointerCapture?.(e.event.pointerId)}catch{}i&&a&&e.move(a,l)},f=e=>u(e),p=e=>d(e,!0),m=e=>d(e,!1),h=t=>{t.key===`Escape`&&(t.preventDefault(),t.stopPropagation(),d(e.event,!1))};t.addEventListener(`pointermove`,f),t.addEventListener(`pointerup`,p),t.addEventListener(`pointercancel`,m),t.addEventListener(`lostpointercapture`,m),document.addEventListener(`keydown`,h,!0)}function $t(e,t){if(e.profiles.length===0)return C;let n=Yt(e,t.profileOrders),r=n.flatMap(e=>e.profiles.map(t=>({group:e,profile:t}))),i=n.some(e=>!e.lock&&e.complete&&e.order.length>1),a=[...new Set(n.flatMap(e=>e.explanation?[e.explanation]:[]))],o=Bt(e);return x`
    <section class="model-providers__profiles" aria-label=${E(`modelProviders.profiles.title`)}>
      <div class="model-providers__profiles-heading">
        <div class="model-providers__profiles-heading-copy">
          <strong>${E(`modelProviders.profiles.title`)}</strong>
          <span
            >${E(r.length===1?`modelProviders.profiles.accountOne`:`modelProviders.profiles.accounts`,{count:String(r.length)})}${o?` · ${o}`:``}</span
          >
          ${i?x`<span>${E(`modelProviders.profiles.reorderHint`)}</span>`:C}
          ${a.map(e=>x`<span>${e}</span>`)}
        </div>
        <div class="model-providers__profiles-heading-actions">
          ${e.profileOrderStoredProviders.map(n=>x`<button
              type="button"
              class="btn btn--sm btn--ghost"
              ?disabled=${!t.canMutate}
              title=${t.canMutate?E(`modelProviders.profiles.resetOrderHint`):t.mutationBlockedReason??``}
              @click=${()=>t.onProfileOrderChange(e.id,n,null)}
            >
              ${E(`modelProviders.profiles.resetOrder`)}
            </button>`)}
          <button type="button" class="btn btn--sm" @click=${t.onOpenModelSetup}>
            ${E(`modelProviders.profiles.addAccount`)}
          </button>
        </div>
      </div>
      <div class="model-providers__profile-list" role="list">
        ${ce(r,({profile:e})=>e.profileId,({profile:n,group:r})=>{let{provider:i,order:a,complete:o,lock:s,stored:c,explicit:l}=r,u=a.indexOf(n.profileId),d=t.canMutate&&!s&&o&&a.length>1&&u>=0,f=!s&&(o||c)&&a.length>1,p=Rt(n),m=Kt(e,n.profileId),h=E(`modelProviders.logout.actionFor`,{account:p}),g=t.canMutate?h:t.mutationBlockedReason??``,_=t.canMutate?r.explanation??``:t.mutationBlockedReason??``,v=(r,o)=>{d&&t.onProfileOrderChange(e.id,i,ae(a,n.profileId,r,o))},y=(e,t)=>{let n=a[u+t];if(!d||!n)return;let r=e.currentTarget,i=r instanceof HTMLButtonElement&&document.activeElement===r;v(n,t<0?`before`:`after`),i&&queueMicrotask(()=>{r.isConnected&&document.activeElement===document.body&&r.focus({preventScroll:!0})})};return x`
              <div
                class="model-providers__profile"
                role="listitem"
                data-profile-id=${n.profileId}
                data-profile-provider=${i}
              >
                ${f?x`<button
                        type="button"
                        class="model-providers__profile-grip"
                        ?disabled=${!d}
                        aria-label=${E(`modelProviders.profiles.reorder`,{account:p,position:String(u+1)})}
                        aria-keyshortcuts=${d?`ArrowUp ArrowDown`:C}
                        title=${_||E(`modelProviders.profiles.reorderHint`)}
                        @pointerdown=${e=>Qt({event:e,canMove:d,provider:i,move:v})}
                        @keydown=${e=>{(e.key===`ArrowUp`||e.key===`ArrowDown`)&&(e.preventDefault(),y(e,e.key===`ArrowUp`?-1:1))}}
                      >
                        ${T.gripVertical}
                      </button>`:x`<span aria-hidden="true"></span>`}
                <span class="model-providers__profile-avatar" aria-hidden="true"
                  >${Ut(n)}</span
                >
                <span class="model-providers__profile-copy">
                  <strong>${p}</strong>
                  <span>${Ht(n)}</span>
                </span>
                <span class="model-providers__profile-status">${Wt(n)}</span>
                <span class="model-providers__profile-actions">
                  ${l&&o&&u>=0?x`<span
                          class="model-providers__profile-position"
                          aria-label=${E(`modelProviders.profiles.priority`,{position:String(u+1)})}
                          title=${E(`modelProviders.profiles.priority`,{position:String(u+1)})}
                          >${u+1}</span
                        >`:C}
                  ${n.logoutSupported===!0&&m?x`<button
                          type="button"
                          class="model-providers__profile-logout"
                          aria-label=${h}
                          title=${g}
                          ?disabled=${!t.canMutate||t.busy[`logout:${e.id}`]}
                          @click=${()=>t.onRequestLogout({cardId:e.id,label:p,target:{provider:m,profileIds:[n.profileId]}})}
                        >
                          ${nn}
                        </button>`:C}
                </span>
              </div>
            `})}
      </div>
    </section>
  `}var en,tn,nn;function rn(){return(rn=e((()=>{b(),le(),_e(),D(),F(),w(),Ge(),v(),We(),en=`model-providers__profile--dragging`,tn=`model-providers__profiles--sorting`,nn=ve(se` <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
  <polyline points="16 17 21 12 16 7" />
  <line x1="21" x2="9" y1="12" y2="12" />`)})))()}function an(e){let t=e.auth;if(!t)return C;let n=E(cn[t.kind]),r=t.expiryLabel?E(`modelProviders.expiresIn`,{time:t.expiryLabel}):void 0;return x`
    <span title=${r??n}>
      ${I({kind:ln[t.kind],label:n})}
    </span>
  `}function on(e){return e.hasConfigApiKey||!!e.apiKey||e.profiles.length>0}function Z(e){return e.catalogStatus===`ready`&&e.auth?.kind!==`expired`&&e.auth?.kind!==`missing`&&e.auth?.kind!==`expiring`}function sn(e){return e.auth?.kind===`expired`||e.auth?.kind===`missing`||e.auth?.kind===`expiring`?an(e):e.catalogStatus===`auth-rejected`?I({kind:`danger`,label:E(`modelProviders.status.denied`)}):e.catalogStatus===`unavailable`?I({kind:`warn`,label:E(`common.failed`)}):on(e)?Z(e)&&e.availableModelCount>0?I({kind:`ok`,label:E(`modelProviders.status.ready`)}):Z(e)?I({kind:`muted`,label:E(`modelProviders.status.ok`)}):I({kind:`muted`,label:E(`modelProviders.status.configured`)}):an(e)}var cn,ln;function un(){return(un=e((()=>{b(),F(),w(),cn={ok:`modelProviders.status.ok`,expiring:`modelProviders.status.expiring`,expired:`modelProviders.status.expired`,missing:`modelProviders.status.missing`,"api-key":`modelProviders.status.apiKey`},ln={ok:`ok`,expiring:`warn`,expired:`danger`,missing:`danger`,"api-key":`muted`}})))()}function Q(e){return!e.canMutate||e.configBusy}function dn(e){return e?x`
    <div class="callout ${e.kind}" role=${e.kind===`error`?`alert`:`status`}>
      ${e.text}
    </div>
    ${e.warning?x`<div class="callout warning" role="status">${e.warning}</div>`:C}
  `:C}function fn(e){return e.modelCount===0?null:e.availableModelCount<e.modelCount?E(`modelProviders.modelsAvailable`,{available:String(e.availableModelCount),count:String(e.modelCount)}):e.modelCount===1?E(`modelProviders.modelOne`):E(`modelProviders.models`,{count:String(e.modelCount)})}function pn(e,t){let n=e.localCost;return!n||n.totalTokens===0&&n.totalCost===0?C:x`
    <div class="model-providers__local-cost">
      <div class="provider-usage-billing-row">
        <span>${E(`modelProviders.localCost`,{days:String(t)})}</span>
        <strong>${te(n.totalCost)}</strong>
      </div>
      <div class="model-providers__local-cost-detail">
        ${E(`modelProviders.localCostDetail`,{tokens:d(n.totalTokens),sessions:String(n.sessionCount)})}
      </div>
    </div>
  `}function mn(e,t){let n=e.profiles.filter(e=>e.type===`oauth`).length,r=e.profiles.filter(e=>e.type===`token`).length,i=e.profiles.filter(e=>e.type===`api_key`).length,a=[];return n>0&&a.push(E(`modelProviders.credentials.oauth`,{count:String(n)})),r>0&&a.push(E(`modelProviders.credentials.tokenProfiles`,{count:String(r)})),e.apiKey?.source===`config`?a.push(E(`modelProviders.credentials.configKey`)):e.apiKey?.source===`env`?a.push(e.apiKey.envVar?E(`modelProviders.credentials.envKeyNamed`,{name:e.apiKey.envVar}):E(`modelProviders.credentials.envKey`)):i>0&&a.push(E(`modelProviders.credentials.profileKey`,{count:String(i)})),x`
    <div class="model-providers__credentials">
      <span>${E(`modelProviders.credentials.label`,{agent:t})}</span>
      <strong
        >${a.length>0?a.join(` · `):E(`modelProviders.credentials.none`)}</strong
      >
    </div>
  `}function hn(e){if(!e)return C;let t=e.status===`ok`&&e.results.some(e=>e.status!==`ok`),n=t?`warning`:e.status===`ok`?`success`:`error`;return x`
    <div class="model-providers__probe model-providers__probe--${n}" role="status">
      <div class="model-providers__probe-summary">
        <strong
          >${E(t?`modelProviders.probe.status.partial`:`modelProviders.probe.status.${e.status}`)}</strong
        >
        ${e.latencyMs===void 0?C:x`<span
                >${E(`modelProviders.probe.latency`,{ms:String(e.latencyMs)})}</span
              >`}
      </div>
      ${e.error?x`<div>${f(e.error)}</div>`:C}
      ${e.results.map(e=>x`
          <div class="model-providers__probe-target">
            <span>${e.label}</span>
            <span>
              ${E(`modelProviders.probe.status.${e.status}`)}${e.latencyMs===void 0?``:` · ${E(`modelProviders.probe.latency`,{ms:String(e.latencyMs)})}`}
            </span>
            ${e.error?x`<small>${f(e.error)}</small>`:C}
          </div>
        `)}
    </div>
  `}function gn(e,t){if(t.keyEditorProvider!==e.id)return C;let n=!!t.busy[`key:${e.id}`],r=e.apiKeySupported===!1||!!(e.configAuthMode&&e.configAuthMode!==`api-key`),i=Q(t);return x`
    <div class="model-providers__inline-form">
      <label class="field">
        <span>${E(`modelProviders.apiKey.label`)}</span>
        <input
          type="password"
          autocomplete="off"
          placeholder=${e.apiKey?.source===`config`?E(`modelProviders.apiKey.replacePlaceholder`):E(`modelProviders.apiKey.placeholder`)}
          .value=${t.keyDraft}
          ?disabled=${n||i||r}
          @input=${e=>t.onKeyDraftChange(e.target.value)}
        />
      </label>
      <div class="model-providers__form-actions">
        <button
          class="btn primary btn--sm"
          ?disabled=${n||i||r||!t.keyDraft.trim()}
          @click=${()=>t.onSaveKey(e.id,e.configKey??e.id)}
        >
          ${E(n?`modelProviders.saving`:`common.save`)}
        </button>
        <button class="btn btn--sm" ?disabled=${n} @click=${()=>t.onCloseKeyEditor()}>
          ${E(`common.cancel`)}
        </button>
      </div>
    </div>
  `}function _n(e,t){let n=e.credentialProviderIds.length?e.credentialProviderIds:[e.id],r=e.hasConfigApiKey||!!e.apiKey||e.profiles.length>0,i=!!t.busy[`probe:${e.id}`],a=!!t.busy[`key:${e.id}`],o=t.mutationBlockedReason??``,s=!!(e.configAuthMode&&e.configAuthMode!==`api-key`),c=e.apiKeySupported===!1,l=Q(t),u=s?E(`modelProviders.apiKey.authModeBlocked`,{mode:e.configAuthMode??``}):o;return x`
    <div class="model-providers__card-actions">
      ${r?x`
              <button
                class="btn btn--sm"
                ?disabled=${i||!t.canMutate||!t.probeAvailable}
                title=${t.probeAvailable?o:E(`modelProviders.probe.unavailable`)}
                @click=${()=>t.onProbe(e.id,n)}
              >
                ${E(i?`modelProviders.probe.testing`:`modelProviders.probe.test`)}
              </button>
            `:C}
      ${c?C:x`
              <button
                class="btn btn--sm"
                ?disabled=${a||l||s}
                title=${u}
                @click=${()=>t.onOpenKeyEditor(e.id)}
              >
                ${e.hasConfigApiKey?E(`modelProviders.apiKey.replace`):E(`modelProviders.apiKey.set`)}
              </button>
            `}
      ${e.hasConfigApiKey?x`
              <button
                class="btn btn--sm danger"
                ?disabled=${a||l||s}
                title=${u}
                @click=${()=>t.onRemoveKey(e.id,e.configKey??e.id)}
              >
                ${E(`modelProviders.apiKey.remove`)}
              </button>
            `:C}
    </div>
  `}function vn(e,t){let n=fn(e),r=t.messages[`key:${e.id}`]??t.messages[e.id];return x`
    <div
      class="settings-row settings-row--stacked model-providers__row"
      data-provider-id=${e.id}
    >
      <div class="model-providers__head">
        <div class="model-providers__identity">
          ${Ae(e.id,{className:`model-providers__icon`})}
          <div class="settings-row__text">
            <span class="settings-row__title">${e.displayName}</span>
            <span class="settings-row__desc"
              >${e.id}${n?x` · ${n}`:C}</span
            >
          </div>
        </div>
        <div class="settings-row__control">
          ${e.usage?.plan?Ee(e.usage.plan):C}
          ${sn(e)}
        </div>
      </div>
      ${e.profiles.length>0&&t.canViewProfiles?$t(e,{busy:t.busy,canMutate:t.canMutate&&!t.configBusy,mutationBlockedReason:t.mutationBlockedReason,profileOrders:t.profileOrders,onOpenModelSetup:t.onOpenModelSetup,onProfileOrderChange:t.onProfileOrderChange,onRequestLogout:t.onRequestLogout}):mn(e,t.credentialAgentLabel)}
      <div
        class="model-providers__global-metrics"
        aria-busy=${t.supplementalLoading?`true`:`false`}
      >
        <div class="model-providers__global-metrics-title">${E(`modelProviders.globalUsage`)}</div>
        ${e.usage?st(e.usage):x`<div class="model-providers__no-stats">
                ${E(t.supplementalLoading?`common.loading`:`modelProviders.noStats`)}
              </div>`}
        ${pn(e,t.costDays)}
      </div>
      ${_n(e,t)} ${gn(e,t)}
      ${hn(t.probeResults[e.id])} ${dn(r)}
    </div>
  `}function yn(e){let t=!!e.busy.add,n=Q(e)||t,r=x`
    ${e.unconfiguredProviders.length===0?M(E(`modelProviders.add.none`)):C}
    ${e.addProviderOpen?x`
            <div class="settings-row settings-row--stacked">
              <div class="model-providers__add-form">
                <label class="field">
                  <span>${E(`modelProviders.add.provider`)}</span>
                  <select
                    class="settings-select"
                    .value=${e.addProviderId}
                    ?disabled=${n}
                    @change=${t=>e.onAddProviderIdChange(t.target.value)}
                  >
                    <option value="">${E(`modelProviders.add.selectProvider`)}</option>
                    ${e.unconfiguredProviders.map(e=>x`<option value=${e.id}>${e.displayName}</option>`)}
                  </select>
                </label>
                <label class="field">
                  <span>${E(`modelProviders.apiKey.label`)}</span>
                  <input
                    type="password"
                    autocomplete="off"
                    placeholder=${E(`modelProviders.apiKey.placeholder`)}
                    .value=${e.addProviderKey}
                    ?disabled=${n}
                    @input=${t=>e.onAddProviderKeyChange(t.target.value)}
                  />
                </label>
                <button
                  class="btn primary"
                  ?disabled=${n||!e.addProviderId||!e.addProviderKey.trim()}
                  @click=${e.onAddProvider}
                >
                  ${e.busy.add?E(`modelProviders.saving`):E(`modelProviders.add.save`)}
                </button>
              </div>
              ${dn(e.messages.add)}
            </div>
          `:C}
  `;return A({title:E(`modelProviders.add.title`),description:E(`modelProviders.add.subtitle`),actions:x`
        <button
          class="btn btn--sm"
          ?disabled=${t||!e.addProviderOpen&&(Q(e)||e.unconfiguredProviders.length===0)}
          title=${e.mutationBlockedReason??``}
          @click=${e.onAddProviderToggle}
        >
          ${e.addProviderOpen?E(`common.cancel`):E(`modelProviders.add.action`)}
        </button>
      `},r)}function bn(e){let t=e.cards.some(Z);return x`
    <div class="model-providers__setup" data-model-readiness="model-required">
      ${A({title:E(`modelProviders.readiness.title`)},k({title:E(`modelProviders.readiness.heading`),description:E(t?`modelProviders.readiness.signedInNoModels`:`modelProviders.readiness.notConfigured`),control:x`
            ${I({kind:`warn`,label:E(t?`modelProviders.readiness.noModels`:`modelProviders.readiness.modelRequired`)})}
            <button class="btn primary" @click=${e.onOpenModelSetup}>
              ${E(t?`modelProviders.readiness.chooseProvider`:`modelSetup.heading`)}
            </button>
          `}))}
    </div>
  `}function xn(e){return x`
    <div class="settings-row">
      <div class="settings-row__text">
        <span class="settings-row__desc provider-usage-error">${e}</span>
      </div>
    </div>
  `}function Sn(e){if(!e.connected)return j(N(M(E(`modelProviders.disconnected`))));if(e.loading)return j(x`
      <div id=${re.behavior}>
        ${jt({models:e.configuredModels,selection:e.defaultModels,thinkingLevel:e.thinkingLevel,thinkingOverridden:e.thinkingOverridden,fastMode:e.fastMode,fastModeOverridden:e.fastModeOverridden,loading:!0,canMutate:!Q(e),mutationBlockedReason:e.mutationBlockedReason,busy:e.busy,message:e.messages.defaults,onPrimaryChange:e.onPrimaryChange,onFallbackChange:e.onFallbackChange,onUtilityChange:e.onUtilityChange,onThinkingChange:e.onThinkingChange,onThinkingReset:e.onThinkingReset,onFastModeChange:e.onFastModeChange,onFastModeReset:e.onFastModeReset})}
      </div>
      ${N(je())}
    `);let t=x`
    <div class="model-providers__provider-list">
      ${e.error?N(xn(e.error)):C}
      ${e.providerUsageFailed?N(xn(E(`usage.providerUsage.unavailable`))):C}
      ${e.cards.length===0?N(M(x`<strong>${E(`modelProviders.emptyTitle`)}</strong><br />${E(`modelProviders.emptySubtitle`)}`)):e.cards.map(t=>N(vn(t,e)))}
    </div>
  `,n=!e.configuredModels.some(e=>e.available!==!1);return j(x`
    ${n?bn(e):C}
    <div id=${re.behavior}>
      ${jt({models:e.configuredModels,selection:e.defaultModels,thinkingLevel:e.thinkingLevel,thinkingOverridden:e.thinkingOverridden,fastMode:e.fastMode,fastModeOverridden:e.fastModeOverridden,canMutate:!Q(e),mutationBlockedReason:e.mutationBlockedReason,busy:e.busy,message:e.messages.defaults,onPrimaryChange:e.onPrimaryChange,onFallbackChange:e.onFallbackChange,onUtilityChange:e.onUtilityChange,onThinkingChange:e.onThinkingChange,onThinkingReset:e.onThinkingReset,onFastModeChange:e.onFastModeChange,onFastModeReset:e.onFastModeReset})}
    </div>
    ${A({title:E(`modelProviders.title`),count:e.cards.length,actions:x`
          ${e.updatedAt?x`<span class="model-providers__updated"
                  >${E(`modelProviders.updated`,{time:ne(e.updatedAt,{hour:`numeric`,minute:`2-digit`})})}</span
                >`:C}
          <openclaw-tooltip
            .content=${e.refreshing?E(`modelProviders.refreshing`):E(`common.refresh`)}
          >
            <button
              type="button"
              class="btn btn--icon btn--ghost btn--xs model-providers__refresh-button"
              aria-label=${e.refreshing?E(`modelProviders.refreshing`):E(`common.refresh`)}
              ?disabled=${e.refreshing}
              @click=${()=>e.onRefresh()}
            >
              ${T.refresh}
            </button>
          </openclaw-tooltip>
        `},t)}
    ${e.quickAddSupported?yn(e):C}
    ${e.providerUsageStalled?x`<div class="callout warning" role="status">${E(`usage.providerUsage.stalled`)}</div>`:C}
  `)}function Cn(){return(Cn=e((()=>{b(),D(),Ne(),ot(),F(),w(),Ge(),h(),v(),ie(),Lt(),rn(),un(),We()})))()}function wn(e){o({placement:`bottom`,...e})}var Tn,$;function En(){return(En=e((()=>{r(),ye(),b(),oe(),de(),fe(),he(),Qe(),Pe(),D(),F(),Ye(),w(),s(),we(),g(),c(),ze(),y(),p(),it(),z(),W(),tt(),bt(),wt(),Et(),Ot(),Cn(),Tn=`https://docs.openclaw.ai/concepts/model-providers`,$=class extends l{constructor(...e){super(...e),this.loaderPending=!1,this.data=null,this.busy={},this.messages={},this.probeResults={},this.probeUnsupported=!1,this.keyEditorProvider=null,this.keyDraft=``,this.logoutConfirmation=null,this.profileOrders={},this.addProviderOpen=!1,this.addProviderId=``,this.addProviderKey=``,this.defaultsDraft=null,this.selectedAgentId=``,this.dataClient=null,this.loadClient=null,this.routeDataObserved=!1,this.agentEpoch=0,this.probeEpochs=new Map,this.refreshTask=new be(this,{autoRun:!1,task:([e,t,n],{signal:r})=>!e||!t?Se:$e(e,{agentId:t,...n?{refresh:!0}:{},signal:r}).then(t=>({client:e,data:t})),onComplete:({client:e,data:t})=>{this.loadClient=null,this.supplemental.adoptCoreData(e,t)},onError:()=>{this.loadClient=null}}),this.refreshPolicy=new at({isLoading:()=>this.loaderPending||!this.routeDataObserved||this.loadClient!==null||this.supplemental.usageLoading,reload:()=>this.supplemental.loadUsage(),onIncompleteUsageExhausted:()=>this.requestUpdate()}),this.supplemental=new Dt(this,{isCoreLoading:()=>this.loaderPending,getGateway:()=>this.gateway,getData:()=>this.data,getDataClient:()=>this.dataClient,setData:e=>this.data=e,setDataClient:e=>this.dataClient=e,refreshPolicy:this.refreshPolicy}),this.gateway=new Ve(this,{getGateway:()=>this.context?.gateway,onIdentityChange:()=>this.resetConnectionState(),invalidateRequests:()=>this.invalidateRequests(),ensureInitialData:()=>this.ensureInitialData(),onSnapshot:e=>{e.initial?this.resetConnectionState():e.connectionChanged&&!e.identityChanged&&this.resetConnectionState({preserveVisibleData:!0}),e.becameConnected&&!e.initial&&this.routeDataObserved&&!this.loaderPending&&this.refresh({force:!1})},onPageActivation:()=>this.refreshPolicy.request(`focus`)}),this.profileActions=new Tt({getAgentEpoch:()=>this.agentEpoch,getAgentId:()=>this.selectedAgentId,getClient:()=>this.context.gateway.snapshot.client,getClientEpoch:()=>this.gateway.epoch,getData:()=>this.data,getOrders:()=>this.profileOrders,setData:e=>this.data=e,setError:(e,t)=>wn({message:R(t),icon:T.alertTriangle,durationMs:12e3}),setOrders:e=>this.profileOrders=e,clearMessage:e=>this.setMessage(e,null),canMutate:()=>this.canMutate(),cancelRefresh:()=>this.cancelCoreRefresh(),refresh:()=>this.refresh({force:!0}),isCurrentClient:(e,t)=>this.gateway.isCurrent({client:e,epoch:t}),isBusy:e=>!!this.busy[e],setBusy:(e,t)=>this.setBusy(e,t),clearProbe:e=>this.clearProbe(e),setLogoutSuccess:()=>wn({message:E(`modelProviders.logout.done`),icon:T.check})}),this.subscriptions=new u(this).watch(()=>this.context?.runtimeConfig,(e,t)=>e.subscribe(t),e=>{!e.state.configSnapshot&&!e.state.configLoading&&e.ensureLoaded().catch(()=>void 0),this.profileActions.flushPendingOrders()}).watch(()=>this.context?.overlays,(e,t)=>e.subscribe(t),()=>this.profileActions.flushPendingOrders()).watch(()=>this.context?.agents,(e,t)=>e.subscribe(t),()=>this.syncSelectedAgent()).effect(()=>this.context?.agentSelection,e=>e.subscribe(()=>this.syncSelectedAgent())),this.setBusy=(e,t)=>this.busy=K(this.busy,e,t?!0:null),this.setMessage=(e,t)=>this.messages=K(this.messages,e,t)}disconnectedCallback(){this.profileActions.resetOrders(),this.subscriptions.clear(),this.refreshPolicy.dispose(),super.disconnectedCallback()}willUpdate(e){if((e.has(`routeData`)||e.has(`loaderPending`))&&this.routeData!==void 0){this.routeDataObserved=!0;let e=this.resolveSelectedAgentId();this.setSelectedAgent(e),(this.routeData.agentId??``)===e&&this.gateway.isRouteDataCurrent(this.routeData)?this.supplemental.adoptCoreData(this.routeData.client,this.routeData.data):(this.data=null,this.dataClient=null,this.refreshPolicy.resetPayload()),this.ensureInitialData()}}ensureInitialData(){!this.context.agents.state.agentsList&&!this.context.agents.state.agentsLoading&&!this.context.agents.state.agentsError&&this.context.agents.ensureList();let e=this.gateway.client;!this.routeDataObserved||this.loaderPending||!this.gateway.connected||!e||!this.selectedAgentId||this.loadClient!==null||this.data!==null&&this.data.updatedAt!==null&&e===this.dataClient||this.refresh({force:!1})}cancelCoreRefresh(){this.loadClient=null,this.refreshTask.run([null,this.selectedAgentId,!1])}invalidateRequests(){this.logoutConfirmation?.abort(),this.cancelCoreRefresh(),this.supplemental.invalidate()}resetConnectionState(e={}){e.preserveVisibleData||(this.data=null,this.dataClient=null),this.refreshPolicy.resetPayload(),this.resetAgentScopeState(),this.probeEpochs=new Map,this.probeUnsupported=!1,this.defaultsDraft=null}resetAgentScopeState(){this.busy={},this.messages={},this.probeResults={},this.closeKeyEditor(),this.logoutConfirmation?.abort(),this.profileActions.resetOrders(),this.addProviderOpen=!1,this.addProviderId=``,this.addProviderKey=``}resolveSelectedAgentId(){let e=this.context.agentSelection.state.selectedId;return e?a(e):``}setSelectedAgent(e){return e!==this.selectedAgentId&&(this.selectedAgentId=e,this.agentEpoch+=1,this.resetAgentScopeState(),!0)}syncSelectedAgent(){let e=this.resolveSelectedAgentId();this.setSelectedAgent(e)&&(this.invalidateRequests(),this.data=null,this.dataClient=null,this.refreshPolicy.resetPayload(),this.requestUpdate(),this.ensureInitialData())}refresh(e){if(!this.selectedAgentId)return Promise.resolve();let t=this.gateway.client;return!this.gateway.connected||!t?(this.refreshPolicy.markLoadDeferred(),Promise.resolve()):(this.supplemental.beginCoreRefresh(e.force),this.loadClient=t,this.refreshTask.run([t,this.selectedAgentId,e.force]))}mutationBlockedReason(){let e=this.context.gateway.snapshot;return e.phase===`connected`?this.context.runtimeConfig.canPatch===!0?!e.client||!this.selectedAgentId||!this.data?.config?E(`modelProviders.configUnavailable`):null:E(`modelProviders.readOnly.adminRequired`):E(`modelProviders.readOnly.disconnected`)}canMutate(){return this.mutationBlockedReason()===null&&!this.configBusy()}configBusy(){let e=this.context.runtimeConfig.state,t=this.context.overlays.snapshot;return e.configLoading||e.configSaving||e.configApplying||t.updateRunning||t.updateReconciliationPending}clearProbe(e){this.probeEpochs.set(e,(this.probeEpochs.get(e)??0)+1),this.setBusy(`probe:${e}`,!1),this.probeResults=K(this.probeResults,e,null)}async patchConfig(e){if(!this.canMutate()||this.busy[e.key])return{ok:!1};let t=this.context.gateway.snapshot.client;if(!t)return{ok:!1};let n=this.gateway.epoch,r=this.agentEpoch;return ct({runtimeConfig:this.context.runtimeConfig,agentEpoch:r,isCurrentClient:()=>this.gateway.isCurrent({client:t,epoch:n}),isCurrentAgent:()=>this.agentEpoch===r,refreshProviders:()=>this.refresh({force:!0}),setBusy:t=>this.setBusy(e.key,t),setMessage:t=>this.setMessage(e.key,t)},e)}openKeyEditor(e){this.keyEditorProvider=e,this.keyDraft=``,this.setMessage(e,null)}closeKeyEditor(){this.keyEditorProvider=null,this.keyDraft=``}async saveKey(e,t){let n=this.keyDraft.trim();if(!n)return;this.clearProbe(e),this.setMessage(e,null),this.setMessage(`key:${e}`,null);let r=await this.patchConfig({key:`key:${e}`,raw:G(t,n),note:E(`modelProviders.notes.saveKey`,{provider:e}),success:E(`modelProviders.apiKey.saved`)});r.ok&&this.agentEpoch===r.agentEpoch&&(this.setMessage(`key:${e}`,null),this.keyEditorProvider===e&&this.keyDraft.trim()===n&&this.closeKeyEditor(),this.setMessage(e,{kind:`success`,text:E(`modelProviders.apiKey.saved`),...r.warning?{warning:r.warning}:{}}))}async removeKey(e,t){this.clearProbe(e),this.setMessage(e,null),this.setMessage(`key:${e}`,null);let n=await this.patchConfig({key:`key:${e}`,raw:G(t,null),note:E(`modelProviders.notes.removeKey`,{provider:e}),success:E(`modelProviders.apiKey.removed`)});n.ok&&this.agentEpoch===n.agentEpoch&&(this.setMessage(`key:${e}`,null),this.keyEditorProvider===e&&this.closeKeyEditor(),this.setMessage(e,{kind:`success`,text:E(`modelProviders.apiKey.removed`),...n.warning?{warning:n.warning}:{}}))}async probe(e,t){let n=this.context.gateway.snapshot.client,r=`probe:${e}`;if(!n||!this.canMutate()||this.busy[r]||this.probeUnsupported)return;let i=this.gateway.epoch,a=this.selectedAgentId,o=this.agentEpoch,s=(this.probeEpochs.get(e)??0)+1;this.probeEpochs.set(e,s);let c=()=>this.gateway.isCurrent({client:n,epoch:i})&&this.agentEpoch===o&&this.selectedAgentId===a&&this.probeEpochs.get(e)===s;this.setBusy(r,!0),this.setMessage(e,null);try{let r=[];for(let e of t){if(!c())return;r.push(await n.request(`models.probe`,{provider:e,agentId:a}))}c()&&(this.probeResults={...this.probeResults,[e]:St(e,r)})}catch(t){if(!c())return;xt(t)?(this.probeUnsupported=!0,this.setMessage(e,{kind:`error`,text:E(`modelProviders.probe.unavailable`)})):this.setMessage(e,{kind:`error`,text:R(t)})}finally{c()&&this.setBusy(r,!1)}}async requestLogout(e){if(this.logoutConfirmation||!this.canMutate()||this.busy[`logout:${e.cardId}`])return;let t=new AbortController;this.logoutConfirmation=t,await Fe({title:E(`modelProviders.logout.actionFor`,{account:e.label}),message:E(`modelProviders.logout.confirm`,{provider:e.label}),confirmLabel:E(`modelProviders.logout.action`),danger:!0,signal:t.signal}).finally(()=>{this.logoutConfirmation=null})&&!t.signal.aborted&&this.canMutate()&&await this.profileActions.logout(e.cardId,e.target)}async addProvider(){let e=this.addProviderId,t=this.addProviderKey.trim();if(!e||!t)return;let n=await this.patchConfig({key:`add`,raw:G(e,t),note:E(`modelProviders.notes.addProvider`,{provider:e}),success:E(`modelProviders.add.saved`,{provider:e})});n.ok&&this.agentEpoch===n.agentEpoch&&(this.addProviderId===e&&this.addProviderKey.trim()===t&&(this.addProviderOpen=!!n.warning,n.warning||(this.addProviderId=``),this.addProviderKey=``),this.setMessage(e,{kind:`success`,text:E(`modelProviders.add.saved`,{provider:e}),...n.warning?{warning:n.warning}:{}}))}async saveDefaults(e=this.defaultsDraft){if(!e)return;let t=this.agentEpoch,n=await this.patchConfig({key:`defaults`,raw:vt(e),note:E(`modelProviders.notes.defaultModel`),success:E(`modelProviders.defaults.saved`),replacePaths:yt});this.agentEpoch===t&&this.defaultsDraft===e&&(!n.ok||!n.warning)&&(this.defaultsDraft=null)}render(){let e=this.context.gateway.snapshot,t=e.hello?.auth,n=this.context.agents.state,r=n.agentsList?.agents??[],o=n.agentsList?null:n.agentsError,s=r.find(e=>a(e.id)===this.selectedAgentId),c=s?_(s):this.selectedAgentId,l=this.data??rt,u=mt(l.config),d=this.context.runtimeConfig.state,f=i(d.configForm??d.configSnapshot?.config)??i(l.config)??{},p=i(i(f.agents)?.defaults),m={...u.defaults,..._t(p)},h=this.defaultsDraft??m,g=e=>{this.defaultsDraft={...this.defaultsDraft??m,...e},this.setMessage(`defaults`,null),this.saveDefaults(this.defaultsDraft)},v=ft({...l,providerUsage:l.providerUsage?.ok?l.providerUsage.value:null,configProviderIds:u.providerIds,configApiKeyProviderIds:u.apiKeyProviderIds,configProviderAuthModes:u.providerAuthModes}),y=new Set([...u.providerIds,...l.authStatus?.providers.filter(e=>!!e.apiKey||e.profiles.length>0).map(e=>e.provider)??[]]),ee=Ce(e,`models.probe`),te=Sn({connected:e.phase===`connected`,loading:e.phase===`connected`&&this.data===null&&!o,refreshing:this.loadClient!==null,error:o??l.error??l.catalogError,providerUsageFailed:l.providerUsage?.ok===!1,supplementalLoading:this.loaderPending||this.supplemental.loading,updatedAt:l.updatedAt,costDays:30,credentialAgentLabel:c,cards:v,configuredModels:pt(l.models,h),defaultModels:h,thinkingLevel:h.thinkingLevel,thinkingOverridden:h.thinkingOverridden,fastMode:h.fastMode,fastModeOverridden:h.fastModeOverridden,configBusy:this.configBusy(),quickAddSupported:l.authStatus?.providerCapabilities!==void 0,unconfiguredProviders:ht(l.authStatus?.providerCapabilities,y),canViewProfiles:e.phase===`connected`&&t?.scopes!==void 0&&me(t),canMutate:this.canMutate(),mutationBlockedReason:this.mutationBlockedReason(),providerUsageStalled:this.refreshPolicy.incompleteUsageExhausted,probeAvailable:!this.probeUnsupported&&ee!==!1,busy:this.busy,messages:this.messages,probeResults:this.probeResults,keyEditorProvider:this.keyEditorProvider,keyDraft:this.keyDraft,profileOrders:this.profileOrders,addProviderOpen:this.addProviderOpen,addProviderId:this.addProviderId,addProviderKey:this.addProviderKey,onRefresh:()=>void(o?this.context.agents.refreshList():this.refresh({force:!0})),onOpenKeyEditor:e=>this.openKeyEditor(e),onCloseKeyEditor:()=>this.closeKeyEditor(),onKeyDraftChange:e=>this.keyDraft=e,onSaveKey:(e,t)=>void this.saveKey(e,t),onRemoveKey:(e,t)=>void this.removeKey(e,t),onProbe:(e,t)=>void this.probe(e,t),onRequestLogout:e=>void this.requestLogout(e),onProfileOrderChange:(e,t,n)=>this.profileActions.setOrder(e,t,n),onAddProviderToggle:()=>{this.addProviderOpen=!this.addProviderOpen,this.addProviderKey=``,this.setMessage(`add`,null)},onAddProviderIdChange:e=>this.addProviderId=e,onAddProviderKeyChange:e=>this.addProviderKey=e,onAddProvider:()=>void this.addProvider(),onPrimaryChange:e=>{let t=this.defaultsDraft??m;g({primary:e,fallbacks:t.fallbacks.filter(t=>t!==e)})},onFallbackChange:e=>{let t=this.defaultsDraft??m;g({fallbacks:e?[e,...t.fallbacks.slice(1).filter(t=>t!==e)]:[]})},onUtilityChange:e=>g({utilityModel:e}),onThinkingChange:e=>g({thinkingLevel:e,thinkingOverridden:!0}),onThinkingReset:()=>g({thinkingLevel:void 0,thinkingOverridden:!1}),onFastModeChange:e=>g({fastMode:e,fastModeOverridden:!0}),onFastModeReset:()=>g({fastMode:void 0,fastModeOverridden:!1}),onOpenModelSetup:()=>this.context.navigate(`model-setup`)});return x`
      ${Oe({title:ge(`model-providers`),subtitle:x`${E(`modelProviders.subtitle`)}
        ${Te(Tn)}`,actions:x`
          ${Ze({agents:r,selection:this.context.agentSelection,allowAll:!1,selectedId:this.selectedAgentId})}
          <button class="btn" @click=${()=>this.context.navigate(`model-setup`)}>
            ${T.settings}<span>${E(`modelProviders.configureModels`)}</span>
          </button>
        `})}
      ${Je(te)}
    `}},t([n({context:pe,subscribe:!0})],$.prototype,`context`,void 0),t([ue({attribute:!1})],$.prototype,`routeData`,void 0),t([ue({attribute:!1})],$.prototype,`loaderPending`,void 0),t([S()],$.prototype,`data`,void 0),t([S()],$.prototype,`busy`,void 0),t([S()],$.prototype,`messages`,void 0),t([S()],$.prototype,`probeResults`,void 0),t([S()],$.prototype,`probeUnsupported`,void 0),t([S()],$.prototype,`keyEditorProvider`,void 0),t([S()],$.prototype,`keyDraft`,void 0),t([S()],$.prototype,`profileOrders`,void 0),t([S()],$.prototype,`addProviderOpen`,void 0),t([S()],$.prototype,`addProviderId`,void 0),t([S()],$.prototype,`addProviderKey`,void 0),t([S()],$.prototype,`defaultsDraft`,void 0),t([S()],$.prototype,`selectedAgentId`,void 0),customElements.get(`openclaw-model-providers-page`)||customElements.define(`openclaw-model-providers-page`,$)})))()}En();
//# sourceMappingURL=model-providers-page-D5RCVvEx.js.map