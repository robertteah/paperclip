import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,L as n,R as r}from"./control-ui-foundation-DMb6IeIq.js";import{A as i,Gc as a,Gn as o,Jo as s,Kn as c,On as l,Yo as u,Ys as ee,aa as d,cc as te,ea as ne,en as re,fn as ie,ia as ae,ic as f,na as p,on as m,pn as h,qc as oe,qo as g,ra as se,ta as _,tn as ce}from"./control-ui-core-DzidtL-P.js";import{$ as le,K as v,X as y,at as b,m as ue,p as de,q as x}from"./lit-runtime-vxhGQLC6.js";import{Rn as fe,Tn as pe,an as me,fn as he,h as ge,m as S,on as C,pn as w,sn as T,zn as E}from"./control-ui-core-CaKBexnk.js";import{Bt as D,Gt as O}from"./control-ui-core-uEI6aN5p.js";import{B as k,I as A,L as j,R as M}from"./control-ui-boot-shared-nBxCfWV5.js";import{Lt as N,Nt as P,Ot as F,Pt as I,Ss as L,wt as R,zt as _e}from"./control-ui-boot-shared-Cyt1Zyts.js";import{$ as ve,J as z,Q as B,X as V,at as ye,ct as be,et as xe,lt as Se,nt as Ce,ot as we,q as H,rt as Te,st as Ee,tt as U}from"./control-ui-boot-chat-pu3gR1ly.js";import{Qs as De,Zs as Oe}from"./control-ui-boot-shared-CH-OC11d.js";import{n as ke,t as Ae}from"./settings-workspace-IBRfeTG9.js";import{n as je,t as Me}from"./agent-scope-control-CqnA-t3U.js";function Ne(e,t){let n=e.childSessionKey??e.sessionKey;if(!n)return x;let r=t.sessionRow(n),a=d({face:se(r),sessionKey:n,fallbackAgentId:t.agentId,basePath:t.basePath,mainKey:t.mainKey,row:r,preferenceDerivedFace:!0}).href;return y`<a
    class="session-link"
    href=${a}
    @click=${e=>{i(e)&&(e.preventDefault(),t.onNavigateToChat(n))}}
    >${O(`tasksPage.openSession`)}</a
  >`}function Pe(e,t){let n=e.status===`queued`||e.status===`running`,r=be(e.updatedAt??e.createdAt),i=ye(e),a=Se(e),o=t.cancellingTaskIds.has(e.id),s=e.terminalOutcome===`blocked`,c=s&&e.deliveryStatus===`failed`,l=s&&e.deliveryStatus===`dismissed`,u=n&&t.canCancel||s&&t.canCopy||c&&t.canCancel;return y`
    <div class="settings-row task-row" data-task-id=${e.id}>
      <div class="settings-row__text task-row__content">
        <div class="settings-row__title">${a}</div>
        <div class="task-row__facts">
          <span data-task-status
            >${_e({kind:Fe(e.status),label:Ee(e.status)})}</span
          >
          <span>${we(e)}</span>
          ${e.agentId?y`<span>${O(`tasksPage.agent`,{agent:e.agentId})}</span>`:x}
        </div>
        ${i?y`<div class="settings-row__desc">${i}</div>`:x}
        ${s?y`<div class="task-row__warning">
                <span
                  >${O(l?`tasksPage.deliveryDismissed`:`tasksPage.deliveryBlocked`)}</span
                >
                ${c?y`<span class="muted">${O(`tasksPage.duplicateRisk`)}</span>`:x}
              </div>`:x}
      </div>
      <div class="settings-row__control task-row__control">
        <div class="task-row__links">
          ${r>0?y`<span title=${re(r)}
                  >${ce(r)}</span
                >`:y`<span>${O(`common.na`)}</span>`}
          ${Ne(e,t)}
        </div>
        ${u?y`<div class="task-row__actions">
                ${n&&t.canCancel?y`<button
                        class="btn btn--sm"
                        type="button"
                        aria-label=${O(`tasksPage.cancelTask`,{title:a})}
                        ?disabled=${o||!t.connected}
                        @click=${()=>t.onCancel(e.taskId)}
                      >
                        ${O(o?`tasksPage.cancelling`:`common.cancel`)}
                      </button>`:x}
                ${s&&t.canCopy?y`<button
                        class="btn btn--sm"
                        type="button"
                        ?disabled=${o||!t.connected}
                        @click=${()=>t.onCopyResult(e.taskId)}
                      >
                        ${O(`tasksPage.copyResult`)}
                      </button>`:x}
                ${c&&t.canCancel?y`
                        <button
                          class="btn btn--sm"
                          type="button"
                          ?disabled=${o||!t.connected}
                          @click=${()=>t.onRetry(e.taskId)}
                        >
                          ${O(`tasksPage.retryDelivery`)}
                        </button>
                        <button
                          class="btn btn--sm"
                          type="button"
                          ?disabled=${o||!t.connected}
                          @click=${()=>t.onDismiss(e.taskId)}
                        >
                          ${O(`tasksPage.dismissDelivery`)}
                        </button>
                      `:x}
              </div>`:x}
      </div>
    </div>
  `}function Fe(e){switch(e){case`completed`:return`ok`;case`failed`:case`timed_out`:return`danger`;case`queued`:case`running`:return`warn`;case`cancelled`:return`muted`}return e}function W(e,...t){return e.filter(e=>t.includes(e.status)).length}function G(e,t){let n=e===`active`?[[W(t,`running`),O(`tasksPage.status.running`)],[W(t,`queued`),O(`tasksPage.status.queued`)]]:[[W(t,`completed`),O(`tasksPage.status.completed`)],[W(t,`failed`,`timed_out`),O(`tasksPage.status.failed`)]];return y`<span class="task-heading-facts">
    ${n.map(([e,t],n)=>y`
        ${n>0?y`<span aria-hidden="true">·</span>`:x}
        <span><strong>${e}</strong> ${t}</span>
      `)}
  </span>`}function K(e,t,n,r,i){let a=n.length===0?F(r):ue(n,e=>e.id,e=>Pe(e,i));return y`<div data-task-section=${e}>
    ${N({title:y`${t}${G(e,n)}`},a)}
  </div>`}function Ie(e){let{active:t,recent:n}=Te(e.tasks);return P(y`<div class="tasks-page-list">
      ${e.connected?x:y`<div class="callout warn">${O(`tasksPage.disconnected`)}</div>`}
      ${e.error?y`<div class="callout danger" role="alert">${e.error}</div>`:x}
      ${e.copyResultError?y`<div class="callout danger" role="alert">${e.copyResultError}</div>`:x}
      ${e.loading&&e.tasks.length===0?F(O(`tasksPage.loading`)):x}
      ${!e.loading&&e.tasks.length===0?F(O(`tasksPage.empty`)):x}
      ${K(`active`,O(`tasksPage.active`),t,O(`tasksPage.emptyActive`),e)}
      ${K(`recent`,O(`tasksPage.recent`),n,O(`tasksPage.emptyRecent`),e)}
    </div>`,{wide:!0})}function q(){return(q=e((()=>{v(),de(),R(),D(),m(),_(),z()})))()}function J(e,t){return t?e.agentId?.trim()?e.agentId.trim().toLowerCase()===t:[e.sessionKey,e.childSessionKey,e.ownerKey].some(e=>f(e)?.agentId===t):!0}function Le(e){return e instanceof he&&e.gatewayCode===`INVALID_REQUEST`}async function Re(e){let t=[],n,r=new Set;for(;;){let i;try{i=await e.client.request(`tasks.list`,{status:[`queued`,`running`],limit:500,...e.agentId?{agentId:e.agentId}:{},...n===void 0?{}:{cursor:n}},{signal:e.signal})}catch(e){throw n!==void 0&&Le(e)?new X(e):e}let a=U(i);if(!a)throw Error(O(`tasksPage.invalidResponse`));if(t=V(t,a.tasks),a.nextCursor===void 0)return t;if(!a.nextCursor||r.has(a.nextCursor))throw new X(Error(O(`tasksPage.invalidResponse`)));r.add(a.nextCursor),n=a.nextCursor}}async function Y(e){let[t,n]=await Promise.all([Re(e),e.client.request(`tasks.list`,{status:Z,sortBy:`endedAt`,limit:200,...e.agentId?{agentId:e.agentId}:{}},{signal:e.signal})]),r=U(n);if(!r)throw Error(O(`tasksPage.invalidResponse`));return{active:t,recent:r.tasks}}async function ze(e){try{return await Y(e)}catch(t){if(!(t instanceof X))throw t;return await Y(e)}}var X,Z,Q;function $(){return($=e((()=>{r(),A(),v(),le(),w(),pe(),ge(),T(),Me(),R(),Ae(),D(),l(),h(),u(),_(),ee(),z(),De(),oe(),c(),q(),X=class extends Error{constructor(e){super(`task list continuation failed`),this.reason=e}},Z=[`completed`,`failed`,`timed_out`,`cancelled`],Q=class extends a{constructor(...e){super(...e),this.tasks=[],this.error=null,this.copyResultError=null,this.cancellingTaskIds=new Set,this.taskRefreshEvents=null,this.taskSnapshotInvalidated=!1,this.copyResultAttempt=0,this.gateway=new Oe(this,{getGateway:()=>this.context?.gateway,onIdentityChange:()=>{this.tasks=[],this.taskSnapshotInvalidated=!1,this.error=null,this.copyResultError=null},invalidateRequests:()=>this.cancelGatewayWork(),onSnapshot:()=>{this.gateway.connected&&this.context.agents.ensureList()},ensureInitialData:()=>void this.refreshTasks()}),this.observeAgentScope=L(()=>{this.gateway.invalidate(),this.cancelGatewayWork(),this.invalidateTaskSnapshot(),this.gateway.connected&&this.refreshTasks(),this.requestUpdate()}),this.listTask=new j(this,{autoRun:!1,args:()=>[this.gateway.connected?this.gateway.gateway:null,this.gateway.connected?this.gateway.client:null,this.context?.agentSelection.state.scopeId??null],task:async([e,t,n],{signal:r})=>{if(!e||!t)return M;let i={gateway:e,client:t,scopeId:n,events:[]};return this.taskRefreshEvents=i,{...await ze({client:t,agentId:n??void 0,signal:r}),buffer:i}},onComplete:({active:e,recent:t,buffer:n})=>{let r=V(e,t);for(let e of n.events)r=H(r,e).tasks;this.taskSnapshotInvalidated=!1,this.tasks=r,this.taskRefreshEvents===n&&(this.taskRefreshEvents=null)},onError:e=>{e instanceof X?this.invalidateTaskSnapshot():this.taskRefreshEvents=null,this.error=g(e instanceof X?e.reason:e,O(`tasksPage.loadFailed`))}}),this.subscriptions=new o(this).effect(()=>this.context?.gateway,e=>e.subscribeEvents(t=>{if(this.gateway.gateway!==e||this.context.gateway!==e||!this.gateway.connected||t.event!==`task`)return;let n=this.context.agentSelection.state.scopeId,r=B(t.payload);if((r?.action===`deleted`||r?.action===`upserted`&&J(r.task,n))&&this.bufferTaskRefreshEvent(r),this.taskSnapshotInvalidated)return;let i=H(this.tasks,t.payload);if(i.refetch){this.refreshTasks();return}this.tasks=i.tasks.filter(e=>J(e,n))})).effect(()=>this.context?.agentSelection,e=>this.observeAgentScope(e)).watch(()=>this.context?.agents,(e,t)=>e.subscribe(t))}bufferTaskRefreshEvent(e){let t=this.taskRefreshEvents;e&&e.action!==`restored`&&t&&t.gateway===this.gateway.gateway&&t.client===this.gateway.client&&t.scopeId===this.context.agentSelection.state.scopeId&&t.events.push(e)}invalidateTaskSnapshot(){this.taskRefreshEvents=null,this.taskSnapshotInvalidated=!0,this.tasks=[]}disconnectedCallback(){this.copyResultAttempt+=1,this.copyResultError=null,this.subscriptions.clear(),super.disconnectedCallback()}cancelGatewayWork(){this.copyResultAttempt+=1,this.copyResultError=null,this.taskRefreshEvents=null,this.listTask.run([null,null,null]),this.cancellingTaskIds=new Set}refreshTasks(){let e=this.gateway.gateway,t=this.gateway.client;if(!e||this.context.gateway!==e||!this.gateway.connected||!t)return Promise.resolve();let n=this.context.agentSelection.state.scopeId;return this.error=null,this.copyResultError=null,this.listTask.run([e,t,n])}async cancelTask(e){let t=this.gateway.capture(),n=this.gateway.gateway;if(!(!t||!n||this.context.gateway!==n||this.cancellingTaskIds.has(e))){this.cancellingTaskIds=new Set([...this.cancellingTaskIds,e]),this.error=null;try{let n=await t.client.request(`tasks.cancel`,{taskId:e});if(!this.gateway.isCurrent(t))return;let r=ve(n);if(r?.task){let e=B({action:`upserted`,task:r.task});this.bufferTaskRefreshEvent(e),this.tasks=H(this.tasks,{action:`upserted`,task:r.task}).tasks}r?.cancelled||(this.error=s(r?.reason,O(`tasksPage.cancelFailed`)))}catch(e){this.gateway.isCurrent(t)&&(this.error=g(e,O(`tasksPage.cancelFailed`)))}finally{if(this.gateway.isCurrent(t)){let t=new Set(this.cancellingTaskIds);t.delete(e),this.cancellingTaskIds=t}}}}async recoverTask(e,t){let n=this.gateway.capture(),r=this.gateway.gateway;if(!(!n||!r||this.context.gateway!==r||this.cancellingTaskIds.has(e))){this.cancellingTaskIds=new Set([...this.cancellingTaskIds,e]),this.error=null;try{let r=t===`retry`?await n.client.request(`tasks.retry`,{taskIds:[e]}):await n.client.request(`tasks.dismiss`,{taskIds:[e]});if(!this.gateway.isCurrent(n))return;let i=Ce(r)?.results[0];if(!i?.ok){this.error=s(i?.reason,O(`tasksPage.recoveryFailed`));return}if(i.task){let e=B({action:`upserted`,task:i.task});this.bufferTaskRefreshEvent(e),this.tasks=H(this.tasks,e).tasks}}catch(e){this.gateway.isCurrent(n)&&(this.error=g(e,O(`tasksPage.recoveryFailed`)))}finally{if(this.gateway.isCurrent(n)){let t=new Set(this.cancellingTaskIds);t.delete(e),this.cancellingTaskIds=t}}}}async copyTaskResult(e){let t=++this.copyResultAttempt,n=this.gateway.capture(),r=this.gateway.gateway;if(!(!n||!r||this.context.gateway!==r))try{let r=xe(await n.client.request(`tasks.get`,{taskId:e}));if(!this.gateway.isCurrent(n)||t!==this.copyResultAttempt)return;let i=r?.result??r?.progressSummary;if(!i){this.copyResultError=O(`tasksPage.recoveryFailed`);return}let a=await ie(i,()=>this.gateway.isCurrent(n)&&t===this.copyResultAttempt);this.gateway.isCurrent(n)&&t===this.copyResultAttempt&&(this.copyResultError=a?null:O(`common.copyFailed`))}catch(e){this.gateway.isCurrent(n)&&t===this.copyResultAttempt&&(this.copyResultError=g(e,O(`tasksPage.recoveryFailed`)))}}render(){let e=p(this.context);return y`
      ${I({title:E(`tasks`),subtitle:fe(`tasks`),actions:y`
          ${je({agents:this.context.agents.state.agentsList?.agents??[],selection:this.context.agentSelection})}
          <button
            class="btn"
            type="button"
            ?disabled=${!this.gateway.connected||this.listTask.status===k.PENDING}
            @click=${()=>void this.refreshTasks()}
          >
            ${this.listTask.status===k.PENDING?O(`common.refreshing`):O(`common.refresh`)}
          </button>
        `})}
      ${ke(Ie({basePath:this.context.basePath,agentId:e,mainKey:te({agentsList:this.context.agents.state.agentsList,hello:this.context.gateway.snapshot.hello}),connected:this.gateway.connected,canCopy:me(this.context.gateway.snapshot.hello?.auth??null),canCancel:C(this.context.gateway.snapshot.hello?.auth??null),loading:this.listTask.status===k.PENDING,error:this.error,copyResultError:this.copyResultError,tasks:this.tasks,cancellingTaskIds:this.cancellingTaskIds,sessionRow:e=>ne(this.context,e),onCancel:e=>void this.cancelTask(e),onRetry:e=>void this.recoverTask(e,`retry`),onDismiss:e=>void this.recoverTask(e,`dismiss`),onCopyResult:e=>void this.copyTaskResult(e),onNavigateToChat:e=>{let t=ae(this.context,e);this.context.navigate(t,d({context:this.context,face:t,sessionKey:e,preferenceDerivedFace:!0}).options)}}))}
    `}},t([n({context:S,subscribe:!0})],Q.prototype,`context`,void 0),t([b()],Q.prototype,`tasks`,void 0),t([b()],Q.prototype,`error`,void 0),t([b()],Q.prototype,`copyResultError`,void 0),t([b()],Q.prototype,`cancellingTaskIds`,void 0),customElements.get(`openclaw-tasks-page`)||customElements.define(`openclaw-tasks-page`,Q)})))()}$();
//# sourceMappingURL=tasks-page-59wyjj_F.js.map