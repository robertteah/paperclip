const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./home-session.runtime-DFhKrY0m.js","./rolldown-runtime-DkW27tQK.js","./control-ui-foundation-DMb6IeIq.js","./control-ui-core-DzidtL-P.js","./lit-runtime-vxhGQLC6.js","./control-ui-core-CaKBexnk.js","./control-ui-core-uEI6aN5p.js","./gateway-runtime-DP4whqrA.js","./control-ui-core-BRgpioGt.css","./control-ui-boot-shared-CH-OC11d.js","./control-ui-boot-shared-DW2inEkr.js","./control-ui-boot-shared-nBxCfWV5.js","./control-ui-boot-shared-gfE6fZcA.js","./markdown-runtime-Bn6OdBVq.js","./control-ui-boot-shared-BiKnED0X.js","./control-ui-boot-shared-D2DaCK2F.js","./control-ui-boot-shared-mS3IgGsF.js","./control-ui-boot-shared-Cyt1Zyts.js","./control-ui-boot-shared-CibIhXHx.css","./control-ui-boot-chat-BoyWVlmW.js","./control-ui-boot-chat-pu3gR1ly.js","./control-ui-boot-chat-B1e-zt03.js","./config-runtime-Cr2H22l0.js","./control-ui-boot-new-DeGMjctK.js","./control-ui-boot-new-BwiGBzKd.css","./control-ui-boot-chat-B4FQbyJR.js","./control-ui-boot-chat-B0K1m2J4.js","./control-ui-boot-chat-BsnrxotZ.js","./control-ui-boot-chat-CDBbQQw1.js","./control-ui-boot-chat-CKX96sa9.js","./control-ui-boot-chat-Bs93A4Sj.css"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$i as t,Fr as n,L as r,R as i,Zn as a,bi as o,ia as s,xi as c}from"./control-ui-foundation-DMb6IeIq.js";import{Ds as ee,Gc as l,Gn as u,Jc as d,Kn as f,Os as p,Ws as m,Ys as h,aa as g,cc as _,lc as v,qc as te,ta as ne,uc as re}from"./control-ui-core-DzidtL-P.js";import{$ as ie,K as y,X as b,at as x,q as S,st as C}from"./lit-runtime-vxhGQLC6.js";import{Cr as w,Ut as T,Vt as E,Wt as D,h as O,m as k,xr as A}from"./control-ui-core-CaKBexnk.js";import{Bt as j,Ct as M,Ft as N,Gt as P,I as F,It as I,N as L,V as R,bt as ae,d as z,p as B,vt as V,wt as H}from"./control-ui-core-uEI6aN5p.js";import{Ar as U,Dr as W,Or as G}from"./control-ui-boot-shared-Cyt1Zyts.js";import{ar as K,or as q}from"./control-ui-boot-chat-pu3gR1ly.js";import{i as J,r as oe,t as se}from"./custodian-surface-C45NYNiU.js";import{B as ce,I as le,L as ue,P as Y,z as X}from"./control-ui-boot-chat-BoyWVlmW.js";import{r as de,t as fe}from"./dock-layout-controller-CX9mJz3R.js";var Z,Q;function $(){return($=e((()=>{i(),y(),ie(),U(),q(),O(),T(),w(),G(),j(),ee(),ne(),h(),te(),f(),ce(),le(),J(),de(),B(),I(),V(),M(),R(),se(),c(),Z={tagName:`openclaw-home-session`,get label(){return P(`assistantPanel.home`)},loadModule:()=>o(()=>import(`./home-session.runtime-DFhKrY0m.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]),import.meta.url)},Q=class extends l{constructor(){super(),this.custodianAvailable=!1,this.homeAvailable=!1,this.custodianSuppressed=!1,this.pageSessionKey=``,this.pageAgentId=``,this.pageRouteId=`chat`,this.pageRouteFailed=!1,this.homeStarted=!1,this.pendingPrimaryPane=null,this.destination=`custodian`,this.homeLoader=new E(this),this.minimizeRequestId=0,this.store=oe,this.dockLayout=new fe(this,{layout:z,reservationPrefix:`assistant`,isAvailable:()=>this.available}),this.onToggleRequest=e=>this.handleToggleRequest(e),this.handledMinimizeRequestId=0,this.targetScope=``,this.homeDefaults={},this.startHomeAfterPrimaryChat=()=>{if(this.homeStarted||!this.dockLayout.open||this.destination!==`home`)return;if(this.pageRouteId!==`chat`||this.pageRouteFailed){this.homeStarted=!0;return}let e=this.primaryChatPane();if(!e?.transcriptReady||this.pendingPrimaryPane===e)return;this.pendingPrimaryPane=e;let t=this.context;Promise.resolve().then(()=>e.updateComplete).then(()=>{this.pendingPrimaryPane===e&&(this.pendingPrimaryPane=null,this.isConnected&&this.context===t&&this.primaryChatPane()===e&&e.transcriptReady&&(this.homeStarted=!0))})},new u(this).watch(()=>this.store,(e,t)=>e.subscribe(t)).watch(()=>this.context,(e,t)=>ue(e,t)).watch(()=>this.context?.agentSelection,(e,t)=>e.subscribe(t)).watch(()=>this.context?.sessions,(e,t)=>e.subscribe(t)).watch(()=>this.context?.agents,(e,t)=>e.subscribe(t)).watch(()=>this.context?.gateway,(e,t)=>e.subscribe(t))}connectedCallback(){super.connectedCallback(),document.addEventListener(W,this.startHomeAfterPrimaryChat),document.addEventListener(X,this.startHomeAfterPrimaryChat),window.addEventListener(L,this.onToggleRequest),window.addEventListener(F,this.onToggleRequest),this.dockLayout.setSuppressed(this.suppressed),this.refreshCustodianTranscript(this.dockLayout.open)}disconnectedCallback(){document.removeEventListener(W,this.startHomeAfterPrimaryChat),document.removeEventListener(X,this.startHomeAfterPrimaryChat),this.pendingPrimaryPane=null,window.removeEventListener(L,this.onToggleRequest),window.removeEventListener(F,this.onToggleRequest),this.claimInput(`page`),super.disconnectedCallback()}willUpdate(){let e=this.dockLayout.open,t=this.context?.gateway.connection.gatewayUrl??``;if(t!==this.targetScope){this.targetScope=t,this.homeStarted=!1,this.pendingPrimaryPane=null,this.homeDefaults={};let e=null;try{e=a(JSON.parse(d()?.getItem(this.targetStorageKey)??`null`))}catch{}this.destination=e?.destination===`home`?`home`:`custodian`}this.context?.gateway.snapshot.phase===`connected`&&(this.homeDefaults={agentsList:this.context.agents.state.agentsList??this.homeDefaults.agentsList,hello:this.context.gateway.snapshot.hello}),this.dockLayout.setSuppressed(this.suppressed),this.minimizeRequestId>0&&this.minimizeRequestId!==this.handledMinimizeRequestId&&this.custodianAvailable&&(this.handledMinimizeRequestId=this.minimizeRequestId,this.store.hasRealUserTurn()&&this.openDestination(`custodian`)),this.available?this.dockLayout.restoreOpenState():this.dockLayout.hideWithoutPersisting(),this.refreshCustodianTranscript(!e&&this.dockLayout.open),e&&!this.dockLayout.open&&this.claimInput(`page`),this.startHomeAfterPrimaryChat(),this.homeLoader.requestWhileActive(Z,this.dockLayout.open&&this.destination===`home`&&this.homeStarted),this.dockLayout.syncReservation()}primaryChatPane(){return[...(this.closest(`openclaw-app-shell`)??this.parentElement)?.querySelectorAll(`openclaw-chat-pane.chat-pane-cache__pane--active`)??[]].find(e=>e.presented!==!1&&e.sessionKey&&m(e.sessionKey,this.pageSessionKey))}get targetStorageKey(){return`openclaw.assistant.panel.target.v1:${this.targetScope}`}persistTarget(){try{d()?.setItem(this.targetStorageKey,JSON.stringify({destination:this.destination}))}catch{}}get homeTarget(){let e=this.homeDefaults,n=p(e.agentsList?.agents??[]),r=re(e),i=this.context?.agentSelection.state.selectedId,a=i?s(i):``,o=n.find(e=>e.id===a)?.id??n.find(e=>e.id===r)?.id??n[0]?.id??r;return{...v(e,t({agentId:o,mainKey:_(e)}),o),agentId:o}}refreshCustodianTranscript(e){e&&this.destination===`custodian`&&this.store.refreshTranscriptIfIdle()}availableFor(e){return e===`home`?this.homeAvailable:this.custodianAvailable}get available(){return this.availableFor(this.destination)}get suppressed(){if(this.destination===`custodian`)return this.custodianSuppressed;if(!this.context||this.pageRouteId!==`chat`)return!1;let e=v(this.homeDefaults,this.pageSessionKey,this.pageAgentId),t=this.homeTarget;return e.sessionKey===t.sessionKey&&s(e.agentId)===t.agentId}claimInput(e){this.context&&K(this.context).claim(e)}openDestination(e){this.destination=e,this.dockLayout.setSuppressed(this.suppressed),this.available&&(this.setOpen(!0),this.suppressed&&(this.dockLayout.hideWithoutPersisting(),this.claimInput(`page`),e===`home`&&this.openHomePage()))}openHomePage(){if(this.context){let{sessionKey:e,agentId:t}=this.homeTarget,n=g({context:this.context,face:`chat`,sessionKey:e,agentId:t,focusComposer:!0});this.context.navigate(`chat`,n.options)}}setDock(e){this.dockLayout.setDock(e)}setOpen(e){e&&this.destination===`home`&&(this.homeStarted=!0),this.persistTarget(),this.dockLayout.setOpen(e),this.claimInput(e?`dock`:`page`),this.refreshCustodianTranscript(e)}toggle(){if(this.available){if(this.suppressed){this.destination===`home`&&this.openHomePage();return}this.setOpen(!this.dockLayout.open)}}handleToggleRequest(e){let t=e.type===`openclaw:home-toggle`?`home`:`custodian`;if(!this.availableFor(t))return;let n=a(e instanceof CustomEvent?e.detail:null),r=n?.dock;(r===`right`||r===`bottom`)&&this.dockLayout.setDock(r,!1),n?.open===!1?this.destination===t&&this.setOpen(!1):this.destination!==t||n?.open===!0?this.openDestination(t):this.toggle()}get assistantPanelOpen(){return this.dockLayout.open}render(){if(!this.available||!this.dockLayout.open)return S;let e=this.dockLayout.dock,t=this.homeTarget,n=this.homeLoader.visibleState,r=this.context?Y(this.context,this.pageRouteId,this.pageSessionKey,this.pageAgentId):void 0,i=e===`bottom`?`height:${this.dockLayout.height}px`:`width:${this.dockLayout.width}px`;return b`
      <section
        class="assistant-panel assistant-panel--${e}"
        style=${i}
        aria-label=${P(`assistantPanel.title`)}
        @pointerdown=${()=>this.claimInput(`dock`)}
        @focusin=${()=>this.claimInput(`dock`)}
      >
        ${this.dockLayout.renderResizer(`assistant-panel`,P(`assistantPanel.resize`))}
        <header class="rail-header assistant-panel-header" @mousedown=${A}>
          <div class="assistant-panel-title">
            <openclaw-mascot
              .mood=${this.destination===`custodian`&&this.store.sending?`thinking`:`idle`}
              .size=${16}
            ></openclaw-mascot>
            ${[`home`,`custodian`].map(e=>(e===`home`?this.homeAvailable:this.custodianAvailable)?b`<button
                    type="button"
                    class="assistant-panel-tab"
                    aria-pressed=${this.destination===e}
                    @click=${()=>this.openDestination(e)}
                  >
                    ${P(e===`home`?`assistantPanel.home`:`nav.askOpenClaw`)}
                  </button>`:S)}
          </div>
          <div class="rail-header__actions assistant-panel-actions">
            ${this.destination===`home`?b`<button
                    class="rail-header__action assistant-panel-icon"
                    type="button"
                    aria-label=${P(`assistantPanel.openHome`)}
                    @click=${()=>this.openHomePage()}
                  >
                    ${N.maximize}
                  </button>`:S}
            <button
              class="rail-header__action assistant-panel-icon"
              type="button"
              aria-label=${P(e===`bottom`?`assistantPanel.dockRight`:`assistantPanel.dockBottom`)}
              @click=${()=>this.setDock(e===`bottom`?`right`:`bottom`)}
            >
              ${e===`bottom`?N.panelRightOpen:N.panelBottomOpen}
            </button>
            <button
              class="rail-header__action assistant-panel-icon"
              type="button"
              aria-label=${P(`assistantPanel.close`)}
              @click=${()=>this.setOpen(!1)}
            >
              ${N.x}
            </button>
          </div>
        </header>
        ${this.destination===`home`?b`${this.homeStarted?D(Z)?b`<openclaw-home-session
                        .sessionKey=${t.sessionKey}
                        .agentId=${t.agentId}
                        .workContext=${r}
                      ></openclaw-home-session>`:n?ae(n,()=>this.homeLoader.retry(),()=>this.setOpen(!1)):S:H()}`:b`<openclaw-custodian-surface
                .store=${this.store}
                .onboarding=${this.store.activeVariant===`onboarding`}
                .newAgentIntent=${this.store.activeVariant===`new-agent`}
                compact
              ></openclaw-custodian-surface>`}
      </section>
    `}},n([r({context:k,subscribe:!0}),C({attribute:!1})],Q.prototype,`context`,void 0),n([C({type:Boolean})],Q.prototype,`custodianAvailable`,void 0),n([C({type:Boolean})],Q.prototype,`homeAvailable`,void 0),n([C({type:Boolean})],Q.prototype,`custodianSuppressed`,void 0),n([C()],Q.prototype,`pageSessionKey`,void 0),n([C()],Q.prototype,`pageAgentId`,void 0),n([C()],Q.prototype,`pageRouteId`,void 0),n([C({type:Boolean})],Q.prototype,`pageRouteFailed`,void 0),n([x()],Q.prototype,`homeStarted`,void 0),n([x()],Q.prototype,`destination`,void 0),n([C({type:Number})],Q.prototype,`minimizeRequestId`,void 0),n([C({attribute:!1})],Q.prototype,`store`,void 0),customElements.get(`openclaw-assistant-panel`)||customElements.define(`openclaw-assistant-panel`,Q)})))()}$();export{Q as OpenClawAssistantPanel};
//# sourceMappingURL=assistant-panel-D4F3iJv7.js.map