import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$n as t,Fr as n,L as r,R as i,Zn as a,ba as o,ca as s,ga as c,ia as l,rr as u}from"./control-ui-foundation-DMb6IeIq.js";import{$s as d,A as ee,Aa as te,Gc as ne,Gn as re,J as ie,K as ae,Kn as oe,Oa as se,Wc as ce,Y as le,Ys as f,Zt as ue,aa as de,ao as fe,ca as pe,cc as me,la as he,lc as ge,na as _e,nn as ve,on as ye,q as be,qc as xe,ra as Se,rn as Ce,ta as we,tn as Te,to as Ee,uc as De,xr as Oe,yr as ke}from"./control-ui-core-DzidtL-P.js";import{$ as Ae,K as p,X as m,at as h,m as je,p as Me,q as g,st as Ne}from"./lit-runtime-vxhGQLC6.js";import{L as Pe,Tn as Fe,Zn as Ie,ar as _,cr as v,fn as Le,h as Re,hr as y,ir as b,m as ze,pn as Be,zn as Ve}from"./control-ui-core-CaKBexnk.js";import{M as He,N as Ue}from"./control-ui-boot-shared-DW2inEkr.js";import{Bt as x,Ft as S,Gt as C,It as w,Xt as We,Yt as Ge}from"./control-ui-core-uEI6aN5p.js";import{a as Ke,n as qe,r as Je}from"./gateway-runtime-DP4whqrA.js";import{Bt as Ye,Rt as Xe,pa as Ze,wt as T,zt as E}from"./control-ui-boot-shared-Cyt1Zyts.js";import{Gs as Qe,Ws as $e,Ys as et,qs as D}from"./control-ui-boot-shared-CH-OC11d.js";import{n as tt,t as nt}from"./stream-auto-follow-controller-DQpG-yCd.js";import{_ as rt}from"./control-ui-boot-new-DeGMjctK.js";import{n as it,t as at}from"./hub-tabs-DuEhaWau.js";import{n as ot,t as st}from"./settings-workspace-IBRfeTG9.js";var O,k;function A(){return(A=e((()=>{We(),O={activity:{title:`Activity`,visibleCount:`{visible} of {total}`,search:`Search`,searchPlaceholder:`Filter by activity, summary, run, session`,filters:`Filters`,toolFilter:`Tool`,allTools:`All tools`,statusFilters:`Status filters`,autoFollow:`Auto-follow`,expandAll:`Expand all`,collapseAll:`Collapse all`,clear:`Clear`,empty:`No activity yet.`,emptyFiltered:`No activity matches these filters.`,argumentHiddenOne:`1 argument hidden`,argumentsHidden:`{count} arguments hidden`,streamLabel:`Agent activity entries`,toolCallId:`Tool call`,runId:`Run`,session:`Session`,outputTruncated:`Preview redacted and truncated.`,noOutputPreview:`No output preview.`,currentWork:{title:`Active sessions`,loading:`Loading active sessions…`,empty:`No active sessions.`,disconnected:`Connect to the Gateway to load active sessions.`,loadFailed:`Could not load active sessions.`,queued:`Queued`,limit:`Showing {count} of {total} active sessions.`},answerCandidate:{title:`Answer candidate`,itemId:`Item`,candidate:`Candidate answer`,superseded:`Superseded answer`,selected:`Selected answer`},status:{running:`Running`,done:`Done`,error:`Error`},runInspector:{activityView:`Activity view`,liveMode:`Live activity`,mode:`Run inspector`,intro:`Durable Gateway-backed identity evidence for one run. Reloading this page queries the Gateway again.`,bestEffortWarning:`Best-effort audit warning: this view is for operational diagnostics, not a lossless compliance record. Absence of evidence does not prove that an action or run did not occur.`,evidenceStateLabel:`Evidence state: {state}`,evidenceState:{present:`Present`,absent:`Absent`,unknown:`Unknown`,unsupported:`Unsupported`},coverageStatusLabel:`Inspection coverage: {state}`,coverage:{enforced:{label:`Enforced`,description:`A decision receipt proves identity-aware evaluation; it does not by itself mean the action was allowed.`},attributionOnly:{label:`Attribution only`,description:`Identity facts were recorded, but no identity-aware policy or grant evaluation is proven.`},unattributed:{label:`Unattributed`,description:`The supported path was observed without a usable invoker principal.`},unknown:{label:`Unknown`,description:`Expected evidence is missing, corrupt, expired unexpectedly, or unreadable.`},unsupported:{label:`Unsupported`,description:`This path has no Phase 0 identity evidence contract.`}},facts:{trustDomain:`Trust domain`,ingress:`Ingress`,invoker:`Invoker`,representedSubject:`Represented subject`,sponsor:`Sponsor`,agentPrincipal:`Agent principal`,agentDefinition:`Agent definition`,runtimeInstance:`Runtime instance`,applicableGrants:`Applicable grants`,applicableGrant:`Applicable grant {index}`,assuranceEvidence:`Assurance evidence`,assuranceEvidenceItem:`Assurance evidence {index}`,lineage:`Lineage`},values:{label:`Label`,kind:`Kind`,operation:`Operation`,principalReference:`Principal reference`,domainReference:`Domain reference`,owningBoundary:`Owning boundary`,sourceReference:`Source reference`,relationshipReference:`Relationship reference`,definitionReference:`Definition reference`,revisionReference:`Revision reference`,runtimeReference:`Runtime reference`,grantReference:`Grant reference`,strength:`Strength`,evidenceReference:`Evidence reference`,depth:`Depth`,parentRunReference:`Parent run reference`,parentExecutionReference:`Parent execution reference`,parentContextReference:`Parent context reference`,delegationReference:`Delegation reference`},reasons:{absent:`No {label} was recorded at the owning boundary.`,unknown:`The {label} was expected, but its evidence is unavailable or unreadable.`,unsupported:`This execution path does not provide {label} evidence.`,invokerAbsent:`The supported ingress boundary recorded no usable invoker principal.`,noGrants:`No applicable grants were recorded for this run.`,noAssurance:`No assurance evidence was recorded for this run.`,noLineage:`No parent or subagent lineage was recorded for this run.`},identityHeading:`Identity and authority`,missingEvidenceHeading:`Missing evidence`,noMissingEvidence:`No missing evidence was reported for this projection.`,nextStepsHeading:`Next steps`,decisions:{heading:`Decision receipts`,none:`No decision receipts were returned for this bounded page.`,returned:`Showing {count} retained decision receipts.`,listLabel:`Decision receipt list`,inspectLabel:`{summary}. Outcome: {outcome}. Evidence classification: {classification}.`,detailHeading:`Receipt detail`,requestedHeading:`What was requested`,outcomeHeading:`What happened`,outcomeLabel:`Outcome`,classificationLabel:`Evidence classification`,reasonLabel:`Recorded reason`,occurredAtLabel:`Recorded at`,ownerHeading:`Display provenance`,durableOwnerLabel:`Verified producer`,boundaryLabel:`Decision boundary`,ownerNote:`The Gateway exposes explanations only from a verified owning call path. Receipt-controlled explanations and next steps are hidden; the Control UI does not infer trust from receipt metadata.`,evidenceHeading:`Evidence limits`,contextFieldsLabel:`Context fields used`,noContextFields:`No context fields were recorded as used.`,policyCountLabel:`Policy references used`,grantCountLabel:`Grant references used`,notFoundTitle:`Receipt not found on this page`,notFoundDescription:`The selected receipt is not present in this retained page. Return to the first page or use a current receipt link.`,readOnly:`Decision receipts are read-only. This view cannot approve, edit, or repeat an action.`,more:`Additional decision receipts are available.`,loadMore:`Load more receipts`,loadingMore:`Loading receipts…`,loadMoreError:`More receipts could not be loaded. The receipts already shown remain unchanged.`,bounded:`Decision inspection is bounded to at most 50 records per request.`,outcomes:{allowed:`Allowed`,denied:`Denied`,notApplicable:`Not applicable`,unknown:`Unknown`}},diagnosticReason:`Diagnostic reason:`,diagnostic:{notFound:{title:`Run not found`,description:`No retained run or identity record matched this reference. Missing best-effort evidence does not prove that the run never occurred.`},expired:{title:`Identity evidence expired`,description:`The Gateway found the run, but its identity context is outside the 30-day retention window.`},corrupt:{title:`Identity evidence is corrupt`,description:`The Gateway found evidence for this run but could not validate the stored identity context.`},ambiguous:{title:`Multiple executions match this run`,description:`A run reference can correlate more than one execution. The inspector will not guess which execution you meant.`},unsupported:{title:`Identity evidence unsupported`,description:`The run is known, but this execution path did not retain a supported identity context.`},unknown:{title:`Identity evidence unknown`,description:`The path promises evidence, but the expected record is missing, unreadable, or otherwise unavailable.`}},candidates:{listLabel:`Matching executions`,recorded:`Recorded {date}`,executionReference:`Inspect execution`,more:`More matching executions exist beyond this bounded page.`,loadMore:`Load more executions`,loadingMore:`Loading executions…`,loadMoreError:`More executions could not be loaded. Try again.`},panels:{empty:{title:`No run selected`,description:`Open a link shaped like /activity?view=run&run=<run-id> to inspect durable identity evidence.`},waiting:{title:`Waiting for the Gateway`,description:`The durable projection will load when this browser reconnects.`},loading:{title:`Loading run inspection`,description:`Reading the Gateway's retained identity projection…`},disconnected:{title:`Gateway disconnected`,description:`Run identity is durable on the Gateway, but it cannot be read while this browser is disconnected.`},unauthorized:{title:`Operator read access required`,description:`This connection does not have operator.read, so retained run identity cannot be loaded.`},unsupported:{title:`Run inspection unsupported`,description:`This Gateway does not offer audit.run.inspect. Upgrade the Gateway, enable execution identity collection, and record a new run.`},error:{title:`Run inspection failed`,description:`The Gateway could not return this diagnostic projection. No identity facts were inferred from Live activity.`}},restart:`Restart inspection`,retry:`Retry inspection`}}},k=Object.assign(()=>{Ge.activity=O.activity},{catalog:O})})))()}function ct(e){let t=ge({},e.key,e.agentId??void 0),n=e.agentId??t.agentId;return JSON.stringify([n?l(n):null,t.sessionKey,e.sessionId??null])}function lt(e){let t=te(e);return!t?.sessionId||t.hasActiveRun===null&&t.activeRunIds===void 0&&t.status===null&&t.reason!==`delete`?null:{key:t.key,agentId:t.agentId,sessionId:t.sessionId,runId:t.runId,reason:t.reason,updatedAt:t.updatedAt,hasActiveRun:t.hasActiveRun,activeRunIds:t.activeRunIds,status:t.status}}function ut(e,t){let n=new Map(e.sessions.map(e=>[ct(e),{row:e,requiresRefresh:!1}])),r=new Set;for(let e of t){let t=ct(e),i=n.get(t),a=e.status===`running`||e.status===`queued`?e.status:void 0,o=e.hasActiveRun===!0||e.hasActiveRun!==!1&&a!==void 0;if(!i){o?r.add(t):(e.hasActiveRun===!1||e.reason===`delete`)&&r.delete(t);continue}let{row:s}=i;if(e.updatedAt!==null&&(s.updatedAt??0)>e.updatedAt)continue;let c={...s,updatedAt:e.updatedAt??s.updatedAt};if(e.reason===`delete`)c.hasActiveRun=!1,c.activeRunIds=[];else if(o)c.hasActiveRun=!0,c.status=a??(s.status===`queued`?`queued`:`running`),e.activeRunIds===void 0?e.runId&&!s.activeRunIds?.includes(e.runId)&&(c.activeRunIds=void 0):c.activeRunIds=e.activeRunIds??void 0;else{let t=e.hasActiveRun===!1||e.status!==null;if(t&&s.hasActiveRun===!0&&e.runId&&!s.activeRunIds?.includes(e.runId)){i.requiresRefresh=!0;continue}if(e.hasActiveRun===!1&&(e.activeRunIds!==void 0||!e.runId)||e.activeRunIds?.length===0)c.hasActiveRun=!1,c.activeRunIds=[];else if(t){let t=e.activeRunIds??s.activeRunIds;if(!e.runId||!t?.includes(e.runId)){i.requiresRefresh=s.hasActiveRun===!0;continue}c.activeRunIds=t.filter(t=>t!==e.runId),c.hasActiveRun=c.activeRunIds.length>0}else e.activeRunIds!==void 0&&(c.activeRunIds=e.activeRunIds??void 0)}i.row=c,i.requiresRefresh=!1}let i=[...n.values()].filter(({row:e})=>e.hasActiveRun===!0),a=i.map(({row:e})=>e),o=!i.some(e=>e.requiresRefresh),s=!o||!e.hasMore&&r.size>0;return{result:{...e,count:a.length,sessions:a},requiresRefresh:s,canPublish:o}}function j(){return(j=e((()=>{se(),f()})))()}function dt(e,t){let n=m`<span class="activity-current-work__copy">
      <span class="activity-current-work__title">${fe(t.key,t)}</span>
      <span class="activity-current-work__agent"
        >${t.agentId?C(`activityFeed.agentLabel`,{value:t.agentId}):t.key}</span
      >
    </span>
    ${E({kind:`warn`,label:t.status===`queued`?C(`activity.currentWork.queued`):C(`activity.status.running`)})}`;if(t.key===`unknown`||t.key===`global`&&!e.globalScope)return m`<div
      class="activity-current-work__row"
      data-session-key=${t.key}
      data-agent-id=${t.agentId??g}
    >
      ${n}
    </div>`;let r=Se(t),i=de({face:r,sessionKey:t.key,basePath:e.basePath,fallbackAgentId:t.agentId??e.fallbackAgentId,mainKey:e.mainKey,row:t});return m`<a
    class="activity-current-work__row"
    data-session-key=${t.key}
    data-agent-id=${t.agentId??g}
    href=${i.href}
    @click=${t=>{ee(t)&&(t.preventDefault(),e.navigate(r,i.options))}}
  >
    ${n}
  </a>`}function ft(e){let t=e.connected&&!e.error?e.result?.sessions??[]:[],n=e.connected?e.error?C(`activity.currentWork.loadFailed`):!e.result||t.length===0&&e.incomplete?C(`activity.currentWork.loading`):t.length===0?C(`activity.currentWork.empty`):null:C(`activity.currentWork.disconnected`);return m`<section
    class="activity-current-work"
    aria-label=${C(`activity.currentWork.title`)}
    aria-busy=${e.loading}
  >
    <div class="settings-section__header">
      <h2 class="settings-section__heading">${C(`activity.currentWork.title`)}</h2>
    </div>
    <div class="settings-group activity-current-work__rows">
      ${n?m`<div class="activity-current-work__feedback" role="status">
              <span>${n}</span>
              ${e.error?m`<button type="button" class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRetry}>${C(`common.retry`)}</button>`:g}
            </div>`:je(t,ct,t=>dt(e,t))}
      ${e.result?.hasMore&&!n?m`<div class="activity-current-work__feedback">${C(`activity.currentWork.limit`,{count:String(t.length),total:String(e.result.totalCount??t.length)})}</div>`:g}
    </div>
  </section>`}function pt(){return(pt=e((()=>{p(),Me(),T(),x(),A(),Ee(),we(),j(),k()})))()}function mt(e){return e===`24h`||e===`7d`||e===`30d`||e===`all`}function M(e){return e?.trim()||void 0}function ht(e,t){let n=new URLSearchParams(e),r=n.get(`time`);return{personId:t??M(n.get(`person`))??null,query:n.get(`q`)?.trim()??``,time:mt(r)?r:P}}function gt(e,t=``,n){let r=new URLSearchParams;e.time!==P&&r.set(`time`,e.time),e.query&&r.set(`q`,e.query);let i=r.toString(),a=i?`?${i}`:``;return{pathname:e.personId?_(e.personId,t,n).pathname:y(`activity`,t),search:a}}function _t(e,t,n,r){let i=new URLSearchParams(e.search),a=b(e.pathname,r),o=(a??i.get(`person`))?.replaceAll(`-`,``),s=o&&/^[0-9a-f]{8,32}$/.test(o)&&t.replaceAll(`-`,``).startsWith(o)?o.length:32,c=a&&!n?e.pathname:_(t,r,n,s).pathname;i.delete(Ie);let l=i.toString(),u=l?`?${l}`:``;return c===e.pathname&&u===e.search?null:{pathname:c,search:u,hash:e.hash}}function N(e){return e.lastActivityAt??e.updatedAt??e.createdAt??0}function vt(e,t){return N(t)-N(e)||(e.key<t.key?-1:+(e.key>t.key))}function yt(e){let t=e.owner?.actor??e.createdActor,n=M(e.agentId),{resourceBasePath:r}=ie();return{id:M(t?.id)??n??`system`,name:M(t?.label)??n,avatarUrl:t?M(t.avatarUrl):n?He(`agentAvatar`,r,n):void 0,watchedSessions:[]}}function bt(e){let t=new Date(e),n=String(t.getMonth()+1).padStart(2,`0`),r=String(t.getDate()).padStart(2,`0`);return`${t.getFullYear()}-${n}-${r}`}function xt(e){let t=new Date(e);return new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()}function St(e){let t=e?.sessions??[],n=(e?.people??[]).map(e=>({id:e.identity.id,name:e.label,avatarUrl:e.avatarUrl,watchedSessions:[],count:e.sessionCount})),r=new Map;for(let e of t){let t=N(e),n=t>0?bt(t):`unknown`,i=r.get(n);i?i.push(e):r.set(n,[e])}return{days:[...r.entries()].map(([e,t])=>({key:e,timestamp:e===`unknown`?null:xt(N(t[0])),sessions:t})),matchedCount:e?.totalCount??t.length,people:n,sessions:t,timeCount:e?.peopleSessionCount??t.length}}function Ct(e,t){let n=new Set(e.watchedSessions);return t.filter(e=>n.has(e.key)).toSorted(vt)}var wt,P;function F(){return(F=e((()=>{Ue(),v(),be(),wt=[`24h`,`7d`,`30d`,`all`],P=`7d`})))()}function Tt(e,t){let n=`?view=run&${e.kind}=${encodeURIComponent(e.id)}`;return t&&(n+=`&receipt=${encodeURIComponent(t.id)}`,t.decisionCursor&&(n+=`&decision=${encodeURIComponent(t.decisionCursor)}`)),n}function I(e,t,n){return`${y(`activity`,t)}${Tt(e,n)}`}function Et(e,t){return I({kind:`run`,id:e},t)}function Dt(e,t){let n=new URLSearchParams(e);if(n.get(`view`)===`live`)return{mode:`live`,selector:null};if(n.get(`view`)!==`run`)return{mode:`sessions`,filters:ht(e,t),selector:null};let r=n.get(`execution`),i=n.get(`receipt`)?.trim()||null,a=i&&n.get(`decision`)?.trim()||null;if(r?.trim())return{mode:`run`,selector:{kind:`execution`,id:r},selectorId:i,decisionCursor:a};let o=n.get(`run`);return{mode:`run`,selector:o?.trim()?{kind:`run`,id:o}:null,selectorId:i,decisionCursor:a}}function Ot(e,t){return new Map(e.map(e=>[e.selectorId,t]))}function kt(e,t){if(e.identity.state!==`present`||t.identity.state!==`present`||e.run.executionId!==t.run.executionId||e.identity.context.contextId!==t.identity.context.contextId)return null;let n=new Map(e.decisionDisplays.map(e=>[e.selectorId,e]));for(let e of t.decisionDisplays)n.set(e.selectorId,e);return{...t,decisionDisplays:[...n.values()]}}function At(e){let t=e.identity;return t.state===`present`?`present`:t.state===`ambiguous`?`ambiguous`:t.reasonCode===`run_not_found`||t.reasonCode===`execution_not_found`?`not-found`:t.reasonCode===`identity_context_corrupt`?`corrupt`:t.state===`unsupported`&&t.remediation.some(e=>e.code===`run_again_after_expiry`)?`expired`:t.state}function L(){return(L=e((()=>{v(),F()})))()}function R(e){return e===`attribution-only`?`attributionOnly`:e}function z(e){return C(`activity.runInspector.coverage.${R(e)}.label`)}function B(e,t=!1,n){let r=m`<bdi
    class=${t?`run-inspector__ref mono`:`run-inspector__ref`}
    dir="ltr"
    >${e}</bdi
  >`;return n?m`<a href=${n}>${r}</a>`:r}function jt(e,t,n){return n===6?m`<h6 id=${t}>${e}</h6>`:m`<h3 id=${t}>${e}</h3>`}function V(e,t={}){let n=t.headingId??`run-inspector-missing-heading`;return m`
    <section class="run-inspector__section" aria-labelledby=${n}>
      ${jt(C(`activity.runInspector.missingEvidenceHeading`),n,t.headingLevel??3)}
      ${e.length===0?m`<p>${C(`activity.runInspector.noMissingEvidence`)}</p>`:m`<ul class="run-inspector__code-list">
              ${e.map(e=>m`<li>${B(e,!0)}</li>`)}
            </ul>`}
    </section>
  `}function Mt(e,t={}){if(e.length===0)return g;let n=t.headingId??`run-inspector-remediation-heading`;return m`
    <section class="run-inspector__section" aria-labelledby=${n}>
      ${jt(C(`activity.runInspector.nextStepsHeading`),n,t.headingLevel??3)}
      <ul class="run-inspector__remediation-list">
        ${e.map(e=>m`<li>
            <span>${e.text}</span> ${B(e.code,!0)}
          </li>`)}
      </ul>
    </section>
  `}function Nt(e,t,n,r){return I(e,r,{id:t,decisionCursor:n})}function H(e){return C(`activity.runInspector.decisions.outcomes.${e===`not-applicable`?`notApplicable`:e}`)}function Pt(e,t){return e.length===0?m`<p class="run-inspector__reason">${t}</p>`:m`<ul class="run-inspector__code-list">
        ${e.map(e=>m`<li>${B(e,!0)}</li>`)}
      </ul>`}function Ft(e){let t=e.enforcement.coverageState;return m`
    <article class="run-inspector__receipt-detail" aria-labelledby="run-inspector-receipt-detail">
      <h4 id="run-inspector-receipt-detail">
        ${C(`activity.runInspector.decisions.detailHeading`)}
      </h4>
      <section aria-labelledby="run-inspector-receipt-requested">
        <h5 id="run-inspector-receipt-requested">
          ${C(`activity.runInspector.decisions.requestedHeading`)}
        </h5>
        ${e.action.summary?m`<p>${e.action.summary}</p>`:g}
        <dl class="run-inspector__values">
          <div>
            <dt>${C(`activity.runInspector.values.kind`)}</dt>
            <dd>${B(e.action.family)}</dd>
          </div>
          <div>
            <dt>${C(`activity.runInspector.values.operation`)}</dt>
            <dd>${B(e.action.operation)}</dd>
          </div>
        </dl>
      </section>
      <section aria-labelledby="run-inspector-receipt-outcome">
        <h5 id="run-inspector-receipt-outcome">
          ${C(`activity.runInspector.decisions.outcomeHeading`)}
        </h5>
        <div class="run-inspector__receipt-badges">
          <span
            class="run-inspector__receipt-badge run-inspector__receipt-badge--${e.decision.outcome}"
            aria-label=${`${C(`activity.runInspector.decisions.outcomeLabel`)}: ${H(e.decision.outcome)}`}
          >
            ${H(e.decision.outcome)}
          </span>
          <span
            class="run-inspector__receipt-badge run-inspector__receipt-badge--${t}"
            aria-label=${`${C(`activity.runInspector.decisions.classificationLabel`)}: ${z(t)}`}
          >
            ${z(t)}
          </span>
        </div>
        <p class="run-inspector__reason">
          ${C(`activity.runInspector.coverage.${R(t)}.description`)}
        </p>
        <dl class="run-inspector__values">
          <div>
            <dt>${C(`activity.runInspector.decisions.reasonLabel`)}</dt>
            <dd>${B(e.decision.reasonCode,!0)}</dd>
          </div>
          <div>
            <dt>${C(`activity.runInspector.decisions.occurredAtLabel`)}</dt>
            <dd>${new Date(e.occurredAt).toLocaleString()}</dd>
          </div>
        </dl>
      </section>
      <section aria-labelledby="run-inspector-receipt-owner">
        <h5 id="run-inspector-receipt-owner">
          ${C(`activity.runInspector.decisions.ownerHeading`)}
        </h5>
        ${e.provenance.state===`verified`?m`<dl class="run-inspector__values">
                  <div>
                    <dt>${C(`activity.runInspector.decisions.durableOwnerLabel`)}</dt>
                    <dd>${B(e.provenance.producer)}</dd>
                  </div>
                </dl>
                <p class="run-inspector__reason">
                  ${C(`activity.runInspector.decisions.ownerNote`)}
                </p>`:m`<p class="run-inspector__reason">
                ${C(`activity.runInspector.decisions.ownerNote`)}
              </p>`}
      </section>
      <section aria-labelledby="run-inspector-receipt-evidence">
        <h5 id="run-inspector-receipt-evidence">
          ${C(`activity.runInspector.decisions.evidenceHeading`)}
        </h5>
        <dl class="run-inspector__values">
          <div>
            <dt>${C(`activity.runInspector.decisions.policyCountLabel`)}</dt>
            <dd>${e.enforcement.policyCount}</dd>
          </div>
          <div>
            <dt>${C(`activity.runInspector.decisions.grantCountLabel`)}</dt>
            <dd>${e.enforcement.grantCount}</dd>
          </div>
        </dl>
        <h6>${C(`activity.runInspector.decisions.contextFieldsLabel`)}</h6>
        ${Pt(e.enforcement.contextFieldsUsed,C(`activity.runInspector.decisions.noContextFields`))}
        ${V(e.missingEvidence,{headingId:`run-inspector-receipt-missing-heading`,headingLevel:6})}
      </section>
      ${Mt(e.remediation,{headingId:`run-inspector-receipt-remediation-heading`,headingLevel:6})}
    </article>
  `}function It(e,t,n,r,i){let a=e.result,o=n?a.decisionDisplays.find(e=>e.selectorId===n):a.decisionDisplays[0];return m`
    <section class="run-inspector__section" aria-labelledby="run-inspector-decisions-heading">
      <h3 id="run-inspector-decisions-heading">${C(`activity.runInspector.decisions.heading`)}</h3>
      ${a.decisionDisplays.length===0?m`<p>${C(`activity.runInspector.decisions.none`)}</p>`:m`<p>
              ${C(`activity.runInspector.decisions.returned`,{count:String(a.decisionDisplays.length)})}
            </p>`}
      <div class="run-inspector__warning" role="note">
        ${C(`activity.runInspector.decisions.readOnly`)}
      </div>
      ${a.decisionDisplays.length>0&&t?m`<ol
              class="run-inspector__receipt-list"
              aria-label=${C(`activity.runInspector.decisions.listLabel`)}
            >
              ${a.decisionDisplays.map(n=>{let i=o?.selectorId===n.selectorId;return m`<li>
                  <a
                    href=${Nt(t,n.selectorId,e.receiptPageCursors.get(n.selectorId),r)}
                    aria-current=${i?`true`:g}
                    aria-label=${C(`activity.runInspector.decisions.inspectLabel`,{summary:n.action.summary??`${n.action.family} · ${n.action.operation}`,outcome:H(n.decision.outcome),classification:z(n.enforcement.coverageState)})}
                  >
                    <span
                      >${n.action.summary??`${n.action.family} · ${n.action.operation}`}</span
                    >
                    <span class="run-inspector__receipt-badges" aria-hidden="true">
                      <span
                        class="run-inspector__receipt-badge run-inspector__receipt-badge--${n.decision.outcome}"
                        >${H(n.decision.outcome)}</span
                      >
                      <span
                        class="run-inspector__receipt-badge run-inspector__receipt-badge--${n.enforcement.coverageState}"
                        >${z(n.enforcement.coverageState)}</span
                      >
                    </span>
                  </a>
                </li>`})}
            </ol>`:g}
      ${a.nextDecisionCursor?m`<div class="run-inspector__pagination">
              <span>${C(`activity.runInspector.decisions.more`)}</span>
              <button
                type="button"
                class="btn"
                ?disabled=${e.decisionPageStatus===`loading`}
                @click=${i}
              >
                ${e.decisionPageStatus===`loading`?C(`activity.runInspector.decisions.loadingMore`):C(`activity.runInspector.decisions.loadMore`)}
              </button>
              ${e.decisionPageStatus===`error`?m`<span role="alert">
                      ${C(`activity.runInspector.decisions.loadMoreError`)}
                    </span>`:g}
            </div>`:m`<div class="run-inspector__pagination" role="note">
              ${C(`activity.runInspector.decisions.bounded`)}
            </div>`}
      ${n&&!o?m`<div class="run-inspector__result-state" role="status">
              <h4>${C(`activity.runInspector.decisions.notFoundTitle`)}</h4>
              <p>${C(`activity.runInspector.decisions.notFoundDescription`)}</p>
              ${t?m`<a href=${I(t,r)}>
                      ${C(`activity.runInspector.decisions.heading`)}
                    </a>`:g}
            </div>`:o?Ft(o):g}
    </section>
  `}function Lt(){return(Lt=e((()=>{p(),x(),L()})))()}function Rt(e){return C(`activity.runInspector.evidenceState.${e}`)}function zt(e,t){switch(t){case`absent`:return C(`activity.runInspector.reasons.absent`,{label:e.toLowerCase()});case`unknown`:return C(`activity.runInspector.reasons.unknown`,{label:e.toLowerCase()});case`unsupported`:return C(`activity.runInspector.reasons.unsupported`,{label:e.toLowerCase()});case`present`:return}return t}function U(e){return e?[...e.displayLabel?[{label:C(`activity.runInspector.values.label`),value:e.displayLabel}]:[],{label:C(`activity.runInspector.values.kind`),value:e.kind},{label:C(`activity.runInspector.values.principalReference`),value:e.principalRef,mono:!0},{label:C(`activity.runInspector.values.domainReference`),value:e.domainRef,mono:!0}]:[]}function Bt(e){let t=e.values??[],n=e.reason??zt(e.label,e.state);return m`
    <div class="run-inspector__fact" data-state=${e.state}>
      <dt>
        <span>${e.label}</span>
        <span
          class="run-inspector__state run-inspector__state--${e.state}"
          aria-label=${C(`activity.runInspector.evidenceStateLabel`,{state:Rt(e.state)})}
        >
          ${Rt(e.state)}
        </span>
      </dt>
      <dd>
        ${t.length>0?m`<dl class="run-inspector__values">
                ${t.map(e=>m`
                    <div>
                      <dt>${e.label}</dt>
                      <dd>${B(e.value,e.mono,e.href)}</dd>
                    </div>
                  `)}
              </dl>`:g}
        ${n?m`<p class="run-inspector__reason">${n}</p>`:g}
      </dd>
    </div>
  `}function Vt(e,t){let n=e.representedSubject,r=e.sponsor,i=e.lineage;return[{label:C(`activity.runInspector.facts.trustDomain`),state:e.trustDomain.state,values:[{label:C(`activity.runInspector.values.kind`),value:e.trustDomain.kind},{label:C(`activity.runInspector.values.domainReference`),value:e.trustDomain.domainRef,mono:!0}]},{label:C(`activity.runInspector.facts.ingress`),state:e.ingress.state,values:[{label:C(`activity.runInspector.values.kind`),value:e.ingress.kind},{label:C(`activity.runInspector.values.owningBoundary`),value:e.ingress.boundary,mono:!0},...e.ingress.sourceRef?[{label:C(`activity.runInspector.values.sourceReference`),value:e.ingress.sourceRef,mono:!0}]:[]]},{label:C(`activity.runInspector.facts.invoker`),state:e.invoker.state,values:U(e.invoker.principal),reason:e.invoker.state===`absent`?C(`activity.runInspector.reasons.invokerAbsent`):void 0},{label:C(`activity.runInspector.facts.representedSubject`),state:n?.state??`absent`,values:U(n?.principal)},{label:C(`activity.runInspector.facts.sponsor`),state:r?.state??`absent`,values:[...U(r?.principal),...r?.relationshipRef?[{label:C(`activity.runInspector.values.relationshipReference`),value:r.relationshipRef,mono:!0}]:[]]},{label:C(`activity.runInspector.facts.agentDefinition`),state:e.agentDefinition.state,values:[{label:C(`activity.runInspector.values.definitionReference`),value:e.agentDefinition.definitionRef,mono:!0},...e.agentDefinition.revisionRef?[{label:C(`activity.runInspector.values.revisionReference`),value:e.agentDefinition.revisionRef,mono:!0}]:[]]},{label:C(`activity.runInspector.facts.agentPrincipal`),state:`present`,values:U(e.agentPrincipal)},{label:C(`activity.runInspector.facts.runtimeInstance`),state:e.runtimeInstance.state,values:[{label:C(`activity.runInspector.values.kind`),value:e.runtimeInstance.kind},{label:C(`activity.runInspector.values.runtimeReference`),value:e.runtimeInstance.runtimeRef,mono:!0}]},...e.applicableGrants.length===0?[{label:C(`activity.runInspector.facts.applicableGrants`),state:`absent`,reason:C(`activity.runInspector.reasons.noGrants`)}]:e.applicableGrants.map((e,t)=>({label:C(`activity.runInspector.facts.applicableGrant`,{index:String(t+1)}),state:e.state,values:[{label:C(`activity.runInspector.values.grantReference`),value:e.grantRef,mono:!0}]})),...e.assurance.length===0?[{label:C(`activity.runInspector.facts.assuranceEvidence`),state:`absent`,reason:C(`activity.runInspector.reasons.noAssurance`)}]:e.assurance.map((e,t)=>({label:C(`activity.runInspector.facts.assuranceEvidenceItem`,{index:String(t+1)}),state:`present`,values:[{label:C(`activity.runInspector.values.kind`),value:e.kind},{label:C(`activity.runInspector.values.strength`),value:e.strength},{label:C(`activity.runInspector.values.evidenceReference`),value:e.evidenceRef,mono:!0}]})),{label:C(`activity.runInspector.facts.lineage`),state:i?`present`:`absent`,values:i?[{label:C(`activity.runInspector.values.depth`),value:i.depth},...i.parentRunId?[{label:C(`activity.runInspector.values.parentRunReference`),value:i.parentRunId,mono:!0,href:I({kind:`run`,id:i.parentRunId},t)}]:[],...i.parentExecutionId?[{label:C(`activity.runInspector.values.parentExecutionReference`),value:i.parentExecutionId,mono:!0}]:[],...i.parentContextId?[{label:C(`activity.runInspector.values.parentContextReference`),value:i.parentContextId,mono:!0}]:[],...i.delegationRef?[{label:C(`activity.runInspector.values.delegationReference`),value:i.delegationRef,mono:!0}]:[],...U(i.parentAgentPrincipal)]:[],reason:i?void 0:C(`activity.runInspector.reasons.noLineage`)}]}function Ht(e){let t=At(e);switch(t){case`not-found`:return{title:C(`activity.runInspector.diagnostic.notFound.title`),description:C(`activity.runInspector.diagnostic.notFound.description`)};case`expired`:return{title:C(`activity.runInspector.diagnostic.expired.title`),description:C(`activity.runInspector.diagnostic.expired.description`)};case`corrupt`:return{title:C(`activity.runInspector.diagnostic.corrupt.title`),description:C(`activity.runInspector.diagnostic.corrupt.description`)};case`ambiguous`:return{title:C(`activity.runInspector.diagnostic.ambiguous.title`),description:C(`activity.runInspector.diagnostic.ambiguous.description`)};case`unsupported`:return{title:C(`activity.runInspector.diagnostic.unsupported.title`),description:C(`activity.runInspector.diagnostic.unsupported.description`)};case`unknown`:return{title:C(`activity.runInspector.diagnostic.unknown.title`),description:C(`activity.runInspector.diagnostic.unknown.description`)};case`present`:return null}return t}function Ut(e,t,n,r){let i=Ht(e);if(!i||e.identity.state===`present`)return g;let a=e.identity;return m`
    <div class="run-inspector__result-state" role="status" aria-label=${i.title}>
      <h3>${i.title}</h3>
      <p>${i.description}</p>
      <p>
        ${C(`activity.runInspector.diagnosticReason`)}
        ${B(a.reasonCode,!0)}
      </p>
    </div>
    ${a.state===`ambiguous`?m`
            <ol
              class="run-inspector__candidate-list"
              aria-label=${C(`activity.runInspector.candidates.listLabel`)}
            >
              ${a.candidates.map(e=>m`
                  <li>
                    <span
                      >${C(`activity.runInspector.candidates.recorded`,{date:new Date(e.createdAt).toLocaleString()})}</span
                    >
                    <a
                      href=${I({kind:`execution`,id:e.executionId},t)}
                    >
                      ${C(`activity.runInspector.candidates.executionReference`)}
                      ${B(e.executionId,!0)}
                    </a>
                  </li>
                `)}
            </ol>
            ${e.nextExecutionCursor?m`<div class="run-inspector__pagination">
                    <span>${C(`activity.runInspector.candidates.more`)}</span>
                    <button
                      type="button"
                      class="btn"
                      ?disabled=${n===`loading`}
                      @click=${r}
                    >
                      ${C(n===`loading`?`activity.runInspector.candidates.loadingMore`:`activity.runInspector.candidates.loadMore`)}
                    </button>
                    ${n===`error`?m`<span role="alert">
                            ${C(`activity.runInspector.candidates.loadMoreError`)}
                          </span>`:g}
                  </div>`:g}
          `:g}
    ${V(a.missingEvidence)}
    ${Mt(a.remediation)}
  `}function Wt(e,t,n,r,i,a){let o=e.result,s=z(o.coverage.state);return m`
    <div
      class="run-inspector__coverage run-inspector__coverage--${o.coverage.state}"
      role="status"
      aria-label=${C(`activity.runInspector.coverageStatusLabel`,{state:s})}
    >
      <strong>${s}</strong>
      <span>
        ${C(`activity.runInspector.coverage.${R(o.coverage.state)}.description`)}
      </span>
    </div>
    ${o.identity.state===`present`?m`
            <section
              class="run-inspector__section"
              aria-labelledby="run-inspector-identity-heading"
            >
              <h3 id="run-inspector-identity-heading">
                ${C(`activity.runInspector.identityHeading`)}
              </h3>
              <dl class="run-inspector__facts">
                ${Vt(o.identity.context,t).map(Bt)}
              </dl>
            </section>
            ${V(o.coverage.missingEvidence)}
            ${It(e,n,r,t,i)}
          `:Ut(o,t,e.executionPageStatus,a)}
  `}function W(e,t,n={}){return m`
    <div class="run-inspector__panel" role=${n.role??`status`}>
      <h3>${e}</h3>
      <p>${t}</p>
      ${n.action?m`<button type="button" class="btn" @click=${n.action.onClick}>
              ${n.action.label}
            </button>`:g}
    </div>
  `}function Gt(e){let t=e.state,n;switch(t.status){case`empty`:n=W(C(`activity.runInspector.panels.empty.title`),C(`activity.runInspector.panels.empty.description`));break;case`loading`:n=W(t.waitingForGateway?C(`activity.runInspector.panels.waiting.title`):C(`activity.runInspector.panels.loading.title`),t.waitingForGateway?C(`activity.runInspector.panels.waiting.description`):C(`activity.runInspector.panels.loading.description`));break;case`disconnected`:n=W(C(`activity.runInspector.panels.disconnected.title`),C(`activity.runInspector.panels.disconnected.description`));break;case`unauthorized`:n=W(C(`activity.runInspector.panels.unauthorized.title`),C(`activity.runInspector.panels.unauthorized.description`),{role:`alert`});break;case`unsupported`:n=W(C(`activity.runInspector.panels.unsupported.title`),C(`activity.runInspector.panels.unsupported.description`));break;case`error`:n=W(C(`activity.runInspector.panels.error.title`),C(`activity.runInspector.panels.error.description`),{action:t.recovery===`restart`?{label:C(`activity.runInspector.restart`),onClick:e.onRestart}:{label:C(`activity.runInspector.retry`),onClick:e.onRetry},role:`alert`});break;case`ready`:n=Wt(t,e.basePath,e.selector,e.selectorId,e.onLoadMoreDecisions,e.onLoadMoreExecutions)}return m`
    <section
      id="activity-run-panel"
      class="run-inspector"
      aria-label=${C(`activity.runInspector.mode`)}
    >
      <div class="settings-section__header">
        <div>
          <h2 class="settings-section__heading">${C(`activity.runInspector.mode`)}</h2>
          <p class="run-inspector__intro">${C(`activity.runInspector.intro`)}</p>
        </div>
      </div>
      <div class="run-inspector__warning" role="note">
        ${C(`activity.runInspector.bestEffortWarning`)}
      </div>
      ${n}
    </section>
  `}function Kt(){return(Kt=e((()=>{p(),x(),A(),Lt(),L(),k()})))()}var qt,Jt;function Yt(){return(Yt=e((()=>{v(),he(),j(),F(),qt=1e3,Jt=class{get loading(){return this.requestState!==`idle`||this.incomplete}get retrying(){return this.requestState===`retrying`}constructor(e){this.host=e,this.incomplete=!1,this.requestState=`idle`,this.client=null,this.refreshPending=!1,this.filters=null,this.pendingChanges=[],this.changesOverflowed=!1,this.normalizedLocation=``,this.observesPageLifecycle=typeof document<`u`&&typeof globalThis.addEventListener==`function`,this.pageActive=!this.observesPageLifecycle||document.visibilityState!==`hidden`,this.eventRefresh=pe({active:this.pageActive,refresh:async()=>this.load(this.client,this.filters,`refresh`)}),this.handlePageLifecycle=e=>{let t=e.type===`pagehide`;this.pageActive=!t&&document.visibilityState!==`hidden`,this.eventRefresh.setActive(this.pageActive,t||this.pending!==void 0),this.pageActive||(this.refreshPending=!1)},e.addController(this)}hostConnected(){this.updatePageLifecycleListeners(!0),this.observesPageLifecycle&&this.handlePageLifecycle(new Event(`pageshow`))}hostDisconnected(){this.updatePageLifecycleListeners(!1),this.resetQuery()}resetQuery(){this.eventRefresh.reset(),this.pending?.abort(),this.pending=void 0,this.requestState=`idle`,this.incomplete=!1,this.error=void 0,this.client=null,this.queryKey=void 0,this.result=void 0,this.refreshPending=!1,this.filters=null,this.pendingChanges.length=0,this.changesOverflowed=!1,this.normalizedLocation=``}personLabel(e,t){return this.result?.people?.find(t=>t.identity.id===e)?.label??t.find(t=>t.identity?.id===e)?.name}canonicalLocation(e,t,n){if(!this.filters||this.filters===`current`||!this.filters.personId||!this.result?.involvingProfileId||this.loading)return null;let r=this.result.involvingProfileId,i=_t(e,r,this.personLabel(r,n),t);if(!i)return this.normalizedLocation=``,null;let a=`${e.pathname}${e.search}${e.hash}`;return this.normalizedLocation===a?null:(this.normalizedLocation=a,i)}locationForFilters(e,t,n,r){let i=gt(e,n,e.personId?this.personLabel(e.personId,r):void 0),a=this.result?.involvingProfileId??(this.filters===`current`?void 0:this.filters?.personId);return e.personId&&e.personId===a&&(i.pathname=b(t.pathname,n)?t.pathname:_(e.personId,n,this.personLabel(e.personId,r),32).pathname),i}updatePageLifecycleListeners(e){if(!this.observesPageLifecycle)return;let t=e?`addEventListener`:`removeEventListener`;document[t](`visibilitychange`,this.handlePageLifecycle),globalThis[t](`pagehide`,this.handlePageLifecycle),globalThis[t](`pageshow`,this.handlePageLifecycle)}invalidate(e){if(this.client&&this.filters){if(this.filters===`current`){let t=lt(e);if(t){if(this.result){let e=ut(this.result,[t]);this.result=e.result,this.incomplete||=e.requiresRefresh,this.host.requestUpdate()}this.pending&&(this.pendingChanges.length<qt?this.pendingChanges.push(t):this.changesOverflowed=!0)}}this.eventRefresh.schedule()}}load(e,t,n=`query`){if(!e||!t){this.resetQuery(),this.host.requestUpdate();return}let r=t===`current`?{activeOnly:!0,archived:`all`,includeGlobal:!0,includeUnknown:!0,includeDerivedTitles:!0,limit:100}:{archived:`all`,includeGlobal:!0,includeUnknown:!0,includePeople:!0,includeDerivedTitles:!0,limit:100,...t.personId?{involvingProfileId:t.personId}:{},...t.query?{search:t.query}:{},...t.time===`all`?{}:{activeMinutes:t.time===`24h`?1440:t.time===`7d`?10080:43200}},i=JSON.stringify(r),a=this.client===e&&this.queryKey===i;if(a&&this.pending){this.refreshPending||=n===`refresh`;return}if(n===`query`&&a)return;this.pending?.abort(),this.eventRefresh.absorb();let o=new AbortController;this.pending=o,this.client=e,this.queryKey=i,this.filters=t,this.pendingChanges.length=0,this.changesOverflowed=!1,this.requestState=n===`retry`?`retrying`:`loading`,this.error=void 0,a||(this.result=void 0,this.incomplete=!1),this.refreshPending=!1,this.host.requestUpdate(),e.request(`sessions.list`,r,{signal:o.signal}).then(e=>{if(this.pending===o){if(t===`current`){let t=ut(e,this.pendingChanges);this.incomplete=this.changesOverflowed||t.requiresRefresh,this.incomplete&&this.eventRefresh.schedule(),!this.changesOverflowed&&t.canPublish&&(this.result=t.result)}else this.result=e}}).catch(e=>{this.pending===o&&!o.signal.aborted&&(t===`current`&&(this.result=void 0,this.incomplete=!1),this.error=e instanceof Error?e.message:String(e))}).finally(()=>{this.pending===o&&(this.pending=void 0,this.pendingChanges.length=0,this.requestState=`idle`,this.host.requestUpdate(),this.refreshPending&&this.load(e,t,`refresh`))})}}})))()}function Xt(e){let n=t(e);if(n?.found!==!0)return{status:`absent`};let r=e=>e?.trim()?e:void 0,i=t(n.attribution),a=r(u(i,`text`)),o=r(u(i,`url`)),s=r(u(n,`city`)),c=r(u(n,`region`)),l=r(u(n,`country`)),d={...s?{city:s}:{},...c?{region:c}:{},...l?{country:l}:{},...a&&o?{attribution:{text:a,url:o}}:{}};return Object.keys(d).length>0?{status:`located`,location:d}:{status:`absent`}}async function Zt(e){let{origin:t}=ie();try{let n=await ae(`${t??``}/plugins/geolocation/lookup?ip=${encodeURIComponent(e)}`,$t);return n.ok?Xt(await n.json()):{status:`unavailable`}}catch{return{status:`unavailable`}}}function Qt(e){let t=G.get(e);if(t)return t;let n=Zt(e).then(t=>(t.status===`unavailable`&&G.get(e)===n&&G.delete(e),t));if(G.size>=en){let e=G.keys().next();e.done||G.delete(e.value)}return G.set(e,n),n}var $t,en,G;function tn(){return(tn=e((()=>{be(),$t=15e3,en=256,G=new Map,le(()=>G.clear())})))()}var nn,K;function rn(){return(rn=e((()=>{p(),Ae(),tn(),xe(),w(),nn=[5e3,15e3,45e3],K=class extends ce{constructor(...e){super(...e),this.location=null,this.retryAttempt=0}disconnectedCallback(){super.disconnectedCallback(),this.clearRetry()}willUpdate(){let e=this.ip?.trim();!e||e===this.requestedIp||(this.clearRetry(),this.requestedIp=e,this.retryAttempt=0,this.location=null,this.resolve(e))}clearRetry(){this.retryTimer!==void 0&&(clearTimeout(this.retryTimer),this.retryTimer=void 0)}resolve(e){Qt(e).then(t=>{if(this.requestedIp!==e)return;if(t.status===`located`){this.location=t.location;return}if(t.status===`absent`)return;let n=nn[this.retryAttempt];n!==void 0&&(this.retryAttempt+=1,this.retryTimer=setTimeout(()=>{this.retryTimer=void 0,this.requestedIp===e&&this.isConnected&&this.resolve(e)},n))})}render(){let e=[this.location?.city,this.location?.region??this.location?.country].filter(Boolean).join(`, `);if(!e)return g;let t=this.location?.attribution;return m`<span class="activity-feed__device-location"
      >${e}${t?m`<a
              class="activity-feed__device-attribution"
              href=${t.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label=${t.text}
              title=${t.text}
              >${S.info}</a
            >`:g}</span
    >`}},n([Ne({attribute:!1})],K.prototype,`ip`,void 0),n([h()],K.prototype,`location`,void 0),globalThis.customElements&&(customElements.get(`openclaw-ip-location`)||customElements.define(`openclaw-ip-location`,K))})))()}function q(e){return!e.name&&!e.email&&D(e)===e.id}function an(e){return q(e)&&e.id.length>8?`${e.id.slice(0,8)}…`:D(e)}function J(e,t=!1){return q(e)?m`<span
      class="viewer-avatar viewer-avatar--overflow activity-feed__unknown-avatar"
      aria-hidden="true"
      >${S.users}</span
    >`:m`<span class="activity-feed__person-avatar">
    <openclaw-viewer-avatar
      .identity=${{type:`profile`,id:e.id}}
      .user=${e}
      .markAsViewer=${!1}
      variant="footer"
    ></openclaw-viewer-avatar>
    ${t&&(e.entries?.length??0)>0?m`<span
            class="activity-feed__presence-dot"
            aria-label=${C(`activityFeed.online`)}
          ></span>`:g}
  </span>`}function on(e,t,n){e.currentTarget instanceof Element&&e.currentTarget.closest(`wa-popover`)?.removeAttribute(`open`),t.onFiltersChange({...t.filters,personId:n})}function sn(e,t){e.currentTarget instanceof Element&&e.currentTarget.parentElement?.querySelector(`.activity-feed__people-trigger`)?.setAttribute(`aria-expanded`,String(t))}function cn(e,t){return m`<button
    type="button"
    class="session-menu__item activity-feed__people-row"
    data-activity-person=${e.id}
    aria-pressed=${String(t.filters.personId===e.id)}
    @click=${n=>on(n,t,e.id)}
  >
    ${J(e,!0)}
    <span class="activity-feed__people-copy">
      <span class="activity-feed__people-name">${an(e)}</span>
    </span>
    <span class="activity-feed__people-count">${e.count}</span>
  </button>`}function ln(e,t,n,r){let i=t.slice(0,3),a=t.length-i.length,o=t.filter(e=>!q(e)),s=t.filter(q);return m`<div class="activity-feed__people-control">
    <button
      id="activity-feed-people-trigger"
      type="button"
      class="btn btn--sm activity-feed__people-trigger"
      aria-label=${C(`activityFeed.peopleButtonLabel`)}
      aria-haspopup="dialog"
      aria-expanded="false"
    >
      ${n?m`${J(n)}<span class="activity-feed__selected-person"
                >${an(n)}</span
              >`:m`<span class="activity-feed__facepile" aria-hidden="true">
              ${i.length>0?i.map(e=>J(e)):m`<span
                      class="viewer-avatar viewer-avatar--overflow activity-feed__unknown-avatar"
                      >${S.users}</span
                    >`}
              ${a>0?m`<span class="viewer-avatar viewer-avatar--overflow">+${a}</span>`:g}
            </span>`}
    </button>
    ${n?m`<button
            type="button"
            class="btn btn--sm activity-feed__people-clear"
            aria-label=${C(`activityFeed.clearPersonFilter`)}
            @click=${()=>e.onFiltersChange({...e.filters,personId:null})}
          >
            ×
          </button>`:g}
    <wa-popover
      class="activity-feed__people-popover"
      for="activity-feed-people-trigger"
      placement="bottom-end"
      without-arrow
      @wa-show=${e=>sn(e,!0)}
      @wa-hide=${e=>sn(e,!1)}
    >
      <div class="activity-feed__people-panel" aria-label=${C(`activityFeed.peopleButtonLabel`)}>
        <button
          type="button"
          class="session-menu__item activity-feed__people-row"
          data-activity-person=""
          aria-pressed=${String(e.filters.personId===null)}
          @click=${t=>on(t,e,null)}
        >
          <span
            class="viewer-avatar viewer-avatar--overflow activity-feed__unknown-avatar"
            aria-hidden="true"
            >${S.users}</span
          >
          <span class="activity-feed__people-copy">
            <span class="activity-feed__people-name">${C(`activityFeed.everyone`)}</span>
          </span>
          <span class="activity-feed__people-count">${r}</span>
        </button>
        ${o.map(t=>cn(t,e))}
        ${s.length>0?m`<div class="session-menu__separator" role="separator"></div>
                <div class="activity-feed__people-group-label">
                  ${C(`activityFeed.unresolvedIdentities`)}
                </div>
                <div data-activity-unresolved>
                  ${s.map(t=>cn(t,e))}
                </div>`:g}
      </div>
    </wa-popover>
  </div>`}function un(e,t=Date.now()){if(e===null)return C(`activityFeed.unknownDate`);let n=new Date(t),r=new Date(n.getFullYear(),n.getMonth(),n.getDate()).getTime(),i=new Date(r);return i.setDate(i.getDate()-1),e===r?C(`activityFeed.today`):e===i.getTime()?C(`activityFeed.yesterday`):new Intl.DateTimeFormat(void 0,{day:`numeric`,month:`long`,year:`numeric`}).format(e)}function Y(e,t){let n=Se(t),r=de({face:n,sessionKey:t.key,fallbackAgentId:_e(e),basePath:e.basePath,row:t,mainKey:me({agentsList:e.agents.state.agentsList,hello:e.gateway.snapshot.hello})}),i=yt(t),a=D(i),o=N(t),s=t.observerDigest?.runId,c=t.hasActiveRun===!0&&s&&t.activeRunIds?.includes(s)?s:void 0,l=c?t.observerDigest?.headline.trim():``,u=t.channel?C(`activityFeed.channelLabel`,{value:t.channel}):t.agentId?C(`activityFeed.agentLabel`,{value:t.agentId}):null,d=t.createdVia===`cron`?C(`activityFeed.automation`):null;return m`<div class="activity-feed__session-row">
    <a
      class="activity-feed__session"
      data-activity-session=${t.key}
      href=${r.href}
      @click=${t=>{ee(t)&&(t.preventDefault(),e.navigate(n,r.options))}}
    >
      <span class="activity-feed__session-avatar">
        ${t.hasActiveRun===!0?m`<span
                class="activity-feed__presence-dot activity-feed__run-dot"
                aria-hidden="true"
              ></span>`:g}
        <openclaw-viewer-avatar
          .identity=${t.owner?.actor.identity??t.createdActor?.identity}
          .user=${i}
          .markAsViewer=${!1}
          variant="footer"
        ></openclaw-viewer-avatar>
      </span>
      <span class="activity-feed__session-main">
        <span class="activity-feed__session-title">${fe(t.key,t)}</span>
        <span class="activity-feed__session-meta">
          ${l?m`<span
                  class="activity-feed__session-headline"
                  data-health=${t.observerDigest?.health??g}
                  >${l}</span
                >`:m`<span>${a}</span>`}${d?m`<span class="activity-feed__session-source" data-activity-created-via="cron"
                  >· ${d}${u?` ·`:``}</span
                >`:g}${u?m`<span class="activity-feed__session-scope">${u}</span>`:g}
        </span>
      </span>
      <span class="activity-feed__session-time">
        ${l?m`<span class="activity-feed__session-owner">${a}</span>`:g}
        ${o>0?m`<span>${Te(o,{fallback:``})}</span>`:g}
      </span>
    </a>
    ${c?m`<a
            class="activity-feed__inspect-run"
            href=${Et(c,e.basePath)}
            >${C(`activityFeed.inspectRun`)}</a
          >`:g}
  </div>`}function dn(e,t){if(e.filters.query||e.filters.personId)return t.sessions.map(t=>Y(e.context,t));let n=t.sessions.filter(e=>e.hasAutomation===!0);if(n.length<2)return t.sessions.map(t=>Y(e.context,t));let r=e.expandedAutomationDays.has(t.key);return m`
    ${t.sessions.filter(e=>e.hasAutomation!==!0).map(t=>Y(e.context,t))}
    <button
      type="button"
      class="activity-feed__session activity-feed__automation-group"
      data-activity-automation-group=${t.key}
      aria-expanded=${String(r)}
      @click=${()=>e.onAutomationDayToggle(t.key)}
    >
      <span class="activity-feed__automation-group-icon" aria-hidden="true">${S.clock}</span>
      <span>${C(`activityFeed.automationGroup`,{count:String(n.length)})}</span>
      <span class="activity-feed__automation-group-chevron" aria-hidden="true"
        >${S.chevronRight}</span
      >
    </button>
    ${r?n.map(t=>Y(e.context,t)):g}
  `}function fn(e,t,n){let r=(t.entries?.length??0)>0,i=r&&Qe(t),a=C(r?i?`activityFeed.idle`:`activityFeed.online`:`activityFeed.offline`),o=t.entries??[],s=Ct(t,n);return m`
    <section class="activity-feed__identity" data-activity-identity=${t.id}>
      <div class="activity-feed__identity-main">
        <openclaw-viewer-avatar
          .identity=${{type:`profile`,id:t.id}}
          .user=${t}
          .markAsViewer=${!1}
          variant="profile"
        ></openclaw-viewer-avatar>
        <div class="activity-feed__identity-copy">
          <h2>${D(t)}</h2>
          ${t.email?m`<p>${t.email}</p>`:g}
        </div>
        ${E({kind:r?i?`warn`:`ok`:`muted`,label:a})}
      </div>
      ${o.length>0?m`<div class="activity-feed__devices">
              ${o.map(e=>{let t=[e.deviceFamily,e.platform,e.ip,e.timeZone].filter(Boolean).join(` · `);return m`<div class="activity-feed__device">
                  <span class="activity-feed__device-name"
                    >${e.host??C(`activityFeed.unknownDevice`)}</span
                  >
                  ${t?m`<span>${t}</span>`:g}
                  ${e.ip?m`<openclaw-ip-location .ip=${e.ip}></openclaw-ip-location>`:g}
                  ${e.lastInputSeconds===void 0?g:m`<span
                          >${C(`activityFeed.lastInput`,{time:ve(e.lastInputSeconds*1e3,{suffix:!1})})}</span
                        >`}
                </div>`})}
            </div>`:g}
      <div class="activity-feed__viewing">
        <h3>${C(`activityFeed.viewingNow`)}</h3>
        ${s.length>0?m`<div class="activity-feed__viewing-list">
                ${s.map(t=>Y(e,t))}
              </div>`:m`<p class="activity-feed__empty-note">${C(`activityFeed.notViewing`)}</p>`}
      </div>
    </section>
  `}function pn(e){let t=St(e.result),n=new Map(e.presenceViewers.flatMap(e=>e.identity?[[e.identity.id,e]]:[])),r=e.filters.personId?n.get(e.filters.personId)??t.people.find(t=>t.id===e.filters.personId)??null:null,i=t.people.map(e=>{let t=n.get(e.id);return t?{...e,...t,count:e.count}:e}),a=e.filters.personId?i.find(t=>t.id===e.filters.personId)??r:null;return m`
    <div class="activity-feed">
      <div class="activity-feed__toolbar">
        <label class="data-table-search activity-feed__search">
          ${S.search}
          <input
            type="search"
            .value=${e.filters.query}
            placeholder=${C(`activityFeed.searchPlaceholder`)}
            @input=${t=>{t.currentTarget instanceof HTMLInputElement&&e.onFiltersChange({...e.filters,query:t.currentTarget.value})}}
          />
        </label>
        ${Xe({mode:`buttons`,className:`activity-feed__time-filter`,value:e.filters.time,ariaLabel:C(`activityFeed.time`),options:wt.map(e=>({value:e,label:C(X[e]),ariaLabel:C(X[e]),compactLabel:e===`all`?C(X[e]):e})),onChange:t=>e.onFiltersChange({...e.filters,time:t}),onReselect:t=>e.onFiltersChange({...e.filters,time:t})})}
        ${ln(e,i,a,t.timeCount)}
      </div>
      <div class="activity-feed__feedback">
        <span role=${e.error?`alert`:`status`} title=${e.error??g}>
          ${e.error??(e.retrying?C(`common.refreshing`):e.loading&&!e.result?C(`common.loading`):g)}
        </span>
        ${e.error||e.retrying?m`<button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRetry}>
                ${C(`common.retry`)}
              </button>`:g}
      </div>
      <div class="activity-feed__main">
        ${e.result?.peopleIncomplete?m`<p role="status">${C(`activityFeed.partialHistory`)}</p>`:g}
        ${e.result&&e.filters.personId?r?fn(e.context,r,t.sessions):m`<section class="activity-feed__not-found" role="status">
                  <h2>${C(`activityFeed.notFoundTitle`)}</h2>
                  <p>${C(`activityFeed.notFoundDescription`)}</p>
                </section>`:g}
        ${e.result&&(!e.filters.personId||r)?m`
                <div class="activity-feed__summary">
                  <h2>${C(`activityFeed.sessions`)}</h2>
                  <span
                    >${C(`activityFeed.showing`,{shown:String(t.sessions.length),total:String(t.matchedCount)})}</span
                  >
                </div>
                ${t.days.length>0?t.days.map(t=>m`<section class="activity-feed__day">
                          <h3>${un(t.timestamp)}</h3>
                          <div class="activity-feed__sessions">
                            ${dn(e,t)}
                          </div>
                        </section>`):m`<section class="activity-feed__empty" role="status">
                        ${C(`activityFeed.noSessions`)}
                      </section>`}
              `:g}
      </div>
    </div>
  `}var X;function mn(){return(mn=e((()=>{p(),w(),rn(),Ze(),rt(),T(),x(),ye(),$e(),Ee(),we(),f(),L(),F(),X={"24h":`activityFeed.time24h`,"7d":`activityFeed.time7d`,"30d":`activityFeed.time30d`,all:`activityFeed.timeAll`}})))()}function hn(e){return Ce(e,{hour:`numeric`,minute:`2-digit`,second:`2-digit`},``)}function gn(e){return!Number.isFinite(e)||e<0?C(`common.na`):ue(e)??`0ms`}function _n(e){return C(`activity.status.${e}`)}function vn(e){return e===1?C(`activity.argumentHiddenOne`):C(`activity.argumentsHidden`,{count:String(e)})}function yn(e){return e.entryKind===`answer_candidate`?C(`activity.answerCandidate.${e.candidateStatus??`candidate`}`):vn(e.hiddenArgumentCount)}function bn(e){return e.entryKind===`answer_candidate`?C(`activity.answerCandidate.title`):e.toolName}function xn(e,t){return!t||o([e.toolName,bn(e),e.candidateStatus,e.status,e.summary,yn(e),e.outputPreview,e.runId,e.toolCallId,e.sessionKey].filter(Boolean).join(` `)).includes(t)}function Sn(e){return c(e.map(e=>e.toolName))}function Cn(e){let t=o(e.filterText);return e.entries.filter(n=>!e.statusFilters[n.status]||e.toolFilter&&n.toolName!==e.toolFilter?!1:xn(n,t))}function wn(e,t){return m`
    <label class="activity-status-filter">
      <input
        type="checkbox"
        .checked=${e.statusFilters[t]}
        @change=${n=>e.onStatusToggle(t,n.target.checked)}
      />
      <span>${_n(t)}</span>
    </label>
  `}function Tn(e,t){e.currentTarget instanceof Element&&e.currentTarget.previousElementSibling?.setAttribute(`aria-expanded`,String(t))}function En(e,t){let n=!!e.toolFilter;return m`
    <button
      id="activity-live-filter-trigger"
      type="button"
      class="btn btn--sm activity-live-filter-trigger ${n?`active`:``}"
      title=${C(`activity.filters`)}
      aria-label=${C(`activity.filters`)}
      aria-haspopup="dialog"
      aria-expanded="false"
    >
      ${S.listFilter}
    </button>
    <wa-popover
      class="activity-live-filter-popover"
      for="activity-live-filter-trigger"
      placement="bottom-end"
      without-arrow
      @wa-show=${e=>Tn(e,!0)}
      @wa-hide=${e=>Tn(e,!1)}
    >
      <div class="activity-live-filter-popover__panel">
        <label class="field">
          <span>${C(`activity.toolFilter`)}</span>
          <select
            class="settings-select"
            aria-label=${C(`activity.toolFilter`)}
            .value=${e.toolFilter}
            @change=${t=>{t.currentTarget instanceof HTMLSelectElement&&e.onToolFilterChange(t.currentTarget.value)}}
          >
            <option value="">${C(`activity.allTools`)}</option>
            ${t.map(e=>m`<option value=${e}>${e}</option>`)}
          </select>
        </label>
      </div>
    </wa-popover>
  `}function Dn(e,t){return m`
    <div class="activity-live-toolbar">
      <div class="activity-feed__search activity-live-search">
        <span aria-hidden="true">${S.search}</span>
        <input
          class="settings-input"
          type="search"
          aria-label=${C(`activity.search`)}
          .value=${e.filterText}
          placeholder=${C(`activity.searchPlaceholder`)}
          @input=${t=>{t.currentTarget instanceof HTMLInputElement&&e.onFilterTextChange(t.currentTarget.value)}}
        />
      </div>
      <span role="group" aria-label=${C(`activity.statusFilters`)} class="activity-status-filters">
        ${Z.map(t=>wn(e,t))}
      </span>
      <span class="activity-live-autofollow">
        <span>${C(`activity.autoFollow`)}</span>
        ${Ye({checked:e.autoFollow,ariaLabel:C(`activity.autoFollow`),onChange:t=>e.onToggleAutoFollow(t)})}
      </span>
      ${En(e,t)}
    </div>
  `}function On(e){return jn[e]}function kn(e,t){let n=e.expandedIds.has(t.id);return m`
    <details
      class="activity-entry activity-entry--${t.status}"
      role="listitem"
      .open=${n}
      @toggle=${n=>e.onEntryToggle(t.id,n.currentTarget.open)}
    >
      <summary class="activity-entry__summary">
        <span class="activity-entry__chevron" aria-hidden="true">${S.chevronRight}</span>
        <span class="activity-entry__main">
          <span class="activity-entry__title">
            ${E({kind:On(t.status),label:_n(t.status)})}
            <span class="activity-entry__tool mono">${bn(t)}</span>
          </span>
          <span class="activity-entry__text">${yn(t)}</span>
        </span>
        <span class="activity-entry__meta">
          <span>${hn(t.updatedAt)}</span>
          <span>${gn(t.durationMs)}</span>
        </span>
      </summary>
      <div class="activity-entry__body">
        <div class="activity-entry__facts">
          ${t.entryKind===`answer_candidate`?m`<span class="mono"
                  >${C(`activity.answerCandidate.itemId`)}: ${t.itemId}</span
                >`:m`
                  <span>${vn(t.hiddenArgumentCount)}</span>
                  <span class="mono">${C(`activity.toolCallId`)}: ${t.toolCallId}</span>
                `}
          <a
            class="activity-entry__run-link mono"
            href=${Et(t.runId,e.basePath)}
            >${C(`activity.runId`)}: ${t.runId}</a
          >
          ${t.sessionKey?m`<span class="mono">${C(`activity.session`)}: ${t.sessionKey}</span>`:g}
        </div>
        ${t.outputPreview?m`
                <pre class="activity-entry__preview">${t.outputPreview}</pre>
                ${t.outputTruncated?m`<div class="activity-entry__note">${C(`activity.outputTruncated`)}</div>`:g}
              `:m`<div class="activity-entry__note">${C(`activity.noOutputPreview`)}</div>`}
      </div>
    </details>
  `}function An(e){let t=Sn(e.entries),n=Cn(e),r=e.filterText.trim()||e.toolFilter||Z.some(t=>!e.statusFilters[t]);return m`
    <section class="activity-page" aria-label=${C(`activity.title`)}>
      <div class="settings-section__header">
        <h2 class="settings-section__heading">${C(`activity.title`)}</h2>
        <div class="settings-section__actions">
          <span class="activity-count" aria-live="polite">
            ${C(`activity.visibleCount`,{visible:String(n.length),total:String(e.entries.length)})}
          </span>
          <button
            type="button"
            class="btn btn--sm"
            ?disabled=${n.length===0}
            @click=${e.onExpandAll}
          >
            ${C(`activity.expandAll`)}
          </button>
          <button
            type="button"
            class="btn btn--sm"
            ?disabled=${e.expandedIds.size===0}
            @click=${e.onCollapseAll}
          >
            ${C(`activity.collapseAll`)}
          </button>
          <button
            type="button"
            class="btn btn--sm danger"
            ?disabled=${e.entries.length===0}
            @click=${e.onClear}
          >
            ${C(`activity.clear`)}
          </button>
        </div>
      </div>
      <div class="settings-group activity-group">
        ${Dn(e,t)}
        <div
          class="activity-stream"
          role="list"
          aria-label=${C(`activity.streamLabel`)}
          @scroll=${e.onScroll}
        >
          ${n.length===0?m`
                  <div class="activity-empty">
                    ${e.entries.length===0||!r?C(`activity.empty`):C(`activity.emptyFiltered`)}
                  </div>
                `:n.map(t=>kn(e,t))}
        </div>
      </div>
    </section>
  `}var Z,jn;function Mn(){return(Mn=e((()=>{s(),p(),w(),T(),x(),A(),ye(),L(),k(),Z=[`running`,`done`,`error`],jn={running:`warn`,done:`ok`,error:`danger`}})))()}function Nn(e){return e?`${e.kind}:${e.id}`:null}function Q(e){return e.mode!==`run`||!e.selector?null:`${Nn(e.selector)}:${e.decisionCursor??``}`}function Pn(e){let t=a(e);return(t?.gatewayCode===`INVALID_REQUEST`||t?.code===`INVALID_REQUEST`)&&t.retryable!==!0}var $,Fn;function In(){return(In=e((()=>{i(),p(),Ae(),Be(),Fe(),v(),Re(),at(),w(),st(),x(),ke(),Je(),$e(),se(),f(),xe(),tt(),oe(),pt(),L(),Kt(),Yt(),mn(),Mn(),$=class extends ne{constructor(...e){super(...e),this.routeLocation={pathname:`/activity`,search:``,hash:``},this.routeData={mode:`sessions`,filters:{personId:null,query:``,time:`7d`},selector:null},this.entries=[],this.filterText=``,this.statusFilters={running:!0,done:!0,error:!0},this.toolFilter=``,this.expandedIds=new Set,this.expandedAutomationDays=new Set,this.autoFollow=!0,this.runInspector={status:`empty`},this.liveActivitySource=null,this.liveActivityRevision=-1,this.sessionActivity=new Jt(this),this.sessionActivityRevision=-1,this.inspectorAbort=null,this.inspectorClient=null,this.inspectorEpoch=0,this.inspectorSelectorKey=null,this.presenceClient=null,this.streamFollow=new nt(this,{selector:`.activity-stream`,isEnabled:()=>this.autoFollow}),this.subscriptions=new re(this).watch(()=>this.context?.agents,(e,t)=>e.subscribe(t)).watch(()=>this.context?.liveActivity,(e,t)=>e.subscribe(t),e=>{let t=e.snapshot,n=e!==this.liveActivitySource||t.revision!==this.liveActivityRevision;this.liveActivitySource=e,this.liveActivityRevision=t.revision,this.entries=t.entries,n&&(this.expandedIds=new Set,this.streamFollow.atBottom=!0)}).effect(()=>this.context?.gateway,e=>{this.applyGatewaySnapshot(e,e.snapshot,!0);let t=e.subscribeEvents(t=>{this.applyGatewayEvent(e,t)}),n=e.subscribe(t=>this.applyGatewaySnapshot(e,t,!1));return()=>{n(),t()}})}willUpdate(e){e.has(`routeLocation`)&&(this.routeData=Dt(this.routeLocation.search,b(this.routeLocation.pathname,this.context?.basePath)),this.syncSessionActivity())}updated(e){e.has(`routeLocation`)&&this.bindInspectorRoute();let t=this.sessionActivity.canonicalLocation(this.routeLocation,this.context.basePath,et(this.presencePayload).users);t&&this.context.replace(`activity`,t);let n=this.autoFollow&&e.has(`autoFollow`);(n||this.autoFollow&&this.streamFollow.atBottom&&e.has(`entries`))&&this.streamFollow.schedule(n)}disconnectedCallback(){this.subscriptions.clear(),this.cancelInspectorRequest(),super.disconnectedCallback()}applyGatewaySnapshot(e,t,n){if((n||e.eventLogRevision!==this.sessionActivityRevision)&&(this.sessionActivityRevision=e.eventLogRevision,this.sessionActivity.load(null,null)),n||t.client!==this.presenceClient){this.presenceClient=t.client;let e=t.phase===`connected`?Pe(t.hello?.snapshot):void 0;this.presencePayload=e?{presence:e}:void 0}else t.phase!==`connected`&&this.presencePayload&&(this.presencePayload=void 0);this.syncRunInspector(e,t,n),this.syncSessionActivity()}syncSessionActivity(e=`query`){let t=this.context?.gateway.snapshot;this.sessionActivity.load(t?.phase===`connected`?t.client:null,this.routeData.mode===`sessions`?this.routeData.filters:this.routeData.mode===`live`?`current`:null,e)}bindInspectorRoute(){let e=this.routeData,t=e?.mode===`run`?e.selector:null,n=Q(e);(n!==this.inspectorSelectorKey||e?.mode!==`run`)&&(this.inspectorSelectorKey=n,this.cancelInspectorRequest(),this.inspectorClient=null,this.runInspector=t?{status:`loading`,waitingForGateway:!0}:{status:`empty`},e?.mode===`run`&&this.syncRunInspector(this.context.gateway,this.context.gateway.snapshot,!0))}cancelInspectorRequest(){this.inspectorEpoch+=1,this.inspectorAbort?.abort(),this.inspectorAbort=null}syncRunInspector(e,t,n=!1){let r=this.routeData;if(r?.mode!==`run`)return;let i=r.selector;if(!i){this.runInspector={status:`empty`};return}if(this.inspectorSelectorKey=Q(r),t.phase!==`connected`||!t.client){this.cancelInspectorRequest(),this.inspectorClient=null,this.runInspector={status:`disconnected`};return}if(Ke(t,`audit.run.inspect`)===!1){this.cancelInspectorRequest(),this.inspectorClient=t.client,this.runInspector={status:`unsupported`};return}if(!qe(t,`audit.run.inspect`,`operator.read`)){this.cancelInspectorRequest(),this.inspectorClient=t.client,this.runInspector={status:`unauthorized`};return}!n&&this.inspectorClient===t.client&&(this.runInspector.status===`loading`||this.runInspector.status===`ready`)||this.loadRunInspector(e,t.client,i)}isUnknownInspectMethod(e){return e instanceof Le&&e.gatewayCode===`INVALID_REQUEST`&&(e.message===`unknown method: audit.run.inspect`||e.message===`missing scope: operator.admin`)}async loadRunInspector(e,t,n,r){this.cancelInspectorRequest();let i=this.inspectorEpoch,a=new AbortController;this.inspectorAbort=a,this.inspectorClient=t,this.runInspector=r?{...r,executionPageStatus:`loading`}:{status:`loading`,waitingForGateway:!1};let o=Q(this.routeData),s=()=>this.inspectorEpoch===i&&this.context.gateway===e&&e.snapshot.client===t&&e.snapshot.phase===`connected`&&this.routeData?.mode===`run`&&Q(this.routeData)===o,c=this.routeData.mode===`run`?this.routeData.decisionCursor:null;try{let e=n.kind===`run`?{runId:n.id,decisionLimit:50,executionLimit:50,...c?{decisionCursor:c}:{},...r?.result.nextExecutionCursor?{executionCursor:r.result.nextExecutionCursor}:{}}:{executionId:n.id,decisionLimit:50,...c?{decisionCursor:c}:{}},i=await t.request(`audit.run.inspect`,e,{signal:a.signal});if(s()){if(r?.result.identity.state===`ambiguous`&&i.identity.state===`ambiguous`){let e=new Map(r.result.identity.candidates.map(e=>[e.executionId,e]));for(let t of i.identity.candidates)e.set(t.executionId,t);this.runInspector={status:`ready`,result:{...i,identity:{...i.identity,candidates:[...e.values()]}},receiptPageCursors:r.receiptPageCursors}}else this.runInspector={status:`ready`,result:i,receiptPageCursors:Ot(i.decisionDisplays,c??void 0)}}}catch(e){if(!s()||a.signal.aborted)return;this.runInspector=Oe(e)?{status:`unauthorized`}:this.isUnknownInspectMethod(e)?{status:`unsupported`}:r?{...r,executionPageStatus:`error`}:{status:`error`,recovery:c&&Pn(e)?`restart`:`retry`}}finally{this.inspectorAbort===a&&(this.inspectorAbort=null)}}loadMoreExecutions(){let e=this.routeData,t=this.context.gateway.snapshot,n=this.runInspector;e?.mode!==`run`||e.selector?.kind!==`run`||t.phase!==`connected`||!t.client||n.status!==`ready`||n.executionPageStatus===`loading`||n.result.identity.state!==`ambiguous`||!n.result.nextExecutionCursor||this.loadRunInspector(this.context.gateway,t.client,e.selector,n)}loadMoreDecisions(){let e=this.routeData,t=this.context.gateway,n=t.snapshot,r=this.runInspector;if(e.mode!==`run`||!e.selector||n.phase!==`connected`||!n.client||r.status!==`ready`||r.decisionPageStatus===`loading`||r.result.identity.state!==`present`||!r.result.nextDecisionCursor)return;let i=r.result.nextDecisionCursor,a=e.selector,o=n.client,s=Q(e);this.cancelInspectorRequest();let c=this.inspectorEpoch,l=new AbortController;this.inspectorAbort=l,this.runInspector={...r,decisionPageStatus:`loading`};let u=()=>this.inspectorEpoch===c&&this.context.gateway===t&&t.snapshot.client===o&&t.snapshot.phase===`connected`&&Q(this.routeData)===s,d=a.kind===`run`?{runId:a.id,decisionCursor:i,decisionLimit:50,executionLimit:50}:{executionId:a.id,decisionCursor:i,decisionLimit:50};o.request(`audit.run.inspect`,d,{signal:l.signal}).then(e=>{if(!u())return;let t=kt(r.result,e);if(!t){this.runInspector={...r,decisionPageStatus:`error`};return}let n=new Map(r.receiptPageCursors);for(let t of e.decisionDisplays)n.set(t.selectorId,i);this.runInspector={status:`ready`,result:t,receiptPageCursors:n}}).catch(e=>{!u()||l.signal.aborted||(this.runInspector=Oe(e)?{status:`unauthorized`}:this.isUnknownInspectMethod(e)?{status:`unsupported`}:{...r,decisionPageStatus:`error`})}).finally(()=>{this.inspectorAbort===l&&(this.inspectorAbort=null)})}restartRunInspector(){let e=this.routeData;e.mode!==`run`||!e.selector||this.context.navigate(`activity`,{search:Tt(e.selector)})}selectMode(e){this.context.navigate(`activity`,{search:e===`live`?`?view=live`:``})}applyGatewayEvent(e,t){if(this.context.gateway!==e)return;let n=t.event===`session.message`?te(t.payload):null,r=n&&(n.hasActiveRun===!1||n.status!==null&&n.status!==`running`&&n.status!==`queued`);if((t.event===`sessions.changed`||this.routeData.mode===`live`&&r)&&this.sessionActivity.invalidate(t.payload),t.event===`presence`){let e=Pe(t.payload);this.presencePayload=e?{presence:e}:void 0}}clearEntries(){this.context.liveActivity.clear()}renderMode(){let e=this.routeData;if(e.mode===`sessions`){let t=et(this.presencePayload).users;return pn({context:this.context,expandedAutomationDays:this.expandedAutomationDays,filters:{...e.filters,personId:this.sessionActivity.result?.involvingProfileId??e.filters.personId},presenceViewers:t,result:this.sessionActivity.result,loading:this.sessionActivity.loading,retrying:this.sessionActivity.retrying,error:this.sessionActivity.error,onRetry:()=>this.syncSessionActivity(`retry`),onAutomationDayToggle:e=>{let t=new Set(this.expandedAutomationDays);t.has(e)?t.delete(e):t.add(e),this.expandedAutomationDays=t},onFiltersChange:e=>this.context.navigate(`activity`,this.sessionActivity.locationForFilters(e,this.routeLocation,this.context.basePath,t))})}if(e.mode===`run`)return m`<a
          class="activity-run-inspector-back"
          href=${y(`activity`,this.context.basePath)}
          >${S.arrowLeft}${C(`activityFeed.backToSessions`)}</a
        >
        ${Gt({basePath:this.context.basePath,state:this.runInspector,onLoadMoreExecutions:()=>this.loadMoreExecutions(),onLoadMoreDecisions:()=>this.loadMoreDecisions(),selectorId:e.selectorId,selector:e.selector,onRestart:()=>this.restartRunInspector(),onRetry:()=>this.syncRunInspector(this.context.gateway,this.context.gateway.snapshot,!0)})}`;let t={agentsList:this.context.agents.state.agentsList,hello:this.context.gateway.snapshot.hello};return m`<div id="activity-live-panel">
      ${ft({basePath:this.context.basePath,fallbackAgentId:De(t),mainKey:me(t),globalScope:d(t),navigate:this.context.navigate,connected:this.context.gateway.snapshot.phase===`connected`,result:this.sessionActivity.result,loading:this.sessionActivity.loading,incomplete:this.sessionActivity.incomplete,error:this.sessionActivity.error,onRetry:()=>this.syncSessionActivity(`retry`)})}
      ${An({basePath:this.context.basePath,entries:this.entries,filterText:this.filterText,statusFilters:this.statusFilters,toolFilter:this.toolFilter,expandedIds:this.expandedIds,autoFollow:this.autoFollow,onFilterTextChange:e=>this.filterText=e,onToolFilterChange:e=>this.toolFilter=e,onStatusToggle:(e,t)=>{this.statusFilters={...this.statusFilters,[e]:t}},onToggleAutoFollow:e=>this.autoFollow=e,onClear:()=>this.clearEntries(),onExpandAll:()=>{this.expandedIds=new Set(this.entries.map(e=>e.id))},onCollapseAll:()=>{this.expandedIds=new Set},onEntryToggle:(e,t)=>{let n=new Set(this.expandedIds);t?n.add(e):n.delete(e),this.expandedIds=n},onScroll:e=>this.streamFollow.handleScroll(e)})}
    </div>`}render(){let e=this.routeData.mode,t=m`
      ${e===`run`?g:it({id:`activity-mode`,active:e,tabs:[{value:`sessions`,label:C(`activityFeed.sessionsMode`)},{value:`live`,label:C(`activity.runInspector.liveMode`)}],ariaLabel:C(`activity.runInspector.activityView`),panelId:`activity-mode-panel`,className:`activity-mode-tabs`,variant:`sub`,onSelect:e=>this.selectMode(e)})}
      <div
        id="activity-mode-panel"
        role=${e===`run`?g:`tabpanel`}
        aria-labelledby=${e===`run`?g:`activity-mode-tab-${e}`}
      >
        ${this.renderMode()}
      </div>
    `;return m`
      <section class="content-header">
        <div>
          <div class="page-title">${Ve(`activity`)}</div>
          ${e===`live`?g:m`<div class="page-sub">${C(`subtitles.activity`)}</div>`}
        </div>
      </section>
      ${ot(t,{fillHeight:!0})}
    `}},n([r({context:ze,subscribe:!0})],$.prototype,`context`,void 0),n([Ne({attribute:!1})],$.prototype,`routeLocation`,void 0),n([h()],$.prototype,`entries`,void 0),n([h()],$.prototype,`filterText`,void 0),n([h()],$.prototype,`statusFilters`,void 0),n([h()],$.prototype,`toolFilter`,void 0),n([h()],$.prototype,`expandedIds`,void 0),n([h()],$.prototype,`expandedAutomationDays`,void 0),n([h()],$.prototype,`autoFollow`,void 0),n([h()],$.prototype,`runInspector`,void 0),n([h()],$.prototype,`presencePayload`,void 0),Fn={header:!0,render:(e={pathname:`/activity`,search:``,hash:``})=>m`<openclaw-activity-page .routeLocation=${e}></openclaw-activity-page>`},customElements.get(`openclaw-activity-page`)||customElements.define(`openclaw-activity-page`,$)})))()}In();export{Fn as activityPageComponent};
//# sourceMappingURL=activity-page-CU_gUJFt.js.map