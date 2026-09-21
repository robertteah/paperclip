import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,L as n,R as r}from"./control-ui-foundation-DMb6IeIq.js";import{Ds as i,Es as a,Gc as o,Qt as s,Un as c,Wn as ee,on as l,qc as u,xr as d,yr as f}from"./control-ui-core-DzidtL-P.js";import{$ as te,K as p,X as m,at as h,q as g}from"./lit-runtime-vxhGQLC6.js";import{$ as _,Rn as v,Tn as y,X as b,Z as ne,ct as re,h as ie,m as ae,zn as oe}from"./control-ui-core-CaKBexnk.js";import{Bt as x,Gt as S}from"./control-ui-core-uEI6aN5p.js";import{Et as se,Ft as C,It as w,Lt as T,Nt as E,wt as D,zt as O}from"./control-ui-boot-shared-Cyt1Zyts.js";import{Qs as k,Zs as A,bs as j,ys as M}from"./control-ui-boot-shared-CH-OC11d.js";import{n as N,t as P}from"./en-settings-D6ws8ujh.js";import{a as F,n as I}from"./settings-targets-D_7u0c_C.js";import{n as L,t as R}from"./settings-workspace-IBRfeTG9.js";import{n as ce,r as z,t as B}from"./system-info-DnHf78J4.js";function V(e){return e>=.92?`critical`:e>=.75?`warn`:`ok`}function H(e,t){let n=Math.min(Math.max(t,0),1),r=Math.round(n*100);return m`
    <div
      class="config-host__meter"
      role="meter"
      aria-label=${S(`quickSettings.system.usage`,{label:e})}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow=${r}
    >
      <div
        class="config-host__meter-fill config-host__meter-fill--${V(n)}"
        style="--config-host-meter-fill: ${r}%"
      ></div>
    </div>
  `}function U(e){let t=e.path?`${e.label} ${e.path}`:e.label;return m`
    <div class="config-host__stat" title=${e.path??e.title??``}>
      <div class="config-host__stat-label">
        ${e.label}${e.path?m` <span class="config-host__stat-path">${e.path}</span>`:g}
      </div>
      <div class="config-host__stat-value">
        ${e.value}${e.unit?m` <span class="config-host__stat-unit">${e.unit}</span>`:g}
      </div>
      ${e.usedFraction==null?g:H(t,e.usedFraction)}
      ${e.detail?m`<div class="config-host__stat-detail">${e.detail}</div>`:g}
    </div>
  `}function W(e,t){if(!(e==null||t==null||e<=0))return(e-t)/e}function G(e){return`${Math.round(Math.min(Math.max(e,0),1)*100)}%`}function le(e){let t=e.loadAverage?.[0],n=e.loadAverage?S(`quickSettings.system.loadAverage`,{values:e.loadAverage.map(e=>e.toFixed(1)).join(` · `)}):void 0,r=[e.cpuModel,n].filter(Boolean).join(` · `)||void 0,i=S(e.cpuCount===1?`quickSettings.system.core`:`quickSettings.system.cores`,{count:String(e.cpuCount)}),o=t==null?{label:S(`quickSettings.system.cpu`),value:i,detail:e.cpuModel,title:r}:{label:S(`quickSettings.system.cpu`),value:t.toFixed(1),unit:S(`quickSettings.system.load`),detail:i,usedFraction:e.cpuCount>0?t/e.cpuCount:void 0,title:r},s=W(e.memoryTotalBytes,e.memoryFreeBytes),c=[o,{label:S(`quickSettings.system.memory`),value:s==null?`—`:G(s),unit:s==null?void 0:S(`quickSettings.system.used`),detail:S(`quickSettings.system.freeOf`,{free:a(e.memoryFreeBytes),total:a(e.memoryTotalBytes)}),usedFraction:s}];for(let t of e.disks??[]){let e=W(t.totalBytes,t.availableBytes);e!=null&&c.push({label:S(`quickSettings.system.disk`),value:G(e),unit:S(`quickSettings.system.used`),detail:S(`quickSettings.system.freeOf`,{free:a(t.availableBytes),total:a(t.totalBytes)}),usedFraction:e,path:t.path})}return c}function ue(){return[{label:S(`quickSettings.system.cpu`),value:`—`},{label:S(`quickSettings.system.memory`),value:`—`},{label:S(`quickSettings.system.disk`),value:`—`}]}function de(e){if(e.systemInfoUnavailable)return g;let t=e.systemInfo,n=t&&t.hostname!==t.machineName?t.hostname:void 0,r=t?.lanAddress?`${t.lanAddress}${t.port==null?``:`:${t.port}`}`:void 0,i=t?le(t):ue(),a={title:S(`quickSettings.system.gatewayHost`),actions:t?O({kind:`ok`,label:S(`quickSettings.system.up`,{duration:s(t.uptimeMs)})}):void 0};return m`
    <div id=${I.host}>
      ${T(a,m`
          <div class="config-host">
            <div class="config-host__identity">
              <div class="config-host__name" title=${n??``}>
                ${t?.machineName??`—`}
              </div>
              <div class="config-host__meta">
                ${t?`${t.osLabel} · ${t.arch}`:`—`}
              </div>
              <div class="config-host__meta">
                ${t?S(`quickSettings.system.runtime`,{version:t.nodeVersion,pid:String(t.pid)}):`—`}
              </div>
              ${r?m`<code class="config-host__address">${r}</code>`:g}
            </div>
            <div class="config-host__stats">${i.map(U)}</div>
          </div>
        `)}
    </div>
  `}function K(){return(K=e((()=>{p(),D(),x(),i(),l(),F()})))()}function fe(e){return e?`${(e/1e3).toFixed(e%1e3==0?0:1)}s`:null}function q(e,t){if(!e.connected)return S(`connection.access.descriptionOffline`);let n=[S(`connection.access.connectedTo`,{host:c(e.liveGatewayUrl)}),t?S(J[t]):null],r=fe(e.hello?.policy?.tickIntervalMs);return r&&n.push(S(`connection.access.tick`,{tick:r})),n.filter(Boolean).join(` · `)}function pe(e,t){let n=t===`password`?`connection.access.passwordHint`:t===`token`?`connection.access.tokenHint`:`connection.access.secretHint`;return C({title:S(`connection.access.secret`),description:S(n),control:w({ariaLabel:S(`connection.access.secret`),value:e.secret,placeholder:S(`connection.access.secretPlaceholder`),visible:e.showGatewaySecret,showLabel:S(`connection.access.showSecret`),hideLabel:S(`connection.access.hideSecret`),toggleLabel:S(`connection.access.toggleSecretVisibility`),onInput:e.onSecretChange,onToggle:e.onToggleGatewaySecretVisibility}),stackedOnNarrow:!0})}function me(e){let t=e.hello?.snapshot?.authMode,n=t===`trusted-proxy`,r=m`
    ${C({title:S(`connection.access.gatewayUrl`),description:S(`connection.access.gatewayUrlHint`),control:m`
        <input
          class="settings-input"
          aria-label=${S(`connection.access.gatewayUrl`)}
          inputmode="url"
          autocapitalize="none"
          autocorrect="off"
          autocomplete="off"
          spellcheck="false"
          .value=${e.settings.gatewayUrl}
          @input=${t=>{e.onConnectionChange({gatewayUrl:t.target.value})}}
          placeholder="wss://gateway.example:443"
        />
      `})}
    ${n?C({title:S(`connection.access.secret`),description:S(`connection.access.trustedProxy`),control:O({kind:`ok`,label:S(`connection.access.trustedProxyStatus`)})}):pe(e,t)}
    ${C({title:S(`connection.access.sessionKey`),description:S(`connection.access.sessionKeyHint`),control:m`
        <input
          class="settings-input"
          aria-label=${S(`connection.access.sessionKey`)}
          .value=${e.settings.sessionKey}
          @input=${t=>e.onSessionKeyChange(t.target.value)}
        />
      `})}
    ${!e.connected&&e.lastError?C({title:O({kind:`danger`,label:S(`connection.access.lastError`)}),description:e.lastError}):g}
    <div class="settings-row">
      <div class="settings-row__text">
        <span class="settings-row__desc">
          ${e.dirty?S(`connection.access.unsavedHint`):g}
        </span>
      </div>
      <div class="settings-row__control">
        <button class=${e.dirty?`btn primary`:`btn`} @click=${()=>e.onConnect()}>
          ${S(`common.connect`)}
        </button>
      </div>
    </div>
  `;return E([T({title:S(`connection.access.title`),description:q(e,t),actions:O({kind:e.connected?`ok`:`warn`,label:e.connected?S(`connection.access.status.connected`):S(`connection.access.status.offline`)})},r),de(e)])}var J;function Y(){return(Y=e((()=>{p(),D(),x(),P(),ee(),K(),N(),J={none:`connection.access.auth.none`,token:`connection.access.auth.token`,password:`connection.access.auth.password`,"trusted-proxy":`connection.access.auth.trustedProxy`}})))()}var X,Z,Q;function $(){return($=e((()=>{r(),p(),te(),y(),ie(),b(),D(),R(),f(),k(),u(),j(),B(),Y(),X=1e4,Z=`https://docs.openclaw.ai/gateway/remote`,Q=class extends o{constructor(...e){super(...e),this.settings=_(),this.password=``,this.gatewaySecretVisible=!1,this.systemInfo=null,this.systemInfoUnavailable=!1,this.sessionKeyDirty=!1,this.systemInfoLoading=!1,this.systemInfoPolling=new M(this,X,()=>{this.loadSystemInfo()},!1),this.gateway=new A(this,{getGateway:()=>this.context?.gateway,invalidateRequests:()=>{this.systemInfoLoading=!1},onSnapshot:e=>this.handleGatewaySnapshot(e)})}disconnectedCallback(){this.systemInfoPolling.stop(),this.resetSensitiveUi(),super.disconnectedCallback()}resetSensitiveUi(){this.gatewaySecretVisible=!1}handleGatewaySnapshot({snapshot:e,initial:t,sourceChanged:n,clientChanged:r}){t||n||r?(this.resetDraft(this.context.gateway),this.systemInfo=null,this.systemInfoUnavailable=!1):e.phase!==`connected`&&(this.resetSensitiveUi(),this.systemInfo=null),(t||n)&&this.systemInfoPolling.stop(),e.phase===`connected`&&e.hello&&(this.systemInfoUnavailable=!z(e.hello),this.systemInfoUnavailable&&(this.gateway.invalidate(),this.systemInfoLoading=!1,this.systemInfo=null)),this.syncSystemInfoPolling()}syncSystemInfoPolling(){let e=this.context.gateway.snapshot;if(!(this.isConnected&&!this.systemInfoUnavailable&&e.phase===`connected`&&z(e.hello)&&e.client!=null)){this.systemInfoPolling.stop();return}this.systemInfoPolling.start()&&this.loadSystemInfo()}async loadSystemInfo(){let e=this.gateway.gateway;if(!e||e!==this.context.gateway)return;let t=this.gateway.capture();if(!t||this.systemInfoUnavailable||this.systemInfoLoading)return;let n=()=>this.isConnected&&this.context.gateway===e&&this.gateway.isCurrent(t);this.systemInfoLoading=!0;try{let e=await t.client.request(`system.info`,{});if(!n())return;this.systemInfo=e}catch(e){if(!n())return;(d(e)||ce(e))&&(this.systemInfo=null,this.systemInfoUnavailable=!0,this.systemInfoPolling.stop())}finally{n()&&(this.systemInfoLoading=!1)}}resetDraft(e){let t=e.snapshot.sessionKey,{gatewayUrl:n,token:r,password:i}=e.connection;this.settings={..._(),gatewayUrl:n,token:r,sessionKey:t,lastActiveSessionKey:t},this.password=i,this.sessionKeyDirty=!1,this.resetSensitiveUi()}connect(){let e=this.sessionKeyDirty?{sessionKey:this.settings.sessionKey,lastActiveSessionKey:this.settings.sessionKey}:ne(this.settings.gatewayUrl);this.settings={...this.settings,...e},this.sessionKeyDirty=!1,this.context.gateway.connect({gatewayUrl:this.settings.gatewayUrl,token:this.settings.token,password:this.password,sessionKey:e.sessionKey})}updateConnection(e){if(e.gatewayUrl!==void 0){let t=re(this.settings.gatewayUrl,e.gatewayUrl,{token:this.settings.token,password:this.password});this.password=t.password,this.settings={...this.settings,...e,token:t.token};return}this.settings={...this.settings,...e}}render(){let e=this.context.gateway.snapshot,t=this.context.gateway.connection,n=this.sessionKeyDirty||this.settings.gatewayUrl!==t.gatewayUrl||this.settings.token!==t.token||this.password!==t.password,r=me({connected:e.phase===`connected`,hello:e.hello,settings:this.settings,liveGatewayUrl:t.gatewayUrl,secret:this.settings.token||this.password,lastError:e.lastError,systemInfo:this.systemInfo,systemInfoUnavailable:this.systemInfoUnavailable,dirty:n,showGatewaySecret:this.gatewaySecretVisible,onConnectionChange:e=>this.updateConnection(e),onSecretChange:e=>{this.password=``,this.updateConnection({token:e})},onSessionKeyChange:e=>{this.sessionKeyDirty=!0,this.settings={...this.settings,sessionKey:e,lastActiveSessionKey:e}},onToggleGatewaySecretVisibility:()=>{this.gatewaySecretVisible=!this.gatewaySecretVisible},onConnect:()=>this.connect()});return m`
      <section class="content-header">
        <div>
          <div class="page-title">${oe(`connection`)}</div>
          <div class="page-subtitle">
            ${v(`connection`)} ${se(Z)}
          </div>
        </div>
      </section>
      ${L(r)}
    `}},t([n({context:ae,subscribe:!0})],Q.prototype,`context`,void 0),t([h()],Q.prototype,`settings`,void 0),t([h()],Q.prototype,`password`,void 0),t([h()],Q.prototype,`gatewaySecretVisible`,void 0),t([h()],Q.prototype,`systemInfo`,void 0),t([h()],Q.prototype,`systemInfoUnavailable`,void 0),customElements.get(`openclaw-connection-page`)||customElements.define(`openclaw-connection-page`,Q)})))()}$();
//# sourceMappingURL=connection-page-C1476Z-u.js.map