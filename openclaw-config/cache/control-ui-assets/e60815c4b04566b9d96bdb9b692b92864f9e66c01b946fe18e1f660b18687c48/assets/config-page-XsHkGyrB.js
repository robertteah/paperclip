import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$n as t,Ca as n,Fr as r,Hn as i,L as a,Nn as o,R as s,Vn as c,Zn as l,nr as u,xa as d}from"./control-ui-foundation-DMb6IeIq.js";import{A as ee,Bo as f,Bs as p,Ds as te,Gc as m,Gn as h,Hs as g,Jo as ne,Kn as _,Lo as v,Os as re,Ro as ie,Uo as ae,Vs as oe,Xt as se,Yn as ce,Yo as y,_n as le,fi as ue,gn as b,hi as de,hn as fe,ks as pe,ls as me,mi as he,mn as ge,nn as _e,on as ve,os as x,qc as S,qn as ye,qo as C,tn as be,ui as xe,us as Se,xr as Ce,yr as we}from"./control-ui-core-DzidtL-P.js";import{$ as w,C as Te,E as Ee,K as T,O as De,X as E,at as D,m as Oe,p as ke,q as O,r as Ae,st as k,t as je,w as Me}from"./lit-runtime-vxhGQLC6.js";import{$ as Ne,C as Pe,Ct as Fe,D as Ie,Et as Le,J as Re,K as ze,O as Be,Rn as Ve,St as He,T as Ue,Tn as We,Tt as Ge,Vn as Ke,X as qe,Y as A,_t as Je,a as Ye,an as Xe,bt as Ze,c as Qe,cn as $e,cr as et,et as tt,gt as nt,h as rt,hr as it,ht as at,i as ot,it as st,kt as ct,l as lt,m as ut,mt as dt,n as ft,nn as pt,o as mt,on as ht,ot as gt,pr as _t,pt as vt,q as yt,r as bt,rt as xt,s as St,sn as Ct,st as wt,tt as Tt,v as Et,vt as Dt,w as Ot,wn as kt,wt as At,xt as jt,y as Mt,yt as Nt,zn as Pt}from"./control-ui-core-CaKBexnk.js";import{Bt as j,Ft as M,Gt as N,It as P,Jt as Ft,Kt as It,Nt as Lt,Ut as Rt,ft as zt,ht as Bt}from"./control-ui-core-uEI6aN5p.js";import{B as F,I as Vt,L as Ht,R as Ut}from"./control-ui-boot-shared-nBxCfWV5.js";import{a as Wt,n as Gt,r as Kt}from"./gateway-runtime-DP4whqrA.js";import{$n as qt,C as Jt,Ct as Yt,D as Xt,Dt as I,E as Zt,Et as Qt,Ft as L,Gr as $t,Ht as R,Lt as z,M as en,Mt as tn,N as nn,Nt as rn,O as an,Ot as B,Pt as on,Rt as sn,S as cn,St as ln,T as un,Tt as dn,Vt as V,Wr as fn,_i as pn,_t as mn,b as hn,bt as gn,er as _n,gi as vn,gt as yn,hi as bn,j as xn,jt as Sn,k as Cn,kt as wn,ro as Tn,to as En,vi as Dn,vt as On,w as kn,wt as H,x as An,xt as jn,yt as Mn,zt as U}from"./control-ui-boot-shared-Cyt1Zyts.js";import{Ct as Nn,N as Pn,P as Fn,cr as In,sr as Ln,xt as Rn}from"./control-ui-boot-chat-pu3gR1ly.js";import{Ft as zn,It as Bn,Lt as Vn,Pt as Hn,Qs as Un,Zs as Wn,bs as Gn,oi as Kn,ys as qn,zt as Jn}from"./control-ui-boot-shared-CH-OC11d.js";import{t as Yn}from"./update-run-view-Dzp5fok2.js";import{n as Xn,t as Zn}from"./en-settings-D6ws8ujh.js";import{V as Qn}from"./control-ui-boot-new-DeGMjctK.js";import{i as $n,n as er,t as tr}from"./select-picker-DnWtx1hT.js";import{R as nr,z as rr}from"./control-ui-boot-chat-B4FQbyJR.js";import{a as ir,t as ar}from"./settings-targets-D_7u0c_C.js";import{_ as or,a as sr,c as cr,d as lr,f as ur,g as dr,l as fr,m as pr,n as mr,o as hr,p as gr,r as _r,s as vr,t as yr}from"./setup-schema-Dn8SjU6i.js";import{n as br,t as xr}from"./hub-tabs-DuEhaWau.js";import{n as Sr,t as Cr}from"./settings-workspace-IBRfeTG9.js";import{a as wr,c as Tr,n as Er,o as Dr,s as Or,t as kr}from"./tool-catalog-BDpmuWHA.js";import{n as Ar,t as jr}from"./model-picker-i-vL0MMG.js";import{a as Mr,c as Nr,d as Pr,f as Fr,h as Ir,m as Lr,n as Rr,p as zr,s as Br,t as Vr}from"./config-form-DfDQdICi.js";import{n as Hr,r as Ur,t as Wr}from"./system-info-DnHf78J4.js";import{n as Gr,t as Kr}from"./en-transcripts-D6JXRJxI.js";import{n as qr,t as Jr}from"./en-memory-import-x86UA4vP.js";function Yr(e){return V({title:N(`browserLinkPreferences.openInControlUi`),checked:e.enabled,onChange:e.onChange})}function Xr(){return(Xr=e((()=>{H(),j()})))()}var Zr,Qr;function $r(){return($r=e((()=>{y(),Zr={url:``,busy:!1,message:null,expanded:!1,focusToken:0},Qr=class{constructor(e){this.publish=e,this.requestRevision=0,this.activationIntent={revision:0,theme:null},this.gatewayScope=``,this.serverSelectionRevision=0,this.state=Zr}get snapshot(){return this.state}connect(e,t){this.gatewayScope=e,this.serverSelectionRevision=this.selectionForScope(e,t)?.revision??0}synchronizeScope(e,t){this.gatewayScope&&e!==this.gatewayScope&&this.retireImport(),this.connect(e,t)}adoptSettings(e,t,n){let r=this.selectionForScope(this.gatewayScope,n),i=this.serverSelectionRevision!==(r?.revision??0);return this.serverSelectionRevision=r?.revision??0,t.customTheme?.importedAt===e.customTheme?.importedAt?(i&&this.recordActivation(r?.theme??null),t.theme!==e.theme&&this.recordActivation(t.theme),t):(this.retireImport(),t)}recordActivation(e){this.activationIntent={revision:this.activationIntent.revision+1,theme:e}}open(){this.update({expanded:!0,focusToken:this.state.focusToken+1})}setUrl(e){e!==this.state.url&&this.retireImport(),this.update({url:e,...this.state.message?.kind===`error`?{message:null}:{}})}retireForConfigMutation(e){this.state.busy&&(this.retireImport(),this.update({message:{kind:`error`,text:e}}))}async import(e){let t=this.blockedReason(e.config);if(t){this.update({expanded:!0,message:{kind:`error`,text:e.messages.blocked(t)}});return}let n=this.beginImport(),r=this.state.url;this.update({expanded:!0,busy:!0,message:null});try{let t=await e.load(r);if(!this.ownsImport(n))return;e.apply(t,!e.hasCustomTheme&&this.mayActivate(n)),this.update({url:``,message:{kind:`success`,text:e.messages.imported(t.label)}})}catch(e){if(!this.ownsImport(n))return;this.update({message:{kind:`error`,text:C(e)}})}finally{this.ownsImport(n)&&this.update({busy:!1})}}clear(e){this.retireImport(),e.apply(),this.update({expanded:!0,message:{kind:`success`,text:e.message}})}retireImport(){this.requestRevision+=1,this.state.busy&&this.update({busy:!1})}beginImport(){return this.requestRevision+=1,{requestRevision:this.requestRevision,activationRevision:this.activationIntent.revision}}ownsImport(e){return e.requestRevision===this.requestRevision}mayActivate(e){return e.activationRevision===this.activationIntent.revision||this.activationIntent.theme===`custom`}blockedReason(e){return e.connected&&(e.configLoading||!e.configSnapshot)?`loading`:e.configFormDirty||e.configSaving||e.configApplying||e.configAutoSaveStatus===`saving`?`unsaved`:null}update(e){this.state={...this.state,...e},this.publish(this.state)}selectionForScope(e,t){return t?.scope===e?t:null}}})))()}function ei(e){let t=e.split(`/`).filter(Boolean),n=t.at(-1);return n&&(t.length===2&&t[0]===`themes`||t.length===3&&t[0]===`r`&&t[1]===`themes`)?(Le(n),n):null}function ti(e){let t=n(e);if(!t)throw Error(`Paste a tweakcn theme link to import.`);let r=t.replace(/[.,;:]+$/,``);return Ze.test(r)?`https://tweakcn.com/themes/${r}`:r.startsWith(`/themes/`)||r.startsWith(`/r/themes/`)?`https://tweakcn.com${r}`:/^(?:www\.)?tweakcn\.com\//i.test(r)?`https://${r}`:r.match(/https?:\/\/(?:www\.)?tweakcn\.com\/[^\s<>"')]+/i)?.[0]?.replace(/[.,;:]+$/,``)??r}function ni(e){let t=ei(e.pathname);if(t)return t;let n=e.searchParams.get(`theme`)??e.searchParams.get(`themeId`)??e.searchParams.get(`id`);if(n)return Le(n),n;throw Error(`Unsupported tweakcn link. Expected a theme share URL.`)}function ri(e,t){let n=At(e,t),r=n.toLowerCase();if(gi.has(r)||vi.test(n)||_i.test(n))return n;throw Error(`Unsupported tweakcn token: ${t}`)}function ii(e,t){return t===`font-sans`||t===`font-mono`?Ge(e,t):ri(e,t)}function W(e,t,r,i){let a=n(e[r]);if(a)return ii(a,r);let o=n(t?.[r]);if(o)return ii(o,r);if(i!=null)return r===`font-sans`||r===`font-mono`?Ge(i,r):At(i,r);throw Error(`tweakcn theme is missing required token: ${r}`)}function ai(e,t,n){let r=e===`light`,i=r?`black`:`white`,a=W(t,n,`background`),o=W(t,n,`foreground`),s=W(t,n,`card`),c=W(t,n,`card-foreground`),l=W(t,n,`popover`),u=W(t,n,`popover-foreground`),d=W(t,n,`primary`),ee=W(t,n,`primary-foreground`),f=W(t,n,`secondary`),p=W(t,n,`secondary-foreground`),te=W(t,n,`muted`),m=W(t,n,`muted-foreground`),h=W(t,n,`accent`),g=W(t,n,`accent-foreground`),ne=W(t,n,`destructive`),_=W(t,n,`destructive-foreground`),v=W(t,n,`border`),re=W(t,n,`input`),ie=W(t,n,`ring`),ae=W(t,n,`font-sans`,mi),oe=W(t,n,`font-mono`,hi);return Fe([[`bg`,a],[`bg-accent`,`color-mix(in srgb, var(--bg) 88%, var(--card) 12%)`],[`bg-elevated`,s],[`bg-hover`,`color-mix(in srgb, var(--muted) 68%, var(--bg) 32%)`],[`bg-muted`,te],[`bg-content`,`color-mix(in srgb, var(--bg) 92%, var(--card) 8%)`],[`card`,s],[`card-foreground`,c],[`card-highlight`,`color-mix(in srgb, var(--text) ${r?`3`:`5`}%, transparent)`],[`popover`,l],[`popover-foreground`,u],[`panel`,a],[`panel-strong`,s],[`panel-hover`,`color-mix(in srgb, var(--card) 76%, var(--muted) 24%)`],[`chrome`,`color-mix(in srgb, var(--bg) 96%, transparent)`],[`chrome-strong`,`color-mix(in srgb, var(--bg) 98%, transparent)`],[`text`,o],[`text-strong`,o],[`chat-text`,o],[`muted`,m],[`muted-strong`,`color-mix(in srgb, var(--muted) 84%, var(--text) 16%)`],[`muted-foreground`,m],[`border`,v],[`border-strong`,`color-mix(in srgb, var(--border) 72%, var(--text) 28%)`],[`border-hover`,`color-mix(in srgb, var(--border) 55%, var(--text) 45%)`],[`input`,re],[`ring`,ie],[`accent`,h],[`accent-hover`,`color-mix(in srgb, var(--accent) 82%, ${i} 18%)`],[`accent-muted`,h],[`accent-subtle`,`color-mix(in srgb, var(--accent) ${r?`10`:`16`}%, transparent)`],[`accent-foreground`,g],[`accent-glow`,`color-mix(in srgb, var(--accent) ${r?`18`:`30`}%, transparent)`],[`primary`,d],[`primary-foreground`,ee],[`secondary`,f],[`secondary-foreground`,p],[`accent-2`,d],[`accent-2-muted`,`color-mix(in srgb, var(--accent-2) 72%, transparent)`],[`accent-2-subtle`,`color-mix(in srgb, var(--accent-2) ${r?`8`:`12`}%, transparent)`],[`destructive`,ne],[`destructive-foreground`,_],[`danger`,ne],[`danger-muted`,`color-mix(in srgb, var(--danger) 75%, transparent)`],[`danger-subtle`,`color-mix(in srgb, var(--danger) ${r?`8`:`12`}%, transparent)`],[`focus`,`color-mix(in srgb, var(--ring) ${r?`14`:`22`}%, transparent)`],[`focus-ring`,`0 0 0 2px var(--bg), 0 0 0 3px color-mix(in srgb, var(--ring) ${r?`70`:`80`}%, transparent)`],[`focus-glow`,`0 0 0 2px var(--bg), 0 0 0 3px var(--ring), 0 0 16px var(--accent-glow)`],[`font-body`,ae],[`font-display`,ae],[`mono`,oe],[`grid-line`,`color-mix(in srgb, var(--text) ${r?`4`:`3`}%, transparent)`]])}function oi(e){let t=ti(e),n;try{n=new URL(t)}catch{throw Error(`Paste a full tweakcn URL.`)}if(!di.has(n.hostname))throw Error(`Only tweakcn.com theme links are supported.`);let r=ni(n);return{themeId:r,sourceUrl:`https://tweakcn.com/themes/${r}`,fetchUrl:`https://tweakcn.com/r/themes/${r}`}}function si(e,t){let r=l(e),i=l(r?.cssVars),a=l(i?.light),o=l(i?.dark),s=i?.theme===void 0?void 0:l(i.theme);if(!r||!i||!a||!o||s===null)throw Error(`tweakcn returned an invalid theme payload.`);return{sourceUrl:t.sourceUrl,themeId:t.themeId,label:jt(n(r.name)),importedAt:new Date().toISOString(),light:ai(`light`,a,s),dark:ai(`dark`,o,s)}}function ci(e){if(!e)return;let t;try{t=new URL(e)}catch{throw Error(`Unexpected tweakcn import response URL.`)}if(t.protocol!==`https:`||!di.has(t.hostname))throw Error(`Unexpected redirect during tweakcn import.`)}async function li(e){let t=await In(e,{maxBytes:fi,tooLargeMessage:`tweakcn theme payload is too large.`,missingBodyMessage:`tweakcn returned an unreadable theme payload.`});try{return JSON.parse(t)}catch{throw Error(`tweakcn returned invalid JSON.`)}}async function ui(e,t=fetch){let n=oi(e),r=new AbortController,i=setTimeout(()=>r.abort(),pi);try{let e=await t(n.fetchUrl,{headers:{accept:`application/json`},redirect:`error`,signal:r.signal});if(ci(e.url),!e.ok)throw Error(`tweakcn import failed (${e.status}).`);return si(await li(e),n)}catch(e){throw r.signal.aborted?Error(`tweakcn import timed out.`,{cause:e}):e}finally{clearTimeout(i)}}var di,fi,pi,mi,hi,gi,_i,vi;function yi(){return(yi=e((()=>{He(),Ln(),di=new Set([`tweakcn.com`,`www.tweakcn.com`]),fi=2e5,pi=1e4,mi=`"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,hi=`"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, monospace`,gi=new Set([`black`,`white`,`transparent`,`currentcolor`]),_i=/^(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch)\([a-z0-9+\-.,/%\s]+\)$/i,vi=/^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i})))()}function bi(e){return/^[A-Za-z0-9._:/-]+$/.test(e)?e:`'${e.replaceAll(`'`,`'\\''`)}'`}function xi(e){switch(e){case`verify-off`:return N(`mcpPage.tlsVerifyOff`);case`mtls`:return N(`mcpPage.mtls`);default:return null}}var G;function Si(){return(Si=e((()=>{s(),T(),w(),rt(),Ct(),j(),oe(),gn(),y(),S(),_(),P(),Pn(),H(),G=class extends m{constructor(...e){super(...e),this.pluginsHref=``,this.docsUrl=`https://docs.openclaw.ai/tools/mcp`,this.rows=null,this.busy=!1,this.message=null,this.formOpen=!1,this.feedbackGeneration=0,this.subscriptions=new h(this).effect(()=>this.context?.runtimeConfig,e=>{let t=this.feedbackGeneration;this.syncRows(),e.ensureLoaded().catch(n=>{t!==this.feedbackGeneration||!this.isConnected||e!==this.context?.runtimeConfig||(this.message={kind:`error`,text:C(n)})});let n=e.subscribe(()=>this.syncRows());return()=>{this.feedbackGeneration+=1,this.busy=!1,this.message=null,n()}}).effect(()=>this.context?.gateway,e=>e.subscribe(()=>this.requestUpdate()))}disconnectedCallback(){this.subscriptions.clear(),super.disconnectedCallback()}syncRows(){let e=this.context?.runtimeConfig.state.configSnapshot;this.rows=Yt(g(e))}mutationBlockedReason(){let e=this.context?.gateway;return e?.snapshot.phase===`connected`?pt(e.snapshot.hello?.auth??null)?null:N(`mcpServers.adminRequired`):N(`mcpServers.connectRequired`)}canMutate(){return this.context!==void 0&&this.mutationBlockedReason()===null}async mutate(e){if(!this.context||!this.canMutate()||this.busy)return!1;let t=this.feedbackGeneration;this.busy=!0,this.message=null;let n=await ln(this.context.runtimeConfig,e);return t===this.feedbackGeneration&&(this.busy=!1,n.ok?(this.syncRows(),this.message={kind:`success`,text:e.successText},!0):(this.message={kind:`error`,text:n.error},!1))}async addServer(e){let t=e.name.trim();if(!yn.test(t)){this.message={kind:`error`,text:N(`mcpServers.nameInvalid`)};return}let n=jn(e.target,e.transport);if(!n){this.message={kind:`error`,text:N(`mcpServers.targetInvalid`)};return}await this.mutate({buildPatch:e=>mn(e,t,n),note:`mcp settings: add server ${t}`,successText:N(`mcpServers.addedSuccess`,{name:t})})&&(this.formOpen=!1)}async toggleServer(e,t){await this.mutate({buildPatch:n=>Mn(n,e,t),note:`mcp settings: ${t?`enable`:`disable`} server ${e}`,successText:N(t?`mcpServers.enabledSuccess`:`mcpServers.disabledSuccess`,{name:e})})}async removeServer(e){await this.mutate({buildPatch:t=>On(t,e),note:`mcp settings: remove server ${e}`,successText:N(`mcpServers.removedSuccess`,{name:e})})}renderRow(e){let t=`openclaw mcp ${e.auth===`oauth`?`login`:`probe`} ${bi(e.name)}`,n=[e.transport,e.auth,e.toolFilter?N(`mcpPage.toolFilter`):null,e.parallel?N(`mcpPage.parallel`):null,xi(e.tls)].filter(e=>!!e),r=this.mutationBlockedReason(),i=this.busy||!this.canMutate();return E`
      <div class="settings-row mcp-server-row" data-mcp-name=${e.name}>
        <div class="settings-row__text">
          <span class="settings-row__title">${e.name}</span>
          <span class="settings-row__desc mcp-server-row__launch">
            ${e.target||N(`mcpServers.missingTransport`)}
          </span>
          <span class="settings-row__desc">${n.join(` · `)}</span>
        </div>
        <div class="settings-row__control">
          ${U({kind:e.enabled?`ok`:`muted`,label:e.enabled?N(`common.enabled`):N(`common.disabled`)})}
          <code>${t}</code>
          <button
            type="button"
            class="btn btn--sm"
            title=${r??``}
            ?disabled=${i}
            @click=${()=>void this.toggleServer(e.name,!e.enabled)}
          >
            ${this.busy?N(`mcpServers.working`):e.enabled?N(`mcpServers.disable`):N(`mcpServers.enable`)}
          </button>
          <button
            type="button"
            class="btn btn--sm btn--icon mcp-server-remove"
            aria-label=${N(`mcpServers.removeNamed`,{name:e.name})}
            title=${r??N(`mcpServers.removeNamed`,{name:e.name})}
            ?disabled=${i}
            @click=${()=>void this.removeServer(e.name)}
          >
            ${M.trash}
          </button>
        </div>
      </div>
    `}render(){let e=this.mutationBlockedReason(),t=this.rows,n=t?t.length===0?B(E`
            ${N(`mcpPage.noServers`)} ${dn(this.docsUrl,N(`mcpPage.setUpFirstServer`))}
          `):t.map(e=>this.renderRow(e)):Sn({rows:2});return E`
      <div class="mcp-server-list">
        ${z({title:N(`mcpPage.configuredServers`),description:E`
              ${N(`mcpPage.runtimeHint`)} ${Qt(this.pluginsHref)}
            `,actions:E`
              <button
                type="button"
                class="btn btn--sm"
                title=${e??``}
                ?disabled=${this.busy||!this.canMutate()}
                @click=${()=>{this.formOpen=!this.formOpen,this.formOpen&&(this.message=null)}}
              >
                <span aria-hidden="true">${M.plus}</span>
                ${N(`mcpServers.add`)}
              </button>
            `},E`
            ${this.formOpen?Fn({busy:this.busy,disabled:!this.canMutate(),blockedReason:e,onSubmit:e=>void this.addServer(e),onCancel:()=>{this.formOpen=!1}}):O}
            ${this.message?E`<div
                    class="mcp-server-message mcp-server-message--${this.message.kind}"
                    role=${this.message.kind===`error`?`alert`:`status`}
                  >
                    ${this.message.text}
                  </div>`:O}
            ${n}
          `)}
      </div>
    `}},r([a({context:ut,subscribe:!0})],G.prototype,`context`,void 0),r([k()],G.prototype,`pluginsHref`,void 0),r([k()],G.prototype,`docsUrl`,void 0),r([D()],G.prototype,`rows`,void 0),r([D()],G.prototype,`busy`,void 0),r([D()],G.prototype,`message`,void 0),r([D()],G.prototype,`formOpen`,void 0),customElements.get(`openclaw-mcp-servers-card`)||customElements.define(`openclaw-mcp-servers-card`,G)})))()}function Ci(e){let t=Yt(e.configObject)??[],n=t.filter(e=>e.enabled).length,r=t.filter(e=>e.auth===`oauth`).length,i=t.filter(e=>e.toolFilter).length;return E`
    <section class="mcp-page">
      <div class="settings-page">
        <section class="settings-section mcp-page__summary">
          <div class="settings-section__header">
            <h2 class="settings-section__heading">${N(`mcpPage.servers`)}</h2>
          </div>
          <div class="settings-group">
            ${L({title:N(`mcpPage.servers`),control:R(t.length)})}
            ${L({title:N(`common.enabled`),control:R(n)})}
            ${L({title:N(`mcpPage.oauth`),control:R(r)})}
            ${L({title:N(`mcpPage.filtered`),control:R(i)})}
          </div>
        </section>

        <section class="settings-section">
          <div class="settings-section__header">
            <h2 class="settings-section__heading">${N(`mcpPage.operatorCommands`)}</h2>
          </div>
          <p class="settings-section__desc">${N(`mcpPage.operatorCommandsHint`)}</p>
          <div class="settings-group">
            <div class="settings-row settings-row--stacked">
              <div class="mcp-command-card__grid">
                <code>openclaw mcp status --verbose</code>
                <code>openclaw mcp doctor --probe</code>
                <code>openclaw mcp login &lt;name&gt;</code>
                <code>openclaw mcp reload</code>
              </div>
            </div>
          </div>
        </section>

        <openclaw-mcp-servers-card
          .pluginsHref=${e.pluginsHref}
          .docsUrl=${wi}
        ></openclaw-mcp-servers-card>
      </div>

      ${e.editor}
    </section>
  `}var wi;function Ti(){return(Ti=e((()=>{T(),Si(),H(),j(),gn(),wi=`https://docs.openclaw.ai/tools/mcp`})))()}function Ei(e){return e?.availability===`enabled`&&e.canStart!==!1&&!!e.autoStart}function Di(e){return E`<openclaw-meeting-capture-settings
    .mutationDisabled=${e.mutationDisabled}
    .advancedExpanded=${e.advancedExpanded}
    .editor=${e.editor}
  ></openclaw-meeting-capture-settings>`}var Oi,ki,K;function Ai(){return(Ai=e((()=>{s(),Vt(),T(),w(),Te(),ke(),rt(),Ct(),P(),H(),j(),Kr(),y(),Un(),S(),_(),ir(),Gr(),Oi=[`accountId`,`guildId`,`channelId`,`meetingUrl`],ki=[`title`,...Oi,`sessionId`],K=class extends m{constructor(...e){super(...e),this.mutationDisabled=!1,this.editor=O,this.advancedExpanded=!1,this.editing=null,this.editError=null,this.editedProviderId=``,this.sourceDraft={},this.gateway=new Wn(this,{getGateway:()=>this.context?.gateway,invalidateRequests:()=>this.statusTask.abort(),onSnapshot:({snapshot:{hello:e}})=>{(e!==this.connectionHello||e?.auth!==this.connectionAuth)&&(this.gateway.invalidate(),this.statusTask.abort()),this.connectionHello=e,this.connectionAuth=e?.auth}}),this.subscriptions=new h(this).watch(()=>this.context?.runtimeConfig,(e,t)=>e.subscribe(t)),this.statusTask=new Ht(this,{args:()=>[this.client,this.gateway.epoch,this.context?.runtimeConfig.state.configSnapshot?.hash],task:async([e,,t],{signal:n})=>{if(!e)return Ut;let r=this.gateway.capture(),i=this.context.gateway,a=i.snapshot.hello,o=a?.auth,s=await e.request(`transcripts.status`,{},{signal:n}),c=()=>this.client===e&&r!==null&&this.gateway.isCurrent(r)&&this.context.gateway===i&&i.snapshot.hello===a&&a?.auth===o&&this.context.runtimeConfig.state.configSnapshot?.hash===t;return c()?{status:s,isCurrent:c}:Ut},onComplete:e=>{e.isCurrent()&&this.retainLocatorRequirements(e.status)}})}get client(){let e=this.context?.gateway.snapshot;return this.isConnected&&e?.phase===`connected`&&Xe(e.hello?.auth??null)?e.client:null}disconnectedCallback(){this.statusTask.abort(),this.subscriptions.clear(),this.editSource(null),super.disconnectedCallback()}get disabled(){let e=this.context.runtimeConfig;return this.mutationDisabled||!e.canSet||!e.state.connected||e.state.configLoading||e.state.configSaving||e.state.configApplying||this.rawDraftPending||!pt(this.context.gateway.snapshot.hello?.auth??null)}get rawDraftPending(){let e=this.context.runtimeConfig.state;return e.configFormMode===`raw`&&e.configFormDirty}get config(){let e=this.context.runtimeConfig.state;return l(l(e.configForm??e.configSnapshot?.config)?.transcripts)}get sources(){return Array.isArray(this.config?.autoStart)?this.config.autoStart:[]}editSource(e){if(this.editing===e)return;this.editing=e,this.editedSource=typeof e==`number`?this.sources[e]:void 0,this.sourceDraft={...l(this.editedSource)},this.locatorRequirements=this.originalLocatorRequirements=void 0;let t=l(this.editedSource)?.providerId;this.selectProvider(typeof t==`string`?t:``),this.editError=null}selectProvider(e){this.editedProviderId!==e&&(this.locatorRequirements=void 0),this.editedProviderId=e,this.retainLocatorRequirements(this.knownCaptureStatus)}retainLocatorRequirements(e){if(this.editing===null)return;let t=(t,r)=>{let i=e?.providers.find(e=>e.providerId===n(t))?.autoStart;return i?{...r,...i}:r},r=l(this.editedSource)?.providerId;this.originalLocatorRequirements=t(r,this.originalLocatorRequirements),this.locatorRequirements=n(this.editedProviderId)===n(r)?this.originalLocatorRequirements:t(this.editedProviderId,this.locatorRequirements)}saveSource(e){if(e.preventDefault(),this.disabled||this.editing===null)return;let t=[...this.sources];if(this.editing!==`new`&&t[this.editing]!==this.editedSource){this.editError=N(`meetingCapture.sourceChanged`);return}let r=e.currentTarget;if(!r.reportValidity())return;let i=new FormData(r),a={...l(this.editedSource)},o=n(i.get(`providerId`)),s=this.captureStatus?.providers.find(e=>e.providerId===o);if((this.editing===`new`||this.editedProviderId!==a.providerId)&&!Ei(s)){this.editError=N(`meetingCapture.autoStartUnavailable`);return}for(let e of[`providerId`,...ki]){let t=e===`providerId`?this.editedProviderId:this.sourceDraft[e];if(!i.has(e)||this.editing!==`new`&&t===a[e])continue;let r=n(i.get(e));r?a[e]=r:delete a[e]}let c=Oi.find(e=>this.locatorRequirements?.[e]===`required`&&!n(a[e]));if(c){this.editError=N(`meetingCapture.requiredLocator`,{field:N(`meetingCapture.fields.${c}`)});return}this.editing===`new`?t.push(a):t[this.editing]=a,this.context.runtimeConfig.patchForm([`transcripts`,`autoStart`],[...t]),this.editSource(null)}renderSourceEditor(e){if(this.editing===null)return O;let t=this.sourceDraft,n=e?.providers.filter(Ei).toSorted((e,t)=>e.name.localeCompare(t.name))??[],r=typeof t?.providerId==`string`?t.providerId:``,i=n.map(e=>({id:e.providerId,label:`${e.name} · ${N(`meetingCapture.availability.${e.availability}`)}`}));for(let e of[r,this.editedProviderId])e&&!i.some(t=>t.id===e)&&i.push({id:e,label:e});let a=e?.providers.find(e=>e.providerId===this.editedProviderId),o=[`title`,...Oi.filter(e=>this.locatorRequirements?.[e]||t?.[e]!==void 0),`sessionId`];return E`<form @submit=${e=>this.saveSource(e)}>
      ${z({title:N(this.editing===`new`?`meetingCapture.addSource`:`meetingCapture.editSource`)},E`
          ${L({title:N(`meetingCapture.fields.providerId`),control:E`<select
              class="settings-select"
              name="providerId"
              aria-label=${N(`meetingCapture.fields.providerId`)}
              required
              ?disabled=${this.disabled}
              .value=${this.editedProviderId}
              @change=${e=>{this.selectProvider(e.target.value)}}
            >
              <option value="">${N(`meetingCapture.chooseProvider`)}</option>
              ${Oe(i,e=>e.id,e=>E`<option value=${e.id} ?selected=${e.id===this.editedProviderId}>
                    ${e.label}
                  </option>`)}
            </select>`})}
          ${this.editedProviderId&&!Ei(a)?B(N(`meetingCapture.autoStartUnavailable`)):O}
          ${Oe(o,e=>e,e=>L({title:N(`meetingCapture.fields.${e}`),description:e===`sessionId`?N(t.whenOccupied===!0?`meetingCapture.occupancySessionIdHint`:`meetingCapture.sessionIdHint`):e===`title`?N(`meetingCapture.titleHint`):void 0,control:E`<input
                  class="settings-input"
                  name=${e}
                  type=${e===`meetingUrl`?`url`:`text`}
                  aria-label=${N(`meetingCapture.fields.${e}`)}
                  ?disabled=${this.disabled||e===`sessionId`&&t.whenOccupied===!0}
                  ?required=${e!==`title`&&e!==`sessionId`&&this.locatorRequirements?.[e]===`required`}
                  .value=${typeof t?.[e]==`string`?t[e]:``}
                  @input=${t=>{this.sourceDraft[e]=t.target.value}}
                />`}))}
          ${L({title:N(`meetingCapture.locatorsHint`),control:E` <button
                type="button"
                class="btn"
                @click=${()=>{this.editSource(null)}}
              >
                ${N(`common.cancel`)}
              </button>
              <button
                type="submit"
                class="btn"
                ?disabled=${this.disabled||!this.editedProviderId}
              >
                ${N(`meetingCapture.saveSource`)}
              </button>`})}
          ${this.editError?B(E`<span role="alert">${this.editError}</span>`):O}
        `)}
    </form>`}get knownCaptureStatus(){let e=this.statusTask.value;return e?.isCurrent()?e.status:null}get captureStatus(){return this.statusTask.status===F.COMPLETE?this.knownCaptureStatus:null}render(){let e=this.captureStatus,t=this.statusTask.status===F.ERROR?C(this.statusTask.error):null,r=e?.latestTranscript,i=this.sources.map((t,r)=>{let i=l(t),a=e?.providers.find(e=>e.providerId===i?.providerId);return L({title:typeof i?.title==`string`?i.title:n(i?.providerId)??N(`transcripts.unknown`),description:[a?.name,i?.accountId,i?.guildId,i?.channelId,i?.meetingUrl].filter(e=>typeof e==`string`&&e).join(` · `),control:E`<button
            class="btn"
            ?disabled=${this.disabled}
            aria-label=${N(`meetingCapture.editSourceNumber`,{number:String(r+1)})}
            @click=${()=>this.editSource(r)}
          >
            ${M.edit}${N(`meetingCapture.edit`)}
          </button>
          <button
            class="btn"
            ?disabled=${this.disabled}
            aria-label=${N(`meetingCapture.removeSourceNumber`,{number:String(r+1)})}
            @click=${()=>{this.disabled||(this.context.runtimeConfig.patchForm([`transcripts`,`autoStart`],this.sources.filter((e,t)=>t!==r)),this.editSource(null))}}
          >
            ${M.trash}${N(`common.remove`)}
          </button>`})});return E`${rn(E`
        <div class="settings-stack" id=${ar.meetingCapture}>
          ${z({title:N(`meetingCapture.title`),description:N(`meetingCapture.description`)},E`
              ${V({title:N(`meetingCapture.enabled`),description:N(`meetingCapture.enabledHint`),checked:this.config?.enabled!==!1,disabled:this.disabled,onChange:e=>{this.disabled||this.context.runtimeConfig.patchForm([`transcripts`,`enabled`],e)}})}
              ${tn({title:N(`transcripts.library`),description:N(`meetingCapture.libraryHint`),onClick:()=>this.context.navigate(`meetings`)})}
              ${L({title:N(`meetingCapture.observedState`),description:N(`meetingCapture.stateHint`),control:U({kind:`muted`,label:N(e?e.enabled?`meetingCapture.states.enabled`:`meetingCapture.states.disabled`:`meetingCapture.states.unknown`)})})}
              ${L({title:N(`meetingCapture.latestTranscript`),description:r?r.title:N(e?`meetingCapture.noSaved`:`transcripts.unknown`),control:R(r?N(`transcripts.savedCount`,{count:String(r.utteranceCount)}):N(`transcripts.unknown`))})}
              ${r?L({title:N(`meetingCapture.lastUtterance`),control:R(r.lastUtteranceAt?new Date(r.lastUtteranceAt).toLocaleString():N(`transcripts.unknown`))}):O}
              ${L({title:N(`meetingCapture.health`),control:E`<button
                  class="btn"
                  ?disabled=${!this.client||this.statusTask.status===F.PENDING}
                  @click=${()=>void this.statusTask.run()}
                >
                  ${M.refresh}${N(`common.refresh`)}
                </button>`})}
              ${t?B(E`<span role="alert">${N(`meetingCapture.healthError`)} ${t}</span>`):O}
              ${this.statusTask.status===F.PENDING?B(E`<span role="status">${N(`common.loading`)}</span>`):O}
              ${pt(this.context.gateway.snapshot.hello?.auth??null)?O:B(N(`configView.adminRequired`))}
              ${this.rawDraftPending?B(N(`meetingCapture.rawDraftPending`)):O}
            `)}
          ${z({title:N(`meetingCapture.sources`),description:N(`meetingCapture.sourcesHint`),actions:E`<button
                class="btn"
                ?disabled=${this.disabled||!e?.providers.some(Ei)}
                @click=${()=>this.editSource(`new`)}
              >
                ${M.plus}${N(`meetingCapture.addSource`)}
              </button>`},i.length?i:B(N(`meetingCapture.noSources`)))}
          ${Me(this.editing,this.renderSourceEditor(e))}
          ${e&&!e.providers.some(Ei)?B(N(`meetingCapture.noAutoStartProviders`)):O}
          ${e?.configuredSources.length?z({title:N(`meetingCapture.sourceHealth`),description:N(`meetingCapture.armedHint`)},e.configuredSources.map(e=>L({title:e.title??e.source.providerId,description:[e.source.accountId,e.source.guildId,e.source.channelId,e.source.meetingUrl,e.startDiagnostic?N(`meetingCapture.startDiagnostics.${e.startDiagnostic}`):void 0].filter(Boolean).join(` · `),control:U({kind:`muted`,label:N(`meetingCapture.states.${e.state}`)})}))):O}
          ${e&&Object.values(e.omitted).some(e=>e>0)?E`<p class="settings-page__intro">
                  ${N(`meetingCapture.omitted`,{count:String(Object.values(e.omitted).reduce((e,t)=>e+t,0))})}
                </p>`:O}
          <p class="settings-page__intro">${N(`meetingCapture.safetyHint`)}</p>
          <p class="settings-page__intro">${N(`meetingCapture.durationHint`)}</p>
          <p class="settings-page__intro">${N(`meetingCapture.sttHint`)}</p>
        </div>
      `)}
      <details class="settings-page" ?open=${this.advancedExpanded}>
        <summary class="settings-section__heading">${N(`meetingCapture.advancedSettings`)}</summary>
        ${this.editor}
      </details>`}},r([a({context:ut,subscribe:!0})],K.prototype,`context`,void 0),r([k({type:Boolean})],K.prototype,`mutationDisabled`,void 0),r([k({attribute:!1})],K.prototype,`editor`,void 0),r([k({type:Boolean})],K.prototype,`advancedExpanded`,void 0),r([D()],K.prototype,`editing`,void 0),r([D()],K.prototype,`editError`,void 0),r([D()],K.prototype,`editedProviderId`,void 0),customElements.get(`openclaw-meeting-capture-settings`)||customElements.define(`openclaw-meeting-capture-settings`,K)})))()}var ji;function Mi(){return(Mi=e((()=>{T(),w(),S(),wr(),ji=class extends m{constructor(...e){super(...e),this.agentId=null}render(){return E`
      ${this.agentId?E`<openclaw-agent-memory-panel
              .agentId=${this.agentId}
            ></openclaw-agent-memory-panel>`:O}
    `}},r([k()],ji.prototype,`agentId`,void 0),customElements.get(`openclaw-memory-dreaming`)||customElements.define(`openclaw-memory-dreaming`,ji)})))()}function Ni(e,t){return`${t}:${e.path}:${e.startLine}:${e.endLine}`}function Pi(e){let t=e.path.replaceAll(`\\`,`/`),n=!t.startsWith(`/`)&&!t.startsWith(`sessions/`)&&!/^[a-zA-Z]:\//.test(t)&&t.split(`/`).every(e=>e&&e!==`.`&&e!==`..`),r=t===`MEMORY.md`||t.startsWith(`memory/`);return e.source===`memory`&&n&&r}function Fi(e,t){let n=e.split(/\r?\n/),r=Math.max(0,t.startLine-1),i=Math.min(n.length,t.endLine),a=n.slice(0,r),o=n.slice(r,i),s=n.slice(i);return E`<pre class="memory-memories__file" tabindex="0"><span
      >${a.join(`
`)}${a.length?`
`:``}</span
    ><mark data-memory-match="true">${o.join(`
`)}</mark
    ><span>${s.length?`\n${s.join(`
`)}`:``}</span></pre>`}var q;function Ii(){return(Ii=e((()=>{T(),w(),j(),y(),S(),q=class extends m{constructor(...e){super(...e),this.client=null,this.connected=!1,this.methodAdvertised=!0,this.agentId=null,this.query=``,this.searchState={kind:`idle`},this.openResultKey=null,this.details=new Map,this.searchRequest=null,this.detailRequests=new Map}updated(e){(e.has(`agentId`)||e.has(`client`)||e.has(`connected`)||e.has(`methodAdvertised`))&&this.resetSearch()}resetSearch(){this.searchRequest=null,this.detailRequests.clear(),this.query=``,this.searchState={kind:`idle`},this.openResultKey=null,this.details=new Map}async search(e){let t=e.trim(),n=this.connected?this.client:null,r=this.agentId;if(!t||!n||!r||!this.methodAdvertised)return;let i={client:n,agentId:r,query:t};this.searchRequest=i,this.query=t,this.searchState={kind:`loading`,query:t},this.openResultKey=null,this.details=new Map,this.detailRequests.clear();try{let e=await n.request(`memory.search`,{query:t,agentId:r});if(this.searchRequest!==i||this.agentId!==r||this.client!==n)return;this.searchState={kind:`ready`,query:t,...e}}catch(e){if(this.searchRequest!==i||this.agentId!==r||this.client!==n)return;this.searchState={kind:`error`,query:t,message:C(e)}}}toggleResult(e,t){let n=Ni(e,t);if(this.openResultKey===n){this.openResultKey=null;return}this.openResultKey=n,this.details.has(n)||this.loadDetail(n,e)}async loadDetail(e,t){let n=this.connected?this.client:null,r=this.agentId;if(!n||!r)return;let i={client:n,agentId:r,path:t.path};this.detailRequests.set(e,i),this.details=new Map(this.details).set(e,{kind:`loading`});try{let a=await n.request(`agents.workspace.get`,{agentId:r,path:t.path});if(this.detailRequests.get(e)!==i||this.agentId!==r)return;let o=a.file.encoding===`utf8`?{kind:`ready`,content:a.file.content}:{kind:`error`,message:N(`memoryPage.memories.fileUnsupported`)};this.details=new Map(this.details).set(e,o)}catch(t){if(this.detailRequests.get(e)!==i||this.agentId!==r)return;this.details=new Map(this.details).set(e,{kind:`error`,message:C(t)})}finally{this.detailRequests.get(e)===i&&this.detailRequests.delete(e)}}renderDetail(e,t,n){if(this.openResultKey!==e)return O;let r=this.details.get(e);return E`<div id=${t} class="memory-memories__detail">
      ${!r||r.kind===`loading`?E`<p role="status">${N(`memoryPage.memories.fileLoading`)}</p>`:r.kind===`error`?E`<p class="memory-memories__detail-error" role="alert">
                ${N(`memoryPage.memories.fileError`,{message:r.message})}
              </p>`:Fi(r.content,n)}
    </div>`}renderResults(e){let t=e.searchMode===`hybrid`?N(`memoryPage.memories.hybridSearch`):N(`memoryPage.memories.keywordSearch`);return E`
      ${e.stale?E`<div class="callout warn" role="status">
              ${e.warning?E`<p>${e.warning}</p>`:O}
              ${e.action?E`<p>${e.action}</p>`:O}
            </div>`:O}
      <div class="memory-memories__results-heading">
        <span>${N(`memoryPage.memories.results`,{count:String(e.results.length)})}</span>
        <span class="memory-memories__mode">${t}</span>
      </div>
      ${e.results.length===0?E`<p class="memory-memories__state">
              ${N(`memoryPage.memories.empty`,{query:e.query})}
            </p>`:E`<div class="settings-group memory-memories__results">
              ${e.results.map((e,t)=>{let n=Ni(e,t),r=this.openResultKey===n,i=Pi(e),a=`memory-detail-${t}`,o=E`
                  <span class="settings-row__text">
                    <span class="settings-row__title">${e.snippet}</span>
                    <span class="settings-row__desc memory-memories__path"
                      >${e.path} ·
                      ${N(`memoryPage.memories.lineRange`,{start:String(e.startLine),end:String(e.endLine)})}</span
                    >
                  </span>
                  <span class="settings-row__control memory-memories__meta">
                    <span class="memory-memories__source"
                      >${N(e.source===`sessions`?`memoryPage.memories.sourceSessions`:`memoryPage.memories.sourceMemory`)}</span
                    >
                    <span
                      >${N(`memoryPage.memories.score`,{score:e.score.toFixed(2)})}</span
                    >
                  </span>
                `;return E`<article class="memory-memories__result">
                  ${i?E`<button
                          type="button"
                          class="settings-row settings-row--nav"
                          aria-expanded=${String(r)}
                          aria-controls=${a}
                          @click=${()=>this.toggleResult(e,t)}
                        >
                          ${o}
                        </button>`:E`<div class="settings-row">${o}</div>`}
                  ${i?this.renderDetail(n,a,e):O}
                </article>`})}
            </div>`}
    `}renderSearchState(){switch(this.searchState.kind){case`loading`:return E`<p class="memory-memories__state" role="status">
          ${N(`memoryPage.memories.searching`)}
        </p>`;case`error`:{let e=this.searchState;return E`<div class="memory-memories__state" role="alert">
          <p>${N(`memoryPage.memories.error`,{message:e.message})}</p>
          <button class="btn btn--sm" @click=${()=>void this.search(e.query)}>
            ${N(`memoryPage.memories.retry`)}
          </button>
        </div>`}case`ready`:return this.renderResults(this.searchState);default:return E`<p class="memory-memories__state">${N(`memoryPage.memories.idle`)}</p>`}}render(){return E`<div class="settings-page memory-memories">
      ${this.methodAdvertised?E`<form
                class="memory-memories__search"
                role="search"
                @submit=${e=>{e.preventDefault(),this.search(this.query)}}
              >
                <label class="settings-control__sr-label" for="memory-search-input"
                  >${N(`memoryPage.memories.searchLabel`)}</label
                >
                <input
                  id="memory-search-input"
                  type="search"
                  class="settings-input"
                  .value=${this.query}
                  placeholder=${N(`memoryPage.memories.searchPlaceholder`)}
                  @input=${e=>{this.query=e.currentTarget.value}}
                />
                <button
                  class="btn btn--sm primary"
                  type="submit"
                  ?disabled=${!this.connected||!this.agentId||!this.query.trim()||this.searchState.kind===`loading`}
                >
                  ${N(`memoryPage.memories.searchButton`)}
                </button>
              </form>
              ${this.renderSearchState()}`:E`<p class="memory-memories__unavailable">
              ${N(`memoryPage.memories.gatewayUpdateRequired`)}
            </p>`}
    </div>`}},r([k({attribute:!1})],q.prototype,`client`,void 0),r([k({type:Boolean})],q.prototype,`connected`,void 0),r([k({type:Boolean})],q.prototype,`methodAdvertised`,void 0),r([k()],q.prototype,`agentId`,void 0),r([D()],q.prototype,`query`,void 0),r([D()],q.prototype,`searchState`,void 0),r([D()],q.prototype,`openResultKey`,void 0),r([D()],q.prototype,`details`,void 0),customElements.get(`openclaw-memory-memories`)||customElements.define(`openclaw-memory-memories`,q)})))()}function Li(e,t){return[`plugins`,`entries`,e,`config`,`dreaming`,...t]}function Ri(e){let t=l(e?.agents),n=l(t?.defaults)?.userTimezone;return typeof n==`string`&&n.trim()?n.trim():null}function zi(){return(zi=e((()=>{})))()}function Bi(e,t){let n=e;for(let[e,r]of t.entries()){if(!n)return;let i=n[r];if(e===t.length-1)return i;n=l(i)}}function Vi(e,t){let n=e;for(let[e,r]of t.entries()){if(!n||!Object.hasOwn(n,r))return!1;if(e===t.length-1)return!0;n=l(n[r])}return!1}function Hi(e){return Qi.find(t=>t===e)??$i}function Ui(e){let t=Bi(e,[`execution`,`defaults`,`model`]);return typeof t==`string`&&t.trim()?t.trim():N(`memoryPage.dreaming.model.default`)}function Wi(e,t){let n=Number(e);return!Number.isFinite(n)||n<t.min||t.integer&&!Number.isInteger(n)||t.max!==void 0&&n>t.max?null:n}function Gi(e,t){let n=Bi(e.dreaming,t.path),r=Vi(e.dreaming,t.path),i=t.kind===`toggle`?t.fallback?N(`common.enabled`):N(`common.disabled`):t.kind===`number`?String(t.defaultValue):t.path[0]===`timezone`?e.timezoneDefault??N(`memoryPage.dreaming.timezone.default`):t.path[0]===`model`?Ui(e.dreaming):t.defaultValue?t.defaultValue:t.defaultLabelKey?N(t.defaultLabelKey):``,a=I(i,r);if(t.kind===`toggle`)return V({title:N(t.labelKey),description:E`${N(t.helpKey)} ${a}`,checked:typeof n==`boolean`?n:t.fallback,disabled:e.disabled,onChange:n=>e.onPatch(t.path,n)});let o=t.kind===`number`?typeof n==`number`?String(n):``:typeof n==`string`?n:``,s=t.kind===`number`?t.bounds:null;if(t.kind===`text`&&t.path[0]===`model`){let n=Tn(i);return L({title:N(t.labelKey),description:E`${N(t.helpKey)} ${a}`,control:Ar({label:N(t.labelKey),value:o,options:[{value:``,label:i,...n?{provider:n}:{}}],disabled:e.disabled,custom:{label:N(`cron.form.customModel`),placeholder:t.placeholderKey?N(t.placeholderKey):``,commit:`change`},onChange:n=>e.onPatch(t.path,n.trim()||void 0)})})}return L({title:N(t.labelKey),description:E`${N(t.helpKey)} ${a}`,control:E`
      <input
        class="settings-input"
        type=${t.kind===`number`?`number`:`text`}
        min=${s?String(s.min):O}
        max=${s?.max===void 0?O:String(s.max)}
        step=${s?s.integer?`1`:`any`:O}
        spellcheck="false"
        aria-label=${N(t.labelKey)}
        ?disabled=${e.disabled}
        .value=${o}
        placeholder=${i}
        @change=${n=>{let r=n.currentTarget,i=r.value.trim();if(!i){e.onPatch(t.path,void 0);return}if(s){let n=Wi(i,s);if(n===null){r.value=o;return}e.onPatch(t.path,n);return}e.onPatch(t.path,i)}}
      />
    `})}function Ki(e){let t=Hi(Bi(e.dreaming,[`storage`,`mode`])),n=I(N(`memoryPage.dreaming.storage.modes.separate`),Vi(e.dreaming,[`storage`,`mode`]));return E`
    ${z({title:N(`memoryPage.dreaming.schedule.title`),description:N(`memoryPage.dreaming.schedule.description`)},Xi.map(t=>Gi(e,t)))}
    ${z({title:N(`memoryPage.dreaming.storage.title`),description:N(`memoryPage.dreaming.storage.description`)},E`
        ${L({title:N(`memoryPage.dreaming.storage.modeLabel`),description:E`
            ${N(`memoryPage.dreaming.storage.modeHelp`)} ${n}
          `,stacked:!0,control:sn({value:t,options:Qi.map(e=>({value:e,label:N(`memoryPage.dreaming.storage.modes.${e}`)})),ariaLabel:N(`memoryPage.dreaming.storage.modeLabel`),disabled:e.disabled,onChange:t=>e.onPatch([`storage`,`mode`],t)})})}
        ${Gi(e,{kind:`toggle`,path:[`storage`,`separateReports`],labelKey:`memoryPage.dreaming.storage.separateReportsLabel`,helpKey:`memoryPage.dreaming.storage.separateReportsHelp`,fallback:!1})}
      `)}
    ${Zi.map(t=>z({title:N(t.titleKey),description:N(t.descriptionKey)},t.fields.map(t=>Gi(e,t))))}
  `}function qi(e){return z({title:N(`memoryPage.dreaming.unsupported.title`)},L({title:N(`memoryPage.dreaming.unsupported.rowTitle`),description:N(`memoryPage.dreaming.unsupported.description`,{plugin:e})}))}var J,Ji,Yi,Xi,Zi,Qi,$i;function ea(){return(ea=e((()=>{T(),jr(),En(),H(),j(),J={integer:!0,min:0},Ji={integer:!0,min:1},Yi={integer:!1,min:0,max:1},Xi=[{kind:`text`,path:[`frequency`],labelKey:`memoryPage.dreaming.frequency.label`,helpKey:`memoryPage.dreaming.frequency.help`,placeholderKey:`memoryPage.dreaming.frequency.placeholder`,defaultValue:`0 3 * * *`},{kind:`text`,path:[`timezone`],labelKey:`memoryPage.dreaming.timezone.label`,helpKey:`memoryPage.dreaming.timezone.help`,placeholderKey:`memoryPage.dreaming.timezone.placeholder`},{kind:`text`,path:[`model`],labelKey:`memoryPage.dreaming.model.label`,helpKey:`memoryPage.dreaming.model.help`,placeholderKey:`memoryPage.dreaming.model.placeholder`,defaultLabelKey:`memoryPage.dreaming.model.default`},{kind:`toggle`,path:[`verboseLogging`],labelKey:`memoryPage.dreaming.verboseLogging.label`,helpKey:`memoryPage.dreaming.verboseLogging.help`,fallback:!1}],Zi=[{titleKey:`memoryPage.dreaming.phases.light.title`,descriptionKey:`memoryPage.dreaming.phases.light.description`,fields:[{kind:`toggle`,path:[`phases`,`light`,`enabled`],labelKey:`memoryPage.dreaming.phaseFields.enabled`,helpKey:`memoryPage.dreaming.phaseFields.enabledHelp`,fallback:!0},{kind:`number`,path:[`phases`,`light`,`lookbackDays`],labelKey:`memoryPage.dreaming.phaseFields.lookbackDays`,helpKey:`memoryPage.dreaming.phaseFields.lookbackDaysHelp`,bounds:J,defaultValue:2},{kind:`number`,path:[`phases`,`light`,`limit`],labelKey:`memoryPage.dreaming.phaseFields.limit`,helpKey:`memoryPage.dreaming.phaseFields.limitHelp`,bounds:J,defaultValue:100},{kind:`number`,path:[`phases`,`light`,`dedupeSimilarity`],labelKey:`memoryPage.dreaming.phaseFields.dedupeSimilarity`,helpKey:`memoryPage.dreaming.phaseFields.dedupeSimilarityHelp`,bounds:Yi,defaultValue:.9}]},{titleKey:`memoryPage.dreaming.phases.deep.title`,descriptionKey:`memoryPage.dreaming.phases.deep.description`,fields:[{kind:`toggle`,path:[`phases`,`deep`,`enabled`],labelKey:`memoryPage.dreaming.phaseFields.enabled`,helpKey:`memoryPage.dreaming.phaseFields.enabledHelp`,fallback:!0},{kind:`number`,path:[`phases`,`deep`,`limit`],labelKey:`memoryPage.dreaming.phaseFields.limit`,helpKey:`memoryPage.dreaming.phaseFields.limitHelp`,bounds:J,defaultValue:10},{kind:`number`,path:[`phases`,`deep`,`minScore`],labelKey:`memoryPage.dreaming.phaseFields.minScore`,helpKey:`memoryPage.dreaming.phaseFields.minScoreHelp`,bounds:Yi,defaultValue:.75},{kind:`number`,path:[`phases`,`deep`,`minRecallCount`],labelKey:`memoryPage.dreaming.phaseFields.minRecallCount`,helpKey:`memoryPage.dreaming.phaseFields.minRecallCountHelp`,bounds:J,defaultValue:3},{kind:`number`,path:[`phases`,`deep`,`minUniqueQueries`],labelKey:`memoryPage.dreaming.phaseFields.minUniqueQueries`,helpKey:`memoryPage.dreaming.phaseFields.minUniqueQueriesHelp`,bounds:J,defaultValue:3},{kind:`number`,path:[`phases`,`deep`,`recencyHalfLifeDays`],labelKey:`memoryPage.dreaming.phaseFields.recencyHalfLifeDays`,helpKey:`memoryPage.dreaming.phaseFields.recencyHalfLifeDaysHelp`,bounds:J,defaultValue:14},{kind:`number`,path:[`phases`,`deep`,`maxAgeDays`],labelKey:`memoryPage.dreaming.phaseFields.maxAgeDays`,helpKey:`memoryPage.dreaming.phaseFields.maxAgeDaysHelp`,bounds:Ji,defaultValue:30},{kind:`number`,path:[`phases`,`deep`,`maxPromotedSnippetTokens`],labelKey:`memoryPage.dreaming.phaseFields.maxPromotedSnippetTokens`,helpKey:`memoryPage.dreaming.phaseFields.maxPromotedSnippetTokensHelp`,bounds:Ji,defaultValue:160}]},{titleKey:`memoryPage.dreaming.phases.rem.title`,descriptionKey:`memoryPage.dreaming.phases.rem.description`,fields:[{kind:`toggle`,path:[`phases`,`rem`,`enabled`],labelKey:`memoryPage.dreaming.phaseFields.enabled`,helpKey:`memoryPage.dreaming.phaseFields.enabledHelp`,fallback:!0},{kind:`number`,path:[`phases`,`rem`,`lookbackDays`],labelKey:`memoryPage.dreaming.phaseFields.lookbackDays`,helpKey:`memoryPage.dreaming.phaseFields.lookbackDaysHelp`,bounds:J,defaultValue:7},{kind:`number`,path:[`phases`,`rem`,`limit`],labelKey:`memoryPage.dreaming.phaseFields.limit`,helpKey:`memoryPage.dreaming.phaseFields.limitHelp`,bounds:J,defaultValue:10},{kind:`number`,path:[`phases`,`rem`,`minPatternStrength`],labelKey:`memoryPage.dreaming.phaseFields.minPatternStrength`,helpKey:`memoryPage.dreaming.phaseFields.minPatternStrengthHelp`,bounds:Yi,defaultValue:.75}]}],Qi=[`inline`,`separate`,`both`],$i=`separate`})))()}function ta(e){return!e.embedding.ok&&e.embedding.checked!==!1}function na(e){return e.provider===`none`?N(`memoryPage.overview.hero.keywordSearch`):N(`memoryPage.overview.hero.hybridSearch`)}function ra(e){let t=gr(e.engineSelection),n=e.engineSelection.kind===`off`||e.engineDisabled,r=e.status.kind===`ready`?e.status.payload:null,i=e.status.kind===`error`||r!==null&&ta(r),a=An($t(e.agentId??`memory`)),o=n?N(`memoryPage.overview.hero.hibernating`):e.status.kind===`loading`||e.status.kind===`idle`?N(`memoryPage.overview.hero.waking`):N(i?`memoryPage.overview.hero.needsAttention`:`memoryPage.overview.hero.awake`),s=n?N(e.engineDisabled?`memoryPage.overview.hero.disabledDescription`:`memoryPage.overview.hero.offDescription`):e.status.kind===`error`?e.status.message:r?ta(r)?r.embedding.error??N(`memoryPage.overview.health.unavailable`):N(`memoryPage.overview.hero.activeDescription`,{engine:t??N(`common.unknown`),mode:na(r)}):N(`memoryPage.overview.hero.loadingDescription`),c=n?{sleeping:!0}:i?{grumpy:!0,standalone:!0}:r?{reading:!0,standalone:!0}:{standalone:!0};return E`
    <section class="memory-overview__hero ${n?`memory-overview__hero--sleeping`:``}">
      <div class="memory-overview__lobster" style=${Jt(a)}>
        ${kn(a,c)}
      </div>
      <div class="memory-overview__hero-copy">
        <h2>${o}</h2>
        <p class=${i?`memory-overview__hero-error`:``}>${s}</p>
        <div class="memory-overview__hero-actions">
          ${n?E`<button class="btn btn--sm" @click=${()=>e.onNavigate(`settings`)}>
                  ${N(`memoryPage.overview.hero.openSettings`)}
                </button>`:E`<button class="btn btn--sm" @click=${e.onRefresh}>
                  ${e.status.kind===`error`?N(`memoryPage.overview.hero.retry`):N(`memoryPage.overview.hero.refresh`)}
                </button>`}
        </div>
      </div>
    </section>
  `}function ia(e,t,n){return[e.cron||N(`common.na`),t,n&&e.nextRunAtMs?N(`memoryPage.overview.schedule.nextRun`,{time:be(e.nextRunAtMs)}):null,e.lastRunAtMs?N(`memoryPage.overview.schedule.lastRun`,{time:be(e.lastRunAtMs)}):null].filter(e=>!!e).join(` · `)}function aa(e){let t=[[`light`,e.phases.light],[`rem`,e.phases.rem],[`deep`,e.phases.deep]];return z({title:N(`memoryPage.overview.schedule.title`)},E`
      ${t.map(([t,n])=>L({title:N(`memoryPage.dreaming.phases.${t}.title`),description:E`
            ${N(`memoryPage.overview.schedule.${t}Description`)}<br />
            ${ia(n,e.timezone,e.enabled&&n.enabled&&n.managedCronPresent)}
          `,control:U({kind:e.enabled&&n.enabled&&n.managedCronPresent?`ok`:`muted`,label:!e.enabled||!n.enabled?N(`common.disabled`):n.managedCronPresent?N(`common.enabled`):N(`memoryPage.overview.schedule.notScheduled`)})}))}
      ${L({title:N(`memoryPage.overview.schedule.learnMore`),control:E`<a
          class="memory-page__link"
          href="https://docs.openclaw.ai/concepts/dreaming"
          target="_blank"
          rel="noreferrer noopener"
          >${N(`memoryPage.overview.schedule.openDocs`)}</a
        >`})}
    `)}function oa(e){let t=[[`promotedToday`,e.promotedToday],[`promotedTotal`,e.promotedTotal],[`shortTermCount`,e.shortTermCount],[`phaseHitCount`,e.phaseSignalCount],[`lightPhaseHitCount`,e.lightPhaseHitCount],[`remPhaseHitCount`,e.remPhaseHitCount]];return z({title:N(`memoryPage.overview.activity.title`)},t.map(([e,t])=>L({title:N(`memoryPage.overview.activity.${e}`),control:R(t)})))}function sa(e,t){let n=e.embedding.checked===!1,r=e.embedding.ok?`ok`:n?`muted`:`danger`,i=t.probingEmbeddings?N(`memoryPage.overview.health.checking`):e.embedding.ok?N(`memoryPage.overview.health.healthy`):N(n?`memoryPage.overview.health.notChecked`:`memoryPage.overview.health.unavailable`);return z({title:N(`memoryPage.overview.health.title`)},E`
      ${L({title:N(`memoryPage.overview.health.provider`),control:R(e.provider??N(`common.unknown`),{mono:!0})})}
      ${L({title:N(`memoryPage.overview.health.embeddings`),description:e.embedding.ok?O:n?N(`memoryPage.overview.health.notCheckedDescription`):e.embedding.error,control:E`
          ${U({kind:r,label:i})}
          ${n?E`<button
                  type="button"
                  class="btn btn--sm"
                  ?disabled=${t.probingEmbeddings}
                  @click=${t.onProbeEmbeddings}
                >
                  ${t.probingEmbeddings?N(`memoryPage.overview.health.testing`):N(`memoryPage.overview.health.test`)}
                </button>`:O}
        `})}
      ${e.embeddingRuntime?L({title:N(`memoryPage.overview.health.runtime`),description:e.embeddingRuntime.loadError,control:R([e.embeddingRuntime.engine,e.embeddingRuntime.backend,e.embeddingRuntime.buildInfo,e.embeddingRuntime.model?.id,e.embeddingRuntime.endpoints?Object.entries(e.embeddingRuntime.endpoints).map(([e,t])=>`${e}=${t}`).join(` `):void 0].filter(Boolean).join(` · `))}):O}
    `)}function ca(e){return e.status.kind===`ready`?E`
    ${e.status.payload.dreaming?aa(e.status.payload.dreaming):O}
    ${e.status.payload.dreaming?oa(e.status.payload.dreaming):O}
    ${sa(e.status.payload,e)}
  `:O}function la(e){return z({title:N(`memoryPage.overview.shortcuts.title`)},E`
      ${tn({title:N(`memoryPage.overview.shortcuts.memories`),onClick:()=>e.onNavigate(`memories`)})}
      ${tn({title:N(`memoryPage.overview.shortcuts.diary`),onClick:()=>e.onNavigate(`dreams`)})}
      ${tn({title:N(`memoryPage.overview.shortcuts.settings`),onClick:()=>e.onNavigate(`settings`)})}
    `)}function ua(e){let t=e.engineSelection.kind!==`off`&&!e.engineDisabled;return E`
    <div class="settings-page memory-overview">
      ${ra(e)} ${t?ca(e):O} ${la(e)}
    </div>
  `}function da(){return(da=e((()=>{T(),fn(),cn(),H(),j(),ve(),vr()})))()}function fa(e,t){if(e.kind!==`ready`)return[];let n=e.plugins.filter(e=>e.installed&&e.kind?.includes(`memory`)===!0).map(e=>({id:e.id,label:e.id===sr?N(`memoryPage.engine.openClawMemory`):e.name,available:!0})).toSorted((e,t)=>{let n=e.id===sr;return n===(t.id===sr)?e.label.localeCompare(t.label):n?-1:1}),r=gr(t);if(r&&!n.some(e=>e.id===r)){let e={id:r,label:r===sr?N(`memoryPage.engine.openClawMemory`):r,available:!1};r===sr?n.unshift(e):n.push(e)}return n}function pa(e,t){return e.kind===`ready`?!t?.installed||t.state===`not-installed`||t.state===`error`?`unknown`:t.enabled?`enabled`:`disabled`:e.kind===`loading`?`loading`:`unknown`}function ma(e,t){return e.kind===`ready`&&t?e.plugins.find(e=>e.id===t):void 0}function ha(e,t){return Ca.map(n=>{let r=ma(e,n.id);return{id:n.id,label:N(n.labelKey),description:r?.description??n.id,state:pa(e,r),busy:t.busy.has(n.id),error:t.errors.get(n.id)??null,notice:[t.notices.get(n.id)?.message,t.refreshWarnings.get(n.id)].filter(Boolean).join(` `)||null}})}function ga(e){switch(e.kind){case`auto`:return`memoryPage.engine.autoHint`;case`off`:return`memoryPage.engine.offHint`;default:return`memoryPage.engine.explicitHint`}}function _a(e){let t=gr(e.engineSelection),n=e.engineOptions.find(e=>e.id===sr)?.label??N(`memoryPage.engine.openClawMemory`),r=I(n,e.engineSelection.kind!==`auto`);if(e.engineOptions.length===0)return z({title:N(`memoryPage.engine.title`),description:N(`memoryPage.engine.description`)},L({title:N(`memoryPage.engine.rowTitle`),description:E`
          ${N(`memoryPage.engine.catalogUnavailable`)} ${N(ga(e.engineSelection))}
          ${r}
        `,control:R(t??N(`memoryPage.engine.off`),{mono:!0})}));let i=[...e.engineOptions.map(e=>({value:e.id,label:e.available?e.label:`${e.label} (${N(`memoryPage.engine.unavailable`)})`})),{value:Ea,label:N(`memoryPage.engine.off`)}];return z({title:N(`memoryPage.engine.title`),description:N(`memoryPage.engine.description`)},E`
      ${L({title:N(`memoryPage.engine.rowTitle`),description:E`${N(ga(e.engineSelection))} ${r}`,stacked:!0,control:sn({value:t??Ea,options:i,disabled:e.engineBusy,ariaLabel:N(`memoryPage.engine.rowTitle`),onChange:t=>e.onEngineChange(t||null)})})}
      ${va(e,t)}
      ${e.engineOutcome===null?O:L({title:N(e.engineOutcome.kind===`error`?`memoryPage.engine.changeFailed`:`pluginsPage.needsAttention`),description:e.engineOutcome.message,control:U({kind:e.engineOutcome.kind===`error`?`danger`:`warn`,label:N(e.engineOutcome.kind===`error`?`common.failed`:`pluginsPage.needsAttention`)})})}
    `)}function va(e,t){return t===null||e.engineState!==`disabled`?O:L({title:N(`memoryPage.engine.disabledTitle`),description:N(`memoryPage.engine.disabledHint`),control:E`
      <button
        class="btn btn--sm"
        ?disabled=${e.engineBusy}
        @click=${()=>e.onEngineChange(t)}
      >
        ${N(`memoryPage.engine.enable`)}
      </button>
    `})}function ya(e){switch(e){case`enabled`:return U({kind:`ok`,label:N(`common.enabled`)});case`disabled`:return U({kind:`muted`,label:N(`common.disabled`)});case`loading`:return U({kind:`muted`,label:N(`common.loading`)});default:return U({kind:`muted`,label:N(`memoryPage.addons.stateUnknown`)})}}function ba(e){return z({title:N(`memoryPage.addons.title`),description:N(`memoryPage.addons.description`)},E`
      ${e.addons.map(t=>E`
          ${e.canToggleAddons&&(t.state===`enabled`||t.state===`disabled`)?V({title:t.label,ariaLabel:N(`memoryPage.addons.toggleAriaLabel`,{plugin:t.label}),description:t.description,checked:t.state===`enabled`,disabled:t.busy,onChange:n=>e.onAddonChange(t.id,n)}):L({title:t.label,description:t.description,control:ya(t.state)})}
          ${t.error===null?O:L({title:N(`memoryPage.addons.changeFailed`,{plugin:t.label}),description:t.error,control:U({kind:`danger`,label:N(`common.failed`)})})}
          ${t.notice===null?O:L({title:N(`pluginsPage.needsAttention`),description:t.notice,control:U({kind:`warn`,label:N(`pluginsPage.needsAttention`)})})}
        `)}
      ${L({title:N(`memoryPage.addons.manage`),control:E`<a class="memory-page__link" href=${e.pluginsHref}
          >${N(`memoryPage.addons.manageLink`)}</a
        >`})}
    `)}function xa(e){return E`
    <div class="settings-page">
      ${_a(e)} ${ba(e)}
      <p class="settings-page__intro">${N(`memoryPage.search.intro`)}</p>
    </div>
    ${e.editor}
    <div class="settings-page">
      ${e.dreamingSettings}
      ${z({title:N(`memoryPage.import.title`),description:N(`memoryPage.import.description`)},L({title:N(`tabs.memoryImport`),description:N(`subtitles.memoryImport`),control:e.canImportMemory?E`<a class="memory-page__link" href=${e.memoryImportHref}
                >${N(`memoryPage.import.link`)}</a
              >`:R(N(`memoryImport.adminRequired`))}))}
    </div>
  `}function Sa(e){return E`
    <section class="memory-page">
      <section class="content-header content-header--settings content-header--page hub-page-header">
        <div class="hub-page-header__title">
          <div class="page-title">${N(`tabs.memory`)}</div>
          <div class="page-subtitle">
            ${N(`memoryPage.intro`)} ${Qt(Ta)}
          </div>
        </div>
        <div class="hub-page-header__tabs">
          ${br({id:`memory`,active:e.activeTab,tabs:[{value:`overview`,label:N(`memoryPage.tabs.overview`)},{value:`memories`,label:N(`memoryPage.tabs.memories`)},{value:`dreams`,label:N(`memoryPage.tabs.dreams`)},{value:`settings`,label:N(`memoryPage.tabs.settings`)}],ariaLabel:N(`memoryPage.tablistLabel`),panelId:wa,onSelect:t=>e.onTabChange(t)})}
        </div>
        <div class="hub-page-header__actions">
          ${e.activeTab===`settings`||e.agents.length<=1?O:E`
                  <div class="agent-scope-control">
                    <span class="agent-scope-control__label"
                      >${N(`memoryPage.dreaming.agentScope.rowTitle`)}</span
                    >
                    <openclaw-agent-select
                      .options=${e.agents}
                      .value=${e.agentId??``}
                      .accessibleLabel=${N(`memoryPage.dreaming.agentScope.rowTitle`)}
                      .onSelect=${t=>e.onAgentChange(t||null)}
                    ></openclaw-agent-select>
                  </div>
                `}
        </div>
      </section>
      <div id=${wa} class="memory-page__panel" role="tabpanel">
        ${e.activeTab===`overview`?e.overview:e.activeTab===`memories`?e.memories:e.activeTab===`dreams`?e.dreams:xa(e)}
      </div>
    </section>
  `}var Ca,wa,Ta,Ea;function Da(){return(Da=e((()=>{T(),Qn(),xr(),H(),j(),Jr(),vr(),qr(),Ca=[{id:`active-memory`,labelKey:`memoryPage.addons.activeMemory.title`},{id:`memory-wiki`,labelKey:`memoryPage.addons.memoryWiki.title`}],wa=`memory-settings-panel`,Ta=`https://docs.openclaw.ai/concepts/memory`,Ea=``})))()}function Oa(e){return E`
    <openclaw-memory-settings
      .configObject=${e.configObject}
      .mutationDisabled=${e.mutationDisabled}
      .pluginsHref=${e.pluginsHref}
      .memoryImportHref=${e.memoryImportHref}
      .routeData=${e.routeData}
      .buildEditor=${e.buildEditor}
    ></openclaw-memory-settings>
  `}var ka,Aa,ja,Y;function Ma(){return(Ma=e((()=>{s(),T(),w(),et(),rt(),Ct(),H(),j(),te(),oe(),y(),Kt(),xe(),S(),_(),Dr(),Mi(),Ii(),zi(),ea(),da(),vr(),Da(),ka=`none`,Aa=[`plugins`,`slots`,`memory`],ja=`https://docs.openclaw.ai/concepts/dreaming`,Y=class extends m{constructor(...e){super(...e),this.configObject={},this.mutationDisabled=!1,this.pluginsHref=``,this.memoryImportHref=``,this.routeData=null,this.buildEditor=()=>E``,this.catalog={kind:`unavailable`},this.engineBusy=!1,this.engineOutcome=null,this.addonBusy=new Set,this.addonErrors=new Map,this.addonNotices=new Map,this.addonRefreshWarnings=new Map,this.selectedAgentId=null,this.overviewStatus={kind:`idle`},this.probingEmbeddings=!1,this.support=`unknown`,this.connection=null,this.catalogRequest=0,this.overviewRequest=null,this.supportPluginId=null,this.supportProbe=null,this.addonNoticeOperations=new Map,this.normalizedLocation=``,this.subscriptions=new h(this).watch(()=>this.context?.gateway,(e,t)=>e.subscribe(t),e=>this.syncGateway(e.snapshot.client,e.snapshot.phase===`connected`)).watch(()=>this.context?.runtimeConfig,(e,t)=>e.subscribe(t),e=>this.syncSupport(e)).watch(()=>this.context?.agents,(e,t)=>e.subscribe(t),()=>void this.loadOverviewStatus())}disconnectedCallback(){this.subscriptions.clear(),this.connection=null,this.overviewRequest=null,this.probingEmbeddings=!1,this.catalog={kind:`unavailable`},this.supportPluginId=null,this.supportProbe=null,this.addonNoticeOperations.clear(),super.disconnectedCallback()}connectedCallback(){super.connectedCallback(),this.syncCanonicalLocation()}updated(e){if(e.has(`routeData`)&&(this.activeTab(e.get(`routeData`)??null)!==this.activeTab()&&(this.overviewRequest=null,this.probingEmbeddings=!1,this.loadOverviewStatus()),this.syncCanonicalLocation()),e.has(`configObject`)){let t=e.get(`configObject`),n=t?gr(ur(t)):null,r=gr(ur(this.configObject));t&&n!==r&&(this.overviewRequest=null,this.probingEmbeddings=!1,this.loadOverviewStatus())}}activeTab(e=this.routeData){return fr(e??{},this.context?.basePath??``)??`overview`}syncCanonicalLocation(){let e=this.context,t=this.routeData;if(!e||!t)return;let n=hr(t,e.basePath);if(!n){this.normalizedLocation=``;return}let r=`${t.pathname}${t.search}${t.hash}`;this.normalizedLocation!==r&&(this.normalizedLocation=r,e.replace(`memory`,n))}syncGateway(e,t){if(this.connection?.client===e&&this.connection.connected===t)return;let n={client:e,connected:t};if(this.connection=n,this.engineBusy=!1,this.engineOutcome=null,this.addonBusy=new Set,this.addonRefreshWarnings=new Map,this.overviewRequest=null,this.probingEmbeddings=!1,!e||!t){this.catalog={kind:`unavailable`},this.activeTab()===`overview`&&(this.overviewStatus={kind:`error`,message:N(`memoryPage.overview.hero.gatewayOffline`)});return}this.catalog={kind:`loading`},this.loadCatalog(e,n),this.reconcileAddonNotices(e,n),this.loadOverviewStatus()}async readProcessInstanceId(e){if(!Wt(this.context.gateway.snapshot,`system.info`))return null;try{return(await e.request(`system.info`,{})).processInstanceId??null}catch{return null}}async reconcileAddonNotices(e,t){if(this.addonNotices.size===0)return;let n=await this.readProcessInstanceId(e);if(!n||!this.isConnected||this.connection!==t)return;let r=new Map;for(let[e,t]of this.addonNotices)t.processInstanceId===null?r.set(e,{...t,processInstanceId:n}):t.processInstanceId===n&&r.set(e,t);(r.size!==this.addonNotices.size||[...r].some(([e,t])=>this.addonNotices.get(e)!==t))&&(this.addonNotices=r)}async loadCatalog(e,t){let n=++this.catalogRequest;try{let r=await ue(e);this.applyCatalog(t,n,{kind:`ready`,plugins:r.plugins,mutationAllowed:r.mutationAllowed})}catch{this.applyCatalog(t,n,{kind:`unavailable`})}}applyCatalog(e,t,n){!this.isConnected||this.connection!==e||this.catalogRequest!==t||(this.catalog=n)}resolveAgentId(){let e=this.context.agents.state.agentsList,t=re(e?.agents??[]);return this.selectedAgentId&&t.some(e=>e.id===this.selectedAgentId)?this.selectedAgentId:e?.defaultId??t[0]?.id??null}agentOptions(){return re(this.context.agents.state.agentsList?.agents??[]).map(e=>({value:e.id,label:pe(e),agent:e}))}selectAgent(e){this.selectedAgentId!==e&&(this.selectedAgentId=e,this.overviewRequest=null,this.probingEmbeddings=!1,this.loadOverviewStatus())}async loadOverviewStatus(e={}){if(this.activeTab()!==`overview`)return;if(ur(this.configObject).kind===`off`){this.overviewRequest=null,this.overviewStatus={kind:`idle`},this.probingEmbeddings=!1;return}let t=this.connection,n=t?.connected?t.client:null,r=this.resolveAgentId();if(!t||!n){this.overviewStatus={kind:`error`,message:N(`memoryPage.overview.hero.gatewayOffline`)},this.probingEmbeddings=!1;return}if(!r||!e.force&&this.overviewRequest?.connection===t&&this.overviewRequest.agentId===r)return;let i=e.probeEmbeddings===!0,a={connection:t,agentId:r,probeEmbeddings:i};this.overviewRequest=a,this.probingEmbeddings=i,i||(this.overviewStatus={kind:`loading`});try{let e=await n.request(`doctor.memory.status`,{agentId:r,...i?{probe:!0}:{}});if(!this.isConnected||this.overviewRequest!==a)return;this.overviewStatus={kind:`ready`,payload:e}}catch(e){if(!this.isConnected||this.overviewRequest!==a)return;this.overviewStatus={kind:`error`,message:C(e)}}finally{this.overviewRequest===a&&(this.probingEmbeddings=!1)}}engineState(e){let t=gr(e);return t===null?`unknown`:pa(this.catalog,ma(this.catalog,t))}applyPluginRefreshOutcome(e,t,n){if(this.connection!==e)return;if(!t){this.addonRefreshWarnings=new Map,this.engineOutcome?.kind===`warning`&&(this.engineOutcome=null);return}let r=N(`pluginsPage.configRefreshFailed`,{error:t});n?this.addonRefreshWarnings=new Map(this.addonRefreshWarnings).set(n,r):this.engineOutcome={kind:`warning`,message:r}}async changeAddon(e,t){if(this.addonBusy.has(e)||this.mutationDisabled||this.catalog.kind!==`ready`||!this.catalog.mutationAllowed||!$e(this.context.gateway.snapshot).canAdmin)return;let n=ma(this.catalog,e),r=pa(this.catalog,n),i=this.connection,a=i?.connected?i.client:null;if(!i||!a||r!==`enabled`&&r!==`disabled`)return;let o={};this.addonNoticeOperations.set(e,o),this.addonBusy=new Set(this.addonBusy).add(e);let s=new Map(this.addonErrors);s.delete(e),this.addonErrors=s;let c=new Map(this.addonRefreshWarnings);c.delete(e),this.addonRefreshWarnings=c;try{let n=await he(this.context.runtimeConfig,a,async n=>{let r=this.readProcessInstanceId(n);return{result:await de(n,e,t),processInstanceId:r}}),{result:r,processInstanceId:s}=n.value,c=t?`pluginsPage.enabledRestart`:`pluginsPage.disabledRestart`,l=`warnings`in r?r.warnings??[]:[],u=[r.restartRequired?N(c,{name:r.plugin.name}):null,...l].filter(Boolean).join(` `);if(this.addonNoticeOperations.get(e)===o){this.applyPluginRefreshOutcome(i,n.refreshError,e);let t=u?await s:null;if(this.addonNoticeOperations.get(e)===o){let n=new Map(this.addonNotices);if(u?n.set(e,{message:u,processInstanceId:t}):n.delete(e),this.addonNotices=n,u){let e=this.connection;e?.connected&&e.client&&this.reconcileAddonNotices(e.client,e)}}}let d=this.connection;d?.connected&&d.client&&await this.loadCatalog(d.client,d)}catch(t){this.connection===i&&(this.addonErrors=new Map(this.addonErrors).set(e,C(t)))}finally{if(this.addonNoticeOperations.get(e)===o&&this.addonNoticeOperations.delete(e),this.connection===i){let t=new Set(this.addonBusy);t.delete(e),this.addonBusy=t}}}async changeEngine(e,t){if(this.engineBusy||this.mutationDisabled||this.catalog.kind===`ready`&&!this.catalog.mutationAllowed||e===gr(t)&&(e===null||this.engineState(t)===`enabled`))return;if(this.engineOutcome=null,!e){this.context.runtimeConfig.patchForm(Aa,ka);return}let n=this.connection,r=n?.connected?n.client:null;if(!(!n||!r)){this.engineBusy=!0;try{let t=await he(this.context.runtimeConfig,r,t=>de(t,e,!0));this.applyPluginRefreshOutcome(n,t.refreshError);let i=this.connection;i?.connected&&i.client&&await this.loadCatalog(i.client,i)}catch(e){this.connection===n&&(this.engineOutcome={kind:`error`,message:C(e)})}finally{this.connection===n&&(this.engineBusy=!1)}}}configObjectFromController(){return p(this.context.runtimeConfig.state)}dreamingPluginId(){return Or(this.configObjectFromController()).pluginId}dreamingConfig(){let e=l(this.configObjectFromController()?.plugins),t=l(l(e?.entries)?.[this.dreamingPluginId()]);return l(l(t?.config)?.dreaming)}syncSupport(e){let t=Or(p(e.state)).pluginId;t!==this.supportPluginId&&(this.supportPluginId=t,this.support=`unknown`);let n=e.state.connected;if(this.supportProbe&&(this.supportProbe.pluginId!==t||!n)&&(this.supportProbe=null),this.support!==`unknown`||this.supportProbe||!n)return;let r={pluginId:t};this.supportProbe=r,Tr(e,t).then(e=>{this.supportProbe===r&&(this.supportProbe=null,this.isConnected&&(this.support=e))})}patchDreaming(e,t){if(this.mutationDisabled)return;let n=Li(this.dreamingPluginId(),e);if(t===void 0){this.context.runtimeConfig.removeFormValue(n);return}this.context.runtimeConfig.patchForm(n,t)}renderDreamingControls(){let e=this.dreamingPluginId();return E`
      <p class="settings-page__intro">
        ${N(`memoryPage.dreaming.intro`,{plugin:e})}
        ${Qt(ja)}
      </p>
      ${this.support===`unsupported`?qi(e):Ki({dreaming:this.dreamingConfig(),timezoneDefault:Ri(this.configObjectFromController()),disabled:this.mutationDisabled,onPatch:(e,t)=>this.patchDreaming(e,t)})}
    `}navigateTab(e){this.context.navigate(`memory`,{pathname:_t(e,this.context.basePath)})}render(){let e=ur(this.configObject),t=this.mutationDisabled||this.catalog.kind===`ready`&&!this.catalog.mutationAllowed,n=this.activeTab(),r=this.resolveAgentId(),i=r?null:this.context.agents.state.agentsError;return Sa({activeTab:n,onTabChange:e=>this.navigateTab(e),engineOptions:fa(this.catalog,e),engineSelection:e,engineState:this.engineState(e),engineBusy:this.engineBusy||t,engineOutcome:this.engineOutcome,onEngineChange:t=>void this.changeEngine(t,e),addons:ha(this.catalog,{busy:this.addonBusy,errors:this.addonErrors,notices:this.addonNotices,refreshWarnings:this.addonRefreshWarnings}),canToggleAddons:this.catalog.kind===`ready`&&this.catalog.mutationAllowed&&!this.mutationDisabled&&$e(this.context.gateway.snapshot).canAdmin,onAddonChange:(e,t)=>void this.changeAddon(e,t),pluginsHref:this.pluginsHref,memoryImportHref:this.memoryImportHref,canImportMemory:$e(this.context.gateway.snapshot).canAdmin,agentId:r,agents:this.agentOptions(),onAgentChange:e=>this.selectAgent(e),overview:ua({agentId:r,engineSelection:e,engineDisabled:this.engineState(e)===`disabled`,status:i?{kind:`error`,message:i}:this.overviewStatus,probingEmbeddings:this.probingEmbeddings,onRefresh:()=>r?void this.loadOverviewStatus({force:!0}):void this.context.agents.ensureList(),onProbeEmbeddings:()=>void this.loadOverviewStatus({force:!0,probeEmbeddings:!0}),onNavigate:e=>this.navigateTab(e)}),memories:E`
        <openclaw-memory-memories
          .client=${this.context.gateway.snapshot.client}
          .connected=${this.context.gateway.snapshot.phase===`connected`}
          .methodAdvertised=${Wt(this.context.gateway.snapshot,`memory.search`)===!0}
          .agentId=${r}
        ></openclaw-memory-memories>
      `,dreams:E` <openclaw-memory-dreaming .agentId=${r}></openclaw-memory-dreaming> `,editor:n===`settings`?this.buildEditor(cr(`settings`)):E``,dreamingSettings:n===`settings`?this.renderDreamingControls():E``})}},r([a({context:ut,subscribe:!0})],Y.prototype,`context`,void 0),r([k({attribute:!1})],Y.prototype,`configObject`,void 0),r([k({type:Boolean})],Y.prototype,`mutationDisabled`,void 0),r([k()],Y.prototype,`pluginsHref`,void 0),r([k()],Y.prototype,`memoryImportHref`,void 0),r([k({attribute:!1})],Y.prototype,`routeData`,void 0),r([k({attribute:!1})],Y.prototype,`buildEditor`,void 0),r([D()],Y.prototype,`catalog`,void 0),r([D()],Y.prototype,`engineBusy`,void 0),r([D()],Y.prototype,`engineOutcome`,void 0),r([D()],Y.prototype,`addonBusy`,void 0),r([D()],Y.prototype,`addonErrors`,void 0),r([D()],Y.prototype,`addonNotices`,void 0),r([D()],Y.prototype,`addonRefreshWarnings`,void 0),r([D()],Y.prototype,`selectedAgentId`,void 0),r([D()],Y.prototype,`overviewStatus`,void 0),r([D()],Y.prototype,`probingEmbeddings`,void 0),r([D()],Y.prototype,`support`,void 0),customElements.get(`openclaw-memory-settings`)||customElements.define(`openclaw-memory-settings`,Y)})))()}function Na(e){let{gatewayAuth:t,execPolicy:n,browserEnabled:r,browserEnabledOverridden:i,toolProfile:a,toolProfileOverridden:o}=e.security,s=a.trim()||`full`,c=kr.map(e=>({value:e.id,label:N(e.labelKey)}));return c.some(e=>e.value===s)||c.push({value:s,label:s}),z({title:N(`quickSettings.security.title`)},[L({title:N(`quickSettings.security.gatewayAuth`),control:U({kind:t===`none`?`warn`:t===`unknown`?`muted`:`ok`,label:t})}),L({title:N(`quickSettings.security.execPolicy`),control:R(n)}),V({title:N(`quickSettings.security.browserEnabled`),description:I(N(`common.enabled`),i),checked:r,disabled:e.configBusy,onChange:t=>e.onBrowserEnabledToggle?.(t)}),L({title:N(`quickSettings.security.toolProfile`),description:I(N(`agents.toolCatalog.profiles.full`),o),stacked:!0,control:sn({value:s,options:c,disabled:e.configBusy,onChange:t=>e.onToolProfileChange?.(t)})}),L({title:N(`devices.pairing.title`),control:E`
        <button
          class="btn"
          title=${e.canPairDevice?``:N(`devices.pairing.adminRequired`)}
          ?disabled=${!e.canPairDevice}
          @click=${e.onPairMobile}
        >
          ${M.smartphone} ${N(`devices.pairing.button`)}
        </button>
      `})])}function Pa(e){return E`
    <section class="security-page">
      <div class="settings-page">${Na(e)}</div>
      ${e.editor}
    </section>
  `}function Fa(){return(Fa=e((()=>{T(),P(),H(),j(),Er()})))()}function Ia(e){return{gateway:{controlUi:{sessionObserver:e?null:!1}}}}function La(e){return{agents:{defaults:{utilityModel:e.kind===`auto`?null:e.kind===`disabled`?``:e.model}}}}function Ra(e){return!e||e.status===`unavailable`?N(`configView.sessionObserver.modelUnavailable`):e.status===`disabled`?N(`configView.sessionObserver.modelDisabled`):N(e.status===`auto`?`configView.sessionObserver.modelAuto`:`configView.sessionObserver.modelConfigured`,{model:e.model})}function za(e){let t=new Set;return e.filter(e=>e.available!==!1).map(e=>({value:e.id.startsWith(`${e.provider}/`)?e.id:`${e.provider}/${e.id}`,label:e.name||e.id,provider:e.provider})).filter(e=>!t.has(e.value)&&(t.add(e.value),!0)).toSorted((e,t)=>e.label.localeCompare(t.label))}function Ba(e){let t=e.utilityModel===void 0?Va:e.utilityModel,n=za(e.models),r=n.some(e=>e.value===t),i=Tn(t);return E`
    <div class="settings-group">
      ${V({title:N(`configView.sessionObserver.toggle`),description:N(`configView.sessionObserver.toggleHint`),checked:e.enabled,disabled:e.disabled,onChange:e.onEnabledChange})}
      ${L({title:N(`configView.sessionObserver.resolvedModel`),description:Ra(e.resolvedUtilityModel)})}
      ${L({title:N(`configView.sessionObserver.modelPicker`),description:e.modelsUnavailable?N(`configView.sessionObserver.modelCatalogUnavailable`):N(`configView.sessionObserver.modelPickerHint`),control:Ar({label:N(`configView.sessionObserver.modelPicker`),value:t,options:[{value:Va,label:N(`configView.sessionObserver.auto`)},{value:``,label:N(`configView.sessionObserver.disabled`)},...t!==Va&&t!==``&&!r?[{value:t,label:t,disabled:e.modelsUnavailable,...i?{provider:i}:{}}]:[],...n.map(({value:t,label:n,provider:r})=>({value:t,label:n,provider:r,disabled:e.modelsUnavailable}))],disabled:e.disabled,onChange:t=>e.onUtilityModelChange(t===Va?{kind:`auto`}:t===``?{kind:`disabled`}:{kind:`model`,model:t})})})}
    </div>
  `}var Va;function Ha(){return(Ha=e((()=>{T(),jr(),En(),H(),j(),Zn(),Xn(),Va=`__openclaw_observer_auto__`})))()}function Ua(e){let n=t(t(e.talk)?.realtime),r=t(n?.providers)??{},i={};for(let[e,n]of Object.entries(r)){let r=t(n);r&&(i[e]={model:d(r.model),speakerVoice:d(r.speakerVoice)??d(r.voice)})}return{provider:d(n?.provider),model:d(n?.model),speakerVoice:d(n?.speakerVoice)??d(n?.speakerVoiceId),transport:d(n?.transport),consultRouting:d(n?.consultRouting)?.toLowerCase()??null,providerEntries:i}}function Wa(e){let t=e?.trim().toLowerCase();return t===`gpt-live`||t?.startsWith(`gpt-live-`)===!0}function Ga(e,t){return e!==void 0&&e.length>0&&!e.includes(t)}function Ka(){return(Ka=e((()=>{})))()}function X(e){return L({title:e.title,description:e.description,control:E`
      <select
        class="settings-select"
        ?data-settings-send-shortcut=${e.setting===`send-shortcut`}
        ?data-settings-follow-up-mode=${e.setting===`follow-up-mode`}
        ?data-settings-catalog-open-target=${e.setting===`catalog-open-target`}
        aria-label=${e.title}
        ?disabled=${e.disabled??!1}
        .value=${e.value}
        @change=${t=>e.onChange(t.currentTarget.value)}
      >
        ${e.options.map(t=>E`
            <option value=${t.value} ?selected=${e.value===t.value}>
              ${t.label}
            </option>
          `)}
      </select>
    `})}function qa(){return(qa=e((()=>{T(),H()})))()}function Ja(e){let t=e.snapshot?.voice.locale;if(!t)return null;let n=Qa.get(e),r=n?.primary??t.primary;return{primary:r,additional:[...new Set(n?.additional??t.additional)].filter(e=>e!==r)}}function Ya(e,t){let n=Qa.get(e);if(n)Object.assign(n,t);else{let n={...t};Qa.set(e,n);let r=e.subscribe(t=>{let i=t.voice.locale;if(!i){Qa.delete(e),r();return}n.primary===i.primary&&delete n.primary,n.additional&&n.additional.length===i.additional.length&&n.additional.every((e,t)=>e===i.additional[t])&&delete n.additional,n.primary===void 0&&n.additional===void 0&&(Qa.delete(e),r())})}t.additional&&e.set(`voice.locale.additional`,t.additional),t.primary!==void 0&&e.set(`voice.locale.primary`,t.primary)}function Xa(e,t,n){return z({title:N(`configPage.deviceTalk.triggerWords`)},L({title:N(`configPage.deviceTalk.triggerWords`),description:N(`configPage.deviceTalk.triggerWordsHint`),stacked:!0,control:E`
        ${e.kind===`ready`?E`<textarea
                class="settings-input"
                aria-label=${N(`configPage.deviceTalk.triggerWords`)}
                rows="4"
                .value=${e.text}
                @input=${e=>{t(e.currentTarget.value)}}
              ></textarea>`:O}
        ${e.kind===`error`||e.kind===`ready`&&e.error?E`<div class="callout danger" role="alert">
                ${e.error}
                <button class="btn btn--sm" type="button" @click=${n}>
                  ${N(`common.retry`)}
                </button>
              </div>`:e.kind===`unavailable`?E`<span class="muted"
                  >${N(`configPage.deviceTalk.triggerWordsUnavailable`)}</span
                >`:E`<span class="muted" role="status"
                  >${e.kind===`loading`?N(`common.loading`):e.kind===`ready`&&e.phase!==`saved`?N(`common.saving`):N(`configPage.deviceTalk.saved`)}</span
                >`}
      `}))}function Za(e){if(!e)return O;let t=e.snapshot?.voice;if(!t)return z({title:N(kt(e.snapshot))},L({title:N(`common.loading`)}));let n=t.microphone,r=[{value:``,label:N(`configPage.deviceTalk.systemDefault`)},...n?.devices.map(({id:e,name:t})=>({value:e,label:t}))??[]];n?.selectedId&&!n.devices.some(({id:e})=>e===n.selectedId)&&r.push({value:n.selectedId,label:N(`configPage.deviceTalk.disconnectedMicrophone`,{id:n.selectedId})});let i=(t.locale?.available??[]).map(({id:e,name:t})=>({value:e,label:t})),a=Ja(e);return z({title:N(kt(e.snapshot))},[...[`wakeEnabled`,`wakeTriggersTalkMode`,`pushToTalkEnabled`,`talkShiftToStopEnabled`,`talkPhaseSoundsEnabled`,`realtimeRelayEnabled`,`triggerChime`,`sendChime`,`talkEnabled`,`talkButtonEnabled`,`talkBackgroundEnabled`,`speakerphoneEnabled`].map(n=>{let r=t[n];return r===void 0?O:V({title:N(`configPage.deviceTalk.${n}`),checked:r,disabled:n===`wakeEnabled`&&!t.supported&&!t.wakeEnabled,description:n===`wakeEnabled`&&!t.supported?N(e.snapshot?.device.platform===`macos`?`configPage.deviceTalk.unsupported`:`configPage.deviceTalk.unsupportedDevice`):n===`realtimeRelayEnabled`?N(`configPage.deviceTalk.realtimeRelayHint`):void 0,onChange:t=>e.set(`voice.${n}`,t)})}),n?X({title:N(`configPage.deviceTalk.microphone`),value:n.selectedId??``,options:r,onChange:t=>e.set(`voice.microphone`,t||null)}):O,a?X({title:N(`configPage.deviceTalk.primaryLanguage`),value:a.primary,options:i,onChange:t=>{let n=Ja(e);n&&Ya(e,{primary:t,...n.additional.includes(t)?{additional:n.additional.filter(e=>e!==t)}:{}})}}):O,a?L({title:N(`configPage.deviceTalk.additionalLanguages`),stacked:!0,control:E`
            ${a.additional.map(t=>{let n=i.find(e=>e.value===t)?.label??t;return E`<div>
                ${n}
                <button
                  class="btn btn--sm"
                  type="button"
                  aria-label=${N(`configPage.deviceTalk.removeLanguage`,{name:n})}
                  @click=${()=>{let n=Ja(e);n&&Ya(e,{additional:n.additional.filter(e=>e!==t)})}}
                >
                  ${N(`common.remove`)}
                </button>
              </div>`})}
            <select
              class="settings-select"
              aria-label=${N(`configPage.deviceTalk.addLanguage`)}
              @change=${t=>{let n=t.currentTarget,r=Ja(e);n.value&&r&&n.value!==r.primary&&!r.additional.includes(n.value)&&(Ya(e,{additional:[...r.additional,n.value]}),n.value=``)}}
            >
              <option value="">${N(`configPage.deviceTalk.addLanguage`)}</option>
              ${i.filter(({value:e})=>e!==a.primary&&!a.additional.includes(e)).map(({value:e,label:t})=>E`<option value=${e}>${t}</option>`)}
            </select>
          `}):O,n?L({title:N(`configPage.deviceTalk.microphoneTest`),control:E`<button
            class="btn btn--sm"
            type="button"
            @click=${()=>e.openPanel(`microphone-test`)}
          >
            ${N(`configPage.deviceTalk.microphoneTest`)}
          </button>`}):O])}var Qa;function $a(){return($a=e((()=>{T(),We(),H(),j(),Zn(),qa(),Xn(),Qa=new WeakMap})))()}function eo(e,t){if(t)return e.find(e=>e.id===t||e.aliases.includes(t))}function to(e,t){if(e.kind===`ready`)return t.provider?eo(e.providers,t.provider):eo(e.providers,e.activeProvider)}function no(e,t){let n=[e.provider,t?.id,...t?.aliases??[]],r=[];for(let t of n)t&&t in e.providerEntries&&!r.includes(t)&&r.push(t);return r}function ro(e,t){let n=e.model,r=e.speakerVoice;for(let i of no(e,t)){let t=e.providerEntries[i];n??=t?.model??null,r??=t?.speakerVoice??null}return{model:n,speakerVoice:r}}function io(e){let t=e.catalog;return t.kind===`loading`?L({title:N(`talkPage.status.title`),control:U({kind:`muted`,label:N(`common.loading`)})}):t.kind===`unavailable`?L({title:N(`talkPage.status.title`),description:N(`talkPage.status.unavailableHint`),control:U({kind:`muted`,label:N(`talkPage.status.unavailable`)})}):L({title:N(`talkPage.status.title`),description:t.activeProvider?N(`talkPage.status.activeProvider`,{provider:t.activeProvider}):N(`talkPage.status.noProvider`),control:t.ready?U({kind:`ok`,label:N(`talkPage.status.ready`)}):U({kind:`warn`,label:N(`talkPage.status.notReady`)})})}function ao(e){if(e.catalog.kind!==`ready`||e.catalog.providers.length===0)return L({title:N(`talkPage.provider.title`),description:N(`talkPage.provider.description`),control:R(e.selection.provider??N(`talkPage.provider.auto`),{mono:!0})});let t=eo(e.catalog.providers,e.selection.provider),n=e.selection.provider&&!t?e.selection.provider:null;return L({title:N(`talkPage.provider.title`),description:N(`talkPage.provider.description`),stacked:!0,control:sn({value:t?.id??n??uo,options:[...e.catalog.providers.map(e=>({value:e.id,label:e.label})),...n?[{value:n,label:n}]:[],{value:uo,label:N(`talkPage.provider.auto`)}],disabled:e.configBusy,ariaLabel:N(`talkPage.provider.title`),onChange:t=>e.onProviderChange(t||null)})})}function oo(e){let t=to(e.catalog,e.selection),{model:n}=ro(e.selection,t);if(!t)return L({title:N(`talkPage.model.title`),description:N(`talkPage.model.description`),control:R(n??N(`talkPage.model.default`),{mono:!0})});let r=t.models.length?t.models:t.defaultModel?[t.defaultModel]:[],i=[{value:uo,label:t.defaultModel?N(`talkPage.model.defaultNamed`,{model:t.defaultModel}):N(`talkPage.model.default`)},...r.map(e=>({value:e,label:e})),...n&&!r.includes(n)?[{value:n,label:n}]:[]];return L({title:N(`talkPage.model.title`),description:N(`talkPage.model.description`),control:Ar({label:N(`talkPage.model.title`),value:n??uo,options:i.map(({value:e,label:n})=>({value:e,label:n,provider:t.id})),disabled:e.configBusy,onChange:t=>e.onModelChange(t||null)})})}function so(e){let t=to(e.catalog,e.selection),{model:n,speakerVoice:r}=ro(e.selection,t),i=e.modelDefaultPending?t?.defaultModel:n,a=t?.voicesByModel?.[i??``],o=e.modelDefaultPending!==!0&&(n===null||Wa(n)&&a===void 0),s=o?t?.activeVoices??t?.voices??[]:a??t?.voices??[],c=o&&t?.activeVoiceSelectionPolicy===`allowlist-default`&&r!==null&&!s.includes(r);if(s.length===0)return L({title:N(`talkPage.voice.title`),description:N(`talkPage.voice.description`),control:R(r??N(`talkPage.voice.default`),{mono:!0})});let l=[{value:uo,label:N(`talkPage.voice.default`)},...s.map(e=>({value:e,label:e})),...r&&!s.includes(r)?[{value:r,label:c?`${r} (${N(`talkPage.voice.unsupported`)})`:r}]:[]];return X({title:N(`talkPage.voice.title`),description:N(c?`talkPage.voice.unsupportedDefault`:`talkPage.voice.description`),value:r??uo,options:l,disabled:e.configBusy,onChange:t=>e.onVoiceChange(t||null)})}function co(e){let t=to(e.catalog,e.selection),{model:n}=ro(e.selection,t);return t?.id!==`openai`||!Wa(n)?O:L({title:N(`talkPage.gptLive.title`),description:N(`talkPage.gptLive.hint`),control:t.configured?U({kind:`ok`,label:N(`talkPage.gptLive.ready`)}):U({kind:`warn`,label:N(`talkPage.status.notReady`)})})}function lo(e){return E`
    <section class="talk-page">
      <div class="settings-page">
        ${Za(e.nativeDeviceSettings)}
        ${e.voiceWake?Xa(e.voiceWake.state,e.voiceWake.onInput,e.voiceWake.onRetry):O}
        ${z({title:N(`talkPage.voiceSection.title`),description:N(`talkPage.voiceSection.description`)},E`
            ${io(e)} ${ao(e)} ${oo(e)}
            ${so(e)} ${co(e)}
          `)}
      </div>
      ${e.editor}
    </section>
  `}var uo;function fo(){return(fo=e((()=>{T(),jr(),H(),j(),qa(),$a(),Ka(),uo=``})))()}function po(e){return e?.configRevisionHash??e?.hash??null}function mo(e){return{id:e.id,label:e.label,configured:e.configured,aliases:e.aliases??[],models:e.models??[],voices:e.voices??[],activeVoices:e.activeVoices,activeVoiceSelectionPolicy:e.activeVoiceSelectionPolicy,voicesByModel:e.voicesByModel,transports:e.transports??[],defaultModel:e.defaultModel??null}}function ho(e,t){return Wa(e)&&t===`provider-websocket`}function go(e){let t=yo.get(e);return t||(t=new bo(e),yo.set(e,t)),t}function _o(e){return E`
    <openclaw-talk-settings
      .configObject=${e.configObject}
      .mutationDisabled=${e.mutationDisabled}
      .buildEditor=${e.buildEditor}
    ></openclaw-talk-settings>
  `}var vo,yo,bo,Z;function xo(){return(xo=e((()=>{s(),T(),w(),rt(),j(),Kt(),S(),_(),Ka(),fo(),vo=new Set([`webrtc`,`provider-websocket`]),yo=new WeakMap,bo=class{constructor(e){this.gateway=e,this.value={kind:`unavailable`},this.connection=null,this.voiceWakeWrite=null,this.listeners=new Set,e.subscribe(()=>this.sync())}get state(){return this.value}update(e){this.value=e;for(let e of this.listeners)e()}subscribe(e){this.listeners.add(e),this.sync();let t=this.connection;return t?.connected&&t.voiceWake&&this.state.kind!==`loading`&&(this.state.kind!==`ready`||this.state.phase===`saved`)&&this.loadVoiceWake(t),()=>{this.listeners.delete(e)}}flush(){this.voiceWakeTimer!==void 0&&(clearTimeout(this.voiceWakeTimer),this.voiceWakeTimer=void 0,this.saveVoiceWake())}retry(){this.state.kind===`ready`?this.saveVoiceWake():this.connection&&this.loadVoiceWake(this.connection)}sync(){let e=this.gateway.snapshot,t=this.gateway.connection.gatewayUrl,n=e.client,r=e.phase===`connected`,i=Wt(e,`voicewake.get`)===!0&&Wt(e,`voicewake.set`)===!0;if(this.connection?.gatewayUrl===t&&this.connection.client===n&&this.connection.connected===r&&this.connection.voiceWake===i)return;clearTimeout(this.voiceWakeTimer),this.voiceWakeTimer=void 0,this.voiceWakeWrite&&=(this.voiceWakeWrite.next=null,null);let a=this.connection?.gatewayUrl===t&&this.state.kind===`ready`&&this.state.phase!==`saved`?this.state:null,o={gatewayUrl:t,client:n,connected:r,voiceWake:i};this.connection=o,this.update(a?{...a,phase:`pending`,error:N(`configPage.deviceTalk.triggerWordsDisconnected`)}:{kind:`unavailable`}),n&&r&&i&&!a&&this.listeners.size>0&&this.loadVoiceWake(o)}async loadVoiceWake(e){if(!(!e.client||!e.voiceWake)){this.update({kind:`loading`});try{let t=await e.client.request(`voicewake.get`,{});this.connection===e&&this.update({kind:`ready`,text:t.triggers.join(`
`),phase:`saved`,error:null})}catch(t){this.connection===e&&this.update({kind:`error`,error:N(`configPage.deviceTalk.triggerWordsLoadError`,{error:String(t)})})}}}edit(e){if(this.state.kind!==`ready`)return;this.update({kind:`ready`,text:e,phase:`pending`,error:null});let t=this.voiceWakeWrite;t?.connection===this.connection&&t.next!==null&&(t.next=e===t.text?null:e),clearTimeout(this.voiceWakeTimer),this.voiceWakeTimer=setTimeout(()=>{this.voiceWakeTimer=void 0,this.saveVoiceWake()},400)}async saveVoiceWake(){let e=this.connection,t=this.state;if(t.kind!==`ready`||t.phase===`saved`)return;if(!e?.client||!e.connected||!e.voiceWake){this.update({...t,phase:`pending`,error:N(`configPage.deviceTalk.triggerWordsDisconnected`)});return}if(this.voiceWakeWrite?.connection===e){this.voiceWakeWrite.next=t.text===this.voiceWakeWrite.text?null:t.text;return}let n={connection:e,text:t.text,next:t.text};for(this.voiceWakeWrite=n;n.next!==null;){n.text=n.next,n.next=null;let t=this.state;this.connection===e&&t.kind===`ready`&&t.text===n.text&&this.update({...t,phase:`saving`,error:null});try{let t=await e.client.request(`voicewake.set`,{triggers:n.text.split(`
`)});this.connection===e&&this.state.kind===`ready`&&this.state.text===n.text&&this.update({kind:`ready`,text:t.triggers.join(`
`),phase:`saved`,error:null})}catch(t){this.connection===e&&this.state.kind===`ready`&&this.update({...this.state,phase:`pending`,error:N(`configPage.deviceTalk.triggerWordsError`,{error:String(t)})})}}this.voiceWakeWrite===n&&(this.voiceWakeWrite=null)}},Z=class extends m{constructor(...e){super(...e),this.configObject={},this.mutationDisabled=!1,this.buildEditor=()=>E``,this.catalog={kind:`unavailable`},this.modelDefaultResetIntent=null,this.connection=null,this.catalogRequestId=0,this.subscriptions=new h(this).watch(()=>this.context?.gateway?go(this.context.gateway):void 0,(e,t)=>e.subscribe(t)).watch(()=>this.context?.nativeDeviceSettings,(e,t)=>e.subscribe(t)).watch(()=>this.context?.gateway,(e,t)=>e.subscribe(t),e=>this.syncCatalog(e.connection.gatewayUrl,e.snapshot.client,e.snapshot.phase===`connected`,Wt(e.snapshot,`voicewake.get`)===!0&&Wt(e.snapshot,`voicewake.set`)===!0)).watch(()=>this.context?.runtimeConfig,(e,t)=>e.subscribe(t),e=>this.refreshCatalogOnConfigChange(e.state)),this.refreshOnFocus=()=>{let e=this.connection;e?.client&&e.connected&&this.loadCatalog(e.client,e)}}connectedCallback(){super.connectedCallback(),window.addEventListener(`focus`,this.refreshOnFocus)}disconnectedCallback(){window.removeEventListener(`focus`,this.refreshOnFocus),go(this.context.gateway).flush(),this.subscriptions.clear(),this.connection=null,this.catalog={kind:`unavailable`},super.disconnectedCallback()}syncCatalog(e,t,n,r){if(this.modelDefaultResetIntent&&this.modelDefaultResetIntent.gatewayUrl!==e&&(this.modelDefaultResetIntent=null),this.connection?.gatewayUrl===e&&this.connection.client===t&&this.connection.connected===n&&this.connection.voiceWake===r)return;let i={gatewayUrl:e,client:t,connected:n,voiceWake:r};if(this.connection=i,!t||!n){this.catalog={kind:`unavailable`};return}this.catalog={kind:`loading`},this.loadCatalog(t,i)}async loadCatalog(e,t){let n=++this.catalogRequestId;try{let r=await e.request(`talk.catalog`,{});this.applyCatalog(t,n,{kind:`ready`,ready:r.realtime.ready===!0,activeProvider:r.realtime.activeProvider??null,providers:r.realtime.providers.map(mo)})&&this.acknowledgeModelDefaultReset(t)}catch{this.applyCatalog(t,n,{kind:`unavailable`})}}applyCatalog(e,t,n){return!this.isConnected||this.connection!==e||this.catalogRequestId!==t?!1:(this.catalog=n,!0)}acknowledgeModelDefaultReset(e){let t=this.modelDefaultResetIntent,n=this.lastCatalogConfigRevision;n!=null&&t?.gatewayUrl===e.gatewayUrl&&t.configRevision!==n&&(this.modelDefaultResetIntent=null)}refreshCatalogOnConfigChange(e){let t=po(e.configSnapshot);if(this.lastCatalogConfigRevision===void 0){this.lastCatalogConfigRevision=t;return}if(t===null||t===this.lastCatalogConfigRevision)return;this.lastCatalogConfigRevision=t;let n=this.connection;n?.client&&n.connected&&this.loadCatalog(n.client,n)}changeModel(e){if(this.mutationDisabled)return;let t=this.context.runtimeConfig;if(e!==null){this.modelDefaultResetIntent=null,t.patchForm([`talk`,`realtime`,`model`],e);let n=this.liveSelection(),r=n.transport,i=to(this.catalog,n),a=r!==null&&(ho(e,r)||Ga(i?.transports,r));Wa(e)&&a?t.removeFormValue([`talk`,`realtime`,`transport`]):i?.id===`openai`&&Wa(e)&&r===`gateway-relay`&&n.consultRouting===`force-agent-consult`&&t.removeFormValue([`talk`,`realtime`,`consultRouting`]);return}this.modelDefaultResetIntent={gatewayUrl:this.context.gateway.connection.gatewayUrl,configRevision:po(t.state.configSnapshot)},t.removeFormValue([`talk`,`realtime`,`model`]);for(let e of this.selectedProviderConfigKeys())t.removeFormValue([`talk`,`realtime`,`providers`,e,`model`])}changeVoice(e){if(this.mutationDisabled)return;let t=this.context.runtimeConfig;if(e!==null){t.patchForm([`talk`,`realtime`,`speakerVoice`],e);return}t.removeFormValue([`talk`,`realtime`,`speakerVoice`]),t.removeFormValue([`talk`,`realtime`,`speakerVoiceId`]);for(let e of this.selectedProviderConfigKeys())t.removeFormValue([`talk`,`realtime`,`providers`,e,`speakerVoice`]),t.removeFormValue([`talk`,`realtime`,`providers`,e,`voice`])}selectedProviderConfigKeys(){let e=this.liveSelection();return no(e,to(this.catalog,e))}liveSelection(){let e=this.context.runtimeConfig.state.configForm;return Ua(e&&typeof e==`object`?e:this.configObject)}changeProvider(e){if(this.mutationDisabled)return;this.modelDefaultResetIntent=null;let t=this.context.runtimeConfig,n=this.liveSelection();for(let e of[`model`,`speakerVoice`,`speakerVoiceId`])t.removeFormValue([`talk`,`realtime`,e]);if(e===null){t.removeFormValue([`talk`,`realtime`,`provider`]);return}let r=n.transport,i=this.catalog.kind===`ready`?this.catalog.providers.find(t=>t.id===e):void 0,a=ro({...n,provider:e,model:null,speakerVoice:null},i).model??i?.defaultModel,o=r!==null&&(ho(a??null,r)||Ga(i?.transports,r));o&&t.removeFormValue([`talk`,`realtime`,`transport`]),t.patchForm([`talk`,`realtime`,`provider`],e);let s=i!==void 0&&i.transports.length>0&&!i.transports.some(e=>vo.has(e)),c=o?null:r;s&&r!==`gateway-relay`&&(t.patchForm([`talk`,`realtime`,`transport`],`gateway-relay`),c=`gateway-relay`),i?.id===`openai`&&Wa(a??null)&&c===`gateway-relay`&&n.consultRouting===`force-agent-consult`&&t.removeFormValue([`talk`,`realtime`,`consultRouting`])}render(){let e=this.context.runtimeConfig.state,t=go(this.context.gateway);return lo({nativeDeviceSettings:this.context.nativeDeviceSettings,voiceWake:{state:t.state,onInput:e=>t.edit(e),onRetry:()=>t.retry()},selection:Ua(this.configObject),catalog:this.catalog,modelDefaultPending:this.modelDefaultResetIntent!==null,configBusy:this.mutationDisabled||e.configLoading||e.configSaving||e.configApplying,onProviderChange:e=>this.changeProvider(e),onModelChange:e=>this.changeModel(e),onVoiceChange:e=>this.changeVoice(e),editor:this.buildEditor()})}},r([a({context:ut,subscribe:!0})],Z.prototype,`context`,void 0),r([k({attribute:!1})],Z.prototype,`configObject`,void 0),r([k({type:Boolean})],Z.prototype,`mutationDisabled`,void 0),r([k({attribute:!1})],Z.prototype,`buildEditor`,void 0),r([D()],Z.prototype,`catalog`,void 0),r([D()],Z.prototype,`modelDefaultResetIntent`,void 0),customElements.get(`openclaw-talk-settings`)||customElements.define(`openclaw-talk-settings`,Z)})))()}function So(e){let t=e?.snapshot,n=t?.updates;return!e||!t||!n?O:z({title:N(kt(t))},[L({title:N(`updates.device.version`),control:R(N(`updates.device.versionBuild`,{version:t.device.appVersion,build:t.device.appBuild}))}),n.available?E`${V({title:N(`updates.device.automatic`),checked:n.automatic,onChange:t=>e.set(`updates.automatic`,t)})}${L({title:N(`updates.device.check`),control:E`<button
            class="btn btn--sm"
            type="button"
            @click=${()=>e.checkForUpdates()}
          >
            ${N(`updates.device.check`)}
          </button>`})}`:L({title:N(`updates.device.unavailable`),description:n.unavailableReason})])}function Co(e){let t=e.run;if(!t&&!e.statusBanner)return O;let n=!t||t.status===`failed`||t.status===`rolled-back`||t.status===`skipped`,r=e.canUpdate&&!e.updateBusy;return z({title:N(`updates.page.latestAttempt`)},[t?E`<div class="settings-row settings-row--stacked">
          <openclaw-update-run-view
            .run=${t}
            .connected=${e.connected}
          ></openclaw-update-run-view>
        </div>`:O,...n?[L({title:N(`updates.page.recoveryActions`),control:E`<div class="updates-status-control">
              <button
                class="btn btn--sm"
                type="button"
                title=${e.canCheckStatus?``:N(`updates.adminRequired`)}
                ?disabled=${!e.canCheckStatus||e.updateBusy}
                @click=${()=>void e.onCheckStatus()}
              >
                ${N(`updates.page.checkStatus`)}
              </button>
              <button
                class="btn btn--sm primary"
                type="button"
                title=${r?``:N(`updates.adminRequired`)}
                ?disabled=${!r}
                @click=${e.onUpdateNow}
              >
                ${N(`updates.page.retryUpdate`)}
              </button>
              ${e.reportableUpdateFailureId?E`<button
                      class="btn btn--sm"
                      type="button"
                      title=${e.canReport?``:N(`updates.page.reportOwnerRequired`)}
                      ?disabled=${!e.canReport||e.updateBusy||e.updateFailureReportBusy}
                      @click=${()=>void e.onReportFailure(e.reportableUpdateFailureId)}
                    >
                      ${e.updateFailureReportBusy?N(`updates.page.reportSubmitting`):N(`updates.page.reportFailure`)}
                    </button>`:O}
            </div>`}),L({title:N(`updates.page.cliFallback`),description:N(`updates.triage.hostHint`),stacked:!0,control:E`<details class="updates-attempt-details">
              <summary>${N(`updates.page.showCliFallback`)}</summary>
              <pre><code>openclaw triage</code></pre>
            </details>`})]:[],e.updateFailureReportNotice?wo(e.updateFailureReportNotice):O])}function wo(e){let t=e.result,n=t.status===`created`?N(`updates.page.reportCreated`):t.status===`fallback`?N(`updates.page.reportFallback`):t.status===`pending`?N(`updates.page.reportPending`):t.status===`retryable`?N(`updates.page.reportRetryable`):t.status===`duplicate`?N(`updates.page.reportDuplicate`):N(`updates.page.reportError`),r=`url`in t&&t.url?t.url:null,i=`fallbackUrl`in t&&t.fallbackUrl?t.fallbackUrl:null;return L({title:N(`updates.page.reportResult`),stacked:!0,control:E`<div class="updates-attempt-details" role="status">
      <div>${n}</div>
      ${r?E`<div>
              <a href=${r} target="_blank" rel="noreferrer">${N(`updates.page.openIssue`)}</a>
            </div>`:O}
      ${i?E`<div>
              <a href=${i} target="_blank" rel="noreferrer"
                >${N(`updates.page.openPrefilledIssue`)}</a
              >
            </div>`:O}
      ${`message`in t&&t.message?E`<div>${t.message}</div>`:O}
    </div>`})}function To(e,t){let n=l(e.update),r=l(n?.auto),i=n?.channel,a=i===`extended-stable`;return{channel:i===`stable`||i===`beta`||i===`dev`||a?i:t?.channel===`beta`||t?.channel===`dev`?t.channel:`stable`,autoEnabled:typeof r?.enabled==`boolean`?r.enabled:t?.autoEnabled??!1,extendedStableAuthored:a}}function Eo(e){return i(e)??null}function Do(e,t=Date.now()){let n=_e(Math.max(0,t-e));return R(E`<time datetime=${new Date(e).toISOString()} title=${n}
      >${se(e,{dateStyle:`medium`,timeStyle:`short`})}
      <span class="muted">· ${n}</span></time
    >`)}function Oo(e){let t=e.schedule?.install?.kind,n=e.schedule?.install?.git,r=Eo(e.controlUiBuiltAt),i=n?.commitAtMs??Eo(e.controlUiCommitAt);return z({title:N(`updates.page.buildTitle`)},[L({title:N(`updates.page.gatewayVersion`),control:R(e.gatewayVersion?E`<code dir="ltr" title=${e.gatewayVersion}>${e.gatewayVersion}</code>`:N(`common.na`),{mono:!0})}),L({title:N(`updates.page.controlUiCommit`),control:R(e.controlUiCommit?E`<code dir="ltr" title=${e.controlUiCommit}
              >${e.controlUiCommit.slice(0,12)}</code
            >`:N(`common.na`),{mono:!0})}),r===null?O:L({title:N(`updates.page.builtAt`),control:Do(r,e.nowMs)}),t===`git`?L({title:N(`updates.page.installedAt`),control:n?.installedAtMs===void 0?R(N(`updates.page.installedAtUnknown`)):Do(n.installedAtMs,e.nowMs)}):O,i===null?O:L({title:N(`updates.page.lastCommitAt`),control:Do(i,e.nowMs)}),t?L({title:N(`updates.page.installKind`),control:R(N(`updates.installKind.${t}`))}):O])}function ko(e){let t=e.schedule?.campaign,n=Pe(e.schedule,e.nowMs),r=Ot(e.schedule,e.updateAvailable),i=`muted`,a;if(n)i=t?.state===`waiting-for-idle`?`warn`:`accent`,a=n;else if(e.statusBanner)i=e.statusBanner.tone===`danger`?`danger`:e.statusBanner.tone===`warn`?`warn`:`accent`,a=e.statusBanner.text;else if(e.schedule?.install?.kind===`git`){let t=e.schedule.install.git;if(!t)a=N(`updates.page.statusUnavailable`);else if(t.status===`current`)i=`ok`,a=N(`updates.page.upToDate`);else if(t.status===`behind`){i=`accent`;let e=N(t.commitsBehind===1?`updates.target.commitBehind`:`updates.target.commitsBehind`,{count:String(t.commitsBehind)});a=N(`updates.page.available`,{target:e})}else t.status===`ahead`?a=N(t.commitsAhead===1?`updates.page.gitCommitAhead`:`updates.page.gitCommitsAhead`,{count:String(t.commitsAhead)}):t.status===`diverged`?(i=`warn`,a=N(`updates.page.gitDiverged`,{ahead:String(t.commitsAhead),behind:String(t.commitsBehind)})):(i=`warn`,a=t.reason===`fetch-failed`?N(`updates.page.gitFetchFailed`):t.reason===`no-upstream`?N(`updates.page.gitNoUpstream`):N(`updates.page.gitComparisonFailed`))}else r?(i=`accent`,a=N(`updates.page.available`,{target:r})):e.schedule?.install?.kind===`package`?(i=`ok`,a=N(`updates.page.upToDate`)):a=N(`updates.page.statusUnavailable`);let o=t?.state===`waiting-for-idle`||t?.state===`countdown`;return E`<span role=${o?`timer`:O} aria-live=${o?`off`:O}
    >${U({kind:i,label:a,dot:!1})}</span
  >`}function Ao(e){let t=e.updateAvailable,n=e.schedule?.target?.kind===`git`||!!t?.currentSha,r=e.schedule?.install?.git;if(r&&r.status!==`behind`&&r.status!==`diverged`)return[];let i=r?.status===`behind`||r?.status===`diverged`?r.commitsBehind:void 0,a=i===void 0||i===t?.commitsBehind;return n&&a?t?.commits??[]:[]}function jo(e){let t=Ao(e);return t.length===0?O:L({title:N(`updates.page.commits`),stacked:!0,control:E`
      <div class="updates-commit-list" role="list" aria-label=${N(`updates.page.commits`)}>
        ${t.map(e=>E`
            <div class="updates-commit-list__row" role="listitem">
              <code title=${e.sha}>${e.sha}</code>
              <span>${e.subject}</span>
            </div>
          `)}
      </div>
    `})}function Mo(e){let t=To(e.configObject,e.schedule),n=[{value:`stable`,label:N(`updates.channel.stable`)},{value:`beta`,label:N(`updates.channel.beta`)},{value:`dev`,label:N(`updates.channel.dev`)}];t.extendedStableAuthored&&n.push({value:`extended-stable`,label:N(`updates.channel.extendedStable`)});let r=t.channel!==`extended-stable`,i=l(e.configObject.update)?.checkOnStart===!1,a=t.channel===`dev`&&e.schedule?.install?.kind===`package`,o=e.schedule?.campaign,s=o?.holdUntilMs!==void 0&&o.holdUntilMs>(e.nowMs??Date.now()),c=!!(o&&o.state!==`applying`&&e.canUpdate&&e.canHoldUpdate&&!s&&e.heldUpdateCampaignId!==o.id),u=[L({title:N(`updates.page.channel`),description:N(`updates.page.channelDescription`),stacked:!0,control:sn({value:t.channel,options:n,ariaLabel:N(`updates.page.channel`),disabled:e.configBusy,onChange:e.onChannelChange})}),V({title:N(`updates.page.checkForUpdates`),description:N(`updates.page.checkForUpdatesDescription`),checked:!i,disabled:e.configBusy,onChange:e.onUpdateChecksChange}),V({title:N(`updates.page.automaticUpdates`),description:N(r?a?`updates.page.devPackageAutomaticHint`:i?`updates.page.checksDisabledAutomaticHint`:`updates.page.automaticUpdatesDescription`:`updates.page.extendedStableAutomaticHint`),checked:r&&t.autoEnabled,disabled:e.configBusy||i||!r||a,onChange:e.onAutomaticUpdatesChange})],d=e.canAdmin?``:N(`updates.adminRequired`);return E`
    <div id="config-section-update">
      ${rn([So(e.nativeDeviceSettings),e.canAdmin?O:E`<div class="callout warning" role="note">${N(`updates.adminRequired`)}</div>`,Oo(e),Co(e),z({title:N(`updates.page.policyTitle`)},u),z({title:N(`updates.page.statusTitle`)},[L({title:N(`updates.page.scheduleStatus`),control:E`
              <div class="updates-status-control">
                ${ko(e)}
                ${c?E`
                        <button
                          type="button"
                          class="btn btn--sm"
                          ?disabled=${e.updateBusy}
                          @click=${()=>void e.onHoldUpdate()}
                        >
                          ${N(`updates.holdOneHour`)}
                        </button>
                      `:O}
              </div>
            `}),jo(e),L({title:N(`updates.page.updateNow`),description:N(`updates.page.updateNowDescription`),control:E`
              <button
                type="button"
                class="btn primary"
                title=${d}
                ?disabled=${e.updateBusy||!e.canUpdate}
                @click=${e.onUpdateNow}
              >
                ${M.download}
                ${e.updateBusy?N(`chat.updating`):N(`updates.page.updateNow`)}
              </button>
            `})]),E`<p class="settings-page__hint">
          <a href="https://docs.openclaw.ai/install/update-troubleshooting" target="_blank"
            >${N(`updates.page.troubleshoot`)}</a
          >
        </p>`])}
    </div>
  `}function No(){return(No=e((()=>{c(),T(),Yn(),We(),Ue(),P(),H(),j(),Zn(),ve(),Xn()})))()}function Po(e){return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`}function Fo(e,t){let n=/^(\d{2}):(\d{2})$/u.exec(e);return n?Number(n[1])*60+Number(n[2]):t}function Io(e){return e.currentTarget}function Lo(e){return e===`identified`||e===`detailed`?e:`private`}function Ro(){return[{value:`private`,label:N(`configView.notifications.private`)},{value:`identified`,label:N(`configView.notifications.namesOnly`)},{value:`detailed`,label:N(`configView.notifications.detailed`)}]}function zo(e){return[{value:`inherit`,label:e},{value:`on`,label:N(`configForm.enumOn`)},{value:`off`,label:N(`configForm.enumOff`)}]}function Bo(e,t){return E`
    ${L({title:N(`configView.notifications.quietHoursWindow`),control:E`
        <input
          type="time"
          class="settings-input"
          aria-label=${N(`configView.notifications.quietHoursStart`)}
          .value=${Po(e.startMinute)}
          @change=${n=>t({...e,startMinute:Fo(Io(n).value,e.startMinute)})}
        />
        <span class="settings-row__value" aria-hidden="true">–</span>
        <input
          type="time"
          class="settings-input"
          aria-label=${N(`configView.notifications.quietHoursEnd`)}
          .value=${Po(e.endMinute)}
          @change=${n=>t({...e,endMinute:Fo(Io(n).value,e.endMinute)})}
        />
      `})}
    ${L({title:N(`configView.notifications.timeZone`),control:E`<input
        type="text"
        class="settings-input"
        aria-label=${N(`configView.notifications.timeZone`)}
        .value=${e.timeZone}
        @change=${n=>t({...e,timeZone:Io(n).value})}
      />`})}
  `}function Vo(e,t){return L({title:N(`configView.notifications.onlyAgents`),control:E`<input
      type="text"
      class="settings-input"
      aria-label=${N(`configView.notifications.onlyAgents`)}
      .value=${e.join(`, `)}
      @change=${e=>t(Io(e).value.split(`,`).map(e=>e.trim()).filter(Boolean))}
    />`})}function Ho(e,t){let n=n=>t({...e,...n});return E`
    <section class="settings-section">
      <div class="settings-section__header">
        <h2 class="settings-section__heading">${N(`configView.notifications.accountDefaults`)}</h2>
      </div>
      <div class="settings-group">
        ${Ko.map(([t,r])=>V({title:r(),checked:e.categories[t]===!0,onChange:r=>n({categories:{...e.categories,[t]:r}})}))}
        ${X({title:N(`configView.notifications.lockScreenDetail`),description:N(`configView.notifications.lockScreenDetailHint`),value:e.detailLevel,options:Ro(),onChange:e=>n({detailLevel:Lo(e)})})}
        ${V({title:N(`configView.notifications.quietHours`),checked:e.quietHours.enabled,onChange:t=>n({quietHours:{...e.quietHours,enabled:t}})})}
        ${e.quietHours.enabled?Bo(e.quietHours,e=>n({quietHours:e})):O}
        ${Vo(e.agentIds,e=>n({agentIds:e}))}
      </div>
    </section>
  `}function Uo(e,t){let n=n=>t({...e,...n}),r=e.quietHours;return E`
    <section class="settings-section">
      <div class="settings-section__header">
        <h2 class="settings-section__heading">${N(`configView.notifications.installedApp`)}</h2>
      </div>
      <div class="settings-group">
        ${V({title:N(`configView.notifications.deliverDevice`),checked:e.enabled,onChange:e=>n({enabled:e})})}
        ${L({title:N(`configView.notifications.notificationLabel`),control:E`<input
            type="text"
            class="settings-input"
            aria-label=${N(`configView.notifications.notificationLabel`)}
            maxlength="80"
            .value=${e.label}
            @change=${e=>n({label:Io(e).value})}
          />`})}
        ${X({title:N(`configView.notifications.lockScreenDetail`),value:e.detailLevel??`inherit`,options:[{value:`inherit`,label:N(`configView.notifications.inheritDetail`)},...Ro()],onChange:e=>n({detailLevel:e===`inherit`?void 0:Lo(e)})})}
        ${X({title:N(`configView.notifications.quietHours`),value:r===void 0?`inherit`:r.enabled?`on`:`off`,options:zo(N(`configView.notifications.inheritQuietHours`)),onChange:e=>n({quietHours:e===`inherit`?void 0:{enabled:e===`on`,startMinute:r?.startMinute??1320,endMinute:r?.endMinute??420,timeZone:r?.timeZone??`UTC`}})})}
        ${r?.enabled?Bo(r,e=>n({quietHours:e})):O}
        ${X({title:N(`configView.notifications.onlyAgents`),value:e.agentIds===void 0?`inherit`:`override`,options:[{value:`inherit`,label:N(`configView.notifications.inherit`)},{value:`override`,label:N(`configView.notifications.overrideAgents`)}],onChange:e=>n({agentIds:e===`inherit`?void 0:[]})})}
        ${e.agentIds===void 0?O:Vo(e.agentIds,e=>n({agentIds:e}))}
        ${Ko.map(([t,r])=>X({title:r(),value:e.categories?.[t]===void 0?`inherit`:e.categories[t]?`on`:`off`,options:zo(N(`configView.notifications.inherit`)),onChange:r=>{let i={...e.categories};r===`inherit`?delete i[t]:i[t]=r===`on`,n({categories:i})}}))}
      </div>
    </section>
  `}function Wo(e){switch(e){case`granted`:return{kind:`ok`,label:N(`configView.notifications.granted`)};case`denied`:return{kind:`danger`,label:N(`configView.notifications.denied`)};case`notDetermined`:return{kind:`accent`,label:N(`configView.notifications.notRequested`)};default:return{kind:`muted`,label:N(`configView.notifications.checking`)}}}function Go(e){let t=e.nativeNotifications;if(t){let n=Wo(t.permission),r=t.test?.state===`pending`,i=t.permission===`notDetermined`?E`
            <button
              class="btn primary"
              @click=${()=>e.onNativeNotificationsRequestPermission?.()}
            >
              ${N(`configView.notifications.enable`)}
            </button>
          `:t.permission===`denied`?E`
              <button class="btn" @click=${()=>e.onNativeNotificationsRequestPermission?.()}>
                ${N(`configView.notifications.openSystemSettings`)}
              </button>
            `:t.permission===`granted`?E`
                <button
                  class="btn primary"
                  ?disabled=${r}
                  @click=${()=>e.onNativeNotificationsSendTest?.()}
                >
                  ${r?M.loader:M.send}
                  ${N(r?`configView.notifications.sendingTest`:`configView.notifications.sendTest`)}
                </button>
              `:O;return E`
      <div class="settings-page">
        <section class="settings-section" id=${ar.notifications}>
          <div class="settings-section__header">
            <h2 class="settings-section__heading">${N(`configView.notifications.nativeTitle`)}</h2>
            <div class="settings-section__actions">${U(n)}</div>
          </div>
          <div class="settings-group">
            ${L({title:N(`configView.notifications.permission`),control:R(n.label)})}
            ${i===O?O:E`
                    <div class="settings-row">
                      <div class="settings-row__control">${i}</div>
                    </div>
                  `}
            ${t.permission===`denied`?L({title:N(`configView.notifications.blocked`),description:N(`configView.notifications.nativeBlockedHint`),control:U({kind:`danger`,label:N(`configView.notifications.denied`)})}):O}
            ${t.test?L({title:N(`configView.notifications.testOutcome`),description:t.test.state===`error`?t.test.message:void 0,control:U(t.test.state===`pending`?{kind:`accent`,label:N(`configView.notifications.sendingTest`)}:t.test.state===`sent`?{kind:`ok`,label:N(`configView.notifications.testQueued`)}:{kind:`danger`,label:N(`configView.notifications.testFailed`)})}):O}
          </div>
        </section>
      </div>
    `}let n=e.webPush;if(!n)return E`
      <div class="settings-page">
        <section class="settings-section" id=${ar.notifications}>
          <div class="settings-section__header">
            <h2 class="settings-section__heading">${N(`configView.notifications.title`)}</h2>
            <div class="settings-section__actions">
              ${U({kind:`muted`,label:N(`configView.notifications.unavailable`)})}
            </div>
          </div>
          <div class="settings-group">
            <div class="settings-row">
              <div class="settings-row__text">
                <span class="settings-row__desc">
                  ${N(`configView.notifications.unavailableHint`)}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;let r=n.permission===`granted`?N(`configView.notifications.granted`):n.permission===`denied`?N(`configView.notifications.denied`):n.permission==="default"?N(`configView.notifications.notRequested`):N(`configView.notifications.unsupported`),i=n.subscription===`registered`,a=i||n.subscription===`vapid-mismatch`,o=i?N(`configView.notifications.subscribed`):n.subscription===`unknown`?N(`configView.notifications.checking`):N(`configView.notifications.notSubscribed`),s=n.supported?n.permission===`denied`?N(`configView.notifications.blocked`):i?N(`configView.notifications.subscribed`):n.subscription===`vapid-mismatch`?N(`configView.notifications.unavailable`):n.subscription===`unknown`?N(`configView.notifications.checking`):N(`configView.notifications.ready`):N(`configView.notifications.unsupported`),c=n.supported?n.permission===`denied`||n.subscription===`vapid-mismatch`?`danger`:i?`ok`:`accent`:`muted`,l=n.supported&&n.permission!==`denied`?a?E`
            <button
              class="btn"
              ?disabled=${n.loading||!e.connected}
              @click=${()=>e.onWebPushUnsubscribe?.()}
            >
              ${M.x} ${N(`configView.notifications.unsubscribe`)}
            </button>
            ${i?E`<button
                    class="btn primary"
                    ?disabled=${n.loading||!e.connected}
                    @click=${()=>e.onWebPushTest?.()}
                  >
                    ${M.send} ${N(`configView.notifications.sendTest`)}
                  </button>`:O}
          `:E`
            <button
              class="btn primary"
              ?disabled=${n.loading||!e.connected}
              @click=${()=>e.onWebPushSubscribe?.()}
            >
              ${n.loading?M.loader:O}
              ${n.loading?N(`configView.notifications.subscribing`):N(`configView.notifications.enable`)}
            </button>
          `:O;return E`
    <div class="settings-page">
      <section class="settings-section" id=${ar.notifications}>
        <div class="settings-section__header">
          <h2 class="settings-section__heading">${N(`configView.notifications.title`)}</h2>
          <div class="settings-section__actions">
            ${U({kind:c,label:s})}
          </div>
        </div>
        ${n.permission===`install-required`?E`<p class="settings-section__desc">
                ${N(`configView.notifications.iosInstallRequired`)}
              </p>`:O}
        <div class="settings-group">
          ${L({title:N(`configView.notifications.browserSupport`),control:R(n.supported?N(`configView.notifications.available`):N(`configView.notifications.notSupported`))})}
          ${L({title:N(`configView.notifications.permission`),control:R(r)})}
          ${L({title:N(`configView.notifications.status`),control:U({kind:i?`ok`:`muted`,label:o})})}
          ${l===O?O:E`
                  <div class="settings-row">
                    <div class="settings-row__control">${l}</div>
                  </div>
                `}
          ${n.permission===`denied`?L({title:N(`configView.notifications.blocked`),description:N(`configView.notifications.blockedHint`),control:U({kind:`danger`,label:N(`configView.notifications.denied`)})}):O}
          ${n.error?E`
                  <div class="settings-row">
                    <div class="settings-row__text">
                      <span class="cfg-field__error">${ne(n.error)}</span>
                    </div>
                  </div>
                `:O}
        </div>
      </section>
      ${i&&n.preferences?E`<div class="settings-stack" ?inert=${n.loading}>
              ${n.preferences.durableIdentity?Ho(n.preferences.user,t=>e.onWebPushSetUserPreferences?.(t)):O}
              ${Uo(n.preferences.device,t=>e.onWebPushSetDevicePreferences?.(t))}
            </div>`:O}
    </div>
  `}var Ko;function qo(){return(qo=e((()=>{T(),P(),H(),j(),Zn(),y(),qa(),ir(),Xn(),Ko=[[`approvalRequested`,()=>N(`configView.notifications.approvalRequested`)],[`agentFinished`,()=>N(`configView.notifications.agentFinished`)],[`agentQuestion`,()=>N(`configView.notifications.agentQuestion`)],[`humanMentioned`,()=>N(`configView.notifications.humanMentioned`)],[`scheduledTaskFailed`,()=>N(`configView.notifications.scheduledTaskFailed`)],[`backgroundTaskFailed`,()=>N(`configView.notifications.backgroundTaskFailed`)]]})))()}function Jo(e,t,n){let r=u(t.formValue?.wizard)?t.formValue.wizard:{};return rn(E`
    <details
      class="settings-section config-advanced-disclosure"
      id="config-section-wizard"
      ?open=${t.forceAdvancedSection===`wizard`}
    >
      <summary class="settings-section__heading config-advanced-disclosure__summary">
        ${N(`configForm.sections.wizard.label`)}
      </summary>
      <p class="settings-section__desc">${N(`configForm.sections.wizard.description`)}</p>
      ${wn(Object.entries(yr).map(([i,a])=>{let o=e.properties?.[i];return o?Nr({schema:{...o,default:a},value:r[i],path:[`wizard`,i],hints:t.uiHints,unsupported:new Set,disabled:n,onPatch:t.onFormPatch,onRemove:t.onFormRemove}):O}))}
      ${wn(mr.flatMap(n=>{let i=r[n];if(typeof i!=`string`||!i)return[];let a=v([`wizard`,n],t.uiHints);return[L({title:a?.label??e.properties?.[n]?.title??ie(n),description:i})]}))}
    </details>
  `)}function Yo(){return(Yo=e((()=>{T(),Br(),Fr(),H(),j(),_r()})))()}function Xo(e){let t=e.replace(/-([a-zA-Z])/g,(e,t)=>t.toUpperCase());return N(`languages.${t}`)}function Zo(e,t,n){let r=e??`system`,i=`${N(`common.system`)} (${Xo(t)})`;return E`
    <wa-select
      class="settings-select"
      .value=${r}
      @change=${e=>{let t=e.currentTarget.value;n(t===`system`?void 0:t)}}
    >
      <span slot="label" class="settings-control__sr-label">${N(`quickSettings.language`)}</span>
      <wa-option value="system" .label=${i} .selected=${r===`system`}>
        ${i}
      </wa-option>
      ${It.map(e=>{let t=Xo(e);return E`
          <wa-option value=${e} .label=${t} .selected=${e===r}>
            ${t}
          </wa-option>
        `})}
    </wa-select>
  `}function Qo(){return(Qo=e((()=>{T(),$n(),j()})))()}function $o(e){return N(e===`profile`?`configView.profileSyncedHint`:e===`device-local`?`quickSettings.personal.browserOnly`:e===`pending`?`configView.syncPendingHint`:`configView.syncedHint`)}function es(e){let t=I(e.localeResetValue?Xo(e.localeResetValue):N(`common.system`),e.localeOverridden),n=$o(e.localeProvenance);return E`
    <section id=${x.language} class="settings-section">
      <div class="settings-section__header">
        <h2 class="settings-section__heading">${N(`quickSettings.language`)}</h2>
      </div>
      <div class="settings-group">
        ${L({title:N(`quickSettings.language`),description:E`${t} ${n}`,control:Zo(e.localeOverride,e.systemLocale,e.onLocaleChange)})}
      </div>
    </section>
  `}function ts(e){let t=e.state;if(!t||!e.onSelect)return O;let n=t.selectedDeviceId.trim(),r=t.devices.some(e=>e.deviceId===n),i=[{label:e.systemDefaultLabel,value:``},...t.devices.map(e=>({label:e.label,value:e.deviceId})),...n&&!r?[{label:e.fallbackLabel(t.devices.length+1),value:n}]:[]],a=!1,o=()=>{a||!t.permissionRequired||(a=!0,e.onRefresh?.())},s=e=>{e.button===0&&o()},c=e=>{[`Enter`,` `,`ArrowDown`,`ArrowUp`,`F4`].includes(e.key)&&o()},l=t.error?E`<span role="alert">${t.error}</span>`:!t.loading&&t.devices.length===0?e.emptyLabel:void 0;return L({title:e.title,description:E`${l?E`${l}<br />`:O}${N(`quickSettings.personal.browserOnly`)}`,control:E`
      <select
        class="settings-select settings-select--media-device"
        data-settings-microphone=${e.dataAttribute===`microphone`?``:O}
        data-settings-camera=${e.dataAttribute===`camera`?``:O}
        aria-label=${e.title}
        .value=${n}
        @pointerdown=${s}
        @keydown=${c}
        @change=${t=>e.onSelect?.(t.currentTarget.value)}
      >
        ${i.map(e=>E`
            <option value=${e.value} ?selected=${e.value===n}>
              ${e.label}
            </option>
          `)}
      </select>
    `})}function ns(e){return ts({state:e.microphone,title:N(`chat.composer.microphoneInput`),systemDefaultLabel:N(`chat.composer.systemDefaultMicrophone`),emptyLabel:N(`chat.composer.noMicrophones`),fallbackLabel:e=>N(`chat.composer.microphoneFallback`,{number:String(e)}),dataAttribute:`microphone`,onRefresh:e.onMicrophoneRefresh,onSelect:e.onMicrophoneSelect})}function rs(e){return ts({state:e.camera,title:N(`chat.composer.cameraInput`),systemDefaultLabel:N(`chat.composer.systemDefaultCamera`),emptyLabel:N(`chat.composer.noCameras`),fallbackLabel:e=>N(`chat.composer.cameraFallback`,{number:String(e)}),dataAttribute:`camera`,onRefresh:e.onCameraRefresh,onSelect:e.onCameraSelect})}function is(e,t){let n=e.chatFollowUpMode??`server`,r=e.serverQueueMode??N(`chat.followUpModeLoading`),i=e.chatFollowUpMode?N(`chat.followUpModeOverriding`,{mode:r}):N(`chat.followUpModeUsingServer`,{mode:r}),a=I(A.chatMessageMaxWidth,e.chatMessageMaxWidth!==void 0),o=I(e.chatSendShortcutResetValue===`modifier-enter`?N(`chat.sendShortcutModifierEnter`):N(`chat.sendShortcutEnter`),e.chatSendShortcutOverridden),s=$o(e.chatSendShortcutProvenance),c=$o(e.chatFollowUpModeProvenance),l=I(N(`chat.catalogOpenTargetViewer`),e.catalogOpenTarget!==A.catalogOpenTarget),u=I(N(`common.enabled`),(e.composerHoldToRecord??A.composerHoldToRecord)!==A.composerHoldToRecord),d=I(N(`common.disabled`),e.chatCollapseTaskProgress!==A.chatCollapseTaskProgress);return E`
    <section id=${x.chat} class="settings-section">
      <div class="settings-section__header">
        <h2 class="settings-section__heading">${N(`configView.chatPrefs.title`)}</h2>
      </div>
      <div class="settings-group">
        ${L({title:N(`configView.chatPrefs.messageWidth`),description:E`${N(`configView.chatPrefs.messageWidthHint`)}<br />
            ${a} ${N(`quickSettings.personal.browserOnly`)}`,control:t})}
        ${V({title:N(`configView.chatPrefs.collapseTaskProgress`),description:E`${N(`configView.chatPrefs.collapseTaskProgressHint`)}<br />
            ${d} ${N(`quickSettings.personal.browserOnly`)}`,checked:e.chatCollapseTaskProgress,onChange:e.setChatCollapseTaskProgress})}
        ${X({title:N(`chat.sendShortcut`),value:e.chatSendShortcut,setting:`send-shortcut`,description:E`${o} ${s}`,options:[{value:`enter`,label:N(`chat.sendShortcutEnter`)},{value:`modifier-enter`,label:N(`chat.sendShortcutModifierEnter`)}],onChange:t=>e.setChatSendShortcut(st(t))})}
        ${L({title:N(`chat.followUpMode`),description:E`${i} ${c}`,control:E`
            <select
              class="settings-select"
              data-settings-follow-up-mode
              aria-label=${N(`chat.followUpMode`)}
              .value=${n}
              @change=${t=>{let n=t.currentTarget.value;e.setChatFollowUpMode(n===`server`?void 0:Tt(n))}}
            >
              <option value="server" ?selected=${n===`server`}>
                ${N(`chat.followUpModeServer`,{mode:r})}
              </option>
              <option value="steer" ?selected=${n===`steer`}>
                ${N(`chat.followUpModeSteer`)}
              </option>
              <option value="queue" ?selected=${n===`queue`}>
                ${N(`chat.followUpModeQueue`)}
              </option>
            </select>
            ${e.chatFollowUpModeOverridden?E`<button
                    type="button"
                    class="btn btn--sm"
                    @click=${e.resetChatFollowUpMode}
                  >
                    ${N(`chat.followUpModeReset`)}
                  </button>`:O}
          `})}
        ${X({title:N(`chat.catalogOpenTarget`),value:e.catalogOpenTarget,setting:`catalog-open-target`,description:E`${l}
          ${N(`quickSettings.personal.browserOnly`)}`,options:[{value:`viewer`,label:N(`chat.catalogOpenTargetViewer`)},{value:`terminal`,label:N(`chat.catalogOpenTargetTerminal`)}],onChange:t=>e.setCatalogOpenTarget(tt(t))})}
        ${ns(e)} ${rs(e)}
        ${e.setComposerHoldToRecord?V({title:N(`chat.composer.holdToRecordSetting`),description:E`${N(`chat.composer.holdToRecordSettingDescription`)}<br />
                  ${u} ${N(`quickSettings.personal.browserOnly`)}`,checked:e.composerHoldToRecord??A.composerHoldToRecord,onChange:e.setComposerHoldToRecord}):O}
      </div>
    </section>
  `}function as(e){if(!e.setLobsterPetVisits||!e.setLobsterPetSounds)return O;let t=e.lobsterPetVisits??A.lobsterPetVisits,n=e.lobsterPetSounds??A.lobsterPetSounds,r=I(N(`common.enabled`),t!==A.lobsterPetVisits),i=I(N(`common.disabled`),n!==A.lobsterPetSounds),a=en(),o=un.filter(e=>a.has(e.id)).length;return E`
    <section class="settings-section">
      <div class="settings-section__header">
        <h2 class="settings-section__heading">${N(`quickSettings.appearance.lobsterdex`)}</h2>
      </div>
      <div class="settings-group">
        ${V({title:N(`quickSettings.appearance.lobsterVisits`),description:t?E`${N(`quickSettings.appearance.lobsterVisitsOn`)}<br />
                ${r} ${N(`quickSettings.personal.browserOnly`)}`:E`${N(`quickSettings.appearance.lobsterVisitsOff`)}<br />
                ${r} ${N(`quickSettings.personal.browserOnly`)}`,checked:t,onChange:t=>e.setLobsterPetVisits?.(t)})}
        ${V({title:N(`quickSettings.appearance.lobsterSounds`),description:n?E`${N(`quickSettings.appearance.lobsterSoundsOn`)}<br />
                ${i} ${N(`quickSettings.personal.browserOnly`)}`:E`${N(`quickSettings.appearance.lobsterSoundsOff`)}<br />
                ${i} ${N(`quickSettings.personal.browserOnly`)}`,checked:n,onChange:t=>e.setLobsterPetSounds?.(t),onAct:e=>{e&&xn()}})}
        ${L({title:N(`quickSettings.appearance.lobsterdex`),description:N(`quickSettings.appearance.lobsterdexSeen`,{seen:String(o),total:String(un.length)}),stacked:!0,control:E`
            <div class="lobsterdex__gallery">
              <div class="lobsterdex">
                ${un.map(e=>{let t=hn(e),n=a.get(e.id),r=n!==void 0,i=n?.shinySeenAt!=null,o=r?n.name??Cn(e.id):`?`,s=i?`${o} ✦`:o,c=Xt[e.id],l=r?c.flavor:c.hint,u=r&&n.firstSeenAt!==null?N(`quickSettings.appearance.lobsterdexFirstVisited`,{name:o,date:new Date(n.firstSeenAt).toLocaleDateString()}):null,d=[s,l,u].filter(e=>e!==null).join(`
`);return E`
                    <openclaw-tooltip>
                      <span
                        class="lobsterdex__mini lobster-pet--palette-${e.id} ${r?``:`lobsterdex__mini--unseen`}"
                        style=${Jt(t)}
                        tabindex="0"
                        role="img"
                        aria-label=${d}
                      >
                        ${kn(t,{standalone:!0})}
                        ${i?E`<span class="lobsterdex__mini-star" aria-hidden="true">✦</span>`:O}
                      </span>
                      <span slot="content" class="lobsterdex__tooltip">
                        <strong>${s}</strong>
                        <span>${l}</span>
                        ${u?E`<span>${u}</span>`:O}
                      </span>
                    </openclaw-tooltip>
                  `})}
              </div>
              ${e.lobsterdexHref?E`<a
                      class="btn btn--sm lobsterdex__open"
                      href=${e.lobsterdexHref}
                      @click=${t=>{ee(t)&&(t.preventDefault(),e.onOpenLobsterdex?.())}}
                      >${N(`quickSettings.appearance.lobsterdexOpen`)}</a
                    >`:O}
            </div>
          `})}
      </div>
    </section>
  `}function os(e){let t=[...e.hiddenSessionCatalogIds].toSorted(),n=I(N(`common.enabled`),e.sidebarLiveActivity!==A.sidebarLiveActivity),r=e.setSessionDeleteConfirm,i=e.sessionDeleteConfirm??A.sessionDeleteConfirm,a=I(N(`common.enabled`),i!==A.sessionDeleteConfirm);return E`
    <section id=${x.sidebar} class="settings-section">
      <div class="settings-section__header">
        <h2 class="settings-section__heading">${N(`configView.sidebarPrefs.title`)}</h2>
      </div>
      <p class="settings-section__desc">${N(`configView.sidebarPrefs.hint`)}</p>
      <div class="settings-group">
        ${V({title:N(`configView.sidebarPrefs.liveActivity`),description:E`${N(`configView.sidebarPrefs.liveActivityHint`)}<br />
            ${n} ${N(`quickSettings.personal.browserOnly`)}`,checked:e.sidebarLiveActivity,onChange:e.setSidebarLiveActivity})}
        ${r?V({title:N(`configView.sidebarPrefs.deleteConfirm`),description:E`${N(`configView.sidebarPrefs.deleteConfirmHint`)}<br />
                  ${a} ${N(`quickSettings.personal.browserOnly`)}`,checked:i,onChange:r}):O}
      </div>
      ${t.length>0?E`
              <div class="settings-section__header settings-section__header--subsection">
                <h3 class="settings-section__heading">
                  ${N(`chat.sidebar.hiddenSessionSections`)}
                </h3>
              </div>
              <div class="settings-group">
                ${t.map(t=>L({title:e.hiddenSessionCatalogLabels.get(t)??t,description:N(`quickSettings.personal.browserOnly`),control:E`<button
                      type="button"
                      class="btn btn--sm"
                      @click=${()=>e.setSessionCatalogHidden(t,!1)}
                    >
                      ${N(`chat.sidebar.showSessionSection`)}
                    </button>`}))}
              </div>
            `:O}
      <div class="settings-section__header settings-section__header--subsection">
        <h3 class="settings-section__heading">${N(`configView.sessionObserver.title`)}</h3>
      </div>
      <p class="settings-section__desc">${N(`configView.sessionObserver.hint`)}</p>
      ${Ba({enabled:e.sessionObserverEnabled!==!1,utilityModel:e.sessionObserverUtilityModel,resolvedUtilityModel:e.sessionObserverResolvedModel,models:e.sessionObserverModels??[],modelsUnavailable:e.sessionObserverModelsUnavailable===!0,disabled:e.sessionObserverDisabled===!0,onEnabledChange:t=>e.setSessionObserverEnabled?.(t),onUtilityModelChange:t=>e.setSessionObserverUtilityModel?.(t)})}
    </section>
  `}function ss(){return(ss=e((()=>{T(),qe(),nn(),cn(),an(),Zt(),Lt(),H(),j(),Qo(),Se(),Ha(),qa()})))()}function cs(e,t){return e===`custom`&&t!==`custom`?E`<span class="settings-theme-card__icon" aria-hidden="true"
      >${M.download}</span
    >`:E`
    <span class="settings-theme-card__palette" aria-hidden="true">
      <span class="settings-theme-card__chip settings-theme-card__chip--accent"></span>
      <span class="settings-theme-card__chip settings-theme-card__chip--accent-2"></span>
      <span class="settings-theme-card__chip settings-theme-card__chip--bg"></span>
    </span>
  `}function ls(e){return e.hasCustomTheme&&e.customThemeLabel?e.customThemeLabel:N(`configView.appearance.importedTheme`)}function us(){(typeof requestAnimationFrame==`function`?requestAnimationFrame:e=>window.setTimeout(()=>e(0),0))(()=>{let e=globalThis.document?.querySelector(`[data-custom-theme-import-input]`);e&&(typeof e.scrollIntoView==`function`&&e.scrollIntoView({block:`center`,behavior:Kn()}),e.focus(),e.select())})}function ds(e,t){let n=Object.entries(dt).map(([e,t])=>({value:e,label:e===`system`?N(`configView.appearance.fonts.system`):t.label,description:N(`configView.appearance.fontNotes.${e}`),labelStyle:`font-family: ${t.stack}`}));return E`
    <section class="settings-section">
      <div class="settings-section__header">
        <h2 class="settings-section__heading">${N(`configView.appearance.typography`)}</h2>
      </div>
      <div class="settings-group">
        ${[`ui`,`chat`].map(r=>{let i=r===`ui`,a=N(`configView.appearance.fonts.${r}`),o=vt[e.theme][r];return L({title:a,description:$o(i?e.fontUiProvenance:e.fontChatProvenance),stackedOnNarrow:!0,control:er({id:`settings-font-${r}`,label:a,value:(i?e.fontUi:e.fontChat)??`theme`,options:[{value:`theme`,label:N(`configView.appearance.fonts.themeDefault`),description:N(`configView.appearance.fonts.themeFace`,{theme:t,face:dt[o].label}),labelStyle:`font-family: ${dt[o].stack}`},...n],onOpen:nt,onChange:t=>(i?e.setFontUi:e.setFontChat)(Je(t))})})})}
        <div class="settings-row settings-row--stacked">
          <div class="settings-typography-preview">
            <div class="settings-typography-preview__caption">
              ${N(`configView.appearance.fonts.previewCaption`)}
            </div>
            <p class="settings-typography-preview__prose">
              ${N(`configView.appearance.fonts.previewProse`)}
            </p>
            <code class="settings-typography-preview__code"
              >${N(`configView.appearance.fonts.previewCode`)}</code
            >
          </div>
        </div>
      </div>
    </section>
  `}function fs(e,t){let n=e.viewState,r=e.hasCustomTheme||e.customThemeImportExpanded===!0;r&&e.customThemeImportFocusToken!=null&&e.customThemeImportFocusToken!==n.lastCustomThemeImportFocusToken&&(n.lastCustomThemeImportFocusToken=e.customThemeImportFocusToken,us());let i=ls(e),a=[...ms.map(e=>({id:e.id,label:N(e.labelKey),description:N(e.descriptionKey)})),{id:`custom`,label:e.hasCustomTheme?i:N(`configView.appearance.import`),description:e.hasCustomTheme?N(`configView.appearance.importedFrom`,{name:i}):N(`configView.appearance.importHint`)}],o=a.find(t=>t.id===e.themeResetValue)?.label??N(`configView.themes.claw.label`),s=e.themeModeResetValue===`light`?N(`common.light`):e.themeModeResetValue===`dark`?N(`common.dark`):N(`common.system`),c=$o(e.themeProvenance),l=$o(e.themeModeProvenance),u=$o(e.accentProvenance),d=e.accent===e.accentResetValue,ee=e.accentResetValue??`var(--theme-chip-accent)`,f=!!(!d&&e.accent&&!hs.some(t=>t.hex===e.accent)),p=hs.find(t=>t.hex!==void 0&&t.hex===e.accent),te=d?N(`configView.appearance.usingInheritedAccent`):N(`configView.appearance.usingAccent`,{value:N(p?p.labelKey:`configView.appearance.customAccent`)});return E`
    <div class="settings-page">
      ${es(e)}
      <section id=${x.theme} class="settings-section">
        <div class="settings-section__header">
          <h2 class="settings-section__heading">${N(`configView.appearance.theme`)}</h2>
        </div>
        <p class="settings-section__desc">
          ${N(`configView.appearance.chooseTheme`)}
          ${I(o,e.themeOverridden)}
          ${c}
        </p>
        <div class="settings-group">
          <div class="settings-row settings-row--stacked">
            <div class="settings-theme-grid">
              ${a.map(t=>E`
                  <button
                    class="settings-theme-card settings-theme-card--${t.id} ${t.id===e.theme?`settings-theme-card--active`:``}"
                    aria-pressed=${t.id===`custom`&&!e.hasCustomTheme?O:String(t.id===e.theme)}
                    title=${t.description}
                    @click=${n=>{if(t.id===`custom`&&!e.hasCustomTheme){e.onOpenCustomThemeImport?.();return}if(t.id!==e.theme||t.id===e.themeResetValue&&e.themeOverridden){let r={element:n.currentTarget??void 0};e.setTheme(t.id,r)}}}
                  >
                    ${cs(t.id,e.theme)}
                    <span class="settings-theme-card__label">${t.label}</span>
                  </button>
                `)}
            </div>
          </div>
          ${L({title:N(`common.colorMode`),description:E`${I(s,e.themeModeOverridden)}
            ${l}`,stackedOnNarrow:!0,control:sn({value:e.themeMode,options:[{value:`system`,label:N(`common.system`)},{value:`light`,label:N(`common.light`)},{value:`dark`,label:N(`common.dark`)}],ariaLabel:N(`common.colorMode`),onChange:(t,n)=>e.setThemeMode(t,{element:n}),onReselect:(t,n)=>{e.themeModeOverridden&&t===e.themeModeResetValue&&e.setThemeMode(t,{element:n})}})})}
          <div class="settings-row settings-row--stacked">
            ${r?E`
                    <div class="settings-theme-import">
                      <div class="settings-theme-import__copy">
                        <div class="settings-theme-import__title">
                          ${N(`configView.appearance.importFromTweakcn`)}
                        </div>
                        <p class="settings-theme-import__hint">
                          ${N(`configView.appearance.tweakcnInstructions`)}
                        </p>
                      </div>
                      <a
                        class="settings-theme-import__external"
                        href="https://tweakcn.com/editor/theme"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        ${N(`configView.appearance.browseTweakcn`)} ${M.externalLink}
                      </a>
                      <label class="settings-theme-import__field">
                        <span class="settings-theme-import__label"
                          >${N(`configView.appearance.themeLink`)}</span
                        >
                        ${t.customThemeImport}
                      </label>
                      <div class="settings-theme-import__actions">
                        <button
                          class="btn btn--sm primary"
                          ?disabled=${e.customThemeImportBusy||e.customThemeImportUrl.trim().length===0}
                          @click=${e.onImportCustomTheme}
                        >
                          ${e.customThemeImportBusy?N(`common.importing`):e.hasCustomTheme?N(`configView.appearance.replace`,{name:i}):N(`configView.appearance.importTheme`)}
                        </button>
                        ${e.hasCustomTheme?E`<button
                                class="btn btn--sm danger"
                                @click=${e.onClearCustomTheme}
                              >
                                ${N(`configView.appearance.clear`,{name:i})}
                              </button>`:O}
                      </div>
                      ${e.hasCustomTheme?E`<div class="settings-theme-import__meta">
                              <span class="settings-theme-import__meta-label"
                                >${N(`configView.appearance.loaded`)}</span
                              >
                              <span class="settings-theme-import__meta-value"
                                >${i} · ${e.customThemeSourceUrl??`tweakcn`}</span
                              >
                            </div>`:O}
                      ${e.customThemeImportMessage?E`<div
                              class="settings-theme-import__message settings-theme-import__message--${e.customThemeImportMessage.kind}"
                              role=${e.customThemeImportMessage.kind===`error`?`alert`:`status`}
                            >
                              ${e.customThemeImportMessage.text}
                            </div>`:O}
                    </div>
                  `:E`<p class="settings-theme-import__inline-hint">
                    ${N(`configView.appearance.inlineHintBefore`)}
                    <strong>${N(`configView.appearance.import`)}</strong>
                    ${N(`configView.appearance.inlineHintAfter`)}
                  </p>`}
          </div>
        </div>
      </section>

      <section id=${x.accent} class="settings-section">
        <div class="settings-section__header">
          <h2 class="settings-section__heading">${N(`configView.appearance.accent`)}</h2>
        </div>
        <p class="settings-section__desc">${N(`configView.appearance.accentHint`)}</p>
        <div class="settings-group">
          <div class="settings-row settings-row--stacked">
            <div class="settings-accent-swatches">
              ${hs.map(t=>{let n=t.hex===void 0,r=n?d:!d&&t.hex===e.accent,i=N(t.labelKey),a=n?` settings-accent-theme--${e.theme}`:``;return E`
                  <button
                    type="button"
                    class="settings-accent-swatch${a} ${r?`settings-accent-swatch--active`:``}"
                    style=${De({"--settings-accent-swatch":t.hex??ee})}
                    data-accent-preset=${t.id}
                    aria-label=${i}
                    aria-pressed=${String(r)}
                    title=${i}
                    @click=${()=>e.setAccent(t.hex)}
                  >
                    ${n&&!d?E`<span class="settings-accent-swatch__reset" aria-hidden="true"
                            >${M.rotateCcw}</span
                          >`:r?E`<span class="settings-accent-swatch__check" aria-hidden="true"
                              >${M.check}</span
                            >`:O}
                  </button>
                `})}
              <span
                class="settings-accent-swatch settings-accent-swatch--custom ${f?`settings-accent-swatch--active`:``}"
                style=${De({"--settings-accent-swatch":e.accent??hs[1].hex,"--settings-accent-swatch-ink":ct(e.accent??hs[1].hex)})}
              >
                <input
                  type="color"
                  class="settings-accent-swatch__input"
                  data-accent-custom
                  aria-label=${N(`configView.appearance.customAccent`)}
                  aria-describedby="settings-accent-status"
                  title=${N(`configView.appearance.customAccent`)}
                  .value=${e.accent??hs[1].hex}
                  @input=${t=>e.setAccent(t.currentTarget.value)}
                />
                <span class="settings-accent-swatch__picker" aria-hidden="true"
                  >${M.pipette}</span
                >
              </span>
            </div>
          </div>
        </div>
        <p id="settings-accent-status" class="settings-section__desc settings-accent-status">
          <span class="settings-accent-status__selection">${te}</span>
          <span class="settings-accent-status__scope">${u}</span>
        </p>
      </section>

      ${ds(e,a.find(t=>t.id===e.theme).label)}

      <section id=${x.textSize} class="settings-section">
        <div class="settings-section__header">
          <h2 class="settings-section__heading">${N(`configView.appearance.textSize`)}</h2>
        </div>
        <p class="settings-section__desc">
          ${I(`${A.textScale}%`,e.textScaleOverridden)}
          ${N(`quickSettings.personal.browserOnly`)}
        </p>
        <div class="settings-group">
          <div class="settings-row settings-row--stacked">
            <div class="settings-text-scale">
              <div class="settings-text-scale__options">
                ${Re.map(t=>E`
                    <button
                      type="button"
                      class="settings-text-scale__btn ${t===e.textScale?`active`:``}"
                      aria-pressed=${String(t===e.textScale)}
                      @click=${()=>e.setTextScale(t)}
                    >
                      <span class="settings-text-scale__sample">${N(ps[t])}</span>
                      <span class="settings-text-scale__label">${t}%</span>
                    </button>
                  `)}
              </div>
            </div>
          </div>
        </div>
      </section>

      ${os(e)} ${as(e)}
      ${is(e,t.chatMessageWidth)}

      <section id=${x.connection} class="settings-section">
        <div class="settings-section__header">
          <h2 class="settings-section__heading">${N(`configView.connection.title`)}</h2>
        </div>
        <div class="settings-group">
          ${L({title:N(`configView.connection.gateway`),control:R(e.gatewayUrl||`-`,{mono:!0})})}
          ${L({title:N(`configView.connection.status`),control:U({kind:e.connected?`ok`:`muted`,label:e.connected?N(`common.connected`):N(`common.offline`)})})}
          ${e.assistantName?L({title:N(`configView.connection.assistant`),control:R(e.assistantName)}):O}
        </div>
      </section>
    </div>
  `}var ps,ms,hs;function gs(){return(gs=e((()=>{T(),Ee(),qe(),at(),P(),tr(),H(),j(),Se(),ss(),ps={90:`configView.textSizes.small`,100:`configView.textSizes.default`,110:`configView.textSizes.large`,125:`configView.textSizes.xl`,140:`configView.textSizes.xxl`},ms=[{id:`claw`,labelKey:`configView.themes.claw.label`,descriptionKey:`configView.themes.claw.description`},{id:`knot`,labelKey:`configView.themes.knot.label`,descriptionKey:`configView.themes.knot.description`},{id:`dash`,labelKey:`configView.themes.dash.label`,descriptionKey:`configView.themes.dash.description`},{id:`absolutely`,labelKey:`configView.themes.absolutely.label`,descriptionKey:`configView.themes.absolutely.description`},{id:`tide`,labelKey:`configView.themes.tide.label`,descriptionKey:`configView.themes.tide.description`},{id:`beacon`,labelKey:`configView.themes.beacon.label`,descriptionKey:`configView.themes.beacon.description`},{id:`phosphor`,labelKey:`configView.themes.phosphor.label`,descriptionKey:`configView.themes.phosphor.description`},{id:`crt`,labelKey:`configView.themes.crt.label`,descriptionKey:`configView.themes.crt.description`},{id:`manuscript`,labelKey:`configView.themes.manuscript.label`,descriptionKey:`configView.themes.manuscript.description`},{id:`rose`,labelKey:`configView.themes.rose.label`,descriptionKey:`configView.themes.rose.description`},{id:`miami`,labelKey:`configView.themes.miami.label`,descriptionKey:`configView.themes.miami.description`}],hs=[{id:`default`,hex:void 0,labelKey:`configView.appearance.accents.default`},{id:`claw`,hex:`#ff5c5c`,labelKey:`configView.appearance.accents.claw`},{id:`coral`,hex:`#ff8066`,labelKey:`configView.appearance.accents.coral`},{id:`amber`,hex:`#f5b942`,labelKey:`configView.appearance.accents.amber`},{id:`mint`,hex:`#52c99a`,labelKey:`configView.appearance.accents.mint`},{id:`teal`,hex:`#35b9b0`,labelKey:`configView.appearance.accents.teal`},{id:`blue`,hex:`#5b9cf6`,labelKey:`configView.appearance.accents.blue`},{id:`violet`,hex:`#a78bfa`,labelKey:`configView.appearance.accents.violet`},{id:`pink`,hex:`#f472b6`,labelKey:`configView.appearance.accents.pink`},{id:`slate`,hex:`#8795a8`,labelKey:`configView.appearance.accents.slate`}]})))()}function _s(e){return e.length>0?e.join(`.`):N(`configView.root`)}function vs(e,t){if(!e||!t)return[];let n=[],r=0;function i(e,t,r){n.length<Ds&&n.push({path:e,from:t,to:r})}function a(e,t,n){if(e.length!==t.length||e.length>Os)return!0;for(let r=0;r<e.length;r+=1)if(s(e[r],t[r],n+1))return!0;return!1}function o(e,t,n){let r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!0;for(let i of r)if(!Object.hasOwn(t,i)||s(e[i],t[i],n+1))return!0;return!1}function s(e,t,n){return r+=1,r>Es||n>Ts?!0:e===t?!1:typeof e==typeof t?typeof e!=`object`||!e||t===null?e!==t:Array.isArray(e)||Array.isArray(t)?Array.isArray(e)&&Array.isArray(t)?a(e,t,n+1):!0:o(e,t,n+1):!0}function c(e,t,o,s){if(r+=1,r>Es||s>Ts||n.length>=Ds||e===t)return;if(typeof e!=typeof t){i(o,e,t);return}if(typeof e!=`object`||!e||t===null){e!==t&&i(o,e,t);return}if(Array.isArray(e)||Array.isArray(t)){(Array.isArray(e)&&Array.isArray(t)&&a(e,t,s+1)||!Array.isArray(e)||!Array.isArray(t))&&i(o,e,t);return}let l=e,u=t,d=new Set([...Object.keys(l),...Object.keys(u)]);for(let e of d)c(l[e],u[e],[...o,e],s+1)}return c(e,t,[],0),n}function ys(e,t,n){if(e.rawDiffCache?.original===t&&e.rawDiffCache.current===n)return e.rawDiffCache.diff;if(t.length>ks||n.length>ks)return e.rawDiffCache={original:t,current:n,diff:[]},e.rawDiffCache.diff;try{let r=b(t),i=b(n);if(!r||!i||typeof r!=`object`||typeof i!=`object`||Array.isArray(r)||Array.isArray(i))return e.rawDiffCache={original:t,current:n,diff:[]},[];let a=vs(r,i);return e.rawDiffCache={original:t,current:n,diff:a},a}catch{return fe()&&(e.rawDiffCache={original:t,current:n,diff:[]}),[]}}function bs(e,t=40){if(Array.isArray(e))return N(e.length===1?`configView.itemCount`:`configView.itemCountPlural`,{count:String(e.length)});let n;try{n=JSON.stringify(e)??String(e)}catch{n=String(e)}return n.length<=t?n:o(n,t-3)+`...`}function xs(e,t){let n=e.split(`.`);return n.length===t.length&&n.every((e,n)=>e===`*`||e===t[n])}function Ss(e,t){return Object.entries(t).some(([t,n])=>!!n.sensitive&&xs(t,e))}function Cs(e,t){for(let n=1;n<=e.length;n+=1){let r=e.slice(0,n),i=_s(r);if((v(r,t)?.sensitive??!1)||Ss(r,t)||Ir(i))return!0}return!1}function ws(e,t,n,r){let i=Pr(t,e,n)>0;return!r&&t!=null&&(Cs(e,n)||i)?zr():bs(t)}var Ts,Es,Ds,Os,ks;function As(){return(As=e((()=>{Lr(),Fr(),j(),ge(),Ts=64,Es=2e4,Ds=1e3,Os=2e3,ks=2e5})))()}function js(e){return Ms.has(e)}var Ms;function Ns(){return(Ns=e((()=>{Ms=new Set([`defaults`,`modelByChannel`])})))()}function Ps(e,t){let n=Object.entries(e.properties??{}),r=n.filter(([e])=>!js(e)).map(([e,n])=>({key:e,label:v([`channels`,e],t)?.label??n.title??ie(e),keys:[e]})).toSorted((e,t)=>e.label.localeCompare(t.label)||e.key.localeCompare(t.key)),i=n.filter(([e])=>js(e)).map(([e])=>e);return[...r,...i.length>0?[{key:null,label:N(`configView.categories.other`),keys:i}]:[]]}function Fs(e){return Ls[e]??M.file}function Is(e,t,n){return E`
    <div class="config-accordion-nav">
      ${t.map(t=>{let r=t.sections.some(t=>t.key===e.activeSection),i=`config-accordion-panel-${t.id}`;return E`
          <div class="config-accordion-group">
            <button
              class="config-accordion-group__header ${r?`config-accordion-group__header--active`:``}"
              aria-expanded=${r?`true`:`false`}
              aria-controls=${i}
              @click=${i=>{let a=t.sections[0]?.key??null;e.onSectionChange(r?null:a),n(i.currentTarget)}}
            >
              <span class="config-accordion-group__icon">
                ${Fs(t.sections[0]?.key??`default`)}
              </span>
              <span>${t.label}</span>
              <svg
                class="config-accordion-group__chevron ${r?`config-accordion-group__chevron--open`:``}"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                width="14"
                height="14"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div id=${i} class="config-accordion-group__items" ?hidden=${!r}>
              ${t.sections.map(t=>E`<button
                  class="config-accordion-group__item ${e.activeSection===t.key?`config-accordion-group__item--active`:``}"
                  aria-current=${e.activeSection===t.key?`true`:O}
                  @click=${r=>{e.onSectionChange(t.key),n(r.currentTarget)}}
                >
                  <span class="config-accordion-group__item-icon">
                    ${Fs(t.key)}
                  </span>
                  ${t.label}
                </button>`)}
            </div>
          </div>
        `})}
    </div>
  `}var Ls,Rs,zs;function Bs(){return(Bs=e((()=>{T(),Ns(),Fr(),P(),j(),Ls={all:M.layoutGrid,env:M.settings,update:M.download,agents:M.bot,auth:M.lock,channels:M.messageSquare,messages:M.mail,commands:M.terminal,hooks:M.link,skills:M.star,tools:M.wrench,gateway:M.globe,wizard:M.wandSparkles,meta:M.penLine,logging:M.fileText,browser:M.chrome,ui:M.panelsTopLeft,models:M.box,bindings:M.server,broadcast:M.radio,tts:M.music,transcripts:M.book,session:M.users,cron:M.clock,discovery:M.search,talk:M.mic,plugins:M.asterisk,diagnostics:M.activity,cli:M.terminal,secrets:M.key,acp:M.users,mcp:M.server,__appearance__:M.sun,__notifications__:M.bell},Rs=[{id:`core`,sections:[`env`,`auth`,`update`,`meta`,`logging`,`diagnostics`,`cli`,`secrets`,`wizard`]},{id:`ai`,sections:[`agents`,`models`,`skills`,`tools`,`memory`,`session`]},{id:`communication`,sections:[`channels`,`messages`,`broadcast`,`__notifications__`,`talk`,`tts`,`transcripts`]},{id:`security`,sections:[`security`,`approvals`]},{id:`automation`,sections:[`commands`,`hooks`,`bindings`,`cron`,`plugins`]},{id:`infrastructure`,sections:[`gateway`,`browser`,`nodeHost`,`discovery`,`acp`,`mcp`]},{id:`appearance`,sections:[`__appearance__`,`ui`]}],zs=new Set(Rs.flatMap(e=>e.sections))})))()}function Vs(e,t){if(!e||ae(e)!==`object`||!e.properties)return e;let n=t.include,r=t.exclude,i={};for(let t of Object.keys(e.properties)){if(n&&n.size>0&&!n.has(t)||r&&r.size>0&&r.has(t))continue;let a=e.properties[t];a&&(i[t]=a)}return{...e,properties:i}}function Hs(e){return u(e)?e:null}function Us(e){return e?.length?e.join(``):``}function Ws(e,t,n,r,i,a){let o=Us(n),s=Us(r),c=e.schemaAnalysisCache;if(c&&c.schema===t&&c.includeKey===o&&c.excludeKey===s)return c.analysis;let l=Vs(t,{include:i,exclude:a}),u=Rr(l);return e.schemaAnalysisCache={schema:t,includeKey:o,excludeKey:s,analysis:u},u}function Gs(e,t){if(!e||t===`<root>`)return!1;let n=t.split(`.`),r=(e,t)=>{if(t===n.length)return e!==void 0;if(typeof e!=`object`||!e)return!1;let i=n[t];return i===`*`?Object.values(e).some(e=>r(e,t+1)):!i||!Object.hasOwn(e,i)?!1:r(e[i],t+1)};return r(e,0)}function Ks(e){let t=`__OPENCLAW_CONFIG_PATHS__`,n=e.length===1?`configView.formUnsafeCount`:`configView.formUnsafeCountPlural`,[r,i=``]=N(n,{count:String(e.length),paths:t}).split(t);return E`
    <span class="config-content-callout__text">
      ${r}${e.slice(0,3).map((e,t)=>E`${t>0?`, `:``}<code>${e}</code>`)}${i}${e.length>3?E` ${N(`configView.formUnsafeMore`,{count:String(e.length-3)})}`:O}
    </span>
  `}function qs(){return(qs=e((()=>{T(),Fr(),Vr(),j()})))()}function Js(){return{rawRevealed:!1,rawDiffOpen:!1,envRevealed:!1,validityDismissed:!1,revealedSensitivePaths:new Set,lastCustomThemeImportFocusToken:null,lastConfigContextKey:null,lastFormModeForScroll:null}}function Ys(e){e.rawRevealed=!1,e.rawDiffOpen=!1,e.envRevealed=!1,e.validityDismissed=!1,e.revealedSensitivePaths.clear(),e.lastCustomThemeImportFocusToken=null,e.rawDiffCache=void 0}function Xs(e){let t=e.includeSections?.join(``)??``,n=e.excludeSections?.join(``)??``;return[e.configPath??``,e.gatewayUrl,e.navRootLabel??``,t,n].join(``)}function Zs(e,t){let n=f(t);return n?e.revealedSensitivePaths.has(n):!1}function Qs(e,t){let n=f(t);n&&(e.revealedSensitivePaths.has(n)?e.revealedSensitivePaths.delete(n):e.revealedSensitivePaths.add(n))}function $s(){return($s=e((()=>{Fr()})))()}function ec(e){return fs(e,{chatMessageWidth:E`
      <input
        class="settings-input"
        data-settings-chat-message-width
        aria-label=${N(`configView.chatPrefs.messageWidth`)}
        type="text"
        spellcheck="false"
        placeholder="48rem"
        .value=${e.chatMessageMaxWidth??``}
        @change=${t=>{let n=t.currentTarget,r=xt(n.value);if(n.value.trim()&&!r){n.setCustomValidity(N(`configView.chatPrefs.messageWidthInvalid`)),n.reportValidity();return}n.setCustomValidity(``),n.value=r??``,e.setChatMessageMaxWidth(r)}}
      />
    `,customThemeImport:E`
      <input
        class="settings-theme-import__input"
        data-custom-theme-import-input
        type="text"
        spellcheck="false"
        placeholder="https://tweakcn.com/editor/theme?theme=... or amethyst-haze"
        .value=${e.customThemeImportUrl}
        @input=${t=>e.onCustomThemeImportUrlChange(t.currentTarget.value)}
      />
    `})}function tc(e){let t=e.renderSection??(e=>e),n=e.viewState,r=e.showModeToggle??!1,i=e.showRootTab??!0,a=e.valid==null?`unknown`:e.valid?`valid`:`invalid`,o=e.includeVirtualSections??!0,s=e.includeSections?.length?new Set(e.includeSections):null,c=e.excludeSections?.length?new Set(e.excludeSections):null,l=Ws(n,Hs(e.schema),e.includeSections,e.excludeSections,s,c),u=l.unsupportedPaths.filter(t=>t!==`<root>`&&(!e.activeSection||t===e.activeSection||t.startsWith(`${e.activeSection}.`))&&Gs(e.formValue,t)),d=u.length>0,ee=e.forceShowAdvanced===!0||e.showAdvancedSettings,f=e.rawAvailable??!0,p=!!e.rawDraftPending&&f,te=r&&f?e.formMode:`form`,m=p?`raw`:te,h=e.onViewStateChange,g=e=>{queueMicrotask(()=>{let t=[(e instanceof Element?e:null)?.closest(`.config-lead`)?.parentElement?.querySelector(`.config-content`)??globalThis.document?.querySelector(`.config-content`),globalThis.document?.querySelector(`.shell--settings .content`)];for(let e of t)e&&(typeof e.scrollTo==`function`?e.scrollTo({top:0,left:0,behavior:`auto`}):(e.scrollTop=0,e.scrollLeft=0))})};n.lastFormModeForScroll!==null&&n.lastFormModeForScroll!==m&&g(null),n.lastFormModeForScroll=m;let ne=Xs(e);n.lastConfigContextKey!==ne&&(Ys(n),n.lastConfigContextKey=ne);let _=n.envRevealed,v=l.schema?.properties??{},re=new Set([`__appearance__`,`__notifications__`]),ie=e=>o&&re.has(e)&&(e===`__appearance__`||s?.has(e)===!0),ae=e=>N(`configView.sections.${e===`__appearance__`?`theme`:e===`__notifications__`?`notifications`:e}`),oe=Rs.map(e=>({id:e.id,label:N(`configView.categories.${e.id}`),sections:e.sections.filter(e=>(ie(e)||e in v)&&(!s||s.has(e))&&(!c||!c.has(e))).map(e=>({key:e,label:ae(e)}))})).filter(e=>e.sections.length>0),se=Object.keys(v).filter(e=>!zs.has(e)).map(e=>({key:e,label:e.charAt(0).toUpperCase()+e.slice(1)})),ce=se.length>0?{id:`other`,label:N(`configView.categories.other`),sections:se}:null,y=e.activeSection===`channels`?v.channels:void 0,ue=y?Ps(y,e.uiHints):[],b=ue.find(t=>t.key===e.activeSubsection)??ue[0],de=y&&b?{...l.schema,properties:{...v,channels:{...y,properties:Object.fromEntries(Object.entries(y.properties??{}).filter(([e])=>b.keys.includes(e))),required:y.required?.filter(e=>b.keys.includes(e)),additionalProperties:!1}}}:l.schema,pe=de?.properties?.wizard,me=pe&&(!e.activeSection||e.activeSection===`wizard`),he=pe?{...de,properties:Object.fromEntries(Object.entries(de.properties??{}).filter(([e])=>e!==`wizard`))}:de,ge=[...i?[{key:null,label:e.navRootLabel??N(`nav.settings`)}]:[],...[...oe,...ce?[ce]:[]].flatMap(e=>e.sections.map(e=>({key:e.key,label:e.label})))],_e=e.settingsLayout??`tabs`,ve=[...oe,...ce?[ce]:[]],x=m===`raw`&&e.raw!==e.originalRaw;(!x||m!==`raw`)&&n.rawDiffOpen&&(n.rawDiffOpen=!1),(!x||m!==`raw`||!n.rawDiffOpen)&&(n.rawDiffCache=void 0);let S=m===`raw`&&x&&n.rawDiffOpen?ys(n,e.originalRaw,e.raw):[];m===`raw`&&x&&n.rawDiffOpen&&!fe()&&le().then(()=>h()).catch(()=>void 0);let ye=e.loading||e.saving||e.applying||e.updating,C=e.mutationAllowed!==!1,be=e.connected&&C&&!ye&&x,xe=o&&m===`form`&&e.activeSection===null&&!!s?.has(`__appearance__`),Se=x&&m===`raw`?E`<details
          class="config-diff"
          ?open=${n.rawDiffOpen}
          @toggle=${e=>{let t=e.target;n.rawDiffOpen!==t.open&&(n.rawDiffOpen=t.open,t.open||(n.rawDiffCache=void 0),h())}}
        >
          <summary class="config-diff__summary">
            <span>${N(`configView.viewPendingChangesRaw`)}</span>
            <svg
              class="config-diff__chevron"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
          <div class="config-diff__content">
            ${S.length>0?S.map(t=>E`<div class="config-diff__item">
                      <div class="config-diff__path">${_s(t.path)}</div>
                      <div class="config-diff__values">
                        <span class="config-diff__from"
                          >${ws(t.path,t.from,e.uiHints,n.rawRevealed)}</span
                        >
                        <span class="config-diff__arrow">→</span>
                        <span class="config-diff__to"
                          >${ws(t.path,t.to,e.uiHints,n.rawRevealed)}</span
                        >
                      </div>
                    </div>`):E`<div class="config-diff__item">${N(`configView.rawDiffUnavailable`)}</div>`}
          </div>
        </details>`:O,Ce=_e!==`accordion`&&ge.length>1,we=Ce?br({id:`config-sections`,active:e.activeSection??`root`,tabs:ge.map(e=>({value:e.key??`root`,label:e.label})),ariaLabel:N(`common.settingsSections`),panelId:`config-section-panel`,onSelect:t=>e.onSectionChange(t===`root`?null:t),onActivate:g}):O,w=r||Ce,Te=a===`invalid`&&!n.validityDismissed,Ee=w||_e===`accordion`||Te||!!b,T=E`<div class="config-lead">
    ${w?E`<div class="config-toolbar">
            ${r?sn({mode:`buttons`,variant:`primary`,value:m,onChange:e.onFormModeChange,onReselect:e.onFormModeChange,options:[{value:`form`,label:N(`configView.form`),disabled:e.schemaLoading||!e.schema||p,title:p?N(`configView.rawDraftPendingFormTitle`):d?N(`configView.formUnsafeTitle`):``},{value:`raw`,label:N(`configView.raw`),disabled:!f,title:N(f?`configView.rawTitle`:`configView.rawUnavailableTitle`)}]}):O}
            ${we}
          </div>`:O}
    ${_e===`accordion`?Is(e,ve,g):O}
    ${b&&m===`form`?E`<div class="config-toolbar">
            <label class="field">
              <span>${N(`configView.channelSettings`)}</span>
              <select
                class="settings-select"
                .value=${b.key??``}
                @change=${t=>{let n=t.currentTarget;e.onSubsectionChange(n.value||null),g(t.currentTarget)}}
              >
                ${ue.map(e=>E`<option
                      value=${e.key??``}
                      ?selected=${e.key===b.key}
                    >
                      ${e.label}
                    </option>`)}
              </select>
            </label>
          </div>`:O}
    ${Te?E`<div class="config-validity-warning">
            <svg
              class="config-validity-warning__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              width="16"
              height="16"
            >
              <path
                d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
              ></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span class="config-validity-warning__text">${N(`configView.invalidConfig`)}</span>
            <button
              class="btn btn--sm"
              @click=${()=>{n.validityDismissed=!0,h()}}
            >
              ${N(`configView.dismissWarning`)}
            </button>
          </div>`:O}
  </div>`;return E`
    ${Ee?T:O}
    <div
      id="config-section-panel"
      class="config-content"
      role=${Ce?`tabpanel`:`region`}
      aria-labelledby=${Ce?`config-sections-tab-${e.activeSection??`root`}`:O}
      aria-label=${Ce?O:N(`common.settingsSections`)}
    >
      ${e.activeSection===`__appearance__`?o?ec(e):O:e.activeSection===`__notifications__`?o?Go(e):O:m===`form`?E`
                  ${d&&r&&f?E`<div class="config-content-callout">
                          <div class="callout info">
                            ${Ks(u)}
                            <button
                              type="button"
                              class="btn btn--sm"
                              @click=${()=>e.onFormModeChange(`raw`)}
                            >
                              ${N(`configView.openRawEditor`)}
                            </button>
                          </div>
                        </div>`:O}
                  ${xe?ec(e):O}
                  ${e.schemaLoading?E`<div class="config-loading">
                          <div class="config-loading__spinner"></div>
                          <span>${N(`configView.loadingSchema`)}</span>
                        </div>`:t(Mr({schema:he,uiHints:e.uiHints,value:e.formValue,embedded:e.embeddedEditor===!0||!!me,rawAvailable:f,disabled:ye||!e.formValue||!C,unsupportedPaths:l.unsupportedPaths,onPatch:e.onFormPatch,onRemove:e.onFormRemove,activeSection:e.activeSection,activeSubsection:null,showAdvanced:ee,forceAdvancedSection:e.forceAdvancedSection,onShowAdvanced:()=>e.setShowAdvancedSettings(!0),onHideAdvanced:e.forceShowAdvanced?void 0:()=>e.setShowAdvancedSettings(!1),sectionActions:e.activeSection===`env`?E`<button
                                    class="btn btn--sm ${_?`active`:``}"
                                    aria-pressed=${_?`true`:`false`}
                                    title=${N(_?`configView.hideEnvValues`:`configView.revealEnvValues`)}
                                    @click=${()=>{n.envRevealed=!n.envRevealed,h()}}
                                  >
                                    ${_?M.eyeOff:M.eye}
                                    ${N(`configView.peek`)}
                                  </button>`:void 0,showSectionDocs:e.showSectionDocs,sectionPrelude:e.sectionPrelude,revealSensitive:e.activeSection===`env`&&_,isSensitivePathRevealed:e=>Zs(n,e),onToggleSensitivePath:e=>{Qs(n,e),h()}}))}
                  ${me&&!e.schemaLoading?Jo(pe,e,ye||!e.formValue||!C):O}
                `:(()=>{let t=Pr(e.formValue,[],e.uiHints),r=t>0&&!n.rawRevealed;return E`<div class="settings-page">
                    ${Se}
                    <!-- Raw editor: one group surface owning file-level operations. -->
                    <div class="settings-group">
                      <div class="settings-row settings-row--stacked">
                        <div class="config-raw-actions">
                          ${e.onOpenFile&&e.openFileAllowed!==!1?E`<button class="btn btn--sm" @click=${e.onOpenFile}>
                                  ${M.fileText} ${N(`configView.open`)}
                                </button>`:O}
                          <button
                            class="btn btn--sm"
                            ?disabled=${ye||!x}
                            @click=${e.onRawDiscard}
                          >
                            ${N(`configView.rawDiscard`)}
                          </button>
                          <button
                            class="btn btn--sm primary"
                            ?disabled=${!be}
                            aria-busy=${e.saving?`true`:`false`}
                            @click=${e.onSave}
                          >
                            ${e.saving?E`<span class="config-action-spinner" aria-hidden="true"
                                      >${M.loader}</span
                                    >${N(`common.saving`)}`:N(`common.save`)}
                          </button>
                        </div>
                        <div class="field config-raw-field">
                          <span style="display:flex;align-items:center;gap:8px;">
                            ${N(`configView.rawConfig`)}
                            ${t>0?E`<span class="settings-count"
                                      >${N(t===1?`configView.secretCount`:`configView.secretCountPlural`,{count:String(t)})}
                                      ${N(r?`configView.redacted`:`configView.visible`)}</span
                                    >
                                    <openclaw-tooltip
                                      .content=${N(r?`configView.revealSensitive`:`configView.hideSensitive`)}
                                    >
                                      <button
                                        class="btn btn--icon config-raw-toggle ${r?``:`active`}"
                                        aria-label=${N(`configView.toggleRawRedaction`)}
                                        aria-pressed=${!r}
                                        @click=${()=>{n.rawRevealed=!n.rawRevealed,h()}}
                                      >
                                        ${r?M.eyeOff:M.eye}
                                      </button>
                                    </openclaw-tooltip>`:O}
                          </span>
                          ${r?E`<div class="callout info" style="margin-top: 12px">
                                  ${N(t===1?`configView.sensitiveHidden`:`configView.sensitiveHiddenPlural`,{count:String(t)})}
                                </div>`:E`<textarea
                                  placeholder=${N(`configView.rawConfig`)}
                                  .value=${e.raw}
                                  ?disabled=${ye||!C}
                                  @input=${t=>{e.onRawChange(t.target.value)}}
                                ></textarea>`}
                        </div>
                      </div>
                    </div>
                  </div>`})()}
      ${e.issues.length>0?E`<div class="config-content-callout">
              <div class="callout danger">
                <pre class="code-block">
${Ae(qt(JSON.stringify(e.issues,null,2)))}</pre>
              </div>
            </div>`:O}
    </div>
  `}function nc(){return(nc=e((()=>{T(),je(),qe(),Fr(),Vr(),xr(),P(),Lt(),_n(),H(),j(),Zn(),ge(),qo(),Yo(),gs(),As(),Bs(),qs(),$s(),Xn(),le().catch(()=>void 0)})))()}function Q(e){let t=dr(e)?.[0]??null;if(t===null&&e!==`advanced`)throw Error(`Unknown config page`);return{activeSection:t,activeSubsection:null}}function rc(e,t,n){let r=dr(e)??null;return e===`advanced`&&t&&pr.has(t)?{activeSection:null,activeSubsection:null}:r&&(!t||!r.includes(t))?Q(e):{activeSection:t,activeSubsection:n}}function ic(e,t){let n=new URLSearchParams(t).get(`section`);return n?rc(e,n,null):Q(e)}function ac(e){return Pt(e)}function oc(e){switch(e){case`appearance`:return E`${N(`configView.appearance.intro`)}
      ${Qt(`https://docs.openclaw.ai/web/control-ui`)}`;case`mcp`:return E`${N(`mcpPage.intro`)} ${Qt(`https://docs.openclaw.ai/tools/mcp`)}`;case`security`:return E`${N(`quickSettings.security.intro`)}
      ${Qt(`https://docs.openclaw.ai/gateway/security`)}`;case`talk`:return E`${N(`talkPage.intro`)}
      ${Qt(`https://docs.openclaw.ai/nodes/talk`)}`;case`updates`:return N(`updates.page.intro`);default:return Ve(e)}}function sc(e){let t=l(e?.configForm)??l(e);if(!t)return{gatewayAuth:`unknown`,execPolicy:`unknown`,browserEnabled:!0,browserEnabledOverridden:!1,toolProfile:`full`,toolProfileOverridden:!1};let n=l(t.gateway),r=l(n?.auth),i=l(t.tools),a=l(i?.exec)??{},o=l(t.browser),s=`unknown`;r&&(s=(typeof r.mode==`string`?r.mode.trim():``)||(r.password?`password`:r.token?`token`:r.trustedProxy?`trusted-proxy`:`none`));let c=i?.profile,u=a.security;return{gatewayAuth:s,execPolicy:typeof u==`string`&&u.trim()?u.trim():`allowlist`,browserEnabled:o?.enabled!==!1,browserEnabledOverridden:o!==null&&Object.hasOwn(o,`enabled`),toolProfile:typeof c==`string`&&c.trim()?c.trim():`full`,toolProfileOverridden:i!==null&&Object.hasOwn(i,`profile`)}}function cc(e){typeof document>`u`||document.documentElement.style.setProperty(`--control-ui-text-scale`,(gt(e)/100).toFixed(2))}var lc,uc,dc,$;function fc(){return(fc=e((()=>{s(),Vt(),T(),w(),We(),et(),rt(),Ct(),Et(),Qe(),Ye(),qe(),ze(),Dt(),ot(),Be(),Bt(),vn(),H(),Cr(),j(),Zn(),Rn(),y(),we(),Kt(),ye(),Un(),S(),Gn(),_(),Bn(),nr(),Wr(),Xr(),or(),$r(),yi(),Ti(),Ai(),Ma(),vr(),Se(),Fa(),Ha(),xo(),No(),nc(),Xn(),lc={"communications:__notifications__":{routeId:`notifications`,keepSection:!1},"communications:channels":{routeId:`channels`,keepSection:!1},"communications:broadcast":{routeId:`advanced`,keepSection:!0},"communications:talk":{routeId:`talk`,keepSection:!0},"appearance:wizard":{routeId:`advanced`,keepSection:!0},"advanced:transcripts":{routeId:`communications`,keepSection:!0,advanced:!0},"automation:approvals":{routeId:`security`,keepSection:!0},"ai-agents:memory":{routeId:`memory`,keepSection:!0},"ai-agents:models":{routeId:`model-providers`,keepSection:!1}},uc=1e4,dc=new Map,$=class extends m{constructor(...e){super(...e),this.pageId=`advanced`,this.routeData=null,this.settings=Ne(),this.hiddenSessionCatalogIds=pn(),this.systemInfo=null,this.systemInfoUnavailable=!1,this.sessionObserverModels=[],this.sessionObserverModelsUnavailable=!1,this.mediaDeviceWatch=null,this.microphoneDevices=[],this.microphonePermissionRequired=!0,this.microphoneLoading=!1,this.microphoneError=null,this.microphoneLoaded=!1,this.microphoneRefreshRequestsPermission=!1,this.cameraDevices=[],this.cameraPermissionRequired=!0,this.cameraLoading=!1,this.cameraError=null,this.cameraLoaded=!1,this.cameraRefreshRequestsPermission=!1,this.cameraSelectionRequest=0,this.formModes={communications:`form`,appearance:`form`,notifications:`form`,security:`form`,automation:`form`,mcp:`form`,memory:`form`,talk:`form`,infrastructure:`form`,updates:`form`,"ai-agents":`form`,advanced:`form`},this.selections={communications:Q(`communications`),appearance:Q(`appearance`),notifications:Q(`notifications`),security:Q(`security`),automation:Q(`automation`),mcp:Q(`mcp`),memory:Q(`memory`),talk:Q(`talk`),infrastructure:Q(`infrastructure`),updates:Q(`updates`),"ai-agents":Q(`ai-agents`),advanced:Q(`advanced`)},this.customThemeImport=Zr,this.customThemeImportOwner=new Qr(e=>{this.customThemeImport=e}),this.configViewState=Js(),this.runtimeConfigSource=null,this.updateStatusClient=null,this.systemInfoPolling=new qn(this,uc,()=>{this.systemInfoTask.status!==F.PENDING&&this.systemInfoTask.run()},!1),this.updateCountdownPolling=new qn(this,1e3,()=>this.requestUpdate(),!1),this.systemInfoTask=new Ht(this,{autoRun:!1,args:()=>[this.gateway.gateway,this.systemInfoRequestClient()],task:([e,t],{signal:n})=>e&&t?t.request(`system.info`,{},{signal:n}):Ut,onComplete:e=>{this.systemInfo=e,this.sessionObserverModelsTask.status!==F.PENDING&&this.sessionObserverModelsTask.run()},onError:e=>{(Ce(e)||Hr(e))&&(this.systemInfo=null,this.systemInfoUnavailable=!0,this.systemInfoPolling.stop())}}),this.sessionObserverModelsTask=new Ht(this,{args:()=>[this.gateway.gateway,this.systemInfo?this.systemInfoRequestClient():null,this.context?.agentSelection.state.selectedId??null],task:async([e,t,n],{signal:r})=>{if(!e||!t||!n)return this.resetSessionObserverModels(!n),Ut;let i=this.sessionObserverModelsTask.value;(i?.gateway!==e||i.client!==t||i.agentId!==n)&&this.resetSessionObserverModels();let{models:a}=await ce(t,{agentId:n,preparedOnly:!0,signal:r});return{gateway:e,client:t,agentId:n,models:a}},onComplete:({models:e})=>{this.sessionObserverModels=e,this.sessionObserverModelsUnavailable=!1},onError:()=>this.resetSessionObserverModels(!0)}),this.hiddenSessionCatalogLabelsTask=new Ht(this,{args:()=>{let e=this.context?.gateway.snapshot,t=[...this.hiddenSessionCatalogIds].toSorted();return[this.pageId===`appearance`&&t.length>0&&Gt(e,`sessions.catalog.list`,`operator.read`)?e?.client:null,this.context?.agentSelection.state.selectedId??null,t.join(`\0`)]},task:async([e,t],{signal:n})=>{if(!e)return dc;try{let r=await e.request(`sessions.catalog.list`,{...t?{agentId:t}:{},limitPerHost:1},{signal:n});return new Map(r.catalogs.map(e=>[e.id,e.label]))}catch{return dc}}}),this.pendingRouteTargetId=null,this.gateway=new Wn(this,{getGateway:()=>this.context?.gateway,invalidateRequests:()=>this.invalidateSystemInfoRequest(),onSnapshot:e=>this.handleGatewaySnapshot(e)}),this.subscriptions=new h(this).watch(()=>this.context?.runtimeConfig,(e,t)=>e.subscribe(t),e=>this.synchronizeRuntimeConfig(e)).watch(()=>this.context?.overlays,(e,t)=>e.subscribe(t)).watch(()=>this.context?.config,(e,t)=>e.subscribe(t)).watch(()=>this.context?.agentSelection,(e,t)=>e.subscribe(t)).watch(()=>this.context?.nativeDeviceSettings??void 0,(e,t)=>e.subscribe(t)).watch(()=>this.context?.nativeNotifications??void 0,(e,t)=>e.subscribe(t)).watch(()=>this.context?.webPush,(e,t)=>e.subscribe(t)).watch(()=>this.context?.theme,(e,t)=>e.subscribe(t),()=>{this.settings=this.customThemeImportOwner.adoptSettings(this.settings,Ne(),this.context.theme.serverSelection)}),this.hiddenSessionCatalogsChanged=()=>{this.hiddenSessionCatalogIds=pn()},this.watchUpdateProgress=e=>bt(this.context)(e)}retireMediaPermissionRequests(){this.microphoneRefreshRequestsPermission=!1,this.cameraRefreshRequestsPermission=!1}connectedCallback(){super.connectedCallback(),this.hiddenSessionCatalogsChanged(),window.addEventListener(bn,this.hiddenSessionCatalogsChanged),this.customThemeImportOwner.connect(this.context.gateway.connection.gatewayUrl,this.context.theme.serverSelection),this.settings=Ne(),this.mediaDeviceWatch=Vn(()=>{this.refreshMicrophones(!1),this.refreshCameras(!1)}),this.syncRouteData()}disconnectedCallback(){window.removeEventListener(bn,this.hiddenSessionCatalogsChanged),this.customThemeImportOwner.retireImport(),this.retireMediaPermissionRequests(),this.mediaDeviceWatch?.(),this.mediaDeviceWatch=null,this.systemInfoPolling.stop(),this.updateCountdownPolling.stop(),this.runtimeConfigSource=null,this.resetConfigViewState(),this.updateStatusClient=null,this.subscriptions.clear(),super.disconnectedCallback()}willUpdate(e){e.get(`pageId`)===`appearance`&&this.pageId!==`appearance`&&(this.customThemeImportOwner.retireImport(),this.retireMediaPermissionRequests()),(e.has(`pageId`)||e.has(`routeData`))&&this.syncRouteData()}updated(e){e.has(`pageId`)&&e.get(`pageId`)!==void 0&&this.invalidateSystemInfoRequest(),this.syncSystemInfoPolling(),this.syncUpdateStatusRefresh(),this.syncUpdateCountdownPolling(),this.scrollToPendingRouteTarget(),this.pageId===`appearance`&&!this.microphoneLoaded&&(this.microphoneLoaded=!0,this.refreshMicrophones(!1)),this.pageId===`appearance`&&!this.cameraLoaded&&(this.cameraLoaded=!0,this.refreshCameras(!1))}async refreshMicrophones(e){if(this.microphoneLoading){this.microphoneRefreshRequestsPermission||=e;return}this.microphoneLoading=!0,this.microphoneRefreshRequestsPermission=e,this.microphoneError=null;try{let e=await zn(()=>this.microphoneRefreshRequestsPermission);this.microphoneDevices=e.devices,this.microphonePermissionRequired=e.permissionRequired,this.microphoneError=e.issue?Jn(e.issue,`audioinput`):null}catch(e){this.microphoneError=C(e)}finally{this.microphoneLoading=!1,this.microphoneRefreshRequestsPermission=!1}}async refreshCameras(e){if(this.cameraLoading){this.cameraRefreshRequestsPermission||=e;return}this.cameraLoading=!0,this.cameraRefreshRequestsPermission=e,this.cameraError=null;try{let e=await Hn(()=>this.cameraRefreshRequestsPermission);this.cameraDevices=e.devices,this.cameraPermissionRequired=e.permissionRequired,this.cameraError=e.issue?Jn(e.issue,`videoinput`):null}catch(e){this.cameraError=C(e)}finally{this.cameraLoading=!1,this.cameraRefreshRequestsPermission=!1}}syncRouteData(){let e=this.routeData?this.routeData.section:new URLSearchParams(globalThis.location?.search??``).get(`section`);if(e){let t=lc[`${this.pageId}:${e}`];if(t){this.context?.navigate(t.routeId,{search:t.keepSection?`?section=${encodeURIComponent(e)}${t.advanced?`&advanced=1`:``}`:``,hash:this.routeData?.hash??globalThis.location?.hash??``});return}}let t=this.routeData?rc(this.pageId,this.routeData.section,null):ic(this.pageId,globalThis.location?.search??``);this.selections={...this.selections,[this.pageId]:t};let n=this.routeData?.targetBlockId??me(globalThis.location?.hash??``);this.pendingRouteTargetId=n}scrollToPendingRouteTarget(){let e=this.pendingRouteTargetId;if(!e)return;let t=[...this.renderRoot.querySelectorAll(`[id]`)].find(t=>t.id===e);t&&(t.scrollIntoView?.({behavior:Kn(),block:`start`}),this.pendingRouteTargetId=null)}isSystemInfoVisible(){return this.pageId===`appearance`}syncUpdateCountdownPolling(){let e=this.context?.overlays.snapshot.updateSchedule?.campaign;if(this.pageId===`updates`&&(e?.state===`countdown`||e?.state===`waiting-for-idle`)){this.updateCountdownPolling.start();return}this.updateCountdownPolling.stop()}syncUpdateStatusRefresh(){let e=this.context.gateway.snapshot,t=this.pageId===`updates`&&e.phase===`connected`&&Gt(e,`update.status`,`operator.admin`)?e.client:null;t!==this.updateStatusClient&&(this.updateStatusClient=t,t&&this.context.overlays.refreshUpdateStatus())}synchronizeRuntimeConfig(e){e!==this.runtimeConfigSource&&(this.runtimeConfigSource&&this.customThemeImportOwner.retireImport(),this.runtimeConfigSource=e,this.resetConfigViewState());let t=e.state;if(!t.configSnapshot&&!t.configLoading){e.ensureLoaded().then(()=>this.runtimeConfigSource===e&&this.pageId!==`updates`?e.ensureSchemaLoaded():void 0).catch(()=>void 0);return}this.pageId!==`updates`&&!t.configSchema&&!t.configSchemaLoading&&e.ensureSchemaLoaded().catch(()=>void 0)}resetConfigViewState(){this.configViewState=Js()}handleGatewaySnapshot({snapshot:e,initial:t,sourceChanged:n,clientChanged:r}){this.customThemeImportOwner.synchronizeScope(this.context.gateway.connection.gatewayUrl,this.context.theme.serverSelection),(t||n)&&(this.systemInfoPolling.stop(),this.resetConfigViewState(),this.updateStatusClient=null),t||n||r?(this.systemInfo=null,this.systemInfoUnavailable=!1,this.resetSessionObserverModels()):e.phase!==`connected`&&(this.systemInfo=null),e.phase===`connected`&&e.hello&&(this.systemInfoUnavailable=!Ur(e.hello),this.systemInfoUnavailable&&(this.invalidateSystemInfoRequest(),this.systemInfo=null)),this.syncSystemInfoPolling(r),this.syncUpdateStatusRefresh()}syncSystemInfoPolling(e=!1){let t=this.context.gateway.snapshot;if(!(this.isConnected&&this.isSystemInfoVisible()&&!this.systemInfoUnavailable&&t.phase===`connected`&&Ur(t.hello)&&t.client!=null)){this.systemInfoPolling.stop();return}(this.systemInfoPolling.start()||e)&&this.systemInfoTask.run()}invalidateSystemInfoRequest(){this.systemInfoTask.run([null,null]),this.sessionObserverModelsTask.run([null,null,null]),this.resetSessionObserverModels()}systemInfoRequestClient(){let e=this.gateway.gateway,t=e?.snapshot;return!e||!t||!this.isConnected||!this.isSystemInfoVisible()||this.context.gateway!==e||t.phase!==`connected`||!Ur(t.hello)||this.systemInfoUnavailable?null:t.client}resetSessionObserverModels(e=!1){this.sessionObserverModels=[],this.sessionObserverModelsUnavailable=e}setFormMode(e){this.formModes={...this.formModes,[this.pageId]:e}}setActiveSection(e){this.selections={...this.selections,[this.pageId]:{activeSection:e,activeSubsection:null}}}setActiveSubsection(e){this.selections={...this.selections,[this.pageId]:{...this.selections[this.pageId],activeSubsection:e}}}applySettings(e){this.settings=wt(e),cc(this.settings.textScale),this.context.theme.refresh()}setLocale(e){if(e===void 0){this.resetLocale();return}this.settings=wt({locale:e}),Rt.setLocale(e)}currentSyncedPref(e){return St(this.context.runtimeConfig.state.configSnapshot?.config,e,this.context.gateway.connection.gatewayUrl,this.settings,lt(e)?{canSync:this.serverUiPrefsCanSync(e),profileId:this.context.gateway.snapshot?.selfUser?.id}:{canSync:this.serverUiPrefsCanSync()})}setFont(e,t){let n=this.currentSyncedPref(e);n.overridden&&t===n.resetValue?this.resetSyncedAppearancePref(e):this.applySettings({[e]:t})}serverUiPrefsCanSync(e){let t=this.context.runtimeConfig;if(!t.state.connected)return null;let n=this.context.gateway.snapshot;return(e===`fontUi`||e===`fontChat`)&&!n?.selfUser?!1:e&&n?.selfUser?ht(n.hello?.auth??null):t.canPatch!==!1}resetLocale(){this.settings=mt(`locale`,this.currentSyncedPref(`locale`),this.context.gateway.connection.gatewayUrl),Ft(this.settings.locale)?Rt.setLocale(this.settings.locale):Rt.useSystemLocale()}resetSyncedAppearancePref(e){this.settings=mt(e,this.currentSyncedPref(e),this.context.gateway.connection.gatewayUrl),this.context.theme.refresh()}setTheme(e,t){let n=this.currentSyncedPref(`theme`),r=n.overridden&&e===n.resetValue;this.customThemeImportOwner.recordActivation(r?null:e);let i=Nt(this.settings.theme,this.settings.themeMode);yt({currentTheme:i,nextTheme:Nt(e,this.settings.themeMode),context:t,applyTheme:()=>r?this.resetSyncedAppearancePref(`theme`):this.applySettings({theme:e})})}setThemeMode(e,t){let n=this.currentSyncedPref(`themeMode`),r=n.overridden&&e===n.resetValue,i=Nt(this.settings.theme,this.settings.themeMode);yt({currentTheme:i,nextTheme:Nt(this.settings.theme,e),context:t,applyTheme:()=>r?this.resetSyncedAppearancePref(`themeMode`):this.applySettings({themeMode:e})})}setSetting(e,t){this.applySettings({[e]:t})}selectMicrophone(e){this.applySettings({realtimeTalkInputDeviceId:e.trim()||void 0})}async selectCamera(e){let t=++this.cameraSelectionRequest,n=e.trim()||void 0;this.cameraError=null;try{if(await rr(n),t!==this.cameraSelectionRequest)return;this.applySettings({realtimeTalkVideoDeviceId:n})}catch(e){t===this.cameraSelectionRequest&&(this.cameraError=C(e))}}async importCustomTheme(){await this.customThemeImportOwner.import({config:this.context.runtimeConfig.state,hasCustomTheme:!!this.settings.customTheme,load:ui,apply:(e,t)=>this.applySettings({customTheme:e,theme:t?`custom`:this.settings.theme}),messages:{blocked:e=>N(e===`loading`?`common.loading`:`common.unsavedChanges`),imported:e=>N(`configPage.themeImported`,{name:e})}})}clearCustomTheme(){this.customThemeImportOwner.clear({apply:()=>this.applySettings({theme:this.settings.theme===`custom`?`claw`:this.settings.theme,customTheme:void 0}),message:N(`configPage.themeRemoved`)})}includeSections(){return dr(this.pageId)}isUpdateBusy(){let e=this.context.overlays.snapshot;return e.updateRunning||e.updateStatusRefreshing||e.updateReconciliationPending}isCuratedConfigMutationDisabled(){let e=this.context.runtimeConfig.state;return!e.connected||e.configLoading||e.configSaving||e.configApplying||this.isUpdateBusy()||!this.context.runtimeConfig.canSet||!pt(this.context.gateway.snapshot.hello?.auth??null)}renderAdvancedConfig(e){let t=this.context.runtimeConfig,n=t.state;if(this.pageId===`updates`){let n=this.context.gateway.snapshot,r=this.context.overlays.snapshot,i=pt(n.hello?.auth??null);return Mo({nativeDeviceSettings:this.context.nativeDeviceSettings,configObject:e,gatewayVersion:this.context.config.current.serverVersion??n.hello?.server?.version??null,controlUiCommit:zt.commit,controlUiCommitAt:zt.commitAt,controlUiBuiltAt:zt.builtAt,schedule:r.updateSchedule,heldUpdateCampaignId:r.heldUpdateCampaignId,updateAvailable:r.updateAvailable,statusBanner:r.updateStatusBanner,reportableUpdateFailureId:r.reportableUpdateFailureId,updateFailureReportBusy:r.updateFailureReportBusy,updateFailureReportNotice:r.updateFailureReportNotice,run:r.updateRun,connected:n.phase===`connected`,configBusy:this.isCuratedConfigMutationDisabled(),canAdmin:i,canUpdate:Gt(n,`update.run`,`operator.admin`),canCheckStatus:Gt(n,`update.status`,`operator.admin`),canHoldUpdate:Gt(n,`update.hold`,`operator.admin`),canReport:Ie(n),updateBusy:this.isUpdateBusy(),onChannelChange:e=>t.patchForm([`update`,`channel`],e),onUpdateChecksChange:e=>t.patchForm([`update`,`checkOnStart`],e),onAutomaticUpdatesChange:e=>t.patchForm([`update`,`auto`,`enabled`],e),onUpdateNow:()=>void ft({startGatewayUpdate:()=>void this.context.overlays.runUpdate(),watchUpdateProgress:this.watchUpdateProgress,onCheckStatus:()=>this.context.overlays.refreshUpdateStatus(),onAcknowledge:()=>this.context.overlays.acknowledgeUpdateRun(),updateAvailable:r.updateAvailable,updateSchedule:r.updateSchedule,viaNativeApp:!1}),onHoldUpdate:()=>this.context.overlays.holdUpdate(),onCheckStatus:()=>this.context.overlays.refreshUpdateStatus(),onReportFailure:e=>this.context.overlays.reportUpdateFailure(e)})}let r=this.includeSections(),i=this.pageId===`advanced`?[...pr]:void 0,a=rc(this.pageId,this.selections[this.pageId].activeSection,this.selections[this.pageId].activeSubsection),o=this.pageId===`mcp`?`mcp`:a.activeSection,s=Mt(this.context.gateway.snapshot),c=this.pageId===`mcp`?null:a.activeSubsection,u=l(e.gateway),d=l(u?.controlUi),ee=l(l(e.agents)?.defaults),f=this.currentSyncedPref(`theme`),p=this.currentSyncedPref(`themeMode`),te=this.currentSyncedPref(`accent`),m=this.currentSyncedPref(`locale`),h=this.currentSyncedPref(`chatSendShortcut`),g=this.currentSyncedPref(`chatFollowUpMode`),ne=!n.connected||n.configSaving||n.configApplying||this.isUpdateBusy()||!pt(this.context.gateway.snapshot.hello?.auth??null),_={raw:n.configRaw,originalRaw:n.configRawOriginal,valid:n.configValid,issues:n.configIssues,loading:n.configLoading,saving:n.configSaving,applying:n.configApplying,updating:this.isUpdateBusy(),connected:n.connected,mutationAllowed:t.canSet,openFileAllowed:t.canOpenFile,schema:n.configSchema,schemaLoading:n.configSchemaLoading,uiHints:n.configUiHints,formMode:this.formModes[this.pageId],rawDraftPending:n.configFormMode===`raw`&&n.configFormDirty,viewState:this.configViewState,rawAvailable:!!(n.configSnapshot?.config||n.configForm||n.configRaw),showModeToggle:this.pageId===`advanced`,formValue:n.configForm,originalValue:n.configFormOriginal,activeSection:o,activeSubsection:c,onRawChange:e=>{this.customThemeImportOwner.retireForConfigMutation(N(`common.unsavedChanges`)),t.setRaw(e)},onFormModeChange:e=>this.setFormMode(e),onViewStateChange:()=>this.requestUpdate(),onFormPatch:(e,n)=>{this.customThemeImportOwner.retireForConfigMutation(N(`common.unsavedChanges`)),t.patchForm(e,n)},onFormRemove:e=>{this.customThemeImportOwner.retireForConfigMutation(N(`common.unsavedChanges`)),t.removeFormValue(e)},onSectionChange:e=>this.setActiveSection(e),onSubsectionChange:e=>this.setActiveSubsection(e),onSave:()=>void t.save(),onRawDiscard:()=>void t.discardDraft(),onOpenFile:()=>void t.openFile(),version:this.context.config.current.serverVersion??this.context.gateway.snapshot.hello?.server?.version??``,theme:this.settings.theme,themeOverridden:f.overridden,themeProvenance:f.provenance,themeResetValue:f.resetValue??A.theme,themeMode:this.settings.themeMode,themeModeOverridden:p.overridden,themeModeProvenance:p.provenance,themeModeResetValue:p.resetValue??A.themeMode,accent:this.settings.accent,accentProvenance:te.provenance,accentResetValue:te.resetValue,fontUi:this.settings.fontUi,fontChat:this.settings.fontChat,fontUiProvenance:this.currentSyncedPref(`fontUi`).provenance,fontChatProvenance:this.currentSyncedPref(`fontChat`).provenance,setFontUi:e=>this.setFont(`fontUi`,e),setFontChat:e=>this.setFont(`fontChat`,e),systemLocale:Rt.getSystemLocale(),localeOverride:Ft(m.value)?m.value:void 0,localeOverridden:m.overridden,localeProvenance:m.provenance,localeResetValue:Ft(m.resetValue)?m.resetValue:void 0,onLocaleChange:e=>this.setLocale(e),setTheme:(e,t)=>this.setTheme(e,t),setThemeMode:(e,t)=>this.setThemeMode(e,t),setAccent:e=>e===void 0?this.resetSyncedAppearancePref(`accent`):this.applySettings({accent:e}),hasCustomTheme:!!this.settings.customTheme,customThemeLabel:this.settings.customTheme?.label??null,customThemeSourceUrl:this.settings.customTheme?.sourceUrl??null,customThemeImportUrl:this.customThemeImport.url,customThemeImportBusy:this.customThemeImport.busy,customThemeImportMessage:this.customThemeImport.message,customThemeImportExpanded:this.customThemeImport.expanded,customThemeImportFocusToken:this.customThemeImport.focusToken,onCustomThemeImportUrlChange:e=>this.customThemeImportOwner.setUrl(e),onImportCustomTheme:()=>void this.importCustomTheme(),onClearCustomTheme:()=>this.clearCustomTheme(),onOpenCustomThemeImport:()=>this.customThemeImportOwner.open(),textScale:this.settings.textScale??A.textScale,textScaleOverridden:this.settings.textScale!==void 0,setTextScale:e=>this.setSetting(`textScale`,e===A.textScale?void 0:gt(e)),sidebarLiveActivity:this.settings.sidebarLiveActivity??A.sidebarLiveActivity,setSidebarLiveActivity:e=>this.setSetting(`sidebarLiveActivity`,e),hiddenSessionCatalogIds:this.hiddenSessionCatalogIds,hiddenSessionCatalogLabels:this.hiddenSessionCatalogLabelsTask.status===F.COMPLETE?this.hiddenSessionCatalogLabelsTask.value??dc:dc,setSessionCatalogHidden:Dn,chatMessageMaxWidth:this.settings.chatMessageMaxWidth,setChatMessageMaxWidth:e=>this.setSetting(`chatMessageMaxWidth`,e),chatCollapseTaskProgress:this.settings.chatCollapseTaskProgress===!0,setChatCollapseTaskProgress:e=>this.setSetting(`chatCollapseTaskProgress`,e),showAdvancedSettings:this.settings.showAdvancedSettings===!0,setShowAdvancedSettings:e=>this.setSetting(`showAdvancedSettings`,e),forceShowAdvanced:this.pageId===`advanced`,forceAdvancedSection:this.routeData?.advanced?this.routeData.section:null,sessionObserverEnabled:d?.sessionObserver!==!1,sessionObserverUtilityModel:typeof ee?.utilityModel==`string`?ee.utilityModel:void 0,sessionObserverResolvedModel:this.systemInfo?.defaultAgentUtilityModel,sessionObserverModels:this.sessionObserverModels,sessionObserverModelsUnavailable:this.sessionObserverModelsUnavailable,sessionObserverDisabled:ne,setSessionObserverEnabled:e=>{t.patch({raw:Ia(e),note:N(`configView.sessionObserver.toggleNote`)})},setSessionObserverUtilityModel:e=>{t.patch({raw:La(e),note:N(`configView.sessionObserver.modelNote`)}).then(e=>{e&&this.systemInfoTask.run()})},lobsterPetVisits:this.settings.lobsterPetVisits??A.lobsterPetVisits,setLobsterPetVisits:e=>this.applySettings({lobsterPetVisits:e}),sessionDeleteConfirm:this.settings.sessionDeleteConfirm??A.sessionDeleteConfirm,setSessionDeleteConfirm:e=>this.applySettings({sessionDeleteConfirm:e}),lobsterPetSounds:this.settings.lobsterPetSounds??A.lobsterPetSounds,setLobsterPetSounds:e=>this.applySettings({lobsterPetSounds:e}),lobsterdexHref:it(`lobsterdex`,this.context.basePath),onOpenLobsterdex:()=>this.context.navigate(`lobsterdex`),chatSendShortcut:st(this.settings.chatSendShortcut),chatSendShortcutOverridden:h.overridden,chatSendShortcutProvenance:h.provenance,chatSendShortcutResetValue:h.resetValue??A.chatSendShortcut,setChatSendShortcut:e=>this.setSetting(`chatSendShortcut`,e),chatFollowUpMode:this.settings.chatFollowUpMode,chatFollowUpModeOverridden:g.overridden,chatFollowUpModeProvenance:g.provenance,serverQueueMode:n.configSnapshot?Nn(n.configSnapshot.runtimeConfig,{configNeedsApply:n.configNeedsApply}):void 0,setChatFollowUpMode:e=>this.setSetting(`chatFollowUpMode`,e),resetChatFollowUpMode:()=>this.resetSyncedAppearancePref(`chatFollowUpMode`),catalogOpenTarget:tt(this.settings.catalogOpenTarget),setCatalogOpenTarget:e=>this.setSetting(`catalogOpenTarget`,e),microphone:{devices:this.microphoneDevices,permissionRequired:this.microphonePermissionRequired,selectedDeviceId:this.settings.realtimeTalkInputDeviceId??``,loading:this.microphoneLoading,error:this.microphoneError},composerHoldToRecord:this.settings.composerHoldToRecord!==!1,setComposerHoldToRecord:e=>this.setSetting(`composerHoldToRecord`,e),onMicrophoneRefresh:()=>void this.refreshMicrophones(!0),onMicrophoneSelect:e=>this.selectMicrophone(e),camera:{devices:this.cameraDevices,permissionRequired:this.cameraPermissionRequired,selectedDeviceId:this.settings.realtimeTalkVideoDeviceId??``,loading:this.cameraLoading,error:this.cameraError},onCameraRefresh:()=>void this.refreshCameras(!0),onCameraSelect:e=>void this.selectCamera(e),gatewayUrl:this.context.gateway.connection.gatewayUrl,assistantName:this.context.config.current.assistantIdentity.name,configPath:n.configSnapshot?.path??null,navRootLabel:this.pageId===`advanced`?void 0:ac(this.pageId),showSectionDocs:this.pageId!==`communications`,renderSection:this.pageId===`communications`&&o===`transcripts`?e=>Di({mutationDisabled:this.isCuratedConfigMutationDisabled(),advancedExpanded:this.routeData?.advanced===!0||this.routeData?.targetBlockId===`config-section-transcripts`,editor:e}):void 0,sectionPrelude:o===`browser`&&s&&!Ke()?Yr({enabled:this.settings.openLinksInControlUiBrowser===!0,onChange:e=>this.setSetting(`openLinksInControlUiBrowser`,e)}):void 0,showRootTab:!r?.length,includeSections:r?[...r]:void 0,excludeSections:i,includeVirtualSections:this.pageId===`appearance`||this.pageId===`notifications`,settingsLayout:this.pageId===`advanced`?`accordion`:void 0,nativeNotifications:this.context.nativeNotifications?.snapshot,onNativeNotificationsRequestPermission:()=>this.context.nativeNotifications?.requestPermission(),onNativeNotificationsSendTest:()=>this.context.nativeNotifications?.sendTest(),webPush:this.context.webPush.snapshot,onWebPushSubscribe:()=>void this.context.webPush.run({kind:`enable`}),onWebPushUnsubscribe:()=>void this.context.webPush.run({kind:`disable`}),onWebPushTest:()=>void this.context.webPush.run({kind:`test`}),onWebPushSetUserPreferences:e=>void this.context.webPush.run({kind:`set`,scope:`user`,preferences:e}),onWebPushSetDevicePreferences:e=>void this.context.webPush.run({kind:`set`,scope:`device`,preferences:e})};if(this.pageId===`mcp`)return Ci({configObject:e,pluginsHref:it(`plugins`,this.context.basePath),editor:tc({..._,activeSection:`mcp`,activeSubsection:null,showModeToggle:!1,embeddedEditor:!0,navRootLabel:`MCP`})});if(this.pageId===`memory`)return Oa({configObject:e,mutationDisabled:this.isCuratedConfigMutationDisabled(),pluginsHref:it(`plugins`,this.context.basePath),memoryImportHref:it(`memory-import`,this.context.basePath),routeData:this.routeData,buildEditor:e=>tc({..._,schema:lr(_.schema,e),activeSection:`memory`,activeSubsection:null,showModeToggle:!1,embeddedEditor:!0,navRootLabel:N(`tabs.memory`)})});if(this.pageId===`talk`)return _o({configObject:e,mutationDisabled:this.isCuratedConfigMutationDisabled(),buildEditor:()=>tc({..._,activeSection:`talk`,activeSubsection:null,showModeToggle:!1,embeddedEditor:!0,navRootLabel:N(`tabs.talk`)})});if(this.pageId===`security`){let n=t.state,r=this.isCuratedConfigMutationDisabled();return Pa({security:sc(e),configBusy:r,canPairDevice:n.connected&&pt(this.context.gateway.snapshot.hello?.auth??null),onPairMobile:()=>void this.context.overlays.openDevicePairSetup(),onBrowserEnabledToggle:e=>{if(e){t.removeFormValue([`browser`,`enabled`]);return}t.patchForm([`browser`,`enabled`],!1)},onToolProfileChange:e=>{if(e===`full`){t.removeFormValue([`tools`,`profile`]);return}t.patchForm([`tools`,`profile`],e)},editor:tc({..._,embeddedEditor:!0})})}return tc(_)}render(){let e=this.context.runtimeConfig.state,t=l(e.configForm??e.configSnapshot?.config)??{},n=this.renderAdvancedConfig(t);return E`
      ${this.pageId===`memory`?O:E`
              ${on({title:ac(this.pageId),subtitle:oc(this.pageId)})}
            `}
      ${Sr(n)}
    `}},r([a({context:ut,subscribe:!0})],$.prototype,`context`,void 0),r([k({attribute:`page-id`})],$.prototype,`pageId`,void 0),r([k({attribute:!1})],$.prototype,`routeData`,void 0),r([D()],$.prototype,`settings`,void 0),r([D()],$.prototype,`hiddenSessionCatalogIds`,void 0),r([D()],$.prototype,`systemInfo`,void 0),r([D()],$.prototype,`systemInfoUnavailable`,void 0),r([D()],$.prototype,`sessionObserverModels`,void 0),r([D()],$.prototype,`sessionObserverModelsUnavailable`,void 0),r([D()],$.prototype,`microphoneDevices`,void 0),r([D()],$.prototype,`microphonePermissionRequired`,void 0),r([D()],$.prototype,`microphoneLoading`,void 0),r([D()],$.prototype,`microphoneError`,void 0),r([D()],$.prototype,`cameraDevices`,void 0),r([D()],$.prototype,`cameraPermissionRequired`,void 0),r([D()],$.prototype,`cameraLoading`,void 0),r([D()],$.prototype,`cameraError`,void 0),r([D()],$.prototype,`formModes`,void 0),r([D()],$.prototype,`selections`,void 0),r([D()],$.prototype,`customThemeImport`,void 0),customElements.get(`openclaw-config-page`)||customElements.define(`openclaw-config-page`,$)})))()}fc();
//# sourceMappingURL=config-page-XsHkGyrB.js.map