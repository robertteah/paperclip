import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Ca as t,Fr as n,L as r,R as i,nr as a}from"./control-ui-foundation-DMb6IeIq.js";import{Gc as o,Gn as s,Hs as c,Kn as l,Vs as u,Yo as d,qc as f,qo as p}from"./control-ui-core-DzidtL-P.js";import{$ as m,K as h,X as g,at as _,q as v}from"./lit-runtime-vxhGQLC6.js";import{Tn as y,h as b,m as ee,zn as te}from"./control-ui-core-CaKBexnk.js";import{n as ne,t as x}from"./control-ui-boot-shared-DW2inEkr.js";import{Bt as re,Gt as S}from"./control-ui-core-uEI6aN5p.js";import{n as C,r as ie}from"./gateway-runtime-DP4whqrA.js";import{Et as w,Ft as T,Ht as ae,Lt as E,Nt as oe,Ot as se,Pt as ce,Tt as D,Vt as O,wt as k,zt as A}from"./control-ui-boot-shared-Cyt1Zyts.js";import{Nt as j,Pt as M}from"./control-ui-boot-chat-pu3gR1ly.js";import{Qs as N,Zs as P}from"./control-ui-boot-shared-CH-OC11d.js";import{n as F,t as I}from"./en-settings-D6ws8ujh.js";import{n as L,t as R}from"./settings-workspace-IBRfeTG9.js";function z(e){let t=a(e.cloudWorkers)?e.cloudWorkers:null;return a(t?.profiles)?t.profiles:{}}function B(e){return a(e.settings)?e.settings:{}}function V(e,n){return t(e[n])??``}function H(e){return e?Object.entries(z(e)).flatMap(([e,n])=>{if(!a(n))return[];let r=B(n);return[{id:e,providerId:t(n.provider)??``,install:n.install===`npm`?`npm`:`bundle`,backend:V(r,`provider`),machineClass:V(r,`class`),ttl:V(r,`ttl`),idleTimeout:V(r,`idleTimeout`),setup:V(r,`setup`),desktop:r.desktop===!0,binary:V(r,`binary`)}]}).toSorted((e,t)=>e.id.localeCompare(t.id)):[]}function U(e){return{id:e?.id??``,backend:e?.backend??``,machineClass:e?.machineClass??``,ttl:e?.ttl||`8h`,idleTimeout:e?.idleTimeout||`45m`,setup:e?.setup??``,desktop:e?.desktop??!1,binary:e?.binary??``}}function W(e,t,n){let r=e.id.trim();if(!K.test(r)||r!==e.id)return`profileId`;if(!n&&Object.hasOwn(t,r))return`profileExists`;if(n&&!Object.hasOwn(t,n))return`profileMissing`;if(!e.backend.trim())return`backend`;let i=e.machineClass.trim();if(!i||i.length>128)return`machineClass`;if(!q.test(e.ttl.trim()))return`ttl`;if(!q.test(e.idleTimeout.trim()))return`idleTimeout`;let a=e.binary.trim();return a&&!a.startsWith(`/`)&&!J.test(a)?`binary`:null}function G(e,n,r){let i=z(e),o=W(n,i,r);if(o)return{error:o};let s=r??n.id,c=a(i[s])?i[s]:{},l=B(c);if(r&&(t(c.provider)!==`crabbox`||!V(l,`class`)))return{error:`profileMissing`};let u=n.setup.trim(),d=!u&&Array.isArray(l.setupEnv)&&l.setupEnv.length>0,f={provider:n.backend.trim(),class:n.machineClass.trim(),ttl:n.ttl.trim(),idleTimeout:n.idleTimeout.trim(),setup:u||null,...d?{setupEnv:null}:{},desktop:n.desktop?!0:null,binary:n.binary.trim()||null},p={provider:t(c.provider)??`crabbox`,install:c.install===`npm`?`npm`:`bundle`,settings:f};return{patch:{cloudWorkers:{profiles:{[s]:p}}},replacePaths:d?x(l.setupEnv,`cloudWorkers.profiles.${s}.settings.setupEnv`):[]}}function le(e,t){let n=z(e);if(!Object.hasOwn(n,t))return{error:`profileMissing`};let r=a(e.cloudWorkers)?e.cloudWorkers:null,i=a(r?.projectProfiles)?r.projectProfiles:{},o=Object.fromEntries(Object.entries(i).filter(([,e])=>e===t).map(([e])=>[e,null]));return{patch:{cloudWorkers:{profiles:{[t]:null},...Object.keys(o).length>0?{projectProfiles:o}:{}}},replacePaths:x(n[t],`cloudWorkers.profiles.${t}`)}}function ue(e,t,n){return n?t.has(e)?`advertised`:`restart-required`:`loading`}var K,q,J;function Y(){return(Y=e((()=>{ne(),K=/^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$/u,q=/^(?=.*[1-9])\+?(?:(?:\d+(?:\.\d*)?|\.\d+)(?:ns|us|µs|μs|ms|s|m|h))+$/u,J=/^[A-Za-z]:[\\/]/u})))()}function X(e){let t=e.currentTarget;return t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement?t.value:``}var Z,Q;function $(){return($=e((()=>{i(),h(),m(),y(),b(),j(),k(),R(),re(),I(),u(),d(),ie(),N(),f(),l(),Y(),F(),Z=`https://docs.openclaw.ai/gateway/cloud-workers`,Q=class extends o{constructor(...e){super(...e),this.advertisedProfileIds=new Set,this.catalogLoaded=!1,this.catalogLoading=!1,this.catalogError=null,this.editor=null,this.draft=U(),this.formError=null,this.notice=null,this.busyProfileId=null,this.gateway=new P(this,{getGateway:()=>this.context?.gateway,invalidateRequests:()=>this.resetGatewayState(),onSnapshot:e=>{e.initial&&this.resetGatewayState()},ensureInitialData:()=>void this.loadCatalog()}),this.subscriptions=new s(this).effect(()=>this.context?.runtimeConfig,e=>(e.ensureLoaded(),e.subscribe(()=>this.requestUpdate())))}disconnectedCallback(){this.subscriptions.clear(),super.disconnectedCallback()}resetGatewayState(){this.busyProfileId=null,this.advertisedProfileIds=new Set,this.catalogLoaded=!1,this.catalogLoading=!1,this.catalogError=null}async loadCatalog(){if(this.catalogLoading||this.catalogLoaded)return;let e=this.gateway.capture();if(!e||!C(this.gateway.snapshot,`environments.list`,`operator.admin`)){this.catalogLoaded=!0;return}this.catalogLoading=!0,this.catalogError=null;try{let t=await e.client.request(`environments.list`,{});if(!this.gateway.isCurrent(e))return;this.advertisedProfileIds=new Set((t.profiles??[]).map(e=>e.id)),this.catalogLoaded=!0}catch(t){this.gateway.isCurrent(e)&&(this.catalogError=p(t),this.catalogLoaded=!0)}finally{this.gateway.isCurrent(e)&&(this.catalogLoading=!1)}}editableConfig(){return c(this.context?.runtimeConfig.state.configSnapshot)}profiles(){return H(this.editableConfig())}hasManageAccess(){return C(this.gateway.snapshot,`config.patch`,`operator.admin`)}canManage(){let e=this.context?.runtimeConfig.state;return!!(this.hasManageAccess()&&e?.configSnapshot?.hash&&!e.configLoading&&!e.configSaving&&this.busyProfileId===null)}openAdd(){this.canManage()&&(this.editor={kind:`add`},this.draft=U(),this.formError=null,this.notice=null)}openEdit(e){if(this.canManage()){if(e.providerId!==`crabbox`||!e.machineClass){this.context.navigate(`advanced`,{search:`?section=cloudWorkers`});return}this.editor={kind:`edit`,profileId:e.id},this.draft=U(e),this.formError=null,this.notice=null}}closeEditor(){this.busyProfileId===null&&(this.editor=null,this.formError=null)}patchDraft(e){this.draft={...this.draft,...e},this.formError=null}errorText(e){return S(`cloudWorkersPage.errors.${e}`)}async saveProfile(e){let t=this.gateway.capture(),n=this.context.runtimeConfig,r=this.editor?.kind===`edit`?this.editor.profileId:null,i=this.editableConfig();if(!t||!this.editor||!i||!this.canManage())return;let a=W(e,Object.fromEntries(this.profiles().map(e=>[e.id,!0])),r);if(a){this.formError=this.errorText(a);return}let o=r??e.id;this.busyProfileId=o,this.formError=null,this.notice=null;let s=()=>this.gateway.isCurrent(t)&&this.context.runtimeConfig===n;try{let t=await n.patchFromSnapshot(t=>{let n=G(t,e,r);return`error`in n?{error:this.errorText(n.error)}:{options:{raw:n.patch,replacePaths:n.replacePaths,note:`cloud workers: ${r?`update`:`add`} ${o}`,canDispatch:s}}});if(!s())return;if(!t){this.formError=n.state.lastError??S(`cloudWorkersPage.errors.saveFailed`);return}this.editor=null,this.notice=S(`labsPage.restartRequired`)}catch(e){s()&&(this.formError=p(e))}finally{s()&&(this.busyProfileId=null)}}async deleteProfile(e){let t=this.context.gateway,n=t.snapshot.client,r=t.connection.gatewayUrl,i=this.context.runtimeConfig;if(!this.canManage()||!await M({title:S(`cloudWorkersPage.deleteTitle`),message:S(`cloudWorkersPage.deleteConfirm`,{profile:e.id}),confirmLabel:S(`common.delete`),danger:!0}))return;let a=this.gateway.capture();if(!a||a.client!==n||this.context.gateway!==t||t.connection.gatewayUrl!==r||this.context.runtimeConfig!==i||!this.canManage()){this.formError=S(`cloudWorkersPage.errors.deleteFailed`);return}this.busyProfileId=e.id,this.formError=null,this.notice=null;let o=()=>this.gateway.isCurrent(a)&&this.context.runtimeConfig===i;try{let t=await i.patchFromSnapshot(t=>{let n=le(t,e.id);return`error`in n?{error:this.errorText(n.error)}:{options:{raw:n.patch,replacePaths:n.replacePaths,note:`cloud workers: delete ${e.id}`,canDispatch:o}}});if(!o())return;if(!t){this.formError=i.state.lastError??S(`cloudWorkersPage.errors.deleteFailed`);return}this.editor?.kind===`edit`&&this.editor.profileId===e.id&&(this.editor=null),this.notice=S(`labsPage.restartRequired`)}catch(e){o()&&(this.formError=p(e))}finally{o()&&(this.busyProfileId=null)}}profileDescription(e){return e.providerId===`crabbox`?[S(`cloudWorkersPage.backendFact`,{backend:e.backend||S(`common.unknown`)}),S(`cloudWorkersPage.classFact`,{value:e.machineClass||S(`common.unknown`)}),S(`cloudWorkersPage.ttlFact`,{value:e.ttl||S(`common.unknown`)}),S(`cloudWorkersPage.idleFact`,{value:e.idleTimeout||S(`common.unknown`)}),S(`cloudWorkersPage.desktopFact`,{value:e.desktop?S(`common.enabled`):S(`common.disabled`)})].join(` · `):S(`cloudWorkersPage.providerFact`,{provider:e.providerId||S(`common.unknown`)})}renderProfile(e){let t=ue(e.id,this.advertisedProfileIds,this.catalogLoaded),n=A(t===`advertised`?{kind:`ok`,label:S(`cloudWorkersPage.advertised`)}:t===`restart-required`?{kind:`warn`,label:S(`cloudWorkersPage.restartRequired`)}:{kind:`muted`,label:S(`common.loading`)}),r=this.canManage();return T({title:g`<code>${e.id}</code>`,description:this.profileDescription(e),control:g`
        ${n}
        <button
          class="btn btn--sm"
          type="button"
          ?disabled=${!r}
          @click=${()=>this.openEdit(e)}
        >
          ${S(`cloudWorkersPage.editAction`)}
        </button>
        <button
          class="btn btn--sm danger"
          type="button"
          ?disabled=${!r}
          @click=${()=>void this.deleteProfile(e)}
        >
          ${S(`common.delete`)}
        </button>
      `})}renderEditor(){if(!this.editor)return v;let e=this.busyProfileId!==null,t=this.canManage(),n=this.editor.kind===`edit`;return E({title:S(n?`cloudWorkersPage.editProfile`:`cloudWorkersPage.addProfile`)},[T({title:S(`cloudWorkersPage.fields.profileId`),description:S(`cloudWorkersPage.fields.profileIdHelp`),control:n?ae(this.draft.id,{mono:!0}):g`<input
                class="settings-input mono"
                aria-label=${S(`cloudWorkersPage.fields.profileId`)}
                autocomplete="off"
                spellcheck="false"
                .value=${this.draft.id}
                ?disabled=${e}
                @input=${e=>this.patchDraft({id:X(e)})}
              />`}),T({title:S(`cloudWorkersPage.fields.backend`),description:g`${S(`cloudWorkersPage.fields.backendHelp`)}
          ${D(Z,S(`cloudWorkersPage.providerList`))}`,control:g`<input
            class="settings-input mono"
            aria-label=${S(`cloudWorkersPage.fields.backend`)}
            placeholder=${S(`cloudWorkersPage.fields.backendPlaceholder`)}
            autocomplete="off"
            spellcheck="false"
            .value=${this.draft.backend}
            ?disabled=${e}
            @input=${e=>this.patchDraft({backend:X(e)})}
          />`}),T({title:S(`cloudWorkersPage.fields.machineClass`),description:S(`cloudWorkersPage.fields.machineClassHelp`),control:g`<input
            class="settings-input mono"
            aria-label=${S(`cloudWorkersPage.fields.machineClass`)}
            autocomplete="off"
            spellcheck="false"
            .value=${this.draft.machineClass}
            ?disabled=${e}
            @input=${e=>this.patchDraft({machineClass:X(e)})}
          />`}),T({title:S(`cloudWorkersPage.fields.ttl`),description:S(`cloudWorkersPage.fields.ttlHelp`),control:g`<input
            class="settings-input mono"
            aria-label=${S(`cloudWorkersPage.fields.ttl`)}
            placeholder=${S(`cloudWorkersPage.fields.ttlPlaceholder`)}
            autocomplete="off"
            spellcheck="false"
            .value=${this.draft.ttl}
            ?disabled=${e}
            @input=${e=>this.patchDraft({ttl:X(e)})}
          />`}),T({title:S(`cloudWorkersPage.fields.idleTimeout`),description:S(`cloudWorkersPage.fields.idleTimeoutHelp`),control:g`<input
            class="settings-input mono"
            aria-label=${S(`cloudWorkersPage.fields.idleTimeout`)}
            placeholder=${S(`cloudWorkersPage.fields.idleTimeoutPlaceholder`)}
            autocomplete="off"
            spellcheck="false"
            .value=${this.draft.idleTimeout}
            ?disabled=${e}
            @input=${e=>this.patchDraft({idleTimeout:X(e)})}
          />`}),T({title:S(`cloudWorkersPage.fields.setup`),description:S(`cloudWorkersPage.fields.setupHelp`),stacked:!0,control:g`<textarea
            class="settings-input mono"
            aria-label=${S(`cloudWorkersPage.fields.setup`)}
            placeholder=${S(`cloudWorkersPage.fields.setupPlaceholder`)}
            autocomplete="off"
            spellcheck="false"
            .value=${this.draft.setup}
            ?disabled=${e}
            @input=${e=>this.patchDraft({setup:X(e)})}
          ></textarea>`}),O({title:S(`cloudWorkersPage.fields.desktop`),description:S(`cloudWorkersPage.fields.desktopHelp`),checked:this.draft.desktop,disabled:e,onChange:e=>this.patchDraft({desktop:e})}),T({title:S(`cloudWorkersPage.fields.binary`),description:S(`cloudWorkersPage.fields.binaryHelp`),control:g`<input
            class="settings-input mono"
            aria-label=${S(`cloudWorkersPage.fields.binary`)}
            placeholder=${S(`cloudWorkersPage.fields.binaryPlaceholder`)}
            autocomplete="off"
            spellcheck="false"
            .value=${this.draft.binary}
            ?disabled=${e}
            @input=${e=>this.patchDraft({binary:X(e)})}
          />`}),...this.formError?[T({title:S(`cloudWorkersPage.errors.title`),description:g`<span role="alert">${this.formError}</span>`})]:[],T({title:S(`cloudWorkersPage.fields.actions`),description:S(`cloudWorkersPage.fields.actionsHelp`),control:g`
            <button
              class="btn primary"
              type="button"
              ?disabled=${!t}
              @click=${()=>void this.saveProfile(this.draft)}
            >
              ${S(e?`common.saving`:`common.save`)}
            </button>
            <button class="btn" type="button" ?disabled=${e} @click=${()=>this.closeEditor()}>
              ${S(`common.cancel`)}
            </button>
          `})])}render(){let e=this.profiles(),t=this.canManage()?g`<button class="btn btn--sm primary" type="button" @click=${()=>this.openAdd()}>
          ${S(`cloudWorkersPage.addProfile`)}
        </button>`:void 0,n=e.length?e.map(e=>this.renderProfile(e)):se(S(`cloudWorkersPage.empty`)),r=oe(g`
      ${this.hasManageAccess()?v:g`<div class="callout warning" role="note">
              ${S(`cloudWorkersPage.adminRequired`)}
            </div>`}
      ${this.catalogError?g`<div class="callout warning" role="status">
              ${S(`cloudWorkersPage.catalogFailed`,{error:this.catalogError})}
            </div>`:v}
      ${this.formError&&!this.editor?g`<div class="callout warning" role="alert">${this.formError}</div>`:v}
      ${this.notice?g`<div class="callout warning" role="status">${this.notice}</div>`:v}
      ${E({title:S(`cloudWorkersPage.sectionTitle`),description:S(`cloudWorkersPage.sectionDescription`),actions:t,count:e.length},n)}
      ${this.renderEditor()}
    `);return g`
      ${ce({title:te(`cloud-workers`),subtitle:g`${S(`cloudWorkersPage.intro`)} ${w(Z)}`})}
      ${L(r)}
    `}},n([r({context:ee,subscribe:!0})],Q.prototype,`context`,void 0),n([_()],Q.prototype,`advertisedProfileIds`,void 0),n([_()],Q.prototype,`catalogLoaded`,void 0),n([_()],Q.prototype,`catalogLoading`,void 0),n([_()],Q.prototype,`catalogError`,void 0),n([_()],Q.prototype,`editor`,void 0),n([_()],Q.prototype,`draft`,void 0),n([_()],Q.prototype,`formError`,void 0),n([_()],Q.prototype,`notice`,void 0),n([_()],Q.prototype,`busyProfileId`,void 0),customElements.get(`openclaw-cloud-workers-page`)||customElements.define(`openclaw-cloud-workers-page`,Q)})))()}$();
//# sourceMappingURL=cloud-workers-page-L9fafeCK.js.map