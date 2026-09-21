import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,L as n,Lt as r,Nn as i,R as a,Vt as o,Zn as s,ia as c}from"./control-ui-foundation-DMb6IeIq.js";import{Gc as l,Gn as u,Hs as d,Jo as f,Jr as ee,Kc as p,Kn as m,Kr as h,Vs as g,Ws as _,Xt as v,Yo as y,Ys as b,aa as te,ba as ne,do as re,on as x,qc as S,qo as ie,qr as ae,sa as oe,ta as se,tn as C,uo as ce,xa as le,za as ue}from"./control-ui-core-DzidtL-P.js";import{$ as de,C as fe,E as pe,K as w,O as me,X as T,_ as he,b as ge,dt as _e,nt as ve,q as E,r as ye,st as D,t as be,w as O}from"./lit-runtime-vxhGQLC6.js";import{cr as xe,h as Se,m as Ce,mr as we}from"./control-ui-core-CaKBexnk.js";import{Bt as k,Dt as Te,Ft as A,Gt as j,It as M,Nt as N,kt as P}from"./control-ui-core-uEI6aN5p.js";import{n as Ee,r as De}from"./gateway-runtime-DP4whqrA.js";import{Er as Oe,Kn as ke,Nn as Ae,Pn as je,qn as Me,wr as Ne}from"./control-ui-boot-shared-Cyt1Zyts.js";import{Gt as Pe,Kt as Fe,Wt as Ie}from"./control-ui-boot-chat-B4FQbyJR.js";import"./control-ui-boot-chat-CKX96sa9.js";import{n as Le,t as Re}from"./hub-tabs-DuEhaWau.js";import{n as ze,t as Be}from"./agent-scope-control-CqnA-t3U.js";import{i as Ve,n as He,r as Ue,t as We}from"./plugins-hub-header-B1Ape_aE.js";import{a as Ge,i as Ke,n as qe,r as Je,t as Ye}from"./history-scan-page-controller-DxJTPxRw.js";import{a as Xe,c as F,f as I,g as Ze,h as Qe,i as $e,l as L,o as R,p as z,r as et,s as tt,t as B}from"./proposals-B5P7XZKr.js";function V(e,t){return Ee(e,t,`operator.admin`)}function nt(e){return{canEvaluate:V(e,`skills.proposals.evaluate`),canApply:V(e,`skills.proposals.apply`),canRevise:V(e,`skills.proposals.requestRevision`),canReject:V(e,`skills.proposals.reject`),canScanHistory:V(e,`skills.proposals.historyScan`)}}function H(){return(H=e((()=>{De()})))()}function rt(e){let t=s(s(e.skills)?.workshop);return s(t?.autonomous)?.mode!==`off`}function it(e,t,n,r){let i=d(e?.state.configSnapshot);return i?{enabled:rt(i),busy:t,canUpdate:r,error:n}:null}async function at(e,t,n=()=>!0){let r={raw:{skills:{workshop:{autonomous:{mode:t?`auto`:`off`}}}},note:t?`Enable Skill Workshop self-learning`:`Disable Skill Workshop self-learning`},i=await e.patch(r);if(!n())return null;if(!i&&e.state.lastError?.includes(lt)){if(await e.refresh(),!n())return null;if(e.state.lastError)return e.state.lastError;if(i=await e.patch(r),!n())return null}return i?(await e.refresh(),n(),null):e.state.lastError??j(`skillWorkshop.selfLearning.updateError`)}function ot(e,t){return e?T`
    <label class="sw-self-learning-toggle" title=${j(`skillWorkshop.header.selfLearningTooltip`)}>
      <input
        type="checkbox"
        aria-label=${j(`skillWorkshop.header.selfLearningAria`)}
        .checked=${e.enabled}
        ?disabled=${e.busy||!e.canUpdate}
        @change=${e=>t(e.currentTarget.checked)}
      />
      <span class="sw-self-learning-toggle__track" aria-hidden="true"></span>
      <span class="sw-self-learning-toggle__label">${j(`skillWorkshop.header.selfLearning`)}</span>
    </label>
  `:E}function st(e,t){return!e||e.enabled?E:T`
    <div class="sw-empty-state__selflearn">
      <h3>${j(`skillWorkshop.selfLearning.pitchTitle`)}</h3>
      <p>${j(`skillWorkshop.selfLearning.pitchBody`)}</p>
      <button
        type="button"
        class="sw-btn sw-btn--primary ${e.busy?`is-busy`:``}"
        ?disabled=${e.busy||!e.canUpdate}
        @click=${()=>t(!0)}
      >
        ${e.busy?j(`skillWorkshop.selfLearning.enabling`):j(`skillWorkshop.selfLearning.enable`)}
      </button>
    </div>
  `}function ct(e){return e?.error?T`<div class="sw-error" role="status"><span>${e.error}</span></div>`:E}var lt;function U(){return(U=e((()=>{w(),k(),g(),lt=`config changed since last load`})))()}function ut(e,t,n){e.skillWorkshopMode!==t&&(e.skillWorkshopMode=t,ee(t),n())}function dt(e){return T`<span class="sw-section-tabs__icon" aria-hidden="true">${e}</span>`}function ft(e,{selfLearning:t,onSelfLearningToggle:n,onModeChange:r}){let i=e.skillWorkshopLoaded&&!e.skillWorkshopLoading&&!e.skillWorkshopError,a=e=>i?e:null,o=e.skillWorkshopProposals.filter(e=>e.status===`pending`).length;return T`
    <div class="sw-header-controls">
      ${Le({id:`skill-workshop-mode`,active:e.skillWorkshopMode,tabs:[{value:`skills`,count:a(e.skillWorkshopInstalledSkills.length),label:T`
              ${dt(A.book)}
              <span>${j(`skillWorkshop.sections.skills`)}</span>
            `},{value:`suggestions`,count:a(o),label:T`
              ${dt(A.wandSparkles)}
              <span>${j(`skillWorkshop.sections.suggestions`)}</span>
            `}],ariaLabel:j(`skillWorkshop.sections.aria`),panelId:`skill-workshop-mode-panel`,variant:`sub`,onSelect:r})}
      ${ot(t,n)}
    </div>
  `}function pt(){return(pt=e((()=>{w(),Re(),M(),k(),U(),h()})))()}function mt(e,t){if(t!==`workshop`){if(t===`skills`){e.navigate(`skills`);return}e.navigate(`plugins`,{pathname:we(t,e.basePath)})}}function ht(){return(ht=e((()=>{xe()})))()}function gt(e){let t=e.split(`
`),n=[];for(let e=0;e<t.length;e+=G)n.push(t.slice(e,e+G).join(`
`));return n}function _t(e){let t=e.split(`.`).pop()?.toLowerCase()??``;return{md:`Markdown`,txt:j(`filePreview.kind.text`),json:`JSON`,yaml:`YAML`,yml:`YAML`,ts:`TypeScript`,js:`JavaScript`,py:`Python`,sh:j(`filePreview.kind.shell`)}[t]??(t?t.toUpperCase():j(`filePreview.kind.file`))}function vt(e){return yt[ke(e)]}var W,G,yt;function bt(){return(bt=e((()=>{w(),de(),k(),S(),Ne(),Me(),M(),P(),W=class extends p{constructor(...e){super(...e),this.files=[],this.activePath=``,this.query=``,this.label=``,this.listLabel=``,this.searchPlaceholder=``,this.contextLabel=``,this.readOnlyLabel=``,this.emptyTitle=``,this.emptySubtitle=``,this.copyLabel=``,this.filteredFiles=[],this.derivedInputsReady=!1,this.codeChunks=[],this.resetScrollAfterUpdate=!0,this.focusAfterUpdate=!1,this.handleQueryInput=e=>{let t=e.target.value??``;this.dispatchEvent(new CustomEvent(`file-preview-query-change`,{bubbles:!0,composed:!0,detail:t}))},this.preventItemPointerFocus=e=>{e.preventDefault()},this.handleKeydown=e=>{switch(e.key){case`Escape`:e.preventDefault(),e.stopPropagation(),this.emitClose();return;case`ArrowDown`:this.moveSelection(1,e);return;case`ArrowUp`:this.moveSelection(-1,e)}},this.emitClose=()=>{this.dispatchEvent(new CustomEvent(`file-preview-close`,{bubbles:!0,composed:!0}))}}static{this.styles=_e`
    :host {
      display: contents;
    }

    .modal {
      width: 100%;
      height: min(780px, 86vh);
      background: var(--bg);
      border: 1px solid var(--border-strong);
      border-radius: var(--radius-lg);
      box-shadow: 0 24px 80px rgba(0, 0, 0, 0.6);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .head {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px 20px;
      border-bottom: 1px solid var(--border);
      background: var(--bg);
    }

    .search-icon {
      color: var(--muted);
      font-size: 18px;
    }

    .search {
      flex: 1;
      min-width: 0;
      background: transparent;
      border: none;
      outline: none;
      color: var(--text-strong);
      font: inherit;
      font-size: 18px;
      font-weight: 400;
      padding: 4px 0;
    }

    .search:focus,
    .search:focus-visible {
      outline: none;
      border: none;
      box-shadow: none;
    }

    .search::placeholder {
      color: var(--muted);
    }

    .state {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      color: var(--muted);
      padding: 5px 10px;
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
      background: var(--bg-elevated);
    }

    .body {
      flex: 1;
      display: grid;
      grid-template-columns: 360px 1fr;
      min-height: 0;
    }

    .list {
      border-right: 1px solid var(--border);
      padding: 14px 10px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .list-section {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--muted);
      padding: 4px 12px 8px;
    }

    .item {
      display: grid;
      grid-template-columns: 16px 1fr auto;
      gap: 12px;
      align-items: center;
      padding: 12px 14px;
      border-radius: var(--radius-md);
      border: none;
      background: transparent;
      color: var(--text);
      font: inherit;
      outline: none;
      text-align: left;
    }

    .item:focus-visible {
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--accent) 55%, transparent);
    }

    .item:hover {
      background: var(--bg-elevated);
    }

    .item.is-active {
      background: var(--accent-subtle);
    }

    .item.is-active .item-name {
      color: var(--text-strong);
    }

    .item-icon {
      width: 16px;
      height: 16px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--muted);
      opacity: 0.85;
    }

    .item.is-active .item-icon {
      color: var(--accent);
      opacity: 1;
    }

    .item-icon svg,
    .chat-copy-btn svg {
      width: 16px;
      height: 16px;
      stroke: currentColor;
      fill: none;
      stroke-width: 1.5px;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .item-name {
      font-family: var(--mono);
      font-size: 14px;
      color: var(--text);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .item-meta {
      color: var(--muted);
      font-size: 12px;
    }

    .empty-list {
      color: var(--muted);
      font-size: 13px;
      padding: 12px;
    }

    .detail {
      display: flex;
      flex-direction: column;
      min-width: 0;
      min-height: 0;
    }

    .detail.empty {
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 24px;
    }

    .detail-head {
      padding: 20px 24px 14px;
      border-bottom: 1px solid var(--border);
    }

    .detail-title-row {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 10px;
    }

    .title {
      flex: 1;
      min-width: 0;
      margin: 0;
      font-family: var(--mono);
      font-size: 22px;
      color: var(--text-strong);
      font-weight: 700;
      letter-spacing: -0.01em;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .chat-copy-btn {
      width: 32px;
      height: 32px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      padding: 0;
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
      background: var(--bg-elevated);
      color: var(--muted);
    }

    .chat-copy-btn:hover {
      border-color: var(--border-strong);
      color: var(--text-strong);
    }

    .chat-copy-btn:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }

    .chat-copy-btn__icon {
      display: inline-flex;
      width: 16px;
      height: 16px;
      position: relative;
    }

    .chat-copy-btn__icon-copy,
    .chat-copy-btn__icon-check {
      position: absolute;
      inset: 0;
      transition: opacity 150ms ease;
    }

    .chat-copy-btn__icon-check,
    .chat-copy-btn[data-copy-state="copied"] .chat-copy-btn__icon-copy {
      opacity: 0;
    }

    .chat-copy-btn[data-copy-state="copied"] .chat-copy-btn__icon-check {
      opacity: 1;
    }

    .chat-copy-btn[data-copy-state="copying"] {
      opacity: 0;
      pointer-events: none;
    }

    .chat-copy-btn[data-copy-state="error"] {
      border-color: var(--danger-subtle);
      background: var(--danger-subtle);
      color: var(--danger);
    }

    .chat-copy-btn[data-copy-state="copied"] {
      border-color: var(--ok-subtle);
      background: var(--ok-subtle);
      color: var(--ok);
    }

    .chips {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      padding: 3px 10px;
      border-radius: 999px;
      font-size: 11.5px;
      background: var(--bg-elevated);
      border: 1px solid var(--border);
      color: var(--muted);
    }

    .chip.accent {
      background: var(--accent-subtle);
      border-color: color-mix(in srgb, var(--accent) 30%, transparent);
      color: var(--accent);
    }

    .chip.ok {
      background: color-mix(in srgb, var(--ok) 12%, transparent);
      border-color: color-mix(in srgb, var(--ok) 30%, transparent);
      color: var(--ok);
    }

    .detail-body {
      flex: 1;
      overflow-x: hidden;
      overflow-y: auto;
      padding: 20px 24px 24px;
    }

    .code-content {
      min-width: 0;
    }

    .code-chunk {
      margin: 0;
      min-width: 0;
      font-family: var(--mono);
      font-size: 13px;
      line-height: 1.7;
      color: var(--text);
      white-space: pre-wrap;
      word-break: break-word;
      content-visibility: auto;
      contain-intrinsic-block-size: auto 1414px;
    }

    .foot {
      display: flex;
      align-items: center;
      gap: 18px;
      padding: 12px 20px;
      border-top: 1px solid var(--border);
      background: var(--bg);
      font-size: 12px;
      color: var(--muted);
    }

    .foot-group {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .kbd {
      font-family: var(--mono);
      font-size: 10.5px;
      padding: 2px 6px;
      border: 1px solid var(--border);
      border-radius: 4px;
      background: var(--bg-elevated);
      color: var(--text);
    }

    .spacer {
      flex: 1;
    }

    .button {
      height: 36px;
      padding: 0 14px;
      border-radius: var(--radius-md);
      border: 1px solid var(--border);
      background: var(--bg-elevated);
      color: var(--text);
      font-weight: 600;
    }

    .button:hover {
      border-color: var(--border-strong);
      color: var(--text-strong);
    }

    .empty-title {
      font-size: 16px;
      font-weight: 600;
      color: var(--text-strong);
      margin: 0 0 8px;
    }

    .empty-subtitle {
      margin: 0;
      font-size: 13px;
      color: var(--muted);
      max-width: 380px;
    }

    @media (max-width: 640px) {
      .head {
        padding: 12px;
      }

      .body {
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: minmax(0, min(180px, 30dvh)) minmax(0, 1fr);
      }

      .list {
        min-width: 0;
        border-right: 0;
        border-bottom: 1px solid var(--border);
        padding: 10px 8px;
      }

      .item {
        min-width: 0;
      }

      .foot {
        gap: 8px;
        padding: 10px 12px;
      }
    }
  `}willUpdate(e){if(!(!this.derivedInputsReady||e.has(`activePath`)||e.has(`query`)||e.has(`files`)))return;this.derivedInputsReady=!0,this.filteredFiles=this.filterFiles();let t=this.resolveActiveFile(this.filteredFiles);this.activeFile=t;let n=t?.contents;n!==this.codeSource&&(this.codeSource=n,this.codeChunks=n===void 0?[]:gt(n)),this.resetScrollAfterUpdate=!0}render(){let e=this.filteredFiles,t=this.activeFile,n=e.length===this.files.length?j(`filePreview.fileCount`,{count:String(this.files.length)}):j(`filePreview.filteredFileCount`,{count:String(e.length),total:String(this.files.length)}),r=this.label||j(`filePreview.label`),i=this.listLabel||j(`filePreview.listLabel`),a=this.searchPlaceholder||j(`filePreview.searchPlaceholder`);return T`
      <openclaw-modal-dialog
        label=${r}
        style="--openclaw-modal-width: min(1100px, 92vw); --openclaw-modal-max-height: 86vh;"
        @modal-cancel=${this.emitClose}
        @keydown=${this.handleKeydown}
      >
        <div class="modal">
          <header class="head">
            <span class="search-icon">⌕</span>
            <input
              class="search"
              placeholder=${a}
              .value=${this.query}
              @input=${this.handleQueryInput}
            />
            <span class="state">${n}</span>
          </header>
          <div class="body">
            <aside class="list">
              <div class="list-section">${i} · ${e.length}</div>
              ${e.length===0?T`<div class="empty-list">${j(`filePreview.noMatches`)}</div>`:e.map(e=>T`
                        <button
                          class="item ${e.path===t?.path?`is-active`:``}"
                          @pointerdown=${this.preventItemPointerFocus}
                          @mousedown=${this.preventItemPointerFocus}
                          @click=${()=>this.emitSelect(e.path)}
                        >
                          <span class="item-icon">${vt(e.path)}</span>
                          <span class="item-name">${e.path}</span>
                          <span class="item-meta">${e.size}</span>
                        </button>
                      `)}
            </aside>
            ${t?this.renderFile(t):this.renderEmpty()}
          </div>
          <footer class="foot">
            <span class="foot-group"><span class="kbd">↑↓</span> ${j(`filePreview.navigate`)}</span>
            <span class="spacer"></span>
            <button class="button" @click=${this.emitClose}>
              ${j(`common.close`)} <span class="kbd">esc</span>
            </button>
          </footer>
        </div>
      </openclaw-modal-dialog>
    `}renderFile(e){return T`
      <section class="detail">
        <div class="detail-head">
          <div class="detail-title-row">
            <h2 class="title">${e.path}</h2>
            ${e.contents?Oe(e.contents,this.copyLabel||j(`filePreview.copyFile`)):``}
          </div>
          <div class="chips">
            <span class="chip accent">${_t(e.path)}</span>
            <span class="chip">${e.size}</span>
            <span class="chip">${this.readOnlyLabel||j(`filePreview.readOnly`)}</span>
            ${this.contextLabel?T`<span class="chip ok">${this.contextLabel}</span>`:``}
          </div>
        </div>
        <div class="detail-body">
          <div class="code-content">
            ${this.codeChunks.map((e,t)=>T`<pre class="code-chunk" data-chunk=${t}>${e}</pre>`)}
          </div>
        </div>
      </section>
    `}renderEmpty(){return T`
      <section class="detail empty">
        <p class="empty-title">${this.emptyTitle||j(`filePreview.emptyTitle`)}</p>
        <p class="empty-subtitle">${this.emptySubtitle||j(`filePreview.emptySubtitle`)}</p>
      </section>
    `}filterFiles(){let e=this.query.trim().toLowerCase();return e?this.files.filter(t=>`${t.path}\n${t.contents}`.toLowerCase().includes(e)):this.files}resolveActiveFile(e){return e.find(e=>e.path===this.activePath)??e[0]}connectedCallback(){super.connectedCallback(),this.resetScrollAfterUpdate=!0,this.focusAfterUpdate=!0,this.requestUpdate()}updated(e){if(this.resetScrollAfterUpdate){this.resetScrollAfterUpdate=!1;let e=this.detailBody;e&&(e.scrollTop=0,e.scrollLeft=0)}(e.has(`activePath`)||e.has(`query`)||e.has(`files`))&&this.scrollActiveFileIntoView(),this.focusAfterUpdate&&this.isConnected&&(this.focusAfterUpdate=!1,this.focusModal())}focusModal(){(this.searchInput??this.shadowRoot?.querySelector(`.modal`))?.focus({preventScroll:!0})}moveSelection(e,t){t.preventDefault(),t.stopPropagation();let n=this.filterFiles();if(n.length===0)return;let r=this.resolveActiveFile(n),i=r?n.findIndex(e=>e.path===r.path):-1,a=n[Math.max(0,Math.min(n.length-1,i+e))];a&&a.path!==r?.path&&this.emitSelect(a.path)}scrollActiveFileIntoView(){this.updateComplete.then(()=>{this.isConnected&&this.shadowRoot?.querySelector(`.item.is-active`)?.scrollIntoView({block:`nearest`})}).catch(()=>{})}emitSelect(e){this.dispatchEvent(new CustomEvent(`file-preview-select`,{bubbles:!0,composed:!0,detail:e})),this.focusModal()}},t([D({attribute:!1})],W.prototype,`files`,void 0),t([D()],W.prototype,`activePath`,void 0),t([D()],W.prototype,`query`,void 0),t([D()],W.prototype,`label`,void 0),t([D()],W.prototype,`listLabel`,void 0),t([D()],W.prototype,`searchPlaceholder`,void 0),t([D()],W.prototype,`contextLabel`,void 0),t([D()],W.prototype,`readOnlyLabel`,void 0),t([D()],W.prototype,`emptyTitle`,void 0),t([D()],W.prototype,`emptySubtitle`,void 0),t([D()],W.prototype,`copyLabel`,void 0),t([ve(`.search`)],W.prototype,`searchInput`,void 0),t([ve(`.detail-body`)],W.prototype,`detailBody`,void 0),G=64,yt={code:A.fileCode,component:A.layoutGrid,data:A.braces,file:A.fileText,image:A.image,markdown:A.book,package:A.box,shell:A.terminal}})))()}function xt(){return(xt=e((()=>{bt(),customElements.get(`openclaw-file-preview-modal`)||customElements.define(`openclaw-file-preview-modal`,W)})))()}function K(e){return T`<article class="sidebar-markdown">
    ${ye(je(Ze(e),{mode:`document`,codeBlockChrome:`none`,remoteImages:!1}))}
  </article>`}function St(e){let t=e.query.trim().toLowerCase(),n=e.installedSkills.toSorted((e,t)=>Number(!!I(t.read))-Number(!!I(e.read))),r=t?n.filter(e=>`${e.name} ${e.description}`.toLowerCase().includes(t)):n;return T`
    <div class="sw-collection">
      <div class="sw-collection__head">
        <label class="sw-collection__search">
          ${A.search}
          <input
            type="search"
            aria-label=${j(`skillWorkshop.collection.searchLabel`)}
            placeholder=${j(`skillWorkshop.collection.search`)}
            .value=${e.query}
            @input=${t=>e.onQueryChange(t.currentTarget.value??``)}
          />
        </label>
        <p class="sw-collection__count">${Ct(e,r.length)}</p>
        <button
          type="button"
          class="btn btn--sm"
          aria-label=${j(`skillWorkshop.collection.refresh`)}
          ?disabled=${e.loading}
          @click=${e.onRetry}
        >
          ${j(`common.refresh`)}
        </button>
      </div>
      <div class="sw-collection__panes">
        <aside class="sw-collection__shelf" aria-label=${j(`skillWorkshop.collection.shelfLabel`)}>
          ${wt(e,r)}
        </aside>
        <section class="sw-collection__reader">${Et(e)}</section>
      </div>
    </div>
  `}function Ct(e,t){let n=e.installedSkills.length;return e.error?j(`skillWorkshop.collection.countUnavailable`):e.loading?j(`skillWorkshop.collection.loading`):t===n?n===1?j(`skillWorkshop.collection.countOne`):j(`skillWorkshop.collection.count`,{count:String(n)}):j(`skillWorkshop.collection.countFiltered`,{shown:String(t),total:String(n)})}function wt(e,t){if(e.installedSkills.length===0)return e.error?q({title:j(`skillWorkshop.collection.errorTitle`),body:j(`skillWorkshop.collection.errorBody`)}):e.loading?T`<p class="sw-collection__state sw-muted" aria-busy="true">
        ${j(`skillWorkshop.collection.loading`)}
      </p>`:q({title:j(`skillWorkshop.collection.emptyTitle`),body:j(`skillWorkshop.collection.emptyBody`),action:{label:j(`skillWorkshop.collection.seeSuggestions`),onClick:()=>e.onModeChange(`suggestions`)}});if(t.length===0)return q({title:j(`skillWorkshop.collection.noMatchTitle`),body:j(`skillWorkshop.collection.noMatchBody`),action:{label:j(`skillWorkshop.collection.clearSearch`),onClick:()=>e.onQueryChange(``)}});let n=Tt(e);return t.map(t=>{let r=t.name===n,i=I(t.read);return T`
      <button
        type="button"
        class="sw-installed-skill ${r?`is-selected`:``}"
        aria-current=${r?`true`:E}
        @click=${()=>e.onSelectInstalled(t.name)}
      >
        <span class="sw-installed-skill__name">${t.name}</span>
        ${i?T`<span
                class="sw-installed-skill__change"
                title=${i.appliedAt?v(Date.parse(i.appliedAt)):E}
              >
                ${i.appliedAt?j(`skillWorkshop.collection.changedSince`,{date:C(Date.parse(i.appliedAt))}):j(`skillWorkshop.collection.changes`)}
              </span>`:E}
        <span class="sw-installed-skill__desc">${t.description}</span>
      </button>
    `})}function Tt(e){return e.installedSelection.status===`idle`?null:e.installedSelection.name}function Et(e){let t=e.installedSelection;if(t.status===`idle`)return e.installedSkills.length===0?E:q({title:j(`skillWorkshop.collection.pickTitle`),body:j(`skillWorkshop.collection.pickBody`)});if(t.status===`loading`)return T`<div class="sw-collection__reader-body">
      ${t.content===void 0?E:K(t.content)}
      <p class="sw-collection__state sw-muted" aria-busy="true">
        ${t.content===void 0?j(`skillWorkshop.collection.loadingSkill`,{name:t.name}):j(`skillWorkshop.collection.comparing`)}
      </p>
    </div>`;if(t.status===`error`)return T`
      <div class="sw-collection__state" role="alert">
        <p class="sw-empty__title">
          ${j(`skillWorkshop.collection.readErrorTitle`,{name:t.name})}
        </p>
        <p class="sw-empty__sub">${t.error}</p>
        <button type="button" class="sw-btn" @click=${e.onRetryInstalled}>
          ${j(`pluginsPage.tryAgain`)}
        </button>
      </div>
    `;let n=e.installedSkills.find(e=>e.name===t.name),r=I(t),i=!t.savedVersionsError&&t.savedVersions.length>0&&!r;return T`
    <div class="sw-collection__reader-head">
      <div class="sw-collection__reader-identity">
        <h1 class="sw-collection__reader-title">${t.name}</h1>
        ${n?.description?T`<p class="sw-collection__reader-desc">${n.description}</p>`:E}
      </div>
    </div>
    <div class="sw-collection__reader-body">
      ${O(t,T`
          ${r?E:K(t.content)}
          <div class="sw-skill-changes">
            ${t.savedVersionsError?T`<p class="sw-muted" role="alert">
                    ${j(`skillWorkshop.collection.savedVersionError`)}
                  </p>`:E}
            ${t.savedVersions.length===0?t.savedVersionsError?E:T`<p class="sw-muted">${j(`skillWorkshop.collection.noSavedVersion`)}</p>`:T`
                    ${t.savedVersions.map(e=>{let t=e.diff;return T`<details
                        class="sw-skill-changes__version"
                        ?open=${e===r}
                      >
                        <summary
                          title=${[e.appliedAt?v(Date.parse(e.appliedAt)):``,j(`skillWorkshop.collection.savedNote`)].filter(Boolean).join(`
`)}
                        >
                          ${i?j(`skillWorkshop.collection.noChanges`):e.appliedAt?j(`skillWorkshop.collection.savedOn`,{date:C(Date.parse(e.appliedAt))}):j(`skillWorkshop.collection.savedVersion`)}
                          ${t.stat.added>0||t.stat.removed>0?Fe(t.stat):E}
                        </summary>
                        ${t.stat.added===0&&t.stat.removed===0?T`<p class="sw-muted">
                                ${j(`skillWorkshop.collection.unchanged`)}
                              </p>`:Pe(t.lines,`succeeded`,void 0,{path:`SKILL.md`})}
                      </details>`})}
                  `}
          </div>
        `)}
    </div>
  `}function q(e){return T`
    <div class="sw-collection__state">
      <p class="sw-empty__title">${e.title}</p>
      <p class="sw-empty__sub">${e.body}</p>
      ${e.action?T`<button type="button" class="sw-btn" @click=${e.action.onClick}>
              ${e.action.label}
            </button>`:E}
    </div>
  `}function Dt(){return(Dt=e((()=>{w(),fe(),be(),Qe(),M(),Ae(),k(),x(),Ie()})))()}function Ot({query:e}){let t=e.trim().length>0;return T`
    <div class="sw-detail sw-detail--empty">
      <div class="sw-filter-empty">
        <div class="sw-filter-empty__icon" aria-hidden="true">
          ${t?A.search:A.clock}
        </div>
        <p class="sw-empty__title">
          ${j(t?`skillWorkshop.empty.searchTitle`:`skillWorkshop.empty.pendingTitle`)}
        </p>
        <p class="sw-empty__sub">
          ${j(t?`skillWorkshop.empty.searchBody`:`skillWorkshop.empty.pendingBody`)}
        </p>
      </div>
    </div>
  `}function kt(e){return T`
    <div class="sw-empty-state">
      <section class="sw-empty-state__panel" aria-label=${j(`skillWorkshop.empty.noProposalsAria`)}>
        <div class="sw-empty-state__glyph" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p class="sw-empty-state__eyebrow">${j(`skillWorkshop.title`)}</p>
        <h2>${j(`skillWorkshop.empty.noProposalsTitle`)}</h2>
        <p>${j(`skillWorkshop.empty.noProposalsBody`,{agent:e.agentName})}</p>
        <div class="sw-empty-state__footer">${j(`skillWorkshop.empty.noProposalsFooter`)}</div>
        ${st(e.selfLearning,e.onSelfLearningToggle)}
      </section>
    </div>
  `}function At(){return(At=e((()=>{w(),M(),k(),U()})))()}function jt(e){let t=Date.parse(e.completedAt);return T`
    <section class="sw-evaluation">
      <header class="sw-evaluation__head">
        <h3>${j(`skillWorkshop.evaluation.title`)}</h3>
        <div class="sw-evaluation__meta">
          <span>
            ${j(`skillWorkshop.evaluation.version`,{version:e.proposedVersion})}
          </span>
          ${Number.isFinite(t)?T`<span>
                  ${j(`skillWorkshop.evaluation.completedAt`,{time:C(t,{dateFallback:!0})})}
                </span>`:E}
        </div>
      </header>
      <div class="sw-evaluation__outcomes">
        ${e.outcomes.map(e=>Mt(e))}
      </div>
    </section>
  `}function Mt(e){let t=e.result,n=e.pluginVersion?`${e.pluginId} ${e.pluginVersion}`:e.pluginId;return T`
    <section class="sw-evaluation__outcome">
      <div class="sw-evaluation__outcome-head">
        <div class="sw-evaluation__identity">
          <strong>${e.evaluatorId}</strong>
          <span>${n}</span>
        </div>
        <div class="sw-evaluation__badges">
          <span class="sw-evaluation__badge is-${e.status}">
            ${j(`skillWorkshop.evaluation.status.${e.status}`)}
          </span>
          ${t?.decision?T`<span class="sw-evaluation__badge is-${t.decision}">
                  ${j(`skillWorkshop.evaluation.decision.${t.decision}`)}
                </span>`:E}
        </div>
      </div>
      ${t?.summary?T`<p class="sw-evaluation__summary">${t.summary}</p>`:E}
      ${t?.decisionReason?T`<p class="sw-evaluation__reason">
              ${f(t.decisionReason)}
            </p>`:E}
      ${e.error?T`<p class="sw-evaluation__error">${f(e.error)}</p>`:E}
      ${t?.findings?.length?Nt(t.findings):E}
      ${t?.metrics&&Object.keys(t.metrics).length>0?Pt(t.metrics):E}
      ${t?.evaluatorVersion||t?.mode?T`
              <div class="sw-evaluation__runtime">
                ${t.evaluatorVersion?T`<span>
                        ${j(`skillWorkshop.evaluation.evaluatorVersion`,{version:t.evaluatorVersion})}
                      </span>`:E}
                ${t.mode?T`<span>
                        ${j(`skillWorkshop.evaluation.mode`,{mode:t.mode})}
                      </span>`:E}
              </div>
            `:E}
    </section>
  `}function Nt(e){return T`
    <div class="sw-evaluation__findings">
      <h4>${j(`skillWorkshop.evaluation.findings`)}</h4>
      <ul>
        ${e.map(e=>{let t=e.file?e.line?j(`skillWorkshop.evaluation.fileLine`,{file:e.file,line:String(e.line)}):e.file:null;return T`
            <li>
              <span class="sw-evaluation__severity is-${e.severity}">
                ${j(`skillWorkshop.evaluation.severity.${e.severity}`)}
              </span>
              <span>
                <code class="sw-evaluation__rule">${e.ruleId}</code>
                ${f(e.message)}
                ${t?T`<small>${t}</small>`:E}
              </span>
            </li>
          `})}
      </ul>
    </div>
  `}function Pt(e){return T`
    <div class="sw-evaluation__metrics">
      <h4>${j(`skillWorkshop.evaluation.metrics`)}</h4>
      <dl>
        ${Object.entries(e).toSorted(([e],[t])=>e.localeCompare(t)).map(([e,t])=>T`
              <div>
                <dt>${e}</dt>
                <dd>${String(t)}</dd>
              </div>
            `)}
      </dl>
    </div>
  `}function Ft(){return(Ft=e((()=>{w(),k(),y(),x()})))()}function It(e){let{props:t,groups:n,selected:r}=e,i=n.reduce((e,t)=>e+t.items.length,0);return T`
    <aside class="sw-queue" aria-label=${e.searchLabel}>
      <div class="sw-queue__search">
        <input
          type="search"
          aria-label=${e.searchLabel}
          placeholder=${e.searchPlaceholder}
          .value=${t.query}
          @input=${e=>t.onQueryChange(e.currentTarget.value??``)}
        />
      </div>
      <div class="sw-queue__body">
        ${i===0?T`<div class="sw-queue__empty">${e.emptyText}</div>`:n.map(e=>T`
                  <div class="sw-queue__group">
                    ${j(e.label)}
                    <span class="settings-count">${e.items.length}</span>
                  </div>
                  ${e.items.map(e=>Lt(t,e,r))}
                `)}
      </div>
    </aside>
  `}function Lt(e,t,n){let r=n?.key===t.key;return T`
    <button
      class="sw-row ${r?`is-selected`:``}"
      @click=${()=>e.onSelect(t.key)}
    >
      <span class="sw-row__dot"></span>
      <span>
        <span class="sw-row__title">${t.name}</span>
        <span class="sw-row__desc">${t.oneLine}</span>
      </span>
      <span class="sw-row__meta">${t.ageLabel}</span>
    </button>
  `}function Rt(){return(Rt=e((()=>{w(),k()})))()}function zt(e){let t=z(e.proposals,e.query);return{groups:Yt(t),selected:t.find(t=>t.key===e.selectedKey)??t[0]}}function Bt(e){let t=zt(e),n=t.selected,r=n&&e.filePreviewKey?n.supportFiles.find(t=>t.path===e.filePreviewKey):null,i=e.revisionKey?e.proposals.find(t=>t.key===e.revisionKey):null,a=e.mode===`skills`?St(e):Ht(e,t);return T`
    <section class="skill-workshop sw-mode-${e.mode}">
      ${e.error?T`<div class="sw-error" role="status">
              <span>${e.error}</span>
              <button type="button" class="btn btn--sm" @click=${e.onRetry}>
                ${j(`pluginsPage.tryAgain`)}
              </button>
            </div>`:E}
      ${ct(e.selfLearning)}
      <div class="sw-view" data-mode=${e.mode}>
        ${O(e.mode,T`<div class="sw-view__pane">${a}</div>`)}
      </div>
      ${e.actionNotice?Gt(e.actionNotice):E}
    </section>
    ${r&&n?T`
            <openclaw-file-preview-modal
              .files=${n.supportFiles}
              .activePath=${r.path}
              .query=${e.filePreviewQuery}
              .contextLabel=${j(`skillWorkshop.previewContext`,{slug:n.slug})}
              @file-preview-query-change=${t=>e.onFilePreviewQueryChange(t.detail)}
              @file-preview-select=${t=>e.onPreviewFile(n.key,t.detail)}
              @file-preview-close=${e.onClosePreview}
            ></openclaw-file-preview-modal>
          `:E}
    ${i?Vt(e,i):E}
  `}function Vt(e,t){let n=e.actionBusy?.key===t.key&&e.actionBusy.action===`revise`,r=!!e.actionBusy||e.revisionRecoveryActive,i=e.access.canRevise&&e.revisionDraft.trim().length>0&&!e.actionBusy,a=j(`skillWorkshop.actions.revise`);return T`
    <openclaw-modal-dialog
      .label=${`${j(`skillWorkshop.revision.title`,{verb:a})}: ${t.slug}`}
      .description=${j(`skillWorkshop.revision.description`)}
      style="--openclaw-modal-width: 560px"
      @modal-cancel=${r?void 0:e.onRevisionCancel}
    >
      <section class="sw-revision-dialog ${n?`sw-revision-dialog--sending`:``}">
        <div class="sw-revision-dialog__head">
          <div>
            <div class="sw-revision-dialog__eyebrow">
              ${j(`skillWorkshop.revision.title`,{verb:a})}
            </div>
            <h2 id="sw-revision-title">${t.slug}</h2>
          </div>
          <openclaw-tooltip content=${j(`skillWorkshop.actions.close`)}>
            <button
              type="button"
              class="sw-revision-dialog__close"
              aria-label=${j(`skillWorkshop.actions.close`)}
              ?disabled=${r}
              @click=${e.onRevisionCancel}
            >
              ×
            </button>
          </openclaw-tooltip>
        </div>
        <p class="sw-revision-dialog__copy">${j(`skillWorkshop.revision.description`)}</p>
        <textarea
          class="sw-revision-dialog__input"
          autofocus
          placeholder=${j(`skillWorkshop.revision.placeholder`)}
          .value=${e.revisionDraft}
          ?disabled=${!e.access.canRevise||!!e.actionBusy||e.revisionRecoveryActive}
          @input=${t=>e.onRevisionDraftChange(t.target.value??``)}
        ></textarea>
        ${n?T`
                <div class="sw-revision-dialog__status" role="status">
                  <span class="sw-revision-dialog__status-dot" aria-hidden="true"></span>
                  <span>${j(`skillWorkshop.revision.preparing`)}</span>
                </div>
              `:E}
        <div class="sw-revision-dialog__actions">
          <button
            type="button"
            class="sw-btn sw-btn--ghost"
            ?disabled=${r}
            @click=${e.onRevisionCancel}
          >
            ${j(`skillWorkshop.actions.cancel`)}
          </button>
          <button
            type="button"
            class="sw-btn sw-btn--primary ${n?`is-busy`:``}"
            ?disabled=${!i}
            @click=${()=>e.onRevisionSubmit(t.key)}
          >
            ${j(n?`skillWorkshop.actions.sending`:`skillWorkshop.revision.send`)}
          </button>
        </div>
      </section>
    </openclaw-modal-dialog>
  `}function Ht(e,t){let n=Ge({state:e.historyScan,canScan:e.access.canScanHistory,onScan:e.onHistoryScan});return e.proposals.length===0&&!e.loading&&!e.error?T`${n}${kt({agentName:Jt(e,j(`skillWorkshop.empty.defaultAgent`)),selfLearning:e.selfLearning,onSelfLearningToggle:e.onSelfLearningToggle})}`:T`
    ${n}
    <div
      class="sw-triage sw-triage--standalone"
      style=${me({"--sw-queue-width":`${e.queueWidth}px`})}
    >
      ${It({props:e,groups:t.groups,selected:t.selected,emptyText:Xt(e),searchLabel:j(`skillWorkshop.queue.suggestionsLabel`),searchPlaceholder:j(`skillWorkshop.queue.searchSuggestions`)})}
      ${Ut(e)}
      ${t.selected?Wt(e,t.selected):Ot({query:e.query})}
    </div>
  `}function Ut(e){let t,n=()=>(t?.previousElementSibling?.getBoundingClientRect().width??0)+(t?.nextElementSibling?.getBoundingClientRect().width??0);return T`<resizable-divider
    ${ge(e=>t=e instanceof HTMLElement?e:void 0)}
    class="sw-queue-resizer"
    .label=${j(`skillWorkshop.queue.resize`)}
    .splitRatio=${.5}
    .minRatio=${.2}
    .maxRatio=${.8}
    .measureRatio=${()=>e.queueWidth/n()}
    .measureSize=${n}
    @resize=${t=>e.onQueueWidthChange(t.detail.splitRatio*n())}
  ></resizable-divider>`}function Wt(e,t){let n=t.updatedAt&&t.updatedAt>t.createdAt?t.updatedAt:null,r=n?j(`skillWorkshop.detail.edited`,{time:Zt(n)}):j(`skillWorkshop.detail.created`,{time:Zt(t.createdAt)}),i=e.inspectingKey===t.key&&!t.bodyLoaded,a=t.supportFiles[0];return T`
    <div class="sw-detail">
      <div class="sw-detail__head">
        <div class="sw-detail__head-left">
          <h1 class="sw-detail__title">${t.name}</h1>
          <div class="sw-detail__one-line">${t.oneLine}</div>
          <div class="sw-detail__meta">
            <span>${r}</span>
            <span>·</span>
            <span>v${t.version}</span>
            <span>·</span>
            ${a?T`<button
                    class="sw-detail__meta-link"
                    @click=${()=>e.onPreviewFile(t.key,a.path)}
                  >
                    ${j(`skillWorkshop.detail.supportFiles`,{count:String(t.supportFiles.length)})}
                  </button>`:T`<span>${j(`skillWorkshop.detail.noSupportFiles`)}</span>`}
          </div>
        </div>
        <div class="sw-detail__nav">
          <openclaw-tooltip content=${j(`skillWorkshop.actions.previous`)}>
            <button aria-label=${j(`skillWorkshop.actions.previous`)} @click=${e.onPrev}>
              ↑
            </button>
          </openclaw-tooltip>
          <openclaw-tooltip content=${j(`skillWorkshop.actions.next`)}>
            <button aria-label=${j(`skillWorkshop.actions.next`)} @click=${e.onNext}>↓</button>
          </openclaw-tooltip>
        </div>
      </div>

      <div class="sw-detail__body">
        <div class="sw-body-card">
          <div class="sw-body-card__head">
            <h1>${t.slug}</h1>
          </div>
          ${t.degradedState?T`<p class="sw-muted" role="status">
                  ${j(`skillWorkshop.detail.draftMissing`)}
                </p>`:i?T`<p class="sw-muted">${j(`skillWorkshop.detail.loading`)}</p>`:K(t.body)}
        </div>

        ${t.supportFiles.length>0?T`
                <div class="sw-section" style="margin-top: 18px;">
                  <h3 class="sw-section__label">${j(`skillWorkshop.detail.supportFilesTitle`)}</h3>
                  <div class="sw-files">
                    ${t.supportFiles.map(n=>T`
                        <button
                          class="sw-file"
                          @click=${()=>e.onPreviewFile(t.key,n.path)}
                        >
                          <span>📄</span>
                          <span class="sw-file__name">${n.path}</span>
                          <span class="sw-file__size"
                            >${n.size}
                            <span class="sw-file__hint"
                              >${j(`skillWorkshop.detail.clickToPreview`)}</span
                            ></span
                          >
                        </button>
                      `)}
                  </div>
                </div>
              `:E}
        ${t.evaluation?jt(t.evaluation):E}
      </div>

      ${qt(e,t)}
    </div>
  `}function Gt(e){return T`
    <div class="sw-action-toast" role="status" aria-live="polite">
      <span>${e.label}</span>
      <strong>${e.slug}</strong>
      <span>·</span>
    </div>
  `}function Kt(e){return{proposalId:e.key,expectedRevisionHash:e.revisionHash}}function qt(e,t){let n=e.actionBusy?.key===t.key?e.actionBusy.action:null,r=!!e.actionBusy,i=r||!!t.degradedState;return T`
    <div class="sw-action-bar" aria-busy=${n?`true`:`false`}>
      <button
        class="sw-btn ${n===`evaluate`?`is-busy`:``}"
        ?disabled=${i||!e.access.canEvaluate}
        @click=${()=>e.onEvaluate(t.key)}
      >
        ${j(n===`evaluate`?`skillWorkshop.actions.evaluating`:`skillWorkshop.actions.evaluate`)}
      </button>
      <button
        class="sw-btn sw-btn--primary ${n===`apply`?`is-busy`:``}"
        ?disabled=${i||!e.access.canApply}
        @click=${()=>e.onApply(Kt(t))}
      >
        ${j(n===`apply`?`skillWorkshop.actions.applying`:`skillWorkshop.actions.apply`)}
      </button>
      <button
        class="sw-btn ${n===`revise`?`is-busy`:``}"
        ?disabled=${i||!e.access.canRevise}
        @click=${()=>e.onRevise(t.key)}
      >
        ${j(n===`revise`?`skillWorkshop.actions.opening`:`skillWorkshop.actions.revise`)}
      </button>
      <button
        class="sw-btn sw-btn--ghost sw-btn--danger ${n===`reject`?`is-busy`:``}"
        ?disabled=${r||!e.access.canReject}
        @click=${()=>e.onReject(Kt(t))}
      >
        ${j(n===`reject`?`skillWorkshop.actions.rejecting`:`skillWorkshop.actions.reject`)}
      </button>
    </div>
  `}function Jt(e,t){return e.workshopAgentName.trim()||e.assistantName.trim()||t}function Yt(e){let t=new Map;for(let n of e){let e=t.get(n.recencyGroup)??[];e.push(n),t.set(n.recencyGroup,e)}return[`today`,`yesterday`,`earlier`].filter(e=>t.has(e)).map(e=>({label:J[e],items:t.get(e)??[]}))}function Xt(e){return e.error?j(`skillWorkshop.queue.loadError`):e.loading?j(`skillWorkshop.queue.loading`):e.query.trim()?j(`skillWorkshop.queue.noMatch`):j(`skillWorkshop.queue.noSuggestions`)}function Zt(e){return C(e,{dateFallback:!0})}var J;function Qt(){return(Qt=e((()=>{w(),fe(),he(),pe(),xt(),P(),Te(),N(),k(),x(),Dt(),At(),Ft(),Ke(),Rt(),U(),J={today:`skillWorkshop.recency.today`,yesterday:`skillWorkshop.recency.yesterday`,earlier:`skillWorkshop.recency.earlier`}})))()}function $t(e,t,n){let{context:r,revisionRecoveryActive:i,workshopAgentName:a,onEvaluate:o,onRevisionSubmit:s,selfLearning:c,onSelfLearningToggle:l,onHistoryScan:u,onRetry:d}=t,f=nt(r.gateway.snapshot),ee=t=>{tt(e,r,t,{onProgress:n}).finally(n),n()},p=t=>{if(e.skillWorkshopQuery=``,e.skillWorkshopFilePreviewKey=null,ut(e,t,n),t===`skills`)d();else{let t=z(e.skillWorkshopProposals,``)[0];t&&F(e,r,t.key).finally(n)}};return T`
    <section class="content--skill-workshop">
      ${He({active:`workshop`,onSelect:e=>mt(r,e)})}
      <wa-tab-panel
        id=${Ue}
        class="sw-hub-panel"
        name="workshop"
        active
        aria-labelledby="plugins-tab-workshop"
      >
        <div class="sw-workshop-toolbar">
          ${ze({agents:r.agents.state.agentsList?.agents??[],selection:r.agentSelection,selectedId:e.skillWorkshopAgentId,allowAll:!1})}
          ${ft(e,{...t,onModeChange:p})}
        </div>
        ${(()=>{let t=z(e.skillWorkshopProposals,e.skillWorkshopQuery),m=t=>t.key===e.skillWorkshopSelectedKey,h=t.findIndex(m),g=t=>{e.skillWorkshopFilePreviewKey=null,F(e,r,t).finally(n),n()},_=e=>{if(t.length===0)return;let n=h<0?0:(h+e+t.length)%t.length,r=t[n];r&&g(r.key)},v=e=>{if(e.length===0||e.some(m))return;let t=e[0];t&&g(t.key)};return T`<wa-tab-panel
            id="skill-workshop-mode-panel"
            name=${e.skillWorkshopMode}
            active
            aria-labelledby=${`skill-workshop-mode-tab-${e.skillWorkshopMode}`}
          >
            ${Bt({access:f,loading:e.skillWorkshopLoading,error:e.skillWorkshopError,inspectingKey:e.skillWorkshopInspectingKey,proposals:e.skillWorkshopProposals,installedSkills:e.skillWorkshopInstalledSkills,installedSelection:e.skillWorkshopInstalledSkills.find(t=>t.name===(e.skillWorkshopInstalledName??e.skillWorkshopInstalledSkills[0]?.name))?.read??{status:`idle`},onSelectInstalled:ee,onRetryInstalled:()=>{let t=e.skillWorkshopInstalledName;t&&(tt(e,r,t,{force:!0,onProgress:n}).finally(n),n())},selectedKey:e.skillWorkshopSelectedKey,query:e.skillWorkshopQuery,filePreviewKey:e.skillWorkshopFilePreviewKey,filePreviewQuery:e.skillWorkshopFilePreviewQuery,queueWidth:e.skillWorkshopQueueWidth,mode:e.skillWorkshopMode,actionBusy:e.skillWorkshopActionBusy,actionNotice:e.skillWorkshopActionNotice,revisionKey:e.skillWorkshopRevisionKey,revisionDraft:e.skillWorkshopRevisionDraft,revisionRecoveryActive:i,assistantName:r.config.current.assistantIdentity.name,workshopAgentName:a,selfLearning:c,historyScan:e.skillWorkshopHistoryScan,onRetry:d,onQueryChange:t=>{e.skillWorkshopQuery=t,n(),e.skillWorkshopMode===`suggestions`&&v(z(e.skillWorkshopProposals,t))},onFilePreviewQueryChange:t=>{e.skillWorkshopFilePreviewQuery=t,n()},onQueueWidthChange:t=>{e.skillWorkshopQueueWidth=t,n()},onModeChange:p,onSelect:g,onPrev:()=>_(-1),onNext:()=>_(1),onApply:t=>{V(r.gateway.snapshot,`skills.proposals.apply`)&&(R(e,r,`apply`,t).finally(n),n())},onEvaluate:e=>{V(r.gateway.snapshot,`skills.proposals.evaluate`)&&(o(e),n())},onRevise:t=>{V(r.gateway.snapshot,`skills.proposals.requestRevision`)&&(e.skillWorkshopRevisionKey=t,e.skillWorkshopRevisionDraft=``,n())},onReject:t=>{V(r.gateway.snapshot,`skills.proposals.reject`)&&(R(e,r,`reject`,t).finally(n),n())},onRevisionDraftChange:t=>{e.skillWorkshopRevisionDraft=t,n()},onRevisionCancel:()=>{i||(e.skillWorkshopRevisionKey=null,e.skillWorkshopRevisionDraft=``,n())},onRevisionSubmit:e=>V(r.gateway.snapshot,`skills.proposals.requestRevision`)?s(e):void 0,onPreviewFile:(t,r)=>{e.skillWorkshopSelectedKey=t,e.skillWorkshopFilePreviewKey=r,n()},onClosePreview:()=>{e.skillWorkshopFilePreviewKey=null,e.skillWorkshopFilePreviewQuery=``,n()},onSelfLearningToggle:l,onHistoryScan:u})}
          </wa-tab-panel>`})()}
      </wa-tab-panel>
    </section>
  `}function en(){return(en=e((()=>{w(),Be(),We(),Ve(),H(),pt(),ht(),B(),Qt()})))()}function Y(e){return{...e.value}}function tn(){let e=new Map,t=new Set,n=!1,r=()=>{for(let e of t)e()},i=t=>{let i=t.generation;return{completion:t.execute(Y(t),a=>n||e.get(t.value.id)!==t||t.generation!==i||t.value.phase!==`pending`?null:(t.value={...t.value,...a},r(),Y(t))).then(n=>(e.get(t.value.id)===t&&t.generation===i&&(e.delete(t.value.id),r()),n.status===`admitted`?{id:t.value.id,sessionKey:n.sessionKey,status:`admitted`}:{id:t.value.id,status:`revision-changed`})).catch(n=>{let a=n instanceof Error?n.message:String(n);return e.get(t.value.id)===t&&t.generation===i&&(t.value={...t.value,error:a,phase:`retryable-failed`},r()),{error:a,id:t.value.id,status:`retryable-failed`}}),entry:Y(t)}};return{start(t,a){let o=ce(),s={execute:a,generation:0,value:{...t,id:o,idempotencyKey:ce(),phase:`pending`}};if(n)throw Error(`Skill Workshop revision admission owner is disposed.`);return e.set(o,s),r(),i(s)},retry(t){let a=e.get(t);return!a||a.value.phase!==`retryable-failed`||n?null:(a.generation+=1,a.value={...a.value,error:void 0,phase:`pending`},r(),i(a))},get(t){let n=e.get(t);return n?Y(n):null},firstFailed(t){let n=c(t);for(let t of e.values())if(t.value.phase===`retryable-failed`&&c(t.value.proposalAgentId)===n)return Y(t);return null},subscribe(e){return t.add(e),()=>t.delete(e)},dispose(){n=!0,e.clear(),t.clear()}}}function nn(){return(nn=e((()=>{b(),re()})))()}function rn(e,t){let n=t?.trim();return n?e?.sessions.find(e=>_(e.key,n))??null:null}function an(e){return!!(e&&!e.archived&&!e.hasActiveRun)}async function on(e,t){let n=e.sessions.state;return n.agentId===t&&n.result?.sessions.length?n.result:e.sessions.list({agentId:t})}function sn(e,t,n){let r=n?.sessionId?.trim();return{sessionKey:e,targetAgentId:c(n?.agentId??t),...r?{sessionId:r}:{}}}async function cn(e,t,n){if(!n())return null;let r=t.gateway.snapshot.hello,a=c(e.proposalOriginAgentId??e.proposalAgentId),o=await on(t,a);if(!n())return null;let s=rn(o,e.proposalOriginSessionKey);if(an(s))return sn(s.key,a,s);let l={agentId:a,label:i(`Skill Workshop: ${e.proposalSlug||e.proposalId}`,80)},u=le(t.gateway.snapshot,{method:`sessions.create`,params:l});if(!u.allowed)throw Error(u.reason);if(!n())return null;let d=await t.sessions.create(l);if(!n())return null;let f=ue(d,r).trim();if(!f)throw Error(t.sessions.state.error??`Could not prepare a Skill Workshop thread.`);return sn(f,a)}function ln(){return(ln=e((()=>{ne(),oe(),b()})))()}async function un(e){let t=e.context.gateway.snapshot,n=t.client;if(!n)throw Error(`Gateway is not connected.`);let r=()=>{let r=e.context.gateway.snapshot;return r.phase===`connected`&&r.client===n&&r.hello===t.hello},i=e.entry;if(!i.expectedRevisionHash){let t=await n.request(`skills.proposals.inspect`,{agentId:c(i.proposalAgentId),proposalId:i.proposalId});if(!r())throw Error(`Revision request was interrupted before proposal inspection completed.`);let a=t.revisionHash?.trim();if(!a)throw Error(`The proposal revision binding is unavailable.`);let o=t.record.origin,s=e.materialize({expectedRevisionHash:a,...o?.agentId?{proposalOriginAgentId:o.agentId}:{},...o?.sessionKey?{proposalOriginSessionKey:o.sessionKey}:{}});if(!s)throw Error(`Revision recovery is no longer available.`);i=s}if(!i.expectedRevisionHash)throw Error(`Revision recovery is no longer available.`);let a=await cn(i,e.context,r);if(!a)throw Error(`Revision request was interrupted before admission.`);let s=await n.request(`skills.proposals.requestRevision`,{agentId:c(i.proposalOriginAgentId??i.proposalAgentId),targetAgentId:a.targetAgentId,proposalId:i.proposalId,expectedRevisionHash:i.expectedRevisionHash,instructions:i.instructions,sessionKey:a.sessionKey,...a.sessionId?{sessionId:a.sessionId}:{},idempotencyKey:i.idempotencyKey}).catch(e=>{if(o(e))return{status:`revision-changed`};throw e});if(s.status===`revision-changed`)return s;if(s.status!==`started`&&s.status!==`in_flight`&&s.status!==`ok`)throw Error(`Gateway returned ${s.status} before admitting the revision request.`);return{sessionKey:a.sessionKey,status:`admitted`}}function dn(){return(dn=e((()=>{r(),b(),ln()})))()}function X(e){let t=Z.get(e);return t||(t=tn(),Z.set(e,t),e.lifecycleAbortSignal?.addEventListener(`abort`,()=>{t?.dispose(),Z.delete(e)},{once:!0})),t}var Z,fn;function pn(){return(pn=e((()=>{nn(),k(),y(),B(),dn(),Z=new WeakMap,fn=class{constructor(e){this.requestUpdate=e,this.recoveryId=null}get active(){return this.recoveryId!==null}request(e){let t=X(e.context),n=this.recoveryId?t.retry(this.recoveryId):t.start({...e.expectedRevisionHash?{expectedRevisionHash:e.expectedRevisionHash}:{},instructions:e.instructions,proposalAgentId:e.proposalAgentId,proposalId:e.proposal.key,...e.proposal.origin?.agentId?{proposalOriginAgentId:e.proposal.origin.agentId}:{},...e.proposal.origin?.sessionKey?{proposalOriginSessionKey:e.proposal.origin.sessionKey}:{},proposalSlug:e.proposal.slug},(t,n)=>un({context:e.context,entry:t,materialize:n}));return n?(this.recoveryId=n.entry.id,n.completion):Promise.resolve({error:`Revision recovery is no longer available.`,id:this.recoveryId??`missing`,status:`retryable-failed`})}sync(e,t){if(this.recoveryId){let n=X(e).get(this.recoveryId);if(n?.phase===`retryable-failed`){this.restore(t,n);return}if(n)return;this.recoveryId=null;let r=!!(t.skillWorkshopRevisionKey||t.skillWorkshopRevisionDraft||t.skillWorkshopActionBusy||t.skillWorkshopError);t.skillWorkshopRevisionKey=null,t.skillWorkshopRevisionDraft=``,t.skillWorkshopActionBusy=null,t.skillWorkshopError=null,r&&this.requestUpdate()}if(t.skillWorkshopRevisionKey||t.skillWorkshopRevisionDraft)return;let n=X(e).firstFailed($e(e));n&&(this.recoveryId=n.id,this.restore(t,n))}restore(e,t){let n=j(`skillWorkshop.revision.notAdmitted`,{error:ie(t.error??`Retry the revision request.`)}),r=e.skillWorkshopRevisionKey!==t.proposalId||e.skillWorkshopRevisionDraft!==t.instructions||e.skillWorkshopActionBusy!==null||e.skillWorkshopError!==n;e.skillWorkshopRevisionKey=t.proposalId,e.skillWorkshopRevisionDraft=t.instructions,e.skillWorkshopActionBusy=null,e.skillWorkshopError=n,r&&this.requestUpdate()}}})))()}function mn(e){let{state:t,context:n}=e;return t&&n?{state:t,context:n,epoch:e.epoch,gateway:n.gateway,agentSelection:n.agentSelection,sessions:n.sessions,navigate:n.navigate}:null}function hn(e,t){let n=t.context;return t.state===e.state&&n===e.context&&t.epoch===e.epoch&&n?.gateway===e.gateway&&n.agentSelection===e.agentSelection&&n.sessions===e.sessions&&n.navigate===e.navigate}var Q;function $(){return($=e((()=>{a(),w(),de(),Se(),N(),se(),S(),m(),H(),Ye(),en(),B(),pn(),U(),h(),Q=class extends l{constructor(...e){super(...e),this.operationEpoch=0,this.hasBoundContext=!1,this.gatewayClient=null,this.gatewayHello=null,this.gatewayConnected=!1,this.hasBoundAgentSelection=!1,this.hasBoundSessions=!1,this.selfLearningBusy=!1,this.selfLearningError=null,this.requestPageUpdate=()=>{this.isConnected&&this.requestUpdate()},this.revisionRecovery=new fn(this.requestPageUpdate),this.subscriptions=new u(this).watch(()=>this.context?.agents,(e,t)=>e.subscribe(t)).effect(()=>this.context,e=>{let t=this.hasBoundContext&&this.contextSource!==e;if(this.hasBoundContext=!0,this.contextSource=e,t){let t=e.gateway;this.gatewaySource=t,this.gatewayClient=t.snapshot.client,this.gatewayHello=t.snapshot.hello,this.gatewayConnected=t.snapshot.phase===`connected`,this.agentSelectionSource=e.agentSelection,this.selectedAgentId=e.agentSelection.state.selectedId,this.sessionsSource=e.sessions,this.resetSourceState(),this.loadProposals(!0)}}).effect(()=>this.context?.gateway,e=>{let t=e.snapshot,n=this.gatewaySource!==void 0&&this.gatewaySource!==e,r=this.gatewaySource!==void 0&&this.gatewayClient!==t.client,i=this.gatewaySource!==void 0&&this.gatewayConnected!==(t.phase===`connected`),a=this.gatewaySource!==void 0&&this.gatewayHello!==t.hello;return this.applyGatewaySnapshot(e,t,n||r||i||a),e.subscribe(t=>{if(this.gatewaySource!==e||this.context?.gateway!==e)return;let n=t.client!==this.gatewayClient||t.phase===`connected`!==this.gatewayConnected||t.hello!==this.gatewayHello;this.applyGatewaySnapshot(e,t,n)})}).watch(()=>this.context?.config,(e,t)=>e.subscribe(t)).effect(()=>this.context?.agentSelection,e=>{let t=this.hasBoundAgentSelection&&this.agentSelectionSource!==e;this.hasBoundAgentSelection=!0,this.agentSelectionSource=e;let n=!0,r=()=>{if(this.agentSelectionSource!==e||this.context?.agentSelection!==e)return;let r=e.state.selectedId,i=!n&&this.selectedAgentId!==r;this.selectedAgentId=r;let a=t||i;t=!1,n=!1,a&&this.resetSourceState(),this.loadProposals(a)};return r(),e.subscribe(r)}).effect(()=>this.context?.sessions,e=>{let t=this.hasBoundSessions&&this.sessionsSource!==e;this.hasBoundSessions=!0,this.sessionsSource=e,t&&(this.resetSourceState(),this.loadProposals(!0))}).watch(()=>this.context?.agentIdentity,(e,t)=>e.subscribe(t)).watch(()=>this.context?.runtimeConfig,(e,t)=>e.subscribe(t)).watch(()=>this.context?X(this.context):void 0,(e,t)=>e.subscribe(t)),this.handleRevisionRequest=async(e,t,n,r)=>{let i=this.captureSourceScope();return i?await this.revisionRecovery.request({context:i.context,expectedRevisionHash:r,instructions:e,proposal:t,proposalAgentId:n}):{error:`Skill Workshop is not ready.`,id:`unowned`,status:`retryable-failed`}},this.handleEvaluation=e=>{let t=this.captureSourceScope();t&&Xe(t.state,t.context,e,()=>this.isCurrentSourceScope(t)).finally(this.requestPageUpdate)},this.handleRevisionSubmit=e=>{let t=this.captureSourceScope();t&&et(t.state,t.context,e,this.handleRevisionRequest,()=>this.isCurrentSourceScope(t)).then(e=>{!e||e.status!==`admitted`||!this.isCurrentSourceScope(t)||t.navigate(`chat`,te({context:t.context,face:`chat`,sessionKey:e.sessionKey}).options)}).finally(this.requestPageUpdate)},this.handleHistoryScan=()=>{if(!V(this.context?.gateway?.snapshot,`skills.proposals.historyScan`))return;let e=this.captureSourceScope();e&&(Je({state:e.state,context:e.context,onProgress:this.requestPageUpdate,isCurrent:()=>this.isCurrentSourceScope(e),current:()=>{let e=this.state,t=this.context;return e&&t?{state:e,context:t}:void 0}}).finally(this.requestPageUpdate),this.requestPageUpdate())},this.handleSelfLearningToggle=e=>{this.applySelfLearningToggle(e)}}willUpdate(){!this.state&&this.context&&(this.state=L(this.data),this.state.skillWorkshopMode=ae())}updated(){this.state&&this.context&&this.revisionRecovery.sync(this.context,this.state);let e=this.state,t=e&&!e.skillWorkshopLoaded&&!e.skillWorkshopLoading&&!e.skillWorkshopError;this.gatewayConnected&&t&&this.loadProposals(!1),this.ensureWorkshopAgentIdentity();let n=this.context?.runtimeConfig;n&&this.gatewayConnected&&!n.state.configSnapshot&&!n.state.configLoading&&n.ensureLoaded()}resetSourceState(){this.operationEpoch+=1,this.selfLearningBusy=!1,this.selfLearningError=null;let e=this.state;if(!e)return;e.skillWorkshopActionNoticeTimer&&globalThis.clearTimeout(e.skillWorkshopActionNoticeTimer);let t=L();t.skillWorkshopAgentId=e.skillWorkshopAgentId,t.skillWorkshopQuery=e.skillWorkshopQuery,t.skillWorkshopQueueWidth=e.skillWorkshopQueueWidth,t.skillWorkshopMode=e.skillWorkshopMode,this.state=t,this.requestPageUpdate()}applyGatewaySnapshot(e,t,n){this.gatewaySource=e,this.gatewayClient=t.client,this.gatewayHello=t.hello,this.gatewayConnected=t.phase===`connected`,n&&this.resetSourceState(),t.phase===`connected`&&(n||!this.state?.skillWorkshopLoaded)&&this.loadProposals(n)}captureSourceScope(){return mn({state:this.state,context:this.context,epoch:this.operationEpoch})}isCurrentSourceScope(e){return hn(e,{state:this.state,context:this.context,epoch:this.operationEpoch})}loadProposals(e){let t=this.state,n=this.context;!t||!n||n.gateway.snapshot.phase!==`connected`||(qe({context:n,state:t,force:e,onProgress:this.requestPageUpdate}).finally(this.requestPageUpdate),this.requestPageUpdate())}async applySelfLearningToggle(e){if(!V(this.context?.gateway?.snapshot,`config.patch`))return;let t=this.captureSourceScope(),n=t?.context.runtimeConfig;if(!(!t||!n||this.selfLearningBusy)){this.selfLearningBusy=!0,this.selfLearningError=null,this.requestPageUpdate();try{let r=await at(n,e,()=>this.isCurrentSourceScope(t));this.isCurrentSourceScope(t)&&(this.selfLearningError=r)}finally{this.isCurrentSourceScope(t)&&(this.selfLearningBusy=!1,this.requestPageUpdate())}}}ensureWorkshopAgentIdentity(){let e=this.context,t=this.state?.skillWorkshopAgentId;!e||!t||e.agentIdentity.get(t)||e.agentIdentity.ensure([t])}disconnectedCallback(){this.subscriptions.clear(),this.resetSourceState(),super.disconnectedCallback()}render(){return this.state&&this.context?$t(this.state,{context:this.context,revisionRecoveryActive:this.revisionRecovery.active,workshopAgentName:this.context.agentIdentity.get(this.state.skillWorkshopAgentId)?.name?.trim()??``,onEvaluate:this.handleEvaluation,onRevisionSubmit:this.handleRevisionSubmit,selfLearning:it(this.context.runtimeConfig,this.selfLearningBusy,this.selfLearningError,V(this.context.gateway.snapshot,`config.patch`)),onSelfLearningToggle:this.handleSelfLearningToggle,onHistoryScan:this.handleHistoryScan,onRetry:()=>this.loadProposals(!0)},this.requestPageUpdate):E}},t([n({context:Ce,subscribe:!0})],Q.prototype,`context`,void 0),t([D({attribute:!1})],Q.prototype,`data`,void 0),customElements.get(`openclaw-skill-workshop-page`)||customElements.define(`openclaw-skill-workshop-page`,Q)})))()}$();
//# sourceMappingURL=skill-workshop-page-DVVSQ8cH.js.map