import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,L as n,Ni as r,Pi as i,R as a,l as o,u as s}from"./control-ui-foundation-DMb6IeIq.js";import{Ac as c,Bs as l,Gc as u,Mc as ee,Nc as te,Vs as ne,Wc as re,Yo as ie,qc as d,qo as f}from"./control-ui-core-DzidtL-P.js";import{$ as ae,K as p,X as m,at as h,q as g,st as _}from"./lit-runtime-vxhGQLC6.js";import{R as oe,Rn as se,Tn as ce,an as le,cr as ue,fr as de,h as fe,m as pe,nn as me,on as he,sn as ge,zn as _e}from"./control-ui-core-CaKBexnk.js";import{F as ve,L as ye}from"./control-ui-boot-shared-DW2inEkr.js";import{Bt as v,Ft as be,Gt as y,It as xe}from"./control-ui-core-uEI6aN5p.js";import{$t as Se,Dn as b,Fn as x,Ln as S,Nn as C,Tn as w,Un as T,Yn as E,_n as Ce,an as we,bn as Te,en as Ee,hn as D,in as De,jn as O,nn as Oe,on as ke,qn as k,rn as Ae,sn as je,tn as Me,vn as A,xn as Ne,yn as Pe}from"./control-ui-boot-shared-nBxCfWV5.js";import{Et as Fe,F as Ie,Ft as j,Ht as M,Jr as Le,Kr as Re,Lt as N,Mt as ze,Nt as Be,Ot as P,P as Ve,Rt as He,Vt as Ue,io as We,jt as Ge,kt as Ke,no as qe,pa as Je,qr as Ye,to as Xe,wt as F,zt as I}from"./control-ui-boot-shared-Cyt1Zyts.js";import{Dc as Ze,Oc as Qe}from"./control-ui-boot-shared-CH-OC11d.js";import{n as $e,t as et}from"./select-picker-DnWtx1hT.js";import{r as tt,t as nt}from"./wizard-step-controls-BVdQYpIH.js";import{a as rt,r as L}from"./settings-targets-D_7u0c_C.js";import{n as it,t as at}from"./settings-workspace-IBRfeTG9.js";import{a as ot,c as st,i as ct,l as lt,n as ut,r as dt,s as ft,t as pt}from"./github-identity-view-DoQcqnky.js";var mt,ht;function gt(){return(gt=e((()=>{Te(),Pe(),mt=w([C(`auth`),C(`rate_limit`),C(`billing`),C(`timeout`),C(`format`),C(`unavailable`),C(`unknown`)]),ht=A({disposition:C(`rejected-before-promotion`),status:mt})})))()}var _t,vt,yt,bt,xt,St,Ct;function wt(){return(wt=e((()=>{Te(),Pe(),Ce(),gt(),_t=w([C(`running`),C(`done`),C(`cancelled`),C(`error`)]),A({mode:k(w([C(`local`),C(`remote`)])),workspace:k(b()),installDaemon:k(S()),flow:k(w([C(`setup`),C(`channels`)])),channel:k(D)}),vt=A({stepId:D,value:k(T())}),A({sessionId:D,answer:k(vt)}),A({sessionId:D}),yt=A({value:T(),label:D,hint:k(b())}),bt=A({code:D,expiresInMinutes:k(x({minimum:1,maximum:1440})),message:k(b())}),xt=A({id:D,type:w([C(`note`),C(`select`),C(`text`),C(`confirm`),C(`multiselect`),C(`progress`),C(`action`)]),title:k(b()),message:k(b()),format:k(w([C(`plain`)])),options:k(E(yt)),initialValue:k(T()),placeholder:k(b()),sensitive:k(S()),executor:k(w([C(`gateway`),C(`client`)])),externalUrl:k(b()),deviceCode:k(bt)}),St=A({channel:D,accountId:D}),Ct={done:S(),step:k(xt),status:k(_t),error:k(b()),channels:k(E(D)),accounts:k(E(St)),preparedModelRef:k(D),modelActivation:k(A({modelRef:D,gatewayRestartRequired:k(C(!0))})),activationRejection:k(ht)},A(Ct),A({sessionId:D,...Ct}),A({status:_t,error:k(b())})})))()}function Tt(e){return e===void 0||e===!0}var R,z,B,Et,V,Dt,Ot,kt,At,H,U,W,G,K,jt,Mt,q,J,Nt,Pt,Ft;function It(){return(It=e((()=>{Te(),je(),Pe(),Ce(),wt(),s(),R=`git.coauthor.enabled`,z=b({minLength:1,maxLength:128}),B=b({maxLength:256}),Et=b({minLength:1,maxLength:128,pattern:`\\S`}),V=b({pattern:`^.{1,256}$`}),Dt=Ne(V,T()),Ot=Ne(V,T(),{maxProperties:32}),kt=w([C(`image/png`),C(`image/jpeg`),C(`image/webp`)]),At=A({login:b({minLength:1,maxLength:39}),profileUrl:D,avatarUrl:D}),H=A({id:z,displayName:w([B,O()]),avatarMime:w([kt,O()]),mergedInto:w([z,O()]),createdAt:x({minimum:0}),updatedAt:x({minimum:0}),emails:E(D),githubIdentity:w([At,O()]),hasAvatar:S(),role:k(Et)}),A({}),A({profiles:E(H)}),A({}),A({profile:H}),A({email:b({minLength:1,maxLength:320}),targetProfileId:z}),A({profile:H}),A({profileId:z,displayName:w([B,O()])}),A({profile:H}),A({profileId:z,role:w([Et,O()])}),A({profile:H}),A({profileId:z,mime:kt,avatarBase64:b({minLength:1,maxLength:7e5})}),A({profile:H,avatarRevision:D}),U=b({minLength:1,maxLength:256}),W=b({minLength:1,maxLength:128}),G=b({minLength:1,maxLength:128}),K=A({provider:W,authProfileId:U,updatedAt:x({minimum:0})}),jt=A({authProfileId:U,provider:W,label:b({minLength:1,maxLength:256}),authType:w([C(`api_key`),C(`oauth`),C(`token`)]),selected:S()}),A({profileId:k(z),cursor:k(U)}),A({profileId:z,accounts:E(jt,{maxItems:50}),nextCursor:k(U),links:E(K)}),A({profileId:k(z),authProfileId:U}),A({links:E(K)}),Mt=k(w([C(`auto`),C(`user`),C(`user-link`)])),q=b({minLength:1,maxLength:256}),w([A({kind:C(`automatic`),label:q}),A({kind:C(`personal`),label:q,authProfileId:k(U),source:Mt}),A({kind:C(`shared`),label:q,authProfileId:U,source:Mt})]),A({profileId:z}),A({links:E(K)}),A({profileId:z,authProfileId:U}),A({links:E(K)}),A({profileId:z,provider:W}),A({links:E(K)}),A({profileId:z}),A({providers:E(A({id:W,label:D,methods:E(A({id:D,label:D,hint:k(b())}))}))}),A({profileId:z,provider:W,method:D}),A({connectId:G,expiresAtMs:x({minimum:0})}),A({profileId:z,connectId:G,...vt.properties}),A({profileId:z,connectId:G}),w([A({status:C(`pending`),step:k(xt),error:k(b())}),A({status:C(`connected`),authProfileId:U,links:E(K)}),A({status:C(`cancelled`)}),A({status:C(`expired`)}),A({status:C(`failed`),reason:w([C(`exchange`),C(`identity`),C(`authority`),C(`unavailable`)])})]),A({authProfileId:U,links:E(K)}),A({keys:k(E(V,{maxItems:32,uniqueItems:!0}))}),w([A({status:C(`ok`),entries:Dt}),A({status:C(`no_durable_identity`)})]),A({entries:Ot}),w([A({status:C(`ok`)}),A({status:C(`no_durable_identity`)})]),A({profileId:z,keys:E(V,{maxItems:32,uniqueItems:!0})}),J=b({format:`uuid`,maxLength:36}),Nt=A({accountId:x({minimum:1,maximum:2**53-1}),login:b({minLength:1,maxLength:39,pattern:`^[A-Za-z0-9](?:[A-Za-z0-9-]{0,37}[A-Za-z0-9])?$`})}),A({}),Pt=A({requestId:J,userCode:b({pattern:`^[A-Z0-9]{4}-[A-Z0-9]{4}$`}),verificationUri:C(`https://github.com/login/device`),expiresInMs:x({minimum:0,maximum:9e5}),pollAfterMs:x({minimum:1,maximum:6e4})}),A({requestId:J}),A({requestId:J}),A({cancelled:S()}),A({}),A({disconnected:C(!0)}),Ft=A({state:w([C(`connected`),C(`disconnected`),C(`unavailable`)]),generation:w([J,O()]),account:w([Nt,O()]),accessExpiresAtMs:w([x({minimum:0}),O()]),refreshState:w([C(`available`),C(`refreshing`),C(`expired`),C(`failed`),C(`not_applicable`)]),pending:w([Pt,O()])}),A({}),A({personal:Ft,system:Se}),w([we,ke,Ee,Me,Ae,De,Oe,A({status:C(`success`),personal:Ft})])})))()}var Y;function Lt(){return(Lt=e((()=>{a(),p(),ae(),ue(),fe(),ge(),F(),v(),ne(),d(),rt(),lt(),pt(),Y=class extends u{constructor(...e){super(...e),this.purpose=`personal`,this.setupOpen=!1,this.snapshot=null,this.revision=0,this.canRead=!1,this.canAdmin=!1,this.profileId=null,this.subscriptions=[],this.personal=new st({requestUpdate:()=>this.requestUpdate()}),this.system=new st({requestUpdate:()=>this.requestUpdate(),runExternalMutation:(e,t)=>this.context.runtimeConfig.runExternalMutation(e,t)})}connectedCallback(){super.connectedCallback(),this.subscriptions=[this.context.gateway.subscribe(e=>this.applySnapshot(e)),this.context.agents.subscribe(()=>this.syncControllers()),this.context.runtimeConfig.subscribe(()=>this.syncControllers())],this.applySnapshot(this.context.gateway.snapshot)}disconnectedCallback(){for(let e of this.subscriptions)e();this.subscriptions=[],this.personal.dispose(),this.system.dispose(),this.snapshot=null,this.revision+=1,super.disconnectedCallback()}applySnapshot(e){let t=this.snapshot,n=!t||t.client!==e.client||t.phase!==e.phase||t.hello!==e.hello||this.profileId!==(e.selfUser?.id??null);this.snapshot=e,this.profileId=e.phase===`connected`?e.selfUser?.id??null:null,this.canRead=e.phase===`connected`&&!!e.hello?.auth&&le(e.hello?.auth??null),this.canAdmin=this.canRead&&me(e.hello?.auth??null),n&&(this.revision+=1,this.setupOpen=!1,this.purpose=this.profileId?`personal`:`system`),this.syncControllers(),this.canAdmin&&this.context.runtimeConfig.ensureLoaded()}syncControllers(){let e=this.snapshot;if(!e)return;let t={client:e.client,connected:e.phase===`connected`,clientRevision:this.revision};this.personal.sync({...t,target:this.profileId?{kind:`personal`,profileId:this.profileId}:null,statusReadable:this.canRead&&this.profileId!==null,authorizable:this.canRead&&this.profileId!==null,configurable:!1});let n=this.context.agents.state.agentsList?.defaultId;this.system.sync({...t,target:n?{kind:`shared`,scope:`system`,agentId:n,config:l(this.context.runtimeConfig.state)}:null,statusReadable:this.canAdmin,authorizable:this.canAdmin,configurable:this.canAdmin}),this.personal.statusReadable&&!this.personal.personal&&!this.personal.loading&&!this.personal.error&&this.personal.verify(),n&&this.canAdmin&&!this.system.status&&!this.system.loading&&!this.system.error&&this.system.verify(),this.requestUpdate()}get locked(){return this.personal.loading||this.system.loading||this.personal.authorizationActive||this.system.authorizationActive||this.personal.busy||this.system.busy}openSetup(e){this.locked||(e===`personal`?!this.profileId||!this.canRead:!this.canAdmin)||(this.purpose=e,this.setupOpen=!0)}render(){let e=this.personal.personal,t=this.system.status?.selected.identity??this.personal.system,n=this.context.agents.state.agentsList?.defaultId,r=this.context.agents.state.agentsList?.agents?.find(e=>e.id===n),i=this.system.status?.effective??null,a=this.purpose===`personal`?this.personal:this.system,o=this.setupOpen||this.personal.authorizationActive||this.system.authorizationActive,s=e?.state===`connected`,c=e?.state===`unavailable`||e?.refreshState===`expired`||e?.refreshState===`failed`,l=this.profileId?y(c?`githubConnections.reconnectRequired`:s?`githubConnections.connected`:`githubConnections.disconnected`):y(`githubConnections.signInRequired`);return m`<div id=${L.githubConnections}>
      ${N({title:y(`githubConnections.title`),description:y(`githubConnections.description`),actions:this.canRead&&(this.profileId||this.canAdmin)?m`<button
                    class="btn btn--sm"
                    ?disabled=${this.locked||!this.profileId&&!this.system.status}
                    @click=${()=>this.openSetup(this.profileId?`personal`:`system`)}
                  >
                    ${y(`githubConnections.manage`)}
                  </button>
                  <button
                    class="btn btn--sm"
                    ?disabled=${this.locked}
                    @click=${()=>{this.personal.verify(),this.system.verify()}}
                  >
                    ${y(`agentTools.githubVerify`)}
                  </button>`:void 0},m`
          <div data-github-connection="personal">
            ${j({title:y(`githubConnections.mine`),description:this.profileId?m`${e?.account?`@${e.account.login} · `:``}${y(`githubConnections.personalDescription`)}`:y(`githubConnections.unboundDescription`),control:m`${this.profileId&&!e?ft(this.personal):I({kind:c?`warn`:s?`ok`:`muted`,label:l})}
              ${this.profileId&&this.canRead&&e?m`<button
                      class="btn btn--sm"
                      ?disabled=${this.locked}
                      @click=${()=>this.openSetup(`personal`)}
                    >
                      ${y(s?`githubConnections.changeMine`:`githubConnections.connectMine`)}
                    </button>`:g}`})}
          </div>
          <div data-github-connection="system">
            ${j({title:y(`githubConnections.system`),description:m`${t?.account?`@${t.account.login} · `:``}${y(`githubConnections.systemDescription`)}`,control:m`${ot(t,{loading:this.system.loading||this.personal.loading,error:this.system.error??this.personal.error})}${this.canAdmin?m`<button
                      class="btn btn--sm"
                      ?disabled=${this.locked||!this.system.status}
                      @click=${()=>this.openSetup(`system`)}
                    >
                      ${y(`githubConnections.changeSystem`)}
                    </button>`:M(y(`githubConnections.adminManaged`))}`})}
          </div>
          ${this.canAdmin&&n?m`<div data-github-connection="agent">
                  ${j({title:y(`githubConnections.agentFor`,{agent:r?.identity?.name??r?.name??n}),description:m`${i?.account?`@${i.account.login} · `:``}${i?y(i.source===`agent-override`?`githubConnections.agentOverride`:`githubConnections.system`):``}<br />${y(`githubConnections.agentDescription`)}`,control:m`${ot(i,this.system)}<button
                        class="btn btn--sm"
                        @click=${()=>this.context.navigate(`agents`,{pathname:de(n,`tools`,this.context.basePath)})}
                      >
                        ${y(`githubConnections.viewAgent`)}
                      </button>`})}
                </div>`:g}
          ${ut(this.personal.error??this.system.error,m`<button
              class="btn btn--sm"
              ?disabled=${this.locked}
              @click=${()=>{this.personal.verify(),this.system.verify()}}
            >
              ${y(`common.retry`)}
            </button>`)}
          ${o?m`<div class="settings-subrows" data-github-setup>
                  ${j({title:y(`githubConnections.purpose`),control:this.profileId&&this.canAdmin&&this.system.status?He({value:this.purpose,options:[{value:`personal`,label:y(`githubConnections.forMe`)},{value:`system`,label:y(`githubConnections.forSystem`)}],disabled:this.locked,ariaLabel:y(`githubConnections.purpose`),onChange:e=>this.openSetup(e)}):M(this.purpose===`personal`?y(`githubConnections.forMe`):y(`githubConnections.forSystem`))})}
                  ${dt(a)}
                  ${this.locked?g:j({title:y(`githubConnections.purposeHint`),control:m`<button
                            class="btn btn--sm"
                            @click=${()=>{this.setupOpen=!1,a.hidePatFallback()}}
                          >
                            ${y(`common.close`)}
                          </button>`})}
                </div>`:g}
          <details class="settings-row settings-row--stacked">
            <summary class="settings-row__title">${y(`githubConnections.usage`)}</summary>
            <div class="settings-row__desc">${y(`githubConnections.usageDescription`)}</div>
            ${ct(t)}
          </details>
          ${this.canAdmin&&this.system.status?.selected.configured?j({title:y(`agentTools.githubUseNativeNewRuns`),description:y(`agentTools.githubSystemMutationHint`),control:m`<button
                    class="btn btn--sm"
                    ?disabled=${this.locked}
                    @click=${()=>void this.system.inherit()}
                  >
                    ${y(`agentTools.githubUseNativeNewRuns`)}
                  </button>`}):g}
        `)}
      ${this.profileId&&this.canRead&&e&&e.state!==`disconnected`?N({danger:!0},j({title:y(`githubConnections.disconnectMine`),description:y(`githubConnections.disconnectDescription`),control:m`<button
                  class="btn btn--sm"
                  ?disabled=${this.locked}
                  @click=${()=>void this.personal.disconnect()}
                >
                  ${y(`githubConnections.disconnectMine`)}
                </button>`})):g}
    </div>`}},t([n({context:pe,subscribe:!1})],Y.prototype,`context`,void 0),t([h()],Y.prototype,`purpose`,void 0),t([h()],Y.prototype,`setupOpen`,void 0),customElements.get(`openclaw-github-connections`)||customElements.define(`openclaw-github-connections`,Y)})))()}function Rt(e,t){if(!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0)throw new X(`invalid-image`);let n=Math.min(e,t),r=Math.min(1,Wt/n);return{sourceEdge:n,sourceX:Math.max(0,Math.round((e-n)/2)),sourceY:Math.max(0,Math.round((t-n)/2)),edge:Math.max(1,Math.round(n*r))}}async function zt(e){let t=URL.createObjectURL(e);try{let e=new Image;return e.decoding=`async`,e.src=t,await e.decode(),e}catch{throw new X(`invalid-image`)}finally{URL.revokeObjectURL(t)}}function Bt(e,t,n){return new Promise(r=>{e.toBlob(r,t,n)})}function Vt(e){let t=[];for(let n=0;n<e.length;n+=32768)t.push(String.fromCharCode(...e.subarray(n,n+32768)));return btoa(t.join(``))}async function Ht(e,t){if(e.size>Gt)throw new X(`too-large`);let n=new Uint8Array(await e.arrayBuffer()),r=Vt(n);if(r.length>Kt)throw new X(`too-large`);return{mime:t,avatarBase64:r,byteLength:n.byteLength}}async function Ut(e){if(![`image/png`,`image/jpeg`,`image/webp`].includes(e.type))throw new X(`invalid-image`);if(e.size>qt)throw new X(`source-too-large`);let t=await zt(e),n=Rt(t.naturalWidth,t.naturalHeight),r=document.createElement(`canvas`);r.width=n.edge,r.height=n.edge;let i=r.getContext(`2d`);if(!i)throw new X(`invalid-image`);i.drawImage(t,n.sourceX,n.sourceY,n.sourceEdge,n.sourceEdge,0,0,n.edge,n.edge);let a=e.type===`image/webp`?`image/webp`:`image/png`,o=await Bt(r,a,a===`image/webp`?.9:void 0);if((!o||o.type!==a||o.size>Gt)&&(a=`image/webp`,o=await Bt(r,a,.82)),!o||o.type!==a)throw new X(`invalid-image`);return Ht(o,a)}var Wt,Gt,Kt,qt,X;function Jt(){return(Jt=e((()=>{Wt=512,Gt=524288,Kt=7e5,qt=10485760,X=class extends Error{constructor(e){super(e),this.code=e,this.name=`ProfileAvatarError`}}})))()}function Yt(e){return e.target.value}function Xt(e){try{let t=new URL(e);return`${t.origin}${t.pathname}`}catch{return y(`profilePage.modelAccounts.gatewayUnavailable`)}}function Zt(e,t){return e.some(e=>e.authProfileId!==t.authProfileId&&e.provider===t.provider&&e.label===t.label)?m` <code>${t.authProfileId}</code>`:``}function Qt(e,t){let n=e.accounts.find(e=>e.authProfileId===t.authProfileId);return j({title:m`
      <span class="model-accounts__id"
        >${n?.label??y(`profilePage.modelAccounts.gatewayAccount`)}</span
      >
      <span class="model-accounts__provider">${qe(t.provider)}</span>
    `,description:m`${y(`profilePage.modelAccounts.linkedDescription`)}${n?Zt(e.accounts,n):``}`,control:m`
      ${I({kind:`ok`,label:y(`profilePage.modelAccounts.linkedStatus`)})}
      <button
        type="button"
        class="btn btn--sm profile-auth-link-unlink"
        ?disabled=${e.busy}
        @click=${()=>e.onUnlink(t.provider)}
      >
        ${y(`profilePage.modelAccounts.unlinkAction`)}
      </button>
    `})}function $t(e,t){return j({title:m`
      <span class="model-accounts__id">${t.label}</span>
      <span class="model-accounts__provider">${qe(t.provider)}</span>
    `,description:m`${y(`profilePage.modelAccounts.authTypes.${t.authType}`)}${Zt(e.accounts,t)}`,control:m`
      <button
        type="button"
        class="btn btn--sm profile-auth-account-select"
        data-auth-profile-id=${t.authProfileId}
        ?disabled=${e.busy}
        @click=${()=>e.onSelectAccount(t.authProfileId)}
      >
        ${y(`profilePage.modelAccounts.selectAction`)}
      </button>
    `})}function en(e){let t=e.signIn;if(!t)return``;let n=t.providers.find(e=>e.id===t.provider),r=e.connectFlow,i=r?.step,a=m`<button
    type="button"
    class="btn btn--sm profile-auth-connect-cancel"
    ?disabled=${e.cancelBusy}
    @click=${r?e.onConnectCancel:e.onCloseSignIn}
  >
    ${y(`profilePage.modelAccounts.cancelAction`)}
  </button>`;return j({title:r?r.step?.title??n?.label??y(`profilePage.modelAccounts.connectAction`):y(`profilePage.modelAccounts.addAccount`),stacked:!0,control:r?m`<div class="model-accounts-flow">
          ${i?tt({step:i,value:e.stepValue,busy:e.busy,inputId:`profile-account-auth-answer`,leadingAction:a,onValueChange:t=>e.onStepValueChange(i.id,t),onAnswer:t=>e.onStepAnswer(i.id,t)}):m`<span role="status">${y(`common.loading`)}</span>${a}`}
          ${e.statusUnavailable?m`<button
                  type="button"
                  class="btn btn--sm profile-auth-connect-check"
                  ?disabled=${e.cancelBusy}
                  @click=${e.onConnectCheck}
                >
                  ${y(`profilePage.modelAccounts.checkStatusAction`)}
                </button>`:``}
        </div>`:m`<div class="model-accounts-choice">
          ${$e({label:y(`profilePage.modelAccounts.provider`),className:`profile-auth-provider`,value:t.provider||null,options:t.providers.map(e=>({value:e.id,label:e.label})),disabled:e.busy,renderLeading:e=>We(e.value),onChange:e.onProviderChange})}
          ${n?$e({label:y(`profilePage.modelAccounts.method`),className:`profile-auth-method`,value:t.method||null,options:n.methods.map(e=>({value:e.id,label:e.label,description:e.hint})),disabled:e.busy,onChange:e.onMethodChange}):``}
          ${!e.busy&&!e.error&&t.providers.length===0?m`<span>${y(`profilePage.modelAccounts.noMethods`)}</span>`:``}
          <div class="wizard-step__actions">
            ${a}
            <button
              type="button"
              class="btn btn--sm primary profile-auth-connect-start"
              ?disabled=${e.busy||!t.method}
              @click=${e.onConnectStart}
            >
              ${y(`profilePage.modelAccounts.connectAction`)}
            </button>
          </div>
        </div>`})}function tn(e){return j({title:y(`profilePage.modelAccounts.inputLabel`),description:y(`profilePage.modelAccounts.inputDescription`),stackedOnNarrow:!0,control:m`
      <form
        class="model-accounts-form"
        @submit=${t=>{t.preventDefault(),e.onLink()}}
      >
        <input
          class="settings-input profile-auth-link-input"
          type="text"
          aria-label=${y(`profilePage.modelAccounts.inputLabel`)}
          .value=${e.linkDraft}
          placeholder=${y(`profilePage.modelAccounts.inputPlaceholder`)}
          ?disabled=${e.busy}
          @input=${t=>e.onLinkDraftInput(Yt(t))}
        />
        <button
          type="submit"
          class="btn btn--sm profile-auth-link-submit"
          ?disabled=${e.busy||!e.linkDraft.trim()}
        >
          ${y(`profilePage.modelAccounts.linkAction`)}
        </button>
      </form>
    `})}function nn(e){return m`
    ${e.links.length===0?P(y(`profilePage.modelAccounts.empty`)):e.links.map(t=>Qt(e,t))}
    ${e.accounts.filter(e=>!e.selected).map(t=>$t(e,t))}
    ${e.hasMore?j({title:y(`profilePage.modelAccounts.savedAccounts`),control:m`<button
              type="button"
              class="btn btn--sm profile-auth-accounts-more"
              ?disabled=${e.busy}
              @click=${e.onLoadMore}
            >
              ${y(`profilePage.modelAccounts.loadMore`)}
            </button>`}):``}
    ${en(e)} ${e.showManualLink?tn(e):``}
    ${e.notice?m`<div class="settings-row model-accounts-notice" role="status">
            <span class="settings-row__desc">${e.notice}</span>
          </div>`:``}
    ${e.error?m`<div class="settings-row model-accounts-error" role="alert">
            <span class="settings-row__desc">${e.error}</span>
          </div>`:``}
    ${e.inventoryError?m`<div class="settings-row model-accounts-error" role="alert">
            ${y(`profilePage.modelAccounts.inventoryFailed`)} ${e.inventoryError}
          </div>`:``}
  `}function rn(e,t){let n=m`
    ${j({title:y(`profilePage.modelAccounts.gateway`),stackedOnNarrow:!0,control:M(Xt(e.gatewayUrl),{mono:!0})})}
    ${j({title:y(`profilePage.modelAccounts.person`),stackedOnNarrow:!0,control:M(e.personLabel??y(`profilePage.modelAccounts.noPerson`))})}
    ${j({title:y(`profilePage.modelAccounts.scope`),description:y(`profilePage.modelAccounts.personalDescription`),control:M(y(`profilePage.modelAccounts.personal`))})}
    ${t?nn(t):j({title:y(`profilePage.modelAccounts.signInUnavailable`),description:y(`profilePage.modelAccounts.unavailable.${e.unavailableReason}`),stacked:!0,control:m`
              <button type="button" class="btn btn--sm" @click=${e.onConnectionSettings}>
                ${y(`profilePage.modelAccounts.connectionSettings`)}
              </button>
              ${Fe(`https://docs.openclaw.ai/concepts/multi-user#per-person-model-accounts`)}
            `})}
  `;return N({title:y(`profilePage.modelAccounts.title`),description:y(`profilePage.modelAccounts.description`),actions:t?m`${t.signIn?``:m`<button
                    type="button"
                    class="btn btn--sm primary profile-auth-add-account"
                    ?disabled=${t.busy}
                    @click=${t.onAddAccount}
                  >
                    ${y(`profilePage.modelAccounts.addAccount`)}
                  </button>`}<button
              type="button"
              class="btn btn--sm profile-auth-accounts-refresh"
              ?disabled=${t.inventoryLoading}
              @click=${t.onRefresh}
            >
              ${y(`common.refresh`)}
            </button>`:void 0},n)}function an(){return(an=e((()=>{p(),Xe(),et(),F(),nt(),v(),Ve(),Ie()})))()}var Z;function on(){return(on=e((()=>{a(),p(),ae(),fe(),ge(),v(),Ve(),ie(),d(),an(),Ie(),Z=class extends re{constructor(...e){super(...e),this.identityId=null,this.profileId=null,this.personLabel=null,this.links=[],this.accounts=[],this.inventoryLoading=!1,this.inventoryError=null,this.action=null,this.error=null,this.notice=null,this.linkDraft=``,this.signIn=null,this.connectFlow=null,this.statusUnavailable=!1,this.target=null,this.generation=0,this.inventoryRequest=0,this.unsubscribe=null,this.pollTimer=null}connectedCallback(){super.connectedCallback(),this.unsubscribe=this.context.gateway.subscribe(e=>{this.applySnapshot(e),this.requestUpdate()}),this.applySnapshot(this.context.gateway.snapshot)}disconnectedCallback(){this.unsubscribe?.(),this.unsubscribe=null,this.generation+=1,this.target=null,this.stopPoll(),super.disconnectedCallback()}willUpdate(e){(e.has(`profileId`)||e.has(`identityId`))&&this.isConnected&&this.applySnapshot(this.context.gateway.snapshot)}applySnapshot(e){let t=e.phase===`connected`&&he(e.hello?.auth??null),n=t?e.client:null,r=e.selfUser?.id??null,i=n&&r===this.identityId?this.profileId:null,a=t&&me(e.hello?.auth??null);(this.target?.client!==n||this.target?.identityId!==r||this.target?.profileId!==i||this.target?.canAdmin!==a)&&(this.generation+=1,this.stopPoll(),this.target=n&&r&&i?{client:n,identityId:r,profileId:i,canAdmin:a}:null,this.links=[],this.accounts=[],this.nextCursor=void 0,this.inventoryRequest+=1,this.inventoryLoading=!1,this.inventoryError=null,this.action=null,this.error=null,this.notice=null,this.linkDraft=``,this.signIn=null,this.connectFlow=null,this.stepValue=void 0,this.statusUnavailable=!1,this.target&&this.loadAccounts())}applyLinks(e){this.links=e,this.accounts=this.accounts.map(t=>({...t,selected:e.some(e=>e.authProfileId===t.authProfileId)}))}async loadAccounts(e){let t=this.target;if(!t)return;let n=++this.inventoryRequest,r=()=>this.isConnected&&this.target===t&&n===this.inventoryRequest;this.inventoryLoading=!0,this.inventoryError=null;try{let n=await t.client.request(`users.listModelAccounts`,{profileId:t.profileId,...e?{cursor:e}:{}});r()&&(this.accounts=e?[...this.accounts,...n.accounts]:n.accounts,this.nextCursor=n.nextCursor,this.applyLinks(n.links))}catch(e){r()&&(this.inventoryError=f(e))}finally{r()&&(this.inventoryLoading=!1)}}isCurrent(e,t){return this.isConnected&&this.target===e&&this.generation===t}async runAction(e,t,n){let r=this.target;if(!r||this.action&&(e!==`cancel`||this.action!==`answer`))return;let i=++this.generation;this.stopPoll(),this.action=e,this.error=null,this.notice=null,this.statusUnavailable=!1;try{let e=await t(r);this.isCurrent(r,i)&&n(e)}catch(e){this.isCurrent(r,i)&&(this.error=f(e,y(`profilePage.modelAccounts.actionFailed`)))}finally{this.isCurrent(r,i)&&(this.action=null,this.schedulePoll(this.connectFlow?.step?2e3:0))}}updateLink(e){let t=`authProfileId`in e;t&&(!e.authProfileId||!this.target?.canAdmin)||this.runAction(`request`,n=>n.client.request(t?`users.linkAuthProfile`:`users.unlinkAuthProfile`,{profileId:n.profileId,...e}),e=>{this.applyLinks(e.links),this.linkDraft=``,this.notice=t?`selected`:`cleared`,this.loadAccounts()})}selectAccount(e){this.runAction(`request`,t=>t.client.request(`users.selectModelAccount`,{profileId:t.profileId,authProfileId:e}),e=>{this.applyLinks(e.links),this.notice=`selected`,this.loadAccounts()})}openSignIn(){this.signIn={providers:[],provider:``,method:``},this.runAction(`request`,e=>e.client.request(`users.authConnect.catalog`,{profileId:e.profileId}),e=>{this.signIn={providers:e.providers,provider:``,method:``}})}selectProvider(e){let t=this.signIn,n=t?.providers.find(t=>t.id===e);t&&n&&!this.action&&!this.connectFlow&&(this.signIn={...t,provider:e,method:n.methods.length===1?n.methods[0]?.id??``:``})}startConnect(){let e=this.signIn;e?.providers.some(t=>t.id===e.provider&&t.methods.some(t=>t.id===e.method))&&this.runAction(`request`,t=>t.client.request(`users.authConnect.start`,{profileId:t.profileId,provider:e.provider,method:e.method}),e=>{this.connectFlow=e,this.stepValue=void 0})}applyConnectStatus(e){if(e.status===`pending`){e.error&&(this.error=f(e.error)),this.connectFlow&&=(this.connectFlow.step?.id!==e.step?.id&&(this.stepValue=e.step?.sensitive?void 0:e.step?.initialValue),{...this.connectFlow,step:e.step});return}if(this.error=null,this.statusUnavailable=!1,this.stopPoll(),this.signIn=null,this.connectFlow=null,this.stepValue=void 0,e.status===`failed`){this.error=y(`profilePage.modelAccounts.connectErrors.${e.reason}`);return}e.status===`connected`&&(this.applyLinks(e.links),this.loadAccounts()),this.notice=e.status}connectStatus(e){let t=this.connectFlow;t&&this.runAction(e===`status`?`request`:e,n=>n.client.request(`users.authConnect.${e}`,{profileId:n.profileId,connectId:t.connectId}),e=>this.applyConnectStatus(e))}answerStep(e,t){let n=this.connectFlow,r=n?.step;!n||!r||r.id!==e||r.type===`progress`||(r.sensitive&&(this.stepValue=void 0),this.runAction(`answer`,e=>e.client.request(`users.authConnect.answer`,{profileId:e.profileId,connectId:n.connectId,stepId:r.id,...t===void 0?{}:{value:t}}),e=>this.applyConnectStatus(e)))}stopPoll(){this.pollTimer!==null&&(clearTimeout(this.pollTimer),this.pollTimer=null)}schedulePoll(e=2e3){this.stopPoll();let t=this.connectFlow;if(!t||!this.target||this.action)return;let n=Math.max(0,Math.min(e,t.expiresAtMs-Date.now()));this.pollTimer=setTimeout(()=>{this.pollTimer=null,this.pollStatus()},n)}async pollStatus(){let e=this.target,t=this.connectFlow,n=this.generation;if(!(!e||!t||this.action))try{let r=await e.client.request(`users.authConnect.status`,{profileId:e.profileId,connectId:t.connectId});if(!this.isCurrent(e,n)||this.connectFlow?.connectId!==t.connectId)return;this.applyConnectStatus(r),this.connectFlow&&(Date.now()>=t.expiresAtMs?(this.statusUnavailable=!0,this.error=y(`profilePage.modelAccounts.statusTimedOut`)):this.schedulePoll())}catch(t){this.isCurrent(e,n)&&(this.statusUnavailable=!0,this.error=f(t,y(`profilePage.modelAccounts.statusFailed`)))}}render(){let e=this.context.gateway.snapshot;if(e.phase!==`connected`||!e.client)return g;let t=e.selfUser?.id===this.identityId?e.selfUser:null;return rn({gatewayUrl:(this.target?.client??e.client).gatewayUrl,personLabel:t?this.personLabel||t.name||t.email||y(`profilePage.modelAccounts.currentPerson`):null,unavailableReason:t?he(e.hello?.auth??null)?`profile`:`write`:`identity`,onConnectionSettings:()=>this.context.navigate(`connection`)},this.target?{links:this.links,accounts:this.accounts,hasMore:!!this.nextCursor,inventoryLoading:this.inventoryLoading,inventoryError:this.inventoryError,showManualLink:this.target.canAdmin,busy:this.inventoryLoading||this.action!==null,cancelBusy:this.action!==null&&this.action!==`answer`,error:this.error,notice:this.notice?y(`profilePage.modelAccounts.notices.${this.notice}`):null,statusUnavailable:this.statusUnavailable,linkDraft:this.linkDraft,signIn:this.signIn,connectFlow:this.connectFlow,stepValue:this.stepValue,onLinkDraftInput:e=>{this.linkDraft=e},onLink:()=>this.updateLink({authProfileId:this.linkDraft.trim()}),onUnlink:e=>this.updateLink({provider:e}),onSelectAccount:e=>this.selectAccount(e),onLoadMore:()=>void this.loadAccounts(this.nextCursor),onRefresh:()=>void this.loadAccounts(),onAddAccount:()=>this.openSignIn(),onProviderChange:e=>this.selectProvider(e),onMethodChange:e=>{this.signIn&&!this.action&&!this.connectFlow&&(this.signIn={...this.signIn,method:e})},onCloseSignIn:()=>{!this.action&&!this.connectFlow&&(this.signIn=null,this.error=null)},onConnectStart:()=>this.startConnect(),onStepValueChange:(e,t)=>{this.connectFlow?.step?.id===e&&(this.stepValue=t)},onStepAnswer:(e,t)=>this.answerStep(e,t),onConnectCancel:()=>this.connectStatus(`cancel`),onConnectCheck:()=>this.connectStatus(`status`)}:null)}},t([n({context:pe,subscribe:!1})],Z.prototype,`context`,void 0),t([_({attribute:!1})],Z.prototype,`identityId`,void 0),t([_({attribute:!1})],Z.prototype,`profileId`,void 0),t([_({attribute:!1})],Z.prototype,`personLabel`,void 0),t([h()],Z.prototype,`links`,void 0),t([h()],Z.prototype,`accounts`,void 0),t([h()],Z.prototype,`nextCursor`,void 0),t([h()],Z.prototype,`inventoryLoading`,void 0),t([h()],Z.prototype,`inventoryError`,void 0),t([h()],Z.prototype,`action`,void 0),t([h()],Z.prototype,`error`,void 0),t([h()],Z.prototype,`notice`,void 0),t([h()],Z.prototype,`linkDraft`,void 0),t([h()],Z.prototype,`signIn`,void 0),t([h()],Z.prototype,`connectFlow`,void 0),t([h()],Z.prototype,`stepValue`,void 0),t([h()],Z.prototype,`statusUnavailable`,void 0),customElements.get(`openclaw-model-accounts`)||customElements.define(`openclaw-model-accounts`,Z)})))()}function sn(e,t){return{id:e.id,name:e.displayName??void 0,email:e.emails[0],avatarUrl:t??void 0,watchedSessions:[]}}function cn(e){let t=e.profile.displayName??``,n=e.displayName.trim()!==t,r=e.profile.emails.join(`, `),i=e.profile.githubIdentity,a=e.profile.id===o;return m`<div id=${L.identity}>
    ${N({title:y(`profilePage.identity.title`),description:y(`profilePage.identity.description`)},m`
        ${j({title:y(`profilePage.identity.avatar`),description:y(`profilePage.identity.avatarDescription`),control:m`
            <span class="identity-avatar-control">
              <openclaw-viewer-avatar
                .user=${sn(e.profile,e.avatarUrl)}
                variant="profile"
              ></openclaw-viewer-avatar>
              <button
                type="button"
                class="btn btn--sm"
                ?disabled=${e.busy!==null}
                @click=${e=>{let t=e.currentTarget,n=t instanceof HTMLButtonElement?t.nextElementSibling:null;n instanceof HTMLInputElement&&n.click()}}
              >
                ${e.busy===`avatar`?y(`profilePage.identity.processingAvatar`):y(`profilePage.identity.chooseAvatar`)}
              </button>
              <input
                type="file"
                accept="image/png,image/jpeg,image/webp"
                hidden
                ?disabled=${e.busy!==null}
                @change=${t=>{let n=t.currentTarget,r=n.files?.[0];n.value=``,r&&e.onAvatarSelect(r)}}
              />
            </span>
          `})}
        ${j({title:y(`profilePage.identity.displayName`),description:y(`profilePage.identity.displayNameDescription`),control:m`
            <form
              class="identity-name-control"
              @submit=${t=>{t.preventDefault(),e.onSaveDisplayName()}}
            >
              <input
                class="settings-input"
                type="text"
                maxlength="256"
                aria-label=${y(`profilePage.identity.displayName`)}
                .value=${e.displayName}
                ?disabled=${e.busy!==null}
                @input=${t=>e.onDisplayNameInput(t.currentTarget.value)}
              />
              <button
                type="submit"
                class="btn btn--sm"
                ?disabled=${e.busy!==null||!n}
              >
                ${e.busy===`display-name`?y(`common.saving`):y(`common.save`)}
              </button>
            </form>
          `})}
        ${a?g:j({title:y(`profilePage.identity.linkedEmails`),description:y(`profilePage.identity.linkedEmailsDescription`),control:r?M(r):g})}
        ${j({title:y(`profilePage.identity.githubAccount`),description:y(a?`profilePage.identity.ownerGithubDescription`:i?`profilePage.identity.githubAccountDescription`:`profilePage.identity.githubUnavailableDescription`),control:i?m`
                <a
                  class="settings-account"
                  href=${i.profileUrl}
                  target=${Re}
                  rel=${Ye()}
                >
                  <img class="settings-account__avatar" src=${i.avatarUrl} alt="" />
                  <span class="settings-row__value settings-row__value--mono"
                    >@${i.login}</span
                  >
                </a>
                ${I({kind:`ok`,label:y(`profilePage.identity.githubVerified`)})}
              `:I({kind:`muted`,label:y(`profilePage.identity.githubUnavailable`)})})}
        ${Ue({title:y(`profilePage.identity.gitCoauthor`),description:y(a?`profilePage.identity.ownerGitCoauthorDescription`:i?`profilePage.identity.gitCoauthorDescription`:`profilePage.identity.gitCoauthorUnavailable`),checked:!!(i&&e.gitCoauthorEnabled),disabled:e.busy!==null||!i,onChange:e.onGitCoauthorChange})}
        ${e.error?m`<div class="settings-row identity-error" role="alert">
                <span class="settings-row__desc">${e.error}</span>
              </div>`:g}
      `)}
  </div>`}function ln(){return(ln=e((()=>{p(),s(),F(),v(),Je(),Le(),rt()})))()}function un(e,t,n,r=``,a){let o=a??globalThis.location?.href;if(!o)return null;try{let a=new URL(o),s=new URL(e,a);if(s.protocol===`ws:`?s.protocol=`http:`:s.protocol===`wss:`&&(s.protocol=`https:`),![`http:`,`https:`].includes(s.protocol))return null;s.username=``,s.password=``;let c=s.origin===a.origin?i(r):``;return new URL(ve(t,n,c),s.origin).href}catch{return null}}function dn(){return(dn=e((()=>{r(),ye()})))()}function fn(e,t){if(e.user)return m`<openclaw-viewer-avatar
      .user=${{...e.user,name:t,watchedSessions:[]}}
      variant="profile"
    ></openclaw-viewer-avatar>`;let n=ee(e.row,e.identity),r=te(e.identity?.avatar)??te(e.row.identity?.emoji)??te(e.row.identity?.avatar),i=n?.startsWith(`/`)?e.resolveImageUrl(n):n;return n&&n!==e.failedAvatarUrl&&i?m`<img
      class="profile-hero__avatar-image"
      src=${i}
      alt=${t}
      @error=${()=>e.onAvatarError(n)}
    />`:r?m`<span class="profile-hero__avatar-text">${r}</span>`:m`<span class="profile-hero__avatar-mascot" aria-hidden="true">${be.lobster}</span>`}function pn(e){let t=e.user?e.user.name?.trim()||e.user.email||y(`nav.owner`):e.identity?.name?.trim()||e.row.identity?.name?.trim()||e.row.name?.trim()||e.row.id,n=e.user?e.user.email:`@${e.row.id}`;return Ke(m`
    <section class="profile-hero">
      <div class="profile-hero__avatar">${fn(e,t)}</div>
      <div class="profile-hero__name">${t}</div>
      <div class="profile-hero__handle">
        ${n?m`<span class="profile-hero__email">${n}</span>`:g}
        <span class="profile-hero__badge">OpenClaw</span>
      </div>
    </section>
  `)}function mn(){return(mn=e((()=>{p(),xe(),F(),v(),c(),Je()})))()}function Q(e){return f(e,y(`profilePage.identity.profileUnavailable`))}var hn,$;function gn(){return(gn=e((()=>{a(),p(),ae(),It(),ce(),fe(),ge(),F(),at(),v(),Ve(),ie(),Qe(),d(),rt(),Lt(),Jt(),on(),ln(),dn(),mn(),Ie(),hn=`https://docs.openclaw.ai/concepts/user-model`,$=class extends u{constructor(...e){super(...e),this.selfUser=null,this.ownProfile=null,this.displayName=``,this.gitCoauthorEnabled=!0,this.identityLoading=!1,this.identityBusy=null,this.identityError=null,this.failedHeroAvatarUrl=null,this.client=null,this.connected=!1,this.canWrite=!1,this.heroAvatarLoader=new Ze(this),this.identityRequestId=0,this.subscriptions=[]}connectedCallback(){super.connectedCallback(),this.subscriptions=[this.context.gateway.subscribe(e=>this.applyGatewaySnapshot(e)),this.context.agents.subscribe(()=>this.requestUpdate()),this.context.agentIdentity.subscribe(()=>this.requestUpdate())],this.applyGatewaySnapshot(this.context.gateway.snapshot)}disconnectedCallback(){for(let e of this.subscriptions)e();this.subscriptions=[],this.identityRequestId+=1,this.client=null,this.connected=!1,this.canWrite=!1,super.disconnectedCallback()}applyGatewaySnapshot(e){let t=e.client!==this.client,n=e.phase===`connected`,r=n&&he(e.hello?.auth??null),i=r!==this.canWrite,a=n!==this.connected,o=n?oe({snapshotUser:e.selfUser}):null,s=o?.id!==this.selfUser?.id,c=t||a||s||i;this.client=e.client,this.connected=n,this.canWrite=r,this.selfUser=o,this.requestUpdate(),c&&(this.identityRequestId+=1,this.ownProfile=null,this.displayName=``,this.gitCoauthorEnabled=!0,this.identityLoading=!1,this.identityBusy=null,this.identityError=null),!(!n||!e.client)&&(o&&r&&c&&this.loadIdentity(),this.context.agents.ensureList().then(e=>{e&&this.context.agentIdentity.ensure([e.defaultId])}))}async loadIdentity(){let e=this.client;if(!e||!this.connected||!this.canWrite||this.identityLoading)return;let t=++this.identityRequestId,n=this.ownProfile,r=this.displayName,i=n!==null&&r.trim()!==(n.displayName??``);this.identityLoading=!0,this.identityError=null;try{let n=await e.request(`users.self`,{});if(t!==this.identityRequestId)return;let a=n.profile;if(this.ownProfile=a,this.displayName=i?r:a.displayName??``,this.gitCoauthorEnabled=!0,a.githubIdentity){let n=await e.request(`users.prefs.get`,{keys:[R]});if(t!==this.identityRequestId)return;this.gitCoauthorEnabled=n.status===`ok`&&Tt(n.entries[`git.coauthor.enabled`])}}catch(e){t===this.identityRequestId&&(this.identityError=Q(e))}finally{t===this.identityRequestId&&(this.identityLoading=!1)}}applyOwnProfile(e){this.ownProfile=e,this.displayName=e.displayName??``}async saveDisplayName(){let e=this.client,t=this.ownProfile;if(!e||!t||!this.canWrite||this.identityBusy||this.identityLoading)return;this.identityBusy=`display-name`,this.identityError=null;let n=this.identityRequestId,r=!1;try{let i=this.displayName.trim()||null,a=await e.request(`users.setDisplayName`,{profileId:t.id,displayName:i});if(e!==this.client||n!==this.identityRequestId)return;this.applyOwnProfile(a.profile),this.context.gateway.updateSelfUser?.({name:a.profile.displayName??void 0}),r=!0}catch(t){e===this.client&&n===this.identityRequestId&&(this.identityError=Q(t))}finally{n===this.identityRequestId&&this.identityBusy===`display-name`&&(this.identityBusy=null)}r&&e===this.client&&n===this.identityRequestId&&this.loadIdentity()}async saveAvatar(e){let t=this.client,n=this.ownProfile;if(!t||!n||!this.canWrite||this.identityBusy||this.identityLoading)return;this.identityBusy=`avatar`,this.identityError=null;let r=this.identityRequestId,i=this.displayName,a=i.trim()!==(n.displayName??``),o=this.selfUser?.id===n.id?this.selfUser.avatarUrl:void 0,s=!1;try{let c=await Ut(e);if(t!==this.client||r!==this.identityRequestId)return;let l=await t.request(`users.setAvatar`,{profileId:n.id,mime:c.mime,avatarBase64:c.avatarBase64});if(t!==this.client||r!==this.identityRequestId)return;this.ownProfile=l.profile,this.displayName=a?i:l.profile.displayName??``;let u=un(this.context.gateway.connection.gatewayUrl,l.profile.id,l.avatarRevision,this.context.resourceBasePath),ee=this.selfUser?.id===l.profile.id&&this.selfUser.avatarUrl!==o;u&&!ee&&this.context.gateway.updateSelfUser?.({avatarUrl:u}),s=!0}catch(e){t===this.client&&r===this.identityRequestId&&(this.identityError=e instanceof X?y(e.code===`too-large`?`profilePage.identity.avatarErrors.tooLarge`:e.code===`source-too-large`?`profilePage.identity.avatarErrors.sourceTooLarge`:`profilePage.identity.avatarErrors.invalid`):Q(e))}finally{r===this.identityRequestId&&this.identityBusy===`avatar`&&(this.identityBusy=null)}s&&t===this.client&&r===this.identityRequestId&&this.loadIdentity()}async saveGitCoauthorPreference(e){let t=this.client,n=this.ownProfile;if(!t||!n?.githubIdentity||!this.canWrite||this.identityBusy||this.identityLoading)return;this.identityBusy=`git-coauthor`,this.identityError=null;let r=this.identityRequestId;try{let n=await t.request(`users.prefs.set`,{entries:{[R]:e}});if(t!==this.client||r!==this.identityRequestId)return;if(n.status!==`ok`)throw Error(y(`profilePage.identity.profileUnavailable`));this.gitCoauthorEnabled=e}catch(e){t===this.client&&r===this.identityRequestId&&(this.identityError=Q(e))}finally{r===this.identityRequestId&&this.identityBusy===`git-coauthor`&&(this.identityBusy=null)}}renderIdentity(){if(!this.selfUser)return m`<div id=${L.identity}>
        ${N({title:y(`profilePage.identity.title`)},P(y(`profilePage.identity.unidentified`)))}
      </div>`;if(!this.canWrite)return m`<div id=${L.identity}>
        ${N({title:y(`profilePage.identity.title`)},P(y(`profilePage.identity.writeRequired`)))}
      </div>`;if(!this.ownProfile)return m`<div id=${L.identity}>
        ${N({title:y(`profilePage.identity.title`)},this.identityLoading?Ge({label:y(`profilePage.identity.loading`),rows:2}):P(this.identityError??y(`profilePage.identity.profileUnavailable`)))}
      </div>`;let e=this.selfUser?.id===this.ownProfile.id&&this.selfUser.avatarUrl?this.selfUser.avatarUrl:un(this.context.gateway.connection.gatewayUrl,this.ownProfile.id,this.ownProfile.updatedAt,this.context.resourceBasePath);return cn({profile:this.ownProfile,avatarUrl:e,displayName:this.displayName,gitCoauthorEnabled:this.gitCoauthorEnabled,busy:this.identityLoading?`loading`:this.identityBusy,error:this.identityError,onDisplayNameInput:e=>{this.displayName=e},onSaveDisplayName:()=>void this.saveDisplayName(),onAvatarSelect:e=>void this.saveAvatar(e),onGitCoauthorChange:e=>void this.saveGitCoauthorPreference(e)})}renderModelAccounts(){return m`<openclaw-model-accounts
      .identityId=${this.selfUser?.id??null}
      .profileId=${this.ownProfile?.id??null}
      .personLabel=${this.ownProfile?this.ownProfile.displayName?.trim()||this.ownProfile.emails[0]||y(`profilePage.modelAccounts.currentPerson`):null}
    ></openclaw-model-accounts>`}refreshManually(){this.selfUser&&this.canWrite&&!this.identityBusy&&!this.identityLoading&&this.loadIdentity()}renderHero(){let e=this.context.agents.state.agentsList,t=e?.defaultId??`main`;return pn({row:e?.agents.find(e=>e.id===t)??{id:t},user:this.selfUser,identity:this.context.agentIdentity.get(t),resolveImageUrl:e=>this.heroAvatarLoader.resolve(e),failedAvatarUrl:this.failedHeroAvatarUrl,onAvatarError:e=>{this.failedHeroAvatarUrl=e}})}renderBody(){return!this.connected||!this.client?Be(Ke(P(y(`profilePage.offline`)))):Be(m`
      ${this.renderHero()} ${this.renderIdentity()} ${this.renderModelAccounts()}
      <openclaw-github-connections></openclaw-github-connections>
      ${Ke(ze({title:y(`profilePage.usageStatistics`),description:y(`profilePage.usageStatisticsDescription`),onClick:()=>this.context.navigate(`usage`)}))}
    `)}render(){return this.heroAvatarLoader.withActiveRoutes(()=>this.renderContent())}renderContent(){return m`
      <section class="content-header">
        <div>
          <div class="page-title">${_e(`profile`)}</div>
          <div class="page-subtitle">
            ${se(`profile`)} ${Fe(hn)}
          </div>
        </div>
        ${this.selfUser?m`<button
                class="btn profile-refresh"
                ?disabled=${this.identityLoading||this.identityBusy!==null}
                @click=${()=>this.refreshManually()}
              >
                ${this.identityLoading?y(`common.refreshing`):y(`common.refresh`)}
              </button>`:g}
      </section>
      ${it(this.renderBody())}
    `}},t([n({context:pe,subscribe:!1})],$.prototype,`context`,void 0),t([h()],$.prototype,`selfUser`,void 0),t([h()],$.prototype,`ownProfile`,void 0),t([h()],$.prototype,`displayName`,void 0),t([h()],$.prototype,`gitCoauthorEnabled`,void 0),t([h()],$.prototype,`identityLoading`,void 0),t([h()],$.prototype,`identityBusy`,void 0),t([h()],$.prototype,`identityError`,void 0),t([h()],$.prototype,`failedHeroAvatarUrl`,void 0),customElements.get(`openclaw-profile-page`)||customElements.define(`openclaw-profile-page`,$)})))()}gn();
//# sourceMappingURL=profile-page-DpWovJwW.js.map