const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./board-view-D1kTWDs3.js","./control-ui-boot-shared-Cyt1Zyts.js","./rolldown-runtime-DkW27tQK.js","./control-ui-foundation-DMb6IeIq.js","./control-ui-core-DzidtL-P.js","./lit-runtime-vxhGQLC6.js","./control-ui-core-CaKBexnk.js","./control-ui-core-uEI6aN5p.js","./gateway-runtime-DP4whqrA.js","./control-ui-core-BRgpioGt.css","./control-ui-boot-shared-DW2inEkr.js","./control-ui-boot-shared-nBxCfWV5.js","./control-ui-boot-shared-gfE6fZcA.js","./markdown-runtime-Bn6OdBVq.js","./control-ui-boot-shared-BiKnED0X.js","./control-ui-boot-shared-D2DaCK2F.js","./control-ui-boot-shared-mS3IgGsF.js","./control-ui-boot-shared-CH-OC11d.js","./control-ui-boot-shared-CibIhXHx.css","./control-ui-boot-chat-pu3gR1ly.js","./control-ui-boot-chat-B1e-zt03.js","./config-runtime-Cr2H22l0.js","./board-view-cHWpIsjr.js","./control-ui-boot-chat-BsnrxotZ.js","./control-ui-disabled-lj4W_mAq.js","./near-viewport-observer-BfnpDHlZ.js","./board-widget-cell-render-Citc6lM7.js","./widget-sandbox-host-Bg0ZbzsA.js","./board-view-Dy3yHmZ7.css"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,bi as n,xi as r}from"./control-ui-foundation-DMb6IeIq.js";import{Gc as i,qc as a}from"./control-ui-core-DzidtL-P.js";import{$ as o,K as s,X as c,at as l,q as u,st as d}from"./lit-runtime-vxhGQLC6.js";import{Ht as f,Ut as p}from"./control-ui-core-CaKBexnk.js";import{Bt as m,Ft as h,Gt as g,It as _}from"./control-ui-core-uEI6aN5p.js";import{$t as v,Qt as y,Zt as b,tn as x}from"./control-ui-boot-chat-pu3gR1ly.js";function S(){return f(`openclaw-board-view`,()=>n(()=>import(`./board-view-D1kTWDs3.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]),import.meta.url))}var C;function w(){return(w=e((()=>{s(),o(),p(),_(),m(),x(),a(),r(),C=class extends i{constructor(...e){super(...e),this.session=null,this.client=null,this.connected=!1,this.canMutate=!1,this.canGrant=!1,this.presented=!0,this.provider=null,this.expanded=!1,this.activeTabId=``,this.viewError=null,this.viewLoad=null,this.lease=null,this.unsubscribeSnapshot=null,this.expansionInitialized=!1}connectedCallback(){super.connectedCallback(),this.requestUpdate()}updated(){this.viewLoad??=S().catch(e=>{this.viewError=e instanceof Error?e.message:String(e)}),this.synchronizeProvider()}disconnectedCallback(){this.releaseProvider(),super.disconnectedCallback()}synchronizeProvider(){let e=this.session,t=this.client;if(!this.isConnected||!e?.sessionKey.trim()||!t){this.releaseProvider();return}let n=v(e);if(this.lease?.client===t&&this.lease.cacheKey===n){(this.lease.session.sessionKey!==e.sessionKey||this.lease.session.agentId!==e.agentId)&&(this.lease.session={...e},this.requestUpdate()),this.lease.update(t,this.connected,{canPinWidgets:!1,canPinMcpApps:!1,canMutate:this.canMutate,canGrant:this.canGrant});return}this.releaseProvider(),this.expansionInitialized=!1,this.activeTabId=``;let r=b(e,t,this.connected,!1,!1,this.canMutate,this.canGrant);this.lease={...r,client:t,cacheKey:n,session:{...e}},this.provider=r.provider,this.unsubscribeSnapshot=r.provider.snapshot$.subscribe(()=>{this.reconcileSnapshot(r.provider),this.requestUpdate()}),this.reconcileSnapshot(r.provider),this.requestUpdate()}releaseProvider(){this.unsubscribeSnapshot?.(),this.unsubscribeSnapshot=null,this.lease?.release(),this.lease=null,this.provider=null}reconcileSnapshot(e){let t=e.snapshot$.value,n=t.tabs[0]?.tabId??``;t.tabs.some(e=>e.tabId===this.activeTabId)||(this.activeTabId=n),!this.expansionInitialized&&e.hasLoadedSnapshot&&(this.expansionInitialized=!0,this.expanded=y(t))}render(){let e=this.provider,t=e?.snapshot$.value,n=this.lease?.session,r=!!(t&&y(t)),i=e?{appViewGeneration:e.appViewGeneration,applyOps:t=>e.applyOps(t),grant:(t,n)=>e.grant(t,n),selectTab:e=>{this.activeTabId=e},frameLoadFailed:t=>e.refreshWidgetFrame(t),widgetAppView:(t,n)=>e.widgetAppView(t,n),refreshWidgetAppView:(t,n)=>e.refreshWidgetAppView(t,n)}:null;return c`
      <section class="plugin-session-dashboard">
        <button
          type="button"
          class="plugin-session-dashboard__toggle"
          aria-expanded=${this.expanded?`true`:`false`}
          @click=${()=>{this.expansionInitialized=!0,this.expanded=!this.expanded}}
        >
          <span class="plugin-session-dashboard__title">
            ${h.kanban}<span>${g(`pluginUi.dashboardTitle`)}</span>
          </span>
          <span class="plugin-session-dashboard__chevron" aria-hidden="true"
            >${h.arrowDown}</span
          >
        </button>
        <div class="plugin-session-dashboard__body" ?hidden=${!this.expanded}>
          ${this.viewError?c`<p role="alert">${this.viewError}</p>
                  <button
                    type="button"
                    @click=${()=>{this.viewLoad=null,this.viewError=null}}
                  >
                    ${g(`common.retry`)}
                  </button>`:r&&e&&t&&n&&i?c`
                    <openclaw-board-view
                      .active=${this.expanded&&this.presented}
                      .session=${n}
                      .snapshot=${t}
                      .activeTabId=${this.activeTabId}
                      .widgetFrameUrl=${(t,n)=>e.widgetFrameUrl(t,n)}
                      .callbacks=${i}
                      .sessions=${[]}
                      .canMutate=${this.canMutate}
                      .canGrant=${this.canGrant}
                    ></openclaw-board-view>
                  `:c`<p class="plugin-session-dashboard__empty">
                    ${g(`pluginUi.dashboardEmpty`)}
                  </p>`}
        </div>
        ${!this.expanded&&this.expansionInitialized&&!r?c`<p class="plugin-session-dashboard__collapsed-empty">
                ${g(`pluginUi.dashboardEmpty`)}
              </p>`:u}
      </section>
    `}},t([d({attribute:!1})],C.prototype,`session`,void 0),t([d({attribute:!1})],C.prototype,`client`,void 0),t([d({attribute:!1})],C.prototype,`connected`,void 0),t([d({attribute:!1})],C.prototype,`canMutate`,void 0),t([d({attribute:!1})],C.prototype,`canGrant`,void 0),t([d({attribute:!1})],C.prototype,`presented`,void 0),t([l()],C.prototype,`provider`,void 0),t([l()],C.prototype,`expanded`,void 0),t([l()],C.prototype,`activeTabId`,void 0),t([l()],C.prototype,`viewError`,void 0),customElements.get(`openclaw-plugin-session-dashboard`)||customElements.define(`openclaw-plugin-session-dashboard`,C)})))()}w();
//# sourceMappingURL=control-ui-dashboard-CJaqkmg9.js.map