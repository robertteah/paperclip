import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t}from"./control-ui-foundation-DMb6IeIq.js";import{Gc as n,fn as r,pn as i,qc as a}from"./control-ui-core-DzidtL-P.js";import{$ as o,K as s,X as c,at as l,q as u}from"./lit-runtime-vxhGQLC6.js";import{Tn as d,zn as f}from"./control-ui-core-CaKBexnk.js";import{Bt as p,Ft as m,Gt as h,It as g,Ut as _}from"./control-ui-core-uEI6aN5p.js";import{C as v,D as y,E as b,M as x,N as S,O as C,S as w,T,b as E,k as D,w as O}from"./control-ui-boot-shared-Cyt1Zyts.js";import{n as k,t as A}from"./settings-workspace-IBRfeTG9.js";function j(e){return new Date(e).toLocaleDateString(_.getLocale())}function M(e,t={}){let n=T.filter(t=>e.has(t.id)).length,r=n===T.length,i=h(`quickSettings.appearance.lobsterdexSeen`,{seen:String(n),total:String(T.length)});return c`
    <section class="lobsterdex-page">
      <header
        class="lobsterdex-page__header ${r?`lobsterdex-page__header--complete`:``}"
      >
        <div>
          <h2>${h(`tabs.lobsterdex`)}</h2>
          <p>${h(`subtitles.lobsterdex`)}</p>
        </div>
        <span class="lobsterdex-page__count">${i}</span>
      </header>
      ${t.copyFeedback?.status===`error`?c`<div class="callout danger" role="alert">${h(`common.copyFailed`)}</div>`:u}
      <div class="lobsterdex-page__grid" aria-label=${i}>
        ${T.map(n=>{let r=E(n),i=e.get(n.id),a=i!==void 0,o=a?i.name??D(n.id):`?`,s=y[n.id],l=a&&i.firstSeenAt!==null?h(`quickSettings.appearance.lobsterdexCardFirstVisited`,{date:j(i.firstSeenAt)}):null,d=i?.shinySeenAt==null?null:h(`quickSettings.appearance.lobsterdexCardShinySeen`,{date:j(i.shinySeenAt)});return c`
            <article
              id="lobsterdex-${n.id}"
              class="lobsterdex-page__card ${a?``:`lobsterdex-page__card--unseen`}"
            >
              <button
                type="button"
                class="lobsterdex-page__copy-link"
                aria-label=${h(`quickSettings.appearance.lobsterdexCardCopyLink`)}
                @click=${()=>t.onCopyLink?.(n.id)}
              >
                <span aria-hidden="true"
                  >${t.copyFeedback?.status===`copied`&&t.copyFeedback.paletteId===n.id?m.check:m.link}</span
                >
              </button>
              <div
                class="lobsterdex-page__sprite lobster-pet lobster-pet--palette-${n.id} ${a?``:`lobsterdex__mini--unseen`}"
                style=${v(r)}
              >
                ${O(r,{standalone:!0})}
                ${i?.shinySeenAt==null?u:c`<span
                        class="lobsterdex__mini-star lobsterdex-page__star"
                        aria-hidden="true"
                        >✦</span
                      >`}
              </div>
              <h3>${o}</h3>
              <p class="lobsterdex-page__lore">${a?s.flavor:s.hint}</p>
              <div class="lobsterdex-page__dates">
                ${l?c`<p class="lobsterdex-page__date"><time>${l}</time></p>`:u}
                ${d?c`<p class="lobsterdex-page__date"><time>${d}</time></p>`:u}
              </div>
            </article>
          `})}
      </div>
    </section>
  `}function N(){return(N=e((()=>{s(),g(),w(),C(),b(),p()})))()}var P;function F(){return(F=e((()=>{s(),o(),d(),S(),b(),A(),i(),a(),N(),P=class extends n{constructor(...e){super(...e),this.copyFeedback=null,this.copyAttempt=0,this.copyResetTimer=null,this.copyLink=async e=>{let t=++this.copyAttempt;this.copyFeedback=null,this.copyResetTimer!==null&&(window.clearTimeout(this.copyResetTimer),this.copyResetTimer=null);let n=`${location.origin}${location.pathname}#lobsterdex-${e}`,i=await r(n,()=>this.isConnected&&t===this.copyAttempt);!this.isConnected||t!==this.copyAttempt||(this.copyFeedback={paletteId:e,status:i?`copied`:`error`},this.copyResetTimer=window.setTimeout(()=>{this.copyFeedback=null,this.copyResetTimer=null},1500))}}disconnectedCallback(){this.copyAttempt+=1,this.copyFeedback=null,this.copyResetTimer!==null&&(window.clearTimeout(this.copyResetTimer),this.copyResetTimer=null),super.disconnectedCallback()}firstUpdated(){if(!location.hash.startsWith(`#lobsterdex-`))return;let e=T.find(e=>e.id===location.hash.slice(12));if(!e)return;let t=this.querySelector(`#lobsterdex-${e.id}`);if(!t)return;let n=e=>{e.target===t&&e.animationName===`lobsterdex-card-highlight`&&(t.classList.remove(`lobsterdex-page__card--highlight`),t.removeEventListener(`animationend`,n))};t.addEventListener(`animationend`,n),t.classList.add(`lobsterdex-page__card--highlight`),requestAnimationFrame(()=>{requestAnimationFrame(()=>t.scrollIntoView({block:`center`}))})}render(){return c`
      <section class="content-header">
        <div class="page-title">${f(`lobsterdex`)}</div>
      </section>
      ${k(M(x(),{copyFeedback:this.copyFeedback,onCopyLink:e=>void this.copyLink(e)}))}
    `}},t([l()],P.prototype,`copyFeedback`,void 0),customElements.get(`openclaw-lobsterdex-page`)||customElements.define(`openclaw-lobsterdex-page`,P)})))()}F();
//# sourceMappingURL=lobsterdex-page-Bob6-Gp1.js.map