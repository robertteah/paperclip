import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,L as n,R as r,xa as i}from"./control-ui-foundation-DMb6IeIq.js";import{A as a,Gc as o,Yo as s,Zt as ee,br as c,on as l,qc as te,qo as u,yr as d}from"./control-ui-core-DzidtL-P.js";import{$ as ne,K as f,X as p,at as m,l as h,m as g,p as re,q as _,r as ie,s as ae,st as v,t as y}from"./lit-runtime-vxhGQLC6.js";import{an as b,cr as oe,h as se,hr as x,m as ce,sn as le}from"./control-ui-core-CaKBexnk.js";import{Bt as ue,Ft as S,Gt as C,It as de,Xt as fe,Yt as pe}from"./control-ui-core-uEI6aN5p.js";import{B as w,I as me,L as T,R as E}from"./control-ui-boot-shared-nBxCfWV5.js";import{Nn as D,Pn as O}from"./control-ui-boot-shared-Cyt1Zyts.js";import{Qs as k,Zs as A}from"./control-ui-boot-shared-CH-OC11d.js";import{a as j,i as M}from"./settings-targets-D_7u0c_C.js";import{n as N,t as P}from"./hub-tabs-DuEhaWau.js";import{n as F,t as I}from"./en-transcripts-D6JXRJxI.js";function L(e){let t=new URLSearchParams(e);return{limit:50,query:t.get(`query`)?.slice(0,256)||void 0,providerId:t.get(`providerId`)||void 0,accountId:t.get(`accountId`)||void 0,agentId:t.get(`agentId`)||void 0,startedAfter:R(t.get(`startedAfter`)),startedBefore:R(t.get(`startedBefore`)),cursor:t.get(`cursor`)||void 0}}function R(e){if(e)return/^\d{4}-\d{2}-\d{2}$/u.test(e)?`${e}T00:00:00.000Z`:e}function z(e,t){let n=new URLSearchParams(e);for(let[e,r]of Object.entries(t))r?n.set(e,r):n.delete(e);let r=n.toString();return r?`?${r}`:``}var B,V;function H(){return(H=e((()=>{B=[`providerId`,`accountId`,`agentId`,`startedAfter`,`startedBefore`],V=[`query`,...B]})))()}var U,W;function G(){return(G=e((()=>{fe(),U={meetings:{emptyTitle:`Your meeting notes, together`,docs:`Set up meeting transcripts`,inProgress:`In progress`,activeNotes:`Capture is in progress. Refresh to check for notes.`,noSpeech:`No speech captured`,listLabel:`Meetings by day`}},W=Object.assign(()=>{Object.assign(pe,U)},{catalog:U})})))()}function K(e){return e?new Date(e).toLocaleString():C(`transcripts.unknown`)}function he(e){let t=C(`transcripts.sourceTime`,{time:K(e)});return p`<time datetime=${e??_} title=${t} aria-label=${t}
    >${e?new Date(e).toLocaleTimeString():C(`transcripts.unknown`)}</time
  >`}function ge(e){return[e.providerId,e.accountId,e.guildId,e.channelId,e.meetingUrl,e.threadTs,e.fileId].filter(Boolean).join(` · `)}function q(e,t){let n=c(e);return p`<div class="transcripts-notice" role="alert" tabindex="-1">
    <h2>${C(n?`transcripts.forbidden`:`transcripts.loadError`)}</h2>
    <p>${n?C(`transcripts.forbiddenHint`):u(e)}</p>
    <button class="btn" @click=${t}>${C(`common.retry`)}</button>
  </div>`}function _e(e){let t=new URLSearchParams(e.search),n=B.some(e=>t.get(e)),r=(t,n,r=`search`)=>p`<label class="field">
    <span>${n}</span
    ><input
      name=${t}
      type=${r}
      aria-label=${n}
      maxlength=${256}
      .value=${h(e.drafts[t]??``)}
      @input=${n=>e.onDraft(t,n.target.value)}
    />
  </label>`;return p`<form
    class="transcripts-filters"
    aria-label=${C(`transcripts.filters`)}
    @submit=${t=>{t.preventDefault();let n=new FormData(t.currentTarget),r={cursor:null};for(let e of V)r[e]=i(n.get(e));e.onNavigate(r)}}
  >
    ${r(`query`,C(`transcripts.titleFilter`))}
    <details ?open=${n}>
      <summary>${C(`transcripts.advancedFilters`)}</summary>
      <div class="transcripts-filters__advanced">
        ${r(`providerId`,C(`transcripts.sourceFilter`))}
        ${r(`accountId`,C(`transcripts.accountFilter`))}
        ${r(`agentId`,C(`transcripts.agentFilter`))}
        ${r(`startedAfter`,C(`transcripts.afterFilter`),`date`)}
        ${r(`startedBefore`,C(`transcripts.beforeFilter`),`date`)}
      </div>
      <p class="transcripts-caption">${C(`transcripts.filterHint`)}</p>
    </details>
    <div class="transcripts-actions">
      <button type="submit" class="btn">${S.search}${C(`transcripts.filter`)}</button>
      <button
        type="button"
        class="btn"
        @click=${()=>e.onNavigate(Object.fromEntries([...V,`cursor`].map(e=>[e,null])))}
      >
        ${C(`transcripts.clearFilters`)}
      </button>
    </div>
  </form>`}function ve(e,t){let n=new URLSearchParams(t.search).get(`selector`),r=e.utteranceCount===0,i=e.participants.slice(0,3).join(`, `),o=e.participants.length-3,s=e.stoppedAt?ee(Math.max(0,Date.parse(e.stoppedAt)-Date.parse(e.startedAt))):null,c={selector:e.selector,find:null,tab:null};return p`<li>
    <a
      class="transcripts-list__entry meetings-row ${r?`meetings-row--silent`:``}"
      aria-current=${e.selector===n?`page`:_}
      href=${x(`meetings`,t.basePath)+z(t.search,c)}
      @click=${e=>{a(e)&&(e.preventDefault(),t.onNavigate(c))}}
    >
      <span class="meetings-row__title"
        >${e.title||e.providerName||e.providerId}</span
      >
      <span class="meetings-row__meta">
        ${e.providerName||e.providerId} ·
        <time datetime=${e.startedAt}
          >${new Date(e.startedAt).toLocaleTimeString(void 0,{hour:`2-digit`,minute:`2-digit`})}</time
        >
        ${e.active?p`<span class="meetings-live">${C(`meetings.inProgress`)}</span>`:s?p` · ${s}`:_}
      </span>
      ${i?p`<span class="meetings-row__meta meetings-row__participants">${i}${o>0?` +${o}`:``}</span>`:_}
      <span class="meetings-row__meta"
        >${C(`transcripts.savedCount`,{count:String(e.utteranceCount)})}</span
      >
      ${r||e.overview?p`<span class="meetings-row__overview">${r?C(`meetings.noSpeech`):e.overview}</span>`:_}
    </a>
  </li>`}function J(e){if(e.listError)return q(e.listError,e.onRefresh);if(e.listLoading||!e.list)return p`<p role="status" class="transcripts-notice">${C(`common.loading`)}</p>`;let t=new Map;for(let n of e.list.sessions){let e=new Date(n.startedAt).toLocaleDateString(void 0,{year:`numeric`,month:`long`,day:`numeric`}),r=t.get(e)??[];r.push(n),t.set(e,r)}return p` ${t.size?p`<div aria-label=${C(`meetings.listLabel`)}>
            ${g(t,([e])=>e,([t,n])=>p`<section class="meetings-day">
                <h2>${t}</h2>
                <ol class="transcripts-list">
                  ${g(n,e=>e.selector,t=>ve(t,e))}
                </ol>
              </section>`)}
          </div>`:p`<div class="transcripts-notice" role="status">
            <h2>${C(`meetings.emptyTitle`)}</h2>
            <p>${C(`transcripts.emptyHint`)}</p>
            <a
              href="https://docs.openclaw.ai/cli/transcripts"
              target="_blank"
              rel="noopener noreferrer"
              >${C(`meetings.docs`)}</a
            >
          </div>`}
    <nav class="transcripts-actions" aria-label=${C(`transcripts.pagination`)}>
      ${new URLSearchParams(e.search).has(`cursor`)?p`<button class="btn" @click=${()=>e.onNavigate({cursor:null})}>
              ${C(`transcripts.firstPage`)}
            </button>`:_}
      ${e.list.nextCursor?p`<button
              class="btn"
              @click=${()=>e.onNavigate({cursor:e.list?.nextCursor??null})}
            >
              ${C(`transcripts.nextPage`)}${S.chevronRight}
            </button>`:_}
    </nav>`}function ye(e){let t=e.summary,n=`# ${e.session.title||e.session.sessionId}\n`,r=t?t.markdown.startsWith(n)?t.markdown.slice(n.length):t.markdown:``;return p`<section class="transcripts-summary">
    ${t?p`<p class="transcripts-caption">
              ${t.source?p`${C(t.source===`model`?`transcripts.modelNotes`:`transcripts.heuristicNotes`)}${t.model?` · ${t.model}`:_} · `:_}
              ${C(`transcripts.generatedAt`,{time:K(t.generatedAt)})}
            </p>
            <div class="meetings-notes markdown">
              ${ie(O(r))}
            </div>
            <p class="transcripts-caption">${C(`transcripts.summaryHint`)}</p>`:p`<p role="status">${C(`transcripts.noSummary`)}</p>
            ${e.session.active?p`<p>${C(`meetings.activeNotes`)}</p>`:_}`}
  </section>`}function be(e){let t=new URLSearchParams(e.search);if(!t.get(`selector`))return p`<div class="transcripts-notice transcripts-reader__placeholder">
      <h2>${C(`transcripts.choose`)}</h2>
      <p>${C(`transcripts.chooseHint`)}</p>
    </div>`;let n=e.reader.pages.at(-1),r=n??e.reader.summary;return p`<article
    class="transcripts-reader"
    aria-label=${C(`transcripts.reader`)}
    aria-busy=${e.reader.loading}
  >
    <a
      class="transcripts-back"
      href=${x(`meetings`,e.basePath)+z(e.search,{selector:null,find:null,tab:null})}
      @click=${t=>{a(t)&&(t.preventDefault(),e.onNavigate({selector:null,find:null,tab:null}))}}
      >${S.arrowLeft}${C(`transcripts.back`)}</a
    >
    ${e.reader.error?q(e.reader.error,e.onReaderRetry):_}
    ${r?p`
            <header class="transcripts-reader__header">
              <h1 tabindex="-1">${r.session.title||r.session.sessionId}</h1>
              <p class="transcripts-caption">
                ${r.session.providerName||r.session.providerId} ·
                <time datetime=${r.session.startedAt}
                  >${K(r.session.startedAt)}</time
                >
                · ${C(`transcripts.savedCount`,{count:String(r.session.utteranceCount)})}
                ${r.session.active?p`<span class="meetings-live">${C(`meetings.inProgress`)}</span>`:_}
              </p>
              <details class="transcripts-source-details">
                <summary>${C(`transcripts.sourceDetails`)}</summary>
                <p class="transcripts-caption">${ge(r.session.source)}</p>
                <p class="transcripts-caption">
                  ${r.session.agentId??C(`transcripts.unattributed`)}
                </p>
                <p class="transcripts-caption">
                  ${C(`transcripts.lastUtterance`,{time:K(r.session.lastUtteranceAt)})}
                </p>
                <p class="transcripts-caption">
                  ${C(r.session.activeSubscription?`transcripts.armedHint`:`transcripts.inactiveHint`)}
                </p>
              </details>
              <div class="transcripts-actions">
                ${[`markdown`,`jsonl`].map(t=>p`<button
                      class="btn"
                      ?disabled=${e.exportState.kind===`loading`}
                      @click=${()=>e.onDownload(t)}
                    >
                      ${S.download}${C(`transcripts.download.${t}`)}
                    </button>`)}
              </div>
              ${e.exportState.kind===`error`?p`<p role="alert">
                      ${C(`transcripts.exportError`)} ${e.exportState.message}
                    </p>`:_}
              ${e.exportState.kind===`loading`||e.exportState.kind===`done`?p`<p role="status">
                      ${C(e.exportState.kind===`loading`?`transcripts.exporting`:`transcripts.downloadStarted`)}
                    </p>`:_}
            </header>
            ${N({id:`transcript-reader`,active:e.readerTab,tabs:[{value:`summary`,label:C(`transcripts.summary`)},{value:`text`,label:C(`transcripts.text`)}],ariaLabel:C(`transcripts.reader`),panelId:`transcript-reader-panel`,variant:`sub`,onSelect:e.onReaderTab})}
            <div
              id="transcript-reader-panel"
              role="tabpanel"
              aria-labelledby=${`transcript-reader-tab-${e.readerTab}`}
            >
              ${e.readerTab===`summary`?e.reader.summary?ye(e.reader.summary):_:p`
                      <form
                        class="transcripts-search"
                        role="search"
                        @submit=${t=>{t.preventDefault();let n=i(new FormData(t.currentTarget).get(`find`));e.onNavigate({find:n,tab:`transcript`})}}
                      >
                        <label class="field">
                          <input
                            type="search"
                            name="find"
                            aria-label=${C(`transcripts.searchWithin`)}
                            placeholder=${C(`transcripts.searchWithin`)}
                            maxlength=${256}
                            .value=${h(e.drafts.find??``)}
                            @input=${t=>e.onDraft(`find`,t.target.value)}
                          />
                        </label>
                        <button class="btn" type="submit">
                          ${S.search}${C(`transcripts.search`)}
                        </button>
                        ${t.get(`find`)?p`<button
                                class="btn"
                                type="button"
                                @click=${()=>e.onNavigate({find:null})}
                              >
                                ${C(`transcripts.clearSearch`)}
                              </button>`:_}
                      </form>
                      ${t.get(`find`)?p`<p class="transcripts-caption" role="status">
                              ${C(`transcripts.searchResults`,{query:t.get(`find`)??``})}
                            </p>`:_}
                      ${e.reader.trimmed?p`<p class="transcripts-caption">
                              ${C(`transcripts.windowHint`)}
                              <button class="btn btn--xs" @click=${e.onReaderStart}>
                                ${C(`transcripts.readerStart`)}
                              </button>
                            </p>`:_}
                      <ol class="transcripts-utterances">
                        ${e.reader.pages.flatMap(e=>e.utterances??[]).map(e=>p`<li>
                              <div class="transcripts-utterance__byline">
                                <strong
                                  >${e.speakerLabel??e.speakerId??C(`transcripts.unknownSpeaker`)}</strong
                                >
                                ${he(e.startedAt??e.endedAt)}
                              </div>
                              <p>${e.text}</p>
                            </li>`)}
                      </ol>
                      ${n&&!e.reader.loading&&!e.reader.error&&!e.reader.pages.some(e=>e.utterances?.length)?p`<p role="status">
                              ${C(t.get(`find`)?`transcripts.noMatches`:`transcripts.noUtterances`)}
                            </p>`:_}
                      ${n?.nextCursor?p`<button
                              class="btn"
                              ?disabled=${e.reader.loading}
                              @click=${e.onLoadMore}
                            >
                              ${C(`transcripts.loadMore`)}
                            </button>`:_}
                    `}
            </div>
          `:_}
    ${e.reader.loading?p`<p role="status">${C(`common.loading`)}</p>`:_}
  </article>`}function xe(e){let t=!!new URLSearchParams(e.search).get(`selector`),n=M.meetingCapture;return p`<section class="transcripts-workspace">
    <header class="content-header content-header--page">
      <div>
        <h1 class="page-title">${C(`tabs.meetings`)}</h1>
        <p class="page-sub">${C(`subtitles.meetings`)}</p>
      </div>
      <div class="transcripts-actions">
        <a
          class="btn"
          href=${x(n.routeId,e.basePath)+n.search+n.hash}
          >${S.settings}${C(`meetingCapture.title`)}</a
        >
        <button
          class="btn"
          ?disabled=${!e.connected||!e.allowed||e.listLoading}
          @click=${e.onRefresh}
        >
          ${S.refresh}${C(`common.refresh`)}
        </button>
      </div>
    </header>
    ${e.connected?e.allowed?p`<div class="transcripts-layout ${t?`transcripts-layout--selected`:``}">
              <section class="transcripts-library" aria-label=${C(`transcripts.library`)}>
                ${_e(e)}${J(e)}
              </section>
              ${be(e)}
            </div>`:p`<div class="transcripts-notice" role="alert">
              <h2>${C(`transcripts.forbidden`)}</h2>
              <p>${C(`transcripts.forbiddenHint`)}</p>
            </div>`:p`<div class="transcripts-notice" role="status">${C(`transcripts.disconnected`)}</div>`}
  </section>`}function Y(){return(Y=e((()=>{f(),ae(),re(),y(),oe(),P(),de(),D(),ue(),G(),I(),s(),l(),d(),j(),H(),F(),W()})))()}var X,Z,Q;function $(){return($=e((()=>{r(),me(),f(),ne(),se(),le(),s(),d(),k(),te(),H(),Y(),X=5,Z=class extends o{constructor(...e){super(...e),this.routeSearch=``,this.drafts={},this.list=null,this.listDenial=null,this.readerDenial=null,this.accessGeneration=0,this.readerCursor=null,this.summary=null,this.readerPages=[],this.trimmed=!1,this.exportState={kind:`idle`},this.exportAbort=null,this.focusSelection=!1,this.gateway=new A(this,{getGateway:()=>this.context?.gateway,invalidateRequests:()=>this.resetConnection(),onSnapshot:({snapshot:{hello:e}})=>{(e!==this.connectionHello||e?.auth!==this.connectionAuth)&&(this.gateway.invalidate(),this.resetConnection()),this.connectionHello=e,this.connectionAuth=e?.auth}}),this.listTask=new T(this,{args:()=>[this.requestClient(),this.gateway.epoch,JSON.stringify(L(this.routeSearch)),this.selection.selector],task:async([e,,t,n],{signal:r})=>e?this.readArchive({client:e,method:`transcripts.list`,params:L(this.routeSearch),signal:r,current:()=>this.selection.selector===n&&JSON.stringify(L(this.routeSearch))===t,accept:e=>{this.listDenial=null,this.list=e}}):E}),this.summaryTask=new T(this,{args:()=>[this.requestClient(),this.gateway.epoch,this.selection.selector],task:async([e,,t],{signal:n})=>!e||!t?E:this.readArchive({client:e,method:`transcripts.get`,params:{selector:t},signal:n,current:()=>this.selection.selector===t,accept:e=>{this.readerDenial=null,this.summary=e}})}),this.readerTask=new T(this,{args:()=>[this.requestClient(),this.gateway.epoch,this.selection.selector,this.selection.query,this.readerCursor],task:async([e,,t,n,r],{signal:i})=>!e||!t?E:this.readArchive({client:e,method:`transcripts.get`,params:{selector:t,includeUtterances:!0,query:n||void 0,cursor:r??void 0,limit:50},signal:i,current:()=>this.selection.selector===t&&this.selection.query===n&&this.readerCursor===r,accept:e=>{this.readerDenial=null;let t=r?[...this.readerPages,e]:[e];this.trimmed||=t.length>X,this.readerPages=t.slice(-5)}})})}requestClient(){let e=this.context?.gateway.snapshot;return this.isConnected&&e?.phase===`connected`&&b(e.hello?.auth??null)?e.client:null}get selection(){let e=new URLSearchParams(this.routeSearch);return{selector:e.get(`selector`)??``,query:(e.get(`find`)??``).slice(0,256)}}get readerTab(){let e=new URLSearchParams(this.routeSearch);return e.get(`tab`)===`transcript`||!e.has(`tab`)&&this.selection.query?`text`:`summary`}async readArchive(e){let t=this.gateway.capture(),n=this.context.gateway,r=n.snapshot.hello,i=n.snapshot.hello?.auth,a=this.accessGeneration,o=()=>!e.signal.aborted&&this.requestClient()===e.client&&this.context.gateway===n&&n.snapshot.hello===r&&n.snapshot.hello?.auth===i&&t!==null&&this.gateway.isCurrent(t)&&this.accessGeneration===a&&e.current();try{let t=await e.client.request(e.method,e.params,{signal:e.signal});return o()?e.accept(t):E}catch(e){if(!o())return E;throw c(e)&&(this.accessGeneration++,this.listDenial=e,this.readerDenial=e,this.list=null,this.summary=null,this.readerPages=[],this.trimmed=!1,this.cancelExport()),e}}willUpdate(e){if(e.has(`routeSearch`)){let t=new URLSearchParams(String(e.get(`routeSearch`)??``)),n=new URLSearchParams(this.routeSearch);t.get(`selector`)!==n.get(`selector`)&&(this.summary=null);for(let r of[...V,`find`])(t.get(r)!==n.get(r)||e.get(`routeSearch`)===void 0||r===`find`&&t.get(`selector`)!==n.get(`selector`))&&(this.drafts[r]=n.get(r)??``);(t.get(`selector`)!==(this.selection.selector||null)||t.get(`find`)!==(this.selection.query||null))&&(this.resetReader(),this.cancelExport(),this.focusSelection=e.get(`routeSearch`)!==void 0)}}updated(){if(!this.focusSelection)return;let e=this.selection.selector?this.querySelector(`.transcripts-reader h1, .transcripts-reader [role=alert]`):this.querySelector(`.transcripts-library input[name="query"]`);e&&(e.focus(),this.focusSelection=!1)}resetConnection(){this.list=null,this.listDenial=null,this.readerDenial=null,this.summary=null,this.listTask.abort(),this.summaryTask.abort(),this.readerTask.abort(),this.cancelExport(),this.resetReader()}resetReader(){this.readerCursor=null,this.readerPages=[],this.trimmed=!1}cancelExport(){this.exportAbort?.abort(),this.exportAbort=null,this.exportState={kind:`idle`}}navigate(e){for(let[t,n]of Object.entries(e))this.drafts[t]=n??``;this.requestUpdate(),this.context.navigate(`meetings`,{search:z(this.routeSearch,e)})}refresh(){this.cancelExport(),this.summary=null,this.resetReader(),new URLSearchParams(this.routeSearch).has(`cursor`)?this.navigate({cursor:null}):this.listTask.run(),this.summaryTask.run(),this.readerTask.run()}async download(e){let t=this.requestClient(),{selector:n}=this.selection;if(!t||!n||this.exportState.kind===`loading`)return;let r=new AbortController;this.exportAbort=r,this.exportState={kind:`loading`};try{await this.readArchive({client:t,method:`transcripts.export`,params:{selector:n,format:e},signal:r.signal,current:()=>this.selection.selector===n,accept:e=>{let t=Uint8Array.from(atob(e.data),e=>e.charCodeAt(0)),n=URL.createObjectURL(new Blob([t],{type:e.mimeType})),r=document.createElement(`a`);try{r.href=n,r.download=e.filename,document.body.append(r),r.click(),this.exportState={kind:`done`}}finally{r.remove(),window.setTimeout(()=>URL.revokeObjectURL(n),1e3)}}})}catch(e){this.exportAbort===r&&!r.signal.aborted&&(this.exportState={kind:`error`,message:u(e)})}finally{this.exportAbort===r&&(this.exportAbort=null)}}render(){let e=this.context.gateway.snapshot,t=this.requestClient(),n=this.readerTab===`summary`?this.summaryTask:this.readerTask,r={summary:this.summary,pages:this.readerPages,loading:n.status===w.PENDING,error:this.readerDenial??(n.status===w.ERROR?n.error:null),trimmed:this.trimmed};return xe({basePath:this.context.basePath,search:this.routeSearch,drafts:this.drafts,onDraft:(e,t)=>{this.drafts[e]=t},connected:e.phase===`connected`,allowed:b(e.hello?.auth??null),list:t&&this.listTask.status===w.COMPLETE?this.list:null,listLoading:!this.listDenial&&this.listTask.status===w.PENDING,listError:this.listDenial??(this.listTask.status===w.ERROR?this.listTask.error:null),reader:r,readerTab:this.readerTab,exportState:this.exportState,onNavigate:e=>this.navigate(e),onRefresh:()=>this.refresh(),onReaderRetry:()=>{if(this.readerTab===`summary`){this.summaryTask.run();return}this.readerPages.length||this.resetReader(),this.summary||this.summaryTask.run(),this.readerTask.run()},onReaderTab:e=>{this.navigate({tab:e===`text`?`transcript`:`summary`})},onLoadMore:()=>{this.readerCursor=this.readerPages.at(-1)?.nextCursor??null},onReaderStart:()=>{this.resetReader(),this.readerTask.run()},onDownload:e=>void this.download(e)})}},t([n({context:ce,subscribe:!0})],Z.prototype,`context`,void 0),t([v({attribute:!1})],Z.prototype,`routeSearch`,void 0),t([m()],Z.prototype,`list`,void 0),t([m()],Z.prototype,`listDenial`,void 0),t([m()],Z.prototype,`readerDenial`,void 0),t([m()],Z.prototype,`readerCursor`,void 0),t([m()],Z.prototype,`summary`,void 0),t([m()],Z.prototype,`readerPages`,void 0),t([m()],Z.prototype,`trimmed`,void 0),t([m()],Z.prototype,`exportState`,void 0),Q={header:!0,render:e=>p`<openclaw-meetings-page
      .routeSearch=${typeof e==`string`?e:``}
    ></openclaw-meetings-page>`},customElements.get(`openclaw-meetings-page`)||customElements.define(`openclaw-meetings-page`,Z)})))()}$();export{Q as meetingsPageComponent};
//# sourceMappingURL=meetings-page-BA_IxXh_.js.map