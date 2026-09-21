import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{An as t,Fr as n,L as r,R as i}from"./control-ui-foundation-DMb6IeIq.js";import{Gc as a,Yo as o,on as ee,qc as s,qo as c,tn as l}from"./control-ui-core-DzidtL-P.js";import{$ as u,K as d,X as f,at as p,m as te,p as m,q as h}from"./lit-runtime-vxhGQLC6.js";import{Tn as g,h as _,m as v,zn as y}from"./control-ui-core-CaKBexnk.js";import{Bt as b,Gt as x,It as S,Pt as C,Ut as ne,kt as re}from"./control-ui-core-uEI6aN5p.js";import{a as ie,n as ae,r as oe}from"./gateway-runtime-DP4whqrA.js";import{Lt as se,Nt as ce,Ot as w,Pt as le,Tt as ue,co as T,jt as E,wt as D}from"./control-ui-boot-shared-Cyt1Zyts.js";import{Nt as O,Pt as k}from"./control-ui-boot-chat-pu3gR1ly.js";import{Qs as A,Zs as j}from"./control-ui-boot-shared-CH-OC11d.js";import{n as M,t as N}from"./settings-workspace-IBRfeTG9.js";var P;function F(){return(F=e((()=>{t(),P=/^[A-Z][A-Z0-9_]{0,127}$/})))()}function I(e){return L.test(e)}var L;function R(){return(R=e((()=>{L=/_?(API_KEY|TOKEN|PASSWORD|PRIVATE_KEY|SECRET)$/i})))()}function z(e){let t={},n=e.replace(/\r\n?/gu,`
`);B.lastIndex=0;let r;for(;(r=B.exec(n))!==null;){let e=r[1];if(!e)continue;let n=(r[2]??``).trim(),i=n[0];n=n.replace(/^(['"`])([\s\S]*)\1$/gmu,`$2`),i===`"`&&(n=n.replace(/\\n/gu,`
`).replace(/\\r/gu,`\r`)),t[e]=n}return t}var B;function V(){return(V=e((()=>{B=/^\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?$/gmu})))()}function H(e={}){return{client:e.client??null,connected:e.connected??!1,entries:[],loaded:!1,loading:!1,busy:!1,error:null}}async function U(e){return(await e.request(`secrets.store.list`,{})).entries}async function W(e){let t=e.client;if(!t||!e.connected||e.loading)return!1;e.loading=!0,e.error=null;try{let n=await U(t);return e.client===t&&e.connected?(e.entries=n,e.loaded=!0,!0):!1}catch(n){return e.client===t&&(e.error=c(n)),!1}finally{e.client===t&&(e.loading=!1)}}async function G(e,t){let n=e.client;if(!n||!e.connected||e.busy)return null;e.busy=!0,e.error=null;let r=null,i;try{r=await t(n)}catch(e){i=e}try{let t=await U(n);e.client===n&&e.connected&&(e.entries=t,e.loaded=!0)}catch(e){i??=e}finally{e.client===n&&(e.busy=!1,e.error=i?c(i):null)}return i?null:r}function de(e,t){return G(e,e=>e.request(`secrets.store.set`,{name:t.name,value:t.value,kind:t.kind,...t.kind===`secret`?{allowedHosts:t.allowedHosts.split(/[\s,]+/u).map(e=>e.trim()).filter(Boolean)}:{}}))}function fe(e,t){return G(e,e=>e.request(`secrets.store.delete`,{name:t}))}function pe(e,t){let n=z(e),r=Object.keys(n).filter(e=>!P.test(e));return{entries:Object.entries(n).map(([e,n])=>({name:e,value:n,kind:t&&I(e)?`secret`:`env`})),invalidNames:r}}async function me(e,t){let n=e.client;if(!n||!e.connected||e.busy||t.length===0)return null;e.busy=!0,e.error=null;let r=0,i=0,a;try{for(let a of t){let t=await n.request(`secrets.store.set`,a);r+=1,i=Math.max(i,t.warningCount??0);let o=await U(n);e.client===n&&e.connected&&(e.entries=o,e.loaded=!0)}}catch(e){a=Error(x(`secretsStore.partial`,{saved:String(r),total:String(t.length),error:c(e)}))}try{if(a){let t=await U(n);e.client===n&&e.connected&&(e.entries=t,e.loaded=!0)}}catch(e){a??=e}finally{e.client===n&&(e.busy=!1,e.error=a?c(a):null)}return a?null:{saved:r,warningCount:i}}function K(){return(K=e((()=>{F(),R(),V(),b(),o()})))()}function he(e){let t=l(e.updatedAtMs,{fallback:x(`common.unknown`)});return e.updatedBy?x(`secretsStore.by`,{time:t,name:e.updatedBy}):t}function ge(e,t){return!e.canSet&&!e.canDelete?f``:f`
    <wa-dropdown
      class="secrets-store__menu"
      placement="bottom-end"
      @wa-select=${n=>{n.detail.item.value===`edit`&&e.canSet?e.onOpenEdit(t):n.detail.item.value===`delete`&&e.canDelete&&e.onDelete(t)}}
    >
      <button
        slot="trigger"
        type="button"
        class="btn btn--sm btn--ghost secrets-store__menu-trigger"
        aria-label=${`${x(`secretsStore.actions`)}: ${t.name}`}
        title=${x(`secretsStore.actions`)}
        ?disabled=${e.busy}
      >
        ${C(`moreHorizontal`)}
      </button>
      ${e.canSet?f`<wa-dropdown-item value="edit">${x(`secretsStore.edit`)}</wa-dropdown-item>`:h}
      ${e.canDelete?f`<wa-dropdown-item value="delete" variant="danger"
              >${x(`common.delete`)}</wa-dropdown-item
            >`:h}
    </wa-dropdown>
  `}function _e(e){return e.canList?e.loading&&!e.entries.length?E():e.entries.length?f`
    <div class="secrets-store__table-wrap">
      <table class="secrets-store__table settings-table--stacked" role="table">
        <thead>
          <tr>
            <th scope="col">${x(`secretsStore.name`)}</th>
            <th scope="col">${x(`secretsStore.access`)}</th>
            <th scope="col">${x(`secretsStore.value`)}</th>
            <th scope="col">${x(`secretsStore.allowedHosts`)}</th>
            <th scope="col">${x(`secretsStore.updated`)}</th>
            <th scope="col" class="secrets-store__actions-heading">
              <span class="settings-control__sr-label">${x(`secretsStore.actions`)}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          ${te(e.entries,e=>e.name,t=>f`
              <tr tabindex="0" aria-label=${t.name}>
                <td data-label=${x(`secretsStore.name`)}>
                  <code class="secrets-store__name">${t.name}</code>
                </td>
                <td data-label=${x(`secretsStore.access`)}>
                  <span class="secrets-store__mode secrets-store__mode--${t.kind}"
                    >${x(t.kind===`secret`?`secretsStore.protectedSecret`:`secretsStore.agentReadable`)}</span
                  >
                </td>
                <td data-label=${x(`secretsStore.value`)}>
                  <span
                    class="secrets-store__value ${t.kind===`secret`?`secrets-store__value--secret`:``}"
                    title=${t.kind===`env`?t.value:h}
                    >${t.kind===`env`?t.value:Y}</span
                  >
                </td>
                <td data-label=${x(`secretsStore.allowedHosts`)}>
                  <span class="secrets-store__hosts">
                    ${t.kind===`secret`&&(t.allowedHosts?.length??0)>0?t.allowedHosts?.join(`, `):x(`secretsStore.noAllowedHosts`)}
                  </span>
                </td>
                <td data-label=${x(`secretsStore.updated`)}>
                  <time
                    class="secrets-store__updated"
                    datetime=${new Date(t.updatedAtMs).toISOString()}
                    title=${new Intl.DateTimeFormat(ne.getLocale(),{dateStyle:`medium`,timeStyle:`short`}).format(new Date(t.updatedAtMs))}
                    >${he(t)}</time
                  >
                </td>
                <td class="secrets-store__actions-cell" data-label=${x(`secretsStore.actions`)}>
                  ${ge(e,t)}
                </td>
              </tr>
            `)}
        </tbody>
      </table>
    </div>
  `:f`
      <div class="secrets-store__empty">
        ${w(x(`tabs.secrets`))} ${ue(J,x(`common.docs`))}
      </div>
    `:w(x(`secretsStore.unavail`))}function ve(e){if(!e.dialogMode)return h;let t=e.dialogMode===`edit`;return f`
    <openclaw-modal-dialog
      label=${x(t?`secretsStore.edit`:`secretsStore.add`)}
      description=${x(`secretsStore.hint`)}
      @modal-cancel=${e.onCloseDialog}
    >
      <form
        class="secrets-store-dialog"
        aria-busy=${e.busy?`true`:`false`}
        @submit=${t=>{t.preventDefault(),e.onSubmitDraft()}}
      >
        <div class="secrets-store-dialog__header">
          <h2>${x(t?`secretsStore.edit`:`secretsStore.add`)}</h2>
        </div>
        <label class="secrets-store-field">
          <span>${x(`secretsStore.name`)}</span>
          <input
            class="settings-input mono"
            name="name"
            autocomplete="off"
            spellcheck="false"
            autofocus
            ?readonly=${t}
            ?disabled=${e.busy}
            .value=${e.draft.name}
            @input=${t=>e.onDraftNameChange(t.currentTarget.value)}
          />
        </label>
        <label class="secrets-store-field">
          <span>${x(`secretsStore.value`)}</span>
          <textarea
            class="settings-input secrets-store-dialog__value"
            name="value"
            autocomplete="off"
            spellcheck="false"
            ?disabled=${e.busy}
            .value=${e.draft.value}
            @input=${t=>e.onDraftValueChange(t.currentTarget.value)}
          ></textarea>
        </label>
        <fieldset class="secrets-store-modes">
          <legend>${x(`secretsStore.accessMode`)}</legend>
          <label
            class="secrets-store-mode ${e.draft.kind===`secret`?`secrets-store-mode--selected`:``}"
          >
            <input
              type="radio"
              name="access-mode"
              value="secret"
              .checked=${e.draft.kind===`secret`}
              ?disabled=${e.busy}
              @change=${()=>e.onDraftKindChange(`secret`)}
            />
            <span>
              <strong>${x(`secretsStore.protectedSecret`)}</strong>
              <small>${x(`secretsStore.protectedSecretHint`)}</small>
            </span>
          </label>
          <label
            class="secrets-store-mode ${e.draft.kind===`env`?`secrets-store-mode--selected secrets-store-mode--risk`:``}"
          >
            <input
              type="radio"
              name="access-mode"
              value="env"
              .checked=${e.draft.kind===`env`}
              ?disabled=${e.busy}
              @change=${()=>e.onDraftKindChange(`env`)}
            />
            <span>
              <strong>${x(`secretsStore.agentReadable`)}</strong>
              <small>${x(`secretsStore.agentReadableHint`)}</small>
            </span>
          </label>
        </fieldset>
        ${e.draft.kind===`secret`?f`
                <label class="secrets-store-field">
                  <span>${x(`secretsStore.allowedHosts`)}</span>
                  <textarea
                    class="settings-input secrets-store-dialog__hosts mono"
                    name="allowed-hosts"
                    autocomplete="off"
                    spellcheck="false"
                    placeholder=${x(`secretsStore.allowedHostsPlaceholder`)}
                    ?disabled=${e.busy}
                    .value=${e.draft.allowedHosts}
                    @input=${t=>e.onDraftAllowedHostsChange(t.currentTarget.value)}
                  ></textarea>
                  <small>${x(`secretsStore.allowedHostsHint`)}</small>
                </label>
              `:h}
        ${e.formError?f`<div class="callout danger" role="alert">${e.formError}</div>`:h}
        <div class="secrets-store-dialog__actions">
          <button class="btn primary" type="submit" ?disabled=${e.busy}>
            ${e.busy?x(`common.saving`):x(`common.save`)}
          </button>
          <button class="btn" type="button" ?disabled=${e.busy} @click=${e.onCloseDialog}>
            ${x(`common.cancel`)}
          </button>
        </div>
      </form>
    </openclaw-modal-dialog>
  `}function ye(e){return e.bulkOpen?f`
    <openclaw-modal-dialog label=${x(`secretsStore.bulk`)} @modal-cancel=${e.onCloseBulk}>
      <form
        class="secrets-store-dialog"
        aria-busy=${e.busy?`true`:`false`}
        @submit=${t=>{t.preventDefault(),e.onSubmitBulk()}}
      >
        <div class="secrets-store-dialog__header">
          <h2>${x(`secretsStore.bulk`)}</h2>
        </div>
        <label class="secrets-store-field">
          <span>${x(`secretsStore.value`)}</span>
          <textarea
            class="settings-input secrets-store-dialog__bulk"
            name="bulk-values"
            autocomplete="off"
            spellcheck="false"
            autofocus
            ?disabled=${e.busy}
            .value=${e.bulkRaw}
            @input=${t=>e.onBulkRawChange(t.currentTarget.value)}
          ></textarea>
        </label>
        <div class="secrets-store-bulk__summary" aria-live="polite">
          ${x(e.bulkSecretCount===1?`secretsStore.detectedOne`:`secretsStore.detected`,{count:String(e.bulkSecretCount)})}
        </div>
        <label class="secrets-store-checkbox">
          <input
            type="checkbox"
            .checked=${e.bulkAutoDetect}
            ?disabled=${e.busy}
            @change=${t=>e.onBulkAutoDetectChange(t.currentTarget.checked)}
          />
          <span>
            <strong>${x(`secretsStore.detect`)}</strong>
          </span>
        </label>
        ${e.bulkInvalidNames.length?f`<div class="callout danger" role="alert">
                ${x(`secretsStore.badName`)} ${e.bulkInvalidNames.join(`, `)}
              </div>`:h}
        ${e.formError?f`<div class="callout danger" role="alert">${e.formError}</div>`:h}
        <div class="secrets-store-dialog__actions">
          <button
            class="btn primary"
            type="submit"
            ?disabled=${e.busy||!e.bulkEntryCount||e.bulkInvalidNames.length>0}
          >
            ${e.busy?x(`common.saving`):x(`common.save`)}
          </button>
          <button class="btn" type="button" ?disabled=${e.busy} @click=${e.onCloseBulk}>
            ${x(`common.cancel`)}
          </button>
        </div>
      </form>
    </openclaw-modal-dialog>
  `:h}function q(e){let t=e.canSet?f`
        <button
          class="btn btn--sm"
          type="button"
          ?disabled=${e.busy}
          @click=${e.onOpenBulk}
        >
          ${x(`secretsStore.bulk`)}
        </button>
        <button
          class="btn btn--sm primary"
          type="button"
          ?disabled=${e.busy}
          @click=${e.onOpenAdd}
        >
          ${C(`plus`)} ${x(`secretsStore.add`)}
        </button>
      `:void 0;return f`
    ${ce(f`
        ${e.error?f`<div class="callout danger secrets-store__message" role="alert">
                <span>${e.error}</span>
                ${e.canList?f`<button class="btn btn--sm" type="button" @click=${e.onRefresh}>
                        ${x(`common.retry`)}
                      </button>`:h}
              </div>`:h}
        ${e.notice?f`<div
                class="callout success secrets-store__message"
                role="status"
                aria-live="polite"
              >
                ${e.notice}
              </div>`:h}
        ${se({title:x(`tabs.secrets`),actions:t,count:e.entries.length},_e(e))}
      `,{wide:!0})}
    ${ve(e)} ${ye(e)}
  `}var J,Y;function X(){return(X=e((()=>{d(),m(),S(),re(),D(),T(),b(),ee(),J=`https://docs.openclaw.ai/gateway/secrets#shared-secret-store`,Y=`••••••••`})))()}var Z,Q;function $(){return($=e((()=>{i(),d(),u(),F(),R(),g(),_(),O(),D(),N(),b(),oe(),K(),A(),s(),X(),Z=65536,Q=class extends a{constructor(...e){super(...e),this.store=H(),this.dialogMode=null,this.draft={name:``,value:``,kind:`env`,allowedHosts:``},this.secretKindOverridden=!1,this.bulkOpen=!1,this.bulkRaw=``,this.bulkAutoDetect=!0,this.formError=null,this.notice=null,this.gateway=new j(this,{getGateway:()=>this.context?.gateway,invalidateRequests:e=>this.resetGatewayState(e.snapshot),onSnapshot:e=>{e.initial&&this.resetGatewayState(e.snapshot)},ensureInitialData:()=>this.ensureInitialData()})}resetGatewayState(e){this.store=H({client:e?.client??null,connected:e?.phase===`connected`}),this.dialogMode=null,this.bulkOpen=!1,this.formError=null,this.notice=null}get canList(){return this.canCall(`secrets.store.list`)}get canSet(){return this.canCall(`secrets.store.set`)}get canDelete(){return this.canCall(`secrets.store.delete`)}canCall(e){return ie(this.gateway.snapshot??{},e)===!0&&ae(this.gateway.snapshot,e,`operator.admin`)}ensureInitialData(){this.canList&&!this.store.loaded&&!this.store.loading&&this.runStoreTask(e=>W(e))}async runStoreTask(e){let t=this.store;try{let n=e(t);return this.requestUpdate(),await n}finally{this.store===t&&this.requestUpdate()}}refresh(){this.canList&&this.runStoreTask(e=>W(e))}openAdd(){this.canSet&&(this.notice=null,this.formError=null,this.secretKindOverridden=!1,this.draft={name:``,value:``,kind:`env`,allowedHosts:``},this.dialogMode=`add`)}openEdit(e){this.canSet&&(this.notice=null,this.formError=null,this.secretKindOverridden=!0,this.draft={name:e.name,value:e.kind===`env`?e.value:``,kind:e.kind,allowedHosts:e.kind===`secret`?(e.allowedHosts??[]).join(`
`):``},this.dialogMode=`edit`)}closeDialog(){this.store.busy||(this.dialogMode=null,this.formError=null)}patchDraft(e){this.draft={...this.draft,...e},this.formError=null}changeDraftName(e){let t=e.toUpperCase();this.patchDraft({name:t,...this.secretKindOverridden?{}:{kind:I(t)?`secret`:`env`}})}validateValue(e,t){return t===`secret`&&e.length===0?x(`secretsStore.required`):new TextEncoder().encode(e).byteLength>Z?x(`secretsStore.tooLarge`):null}validateDraft(){return P.test(this.draft.name)?this.validateValue(this.draft.value,this.draft.kind):x(`secretsStore.badName`)}submitDraft(){if(!this.canSet||!this.dialogMode)return;let e=this.validateDraft();if(e){this.formError=e;return}let t={...this.draft};this.runStoreTask(async e=>{let n=await de(e,t);if(this.store!==e)return;if(!n){this.formError=e.error;return}this.dialogMode=null,this.formError=null;let r=x(t.kind===`secret`?`secretsStore.savedProtected`:`secretsStore.savedReadable`,{name:t.name});this.notice=n.warningCount?`${r} ${x(`secretsStore.warnings`,{count:String(n.warningCount)})}`:r})}openBulk(){this.canSet&&(this.notice=null,this.formError=null,this.bulkRaw=``,this.bulkAutoDetect=!0,this.bulkOpen=!0)}closeBulk(){this.store.busy||(this.bulkOpen=!1,this.formError=null)}get bulkParsed(){return pe(this.bulkRaw,this.bulkAutoDetect)}submitBulk(){if(!this.canSet||!this.bulkOpen)return;let e=this.bulkParsed;if(e.invalidNames.length>0){this.formError=`${x(`secretsStore.badName`)} ${e.invalidNames.join(`, `)}`;return}if(e.entries.length===0){this.formError=x(`secretsStore.required`);return}for(let t of e.entries){let e=this.validateValue(t.value,t.kind);if(e){this.formError=`${t.name}: ${e}`;return}}this.runStoreTask(async t=>{let n=await me(t,e.entries);if(this.store!==t)return;if(!n){this.formError=t.error;return}this.bulkOpen=!1,this.formError=null;let r=x(`secretsStore.savedMany`,{count:String(n.saved),protected:String(e.entries.filter(e=>e.kind===`secret`).length),readable:String(e.entries.filter(e=>e.kind===`env`).length)});this.notice=n.warningCount?`${r} ${x(`secretsStore.warnings`,{count:String(n.warningCount)})}`:r})}async removeEntry(e){let t=this.context.gateway,n=this.store.client;if(!(!n||!this.canDelete||!await k({title:x(`common.delete`),message:x(`secretsStore.confirmDelete`,{name:e.name}),confirmLabel:x(`common.delete`),danger:!0}))){if(this.notice=null,this.context.gateway!==t||this.store.client!==n||!this.canDelete){this.store.error=x(`secretsStore.deleteFailed`),this.requestUpdate();return}await this.runStoreTask(async t=>{await fe(t,e.name)&&this.store===t&&(this.notice=x(`secretsStore.deleted`,{name:e.name}))})}}render(){let e=this.bulkParsed,t=q({entries:this.store.entries,loading:this.store.loading,busy:this.store.busy,error:this.store.error,notice:this.notice,canList:this.canList,canSet:this.canSet,canDelete:this.canDelete,dialogMode:this.dialogMode,draft:this.draft,formError:this.formError,bulkOpen:this.bulkOpen,bulkRaw:this.bulkRaw,bulkAutoDetect:this.bulkAutoDetect,bulkSecretCount:e.entries.filter(e=>e.kind===`secret`).length,bulkEntryCount:e.entries.length,bulkInvalidNames:e.invalidNames,onRefresh:()=>this.refresh(),onOpenAdd:()=>this.openAdd(),onOpenEdit:e=>this.openEdit(e),onCloseDialog:()=>this.closeDialog(),onDraftNameChange:e=>this.changeDraftName(e),onDraftValueChange:e=>this.patchDraft({value:e}),onDraftAllowedHostsChange:e=>this.patchDraft({allowedHosts:e}),onDraftKindChange:e=>{this.secretKindOverridden=!0,this.patchDraft({kind:e})},onSubmitDraft:()=>this.submitDraft(),onOpenBulk:()=>this.openBulk(),onCloseBulk:()=>this.closeBulk(),onBulkRawChange:e=>{this.bulkRaw=e,this.formError=null},onBulkAutoDetectChange:e=>{this.bulkAutoDetect=e,this.formError=null},onSubmitBulk:()=>this.submitBulk(),onDelete:e=>void this.removeEntry(e)});return f`
      ${le({title:y(`secrets`),subtitle:x(`secretsStore.hint`)})}
      ${M(t)}
    `}},n([r({context:v,subscribe:!0})],Q.prototype,`context`,void 0),n([p()],Q.prototype,`store`,void 0),n([p()],Q.prototype,`dialogMode`,void 0),n([p()],Q.prototype,`draft`,void 0),n([p()],Q.prototype,`secretKindOverridden`,void 0),n([p()],Q.prototype,`bulkOpen`,void 0),n([p()],Q.prototype,`bulkRaw`,void 0),n([p()],Q.prototype,`bulkAutoDetect`,void 0),n([p()],Q.prototype,`formError`,void 0),n([p()],Q.prototype,`notice`,void 0),customElements.get(`openclaw-secrets-page`)||customElements.define(`openclaw-secrets-page`,Q)})))()}$();
//# sourceMappingURL=secrets-page-lkABllpv.js.map