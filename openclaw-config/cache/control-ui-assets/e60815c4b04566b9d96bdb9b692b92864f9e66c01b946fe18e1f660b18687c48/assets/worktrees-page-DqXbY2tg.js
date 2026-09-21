import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,L as n,R as r}from"./control-ui-foundation-DMb6IeIq.js";import{A as i,Gc as a,Yo as o,aa as s,ia as c,on as l,qc as u,qo as d,ro as f,ta as p,tn as m,to as h}from"./control-ui-core-DzidtL-P.js";import{$ as g,K as _,X as v,at as y,q as b}from"./lit-runtime-vxhGQLC6.js";import{Rn as x,Tn as S,cn as C,h as w,m as T,sn as E,zn as D}from"./control-ui-core-CaKBexnk.js";import{Bt as O,Gt as k}from"./control-ui-core-uEI6aN5p.js";import{B as A,I as j,L as M,R as N}from"./control-ui-boot-shared-nBxCfWV5.js";import{Et as P,Ft as F,Lt as I,Nt as L,Ot as R,wt as z,zt as B}from"./control-ui-boot-shared-Cyt1Zyts.js";import{Nt as V,Pt as H}from"./control-ui-boot-chat-pu3gR1ly.js";import{Qs as U,Zs as W}from"./control-ui-boot-shared-CH-OC11d.js";import{a as G}from"./control-ui-boot-new-DeGMjctK.js";import{n as K,t as q}from"./settings-workspace-IBRfeTG9.js";import{n as J,t as Y}from"./sessions-hub-header-CcnzhSlV.js";var X,Z;function Q(){return(Q=e((()=>{r(),j(),_(),g(),S(),w(),E(),V(),Y(),z(),q(),O(),o(),l(),h(),p(),U(),u(),X=`https://docs.openclaw.ai/concepts/managed-worktrees`,Z=class extends a{constructor(...e){super(...e),this.records=[],this.error=null,this.busyId=null,this.createOpen=!1,this.createRepoRoot=``,this.createName=``,this.createBaseRef=``,this.createBranches=[],this.creating=!1,this.gcLoading=!1,this.listClient=null,this.gateway=new W(this,{getGateway:()=>this.context?.gateway,onIdentityChange:()=>{this.records=[],this.error=null},invalidateRequests:e=>{(e.snapshot.phase!==`connected`||!e.snapshot.client)&&(this.listClient=null,this.listTask.run([null])),this.branchesTask.run([null,``]),this.invalidateOperations()},ensureInitialData:()=>void this.load(),onSnapshot:e=>{C(e.snapshot).canAdmin||(this.createOpen=!1)}}),this.listTask=new M(this,{autoRun:!1,args:()=>[this.gateway.connected?this.gateway.client:null],task:([e],{signal:t})=>e?e.request(`worktrees.list`,{},{signal:t}):N,onComplete:e=>{this.records=e.worktrees.toSorted((e,t)=>t.lastActiveAt-e.lastActiveAt)},onError:e=>{this.error=d(e)}}),this.branchesTask=new M(this,{autoRun:!1,args:()=>[this.gateway.connected?this.gateway.client:null,this.createRepoRoot.trim()],task:([e,t],{signal:n})=>e&&t?e.request(`worktrees.branches`,{repoRoot:t},{signal:n}):N,onComplete:e=>{this.createBranches=e.branches.map(e=>e.name),this.createBaseRef||=e.defaultBranch??e.headBranch??``},onError:()=>{this.createBranches=[]}})}disconnectedCallback(){this.listClient=null,this.listTask.run([null]),this.branchesTask.run([null,``]),super.disconnectedCallback()}invalidateOperations(){this.busyId=null,this.creating=!1,this.gcLoading=!1}get operationPending(){return this.loading||this.busyId!==null||this.creating}get loading(){return this.gcLoading||this.listTask.status===A.PENDING}get canAdmin(){return C(this.context.gateway.snapshot).canAdmin}get canWrite(){return C(this.context.gateway.snapshot).canWrite}async load(e={}){let t=this.gateway.client;!t||!this.gateway.connected||this.busyId!==null||this.creating||this.gcLoading||this.listTask.status===A.PENDING&&this.listClient===t||(this.listClient=t,e.preserveError||(this.error=null),await this.listTask.run([t]))}async runOperation(e,t){this.error=null;try{await t()}catch(t){this.gateway.isCurrent(e)&&(this.error=d(t))}finally{this.gateway.isCurrent(e)&&(this.invalidateOperations(),await this.load({preserveError:!0}))}}async removeWorktree(e){let t=this.gateway.capture();!t||!this.canAdmin||this.operationPending||!await H({message:k(`worktrees.confirmDelete`,{name:e.name}),confirmLabel:k(`common.delete`),danger:!0})||!this.gateway.isCurrent(t)||!this.canAdmin||this.operationPending||(this.busyId=e.id,await this.runOperation(t,async()=>{let n=await t.client.request(`worktrees.remove`,{id:e.id});if(!this.gateway.isCurrent(t)||n.removed)return;let r=n.snapshotError??``,i=await H({message:k(`worktrees.confirmForceDelete`,{error:r}),confirmLabel:k(`common.delete`),danger:!0});if(!this.gateway.isCurrent(t)||!this.canAdmin)return;if(!i){this.error=r||null;return}let a=await t.client.request(`worktrees.remove`,{id:e.id,force:!0});this.gateway.isCurrent(t)&&(this.error=a.snapshotError??null)}))}async restore(e){let t=this.gateway.capture();!t||!this.canAdmin||this.operationPending||(this.busyId=e.id,await this.runOperation(t,()=>t.client.request(`worktrees.restore`,{id:e.id})))}async gc(){let e=this.gateway.capture();!e||!this.canAdmin||this.operationPending||(this.gcLoading=!0,await this.runOperation(e,()=>e.client.request(`worktrees.gc`,{})))}toggleCreate(){if(!(!this.canAdmin||this.creating)&&(this.createOpen=!this.createOpen,this.createOpen&&!this.createRepoRoot)){let e=this.context.agents.state.agentsList,t=e?.agents.find(t=>t.id===e.defaultId);this.createRepoRoot=t?.workspace??``,this.loadCreateBranches()}}loadCreateBranches(){let e=this.gateway.connected?this.gateway.client:null,t=this.createRepoRoot.trim();if(!e||!t||!this.canWrite){this.createBranches=[],this.branchesTask.run([null,``]);return}this.branchesTask.run([e,t])}async createWorktree(){let e=this.gateway.capture(),t=this.createRepoRoot.trim();!e||!this.canAdmin||!t||this.operationPending||(this.creating=!0,await this.runOperation(e,async()=>{await G(e.client,{repoRoot:t,name:this.createName,baseRef:this.createBaseRef}),this.gateway.isCurrent(e)&&(this.createOpen=!1,this.createName=``)}))}renderOwner(e){if(e.ownerKind===`session`&&e.ownerId){let t=c(this.context,e.ownerId),n=s({context:this.context,face:t,sessionKey:e.ownerId,preferenceDerivedFace:!0});return v`<a
        href=${n.href}
        title=${e.ownerId}
        @click=${e=>{i(e)&&(e.preventDefault(),this.context.navigate(t,n.options))}}
        >${k(`worktrees.ownerSession`)}</a
      >`}return e.ownerKind===`workboard`?v`<span title=${e.ownerId??``}>${k(`worktrees.ownerWorkboard`)}</span>`:v`<span>${k(`worktrees.ownerManual`)}</span>`}renderCreateRows(){return this.createOpen?v`
      ${F({title:k(`worktrees.repo`),control:v`
          <input
            class="settings-input"
            type="text"
            aria-label=${k(`worktrees.repo`)}
            ?disabled=${this.creating}
            .value=${this.createRepoRoot}
            @change=${e=>{this.createRepoRoot=e.target.value,this.createBaseRef=``,this.loadCreateBranches()}}
          />
        `})}
      ${F({title:k(`worktrees.name`),control:v`
          <input
            class="settings-input"
            type="text"
            aria-label=${k(`worktrees.name`)}
            ?disabled=${this.creating}
            placeholder=${k(`worktrees.namePlaceholder`)}
            .value=${this.createName}
            @input=${e=>{this.createName=e.target.value}}
          />
        `})}
      ${F({title:k(`worktrees.baseBranch`),control:v`
          <input
            class="settings-input"
            type="text"
            aria-label=${k(`worktrees.baseBranch`)}
            ?disabled=${this.creating}
            list="worktrees-create-branches"
            .value=${this.createBaseRef}
            @input=${e=>{this.createBaseRef=e.target.value}}
          />
          <datalist id="worktrees-create-branches">
            ${this.createBranches.map(e=>v`<option value=${e}></option>`)}
          </datalist>
        `})}
      ${F({title:k(`worktrees.newWorktree`),control:v`
          <button
            class="btn btn--sm"
            ?disabled=${this.operationPending||!this.createRepoRoot.trim()}
            @click=${()=>void this.createWorktree()}
          >
            ${this.creating?k(`common.loading`):k(`common.create`)}
          </button>
        `})}
    `:b}renderRecordRow(e){return F({title:e.name,description:v`
        <span title=${e.repoRoot}>${f(e.repoRoot)}</span> · ${e.branch} ·
        ${this.renderOwner(e)} · ${m(e.lastActiveAt)}
      `,control:v`
        ${e.removedAt?B({kind:`muted`,label:k(`worktrees.restorable`)}):B({kind:`ok`,label:k(`common.active`)})}
        <button
          class=${e.removedAt?`btn btn--sm`:`btn btn--sm danger`}
          title=${this.canAdmin?``:k(`worktrees.adminRequired`)}
          ?disabled=${!this.canAdmin||this.operationPending}
          @click=${()=>void(e.removedAt?this.restore(e):this.removeWorktree(e))}
        >
          ${e.removedAt?k(`worktrees.restore`):k(`common.delete`)}
        </button>
      `})}render(){let e=v`
      <button
        class="btn"
        title=${this.canAdmin?``:k(`worktrees.adminRequired`)}
        ?disabled=${!this.canAdmin||this.creating}
        @click=${()=>this.toggleCreate()}
      >
        ${k(`worktrees.newWorktree`)}
      </button>
      <button
        class="btn"
        title=${this.canAdmin?``:k(`worktrees.adminRequired`)}
        ?disabled=${!this.canAdmin||this.operationPending}
        @click=${()=>void this.gc()}
      >
        ${this.loading?k(`common.loading`):k(`worktrees.cleanNow`)}
      </button>
    `,t=v`
      ${this.renderCreateRows()}
      ${this.records.length===0?R(k(`worktrees.empty`)):this.records.map(e=>this.renderRecordRow(e))}
    `,n=L(v`
        ${this.canAdmin?b:v`<div class="callout info" role="note">${k(`worktrees.adminRequired`)}</div>`}
        ${this.error?v`<div class="callout danger" role="alert">${this.error}</div>`:b}
        ${I({title:k(`worktrees.title`),description:k(`worktrees.subtitle`),actions:e},t)}
      `,{wide:!0});return v`
      ${J({active:`worktrees`,title:D(`sessions`),subtitle:v`${x(`worktrees`)} ${P(X)}`,onSelect:e=>{e!==`worktrees`&&this.context?.navigate(e)}})}
      ${K(n,{id:`sessions-hub-panel`})}
    `}},t([n({context:T,subscribe:!0})],Z.prototype,`context`,void 0),t([y()],Z.prototype,`records`,void 0),t([y()],Z.prototype,`error`,void 0),t([y()],Z.prototype,`busyId`,void 0),t([y()],Z.prototype,`createOpen`,void 0),t([y()],Z.prototype,`createRepoRoot`,void 0),t([y()],Z.prototype,`createName`,void 0),t([y()],Z.prototype,`createBaseRef`,void 0),t([y()],Z.prototype,`createBranches`,void 0),t([y()],Z.prototype,`creating`,void 0),t([y()],Z.prototype,`gcLoading`,void 0),customElements.get(`openclaw-worktrees-page`)||customElements.define(`openclaw-worktrees-page`,Z)})))()}Q();
//# sourceMappingURL=worktrees-page-DqXbY2tg.js.map