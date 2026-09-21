import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,L as n,R as r,at as i}from"./control-ui-foundation-DMb6IeIq.js";import{Gc as a,Gn as o,Kn as s,Ys as c,ic as l,qc as u}from"./control-ui-core-DzidtL-P.js";import{$ as d,K as f,X as p,q as m,st as h}from"./lit-runtime-vxhGQLC6.js";import{h as g,m as _}from"./control-ui-core-CaKBexnk.js";import{Bt as v,Gt as y}from"./control-ui-core-uEI6aN5p.js";import{B as b,L as x,R as S,c as C,d as w,z as T}from"./control-ui-boot-chat-pu3gR1ly.js";function E(e,t){let n=e?.props?.sessionKey,r=typeof n==`string`?n.trim():``;return r?{sessionKey:r,agentId:l(r)?.agentId??t.agentId}:t}var D;function O(){return(O=e((()=>{r(),f(),d(),g(),S(),C(),v(),u(),s(),T(),c(),D=class extends a{constructor(){super(),this.session={sessionKey:``},this.active=!0,this.progressCard=new x(this,{gateway:()=>this.active&&E(this.widget,this.session).sessionKey?this.context?.gateway:void 0,target:()=>E(this.widget,this.session)}),new o(this).watch(()=>this.active&&E(this.widget,this.session).sessionKey?this.context?.sessions:void 0,(e,t)=>e.subscribe(t))}render(){let e=this.progressCard.error,t=this.progressCard.card,n=e?p`<div
          class=${t?`callout info`:`board-widget__plugin-loading`}
          data-test-id="session-progress-error"
          role="alert"
        >
          <span
            >${y(e===`access-denied`?`sessionProgressCard.widgetAccessDenied`:`sessionProgressCard.widgetUnavailable`)}</span
          >
          ${e===`unavailable`?p`<button class="btn btn--sm" type="button" @click=${this.progressCard.retry}>
                  ${y(`common.retry`)}
                </button>`:null}
        </div>`:m;if(e&&!t)return n;if(this.progressCard.loading)return p`<p class="board-widget__plugin-loading">
        ${y(`sessionProgressCard.widgetLoading`)}
      </p>`;if(t===null)return p`<p class="board-widget__plugin-loading">
        ${y(`sessionProgressCard.widgetEmpty`)}
      </p>`;let r=b(this.context?.gateway.snapshot??{},E(this.widget,this.session)),a=this.context?.sessions?.state.result?.sessions.find(e=>e.key===r.sessionKey&&(e.agentId??l(e.key)?.agentId)===r.agentId);return p`${n}${w(t,`board`,void 0,a?.status,a?.startedAt,a?.endedAt,i(a??{}))}`}},t([n({context:_,subscribe:!0})],D.prototype,`context`,void 0),t([h({attribute:!1})],D.prototype,`widget`,void 0),t([h({attribute:!1})],D.prototype,`session`,void 0),t([h({attribute:!1})],D.prototype,`active`,void 0),customElements.get(`openclaw-session-progress-widget`)||customElements.define(`openclaw-session-progress-widget`,D)})))()}O();
//# sourceMappingURL=session-progress-B3v-XMIM.js.map