import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,L as n,R as r}from"./control-ui-foundation-DMb6IeIq.js";import{Gc as i,Gn as a,Kn as o,Sn as s,on as c,qc as l,tn as u,yn as d}from"./control-ui-core-DzidtL-P.js";import{$ as f,K as p,X as m,at as h,q as g,st as _}from"./lit-runtime-vxhGQLC6.js";import{h as v,m as y}from"./control-ui-core-CaKBexnk.js";import{Bt as b,Gt as x}from"./control-ui-core-uEI6aN5p.js";import{a as S,r as C}from"./gateway-runtime-DP4whqrA.js";import{Ar as w,jt as T,wt as E}from"./control-ui-boot-shared-Cyt1Zyts.js";import{i as D,r as O,t as k}from"./custodian-surface-C45NYNiU.js";import"./settings-BirsHu3U.js";function A(e){switch(e){case`system-agent`:return x(`custodian.history.sources.systemAgent`);case`doctor`:return x(`custodian.history.sources.doctor`);case`config-rpc`:return x(`custodian.history.sources.settings`);case`external`:return x(`custodian.history.sources.manualEdit`);case`cli`:return x(`custodian.history.sources.cli`);case`plugin-install`:return x(`custodian.history.sources.pluginInstall`);case`unknown`:return x(`custodian.history.sources.unknown`)}return e}function j(e){return m`
    <article class="custodian__change-card ${e.invalid?`is-invalid`:``}">
      <div class="custodian__change-meta">
        <span class="custodian__change-source">${A(e.source)}</span>
        <time datetime=${new Date(e.at).toISOString()}
          >${u(e.at)}</time
        >
      </div>
      <div class="custodian__change-summary">${e.summary}</div>
      ${e.invalid?m`<div class="custodian__change-warning">${x(`custodian.history.invalidEdit`)}</div>`:g}
      ${e.opaqueChange?m`<div class="custodian__change-note">${x(`custodian.history.opaqueChange`)}</div>`:g}
      ${e.changedPaths?.length?m`<details class="custodian__change-paths">
              <summary>
                ${x(`custodian.history.changedPaths`,{count:String(e.changedPaths.length)})}
              </summary>
              <ul>
                ${e.changedPaths.map(e=>m`<li><code>${e}</code></li>`)}
              </ul>
            </details>`:g}
    </article>
  `}function M(e){return m`
    <section class="custodian__history" aria-label=${x(`custodian.history.title`)}>
      <div class="custodian__history-heading">
        <strong>${x(`custodian.history.title`)}</strong>
        <span>${x(`custodian.history.description`)}</span>
      </div>
      ${e.error?m`<div class="custodian__history-error" role="alert">
              <span>${e.error}</span>
              <button class="btn btn--sm" type="button" @click=${()=>e.onLoad(!0)}>
                ${x(`common.retry`)}
              </button>
            </div>`:g}
      ${e.loading&&e.entries.length===0?T({label:x(`custodian.history.loading`)}):m`<div class="custodian__change-list">
              ${e.entries.map(j)}
              ${e.loading?m`<div
                      class="custodian__history-state"
                      role="status"
                      aria-label=${x(`custodian.history.loading`)}
                    >
                      <span class="custodian__history-spinner" aria-hidden="true"></span>
                    </div>`:e.loaded&&e.entries.length===0&&!e.error?m`<div class="custodian__history-state" role="status">
                        ${x(`custodian.history.empty`)}
                      </div>`:g}
            </div>`}
      ${e.nextCursor?m`<button
              class="btn btn--ghost custodian__history-more"
              type="button"
              ?disabled=${e.loadingMore}
              @click=${()=>e.onLoad(!1)}
            >
              ${e.loadingMore?x(`custodian.history.loadingMore`):x(`custodian.history.loadMore`)}
            </button>`:g}
    </section>
  `}function N(){return(N=e((()=>{p(),E(),b(),c()})))()}var P,F;function I(){return(I=e((()=>{r(),p(),f(),v(),w(),b(),s(),C(),l(),o(),N(),D(),k(),P=50,F=class extends i{constructor(){super(),this.onboarding=!1,this.newAgentIntent=!1,this.store=O,this.historyAvailable=!1,this.historyOpen=!1,this.historyEntries=[],this.historyNextCursor=null,this.historyLoading=!1,this.historyLoadingMore=!1,this.historyError=null,this.historyLoaded=!1,this.historyClient=null,this.historyRequestEpoch=0,this.channelsSource=null,new a(this).watch(()=>this.store,(e,t)=>{let n=e.subscribe(t);return e.refreshTranscriptIfIdle(),n}).effect(()=>this.context?.channels,e=>{this.channelsSource=e;let t=e.subscribe(()=>{this.ensureOnboardingChannelStatus(),this.requestUpdate()});return this.ensureOnboardingChannelStatus(),()=>{t(),this.channelsSource===e&&(this.channelsSource=null)}})}async getUpdateComplete(){let e=await super.getUpdateComplete();return await this.querySelector(`openclaw-custodian-surface`)?.updateComplete,e}willUpdate(){this.synchronizeHistoryClient(),this.ensureOnboardingChannelStatus()}ensureOnboardingChannelStatus(){let e=this.channelsSource;if(!this.onboarding||this.store.channelOnboardingNudgeClosed||!e)return;let t=e.state;!t.connected||t.channelsSnapshot||t.channelsLoading||t.channelsError||e.refresh(!1)}synchronizeHistoryClient(){let e=this.context.gateway.snapshot,t=e.phase===`connected`?e.client:null,n=t!==null&&S(e,`openclaw.changes.list`)===!0;(t!==this.historyClient||n!==this.historyAvailable)&&(this.historyClient=t,this.historyAvailable=n,this.historyOpen=!1,this.resetHistory())}resetHistory(){this.historyRequestEpoch+=1,this.historyEntries=[],this.historyNextCursor=null,this.historyLoading=!1,this.historyLoadingMore=!1,this.historyError=null,this.historyLoaded=!1}toggleHistory(){this.historyOpen=!this.historyOpen,this.historyOpen&&!this.historyLoading&&!this.historyLoadingMore&&this.loadHistory(!0)}async loadHistory(e){let t=this.historyClient,n=e?void 0:this.historyNextCursor??void 0;if(!t||!this.historyAvailable||this.historyLoading||this.historyLoadingMore||!e&&!n)return;let r=++this.historyRequestEpoch;e?this.historyLoading=!0:this.historyLoadingMore=!0,this.historyError=null;let i=()=>this.isConnected&&this.historyClient===t&&this.historyRequestEpoch===r&&this.historyAvailable;try{let r=await t.request(`openclaw.changes.list`,{limit:P,...n?{beforeCursor:n}:{}});if(!i())return;this.historyEntries=e?r.entries:[...this.historyEntries,...r.entries],this.historyNextCursor=r.nextCursor??null,this.historyLoaded=!0}catch{i()&&(this.historyError=x(`custodian.history.requestFailed`),this.historyLoaded=!0)}finally{i()&&(this.historyLoading=!1,this.historyLoadingMore=!1)}}render(){let e=this.channelsSource?.state,t=e?.channelsSnapshot??null,n=this.onboarding&&!this.store.channelOnboardingNudgeClosed&&e?.connected?e?.channelsError??null:null,r=this.onboarding&&!this.store.channelOnboardingNudgeClosed&&e?.connected&&!e.channelsLoading&&n===null&&t!==null&&t.partial!==!0&&!d(t),i=this.historyOpen&&this.historyAvailable?M({entries:this.historyEntries,error:this.historyError,loaded:this.historyLoaded,loading:this.historyLoading,loadingMore:this.historyLoadingMore,nextCursor:this.historyNextCursor,onLoad:e=>void this.loadHistory(e)}):g;return m`
      <section
        class="custodian custodian--page ${this.store.setupRequired?`custodian--setup-required`:``}"
      >
        <header
          class="custodian__header custodian__column ${this.onboarding?`custodian__header--minimal`:``}"
        >
          ${this.onboarding?g:m`<div class="custodian__identity">
                  <div class="custodian__mark" aria-hidden="true">
                    <openclaw-mascot
                      .mood=${this.store.sending?`thinking`:`idle`}
                      .size=${38}
                    ></openclaw-mascot>
                  </div>
                  <div>
                    <h1>${x(`custodian.title`)}</h1>
                    <p>${x(`custodian.subtitleCaretaker`)}</p>
                  </div>
                </div>`}
          <div class="custodian__header-actions">
            ${this.onboarding?m`<openclaw-sidebar-attention></openclaw-sidebar-attention>`:g}
            ${this.historyAvailable?m`<button
                    class="btn btn--ghost custodian__history-toggle"
                    type="button"
                    aria-expanded=${this.historyOpen?`true`:`false`}
                    @click=${()=>this.toggleHistory()}
                  >
                    ${x(`custodian.history.button`)}
                  </button>`:g}
            ${this.onboarding?m`<button
                    class="btn btn--ghost"
                    type="button"
                    @click=${()=>this.store.exitSetup()}
                  >
                    ${x(`custodian.exitSetup`)}
                  </button>`:g}
          </div>
        </header>

        <openclaw-custodian-surface
          class="custodian__column"
          .store=${this.store}
          .onboarding=${this.onboarding}
          .newAgentIntent=${this.newAgentIntent}
          .showChannelOnboardingNudge=${r}
          .channelOnboardingError=${n}
          .channelOnboardingRetrying=${e?.channelsLoading??!1}
          .onRetryChannelOnboarding=${()=>void this.channelsSource?.refresh(!1)}
          .historyContent=${i}
        ></openclaw-custodian-surface>
      </section>
    `}},t([n({context:y,subscribe:!0})],F.prototype,`context`,void 0),t([_({attribute:!1})],F.prototype,`onboarding`,void 0),t([_({attribute:!1})],F.prototype,`newAgentIntent`,void 0),t([_({attribute:!1})],F.prototype,`store`,void 0),t([h()],F.prototype,`historyAvailable`,void 0),t([h()],F.prototype,`historyOpen`,void 0),t([h()],F.prototype,`historyEntries`,void 0),t([h()],F.prototype,`historyNextCursor`,void 0),t([h()],F.prototype,`historyLoading`,void 0),t([h()],F.prototype,`historyLoadingMore`,void 0),t([h()],F.prototype,`historyError`,void 0),customElements.get(`openclaw-custodian-page`)||customElements.define(`openclaw-custodian-page`,F)})))()}I();
//# sourceMappingURL=custodian-page-DUZId-RO.js.map