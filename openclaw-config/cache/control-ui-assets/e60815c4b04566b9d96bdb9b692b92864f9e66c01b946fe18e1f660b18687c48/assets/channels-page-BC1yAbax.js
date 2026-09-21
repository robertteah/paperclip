import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,L as n,R as r,Zn as i,rr as a}from"./control-ui-foundation-DMb6IeIq.js";import{Cn as o,Cr as s,En as c,Gc as l,Gn as u,Jo as d,Kn as f,Qt as p,Sn as m,Uo as h,Yo as g,on as _,qc as ee,qo as v,tn as y,vn as te,wn as ne,xn as re,yr as ie}from"./control-ui-core-DzidtL-P.js";import{$ as ae,K as b,X as x,at as S,m as oe,p as se,q as C}from"./lit-runtime-vxhGQLC6.js";import{$ as ce,H as le,Rn as ue,Tn as de,W as fe,X as pe,h as me,in as w,m as he,nn as ge,sn as _e,st as ve,zn as ye}from"./control-ui-core-CaKBexnk.js";import{Bt as T,Ft as E,Gt as D,It as be,Ut as xe,kt as O}from"./control-ui-core-uEI6aN5p.js";import{Ar as Se,Et as Ce,Lt as k,Nt as we,Ot as A,jt as Te,wt as j,zt as M}from"./control-ui-boot-shared-Cyt1Zyts.js";import{Nt as Ee,Pt as De}from"./control-ui-boot-chat-pu3gR1ly.js";import{Qs as Oe,Zs as ke,bs as Ae,oi as je,ys as Me}from"./control-ui-boot-shared-CH-OC11d.js";import{i as N,n as Ne,r as P,t as Pe}from"./channel-picker-3xBUJFfK.js";import{n as Fe,t as Ie}from"./select-picker-DnWtx1hT.js";import{n as F,r as Le,t as Re}from"./wizard-step-controls-BVdQYpIH.js";import{f as ze,p as Be}from"./control-ui-boot-chat-CDBbQQw1.js";import{n as Ve,t as He}from"./settings-workspace-IBRfeTG9.js";import{c as Ue,l as We,n as Ge,o as Ke,t as qe,u as Je}from"./config-form-DfDQdICi.js";async function Ye(e,t){let n=new AbortController,r=setTimeout(()=>n.abort(new DOMException(`Nostr profile request timed out after 30 seconds`,`TimeoutError`)),et);try{let r=await fetch(e,{...t,signal:n.signal}),i=null;try{i=await r.json()}catch(e){if(n.signal.aborted)throw n.signal.reason??e}return{data:i,response:r}}finally{clearTimeout(r)}}function Xe(e){if(!Array.isArray(e))return{};let t={};for(let n of e){if(typeof n!=`string`)continue;let[e,...r]=n.split(`:`);if(!e||r.length===0)continue;let i=e.trim(),a=r.join(`:`).trim();i&&a&&(t[i]=d(a))}return t}function Ze(e,t=``){return`/api/channels/nostr/${encodeURIComponent(e)}/profile${t}`}async function Qe(e){return await Ye(Ze(e.accountId),{method:`PUT`,headers:{"Content-Type":`application/json`,...e.headers},body:JSON.stringify(e.values)})}async function $e(e){return await Ye(Ze(e.accountId,`/import`),{method:`POST`,headers:{"Content-Type":`application/json`,...e.headers},body:JSON.stringify({autoMerge:!0})})}var et;function I(){return(I=e((()=>{g(),et=3e4})))()}var tt,nt;function rt(){return(rt=e((()=>{Be(),tt=1e4,nt=class{constructor(e){this.hooks=e,this.catalog=null,this.iconUrls={},this.request=null,this.pendingEnsureClient=null}get pluginCatalog(){return this.catalog}get pluginIconUrls(){return this.iconUrls}ensure(e){if(!e)return;if(this.request?.client===e){this.catalog&&(this.pendingEnsureClient=e);return}if(this.catalog){this.startIconLoad(e,this.catalog);return}this.request?.controller.abort();let t=new AbortController,n={client:e,controller:t};this.request=n,e.request(`plugins.list`,{},{signal:t.signal}).then(async t=>{this.request===n&&this.hooks.getContext().gateway.snapshot.client===e&&(this.catalog=t,this.hooks.requestUpdate(),await this.loadIcons(t,n))}).catch(()=>{}).finally(()=>this.finishRequest(n))}startIconLoad(e,t){this.request?.controller.abort();let n={client:e,controller:new AbortController};this.request=n,this.loadIcons(t,n).finally(()=>this.finishRequest(n))}async loadIcons(e,t){t.iconTimeout=setTimeout(()=>t.controller.abort(new DOMException(`plugin icon fetch timed out`,`TimeoutError`)),tt);let n=new Set(this.hooks.getChannelIds()),r=await Promise.all(e.plugins.filter(e=>e.hasIcon&&n.has(e.id)&&!this.iconUrls[e.id]).map(async e=>{let n=this.hooks.getContext(),r=await ze({pluginId:e.id,resourceBasePath:n.resourceBasePath,gatewayUrl:n.gateway.connection.gatewayUrl,auth:{hello:n.gateway.snapshot.hello,settings:{token:n.gateway.connection.token},password:n.gateway.connection.password},signal:t.controller.signal}).catch(()=>null);return[e.id,r]})),i=Object.fromEntries(r.filter(e=>e[1]!==null));if(this.request!==t||!this.hooks.isConnected()){for(let e of Object.values(i))URL.revokeObjectURL(e);return}this.iconUrls={...this.iconUrls,...i},this.hooks.requestUpdate()}finishRequest(e){if(e.iconTimeout&&clearTimeout(e.iconTimeout),this.request!==e)return;this.request=null;let t=this.pendingEnsureClient;this.pendingEnsureClient=null,t&&this.hooks.isConnected()&&this.ensure(t)}reset(){this.request?.controller.abort(),this.request?.iconTimeout&&clearTimeout(this.request.iconTimeout),this.request=null,this.pendingEnsureClient=null;for(let e of Object.values(this.iconUrls))URL.revokeObjectURL(e);this.catalog=null,this.iconUrls={},this.hooks.requestUpdate()}}})))()}function it(e){let{values:t,original:n}=e;return t.name!==n.name||t.displayName!==n.displayName||t.about!==n.about||t.picture!==n.picture||t.banner!==n.banner||t.website!==n.website||t.nip05!==n.nip05||t.lud16!==n.lud16}function at(e){let{state:t,callbacks:n,accountId:r}=e,i=it(t),a=(e,r,i={})=>{let{type:a=`text`,placeholder:o,maxLength:s,help:c}=i,l=t.values[e]??``,u=t.fieldErrors[e],d=`nostr-profile-${e}`,f=a===`textarea`?x`
            <textarea
              id="${d}"
              class="settings-input"
              .value=${l}
              placeholder=${o??``}
              maxlength=${s??2e3}
              rows="3"
              @input=${t=>{let r=t.target;n.onFieldChange(e,r.value)}}
              ?disabled=${t.saving}
            ></textarea>
          `:x`
            <input
              id="${d}"
              class="settings-input"
              type=${a}
              .value=${l}
              placeholder=${o??``}
              maxlength=${s??256}
              @input=${t=>{let r=t.target;n.onFieldChange(e,r.value)}}
              ?disabled=${t.saving}
            />
          `;return x`
      <div class="settings-row settings-row--stacked">
        <div class="settings-row__text">
          <label class="settings-row__title" for="${d}">${r}</label>
          ${c?x`<span class="settings-row__desc">${c}</span>`:C}
          ${u?x`<span class="settings-row__desc" style="color: var(--danger);">${u}</span>`:C}
        </div>
        <div class="settings-row__control">${f}</div>
      </div>
    `};return x`
    <div class="settings-row">
      <div class="settings-row__text">
        <span class="settings-row__title">${D(`channels.nostr.editProfile`)}</span>
        <span class="settings-row__desc">${D(`channels.nostr.account`)}: ${r}</span>
      </div>
    </div>

    ${t.error?x`
            <div class="settings-row">
              <div class="settings-row__text">
                <span class="settings-row__title"
                  >${M({kind:`danger`,label:D(`channels.lastError`)})}</span
                >
                <span class="settings-row__desc">${t.error}</span>
              </div>
            </div>
          `:C}
    ${t.success?x`
            <div class="settings-row">
              <div class="settings-row__text">
                <span class="settings-row__desc">${t.success}</span>
              </div>
            </div>
          `:C}
    ${(()=>{let e=t.values.picture;return e?x`
      <div class="settings-row">
        <div class="settings-row__text">
          <span class="settings-row__title">${D(`channels.nostr.profilePicturePreview`)}</span>
        </div>
        <div class="settings-row__control">
          <img
            src=${e}
            alt=${D(`channels.nostr.profilePicturePreview`)}
            style="max-width: 80px; max-height: 80px; border-radius: 50%; object-fit: cover;"
            @error=${e=>{let t=e.target;t.style.display=`none`}}
            @load=${e=>{let t=e.target;t.style.display=`block`}}
          />
        </div>
      </div>
    `:C})()}
    ${a(`name`,D(`channels.nostr.username`),{placeholder:D(`channels.nostr.placeholders.username`),maxLength:256,help:D(`channels.nostr.usernameHelp`)})}
    ${a(`displayName`,D(`channels.nostr.displayName`),{placeholder:D(`channels.nostr.placeholders.displayName`),maxLength:256,help:D(`channels.nostr.displayNameHelp`)})}
    ${a(`about`,D(`channels.nostr.bio`),{type:`textarea`,placeholder:D(`channels.nostr.bioPlaceholder`),maxLength:2e3,help:D(`channels.nostr.bioHelp`)})}
    ${a(`picture`,D(`channels.nostr.avatarUrl`),{type:`url`,placeholder:D(`channels.nostr.placeholders.avatarUrl`),help:D(`channels.nostr.avatarHelp`)})}
    ${t.showAdvanced?x`
            <div class="settings-row">
              <div class="settings-row__text">
                <span class="settings-row__title">${D(`channels.nostr.advanced`)}</span>
              </div>
            </div>

            ${a(`banner`,D(`channels.nostr.bannerUrl`),{type:`url`,placeholder:D(`channels.nostr.placeholders.bannerUrl`),help:D(`channels.nostr.bannerHelp`)})}
            ${a(`website`,D(`channels.nostr.website`),{type:`url`,placeholder:D(`channels.nostr.placeholders.website`),help:D(`channels.nostr.websiteHelp`)})}
            ${a(`nip05`,D(`channels.nostr.nip05Identifier`),{placeholder:D(`channels.nostr.placeholders.nip05`),help:D(`channels.nostr.nip05Help`)})}
            ${a(`lud16`,D(`channels.nostr.lightningAddress`),{placeholder:D(`channels.nostr.placeholders.lightningAddress`),help:D(`channels.nostr.lightningHelp`)})}
          `:C}

    <div class="settings-row">
      <div class="settings-row__text">
        ${i?x`<span class="settings-row__desc">${D(`common.unsavedChanges`)}</span>`:C}
      </div>
      <div class="settings-row__control">
        <button
          class="btn primary"
          @click=${n.onSave}
          ?disabled=${t.saving||!i}
        >
          ${t.saving?D(`common.saving`):D(`common.saveAndPublish`)}
        </button>

        <button
          class="btn"
          @click=${n.onImport}
          ?disabled=${t.importing||t.saving}
        >
          ${t.importing?D(`common.importing`):D(`common.importFromRelays`)}
        </button>

        <button class="btn" @click=${n.onToggleAdvanced}>
          ${t.showAdvanced?D(`common.hideAdvanced`):D(`common.showAdvanced`)}
        </button>

        <button class="btn" @click=${n.onCancel} ?disabled=${t.saving}>
          ${D(`common.cancel`)}
        </button>
      </div>
    </div>
  `}function ot(e){let t={name:e?.name??``,displayName:e?.displayName??``,about:e?.about??``,picture:e?.picture??``,banner:e?.banner??``,website:e?.website??``,nip05:e?.nip05??``,lud16:e?.lud16??``};return{values:t,original:{...t},saving:!1,importing:!1,error:null,success:null,fieldErrors:{},showAdvanced:!!(e?.banner||e?.website||e?.nip05||e?.lud16)}}function L(){return(L=e((()=>{b(),j(),T()})))()}function st(e){return`https://docs.openclaw.ai/channels/${encodeURIComponent(e)}`}function ct(e,t){let n=e;for(let e of t){if(!n)return null;let t=h(n);if(t===`object`){let t=n.properties??{};if(typeof e==`string`&&t[e]){n=t[e];continue}let r=n.additionalProperties;if(typeof e==`string`&&r&&typeof r==`object`){n=r;continue}return null}if(t===`array`){if(typeof e!=`number`)return null;n=(Array.isArray(n.items)?n.items[0]:n.items)??null;continue}return null}return n}function lt(e,t){return ne(e,t)??{}}function ut(e){let t=ft.flatMap(t=>t in e?[[t,e[t]]]:[]);return t.length===0?null:x`
    <div>
      ${t.map(([e,t])=>x`
          <div class="settings-row__desc">${e}: ${re(t)}</div>
        `)}
    </div>
  `}function dt(e){let t=Ge(e.schema),n=t.schema;if(!n)return x`<div class="settings-row__desc">${D(`channels.config.schemaUnavailable`)}</div>`;let r=ct(n,[`channels`,e.channelId]);if(!r)return x`
      <div class="settings-row__desc">${D(`channels.config.channelSchemaUnavailable`)}</div>
    `;let i=lt(e.configValue??{},e.channelId),a=[`channels`,e.channelId],o=new Set(t.unsupportedPaths);return x`
    <div class="config-form">
      ${Ke({schema:r,path:a,hints:e.uiHints,revealAdvanced:e.showAdvanced,onShowAdvanced:()=>e.onShowAdvanced(!0),onHideAdvanced:()=>e.onShowAdvanced(!1),renderTier:t=>Ue({schema:t,value:i,path:a,hints:e.uiHints,unsupported:o,disabled:e.disabled,showLabel:!1,onPatch:e.onPatch})})}
    </div>
    ${ut(i)}
  `}function R(e){let{channelId:t,props:n}=e,r=n.configSaving||n.configSchemaLoading;return n.configSchemaLoading?Te({label:D(`channels.config.loadingSchema`),rows:2}):x`
    <div class="settings-row settings-row--stacked">
      ${dt({channelId:t,configValue:n.configForm,schema:n.configSchema,uiHints:n.configUiHints,disabled:r,showAdvanced:n.showAdvancedSettings,onShowAdvanced:n.onShowAdvancedSettings,onPatch:n.onConfigPatch})}
      ${n.configError?x`<div class="callout danger" role="alert">${n.configError}</div>`:null}
      <div class="settings-row__control">
        <button
          class="btn primary"
          ?disabled=${r||!n.configFormDirty}
          @click=${()=>n.onConfigSave()}
        >
          ${n.configSaving?D(`common.saving`):D(`common.save`)}
        </button>
        <button class="btn" ?disabled=${r} @click=${()=>n.onConfigReload()}>
          ${D(`common.reload`)}
        </button>
      </div>
    </div>
  `}var ft;function z(){return(z=e((()=>{b(),qe(),j(),T(),m(),ft=[`groupPolicy`,`streamMode`,`dmPolicy`]})))()}function pt(e,t){let n=t.snapshot?.channels;return n&&Object.hasOwn(n,e)?i(n[e])??void 0:void 0}function mt(e,t){let n=o(t.snapshot?.channelAccounts,e),r=t.snapshot?.channelDefaultAccountId,i=r&&Object.hasOwn(r,e)?r[e]:void 0;return(i?n.find(e=>e.accountId===i):void 0)??n[0]??null}function B(e,t){let n=pt(e,t),r=mt(e,t);return{configured:typeof n?.configured==`boolean`?n.configured:typeof r?.configured==`boolean`?r.configured:null,running:typeof n?.running==`boolean`?n.running:null,connected:typeof n?.connected==`boolean`?n.connected:null,defaultAccount:r,status:n}}function ht(e,t){return te(t.snapshot,e)}function gt(e,t){return B(e,t).configured}function V(e){return D(e==null?`common.na`:e?`common.yes`:`common.no`)}function H(e){return e===!0?`ok`:`muted`}function U(e){return x`
    <dl class="settings-kv">
      ${e.map(e=>x`
          <dt>${e.label}</dt>
          <dd>
            ${e.kind===void 0?e.value:M({kind:e.kind,label:e.value})}
          </dd>
        `)}
    </dl>
  `}function W(e){return x`
    <div class="settings-row">
      <div class="settings-row__text">
        <span class="settings-row__title"
          >${M({kind:`danger`,label:D(`channels.lastError`)})}</span
        >
        <span class="settings-row__desc">${v(e)}</span>
      </div>
    </div>
  `}function _t(e){let t=d([e.status??``,e.error??``].filter(Boolean).join(` `));return x`
    <div class="settings-row">
      <div class="settings-row__text">
        <span class="settings-row__title"
          >${M({kind:e.ok?`ok`:`danger`,label:e.ok?D(`common.probeOk`):D(`common.probeFailed`)})}</span
        >
        ${t?x`<span class="settings-row__desc">${t}</span>`:C}
      </div>
    </div>
  `}function G(e){return x`
    <div class="settings-row settings-row--actions">
      <div class="settings-row__control">${e}</div>
    </div>
  `}function vt(e){let t=e.updatedAt?D(`channels.hub.updatedAgo`,{ago:y(e.updatedAt)}):D(`common.na`);return x`<openclaw-tooltip .content=${t}>
    <button
      type="button"
      class="btn btn--xs btn--icon"
      aria-label=${D(`common.refresh`)}
      ?disabled=${e.disabled}
      @click=${e.onRefresh}
    >
      ${E.refresh}
    </button>
  </openclaw-tooltip>`}function yt(e){let t=[e.accountId,...e.facts??[]].join(` · `);return x`
    <div class="settings-row">
      <div class="settings-row__text">
        <span class="settings-row__title">${e.title}</span>
        <span class="settings-row__desc">${t}</span>
        ${e.lastError?x`<span class="settings-row__desc"
                >${d(e.lastError)}</span
              >`:C}
      </div>
      <div class="settings-row__control">
        ${M(e.status)}
        <span class="settings-row__value"
          >${e.lastInboundAt?y(e.lastInboundAt):D(`common.na`)}</span
        >
      </div>
    </div>
  `}function bt(e){return k({title:e.title,description:e.subtitle,...e.accountCount===void 0?{}:{count:e.accountCount}},x`
      ${U(e.statusRows)}
      ${e.lastError?W(e.lastError):C}
      ${e.secondaryCallout??C} ${e.configSection}
      ${e.extraContent??C}
      ${e.footer?G(e.footer):C}
    `)}function xt(e,t){let n=o(t,e).length;return n>=2?n:void 0}function K(){return(K=e((()=>{b(),be(),j(),T(),m(),g(),_()})))()}function St(e){return e?e.length<=20?e:`${e.slice(0,8)}...${e.slice(-8)}`:D(`common.na`)}function Ct(e){let{props:t,nostr:n,nostrAccounts:r,accountCount:i,profileFormState:a,profileFormCallbacks:o,onEditProfile:s}=e,c=r[0],l=n?.configured??c?.configured??!1,u=n?.running??c?.running??!1,d=n?.publicKey??c?.publicKey,f=n?.lastStartAt??c?.lastStartAt??null,p=n?.lastError??c?.lastError??null,m=r.length>1,h=a!=null,g=e=>{let t=e.publicKey,n=e.profile;return yt({title:n?.displayName??n?.name??e.name??e.accountId,accountId:e.accountId,facts:[`${D(`common.configured`)}: ${e.configured?D(`common.yes`):D(`common.no`)}`,`${D(`common.publicKey`)}: ${St(t)}`],status:{kind:H(e.running),label:e.running?D(`common.running`):D(`common.no`)},lastInboundAt:e.lastInboundAt,lastError:e.lastError})},_=()=>{if(h&&o)return at({state:a,callbacks:o,accountId:r[0]?.accountId??`default`});let{name:e,displayName:t,about:i,picture:u,nip05:d}=c?.profile??n?.profile??{},f=e||t||i||u||d;return x`
      <div class="settings-row">
        <div class="settings-row__text">
          <span class="settings-row__title">${D(`channels.nostr.profile`)}</span>
          ${f?C:x`<span class="settings-row__desc"
                  >${D(`channels.nostr.noProfile`)} ${D(`channels.nostr.noProfileHint`)}</span
                >`}
        </div>
        ${l?x`
                <div class="settings-row__control">
                  <button class="btn btn--sm" @click=${s}>
                    ${D(`channels.nostr.editProfile`)}
                  </button>
                </div>
              `:C}
      </div>
      ${f?x`
              <dl class="settings-kv">
                ${u?x`
                        <dt>${D(`channels.nostr.profilePicture`)}</dt>
                        <dd>
                          <img
                            style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover;"
                            src=${u}
                            alt=${D(`channels.nostr.profilePicture`)}
                            @error=${e=>{e.target.style.display=`none`}}
                          />
                        </dd>
                      `:C}
                ${e?x`<dt>${D(`channels.nostr.name`)}</dt>
                        <dd>${e}</dd>`:C}
                ${t?x`<dt>${D(`channels.nostr.displayName`)}</dt>
                        <dd>${t}</dd>`:C}
                ${i?x`<dt>${D(`channels.nostr.about`)}</dt>
                        <dd>${i}</dd>`:C}
                ${d?x`<dt>NIP-05</dt>
                        <dd>${d}</dd>`:C}
              </dl>
            `:C}
    `};return k({title:D(`channels.nostr.title`),description:D(`channels.nostr.subtitle`),...i===void 0?{}:{count:i}},x`
      ${m?r.map(e=>g(e)):U([{label:D(`common.configured`),value:D(l?`common.yes`:`common.no`),kind:H(l)},{label:D(`common.running`),value:D(u?`common.yes`:`common.no`),kind:H(u)},{label:D(`common.publicKey`),value:x`<code title="${d??``}"
                  >${St(d)}</code
                >`},{label:D(`common.lastStart`),value:f?y(f):D(`common.na`)}])}
      ${p?W(p):C}
      ${_()} ${R({channelId:`nostr`,props:t})}
      ${G(x`<button class="btn" @click=${()=>t.onRefresh(!1)}>
          ${D(`common.refresh`)}
        </button>`)}
    `)}function wt(){return(wt=e((()=>{b(),j(),T(),_(),z(),L(),K()})))()}function Tt(e){return e.accountLabel||e.accountId}function q(e){return e.accountLabel||e.accountId}function Et(e){let t=Date.parse(e);return Number.isFinite(t)?y(t):e}function Dt(e){let t=e.pairingSnapshot?.accounts??[];return e.pairingChannelFilter?t.filter(t=>t.channel===e.pairingChannelFilter):t}function Ot(e){return(e.pairingSnapshot?.requests??[]).filter(t=>!(e.pairingChannelFilter&&t.channel!==e.pairingChannelFilter||e.pairingAccountFilter&&t.accountId!==e.pairingAccountFilter))}function kt(e){let t=e.pairingSnapshot?.accounts??[],n=Array.from(new Map(t.map(e=>[e.channel,e.channelLabel])).entries()).toSorted((e,t)=>e[1].localeCompare(t[1])),r=Dt(e);return x`
    <div class="channels-pairing-filters">
      <label>
        <span>${D(`channels.pairing.channelFilter`)}</span>
        ${Ne({label:D(`channels.pairing.channelFilter`),value:e.pairingChannelFilter??``,options:[{value:``,label:D(`channels.pairing.allChannels`),kind:`neutral`},...n.map(([e,t])=>({value:e,label:t}))],onChange:t=>e.onPairingFilterChange(t||null,null)})}
      </label>
      <label>
        <span>${D(`channels.pairing.accountFilter`)}</span>
        ${Fe({label:D(`channels.pairing.accountFilter`),value:e.pairingAccountFilter??``,options:[{value:``,label:D(`channels.pairing.allAccounts`)},...r.map(e=>({value:e.accountId,label:Tt(e)}))],disabled:!e.pairingChannelFilter,onChange:t=>e.onPairingFilterChange(e.pairingChannelFilter,t||null)})}
      </label>
    </div>
  `}function At(e,t){let n=!!t.pairingBusyRequestId,r=t.pairingBusyRequestId===e.requestId,i=Object.entries(e.metadata??{});return x`
    <div class="settings-row settings-row--stacked channels-pairing-request">
      <div class="channels-pairing-request__main">
        <div class="settings-row__text">
          <span class="settings-row__title">${e.senderId}</span>
          <span class="settings-row__desc">
            ${e.senderLabel} · ${e.channelLabel} · ${q(e)}
            (${e.accountId})
          </span>
          <span class="settings-row__desc">
            ${D(`channels.pairing.requested`,{ago:Et(e.createdAt)})} ·
            ${D(`channels.pairing.expires`,{ago:Et(e.expiresAt)})}
          </span>
        </div>
        <div class="settings-row__control channels-pairing-request__actions">
          <button
            type="button"
            class="btn btn--sm primary"
            ?disabled=${n||!t.canManagePairing}
            aria-label=${D(`channels.pairing.approveAria`,{sender:e.senderId,channel:e.channelLabel,account:q(e)})}
            @click=${()=>t.onPairingApprove(e)}
          >
            ${D(r?`common.loading`:`channels.pairing.approve`)}
          </button>
          <button
            type="button"
            class="btn btn--sm"
            ?disabled=${n||!t.canManagePairing}
            aria-label=${D(`channels.pairing.dismissAria`,{sender:e.senderId,channel:e.channelLabel,account:q(e)})}
            @click=${()=>t.onPairingDismiss(e)}
          >
            ${D(`channels.pairing.dismiss`)}
          </button>
        </div>
      </div>
      ${i.length>0?x`
              <details class="channels-pairing-request__details">
                <summary>${D(`channels.pairing.senderDetails`)}</summary>
                <dl class="settings-kv">
                  ${i.map(([e,t])=>x`<dt>${e}</dt>
                        <dd>${t}</dd>`)}
                </dl>
              </details>
            `:C}
    </div>
  `}function jt(e){let t=e.canManagePairing?e.pairingSnapshot:null,n=t?.accounts??[],r=e.canManagePairing?Ot(e):[],i=!!(e.pairingChannelFilter||e.pairingAccountFilter),a=t?.requests.length??0;return x`
    <div id="channels-pairing-requests">
      ${k({title:D(`channels.pairing.title`),description:D(`channels.pairing.subtitle`),...a>0?{count:a}:{},actions:vt({updatedAt:e.canManagePairing?e.pairingLastSuccessAt:null,disabled:e.pairingLoading||!e.canManagePairing,onRefresh:e.onPairingRefresh})},e.canManagePairing?x`
              ${e.pairingError?x`
                      <div class="settings-row channels-pairing-feedback" role="alert">
                        ${M({kind:`danger`,label:e.pairingError})}
                      </div>
                    `:C}
              ${e.pairingNotice?x`
                      <div class="settings-row channels-pairing-feedback" role="status">
                        ${M({kind:`ok`,label:e.pairingNotice})}
                      </div>
                    `:C}
              ${t?kt(e):C}
              ${e.pairingLoading&&!t?Te({rows:2}):n.length===0?A(D(`channels.pairing.noAccounts`)):r.length===0?A(D(i?`channels.pairing.noFilteredRequests`:`channels.pairing.noRequests`)):r.map(t=>At(t,e))}
              ${t?x`
                      <div class="channels-pairing-help">
                        ${D(`channels.pairing.limits`,{count:String(t.limits.pendingPerAccount),minutes:String(Math.round(t.limits.ttlMs/6e4))})}
                      </div>
                    `:C}
            `:x`
              <div class="settings-row channels-pairing-feedback">
                ${M({kind:`warn`,label:D(`channels.pairing.missingPermission`)})}
              </div>
            `)}
    </div>
  `}function Mt(e,t){if(!t.canManagePairing)return C;let n=(t.pairingSnapshot?.accounts??[]).filter(t=>t.channel===e);if(n.length===0)return C;let r=t.pairingSnapshot?.requests??[];return k({title:D(`channels.pairing.detailTitle`),description:D(`channels.pairing.detailSubtitle`)},n.map(e=>{let n=r.filter(t=>t.channel===e.channel&&t.accountId===e.accountId).length;return x`
        <div class="settings-row">
          <div class="settings-row__text">
            <span class="settings-row__title">${Tt(e)}</span>
            <span class="settings-row__desc">${e.accountId}</span>
          </div>
          <div class="settings-row__control">
            ${M({kind:n>0?`warn`:`muted`,label:n>0?D(`channels.pairing.pendingCount`,{count:String(n)}):D(`channels.pairing.noPending`)})}
            <button
              type="button"
              class="btn btn--sm"
              @click=${()=>t.onPairingReviewAccount(e.channel,e.accountId)}
            >
              ${D(`channels.pairing.review`)}
            </button>
          </div>
        </div>
      `}))}function Nt(e){let t=e.pairingPrompt;if(!t||!e.canManagePairing)return C;let n=t.request,r=e.pairingBusyRequestId===n.requestId,i=t.kind===`approve`,a=e.pairingSnapshot?.commandOwnerConfigured===!1,o=D(i?`channels.pairing.approveDialogTitle`:`channels.pairing.dismissDialogTitle`);return x`
    <openclaw-modal-dialog label=${o} @modal-cancel=${e.onPairingPromptCancel}>
      <div class="channels-pairing-dialog">
        <div class="settings-row__title">${o}</div>
        <div class="settings-row__desc">
          ${n.senderId} · ${n.channelLabel} · ${q(n)}
          (${n.accountId})
        </div>
        <div class="callout ${i?`info`:`warn`}">
          ${D(i?`channels.pairing.approveExplanation`:`channels.pairing.dismissExplanation`)}
        </div>
        ${e.pairingError?x`<div class="callout danger" role="alert">${e.pairingError}</div>`:C}
        ${i&&n.notifySupported?x`
                <label class="channels-pairing-dialog__option">
                  <input
                    type="checkbox"
                    .checked=${t.notify}
                    @change=${t=>e.onPairingPromptChange({notify:t.currentTarget instanceof HTMLInputElement&&t.currentTarget.checked})}
                  />
                  <span>${D(`channels.pairing.notifyRequester`)}</span>
                </label>
              `:C}
        ${i&&a&&e.canAdmin?x`
                <label class="channels-pairing-dialog__option">
                  <input
                    type="checkbox"
                    .checked=${t.bootstrapCommandOwner}
                    @change=${t=>e.onPairingPromptChange({bootstrapCommandOwner:t.currentTarget instanceof HTMLInputElement&&t.currentTarget.checked})}
                  />
                  <span>${D(`channels.pairing.makeCommandOwner`)}</span>
                </label>
                <div class="settings-row__desc">${D(`channels.pairing.commandOwnerHelp`)}</div>
              `:C}
        ${i&&a&&!e.canAdmin?x`<div class="callout warn">${D(`channels.pairing.commandOwnerNeedsAdmin`)}</div>`:C}
        <div class="channels-pairing-dialog__actions">
          <button
            type="button"
            class=${i?`btn primary`:`btn danger`}
            ?disabled=${r}
            @click=${e.onPairingPromptConfirm}
          >
            ${D(i?`channels.pairing.approve`:`channels.pairing.dismiss`)}
          </button>
          <button type="button" class="btn" ?disabled=${r} @click=${e.onPairingPromptCancel}>
            ${D(`common.cancel`)}
          </button>
        </div>
      </div>
    </openclaw-modal-dialog>
  `}function J(){return(J=e((()=>{b(),Pe(),O(),Ie(),j(),T(),_(),K()})))()}function Pt(e){let{props:t,whatsapp:n,accountCount:r}=e,i=gt(`whatsapp`,t),a=n?.linked===!0,o=t.whatsappQrDataUrl!=null,s=n?.self?.e164,c=s?We(s,xe.getLocale())??s:void 0;return bt({title:D(`channels.whatsapp.title`),subtitle:D(`channels.whatsapp.subtitle`),accountCount:r,statusRows:[{label:D(`common.configured`),value:V(i),kind:H(i)},{label:D(`common.linked`),value:n?.linked?D(`common.yes`):D(`common.no`),kind:H(n?.linked)},...c?[{label:D(`channels.whatsapp.phoneNumber`),value:c}]:[],{label:D(`common.running`),value:n?.running?D(`common.yes`):D(`common.no`),kind:H(n?.running)},{label:D(`common.connected`),value:n?.connected?D(`common.yes`):D(`common.no`),kind:H(n?.connected)},{label:D(`common.lastConnect`),value:n?.lastConnectedAt?y(n.lastConnectedAt):D(`common.na`)},{label:D(`common.lastMessage`),value:n?.lastMessageAt?y(n.lastMessageAt):D(`common.na`)},{label:D(`common.authAge`),value:n?.authAgeMs==null?D(`common.na`):p(n.authAgeMs)}],lastError:n?.lastError,extraContent:x`
      ${t.whatsappMessage?x`
              <div class="settings-row">
                <div class="settings-row__text">
                  <span class="settings-row__desc">${t.whatsappMessage}</span>
                </div>
              </div>
            `:C}
      ${t.whatsappQrDataUrl?x`
              <div class="settings-row settings-row--stacked">
                <div class="qr-wrap">
                  <img src=${t.whatsappQrDataUrl} alt=${D(`channels.setup.whatsappQrAlt`)} />
                </div>
              </div>
            `:C}
    `,configSection:R({channelId:`whatsapp`,props:t}),footer:x`
      ${a?x`<button
              class="btn"
              ?disabled=${t.whatsappBusy}
              @click=${()=>t.onWhatsAppStart(!0)}
            >
              ${D(`common.relink`)}
            </button>`:x`<button
              class="btn primary"
              ?disabled=${t.whatsappBusy}
              @click=${()=>t.onWhatsAppStart(!1)}
            >
              ${t.whatsappBusy?D(`common.working`):D(`common.showQr`)}
            </button>`}
      ${o?x`<button
              class="btn"
              ?disabled=${t.whatsappBusy}
              @click=${()=>t.onWhatsAppWait()}
            >
              ${D(`common.waitForScan`)}
            </button>`:C}
      <button
        class="btn danger"
        ?disabled=${t.whatsappBusy}
        @click=${()=>t.onWhatsAppLogout()}
      >
        ${D(`common.logout`)}
      </button>
      <button class="btn" @click=${()=>t.onRefresh(!0)}>${D(`common.refresh`)}</button>
    `})}function Ft(){return(Ft=e((()=>{Je(),b(),T(),_(),z(),K()})))()}function It(e){return Object.hasOwn(Y,e)}function Lt(e,t,n,r){let s=It(e)?e:null,c=s?Y[s]:null,l=s?n[s]:void 0,u=B(e,t),d=u.configured,f=o(n.channelAccounts,e),p=s===`telegram`?f.length>1:!s&&f.length>0,m=s===`googlechat`?[{label:D(`common.credential`),value:n.googlechat?.credentialSource??D(`common.na`)},{label:D(`common.audience`),value:n.googlechat?.audienceType?`${n.googlechat.audienceType}${n.googlechat.audience?` · ${n.googlechat.audience}`:``}`:D(`common.na`)}]:s===`signal`?[{label:D(`common.baseUrl`),value:n.signal?.baseUrl??D(`common.na`)}]:s===`telegram`?[{label:D(`common.mode`),value:n.telegram?.mode??D(`common.na`)}]:[],h=[{label:D(`common.configured`),value:V(d),kind:H(d)},{label:D(`common.running`),value:s?s===`googlechat`&&!l?D(`common.na`):V(l?.running??!1):V(u.running),kind:H(s?l?.running:u.running)},...s?[...m,...[`lastStartAt`,`lastProbeAt`].map(e=>({label:D(e===`lastStartAt`?`common.lastStart`:`common.lastProbe`),value:l?.[e]?y(l[e]):D(`common.na`)}))]:[{label:D(`common.connected`),value:V(u.connected),kind:H(u.connected)}]],g=a(i(s?l:u.status),`lastError`);return k({title:c?D(`channels.${c}.title`):a(t.snapshot?.channelLabels,e)??e,description:D(c?`channels.${c}.subtitle`:`channels.generic.subtitle`),...r===void 0?{}:{count:r}},x`
      ${p?f.map(e=>{let t=s===`telegram`?a(i(i(e.probe)?.bot),`username`):void 0;return yt({title:t?`@${t}`:e.name||e.accountId,accountId:e.accountId,...s===`telegram`?{facts:[`${D(`common.configured`)}: ${e.configured?D(`common.yes`):D(`common.no`)}`]}:{},status:{kind:H(s===`telegram`?e.running:e.running??e.configured),label:e.running?D(`common.running`):!s&&e.configured?D(`common.configured`):D(`common.no`)},lastInboundAt:e.lastInboundAt,lastError:e.lastError})}):U(h)}
      ${g?W(g):C}
      ${s&&l?.probe?_t(l.probe):C}
      ${R({channelId:e,props:t})}
      ${s?G(x`
              <button
                class="btn"
                ?disabled=${t.loading}
                aria-busy=${String(t.loading)}
                @click=${()=>t.onRefresh(!0)}
              >
                ${D(t.loading?`common.refreshing`:`common.probe`)}
              </button>
            `):C}
    `)}function Rt(e,t,n){let r=xt(e,n.channelAccounts);switch(e){case`whatsapp`:return Pt({props:t,whatsapp:n.whatsapp,accountCount:r});case`nostr`:{let e=o(n.channelAccounts,`nostr`),i=e[0],a=i?.accountId??`default`,s=i?.profile??null,c=t.nostrProfileAccountId===a?t.nostrProfileFormState:null,l=c?{onFieldChange:t.onNostrProfileFieldChange,onSave:t.onNostrProfileSave,onImport:t.onNostrProfileImport,onCancel:t.onNostrProfileCancel,onToggleAdvanced:t.onNostrProfileToggleAdvanced}:null;return Ct({props:t,nostr:n.nostr,nostrAccounts:e,accountCount:r,profileFormState:c,profileFormCallbacks:l,onEditProfile:()=>t.onNostrProfileEdit(a,s)})}default:return Lt(e,t,n,r)}}function zt(e){let t=Rt(e.channelId,e.props,e.data),n=e.props.snapshot?.statusIssues?.filter(t=>t.channel===e.channelId);return x`
    <openclaw-modal-dialog label=${e.label} @modal-cancel=${()=>e.onClose()}>
      <div class="channels-detail">
        <div class="channels-detail__header">
          ${N(e.channelId,e.label,`cover`,{pluginIconUrl:e.pluginIconUrl,preferPluginIcon:e.preferPluginIcon})}
          <div class="channels-detail__header-actions">
            <a
              class="btn btn--sm"
              href=${st(e.channelId)}
              target="_blank"
              rel="noreferrer"
            >
              ${D(`common.docs`)}
            </a>
            <button
              type="button"
              class="btn btn--sm"
              title=${e.props.canAdmin?``:D(`channels.hub.adminRequired`)}
              ?disabled=${!e.props.canAdmin}
              @click=${()=>e.onSetup()}
            >
              ${D(`channels.hub.runSetup`)}
            </button>
            <button
              type="button"
              class="btn channels-detail__close"
              aria-label=${D(`common.close`)}
              @click=${()=>e.onClose()}
            >
              ✕
            </button>
          </div>
        </div>
        <div class="channels-detail__body">
          ${e.props.setupBlockedByDirtyConfig&&e.props.configFormDirty?x`<div class="callout warn">${D(`channels.hub.saveBeforeSetup`)}</div>`:C}
          ${n?.map(e=>x`
              <div class="callout warn" role="note">
                <strong>
                  ${D(`channels.hub.stateAttention`)} · ${d(e.accountId)}
                </strong>
                <div>${d(e.message)}</div>
                ${e.fix?x`<div>${d(e.fix)}</div>`:C}
              </div>
            `)}
          ${Mt(e.channelId,e.props)} ${t}
        </div>
      </div>
    </openclaw-modal-dialog>
  `}var Y;function Bt(){return(Bt=e((()=>{b(),P(),j(),T(),O(),m(),g(),_(),z(),wt(),J(),K(),Ft(),Y={discord:`discord`,googlechat:`googleChat`,imessage:`imessage`,signal:`signal`,slack:`slack`,telegram:`telegram`}})))()}function Vt(e){return e.wizard.phase===`step`&&e.wizard.busy}function Ht(e,t){let n=e.message?.trim()??``;if(e.executor===`gateway`)return x`
      ${e.title?x`<div class="channels-wizard__message">${e.title}</div>`:C}
      ${n?x`<div class="channels-wizard__message">${n}</div>`:C}
      <div class="channels-wizard__footer">
        <button type="button" class="btn" @click=${()=>t.onClose()}>
          ${D(`common.cancel`)}
        </button>
        ${F(n||D(`channels.setup.working`))}
      </div>
    `;let r=`channels-wizard__output${n.includes(`{`)||n.includes(`  `)?` channels-wizard__output--code`:``}`;return x`
    ${e.title?x`<div class="channels-wizard__message">${e.title}</div>`:C}
    ${n?x`<div class=${r}>${n}</div>`:C}
    <div class="channels-wizard__footer">
      ${Vt(t)?F(D(`channels.setup.working`)):x`<button type="button" class="btn primary" @click=${()=>t.onAnswer(null)}>
              ${D(`channels.setup.continue`)}
            </button>`}
    </div>
  `}function Ut(e,t){return e.type===`note`||e.type===`progress`||e.type===`action`?Ht(e,t):Le({step:e,value:e.type===`multiselect`?t.multiselectValues:e.type===`text`?t.textValue:e.initialValue,busy:Vt(t),inputId:`channel-wizard-text-input`,presentation:`channels`,channelSelect:t.wizard.phase===`step`&&t.wizard.channel===null,answerLabel:D(`channels.setup.continue`),busyLabel:D(`channels.setup.working`),sensitiveRevealed:t.secretVisible,onValueChange:e.type===`text`?e=>t.onTextInput(typeof e==`string`?e:``):t.onToggleMultiselect,onAnswer:t.onAnswer,onToggleSensitiveVisibility:t.onToggleSecretVisibility})}function Wt(e){let t=e.whatsappConnected===!0;return x`
    <div class="channels-wizard__message">
      ${D(t?`channels.setup.whatsappLinked`:`channels.setup.whatsappScanTitle`)}
    </div>
    ${e.whatsappMessage?x`<div class="channels-wizard__note">${e.whatsappMessage}</div>`:C}
    ${t?C:x`
            <div class="channels-wizard__qr">
              ${e.whatsappQrDataUrl?x`<img
                      src=${e.whatsappQrDataUrl}
                      alt=${D(`channels.setup.whatsappQrAlt`)}
                    />`:e.whatsappBusy?C:x`<div class="channels-wizard__spinner">
                        ${D(`channels.setup.whatsappQrHint`)}
                      </div>`}
            </div>
            <div class="channels-wizard__note">${D(`channels.setup.whatsappScanHelp`)}</div>
          `}
    <div class="channels-wizard__footer">
      ${t?x`
              <button type="button" class="btn primary" @click=${()=>e.onClose()}>
                ${D(`channels.setup.finish`)}
              </button>
            `:x`
              ${e.whatsappBusy?F(D(`channels.setup.whatsappQrLoading`)):x`
                      <button type="button" class="btn" @click=${()=>e.onWhatsAppStart(!0)}>
                        ${e.whatsappQrDataUrl?D(`channels.setup.regenerateQr`):D(`common.showQr`)}
                      </button>
                      ${e.whatsappQrDataUrl?x`
                              <button
                                type="button"
                                class="btn primary"
                                @click=${()=>e.onWhatsAppWait()}
                              >
                                ${D(`common.waitForScan`)}
                              </button>
                            `:C}
                    `}
              <button type="button" class="btn" @click=${()=>e.onClose()}>
                ${D(`channels.setup.linkLater`)}
              </button>
            `}
    </div>
  `}function Gt(e,t){if(e.includes(`whatsapp`))return Wt(t);let n=e.length>0;return x`
    <div class="channels-wizard__message">
      ${D(n?`channels.setup.doneTitle`:`channels.setup.doneNoChangesTitle`)}
    </div>
    <div class="channels-wizard__note">
      ${D(n?`channels.setup.doneBody`:`channels.setup.doneNoChangesBody`)}
    </div>
    <div class="channels-wizard__footer">
      <button type="button" class="btn primary" @click=${()=>t.onClose()}>
        ${D(n?`channels.setup.finish`:`common.close`)}
      </button>
    </div>
  `}function Kt(e){return e?.externalUrl?x`
    <div class="channels-wizard__links">
      <a
        class="channels-wizard__link"
        href=${e.externalUrl}
        target="_blank"
        rel="noreferrer noopener"
      >
        ${D(`channels.setup.openLink`)}
      </a>
    </div>
  `:C}function qt(e){let t=e.wizard;if(t.phase===`idle`)return C;let n=t.channel,r=n?e.channelLabel(n):D(`channels.setup.genericTitle`),i=t.phase===`step`?t.step:null,a;return t.phase===`starting`?a=x`<div class="channels-wizard__footer">
      ${F(D(`channels.setup.starting`))}
    </div>`:t.phase===`error`?a=x`
      <div class="channels-wizard__error">${t.message}</div>
      <div class="channels-wizard__footer">
        <button type="button" class="btn" @click=${()=>e.onClose()}>
          ${D(`common.close`)}
        </button>
      </div>
    `:t.phase===`done`?a=Gt(t.channels,e):i&&(a=x`
      ${t.phase===`step`&&t.validationError?x`<div class="channels-wizard__error">${t.validationError}</div>`:C}
      ${Ut(i,e)}
    `),x`
    <openclaw-modal-dialog
      label=${D(`channels.setup.dialogLabel`,{channel:r})}
      @modal-cancel=${()=>e.onClose()}
    >
      <div class="channels-wizard">
        <div class="channels-wizard__header">
          ${n?N(n,r,`tile`,{pluginIconUrl:e.channelIconUrl?.(n),preferPluginIcon:e.channelHasPluginIcon?.(n)}):C}
          <div class="channels-wizard__heading">
            <h2>${D(`channels.setup.title`,{channel:r})}</h2>
            <div class="muted channels-wizard__subtitle">
              <span>${D(`channels.setup.subtitle`)}</span>
              ${n?x`<a
                      class="channels-wizard__link"
                      href=${st(n)}
                      target="_blank"
                      rel="noreferrer noopener"
                      >${D(`channels.setup.viewDocs`)}</a
                    >`:C}
            </div>
          </div>
        </div>
        <div class="channels-wizard__body">${Kt(i)} ${a}</div>
      </div>
    </openclaw-modal-dialog>
  `}function Jt(){return(Jt=e((()=>{b(),P(),Re(),T(),O()})))()}function Yt(e){let t=Zt(e.snapshot),n=t.filter(t=>ht(t,e)),r=t.filter(t=>!ht(t,e)),i=!!(e.loading&&e.snapshot&&e.lastSuccessAt),a=e.snapshot?.warnings?.filter(e=>e.trim()).map(e=>d(e))??[],o=Xt(e),s=e.selectedChannel,c=s?X(e,s):void 0;return x`
    ${we(x`
      ${i?x`<div class="callout info">${D(`channels.refreshingStaleSnapshot`)}</div>`:C}
      ${e.snapshot?.partial?x`
              <div class="callout warn">
                ${D(`channels.hub.partialSnapshot`)}
                ${a.length>0?a.slice(0,3).join(`; `):``}
              </div>
            `:C}
      ${e.lastError?x`<div class="callout danger">${e.lastError}</div>`:C}
      ${e.setupBlockedByDirtyConfig&&e.configFormDirty?x`<div class="callout warn">${D(`channels.hub.saveBeforeSetup`)}</div>`:C}
      ${k({title:D(`channels.hub.connectedTitle`),...n.length>0?{count:n.length}:{},actions:vt({updatedAt:e.lastSuccessAt,disabled:e.loading,onRefresh:()=>e.onRefresh(!0)})},n.length===0?x`
              <div class="channels-empty">
                <!-- No configured transports is a true empty state, so Clawd rests here. -->
                <openclaw-mascot mood="sleepy" .size=${80}></openclaw-mascot>
                ${A(D(`channels.hub.noneConnected`))}
              </div>
            `:oe(n,e=>e,t=>nn(t,e)))}
      ${k({title:D(`channels.hub.addTitle`),description:D(`channels.hub.addSubtitle`)},x`
          ${e.canAdmin?x`${oe(r,e=>e,t=>rn(t,e))}
                ${an(e)}`:x`<div class="callout info" role="note">${D(`channels.hub.adminRequired`)}</div>`}
        `)}
      ${jt(e)}
    `)}
    ${s?zt({channelId:s,label:Z(e,s),pluginIconUrl:e.pluginIconUrls[s],preferPluginIcon:c?.hasIcon===!0,props:e,data:o,onClose:()=>e.onCloseDetail(),onSetup:()=>e.onStartSetup(s)}):C}
    ${e.canAdmin?qt({wizard:e.wizard,channelLabel:t=>Z(e,t),channelIconUrl:t=>e.pluginIconUrls[t],channelHasPluginIcon:t=>X(e,t)?.hasIcon===!0,multiselectValues:e.wizardMultiselect,onToggleMultiselect:e.onWizardToggleMultiselect,textValue:e.wizardTextValue,secretVisible:e.wizardSecretVisible,onTextInput:e.onWizardTextInput,onToggleSecretVisibility:e.onWizardToggleSecretVisibility,onAnswer:e.onWizardAnswer,onClose:e.onWizardClose,whatsappQrDataUrl:e.whatsappQrDataUrl,whatsappMessage:e.whatsappMessage,whatsappConnected:e.whatsappConnected,whatsappBusy:e.whatsappBusy,onWhatsAppStart:e.onWhatsAppStart,onWhatsAppWait:e.onWhatsAppWait}):C}
    ${Nt(e)}
  `}function Xt(e){let t=e.snapshot?.channels;return{whatsapp:t?.whatsapp??void 0,telegram:t?.telegram??void 0,discord:t?.discord??null,googlechat:t?.googlechat??null,slack:t?.slack??null,signal:t?.signal??null,imessage:t?.imessage??null,nostr:t?.nostr??null,channelAccounts:e.snapshot?.channelAccounts??null}}function Zt(e){let t=e?.channelMeta?.length?e.channelMeta.map(e=>e.id):e?.channelOrder??[];return[...new Set([...t,...on])]}function X(e,t){return e.pluginCatalog?.plugins.find(e=>e.id===t)}function Z(e,t){let n=e.snapshot,r=n?.channelLabels;return X(e,t)?.name??n?.channelMeta?.find(e=>e.id===t)?.label??(r&&Object.hasOwn(r,t)?r[t]:void 0)??t}function Qt(e,t){let n=e.snapshot,r=n?.channelDetailLabels,i=n?.channelMeta?.find(e=>e.id===t)?.detailLabel??(r&&Object.hasOwn(r,t)?r[t]:null);return i&&i!==Z(e,t)?i:null}function $t(e,t){let n=B(e,t);return(typeof n.status?.lastError==`string`&&n.status.lastError.trim()?n.status.lastError:o(t.snapshot?.channelAccounts,e).find(e=>e.lastError)?.lastError)?`attention`:n.running===!0||n.connected===!0?`running`:`configured`}function en(e){switch(e){case`running`:return M({kind:`ok`,label:D(`channels.hub.stateRunning`)});case`configured`:return M({kind:`muted`,label:D(`channels.hub.stateConfigured`)});case`attention`:return M({kind:`danger`,label:D(`channels.hub.stateAttention`)});default:return e}}function tn(e,t){let n=o(t.snapshot?.channelAccounts,e).reduce((e,t)=>Math.max(e,t.lastInboundAt??0),0);return n?D(`channels.hub.lastMessageAgo`,{ago:y(n)}):null}function nn(e,t){let n=Z(t,e),r=t.snapshot?.statusIssues?.find(t=>t.channel===e),i=r?d(r.message):tn(e,t)??Qt(t,e)??D(`channels.hub.openDetails`);return x`
    <button
      type="button"
      class="settings-row settings-row--nav channels-item"
      @click=${()=>t.onShowDetail(e)}
    >
      ${N(e,n,`tile`,{pluginIconUrl:t.pluginIconUrls[e],preferPluginIcon:X(t,e)?.hasIcon===!0})}
      <div class="settings-row__text">
        <span class="settings-row__title">${n}</span>
        <span class="settings-row__desc">${i}</span>
      </div>
      <div class="settings-row__control">
        ${en(r?`attention`:$t(e,t))}
        <span class="settings-row__chevron">${E.chevronRight}</span>
      </div>
    </button>
  `}function rn(e,t){let n=X(t,e),r=Z(t,e),i=n?.description??Qt(t,e)??D(`channels.hub.guidedSetup`);return x`
    <div class="settings-row channels-item">
      <button
        type="button"
        class="channels-item__detail"
        title=${D(`channels.hub.openDetails`)}
        @click=${()=>t.onShowDetail(e)}
      >
        ${N(e,r,`tile`,{pluginIconUrl:t.pluginIconUrls[e],preferPluginIcon:n?.hasIcon===!0})}
        <span class="settings-row__text">
          <span class="settings-row__title">${r}</span>
          <span class="settings-row__desc">${i}</span>
        </span>
      </button>
      <div class="settings-row__control">
        <button type="button" class="btn btn--sm" @click=${()=>t.onStartSetup(e)}>
          ${D(`channels.hub.setUp`)}
        </button>
      </div>
    </div>
  `}function an(e){return x`
    <button
      type="button"
      class="settings-row settings-row--nav channels-item"
      @click=${()=>e.onStartSetup(null)}
    >
      <span
        class="channels-tile channels-tile--fallback"
        style="--channels-art-a:#64748b;--channels-art-b:#1e293b"
        aria-hidden="true"
      >
        <span>+</span>
      </span>
      <div class="settings-row__text">
        <span class="settings-row__title">${D(`channels.hub.browseAllTitle`)}</span>
        <span class="settings-row__desc">${D(`channels.hub.browseAllSubtitle`)}</span>
      </div>
      <div class="settings-row__control">
        <span class="settings-row__chevron">${E.chevronRight}</span>
      </div>
    </button>
  `}var on;function sn(){return(sn=e((()=>{b(),se(),P(),be(),Se(),j(),T(),m(),g(),_(),Bt(),J(),K(),Jt(),on=[`whatsapp`,`telegram`,`discord`,`googlechat`,`slack`,`signal`,`imessage`,`nostr`]})))()}function cn(e,t){let n=e.state.channelsSnapshot,r=t??n?.channelDefaultAccountId.whatsapp??`default`,a=o(n?.channelAccounts,`whatsapp`).find(e=>e.accountId===r);return!a&&t!==void 0?null:{accountId:r,linked:a?.linked??(t===void 0?i(n?.channels.whatsapp)?.linked:void 0)}}async function ln(e){let t=cn(e.channels,e.getWizardAccountId());if(!t||!e.isCurrent()||!await De({title:D(`channels.whatsapp.logoutConfirmTitle`,{accountId:t.accountId}),message:D(`channels.whatsapp.logoutConfirmMessage`,{accountId:t.accountId}),confirmLabel:D(`common.logout`),danger:!0})||!e.isCurrent())return;let n=cn(e.channels,e.getWizardAccountId());!n||n.accountId!==t.accountId||n.linked!==t.linked||await e.channels.logoutWhatsApp(t.accountId)}function un(){return(un=e((()=>{Ee(),T(),m()})))()}async function dn(e,t,n,r){let i,a=!1,o=e.request(t,n).then(e=>(a&&r?.(e),e));try{return await Promise.race([o,new Promise((e,n)=>{i=setTimeout(()=>{a=!0,n(Error(`wizard request timed out: ${t}`))},fn)})])}finally{clearTimeout(i)}}function Q(e,t){!t.sessionId||t.done||e.request(`wizard.cancel`,{sessionId:t.sessionId}).catch(()=>{})}var fn,pn;function mn(){return(mn=e((()=>{g(),ie(),fn=12e4,pn=class{constructor(e,t,n,r){this.getClient=e,this.onChange=t,this.isKnownChannel=n,this.sessionExpiredMessage=r,this.currentState={phase:`idle`},this.sessionId=null,this.channel=null,this.stepIndex=0,this.generation=0,this.abortController=null}get state(){return this.currentState}async start(e){let t=this.getClient();if(!t)return;let n=++this.generation;this.abortController?.abort(),this.abortController=new AbortController,this.sessionId=null,this.channel=e,this.stepIndex=0,this.setState({phase:`starting`,channel:e});try{let r=await dn(t,`wizard.start`,{flow:`channels`,...e?{channel:e}:{}},e=>Q(t,e));if(this.generation!==n){Q(t,r);return}this.sessionId=r.sessionId??null,this.applyResult(r)}catch(t){if(this.generation!==n)return;this.setState({phase:`error`,channel:e,message:v(t)})}}async answer(e){let t=this.currentState;if(!this.getClient()||!this.sessionId||t.phase!==`step`||t.busy)return;let n=this.generation;t.step.type===`select`&&typeof e==`string`&&this.isKnownChannel(e)&&(this.channel??=e),this.setState({...t,busy:!0,validationError:null}),await this.advance(n,{stepId:t.step.id,value:e})}async advance(e,t){let n=this.getClient(),r=this.sessionId;if(!n||!r||this.generation!==e)return;let i=this.abortController?.signal;if(!(!t&&!i))try{let a={sessionId:r,...t?{answer:t}:{}},o=t?await dn(n,`wizard.next`,a):await n.request(`wizard.next`,a,{timeoutMs:null,...i?{signal:i}:{}});if(this.generation!==e)return;this.applyResult(o)}catch(t){if(this.generation!==e)return;if(s(t)){this.sessionId=null,this.abortController?.abort(),this.abortController=null,this.setState({phase:`error`,channel:this.channel,message:this.sessionExpiredMessage()});return}this.setState({phase:`error`,channel:this.channel,message:v(t)})}}async cancel(){let e=this.getClient(),t=this.sessionId;if(this.generation+=1,this.sessionId=null,this.abortController?.abort(),this.abortController=null,this.channel=null,this.setState({phase:`idle`}),e&&t)try{await e.request(`wizard.cancel`,{sessionId:t})}catch{}}applyResult(e){if(!e.done&&e.step){this.stepIndex+=1;let t=e.step.executor===`gateway`;this.setState({phase:`step`,channel:this.channel,step:e.step,stepIndex:this.stepIndex,busy:t,validationError:e.error?d(e.error):null}),t&&this.advance(this.generation);return}if(e.status===`done`){this.sessionId=null,this.abortController=null;let t=e.channels??[];this.setState({phase:`done`,channel:this.channel??t[0]??null,channels:t,accounts:e.accounts??[]});return}if(e.status===`cancelled`){this.sessionId=null,this.abortController=null,this.channel=null,this.setState({phase:`idle`});return}this.sessionId=null,this.abortController=null,this.setState({phase:`error`,channel:this.channel,message:d(e.error,`Wizard failed.`)})}setState(e){this.currentState=e,this.onChange()}}})))()}var hn;function gn(){return(gn=e((()=>{T(),mn(),hn=class{constructor(e){this.deps=e,this.multiselect=[],this.textValue=``,this.secretVisible=!1,this.blockedByDirtyConfig=!1,this.multiselectStepId=null,this.textStepId=null,this.lastPhase=`idle`,this.controller=new pn(()=>e.getContext()?.gateway.snapshot.client??null,()=>this.handleControllerChange(),t=>e.getContext()?.channels.state.channelsSnapshot?.channelMeta?.some(e=>e.id===t)??!1,()=>D(`channels.setup.sessionExpired`))}get state(){return this.controller.state}startSetup(e){if(this.deps.getContext()?.runtimeConfig.state.configFormDirty){this.blockedByDirtyConfig=!0,this.deps.requestUpdate();return}this.blockedByDirtyConfig=!1,this.whatsappAccountId=void 0,this.deps.clearSelection(),this.controller.start(e)}close(){let e=this.controller.state.phase!==`idle`;this.controller.cancel(),e&&this.deps.getContext()?.channels.refresh(!0)}cancelOnDisconnect(){this.controller.cancel()}answer(e){this.controller.answer(e)}toggleMultiselect(e){this.multiselect=this.multiselect.includes(e)?this.multiselect.filter(t=>t!==e):[...this.multiselect,e],this.deps.requestUpdate()}setTextValue(e){this.textValue=e}toggleSecretVisibility(){this.secretVisible=!this.secretVisible,this.deps.requestUpdate()}handleControllerChange(){let e=this.controller.state,t=e.phase===`step`?e.step.id:null;t!==this.multiselectStepId&&(this.multiselectStepId=t,this.multiselect=e.phase===`step`&&Array.isArray(e.step.initialValue)?[...e.step.initialValue]:[]),t!==this.textStepId&&(this.textStepId=t,this.textValue=e.phase===`step`&&e.step.type===`text`&&typeof e.step.initialValue==`string`?e.step.initialValue:``,this.secretVisible=!1),e.phase===`done`&&this.lastPhase!==`done`&&this.handleCompleted(e.accounts),this.lastPhase=e.phase,this.deps.requestUpdate()}async handleCompleted(e){let t=this.deps.getContext();if(!t)return;await t.runtimeConfig.refresh({discardPendingChanges:!0}),await t.channels.refresh(!0);let n=e.find(e=>e.channel===`whatsapp`);n&&(this.whatsappAccountId=n.accountId,await t.channels.startWhatsApp(!1,n.accountId))}}})))()}function _n(e,t){return e instanceof DOMException&&e.name===`TimeoutError`?D(`channels.nostr.notices.timeout`):D(`channels.nostr.notices.operationFailed`,{prefix:t,error:v(e)})}var vn,yn,$;function bn(){return(bn=e((()=>{r(),b(),ae(),de(),me(),le(),_e(),pe(),j(),He(),T(),m(),g(),Oe(),ee(),Ae(),f(),I(),rt(),L(),sn(),un(),gn(),vn=3e4,yn=`https://docs.openclaw.ai/channels`,$=class extends l{constructor(...e){super(...e),this.nostrProfileFormState=null,this.nostrProfileAccountId=null,this.selectedChannel=null,this.pairingChannelFilter=null,this.pairingAccountFilter=null,this.pairingPrompt=null,this.pairingNotice=null,this.pluginPresentation=new nt({getContext:()=>this.context,getChannelIds:()=>Zt(this.context.channels.state.channelsSnapshot),isConnected:()=>this.isConnected,requestUpdate:()=>this.requestUpdate()}),this.wizardHost=new hn({getContext:()=>this.context,requestUpdate:()=>this.requestUpdate(),clearSelection:()=>this.selectedChannel=null}),this.schemaLoadStarted=!1,this.gatewayPairingAuthSignature=null,this.gateway=new ke(this,{getGateway:()=>this.context?.gateway,onIdentityChange:()=>this.clearNostrForm(),onSnapshot:e=>this.handleGatewaySnapshot(e)}),this.pairingPolling=new Me(this,vn,()=>{let e=this.context?.gateway.snapshot;e?.phase===`connected`&&w(e.hello?.auth??null)&&this.context.channels.refreshPairing()},!1),this.subscriptions=new u(this).effect(()=>this.context?.channels,e=>{let t=this.channelsSource!==void 0&&this.channelsSource!==e;this.channelsSource=e,t&&this.invalidateNostrForm();let n=()=>{this.channelsSource===e&&(this.reconcilePairingFilter(e.state.pairingSnapshot),this.pluginPresentation.ensure(this.context.gateway.snapshot.client),this.requestUpdate())};return n(),e.subscribe(n)}).effect(()=>this.context?.runtimeConfig,e=>{this.schemaLoadStarted=!1;let t=()=>{this.context.runtimeConfig===e&&(this.requestUpdate(),this.ensureInitialData())};t();let n=e.subscribe(t);return()=>{n(),this.schemaLoadStarted=!1}}).watch(()=>this.context?.theme,(e,t)=>e.subscribe(t),()=>{this.requestUpdate()})}handleGatewaySnapshot(e){let t=e.snapshot,n=w(t.hello?.auth??null),r=c(t),i=!e.initial&&this.gatewayPairingAuthSignature!==r;(e.identityChanged||t.phase!==`connected`)&&this.clearNostrForm(),(e.identityChanged||e.connectionChanged||t.phase!==`connected`)&&this.pluginPresentation.reset(),(e.identityChanged||i||t.phase!==`connected`||!n)&&(this.pairingPrompt=null,this.pairingChannelFilter=null,this.pairingAccountFilter=null,this.pairingNotice=null),this.gatewayPairingAuthSignature=r,this.syncPairingPolling(t),t.phase===`connected`&&t.client?(e.initial||this.ensureInitialData(),!e.initial&&(e.identityChanged||e.connectionChanged||i)&&n&&this.context.channels.refreshPairing()):this.schemaLoadStarted=!1}syncPairingPolling(e){if(e.phase===`connected`&&e.client&&w(e.hello?.auth??null)){this.pairingPolling.start();return}this.pairingPolling.stop()}ensureInitialData(){let e=this.context,t=e.gateway.snapshot,n=t.client;if(t.phase!==`connected`||!n)return;this.pluginPresentation.ensure(n);let r=e.channels.state,i=e.runtimeConfig.state;!r.channelsSnapshot&&!r.channelsLoading&&e.channels.refresh(!1),w(t.hello?.auth??null)&&!r.pairingSnapshot&&!r.pairingLoading&&e.channels.refreshPairing(),!i.configSnapshot&&!i.configLoading&&e.runtimeConfig.ensureLoaded(),!i.configSchema&&!i.configSchemaLoading&&!this.schemaLoadStarted&&(this.schemaLoadStarted=!0,e.runtimeConfig.ensureSchemaLoaded())}disconnectedCallback(){this.wizardHost.cancelOnDisconnect(),this.selectedChannel=null,this.channelsSource=void 0,this.gatewayPairingAuthSignature=null,this.pairingPrompt=null,this.pairingChannelFilter=null,this.pairingAccountFilter=null,this.pairingNotice=null,this.pairingPolling.stop(),this.pluginPresentation.reset(),this.invalidateNostrForm(),this.subscriptions.clear(),this.schemaLoadStarted=!1,super.disconnectedCallback()}setShowAdvancedSettings(e){ve({showAdvancedSettings:e}),this.context.theme.refresh()}async saveChannelConfig(){this.context&&await this.context.runtimeConfig.save()&&await this.context.channels.refresh(!0)}async reloadChannelConfig(){let e=this.context;e&&(await e.runtimeConfig.refresh({discardPendingChanges:!0}),await e.channels.refresh(!0))}async confirmWhatsAppLogout(){let e=this.context,t=e.channels,n=this.gateway.capture();!n||this.channelsSource!==t||await ln({channels:t,getWizardAccountId:()=>this.wizardHost.whatsappAccountId,isCurrent:()=>this.gateway.isCurrent(n)&&this.context===e&&this.channelsSource===t})}resolveNostrAccountId(){let e=this.context?.channels.state.channelsSnapshot?.channelAccounts?.nostr??[];return this.nostrProfileAccountId??e[0]?.accountId??`default`}buildGatewayHttpHeaders(e){let t=fe({hello:e.snapshot.hello,settings:{token:e.connection.token},password:e.connection.password});return t?{Authorization:t}:{}}clearNostrForm(){this.nostrProfileFormState=null,this.nostrProfileAccountId=null}invalidateNostrForm(){this.gateway.invalidate(),this.clearNostrForm()}beginNostrOperation(){let e=this.gateway.gateway,t=this.context.channels,n=this.gateway.capture();return!e||!n||this.channelsSource!==t||this.context.gateway!==e||(this.gateway.invalidate(),n=this.gateway.capture(),!n)?null:{scope:n,gateway:e,channels:t,formAccountId:this.nostrProfileAccountId,accountId:this.resolveNostrAccountId(),headers:this.buildGatewayHttpHeaders(e)}}currentNostrForm(e){let t=this.nostrProfileFormState;return!t||!this.gateway.isCurrent(e.scope)||this.nostrProfileAccountId!==e.formAccountId||this.context.gateway!==e.gateway||this.context.channels!==e.channels||e.gateway.snapshot.client!==e.scope.client?null:t}editNostrProfile(e,t){this.gateway.invalidate(),this.nostrProfileAccountId=e,this.nostrProfileFormState=ot(t??void 0)}cancelNostrProfile(){this.invalidateNostrForm()}changeNostrProfileField(e,t){let n=this.nostrProfileFormState;n&&(this.nostrProfileFormState={...n,values:{...n.values,[e]:t},fieldErrors:{...n.fieldErrors,[e]:``}})}toggleNostrProfileAdvanced(){let e=this.nostrProfileFormState;e&&(this.nostrProfileFormState={...e,showAdvanced:!e.showAdvanced})}async saveNostrProfile(){let e=this.nostrProfileFormState;if(!e||e.saving||e.importing)return;let t=this.beginNostrOperation();if(!t)return;let n={...e,saving:!0,error:null,success:null,fieldErrors:{}};this.nostrProfileFormState=n;try{let{data:n,response:r}=await Qe({accountId:t.accountId,headers:t.headers,values:e.values}),i=this.currentNostrForm(t);if(!i)return;if(!r.ok||n?.ok===!1||!n){this.nostrProfileFormState={...i,saving:!1,error:d(n?.error,D(`channels.nostr.notices.updateFailedStatus`,{status:String(r.status)})),success:null,fieldErrors:Xe(n?.details)};return}if(!n.persisted){this.nostrProfileFormState={...i,saving:!1,error:D(`channels.nostr.notices.publishFailed`),success:null};return}this.nostrProfileFormState={...i,saving:!1,error:null,success:D(`channels.nostr.notices.published`),fieldErrors:{},original:{...e.values}},await t.channels.refresh(!0)}catch(e){let n=this.currentNostrForm(t);if(!n)return;this.nostrProfileFormState={...n,saving:!1,error:_n(e,D(`channels.nostr.notices.updateFailed`)),success:null}}}async importNostrProfile(){let e=this.nostrProfileFormState;if(!e||e.importing||e.saving)return;let t=this.beginNostrOperation();if(t){this.nostrProfileFormState={...e,importing:!0,error:null,success:null};try{let{data:e,response:n}=await $e({accountId:t.accountId,headers:t.headers}),r=this.currentNostrForm(t);if(!r)return;if(!n.ok||e?.ok===!1||!e){this.nostrProfileFormState={...r,importing:!1,error:d(e?.error,D(`channels.nostr.notices.importFailedStatus`,{status:String(n.status)})),success:null};return}let i=e.merged??e.imported??null,a=i?{...r.values,...i}:r.values;this.nostrProfileFormState={...r,importing:!1,values:a,error:null,success:e.saved?D(`channels.nostr.notices.importedFromRelays`):D(`channels.nostr.notices.imported`),showAdvanced:!!(a.banner||a.website||a.nip05||a.lud16)},e.saved&&await t.channels.refresh(!0)}catch(e){let n=this.currentNostrForm(t);if(!n)return;this.nostrProfileFormState={...n,importing:!1,error:_n(e,D(`channels.nostr.notices.importFailed`)),success:null}}}}reconcilePairingFilter(e){if(!e||!this.pairingChannelFilter)return;let t=e.accounts.filter(e=>e.channel===this.pairingChannelFilter);if(t.length===0){this.pairingChannelFilter=null,this.pairingAccountFilter=null;return}this.pairingAccountFilter&&!t.some(e=>e.accountId===this.pairingAccountFilter)&&(this.pairingAccountFilter=null)}setPairingFilter(e,t){this.pairingChannelFilter=e,this.pairingAccountFilter=e?t:null}reviewPairingAccount(e,t){this.selectedChannel=null,this.setPairingFilter(e,t),this.updateComplete.then(()=>{this.renderRoot.querySelector(`#channels-pairing-requests`)?.scrollIntoView({behavior:je(),block:`start`})})}openPairingPrompt(e,t){this.context.channels.state.pairingBusyRequestId||(this.pairingNotice=null,this.pairingPrompt={kind:e,request:t,notify:!1,bootstrapCommandOwner:!1})}patchPairingPrompt(e){this.pairingPrompt&&={...this.pairingPrompt,...e}}async confirmPairingPrompt(){let e=this.pairingPrompt;if(!e)return;if(e.kind===`dismiss`){await this.context.channels.dismissPairing({channel:e.request.channel,accountId:e.request.accountId,requestId:e.request.requestId})&&this.pairingPrompt===e&&(this.pairingPrompt=null,this.pairingNotice=D(`channels.pairing.dismissedNotice`));return}let t=await this.context.channels.approvePairing({channel:e.request.channel,accountId:e.request.accountId,requestId:e.request.requestId,notify:e.notify,bootstrapCommandOwner:e.bootstrapCommandOwner});!t||this.pairingPrompt!==e||(this.pairingPrompt=null,this.pairingNotice=t.notification===`failed`&&t.commandOwnerBootstrap===`unavailable`?D(`channels.pairing.approvedFollowupsFailedNotice`):t.commandOwnerBootstrap===`unavailable`?D(`channels.pairing.approvedOwnerFailedNotice`):t.notification===`failed`?D(`channels.pairing.approvedNotificationFailedNotice`):t.commandOwnerBootstrap===`configured`?D(`channels.pairing.approvedOwnerNotice`):D(`channels.pairing.approvedNotice`))}render(){let e=this.context,t=e.channels.state,n=e.runtimeConfig.state,r=e.gateway.snapshot.hello?.auth??null,i=w(r),a=ge(r);return x`
      <section class="content-header">
        <div>
          <div class="page-title">${ye(`channels`)}</div>
          <div class="page-subtitle">
            ${ue(`channels`)} ${Ce(yn)}
          </div>
        </div>
      </section>
      ${Ve(Yt({connected:t.connected,loading:t.channelsLoading,snapshot:t.channelsSnapshot,pluginCatalog:this.pluginPresentation.pluginCatalog,pluginIconUrls:this.pluginPresentation.pluginIconUrls,lastError:t.channelsError,lastSuccessAt:t.channelsLastSuccess,pairingLoading:t.pairingLoading,pairingSnapshot:t.pairingSnapshot,pairingError:t.pairingError,pairingLastSuccessAt:t.pairingLastSuccess,pairingBusyRequestId:t.pairingBusyRequestId,pairingChannelFilter:this.pairingChannelFilter,pairingAccountFilter:this.pairingAccountFilter,pairingPrompt:this.pairingPrompt,pairingNotice:this.pairingNotice,canManagePairing:i,canAdmin:a,whatsappMessage:t.whatsappLoginMessage,whatsappQrDataUrl:t.whatsappLoginQrDataUrl,whatsappConnected:t.whatsappLoginConnected,whatsappBusy:t.whatsappBusy,configSchema:n.configSchema,configSchemaLoading:n.configSchemaLoading,configForm:n.configForm,configUiHints:n.configUiHints,configSaving:n.configSaving,configError:n.lastError,configFormDirty:n.configFormDirty,showAdvancedSettings:ce().showAdvancedSettings===!0,nostrProfileFormState:this.nostrProfileFormState,nostrProfileAccountId:this.nostrProfileAccountId,selectedChannel:this.selectedChannel,wizard:this.wizardHost.state,wizardMultiselect:this.wizardHost.multiselect,wizardTextValue:this.wizardHost.textValue,wizardSecretVisible:this.wizardHost.secretVisible,setupBlockedByDirtyConfig:this.wizardHost.blockedByDirtyConfig,onShowDetail:e=>{this.selectedChannel=e},onCloseDetail:()=>{this.selectedChannel=null},onStartSetup:e=>{a&&this.wizardHost.startSetup(e)},onWizardAnswer:e=>this.wizardHost.answer(e),onWizardToggleMultiselect:e=>this.wizardHost.toggleMultiselect(e),onWizardTextInput:e=>this.wizardHost.setTextValue(e),onWizardToggleSecretVisibility:()=>this.wizardHost.toggleSecretVisibility(),onWizardClose:()=>this.wizardHost.close(),onRefresh:t=>void e.channels.refresh(t),onPairingRefresh:()=>void e.channels.refreshPairing(),onPairingFilterChange:(e,t)=>this.setPairingFilter(e,t),onPairingReviewAccount:(e,t)=>this.reviewPairingAccount(e,t),onPairingApprove:e=>this.openPairingPrompt(`approve`,e),onPairingDismiss:e=>this.openPairingPrompt(`dismiss`,e),onPairingPromptChange:e=>this.patchPairingPrompt(e),onPairingPromptCancel:()=>{this.pairingPrompt=null},onPairingPromptConfirm:()=>void this.confirmPairingPrompt(),onWhatsAppStart:t=>void e.channels.startWhatsApp(t,this.wizardHost.whatsappAccountId),onWhatsAppWait:()=>void e.channels.waitWhatsApp(this.wizardHost.whatsappAccountId),onWhatsAppLogout:()=>void this.confirmWhatsAppLogout(),onShowAdvancedSettings:e=>this.setShowAdvancedSettings(e),onConfigPatch:(t,n)=>e.runtimeConfig.patchForm(t,n),onConfigSave:()=>void this.saveChannelConfig(),onConfigReload:()=>void this.reloadChannelConfig(),onNostrProfileEdit:(e,t)=>this.editNostrProfile(e,t),onNostrProfileCancel:()=>this.cancelNostrProfile(),onNostrProfileFieldChange:(e,t)=>this.changeNostrProfileField(e,t),onNostrProfileSave:()=>void this.saveNostrProfile(),onNostrProfileImport:()=>void this.importNostrProfile(),onNostrProfileToggleAdvanced:()=>this.toggleNostrProfileAdvanced()}))}
    `}},t([n({context:he,subscribe:!0})],$.prototype,`context`,void 0),t([S()],$.prototype,`nostrProfileFormState`,void 0),t([S()],$.prototype,`nostrProfileAccountId`,void 0),t([S()],$.prototype,`selectedChannel`,void 0),t([S()],$.prototype,`pairingChannelFilter`,void 0),t([S()],$.prototype,`pairingAccountFilter`,void 0),t([S()],$.prototype,`pairingPrompt`,void 0),t([S()],$.prototype,`pairingNotice`,void 0),customElements.get(`openclaw-channels-page`)||customElements.define(`openclaw-channels-page`,$)})))()}bn();
//# sourceMappingURL=channels-page-BC1yAbax.js.map