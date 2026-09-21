import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t}from"./control-ui-foundation-DMb6IeIq.js";import{Wc as n,qc as r}from"./control-ui-core-DzidtL-P.js";import{$ as i,K as a,X as o,at as s,q as c,st as l}from"./lit-runtime-vxhGQLC6.js";import{C as u,E as d,M as f,N as p,T as m,i as h,j as g,n as _,w as v}from"./control-ui-core-CaKBexnk.js";import{Bt as y,Ft as b,Gt as x,It as S,Nt as C}from"./control-ui-core-uEI6aN5p.js";import{Ei as w,Ti as T}from"./control-ui-boot-shared-Cyt1Zyts.js";import{bs as E,ys as D}from"./control-ui-boot-shared-CH-OC11d.js";import{n as O,t as k}from"./update-run-projection-CHt1Q2wx.js";function A(){return(A=e((()=>{})))()}var j;function M(){return(M=e((()=>{a(),i(),p(),h(),k(),m(),y(),r(),E(),S(),T(),C(),j=class extends n{constructor(...e){super(...e),this.compact=!1,this.updateAvailable=null,this.updateSchedule=null,this.heldUpdateCampaignId=null,this.updateBusy=!1,this.updateRun=null,this.updateRunAcknowledged=!1,this.connected=!0,this.onCheckStatus=void 0,this.onAcknowledge=void 0,this.statusBanner=null,this.watchUpdateProgress=void 0,this.canUpdate=!1,this.canHoldUpdate=!1,this.onUpdate=()=>void 0,this.refreshRequired=!1,this.onRefresh=async()=>!1,this.onHoldUpdate=async()=>!1,this.onReviewUpdate=()=>void 0,this.onDismiss=void 0,this.holdingCampaignId=null,this.nativeUpdateAvailable=f(),this.refreshInFlight=!1,this.refreshFailed=!1,this.refreshAttempt=0,this.countdownPolling=new D(this,1e3,()=>this.requestUpdate(),!1),this.handleNativeUpdateAvailabilityChanged=()=>{this.nativeUpdateAvailable=f()},this.openRun=()=>{this.updateRun&&_({existingRun:this.updateRun,updateAvailable:this.updateAvailable,updateSchedule:this.updateSchedule,viaNativeApp:f(),startGatewayUpdate:()=>this.onUpdate(),watchUpdateProgress:this.watchUpdateProgress,onCheckStatus:this.onCheckStatus,onReviewUpdate:this.onReviewUpdate,onAcknowledge:this.onAcknowledge})},this.startUpdate=()=>{let e=this.updateSchedule?.campaign;this.updateBusy||e?.state===`applying`||!this.canUpdate||_({startGatewayUpdate:()=>this.onUpdate(),onCheckStatus:this.onCheckStatus,onReviewUpdate:this.onReviewUpdate,onAcknowledge:this.onAcknowledge,...this.watchUpdateProgress?{watchUpdateProgress:this.watchUpdateProgress}:{},updateAvailable:this.updateAvailable,updateSchedule:this.updateSchedule,viaNativeApp:f()})},this.holdUpdate=async e=>{this.holdingCampaignId=e,await this.onHoldUpdate(),this.holdingCampaignId=null},this.refreshControlUi=async()=>{if(this.refreshInFlight)return;this.refreshInFlight=!0,this.refreshFailed=!1;let e=++this.refreshAttempt,t=!1;try{t=await this.onRefresh()}catch{}e!==this.refreshAttempt||!this.refreshRequired||t||(this.refreshInFlight=!1,this.refreshFailed=!0)}}connectedCallback(){super.connectedCallback(),this.nativeUpdateAvailable=f(),window.addEventListener(g,this.handleNativeUpdateAvailabilityChanged)}disconnectedCallback(){window.removeEventListener(g,this.handleNativeUpdateAvailabilityChanged),super.disconnectedCallback()}willUpdate(e){super.willUpdate(e),e.has(`refreshRequired`)&&!this.refreshRequired&&(this.refreshAttempt+=1,this.refreshInFlight=!1,this.refreshFailed=!1)}updated(e){if(super.updated(e),e.has(`updateSchedule`)){let e=this.updateSchedule?.campaign?.state;e===`countdown`||e===`waiting-for-idle`?this.countdownPolling.start():this.countdownPolling.stop()}}renderStatus(){let e=this.updateRun?null:this.statusBanner;return e?o`<div
          class="sidebar-update-card__status sidebar-update-card__status--${e.tone}"
          role="alert"
        >
          ${e.text}
        </div>`:c}hasAvailableUpdate(){let e=this.updateAvailable,t=this.updateSchedule?.target;return e!==null&&e.latestVersion!==e.currentVersion||e?.commitsBehind!==void 0&&e.commitsBehind>0||t?.kind===`git`&&t.commitsBehind>0}compactSummary(){if(this.refreshRequired)return{detail:x(`chat.sidebar.serverUpdatedRefresh`),icon:b.refresh,severity:`warning`,title:x(`chat.sidebar.serverUpdatedTitle`)};if(w(this.updateRun,this.updateRunAcknowledged)&&this.updateRun){let e=O(this.updateRun,this.connected);return{title:e.headline,detail:e.compactLabel,icon:this.updateRun.status===`running`?b.refresh:this.updateRun.status===`succeeded`?b.check:b.alertTriangle,severity:this.updateRun.status===`failed`?`error`:`warning`,critical:!1}}let e=this.updateSchedule?.campaign,t=this.updateBusy||e?.state===`applying`,n=this.updateRun?null:this.statusBanner;if(!e&&!t&&!n&&!this.hasAvailableUpdate())return null;let r=v(this.updateSchedule,this.updateAvailable),i=u(this.updateSchedule),a=n&&n.tone!==`info`,o=n?.text.trim()||x(`updates.sidebar.blockedSummary`);return{detail:a?e?.state===`waiting-for-idle`&&r?x(`updates.sidebar.blockedWaiting`,{target:r}):r?`${r} · ${o}`:o:i&&r?x(`updates.sidebar.campaignTarget`,{status:i,target:r}):i??r??n?.text??x(`updates.sidebar.availableSummary`),icon:n?b.alertTriangle:t?b.refresh:b.download,critical:!!a,severity:n?.tone===`danger`?`error`:`warning`,title:x(a?`updates.sidebar.blockedTitle`:t?`updates.sidebar.updating`:`updates.sidebar.availableTitle`)}}renderCompact(){let e=this.compactSummary();return e?o`<details
      class="sidebar-issues-panel__details sidebar-issues-panel__details--${e.severity}"
    >
      <summary class="sidebar-issues-panel__summary" data-issue-row-focus>
        <span
          class="sidebar-issues-panel__icon ${e.critical?`sidebar-issues-panel__icon--critical`:``}"
          aria-hidden="true"
          >${e.icon}</span
        >
        <span class="sidebar-issues-panel__content">
          <span class="sidebar-issues-panel__entity" title=${e.title}>${e.title}</span>
          <span class="sidebar-issues-panel__state" title=${e.detail}>${e.detail}</span>
        </span>
        ${this.onDismiss?o`<button
                type="button"
                class="sidebar-issues-panel__dismiss"
                aria-label=${x(`attention.dismissItem`,{item:e.title})}
                title=${x(`attention.dismissItem`,{item:e.title})}
                @click=${e=>{e.preventDefault(),e.stopPropagation(),this.onDismiss?.()}}
              >
                ${b.x}
              </button>`:c}
        <span class="sidebar-issues-panel__chevron" aria-hidden="true">${b.chevronRight}</span>
      </summary>
      <div class="sidebar-issues-panel__body sidebar-update-issue__body">
        ${this.renderCompactDetails()}
      </div>
    </details>`:c}renderCompactDetails(){let e=this.updateRun?null:this.statusBanner;if(!e)return this.renderCard();let t=this.updateSchedule?.campaign,n=t?.holdUntilMs!==void 0&&t.holdUntilMs>Date.now(),r=!!(t&&t.state!==`applying`&&this.canUpdate&&this.canHoldUpdate&&!this.updateBusy&&!n&&this.heldUpdateCampaignId!==t.id);return o`<div class="sidebar-update-card sidebar-update-card--compact-details">
      <p class="sidebar-update-card__compact-reason" title=${e.text}>
        ${e.text}
      </p>
      <div class="sidebar-update-card__compact-actions">
        <button
          class="sidebar-update-card__review sidebar-update-card__review--primary"
          type="button"
          @click=${this.onReviewUpdate}
        >
          ${x(`updates.reviewUpdate`)}
        </button>
        ${r&&t?o`<button
                class="sidebar-update-card__hold"
                type="button"
                ?disabled=${this.holdingCampaignId===t.id}
                @click=${()=>this.holdUpdate(t.id)}
              >
                ${x(`updates.holdOneHour`)}
              </button>`:c}
      </div>
    </div>`}renderCard(){if(this.refreshRequired)return o`
        <div class="sidebar-update-card" role="status" aria-live="polite">
          ${this.renderStatus()}
          ${this.refreshFailed?o`<div
                  class="sidebar-update-card__status sidebar-update-card__status--warn"
                  role="alert"
                >
                  ${x(`connection.actionsUnavailable`)}
                </div>`:c}
          <button
            class="sidebar-update-card__action ${this.refreshInFlight?`sidebar-update-card__action--busy`:``}"
            type="button"
            ?disabled=${this.refreshInFlight}
            aria-busy=${this.refreshInFlight?`true`:`false`}
            @click=${this.refreshControlUi}
          >
            <span class="sidebar-update-card__icon" aria-hidden="true">${b.refresh}</span>
            <span class="sidebar-update-card__text sidebar-update-card__text--stacked">
              <span class="sidebar-update-card__title"
                >${x(`chat.sidebar.serverUpdatedTitle`)}</span
              >
              <span class="sidebar-update-card__subtitle"
                >${this.refreshInFlight?x(`lazyView.reloading`):this.refreshFailed?x(`connection.retryNow`):x(`chat.sidebar.serverUpdatedRefresh`)}</span
              >
            </span>
          </button>
        </div>
      `;if(w(this.updateRun,this.updateRunAcknowledged)&&this.updateRun){let e=O(this.updateRun,this.connected);return o`<div class="sidebar-update-card" role="status" aria-live="polite">
        <button class="sidebar-update-card__action" type="button" @click=${this.openRun}>
          <span class="sidebar-update-card__icon" aria-hidden="true"
            >${this.updateRun.status===`running`?b.refresh:this.updateRun.status===`succeeded`?b.check:b.alertTriangle}</span
          >
          <span class="sidebar-update-card__text sidebar-update-card__text--stacked">
            <span class="sidebar-update-card__title">${e.headline}</span>
            <span class="sidebar-update-card__subtitle">${e.compactLabel}</span>
          </span>
        </button>
      </div>`}let e=this.updateAvailable,t=this.updateSchedule?.campaign,n=this.updateBusy||t?.state===`applying`,r=this.updateRun?null:this.statusBanner;if(!t&&!n&&!r&&!this.hasAvailableUpdate())return c;let i=this.nativeUpdateAvailable?x(`chat.sidebar.updateMacAndGateway`):x(`chat.sidebar.updateGateway`),a=e?.channel===`beta`?` (beta)`:``,s=u(this.updateSchedule),l=v(this.updateSchedule,e),f=s?l?x(`updates.sidebar.campaignTarget`,{status:s,target:l}):s:n?x(`updates.sidebar.updating`):l?`${i} · ${l}${a}`:i,p=t?.state===`countdown`||t?.state===`waiting-for-idle`,m=t?.holdUntilMs!==void 0&&t.holdUntilMs>Date.now(),h=!!(t&&t.state!==`applying`&&this.canUpdate&&this.canHoldUpdate&&!n&&!m&&this.heldUpdateCampaignId!==t.id),g=d(e,this.updateSchedule,this.updateBusy),_=o`<button
      class="sidebar-update-card__action ${n?`sidebar-update-card__action--busy`:``}"
      type="button"
      aria-disabled=${this.canUpdate?c:`true`}
      ?disabled=${n}
      @click=${this.startUpdate}
    >
      <span class="sidebar-update-card__icon" aria-hidden="true"
        >${n?b.refresh:b.download}</span
      >
      <span
        class="sidebar-update-card__text"
        role=${p?`timer`:c}
        aria-live=${p?`off`:c}
        >${f}</span
      >
    </button>`;return o`
      <div
        class="sidebar-update-card"
        role=${t?c:`status`}
        aria-live=${t?c:`polite`}
      >
        ${this.renderStatus()}
        ${g?o`<div class="sidebar-update-card__actions">
                ${this.canUpdate?_:o`<openclaw-tooltip open-on-click .content=${x(`updates.adminRequired`)}>
                        ${_}
                      </openclaw-tooltip>`}
                ${h&&t?o`
                        <button
                          class="sidebar-update-card__hold"
                          type="button"
                          ?disabled=${this.holdingCampaignId===t.id}
                          @click=${()=>this.holdUpdate(t.id)}
                        >
                          ${x(`updates.holdOneHour`)}
                        </button>
                      `:c}
              </div>`:c}
        ${r?o`<button
                class="sidebar-update-card__review"
                type="button"
                @click=${this.onReviewUpdate}
              >
                ${x(`updates.reviewUpdate`)}
              </button>`:c}
      </div>
    `}render(){return this.compact?this.renderCompact():this.renderCard()}},t([l({attribute:!1})],j.prototype,`compact`,void 0),t([l({attribute:!1})],j.prototype,`updateAvailable`,void 0),t([l({attribute:!1})],j.prototype,`updateSchedule`,void 0),t([l({attribute:!1})],j.prototype,`heldUpdateCampaignId`,void 0),t([l({attribute:!1})],j.prototype,`updateBusy`,void 0),t([l({attribute:!1})],j.prototype,`updateRun`,void 0),t([l({attribute:!1})],j.prototype,`updateRunAcknowledged`,void 0),t([l({attribute:!1})],j.prototype,`connected`,void 0),t([l({attribute:!1})],j.prototype,`onCheckStatus`,void 0),t([l({attribute:!1})],j.prototype,`onAcknowledge`,void 0),t([l({attribute:!1})],j.prototype,`statusBanner`,void 0),t([l({attribute:!1})],j.prototype,`watchUpdateProgress`,void 0),t([l({attribute:!1})],j.prototype,`canUpdate`,void 0),t([l({attribute:!1})],j.prototype,`canHoldUpdate`,void 0),t([l({attribute:!1})],j.prototype,`onUpdate`,void 0),t([l({attribute:!1})],j.prototype,`refreshRequired`,void 0),t([l({attribute:!1})],j.prototype,`onRefresh`,void 0),t([l({attribute:!1})],j.prototype,`onHoldUpdate`,void 0),t([l({attribute:!1})],j.prototype,`onReviewUpdate`,void 0),t([l({attribute:!1})],j.prototype,`onDismiss`,void 0),t([s()],j.prototype,`holdingCampaignId`,void 0),t([s()],j.prototype,`nativeUpdateAvailable`,void 0),t([s()],j.prototype,`refreshInFlight`,void 0),t([s()],j.prototype,`refreshFailed`,void 0),customElements.get(`openclaw-sidebar-update-card`)||customElements.define(`openclaw-sidebar-update-card`,j)})))()}export{A as n,M as t};
//# sourceMappingURL=sidebar-update-card-CjUNk5eI.js.map