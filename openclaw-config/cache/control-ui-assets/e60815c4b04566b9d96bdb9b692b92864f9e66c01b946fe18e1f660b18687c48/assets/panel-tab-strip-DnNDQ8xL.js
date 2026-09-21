import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{K as t,X as n,_ as r,b as i,dt as a,m as o,p as s,q as c}from"./lit-runtime-vxhGQLC6.js";import{Ft as l,It as u,Nt as d}from"./control-ui-core-uEI6aN5p.js";import{gn as f}from"./control-ui-boot-chat-pu3gR1ly.js";function p(e){e.closest(`wa-tab-group`)?.querySelectorAll(`.is-drop-before, .is-drop-after`).forEach(e=>e.classList.remove(`is-drop-before`,`is-drop-after`))}function m(e){return e.closest(`wa-tab-group`)?.dataset.draggedPanelTab??``}function h(e){p(e),e.closest(`wa-tab-group`)?.removeAttribute(`data-dragged-panel-tab`)}function g(e){let t=e.getRootNode();return t instanceof ShadowRoot?t.activeElement??document.activeElement:document.activeElement}function _(){let e=document.activeElement;for(;e instanceof HTMLElement&&e.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e}function v(e,t){let n=e.getRootNode();return t===document.body||t===document.documentElement||n instanceof ShadowRoot&&t===n.host}function y(){let e=null;return t=>{if(e?.disconnect(),e=null,!(t instanceof HTMLElement))return;let n=()=>{let e=t.scrollWidth>t.clientWidth+1;t.classList.toggle(`is-overflowing`,e),t.parentElement?.classList.toggle(`has-label-overflow`,e),t.toggleAttribute(`data-tooltip-overflow`,e)};n(),typeof ResizeObserver==`function`&&(e=new ResizeObserver(n),e.observe(t))}}function b(){let e=null,t=null,n=0;return r=>{n+=1;let i=n;e?.disconnect(),e=null,t?.(),t=null,r instanceof HTMLElement&&(async()=>{await r.updateComplete;let a=r.shadowRoot?.querySelector(`[part~="tabs"]`);if(!a||!r.isConnected||i!==n)return;let o=()=>{let e=[...r.children].map(e=>e.getBoundingClientRect());if(e.length===0)return;let t=a.getBoundingClientRect(),n=Math.min(...e.map(e=>e.left)),i=Math.max(...e.map(e=>e.right));r.classList.toggle(`has-scroll-left`,t.left-n>8),r.classList.toggle(`has-scroll-right`,i-t.right>8)};o(),a.addEventListener(`scroll`,o,{passive:!0}),t=()=>a.removeEventListener(`scroll`,o),typeof ResizeObserver==`function`&&(e=new ResizeObserver(o),e.observe(a))})()}}function x(e,t){let n=t.getBoundingClientRect();return e.clientX>n.left+n.width/2==(getComputedStyle(t).direction===`rtl`)?`before`:`after`}function S(e,t,n){if(!(e instanceof HTMLElement))return;let r=w.get(e)!==t;w.set(e,t),!(!r&&!n)&&queueMicrotask(()=>{e.isConnected&&(e.closest(`wa-tab-group`)?.updateComplete??Promise.resolve()).then(()=>{if(!e.isConnected)return;e.scrollIntoView?.({block:`nearest`,inline:`nearest`});let t=g(e);n&&v(e,t)&&e.focus({preventScroll:!0})})})}function C(e){let t=t=>e.newControl===c?c:e.newControl?n`<span slot=${t?`nav`:c} class="tabstrip-new-control"
            >${e.newControl}</span
          >`:n`
            <button
              slot=${t?`nav`:c}
              class="rail-header__action tabstrip-new"
              type="button"
              ?data-new-tab-action=${e.newTabAction}
              ?disabled=${e.newDisabled}
              title=${e.newLabel}
              aria-label=${e.newLabel}
              @click=${e.onNew}
            >
              ${l.plus}
            </button>
          `;if(e.tabs.length===0)return t(!1);let r=_(),a=r instanceof HTMLElement&&e.tabs.some(e=>e.domId===r.id)?r.id:null,s=JSON.stringify([e.activeId,e.tabs.map(e=>e.id)]);return n`
    <wa-tab-group
      class="tabstrip"
      ${i(b())}
      .active=${e.activeId??``}
      activation="auto"
      without-scroll-controls
      @wa-tab-show=${t=>{t.detail.name!==e.activeId&&e.onSelect(t.detail.name)}}
    >
      ${o(e.tabs,e=>e.id,(t,r)=>{let o=t.id===e.activeId,u=e.separateTabs===!0&&r<e.tabs.length-1,d=n`
            ${t.icon==null||t.icon===c?c:n`<span class="tabstrip-tab__icon" aria-hidden="true">${t.icon}</span>`}
            <span class="tabstrip-tab__label" ${i(y())}>${t.label}</span>
            ${t.badge?n`<span class="tabstrip-tab__badge">${t.badge}</span>`:c}
            ${t.statusLabel?n`<span class="tabstrip-tab__status">${t.statusLabel}</span>`:c}
          `;return n`
            <wa-tab
              id=${t.domId}
              class=${`tabstrip-tab ${t.className??``}`}
              panel=${t.id}
              aria-controls=${e.ariaControls}
              aria-selected=${o?`true`:`false`}
              title=${t.title||c}
              ?active=${o}
              draggable=${e.onReorder?`true`:c}
              .tabIndex=${o?0:-1}
              ${o?i(e=>S(e,s,a===t.domId)):c}
              @auxclick=${n=>{n.button===1&&(n.preventDefault(),e.onClose(t.id))}}
              @dragstart=${n=>{if(!(!e.onReorder||!n.dataTransfer)&&(n.dataTransfer.effectAllowed=`move`,n.dataTransfer.setData(E,t.id),n.currentTarget instanceof Element)){let e=n.currentTarget.closest(`wa-tab-group`);e&&(e.dataset.draggedPanelTab=t.id)}}}
              @dragover=${n=>{if(!e.onReorder||!n.dataTransfer)return;let r=n.currentTarget instanceof Element?m(n.currentTarget):``;if(!r||r===t.id)return;n.preventDefault(),n.dataTransfer.dropEffect=`move`;let i=n.currentTarget;i instanceof Element&&(p(i),i.classList.add(`is-drop-${x(n,i)}`))}}
              @dragleave=${e=>{e.currentTarget instanceof Element&&!(e.relatedTarget instanceof Node&&e.currentTarget.contains(e.relatedTarget))&&e.currentTarget.classList.remove(`is-drop-before`,`is-drop-after`)}}
              @drop=${n=>{if(!e.onReorder||!n.dataTransfer)return;let r=n.currentTarget,i=r instanceof Element?m(r)||n.dataTransfer.getData(E):``;if(!i||i===t.id||!(r instanceof Element))return;n.preventDefault();let a=x(n,r);h(r),e.onReorder(i,t.id,a)}}
              @dragend=${e=>{e.currentTarget instanceof Element&&h(e.currentTarget)}}
            >
              ${t.labelTooltip?n`<openclaw-tooltip
                      class="tabstrip-tab__label-tooltip"
                      .content=${t.labelTooltip}
                    >
                      <span class="tabstrip-tab__tooltip-trigger">${d}</span>
                    </openclaw-tooltip>`:d}
            </wa-tab>
            <button
              slot="nav"
              class="rail-header__action tabstrip-tab__close"
              type="button"
              .tabIndex=${o?0:-1}
              aria-label=${t.closeLabel}
              @keydown=${e=>{(e.key===`Enter`||e.key===` `)&&e.currentTarget instanceof Element&&T.add(e.currentTarget)}}
              @click=${async n=>{let r=n.currentTarget,i=r instanceof Node?r.getRootNode():null,a=i instanceof ShadowRoot?i.host:null,o=r instanceof Element&&(T.delete(r)||g(r)===r);if(await e.onClose(t.id),!o)return;await a?.updateComplete;let s=[...i?.querySelectorAll(`wa-tab-group`)??[]].find(t=>[...t.querySelectorAll(`wa-tab`)].some(t=>t.getAttribute(`aria-controls`)===e.ariaControls));await s?.updateComplete;let c=[...s?.querySelectorAll(`wa-tab`)??[]].find(e=>e.getAttribute(`panel`)===t.id),l=s?.querySelector(`wa-tab[active]`),u=l?g(l):null;!c&&l&&v(l,u)&&l.focus({preventScroll:!0})}}
            >
              <span class="tabstrip-tab__close-box">${l.x}</span>
            </button>
            ${u?n`<span slot="nav" class="tabstrip-separator" aria-hidden="true"></span>`:c}
          `})}
      ${t(!0)}
    </wa-tab-group>
  `}var w,T,E,D;function O(){return(O=e((()=>{t(),r(),s(),u(),d(),f(),w=new WeakMap,T=new WeakSet,E=`application/x-openclaw-panel-tab`,D=a`
  :where(.tp-header, .bp-header) {
    --rail-header-height: 46px;
    --rail-header-padding-start: 8px;
  }
  :where(.tp-actions, .bp-actions) {
    padding-left: 8px;
    border-left: 1px solid var(--border, #262b34);
  }
  .tabstrip {
    --track-width: 0;
    display: block;
    /* Allow the strip to shrink inside a flex header so wide tab rows scroll
       here instead of squeezing out sibling header controls. */
    min-width: 0;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .tabstrip::part(nav) {
    display: flex;
    align-items: center;
  }
  .tabstrip::part(body) {
    display: none;
  }
  .tabstrip::-webkit-scrollbar {
    display: none;
  }
  .tabstrip-tab::part(base) {
    display: flex;
    align-items: center;
    gap: 7px;
    height: 30px;
    padding: 0 34px 0 10px;
    border: 0;
    border-radius: 7px;
    color: var(--muted, #8a919e);
    white-space: nowrap;
    font-size: 12.5px;
    transition:
      color 0.12s ease,
      background 0.12s ease,
      box-shadow 0.12s ease;
  }
  .tabstrip-tab:hover::part(base) {
    color: var(--text, #d7dae0);
    background: color-mix(in srgb, var(--text, #d7dae0) 6%, transparent);
  }
  .tabstrip-tab[active]::part(base) {
    color: var(--text, #d7dae0);
    background: var(--bg-hover, #1f2330);
    box-shadow: inset 0 0 0 1px var(--border-strong, #2e3040);
  }
  .tabstrip-tab.is-exited:not([active])::part(base) {
    opacity: 0.55;
  }
  .tabstrip-tab.is-connecting .tabstrip-tab__icon {
    animation: tabstrip-pulse 1.2s ease-in-out infinite;
  }
  .tabstrip-tab__icon {
    display: inline-flex;
    color: var(--accent, #ff5c5c);
  }
  .tabstrip-tab.is-exited .tabstrip-tab__icon {
    color: var(--muted, #8a919e);
  }
  .tabstrip-tab__label {
    max-width: 220px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-variant-numeric: tabular-nums;
  }
  .tabstrip-tab__tooltip-trigger {
    display: inline-flex;
    min-width: 0;
    align-items: center;
    gap: inherit;
    flex: 1 1 auto;
  }
  .tabstrip-tab__status {
    font-size: 11px;
    color: var(--muted, #8a919e);
  }
  .tabstrip-tab__badge {
    border: 1px solid color-mix(in srgb, var(--accent, #ff5c5c) 45%, transparent);
    border-radius: 999px;
    color: var(--accent, #ff5c5c);
    font-size: 9px;
    line-height: 14px;
    padding: 0 5px;
    text-transform: uppercase;
  }
  /* Keep the close action inside the tab surface without nesting it in wa-tab;
     wa-tab-group still owns the direct tab children for keyboard navigation. */
  .tabstrip-tab__close {
    flex: 0 0 auto;
    align-self: center;
    z-index: 1;
    margin-left: -32px;
    margin-right: 4px;
    opacity: 0;
    transition: opacity 0.12s ease;
  }
  .tabstrip-tab__close-box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border-radius: 5px;
  }
  :where(.tabstrip-tab:hover, .tabstrip-tab[active]) + .tabstrip-tab__close,
  .tabstrip-tab__close:hover,
  .tabstrip-tab__close:focus-visible {
    opacity: 1;
  }
  .tabstrip-new {
    flex: none;
    align-self: center;
    margin-left: 2px;
  }
  .tabstrip-new-control {
    display: inline-flex;
    flex: none;
    align-self: center;
  }
  .tabstrip-separator {
    flex: 0 0 auto;
    align-self: center;
  }
  @keyframes tabstrip-pulse {
    50% {
      opacity: 0.35;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .tabstrip-tab.is-connecting .tabstrip-tab__icon {
      animation: none;
    }
  }
`})))()}export{D as n,C as r,O as t};
//# sourceMappingURL=panel-tab-strip-DnNDQ8xL.js.map