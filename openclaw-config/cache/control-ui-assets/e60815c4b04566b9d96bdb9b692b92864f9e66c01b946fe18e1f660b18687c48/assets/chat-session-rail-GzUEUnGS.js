import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t}from"./control-ui-foundation-DMb6IeIq.js";import{Bt as n,Gc as r,Vt as i,Zt as a,nn as o,on as s,qc as c,rn as l,zt as u}from"./control-ui-core-DzidtL-P.js";import{$ as d,K as f,X as p,_ as m,at as h,b as g,q as _,r as v,st as y,t as b}from"./lit-runtime-vxhGQLC6.js";import{Bt as x,Ft as S,Gt as C,It as w,Nt as T}from"./control-ui-core-uEI6aN5p.js";import{Nn as E,Pn as D,co as O}from"./control-ui-boot-shared-Cyt1Zyts.js";import{Bt as k,Jt as A,qt as j,zt as M}from"./control-ui-boot-chat-pu3gR1ly.js";import{Jo as N,qo as P}from"./control-ui-boot-shared-CH-OC11d.js";function F(e){return e.digest?e.running?e.activeRunId&&e.digest.runId===e.activeRunId?e.digest:null:e.digest:null}function I(e,t){return(e.health===`done`||e.health===`failed`)&&(t??0)<e.updatedAt}function L(e){return C(`chat.rail.health.${e}`)}function R(e){return C(`chat.pullRequests.${e===`draft`?`draft`:e}`)}function z(e){let t=e.checks;return t?t.state===`passing`?C(`chat.rail.checksPassing`,{count:String(t.passed)}):t.state===`failing`?C(`chat.rail.checksFailing`,{count:String(t.failed)}):C(`chat.rail.checksPending`,{count:String(t.running)}):null}function B(e){return e.exchanges.length>0||e.pendingQuestion!==null||e.failedQuestion!==null||e.draft.length>0}function V(e){return W[e]}var H,U,W,G;function K(){return(K=e((()=>{f(),d(),m(),b(),w(),E(),M(),j(),T(),O(),x(),s(),N(),c(),u(),H=class{constructor(e=n()){this.displayPreference=e,this.autoExpandedRunIds=new Set,this.autoExpandedRunId=null,this.transientExpanded=!1,this.manualOpen=!1}resetTransientState(){this.transientExpanded=!1,this.autoExpandedRunId=null,this.manualOpen=!1}tryAutoOpen(){return this.displayPreference!==`off`&&(this.transientExpanded=!0,!0)}mode(e){let t=F(e),n=t!==null&&(e.running||I(t,e.lastReadAt))||e.hasCompanionActivity||this.manualOpen||this.transientExpanded;if(this.displayPreference===`off`||!n)return this.autoExpandedRunId=null,`hidden`;let r=e.activeRunId??t?.runId??null;return(t?.health===`stuck`||t?.health===`waiting-on-user`)&&r&&!this.autoExpandedRunIds.has(r)&&(this.autoExpandedRunIds.add(r),this.autoExpandedRunId=r),this.displayPreference===`card`||this.transientExpanded||r!==null&&this.autoExpandedRunId===r?`expanded`:`pill`}expand(){this.displayPreference=`card`,this.transientExpanded=!1,this.autoExpandedRunId=null,i(`card`)}collapse(){this.displayPreference=`pill`,this.transientExpanded=!1,this.autoExpandedRunId=null,this.manualOpen=!1,i(`pill`)}hide(){this.displayPreference=`off`,this.resetTransientState(),i(`off`)}openExplicitly(){this.displayPreference=`pill`,this.transientExpanded=!0,this.autoExpandedRunId=null,this.manualOpen=!0,i(`pill`)}},U=[`changed`,`stopped`,`remaining`],W={busy:`chat.rail.askBusy`,"history-unavailable":`chat.rail.askHistoryUnavailable`,missing:`chat.rail.askMissing`,"model-unavailable":`chat.rail.askModelUnavailable`,"rate-limited":`chat.rail.askRateLimited`,unavailable:`chat.rail.askUnavailable`},G=class extends r{constructor(...e){super(...e),this.sessionKey=``,this.digest=null,this.running=!1,this.activeRunId=null,this.pullRequests=[],this.companion={exchanges:[],loading:!1,pendingQuestion:null,failedQuestion:null,hint:null,retryable:!1,draft:``},this.connected=!1,this.command=null,this.consumedCommandGeneration=0,this.embedded=!1,this.now=Date.now(),this.railState=new H,this.clock=null,this.renderedMode=`hidden`,this.reportedMode=null,this.terminalAgeReference=Date.now()}disconnectedCallback(){this.stopClock(),super.disconnectedCallback()}willUpdate(e){e.has(`sessionKey`)&&(this.terminalAgeReference=Date.now(),this.railState.resetTransientState()),e.has(`digest`)&&this.digest&&(this.digest.health===`done`||this.digest.health===`failed`)&&(this.terminalAgeReference=Date.now()),e.has(`command`)&&this.applyPaneCommand()}applyPaneCommand(){let e=this.command;if(!(!e||e.generation<=this.consumedCommandGeneration)){if(this.onCommandConsumed?.(e.generation),e.intent===`open`){this.railState.tryAutoOpen()&&this.onVisibilityChange?.(!0);return}if(this.renderedMode===`expanded`){this.railState.collapse();return}this.railState.openExplicitly(),this.onVisibilityChange?.(!0)}}updated(){this.running&&this.startedAt!=null&&F(this.input())?this.scheduleClock():this.stopClock(),this.reportedMode!==this.renderedMode&&(this.reportedMode=this.renderedMode,this.onModeChange?.(this.renderedMode))}input(){return{running:this.running,activeRunId:this.activeRunId,digest:this.digest,lastReadAt:this.lastReadAt,hasCompanionActivity:B(this.companion)}}scheduleClock(){this.clock===null&&(this.clock=globalThis.setTimeout(()=>{this.clock=null,this.now=Date.now()},1e3))}stopClock(){this.clock!==null&&(globalThis.clearTimeout(this.clock),this.clock=null)}collapse(){this.railState.collapse(),this.requestUpdate()}expand(){this.railState.expand(),this.requestUpdate()}hide(){this.railState.hide(),this.onVisibilityChange?.(!1),this.requestUpdate()}submit(){let e=this.companion.draft.trim();!e||!this.connected||this.companion.pendingQuestion||!this.onSubmit||this.onSubmit(e)}renderStatus(e){let t=e.health===`done`||e.health===`failed`,n=e.health===`stuck`||e.health===`waiting-on-user`;return p`
      <span
        class="chat-session-rail__status ${n?`chat-session-rail__status--critical`:``}"
        data-health=${e.health}
      >
        ${t?p`<span class="chat-session-rail__status-icon" aria-hidden="true"
                >${e.health===`done`?S.check:S.x}</span
              >`:p`<span class="chat-session-rail__status-dot" aria-hidden="true"></span>`}
        <span>${L(e.health)}</span>
      </span>
    `}renderPullRequests(){let e=this.pullRequests.slice(0,2);return e.length===0?_:p`
      <div class="chat-session-rail__prs" aria-label=${C(`chat.rail.pullRequests`)}>
        ${e.map(e=>{let t=z(e);return p`
            <a
              class="chat-session-rail__pr"
              href=${e.url}
              target="_blank"
              rel="noopener noreferrer"
              title=${e.title}
            >
              <span>#${e.number}</span>
              <span>${R(e.state)}</span>
              ${t?p`<span class="chat-session-rail__pr-checks">${t}</span>`:_}
            </a>
          `})}
      </div>
    `}renderDigestDetails(e){return e?p`
      ${e.assessment?p`<p class="chat-session-rail__assessment">${e.assessment}</p>`:_}
      ${this.renderPullRequests()}
    `:_}renderExchange(e,t,n){return p`
      <article class="chat-session-rail__exchange">
        <div class="chat-session-rail__question" dir=${P(e)}>
          ${e}
        </div>
        <div class="chat-session-rail__answer" dir=${P(t)}>
          ${v(D(t))}
        </div>
        <time class="chat-session-rail__timestamp" datetime=${new Date(n).toISOString()}>
          ${C(`chat.rail.asOf`,{time:l(n,{hour:`numeric`,minute:`2-digit`},``)})}
        </time>
      </article>
    `}renderStarters(){let e=!this.connected||this.companion.pendingQuestion!==null;return p`
      <div class="chat-session-rail__starters">
        ${U.map(t=>{let n=C(`chat.rail.starters.${t}`);return p`
            <button
              class="chip chat-session-rail__starter"
              type="button"
              ?disabled=${e}
              @click=${()=>this.onSubmit?.(n)}
            >
              ${S.spark}<span>${n}</span>
            </button>
          `})}
      </div>
    `}renderThread(){let e=`${this.companion.exchanges.length}:${this.companion.pendingQuestion??``}:${this.companion.failedQuestion??``}`;return p`
      <div class="chat-session-rail__thread" aria-live="polite" ${g(t=>{!(t instanceof HTMLElement)||t.dataset.railScrollKey===e||(t.dataset.railScrollKey=e,t.scrollTop=t.scrollHeight)})}>
        ${this.companion.loading&&this.companion.exchanges.length===0?A(`chat`,C(`chat.thread.loading`)):_}
        ${!this.companion.loading&&this.companion.exchanges.length===0&&!this.companion.pendingQuestion?k({icon:S.bot,heading:C(`chat.sidePanel.companion`),description:C(`chat.rail.empty`)}):_}
        ${this.companion.exchanges.map(e=>this.renderExchange(e.question,e.answer,e.ts))}
        ${this.companion.failedQuestion&&this.companion.hint?p`
                <article class="chat-session-rail__exchange chat-session-rail__exchange--error">
                  <div class="chat-session-rail__question">${this.companion.failedQuestion}</div>
                  <div class="chat-session-rail__hint">
                    ${C(V(this.companion.hint))}
                  </div>
                  ${this.companion.retryable&&this.connected&&this.onSubmit?p`
                          <button
                            class="btn btn--secondary chat-session-rail__retry"
                            type="button"
                            @click=${()=>this.onSubmit?.(this.companion.failedQuestion??``)}
                          >
                            ${C(`chat.rail.askRetry`)}
                          </button>
                        `:_}
                </article>
              `:_}
        ${this.companion.pendingQuestion?p`
                <article class="chat-session-rail__exchange chat-session-rail__exchange--pending">
                  <div class="chat-session-rail__question">${this.companion.pendingQuestion}</div>
                  <div class="chat-session-rail__hint">${C(`chat.rail.askPending`)}</div>
                </article>
              `:_}
      </div>
    `}render(){let e=this.input(),t=this.embedded?`expanded`:this.railState.mode(e);if(this.renderedMode=t,t===`hidden`)return _;let n=F(e);if(t===`pill`)return p`
        <div class="chat-session-rail chat-session-rail--pill" aria-live="polite">
          ${n?this.renderStatus(n):_}
          <button
            class="chat-session-rail__expand"
            type="button"
            aria-label=${C(`chat.rail.expand`)}
            @click=${()=>this.expand()}
          >
            <span class="chat-session-rail__headline"
              >${n?.headline??C(`chat.rail.title`)}</span
            >
          </button>
          <button
            class="btn btn--ghost btn--icon chat-icon-btn chat-session-rail__hide"
            type="button"
            aria-label=${C(`chat.rail.close`)}
            @click=${()=>this.hide()}
          >
            ${S.x}
          </button>
          <button
            class="btn btn--ghost btn--icon chat-icon-btn chat-session-rail__toggle"
            type="button"
            aria-label=${C(`chat.rail.expand`)}
            @click=${()=>this.expand()}
          >
            ${S.chevronDown}
          </button>
        </div>
      `;let r=this.running&&this.startedAt!=null?a(Math.max(0,this.now-this.startedAt)):null,i=n&&(n.health===`done`||n.health===`failed`)?C(`chat.rail.finished`,{time:o(Math.max(0,this.terminalAgeReference-n.updatedAt))}):null;return p`
      <section
        class="chat-session-rail chat-session-rail--expanded ${this.embedded?`chat-session-rail--embedded`:``}"
        role="region"
        aria-label=${C(`chat.rail.title`)}
        tabindex="-1"
        @keydown=${e=>{!this.embedded&&e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),this.collapse())}}
      >
        ${this.embedded?_:p`<header class="rail-header chat-session-rail__header">
                <div class="rail-header__copy chat-session-rail__header-copy">
                  <div class="chat-session-rail__status-row">
                    ${n?this.renderStatus(n):p`<strong>${C(`chat.rail.title`)}</strong>`}
                    ${r?p`<span class="chat-session-rail__timing">${r}</span>`:i?p`<span class="chat-session-rail__timing">${i}</span>`:_}
                  </div>
                  ${n?p`<strong class="chat-session-rail__headline"
                          >${n.headline}</strong
                        >`:p`<span class="chat-session-rail__subtitle"
                          >${C(`chat.rail.subtitle`)}</span
                        >`}
                </div>
                <div class="rail-header__actions chat-session-rail__actions">
                  <button
                    class="rail-header__action chat-session-rail__hide"
                    type="button"
                    aria-label=${C(`chat.rail.close`)}
                    @click=${()=>this.hide()}
                  >
                    ${S.x}
                  </button>
                  <button
                    class="rail-header__action chat-session-rail__toggle"
                    type="button"
                    aria-label=${C(`chat.rail.collapse`)}
                    @click=${()=>this.collapse()}
                  >
                    ${S.chevronUp}
                  </button>
                </div>
              </header>`}
        ${n?p`<div class="chat-session-rail__digest">${this.renderDigestDetails(n)}</div>`:_}
        ${this.renderThread()}
        ${this.companion.exchanges.length===0&&!this.companion.pendingQuestion?this.renderStarters():_}
        <form
          class="agent-chat__input chat-session-rail__composer"
          @submit=${e=>{e.preventDefault(),this.submit()}}
        >
          <div class="agent-chat__composer-input-row">
            <label class="agent-chat__composer-combobox chat-session-rail__prompt">
              <input
                class="chat-session-rail__input"
                type="text"
                maxlength="400"
                autocomplete="off"
                aria-label=${C(`chat.rail.askLabel`)}
                .value=${this.companion.draft}
                placeholder=${this.companion.pendingQuestion?C(`chat.rail.askPending`):C(`chat.rail.askPlaceholder`)}
                ?disabled=${!this.connected||this.companion.pendingQuestion!==null}
                @input=${e=>{this.onDraftChange?.(e.currentTarget.value)}}
              />
            </label>
          </div>
          <div class="agent-chat__composer-footer">
            <div class="agent-chat__composer-trail">
              <div class="agent-chat__composer-actions">
                <button
                  class="chat-send-btn"
                  type="submit"
                  aria-label=${C(`chat.rail.askSubmit`)}
                  ?disabled=${!this.connected||this.companion.pendingQuestion!==null||!this.companion.draft.trim()}
                >
                  ${S.arrowUp}
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    `}},t([y({attribute:!1})],G.prototype,`sessionKey`,void 0),t([y({attribute:!1})],G.prototype,`digest`,void 0),t([y({attribute:!1})],G.prototype,`running`,void 0),t([y({attribute:!1})],G.prototype,`activeRunId`,void 0),t([y({attribute:!1})],G.prototype,`startedAt`,void 0),t([y({attribute:!1})],G.prototype,`lastReadAt`,void 0),t([y({attribute:!1})],G.prototype,`pullRequests`,void 0),t([y({attribute:!1})],G.prototype,`companion`,void 0),t([y({attribute:!1})],G.prototype,`connected`,void 0),t([y({attribute:!1})],G.prototype,`command`,void 0),t([y({attribute:!1})],G.prototype,`consumedCommandGeneration`,void 0),t([y({attribute:!1})],G.prototype,`onCommandConsumed`,void 0),t([y({attribute:!1})],G.prototype,`onSubmit`,void 0),t([y({attribute:!1})],G.prototype,`onDraftChange`,void 0),t([y({attribute:!1})],G.prototype,`onModeChange`,void 0),t([y({attribute:!1})],G.prototype,`onVisibilityChange`,void 0),t([y({type:Boolean})],G.prototype,`embedded`,void 0),t([h()],G.prototype,`now`,void 0),customElements.get(`openclaw-chat-session-rail`)||customElements.define(`openclaw-chat-session-rail`,G)})))()}K();export{G as ChatSessionRailElement,H as ChatSessionRailState};
//# sourceMappingURL=chat-session-rail-GzUEUnGS.js.map