import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t}from"./control-ui-foundation-DMb6IeIq.js";import{Gc as n,Gn as r,Jo as i,Kn as a,Yo as o,do as s,qc as c,qo as l,uo as u}from"./control-ui-core-DzidtL-P.js";import{$ as d,K as f,X as p,at as m,q as h,st as g}from"./lit-runtime-vxhGQLC6.js";import{nn as _,sn as v}from"./control-ui-core-CaKBexnk.js";import{Bt as y,Gt as b,kt as x}from"./control-ui-core-uEI6aN5p.js";import{B as S,I as C,L as w,R as T}from"./control-ui-boot-shared-nBxCfWV5.js";function E(e){return l(e,b(`onboarding.memoryImport.unknownError`))}function D(e){return e.items.filter(e=>e.status===`planned`)}function O(e){return e?.providers.filter(e=>e.found&&e.planFingerprint&&D(e).length>0)??[]}function k(){try{return globalThis.sessionStorage?.getItem(j)===`done`}catch{return!1}}function A(){try{globalThis.sessionStorage?.setItem(j,`done`)}catch{}}var j,M;function N(){return(N=e((()=>{C(),f(),d(),v(),y(),o(),s(),c(),a(),x(),j=`openclaw.onboarding.memory-import`,M=class extends n{constructor(...e){super(...e),this.active=!1,this.selectedByProvider={},this.applyingProviderId=null,this.results={},this.done=!1,this.closed=!1,this.subscriptions=new r(this).watch(()=>this.context?.gateway,(e,t)=>e.subscribe(t)).watch(()=>this.context?.agents,(e,t)=>e.subscribe(t)).watch(()=>this.context?.agentSelection,(e,t)=>e.subscribe(t)),this.planTask=new w(this,{args:()=>{let e=this.context?.gateway.snapshot;return[this.active,this.closed,k(),this.isConnected&&e?.phase===`connected`?e.client??null:null,e?_(e.hello?.auth??null):!1,this.currentAgentId()]},task:async([e,t,n,r,i,a],{signal:o})=>{if(!e||t||n||!r||!i||!a||this.applyingProviderId!==null||this.done)return T;let s=await r.request(`migrations.memory.plan`,{agentId:a,overwrite:!1},{signal:o});return s.agentId!==a||O(s).length===0&&s.providers.some(e=>e.error)?T:{client:r,agentId:a,plan:s}},onComplete:({plan:e})=>{let t=O(e);if(t.length===0){e.providers.some(e=>e.error)||(A(),this.closed=!0);return}this.results={},this.done=!1,this.selectedByProvider=Object.fromEntries(t.map(e=>[e.providerId,!0]))}})}disconnectedCallback(){this.planTask.run([!1,!0,!0,null,!1,null]),this.subscriptions.clear(),super.disconnectedCallback()}updated(){if(this.context?.agents.state.agentsList)this.agentsListRequest=void 0;else if(this.context&&this.agentsListRequest!==this.context.agents){let e=this.context.agents;this.agentsListRequest=e,e.ensureList().catch(()=>null).then(()=>{this.context?.agents===e&&!e.state.agentsList&&(this.agentsListRequest=void 0)})}}currentAgentId(){let e=this.context?.agents.state.agentsList;if(!e)return null;let t=this.context?.agentSelection.state.selectedId;return t&&e.agents.some(e=>e.id===t)?t:e.defaultId??e.agents[0]?.id??null}get planBinding(){let e=this.planTask.value,t=this.context?.gateway.snapshot,n=this.currentAgentId();return this.planTask.status!==S.COMPLETE||!e?null:e.client===t?.client&&e.agentId===n?e:null}get plan(){return this.planBinding?.plan??null}toggleProvider(e,t){this.selectedByProvider={...this.selectedByProvider,[e]:t}}async importSelected(){let e=this.context,t=this.planBinding,n=t?.plan,r=t?.client,i=t?.agentId;if(!e||!r||!n||!i||this.applyingProviderId!==null||this.done)return;let a=O(n).filter(e=>this.selectedByProvider[e.providerId]);if(a.length!==0){for(let e of a){if(!this.isConnected||this.closed||this.context?.gateway.snapshot.client!==r||this.currentAgentId()!==i){this.results={...this.results,[e.providerId]:{kind:`error`,message:b(`onboarding.memoryImport.connectionChanged`)}};continue}let t=D(e).map(e=>e.id),n=e.planFingerprint;if(!(!n||t.length===0)){this.applyingProviderId=e.providerId;try{let a=await r.request(`migrations.memory.apply`,{idempotencyKey:u(),agentId:i,providerId:e.providerId,planFingerprint:n,itemIds:t,overwrite:!1});this.results={...this.results,[e.providerId]:{kind:a.summary.errors>0||a.summary.conflicts>0?`partial`:`success`,result:a}}}catch(t){this.results={...this.results,[e.providerId]:{kind:`error`,message:E(t)}}}}}this.applyingProviderId=null,this.done=this.context?.gateway.snapshot.client===r&&this.currentAgentId()===i,this.done||this.planTask.run()}}finish(){A(),this.closed=!0}reviewDetails(){this.finish(),this.context?.navigate(`memory-import`)}handleModalCancel(e){if(this.applyingProviderId!==null){e.preventDefault();return}this.finish()}renderProvider(e){let t=D(e).length,n=e.items.filter(e=>e.status===`conflict`).length,r=this.results[e.providerId],a=this.applyingProviderId===e.providerId;return p`
      <li class="onboarding-memory-import__provider" data-provider-id=${e.providerId}>
        <label>
          <input
            type="checkbox"
            .checked=${this.selectedByProvider[e.providerId]??!1}
            ?disabled=${this.applyingProviderId!==null||this.done}
            @change=${t=>this.toggleProvider(e.providerId,t.currentTarget.checked)}
          />
          <span class="onboarding-memory-import__provider-copy">
            <strong>${e.label}</strong>
            <code title=${e.source??``}
              >${e.source??b(`onboarding.memoryImport.sourceUnavailable`)}</code
            >
            <small>
              ${b(`onboarding.memoryImport.plannedCount`,{count:String(t)})}
              ${n>0?p`<span>
                      ${b(`onboarding.memoryImport.alreadyImported`,{count:String(n)})}
                    </span>`:h}
            </small>
          </span>
        </label>
        <div class="onboarding-memory-import__provider-status" aria-live="polite">
          ${a?b(`onboarding.memoryImport.importingProvider`):r?.kind===`success`?b(`onboarding.memoryImport.providerResult`,{migrated:String(r.result.summary.migrated),skipped:String(r.result.summary.skipped)}):r?.kind===`partial`?p`<span role="alert">
                      ${b(`onboarding.memoryImport.providerIncomplete`,{conflicts:String(r.result.summary.conflicts),errors:String(r.result.summary.errors),migrated:String(r.result.summary.migrated),skipped:String(r.result.summary.skipped)})}
                    </span>`:r?.kind===`error`?p`<span role="alert">
                        ${b(`onboarding.memoryImport.providerError`,{error:i(r.message)})}
                      </span>`:h}
        </div>
      </li>
    `}render(){let e=this.context,t=e?.gateway.snapshot,n=O(this.plan);if(!this.active||this.closed||k()||!e||t?.phase!==`connected`||!t.client||!_(t.hello?.auth??null)||n.length===0)return h;let r=n.filter(e=>this.selectedByProvider[e.providerId]).length,i=Object.values(this.results).filter(e=>e.kind!==`error`),a=i.reduce((e,t)=>e+t.result.summary.migrated,0),o=i.reduce((e,t)=>e+t.result.summary.skipped,0),s=b(`onboarding.memoryImport.title`),c=b(`onboarding.memoryImport.body`);return p`
      <openclaw-modal-dialog
        class="onboarding-memory-import-dialog"
        label=${s}
        description=${c}
        @modal-cancel=${e=>this.handleModalCancel(e)}
      >
        <section class="onboarding-memory-import">
          <header>
            <h2>${this.done?b(`onboarding.memoryImport.doneTitle`):s}</h2>
            <p>
              ${this.done?b(`onboarding.memoryImport.doneBody`,{migrated:String(a),skipped:String(o)}):c}
            </p>
          </header>
          <ul>
            ${n.map(e=>this.renderProvider(e))}
          </ul>
          <footer>
            ${this.done?p`<button
                    class="btn primary"
                    type="button"
                    data-test-id="onboarding-memory-import-continue"
                    @click=${()=>this.finish()}
                  >
                    ${b(`common.continue`)}
                  </button>`:p`
                    <button
                      class="btn primary"
                      type="button"
                      data-test-id="onboarding-memory-import-import"
                      ?disabled=${r===0||this.applyingProviderId!==null}
                      @click=${()=>void this.importSelected()}
                    >
                      ${this.applyingProviderId?b(`common.importing`):b(`onboarding.memoryImport.import`)}
                    </button>
                    <button
                      class="btn"
                      type="button"
                      data-test-id="onboarding-memory-import-skip"
                      ?disabled=${this.applyingProviderId!==null}
                      @click=${()=>this.finish()}
                    >
                      ${b(`onboarding.memoryImport.skip`)}
                    </button>
                    <button
                      class="btn btn--ghost onboarding-memory-import__review"
                      type="button"
                      ?disabled=${this.applyingProviderId!==null}
                      @click=${()=>this.reviewDetails()}
                    >
                      ${b(`onboarding.memoryImport.reviewDetails`)}
                    </button>
                  `}
          </footer>
        </section>
      </openclaw-modal-dialog>
    `}},t([g({attribute:!1})],M.prototype,`context`,void 0),t([g({type:Boolean})],M.prototype,`active`,void 0),t([m()],M.prototype,`selectedByProvider`,void 0),t([m()],M.prototype,`applyingProviderId`,void 0),t([m()],M.prototype,`results`,void 0),t([m()],M.prototype,`done`,void 0),t([m()],M.prototype,`closed`,void 0),customElements.get(`openclaw-onboarding-memory-import`)||customElements.define(`openclaw-onboarding-memory-import`,M)})))()}N();
//# sourceMappingURL=onboarding-memory-import-BW5n-OHz.js.map