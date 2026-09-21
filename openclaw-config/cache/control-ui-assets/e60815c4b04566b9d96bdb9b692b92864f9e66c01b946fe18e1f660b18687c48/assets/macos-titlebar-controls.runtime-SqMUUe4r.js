import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t}from"./control-ui-foundation-DMb6IeIq.js";import{Wc as n,qc as r}from"./control-ui-core-DzidtL-P.js";import{$ as i,K as a,X as o,q as s,st as c}from"./lit-runtime-vxhGQLC6.js";import{Cr as l,xr as u}from"./control-ui-core-CaKBexnk.js";import{Bt as d,Ft as f,Gt as p,It as m,Nt as h}from"./control-ui-core-uEI6aN5p.js";var g;function _(){return(_=e((()=>{a(),i(),l(),d(),r(),m(),h(),g=class extends n{constructor(...e){super(...e),this.navCollapsed=!1,this.historyOnly=!1,this.canGoBack=!1,this.canGoForward=!1}render(){let e=this.navCollapsed?p(`nav.expand`):p(`nav.collapse`);return o`
      <nav class="macos-titlebar-controls" @mousedown=${u}>
        ${this.historyOnly?s:this.renderButton({label:e,icon:this.navCollapsed?f.panelLeftOpen:f.panelLeftClose,ariaExpanded:!this.navCollapsed,onClick:this.onToggleSidebar,className:`macos-titlebar-controls__sidebar-toggle`})}
        ${this.renderButton({label:p(`nav.back`),icon:f.chevronLeft,disabled:!this.canGoBack,onClick:()=>globalThis.history.back(),className:`macos-titlebar-controls__back`})}
        ${this.renderButton({label:p(`nav.forward`),icon:f.chevronRight,disabled:!this.canGoForward,onClick:()=>globalThis.history.forward(),className:`macos-titlebar-controls__forward`})}
        ${this.historyOnly?s:o`
                ${this.renderButton({label:p(`chat.openCommandPalette`),tooltip:p(`chat.commandPaletteTitle`),icon:f.search,onClick:this.onOpenPalette,className:`macos-titlebar-controls__search`})}
                ${this.navCollapsed?this.renderButton({label:p(`chat.runControls.newSession`),tooltip:this.newSessionDisabledReason,icon:f.plus,disabled:!!this.newSessionDisabledReason,onClick:this.onOpenNewSession,className:`macos-titlebar-controls__new-session`}):s}
              `}
      </nav>
    `}renderButton(e){return o`
      <openclaw-tooltip .content=${e.tooltip??e.label}>
        <button
          type="button"
          class="topbar-icon-btn macos-titlebar-controls__button ${e.className}"
          aria-label=${e.label}
          aria-expanded=${e.ariaExpanded===void 0?s:String(e.ariaExpanded)}
          ?disabled=${e.disabled||!e.onClick}
          @click=${e.onClick}
        >
          ${e.icon}
        </button>
      </openclaw-tooltip>
    `}},t([c({attribute:!1})],g.prototype,`navCollapsed`,void 0),t([c({attribute:!1})],g.prototype,`historyOnly`,void 0),t([c({attribute:!1})],g.prototype,`canGoBack`,void 0),t([c({attribute:!1})],g.prototype,`canGoForward`,void 0),t([c({attribute:!1})],g.prototype,`newSessionDisabledReason`,void 0),t([c({attribute:!1})],g.prototype,`onToggleSidebar`,void 0),t([c({attribute:!1})],g.prototype,`onOpenPalette`,void 0),t([c({attribute:!1})],g.prototype,`onOpenNewSession`,void 0),customElements.get(`openclaw-macos-titlebar-controls`)||customElements.define(`openclaw-macos-titlebar-controls`,g)})))()}_();
//# sourceMappingURL=macos-titlebar-controls.runtime-SqMUUe4r.js.map