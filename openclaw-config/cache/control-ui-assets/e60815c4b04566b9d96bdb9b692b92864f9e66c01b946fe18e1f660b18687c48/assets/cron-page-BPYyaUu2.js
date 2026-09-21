import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,L as n,R as r,_a as i,ca as a,fa as o,ga as s,pa as c}from"./control-ui-foundation-DMb6IeIq.js";import{A as l,Bs as u,Ds as d,Gc as f,Gn as p,Gt as m,Jo as h,Kn as ee,On as te,Os as ne,Qt as re,Vs as ie,Yo as g,Zt as ae,aa as oe,en as _,na as se,on as ce,qc as le,qo as ue,ta as de,tn as v}from"./control-ui-core-DzidtL-P.js";import{$ as fe,K as y,L as pe,X as b,at as x,m as me,p as he,q as S,r as ge,st as _e,t as ve,z as C}from"./lit-runtime-vxhGQLC6.js";import{Rn as ye,Tn as be,cn as xe,h as Se,m as Ce,sn as we,zn as Te}from"./control-ui-core-CaKBexnk.js";import{C as Ee,S as De}from"./control-ui-boot-shared-DW2inEkr.js";import{Bt as w,Ft as Oe,Gt as T,It as ke,Nt as Ae,Pt as E,Ut as je}from"./control-ui-core-uEI6aN5p.js";import{Ai as Me,Bi as Ne,Bt as Pe,Fi as Fe,Ft as Ie,Gi as Le,Hi as Re,Ii as ze,Ji as Be,Ki as Ve,Li as He,Lt as D,Mi as Ue,Ni as We,Nn as Ge,Nt as Ke,Oi as O,Pi as qe,Pn as Je,Pt as Ye,Qn as Xe,Ri as k,Rt as Ze,Ss as Qe,Ui as $e,Vi as et,Vt as tt,Wi as nt,Xi as A,Yi as rt,Zi as it,co as at,ea as ot,er as st,ji as ct,ki as lt,qi as ut,ro as dt,ta as ft,to as pt,wt as j,zi as M}from"./control-ui-boot-shared-Cyt1Zyts.js";import{Nt as mt,Pt as ht}from"./control-ui-boot-chat-pu3gR1ly.js";import{Qs as gt,Zs as _t,oi as vt}from"./control-ui-boot-shared-CH-OC11d.js";import{_ as yt}from"./control-ui-boot-new-DeGMjctK.js";import{n as bt,t as xt}from"./channel-picker-3xBUJFfK.js";import{n as St,t as Ct}from"./select-picker-DnWtx1hT.js";import{n as wt,t as Tt}from"./hub-tabs-DuEhaWau.js";import{n as Et,t as Dt}from"./settings-workspace-IBRfeTG9.js";import{n as Ot,t as kt}from"./model-picker-i-vL0MMG.js";import{n as At,t as jt}from"./cron-jobs-pagination-jMZJvr0B.js";import{n as Mt,s as Nt}from"./presenter-Bco2R70L.js";import{n as Pt,t as Ft}from"./agent-scope-control-CqnA-t3U.js";function It(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{return``}}function Lt(){try{return Intl.supportedValuesOf?.(`timeZone`)??[]}catch{return[]}}function Rt(e){let t=new Set;return e.map(e=>e.trim()).filter(e=>!e||t.has(e)?!1:(t.add(e),!0))}function zt(e,t=It(),n=Lt()){return Rt([t,`UTC`,...e.map(e=>e.schedule.kind===`cron`&&typeof e.schedule.tz==`string`?e.schedule.tz:``),...s(n.map(e=>e.trim()).filter(Boolean))])}function Bt(){return(Bt=e((()=>{a()})))()}function Vt(e){let t=u(e.runtimeConfig),n=e.cron.cronForm.deliveryChannel.trim()||`last`,r=new Set((e.agentsList?.agents??[]).filter(e=>e.kind===`system`).map(e=>e.id.trim())),i=o([...ne(e.agentsList?.agents??[]).map(e=>e.id.trim()),...e.cron.cronJobs.map(e=>typeof e.agentId==`string`&&!r.has(e.agentId.trim())?e.agentId.trim():``)]),a=o([...e.modelSuggestions,...nt(t),...e.cron.cronJobs.map(e=>{let t=qe(e);return t?.kind===`agentTurn`&&typeof t.model==`string`?t.model.trim():``})]),s=o(e.cron.cronJobs.map(e=>e.delivery?.to)),c=(n===`last`?Object.values(e.channels.channelsSnapshot?.channelAccounts??{}).flat():e.channels.channelsSnapshot?.channelAccounts?.[n]??[]).flatMap(e=>[e.accountId,e.name]).filter(e=>typeof e==`string`).map(e=>e.trim()).filter(Boolean);return{agentSuggestions:i,modelSuggestions:a,timezoneSuggestions:zt(e.cron.cronJobs),accountTargets:c,deliveryToSuggestions:e.cron.cronForm.deliveryMode===`webhook`?s.filter(e=>/^https?:\/\//i.test(e)):s}}var Ht;function Ut(){return(Ut=e((()=>{a(),d(),ie(),ze(),Bt(),Ht=[`off`,`minimal`,`low`,`medium`,`high`]})))()}function Wt(e){let t=new URLSearchParams(e),n=t.get(`job`)?.trim()||null;return{jobId:n,runId:n&&t.get(`run`)?.trim()||null}}function Gt(e,t){if(t.runId===e)return!0;let n=Kt.exec(e);return n!==null&&n[1]===t.jobId&&t.runAtMs===Number(n[2])}var Kt;function N(){return(N=e((()=>{Kt=/^cron:(.+):(\d+)$/u})))()}function P(e){let t=e.tabs;return t?wt({id:t.id,active:e.value,tabs:e.options.map(e=>({value:e.value,label:e.label,testId:e.testId})),ariaLabel:e.ariaLabel??``,panelId:t.panelId,className:`cron-tabs`,variant:t.variant,onSelect:e.onChange}):Ze({value:e.value,options:e.options,ariaLabel:e.ariaLabel,onChange:t=>e.onChange(t)})}function qt(){return(qt=e((()=>{Tt(),j()})))()}function F(e,t,n,r){return{id:e,emoji:t,nameKey:`cron.suggestions.ideas.${e}.name`,taglineKey:`cron.suggestions.ideas.${e}.tagline`,promptKey:`cron.suggestions.ideas.${e}.prompt`,scheduleKey:n,schedule:r}}function Jt(e){return{name:T(e.nameKey),payloadText:T(e.promptKey),payloadKind:`agentTurn`,sessionTarget:`isolated`,wakeMode:`now`,deleteAfterRun:!1,enabled:!0,...e.schedule}}var I,L,Yt,Xt,Zt;function Qt(){return(Qt=e((()=>{w(),I={scheduleKind:`cron`,cronExpr:`0 9 * * 1-5`},L={scheduleKind:`cron`,cronExpr:`0 8 * * *`},Yt={scheduleKind:`cron`,cronExpr:`0 9 * * 1`},Xt={scheduleKind:`every`,everyAmount:`1`,everyUnit:`hours`},Zt=[F(`repoPulse`,`🐙`,`cron.suggestions.schedules.weekdayMornings`,I),F(`standupGhostwriter`,`👻`,`cron.suggestions.schedules.weekdayMornings`,I),F(`hackerNewsScout`,`🔭`,`cron.suggestions.schedules.everyMorning`,L),F(`dependencyRadar`,`🛰️`,`cron.suggestions.schedules.weekly`,Yt),F(`watchdog`,`🦉`,`cron.suggestions.schedules.hourly`,Xt),F(`polyglotMinute`,`🗣️`,`cron.suggestions.schedules.everyMorning`,L)]})))()}function R(e,t){return b`
    <div class="cron-condition-activity__metric">
      <dt>${e}</dt>
      <dd>${t}</dd>
    </div>
  `}function $t(e){let t=v(e.lastCheckedAtMs,{fallback:T(`cron.runs.notChecked`)}),n=v(e.lastFiredAtMs,{fallback:T(`cron.runs.neverFired`)});return b`
    <div class="cron-condition-activity" data-test-id="cron-condition-activity">
      <div class="cron-condition-activity__intro">
        <div class="settings-row__title">
          <span class="cron-condition-activity__icon" aria-hidden="true">${E(`gitBranch`)}</span>
          ${T(`cron.runs.conditionActivity`)}
        </div>
        <div class="settings-row__desc">${T(`cron.runs.conditionActivityHint`)}</div>
      </div>
      <dl class="cron-condition-activity__metrics">
        ${R(T(`cron.runs.checks`),String(e.checkCount))}
        ${R(T(`cron.runs.lastChecked`),t)}
        ${R(T(`cron.runs.lastFired`),n)}
      </dl>
    </div>
  `}function en(e){if(e.checkCount===0)return T(`cron.runs.emptyConditionUnchecked`);let t=e.checkCount===1?`cron.runs.emptyConditionHintOne`:`cron.runs.emptyConditionHint`;return T(t,{count:String(e.checkCount)})}function tn(){return[{value:`ok`,label:T(`cron.runs.runStatusOk`)},{value:`error`,label:T(`cron.runs.runStatusError`)},{value:`skipped`,label:T(`cron.runs.runStatusSkipped`)}]}function nn(){return[{value:`delivered`,label:T(`cron.runs.deliveryDelivered`)},{value:`not-delivered`,label:T(`cron.runs.deliveryNotDelivered`)},{value:`unknown`,label:T(`cron.runs.deliveryUnknown`)},{value:`not-requested`,label:T(`cron.runs.deliveryNotRequested`)}]}function rn(e,t,n){let r=new Set(e);return n?r.add(t):r.delete(t),Array.from(r)}function an(e,t){return e.length===0?t:e.length<=2?e.join(`, `):`${e[0]} +${e.length-1}`}function on(e){let t=e.options.filter(t=>e.selected.includes(t.value)).map(e=>e.label),n=t.length>2?`${e.summary} (${new Intl.ListFormat(je.getLocale(),{style:`long`,type:`conjunction`}).format(t)})`:e.summary;return b`
    <div class="cron-filter-dropdown" data-filter=${e.id}>
      <wa-dropdown
        class="cron-filter-dropdown__details"
        placement="bottom-start"
        @wa-select=${t=>{let n=t.detail.item.value;if(n===`${B}clear`){e.onClear();return}if(n?.startsWith(z)){t.preventDefault();let r=n.slice(7);e.onToggle(r,!e.selected.includes(r))}}}
      >
        <button
          slot="trigger"
          type="button"
          class="btn btn--sm cron-filter-dropdown__trigger ${e.selected.length>0?`active`:``}"
          title=${e.title}
          aria-label=${`${e.title} ${n}`}
        >
          <span>${e.summary}</span>
          ${E(`chevronDown`)}
        </button>
        ${e.options.map(t=>b`
            <wa-dropdown-item
              class="cron-filter-dropdown__option"
              type="checkbox"
              value=${`${z}${t.value}`}
              .checked=${e.selected.includes(t.value)}
            >
              ${t.label}
            </wa-dropdown-item>
          `)}
        <div class="session-menu__separator" role="separator"></div>
        <wa-dropdown-item value=${`${B}clear`}>
          ${T(`cron.runs.clear`)}
        </wa-dropdown-item>
      </wa-dropdown>
    </div>
  `}function sn(e){let t=e.runs.toSorted((t,n)=>e.runsSortDir===`asc`?t.ts-n.ts:n.ts-t.ts),n=e.runsQuery.trim().length>0||e.runsStatuses.length>0||e.runsDeliveryStatuses.length>0,r=tn(),i=nn(),a=r.filter(t=>e.runsStatuses.includes(t.value)).map(e=>e.label),o=i.filter(t=>e.runsDeliveryStatuses.includes(t.value)).map(e=>e.label),s=an(a,T(`cron.runs.allStatuses`)),c=an(o,T(`cron.runs.allDelivery`)),l=e.runsSortDir===`asc`?T(`cron.runs.oldestFirst`):T(`cron.runs.newestFirst`);return b`
    <div class="cron-runs">
      ${e.conditionActivity?$t(e.conditionActivity):S}
      <div class="cron-run-filters">
        <div class="cron-search-box cron-run-filter-search">
          <span class="cron-search-box__icon" aria-hidden="true">${E(`search`)}</span>
          <input
            type="search"
            class="settings-input"
            .value=${e.runsQuery}
            aria-label=${T(`cron.runs.searchRuns`)}
            placeholder=${T(`cron.runs.searchPlaceholder`)}
            @input=${t=>e.onRunsFiltersChange({cronRunsQuery:t.target.value})}
          />
        </div>
        ${on({id:`status`,title:T(`cron.runs.status`),summary:s,options:r,selected:e.runsStatuses,onToggle:(t,n)=>{let r=rn(e.runsStatuses,t,n);e.onRunsFiltersChange({cronRunsStatuses:r})},onClear:()=>{e.onRunsFiltersChange({cronRunsStatuses:[]})}})}
        ${on({id:`delivery`,title:T(`cron.runs.delivery`),summary:c,options:i,selected:e.runsDeliveryStatuses,onToggle:(t,n)=>{let r=rn(e.runsDeliveryStatuses,t,n);e.onRunsFiltersChange({cronRunsDeliveryStatuses:r})},onClear:()=>{e.onRunsFiltersChange({cronRunsDeliveryStatuses:[]})}})}
        <div class="cron-filter-dropdown">
          <wa-dropdown
            class="cron-filter-dropdown__details"
            placement="bottom-start"
            @wa-select=${t=>{let n=t.detail.item.value;(n===`asc`||n===`desc`)&&e.onRunsFiltersChange({cronRunsSortDir:n})}}
          >
            <button
              slot="trigger"
              type="button"
              class="btn btn--sm cron-filter-dropdown__trigger cron-run-sort"
              aria-label=${`${T(`cron.jobs.sort`)} ${l}`}
            >
              <span>${l}</span>
              ${E(`chevronDown`)}
            </button>
            <wa-dropdown-item value="desc" aria-current=${String(e.runsSortDir===`desc`)}>
              ${T(`cron.runs.newestFirst`)}
              <span slot="details" aria-hidden="true">
                ${e.runsSortDir===`desc`?E(`check`):S}
              </span>
            </wa-dropdown-item>
            <wa-dropdown-item value="asc" aria-current=${String(e.runsSortDir===`asc`)}>
              ${T(`cron.runs.oldestFirst`)}
              <span slot="details" aria-hidden="true">
                ${e.runsSortDir===`asc`?E(`check`):S}
              </span>
            </wa-dropdown-item>
          </wa-dropdown>
        </div>
      </div>
      ${t.length===0?n?b`<div class="muted cron-runs__empty">${T(`cron.runs.noMatching`)}</div>`:b`
                <div class="cron-empty-state">
                  <div class="cron-empty-state__title">
                    ${e.conditionActivity?T(`cron.runs.emptyConditionTitle`):T(`cron.runs.emptyTitle`)}
                  </div>
                  <div class="cron-empty-state__copy">
                    ${e.conditionActivity?en(e.conditionActivity):T(`cron.runs.emptyHint`)}
                  </div>
                </div>
              `:b`
              <div class="cron-runs__list">
                ${t.map(t=>dn(t,e.agentId,e.basePath,e.highlightedRunId,e.onNavigateToChat))}
              </div>
            `}
      ${e.runsHasMore?b`
              <button
                class="btn btn--sm cron-load-more"
                ?disabled=${e.runsLoadingMore}
                @click=${e.onLoadMoreRuns}
              >
                ${e.runsLoadingMore?T(`cron.list.loading`):T(`cron.runs.loadMore`)}
              </button>
            `:S}
    </div>
  `}function cn(e,t=Date.now()){let n=v(e);return T(e>t?`cron.runEntry.next`:`cron.runEntry.due`,{rel:n})}function ln(e){switch(e){case`ok`:return T(`cron.runs.runStatusOk`);case`error`:return T(`cron.runs.runStatusError`);case`skipped`:return T(`cron.runs.runStatusSkipped`);default:return T(`cron.runs.runStatusUnknown`)}}function un(e){switch(e){case`delivered`:return T(`cron.runs.deliveryDelivered`);case`not-delivered`:return T(`cron.runs.deliveryNotDelivered`);case`not-requested`:return T(`cron.runs.deliveryNotRequested`);default:return T(`cron.runs.deliveryUnknown`)}}function dn(e,t,n,r,i){let a=typeof e.sessionKey==`string`&&e.sessionKey.trim().length>0?oe({face:`chat`,sessionKey:e.sessionKey,fallbackAgentId:t,basePath:n}).href:null,o=ln(e.status??`unknown`),s=un(e.deliveryStatus??`not-requested`),c=e.usage,u=c&&typeof c.total_tokens==`number`?`${m(c.total_tokens)} ${T(`usage.metrics.tokens`)}`:c&&typeof c.input_tokens==`number`&&typeof c.output_tokens==`number`?`${m(c.input_tokens)} in / ${m(c.output_tokens)} out`:null,d=e.summary||h(e.error)||T(`cron.runEntry.noSummary`),f=!!e.error&&!!e.summary,p=h(e.deliverySuppressionReason),ee=[s,p?T(`cron.runEntry.deliverySuppression`,{reason:p}):null,e.model,e.provider,u].filter(Boolean),te=!!(r&&Gt(r,e));return b`
    <div class="cron-run-entry ${te?`cron-run-entry--highlighted`:``}">
      <div class="cron-run-entry__header">
        <div class="cron-run-entry__main">
          <div class="cron-run-entry__title">
            ${e.jobName??e.jobId}
            <span class="muted"> · ${o}</span>
          </div>
          <div class="cron-run-entry__facts muted">${ee.join(` · `)}</div>
        </div>
        <div class="cron-run-entry__meta">
          <div>${_(e.ts)}</div>
          ${typeof e.runAtMs==`number`?b`<div class="muted">
                  ${T(`cron.runEntry.runAt`)} ${_(e.runAtMs)}
                </div>`:S}
          <div class="muted">
            ${typeof e.durationMs==`number`&&Number.isFinite(e.durationMs)?ae(e.durationMs)??re(e.durationMs,T(`common.na`)):T(`common.na`)}
          </div>
          ${typeof e.nextRunAtMs==`number`?b`<div class="muted">${cn(e.nextRunAtMs)}</div>`:S}
          ${a?b`<div>
                  <a
                    class="session-link"
                    href=${a}
                    @click=${t=>{l(t)&&i&&e.sessionKey&&(t.preventDefault(),i(e.sessionKey))}}
                    >${T(`cron.runEntry.openRunChat`)}</a
                  >
                </div>`:S}
          ${f?b`<div class="muted">${h(e.error)}</div>`:S}
          ${e.deliveryError?b`<div class="muted">${h(e.deliveryError)}</div>`:S}
        </div>
      </div>
      <div class="cron-run-entry__body chat-text">
        ${ge(Je(d))}
      </div>
    </div>
  `}var z,B;function fn(){return(fn=e((()=>{y(),ve(),ke(),at(),Ge(),w(),g(),ce(),de(),N(),z=`option:`,B=`command:`})))()}function pn(e){return[{value:`last`,label:`last`,kind:`neutral`},...i(e.channels.filter(Boolean)).map(t=>({value:t,label:e.channelMeta?.find(e=>e.id===t)?.label||e.channelLabels?.[t]||t}))]}function V(e,t){let n=i(c(t));return n.length===0?S:b`<datalist id=${e}>
        ${n.map(e=>b`<option value=${e}></option> `)}
      </datalist>`}function H(e){return`cron-error-${e}`}function U(e){return`cron-${e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}`}function mn(e,t,n){return e===`payloadText`&&t.payloadKind===`systemEvent`?T(`cron.form.mainTimelineMessage`):T(e===`deliveryTo`&&n===`webhook`?`cron.form.webhookUrl`:Q[e])}function hn(e,t,n){return Object.keys(Q).flatMap(r=>{let i=e[r];return i?[{key:r,label:mn(r,t,n),message:i,inputId:U(r)}]:[]})}function gn(e){let t=document.getElementById(e);t instanceof HTMLElement&&(typeof t.scrollIntoView==`function`&&t.scrollIntoView({block:`center`,behavior:vt()}),t.focus())}function _n(e,t){return e?b`<div id=${C(t)} class="cron-help cron-error">${T(e)}</div>`:S}function vn(e){return b`
    ${e}
    <span class="cron-required-marker" aria-hidden="true">*</span>
    <span class="cron-required-sr">${T(`cron.form.requiredSr`)}</span>
  `}function W(e){let t=e.wide?`cron-control cron-control--wide`:`cron-control`,n=e.error?b`<div class=${t}>
        ${e.control}${_n(e.error,e.errorId)}
      </div>`:b`<div class=${t}>${e.control}</div>`;return b`
    <div class=${e.stacked?`settings-row settings-row--stacked`:`settings-row`}>
      <label class="settings-row__text" for=${C(e.controlId||void 0)}>
        <span class="settings-row__title">
          ${e.required?vn(e.label):e.label}
        </span>
        ${e.help?b`<span class="settings-row__desc">${e.help}</span>`:S}
      </label>
      <div class="settings-row__control">${n}</div>
    </div>
  `}function G(e,t,n){let r=n.errorKey?e.fieldErrors[n.errorKey]:void 0,i=r&&n.errorKey&&n.describeError!==!1?H(n.errorKey):void 0;return b`
    <input
      id=${U(t)}
      class=${n.mono?`settings-input mono`:`settings-input`}
      type=${C(n.type)}
      aria-required=${C(n.required?`true`:void 0)}
      .value=${e.form[t]}
      list=${C(n.list)}
      ?disabled=${n.disabled??!1}
      aria-invalid=${C(n.errorKey?r?`true`:`false`:void 0)}
      aria-describedby=${C(i)}
      placeholder=${C(n.placeholder)}
      @input=${n=>e.onFormChange({[t]:n.currentTarget.value})}
    />
  `}function K(e,t,n){let r=n.errorKey;return W({label:n.label,controlId:U(t),required:n.required,help:n.help,error:r?e.fieldErrors[r]:void 0,errorId:r?H(r):void 0,control:G(e,t,n)})}function yn(e,t,n){let r=n.value??e.form[t];return(n.channel?bt:St)({id:n.standalone?void 0:U(t),label:n.label,value:n.channel?r||`last`:r,options:n.options,disabled:n.disabled,onChange:n=>e.onFormChange({[t]:n})})}function q(e,t,n){return W({label:n.label,controlId:U(t),help:n.help,control:yn(e,t,n)})}function J(e,t,n){return tt({title:n.label,description:n.help,checked:e.form[t],onChange:n=>e.onFormChange({[t]:n})})}function bn(e){let t=e.editingJob?`job`:e.createOpen?`create`:`overview`;return b`
    ${t===`overview`?Sn(e):Fn(e,t)}
    ${V(`cron-agent-suggestions`,e.agentSuggestions)}
    ${V(`cron-thinking-suggestions`,e.thinkingSuggestions)}
    ${V(`cron-tz-suggestions`,e.timezoneSuggestions)}
    ${V(`cron-delivery-to-suggestions`,e.deliveryToSuggestions)}
    ${V(`cron-delivery-account-suggestions`,e.accountSuggestions)}
  `}function xn(e){return e.canManage?S:b`<div class="cron-admin-note" role="note">
        <span aria-hidden="true">${E(`lock`)}</span>
        <span>${T(`cron.adminRequired`)}</span>
      </div>`}function Sn(e){let t=e.jobsScheduleKindFilter!==`all`||e.jobsLastStatusFilter!==`all`||e.jobsTriggerFilter!==`all`||e.jobsSortBy!==`nextRunAtMs`||e.jobsSortDir!==`asc`,n=t||e.jobsQuery.trim().length>0||e.jobsEnabledFilter!==`all`,r=!e.loading&&e.hasLoaded&&!e.listError&&!e.error&&e.jobsTotal===0&&!n&&e.canManage,i=[b`
      <div class="cron-overview-header">
        ${xn(e)}
        ${e.status&&!e.status.enabled?b`
                <div class="cron-error-banner" data-test-id="cron-scheduler-banner">
                  <strong>${T(`cron.list.schedulerOff`)}</strong>
                  ${T(`cron.runNotStarted.stopped`)}
                </div>
              `:S}
        ${e.listError?b`<div class="cron-error-banner" role="alert">${e.listError}</div>`:S}
        ${e.error?b`<div class="cron-error-banner" role="alert">${e.error}</div>`:S}
        ${wn(e,t)}
      </div>
    `,b`
      <div
        id="cron-list-panel"
        class="cron-tab-panel"
        role="tabpanel"
        aria-labelledby=${`cron-list-tab-${e.listTab===`activity`?`activity`:e.jobsEnabledFilter}`}
      >
        ${e.listTab===`activity`?D({},b`<div class="cron-activity">${sn(e)}</div>`):[D({},En(e,n)),r?Pn(e):S]}
      </div>
    `];return b`
    <section class="cron-page" data-panel-mode="overview">
      ${Ke(i,{wide:!0})}
    </section>
  `}function Cn(e){return P({value:e.listTab===`activity`?`activity`:e.jobsEnabledFilter,options:[...Yn.map(e=>({value:e.value,label:T(e.labelKey),testId:`cron-tab-${e.value}`})),{value:`activity`,label:T(`cron.list.activityTab`),testId:`cron-list-tab-activity`}],ariaLabel:T(`cron.list.viewLabel`),tabs:{id:`cron-list`,panelId:`cron-list-panel`},onChange:t=>{if(t===`activity`){e.onListTabChange(`activity`);return}e.onListTabChange(`tasks`),t!==e.jobsEnabledFilter&&e.onJobsFiltersChange({cronJobsEnabledFilter:t})}})}function wn(e,t){return b`
    <div class="cron-toolbar">
      ${e.listTab===`tasks`?b`
              <div class="cron-toolbar__filters">
                <div class="cron-search-box">
                  <span class="cron-search-box__icon" aria-hidden="true">${E(`search`)}</span>
                  <input
                    type="search"
                    class="settings-input"
                    .value=${e.jobsQuery}
                    aria-label=${T(`cron.list.searchPlaceholder`)}
                    placeholder=${T(`cron.list.searchPlaceholder`)}
                    @input=${t=>e.onJobsFiltersChange({cronJobsQuery:t.target.value})}
                  />
                </div>
                ${Tn(e,t)}
              </div>
            `:S}
      <div class="cron-toolbar__primary">
        ${Cn(e)}
        <div class="cron-toolbar__actions">
          <button
            type="button"
            class="btn btn--sm btn--ghost cron-refresh ${e.loading?`cron-refresh--loading`:``}"
            ?disabled=${e.loading}
            title=${e.loading?T(`cron.list.refreshing`):T(`cron.list.refresh`)}
            aria-label=${T(`cron.list.refresh`)}
            @click=${e.onRefresh}
          >
            ${E(`refresh`)}
          </button>
          ${e.canManage?b`
                  <button
                    type="button"
                    class="btn primary btn--sm cron-new-task"
                    data-test-id="cron-new-task"
                    @click=${()=>e.onOpenCreate()}
                  >
                    ${E(`plus`)} ${T(`cron.list.newTask`)}
                  </button>
                `:S}
        </div>
      </div>
    </div>
  `}function Y(e,t,n){return b`
    <label class="field">
      <span>${n.label}</span>
      <select
        class="settings-select"
        data-test-id=${C(n.testId)}
        .value=${n.value}
        @change=${n=>e.onJobsFiltersChange({[t]:n.currentTarget.value})}
      >
        ${n.options.map(({value:e,label:t})=>b`<option value=${e} ?selected=${e===n.value}>${t}</option>`)}
      </select>
    </label>
  `}function Tn(e,t){return b`
    <button
      id="cron-jobs-filter-trigger"
      type="button"
      class="btn btn--sm cron-filter-popover__trigger ${t?`active`:``}"
      title=${T(`cron.list.filters`)}
      aria-label=${T(`cron.list.filters`)}
      aria-haspopup="dialog"
      aria-expanded="false"
    >
      ${E(`listFilter`)}
    </button>
    <wa-popover
      class="cron-filter-popover"
      for="cron-jobs-filter-trigger"
      placement="bottom-end"
      without-arrow
      @wa-show=${e=>{e.currentTarget.previousElementSibling?.setAttribute(`aria-expanded`,`true`)}}
      @wa-hide=${e=>{e.currentTarget.previousElementSibling?.setAttribute(`aria-expanded`,`false`)}}
    >
      <div class="cron-filter-popover__panel">
        ${Y(e,`cronJobsScheduleKindFilter`,{label:T(`cron.jobs.schedule`),value:e.jobsScheduleKindFilter,testId:`cron-jobs-schedule-filter`,options:Object.entries(Xn).map(([e,t])=>({value:e,label:T(t)}))})}
        ${Y(e,`cronJobsLastStatusFilter`,{label:T(`cron.jobs.lastRun`),value:e.jobsLastStatusFilter,testId:`cron-jobs-last-status-filter`,options:[{value:`all`,label:T(`cron.jobs.all`)},{value:`ok`,label:T(`cron.runs.runStatusOk`)},{value:`error`,label:T(`cron.runs.runStatusError`)},{value:`skipped`,label:T(`cron.runs.runStatusSkipped`)},{value:`unknown`,label:T(`cron.runs.runStatusUnknown`)}]})}
        ${Y(e,`cronJobsTriggerFilter`,{label:T(`cron.jobs.condition`),value:e.jobsTriggerFilter,testId:`cron-jobs-trigger-filter`,options:[{value:`all`,label:T(`cron.jobs.all`)},{value:`conditional`,label:T(`cron.jobs.conditional`)},{value:`unconditional`,label:T(`cron.jobs.unconditional`)}]})}
        ${Y(e,`cronJobsSortBy`,{label:T(`cron.jobs.sort`),value:e.jobsSortBy,options:[{value:`nextRunAtMs`,label:T(`cron.jobs.nextRun`)},{value:`updatedAtMs`,label:T(`cron.jobs.recentlyUpdated`)},{value:`name`,label:T(`cron.jobs.name`)}]})}
        ${Y(e,`cronJobsSortDir`,{label:T(`cron.jobs.direction`),value:e.jobsSortDir,options:[{value:`asc`,label:T(`cron.jobs.ascending`)},{value:`desc`,label:T(`cron.jobs.descending`)}]})}
        <button
          class="btn btn--sm"
          data-test-id="cron-jobs-filters-reset"
          ?disabled=${!t}
          @click=${e.onJobsFiltersReset}
        >
          ${T(`cron.jobs.reset`)}
        </button>
      </div>
    </wa-popover>
  `}function En(e,t){let n=e.loading&&!e.hasLoaded,r=e.loading||e.jobsLoadingMore,i=e.jobs.toSorted((e,t)=>Number(O(t))-Number(O(e)));return b`
    <div
      class="cron-table ${e.canManage?``:`cron-table--read-only`}"
      aria-busy=${r?`true`:S}
    >
      <div class="cron-table__head">
        <span>${T(`cron.jobs.name`)}</span>
        <span>${T(`cron.jobs.schedule`)}</span>
        <span>${T(`cron.jobs.nextRun`)}</span>
        <span>${T(`cron.jobs.lastRun`)}</span>
        ${e.canManage?b`<span aria-hidden="true"></span>`:S}
      </div>
      ${i.length===0?n?b`
                <div
                  class="cron-empty-state"
                  role="status"
                  aria-live="polite"
                  data-test-id="cron-jobs-loading"
                >
                  <div class="cron-empty-state__title">${T(`cron.list.loading`)}</div>
                </div>
              `:e.hasLoaded?b`
                  <div class="cron-empty-state">
                    <div class="cron-empty-state__title">
                      ${T(t?`cron.list.noMatching`:`cron.list.emptyTitle`)}
                    </div>
                    ${t?S:b`<div class="cron-empty-state__copy">
                            ${T(`cron.list.emptyHint`)}
                          </div>`}
                  </div>
                `:S:me(i,e=>e.id,t=>Dn(t,e))}
      ${At({jobsShown:e.jobs.length,jobsTotal:e.jobsTotal,hasMore:e.jobsHasMore,loading:e.loading,loadingMore:e.jobsLoadingMore,onLoadMore:e.onLoadMoreJobs})}
    </div>
  `}function X(e){return Ee(e?.declarationKey)}function Dn(e,t){let n=e.description?.trim(),r=X(e),i=e.state?.nextRunAtMs,a=typeof i==`number`&&Number.isFinite(i),o=lt(e)?b`<span class="cron-table__running">${T(`cron.runs.runStatusRunning`)}</span>`:a?v(i):T(`common.na`);return b`
    <div
      class="cron-table__row ${e.enabled?``:`cron-table__row--paused`}"
      data-test-id=${`cron-row-${e.id}`}
      @click=${()=>t.onSelectJob(e)}
    >
      <button type="button" class="cron-table__name">
        ${On(e)}
        <span class="cron-table__name-copy">
          <span class="cron-table__name-line">
            <span class="cron-table__name-text">${e.name}</span>
            ${e.trigger?kn():S}
          </span>
          ${n||!e.enabled?b`
                  <span class="cron-table__name-meta">
                    ${n?b`
                            <span
                              class="cron-table__description"
                              data-test-id=${`cron-row-description-${e.id}`}
                              title=${`${T(`cron.form.description`)}: ${n}`}
                              >${n}</span
                            >
                          `:S}
                    ${n&&!e.enabled?b`<span class="cron-table__meta-separator" aria-hidden="true">·</span>`:S}
                    ${e.enabled?S:An(e)}
                  </span>
                `:S}
        </span>
      </button>
      ${Z(`cron-table__schedule`,T(`cron.jobs.schedule`),Mt(e))}
      ${Z(`cron-table__next`,T(`cron.jobs.nextRun`),o)}
      ${Z(`cron-table__last`,T(`cron.jobs.lastRun`),Mn(e))}
      ${t.canManage?b`
              <span class="cron-table__actions" @click=${e=>e.stopPropagation()}>
                <button
                  type="button"
                  class="btn btn--sm btn--ghost cron-row-run"
                  data-test-id=${`cron-row-run-${e.id}`}
                  title=${T(`cron.actions.runNowJob`,{name:e.name})}
                  aria-label=${T(`cron.actions.runNowJob`,{name:e.name})}
                  ?disabled=${t.busy}
                  @click=${()=>t.onRun(e,`force`)}
                >
                  ${E(`play`)}
                </button>
                ${r?S:Ln(t,e,{compact:!0,testId:`cron-row-toggle-${e.id}`})}
                ${Nn(t,e)}
              </span>
            `:S}
    </div>
  `}function Z(e,t,n){return b`<span class="cron-table__cell ${e}">
    <span class="cron-table__cell-label">${t}</span>
    <span class="cron-table__cell-value">${n}</span>
  </span>`}function On(e){let t=e.state?.autoDisabled,n=lt(e)?{className:`cron-table__state--running`,iconName:`loader`,label:T(`cron.runs.runStatusRunning`)}:t?{className:`cron-table__state--error`,iconName:`lock`,label:jn(e)}:O(e)?{className:`cron-table__state--error`,iconName:`alertTriangle`,label:T(`cron.runs.runStatusError`)}:e.enabled?{className:`cron-table__state--active`,iconName:null,label:T(`cron.detail.active`)}:{className:`cron-table__state--paused`,iconName:`pause`,label:T(`cron.list.paused`)};return b`<span
    class="cron-table__state ${n.className}"
    role="img"
    aria-label=${n.label}
    title=${n.label}
    >${n.iconName?E(n.iconName):b`<span class="cron-table__state-dot"></span>`}</span
  >`}function kn(){let e=T(`cron.form.triggerConfigured`);return b`<span class="cron-trigger-icon" role="img" aria-label=${e} title=${e}
    >${E(`gitBranch`)}</span
  >`}function An(e){if(!e.state?.autoDisabled)return b`<span class="muted cron-table__paused-note">${T(`cron.list.paused`)}</span>`;let t=jn(e),n=e.state?.lastError?.trim();return b`<span
    class="cron-table__paused-note cron-table__auto-disabled"
    data-test-id=${`cron-row-auto-disabled-${e.id}`}
    title=${n?h(n):t}
    >${t}</span
  >`}function jn(e){let t=e.state?.autoDisabled;return t?T(t.reason===`schedule-errors`?`cron.list.autoDisabledScheduleErrors`:`cron.list.autoDisabledRunFailures`,{count:String(t.consecutiveErrors)}):T(`cron.list.paused`)}function Mn(e){let t=Me(e),n=e.state?.lastRunAtMs,r=typeof n==`number`&&Number.isFinite(n)?v(n):null;if(t===`unknown`||!r)return b`<span class="muted">${T(`common.na`)}</span>`;let i=t===`ok`?b`<span class="cron-last-glyph cron-last-glyph--ok">${E(`check`)}</span>`:t===`error`?b`<span class="cron-last-glyph cron-last-glyph--error">${E(`x`)}</span>`:b`<span class="cron-last-glyph">${E(`cornerDownRight`)}</span>`,a=ln(t);return b`
    <span class="cron-table__last-run" role="img" aria-label=${a} title=${a}>
      ${i}
      <span class="cron-table__last-time">${r}</span>
    </span>
  `}function Nn(e,t){if(!e.canManage)return S;let n=X(t);return b`
    <wa-dropdown
      class="cron-job-menu"
      placement="bottom-end"
      @wa-select=${r=>{if(e.canManage)switch(r.detail.item.value){case`run-if-due`:e.onRun(t,`due`);break;case`clone`:n||e.onClone(t);break;case`remove`:n||e.onRemove(t);break;case void 0:}}}
    >
      <button
        slot="trigger"
        type="button"
        class="btn btn--sm btn--ghost cron-job-menu__trigger"
        aria-label=${T(`cron.actions.moreJob`,{name:t.name})}
        title=${T(`cron.actions.moreJob`,{name:t.name})}
      >
        ${E(`moreHorizontal`)}
      </button>
      ${Bn(e,`run-if-due`,T(`cron.actions.runIfDue`))}
      ${n?S:Bn(e,`clone`,T(`cron.actions.clone`))}
      ${n?S:Bn(e,`remove`,T(`cron.actions.remove`),{danger:!0})}
    </wa-dropdown>
  `}function Pn(e){return D({title:T(`cron.suggestions.title`)},Zt.map(t=>b`
        <button
          type="button"
          class="settings-row settings-row--nav cron-suggestion"
          data-suggestion=${t.id}
          @click=${()=>e.onOpenCreate(Jt(t))}
        >
          <div class="settings-row__text">
            <span class="settings-row__title">
              <span aria-hidden="true">${t.emoji}</span> ${T(t.nameKey)}
            </span>
            <span class="settings-row__desc">${T(t.taglineKey)}</span>
          </div>
          <div class="settings-row__control">
            <span class="settings-row__value">${T(t.scheduleKey)}</span>
            <span class="settings-row__chevron">${Oe.chevronRight}</span>
          </div>
        </button>
      `))}function Fn(e,t){let n=t===`job`?e.editingJob??void 0:void 0,r=t===`job`&&!!n,i=t===`job`&&e.detailTab===`history`,a=n?.trigger?{checkCount:n.state?.triggerEvalCount??0,lastCheckedAtMs:n.state?.lastTriggerEvalAtMs,lastFiredAtMs:n.state?.lastTriggerFireAtMs}:void 0,o=[b`
      <div class="cron-back-row">
        <button
          type="button"
          class="cron-back"
          data-test-id="cron-back"
          ?disabled=${e.busy}
          @click=${e.onClosePanel}
        >
          ${E(`arrowLeft`)} ${T(`cron.detail.back`)}
        </button>
      </div>
    `,In(e,t,n),xn(e),r?Rn(e):S,e.error?b`<div class="cron-error-banner">${e.error}</div>`:S,b`
      <div
        id="cron-detail-panel"
        class="cron-tab-panel"
        role=${r?`tabpanel`:S}
        aria-labelledby=${r?`cron-detail-tab-${e.detailTab}`:S}
      >
        ${i?D({title:T(`cron.detail.historyTitle`)},b`<div class="cron-history">
                  ${sn({...e,conditionActivity:a})}
                </div>`):zn(e,t)}
      </div>
    `];return b`
    <section class="cron-page cron-page--detail" data-panel-mode=${t}>
      ${Ke(o,{wide:!0})}
    </section>
  `}function In(e,t,n){let r=t===`job`?n?.name??e.form.name:T(`cron.detail.newTitle`),i=t===`job`?n?.description?.trim():void 0,a=X(n),o=n?.state?.nextRunAtMs,s=typeof o==`number`&&Number.isFinite(o)?` · ${T(`cron.jobState.next`)} ${v(o)}`:``,c=t===`job`&&n?`${Mt(n)}${s}`:T(`cron.detail.newSubtitle`);return b`
    <div class="cron-detail-header">
      <div class="cron-detail-header__copy">
        <div class="cron-detail-title">${r}</div>
        ${i?b`<div class="cron-detail-description" data-test-id="cron-detail-description">
                <span class="cron-detail-description__label">${T(`cron.form.description`)}:</span>
                ${i}
              </div>`:S}
        <div class="cron-detail-meta">
          ${t===`job`&&n&&e.canManage&&!a?Ln(e,n):S}
          <span class="cron-detail-sub">${c}</span>
          ${n?.trigger?kn():S}
        </div>
      </div>
      <div class="cron-detail-actions">
        ${t===`job`&&n&&e.canManage?b`
                <button
                  type="button"
                  class="btn btn--sm"
                  data-test-id="cron-run-now"
                  ?disabled=${e.busy}
                  @click=${()=>e.onRun(n,`force`)}
                >
                  ${E(`play`)} ${T(`cron.actions.runNow`)}
                </button>
                ${Nn(e,n)}
              `:S}
      </div>
    </div>
  `}function Ln(e,t,n){let r=t.enabled?T(`cron.detail.active`):T(`cron.detail.paused`),i=T(t.enabled?`cron.actions.pauseJob`:`cron.actions.resumeJob`,{name:t.name});return b`
    <span
      class="cron-enabled-toggle"
      data-test-id=${n?.testId??`cron-toggle-enabled`}
      title=${n?.compact?i:S}
    >
      ${Pe({checked:t.enabled,disabled:e.busy||!e.canManage,ariaLabel:n?.compact?i:r,onChange:n=>{e.canManage&&e.onToggle(t,n)}})}
      ${n?.compact?S:b`<span class="cron-detail-sub">${r}</span>`}
    </span>
  `}function Rn(e){return P({value:e.detailTab,options:[{value:`settings`,label:T(`cron.detail.settingsTab`),testId:`cron-detail-tab-settings`},{value:`history`,label:T(`cron.detail.historyTitle`),testId:`cron-detail-tab-history`}],ariaLabel:T(`cron.detail.tabsLabel`),tabs:{id:`cron-detail`,panelId:`cron-detail-panel`,variant:`sub`},onChange:e.onDetailTabChange})}function zn(e,t){let n=e.form.payloadLocked,r=t===`job`&&X(e.editingJob),i=!n&&e.form.payloadKind===`agentTurn`,a=e.form.sessionTarget!==`main`&&(e.form.payloadKind===`agentTurn`||n),o=e.form.deliveryMode===`announce`&&!a?`none`:e.form.deliveryMode,s=hn(e.fieldErrors,e.form,o),c=e.canManage&&!e.busy&&s.length>0,l=c&&!e.canSubmit?s.length===1?T(`cron.form.fixFields`,{count:String(s.length)}):T(`cron.form.fixFieldsPlural`,{count:String(s.length)}):``;return b`
    <fieldset
      class="cron-editor"
      ?disabled=${e.busy||!e.canManage||r}
      aria-busy=${String(e.busy)}
    >
      ${Vn(e,{payloadLocked:n,isAgentTurn:i})} ${Hn(e)}
      ${Wn(e)}
      ${Gn(e,{supportsAnnounce:a,selectedDeliveryMode:o})}
      ${Kn(e,{mode:t,isAgentTurn:i,selectedDeliveryMode:o})}
      ${c?b`
              <div class="cron-form-status" role="status" aria-live="polite">
                <div class="cron-form-status__title">${T(`cron.form.cantAddYet`)}</div>
                <div class="cron-help">${T(`cron.form.fillRequired`)}</div>
                <ul class="cron-form-status__list">
                  ${s.map(e=>b`
                      <li>
                        <button
                          type="button"
                          class="cron-form-status__link"
                          @click=${()=>gn(e.inputId)}
                        >
                          ${e.label}: ${T(e.message)}
                        </button>
                      </li>
                    `)}
                </ul>
              </div>
            `:S}
      ${e.canManage&&!r?b`
              <div class="cron-editor-actions">
                <button
                  class="btn primary"
                  data-test-id="cron-submit"
                  ?disabled=${e.busy||!e.canSubmit}
                  @click=${e.onSubmit}
                >
                  ${e.busy?T(`cron.form.saving`):T(t===`job`?`cron.form.saveChanges`:`cron.form.createTask`)}
                </button>
                ${t===`create`?b`
                        <button
                          class="btn"
                          data-test-id="cron-submit-run"
                          ?disabled=${e.busy||!e.canSubmit}
                          @click=${e.onSubmitRunNow}
                        >
                          ${T(`cron.form.createAndRun`)}
                        </button>
                      `:S}
                <button class="btn" ?disabled=${e.busy} @click=${e.onClosePanel}>
                  ${T(`cron.form.cancel`)}
                </button>
                ${l?b`<div class="cron-submit-reason" aria-live="polite">
                        ${l}
                      </div>`:S}
              </div>
            `:S}
    </fieldset>
  `}function Bn(e,t,n,r){return b`
    <wa-dropdown-item
      class=${r?.danger?`cron-job-menu__item danger`:`cron-job-menu__item`}
      value=${t}
      variant=${r?.danger?`danger`:`default`}
      ?disabled=${e.busy||!e.canManage}
    >
      ${n}
    </wa-dropdown-item>
  `}function Vn(e,t){let n=e.form.payloadKind===`script`?T(`cron.form.script`):e.form.payloadKind===`heartbeat`?`Heartbeat monitor`:e.form.payloadKind===`agentTurn`?T(`cron.form.assistantTaskPrompt`):T(`cron.form.command`),r=t.payloadLocked?n:e.form.payloadKind===`systemEvent`?T(`cron.form.mainTimelineMessage`):T(`cron.form.assistantTaskPrompt`),a=t.payloadLocked?T(`cron.form.readOnlyPayloadHelp`):e.form.payloadKind===`systemEvent`?T(`cron.form.systemEventHelp`):T(`cron.form.agentTurnHelp`),o=t.payloadLocked?Zn[e.form.payloadKind]:``,s=e.form.payloadKind===`heartbeat`?e.heartbeatScratch:e.form.payloadText,c=W({label:r,controlId:o?``:`cron-payload-text`,required:!0,help:a,stacked:!0,wide:!0,error:e.fieldErrors.payloadText,errorId:H(`payloadText`),control:o?b`
          <pre
            id="cron-payload-text"
            class="code-block cron-payload-code"
            data-test-id="cron-payload-code"
            tabindex="0"
            aria-label=${r}
          ><code class="hljs">${ge(Xe(s,o))}</code></pre>
        `:b`
          <textarea
            id="cron-payload-text"
            class="settings-input"
            rows="6"
            .value=${s}
            ?readonly=${t.payloadLocked}
            aria-required="true"
            placeholder=${T(`cron.form.promptPlaceholder`)}
            aria-invalid=${e.fieldErrors.payloadText?`true`:`false`}
            aria-describedby=${C(e.fieldErrors.payloadText?H(`payloadText`):void 0)}
            @input=${t=>e.onFormChange({payloadText:t.target.value})}
          ></textarea>
        `}),l=T(`cron.form.action`),u=t.payloadLocked?W({label:l,controlId:U(`payloadKind`),control:b`
          <input
            id=${U(`payloadKind`)}
            class="settings-input"
            .value=${n}
            readonly
          />
        `}):q(e,`payloadKind`,{label:l,options:[{value:`systemEvent`,label:T(`cron.form.systemEvent`)},{value:`agentTurn`,label:T(`cron.form.agentTurn`)}]}),d=T(`cron.form.model`),f=e.fieldErrors.payloadModel,p=i(e.modelSuggestions).map(e=>({value:e,label:e,provider:dt(e)??void 0})),m=t.isAgentTurn?b`
        ${W({label:d,controlId:``,help:T(`cron.form.modelHelp`),error:f,errorId:H(`payloadModel`),control:Ot({id:`cron-payload-model-picker`,label:d,value:e.form.payloadModel,options:[{value:``,label:T(`quickSettings.model.default`)},...p],custom:{id:U(`payloadModel`),label:T(`cron.form.customModel`),placeholder:T(`cron.form.modelPlaceholder`),invalid:!!f,describedBy:f?H(`payloadModel`):void 0},onChange:t=>e.onFormChange({payloadModel:t})})})}
        ${K(e,`payloadThinking`,{label:T(`cron.form.thinking`),help:T(`cron.form.thinkingHelp`),errorKey:`payloadThinking`,describeError:!1,list:`cron-thinking-suggestions`,placeholder:T(`cron.form.thinkingPlaceholder`)})}
      `:S;return D({},b`${c}${u}${m}`)}function Hn(e){let t=e.form.sessionTarget,n=t===`main`||t===`isolated`;return D({title:T(`cron.detail.generalSection`)},b`
      ${K(e,`name`,{label:T(`cron.form.fieldName`),required:!0,errorKey:`name`,placeholder:T(`cron.form.namePlaceholder`)})}
      ${K(e,`agentId`,{label:T(`cron.form.agentId`),help:T(`cron.form.agentHelp`),list:`cron-agent-suggestions`,disabled:e.form.clearAgent,placeholder:T(`cron.form.agentPlaceholder`)})}
      ${q(e,`sessionTarget`,{label:T(`cron.form.runsIn`),help:T(`cron.form.sessionHelp`),options:[{value:`main`,label:T(`cron.form.mainSession`)},{value:`isolated`,label:T(`cron.form.isolatedSession`)},...n?[]:[{value:t,label:t}]]})}
    `)}function Un(e){if(e.scheduleKind===`every`){let t=e.everyAmount.trim();if(ft(t,e.everyUnit)===void 0)return null;if(Number(t)===1){let t=e.everyUnit===`seconds`?`cron.form.summaryEverySecondOne`:e.everyUnit===`minutes`?`cron.form.summaryEveryMinuteOne`:e.everyUnit===`hours`?`cron.form.summaryEveryHourOne`:`cron.form.summaryEveryDayOne`;return T(t)}let n=e.everyUnit===`seconds`?`cron.form.summaryEverySeconds`:e.everyUnit===`minutes`?`cron.form.summaryEveryMinutes`:e.everyUnit===`hours`?`cron.form.summaryEveryHours`:`cron.form.summaryEveryDays`;return T(n,{amount:t})}if(e.scheduleKind===`at`){let t=Date.parse(e.scheduleAt);return Number.isFinite(t)?T(`cron.form.summaryOnce`,{at:_(t)}):null}if(e.scheduleKind===`cron`){let t=e.cronExpr.trim();if(!t)return null;let n=e.cronTz.trim();return n?T(`cron.form.summaryCronTz`,{expr:t,tz:n}):T(`cron.form.summaryCron`,{expr:t})}return e.scheduleKind===`on-exit`?T(`cron.form.repeatOnExit`):e.scheduleKind===`stream`?T(`cron.form.repeatStream`):null}function Wn(e){let t=e.form,n=t.scheduleKind===`on-exit`,r=t.scheduleKind===`stream`,i=n?{value:`on-exit`,label:T(`cron.form.repeatOnExit`)}:r?{value:`stream`,label:T(`cron.form.repeatStream`)}:null,a=[...i?[{...i,testId:`cron-schedule-kind-${i.value}`}]:[],{value:`every`,label:T(`cron.form.repeatInterval`),testId:`cron-schedule-kind-every`},{value:`at`,label:T(`cron.form.repeatOnce`),testId:`cron-schedule-kind-at`},{value:`cron`,label:T(`cron.form.cronOption`),testId:`cron-schedule-kind-cron`}],o=Un(t);return D({title:T(`cron.detail.scheduleSection`)},b`
      ${Ie({title:T(`cron.form.repeat`),description:n?T(`cron.form.onExitHelp`):void 0,stacked:!0,control:P({value:t.scheduleKind,options:a,ariaLabel:T(`cron.form.repeat`),onChange:n=>e.onFormChange({scheduleKind:n,...n===`at`&&(t.scheduleKind===`every`||t.scheduleKind===`cron`)?{deleteAfterRun:!0}:n===`every`||n===`cron`?{deleteAfterRun:!1}:{}})})})}
      ${t.scheduleKind===`at`?K(e,`scheduleAt`,{label:T(`cron.form.runAt`),required:!0,errorKey:`scheduleAt`,type:`datetime-local`}):S}
      ${t.scheduleKind===`every`?W({label:T(`cron.form.every`),controlId:`cron-every-amount`,required:!0,error:e.fieldErrors.everyAmount,errorId:H(`everyAmount`),control:b`
                <div class="cron-inline-controls">
                  ${G(e,`everyAmount`,{label:T(`cron.form.every`),required:!0,errorKey:`everyAmount`,placeholder:T(`cron.form.everyAmountPlaceholder`)})}
                  ${yn(e,`everyUnit`,{label:T(`cron.form.unit`),standalone:!0,options:[{value:`seconds`,label:T(`cron.form.seconds`)},{value:`minutes`,label:T(`cron.form.minutes`)},{value:`hours`,label:T(`cron.form.hours`)},{value:`days`,label:T(`cron.form.days`)}]})}
                </div>
              `}):S}
      ${t.scheduleKind===`cron`?b`
              ${K(e,`cronExpr`,{label:T(`cron.form.expression`),required:!0,errorKey:`cronExpr`,mono:!0,placeholder:T(`cron.form.expressionPlaceholder`)})}
              ${K(e,`cronTz`,{label:T(`cron.form.timezoneOptional`),help:T(`cron.form.timezoneHelp`),list:`cron-tz-suggestions`,placeholder:T(`cron.form.timezonePlaceholder`)})}
            `:S}
      ${o?b` <div class="cron-schedule-summary">${E(`clock`)}<span>${o}</span></div> `:S}
    `)}function Gn(e,t){let n=pn(e);return D({title:T(`cron.detail.deliverySection`)},b`
      ${q(e,`deliveryMode`,{label:T(`cron.form.deliveryModeLabel`),help:T(`cron.form.deliveryHelp`),value:t.selectedDeliveryMode,options:[...t.supportsAnnounce?[{value:`announce`,label:T(`cron.form.announceDefault`)}]:[],{value:`webhook`,label:T(`cron.form.webhookPost`)},{value:`none`,label:T(`cron.form.noneInternal`)}]})}
      ${t.selectedDeliveryMode===`announce`?b`
              ${q(e,`deliveryChannel`,{label:T(`cron.form.channel`),help:T(`cron.form.channelHelp`),value:e.form.deliveryChannel||`last`,options:n,channel:!0})}
              ${K(e,`deliveryTo`,{label:T(`cron.form.to`),help:T(`cron.form.toHelp`),list:`cron-delivery-to-suggestions`,placeholder:T(`cron.form.toPlaceholder`)})}
            `:S}
      ${t.selectedDeliveryMode===`webhook`?K(e,`deliveryTo`,{label:T(`cron.form.webhookUrl`),required:!0,help:T(`cron.form.webhookHelp`),errorKey:`deliveryTo`,list:`cron-delivery-to-suggestions`,placeholder:T(`cron.form.webhookPlaceholder`)}):S}
    `)}function Kn(e,t){let n=e.form.scheduleKind===`cron`,r=pn(e);return b`
    <section class="settings-section">
      <details class="cron-advanced">
        <summary class="settings-section__heading cron-advanced__summary">
          ${T(`cron.form.advanced`)}
          ${e.form.triggerEnabled?b`<span class="cron-trigger-summary">
                  ${E(`gitBranch`)} ${T(`cron.form.triggerConfigured`)}
                </span>`:S}
        </summary>
        <p class="settings-section__desc">${T(`cron.form.advancedHelp`)}</p>
        <div class="settings-group">
          ${qn(e)}
          ${K(e,`description`,{label:T(`cron.form.description`),placeholder:T(`cron.form.descriptionPlaceholder`)})}
          ${t.mode===`create`?J(e,`enabled`,{label:T(`cron.form.startEnabled`)}):S}
          ${q(e,`wakeMode`,{label:T(`cron.form.wakeMode`),help:T(`cron.form.wakeModeHelp`),options:[{value:`now`,label:T(`cron.form.now`)},{value:`next-heartbeat`,label:T(`cron.form.nextHeartbeat`)}]})}
          ${t.isAgentTurn?K(e,`timeoutSeconds`,{label:T(`cron.form.timeoutSeconds`),help:T(`cron.form.timeoutHelp`),errorKey:`timeoutSeconds`,placeholder:T(`cron.form.timeoutPlaceholder`)}):S}
          ${e.form.scheduleKind===`at`||e.form.scheduleKind===`on-exit`?J(e,`deleteAfterRun`,{label:T(`cron.form.deleteAfterRun`),help:T(`cron.form.deleteAfterRunHelp`)}):S}
          ${J(e,`clearAgent`,{label:T(`cron.form.clearAgentOverride`),help:T(`cron.form.clearAgentHelp`)})}
          ${W({label:T(`cron.form.sessionKey`),controlId:`cron-session-key`,help:T(`cron.form.sessionKeyHelp`),control:b`
              <input
                id="cron-session-key"
                class="settings-input"
                .value=${e.form.sessionKey}
                placeholder="agent:main:main"
                @input=${t=>e.onFormChange({sessionKey:t.target.value})}
              />
            `})}
          ${n?b`
                  ${J(e,`scheduleExact`,{label:T(`cron.form.exactTiming`),help:T(`cron.form.exactTimingHelp`)})}
                  ${W({label:T(`cron.form.staggerWindow`),controlId:`cron-stagger-amount`,error:e.fieldErrors.staggerAmount,errorId:H(`staggerAmount`),control:b`
                      <div class="cron-inline-controls">
                        ${G(e,`staggerAmount`,{label:T(`cron.form.staggerWindow`),disabled:e.form.scheduleExact,errorKey:`staggerAmount`,placeholder:T(`cron.form.staggerPlaceholder`)})}
                        ${yn(e,`staggerUnit`,{label:T(`cron.form.staggerUnit`),standalone:!0,disabled:e.form.scheduleExact,options:[{value:`seconds`,label:T(`cron.form.seconds`)},{value:`minutes`,label:T(`cron.form.minutes`)}]})}
                      </div>
                    `})}
                `:S}
          ${t.isAgentTurn?b`
                  ${W({label:T(`cron.form.accountId`),controlId:`cron-delivery-account-id`,help:T(`cron.form.accountIdHelp`),control:b`
                      <input
                        id="cron-delivery-account-id"
                        class="settings-input"
                        .value=${e.form.deliveryAccountId}
                        list="cron-delivery-account-suggestions"
                        ?disabled=${t.selectedDeliveryMode!==`announce`}
                        placeholder="default"
                        @input=${t=>e.onFormChange({deliveryAccountId:t.target.value})}
                      />
                    `})}
                  ${J(e,`payloadLightContext`,{label:T(`cron.form.lightContext`),help:T(`cron.form.lightContextHelp`)})}
                  ${Jn(e,r)}
                `:S}
          ${t.selectedDeliveryMode===`none`?S:J(e,`deliveryBestEffort`,{label:T(`cron.form.bestEffortDelivery`),help:T(`cron.form.bestEffortHelp`)})}
        </div>
      </details>
    </section>
  `}function qn(e){let t=e.form.payloadKind===`script`;return!t&&e.status===null?S:e.status?.triggersEnabled!==!0||t?Ie({title:T(`cron.form.conditionTrigger`),description:t?T(`cron.errors.triggerScriptPayloadUnsupported`):e.form.triggerEnabled?T(`cron.form.triggerDisabledConfigured`):T(`cron.form.triggerDisabled`),control:e.form.triggerEnabled?b`<button
            type="button"
            class="btn btn--sm"
            @click=${()=>e.onFormChange({triggerEnabled:!1})}
          >
            ${T(`cron.form.clearTrigger`)}
          </button>`:S}):b`
    ${J(e,`triggerEnabled`,{label:T(`cron.form.conditionTrigger`),help:T(`cron.form.conditionTriggerHelp`)})}
    ${e.form.triggerEnabled?b`
            ${W({label:T(`cron.form.triggerScript`),controlId:`cron-trigger-script`,required:!0,help:T(`cron.form.triggerScriptHelp`),error:e.fieldErrors.triggerScript,errorId:H(`triggerScript`),stacked:!0,wide:!0,control:b`<textarea
                id="cron-trigger-script"
                class="settings-input cron-trigger-script mono"
                rows="8"
                spellcheck="false"
                aria-invalid=${e.fieldErrors.triggerScript?`true`:`false`}
                aria-describedby=${C(e.fieldErrors.triggerScript?H(`triggerScript`):void 0)}
                .value=${e.form.triggerScript}
                @input=${t=>{let n=t.currentTarget;n instanceof HTMLTextAreaElement&&e.onFormChange({triggerScript:n.value})}}
              ></textarea>`})}
            ${J(e,`triggerOnce`,{label:T(`cron.form.triggerOnce`),help:T(`cron.form.triggerOnceHelp`)})}
          `:S}
  `}function Jn(e,t){return b`
    ${q(e,`failureAlertMode`,{label:T(`cron.form.failureAlerts`),help:T(`cron.form.failureAlertsHelp`),options:[{value:`inherit`,label:T(`cron.form.failureAlertInherit`)},{value:`disabled`,label:T(`cron.form.failureAlertDisabled`)},{value:`custom`,label:T(`cron.form.failureAlertCustom`)}]})}
    ${e.form.failureAlertMode===`custom`?b`
            ${K(e,`failureAlertAfter`,{label:T(`cron.form.failureAlertAfter`),help:T(`cron.form.failureAlertAfterHelp`),errorKey:`failureAlertAfter`,placeholder:T(`cron.form.failureAlertInherit`)})}
            ${K(e,`failureAlertCooldownSeconds`,{label:T(`cron.form.failureAlertCooldown`),help:T(`cron.form.failureAlertCooldownHelp`),errorKey:`failureAlertCooldownSeconds`,placeholder:T(`cron.form.failureAlertInherit`)})}
            ${q(e,`failureAlertChannel`,{label:T(`cron.form.failureAlertChannel`),value:e.form.failureAlertChannel||`last`,options:t,channel:!0})}
            ${K(e,`failureAlertTo`,{label:T(`cron.form.failureAlertTo`),help:T(`cron.form.failureAlertToHelp`),list:`cron-delivery-to-suggestions`,placeholder:T(`cron.form.failureAlertToPlaceholder`)})}
            ${q(e,`failureAlertDeliveryMode`,{label:T(`cron.form.failureAlertMode`),options:[{value:``,label:T(`cron.form.failureAlertInherit`)},{value:`announce`,label:T(`cron.form.failureAlertAnnounce`)},{value:`webhook`,label:T(`cron.form.failureAlertWebhook`)}]})}
            ${K(e,`failureAlertAccountId`,{label:T(`cron.form.failureAlertAccountId`),placeholder:T(`cron.form.failureAlertAccountPlaceholder`)})}
          `:S}
  `}var Q,Yn,Xn,Zn;function Qn(){return(Qn=e((()=>{a(),y(),pe(),he(),ve(),De(),xt(),jt(),ke(),st(),kt(),pt(),Ct(),Ae(),at(),yt(),j(),w(),ot(),g(),ce(),Nt(),qt(),Qt(),fn(),Q={name:`cron.form.fieldName`,scheduleAt:`cron.form.runAt`,everyAmount:`cron.form.every`,cronExpr:`cron.form.expression`,staggerAmount:`cron.form.staggerWindow`,triggerScript:`cron.form.triggerScript`,payloadText:`cron.form.assistantTaskPrompt`,payloadModel:`cron.form.model`,payloadThinking:`cron.form.thinking`,timeoutSeconds:`cron.form.timeoutSeconds`,deliveryTo:`cron.form.to`,failureAlertAfter:`cron.form.failureAlertAfter`,failureAlertCooldownSeconds:`cron.form.failureAlertCooldown`},Yn=[{value:`all`,labelKey:`cron.tabs.all`},{value:`enabled`,labelKey:`cron.tabs.active`},{value:`disabled`,labelKey:`cron.tabs.paused`}],Xn={all:`cron.jobs.all`,at:`cron.form.at`,every:`cron.form.every`,cron:`cron.form.cronOption`,"on-exit":`cron.form.repeatOnExit`,stream:`cron.form.repeatStream`},Zn={script:`javascript`,command:`bash`,heartbeat:``,systemEvent:``,agentTurn:``}})))()}var $,$n;function er(){return(er=e((()=>{r(),y(),fe(),be(),Se(),we(),Ft(),mt(),j(),Dt(),w(),te(),ze(),g(),de(),gt(),le(),ee(),Ut(),N(),Qn(),$=class extends f{constructor(...e){super(...e),this.routeSearch=``,this.cron=We(),this.agentsList=null,this.cronModelSuggestions=[],this.modelSuggestionsError=null,this.listTab=`tasks`,this.detailTab=`settings`,this.heartbeatScratch=``,this.pendingRouteData=null,this.routeJobState=null,this.highlightedRunId=null,this.pendingRunScroll=!1,this.modelSuggestionsRequest=null,this.heartbeatScratchRequest=0,this.pageHidden=document.visibilityState===`hidden`,this.gateway=new _t(this,{getGateway:()=>this.context?.gateway,invalidateRequests:e=>this.resetGatewayState(e.snapshot),onSnapshot:e=>{e.initial?this.resetGatewayState(e.snapshot):xe(e.snapshot).canAdmin||this.clearHeartbeatScratch()},ensureInitialData:()=>this.ensureInitialData(),onPageActivation:()=>{let e=document.visibilityState===`hidden`,t=this.pageHidden&&!e;this.pageHidden=e,t&&this.ensureInitialData(!0)}}),this.observeAgentScope=Qe(e=>{this.pendingRouteData=null,this.resetGatewayState(this.context.gateway.snapshot),this.cron.cronAgentId=e,this.listTab=`tasks`,this.detailTab=`settings`,this.ensureInitialData(),this.requestUpdate()}),this.subscriptions=new p(this).watch(()=>this.context?.agents,(e,t)=>e.subscribe(t),()=>this.syncAgentsState()).watch(()=>this.context?.channels,(e,t)=>e.subscribe(t)).watch(()=>this.context?.runtimeConfig,(e,t)=>e.subscribe(t)).effect(()=>this.context?.agentSelection,e=>this.observeAgentScope(e)).effect(()=>this.context?.gateway,e=>e.subscribeEvents(t=>{this.gateway.gateway===e&&this.context.gateway===e&&this.gateway.connected&&this.gateway.client&&(t.event===`cron`?this.refreshCron({tableFilters:!0,coalesce:!0}):(t.event===`config.changed`||t.event===`chat.metadata.changed`)&&this.loadModelSuggestions(this.cron))})),this.lastPanelKey=null}get canManageCron(){return xe(this.context.gateway.snapshot).canAdmin}disconnectedCallback(){this.subscriptions.clear(),super.disconnectedCallback()}resetGatewayState(e){this.clearHeartbeatScratch(),He(this.cron);let t=e?.phase===`connected`,n=We({client:e?.client??null,connected:t});n.canRefresh=()=>this.canRefreshCron(n),this.cron=n,this.pageHidden=document.visibilityState===`hidden`,this.cron.cronAgentId=this.context.agentSelection.state.scopeId,this.agentsList=t?this.context.agents.state.agentsList:null,this.cronModelSuggestions=[],this.modelSuggestionsError=null,this.modelSuggestionsRequest=null}syncAgentsState(){this.agentsList=this.context.agents.state.agentsList}canRefreshCron(e=this.cron){return this.isConnected&&this.cron===e&&document.visibilityState!==`hidden`}ensureInitialData(e=!1){!this.canRefreshCron()||!this.cron.connected||!this.cron.client||(!this.agentsList&&!this.context.agents.state.agentsLoading&&this.context.agents.ensureList(),e||!this.cron.cronStatus&&!this.cron.cronLoading?this.refreshCron({tableFilters:!0,coalesce:!0}):!this.cron.cronRuns.length&&!this.cron.cronRunsLoadingMore&&this.loadRuns(this.cron.cronRunsScope===`all`?null:this.cron.cronRunsJobId),this.modelSuggestionsRequest?.state!==this.cron&&this.loadModelSuggestions(this.cron))}requestCronUpdate(e=this.cron){this.cron===e&&this.requestUpdate()}willUpdate(e){if(e.has(`routeSearch`)){this.cron.cronError=null;let e=Wt(this.routeSearch);this.pendingRouteData=e.jobId?e:null,this.routeJobState=null,this.highlightedRunId=null,this.pendingRunScroll=!1}}updated(){let e=this.cron.cronEditingJob?.id??null,t=`${e?`job`:this.cron.cronCreateOpen?`create`:`overview`}:${e??``}`;if(t!==this.lastPanelKey){this.lastPanelKey=t,this.detailTab=e&&this.highlightedRunId?`history`:`settings`;let n=this.closest(`.content`);n instanceof HTMLElement&&typeof n.scrollTo==`function`&&n.scrollTo({top:0})}let n=this.pendingRouteData,r=this.cron.client;if(n&&r&&this.cron.connected&&this.routeJobState!==this.cron&&(this.routeJobState=this.cron,this.runCronTask(async e=>{let t=()=>this.isConnected&&this.cron===e&&this.pendingRouteData===n;try{let e=await r.request(`cron.get`,{id:n.jobId});t()&&this.selectJob(e,n.runId)}catch(n){t()&&(this.pendingRouteData=null,e.cronError=ue(n))}})),this.pendingRunScroll){let e=this.querySelector(`.cron-run-entry--highlighted`);e&&(e.scrollIntoView?.({block:`nearest`}),this.pendingRunScroll=!1)}}async refreshCron(e){let t=this.cron;if(!this.canRefreshCron(t)||!t.connected||!t.client)return;let n=t.cronRunsScope===`job`?t.cronRunsJobId:null;this.loadRuns(n,e.coalesce),this.context.channels.refresh(!1),await Promise.all([this.runCronTask(t=>Ne(t,e)),this.runCronTask(t=>k(t,{tableFilters:e.tableFilters}))])}loadRuns(e,t=!1){return this.runCronTask(n=>M(n,e,{coalesce:t}))}async loadModelSuggestions(e){let t=e.client,n=this.context.agentSelection.state.selectedId;if(!t||!e.connected||!n)return;let r={state:e,agentId:n};this.modelSuggestionsRequest=r;let i=()=>this.cron===e&&this.modelSuggestionsRequest===r&&this.context.agentSelection.state.selectedId===n;try{let e=await t.request(`models.list`,{agentId:n,view:`configured`,preparedOnly:!0});i()&&(this.cronModelSuggestions=e.models.map(e=>e.id),this.modelSuggestionsError=null)}catch(e){i()&&(this.modelSuggestionsError=ue(e))}}async runCronTask(e){let t=this.cron;try{let n=e(t);return this.requestCronUpdate(t),await n}finally{this.requestCronUpdate(t)}}runCronAdminTask(e){this.canManageCron&&this.runCronTask(e)}patchForm(e){this.canManageCron&&(this.cron.cronForm=Re({...this.cron.cronForm,...e},e),this.cron.cronFieldErrors=it(this.cron.cronForm),this.requestCronUpdate())}selectJob(e,t=null){this.clearHeartbeatScratch(),this.pendingRouteData=null,this.highlightedRunId=t,this.pendingRunScroll=!!t,t&&(this.detailTab=`history`),this.cron.cronCreateOpen=!1,ut(this.cron,e),this.requestCronUpdate(),e.payload?.kind===`heartbeat`&&this.loadHeartbeatScratch(this.cron,e.id,this.heartbeatScratchRequest),this.runCronTask(async t=>{A(t,{cronRunsScope:`job`}),t.cronRunsJobId=e.id,await M(t,e.id)})}clearHeartbeatScratch(){this.heartbeatScratchRequest+=1,this.heartbeatScratch=``}async loadHeartbeatScratch(e,t,n){let r=e.client;if(!this.canManageCron||!r||!e.connected)return;let i=this.gateway.capture();if(!i)return;let a=()=>this.cron===e&&this.heartbeatScratchRequest===n&&this.gateway.isCurrent(i)&&this.canManageCron&&e.cronEditingJob?.id===t&&e.cronForm.payloadKind===`heartbeat`;try{let e=await r.request(`cron.scratch.get`,{id:t});a()&&(this.heartbeatScratch=e.scratch?.content??``)}catch(t){a()&&(e.cronError=ue(t),this.requestCronUpdate(e))}}openCreate(e){if(this.canManageCron){if(this.clearHeartbeatScratch(),this.pendingRouteData=null,Ue(this.cron,this.context.agentSelection.state.selectedId),this.cron.cronCreateOpen=!0,e){this.patchForm(e);return}this.requestCronUpdate()}}cloneJob(e){this.canManageCron&&(this.clearHeartbeatScratch(),this.pendingRouteData=null,Ve(this.cron,e),this.cron.cronCreateOpen=!0,this.requestCronUpdate())}async removeJob(e){let t=this.context,n=this.cron,r=this.gateway.capture(),i=this.canManageCron,a=n.cronEditingJob?.id===e.id?n.cronEditingJob:n.cronJobs.find(t=>t.id===e.id&&t.updatedAtMs===e.updatedAtMs);if(!r||!i||!a)return;let o=a.id,s=a.updatedAtMs,c=a.name,l=await ht({title:T(`cron.actions.removeConfirmTitle`,{name:c}),message:T(`cron.actions.removeConfirmMessage`),confirmLabel:T(`cron.actions.remove`),danger:!0}),u=n.cronEditingJob?.id===o?n.cronEditingJob:n.cronJobs.find(e=>e.id===o);!l||this.context!==t||this.cron!==n||!this.gateway.isCurrent(r)||!this.canManageCron||!u||u.updatedAtMs!==s||await this.runCronTask(async e=>{await $e(e,u),e.cronRunsScope===`job`&&e.cronRunsJobId===null&&(A(e,{cronRunsScope:`all`}),await M(e,null))})}closePanel(){this.clearHeartbeatScratch(),this.pendingRouteData=null,Ue(this.cron,this.context.agentSelection.state.selectedId),this.cron.cronCreateOpen=!1,this.requestCronUpdate(),this.runCronTask(async e=>{A(e,{cronRunsScope:`all`}),e.cronRunsJobId=null,await M(e,null)})}submitForm(e={}){this.runCronAdminTask(async t=>{let n=await ct(t);n.saved&&(t.cronEditingJob||(e.runNow&&n.jobId&&await Le(t,n.jobId,`force`),t.cronCreateOpen=!1,t.cronRunsScope===`job`&&(A(t,{cronRunsScope:`all`}),t.cronRunsJobId=null,await M(t,null))))})}render(){let e=this.context.channels.state,t=se(this.context),n=Vt({channels:e,runtimeConfig:this.context.runtimeConfig.state,cron:this.cron,agentsList:this.agentsList,modelSuggestions:this.cronModelSuggestions}),r=this.canManageCron;return b`
      ${Ye({title:Te(`cron`),subtitle:ye(`cron`),actions:Pt({agents:this.agentsList?.agents??[],selection:this.context.agentSelection})})}
      ${Et(bn({basePath:this.context.basePath,agentId:t,loading:this.cron.cronLoading,hasLoaded:this.cron.cronJobsSnapshotRevision!==null,listError:this.cron.cronJobsError,canManage:r,status:this.cron.cronStatus,jobs:this.cron.cronJobs,jobsLoadingMore:this.cron.cronJobsLoadingMore,jobsTotal:this.cron.cronJobsTotal,jobsHasMore:this.cron.cronJobsHasMore,jobsQuery:this.cron.cronJobsQuery,jobsEnabledFilter:this.cron.cronJobsEnabledFilter,jobsScheduleKindFilter:this.cron.cronJobsScheduleKindFilter,jobsLastStatusFilter:this.cron.cronJobsLastStatusFilter,jobsTriggerFilter:this.cron.cronJobsTriggerFilter,jobsSortBy:this.cron.cronJobsSortBy,jobsSortDir:this.cron.cronJobsSortDir,editingJob:this.cron.cronEditingJob,createOpen:this.cron.cronCreateOpen,listTab:this.listTab,detailTab:this.detailTab,error:this.cron.cronError??this.modelSuggestionsError,busy:this.cron.cronBusy,form:this.cron.cronForm,heartbeatScratch:r?this.heartbeatScratch:``,channels:e.channelsSnapshot?.channelMeta?.length?e.channelsSnapshot.channelMeta.map(e=>e.id):e.channelsSnapshot?.channelOrder??[],channelLabels:e.channelsSnapshot?.channelLabels??{},channelMeta:e.channelsSnapshot?.channelMeta??[],runs:this.cron.cronRuns,highlightedRunId:this.highlightedRunId,runsTotal:this.cron.cronRunsTotal,runsHasMore:this.cron.cronRunsHasMore,runsLoadingMore:this.cron.cronRunsLoadingMore,runsStatuses:this.cron.cronRunsStatuses,runsDeliveryStatuses:this.cron.cronRunsDeliveryStatuses,runsQuery:this.cron.cronRunsQuery,runsSortDir:this.cron.cronRunsSortDir,fieldErrors:this.cron.cronFieldErrors,canSubmit:!Fe(this.cron.cronFieldErrors),agentSuggestions:n.agentSuggestions,modelSuggestions:n.modelSuggestions,thinkingSuggestions:Ht,timezoneSuggestions:n.timezoneSuggestions,deliveryToSuggestions:n.deliveryToSuggestions,accountSuggestions:n.accountTargets,onListTabChange:e=>{this.listTab=e},onDetailTabChange:e=>{this.detailTab=e},onFormChange:e=>this.patchForm(e),onRefresh:()=>void this.refreshCron({tableFilters:!0}),onSubmit:()=>this.submitForm(),onSubmitRunNow:()=>this.submitForm({runNow:!0}),onSelectJob:e=>this.selectJob(e),onOpenCreate:e=>this.openCreate(e),onClosePanel:()=>this.closePanel(),onClone:e=>this.cloneJob(e),onToggle:(e,t)=>this.runCronAdminTask(n=>Be(n,e,t)),onRun:(e,t)=>this.runCronAdminTask(n=>Le(n,e.id,t??`force`)),onRemove:e=>void this.removeJob(e),onLoadMoreJobs:()=>void this.runCronTask(e=>k(e,{append:!0,tableFilters:!0})),onJobsFiltersChange:e=>void this.runCronTask(async t=>{rt(t,e),await k(t,{append:!1,tableFilters:!0})}),onJobsFiltersReset:()=>void this.runCronTask(async e=>{rt(e,{cronJobsScheduleKindFilter:`all`,cronJobsLastStatusFilter:`all`,cronJobsTriggerFilter:`all`,cronJobsSortBy:`nextRunAtMs`,cronJobsSortDir:`asc`}),await k(e,{append:!1,tableFilters:!0})}),onLoadMoreRuns:()=>void this.runCronTask(e=>et(e)),onRunsFiltersChange:e=>void this.runCronTask(async t=>{A(t,e),await M(t,t.cronRunsScope===`all`?null:t.cronRunsJobId)}),onNavigateToChat:e=>this.context.navigate(`chat`,oe({context:this.context,face:`chat`,sessionKey:e}).options)}))}
    `}},t([n({context:Ce,subscribe:!0})],$.prototype,`context`,void 0),t([_e({attribute:!1})],$.prototype,`routeSearch`,void 0),t([x()],$.prototype,`cron`,void 0),t([x()],$.prototype,`agentsList`,void 0),t([x()],$.prototype,`cronModelSuggestions`,void 0),t([x()],$.prototype,`modelSuggestionsError`,void 0),t([x()],$.prototype,`listTab`,void 0),t([x()],$.prototype,`detailTab`,void 0),t([x()],$.prototype,`heartbeatScratch`,void 0),$n={header:!0,render:e=>b`<openclaw-cron-page
    .routeSearch=${typeof e==`string`?e:``}
  ></openclaw-cron-page>`},customElements.get(`openclaw-cron-page`)||customElements.define(`openclaw-cron-page`,$)})))()}er();export{$n as cronPageComponent};
//# sourceMappingURL=cron-page-BPYyaUu2.js.map