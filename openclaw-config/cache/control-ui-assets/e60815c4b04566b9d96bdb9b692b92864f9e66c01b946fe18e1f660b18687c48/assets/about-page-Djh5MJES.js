import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{An as t,Fr as n,L as r,R as i,cr as ee}from"./control-ui-foundation-DMb6IeIq.js";import{Gc as te,Gn as a,Kn as o,fn as s,on as c,pn as l,qc as u,tn as d}from"./control-ui-core-DzidtL-P.js";import{$ as f,K as p,X as m,at as h,q as g}from"./lit-runtime-vxhGQLC6.js";import{Tn as ne,h as re,m as ie,zn as ae}from"./control-ui-core-CaKBexnk.js";import{Bt as oe,Ft as _,Gt as v,It as y,Nt as b,Ut as x,ft as S,ht as C}from"./control-ui-core-uEI6aN5p.js";import{C as w,E as T,Ft as E,Ht as D,Jr as O,Kr as k,Lt as A,Nt as j,S as M,T as N,b as P,qr as F,w as I,wt as se}from"./control-ui-boot-shared-Cyt1Zyts.js";import{Xo as L,Zo as R}from"./control-ui-boot-shared-CH-OC11d.js";import{n as z,t as B}from"./settings-workspace-IBRfeTG9.js";import{n as V,t as H}from"./brand-icons-BBThEpqq.js";function U(e,t){if(!e)return null;let n=new Date(e);return Number.isNaN(n.getTime())?null:new Intl.DateTimeFormat(t,{dateStyle:`medium`,timeZone:`UTC`}).format(n)}function W(e){return v(e===`copying`?`aboutPage.copyingCommit`:e===`copied`?`aboutPage.copiedCommit`:e===`error`?`aboutPage.copyCommitFailed`:`aboutPage.copyCommit`)}function G(e){return e===`copied`?v(`aboutPage.copiedCommit`):e===`error`?v(`aboutPage.copyCommitFailed`):``}function K(){return m`<span class="muted">${v(`aboutPage.unavailable`)}</span>`}function ce(e){if(!e)return g;let t=Date.parse(e);if(!Number.isFinite(t))return g;let n=new Intl.DateTimeFormat(x.getLocale(),{dateStyle:`medium`,timeStyle:`short`}).format(new Date(t));return m`
    <time class="about-commit__age" dir="auto" datetime=${e} title=${n}
      >${d(t,{fallback:``})}</time
    >
  `}function le(e){let t=e.buildInfo.commit;if(!t)return K();let n=W(e.copyState);return m`
    <span class="about-commit">
      <code dir="ltr" title=${t}>${t.slice(0,q)}</code>
      ${ce(e.buildInfo.commitAt)}
      <openclaw-tooltip .content=${n}>
        <button
          type="button"
          class="about-commit__copy"
          aria-label=${n}
          aria-busy=${e.copyState===`copying`?`true`:g}
          ?disabled=${e.copyState===`copying`}
          @click=${e.onCopyCommit}
        >
          <span aria-hidden="true">${e.copyState===`copied`?_.check:_.copy}</span>
        </button>
      </openclaw-tooltip>
      <span class="sr-only" role="status" aria-live="polite">${G(e.copyState)}</span>
    </span>
  `}function ue(e){let t=N.find(e=>e.id===`crimson`)??ee(N[0],`about lobster palette`),n=P(t);return m`
    <section class="about-hero">
      <button
        type="button"
        class="about-hero__clawd ${e.clawdWaving?`about-hero__clawd--wave`:``}"
        style=${w(n)}
        aria-label=${v(`aboutPage.waveHello`)}
        @click=${e.onPokeClawd}
      >
        ${I(n)}
      </button>
      <h2 class="about-hero__name">${v(`aboutPage.productName`)}</h2>
      <p class="about-hero__tagline">${v(`aboutPage.tagline`)}</p>
      ${e.buildInfo.version?m`<code class="about-hero__version" dir="ltr">v${e.buildInfo.version}</code>`:g}
      <nav class="about-hero__links" aria-label=${v(`aboutPage.linksLabel`)}>
        ${J.map(e=>m`
            <a
              class="about-hero__link"
              href=${e.href}
              target=${k}
              rel=${F()}
            >
              <span class="about-hero__link-icon" aria-hidden="true">${e.icon}</span>
              <span>${e.label()}</span>
            </a>
          `)}
      </nav>
    </section>
  `}function de(e){let t=U(e.buildInfo.builtAt,x.getLocale()),n=m`
    <dl
      class="settings-kv about-build-grid"
      role="group"
      aria-label=${v(`aboutPage.artifactDetails`)}
    >
      <dt>${v(`aboutPage.version`)}</dt>
      <dd>
        ${e.buildInfo.version?m`<code dir="ltr" title=${e.buildInfo.version}
                >${e.buildInfo.version}</code
              >`:K()}
      </dd>
      <dt>${v(`aboutPage.commit`)}</dt>
      <dd>${le(e)}</dd>
      ${e.buildInfo.branch?m`
              <dt>${v(`aboutPage.branch`)}</dt>
              <dd>
                <code dir="ltr" title=${e.buildInfo.branch}
                  >${e.buildInfo.branch}${e.buildInfo.dirty===!0?`*`:``}</code
                >
              </dd>
            `:g}
      <dt>${v(`aboutPage.built`)}</dt>
      <dd>
        ${t&&e.buildInfo.builtAt?m`<time
                dir="auto"
                datetime=${e.buildInfo.builtAt}
                title=${e.buildInfo.builtAt}
                >${t}</time
              >`:K()}
      </dd>
    </dl>
  `;return j([ue(e),A({title:v(`aboutPage.artifactTitle`),description:v(`aboutPage.artifactSubtitle`)},n),A({},E({title:v(`aboutPage.gatewayVersion`),description:v(`aboutPage.gatewayVersionHint`),control:e.gatewayVersion?D(m`<code dir="ltr" title=${e.gatewayVersion}>${e.gatewayVersion}</code>`,{mono:!0}):D(v(`aboutPage.unavailable`))})),m`<p class="about-footer">${v(`aboutPage.license`)}</p>`])}var q,J;function Y(){return(Y=e((()=>{t(),p(),y(),M(),T(),se(),b(),oe(),O(),c(),R(),V(),q=12,J=[{href:`https://openclaw.ai`,icon:_.globe,label:()=>v(`aboutPage.linkWebsite`)},{href:`https://docs.openclaw.ai`,icon:_.book,label:()=>v(`aboutPage.linkDocs`)},{href:`https://github.com/openclaw/openclaw`,icon:H.github,label:()=>v(`aboutPage.linkGitHub`)},{href:L,icon:H.discord,label:()=>v(`aboutPage.linkDiscord`)},{href:`https://x.com/openclaw`,icon:H.x,label:()=>v(`aboutPage.linkX`)},{href:`https://docs.openclaw.ai/releases`,icon:_.scrollText,label:()=>v(`aboutPage.linkChangelog`)}]})))()}var X,Z,Q;function $(){return($=e((()=>{i(),p(),f(),ne(),re(),C(),B(),l(),u(),o(),Y(),X=1800,Z=1400,Q=class extends te{constructor(...e){super(...e),this.copyState=`idle`,this.clawdWaving=!1,this.copyResetTimer=null,this.waveResetTimer=null,this.subscriptions=new a(this).watch(()=>this.context?.gateway,(e,t)=>e.subscribe(t))}disconnectedCallback(){this.subscriptions.clear(),this.copyResetTimer!==null&&(globalThis.clearTimeout(this.copyResetTimer),this.copyResetTimer=null),this.waveResetTimer!==null&&(globalThis.clearTimeout(this.waveResetTimer),this.waveResetTimer=null),super.disconnectedCallback()}pokeClawd(){this.clawdWaving||(this.clawdWaving=!0,this.waveResetTimer=globalThis.setTimeout(()=>{this.waveResetTimer=null,this.clawdWaving=!1},Z))}async copyCommit(){let e=S.commit;if(!e||this.copyState===`copying`)return;this.copyState=`copying`;let t=await s(e);this.isConnected&&(this.copyState=t?`copied`:`error`,this.copyResetTimer!==null&&globalThis.clearTimeout(this.copyResetTimer),this.copyResetTimer=globalThis.setTimeout(()=>{this.copyResetTimer=null,this.copyState=`idle`},X))}render(){let e=this.context.gateway.snapshot,t=e.phase===`connected`&&e.hello?.server?.version?.trim()||null,n=de({buildInfo:S,gatewayVersion:t,copyState:this.copyState,onCopyCommit:()=>void this.copyCommit(),clawdWaving:this.clawdWaving,onPokeClawd:()=>this.pokeClawd()});return m`
      <section class="content-header">
        <div>
          <div class="page-title">${ae(`about`)}</div>
        </div>
      </section>
      ${z(n)}
    `}},n([r({context:ie,subscribe:!0})],Q.prototype,`context`,void 0),n([h()],Q.prototype,`copyState`,void 0),n([h()],Q.prototype,`clawdWaving`,void 0),customElements.get(`openclaw-about-page`)||customElements.define(`openclaw-about-page`,Q)})))()}$();
//# sourceMappingURL=about-page-Djh5MJES.js.map