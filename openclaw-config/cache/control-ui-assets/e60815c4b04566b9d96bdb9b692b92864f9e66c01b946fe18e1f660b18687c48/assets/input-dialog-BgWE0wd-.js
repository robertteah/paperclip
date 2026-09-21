import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Yo as t,qo as n}from"./control-ui-core-DzidtL-P.js";import{K as r,X as i,q as a}from"./lit-runtime-vxhGQLC6.js";import{Bt as o,Gt as s}from"./control-ui-core-uEI6aN5p.js";import{Ft as c,It as l}from"./control-ui-boot-chat-pu3gR1ly.js";function u(e){return l({signal:e.signal,value:null},t=>{let{host:r,finish:o,render:c}=t,l=!1,u=null,d=t=>e.requireValue===!0?t.trim():t,f=t=>{let n=d(t);return e.requireValue===!0&&n.length===0||e.requireChange===!0&&n===(e.defaultValue??``)},p=f(e.defaultValue??``),m=()=>r.querySelector(`input[name="value"]`),h=e=>{let t=f(e.target.value);t!==p&&(p=t,y())};async function g(r){if(r.preventDefault(),l)return;let i=m()?.value;if(i===void 0||f(i))return;let a=d(i);if(!e.submit){o(a);return}l=!0,u=null,y();let s;try{s=await e.submit(a)}catch(e){s=n(e)}if(!t.settled){if(l=!1,s===null){o(a);return}u=s,y(),m()?.focus()}}function _(e){if(l){e.preventDefault();return}o(null)}let v=e.label??e.title;function y(){c(()=>i`
          <openclaw-modal-dialog
            label=${e.title}
            description=${v}
            @modal-cancel=${_}
          >
            <form class="exec-approval-card" @submit=${g}>
              <div class="exec-approval-header">
                <div class="exec-approval-title">${e.title}</div>
              </div>
              <label class="field input-dialog__field">
                <span>${v}</span>
                <input
                  name="value"
                  type="text"
                  autocomplete="off"
                  spellcheck="false"
                  .value=${e.defaultValue??``}
                  ?disabled=${l}
                  aria-invalid=${u?`true`:a}
                  @input=${h}
                  autofocus
                />
              </label>
              ${u?i`<div class="exec-approval-error" role="alert">${u}</div>`:a}
              <div class="exec-approval-actions">
                <button type="submit" class="btn primary" ?disabled=${l||p}>
                  ${e.submitLabel??s(`common.save`)}
                </button>
                <button
                  type="button"
                  class="btn"
                  ?disabled=${l}
                  @click=${()=>o(null)}
                >
                  ${e.cancelLabel??s(`common.cancel`)}
                </button>
              </div>
            </form>
          </openclaw-modal-dialog>
        `)}y()})}function d(e){return f?Promise.resolve(null):(f=!0,u(e).finally(()=>{f=!1}))}var f;function p(){return(p=e((()=>{r(),o(),t(),c(),f=!1})))()}export{d as n,p as t};
//# sourceMappingURL=input-dialog-BgWE0wd-.js.map