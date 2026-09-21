import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Jt as t,on as n}from"./control-ui-core-DzidtL-P.js";import{K as r,X as i,q as a}from"./lit-runtime-vxhGQLC6.js";import{Bt as o,Ft as s,Gt as c,It as l,kt as u}from"./control-ui-core-uEI6aN5p.js";import{Cr as d,Er as f,Jr as p,Kr as m,qr as h,wr as g}from"./control-ui-boot-shared-Cyt1Zyts.js";function _(e){return c(e===`limited`?`devices.pairing.limitedAccess`:e===`node`?`devices.pairing.nodeAccessSummary`:`devices.pairing.fullAccessSummary`)}function v(e){if(!e.open)return a;let n=e.lifecycle,r=c(`devices.pairing.title`),o=n.phase===`success`?c(`devices.pairing.pairedTitle`):n.phase===`delivery-uncertain`?c(`devices.pairing.deliveryUncertainTitle`):n.phase===`expired`?c(`devices.pairing.expiredTitle`):c(`devices.pairing.subtitle`),l=c(`devices.pairing.copySetupCode`),u=n.phase===`waiting`?n.setup:null,p=u?.gatewayUrls??(u?[u.gatewayUrl]:[]),g=n.access===`node`,v=g?b:y,S=u?`openclaw node run --pair "oc-pair://${u.setupCode}"`:``,C=!!(u&&u.expiresAtMs<=e.nowMs),w=n.phase!==`success`&&n.phase!==`delivery-uncertain`&&n.phase!==`reconciling`&&(n.phase!==`error`||n.source!==`status`),T=n.phase===`selection`||n.phase===`error`&&n.source===`create`;return i`
    <openclaw-modal-dialog label=${r} description=${o} @modal-cancel=${e.onClose}>
      <section class="device-pair-setup">
        <header class="device-pair-setup__header">
          <div class="device-pair-setup__phone" aria-hidden="true">
            ${g?s.server:s.smartphone}
          </div>
          <div>
            <h2>${r}</h2>
            <p>${o}</p>
            ${n.phase!==`success`&&!g?i`<p class="device-pair-setup__get-apps">
                    ${c(`devices.pairing.noApp`)}
                    <button type="button" @click=${e.onGetApps}>
                      ${c(`devices.pairing.getApps`)}
                    </button>
                  </p>`:a}
          </div>
          <button
            class="btn btn--icon btn--ghost device-pair-setup__close"
            type="button"
            aria-label=${c(`common.dismiss`)}
            @click=${e.onClose}
          >
            ${s.x}
          </button>
        </header>

        <div class="device-pair-setup__body">
          ${w?i`<fieldset class="device-pair-setup__access" ?disabled=${!T}>
                  <legend>${c(`devices.pairing.accessTitle`)}</legend>
                  ${x.map(([t,r,a])=>i`<label>
                      <input
                        type="radio"
                        name="device-pair-access"
                        .checked=${n.access===t}
                        @change=${()=>e.onAccessChange(t)}
                      />
                      <span>
                        <strong>${c(r)}</strong>
                        <small>${c(a)}</small>
                      </span>
                    </label>`)}
                </fieldset>`:a}
          ${n.phase===`selection`?i`
                  <button class="btn primary" type="button" @click=${e.onRefresh}>
                    ${g?s.server:s.smartphone}
                    ${c(`devices.pairing.generateCode`)}
                  </button>
                `:a}
          ${n.phase===`loading`?i`
                  <div class="device-pair-setup__loading" role="status" aria-live="polite">
                    <span class="device-pair-setup__spinner" aria-hidden="true"></span>
                    <span>${c(`devices.pairing.generating`)}</span>
                  </div>
                `:a}
          ${n.phase===`reconciling`?i`
                  <div class="device-pair-setup__loading" role="status" aria-live="polite">
                    <span class="device-pair-setup__spinner" aria-hidden="true"></span>
                    <span>${c(`common.loading`)}</span>
                  </div>
                `:a}
          ${n.phase===`error`?i`
                  <div class="callout danger device-pair-setup__error" role="alert">
                    <strong
                      >${c(n.source===`status`?`devices.pairing.statusFailed`:`devices.pairing.failed`)}</strong
                    >
                    <span>${n.message}</span>
                  </div>
                  <button class="btn primary" type="button" @click=${e.onRefresh}>
                    ${s.refresh} ${c(`common.reload`)}
                  </button>
                `:a}
          ${u?i`
                  ${g?i`<div class="device-pair-setup__command">
                          ${C?a:i`<div class="login-gate__command">
                                  <code>${S}</code>
                                  ${f(S,c(`connection.help.copyCommand`))}
                                </div>`}
                          <p class="device-pair-setup__waiting" role="timer" aria-live="off">
                            ${C?c(`devices.pairing.nodeExpired`):c(`devices.pairing.nodeExpiresIn`,{time:t(u.expiresAtMs,e.nowMs)})}
                          </p>
                        </div>`:i`<div class="device-pair-setup__qr-frame">
                          ${u.qrDataUrl?i`<img
                                  class="device-pair-setup__qr"
                                  src=${u.qrDataUrl}
                                  alt=${c(`devices.pairing.qrAlt`)}
                                  width="360"
                                  height="360"
                                  draggable="false"
                                />`:i`<div class="device-pair-setup__qr-unavailable">
                                  ${c(`devices.pairing.qrUnavailable`)}
                                </div>`}
                        </div>`}

                  <div class="device-pair-setup__meta">
                    <span class="settings-status settings-status--accent">
                      <span class="settings-status__dot"></span>
                      ${u.auth}
                    </span>
                    <div class="device-pair-setup__gateways">
                      ${p.map(e=>i`
                          <span class="device-pair-setup__gateway" title=${e}
                            >${e}</span
                          >
                        `)}
                    </div>
                  </div>

                  ${u.accessDowngraded?i`
                          <div class="callout warn device-pair-setup__access-warning" role="status">
                            <strong>${c(`devices.pairing.transportLimitedTitle`)}</strong>
                            <span>${c(`devices.pairing.transportLimitedHint`)}</span>
                          </div>
                        `:a}

                  <div class="device-pair-setup__actions">
                    ${g?a:i`<button
                            class="btn primary"
                            type="button"
                            @click=${e=>void d(e,u.setupCode,l)}
                          >
                            ${s.copy} <span data-copy-label>${l}</span>
                          </button>`}
                    <button class="btn" type="button" @click=${e.onRefresh}>
                      ${s.refresh} ${c(`devices.pairing.newCode`)}
                    </button>
                  </div>

                  <details class="device-pair-setup__fallback">
                    <summary>${c(`devices.pairing.showSetupCode`)}</summary>
                    <code>${u.setupCode}</code>
                  </details>

                  ${e.pendingCount>0?i`
                          <div class="callout warn device-pair-setup__pending">
                            <span>
                              ${c(`devices.pairing.pending`,{count:String(e.pendingCount)})}
                            </span>
                            <button class="btn btn--sm" @click=${e.onManageDevices}>
                              ${c(`devices.pairing.review`)}
                            </button>
                          </div>
                        `:i`<p class="device-pair-setup__waiting">
                          ${c(g?`devices.pairing.nodeWaiting`:`devices.pairing.waiting`)}
                        </p>`}
                `:a}
          ${n.phase===`success`?i`<div class="device-pair-setup__state" role="status" aria-live="polite">
                  <div
                    class="device-pair-setup__state-icon device-pair-setup__state-icon--success"
                    aria-hidden="true"
                  >
                    ${s.badgeCheck}
                  </div>
                  <h3>${n.deviceName??c(`devices.pairing.pairedTitle`)}</h3>
                  <p>
                    ${n.deviceName?i`${c(`devices.pairing.pairedTitle`)}
                            <span aria-hidden="true">·</span> `:a}${_(n.access)}
                  </p>
                  <button class="btn primary" type="button" @click=${e.onClose}>
                    ${c(`devices.pairing.done`)}
                  </button>
                </div>`:a}
          ${n.phase===`delivery-uncertain`?i`<div class="device-pair-setup__state" role="alert">
                  <div class="device-pair-setup__state-icon" aria-hidden="true">
                    ${s.alertTriangle}
                  </div>
                  <h3>${c(`devices.pairing.deliveryUncertainTitle`)}</h3>
                  <p>${c(`devices.pairing.deliveryUncertainHint`)}</p>
                  <div class="device-pair-setup__actions">
                    <button class="btn primary" type="button" @click=${e.onRefresh}>
                      ${s.refresh} ${c(`devices.pairing.generateNewCode`)}
                    </button>
                  </div>
                </div>`:a}
          ${n.phase===`expired`?i`<div class="device-pair-setup__state" role="status" aria-live="polite">
                  <div class="device-pair-setup__state-icon" aria-hidden="true">
                    ${s.refresh}
                  </div>
                  <h3>${c(`devices.pairing.expiredTitle`)}</h3>
                  <button class="btn primary" type="button" @click=${e.onRefresh}>
                    ${s.refresh} ${c(`devices.pairing.generateNewCode`)}
                  </button>
                </div>`:a}
        </div>

        <footer class="device-pair-setup__footer">
          <a
            href=${v}
            target=${m}
            rel=${h()}
            aria-label=${c(`devices.pairing.helpNewTab`)}
          >
            <span>${c(`devices.pairing.help`)}</span>
            <span class="device-pair-setup__external-icon" aria-hidden="true"
              >${s.externalLink}</span
            >
          </a>
          <button class="btn btn--ghost" type="button" @click=${e.onManageDevices}>
            ${c(`devices.pairing.manageDevices`)}
          </button>
        </footer>
      </section>
    </openclaw-modal-dialog>
  `}var y,b,x;function S(){return(S=e((()=>{r(),g(),l(),u(),o(),p(),n(),y=`https://docs.openclaw.ai/channels/pairing#pair-from-the-control-ui-recommended`,b=`https://docs.openclaw.ai/gateway/pairing#one-paste-node-pairing`,x=[[`full`,`devices.pairing.fullAccess`,`devices.pairing.fullAccessHint`],[`limited`,`devices.pairing.limitedAccess`,`devices.pairing.limitedAccessHint`],[`node`,`devices.pairing.nodeAccess`,`devices.pairing.nodeAccessHint`]]})))()}S();export{v as renderDevicePairSetup};
//# sourceMappingURL=view-pairing.runtime-DGu-RsU5.js.map