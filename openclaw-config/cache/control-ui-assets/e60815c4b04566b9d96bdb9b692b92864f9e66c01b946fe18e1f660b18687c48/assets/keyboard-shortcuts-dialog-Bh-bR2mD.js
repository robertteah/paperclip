import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t}from"./control-ui-foundation-DMb6IeIq.js";import{Kc as n,N as r,qc as i}from"./control-ui-core-DzidtL-P.js";import{$ as a,K as o,X as s,at as c,dt as l,q as u,st as d}from"./lit-runtime-vxhGQLC6.js";import{Bt as f,Gt as p,kt as m}from"./control-ui-core-uEI6aN5p.js";import{Xi as h,Yi as g}from"./control-ui-boot-shared-CH-OC11d.js";var _;function v(){return(v=e((()=>{o(),a(),f(),g(),i(),m(),_=class extends n{constructor(...e){super(...e),this.sendShortcut=`enter`,this.open=!1}static{this.styles=l`
    :host {
      display: contents;
      --openclaw-modal-width: 560px;
    }

    .dialog {
      display: flex;
      max-height: min(720px, calc(100dvh - 64px));
      flex-direction: column;
      border: 1px solid var(--border);
      border-radius: 14px;
      background: var(--card);
      color: var(--text);
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 22px 16px;
      border-bottom: 1px solid var(--border);
    }

    h2 {
      margin: 0;
      color: var(--text-strong);
      font-size: 16px;
      font-weight: 600;
    }

    .close {
      display: grid;
      width: 28px;
      height: 28px;
      place-items: center;
      border: 0;
      border-radius: 6px;
      background: transparent;
      color: var(--muted);
      font-size: 20px;
    }

    .close:hover {
      background: var(--bg-hover);
      color: var(--text);
    }

    .body {
      overflow: auto;
      padding: 8px 22px 18px;
    }

    section + section {
      margin-top: 12px;
      border-top: 1px solid var(--border);
    }

    h3 {
      margin: 18px 0 8px;
      color: var(--muted);
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .shortcut-row {
      display: flex;
      min-height: 34px;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      font-size: 13px;
    }

    .combos {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .combo {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    kbd {
      min-width: 22px;
      padding: 3px 6px;
      border: 1px solid var(--border-strong);
      border-radius: 5px;
      background: var(--bg-muted);
      color: var(--text);
      font: inherit;
      font-size: 12px;
      text-align: center;
    }
  `}get isOpen(){return this.open}toggle(){this.open=!this.open}render(){if(!this.open)return u;let e=()=>{this.open=!1};return s`
      <openclaw-modal-dialog label=${p(`shortcutsOverlay.title`)} @modal-cancel=${e}>
        <div class="dialog">
          <header class="header">
            <h2>${p(`shortcutsOverlay.title`)}</h2>
            <button class="close" type="button" aria-label=${p(`common.close`)} @click=${e}>
              <span aria-hidden="true">×</span>
            </button>
          </header>
          <div class="body">
            ${h(this.sendShortcut).map(e=>s`
                <section>
                  <h3>${p(e.label)}</h3>
                  ${e.entries.map(e=>s`
                      <div class="shortcut-row">
                        <span>${p(e.label)}</span>
                        <span class="combos">
                          ${e.combos.map(e=>s`
                              <span class="combo">
                                ${r(e).map(e=>s`<kbd>${e}</kbd>`)}
                              </span>
                            `)}
                        </span>
                      </div>
                    `)}
                </section>
              `)}
          </div>
        </div>
      </openclaw-modal-dialog>
    `}},t([d({attribute:!1})],_.prototype,`sendShortcut`,void 0),t([c()],_.prototype,`open`,void 0),customElements.get(`openclaw-keyboard-shortcuts-dialog`)||customElements.define(`openclaw-keyboard-shortcuts-dialog`,_)})))()}v();
//# sourceMappingURL=keyboard-shortcuts-dialog-Bh-bR2mD.js.map