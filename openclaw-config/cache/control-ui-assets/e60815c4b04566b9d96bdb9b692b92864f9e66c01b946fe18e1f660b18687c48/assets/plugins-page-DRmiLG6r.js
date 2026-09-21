import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Ca as t,Fr as n,L as r,R as i,Zn as a,yn as o}from"./control-ui-foundation-DMb6IeIq.js";import{Gc as s,Gn as c,Hs as l,Jo as u,Kn as ee,Vs as d,Yo as f,ci as te,di as ne,gi as re,hi as ie,li as ae,mi as oe,oi as se,pi as ce,qc as le,qo as p,si as ue,ui as m}from"./control-ui-core-DzidtL-P.js";import{$ as de,K as h,X as g,at as _,l as fe,m as v,p as pe,q as y,s as me,st as he}from"./lit-runtime-vxhGQLC6.js";import{H as ge,U as _e,cr as ve,fn as ye,h as be,hr as xe,m as Se,mr as Ce,nn as we,pn as Te,sn as Ee}from"./control-ui-core-CaKBexnk.js";import{Bt as b,Ft as x,Gt as S,It as De,Nt as Oe,Xt as ke,Yt as Ae,kt as je}from"./control-ui-core-uEI6aN5p.js";import{B as C,I as Me,L as w,R as T}from"./control-ui-boot-shared-nBxCfWV5.js";import{Ar as Ne,Ct as Pe,Jr as Fe,Kr as Ie,Lt as E,Nt as Le,Ot as Re,Rt as ze,St as Be,_t as Ve,bt as He,gt as Ue,jt as We,kt as Ge,qr as Ke,vt as qe,wt as Je,xt as Ye,yt as Xe,zt as D}from"./control-ui-boot-shared-Cyt1Zyts.js";import{N as Ze,Nt as Qe,P as $e,Pt as et}from"./control-ui-boot-chat-pu3gR1ly.js";import{Qs as tt,Zs as nt}from"./control-ui-boot-shared-CH-OC11d.js";import{a as O,c as rt,i as k,n as it,o as at,r as ot,s as st,t as ct}from"./presentation-aT_8EXkt.js";import{f as lt,p as ut}from"./control-ui-boot-chat-CDBbQQw1.js";import{n as dt,t as ft}from"./settings-workspace-IBRfeTG9.js";import{n as pt,t as mt}from"./plugins-hub-header-B1Ape_aE.js";var A;function j(){return(j=e((()=>{A=[`channels`,`providers`,`tools`,`contracts`,`hooks`,`mcpServers`,`cliCommands`,`cliBackends`,`skills`,`dangerousConfigFlags`]})))()}function ht(e,t){return Object.keys(e).every(e=>t.includes(e))}function gt(e){let t=a(e);if(!t||!ht(t,A))return;let n={};for(let e of A){let r=t[e];if(r!==void 0){if(!Array.isArray(r)||!r.every(o))return;n[e]=r}}return n}function _t(e){let t=a(e);if(!t||t.capabilityConsentCode!==`PLUGIN_CAPABILITY_CONSENT_REQUIRED`||!ht(t,[`capabilityConsentCode`,`pluginId`,`reviewToken`,`widened`,`acceptedAt`])||!o(t.pluginId)||!o(t.reviewToken)||t.acceptedAt!==void 0&&!o(t.acceptedAt))return;let n=t.widened===void 0?void 0:gt(t.widened);if(!(t.widened!==void 0&&!n))return{capabilityConsentCode:vt,pluginId:t.pluginId,reviewToken:t.reviewToken,...n?{widened:n}:{},...t.acceptedAt===void 0?{}:{acceptedAt:t.acceptedAt}}}var vt;function yt(){return(yt=e((()=>{j(),vt=`PLUGIN_CAPABILITY_CONSENT_REQUIRED`})))()}function bt(e){let n=a(e);if(!n)return;let r=t(n.ruleId),i=t(n.message),o=n.severity;if(!r||!i||o!==`info`&&o!==`warn`&&o!==`critical`)return;let s=t(n.file),c=t(n.evidence),l=n.line;if(!(n.file!==void 0&&!s||n.evidence!==void 0&&!c||l!==void 0&&(typeof l!=`number`||!Number.isSafeInteger(l)||l<=0)))return{ruleId:r,severity:o,message:i,...s?{file:s}:{},...l===void 0?{}:{line:l},...c?{evidence:c}:{}}}function xt(e){let n=a(e);if(!n)return;let r=t(n.targetName),i=t(n.reason),o=n.targetType,s=n.requestMode;if(n.installPolicyCode!==`install_policy_warning_acknowledgement_required`||!r||!i||o!==`skill`&&o!==`plugin`||s!==`install`&&s!==`update`)return;let c;if(n.findings!==void 0){if(!Array.isArray(n.findings))return;c=[];for(let e of n.findings){let t=bt(e);if(!t)return;c.push(t)}}return{installPolicyCode:St,targetName:r,targetType:o,requestMode:s,reason:i,...c?{findings:c}:{}}}var St;function Ct(){return(Ct=e((()=>{St=`install_policy_warning_acknowledgement_required`})))()}function wt(e,t){return e.request(`plugins.inspect`,{pluginId:t})}function Tt(e){if(e instanceof ye)return _t(e.details)}function Et(){return(Et=e((()=>{yt(),Te()})))()}function Dt(e){let t=e.source===`official`?e.pluginId:e.packageName;return et({title:S(`pluginsPage.installConfirmTitle`,{name:t}),message:S(`pluginsPage.installConfirmMessage`),confirmLabel:S(`pluginsPage.install`)})}function Ot(e){return et({title:S(`pluginsPage.removeConfirmTitle`,{name:e}),message:S(`pluginsPage.removeConfirmMessage`),confirmLabel:S(`pluginsPage.remove`),danger:!0})}function kt(){return(kt=e((()=>{Qe(),b()})))()}function At(e){if(e instanceof ye)return xt(e.details)}function jt(){return(jt=e((()=>{Ct(),Te()})))()}function Mt(e,t){return e?g`<openclaw-tooltip open-on-click .content=${e}>${t}</openclaw-tooltip>`:t}function M(){return(M=e((()=>{h(),Oe()})))()}var N,Nt;function Pt(){return(Pt=e((()=>{ke(),N={pluginConsent:{widenedTitle:`What changed`,widenedDescription:`New since your last acceptance.`,previouslyAccepted:`Previously accepted {date}.`,declaredTitle:`Declared capabilities`,declaredDescription:`From the plugin manifest. OpenClaw validates the plugin against these declarations when it loads.`,declaredEmpty:`No channels, providers, or tools declared in the manifest.`,contracts:`Contracts`,hooks:`Hooks`,runtimeHooks:`Code plugins may register hooks at runtime; their hook names are not declared in the manifest.`,mcpServers:`MCP servers`,cliCommands:`CLI commands`,cliBackends:`CLI backends`,skills:`Skills`,dangerousFlags:`Dangerous config flags`,grantsTitle:`Your grants`,grantsDescription:`Set per plugin in plugins.entries.{id}. Hooks outside these grants are blocked at load.`,promptInjection:`Prompt injection`,conversationAccess:`Conversation access`,allowed:`Allowed`,blocked:`Blocked`,on:`On`,off:`Off`,grantDefault:`(default)`,grantConfigured:`(set in config)`,externalAccessHint:`Off by default for external plugins.`,modelOverrides:`Model overrides`,subagentModelOverrides:`Subagent model overrides`,modelOverride:`Model override: {value}`,allowedModels:`Allowed models: {models}`,allowedCompletionModels:`Completion models: {models}`,authProfileOverride:`Auth profile override: {value}`,agentIdOverride:`Agent ID override: {value}`,noOverrides:`No overrides configured`,loading:`Loading capability details…`,fallback:`Capability details must be available before you can approve this plugin.`,verifiedClean:`Verified clean`,reviewRecommended:`Review recommended`,reviewRequired:`Review required`,trustBlocked:`Blocked`,scanDate:`Scanned {date}`,integrity:`Integrity`,sha256:`SHA-256`,commit:`Commit`,pinnedArtifact:`Pinned to the exact installed artifact.`,sourceClawHub:`ClawHub`,sourceNpm:`npm`,sourceGit:`Git`,sourcePath:`Local path`,sourceArchive:`Archive`,sourceMarketplace:`Marketplace`,community:`Community`,enableNamed:`Enable {name}`}},Nt=Object.assign(()=>{Ae.pluginConsent=N.pluginConsent},{catalog:N})})))()}function P(e,t,n,r,i=`plugins-tile`){let a=O(e);if(a)return g`<span class=${i}>
      <img src=${a} alt="" loading="lazy" decoding="async" />
    </span>`;if(n)return g`<span class=${i}>
      <img
        class="plugins-icon"
        src=${n}
        alt=""
        loading="lazy"
        decoding="async"
        @error=${r}
      />
    </span>`;let[o,s]=st(e),c=rt(t);return g`<span
    class=${`${i} ${i}--fallback`}
    style=${`--plugins-art-a:${o};--plugins-art-b:${s}`}
    aria-hidden="true"
  >
    ${c?g`<span>${c}</span>`:x.puzzle}
  </span>`}function F(e,t,n=!1){return g`
    <div class="plugins-detail__meta-row ${n?`plugins-consent__row--warning`:``}">
      <span class="plugins-detail__meta-label">${e}</span>
      <span class="plugins-detail__meta-value">${t}</span>
    </div>
  `}function Ft(e){return g`<span class="plugins-consent__items">${e.join(`, `)}</span>`}function It(e,t=!1){return A.flatMap(n=>{let r=e[n];return r?.length&&(t||n!==`dangerousConfigFlags`)?[F(S(Kt[n]),Ft(r),t)]:[]})}function Lt(e){let t=It(e);return g`
    <section class="plugins-consent__section">
      <h3>${S(`pluginConsent.declaredTitle`)}</h3>
      <p class="plugins-consent__description">${S(`pluginConsent.declaredDescription`)}</p>
      ${t.length>0?g`<div class="plugins-consent__rows">${t}</div>`:g`<p class="plugins-consent__hint">${S(`pluginConsent.declaredEmpty`)}</p>`}
      ${e.hooks.length===0?F(S(`pluginConsent.hooks`),S(`pluginConsent.runtimeHooks`)):y}
      ${e.dangerousConfigFlags.length>0?F(S(`pluginConsent.dangerousFlags`),Ft(e.dangerousConfigFlags),!0):y}
    </section>
  `}function Rt(e){if(!e.widened)return y;let t=It(e.widened,!0);return t.length===0?y:g`
    <section class="plugins-consent__section">
      <h3>${S(`pluginConsent.widenedTitle`)}</h3>
      <p class="plugins-consent__description">
        ${S(`pluginConsent.widenedDescription`)}
        ${e.acceptedAt?S(`pluginConsent.previouslyAccepted`,{date:e.acceptedAt}):y}
      </p>
      <div class="plugins-consent__rows">${t}</div>
    </section>
  `}function zt(e,t,n){return`${S(e.effective?t:n)} ${S(e.configured===void 0?`pluginConsent.grantDefault`:`pluginConsent.grantConfigured`)}`}function I(e,t){return t===void 0?void 0:S(e,{value:S(t?`pluginConsent.allowed`:`pluginConsent.blocked`)})}function Bt(e){return[I(`pluginConsent.modelOverride`,e.allowModelOverride),e.allowedModels?.length?S(`pluginConsent.allowedModels`,{models:e.allowedModels.join(`, `)}):void 0,`allowedCompletionModels`in e&&e.allowedCompletionModels?.length?S(`pluginConsent.allowedCompletionModels`,{models:e.allowedCompletionModels.join(`, `)}):void 0,`allowAuthProfileOverride`in e?I(`pluginConsent.authProfileOverride`,e.allowAuthProfileOverride):void 0,`allowAgentIdOverride`in e?I(`pluginConsent.agentIdOverride`,e.allowAgentIdOverride):void 0].filter(Boolean).join(` · `)||S(`pluginConsent.noOverrides`)}function Vt(e,t){let n=e.hooks.allowConversationAccess;return g`
    <section class="plugins-consent__section">
      <h3>${S(`pluginConsent.grantsTitle`)}</h3>
      <p class="plugins-consent__description">${S(`pluginConsent.grantsDescription`)}</p>
      <div class="plugins-consent__rows">
        ${F(S(`pluginConsent.promptInjection`),zt(e.hooks.allowPromptInjection,`pluginConsent.allowed`,`pluginConsent.blocked`))}
        ${F(S(`pluginConsent.conversationAccess`),g`
            ${zt(n,`pluginConsent.on`,`pluginConsent.off`)}
            ${!n.effective&&n.configured===void 0&&t!==`bundled`?g`<span class="plugins-consent__hint">
                    ${S(`pluginConsent.externalAccessHint`)}
                  </span>`:y}
          `)}
        ${e.llm?F(S(`pluginConsent.modelOverrides`),Bt(e.llm)):y}
        ${e.subagent?F(S(`pluginConsent.subagentModelOverrides`),Bt(e.subagent)):y}
      </div>
    </section>
  `}function L(e,t){if(t)return S(`pluginsPage.official`);let n=e&&Object.hasOwn(R,e)?R[e]:void 0;return n?S(n):e??(t===!1?S(`pluginConsent.community`):null)}function Ht(e){return e===`source-linked`?S(`pluginsPage.verifiedSource`):e}function Ut(e){if(!e)return y;let t=e.integrityKind===`sha256`?S(`pluginConsent.sha256`):e.integrityKind===`git-commit`?S(`pluginConsent.commit`):S(`pluginConsent.integrity`);return g`
    <div class="plugins-consent__provenance">
      <span
        >${[S(qt[e.kind]),e.spec??e.packageName].filter(Boolean).join(` · `)}</span
      >
      ${e.integrity?g`<span title=${e.integrity}>
              ${t}: <code>${e.integrity.slice(0,20)}…</code>
            </span>`:y}
    </div>
    ${e.integrity?g`<p class="plugins-consent__hint">${S(`pluginConsent.pinnedArtifact`)}</p>`:y}
  `}function Wt(e){if(!e)return y;let t=S(e.disposition===`clean`?`pluginConsent.verifiedClean`:e.disposition===`review-recommended`?`pluginConsent.reviewRecommended`:e.disposition===`review-required`?`pluginConsent.reviewRequired`:`pluginConsent.trustBlocked`),n=e.disposition===`clean`?`ok`:e.disposition===`blocked`?`danger`:`warn`;return g`
    <section class="plugins-consent__trust">
      ${D({kind:n,label:t})}
      ${e.reasons?.length?g`<ul>
              ${e.reasons.map(e=>g`<li>${e}</li>`)}
            </ul>`:y}
      ${e.checkedAt?g`<p class="plugins-consent__hint">
              ${S(`pluginConsent.scanDate`,{date:e.checkedAt})}
            </p>`:y}
    </section>
  `}function Gt(e){let{consent:t,inspection:n}=e,r=t.details,i=n?.plugin,a=t.fallback,o=n?.source?.packageName??(t.intent.kind===`install`&&t.intent.request.source===`clawhub`?t.intent.request.packageName:null),s=t.pluginId??o??a?.name??`plugin`,c=i?.name??a?.name??s,l=i?.version??a?.version,u=[L(i?.origin,a?.official),o].filter(Boolean).join(` · `),ee=t.intent.kind===`install`?e.busy?S(`pluginsPage.installing`):S(`pluginsPage.installNamed`,{name:c}):e.busy?S(`pluginsPage.working`):S(`pluginConsent.enableNamed`,{name:c}),d=!e.canMutate||e.busy||e.loading||!!e.error||!n,f=g`
    <button
      type="button"
      class="btn primary"
      ?disabled=${d&&!e.mutationBlockedReason}
      aria-disabled=${e.canMutate?y:`true`}
      @click=${()=>{d||e.onConfirm()}}
    >
      ${ee}
    </button>
  `;return g`
    <openclaw-modal-dialog
      label=${c}
      style="--openclaw-modal-width: min(560px, calc(100vw - 32px));"
      @modal-cancel=${e.onCancel}
    >
      <section class="plugins-consent" data-plugin-consent=${t.intent.kind}>
        <header class="plugins-consent__header">
          ${P(s,c,e.iconUrl)}
          <div>
            <div class="plugins-detail__title">
              <h2>${c}</h2>
              ${l?g`<span class="plugins-version">${`v${l}`}</span>`:y}
            </div>
            ${u?g`<p class="plugins-consent__description">${u}</p>`:y}
          </div>
        </header>
        ${e.loading?g`<p class="plugins-consent__hint" role="status">${S(`pluginConsent.loading`)}</p>`:e.error?g`<div class="plugins-consent__error" role="alert">
                  <span>${e.error}</span>
                  <button type="button" class="btn btn--sm" @click=${e.onRetry}>
                    ${S(`pluginsPage.tryAgain`)}
                  </button>
                </div>`:n?g`
                    ${Ut(n.source)} ${Wt(n.trust)}
                    ${r?Rt(r):y}
                    ${Lt(n.declared)}
                    ${Vt(n.grants,i?.origin)}
                  `:g`<p class="plugins-consent__description">${S(`pluginConsent.fallback`)}</p>`}
        <footer class="plugins-consent__actions">
          <button type="button" class="btn" @click=${e.onCancel}>
            ${S(`pluginsPage.cancel`)}
          </button>
          ${Mt(e.mutationBlockedReason,f)}
        </footer>
      </section>
    </openclaw-modal-dialog>
  `}var Kt,qt,R;function Jt(){return(Jt=e((()=>{h(),j(),De(),je(),M(),Je(),b(),Pt(),k(),Nt(),Kt={channels:`pluginsPage.categoryChannels`,providers:`pluginsPage.categoryProviders`,tools:`pluginsPage.categoryTools`,contracts:`pluginConsent.contracts`,hooks:`pluginConsent.hooks`,mcpServers:`pluginConsent.mcpServers`,cliCommands:`pluginConsent.cliCommands`,cliBackends:`pluginConsent.cliBackends`,skills:`pluginConsent.skills`,dangerousConfigFlags:`pluginConsent.dangerousFlags`},qt={bundled:`pluginsPage.included`,"official-catalog":`pluginsPage.official`,clawhub:`pluginConsent.sourceClawHub`,npm:`pluginConsent.sourceNpm`,git:`pluginConsent.sourceGit`,path:`pluginConsent.sourcePath`,archive:`pluginConsent.sourceArchive`,marketplace:`pluginConsent.sourceMarketplace`},R={bundled:`pluginsPage.included`,global:`pluginsPage.global`,workspace:`pluginsPage.workspace`,config:`pluginsPage.config`,official:`pluginsPage.official`}})))()}function Yt(e){switch(e){case`info`:return S(`pluginsPage.policyReviewSeverityInfo`);case`warn`:return S(`pluginsPage.policyReviewSeverityWarn`);case`critical`:return S(`pluginsPage.policyReviewSeverityCritical`)}return e}function Xt(e){switch(e){case`all`:return S(`pluginsPage.filterAll`);case`enabled`:return S(`pluginsPage.enabled`);case`disabled`:return S(`pluginsPage.disabled`);case`issues`:return S(`pluginsPage.filterIssues`);default:return e}}function Zt(e){switch(e){case`work`:return S(`pluginsPage.connectorGroupWork`);case`dev`:return S(`pluginsPage.connectorGroupDev`);case`home`:return S(`pluginsPage.connectorGroupHome`);case`life`:return S(`pluginsPage.connectorGroupLife`);default:return e}}function z(e){return`plugin:${e}`}function Qt(e){return`clawhub:${e}`}function B(e,t,n){return ce(t,e.result?.plugins??[],n)}function V(e,t){return t?!!e.busy[t]:!1}function $t(e){return`connector:${e}`}function H(e){return e.trim().toLocaleLowerCase()}function U(e,t){let n=H(t);return!n||[e.name,e.id,e.packageName,e.description,e.origin,e.category,...e.kind??[]].some(e=>e?.toLocaleLowerCase().includes(n))}function en(e,t){let n=H(t);return!n||[e.id,e.name,S(e.descriptionKey)].some(e=>e.toLocaleLowerCase().includes(n))}function W(e){return e.toSorted((e,t)=>{let n=Number(!!t.featured)-Number(!!e.featured);if(n!==0)return n;if(e.featured&&t.featured){let n=e.featuredAt,r=t.featuredAt;if(n!==void 0||r!==void 0){if(n===void 0)return 1;if(r===void 0)return-1;if(n!==r)return r-n}}return(e.order??2**53-1)-(t.order??2**53-1)||e.name.localeCompare(t.name)})}function tn(e,t=``,n=`all`){return W(e.filter(e=>{if(!e.installed||!U(e,t))return!1;switch(n){case`enabled`:return e.enabled&&e.state!==`error`;case`disabled`:return!e.enabled&&e.state!==`error`;case`issues`:return e.state===`error`;default:return!0}}))}function nn(e){let t=new Map;for(let n of e){let e=n.category??`other`,r=t.get(e)??[];r.push(n),t.set(e,r)}let n=e=>{let t=ot.indexOf(e);return t===-1?ot.length:t};return[...t.entries()].map(([e,t])=>({category:e,label:at(e),plugins:t})).toSorted((e,t)=>n(e.category)-n(t.category))}function rn(e,t=``){let n=W(e.filter(e=>e.featured&&U(e,t))),r=new Set(n.map(e=>e.id));return{featured:n,official:W(e.filter(e=>!r.has(e.id)&&e.origin===`official`&&!e.installed&&U(e,t))),connectors:it.filter(e=>en(e,t))}}function an(e){switch(e.state){case`enabled`:return S(`pluginsPage.enabled`);case`disabled`:return S(`pluginsPage.disabled`);case`error`:return S(`pluginsPage.needsAttention`);case`not-installed`:return S(`pluginsPage.available`);default:return e.state}}function on(e){let t=e.state===`enabled`?`ok`:e.state===`error`?`danger`:`muted`;return D({kind:t,label:an(e)})}function sn(e){return e.state===`error`?on(e):y}function cn(e,t,n){n&&e.onInstall(t,n)}function G(e){let t=e.filter(e=>e!==y&&e!==``);return t.length===0?y:g`<span class="settings-row__desc plugins-meta">
    ${t.map((e,t)=>g`${t>0?g`<span aria-hidden="true"> · </span>`:y}${e}`)}
  </span>`}function K(e,t,n,r,i){let a=t?e:i??e,o=t??(i?r.messages[i]:void 0);if(!o)return y;if(o.installPolicyWarning){let{details:e,request:t}=o.installPolicyWarning,s=e.findings??[],c=s.length===0?S(`pluginsPage.policyReviewBodyReason`,{reason:u(e.reason)}):S(`pluginsPage.policyReviewBodyKnown`,{count:String(s.length)});return g`
      <div
        class="plugins-row-message plugins-row-message--warning plugins-policy-review"
        role="alert"
      >
        <div class="plugins-policy-review__header">
          <span class="plugins-policy-review__icon" aria-hidden="true">
            ${x.alertTriangle}
          </span>
          <div>
            <strong>${S(`pluginsPage.policyReviewTitle`)}</strong>
            ${s.length>0?g`<span class="plugins-policy-review__reason"
                    >${u(e.reason)}</span
                  >`:y}
            <span>${c}</span>
          </div>
        </div>
        ${s.length>0?g`
                <section class="plugins-policy-review__findings-panel">
                  <strong class="plugins-policy-review__findings-heading"
                    >${S(`pluginsPage.policyReviewFindings`)}</strong
                  >
                  <ul class="plugins-policy-review__findings">
                    ${s.map(e=>g`
                        <li>
                          <span class="plugins-policy-review__finding-content">
                            <span
                              class="plugins-policy-review__severity plugins-policy-review__severity--${e.severity}"
                              >${Yt(e.severity)}</span
                            >
                            <span>${u(e.message)}</span>
                          </span>
                        </li>
                      `)}
                  </ul>
                </section>
              `:y}
        ${s.length>0?g`
                <details class="plugins-policy-review__details">
                  <summary>
                    <span class="plugins-policy-review__details-chevron" aria-hidden="true"
                      >${x.chevronRight}</span
                    >
                    <span>${S(`pluginsPage.policyReviewTechnicalDetails`)}</span>
                  </summary>
                  <div class="plugins-policy-review__details-body">
                    <ul>
                      ${s.map(e=>g`
                          <li>
                            <code>${e.ruleId}</code>
                            ${e.file?g`<code
                                    >${e.file}${e.line?`:${e.line}`:``}</code
                                  >`:y}
                            ${e.evidence?g`<span>${e.evidence}</span>`:y}
                          </li>
                        `)}
                    </ul>
                  </div>
                </details>
              `:y}
        <p class="plugins-policy-review__scope">${S(`pluginsPage.policyReviewScope`)}</p>
        <div class="plugins-policy-review__actions">
          <button
            type="button"
            class="btn btn--sm"
            ?disabled=${n}
            @click=${()=>r.onDismissMessage(a)}
          >
            ${S(`pluginsPage.cancel`)}
          </button>
          ${q(r,{busy:n,className:`btn btn--sm danger`,label:S(n?`pluginsPage.installing`:`pluginsPage.installAnyway`),onClick:()=>cn(r,{...t,acknowledgeInstallPolicyWarning:!0},i)})}
        </div>
      </div>
    `}let s=o.kind===`error`?`alert`:`status`;return g`
    <div class="plugins-row-message plugins-row-message--${o.kind}" role=${s}>
      <span>${o.text}</span>
    </div>
  `}function ln(e){return!!e.target?.closest(`button, a, input, label, form, summary, .plugins-policy-review, [role='menu']`)}function q(e,t){let n=e.mutationBlockedReason;return Mt(n,g`
    <button
      type="button"
      class=${t.className}
      aria-label=${t.ariaLabel??y}
      title=${n?y:t.title??y}
      ?disabled=${!n&&(!e.canMutate||t.busy)}
      aria-disabled=${e.canMutate?y:`true`}
      @click=${n=>{t.stopPropagation&&n.stopPropagation(),!(!e.canMutate||t.busy)&&t.onClick()}}
    >
      ${t.label}
    </button>
  `)}function J(e,t,n){let r=!n.enabled;return q(e,{busy:t,className:n.className??`btn btn--sm`,label:S(t?`pluginsPage.working`:r?`pluginsPage.enableAction`:`pluginsPage.disableAction`),onClick:()=>n.onToggle(r),stopPropagation:!0})}function un(e,t,n,r){let i=S(`pluginsPage.removeNamed`,{name:n});return q(e,{busy:t,className:`btn btn--sm btn--icon plugins-remove`,label:x.trash,onClick:r,ariaLabel:i,title:i,stopPropagation:!0})}function Y(e,t,n,r,i){return e.messages[i]?.installPolicyWarning?y:q(e,{busy:t,className:`btn btn--sm plugins-install`,label:S(t?`pluginsPage.installing`:`pluginsPage.install`),onClick:()=>e.onInstall(r,i),ariaLabel:S(`pluginsPage.installNamed`,{name:n}),stopPropagation:!0})}function dn(e,t,n,r){if(!e.installed){let r=e.install;return r?Y(t,n,e.name,r,B(t,r)):g`<span class="plugins-action-note">${S(`pluginsPage.unavailable`)}</span>`}return g`
    ${J(t,n,{enabled:e.enabled,onToggle:n=>t.onSetEnabled(e.id,n,r)})}
    ${e.removable?un(t,n,e.name,()=>t.onUninstall(e.id,r)):y}
  `}function fn(e){let t=(e.result?.plugins??[]).filter(e=>e.installed),n=t.filter(e=>e.state===`error`).length,r=t.filter(e=>e.enabled&&e.state!==`error`).length,i={all:t.length,enabled:r,disabled:t.length-r-n,issues:n};return ze({value:e.installedFilter,ariaLabel:S(`pluginsPage.filterLabel`),options:Dn.map(e=>({value:e,label:g`${Xt(e)} <span class="settings-count">${i[e]}</span>`})),onChange:t=>e.onFilterChange(t)})}function pn(e){return g`
    <h3 class="settings-row__title">
      ${e.onShowDetails?g`
              <button
                type="button"
                class="plugins-item__detail-button"
                aria-label=${e.name}
                @click=${t=>{t.stopPropagation(),e.onShowDetails?.()}}
              >
                ${e.content}
              </button>
            `:e.content}
    </h3>
  `}function X(e,t,n=!1){let r=z(e.id),i=e.install?B(t,e.install):void 0,a=t.busy[r]||V(t,i);return g`
    <article
      class="settings-row plugins-item plugins-item--clickable"
      data-plugin-id=${e.id}
      data-plugin-source=${e.origin??`unknown`}
      data-plugin-status=${e.state}
      aria-busy=${a?`true`:`false`}
      @click=${n=>{ln(n)||t.onShowDetails(e.id)}}
    >
      ${P(e.id,e.name,t.iconUrls[e.id],()=>t.onIconError(e.id))}
      <div class="settings-row__text">
        ${pn({name:e.name,content:g`
            ${e.name}
            ${e.version?g`<span class="plugins-version">v${e.version}</span>`:y}
          `,onShowDetails:()=>t.onShowDetails(e.id)})}
        <span class="settings-row__desc">
          ${e.description||S(`pluginsPage.optionalCapability`)}
        </span>
        ${G([e.origin?L(e.origin):y,n&&e.packageName?g`<span class="plugins-meta__mono">${e.packageName}</span>`:y])}
      </div>
      <div class="settings-row__control">
        ${e.installed?sn(e):y}
        ${dn(e,t,a,r)}
      </div>
      ${e.error?g`<div class="plugins-row-message plugins-row-message--error" role="alert">
              ${u(e.error)}
            </div>`:y}
      ${K(r,t.messages[r],a,t,i)}
    </article>
  `}function mn(e){let t=H(e.query),n=e.mcpServers?.filter(e=>!t||e.name.toLocaleLowerCase().includes(t)||e.target.toLocaleLowerCase().includes(t));if(t&&n&&n.length===0)return y;let r=n?n.length===0?Re(S(`pluginsPage.mcpEmpty`)):v(n,e=>e.name,t=>hn(t,e)):We({label:S(`pluginsPage.loading`),rows:2});return E({title:S(`pluginsPage.mcpServersGroup`),...n?{count:n.length}:{},description:S(`pluginsPage.mcpHint`),actions:g`
        <a class="plugins-group__link" href=${e.mcpSettingsHref}
          >${S(`pluginsPage.mcpSettingsLink`)}</a
        >
        ${q(e,{busy:e.mcpBusy,className:`btn btn--sm`,label:g`<span aria-hidden="true">${x.plus}</span> ${S(`mcpServers.add`)}`,onClick:()=>e.onMcpFormToggle(!e.mcpFormOpen)})}
      `},g`
      ${e.mcpFormOpen?$e({busy:e.mcpBusy,disabled:!e.canMutate,blockedReason:e.mutationBlockedReason,onSubmit:e.onMcpAdd,onCancel:()=>e.onMcpFormToggle(!1)}):y}
      ${e.mcpMessage?g`<div
              class="plugins-row-message plugins-row-message--${e.mcpMessage.kind} plugins-group-message"
              role=${e.mcpMessage.kind===`error`?`alert`:`status`}
            >
              <span>${e.mcpMessage.text}</span>
            </div>`:y}
      ${r}
    `)}function hn(e,t){return g`
    <article class="settings-row plugins-item" data-mcp-name=${e.name}>
      ${P(e.name,e.name)}
      <div class="settings-row__text">
        <h3 class="settings-row__title">${e.name}</h3>
        <span class="settings-row__desc plugins-meta__mono">
          ${e.target||S(`mcpServers.missingTransport`)}
        </span>
        ${G([S(`pluginsPage.mcp`),e.transport,e.auth===`oauth`?S(`pluginsPage.oauth`):y])}
      </div>
      <div class="settings-row__control">
        ${J(t,t.mcpBusy,{enabled:e.enabled,onToggle:n=>t.onMcpToggle(e.name,n)})}
        ${un(t,t.mcpBusy,e.name,()=>t.onMcpRemove(e.name))}
      </div>
    </article>
  `}function gn(e){let t=nn(tn(e.result?.plugins??[],e.query,e.installedFilter)),n=!!(e.query||e.installedFilter!==`all`);return g`
    ${t.length===0?Z(S(n?`pluginsPage.noInstalledMatchTitle`:`pluginsPage.noInstalledTitle`),S(n?`pluginsPage.noMatchBody`:`pluginsPage.noInstalledBody`),n?`curious`:`sleepy`):t.map(t=>E({title:t.label,count:t.plugins.length},v(t.plugins,e=>e.id,t=>X(t,e,!0))))}
    ${mn(e)}
  `}function _n(e,t){let n=$t(e.id),r=!!t.busy[n],i=e.action.kind===`mcp`,a=i&&!!t.mcpServers?.some(t=>e.action.kind===`mcp`&&t.name===e.action.mcp.serverName);return g`
    <article
      class="settings-row plugins-item"
      data-connector-id=${e.id}
      aria-busy=${r?`true`:`false`}
    >
      ${P(e.id,e.name)}
      <div class="settings-row__text">
        <h3 class="settings-row__title">${e.name}</h3>
        <span class="settings-row__desc">${S(e.descriptionKey)}</span>
        ${G(i?[S(`pluginsPage.mcp`),S(`pluginsPage.connectorMcpNote`)]:[S(`pluginsPage.connectorClawHubNote`)])}
      </div>
      <div class="settings-row__control">
        ${i?a?D({kind:`ok`,label:S(`pluginsPage.connectorAdded`)}):q(t,{busy:r,className:`btn btn--sm`,label:S(r?`mcpServers.adding`:`pluginsPage.connectorAdd`),onClick:()=>t.onAddConnector(e)}):g`
                <button
                  type="button"
                  class="btn btn--sm"
                  @click=${()=>e.action.kind===`clawhub`&&t.onSearchClawHub(e.action.query)}
                >
                  <span aria-hidden="true">${x.search}</span>
                  ${S(`pluginsPage.connectorSearch`)}
                </button>
              `}
      </div>
      ${K(n,t.messages[n],r,t)}
    </article>
  `}function vn(e,t){return t.length===0?y:E({title:e,count:t.length},t)}function yn(e,t){return t.find(t=>t.installed&&(t.id===e.package.runtimeId||t.packageName===e.package.name||t.install?.source===`clawhub`&&t.install.packageName===e.package.name))}function bn(e,t){let n=e.package,r=yn(e,t.result?.plugins??[]),i=Qt(n.name),a={source:`clawhub`,packageName:n.name},o=B(t,a,n.runtimeId),s=t.busy[i]||V(t,o),c=n.runtimeId??n.name;return g`
    <article
      class="settings-row plugins-item ${r?`plugins-item--clickable`:``}"
      data-package-name=${n.name}
      data-plugin-source="clawhub"
      data-plugin-status=${r?.state??`not-installed`}
      aria-busy=${s?`true`:`false`}
      @click=${e=>{r&&!ln(e)&&t.onShowDetails(r.id)}}
    >
      ${P(c,n.displayName)}
      <div class="settings-row__text">
        ${pn({name:n.displayName,content:g`
            ${n.displayName}
            ${n.latestVersion?g`<span class="plugins-version">v${n.latestVersion}</span>`:y}
          `,onShowDetails:r?()=>t.onShowDetails(r.id):void 0})}
        <span class="settings-row__desc">${n.summary||n.name}</span>
        ${G([n.isOfficial?S(`pluginsPage.official`):y,n.verificationTier?Ht(n.verificationTier):y,typeof n.downloads==`number`?g`<span class="plugins-downloads">
                <span aria-hidden="true">${x.download}</span>
                ${On.format(n.downloads)}
              </span>`:y,n.family===`bundle-plugin`?S(`pluginsPage.bundlePlugin`):S(`pluginsPage.codePlugin`)])}
      </div>
      <div class="settings-row__control">
        ${r?g`${sn(r)}${dn(r,t,s,i)}`:Y(t,s,n.displayName,a,o)}
      </div>
      ${K(i,t.messages[i],s,t,o)}
    </article>
  `}function xn(e){let t=e.query.trim();if(t.length<2)return y;let n;if(e.searchError)n=g`<div class="plugins-search-state plugins-search-state--error" role="alert">
      ${e.searchError}
    </div>`;else{let r=e.searchLoading||!e.searchResults,i=e.searchResults?.length??0;n=g`
      <div
        class=${r?`plugins-search-state`:i===0?`settings-empty`:`sr-only`}
        role="status"
        aria-live="polite"
      >
        ${r?S(`pluginsPage.searching`):i===0?S(`pluginsPage.noClawHubResultsBody`,{query:t}):S(i===1?`pluginsPage.searchResultCountOne`:`pluginsPage.searchResultCount`,{count:String(i)})}
      </div>
      ${r?y:v(e.searchResults??[],e=>e.package.name,t=>bn(t,e))}
    `}return E({title:S(`pluginsPage.fromClawHub`),...e.searchResults?{count:e.searchResults.length}:{},actions:g`
        <a
          class="plugins-group__link"
          href=${ae}
          target=${Ie}
          rel=${Ke()}
        >
          ${S(`pluginsPage.browseClawHub`)}
          <span class="plugins-group__link-icon" aria-hidden="true">${x.externalLink}</span>
        </a>
      `},n)}function Sn(e){let t=rn(e.result?.plugins??[],e.query),n=t.featured.map(t=>X(t,e)),r=t.official.map(t=>X(t,e)),i=xn(e);return!n.length&&!r.length&&!t.connectors.length?g`
      ${i===y?Z(S(`pluginsPage.noDiscoverMatchTitle`),S(`pluginsPage.noMatchBody`),`curious`):y}
      ${i}
    `:g`
    ${vn(S(`pluginsPage.featuredGroup`),n)}
    ${vn(S(`pluginsPage.officialGroup`),r)}
    ${Cn(t.connectors,e)} ${i}
  `}function Cn(e,t){if(e.length===0)return y;let n=ct.map(t=>({group:t,entries:e.filter(e=>e.group===t)})).filter(e=>e.entries.length>0);return E({title:S(`pluginsPage.connectorsGroup`),count:e.length,description:S(`pluginsPage.connectorsHint`)},n.map(e=>g`
        <h3 class="plugins-subheader" data-connector-group=${e.group}>
          ${Zt(e.group)}
        </h3>
        ${e.entries.map(e=>_n(e,t))}
      `))}function wn(e){let t=e.detailPluginId?e.result?.plugins.find(t=>t.id===e.detailPluginId):void 0;if(!t)return y;let n=z(t.id),r=t.install?B(e,t.install):void 0,i=e.busy[n]||V(e,r);return g`
    <openclaw-modal-dialog
      label=${t.name}
      style="--openclaw-modal-width: min(580px, calc(100vw - 32px));"
      @modal-cancel=${()=>e.onShowDetails(null)}
    >
      <section class="plugins-detail" data-detail-plugin-id=${t.id}>
        <button
          type="button"
          class="btn btn--sm btn--icon plugins-detail__close"
          aria-label=${S(`pluginsPage.detailClose`)}
          @click=${()=>e.onShowDetails(null)}
        >
          ${x.x}
        </button>
        ${P(t.id,t.name,e.iconUrls[t.id],()=>e.onIconError(t.id),`plugins-cover`)}
        <div class="plugins-detail__body">
          <div class="plugins-detail__title">
            <h2>${t.name}</h2>
            ${t.version?g`<span class="plugins-version">v${t.version}</span>`:y}
            ${on(t)}
          </div>
          <p class="plugins-detail__description">
            ${t.description||S(`pluginsPage.optionalCapability`)}
          </p>
          <div class="plugins-detail__actions">
            ${t.installed?J(e,i,{enabled:t.enabled,onToggle:r=>e.onSetEnabled(t.id,r,n),className:`btn ${t.enabled?``:`primary`}`}):t.install?Y(e,i,t.name,t.install,B(e,t.install)):y}
            ${t.removable?q(e,{busy:i,className:`btn plugins-detail__remove`,label:g`<span aria-hidden="true">${x.trash}</span> ${S(`pluginsPage.remove`)}`,onClick:()=>e.onUninstall(t.id,n)}):y}
          </div>
          ${t.error?g`<div class="plugins-row-message plugins-row-message--error" role="alert">
                  ${u(t.error)}
                </div>`:y}
          ${K(n,e.messages[n],i,e,r)}
          <div class="plugins-detail__meta">
            ${t.origin?F(S(`pluginsPage.detailOrigin`),L(t.origin)):y}
            ${t.category?F(S(`pluginsPage.detailCategory`),at(t.category)):y}
            ${t.packageName?F(S(`pluginsPage.detailPackage`),g`<code>${t.packageName}</code>`):y}
            ${F(S(`pluginsPage.detailPluginId`),g`<code>${t.id}</code>`)}
          </div>
          ${t.installed?g`<section class="plugins-detail__capabilities">
                  <h3>${S(`pluginsPage.capabilities`)}</h3>
                  ${e.detailInspectionError?g`<div class="plugins-consent__error" role="alert">
                          <span>${e.detailInspectionError}</span>
                          <button
                            type="button"
                            class="btn btn--sm"
                            @click=${()=>e.onShowDetails(t.id)}
                          >
                            ${S(`pluginsPage.tryAgain`)}
                          </button>
                        </div>`:e.detailInspection?g`
                            ${Lt(e.detailInspection.declared)}
                            ${Vt(e.detailInspection.grants,e.detailInspection.plugin.origin)}
                          `:g`<p class="plugins-consent__hint">${S(`pluginConsent.loading`)}</p>`}
                </section>`:y}
        </div>
      </section>
    </openclaw-modal-dialog>
  `}function Z(e,t,n){return g`
    <div class="plugins-empty">
      <!-- Sleepy marks truly empty inventory; curious marks a filter/search miss. -->
      ${n?g`<openclaw-mascot
              class="plugins-empty__mascot"
              .mood=${n}
              .size=${84}
            ></openclaw-mascot>`:g`<span class="plugins-empty__icon" aria-hidden="true">${x.puzzle}</span>`}
      <h2>${e}</h2>
      <p>${t}</p>
    </div>
  `}function Tn(e){switch(e.activeTab){case`installed`:return gn(e);case`discover`:return Sn(e);default:return e.activeTab}}function En(e){let t=!!e.result,n=e.loading&&!t?`loading`:e.error&&!t?`error`:!e.connected&&!t?`offline`:`content`;return Le(g`
      <div class="plugins-toolbar">
        <input
          id="plugins-global-search"
          class="settings-input plugins-toolbar__search"
          name="plugins-search"
          type="search"
          autocomplete="off"
          aria-label=${S(`pluginsPage.searchLabel`)}
          .value=${fe(e.query)}
          placeholder=${S(`pluginsPage.searchPlaceholder`)}
          @input=${t=>e.onQueryChange(t.currentTarget.value)}
        />
        ${e.activeTab===`installed`&&n===`content`?fn(e):y}
        <button
          type="button"
          class="btn btn--sm btn--icon plugins-refresh"
          aria-label=${S(`pluginsPage.refresh`)}
          title=${S(`pluginsPage.refresh`)}
          ?disabled=${e.loading||!e.connected}
          @click=${e.onRefresh}
        >
          <span aria-hidden="true">${x.refresh}</span>
        </button>
      </div>

      ${e.error?g`<div class="plugins-page-error" role="alert">
              <span>${e.error}</span>
              <button type="button" class="btn btn--sm" @click=${e.onRefresh}>
                ${S(`pluginsPage.tryAgain`)}
              </button>
            </div>`:y}
      ${e.pageNotice?g`<div
              class="plugins-row-message plugins-row-message--${e.pageNotice.kind} plugins-page-notice"
              role=${e.pageNotice.kind===`error`?`alert`:`status`}
            >
              <span>${e.pageNotice.text}</span>
            </div>`:y}

      <wa-tab-panel
        id="plugins-hub-panel"
        class="plugins-panel"
        name=${e.activeTab}
        active
        aria-labelledby=${`plugins-tab-${e.activeTab}`}
      >
        ${n===`loading`?Ge(We({label:S(`pluginsPage.loading`)})):n===`error`?y:n===`offline`?Z(S(`pluginsPage.offlineTitle`),S(`pluginsPage.offlineBody`)):Tn(e)}
      </wa-tab-panel>
      ${wn(e)}
      ${e.consent?Gt({consent:e.consent,inspection:e.consentInspection,loading:e.consentInspectionLoading,error:e.consentInspectionError,iconUrl:e.consent.pluginId?e.iconUrls[e.consent.pluginId]:void 0,canMutate:e.canMutate,mutationBlockedReason:e.mutationBlockedReason,busy:!!e.busy[e.consent.intent.kind===`install`?e.consent.intent.installIdentity:e.consent.intent.rowKey],onCancel:e.onCancelConsent,onConfirm:e.onConfirmConsent,onRetry:e.onRetryConsentInspection}):y}
    `,{wide:!0})}var Dn,On;function Q(){return(Q=e((()=>{h(),me(),pe(),De(),Ze(),je(),Ne(),M(),Je(),b(),Fe(),f(),m(),Jt(),k(),Dn=[`all`,`enabled`,`disabled`,`issues`],On=new Intl.NumberFormat(void 0,{notation:`compact`,maximumFractionDigits:1})})))()}function kn(e,t,n){let r=t.restartRequired?`pluginsPage.${e}Restart`:`pluginsPage.${e}Success`,i=`warnings`in t?t.warnings??[]:[];return{kind:`success`,text:[S(r,{name:t.plugin.name}),...i.map(e=>u(e)),n?S(`pluginsPage.configRefreshFailed`,{error:n}):null].filter(Boolean).join(`
`)}}var An;function jn(){return(jn=e((()=>{b(),f(),Et(),m(),jt(),kt(),Q(),An=class{constructor(e){this.host=e,this.consent=null,this.inspection=null,this.inspectionLoading=!1,this.inspectionError=null,this.mutationToken=0,this.mutationTokens=new Map,this.confirmedInstallScopes=new Map}reset(){this.close(),this.mutationTokens.clear(),this.confirmedInstallScopes.clear()}async runMutation(e,t,n,r={},i=t=>{this.host.setMessage(e,{kind:`error`,text:p(t)})}){let a=this.host.gateway.capture();if(!a||!this.host.canMutate()||this.host.isBusy(e)||r.confirm&&(!await r.confirm()||!this.host.gateway.isCurrent(a)||!this.host.canMutate()||this.host.isBusy(e)))return;this.host.clearPageNotice();let o=++this.mutationToken;this.mutationTokens.set(e,o);let s=()=>this.host.gateway.isCurrent(a)&&this.mutationTokens.get(e)===o,c=()=>s()&&this.mutationToken===o;this.host.setBusy(e,!0),r.preserveMessageWhilePending||this.host.setMessage(e,null);try{let e=await oe(this.host.getContext().runtimeConfig,a.client,t,{canDispatch:()=>s()&&this.host.canMutate()});s()&&await n(e.value,e.refreshError,a.client,s,c)}catch(e){s()&&i(e,a)}finally{this.mutationTokens.get(e)===o&&(this.mutationTokens.delete(e),this.host.setBusy(e,!1))}}open(e,t,n){if(!this.host.canMutate())return;let r=this.host.getResult()?.plugins.find(e=>e.id===t);this.host.closeDetails(),this.inspection=null,this.inspectionError=null,this.inspectionLoading=!0,this.consent={intent:e,pluginId:t,fallback:{name:r?.name??t,...r?.version?{version:r.version}:{},...r?.origin===`official`?{official:!0}:{}},...n?{details:n}:{}},this.host.requestUpdate(),this.inspect()}close(){this.consent=null,this.inspection=null,this.inspectionLoading=!1,this.inspectionError=null,this.host.requestUpdate()}async inspect(){let e=this.consent,t=this.host.gateway.capture();if(!(!e?.pluginId||!t)){this.inspectionLoading=!0,this.inspectionError=null,this.host.requestUpdate();try{let n=await wt(t.client,e.pluginId);this.host.gateway.isCurrent(t)&&this.consent===e&&(this.inspection=n)}catch(n){this.host.gateway.isCurrent(t)&&this.consent===e&&(this.inspectionError=p(n))}finally{this.host.gateway.isCurrent(t)&&this.consent===e&&(this.inspectionLoading=!1,this.host.requestUpdate())}}}confirm(){let e=this.consent?.intent,t=this.inspection?.reviewToken;!e||this.inspectionLoading||this.inspectionError||!t||(this.close(),e.kind===`install`?this.install({...e.request,acknowledgeCapabilities:{reviewToken:t}},e.installIdentity):this.updateEnabled(e.pluginId,!0,e.rowKey,{acknowledgeCapabilities:{reviewToken:t}}))}async install(e,t){let n=this.confirmedInstallScopes.get(t);this.confirmedInstallScopes.delete(t);let r=(e.acknowledgeInstallPolicyWarning===!0||e.acknowledgeCapabilities!==void 0)&&n&&this.host.gateway.isCurrent(n);await this.runMutation(t,t=>ne(t,e),async(e,n,r)=>{let i=z(e.plugin.id);this.host.applyMutationResult(e),i!==t&&this.host.setMessage(t,null),this.host.setMessage(i,kn(`installed`,e,n)),await this.host.refreshCatalogAfterMutation(r)},{confirm:r?void 0:()=>Dt(e),preserveMessageWhilePending:e.acknowledgeInstallPolicyWarning===!0},(n,r)=>{let i=Tt(n);if(i){this.confirmedInstallScopes.set(t,r),this.open({kind:`install`,request:e,installIdentity:t},i.pluginId,i);return}let a=At(n);if(a){this.confirmedInstallScopes.set(t,r),this.host.setMessage(t,{kind:`warning`,text:a.reason,installPolicyWarning:{details:a,request:e}});return}this.host.setMessage(t,{kind:`error`,text:p(n)})})}async updateEnabled(e,t,n=z(e),r={}){await this.runMutation(n,n=>ie(n,e,t,r),async(e,r,i,a)=>{this.host.applyMutationResult(e),this.host.setMessage(n,kn(t?`enabled`:`disabled`,e,r)),await this.host.refreshCatalogAfterMutation(i),a()&&!e.restartRequired&&this.host.getContext().gateway.connect()},{},r=>{let i=Tt(r);if(t&&i){this.open({kind:`enable`,pluginId:e,rowKey:n},i.pluginId,i);return}this.host.setMessage(n,{kind:`error`,text:p(r)})})}}})))()}var Mn;function Nn(){return(Nn=e((()=>{Me(),ve(),b(),d(),He(),f(),ee(),Q(),Mn=class{constructor(e){this.host=e,this.servers=null,this.message=null,this.busy=!1,this.busyKey=null,this.formOpen=!1,this.feedbackGeneration=0,this.configTask=new w(e.element,{autoRun:!1,args:()=>[this.host.gateway.connected?this.host.gateway.client:null,this.host.getContext()?.runtimeConfig??null],task:async([e,t])=>!e||!t?T:(await t.refresh(),t.state.lastError),onComplete:()=>{this.syncServers()},onError:()=>{this.syncServers()}}),this.subscriptions=new c(e.element).effect(()=>this.host.getContext()?.runtimeConfig,e=>{this.syncServers();let t=e.subscribe(()=>this.syncServers());return()=>{this.resetFeedback(),t()}})}get refreshError(){let e=this.configTask.status===C.ERROR?p(this.configTask.error):this.configTask.status===C.COMPLETE?this.configTask.value:null;return e?S(`pluginsPage.configRefreshFailed`,{error:e}):null}get viewState(){return{mcpSettingsHref:xe(`mcp`,this.host.getContext()?.basePath??``),mcpServers:this.servers,mcpMessage:this.message,mcpBusy:this.busy,mcpFormOpen:this.formOpen,onAddConnector:e=>void this.addConnector(e),onMcpToggle:(e,t)=>void this.toggleServer(e,t),onMcpRemove:e=>void this.removeServer(e),onMcpFormToggle:e=>{this.formOpen=e,e&&(this.message=null),this.host.element.requestUpdate()},onMcpAdd:e=>void this.addServer(e)}}disconnect(){this.subscriptions.clear()}invalidate(){this.configTask.run([null,this.host.getContext().runtimeConfig])}syncServers(){let e=this.host.getContext()?.runtimeConfig.state.configSnapshot;this.servers=Pe(l(e)),this.host.element.requestUpdate()}resetFeedback(){this.feedbackGeneration+=1,this.busy=!1,this.message=null,this.busyKey&&=(this.host.setRowBusy(this.busyKey,!1),null),this.host.element.requestUpdate()}ensureLoaded(e){e&&this.host.getContext()?.runtimeConfig.ensureLoaded().then(()=>this.syncServers())}pageError(e){let t=[e,this.refreshError].filter(e=>!!e);return t.length>0?t.join(` `):null}async refreshPage(e){await Promise.all([e(),this.refresh()])}async refresh(){let e=this.host.gateway.client;if(!e||!this.host.gateway.connected)return;let t=this.host.getContext().runtimeConfig;await this.configTask.run([e,t])}async addServer(e){let t=e.name.trim();if(!Ue.test(t)){this.message={kind:`error`,text:S(`mcpServers.nameInvalid`)},this.host.element.requestUpdate();return}let n=Ye(e.target,e.transport);if(!n){this.message={kind:`error`,text:S(`mcpServers.targetInvalid`)},this.host.element.requestUpdate();return}await this.mutateServers({buildPatch:e=>Ve(e,t,n),note:`plugins: add MCP server ${t}`,successText:S(`mcpServers.addedSuccess`,{name:t})})&&(this.formOpen=!1,this.host.element.requestUpdate())}async toggleServer(e,t){await this.mutateServers({buildPatch:n=>Xe(n,e,t),note:`plugins: ${t?`enable`:`disable`} MCP server ${e}`,successText:S(t?`mcpServers.enabledSuccess`:`mcpServers.disabledSuccess`,{name:e})})}async removeServer(e){await this.mutateServers({buildPatch:t=>qe(t,e),note:`plugins: remove MCP server ${e}`,successText:S(`mcpServers.removedSuccess`,{name:e})})}async addConnector(e){if(e.action.kind!==`mcp`)return;let t=e.action.mcp,n=$t(e.id),r=t.followUp===`oauth`?S(`pluginsPage.connectorAddedOauth`,{name:e.name,command:`openclaw mcp login ${t.serverName}`}):t.followUp===`endpoint`?S(`pluginsPage.connectorAddedEndpoint`,{name:e.name}):S(`pluginsPage.connectorAddedReady`,{name:e.name});await this.mutateServers({buildPatch:e=>Ve(e,t.serverName,structuredClone(t.config)),note:`plugins: add MCP connector ${t.serverName}`,successText:r,busyKey:n})&&(this.host.setRowMessage(n,{kind:`success`,text:r}),this.message=null,this.host.element.requestUpdate())}async mutateServers(e){if(!this.host.canMutate()||this.busy)return!1;let t=this.feedbackGeneration,n=this.host.getContext().runtimeConfig;this.busy=!0,this.busyKey=e.busyKey??null,e.busyKey&&(this.host.setRowBusy(e.busyKey,!0),this.host.setRowMessage(e.busyKey,null)),this.message=null,this.host.element.requestUpdate();let r=await Be(n,{buildPatch:e.buildPatch,note:e.note});return t===this.feedbackGeneration&&(this.busy=!1,this.busyKey=null,e.busyKey&&this.host.setRowBusy(e.busyKey,!1),r.ok?(this.syncServers(),this.message={kind:`success`,text:e.successText},this.host.element.requestUpdate(),!0):(e.busyKey?this.host.setRowMessage(e.busyKey,{kind:`error`,text:r.error}):this.message={kind:`error`,text:r.error},this.host.element.requestUpdate(),!1))}}})))()}function Pn(e,t){if(!e)return e;let n=e.plugins.findIndex(e=>e.id===t.id),r=[...e.plugins];return n>=0?r[n]=t:r.push(t),{...e,plugins:r}}var $;function Fn(){return(Fn=e((()=>{i(),Me(),h(),de(),ve(),be(),ge(),Ee(),ft(),b(),f(),Et(),m(),tt(),le(),ut(),kt(),jn(),mt(),Nn(),k(),ue(),Q(),$=class extends s{constructor(...e){super(...e),this.result=null,this.error=null,this.activeTab=`installed`,this.query=``,this.installedFilter=`all`,this.debouncedSearchQuery=``,this.busy={},this.messages={},this.detail=null,this.iconUrls={},this.pageNotice=null,this.routeDataConsumed=!1,this.normalizedLocation=``,this.searchTimer=null,this.iconMisses=new Set,this.iconRequests=new Map,this.iconAuthCandidates=[],this.gateway=new nt(this,{getGateway:()=>this.context?.gateway,onIdentityChange:()=>{this.result=null,this.error=null,this.messages={},this.pageNotice=null},invalidateRequests:e=>this.invalidateRequests(e.snapshot.phase!==`connected`||!e.snapshot.client),onSnapshot:e=>this.handleGatewaySnapshot(e)}),this.consentController=new An({gateway:this.gateway,getContext:()=>this.context,getResult:()=>this.result,canMutate:()=>this.canMutate(),isBusy:e=>!!this.busy[e],setBusy:(e,t)=>this.setBusy(e,t),setMessage:(e,t)=>this.setMessage(e,t),clearPageNotice:()=>{this.pageNotice=null},closeDetails:()=>{this.detail=null},applyMutationResult:e=>this.applyMutationResult(e),refreshCatalogAfterMutation:e=>this.refreshCatalogAfterMutation(e),requestUpdate:()=>this.requestUpdate()}),this.catalogTask=new w(this,{autoRun:!1,args:()=>[this.gateway.connected?this.gateway.client:null],task:([e],{signal:t})=>e?e.request(`plugins.list`,{},{signal:t}):T,onComplete:e=>{this.replaceResult(e)},onError:e=>{this.error=p(e)}}),this.mcpController=new Mn({element:this,gateway:this.gateway,getContext:()=>this.context,canMutate:()=>this.canMutate(),setRowBusy:(e,t)=>this.setBusy(e,t),setRowMessage:(e,t)=>this.setMessage(e,t)}),this.searchTask=new w(this,{args:()=>[this.gateway.connected&&this.activeTab===`discover`?this.gateway.client:null,this.debouncedSearchQuery],task:async([e,t],{signal:n})=>!e||t.length<2?T:(await e.request(`plugins.search`,{query:t,limit:20},{signal:n})).results}),this.handleDocumentKeydown=e=>{if(!document.querySelector(`.shell-nav[aria-modal='true']`)&&e.key===`Escape`){if(this.consentController.consent){this.consentController.close(),e.stopPropagation();return}this.detail&&(this.detail=null,e.stopPropagation())}}}willUpdate(e){e.has(`routeData`)&&(this.applyRouteData(),this.syncCanonicalLocation())}connectedCallback(){super.connectedCallback(),document.addEventListener(`keydown`,this.handleDocumentKeydown,!0),this.syncCanonicalLocation()}disconnectedCallback(){document.removeEventListener(`keydown`,this.handleDocumentKeydown,!0),this.mcpController.disconnect(),this.clearSearchTimer(),this.resetPluginIcons(),super.disconnectedCallback()}handleGatewaySnapshot(e){let t=e.snapshot,n=_e({hello:t.hello,settings:{token:this.context.gateway.connection.token},password:this.context.gateway.connection.password}),r=n.length!==this.iconAuthCandidates.length||n.some((e,t)=>e!==this.iconAuthCandidates[t]);this.iconAuthCandidates=n;let i=!e.initial&&(e.identityChanged||e.connectionChanged||r)&&t.phase===`connected`&&this.routeDataConsumed;!e.initial&&r&&!e.identityChanged&&!e.connectionChanged&&(this.gateway.invalidate(),this.invalidateRequests(t.phase!==`connected`||!t.client)),!e.initial&&(e.identityChanged||e.connectionChanged||r)&&(this.resetPluginIcons(),this.busy={},this.mcpController.resetFeedback(),this.debouncedSearchQuery=``),i?this.mcpController.refreshPage(()=>this.refreshCatalog()):this.ensureInitialData(),this.mcpController.ensureLoaded(t.phase===`connected`),!e.initial&&(e.identityChanged||e.connectionChanged||r)&&t.phase===`connected`&&this.activeTab===`discover`&&this.scheduleSearch()}applyRouteData(){let e=this.routeData;if(!e)return;this.routeDataConsumed=!0;let t=te(e.location,this.context.basePath);if(t!==this.activeTab&&this.changeTab(t),!this.gateway.isRouteDataCurrent(e)){this.ensureInitialData();return}this.replaceResult(e.result),this.error=e.error,this.ensureInitialData()}syncCanonicalLocation(){let e=this.context,t=this.routeData?.location;if(!e||!t)return;let n=se(t,e.basePath);if(!n){this.normalizedLocation=``;return}let r=`${t.pathname}${t.search}${t.hash}`;this.normalizedLocation!==r&&(this.normalizedLocation=r,e.replace(`plugins`,n))}invalidateRequests(e=!0){this.clearSearchTimer(),this.debouncedSearchQuery=``,e&&this.catalogTask.run([null]),this.mcpController.invalidate(),this.searchTask.run([null,``]),this.detail=null,this.consentController.reset()}replaceResult(e,t=!1){t?this.reconcilePluginIcons(e):this.resetPluginIcons(),this.result=e,this.syncPluginIcons()}reconcilePluginIcons(e){let t=new Set((e?.plugins??[]).filter(e=>e.hasIcon&&!O(e.id)).map(e=>e.id)),n={...this.iconUrls},r=!1;for(let[e,i]of Object.entries(n))t.has(e)||(URL.revokeObjectURL(i),delete n[e],r=!0);r&&(this.iconUrls=n);for(let[e,n]of this.iconRequests)t.has(e)||(clearTimeout(n.timeout),n.controller.abort(),this.iconRequests.delete(e));for(let e of this.iconMisses)t.has(e)||this.iconMisses.delete(e)}resetPluginIcons(){for(let e of this.iconRequests.values())clearTimeout(e.timeout),e.controller.abort();for(let e of Object.values(this.iconUrls))URL.revokeObjectURL(e);this.iconRequests.clear(),this.iconMisses.clear(),this.iconUrls={}}syncPluginIcons(){for(let e of this.result?.plugins??[])!e.hasIcon||O(e.id)||this.iconUrls[e.id]||this.iconMisses.has(e.id)||this.iconRequests.has(e.id)||this.fetchPluginIcon(e.id)}fetchPluginIcon(e){let t=new AbortController,n=setTimeout(()=>t.abort(new DOMException(`plugin icon fetch timed out`,`TimeoutError`)),1e4),r={controller:t,timeout:n};this.iconRequests.set(e,r),lt({pluginId:e,resourceBasePath:this.context.resourceBasePath,gatewayUrl:this.context.gateway.connection.gatewayUrl,auth:{hello:this.context.gateway.snapshot.hello,settings:{token:this.context.gateway.connection.token},password:this.context.gateway.connection.password},signal:t.signal}).then(t=>{if(this.iconRequests.get(e)!==r||!this.isConnected){t&&URL.revokeObjectURL(t);return}t?this.iconUrls={...this.iconUrls,[e]:t}:this.iconMisses.add(e)}).catch(()=>{this.iconRequests.get(e)===r&&this.iconMisses.add(e)}).finally(()=>{clearTimeout(n),this.iconRequests.get(e)===r&&this.iconRequests.delete(e)})}handlePluginIconError(e){this.invalidatePluginIcon(e),this.iconMisses.add(e)}invalidatePluginIcon(e){let t=this.iconRequests.get(e);t&&(clearTimeout(t.timeout),t.controller.abort(),this.iconRequests.delete(e));let n=this.iconUrls[e];n&&URL.revokeObjectURL(n);let r={...this.iconUrls};delete r[e],this.iconUrls=r,this.iconMisses.delete(e)}clearSearchTimer(){this.searchTimer&&=(clearTimeout(this.searchTimer),null)}get loading(){return this.gateway.connected&&(!this.routeDataConsumed||this.catalogTask.status===C.PENDING)}get searchResults(){return this.searchTask.status===C.COMPLETE&&this.debouncedSearchQuery===this.query.trim()?this.searchTask.value??null:null}get searchLoading(){return this.activeTab===`discover`&&this.debouncedSearchQuery.length>=2&&this.searchTask.status===C.PENDING}get searchError(){return this.searchTask.status===C.ERROR&&this.debouncedSearchQuery===this.query.trim()?p(this.searchTask.error):null}ensureInitialData(){!this.routeDataConsumed||!this.gateway.connected||!this.gateway.client||this.loading||this.result||this.error||this.refreshCatalog()}async refreshCatalog(){let e=this.gateway.client;!e||!this.gateway.connected||(this.error=null,await this.catalogTask.run([e]))}selectHubTab(e){if(e===`installed`||e===`discover`){this.changeTab(e),this.context.navigate(`plugins`,{pathname:Ce(e,this.context.basePath)});return}this.context.navigate(e===`skills`?`skills`:`skill-workshop`)}changeTab(e){this.activeTab=e,this.clearSearchTimer(),this.debouncedSearchQuery=``,this.searchTask.run([null,``]),e===`discover`&&this.scheduleSearch()}changeQuery(e){this.query=e,this.clearSearchTimer(),this.debouncedSearchQuery=``,this.searchTask.run([null,``]),this.activeTab===`discover`&&this.scheduleSearch()}openClawHubSearch(e){this.query=e,this.changeTab(`discover`)}scheduleSearch(){let e=this.query.trim();e.length<2||!this.gateway.connected||!this.gateway.client||(this.searchTimer=setTimeout(()=>{this.searchTimer=null,this.searchClawHub(e)},300))}async searchClawHub(e){let t=this.gateway.client;!t||!this.gateway.connected||e.length<2||(this.debouncedSearchQuery=e,await this.searchTask.run([t,e]))}mutationBlockedReason(){if(!this.gateway.connected)return S(`pluginsPage.connectToChange`);let e=this.context.gateway.snapshot.hello?.auth??null;return we(e)?this.result&&!this.result.mutationAllowed?S(`pluginsPage.changesDisabled`):null:S(`pluginsPage.adminRequired`)}canMutate(){return!!this.result?.mutationAllowed&&this.mutationBlockedReason()===null}setBusy(e,t){let n={...this.busy};t?n[e]=!0:delete n[e],this.busy=n}setMessage(e,t){let n={...this.messages};t?n[e]=t:delete n[e],this.messages=n}applyMutationResult(e){this.invalidatePluginIcon(e.plugin.id),this.replaceResult(Pn(this.result,e.plugin),!0)}async refreshCatalogAfterMutation(e){this.error=null,await this.catalogTask.run([e])}async showDetails(e){let t=e?{pluginId:e,inspection:null,error:null}:null;this.detail=t;let n=e?this.result?.plugins.find(t=>t.id===e):void 0;if(!n?.installed||!t)return;let r=this.gateway.capture();if(r)try{let e=await wt(r.client,n.id);this.gateway.isCurrent(r)&&this.detail===t&&(this.detail={...t,inspection:e})}catch(e){this.gateway.isCurrent(r)&&this.detail===t&&(this.detail={...t,error:p(e)})}}updateEnabled(e,t,n){return this.consentController.updateEnabled(e,t,n)}async uninstall(e,t){let n=this.result?.plugins.find(t=>t.id===e)?.name??e;await this.consentController.runMutation(t,t=>re(t,e),async(e,t,n,r,i)=>{i()&&(this.pageNotice={kind:`success`,text:[S(`pluginsPage.removedRestart`,{name:e.pluginId}),...(e.warnings??[]).map(e=>u(e)),t?S(`pluginsPage.configRefreshFailed`,{error:t}):null].filter(Boolean).join(`
`)}),await this.refreshCatalogAfterMutation(n)},{confirm:()=>Ot(n)})}render(){let e=this.mutationBlockedReason();return g`
      ${pt({active:this.activeTab,onSelect:e=>this.selectHubTab(e)})}
      ${dt(g`
        <openclaw-plugin-manager></openclaw-plugin-manager>
        ${En({connected:this.gateway.connected,loading:this.loading,result:this.result,error:this.mcpController.pageError(this.error),activeTab:this.activeTab,query:this.query,installedFilter:this.installedFilter,searchResults:this.searchResults,searchLoading:this.searchLoading,searchError:this.searchError,busy:this.busy,messages:this.messages,detailPluginId:this.detail?.pluginId??null,detailInspection:this.detail?.inspection??null,detailInspectionError:this.detail?.error??null,consent:this.consentController.consent,consentInspection:this.consentController.inspection,consentInspectionLoading:this.consentController.inspectionLoading,consentInspectionError:this.consentController.inspectionError,iconUrls:this.iconUrls,canMutate:this.canMutate(),mutationBlockedReason:e,pageNotice:this.pageNotice,...this.mcpController.viewState,onQueryChange:e=>this.changeQuery(e),onFilterChange:e=>{this.installedFilter=e},onRefresh:()=>void this.mcpController.refreshPage(()=>this.refreshCatalog()),onIconError:e=>this.handlePluginIconError(e),onShowDetails:e=>void this.showDetails(e),onSetEnabled:(e,t,n)=>void this.updateEnabled(e,t,n),onInstall:(e,t)=>void this.consentController.install(e,t),onCancelConsent:()=>this.consentController.close(),onConfirmConsent:()=>this.consentController.confirm(),onRetryConsentInspection:()=>void this.consentController.inspect(),onDismissMessage:e=>this.setMessage(e,null),onUninstall:(e,t)=>void this.uninstall(e,t),onSearchClawHub:e=>this.openClawHubSearch(e)})}
      `)}
    `}},n([r({context:Se,subscribe:!0})],$.prototype,`context`,void 0),n([he({attribute:!1})],$.prototype,`routeData`,void 0),n([_()],$.prototype,`result`,void 0),n([_()],$.prototype,`error`,void 0),n([_()],$.prototype,`activeTab`,void 0),n([_()],$.prototype,`query`,void 0),n([_()],$.prototype,`installedFilter`,void 0),n([_()],$.prototype,`debouncedSearchQuery`,void 0),n([_()],$.prototype,`busy`,void 0),n([_()],$.prototype,`messages`,void 0),n([_()],$.prototype,`detail`,void 0),n([_()],$.prototype,`iconUrls`,void 0),n([_()],$.prototype,`pageNotice`,void 0),customElements.get(`openclaw-plugins-page`)||customElements.define(`openclaw-plugins-page`,$)})))()}Fn();
//# sourceMappingURL=plugins-page-DRmiLG6r.js.map