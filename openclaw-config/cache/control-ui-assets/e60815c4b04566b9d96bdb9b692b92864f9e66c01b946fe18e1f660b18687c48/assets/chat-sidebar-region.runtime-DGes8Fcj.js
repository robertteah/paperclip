import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t}from"./control-ui-foundation-DMb6IeIq.js";import{Gc as n,qc as r}from"./control-ui-core-DzidtL-P.js";import{$ as i,J as a,K as o,X as s,_ as c,b as l,m as u,p as d,q as f,st as p}from"./lit-runtime-vxhGQLC6.js";import{Bt as m,Ft as h,Gt as g,It as _,M as v,Nt as y,V as b}from"./control-ui-core-uEI6aN5p.js";import{Bt as x,zt as S}from"./control-ui-boot-chat-pu3gR1ly.js";import{c as C,l as w}from"./control-ui-boot-chat-BoyWVlmW.js";import{J as T,K as E,V as D,at as O,it as k,nt as A,rt as j}from"./control-ui-boot-chat-B0K1m2J4.js";import{r as M,t as N}from"./panel-tab-strip-DnNDQ8xL.js";function P(e){return s`<resizable-divider
    ${l(e.onElement??(()=>{}))}
    class=${e.className??f}
    .splitRatio=${e.splitRatio}
    .minRatio=${e.minRatio??.4}
    .maxRatio=${e.maxRatio??.7}
    .measureRatio=${e.measureRatio}
    .measureSize=${e.measureSize}
    .label=${e.label}
    .orientation=${e.orientation}
    @dragover=${e.onDragover??(()=>{})}
    @drop=${e.onDrop??(()=>{})}
    @resize=${e.onResize}
  ></resizable-divider>`}function F(){return(F=e((()=>{o(),c()})))()}function I(e,t){let n=e.find(e=>e.slot===t);if(!n)throw Error(`Missing sidebar panel definition for ${t}`);return n}function L(e,t=!1){return s`
    <span slot=${t?`icon`:f} class="side-panel-type-option__icon" aria-hidden="true"
      >${e.icon}</span
    >
    <span class="side-panel-type-option__label">${e.label}</span>
    ${e.shortcut?s`<kbd slot=${t?`details`:f} class="side-panel-type-option__shortcut"
            >${e.shortcut}</kbd
          >`:f}
  `}function R(e){return e.columns[0]?.panels??[]}var z;function B(){return(B=e((()=>{o(),i(),d(),_(),S(),N(),b(),y(),m(),r(),C(),E(),F(),z=class extends n{constructor(...e){super(...e),this.layout={columns:[]},this.panelDefinitions=w(),this.panelTemplates={},this.panelActions={},this.availableSlots=[],this.callbacks=null,this.narrow=!1,this.availableWidth=0,this.previousGeometry=``,this.contentMounted=!1}deliverPanelEvent(e,t){let n=this.parentElement?.querySelector(`[data-panel-slot="${e}"]`)?.firstElementChild;return!(n instanceof HTMLElement)||typeof n.handleToggleRequest!=`function`?!1:(n.handleToggleRequest(t),!0)}panelTypes(){return this.availableSlots.map(e=>I(this.panelDefinitions,e))}renderTypeMenu(){let e=new Set(R(this.layout).map(e=>e.slot));return s`
      <wa-dropdown
        class="side-panel-type-menu"
        placement="bottom-start"
        @wa-select=${t=>{let n=t.detail.item.value;n&&(this.callbacks?.openSlot(n),n===`browser`&&e.has(n)&&this.deliverPanelEvent(n,new CustomEvent(v,{detail:{open:!0,newTab:!0}})))}}
      >
        <button
          slot="trigger"
          class="rail-header__action side-panel-type-menu__trigger"
          type="button"
          aria-label=${g(`chat.sidePanel.addTab`)}
          title=${g(`chat.sidePanel.addTab`)}
        >
          ${h.plus}
        </button>
        ${this.panelTypes().filter(t=>t.slot===`browser`||!e.has(t.slot)).map(e=>s`
              <wa-dropdown-item
                class="side-panel-type-menu__item session-menu__item"
                .value=${e.slot}
              >
                ${L(e,!0)}
              </wa-dropdown-item>
            `)}
      </wa-dropdown>
    `}renderHeader(e){let t=O(this.layout).map(e=>{let t=I(this.panelDefinitions,e.slot);return{id:e.id,domId:`side-panel-tab-${e.id}`,label:t.label,labelTooltip:t.label,icon:t.icon,closeLabel:g(`chat.sidebarColumns.close`,{panel:t.label})}}),n=A(this.layout),r=e.panels.find(e=>e.id===n?.id),i=(r?this.panelActions[r.slot]:null)??null;return s`
      <header class="rail-header side-panel__header" data-region-header="side">
        <div class="side-panel__header-tabs">
          ${M({tabs:t,activeId:n?.id??null,ariaControls:`chat-side-panel-content`,onSelect:e=>this.callbacks?.activatePanel(e),onClose:t=>{let n=e.panels.find(e=>e.id===t);n&&this.callbacks?.closeSlot(n.slot)},onNew:()=>void 0,newLabel:g(`chat.sidePanel.addTab`),newControl:f,separateTabs:!0,onReorder:(e,t,n)=>this.callbacks?.reorderPanel(e,t,n)})}
          ${this.renderTypeMenu()}
        </div>
        ${this.renderHeaderActions(i)}
      </header>
    `}renderHeaderActions(e){return s`<div class="rail-header__actions side-panel__actions">
      ${e?s`<span class="side-panel__action-group side-panel__action-group--content">
              ${e}
            </span>`:f}
      <span class="side-panel__action-group side-panel__action-group--close">
        <openclaw-tooltip .content=${g(`common.close`)}>
          <button
            class="rail-header__action side-panel__minimize"
            type="button"
            aria-label=${g(`common.close`)}
            @click=${()=>this.callbacks?.setOpen(!1)}
          >
            ${h.x}
          </button>
        </openclaw-tooltip>
      </span>
    </div>`}renderEmpty(e){if(e){let t=I(this.panelDefinitions,e.slot);return s`<div class="side-panel-empty side-panel-empty--type">
        ${x({icon:t.icon,heading:t.label,description:t.empty.description,action:t.empty.action})}
      </div>`}return s`<div class="side-panel-empty side-panel-empty--selector">
      <div class="side-panel-empty__types" role="list">
        ${this.panelTypes().map(e=>s`<button
            class="side-panel-empty__type"
            type="button"
            role="listitem"
            @click=${()=>this.callbacks?.openSlot(e.slot)}
          >
            ${L(e)}
          </button>`)}
      </div>
    </div>`}renderBody(e){return s`<div id="chat-side-panel-content" class="side-panel__body">
      ${u(this.panelDefinitions.flatMap(t=>(e?.panels??[]).filter(e=>e.slot===t.slot&&e.slot!==`conversation`)),e=>e.id,e=>s`<div
          class="side-panel__panel"
          data-panel-slot=${e.slot}
          data-region=${e.id===this.layout.mainPanelId?`main`:`side`}
          ?hidden=${!T(this.layout,e.slot)}
        >
          ${this.panelTemplates[e.slot]??this.renderEmpty(e)}
        </div>`)}
      ${O(this.layout).length===0?s`<div class="side-panel__empty-body" data-region="side">${this.renderEmpty()}</div>`:f}
    </div>`}renderDivider(e){let t=j(this.layout),n=()=>{let n=this.parentElement,r=n?.querySelector(`[data-region="main"]`),i=n?.querySelector(`[data-region="side"]:not([hidden])`),a=t===`bottom`?r?.getBoundingClientRect().height??0:r?.getBoundingClientRect().width??0,o=t===`bottom`?i?.getBoundingClientRect().height??e.height:i?.getBoundingClientRect().width??e.width;return{primarySize:a,panelSize:o,total:a+o}};return P({className:`sidebar-column__divider`,label:g(`chat.sidePanel.resize`),orientation:t===`bottom`?`horizontal`:`vertical`,splitRatio:.5,minRatio:.05,maxRatio:.95,measureRatio:()=>{let{primarySize:e,panelSize:r,total:i}=n();return i>0?(t===`left`?r:e)/i:.5},measureSize:()=>n().total,onResize:r=>{let i=this.parentElement?.getBoundingClientRect(),a=t===`bottom`?i?.height??0:this.availableWidth>0?this.availableWidth:i?.width??0,o=(n().total||a)*(t===`left`?r.detail.splitRatio:1-r.detail.splitRatio),s=t===`bottom`?220:260,c=Math.max(s,a*.6);this.callbacks?.resizePanel(e.id,Math.max(s,Math.min(o,c)))}})}renderPanel(){let e=this.layout.columns[0];return e?(this.contentMounted||=this.layout.open===!0&&!this.layout.expanded||(k(this.layout)?.slot??`conversation`)!==`conversation`,s`${!this.narrow&&this.layout.open&&!this.layout.expanded&&e?this.renderDivider(e):f}
      <section class="side-panel" aria-label=${g(`chat.sidePanel.label`)}>
        ${e&&O(this.layout).length>0?this.renderHeader(e):f}
        ${this.contentMounted?this.renderBody(e):f}
      </section>`):(this.contentMounted=!1,f)}updated(){let e=this.parentElement?.querySelector(`.sidebar-region__right-runtime`);if(e){a(this.renderPanel(),e);let t=e.querySelector(`.side-panel`),n=Array.from(this.parentElement.querySelectorAll(`.sidebar-region__primary, .side-panel__panel`),e=>`${e.dataset.panelSlot??`conversation`}:${e.getBoundingClientRect().width}`).join(`:`);t?.dispatchEvent(new CustomEvent(D,{bubbles:!0,detail:{widthChanged:n!==this.previousGeometry}})),this.previousGeometry=n}}render(){return f}},t([p({attribute:!1})],z.prototype,`layout`,void 0),t([p({attribute:!1})],z.prototype,`panelDefinitions`,void 0),t([p({attribute:!1})],z.prototype,`panelTemplates`,void 0),t([p({attribute:!1})],z.prototype,`panelActions`,void 0),t([p({attribute:!1})],z.prototype,`availableSlots`,void 0),t([p({attribute:!1})],z.prototype,`callbacks`,void 0),t([p({type:Boolean})],z.prototype,`narrow`,void 0),t([p({type:Number})],z.prototype,`availableWidth`,void 0),customElements.get(`openclaw-chat-sidebar-region`)||customElements.define(`openclaw-chat-sidebar-region`,z)})))()}B();
//# sourceMappingURL=chat-sidebar-region.runtime-DGes8Fcj.js.map