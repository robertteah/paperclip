import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,L as n,R as r}from"./control-ui-foundation-DMb6IeIq.js";import{Gc as i,Gn as a,Kn as o,Yo as s,on as c,qc as l,qo as u,rn as d}from"./control-ui-core-DzidtL-P.js";import{$ as f,K as p,X as m,at as h,q as g,r as _,t as v}from"./lit-runtime-vxhGQLC6.js";import{Jn as y,Tn as b,Yn as x,h as ee,m as te,zn as ne}from"./control-ui-core-CaKBexnk.js";import{Bt as re,Gt as S}from"./control-ui-core-uEI6aN5p.js";import{B as C,I as w,L as T,R as E}from"./control-ui-boot-shared-nBxCfWV5.js";import{$n as D,Ft as O,Lt as k,Nt as A,Ot as j,er as M,wt as N,zt as P}from"./control-ui-boot-shared-Cyt1Zyts.js";import{Qs as F,Zs as I,bs as L,i as ie,n as R,r as z,ys as B}from"./control-ui-boot-shared-CH-OC11d.js";import{n as V,t as H}from"./settings-workspace-IBRfeTG9.js";import{i as U,s as W}from"./presenter-Bco2R70L.js";import{a as G,n as K,t as q}from"./lane-table-Do_ICwiZ.js";function J(e,t){return O({title:e,stacked:!0,control:m`<pre class="code-block">
${_(D(JSON.stringify(t??{},null,2)))}</pre>`})}function Y(e){let t=(e.status&&typeof e.status==`object`?e.status.securityAudit:null)?.summary??null;if(!t)return g;let n=t.critical??0,r=t.warn??0,i=t.info??0,a=n>0?`danger`:r>0?`warn`:`ok`,o=n>0?S(`debug.security.critical`,{count:String(n)}):r>0?S(`debug.security.warnings`,{count:String(r)}):S(`debug.security.noCriticalIssues`),s=i>0?` · ${S(`debug.security.info`,{count:String(i)})}`:``;return O({title:S(`debug.security.audit`),description:m`
      ${S(`debug.security.runPrefix`)}
      <span class="mono">openclaw security audit --deep</span>
      ${S(`debug.security.runSuffix`)}
    `,control:P({kind:a,label:`${o}${s}`})})}function ae(e){return e?m`
    <div class="settings-row" role="alert">
      <div class="settings-row__text">
        <span class="settings-row__title">
          ${P({kind:`danger`,label:S(`common.failed`)})}
        </span>
        <span class="settings-row__desc">${e}</span>
      </div>
    </div>
  `:g}function oe(e){if(!(e.connected?e.loading:e.offlineStable))return g;let t=e.connected;return O({title:P({kind:t?`accent`:`muted`,label:S(t?`common.refreshing`:`common.offline`)}),description:S(t?`debug.refreshingSnapshots`:`debug.offlineSnapshots`)})}function se(e){return O({title:e.event,description:d(e.ts,void 0,``),stacked:!0,control:m`<pre class="code-block">
${_(D(U(e.payload)))}</pre>`})}function ce(e){let t=e.connected&&e.loading,n=k({title:S(`debug.snapshotsTitle`),description:S(`debug.snapshotsSubtitle`),actions:m`
        <button
          class="btn"
          ?disabled=${!e.connected||e.loading}
          @click=${e.onRefresh}
        >
          ${S(t?`common.refreshing`:`common.refresh`)}
        </button>
      `},m`
      ${oe(e)} ${ae(e.diagnosticsError)}
      ${Y(e)} ${J(S(`debug.status`),e.status)}
      ${J(S(`debug.health`),e.health)}
      ${J(S(`debug.lastHeartbeat`),e.heartbeat)}
    `),r=k({title:S(`debug.lanes.title`),description:S(`debug.lanes.subtitle`),actions:m`
        <button class="btn" @click=${e.onOpenOverlay}>
          ${x()?S(`debug.overlay.open`):S(`debug.overlay.openWithShortcut`,{shortcut:R})}
        </button>
      `},m`
      <div class="data-table-container command-lanes-table-wrap">
        <table class="data-table command-lanes-table settings-table--stacked" role="table">
          <thead>
            <tr>
              <th scope="col">${S(`debug.lanes.lane`)}</th>
              <th scope="col">${S(`debug.lanes.active`)}</th>
              <th scope="col">${S(`debug.lanes.queued`)}</th>
              <th scope="col">${S(`debug.lanes.group`)}</th>
              <th scope="col">${S(`debug.lanes.blocked`)}</th>
            </tr>
          </thead>
          <tbody>
            ${K({lanes:e.lanes,dynamic:e.dynamic})}
          </tbody>
        </table>
      </div>
    `),i=k({title:S(`debug.manualRpcTitle`),description:S(`debug.manualRpcSubtitle`)},m`
      ${O({title:S(`debug.method`),control:m`
          <select
            class="settings-select"
            aria-label=${S(`debug.method`)}
            .value=${e.callMethod}
            @change=${t=>e.onCallMethodChange(t.target.value)}
          >
            ${e.callMethod?g:m` <option value="" disabled>${S(`debug.selectMethod`)}</option> `}
            ${e.methods.map(e=>m`<option value=${e}>${e}</option>`)}
          </select>
        `})}
      ${O({title:S(`debug.paramsJson`),stacked:!0,control:m`
          <textarea
            class="settings-input"
            aria-label=${S(`debug.paramsJson`)}
            .value=${e.callParams}
            @input=${t=>e.onCallParamsChange(t.target.value)}
            rows="6"
          ></textarea>
        `})}
      ${O({title:S(`common.call`),control:m`
          <button class="btn primary" @click=${e.onCall}>${S(`common.call`)}</button>
        `})}
      ${e.callError?m`
              <div class="settings-row settings-row--stacked">
                ${P({kind:`danger`,label:S(`debug.callFailed`)})}
                <pre class="code-block">${e.callError}</pre>
              </div>
            `:g}
      ${e.callResult?m`
              <div class="settings-row settings-row--stacked">
                ${P({kind:`ok`,label:S(`common.ok`)})}
                <pre class="code-block">${_(D(e.callResult))}</pre>
              </div>
            `:g}
    `),a=k({title:S(`debug.modelsTitle`),description:S(`debug.modelsSubtitle`)},m`
      <div class="settings-row settings-row--stacked">
        <pre class="code-block">
${_(D(JSON.stringify(e.models??[],null,2)))}</pre>
      </div>
    `),o=k({title:S(`debug.eventLogTitle`),description:S(`debug.eventLogSubtitle`)},e.eventLog.length===0?j(S(`debug.noEvents`)):e.eventLog.map(e=>se(e)));return A(m`${n} ${r} ${i} ${a} ${o}`,{wide:!0})}function X(){return(X=e((()=>{p(),v(),y(),M(),N(),re(),c(),W(),z(),q()})))()}var Z,Q;function $(){return($=e((()=>{r(),w(),p(),f(),b(),ee(),H(),s(),F(),l(),L(),o(),z(),X(),Z=3e3,Q=class extends i{constructor(...e){super(...e),this.debugStatus=null,this.debugHealth=null,this.debugModels=[],this.debugHeartbeat=null,this.debugLanes=[],this.debugDynamic=null,this.debugCallMethod=``,this.debugCallParams=`{}`,this.debugCallResult=null,this.debugCallError=null,this.debugDiagnosticsError=null,this.eventLog=[],this.polling=new B(this,Z,()=>{this.loadDiagnostics()},!1),this.callEpoch=0,this.diagnosticsTaskActiveClient=null,this.diagnosticsAgentId=null,this.diagnosticsTask=new T(this,{autoRun:!1,args:()=>[this.gateway.connected?this.gateway.client:null,this.context?.agentSelection.state.selectedId??null],task:([e,t],{signal:n})=>e?G(e,t,n):E,onComplete:e=>{this.diagnosticsTaskActiveClient=null,this.debugDiagnosticsError=null,this.debugStatus=e.status,this.debugHealth=e.health,this.debugModels=e.models,this.debugHeartbeat=e.heartbeat,this.debugLanes=e.lanes,this.debugDynamic=e.dynamic},onError:e=>{this.diagnosticsTaskActiveClient=null,this.debugDiagnosticsError=u(e)}}),this.gateway=new I(this,{getGateway:()=>this.context?.gateway,onIdentityChange:()=>{this.debugStatus=null,this.debugHealth=null,this.debugModels=[],this.debugHeartbeat=null,this.debugLanes=[],this.debugDynamic=null,this.debugCallResult=null,this.debugCallError=null,this.debugDiagnosticsError=null},invalidateRequests:()=>{this.diagnosticsTask.run([null,null]),this.diagnosticsTaskActiveClient=null,this.callEpoch+=1},onSnapshot:()=>{this.syncPolling(),this.ensureInitialDebug()}}),this.subscriptions=new a(this).watch(()=>this.context?.gateway,(e,t)=>e.subscribeEventLog(t),e=>{this.eventLog=e.eventLog}).watch(()=>this.context?.agentSelection,(e,t)=>e.subscribe(t),e=>{let t=e.state.selectedId;t!==this.diagnosticsAgentId&&(this.diagnosticsAgentId=t,this.debugModels=[],this.diagnosticsTask.run([null,null]),this.diagnosticsTaskActiveClient=null,this.loadDiagnostics())})}disconnectedCallback(){this.subscriptions.clear(),this.diagnosticsTask.run([null,null]),this.diagnosticsTaskActiveClient=null,this.diagnosticsAgentId=null,this.callEpoch+=1,super.disconnectedCallback()}syncPolling(){if(!this.gateway.connected||!this.gateway.client){this.polling.stop();return}this.polling.start()}ensureInitialDebug(){!this.gateway.connected||!this.gateway.client||this.debugStatus||this.diagnosticsTaskActiveClient||this.loadDiagnostics()}loadDiagnostics(){let e=this.gateway.connected?this.gateway.client:null;return!e||this.diagnosticsTaskActiveClient?Promise.resolve():(this.diagnosticsTaskActiveClient=e,this.diagnosticsTask.run([e,this.context.agentSelection.state.selectedId]))}async callDebugMethod(){let e=this.gateway.connected?this.gateway.client:null;if(!e)return;this.debugCallError=null,this.debugCallResult=null;let t=this.gateway.gateway,n=++this.callEpoch,r=()=>this.gateway.connected&&this.gateway.client===e&&this.gateway.gateway===t&&this.context.gateway===t&&this.callEpoch===n;try{let t=this.debugCallParams.trim()?JSON.parse(this.debugCallParams):{},n=await e.request(this.debugCallMethod.trim(),t);r()&&(this.debugCallResult=JSON.stringify(n,null,2))}catch(e){r()&&(this.debugCallError=u(e))}}render(){let e=ce({connected:this.gateway.connected,offlineStable:this.gateway.snapshot?.offlineStable??!1,loading:this.diagnosticsTask.status===C.PENDING,status:this.debugStatus,health:this.debugHealth,models:this.debugModels,heartbeat:this.debugHeartbeat,lanes:this.debugLanes,dynamic:this.debugDynamic,diagnosticsError:this.debugDiagnosticsError,eventLog:this.eventLog,methods:(this.context.gateway.snapshot.hello?.features?.methods??[]).toSorted(),callMethod:this.debugCallMethod,callParams:this.debugCallParams,callResult:this.debugCallResult,callError:this.debugCallError,onCallMethodChange:e=>this.debugCallMethod=e,onCallParamsChange:e=>this.debugCallParams=e,onRefresh:()=>void this.loadDiagnostics(),onOpenOverlay:ie,onCall:()=>void this.callDebugMethod()});return m`
      <section class="content-header">
        <div>
          <div class="page-title">${ne(`debug`)}</div>
        </div>
      </section>
      ${V(e)}
    `}},t([n({context:te,subscribe:!0})],Q.prototype,`context`,void 0),t([h()],Q.prototype,`debugStatus`,void 0),t([h()],Q.prototype,`debugHealth`,void 0),t([h()],Q.prototype,`debugModels`,void 0),t([h()],Q.prototype,`debugHeartbeat`,void 0),t([h()],Q.prototype,`debugLanes`,void 0),t([h()],Q.prototype,`debugDynamic`,void 0),t([h()],Q.prototype,`debugCallMethod`,void 0),t([h()],Q.prototype,`debugCallParams`,void 0),t([h()],Q.prototype,`debugCallResult`,void 0),t([h()],Q.prototype,`debugCallError`,void 0),t([h()],Q.prototype,`debugDiagnosticsError`,void 0),t([h()],Q.prototype,`eventLog`,void 0),customElements.get(`openclaw-debug-page`)||customElements.define(`openclaw-debug-page`,Q)})))()}$();
//# sourceMappingURL=debug-page-BW54cUSm.js.map