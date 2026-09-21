import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Yo as t,qo as n}from"./control-ui-core-DzidtL-P.js";import{K as r,X as i,_ as a,b as o,q as s}from"./lit-runtime-vxhGQLC6.js";import{Bt as c,Ft as l,Gt as u,It as d}from"./control-ui-core-uEI6aN5p.js";import{co as f,lo as p}from"./control-ui-boot-shared-Cyt1Zyts.js";import{Ft as m,It as h}from"./control-ui-boot-chat-pu3gR1ly.js";import{C as g,O as _,S as v,T as y,_ as b,b as x,x as S,y as C}from"./control-ui-boot-new-DeGMjctK.js";function w(e){return T?Promise.resolve():(T=!0,h(void 0,({host:t,render:r,finish:a})=>{let c=e.defaults.cwd,d=!1,f=`checking`,m=0,h=!1,v=null,y=!1,b=new S(e.listDirectory,F),C=()=>{b.reset(),m+=1,a(),T=!1},w=async t=>{if(t.preventDefault(),!(h||f===`checking`||f===`unavailable`)){h=!0,v=null,F();try{v=await e.submit({cwd:c.trim(),worktree:f===`git`&&d})}catch(e){v=n(e)}if(!v){C();return}h=!1,F()}},E=()=>{let e=t.querySelector(`wa-popover.session-group-defaults__folder-popover`);e&&(e.open=!1)},D=()=>{b.reset(),y=!1,F()},O=e=>{c=e.trim(),D(),E(),k(!1)},k=async t=>{let n=++m;f=`checking`,d=!1,v=null,F();try{let r=await e.inspectRepository(c.trim()||void 0);if(n!==m)return;f=r,d=r===`git`&&t&&e.defaults.worktree}catch{if(n!==m)return;f=`unavailable`,d=!1}F()},A=e=>{d=e,v=null,F()},j=e=>{let t=e.detail.item.getAttribute(`value`);(t===`local`||t===`worktree`)&&A(t===`worktree`)},M=e=>{if(!(e.currentTarget instanceof HTMLElement))return;let t=Array.from(e.currentTarget.querySelectorAll(`wa-dropdown-item[data-environment-mode]`)),n=t.find(e=>e.hasAttribute(`data-selected`))??t[0];if(n){for(let e of t)e.active=e===n;n.focus({preventScroll:!0})}},N=e=>{if(!(e.currentTarget instanceof HTMLElement))return;let t=e.currentTarget;e.key!==`Escape`||!t.open||(e.preventDefault(),e.stopPropagation(),t.open=!1,t.querySelector(`#session-group-defaults-mode-trigger`)?.focus({preventScroll:!0}))},P=()=>{y=!0,b.navigate(c||void 0)};function F(){let t=c.trim(),n=t?g(t):u(`sessionsView.groupDefaultsCwdPlaceholder`),a=f===`checking`?`checking`:f===`git`?`git`:`local`,m=[{value:`local`,label:u(`sessionsView.groupDefaultsLocal`),description:u(`newSession.checkoutCurrentNote`),icon:l.monitor},{value:`worktree`,label:u(`sessionsView.groupDefaultsWorktree`),description:u(`sessionsView.groupDefaultsWorktreeHint`),icon:l.gitBranch}],S=m[+!!d];r(()=>i`
          <openclaw-modal-dialog
            label=${u(`sessionsView.groupDefaultsTitle`,{group:e.group})}
            @modal-cancel=${e=>{if(h){e.preventDefault();return}C()}}
          >
            <form class="exec-approval-card session-group-defaults" @submit=${w}>
              <div class="exec-approval-header">
                <div>
                  <div class="exec-approval-title">
                    ${u(`sessionsView.groupDefaultsTitle`,{group:e.group})}
                  </div>
                  <div class="exec-approval-sub">${u(`sessionsView.groupDefaultsDescription`)}</div>
                </div>
              </div>
              <div class="session-group-defaults__fields">
                <div class="field">
                  <span>${u(`sessionsView.groupDefaultsCwd`)}</span>
                  <button
                    id="session-group-defaults-folder-trigger"
                    type="button"
                    class="new-session-page__trigger session-group-defaults__folder"
                    aria-label="${u(`sessionsView.groupDefaultsCwd`)}: ${n}"
                    aria-haspopup="dialog"
                    ?disabled=${h}
                  >
                    <span class="new-session-page__target-icon" aria-hidden="true"
                      >${l.folder}</span
                    >
                    <span class="session-group-defaults__folder-copy">
                      <strong>${n}</strong>
                      <small title=${t||s}
                        >${t||u(`sessionsView.groupDefaultsCwdHint`)}</small
                      >
                    </span>
                    <span class="new-session-page__trigger-chevron" aria-hidden="true"
                      >${l.chevronDown}</span
                    >
                  </button>
                  <wa-popover
                    class="new-session-page__select new-session-page__project-popover new-session-page__picker-popover session-group-defaults__folder-popover"
                    for="session-group-defaults-folder-trigger"
                    placement="bottom-start"
                    without-arrow
                    @wa-hide=${D}
                  >
                    ${y?x({browser:b,id:`session-group-defaults-browser`,label:u(`newSession.gateway`),registerProjectPath:null,registeringProject:!1,onBack:D,onRegisterProject:()=>void 0,onClose:D,onApplyFolder:O}):i`
                            <div class="new-session-page__picker-root">
                              ${_({value:`agent-workspace`,label:u(`sessionsView.groupDefaultsCwdPlaceholder`),icon:l.folder,checked:!t,onSelect:()=>O(``)},h)}
                              <button
                                type="button"
                                class="session-menu__item"
                                data-value="browse"
                                aria-pressed="false"
                                ?disabled=${h}
                                @click=${P}
                              >
                                <span class="session-menu__check" aria-hidden="true"></span>
                                <span class="session-menu__text">${u(`newSession.browse`)}</span>
                                <span class="new-session-page__menu-chevron" aria-hidden="true"
                                  >${l.chevronRight}</span
                                >
                              </button>
                            </div>
                          `}
                  </wa-popover>
                </div>
                <div class="field">
                  <span>${u(`sessionsView.groupDefaultsMode`)}</span>
                  <div
                    class="session-group-defaults__environment"
                    data-session-group-environment=${a}
                    aria-live="polite"
                  >
                    ${f===`git`?i`
                            <wa-dropdown
                              class="session-group-defaults__mode-dropdown"
                              placement="bottom-start"
                              aria-label=${u(`sessionsView.groupDefaultsMode`)}
                              @wa-select=${j}
                              @wa-after-show=${M}
                              @keydown=${N}
                            >
                              <button
                                id="session-group-defaults-mode-trigger"
                                slot="trigger"
                                type="button"
                                class="session-group-defaults__resolved-mode session-group-defaults__mode-trigger"
                                data-value=${S.value}
                                aria-label=${`${u(`sessionsView.groupDefaultsMode`)}: ${S.label}`}
                                ?disabled=${h}
                              >
                                <span class="new-session-page__target-icon" aria-hidden="true"
                                  >${S.icon}</span
                                >
                                <span class="session-group-defaults__resolved-copy">
                                  <strong>${S.label}</strong>
                                  <small>${S.description}</small>
                                </span>
                                <span class="new-session-page__trigger-chevron" aria-hidden="true"
                                  >${l.chevronDown}</span
                                >
                              </button>
                              ${m.map(e=>{let t=e===S;return i`
                                  <wa-dropdown-item
                                    class="session-group-defaults__mode-option"
                                    data-environment-mode=${e.value}
                                    ?data-selected=${t}
                                    aria-label=${`${e.label}, ${e.description}`}
                                    value=${e.value}
                                    type="checkbox"
                                    .checked=${t}
                                    ?disabled=${h}
                                    ${o(e=>p(e,t))}
                                  >
                                    <span
                                      slot="icon"
                                      class="new-session-page__target-icon session-group-defaults__mode-option-icon"
                                      aria-hidden="true"
                                      >${e.icon}</span
                                    >
                                    <span class="session-group-defaults__resolved-copy">
                                      <strong>${e.label}</strong>
                                      <small>${e.description}</small>
                                    </span>
                                  </wa-dropdown-item>
                                `})}
                            </wa-dropdown>
                          `:i`
                            <div
                              class="session-group-defaults__resolved-mode"
                              role=${f===`checking`?`status`:s}
                            >
                              <span class="new-session-page__target-icon" aria-hidden="true"
                                >${f===`checking`?l.gitBranch:l.monitor}</span
                              >
                              <span class="session-group-defaults__resolved-copy">
                                <strong
                                  >${u(f===`checking`?`newSession.checkingGit`:`sessionsView.groupDefaultsLocal`)}</strong
                                >
                                ${f===`checking`?s:i`<small
                                        >${u(f===`unavailable`?`newSession.gitCheckUnavailable`:`newSession.checkoutCurrentNote`)}</small
                                      >`}
                              </span>
                            </div>
                          `}
                  </div>
                </div>
              </div>
              ${v?i`<div class="exec-approval-error" role="alert">${v}</div>`:s}
              <div class="exec-approval-actions">
                <button
                  type="submit"
                  class="btn primary"
                  ?disabled=${h||f===`checking`||f===`unavailable`}
                >
                  ${u(`common.save`)}
                </button>
                ${f===`unavailable`?i`
                        <button
                          type="button"
                          class="btn"
                          ?disabled=${h}
                          @click=${()=>void k(c.trim()===e.defaults.cwd.trim())}
                        >
                          ${u(`common.retry`)}
                        </button>
                      `:s}
                <button type="button" class="btn" ?disabled=${h} @click=${C}>
                  ${u(`common.cancel`)}
                </button>
              </div>
            </form>
          </openclaw-modal-dialog>
        `)}k(!0)}))}var T;function E(){return(E=e((()=>{r(),a(),c(),t(),y(),v(),C(),d(),m(),f(),b(),T=!1})))()}E();export{w as showSessionGroupDefaultsDialog};
//# sourceMappingURL=session-group-defaults-dialog-BiJamN6J.js.map