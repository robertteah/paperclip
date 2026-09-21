import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{An as t,Fr as n,L as r,Nn as i,R as a,ar as o}from"./control-ui-foundation-DMb6IeIq.js";import{Gc as s,Gn as c,Kn as l,Qt as u,Zt as d,on as f,qc as p,tn as m}from"./control-ui-core-DzidtL-P.js";import{$ as h,K as g,Q as _,X as v,at as y,m as ee,p as b,q as x,st as S}from"./lit-runtime-vxhGQLC6.js";import{h as C,m as w}from"./control-ui-core-CaKBexnk.js";import{Bt as T,Gt as E}from"./control-ui-core-uEI6aN5p.js";import{Qs as D,Zs as O,bs as k,ys as A}from"./control-ui-boot-shared-CH-OC11d.js";import{i as j,n as M,t as te}from"./lane-table-Do_ICwiZ.js";function ne(){return F+=1,`debug-vital-gradient-${F}`}var N,P,F,I;function L(){return(L=e((()=>{g(),h(),f(),p(),N=100,P=40,F=0,I=class extends s{constructor(...e){super(...e),this.label=``,this.sub=``,this.samples=[],this.format=String,this.floorMax=0,this.autorange=!1,this.hoverIndex=null,this.gradientId=ne(),this.handlePointerMove=e=>{if(this.samples.length<2)return;let t=e.currentTarget;if(!(t instanceof HTMLElement))return;let n=e.offsetX/Math.max(t.clientWidth,1),r=Math.round(n*(this.samples.length-1));this.hoverIndex=Math.min(Math.max(r,0),this.samples.length-1)},this.handlePointerLeave=()=>{this.hoverIndex=null}}get yRange(){let e=this.floorMax,t=1/0;for(let n of this.samples)n.value>e&&(e=n.value),n.value<t&&(t=n.value);if(Number.isFinite(t)||(t=0),!this.autorange)return{min:0,span:e>0?e:1};let n=Math.max(e-t,e*.02,1e-9),r=Math.max(t-n*.5,0);return{min:r,span:Math.max(e-r,1e-9)}}toY(e){let{min:t,span:n}=this.yRange,r=Math.min(Math.max((e-t)/n,0),1);return P-r*36}renderChart(){let e=this.samples;if(e.length<2)return x;let t=N/(e.length-1),n=e.map((e,n)=>`${n*t},${this.toY(e.value)}`).join(` `),r=e.at(-1);if(!r)return x;let i=this.toY(r.value),a=this.hoverIndex===null?void 0:e[this.hoverIndex],o=this.hoverIndex===null?0:this.hoverIndex/(e.length-1)*100;return v`
      <div
        class="debug-vital__chart"
        @pointermove=${this.handlePointerMove}
        @pointerleave=${this.handlePointerLeave}
      >
        <svg
          viewBox="0 0 ${N} ${P}"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          ${_`
            <defs>
              <linearGradient id=${this.gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="currentColor" stop-opacity="0.28"></stop>
                <stop offset="1" stop-color="currentColor" stop-opacity="0.02"></stop>
              </linearGradient>
            </defs>
            <polygon
              points="0,${P} ${n} ${N},${P}"
              fill="url(#${this.gradientId})"
            ></polygon>
            <polyline points=${n}></polyline>
          `}
        </svg>
        ${a?v`
                <div class="debug-vital__hairline" style="left: ${o}%"></div>
                <div
                  class="debug-vital__dot debug-vital__dot--hover"
                  style="left: ${o}%; top: ${this.toY(a.value)/P*100}%"
                ></div>
              `:v`
                <div
                  class="debug-vital__dot debug-vital__dot--now"
                  style="left: calc(100% - 3px); top: ${i/P*100}%"
                ></div>
              `}
      </div>
    `}render(){let e=this.samples,t=e.at(-1),n=this.hoverIndex===null?null:e[this.hoverIndex],r=n??t,i=n&&t&&t.at>n.at?d(t.at-n.at):null;return v`
      <div class="debug-vital__head">
        <span class="debug-vital__label">${this.label}</span>
        ${this.sub?v`<span class="debug-vital__sub mono">${this.sub}</span>`:x}
      </div>
      <div class="debug-vital__value mono">
        ${r?this.format(r.value):`–`}
        ${i?v`<span class="debug-vital__age">−${i}</span>`:x}
      </div>
      ${this.renderChart()}
    `}},n([S()],I.prototype,`label`,void 0),n([S()],I.prototype,`sub`,void 0),n([S({attribute:!1})],I.prototype,`samples`,void 0),n([S({attribute:!1})],I.prototype,`format`,void 0),n([S({attribute:!1})],I.prototype,`floorMax`,void 0),n([S({type:Boolean})],I.prototype,`autorange`,void 0),n([y()],I.prototype,`hoverIndex`,void 0),customElements.get(`openclaw-debug-sparkline`)||customElements.define(`openclaw-debug-sparkline`,I)})))()}function R(e){return{...e,render:(t,n)=>e.render(t,n)}}function z(e){return v`
    <div class="debug-overlay__table-wrap">
      <table class="data-table command-lanes-table command-lanes-table--compact">
        <thead>
          <tr>
            <th>${E(`debug.lanes.lane`)}</th>
            <th>${E(`debug.lanes.active`)}</th>
            <th>${E(`debug.lanes.queued`)}</th>
            <th>${E(`debug.lanes.blocked`)}</th>
          </tr>
        </thead>
        <tbody>
          ${M(e,{compact:!0})}
        </tbody>
      </table>
    </div>
  `}function B(e,t){let n=[];for(let r of e){let e=t(r.status);typeof e==`number`&&Number.isFinite(e)?n.push({value:e,at:r.at}):n.length=0}return n}function V(e){return`${Math.round(e*100)}%`}function H(e){return E(`debug.overlay.memoryMb`,{value:String(Math.round(e/1048576))})}function U(e){return d(e)??E(`common.na`)}function W(e){return E(`debug.overlay.freeShort`,{value:G(e)})}function G(e){return o(e,{style:`legacy-binary`,maxUnit:`tera`,separator:` `,fractionDigits:(e,t)=>t===`byte`?null:+(e<10)})}function K(e,t){let n=e.eventLoop,r=n?.reasons??[],i=r.includes(`cpu`)||r.includes(`event_loop_utilization`),a=r.includes(`event_loop_delay`),o=typeof n?.utilization==`number`?E(`debug.overlay.loopShort`,{value:V(n.utilization)}):``,s=typeof e.processMemory?.heapUsedBytes==`number`?E(`debug.overlay.heapShort`,{value:H(e.processMemory.heapUsedBytes)}):``,c=typeof n?.delayMaxMs==`number`?E(`debug.overlay.maxShort`,{value:U(n.delayMaxMs)}):``;return v`
    <div class="debug-overlay__vitals">
      <openclaw-debug-sparkline
        class="debug-overlay__vital debug-overlay__vital--cpu"
        data-degraded=${i?``:x}
        .label=${E(`debug.overlay.cpu`)}
        .sub=${o}
        .samples=${B(t,e=>e.eventLoop?.cpuCoreRatio)}
        .format=${V}
        .floorMax=${1}
      ></openclaw-debug-sparkline>
      <openclaw-debug-sparkline
        class="debug-overlay__vital debug-overlay__vital--memory"
        .label=${E(`debug.overlay.memory`)}
        .sub=${s}
        .samples=${B(t,e=>e.processMemory?.rssBytes)}
        .format=${H}
        autorange
      ></openclaw-debug-sparkline>
      <openclaw-debug-sparkline
        class="debug-overlay__vital debug-overlay__vital--delay"
        data-degraded=${a?``:x}
        .label=${E(`debug.overlay.delayP99`)}
        .sub=${c}
        .samples=${B(t,e=>e.eventLoop?.delayP99Ms)}
        .format=${U}
        .floorMax=${20}
      ></openclaw-debug-sparkline>
    </div>
    ${e.disks?.length?v`<div class="debug-overlay__vitals debug-overlay__disks">
            ${ee(e.disks??[],e=>e.path,e=>v`<openclaw-debug-sparkline
                class="debug-overlay__vital debug-overlay__vital--disk"
                title=${e.path}
                .label=${`${E(`debug.overlay.disk`)} ${e.path}`}
                .sub=${E(`debug.overlay.totalShort`,{value:G(e.totalBytes)})}
                .samples=${B(t,t=>t.disks?.find(t=>t.path===e.path)?.availableBytes)}
                .format=${W}
                autorange
              ></openclaw-debug-sparkline>`)}
          </div>`:x}
    ${typeof e.uptimeMs==`number`?v`<div class="debug-overlay__vitals-footer mono">
            ${E(`debug.overlay.uptime`)} ${u(e.uptimeMs)}
          </div>`:x}
  `}function q(e){return v`
    <div class="debug-overlay__count">
      ${E(`debug.overlay.activeRunsCount`,{count:String(e.length)})}
    </div>
    ${e.length>0?v`<ul class="debug-overlay__list">
            ${e.map(e=>{let t=e.sessionId??e.key??E(`common.unknown`);return v`<li class="mono" title=${t}>${i(t,32)}</li>`})}
          </ul>`:v`<div class="debug-overlay__empty">${E(`debug.overlay.noActiveRuns`)}</div>`}
  `}function J(e){let t=e.eventLog.slice(0,8);return t.length>0?v`<ul class="debug-overlay__list debug-overlay__events">
        ${t.map(e=>v`<li>
            <span class="mono">${e.event}</span>
            <time>${m(e.ts)}</time>
          </li>`)}
      </ul>`:v`<div class="debug-overlay__empty">${E(`debug.noEvents`)}</div>`}var Y;function X(){return(X=e((()=>{t(),g(),b(),T(),f(),te(),L(),Y=[R({id:`lanes`,titleKey:`debug.overlay.lanes`,load:(e,t)=>j(e.client,t),render:z}),R({id:`status`,titleKey:`debug.overlay.status`,load:async(e,t)=>{let[n,r]=await Promise.all([e.client.request(`status`,{},{signal:t}),e.client.request(`system.info`,{},{signal:t}).catch(()=>null)]);return{eventLoop:n.eventLoop,processMemory:n.processMemory,disks:r?.disks,...typeof n.uptimeMs==`number`?{uptimeMs:n.uptimeMs}:{}}},render:K}),R({id:`active-runs`,titleKey:`debug.overlay.activeRuns`,load:async(e,t)=>((await e.client.request(`sessions.list`,{},{signal:t})).sessions??[]).filter(e=>e.hasActiveRun===!0),render:q}),R({id:`events`,titleKey:`debug.overlay.events`,load:async e=>e.gateway,render:J})]})))()}var Z,Q;function $(){return($=e((()=>{a(),g(),h(),C(),T(),D(),p(),k(),l(),X(),Z=2e3,Q=class extends s{constructor(...e){super(...e),this.open=!1,this.sections=new Map,this.requestController=null,this.requestActive=!1,this.requestGeneration=0,this.statusHistory=[],this.polling=new A(this,Z,()=>void this.refreshSections(),!1),this.gateway=new O(this,{getGateway:()=>this.context?.gateway,invalidateRequests:()=>this.resetSections(),ensureInitialData:()=>void this.refreshSections()}),this.subscriptions=new c(this).watch(()=>this.open?this.context?.gateway:null,(e,t)=>e.subscribeEventLog(t)),this.handleKeydown=e=>{e.key!==`Escape`||e.defaultPrevented||(e.preventDefault(),this.close())},this.close=()=>{!this.open&&!this.requestController||(this.open=!1,this.polling.stop(),document.removeEventListener(`keydown`,this.handleKeydown,!0),this.resetSections(),this.subscriptions.clear())}}disconnectedCallback(){this.close(),super.disconnectedCallback()}toggle(){if(this.open){this.close();return}this.open=!0,document.addEventListener(`keydown`,this.handleKeydown,!0),this.sections=new Map(Y.map(e=>[e.id,{status:`loading`}])),this.refreshSections(),this.polling.start()}resetSections(){this.requestGeneration+=1,this.requestController?.abort(),this.requestController=null,this.requestActive=!1,this.statusHistory=[],this.sections=new Map(Y.map(e=>[e.id,{status:this.gateway.connected?`loading`:`unavailable`}]))}async refreshSections(){let e=this.gateway.gateway,t=this.gateway.connected?this.gateway.client:null;if(!this.open||this.requestActive)return;if(!e||!t){this.sections=new Map(Y.map(e=>[e.id,{status:`unavailable`}]));return}this.requestActive=!0;let n=++this.requestGeneration,r=new AbortController;this.requestController?.abort(),this.requestController=r;let i=Y.map(async i=>{try{let a=await i.load({client:t,gateway:e},r.signal);this.updateSection(n,i.id,{status:`ready`,value:a})}catch{this.updateSection(n,i.id,{status:`unavailable`})}});await Promise.allSettled(i),!(!this.open||n!==this.requestGeneration)&&(this.requestController=null,this.requestActive=!1)}updateSection(e,t,n){if(!this.open||e!==this.requestGeneration)return;if(t===`status`&&n.status===`ready`){let e=n.value;this.statusHistory=[...this.statusHistory.slice(-89),{at:Date.now(),status:e}]}let r=new Map(this.sections);r.set(t,n),this.sections=r}renderSection(e){let t=this.sections.get(e.id)??{status:`loading`};return v`
      <section class="debug-overlay__section">
        <h3>${E(e.titleKey)}</h3>
        ${t.status===`loading`?v`<div class="debug-overlay__empty">${E(`common.loading`)}</div>`:t.status===`unavailable`?v`<div class="debug-overlay__empty">${E(`debug.overlay.unavailable`)}</div>`:e.render(t.value,this.statusHistory)}
      </section>
    `}render(){return this.open?v`
      <aside class="debug-overlay" aria-label=${E(`debug.overlay.title`)}>
        <header class="debug-overlay__header">
          <div>
            <div class="debug-overlay__eyebrow">${E(`debug.overlay.eyebrow`)}</div>
            <h2>${E(`debug.overlay.title`)}</h2>
          </div>
          <button
            type="button"
            class="debug-overlay__close"
            aria-label=${E(`common.close`)}
            @click=${this.close}
          >
            ×
          </button>
        </header>
        <div class="debug-overlay__body">
          ${Y.map(e=>this.renderSection(e))}
        </div>
      </aside>
    `:x}},n([r({context:w,subscribe:!0})],Q.prototype,`context`,void 0),n([y()],Q.prototype,`open`,void 0),n([y()],Q.prototype,`sections`,void 0),customElements.get(`openclaw-debug-overlay`)||customElements.define(`openclaw-debug-overlay`,Q)})))()}$();export{Q as DebugOverlay};
//# sourceMappingURL=debug-overlay-BO58g5I2.js.map