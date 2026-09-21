import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,L as n,R as r}from"./control-ui-foundation-DMb6IeIq.js";import{Gc as i,Gi as a,Gn as o,Ki as s,Kn as c,Yo as l,aa as u,ao as d,on as f,qc as p,qi as m,qo as h,ta as g,tn as _,to as v}from"./control-ui-core-DzidtL-P.js";import{$ as y,K as b,X as x,at as S,m as C,p as w,q as T,st as E}from"./lit-runtime-vxhGQLC6.js";import{Bt as D,Ht as ee,Tn as te,Ut as ne,h as re,m as ie,zn as O}from"./control-ui-core-CaKBexnk.js";import{Bt as k,Ft as A,Gt as j,It as M}from"./control-ui-core-uEI6aN5p.js";import{$r as N,Qr as P,Xr as F,ei as I}from"./control-ui-boot-shared-Cyt1Zyts.js";import{Qs as L,Zs as R,es as z,ts as B}from"./control-ui-boot-shared-CH-OC11d.js";import{n as V,t as H}from"./near-viewport-observer-BfnpDHlZ.js";import{n as U,t as W}from"./settings-workspace-IBRfeTG9.js";var G;function K(){return(K=e((()=>{b(),y(),V(),k(),p(),G=class extends i{constructor(...e){super(...e),this.sessionKey=``,this.error=null,this.visibility=new H(200,()=>this.requestUpdate()),this.observationFrame=0}connectedCallback(){super.connectedCallback(),window.cancelAnimationFrame(this.observationFrame),this.observationFrame=window.requestAnimationFrame(()=>this.visibility.observe(this))}disconnectedCallback(){window.cancelAnimationFrame(this.observationFrame),this.visibility.disconnect(),super.disconnectedCallback()}render(){return this.visibility.nearVisible?this.error?x`<div class="dashboard-preview__error">
          ${j(`dashboardDocument.loadFailed`,{error:this.error})}
        </div>`:x`<openclaw-board-document
          .passive=${!0}
          .gatewaySnapshot=${this.gatewaySnapshot}
          .preparedSession=${{sessionKey:this.sessionKey,agentId:this.agentId}}
        ></openclaw-board-document>`:T}},t([E({attribute:!1})],G.prototype,`gatewaySnapshot`,void 0),t([E({attribute:!1})],G.prototype,`sessionKey`,void 0),t([E({attribute:!1})],G.prototype,`agentId`,void 0),t([E({attribute:!1})],G.prototype,`error`,void 0),customElements.get(`openclaw-dashboard-preview`)||customElements.define(`openclaw-dashboard-preview`,G)})))()}function q(e,t){let n=e.createdActor??e.owner?.actor,r=n?.id?.trim()||e.agentId?.trim()||t;return{id:r,label:n?.label?.trim()||r}}function J(e,t,n){return x`<div class="dashboard-preview" aria-hidden="true" inert>
    <openclaw-dashboard-preview
      .gatewaySnapshot=${t}
      .sessionKey=${e.key}
      .agentId=${e.agentId}
      .error=${n}
    ></openclaw-dashboard-preview>
  </div>`}function ae(e,t){let n=t.query.trim().toLocaleLowerCase();return(e.result?.sessions??[]).filter(r=>{let i=q(r,e.fallbackAgentId);return t.ownerId&&i.id!==t.ownerId?!1:!n||[d(r.key,r),i.label,r.lastMessagePreview,r.key].filter(e=>typeof e==`string`).some(e=>e.toLocaleLowerCase().includes(n))}).toSorted((e,n)=>t.sort===`title`?d(e.key,e).localeCompare(d(n.key,n)):(n.updatedAt??0)-(e.updatedAt??0))}function oe(e,t,n,r){let i=u({face:`chat`,sessionKey:t.key,fallbackAgentId:e.fallbackAgentId,basePath:e.basePath,row:t,mainKey:e.mainKey,dashboardExpanded:!0}),a=q(t,e.fallbackAgentId),o=d(t.key,t),s=a.label.trim().charAt(0).toLocaleUpperCase()||`?`;return x`<article class="dashboard-card" data-dashboard-session=${t.key}>
    <a class="dashboard-card__main" href=${i.href} aria-label=${o}>
      ${J(t,n,r)}
      <div class="dashboard-card__body">
        <div class="dashboard-card__heading">
          <h2>${o}</h2>
          ${t.status===`running`?x`<span class="dashboard-card__live"><i></i>${j(`dashboardsPage.live`)}</span>`:T}
        </div>
        <div class="dashboard-card__author">
          <span class="dashboard-card__avatar" aria-hidden="true">${s}</span>
          <span>${j(`dashboardsPage.byAuthor`,{author:a.label})}</span>
        </div>
      </div>
      <footer class="dashboard-card__footer">
        <span>
          ${t.updatedAt?j(`dashboardsPage.updated`,{time:_(t.updatedAt)}):j(`dashboardsPage.updatedUnknown`)}
        </span>
        <span class="dashboard-card__open" aria-hidden="true">${A.arrowUpRight}</span>
      </footer>
    </a>
  </article>`}function se(e,t,n,r,i){let a=e.result?.sessions??[];if(e.error&&!e.result)return T;if(a.length===0)return x`<section class="card stack" data-dashboards-empty role="status">
      <div class="list-title">${j(`dashboardsPage.emptyTitle`)}</div>
      <div class="card-sub">${j(`dashboardsPage.emptyDescription`)}</div>
    </section>`;let o=Array.from(new Map(a.map(t=>{let n=q(t,e.fallbackAgentId);return[n.id,n]})).values()).toSorted((e,t)=>e.label.localeCompare(t.label)),s=ae(e,t);return x`<section class="dashboards-gallery" aria-label=${O(`dashboards`)}>
    <div class="dashboards-toolbar">
      <label class="dashboards-search">
        <span aria-hidden="true">${A.search}</span>
        <span class="sr-only">${j(`dashboardsPage.searchLabel`)}</span>
        <input
          type="search"
          .value=${t.query}
          placeholder=${j(`dashboardsPage.searchPlaceholder`)}
          @input=${e=>{e.currentTarget instanceof HTMLInputElement&&n.onQueryChange(e.currentTarget.value)}}
        />
      </label>
      <label class="dashboards-select">
        <span>${j(`dashboardsPage.authorFilter`)}</span>
        <select
          .value=${t.ownerId}
          @change=${e=>{e.currentTarget instanceof HTMLSelectElement&&n.onOwnerChange(e.currentTarget.value)}}
        >
          <option value="">${j(`dashboardsPage.allAuthors`)}</option>
          ${o.map(e=>x`<option value=${e.id}>${e.label}</option>`)}
        </select>
      </label>
      <label class="dashboards-select">
        <span>${j(`dashboardsPage.sortLabel`)}</span>
        <select
          .value=${t.sort}
          @change=${e=>{e.currentTarget instanceof HTMLSelectElement&&(e.currentTarget.value===`updated`||e.currentTarget.value===`title`)&&n.onSortChange(e.currentTarget.value)}}
        >
          <option value="updated">${j(`dashboardsPage.sortUpdated`)}</option>
          <option value="title">${j(`dashboardsPage.sortTitle`)}</option>
        </select>
      </label>
    </div>
    <div class="dashboards-results" role="status">
      ${j(`dashboardsPage.resultCount`,{count:String(s.length)})}
    </div>
    ${s.length===0?x`<div class="dashboards-no-results" data-dashboards-no-results>
            <span aria-hidden="true">${A.search}</span>
            <strong>${j(`dashboardsPage.noResultsTitle`)}</strong>
            <span>${j(`dashboardsPage.noResultsDescription`)}</span>
          </div>`:x`<div class="dashboards-grid">
            ${C(s,e=>e.key,t=>oe(e,t,r,i))}
          </div>`}
  </section>`}function ce(e,t=Y,n=X,r,i=null){let a=e&&(e.result||e.error)?x`
          ${I({status:{error:e.error,hasLoaded:e.result!==null,stale:e.result!==null&&e.error!==null,awaitingGateway:!1},errorMessage:e.error?j(`dashboardsPage.loadError`,{error:e.error}):void 0})}
          ${se(e,t,n,r,i)}
        `:x`<section class="card" aria-busy="true">${j(`common.loading`)}</section>`;return x`
    <section class="content-header dashboards-header">
      <div>
        <div class="page-title">${O(`dashboards`)}</div>
        <div class="page-subtitle">${j(`subtitles.dashboards`)}</div>
      </div>
      ${e?.result?x`<div class="dashboards-header__count">
              <strong>${e.result.sessions.length}</strong>
              <span>${j(`dashboardsPage.totalLabel`)}</span>
            </div>`:T}
    </section>
    ${U(a)}
  `}var Y,X;function Z(){return(Z=e((()=>{b(),w(),te(),M(),N(),W(),k(),f(),v(),g(),K(),Y={query:``,ownerId:``,sort:`updated`},X={onQueryChange:()=>void 0,onOwnerChange:()=>void 0,onSortChange:()=>void 0}})))()}var Q;function $(){return($=e((()=>{r(),y(),re(),ne(),N(),l(),B(),L(),p(),c(),m(),Z(),Q=class extends i{constructor(...e){super(...e),this.filters={query:``,ownerId:``,sort:`updated`},this.previewError=null,this.listGeneration=0,this.gateway=new R(this,{getGateway:()=>this.context?.gateway}),this.subscriptions=new o(this).effect(()=>this.context?.agentSelection,e=>(this.bindList(),e.subscribe(()=>this.bindList())))}connectedCallback(){super.connectedCallback(),ee(D.tagName,D.loadModule).then(()=>this.requestUpdate()).catch(e=>{this.previewError=h(e)})}disconnectedCallback(){this.listGeneration+=1,this.unsubscribeList?.(),this.unsubscribeList=void 0,this.observedSessions=void 0,this.observedScopeId=void 0,this.subscriptions.clear(),super.disconnectedCallback()}willUpdate(e){e.has(`routeData`)&&(this.data=this.routeData),this.bindList()}bindList(){let e=this.context;if(!e)return;let t=e.sessions,n=e.agentSelection.state.scopeId?.trim()||null;if(t===this.observedSessions&&n===this.observedScopeId)return;this.unsubscribeList?.(),this.observedSessions=t,this.observedScopeId=n;let r=a(e),i=i=>{this.context!==e||this.observedSessions!==t||this.observedScopeId!==n||!i.result&&!i.error&&this.data?.result||(this.data=s(e,i),this.requestUpdate(),this.completeList(e,t,n,r,i))};this.unsubscribeList=t.subscribeList(r,i);let o=t.listSnapshot(r);i(o),!o.result&&!o.loading&&e.gateway.snapshot.phase===`connected`&&t.refreshList({...r,force:!0})}completeList(e,t,n,r,i){let a=i.result,o=++this.listGeneration,c=this.gateway.capture();if(!a?.hasMore||i.loading||i.error||!c)return;let l=()=>this.context===e&&this.observedSessions===t&&this.observedScopeId===n&&this.listGeneration===o&&this.gateway.isCurrent(c);z({initialResult:a,list:e=>t.list({...r,offset:e}),isCurrent:l,missingResultError:`dashboard enumeration returned no result`,stalledPaginationError:`dashboard enumeration did not advance`,incompletePaginationError:`dashboard enumeration was incomplete`}).then(t=>{!t||!l()||(this.data=s(e,{...i,result:{...a,count:t.length,hasMore:!1,nextOffset:null,sessions:t}}),this.requestUpdate())}).catch(t=>{if(!l())return;let n=P(F(),t,e.gateway.snapshot);this.data=s(e,{...i,error:n.error}),this.requestUpdate()})}render(){return ce(this.data,this.filters,{onQueryChange:e=>{this.filters={...this.filters,query:e}},onOwnerChange:e=>{this.filters={...this.filters,ownerId:e}},onSortChange:e=>{this.filters={...this.filters,sort:e}}},this.context?.gateway.snapshot,this.previewError)}},t([n({context:ie,subscribe:!0})],Q.prototype,`context`,void 0),t([E({attribute:!1})],Q.prototype,`routeData`,void 0),t([S()],Q.prototype,`filters`,void 0),t([S()],Q.prototype,`previewError`,void 0),customElements.get(`openclaw-dashboards-page`)||customElements.define(`openclaw-dashboards-page`,Q)})))()}$();
//# sourceMappingURL=dashboards-page-BB8aoBy-.js.map