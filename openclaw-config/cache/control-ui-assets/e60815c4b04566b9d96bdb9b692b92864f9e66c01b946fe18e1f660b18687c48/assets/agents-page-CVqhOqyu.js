import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,L as n,R as r,Tn as i,Xr as a,_a as o,ba as s,ca as c,da as l,pa as u}from"./control-ui-foundation-DMb6IeIq.js";import{Ac as d,An as f,Ar as p,Bs as m,Cs as h,Ds as g,Es as _,Fs as v,Gc as y,Gn as b,In as x,Ir as S,Is as C,Jo as w,Kn as T,Ln as E,Ls as ee,Mc as te,Mn as ne,Ms as D,Nn as re,Ns as O,On as ie,Ps as ae,Rs as k,Sn as oe,Tn as se,Ts as ce,Vs as A,Yo as j,Ys as le,cr as ue,el as de,fa as fe,ic as pe,ir as me,jn as he,js as ge,kc as _e,kn as ve,ks as ye,lr as be,on as xe,or as Se,qc as Ce,qo as M,sr as we,tn as Te,ua as Ee,ws as De,zs as Oe}from"./control-ui-core-DzidtL-P.js";import{$ as ke,C as Ae,K as N,X as P,_ as je,at as F,b as Me,l as Ne,q as I,r as Pe,s as Fe,st as L,t as Ie,w as Le}from"./lit-runtime-vxhGQLC6.js";import{Rn as Re,Tn as ze,cr as Be,fr as Ve,h as He,m as Ue,zn as We}from"./control-ui-core-CaKBexnk.js";import{Bt as R,Ft as z,Gt as B,It as Ge,Nt as Ke,kt as qe}from"./control-ui-core-uEI6aN5p.js";import{t as Je}from"./control-ui-boot-shared-nBxCfWV5.js";import{n as Ye,r as Xe}from"./gateway-runtime-DP4whqrA.js";import{$i as Ze,$r as Qe,Bi as $e,Bt as et,Cr as tt,Et as nt,Ft as V,Gi as rt,Ht as H,Ii as it,Lt as U,Mt as at,Ni as ot,Nn as st,Ot as W,Pn as ct,Qr as lt,Ri as ut,Xr as dt,Yr as ft,Zr as pt,ei as mt,io as ht,jt as gt,to as _t,wr as vt,wt as G,zt as yt}from"./control-ui-boot-shared-Cyt1Zyts.js";import{Qs as bt,Zs as xt,oi as St}from"./control-ui-boot-shared-CH-OC11d.js";import{V as Ct}from"./control-ui-boot-new-DeGMjctK.js";import"./control-ui-boot-chat-CKX96sa9.js";import{n as wt,t as Tt}from"./hub-tabs-DuEhaWau.js";import{n as Et,t as Dt}from"./settings-workspace-IBRfeTG9.js";import{c as Ot,l as kt,o as At,t as jt}from"./github-identity-view-DoQcqnky.js";import{a as Mt,i as Nt,n as Pt,r as Ft}from"./tool-catalog-BDpmuWHA.js";import{n as It,t as Lt}from"./model-picker-i-vL0MMG.js";import{n as Rt,t as zt}from"./cron-jobs-pagination-jMZJvr0B.js";import{a as Bt,n as Vt,r as Ht,s as Ut,t as Wt}from"./presenter-Bco2R70L.js";import{a as Gt,n as Kt,o as qt,r as Jt,s as Yt,t as Xt}from"./skills-shared-D-UakUtb.js";async function Zt(e,t,n,r){let i=r.kind===`write`,a=i?`agentFileSaving`:`agentFilesLoading`,o=e.client,s=e.agents;if(!o||!e.connected||e[a])return!1;if(r.kind===`read`&&!r.force&&Object.hasOwn(e.agentFileContents,n))return!0;let c=e.requestGeneration,l=()=>e.client===o&&e.agents===s&&e.connected&&e.requestGeneration===c,u=()=>{e.agentFileWriteRevisions.set(n,(e.agentFileWriteRevisions.get(n)??0)+1)};i&&u();let d=e.agentFileWriteRevisions.get(n),f=()=>l()&&(i||e.agentFileWriteRevisions.get(n)===d);e[a]=!0,e.agentFilesError=null;try{let a=await o.request(i?`agents.files.set`:`agents.files.get`,{agentId:t,name:n,...r.kind===`write`?{content:r.content}:{}});if(a?.file&&f()){let t=r.kind===`write`?r.content:a.file.content??``,o=e.agentFileContents[n]??``,c=e.agentFileDrafts[n];return e.agentFileContents={...e.agentFileContents,[n]:t},(!Object.hasOwn(e.agentFileDrafts,n)||c===(i?t:o))&&(e.agentFileDrafts={...e.agentFileDrafts,[n]:t}),e.agentFilesError=null,s.recordFile(a),!0}}catch(t){return f()&&(e.agentFilesError=M(t)),!1}finally{l()&&(i&&u(),e[a]=!1)}return!1}function Qt(e,t,n,r){return Zt(e,t,n,{kind:`read`,force:r?.force})}function $t(e,t,n,r){return Zt(e,t,n,{kind:`write`,content:r})}function en(){return(en=e((()=>{j()})))()}function tn(e){return e&&e.length<=on?e:null}function nn(e){return new Promise(t=>{let n=new FileReader;n.addEventListener(`load`,()=>t(tn(typeof n.result==`string`?n.result:null))),n.addEventListener(`error`,()=>t(null)),n.readAsDataURL(e)})}async function rn(e){if(!e.type.startsWith(`image/`)||e.size>2097152)return null;try{let t=await createImageBitmap(e),n=Math.min(1,an/Math.max(t.width,t.height)),r=Math.max(1,Math.round(t.width*n)),i=Math.max(1,Math.round(t.height*n)),a=document.createElement(`canvas`);a.width=r,a.height=i;let o=a.getContext(`2d`);if(!o)return nn(e);o.drawImage(t,0,0,r,i),t.close();let s=a.toDataURL(`image/webp`,.8);return tn(s.startsWith(`data:image/webp`)?s:a.toDataURL(`image/png`))}catch{return nn(e)}}var an,on;function sn(){return(sn=e((()=>{i(),an=96,on=16e3})))()}function cn(e){let t=(K.get(e)??0)+1;return K.set(e,t),t}function ln(e){cn(e),e.identityDraft={name:null,emoji:null,avatar:null},e.identitySaving=!1,e.identityError=null}function un(e,t,n){e.identityDraft={...e.identityDraft,[t]:n},e.identityError=null}function dn(e,t){let n=cn(e);rn(t).then(t=>{K.get(e)===n&&(t?(e.identityDraft={...e.identityDraft,avatar:t},e.identityError=null):e.identityError=B(`agents.identity.imageUnusable`))})}async function fn(e){let{host:t,expectedClient:n,agentId:r,agents:i,agentIdentity:a,runtimeConfig:o}=e,s=t.identityDraft,c=s.name?.trim(),l=s.emoji?.trim(),u=s.avatar??void 0;if(!(s.name!==null&&!c||s.emoji!==null&&!l)){if(!c&&!l&&!u){ln(t);return}t.identitySaving=!0,t.identityError=null;try{let s=await o.runExternalMutation(e=>{if(e!==n)throw Error(`Connection changed before the agent identity update started.`);return ne(e,{agentId:r,name:c,emoji:l,avatar:u})},{canDispatch:e.canDispatch,dispatchError:`Access changed before the agent identity update started.`});if(!s.ok)throw Error(s.error);let d=s.refresh.ok?[]:[s.refresh.error];a.invalidate([r]);try{await i.refreshList()}catch(e){d.push(`Agent identity was saved, but the agent list refresh failed: ${M(e)}`)}try{await a.ensure([r])}catch(e){d.push(`Agent identity was saved, but the identity refresh failed: ${M(e)}`)}e.isCurrent()&&(ln(t),e.onSaved(),t.identityError=d.length>0?d.join(` `):null)}catch(n){e.isCurrent()&&(t.identityError=M(n))}finally{e.isCurrent()&&(t.identitySaving=!1)}}}function pn(e,t){let n=e.snapshot.pinnedAgentIds,r=n.includes(t)?n.filter(e=>e!==t):[...n,t];e.update({pinnedAgentIds:r})}var K;function mn(){return(mn=e((()=>{R(),ie(),j(),sn(),K=new WeakMap})))()}function hn(e){return{path:[...e.path,`model`],existing:e.entry.model}}function gn(e,t,n,r){n&&r?e.patchForm(t,{primary:n,fallbacks:r}):n?e.patchForm(t,n):r?e.patchForm(t,{fallbacks:r}):e.removeFormValue(t)}function _n(e){if(typeof e==`string`)return{primary:e.trim()||null,fallbacks:null};if(e&&typeof e==`object`){let t=e;return{primary:typeof t.primary==`string`&&t.primary.trim()||null,fallbacks:Array.isArray(t.fallbacks)?t.fallbacks:null}}return{primary:null,fallbacks:null}}function vn(e,t,n){let r=e.agentEntry(t,{ensure:!!n});if(!r)return;let i=hn(r);gn(e,i.path,n,_n(i.existing).fallbacks)}function yn(e,t,n){let r=m(e.state),i=u(n),a=D(r,t),o=v(a.entry?.model,a.defaults?.model),s=e.agentEntry(t),c=i.length>0||(o?.length??0)>0||s?s??e.agentEntry(t,{ensure:!0}):null;if(!c)return;let l=hn(c),d=_n(l.existing).primary??k(a.entry?.model)??k(a.defaults?.model)??null;gn(e,l.path,d,i.length>0?i:null)}function bn(){return(bn=e((()=>{c(),g(),A()})))()}function xn(e,t,n){let r=t?.canonicalLocation;if(!r)return``;let i=`${t.location.pathname}${t.location.search}${t.location.hash}`;return n!==i&&e.replace(`agents`,r),i}function Sn(e,t,n,r){n!==t&&e.navigate(`agents`,{pathname:Ve(t,r===`files`?null:r,e.basePath)})}function Cn(e,t,n,r){!t||r===n||e.navigate(`agents`,{pathname:Ve(t,r,e.basePath)})}function wn(){return(wn=e((()=>{Be(),de()})))()}async function q(e,t){let n=e.client;if(!n||!e.connected||e.agentSkillsLoading)return;let r=e.requestGeneration,i=()=>e.client===n&&e.connected&&e.requestGeneration===r;e.agentSkillsLoading=!0,e.agentSkillsError=null;try{let r=await S(n,t);r&&i()&&(e.agentSkillsReport=r,e.agentSkillsAgentId=t)}catch(t){i()&&(e.agentSkillsError=M(t))}finally{i()&&(e.agentSkillsLoading=!1)}}async function Tn(e,t,n=()=>!0){let r=e.agentEntry(t);if(!r||!Array.isArray(r.entry.skills)||!n())return!1;let i=r.path[2];return typeof i==`string`&&e.patch({raw:{agents:{entries:{[i]:{skills:null}}}},note:`Reset agent skills to inherited defaults`,replacePaths:[`agents.entries.${i}.skills`],canDispatch:n})}function En(){return(En=e((()=>{j(),p()})))()}function Dn(){return kn+=1,`openclaw-multi-select-${kn}`}function On(e){let t=e.indexOf(`/`);return t>0?e.slice(0,t):void 0}var kn,An,J;function jn(){return(jn=e((()=>{Je(),c(),N(),ke(),Fe(),je(),R(),Ce(),Ge(),_t(),kn=0,An=e=>e.preventDefault(),J=class extends y{constructor(...e){super(...e),this.options=[],this.value=[],this.exclude=[],this.placeholder=``,this.accessibleLabel=``,this.allowCustom=!1,this.disabled=!1,this.onChange=()=>{},this.onOpen=()=>{},this.open=!1,this.query=``,this.activeIndex=0,this.listboxId=Dn(),this.field=null,this.input=null,this.setField=e=>{this.field=e instanceof HTMLElement?e:null},this.setInput=e=>{this.input=e instanceof HTMLInputElement?e:null},this.configurePopup=e=>{if(!(e instanceof a)||!this.field)return;let t=e;t.anchor=this.field,t.placement=`bottom-start`,t.boundary=`viewport`,t.distance=6,t.flip=!0,t.flipPadding=8,t.shift=!0,t.shiftPadding=12,t.autoSize=`vertical`,t.autoSizePadding=8,t.sync=`width`},this.handleFieldClick=e=>{this.disabled||e.target instanceof Element&&e.target.closest(`button`)||(this.input?.focus(),this.openMenu())},this.handleInput=e=>{e.currentTarget instanceof HTMLInputElement&&(this.query=e.currentTarget.value,this.activeIndex=0,this.openMenu())},this.handleKeydown=e=>{if(!(this.disabled||e.isComposing))switch(e.key){case`ArrowDown`:case`ArrowUp`:{if(e.preventDefault(),!this.open){this.openMenu();return}let t=this.rows().length;if(t>0){let n=e.key===`ArrowDown`?1:t-1;this.activeIndex=(this.activeIndex+n)%t}return}case`Enter`:{if(!this.open)return;let t=this.rows()[this.activeIndex];t&&(e.preventDefault(),this.selectRow(t));return}case`,`:this.allowCustom&&(e.preventDefault(),this.commitTypedQuery());return;case`Escape`:this.open&&(e.preventDefault(),e.stopPropagation(),this.closeMenu());return;case`Backspace`:!this.query&&this.value.length>0&&(e.preventDefault(),this.removeAt(this.value.length-1))}},this.handleFocusOut=e=>{let t=e.relatedTarget;t instanceof Node&&this.contains(t)||(this.allowCustom&&this.commitTypedQuery(),this.closeMenu())}}willUpdate(e){e.has(`disabled`)&&this.disabled&&this.open&&this.closeMenu(),this.open&&(e.has(`options`)||e.has(`value`)||e.has(`exclude`))&&(this.activeIndex=Math.min(this.activeIndex,Math.max(0,this.rows().length-1)))}updated(e){if(!this.open||![`open`,`query`,`activeIndex`,`options`,`value`,`exclude`].some(t=>e.has(t)))return;let t=this.querySelector(`.multi-select__menu`),n=t?.querySelector(`[aria-selected="true"]`);if(!t||!n)return;let r=t.getBoundingClientRect(),i=n.getBoundingClientRect();i.top<r.top?t.scrollTop-=r.top-i.top:i.bottom>r.bottom&&(t.scrollTop+=i.bottom-r.bottom)}optionFor(e){let t=e.toLowerCase();return this.options.find(e=>e.value.toLowerCase()===t)}rows(){let e=new Set([...this.value,...this.exclude].map(e=>e.toLowerCase())),t=this.query.trim(),n=t.toLowerCase(),r=[],i=null;for(let t of this.options){let a=t.value.toLowerCase();if(e.has(a))continue;if(a===n){i=t;continue}let o=[t.label,t.value,t.provider,t.detail];(!n||o.some(e=>e?.toLowerCase().includes(n)))&&r.push(t)}return i?r.unshift(i):this.allowCustom&&t&&!e.has(n)&&r.push({value:t,label:t,provider:On(t),custom:!0}),r}openMenu(){this.disabled||this.open||(this.open=!0,this.activeIndex=0,this.onOpen())}closeMenu(){this.open=!1,this.query=``,this.activeIndex=0}commit(e){if(this.disabled)return;let t=new Set([...this.value,...this.exclude].map(e=>e.toLowerCase())),n=[];for(let r of e){let e=r.trim(),i=e.toLowerCase();e&&!t.has(i)&&(t.add(i),n.push(e))}n.length>0&&this.onChange([...this.value,...n]),this.query=``,this.activeIndex=0}commitTypedQuery(){let e=l(this.query).map(e=>this.optionFor(e)?.value??e);this.commit(e)}selectRow(e){e.custom?this.commitTypedQuery():this.commit([e.value])}removeAt(e){this.disabled||(this.onChange(this.value.filter((t,n)=>n!==e)),this.input?.focus())}renderChip(e,t){let n=this.optionFor(e),r=n?.provider??On(e),i=n?.label??e;return P`
      <span class="chip multi-select__chip" data-value=${e} title=${e}>
        ${r?ht(r,{className:`multi-select__chip-icon`}):I}
        <span class="multi-select__chip-label">${i}</span>
        <button
          type="button"
          class="chip-remove"
          aria-label=${B(`common.multiSelect.remove`,{value:i})}
          ?disabled=${this.disabled}
          @click=${()=>this.removeAt(t)}
        >
          ${z.x}
        </button>
      </span>
    `}render(){let e=this.open?this.rows():[],t=this.open&&e.length>0?Math.min(this.activeIndex,e.length-1):-1,n=this.accessibleLabel||this.placeholder;return P`
      <div
        class=${this.open?`multi-select multi-select--open`:`multi-select`}
        ?data-disabled=${this.disabled}
        @click=${this.handleFieldClick}
        @focusout=${this.handleFocusOut}
        ${Me(this.setField)}
      >
        ${this.value.map((e,t)=>this.renderChip(e,t))}
        <input
          ${Me(this.setInput)}
          class="multi-select__input"
          type="text"
          role="combobox"
          autocomplete="off"
          spellcheck="false"
          aria-label=${n}
          aria-expanded=${this.open?`true`:`false`}
          aria-controls=${this.listboxId}
          aria-autocomplete="list"
          aria-activedescendant=${t>=0?`${this.listboxId}-${t}`:I}
          placeholder=${this.value.length===0?this.placeholder:``}
          .value=${Ne(this.query)}
          ?disabled=${this.disabled}
          @input=${this.handleInput}
          @keydown=${this.handleKeydown}
        />
        <span class="multi-select__chevron" aria-hidden="true">${z.chevronDown}</span>
      </div>
      <wa-popup class="multi-select__popup" ?active=${this.open} ${Me(this.configurePopup)}>
        <div class="multi-select__menu" role="listbox" id=${this.listboxId} aria-label=${n}>
          ${e.map((e,n)=>P`
              <div
                class="multi-select__option"
                role="option"
                id=${`${this.listboxId}-${n}`}
                aria-selected=${n===t?`true`:`false`}
                data-value=${e.value}
                ?data-custom=${!!e.custom}
                @mousedown=${An}
                @mousemove=${()=>{this.activeIndex!==n&&(this.activeIndex=n)}}
                @click=${()=>this.selectRow(e)}
              >
                ${e.provider?ht(e.provider,{className:`multi-select__option-icon`}):I}
                <span class="picker-select__copy">
                  <span class="picker-select__label">
                    ${e.custom?B(`common.multiSelect.addCustom`,{value:e.value}):e.label}
                  </span>
                  ${e.detail?P`<span class="picker-select__description">${e.detail}</span>`:I}
                </span>
              </div>
            `)}
          ${e.length===0?P`<div class="multi-select__empty">${B(`common.multiSelect.noMatches`)}</div>`:I}
        </div>
      </wa-popup>
    `}},t([L({attribute:!1})],J.prototype,`options`,void 0),t([L({attribute:!1})],J.prototype,`value`,void 0),t([L({attribute:!1})],J.prototype,`exclude`,void 0),t([L({attribute:!1})],J.prototype,`placeholder`,void 0),t([L({attribute:!1})],J.prototype,`accessibleLabel`,void 0),t([L({attribute:!1})],J.prototype,`allowCustom`,void 0),t([L({attribute:!1})],J.prototype,`disabled`,void 0),t([L({attribute:!1})],J.prototype,`onChange`,void 0),t([L({attribute:!1})],J.prototype,`onOpen`,void 0),t([F()],J.prototype,`open`,void 0),t([F()],J.prototype,`query`,void 0),t([F()],J.prototype,`activeIndex`,void 0)})))()}function Mn(){return(Mn=e((()=>{jn(),customElements.get(`openclaw-multi-select`)||customElements.define(`openclaw-multi-select`,J)})))()}function Nn(e){let{agent:t,configForm:n,agentFilesList:r,configLoading:i,configSaving:a,configDirty:o,onConfigReload:s,onConfigSave:c,onModelChange:l,onModelFallbacksChange:u,onSelectPanel:d}=e,f=De(t,n,r,e.defaultId,e.agentIdentity),p=f.isDefault,m=D(n,t.id),h=t.model,g=ee(m.defaults?.model??h),_=k(m.entry?.model),y=k(m.defaults?.model)||(g===`-`?null:ge(g))||(n?null:k(h)),b=_??y??null,x=p?b:_,S=v(m.entry?.model,m.defaults?.model)??(n?null:C(h))??[],w=!e.canUpdateConfig||!n||i||a,T=t.thinkingDefault??`-`,E=e.identityDraft,ne=E.name??e.agentIdentity?.name??t.identity?.name??t.name??``,re=E.emoji??e.agentIdentity?.emoji??t.identity?.emoji??``,O=E.avatar??te(t,e.agentIdentity),ie=ae(t,e.agentIdentity)??(_e(ne||t.id)||`?`),oe=E.name!==null||E.emoji!==null||E.avatar!==null,se=E.name!==null&&!E.name.trim()||E.emoji!==null&&!E.emoji.trim(),A=e.identitySaving||!e.canUpdateIdentity,j=t=>{let n=t.target,r=n.files?.[0];n.value=``,r&&e.onIdentityAvatarSelect(r)},le=ce(n,null,e.modelCatalog,t.id);return P`
    ${U({title:B(`agents.identity.title`),description:B(`agents.identity.subtitle`)},P`
        <div class="settings-row settings-row--stacked">
          <div class="agent-identity-editor">
            <span class="agent-identity-editor__avatar" aria-hidden="true">
              ${O?P`<img src=${O} alt="" decoding="async" />`:P`<span class="agent-identity-editor__avatar-text"
                      >${ie}</span
                    >`}
            </span>
            <div class="agent-identity-editor__fields">
              <label class="field">
                <span>${B(`agents.identity.name`)}</span>
                <input
                  type="text"
                  maxlength="64"
                  .value=${ne}
                  placeholder=${B(`agents.identity.namePlaceholder`)}
                  ?disabled=${A}
                  @input=${t=>e.onIdentityFieldChange(`name`,t.target.value)}
                />
              </label>
              <label class="field agent-identity-editor__emoji">
                <span>${B(`agents.identity.emoji`)}</span>
                <input
                  type="text"
                  maxlength="8"
                  .value=${re}
                  placeholder="🦞"
                  ?disabled=${A}
                  @input=${t=>e.onIdentityFieldChange(`emoji`,t.target.value)}
                />
              </label>
            </div>
          </div>
          ${e.identityError?P`<div class="settings-row__desc" role="alert" style="color: var(--danger);">
                  ${e.identityError}
                </div>`:I}
          <div class="agent-identity-editor__actions">
            <label class="btn btn--sm">
              ${B(O?`agents.identity.replaceImage`:`agents.identity.chooseImage`)}
              <input
                type="file"
                accept="image/*"
                hidden
                ?disabled=${A}
                @change=${j}
              />
            </label>
            <button
              type="button"
              class="btn btn--sm primary"
              ?disabled=${A||!oe||se}
              @click=${()=>e.onIdentitySave()}
            >
              ${e.identitySaving?B(`common.saving`):B(`common.save`)}
            </button>
          </div>
          <div class="settings-row__desc agent-identity-editor__hint">
            ${B(`agents.identity.fileHint`)}
          </div>
        </div>
      `)}
    ${U({title:B(`agents.overview.title`),description:B(`agents.overview.subtitle`)},P`
        <dl class="settings-kv">
          <dt>${B(`agents.context.workspace`)}</dt>
          <dd>
            <openclaw-tooltip .content=${B(`agents.context.openFilesTab`)}>
              <button
                type="button"
                class="workspace-link mono"
                @click=${()=>d(`files`)}
                aria-label=${B(`agents.context.openFilesTab`)}
              >
                ${f.workspace}
              </button>
            </openclaw-tooltip>
          </dd>
          <dt>${B(`agents.context.primaryModel`)}</dt>
          <dd><code>${f.model}</code></dd>
          <dt>${B(`agents.context.runtime`)}</dt>
          <dd><code>${f.runtime}</code></dd>
          <dt>${B(`agents.context.thinkingDefault`)}</dt>
          <dd><code>${T}</code></dd>
          <dt>${B(`agents.context.skillsFilter`)}</dt>
          <dd>${f.skillsLabel}</dd>
        </dl>
      `)}
    ${o?P`<div class="callout warn">${B(`agents.overview.unsavedConfig`)}</div>`:I}
    ${U({title:B(`agents.overview.modelSelection`),actions:P`
          <button
            type="button"
            class="btn btn--sm"
            ?disabled=${i}
            @click=${s}
          >
            ${B(`common.reloadConfig`)}
          </button>
          <button
            type="button"
            class="btn btn--sm primary"
            ?disabled=${!e.canUpdateConfig||a||!o}
            @click=${c}
          >
            ${B(a?`common.saving`:`common.save`)}
          </button>
        `},P`
        ${mt({status:e.modelCatalogStatus})}
        ${V({title:B(p?`agents.overview.primaryModelDefault`:`agents.overview.primaryModel`),control:It({label:B(p?`agents.overview.primaryModelDefault`:`agents.overview.primaryModel`),value:x??``,options:[{value:``,label:p?B(`agents.overview.notSet`):y?B(`agents.overview.inheritDefaultModel`,{model:y}):B(`agents.overview.inheritDefault`)},...ce(n,b??void 0,e.modelCatalog,t.id)],disabled:w,onChange:e=>l(t.id,e||null),onOpen:e.onModelCatalogOpen})})}
        ${V({title:B(`agents.overview.fallbacks`),stacked:!0,control:P`
            <openclaw-multi-select
              class="agent-fallbacks"
              .options=${le}
              .value=${S}
              .exclude=${b?[b]:[]}
              .placeholder=${B(`agents.overview.addFallback`)}
              .accessibleLabel=${B(`agents.overview.fallbacks`)}
              .allowCustom=${!0}
              .disabled=${w}
              .onChange=${e=>u(t.id,e)}
              .onOpen=${e.onModelCatalogOpen}
            ></openclaw-multi-select>
          `})}
      `)}
  `}function Pn(e,t,n){return U({title:B(`agents.context.title`),description:t},P`
      <dl class="settings-kv">
        <dt>${B(`agents.context.workspace`)}</dt>
        <dd>
          <button type="button" class="workspace-link mono" @click=${()=>n(`files`)}>
            ${e.workspace}
          </button>
        </dd>
        <dt>${B(`agents.context.primaryModel`)}</dt>
        <dd><code>${e.model}</code></dd>
        <dt>${B(`agents.context.runtime`)}</dt>
        <dd><code>${e.runtime}</code></dd>
        <dt>${B(`agents.context.identityName`)}</dt>
        <dd>${e.identityName}</dd>
        <dt>${B(`agents.context.identityAvatar`)}</dt>
        <dd>${e.identityAvatar}</dd>
        <dt>${B(`agents.context.skillsFilter`)}</dt>
        <dd>${e.skillsLabel}</dd>
        <dt>${B(`agents.context.default`)}</dt>
        <dd>${e.isDefault?B(`common.yes`):B(`common.no`)}</dd>
      </dl>
    `)}function Fn(){return(Fn=e((()=>{N(),Lt(),Mn(),Qe(),G(),Ke(),R(),g(),d()})))()}function In(e,t){if(!(e instanceof HTMLElement))return;let n=B(t?`agents.files.collapsePreview`:`agents.files.expandPreview`);e.classList.toggle(`is-fullscreen`,t),e.setAttribute(`aria-pressed`,String(t)),e.setAttribute(`aria-label`,n),e.setAttribute(`title`,n)}function Ln(e){e.querySelector(`.md-preview-dialog__panel`)?.classList.remove(`fullscreen`),In(e.querySelector(`.md-preview-expand-btn`),!1),e.classList.remove(`fullscreen`)}function Rn(){return(Rn=e((()=>{R()})))()}function zn(e){let t=e.trim();return t?t.split(/\s+/).length:0}function Bn(e){return e.length===0?0:e.split(/\r?\n/).length}function Vn(e){return e<=0?B(`agents.files.emptyDraft`):B(`agents.files.minRead`,{count:String(Math.max(1,Math.round(e/220)))})}function Hn(e){let t=e.split(`.`).pop()?.trim().toLowerCase();return t===`md`||t===`markdown`?B(`agents.files.markdownPreview`):t?B(`agents.files.extensionPreview`,{ext:t.toUpperCase()}):B(`agents.files.preview`)}function Un(e,t){let n=e.trim(),r=t?.trim();if(!n)return``;if(r&&n===r)return`.`;if(r&&n.startsWith(`${r}/`))return n.slice(r.length+1)||`.`;let i=n.split(/[\\/]+/);for(let e=i.length-1;e>=0;--e){let t=i[e];if(t)return t}return n}function Wn(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)||`preview`}function Gn(e,t){let n=e.channelMeta?.find(e=>e.id===t);return n?.label?n.label:e.channelLabels?.[t]??t}function Kn(e){if(!e)return[];let t=new Set;for(let n of e.channelOrder??[])t.add(n);for(let n of e.channelMeta??[])t.add(n.id);for(let n of Object.keys(e.channelAccounts??{}))t.add(n);let n=[],r=e.channelOrder?.length?e.channelOrder:Array.from(t);for(let e of r)t.has(e)&&(n.push(e),t.delete(e));for(let e of t)n.push(e);return n.map(t=>({id:t,label:Gn(e,t),accounts:e.channelAccounts?.[t]??[]}))}function qn(e){let t=0,n=0,r=0;for(let i of e){let e=i.probe&&typeof i.probe==`object`&&`ok`in i.probe?!!i.probe.ok:!1,a=typeof i.connected==`boolean`||typeof i.running==`boolean`;(i.connected===!0||i.running===!0||!a&&e)&&(t+=1),i.configured&&(n+=1),i.enabled&&(r+=1)}return{total:e.length,connected:t,configured:n,enabled:r}}function Jn(e){let t=Kn(e.snapshot),n=e.lastSuccess?Te(e.lastSuccess):B(`common.never`);return P`
    ${Pn(e.context,B(`agents.context.configurationSubtitle`),e.onSelectPanel)}
    ${e.error?P`<div class="callout danger">${e.error}</div>`:I}
    ${e.snapshot?I:P`<div class="callout info">${B(`agents.channels.loadHint`)}</div>`}
    ${U({title:B(`agents.channels.title`),description:P`${B(`agents.channels.subtitle`)}
        ${B(`agents.channels.lastRefresh`,{time:n})}`,actions:P`
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?B(`common.refreshing`):B(`common.refresh`)}
          </button>
        `},t.length===0?W(B(`agents.channels.empty`)):t.map(t=>{let n=qn(t.accounts),r=n.total?B(`agents.channels.connectedCount`,{connected:String(n.connected),total:String(n.total)}):B(`agents.channels.noAccounts`),i=n.configured?B(`agents.channels.configuredCount`,{count:String(n.configured)}):B(`agents.channels.notConfigured`),a=n.total?B(`agents.channels.enabledCount`,{count:String(n.enabled)}):B(`common.disabled`),o=se({configForm:e.configForm,channelId:t.id,fields:Zn}),s=[t.id,i,a,...o.map(e=>`${e.label}: ${e.value}`)];return V({title:t.label,description:s.join(` · `),control:P`
                ${n.configured===0?P`
                        <a
                          class="settings-row__value"
                          href="https://docs.openclaw.ai/channels"
                          target="_blank"
                          rel="noopener"
                          >${B(`agents.channels.setupGuide`)}</a
                        >
                      `:I}
                ${yt({kind:n.connected>0?`ok`:n.total?`warn`:`muted`,label:r})}
              `})}))}
  `}function Yn(e){return P`
    ${Pn(e.context,B(`agents.context.schedulingSubtitle`),e.onSelectPanel)}
    ${e.error?P`<div class="callout danger">${e.error}</div>`:I}
    ${U({title:B(`agents.cronPanel.schedulerTitle`),description:B(`agents.cronPanel.schedulerSubtitle`),actions:P`
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?B(`common.refreshing`):B(`common.refresh`)}
          </button>
        `},P`
        ${V({title:B(`common.enabled`),control:H(e.status?e.status.enabled?B(`common.yes`):B(`common.no`):B(`common.na`))})}
        ${V({title:B(`agents.cronPanel.jobs`),control:H(e.scopedTotal??B(`common.na`))})}
        ${V({title:B(`agents.cronPanel.nextWake`),control:H(Bt(e.status?.enabled===!1?null:e.scopedNextWakeAtMs))})}
      `)}
    ${U({title:B(`agents.cronPanel.agentJobsTitle`),description:B(`agents.cronPanel.agentJobsSubtitle`)},e.jobs.length===0?W(B(`agents.cronPanel.noJobs`)):P`
            ${e.jobs.map(t=>{let n=[t.description,Vt(t),t.sessionTarget,Ht(t),Wt(t)].filter(Boolean);return V({title:t.name,description:n.join(` · `),control:P`
                  ${yt({kind:t.enabled?`ok`:`warn`,label:t.enabled?B(`common.enabled`):B(`common.disabled`)})}
                  <button
                    class="btn btn--sm"
                    ?disabled=${!e.canRunNow||!t.enabled}
                    @click=${()=>e.onRunNow(t.id)}
                  >
                    ${B(`agents.cronPanel.runNow`)}
                  </button>
                `})})}
            ${Rt({jobsShown:e.jobs.length,jobsTotal:e.jobsTotal,hasMore:e.jobsHasMore,loading:e.loading,loadingMore:e.jobsLoadingMore,onLoadMore:e.onLoadMore})}
          `)}
  `}function Xn(e){let t=e.agentFilesList?.agentId===e.agentId?e.agentFilesList:null,n=t?.files??[],r=e.agentFileActive??null,i=e=>e.missing&&e.expectedAbsent===!0&&e.name!==r,a=n.filter(e=>!i(e)),o=n.filter(i),s=r?n.find(e=>e.name===r)??null:null,c=r?e.agentFileContents[r]??``:``,l=r?e.agentFileDrafts[r]??c:``,u=r?l!==c:!1,d=s?ct(l,{codeBlockChrome:`none`,mode:`document`}):``,f=_(new TextEncoder().encode(l).length),p=zn(l),m=Bn(l),h=s?Un(s.path,t?.workspace):``,g=s?`agent-file-preview-title-${Wn(s.name)}`:``,v=s?.missing?B(`agents.files.willCreateOnSave`):B(u?`agents.files.liveDraftPreview`:`agents.files.savedPreview`),y=s?.missing?`is-missing`:u?`is-dirty`:`is-synced`,b=s?.updatedAtMs?B(`agents.files.updated`,{time:Te(s.updatedAtMs)}):s?.missing?B(`agents.files.notCreatedYet`):B(`agents.files.updatedUnknown`);return P`
    ${e.agentFilesError?P`<div class="callout danger">${e.agentFilesError}</div>`:I}
    ${U({title:B(`agents.files.coreFilesTitle`),description:t?P`${B(`agents.files.coreFilesSubtitle`)} ${B(`agents.files.workspace`)}:
              <code>${t.workspace}</code>`:B(`agents.files.coreFilesSubtitle`),actions:P`
          <button
            class="btn btn--sm"
            ?disabled=${e.agentFilesLoading}
            @click=${()=>e.onLoadFiles(e.agentId)}
          >
            ${e.agentFilesLoading?B(`common.loading`):B(`common.refresh`)}
          </button>
        `},t?n.length===0?W(B(`agents.files.empty`)):P`
              <div class="agents-panel-body">
                <div class="agent-file-tabs">
                  ${wt({id:`agent-files`,active:r,tabs:a.map(t=>({value:t.name,label:t.name.replace(/\.md$/i,``),badge:t.missing&&t.expectedAbsent!==!0?B(`agents.files.missing`):void 0,disabled:e.agentFilesLoading})),ariaLabel:B(`agents.files.coreFilesTitle`),panelId:`agent-file-panel`,variant:`sub`,onSelect:e.onSelectFile})}
                  ${o.length===0?I:P`
                          <select
                            class="agent-tab-add"
                            aria-label=${B(`agents.files.addFile`)}
                            .value=${``}
                            ?disabled=${e.agentFilesLoading}
                            @change=${t=>{let n=t.target,r=n.value;n.value=``,r&&e.onSelectFile(r)}}
                          >
                            <option value="">${B(`agents.files.addFile`)}</option>
                            ${o.map(e=>P`<option value=${e.name}>
                                  ${e.name.replace(/\.md$/i,``)}
                                </option>`)}
                          </select>
                        `}
                </div>
                <div
                  id="agent-file-panel"
                  role="tabpanel"
                  aria-labelledby=${r?`agent-files-tab-${r}`:I}
                >
                  ${s?P`
                          <div class="agent-file-header">
                            <div>
                              <div class="agent-file-sub mono">${s.path}</div>
                            </div>
                            <div class="agent-file-actions">
                              <button
                                class="btn btn--sm"
                                @click=${e=>{e.currentTarget.closest(`.settings-group`)?.querySelector(`openclaw-modal-dialog`)?.show()}}
                              >
                                ${z.eye} ${B(`agents.files.preview`)}
                              </button>
                              <button
                                class="btn btn--sm"
                                ?disabled=${!e.canWrite||!u}
                                @click=${()=>e.onFileReset(s.name)}
                              >
                                ${B(`common.reset`)}
                              </button>
                              <button
                                class="btn btn--sm primary"
                                ?disabled=${!e.canWrite||e.agentFileSaving||!u}
                                @click=${()=>e.onFileSave(s.name)}
                              >
                                ${e.agentFileSaving?B(`common.saving`):B(`common.save`)}
                              </button>
                            </div>
                          </div>
                          ${s.missing?P`<div class="callout info">
                                  ${s.expectedAbsent===!0?B(`agents.files.createHint`):B(`agents.files.missingHint`)}
                                </div>`:I}
                          <label class="field agent-file-field">
                            <span>${B(`agents.files.content`)}</span>
                            <textarea
                              class="agent-file-textarea"
                              ?disabled=${!e.canWrite}
                              .value=${l}
                              @input=${t=>e.onFileDraftChange(s.name,t.target.value)}
                            ></textarea>
                          </label>
                          <openclaw-modal-dialog
                            manual
                            label=${s.name}
                            style="--openclaw-modal-width: min(1040px, calc(100vw - 32px));"
                            @modal-cancel=${e=>{Ln(e.currentTarget)}}
                          >
                            <div class="md-preview-dialog__panel">
                              <div class="md-preview-dialog__header">
                                <div class="md-preview-dialog__header-main">
                                  <div class="md-preview-dialog__eyebrow">
                                    ${z.scrollText}
                                    <span>${Hn(s.name)}</span>
                                  </div>
                                  <div class="md-preview-dialog__title-wrap">
                                    <div
                                      id=${g}
                                      class="md-preview-dialog__title"
                                      translate="no"
                                    >
                                      ${s.name}
                                    </div>
                                    <div class="md-preview-dialog__path mono" translate="no">
                                      ${h}
                                    </div>
                                  </div>
                                </div>
                                <div class="md-preview-dialog__actions">
                                  <openclaw-tooltip .content=${B(`agents.files.expandPreview`)}>
                                    <button
                                      type="button"
                                      class="btn btn--sm md-preview-icon-btn md-preview-expand-btn"
                                      aria-label=${B(`agents.files.expandPreview`)}
                                      aria-pressed="false"
                                      @click=${e=>{let t=e.currentTarget,n=t.closest(`.md-preview-dialog__panel`);if(!n)return;let r=n.classList.toggle(`fullscreen`);t.closest(`openclaw-modal-dialog`)?.classList.toggle(`fullscreen`,r),In(t,r)}}
                                    >
                                      <span class="when-normal" aria-hidden="true"
                                        >${z.maximize}</span
                                      ><span class="when-fullscreen" aria-hidden="true"
                                        >${z.minimize}</span
                                      >
                                    </button>
                                  </openclaw-tooltip>
                                  <openclaw-tooltip .content=${B(`agents.files.editFile`)}>
                                    <button
                                      type="button"
                                      class="btn btn--sm md-preview-icon-btn"
                                      aria-label=${B(`agents.files.editFile`)}
                                      @click=${e=>{let t=e.currentTarget.closest(`openclaw-modal-dialog`),n=t?.closest(`.settings-group`)?.querySelector(`.agent-file-textarea`);t?.setReturnFocusTarget(n??null),t?.hide(),t&&Ln(t)}}
                                    >
                                      <span aria-hidden="true">${z.edit}</span>
                                    </button>
                                  </openclaw-tooltip>
                                  <openclaw-tooltip .content=${B(`agents.files.closePreview`)}>
                                    <button
                                      type="button"
                                      class="btn btn--sm md-preview-icon-btn"
                                      aria-label=${B(`agents.files.closePreview`)}
                                      @click=${e=>{let t=e.currentTarget.closest(`openclaw-modal-dialog`);t?.hide(),t&&Ln(t)}}
                                    >
                                      <span aria-hidden="true">${z.x}</span>
                                    </button>
                                  </openclaw-tooltip>
                                </div>
                              </div>
                              <div class="md-preview-dialog__meta">
                                <div class="md-preview-dialog__chip ${y}">
                                  <strong>${v}</strong>
                                </div>
                                <div class="md-preview-dialog__chip">
                                  <strong>${Vn(p)}</strong>
                                  <span
                                    >${B(`agents.files.words`,{count:String(p)})}</span
                                  >
                                </div>
                                <div class="md-preview-dialog__chip">
                                  <strong>${m}</strong>
                                  <span>${B(`agents.files.lines`)}</span>
                                </div>
                                <div class="md-preview-dialog__chip">
                                  <strong>${f}</strong>
                                  <span>${b}</span>
                                </div>
                              </div>
                              <div class="md-preview-dialog__body">
                                <article class="md-preview-dialog__reader sidebar-markdown">
                                  ${Pe(d)}
                                </article>
                              </div>
                            </div>
                          </openclaw-modal-dialog>
                        `:P`<div class="muted">${B(`agents.files.selectFile`)}</div>`}
                </div>
              </div>
            `:W(B(`agents.files.loadHint`)))}
  `}var Zn;function Qn(){return(Qn=e((()=>{N(),Ie(),zt(),Tt(),Ge(),st(),qe(),Ke(),G(),R(),g(),oe(),xe(),Ut(),Rn(),Fn(),Zn=[`groupPolicy`,`streamMode`,`dmPolicy`]})))()}var $n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr;function pr(){return(pr=e((()=>{$n=`Run shell now.`,er=`Inspect/control exec sessions.`,tr=`Schedule reminders, automations, wake events.`,nr=`List visible sessions; filters/previews.`,rr=`Read sanitized session history.`,ir=`Search past session transcripts.`,ar=`Run same-Gateway session/agent.`,or=`Spawn hidden subagent (ephemeral) or visible work session (durable).`,sr=`Wait for collector subagents.`,cr=`Show session status/model/usage.`,lr=`Ask the user and wait for an answer.`,ur=`Suggest follow-up work for operator approval.`,dr=`Withdraw a pending task suggestion.`,fr=`Author reusable skills under the available tool's publication and review policy. Read one complete artifact when it fits the model budget.`})))()}var mr;function hr(){return(hr=e((()=>{mr=`automations`})))()}function gr(e){return Y.filter(t=>t.profiles.includes(e)).map(e=>e.id)}function _r(){let e=new Map;for(let t of Y){let n=`group:${t.sectionId}`,r=e.get(n)??[];r.push(t.id),e.set(n,r)}return{"group:openclaw":Y.filter(e=>e.includeInOpenClawGroup).map(e=>e.id),...Object.fromEntries(e.entries())}}function vr(e){if(!e)return;let t=br[e];if(t&&!(!t.allow&&!t.deny))return{allow:t.allow?[...t.allow]:void 0,deny:t.deny?[...t.deny]:void 0}}var yr,Y,br,xr;function Sr(){return(Sr=e((()=>{pr(),hr(),yr=[{id:`fs`,label:`Files`},{id:`runtime`,label:`Runtime`},{id:`web`,label:`Web`},{id:`memory`,label:`Memory`},{id:`sessions`,label:`Sessions`},{id:`ui`,label:`UI`},{id:`messaging`,label:`Messaging`},{id:`automation`,label:`Automation`},{id:`nodes`,label:`Nodes`},{id:`agents`,label:`Agents`},{id:`media`,label:`Media`}],Y=[{id:`ls`,description:`List directory entries`,sectionId:`fs`,profiles:[`coding`]},{id:`read`,description:`Read file contents`,sectionId:`fs`,profiles:[`coding`]},{id:`write`,description:`Create or overwrite files`,sectionId:`fs`,profiles:[`coding`]},{id:`edit`,description:`Make precise edits`,sectionId:`fs`,profiles:[`coding`]},{id:`apply_patch`,description:`Patch files`,sectionId:`fs`,profiles:[`coding`]},{id:`exec`,description:$n,sectionId:`runtime`,profiles:[`coding`]},{id:`process`,description:er,sectionId:`runtime`,profiles:[`coding`]},{id:`code_execution`,description:`Run sandboxed remote analysis`,sectionId:`runtime`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`secrets`,description:`Request and manage write-only credentials`,sectionId:`runtime`,profiles:[`coding`,`messaging`],includeInOpenClawGroup:!0},{id:`web_search`,description:`Search the web`,sectionId:`web`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`web_fetch`,description:`Fetch web content`,sectionId:`web`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`x_search`,description:`Search X posts`,sectionId:`web`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`memory_search`,description:`Semantic search`,sectionId:`memory`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`memory_get`,description:`Read memory files`,sectionId:`memory`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`sessions`,description:`Session settings: label, pin, archive, groups`,sectionId:`sessions`,profiles:[`coding`,`messaging`],includeInOpenClawGroup:!0},{id:`sessions_list`,description:nr,sectionId:`sessions`,profiles:[`coding`,`messaging`],includeInOpenClawGroup:!0},{id:`sessions_history`,description:rr,sectionId:`sessions`,profiles:[`coding`,`messaging`],includeInOpenClawGroup:!0},{id:`sessions_search`,description:ir,sectionId:`sessions`,profiles:[`coding`,`messaging`],includeInOpenClawGroup:!0},{id:`conversations_list`,description:`List exact external conversation addresses`,sectionId:`sessions`,profiles:[`coding`,`messaging`],includeInOpenClawGroup:!0},{id:`conversations_send`,description:`Send to an exact external conversation`,sectionId:`sessions`,profiles:[`coding`,`messaging`],includeInOpenClawGroup:!0},{id:`conversations_turn`,description:`Send and wait for a correlated external reply`,sectionId:`sessions`,profiles:[`coding`,`messaging`],includeInOpenClawGroup:!0},{id:`sessions_send`,description:ar,sectionId:`sessions`,profiles:[`coding`,`messaging`],includeInOpenClawGroup:!0},{id:`sessions_spawn`,description:or,sectionId:`sessions`,profiles:[`coding`,`messaging`],includeInOpenClawGroup:!0},{id:`github_identity_status`,description:`Inspect the effective GitHub identity and credential health`,sectionId:`sessions`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`github_publish`,description:`Publish the reconciled session worktree as a draft GitHub pull request`,sectionId:`sessions`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`agents_wait`,description:sr,sectionId:`sessions`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`sessions_yield`,description:`End turn to receive sub-agent results`,sectionId:`sessions`,profiles:[`coding`,`messaging`],includeInOpenClawGroup:!0},{id:`subagents`,description:`Background work: subagents, media gen, automation runs. list/cancel.`,sectionId:`sessions`,profiles:[`coding`,`messaging`],includeInOpenClawGroup:!0},{id:`session_status`,description:cr,sectionId:`sessions`,profiles:[`minimal`,`coding`,`messaging`],includeInOpenClawGroup:!0},{id:`suggest_task`,description:ur,sectionId:`sessions`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`dismiss_task`,description:dr,sectionId:`sessions`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`browser`,description:`Control web browser`,sectionId:`ui`,profiles:[],includeInOpenClawGroup:!0},{id:`screen`,description:`Drive operator web UI`,sectionId:`ui`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`dashboard`,description:`Read and arrange the session dashboard`,sectionId:`ui`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`terminal`,description:`Use shared operator terminals with policy-governed input`,sectionId:`ui`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`portal`,description:`Expose local web apps through the gateway`,sectionId:`ui`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`canvas`,description:`Control node Canvas surfaces when the Canvas plugin is enabled`,sectionId:`ui`,profiles:[]},{id:`show_widget`,description:`Show an interactive widget on chat or an auto-fitting dashboard`,sectionId:`ui`,profiles:[],includeInOpenClawGroup:!0},{id:`message`,description:`Send messages`,sectionId:`messaging`,profiles:[`messaging`],includeInOpenClawGroup:!0},{id:`heartbeat_respond`,description:`Accept heartbeat outcomes for post-turn handling`,sectionId:`automation`,profiles:[],includeInOpenClawGroup:!0},{id:mr,description:tr,sectionId:`automation`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`gateway`,description:`Read Gateway config/schema; owner-only OpenClaw self-update`,sectionId:`automation`,profiles:[],includeInOpenClawGroup:!0},{id:`nodes`,description:`Nodes + devices`,sectionId:`nodes`,profiles:[],includeInOpenClawGroup:!0},{id:`computer`,description:`Control a paired computer node desktop`,sectionId:`nodes`,profiles:[],includeInOpenClawGroup:!0},{id:`mobile_ui`,description:`Observe and control a paired Android app`,sectionId:`nodes`,profiles:[],includeInOpenClawGroup:!0},{id:`agents_list`,description:`List agents`,sectionId:`agents`,profiles:[],includeInOpenClawGroup:!0},{id:`get_goal`,description:`Get current thread goal`,sectionId:`agents`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`create_goal`,description:`Create a thread goal`,sectionId:`agents`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`update_goal`,description:`Complete or block a thread goal`,sectionId:`agents`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`progress_card`,description:`Maintain the session progress card`,sectionId:`agents`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`ask_user`,description:lr,sectionId:`agents`,profiles:[`coding`,`messaging`],includeInOpenClawGroup:!0},{id:`skill_workshop`,description:fr,sectionId:`agents`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`view_image`,description:`Image understanding`,sectionId:`media`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`image_generate`,description:`Image generation`,sectionId:`media`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`music_generate`,description:`Music generation`,sectionId:`media`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`video_generate`,description:`Video generation`,sectionId:`media`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`tts`,description:`Text-to-speech conversion`,sectionId:`media`,profiles:[],includeInOpenClawGroup:!0}],new Map(Y.map(e=>[e.id,e])),yr.map(({id:e,label:t})=>({id:e,label:t,tools:Y.filter(t=>t.sectionId===e)})),br={minimal:{allow:gr(`minimal`)},coding:{allow:[...gr(`coding`),`bundle-mcp`]},messaging:{allow:[...gr(`messaging`),`bundle-mcp`]},full:{allow:[`*`]}},xr=_r()})))()}function X(e){let t=s(e);return Er.get(t)??t}function Cr(e){return e?e.map(X).filter(Boolean):[]}function wr(e){let t=Cr(e),n=[];for(let e of t){let t=Object.hasOwn(Z,e)?Z[e]:void 0;if(t){n.push(...t);continue}n.push(e)}return o(n)}function Tr(e){return vr(e)}var Er,Z;function Dr(){return(Dr=e((()=>{c(),Sr(),Er=new Map([[`bash`,`exec`],[`apply-patch`,`apply_patch`],[`cron`,`automations`]]),Z={...xr}})))()}function Or(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function kr(e){let t=e.normalize(e.raw);return t?t===`*`?{kind:`all`}:t.includes(`*`)?{kind:`regex`,value:RegExp(`^${Or(t).replaceAll(`\\*`,`.*`)}$`)}:{kind:`exact`,value:t}:{kind:`exact`,value:``}}function Ar(e){return Array.isArray(e.raw)?e.raw.map(t=>kr({raw:t,normalize:e.normalize})).filter(e=>e.kind!==`exact`||e.value):[]}function Q(e,t){for(let n of t)if(n.kind===`all`||n.kind===`exact`&&e===n.value||n.kind===`regex`&&n.value.test(e))return!0;return!1}function jr(e){return Array.isArray(e)?Ar({raw:wr(e),normalize:X}):[]}function Mr(e,t){if(!t)return!0;let n=X(e);if(Q(n,jr(t.deny)))return!1;let r=jr(t.allow);return!!(r.length===0||Q(n,r)||n===`apply_patch`&&Q(`exec`,r))}function Nr(e,t){if(!Array.isArray(t)||t.length===0)return!1;let n=X(e),r=jr(t);return!!(Q(n,r)||n===`apply_patch`&&Q(`exec`,r))}function Pr(){return(Pr=e((()=>{Dr()})))()}function Fr(e){return e.length===0?I:P`
    <div class="agent-tool-badges">
      ${e.map(e=>P`<span class="settings-row__value">${e}</span>`)}
    </div>
  `}function Ir(e,t){let n=t.source??e.source,r=t.pluginId??e.pluginId,i=[];return n===`plugin`&&r?i.push(B(`agentTools.plugin`,{id:r})):n===`core`&&i.push(B(`agentTools.builtIn`)),t.optional&&i.push(B(`agentTools.optional`)),i}function Lr(e){let t=Ir(e.section,e.tool);return e.activeEntry&&t.unshift(B(`agentTools.liveNow`)),t}function Rr(e){return e.denied?B(`agentTools.disabledByOverride`):e.allowed&&e.baseAllowed?B(`agentTools.enabledByProfile`):e.allowed?B(`agentTools.enabledByOverride`):B(`agentTools.notIncluded`)}function zr(e,t){let n=t.source??e.source,r=t.pluginId??e.pluginId;return n===`plugin`&&r?B(`agentTools.plugin`,{id:r}):B(`agentTools.builtIn`)}function Br(e){return e.denied?B(`agentTools.overrideOff`):e.allowed&&e.baseAllowed?B(`agentTools.enabled`):e.allowed?B(`agentTools.overrideOn`):B(`agentTools.profileOff`)}function Vr(e){return e.activeEntry?B(`agentTools.liveNow`):e.runtimeSessionMatchesSelectedAgent?B(`agentTools.notLive`):B(`agentTools.otherAgent`)}function Hr(e){return`agent-tool-${X(e).replace(/[^a-z0-9_-]+/g,`-`)}`}function Ur(e){return(e??[]).flatMap(e=>e.tools)}function Wr(e){let t=e.currentTarget;if(!(!(t instanceof HTMLDetailsElement)||t.open))for(let e of t.querySelectorAll(`.agent-tool-card[open]`))e.open=!1}function Gr(e,t){let n=document.getElementById(t);if(!(n instanceof HTMLDetailsElement))return;e.preventDefault();let r=n.closest(`.agent-tools-group`);r&&(r.open=!0),n.open=!0;let i=new URL(window.location.href);i.hash=t,window.history.replaceState(null,``,i),requestAnimationFrame(()=>{n.scrollIntoView?.({block:`center`,behavior:St()}),n.querySelector(`summary`)?.focus()})}function Kr(e){let t=e?.notices??[];return t.length===0?I:P`
    <div class="agent-tools-notices">
      ${t.map(e=>P`
          <div
            class="callout ${e.severity===`warning`?`warning`:`info`}"
            style="margin-top: 12px"
          >
            ${w(e.message)}
          </div>
        `)}
    </div>
  `}function qr(e){return e.source===`plugin`?e.pluginId?B(`agentTools.connectedSource`,{id:e.pluginId}):B(`agentTools.connected`):e.source===`channel`?e.channelId?B(`agentTools.channelSource`,{id:e.channelId}):B(`agentTools.channel`):e.source===`mcp`?`MCP`:B(`agentTools.builtIn`)}function Jr(e){let t=D(e.configForm,e.agentId),n=t.entry?.tools??{},r=t.globalTools??{},i=n.profile??r.profile??`full`,a=Ft(e.toolsCatalogResult),o=Nt(e.toolsCatalogResult),s=n.profile?B(`agentTools.profileSourceAgent`):r.profile?B(`agentTools.profileSourceGlobal`):B(`agentTools.profileSourceDefault`),c=Array.isArray(n.allow)&&n.allow.length>0,l=Array.isArray(r.allow)&&r.allow.length>0,u=e.canUpdateConfig&&!!e.configForm&&!e.configLoading&&!e.configSaving&&!c&&!(e.toolsCatalogLoading&&!e.toolsCatalogResult&&!e.toolsCatalogError),d=c?[]:Array.isArray(n.alsoAllow)?n.alsoAllow:[],f=c?[]:Array.isArray(n.deny)?n.deny:[],p=c?{allow:n.allow??[],deny:n.deny??[]}:Tr(i),m=o.flatMap(e=>e.tools.map(e=>e.id)),h=e=>{let t=Mr(e,p),n=Nr(e,d),r=Nr(e,f);return{allowed:(t||n)&&!r,baseAllowed:t,denied:r}},g=m.filter(e=>h(e).allowed).length,_=e.runtimeSessionMatchesSelectedAgent&&!e.toolsEffectiveError?Ur(e.toolsEffectiveResult?.groups):[],v=Array.from(new Map(_.map(e=>[X(e.id),e])).values()),y=v.slice(0,Qr),b=Math.max(0,v.length-y.length),x=v.length,S=new Map(_.map(e=>[X(e.id),e])),C=new Set(S.keys()),w=e=>e.toSorted((e,t)=>{let n=X(e.id),r=X(t.id),i=+!!C.has(n),a=+!!C.has(r);if(i!==a)return a-i;let o=+!!h(e.id).allowed,s=+!!h(t.id).allowed;return o===s?e.label.localeCompare(t.label):s-o}),T=(t,n)=>{let r=new Set(Cr(d)),i=new Set(Cr(f));for(let e of t){let t=h(e).baseAllowed,a=X(e);n?(i.delete(a),t||r.add(a)):(r.delete(a),i.add(a))}e.onOverridesChange(e.agentId,[...r],[...i])},E=e.runtimeSessionMatchesSelectedAgent?e.toolsEffectiveLoading&&!e.toolsEffectiveResult&&!e.toolsEffectiveError?gt({label:B(`agentTools.loadingAvailable`),rows:2}):e.toolsEffectiveError?W(B(`agentTools.availableError`)):(e.toolsEffectiveResult?.groups?.length??0)===0?W(B(`agentTools.noAvailable`)):P`
              <div class="agents-panel-body">
                <div class="agent-tools-runtime">
                  ${y.map(e=>{let t=Hr(e.id);return P`
                      <a
                        class="agent-tools-runtime-chip"
                        href="#${t}"
                        @click=${e=>Gr(e,t)}
                      >
                        <span class="mono" translate="no">${e.label}</span>
                        <span class="agent-tools-runtime-chip__meta"
                          >${qr(e)}</span
                        >
                      </a>
                    `})}
                  ${b>0?P`
                          <span
                            class="agent-tools-runtime-chip agent-tools-runtime-chip--more"
                            title=${B(`agentTools.moreLiveTitle`,{count:String(b)})}
                          >
                            ${B(`agentTools.moreLive`,{count:String(b)})}
                          </span>
                        `:I}
                </div>
              </div>
            `:W(B(`agentTools.switchAgent`));return P`
    ${e.configForm?I:P`<div class="callout info">${B(`agentTools.loadConfig`)}</div>`}
    ${c?P`<div class="callout info">${B(`agentTools.explicitAllowlist`)}</div>`:I}
    ${l?P`<div class="callout info">${B(`agentTools.globalAllowlist`)}</div>`:I}
    ${e.toolsCatalogError?P`<div class="callout info">${B(`agentTools.catalogFallback`)}</div>`:I}
    ${U({title:B(`agentTools.title`),description:P`${B(`agentTools.subtitle`)}
          <span class="mono"
            >${B(`agentTools.enabledSummary`,{enabled:String(g),total:String(m.length)})}</span
          >`,actions:P`
          <button
            class="btn btn--sm"
            ?disabled=${!u}
            @click=${()=>T(m,!0)}
          >
            ${B(`agentTools.enableAll`)}
          </button>
          <button
            class="btn btn--sm"
            ?disabled=${!u}
            @click=${()=>T(m,!1)}
          >
            ${B(`agentTools.disableAll`)}
          </button>
          <button
            class="btn btn--sm"
            ?disabled=${e.configLoading}
            @click=${e.onConfigReload}
          >
            ${B(`common.reloadConfig`)}
          </button>
          <button
            class="btn btn--sm primary"
            ?disabled=${!e.canUpdateConfig||e.configSaving||!e.configDirty}
            @click=${e.onConfigSave}
          >
            ${e.configSaving?B(`common.saving`):B(`common.save`)}
          </button>
        `},P`
        <dl class="settings-kv">
          <dt>${B(`agentTools.profile`)}</dt>
          <dd><code>${i}</code></dd>
          <dt>${B(`agentTools.source`)}</dt>
          <dd>${s}</dd>
          <dt>${B(`agentTools.enabled`)}</dt>
          <dd><code>${g}/${m.length}</code></dd>
          <dt>${B(`agentTools.live`)}</dt>
          <dd><code>${x}</code></dd>
          <dt>${B(`agentTools.status`)}</dt>
          <dd>
            ${e.configSaving?B(`agentTools.statusSaving`):e.configDirty?B(`agentTools.statusUnsaved`):B(`agentTools.statusSaved`)}
          </dd>
        </dl>
        ${V({title:B(`agentTools.quickPresets`),stacked:!0,control:P`
            <div class="agent-tools-buttons">
              ${a.map(t=>P`
                  <button
                    class="btn btn--sm ${i===t.id?`active`:``}"
                    ?disabled=${!u}
                    @click=${()=>e.onProfileChange(e.agentId,t.id,!0)}
                  >
                    ${t.label}
                  </button>
                `)}
              <button
                class="btn btn--sm"
                ?disabled=${!u}
                @click=${()=>e.onProfileChange(e.agentId,null,!1)}
              >
                ${B(`agentTools.inherit`)}
              </button>
            </div>
          `})}
      `)}
    ${U({title:B(`agentTools.availableNow`),description:P`${B(`agentTools.availableNowSubtitle`)}
          <span class="mono">${e.runtimeSessionKey||B(`agentTools.noSession`)}</span>`},P`${Kr(e.toolsEffectiveResult)}${E}`)}
    ${At(e.githubIdentity,e.onOpenGitHubConnections)}
    ${U({title:B(`agentTools.catalogTitle`)},P`
        ${e.toolsCatalogLoading&&!e.toolsCatalogResult&&!e.toolsCatalogError?gt({label:B(`agentTools.loadingCatalog`)}):I}
        <div
          class="agents-panel-body agent-tools-grid"
          ?hidden=${e.toolsCatalogLoading&&!e.toolsCatalogResult&&!e.toolsCatalogError}
        >
          ${o.map(t=>{let n=w(t.tools),r=t.tools.filter(e=>h(e.id).allowed).length,i=t.tools.filter(e=>C.has(X(e.id))).length,a=n.slice(0,4),o=Math.max(0,n.length-a.length);return P`
              <details class="agent-tools-group" @toggle=${Wr}>
                <summary class="agent-tools-group__summary">
                  <span class="agent-tools-group__summary-main">
                    <span class="agent-tools-group__title">
                      ${t.label}
                      ${t.source===`plugin`&&t.pluginId?P`<span class="settings-row__value"
                              >${B(`agentTools.plugin`,{id:t.pluginId})}</span
                            >`:I}
                    </span>
                    <span
                      class="agent-tools-group__preview"
                      aria-label=${B(`agentTools.toolPreview`)}
                    >
                      ${a.map(e=>P`<span class="mono" translate="no" title=${e.label}
                            >${e.label}</span
                          >`)}
                      ${o>0?P`<span
                              >${B(`agentTools.more`,{count:String(o)})}</span
                            >`:I}
                    </span>
                  </span>
                  <span class="agent-tools-group__counts">
                    <span
                      >${B(t.tools.length===1?`agentTools.toolsOne`:`agentTools.tools`,{count:String(t.tools.length)})}</span
                    >
                    <span
                      >${B(r===1?`agentTools.enabledToolsOne`:`agentTools.enabledTools`,{count:String(r)})}</span
                    >
                    ${i>0?P`<span
                            >${B(i===1?`agentTools.liveToolsOne`:`agentTools.liveTools`,{count:String(i)})}</span
                          >`:I}
                  </span>
                </summary>
                <div class="agent-tools-list agent-tools-list--stacked">
                  ${n.map(n=>{let r=Hr(n.id),i=h(n.id),a=S.get(X(n.id))??null,o=n.defaultProfiles??[],s=Lr({section:t,tool:n,activeEntry:a}),c=Br(i),l=Vr({activeEntry:a,runtimeSessionMatchesSelectedAgent:e.runtimeSessionMatchesSelectedAgent});return P`
                      <details class="agent-tool-card" id=${r}>
                        <summary class="agent-tool-summary">
                          <div class="agent-tool-summary__main">
                            <div class="agent-tool-summary__title-row">
                              <span class="agent-tool-title mono" translate="no"
                                >${n.label}</span
                              >
                            </div>
                            <div class="agent-tool-sub">${n.description}</div>
                          </div>
                          <dl class="agent-tool-summary__facts">
                            <div class="agent-tool-summary__fact">
                              <dt class="label">${B(`agentTools.access`)}</dt>
                              <dd>${c}</dd>
                            </div>
                            <div class="agent-tool-summary__fact">
                              <dt class="label">${B(`agentTools.session`)}</dt>
                              <dd>${l}</dd>
                            </div>
                          </dl>
                          <div class="agent-tool-summary__badges">
                            ${Fr(s)}
                          </div>
                          <span
                            class="agent-tool-toggle"
                            @click=${e=>e.stopPropagation()}
                            @keydown=${e=>e.stopPropagation()}
                          >
                            ${et({checked:i.allowed,disabled:!u,ariaLabel:B(i.allowed?`agentTools.disableNamed`:`agentTools.enableNamed`,{name:n.label}),onChange:e=>T([n.id],e)})}
                          </span>
                        </summary>
                        <div class="agent-tool-details">
                          <div class="agent-tool-details-strip">
                            <div class="agent-tool-detail agent-tool-detail--inline">
                              <div class="label">${B(`agentTools.access`)}</div>
                              <div>${Rr(i)}</div>
                            </div>
                            <div class="agent-tool-detail agent-tool-detail--inline">
                              <div class="label">${B(`agentTools.source`)}</div>
                              <div>${zr(t,n)}</div>
                            </div>
                            ${o.length>0?P`
                                    <div class="agent-tool-detail agent-tool-detail--inline">
                                      <div class="label">${B(`agentTools.defaultPresets`)}</div>
                                      <div class="agent-tool-badges">
                                        ${o.map(e=>P`<span class="settings-row__value"
                                              >${e}</span
                                            >`)}
                                      </div>
                                    </div>
                                  `:I}
                            <div class="agent-tool-detail agent-tool-detail--inline">
                              <div class="label">${B(`agentTools.session`)}</div>
                              <div>
                                ${a?B(`agentTools.availableVia`,{source:qr(a)}):e.runtimeSessionMatchesSelectedAgent?B(`agentTools.unavailableSession`):B(`agentTools.inspectAgent`)}
                              </div>
                            </div>
                            <a class="agent-tool-jump" href="#${r}">
                              ${B(`agentTools.linkTool`)}
                            </a>
                          </div>
                        </div>
                      </details>
                    `})}
                </div>
              </details>
            `})}
        </div>
      `)}
  `}function Yr(e){let t=e.canUpdateConfig&&!!e.configForm&&!e.configLoading&&!e.configSaving,n=D(e.configForm,e.agentId),r=Array.isArray(n.entry?.skills)?u(n.entry.skills):void 0,i=O(e.configForm,e.agentId),a=new Set(i??[]),o=i!==void 0,c=r===void 0&&o,l=e.canPatchConfig&&r!==void 0&&!!e.configForm&&!e.configLoading&&!e.configSaving,d=!!(e.report&&e.activeAgentId===e.agentId),f=d?e.report?.skills??[]:[],p=s(e.filter),m=p?f.filter(e=>s([e.name,e.description,e.source].join(` `)).includes(p)):f,h=qt(m),g=o?f.filter(e=>a.has(e.name)).length:f.length,_=f.length;return P`
    ${e.configForm?I:P`<div class="callout info">${B(`agents.skillsPanel.loadConfig`)}</div>`}
    ${o?P`<div class="callout info">
            ${B(c?`agents.skillsPanel.inheritedAllowlist`:`agents.skillsPanel.customAllowlist`)}
          </div>`:P`<div class="callout info">${B(`agents.skillsPanel.allEnabled`)}</div>`}
    ${!d&&!e.loading?P`<div class="callout info">${B(`agents.skillsPanel.loadAgent`)}</div>`:I}
    ${e.error?P`<div class="callout danger">${e.error}</div>`:I}
    ${U({title:B(`agents.skillsPanel.title`),description:P`${B(`agents.skillsPanel.subtitle`)}
        ${_>0?P`<span class="mono">${g}/${_}</span>`:I}`,actions:P`
          <button
            class="btn btn--sm"
            ?disabled=${!t}
            @click=${()=>e.onDisableAll(e.agentId)}
          >
            ${B(`agentTools.disableAll`)}
          </button>
          <button
            class="btn btn--sm"
            ?disabled=${!l}
            @click=${()=>e.onClear(e.agentId)}
          >
            ${B(`common.reset`)}
          </button>
          <button
            class="btn btn--sm"
            ?disabled=${e.configLoading}
            @click=${e.onConfigReload}
          >
            ${B(`common.reloadConfig`)}
          </button>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?B(`common.loading`):B(`common.refresh`)}
          </button>
          <button
            class="btn btn--sm primary"
            ?disabled=${!e.canUpdateConfig||e.configSaving||!e.configDirty}
            @click=${e.onConfigSave}
          >
            ${e.configSaving?B(`common.saving`):B(`common.save`)}
          </button>
        `},P`
        ${V({title:B(`agents.skillsPanel.filter`),description:B(`agents.skillsPanel.shown`,{count:String(m.length)}),control:P`
            <input
              class="settings-input"
              .value=${e.filter}
              @input=${t=>e.onFilterChange(t.target.value)}
              placeholder=${B(`agents.skillsPanel.searchPlaceholder`)}
              autocomplete="off"
              name="agent-skills-filter"
            />
          `})}
        ${m.length===0?W(B(`agents.skillsPanel.empty`)):P`
                <div class="agents-panel-body agent-skills-groups">
                  ${h.map(n=>Xr(n,{agentId:e.agentId,allowSet:a,usingAllowlist:o,editable:t,filterActive:!!p,onToggle:e.onToggle}))}
                </div>
              `}
      `)}
  `}function Xr(e,t){let n=!t.filterActive&&(e.id===`workspace`||e.id===`built-in`);return P`
    <details class="agent-skills-group" ?open=${!n}>
      <summary class="agent-skills-header">
        <span>${e.label}</span>
        <span class="muted">${e.skills.length}</span>
      </summary>
      <div class="list skills-grid">
        ${e.skills.map(e=>Zr(e,{agentId:t.agentId,allowSet:t.allowSet,usingAllowlist:t.usingAllowlist,editable:t.editable,onToggle:t.onToggle}))}
      </div>
    </details>
  `}function Zr(e,t){let n=!t.usingAllowlist||t.allowSet.has(e.name),r=Xt(e),i=Kt(e);return P`
    <div class="settings-row agent-skill-row">
      <div class="settings-row__text">
        <span class="settings-row__title"
          >${e.emoji?`${e.emoji} `:``}${e.name}</span
        >
        <span class="settings-row__desc">${e.description}</span>
        ${Gt({skill:e})}
        ${r.length>0?P`<span class="settings-row__desc">
                ${B(`agents.skillsPanel.missing`,{items:r.join(`, `)})}
              </span>`:I}
        ${i.length>0?P`<span class="settings-row__desc">
                ${B(`agents.skillsPanel.reason`,{items:i.join(`, `)})}
              </span>`:I}
      </div>
      <div class="settings-row__control">
        ${et({checked:n,disabled:!t.editable,ariaLabel:e.name,onChange:n=>t.onToggle(t.agentId,e.name,n)})}
      </div>
    </div>
  `}var Qr;function $r(){return($r=e((()=>{c(),N(),Dr(),G(),jt(),R(),g(),Pt(),j(),Yt(),Jt(),Pr(),Qr=12})))()}function ei(e){let t=new Map(e.map(e=>[e.id,e])),n=new Map,r=[];for(let i of e){let e=i.creatorAgentId;if(e&&e!==i.id&&t.has(e)){let t=n.get(e)??[];t.push(i),n.set(e,t)}else r.push(i)}let i=[],a=new Set,o=(e,t)=>{if(!a.has(e.id)){a.add(e.id),i.push({agent:e,...t>0&&e.creatorAgentId?{creatorAgentId:e.creatorAgentId}:{}});for(let r of n.get(e.id)??[])o(r,t+1)}};return r.forEach(e=>o(e,0)),e.forEach(e=>o(e,0)),i}function ti(e){let t=e.agentsList?.agents??[],n=e.agentsList?.defaultId??null,r=e.selectedAgentId??n??t[0]?.id??null,i=r?t.find(e=>e.id===r)??null:null,a=ei(t).map(({agent:e,creatorAgentId:t})=>({value:e.id,label:ye(e),agent:e,description:t?B(`agents.createdBy`,{id:t}):void 0,badge:h(e.id,n)??void 0})),o=r&&e.agentSkills.agentId===r?e.agentSkills.report?.skills?.length??null:null,s=e.channels.snapshot?Object.keys(e.channels.snapshot.channelAccounts??{}).length:null,c=r?e.cron.jobsTotal:null,l={files:e.agentFiles.list?.files?.length??null,skills:o,channels:s,cron:c||null};return P`
    <div class="agents-layout">
      <section class="agents-toolbar">
        <div class="agents-toolbar-row">
          ${a.length>1?P`
                  <div class="agents-control-select">
                    <openclaw-agent-select
                      .options=${a}
                      .value=${r??``}
                      .accessibleLabel=${B(`usage.filters.agent`)}
                      .identityById=${e.agentIdentityById}
                      .disabled=${e.loading}
                      .onSelect=${e.onSelectAgent}
                      .onCreateAgent=${e.access.canCreateAgent?e.onCreateAgent:null}
                    ></openclaw-agent-select>
                  </div>
                `:I}
          <div class="agents-toolbar-actions">
            ${a.length<=1&&e.access.canCreateAgent?P`
                    <button
                      class="btn btn--sm btn--ghost agents-create-btn"
                      ?disabled=${e.loading}
                      @click=${e.onCreateAgent}
                    >
                      ${B(`custodian.newAgent`)}
                    </button>
                  `:I}
            ${i?P`
                    ${Le(i.id,P`
                        <button
                          type="button"
                          class="btn btn--sm btn--ghost"
                          @click=${e=>void tt(e,i.id,B(`agents.copyId`))}
                        >
                          <span data-copy-label>${B(`agents.copyId`)}</span>
                        </button>
                      `)}
                    <button
                      type="button"
                      class="btn btn--sm btn--ghost"
                      ?disabled=${!e.access.canUpdateConfig||!!(n&&i.id===n)}
                      @click=${()=>e.onSetDefault(i.id)}
                    >
                      ${n&&i.id===n?B(`agents.default`):B(`agents.setDefault`)}
                    </button>
                    <button
                      type="button"
                      class="btn btn--sm btn--ghost"
                      @click=${()=>e.onTogglePinnedAgent(i.id)}
                    >
                      ${e.pinnedAgentIds.includes(i.id)?B(`agents.unpinFromSwitcher`):B(`agents.pinToSwitcher`)}
                    </button>
                  `:I}
            <button
              class="btn btn--sm agents-refresh-btn"
              ?disabled=${e.loading}
              @click=${e.onRefresh}
            >
              ${e.loading?B(`common.loading`):B(`common.refresh`)}
            </button>
          </div>
        </div>
        ${e.error?P`<div class="callout danger" style="margin-top: 8px;">${e.error}</div>`:I}
      </section>
      <section class="agents-main">
        <div class="settings-group">
          ${at({title:B(`agents.defaults.title`),description:B(`agents.defaults.description`),onClick:e.onOpenAgentDefaults})}
        </div>
        ${i?P`
                ${ni(e.activePanel,t=>e.onSelectPanel(t),l)}
                <div
                  id="agent-panel"
                  class="settings-stack"
                  role="tabpanel"
                  aria-labelledby=${`agents-tab-${e.activePanel}`}
                >
                  ${e.config.error?P`<div class="callout danger" role="alert">${e.config.error}</div>`:I}
                  ${e.activePanel===`overview`?Le(i.id,Nn({agent:i,basePath:e.basePath,defaultId:n,configForm:e.config.form,agentFilesList:e.agentFiles.list,agentIdentity:e.agentIdentityById[i.id]??null,agentIdentityError:e.agentIdentityError,agentIdentityLoading:e.agentIdentityLoading,identityDraft:e.identityDraft,identitySaving:e.identitySaving,identityError:e.identityError,canUpdateConfig:e.access.canUpdateConfig,canUpdateIdentity:e.access.canUpdateIdentity,configLoading:e.config.loading,configSaving:e.config.saving,configDirty:e.config.dirty,modelCatalog:e.modelCatalog,modelCatalogStatus:e.modelCatalogStatus,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave,onIdentityFieldChange:e.onIdentityFieldChange,onIdentityAvatarSelect:e.onIdentityAvatarSelect,onIdentitySave:e.onIdentitySave,onModelChange:e.onModelChange,onModelFallbacksChange:e.onModelFallbacksChange,onModelCatalogOpen:e.onModelCatalogOpen,onSelectPanel:e.onSelectPanel})):I}
                  ${e.activePanel===`files`?Xn({agentId:i.id,agentFilesList:e.agentFiles.list,agentFilesLoading:e.agentFiles.loading,agentFilesError:e.agentFiles.error,agentFileActive:e.agentFiles.active,agentFileContents:e.agentFiles.contents,agentFileDrafts:e.agentFiles.drafts,agentFileSaving:e.agentFiles.saving,canWrite:e.access.canWriteFiles,onLoadFiles:e.onLoadFiles,onSelectFile:e.onSelectFile,onFileDraftChange:e.onFileDraftChange,onFileReset:e.onFileReset,onFileSave:e.onFileSave}):I}
                  ${e.activePanel===`tools`?Jr({agentId:i.id,configForm:e.config.form,configLoading:e.config.loading,configSaving:e.config.saving,configDirty:e.config.dirty,toolsCatalogLoading:e.toolsCatalog.loading,toolsCatalogError:e.toolsCatalog.error,toolsCatalogResult:e.toolsCatalog.result,toolsEffectiveLoading:e.toolsEffective.loading,toolsEffectiveError:e.toolsEffective.error,toolsEffectiveResult:e.toolsEffective.result,runtimeSessionKey:e.runtimeSessionKey,runtimeSessionMatchesSelectedAgent:e.runtimeSessionMatchesSelectedAgent,canUpdateConfig:e.access.canUpdateConfig,githubIdentity:e.githubIdentity,onOpenGitHubConnections:e.onOpenGitHubConnections,onProfileChange:e.onToolsProfileChange,onOverridesChange:e.onToolsOverridesChange,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave}):I}
                  ${e.activePanel===`skills`?Yr({agentId:i.id,report:e.agentSkills.report,loading:e.agentSkills.loading,error:e.agentSkills.error,activeAgentId:e.agentSkills.agentId,configForm:e.config.form,configLoading:e.config.loading,configSaving:e.config.saving,configDirty:e.config.dirty,filter:e.agentSkills.filter,canPatchConfig:e.access.canPatchConfig,canUpdateConfig:e.access.canUpdateConfig,onFilterChange:e.onSkillsFilterChange,onRefresh:e.onSkillsRefresh,onToggle:e.onAgentSkillToggle,onClear:e.onAgentSkillsClear,onDisableAll:e.onAgentSkillsDisableAll,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave}):I}
                  ${e.activePanel===`channels`?Jn({context:De(i,e.config.form,e.agentFiles.list,n,e.agentIdentityById[i.id]??null),configForm:e.config.form,snapshot:e.channels.snapshot,loading:e.channels.loading,error:e.channels.error,lastSuccess:e.channels.lastSuccess,onRefresh:e.onChannelsRefresh,onSelectPanel:e.onSelectPanel}):I}
                  ${e.activePanel===`cron`?Yn({context:De(i,e.config.form,e.agentFiles.list,n,e.agentIdentityById[i.id]??null),agentId:i.id,jobs:e.cron.jobs,jobsTotal:e.cron.jobsTotal,jobsHasMore:e.cron.jobsHasMore,jobsLoadingMore:e.cron.jobsLoadingMore,status:e.cron.status,scopedTotal:e.cron.scopedTotal,scopedNextWakeAtMs:e.cron.scopedNextWakeAtMs,loading:e.cron.loading,error:e.cron.error,canRunNow:e.access.canRunCron,onRefresh:e.onCronRefresh,onLoadMore:e.onCronLoadMore,onRunNow:e.onCronRunNow,onSelectPanel:e.onSelectPanel}):I}
                  ${e.activePanel===`memory`?P`
                          <div class="settings-group agent-memory-import-row">
                            ${at({title:B(`tabs.memory`),description:B(`subtitles.memory`),onClick:()=>e.onOpenMemorySettings?.()})}
                            ${at({title:B(`tabs.memoryImport`),description:B(`subtitles.memoryImport`),onClick:()=>e.onOpenMemoryImport?.()})}
                          </div>
                          <openclaw-agent-memory-panel
                            .agentId=${i.id}
                          ></openclaw-agent-memory-panel>
                        `:I}
                </div>
              `:U({title:B(`agents.selectTitle`)},W(B(`agents.selectSubtitle`)))}
      </section>
    </div>
  `}function ni(e,t,n){let r=[{id:`overview`,label:B(`agents.tabs.overview`)},{id:`files`,label:B(`agents.tabs.files`)},{id:`tools`,label:B(`agents.tabs.tools`)},{id:`skills`,label:B(`agents.tabs.skills`)},{id:`channels`,label:B(`agents.tabs.channels`)},{id:`cron`,label:B(`agents.tabs.cronJobs`)},{id:`memory`,label:B(`agents.tabs.memory`)}];return wt({id:`agents`,active:e,tabs:r.map(e=>({value:e.id,label:e.label,count:n[e.id]})),ariaLabel:B(`tabs.agents`),panelId:`agent-panel`,onSelect:t})}function ri(){return(ri=e((()=>{N(),Ae(),Ct(),vt(),Tt(),G(),R(),g(),Mt(),Fn(),Qn(),$r()})))()}var ii,$;function ai(){return(ai=e((()=>{r(),N(),ke(),ze(),He(),Qe(),G(),Dt(),kt(),R(),g(),ie(),de(),me(),A(),it(),j(),Ee(),Xe(),le(),bt(),Ce(),T(),en(),mn(),bn(),wn(),En(),ri(),ii=`https://docs.openclaw.ai/concepts/multi-agent`,$=class extends y{constructor(...e){super(...e),this.agentsList=null,this.agentsSelectedId=null,this.toolsCatalogLoading=!1,this.toolsCatalogLoadingAgentId=null,this.toolsCatalogError=null,this.toolsCatalogResult=null,this.toolsEffectiveLoading=!1,this.toolsEffectiveLoadingKey=null,this.toolsEffectiveResultKey=null,this.toolsEffectiveError=null,this.toolsEffectiveResult=null,this.chatModelCatalog=[],this.chatModelCatalogStatus=pt(),this.chatModelCatalogPending=null,this.agentFilesLoading=!1,this.agentFilesError=null,this.agentFilesList=null,this.agentFileContents={},this.agentFileDrafts={},this.agentFileActive=null,this.agentFileSaving=!1,this.agentFileWriteRevisions=new Map,this.agentIdentityLoading=!1,this.agentIdentityError=null,this.identityDraft={name:null,emoji:null,avatar:null},this.identitySaving=!1,this.identityError=null,this.agentSkillsLoading=!1,this.agentSkillsError=null,this.agentSkillsReport=null,this.agentSkillsAgentId=null,this.skillsFilter=``,this.cron=ot(),this.routeDataInitialized=!1,this.hasBoundAgents=!1,this.agentsSource=null,this.hasBoundAgentIdentity=!1,this.agentIdentitySource=null,this.hasBoundSessions=!1,this.sessionsSource=null,this.chatModelCatalogSubscription=null,this.normalizedLocation=``,this.githubProfileId=null,this.githubIdentity=new Ot({requestUpdate:()=>this.requestUpdate(),runExternalMutation:(e,t)=>this.context.runtimeConfig.runExternalMutation(e,t)}),this.gateway=new xt(this,{getGateway:()=>this.context?.gateway,onIdentityChange:()=>this.resetForSourceChange(),invalidateRequests:e=>{e.identityChanged||(this.invalidateTransientRequests(),this.resetModelCatalog())},onSnapshot:({becameAvailable:e,becameConnected:t})=>{if(this.syncGatewayState(),e&&!t){let e=this.chatModelCatalogSubscription;Promise.resolve(this.chatModelCatalogPending).then(()=>{let t=this.gateway.snapshot,n=this.chatModelCatalogStatus;e?.isCurrent()&&t&&fe(t)&&(n.awaitingGateway||n.error!==null)&&this.ensureModelCatalog({refresh:!0})})}},ensureInitialData:()=>this.ensureInitialData()}),this.subscriptions=new b(this).effect(()=>this.context?.agents,e=>{let t=this.hasBoundAgents;this.hasBoundAgents=!0,this.agentsSource=e,t&&this.resetForSourceChange(),this.syncAgentState(e),this.ensureInitialData();let n=e.subscribe(()=>{this.agentsSource===e&&this.context.agents===e&&(this.syncAgentState(e),this.ensureAgentIdentities(),this.loadActivePanelData(),this.requestUpdate())});return()=>{n(),this.agentsSource===e&&(this.agentsSource=null)}}).effect(()=>this.context?.agentIdentity,e=>{let t=this.hasBoundAgentIdentity;this.hasBoundAgentIdentity=!0,this.agentIdentitySource=e,t&&(this.invalidateTransientRequests(),this.agentIdentityError=null),this.ensureAgentIdentities(),this.ensureInitialData();let n=e.subscribe(()=>{this.agentIdentitySource===e&&this.context.agentIdentity===e&&this.requestUpdate()});return()=>{n(),this.agentIdentitySource===e&&(this.agentIdentitySource=null)}}).watch(()=>this.context?.channels,(e,t)=>e.subscribe(t)).watch(()=>this.context?.navigation,(e,t)=>e.subscribe(t)).watch(()=>this.context?.runtimeConfig,(e,t)=>e.subscribe(t)).effect(()=>this.context?.sessions,e=>{let t=this.hasBoundSessions;this.hasBoundSessions=!0,this.sessionsSource=e,t&&(this.invalidateTransientRequests(),E(this),this.loadActivePanelData());let n=e.subscribe(()=>{this.sessionsSource===e&&this.context.sessions===e&&(x(this),this.requestUpdate())});return()=>{n(),this.sessionsSource===e&&(this.sessionsSource=null)}})}get sessions(){return this.context.sessions}get agents(){return this.context.agents}get client(){return this.gateway.client}get connected(){return this.gateway.connected}get requestGeneration(){return this.gateway.epoch}get sessionsResult(){return this.context.sessions.state.result}get sessionKey(){return this.context.gateway.snapshot.sessionKey}get agentsPanel(){return this.routeData?.panel??`files`}connectedCallback(){super.connectedCallback(),this.syncCanonicalLocation()}disconnectedCallback(){this.githubIdentity.dispose(),this.subscriptions.clear(),super.disconnectedCallback()}willUpdate(e){e.has(`routeData`)&&(this.applyRouteData(),this.syncCanonicalLocation(),this.ensureInitialData())}syncGatewayState(){(this.cron.client!==this.client||this.cron.connected!==this.connected)&&(this.cron={...this.cron,client:this.client,connected:this.connected})}canCall(e,t){return Ye(this.context?.gateway?.snapshot,e,t)}syncAgentState(e=this.context.agents){let t=e.state;this.agentsList=t.agentsList?Oe(t.agentsList):null,this.agentsList&&this.ensureSelectedAgentInList(this.agentsList),this.syncCurrentAgentFiles(e)}ensureSelectedAgentInList(e,t=this.routeData?.requestedAgentId??this.agentsSelectedId){let n=t&&e.agents.some(e=>e.id===t)?t:e.defaultId??e.agents[0]?.id??null;n!==this.agentsSelectedId&&(this.agentsSelectedId=n,this.resetSelectionState())}syncCurrentAgentFiles(e=this.context.agents){let t=this.resolveSelectedAgentId();if(!t||this.agentsPanel!==`files`)return;let n=e.files(t);n.list&&(this.agentFilesList=n.list,this.selectDefaultAgentFile(t))}async selectDefaultAgentFile(e,t=!1){let n=this.agentFilesList?.files??[];(!this.agentFileActive||!n.some(e=>e.name===this.agentFileActive))&&(this.agentFileActive=n.find(e=>e.name===`AGENTS.md`)?.name??null),this.agentFileActive&&await Qt(this,e,this.agentFileActive,{force:t})}resetForSourceChange(){this.agentsList=null,this.agentsSelectedId=null,this.resetSelectionState()}invalidateTransientRequests(){this.gateway.invalidate(),this.agentFilesLoading=!1,this.agentFileSaving=!1,this.agentIdentityLoading=!1,this.agentSkillsLoading=!1,this.toolsCatalogLoading=!1,this.toolsCatalogLoadingAgentId=null,E(this),this.cron={...this.cron,cronLoading:!1,cronJobsLoadingMore:!1,cronJobsReloadPending:!1,cronJobsReloadPendingTableFilters:!1,cronRunsLoadingMore:!1,cronBusy:!1}}applyRouteData(){let e=this.routeData;e&&(this.routeDataInitialized=!0,this.gateway.isRouteDataCurrent(e)&&e.agentsList&&(this.agentsList=e.agentsList),this.agentsList&&this.ensureSelectedAgentInList(this.agentsList,e.requestedAgentId))}syncCanonicalLocation(){this.normalizedLocation=xn(this.context,this.routeData,this.normalizedLocation)}resolveSelectedAgentId(){return this.agentsSelectedId??this.agentsList?.defaultId??this.agentsList?.agents?.[0]?.id??null}chatAgentId(){return pe(this.sessionKey)?.agentId??this.context.gateway.snapshot.assistantAgentId??this.agentsList?.defaultId??`main`}agentIdentityById(){return Object.fromEntries(this.context.agentIdentity.entries().map(e=>[e.agentId,e]))}ensureInitialData(){if(!(!this.connected||!this.client||!this.routeDataInitialized)){if(!this.context.runtimeConfig.state.configSnapshot&&!this.context.runtimeConfig.state.configLoading&&this.context.runtimeConfig.ensureLoaded(),!this.agentsList&&!this.context.agents.state.agentsLoading){this.loadAgentsAndCommit();return}this.ensureAgentIdentities(),this.loadActivePanelData()}}isCurrentRequest(e,t,n,r={}){return this.client===e&&this.connected&&this.requestGeneration===t&&(!r.agents||this.context.agents===r.agents)&&(!r.agentIdentity||this.context.agentIdentity===r.agentIdentity)&&(!r.sessions||this.context.sessions===r.sessions)&&(!n||this.resolveSelectedAgentId()===n)}ensureAgentIdentities(){let e=this.client,t=this.context.agentIdentity,n=this.agentsList?.agents.map(e=>e.id).filter(e=>!t.get(e))??[];if(!e||!this.connected||n.length===0||this.agentIdentityLoading)return;let r=this.requestGeneration;this.agentIdentityLoading=!0,this.agentIdentityError=null,t.ensure(n).catch(n=>{this.isCurrentRequest(e,r,void 0,{agentIdentity:t})&&(this.agentIdentityError=M(n))}).finally(()=>{this.isCurrentRequest(e,r,void 0,{agentIdentity:t})&&(this.agentIdentityLoading=!1)})}loadActivePanelData(){let e=this.resolveSelectedAgentId();if(e){if(this.agentsPanel===`overview`){this.ensureModelCatalog();return}if(this.agentsPanel===`files`&&this.agentFilesList?.agentId!==e){this.loadAgentFiles(e);return}if(this.agentsPanel===`skills`&&this.agentSkillsAgentId!==e){q(this,e);return}if(this.agentsPanel===`tools`){this.syncGitHubIdentity(e),this.toolsCatalogResult?.agentId!==e&&!this.toolsCatalogLoading&&ve(this,e),this.loadEffectiveToolsForAgent(e),this.githubIdentity.statusReadable&&!this.githubIdentity.status&&!this.githubIdentity.loading&&!this.githubIdentity.error&&this.githubIdentity.verify();return}if(this.agentsPanel===`channels`&&!this.context.channels.state.channelsSnapshot){this.context.channels.refresh(!1);return}this.agentsPanel===`cron`&&(this.cron.cronAgentId!==e&&(this.cron=ot({client:this.client,connected:this.connected}),this.cron.cronAgentId=e),!this.cron.cronLoading&&!this.cron.cronStatus&&this.refreshCron())}}syncGitHubIdentity(e){let t=this.context.gateway.snapshot,n=t.selfUser?.id??null;n!==this.githubProfileId&&(this.githubIdentity.dispose(),this.githubProfileId=n);let r=(e,n)=>Ye(t,e,n,{requireAdvertisement:!1});this.githubIdentity.sync({client:this.client,connected:this.connected,target:e?{kind:`shared`,scope:`agent`,agentId:e,config:m(this.context.runtimeConfig.state)}:null,statusReadable:r(`tools.github.status`,`operator.read`),configurable:r(`tools.github.configure`,`operator.admin`),authorizable:[`tools.github.authorize.start`,`tools.github.authorize.poll`,`tools.github.authorize.cancel`].every(e=>r(e,`operator.admin`)),clientRevision:this.requestGeneration})}resetModelCatalog(){this.chatModelCatalogSubscription?.unsubscribe(),this.chatModelCatalogSubscription=null,this.chatModelCatalog=[],this.chatModelCatalogStatus=pt(),this.chatModelCatalogPending=null}ensureModelCatalog(e={}){let t=this.client,n=this.resolveSelectedAgentId();if(!t||!this.connected||!n)return;if(!this.chatModelCatalogSubscription?.isCurrent()){this.resetModelCatalog();let e=this.requestGeneration,r=this.context?.gateway,i=this.context?.agents,a={isCurrent:()=>this.chatModelCatalogSubscription===a&&this.context?.gateway===r&&this.isCurrentRequest(t,e,n,{agents:i}),unsubscribe:be(t,{agentId:n},e=>{a.isCurrent()&&(e.type===`invalidated`?(this.chatModelCatalogPending=null,this.ensureModelCatalog({refresh:!0})):e.type===`error`?this.chatModelCatalogStatus=lt(this.chatModelCatalogStatus,e.error,this.gateway.snapshot):(this.chatModelCatalogStatus=e.type===`loading`?ft(this.chatModelCatalogStatus):dt(),e.type===`result`&&(this.chatModelCatalog=e.result.models??[])))})};this.chatModelCatalogSubscription=a;let o=we(t,{agentId:n});o&&(this.chatModelCatalog=o.models??[],this.chatModelCatalogStatus=dt())}if(this.chatModelCatalogPending||!e.refresh&&this.chatModelCatalogStatus.hasLoaded)return;let r=(e.refresh?ue(t,{agentId:n}):Se(t,{agentId:n})).catch(()=>void 0).finally(()=>{this.chatModelCatalogPending===r&&(this.chatModelCatalogPending=null)});this.chatModelCatalogPending=r}async loadAgentsAndCommit(){let e=this.client,t=this.requestGeneration,n=this.context.agents;e&&(await n.ensureList(),this.isCurrentRequest(e,t,void 0,{agents:n})&&(this.syncAgentState(n),this.ensureAgentIdentities(),this.loadActivePanelData()))}async loadAgentFiles(e,t=!1){let n=this.client,r=this.context.agents;if(!n||!this.connected||this.agentFilesLoading)return;if(r.files(e).list&&!t){this.syncCurrentAgentFiles(r);return}let i=this.requestGeneration;this.agentFilesLoading=!0,this.agentFilesError=null;try{let a=t?await r.refreshFiles(e):await r.ensureFiles(e);if(!this.isCurrentRequest(n,i,e,{agents:r}))return;this.agentFilesList=a??r.files(e).list}finally{this.isCurrentRequest(n,i,e,{agents:r})&&(this.agentFilesLoading=!1)}this.isCurrentRequest(n,i,e,{agents:r})&&await this.selectDefaultAgentFile(e,t)}async refreshCron(){let e=this.cron;!e.connected||!e.client||e.cronLoading||await Promise.all([this.runCronTask(e=>$e(e)),this.runCronTask(e=>Ze(e)),this.runCronTask(e=>ut(e,{tableFilters:!0}))])}async runCronTask(e){let t=this.cron;try{let n=e(t);return this.cron===t&&this.requestUpdate(),await n}finally{this.cron===t&&this.requestUpdate()}}saveIdentityDraft(){if(!this.canCall(`agents.update`,`operator.admin`))return;let e=this.client,t=this.resolveSelectedAgentId();if(!e||!t||this.identitySaving)return;let n=this.requestGeneration,r=this.context.agents,i=this.context.agentIdentity;fn({host:this,expectedClient:e,agentId:t,agents:r,agentIdentity:i,runtimeConfig:this.context.runtimeConfig,canDispatch:()=>this.canCall(`agents.update`,`operator.admin`),isCurrent:()=>this.isCurrentRequest(e,n,t,{agents:r,agentIdentity:i}),onSaved:()=>this.syncAgentState(r)})}resetSelectionState(){this.gateway.invalidate(),this.resetModelCatalog(),this.agentFilesList=null,this.agentFilesError=null,this.agentFileActive=null,this.agentFileContents={},this.agentFileDrafts={},this.agentFileWriteRevisions.clear(),this.agentFilesLoading=!1,this.agentFileSaving=!1,this.agentSkillsReport=null,this.agentSkillsLoading=!1,this.agentSkillsError=null,this.agentSkillsAgentId=null,this.agentIdentityLoading=!1,this.agentIdentityError=null,ln(this),this.toolsCatalogResult=null,this.toolsCatalogError=null,this.toolsCatalogLoading=!1,this.toolsCatalogLoadingAgentId=null,E(this),this.cron=ot({client:this.client,connected:this.connected})}toolsPath(e,t){let n=this.context.runtimeConfig.agentEntry(e,{ensure:t});return n?[...n.path,`tools`]:null}loadEffectiveToolsForAgent(e){if(e!==this.chatAgentId()){E(this);return}let t=re(this,{agentId:e,sessionKey:this.sessionKey});this.toolsEffectiveResultKey===t&&!this.toolsEffectiveError||f(this,{agentId:e,sessionKey:this.sessionKey})}refreshAgents(){let e=this.client,t=this.requestGeneration,n=this.context.agents;e&&(async()=>{await n.refreshList(),this.isCurrentRequest(e,t,void 0,{agents:n})&&(this.syncAgentState(n),this.loadActivePanelData())})()}saveAgentConfig(){if(!this.canCall(`config.set`,`operator.admin`))return;let e=this.client,t=this.requestGeneration,n=this.context.agents;if(!e)return;let r=this.agentsSelectedId;(async()=>{await this.context.runtimeConfig.save()&&(await n.refreshList(),this.isCurrentRequest(e,t,void 0,{agents:n})&&(this.syncAgentState(n),r&&this.agentsList?.agents.some(e=>e.id===r)&&(this.agentsSelectedId=r),this.ensureAgentIdentities(),this.loadActivePanelData()))})()}setDefaultAgent(e){if(!this.canCall(`config.set`,`operator.admin`))return;let t=this.client,n=this.requestGeneration,r=this.context.agents,i=this.context.runtimeConfig;if(!t)return;let a=()=>this.context.runtimeConfig===i&&this.isCurrentRequest(t,n,void 0,{agents:r})&&this.canCall(`config.set`,`operator.admin`);(async()=>{await i.ensureLoaded(),a()&&await he(i,e,()=>r.refreshList(),a)})()}saveSelectedAgentFile(e,t,n){this.canCall(`agents.files.set`,`operator.admin`)&&$t(this,e,t,n)}reloadConfig(){this.context.runtimeConfig.refresh({discardPendingChanges:!0})}clearAgentSkills(e){if(!this.canCall(`config.patch`,`operator.admin`))return;let t=this.client,n=this.requestGeneration,r=this.context.agents,i=this.context.runtimeConfig;if(!t)return;let a=()=>this.context.runtimeConfig===i&&this.isCurrentRequest(t,n,e,{agents:r})&&this.canCall(`config.patch`,`operator.admin`);Tn(i,e,a).then(t=>{if(a()){if(!t){this.agentSkillsError=i.state.lastError??B(`agents.skillsPanel.updateError`);return}this.agentSkillsError=null,q(this,e)}})}runCronJobNow(e){this.canCall(`cron.run`,`operator.admin`)&&this.cron.cronJobs.some(t=>t.id===e)&&this.runCronTask(t=>rt(t,e,`force`))}render(){let e=this.context.runtimeConfig.state,t=this.context.agents.state,n=this.resolveSelectedAgentId(),r=m(e),i={canCreateAgent:this.canCall(`openclaw.chat`,`operator.admin`),canPatchConfig:this.canCall(`config.patch`,`operator.admin`),canUpdateConfig:this.canCall(`config.set`,`operator.admin`),canUpdateIdentity:this.canCall(`agents.update`,`operator.admin`),canWriteFiles:this.canCall(`agents.files.set`,`operator.admin`),canRunCron:this.canCall(`cron.run`,`operator.admin`)};return this.syncGitHubIdentity(n),P`
      <section class="content-header">
        <div>
          <div class="page-title">${We(`agents`)}</div>
          <div class="page-subtitle">
            ${Re(`agents`)} ${nt(ii)}
          </div>
        </div>
      </section>
      ${Et(ti({access:i,basePath:this.context.basePath,loading:t.agentsLoading,error:t.agentsError,agentsList:this.agentsList,selectedAgentId:n,activePanel:this.agentsPanel,config:{form:r,loading:e.configLoading,saving:e.configSaving,dirty:e.configFormDirty,error:e.lastError},channels:{snapshot:this.context.channels.state.channelsSnapshot,loading:this.context.channels.state.channelsLoading,error:this.context.channels.state.channelsError,lastSuccess:this.context.channels.state.channelsLastSuccess},cron:{status:this.cron.cronStatus,jobs:this.cron.cronJobs,jobsTotal:this.cron.cronJobsTotal,jobsHasMore:this.cron.cronJobsHasMore,jobsLoadingMore:this.cron.cronJobsLoadingMore,scopedTotal:this.cron.cronScopedTotal,scopedNextWakeAtMs:this.cron.cronScopedNextWakeAtMs,loading:this.cron.cronLoading,error:this.cron.cronError},agentFiles:{list:this.agentFilesList,loading:this.agentFilesLoading,error:this.agentFilesError??this.context.agents.files(n).error,active:this.agentFileActive,contents:this.agentFileContents,drafts:this.agentFileDrafts,saving:this.agentFileSaving},agentIdentityLoading:this.agentIdentityLoading,agentIdentityError:this.agentIdentityError,agentIdentityById:this.agentIdentityById(),identityDraft:this.identityDraft,identitySaving:this.identitySaving,identityError:this.identityError,agentSkills:{report:this.agentSkillsReport,loading:this.agentSkillsLoading,error:this.agentSkillsError,agentId:this.agentSkillsAgentId,filter:this.skillsFilter},toolsCatalog:{loading:this.toolsCatalogLoading,error:this.toolsCatalogError,result:this.toolsCatalogResult},toolsEffective:{loading:this.toolsEffectiveLoading,error:this.toolsEffectiveError,result:this.toolsEffectiveResult},githubIdentity:this.githubIdentity,onOpenGitHubConnections:()=>this.context.navigate(`profile`,{hash:`#settings-profile-github-connections`}),runtimeSessionKey:this.sessionKey,runtimeSessionMatchesSelectedAgent:n===this.chatAgentId(),modelCatalog:this.chatModelCatalog,modelCatalogStatus:this.chatModelCatalogStatus,pinnedAgentIds:this.context.navigation.snapshot.pinnedAgentIds,onTogglePinnedAgent:e=>pn(this.context.navigation,e),onRefresh:()=>this.refreshAgents(),onSelectAgent:e=>Sn(this.context,e,n,this.agentsPanel),onCreateAgent:()=>{this.canCall(`openclaw.chat`,`operator.admin`)&&this.context.navigate(`custodian`,{search:`?intent=new-agent`})},onSelectPanel:e=>Cn(this.context,n,this.agentsPanel,e),onLoadFiles:e=>void this.loadAgentFiles(e,!0),onSelectFile:e=>{this.agentFileActive=e,n&&Qt(this,n,e)},onFileDraftChange:(e,t)=>{this.agentFileDrafts={...this.agentFileDrafts,[e]:t}},onFileReset:e=>{this.agentFileDrafts={...this.agentFileDrafts,[e]:this.agentFileContents[e]??``}},onFileSave:e=>{n&&this.saveSelectedAgentFile(n,e,this.agentFileDrafts[e]??this.agentFileContents[e]??``)},onToolsProfileChange:(e,t,n)=>{if(!this.canCall(`config.set`,`operator.admin`))return;let r=this.toolsPath(e,!!(t||n));r&&(t?this.context.runtimeConfig.patchForm([...r,`profile`],t):this.context.runtimeConfig.removeFormValue([...r,`profile`]),n&&this.context.runtimeConfig.removeFormValue([...r,`allow`]))},onToolsOverridesChange:(e,t,n)=>{if(!this.canCall(`config.set`,`operator.admin`))return;let r=this.toolsPath(e,t.length>0||n.length>0);r&&(t.length?this.context.runtimeConfig.patchForm([...r,`alsoAllow`],t):this.context.runtimeConfig.removeFormValue([...r,`alsoAllow`]),n.length?this.context.runtimeConfig.patchForm([...r,`deny`],n):this.context.runtimeConfig.removeFormValue([...r,`deny`]))},onConfigReload:()=>this.reloadConfig(),onConfigSave:()=>this.saveAgentConfig(),onIdentityFieldChange:(e,t)=>{this.canCall(`agents.update`,`operator.admin`)&&un(this,e,t)},onIdentityAvatarSelect:e=>{this.canCall(`agents.update`,`operator.admin`)&&dn(this,e)},onIdentitySave:()=>this.saveIdentityDraft(),onChannelsRefresh:()=>void this.context.channels.refresh(!1),onOpenMemoryImport:()=>this.context.navigate(`memory-import`),onOpenMemorySettings:()=>this.context.navigate(`memory`),onOpenAgentDefaults:()=>this.context.navigate(`ai-agents`),onCronRefresh:()=>void this.refreshCron(),onCronLoadMore:()=>void this.runCronTask(e=>ut(e,{append:!0,tableFilters:!0})),onCronRunNow:e=>this.runCronJobNow(e),onSkillsFilterChange:e=>this.skillsFilter=e,onSkillsRefresh:()=>{n&&q(this,n)},onAgentSkillToggle:(e,t,n)=>{if(!this.canCall(`config.set`,`operator.admin`))return;let r=this.context.runtimeConfig.agentEntry(e,{ensure:!0});if(!r||!t.trim())return;let i=O(m(this.context.runtimeConfig.state),e)??this.agentSkillsReport?.agentSkillFilter??this.agentSkillsReport?.skills?.map(e=>e.name).filter(Boolean)??[],a=new Set(i);n?a.add(t.trim()):a.delete(t.trim()),this.context.runtimeConfig.patchForm([...r.path,`skills`],[...a])},onAgentSkillsClear:e=>this.clearAgentSkills(e),onAgentSkillsDisableAll:e=>{if(!this.canCall(`config.set`,`operator.admin`))return;let t=this.context.runtimeConfig.agentEntry(e,{ensure:!0});t&&this.context.runtimeConfig.patchForm([...t.path,`skills`],[])},onModelChange:(e,t)=>{this.canCall(`config.set`,`operator.admin`)&&(vn(this.context.runtimeConfig,e,t),x(this))},onModelCatalogOpen:()=>this.ensureModelCatalog({refresh:!0}),onModelFallbacksChange:(e,t)=>{this.canCall(`config.set`,`operator.admin`)&&yn(this.context.runtimeConfig,e,t)},onSetDefault:e=>this.setDefaultAgent(e)}))}
    `}},t([n({context:Ue,subscribe:!0})],$.prototype,`context`,void 0),t([L({attribute:!1})],$.prototype,`routeData`,void 0),t([F()],$.prototype,`agentsList`,void 0),t([F()],$.prototype,`agentsSelectedId`,void 0),t([F()],$.prototype,`toolsCatalogLoading`,void 0),t([F()],$.prototype,`toolsCatalogLoadingAgentId`,void 0),t([F()],$.prototype,`toolsCatalogError`,void 0),t([F()],$.prototype,`toolsCatalogResult`,void 0),t([F()],$.prototype,`toolsEffectiveLoading`,void 0),t([F()],$.prototype,`toolsEffectiveLoadingKey`,void 0),t([F()],$.prototype,`toolsEffectiveResultKey`,void 0),t([F()],$.prototype,`toolsEffectiveError`,void 0),t([F()],$.prototype,`toolsEffectiveResult`,void 0),t([F()],$.prototype,`chatModelCatalog`,void 0),t([F()],$.prototype,`chatModelCatalogStatus`,void 0),t([F()],$.prototype,`agentFilesLoading`,void 0),t([F()],$.prototype,`agentFilesError`,void 0),t([F()],$.prototype,`agentFilesList`,void 0),t([F()],$.prototype,`agentFileContents`,void 0),t([F()],$.prototype,`agentFileDrafts`,void 0),t([F()],$.prototype,`agentFileActive`,void 0),t([F()],$.prototype,`agentFileSaving`,void 0),t([F()],$.prototype,`agentIdentityLoading`,void 0),t([F()],$.prototype,`agentIdentityError`,void 0),t([F()],$.prototype,`identityDraft`,void 0),t([F()],$.prototype,`identitySaving`,void 0),t([F()],$.prototype,`identityError`,void 0),t([F()],$.prototype,`agentSkillsLoading`,void 0),t([F()],$.prototype,`agentSkillsError`,void 0),t([F()],$.prototype,`agentSkillsReport`,void 0),t([F()],$.prototype,`agentSkillsAgentId`,void 0),t([F()],$.prototype,`skillsFilter`,void 0),t([F()],$.prototype,`cron`,void 0),customElements.get(`openclaw-agents-page`)||customElements.define(`openclaw-agents-page`,$)})))()}ai();
//# sourceMappingURL=agents-page-CVqhOqyu.js.map