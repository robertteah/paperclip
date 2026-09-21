import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{K as t,X as n}from"./lit-runtime-vxhGQLC6.js";import{H as r,U as i}from"./control-ui-core-CaKBexnk.js";import{M as a,N as o}from"./control-ui-boot-shared-DW2inEkr.js";import{Bt as s,Gt as c,kt as l}from"./control-ui-core-uEI6aN5p.js";import{ht as u,mt as d}from"./control-ui-boot-shared-Cyt1Zyts.js";import{It as f}from"./control-ui-boot-chat-B1e-zt03.js";function p(e){return e?.split(`;`,1)[0]?.trim().toLowerCase()??``}function m(e){try{let t=new URL(e,window.location.href);return t.protocol===`ws:`?t.protocol=`http:`:t.protocol===`wss:`&&(t.protocol=`https:`),t.origin===window.location.origin}catch{return!1}}function h(e){if(!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?(?:px)?$/iu.test(e.trim()))return null;let t=Number.parseFloat(e);return Number.isFinite(t)?t:null}function g(e){if(!F.has(e.name)||/^on/iu.test(e.name)||e.namespaceURI&&e.name!==`xmlns`)return!1;let t=e.value.trim();switch(e.name){case`d`:return z.test(t);case`points`:case`viewBox`:return R.test(t);case`fill`:case`stroke`:return I.test(t);case`clip-rule`:case`fill-rule`:return/^(?:evenodd|nonzero)$/u.test(t);case`stroke-linecap`:return/^(?:butt|round|square)$/u.test(t);case`stroke-linejoin`:return/^(?:bevel|miter|round)$/u.test(t);case`transform`:return/^(?:\s*(?:matrix|rotate|scale|skewX|skewY|translate)\(\s*[0-9eE+.,\s-]+\)\s*)+$/u.test(t);case`cx`:case`cy`:case`height`:case`opacity`:case`r`:case`rx`:case`ry`:case`stroke-miterlimit`:case`stroke-width`:case`width`:case`x`:case`x1`:case`x2`:case`y`:case`y1`:case`y2`:return L.test(t);case`preserveAspectRatio`:return/^(?:none|x(?:Min|Mid|Max)Y(?:Min|Mid|Max)(?:\s+(?:meet|slice))?)$/u.test(t);case`xmlns`:return t===N;case`aria-hidden`:case`focusable`:return/^(?:false|true)$/u.test(t);case`role`:return t===`img`;case`aria-label`:return/^[^<>&]{0,256}$/u.test(t);default:return!1}}async function _(e){let t=new Image;return t.decoding=`async`,await new Promise((n,r)=>{let i=window.setTimeout(()=>{t.src=``,r(Error(`plugin SVG decode timed out`))},O);t.addEventListener(`load`,()=>{window.clearTimeout(i),n()},{once:!0}),t.addEventListener(`error`,()=>{window.clearTimeout(i),r(Error(`plugin SVG decode failed`))},{once:!0}),t.src=e}),t}function v(e){let t=e.getAttribute(`viewBox`);if(t){let e=t.trim().split(/[\s,]+/u).map(e=>Number(e)),n=e[2],r=e[3];return e.length!==4||e.some(e=>!Number.isFinite(e))||!n||!r||n<=0||r<=0||n>M||r>M?null:{width:n,height:r}}let n=h(e.getAttribute(`width`)??``),r=h(e.getAttribute(`height`)??``);return!n||!r||n<=0||r<=0||n>M||r>M?null:{width:n,height:r}}async function y(e){let t=await e.text();if(/<!doctype|<!entity/iu.test(t))return null;let n=new DOMParser().parseFromString(t,`image/svg+xml`);if(n.querySelector(`parsererror`))return null;let r=n.documentElement;if(r.namespaceURI!==N||r.localName!==`svg`)return null;let i=[r,...Array.from(r.querySelectorAll(`*`))];if(i.length>k)return null;let a=0;for(let e of i){if(e.namespaceURI!==N||!P.has(e.localName.toLowerCase()))return null;for(let t of Array.from(e.attributes)){if(!g(t))return null;(t.name===`d`||t.name===`points`)&&(a+=t.value.length)}}if(a>A||i.reduce((e,t)=>e+(t.getAttribute(`d`)?.match(/[a-z]/giu)?.length??0),0)>j)return null;let o=v(r);return o?{blob:new Blob([new XMLSerializer().serializeToString(r)],{type:`image/svg+xml`}),...o}:null}async function b(e){let t=await y(e);if(!t)return null;let n=Math.min(D/t.width,D/t.height),r=Math.max(1,Math.round(t.width*n)),i=Math.max(1,Math.round(t.height*n)),a=URL.createObjectURL(t.blob);try{let e=await _(a),t=document.createElement(`canvas`);t.width=D,t.height=D;let n=t.getContext(`2d`);return n?(n.drawImage(e,Math.round((D-r)/2),Math.round((D-i)/2),r,i),await new Promise(e=>{t.toBlob(e,`image/png`)})):null}finally{URL.revokeObjectURL(a)}}function x(e){e.bodyUsed||e.body?.cancel().catch(()=>void 0)}async function S(e,t){if(!m(e.gatewayUrl))return null;let n=i(e.auth),r=n.length>0?n:[``];for(let n of r){let r={Accept:`image/avif,image/webp,image/png,image/jpeg,image/gif,image/svg+xml`};n&&(r.Authorization=`Bearer ${n}`);let i=await fetch(t,{method:`GET`,headers:r,credentials:`same-origin`,signal:e.signal});if(!i.ok){if(x(i),i.status===401||i.status===403)continue;return null}let a=p(i.headers.get(`content-type`));if(!E.has(a))return x(i),null;let o=await i.blob(),s=a===`image/svg+xml`?await b(o):o;return s?URL.createObjectURL(s):null}return null}function C(e){return S(e,a(`pluginIcon`,e.resourceBasePath,e.pluginId))}function w(e){return S(e,a(`catalogIcon`,e.resourceBasePath,e.iconUrl))}function T(e){return S(e,a(`linkFavicon`,e.resourceBasePath,e.hostname))}var E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{o(),r(),E=new Set([`image/png`,`image/svg+xml`,`image/x-icon`]),D=256,O=5e3,k=4,A=8192,j=1024,M=4096,N=`http://www.w3.org/2000/svg`,P=new Set([`circle`,`desc`,`ellipse`,`g`,`line`,`path`,`polygon`,`polyline`,`rect`,`svg`,`title`]),F=new Set(`aria-hidden.aria-label.clip-rule.cx.cy.d.fill.fill-rule.focusable.height.opacity.points.preserveAspectRatio.r.role.rx.ry.stroke.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-width.transform.viewBox.width.x.x1.x2.xmlns.y.y1.y2`.split(`.`)),I=/^(?:none|currentColor|#[0-9a-f]{3,8})$/iu,L=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/iu,R=/^[0-9eE+.,\s-]+$/u,z=/^[0-9a-zA-Z+.,\s-]+$/u})))()}function V(e,t){if(!(e.currentTarget instanceof t))throw TypeError(`Skill library listener requires ${t.name}.`);return e.currentTarget}function H(){return(H=e((()=>{})))()}function U(e){let t=``;for(let n=0;n<e.length;n+=8192)t+=String.fromCharCode(...e.subarray(n,n+8192));return btoa(t)}function W(e){if(e.encoding!==`base64`)return e.content;try{let t=Uint8Array.from(atob(e.content),e=>e.charCodeAt(0)),n=new TextDecoder(`utf-8`,{fatal:!0,ignoreBOM:!0}).decode(t);return n.includes(`\0`)?null:n}catch{return null}}async function G(e){if(e.length>256||e.some(e=>e.size>1048576)||e.reduce((e,t)=>e+t.size,0)>8388608)throw Error(c(`skillLibrary.bundleLimit`));let t,n=[];for(let r of e){let e=r.webkitRelativePath?r.webkitRelativePath.split(`/`).slice(1).join(`/`):r.name,i=new Uint8Array(await r.arrayBuffer());e===`SKILL.md`?t=new TextDecoder(`utf-8`,{fatal:!0,ignoreBOM:!0}).decode(i):n.push({path:e,content:U(i),encoding:`base64`})}if(t===void 0)throw Error(c(`skillLibrary.missingSkill`));return{content:t,files:n}}async function K(e,t,n,r){if(t.size<1||t.size>8388608)throw Error(c(`skillLibrary.bundleLimit`));let i=new Uint8Array(await t.arrayBuffer()),a=Array.from(new Uint8Array(await crypto.subtle.digest(`SHA-256`,i)),e=>e.toString(16).padStart(2,`0`)).join(``),o=t=>{if(!r())throw Error(c(`skillLibrary.connectionChanged`));return e.request(`skills.library.upload`,t)},s=await o({action:`begin`,slug:n,sizeBytes:i.length,sha256:a});if(!(`uploadId`in s))throw Error(c(`skillLibrary.uploadFailed`));let l=s.offset;for(;l<i.length;){let e=Math.min(l+s.maxChunkBytes,i.length),t=await o({action:`chunk`,uploadId:s.uploadId,offset:l,data:U(i.subarray(l,e))});if(!(`offset`in t)||t.offset!==e)throw Error(c(`skillLibrary.uploadFailed`));l=t.offset}let u=await o({action:`commit`,uploadId:s.uploadId});if(!(`state`in u))throw Error(c(`skillLibrary.uploadFailed`));return u}function q(){return(q=e((()=>{f(),s(),d(),u()})))()}function J(e){return n`<details class="muted" style="overflow-wrap: anywhere; min-width: 0;">
    <summary>${c(`skillLibrary.technicalDetails`)}</summary>
    <dl>
      <dt>${c(`skillLibrary.skillId`)}</dt>
      <dd>${e.skillId}</dd>
      <dt>${c(`skillLibrary.revision`)}</dt>
      <dd>${e.revision}</dd>
      <dt>${c(`skillLibrary.command`)}</dt>
      <dd>${e.name}</dd>
    </dl>
  </details>`}function Y(e){let{read:t}=e,r=t.files.find(t=>t.path===e.file),i=e.file===`SKILL.md`?t.content:r?W(r):null;return n`<openclaw-modal-dialog
    label=${t.entry.slug}
    style="--openclaw-modal-width: 960px;"
    @modal-cancel=${e.onClose}
  >
    <div class="md-preview-dialog__panel">
      <div class="md-preview-dialog__header">
        <strong>${t.entry.slug}</strong
        ><button type="button" class="btn btn--sm" @click=${e.onClose}>
          ${c(`common.close`)}
        </button>
      </div>
      <div
        class="md-preview-dialog__body"
        style="display: grid; gap: var(--space-4); min-width: 0;"
      >
        <p>
          ${c(`skillLibrary.ownerRevision`,{owner:t.entry.ownerLabel,revision:t.entry.revision.slice(0,8)})}
        </p>
        <p class="muted">${c(`skillLibrary.session.readOnly`)}</p>
        <label class="field"
          ><span>${c(`skillLibrary.file`)}</span
          ><select
            class="settings-select"
            .value=${e.file}
            @change=${t=>e.onFile(V(t,HTMLSelectElement).value)}
          >
            <option value="SKILL.md" ?selected=${e.file===`SKILL.md`}>SKILL.md</option>
            ${t.files.map(t=>n`<option value=${t.path} ?selected=${e.file===t.path}>
                  ${t.path}
                </option>`)}
          </select></label
        >
        ${i===null?n`<p class="muted">${c(`skillLibrary.binaryRead`)}</p>`:n`<label class="field"
                ><span>${e.file}</span
                ><textarea
                  class="settings-input"
                  readonly
                  spellcheck="false"
                  rows="16"
                  style="font-family: var(--mono); min-width: 0; max-width: 100%; box-sizing: border-box; resize: vertical;"
                  .value=${i}
                ></textarea>
              </label>`}
        ${J(t.entry)}
      </div>
    </div>
  </openclaw-modal-dialog>`}function X(){return(X=e((()=>{t(),s(),q(),l()})))()}export{W as a,H as c,T as d,C as f,q as i,V as l,J as n,G as o,B as p,Y as r,K as s,X as t,w as u};
//# sourceMappingURL=control-ui-boot-chat-CDBbQQw1.js.map