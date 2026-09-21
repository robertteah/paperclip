import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,L as n,R as r}from"./control-ui-foundation-DMb6IeIq.js";import{Gc as i,Gn as a,Kn as o,qc as s}from"./control-ui-core-DzidtL-P.js";import{$ as c,K as l,X as u,at as d,l as f,q as p,s as m}from"./lit-runtime-vxhGQLC6.js";import{Tn as h,h as g,m as _,wn as v}from"./control-ui-core-CaKBexnk.js";import{Bt as y,Gt as b}from"./control-ui-core-uEI6aN5p.js";import{Et as x,Ft as S,Ht as C,Lt as w,Nt as T,Ot as E,Pt as D,Vt as O,wt as k,zt as A}from"./control-ui-boot-shared-Cyt1Zyts.js";import{n as j,t as M}from"./en-settings-D6ws8ujh.js";import{n as N,t as P}from"./settings-workspace-IBRfeTG9.js";function F(e){let t=L.get(e);if(t)return t;let n={domains:null,targetProfile:null};return L.set(e,n),n}function I(e,t,n){let r=L.get(e);!r||r[t]!==n||(r[t]=null,r.domains===null&&r.targetProfile===null&&L.delete(e))}var L,R;function z(){return(z=e((()=>{r(),l(),c(),m(),h(),g(),k(),P(),y(),M(),s(),o(),j(),L=new WeakMap,R=class extends i{constructor(...e){super(...e),this.newDomain=``,this.extensionSetupRunning=!1,this.extensionSetupResult=null,this.extensionSetupFailed=!1,this.targetProfileTimer=null,this.subscriptions=new a(this).watch(()=>this.context?.nativeDeviceSettings,(e,t)=>e.subscribe(t),e=>{this.targetProfileTimer&&this.targetProfileTimer.capability!==e&&this.flushTargetProfile()})}disconnectedCallback(){this.flushTargetProfile(),this.subscriptions.clear(),super.disconnectedCallback()}toggle(e,t,n,r,i=!1){return t===void 0?p:O({title:b(`configPage.deviceSettings.${n}`),description:r,checked:t,disabled:i,onChange:t=>this.context.nativeDeviceSettings?.set(e,t)})}editTargetProfile(e){let t=this.context.nativeDeviceSettings;t&&(this.targetProfileTimer!==null&&clearTimeout(this.targetProfileTimer.timer),F(t).targetProfile={value:e,sent:!1},this.targetProfileTimer={capability:t,timer:setTimeout(()=>this.flushTargetProfile(),400)},this.requestUpdate())}flushTargetProfile(){let e=this.targetProfileTimer;if(!e)return;clearTimeout(e.timer),this.targetProfileTimer=null;let t=L.get(e.capability)?.targetProfile;t&&!t.sent&&(t.sent=!0,e.capability.set(`browser.cookieSync.targetProfile`,t.value,()=>{I(e.capability,`targetProfile`,t)}))}updateDomains(e){let t=this.context.nativeDeviceSettings;if(!t)return;let n=L.get(t)?.domains??t.snapshot?.browser?.cookieSync.domains;if(!n)return;let r=[...new Set(e(n).map(e=>e.trim().toLowerCase()).filter(Boolean))];F(t).domains=r,this.requestUpdate(),t.set(`browser.cookieSync.domains`,r,()=>{I(t,`domains`,r)})}renderBrowser(e){let t=this.context.nativeDeviceSettings,n=e.cookieSync,r=t?L.get(t):void 0,i=r?.domains??n.domains,a=()=>{this.updateDomains(e=>[...e,this.newDomain]),this.newDomain=``};return u`
      ${w({title:b(`configPage.deviceSettings.chromeExtension`)},S({title:b(`configPage.deviceSettings.chromeExtensionSetup`),description:b(`configPage.deviceSettings.chromeExtensionHint`),stacked:!0,control:u`
            <div class="device-extension-setup">
              <div class="device-extension-setup__actions">
                <button
                  type="button"
                  class="btn"
                  ?disabled=${this.extensionSetupRunning}
                  @click=${()=>this.installChromeExtension()}
                >
                  ${b(this.extensionSetupRunning?`configPage.deviceSettings.chromeExtensionPreparing`:`configPage.deviceSettings.chromeExtensionSetup`)}
                </button>
                <a
                  href="https://chromewebstore.google.com/detail/openclaw/kcdjddhmeafeomebliikmbpblkmkfoig"
                  target="_blank"
                  rel="noopener noreferrer"
                  >${b(`appsPage.ctaChromeWebStore`)}</a
                >
                ${x(`https://docs.openclaw.ai/tools/chrome-extension`)}
              </div>
              <p role="status">
                ${this.extensionSetupFailed?b(`configPage.deviceSettings.chromeExtensionFailed`):this.extensionSetupResult?b(this.extensionSetupResult.nativeHostRegistered?this.extensionSetupResult.discoveredProfiles>0?`configPage.deviceSettings.chromeExtensionInstalled`:this.extensionSetupResult.installRequested?`configPage.deviceSettings.chromeExtensionPending`:`configPage.deviceSettings.chromeExtensionStoreRequired`:`configPage.deviceSettings.chromeExtensionFailed`):p}
              </p>
            </div>
          `}))}
      ${e.importAvailable||!n.available?w({title:b(`configPage.deviceSettings.browser`)},u`
                ${e.importAvailable?S({title:b(`configPage.deviceSettings.browserImport`),description:b(`configPage.deviceSettings.browserImportHint`),control:u`<button
                          type="button"
                          class="btn"
                          @click=${()=>t?.openPanel(`browser-import`)}
                        >
                          ${b(`configPage.deviceSettings.importBrowserLogins`)}
                        </button>`}):p}
                ${n.available?p:S({title:b(`configPage.deviceSettings.cookieSync`),description:b(`configPage.deviceSettings.cookieSyncUnavailable`)})}
              `):p}
      ${n.available?w({title:b(e.importAvailable?`configPage.deviceSettings.cookieSync`:`configPage.deviceSettings.browser`),description:e.importAvailable?void 0:b(`configPage.deviceSettings.cookieSync`)},u`
                ${this.toggle(`browser.cookieSync.enabled`,n.enabled,`cookieSyncEnabled`,b(`configPage.deviceSettings.cookieSyncHint`))}
                ${S({title:b(`configPage.deviceSettings.domains`),description:b(`configPage.deviceSettings.domainsHint`),stacked:!0,control:u`<div class="device-domains">
                    ${i.map(e=>u`<div class="device-domain-entry">
                        ${C(e)}
                        <button
                          type="button"
                          class="btn small"
                          aria-label=${b(`configPage.deviceSettings.removeDomain`,{domain:e})}
                          @click=${()=>this.updateDomains(t=>t.filter(t=>t!==e))}
                        >
                          ${b(`common.remove`)}
                        </button>
                      </div>`)}
                    <form
                      class="device-domain-entry"
                      @submit=${e=>{e.preventDefault(),a()}}
                    >
                      <input
                        type="text"
                        class="settings-input"
                        aria-label=${b(`configPage.deviceSettings.addDomain`)}
                        .value=${f(this.newDomain)}
                        @input=${e=>{this.newDomain=e.currentTarget.value}}
                      />
                      <button type="submit" class="btn" ?disabled=${!this.newDomain.trim()}>
                        ${b(`configPage.deviceSettings.addDomain`)}
                      </button>
                    </form>
                  </div>`})}
                ${S({title:b(`configPage.deviceSettings.targetProfile`),description:b(`configPage.deviceSettings.targetProfileHint`),control:u`<input
                    type="text"
                    class="settings-input"
                    aria-label=${b(`configPage.deviceSettings.targetProfile`)}
                    .value=${f(r?.targetProfile?.value??n.targetProfile)}
                    @input=${e=>{this.editTargetProfile(e.currentTarget.value)}}
                    @change=${()=>this.flushTargetProfile()}
                  />`})}
                ${S({title:b(`configPage.deviceSettings.syncStatus`),description:n.detail??void 0,control:A({kind:n.state===`error`?`danger`:n.state===`running`?`accent`:`muted`,label:b(`configPage.deviceSettings.syncStates.${n.state}`)})})}
              `):p}
    `}async installChromeExtension(){let e=this.context.nativeDeviceSettings;if(!(!e||this.extensionSetupRunning)){this.extensionSetupRunning=!0,this.extensionSetupFailed=!1,this.extensionSetupResult=null;try{let t=await e.installChromeExtension();this.isConnected&&this.context.nativeDeviceSettings===e&&(this.extensionSetupResult=t)}catch{this.isConnected&&this.context.nativeDeviceSettings===e&&(this.extensionSetupFailed=!0)}finally{this.extensionSetupRunning=!1}}}renderSettings(e){let{app:t,capabilities:n}=e,r=this.context.nativeDeviceSettings;return u`
      ${t?w({title:b(`configPage.deviceSettings.app`)},u`
                ${t.appearance===void 0?p:S({title:b(`configPage.deviceSettings.appearance`),control:u`<select
                          class="settings-select"
                          aria-label=${b(`configPage.deviceSettings.appearance`)}
                          .value=${f(t.appearance)}
                          @change=${e=>{let t=e.currentTarget.value;r?.set(`app.appearance`,t)}}
                        >
                          ${[`system`,`light`,`dark`].map(e=>u`<option value=${e} ?selected=${e===t.appearance}>${b(`configPage.deviceSettings.appearanceModes.${e}`)}</option>`)}
                        </select>`})}
                ${this.toggle(`app.notificationsEnabled`,t.notificationsEnabled,`notificationsEnabled`,b(`configPage.deviceSettings.notificationsEnabledHint`))}
                ${this.toggle(`app.showDockIcon`,t.showDockIcon,`showDockIcon`,b(`configPage.deviceSettings.showDockIconHint`))}
                ${t.iconStyle?S({title:b(`configPage.deviceSettings.iconStyle`),description:b(`configPage.deviceSettings.iconStyleHint`),control:u`<select
                          class="settings-select"
                          aria-label=${b(`configPage.deviceSettings.iconStyle`)}
                          .value=${f(t.iconStyle.selectedId)}
                          ?disabled=${t.iconStyle.available.length===0}
                          @change=${e=>{let t=e.currentTarget.value;r?.set(`app.iconStyle`,t)}}
                        >
                          ${t.iconStyle.available.map(e=>u`<option
                              value=${e.id}
                              ?selected=${e.id===t.iconStyle?.selectedId}
                            >
                              ${e.name}
                            </option>`)}
                        </select>`}):p}
                ${this.toggle(`app.iconAnimationsEnabled`,t.iconAnimationsEnabled,`iconAnimations`,b(`configPage.deviceSettings.iconAnimationsHint`))}
                ${this.toggle(`app.launchAtLogin`,t.launchAtLogin,`launchAtLogin`,t.launchAtLoginAvailable===!1?b(`configPage.deviceSettings.launchAtLoginUnavailable`):void 0,t.launchAtLoginAvailable===!1)}
                ${this.toggle(`app.quickChatEnabled`,t.quickChatEnabled,`quickChat`,b(`configPage.deviceSettings.quickChatHint`))}
                ${t.quickChatShortcut===void 0?p:S({title:b(`configPage.deviceSettings.quickChatShortcut`),control:u`
                          ${C(t.quickChatShortcut??b(`configPage.deviceSettings.notSet`))}
                          <button
                            type="button"
                            class="btn"
                            @click=${()=>r?.openPanel(`quick-chat-shortcut`)}
                          >
                            ${b(`configPage.deviceSettings.changeShortcut`)}
                          </button>
                        `})}
              `):p}
      ${n?w({title:b(`configPage.deviceSettings.capabilities`)},u`
                ${this.toggle(`capabilities.canvasEnabled`,n.canvasEnabled,`canvas`,b(`configPage.deviceSettings.canvasHint`))}
                ${this.toggle(`capabilities.cameraEnabled`,n.cameraEnabled,`camera`,b(`configPage.deviceSettings.cameraHint`))}
                ${this.toggle(`capabilities.keepAwakeEnabled`,n.keepAwakeEnabled,`keepAwake`,b(`configPage.deviceSettings.keepAwakeHint`))}
                ${n.healthSummaryAvailable?this.toggle(`capabilities.healthSummaryEnabled`,n.healthSummaryEnabled,`healthSummary`,b(`configPage.deviceSettings.healthSummaryHint`)):p}
                ${this.toggle(`capabilities.computerControlEnabled`,n.computerControlEnabled,`computerControl`,b(`configPage.deviceSettings.computerControlHint`))}
                ${n.computerControlEnabled&&n.computerControlProvider!==void 0?S({title:b(`configPage.deviceSettings.computerControlProvider`),control:u`<select
                          class="settings-select"
                          aria-label=${b(`configPage.deviceSettings.computerControlProvider`)}
                          .value=${n.computerControlProvider}
                          @change=${e=>{let t=e.currentTarget.value;r?.set(`capabilities.computerControlProvider`,t)}}
                        >
                          <option
                            value="peekaboo"
                            ?selected=${n.computerControlProvider===`peekaboo`}
                          >
                            ${b(`configPage.deviceSettings.peekaboo`)}
                          </option>
                          <option
                            value="cua"
                            ?selected=${n.computerControlProvider===`cua`}
                            ?disabled=${!n.cuaDriverBundled}
                          >
                            ${b(n.cuaDriverBundled?`configPage.deviceSettings.cua`:`configPage.deviceSettings.cuaUnavailable`)}
                          </option>
                        </select>`}):p}
                ${this.toggle(`capabilities.peekabooBridgeEnabled`,n.peekabooBridgeEnabled,`peekabooBridge`,b(`configPage.deviceSettings.peekabooBridgeHint`),!n.computerControlEnabled)}
              `):p}
      ${e.browser?this.renderBrowser(e.browser):p}
      ${t?.debugPaneEnabled===void 0?p:w({title:b(`configPage.deviceSettings.developer`)},u`
                ${this.toggle(`app.debugPaneEnabled`,t.debugPaneEnabled,`debugTools`)}
                ${t.debugPaneEnabled?S({title:b(`configPage.deviceSettings.debugWindow`),control:u`<button type="button" class="btn" @click=${()=>r?.openPanel(`debug`)}>${b(`configPage.deviceSettings.openDebug`)}</button>`}):p}
              `)}
      ${e.device.platform===`ios`?w({title:b(`configPage.deviceSettings.device`)},u`${[`diagnostics`,`licenses`,`about`,`watch`].map(e=>S({title:b(`configPage.deviceSettings.panels.${e}`),control:u`<button
                    type="button"
                    class="btn"
                    @click=${()=>r?.openPanel(e)}
                  >
                    ${b(`configPage.deviceSettings.openPanel`)}
                  </button>`}))}`):p}
    `}render(){let e=this.context?.nativeDeviceSettings,t=e?.snapshot,n=e?t?this.renderSettings(t):E(b(`configPage.deviceSettings.loading`)):E(b(`configPage.deviceSettings.appOnly`));return u`
      ${D({title:b(v(t)),subtitle:u`${b(t?.device.platform===`ios`?`configPage.deviceSettings.introIos`:`configPage.deviceSettings.intro`)}
        ${x(t?.device.platform===`ios`?`https://docs.openclaw.ai/platforms/ios`:`https://docs.openclaw.ai/platforms/macos`)}`})}
      ${N(T(n))}
    `}},t([n({context:_,subscribe:!0})],R.prototype,`context`,void 0),t([d()],R.prototype,`newDomain`,void 0),t([d()],R.prototype,`extensionSetupRunning`,void 0),t([d()],R.prototype,`extensionSetupResult`,void 0),t([d()],R.prototype,`extensionSetupFailed`,void 0),customElements.get(`openclaw-device-page`)||customElements.define(`openclaw-device-page`,R)})))()}z();
//# sourceMappingURL=device-page-CtXXnc3f.js.map