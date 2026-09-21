import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,L as n,R as r,Zn as i,ba as a}from"./control-ui-foundation-DMb6IeIq.js";import{Ar as o,Br as s,Ds as c,Fr as l,Gc as u,Gn as d,Hr as ee,Jo as f,Kn as p,Lr as m,Mr as te,Nr as ne,Or as re,Os as ie,Pr as ae,Rr as oe,Ur as se,Vr as ce,Wt as h,Yo as g,jr as le,kr as ue,ks as de,on as fe,qc as pe,qo as _,zr as me}from"./control-ui-core-DzidtL-P.js";import{$ as he,K as v,X as y,at as b,l as x,m as S,p as C,q as w,r as ge,s as _e,st as ve,t as ye}from"./lit-runtime-vxhGQLC6.js";import{cr as be,fn as xe,h as Se,m as Ce,mr as we,pn as Te}from"./control-ui-core-CaKBexnk.js";import{Bt as T,Ft as Ee,Gt as E,It as De,kt as D}from"./control-ui-core-uEI6aN5p.js";import{B as O,I as Oe,L as ke,R as Ae}from"./control-ui-boot-shared-nBxCfWV5.js";import{n as k,r as A}from"./gateway-runtime-DP4whqrA.js";import{Bt as j,Ht as je,Lt as M,Nn as Me,Nt as Ne,Ot as N,Pn as Pe,Rt as P,Zn as Fe,er as Ie,ht as Le,mt as Re,wt as F,zt as I}from"./control-ui-boot-shared-Cyt1Zyts.js";import{Qs as ze,Zs as Be,ga as Ve,va as He}from"./control-ui-boot-shared-CH-OC11d.js";import{V as Ue}from"./control-ui-boot-new-DeGMjctK.js";import"./control-ui-boot-chat-CKX96sa9.js";import{a as L,i as R,l as z,n as We,o as Ge,s as Ke,t as qe}from"./control-ui-boot-chat-CDBbQQw1.js";import{n as Je,t as Ye}from"./hub-tabs-DuEhaWau.js";import{n as Xe,t as Ze}from"./settings-workspace-IBRfeTG9.js";import{a as Qe,i as B,n as $e,o as et,r as tt,s as nt,t as rt}from"./skills-shared-D-UakUtb.js";import{i as it,n as at,r as ot,t as st}from"./plugins-hub-header-B1Ape_aE.js";function V(e){return e.installRef??e.slug}async function ct(e,t,n){return t.trim()?(await e.request(`skills.search`,{query:t,limit:20},{signal:n}))?.results??[]:[]}var H;function U(){return(U=e((()=>{Te(),T(),g(),A(),R(),H=class{constructor(e,t,n,r){this.host=e,this.gateway=t,this.selectedAgent=n,this.refreshWorkspace=r,this.list=null,this.view=null,this.loading=!1,this.busy=!1,this.error=null,this.notice=null,this.draft=null,this.importVisible=!1,this.importSlug=``,this.importSource=null,this.importSelection=[],this.newFilePath=``,this.query=``,this.readSequence=0}changed(){this.host.requestUpdate()}clearFeedback(){this.error=null,this.notice=null}get importOpen(){return this.importVisible}set importOpen(e){this.clearFeedback(),this.importVisible=e,e||(this.importSlug=``,this.importSource=null,this.importSelection=[])}reset(){this.readSequence++,this.list=null,this.view=null,this.loading=!1,this.busy=!1,this.draft=null,this.importOpen=!1,this.newFilePath=``,this.query=``}get showWorkspace(){return this.view===null||this.view===`workspace`}get canWrite(){return k(this.gateway.snapshot,`skills.library.save`,`operator.write`,{requireAdvertisement:!1})}get canTransfer(){return k(this.gateway.snapshot,`skills.library.mutate`,`operator.admin`,{requireAdvertisement:!1})}get createTarget(){return this.showWorkspace&&this.list?.canManageWorkspace?`workspace`:this.list?.profileId?`personal`:`unavailable`}get canCreate(){return this.loading?!1:this.createTarget===`workspace`?k(this.gateway.snapshot,`skills.proposals.create`,`operator.admin`,{requireAdvertisement:!1}):this.createTarget===`personal`&&this.canWrite}get canEdit(){return this.canWrite&&(this.draft?.entry?.canEdit??!0)}async load(){let e=this.gateway.capture();if(!(!e||this.loading)){this.loading=!0,this.error=null,this.changed();try{let t=await e.client.request(`skills.library.list`,{scope:`all`});if(!this.gateway.isCurrent(e))return;this.list=t,this.view??=t.defaultTarget===`personal`?`mine`:`workspace`}catch(t){this.gateway.isCurrent(e)&&(this.error=_(t))}finally{this.gateway.isCurrent(e)&&(this.loading=!1,this.changed())}}}create(){let e=this.gateway.capture();!e||!this.canCreate||this.createTarget===`unavailable`||(this.draft={target:this.createTarget,connection:e,agentId:this.selectedAgent(),entry:null,slug:``,description:``,content:``,files:[],revisions:[],selectedFile:`SKILL.md`,rollbackRevision:``,dirty:!1,proposal:null},this.clearFeedback(),this.newFilePath=``,this.changed())}close(){this.busy||this.draft?.dirty&&!window.confirm(E(`skillLibrary.discard`))||(this.readSequence++,this.draft=null,this.importOpen=!1,this.newFilePath=``,this.changed())}async open(e){if(this.draft?.dirty&&!window.confirm(E(`skillLibrary.discard`)))return;let t=this.gateway.capture();if(!t||this.busy)return;let n=++this.readSequence;await this.perform(async()=>{let r=await t.client.request(`skills.library.read`,{skillId:e});!this.gateway.isCurrent(t)||n!==this.readSequence||(this.draft={target:`personal`,connection:t,agentId:null,entry:r.entry,slug:r.entry.slug,description:r.entry.description,content:r.content,files:r.files,revisions:r.revisions,selectedFile:`SKILL.md`,rollbackRevision:``,dirty:!1,proposal:null})})}async perform(e){if(this.busy||this.loading)return;let t=this.gateway.capture();if(!t){this.error=E(`skillLibrary.connectionChanged`),this.changed();return}this.busy=!0,this.clearFeedback(),this.changed();try{await e()}catch(e){if(this.gateway.isCurrent(t)){let t=e instanceof xe?i(e.details)?.code:void 0;this.error=t===`SKILL_LIBRARY_CONFLICT`?E(`skillLibrary.conflict`):t===`SKILL_LIBRARY_IDENTITY_REQUIRED`?E(`skillLibrary.signIn`):_(e)}}finally{this.gateway.isCurrent(t)&&(this.busy=!1,this.changed())}}async receipt(e){this.notice=E(`skillLibrary.receipt.${e.state}`,{slug:e.entry.slug,target:e.target,owner:e.entry.ownerLabel})+` `+e.nextAction,await this.load()}async save(){let e=this.draft;!e||!this.canEdit||await this.perform(async()=>{if(!this.gateway.isCurrent(e.connection))throw Error(E(`skillLibrary.connectionChanged`));let t=e.connection.client;if(e.target===`workspace`){if(!e.agentId)throw Error(E(`skillLibrary.selectAgent`));let n=e.files.map(e=>{let t=L(e);if(t===null||e.executable)throw Error(E(`skillLibrary.workspaceTextOnly`));return{path:e.path,content:t}}),r=await t.request(`skills.proposals.create`,{agentId:e.agentId,name:e.slug,description:e.description,content:e.content,supportFiles:n});if(!this.gateway.isCurrent(e.connection))return;e.proposal=r,e.dirty=!1,this.notice=E(`skillLibrary.pending`,{id:r.record.id,agent:e.agentId});return}let n=await t.request(`skills.library.save`,{...e.entry?{skillId:e.entry.skillId}:{},expectedRevision:e.entry?.revision??null,slug:e.slug,content:e.content,files:e.files});this.gateway.isCurrent(e.connection)&&(e.entry=n.entry,e.dirty=!1,e.revisions=[{revision:n.entry.revision,createdAt:n.entry.updatedAt},...e.revisions.filter(e=>e.revision!==n.entry.revision)],await this.receipt(n))})}async applyWorkspace(){let e=this.draft,t=e?.proposal,n=e?.agentId;!e||!t||!n||await this.perform(async()=>{if(!this.gateway.isCurrent(e.connection))throw Error(E(`skillLibrary.connectionChanged`));let r=await e.connection.client.request(`skills.proposals.apply`,{agentId:n,proposalId:t.record.id,expectedRevisionHash:t.revisionHash});this.gateway.isCurrent(e.connection)&&(this.draft=null,this.notice=E(`skillLibrary.workspaceSaved`,{agent:n,state:r.record.status}),await this.refreshWorkspace())})}async mutate(e){let t=this.draft,n=t?.entry;!t||!n||!this.canEdit||t.dirty||(e===`remove`||e===`transfer`)&&!window.confirm(E(`skillLibrary.confirm.${e}`,{slug:t.slug}))||await this.perform(async()=>{if(!this.gateway.isCurrent(t.connection))throw Error(E(`skillLibrary.connectionChanged`));let r=await t.connection.client.request(`skills.library.mutate`,{skillId:n.skillId,expectedRevision:n.revision,action:e,...e===`rollback`?{revision:t.rollbackRevision}:{}});if(this.gateway.isCurrent(t.connection)&&(e===`remove`&&(this.draft=null),await this.receipt(r),this.gateway.isCurrent(t.connection)&&e!==`remove`)){if(e===`rollback`){let e=await t.connection.client.request(`skills.library.read`,{skillId:r.entry.skillId,revision:r.entry.revision});if(!this.gateway.isCurrent(t.connection))return;t.content=e.content,t.files=e.files,t.revisions=e.revisions,t.selectedFile=`SKILL.md`,t.rollbackRevision=``}t.entry=r.entry}})}async importFiles(e){if(!e.length)return;let t=this.gateway.capture();t&&await this.perform(async()=>{let[n]=e;if(n&&e.length===1&&n.name.toLowerCase().endsWith(`.zip`)){if(this.createTarget===`workspace`)throw Error(E(`skillLibrary.workspaceTextOnly`));if(!this.list?.profileId)throw Error(E(`skillLibrary.signIn`));let e=await Ke(t.client,n,this.importSlug,()=>this.gateway.isCurrent(t));this.gateway.isCurrent(t)&&(this.importOpen=!1,await this.receipt(e));return}let r=await Ge(e);this.gateway.isCurrent(t)&&(this.create(),this.draft&&(Object.assign(this.draft,r,{slug:this.importSlug,dirty:!0}),this.importOpen=!1))})}async importClawHub(e,t,n){let r=this.gateway.capture();!r||!this.list?.profileId||!this.canWrite||await this.perform(async()=>{let i=await r.client.request(`skills.library.import`,{slug:e,source:{kind:`clawhub`,slug:t,...n?{version:n}:{}}});this.gateway.isCurrent(r)&&(this.importOpen=!1,await this.receipt(i))})}}})))()}function lt(e){let t=e.list,n=[],r=!!t?.entries.length;(t?.multipleProfiles||r||t?.defaultTarget===`personal`)&&(t?.profileId&&n.push({value:`mine`,label:E(`skillLibrary.mine`)}),(t?.multipleProfiles||t?.entries.some(e=>e.shared||e.ownerProfileId===null))&&n.push({value:`team`,label:E(`skillLibrary.team`)}),n.push({value:`all`,label:E(`skillLibrary.all`)},{value:`workspace`,label:E(`skillLibrary.inventory`)}));let i=e.query.toLowerCase().trim(),a=(t?.entries??[]).filter(n=>(e.view===`mine`?n.ownerProfileId===t?.profileId:e.view!==`team`||n.shared||n.ownerProfileId===null)&&(!i||`${n.slug} ${n.name} ${n.description} ${n.ownerLabel}`.toLowerCase().includes(i)));return y`
    <div class="plugins-toolbar">
      ${n.length>0?P({value:e.view??`workspace`,ariaLabel:E(`skillLibrary.library`),options:n,onChange:t=>{e.view=t,e.changed()}}):w}
      <button
        type="button"
        class="btn"
        ?disabled=${!e.canCreate||e.busy}
        @click=${()=>e.create()}
      >
        ${E(`skillLibrary.create`)}
      </button>
      <button
        type="button"
        class="btn"
        ?disabled=${!e.canCreate||e.busy}
        @click=${()=>{e.importOpen=!0,e.importSource=null,e.changed()}}
      >
        ${E(`skillLibrary.import`)}
      </button>
      ${e.showWorkspace?w:y`<button
              type="button"
              class="btn"
              ?disabled=${e.loading||e.busy}
              @click=${()=>void e.load()}
            >
              ${E(`common.refresh`)}
            </button>`}
    </div>
    ${t?.defaultTarget===`unavailable`?y`<p class="muted">${E(`skillLibrary.signIn`)}</p>`:w}
    ${e.error&&!e.draft&&!e.importOpen?y`<div class="callout danger" role="alert">${e.error}</div>`:w}
    ${e.notice&&!e.draft?y`<div class="callout success" role="status">${e.notice}</div>`:w}
    ${t&&!e.showWorkspace?y`<p class="muted">
              ${E(`skillLibrary.defaultLimit`,{count:String(t.defaultSelectionLimit)})}
            </p>
            ${t.defaultSelectionNotice?y`<p class="callout" role="status">${t.defaultSelectionNotice}</p>`:w}`:w}
    ${e.showWorkspace?w:y`
            <label class="field"
              ><span>${E(`common.search`)}</span
              ><input
                class="settings-input"
                name="library-search"
                .value=${e.query}
                placeholder=${E(`skillLibrary.search`)}
                @input=${t=>{e.query=z(t,HTMLInputElement).value,e.changed()}}
            /></label>
            ${e.loading?y`<p role="status">${E(`common.loading`)}</p>`:M({title:E(`skillLibrary.${e.view}`),count:a.length},a.length===0?N(E(`skillLibrary.empty`)):S(a,e=>e.skillId,t=>y` <div class="settings-row">
                            <button
                              type="button"
                              class="settings-row__text plugins-item__detail-button"
                              ?disabled=${e.loading||e.busy}
                              @click=${()=>void e.open(t.skillId)}
                            >
                              <span class="settings-row__title">${t.slug}</span>
                              <span class="settings-row__desc">${t.description}</span>
                              <span class="settings-row__desc"
                                >${t.ownerLabel} ·
                                ${t.shared?E(`skillLibrary.shared`):E(`skillLibrary.private`)}
                                · ${t.revision.slice(0,8)}</span
                              >
                            </button>
                            <div class="settings-row__control">
                              ${I({kind:t.enabled?`ok`:`muted`,label:E(t.enabled?`skillsPage.enabled`:`skillsPage.disabled`)})}
                            </div>
                          </div>`))}
          `}
    ${ut(e)} ${dt(e)}
  `}function ut(e){let t=e.draft;if(!t)return w;let n=t.proposal!==null,r=!e.canEdit||e.busy||e.loading||n,i=t.files.find(e=>e.path===t.selectedFile),a=t.selectedFile===`SKILL.md`?t.content:i?L(i):null,o=n=>{r||(t.selectedFile===`SKILL.md`?t.content=n:t.files=t.files.map(e=>e.path===t.selectedFile?{...e,content:n,encoding:`utf8`}:e),t.dirty=!0,e.changed())},s=r||t.dirty,c=(t,n=s)=>y`<button
      type="button"
      class=${t===`remove`?`btn danger`:`btn`}
      ?disabled=${n}
      @click=${()=>void e.mutate(t)}
    >
      ${E(`skillLibrary.${t}`)}
    </button>`;return y` <openclaw-modal-dialog
    label=${t.entry?.slug??E(`skillLibrary.create`)}
    style="--openclaw-modal-width: 960px;"
    @modal-cancel=${t=>{t.preventDefault(),e.close()}}
  >
    <form
      class="md-preview-dialog__panel"
      @submit=${t=>{t.preventDefault(),e.save()}}
      @keydown=${e=>{(e.ctrlKey||e.metaKey)&&e.key===`Enter`&&!r&&(e.preventDefault(),z(e,HTMLFormElement).requestSubmit())}}
    >
      <div class="md-preview-dialog__header">
        <strong>${t.entry?.slug??E(`skillLibrary.create`)}</strong
        ><button
          type="button"
          class="btn btn--sm"
          ?disabled=${e.busy}
          @click=${()=>e.close()}
        >
          ${E(`common.close`)}
        </button>
      </div>
      <div
        class="md-preview-dialog__body"
        style="display: grid; gap: var(--space-4); min-width: 0;"
      >
        <p class="muted">
          ${t.target===`workspace`?E(`skillLibrary.workspaceTarget`,{agent:t.agentId??``}):t.entry?E(`skillLibrary.ownerRevision`,{owner:t.entry.ownerLabel,revision:t.entry.revision.slice(0,8)}):E(`skillLibrary.personalTarget`)}
        </p>
        ${t.entry?We(t.entry):w}
        ${e.canEdit?w:y`<p role="status">${E(`skillLibrary.readOnly`)}</p>`}
        <label class="field"
          ><span>${E(`skillLibrary.slug`)}</span
          ><input
            class="settings-input"
            name="library-slug"
            title=${E(`skillLibrary.slugHelp`)}
            required
            pattern="[a-z0-9][a-z0-9\\-]{0,62}"
            maxlength="63"
            ?disabled=${r}
            .value=${x(t.slug)}
            @input=${n=>{t.slug=z(n,HTMLInputElement).value,t.dirty=!0,e.changed()}}
        /></label>
        ${t.target===`workspace`?y`<label class="field"
                ><span>${E(`skillLibrary.description`)}</span
                ><input
                  class="settings-input"
                  name="library-description"
                  required
                  ?disabled=${r}
                  .value=${t.description}
                  @input=${n=>{t.description=z(n,HTMLInputElement).value,t.dirty=!0,e.changed()}}
              /></label>`:w}
        <div class="plugins-toolbar">
          <label class="field" style="min-width: 0; flex: 1;"
            ><span>${E(`skillLibrary.file`)}</span
            ><select
              class="settings-select"
              aria-label=${E(`skillLibrary.file`)}
              .value=${t.selectedFile}
              @change=${n=>{t.selectedFile=z(n,HTMLSelectElement).value,e.changed()}}
            >
              <option value="SKILL.md" ?selected=${t.selectedFile===`SKILL.md`}>
                SKILL.md
              </option>
              ${t.files.map(e=>y`<option value=${e.path} ?selected=${t.selectedFile===e.path}>
                    ${e.path}${e.executable?` *`:``}
                  </option>`)}
            </select></label
          >
          ${i&&e.canEdit?y`<button
                  type="button"
                  class="btn"
                  ?disabled=${r}
                  @click=${()=>{window.confirm(E(`skillLibrary.deleteFileConfirm`,{path:i.path}))&&(t.files=t.files.filter(e=>e.path!==i.path),t.selectedFile=`SKILL.md`,t.dirty=!0,e.changed())}}
                >
                  ${E(`skillLibrary.deleteFile`)}
                </button>`:w}
        </div>
        ${i&&e.canEdit?y`<label class="field checkbox"
                ><input
                  type="checkbox"
                  name="library-file-executable"
                  ?disabled=${r}
                  .checked=${i.executable===!0}
                  @change=${n=>{let r=z(n,HTMLInputElement).checked;t.files=t.files.map(e=>e.path===i.path?{...e,executable:r}:e),t.dirty=!0,e.changed()}}
                /><span>${E(`skillLibrary.executable`)}</span></label
              >`:w}
        ${a===null?y`<p class="muted">${E(`skillLibrary.binary`)}</p>`:y`<label class="field"
                ><span>${t.selectedFile}</span
                ><textarea
                  name="library-content"
                  class="settings-input"
                  spellcheck="false"
                  rows="18"
                  style="font-family: var(--mono); min-width: 0; max-width: 100%; box-sizing: border-box; resize: vertical;"
                  ?readonly=${r}
                  .value=${x(a)}
                  @input=${e=>o(z(e,HTMLTextAreaElement).value)}
                ></textarea>
              </label>`}
        ${r?w:y`<div class="plugins-toolbar">
                <label class="field" style="flex: 1; min-width: 0;"
                  ><span>${E(`skillLibrary.newFile`)}</span
                  ><input
                    class="settings-input"
                    name="library-file-path"
                    .value=${e.newFilePath}
                    @input=${t=>{e.newFilePath=z(t,HTMLInputElement).value,e.changed()}} /></label
                ><button
                  type="button"
                  class="btn"
                  ?disabled=${!e.newFilePath.trim()}
                  @click=${()=>{let n=e.newFilePath.trim();n===`SKILL.md`||t.files.some(e=>e.path===n)?e.error=E(`skillLibrary.fileExists`):(t.files=[...t.files,{path:n,content:``,encoding:`utf8`}],t.selectedFile=n,t.dirty=!0,e.newFilePath=``),e.changed()}}
                >
                  ${E(`skillLibrary.addFile`)}
                </button>
              </div>`}
        ${e.error?y`<div class="callout danger" role="alert">${e.error}</div>`:w}
        ${e.notice?y`<div class="callout success" role="status">${e.notice}</div>`:w}
        <div class="plugins-toolbar">
          ${e.canEdit?n?y`<button
                    type="button"
                    class="btn primary"
                    ?disabled=${e.busy}
                    @click=${()=>void e.applyWorkspace()}
                  >
                    ${E(`skillLibrary.apply`)}
                  </button>`:y`<button
                    type="submit"
                    class="btn primary"
                    ?disabled=${r||!t.dirty||!t.content.trim()}
                  >
                    ${e.busy?E(`common.loading`):t.target===`workspace`?E(`skillLibrary.propose`):E(`skillLibrary.save`)}
                  </button>`:w}
          ${e.canEdit&&t.entry?y`
                  ${c(t.entry.enabled?`disable`:`enable`)}
                  ${t.entry.ownerProfileId?c(t.entry.shared?`unshare`:`share`):w}
                `:w}
        </div>
        ${e.canEdit&&t.entry&&t.revisions.length>1?y`<div class="plugins-toolbar">
                <label class="field" style="flex: 1; min-width: 0;"
                  ><span>${E(`skillLibrary.revision`)}</span
                  ><select
                    class="settings-select"
                    aria-label=${E(`skillLibrary.revision`)}
                    .value=${t.rollbackRevision}
                    ?disabled=${s}
                    @change=${n=>{t.rollbackRevision=z(n,HTMLSelectElement).value,e.changed()}}
                  >
                    <option value="" ?selected=${t.rollbackRevision===``}>
                      ${E(`skillLibrary.selectRevision`)}
                    </option>
                    ${t.revisions.filter(e=>e.revision!==t.entry?.revision).map(e=>y`<option
                            value=${e.revision}
                            ?selected=${t.rollbackRevision===e.revision}
                          >
                            ${new Date(e.createdAt).toLocaleString()} ·
                            ${e.revision.slice(0,8)}
                          </option>`)}
                  </select></label
                >${c(`rollback`,s||!t.rollbackRevision)}
              </div>`:w}
        ${e.canEdit&&t.entry?y`<div
                class="plugins-toolbar"
                style="border-top: 1px solid var(--border); padding-top: var(--space-4);"
              >
                ${e.canTransfer&&t.entry.ownerProfileId?c(`transfer`):w}
                ${c(`remove`)}
              </div>`:w}
      </div>
    </form>
  </openclaw-modal-dialog>`}function dt(e){if(!e.importOpen)return w;let t=()=>e.close();return y`<openclaw-modal-dialog
    label=${E(`skillLibrary.import`)}
    @modal-cancel=${e=>{e.preventDefault(),t()}}
  >
    <form
      class="md-preview-dialog__panel"
      @submit=${t=>{t.preventDefault(),e.importSource?e.importClawHub(e.importSlug,e.importSource.slug,e.importSource.version):e.importFiles(e.importSelection)}}
    >
      <div class="md-preview-dialog__header">
        <strong>${E(`skillLibrary.import`)}</strong
        ><button type="button" class="btn btn--sm" ?disabled=${e.busy} @click=${t}>
          ${E(`common.close`)}
        </button>
      </div>
      <div
        class="md-preview-dialog__body"
        style="display: grid; grid-template-columns: minmax(0, 1fr); gap: var(--space-4);"
      >
        <p class="muted">
          ${e.importSource?E(`skillLibrary.importClawHub`,{source:e.importSource.slug}):e.createTarget===`workspace`?E(`skillLibrary.importWorkspace`):E(`skillLibrary.importHelp`)}
        </p>
        <label class="field"
          ><span>${E(`skillLibrary.slug`)}</span
          ><input
            class="settings-input"
            required
            name="library-import-slug"
            title=${E(`skillLibrary.slugHelp`)}
            pattern="[a-z0-9][a-z0-9\\-]{0,62}"
            .value=${e.importSlug}
            ?disabled=${e.busy}
            @input=${t=>{e.importSlug=z(t,HTMLInputElement).value,e.changed()}}
        /></label>
        ${e.importSource?w:[!1,!0].map(t=>y`<label class="field"
                  ><span
                    >${E(t?`skillLibrary.chooseFolder`:`skillLibrary.chooseFiles`)}</span
                  ><input
                    type="file"
                    style="min-width: 0;"
                    ?webkitdirectory=${t}
                    multiple
                    name=${t?`library-import-directory`:`library-import-files`}
                    ?disabled=${e.busy}
                    @change=${t=>{e.importSelection=Array.from(z(t,HTMLInputElement).files??[]),e.changed()}}
                /></label>`)}
        ${e.error?y`<div class="callout danger" role="alert">${e.error}</div>`:w}
        <button
          type="submit"
          class="btn primary"
          ?disabled=${e.busy||!e.importSource&&e.importSelection.length===0}
        >
          ${e.busy?E(`common.loading`):E(`skillLibrary.import`)}
        </button>
      </div>
    </form>
  </openclaw-modal-dialog>`}function W(){return(W=e((()=>{v(),_e(),C(),F(),D(),T(),qe(),R()})))()}function G(e){return e?He(e,window.location.href):null}function ft(e,t){switch(t){case`all`:return!0;case`ready`:return!e.disabled&&B(e);case`needs-setup`:return!e.disabled&&!B(e);case`disabled`:return e.disabled}throw Error(`Unsupported skills status filter`)}function pt(e){return e.disabled?`muted`:B(e)?`ok`:`warn`}function mt(e){return e.disabled?I({kind:`muted`,label:E(`skillsPage.tabs.disabled`)}):B(e)?I({kind:`ok`,label:E(`skillsPage.tabs.ready`)}):I({kind:`warn`,label:E(`skillsPage.tabs.needsSetup`)})}function K(e,t){let n=e.clawhub;return!n||n.status!==`linked`||!n.valid?null:t[re({registry:n.registry,slug:n.slug,ownerHandle:n.ownerHandle,version:n.installedVersion})]??null}function q(e,t){if(!e)return t?{label:E(`skillsPage.refreshing`),kind:`muted`,chipClass:`chip`}:{label:E(`skillsPage.verdict.unavailable`),kind:`warn`,chipClass:`chip-warn`};let n=e.securityStatus?.trim()||null;return e.ok&&e.decision===`pass`?{label:n===`clean`||!n?E(`skillsPage.verdict.clean`):n,kind:`ok`,chipClass:`chip-ok`}:n===`pending`||n===`not-run`?{label:E(`skillsPage.verdict.pending`),kind:`muted`,chipClass:`chip`}:{label:E(n===`malicious`?`skillsPage.verdict.blocked`:n===`suspicious`?`skillsPage.verdict.review`:`skillsPage.verdict.unavailable`),kind:`warn`,chipClass:`chip-warn`}}function J(e){return e.loading||e.operation!==null}function Y(e){return J(e)||!e.canUpdate}function X(e){return J(e)||!e.canInstall}function ht(e,t){return e.operation?.kind===`skill`&&e.operation.skillKey===t}function gt(e,t){return e.operation?.kind===`clawhub`&&e.operation.ref===t}function _t(e,t){if(e.personalImport||t.installOnly!==!0)return!1;let n=V(t);return(e.report?.skills??[]).some(e=>e.clawhub?.valid===!0&&e.clawhub.requestedReference===n)}function vt(e){let t=e.report?.skills??[],n={all:t.length,ready:0,"needs-setup":0,disabled:0};for(let e of t)e.disabled?n.disabled++:B(e)?n.ready++:n[`needs-setup`]++;let r=e.statusFilter===`all`?t:t.filter(t=>ft(t,e.statusFilter)),i=a(e.filter),o=i?r.filter(e=>a([e.name,e.description,e.source].join(` `)).includes(i)):r,s=et(o),c=e.detailKey?t.find(t=>t.skillKey===e.detailKey)??null:null;return y`
    ${Ne(y`
        ${e.library??w}
        ${e.showInventory===!1?w:bt(e,n,o.length)}
        ${e.error?y`<div class="callout danger" role="alert">${e.error}</div>`:w}
        ${xt(e)}
        ${e.showInventory===!1?w:o.length===0?N(!e.connected&&!e.report?E(`skillsPage.disconnected`):E(`skillsPage.empty`)):s.map(t=>yt(t,e))}
      `,{wide:!0})}
    ${c?Tt(c,e):w}
    ${e.clawhubDetailRef?Ct(e):w}
  `}function yt(e,t){return y`
    <details class="settings-section skills-group" open>
      <summary class="settings-section__header skills-group__summary">
        <h2 class="settings-section__heading">
          ${e.label} <span class="settings-count">${e.skills.length}</span>
        </h2>
        <span class="skills-group__chevron" aria-hidden="true">${Ee.chevronDown}</span>
      </summary>
      <div class="settings-group">
        ${S(e.skills,e=>e.skillKey,e=>wt(e,t))}
      </div>
    </details>
  `}function bt(e,t,n){let r=ie(e.agentsList?.agents??[]),i=r.some(t=>t.id===e.selectedAgentId)?e.selectedAgentId??``:r.some(t=>t.id===e.agentsList?.defaultId)?e.agentsList?.defaultId??``:r[0]?.id??``;return y`
    <div class="plugins-toolbar plugins-toolbar--fields">
      ${P({value:e.statusFilter,ariaLabel:E(`skillsPage.title`),options:Z.map(e=>({value:e.id,label:y`${E(e.labelKey)}
            <span class="settings-count">${t[e.id]}</span>`})),onChange:t=>e.onStatusFilterChange(t)})}
      ${r.length>1?y`
              <div class="plugins-field skills-toolbar__agent">
                <span>${E(`usage.filters.agent`)}</span>
                <openclaw-agent-select
                  class="agent-select--settings"
                  name="skills-agent"
                  .options=${r.map(t=>{let n=de(t);return{value:t.id,label:t.id===e.agentsList?.defaultId?E(`skillsPage.defaultAgent`,{name:n}):n,agent:t}})}
                  .value=${i}
                  .accessibleLabel=${E(`usage.filters.agent`)}
                  .disabled=${J(e)||!e.connected}
                  .onSelect=${e.onAgentChange}
                ></openclaw-agent-select>
              </div>
            `:w}
      <label class="plugins-field skills-toolbar__search">
        <span>${E(`common.search`)}</span>
        <input
          class="settings-input"
          .value=${e.filter}
          @input=${t=>e.onFilterChange(t.target.value)}
          placeholder=${E(`skillsPage.filterPlaceholder`)}
          autocomplete="off"
          name="skills-filter"
        />
      </label>
      <span class="plugins-toolbar__hint">
        ${E(`skillsPage.shown`,{count:String(n)})}
      </span>
      <button
        type="button"
        class="btn"
        ?disabled=${J(e)||!e.connected}
        @click=${e.onRefresh}
      >
        ${e.loading?E(`common.loading`):E(`common.refresh`)}
      </button>
    </div>
  `}function xt(e){return M({title:E(`skillsPage.clawHub`),description:E(`skillsPage.clawHubSubtitle`)},y`
      <div class="settings-row">
        <input
          class="settings-input plugins-row-input"
          .value=${e.clawhubQuery}
          @input=${t=>e.onClawHubQueryChange(t.target.value)}
          placeholder=${E(`skillsPage.searchClawHub`)}
          autocomplete="off"
          name="clawhub-search"
        />
        ${e.clawhubSearchLoading?y`<span class="plugins-toolbar__hint">${E(`skillsPage.searching`)}</span>`:w}
      </div>
      ${e.clawhubSearchError?y`<div class="callout danger plugins-group-message">
              ${e.clawhubSearchError}
            </div>`:w}
      ${e.clawhubInstallMessage?y`<div
              class="callout ${e.clawhubInstallMessage.kind===`error`?`danger`:`success`} plugins-group-message"
            >
              <div
                style="max-width: 100%; white-space: pre-wrap; overflow-wrap: anywhere; word-break: break-word;"
              >
                ${e.clawhubInstallMessage.text}
              </div>
            </div>`:w}
      ${St(e)}
    `)}function St(e){let t=e.clawhubResults;return t?t.length===0?N(E(`skillsPage.noClawHubResults`)):y`
    ${t.map(t=>{let n=G(t.icon??void 0),r=V(t),i=t.installOnly?void 0:r,a=_t(e,t),o=t.trustState?` · ${E(`skillsPage.notScannedByClawHub`)}`:``,s=y`
        ${n?y`<img class="clawhub-skill-icon" src=${n} alt="" loading="lazy" />`:w}
        <span class="clawhub-skill-result__copy">
          <span class="settings-row__title">${t.displayName}</span>
          <span class="settings-row__desc">
            ${t.summary?`${h(t.summary,100)} · ${r}`:r}${o}
          </span>
        </span>
      `;return y`
        <div class="settings-row plugins-item ${i?`plugins-item--clickable`:``}">
          ${i?y`<button
                  type="button"
                  class="settings-row__text plugins-item__detail-button clawhub-skill-result__button"
                  aria-label=${E(`skillsPage.openDetails`,{name:i})}
                  @click=${()=>e.onClawHubDetailOpen(i)}
                >
                  ${s}
                </button>`:y`<div class="settings-row__text clawhub-skill-result__button">${s}</div>`}
          <div class="settings-row__control">
            ${t.version?je(`v${t.version}`):w}
            <button
              class="btn btn--sm"
              ?disabled=${a||X(e)}
              @click=${()=>{a||e.onClawHubInstall(r)}}
            >
              ${a?E(`skillsPage.installed`):gt(e,r)?E(`skillsPage.installing`):E(e.personalImport?`skillLibrary.import`:`skillsPage.install`)}
            </button>
          </div>
        </div>
      `})}
  `:w}function Ct(e){let t=e.clawhubDetail,n=G(t?.skill?.icon??void 0),r=n?null:G(t?.owner?.image??void 0),i=n??r;return y`
    <openclaw-modal-dialog
      label=${t?.skill?.displayName??e.clawhubDetailRef??E(`skillsPage.notFound`)}
      style="--openclaw-modal-width: min(1040px, calc(100vw - 32px));"
      @modal-cancel=${e.onClawHubDetailClose}
    >
      <div
        class="md-preview-dialog__panel ${e.clawhubDetailError&&!e.clawhubDetailLoading?`md-preview-dialog__panel--message-only`:``}"
      >
        <div class="md-preview-dialog__header">
          <div class="clawhub-skill-detail__identity">
            ${i?y`<img
                    class="clawhub-skill-icon clawhub-skill-icon--detail ${r?`clawhub-skill-icon--profile`:``}"
                    src=${i}
                    alt=""
                  />`:w}
            <div class="md-preview-dialog__title">
              ${t?.skill?.displayName??e.clawhubDetailRef}
            </div>
          </div>
          <button class="btn btn--sm" @click=${e.onClawHubDetailClose}>
            ${E(`skillsPage.close`)}
          </button>
        </div>
        <div class="md-preview-dialog__body" style="display: grid; gap: 16px;">
          ${e.clawhubDetailLoading?y`<div class="muted">${E(`common.loading`)}</div>`:e.clawhubDetailError?y`<div class="callout danger">${e.clawhubDetailError}</div>`:t?.skill?y`
                      <div style="font-size: 14px; line-height: 1.5;">
                        ${t.skill.summary??``}
                      </div>
                      ${t.owner?.displayName?y`<div class="muted" style="font-size: 13px;">
                              ${E(`skillsPage.by`)}
                              ${t.owner.displayName}${t.owner.handle?y` (@${t.owner.handle})`:w}
                            </div>`:w}
                      ${t.latestVersion?y`<div class="muted" style="font-size: 13px;">
                              ${E(`skillsPage.latest`,{version:t.latestVersion.version})}
                            </div>`:w}
                      ${t.latestVersion?.changelog?y`<div
                              style="font-size: 13px; border-top: 1px solid var(--border); padding-top: 12px; white-space: pre-wrap;"
                            >
                              ${t.latestVersion.changelog}
                            </div>`:w}
                      ${t.metadata?.os?y`<div class="muted" style="font-size: 12px;">
                              ${E(`skillsPage.platforms`,{platforms:t.metadata.os.join(`, `)})}
                            </div>`:w}
                      <button
                        class="btn primary"
                        ?disabled=${X(e)}
                        @click=${()=>{e.clawhubDetailRef&&e.onClawHubInstall(e.clawhubDetailRef)}}
                      >
                        ${gt(e,e.clawhubDetailRef??``)?E(`skillsPage.installing`):e.personalImport?E(`skillLibrary.import`):E(`skillsPage.installNamed`,{name:t.skill.displayName})}
                      </button>
                    `:y`<div class="muted">${E(`skillsPage.notFound`)}</div>`}
        </div>
      </div>
    </openclaw-modal-dialog>
  `}function wt(e,t){let n=Y(t),r=K(e,t.clawhubVerdicts);return y`
    <div class="settings-row plugins-item plugins-item--clickable">
      <button
        type="button"
        class="settings-row__text plugins-item__detail-button"
        aria-label=${E(`skillsPage.openDetails`,{name:e.name})}
        @click=${()=>t.onDetailOpen(e.skillKey)}
      >
        <span class="settings-row__title">
          ${e.emoji?y`<span>${e.emoji}</span> `:w}${e.name}
        </span>
        <span class="settings-row__desc">${h(e.description,140)}</span>
      </button>
      <div class="settings-row__control">
        ${mt(e)}
        ${e.clawhub?.status===`linked`?I(q(r,t.clawhubVerdictsLoading)):e.clawhub?.status===`invalid`?I({kind:`warn`,label:E(`skillsPage.invalidLink`)}):w}
        ${j({checked:!e.disabled,disabled:n,ariaLabel:E(`skillsPage.enabledNamed`,{name:e.name}),onChange:()=>t.onToggle(e.skillKey,e.disabled)})}
      </div>
    </div>
  `}function Tt(e,t){let n=Y(t),r=X(t),i=ht(t,e.skillKey),a=t.edits[e.skillKey]??``,o=t.messages[e.skillKey]??null,s=new Set([...e.missing.bins,...e.missing.anyBins]),c=e.install.find(e=>e.bins.some(e=>s.has(e))),l=e.bundled&&e.source!==`openclaw-bundled`,u=rt(e),d=$e(e),ee=K(e,t.clawhubVerdicts),p=t.detailTab===`card`&&e.skillCard?.present?`card`:`overview`;return y`
    <openclaw-modal-dialog
      label=${e.name}
      style="--openclaw-modal-width: min(1040px, calc(100vw - 32px));"
      @modal-cancel=${t.onDetailClose}
    >
      <div class="md-preview-dialog__panel">
        <div class="md-preview-dialog__header">
          <div
            class="md-preview-dialog__title"
            style="display: flex; align-items: center; gap: 8px;"
          >
            <span class="statusDot ${pt(e)}"></span>
            ${e.emoji?y`<span style="font-size: 18px;">${e.emoji}</span>`:w}
            <span>${e.name}</span>
          </div>
          <button class="btn btn--sm" @click=${t.onDetailClose}>
            ${E(`skillsPage.close`)}
          </button>
        </div>
        <div class="md-preview-dialog__body" style="display: grid; gap: 16px;">
          <div>
            <div style="font-size: 14px; line-height: 1.5; color: var(--text);">
              ${e.description}
            </div>
            ${Qe({skill:e,showBundledBadge:l})}
          </div>

          ${e.clawhub||e.skillCard?.present?y`
                  ${Je({id:`skill-detail`,active:p,tabs:[{value:`overview`,label:E(`skillsPage.overview`)},...e.skillCard?.present?[{value:`card`,label:E(`skillsPage.skillCard`)}]:[]],ariaLabel:e.name,panelId:`skill-detail-panel`,variant:`sub`,onSelect:t.onDetailTabChange})}
                `:w}
          <div
            id="skill-detail-panel"
            role=${e.clawhub||e.skillCard?.present?`tabpanel`:w}
            aria-labelledby=${e.clawhub||e.skillCard?.present?`skill-detail-tab-${p}`:w}
          >
            ${p===`overview`?Et(e,t,ee):Dt(e,t)}
          </div>
          ${u.length>0?y`
                  <div
                    class="callout"
                    style="border-color: var(--warn-subtle); background: var(--warn-subtle); color: var(--warn);"
                  >
                    <div style="font-weight: 600; margin-bottom: 4px;">
                      ${E(`skillsPage.missingRequirements`)}
                    </div>
                    <div>${u.join(`, `)}</div>
                  </div>
                `:w}
          ${d.length>0?y`
                  <div class="muted" style="font-size: 13px;">
                    ${E(`skillsPage.reason`,{reasons:d.join(`, `)})}
                  </div>
                `:w}

          <div style="display: flex; align-items: center; gap: 12px;">
            ${j({checked:!e.disabled,disabled:n,ariaLabel:e.name,onChange:()=>t.onToggle(e.skillKey,e.disabled)})}
            <span style="font-size: 13px; font-weight: 500;">
              ${e.disabled?E(`skillsPage.disabled`):E(`skillsPage.enabled`)}
            </span>
            ${c?y`<button
                    class="btn"
                    ?disabled=${r}
                    @click=${()=>c&&t.onInstall(e.skillKey,e.name,c.id)}
                  >
                    ${i?E(`skillsPage.installing`):c?.label}
                  </button>`:w}
          </div>

          ${o?y`<div class="callout ${o.kind===`error`?`danger`:`success`}">
                  ${f(o.message)}
                </div>`:w}
          ${e.primaryEnv?y`
                  <div style="display: grid; gap: 8px;">
                    <div class="field">
                      <span
                        >${E(`skillsPage.apiKey`)}
                        <span class="muted" style="font-weight: normal; font-size: 0.88em;"
                          >(${e.primaryEnv})</span
                        ></span
                      >
                      <input
                        type="password"
                        required
                        ?disabled=${n}
                        .value=${a}
                        @input=${n=>t.onEdit(e.skillKey,n.target.value)}
                      />
                    </div>
                    ${(()=>{let t=G(e.homepage);return t?y`<div class="muted" style="font-size: 13px;">
                            ${E(`skillsPage.getKey`)}
                            <a href="${t}" target="_blank" rel="noopener noreferrer"
                              >${e.homepage}</a
                            >
                          </div>`:w})()}
                    <button
                      class="btn primary"
                      ?disabled=${n||!a.trim()}
                      @click=${()=>t.onSaveKey(e.skillKey)}
                    >
                      ${E(`skillsPage.saveKey`)}
                    </button>
                  </div>
                `:w}

          <div
            style="border-top: 1px solid var(--border); padding-top: 12px; display: grid; gap: 6px; font-size: 12px; color: var(--muted);"
          >
            <div>
              <span style="font-weight: 600;">${E(`skillsPage.source`)}</span> ${e.source}
            </div>
            <div style="font-family: var(--mono); word-break: break-all;">${e.filePath}</div>
            ${(()=>{let t=G(e.homepage);return t?y`<div>
                    <a href="${t}" target="_blank" rel="noopener noreferrer"
                      >${e.homepage}</a
                    >
                  </div>`:w})()}
          </div>
        </div>
      </div>
    </openclaw-modal-dialog>
  `}function Et(e,t,n){let r=e.clawhub;if(!r)return w;if(r.status===`invalid`)return y`<div class="callout danger">
      <div style="font-weight: 600; margin-bottom: 4px;">${E(`skillsPage.invalidLink`)}</div>
      <div>${f(r.reason)}</div>
    </div>`;let i=G(n?.securityAuditUrl??void 0),a=n?.reasons?.length?f(n.reasons.join(`, `)):null,o=q(n,t.clawhubVerdictsLoading),s=`${r.ownerHandle?`@${r.ownerHandle}/`:``}${r.slug}@${r.installedVersion}`;return y`
    <div
      class="callout"
      style="display: grid; gap: 8px; border-color: var(--border); background: var(--panel-strong);"
    >
      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
        <span class="chip ${o.chipClass}">${o.label}</span>
        <span class="muted" style="font-size: 12px;">${s}</span>
        ${t.clawhubVerdictsLoading&&n?y`<span class="muted">${E(`skillsPage.refreshing`)}</span>`:w}
      </div>
      ${t.clawhubVerdictsError?y`<div class="muted" style="font-size: 13px;">${t.clawhubVerdictsError}</div>`:a?y`<div class="muted" style="font-size: 13px;">${a}</div>`:w}
      ${i?y`<div style="font-size: 13px;">
              <a href="${i}" target="_blank" rel="noopener noreferrer"
                >${E(`skillsPage.fullSecurityReport`)}</a
              >
            </div>`:w}
    </div>
  `}function Dt(e,t){if(!e.skillCard?.present)return w;let n=t.skillCardContents[e.skillKey];if(n===void 0){let n=t.skillCardErrors[e.skillKey];return n?y`<div class="callout danger">${n}</div>`:y`<div class="muted" style="font-size: 13px;">
      ${t.skillCardLoadingKey===e.skillKey?E(`skillsPage.loadingSkillCard`):E(`skillsPage.skillCardNotLoaded`)}
    </div>`}return y`
    <article
      class="sidebar-markdown"
      style="max-width: 100%; overflow-wrap: anywhere;"
      @click=${Fe}
    >
      ${ge(Pe(n))}
    </article>
  `}var Z;function Ot(){return(Ot=e((()=>{v(),C(),ye(),Ue(),Ye(),De(),D(),Ie(),Me(),F(),T(),Re(),c(),g(),fe(),Ve(),nt(),tt(),o(),Le(),Z=[{id:`all`,labelKey:`skillsPage.tabs.all`},{id:`ready`,labelKey:`skillsPage.tabs.ready`},{id:`needs-setup`,labelKey:`skillsPage.tabs.needsSetup`},{id:`disabled`,labelKey:`skillsPage.tabs.disabled`}]})))()}var Q;function $(){return($=e((()=>{r(),Oe(),v(),he(),be(),Se(),Ze(),g(),A(),o(),ze(),pe(),p(),st(),it(),U(),W(),Ot(),Q=class extends u{constructor(...e){super(...e),this.skillsAgentId=null,this.skillsAgentRevision=0,this.skillsLoading=!1,this.skillsReport=null,this.skillsError=null,this.skillOperation=null,this.skillsFilter=``,this.skillsStatusFilter=`all`,this.skillEdits={},this.skillMessages={},this.skillsDetailKey=null,this.skillsDetailTab=`overview`,this.clawhubSearchQuery=``,this.clawhubDetail=null,this.clawhubDetailRef=null,this.clawhubDetailLoading=!1,this.clawhubDetailError=null,this.clawhubInstallMessage=null,this.clawhubVerdicts={},this.clawhubVerdictsLoading=!1,this.clawhubVerdictsError=null,this.skillCardContents={},this.skillCardContentKeys={},this.skillCardLoadingKey=null,this.skillCardErrors={},this.clawhubSearchTimer=null,this.routeDataInitialized=!1,this.routeDataEnabled=!0,this.debouncedClawHubSearchQuery=``,this.gateway=new Be(this,{getGateway:()=>this.context?.gateway,invalidateRequests:()=>this.resetLoadedSkillState(),ensureInitialData:()=>this.ensureInitialData()}),this.library=new H(this,this.gateway,()=>this.skillsAgentId??this.context.agents.state.agentsList?.defaultId??null,()=>this.refreshPage()),this.clawhubSearchTask=new ke(this,{autoRun:!1,args:()=>[this.gateway.connected?this.gateway.client:null,this.debouncedClawHubSearchQuery],task:([e,t],{signal:n})=>e&&t?ct(e,t,n):Ae}),this.subscriptions=new d(this).effect(()=>this.context?.agents,e=>{let t=e.subscribe(()=>{this.reconcileAgentState(),this.ensureInitialData(),this.requestUpdate()});return this.reconcileAgentState(),this.ensureInitialData(),t})}get runtimeConfig(){return this.context.runtimeConfig}get client(){return this.gateway.client}get connected(){return this.gateway.connected}willUpdate(e){e.has(`routeData`)&&(this.applyRouteData(),this.ensureInitialData())}disconnectedCallback(){this.subscriptions.clear(),this.clawhubSearchTimer&&=(clearTimeout(this.clawhubSearchTimer),null),super.disconnectedCallback()}reconcileAgentState(){let e=this.context.agents.state;if(e.agentsList){let t=this.skillsAgentId;oe(this,e.agentsList),t!==this.skillsAgentId&&(this.skillsDetailKey=null,this.skillsDetailTab=`overview`)}}resetLoadedSkillState(){this.library.reset(),this.clawhubSearchTask.run([null,``]),this.clawhubSearchTimer&&=(clearTimeout(this.clawhubSearchTimer),null),this.routeDataInitialized&&(this.routeDataEnabled=!1),this.skillsAgentId=null,this.skillsAgentRevision++,this.skillsLoading=!1,this.skillsReport=null,this.skillsError=null,this.skillOperation=null,this.skillEdits={},this.skillMessages={},this.skillsDetailKey=null,this.skillsDetailTab=`overview`,this.debouncedClawHubSearchQuery=``,this.clawhubDetail=null,this.clawhubDetailRef=null,this.clawhubDetailLoading=!1,this.clawhubDetailError=null,this.clawhubInstallMessage=null,this.clawhubVerdicts={},this.clawhubVerdictsLoading=!1,this.clawhubVerdictsError=null,this.skillCardContents={},this.skillCardContentKeys={},this.skillCardLoadingKey=null,this.skillCardErrors={}}applyRouteData(){let e=this.routeData;if(e){if(this.routeDataInitialized=!0,this.routeDataEnabled=!0,!this.gateway.isRouteDataCurrent(e)||e.agents!==this.context.agents){this.routeDataEnabled=!1;return}this.skillsAgentId&&e.selectedAgentId&&e.selectedAgentId!==this.skillsAgentId||(this.skillsAgentId=e.selectedAgentId??this.skillsAgentId,this.skillsLoading=!1,this.skillsReport=e.report,this.skillsError=e.error,e.report&&ae(this,e.report))}}ensureInitialData(){if(this.library&&!this.library.list&&!this.library.loading&&!this.library.error&&this.library.load(),this.routeDataEnabled||!this.routeDataInitialized||!this.gateway.connected||!this.gateway.client)return;let e=this.context.agents.state;if(!e.agentsList){e.agentsLoading||this.loadAgents();return}this.reconcileAgentState(),!this.skillsReport&&!this.skillsLoading&&m(this),this.clawhubSearchQuery.trim()&&this.clawhubSearchTask.status!==O.PENDING&&this.clawhubSearchResults===null&&this.clawhubSearchError===null&&this.runClawHubSearch(this.clawhubSearchQuery)}async loadAgents(){if(!this.gateway.client||!this.gateway.connected)return;let e=this.context.agents;e.state.agentsList||await e.ensureList(),this.context.agents===e&&(this.reconcileAgentState(),this.ensureInitialData())}async refreshPage(){await Promise.all([me(this,()=>this.loadAgents()),this.library.load()])}changeAgent(e){if(this.skillOperation||this.skillsLoading)return;let t=this.skillsAgentId;ce(this,e),t!==this.skillsAgentId&&(this.skillsDetailKey=null,this.skillsDetailTab=`overview`),m(this,{clearMessages:!0})}changeClawHubQuery(e){this.clawhubSearchQuery=e,this.clawhubInstallMessage=null,this.debouncedClawHubSearchQuery=``,this.clawhubSearchTask.run([null,``]),this.clawhubSearchTimer&&clearTimeout(this.clawhubSearchTimer),this.clawhubSearchTimer=setTimeout(()=>this.runClawHubSearch(e),300)}runClawHubSearch(e){let t=e.trim();if(this.debouncedClawHubSearchQuery=t,!t||!this.gateway.connected||!this.gateway.client){this.clawhubSearchTask.run([null,``]);return}this.clawhubSearchTask.run([this.gateway.client,t])}get clawhubSearchResults(){return this.clawhubSearchTask.status===O.COMPLETE&&this.debouncedClawHubSearchQuery===this.clawhubSearchQuery.trim()?this.clawhubSearchTask.value??null:null}get clawhubSearchLoading(){return this.debouncedClawHubSearchQuery.length>0&&this.clawhubSearchTask.status===O.PENDING}get clawhubSearchError(){if(this.clawhubSearchTask.status!==O.ERROR||this.debouncedClawHubSearchQuery!==this.clawhubSearchQuery.trim())return null;let e=this.clawhubSearchTask.error;return _(e)}changeDetailTab(e){this.skillsDetailTab=e,e===`card`&&this.skillsDetailKey&&l(this,this.skillsDetailKey)}canUpdateSkills(){return k(this.context?.gateway?.snapshot,`skills.update`,`operator.admin`)}canInstallSkills(){return k(this.context?.gateway?.snapshot,`skills.install`,`operator.admin`)}selectHubTab(e){if(e!==`skills`){if(e===`workshop`){this.context.navigate(`skill-workshop`);return}this.context.navigate(`plugins`,{pathname:we(e,this.context.basePath)})}}render(){let e=this.context.agents.state,t=this.skillsError??e.agentsError;return y`
      ${at({active:`skills`,onSelect:e=>this.selectHubTab(e)})}
      ${Xe(y`
        <wa-tab-panel
          id=${ot}
          name="skills"
          active
          aria-labelledby="plugins-tab-skills"
        >
          ${vt({library:lt(this.library),showInventory:this.library.showWorkspace,personalImport:!this.library.showWorkspace,canUpdate:this.canUpdateSkills(),canInstall:this.library.showWorkspace?this.canInstallSkills():this.library.canWrite&&!!this.library.list?.profileId,connected:this.gateway.connected,loading:this.skillsLoading||e.agentsLoading||this.library.busy,report:this.skillsReport,agentsList:e.agentsList,selectedAgentId:this.skillsAgentId??e.agentsList?.defaultId??null,error:t,filter:this.skillsFilter,statusFilter:this.skillsStatusFilter,edits:this.skillEdits,messages:this.skillMessages,operation:this.skillOperation,detailKey:this.skillsDetailKey,detailTab:this.skillsDetailTab,clawhubVerdicts:this.clawhubVerdicts,clawhubVerdictsLoading:this.clawhubVerdictsLoading,clawhubVerdictsError:this.clawhubVerdictsError,skillCardContents:this.skillCardContents,skillCardLoadingKey:this.skillCardLoadingKey,skillCardErrors:this.skillCardErrors,clawhubQuery:this.clawhubSearchQuery,clawhubResults:this.clawhubSearchResults,clawhubSearchLoading:this.clawhubSearchLoading,clawhubSearchError:this.clawhubSearchError,clawhubDetail:this.clawhubDetail,clawhubDetailRef:this.clawhubDetailRef,clawhubDetailLoading:this.clawhubDetailLoading,clawhubDetailError:this.clawhubDetailError,clawhubInstallMessage:this.clawhubInstallMessage,onAgentChange:e=>this.changeAgent(e),onFilterChange:e=>this.skillsFilter=e,onStatusFilterChange:e=>this.skillsStatusFilter=e,onRefresh:()=>void this.refreshPage(),onToggle:(e,t)=>{this.canUpdateSkills()&&se(this,e,t,()=>this.canUpdateSkills())},onEdit:(e,t)=>{this.canUpdateSkills()&&ee(this,e,t)},onSaveKey:e=>{this.canUpdateSkills()&&s(this,e,()=>this.canUpdateSkills())},onInstall:(e,t,n)=>{this.canInstallSkills()&&te(this,e,t,n)},onDetailOpen:e=>{this.skillsDetailKey=e,this.skillsDetailTab=`overview`},onDetailClose:()=>this.skillsDetailKey=null,onDetailTabChange:e=>this.changeDetailTab(e),onClawHubQueryChange:e=>this.changeClawHubQuery(e),onClawHubDetailOpen:e=>void ne(this,e),onClawHubDetailClose:()=>ue(this),onClawHubInstall:(e,t)=>{this.library.showWorkspace?this.canInstallSkills()&&le(this,e,t):(this.clawhubDetailRef=null,this.library.importSource={slug:e,version:t},this.library.importSlug=``,this.library.importOpen=!0,this.requestUpdate())}})}
        </wa-tab-panel>
      `)}
    `}},t([n({context:Ce,subscribe:!0})],Q.prototype,`context`,void 0),t([ve({attribute:!1})],Q.prototype,`routeData`,void 0),t([b()],Q.prototype,`skillsAgentId`,void 0),t([b()],Q.prototype,`skillsAgentRevision`,void 0),t([b()],Q.prototype,`skillsLoading`,void 0),t([b()],Q.prototype,`skillsReport`,void 0),t([b()],Q.prototype,`skillsError`,void 0),t([b()],Q.prototype,`skillOperation`,void 0),t([b()],Q.prototype,`skillsFilter`,void 0),t([b()],Q.prototype,`skillsStatusFilter`,void 0),t([b()],Q.prototype,`skillEdits`,void 0),t([b()],Q.prototype,`skillMessages`,void 0),t([b()],Q.prototype,`skillsDetailKey`,void 0),t([b()],Q.prototype,`skillsDetailTab`,void 0),t([b()],Q.prototype,`clawhubSearchQuery`,void 0),t([b()],Q.prototype,`clawhubDetail`,void 0),t([b()],Q.prototype,`clawhubDetailRef`,void 0),t([b()],Q.prototype,`clawhubDetailLoading`,void 0),t([b()],Q.prototype,`clawhubDetailError`,void 0),t([b()],Q.prototype,`clawhubInstallMessage`,void 0),t([b()],Q.prototype,`clawhubVerdicts`,void 0),t([b()],Q.prototype,`clawhubVerdictsLoading`,void 0),t([b()],Q.prototype,`clawhubVerdictsError`,void 0),t([b()],Q.prototype,`skillCardContents`,void 0),t([b()],Q.prototype,`skillCardContentKeys`,void 0),t([b()],Q.prototype,`skillCardLoadingKey`,void 0),t([b()],Q.prototype,`skillCardErrors`,void 0),customElements.get(`openclaw-skills-page`)||customElements.define(`openclaw-skills-page`,Q)})))()}$();
//# sourceMappingURL=skills-page-CXDm5_iv.js.map