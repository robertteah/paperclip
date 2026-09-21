import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,L as n,R as r}from"./control-ui-foundation-DMb6IeIq.js";import{Gc as i,Gn as a,Kn as o,Yo as s,qc as c,qo as l}from"./control-ui-core-DzidtL-P.js";import{$ as u,K as d,X as f,at as p,q as m}from"./lit-runtime-vxhGQLC6.js";import{A as h,Tn as g,cn as _,h as v,k as y,m as b,sn as x,zn as S}from"./control-ui-core-CaKBexnk.js";import{Bt as C,Gt as w,Ut as T}from"./control-ui-core-uEI6aN5p.js";import{Et as E,Nt as D,Pt as O,jt as k,kt as A,wt as j}from"./control-ui-boot-shared-Cyt1Zyts.js";import{r as M,t as N}from"./approval-result-validators-CsyskIHI.js";import{n as P,t as F}from"./settings-workspace-IBRfeTG9.js";function I(e,t){if(e.revokedAtMs!==null)return w(`standingGrants.stateRevoked`);if(e.expiresAtMs!==null&&e.expiresAtMs<=t)return w(`standingGrants.stateExpired`);if(e.expiresAtMs!==null){let n=Math.max(1,Math.ceil((e.expiresAtMs-t)/864e5));return w(`standingGrants.stateExpiresIn`,{count:String(n)})}return w(`standingGrants.stateUntilRevoked`)}function L(e,t){return e.revokedAtMs===null&&(e.expiresAtMs===null||e.expiresAtMs>t)}function R(e){return new Intl.DateTimeFormat(T.getLocale(),{dateStyle:`medium`,timeStyle:`short`}).format(new Date(e))}function z(e){switch(e){case`exec`:return w(`approvalHistory.kinds.exec`);case`plugin`:return w(`approvalHistory.kinds.plugin`);case`system-agent`:return w(`approvalHistory.kinds.systemAgent`)}return e}function B(e){switch(e){case`allowed`:return w(`approvalHistory.statuses.allowed`);case`denied`:return w(`approvalHistory.statuses.denied`);case`expired`:return w(`approvalHistory.statuses.expired`);case`cancelled`:return w(`approvalHistory.statuses.cancelled`)}return e}function V(e){switch(e){case`allow-once`:return w(`approvalHistory.decisions.allowOnce`);case`allow-always`:return w(`approvalHistory.decisions.allowAlways`);case`deny`:return w(`approvalHistory.decisions.deny`);case void 0:return w(`approvalHistory.notApplicable`)}return e}function H(e){switch(e){case`user`:return w(`approvalHistory.reasons.user`);case`timeout`:return w(`approvalHistory.reasons.timeout`);case`malformed-verdict`:return w(`approvalHistory.reasons.malformedVerdict`);case`no-route`:return w(`approvalHistory.reasons.noRoute`);case`run-aborted`:return w(`approvalHistory.reasons.runAborted`);case`gateway-restart`:return w(`approvalHistory.reasons.gatewayRestart`);case`storage-corrupt`:return w(`approvalHistory.reasons.storageCorrupt`)}return e}function U(e){let t=e.presentation;return(t.kind===`exec`?t.commandText:t.title)||w(`approvalHistory.unknown`)}function W(e){let t=[e.source?.agentId,e.source?.sessionKey].filter(e=>!!e);return t.length>0?t.join(` · `):w(`approvalHistory.unknown`)}function G(e){return e.resolver?e.resolver.id?`${e.resolver.kind} · ${e.resolver.id}`:e.resolver.kind:w(`approvalHistory.unknown`)}var K,q,J,Y;function X(){return(X=e((()=>{r(),d(),u(),N(),g(),v(),y(),x(),j(),F(),C(),s(),c(),o(),K=50,q=`operator.approvals`,J=`https://docs.openclaw.ai/tools/exec-approvals`,Y=class extends i{constructor(...e){super(...e),this.items=[],this.grants=[],this.grantsError=null,this.revokingGrantId=null,this.nextCursor=null,this.loading=!1,this.loadingMore=!1,this.error=null,this.connected=!1,this.approvalsAccess=!0,this.client=null,this.gatewaySource=null,this.requestGeneration=0,this.hasLoaded=!1,this.historyRefreshPending=!1,this.subscriptions=new a(this).effect(()=>this.context?.gateway,e=>{this.gatewaySource!==e&&this.resetHistory(!0),this.gatewaySource=e,this.applyGatewaySnapshot(e.snapshot);let t=e.subscribe(t=>{this.gatewaySource===e&&this.context.gateway===e&&this.applyGatewaySnapshot(t)}),n=e.subscribeEvents(t=>{this.gatewaySource!==e||this.context.gateway!==e||!this.approvalsAccess||!_(e.snapshot).canReviewApprovals||!h(t.event,t.payload)||(this.historyRefreshPending=!0,!this.loading&&!this.loadingMore&&this.loadPage(!0))});return()=>{t(),n()}})}disconnectedCallback(){this.subscriptions.clear(),this.resetHistory(!1),this.gatewaySource=null,super.disconnectedCallback()}resetHistory(e){this.requestGeneration+=1,this.loading=!1,this.loadingMore=!1,this.historyRefreshPending=!1,e&&(this.hasLoaded=!1,this.items=[],this.nextCursor=null,this.error=null)}applyGatewaySnapshot(e){let t=e.client!==this.client,n=e.phase===`connected`!==this.connected,r=_(e).canReviewApprovals,i=r!==this.approvalsAccess;this.connected=e.phase===`connected`,this.approvalsAccess=r,t||i?(this.client=e.client,this.resetHistory(!0)):n&&(this.resetHistory(!1),e.phase===`connected`&&(this.hasLoaded=!1)),e.phase===`connected`&&e.client&&this.approvalsAccess&&!this.hasLoaded&&!this.loading&&this.loadPage(!0)}async loadPage(e){let t=this.client,n=this.gatewaySource;if(!t||!n||!this.connected||!this.approvalsAccess||!_(n.snapshot).canReviewApprovals||this.loading||this.loadingMore)return;let r=this.requestGeneration,i=e?void 0:this.nextCursor??void 0;if(!e&&!i)return;e?(this.historyRefreshPending=!1,this.loading=!0):this.loadingMore=!0,this.error=null;let a=()=>this.isConnected&&this.connected&&this.approvalsAccess&&this.gatewaySource===n&&this.context.gateway===n&&n.snapshot.phase===`connected`&&_(n.snapshot).canReviewApprovals&&this.client===t&&this.requestGeneration===r;try{let n=await t.request(`approval.history`,{...i?{cursor:i}:{},limit:K});if(!M(n))throw Error(w(`approvalHistory.invalidResponse`));if(!a())return;this.items=e?n.items:[...this.items,...n.items],this.nextCursor=n.nextCursor??null,this.hasLoaded=!0,e&&this.loadGrants(t,a)}catch(e){a()&&(this.error=l(e),this.hasLoaded=!0)}finally{a()&&(this.loading=!1,this.loadingMore=!1,this.historyRefreshPending&&this.loadPage(!0))}}async loadGrants(e,t){try{let n=await e.request(`exec.approval.grants.list`,{});if(!t())return;this.grants=Array.isArray(n.grants)?n.grants:[],this.grantsError=null}catch(e){t()&&(this.grantsError=l(e))}}async revokeGrant(e){let t=this.client;if(!(!t||this.revokingGrantId!==null)){this.revokingGrantId=e;try{await t.request(`exec.approval.grants.revoke`,{grantId:e});let n=Date.now();this.grants=this.grants.map(t=>t.grantId===e?{...t,revokedAtMs:n}:t),this.grantsError=null}catch(e){this.grantsError=l(e)}finally{this.revokingGrantId=null}}}renderGrants(){let e=Date.now();return f`
      <h2 class="settings-section-title">${w(`standingGrants.title`)}</h2>
      <p class="settings-section-subtitle">${w(`standingGrants.description`)}</p>
      ${this.grantsError?f`<div class="callout danger">${this.grantsError}</div>`:m}
      <div class="data-table-container">
        <table class="data-table standing-grants-table settings-table--stacked" role="table">
          <thead>
            <tr>
              <th scope="col">${w(`standingGrants.columns.automation`)}</th>
              <th scope="col">${w(`standingGrants.columns.command`)}</th>
              <th scope="col">${w(`standingGrants.columns.uses`)}</th>
              <th scope="col">${w(`standingGrants.columns.state`)}</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            ${this.grants.length===0?f`
                    <tr>
                      <td colspan="5" class="data-table-empty-cell">
                        <div class="data-table-empty-state" role="status" aria-live="polite">
                          ${w(`standingGrants.empty`)}
                        </div>
                      </td>
                    </tr>
                  `:this.grants.map(t=>f`
                      <tr>
                        <td data-label=${w(`standingGrants.columns.automation`)}>
                          ${t.cronJobName??t.cronJobId}
                        </td>
                        <td class="mono" data-label=${w(`standingGrants.columns.command`)}>
                          ${t.command}
                        </td>
                        <td data-label=${w(`standingGrants.columns.uses`)}>${t.useCount}</td>
                        <td data-label=${w(`standingGrants.columns.state`)}>
                          ${I(t,e)}
                        </td>
                        <td>
                          ${L(t,e)?f`
                                  <button
                                    class="btn btn--sm"
                                    ?disabled=${this.revokingGrantId!==null}
                                    @click=${()=>void this.revokeGrant(t.grantId)}
                                  >
                                    ${this.revokingGrantId===t.grantId?w(`standingGrants.revoking`):w(`standingGrants.revoke`)}
                                  </button>
                                `:m}
                        </td>
                      </tr>
                    `)}
          </tbody>
        </table>
      </div>
    `}renderTable(){return this.loading&&this.items.length===0?A(k({label:w(`approvalHistory.loading`)})):f`
      <div class="data-table-container">
        <table class="data-table approval-history-table settings-table--stacked" role="table">
          <thead>
            <tr>
              <th scope="col">${w(`approvalHistory.columns.resolved`)}</th>
              <th scope="col">${w(`approvalHistory.columns.kind`)}</th>
              <th scope="col">${w(`approvalHistory.columns.request`)}</th>
              <th scope="col">${w(`approvalHistory.columns.decision`)}</th>
              <th scope="col">${w(`approvalHistory.columns.reason`)}</th>
              <th scope="col">${w(`approvalHistory.columns.source`)}</th>
              <th scope="col">${w(`approvalHistory.columns.resolver`)}</th>
            </tr>
          </thead>
          <tbody>
            ${this.items.length===0?f`
                    <tr>
                      <td colspan="7" class="data-table-empty-cell">
                        <div class="data-table-empty-state" role="status" aria-live="polite">
                          ${this.error||!this.hasLoaded?w(`approvalHistory.unknown`):w(`approvalHistory.empty`)}
                        </div>
                      </td>
                    </tr>
                  `:this.items.map(e=>f`
                      <tr>
                        <td data-label=${w(`approvalHistory.columns.resolved`)}>
                          ${R(e.resolvedAtMs)}
                        </td>
                        <td data-label=${w(`approvalHistory.columns.kind`)}>
                          ${z(e.presentation.kind)}
                        </td>
                        <td class="mono" data-label=${w(`approvalHistory.columns.request`)}>
                          ${U(e)}
                        </td>
                        <td data-label=${w(`approvalHistory.columns.decision`)}>
                          ${B(e.status)} ·
                          ${V(`decision`in e?e.decision:void 0)}
                        </td>
                        <td data-label=${w(`approvalHistory.columns.reason`)}>
                          ${H(e.reason)}
                        </td>
                        <td class="mono" data-label=${w(`approvalHistory.columns.source`)}>
                          ${W(e)}
                        </td>
                        <td class="mono" data-label=${w(`approvalHistory.columns.resolver`)}>
                          ${G(e)}
                        </td>
                      </tr>
                    `)}
          </tbody>
        </table>
      </div>
      <div class="data-table-pagination">
        <div class="data-table-pagination__info">${w(`approvalHistory.retention`)}</div>
        <div class="data-table-pagination__controls">
          ${this.nextCursor?f`
                  <button ?disabled=${this.loadingMore} @click=${()=>void this.loadPage(!1)}>
                    ${this.loadingMore?w(`approvalHistory.loadingMore`):w(`approvalHistory.loadMore`)}
                  </button>
                `:m}
        </div>
      </div>
    `}render(){let e=D(f`
        ${this.connected?m:f`<div class="callout warn">${w(`approvalHistory.offline`)}</div>`}
        ${this.connected&&!this.approvalsAccess?f`
                <div class="callout warn" role="status">
                  ${w(`common.disabled`)} · <code>${q}</code>
                </div>
              `:m}
        ${this.approvalsAccess&&this.error?f`
                <div class="callout danger">
                  ${this.error}
                  <button class="btn btn--sm" @click=${()=>void this.loadPage(!0)}>
                    ${w(`common.retry`)}
                  </button>
                </div>
              `:m}
        ${this.approvalsAccess?this.renderGrants():m}
        ${this.approvalsAccess?f`<h2 class="settings-section-title">${w(`standingGrants.historyTitle`)}</h2>`:m}
        ${this.approvalsAccess?this.renderTable():m}
      `,{wide:!0});return f`
      ${O({title:S(`approvals`),subtitle:f`${w(`approvalHistory.description`)}
        ${E(J)}`})}
      ${P(e)}
    `}},t([n({context:b,subscribe:!0})],Y.prototype,`context`,void 0),t([p()],Y.prototype,`items`,void 0),t([p()],Y.prototype,`grants`,void 0),t([p()],Y.prototype,`grantsError`,void 0),t([p()],Y.prototype,`revokingGrantId`,void 0),t([p()],Y.prototype,`nextCursor`,void 0),t([p()],Y.prototype,`loading`,void 0),t([p()],Y.prototype,`loadingMore`,void 0),t([p()],Y.prototype,`error`,void 0),t([p()],Y.prototype,`connected`,void 0),t([p()],Y.prototype,`approvalsAccess`,void 0),customElements.get(`openclaw-approvals-page`)||customElements.define(`openclaw-approvals-page`,Y)})))()}X();
//# sourceMappingURL=approvals-page-BO3zmuH0.js.map