import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Yo as t,qo as n}from"./control-ui-core-DzidtL-P.js";import{K as r,X as i,q as a}from"./lit-runtime-vxhGQLC6.js";import{Bt as o,Ft as s,Gt as c,It as l}from"./control-ui-core-uEI6aN5p.js";function u(e){let{widget:t}=e,n=t.declared?.netOrigins??[],r=t.declared?.tools??[];return i`
    <div class="board-widget__grant board-widget__grant--pending" data-test-id="board-pending">
      <div class="board-widget__grant-mark" aria-hidden="true">!</div>
      <strong>${c(`board.widget.needsApproval`)}</strong>
      ${n.length>0||r.length>0?i`<div class="board-widget__grant-groups">
              ${n.length>0?i`<section>
                      <strong>${c(`board.widget.networkAccess`)}</strong>
                      <ul class="board-widget__grant-summary">
                        ${n.map(e=>i`<li>${e}</li>`)}
                      </ul>
                    </section>`:a}
              ${r.length>0?i`<section>
                      <strong>${c(`board.widget.hostTools`)}</strong>
                      <ul class="board-widget__grant-summary">
                        ${r.map(e=>i`<li>${e}</li>`)}
                      </ul>
                    </section>`:a}
            </div>`:t.declaredSummary?.length?i`<ul class="board-widget__grant-summary">
                ${t.declaredSummary.map(e=>i`<li>${e}</li>`)}
              </ul>`:i`<span>${c(`board.widget.needsApprovalDetail`)}</span>`}
      <div class="board-widget__grant-actions">
        <button
          class="btn btn--small btn--primary"
          type="button"
          data-test-id="board-grant-allow"
          ?disabled=${e.disabled}
          @click=${()=>e.onGrant(`granted`)}
        >
          ${c(`board.widget.allow`)}
        </button>
        <button
          class="btn btn--small"
          type="button"
          data-test-id="board-grant-reject"
          ?disabled=${e.disabled}
          @click=${()=>e.onGrant(`rejected`)}
        >
          ${c(`board.widget.reject`)}
        </button>
      </div>
      ${e.error??a}
    </div>
  `}function d(e){if(e.grantState!==`granted`||!e.declared)return a;let t=[...(e.declared.netOrigins??[]).map(e=>c(`board.widget.networkCapability`,{capability:e})),...(e.declared.tools??[]).map(e=>c(`board.widget.toolCapability`,{capability:e}))];return t.length===0?a:i`
    <openclaw-tooltip
      .content=${`${c(`board.widget.activeCapabilities`)}\n${t.join(`
`)}`}
    >
      <span class="board-widget__capabilities" data-test-id="board-capabilities-granted">
        ${c(`board.widget.granted`)}
      </span>
    </openclaw-tooltip>
  `}function f(){return(f=e((()=>{r(),o()})))()}function p(e){let t=e.querySelector(`.board-widget__menu`);t&&(t.open=!1)}function m(e){let{widget:t,tabs:n,disabled:r,onSelect:o}=e,l=n.filter(e=>e.tabId!==t.tabId);return i`
    <wa-dropdown class="board-widget__menu" placement="bottom-end" @wa-select=${o}>
      <button
        class="board-widget__menu-trigger"
        slot="trigger"
        type="button"
        aria-label=${c(`board.widget.menuLabel`)}
        title=${c(`board.widget.menuLabel`)}
      >
        ⋮
      </button>
      <div class="board-widget__menu-heading">${c(`board.widget.moveToTab`)}</div>
      ${l.length>0?l.map(e=>i`
                <wa-dropdown-item value=${`move:${e.tabId}`} ?disabled=${r}>
                  ${e.title}
                </wa-dropdown-item>
              `):i`<span class="board-widget__menu-empty">${c(`board.widget.noOtherTabs`)}</span>`}
      <div class="board-widget__menu-heading">${c(`board.widget.resize`)}</div>
      ${Object.entries(b).map(([e,t])=>i`
          <wa-dropdown-item
            class="board-widget__preset"
            value=${`resize:${e}`}
            ?disabled=${r}
          >
            ${e.toUpperCase()}
            <span slot="details">${t.w}×${t.h}</span>
          </wa-dropdown-item>
        `)}
      ${t.contentKind===`html`?i`<wa-dropdown-item
              class="board-widget__preset"
              type="checkbox"
              value="height:auto"
              ?checked=${t.heightMode!==`fixed`}
              ?disabled=${r}
            >
              ${c(`board.widget.autoHeight`)}
            </wa-dropdown-item>`:a}
      <div class="board-widget__menu-separator" role="separator"></div>
      <wa-dropdown-item class="board-widget__menu-danger" value="remove" ?disabled=${r}>
        <span slot="icon" class="board-widget__menu-icon" aria-hidden="true">${s.trash}</span>
        ${c(`board.widget.remove`)}
      </wa-dropdown-item>
    </wa-dropdown>
  `}function h(e){return u(e)}function g(e){return i`
    <div class="board-widget__grant board-widget__grant--rejected" data-test-id="board-rejected">
      <strong>${c(`board.widget.rejected`)}</strong>
      <span>${c(`board.widget.rejectedDetail`)}</span>
      <button
        class="btn btn--small"
        type="button"
        ?disabled=${e.disabled}
        @click=${e.onRemove}
      >
        ${c(`board.widget.remove`)}
      </button>
    </div>
  `}function _(e){return i`
    <div class="board-widget__disabled-plugin" data-test-id="board-disabled-plugin">
      ${e.content??i`<strong>${c(`board.widget.disabledPlugin`,{pluginId:e.pluginId})}</strong>`}
      <button
        class="btn btn--small"
        type="button"
        ?disabled=${e.disabled}
        @click=${e.onRemove}
      >
        ${c(`board.widget.remove`)}
      </button>
    </div>
  `}function v(e,t){let r=n(e);return i`
    <div class="board-widget__error" role="alert" data-test-id="board-widget-error">
      <strong>${c(`board.widget.errorTitle`)}</strong>
      <span>${c(`board.widget.errorDetail`)}</span>
      <details>
        <summary>${c(`board.widget.errorShow`)}</summary>
        <code>${r}</code>
      </details>
      ${t?i`<button class="btn btn--small" type="button" @click=${t}>
              ${c(`board.widget.retry`)}
            </button>`:a}
    </div>
  `}function y(e,t=!1){return i`
    <div
      class=${`board-widget__error ${t?`board-widget__error--inline`:``}`}
      role="alert"
      data-test-id="board-widget-action-error"
    >
      <strong>${c(`board.widget.actionErrorTitle`)}</strong>
      <span>${c(`board.widget.actionErrorDetail`)}</span>
      <details>
        <summary>${c(`board.widget.errorShow`)}</summary>
        <code>${e}</code>
      </details>
    </div>
  `}var b;function x(){return(x=e((()=>{r(),o(),t(),l(),f(),b={sm:{w:3,h:3},md:{w:6,h:4},lg:{w:8,h:6},xl:{w:12,h:8}}})))()}export{y as a,h as c,d,_ as i,g as l,p as n,v as o,x as r,m as s,b as t,f as u};
//# sourceMappingURL=board-widget-cell-render-Citc6lM7.js.map