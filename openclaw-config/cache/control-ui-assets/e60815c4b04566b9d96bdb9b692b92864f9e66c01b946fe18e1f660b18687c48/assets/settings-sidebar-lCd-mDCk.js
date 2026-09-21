import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,ba as n,ja as r}from"./control-ui-foundation-DMb6IeIq.js";import{$ as i,A as a,Uo as o,Z as s,zo as c}from"./control-ui-core-DzidtL-P.js";import{$ as l,K as u,X as d,at as f,q as p,st as m}from"./lit-runtime-vxhGQLC6.js";import{An as h,Bn as g,Cn as _,Fn as ee,In as v,Mn as y,Pn as b,Rn as te,Tn as x,cr as S,hr as C,kn as w,pr as T,xn as ne,zn as E}from"./control-ui-core-CaKBexnk.js";import{Bt as D,Ft as O,Gt as k,It as A}from"./control-ui-core-uEI6aN5p.js";import{Qa as j,Xa as re,Za as M,_ as ie}from"./control-ui-boot-shared-Cyt1Zyts.js";import{n as ae,t as oe}from"./en-settings-D6ws8ujh.js";import{a as se,i as ce}from"./settings-targets-D_7u0c_C.js";import{a as N,c as P,g as F,h as I,i as L,n as R,t as z}from"./config-form.tiers-BYNt98lg.js";import{_ as B,h as V,i as H,r as U,s as W,u as le}from"./setup-schema-Dn8SjU6i.js";import"./settings-BirsHu3U.js";function ue(e,t){let n=k(e.labelKey),r=t?Object.entries(e.nativeSearchKeys??{}).filter(([,e])=>e(t)).map(([e])=>e):[];return{routeId:e.routeId,...e.search===void 0?{}:{search:e.search},hash:e.hash,label:n,searchText:[n,...[...e.searchKeys,...r].map(e=>k(e)),e.aliases??``].join(` `)}}function de(e,t){let n=K[e],r=t.properties;if(!n||!r)return t;let i=new Set(n());return{...t,properties:Object.fromEntries(Object.entries(r).filter(([e])=>i.has(e)))}}function fe(e){if(!e.query.trim())return[];let t=P(e.query),n=t.tags.length===0&&t.text?G.filter(t=>(e.identityAvailable||!t.requiresIdentity)&&(e.nativeDeviceSettings||!t.requiresNativeDeviceSettings)&&w(t.routeId,e.canAdmin!==!1,e.nativeDeviceSettings)).map(t=>ue(t,e.nativeDeviceSettings?.snapshot??null)).filter(e=>v(e.searchText,t.text)):[],r=e.schema&&typeof e.schema==`object`&&!Array.isArray(e.schema)?e.schema:null;if(!r||o(r)!==`object`||!r.properties)return n;let i=q.get(r);(!i||i.hints!==e.uiHints)&&(i={hints:e.uiHints,sections:new Map},q.set(r,i));let a=e.value??{};for(let[t,o]of Object.entries(r.properties)){let r=V(t);if(!w(r,e.canAdmin!==!1,e.nativeDeviceSettings))continue;let s=i.sections.get(t);if(!s){let n=t===`wizard`?H(o):de(r,o);s={schema:n,tiers:R({schema:n,path:[t],hints:e.uiHints})},i.sections.set(t,s)}let{schema:c,tiers:l}=s,u=I[t],d=n=>!!(n&&N({key:t,schema:n,value:a[t],hints:e.uiHints,query:e.query,label:u?.label,description:u?.description,textMatcher:v})),f=d(l.common),p=d(l.advanced);if(!f&&!p)continue;let m=encodeURIComponent(t),h={search:``,hash:`#config-section-${m}`};n.push(r===`memory`?{routeId:r,label:u?.label??c.title??t,pathname:T(`settings`,e.basePath),hash:h.hash}:{routeId:r,label:u?.label??c.title??t,search:`?section=${m}${p||t===`wizard`?`&advanced=1`:``}`,hash:h.hash})}return n}var G,K,q;function J(){return(J=e((()=>{x(),S(),F(),L(),z(),D(),oe(),c(),B(),W(),se(),U(),ae(),G=Object.values(ce),K={memory:le,updates:()=>[`channel`,`checkOnStart`,`auto`]},q=new WeakMap})))()}var Y,X;function Z(){return(Z=e((()=>{u(),l(),D(),A(),Y=2e3,X=class extends r{constructor(...e){super(...e),this.savedVisible=!1}createRenderRoot(){return this}willUpdate(){let e=this.props?.status;this.previousStatus===`saving`&&e===`saved`?(this.clearSavedTimer(),this.savedVisible=!0,this.savedTimer=globalThis.setTimeout(()=>{this.savedTimer=void 0,this.savedVisible=!1},Y)):e!==`saved`&&(this.clearSavedTimer(),this.savedVisible=!1),this.previousStatus=e}disconnectedCallback(){this.clearSavedTimer(),super.disconnectedCallback()}clearSavedTimer(){globalThis.clearTimeout(this.savedTimer),this.savedTimer=void 0}renderClaw(e){return d`<span class="settings-save-indicator__claw ${e}" aria-hidden="true"
      >${O.claw}</span
    >`}render(){let e=this.props;if(!e)return p;let t,n=``,r=``,i=``;if(e.applying)t=d` <span class="settings-save-indicator__spinner" aria-hidden="true"
          >${O.loader}</span
        >
        <span>${k(`configView.applying`)}</span>`;else if(e.status===`saving`)t=d` ${this.renderClaw(`settings-save-indicator__claw--saving`)}
        <span>${k(`configView.autoSaveSaving`)}</span>`;else if(e.status===`error`)i=e.lastError?.trim()??``,r=i?`${k(`configView.autoSaveFailed`)}: ${i}`:``,n=` settings-save-indicator--danger`,t=d` <span>${k(`configView.autoSaveFailed`)}</span>
        <button
          class="btn btn--xs settings-save-indicator__action"
          type="button"
          @click=${e.onRetry}
        >
          ${k(`configView.retry`)}
        </button>`;else if(e.status===`paused`)t=d` <span>${k(`configView.autoSavePaused`)}</span>
        <button
          class="btn btn--xs settings-save-indicator__action"
          type="button"
          @click=${e.onSave}
        >
          ${k(`configView.saveNow`)}
        </button>`;else if(e.status===`conflict`)n=` settings-save-indicator--danger`,t=d` <span>${k(`configView.autoSaveConflict`)}</span>
        <button
          class="btn btn--xs settings-save-indicator__action"
          type="button"
          @click=${e.onReload}
        >
          ${k(`common.reload`)}
        </button>`;else if(this.savedVisible)n=` settings-save-indicator--saved`,t=d` ${this.renderClaw(`settings-save-indicator__claw--saved`)}
        <span class="settings-save-indicator__check" aria-hidden="true">${O.check}</span>
        <span>${k(`configView.autoSaveSaved`)}</span>`;else if(e.needsApply)t=d` <button
        class="btn btn--xs settings-save-indicator__apply"
        type="button"
        ?disabled=${e.applyDisabled}
        @click=${e.onApply}
      >
        ${k(`configView.applyChanges`)}
      </button>`;else return p;return d`<div
      class="settings-save-indicator${n}"
      role="status"
      aria-live="polite"
      aria-label=${r||p}
      title=${i||p}
    >
      ${t}
    </div>`}},t([m({attribute:!1})],X.prototype,`props`,void 0),t([f()],X.prototype,`savedVisible`,void 0),customElements.get(`openclaw-settings-save-indicator`)||customElements.define(`openclaw-settings-save-indicator`,X)})))()}function pe(e,t){if(t.pathname)return!1;let r=n(t.label);return[b(e),E(e)].some(e=>n(e)===r)}function me(e,t,r,i){let a=g(r,i),o=t.filter(e=>w(e.routeId,r,i)),s=n(e);if(!s)return a.map(e=>({labelKey:e.labelKey,items:e.routes.map(e=>({routeId:e,blocks:[]}))}));let c=a.flatMap(e=>e.routes),l=[...new Set([...c,...ne.filter(e=>w(e,r,i)),...o.map(e=>e.routeId)])],u=l.filter(e=>[b(e),E(e),te(e)].some(e=>v(e,s))),d=new Set(u),f=a.flatMap(e=>e.labelKey&&v(k(e.labelKey),s)?e.routes.filter(e=>!d.has(e)&&(d.add(e),!0)):[]),p=new Map,m=new Set;for(let e of o){let t=`${e.routeId}\u0000${e.pathname??``}\u0000${e.search??``}\u0000${e.hash}`;if(m.has(t))continue;m.add(t);let n=p.get(e.routeId)??[];n.push(e),p.set(e.routeId,n)}let h=[...u,...f];return[...h.length>0?[{labelKey:null,items:h.map(e=>({routeId:e,blocks:(p.get(e)??[]).filter(t=>!pe(e,t))}))}]:[],...l.filter(e=>!d.has(e)&&p.has(e)).map(e=>({labelKey:null,items:[{routeId:e,blocks:p.get(e)??[]}]}))]}function he(e,t,n){let r=ee(e.activeRouteId)===t;return d`
    <a
      href=${C(t,e.basePath)}
      class="settings-sidebar__item ${r?`settings-sidebar__item--active`:``}"
      aria-current=${r?`page`:p}
      @focus=${n=>y(e.preloadTimers,t,n,e.onPreload,r)}
      @blur=${t=>_(e.preloadTimers,t)}
      @pointerenter=${n=>y(e.preloadTimers,t,n,e.onPreload,r)}
      @pointerleave=${t=>_(e.preloadTimers,t)}
      @touchstart=${n=>y(e.preloadTimers,t,n,e.onPreload,r,!0)}
      @click=${n=>{a(n)&&(n.preventDefault(),e.onNavigate(t))}}
    >
      <span class="settings-sidebar__item-icon" aria-hidden="true"
        >${O[h(t)]}</span
      >
      <span class="settings-sidebar__item-label"
        >${n??b(t,e.nativeDeviceSettings?.snapshot)}</span
      >
      ${e.presentation===`embed-list`?d`<span class="settings-row__chevron" aria-hidden="true">${O.chevronRight}</span>`:p}
    </a>
  `}function ge(e,t){let n=(t.pathname??C(t.routeId,e.basePath))+(t.search??``)+t.hash,r=e.activeRouteId===t.routeId&&(t.pathname===void 0||e.activePathname===t.pathname)&&e.activeHash===t.hash&&(t.search===void 0||e.activeSearch===t.search);return d`
    <a
      href=${n}
      class="settings-sidebar__subitem ${r?`settings-sidebar__subitem--active`:``}"
      aria-current=${r?`location`:p}
      @click=${n=>{a(n)&&(n.preventDefault(),e.onNavigate(t.routeId,{...t.pathname?{pathname:t.pathname}:{},...t.search?{search:t.search}:{},hash:t.hash}))}}
    >
      <span class="settings-sidebar__subitem-label">${t.label}</span>
    </a>
  `}function _e(e){e.closest(`.settings-sidebar`)?.querySelector(`.settings-sidebar__search`)?.classList.toggle(`settings-sidebar__search--scrolled`,e.scrollTop>0)}function Q(e){let t=j(e);return d`<header class="native-embed-header">
    ${e.presentation===`embed-page`?d`<button
            class="native-embed-header__back btn btn--ghost"
            type="button"
            aria-label=${k(`common.back`)}
            @click=${e.onExit}
          >
            <span aria-hidden="true">${O.chevronLeft}</span>${k(`common.back`)}
          </button>`:p}
    <h1 class="page-title">
      ${e.presentation===`embed-list`?k(`nav.settings`):b(e.activeRouteId,e.nativeDeviceSettings?.snapshot)}
    </h1>
    ${t?M({kind:t,queuedOutboxCount:e.queuedOutboxCount??0,title:e.lastError?i(e.lastError):k(`connection.reconnecting`),onRetry:e.onRetryConnect}):d`<openclaw-settings-save-indicator
            .props=${e.saveIndicator}
          ></openclaw-settings-save-indicator>`}
  </header>`}function ve(e){if(e.presentation===`embed-page`)return Q(e);let t=j(e),n=k(`connection.reconnecting`),r=e.searchBlockMatches??(e.searchParams?fe(e.searchParams):[]),a=me(e.searchQuery,r,e.canAdmin!==!1,e.nativeDeviceSettings??null),o=d` <nav
    class="settings-sidebar__nav"
    aria-label=${k(`common.settingsSections`)}
    @scroll=${e=>_e(e.currentTarget)}
  >
    ${a.length===0?d`<p class="settings-sidebar__empty" role="status">
            ${k(`nav.settingsSearchNoResults`)}
          </p>`:a.map(t=>d`
              <div class="settings-sidebar__group">
                ${t.labelKey?d`<div class="settings-sidebar__group-label">${k(t.labelKey)}</div>`:p}
                ${t.items.map(t=>d`
                    ${he(e,t.routeId)}
                    ${t.blocks.map(t=>ge(e,t))}
                  `)}
              </div>
            `)}
  </nav>`;return e.presentation===`embed-list`?d`<section class="settings-embed-list">
      ${Q(e)} ${o}
    </section>`:d`
    <aside class="settings-sidebar">
      <header class="settings-sidebar__header">
        <button type="button" class="settings-sidebar__back" @click=${()=>e.onExit()}>
          <span class="settings-sidebar__back-icon" aria-hidden="true">${O.arrowLeft}</span>
          ${k(`nav.exitSettings`)}
          <kbd class="settings-sidebar__esc" aria-hidden="true">esc</kbd>
        </button>
        <h1 class="settings-sidebar__title">${k(`nav.settings`)}</h1>
      </header>
      <div class="settings-sidebar__search" role="search">
        <span class="settings-sidebar__search-icon" aria-hidden="true">${O.search}</span>
        <input
          class="settings-sidebar__search-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          aria-label=${k(`nav.settingsSearchLabel`)}
          placeholder=${k(`nav.settingsSearchPlaceholder`)}
          .value=${e.searchQuery}
          @input=${t=>e.onSearchQueryChange(t.currentTarget.value)}
          @keydown=${t=>{if(t.key===`Escape`){if(t.preventDefault(),e.searchQuery){e.onSearchQueryChange(``);return}e.onExit()}}}
        />
        ${e.searchQuery?d`
                <button
                  type="button"
                  class="settings-sidebar__search-clear"
                  aria-label=${k(`nav.settingsSearchClear`)}
                  @click=${t=>{let n=t.currentTarget.parentElement?.querySelector(`input`);e.onSearchQueryChange(``),n?.focus()}}
                >
                  ${O.x}
                </button>
              `:p}
      </div>
      ${o}
      <footer class="settings-sidebar__footer">
        ${t?M({kind:t,queuedOutboxCount:e.queuedOutboxCount??0,title:e.lastError?i(e.lastError):n,onRetry:e.onRetryConnect}):d`<openclaw-settings-save-indicator
                .props=${e.saveIndicator}
              ></openclaw-settings-save-indicator>`}
        <openclaw-sidebar-build-chip
          .basePath=${e.basePath}
          .gatewayVersion=${e.gatewayVersion||null}
          .variant=${`settings`}
          .onNavigate=${()=>e.onNavigate(`about`)}
        ></openclaw-sidebar-build-chip>
      </footer>
    </aside>
  `}function $(){return($=e((()=>{u(),x(),S(),D(),s(),J(),A(),re(),Z(),ie()})))()}$();export{ve as renderSettingsSidebar};
//# sourceMappingURL=settings-sidebar-lCd-mDCk.js.map