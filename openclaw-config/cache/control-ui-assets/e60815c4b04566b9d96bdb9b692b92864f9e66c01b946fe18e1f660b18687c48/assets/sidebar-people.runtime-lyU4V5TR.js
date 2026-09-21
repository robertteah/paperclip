import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{ia as t}from"./control-ui-foundation-DMb6IeIq.js";import{$s as n,A as r,Ys as i,aa as a,ao as o,cc as s,ic as c,qs as l,ra as u,ta as d,to as f,uc as p}from"./control-ui-core-DzidtL-P.js";import{C as ee,J as m,K as h,X as g,_ as te,b as ne,m as re,p as _,q as v,w as y}from"./lit-runtime-vxhGQLC6.js";import{L as b,Nt as ie,Pt as x,R as S}from"./control-ui-core-CaKBexnk.js";import{Bt as C,Ft as w,Gt as T,It as ae,Ut as E,it as oe,nt as se,rt as D}from"./control-ui-core-uEI6aN5p.js";import{ga as O,ha as k,ma as A,mi as j,pa as M}from"./control-ui-boot-shared-Cyt1Zyts.js";import{Cc as N,Ec as P,Js as F,Ks as I,Sc as L,Tc as R,Ws as z,gs as B,vs as V}from"./control-ui-boot-shared-CH-OC11d.js";import{u as H}from"./control-ui-boot-shared-D2DaCK2F.js";import{n as U,r as W,t as G}from"./portaled-hovercard-BvUPjuCX.js";function ce(e){let t=[{agentId:e.sessionsAgentId,result:e.sessionsResult},...Object.entries(e.sessionResultsByAgent).map(([e,t])=>({agentId:e,result:t}))].flatMap(({agentId:e,result:t})=>e?(t?.sessions??[]).map(t=>({row:t,agentId:c(t.key)?.agentId??t.agentId??e})):[]),n=Object.entries(e.childSessionRowsByParent).flatMap(([t,n])=>{let r=c(t)?.agentId??e.sessionsAgentId;return r&&e.loadedChildSessionKeys.has(t)?n.map(e=>({row:e,agentId:c(e.key)?.agentId??e.agentId??r})):[]});return[...t,...n]}function K(e,n,r){let i=c(e)?.agentId??t(n);return`${i}\u0000${l({agentsList:{defaultId:i,mainKey:r.mainKey,scope:r.globalScope?`global`:`agent`}},c(e)||e.toLowerCase()===`global`?e:`agent:${i}:${e}`)}`}function q(e,t){let n=e.filter(e=>e!==void 0);return n.length?t===`first`?Math.min(...n):Math.max(...n):void 0}function J(e,t=`compact`){let n=new Date(e);return g`<time
    datetime=${n.toISOString()}
    title=${n.toLocaleString(E.getLocale())}
    aria-label=${t===`minute-compact`?v:n.toLocaleString(E.getLocale())}
    ><openclaw-elapsed-time
      .startMs=${e}
      .minimumUnit=${t===`minute-compact`?`minute`:`second`}
      .singleUnit=${t===`single-unit`}
    ></openclaw-elapsed-time
  ></time>`}function le(e){return[...new Set((e.entries??[]).map(e=>{let t=e.mode===`webchat`?T(`presence.card.controlUi`):e.mode===`cli`?T(`presence.card.cli`):e.mode===`ui`?T(`presence.card.app`):void 0;return[...new Set([e.deviceFamily,e.platform,t].map(e=>e?.trim()).filter(Boolean))].join(` · `)}).filter(Boolean))].toSorted()}function Y(e,t,n){if(!n&&e.length===0)return v;let i=T(n?`presence.card.recentSessions`:`presence.card.viewingNow`);return g`<section class="person-activity-card__section">
    <h3>${i}</h3>
    ${e.length?g`<div class="person-activity-card__sessions">
            ${re(e.slice(0,3),({row:e,agentId:n})=>K(e.key,n,t),({row:e,agentId:i})=>{let s=o(e.key,e),c=g`<span
                  ${n?ne(N):v}
                  class="person-activity-card__session-name ${n?`hover-marquee`:`person-activity-card__session-name--multiline`}"
                  data-hover-marquee-delay=${n?`250`:v}
                  data-hover-marquee-extra-shift=${n?`18`:v}
                  >${s}</span
                >`,l=a({face:u(e),sessionKey:e.key,fallbackAgentId:i,basePath:t.routing.basePath,row:e,mainKey:t.mainKey});return g`<a
                  class="person-activity-card__session session-row-host"
                  href=${l.href}
                  @mouseenter=${R}
                  @mouseleave=${P}
                  @focusin=${R}
                  @focusout=${P}
                  @click=${n=>{r(n)&&(n.preventDefault(),t.openSession(e,i))}}
                  ><span class="person-activity-card__session-icon" aria-hidden="true"
                    >${w.messageSquare}</span
                  >
                  <span class="person-activity-card__session-copy"
                    >${n?y(s,c):c}
                    ${e.updatedAt==null?v:g`<span class="person-activity-card__session-age"
                            >${J(e.updatedAt,`single-unit`)}</span
                          >`}</span
                  >
                </a>`})}
          </div>`:g`<p class="person-activity-card__muted">
            ${T(n?`presence.card.noRecentSessions`:`presence.card.noVisibleSessions`)}
          </p>`}
  </section>`}function ue(e){let{user:t}=e,n=(t.entries?.length??0)===0,r=t.entries??[],i=q(r.map(e=>e.onlineSince),`first`),a=q(r.map(e=>e.lastActivityAt),`last`),o=le(t),s=[...new Set(r.flatMap(e=>e.timeZone?.trim()?[e.timeZone.trim()]:[]))].toSorted(),c=new Set(t.watchedSessions.map(t=>K(t,e.watchAgentId,e))),l=new Map;for(let t of ce(e.sessionData)){let n=K(t.row.key,t.agentId,e);l.has(n)||l.set(n,t)}let u=[...l.values()].toSorted((t,n)=>(n.row.updatedAt??0)-(t.row.updatedAt??0)||K(t.row.key,t.agentId,e).localeCompare(K(n.row.key,n.agentId,e))),d=u.filter(({row:t,agentId:n})=>c.has(K(t.key,n,e))),f=u.filter(({row:n,agentId:r})=>!c.has(K(n.key,r,e))&&[n.owner?.actor,n.createdActor].some(e=>I(t,e?.identity))),p=k(t.identity?.id,e.routing,t.name);return g`<div class="person-activity-card">
    <header class="person-activity-card__header">
      <openclaw-viewer-avatar
        .user=${t}
        .markAsViewer=${!1}
        variant="footer"
        aria-hidden="true"
      ></openclaw-viewer-avatar>
      <div>
        <h2>${t.name??t.email??T(`presence.card.person`)}</h2>
        <span
          class="person-activity-card__status ${n?`person-activity-card__status--offline`:``}"
          ><span aria-hidden="true"></span>${n?T(`presence.offline`):i===void 0?T(`presence.rosterTitle`):g`${T(`presence.card.onlineFor`)} ${J(i,`minute-compact`)}`}</span
        >
      </div>
    </header>
    ${n?v:g`<dl class="person-activity-card__facts">
            ${o.length||s.length?g`<div>
                    <dt>${T(`presence.card.where`)}</dt>
                    <dd>
                      ${o.map(e=>g`<span>${e}</span>`)}${s.map(e=>g`<small>${T(`presence.card.reportedTimeZone`,{zone:e})}</small>`)}
                    </dd>
                  </div>`:v}
            <div>
              <dt>${T(`presence.card.lastActivity`)}</dt>
              <dd>
                ${a===void 0?T(`presence.card.notObserved`):g`<span>${J(a)} ${T(`presence.card.ago`)}</span>`}
              </dd>
            </div>
          </dl>`}
    ${Y(d,e,!1)}${Y(f,e,!0)}
    ${p?g`<footer>
            <a href=${p.href} @click=${p.open}
              >${T(`presence.card.viewActivity`)}<span aria-hidden="true"
                >${w.chevronRight}</span
              ></a
            >
          </footer>`:v}
  </div>`}function X(){return(X=e((()=>{h(),ee(),te(),_(),C(),L(),z(),f(),d(),i(),ae(),A(),j(),M()})))()}var Z,Q;function $(){return($=e((()=>{h(),ie(),C(),z(),B(),d(),i(),D(),X(),A(),W(),Z=0,Q=class{constructor(e){this.host=e,this.active=null,this.portal=new G(()=>this.close(),100),this.observer=new MutationObserver(()=>this.sync()),this.suppressFocus=!1,this.lastOpenAt=-1/0,this.outsideInteraction=e=>{e.target instanceof Node&&!this.active?.row.contains(e.target)&&!this.portal.card?.contains(e.target)&&this.close()},this.outsideKey=e=>{e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),this.portal.card?.contains(document.activeElement)&&this.returnFocus(),this.close())},this.stopLocale=E.subscribe(()=>this.sync())}scope(){return JSON.stringify([this.host.activeRouteId,this.host.sessionKey,this.host.sessionDataContext?.gateway.connectionRevision])}handleEvent(e,t){let n=e.target instanceof Element?e.target.closest(`[data-person-card]`):null;if(e.type===`keydown`&&e instanceof KeyboardEvent){if(e.key===`Tab`&&!e.shiftKey&&e.target===this.active?.trigger){let t=this.portal.focusables()[0];t&&(e.preventDefault(),t.focus())}return}if(n&&!(t!==void 0&&e.type!==`click`&&!se(n,e.type===`focusin`?`focus`:`pointer`,!0))){if(e.type===`click`){if(this.active?.row===n&&this.portal.explicitHold){this.close();return}this.activate(n,0),this.portal.explicitHold=!0,this.show()}else if(e.type===`pointerover`&&e instanceof PointerEvent){if(e.pointerType===`touch`||!globalThis.matchMedia?.(`(hover: hover)`).matches||this.portal.explicitHold&&this.active?.row!==n)return;let r=this.portal.card||performance.now()-this.lastOpenAt<300?80:450;this.activate(n,oe(t??performance.now(),r)),this.portal.pointerInside=!0,this.portal.clearClose()}else if(e.type===`pointerout`&&e instanceof PointerEvent&&this.active?.row===n){if(e.relatedTarget instanceof Node&&n.contains(e.relatedTarget))return;this.portal.schedulePointerExit()}else if(e.type===`focusin`&&!this.suppressFocus)this.activate(n,0),this.portal.focusInside=!0,this.portal.clearClose(),this.show();else if(e.type===`focusout`&&e instanceof FocusEvent&&this.active?.row===n){if(e.relatedTarget instanceof Node&&n.contains(e.relatedTarget))return;this.portal.focusInside=!1,this.portal.scheduleClose()}}}activate(e,t){let n=e.querySelector(`[data-person-card-trigger]`)??e,r=n.dataset.personCardKey;if(!r||!this.host.connected||this.active?.id===r&&this.active.row===e)return;this.close();let i=this.host.sessionDataContext?.gateway;!i||i.snapshot.phase!==`connected`||(this.active={id:r,row:e,trigger:n,scope:this.scope(),gateway:i,client:i.snapshot.client},this.portal.markTrigger(n),this.observer.observe(this.host,{childList:!0,subtree:!0}),document.addEventListener(`pointerdown`,this.outsideInteraction,!0),document.addEventListener(`focusin`,this.outsideInteraction,!0),document.addEventListener(`keydown`,this.outsideKey,!0),this.portal.scheduleOpen(t,()=>{this.portal.held&&this.show()}))}isCurrent(){let e=this.active,t=this.host.sessionDataContext?.gateway;return!!(e&&this.host.isConnected&&this.host.connected&&t?.snapshot.phase===`connected`&&e.gateway===t&&e.client===t.snapshot.client&&e.scope===this.scope()&&this.host.contains(e.row)&&(e.row.dataset.personCardSection===void 0||!this.host.collapsedSessionSections.has(e.row.dataset.personCardSection)))}sync(){this.isCurrent()?this.portal.card&&this.show():this.close()}show(){let e=this.active,t=this.host.sessionDataContext;if(!e||!t||!this.isCurrent()){this.close();return}let r=this.host.sessionData,i=S({snapshotUser:t.gateway.snapshot.selfUser,presenceEntries:b(r.presencePayload),presenceInstanceId:r.presenceInstanceId}),o=F(r.presencePayload,i,r.presenceInstanceId).find(t=>H(t)===e.id);if(!o&&e.id.startsWith(`profile:`)){let t=e.id.slice(8),n=[r.sessionsResult,...Object.values(r.sessionResultsByAgent)].flatMap(e=>e?.sessions??[]).flatMap(e=>[e.owner?.actor,e.createdActor]).find(e=>e?.identity?.type===`profile`&&e.identity.id===t);n&&(o={id:t,identity:{type:`profile`,id:t},name:n.label,avatarUrl:n.avatarUrl,watchedSessions:[],entries:[]})}if(!o){this.close();return}let c={agentsList:t.agents.state.agentsList,hello:t.gateway.snapshot.hello},l=this.portal.card,d=l??U(`openclaw-person-activity-${++Z}`,`session-progress-hovercard person-activity-hovercard`),f=d.contains(document.activeElement)?document.activeElement:null;if(d.setAttribute(`aria-label`,T(`presence.card.ariaLabel`,{name:o.name??o.email??T(`presence.card.person`)})),m(ue({user:o,sessionData:r,watchAgentId:p(c),mainKey:s(c),globalScope:n(c),routing:O({basePath:this.host.basePath,navigate:(e,t)=>this.host.onNavigate?.(e,t)},()=>this.close()),openSession:(n,r)=>{let i=u(n),o=a({face:i,sessionKey:n.key,row:n,fallbackAgentId:r,basePath:this.host.basePath,mainKey:s(c)});this.close(),V(this.host,{face:i,sessionKey:n.key,commit:()=>this.host.sessionDataContext?.gateway!==e.gateway||t.gateway.snapshot.client!==e.client||t.gateway.snapshot.phase!==`connected`||e.scope!==this.scope()?!1:(this.host.prepareSessionNavigation(n.key,o.options.pathname),this.host.onNavigate?.(i,o.options),x({selection:t.agentSelection,gateway:t.gateway,sessionKey:n.key,agentId:r}),!0)})}}),d),l){if(f&&!d.contains(document.activeElement)){let e=f instanceof HTMLAnchorElement?this.portal.focusables().find(e=>e instanceof HTMLAnchorElement&&e.href===f.href):void 0;e?e.focus({preventScroll:!0}):this.returnFocus()}this.portal.position();return}this.lastOpenAt=performance.now(),d.addEventListener(`pointerleave`,()=>{this.portal.pointerOverCard=!1,this.portal.scheduleClose()}),d.addEventListener(`keydown`,e=>{let t=this.portal.focusables();e.key===`Tab`&&document.activeElement===(e.shiftKey?t[0]:t.at(-1))&&(e.preventDefault(),this.returnFocus(),this.close())}),this.portal.mount(e.row,d,`horizontal`,!0,()=>m(v,d))}returnFocus(){this.suppressFocus=!0,this.active?.trigger.focus({preventScroll:!0}),this.suppressFocus=!1,this.portal.focusInside=document.activeElement===this.active?.trigger}close(){this.portal.card&&(this.lastOpenAt=performance.now()),this.observer.disconnect(),document.removeEventListener(`pointerdown`,this.outsideInteraction,!0),document.removeEventListener(`focusin`,this.outsideInteraction,!0),document.removeEventListener(`keydown`,this.outsideKey,!0),this.portal.reset(),this.active?.trigger.setAttribute(`aria-haspopup`,`dialog`),this.active?.trigger.setAttribute(`aria-expanded`,`false`),this.active=null}dismiss(){let e=this.active!==null;return this.close(),e}dispose(){this.close(),this.stopLocale()}}})))()}$();export{Q as SidebarPeopleRuntime};
//# sourceMappingURL=sidebar-people.runtime-lyU4V5TR.js.map