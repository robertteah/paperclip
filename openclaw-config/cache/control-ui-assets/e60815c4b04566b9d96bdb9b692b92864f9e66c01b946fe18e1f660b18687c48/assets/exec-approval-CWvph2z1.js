import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t}from"./control-ui-foundation-DMb6IeIq.js";import{I as n,Wc as r,j as i,qc as a}from"./control-ui-core-DzidtL-P.js";import{$ as o,K as s,X as c,at as l,nt as u,q as d,st as f}from"./lit-runtime-vxhGQLC6.js";import{Bt as p,Gt as m,kt as h}from"./control-ui-core-uEI6aN5p.js";import{At as g,Dt as _,Et as v,Ot as y,Tt as b,wt as x}from"./control-ui-boot-chat-pu3gR1ly.js";import{Yi as S}from"./control-ui-boot-shared-CH-OC11d.js";function C(e){let t=e.queue.filter(t=>t.id!==e.activeId);return t.length===0?d:c`
    <div class="exec-approval-list" aria-label=${m(`execApproval.otherPending`)}>
      <div class="exec-approval-list__heading">${m(`execApproval.otherPending`)}</div>
      ${t.map(t=>{let n=v(t.request.command),r=t.request.agentId?.trim()||`—`;return c`
          <button
            class="exec-approval-list__item"
            type="button"
            aria-label=${m(`execApproval.reviewRequest`,{agent:r,command:n})}
            @click=${()=>e.onSelect(t.id)}
          >
            <span class="exec-approval-list__agent">${r}</span>
            <span class="exec-approval-list__command mono">${n}</span>
            <openclaw-approval-countdown
              class="exec-approval-list__expiry"
              aria-hidden="true"
              .expiresAtMs=${t.expiresAtMs}
              .compact=${!0}
            ></openclaw-approval-countdown>
          </button>
        `})}
    </div>
  `}function w(e){return e.composedPath().some(e=>e instanceof Element&&e.closest(`input, textarea, [contenteditable]:not([contenteditable='false'])`)!==null)}function T(e){return w(e)?null:n(i.approveAlways,e)?`allow-always`:n(i.modifiedEnter,e)?`allow-once`:n(i.denyApproval,e)?`deny`:null}var E;function D(){return(D=e((()=>{s(),o(),p(),S(),a(),_(),h(),E=class extends r{constructor(...e){super(...e),this.selectedApprovalId=null,this.explicitlyOpen=!1}show(){this.props?.queue.length&&(this.explicitlyOpen=!0,this.updateComplete.then(()=>this.dialog?.show()))}get dialogOpen(){return this.explicitlyOpen&&(this.props?.queue.length??0)>0}handleKeydown(e,t){if(e.defaultPrevented||e.repeat||this.props?.busy||!this.props?.canGrant)return;let n=T(e);!n||!g(t).includes(n)||(e.preventDefault(),this.props?.onDecision(t.id,n))}willUpdate(e){if(e.get(`props`)?.queue.length&&!this.props?.queue.length){this.explicitlyOpen=!1,this.selectedApprovalId=null;return}let t=this.props?.queue??[];t.some(e=>e.id===this.selectedApprovalId)||(this.selectedApprovalId=t.at(0)?.id??null)}render(){let e=this.props,t=e?.queue??[],n=t.find(e=>e.id===this.selectedApprovalId)??t.at(0);return!e||!this.explicitlyOpen||!n?d:c`
      <openclaw-modal-dialog
        label=${b(n)}
        description=${x(n.expiresAtMs,Date.now())}
        @keydown=${e=>this.handleKeydown(e,n)}
        @modal-cancel=${t=>{if(e.busy){t.preventDefault();return}this.explicitlyOpen=!1}}
      >
        <div class="exec-approval-modal-stack">
          ${y({approval:n,busy:e.busy,canGrant:e.canGrant,error:e.errors.get(n.id)??null,variant:`modal`,queueCount:t.length,onDecision:e.onDecision})}
          ${C({queue:t,activeId:n.id,onSelect:e=>{this.selectedApprovalId=e}})}
        </div>
      </openclaw-modal-dialog>
    `}},t([f({attribute:!1})],E.prototype,`props`,void 0),t([u(`openclaw-modal-dialog`)],E.prototype,`dialog`,void 0),t([l()],E.prototype,`selectedApprovalId`,void 0),t([l()],E.prototype,`explicitlyOpen`,void 0),customElements.get(`openclaw-exec-approval`)||customElements.define(`openclaw-exec-approval`,E)})))()}D();
//# sourceMappingURL=exec-approval-CWvph2z1.js.map