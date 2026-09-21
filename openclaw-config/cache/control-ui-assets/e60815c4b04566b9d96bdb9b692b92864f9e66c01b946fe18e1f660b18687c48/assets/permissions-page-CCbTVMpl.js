import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,L as n,R as r}from"./control-ui-foundation-DMb6IeIq.js";import{Gc as i,Gn as a,Kn as o,qc as s}from"./control-ui-core-DzidtL-P.js";import{K as c,X as l,q as u}from"./lit-runtime-vxhGQLC6.js";import{Tn as d,h as f,m as p,zn as m}from"./control-ui-core-CaKBexnk.js";import{Bt as h,Gt as g}from"./control-ui-core-uEI6aN5p.js";import{Et as _,Ft as v,Lt as y,Nt as b,Ot as x,Pt as S,Rt as C,Vt as w,wt as T,zt as E}from"./control-ui-boot-shared-Cyt1Zyts.js";import{n as D,t as O}from"./en-settings-D6ws8ujh.js";import{n as k,t as A}from"./settings-workspace-IBRfeTG9.js";var j;function M(){return(M=e((()=>{r(),c(),d(),f(),T(),A(),h(),O(),s(),o(),D(),j=class extends i{constructor(...e){super(...e),this.subscriptions=new a(this).watch(()=>this.context?.nativeDeviceSettings,(e,t)=>e.subscribe(t))}disconnectedCallback(){this.subscriptions.clear(),super.disconnectedCallback()}renderPermissions(e){let t=this.context.nativeDeviceSettings,{permissions:n}=e,r=n.location.preciseEditable??e.device.platform===`macos`;return l`
      ${y({title:g(`configPage.deviceSettings.systemAccess`)},n.entries.map(({id:e,status:n})=>v({title:g(`configPage.deviceSettings.permissions.${e}.title`),description:g(`configPage.deviceSettings.permissions.${e}.hint`),stackedOnNarrow:!0,control:l`
              ${E({kind:n===`granted`?`ok`:n===`denied`?`danger`:`muted`,label:g(`configPage.deviceSettings.permissionStatuses.${n}`)})}
              ${n===`notDetermined`?l`<button type="button" class="btn" @click=${()=>t?.requestPermission(e)}>${g(`configPage.deviceSettings.grant`)}</button>`:n===`denied`?l`<button type="button" class="btn" @click=${()=>t?.openSystemSettings(e)}>${g(`configPage.deviceSettings.openSystemSettings`)}</button>`:u}
            `})))}
      ${y({title:g(`configPage.deviceSettings.location`)},l`
          ${v({title:g(`configPage.deviceSettings.locationAccess`),description:g(`configPage.deviceSettings.locationHint`),stackedOnNarrow:!0,control:C({value:n.location.mode,ariaLabel:g(`configPage.deviceSettings.locationAccess`),options:[`off`,`whileUsing`,`always`].map(e=>({value:e,label:g(`configPage.deviceSettings.locationModes.${e}`)})),onChange:e=>t?.set(`permissions.location.mode`,e)})})}
          ${r?w({title:g(`configPage.deviceSettings.preciseLocation`),description:g(`configPage.deviceSettings.preciseLocationHint`),checked:n.location.precise,disabled:n.location.mode===`off`,onChange:e=>t?.set(`permissions.location.precise`,e)}):v({title:g(`configPage.deviceSettings.preciseLocation`),description:g(`configPage.deviceSettings.preciseLocationReadOnlyHint`),stackedOnNarrow:!0,control:l`
                    ${E({kind:n.location.precise?`ok`:`muted`,label:g(n.location.precise?`configPage.deviceSettings.preciseLocationStatuses.enabled`:`configPage.deviceSettings.preciseLocationStatuses.disabled`)})}
                    <button
                      type="button"
                      class="btn"
                      @click=${()=>t?.openSystemSettings(`location`)}
                    >
                      ${g(`configPage.deviceSettings.openSettings`)}
                    </button>
                  `})}
        `)}
      ${e.capabilities?.activeComputerPresenceEnabled===void 0?u:y({title:g(`configPage.deviceSettings.privacy`)},w({title:g(`configPage.deviceSettings.activePresence`),description:g(`configPage.deviceSettings.activePresenceHint`),checked:e.capabilities.activeComputerPresenceEnabled,onChange:e=>t?.set(`capabilities.activeComputerPresenceEnabled`,e)}))}
    `}render(){let e=this.context?.nativeDeviceSettings,t=e?.snapshot,n=e?t?this.renderPermissions(t):x(g(`configPage.deviceSettings.loading`)):x(g(`configPage.deviceSettings.appOnly`));return l`
      ${S({title:m(`device-permissions`),subtitle:l`${g(t?.device.platform===`ios`?`configPage.deviceSettings.permissionsIntroIos`:`configPage.deviceSettings.permissionsIntro`)}
        ${_(t?.device.platform===`ios`?`https://docs.openclaw.ai/platforms/ios`:`https://docs.openclaw.ai/platforms/macos`)}`})}
      ${k(b(n))}
    `}},t([n({context:p,subscribe:!0})],j.prototype,`context`,void 0),customElements.get(`openclaw-device-permissions-page`)||customElements.define(`openclaw-device-permissions-page`,j)})))()}M();
//# sourceMappingURL=permissions-page-CCbTVMpl.js.map