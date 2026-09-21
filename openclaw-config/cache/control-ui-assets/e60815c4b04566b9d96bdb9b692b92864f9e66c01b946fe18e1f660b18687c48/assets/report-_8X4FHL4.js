import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t}from"./control-ui-foundation-DMb6IeIq.js";import{Gc as n,qc as r}from"./control-ui-core-DzidtL-P.js";import{$ as i,K as a,Q as o,X as s,q as c,st as l}from"./lit-runtime-vxhGQLC6.js";import{Bt as u,Gt as d}from"./control-ui-core-uEI6aN5p.js";import{a as f,b as p,c as m,d as h,l as g,m as _,t as v,w as y,y as b}from"./config-runtime-Cr2H22l0.js";import{o as x,r as S}from"./board-widget-cell-render-Citc6lM7.js";var C;function w(){return(w=e((()=>{C=class extends Error{constructor(e,t){super(t),this.name=`BoardValidationError`,this.code=e}}})))()}function T(e){if(new TextEncoder().encode(JSON.stringify(e)).byteLength>8192)throw new C(`invalid_operation`,`Report exceeds 8KB JSON budget`);let t=j.safeParse(e);if(!t.success){let e=t.error.issues[0];throw new C(`invalid_operation`,`Invalid report at ${e?.path.join(`.`)||`root`}: ${e?.message}`)}return t.data}var E,D,O,k,A,j;function M(){return(M=e((()=>{g(),w(),E=p().min(1).max(120).optional(),D=p().min(1).max(160),O=p().max(240).optional(),k=p().max(500),A=b({type:h(`table`),title:E,columns:f(D).min(1).max(8),rows:f(f(k).max(8)).max(40)}).refine(e=>e.rows.every(t=>t.length===e.columns.length),{message:`Every table row must match the columns`}),j=b({blocks:f(m(`type`,[b({type:h(`text`),title:E,text:p().min(1).max(4e3)}),b({type:h(`metrics`),items:f(b({label:D,value:p().min(1).max(80),detail:O})).min(1).max(8)}),A,b({type:h(`chart`),title:E,style:v([`bar`,`line`]).optional(),points:f(b({label:D,value:_().min(-(2**53-1)).max(2**53-1)})).min(1).max(40)}),b({type:h(`links`),title:E,items:f(b({label:D,url:y({protocol:/^https?$/,normalize:!0}).max(2048),detail:O})).min(1).max(20)})])).min(1).max(24)})})))()}function N(e){let t=e.points.map(e=>e.value),n=Math.min(0,...t),r=Math.max(0,...t)-n||1,i=e=>164-(e-n)/r*148,a=i(0),l=e.style===`line`,u=608/e.points.length,d=t.map((e,n)=>({x:l?t.length===1?320:16+n/(t.length-1)*608:16+(n+.5)*u,y:i(e)}));return s`<figure class="board-report__chart">
    ${e.title?s`<figcaption>${e.title}</figcaption>`:c}
    ${o`<svg viewBox="0 0 640 180" aria-hidden="true" focusable="false">
      <line class="board-report__axis" x1="16" x2="624" y1=${a} y2=${a}></line>
      ${l?o`<polyline class="board-report__line" points=${d.map(e=>`${e.x},${e.y}`).join(` `)}></polyline>
            ${d.map(e=>o`<circle class="board-report__point" cx=${e.x} cy=${e.y} r="3"></circle>`)}`:d.map(e=>o`<rect class="board-report__bar" x=${e.x-u*.35} y=${Math.min(e.y,a)} width=${u*.7} height=${Math.max(1,Math.abs(e.y-a))} rx="2"></rect>`)}
    </svg>`}
    <dl class="board-report__values">
      ${e.points.map(e=>s`<div>
            <dt>${e.label}</dt>
            <dd>${e.value}</dd>
          </div>`)}
    </dl>
  </figure>`}function P(e){switch(e.type){case`text`:return s`<section>
        ${e.title?s`<h3>${e.title}</h3>`:c}
        <p class="board-report__text">${e.text}</p>
      </section>`;case`metrics`:return s`<dl class="board-report__metrics">
        ${e.items.map(e=>s`<div>
              <dt>${e.label}</dt>
              <dd>${e.value}</dd>
              ${e.detail?s`<dd class="board-report__metric-detail">${e.detail}</dd>`:c}
            </div>`)}
      </dl>`;case`table`:return s`<div class="board-report__table">
        <table>
          ${e.title?s`<caption>
                  ${e.title}
                </caption>`:c}
          <thead>
            <tr>
              ${e.columns.map(e=>s`<th scope="col">${e}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${e.rows.map(e=>s`<tr>
                  ${e.map(e=>s`<td>${e}</td>`)}
                </tr>`)}
          </tbody>
        </table>
      </div>`;case`chart`:return N(e);case`links`:return s`<section>
        ${e.title?s`<h3>${e.title}</h3>`:c}
        <ul class="board-report__links">
          ${e.items.map(e=>s`<li>
              <a href=${e.url} target="_blank" rel="noopener noreferrer">${e.label}</a>
              ${e.detail?s`<span>${e.detail}</span>`:c}
            </li>`)}
        </ul>
      </section>`}return e}var F;function I(){return(I=e((()=>{a(),i(),M(),S(),u(),r(),F=class extends n{willUpdate(e){if(e.has(`widget`))try{this.content={report:T(this.widget?.props)}}catch(e){this.content={error:e}}}render(){let e=this.content;return e?`error`in e?x(e.error):s`<article
          class="board-report"
          aria-label=${this.widget?.title??d(`board.widget.kindReport`)}
        >
          ${e.report.blocks.map(P)}
        </article>`:c}},t([l({attribute:!1})],F.prototype,`widget`,void 0),customElements.get(`openclaw-report-widget`)||customElements.define(`openclaw-report-widget`,F)})))()}I();
//# sourceMappingURL=report-_8X4FHL4.js.map