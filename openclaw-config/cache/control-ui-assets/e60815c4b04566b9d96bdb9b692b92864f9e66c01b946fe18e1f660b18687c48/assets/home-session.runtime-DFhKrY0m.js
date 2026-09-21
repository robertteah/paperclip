import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,L as n,Nn as r,R as i}from"./control-ui-foundation-DMb6IeIq.js";import{Gc as a,qc as o}from"./control-ui-core-DzidtL-P.js";import{$ as s,C as c,K as l,X as u,at as d,q as f,st as p,w as m}from"./lit-runtime-vxhGQLC6.js";import{h,m as g}from"./control-ui-core-CaKBexnk.js";import{Bt as _,Ft as v,Gt as y,It as b}from"./control-ui-core-uEI6aN5p.js";import"./control-ui-boot-shared-CH-OC11d.js";import{F as x,I as S,r as C}from"./control-ui-boot-chat-BoyWVlmW.js";import{n as w}from"./control-ui-boot-chat-CKX96sa9.js";var T;function E(){return(E=e((()=>{i(),l(),s(),c(),h(),_(),o(),S(),C(),w(),b(),T=class extends a{constructor(...e){super(...e),this.sessionKey=``,this.agentId=``,this.workContext={page:`chat`},this.includeContext=!0,this.selection=``,this.selectionAvailable=!1,this.selectionScope=``,this.updateSelectionAvailability=()=>{let e=window.getSelection();this.selectionAvailable=!!(e&&!e.isCollapsed&&e.anchorNode&&!this.contains(e.anchorNode))},this.attachSelection=e=>{e.preventDefault();let t=window.getSelection();!t||t.isCollapsed||t.anchorNode&&this.contains(t.anchorNode)||(this.selection=r(t.toString(),640),this.includeContext=!0)}}connectedCallback(){super.connectedCallback(),document.addEventListener(`selectionchange`,this.updateSelectionAvailability),this.updateSelectionAvailability()}disconnectedCallback(){document.removeEventListener(`selectionchange`,this.updateSelectionAvailability),super.disconnectedCallback()}willUpdate(){let e=this.workContext,t=JSON.stringify([this.context.gateway.connection.gatewayUrl,e.page,e.sessionKey,e.sessionId,e.agentId,e.file]);this.selectionScope&&this.selectionScope!==t&&(this.selection=``),this.selectionScope=t}render(){let e={...this.workContext,selection:this.selection||void 0},t=x(e),n=JSON.stringify([this.context.gateway.connection.gatewayUrl,this.agentId,this.sessionKey]);return u`
      <div class="assistant-panel-context">
        ${this.includeContext?u`
                <details>
                  <summary>
                    ${y(`assistantPanel.context`,{context:e.title||e.page})}
                  </summary>
                  <pre>${t}</pre>
                </details>
                <button
                  type="button"
                  class="rail-header__action"
                  aria-label=${y(`assistantPanel.removeContext`)}
                  @click=${()=>{this.includeContext=!1}}
                >
                  ${v.x}
                </button>
              `:u`<button
                type="button"
                class="btn btn--sm"
                @click=${()=>{this.includeContext=!0}}
              >
                ${y(`assistantPanel.includeContext`)}
              </button>`}
        <button
          type="button"
          class="rail-header__action"
          aria-label=${y(`assistantPanel.attachSelection`)}
          ?disabled=${!this.selectionAvailable}
          title=${y(`assistantPanel.attachSelection`)}
          @mousedown=${this.attachSelection}
          @click=${e=>{e.detail===0&&this.attachSelection(e)}}
        >
          ${v.messageSquare}
        </button>
        ${this.selection?u`<button
                type="button"
                class="btn btn--sm"
                aria-label=${y(`assistantPanel.removeSelection`)}
                @click=${()=>{this.selection=``}}
              >
                ${y(`assistantPanel.selection`)} ${v.x}
              </button>`:f}
      </div>
      ${m(n,u`<openclaw-chat-pane
          .paneId=${`home-dock:${n}`}
          .presentationId=${`home-dock:${n}`}
          .sessionKey=${this.sessionKey}
          .agentId=${this.agentId}
          .inputRegion=${`dock`}
          .active=${!0}
          .compact=${!0}
          .narrow=${!0}
          .workContext=${this.includeContext?t:void 0}
        ></openclaw-chat-pane>`)}
    `}},t([n({context:g,subscribe:!0})],T.prototype,`context`,void 0),t([p({attribute:!1})],T.prototype,`sessionKey`,void 0),t([p({attribute:!1})],T.prototype,`agentId`,void 0),t([p({attribute:!1})],T.prototype,`workContext`,void 0),t([d()],T.prototype,`includeContext`,void 0),t([d()],T.prototype,`selection`,void 0),t([d()],T.prototype,`selectionAvailable`,void 0),customElements.define(`openclaw-home-session`,T)})))()}E();export{T as OpenClawHomeSession};
//# sourceMappingURL=home-session.runtime-DFhKrY0m.js.map