const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./channel-avatar-CGdKbKOV.js","./rolldown-runtime-DkW27tQK.js","./control-ui-foundation-DMb6IeIq.js","./control-ui-core-DzidtL-P.js","./lit-runtime-vxhGQLC6.js","./control-ui-core-CaKBexnk.js","./control-ui-core-uEI6aN5p.js","./gateway-runtime-DP4whqrA.js","./control-ui-core-BRgpioGt.css","./control-ui-boot-chat-pu3gR1ly.js","./control-ui-boot-shared-nBxCfWV5.js","./control-ui-boot-shared-gfE6fZcA.js","./markdown-runtime-Bn6OdBVq.js","./control-ui-boot-shared-Cyt1Zyts.js","./control-ui-boot-shared-DW2inEkr.js","./control-ui-boot-shared-BiKnED0X.js","./control-ui-boot-shared-D2DaCK2F.js","./control-ui-boot-shared-mS3IgGsF.js","./control-ui-boot-shared-CH-OC11d.js","./control-ui-boot-shared-CibIhXHx.css","./control-ui-boot-chat-B1e-zt03.js","./config-runtime-Cr2H22l0.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{An as t,bi as n,ir as r,nr as i,wa as a,xi as o}from"./control-ui-foundation-DMb6IeIq.js";import{Ws as s,Ys as c,cc as l,gc as u,ic as d}from"./control-ui-core-DzidtL-P.js";import{J as f,K as p,X as m,q as h,ut as g}from"./lit-runtime-vxhGQLC6.js";import{H as _,U as v,ln as y,un as ee}from"./control-ui-core-CaKBexnk.js";import{Bt as b,Ft as x,Gt as S,It as te,Nt as ne,Ut as C}from"./control-ui-core-uEI6aN5p.js";import{Bn as re,Br as w,Gn as ie,Hr as ae,Un as oe,Ur as T,Vr as se,_a as ce,fa as le,ga as ue,ha as E,ma as D,pa as de,ua as fe,va as O}from"./control-ui-boot-shared-Cyt1Zyts.js";import{A as pe,V as me,c as he,k as ge,l as _e,u as ve,z as ye}from"./control-ui-boot-chat-pu3gR1ly.js";import{as as be,rs as xe}from"./control-ui-boot-shared-CH-OC11d.js";import{v as k,y as A}from"./control-ui-boot-chat-B0K1m2J4.js";import{n as j,r as M,t as Se}from"./portaled-hovercard-BvUPjuCX.js";function N(e){return e.label?.trim()||e.identity.id}function Ce(e,t,n){return e.identity.type===`profile`&&e.identity.id===n||JSON.stringify(e.identity)===JSON.stringify(t?.identity)}function we(){Re??=n(()=>import(`./channel-avatar-CGdKbKOV.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]),import.meta.url)}function Te(e){return S(`sessionHovercard.states.${e}`)}function Ee(e){switch(e.state){case`passing`:return S(`sessionHovercard.checks.passing`);case`failing`:return S(`sessionHovercard.checks.failing`);case`pending`:return S(`sessionHovercard.checks.pending`);default:return e.state}}function De(e){switch(e){case`open`:return x.gitPullRequest;case`draft`:return x.gitPullRequestDraft;case`merged`:return x.gitMerge;case`closed`:return x.gitPullRequestClosed;default:return e}}function P(e){return e.additions===void 0&&e.deletions===void 0?h:m`<span class="session-hovercard__diff">
    ${e.additions===void 0?h:m`<span class="session-hovercard__additions"
            >+${e.additions.toLocaleString()}</span
          >`}
    ${e.deletions===void 0?h:m`<span class="session-hovercard__deletions"
            >−${e.deletions.toLocaleString()}</span
          >`}
  </span>`}function Oe(e){let t=Math.abs(e)/864e5;return t>=365?{value:Math.max(1,Math.round(t/365)),unit:`year`}:t>=28?{value:Math.max(1,Math.round(t/30)),unit:`month`}:t>=7?{value:Math.max(1,Math.round(t/7)),unit:`week`}:t>=1?{value:Math.max(1,Math.round(t)),unit:`day`}:r(Math.abs(e))}function F(e,t){if(typeof e!=`number`||!Number.isFinite(e))return``;let n=e-Date.now(),{value:r,unit:i}=Oe(n);if(t)return i===`second`&&n<=0?S(`common.justNow`):new Intl.RelativeTimeFormat(C.getLocale(),{numeric:`always`,style:`narrow`}).format(n<=0?-r:r,i);if(C.getLocale().toLowerCase().startsWith(`en`)){let e={second:`s`,minute:`m`,hour:`h`,day:`d`,week:`w`,month:`mo`,year:`y`}[i];if(e)return`${r}${e}`}return new Intl.NumberFormat(C.getLocale(),{style:`unit`,unit:i,unitDisplay:`short`,maximumFractionDigits:0}).format(r)}function ke(e,t){let n=e.createdActor,r=n?.label?.trim()||n?.id?.trim(),i=new Set,a=0,o=(e.expandedParticipants??e.participants??[]).filter(e=>{let r=JSON.stringify(e.identity);return!i.has(r)&&(i.add(r),!Ce(e,n,t)||(a+=1,!1))}),s=Math.max(o.length,(e.participantCount??0)-a);if(n&&r)return{creator:n,primaryIdentity:n.identity,primaryLabel:r,participants:o,otherCount:s};let c=o[0];if(c)return{primaryIdentity:c.identity,primaryLabel:N(c),participants:o,otherCount:Math.max(0,s-1)}}function Ae(e,t,n){let r=Math.max(0,t-e.length);return m`<div
    slot="content"
    class="session-hovercard__participant-menu"
    role="list"
    style="min-width: 150px; max-height: min(280px, 60vh); overflow-y: auto;"
    aria-label=${S(`sessionHovercard.moreParticipantsLabel`,{count:String(t)})}
  >
    ${e.map(e=>{let t=N(e),r=e.identity.type===`profile`?E(e.identity.id,n,t):null;return m`<div role="listitem">
        ${O(t,r,`session-menu__item learn-more-link session-hovercard__participant-link`)}
      </div>`})}
    ${r>0?m`<div class="session-hovercard__more" role="listitem">
            ${S(`sessionHovercard.moreParticipantsLabel`,{count:String(r)})}
          </div>`:h}
  </div>`}function je({row:e,selfUserId:t,avatarAuth:n,personActivity:r}){if(!e)return h;let i=ke(e,t);if(!i)return h;let{creator:a,primaryIdentity:o,primaryLabel:s,participants:c,otherCount:l}=i,u=a?void 0:c[0],d=o?.type===`profile`?E(o.id,r,s):null,f=a?le(a):``,p=f?m`<span class="session-hovercard__creator-avatar-fallback" aria-hidden="true"
        >${f}</span
      >`:h;a&&e.channelAvatarUrl&&we();let g=a?e.channelAvatarUrl?m`<openclaw-channel-avatar
          class="session-hovercard__creator-avatar"
          .routeUrl=${e.channelAvatarUrl}
          .authTokens=${n?.authTokens??[]}
          .authReady=${n?.authReady??!1}
          .fallback=${p}
          aria-hidden="true"
        ></openclaw-channel-avatar>`:m`<openclaw-viewer-avatar
          class="session-hovercard__creator-avatar"
          .user=${{id:a.id,name:a.label,avatarUrl:a.avatarUrl,watchedSessions:[]}}
          .markAsViewer=${!1}
          .identity=${a.identity}
          variant="session"
          aria-hidden="true"
        ></openclaw-viewer-avatar>`:u?m`<openclaw-viewer-avatar
          class="session-hovercard__creator-avatar"
          .user=${{id:u.identity.id,name:u.label,avatarUrl:u.avatarUrl,watchedSessions:[]}}
          .markAsViewer=${!1}
          .identity=${u.identity}
          variant="session"
          aria-hidden="true"
        ></openclaw-viewer-avatar>`:h,_=a?c:c.slice(1),v=[s,l>0?S(`sessionHovercard.moreParticipantsLabel`,{count:String(l)}):``].filter(Boolean).join(`, `),y=l>0?S(l===1?`sessionHovercard.attributionOther`:`sessionHovercard.attributionOthers`,{count:String(l)}):``;return m`<div class="session-hovercard__attribution" aria-label=${v}>
    <span class="session-hovercard__attribution-copy">
      ${O(s,d,`session-hovercard__attribution-name`)}
      ${l>0?_.length>0?m`<openclaw-tooltip
                class="session-hovercard__participants-tooltip"
                .describe=${!1}
                open-on-click
              >
                <button
                  type="button"
                  class="session-hovercard__attribution-others"
                  style="padding: 1px 3px; border: 0; border-radius: var(--radius-sm); background: transparent; font: inherit;"
                  aria-label=${S(`sessionHovercard.moreParticipantsLabel`,{count:String(l)})}
                >
                  ${y}
                </button>
                ${Ae(_,l,r)}
              </openclaw-tooltip>`:m`<span class="session-hovercard__attribution-others">${y}</span>`:h}
    </span>
    <span class="session-hovercard__attribution-avatars">
      ${ce(g,d)}
      ${_.length>0?m`<openclaw-viewer-facepile
              .staticParticipants=${_}
              .totalCount=${l}
              .maxVisible=${Math.min(_.length,L)}
              .personActivity=${r}
            ></openclaw-viewer-facepile>`:h}
    </span>
  </div>`}function Me(e){let t=e.row,n=typeof t.createdAt==`number`&&Number.isFinite(t.createdAt),r=n?F(t.createdAt,!0):``,i=n?F(t.createdAt,!1):``;return m`<header class="session-hovercard__header">
    <span class="session-hovercard__heading">
      <span class="session-hovercard__title">${pe(t.color)}${t.label}</span>
      ${je(e)}
    </span>
    ${i?m`<span class="session-hovercard__created-age" title=${r}>${i}</span>`:h}
  </header>`}function I(e){if(!e)return h;let t=S(e.status===`in_progress`?`sessionProgressCard.status.inProgress`:e.status===`paused`?`sessionProgressCard.status.paused`:`sessionProgressCard.status.pending`);return m`<div
    class="session-hovercard__context-row session-hovercard__plan-row"
    aria-label=${S(`sessionProgressCard.stepLabel`,{status:t,step:e.step})}
    title=${e.step}
  >
    <span class="session-hovercard__context-icon" aria-hidden="true"
      >${e.status===`in_progress`?m`<span class="session-run-spinner"></span>`:x.clock}</span
    >
    <span class="session-hovercard__context-value session-hovercard__plan-step"
      >${e.step}</span
    >
    <span class="session-hovercard__plan-count">${e.completed}/${e.total}</span>
  </div>`}function Ne({row:e},t){let n=e?.workContext,r=e?.placementProviderId&&e.placementProfileId?{label:`${e.placementProviderId} · ${e.placementProfileId}`,title:S(`sessionHovercard.runsOn`,{providerId:e.placementProviderId,profileId:e.placementProfileId})}:void 0;return m`<div class="session-hovercard__context">
    ${n?m`<div
            class="session-hovercard__context-row"
            aria-label=${`${S(n.kind===`project`?`sessionHovercard.projectLabel`:`sessionHovercard.workspaceLabel`)}: ${n.name}`}
            title=${`${S(n.kind===`project`?`sessionHovercard.projectLabel`:`sessionHovercard.workspaceLabel`)}: ${n.path}`}
          >
            <span class="session-hovercard__context-icon" aria-hidden="true">${x.folder}</span>
            <span
              class="session-hovercard__context-value session-hovercard__context-text"
              title=${n.path}
              >${n.name}</span
            >
          </div>`:h}
    ${r?m`<div
            class="session-hovercard__context-row"
            aria-label=${r.title}
            title=${r.title}
          >
            <span class="session-hovercard__context-icon" aria-hidden="true">${x.server}</span>
            <span class="session-hovercard__context-value session-hovercard__context-text"
              >${r.label}</span
            >
          </div>`:h}
    ${e?.boardFace===`dashboard`?m`<div
            class="session-hovercard__context-row"
            aria-label=${S(`sessionsView.opensAsDashboard`)}
          >
            <span class="session-hovercard__context-icon" aria-hidden="true"
              >${x.layoutDashboard}</span
            >
            <span class="session-hovercard__context-value session-hovercard__context-text"
              >${S(`sessionsView.opensAsDashboard`)}</span
            >
          </div>`:h}
    ${e?.hasAutomation===!0?m`<div
            class="session-hovercard__context-row"
            aria-label=${S(`sessionsView.automationAttached`)}
          >
            <span class="session-hovercard__context-icon" aria-hidden="true">${x.clock}</span>
            <span class="session-hovercard__context-value session-hovercard__context-text"
              >${S(`sessionsView.automationAttached`)}</span
            >
          </div>`:h}
    ${I(t)}
  </div>`}function Pe(e){return e?.markdown?.trim()?m`<section
    class="session-hovercard__section session-hovercard__notepad"
    aria-label=${S(`sessionHovercard.agentNotepad`)}
  >
    <div class="session-hovercard__notepad-title">${S(`sessionHovercard.agentNotepad`)}</div>
    ${ve(e.markdown,{promoteProgress:!0})}
  </section>`:h}function Fe(e){let t=Te(e.state),n=e.checks?Ee(e.checks):null,r=[e.title,n,e.additions===void 0?null:`+${e.additions.toLocaleString()}`,e.deletions===void 0?null:`−${e.deletions.toLocaleString()}`].filter(e=>!!e);return m`<a
    class="session-hovercard__pr-row"
    data-state=${e.state}
    href=${e.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label=${`${S(`sessionHovercard.pullRequestLabel`,{number:String(e.number),state:t})}${r.length>0?`, ${r.join(`, `)}`:``}`}
  >
    <span
      class="session-hovercard__pr-state-icon"
      role="img"
      data-checks=${e.checks?.state??h}
      aria-label=${n?`${t} · ${n}`:t}
      title=${n?`${t} · ${n}`:t}
      >${De(e.state)}</span
    >
    <span class="session-hovercard__pr-title">${e.title}</span>
    ${P(e)}
  </a>`}function Ie(e){if(!e)return h;if(e.pullRequests.length>0){let t=e.pullRequests.slice(0,1),n=e.pullRequests.length-t.length;return m`<div class="session-hovercard__pr-list">
      ${t.map(Fe)}
      ${n>0?m`<span class="session-hovercard__more"
              >${S(`sessionHovercard.more`,{count:String(n)})}</span
            >`:h}
    </div>`}let t=e.branch;if(!t)return h;let n=S(`chat.pullRequests.createPr`),r=S(`chat.pullRequests.createPrLabel`,{branch:t.branch});return m`<div class="session-hovercard__branch-row">
    <span class="session-hovercard__branch-icon" aria-hidden="true">${x.gitBranch}</span>
    ${t.createUrl?m`<a
            class="session-hovercard__branch-action"
            href=${t.createUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label=${r}
            title=${r}
            >${n}</a
          >`:m`<span class="session-hovercard__branch-label">${S(`chat.sessionDiff.title`)}</span>`}
    ${P(t)}
  </div>`}function Le(e){let t=_e(e.progressCard,e.row?.status,e.row?.startedAt,e.row?.hasActiveRun??!1),n=!!(e.pullRequests&&(e.pullRequests.pullRequests.length>0||e.pullRequests.branch)),r=!!(e.row?.workContext||e.row?.placementProviderId&&e.row.placementProfileId||e.row?.boardFace===`dashboard`||e.row?.hasAutomation===!0||t),i=e.progressCard?void 0:e.row?.lastMessagePreview?.trim()||void 0;return!e.row&&!n&&!e.progressCard?h:m`<div class="session-hovercard">
    ${e.row?m`<section class="session-hovercard__section session-hovercard__section--header">
            ${Me(e)}
          </section>`:h}
    ${r?m`<section class="session-hovercard__section session-hovercard__section--metadata">
            ${Ne(e,t)}
          </section>`:h}
    ${n?m`<section class="session-hovercard__section session-hovercard__section--prs">
            ${Ie(e.pullRequests)}
          </section>`:h}
    ${i?m`<section class="session-hovercard__section session-hovercard__section--optional">
            <div class="session-hovercard__excerpt">${i}</div>
          </section>`:h}
    ${Pe(e.progressCard)}
  </div>`}var L,Re;function R(){return(R=e((()=>{t(),p(),b(),te(),D(),ge(),fe(),he(),ne(),de(),o(),L=4})))()}function ze(e){if(!i(e)||e.status!==`ok`)throw Error(`Session title unavailable`);let t=a(e.sessionKey),n=a(e.agentId);if(!t||!n)throw Error(`Session title response was incomplete`);return{sessionKey:t,agentId:n,namespace:`chat`,title:a(e.title)??a(e.derivedTitle)}}var z,B,V,H,U;function W(){return(W=e((()=>{y(),c(),A(),re(),z=`a.markdown-session-link, [data-session-href]`,B=3e5,V=3e4,H=100,U=class{constructor(e){this.host=e,this.client=null,this.context=null,this.cache=new Map,this.observer=new MutationObserver(e=>{for(let t of e.flatMap(e=>[...e.addedNodes]))t instanceof HTMLElement&&this.refresh(t)})}connect(){this.observer.observe(this.host,{childList:!0,subtree:!0}),this.refresh()}refresh(e=this.host){e.matches(z)&&this.decorate(e);for(let t of e.querySelectorAll(z))this.decorate(t)}disconnect(){this.observer.disconnect()}async decorate(e,t=!1){let n=this.targetForAnchor(e),r=e instanceof HTMLAnchorElement?e:document.createElement(`a`);if(e!==r&&e.classList.contains(`markdown-session-link`)&&(r.dataset.sessionHref=e.dataset.sessionHref,r.setAttribute(`href`,e.getAttribute(`href`)??``),r.className=`markdown-session-link`,e.classList.remove(`markdown-session-link`),e.removeAttribute(`href`),e.removeAttribute(`data-session-href`),e.replaceWith(r),r.append(e)),!n)return;let i=this.cachedOrSeededEntry(n);if(this.stampAnchor(r,n,i?.value),!(!t||i?.value))try{this.stampAnchor(r,n,await this.loadTitle(n))}catch{}}mainKey(){return l({agentsList:this.context?.agents.state.agentsList,hello:this.context?.gateway.snapshot.hello})}targetForAnchor(e){let t=e.dataset.sessionKey?.trim();if(t&&!e.dataset.sessionHref){let e=d(t);return e?{sessionKey:t,agentId:e.agentId,namespace:`chat`}:null}let n=ie(e.dataset.sessionHref??e.getAttribute(`href`)??``,this.context?.basePath,this.mainKey());if(!n||n.url.origin!==globalThis.location.origin&&n.url.origin!==oe(this.context))return null;e.setAttribute(`href`,`${n.url.pathname}${n.url.search}${n.url.hash}`),e.classList.add(`markdown-session-link`),e.removeAttribute(`target`),e.removeAttribute(`rel`),e.removeAttribute(`data-session-key`);let r=k(this.context?.sessions.state.result?.sessions??[],n.target,this.mainKey());return r?{sessionKey:r.key,agentId:n.target.agentId,namespace:n.target.namespace}:null}setCacheEntry(e,t){this.cache.delete(e),this.cache.set(e,t);for(let e of this.cache.keys()){if(this.cache.size<=H)break;this.cache.delete(e)}}cachedOrSeededEntry(e){let t=Date.now(),n=this.cache.get(e.sessionKey);if(n&&n.expiresAt>t)return this.setCacheEntry(e.sessionKey,n),n;this.cache.delete(e.sessionKey);let r=this.context?.sessions.state.result?.sessions.find(t=>s(t.key,e.sessionKey));if(!r)return;let i={...e,sessionKey:r.key,agentId:r.agentId??d(r.key)?.agentId??e.agentId,title:r.displayName??r.derivedTitle},a={expiresAt:t+B,promise:Promise.resolve(i),value:i};return this.setCacheEntry(e.sessionKey,a),a}loadTitle(e){let t=this.cachedOrSeededEntry(e);if(t)return t.promise;let n={expiresAt:Date.now()+B,promise:Promise.resolve().then(async()=>{if(!this.client)throw Error(`Session title requires a connected Gateway`);return{...ze(await this.client.request(`controlUi.sessionPreview`,{sessionKey:e.sessionKey})),namespace:e.namespace}})};return n.promise=n.promise.then(e=>(n.value=e,e),e=>{throw n.expiresAt=Date.now()+V,e}),this.setCacheEntry(e.sessionKey,n),n.promise}stampAnchor(e,t,n){let r=n?.title,i=ee(t.namespace,t.agentId,t.sessionKey,this.context?.basePath,{displayName:r,exactKey:!0,mainKey:this.mainKey()});e.dataset.sessionKey=t.sessionKey,e.classList.add(`markdown-session-link`),!e.dataset.sessionHref&&i&&e.getAttribute(`href`)!==i&&e.setAttribute(`href`,i),!(!r||e.classList.contains(`markdown-session-link--titled`))&&(e.classList.add(`markdown-session-link--titled`),e.textContent=r,e.title=t.sessionKey)}}})))()}function G(e){return e.querySelector(`[data-session-menu][aria-expanded="true"], [data-catalog-session-menu][aria-expanded="true"]`)!==null}var K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{p(),_(),b(),ye(),xe(),c(),D(),M(),R(),W(),se(),K=450,q=80,J=300,Y=100,X=100,Z=0,Q=class extends g{constructor(...e){super(...e),this.applicationClient=null,this.applicationContext=null,this.applicationGateway=null,this.progressCards=null,this.stopProgressCardUpdates=null,this.stopContextUpdates=null,this.pullRequests=null,this.stopPullRequestUpdates=null,this.activeTarget=null,this.activeTrigger=null,this.activeSession=null,this.suppressFocusOpen=!1,this.open=!1,this.delayed=!0,this.animateNextOpen=!0,this.skipDelayTimer=null,this.lastProgressCard=null,this.hovercard=new Se(()=>this.close(!0),Y),this.sessionLinkTitler=new U(this),this.loadGeneration=0,this.activeTargetObserver=new MutationObserver(()=>{if(this.activeTarget&&(!this.contains(this.activeTarget)||G(this))){this.close();return}this.open&&this.showCurrent()}),this.handleProgressCardUpdate=()=>{let e=this.activeSession;if(!e||!this.open||!this.hovercard.held)return;let t=this.progressCards?.get(e);t!==void 0&&(this.lastProgressCard=t),this.showCurrent()},this.handleSessionUpdate=()=>{this.sessionLinkTitler.refresh(),this.open&&this.hovercard.held&&this.showCurrent()},this.handlePullRequestUpdate=()=>{this.open&&this.hovercard.held&&this.showCurrent()},this.handlePointerOver=e=>{if(e.pointerType===`touch`||!globalThis.matchMedia?.(`(hover: hover)`).matches)return;let t=T(e);if(!t||G(this))return;let n=this.delayed;this.activate(t,t,n?K:q,n),this.hovercard.pointerInside=!0},this.handlePointerOut=e=>{let t=T(e);!t||t!==this.activeTarget||e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||this.hovercard.schedulePointerExit()},this.handleFocusIn=e=>{if(this.suppressFocusOpen)return;let t=T(e),n=e.target instanceof HTMLElement?e.target:null,r=t?.matches(`.sidebar-recent-session`)?n?.closest(`a.sidebar-recent-session__link`):n;!t||!r||G(this)||(this.activate(t,r,0,!1),this.hovercard.focusInside=!0)},this.handleFocusOut=e=>{this.activeTarget&&(e.relatedTarget instanceof Node&&this.activeTarget.contains(e.relatedTarget)||(this.hovercard.focusInside=!1,this.hovercard.scheduleClose()))},this.handleKeyDown=e=>{if(e.key===`Escape`){this.close();return}if(e.key!==`Tab`||e.shiftKey||e.target!==this.activeTrigger)return;let t=this.cardFocusables()[0];t&&(e.preventDefault(),t.focus())},this.handleClick=e=>{T(e)&&this.close()},this.handleSessionMenuOpen=()=>{this.close()},this.handleCardPointerLeave=()=>{this.hovercard.pointerOverCard=!1,this.hovercard.scheduleClose()},this.handleCardKeyDown=e=>{if(e.key!==`Escape`&&e.key!==`Tab`)return;let t=this.cardFocusables(),n=e.shiftKey?t[0]:t.at(-1);if(e.key===`Tab`&&document.activeElement!==n)return;e.preventDefault();let r=this.activeTrigger;this.close(),this.suppressFocusOpen=!0,r?.focus({preventScroll:!0}),this.suppressFocusOpen=!1}}static{this.properties={client:{attribute:!1,noAccessor:!0},context:{attribute:!1,noAccessor:!0},gateway:{attribute:!1,noAccessor:!0}}}get activeArtifactKey(){return this.activeSession?u(this.activeSession.sessionKey,this.activeSession.agentId):null}get client(){return this.applicationClient}set client(e){this.applicationClient=e,this.sessionLinkTitler.client=e}get context(){return this.applicationContext}set context(e){this.stopContextUpdates?.(),this.stopContextUpdates=null,this.applicationContext=e,this.sessionLinkTitler.context=e,this.isConnected&&(this.sessionLinkTitler.refresh(),this.connectStore())}get gateway(){return this.applicationGateway}set gateway(e){e!==this.applicationGateway&&(this.disconnectStore(),this.applicationGateway=e,this.close(),this.isConnected&&this.connectStore())}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.style.display=`contents`,this.addEventListener(`pointerover`,this.handlePointerOver),this.addEventListener(`pointerout`,this.handlePointerOut),this.addEventListener(`focusin`,this.handleFocusIn),this.addEventListener(`focusout`,this.handleFocusOut),this.addEventListener(`keydown`,this.handleKeyDown),this.addEventListener(`click`,this.handleClick),this.addEventListener(w,this.handleSessionMenuOpen),this.sessionLinkTitler.connect(),this.connectStore()}disconnectedCallback(){this.removeEventListener(`pointerover`,this.handlePointerOver),this.removeEventListener(`pointerout`,this.handlePointerOut),this.removeEventListener(`focusin`,this.handleFocusIn),this.removeEventListener(`focusout`,this.handleFocusOut),this.removeEventListener(`keydown`,this.handleKeyDown),this.removeEventListener(`click`,this.handleClick),this.removeEventListener(w,this.handleSessionMenuOpen),this.sessionLinkTitler.disconnect(),this.disconnectStore(),this.close(),this.clearSkipDelayTimer(),super.disconnectedCallback()}connectStore(){if(this.applicationContext&&!this.stopContextUpdates){let e=this.applicationContext.sessions.subscribe(this.handleSessionUpdate),t=this.applicationContext.agentSelection.subscribe(()=>this.close());this.stopContextUpdates=()=>{e(),t()}}!this.applicationGateway||this.progressCards||(this.progressCards=me(this.applicationGateway),this.stopProgressCardUpdates=this.progressCards.subscribe(this.handleProgressCardUpdate))}disconnectStore(){this.progressCards?.unwatch(this),this.stopProgressCardUpdates?.(),this.stopProgressCardUpdates=null,this.stopContextUpdates?.(),this.stopContextUpdates=null,this.progressCards=null,this.releasePullRequestStore()}activate(e,t,n,r){let i=e.dataset.sessionKey;if(!i)return;let a=d(i)?.agentId??e.closest(`openclaw-app-sidebar`)?.expandedAgentId();if(!a)return;let o=u(i,a);if(e===this.activeTarget&&i===this.activeSession?.sessionKey&&o===this.activeArtifactKey){if(t!==this.activeTrigger){if(this.hovercard.reset(),this.activeTrigger=t,this.hovercard.markTrigger(t),this.open)this.showCurrent();else{this.animateNextOpen=r;let e=++this.loadGeneration;this.hovercard.scheduleOpen(n,()=>void this.loadAndShow(i,e))}}return}this.close(n>0),this.activeTarget=e,this.activeTrigger=t,this.activeSession={sessionKey:i,agentId:a},this.open=!1,this.animateNextOpen=r,this.lastProgressCard=null,this.progressCards?.watch(this,[this.activeSession]),this.hovercard.markTrigger(t),this.activeTargetObserver.observe(this,{attributes:!0,attributeFilter:[`aria-expanded`],childList:!0,subtree:!0});let s=++this.loadGeneration;this.hovercard.scheduleOpen(n,()=>void this.loadAndShow(i,s))}async loadAndShow(e,t){let n=this.activeTarget,r=this.activeArtifactKey,i=this.activeSession;if(n instanceof HTMLAnchorElement&&n.dataset.sessionKey===e&&this.sessionLinkTitler.decorate(n,!0),!(t!==this.loadGeneration||i?.sessionKey!==e||!r||!i||!n||G(this)||!this.hovercard.held)){this.open=!0,this.delayed=!1,this.clearSkipDelayTimer(),this.watchPullRequests(r),this.showCurrent();try{await this.progressCards?.load(i)}catch{}t===this.loadGeneration&&this.activeSession?.sessionKey===e&&this.hovercard.held&&this.showCurrent()}}watchPullRequests(e){let t=this.applicationGateway;t&&(this.releasePullRequestStore(),this.pullRequests=be(t),this.stopPullRequestUpdates=this.pullRequests.subscribe(this.handlePullRequestUpdate),this.pullRequests.watch(this,[e],{foreground:!0}))}releasePullRequestStore(){this.pullRequests?.unwatch(this),this.stopPullRequestUpdates?.(),this.stopPullRequestUpdates=null,this.pullRequests=null}showCurrent(){let e=this.activeTarget,t=this.activeSession,n=t?.sessionKey,r=this.activeArtifactKey;if(!e||!t||!n||!r||!this.open)return;let i=this.querySelector(`openclaw-app-sidebar`)?.findSidebarHovercardRowByKey(n),a=this.pullRequests?.get(r),o=this.progressCards?.get(t);o!==void 0&&(this.lastProgressCard=o);let s=this.applicationGateway,c={authTokens:s?v({hello:s.snapshot.hello,settings:{token:s.connection.token},password:s.connection.password}):[],authReady:!!(s&&(s.snapshot.hello||s.connection.token.trim()||s.connection.password.trim()))},l=JSON.stringify({progress:this.lastProgressCard?.revision??null,pullRequests:a?{branch:a.branch,pullRequests:a.pullRequests}:null,row:i?{label:i.label,boardFace:i.boardFace,hasAutomation:i.hasAutomation,hasActiveRun:i.hasActiveRun,channelAvatarUrl:i.channelAvatarUrl,lastMessagePreview:i.lastMessagePreview,createdActor:i.createdActor,participants:i.participants,expandedParticipants:i.expandedParticipants,participantCount:i.participantCount,workContext:i.workContext,createdAt:i.createdAt,startedAt:i.startedAt,updatedAt:i.updatedAt,status:i.status,endedAt:i.endedAt}:null});if(this.hovercard.card?.dataset.revision===l)return;let u=this.hovercard.card,d=u?.contains(document.activeElement)&&document.activeElement instanceof HTMLElement?document.activeElement:null,p=d?this.cardFocusables().indexOf(d):-1,m=d instanceof HTMLAnchorElement?d.href:null,g=!u&&this.animateNextOpen,_=u;if(_||(Z+=1,_=j(`openclaw-session-progress-hovercard-${Z}`,`session-progress-hovercard`),this.animateNextOpen=!1,g?_.dataset.open=`false`:_.dataset.instant=`true`),_.dataset.revision=l,_.setAttribute(`aria-label`,S(`sessionHovercard.ariaLabel`)),f(Le({row:i,selfUserId:this.applicationContext?.gateway.snapshot.selfUser?.id,avatarAuth:c,personActivity:this.personActivity(),pullRequests:a,progressCard:this.lastProgressCard}),_),!_.firstElementChild){this.hovercard.clearCard(),this.hovercard.pointerOverCard=!1,this.hovercard.cardFocusInside=!1;return}if(u){if(d&&!_.contains(document.activeElement)){let e=this.cardFocusables(),t=(m?e.find(e=>e instanceof HTMLAnchorElement&&e.href===m):void 0)??e[p];t?t.focus({preventScroll:!0}):(this.hovercard.cardFocusInside=!1,this.suppressFocusOpen=!0,this.activeTrigger?.focus({preventScroll:!0}),this.suppressFocusOpen=!1,this.hovercard.focusInside=document.activeElement===this.activeTrigger)}this.hovercard.position();return}_.addEventListener(`pointerleave`,this.handleCardPointerLeave),_.addEventListener(`keydown`,this.handleCardKeyDown),this.hovercard.mount(e,_,ae(e),!1,()=>f(h,_)),g&&(_.offsetWidth,window.setTimeout(()=>{this.hovercard.card===_&&this.open&&(_.dataset.open=`true`)},0))}cardFocusables(){return this.hovercard.focusables()}personActivity(){let e=this.applicationContext;return e?ue(e,()=>this.close()):void 0}close(e=!1){let t=this.open;this.hovercard.reset(e?X:0),this.loadGeneration+=1,this.open=!1,this.animateNextOpen=!0,this.lastProgressCard=null,this.activeTargetObserver.disconnect(),this.progressCards?.unwatch(this),this.releasePullRequestStore(),this.activeTarget=null,this.activeTrigger=null,this.activeSession=null,t&&(this.clearSkipDelayTimer(),this.skipDelayTimer=window.setTimeout(()=>{this.skipDelayTimer=null,this.delayed=!0},J))}clearSkipDelayTimer(){this.skipDelayTimer!==null&&(window.clearTimeout(this.skipDelayTimer),this.skipDelayTimer=null)}}})))()}$();export{Q as SessionProgressHovercardProvider};
//# sourceMappingURL=session-progress-hovercard.runtime-CGD0hdDb.js.map