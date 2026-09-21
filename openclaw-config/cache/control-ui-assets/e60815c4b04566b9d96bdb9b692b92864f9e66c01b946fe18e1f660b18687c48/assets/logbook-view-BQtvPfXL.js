import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Jo as t,Yo as n,Zt as r,on as i,rn as a}from"./control-ui-core-DzidtL-P.js";import{K as o,X as s,q as c,r as l,t as u}from"./lit-runtime-vxhGQLC6.js";import{Bt as d,Ft as f,Gt as p,It as m}from"./control-ui-core-uEI6aN5p.js";import{Nn as h,Pn as g}from"./control-ui-boot-shared-Cyt1Zyts.js";import{a as _,c as v,d as y,i as b,l as x,n as S,o as C,r as w,s as T,t as E,u as D}from"./logbook-controller-AIgupk6R.js";function O(e,t){return a(e,{hour:`2-digit`,minute:`2-digit`,timeZone:t},``)}function k(e){let t=0;for(let n=0;n<e.length;n+=1)t=t*31+e.charCodeAt(n)|0;return Math.abs(t)%360}function A(e){let n=e.captureEnabled&&!e.capturePaused&&!e.lastCaptureError,r=e.capturePaused?p(`logbook.status.paused`):e.captureEnabled?p(`logbook.status.capturing`,{seconds:String(e.captureIntervalSeconds)}):p(`logbook.status.disabled`);return s`
    <div class="logbook__chips">
      <span class="logbook__chip ${n?`logbook__chip--ok`:`logbook__chip--warn`}">
        <span class="logbook__chip-dot"></span>
        ${r}
      </span>
      ${e.nodeName||e.nodeId?s`<span class="logbook__chip" title=${p(`logbook.status.nodeHelp`)}>
              ${f.monitor} ${e.nodeName??e.nodeId}
            </span>`:c}
      ${e.pendingFrames>0?s`<span class="logbook__chip" title=${p(`logbook.status.pendingHelp`)}>
              ${p(`logbook.status.pending`,{count:String(e.pendingFrames)})}
            </span>`:c}
      ${e.analysisRunning?s`<span class="logbook__chip logbook__chip--busy"
              >${p(`logbook.status.analyzing`)}</span
            >`:c}
      ${e.lastCaptureError?s`<span
              class="logbook__chip logbook__chip--error"
              title=${t(e.lastCaptureError)}
            >
              ${p(`logbook.status.captureError`)}
            </span>`:c}
      ${e.lastBatch?.status===`error`?s`<span
              class="logbook__chip logbook__chip--error"
              title=${t(e.lastBatch.error)}
            >
              ${p(`logbook.status.batchError`)}
            </span>`:c}
      ${e.visionModelSource===`missing`?s`<span
              class="logbook__chip logbook__chip--warn"
              title=${p(`logbook.status.modelMissingHelp`)}
            >
              ${p(`logbook.status.modelMissing`)}
            </span>`:c}
    </div>
  `}function j(e,n,i,a){let o=e.expandedCardIds.has(i.id),l=k(i.category),u=i.keyframeId!==void 0&&!e.framePreviewFailed.has(i.keyframeId)?i.keyframeId:void 0,d=u===void 0?void 0:e.framePreviews.get(u);return o&&u!==void 0&&!d&&C(e,n,u),s`
    <article
      class="logbook-card ${o?`logbook-card--expanded`:``}"
      style="--logbook-hue: ${l}"
    >
      <button
        class="logbook-card__header"
        type="button"
        @click=${()=>{let t=new Set(e.expandedCardIds);o?t.delete(i.id):t.add(i.id),e.expandedCardIds=t,e.requestUpdate?.()}}
      >
        <span class="logbook-card__time">
          ${O(i.startMs,a)}<span class="logbook-card__time-sep">–</span
          >${O(i.endMs,a)}
        </span>
        <span class="logbook-card__stripe" aria-hidden="true"></span>
        <span class="logbook-card__heading">
          <span class="logbook-card__title">${i.title}</span>
          <span class="logbook-card__summary">${i.summary}</span>
        </span>
        <span class="logbook-card__meta">
          <span class="logbook-card__category">${i.category}</span>
          ${i.appPrimary?s`<span class="logbook-card__app">${i.appPrimary}</span>`:c}
          <span class="logbook-card__duration"
            >${r(i.endMs-i.startMs)??`0s`}</span
          >
        </span>
      </button>
      ${o?s`
              <div class="logbook-card__body">
                ${d?s`<img
                        class="logbook-card__keyframe"
                        src=${d}
                        alt=${p(`logbook.card.keyframeAlt`)}
                      />`:u===void 0?c:s`<div class="logbook-card__keyframe logbook-card__keyframe--loading">
                          ${p(`common.loading`)}
                        </div>`}
                ${i.detail?s`<p class="logbook-card__detail">${t(i.detail)}</p>`:c}
                ${i.distractions.length>0?s`
                        <div class="logbook-card__distractions">
                          <span class="logbook-card__distractions-label">
                            ${p(`logbook.card.distractions`)}
                          </span>
                          ${i.distractions.map(e=>s`
                              <span class="logbook-card__distraction">
                                ${O(e.startMs,a)} · ${e.title}
                              </span>
                            `)}
                        </div>
                      `:c}
              </div>
            `:c}
    </article>
  `}function M(e){let t=e.timeline?.stats;if(!t||t.trackedMs<=0)return c;let n=Math.max(0,t.trackedMs-t.distractionMs),i=Math.round(n/t.trackedMs*100),a=t.categories[0]?.ms??1;return s`
    <section class="card logbook-side__card">
      <div class="card-title">${p(`logbook.stats.title`)}</div>
      <div class="logbook-stats__focus">
        <div class="logbook-stats__focus-bar">
          <div class="logbook-stats__focus-fill" style="width: ${i}%"></div>
        </div>
        <div class="logbook-stats__focus-legend">
          <span>${p(`logbook.stats.focus`,{pct:String(i)})}</span>
          <span
            >${p(`logbook.stats.tracked`,{duration:r(t.trackedMs)??`0s`})}</span
          >
        </div>
      </div>
      <div class="logbook-stats__categories">
        ${t.categories.slice(0,6).map(e=>s`
            <div
              class="logbook-stats__category"
              style="--logbook-hue: ${k(e.category)}"
            >
              <span class="logbook-stats__category-name">${e.category}</span>
              <span class="logbook-stats__category-bar">
                <span
                  class="logbook-stats__category-fill"
                  style="width: ${Math.max(6,Math.round(e.ms/a*100))}%"
                ></span>
              </span>
              <span class="logbook-stats__category-time"
                >${r(e.ms)??`0s`}</span
              >
            </div>
          `)}
      </div>
      ${t.apps.length>0?s`
              <div class="logbook-stats__apps">
                ${t.apps.slice(0,5).map(e=>s`<span class="logbook-stats__app">${e.domain}</span>`)}
              </div>
            `:c}
    </section>
  `}function N(e,t){return s`
    <section class="card logbook-side__card">
      <div class="logbook-side__card-header">
        <div class="card-title">${p(`logbook.standup.title`)}</div>
        <button
          class="btn btn--small"
          type="button"
          ?disabled=${e.standupLoading}
          @click=${()=>void T(e,t,e.standup!==null)}
        >
          ${e.standupLoading?p(`common.loading`):e.standup?p(`logbook.standup.refresh`):p(`logbook.standup.generate`)}
        </button>
      </div>
      ${e.standup?s`<div class="logbook-standup__body markdown-body">
              ${l(g(e.standup.text))}
            </div>`:s`<div class="card-sub">${p(`logbook.standup.empty`)}</div>`}
    </section>
  `}function P(e,t){return s`
    <section class="card logbook-side__card">
      <div class="card-title">${p(`logbook.ask.title`)}</div>
      <form
        class="logbook-ask__form"
        @submit=${n=>{n.preventDefault(),E(e,t)}}
      >
        <input
          class="logbook-ask__input"
          type="text"
          .value=${e.askQuestion}
          placeholder=${p(`logbook.ask.placeholder`)}
          @input=${t=>{e.askQuestion=t.target.value}}
        />
        <button class="btn btn--small" type="submit" ?disabled=${e.askLoading}>
          ${e.askLoading?p(`common.loading`):p(`logbook.ask.submit`)}
        </button>
      </form>
      ${e.askAnswer?s`<p class="logbook-ask__answer">${e.askAnswer}</p>`:c}
    </section>
  `}function F(e){let t=w(e.host);t.requestUpdate=e.onRequestUpdate??null;let n=e.connected;S(t,n?e.client:null,n),n&&!t.timeline&&!t.loading&&!t.error&&_(t,e.client);let r=t.status?.today??v(),i=t.day===r,a=t.status,o=t.timeline?.cards??[];return s`
    <section class="logbook">
      <header class="logbook__header">
        <div class="logbook__daynav">
          <button
            class="btn btn--small"
            type="button"
            aria-label=${p(`logbook.nav.previousDay`)}
            @click=${()=>void _(t,e.client,{day:y(t.day,-1)})}
          >
            ‹
          </button>
          <span class="logbook__day">${t.day}</span>
          <button
            class="btn btn--small"
            type="button"
            aria-label=${p(`logbook.nav.nextDay`)}
            ?disabled=${i}
            @click=${()=>void _(t,e.client,{day:y(t.day,1)})}
          >
            ›
          </button>
          ${i?c:s`<button
                  class="btn btn--small"
                  type="button"
                  @click=${()=>void _(t,e.client,{today:!0})}
                >
                  ${p(`logbook.nav.today`)}
                </button>`}
        </div>
        ${t.status?A(t.status):c}
        <div class="logbook__actions">
          ${t.status?s`<button
                  class="btn btn--small"
                  type="button"
                  ?disabled=${t.actionPending||!t.status.captureEnabled}
                  @click=${()=>void D(t,e.client,!t.status?.capturePaused)}
                >
                  ${t.status.capturePaused?p(`logbook.actions.resume`):p(`logbook.actions.pause`)}
                </button>`:c}
          <button
            class="btn btn--small"
            type="button"
            ?disabled=${t.actionPending}
            @click=${()=>void x(t,e.client)}
          >
            ${p(`logbook.actions.analyzeNow`)}
          </button>
          <button
            class="btn btn--small"
            type="button"
            ?disabled=${t.loading}
            @click=${()=>void _(t,e.client)}
          >
            ${f.refresh}
          </button>
        </div>
      </header>
      ${t.error?s`<div class="callout danger" role="alert">${t.error}</div>`:c}
      <div class="logbook__layout">
        <div class="logbook__timeline">
          ${t.loading&&o.length===0?s`<div class="card-sub">${p(`common.loading`)}</div>`:c}
          ${!t.loading&&o.length===0&&!t.error?s`
                  <div class="logbook__empty">
                    <div class="logbook__empty-title">${p(`logbook.empty.title`)}</div>
                    <div class="logbook__empty-sub">${p(`logbook.empty.subtitle`)}</div>
                  </div>
                `:c}
          ${a?o.map(n=>j(t,e.client,n,a.timeZone)):c}
        </div>
        <aside class="logbook__side">
          ${M(t)} ${N(t,e.client)}
          ${P(t,e.client)}
        </aside>
      </div>
    </section>
  `}function I(){return(I=e((()=>{o(),u(),m(),h(),d(),n(),i(),b()})))()}I();export{F as renderLogbook};
//# sourceMappingURL=logbook-view-BQtvPfXL.js.map