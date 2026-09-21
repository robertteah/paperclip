import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Gt as t,Jo as n,Yo as r,on as i}from"./control-ui-core-DzidtL-P.js";import{K as a,X as o,q as s}from"./lit-runtime-vxhGQLC6.js";import{Bt as c,Gt as l}from"./control-ui-core-uEI6aN5p.js";function u(e){return e?.refreshing===!0}var d,f,p;function m(){return(m=e((()=>{d=5e3,f=3,p=class{constructor(e){this.options=e,this.timer=null,this.retryInFlight=null,this.pendingIncomplete=!1,this.attempts=0,this.cycle=0,this.exhaustionReported=!1}get exhausted(){return this.exhaustionReported}observe(e,t){return this.useConnection(t),e?this.retryInFlight===null?this.timer===null?this.armRetry():`retrying`:(this.pendingIncomplete=!0,`retrying`):(this.resetCycle(),`complete`)}armRetry(){if(this.attempts>=(this.options.limit??f))return this.reportExhaustion(),`exhausted`;this.attempts+=1,this.pendingIncomplete=!1;let e=this.cycle;return this.timer=window.setTimeout(()=>{this.timer=null;let t;try{t=this.options.retry()}catch{return}if(!t)return;let n=Promise.resolve(t).then(()=>void 0,()=>void 0);this.retryInFlight=n,n.finally(()=>{this.cycle===e&&this.retryInFlight===n&&(this.retryInFlight=null,this.pendingIncomplete&&(this.pendingIncomplete=!1,this.armRetry()))})},this.options.retryMs??d),`retrying`}startCycle(){this.resetCycle()}useConnection(e){e!==this.connection&&(this.connection=e,this.startCycle())}dispose(){this.resetCycle()}resetCycle(){this.cycle+=1,this.attempts=0,this.pendingIncomplete=!1,this.retryInFlight=null,this.exhaustionReported=!1,this.clear()}reportExhaustion(){this.exhaustionReported||(this.exhaustionReported=!0,this.options.onExhausted?.())}clear(){this.timer!==null&&(window.clearTimeout(this.timer),this.timer=null)}}})))()}function h(e){if(e.reason===`manual`)return`fetch`;if(!e.visible)return`defer`;if(e.interrupted)return`fetch`;let t=e.ttlMs??g;return e.lastLoadedAtMs!==null&&e.nowMs-e.lastLoadedAtMs<t?`skip`:`fetch`}var g,_;function v(){return(v=e((()=>{m(),g=3e5,_=class{constructor(e){this.options=e,this.lastLoadedAtMs=null,this.pendingAutomaticRefresh=!1,this.reloadPending=!1,this.incompleteUsageRetry=new p({retry:()=>this.requestAndWait(`poll`),onExhausted:()=>this.options.onIncompleteUsageExhausted?.()})}get incompleteUsageExhausted(){return this.incompleteUsageRetry.exhausted}setLastLoadedAtMs(e,t){return this.applyLoadState(e,t?.incomplete===!0,t?.connection)}markProviderUsage(e,t,n){let r=e?.ok===!1||e?.ok===!0&&u(e.value);return this.applyLoadState(t,r,n)}resetPayload(){this.applyLoadState(null,!1),this.reloadPending=!1}dispose(){this.incompleteUsageRetry.dispose()}applyLoadState(e,t,n){let r=this.incompleteUsageRetry.observe(t,n);return this.lastLoadedAtMs=r===`complete`?e:null,r}interrupt(){this.reloadPending||=this.options.isLoading()}markLoadDeferred(){this.reloadPending=!0}beginLoad(){this.reloadPending=!1}request(e){this.requestAndWait(e)}async requestAndWait(e){if(this.options.isLoading()&&e!==`manual`){this.pendingAutomaticRefresh=!0;return}this.pendingAutomaticRefresh=!1,h({reason:e,visible:document.visibilityState===`visible`&&document.hasFocus(),interrupted:this.reloadPending,nowMs:Date.now(),lastLoadedAtMs:this.lastLoadedAtMs})===`fetch`&&(e!==`poll`&&this.incompleteUsageRetry.startCycle(),await this.options.reload(e))}flushPending(){this.pendingAutomaticRefresh&&(this.pendingAutomaticRefresh=!1,this.request(`focus`))}}})))()}function y(e){let t=e.trim().toUpperCase();if([`USD`,`EUR`,`GBP`,`CNY`,`JPY`].includes(t)){let e=new Intl.NumberFormat(void 0,{style:`currency`,currency:t,maximumFractionDigits:t===`JPY`?0:2});return t=>e.format(t)}let n=new Intl.NumberFormat(void 0,{maximumFractionDigits:2});return t=>`${n.format(t)} ${e}`}function b(e){return!e||!Number.isFinite(e)?null:new Intl.DateTimeFormat(void 0,{month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`}).format(new Date(e))}function x(e){return(e.billing??[]).map(e=>{let t=e.label??(e.type===`balance`?l(`usage.providerUsage.balance`):e.type===`spend`?l(`usage.providerUsage.spend`):l(`usage.providerUsage.budget`)),n=y(e.unit),r=e.type===`budget`?`${n(e.used)} / ${n(e.limit)}`:n(e.amount);return o`
      <div class="provider-usage-billing-row">
        <span>${t}</span>
        <strong>${r}</strong>
      </div>
    `})}function S(e,t){let n=e.costHistory;if(!n)return 0;let r=new Date,i=Date.UTC(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()),a=i-(Math.max(1,t)-1)*864e5;return n.daily.reduce((e,t)=>{let n=Date.parse(`${t.date}T00:00:00Z`);return Number.isFinite(n)&&n>=a&&n<=i?e+t.amount:e},0)}function C(e){let n=e.costHistory;if(!n||n.daily.length===0)return s;let r=0,i=0,a={requests:0,input:0,cache:0,output:0};for(let e of n.daily)r=Math.max(r,e.amount),i+=e.amount,a.requests+=e.requests??0,a.input+=e.inputTokens,a.cache=a.cache+e.cacheReadTokens+e.cacheWriteTokens,a.output+=e.outputTokens;let c=t(a.input),u=t(a.cache),d=t(a.output),f=[[l(`usage.providerUsage.today`),S(e,1)],[l(`usage.providerUsage.last7Days`),S(e,7)],[l(`usage.providerUsage.lastDays`,{count:String(n.periodDays)}),i]],p=y(n.unit);return o`
    <div class="provider-cost-history">
      <div class="provider-cost-windows">
        ${f.map(([e,t])=>o`
            <div class="provider-cost-window">
              <span>${e}</span>
              <strong>${p(t)}</strong>
            </div>
          `)}
      </div>
      <div class="provider-cost-chart" aria-label=${l(`usage.providerUsage.dailyCost`)}>
        ${n.daily.map(e=>{let t=e.amount>0&&r>0?Math.max(3,e.amount/r*100):0,n=`${e.date}: ${p(e.amount)}`;return o`<span
            style=${`height: ${t}%`}
            title=${n}
            aria-label=${n}
          ></span>`})}
      </div>
      <div class="provider-cost-tokens">
        ${a.requests>0?o`<span
                >${l(`usage.providerUsage.requests`,{count:new Intl.NumberFormat().format(a.requests)})}</span
              >`:s}
        <span>${l(`usage.providerUsage.inputTokens`,{count:c})}</span>
        <span>${l(`usage.providerUsage.cacheTokens`,{count:u})}</span>
        <span>${l(`usage.providerUsage.outputTokens`,{count:d})}</span>
      </div>
      ${n.models.length>0||n.categories.length>0?o`
              <div class="provider-cost-breakdowns">
                ${n.models.length>0?o`
                        <div class="provider-cost-breakdown">
                          <span class="provider-cost-breakdown__title"
                            >${l(`usage.providerUsage.topModels`)}</span
                          >
                          ${n.models.slice(0,3).map(e=>o`
                                <div>
                                  <span>${e.name}</span
                                  ><strong>${t(e.totalTokens)}</strong>
                                </div>
                              `)}
                        </div>
                      `:s}
                ${n.categories.length>0?o`
                        <div class="provider-cost-breakdown">
                          <span class="provider-cost-breakdown__title"
                            >${l(`usage.providerUsage.costCategories`)}</span
                          >
                          ${n.categories.slice(0,3).map(e=>o`
                              <div>
                                <span>${e.name}</span>
                                <strong>${p(e.amount)}</strong>
                              </div>
                            `)}
                        </div>
                      `:s}
              </div>
            `:s}
    </div>
  `}function w(e){return e.error?o`<div class="provider-usage-error">${n(e.error)}</div>`:o`
    ${e.windows.length>0?o`
            <div class="provider-usage-windows">
              ${e.windows.map(e=>{let t=Math.max(0,Math.min(100,e.usedPercent)),n=Math.max(0,100-t),r=b(e.resetAt);return o`
                  <div class="provider-usage-window">
                    <div class="provider-usage-window__meta">
                      <span>${e.label}</span>
                      <strong
                        >${l(`usage.providerUsage.remaining`,{percent:n.toFixed(0)})}</strong
                      >
                    </div>
                    <div
                      class="provider-usage-progress"
                      role="progressbar"
                      aria-label=${e.label}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${t.toFixed(0)}
                    >
                      <span style=${`width: ${t}%`}></span>
                    </div>
                    ${r?o`<div class="provider-usage-reset">
                            ${l(`usage.providerUsage.resets`,{date:r})}
                          </div>`:s}
                  </div>
                `})}
            </div>
          `:s}
    ${e.billing&&e.billing.length>0?o`<div class="provider-usage-billing">${x(e)}</div>`:s}
    ${C(e)}
    ${e.summary?o`<div class="provider-usage-summary">${e.summary}</div>`:s}
  `}function T(){return(T=e((()=>{a(),c(),r(),i()})))()}function E(){return(E=e((()=>{})))()}export{v as a,_ as i,T as n,m as o,w as r,u as s,E as t};
//# sourceMappingURL=usage-Cyuow4XD.js.map