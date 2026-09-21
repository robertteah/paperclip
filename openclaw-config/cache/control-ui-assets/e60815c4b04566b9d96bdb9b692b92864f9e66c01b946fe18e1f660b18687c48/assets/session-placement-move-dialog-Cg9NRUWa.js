import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Yo as t,qo as n}from"./control-ui-core-DzidtL-P.js";import{K as r,X as i,q as a}from"./lit-runtime-vxhGQLC6.js";import{Bt as o,Ft as s,Gt as c,It as l}from"./control-ui-core-uEI6aN5p.js";import{Ft as u,It as d}from"./control-ui-boot-chat-pu3gR1ly.js";import{D as f,E as p,O as m,T as h,g,h as _}from"./control-ui-boot-new-DeGMjctK.js";function v(e){if(!e)return``;switch(e.kind){case`gateway`:return`gateway`;case`profile`:return`profile:${e.profileId}`;case`device`:return`device:${e.deviceId}`}throw Error(`Unknown session placement move target`)}function y(e){return b?Promise.resolve(null):(b=!0,d(void 0,({render:t,finish:r})=>{let o=!0,l=null,u={profiles:[],devices:[]},d=e.mode===`move`?{kind:`gateway`}:null,h=new _,g=e=>{r(e),b=!1},y=e=>{d=e,S()},x=e=>{if(e.preventDefault(),!d)return;if(d.kind!==`profile`){g(d);return}let t=h.resolve(d.profileId);g({...d,...t?{machineClass:t}:{}})};function S(){let n=v(d),r=e.mode===`restart`;t(()=>i`
          <openclaw-modal-dialog
            label=${c(r?`sessionsView.restartSessionTitle`:`sessionsView.moveSessionTitle`)}
            @modal-cancel=${()=>g(null)}
          >
            <form class="exec-approval-card" @submit=${x}>
              <div class="exec-approval-header">
                <div class="exec-approval-title">
                  ${c(r?`sessionsView.restartSessionTitle`:`sessionsView.moveSessionTitle`)}
                </div>
                <div class="muted">
                  ${c(r?`sessionsView.restartSessionDescription`:`sessionsView.moveSessionDescription`,{session:e.sessionLabel})}
                </div>
              </div>
              ${r?i`<div class="exec-approval-error" role="alert">
                      ${c(`sessionsView.restartSessionWarning`)}
                    </div>`:e.activeRun?i`<div class="exec-approval-error" role="alert">
                        ${c(`sessionsView.moveSessionActiveRunWarning`)}
                      </div>`:i`<div class="callout">
                        ${c(`sessionsView.moveSessionNoReplayWarning`)}
                      </div>`}
              ${o?i`<div class="muted">${c(`common.loading`)}</div>`:l?i`<div class="exec-approval-error" role="alert">${l}</div>`:i`
                        <div class="new-session-page__picker-root">
                          ${r?a:m({value:`gateway`,label:c(`newSession.gateway`),icon:s.monitor,checked:n===`gateway`,onSelect:()=>y({kind:`gateway`})},!1)}
                          ${u.devices.length>0?i`
                                  <div class="new-session-page__menu-title">
                                    ${c(`newSession.yourDevices`)}
                                  </div>
                                  ${u.devices.map(t=>{let r=e.deviceDisabledReason??t.disabledReason;return m({value:`device:${t.deviceId}`,label:t.label,sub:t.subtitle,icon:s.monitor,facts:e.deviceDisabledReason?[e.deviceDisabledReason]:t.facts,checked:n===`device:${t.deviceId}`,disabled:!!e.deviceDisabledReason||!t.selectable,title:r,onSelect:()=>y({kind:`device`,deviceId:t.deviceId})},!1)})}
                                `:a}
                          ${u.profiles.length>0?i`
                                  <div class="new-session-page__menu-title">
                                    ${c(`newSession.cloud`)}
                                  </div>
                                  ${u.profiles.map(t=>{let n=d?.kind===`profile`&&d.profileId===t.id,r=t.machines??[],o=h.resolve(t.id)||r.find(e=>e.default===!0)?.id||``;return i`
                                      ${f({profiles:[t],selectedId:n?t.id:``,submitting:!1,icon:s.server,profileDisabledReason:e.profileDisabledReason,onSelect:e=>y({kind:`profile`,profileId:e})})}
                                      ${n&&r.length>0?i`
                                              <div class="new-session-page__menu-title">
                                                ${c(`newSession.machine`)}
                                              </div>
                                              ${p({machines:r,selectedId:o,submitting:!1,onSelect:e=>h.select(t.id,e,u.profiles,!1,S)})}
                                            `:a}
                                    `})}
                                `:a}
                        </div>
                      `}
              <div class="exec-approval-actions">
                <button
                  type="submit"
                  class="btn primary"
                  ?disabled=${o||!!l||!d}
                >
                  ${c(r?`sessionsView.restartSessionAction`:`sessionsView.moveSessionAction`)}
                </button>
                <button type="button" class="btn" @click=${()=>g(null)}>
                  ${c(`common.cancel`)}
                </button>
              </div>
            </form>
          </openclaw-modal-dialog>
        `)}S(),e.loadCatalog().then(e=>{u=e}).catch(e=>{l=n(e,c(`sessionsView.moveSessionCatalogFailed`))}).finally(()=>{o=!1,S()})}))}var b;function x(){return(x=e((()=>{r(),o(),t(),h(),g(),l(),u(),b=!1})))()}x();export{y as showSessionPlacementTargetDialog};
//# sourceMappingURL=session-placement-move-dialog-Cg9NRUWa.js.map