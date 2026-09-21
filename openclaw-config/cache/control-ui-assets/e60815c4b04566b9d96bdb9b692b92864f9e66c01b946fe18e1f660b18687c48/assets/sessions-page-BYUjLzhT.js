const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./input-dialog-CiffR3Gs.js","./input-dialog-BgWE0wd-.js","./rolldown-runtime-DkW27tQK.js","./control-ui-core-DzidtL-P.js","./control-ui-foundation-DMb6IeIq.js","./lit-runtime-vxhGQLC6.js","./control-ui-core-CaKBexnk.js","./control-ui-core-uEI6aN5p.js","./gateway-runtime-DP4whqrA.js","./control-ui-core-BRgpioGt.css","./control-ui-boot-chat-pu3gR1ly.js","./control-ui-boot-shared-nBxCfWV5.js","./control-ui-boot-shared-gfE6fZcA.js","./markdown-runtime-Bn6OdBVq.js","./control-ui-boot-shared-Cyt1Zyts.js","./control-ui-boot-shared-DW2inEkr.js","./control-ui-boot-shared-BiKnED0X.js","./control-ui-boot-shared-D2DaCK2F.js","./control-ui-boot-shared-mS3IgGsF.js","./control-ui-boot-shared-CH-OC11d.js","./control-ui-boot-shared-CibIhXHx.css","./control-ui-boot-chat-B1e-zt03.js","./config-runtime-Cr2H22l0.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$i as t,Ca as n,Fr as r,L as i,On as a,R as o,Vn as s,Wn as c,at as l,ba as u,bi as d,xi as f}from"./control-ui-foundation-DMb6IeIq.js";import{A as p,Da as m,Ds as h,Ea as g,Gc as _,Gn as v,Gs as y,Gt as b,Jc as x,Jo as S,Kn as C,Ks as w,L as ee,On as T,Pa as E,R as D,Ta as te,Wa as ne,Ws as re,Yo as ie,Yr as ae,Ys as O,Zr as oe,Zs as se,Zt as ce,aa as k,ac as le,ba as ue,cc as A,en as de,gc as fe,ia as pe,ic as j,na as me,no as he,on as ge,qc as _e,qo as M,ra as ve,sa as ye,ta as be,tn as N,to as xe,xa as Se}from"./control-ui-core-DzidtL-P.js";import{$ as Ce,K as we,X as P,at as F,q as I,st as Te}from"./lit-runtime-vxhGQLC6.js";import{Nt as Ee,Pt as De,Rn as Oe,Tn as ke,h as Ae,m as je,zn as Me}from"./control-ui-core-CaKBexnk.js";import{Bt as Ne,Ft as L,Gt as R,It as Pe,Nt as Fe}from"./control-ui-core-uEI6aN5p.js";import{B as Ie,I as Le,L as Re,R as ze}from"./control-ui-boot-shared-nBxCfWV5.js";import{a as z,r as Be}from"./gateway-runtime-DP4whqrA.js";import{Aa as Ve,Et as He,Gt as Ue,K as We,Kt as Ge,Lt as Ke,Mr as qe,Nr as Je,Nt as Ye,Rt as Xe,Ss as Ze,W as Qe,Y as B,co as $e,fi as et,ja as tt,oa as nt,pi as rt,q as it,wt as at,zt as V}from"./control-ui-boot-shared-Cyt1Zyts.js";import{H as ot,Nt as st,Pt as H,U as ct}from"./control-ui-boot-chat-pu3gR1ly.js";import{p as lt,u as ut}from"./control-ui-boot-chat-B1e-zt03.js";import{$t as dt,Es as ft,In as pt,Qs as mt,Rn as ht,Zs as gt,Zt as _t,_a as vt,a as yt,as as bt,cc as xt,ds as St,es as Ct,fs as wt,ga as Tt,ks as Et,o as Dt,ps as Ot,rs as kt,s as At,sc as U,ts as jt,ws as Mt,xs as Nt,zn as Pt}from"./control-ui-boot-shared-CH-OC11d.js";import{_ as Ft,l as It,u as Lt}from"./control-ui-boot-new-DeGMjctK.js";import{n as Rt,t as zt}from"./transcript-search-ColGyAYD.js";import{n as Bt,r as Vt}from"./worktree-preservation-BzgKStFs.js";import{n as Ht,t as Ut}from"./cloud-worker-stop.runtime-CLFg5RNh.js";import{n as Wt,t as Gt}from"./settings-workspace-IBRfeTG9.js";import{o as Kt,s as qt}from"./presenter-Bco2R70L.js";import{n as Jt,t as Yt}from"./agent-scope-control-CqnA-t3U.js";import{n as Xt,t as Zt}from"./sessions-hub-header-CcnzhSlV.js";function Qt(e){return[...new Set((e?.sessions??[]).map(e=>j(e.key)?.agentId).filter(e=>!!e))]}function $t(e,t){return Object.fromEntries(Qt(e).map(e=>[e,t(e)]).filter(e=>!!e[1]))}function en(){return(en=e((()=>{O()})))()}function tn(e,t){let n=(e?.sessions??[]).map(e=>e.category?.trim()).filter(e=>!!e);return[...new Set([...t,...n.toSorted((e,t)=>e.localeCompare(t))])]}async function nn(e){if(!e.sessions||e.knownCategories.includes(e.name))return`completed`;try{return await e.sessions.groupsPut([...e.sessions.state.groups??[],e.name])===`completed`&&e.isCurrent()?`completed`:`stale`}catch(t){return e.isCurrent()?(e.onError(M(t)),`failed`):`stale`}}function rn(){return(rn=e((()=>{ie()})))()}function an(){return Et(x()?.getItem(W))}function on(e){try{x()?.setItem(W,e)}catch{}}var W;function sn(){return(sn=e((()=>{ft(),W=`openclaw:sessions:group-by`})))()}function cn(e,t){return Object.hasOwn(e,t)?e[t]??null:null}function ln(e,t){let n=dt(e,t),r=Qe(e.thinkingDefault??(n?t?.thinkingDefault:void 0)),i=e.thinkingLevels?.length?e.thinkingLevels:n&&t?.thinkingLevels?.length?t.thinkingLevels:(e.thinkingOptions?.length?e.thinkingOptions:n&&t?.thinkingOptions?.length?t.thinkingOptions:Bn).map(e=>({id:B(e),label:e}));return[{value:``,label:r},...i.map(e=>({value:B(e.id),label:We(e.id,e.label)}))]}function G(e,t){return!t||e.some(e=>e.value===t)?[...e]:[...e,{value:t,label:We(t)}]}function K(e,t=!1){return e.map(e=>({value:e,label:R(e===``?`sessionsView.inherit`:t&&e===`off`?`sessionsView.offExplicit`:`sessionsView.${e}`)}))}function un(e){return R(Gn[e]??`sessionsView.statusUnknown`)}function dn(e){let t=l(e),n=e.hasActiveRun===!1&&(!e.status||e.status===`running`),r=e.status===`queued`?R(`sessionsView.statusQueued`):t?R(`sessionsView.statusLive`):n?R(`sessionsView.statusIdle`):e.status?un(e.status):R(`sessionsView.statusUnknown`),i=e.status===`queued`?`warn`:t||e.status===`done`?`ok`:n||!e.status?`muted`:`danger`,a=`${R(`sessionsView.status`)}: ${r}`;return P`
    <openclaw-tooltip .content=${a}>
      ${V({kind:i,label:r})}
    </openclaw-tooltip>
  `}function q(e){return he(e.key)?`cron`:e.kind}function fn(e){let t=q(e);return P`
    <span class="session-avatar session-avatar--${t}" aria-hidden="true">
      ${Kn[t]??L.circle}
      ${l(e)?P`<span class="session-avatar__status"></span>`:I}
    </span>
  `}function pn(e){let t=e.totalTokens;if(typeof t!=`number`||!Number.isFinite(t))return P`<span class="muted">${R(`common.na`)}</span>`;let n=e.totalTokensFresh!==!1,r=`${n?``:`~`}${b(t)}`,i=_t(e),a=i.tokens>0?i.tokens:null;if(!a)return P`<span class="session-tokens__value">${r}</span>`;let o=Math.min(100,Math.round(t/a*100)),s=n?o>=Jn?`danger`:o>=qn?`warn`:`ok`:`stale`,c=R(i.fromLastPrompt?n?`sessionsView.promptBudgetUsage`:`sessionsView.promptBudgetUsageApprox`:n?`sessionsView.contextUsage`:`sessionsView.contextUsageApprox`,{percent:String(o),used:t.toLocaleString(),context:a.toLocaleString()});return P`
    <openclaw-tooltip .content=${c}>
      <div class="session-tokens">
        <span class="session-tokens__value"
          >${r} / ${b(a)}</span
        >
        ${Lt({mode:`continuous`,percent:o,tone:s,label:c})}
      </div>
    </openclaw-tooltip>
  `}function mn(e,t,n){let r=e.filter(e=>e.unread===!0&&e.archived!==!0).length,i=e.filter(e=>e.archived===!0).length,a=[[String(t),R(`sessionsView.statusLive`),t>0],[String(r),R(`sessionsView.unread`),r>0]];return n!==`active`&&a.push([String(i),R(`sessionsView.archived`),!1]),P`
    <span class="sessions-heading-facts">
      ${a.map(([e,t,n],r)=>P`
          ${r>0?P`<span class="sessions-heading-fact__separator" aria-hidden="true">·</span>`:I}
          <span
            class=${n?`sessions-heading-fact sessions-heading-fact--active`:`sessions-heading-fact`}
          >
            <strong>${e}</strong> ${t}
          </span>
        `)}
    </span>
  `}function hn(e,t){let r=t.find(t=>t.key===e.sessionKey);return n(r?.label)??n(r?.displayName)??e.sessionKey}function gn(e,t){let n=e.transcriptSearchQuery.trim().length>0,r=e.transcriptSearch,i=r.status===`results`?r.results:[],a=r.status===`loading`;return P`
    <section
      class="sessions-transcript-search"
      aria-label=${R(`sessionsView.transcriptSearchTitle`)}
    >
      <form
        class="sessions-transcript-search__form"
        role="search"
        aria-label=${R(`sessionsView.transcriptSearchTitle`)}
        @submit=${t=>{t.preventDefault(),e.transcriptSearchAvailable&&n&&!a&&e.onTranscriptSearch()}}
      >
        <div class="data-table-search sessions-transcript-search__input">
          <input
            type="search"
            maxlength="4096"
            aria-label=${R(`sessionsView.transcriptSearchInputLabel`)}
            placeholder=${R(`sessionsView.transcriptSearchPlaceholder`)}
            .value=${e.transcriptSearchQuery}
            ?disabled=${!e.transcriptSearchAvailable}
            @input=${t=>e.onTranscriptSearchChange(t.target.value)}
          />
        </div>
        <button
          class="btn primary"
          type="submit"
          ?disabled=${!e.transcriptSearchAvailable||!n||a}
        >
          ${R(a?`sessionsView.transcriptSearchSearching`:`sessionsView.transcriptSearchAction`)}
        </button>
        ${n?P`
                <button class="btn" type="button" @click=${e.onClearTranscriptSearch}>
                  ${R(`sessionsView.transcriptSearchClear`)}
                </button>
              `:I}
      </form>
      ${e.transcriptSearchAvailable?I:P`
              <div class="muted" role="status">
                ${R(`sessionsView.transcriptSearchUnavailable`)}
              </div>
            `}
      <div
        class="sessions-transcript-search__status"
        aria-live="polite"
        aria-busy=${a?`true`:`false`}
      >
        ${a?P`<span class="muted">${R(`sessionsView.transcriptSearchSearching`)}</span>`:I}
        ${r.status===`error`?P`
                <div
                  class="sessions-transcript-search__notice sessions-transcript-search__notice--danger"
                >
                  <span>${R(`sessionsView.transcriptSearchError`)}: ${r.message}</span>
                  <button class="btn btn--sm" type="button" @click=${e.onTranscriptSearch}>
                    ${R(`sessionsView.transcriptSearchRetry`)}
                  </button>
                </div>
              `:I}
        ${r.status===`results`&&r.indexing?P`
                <div class="sessions-transcript-search__notice">
                  <span>${R(`sessionsView.transcriptSearchIndexing`)}</span>
                  <button
                    class="btn btn--sm"
                    type="button"
                    ?disabled=${a}
                    @click=${e.onTranscriptSearch}
                  >
                    ${R(`sessionsView.transcriptSearchRetry`)}
                  </button>
                </div>
              `:I}
        ${r.status===`results`&&i.length===0&&!r.indexing?P`
                <div class="sessions-transcript-search__empty" role="status">
                  ${R(`sessionsView.transcriptSearchEmpty`)}
                </div>
              `:I}
        ${i.length>0?P`
                <div class="sessions-transcript-search__results">
                  <div class="sessions-transcript-search__summary">
                    <strong
                      >${R(`sessionsView.transcriptSearchMatches`,{count:String(i.length)})}</strong
                    >
                    ${r.status===`results`&&r.truncated?P`<span class="muted"
                            >${R(`sessionsView.transcriptSearchTruncated`)}</span
                          >`:I}
                  </div>
                  <div class="sessions-transcript-search__list">
                    ${i.map(n=>{let r=n.timestamp>0?N(n.timestamp):R(`common.na`),i=n.timestamp>0?de(n.timestamp):r;return P`
                        <button
                          class="sessions-transcript-search__result"
                          type="button"
                          @click=${()=>e.onNavigateToChat?.(n.sessionKey)}
                        >
                          <span class="sessions-transcript-search__result-header">
                            <strong>${hn(n,t)}</strong>
                            <span class="muted" title=${i}>
                              ${R(`sessionsView.${n.role}`)} · ${r}
                            </span>
                          </span>
                          <span class="sessions-transcript-search__snippet">${n.snippet}</span>
                          <span class="sessions-transcript-search__key">${n.sessionKey}</span>
                        </button>
                      `})}
                  </div>
                </div>
              `:I}
      </div>
    </section>
  `}function _n(e){return Array.from({length:Yn},(t,n)=>P`
      <tr class="session-skeleton-row" aria-hidden="true">
        ${Array.from({length:e},(e,t)=>t===0?P`<td class="data-table-checkbox-col"></td>`:P`<td>
                <span
                  class="session-skeleton ${t===1?`session-skeleton--key`:``}"
                  style=${`animation-delay: ${n*120}ms`}
                ></span>
              </td>`)}
      </tr>
    `)}function vn(e,t,n){let r=n===`asc`?1:-1;return[...e].toSorted((e,n)=>{let i=(n.pinnedAt??0)-(e.pinnedAt??0);return i===0?(t===`key`||t===`kind`?(e[t]??``).localeCompare(n[t]??``):t===`updated`?(e.updatedAt??0)-(n.updatedAt??0):(e.totalTokens??e.inputTokens??e.outputTokens??0)-(n.totalTokens??n.inputTokens??n.outputTokens??0))*r:i})}function yn(e,t,n){let r=t*n;return e.slice(r,r+n)}function bn(e){return u(e.searchQuery).length>0||c(e.activeMinutes)!==void 0||!e.includeGlobal}function xn(e){let t=Xn[e];return t?R(t):e}function Sn(e){return R(e===1?`sessionsView.checkpoint`:`sessionsView.checkpoints`,{count:String(e)})}function Cn(e){return typeof e.tokensBefore==`number`&&typeof e.tokensAfter==`number`&&Number.isFinite(e.tokensBefore)&&Number.isFinite(e.tokensAfter)?R(`sessionsView.tokenRange`,{before:e.tokensBefore.toLocaleString(),after:e.tokensAfter.toLocaleString()}):typeof e.tokensBefore==`number`&&Number.isFinite(e.tokensBefore)?R(`sessionsView.tokensBefore`,{count:e.tokensBefore.toLocaleString()}):R(`sessionsView.tokenDeltaUnavailable`)}function wn(e){return typeof e!=`number`||!Number.isFinite(e)||e<0?null:ce(e)??`0ms`}function Tn(e){if(!e)return I;let t=e.status===`active`?`accent`:e.status===`complete`?`ok`:e.status===`blocked`||e.status===`budget_limited`||e.status===`usage_limited`?`warn`:`muted`,n=ut(e);return P`
    <openclaw-tooltip .content=${n}>
      <span tabindex="0" aria-label=${n}>
        ${V({kind:t,label:lt(e)})}
      </span>
    </openclaw-tooltip>
  `}function En(e){let{row:t,updated:r,checkpointCount:i}=e,o=[{label:R(`sessionsView.key`),value:t.key},{label:R(`sessionsView.kind`),value:t.kind},{label:R(`sessionsView.updated`),value:r},{label:R(`sessionsView.tokens`),value:Kt(t)},{label:R(`sessionsView.compaction`),value:Sn(i)}],s=(e,t)=>{let r=n(t);r&&o.push({label:e,value:r})};s(R(`sessionsView.group`),t.category),s(R(`sessionsView.status`),t.status),t.goal&&o.push({label:R(`sessionsView.goal`),value:ut(t.goal)}),s(R(`sessionsView.goalNote`),t.goal?.lastStatusNote),s(R(`sessionsView.model`),t.model),s(R(`sessionsView.provider`),t.modelProvider),s(R(`sessionsView.runtime`),a(t.agentRuntime)),s(R(`sessionsView.runDuration`),wn(t.runtimeMs)),s(R(`sessionsView.surface`),t.surface),s(R(`sessionsView.subject`),t.subject),s(R(`sessionsView.room`),t.room),s(R(`sessionsView.space`),t.space),s(R(`sessionsView.sessionId`),t.sessionId),t.archiveReason&&o.push({label:R(`sessionsView.archiveReason`),value:ot(t.archiveReason)});for(let[e,n]of[[R(`sessionsView.activeRun`),t.hasActiveRun],[R(`sessionsView.archived`),t.archived],[R(`sessionsView.pinned`),t.pinned]])typeof n==`boolean`&&o.push({label:e,value:R(n?`common.yes`:`common.no`)});return o}function J(e){return e.groupBy===`category`?8:7}function Dn(e){return R(Q[e]??Q.none)}function On(e,t){let{id:r}=e;if(t.groupBy===`date`)return R({today:`sessionsView.dateToday`,yesterday:`sessionsView.dateYesterday`,week:`sessionsView.dateThisWeek`,older:`sessionsView.dateOlder`}[r]??`sessionsView.dateNoActivity`);if(r===``)return R(`sessionsView.ungrouped`);if(t.groupBy===`agent`){let e=cn(t.agentIdentityById,r),i=n(e?.name);if(i){let t=n(e?.emoji);return t?`${t} ${i}`:i}}return t.groupBy===`person`&&e.rows[0]?.owner?.actor.label?.trim()||r}function Y(e,t){e.currentTarget?.classList.toggle(`session-drop-target--active`,t)}function kn(e,t){if(e.groupBy!==`category`||e.groupWriteDisabledReason)return{dragover:I,dragleave:I,drop:I};let n=e=>e.dataTransfer?.types.includes(U)===!0;return{dragover:e=>{n(e)&&(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=`move`),Y(e,!0))},dragleave:e=>Y(e,!1),drop:r=>{if(!n(r))return;r.preventDefault(),Y(r,!1);let i=r.dataTransfer?.getData(U);i&&e.onAssignCategory(i,t)}}}function An(e,t){let n=On(e,t),r=e.rows.length===1?R(`sessionsView.groupRowCountOne`,{count:`1`}):R(`sessionsView.groupRowCount`,{count:String(e.rows.length)}),i=kn(t,e.id===``?null:e.id);return P`
    <tr
      class="session-group-row"
      @dragover=${i.dragover}
      @dragleave=${i.dragleave}
      @drop=${i.drop}
    >
      <td colspan=${J(t)}>
        <div class="session-group-row__header">
          <span class="session-group-row__icon" aria-hidden="true">${L.folder}</span>
          <span class="session-group-row__label">${n}</span>
          <span class="session-group-row__count">${r}</span>
        </div>
      </td>
    </tr>
  `}function jn(e,t){let r=n(e.category)??``,i=[...t.knownCategories];return r&&!i.includes(r)&&i.push(r),P`
    <td>
      <select
        ?disabled=${t.loading||!!t.groupWriteDisabledReason}
        title=${t.groupWriteDisabledReason??I}
        aria-label=${R(`sessionsView.moveToGroup`)}
        class="session-group-select"
        @change=${n=>{if(t.groupWriteDisabledReason)return;let i=n.target;if(i.value===Z){i.value=r,t.onRequestNewCategory(e.key);return}t.onAssignCategory(e.key,i.value||null)}}
      >
        <option value="" ?selected=${!r}>${R(`sessionsView.ungrouped`)}</option>
        ${i.map(e=>P`<option value=${e} ?selected=${r===e}>${e}</option>`)}
        <option value=${Z}>${R(`sessionsView.newGroup`)}</option>
      </select>
    </td>
  `}function Mn(e){return e instanceof Element&&!!e.closest(`a, button, input, label, select, textarea`)}function Nn(e){let t=[`session-filter-check`,`session-filter-toggle`,e.extraClass??``,e.checked?`session-filter-check--active`:``].filter(Boolean).join(` `);return P`
    <openclaw-tooltip .content=${e.title}>
      <label class=${t}>
        <input
          name=${e.name}
          class="session-filter-check__input"
          type="checkbox"
          .checked=${e.checked}
          @change=${t=>e.onChange(t.target.checked)}
        />
        <span class="session-filter-check__mark" aria-hidden="true">${L.check}</span>
        <span class="session-filter-check__label">${e.label}</span>
      </label>
    </openclaw-tooltip>
  `}function X(e){return P`
    <label class="session-override-field">
      <span class="session-override-field__label">${e.label}</span>
      <select
        class="settings-select"
        ?disabled=${e.disabled}
        title=${e.disabledReason??I}
        @change=${t=>e.onChange(t.target.value)}
      >
        ${e.options.map(t=>P`<option value=${t.value} ?selected=${e.current===t.value}>
              ${t.label}
            </option>`)}
      </select>
    </label>
  `}function Pn(e){let t=e.result?.sessions??[],n=vn(t,e.sortColumn,e.sortDir),r=n.length,i=Math.max(1,Math.ceil(r/e.pageSize)),a=Math.min(e.page,i-1),o=e.groupBy===`none`?null:Mt({rows:n,mode:e.groupBy,knownCategories:e.knownCategories}),s=yn(o?o.flatMap(e=>e.rows):n,a,e.pageSize),c=t.length===0&&bn(e),u=t.filter(e=>l(e)).length,d=t.filter(e=>e.archived===!0).length,f=e.statusFilter===`archived`?R(`sessionsView.noArchivedSessions`):e.statusFilter===`active`?R(`sessionsView.noActiveSessions`):R(`sessionsView.noSessions`),p=(t,n,r=``)=>{let i=e.sortColumn===t,a=i&&e.sortDir===`asc`?`desc`:`asc`;return P`
      <th
        class=${r}
        data-sortable
        data-sort-dir=${i?e.sortDir:``}
        aria-sort=${i?e.sortDir===`asc`?`ascending`:`descending`:I}
        @click=${()=>e.onSortChange(t,i?a:`desc`)}
      >
        <button class="data-table-sort-button" type="button">
          ${n}
          <span class="data-table-sort-icon" aria-hidden="true">${L.arrowUpDown}</span>
        </button>
      </th>
    `},m=P`
    ${R(`sessionsView.title`)}
    ${e.result?P`
            <openclaw-tooltip .content=${R(`sessionsView.store`,{path:e.result.path})}>
              <span class="settings-count">${t.length}</span>
            </openclaw-tooltip>
          `:I}
    ${e.result?mn(t,u,e.statusFilter):I}
  `,h=P`
    ${e.statusFilter===`archived`?P`
            <button
              class="btn danger"
              ?disabled=${e.loading||d===0||!!e.deleteArchivedDisabledReason}
              title=${e.deleteArchivedDisabledReason??I}
              @click=${e.onDeleteAllArchived}
            >
              ${L.trash} ${R(`sessionsView.deleteAllArchived`)}
            </button>
          `:I}
    <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
      ${e.loading?R(`common.loading`):R(`common.refresh`)}
    </button>
  `,g=[e.error?P`<div class="sessions-error" role="alert">${e.error}</div>`:I,Ke({title:R(`sessionsView.transcriptSearchTitle`)},gn(e,t)),Ke({title:m,actions:h},Ln(e,{paginated:s,groups:o,emptyBecauseFiltered:c,emptyMessage:f,totalRows:r,totalPages:i,page:a,sortHeader:p}))];return Ye(g,{wide:!0})}function Fn(e,t){e.currentTarget instanceof Element&&e.currentTarget.previousElementSibling?.setAttribute(`aria-expanded`,String(t))}function In(e){let t=[[`activeMinutes`,`minutes`,R(`sessionsView.active`),R(`sessionsView.activeTooltip`,{count:e.activeMinutes.trim()}),R(`sessionsView.minutesPlaceholder`),e.statusFilter!==`active`],[`limit`,`limit`,R(`sessionsView.limit`),R(`sessionsView.limitTooltip`),I,!1]],n=[[`includeGlobal`,R(`sessionsView.global`),R(`sessionsView.globalTooltip`)],[`includeUnknown`,R(`sessionsView.unknown`),R(`sessionsView.unknownTooltip`)]],{activeMinutes:r,limit:i,includeGlobal:a,includeUnknown:o}=e,s=(t,n)=>e.onFiltersChange({activeMinutes:r,limit:i,includeGlobal:a,includeUnknown:o,[t]:n}),c=r.trim()!==``||i.trim()!==`50`||!a||o||e.groupBy!==`none`;return P`
    <button
      id="sessions-filter-popover-trigger"
      type="button"
      class="btn btn--sm sessions-filter-popover__trigger ${c?`active`:``}"
      title=${R(`sessionsView.filters`)}
      aria-label=${R(`sessionsView.filters`)}
      aria-haspopup="dialog"
      aria-expanded="false"
    >
      ${L.listFilter}
    </button>
    <wa-popover
      class="sessions-filter-popover"
      for="sessions-filter-popover-trigger"
      placement="bottom-end"
      without-arrow
      @wa-show=${e=>Fn(e,!0)}
      @wa-hide=${e=>Fn(e,!1)}
    >
      <div class="sessions-filter-popover__panel">
        <div class="sessions-filter-popover__fields">
          ${t.map(([t,n,r,i,a,o])=>P`
              <openclaw-tooltip .content=${i}>
                <label class="session-filter-field">
                  <span class="session-filter-label">${r}</span>
                  <input
                    class="session-filter-input session-filter-input--${n}"
                    placeholder=${a}
                    .value=${e[t]}
                    ?disabled=${o}
                    @input=${e=>s(t,e.target.value)}
                  />
                </label>
              </openclaw-tooltip>
            `)}
        </div>
        <div
          class="session-filter-toggle-group"
          role="group"
          aria-label=${R(`sessionsView.sourceFilters`)}
        >
          ${n.map(([t,n,r])=>Nn({name:t,checked:e[t],label:n,title:r,onChange:e=>s(t,e)}))}
        </div>
        <label class="session-groupby">
          <span class="session-groupby__label">${R(`sessionsView.groupBy`)}</span>
          <select
            class="session-groupby__select"
            @change=${t=>e.onGroupByChange(t.target.value)}
          >
            ${Nt.filter(t=>t!==`person`||e.personGroupingAvailable).map(t=>P`
                <option value=${t} ?selected=${e.groupBy===t}>
                  ${Dn(t)}
                </option>
              `)}
          </select>
        </label>
        ${e.groupBy===`category`?P`
                <button
                  class="btn btn--sm"
                  ?disabled=${!!e.groupWriteDisabledReason}
                  title=${e.groupWriteDisabledReason??I}
                  @click=${()=>e.onRequestNewCategory()}
                >
                  ${L.plus} ${R(`sessionsView.newGroup`)}
                </button>
              `:I}
      </div>
    </wa-popover>
  `}function Ln(e,t){let{paginated:n,groups:r,emptyBecauseFiltered:i,emptyMessage:a,totalRows:o,totalPages:s,page:c}=t,l=t.sortHeader,u=i?R(`sessionsView.noSessionsMatchFilters`):a,d=r?new Set(n.map(e=>e.key)):null;return P`
    <div
      class="sessions-toolbar sessions-filter-bar"
      aria-label=${R(`sessionsView.filterControls`)}
    >
      <div class="data-table-search sessions-toolbar__search">
        ${L.search}
        <input
          type="text"
          placeholder=${R(`sessionsView.searchPlaceholder`)}
          .value=${e.searchQuery}
          @input=${t=>e.onSearchChange(t.target.value)}
        />
      </div>
      ${Xe({value:e.statusFilter,ariaLabel:R(`sessionsView.sessionState`),className:`sessions-view-segment`,options:[{value:`active`,label:R(`common.active`)},{value:`archived`,label:R(`sessionsView.archived`),title:R(`sessionsView.archivedOnlyTooltip`)},{value:`all`,label:R(`sessionsView.all`)}],onChange:t=>e.onStatusFilterChange(t)})}
      ${In(e)}
    </div>

    ${e.selectedKeys.size>0?P`
            <div class="data-table-bulk-bar">
              <span>${R(`sessionsView.selected`,{count:String(e.selectedKeys.size)})}</span>
              <button class="btn btn--sm" @click=${e.onDeselectAll}>
                ${R(`common.unselect`)}
              </button>
              <button
                class="btn btn--sm danger"
                ?disabled=${e.loading||!!e.deleteSelectedDisabledReason}
                title=${e.deleteSelectedDisabledReason??I}
                @click=${e.onDeleteSelected}
              >
                ${L.trash} ${R(`sessionsView.deleteSelected`)}
              </button>
            </div>
          `:I}

    <div class="data-table-container">
      <table class="data-table sessions-table">
        <thead>
          <tr>
            <th class="data-table-checkbox-col">
              ${n.length>0?P`<input
                      type="checkbox"
                      .checked=${n.length>0&&n.every(t=>e.selectedKeys.has(t.key))}
                      .indeterminate=${n.some(t=>e.selectedKeys.has(t.key))&&!n.every(t=>e.selectedKeys.has(t.key))}
                      @change=${()=>{n.every(t=>e.selectedKeys.has(t.key))?e.onDeselectPage(n.map(e=>e.key)):e.onSelectPage(n.map(e=>e.key))}}
                      aria-label=${R(`sessionsView.selectAllOnPage`)}
                    />`:I}
            </th>
            ${l(`key`,R(`sessionsView.key`),`data-table-key-col`)}
            ${e.groupBy===`category`?P`<th>${R(`sessionsView.group`)}</th>`:I}
            ${l(`kind`,R(`sessionsView.kind`))}
            <th class="session-status-col">${R(`sessionsView.status`)}</th>
            ${l(`updated`,R(`sessionsView.updated`))}
            ${l(`tokens`,R(`sessionsView.tokens`))}
            <th class="session-actions-col">
              <span class="sr-only">${R(`sessionsView.actions`)}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          ${e.loading&&!e.result?_n(J(e)):n.length===0&&(e.loading||e.error||!e.result)?I:n.length===0?P`
                      <tr>
                        <td
                          colspan=${J(e)}
                          class="data-table-empty-cell"
                        >
                          <div class="data-table-empty-state" role="status" aria-live="polite">
                            <div class="data-table-empty-state__message">
                              ${i?L.search:L.messageSquare}
                              <span>${u}</span>
                            </div>
                            ${i?P`
                                    <button class="btn btn--sm" @click=${e.onClearFilters}>
                                      ${R(`sessionsView.showAll`)}
                                    </button>
                                  `:I}
                          </div>
                        </td>
                      </tr>
                    `:r?r.flatMap(t=>{let n=t.rows.filter(e=>d?.has(e.key));if(n.length===0&&t.rows.length>0)return[];let r=n.flatMap(t=>Rn(t,e));return r.unshift(An(t,e)),r}):n.flatMap(t=>Rn(t,e))}
        </tbody>
      </table>
    </div>

    ${o>0?P`
            <div class="data-table-pagination">
              <div class="data-table-pagination__info">
                ${R(`sessionsView.pagination`,{start:String(c*e.pageSize+1),end:String(Math.min((c+1)*e.pageSize,o)),total:String(o)})}
              </div>
              <div class="data-table-pagination__controls">
                <select
                  class="data-table-pagination__size"
                  aria-label=${R(`sessionsView.pageSize`)}
                  .value=${String(e.pageSize)}
                  @change=${t=>e.onPageSizeChange(Number(t.target.value))}
                >
                  ${Wn.map(t=>P`<option value=${t} ?selected=${t===e.pageSize}>
                        ${R(`sessionsView.rowsPerPage`,{count:String(t)})}
                      </option>`)}
                </select>
                ${e.result?.hasMore&&e.result.nextOffset!=null?P` <button ?disabled=${e.loading} @click=${e.onLoadMore}>
                        ${R(`chat.selectors.loadMoreRosterSessions`)}
                      </button>`:I}
                <button ?disabled=${c<=0} @click=${()=>e.onPageChange(c-1)}>
                  ${R(`common.previous`)}
                </button>
                <button
                  ?disabled=${c>=s-1}
                  @click=${()=>e.onPageChange(c+1)}
                >
                  ${R(`common.next`)}
                </button>
              </div>
            </div>
          `:I}
  `}function Rn(e,t){let r=e.updatedAt?N(e.updatedAt):R(`common.na`),i=e.latestCompactionCheckpoint,a=e.compactionCheckpointCount??0,o=Math.max(a,+!!i),s=a>0||!!i,c=t.expandedSessionKey===e.key,l=`session-details-${encodeURIComponent(e.key)}`,u=n(e.displayName)??null,d=n(e.label)??``,f=!!(u&&u!==e.key&&u!==d),m=le(e.key),h=m?cn(t.agentIdentityById,m.agentId):null,g=n(h?.emoji)??``,_=n(h?.name)??``,v=_&&m?`${g?`${g} `:``}${_} (${m.channel})`:null,y=v??e.key,b=e.kind!==`global`,x=b?k({face:ve(e),sessionKey:e.key,fallbackAgentId:t.agentId,basePath:t.basePath,row:e,mainKey:t.mainKey,preferenceDerivedFace:!0}).href:null,S=`session-kind session-kind--${q(e)}`,C=[`session-data-row`,`session-data-row--expandable`,t.statusFilter===`all`&&e.archived===!0?`session-data-row--archived`:``,c?`session-data-row--expanded`:``,t.sessionMenu?.key===e.key?`session-data-row--menu-open`:``].filter(Boolean).join(` `),w=R(c?`sessionsView.hideSessionDetails`:`sessionsView.showSessionDetails`,{count:y}),T=t.groupBy===`category`,E=kn(t,n(e.category)??null),D=n=>ee(n,n instanceof KeyboardEvent?n.currentTarget.querySelector(`button[aria-haspopup="menu"]`):null,(n,r,i)=>t.onOpenSessionMenu(e,{x:r,y:i},n));return[P`<tr
      class=${C}
      tabindex="0"
      aria-expanded=${String(c)}
      aria-controls=${l}
      draggable=${T?`true`:I}
      aria-description=${T?R(`sessionsView.dragSessionHint`):I}
      @dragstart=${T?t=>{t.dataTransfer?.setData(U,e.key),t.dataTransfer&&(t.dataTransfer.effectAllowed=`move`)}:I}
      @dragover=${E.dragover}
      @dragleave=${E.dragleave}
      @drop=${E.drop}
      @contextmenu=${D}
      @click=${n=>{Mn(n.target)||t.onToggleDetails(e.key)}}
      @keydown=${n=>{D(n),!n.defaultPrevented&&(Mn(n.target)||(n.key===`Enter`||n.key===` `)&&(n.preventDefault(),t.onToggleDetails(e.key)))}}
    >
      <td class="data-table-checkbox-col">
        <input
          type="checkbox"
          .checked=${t.selectedKeys.has(e.key)}
          @change=${()=>t.onToggleSelect(e.key)}
          aria-label=${`${R(`sessionsView.selectSession`)}: ${e.key}`}
        />
      </td>
      <td class="data-table-key-col">
        <openclaw-tooltip .content=${y}>
          <div class=${v?`session-key-cell`:`mono session-key-cell`}>
            ${fn(e)}
            <div class="session-key-cell__text">
              <span class="session-key-cell__primary">
                ${e.unread===!0?P`<span
                        class="session-unread-dot"
                        role="img"
                        aria-label=${R(`sessionsView.unread`)}
                      ></span>`:I}
                ${b?P`<a
                        href=${x}
                        class="session-link"
                        @click=${n=>{p(n)&&t.onNavigateToChat&&(n.preventDefault(),t.onNavigateToChat(e.key))}}
                        >${v??e.key}</a
                      >`:P`<span>${v??e.key}</span>`}
                ${d?P`<span class="session-label-chip" title=${d}
                        >${d}</span
                      >`:I}
              </span>
              ${f?P`<span class="muted session-key-display-name">${u}</span>`:I}
            </div>
          </div>
        </openclaw-tooltip>
      </td>
      ${T?jn(e,t):I}
      <td>
        <span class=${S}>${q(e)}</span>
      </td>
      <td class="session-status-col">
        <div class="session-status-stack">
          ${dn(e)} ${Tn(e.goal)}
          ${t.statusFilter===`all`&&e.archived===!0?V({kind:`muted`,label:R(`sessionsView.archived`)}):I}
        </div>
      </td>
      <td>${r}</td>
      <td class="session-token-cell">${pn(e)}</td>
      <td class="session-actions-cell">
        <div class="session-actions">
          <button
            class="session-details-toggle"
            type="button"
            aria-expanded=${String(c)}
            aria-controls=${l}
            aria-label=${w}
            @click=${n=>{n.stopPropagation(),t.onToggleDetails(e.key)}}
          >
            ${o>0?P`<span class="settings-count session-compaction-count"
                    >${o}</span
                  >`:I}
            ${L.chevronDown}
          </button>
          <button
            class="icon-btn"
            type="button"
            title=${R(`chat.sidebar.openSessionMenu`)}
            aria-label=${R(`chat.sidebar.openSessionMenu`)}
            aria-haspopup="menu"
            aria-expanded=${String(t.sessionMenu?.key===e.key)}
            @click=${n=>{n.stopPropagation();let r=n.currentTarget,i=r.getBoundingClientRect();t.onOpenSessionMenu(e,{x:i.right,y:i.bottom+4},r)}}
          >
            ${L.moreHorizontal}
          </button>
        </div>
      </td>
    </tr>`,...c?[zn({row:e,props:t,detailsId:l,friendlyKeyLabel:v,displayName:u,showDisplayName:f,kindClass:S,updated:r,visibleCheckpointCount:o,hasCheckpoints:s})]:[]]}function zn(e){let{row:t,props:r,detailsId:i,friendlyKeyLabel:a,displayName:o,showDisplayName:s,kindClass:c,updated:l,visibleCheckpointCount:u,hasCheckpoints:d}=e,f=t.thinkingLevel??``,p=f?B(f):``,m=G(ln(t,r.result?.defaults),p),h=t.fastMode===`auto`?`auto`:t.fastMode===!0?`on`:t.fastMode===!1?`off`:``,g=G(K(Hn),h),_=t.verboseLevel??``,v=G(K(Vn,!0),_),y=t.reasoningLevel??``,b=G(K(Un),y),x=r.checkpointItemsByKey[t.key]??[],S=r.checkpointErrorByKey[t.key],C=Sn(u),w=En({row:t,updated:l,checkpointCount:u});return P`<tr id=${i} class="session-details-row">
    <td colspan=${J(r)}>
      <div class="session-details-panel">
        <div class="session-details-panel__hero">
          <div>
            <div class="session-details-panel__eyebrow">${R(`sessionsView.sessionDetails`)}</div>
            <div class="session-details-panel__title">${a??t.key}</div>
            ${s?P`<div class="muted session-details-panel__subtitle">${o}</div>`:I}
          </div>
          <div class="session-details-panel__badges">
            ${dn(t)} ${Tn(t.goal)}
            <span class=${c}>${q(t)}</span>
          </div>
        </div>

        <div class="session-details-section">
          <div class="session-details-panel__eyebrow">${R(`sessionsView.overrides`)}</div>
          <div class="session-overrides-grid">
            <label class="session-override-field">
              <span class="session-override-field__label">${R(`sessionsView.label`)}</span>
              <input
                class="settings-input"
                .value=${t.label??``}
                ?disabled=${r.loading||!!r.patchWriteDisabledReason}
                title=${r.patchWriteDisabledReason??I}
                placeholder=${R(`sessionsView.optionalPlaceholder`)}
                @change=${e=>{let i=n(e.target.value)??null;r.onPatch(t.key,{label:i})}}
              />
            </label>
            ${X({label:R(`sessionsView.thinking`),disabled:r.loading||!!r.patchAdminDisabledReason,disabledReason:r.patchAdminDisabledReason,options:m,current:p,onChange:e=>r.onPatch(t.key,{thinkingLevel:e||null})})}
            ${X({label:R(`sessionsView.fast`),disabled:r.loading||!!r.patchAdminDisabledReason,disabledReason:r.patchAdminDisabledReason,options:g,current:h,onChange:e=>r.onPatch(t.key,{fastMode:e===``?null:e===`auto`?`auto`:e===`on`})})}
            ${X({label:R(`sessionsView.verbose`),disabled:r.loading||!!r.patchAdminDisabledReason,disabledReason:r.patchAdminDisabledReason,options:v,current:_,onChange:e=>r.onPatch(t.key,{verboseLevel:e||null})})}
            ${X({label:R(`sessionsView.reasoning`),disabled:r.loading||!!r.patchAdminDisabledReason,disabledReason:r.patchAdminDisabledReason,options:b,current:y,onChange:e=>r.onPatch(t.key,{reasoningLevel:e||null})})}
          </div>
        </div>

        <div class="session-details-grid">
          ${w.map(e=>P`
              <div class="session-detail-stat">
                <div class="session-detail-stat__label">${e.label}</div>
                <openclaw-tooltip .content=${e.value}>
                  <div class="session-detail-stat__value">${e.value}</div>
                </openclaw-tooltip>
              </div>
            `)}
        </div>

        <div class="session-details-section">
          <div class="session-details-section__header">
            <div>
              <div class="session-details-panel__eyebrow">
                ${R(`sessionsView.compactionHistory`)}
              </div>
              <div class="session-details-section__title">${C}</div>
            </div>
          </div>
          ${r.checkpointLoadingKey===t.key?P`<div class="muted session-details-empty">
                  ${R(`sessionsView.loadingCheckpoints`)}
                </div>`:S?P`<div class="callout danger" role="alert">${S}</div>`:!d||x.length===0?P`<div class="muted session-details-empty">
                      ${R(`sessionsView.noCheckpoints`)}
                    </div>`:P`
                      <div class="session-checkpoint-list">
                        ${x.map(e=>P`
                            <div class="session-checkpoint-card">
                              <div class="session-checkpoint-card__header">
                                <strong>
                                  ${xn(e.reason)} ·
                                  ${N(e.createdAt)}
                                </strong>
                                <span class="muted session-checkpoint-card__delta">
                                  ${Cn(e)}
                                </span>
                              </div>
                              ${e.summary?P`<div class="session-checkpoint-card__summary">
                                      ${e.summary}
                                    </div>`:P`<div class="muted">${R(`sessionsView.noSummary`)}</div>`}
                              <div class="session-checkpoint-card__actions">
                                <button
                                  class="btn btn--sm"
                                  ?disabled=${r.checkpointBusyKey===e.checkpointId||!!r.checkpointBranchDisabledReason}
                                  title=${r.checkpointBranchDisabledReason??I}
                                  @click=${()=>r.onBranchFromCheckpoint(t.key,e.checkpointId)}
                                >
                                  ${R(`sessionsView.branchFromCheckpoint`)}
                                </button>
                                <button
                                  class="btn btn--sm"
                                  ?disabled=${r.checkpointBusyKey===e.checkpointId||!!r.checkpointRestoreDisabledReason}
                                  title=${r.checkpointRestoreDisabledReason??I}
                                  @click=${()=>r.onRestoreCheckpoint(t.key,e.checkpointId)}
                                >
                                  ${R(`sessionsView.restoreCheckpoint`)}
                                </button>
                              </div>
                            </div>
                          `)}
                      </div>
                    `}
        </div>
      </div>
    </td>
  </tr>`}var Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Z,Q;function Zn(){return(Zn=e((()=>{s(),we(),It(),Pe(),at(),Fe(),$e(),Ft(),Ne(),h(),it(),ge(),D(),qt(),xe(),xt(),ft(),be(),ct(),O(),te(),Bn=[`off`,`minimal`,`low`,`medium`,`high`],Vn=[``,`off`,`on`,`full`],Hn=[``,`auto`,`on`,`off`],Un=[``,`off`,`on`,`stream`],Wn=[10,25,50,100],Gn={queued:`sessionsView.statusQueued`,running:`sessionsView.statusRunning`,done:`sessionsView.statusDone`,failed:`sessionsView.statusFailed`,killed:`sessionsView.statusKilled`,timeout:`sessionsView.statusTimeout`},Kn={cron:L.clock,direct:L.messageSquare,group:L.users,global:L.globe,unknown:L.circle},qn=65,Jn=85,Yn=4,Xn={manual:`sessionsView.manual`,"auto-threshold":`sessionsView.autoThreshold`,"overflow-retry":`sessionsView.overflowRetry`,"timeout-retry":`sessionsView.timeoutRetry`},Z=`__new-group__`,Q={none:`sessionsView.groupByNone`,category:`sessionsView.groupByCategory`,person:`sessionsView.groupByPerson`,channel:`sessionsView.groupByChannel`,kind:`sessionsView.groupByKind`,agent:`sessionsView.groupByAgent`,date:`sessionsView.groupByDate`}})))()}var Qn,$n,$;function er(){return(er=e((()=>{o(),Le(),s(),we(),Ce(),ke(),Ee(),Ae(),Yt(),Ut(),et(),st(),Ue(),Je(),nt(),Zt(),at(),Gt(),Ne(),T(),Ve(),ie(),Be(),Tt(),ue(),kt(),St(),ye(),jt(),be(),O(),ht(),zt(),Vt(),g(),mt(),_e(),C(),yt(),en(),rn(),sn(),ae(),Zn(),f(),Qn=`https://docs.openclaw.ai/concepts/session`,$n=200,$=class extends _{constructor(...e){super(...e),this.result=null,this.loading=!1,this.error=null,this.activeMinutes=``,this.limit=`50`,this.includeGlobal=!0,this.includeUnknown=!1,this.statusFilter=`active`,this.searchQuery=``,this.transcriptSearchQuery=``,this.submittedTranscriptSearchQuery=``,this.sortColumn=`updated`,this.sortDir=`desc`,this.groupBy=an(),this.page=0,this.pageSize=25,this.selectedKeys=new Set,this.sessionMenu=null,this.sessionMenuWork=null,this.expandedSessionKey=null,this.deepLinkSessionKey=null,this.checkpointItemsByKey={},this.checkpointTaskKey=null,this.checkpointBusyKey=null,this.checkpointErrorByKey={},this.pageEpoch=0,this.pluginActionLifetime=new AbortController,this.routeDataEnabled=!0,this.sessionMutationPending=!1,this.sessionMenuTrigger=null,this.sessionMenuWorkVersion=0,this.observeAgentScope=Ze(()=>{this.resetTranscriptSearchState(this.transcriptSearchQuery),this.deepLinkSessionKey||(this.page=0,this.selectedKeys=new Set,this.routeDataEnabled=!1,this.clearSearchTimer(),this.bindSessionList()),this.requestUpdate()}),this.subscriptions=new v(this).watch(()=>this.context?.agentIdentity,(e,t)=>e.subscribe(t)).effect(()=>this.context?.agentSelection,e=>this.observeAgentScope(e)).watch(()=>this.context?.runtimeConfig,(e,t)=>e.subscribe(t)).watch(()=>this.context?.plugins,(e,t)=>e.subscribe(t)),this.gatewayLifecycle=new gt(this,{getGateway:()=>this.context?.gateway,onIdentityChange:()=>{let e=this.listBinding?.sessions.listSnapshot(this.listBinding.query).result;this.resetProviderState(),this.appliedListResult=e},invalidateRequests:()=>this.invalidatePageWork()}),this.transcriptSearchTask=new Re(this,{args:()=>{let e=this.context,t=e?.gateway.snapshot;return[t?.phase===`connected`?t.client??null:null,this.submittedTranscriptSearchQuery,e??null,e?.agentSelection.state.scopeId??null,t?z(t,`sessions.search`)===!0:!1]},task:async([e,t,n,r,i],{signal:a})=>{if(!e||!t||!n||!i)return ze;let{results:o,indexing:s=!1,truncated:c=!1}=await Rt({client:e,query:t,listSessions:n.sessions.list,listOptions:this.sessionListOptions(n,``),isCurrent:()=>!a.aborted,resolveAgentId:e=>j(e)?.agentId??this.sessionAgentId(e,n)});return{results:o,indexing:s,truncated:c}}}),this.checkpointTask=new Re(this,{autoRun:!1,args:()=>[null,``],task:async([e,t])=>!e||!t?ze:{sessionKey:t,checkpoints:await e.sessions.listCheckpoints(t,{agentId:this.sessionAgentId(t,e.context)})},onComplete:({sessionKey:e,checkpoints:t})=>{this.checkpointItemsByKey={...this.checkpointItemsByKey,[e]:t}},onError:e=>{let t=this.checkpointTaskKey;t&&(this.checkpointErrorByKey={...this.checkpointErrorByKey,[t]:M(e)})}}),this.dialogLifecycle=null}willUpdate(e){let t=this.context?.sessions;t&&this.listBinding&&this.listBinding.sessions!==t&&(this.unsubscribeList?.(),this.unsubscribeList=void 0,this.listBinding=void 0,this.invalidatePageWork(),this.resetProviderState()),(e.has(`routeData`)||e.has(`context`))&&this.applyRouteData(),this.bindSessionList()}disconnectedCallback(){this.unsubscribeList?.(),this.unsubscribeList=void 0,this.listBinding=void 0,this.subscriptions.clear(),this.invalidatePageWork(),this.dialogLifecycle?.abort(),super.disconnectedCallback()}invalidatePageWork(){this.pluginActionLifetime.abort(),this.pluginActionLifetime=new AbortController,this.pageEpoch+=1,this.clearSearchTimer(),this.listRequest=void 0,this.resetTranscriptSearchState(this.transcriptSearchQuery),this.resetCheckpointTask(),this.loading=!1,this.checkpointBusyKey=null,this.sessionMutationPending=!1,this.closeSessionMenu()}resetProviderState(){this.result=null,this.error=null,this.loading=!1,this.resetTranscriptSearchState(``),this.selectedKeys=new Set,this.expandedSessionKey=null,this.deepLinkSessionKey=null,this.checkpointItemsByKey={},this.checkpointTaskKey=null,this.checkpointBusyKey=null,this.checkpointErrorByKey={},this.appliedListResult=void 0}captureRequestScope(){let e=this.context;if(!this.isConnected||!e)return null;let t=e.gateway,n=this.gatewayLifecycle.gateway===t?this.gatewayLifecycle.client:null;return!this.gatewayLifecycle.connected||!n?null:{epoch:this.pageEpoch,context:e,gateway:t,sessions:e.sessions,client:n}}isRequestScopeCurrent(e){let t=this.context,n=t?.gateway;return this.isConnected&&this.pageEpoch===e.epoch&&t===e.context&&n===e.gateway&&t.sessions===e.sessions&&n.snapshot.phase===`connected`&&n.snapshot.client===e.client}mutationDisabledReason(e){let t=Se(this.context?.gateway.snapshot,e);return t.allowed?void 0:t.reason}requireMutationAccess(e,t){let n=Se(e.gateway.snapshot,t);return n.allowed?!0:(this.error=n.reason,!1)}selectedDeleteDisabledReason(){let e=new Map(this.result?.sessions.map(e=>[e.key,e])??[]);for(let t of this.selectedKeys){let n=e.get(t),r=this.mutationDisabledReason({method:`sessions.delete`,params:{key:t,...n?.archived===!0?{archivedOnly:!0}:{}}});if(r)return r}}applyRouteData(){let e=this.routeData,t=this.context;!e||!t||(e!==this.appliedRouteData&&(this.appliedRouteData=e,this.routeDataEnabled=!0),this.routeDataEnabled&&(this.statusFilter=e.statusFilter,e.expandedSessionKey?(this.activeMinutes=``,this.limit=`50`,this.includeGlobal=!0,this.includeUnknown=!0,this.searchQuery=``,this.page=0,this.selectedKeys=new Set):(this.activeMinutes=``,this.limit=`50`,this.includeGlobal=!0,this.includeUnknown=!1),this.expandedSessionKey=e.expandedSessionKey,this.deepLinkSessionKey=e.expandedSessionKey,e.expandedSessionKey&&this.loadCheckpoint(e.expandedSessionKey)))}sessionAgentId(e,t=this.context){if(!t)return;let{agentId:n}=ne({assistantAgentId:t.agentSelection.state.selectedId,hello:t.gateway.snapshot.hello},e);return n}sessionPathAgentId(e,t){return this.sessionAgentId(e,t)??me(t)}sessionListOptions(e,t=this.searchQuery){return oe(e,{activeMinutes:c(this.activeMinutes),limit:c(this.limit)??50,includeGlobal:this.includeGlobal,includeUnknown:this.includeUnknown,statusFilter:this.statusFilter,deepLinkSessionKey:this.deepLinkSessionKey,search:t})}bindSessionList(e=!0){let t=this.context;if(!t||!this.isConnected)return;let n=t.sessions,r=this.sessionListOptions(t),i=JSON.stringify(r),a=this.listBinding,o=JSON.stringify(this.sessionListOptions(t,``));(a?.sessions!==n||a.key!==i)&&(a?.sessions===n&&n.listSnapshot(a.query).loading&&this.loadSessionList(a),this.unsubscribeList?.(),this.unsubscribeList=void 0,(a?.sessions!==n||a.transcriptKey!==o)&&this.resetTranscriptSearchState(this.transcriptSearchQuery),this.result=null,this.error=null,this.selectedKeys=new Set,this.page=0,this.listBinding={sessions:n,query:r,key:i,transcriptKey:o},this.appliedListResult=void 0);let s=this.listBinding;if(this.unsubscribeList||(this.loading=t.gateway.snapshot.phase===`connected`,!this.captureRequestScope()||this.searchTimer!==void 0||this.listRequest))return s;let c=e=>{this.applyListSnapshot(s,e)};this.unsubscribeList=n.subscribeList(r,c);let l=n.listSnapshot(r);return c(l),e&&(!l.result||l.loading)&&this.loadSessionList(s),s}applyListSnapshot(e,t){if(this.listBinding!==e||this.context?.sessions!==e.sessions)return;this.loading=t.loading,this.error=t.error;let n=t.result;if(!n||n===this.appliedListResult)return;let r=this.result;this.appliedListResult=n,this.result=E(n,{archivedFilter:this.statusFilter}),this.ensureAgentIdentities(this.result);let i=this.reconcileCheckpointCache(r,this.result);i&&this.loadCheckpoint(i)}async refreshSessionList(e=this.captureRequestScope()){if(!e)return;this.routeDataEnabled=!1,this.clearSearchTimer();let t=this.bindSessionList(!1);!t||t.sessions!==e.sessions||!this.isRequestScopeCurrent(e)||(await this.loadSessionList(t,{force:!0}),this.isRequestScopeCurrent(e)&&this.listBinding===t&&this.applyListSnapshot(t,t.sessions.listSnapshot(t.query)))}loadSessionList(e,t={}){if(this.listRequest)return t.force&&this.unsubscribeList&&e.sessions.refreshList({...e.query,...t}),this.listRequest;if(!this.captureRequestScope())return Promise.resolve();let n,r=new Promise(e=>{n=e}).finally(()=>{this.listRequest===r&&(this.listRequest=void 0,this.bindSessionList())});return this.listRequest=r,n(e.sessions.refreshList({...e.query,...t})),r}clearSearchTimer(){clearTimeout(this.searchTimer),this.searchTimer=void 0}adoptCurrentListSnapshot(){let e=this.listBinding;e&&this.applyListSnapshot(e,e.sessions.listSnapshot(e.query))}resetTranscriptSearchState(e){this.transcriptSearchQuery=e,this.submittedTranscriptSearchQuery=``,this.transcriptSearchTask.run()}updateTranscriptSearchQuery(e){e!==this.transcriptSearchQuery&&this.resetTranscriptSearchState(e)}async runTranscriptSearch(){let e=this.transcriptSearchQuery.trim();if(!e){this.resetTranscriptSearchState(``);return}let t=this.captureRequestScope();!t||z(t.gateway.snapshot,`sessions.search`)!==!0||(this.transcriptSearchQuery=e,this.submittedTranscriptSearchQuery=e,await this.transcriptSearchTask.run())}ensureAgentIdentities(e){let t=this.context;if(!t||!e)return;let n=Qt(e).filter(e=>!t.agentIdentity.get(e));n.length!==0&&t.agentIdentity.ensure(n)}reconcileCheckpointCache(e,t){let n=new Map((t?.sessions??[]).map(e=>[e.key,e])),r=new Map((e?.sessions??[]).map(e=>[e.key,e])),i={...this.checkpointItemsByKey},a={...this.checkpointErrorByKey},o=null;for(let e of Object.keys(i)){let t=n.get(e),s=r.get(e);(!t||!s||s.compactionCheckpointCount!==t.compactionCheckpointCount||s.latestCompactionCheckpoint?.checkpointId!==t.latestCompactionCheckpoint?.checkpointId)&&(delete i[e],delete a[e],this.expandedSessionKey===e&&(o=e))}return this.checkpointItemsByKey=i,this.checkpointErrorByKey=a,o}updateFilters(e){this.activeMinutes=e.activeMinutes,this.limit=e.limit,this.includeGlobal=e.includeGlobal,this.includeUnknown=e.includeUnknown,this.page=0,this.selectedKeys=new Set,this.deepLinkSessionKey=null,this.refreshSessionList()}updateStatusFilter(e){let t=this.context;e===this.statusFilter||!t||(this.statusFilter=e,this.clearSearchTimer(),this.page=0,this.selectedKeys=new Set,this.deepLinkSessionKey=null,this.loading=!0,this.error=null,t.navigate(`sessions`,e===`active`?void 0:{search:`?status=${e}`}))}async deleteSelected(){let e=[...this.selectedKeys];if(e.length===0||this.loading||this.sessionMutationPending)return;let t=this.captureRequestScope();if(!t)return;let n=new Map(this.result?.sessions.map(e=>[e.key,e])??[]),r=e.map(e=>n.get(e)??{key:e}),i=R(e.length===1?`sessionsView.deleteSelectedConfirmOne`:`sessionsView.deleteSelectedConfirm`,{count:String(e.length)});!await H({message:i,confirmLabel:R(`common.delete`),danger:!0})||!this.isRequestScopeCurrent(t)||await this.deleteSessions(r)}async deleteSessions(e,n={}){if(e.length===0||this.loading||this.sessionMutationPending)return;let r=this.captureRequestScope();if(!r)return;let i=e.map(e=>({key:e.key,agentId:this.sessionAgentId(e.key,r.context),...n,...e.sessionId?{expectedSessionId:e.sessionId}:{},...e.archived===!0?{archivedOnly:!0}:{}}));for(let e of i)if(!this.requireMutationAccess(r,{method:`sessions.delete`,params:e}))return;this.sessionMutationPending=!0;let a=null;try{let e=await r.sessions.deleteMany(i);if(!this.isRequestScopeCurrent(r))return;if(e.preservedWorktrees.length>0&&window.alert(Bt(e.preservedWorktrees)),e.deleted.length>0){let n=new Set(e.deleted),i=new Set(this.selectedKeys);for(let t of e.deleted)i.delete(t);this.selectedKeys=i,this.expandedSessionKey&&n.has(this.expandedSessionKey)&&(this.expandedSessionKey=null),this.deepLinkSessionKey&&n.has(this.deepLinkSessionKey)&&(this.deepLinkSessionKey=null);let a=e.deleted.find(e=>re(e,r.gateway.snapshot.sessionKey));if(a){let e=j(a)?.agentId??r.context.agentSelection.state.selectedId??`main`;De({selection:r.context.agentSelection,gateway:r.gateway,agentId:e,sessionKey:t({agentId:e,mainKey:A({agentsList:r.context.agents.state.agentsList,hello:r.gateway.snapshot.hello})})})}}await this.refreshSessionList(r),e.errors.length>0&&(a=S(e.errors.join(`; `)))}catch(e){this.isRequestScopeCurrent(r)&&(a=M(e))}finally{this.isRequestScopeCurrent(r)&&(this.sessionMutationPending=!1,this.adoptCurrentListSnapshot(),a&&(this.error=a))}}async deleteAllArchived(){let e=this.captureRequestScope();if(!e||this.loading||this.sessionMutationPending)return;let t;try{let{search:n,agentId:r,...i}=this.sessionListOptions(e.context),a=e.context.agentSelection.state.scopeId?.trim(),o={...i,...a?{agentId:a}:{}},s=await Ct({list:t=>e.sessions.list({...o,limit:1e3,offset:t}),isCurrent:()=>this.isRequestScopeCurrent(e),missingResultError:e.sessions.state.error??`archived session enumeration returned no result`,stalledPaginationError:`archived session enumeration did not advance`,incompletePaginationError:`archived session enumeration was incomplete`});if(!s)return;t=s}catch(t){this.isRequestScopeCurrent(e)&&(this.error=M(t));return}let n=t.filter(e=>e.archived===!0);n.length!==0&&(!await H({message:R(`sessionsView.deleteAllArchivedConfirm`,{count:String(n.length)}),confirmLabel:R(`common.delete`),danger:!0})||!this.isRequestScopeCurrent(e)||await this.deleteSessions(n,{deleteTranscript:!0}))}async deleteSessionFromMenu(e){let t=n(e.label)??e.key,r=this.captureRequestScope();!r||!await H({message:R(`sessionsView.deleteSessionConfirm`,{session:t}),confirmLabel:R(`common.delete`),danger:!0})||!this.isRequestScopeCurrent(r)||await this.deleteSessions([e])}async stopCloudWorker(e){let t=n(e.label)??e.key,r=rt(e.placement);if(!r||r.blocksActiveRun&&e.hasActiveRun===!0)return;let i=this.captureRequestScope();if(!i||!await H({message:R(`sessionsView.stopCloudWorkerConfirm`,{session:t}),confirmLabel:R(`sessionsView.stopCloudWorkerConfirmAction`),danger:!0})||!this.isRequestScopeCurrent(i)||!this.requireMutationAccess(i,r))return;this.sessionMutationPending=!0;let a=null;try{let t=j(e.key)?.agentId;await Ht(i.client,{key:e.key,...t?{agentId:t}:{}},i.context.placementStartup),this.isRequestScopeCurrent(i)&&await this.refreshSessionList(i)}catch(e){this.isRequestScopeCurrent(i)&&(a=M(e))}finally{this.isRequestScopeCurrent(i)&&(this.sessionMutationPending=!1,this.adoptCurrentListSnapshot(),a&&(this.error=a))}}knownCategories(){return tn(this.result,this.context?.sessions.state.groups??[])}setGroupBy(e){this.groupBy=e,this.page=0,on(e)}async rememberCustomGroup(e,t=this.captureRequestScope()){return t?this.requireMutationAccess(t,{method:`sessions.groups.put`,requiredScope:`operator.write`})?nn({name:e,knownCategories:this.knownCategories(),sessions:t.sessions,isCurrent:()=>this.isRequestScopeCurrent(t),onError:e=>{this.error=e}}):`failed`:`stale`}assignCategory(e,t){let n=this.result?.sessions.find(t=>t.key===e);n&&(n.category?.trim()||null)!==t&&(t&&this.rememberCustomGroup(t),this.patchSession(e,{category:t}))}async withDialogLifecycle(e){let t=this.dialogLifecycle;if(t)return e(t.signal);let n=new AbortController;this.dialogLifecycle=n;try{return await e(n.signal)}finally{this.dialogLifecycle===n&&(this.dialogLifecycle=null)}}async loadInputDialog(){try{return(await d(async()=>{let{showInputDialog:e}=await import(`./input-dialog-CiffR3Gs.js`);return{showInputDialog:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]),import.meta.url)).showInputDialog}catch(e){return this.error=M(e),null}}async requestNewCategory(e){let t=this.result?.sessions.find(t=>t.key===e);if(e&&!t?.sessionId){this.error=R(`common.refresh`);return}await this.withDialogLifecycle(async e=>{await(await this.loadInputDialog())?.({signal:e,title:R(`sessionsView.newGroupTitle`),label:R(`sessionsView.newGroupPrompt`),submitLabel:R(`sessionsView.newGroupCreate`),requireValue:!0,submit:e=>this.writeNewCategory(e,t)})})}async writeNewCategory(e,t){this.error=null;let n=this.captureRequestScope();if(!n)return R(`sessionsView.newGroupFailed`);let r=await this.rememberCustomGroup(e,n);if(r!==`completed`)return r===`failed`?this.error??R(`sessionsView.newGroupFailed`):R(`sessionsView.newGroupStale`);if(!t)return null;let i=await this.patchSession(t.key,{category:e},n,t.sessionId);return i===`failed`?this.error??R(`sessionsView.newGroupFailed`):i===`stale`?R(`sessionsView.newGroupStale`):null}async renameSession(e){let t=this.captureRequestScope();if(!t){this.error=R(`sessionsView.actionRequiresConnection`);return}let n=Ot(e),r=this.pluginActionLifetime.signal,i=await this.withDialogLifecycle(async e=>await(await this.loadInputDialog())?.({signal:AbortSignal.any([e,r]),title:R(`sessionsView.renameSessionPrompt`),defaultValue:n})??null);if(i===null||!this.isRequestScopeCurrent(t))return;let a=wt(i,n,e.label);a&&await this.patchSession(e.key,a,t,e.sessionId)}async patchSession(e,t,n=this.captureRequestScope(),r){if(!n)return this.error=R(`sessionsView.actionRequiresConnection`),`failed`;if(typeof t.archived==`boolean`&&!r?.trim())return this.error=`Session lifecycle action requires a durable session identity.`,`failed`;let i=this.sessionAgentId(e,n.context);if(!this.requireMutationAccess(n,{method:`sessions.patch`,params:{key:e,...t,...i?{agentId:i}:{}}}))return`failed`;try{let a=await n.sessions.patch(e,t,{agentId:i,...r?{expectedSessionId:r}:{}});if(!this.isRequestScopeCurrent(n))return`stale`;if(!a)return this.error=n.sessions.state.error,`failed`;if(await this.refreshSessionList(n),!this.isRequestScopeCurrent(n))return`stale`;let o=new Set(this.selectedKeys);return o.delete(e),this.selectedKeys=o,`completed`}catch(e){return this.isRequestScopeCurrent(n)?(this.error=M(e),`failed`):`stale`}}async archiveSessionWithUndo(e){let t=this.captureRequestScope();if(!t||await this.patchSession(e.key,{archived:!0},t,e.sessionId)!==`completed`||!this.isRequestScopeCurrent(t))return;let n=this.sessionAgentId(e.key,t.context);m({message:R(`sessionsView.sessionArchived`),actionLabel:R(`common.undo`),onAction:()=>{t.sessions.patch(e.key,{archived:!1,...e.pinned===!0?{pinned:!0}:{}},{agentId:n,expectedSessionId:e.sessionId})}})}async forkSession(e,t=!1){let n=this.captureRequestScope();if(!n)return;let r=this.sessionAgentId(e,n.context),i={parentSessionKey:e,fork:!0,...t?{forkFrom:`last-completed`}:{},...r?{agentId:r}:{}};if(this.requireMutationAccess(n,{method:`sessions.create`,params:i}))try{let e=await n.sessions.create(i);if(!this.isRequestScopeCurrent(n))return;e?n.context.navigate(`chat`,{...k({context:n.context,face:`chat`,sessionKey:e,agentId:r??this.sessionPathAgentId(e,n.context)}).options,hash:``}):n.sessions.state.error&&(this.error=n.sessions.state.error)}catch(e){this.isRequestScopeCurrent(n)&&(this.error=M(e))}}async toggleSessionDetails(e){if(!this.context)return;let t=this.deepLinkSessionKey!==null;if(this.deepLinkSessionKey=null,t&&this.refreshSessionList(),this.expandedSessionKey===e){this.resetCheckpointTask(),this.expandedSessionKey=null;return}this.expandedSessionKey=e;let n=this.result?.sessions.find(t=>t.key===e);if(!((n?.compactionCheckpointCount??0)>0||n?.latestCompactionCheckpoint)){this.checkpointItemsByKey[e]||(this.checkpointItemsByKey={...this.checkpointItemsByKey,[e]:[]});return}this.checkpointItemsByKey[e]||await this.loadCheckpoint(e)}async loadCheckpoint(e){let t=this.captureRequestScope();if(!t){this.checkpointErrorByKey={...this.checkpointErrorByKey,[e]:R(`sessionsView.actionRequiresConnection`)};return}this.checkpointTaskKey=e,this.checkpointErrorByKey={...this.checkpointErrorByKey,[e]:``},await this.checkpointTask.run([t,e])}resetCheckpointTask(){this.checkpointTaskKey=null,this.checkpointTask.run([null,``])}get checkpointLoadingKey(){return this.checkpointTask.status===Ie.PENDING?this.checkpointTaskKey:null}async branchCheckpoint(e,t){let n=this.captureRequestScope();if(!(!n||!await H({message:R(`sessionsView.branchCheckpointConfirm`),confirmLabel:R(`common.create`)})||!this.isRequestScopeCurrent(n))&&this.requireMutationAccess(n,{method:`sessions.compaction.branch`,requiredScope:`operator.write`})){this.checkpointBusyKey=t;try{let r=await n.sessions.branchCheckpoint(e,t,{agentId:this.sessionAgentId(e,n.context)});this.isRequestScopeCurrent(n)&&n.context.navigate(`chat`,{...k({context:n.context,face:`chat`,sessionKey:r.key,agentId:this.sessionPathAgentId(r.key,n.context)}).options,hash:``})}catch(e){this.isRequestScopeCurrent(n)&&(this.error=M(e))}finally{this.isRequestScopeCurrent(n)&&this.checkpointBusyKey===t&&(this.checkpointBusyKey=null)}}}async restoreCheckpoint(e,t){let n=this.captureRequestScope();if(!(!n||!await H({message:R(`sessionsView.restoreCheckpointConfirm`),confirmLabel:R(`common.restore`),danger:!0})||!this.isRequestScopeCurrent(n))&&this.requireMutationAccess(n,{method:`sessions.compaction.restore`,requiredScope:`operator.admin`})){this.checkpointBusyKey=t;try{await n.sessions.restoreCheckpoint(e,t,{agentId:this.sessionAgentId(e,n.context)})}catch(e){this.isRequestScopeCurrent(n)&&(this.error=M(e))}finally{this.isRequestScopeCurrent(n)&&this.checkpointBusyKey===t&&(this.checkpointBusyKey=null)}}}openSessionMenu(e,t,n){if(this.sessionMenu?.key===e.key&&this.sessionMenu.sessionId===e.sessionId&&n){this.closeSessionMenu();return}this.sessionMenu={key:e.key,sessionId:e.sessionId,...t},this.sessionMenuTrigger=n,this.loadSessionMenuWork(e)}closeSessionMenu(){this.context&&bt(this.context.gateway).unwatch(this),this.sessionMenu=null,this.sessionMenuTrigger=null,this.sessionMenuWorkVersion+=1,this.sessionMenuWork=null}loadSessionMenuWork(e){let t=++this.sessionMenuWorkVersion;if(!e.worktree){this.sessionMenuWork=null;return}this.sessionMenuWork={loading:!0,pullRequestUrl:null,worktreePath:null};let n=this.captureRequestScope();if(!n){this.sessionMenuWork={loading:!1,pullRequestUrl:null,worktreePath:null};return}let r=bt(n.context.gateway),i=fe(e.key,this.sessionAgentId(e.key,n.context));qe({client:n.client,loadPullRequests:z(n.context.gateway.snapshot,`controlUi.sessionPullRequests.subscribe`)===!0?()=>r.load(this,i):void 0,worktreeId:e.worktree.id,execNode:e.execNode}).then(e=>{t===this.sessionMenuWorkVersion&&(this.sessionMenuWork={loading:!1,...e})})}renderSessionMenu(){let e=this.sessionMenu,t=this.context,r=e?this.result?.sessions.find(t=>t.key===e.key&&t.sessionId===e.sessionId):null;if(!e||!t||!r)return I;let i=t.gateway.snapshot,a=A({agentsList:t.agents.state.agentsList,hello:i.hello}),o=y(r,a),s=w([r],a),c=rt(r.placement),l=!!(c&&(c.method!==`sessions.reclaim`||r.hasActiveRun!==!0)&&z(i,c.method)===!0),u=se(r);return P`
      <openclaw-session-menu
        .session=${{label:n(r.label)??r.key,sessionId:n(r.sessionId)??null,pinned:r.pinned===!0,pinnable:u,unread:r.unread===!0,archived:r.archived===!0,category:n(r.category)??null,icon:n(r.icon)??null,color:n(r.color)??null,categoryClearReturnsToGroups:!1}}
        .anchor=${e}
        .trigger=${this.sessionMenuTrigger}
        .disabled=${this.loading}
        .navigationAllowed=${!0}
        .copyMarkdownAllowed=${pt(i)}
        .splitAllowed=${!1}
        .actionDisabledReasons=${Ge({snapshot:i,session:{...r,pinnable:u},cloudWorkerStopAction:c})}
        .forkDisabled=${r.modelSelectionLocked===!0}
        .forkFromLastCompleted=${r.hasActiveRun===!0}
        .archiveAllowed=${o}
        .deleteAllowed=${s}
        .cloudWorkerStopAllowed=${l}
        .groups=${this.knownCategories()}
        .work=${this.sessionMenuWork}
        .pluginActions=${Dt(t.plugins,r)}
        .onClose=${()=>this.closeSessionMenu()}
        .onAction=${n=>{switch(n.kind){case`open-pr`:vt(n.url);break;case`open-in`:tt(n.editor,n.path);break;case`copy-session-id`:case`copy-session-link`:case`copy-session-preview-link`:case`copy-markdown`:case`open-new-tab`:case`open-new-window`:case`split-right`:case`split-below`:Pt(n.kind,{context:t,session:r,agentId:r.agentId,isCurrent:()=>this.isConnected&&this.context===t});break;case`toggle-pin`:this.patchSession(r.key,{pinned:r.pinned!==!0});break;case`toggle-unread`:this.patchSession(r.key,{unread:r.unread!==!0});break;case`rename`:this.renameSession(r);break;case`set-color`:this.patchSession(r.key,{color:n.color});break;case`set-icon`:this.patchSession(r.key,{icon:n.icon});break;case`reset-appearance`:this.patchSession(r.key,{icon:null,color:null});break;case`fork`:this.forkSession(r.key,r.hasActiveRun===!0);break;case`plugin`:this.runPluginAction(n.id,e);break;case`move-to-group`:this.assignCategory(r.key,n.category);break;case`new-group`:this.requestNewCategory(r.key);break;case`toggle-archived`:r.archived===!0?this.patchSession(r.key,{archived:!1},void 0,r.sessionId):this.archiveSessionWithUndo(r);break;case`assign-owner`:this.context?.sessions.assignOwner(r.key,n.owner);break;case`stop-cloud-worker`:this.stopCloudWorker(r);break;case`delete`:this.deleteSessionFromMenu(r)}}}
      ></openclaw-session-menu>
    `}render(){let e=this.context,t=(this.result?.owners?.length??0)>1;return e?P`
      ${Xt({active:`sessions`,title:Me(`sessions`),subtitle:P`${Oe(`sessions`)} ${He(Qn)}`,actions:Jt({agents:e.agents.state.agentsList?.agents??[],selection:e.agentSelection}),onSelect:t=>{t!==`sessions`&&e.navigate(t)}})}
      ${Wt(Pn({loading:this.loading,result:this.result,error:this.error,activeMinutes:this.activeMinutes,limit:this.limit,includeGlobal:this.includeGlobal,includeUnknown:this.includeUnknown,statusFilter:this.statusFilter,basePath:e.basePath,agentId:me(e),mainKey:A({agentsList:e.agents.state.agentsList,hello:e.gateway.snapshot.hello}),searchQuery:this.searchQuery,transcriptSearchAvailable:z(e.gateway.snapshot,`sessions.search`)===!0,transcriptSearchQuery:this.transcriptSearchQuery,transcriptSearch:this.transcriptSearchTask.render({initial:()=>({status:`idle`}),pending:()=>({status:`loading`}),complete:e=>({status:`results`,...e}),error:e=>({status:`error`,message:M(e)})}),agentIdentityById:$t(this.result,t=>e.agentIdentity.get(t)??void 0),sortColumn:this.sortColumn,sortDir:this.sortDir,groupBy:t||this.groupBy!==`person`?this.groupBy:`none`,personGroupingAvailable:t,knownCategories:this.knownCategories(),page:this.page,pageSize:this.pageSize,selectedKeys:this.selectedKeys,sessionMenu:this.sessionMenu,expandedSessionKey:this.expandedSessionKey,checkpointItemsByKey:this.checkpointItemsByKey,checkpointLoadingKey:this.checkpointLoadingKey,checkpointBusyKey:this.checkpointBusyKey,checkpointErrorByKey:this.checkpointErrorByKey,patchWriteDisabledReason:this.mutationDisabledReason({method:`sessions.patch`,params:{key:``,label:null}}),patchAdminDisabledReason:this.mutationDisabledReason({method:`sessions.patch`,params:{key:``,thinkingLevel:null}}),groupWriteDisabledReason:this.mutationDisabledReason({method:`sessions.groups.put`,requiredScope:`operator.write`}),deleteArchivedDisabledReason:this.mutationDisabledReason({method:`sessions.delete`,params:{key:``,archivedOnly:!0,deleteTranscript:!0}}),checkpointBranchDisabledReason:this.mutationDisabledReason({method:`sessions.compaction.branch`,requiredScope:`operator.write`}),checkpointRestoreDisabledReason:this.mutationDisabledReason({method:`sessions.compaction.restore`,requiredScope:`operator.admin`}),deleteSelectedDisabledReason:this.selectedDeleteDisabledReason(),onFiltersChange:e=>this.updateFilters(e),onClearFilters:()=>{this.activeMinutes=``,this.limit=`50`,this.includeGlobal=!0,this.includeUnknown=!1,this.searchQuery=``,this.page=0,this.selectedKeys=new Set,this.deepLinkSessionKey=null,this.refreshSessionList()},onSearchChange:e=>{this.routeDataEnabled=!1,this.deepLinkSessionKey=null,this.searchQuery=e,this.page=0,this.selectedKeys=new Set,this.clearSearchTimer(),this.captureRequestScope()&&(this.searchTimer=setTimeout(()=>{this.searchTimer=void 0,this.bindSessionList()},$n)),this.bindSessionList()},onTranscriptSearchChange:e=>this.updateTranscriptSearchQuery(e),onTranscriptSearch:()=>void this.runTranscriptSearch(),onClearTranscriptSearch:()=>this.resetTranscriptSearchState(``),onSortChange:(e,t)=>{this.sortColumn=e,this.sortDir=t,this.page=0},onGroupByChange:e=>this.setGroupBy(e),onAssignCategory:(e,t)=>this.assignCategory(e,t),onRequestNewCategory:e=>void this.requestNewCategory(e),onLoadMore:()=>{let e=this.listBinding,t=this.result?.nextOffset;e&&this.result?.hasMore&&t!=null&&!this.loading&&this.loadSessionList(e,{offset:t,append:!0})},onPageChange:e=>{this.page=e},onPageSizeChange:e=>{this.pageSize=e,this.page=0},onRefresh:()=>void this.refreshSessionList(),onStatusFilterChange:e=>this.updateStatusFilter(e),onDeleteAllArchived:()=>void this.deleteAllArchived(),onPatch:(e,t)=>void this.patchSession(e,t),onToggleSelect:e=>{let t=new Set(this.selectedKeys);t.has(e)?t.delete(e):t.add(e),this.selectedKeys=t},onSelectPage:e=>{this.selectedKeys=new Set([...this.selectedKeys,...e])},onDeselectPage:e=>{let t=new Set(this.selectedKeys);for(let n of e)t.delete(n);this.selectedKeys=t},onDeselectAll:()=>{this.selectedKeys=new Set},onDeleteSelected:()=>void this.deleteSelected(),onNavigateToChat:t=>{let n=pe(e,t);e.navigate(n,{...k({context:e,face:n,sessionKey:t,agentId:this.sessionPathAgentId(t,e),preferenceDerivedFace:!0}).options,hash:``})},onOpenSessionMenu:(e,t,n)=>this.openSessionMenu(e,t,n),onToggleDetails:e=>void this.toggleSessionDetails(e),onBranchFromCheckpoint:(e,t)=>void this.branchCheckpoint(e,t),onRestoreCheckpoint:(e,t)=>void this.restoreCheckpoint(e,t)}),{id:`sessions-hub-panel`})}
      ${this.renderSessionMenu()}
    `:P``}async runPluginAction(e,t){let n=this.captureRequestScope();if(n)try{await At({runtime:n.context.plugins,id:e,placement:`session`,sessionKey:t.key,session:this.result?.sessions.find(e=>e.key===t.key&&e.sessionId===t.sessionId),signal:this.pluginActionLifetime.signal})}catch(e){this.isRequestScopeCurrent(n)&&(this.error=M(e))}}},r([i({context:je,subscribe:!0})],$.prototype,`context`,void 0),r([Te({attribute:!1})],$.prototype,`routeData`,void 0),r([F()],$.prototype,`result`,void 0),r([F()],$.prototype,`loading`,void 0),r([F()],$.prototype,`error`,void 0),r([F()],$.prototype,`activeMinutes`,void 0),r([F()],$.prototype,`limit`,void 0),r([F()],$.prototype,`includeGlobal`,void 0),r([F()],$.prototype,`includeUnknown`,void 0),r([F()],$.prototype,`statusFilter`,void 0),r([F()],$.prototype,`searchQuery`,void 0),r([F()],$.prototype,`transcriptSearchQuery`,void 0),r([F()],$.prototype,`submittedTranscriptSearchQuery`,void 0),r([F()],$.prototype,`sortColumn`,void 0),r([F()],$.prototype,`sortDir`,void 0),r([F()],$.prototype,`groupBy`,void 0),r([F()],$.prototype,`page`,void 0),r([F()],$.prototype,`pageSize`,void 0),r([F()],$.prototype,`selectedKeys`,void 0),r([F()],$.prototype,`sessionMenu`,void 0),r([F()],$.prototype,`sessionMenuWork`,void 0),r([F()],$.prototype,`expandedSessionKey`,void 0),r([F()],$.prototype,`checkpointItemsByKey`,void 0),r([F()],$.prototype,`checkpointTaskKey`,void 0),r([F()],$.prototype,`checkpointBusyKey`,void 0),r([F()],$.prototype,`checkpointErrorByKey`,void 0),customElements.get(`openclaw-sessions-page`)||customElements.define(`openclaw-sessions-page`,$)})))()}er();
//# sourceMappingURL=sessions-page-BYUjLzhT.js.map