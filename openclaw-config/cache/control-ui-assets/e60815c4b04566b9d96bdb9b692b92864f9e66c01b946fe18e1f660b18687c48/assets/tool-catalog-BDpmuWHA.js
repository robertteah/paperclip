import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{An as t,Ca as n,Fr as r,Hn as i,L as a,R as o,Vn as s,Zn as c,cr as l}from"./control-ui-foundation-DMb6IeIq.js";import{Bs as ee,Gc as te,Gn as ne,Kn as re,Vs as ie,Yo as u,fn as ae,on as oe,pn as se,qc as ce,qo as d,rn as le}from"./control-ui-core-DzidtL-P.js";import{$ as ue,K as f,X as p,at as m,q as h,r as de,st as fe,t as pe}from"./lit-runtime-vxhGQLC6.js";import{h as me,m as he}from"./control-ui-core-CaKBexnk.js";import{Bt as g,Gt as _,Ut as v,kt as ge}from"./control-ui-core-uEI6aN5p.js";import{a as _e,n as ve,r as ye}from"./gateway-runtime-DP4whqrA.js";import{Dt as be,Gr as xe,Nn as Se,Pn as Ce,S as we,Wr as Te,w as Ee,wt as De,x as Oe}from"./control-ui-boot-shared-Cyt1Zyts.js";import{Nt as ke,Pt as Ae}from"./control-ui-boot-chat-pu3gR1ly.js";import{n as je,r as Me,t as Ne}from"./slots-CX8Q_f2C.js";import{n as y,t as Pe}from"./hub-tabs-DuEhaWau.js";function b(e,t,n){let r=n?.enabledByDefault??!0,i=e?.config;if(!i||typeof i!=`object`||Array.isArray(i))return r;let a=`plugins`in i&&i.plugins&&typeof i.plugins==`object`?i.plugins:null;if(a?.enabled===!1||(Array.isArray(a?.deny)&&a.deny.every(e=>typeof e==`string`)?a.deny:[]).includes(t))return!1;let o=Array.isArray(a?.allow)&&a.allow.every(e=>typeof e==`string`)?a.allow:[];if(o.length>0&&!o.includes(t))return!1;let s=(a&&`entries`in a&&a.entries&&typeof a.entries==`object`?a.entries:null)?.[t];if(!s||typeof s!=`object`||Array.isArray(s))return r;let c=s.enabled;return typeof c==`boolean`?c:r}function x(e={}){return{client:e.client??null,connected:e.connected??!1,hello:e.hello??null,configSnapshot:e.configSnapshot??null,applySessionKey:e.applySessionKey??`main`,selectedAgentId:e.selectedAgentId??null,resourceRequests:{},dreamingStatusLoading:!1,dreamingStatusError:null,dreamingStatus:null,dreamingModeSaving:!1,dreamDiaryLoading:!1,dreamDiaryActionLoading:!1,dreamDiaryActionMessage:null,dreamDiaryActionArchivePath:null,dreamDiaryError:null,dreamDiaryPath:null,dreamDiaryContent:null,wikiImportInsightsLoading:!1,wikiImportInsightsError:null,wikiImportInsights:null,wikiOverviewLoading:!1,wikiOverviewError:null,wikiOverview:null,lastError:null}}function Fe(e){return b(e.configSnapshot,A,{enabledByDefault:!1})}function Ie(e,t){let n=_e(e,t);return n===null?Fe(e):n}function S(e,t,n,r){return ve({client:e.client,hello:e.hello,phase:e.connected?`connected`:`offline`},t,n,r)}function Le(e,t){switch(e){case`doctor.memory.dedupeDreamDiary`:{let e=typeof t?.dedupedEntries==`number`?t.dedupedEntries:typeof t?.removedEntries==`number`?t.removedEntries:0,n=typeof t?.keptEntries==`number`?t.keptEntries:void 0;return n===void 0?_(e===1?`dreaming.actions.dedupeRemovedOne`:`dreaming.actions.dedupeRemovedMany`,{removed:String(e)}):_(e===1?`dreaming.actions.dedupeRemovedOneAndKept`:`dreaming.actions.dedupeRemovedManyAndKept`,{removed:String(e),kept:String(n)})}case`doctor.memory.repairDreamingArtifacts`:{let e=[],r=n(t?.archiveDir);return t?.archivedSessionCorpus===!0&&e.push(_(`dreaming.actions.repairArchivedThreadCorpus`)),t?.archivedSessionIngestion===!0&&e.push(_(`dreaming.actions.repairArchivedIngestionState`)),t?.archivedDreamsDiary===!0&&e.push(_(`dreaming.actions.repairArchivedDreamDiary`)),e.length===0?_(`dreaming.actions.repairNoChanges`):r?_(`dreaming.actions.repairCompleteWithArchive`,{actions:e.join(`, `),archiveDir:r}):_(`dreaming.actions.repairComplete`,{actions:e.join(`, `)})}case`doctor.memory.backfillDreamDiary`:return _(`dreaming.actions.backfillComplete`,{count:String(typeof t?.written==`number`?t.written:0)});case`doctor.memory.resetDreamDiary`:return _(`dreaming.actions.resetDiaryComplete`,{count:String(typeof t?.removedEntries==`number`?t.removedEntries:0)});case`doctor.memory.resetGroundedShortTerm`:return _(`dreaming.actions.clearReplayedComplete`,{count:String(typeof t?.removedShortTermEntries==`number`?t.removedShortTermEntries:0)})}return _(`dreaming.actions.complete`)}function C(e){return n(e.selectedAgentId)??null}function w(e){let t=c(c(e?.plugins)?.slots),n=Me(`memory`,t?.memory),r=n.kind===`off`?Ne(`memory`):n.pluginId,i=c(e?.plugins),a=c(i?.entries),o=c(a?.[r]),s=c(o?.config),l=c(s?.dreaming),ee=typeof l?.enabled==`boolean`;return{pluginId:r,enabled:n.kind!==`off`&&l?.enabled!==!1,overridden:ee,engineOff:n.kind===`off`}}async function T(e,t,n=j[t]){let r=C(e),i=`${t}Loading`,a=`${t}Error`,o=`${t}AgentId`;if(!r)return;let s=e.client;if(!s||!e.connected)return;if(e[o]!==r&&n.clear(e),(t===`wikiImportInsights`||t===`wikiOverview`)&&!Ie(e,n.method)){delete e.resourceRequests[t],e[i]=!1,e[a]=null,n.clear(e);return}if(e.resourceRequests[t]?.agentId===r&&e[i])return;let c={agentId:r};e.resourceRequests[t]=c,e[i]=!0,e[a]=null;try{let i=await s.request(n.method,{agentId:r});if(e.resourceRequests[t]!==c||C(e)!==r)return;n.apply(e,i),e[o]=r}catch(n){e.resourceRequests[t]===c&&C(e)===r&&(e[a]=d(n))}finally{e.resourceRequests[t]===c&&(delete e.resourceRequests[t],e[i]=!1)}}async function E(e){await T(e,`dreamingStatus`)}async function D(e){await T(e,`dreamDiary`)}async function Re(e){await T(e,`wikiImportInsights`)}async function ze(e){await T(e,`wikiOverview`)}async function O(e,t,r){let i=e.client,a=C(e);if(!i||!a||!S(e,t,`operator.write`)||e.dreamDiaryActionLoading)return!1;e.dreamDiaryActionLoading=!0,e.dreamingStatusError=null,e.dreamDiaryError=null,e.dreamDiaryActionMessage=null,e.dreamDiaryActionArchivePath=null;try{let o=await i.request(t,{agentId:a});return r?.reloadDiary!==!1&&await D(e),await E(e),e.dreamDiaryActionArchivePath=t===`doctor.memory.repairDreamingArtifacts`?n(o?.archiveDir)??null:null,e.dreamDiaryActionMessage={kind:`success`,text:Le(t,o)},!0}catch(t){let n=d(t);return e.dreamingStatusError=n,e.lastError=n,e.dreamDiaryActionArchivePath=null,e.dreamDiaryActionMessage={kind:`error`,text:n},!1}finally{e.dreamDiaryActionLoading=!1}}async function Be(e){return O(e,`doctor.memory.backfillDreamDiary`)}async function Ve(e){return O(e,`doctor.memory.resetDreamDiary`)}async function He(e){return O(e,`doctor.memory.resetGroundedShortTerm`,{reloadDiary:!1})}async function Ue(e){return O(e,`doctor.memory.repairDreamingArtifacts`,{reloadDiary:!1})}async function We(e){let t=e.dreamDiaryActionArchivePath;return t?await ae(t)?(e.dreamDiaryActionMessage={kind:`success`,text:_(`dreaming.actions.archivePathCopied`)},!0):(e.dreamDiaryActionMessage={kind:`error`,text:_(`dreaming.actions.archivePathCopyFailed`)},!1):!1}async function Ge(e){return O(e,`doctor.memory.dedupeDreamDiary`)}async function Ke(e,t,n,r){if(e.dreamingModeSaving||!r()||!S(e,`config.patch`,`operator.admin`))return!1;e.dreamingModeSaving=!0,e.dreamingStatusError=null;try{let i=await t.patch({raw:n,note:`Dreaming settings updated from the Dreaming tab.`,canDispatch:r});return i||(e.dreamingStatusError=t.state.lastError??e.lastError??_(`dreaming.actions.updateFailed`)),i}finally{e.dreamingModeSaving=!1}}function qe(e){let t=c(e),r=Array.isArray(t?.children)?t.children:[];for(let e of r){let t=c(e);if(n(t?.key)===`dreaming`)return!0}return!1}function Je(e){let t=c(e);return c(t?.schema)?.additionalProperties===!1}async function k(e,t){if(!e.state.client||!e.state.connected)return`unknown`;try{let n=await e.lookupSchemaPath(`plugins.entries.${t}.config`);return qe(n)?`supported`:Je(n)?`unsupported`:`supported`}catch{return`unknown`}}async function Ye(e,t,n){if(await k(t,n)!==`unsupported`)return!0;let r=_(`dreaming.actions.unsupportedPlugin`,{pluginId:n});return e.dreamingStatusError=r,e.lastError=r,!1}async function Xe(e,t,n,r=()=>!0){if(e.dreamingModeSaving||!r())return!1;if(!t.state.configSnapshot?.hash)return e.dreamingStatusError=_(`dreaming.actions.configHashMissing`),!1;let{pluginId:i}=w(c(t.state.configSnapshot?.config)??null);if(!await Ye(e,t,i)||!r())return!1;let a=await Ke(e,t,{plugins:{entries:{[i]:{config:{dreaming:{enabled:n}}}}}},r);return a&&e.dreamingStatus&&(e.dreamingStatus={...e.dreamingStatus,enabled:n}),a}var A,j;function M(){return(M=e((()=>{je(),g(),se(),u(),ye(),A=`memory-wiki`,j={dreamingStatus:{method:`doctor.memory.status`,clear:e=>{e.dreamingStatus=null},apply:(e,t)=>{e.dreamingStatus=t.dreaming??null}},dreamDiary:{method:`doctor.memory.dreamDiary`,clear:e=>{e.dreamDiaryPath=null,e.dreamDiaryContent=null},apply:(e,t)=>{e.dreamDiaryPath=t.path,e.dreamDiaryContent=t.found?t.content??``:null}},wikiImportInsights:{method:`wiki.importInsights`,clear:e=>{e.wikiImportInsights=null},apply:(e,t)=>{e.wikiImportInsights=t}},wikiOverview:{method:`wiki.overview`,clear:e=>{e.wikiOverview=null},apply:(e,t)=>{e.wikiOverview=t}}}})))()}function Ze(e){if(!e.open)return h;let t=e.enabling?_(`dreaming.toggleConfirmation.enableTitle`):_(`dreaming.toggleConfirmation.disableTitle`),n=_(`dreaming.toggleConfirmation.subtitle`),r=e.enabling?_(`dreaming.toggleConfirmation.enableDetail`):_(`dreaming.toggleConfirmation.disableDetail`),i=e.enabling?_(`dreaming.toggleConfirmation.enableConfirm`):_(`dreaming.toggleConfirmation.disableConfirm`);return p`
    <openclaw-modal-dialog label=${t} description=${n} @modal-cancel=${()=>{e.loading||e.onCancel()}}>
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div id=${`dreaming-toggle-confirmation-title`} class="exec-approval-title">${t}</div>
            <div id=${`dreaming-toggle-confirmation-description`} class="exec-approval-sub">${n}</div>
          </div>
        </div>
        <div class="callout ${e.enabling?`info`:`warn`}" style="margin-top: 12px;">
          ${r}
        </div>
        ${e.hasError?p`<div class="exec-approval-error">
                ${_(`dreaming.toggleConfirmation.failed`)}
              </div>`:h}
        <div class="exec-approval-actions">
          <button
            class="btn ${e.enabling?`primary`:`danger`}"
            ?disabled=${e.loading}
            @click=${e.onConfirm}
          >
            ${e.loading?_(`dreaming.toggleConfirmation.saving`):i}
          </button>
          <button class="btn" ?disabled=${e.loading} @click=${e.onCancel}>
            ${_(`common.cancel`)}
          </button>
        </div>
      </div>
    </openclaw-modal-dialog>
  `}function N(){return(N=e((()=>{f(),g(),ge()})))()}function Qe(e){let t=e,n=kt.exec(e),r=At.exec(e);n&&r&&r.index>n.index&&(t=e.slice(n.index+n[0].length,r.index));let i=[],a=t.split(/\n---\n/).filter(e=>e.trim().length>0);for(let e of a){let t=e.trim().split(`
`),n=``,r=[];for(let e of t){let t=e.trim();if(!n&&t.startsWith(`*`)&&t.endsWith(`*`)&&t.length>2){n=t.slice(1,-1);continue}t.startsWith(`#`)||t.startsWith(`<!--`)||t.length>0&&r.push(t)}r.length>0&&i.push({date:n,body:r.join(`
`)})}return i}function $e(e){return i(e)??null}function et(e){let t=$e(e);if(t===null)return e;let n=new Date(t);return`${n.getMonth()+1}/${n.getDate()}`}function tt(){return{dreamIndex:Math.floor(Math.random()*J.length),dreamLastSwap:0,activeSubTab:`scene`,activeDiarySubTab:`dreams`,advancedWaitingSort:`recent`,expandedInsightCards:new Set,expandedWikiCards:new Set,diaryPage:0,wikiPreviewRequestId:0,wikiPreviewOpen:!1,wikiPreviewLoading:!1,wikiPreviewTitle:``,wikiPreviewPath:``,wikiPreviewUpdatedAt:null,wikiPreviewContent:``,wikiPreviewTotalLines:null,wikiPreviewTruncated:!1,wikiPreviewError:null}}function nt(e,t,n){e.diaryPage=Math.max(0,Math.min(t,Math.max(0,n-1)))}function rt(e){let t=Date.now();return t-e.dreamLastSwap>jt&&(e.dreamLastSwap=t,e.dreamIndex=(e.dreamIndex+1)%J.length),_(J[e.dreamIndex]??J[0])}function it(e){let t=Oe(xe(e)),n=`--lob-shell:${t.palette.shell};--lob-claw:${t.palette.claw}`;return p`
    <div class="dreams__lobster" style=${n}>${Ee(t,{sleeping:!0})}</div>
  `}function at(e){let t=e.viewState,n=!e.active,r=e.dreamingOf??rt(t);return p`
    <div class="dreams-page">
      <!-- ── Sub-tab bar ── -->
      <div class="dreams__topbar">
        ${y({id:`dreams`,active:t.activeSubTab,tabs:[{value:`scene`,label:_(`dreaming.tabs.scene`)},{value:`diary`,label:_(`dreaming.tabs.diary`)},{value:`advanced`,label:_(`dreaming.tabs.advanced`)}],ariaLabel:_(`memoryPage.tabs.dreams`),panelId:`dreams-panel`,variant:`sub`,onSelect:n=>{t.activeSubTab=n,e.onViewStateChange()}})}
      </div>

      <div
        id="dreams-panel"
        class="dreams__panel"
        role="tabpanel"
        aria-labelledby=${`dreams-tab-${t.activeSubTab}`}
      >
        ${t.activeSubTab===`scene`?ct(e,n,r):t.activeSubTab===`diary`?Ot(e):bt(e)}
      </div>
    </div>
  `}function ot(e){return e.split(`
`).map(e=>e.trim()).filter(e=>e.length>0&&e!==`What Happened`&&e!==`Reflections`&&e!==`Candidates`&&e!==`Possible Lasting Updates`).map(e=>e.replace(/\s*\[memory\/[^\]]+\]/g,``)).map(e=>e.replace(/^(?:\d+\.\s+|-\s+(?:\[[^\]]+\]\s+)?(?:[a-z_]+:\s+)?)/i,``).replace(/^(?:likely_durable|likely_situational|unclear):\s+/i,``).trim()).filter(e=>e.length>0)}function st(e){return e?new Date(e).toLocaleTimeString([],{hour:`numeric`,minute:`2-digit`}):`—`}function ct(e,t,n){return p`
    <section class="dreams ${t?`dreams--idle`:``}">
      ${Mt.map(e=>p`
          <div
            class="dreams__star"
            style="
              top: ${e.top}%;
              left: ${e.left}%;
              width: ${e.size}px;
              height: ${e.size}px;
              background: ${e.hue===`accent`?`var(--accent-muted)`:`var(--text)`};
              animation-delay: ${e.delay}s;
            "
          ></div>
        `)}

      <div class="dreams__moon"></div>

      ${e.active?p`
              <div class="dreams__bubble">
                <span class="dreams__bubble-text">${n}</span>
              </div>
              <div
                class="dreams__bubble-dot"
                style="top: calc(50% - 160px); left: calc(50% - 120px); width: 12px; height: 12px; animation-delay: 0.2s;"
              ></div>
              <div
                class="dreams__bubble-dot"
                style="top: calc(50% - 120px); left: calc(50% - 90px); width: 8px; height: 8px; animation-delay: 0.4s;"
              ></div>
            `:h}

      <div class="dreams__glow"></div>
      ${it(e.selectedAgentId)}
      <span class="dreams__z">z</span>
      <span class="dreams__z">z</span>
      <span class="dreams__z">Z</span>

      <div class="dreams__status">
        <span class="dreams__status-label"
          >${e.active?_(`dreaming.status.active`):_(`dreaming.status.idle`)}</span
        >
        <div class="dreams__status-detail">
          <div class="dreams__status-dot"></div>
          <span>
            ${e.promotedCount} ${_(`dreaming.status.promotedSuffix`)}
            ${e.nextCycle?p`· ${_(`dreaming.status.nextSweepPrefix`)} ${e.nextCycle}`:h}
            ${e.timezone?p`· ${e.timezone}`:h}
          </span>
        </div>
      </div>

      <!-- Sleep phases -->
      <div class="dreams__phases">
        ${Object.keys(Y).map(t=>{let n=e.phases?.[t],r=n!==void 0,i=n?.enabled===!0,a=st(n?.nextRunAtMs),o=_(Y[t]),s=r?i?a:_(`dreaming.phase.off`):`—`;return p`
              <div class="dreams__phase ${r&&!i?`dreams__phase--off`:``}">
                <div class="dreams__phase-dot ${i?`dreams__phase-dot--on`:``}"></div>
                <span class="dreams__phase-name">${o}</span>
                <span class="dreams__phase-next">${s}</span>
              </div>
            `})}
      </div>

      ${e.statusError?p`<div class="dreams__controls-error">${e.statusError}</div>`:h}
    </section>
  `}function lt(e,t,n){return t===n?`${e}:${t}`:`${e}:${t}-${n}`}function P(e){let t=i(e);return t===void 0?e:new Date(t).toLocaleString([],{month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`})}function F(e){return e.replace(/\\/g,`/`).split(`/`).findLast(Boolean)??e}function ut(e){return _(`dreaming.wiki.pageTypes.${e}`)}function I(e){return _(e===1?`dreaming.wiki.counts.pageOne`:`dreaming.wiki.counts.pages`,{count:String(e)})}function L(e){return _(e===1?`dreaming.wiki.counts.claimRowOne`:`dreaming.wiki.counts.claimRows`,{count:String(e)})}function R(e){return _(e===1?`dreaming.wiki.counts.openQuestionOne`:`dreaming.wiki.counts.openQuestions`,{count:String(e)})}function z(e){return _(e===1?`dreaming.wiki.counts.contradictionOne`:`dreaming.wiki.counts.contradictions`,{count:String(e)})}function dt(e){let t=Nt.map(([t,n])=>{let r=e[t];return r>0?_(`dreaming.wiki.pageGroupSummary`,{label:_(`dreaming.wiki.pageGroups.${n}`),count:I(r)}):null}).filter(e=>e!==null);return t.length>0?t.join(`; `):_(`dreaming.wiki.noPagesYet`)}function ft(e){let t=[_(`dreaming.wiki.sectionPageSummary`,{label:e.label,count:I(e.itemCount)})];if(e.claimCount>0&&t.push(L(e.claimCount)),e.questionCount>0){let n=e.items.filter(e=>e.questionCount>0).length,r=R(e.questionCount);t.push(n>0?_(`dreaming.wiki.questionCountOnPages`,{questionCount:r,pageCount:I(n)}):r)}return e.contradictionCount>0&&t.push(z(e.contradictionCount)),t.join(` · `)}function pt(e){return _(e.digestStatus===`withheld`?`dreaming.wiki.risk.needsReview`:`dreaming.wiki.risk.${e.riskLevel}`)}function B(e,t,n){e.has(t)?e.delete(t):e.add(t),n()}async function V(e,t){let n=t.viewState,r=++n.wikiPreviewRequestId;n.wikiPreviewOpen=!0,n.wikiPreviewLoading=!0,n.wikiPreviewTitle=F(e),n.wikiPreviewPath=e,n.wikiPreviewUpdatedAt=null,n.wikiPreviewContent=``,n.wikiPreviewTotalLines=null,n.wikiPreviewTruncated=!1,n.wikiPreviewError=null,t.onViewStateChange();try{let i=await t.onOpenWikiPage(e);if(n.wikiPreviewRequestId!==r||!n.wikiPreviewOpen)return;if(!i){n.wikiPreviewError=_(`dreaming.wiki.pageNotFound`,{lookup:e});return}n.wikiPreviewTitle=i.title,n.wikiPreviewPath=i.path,n.wikiPreviewUpdatedAt=i.updatedAt??null,n.wikiPreviewContent=i.content,n.wikiPreviewTotalLines=typeof i.totalLines==`number`?i.totalLines:null,n.wikiPreviewTruncated=i.truncated===!0}catch(e){n.wikiPreviewRequestId===r&&n.wikiPreviewOpen&&(n.wikiPreviewError=d(e))}finally{n.wikiPreviewRequestId===r&&n.wikiPreviewOpen&&(n.wikiPreviewLoading=!1,t.onViewStateChange())}}function H(e){e.wikiPreviewRequestId+=1,e.wikiPreviewOpen=!1,e.wikiPreviewLoading=!1,e.wikiPreviewTitle=``,e.wikiPreviewPath=``,e.wikiPreviewUpdatedAt=null,e.wikiPreviewContent=``,e.wikiPreviewTotalLines=null,e.wikiPreviewTruncated=!1,e.wikiPreviewError=null}function U(e){H(e.viewState),e.onViewStateChange()}function mt(e){let t=e.viewState;return t.wikiPreviewOpen?p`
    <openclaw-modal-dialog
      .label=${t.wikiPreviewTitle||_(`dreaming.wiki.previewFallbackTitle`)}
      style="--openclaw-modal-width: 1120px"
      @modal-cancel=${()=>U(e)}
    >
      <div class="dreams-diary__preview-panel">
        <div class="dreams-diary__preview-header">
          <div>
            <div class="dreams-diary__preview-title">
              ${t.wikiPreviewTitle||_(`dreaming.wiki.previewFallbackTitle`)}
            </div>
            <div class="dreams-diary__preview-meta">
              ${t.wikiPreviewPath}
              ${t.wikiPreviewUpdatedAt?` · ${P(t.wikiPreviewUpdatedAt)}`:``}
            </div>
          </div>
          <button
            type="button"
            class="btn btn--subtle btn--sm"
            @click=${()=>U(e)}
          >
            ${_(`dreaming.wiki.close`)}
          </button>
        </div>
        <div class="dreams-diary__preview-body">
          ${t.wikiPreviewLoading?p`<div class="dreams-diary__empty-text">${_(`dreaming.wiki.loadingPage`)}</div>`:t.wikiPreviewError?p`<div class="dreams-diary__error">${t.wikiPreviewError}</div>`:p`
                    ${t.wikiPreviewTruncated?p`
                            <div class="dreams-diary__preview-hint">
                              ${t.wikiPreviewTotalLines===null?_(`dreaming.wiki.previewTruncated`):_(`dreaming.wiki.previewTruncatedWithTotal`,{count:String(t.wikiPreviewTotalLines)})}
                            </div>
                          `:h}
                    <pre class="dreams-diary__preview-pre">${t.wikiPreviewContent}</pre>
                  `}
        </div>
      </div>
    </openclaw-modal-dialog>
  `:h}function ht(e){switch(e){case`dreams`:return p` <p class="dreams-diary__explainer">${_(`dreaming.wiki.dreamsExplainer`)}</p> `;case`insights`:return p` <p class="dreams-diary__explainer">${_(`dreaming.wiki.insightsExplainer`)}</p> `;case`wiki`:return p` <p class="dreams-diary__explainer">${_(`dreaming.wiki.wikiExplainer`)}</p> `}return h}function W(e){return i(e)??-1/0}function gt(e,t){let n=W(e.lastRecalledAt),r=W(t.lastRecalledAt);return r===n?t.totalSignalCount===e.totalSignalCount?e.path.localeCompare(t.path):t.totalSignalCount-e.totalSignalCount:r-n}function _t(e,t){return t.totalSignalCount===e.totalSignalCount?t.phaseHitCount===e.phaseHitCount?gt(e,t):t.phaseHitCount-e.phaseHitCount:t.totalSignalCount-e.totalSignalCount}function vt(e,t){return t===`signals`?e.toSorted(_t):e.toSorted(gt)}function yt(e){let t=e.groundedCount>0,n=e.recallCount>0||e.dailyCount>0;return _(t&&n?`dreaming.advanced.originMixed`:t?`dreaming.advanced.originDailyLog`:`dreaming.advanced.originLive`)}function G(e){return p`
    <section class="dreams-advanced__section">
      <div class="dreams-advanced__section-header">
        <div class="dreams-advanced__section-copy">
          <span class="dreams-advanced__section-title">${_(e.titleKey)}</span>
          <p class="dreams-advanced__section-description">${_(e.descriptionKey)}</p>
        </div>
        <div class="dreams-advanced__section-toolbar">
          ${e.controls??h}
          <span class="dreams-advanced__section-count">${e.entries.length}</span>
        </div>
      </div>
      ${e.entries.length===0?p`<div class="dreams-advanced__empty">${_(e.emptyKey)}</div>`:p`
              <div class="dreams-advanced__list">
                ${e.entries.map(t=>p`
                    <article class="dreams-advanced__item" data-entry-key=${t.key}>
                      ${e.badge?(()=>{let n=e.badge?.(t);return n?p`<span class="dreams-advanced__badge">${n}</span>`:h})():h}
                      <div class="dreams-advanced__snippet">${t.snippet}</div>
                      <div class="dreams-advanced__source">
                        ${lt(t.path,t.startLine,t.endLine)}
                      </div>
                      <div class="dreams-advanced__meta">
                        ${e.meta(t).filter(e=>e.length>0).join(` · `)}
                      </div>
                    </article>
                  `)}
              </div>
            `}
    </section>
  `}function bt(e){let t=e.viewState,n=e.shortTermEntries.filter(e=>e.groundedCount>0),r=vt(e.shortTermEntries,t.advancedWaitingSort),i=_(`dreaming.advanced.description`),a=[`${n.length} ${_(`dreaming.advanced.summaryFromDailyLog`)}`,`${e.shortTermCount} ${_(`dreaming.advanced.summaryWaiting`)}`,`${e.promotedCount} ${_(`dreaming.advanced.summaryPromotedToday`)}`].join(` · `);return p`
    <section class="dreams-advanced">
      <div class="dreams-advanced__header">
        <div class="dreams-advanced__intro">
          <span class="dreams-advanced__eyebrow">${_(`dreaming.advanced.eyebrow`)}</span>
          <h2 class="dreams-advanced__title">${_(`dreaming.advanced.title`)}</h2>
          ${i?p`<p class="dreams-advanced__description">${i}</p>`:h}
          <div class="dreams-advanced__summary">${a}</div>
        </div>
        <div class="dreams-advanced__actions">
          ${[{label:_(`dreaming.scene.dedupeDiary`),onClick:e.onDedupeDreamDiary,allowed:e.access.canDedupeDreamDiary},{label:_(`dreaming.scene.repairCache`),onClick:e.onRepairDreamingArtifacts,allowed:e.access.canRepairDreamingArtifacts},{label:_(e.dreamDiaryActionLoading?`dreaming.scene.working`:`dreaming.scene.backfill`),onClick:e.onBackfillDiary,allowed:e.access.canBackfillDiary},{label:_(`dreaming.scene.reset`),onClick:e.onResetDiary,allowed:e.access.canResetDiary},{label:_(`dreaming.scene.clearGrounded`),onClick:e.onResetGroundedShortTerm,allowed:e.access.canResetGroundedShortTerm}].map(({label:t,onClick:n,allowed:r})=>p`
              <button
                class="btn btn--subtle btn--sm"
                ?disabled=${!r||e.modeSaving||e.dreamDiaryActionLoading}
                @click=${()=>n()}
              >
                ${t}
              </button>
            `)}
        </div>
      </div>
      ${e.dreamDiaryActionMessage?p`
              <div
                class="callout ${e.dreamDiaryActionMessage.kind===`success`?`success`:`danger`}"
                role="status"
              >
                <div class="row wrap items-center gap-2">
                  <span>${e.dreamDiaryActionMessage.text}</span>
                  ${e.dreamDiaryActionArchivePath?p`
                          <button
                            class="btn btn--subtle btn--sm"
                            ?disabled=${e.dreamDiaryActionLoading}
                            @click=${()=>e.onCopyDreamingArchivePath()}
                          >
                            ${_(`dreaming.wiki.copyArchivePath`)}
                          </button>
                        `:h}
                </div>
              </div>
            `:h}

      <div class="dreams-advanced__sections">
        ${G({titleKey:`dreaming.advanced.stagedTitle`,descriptionKey:`dreaming.advanced.stagedDescription`,emptyKey:`dreaming.advanced.emptyGrounded`,entries:n,controls:p`
            <button
              class="btn btn--subtle btn--sm"
              ?disabled=${!e.access.canResetGroundedShortTerm||e.modeSaving||e.dreamDiaryActionLoading}
              @click=${()=>e.onResetGroundedShortTerm()}
            >
              ${_(`dreaming.scene.clearGrounded`)}
            </button>
          `,badge:()=>_(`dreaming.advanced.originDailyLog`),meta:e=>[e.groundedCount>0?`${e.groundedCount} ${_(`dreaming.stats.grounded`).toLowerCase()}`:``,e.recallCount>0?`${e.recallCount} recall`:``,e.dailyCount>0?`${e.dailyCount} daily`:``]})}
        ${G({titleKey:`dreaming.advanced.shortTermTitle`,descriptionKey:`dreaming.advanced.shortTermDescription`,emptyKey:`dreaming.advanced.emptyShortTerm`,entries:r,controls:p`
            <div class="dreams-advanced__sort">
              <button
                class="dreams-advanced__sort-btn ${t.advancedWaitingSort===`recent`?`dreams-advanced__sort-btn--active`:``}"
                @click=${()=>{t.advancedWaitingSort=`recent`,e.onViewStateChange()}}
              >
                ${_(`dreaming.advanced.sortRecent`)}
              </button>
              <button
                class="dreams-advanced__sort-btn ${t.advancedWaitingSort===`signals`?`dreams-advanced__sort-btn--active`:``}"
                @click=${()=>{t.advancedWaitingSort=`signals`,e.onViewStateChange()}}
              >
                ${_(`dreaming.advanced.sortSignals`)}
              </button>
            </div>
          `,badge:e=>yt(e),meta:e=>[`${e.totalSignalCount} ${_(`dreaming.stats.signals`).toLowerCase()}`,e.recallCount>0?`${e.recallCount} recall`:``,e.dailyCount>0?`${e.dailyCount} daily`:``,e.groundedCount>0?`${e.groundedCount} ${_(`dreaming.stats.grounded`).toLowerCase()}`:``,e.phaseHitCount>0?`${e.phaseHitCount} phase hit`:``]})}
        ${G({titleKey:`dreaming.advanced.promotedTitle`,descriptionKey:`dreaming.advanced.promotedDescription`,emptyKey:`dreaming.advanced.emptyPromoted`,entries:e.promotedEntries,badge:e=>yt(e),meta:e=>[e.promotedAt?`${_(`dreaming.advanced.updatedPrefix`)} ${P(e.promotedAt)}`:``,e.groundedCount>0?`${e.groundedCount} ${_(`dreaming.stats.grounded`).toLowerCase()}`:``,e.totalSignalCount>0?`${e.totalSignalCount} ${_(`dreaming.stats.signals`).toLowerCase()}`:``]})}
      </div>

      ${e.statusError?p`<div class="dreams__controls-error">${e.statusError}</div>`:h}
    </section>
  `}function K(e,t){return t.length>0?p`
        <div class="dreams-diary__insight-list">
          <strong>${_(e)}</strong>
          ${t.map(e=>p`<p class="dreams-diary__insight-line">• ${e}</p>`)}
        </div>
      `:h}function q(e,t){return t?p`
        <p class="dreams-diary__insight-line">
          <strong>${_(e)}</strong>
          ${t}
        </p>
      `:h}function xt(e,t){if(e.kind===`import`){let n=e.item;return p`
      <p class="dreams-diary__insight-line">${n.summary}</p>
      ${K(`dreaming.wiki.candidateSignals`,n.candidateSignals)}
      ${K(`dreaming.wiki.corrections`,n.correctionSignals)}
      ${t?p`
              <div class="dreams-diary__insight-list">
                <strong>${_(`dreaming.wiki.importDetails`)}</strong>
                ${q(`dreaming.wiki.startedWith`,n.firstUserLine)}
                ${q(`dreaming.wiki.endedOn`,n.lastUserLine===n.firstUserLine?void 0:n.lastUserLine)}
                ${q(`dreaming.wiki.messages`,`${_(`dreaming.wiki.counts.userMessages`,{count:String(n.userMessageCount)})} · ${_(`dreaming.wiki.counts.assistantMessages`,{count:String(n.assistantMessageCount)})}`)}
                ${q(`dreaming.wiki.riskReasons`,n.riskReasons.join(`, `))}
                ${q(`dreaming.wiki.labels`,n.labels.join(`, `))}
              </div>
            `:h}
      ${n.preferenceSignals.length>0?p`
              <div class="dreams-diary__insight-signals">
                ${n.preferenceSignals.map(e=>p`<span class="dreams-diary__insight-signal">${e}</span>`)}
              </div>
            `:h}
    `}let n=e.item;return p`
    ${n.snippet?p`<p class="dreams-diary__insight-line">${n.snippet}</p>`:h}
    ${K(`dreaming.wiki.claims`,n.claims)}
    ${K(`dreaming.wiki.openQuestions`,n.questions)}
    ${K(`dreaming.wiki.contradictions`,n.contradictions)}
    ${t?p`
            <div class="dreams-diary__insight-list">
              <strong>${_(`dreaming.wiki.pageDetails`)}</strong>
              ${q(`dreaming.wiki.wikiPage`,n.pagePath)}
              ${q(`dreaming.wiki.id`,n.id)}
            </div>
          `:h}
  `}function St(e,t){let n=e.viewState,r=t.item,i=t.kind===`import`?n.expandedInsightCards:n.expandedWikiCards,a=i.has(r.pagePath),o=t.kind===`import`?t.item.riskLevel:`wiki`,s=t.kind===`import`?pt(t.item):ut(t.item.kind),c=t.kind===`import`?t.item.activeBranchMessages>0?` · ${_(`dreaming.wiki.counts.messages`,{count:String(t.item.activeBranchMessages)})}`:``:` · ${r.pagePath}`;return p`
    <article
      class="dreams-diary__insight-card dreams-diary__insight-card--clickable"
      data-import-page=${t.kind===`import`?r.pagePath:h}
      data-wiki-page=${t.kind===`wiki`?r.pagePath:h}
      @click=${()=>{if(t.kind===`wiki`&&t.item.kind===`report`){V(r.pagePath,e);return}B(i,r.pagePath,e.onViewStateChange)}}
    >
      <div class="dreams-diary__insight-topline">
        <div class="dreams-diary__insight-title">${r.title}</div>
        <span class="dreams-diary__insight-badge dreams-diary__insight-badge--${o}">
          ${s}
        </span>
      </div>
      <div class="dreams-diary__insight-meta">
        ${r.updatedAt?P(r.updatedAt):F(r.pagePath)}${c}
      </div>
      ${xt(t,a)}
      <div class="dreams-diary__insight-actions">
        <button
          class="btn btn--subtle btn--sm"
          @click=${t=>{t.stopPropagation(),B(i,r.pagePath,e.onViewStateChange)}}
        >
          ${_(a?`dreaming.wiki.hideDetails`:`dreaming.wiki.details`)}
        </button>
        <button
          class="btn btn--subtle btn--sm"
          @click=${t=>{t.stopPropagation(),V(r.pagePath,e)}}
        >
          ${_(t.kind===`import`?`dreaming.wiki.openSourcePage`:`dreaming.wiki.openWikiPage`)}
        </button>
      </div>
    </article>
  `}function Ct(e,t,n){let r=e.viewState;return p`
    <div class="dreams-diary__daychips">
      ${t.map((i,a)=>p`
          <button
            class="dreams-diary__day-chip ${a===n?`dreams-diary__day-chip--active`:``}"
            @click=${()=>{nt(r,a,t.length),e.onViewStateChange()}}
          >
            ${i}
          </button>
        `)}
    </div>
  `}function wt(e,t){let{clusters:n}=t;if(n.length===0)return p`
      <div class="dreams-diary__empty">
        <div class="dreams-diary__empty-text">
          ${_(t.loading?t.loadingKey:t.emptyKey)}
        </div>
        ${t.loading?h:p`<div class="dreams-diary__empty-hint">${_(t.emptyHintKey)}</div>`}
      </div>
    `;let r=e.viewState,i=Math.max(0,Math.min(r.diaryPage,n.length-1)),a=l(n[i],t.kind===`imports`?`selected imported insight cluster`:`selected memory overview cluster`),o=n.reduce((e,t)=>e+t.itemCount,0);return{navigation:Ct(e,n.map(e=>e.label),i),content:p`
      <article class="dreams-diary__entry" key="${t.kind}-${a.key}">
        <div class="dreams-diary__accent"></div>
        <div class="dreams-diary__date">${t.date(a)}</div>
        ${t.truncated?p`<p class="dreams-diary__para dreams-diary__bounded-result">
                ${_(`dreaming.wiki.boundedResults`,{returned:o.toLocaleString(v.getLocale()),total:t.totalItems.toLocaleString(v.getLocale())})}
              </p>`:h}
        <div class="dreams-diary__prose">${t.prose(a)}</div>
        <div class="dreams-diary__insights">${a.items.map(t.renderItem)}</div>
      </article>
    `}}function Tt(e){return wt(e,{kind:`imports`,clusters:e.wikiImportInsights?.clusters??[],totalItems:e.wikiImportInsights?.totalItems??0,truncated:e.wikiImportInsights?.truncated??!1,loading:e.wikiImportInsightsLoading,loadingKey:`dreaming.wiki.loadingInsights`,emptyKey:`dreaming.wiki.noInsights`,emptyHintKey:`dreaming.wiki.noInsightsHint`,date:e=>{let t=[_(`dreaming.wiki.counts.chats`,{count:String(e.itemCount)}),...e.highRiskCount>0?[_(`dreaming.wiki.counts.sensitive`,{count:String(e.highRiskCount)})]:[],...e.preferenceSignalCount>0?[_(`dreaming.wiki.counts.signals`,{count:String(e.preferenceSignalCount)})]:[]];return`${e.label} · ${t.join(` · `)}`},prose:e=>{let t=[_(`dreaming.wiki.importedClusterSummary`,{label:e.label.toLowerCase()}),...e.withheldCount>0?[_(e.withheldCount===1?`dreaming.wiki.withheldDigestOne`:`dreaming.wiki.withheldDigests`,{count:String(e.withheldCount)})]:[]];return p`<p class="dreams-diary__para">${t.join(` `)}</p>`},renderItem:t=>St(e,{kind:`import`,item:t})})}function Et(e){let t=e.wikiOverview;return wt(e,{kind:`wiki`,clusters:t?.clusters??[],totalItems:t?.totalItems??0,truncated:t?.truncated??!1,loading:e.wikiOverviewLoading,loadingKey:`dreaming.wiki.loadingWiki`,emptyKey:`dreaming.wiki.emptyWiki`,emptyHintKey:`dreaming.wiki.emptyWikiHint`,date:()=>{let e=[I(t?.totalPages??0),...(t?.totalClaims??0)>0?[L(t.totalClaims)]:[],...(t?.totalQuestions??0)>0?[R(t.totalQuestions)]:[],...(t?.totalContradictions??0)>0?[z(t.totalContradictions)]:[]];return`${_(`dreaming.wiki.vault`)} · ${e.join(` · `)}`},prose:e=>p`
      <p class="dreams-diary__para">
        ${_(`dreaming.wiki.fullVaultBreakdown`,{breakdown:t?dt(t.pageCounts):_(`dreaming.wiki.noPagesYet`)})}
      </p>
      <p class="dreams-diary__para">
        ${_(`dreaming.wiki.selectedSection`,{summary:ft(e)})}
        ${e.updatedAt?` ${_(`dreaming.wiki.latestUpdate`,{date:P(e.updatedAt)})}`:``}
      </p>
    `,renderItem:t=>St(e,{kind:`wiki`,item:t})})}function Dt(e){let t=e.viewState;if(typeof e.dreamDiaryContent!=`string`)return p`
      <div class="dreams-diary__empty">
        <div class="dreams-diary__empty-moon">
          <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
            <circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="0.5" opacity="0.2" />
            <path d="M20 8a10 10 0 0 1 0 16 10 10 0 1 0 0-16z" fill="currentColor" opacity="0.08" />
          </svg>
        </div>
        <div class="dreams-diary__empty-text">${_(`dreaming.diary.noDreamsYet`)}</div>
        <div class="dreams-diary__empty-hint">${_(`dreaming.diary.noDreamsHint`)}</div>
      </div>
    `;let n=Qe(e.dreamDiaryContent);if(n.length===0)return p`
      <div class="dreams-diary__empty">
        <div class="dreams-diary__empty-text">${_(`dreaming.diary.waitingTitle`)}</div>
        <div class="dreams-diary__empty-hint">${_(`dreaming.diary.waitingHint`)}</div>
      </div>
    `;let r=n.toReversed(),i=Math.max(0,Math.min(t.diaryPage,r.length-1)),a=l(r[i],`selected dreaming diary entry`);return{navigation:Ct(e,r.map(e=>et(e.date)),i),content:p`
      <article class="dreams-diary__entry" key="${i}">
        <div class="dreams-diary__accent"></div>
        ${a.date?p`<time class="dreams-diary__date">${a.date}</time>`:h}
        <div class="dreams-diary__prose">
          ${ot(a.body).map((e,t)=>p`<p class="dreams-diary__para" style="animation-delay: ${.3+t*.15}s;">
                ${de(Ce(e))}
              </p>`)}
        </div>
      </article>
    `}}function Ot(e){let t=e.viewState,n=t.activeDiarySubTab,r=(n===`insights`||n===`wiki`)&&!e.memoryWikiEnabled,i=n===`dreams`?e.dreamDiaryError:n===`insights`?e.wikiImportInsightsError:e.wikiOverviewError;if(i&&!r)return p`
      <section class="dreams-diary">
        <div class="dreams-diary__error">${i}</div>
      </section>
    `;let a=n===`dreams`?Dt(e):n===`insights`?Tt(e):Et(e),o=`navigation`in a?a.navigation:h,s=`content`in a?a.content:a;return p`
    <section class="dreams-diary">
      <div class="dreams-diary__chrome">
        <div class="dreams-diary__header">
          <span class="dreams-diary__title">${_(`dreaming.diary.title`)}</span>
          ${y({id:`dream-diary`,active:n,tabs:[{value:`dreams`,label:_(`dreaming.wiki.dreamsTab`)},{value:`insights`,label:_(`dreaming.wiki.insightsTab`)},{value:`wiki`,label:_(`dreaming.wiki.wikiTab`)}],ariaLabel:_(`dreaming.diary.title`),panelId:`dream-diary-panel`,variant:`sub`,onSelect:n=>{H(t),t.activeDiarySubTab=n,t.diaryPage=0,e.onViewStateChange()}})}
          <button
            class="btn btn--subtle btn--sm"
            ?disabled=${r?!e.access.canOpenConfig:e.modeSaving||(n===`dreams`?e.dreamDiaryLoading:n===`insights`?e.wikiImportInsightsLoading:e.wikiOverviewLoading)}
            @click=${()=>{t.diaryPage=0,r?e.onOpenConfig():n===`dreams`?e.onRefreshDiary():n===`insights`?e.onRefreshImports():e.onRefreshWikiOverview()}}
          >
            ${r?_(`dreaming.wiki.howToEnable`):n===`dreams`?e.dreamDiaryLoading?_(`dreaming.diary.reloading`):_(`dreaming.diary.reload`):n===`insights`?e.wikiImportInsightsLoading?`Reloading…`:`Reload`:e.wikiOverviewLoading?`Reloading…`:`Reload`}
          </button>
        </div>
        ${ht(n)}
        ${r?h:o}
      </div>

      <div
        id="dream-diary-panel"
        role="tabpanel"
        aria-labelledby=${`dream-diary-tab-${n}`}
      >
        ${r?p`
                <div class="dreams-diary__empty">
                  <div class="dreams-diary__empty-text">${_(`dreaming.wiki.unavailable`)}</div>
                  <div class="dreams-diary__empty-hint">
                    ${_(`dreaming.wiki.unavailablePluginPrefix`)}
                    <code>memory-wiki</code> ${_(`dreaming.wiki.unavailablePluginSuffix`)}
                  </div>
                  <div class="dreams-diary__empty-hint">
                    ${_(`dreaming.wiki.enablePrefix`)}
                    <code>plugins.entries.memory-wiki.enabled = true</code>${_(`dreaming.wiki.enableSuffix`)}
                  </div>
                  <div class="dreams-diary__empty-actions">
                    <button
                      class="btn btn--subtle btn--sm"
                      ?disabled=${!e.access.canOpenConfig}
                      @click=${()=>e.onOpenConfig()}
                    >
                      ${_(`dreaming.wiki.openConfig`)}
                    </button>
                  </div>
                </div>
              `:s}
      </div>
      ${mt(e)}
    </section>
  `}var kt,At,J,Y,jt,Mt,Nt;function Pt(){return(Pt=e((()=>{t(),s(),f(),pe(),Pe(),Te(),we(),Se(),ge(),g(),u(),kt=/<!--\s*openclaw:dreaming:diary:start\s*-->/,At=/<!--\s*openclaw:dreaming:diary:end\s*-->/,J=[`dreaming.phrases.consolidatingMemories`,`dreaming.phrases.tidyingKnowledgeGraph`,`dreaming.phrases.replayingConversations`,`dreaming.phrases.weavingShortTerm`,`dreaming.phrases.defragmentingMemoryLane`,`dreaming.phrases.filingLooseThoughts`,`dreaming.phrases.connectingDots`,`dreaming.phrases.compostingContext`,`dreaming.phrases.alphabetizingSubconscious`,`dreaming.phrases.promotingHunches`,`dreaming.phrases.forgettingNoise`,`dreaming.phrases.dreamingEmbeddings`,`dreaming.phrases.reorganizingAttic`,`dreaming.phrases.indexingDay`,`dreaming.phrases.nurturingInsights`,`dreaming.phrases.simmeringIdeas`,`dreaming.phrases.whisperingVectorStore`],Y={light:`dreaming.phase.light`,deep:`dreaming.phase.deep`,rem:`dreaming.phase.rem`},jt=6e3,Mt=[{top:8,left:15,size:3,delay:0,hue:`neutral`},{top:12,left:72,size:2,delay:1.4,hue:`neutral`},{top:22,left:35,size:3,delay:.6,hue:`accent`},{top:18,left:88,size:2,delay:2.1,hue:`neutral`},{top:35,left:8,size:2,delay:.9,hue:`neutral`},{top:45,left:92,size:2,delay:1.7,hue:`neutral`},{top:55,left:25,size:3,delay:2.5,hue:`accent`},{top:65,left:78,size:2,delay:.3,hue:`neutral`},{top:75,left:45,size:2,delay:1.1,hue:`neutral`},{top:82,left:60,size:3,delay:1.8,hue:`accent`},{top:30,left:55,size:2,delay:.4,hue:`neutral`},{top:88,left:18,size:2,delay:2.3,hue:`neutral`}],Nt=[[`source`,`sources`],[`synthesis`,`syntheses`],[`report`,`reports`],[`entity`,`entities`],[`concept`,`concepts`]]})))()}function Ft(e){return le(e,{hour:`numeric`,minute:`2-digit`},``)||null}function It(e){let t=Object.values(e?.phases??{}).filter(e=>e.enabled&&typeof e.nextRunAtMs==`number`).map(e=>e.nextRunAtMs).toSorted((e,t)=>e-t)[0];return t===void 0?null:Ft(t)}function Lt(e,t){let n=e&&typeof e==`object`?e:null,r=typeof n?.title==`string`&&n.title.trim()?n.title.trim():t,i=typeof n?.path==`string`&&n.path.trim()?n.path.trim():t,a=typeof n?.content==`string`&&n.content.length>0?n.content:_(`dreaming.wiki.noContent`),o=typeof n?.updatedAt==`string`&&n.updatedAt.trim()?n.updatedAt.trim():void 0,s=typeof n?.totalLines==`number`&&Number.isFinite(n.totalLines)?Math.max(0,Math.floor(n.totalLines)):void 0;return{title:r,path:i,content:a,...s===void 0?{}:{totalLines:s},...n?.truncated===!0?{truncated:!0}:{},...o?{updatedAt:o}:{}}}var X;function Rt(){return(Rt=e((()=>{o(),f(),ue(),me(),ke(),De(),g(),ie(),oe(),ce(),re(),M(),N(),Pt(),X=class extends te{constructor(...e){super(...e),this.agentId=``,this.dreaming=x(),this.toggleConfirmOpen=!1,this.toggleConfirmLoading=!1,this.pendingEnabled=null,this.viewState=tt(),this.gatewaySource=null,this.gatewayBindingEpoch=0,this.gatewayEpoch=0,this.hasBoundGatewaySource=!1,this.selectedAgentId=null,this.subscriptions=new ne(this).effect(()=>this.context?.gateway,e=>{let t=this.hasBoundGatewaySource;this.hasBoundGatewaySource=!0,this.gatewaySource=e;let n=++this.gatewayBindingEpoch;this.gatewayEpoch+=1;let r=e.subscribe(t=>{this.isGatewayBindingCurrent(e,n)&&this.applyGatewaySnapshot(t)});return this.applyGatewaySnapshot(e.snapshot,t?`replacement`:`initial`),r}).effect(()=>this.context?.runtimeConfig,e=>(this.syncConfigSnapshot(),e.subscribe(()=>{this.syncConfigSnapshot(),this.requestUpdate()})))}updated(e){e.has(`agentId`)&&this.applyAgentId()}disconnectedCallback(){this.subscriptions.clear(),this.gatewayBindingEpoch+=1,this.gatewayEpoch+=1,this.gatewaySource=null,this.resetTransientState(),this.dreaming=x(),super.disconnectedCallback()}isGatewayBindingCurrent(e,t){return this.isConnected&&this.gatewaySource===e&&this.gatewayBindingEpoch===t&&this.context.gateway===e}captureTaskScope(){let e=this.gatewaySource;return e?{gateway:e,epoch:this.gatewayEpoch,state:this.dreaming}:null}isTaskScopeCurrent(e){return this.isConnected&&this.gatewaySource===e.gateway&&this.gatewayEpoch===e.epoch&&this.context.gateway===e.gateway&&this.dreaming===e.state}resetTransientState(){H(this.viewState),this.toggleConfirmOpen=!1,this.toggleConfirmLoading=!1,this.pendingEnabled=null}createGatewayState(e=this.context.gateway.snapshot){return x({client:e.client,connected:e.phase===`connected`,hello:e.hello,configSnapshot:this.context.runtimeConfig.state.configSnapshot,applySessionKey:e.sessionKey,selectedAgentId:this.selectedAgentId})}applyGatewaySnapshot(e,t){let n=this.dreaming.client!==e.client,r=this.dreaming.connected!==(e.phase===`connected`),i=e.phase===`connected`&&!this.dreaming.connected,a=t===`replacement`||n||r;r&&(this.gatewayEpoch+=1),a?(this.dreaming=this.createGatewayState(e),t!==`initial`&&this.resetTransientState()):(this.dreaming.connected=e.phase===`connected`,this.dreaming.hello=e.hello,this.dreaming.applySessionKey=e.sessionKey),e.phase===`connected`&&this.selectedAgentId&&(a||i)&&this.loadAll(),this.requestUpdate()}applyAgentId(){let e=this.agentId.trim()||null;this.selectedAgentId!==e&&(this.selectedAgentId=e,this.gatewayEpoch+=1,this.resetTransientState(),this.dreaming=this.createGatewayState(),e&&this.dreaming.connected&&this.loadAll())}syncConfigSnapshot(){this.dreaming.configSnapshot=this.context.runtimeConfig.state.configSnapshot}async runDreamingTask(e,t=this.captureTaskScope()){if(!t||!this.isTaskScopeCurrent(t))return;let n=e(t.state);this.requestUpdate();try{let e=await n;return this.isTaskScopeCurrent(t)?e:void 0}finally{this.isTaskScopeCurrent(t)&&this.requestUpdate()}}async confirmDreamingTask(e,t){let n=this.captureTaskScope();!n||!await Ae(t)||!this.isTaskScopeCurrent(n)||await this.runDreamingTask(e,n)}async loadAll(e=!1){let t=this.captureTaskScope();if(!t||!t.state.client||!t.state.connected||!t.state.selectedAgentId)return;let n=this.context.runtimeConfig;e?await n.refresh():await n.ensureLoaded(),!(!this.isTaskScopeCurrent(t)||this.context.runtimeConfig!==n)&&(this.syncConfigSnapshot(),await Promise.all([this.runDreamingTask(E,t),this.runDreamingTask(D,t),this.runDreamingTask(Re,t),this.runDreamingTask(ze,t)]))}setEnabled(e,t){!S(this.dreaming,`config.patch`,`operator.admin`)||this.dreaming.dreamingModeSaving||this.toggleConfirmLoading||this.toggleConfirmOpen||t===e||(this.pendingEnabled=e,this.toggleConfirmOpen=!0,this.dreaming.dreamingStatusError=null)}cancelToggle(){this.toggleConfirmLoading||(this.toggleConfirmOpen=!1,this.pendingEnabled=null,this.dreaming.dreamingStatusError=null)}async confirmToggle(){let e=this.pendingEnabled;if(e==null||this.toggleConfirmLoading||!S(this.dreaming,`config.patch`,`operator.admin`))return;this.toggleConfirmLoading=!0,this.dreaming.dreamingStatusError=null;let t=this.captureTaskScope(),n=this.context.runtimeConfig;if(!t){this.toggleConfirmLoading=!1;return}try{let r=()=>this.isTaskScopeCurrent(t)&&this.context.runtimeConfig===n&&S(t.state,`config.patch`,`operator.admin`),i=await this.runDreamingTask(t=>Xe(t,n,e,r),t);if(!this.isTaskScopeCurrent(t)||this.context.runtimeConfig!==n)return;if(!i){this.dreaming.dreamingStatusError??=_(`dreaming.toggleConfirmation.failed`);return}if(await n.refresh(),!this.isTaskScopeCurrent(t)||this.context.runtimeConfig!==n||(this.syncConfigSnapshot(),await this.runDreamingTask(E,t),!this.isTaskScopeCurrent(t)))return;this.toggleConfirmOpen=!1,this.pendingEnabled=null}finally{this.isTaskScopeCurrent(t)&&(this.toggleConfirmLoading=!1)}}async openWikiPage(e){let t=this.captureTaskScope(),n=t?.state.client,r=t?.state.selectedAgentId;if(!t||!n||!t.state.connected||!r)return null;let i=await n.request(`wiki.get`,{lookup:e,fromLine:1,lineCount:5e3,agentId:r});return!this.isTaskScopeCurrent(t)||t.state.selectedAgentId!==r?null:Lt(i,e)}async refreshWikiData(e){let t=this.captureTaskScope();if(!t?.state.selectedAgentId)return;let n=this.context.runtimeConfig;await n.refresh(),!(!this.isTaskScopeCurrent(t)||this.context.runtimeConfig!==n)&&(this.syncConfigSnapshot(),await this.runDreamingTask(e,t))}render(){let e=this.dreaming,t=this.context.runtimeConfig.state,n=w(ee(t)),r=n.engineOff?null:e.dreamingStatus,i=r?.enabled??n.enabled,a=e.dreamingStatusLoading||e.dreamingModeSaving,o=S(e,`config.patch`,`operator.admin`),s=e.dreamingStatusLoading||e.dreamDiaryLoading,c=e.selectedAgentId??``;return p`
      <section class="content-header content-header--page agent-memory-panel__header">
        <div class="page-meta">
          <div class="dreaming-header-controls">
            <button
              class="btn btn--subtle btn--sm"
              ?disabled=${a||e.dreamDiaryLoading}
              @click=${()=>void this.loadAll(!0)}
            >
              ${_(s?`dreaming.header.refreshing`:`dreaming.header.refresh`)}
            </button>
            <span class="muted">
              ${n.engineOff?_(`dreaming.header.engineOff`):be(_(`common.enabled`),n.overridden)}
            </span>
            <button
              class="dreams__phase-toggle ${i?`dreams__phase-toggle--on`:``}"
              ?disabled=${!o||a||n.engineOff}
              @click=${()=>this.setEnabled(!i,i)}
            >
              <span class="dreams__phase-toggle-dot"></span>
              <span class="dreams__phase-toggle-label">
                ${_(i?`dreaming.header.on`:`dreaming.header.off`)}
              </span>
            </button>
          </div>
        </div>
      </section>
      ${at({access:{canOpenConfig:S(e,`config.openFile`,`operator.admin`,{requireAdvertisement:!1}),canBackfillDiary:S(e,`doctor.memory.backfillDreamDiary`,`operator.write`),canDedupeDreamDiary:S(e,`doctor.memory.dedupeDreamDiary`,`operator.write`),canResetDiary:S(e,`doctor.memory.resetDreamDiary`,`operator.write`),canResetGroundedShortTerm:S(e,`doctor.memory.resetGroundedShortTerm`,`operator.write`),canRepairDreamingArtifacts:S(e,`doctor.memory.repairDreamingArtifacts`,`operator.write`)},viewState:this.viewState,active:i,selectedAgentId:c,shortTermCount:r?.shortTermCount??0,promotedCount:r?.promotedToday??0,phases:r?.phases??void 0,shortTermEntries:r?.shortTermEntries??[],promotedEntries:r?.promotedEntries??[],dreamingOf:null,nextCycle:It(r),timezone:r?.timezone??null,statusError:e.dreamingStatusError,modeSaving:e.dreamingModeSaving,dreamDiaryLoading:e.dreamDiaryLoading,dreamDiaryActionLoading:e.dreamDiaryActionLoading,dreamDiaryActionMessage:e.dreamDiaryActionMessage,dreamDiaryActionArchivePath:e.dreamDiaryActionArchivePath,dreamDiaryError:e.dreamDiaryError,dreamDiaryContent:e.dreamDiaryContent,memoryWikiEnabled:b(t.configSnapshot,`memory-wiki`,{enabledByDefault:!1}),wikiImportInsightsLoading:e.wikiImportInsightsLoading,wikiImportInsightsError:e.wikiImportInsightsError,wikiImportInsights:e.wikiImportInsights,wikiOverviewLoading:e.wikiOverviewLoading,wikiOverviewError:e.wikiOverviewError,wikiOverview:e.wikiOverview,onRefreshDiary:()=>void this.runDreamingTask(D),onRefreshImports:()=>void this.refreshWikiData(Re),onRefreshWikiOverview:()=>void this.refreshWikiData(ze),onOpenConfig:()=>void this.context.runtimeConfig.openFile(),onOpenWikiPage:e=>this.openWikiPage(e),onBackfillDiary:()=>void this.runDreamingTask(Be),onCopyDreamingArchivePath:()=>void this.runDreamingTask(We),onDedupeDreamDiary:()=>void this.confirmDreamingTask(Ge,{title:_(`dreaming.scene.dedupeDiary`),message:_(`dreaming.actions.confirmDedupeDescription`),confirmLabel:_(`dreaming.scene.dedupeDiary`),danger:!0}),onResetDiary:()=>void this.runDreamingTask(Ve),onResetGroundedShortTerm:()=>void this.runDreamingTask(He),onRepairDreamingArtifacts:()=>void this.confirmDreamingTask(Ue,{title:_(`dreaming.scene.repairCache`),message:_(`dreaming.actions.confirmRepairDescription`),confirmLabel:_(`dreaming.scene.repairCache`)}),onViewStateChange:()=>this.requestUpdate()})}
      ${Ze({open:this.toggleConfirmOpen,enabling:this.pendingEnabled===!0,loading:this.toggleConfirmLoading,onConfirm:()=>void this.confirmToggle(),onCancel:()=>this.cancelToggle(),hasError:!!e.dreamingStatusError})}
    `}},r([a({context:he,subscribe:!0})],X.prototype,`context`,void 0),r([fe({attribute:!1})],X.prototype,`agentId`,void 0),r([m()],X.prototype,`dreaming`,void 0),r([m()],X.prototype,`toggleConfirmOpen`,void 0),r([m()],X.prototype,`toggleConfirmLoading`,void 0),r([m()],X.prototype,`pendingEnabled`,void 0),customElements.get(`openclaw-agent-memory-panel`)||customElements.define(`openclaw-agent-memory-panel`,X)})))()}function zt(e){return e===`view_image`?`image`:e.replace(/_([a-z])/gu,(e,t)=>t.toUpperCase())}function Bt(e){return e?.groups?.length?e.groups.map(e=>{let t=Ht.get(e.id);return{id:e.id,label:t?_(`agents.toolCatalog.groups.${t}`):e.label,source:e.source,pluginId:e.pluginId,tools:e.tools.map(e=>({id:e.id,label:e.label,description:e.description,source:e.source,pluginId:e.pluginId,optional:e.optional,defaultProfiles:[...e.defaultProfiles]}))}}):Z.map(e=>({id:e.id,label:_(`agents.toolCatalog.groups.${e.labelId}`),tools:e.tools.map(e=>({id:e,label:e,description:_(`agents.toolCatalog.descriptions.${zt(e)}`)}))}))}function Vt(e){return e?.profiles?.length?e.profiles.map(e=>{let t=Ut.get(e.id);return t?{id:e.id,label:_(t)}:e}):Q.map(e=>({id:e.id,label:_(e.labelKey)}))}var Z,Q,Ht,Ut;function $(){return($=e((()=>{g(),Z=[{id:`fs`,labelId:`files`,tools:[`read`,`write`,`edit`,`apply_patch`]},{id:`runtime`,labelId:`runtime`,tools:[`exec`,`process`]},{id:`web`,labelId:`web`,tools:[`web_search`,`web_fetch`]},{id:`memory`,labelId:`memory`,tools:[`memory_search`,`memory_get`]},{id:`sessions`,labelId:`sessions`,tools:[`sessions_list`,`sessions_history`,`sessions_send`,`sessions_spawn`,`session_status`]},{id:`ui`,labelId:`ui`,tools:[`browser`,`canvas`]},{id:`messaging`,labelId:`messaging`,tools:[`message`]},{id:`automation`,labelId:`automation`,tools:[`cron`,`gateway`]},{id:`nodes`,labelId:`nodes`,tools:[`nodes`]},{id:`agents`,labelId:`agents`,tools:[`agents_list`]},{id:`media`,labelId:`media`,tools:[`view_image`]}],Q=[{id:`minimal`,labelKey:`agents.toolCatalog.profiles.minimal`},{id:`coding`,labelKey:`agents.toolCatalog.profiles.coding`},{id:`messaging`,labelKey:`agents.toolCatalog.profiles.messaging`},{id:`full`,labelKey:`agents.toolCatalog.profiles.full`}],Ht=new Map(Z.map(e=>[e.id,e.labelId])),Ut=new Map(Q.map(e=>[e.id,e.labelKey]))})))()}export{Rt as a,k as c,Bt as i,$ as n,M as o,Vt as r,w as s,Q as t};
//# sourceMappingURL=tool-catalog-BDpmuWHA.js.map