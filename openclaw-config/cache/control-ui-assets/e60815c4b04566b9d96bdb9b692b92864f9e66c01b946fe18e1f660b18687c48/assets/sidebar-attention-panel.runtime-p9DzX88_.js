import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,Ws as n,Xt as r,Yo as i,Ys as a,aa as o,on as s,qo as c,ta as l,tn as u}from"./control-ui-core-DzidtL-P.js";import{K as d,X as f,q as p}from"./lit-runtime-vxhGQLC6.js";import{B as m,V as h,cr as g,d as _,fn as v,hr as y,pn as b,u as x}from"./control-ui-core-CaKBexnk.js";import{Bt as S,Ft as C,Gt as w,It as T,W as E}from"./control-ui-core-uEI6aN5p.js";import{n as D,r as O}from"./gateway-runtime-DP4whqrA.js";import{ia as k,na as A,pa as j,ra as M}from"./control-ui-boot-shared-Cyt1Zyts.js";import{Dt as ee,kt as N}from"./control-ui-boot-chat-pu3gR1ly.js";import{n as P,t as F}from"./hub-tabs-DuEhaWau.js";import{t as I}from"./sidebar-update-card-CjUNk5eI.js";var L;function R(){return(R=e((()=>{b(),i(),m(),L=class{constructor(e,t){this.onChange=t,this.operation=null,this.value={phase:`hidden`},this.current=e,this.sync(e)}get state(){return this.value}sync(e){this.current=e;let t=e.client,n=h(e);if(!t||n.phase!==`available`){this.retireOperation(),this.setState(n);return}this.operation&&this.operation.client!==t&&(this.retireOperation(),this.setState({phase:`available`})),(this.value.phase===`hidden`||this.value.phase===`guidance`)&&this.setState({phase:`available`})}request(){this.start(!1)}retry(){this.start(!0)}cancel(){this.retireOperation(),this.setState(h(this.current))}dispose(){this.retireOperation()}start(e){let t=this.current.client;if(!t||h(this.current).phase!==`available`)return;if(this.operation){if(!e)return;this.retireOperation()}let n={client:t};this.operation=n,this.setState({phase:`requesting`}),t.requestScopeUpgrade({onPending:e=>{this.isCurrent(n)&&this.setState({phase:`pending`,requestId:e})}}).then(e=>{!this.isCurrent(n)||e.status===`approved`||this.setState({phase:`rejected`,requestId:e.requestId,expired:e.status===`expired`})}).catch(e=>{!this.isCurrent(n)||e instanceof Error&&e.name===`AbortError`||this.setState({phase:`error`,message:c(e),retryable:!(e instanceof v)||e.retryable})}).finally(()=>{this.isCurrent(n)&&(this.operation=null)})}isCurrent(e){return this.operation===e&&this.current.client===e.client}retireOperation(){let e=this.operation;this.operation=null,e?.client.cancelScopeUpgrade()}setState(e){JSON.stringify(this.value)!==JSON.stringify(e)&&(this.value=e,this.onChange())}}})))()}function z(e,t){if(!t)return p;let n=w(`attention.dismissItem`,{item:e});return f`<button
    type="button"
    class="sidebar-issues-panel__dismiss"
    aria-label=${n}
    title=${n}
    @click=${e=>{e.preventDefault(),e.stopPropagation(),t()}}
  >
    ${C.x}
  </button>`}function B(e){let{mention:n,context:i}=e,a={id:n.senderProfileId,identity:{type:`profile`,id:n.senderProfileId},name:n.senderLabel,avatarUrl:n.senderAvatarUrl,watchedSessions:[]},s=w(`attention.mentions.from`,{sender:n.senderLabel}),c=o({face:`chat`,sessionKey:n.sessionKey,fallbackAgentId:n.agentId,basePath:i.basePath,row:{key:n.sessionKey,displayName:n.sessionTitle},exactKey:!0});return f`<article
    class="sidebar-mention-row"
    data-attention-kind="mention"
    data-mention-id=${n.id}
    aria-label=${s}
  >
    <div class="sidebar-issues-panel__summary sidebar-mention-row__summary">
      <span class="sidebar-mention-row__avatar" aria-hidden="true">
        <openclaw-viewer-avatar
          .user=${a}
          .markAsViewer=${!1}
          variant="footer"
        ></openclaw-viewer-avatar>
      </span>
      <div class="sidebar-issues-panel__content">
        <div class="sidebar-mention-row__header">
          <span class="sidebar-issues-panel__entity" title=${s}>${s}</span>
          <time
            class="sidebar-mention-row__age"
            datetime=${new Date(n.createdAt).toISOString()}
            title=${r(n.createdAt)}
            >${u(n.createdAt)}</time
          >
        </div>
        <span class="sidebar-issues-panel__state" title=${n.sessionTitle}
          >${n.sessionTitle}</span
        >
        ${n.excerpt?f`<p class="sidebar-mention-row__excerpt">${n.excerpt}</p>`:p}
        <div class="sidebar-issues-panel__actions sidebar-mention-row__actions">
          <a
            class="sidebar-issues-panel__action sidebar-issues-panel__action--primary"
            href=${c.href}
            data-issue-row-focus
            @click=${n=>{t(n)&&(n.preventDefault(),e.onClosePanel(),i.navigate(`chat`,c.options))}}
            >${w(`attention.mentions.open`)}</a
          >
          <button
            type="button"
            class="sidebar-issues-panel__action"
            ?disabled=${e.dismissing}
            @click=${e.onDismiss}
          >
            ${w(e.dismissing?`attention.mentions.dismissing`:`attention.mentions.dismiss`)}
          </button>
        </div>
      </div>
    </div>
  </article>`}function V(e){let r=e.context;if(!r)return p;let i=r.overlays.snapshot,a=e.approval.request.sessionKey?.trim(),s=a?r.sessions.state.result?.sessions.find(e=>n(e.key,a)):void 0,c=a?o({context:r,face:`chat`,sessionKey:a}):null;return N({approval:e.approval,busy:i.approvalBusy,canGrant:i.approvalCanGrant,error:i.approvalErrors.get(e.approval.id)??null,openSessionHref:c?.href,sessionTitle:s?.displayName?.trim()||s?.label?.trim(),onDecision:e.onDecision,onOpenSession:c?n=>{t(n)&&(n.preventDefault(),e.onClosePanel(),r.navigate(`chat`,c.options))}:void 0})}function H(e){let t=e.context;if(!e.visible||!t)return p;let n=t.overlays.snapshot,r=t.gateway.snapshot;return f`<openclaw-sidebar-update-card
    class="sidebar-issues-panel__update"
    data-attention-kind="updateAvailable"
    .compact=${!0}
    .updateAvailable=${n.updateAvailable}
    .updateSchedule=${n.updateSchedule}
    .heldUpdateCampaignId=${n.heldUpdateCampaignId}
    .updateBusy=${n.updateRunning||n.updateReconciliationPending}
    .updateRun=${n.updateRun}
    .updateRunAcknowledged=${n.updateRunAcknowledged}
    .connected=${r.phase===`connected`}
    .onAcknowledge=${()=>t.overlays.acknowledgeUpdateRun()}
    .onCheckStatus=${()=>t.overlays.refreshUpdateStatus()}
    .statusBanner=${n.updateStatusBanner}
    .watchUpdateProgress=${e.watchUpdateProgress}
    .canUpdate=${D(r,`update.run`,`operator.admin`)}
    .canHoldUpdate=${D(r,`update.hold`,`operator.admin`)}
    .onUpdate=${()=>void t.overlays.runUpdate()}
    .refreshRequired=${!1}
    .onHoldUpdate=${()=>t.overlays.holdUpdate()}
    .onReviewUpdate=${e.onNavigate}
    .onDismiss=${e.onDismiss}
  ></openclaw-sidebar-update-card>`}function U(e){switch(e.phase){case`guidance`:return w(`connection.scopeUpgrade.guidance`);case`available`:return w(`connection.scopeUpgrade.limited`);case`requesting`:return w(`connection.scopeUpgrade.requesting`);case`pending`:return w(`connection.scopeUpgrade.pending`);case`rejected`:return w(e.expired?`connection.scopeUpgrade.expired`:`connection.scopeUpgrade.rejected`);case`error`:return w(`connection.scopeUpgrade.error`,{error:e.message})}return e}function W(e){if(e.state.phase===`hidden`)return p;let t=U(e.state),n=w(`connection.scopeUpgrade.inboxState`),r=e.state.phase===`error`?e.state.retryable:e.state.phase===`pending`||e.state.phase===`rejected`;return f`<details
    class="sidebar-issues-panel__details sidebar-issues-panel__details--${e.state.phase===`error`||e.state.phase===`rejected`?`error`:`warning`}"
    data-attention-kind="scopeUpgrade"
  >
    <summary class="sidebar-issues-panel__summary" data-issue-row-focus>
      <span class="sidebar-issues-panel__icon" aria-hidden="true">${C.shieldQuestion}</span>
      <span class="sidebar-issues-panel__content">
        <span class="sidebar-issues-panel__entity">${w(`connection.scopeUpgrade.status`)}</span>
        <span class="sidebar-issues-panel__state" title=${n}>${n}</span>
      </span>
      ${e.onDismiss?z(w(`connection.scopeUpgrade.status`),e.onDismiss):p}
      <span class="sidebar-issues-panel__chevron" aria-hidden="true">${C.chevronRight}</span>
    </summary>
    <div class="sidebar-issues-panel__body" role="status" aria-live="polite">
      <div>${t}</div>
      ${e.state.phase===`available`?f`<div class="sidebar-issues-panel__actions">
              <button
                type="button"
                class="sidebar-issues-panel__action sidebar-issues-panel__action--primary"
                @click=${e.onRequest}
              >
                ${w(`connection.scopeUpgrade.request`)}
              </button>
            </div>`:e.state.phase===`requesting`?f`<div class="sidebar-issues-panel__actions">
                <button
                  type="button"
                  class="sidebar-issues-panel__action sidebar-issues-panel__action--primary"
                  disabled
                >
                  ${w(`connection.scopeUpgrade.requestingAction`)}
                </button>
              </div>`:r||e.state.phase===`error`?f`<div class="sidebar-issues-panel__actions">
                  ${r?f`<button
                          type="button"
                          class="sidebar-issues-panel__action sidebar-issues-panel__action--primary"
                          @click=${e.onRetry}
                        >
                          ${w(`connection.scopeUpgrade.retry`)}
                        </button>`:p}
                  <button
                    type="button"
                    class="sidebar-issues-panel__action"
                    @click=${e.onCancel}
                  >
                    ${w(`connection.scopeUpgrade.cancel`)}
                  </button>
                </div>`:p}
    </div>
  </details>`}function G(e){return e.meta?f`<span class="sidebar-issues-panel__state-row" title=${e.detail}>
    ${e.meta.context?f`<span class="sidebar-issues-panel__meta-context">${e.meta.context}</span>
            <span aria-hidden="true">·</span>`:p}
    <span class="sidebar-issues-panel__meta-status">${e.meta.status}</span>
    <span aria-hidden="true">·</span>
    <span class="sidebar-issues-panel__meta-time">${e.meta.time}</span>
  </span>`:f`<span class="sidebar-issues-panel__state" title=${e.detail}
      >${e.detail}</span
    >`}function K(e,n){if(e.action.kind!==`navigate`)return p;let r=e.action.routeId;return f`<div
    class="sidebar-issues-panel__details sidebar-issues-panel__details--${e.severity}"
    data-attention-kind=${e.kind}
  >
    <div class="sidebar-issues-panel__summary sidebar-issues-panel__summary--navigation">
      <a
        class="sidebar-issues-panel__navigation-link"
        href=${y(r,n.basePath)}
        data-issue-row-focus
        @click=${e=>{t(e)&&(e.preventDefault(),n.onNavigate(r))}}
      >
        <span class="sidebar-issues-panel__icon" aria-hidden="true">${C[e.icon]}</span>
        <span class="sidebar-issues-panel__content">
          <span class="sidebar-issues-panel__entity" title=${e.label}>${e.label}</span>
          ${G(e)}
        </span>
      </a>
      ${z(e.label,n.onDismiss)}
      <span class="sidebar-issues-panel__chevron" aria-hidden="true">${C.chevronRight}</span>
    </div>
  </div>`}function q(e,t){if(e.action.kind===`navigate`)return K(e,t);let n=(e.action.kind===`askCustodian`?e.action.alert.facts:[]).filter(t=>t!==e.label),r=e.action.kind===`askCustodian`?w(`nav.askOpenClaw`):e.label,i=e.inlineAction;return f`<details
    class="sidebar-issues-panel__details sidebar-issues-panel__details--${e.severity}"
    data-attention-kind=${e.kind}
  >
    <summary class="sidebar-issues-panel__summary" data-issue-row-focus>
      <span
        class="sidebar-issues-panel__icon ${e.kind===`modelAuthExpired`?`sidebar-issues-panel__icon--critical`:``}"
        aria-hidden="true"
        >${C[e.icon]}</span
      >
      <span class="sidebar-issues-panel__content">
        <span class="sidebar-issues-panel__entity" title=${e.label}>${e.label}</span>
        ${G(e)}
      </span>
      ${z(e.label,t.onDismiss)}
      <span class="sidebar-issues-panel__chevron" aria-hidden="true">${C.chevronRight}</span>
    </summary>
    <div class="sidebar-issues-panel__body">
      ${n.length?f`<ul class="sidebar-issues-panel__facts">
              ${n.map(e=>f`<li>${e}</li>`)}
            </ul>`:p}
      <div class="sidebar-issues-panel__actions">
        ${i?f`<button
                type="button"
                class="sidebar-issues-panel__action sidebar-issues-panel__action--primary"
                @click=${()=>t.onNavigate(i.routeId)}
              >
                ${i.label}
              </button>`:p}
        <button
          type="button"
          class="sidebar-issues-panel__action ${i?``:`sidebar-issues-panel__action--primary`}"
          @click=${()=>t.onOpen(e)}
        >
          ${r}
        </button>
      </div>
    </div>
  </details>`}function J(){return(J=e((()=>{d(),g(),S(),s(),O(),l(),a(),ee(),T(),I(),j()})))()}function Y(e){return w(Z[e])}var X,Z;function Q(){return(Q=e((()=>{S(),X=[`all`,`approvals`,`mentions`,`automations`,`system`],Z={all:`attention.tabs.all`,approvals:`attention.tabs.approvals`,mentions:`attention.tabs.mentions`,automations:`attention.tabs.automations`,system:`attention.tabs.system`}})))()}function te(e){let{anchor:n}=e.panelPosition,r=e.panelPosition.anchor===`top`?e.panelPosition.top:e.panelPosition.bottom,i=`left:${e.panelPosition.left}px;${n}:${r}px;--sidebar-issues-panel-${n}:${r}px`,a=e.entries.filter(t=>M(t,e.selectedTab)),o=a.flatMap(e=>e.dismissal?[e.dismissal]:[]),s=e.mentions.snapshot,c=a.flatMap(e=>e.type===`mention`?[e.mention.id]:[]),l=c.filter(e=>!s.dismissing.includes(e)),u=o.length>0||c.length>0,d=o.length>0||l.length>0,m=e.selectedTab===`mentions`,h=(m||e.selectedTab===`all`)&&(s.error!==null||s.phase===`loading`||m&&s.phase===`unavailable`),g=k(e.entries);return f`<button
      type="button"
      class="sidebar-issues-panel__backdrop"
      aria-label=${w(`common.close`)}
      @click=${()=>e.onClose(!0)}
    ></button>
    <openclaw-menu-surface>
      <section
        id="sidebar-issues-panel"
        class="sidebar-issues-panel"
        role="dialog"
        aria-modal=${_()?`true`:p}
        aria-labelledby="sidebar-issues-panel-heading"
        style=${i}
        @keydown=${e.onKeydown}
      >
        <div class="sidebar-issues-panel__grabber" aria-hidden="true"></div>
        <header class="sidebar-issues-panel__header">
          <h2 id="sidebar-issues-panel-heading" class="sidebar-issues-panel__heading">
            <span class="sidebar-issues-panel__heading-icon" aria-hidden="true"
              >${C.inbox}</span
            >
            ${w(`attention.issues`)}
          </h2>
          <div class="sidebar-issues-panel__header-actions">
            <button
              type="button"
              class="btn btn--xs btn--ghost sidebar-issues-panel__dismiss-shown"
              style=${u?p:`visibility:hidden`}
              ?disabled=${!d}
              aria-hidden=${u?p:`true`}
              @click=${()=>{for(let t of o)e.onDismiss(t);l.length>0&&e.mentions.dismiss(l)}}
            >
              ${w(`attention.dismissShown`)}
            </button>
            <button
              type="button"
              class="sidebar-brand__icon sidebar-issues-panel__mobile-close"
              aria-label=${w(`common.close`)}
              @click=${()=>e.onClose(!0)}
            >
              ${C.x}
            </button>
          </div>
        </header>
        ${P({id:`sidebar-issues`,active:e.selectedTab,tabs:X.map(e=>({value:e,label:Y(e),count:g[e]>0?g[e]:null})),ariaLabel:w(`attention.tabs.label`),panelId:`sidebar-issues-tabpanel`,className:`sidebar-issues-panel__tabs`,variant:`sub`,onSelect:e.onSelectTab})}
        <div class="sidebar-issues-panel__list-wrap">
          <div
            id="sidebar-issues-tabpanel"
            class="sidebar-issues-panel__list"
            role="tabpanel"
            aria-labelledby=${`sidebar-issues-tab-${e.selectedTab}`}
            tabindex="0"
            @scroll=${e.onScroll}
          >
            ${h?f`<div class="sidebar-issues-panel__mentions-note" role="status">
                    <span
                      >${w(s.error===null?s.phase===`loading`?`attention.mentions.loading`:`attention.mentions.unavailable`:`attention.mentions.error`)}</span
                    >
                    ${s.error===null?p:f`<span>${s.error}</span>
                            <button
                              type="button"
                              class="sidebar-issues-panel__action"
                              ?disabled=${s.phase===`loading`}
                              @click=${()=>void e.mentions.refresh()}
                            >
                              ${w(`attention.mentions.refresh`)}
                            </button>`}
                  </div>`:p}
            ${a.length===0&&!h?f`<div class="sidebar-issues-panel__empty">
                    <span class="sidebar-issues-panel__empty-icon" aria-hidden="true"
                      >${C.inbox}</span
                    >
                    <strong
                      >${w(m?`attention.mentions.emptyTitle`:`attention.emptyTitle`)}</strong
                    >
                    <span
                      >${w(m?`attention.mentions.emptyBody`:`attention.emptyBody`)}</span
                    >
                  </div>`:p}
            ${a.map(t=>{let n=t.dismissal,r=n?()=>e.onDismiss(n):void 0;switch(t.type){case`approval`:return V({approval:t.approval,context:e.context,onClosePanel:()=>e.onClose(!1),onDecision:e.onApprovalDecision});case`attention`:return q(t,{basePath:e.context.basePath,onDismiss:r,onNavigate:e.onNavigate,onOpen:e.onOpen});case`mention`:return B({mention:t.mention,context:e.context,dismissing:s.dismissing.includes(t.mention.id),onDismiss:()=>void e.mentions.dismiss([t.mention.id]),onClosePanel:()=>e.onClose(!1)});case`scopeUpgrade`:return W({state:t.state,onCancel:()=>e.context.scopeUpgrade.cancel(),onDismiss:r,onRequest:()=>e.context.scopeUpgrade.request(),onRetry:()=>e.context.scopeUpgrade.retry()});case`update`:return H({context:e.context,onDismiss:r,onNavigate:()=>e.onNavigate(`updates`),visible:!0,watchUpdateProgress:e.watchUpdateProgress})}return t})}
          </div>
          <div
            class="sidebar-issues-panel__overflow-cue sidebar-issues-panel__overflow-cue--top"
            ?hidden=${!e.overflowAbove}
            aria-hidden="true"
          ></div>
          <div
            class="sidebar-issues-panel__overflow-cue sidebar-issues-panel__overflow-cue--bottom"
            ?hidden=${!e.overflowBelow}
            aria-hidden="true"
          ></div>
        </div>
        ${m?f`<footer class="sidebar-issues-panel__mentions-note">
                <span>${w(`attention.mentions.retention`)}</span>
                <a
                  href=${y(`notifications`,e.context.basePath)}
                  @click=${n=>{t(n)&&(n.preventDefault(),e.onNavigate(`notifications`))}}
                  >${w(`attention.mentions.notifications`)}</a
                >
              </footer>`:p}
      </section>
    </openclaw-menu-surface>`}function $(){return($=e((()=>{d(),g(),R(),x(),S(),F(),T(),A(),J(),Q(),E()})))()}$();export{L as ScopeUpgradeController,te as renderSidebarAttentionPanel};
//# sourceMappingURL=sidebar-attention-panel.runtime-p9DzX88_.js.map