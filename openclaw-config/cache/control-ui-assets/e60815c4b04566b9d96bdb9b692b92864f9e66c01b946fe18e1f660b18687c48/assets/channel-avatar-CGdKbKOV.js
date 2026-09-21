import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t}from"./control-ui-foundation-DMb6IeIq.js";import{Wc as n,qc as r}from"./control-ui-core-DzidtL-P.js";import{$ as i,K as a,X as o,at as s,q as c,st as l}from"./lit-runtime-vxhGQLC6.js";import{Lt as u,Rt as d}from"./control-ui-boot-chat-pu3gR1ly.js";var f;function p(){return(p=e((()=>{a(),i(),d(),r(),f=class extends n{constructor(...e){super(...e),this.routeUrl=null,this.authTokens=[],this.authReady=!1,this.fallback=c,this.undecodableRouteUrl=null,this.loader=new u(this,{cacheNotFound:!0})}render(){return this.loader.withActiveRoutes(()=>this.renderContent())}renderContent(){let e=this.routeUrl,t=e&&this.authReady&&this.undecodableRouteUrl!==e?this.loader.resolve(e,this.authTokens):null;return t?o`<img
      class="channel-avatar"
      src=${t}
      alt=""
      aria-hidden="true"
      decoding="async"
      @error=${()=>{this.undecodableRouteUrl=e}}
    />`:this.fallback}},t([l({attribute:!1})],f.prototype,`routeUrl`,void 0),t([l({attribute:!1})],f.prototype,`authTokens`,void 0),t([l({attribute:!1})],f.prototype,`authReady`,void 0),t([l({attribute:!1})],f.prototype,`fallback`,void 0),t([s()],f.prototype,`undecodableRouteUrl`,void 0),customElements.get(`openclaw-channel-avatar`)||customElements.define(`openclaw-channel-avatar`,f)})))()}p();
//# sourceMappingURL=channel-avatar-CGdKbKOV.js.map