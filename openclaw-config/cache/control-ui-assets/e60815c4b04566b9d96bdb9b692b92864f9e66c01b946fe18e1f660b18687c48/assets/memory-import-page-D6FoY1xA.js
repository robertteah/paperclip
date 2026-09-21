import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,L as n,R as r}from"./control-ui-foundation-DMb6IeIq.js";import{Ds as i,Gc as a,Gn as o,Jo as s,Kn as ee,Os as c,Yo as l,do as u,ks as d,qc as f,qo as te,uo as ne}from"./control-ui-core-DzidtL-P.js";import{$ as re,K as p,X as m,at as h,q as g}from"./lit-runtime-vxhGQLC6.js";import{Rn as _,Tn as v,h as ie,m as ae,nn as y,sn as b,zn as x}from"./control-ui-core-CaKBexnk.js";import{Bt as S,Ft as C,Gt as w,It as oe,kt as T}from"./control-ui-core-uEI6aN5p.js";import{B as E,I as se,L as ce,R as le}from"./control-ui-boot-shared-nBxCfWV5.js";import{a as ue,r as de}from"./gateway-runtime-DP4whqrA.js";import{Et as fe,Ft as D,Ht as O,Lt as k,Nt as A,Ot as j,Pt as M,Vt as N,io as P,to as F,wt as I,zt as L}from"./control-ui-boot-shared-Cyt1Zyts.js";import{V as R}from"./control-ui-boot-new-DeGMjctK.js";import{n as z,t as B}from"./settings-workspace-IBRfeTG9.js";import{n as V,t as pe}from"./en-memory-import-x86UA4vP.js";function me(e){return e.backfillRollbackPending?m`
    <openclaw-modal-dialog
      label=${w(`memoryImport.backfill.rollbackConfirmTitle`)}
      description=${w(`memoryImport.backfill.rollbackConfirmDescription`)}
      @modal-cancel=${e.onBackfillRollbackCancel}
    >
      <div class="exec-approval-card memory-import__confirm">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">
              ${w(`memoryImport.backfill.rollbackConfirmTitle`)}
            </div>
            <div class="exec-approval-sub">
              ${w(`memoryImport.backfill.rollbackConfirmDescription`)}
            </div>
          </div>
        </div>
        <div class="callout warn">${w(`memoryImport.backfill.rollbackWarning`)}</div>
        <div class="exec-approval-actions">
          <button
            class="btn danger"
            data-test-id="memory-backfill-rollback-confirm"
            ?disabled=${e.backfillBusy!==null||e.applyingProviderId!==null}
            @click=${e.onBackfillRollbackConfirm}
          >
            ${w(`memoryImport.backfill.rollback`)}
          </button>
          <button
            class="btn"
            ?disabled=${e.backfillBusy!==null||e.applyingProviderId!==null}
            @click=${e.onBackfillRollbackCancel}
          >
            ${w(`common.cancel`)}
          </button>
        </div>
      </div>
    </openclaw-modal-dialog>
  `:g}function H(){return(H=e((()=>{p(),T(),S()})))()}function U(e,t){let n=e.details?.[t];return typeof n==`string`&&n.trim()?n:void 0}function he(e){let t=new Map;for(let n of e){let e=U(n,`collectionId`)??n.id,r=U(n,`collectionLabel`)??U(n,`sourceLabel`)??w(`memoryImport.unknownCollection`),i=t.get(e)??{id:e,label:r,items:[]};i.items.push(n),t.set(e,i)}return[...t.values()].toSorted((e,t)=>e.label.localeCompare(t.label))}function W(e){return e.providerId===`claude`?w(`memoryImport.claudeCode`):e.label}function ge(e){return e.providerId===`codex`?w(`memoryImport.codexDescription`):e.providerId===`claude`?w(`memoryImport.claudeDescription`):w(`memoryImport.providerFallback`)}function G(e){return w(e===1?`memoryImport.fileCountOne`:`memoryImport.fileCount`,{count:String(e)})}function _e(e){return w(e===1?`memoryImport.backfill.processedDayCountOne`:`memoryImport.backfill.processedDayCount`,{count:String(e)})}function K(e){let t=U(e,`relativePath`);if(t)return t;let n=e.target??e.source??e.id;return n.split(/[\\/]/u).at(-1)??n}function ve(e,t,n,r,i){let a=t.items.filter(e=>e.status===`planned`).map(e=>e.id),o=a.length>0&&a.every(e=>n.has(e)),s=t.items.filter(e=>e.status===`conflict`).length;return m`
    <div class="settings-row settings-row--stacked memory-import__collection">
      <div class="memory-import__collection-header">
        <label class="memory-import__collection-choice">
          <input
            type="checkbox"
            .checked=${o}
            ?disabled=${a.length===0||i}
            @change=${t=>r(e.providerId,a,t.currentTarget.checked)}
          />
          <span>
            <strong>${t.label}</strong>
            <small>${G(t.items.length)}</small>
          </span>
        </label>
        ${s>0?L({kind:`warn`,label:w(`memoryImport.alreadyImported`,{count:String(s)})}):g}
      </div>
      <details ?open=${t.items.length<=4}>
        <summary>${w(`memoryImport.reviewFiles`)}</summary>
        <ul class="memory-import__files">
          ${t.items.map(e=>m`
              <li>
                <span class="memory-import__file-icon" aria-hidden="true">${C.fileText}</span>
                <code title=${e.source??K(e)}>${K(e)}</code>
                <span class="memory-import__file-status memory-import__file-status--${e.status}">
                  ${e.status===`planned`?w(`memoryImport.ready`):e.status===`conflict`?w(`memoryImport.existing`):e.status}
                </span>
              </li>
            `)}
        </ul>
      </details>
    </div>
  `}function q(e){if(!e)return g;let t=e.summary.errors>0||e.summary.conflicts>0,n=e.items.filter(e=>e.status===`error`||e.status===`conflict`||U(e,`recoveryRecordPath`)!==void 0);return m`
    <div
      class="settings-row settings-row--stacked memory-import__result ${t?`memory-import__result--incomplete`:``}"
      role=${t?`alert`:`status`}
    >
      <span aria-hidden="true">${t?C.alertTriangle:C.check}</span>
      <div>
        <strong>
          ${w(t?`memoryImport.importIncomplete`:`memoryImport.importComplete`)}
        </strong>
        <span>
          ${t?w(`memoryImport.importedWithIssues`,{conflicts:String(e.summary.conflicts),errors:String(e.summary.errors),migrated:String(e.summary.migrated)}):w(`memoryImport.importedCount`,{count:String(e.summary.migrated)})}
        </span>
        ${e.reportDir?m`<span class="memory-import__result-path">
                ${w(`memoryImport.reportSaved`)}:
                <code title=${e.reportDir}>${e.reportDir}</code>
              </span>`:g}
        ${n.length>0?m`<ul class="memory-import__result-issues">
                ${n.map(e=>{let t=[{label:w(`memoryImport.recoveryFile`),path:U(e,`recoveryPath`)},{label:w(`memoryImport.recoveryJournal`),path:U(e,`recoveryRecordPath`)},{label:w(`memoryImport.itemBackup`),path:U(e,`backupPath`)}].filter(e=>!!e.path);return m`<li>
                    <strong>${K(e)}</strong>
                    <span>${s(e.reason??e.message,e.status)}</span>
                    ${t.map(e=>m`<span class="memory-import__result-artifact">
                        <span>${e.label}</span>
                        <code title=${e.path}>${e.path}</code>
                      </span>`)}
                  </li>`})}
              </ul>`:g}
      </div>
    </div>
  `}function ye(e,t){let n=new Set(e.selectedByProvider[t.providerId]??[]),r=he(t.items),i=e.applyingProviderId===t.providerId,a=e.backfillBusy===`apply`||e.backfillBusy===`rollback`||e.backfillRollbackPending,o=t.error?m`<div class="callout danger" role="alert">${s(t.error)}</div>`:t.found?m`
          ${t.source?D({title:w(`memoryImport.source`),control:O(t.source,{mono:!0})}):g}
          ${t.target?D({title:w(`memoryImport.destination`),control:O(`${t.target}/memory/imports/`,{mono:!0})}):g}
          ${r.map(r=>ve(t,r,n,e.onToggleCollection,e.loading||e.applyingProviderId!==null||e.error!==null||a))}
          ${D({title:n.size>0?w(`memoryImport.selectedCount`,{count:String(n.size)}):w(`memoryImport.selectAtLeastOne`),control:m`
              <button
                class="btn primary"
                data-test-id="memory-import-provider-button"
                ?disabled=${n.size===0||e.applyingProviderId!==null||a||e.loading||e.error!==null}
                @click=${()=>e.onRequestImport(t.providerId)}
              >
                ${w(i?`common.importing`:`memoryImport.importSelected`)}
              </button>
            `})}
        `:j(t.message??w(`memoryImport.noMemoryFound`));return m`
    <div data-provider-id=${t.providerId}>
      ${k({title:m`<span class="memory-import__provider-title">
            ${P(t.providerId,{className:`memory-import__provider-icon`})}
            ${W(t)}
          </span>`,description:ge(t),actions:L({kind:t.found?`ok`:`muted`,label:t.found?G(t.items.length):w(`memoryImport.notFound`)})},m`${o}${q(e.lastResults[t.providerId])}`)}
    </div>
  `}function be(e){let t=e.plan?.providers.find(t=>t.providerId===e.pendingProviderId);if(!t)return g;let n=e.selectedByProvider[t.providerId]?.length??0,r=w(`memoryImport.confirmTitle`,{provider:W(t)}),i=w(`memoryImport.confirmDescription`,{count:String(n)});return m`
    <openclaw-modal-dialog
      label=${r}
      description=${i}
      @modal-cancel=${()=>{e.applyingProviderId===null&&e.onCancelImport()}}
    >
      <div class="exec-approval-card memory-import__confirm">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">${r}</div>
            <div class="exec-approval-sub">${i}</div>
          </div>
        </div>
        <div class="callout ${e.replaceExisting?`warn`:``}">
          ${e.replaceExisting?w(`memoryImport.confirmReplace`):w(`memoryImport.confirmBackup`)}
        </div>
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            data-test-id="memory-import-confirm"
            ?disabled=${e.applyingProviderId!==null}
            @click=${e.onConfirmImport}
          >
            ${w(`memoryImport.confirmImport`)}
          </button>
          <button
            class="btn"
            ?disabled=${e.applyingProviderId!==null}
            @click=${e.onCancelImport}
          >
            ${w(`common.cancel`)}
          </button>
        </div>
      </div>
    </openclaw-modal-dialog>
  `}function xe(e){let t=e.loading||e.applyingProviderId!==null||e.backfillBusy!==null;return k({title:w(`memoryImport.title`),description:w(`memoryImport.subtitle`),actions:m`
        <button class="btn btn--sm" ?disabled=${t} @click=${e.onRefresh}>
          ${e.loading?w(`common.refreshing`):w(`common.refresh`)}
        </button>
      `},m`
      ${e.agents.length>1?D({title:w(`memoryImport.agent`),control:m`
                <openclaw-agent-select
                  class="agent-select--settings"
                  name="memory-import-agent"
                  .options=${e.agents.map(e=>({value:e.id,label:d(e),agent:e}))}
                  .value=${e.selectedAgentId??``}
                  .accessibleLabel=${w(`memoryImport.agent`)}
                  .disabled=${t}
                  .onSelect=${e.onSelectAgent}
                ></openclaw-agent-select>
              `}):g}
      ${N({title:w(`memoryImport.replaceExisting`),description:w(`memoryImport.replaceHint`),checked:e.replaceExisting,disabled:t,onChange:t=>e.onReplaceExisting(t)})}
    `)}function Se(e){let t=e.backfillBusy!==null||e.applyingProviderId!==null,n=e.backfillPreview;return m`
    <div data-test-id="memory-session-backfill">
      ${k({title:w(`memoryImport.backfill.title`),description:w(`memoryImport.backfill.subtitle`)},m`
          ${e.backfillAvailable?m`
                  ${D({title:w(`memoryImport.backfill.dateRange`),description:w(`memoryImport.backfill.dateRangeHint`),control:m`<div class="memory-import__backfill-dates">
                      <label>
                        <span>${w(`memoryImport.backfill.from`)}</span>
                        <input
                          class="input"
                          type="date"
                          .value=${e.backfillFrom}
                          ?disabled=${t}
                          @input=${t=>e.onBackfillFromChange(t.currentTarget.value)}
                        />
                      </label>
                      <label>
                        <span>${w(`memoryImport.backfill.to`)}</span>
                        <input
                          class="input"
                          type="date"
                          .value=${e.backfillTo}
                          ?disabled=${t}
                          @input=${t=>e.onBackfillToChange(t.currentTarget.value)}
                        />
                      </label>
                    </div>`})}
                  ${D({title:w(`memoryImport.backfill.actions`),control:m`<div class="memory-import__backfill-actions">
                      <button
                        class="btn"
                        data-test-id="memory-backfill-preview"
                        ?disabled=${t}
                        @click=${e.onBackfillPreview}
                      >
                        ${e.backfillBusy===`preview`?w(`memoryImport.backfill.previewing`):w(`memoryImport.backfill.preview`)}
                      </button>
                      <button
                        class="btn primary"
                        data-test-id="memory-backfill-apply"
                        ?disabled=${t}
                        @click=${e.onBackfillApply}
                      >
                        ${e.backfillBusy===`apply`?w(`memoryImport.backfill.applying`):w(`memoryImport.backfill.apply`)}
                      </button>
                      <button
                        class="btn danger"
                        data-test-id="memory-backfill-rollback"
                        ?disabled=${t}
                        @click=${e.onBackfillRollbackRequest}
                      >
                        ${w(`memoryImport.backfill.rollback`)}
                      </button>
                    </div>`})}
                  ${e.backfillError?m`<div class="callout danger" role="alert">${e.backfillError}</div>`:g}
                  ${n?m`<div
                          class="settings-row settings-row--stacked memory-import__backfill-preview"
                        >
                          <strong>
                            ${w(`memoryImport.backfill.previewSummary`,{candidates:String(n.candidates),days:String(n.days)})}
                          </strong>
                          ${n.perDay.length>0?m`<ul>
                                  ${n.perDay.map(e=>m`<li>
                                      <div>
                                        <strong>${e.day}</strong>
                                        <span>
                                          ${w(`memoryImport.backfill.candidateCount`,{count:String(e.candidateCount)})}
                                        </span>
                                      </div>
                                      ${e.sample.length>0?m`<ul>
                                              ${e.sample.map(e=>m`<li>${e}</li>`)}
                                            </ul>`:g}
                                    </li>`)}
                                </ul>`:m`<span>${w(`memoryImport.backfill.noCandidates`)}</span>`}
                          ${n.truncated?m`<div class="callout warn">
                                  ${w(`memoryImport.backfill.previewTruncated`)}
                                </div>`:g}
                        </div>`:g}
                  ${e.backfillProgress?m`<div
                          class="settings-row settings-row--stacked memory-import__backfill-progress"
                          role="status"
                        >
                          <strong>
                            ${e.backfillProgress.complete?w(`memoryImport.backfill.complete`,{count:String(e.backfillProgress.staged)}):w(`memoryImport.backfill.progress`,{days:String(e.backfillProgress.days),staged:String(e.backfillProgress.staged)})}
                          </strong>
                          <span>
                            ${w(`memoryImport.backfill.processedCandidates`,{count:String(e.backfillProgress.candidates)})}
                            · ${_e(e.backfillProgress.days)}
                          </span>
                        </div>`:g}
                  ${e.backfillRollbackResult?m`<div class="settings-row settings-row--stacked" role="status">
                          <strong>${w(`memoryImport.backfill.rollbackComplete`)}</strong>
                          <span>
                            ${w(`memoryImport.backfill.rollbackCounts`,{diary:String(e.backfillRollbackResult.removedDiaryEntries),staged:String(e.backfillRollbackResult.removedStagedEntries)})}
                          </span>
                        </div>`:g}
                `:j(w(`memoryImport.backfill.unavailable`))}
        `)}
      ${me(e)}
    </div>
  `}function Ce(e){return e.connected?e.canAdmin?m`
    <div class="memory-import" data-test-id="memory-import-page">
      ${A(m`
        ${xe(e)} ${Se(e)}
        ${e.error?m`<div class="callout danger" role="alert">${e.error}</div>`:g}
        ${e.applyError?m`<div class="callout danger" role="alert">${e.applyError}</div>`:g}
        ${e.loading&&!e.plan?m`<div class="settings-group memory-import__loading" aria-busy="true">
                <div class="skeleton memory-import__skeleton"></div>
                <div class="skeleton memory-import__skeleton"></div>
              </div>`:(e.plan?.providers??[]).map(t=>ye(e,t))}
        ${be(e)}
      `)}
    </div>
  `:A(j(w(`memoryImport.adminRequired`))):A(j(w(`memoryImport.disconnected`)))}function J(){return(J=e((()=>{p(),R(),T(),oe(),F(),I(),S(),pe(),i(),l(),H(),V()})))()}function Y(e){return te(e,`request failed`)}var X,Z,Q;function $(){return($=e((()=>{r(),se(),p(),re(),v(),ie(),b(),I(),B(),i(),l(),de(),u(),f(),ee(),J(),X=14,Z=`https://docs.openclaw.ai/install/migrating`,Q=class extends a{constructor(...e){super(...e),this.replaceExisting=!1,this.selectedByProvider={},this.applyingProviderId=null,this.pendingImport=null,this.applyError=null,this.lastResults={},this.backfillFrom=``,this.backfillTo=``,this.backfillBusy=null,this.backfillError=null,this.backfillPreview=null,this.backfillProgress=null,this.backfillRollbackResult=null,this.backfillRollbackPending=!1,this.applyEpoch=0,this.backfillEpoch=0,this.lastPlanValue=null,this.subscriptions=new o(this).watch(()=>this.context?.gateway,(e,t)=>e.subscribe(t)).watch(()=>this.context?.agents,(e,t)=>e.subscribe(t)).watch(()=>this.context?.agentSelection,(e,t)=>e.subscribe(t)),this.planTask=new ce(this,{args:()=>{let e=this.context?.gateway.snapshot;return[this.isConnected&&e?.phase===`connected`?e.client??null:null,e?y(e.hello?.auth??null):!1,this.currentAgentId(),this.replaceExisting]},task:async([e,t,n,r],{signal:i})=>!e||!t||!n?le:{client:e,agentId:n,overwrite:r,plan:await e.request(`migrations.memory.plan`,{agentId:n,overwrite:r},{signal:i})},onComplete:e=>{let t=this.lastPlanValue;t&&(t.client!==e.client||t.agentId!==e.agentId||t.overwrite!==e.overwrite)&&(this.resetMutationState({preserveAttemptedImport:t.client!==e.client}),(t.client!==e.client||t.agentId!==e.agentId)&&this.resetBackfillState()),this.lastPlanValue=e;let{plan:n}=e;this.selectedByProvider=Object.fromEntries(n.providers.map(e=>[e.providerId,e.items.filter(e=>e.status===`planned`).map(e=>e.id)]))}})}disconnectedCallback(){this.planTask.run([null,!1,null,this.replaceExisting]),this.applyEpoch+=1,this.backfillEpoch+=1,this.subscriptions.clear(),super.disconnectedCallback()}updated(){let e=this.context.gateway.snapshot;this.pendingImport&&(e.phase!==`connected`||e.client!==(this.planTask.value??this.lastPlanValue)?.client||this.currentAgentId()!==this.pendingImport.agentId)&&this.resetMutationState({preserveAttemptedImport:!0}),e.phase!==`connected`&&(this.backfillBusy!==null||this.backfillRollbackPending)&&this.resetBackfillState()}currentAgentId(){let e=this.context.agents.state.agentsList;if(!e)return null;let t=c(e.agents),n=this.context.agentSelection.state.selectedId;return n&&t.some(e=>e.id===n)?n:t.some(t=>t.id===e.defaultId)?e.defaultId:t[0]?.id??null}get plan(){let e=this.planTask.value??this.lastPlanValue,t=this.context.gateway.snapshot,n=this.currentAgentId();return e&&t.phase===`connected`&&e.client===t.client&&e.agentId===n&&e.overwrite===this.replaceExisting?e.plan:null}get loading(){return this.planTask.status===E.PENDING}get error(){return this.planTask.status===E.ERROR?Y(this.planTask.error):null}get canAdmin(){return y(this.context.gateway.snapshot.hello?.auth??null)}resetMutationState(e={}){let t=e.preserveAttemptedImport&&this.pendingImport?.attempted?this.pendingImport:null;this.applyEpoch+=1,this.selectedByProvider={},this.applyingProviderId=null,this.pendingImport=t,this.applyError=null,this.lastResults={}}refresh(){return this.currentAgentId()?this.planTask.run():this.context.agents.ensureList().then(()=>void 0)}selectAgent(e){this.context.agentSelection.set(e),this.resetMutationState(),this.resetBackfillState()}setReplaceExisting(e){this.replaceExisting=e,this.resetMutationState()}toggleCollection(e,t,n){let r=new Set(this.selectedByProvider[e]??[]);for(let e of t)n?r.add(e):r.delete(e);this.selectedByProvider={...this.selectedByProvider,[e]:[...r]}}requestImport(e){if(!this.canAdmin)return;let t=this.currentAgentId(),n=this.plan?.providers.find(t=>t.providerId===e)?.planFingerprint,r=this.selectedByProvider[e]??[];this.loading||this.error!==null||this.applyingProviderId!==null||this.backfillBusy===`apply`||this.backfillBusy===`rollback`||this.backfillRollbackPending||!t||this.plan?.agentId!==t||!n||r.length===0||(this.applyError=null,this.pendingImport={providerId:e,agentId:t,planFingerprint:n,itemIds:[...r],overwrite:this.replaceExisting,idempotencyKey:ne(),attempted:!1})}async confirmImport(){if(!this.canAdmin||this.applyingProviderId!==null||this.backfillBusy===`apply`||this.backfillBusy===`rollback`||this.backfillRollbackPending)return;let e=this.pendingImport,t=this.context.gateway.snapshot;if(!e||!t.client||this.currentAgentId()!==e.agentId||this.plan?.agentId!==e.agentId)return;let n={...e,attempted:!0},r=t.client;this.pendingImport=n;let i=++this.applyEpoch;this.applyingProviderId=n.providerId,this.applyError=null;try{let e=await r.request(`migrations.memory.apply`,{idempotencyKey:n.idempotencyKey,agentId:n.agentId,providerId:n.providerId,planFingerprint:n.planFingerprint,itemIds:n.itemIds,overwrite:n.overwrite});if(i!==this.applyEpoch||this.context.gateway.snapshot.phase!==`connected`||this.context.gateway.snapshot.client!==r||this.currentAgentId()!==n.agentId)return;this.lastResults={...this.lastResults,[n.providerId]:e},this.pendingImport=null,await this.refresh()}catch(e){i===this.applyEpoch&&(this.applyError=Y(e))}finally{i===this.applyEpoch&&(this.applyingProviderId=null)}}resetBackfillState(){this.backfillEpoch+=1,this.backfillFrom=``,this.backfillTo=``,this.backfillBusy=null,this.backfillError=null,this.backfillPreview=null,this.backfillProgress=null,this.backfillRollbackResult=null,this.backfillRollbackPending=!1}backfillRequest(e){return{agentId:e,...this.backfillFrom?{from:this.backfillFrom}:{},...this.backfillTo?{to:this.backfillTo}:{},limitDays:X}}isCurrentBackfillRequest(e,t,n){return e===this.backfillEpoch&&this.context.gateway.snapshot.phase===`connected`&&this.context.gateway.snapshot.client===t&&this.currentAgentId()===n}async previewBackfill(){let e=this.context.gateway.snapshot.client,t=this.currentAgentId();if(!this.canAdmin||!e||!t||this.backfillBusy!==null||this.applyingProviderId!==null)return;let n=++this.backfillEpoch;this.backfillBusy=`preview`,this.backfillError=null,this.backfillPreview=null,this.backfillProgress=null,this.backfillRollbackResult=null;try{let r=await e.request(`memory.sessionBackfill.preview`,this.backfillRequest(t));this.isCurrentBackfillRequest(n,e,t)&&(this.backfillPreview=r)}catch(r){this.isCurrentBackfillRequest(n,e,t)&&(this.backfillError=Y(r))}finally{this.isCurrentBackfillRequest(n,e,t)&&(this.backfillBusy=null)}}async applyBackfill(){let e=this.context.gateway.snapshot.client,t=this.currentAgentId();if(!this.canAdmin||!e||!t||this.backfillBusy!==null||this.applyingProviderId!==null)return;let n=++this.backfillEpoch;this.backfillBusy=`apply`,this.backfillError=null,this.backfillPreview=null,this.backfillRollbackResult=null,this.backfillProgress={days:0,candidates:0,staged:0,complete:!1};let r=this.backfillProgress,i=new Set;try{for(;;){let a=await e.request(`memory.sessionBackfill.apply`,this.backfillRequest(t));if(!this.isCurrentBackfillRequest(n,e,t))return;if(a.candidates>0&&a.cursor?.advanced!==!0)throw Error(`Session backfill stopped because the server cursor did not advance.`);if(a.candidates===0&&a.cursor?.exhausted!==!0)throw Error(`Session backfill stopped because the server cursor was not exhausted.`);for(let e of a.perDay)i.add(e.day);if(r={days:i.size,candidates:r.candidates+a.candidates,staged:r.staged+a.staged,complete:a.candidates===0},this.backfillProgress=r,a.candidates===0)break}}catch(r){this.isCurrentBackfillRequest(n,e,t)&&(this.backfillError=Y(r))}finally{this.isCurrentBackfillRequest(n,e,t)&&(this.backfillBusy=null)}}async confirmBackfillRollback(){let e=this.context.gateway.snapshot.client,t=this.currentAgentId();if(!this.canAdmin||!e||!t||this.backfillBusy!==null||this.applyingProviderId!==null||!this.backfillRollbackPending)return;let n=++this.backfillEpoch;this.backfillBusy=`rollback`,this.backfillError=null;try{let r=await e.request(`memory.sessionBackfill.rollback`,{agentId:t});this.isCurrentBackfillRequest(n,e,t)&&(this.backfillRollbackResult=r,this.backfillPreview=null,this.backfillProgress=null,this.backfillRollbackPending=!1)}catch(r){this.isCurrentBackfillRequest(n,e,t)&&(this.backfillError=Y(r))}finally{this.isCurrentBackfillRequest(n,e,t)&&(this.backfillBusy=null)}}render(){let e=this.context.gateway.snapshot,t=this.context.agents.state.agentsList,n=this.currentAgentId(),r=Ce({connected:e.phase===`connected`,canAdmin:this.canAdmin,agents:c(t?.agents??[]),selectedAgentId:n,plan:this.plan,loading:this.loading||this.context.agents.state.agentsLoading,error:(n?null:this.context.agents.state.agentsError)??this.error,applyError:this.applyError,replaceExisting:this.replaceExisting,selectedByProvider:this.selectedByProvider,applyingProviderId:this.applyingProviderId,pendingProviderId:this.pendingImport?.agentId===n?this.pendingImport.providerId:null,lastResults:this.lastResults,backfillAvailable:ue(e,`memory.sessionBackfill.preview`)!==!1,backfillFrom:this.backfillFrom,backfillTo:this.backfillTo,backfillBusy:this.backfillBusy,backfillError:this.backfillError,backfillPreview:this.backfillPreview,backfillProgress:this.backfillProgress,backfillRollbackResult:this.backfillRollbackResult,backfillRollbackPending:this.backfillRollbackPending,onSelectAgent:e=>this.selectAgent(e),onReplaceExisting:e=>this.setReplaceExisting(e),onRefresh:()=>void this.refresh(),onToggleCollection:(e,t,n)=>this.toggleCollection(e,t,n),onRequestImport:e=>this.requestImport(e),onConfirmImport:()=>void this.confirmImport(),onCancelImport:()=>{this.applyingProviderId===null&&(this.pendingImport=null,this.applyError=null)},onBackfillFromChange:e=>{this.backfillFrom=e,this.backfillPreview=null,this.backfillProgress=null,this.backfillRollbackResult=null,this.backfillError=null},onBackfillToChange:e=>{this.backfillTo=e,this.backfillPreview=null,this.backfillProgress=null,this.backfillRollbackResult=null,this.backfillError=null},onBackfillPreview:()=>void this.previewBackfill(),onBackfillApply:()=>void this.applyBackfill(),onBackfillRollbackRequest:()=>{this.backfillBusy===null&&(this.backfillRollbackPending=!0,this.backfillError=null)},onBackfillRollbackConfirm:()=>void this.confirmBackfillRollback(),onBackfillRollbackCancel:()=>{this.backfillBusy===null&&(this.backfillRollbackPending=!1)}});return m`
      ${M({title:x(`memory-import`),subtitle:m`${_(`memory-import`)}
        ${fe(Z)}`})}
      ${z(r)}
    `}},t([n({context:ae,subscribe:!0})],Q.prototype,`context`,void 0),t([h()],Q.prototype,`replaceExisting`,void 0),t([h()],Q.prototype,`selectedByProvider`,void 0),t([h()],Q.prototype,`applyingProviderId`,void 0),t([h()],Q.prototype,`pendingImport`,void 0),t([h()],Q.prototype,`applyError`,void 0),t([h()],Q.prototype,`lastResults`,void 0),t([h()],Q.prototype,`backfillFrom`,void 0),t([h()],Q.prototype,`backfillTo`,void 0),t([h()],Q.prototype,`backfillBusy`,void 0),t([h()],Q.prototype,`backfillError`,void 0),t([h()],Q.prototype,`backfillPreview`,void 0),t([h()],Q.prototype,`backfillProgress`,void 0),t([h()],Q.prototype,`backfillRollbackResult`,void 0),t([h()],Q.prototype,`backfillRollbackPending`,void 0),customElements.get(`openclaw-memory-import-page`)||customElements.define(`openclaw-memory-import-page`,Q)})))()}$();
//# sourceMappingURL=memory-import-page-D6FoY1xA.js.map