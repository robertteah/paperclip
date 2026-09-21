import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,L as n,R as r}from"./control-ui-foundation-DMb6IeIq.js";import{Gc as i,Gn as a,Kn as o,Yo as s,qc as c,qo as l}from"./control-ui-core-DzidtL-P.js";import{$ as u,C as d,K as f,X as p,_ as m,at as h,b as g,q as _,w as v}from"./lit-runtime-vxhGQLC6.js";import{Tn as y,h as b,m as x,zn as S}from"./control-ui-core-CaKBexnk.js";import{Bt as C,Gt as w,It as T,Pt as E}from"./control-ui-core-uEI6aN5p.js";import{a as D,n as O,r as k}from"./gateway-runtime-DP4whqrA.js";import{mn as A}from"./control-ui-boot-chat-pu3gR1ly.js";import{Qs as j,Zs as M}from"./control-ui-boot-shared-CH-OC11d.js";function N(e,t){try{return new URL(e.blockedURI).origin===t.origin}catch{return!1}}async function P(e){let t;try{t=new URL(e)}catch{return`unreachable`}let n=!1,r=e=>{N(e,t)&&(n=!0)},i=typeof document>`u`?void 0:document;i?.addEventListener(`securitypolicyviolation`,r);try{return await fetch(e,{mode:`no-cors`,signal:AbortSignal.timeout(F)}),`reachable`}catch{return await new Promise(e=>{setTimeout(e,0)}),n?`blocked`:`unreachable`}finally{i?.removeEventListener(`securitypolicyviolation`,r)}}var F;function I(){return(I=e((()=>{F=4e3})))()}function L(e,t,n){let r=new URL(A(t,n));return r.port=String(e.listenPort),r.pathname=e.path??`/`,r.search=e.tokenQuery,r.href}function R(){return(R=e((()=>{})))()}var z,B;function V(){return(V=e((()=>{r(),f(),u(),d(),m(),y(),b(),T(),C(),s(),k(),j(),c(),o(),I(),R(),z=`allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts`,B=class extends i{constructor(...e){super(...e),this.portals=[],this.selectedPortalId=null,this.loading=!1,this.loaded=!1,this.error=null,this.closingPortalId=null,this.portalProbeState=null,this.requestGeneration=0,this.portalSetRevision=0,this.portalProbeGeneration=0,this.portalProbeCache=new Map,this.gateway=new M(this,{getGateway:()=>this.context?.gateway,invalidateRequests:()=>this.resetGatewayState(),ensureInitialData:()=>void this.loadPortals()}),this.subscriptions=new a(this).effect(()=>this.context?.gateway,e=>e.subscribeEvents(t=>{this.gateway.gateway!==e||this.context.gateway!==e||!this.gateway.connected||t.event!==`portal.changed`||this.loadPortals()}))}disconnectedCallback(){this.portalProbeGeneration+=1,this.subscriptions.clear(),super.disconnectedCallback()}get portalListSupported(){return D(this.gateway.snapshot??{},`portal.list`)!==!1}get canClosePortal(){return O(this.gateway.snapshot,`portal.close`,`operator.write`)}resetGatewayState(){this.requestGeneration+=1,this.portalSetRevision+=1,this.portals=[],this.selectedPortalId=null,this.loading=!1,this.loaded=!1,this.error=null,this.closingPortalId=null,this.portalProbeGeneration+=1,this.portalProbeCache.clear(),this.portalProbeState=null}applyPortalSet(e){this.portalSetRevision+=1,this.portals=[...e];let t=this.selectedPortalId,n=e.some(e=>e.id===t)?this.selectedPortalId:e[0]?.id??null;this.selectedPortalId=n,this.loaded=!0,this.error=null;let r=e.find(e=>e.id===n);r?this.ensurePortalProbe(r,n!==t):(this.portalProbeGeneration+=1,this.portalProbeState=null)}portalUrl(e,t){return L({...e,tokenQuery:t},this.context.gateway.connection.gatewayUrl,window.location.origin)}ensurePortalProbe(e,t=!1){let n=e.tokenQuery;if(!n){this.portalProbeGeneration+=1,this.portalProbeState=null;return}let r=this.portalUrl(e,n),i=`${e.id}\u0000${r}`;if(!t&&this.portalProbeState?.key===i)return;let a=t?void 0:this.portalProbeCache.get(i);if(a!==void 0){this.portalProbeState={key:i,status:a};return}let o=++this.portalProbeGeneration;this.portalProbeState={key:i,status:`probing`},P(r).then(e=>{this.portalProbeCache.set(i,e),o===this.portalProbeGeneration&&this.portalProbeState?.key===i&&(this.portalProbeState={key:i,status:e})})}selectPortal(e){e.id!==this.selectedPortalId&&(this.selectedPortalId=e.id,this.ensurePortalProbe(e,!0))}async loadPortals(){if(!this.gateway.connected||!this.portalListSupported||this.loading)return;let e=this.gateway.client,t=this.gateway.capture();if(!e||!t)return;let n=++this.requestGeneration,r=this.portalSetRevision;this.loading=!0,this.error=null;try{let i=await e.request(`portal.list`,{});n===this.requestGeneration&&r===this.portalSetRevision&&this.gateway.isCurrent(t)&&this.applyPortalSet(i.portals)}catch(e){n===this.requestGeneration&&this.gateway.isCurrent(t)&&this.portalListSupported&&(this.error=w(`portalsPage.loadFailed`,{error:l(e)}),this.loaded=!0)}finally{n===this.requestGeneration&&this.gateway.isCurrent(t)&&(this.loading=!1)}}async closePortal(e){if(!this.canClosePortal||this.closingPortalId)return;let t=this.gateway.client,n=this.gateway.capture();if(!(!t||!n)){this.closingPortalId=e.id,this.error=null;try{await t.request(`portal.close`,{id:e.id}),this.gateway.isCurrent(n)&&this.loadPortals()}catch(e){this.gateway.isCurrent(n)&&(this.error=w(`portalsPage.closeFailed`,{error:l(e)}))}finally{this.gateway.isCurrent(n)&&this.closingPortalId===e.id&&(this.closingPortalId=null)}}}renderEmptyState(){let e=!this.portalListSupported;return p`
      <section class="portals-empty" role="status" aria-live="polite">
        ${this.loading&&!this.loaded?p`<div class="portals-empty__title">${w(`portalsPage.loading`)}</div>`:p`
                <div class="portals-empty__title">${w(`portalsPage.emptyHint`)}</div>
                <div class="portals-empty__prompts">
                  <span>${w(`portalsPage.promptShow`)}</span>
                  <span>${w(`portalsPage.promptStart`)}</span>
                  <span>${w(`portalsPage.promptMakeAvailable`)}</span>
                </div>
              `}
        ${e?p`<div class="portals-empty__note">${w(`portalsPage.unsupported`)}</div>`:_}
        ${this.error?p`<div class="callout danger">${this.error}</div>`:_}
      </section>
    `}renderPortal(e){if(!e.tokenQuery)return p`
        <section class="portals-preview">
          <div class="portals-preview__notice" role="status">
            <div class="portals-preview__notice-title">
              ${w(`portalsPage.writeAccessRequiredTitle`)}
            </div>
            <p>${w(`portalsPage.writeAccessRequiredBody`)}</p>
          </div>
        </section>
      `;let t=this.portalUrl(e,e.tokenQuery),n=`${e.id}\u0000${t}`,r=this.portalProbeState?.key===n?this.portalProbeState.status:`probing`;return p`
      <section class="portals-preview">
        <header class="portals-preview__header">
          <a
            class="portals-preview__url"
            href=${t}
            target="_blank"
            rel="noopener noreferrer"
            title=${t}
          >
            <span>${t}</span>
            ${E(`externalLink`)}
            <span class="sr-only">${w(`portalsPage.openNewTab`)}</span>
          </a>
          <button
            class="btn btn--icon btn--ghost portals-preview__close"
            type="button"
            title=${w(`portalsPage.closePortal`,{title:e.title})}
            aria-label=${w(`portalsPage.closePortal`,{title:e.title})}
            ?disabled=${!this.canClosePortal||this.closingPortalId===e.id}
            @click=${()=>void this.closePortal(e)}
          >
            ${E(`x`)}
          </button>
        </header>
        ${this.error?p`<div class="callout danger portals-preview__error">${this.error}</div>`:_}
        ${r===`probing`?p`
                <div class="portals-empty portals-preview__state" role="status" aria-live="polite">
                  <div class="portals-empty__title">${w(`portalsPage.loading`)}</div>
                </div>
              `:r===`unreachable`?p`
                  <div class="portals-preview__notice" role="status">
                    <div class="portals-preview__notice-title">
                      ${w(`portalsPage.unreachableTitle`)}
                    </div>
                    <p>${w(`portalsPage.unreachableBody`)}</p>
                    <a
                      class="portals-preview__notice-url"
                      href=${t}
                      target="_blank"
                      rel="noopener noreferrer"
                      >${t}</a
                    >
                    <button
                      class="btn"
                      type="button"
                      @click=${()=>this.ensurePortalProbe(e,!0)}
                    >
                      ${w(`portalsPage.retry`)}
                    </button>
                  </div>
                `:v(n,p`<iframe
                    ${g(e=>{e instanceof HTMLIFrameElement&&!e.hasAttribute(`src`)&&e.setAttribute(`src`,t)})}
                    class="portals-preview__frame"
                    title=${w(`portalsPage.previewTitle`,{title:e.title})}
                    referrerpolicy="no-referrer"
                    sandbox=${z}
                  ></iframe>`)}
      </section>
    `}render(){let e=this.portals.find(e=>e.id===this.selectedPortalId)??this.portals[0];return p`
      <section class="content-header content-header--page">
        <div>
          <div class="page-title">${S(`portals`)}</div>
        </div>
      </section>
      ${e?p`
              <section class="portals-layout">
                <aside class="portals-rail" aria-label=${w(`portalsPage.listLabel`)}>
                  ${this.portals.map(t=>p`
                      <button
                        class="portals-rail__item ${t.id===e.id?`active`:``}"
                        type="button"
                        aria-current=${t.id===e.id?`true`:_}
                        @click=${()=>this.selectPortal(t)}
                      >
                        <span class="portals-rail__title">${t.title}</span>
                        <span class="portals-rail__port"
                          >${w(`portalsPage.portLabel`,{port:String(t.port)})}</span
                        >
                        ${t.description?p`<span class="portals-rail__description"
                                >${t.description}</span
                              >`:_}
                      </button>
                    `)}
                </aside>
                ${this.renderPortal(e)}
              </section>
            `:this.renderEmptyState()}
    `}},t([n({context:x,subscribe:!0})],B.prototype,`context`,void 0),t([h()],B.prototype,`portals`,void 0),t([h()],B.prototype,`selectedPortalId`,void 0),t([h()],B.prototype,`loading`,void 0),t([h()],B.prototype,`loaded`,void 0),t([h()],B.prototype,`error`,void 0),t([h()],B.prototype,`closingPortalId`,void 0),t([h()],B.prototype,`portalProbeState`,void 0),customElements.get(`openclaw-portals-page`)||customElements.define(`openclaw-portals-page`,B)})))()}V();
//# sourceMappingURL=portals-page-Bjx0eYUd.js.map