import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t}from"./control-ui-foundation-DMb6IeIq.js";import{Gc as n,qc as r}from"./control-ui-core-DzidtL-P.js";import{$ as i,K as a,X as o,st as s}from"./lit-runtime-vxhGQLC6.js";import{Bt as c,Ft as l,Gt as u,It as d}from"./control-ui-core-uEI6aN5p.js";import{Fa as f,Ia as p,Ma as m,Na as h,Pa as g,co as _}from"./control-ui-boot-shared-Cyt1Zyts.js";var v;function y(){return(y=e((()=>{a(),i(),c(),r(),p(),d(),h(),_(),v=class extends n{constructor(...e){super(...e),this.x=0,this.y=0,this.trigger=null,this.onAction=()=>{},this.onClose=()=>{},this.menuLifecycle=new f(this,{getTrigger:()=>this.trigger,onClose:()=>this.onClose(),onKeydown:e=>m(this,e)})}runAction(e){this.onClose(),this.onAction(e)}render(){let e=Math.max(8,Math.min(this.x,window.innerWidth-264-8)),t=Math.max(8,Math.min(this.y,window.innerHeight-136-8));return o`
      <wa-dropdown
        class="session-menu native-link-menu"
        .open=${!0}
        placement="bottom-start"
        .distance=${0}
        aria-label=${u(`nativeLinkMenu.label`)}
        @wa-select=${e=>{e.preventDefault();let t=e.detail.item.value;t&&(this.trigger?.focus(),this.runAction(t))}}
        @wa-after-hide=${()=>{this.onClose()}}
      >
        <button
          slot="trigger"
          type="button"
          tabindex="-1"
          aria-hidden="true"
          aria-label=${u(`nativeLinkMenu.label`)}
          style="position: fixed; left: ${e}px; top: ${t}px; width: 1px; height: 1px; opacity: 0; pointer-events: none;"
        ></button>
        <wa-dropdown-item
          class="session-menu__item"
          value="inline"
          data-shortcut="s"
          aria-keyshortcuts="S"
        >
          <span slot="icon" class="session-menu__icon" aria-hidden="true"
            >${l.panelRightOpen}</span
          >
          <span class="session-menu__text">${u(`nativeLinkMenu.openInline`)}</span>
          ${g(`s`)}
        </wa-dropdown-item>
        <wa-dropdown-item
          class="session-menu__item"
          value="external"
          data-new-tab-action
          data-shortcut="b"
          aria-keyshortcuts="B"
        >
          <span slot="icon" class="session-menu__icon" aria-hidden="true"
            >${l.externalLink}</span
          >
          <span class="session-menu__text">${u(`nativeLinkMenu.openExternal`)}</span>
          ${g(`b`)}
        </wa-dropdown-item>
        <div class="session-menu__separator" role="separator"></div>
        <wa-dropdown-item
          class="session-menu__item"
          value="copy"
          data-shortcut="c"
          aria-keyshortcuts="C"
        >
          <span slot="icon" class="session-menu__icon" aria-hidden="true">${l.copy}</span>
          <span class="session-menu__text">${u(`nativeLinkMenu.copy`)}</span>
          ${g(`c`)}
        </wa-dropdown-item>
      </wa-dropdown>
    `}},t([s({attribute:!1})],v.prototype,`x`,void 0),t([s({attribute:!1})],v.prototype,`y`,void 0),t([s({attribute:!1})],v.prototype,`trigger`,void 0),t([s({attribute:!1})],v.prototype,`onAction`,void 0),t([s({attribute:!1})],v.prototype,`onClose`,void 0),customElements.get(`openclaw-native-link-menu`)||customElements.define(`openclaw-native-link-menu`,v)})))()}y();export{v as NativeLinkMenu};
//# sourceMappingURL=native-link-menu.runtime-DRT_Mz3T.js.map