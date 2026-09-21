import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{J as t,K as n,X as r,q as i}from"./lit-runtime-vxhGQLC6.js";import{F as a,N as o,T as s,w as c}from"./control-ui-core-CaKBexnk.js";import{Bt as l,Gt as u,kt as d}from"./control-ui-core-uEI6aN5p.js";import{n as f,t as p}from"./en-update-actions-63CyaUZa.js";import{t as m}from"./update-run-view-Dzp5fok2.js";function h(e,t){let n=e?.currentVersion?.trim(),r=n?u(`updates.target.version`,{version:n}):null,i=c(t,e);if(r&&i){let n=t?.target?.kind===`git`||e?.commitsBehind!==void 0;return u(n?`updates.confirm.versionsBehind`:`updates.confirm.versions`,{available:i,installed:r})}return r??i??void 0}function g(e){return u(e?`updates.dialog.installing`:`updates.dialog.disconnected`)}async function _(e){if(b)return;let n=document.createElement(`div`);document.body.append(n),document.body.classList.add(y);let o=e.viaNativeApp?{confirmLabel:u(`updates.confirm.macAction`),message:u(`updates.confirm.macMessage`),title:u(`chat.sidebar.updateMacAndGateway`)}:{confirmLabel:u(`updates.confirm.action`),message:u(`updates.confirm.message`),title:u(`chat.sidebar.updateGateway`)},s=h(e.updateAvailable,e.updateSchedule);await new Promise(c=>{let l=e.existingRun?{kind:`run`,run:e.existingRun,connected:!0}:{kind:`confirm`},d=!1,f,p,m=!1,h=()=>{d||(d=!0,f?.(),p!==void 0&&globalThis.clearTimeout(p),t(i,n),n.remove(),document.body.classList.remove(y),b=!1,c())},_=()=>{!d&&l.kind===`run`&&l.run.status!==`running`&&e.onAcknowledge?.(),h()},x=(e,t)=>{let n=e(e=>{if(!d){if(l.kind===`run`&&!e.run){h();return}t(e)}});d?n():f=n};b=!0;let S=()=>{if(d)return;let a=l,c=a.kind===`run`?a.run:null,p=a.kind===`run`?a.readError:null,m=a.kind===`working`||c?.status===`running`,h=a.kind===`failed`||c!==null&&c.status!==`running`&&c.status!==`succeeded`,v=c!==null&&c.status!==`running`,y=a.kind===`run`?p??``:a.kind===`failed`?a.message:a.kind===`working`?g(a.connected):`${o.message} ${u(`updates.confirm.impact`)}`;t(r`
          <openclaw-modal-dialog label=${o.title} description=${y} @modal-cancel=${_}>
            <div class="exec-approval-card update-run-dialog">
              <div class="exec-approval-header">
                <div>
                  <div class="exec-approval-title">${o.title}</div>
                  <div class="exec-approval-sub" style="white-space: pre-line">${y}</div>
                </div>
              </div>
              ${s&&a.kind===`confirm`?r`<div class="exec-approval-command mono">${s}</div>`:i}
              ${a.kind===`run`?r`<openclaw-update-run-view
                      .run=${a.run}
                      .connected=${a.connected}
                    ></openclaw-update-run-view>`:i}
              <div class="exec-approval-actions">
                ${h||v||p?r` ${(h||p)&&e.onCheckStatus?r`<button type="button" class="btn" @click=${()=>void e.onCheckStatus?.()}>${u(`updates.dialog.checkStatus`)}</button>`:i}
                        ${h?r`<button
                                type="button"
                                class="btn primary"
                                @click=${()=>{l={kind:`confirm`},f?.(),S()}}
                              >
                                ${u(`updates.dialog.retryUpdate`)}
                              </button>`:i}
                        ${h&&e.onReviewUpdate?r`<button
                                type="button"
                                class="btn"
                                @click=${()=>{_(),e.onReviewUpdate?.()}}
                              >
                                ${u(`updates.reviewUpdate`)}
                              </button>`:i}
                        <button type="button" class="btn" autofocus @click=${_}>
                          ${u(`common.close`)}
                        </button>`:r`
                        <button
                          type="button"
                          class="btn danger ${m?`btn--busy`:``}"
                          ?disabled=${m}
                          @click=${C}
                        >
                          ${m?r`<span class="btn__spinner" aria-hidden="true"></span>${u(`chat.updating`)}`:o.confirmLabel}
                        </button>
                        <button type="button" class="btn" autofocus @click=${_}>
                          ${u(m?`common.close`:`common.cancel`)}
                        </button>
                      `}
              </div>
            </div>
          </openclaw-modal-dialog>
        `,n)};function C(){if(l.kind!==`confirm`)return;if(e.viaNativeApp&&a()){_();return}let t=e.watchUpdateProgress;if(!t){e.startGatewayUpdate(),_();return}m=!1,p!==void 0&&globalThis.clearTimeout(p),l={kind:`working`,connected:!0},S(),e.startGatewayUpdate();let n=!0;x(t,e=>{let t=n;if(n=!1,l.kind===`confirm`)return;if(e.run&&(!t||e.run.status===`running`)){m=!0,l={kind:`run`,run:e.run,connected:e.connected,readError:e.readError},S();return}let r=e.failure??e.readError;if(r&&!t){l={kind:`failed`,message:r},S();return}m||=e.busy,l={kind:`working`,connected:e.connected},S()}),!d&&(p=globalThis.setTimeout(()=>{d||m||l.kind!==`working`||(l={kind:`failed`,message:u(`updates.dialog.notStarted`)},S())},v))}e.existingRun&&e.watchUpdateProgress&&x(e.watchUpdateProgress,e=>{e.run&&(l={kind:`run`,run:e.run,connected:e.connected,readError:e.readError},S())}),S()})}var v,y,b;function x(){return(x=e((()=>{n(),l(),p(),d(),m(),o(),s(),f(),v=4e3,y=`update-dialog-open`,b=!1})))()}x();export{_ as confirmAndStartUpdateRuntime};
//# sourceMappingURL=update-confirmation.runtime-iCb27FdA.js.map