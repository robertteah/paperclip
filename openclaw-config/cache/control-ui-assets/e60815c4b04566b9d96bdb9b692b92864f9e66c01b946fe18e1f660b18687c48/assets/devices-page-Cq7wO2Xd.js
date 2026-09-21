const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./input-dialog-CiffR3Gs.js","./input-dialog-BgWE0wd-.js","./rolldown-runtime-DkW27tQK.js","./control-ui-core-DzidtL-P.js","./control-ui-foundation-DMb6IeIq.js","./lit-runtime-vxhGQLC6.js","./control-ui-core-CaKBexnk.js","./control-ui-core-uEI6aN5p.js","./gateway-runtime-DP4whqrA.js","./control-ui-core-BRgpioGt.css","./control-ui-boot-chat-pu3gR1ly.js","./control-ui-boot-shared-nBxCfWV5.js","./control-ui-boot-shared-gfE6fZcA.js","./markdown-runtime-Bn6OdBVq.js","./control-ui-boot-shared-Cyt1Zyts.js","./control-ui-boot-shared-DW2inEkr.js","./control-ui-boot-shared-BiKnED0X.js","./control-ui-boot-shared-D2DaCK2F.js","./control-ui-boot-shared-mS3IgGsF.js","./control-ui-boot-shared-CH-OC11d.js","./control-ui-boot-shared-CibIhXHx.css","./control-ui-boot-chat-B1e-zt03.js","./config-runtime-Cr2H22l0.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Ca as t,Dt as n,Fr as r,In as i,L as a,R as o,Sa as s,Tt as c,Vn as l,_ as u,ar as d,ba as f,bi as p,bt as ee,ca as te,er as ne,ma as re,nr as m,wt as h,xi as ie}from"./control-ui-foundation-DMb6IeIq.js";import{$t as g,Ao as ae,Bs as oe,Co as se,Da as ce,Do as le,Ea as ue,Eo as de,Gc as fe,Gn as pe,Kn as me,Oo as he,Po as ge,To as _e,Vs as ve,Wt as _,Yo as ye,Zt as be,_o as xe,bo as Se,fn as Ce,fo as we,go as Te,ho as Ee,jo as De,ko as Oe,nn as ke,on as v,pn as Ae,po as je,qc as Me,qo as Ne,tn as y,wo as Pe,xo as Fe,xr as Ie,yo as b,yr as Le}from"./control-ui-core-DzidtL-P.js";import{$ as Re,K as x,Q as S,X as C,at as w,l as ze,m as Be,p as Ve,q as T,s as He,st as Ue}from"./lit-runtime-vxhGQLC6.js";import{L as E,Rn as We,Tn as Ge,h as Ke,in as qe,m as Je,nn as Ye,sn as Xe,v as Ze,x as Qe,zn as $e}from"./control-ui-core-CaKBexnk.js";import{Bt as D,Ft as O,Gt as k,It as A,Lt as et,Rt as j,Xt as tt,Yt as nt}from"./control-ui-core-uEI6aN5p.js";import{B as rt,I as it,L as M,R as N}from"./control-ui-boot-shared-nBxCfWV5.js";import{a as at,r as ot}from"./gateway-runtime-DP4whqrA.js";import{Bt as st,Er as ct,Et as lt,Ft as P,Ht as ut,Lt as F,Nt as dt,Ot as ft,co as pt,jt as mt,wr as ht,wt as I,zt as L}from"./control-ui-boot-shared-Cyt1Zyts.js";import{h as gt,l as _t,m as R,x as vt}from"./config-runtime-Cr2H22l0.js";import{Ft as yt,It as bt,Nt as xt,Pt as St}from"./control-ui-boot-chat-pu3gR1ly.js";import{Qs as Ct,Zs as wt,bs as Tt,ys as Et}from"./control-ui-boot-shared-CH-OC11d.js";import{V as Dt,c as Ot,l as kt,m as At,p as jt,s as Mt,u as Nt}from"./control-ui-boot-new-DeGMjctK.js";import{n as Pt,t as Ft}from"./desktop-focus-window-CTicLge9.js";import{n as It,t as Lt}from"./settings-workspace-IBRfeTG9.js";function Rt(e){return bt(void 0,({render:t,finish:n})=>{let r=!1,i=()=>n(),a=t=>{if(!e.secret){i();return}t.preventDefault(),!r&&(r=!0,s())},o=e.secret?`btn primary`:`btn secret-reveal__dismiss`,s=()=>{t(()=>C`
          <openclaw-modal-dialog
            label=${e.title}
            description=${e.message}
            @modal-cancel=${a}
          >
            <div class="exec-approval-card">
              <div class="secret-reveal__header">
                ${e.status===`success`?C`<span class="secret-reveal__status" aria-hidden="true"
                        >${O.check}</span
                      >`:T}
                <div class="exec-approval-title">${e.title}</div>
              </div>
              <div class="secret-reveal__body"><p>${e.message}</p></div>
              ${e.callout?C`<div class="callout info secret-reveal__callout">${e.callout}</div>`:T}
              ${e.secret?C`
                      <div class="secret-reveal__value">
                        <code class="secret-reveal__code">${e.secret}</code>
                        ${ct(e.secret,k(`common.copy`))}
                      </div>
                    `:T}
              ${r?C`<p class="secret-reveal__hint" role="status">${e.dismissHint}</p>`:T}
              ${e.note?C`<p class="secret-reveal__note">${e.note}</p>`:T}
              <div class="exec-approval-actions">
                <button type="button" class=${o} autofocus @click=${i}>
                  ${e.acknowledgeLabel}
                </button>
              </div>
            </div>
          </openclaw-modal-dialog>
        `)};s()})}function zt(){return(zt=e((()=>{x(),D(),ht(),A(),yt()})))()}function z(e){return Array.isArray(e)?e.map(e=>t(e)).filter(e=>e!==void 0):[]}function Bt(e){if(!m(e))return;let t=Object.keys(e),n=e.total,r=e.available;return t.length===2&&t.includes(`total`)&&t.includes(`available`)&&typeof n==`number`&&typeof r==`number`&&Number.isSafeInteger(n)&&Number.isSafeInteger(r)&&n>=1&&n<=1024&&r>=0&&r<=n?{total:n,available:r}:void 0}function Vt(e){if(!m(e))return;let n=e;if(n.status===`missing`&&Object.keys(n).length===1)return{status:`missing`};let r=t(n.version);return n.status===`installed`&&r&&Object.keys(n).length===2?{status:`installed`,version:r}:void 0}function Ht(e){let n=t(e.nodeId);if(!n)return null;let r=t(e.approvalState);return{nodeId:n,displayName:t(e.displayName),platform:t(e.platform),version:t(e.version),coreVersion:t(e.coreVersion),uiVersion:t(e.uiVersion),modelIdentifier:t(e.modelIdentifier),clientId:t(e.clientId),clientMode:t(e.clientMode),remoteIp:t(e.remoteIp),caps:z(e.caps),commands:z(e.commands),approvalState:r&&rn.has(r)?r:void 0,pendingRequestId:t(e.pendingRequestId),workerSlots:Bt(e.workerSlots),workerBundle:Vt(e.workerBundle),hostStats:nn.safeParse(e.hostStats).data,connected:e.connected===!0,paired:e.paired===!0,connectedAtMs:i(e.connectedAtMs),lastSeenAtMs:i(e.lastSeenAtMs),approvedAtMs:i(e.approvedAtMs)}}function Ut(e){let n=new Set;for(let r of[...e.roles??[],e.role]){let e=t(r);e&&n.add(e)}return[...n]}function Wt(...e){let t;for(let n of e)n!==void 0&&(t===void 0||n>t)&&(t=n);return t}function Gt(e,n,r,a){let o=n?Ut(n):[];r?.paired&&!o.includes(`node`)&&o.push(`node`);let s=t(n?.operatorLabel),c=t(n?.displayName)??t(r?.displayName),l=t(n?.clientId)??r?.clientId;return{id:e,name:s??c??l??e,displayName:c,clientId:l,clientMode:t(n?.clientMode)??r?.clientMode,platform:t(a?.platform)??t(n?.platform)??r?.platform,version:t(a?.version)??r?.version,modelIdentifier:t(a?.modelIdentifier)??r?.modelIdentifier,remoteIp:t(n?.remoteIp)??r?.remoteIp,roles:o,scopes:z(n?.scopes),connected:r?.connected===!0||n?.connected===!0,autoApproved:n?.approvedVia===`silent`||n?.approvedVia===`trusted-cidr`||n?.approvedVia===`ssh-verified`,lastSeenAtMs:Wt(n?.lastSeenAtMs,r?.lastSeenAtMs,r?.connectedAtMs,i(a?.ts)),approvedAtMs:Wt(n?.approvedAtMs,r?.approvedAtMs),presence:a,device:n,node:r}}function Kt(e){let t=e.displayName?.trim().toLowerCase();if(t)return`name:${t}`;let n=e.clientId?.trim().toLowerCase(),r=e.clientMode?.trim().toLowerCase();return n||r?`client:${n??``}:${r??``}`:`id:${e.id}`}function qt(e){return e.lastSeenAtMs??e.approvedAtMs??0}function Jt(e,t){if(e.connected!==t.connected)return e.connected?-1:1;let n=qt(t)-qt(e);return n===0?e.id.localeCompare(t.id):n}function Yt(e,t){let n=Jt(e.primary,t.primary);return n===0?e.name.localeCompare(t.name):n}function Xt(e){let n=new Map;for(let t of e.nodes){let e=Ht(t);e&&n.set(e.nodeId,e)}let r=new Map;for(let n of e.presence??[])for(let e of[n.deviceId,n.instanceId]){let i=t(e)?.toLowerCase();i&&r.set(i,n)}let i=[],a=new Set;for(let o of e.paired){let e=t(o.deviceId);!e||a.has(e)||(a.add(e),i.push(Gt(e,o,n.get(e),r.get(e.toLowerCase()))))}for(let[e,t]of n)a.has(e)||i.push(Gt(e,void 0,t,r.get(e.toLowerCase())));let o=new Map;for(let e of i){let t=Kt(e),n=o.get(t);n?n.push(e):o.set(t,[e])}let s=[];for(let[e,t]of o){let n=t.toSorted(Jt),r=n[0];r&&s.push({key:e,name:r.name,primary:r,duplicates:n.slice(1)})}return s.toSorted(Yt)}function Zt(e){return e.flatMap(e=>e.duplicates.filter(e=>!e.connected&&(e.autoApproved||e.device!==void 0&&e.device.approvedVia===void 0)))}function Qt(e){return e.find(e=>t(e.mode)?.toLowerCase()===`gateway`)}function $t(e,n){let r=new Set;for(let e of n)for(let t of[e.primary,...e.duplicates])r.add(t.id.toLowerCase());return e.filter(e=>{if(t(e.mode)?.toLowerCase()===`gateway`||t(e.reason)?.toLowerCase()===`disconnect`)return!1;let n=[e.deviceId,e.instanceId].map(e=>t(e)?.toLowerCase()).filter(e=>e!==void 0);return n.length===0&&!t(e.host)&&!t(e.mode)?!1:!n.some(e=>r.has(e))})}function en(e){let t=e.roles.includes(`node`),n=e.roles.filter(e=>e!==`node`);return{removeNode:t||e.node?.paired===!0,removeDevice:!!e.device&&(n.length>0||e.roles.length===0)}}function tn(e){let t=new Map;for(let n of e){let e=(n.deviceId??n.instanceId)?.trim().toLowerCase();if(!e||n.mode?.trim().toLowerCase()===`gateway`)continue;let r=n.roles?.includes(`node`)?`${e}:node`:e;t.set(r,n.reason?.trim().toLowerCase()===`disconnect`?`offline`:`connected`)}return JSON.stringify([...t].toSorted(([e],[t])=>e.localeCompare(t)))}var nn,rn;function B(){return(B=e((()=>{l(),_t(),nn=gt({cpuCount:R().int().positive(),loadAverage:vt([R().nonnegative(),R().nonnegative(),R().nonnegative()]).optional(),memoryTotalBytes:R().positive(),memoryFreeBytes:R().nonnegative(),diskTotalBytes:R().positive().optional(),diskAvailableBytes:R().nonnegative().optional(),updatedAtMs:R().nonnegative()}).refine(e=>e.memoryFreeBytes<=e.memoryTotalBytes&&(e.diskAvailableBytes===void 0||e.diskTotalBytes===void 0||e.diskAvailableBytes<=e.diskTotalBytes)),rn=new Set([`approved`,`pending-approval`,`pending-reapproval`,`unapproved`])})))()}var an;function on(){return(on=e((()=>{xt(),D(),ye(),Te(),ie(),an=class{constructor(e){this.host=e}async editAlias(e){if(!this.host.canManagePairing()||this.host.pendingDialog())return;let t=new AbortController;this.host.setPendingDialog(t);try{let{showInputDialog:n}=await p(async()=>{let{showInputDialog:e}=await import(`./input-dialog-CiffR3Gs.js`);return{showInputDialog:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]),import.meta.url);await n({signal:t.signal,title:k(`devices.inventory.renameTitle`,{name:e.name}),label:k(`devices.inventory.renamePrompt`),defaultValue:e.operatorLabel??``,requireValue:!0,requireChange:!0,submit:t=>this.host.canManagePairing()?this.host.runPageTask(n=>he(n,{deviceId:e.id,label:t})):Promise.resolve(k(`devices.readOnly.pairingRequired`))})}catch(e){this.host.setDevicesError(Ne(e))}finally{this.host.pendingDialog()===t&&this.host.setPendingDialog(null)}}confirmInventoryRemoval(e){if(!this.host.canManagePairing())return Promise.resolve();if(e.kind===`entry`){let t=e.entry;return this.confirmDestructiveAction({title:k(`devices.inventory.removePromptTitle`,{name:t.name}),message:k(`devices.inventory.removePromptBody`),details:k(`devices.inventory.deviceId`,{id:t.id}),confirmLabel:k(`devices.inventory.remove`)},e=>de(e,t))}let t=e.entries;return this.confirmDestructiveAction({title:k(t.length===1?`devices.inventory.removeStalePromptTitleOne`:`devices.inventory.removeStalePromptTitle`,{count:String(t.length)}),message:k(`devices.inventory.removeStalePromptBody`),confirmLabel:k(`devices.inventory.remove`)},e=>le(e,t))}confirmPairingReject(e,t){return this.host.canManagePairing()?this.confirmDestructiveAction({title:k(e===`device`?`devices.inventory.rejectDevicePromptTitle`:`devices.inventory.rejectNodePromptTitle`),message:k(`devices.inventory.rejectPromptBody`),confirmLabel:k(`devices.inventory.reject`)},n=>e===`device`?se(n,t):Pe(n,t)):Promise.resolve()}confirmTokenRevoke(e,t){return this.host.canManagePairing()?this.confirmDestructiveAction({title:k(`devices.inventory.revokePromptTitle`,{role:t}),message:k(`devices.inventory.revokePromptBody`),details:k(`devices.inventory.deviceId`,{id:e}),confirmLabel:k(`devices.inventory.revoke`)},n=>Oe(n,{deviceId:e,gatewayUrl:this.host.gatewayUrl(),role:t})):Promise.resolve()}async confirmDestructiveAction(e,t){if(this.host.pendingDialog())return;let n=new AbortController;this.host.setPendingDialog(n);let r=this.host.requestGeneration(),i=this.host.gatewayClient(),a=await St({...e,danger:!0,signal:n.signal});this.host.pendingDialog()===n&&this.host.setPendingDialog(null),!(!a||n.signal.aborted||r!==this.host.requestGeneration()||i!==this.host.gatewayClient()||!this.host.gatewayConnected()||!this.host.canManagePairing())&&await this.host.runPageTask(t)}}})))()}function sn(e){let t=ne(e);return Array.isArray(t.nodes)?t.nodes:[]}function cn(){return(cn=e((()=>{})))()}function ln(e){return f(e.normalize(`NFC`)).replace(/(?=\p{M})\p{Emoji_Component}/gu,``).replace(/(?<![\p{L}\p{M}\p{N}])\p{M}+/gu,``).replace(/[^\p{L}\p{M}\p{N}]+/gu,`-`).replace(/^-+/,``).replace(/-+$/,``)}function un(e){return e.map(e=>e.displayName||e.remoteIp||e.nodeId).filter(Boolean).join(`, `)}function dn(e){let n=e.displayName||e.remoteIp||e.nodeId,r=[`node=${e.nodeId}`],i=t(e.clientId);return i&&r.push(`client=${i}`),`${n} [${r.join(`, `)}]`}function fn(e){return(s(e)??``).startsWith(`openclaw-`)}function pn(e){let t=s(e)??``;return t.startsWith(`clawdbot-`)||t.startsWith(`moldbot-`)}function mn(e){let t=e.filter(e=>fn(e.clientId));if(t.length!==1)return;let n=e.filter(e=>pn(e.clientId)).length;if(n!==0&&t.length+n===e.length)return t[0]}function hn(e,t,n,r){if(e.nodeId===t)return 4e3;if(typeof e.remoteIp==`string`&&e.remoteIp===t)return 3e3;let i=typeof e.displayName==`string`?e.displayName:``,a=i?ln(i):``;return a&&a===n?2e3:r!==void 0&&a&&a.replace(/-/g,``)===r?1900:t.length>=6&&e.nodeId.startsWith(t)?1e3:0}function gn(e,t,n=!1){let r=t.trim();if(!r)throw Error(`node required`);let i=ln(r),a=n?i.replace(/-/g,``):void 0,o=0,s=[];if(e.forEach(e=>{let t=hn(e,r,i,a);t>o&&(o=t,s.length=0),t>0&&t===o&&s.push(e)}),s.length===0){let t=un(e);throw Error(`unknown node: ${r}${t?` (known: ${t})`:``}`)}let c=s.filter(e=>e.connected===!0),l=c.length>0?c:s;if(l.length===1)return l[0]?.nodeId??``;let u=mn(l);if(u)return u.nodeId;throw Error(`ambiguous node: ${r} (matches: ${l.map(dn).join(`, `)})`)}function _n(){return(_n=e((()=>{})))()}var V;function vn(){return(vn=e((()=>{x(),et(),A(),V={laptop:j(S`<path
      d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"
    />
    <path d="M20.054 15.987H3.946" />`),pcCase:j(S`<rect width="14" height="20" x="5" y="2" rx="2" />
    <path d="M15 14h.01M9 6h6M9 10h6" />`),macMini:j(S`<path
      d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
    />
    <path d="M21.946 12.013H2.054M6 16h.01M10 16h.01" />`),allInOne:O.monitor,tablet:j(S`<rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />`),watch:j(S`<circle cx="12" cy="12" r="6" />
    <polyline points="12 10 12 12 13 13" />
    <path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" />
    <path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" />`),smartphone:O.smartphone,browser:O.globe,terminal:O.terminal,server:O.server}})))()}function yn(e){let t=e?.trim();if(t)return t.startsWith(`MacBook`)?`laptop`:t.startsWith(`Macmini`)?`mini`:t.startsWith(`MacPro`)?`pro`:t.startsWith(`iMac`)?`imac`:xn[t]}function bn(e){let t=e?.trim();if(t)switch(yn(t)){case`laptop`:return t.startsWith(`MacBookAir`)||Sn.has(t)?`MacBook Air`:/^MacBook\d/.test(t)?`MacBook`:`MacBook Pro`;case`mini`:return`Mac mini`;case`studio`:return`Mac Studio`;case`pro`:return`Mac Pro`;case`imac`:return`iMac`;default:return}}var xn,Sn;function H(){return(H=e((()=>{xn={"Mac13,1":`studio`,"Mac13,2":`studio`,"Mac14,2":`laptop`,"Mac14,3":`mini`,"Mac14,5":`laptop`,"Mac14,6":`laptop`,"Mac14,7":`laptop`,"Mac14,8":`pro`,"Mac14,9":`laptop`,"Mac14,10":`laptop`,"Mac14,12":`mini`,"Mac14,13":`studio`,"Mac14,14":`studio`,"Mac14,15":`laptop`,"Mac15,3":`laptop`,"Mac15,4":`imac`,"Mac15,5":`imac`,"Mac15,6":`laptop`,"Mac15,7":`laptop`,"Mac15,8":`laptop`,"Mac15,9":`laptop`,"Mac15,10":`laptop`,"Mac15,11":`laptop`,"Mac15,12":`laptop`,"Mac15,13":`laptop`,"Mac15,14":`studio`,"Mac16,1":`laptop`,"Mac16,2":`imac`,"Mac16,3":`imac`,"Mac16,5":`laptop`,"Mac16,6":`laptop`,"Mac16,7":`laptop`,"Mac16,8":`laptop`,"Mac16,9":`studio`,"Mac16,10":`mini`,"Mac16,11":`mini`,"Mac16,12":`laptop`,"Mac16,13":`laptop`,"Mac17,2":`laptop`},Sn=new Set([`Mac14,2`,`Mac14,15`,`Mac15,12`,`Mac15,13`,`Mac16,12`,`Mac16,13`])})))()}function Cn(e){let n=m(e?.agents)?e.agents:null,r=m(n?.entries)?n.entries:{},i=[];for(let[e,n]of Object.entries(r)){if(!m(n))continue;let r=t(n.name),a=n.default===!0;i.push({id:e,name:r,isDefault:a,record:n})}return i}function wn(e,n){let r=[];for(let i of e){let e=Array.isArray(i.commands)?i.commands:[],a=new Set(e.map(String));if(!n.every(e=>a.has(e)))continue;let o=t(i.nodeId)??``;if(!o)continue;let s=t(i.displayName)??o;r.push({id:o,label:s===o?o:`${s} · ${o}`})}return r.sort((e,t)=>e.label.localeCompare(t.label)),r}function Tn(e){let t=e.platform?.trim().toLowerCase()??``,n=e.modelIdentifier?.trim()??``,r=e.clientId?.trim().toLowerCase()??``,i=e.clientMode?.trim().toLowerCase()??``;if(n.startsWith(`Watch`)||En.test(t)||r===h.WATCHOS_APP)return V.watch;if(n.startsWith(`iPad`)||Dn.test(t))return V.tablet;if(n.startsWith(`iPhone`)||On.test(t)||kn.has(r))return V.smartphone;if(An.has(r)||i===c.WEBCHAT)return V.browser;if(jn.has(i)||Mn.has(r))return V.terminal;if(i===`gateway`)return V.server;switch(yn(n)){case`laptop`:return V.laptop;case`mini`:return V.macMini;case`studio`:case`pro`:return V.pcCase;case`imac`:return V.allInOne;default:return O.monitor}}function U(e){return C`
    <div class="device-entry__tile" aria-hidden="true">
      <span class="device-entry__tile-icon">${e}</span>
    </div>
  `}var En,Dn,On,kn,An,jn,Mn;function W(){return(W=e((()=>{x(),n(),vn(),A(),H(),En=/\bwatchos\b/,Dn=/\b(ipados|ipad)\b/,On=/\b(ios|android|iphone)\b/,kn=new Set([h.IOS_APP,h.ANDROID_APP]),An=new Set([h.CONTROL_UI,h.WEBCHAT_UI,h.WEBCHAT]),jn=new Set([c.CLI,c.BACKEND,c.PROBE,c.TEST]),Mn=new Set([h.CLI,h.TUI])})))()}function Nn(e){return e===`allowlist`||e===`full`||e===`deny`?e:`deny`}function Pn(e){return e===`always`||e===`off`||e===`on-miss`?e:`on-miss`}function Fn(e,t,n){let r=e?.defaults??{},i=n?e?.agents?.[`*`]??{}:{};return{security:Nn(i.security??r.security??t?.security),ask:Pn(i.ask??r.ask??t?.ask),askFallback:Nn(i.askFallback??r.askFallback??t?.askFallback??`deny`),autoAllowSkills:i.autoAllowSkills??r.autoAllowSkills??t?.autoAllowSkills??!1}}function In(e){return Cn(e).map(e=>({id:e.id,name:e.name,isDefault:e.isDefault}))}function Ln(e,t){let n=In(e),r=Object.keys(t?.agents??{}),i=new Map;n.forEach(e=>i.set(e.id,e)),r.forEach(e=>{i.has(e)||i.set(e,{id:e})});let a=Array.from(i.values());return a.length===0&&a.push({id:`main`,isDefault:!0}),a.sort((e,t)=>{if(e.isDefault&&!t.isDefault)return-1;if(!e.isDefault&&t.isDefault)return 1;let n=e.name?.trim()?e.name:e.id,r=t.name?.trim()?t.name:t.id;return n.localeCompare(r)}),a}function Rn(e,t){return e===K?K:e&&t.some(t=>t.id===e)?e:K}function zn(e){let t=e.execApprovalsSnapshot,n=xe(t)?t:null,r=t&&!xe(t)?t:null,i=n?null:e.execApprovalsForm??r?.file??null,a=!!(i||n),o=Ln(e.configForm,i),s=qn(e.nodes),c=e.execApprovalsTarget,l=c===`node`&&e.execApprovalsTargetNodeId?e.execApprovalsTargetNodeId:null;c===`node`&&l&&!s.some(e=>e.id===l)&&(l=null);let u=Rn(e.execApprovalsSelectedAgent,o),d=Fn(i,r?.resolvedDefaults,u!==K),f=u===K?null:(i?.agents??{})[u]??null,p=Array.isArray(f?.allowlist)?f.allowlist??[]:[];return{ready:a,disabled:!e.canAdmin||e.execApprovalsSaving||e.execApprovalsLoading,dirty:e.execApprovalsDirty,loading:e.execApprovalsLoading,saving:e.execApprovalsSaving,form:i,nativePolicy:n,defaults:d,selectedScope:u,selectedAgent:f,agents:o,allowlist:p,target:c,targetNodeId:l,targetNodes:s,onSelectScope:e.onExecApprovalsSelectAgent,onSelectTarget:e.onExecApprovalsTargetChange,onPatch:e.onExecApprovalsPatch,onRemove:e.onExecApprovalsRemove,onLoad:e.onLoadExecApprovals,onSave:e.onSaveExecApprovals,canAdmin:e.canAdmin}}function Bn(e){let t=e.ready,n=e.target!==`node`||!!e.targetNodeId,r=C`
    <button
      class="btn"
      ?disabled=${e.disabled||!e.dirty||!n||!!e.nativePolicy}
      @click=${e.onSave}
    >
      ${e.saving?k(`common.saving`):k(`common.save`)}
    </button>
  `,i=C`
    ${e.canAdmin?C`
            ${Hn(e)}
            ${t?e.nativePolicy?Vn(e.nativePolicy):C`${Un(e)} ${Wn(e)}`:P({title:k(`devices.execApprovals.loadHint`),control:C`
                      <button
                        class="btn"
                        ?disabled=${e.loading||!n}
                        @click=${e.onLoad}
                      >
                        ${e.loading?k(`common.loading`):k(`common.loadApprovals`)}
                      </button>
                    `})}
          `:P({title:k(`devices.readOnly.adminRequired`)})}
  `;return C`
    ${F({title:k(`devices.execApprovals.title`),description:C`
          ${k(`devices.execApprovals.subtitlePrefix`)}
          <span class="mono">exec host=gateway/node</span>.
        `,actions:r},i)}
    ${e.canAdmin&&t&&!e.nativePolicy&&e.selectedScope!==K?Gn(e):T}
  `}function Vn(e){let t=e.enabled&&Array.isArray(e.rules)?e.rules:[],n=e.enabled?e.defaultAction:e.message??`unavailable`;return C`
    ${P({title:k(`devices.execApprovals.hostNativePolicy`),description:k(`devices.execApprovals.hostNativeHint`),control:ut(k(`devices.execApprovals.native`))})}
    ${P({title:k(`devices.execApprovals.defaultAction`),description:n,control:ut(k(t.length===1?`devices.execApprovals.rule`:`devices.execApprovals.rules`,{count:String(t.length)}))})}
    ${t.map(e=>P({title:e.pattern,description:C`
          ${e.action} · ${e.shells?.join(`, `)||k(`devices.execApprovals.allShells`)} ·
          ${e.enabled===!1?k(`devices.execApprovals.off`):k(`devices.execApprovals.on`)}
          ${e.description?C`<br />${_(e.description,120)}`:T}
        `}))}
  `}function Hn(e){let t=e.targetNodes.length>0,n=e.targetNodeId??``;return C`
    ${P({title:k(`devices.execApprovals.target`),description:k(`devices.execApprovals.targetHint`),control:C`
        <select
          class="settings-select"
          aria-label=${k(`devices.execApprovals.host`)}
          ?disabled=${e.disabled}
          @change=${t=>{if(t.target.value===`node`){let t=e.targetNodes[0]?.id??null;e.onSelectTarget(`node`,n||t)}else e.onSelectTarget(`gateway`,null)}}
        >
          <option value="gateway" ?selected=${e.target===`gateway`}>
            ${k(`devices.execApprovals.gateway`)}
          </option>
          <option value="node" ?selected=${e.target===`node`}>
            ${k(`devices.execApprovals.node`)}
          </option>
        </select>
      `})}
    ${e.target===`node`?P({title:k(`devices.execApprovals.node`),description:t?void 0:k(`devices.execApprovals.noNodes`),control:C`
              <select
                class="settings-select"
                aria-label=${k(`devices.execApprovals.node`)}
                ?disabled=${e.disabled||!t}
                @change=${t=>{let n=t.target.value.trim();e.onSelectTarget(`node`,n||null)}}
              >
                <option value="" ?selected=${n===``}>
                  ${k(`devices.execApprovals.selectNode`)}
                </option>
                ${e.targetNodes.map(e=>C`<option value=${e.id} ?selected=${n===e.id}>
                      ${e.label}
                    </option>`)}
              </select>
            `}):T}
  `}function Un(e){let t=[{value:K,label:k(`devices.execApprovals.defaults`),icon:O.settings},...e.agents.map(e=>({value:e.id,label:e.name?.trim()?`${e.name} (${e.id})`:e.id,agent:{id:e.id,...e.name?{name:e.name}:{}},badge:e.isDefault?k(`agents.default`):void 0}))];return P({title:k(`devices.execApprovals.scope`),stacked:!0,control:C`
      <openclaw-agent-select
        class="agent-select--settings"
        .options=${t}
        .value=${e.selectedScope}
        .accessibleLabel=${k(`devices.execApprovals.scope`)}
        .disabled=${e.disabled}
        .onSelect=${e.onSelectScope}
      ></openclaw-agent-select>
    `})}function G(e,t){return C`
    <select
      class="settings-select"
      aria-label=${t.ariaLabel}
      ?disabled=${e.disabled}
      @change=${n=>{let r=n.target.value;!t.isDefaults&&r===`__default__`?e.onRemove([...t.basePath,t.key]):e.onPatch([...t.basePath,t.key],r)}}
    >
      ${t.isDefaults?T:C`<option value="__default__" ?selected=${t.currentValue===`__default__`}>
              ${k(`devices.execApprovals.useDefaultValue`,{value:t.defaultValue})}
            </option>`}
      ${t.values.map(e=>C`<option value=${e.value} ?selected=${t.currentValue===e.value}>
            ${k(e.labelKey)}
          </option>`)}
    </select>
  `}function Wn(e){let t=e.selectedScope===K,n=e.defaults,r=e.selectedAgent??{},i=t?[`defaults`]:[`agents`,e.selectedScope],a=typeof r.security==`string`?r.security:void 0,o=typeof r.ask==`string`?r.ask:void 0,s=typeof r.askFallback==`string`?r.askFallback:void 0,c=t?n.security:a??`__default__`,l=t?n.ask:o??`__default__`,u=t?n.askFallback:s??`__default__`,d=typeof r.autoAllowSkills==`boolean`?r.autoAllowSkills:void 0,f=d??n.autoAllowSkills,p=d==null;return C`
    ${P({title:k(`devices.execApprovals.security`),description:t?k(`devices.execApprovals.defaultSecurity`):k(`devices.execApprovals.defaultValue`,{value:n.security}),control:G(e,{key:`security`,ariaLabel:k(`devices.execApprovals.mode`),values:q,currentValue:c,defaultValue:n.security,isDefaults:t,basePath:i})})}
    ${P({title:k(`devices.execApprovals.ask`),description:t?k(`devices.execApprovals.defaultPrompt`):k(`devices.execApprovals.defaultValue`,{value:n.ask}),control:G(e,{key:`ask`,ariaLabel:k(`devices.execApprovals.mode`),values:Jn,currentValue:l,defaultValue:n.ask,isDefaults:t,basePath:i})})}
    ${P({title:k(`devices.execApprovals.askFallback`),description:t?k(`devices.execApprovals.promptUnavailable`):k(`devices.execApprovals.defaultValue`,{value:n.askFallback}),control:G(e,{key:`askFallback`,ariaLabel:k(`devices.execApprovals.fallback`),values:q,currentValue:u,defaultValue:n.askFallback,isDefaults:t,basePath:i})})}
    ${P({title:k(`devices.execApprovals.autoAllowSkills`),description:t?k(`devices.execApprovals.autoAllowSkillsHint`):p?k(`devices.execApprovals.usingDefault`,{value:n.autoAllowSkills?k(`devices.execApprovals.on`):k(`devices.execApprovals.off`)}):k(`devices.execApprovals.override`,{value:k(f?`devices.execApprovals.on`:`devices.execApprovals.off`)}),control:C`
        ${!t&&!p?C`<button
                class="btn btn--sm"
                ?disabled=${e.disabled}
                @click=${()=>e.onRemove([...i,`autoAllowSkills`])}
              >
                ${k(`devices.execApprovals.useDefault`)}
              </button>`:T}
        ${st({checked:f,disabled:e.disabled,ariaLabel:k(`devices.execApprovals.autoAllowSkills`),onChange:t=>e.onPatch([...i,`autoAllowSkills`],t)})}
      `})}
  `}function Gn(e){let t=[`agents`,e.selectedScope,`allowlist`],n=e.allowlist;return F({title:k(`devices.execApprovals.allowlist`),description:k(`devices.execApprovals.allowlistHint`),actions:C`
        <button
          class="btn btn--sm"
          ?disabled=${e.disabled}
          @click=${()=>{let r=[...n,{pattern:``}];e.onPatch(t,r)}}
        >
          ${k(`devices.execApprovals.addPattern`)}
        </button>
      `},n.length===0?ft(k(`devices.execApprovals.emptyAllowlist`)):n.map((t,n)=>Kn(e,t,n)))}function Kn(e,t,n){let r=t.lastUsedAt?y(t.lastUsedAt):k(`common.never`),i=t.lastUsedCommand?_(t.lastUsedCommand,120):null,a=t.lastResolvedPath?_(t.lastResolvedPath,120):null;return P({title:t.pattern?.trim()?t.pattern:k(`devices.execApprovals.newPattern`),description:C`
      ${k(`devices.execApprovals.lastUsed`,{time:r})}
      ${i?C`<br /><span class="mono">${i}</span>`:T}
      ${a?C`<br /><span class="mono">${a}</span>`:T}
    `,control:C`
      <input
        class="settings-input"
        type="text"
        aria-label=${k(`devices.execApprovals.pattern`)}
        .value=${t.pattern??``}
        ?disabled=${e.disabled}
        @input=${t=>{let r=t.target;e.onPatch([`agents`,e.selectedScope,`allowlist`,n,`pattern`],r.value)}}
      />
      <button
        class="btn btn--sm danger"
        ?disabled=${e.disabled}
        @click=${()=>{if(e.allowlist.length<=1){e.onRemove([`agents`,e.selectedScope,`allowlist`]);return}e.onRemove([`agents`,e.selectedScope,`allowlist`,n])}}
      >
        ${k(`devices.execApprovals.remove`)}
      </button>
    `})}function qn(e){return wn(e,[`system.execApprovals.get`,`system.execApprovals.set`])}var K,q,Jn;function Yn(){return(Yn=e((()=>{x(),Dt(),A(),I(),D(),v(),Te(),W(),K=`__defaults__`,q=[{value:`deny`,labelKey:`devices.execApprovals.options.deny`},{value:`allowlist`,labelKey:`devices.execApprovals.options.allowlist`},{value:`full`,labelKey:`devices.execApprovals.options.full`}],Jn=[{value:`off`,labelKey:`devices.execApprovals.options.off`},{value:`on-miss`,labelKey:`devices.execApprovals.options.onMiss`},{value:`always`,labelKey:`devices.execApprovals.options.always`}]})))()}var J,Xn;function Zn(){return(Zn=e((()=>{tt(),J={devices:{capabilities:{browser:{label:`Browser`,description:`Browse and interact with web pages.`},canvas:{label:`Canvas`,description:`Present and interact with visual content.`},screen:{label:`Screen`,description:`Capture or record the screen.`},computer:{label:`Computer`,description:`Control desktop applications with the mouse and keyboard.`},file:{label:`Files`,description:`Read and manage files on this device.`},system:{label:`System`,description:`Run commands and inspect this device.`},mcp:{label:`MCP`,description:`Use tools provided by MCP servers on this device.`},localInference:{label:`Local inference`,description:`Run models locally on this device.`},camera:{label:`Camera`,description:`Capture photos and video with the device camera.`},talk:{label:`Talk`,description:`Have voice conversations through this device.`},location:{label:`Location`,description:`Read the device location.`},notifications:{label:`Notifications`,description:`Read and manage device notifications.`},contacts:{label:`Contacts`,description:`Find and manage contacts.`},calendar:{label:`Calendar`,description:`Read and manage calendar events.`},reminders:{label:`Reminders`,description:`Read and manage reminders.`},device:{label:`Device`,description:`Read device information and status.`},photos:{label:`Photos`,description:`Browse the device photo library.`},sms:{label:`SMS`,description:`Read and send text messages.`},health:{label:`Health`,description:`Read health and fitness data.`},motion:{label:`Motion`,description:`Read movement and activity data.`},runtime:`1 runtime`,runtimes:`{count} runtimes`,overflow:`{count} more capabilities`}}},Xn=Object.assign(()=>{nt.devices.capabilities=J.devices.capabilities},{catalog:J})})))()}function Qn(e,t,n){return C`
    <span class="device-capability" role="listitem" title=${n}>
      <span class="device-capability__icon" aria-hidden="true">${e}</span>
      <span>${t}</span>
    </span>
  `}function $n(e){if(e.length===0)return T;let t=[...new Set(e)],n=t.filter(e=>Y.has(e)),r=t.filter(e=>!Y.has(e)),i=r.slice(0,tr-+(n.length>0)),a=r.length-i.length,o=k(n.length===1?`devices.capabilities.runtime`:`devices.capabilities.runtimes`,{count:String(n.length)}),s=n.join(`, `);return C`
    <div class="device-capabilities" role="list" aria-label=${k(`devices.inventory.capabilities`)}>
      ${n.length>0?Qn(O.squareTerminal,o,s):T}
      ${i.map(e=>{let t=er.get(e);return Qn(t?.icon??O.puzzle,t?k(`devices.capabilities.${t.key}.label`):e,t?k(`devices.capabilities.${t.key}.description`):e)})}
      ${a>0?C`<span
              class="device-capability device-capability--overflow"
              role="listitem"
              title=${k(`devices.capabilities.overflow`,{count:String(a)})}
              >+${a}</span
            >`:T}
    </div>
  `}var er,Y,tr;function nr(){return(nr=e((()=>{x(),A(),D(),Zn(),Xn(),er=new Map(Object.entries({browser:{icon:O.globe,key:`browser`},canvas:{icon:O.panelsTopLeft,key:`canvas`},screen:{icon:O.monitor,key:`screen`},computer:{icon:O.monitorSmartphone,key:`computer`},file:{icon:O.folder,key:`file`},system:{icon:O.terminal,key:`system`},mcp:{icon:O.plug,key:`mcp`},"local-inference":{icon:O.cpu,key:`localInference`},camera:{icon:O.camera,key:`camera`},talk:{icon:O.mic,key:`talk`},location:{icon:O.target,key:`location`},notifications:{icon:O.bell,key:`notifications`},contacts:{icon:O.users,key:`contacts`},calendar:{icon:O.calendarClock,key:`calendar`},reminders:{icon:O.listChecks,key:`reminders`},device:{icon:O.smartphone,key:`device`},photos:{icon:O.image,key:`photos`},sms:{icon:O.messageSquare,key:`sms`},health:{icon:O.activity,key:`health`},motion:{icon:O.radio,key:`motion`}})),Y=new Set([`claude-sessions`,`codex-cli-sessions`,`codex-app-server-threads`,`opencode-sessions`,`pi-sessions`]),tr=16})))()}function rr(e,t){return e.desktopEnvironments?.find(e=>e.id===t&&e.desktop===!0)?.id}async function ir(e){let t=await Ce(e);ce({message:k(t?`devices.inventory.deviceIdCopied`:`common.copyFailed`)})}function X(e,t){if(!t.deviceId&&!t.desktopEnvironment)return T;let n=e.canManagePairing?T:k(`devices.readOnly.pairingRequired`);return C`
    <wa-dropdown
      placement="bottom-end"
      @wa-select=${n=>{switch(n.detail.item.value){case`desktop`:t.desktopEnvironment&&Pt(e.basePath,t.desktopEnvironment);break;case`copy`:t.deviceId&&ir(t.deviceId);break;case`editAlias`:e.canManagePairing&&t.onEditAlias?.();break;case`approve`:e.canManagePairing&&t.pendingRequestId&&e.onNodeApprove(t.pendingRequestId);break;case`reject`:e.canManagePairing&&t.pendingRequestId&&e.onNodeReject(t.pendingRequestId);break;case`remove`:e.canManagePairing&&t.onRemove?.()}}}
    >
      <button
        slot="trigger"
        type="button"
        class="btn btn--sm btn--ghost device-entry__menu-trigger"
        aria-label=${k(`devices.inventory.actionsName`,{name:t.name})}
        title=${k(`devices.inventory.actions`)}
      >
        ${O.moreHorizontal}
      </button>
      ${t.desktopEnvironment?C`<wa-dropdown-item value="desktop"
              >${k(`devices.inventory.openDesktop`)}</wa-dropdown-item
            >`:T}
      ${t.pendingRequestId?C`
              <wa-dropdown-item
                value="approve"
                ?disabled=${!e.canManagePairing}
                title=${n}
                >${k(`devices.inventory.approve`)}</wa-dropdown-item
              >
              <wa-dropdown-item
                value="reject"
                ?disabled=${!e.canManagePairing}
                title=${n}
                >${k(`devices.inventory.reject`)}</wa-dropdown-item
              >
            `:T}
      ${t.deviceId?C`<wa-dropdown-item value="copy"
              >${k(`devices.inventory.copyDeviceId`)}</wa-dropdown-item
            >`:T}
      ${t.onEditAlias?C`<wa-dropdown-item
              value="editAlias"
              ?disabled=${!e.canManagePairing}
              title=${n}
              >${k(`devices.inventory.editAlias`)}</wa-dropdown-item
            >`:T}
      ${t.onRemove?C`<wa-dropdown-item
              value="remove"
              variant="danger"
              ?disabled=${!e.canManagePairing}
              title=${n}
              >${k(`devices.inventory.removeAction`)}</wa-dropdown-item
            >`:T}
    </wa-dropdown>
  `}function Z(){return(Z=e((()=>{x(),Ft(),A(),pt(),D(),Ae(),ue()})))()}function Q(e){return d(e,{style:`legacy-binary`,maxUnit:`tera`,separator:` `,fractionDigits:(e,t)=>+(t===`tera`||e<10)})}function ar(e,t,n,r,i,a=80,o=90){let s=i===void 0?t<a?`ok`:t<o?`warn`:`danger`:`stale`,c=i===void 0?n:`${n} · ${i}`,l=i===void 0?r:`${r} · ${k(`devices.inventory.lastKnown`,{time:i})}`;return C`<span class="device-resource device-resource--${e}" title=${l}>
    <span class="device-resource__label">${c}</span>
    ${Nt({mode:`continuous`,percent:Math.min(100,Math.max(0,t)),tone:s,label:l})}
  </span>`}function or(e,t){if(!e)return T;let n=t===void 0?void 0:ke(Math.max(0,Date.now()-t)),r=[];if(e.loadAverage&&e.cpuCount>0){let t=k(`devices.inventory.loadTitle`,{averages:e.loadAverage.map(e=>e.toFixed(2)).join(` / `),cores:String(e.cpuCount)});r.push(ar(`load`,e.loadAverage[0]/e.cpuCount*100,k(`devices.inventory.loadLabel`,{load:e.loadAverage[0].toFixed(1)}),t,n,70,100))}if(e.memoryTotalBytes>0&&e.memoryFreeBytes>=0){let t=e.memoryTotalBytes-e.memoryFreeBytes,i=Q(t),a=Q(e.memoryTotalBytes),o=a.slice(a.lastIndexOf(` `)),s=i.endsWith(o)?i.slice(0,-o.length):i;r.push(ar(`memory`,t/e.memoryTotalBytes*100,`${s} / ${a}`,k(`devices.inventory.memoryTitle`,{used:i,total:a}),n))}if(e.diskTotalBytes!=null&&e.diskTotalBytes>0&&e.diskAvailableBytes!=null){let t=Q(e.diskAvailableBytes),i=Q(e.diskTotalBytes);r.push(ar(`disk`,(1-e.diskAvailableBytes/e.diskTotalBytes)*100,k(`devices.inventory.diskLabel`,{available:t}),k(`devices.inventory.diskTitle`,{available:t,total:i}),n))}return r.length?C`<div class="device-resources">${r}</div>`:T}function sr(){return(sr=e((()=>{x(),kt(),D(),v()})))()}function cr(...e){let t=new Set;for(let n of e)for(let e of re(n))t.add(e);return[...t].toSorted()}function lr(e,t){let n=new Set(e);return t.every(e=>n.has(e))}function ur(e){return{roles:cr(e.roles,e.role),scopes:ee(e.scopes)}}function dr(e){let t=cr(e.roles,e.role),n=Array.isArray(e.tokens)?e.tokens:e.tokens?Object.values(e.tokens):void 0;return{roles:n===void 0?t:cr(n.filter(e=>!e.revokedAtMs).flatMap(e=>e.role??[])).filter(e=>t.includes(e)),scopes:ee(e.scopes)}}function fr(e,t){let n=ur(e),r=t?dr(t):null;return r?lr(r.roles,n.roles)?lr(r.scopes,n.scopes)?{kind:`re-approval`,requested:n,approved:r}:{kind:`scope-upgrade`,requested:n,approved:r}:{kind:`role-upgrade`,requested:n,approved:r}:{kind:`new-pairing`,requested:n,approved:null}}function pr(){return(pr=e((()=>{te()})))()}function mr(e,n,r){let i=new Map(n.map(e=>[t(e.deviceId),e]).filter(e=>!!e[0]));return e.map(e=>vr(e,r,hr(i,e)))}function hr(e,n){let r=t(n.deviceId);if(!r)return;let i=e.get(r);if(!i)return;let a=t(n.publicKey),o=t(i.publicKey);if(!(a&&o&&a!==o))return i}function gr(e){return e?k(`devices.inventory.rolesAndScopes`,{roles:g(e.roles),scopes:g(e.scopes)}):k(`devices.inventory.none`)}function _r(e){switch(e){case`scope-upgrade`:return k(`devices.inventory.scopeUpgrade`);case`role-upgrade`:return k(`devices.inventory.roleUpgrade`);case`re-approval`:return k(`devices.inventory.reapproval`);case`new-pairing`:return k(`devices.inventory.newPairing`)}throw Error(`unsupported pending approval kind`)}function vr(e,n,r){let i=t(e.displayName)||e.deviceId,a=typeof e.ts==`number`?y(e.ts):k(`common.na`),o=fr(e,r),s=e.isRepair?` · ${k(`devices.inventory.repair`)}`:``;return C`
    <div class="settings-row device-entry">
      ${U(O.monitorSmartphone)}
      <div class="device-entry__body">
        <div class="device-entry__heading">
          <span class="settings-row__title">${i}</span>
          <span class="device-entry__status"
            >${L({kind:`warn`,label:k(`devices.inventory.pendingApproval`)})}</span
          >
        </div>
        <span class="settings-row__desc">
          ${k(`devices.inventory.requestedAt`,{note:_r(o.kind),time:a})}${s}
        </span>
      </div>
      <div class="settings-row__control">
        <button
          class="btn btn--sm"
          ?disabled=${!n.canManagePairing}
          @click=${()=>n.onDeviceApprove(e.requestId)}
        >
          ${k(`devices.inventory.approve`)}
        </button>
        <button
          class="btn btn--sm"
          ?disabled=${!n.canManagePairing}
          @click=${()=>n.onDeviceReject(e.requestId)}
        >
          ${k(`devices.inventory.reject`)}
        </button>
        ${X(n,{name:i,deviceId:e.deviceId})}
      </div>
      <details class="device-entry__details">
        <summary>${k(`devices.inventory.details`)}</summary>
        <dl class="device-entry__facts">
          <dt class="settings-row__desc">${k(`devices.inventory.deviceIdLabel`)}</dt>
          <dd class="settings-row__value settings-row__value--mono" title=${e.deviceId}>
            ${e.deviceId}
          </dd>
          ${e.remoteIp?C`<dt class="settings-row__desc">${k(`devices.inventory.remoteIpLabel`)}</dt>
                  <dd class="settings-row__value settings-row__value--mono">${e.remoteIp}</dd>`:T}
          <dt class="settings-row__desc">${k(`devices.inventory.requestedAccessLabel`)}</dt>
          <dd class="settings-row__value">${gr(o.requested)}</dd>
          ${o.approved?C`<dt class="settings-row__desc">
                    ${k(`devices.inventory.approvedAccessLabel`)}
                  </dt>
                  <dd class="settings-row__value">${gr(o.approved)}</dd>`:T}
        </dl>
      </details>
    </div>
  `}function yr(){return(yr=e((()=>{x(),pr(),A(),I(),D(),v(),Z(),W()})))()}function br(e){let t=en(e);return{id:e.id,name:e.name,...t}}function xr(e,t,n){if(n&&e.length===0)return``;let r=e.filter(e=>e.primary.connected).length,i=[k(`devices.inventory.summaryConnected`,{connected:String(r),total:String(e.length)})];return t>0&&i.push(k(`devices.inventory.summaryPending`,{count:String(t)})),i.join(` · `)}function Sr(e){let t=e.devicesList??{pending:[],paired:[]},n=Array.isArray(t.pending)?t.pending:[],r=Array.isArray(t.paired)?t.paired:[],i=Xt({paired:r,nodes:e.nodes,presence:e.presence}),a=Qt(e.presence),o=$t(e.presence,i),s=Zt(i),c=e.loading||e.devicesLoading,l=C`
    ${s.length>0?C`
            <button
              class="btn btn--sm danger"
              title=${e.canManagePairing?``:k(`devices.readOnly.pairingRequired`)}
              ?disabled=${!e.canManagePairing}
              @click=${()=>e.onInventoryCleanup(s.map(br))}
            >
              ${O.trash} ${k(`devices.inventory.cleanupStale`,{count:String(s.length)})}
            </button>
          `:T}
    <button
      class="btn"
      title=${e.canPairDevice?``:k(`devices.pairing.adminRequired`)}
      ?disabled=${!e.canPairDevice}
      @click=${e.onDevicePairSetupOpen}
    >
      ${O.plus} ${k(`devices.pairing.button`)}
    </button>
  `,u=i.length===0&&!a,d=C`
    ${a?Pr({kind:`gateway`,entry:a},e):T}
    ${c&&i.length===0?mt():u?ft(k(`devices.inventory.empty`)):i.map(t=>Cr(t,e))}
  `;return C`
    ${e.devicesError?C`<div class="callout danger">${e.devicesError}</div>`:T}
    ${e.lastError?C`<div class="callout danger">${e.lastError}</div>`:T}
    ${n.length>0?F({title:k(`devices.inventory.pendingApproval`),count:n.length},mr(n,r,e)):T}
    ${F({title:k(`devices.inventory.title`),description:xr(i,n.length,c),actions:l},d)}
    ${o.length>0?F({title:k(`devices.inventory.connectedWithoutPairing`)},o.map(t=>Pr({kind:`unpaired`,entry:t},e))):T}
  `}function Cr(e,t){return e.duplicates.length===0?Mr(e.primary,t):C`
    ${Mr(e.primary,t)}
    <details class="device-group__dups">
      <summary>
        ${k(e.duplicates.length===1?`devices.inventory.olderPairing`:`devices.inventory.olderPairings`,{count:String(e.duplicates.length),name:e.name})}
      </summary>
      ${e.duplicates.map(e=>Mr(e,t))}
    </details>
  `}function wr(e){let n=t(e)?.toLowerCase();return n===`win32`||n===`windows`||n?.startsWith(`windows `)===!0}function Tr(e){let t=e.node;return t?.paired?t.approvalState===void 0||t.approvalState===`approved`:!1}function Er(e){let n=t(e.node?.coreVersion);if(n)return n;if(t(e.node?.uiVersion))return;let r=t(e.node?.platform)?.toLowerCase();return r===`darwin`||r===`linux`||r===`win32`||r===`windows`?t(e.node?.version):void 0}function Dr(e,n){let r=[],i=Tr(e),a=Er(e),o=t(n);if(i&&a&&o&&a!==o){let e=k(`devices.inventory.versionDriftTitle`,{nodeVersion:a,gatewayVersion:o});r.push(C`<span title=${e}>
        ${L({kind:`warn`,label:k(`devices.inventory.versionDrift`)})}
      </span>`)}e.node?.workerBundle?.status===`missing`&&r.push(C`<span title=${k(`devices.inventory.workerMissingTitle`)}>
        ${L({kind:`warn`,label:k(`devices.inventory.workerMissing`)})}
      </span>`),i&&e.node?.connected===!1&&wr(e.platform)&&r.push(C`<span title=${k(`devices.inventory.manualWakeTitle`)}>
        ${L({kind:`warn`,label:k(`devices.inventory.manualWake`)})}
      </span>`);let s=e.node?.approvalState;return(s===`pending-approval`||s===`pending-reapproval`)&&r.push(L({kind:`warn`,label:k(`devices.inventory.approvalNeeded`)})),r}function Or(e){return k(`devices.inventory.inputAgo`,{time:ke(e*1e3,{suffix:!1})})}function kr(e){let t=[];if(e.platform&&t.push(At(e.platform)),e.modelIdentifier){let n=bn(e.modelIdentifier);n&&t.push(n),t.push(e.modelIdentifier)}e.version&&t.push(e.version),e.node?.workerBundle?.status===`installed`&&t.push(k(`devices.inventory.workerVersion`,{version:e.node.workerBundle.version})),e.connected&&e.presence?.lastInputSeconds!=null?t.push(Or(e.presence.lastInputSeconds)):!e.connected&&e.lastSeenAtMs?t.push(k(`devices.inventory.seen`,{time:y(e.lastSeenAtMs)})):!e.connected&&e.approvedAtMs&&t.push(k(`devices.inventory.approved`,{time:y(e.approvedAtMs)}));for(let n of e.roles)t.push(n);return e.autoApproved&&t.push(k(`devices.inventory.autoPaired`)),t.join(` · `)}function Ar(e){if(e.length===0)return T;let t=e.slice(0,Lr),n=e.length-t.length,r=n>0?` +${n}`:``;return C`<dt class="settings-row__desc">${k(`devices.inventory.commands`)}</dt>
    <dd class="settings-row__value settings-row__value--mono">${g(t)}${r}</dd>`}function jr(e,t){let n=e.device?.tokens??[],r=e.node?.commands??[],i=e.scopes;return C`
    <details class="device-entry__details">
      <summary>${k(`devices.inventory.details`)}</summary>
      <dl class="device-entry__facts">
        <dt class="settings-row__desc">${k(`devices.inventory.deviceIdLabel`)}</dt>
        <dd class="settings-row__value settings-row__value--mono" title=${e.id}>${e.id}</dd>
        ${e.remoteIp?C`<dt class="settings-row__desc">${k(`devices.inventory.remoteIpLabel`)}</dt>
                <dd class="settings-row__value settings-row__value--mono">${e.remoteIp}</dd>`:T}
        ${i.length>0?C`<dt class="settings-row__desc">${k(`devices.inventory.scopesLabel`)}</dt>
                <dd class="device-entry__scopes">
                  ${i.map(e=>C`<span class="device-capability device-capability--scope"
                        >${e}</span
                      >`)}
                </dd>`:T}
        ${n.length>0?C`<dt class="settings-row__desc">${k(`devices.inventory.tokens`)}</dt>
                <dd class="device-entry__tokens">
                  <table
                    class="device-token-table settings-table--stacked"
                    role="table"
                    aria-label=${k(`devices.inventory.tokens`)}
                  >
                    <thead>
                      <tr>
                        <th scope="col">${k(`devices.inventory.tokenRole`)}</th>
                        <th scope="col">${k(`devices.inventory.tokenStatus`)}</th>
                        <th scope="col">${k(`devices.inventory.scopesLabel`)}</th>
                        <th scope="col">${k(`devices.inventory.tokenAge`)}</th>
                        <th scope="col">${k(`devices.inventory.actions`)}</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${n.map(n=>Ir({id:e.id,name:e.name},n,t))}
                    </tbody>
                  </table>
                </dd>`:T}
        ${Ar(r)}
      </dl>
    </details>
  `}function Mr(e,t){let n=Ot({workerSlots:e.node?.workerSlots,capabilities:e.node?.caps,commands:e.node?.commands,unavailable:e.node?.connected!==!0||!Tr(e)}),r=e.node?.approvalState===`pending-approval`||e.node?.approvalState===`pending-reapproval`?e.node.pendingRequestId:void 0,i=rr(t,`node:${e.id}`),a=e.node?.connected??e.connected,o=L(a?{kind:`ok`,label:k(`devices.inventory.connected`)}:{kind:`muted`,label:k(`devices.inventory.offline`)});return C`
    <div class="settings-row device-entry" title=${n?.title??T}>
      ${U(Tn(e))}
      <div class="device-entry__body">
        <div class="device-entry__heading">
          <span class="settings-row__title">${e.name}</span>
          <span class="device-entry__status">${o}</span>
        </div>
        <span class="settings-row__desc">${kr(e)}</span>
        ${or(e.node?.hostStats,a?void 0:e.node?.hostStats?.updatedAtMs)}
        ${$n(e.node?.caps??[])}
      </div>
      <div class="settings-row__control">
        ${n?.meter??T} ${Dr(e,t.gatewayVersion)}
        ${Fr(t,i,e.node?.commands)}
        ${X(t,{name:e.name,deviceId:e.id,desktopEnvironment:i,pendingRequestId:r,onEditAlias:e.device?()=>t.onDeviceRename({id:e.id,name:e.name,operatorLabel:e.device?.operatorLabel}):void 0,onRemove:()=>t.onInventoryRemove(br(e))})}
      </div>
      ${jr(e,t)}
    </div>
  `}function Nr(e){let t=[];if(e.platform&&t.push(At(e.platform)),e.modelIdentifier){let n=bn(e.modelIdentifier);n&&t.push(n),t.push(e.modelIdentifier)}return e.version&&t.push(e.version),e.lastInputSeconds!=null&&t.push(Or(e.lastInputSeconds)),t}function Pr(e,t){let{entry:n}=e,r=e.kind===`gateway`,i=Nr(n);r&&t.gatewaySystemInfo&&i.push(k(`devices.inventory.uptime`,{time:be(t.gatewaySystemInfo.uptimeMs)??``})),!r&&Array.isArray(n.roles)&&i.push(...n.roles.filter(Boolean));let a=r?O.server:Tn({clientMode:n.mode??void 0,platform:n.platform??void 0,modelIdentifier:n.modelIdentifier??void 0}),o=r?n.host??k(`devices.execApprovals.gateway`):n.host??n.mode??k(`devices.inventory.unknownClient`),s=r?rr(t,`gateway`):void 0;return C`
    <div class="settings-row device-entry">
      ${U(a)}
      <div class="device-entry__body">
        <div class="device-entry__heading">
          <span class="settings-row__title">${o}</span>
          <span class="device-entry__status">
            ${L(r?{kind:`accent`,label:k(`devices.inventory.gateway`)}:{kind:`muted`,label:k(`devices.inventory.unpaired`)})}
          </span>
        </div>
        ${i.length>0?C`<span class="settings-row__desc">${i.join(` · `)}</span>`:T}
        ${r?or(t.gatewaySystemInfo):T}
      </div>
      <div class="settings-row__control">
        ${Fr(t,s)}
        ${X(t,{name:o,deviceId:n.deviceId,desktopEnvironment:s})}
      </div>
    </div>
  `}function Fr(e,t,n){return t?C`<button
      class="btn btn--sm device-entry__desktop"
      title=${k(`devices.inventory.desktopOpenWindow`)}
      @click=${()=>Pt(e.basePath,t)}
    >
      ${O.monitor} ${k(`devices.inventory.desktop`)}
    </button>`:n?.includes(`desktop.stream`)?C`<span
        class="device-capability device-capability--disabled"
        aria-disabled="true"
        title=${k(`devices.inventory.desktopEnableHint`)}
        >${O.monitor} ${k(`devices.inventory.desktop`)}</span
      >`:T}function Ir(e,t,n){let r=t.revokedAtMs?k(`devices.inventory.revoked`):k(`devices.inventory.active`),i=g(t.scopes),a=y(t.rotatedAtMs??t.createdAtMs??t.lastUsedAtMs??null);return C`
    <tr>
      <td data-label=${k(`devices.inventory.tokenRole`)}>${t.role}</td>
      <td data-label=${k(`devices.inventory.tokenStatus`)}>${r}</td>
      <td data-label=${k(`devices.inventory.scopesLabel`)}>${i}</td>
      <td data-label=${k(`devices.inventory.tokenAge`)}>${a}</td>
      <td data-label=${k(`devices.inventory.actions`)}>
        <div class="device-entry__token-actions">
          <button
            class="btn btn--sm"
            ?disabled=${!n.canManagePairing}
            @click=${()=>n.onDeviceRotate(e,t.role,t.scopes)}
          >
            ${k(`devices.inventory.rotate`)}
          </button>
          ${t.revokedAtMs?T:C`
                  <button
                    class="btn btn--sm danger"
                    ?disabled=${!n.canManagePairing}
                    @click=${()=>n.onDeviceRevoke(e.id,t.role)}
                  >
                    ${k(`devices.inventory.revoke`)}
                  </button>
                `}
        </div>
      </td>
    </tr>
  `}var Lr;function Rr(){return(Rr=e((()=>{x(),Ft(),A(),I(),Mt(),D(),v(),H(),B(),jt(),nr(),Z(),sr(),yr(),W(),Lr=16})))()}function zr(e){let t=Br(e),n=zn(e);return dt(C`
      ${!e.canManagePairing||!e.canAdmin?C`<div class="callout info" role="note">
              ${k(!e.canManagePairing&&!e.canAdmin?`devices.readOnly.pairingAndAdminRequired`:e.canManagePairing?`devices.readOnly.adminRequired`:`devices.readOnly.pairingRequired`)}
            </div>`:T}
      ${Sr(e)} ${Bn(n)}
      ${Vr(t)}
    `,{wide:!0})}function Br(e){return{...e,...Wr(e.configForm),ready:!!e.configForm,disabled:!e.canAdmin||e.configSaving||e.configFormMode===`raw`,nodes:wn(e.nodes,[`system.run`]),inventory:sn({nodes:e.nodes})}}function Vr(e){let t=e.nodes.length>0,n=C`
    <button
      class="btn"
      ?disabled=${e.disabled||!e.configDirty}
      @click=${e.onSaveBindings}
    >
      ${e.configSaving?k(`common.saving`):k(`common.save`)}
    </button>
  `,r=C`
    ${e.canAdmin?T:P({title:k(`devices.readOnly.adminRequired`)})}
    ${e.configFormMode===`raw`?P({title:k(`devices.binding.formModeHint`)}):T}
    ${e.ready?C`
            ${P({title:k(`devices.binding.defaultBinding`),description:t?k(`devices.binding.defaultBindingHint`):C`${k(`devices.binding.defaultBindingHint`)} ${k(`devices.binding.noNodes`)}`,control:Ur(null,e)})}
            ${e.agents.length===0?P({title:k(`devices.binding.noAgents`)}):e.agents.map(t=>Hr(t,e))}
          `:P({title:k(`devices.binding.loadConfigHint`),control:C`
              <button class="btn" ?disabled=${e.configLoading} @click=${e.onLoadConfig}>
                ${e.configLoading?k(`common.loading`):k(`common.loadConfig`)}
              </button>
            `})}
  `;return F({title:k(`devices.binding.execNodeBinding`),description:k(`devices.binding.execNodeBindingSubtitle`),actions:n},r)}function Hr(e,t){let n=e.binding??`__default__`,r=e.name?.trim()?`${e.name} (${e.id})`:e.id;return P({title:r,description:C`
      ${e.isDefault?k(`devices.binding.defaultAgent`):k(`devices.binding.agent`)} ·
      ${n===`__default__`?k(`devices.binding.usesDefault`,{node:t.defaultBinding??k(`devices.binding.any`)}):k(`devices.binding.override`,{node:e.binding??``})}
    `,control:Ur(e,t)})}function Ur(e,t){let n=e===null,r=n?``:`__default__`,i=n?t.defaultBinding??``:e.binding??`__default__`,a;if(i!==r)try{a=gn(t.inventory,i)}catch{}let o=t.nodes.map(e=>({...e,id:e.id===a?i:e.id,disabled:!1}));return i!==r&&!o.some(e=>e.id===i)&&o.push({id:i,label:`${i} (${k(`devices.binding.unavailable`)})`,disabled:!0}),C`
    <select
      class="settings-select"
      aria-label=${k(n?`devices.binding.node`:`devices.binding.binding`)}
      .value=${ze(i)}
      ?disabled=${t.disabled||t.nodes.length===0}
      @change=${n=>{let r=n.target.value.trim();e===null?t.onBindDefault(r||null):t.onBindAgent(e.id,r===`__default__`?null:r)}}
    >
      <option value=${r} ?selected=${i===r}>
        ${k(n?`devices.binding.anyNode`:`devices.binding.useDefault`)}
      </option>
      ${Be(o,e=>e.id,e=>C`<option
            value=${e.id}
            ?selected=${i===e.id}
            ?disabled=${e.disabled}
          >
            ${e.label}
          </option>`)}
    </select>
  `}function Wr(e){let t={id:`main`,name:void 0,isDefault:!0,binding:null};if(!e||typeof e!=`object`)return{defaultBinding:null,agents:[t]};let n=(e.tools??{}).exec??{},r=typeof n.node==`string`&&n.node.trim()?n.node.trim():null,i=Cn(e).map(e=>{let t=(e.record.tools??{}).exec??{},n=typeof t.node==`string`&&t.node.trim()?t.node.trim():null;return{id:e.id,name:e.name,isDefault:e.isDefault,binding:n}});return i.length===0?{defaultBinding:r,agents:[t]}:{defaultBinding:r,agents:i}}function Gr(){return(Gr=e((()=>{x(),He(),Ve(),cn(),_n(),I(),D(),Yn(),Rr(),W()})))()}var Kr,qr,Jr,$;function Yr(){return(Yr=e((()=>{o(),it(),x(),Re(),u(),Ge(),Ke(),Xe(),Ze(),zt(),I(),Lt(),D(),ve(),Le(),ot(),Te(),B(),Ct(),Me(),Tt(),me(),on(),Gr(),Kr=`https://docs.openclaw.ai/nodes`,qr=3e4,Jr=6e4,$=class extends fe{constructor(...e){super(...e),this.presence=[],this.gatewaySystemInfo=null,this.desktopEnvironments=[],this.systemInfoUnavailable=!1,this.pageState=Ee(),this.canPairDevice=!1,this.canManagePairing=!1,this.canAdmin=!1,this.execApprovalsTarget=`gateway`,this.execApprovalsTargetNodeId=null,this.pendingConfirmation=null,this.dialogs=new an({canManagePairing:()=>this.canManagePairing,gatewayConnected:()=>this.gateway.connected,requestGeneration:()=>this.requestGeneration,gatewayClient:()=>this.gateway.client,gatewayUrl:()=>this.context.gateway.connection.gatewayUrl,runPageTask:e=>this.runPageTask(e),pendingDialog:()=>this.pendingConfirmation,setPendingDialog:e=>{this.pendingConfirmation=e},setDevicesError:e=>{this.pageState.devicesError=e,this.requestUpdate()}}),this.routeDataInitialized=!1,this.gateway=new wt(this,{getGateway:()=>this.context?.gateway,onIdentityChange:e=>this.resetServerState(e.snapshot),invalidateRequests:e=>{this.pageState.requestGeneration=this.gateway.epoch,!e.identityChanged&&e.snapshot.phase!==`connected`&&this.resetServerState(e.snapshot),this.presenceTask.run([null,null])},onSnapshot:e=>this.handleGatewaySnapshot(e),ensureInitialData:()=>this.ensureInitialData()}),this.presenceTask=new M(this,{autoRun:!1,args:()=>[this.gateway.connected?this.gateway.gateway:null,this.gateway.connected?this.gateway.client:null],task:([e,t],{signal:n})=>e&&t?t.request(`system-presence`,{},{signal:n}):N,onComplete:e=>{Array.isArray(e)&&(this.presence=e)},onError:e=>{Ie(e)&&(this.presence=[])}}),this.systemInfoTask=new M(this,{args:()=>[this.gateway.gateway,this.canLoadSystemInfo?this.gateway.client:null],task:([e,t],{signal:n})=>e&&t?t.request(`system.info`,{},{signal:n}):N,onComplete:e=>{this.gatewaySystemInfo=e,this.systemInfoPolling.stop(),this.systemInfoPolling.start()},onError:e=>{Ie(e)&&(this.gatewaySystemInfo=null,this.systemInfoUnavailable=!0,this.systemInfoPolling.stop())}}),this.environmentsTask=new M(this,{args:()=>[this.gateway.gateway,this.canLoadDesktopEnvironments?this.gateway.client:null],task:([e,t],{signal:n})=>e&&t?t.request(`environments.list`,{},{signal:n}):N,onComplete:e=>{this.desktopEnvironments=e.environments},onError:()=>{this.desktopEnvironments=[]}}),this.systemInfoPolling=new Et(this,Jr,()=>this.refreshSystemInfo(),!1),this.polling=new Et(this,qr,()=>{this.refreshNodeInventory(!0),this.canManagePairing&&this.runPageTask(e=>b(e,{quiet:!0}))},!1),this.subscriptions=new pe(this).watch(()=>this.context?.runtimeConfig,(e,t)=>e.subscribe(t)).effect(()=>this.context?.gateway,e=>e.subscribeEvents(t=>{if(this.gateway.gateway!==e||this.context.gateway!==e)return;let n=t.event===`presence`?E(t.payload):null;if(n){let e=tn(n)!==tn(this.presence);this.presenceTask.run([null,null]),this.presence=n,e&&(this.canManagePairing&&this.runPageTask(e=>b(e,{quiet:!0})),this.refreshNodeInventory(!0))}(t.event===`device.pair.changed`||t.event===`device.pair.requested`||t.event===`device.pair.resolved`)&&this.canManagePairing&&this.runPageTask(e=>b(e,{quiet:!0})),(t.event===`node.pair.requested`||t.event===`node.pair.resolved`||t.event===`node.runnerInventory.changed`||t.event===`node.hostStats`)&&this.refreshNodeInventory(!0)}))}willUpdate(e){e.has(`routeData`)&&this.applyRouteData()}updated(e){e.has(`routeData`)&&this.ensureInitialData()}disconnectedCallback(){this.cancelPendingConfirmation(),this.subscriptions.clear(),this.presenceTask.run([null,null]),this.resetInventoryDetails(),this.presence=[],this.canPairDevice=!1,this.canManagePairing=!1,this.canAdmin=!1,super.disconnectedCallback()}get requestGeneration(){return this.pageState.requestGeneration}handleGatewaySnapshot(e){let t=e.snapshot;if(this.pageState.client=t.client,this.pageState.connected=t.phase===`connected`,this.pageState.requestGeneration=this.gateway.epoch,this.syncGatewayState(t),this.canLoadSystemInfo||(this.systemInfoTask.run([null,null]),this.gatewaySystemInfo=null),this.canLoadDesktopEnvironments||(this.environmentsTask.run([null,null]),this.desktopEnvironments=[]),this.routeDataInitialized&&t.phase===`connected`&&t.client&&(e.identityChanged||e.connectionChanged)){let e=E(t.hello?.snapshot);this.presence=e??[],this.loadPresence()}this.syncPolling()}syncGatewayState(e){let t=e.phase===`connected`,n=e.hello?.auth??null;this.canAdmin=t&&Ye(n),this.canManagePairing=t&&(!n||qe(n)),this.canPairDevice=this.canAdmin}applyRouteData(){let e=this.routeData;if(!e)return;this.routeDataInitialized=!0;let t=this.context.gateway.snapshot;if(!this.gateway.isRouteDataCurrent(e)){this.resetServerState(t),this.presence=E(t.hello?.snapshot)??[],this.loadPresence(),this.ensureInitialData();return}this.pageState={...e.devices,client:t.client,connected:t.phase===`connected`,requestGeneration:this.gateway.epoch};let n=E(t.hello?.snapshot);n&&(this.presence=n),this.loadPresence()}resetServerState(e){this.cancelPendingConfirmation(),this.pageState.requestGeneration+=1;let t=Ee({client:e.client,connected:e.phase===`connected`});t.requestGeneration=this.gateway.epoch,this.pageState=t,this.presenceTask.run([null,null]),this.presence=[],this.resetInventoryDetails()}async runPageTask(e){let t=this.pageState;try{let n=e(t);return this.pageState===t&&this.requestUpdate(),await n}finally{this.pageState===t&&this.requestUpdate()}}ensureInitialData(){let e=this.pageState;if(!e.connected||!e.client||!this.routeDataInitialized)return;!e.nodes.length&&!e.nodesLoading&&this.refreshNodeInventory(),this.canManagePairing&&!e.devicesList&&!e.devicesLoading&&this.runPageTask(e=>b(e));let t=this.context.runtimeConfig.state;!t.configSnapshot&&!t.configLoading&&this.context.runtimeConfig.refresh(),this.canAdmin&&!e.execApprovalsSnapshot&&!e.execApprovalsLoading&&this.runPageTask(e=>Se(e,this.resolveExecApprovalsTarget()))}syncPolling(){if(this.canLoadSystemInfo?this.systemInfoPolling.start():this.systemInfoPolling.stop(),this.gateway.connected&&this.gateway.client){this.polling.start();return}this.polling.stop()}get canLoadSystemInfo(){let e=this.gateway.snapshot;return this.isConnected&&e?.phase===`connected`&&!this.systemInfoUnavailable&&at(e,`system.info`)===!0}get canLoadDesktopEnvironments(){let e=this.gateway.snapshot;return this.isConnected&&!!(e&&Qe(e))}refreshSystemInfo(){this.canLoadSystemInfo&&this.systemInfoTask.status!==rt.PENDING&&this.systemInfoTask.run()}refreshNodeInventory(e=!1){this.refreshSystemInfo(),this.canLoadDesktopEnvironments&&this.environmentsTask.status!==rt.PENDING&&this.environmentsTask.run(),this.runPageTask(t=>Fe(t,{quiet:e}))}resetInventoryDetails(){this.systemInfoTask.run([null,null]),this.environmentsTask.run([null,null]),this.systemInfoPolling.stop(),this.gatewaySystemInfo=null,this.desktopEnvironments=[],this.systemInfoUnavailable=!1}loadPresence(){let e=this.gateway.gateway,t=this.gateway.client;return!e||!this.gateway.connected||!t?Promise.resolve():this.presenceTask.run([e,t])}cancelPendingConfirmation(){this.pendingConfirmation?.abort(),this.pendingConfirmation=null}async reportRotationOutcome(e,t,n){if(!this.canManagePairing)return;let r=await this.runPageTask(r=>ae(r,{deviceId:e.id,gatewayUrl:this.context.gateway.connection.gatewayUrl,role:t,scopes:n}));r&&await(r.delivery===`in-band`?Rt({title:k(`devices.inventory.rotatePromptTitle`,{role:t}),message:k(`devices.inventory.rotatePromptBody`),secret:r.token,acknowledgeLabel:k(`devices.inventory.rotateAcknowledge`),dismissHint:k(`devices.inventory.rotateDismissHint`)}):Rt({title:k(`devices.inventory.rotateWithheldTitle`,{device:e.name}),status:`success`,message:k(`devices.inventory.rotateWithheldNext`),callout:k(`devices.inventory.rotateWithheldException`),acknowledgeLabel:k(`common.close`),note:k(`devices.inventory.rotateWithheldNote`)}))}resolveExecApprovalsTarget(){return this.execApprovalsTarget===`node`&&this.execApprovalsTargetNodeId?{kind:`node`,nodeId:this.execApprovalsTargetNodeId}:{kind:`gateway`}}render(){let e=this.pageState,t=this.context.runtimeConfig.state,n=this.context.gateway.snapshot,r=n.phase===`connected`&&n.hello?.server?.version?.trim()||null;return C`
      <section class="content-header">
        <div>
          <div class="page-title">${$e(`devices`)}</div>
          <div class="page-subtitle">
            ${We(`devices`)} ${lt(Kr)}
          </div>
        </div>
      </section>
      ${It(zr({loading:e.nodesLoading,nodes:e.nodes,presence:this.presence,gatewayVersion:r,basePath:this.context.basePath,gatewaySystemInfo:this.gatewaySystemInfo,desktopEnvironments:this.desktopEnvironments,lastError:e.lastError,devicesLoading:e.devicesLoading,devicesError:e.devicesError,devicesList:e.devicesList,canPairDevice:this.canPairDevice,canManagePairing:this.canManagePairing,canAdmin:this.canAdmin,configForm:oe(t),configLoading:t.configLoading,configSaving:t.configSaving,configDirty:t.configFormDirty,configFormMode:t.configFormMode,execApprovalsLoading:e.execApprovalsLoading,execApprovalsSaving:e.execApprovalsSaving,execApprovalsDirty:e.execApprovalsDirty,execApprovalsSnapshot:e.execApprovalsSnapshot,execApprovalsForm:e.execApprovalsForm,execApprovalsSelectedAgent:e.execApprovalsSelectedAgent,execApprovalsTarget:this.execApprovalsTarget,execApprovalsTargetNodeId:this.execApprovalsTargetNodeId,onDevicePairSetupOpen:()=>{this.canAdmin&&this.context.overlays.openDevicePairSetup()},onDeviceApprove:e=>{this.canManagePairing&&this.runPageTask(t=>we(t,e))},onDeviceReject:e=>void this.dialogs.confirmPairingReject(`device`,e),onNodeApprove:e=>{this.canManagePairing&&this.runPageTask(t=>je(t,e))},onNodeReject:e=>void this.dialogs.confirmPairingReject(`node`,e),onInventoryRemove:e=>void this.dialogs.confirmInventoryRemoval({kind:`entry`,entry:e}),onInventoryCleanup:e=>{e.length>0&&this.dialogs.confirmInventoryRemoval({kind:`stale`,entries:e})},onDeviceRotate:(e,t,n)=>void this.reportRotationOutcome(e,t,n),onDeviceRevoke:(e,t)=>void this.dialogs.confirmTokenRevoke(e,t),onDeviceRename:e=>void this.dialogs.editAlias(e),onLoadConfig:()=>void this.context.runtimeConfig.refresh({discardPendingChanges:!0}),onLoadExecApprovals:()=>this.canAdmin?void this.runPageTask(e=>Se(e,this.resolveExecApprovalsTarget())):void 0,onBindDefault:e=>{this.canAdmin&&(e?this.context.runtimeConfig.patchForm([`tools`,`exec`,`node`],e):this.context.runtimeConfig.removeFormValue([`tools`,`exec`,`node`]))},onBindAgent:(e,t)=>{if(!this.canAdmin)return;let n=this.context.runtimeConfig.agentEntry(e,{ensure:!!t});if(!n)return;let r=[...n.path,`tools`,`exec`,`node`];t?this.context.runtimeConfig.patchForm(r,t):this.context.runtimeConfig.removeFormValue(r)},onSaveBindings:()=>{this.canAdmin&&this.context.runtimeConfig.save()},onExecApprovalsTargetChange:(t,n)=>{this.execApprovalsTarget=t,this.execApprovalsTargetNodeId=n,e.execApprovalsSnapshot=null,e.execApprovalsForm=null,e.execApprovalsDirty=!1,e.execApprovalsSelectedAgent=null,this.requestUpdate()},onExecApprovalsSelectAgent:t=>{e.execApprovalsSelectedAgent=t,this.requestUpdate()},onExecApprovalsPatch:(e,t)=>this.canAdmin?void this.runPageTask(n=>ge(n,e,t)):void 0,onExecApprovalsRemove:e=>this.canAdmin?void this.runPageTask(t=>_e(t,e)):void 0,onSaveExecApprovals:()=>this.canAdmin?void this.runPageTask(e=>De(e,this.resolveExecApprovalsTarget())):void 0}))}
    `}},r([a({context:Je,subscribe:!0})],$.prototype,`context`,void 0),r([Ue({attribute:!1})],$.prototype,`routeData`,void 0),r([w()],$.prototype,`presence`,void 0),r([w()],$.prototype,`gatewaySystemInfo`,void 0),r([w()],$.prototype,`desktopEnvironments`,void 0),r([w()],$.prototype,`pageState`,void 0),r([w()],$.prototype,`canPairDevice`,void 0),r([w()],$.prototype,`canManagePairing`,void 0),r([w()],$.prototype,`canAdmin`,void 0),r([w()],$.prototype,`execApprovalsTarget`,void 0),r([w()],$.prototype,`execApprovalsTargetNodeId`,void 0),customElements.get(`openclaw-devices-page`)||customElements.define(`openclaw-devices-page`,$)})))()}Yr();
//# sourceMappingURL=devices-page-Cq7wO2Xd.js.map