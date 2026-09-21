import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{An as t,Fr as n,Gn as r,L as i,Nn as a,R as o,Vn as s,ba as c,cr as l}from"./control-ui-foundation-DMb6IeIq.js";import{Da as u,Ea as d,Gc as f,Gn as p,Gt as m,Kn as h,On as g,Xt as _,Yo as v,Zt as y,en as b,fa as x,on as S,qc as C,qo as w,rn as T,ua as E,vr as D,xr as O,yr as k}from"./control-ui-core-DzidtL-P.js";import{$ as A,K as j,L as M,Q as N,X as P,at as F,q as I,st as L,z as R}from"./lit-runtime-vxhGQLC6.js";import{Rn as z,Tn as B,h as ee,m as V,zn as te}from"./control-ui-core-CaKBexnk.js";import{Bt as H,Gt as U,Nt as W}from"./control-ui-core-uEI6aN5p.js";import{$r as ne,Cr as re,Lt as G,Nt as ie,Pt as ae,Qr as oe,Rt as se,Ss as ce,Ut as le,Xr as ue,Yr as de,Zr as fe,co as pe,ei as me,wr as he,wt as ge}from"./control-ui-boot-shared-Cyt1Zyts.js";import{Qs as _e,Zs as ve}from"./control-ui-boot-shared-CH-OC11d.js";import{n as ye,t as be}from"./settings-workspace-IBRfeTG9.js";import{n as xe,t as Se}from"./agent-scope-control-CqnA-t3U.js";import{a as Ce,i as we,o as Te,r as Ee}from"./usage-CE5ddYvY.js";import{a as De,i as Oe,n as ke,o as Ae,r as je,s as Me}from"./usage-Cyuow4XD.js";import{n as Ne,r as Pe,t as Fe}from"./request-usage-snapshot-DVWYt0Cn.js";function Ie(e,t){return[e,t].some(e=>e&&e.status!==`fresh`)}function Le(e,t,n){let r=O(t),i=oe(r?fe():e,t,n);return{clearData:r,status:r&&i.error?{...i,error:D(`usage details`)}:i}}function Re(){return(Re=e((()=>{ne(),k()})))()}function ze(e,t){let n=null,r=(t,r)=>{if(n===t){n=null;try{r()}catch{}finally{e.requestUpdate()}}};return{get pending(){return n!==null},cancel:()=>{let t=n;n=null,t?.abort(),e.requestUpdate()},async run(i){let a=n,o=new AbortController;n=o,a?.abort(),e.requestUpdate();let s;try{s=await t.task(i,{signal:o.signal})}catch(e){r(o,()=>t.onError(e));return}r(o,()=>t.onComplete(s))}}}function Be(e,t,n,r){let i=null,a=fe(),o=null,s=0,c=ze(e,{task:async([e,t],{signal:r})=>({sessionKey:t,data:await n(e,t,r)}),onComplete:e=>{o=null,i=e,a=ue()},onError:e=>{o=null;let n=Le(a,e,t.snapshot);n.clearData&&(i=null),a=n.status}}),l=()=>{o&&t.snapshot&&!x(t.snapshot)&&(a=oe(a,void 0,t.snapshot)),o=null,s+=1,c.cancel()};return{get data(){return i?.data??null},get status(){return a},get loading(){return o!==null},async recover(e,n=!1){let r=s;await o,r===s&&t.snapshot&&x(t.snapshot)&&(a.awaitingGateway||a.error!==null||n&&!a.hasLoaded)&&this.load(e)},load(e){let n=t.client;if(!n||!t.connected)return Promise.resolve();let u=!!e&&r?.(e)!==!1;return(i?.sessionKey!==e||!u)&&(i=null,a=fe()),u?(a=de(a),s+=1,o=c.run([n,e])):(l(),Promise.resolve())},cancel:l,clear(){i=null,a=fe(),l()}}}var Ve;function He(){return(He=e((()=>{ne(),E(),Re(),Ve=class{constructor(e,t,n,r){this.timeSeries=Be(e,t,Te),this.sessionLogs=Be(e,t,async(e,t)=>{let n=await Ce(e,t);return Array.isArray(n.logs)?n.logs:null}),this.contextWeight=Be(e,t,(e,t,i)=>{let a=n(),o=r().find(e=>e.key===t)?.agentId??a.agentId;return we(e,{...a,agentId:o},t,i)},e=>r().some(t=>t.key===e&&t.hasContextWeight))}load(e){this.timeSeries.load(e),this.sessionLogs.load(e),this.contextWeight.load(e)}cancel(){this.timeSeries.cancel(),this.sessionLogs.cancel(),this.contextWeight.cancel()}clear(){this.timeSeries.clear(),this.sessionLogs.clear(),this.contextWeight.clear()}}})))()}function Ue(){let e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function We(e){return w(e,`request failed`)}function Ge(e,t,n,r,i){if(r&&e.length>0)for(let r of e.slice(-1)){let i=n.indexOf(r),a=n.indexOf(t);if(i!==-1&&a!==-1){let[t,r]=i<a?[i,a]:[a,i];return[...new Set([...e,...n.slice(t,r+1)])]}}return e.includes(t)?e.filter(e=>e!==t):i?[...e,t]:[t]}function Ke(e,t,n,r){if(r&&e.length>0){let r=n.indexOf(e.at(-1)??``),i=n.indexOf(t);if(r!==-1&&i!==-1){let[t,a]=r<i?[r,i]:[i,r];return[...new Set([...e,...n.slice(t,a+1)])]}}return e.length===1&&e[0]===t?[]:[t]}function qe(e){let t=e.split(`
`),n=new Map,r=[];for(let e of t){let t=/^\[Tool:\s*([^\]]+)\]/.exec(e.trim())?.[1];if(t){n.set(t,(n.get(t)??0)+1);continue}e.trim().startsWith(`[Tool Result]`)||r.push(e)}let i=Array.from(n.entries()).toSorted((e,t)=>t[1]-e[1]),a=i.reduce((e,[,t])=>e+t,0);return{tools:i,summary:i.length>0?`Tools: ${i.map(([e,t])=>`${e}×${t}`).join(`, `)} (${a} calls)`:``,cleanContent:r.join(`
`).trim()}}var Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut;function dt(){return(dt=e((()=>{v(),Je=e=>c(e),Ye=e=>{let t=e.replace(/[.+^${}()|[\]\\]/g,`\\$&`).replace(/\*/g,`.*`).replace(/\?/g,`.`);return RegExp(`^${t}$`,`i`)},Xe=e=>{let t=c(e);if(!t)return null;t.startsWith(`$`)&&(t=t.slice(1));let n=1;if(t.endsWith(`k`)?(n=1e3,t=t.slice(0,-1)):t.endsWith(`m`)&&(n=1e6,t=t.slice(0,-1)),!/^\d+(?:\.\d+)?$/.test(t))return null;let r=Number(t)*n;return!Number.isFinite(r)||!Number.isSafeInteger(Math.round(r))?null:r},Ze=e=>(e.match(/(?:[^\s"]|"[^"]*")+/g)??[]).map(e=>{let t=e.replace(/^"(.*)"$/u,`$1`),n=t.indexOf(`:`);return n>0?{key:t.slice(0,n),value:t.slice(n+1).replace(/^"(.*)"$/u,`$1`),raw:t}:{value:t,raw:e}}),Qe=e=>[e.label,e.key,e.sessionId].filter(e=>!!e).map(e=>c(e)),$e=e=>{let t=new Set;e.modelProvider&&t.add(c(e.modelProvider)),e.providerOverride&&t.add(c(e.providerOverride)),e.origin?.provider&&t.add(c(e.origin.provider));for(let n of e.usage?.modelUsage??[])n.provider&&t.add(c(n.provider));return Array.from(t)},et=e=>{let t=new Set;e.model&&t.add(c(e.model));for(let n of e.usage?.modelUsage??[])n.model&&t.add(c(n.model));return Array.from(t)},tt=e=>(e.usage?.toolUsage?.tools??[]).map(e=>c(e.name)),nt={tools:e=>(e.usage?.toolUsage?.totalCalls??0)>0,errors:e=>(e.usage?.messageCounts?.errors??0)>0,context:e=>e.hasContextWeight===!0,usage:e=>!!e.usage,model:e=>et(e).length>0,provider:e=>$e(e).length>0},rt=(e,t)=>e>=t,it=(e,t)=>e<=t,at={mintokens:[e=>e.usage?.totalTokens??0,rt],maxtokens:[e=>e.usage?.totalTokens??0,it],mincost:[e=>e.usage?.totalCost??0,rt],maxcost:[e=>e.usage?.totalCost??0,it],minmessages:[e=>e.usage?.messageCounts?.total??0,rt],maxmessages:[e=>e.usage?.messageCounts?.total??0,it]},ot=new Set([`agent`,`channel`,`chat`,`provider`,`model`,`tool`,`label`,`key`,`session`,`id`,`has`,...Object.keys(at)]),st=new Set([`channel`,`provider`,`model`,`tool`]),ct=()=>!0,lt=(e,t,n)=>{if(e.key&&!ot.has(t))return n.push(`Unknown filter: ${e.key}`),ct;e.key&&e.value===``&&n.push(`Missing value for ${e.key}`);let r=Je(e.value??``),i=Object.hasOwn(at,t)?at[t]:void 0,a=i&&e.value?Xe(e.value):null;if(i&&e.value&&a===null&&n.push(`Invalid number for ${e.key}`),t===`has`){let t=Object.hasOwn(nt,r)?nt[r]:void 0;return e.value&&!t&&n.push(`Unknown has:${e.value}`),t??ct}if(!r)return ct;if(!e.key)return e=>Qe(e).some(e=>e.includes(r));switch(t){case`agent`:return e=>c(e.agentId).includes(r);case`channel`:return e=>c(e.channel).includes(r);case`chat`:return e=>c(e.chatType).includes(r);case`provider`:return e=>$e(e).some(e=>e.includes(r));case`model`:return e=>et(e).some(e=>e.includes(r));case`tool`:return e=>tt(e).some(e=>e.includes(r));case`label`:return e=>c(e.label).includes(r);case`key`:case`session`:case`id`:if(r.includes(`*`)||r.includes(`?`)){let e;return t=>(e??=Ye(r),e.test(t.key)||(t.sessionId?e.test(t.sessionId):!1))}return e=>c(e.key).includes(r)||c(e.sessionId).includes(r)}if(!i||a===null)return ct;let[o,s]=i;return e=>s(o(e),a)},ut=(e,t)=>{let n=Ze(t);if(n.length===0)return{sessions:e,warnings:[]};let r=[],i=new Map,a=n.map(e=>{let t=Je(e.key??``),n=lt(e,t,r);if(!st.has(t))return n;let a=i.get(t)??[];return e.value&&a.push(n),i.set(t,a),e=>a.length===0||a.some(t=>t(e))});return{sessions:e.filter(e=>a.every(t=>t(e))),warnings:r}}})))()}function ft({agentId:e,key:t,sessionId:n}){return JSON.stringify([e,t,n])}function pt(e,t,n){return ze(e,{task:async(e,{signal:r})=>{let i=t.capture();if(!i)throw Error(U(`common.offline`));let a=`openclaw-usage-${Ue()}.json`,o=new Map;if(e.sessions.some(e=>e.hasContextWeight)){let t=await Ee(i.client,n(),{includeContextWeight:!0,signal:r});if(o=new Map(t.sessions.map(e=>[ft(e),e.contextWeight])),e.sessions.some(e=>e.hasContextWeight&&!o.get(ft(e))))throw Error(U(`usage.export.changed`))}return{connection:i,filename:a,data:{...e,sessions:e.sessions.map(e=>({...e,contextWeight:o.get(ft(e))??null}))}}},onComplete:({connection:e,filename:n,data:r})=>{t.isCurrent(e)&&le(n,JSON.stringify(r,null,2),`application/json;charset=utf-8`)},onError:e=>{u({message:`${U(`usage.export.label`)}: ${We(e)}`})}})}function mt(){return(mt=e((()=>{H(),d(),dt()})))()}function ht(e,t,n){let r=t?.sessions.map(e=>e.agentId).filter(e=>!!e?.trim())??[];return P`
    ${ae({title:te(`usage`),subtitle:z(`usage`),actions:xe({agents:e.agents.state.agentsList?.agents??[],additionalAgentIds:r,selection:e.agentSelection})})}
    ${ye(n)}
  `}function gt(){return(gt=e((()=>{j(),B(),Se(),ge(),be()})))()}var _t;function vt(){return(vt=e((()=>{_t=[`channel`,`agent`,`provider`,`model`,`messages`,`tools`,`errors`,`duration`]})))()}function yt(){return{input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}}function bt(e,t){if(e.input+=t.input,e.output+=t.output,e.cacheRead+=t.cacheRead,e.cacheWrite+=t.cacheWrite,e.totalTokens+=t.totalTokens,e.totalCost+=t.totalCost,e.inputCost+=t.inputCost,e.outputCost+=t.outputCost,e.cacheReadCost+=t.cacheReadCost,e.cacheWriteCost+=t.cacheWriteCost,e.missingCostEntries+=t.missingCostEntries,t.missingCostByModel){e.missingCostByModel??={};for(let[n,r]of Object.entries(t.missingCostByModel))e.missingCostByModel[n]=(e.missingCostByModel[n]??0)+r}}function xt(e,t){return JSON.stringify([e??`unknown`,t??`unknown`])}function St(e,t,n){return JSON.stringify([e,t??`unknown`,n??`unknown`])}function Ct(){return{count:0,sum:0,min:1/0,max:0,p95Max:0}}function wt(e,t){e.count+=t.count,e.sum+=t.avgMs*t.count,e.min=Math.min(e.min,t.minMs),e.max=Math.max(e.max,t.maxMs),e.p95Max=Math.max(e.p95Max,t.p95Ms)}function Tt(e){return{count:e.count,avgMs:e.count?e.sum/e.count:0,minMs:e.min===1/0?0:e.min,maxMs:e.max,p95Ms:e.p95Max}}function Et(e,t,n){let r=e.get(t)??{provider:n.provider,model:n.model,count:0,totals:yt()};r.count+=n.count,bt(r.totals,n.totals),e.set(t,r)}function Dt(e,t,n){if(!t)return;let r=e.get(t)??yt();bt(r,n),e.set(t,r)}function Ot(e,t){return t.totals.totalCost-e.totals.totalCost||t.totals.totalTokens-e.totals.totalTokens}function kt(){let e=yt(),t={total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},n=new Map,r=new Map,i=new Map,a=new Map,o=new Map,s=new Map,c=new Map,l=new Map,u=Ct(),d=0,f=0;function p(e){let t=s.get(e);return t||(t={date:e,tokens:0,cost:0,messages:0,toolCalls:0,errors:0},s.set(e,t)),t}function m({usage:s,agentId:m,channel:h}){if(s){bt(e,s),f=Math.max(f,s.durationMs??0),(s.firstActivity!==void 0||(s.messageCounts?.total??0)>0)&&(d+=1),s.messageCounts&&(t.total+=s.messageCounts.total,t.user+=s.messageCounts.user,t.assistant+=s.messageCounts.assistant,t.toolCalls+=s.messageCounts.toolCalls,t.toolResults+=s.messageCounts.toolResults,t.errors+=s.messageCounts.errors);for(let e of s.toolUsage?.tools??[])n.set(e.name,(n.get(e.name)??0)+e.count);for(let e of s.modelUsage??[])Et(r,xt(e.provider,e.model),e),Et(i,e.provider??`unknown`,{...e,model:void 0});Dt(a,m,s),Dt(o,h,s),s.latency&&s.latency.count>0&&wt(u,s.latency);for(let e of s.dailyLatency??[]){let t=c.get(e.date)??Ct();wt(t,e),c.set(e.date,t)}for(let e of s.dailyBreakdown??[]){let t=p(e.date);t.tokens+=e.tokens,t.cost+=e.cost}for(let e of s.dailyMessageCounts??[]){let t=p(e.date);t.messages+=e.total,t.toolCalls+=e.toolCalls,t.errors+=e.errors}for(let e of s.dailyModelUsage??[]){let t=St(e.date,e.provider,e.model),n=l.get(t)??{date:e.date,provider:e.provider,model:e.model,tokens:0,cost:0,count:0};n.tokens+=e.tokens,n.cost+=e.cost,n.count+=e.count,l.set(t,n)}}}function h(){let e=Array.from(n,([e,t])=>({name:e,count:t})).toSorted((e,t)=>t.count-e.count);return{sessionCount:d,...f>0?{longestSessionDurationMs:f}:{},messages:t,tools:{totalCalls:e.reduce((e,{count:t})=>e+t,0),uniqueTools:n.size,tools:e},byModel:Array.from(r.values()).toSorted(Ot),byProvider:Array.from(i.values()).toSorted(Ot),byAgent:Array.from(a,([e,t])=>({agentId:e,totals:t})).toSorted((e,t)=>t.totals.totalCost-e.totals.totalCost),byChannel:Array.from(o,([e,t])=>({channel:e,totals:t})).toSorted((e,t)=>t.totals.totalCost-e.totals.totalCost),latency:u.count>0?Tt(u):void 0,dailyLatency:Array.from(c,([e,t])=>({date:e,...Tt(t)})).toSorted((e,t)=>e.date.localeCompare(t.date)),modelDaily:Array.from(l.values()).toSorted((e,t)=>e.date.localeCompare(t.date)||t.cost-e.cost),daily:Array.from(s.values()).toSorted((e,t)=>e.date.localeCompare(t.date))}}return{totals:e,add:m,finish:h}}function At(){return(At=e((()=>{})))()}function jt(e){return Math.round(e/$t)}function K(e){return m(e,{thousandsSuffix:`K`,trimTrailingZero:!1})}function q(e,t=2){return`$${e.toFixed(t)}`}function Mt(e){return new Date(Date.UTC(1970,0,1,e)).toLocaleTimeString(void 0,{hour:`numeric`,timeZone:`UTC`})}function Nt(e,t,n){let r=e.usage;if(!r)return!1;let i=r.firstActivity??e.updatedAt,a=r.lastActivity??e.updatedAt;if(!i||!a)return!1;let o=Math.min(i,a),s=Math.max(i,a);if(o===s){let e=new Date(o);return n({usage:r,hour:Ft(e,t),weekday:It(e,t),share:1}),!0}let c=(s-o)/6e4,l=o;for(;l<s;){let e=new Date(l),i=zt(e,t),a=Math.min(i.getTime(),s),o=Math.max((a-l)/6e4,0);n({usage:r,hour:Ft(e,t),weekday:It(e,t),share:o/c}),l=a+1}return!0}function Pt(e,t){let n=Array.from({length:24},()=>0),r=Array.from({length:24},()=>0);for(let i of e){let e=i.usage;if(!e?.messageCounts||e.messageCounts.total===0)continue;let a=e.messageCounts;if(e.utcQuarterHourMessageCounts&&e.utcQuarterHourMessageCounts.length>0){for(let i of e.utcQuarterHourMessageCounts){let e=Rt(i.date,i.quarterIndex,t);e&&(n[e.hour]=(n[e.hour]??0)+i.errors,r[e.hour]=(r[e.hour]??0)+i.total)}continue}Nt(i,t,({hour:e,share:t})=>{n[e]=(n[e]??0)+(a.errors??0)*t,r[e]=(r[e]??0)+a.total*t})}return r.map((e,t)=>{let r=n[t]??0;return{hour:t,rate:e>0?r/e:0,errors:r,msgs:e}}).filter(e=>e.msgs>0&&e.errors>0).toSorted((e,t)=>t.rate-e.rate).slice(0,5).map(e=>({label:Mt(e.hour),value:`${(e.rate*100).toFixed(2)}%`,sub:`${Math.round(e.errors)} ${c(U(`usage.overview.errors`))} · ${Math.round(e.msgs)} ${U(`usage.overview.messagesAbbrev`)}`}))}function Ft(e,t){return t===`utc`?e.getUTCHours():e.getHours()}function It(e,t){return t===`utc`?e.getUTCDay():e.getDay()}function Lt(e,t){let n=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!n||!Number.isInteger(t)||t<0||t>95)return null;let[,r,i,a]=n,o=Number(r),s=Number(i),c=Number(a),l=new Date(Date.UTC(o,s-1,c,0,t*15));return Number.isNaN(l.valueOf())||l.getUTCFullYear()!==o||l.getUTCMonth()!==s-1||l.getUTCDate()!==c?null:l}function Rt(e,t,n){let r=Lt(e,t);return r?{hour:Ft(r,n),weekday:It(r,n)}:null}function zt(e,t){let n=new Date(e);return t===`utc`?n.setUTCMinutes(59,59,999):n.setMinutes(59,59,999),n}function Bt(e,t,n){let r=e.usage?.utcQuarterHourTokenUsage;if(!r||r.length===0)return!1;let i=!1;for(let e of r){if(e.totalTokens<=0)continue;let r=Rt(e.date,e.quarterIndex,t);r&&(i=!0,n({hour:r.hour,weekday:r.weekday,tokens:e.totalTokens}))}return i}function Vt(e,t,n){let r=e.usage,i=r?.firstActivity??e.updatedAt,a=r?.lastActivity??e.updatedAt;if(!i||!a)return!1;let o=Math.min(i,a),s=Math.max(i,a),c=o;for(;c<=s;){let e=new Date(c),r=Ft(e,n);if(t.includes(r))return!0;let i=zt(e,n);c=Math.min(i.getTime(),s)+1}return!1}function Ht(e,t,n){if(t.length===0)return!0;let r=!1;return Bt(e,n,({hour:e})=>{t.includes(e)&&(r=!0)})?r:Vt(e,t,n)}function Ut(e,t){let n=Array.from({length:24},()=>0),r=Array.from({length:7},()=>0),i=0,a=!1;for(let o of e){let e=o.usage;if(!(!e||!e.totalTokens||e.totalTokens<=0)){if(i+=e.totalTokens,Bt(o,t,({hour:e,weekday:t,tokens:i})=>{n[e]=(n[e]??0)+i,r[t]=(r[t]??0)+i})){a=!0;continue}Nt(o,t,({usage:e,hour:t,weekday:i,share:a})=>{n[t]=(n[t]??0)+e.totalTokens*a,r[i]=(r[i]??0)+e.totalTokens*a})&&(a=!0)}}let o=[U(`usage.mosaic.sun`),U(`usage.mosaic.mon`),U(`usage.mosaic.tue`),U(`usage.mosaic.wed`),U(`usage.mosaic.thu`),U(`usage.mosaic.fri`),U(`usage.mosaic.sat`)].map((e,t)=>({label:e,tokens:r[t]??0}));return{hasData:a,totalTokens:i,hourTotals:n,weekdayTotals:o}}function Wt(e,t,n,r){let i=Ut(e,t);if(!i.hasData)return G({title:U(`usage.mosaic.title`),description:U(`usage.mosaic.subtitleEmpty`),actions:P`
          <div class="usage-mosaic-total">
            ${K(0)} ${c(U(`usage.metrics.tokens`))}
          </div>
        `},P`
        <div class="usage-panel usage-mosaic">
          <div class="usage-empty-block usage-empty-block--compact">
            ${U(`usage.mosaic.noTimelineData`)}
          </div>
        </div>
      `);let a=Math.max(...i.hourTotals,1),o=Math.max(...i.weekdayTotals.map(e=>e.tokens),1);return G({title:U(`usage.mosaic.title`),description:U(`usage.mosaic.subtitle`,{zone:U(t===`utc`?`usage.filters.timeZoneUtc`:`usage.filters.timeZoneLocal`)}),actions:P`
        <div class="usage-mosaic-total">
          ${K(i.totalTokens)}
          ${c(U(`usage.metrics.tokens`))}
        </div>
      `},P`
      <div class="usage-panel usage-mosaic">
        <div class="usage-mosaic-grid">
          <div class="usage-mosaic-section">
            <div class="usage-mosaic-section-title">${U(`usage.mosaic.dayOfWeek`)}</div>
            <div class="usage-daypart-grid">
              ${i.weekdayTotals.map(e=>{let t=Math.min(e.tokens/o,1),n=e.tokens>0?`color-mix(in srgb, var(--accent) ${(12+t*60).toFixed(1)}%, transparent)`:`transparent`;return P`
                  <div class="usage-daypart-cell" style="background: ${n};">
                    <div class="usage-daypart-label">${e.label}</div>
                    <div class="usage-daypart-value">${K(e.tokens)}</div>
                  </div>
                `})}
            </div>
          </div>
          <div class="usage-mosaic-section">
            <div class="usage-mosaic-section-title">
              <span>${U(`usage.filters.hours`)}</span>
              <span class="usage-mosaic-sub">0 → 23</span>
            </div>
            <div class="usage-hour-grid">
              ${i.hourTotals.map((e,t)=>{let i=Math.min(e/a,1),o=e>0?`color-mix(in srgb, var(--accent) ${(8+i*70).toFixed(1)}%, transparent)`:`transparent`,s=`${t}:00 · ${K(e)} ${c(U(`usage.metrics.tokens`))}`,l=i>.7?`color-mix(in srgb, var(--accent) 60%, transparent)`:`color-mix(in srgb, var(--accent) 24%, transparent)`,u=n.includes(t);return P`
                  <button
                    type="button"
                    class="usage-hour-cell ${u?`selected`:``}"
                    style="background: ${o}; border-color: ${l};"
                    title="${s}"
                    aria-label=${s}
                    aria-pressed=${u?`true`:`false`}
                    @click=${e=>r(t,e.shiftKey)}
                  ></button>
                `})}
            </div>
            <div class="usage-hour-labels">
              <span>${U(`usage.mosaic.midnight`)}</span>
              <span>${U(`usage.mosaic.fourAm`)}</span>
              <span>${U(`usage.mosaic.eightAm`)}</span>
              <span>${U(`usage.mosaic.noon`)}</span>
              <span>${U(`usage.mosaic.fourPm`)}</span>
              <span>${U(`usage.mosaic.eightPm`)}</span>
            </div>
            <div class="usage-hour-legend">
              <span></span>
              ${U(`usage.mosaic.legend`)}
            </div>
          </div>
        </div>
      </div>
    `)}function Gt(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function Kt(e){let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!t)return null;let[,n,r,i]=t,a=Number(n),o=Number(r)-1,s=Number(i),c=new Date(a,o,s);return Number.isNaN(c.valueOf())||c.getFullYear()!==a||c.getMonth()!==o||c.getDate()!==s?null:c}function qt(e){let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!t)return null;let n=Number(t[1]),r=Number(t[2]),i=Number(t[3]),a=Date.UTC(n,r-1,i),o=new Date(a);return o.getUTCFullYear()!==n||o.getUTCMonth()!==r-1||o.getUTCDate()!==i?null:a/en}function Jt(e){return new Date(e*en).toISOString().slice(0,10)}function Yt(e){let t=Kt(e);return t?t.toLocaleDateString(void 0,{month:`short`,day:`numeric`}):e}function Xt(e){let t=Kt(e);return t?t.toLocaleDateString(void 0,{month:`long`,day:`numeric`,year:`numeric`}):e}function Zt(e,t,n){let r=qt(t),i=qt(n);if(r===null||i===null||r>i)return null;let a=yt();for(let t of e){let e=qt(t.date);e!==null&&e>=r&&e<=i&&bt(a,t)}return{days:i-r+1,startDate:t,endDate:n,totals:a}}function Qt(e,t,n,r=[1,7,30,90]){let i=qt(t),a=qt(n);if(i===null||a===null||i>a)return[];let o=a-i+1;return Array.from(new Set(r.map(e=>Math.max(1,Math.trunc(e))))).filter(e=>e<o).toSorted((e,t)=>e-t).map(t=>Zt(e,Jt(a-t+1),n)).filter(e=>e!==null)}var $t,en,tn,nn;function rn(){return(rn=e((()=>{j(),At(),ge(),H(),S(),$t=4,en=864e5,tn=(e,t)=>{if(e.length===0)return t??{messages:{total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},tools:{totalCalls:0,uniqueTools:0,tools:[]},byModel:[],byProvider:[],byAgent:[],byChannel:[],daily:[]};let n=kt();for(let t of e)n.add(t);return n.finish()},nn=(e,t,n)=>{let r=0,i=0;for(let t of e){let e=t.usage?.durationMs??0;e>0&&(r+=e,i+=1)}let a=i?r/i:0,o=t&&r>0?t.totalTokens/(r/6e4):void 0,s=t&&r>0?t.totalCost/(r/6e4):void 0,c=n.messages.total?n.messages.errors/n.messages.total:0,l;for(let e of n.daily){if(e.messages<=0||e.errors<=0)continue;let t={date:e.date,errors:e.errors,messages:e.messages,rate:e.errors/e.messages};(!l||t.rate>l.rate||t.rate===l.rate&&t.errors>l.errors)&&(l=t)}return{durationSumMs:r,durationCount:i,avgDurationMs:a,throughputTokensPerMin:o,throughputCostPerMin:s,errorRate:c,peakErrorDay:l}}})))()}function an(e){return/^[ \t\r\n]*[=+\-@\uFF0B\uFF0D\uFF1D\uFF20]/u.test(e)?`'${e}`:e}function on(e,t=!0){let n=t?an(e):e;return/[",\r\n]/.test(n)?`"${n.replaceAll(`"`,`""`)}"`:n}function sn(e){return e.map(e=>e==null?``:on(String(e),typeof e==`string`)).join(`,`)}function J(e,t,n,r=12){for(let i of t){if(e.length>=r)break;let t=n(i);t&&!e.includes(t)&&e.push(t)}}function cn(e,t){let n={agent:[],channel:[],provider:[],model:[],tool:[]};return J(n.agent,e,e=>e.agentId,6),J(n.channel,e,e=>e.channel),J(n.provider,e,e=>e.modelProvider),J(n.provider,e,e=>e.providerOverride),J(n.provider,t?.byProvider??[],e=>e.provider),J(n.model,e,e=>e.model),J(n.model,t?.byModel??[],e=>e.model),J(n.tool,t?.tools.tools??[],e=>e.name),n}var ln,un,dn,fn,Y,pn,mn;function hn(){return(hn=e((()=>{s(),dt(),ln=e=>{let t=[sn([`key`,`label`,`agentId`,`channel`,`provider`,`model`,`updatedAt`,`durationMs`,`messages`,`errors`,`toolCalls`,`inputTokens`,`outputTokens`,`cacheReadTokens`,`cacheWriteTokens`,`totalTokens`,`totalCost`])];for(let n of e){let e=n.usage;t.push(sn([n.key,n.label??``,n.agentId??``,n.channel??``,n.modelProvider??n.providerOverride??``,n.model??n.modelOverride??``,r(n.updatedAt)??``,e?.durationMs??``,e?.messageCounts?.total??``,e?.messageCounts?.errors??``,e?.messageCounts?.toolCalls??``,e?.input??``,e?.output??``,e?.cacheRead??``,e?.cacheWrite??``,e?.totalTokens??``,e?.totalCost??``]))}return t.join(`
`)},un=e=>{let t=[sn([`date`,`inputTokens`,`outputTokens`,`cacheReadTokens`,`cacheWriteTokens`,`totalTokens`,`inputCost`,`outputCost`,`cacheReadCost`,`cacheWriteCost`,`totalCost`])];for(let n of e)t.push(sn([n.date,n.input,n.output,n.cacheRead,n.cacheWrite,n.totalTokens,n.inputCost??``,n.outputCost??``,n.cacheReadCost??``,n.cacheWriteCost??``,n.totalCost]));return t.join(`
`)},dn=(e,t)=>{let n=e.trim();if(!n)return[];let r=Ze(n).map(e=>e.raw).at(-1)??``,[i,a]=r.includes(`:`)?[r.slice(0,r.indexOf(`:`)),r.slice(r.indexOf(`:`)+1)]:[``,``],o=c(i),s=c(a);if(!o)return[{label:`agent:`,value:`agent:`},{label:`channel:`,value:`channel:`},{label:`provider:`,value:`provider:`},{label:`model:`,value:`model:`},{label:`tool:`,value:`tool:`},{label:`has:errors`,value:`has:errors`},{label:`has:tools`,value:`has:tools`},{label:`minTokens:`,value:`minTokens:`},{label:`maxCost:`,value:`maxCost:`}];let l=[],u=(e,t)=>{for(let n of t.slice(0,6))(!s||c(n).includes(s))&&l.push({label:`${e}:${n}`,value:`${e}:${n}`})};switch(o){case`agent`:u(`agent`,t.agent);break;case`channel`:u(`channel`,t.channel);break;case`provider`:u(`provider`,t.provider);break;case`model`:u(`model`,t.model);break;case`tool`:u(`tool`,t.tool);break;case`has`:[`errors`,`tools`,`context`,`usage`,`model`,`provider`].forEach(e=>{(!s||e.includes(s))&&l.push({label:`has:${e}`,value:`has:${e}`})})}return l},fn=(e,t)=>{let n=e.trim();if(!n)return`${t} `;let r=Ze(n).map(e=>e.raw);return r[r.length-1]=t,`${r.join(` `)} `},Y=e=>c(e),pn=(e,t)=>{let n=Ze(e).map(e=>e.raw).filter(e=>e!==t);return n.length?`${n.join(` `)} `:``},mn=(e,t,n)=>{let r=Y(t),i=new Map(n.map(e=>[Y(e),e])),a=[];for(let t of Ze(e))(Y(t.key??``)!==r||i.delete(Y(t.value)))&&a.push(t.raw);let o=[...a,...Array.from(i.values(),e=>`${t}:${e}`)];return o.length?`${o.join(` `)} `:``}})))()}function gn(e,t,n){return{key:e,className:e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),labelKey:`usage.breakdown.${e}`,hintKey:t,short:n}}function _n(e,t){return t===0?0:e/t*100}function X(e){let t=Math.abs(e);return q(e,t===0||t>=.01?2:t>=1e-4?4:6)}function vn(e,t,n){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),n(t,e.shiftKey))}function yn(e,t,n,r,i,o,s,c){if(!(e.length>0||t.length>0||n.length>0))return I;let l=n.at(0)??``,u=n.length===1?r.find(e=>e.key===l):null,d=u?a(u.label||u.key,20)+((u.label||u.key).length>20?`…`:``):n.length===1?a(l,8)+`…`:U(`usage.filters.sessionsCount`,{count:String(n.length)}),f=u?u.label||u.key:n.length===1?l:n.join(`, `),p=e.length===1?e[0]:U(`usage.filters.daysCount`,{count:String(e.length)}),m=t.length===1?`${t[0]}:00`:U(`usage.filters.hoursCount`,{count:String(t.length)}),h=[{active:e.length>0,labelKey:`usage.filters.days`,value:p,removeKey:`usage.filters.removeDays`,onClear:i},{active:t.length>0,labelKey:`usage.filters.hours`,value:m,removeKey:`usage.filters.removeHours`,onClear:o},{active:n.length>0,labelKey:`usage.filters.session`,value:d,removeKey:`usage.filters.removeSession`,onClear:s,title:f}];return P`
    <div class="active-filters">
      ${h.filter(({active:e})=>e).map(({labelKey:e,value:t,removeKey:n,onClear:r,title:i})=>P`
            <div class="filter-chip" title=${R(i)}>
              <span class="filter-chip-label">${U(e)}: ${t}</span>
              <openclaw-tooltip .content=${U(`usage.filters.remove`)}>
                <button class="filter-chip-remove" @click=${r} aria-label=${U(n)}>
                  ×
                </button>
              </openclaw-tooltip>
            </div>
          `)}
      ${(e.length>0||t.length>0)&&n.length>0?P`
              <button class="btn btn--sm" @click=${c}>
                ${U(`usage.filters.clearAll`)}
              </button>
            `:I}
    </div>
  `}function bn(e,t,n){let r=Zt(e,t,n);if(!r||e.length===0)return I;let i=Qt(e,t,n),a=Gt(new Date),o=(e,t)=>e===1?t===a?U(`usage.presets.today`):Yt(t):U(`usage.costWindows.lastDays`,{count:String(e)}),s=[{label:U(`usage.costWindows.selectedRange`),summary:r,range:!0},...i.map(e=>({label:o(e.days,e.endDate),summary:e,range:!1}))];return P`
    <section class="cost-window-analysis">
      <div class="cost-window-header">
        <div>
          <div class="card-title usage-section-title">${U(`usage.costWindows.title`)}</div>
          <div class="card-sub">
            ${U(`usage.costWindows.subtitle`,{date:Xt(n)})}
          </div>
        </div>
        <div class="cost-window-range-label">
          ${Yt(t)} – ${Yt(n)}
        </div>
      </div>
      <div class="cost-window-grid">
        ${s.map(({label:e,summary:t,range:n})=>{let r=t.totals.totalCost/t.days;return P`
            <div class="cost-window-card ${n?`cost-window-card--range`:``}">
              <div class="cost-window-card__label">${e}</div>
              <div class="cost-window-card__value">
                ${X(t.totals.totalCost)}
              </div>
              <div class="cost-window-card__meta">
                ${K(t.totals.totalTokens)} ${U(`usage.metrics.tokens`)} ·
                ${X(r)} ${U(`usage.costWindows.perDay`)}
              </div>
            </div>
          `})}
      </div>
    </section>
  `}function xn(e,t,n,r,i,a){if(!e.length)return P`
      <div class="daily-chart-compact">
        <div class="card-title usage-section-title">${U(`usage.daily.title`)}</div>
        <div class="usage-empty-block">${U(`usage.empty.noData`)}</div>
      </div>
    `;let o=n===`tokens`,s=e.map(e=>o?e.totalTokens:e.totalCost),u=Math.max(...s,0),d=u>0?u:o?1:1e-4,f=s.filter(e=>e>0),p=d/(f.length>0?Math.min(...f):d)>50,m=s.map(e=>{if(e<=0)return 0;let t=p?Math.sqrt(e/d):e/d;return Math.max(6,t*200)}),h=e.length>30?12:e.length>20?18:e.length>14?24:32,g=e.length<=14,_=new Set(t);return P`
    <div class="daily-chart-compact">
      <div class="daily-chart-header">
        ${se({mode:`buttons`,variant:`accent`,ariaPressed:!1,className:`small sessions-toggle`,value:r,onChange:i,onReselect:i,options:[{value:`total`,label:U(`usage.daily.total`)},{value:`by-type`,label:U(`usage.daily.byType`)}]})}
        <div class="card-title">
          ${U(o?`usage.daily.tokensTitle`:`usage.daily.costTitle`)}
          ${p?P`<span
                  class="daily-chart-scale-badge"
                  title=${U(`usage.daily.compressedScaleHint`)}
                  aria-label=${U(`usage.daily.compressedScaleHint`)}
                  >√</span
                >`:I}
        </div>
      </div>
      <div class="daily-chart">
        <div class="daily-chart-plot">
          <div class="daily-chart-scale" aria-hidden="true">
            ${(u>0?[u,u/(p?4:2),0]:[0]).map(e=>P`<span
                  >${o?K(e):e===0?q(0):X(e)}</span
                >`)}
          </div>
          <div class="daily-chart-bars" style="--bar-max-width: ${h}px">
            ${e.map((t,n)=>{let i=l(m[n],`daily usage bar height`),s=_.has(t.date),u=Yt(t.date),d=e.length>20?String(Number.parseInt(t.date.slice(8),10)):u,f=e.length>20?`daily-bar-label daily-bar-label--compact`:`daily-bar-label`,p=r===`by-type`?Q.map(({key:e,className:n,labelKey:r})=>({value:o?t[e]:t[`${e}Cost`]??0,className:n,labelKey:r})):[],h=p.map(({value:e,labelKey:t})=>`${U(t)} ${o?K(e):X(e)}`),v=o?K(t.totalTokens):X(t.totalCost),y=Xt(t.date),b=`${K(t.totalTokens)} ${c(U(`usage.metrics.tokens`))}`.trim(),x=X(t.totalCost),S=p.reduce((e,t)=>e+t.value,0)||1;return P`
                <openclaw-tooltip
                  .content=${[y,b,x,...h].join(`
`)}
                >
                  <div
                    class="daily-bar-wrapper ${s?`selected`:``}"
                    role="button"
                    tabindex="0"
                    aria-pressed=${s?`true`:`false`}
                    aria-label=${`${y}: ${b}, ${x}`}
                    @keydown=${e=>vn(e,t.date,a)}
                    @click=${e=>a(t.date,e.shiftKey)}
                  >
                    ${r===`by-type`?P`
                            <div
                              class="daily-bar daily-bar--stacked"
                              style="height: ${i.toFixed(0)}px;"
                            >
                              ${p.map(({className:e,value:t})=>P`
                                  <div
                                    class="cost-segment ${e}"
                                    style="height: ${t/S*100}%"
                                  ></div>
                                `)}
                            </div>
                          `:P`
                            <div class="daily-bar" style="height: ${i.toFixed(0)}px"></div>
                          `}
                    ${g?P`<div class="daily-bar-total">${v}</div>`:P`<div
                            class="daily-bar-total daily-bar-total--placeholder"
                            aria-hidden="true"
                          ></div>`}
                    <div class="${f}">${d}</div>
                  </div>
                </openclaw-tooltip>
              `})}
          </div>
        </div>
      </div>
    </div>
  `}function Sn(e,t){let n=t===`tokens`,r=n?e.totalTokens||1:e.totalCost||0,i=Q.map(({key:t,className:i,labelKey:a})=>{let o=n?e[t]:e[`${t}Cost`]||0;return{className:i,labelKey:a,percentage:_n(o,r),formatted:n?K(o):X(o)}});return P`
    <div class="cost-breakdown cost-breakdown-compact">
      <div class="cost-breakdown-header">
        ${U(n?`usage.breakdown.tokensByType`:`usage.breakdown.costByType`)}
      </div>
      <div class="cost-breakdown-bar">
        ${i.map(({className:e,labelKey:t,percentage:n,formatted:r})=>P`
            <div
              class="cost-segment ${e}"
              style="width: ${n.toFixed(1)}%"
              title="${U(t)}: ${r}"
            ></div>
          `)}
      </div>
      <div class="cost-breakdown-legend">
        ${i.map(({className:e,labelKey:t,formatted:n})=>P`
            <span class="legend-item"
              ><span class="legend-dot ${e}"></span>${U(t)} ${n}</span
            >
          `)}
      </div>
      <div class="cost-breakdown-total">
        ${U(`usage.breakdown.total`)}:
        ${n?K(e.totalTokens):X(e.totalCost)}
      </div>
    </div>
  `}function Cn(e,t,n,r){let i=[`usage-insight-card`,r?.className].filter(Boolean).join(` `),a=[r?.error?`usage-error-list`:`usage-list`,r?.listClassName].filter(Boolean).join(` `);return P`
    <div class=${i}>
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?P`<div class="muted">${n}</div>`:P`
              <div class=${a}>
                ${t.map(e=>r?.error?P`
                        <div class="usage-error-row">
                          <div class="usage-error-date">${e.label}</div>
                          <div class="usage-error-rate">${e.value}</div>
                          ${e.sub?P`<div class="usage-error-sub">${e.sub}</div>`:I}
                        </div>
                      `:P`
                        <div class="usage-list-item">
                          <span>${e.label}</span>
                          <span class="usage-list-value">
                            <span>${e.value}</span>
                            ${e.sub?P`<span class="usage-list-sub">${e.sub}</span>`:I}
                          </span>
                        </div>
                      `)}
              </div>
            `}
    </div>
  `}function wn(e){let t=e.currentTarget;t instanceof HTMLElement&&t.focus()}function Z(e){let t=`usage-summary-hint-${e.hintId}`,n=[`stat`,`usage-summary-card`,e.className,e.tone?`usage-summary-card--${e.tone}`:``].filter(Boolean).join(` `),r=[`stat-value`,`usage-summary-value`,e.tone??``,e.compactValue?`usage-summary-value--compact`:``].filter(Boolean).join(` `);return P`
    <div class=${n}>
      <div class="usage-summary-title">
        ${e.title}
        <openclaw-tooltip open-on-click>
          <button
            id=${t}
            type="button"
            class="usage-summary-hint"
            aria-label=${e.title}
            @click=${wn}
          >
            ?
          </button>
          <!-- Shared tooltips dismiss pointer activation so action buttons never
               strand one open. This hint exists only to be read, so it opts in to
               click-to-open; the click handler still normalizes browsers that do
               not focus buttons on pointer activation. -->
          <span slot="content">${e.hint}</span>
        </openclaw-tooltip>
      </div>
      <div class=${r}>${e.value}</div>
      <div class="usage-summary-sub">${e.sub}</div>
    </div>
  `}function Tn(e,t,n,r,i,a,o,s){if(!e)return I;let l=t.messages.total?Math.round(e.totalTokens/t.messages.total):0,u=t.messages.total?e.totalCost/t.messages.total:0,d=e.input+e.cacheRead+e.cacheWrite,f=d>0?e.cacheRead/d:0,p=d>0?`${(f*100).toFixed(1)}%`:U(`usage.common.emptyValue`),m=n.errorRate*100,h=n.throughputTokensPerMin===void 0?U(`usage.common.emptyValue`):`${K(Math.round(n.throughputTokensPerMin))} ${U(`usage.overview.tokensPerMinute`)}`,g=n.throughputCostPerMin===void 0?U(`usage.common.emptyValue`):`${X(n.throughputCostPerMin)} ${U(`usage.overview.perMinute`)}`,_=n.durationCount>0?y(n.avgDurationMs)??U(`usage.common.emptyValue`):U(`usage.common.emptyValue`),v=t.daily.filter(e=>e.messages>0&&e.errors>0).map(e=>{let t=e.errors/e.messages;return{label:Yt(e.date),value:`${(t*100).toFixed(2)}%`,sub:`${e.errors} ${c(U(`usage.overview.errors`))} · ${e.messages} ${U(`usage.overview.messagesAbbrev`)} · ${K(e.tokens)}`,rate:t}}).toSorted((e,t)=>t.rate-e.rate).slice(0,5).map(({rate:e,...t})=>t),b=t=>i&&e.totalCost>0?U(`usage.overview.costShare`,{percent:(t/e.totalCost*100).toFixed(1)}):null,x=(e,t,n)=>[b(e),K(t),n===void 0?null:`${n} ${U(`usage.overview.messagesAbbrev`)}`].filter(e=>e!==null).join(` · `),S=t.byModel.slice(0,5).map(e=>({label:e.model??U(`usage.common.unknown`),value:X(e.totals.totalCost),sub:x(e.totals.totalCost,e.totals.totalTokens,e.count)})),C=t.byProvider.slice(0,5).map(e=>({label:e.provider??U(`usage.common.unknown`),value:X(e.totals.totalCost),sub:x(e.totals.totalCost,e.totals.totalTokens,e.count)})),w=t.tools.tools.slice(0,6).map(e=>({label:e.name,value:`${e.count}`,sub:U(`usage.overview.calls`)})),T=t.byAgent.slice(0,5).map(e=>({label:e.agentId,value:X(e.totals.totalCost),sub:x(e.totals.totalCost,e.totals.totalTokens)})),E=t.byChannel.slice(0,5).map(e=>({label:e.channel,value:X(e.totals.totalCost),sub:x(e.totals.totalCost,e.totals.totalTokens)})),D=[[`usage.overview.topModels`,S,`usage.overview.noModelData`],[`usage.overview.topProviders`,C,`usage.overview.noProviderData`],[`usage.overview.topTools`,w,`usage.overview.noToolCalls`],[`usage.overview.topAgents`,T,`usage.overview.noAgentData`],[`usage.overview.topChannels`,E,`usage.overview.noChannelData`]];return G({title:U(`usage.overview.title`)},P`
      <section class="usage-panel usage-overview-card">
        <div class="usage-overview-layout">
          <div class="usage-summary-grid">
            ${Z({hintId:`messages`,title:U(`usage.overview.messages`),hint:U(`usage.overview.messagesHint`),value:t.messages.total,sub:`${t.messages.user} ${c(U(`usage.overview.user`))} · ${t.messages.assistant} ${c(U(`usage.overview.assistant`))}`,className:`usage-summary-card--hero`})}
            ${Z({hintId:`throughput`,title:U(`usage.overview.throughput`),hint:U(`usage.overview.throughputHint`),value:h,sub:g,className:`usage-summary-card--hero usage-summary-card--throughput`,compactValue:!0})}
            ${Z({hintId:`tool-calls`,title:U(`usage.overview.toolCalls`),hint:U(`usage.overview.toolCallsHint`),value:t.tools.totalCalls,sub:`${t.tools.uniqueTools} ${U(`usage.overview.toolsUsed`)}`,className:`usage-summary-card--half`})}
            ${Z({hintId:`average-tokens`,title:U(`usage.overview.avgTokens`),hint:U(`usage.overview.avgTokensHint`),value:K(l),sub:U(`usage.overview.acrossMessages`,{count:String(t.messages.total||0)}),className:`usage-summary-card--half`})}
            ${Z({hintId:`cache-hit-rate`,title:U(`usage.overview.cacheHitRate`),hint:U(`usage.overview.cacheHint`),value:p,sub:`${K(e.cacheRead)} ${U(`usage.overview.cached`)} · ${K(d)} ${U(`usage.overview.prompt`)}`,tone:f>.6?`good`:f>.3?`warn`:`bad`,className:`usage-summary-card--medium`})}
            ${Z({hintId:`error-rate`,title:U(`usage.overview.errorRate`),hint:U(`usage.overview.errorHint`),value:`${m.toFixed(2)}%`,sub:`${t.messages.errors} ${c(U(`usage.overview.errors`))} · ${_} ${U(`usage.overview.avgSession`)}`,tone:m>5?`bad`:m>1?`warn`:`good`,className:`usage-summary-card--medium`})}
            ${Z({hintId:`average-cost`,title:U(`usage.overview.avgCost`),hint:U(r?`usage.overview.avgCostHintMissing`:`usage.overview.avgCostHint`),value:X(u),sub:`${X(e.totalCost)} ${c(U(`usage.breakdown.total`))}`,className:`usage-summary-card--compact`})}
            ${Z({hintId:`sessions`,title:U(`usage.overview.sessions`),hint:U(`usage.overview.sessionsHint`),value:o,sub:U(`usage.overview.sessionsInRange`,{count:String(s)}),className:`usage-summary-card--compact`})}
            ${Z({hintId:`errors`,title:U(`usage.overview.errors`),hint:U(`usage.overview.errorsHint`),value:t.messages.errors,sub:`${t.messages.toolResults} ${U(`usage.overview.toolResults`)}`,className:`usage-summary-card--compact`})}
          </div>
          <div class="usage-insights-grid">
            ${D.map(([e,t,n])=>Cn(U(e),t,U(n)))}
            ${Cn(U(`usage.overview.peakErrorDays`),v,U(`usage.overview.noErrorData`),{error:!0})}
            ${Cn(U(`usage.overview.peakErrorHours`),a,U(`usage.overview.noErrorData`),{error:!0,className:`usage-insight-card--wide`,listClassName:`usage-error-list--hours`})}
          </div>
        </div>
      </section>
    `)}function En(e,t,n,r,i,a,o,s,l,u,d,f,p,m,h){let g=e=>p.includes(e),_=e=>{let t=e.label||e.key;return t.startsWith(`agent:`)&&t.includes(`?token=`)?t.slice(0,t.indexOf(`?token=`)):t},v=e=>[g(`channel`)&&e.channel&&`channel:${e.channel}`,g(`agent`)&&e.agentId&&`agent:${e.agentId}`,g(`provider`)&&(e.modelProvider||e.providerOverride)&&`provider:${e.modelProvider??e.providerOverride}`,g(`model`)&&e.model&&`model:${e.model}`,g(`messages`)&&e.usage?.messageCounts&&`msgs:${e.usage.messageCounts.total}`,g(`tools`)&&e.usage?.toolUsage&&`tools:${e.usage.toolUsage.totalCalls}`,g(`errors`)&&e.usage?.messageCounts&&`errors:${e.usage.messageCounts.errors}`,g(`duration`)&&e.usage?.durationMs&&`dur:${y(e.usage.durationMs)??`—`}`].filter(e=>typeof e==`string`&&e.length>0),b=new Set(n),x=e.map(e=>{let t=e.usage,n=t?.totalTokens??0,a=t?.totalCost??0,o=b.size>0?t?.dailyBreakdown:void 0;if(o?.length){n=0,a=0;for(let e of o)b.has(e.date)&&(n+=e.tokens,a+=e.cost)}let s;switch(i){case`recent`:s=e.updatedAt??0;break;case`messages`:s=t?.messageCounts?.total??0;break;case`errors`:s=t?.messageCounts?.errors??0;break;case`cost`:s=a;break;case`tokens`:s=n}return{session:e,displayLabel:_(e),value:r?n:a,sortValue:s}}).toSorted((e,t)=>{let n=t.sortValue-e.sortValue;if(n!==0)return n;let r=(t.session.updatedAt??0)-(e.session.updatedAt??0);return r===0?e.displayLabel.localeCompare(t.displayLabel):r}),S=a===`asc`?x.toReversed():x,C=S.reduce((e,t)=>e+t.value,0),w=S.length?C/S.length:0,T=S.reduce((e,t)=>e+(t.session.usage?.messageCounts?.errors??0),0),E=(e,t,n)=>{let{session:i,value:a,displayLabel:o}=e,s=v(i);return P`
      <div
        class="session-bar-row ${t?`selected`:``}"
        @click=${e=>{e.target?.closest(`button`)||l(i.key,e.shiftKey,n)}}
        title="${i.key}"
      >
        <button
          type="button"
          class="session-bar-selection"
          aria-label=${o}
          aria-pressed=${t?`true`:`false`}
          @click=${e=>l(i.key,e.shiftKey,n)}
        >
          <span class="session-bar-label">
            <span class="session-bar-title">${o}</span>
            ${s.length>0?P`<span class="session-bar-meta">${s.join(` · `)}</span>`:I}
          </span>
        </button>
        <div class="session-bar-actions">
          <button
            type="button"
            class="btn btn--sm btn--ghost"
            @click=${e=>{e.stopPropagation(),re(e,o,U(`usage.sessions.copy`))}}
          >
            <span data-copy-label>${U(`usage.sessions.copy`)}</span>
          </button>
          <div class="session-bar-value">
            ${r?K(a):X(a)}
          </div>
        </div>
      </div>
    `},D=new Set(t),O=S.filter(e=>D.has(e.session.key)),k=O.length,A=new Map(S.map(e=>[e.session.key,e])),j=o.map(e=>A.get(e)).filter(e=>e!==void 0),M=e=>{let t=e.map(e=>e.session.key);return e.map(e=>E(e,D.has(e.session.key),t))};return G({title:U(`usage.sessions.title`)},P`
      <div class="usage-panel sessions-card">
        <div class="sessions-card-header">
          <div class="sessions-card-count">
            ${U(`usage.sessions.shown`,{count:String(e.length)})}
            ${m===e.length?``:` · ${U(`usage.sessions.total`,{count:String(m)})}`}
          </div>
        </div>
        <div class="sessions-card-meta">
          <div class="sessions-card-stats">
            <span>
              ${r?K(w):X(w)}
              ${U(`usage.sessions.avg`)}
            </span>
            <span
              >${T} ${c(U(`usage.overview.errors`))}</span
            >
          </div>
          ${se({mode:`buttons`,variant:`accent`,ariaPressed:!1,className:`small`,value:s,onChange:f,onReselect:f,options:[{value:`all`,label:U(`usage.sessions.all`)},{value:`recent`,label:U(`usage.sessions.recent`)}]})}
          <label class="sessions-sort">
            <span>${U(`usage.sessions.sort`)}</span>
            <select
              class="settings-select"
              @change=${e=>u(e.target.value)}
            >
              ${Object.entries({cost:`usage.metrics.cost`,errors:`usage.overview.errors`,messages:`usage.overview.messages`,recent:`usage.sessions.recentShort`,tokens:`usage.metrics.tokens`}).map(([e,t])=>P`<option value=${e} ?selected=${i===e}>
                    ${U(t)}
                  </option>`)}
            </select>
          </label>
          <openclaw-tooltip
            .content=${U(a===`desc`?`usage.sessions.descending`:`usage.sessions.ascending`)}
          >
            <button
              class="btn btn--sm"
              aria-label=${U(a===`desc`?`usage.sessions.descending`:`usage.sessions.ascending`)}
              @click=${()=>d(a===`desc`?`asc`:`desc`)}
            >
              ${a===`desc`?`↓`:`↑`}
            </button>
          </openclaw-tooltip>
          ${k>0?P`
                  <button class="btn btn--sm" @click=${h}>
                    ${U(`usage.sessions.clearSelection`)}
                  </button>
                `:I}
        </div>
        ${s===`recent`?j.length===0?P` <div class="usage-empty-block">${U(`usage.sessions.noRecent`)}</div> `:P`
                  <div class="session-bars session-bars--recent">
                    ${M(j)}
                  </div>
                `:e.length===0?P` <div class="usage-empty-block">${U(`usage.sessions.noneInRange`)}</div> `:P`
                  <div class="session-bars">
                    ${M(S.slice(0,50))}
                    ${e.length>50?P`
                            <div class="usage-more-sessions">
                              ${U(`usage.sessions.more`,{count:String(e.length-50)})}
                            </div>
                          `:I}
                  </div>
                `}
        ${k>1?P`
                <div class="sessions-selected-group">
                  <div class="sessions-card-count">
                    ${U(`usage.sessions.selected`,{count:String(k)})}
                  </div>
                  <div class="session-bars session-bars--selected">
                    ${M(O)}
                  </div>
                </div>
              `:I}
      </div>
    `)}var Q;function Dn(){return(Dn=e((()=>{t(),j(),M(),he(),ge(),H(),W(),S(),rn(),Q=[gn(`output`,`usage.details.assistantOutputTokens`,`Out`),gn(`input`,`usage.details.userToolInputTokens`,`In`),gn(`cacheWrite`,`usage.details.tokensWrittenToCache`,`CW`),gn(`cacheRead`,`usage.details.tokensReadFromCache`,`CR`)]})))()}function On(e,t){return t>0?e/t*100:0}function kn(e){return e<0xe8d4a51000?e*1e3:e}function An(e,t,n){let r=Number(e.slice(0,4)),i=Number(e.slice(5,7))-1,a=Number(e.slice(8,10))+n;return t===`utc`?Date.UTC(r,i,a):new Date(r,i,a).getTime()}function jn(e,t){let n=new Date(e),r=t===`utc`?n.getUTCFullYear():n.getFullYear(),i=(t===`utc`?n.getUTCMonth():n.getMonth())+1,a=t===`utc`?n.getUTCDate():n.getDate();return`${r}-${String(i).padStart(2,`0`)}-${String(a).padStart(2,`0`)}`}function Mn(e,t,n){let r=Math.min(t,n),i=Math.max(t,n);return e.filter(e=>{if(e.timestamp<=0)return!0;let t=kn(e.timestamp);return t>=r&&t<=i})}function Nn(e,t,n){return me({status:e,errorMessage:e.error?U(`usage.details.loadFailed`,{detail:c(U(t)),error:e.error}):void 0,className:`usage-callout usage-detail-error--${n}`})}function Pn(e,t,n){let r=t||e.usage;if(!r)return P` <div class="usage-empty-block">${U(`usage.details.noUsageData`)}</div> `;let i=e=>e?b(e):U(`usage.common.emptyValue`),a=[e.channel&&`channel:${e.channel}`,e.agentId&&`agent:${e.agentId}`,(e.modelProvider||e.providerOverride)&&`provider:${e.modelProvider??e.providerOverride}`,e.model&&`model:${e.model}`].filter(Boolean),o=r.toolUsage?.tools.slice(0,6)??[],s;if(n){s=new Map;for(let e of n.filter(({role:e})=>e===`assistant`))for(let[t,n]of qe(e.content).tools)s.set(t,(s.get(t)??0)+n)}let l=o.map(e=>({label:e.name,value:`${s?s.get(e.name)??0:e.count}`,sub:U(`usage.overview.calls`)})),u=s?[...s.values()].reduce((e,t)=>e+t,0):r.toolUsage?.totalCalls??0,d=s?s.size:r.toolUsage?.uniqueTools??0,f=r.modelUsage?.slice(0,6).map(e=>({label:e.model??U(`usage.common.unknown`),value:q(e.totals.totalCost),sub:K(e.totals.totalTokens)}))??[],p=[{labelKey:`usage.overview.messages`,value:r.messageCounts?.total??0,meta:P`${r.messageCounts?.user??0}
      ${c(U(`usage.overview.user`))} ·
      ${r.messageCounts?.assistant??0}
      ${c(U(`usage.overview.assistant`))}`},{labelKey:`usage.overview.toolCalls`,value:u,meta:P`${d} ${U(`usage.overview.toolsUsed`)}`},{labelKey:`usage.overview.errors`,value:r.messageCounts?.errors??0,meta:P`${r.messageCounts?.toolResults??0} ${U(`usage.overview.toolResults`)}`},{labelKey:`usage.details.duration`,value:y(r.durationMs)??U(`usage.common.emptyValue`),meta:P`${i(r.firstActivity)} → ${i(r.lastActivity)}`}];return P`
    ${a.length>0?P`<div class="usage-badges">
            ${a.map(e=>P`<span class="settings-row__value">${e}</span>`)}
          </div>`:I}
    <div class="session-summary-grid">
      ${p.map(({labelKey:e,value:t,meta:n})=>P`
          <div class="stat session-summary-card">
            <div class="session-summary-title">${U(e)}</div>
            <div class="stat-value session-summary-value">${t}</div>
            <div class="session-summary-meta">${n}</div>
          </div>
        `)}
    </div>
    <div class="usage-insights-grid usage-insights-grid--tight">
      ${Cn(U(`usage.overview.topTools`),l,U(`usage.overview.noToolCalls`))}
      ${Cn(U(`usage.details.modelMix`),f,U(`usage.overview.noModelData`))}
    </div>
  `}function Fn(e,t,n,r){let i=Math.min(n,r),a=Math.max(n,r),o=t.filter(e=>e.timestamp>=i&&e.timestamp<=a);if(o.length===0)return;let s=0,c=0,u=0,d=0,f={output:0,input:0,cacheWrite:0,cacheRead:0};for(let e of o){s+=e.totalTokens||0,c+=e.cost||0;for(let{key:t}of Q)f[t]+=e[t]||0;d+=+(e.output>0),u+=+(e.input>0)}let p=l(o[0],`filtered usage first point`),m=l(o.at(-1),`filtered usage last point`);return{...e,...f,totalTokens:s,totalCost:c,durationMs:m.timestamp-p.timestamp,firstActivity:p.timestamp,lastActivity:m.timestamp,messageCounts:{total:o.length,user:u,assistant:d,toolCalls:0,toolResults:0,errors:0}}}function In(e,t,n,r,i,o,s,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j){let M=e.label||e.key,N=M.length>50?a(M,50)+`…`:M,F=e.usage,L=u!==null&&d!==null,R=u!==null&&d!==null&&t?.points&&F?Fn(F,t.points,u,d):void 0,z=R?{totalTokens:R.totalTokens,totalCost:R.totalCost}:{totalTokens:F?.totalTokens??0,totalCost:F?.totalCost??0},B=R?U(`usage.details.filtered`):``;return P`
    <div class="settings-group usage-panel session-detail-panel">
      <div class="session-detail-header">
        <div class="session-detail-header-left">
          <div class="session-detail-title">
            ${N}
            ${B?P`<span class="session-detail-indicator">${B}</span>`:I}
          </div>
        </div>
        <div class="session-detail-stats">
          ${F?P`
                  <span
                    ><strong>${K(z.totalTokens)}</strong>
                    ${c(U(`usage.metrics.tokens`))}${B}</span
                  >
                  <span
                    ><strong>${q(z.totalCost)}</strong
                    >${B}</span
                  >
                `:I}
        </div>
        <openclaw-tooltip .content=${U(`usage.details.close`)}>
          <button
            class="btn btn--sm btn--ghost"
            @click=${j}
            aria-label=${U(`usage.details.close`)}
          >
            ×
          </button>
        </openclaw-tooltip>
      </div>
      ${e.scope===`family`&&e.includedSessionIds?.length?P`
              <div class="usage-lineage-note">
                ${U(`usage.scope.familyIncluded`,{count:String(e.includedSessionIds.length)})}
              </div>
            `:I}
      <div class="session-detail-content">
        ${Pn(e,R,u!=null&&d!=null&&_?Mn(_,u,d):void 0)}
        <div class="session-detail-row">
          ${Ln(t,n,r,i,o,s,l,p,m,h,g,u,d,f)}
        </div>
        <div class="session-detail-bottom">
          ${zn(_,v,y,b,x,S,C,w,T,E,D,L?u:null,L?d:null)}
          ${Rn(O,F,k,A)}
        </div>
      </div>
    </div>
  `}function Ln(e,t,n,r,i,a,o,s,u,d,f=`local`,p,m,h){if((t||n.awaitingGateway)&&!n.hasLoaded)return P`
      <div class="session-timeseries-compact">
        <div class="usage-empty-block">${U(`usage.loading.badge`)}</div>
      </div>
    `;let g=Nn(n,`usage.details.usageOverTime`,`timeline`);if(n.error&&!n.hasLoaded)return P`
      <div class="session-timeseries-compact">
        <div class="card-title usage-section-title">${U(`usage.details.usageOverTime`)}</div>
        ${g}
      </div>
    `;if(!e||e.points.length<2)return P`
      <div class="session-timeseries-compact">
        ${g}
        <div class="usage-empty-block">${U(`usage.details.noTimeline`)}</div>
      </div>
    `;let v=e.points;if(s||u||d&&d.length>0){let t=s?An(s,f,0):0,n=u?An(u,f,1):1/0,r=d?.length?new Set(d):void 0;v=e.points.filter(e=>e.timestamp<t||e.timestamp>=n?!1:!r||r.has(jn(e.timestamp,f)))}if(v.length<2)return P`
      <div class="session-timeseries-compact">
        ${g}
        <div class="usage-empty-block">${U(`usage.details.noDataInRange`)}</div>
      </div>
    `;let y=0,b=0;v=v.map(e=>(y+=e.totalTokens,b+=e.cost,{...e,cumulativeTokens:y,cumulativeCost:b}));let x=p!=null&&m!=null,S=x?Math.min(p,m):0,C=x?Math.max(p,m):1/0,w=0,E=v.length;if(x){w=v.findIndex(e=>e.timestamp>=S),w===-1&&(w=v.length);let e=v.findIndex(e=>e.timestamp>C);E=e===-1?v.length:e}let D=x?v.slice(w,E):v,O={output:0,input:0,cacheRead:0,cacheWrite:0};for(let e of D)for(let{key:t}of Q)O[t]+=e[t];let k={top:8,right:4,bottom:14,left:30},A=400-k.left-k.right,j=100-k.top-k.bottom,M=r===`cumulative`,F=r===`per-turn`&&a===`by-type`,L=f===`utc`?{timeZone:`UTC`}:{},R=Object.values(O).reduce((e,t)=>e+t,0),z=v.map(e=>M?e.cumulativeTokens:F?e.input+e.output+e.cacheRead+e.cacheWrite:e.totalTokens),B=Math.max(...z,1),ee=A/v.length,V=Math.min(Vn,Math.max(1,ee*Bn)),te=ee-V,H=k.left+w*(V+te),W=E>=v.length?k.left+(v.length-1)*(V+te)+V:k.left+(E-1)*(V+te)+V;return P`
    <div class="session-timeseries-compact">
      <div class="timeseries-header-row">
        <div class="card-title usage-section-title">${U(`usage.details.usageOverTime`)}</div>
        <div class="timeseries-controls">
          ${x?P`
                  <div class="settings-segmented settings-segmented--accent small">
                    <button
                      class="btn btn--sm settings-segmented__btn settings-segmented__btn--active"
                      @click=${()=>h?.(null,null)}
                    >
                      ${U(`usage.details.reset`)}
                    </button>
                  </div>
                `:I}
          ${se({mode:`buttons`,variant:`accent`,ariaPressed:!1,className:`small`,value:r,onChange:i,onReselect:i,options:[{value:`per-turn`,label:U(`usage.details.perTurn`)},{value:`cumulative`,label:U(`usage.details.cumulative`)}]})}
          ${M?I:se({mode:`buttons`,variant:`accent`,ariaPressed:!1,className:`small`,value:a,onChange:o,onReselect:o,options:[{value:`total`,label:U(`usage.daily.total`)},{value:`by-type`,label:U(`usage.daily.byType`)}]})}
        </div>
      </div>
      ${g}
      <div class="timeseries-chart-wrapper">
        <svg viewBox="0 0 ${400} ${118}" class="timeseries-svg">
          ${[{x1:k.left,y1:k.top,x2:k.left,y2:k.top+j},{x1:k.left,y1:k.top+j,x2:400-k.right,y2:k.top+j}].map(({x1:e,y1:t,x2:n,y2:r})=>N`<line x1="${e}" y1="${t}" x2="${n}" y2="${r}" stroke="var(--border)" />`)}
          ${[{y:k.top+5,text:K(B)},{y:k.top+j,text:`0`}].map(({y:e,text:t})=>N`<text x="${k.left-4}" y="${e}" text-anchor="end" class="ts-axis-label">${t}</text>`)}
          <!-- X axis labels (first and last) -->
          ${v.length>0?N`
            <text x="${k.left}" y="${k.top+j+10}" text-anchor="start" class="ts-axis-label">${T(l(v[0],`time series first point`).timestamp,{hour:`2-digit`,minute:`2-digit`,...L},``)}</text>
            <text x="${400-k.right}" y="${k.top+j+10}" text-anchor="end" class="ts-axis-label">${T(l(v.at(-1),`time series last point`).timestamp,{hour:`2-digit`,minute:`2-digit`,...L},``)}</text>
          `:I}
          <!-- Bars -->
          ${v.map((e,t)=>{let n=l(z[t],`time series bar total`),r=k.left+t*(V+te),i=n/B*j,a=k.top+j-i,o=[_(e.timestamp,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`,...L},``),`${K(n)} ${c(U(`usage.metrics.tokens`))}`];F&&o.push(...Q.map(({key:t,short:n})=>`${n} ${K(e[t])}`));let s=o.join(` · `),u=x&&(t<w||t>=E);if(!F)return N`<rect x="${r}" y="${a}" width="${V}" height="${i}" class="ts-bar${u?` dimmed`:``}" rx="1" data-tooltip=${s} aria-label=${s}></rect>`;let d=k.top+j,f=u?` dimmed`:``;return N`
              ${Q.map(({key:t,className:a})=>{let o=e[t];if(o<=0||n<=0)return I;let c=o/n*i;return d-=c,N`<rect x="${r}" y="${d}" width="${V}" height="${c}" class="ts-bar ${a}${f}" rx="1" data-tooltip=${s} aria-label=${s}></rect>`})}
            `})}
          <!-- Selection highlight overlay (always visible between handles) -->
          ${N`
            <rect 
              x="${H}" 
              y="${k.top}" 
              width="${Math.max(1,W-H)}" 
              height="${j}" 
              fill="var(--accent)" 
              opacity="${Hn}" 
              pointer-events="none"
            />
          `}
          ${[H,W].map(e=>N`
              <line x1="${e}" y1="${k.top}" x2="${e}" y2="${k.top+j}" stroke="var(--accent)" stroke-width="0.8" opacity="0.7" />
              <rect x="${e-Un/2}" y="${k.top+j/2-Wn/2}" width="${Un}" height="${Wn}" rx="1.5" fill="var(--accent)" class="cursor-handle" />
              ${[-.7,Gn].map(t=>N`<line x1="${e+t}" y1="${k.top+j/2-Wn/5}" x2="${e+t}" y2="${k.top+j/2+Wn/5}" stroke="var(--bg)" stroke-width="0.4" pointer-events="none" />`)}
            `)}
        </svg>
        <!-- Handle drag zones (only on handles, not full chart) -->
        ${(()=>{let e=e=>t=>{if(!h)return;t.preventDefault(),t.stopPropagation();let n=t.currentTarget.closest(`.timeseries-chart-wrapper`)?.querySelector(`svg`);if(!n)return;let r=n.getBoundingClientRect(),i=r.width,a=k.left/400*i,o=(400-k.right)/400*i-a,s=e=>{let t=Math.max(0,Math.min(1,(e-r.left-a)/o));return Math.min(Math.floor(t*v.length),v.length-1)},c=e===`left`?H:W,u=r.left+c/400*i,d=t.clientX-u;document.body.style.cursor=`col-resize`;let f=t=>{let n=t.clientX-d,r=s(n),i=v[r];if(!i)return;let a=e===`left`,o=a?m??l(v.at(-1),`time series right cursor point`).timestamp:p??l(v[0],`time series left cursor point`).timestamp;h(a?Math.min(i.timestamp,o):o,a?o:Math.max(i.timestamp,o))},g=()=>{document.body.style.cursor=``,document.removeEventListener(`mousemove`,f),document.removeEventListener(`mouseup`,g)};document.addEventListener(`mousemove`,f),document.addEventListener(`mouseup`,g)};return P`
            ${[`left`,`right`].map(t=>P`<div
                class="chart-handle-zone chart-handle-${t}"
                style="left: ${((t===`left`?H:W)/400*100).toFixed(1)}%;"
                @mousedown=${e(t)}
              ></div>`)}
          `})()}
      </div>
      <div class="timeseries-summary">
        ${x?P`
                <span class="timeseries-summary__range">
                  ${U(`usage.details.turnRange`,{start:String(w+1),end:String(E),total:String(v.length)})}
                </span>
                ·
                ${T(S,{hour:`2-digit`,minute:`2-digit`,...L},``)}–${T(C,{hour:`2-digit`,minute:`2-digit`,...L},``)}
                · ${K(R)} ·
                ${q(D.reduce((e,t)=>e+(t.cost||0),0))}
              `:P`${v.length} ${U(`usage.overview.messagesAbbrev`)} ·
              ${K(y)} · ${q(b)}`}
      </div>
      ${F?P`
              <div class="timeseries-breakdown">
                <div class="card-title usage-section-title">
                  ${U(`usage.breakdown.tokensByType`)}
                </div>
                <div class="cost-breakdown-bar cost-breakdown-bar--compact">
                  ${Q.map(({key:e,className:t})=>P`
                      <div
                        class="cost-segment ${t}"
                        style="width: ${On(O[e],R).toFixed(1)}%"
                      ></div>
                    `)}
                </div>
                <div class="cost-breakdown-legend">
                  ${Q.map(({key:e,className:t,labelKey:n,hintKey:r})=>P`
                      <div class="legend-item" title=${U(r)}>
                        <span class="legend-dot ${t}"></span>${U(n)}
                        ${K(O[e])}
                      </div>
                    `)}
                </div>
                <div class="cost-breakdown-total">
                  ${U(`usage.breakdown.total`)}: ${K(R)}
                </div>
              </div>
            `:I}
    </div>
  `}function Rn({weight:e,loading:t,status:n},r,i,a){let o=Nn(n,`usage.details.systemPromptBreakdown`,`context`);if(!e)return P`
      <div class="context-details-panel">
        ${o}
        ${n.error?I:P`<div class="usage-empty-block">
                ${U(t||n.awaitingGateway?`usage.loading.badge`:`usage.details.noContextData`)}
              </div>`}
      </div>
    `;let s=[{className:`skills`,labelKey:`usage.details.skills`,tokens:jt(e.skills.promptChars),entries:e.skills.entries.map(({name:e,blockChars:t})=>({name:e,chars:t}))},{className:`tools`,labelKey:`usage.details.tools`,tokens:jt(e.tools.listChars+e.tools.schemaChars),entries:e.tools.entries.map(({name:e,summaryChars:t,schemaChars:n})=>({name:e,chars:t+n}))},{className:`files`,labelKey:`usage.details.files`,tokens:jt(e.injectedWorkspaceFiles.reduce((e,t)=>t.injectionStatus===`native_unverified`?e:e+t.injectedChars,0)),entries:e.injectedWorkspaceFiles.map(({name:e,injectedChars:t})=>({name:e,chars:t}))}].map(({className:e,labelKey:t,tokens:n,entries:r})=>({className:e,labelKey:t,tokens:n,entries:r.toSorted((e,t)=>e.chars===null?t.chars===null?0:1:t.chars===null?-1:t.chars-e.chars)})),c=[{className:`system`,labelKey:`usage.details.system`,tokens:jt(e.systemPrompt.chars)},...s],l=c.reduce((e,{tokens:t})=>e+t,0),u=r&&r.totalTokens>0?r.input+r.cacheRead:0,d=u>0?`~${Math.min(l/u*100,100).toFixed(0)}% ${U(`usage.details.ofInput`)}`:U(`usage.details.baseContextPerMessage`),f=s.some(({entries:e})=>e.length>4);return P`
    <div class="context-details-panel">
      ${o}
      <div class="context-breakdown-header">
        <div class="card-title usage-section-title">
          ${U(`usage.details.systemPromptBreakdown`)}
        </div>
        ${f?P`<button class="btn btn--sm" @click=${a}>
                ${U(i?`usage.details.collapse`:`usage.details.expandAll`)}
              </button>`:I}
      </div>
      <p class="context-weight-desc">${d}</p>
      <div class="context-stacked-bar">
        ${c.map(({className:e,labelKey:t,tokens:n})=>P`
            <div
              class="context-segment ${e}"
              style="width: ${On(n,l).toFixed(1)}%"
              title="${U(t)}: ~${K(n)}"
            ></div>
          `)}
      </div>
      <div class="context-legend">
        ${c.map(({className:e,labelKey:t,tokens:n})=>P`
            <span class="legend-item"
              ><span class="legend-dot ${e}"></span>${U(e===`system`?`usage.details.systemShort`:t)}
              ~${K(n)}</span
            >
          `)}
      </div>
      <div class="context-total">
        ${U(`usage.breakdown.total`)}: ~${K(l)}
      </div>
      <div class="context-breakdown-grid">
        ${s.filter(({entries:e})=>e.length>0).map(({labelKey:e,entries:t})=>{let n=i?t:t.slice(0,4),r=t.length-n.length;return P`
              <div class="context-breakdown-card">
                <div class="context-breakdown-title">${U(e)} (${t.length})</div>
                <div class="context-breakdown-list">
                  ${n.map(({name:e,chars:t})=>P`
                      <div class="context-breakdown-item">
                        <span class="mono" title=${e}>${e}</span>
                        <span class="muted"
                          >${t===null?U(`usage.common.unknown`):`~${K(jt(t))}`}</span
                        >
                      </div>
                    `)}
                </div>
                ${r>0?P`
                        <div class="context-breakdown-more">
                          ${U(`usage.sessions.more`,{count:String(r)})}
                        </div>
                      `:I}
              </div>
            `})}
      </div>
    </div>
  `}function zn(e,t,n,r,i,a,o,s,l,u,d,f,p){if((t||n.awaitingGateway)&&!n.hasLoaded)return P`
      <div class="session-logs-compact">
        <div class="session-logs-header">${U(`usage.details.conversation`)}</div>
        <div class="usage-empty-block">${U(`usage.loading.badge`)}</div>
      </div>
    `;let m=Nn(n,`usage.details.conversation`,`conversation`);if(n.error&&!n.hasLoaded)return P`
      <div class="session-logs-compact">
        <div class="session-logs-header">${U(`usage.details.conversation`)}</div>
        ${m}
      </div>
    `;if(!e||e.length===0)return P`
      <div class="session-logs-compact">
        <div class="session-logs-header">${U(`usage.details.conversation`)}</div>
        ${m}
        <div class="usage-empty-block">${U(`usage.details.noMessages`)}</div>
      </div>
    `;let h=c(a.query),g=e.map(e=>{let t=qe(e.content);return{log:e,toolInfo:t,cleanContent:t.cleanContent||e.content}}),_=Array.from(new Set(g.flatMap(e=>e.toolInfo.tools.map(([e])=>e)))).toSorted((e,t)=>e.localeCompare(t)),v=f!=null&&p!=null,y=v?Math.min(f,p):0,x=v?Math.max(f,p):1/0,S=g.filter(e=>{if(v&&e.log.timestamp>0){let t=kn(e.log.timestamp);if(t<y||t>x)return!1}return(a.roles.length===0||a.roles.includes(e.log.role))&&(!a.hasTools||e.toolInfo.tools.length>0)&&(a.tools.length===0||e.toolInfo.tools.some(([e])=>a.tools.includes(e)))&&(!h||c(e.cleanContent).includes(h))}),C=a.roles.length>0||a.tools.length>0||a.hasTools||h||v?`${S.length} ${U(`usage.details.of`)} ${e.length}${v?` (${U(`usage.details.timelineFiltered`)})`:``}`:`${e.length}`,w=new Set(a.roles),T=new Set(a.tools);return P`
    <div class="session-logs-compact">
      <div class="session-logs-header">
        <span>
          ${U(`usage.details.conversation`)}
          <span class="session-logs-header-count">
            (${C} ${c(U(`usage.overview.messages`))})
          </span>
        </span>
        <button class="btn btn--sm" @click=${i}>
          ${U(r?`usage.details.collapseAll`:`usage.details.expandAll`)}
        </button>
      </div>
      ${m}
      <div class="usage-filters-inline session-log-filters">
        <select
          multiple
          size="4"
          aria-label=${U(`usage.details.filterByRole`)}
          @change=${e=>o(Array.from(e.target.selectedOptions).map(e=>e.value))}
        >
          ${[[`user`,`usage.overview.user`],[`assistant`,`usage.overview.assistant`],[`tool`,`usage.details.tool`],[`toolResult`,`usage.details.toolResult`]].map(([e,t])=>P`<option value=${e} ?selected=${w.has(e)}>
                ${U(t)}
              </option>`)}
        </select>
        <select
          multiple
          size="4"
          aria-label=${U(`usage.details.filterByTool`)}
          @change=${e=>s(Array.from(e.target.selectedOptions).map(e=>e.value))}
        >
          ${_.map(e=>P`<option value=${e} ?selected=${T.has(e)}>${e}</option>`)}
        </select>
        <label class="usage-filters-inline session-log-has-tools">
          <input
            type="checkbox"
            .checked=${a.hasTools}
            @change=${e=>l(e.target.checked)}
          />
          ${U(`usage.details.hasTools`)}
        </label>
        <input
          type="text"
          placeholder=${U(`usage.details.searchConversation`)}
          aria-label=${U(`usage.details.searchConversation`)}
          .value=${a.query}
          @input=${e=>u(e.target.value)}
        />
        <button class="btn btn--sm" @click=${d}>${U(`usage.filters.clear`)}</button>
      </div>
      <div class="session-logs-list">
        ${S.map(e=>{let{log:t,toolInfo:n,cleanContent:i}=e,a=t.role===`user`?`user`:`assistant`,o=t.role===`user`?U(`usage.details.you`):t.role===`assistant`?U(`usage.overview.assistant`):U(`usage.details.tool`);return P`
            <div class="session-log-entry ${a}">
              <div class="session-log-meta">
                <span class="session-log-role">${o}</span>
                <span>${b(t.timestamp)}</span>
                ${t.tokens?P`<span>${K(t.tokens)}</span>`:I}
              </div>
              <div class="session-log-content">${i}</div>
              ${n.tools.length>0?P`
                      <details class="session-log-tools" ?open=${r}>
                        <summary>${n.summary}</summary>
                        <div class="session-log-tools-list">
                          ${n.tools.map(([e,t])=>P`
                              <span class="session-log-tools-pill">${e} × ${t}</span>
                            `)}
                        </div>
                      </details>
                    `:I}
            </div>
          `})}
        ${S.length===0?P`
                <div class="usage-empty-block usage-empty-block--compact">
                  ${U(`usage.details.noMessagesMatch`)}
                </div>
              `:I}
      </div>
    </div>
  `}var Bn,Vn,Hn,Un,Wn,Gn;function Kn(){return(Kn=e((()=>{t(),j(),ne(),ge(),H(),W(),S(),dt(),rn(),Dn(),Bn=.75,Vn=8,Hn=.06,Un=5,Wn=12,Gn=.7})))()}function qn(e){return new Date(`${e}T12:00:00Z`).getTime()}function Jn(e){return new Date(e).toISOString().slice(0,10)}function Yn(e){let t=e.toSorted((e,t)=>e-t),n=e=>t[Math.min(t.length-1,Math.floor(t.length*e))]??0;return[n(.25),n(.5),n(.75)]}function Xn(e,t){return e<=0?0:e<t[0]?1:e<t[1]?2:e<t[2]?3:4}function Zn(e,t,n,r){let i=qn(n),a=Math.max(qn(t),i-363*Qn),o=new Map(e.map(e=>[e.date,e.totalTokens])),s=e.filter(e=>{let t=qn(e.date);return e.totalTokens>0&&t>=a&&t<=i}).map(e=>e.totalTokens),c=s.length>0?Yn(s):[0,0,0],l=a-new Date(a).getUTCDay()*Qn,u=new Intl.DateTimeFormat(r,{month:`short`,timeZone:`UTC`}),d=[],f=[],p=-1;for(let e=l;e<=i;e+=7*Qn){let t=[];for(let n=0;n<7;n+=1){let r=e+n*Qn;if(r<a||r>i){t.push(null);continue}let s=Jn(r),l=o.get(s)??0;t.push({date:s,tokens:l,level:Xn(l,c)})}d.push({days:t});let r=qn(t.find(e=>e!==null)?.date??n),s=new Date(r).getUTCMonth();f.push(s===p?``:u.format(new Date(r))),p=s}return{weeks:d,monthLabels:f}}var Qn;function $n(){return($n=e((()=>{Qn=864e5})))()}function er(e){let t=ir+e.weeks.length*rr,n=new Intl.NumberFormat(void 0,{maximumFractionDigits:0}),r=new Intl.DateTimeFormat(void 0,{weekday:`short`,timeZone:`UTC`});return P`
    <svg
      class="usage-heatmap__svg"
      viewBox="0 0 ${t} ${116}"
      style="--usage-heatmap-width: ${t}px"
      role="img"
      aria-label=${U(`usage.heatmap.title`)}
    >
      ${e.monthLabels.map((e,t)=>e?N`<text class="usage-heatmap__month" x=${ir+t*rr} y="10">${e}</text>`:I)}
      ${or.map(({row:e,utcDay:t})=>N`<text class="usage-heatmap__weekday" x=${24} y=${ar+e*rr+nr-2}>${r.format(new Date(t))}</text>`)}
      ${e.weeks.map((e,t)=>e.days.map((e,r)=>{if(!e)return I;let i=`${Xt(e.date)} · ${U(`usage.heatmap.cellTokens`,{tokens:n.format(e.tokens)})}`;return N`
            <rect
              class="usage-heatmap__cell usage-heatmap__cell--l${e.level}"
              x=${ir+t*rr}
              y=${ar+r*rr}
              width=${nr}
              height=${nr}
              rx="2.5"
              data-tooltip=${i}
              aria-label=${i}
            ></rect>
          `}))}
    </svg>
  `}function tr(e,t,n){if(e.length===0)return I;let r=Zn(e,t,n),i=P`
    <div class="usage-heatmap__legend" aria-hidden="true">
      <span>${U(`usage.heatmap.less`)}</span>
      ${[0,1,2,3,4].map(e=>P`<span class="usage-heatmap__swatch usage-heatmap__cell--l${e}"></span>`)}
      <span>${U(`usage.heatmap.more`)}</span>
    </div>
  `;return G({title:U(`usage.heatmap.title`),description:U(`usage.heatmap.subtitle`),actions:i},P`<div class="usage-panel usage-heatmap">${er(r)}</div>`)}var nr,rr,ir,ar,or;function sr(){return(sr=e((()=>{j(),ge(),H(),$n(),rn(),nr=11,rr=14,ir=30,ar=18,or=[{row:1,utcDay:Date.UTC(2024,0,1)},{row:3,utcDay:Date.UTC(2024,0,3)},{row:5,utcDay:Date.UTC(2024,0,5)}]})))()}function cr(e){return P`
    <span class="settings-status settings-status--accent">
      <span class="usage-loading-spinner" aria-hidden="true"></span>
      ${e}
    </span>
  `}function lr(e){return G({title:U(`usage.loading.title`),actions:cr(U(`usage.loading.badge`))},P`
      <div class="usage-panel usage-loading-card">
        <div class="usage-loading-header">
          <div class="usage-loading-controls">
            <div class="usage-date-range usage-date-range--loading">
              <input class="usage-date-input" type="date" .value=${e.startDate} disabled />
              <span class="usage-separator">${U(`usage.filters.to`)}</span>
              <input class="usage-date-input" type="date" .value=${e.endDate} disabled />
            </div>
          </div>
        </div>
        <div class="usage-loading-grid">
          <div class="skeleton usage-skeleton-block usage-skeleton-block--tall"></div>
          <div class="skeleton usage-skeleton-block"></div>
          <div class="skeleton usage-skeleton-block"></div>
        </div>
      </div>
    `)}function ur(e){return P`
    <section class="settings-group usage-panel usage-empty-state">
      <div class="usage-empty-state__title">${U(`usage.empty.title`)}</div>
      <div class="card-sub usage-empty-state__subtitle">${U(`usage.empty.subtitle`)}</div>
      <div class="usage-empty-state__features">
        <span class="usage-empty-state__feature">${U(`usage.empty.featureOverview`)}</span>
        <span class="usage-empty-state__feature">${U(`usage.empty.featureSessions`)}</span>
        <span class="usage-empty-state__feature">${U(`usage.empty.featureTimeline`)}</span>
      </div>
      <div class="usage-empty-state__actions">
        <button class="btn primary" @click=${e}>${U(`common.refresh`)}</button>
      </div>
    </section>
  `}function dr(e,t,n){let r=n?P`<div class="callout warning usage-callout">${U(`usage.providerUsage.stalled`)}</div>`:t?P`<div class="callout warning usage-callout">
          ${U(`usage.providerUsage.unavailable`)}
        </div>`:I;return e.length===0?r:G({title:U(`usage.providerUsage.title`),count:e.length,description:U(`usage.providerUsage.subtitle`)},P`
      ${r}
      <div class="usage-panel provider-usage-section">
        <div class="provider-usage-grid">
          ${e.map(e=>P`
              <article class="provider-usage-card">
                <div class="provider-usage-card__header">
                  <div>
                    <div class="provider-usage-card__name">${e.displayName}</div>
                    <div class="provider-usage-card__id">${e.provider}</div>
                  </div>
                  ${e.plan?P`<span class="provider-usage-plan">${e.plan}</span>`:I}
                </div>
                ${je(e)}
              </article>
            `)}
        </div>
      </div>
    `)}function fr(e){let{data:t,filters:n,display:r,detail:i,callbacks:a}=e,o=a.filters,s=a.display,c=a.details;if(t.loading&&!t.totals)return ie(P`<div class="usage-page">${lr(n)}</div>`,{wide:!0});let l=r.chartMode===`tokens`,u=n.query.trim().length>0,d=n.queryDraft.trim().length>0,f=new Set(n.selectedDays),p=new Set(n.selectedSessions),m=t.sessions.toSorted((e,t)=>{let n=l?e.usage?.totalTokens??0:e.usage?.totalCost??0;return(l?t.usage?.totalTokens??0:t.usage?.totalCost??0)-n}),h=n.agentId?m.filter(e=>Y(e.agentId??``)===Y(n.agentId??``)):m,g=n.selectedHours.length>0?h.filter(e=>Ht(e,n.selectedHours,n.timeZone)):h,_=ut(g,n.query),v=e=>f.size===0?!0:e.usage?.activityDates?.length?e.usage.activityDates.some(e=>f.has(e)):!!(e.updatedAt&&f.has(jn(e.updatedAt,n.timeZone))),y=_.sessions.filter(v),b=_.warnings,x=cn(h,t.aggregates),S=dn(n.queryDraft,x),C=Ze(n.queryDraft),w=e=>{let t=Y(e);return C.filter(e=>Y(e.key??``)===t).map(e=>e.value).filter(Boolean)},T=n.selectedSessions.length===1?t.sessions.find(e=>e.key===n.selectedSessions[0])??y.find(e=>e.key===n.selectedSessions[0]):null,E=p.size?_.sessions.filter(e=>p.has(e.key)):_.sessions,D=E.filter(v),O=p.size>0||u||n.selectedHours.length>0||!!n.agentId,k=O||f.size>0,A=e=>{let t=yt();for(let n of e)n&&bt(t,n);return t},j=O?(()=>{let e=new Map;for(let t of E)for(let n of t.usage?.dailyBreakdown??[]){let t=e.get(n.date)??yt();bt(t,n),e.set(n.date,t)}return Array.from(e,([e,t])=>({date:e,...t})).toSorted((e,t)=>e.date.localeCompare(t.date))})():t.costDaily,M=f.size?A(j.filter(e=>f.has(e.date))):O?A(D.map(e=>e.usage)):t.totals,N=D.length,F=h.length,L=k?tn(D):tn([],t.aggregates),R=t.sessionsLimitReached&&!k,z=R?A(D.map(e=>e.usage)):M,B=R?tn(D):L,ee=k?I:bn(t.costDaily,n.startDate,n.endDate),V=nn(D,z,B),te=!t.loading&&!t.error&&t.sessions.length===0&&(t.totals?.totalTokens??0)===0,H=(z?.missingCostEntries??0)>0||(z?z.totalTokens>0&&z.totalCost===0&&z.input+z.output+z.cacheRead+z.cacheWrite>0:!1),W=[{label:U(`usage.presets.today`),days:1},{label:U(`usage.presets.last7d`),days:7},{label:U(`usage.presets.last30d`),days:30},{label:U(`usage.presets.last90d`),days:90},{label:U(`usage.presets.last1y`),days:365}],ne=e=>{let t=new Date,n=new Date;n.setDate(n.getDate()-(e-1)),o.onStartDateChange(Gt(n)),o.onEndDateChange(Gt(t))},re=()=>{o.onStartDateChange(`1970-01-01`),o.onEndDateChange(Gt(new Date))},G=(e,t,r)=>{if(r.length===0)return I;let i=w(e),a=new Set(i.map(e=>Y(e))),s=r.length>0&&r.every(e=>a.has(Y(e))),c=i.length;return P`
      <wa-dropdown
        class="usage-filter-select"
        placement="bottom-start"
        @wa-select=${t=>{t.preventDefault();let a=t.detail.item.value;if(a===`command:select-all`){o.onQueryDraftChange(mn(n.queryDraft,e,r));return}if(a===`command:clear`){o.onQueryDraftChange(mn(n.queryDraft,e,[]));return}if(a?.startsWith(`option:`)){let r=decodeURIComponent(a.slice(7));o.onQueryDraftChange(mn(n.queryDraft,e,t.detail.item.checked?[...i,r]:i.filter(e=>Y(e)!==Y(r))))}}}
      >
        <button slot="trigger" type="button" class="usage-filter-trigger">
          <span>${t}</span>
          ${c>0?P`<span class="settings-count">${c}</span>`:P` <span class="settings-count">${U(`usage.filters.all`)}</span> `}
        </button>
        <wa-dropdown-item value="command:select-all" ?disabled=${s}>
          ${U(`usage.filters.selectAll`)}
        </wa-dropdown-item>
        <wa-dropdown-item value="command:clear" ?disabled=${c===0}>
          ${U(`usage.filters.clear`)}
        </wa-dropdown-item>
        <div class="session-menu__separator" role="separator"></div>
        ${r.map(e=>{let t=a.has(Y(e));return P`
            <wa-dropdown-item
              class="usage-filter-option"
              type="checkbox"
              value=${`option:${encodeURIComponent(e)}`}
              .checked=${t}
            >
              ${e}
            </wa-dropdown-item>
          `})}
      </wa-dropdown>
    `},ae=Gt(new Date);return ie(P`
      <div class="usage-page">
        <section class="settings-section">
          <div class="settings-section__header">
            <h2 class="settings-section__heading">${U(`usage.filters.title`)}</h2>
            <div class="settings-section__actions">
              ${t.loading?cr(U(`usage.loading.badge`)):I}
              ${te?P`<span class="usage-query-hint">${U(`usage.empty.hint`)}</span>`:I}
            </div>
          </div>
          <div
            class="settings-group usage-panel usage-header ${r.headerPinned?`pinned`:``}"
          >
            <div class="usage-header-row">
              <div class="usage-header-metrics">
                ${M?P`
                        <span class="usage-metric-badge">
                          <strong>${K(M.totalTokens)}</strong>
                          ${U(`usage.metrics.tokens`)}
                        </span>
                        <span class="usage-metric-badge">
                          <strong>${q(M.totalCost)}</strong>
                          ${U(`usage.metrics.cost`)}
                        </span>
                        <span class="usage-metric-badge">
                          <strong>${N}</strong>
                          ${U(N===1?`usage.metrics.session`:`usage.metrics.sessions`)}
                        </span>
                      `:I}
                <button
                  class="btn btn--sm usage-pin-btn ${r.headerPinned?`active`:``}"
                  @click=${o.onToggleHeaderPinned}
                >
                  ${r.headerPinned?U(`usage.filters.pinned`):U(`usage.filters.pin`)}
                </button>
                <wa-dropdown
                  class="usage-export-menu"
                  placement="bottom-end"
                  @wa-select=${e=>{switch(e.detail.item.value){case`sessions-csv`:le(`openclaw-usage-sessions-${ae}.csv`,ln(y),`text/csv;charset=utf-8`);break;case`daily-csv`:le(`openclaw-usage-daily-${ae}.csv`,un(j),`text/csv;charset=utf-8`);break;case`json`:s.onExportJson({totals:M,sessions:y,daily:j,aggregates:L});break;case void 0:}}}
                >
                  <button
                    slot="trigger"
                    type="button"
                    class="btn btn--sm"
                    aria-busy=${t.exporting}
                  >
                    ${t.exporting?U(`common.loading`):U(`usage.export.label`)} ▾
                  </button>
                  <wa-dropdown-item value="sessions-csv" ?disabled=${y.length===0}>
                    ${U(`usage.export.sessionsCsv`)}
                  </wa-dropdown-item>
                  <wa-dropdown-item value="daily-csv" ?disabled=${j.length===0}>
                    ${U(`usage.export.dailyCsv`)}
                  </wa-dropdown-item>
                  <wa-dropdown-item
                    value="json"
                    ?disabled=${t.exporting||t.loading||y.length===0&&j.length===0}
                  >
                    ${U(`usage.export.json`)}
                  </wa-dropdown-item>
                </wa-dropdown>
              </div>
            </div>

            <div class="usage-header-row">
              <div class="usage-controls">
                ${yn(n.selectedDays,n.selectedHours,n.selectedSessions,t.sessions,o.onClearDays,o.onClearHours,o.onClearSessions,o.onClearFilters)}
                <div class="usage-presets">
                  ${W.map(e=>P`
                      <button class="btn btn--sm" @click=${()=>ne(e.days)}>
                        ${e.label}
                      </button>
                    `)}
                  <button class="btn btn--sm" @click=${re}>
                    ${U(`usage.presets.all`)}
                  </button>
                </div>
                <div class="usage-date-range">
                  <input
                    class="usage-date-input"
                    type="date"
                    .value=${n.startDate}
                    title=${U(`usage.filters.startDate`)}
                    aria-label=${U(`usage.filters.startDate`)}
                    @change=${e=>o.onStartDateChange(e.target.value)}
                  />
                  <span class="usage-separator">${U(`usage.filters.to`)}</span>
                  <input
                    class="usage-date-input"
                    type="date"
                    .value=${n.endDate}
                    title=${U(`usage.filters.endDate`)}
                    aria-label=${U(`usage.filters.endDate`)}
                    @change=${e=>o.onEndDateChange(e.target.value)}
                  />
                </div>
                <select
                  class="usage-select"
                  title=${U(`usage.filters.timeZone`)}
                  aria-label=${U(`usage.filters.timeZone`)}
                  .value=${n.timeZone}
                  @change=${e=>o.onTimeZoneChange(e.target.value)}
                >
                  <option value="local">${U(`usage.filters.timeZoneLocal`)}</option>
                  <option value="utc">${U(`usage.filters.timeZoneUtc`)}</option>
                </select>
                ${se({mode:`buttons`,variant:`accent`,ariaPressed:!1,value:n.scope,onChange:o.onScopeChange,onReselect:o.onScopeChange,options:[{value:`instance`,label:U(`usage.scope.instance`),title:U(`usage.scope.instanceHint`)},{value:`family`,label:U(`usage.scope.family`),title:U(`usage.scope.familyHint`)}]})}
                ${se({mode:`buttons`,variant:`accent`,ariaPressed:!1,value:l?`tokens`:`cost`,onChange:s.onChartModeChange,onReselect:s.onChartModeChange,options:[{value:`tokens`,label:U(`usage.metrics.tokens`)},{value:`cost`,label:U(`usage.metrics.cost`)}]})}
                <button
                  class="btn btn--sm primary"
                  @click=${o.onRefresh}
                  ?disabled=${t.loading}
                >
                  ${U(`common.refresh`)}
                </button>
              </div>
            </div>

            <div class="usage-query-section">
              <div class="usage-query-bar">
                <input
                  class="usage-query-input"
                  type="text"
                  .value=${n.queryDraft}
                  placeholder=${U(`usage.query.placeholder`)}
                  @input=${e=>o.onQueryDraftChange(e.target.value)}
                  @keydown=${e=>{e.key===`Enter`&&(e.preventDefault(),o.onApplyQuery())}}
                />
                <div class="usage-query-actions">
                  <button
                    class="btn btn--sm"
                    @click=${o.onApplyQuery}
                    ?disabled=${t.loading||!d&&!u}
                  >
                    ${U(`usage.query.apply`)}
                  </button>
                  ${d||u?P`
                          <button class="btn btn--sm" @click=${o.onClearQuery}>
                            ${U(`usage.filters.clear`)}
                          </button>
                        `:I}
                  <span class="usage-query-hint">
                    ${u?U(`usage.query.matching`,{shown:String(y.length),total:String(F)}):U(`usage.query.inRange`,{total:String(F)})}
                  </span>
                </div>
              </div>
              <div class="usage-filter-row">
                ${G(`channel`,U(`usage.filters.channel`),x.channel)}
                ${G(`provider`,U(`usage.filters.provider`),x.provider)}
                ${G(`model`,U(`usage.filters.model`),x.model)}
                ${G(`tool`,U(`usage.filters.tool`),x.tool)}
                <span class="usage-query-hint">${U(`usage.query.tip`)}</span>
              </div>
              ${C.length>0?P`
                      <div class="usage-query-chips">
                        ${C.map(e=>{let t=e.raw;return P`
                            <span class="usage-query-chip">
                              ${t}
                              <openclaw-tooltip .content=${U(`usage.filters.remove`)}>
                                <button
                                  aria-label=${U(`usage.filters.remove`)}
                                  @click=${()=>o.onQueryDraftChange(pn(n.queryDraft,t))}
                                >
                                  ×
                                </button>
                              </openclaw-tooltip>
                            </span>
                          `})}
                      </div>
                    `:I}
              ${S.length>0?P`
                      <div class="usage-query-suggestions">
                        ${S.map(e=>P`
                            <button
                              class="usage-query-suggestion"
                              @click=${()=>o.onQueryDraftChange(fn(n.queryDraft,e.value))}
                            >
                              ${e.label}
                            </button>
                          `)}
                      </div>
                    `:I}
              ${b.length>0?P`
                      <div class="callout warning usage-callout usage-callout--tight">
                        ${b.join(` · `)}
                      </div>
                    `:I}
            </div>

            ${t.error?P`<div class="callout danger usage-callout">${t.error}</div>`:I}
            ${t.cacheRefresh===`complete`?I:P`
                    <div
                      class="callout warning usage-callout usage-cache-warning"
                      role="status"
                      aria-live="polite"
                    >
                      ${U(t.cacheRefresh===`exhausted`?`usage.cacheStatus.paused`:`usage.cacheStatus.warning`)}
                    </div>
                  `}
            ${t.sessionsLimitReached?P`
                    <div class="callout warning usage-callout">
                      ${U(`usage.sessions.limitReached`)}
                    </div>
                  `:I}
          </div>
        </section>

        ${dr(t.providerUsage,t.providerUsageUnavailable,t.providerUsageStalled)}
        ${te?ur(o.onRefresh):P`
                ${Tn(z,B,V,H,n.selectedDays.length===0,Pt(D,n.timeZone),N,F)}
                ${tr(j,n.startDate,n.endDate)}
                ${Wt(D,n.timeZone,n.selectedHours,o.onSelectHour)}

                <div class="usage-grid">
                  <div class="usage-grid-column">
                    <div class="settings-group usage-panel usage-left-card">
                      ${ee}
                      ${xn(j,n.selectedDays,r.chartMode,r.dailyChartMode,s.onDailyChartModeChange,o.onSelectDay)}
                      ${M?Sn(M,r.chartMode):I}
                    </div>
                    ${En(y,n.selectedSessions,n.selectedDays,l,r.sessionSort,r.sessionSortDir,r.recentSessions,r.sessionsTab,c.onSelectSession,s.onSessionSortChange,s.onSessionSortDirChange,s.onSessionsTabChange,r.visibleColumns,F,o.onClearSessions)}
                  </div>
                  ${T?P`<div class="usage-grid-column">
                          ${In(T,i.timeSeries,i.timeSeriesLoading,i.timeSeriesStatus,i.timeSeriesMode,c.onTimeSeriesModeChange,i.timeSeriesBreakdownMode,c.onTimeSeriesBreakdownChange,i.timeSeriesCursorStart,i.timeSeriesCursorEnd,c.onTimeSeriesCursorRangeChange,n.startDate,n.endDate,n.selectedDays,n.timeZone,i.sessionLogs,i.sessionLogsLoading,i.sessionLogsStatus,i.sessionLogsExpanded,c.onToggleSessionLogsExpanded,i.logFilters,c.onLogFilterRolesChange,c.onLogFilterToolsChange,c.onLogFilterHasToolsChange,c.onLogFilterQueryChange,c.onLogFilterClear,i.context,r.contextExpanded,c.onToggleContextExpanded,o.onClearSessions)}
                        </div>`:I}
                </div>
              `}
      </div>
    `,{wide:!0})}function pr(){return(pr=e((()=>{j(),ke(),ge(),W(),pe(),H(),dt(),rn(),hn(),Kn(),sr(),Dn()})))()}var $;function mr(){return(mr=e((()=>{o(),A(),ee(),g(),k(),Ae(),_e(),C(),h(),He(),mt(),dt(),gt(),De(),Fe(),vt(),pr(),$=class extends f{constructor(...e){super(...e),this.usageResult=null,this.usageCostSummary=null,this.providerUsageSummary=null,this.providerUsageUnavailable=!1,this.providerUsageIncomplete=!1,this.usageError=null,this.usageStartDate=Ue(),this.usageEndDate=Ue(),this.usageLoadStartDate=this.usageStartDate,this.usageLoadEndDate=this.usageEndDate,this.usageScope=`family`,this.usageAgentId=null,this.usageSelectedSessions=[],this.usageSelectedDays=[],this.usageSelectedHours=[],this.usageChartMode=`tokens`,this.usageDailyChartMode=`by-type`,this.usageTimeSeriesMode=`per-turn`,this.usageTimeSeriesBreakdownMode=`by-type`,this.usageTimeSeriesCursorStart=null,this.usageTimeSeriesCursorEnd=null,this.usageSessionLogsExpanded=!1,this.usageQuery=``,this.usageQueryDraft=``,this.usageSessionSort=`recent`,this.usageSessionSortDir=`desc`,this.usageRecentSessions=[],this.usageTimeZone=`local`,this.usageContextExpanded=!1,this.usageHeaderPinned=!1,this.usageSessionsTab=`all`,this.usageVisibleColumns=[..._t],this.usageLogFilterRoles=[],this.usageLogFilterTools=[],this.usageLogFilterHasTools=!1,this.usageLogFilterQuery=``,this.dateDebounceTimer=null,this.queryDebounceTimer=null,this.connectionEpoch={},this.routeDataInitialized=!1,this.routeDataEnabled=!0,this.refreshPolicy=new Oe({isLoading:()=>this.usageLoading,reload:e=>{this.clearDateDebounce();let t=e===`manual`&&this.usageSelectedSessions.length===1?this.usageSelectedSessions[0]:void 0;return this.loadUsage(t)},onIncompleteUsageExhausted:()=>this.requestUpdate()}),this.gateway=new ve(this,{getGateway:()=>this.context?.gateway,onIdentityChange:()=>this.resetForClientChange(),invalidateRequests:e=>{e.snapshot.phase!==`connected`&&(this.refreshPolicy.interrupt(),this.usageRequest.cancel(),this.details.cancel(),this.usageExportRequest.cancel())},onSnapshot:e=>this.handleGatewaySnapshot(e),onPageActivation:()=>this.refreshPolicy.request(`focus`)}),this.observeAgentScope=ce(e=>{this.routeDataInitialized&&this.usageAgentId!==e&&(this.usageAgentId=e,this.clearSelectionsAndDetails(),this.resetProviderUsage(),this.refreshPolicy.request(`manual`)),this.requestUpdate()}),this.usageRequest=ze(this,{task:async([e,t],{signal:n})=>(this.refreshPolicy.beginLoad(),{epoch:this.connectionEpoch,refreshSessionKey:t,snapshot:await Pe(e,{startDate:this.usageLoadStartDate,endDate:this.usageLoadEndDate,scope:this.usageScope,timeZone:this.usageTimeZone,agentId:c(this.usageAgentId??``)||void 0},n)}),onComplete:e=>{let t=e.snapshot;if(t.ok){this.usageResult=t.value.result,this.usageCostSummary=t.value.costSummary,this.usageError=null;let n=this.usageSelectedSessions.length===1?this.usageSelectedSessions[0]:void 0;n&&(e.refreshSessionKey===n?this.details.load(n):this.details.contextWeight.load(n))}else this.applyUsageError(t.error.cause);this.applyUsageLoadState(Ne(t),e.epoch,t.ok?void 0:null),this.refreshPolicy.flushPending()},onError:e=>{this.applyUsageError(e),this.applyUsageLoadState({state:`pending`},this.connectionEpoch,null),this.refreshPolicy.flushPending()}}),this.usageExportRequest=pt(this,this.gateway,()=>({startDate:this.usageLoadStartDate,endDate:this.usageLoadEndDate,scope:this.usageScope,timeZone:this.usageTimeZone,agentId:this.usageAgentId??void 0})),this.details=new Ve(this,this.gateway,()=>({startDate:this.usageStartDate,endDate:this.usageEndDate,scope:this.usageScope,timeZone:this.usageTimeZone,agentId:this.usageAgentId??void 0}),()=>this.usageResult?.sessions??[]),this.subscriptions=new p(this).effect(()=>this.context?.agentSelection,e=>this.observeAgentScope(e)).watch(()=>this.context?.agents,(e,t)=>e.subscribe(t))}willUpdate(e){e.has(`routeData`)&&(this.applyRouteData(),this.ensureInitialData())}disconnectedCallback(){this.subscriptions.clear(),this.clearDateDebounce(),this.clearQueryDebounce(),this.refreshPolicy.dispose(),this.usageRequest.cancel(),this.details.cancel(),this.usageExportRequest.cancel(),super.disconnectedCallback()}applyRouteData(){let e=this.routeData;if(!e||(this.routeDataInitialized=!0,!this.routeDataEnabled))return;if(!this.gateway.isRouteDataCurrent(e)){this.routeDataEnabled=!1;return}let t=this.context.agentSelection.state.scopeId;if(e.query.agentId!==t){this.usageAgentId=t,this.clearSelectionsAndDetails(),this.resetProviderUsage(),this.refreshPolicy.request(`manual`);return}this.usageStartDate=e.query.startDate,this.usageEndDate=e.query.endDate,this.usageLoadStartDate=e.query.startDate,this.usageLoadEndDate=e.query.endDate,this.usageScope=e.query.scope,this.usageTimeZone=e.query.timeZone,this.usageAgentId=e.query.agentId,this.usageResult=e.result,this.usageCostSummary=e.costSummary,this.applyUsageLoadState(e.providerUsage,this.connectionEpoch,e.loadedAtMs),this.usageError=e.error}ensureInitialData(){this.routeDataEnabled||!this.routeDataInitialized||!this.gateway.client||!this.gateway.connected||this.usageLoading||this.loadUsage()}resetForClientChange(){this.clearDateDebounce(),this.usageRequest.cancel(),this.routeDataInitialized&&(this.routeDataEnabled=!1),this.usageResult=null,this.usageCostSummary=null,this.resetProviderUsage(),this.usageError=null,this.usageAgentId=this.context.agentSelection.state.scopeId,this.clearSelectionsAndDetails()}resetProviderUsage(){this.providerUsageSummary=null,this.providerUsageUnavailable=!1,this.providerUsageIncomplete=!1,this.refreshPolicy.resetPayload()}applyUsageLoadState(e,t,n=Date.now()){if(e.state===`settled`){let t=e.result;this.providerUsageUnavailable=!t.ok,this.providerUsageIncomplete=!t.ok||Me(t.value),t.ok&&!this.providerUsageIncomplete&&(this.providerUsageSummary=t.value)}let r=this.providerUsageIncomplete||this.usageCacheIncomplete;this.refreshPolicy.setLastLoadedAtMs(e.state===`pending`?null:n,{incomplete:r,connection:t})}get usageCacheIncomplete(){return Ie(this.usageResult?.cacheStatus,this.usageCostSummary?.cacheStatus)}get providerUsageStalled(){return this.providerUsageIncomplete&&this.refreshPolicy.incompleteUsageExhausted}applyUsageError(e){let t=O(e);this.usageError=t?D(`usage`):We(e),t&&(this.usageResult=this.usageCostSummary=null)}get usageLoading(){return!this.routeDataInitialized||this.usageRequest.pending}loadUsage(e){let t=this.gateway.client;return!t||!this.gateway.connected?(this.refreshPolicy.markLoadDeferred(),Promise.resolve()):(this.routeDataEnabled=!1,this.usageLoadStartDate=this.usageStartDate,this.usageLoadEndDate=this.usageEndDate,this.usageError=null,this.usageRequest.run([t,e]))}clearSelections(){this.usageSelectedDays=[],this.usageSelectedHours=[],this.usageSelectedSessions=[]}clearDetails(){this.details.clear(),this.usageTimeSeriesCursorStart=null,this.usageTimeSeriesCursorEnd=null}clearSelectionsAndDetails(){this.usageExportRequest.cancel(),this.clearSelections(),this.clearDetails()}clearDateDebounce(){this.dateDebounceTimer!==null&&(window.clearTimeout(this.dateDebounceTimer),this.dateDebounceTimer=null)}scheduleUsageLoad(){this.clearDateDebounce(),this.refreshPolicy.resetPayload(),this.routeDataEnabled=!1,this.dateDebounceTimer=window.setTimeout(()=>{this.dateDebounceTimer=null,this.refreshPolicy.request(`manual`)},400)}handleGatewaySnapshot(e){if(!this.gateway.connected||!this.gateway.client)return;this.context.agents.ensureList(),(e.identityChanged||e.becameConnected)&&(this.connectionEpoch={},this.routeDataInitialized&&this.refreshPolicy.request(`reconnect`));let t=this.usageSelectedSessions.length===1?this.usageSelectedSessions[0]:void 0;if(e.becameAvailable&&t)for(let e of[this.details.timeSeries,this.details.sessionLogs,this.details.contextWeight])e.recover(t,e===this.details.contextWeight)}clearQueryDebounce(){this.queryDebounceTimer!==null&&(window.clearTimeout(this.queryDebounceTimer),this.queryDebounceTimer=null)}selectSession(e,t,n){if(this.clearDetails(),this.usageRecentSessions=[e,...this.usageRecentSessions.filter(t=>t!==e)].slice(0,8),this.usageSelectedSessions=Ke(this.usageSelectedSessions,e,n,t),this.usageSelectedSessions.length===1){let e=this.usageSelectedSessions[0];e&&this.details.load(e)}}render(){let e={data:{loading:this.usageLoading,exporting:this.usageExportRequest.pending,error:this.usageError,sessions:this.usageResult?.sessions??[],agents:this.context.agents.state.agentsList?.agents.map(e=>e.id).filter(Boolean)??[],sessionsLimitReached:(this.usageResult?.sessions.length??0)>=1e3,totals:this.usageResult?.totals??null,aggregates:this.usageResult?.aggregates??null,costDaily:this.usageCostSummary?.daily??[],cacheRefresh:this.usageCacheIncomplete?this.refreshPolicy.incompleteUsageExhausted?`exhausted`:`retrying`:`complete`,providerUsage:this.providerUsageSummary?.providers??[],providerUsageStalled:this.providerUsageStalled,providerUsageUnavailable:this.providerUsageUnavailable},filters:{startDate:this.usageStartDate,endDate:this.usageEndDate,scope:this.usageScope,selectedSessions:this.usageSelectedSessions,selectedDays:this.usageSelectedDays,selectedHours:this.usageSelectedHours,agentId:this.usageAgentId,query:this.usageQuery,queryDraft:this.usageQueryDraft,timeZone:this.usageTimeZone},display:{chartMode:this.usageChartMode,dailyChartMode:this.usageDailyChartMode,sessionSort:this.usageSessionSort,sessionSortDir:this.usageSessionSortDir,recentSessions:this.usageRecentSessions,sessionsTab:this.usageSessionsTab,visibleColumns:this.usageVisibleColumns,contextExpanded:this.usageContextExpanded,headerPinned:this.usageHeaderPinned},detail:{context:{weight:this.details.contextWeight.data,loading:this.details.contextWeight.loading,status:this.details.contextWeight.status},timeSeriesMode:this.usageTimeSeriesMode,timeSeriesBreakdownMode:this.usageTimeSeriesBreakdownMode,timeSeries:this.details.timeSeries.data,timeSeriesLoading:this.details.timeSeries.loading,timeSeriesStatus:this.details.timeSeries.status,timeSeriesCursorStart:this.usageTimeSeriesCursorStart,timeSeriesCursorEnd:this.usageTimeSeriesCursorEnd,sessionLogs:this.details.sessionLogs.data,sessionLogsLoading:this.details.sessionLogs.loading,sessionLogsStatus:this.details.sessionLogs.status,sessionLogsExpanded:this.usageSessionLogsExpanded,logFilters:{roles:this.usageLogFilterRoles,tools:this.usageLogFilterTools,hasTools:this.usageLogFilterHasTools,query:this.usageLogFilterQuery}},callbacks:{filters:{onStartDateChange:e=>{this.usageStartDate=e,this.clearSelectionsAndDetails(),this.scheduleUsageLoad()},onEndDateChange:e=>{this.usageEndDate=e,this.clearSelectionsAndDetails(),this.scheduleUsageLoad()},onScopeChange:e=>{this.usageScope=e,this.clearSelectionsAndDetails(),this.refreshPolicy.request(`manual`)},onAgentChange:e=>{this.context.agentSelection.setScope(e)},onRefresh:()=>this.refreshPolicy.request(`manual`),onTimeZoneChange:e=>{this.usageTimeZone=e,this.clearSelectionsAndDetails(),this.refreshPolicy.request(`manual`)},onToggleHeaderPinned:()=>this.usageHeaderPinned=!this.usageHeaderPinned,onSelectHour:(e,t)=>{this.usageSelectedHours=Ge(this.usageSelectedHours,e,Array.from({length:24},(e,t)=>t),t,!0)},onQueryDraftChange:e=>{this.usageQueryDraft=e,this.clearQueryDebounce(),this.queryDebounceTimer=window.setTimeout(()=>{this.usageQuery=this.usageQueryDraft,this.queryDebounceTimer=null},250)},onApplyQuery:()=>{this.clearQueryDebounce(),this.usageQuery=this.usageQueryDraft},onClearQuery:()=>{this.clearQueryDebounce(),this.usageQueryDraft=``,this.usageQuery=``},onSelectDay:(e,t)=>{this.usageSelectedDays=Ge(this.usageSelectedDays,e,(this.usageCostSummary?.daily??[]).map(e=>e.date),t,!1)},onClearDays:()=>this.usageSelectedDays=[],onClearHours:()=>this.usageSelectedHours=[],onClearSessions:()=>{this.usageSelectedSessions=[],this.clearDetails()},onClearFilters:()=>this.clearSelectionsAndDetails()},display:{onExportJson:e=>{this.usageExportRequest.run(e)},onChartModeChange:e=>this.usageChartMode=e,onDailyChartModeChange:e=>this.usageDailyChartMode=e,onSessionSortChange:e=>this.usageSessionSort=e,onSessionSortDirChange:e=>this.usageSessionSortDir=e,onSessionsTabChange:e=>this.usageSessionsTab=e,onToggleColumn:e=>{this.usageVisibleColumns=this.usageVisibleColumns.includes(e)?this.usageVisibleColumns.filter(t=>t!==e):[...this.usageVisibleColumns,e]}},details:{onToggleContextExpanded:()=>this.usageContextExpanded=!this.usageContextExpanded,onToggleSessionLogsExpanded:()=>this.usageSessionLogsExpanded=!this.usageSessionLogsExpanded,onLogFilterRolesChange:e=>{this.usageLogFilterRoles=e},onLogFilterToolsChange:e=>{this.usageLogFilterTools=e},onLogFilterHasToolsChange:e=>{this.usageLogFilterHasTools=e},onLogFilterQueryChange:e=>{this.usageLogFilterQuery=e},onLogFilterClear:()=>{this.usageLogFilterRoles=[],this.usageLogFilterTools=[],this.usageLogFilterHasTools=!1,this.usageLogFilterQuery=``},onSelectSession:(e,t,n)=>this.selectSession(e,t,n),onTimeSeriesModeChange:e=>{this.usageTimeSeriesMode=e},onTimeSeriesBreakdownChange:e=>{this.usageTimeSeriesBreakdownMode=e},onTimeSeriesCursorRangeChange:(e,t)=>{this.usageTimeSeriesCursorStart=e,this.usageTimeSeriesCursorEnd=t}}}};return ht(this.context,this.usageResult,fr(e))}},n([i({context:V,subscribe:!0})],$.prototype,`context`,void 0),n([L({attribute:!1})],$.prototype,`routeData`,void 0),n([F()],$.prototype,`usageResult`,void 0),n([F()],$.prototype,`usageCostSummary`,void 0),n([F()],$.prototype,`providerUsageSummary`,void 0),n([F()],$.prototype,`providerUsageUnavailable`,void 0),n([F()],$.prototype,`providerUsageIncomplete`,void 0),n([F()],$.prototype,`usageError`,void 0),n([F()],$.prototype,`usageStartDate`,void 0),n([F()],$.prototype,`usageEndDate`,void 0),n([F()],$.prototype,`usageLoadStartDate`,void 0),n([F()],$.prototype,`usageLoadEndDate`,void 0),n([F()],$.prototype,`usageScope`,void 0),n([F()],$.prototype,`usageAgentId`,void 0),n([F()],$.prototype,`usageSelectedSessions`,void 0),n([F()],$.prototype,`usageSelectedDays`,void 0),n([F()],$.prototype,`usageSelectedHours`,void 0),n([F()],$.prototype,`usageChartMode`,void 0),n([F()],$.prototype,`usageDailyChartMode`,void 0),n([F()],$.prototype,`usageTimeSeriesMode`,void 0),n([F()],$.prototype,`usageTimeSeriesBreakdownMode`,void 0),n([F()],$.prototype,`usageTimeSeriesCursorStart`,void 0),n([F()],$.prototype,`usageTimeSeriesCursorEnd`,void 0),n([F()],$.prototype,`usageSessionLogsExpanded`,void 0),n([F()],$.prototype,`usageQuery`,void 0),n([F()],$.prototype,`usageQueryDraft`,void 0),n([F()],$.prototype,`usageSessionSort`,void 0),n([F()],$.prototype,`usageSessionSortDir`,void 0),n([F()],$.prototype,`usageRecentSessions`,void 0),n([F()],$.prototype,`usageTimeZone`,void 0),n([F()],$.prototype,`usageContextExpanded`,void 0),n([F()],$.prototype,`usageHeaderPinned`,void 0),n([F()],$.prototype,`usageSessionsTab`,void 0),n([F()],$.prototype,`usageVisibleColumns`,void 0),n([F()],$.prototype,`usageLogFilterRoles`,void 0),n([F()],$.prototype,`usageLogFilterTools`,void 0),n([F()],$.prototype,`usageLogFilterHasTools`,void 0),n([F()],$.prototype,`usageLogFilterQuery`,void 0),customElements.get(`openclaw-usage-page`)||customElements.define(`openclaw-usage-page`,$)})))()}mr();
//# sourceMappingURL=usage-page-TqWWFswm.js.map