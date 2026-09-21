import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t}from"./control-ui-foundation-DMb6IeIq.js";import{Gc as n,qc as r}from"./control-ui-core-DzidtL-P.js";import{$ as i,K as a,X as o,q as s,st as c}from"./lit-runtime-vxhGQLC6.js";import{Bt as l,Gt as u}from"./control-ui-core-uEI6aN5p.js";import{n as d,t as f}from"./update-run-projection-CHt1Q2wx.js";import{n as p,t as m}from"./stream-auto-follow-controller-DQpG-yCd.js";var h,g,_;function v(){return(v=e((()=>{a(),i(),f(),l(),r(),p(),h={completed:`✓`,in_progress:`◌`,pending:`○`,failed:`×`,skipped:`−`},g={pass:`✓`,warn:`!`,fail:`×`,pending:`○`},_=class extends n{constructor(...e){super(...e),this.run=null,this.connected=!0,this.streamFollow=new m(this,{selector:`.update-run-view__details`,isEnabled:()=>!0,captureCurrent:()=>{let e=this.run?.runId;return()=>this.isConnected&&this.run?.runId===e}})}updated(e){if(super.updated(e),e.has(`run`)){let t=e.get(`run`);this.streamFollow.schedule(t?.runId!==this.run?.runId)}}renderStep(e,t=e.step){let n=u(`updates.run.step.${e.status}`);return o`<li
      class="update-run-view__step update-run-view__step--${e.status}"
      data-step=${e.step}
      data-status=${e.status}
      aria-label=${`${t}: ${n}`}
    >
      <span class="update-run-view__mark" aria-hidden="true">${h[e.status]}</span>
      <span>${t}</span><span class="update-run-view__step-status">${n}</span>
    </li>`}render(){if(!this.run)return s;let e=d(this.run,this.connected);return o`<section
      class="update-run-view"
      data-run-id=${this.run.runId}
      data-run-status=${this.run.status}
      aria-label=${u(`updates.run.title`)}
    >
      <header class="update-run-view__heading">
        <h3 role="status" aria-live="polite">${e.headline}</h3>
        <span class="update-run-view__progress">${e.compactLabel}</span>
      </header>
      ${!this.connected&&!e.terminal?o`<p class="update-run-view__connection">${u(`updates.run.reconnecting`)}</p>`:s}
      <ol class="update-run-view__phases" aria-label=${u(`updates.run.phases`)}>
        ${e.phases.map(e=>this.renderStep(e,e.label))}
      </ol>
      ${e.steps.length?o`<details class="update-run-view__step-list">
              <summary>${u(`updates.run.steps`)}</summary>
              <ol>
                ${e.steps.map(e=>this.renderStep(e))}
              </ol>
            </details>`:s}
      <div class="update-run-view__detail-heading">
        ${u(`updates.run.details`)}${e.detailStep?o`<span>${e.detailStep}</span>`:s}
      </div>
      <pre
        class="update-run-view__details"
        tabindex="0"
        aria-label=${u(`updates.run.details`)}
        @scroll=${e=>this.streamFollow.handleScroll(e)}
      >
${e.details||u(`updates.run.noDetails`)}</pre>
      <ul class="update-run-view__oracles" aria-label=${u(`updates.run.verification`)}>
        ${e.oracles.map(e=>o`<li data-oracle=${e.name} data-state=${e.state} class="update-run-view__oracle update-run-view__oracle--${e.state}"><span aria-hidden="true">${g[e.state]}</span><span>${u(`updates.run.oracle.${e.name}`)}</span><small>${u(`updates.run.oracleState.${e.state}`)}</small></li>`)}
      </ul>
      ${e.terminal?o`<section
              class="update-run-view__report update-run-view__report--${this.run.status}"
              aria-label=${u(`updates.run.report`)}
            >
              <h4>${e.report.headline}</h4>
              ${e.report.lines.map(e=>o`<p>${e}</p>`)}
            </section>`:s}
    </section>`}},t([c({attribute:!1})],_.prototype,`run`,void 0),t([c({type:Boolean})],_.prototype,`connected`,void 0),customElements.get(`openclaw-update-run-view`)||customElements.define(`openclaw-update-run-view`,_)})))()}export{v as t};
//# sourceMappingURL=update-run-view-Dzp5fok2.js.map