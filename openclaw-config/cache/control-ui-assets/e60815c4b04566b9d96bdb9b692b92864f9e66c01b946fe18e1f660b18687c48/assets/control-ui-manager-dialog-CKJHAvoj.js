import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,L as n,R as r}from"./control-ui-foundation-DMb6IeIq.js";import{Gn as i,Kn as a,Wc as o,qc as s}from"./control-ui-core-DzidtL-P.js";import{$ as c,K as l,X as u,at as d,q as f,st as p}from"./lit-runtime-vxhGQLC6.js";import{h as m,m as h}from"./control-ui-core-CaKBexnk.js";import{Bt as g,Gt as _,kt as v}from"./control-ui-core-uEI6aN5p.js";import{n as y,t as b}from"./control-ui-disabled-lj4W_mAq.js";var x;function S(){return(S=e((()=>{r(),l(),c(),m(),g(),s(),a(),b(),v(),x=class extends o{constructor(){super(),this.open=!1,this.reloading=!1,this.reloadError=``,this.close=()=>this.dispatchEvent(new Event(`modal-cancel`,{bubbles:!0,composed:!0})),new i(this).watch(()=>this.runtime,(e,t)=>e.subscribe(t))}render(){let e=this.runtime;if(!this.open||!e)return f;let t=e.registrations(`replacements`),n=[...new Set(t.map(e=>e.value.surface))];return u`<openclaw-modal-dialog .label=${_(`pluginUi.customize`)}>
      <section class="card">
        <h2>${_(`pluginUi.customize`)}</h2>
        <p>${_(`pluginUi.selectionScope`)}</p>
        ${n.map(n=>u`<label class="field"
            ><span>${_(`pluginUi.surface.${n}`)}</span>
            <select
              @change=${t=>e.selectReplacement(n,t.target.value||null)}
            >
              <option value="" .selected=${!e.selectedReplacement(n)}>
                ${_(`pluginUi.builtin`)}
              </option>
              ${t.filter(e=>e.value.surface===n).map(t=>u`<option
                      value=${t.key}
                      .selected=${e.selectedReplacement(n)?.key===t.key}
                    >
                      ${t.value.label} (${t.pluginId})
                    </option>`)}
            </select></label
          >`)}
        ${e.errors.map(e=>{let t=y(this.context,e.pluginId,this.close);return t?u`<section role="status"><strong>${e.pluginId}</strong>${t}</section>`:u`<p role="alert"><strong>${e.pluginId}</strong>: ${e.message}</p>`})}
        ${this.reloadError?u`<p role="alert">${this.reloadError}</p>`:f}
        ${e.canReload?u`<button
                class="btn"
                ?disabled=${this.reloading}
                @click=${async()=>{this.reloading=!0,this.reloadError=``;try{await e.reload()}catch(e){this.reloadError=e instanceof Error?e.message:String(e)}finally{this.reloading=!1}}}
              >
                ${_(`pluginUi.reload`)}
              </button>`:f}
        <button class="btn" @click=${()=>void e.refresh()}>${_(`common.retry`)}</button>
        <button class="btn" @click=${this.close}>${_(`common.close`)}</button>
      </section>
    </openclaw-modal-dialog>`}},t([n({context:h,subscribe:!0})],x.prototype,`context`,void 0),t([p({attribute:!1})],x.prototype,`runtime`,void 0),t([p({type:Boolean})],x.prototype,`open`,void 0),t([d()],x.prototype,`reloading`,void 0),t([d()],x.prototype,`reloadError`,void 0),customElements.get(`openclaw-plugin-manager-dialog`)||customElements.define(`openclaw-plugin-manager-dialog`,x)})))()}S();
//# sourceMappingURL=control-ui-manager-dialog-CKJHAvoj.js.map