import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{ia as t}from"./control-ui-foundation-DMb6IeIq.js";import{Ds as n,Os as r,Ys as i,ks as a}from"./control-ui-core-DzidtL-P.js";import{K as o,X as s,q as c}from"./lit-runtime-vxhGQLC6.js";import{Bt as l,Ft as u,Gt as d,It as f}from"./control-ui-core-uEI6aN5p.js";import{V as p}from"./control-ui-boot-new-DeGMjctK.js";function m(e){let n=e.selectedId??e.selection.state.scopeId??``,i=n?t(n):``,o=e.allowAll!==!1,l=n=>e.agents.some(e=>e.kind===`system`&&t(e.id)===n),f=r(e.agents);if(f.length<=1)return c;let p=new Map(f.map(e=>{let n=t(e.id);return[n,n===e.id?e:{...e,id:n}]}));for(let n of e.additionalAgentIds??[]){if(!n.trim())continue;let e=t(n);!l(e)&&!p.has(e)&&p.set(e,{id:e})}i&&!l(i)&&!p.has(i)&&p.set(i,{id:i});let m=[...p.values()].toSorted((e,t)=>a(e).localeCompare(a(t))),h=l(i)?o?``:m[0]?.id??``:i,g=[...o?[{value:``,label:d(`agentScope.allAgents`),icon:u.users}]:[],...m.map(e=>({value:e.id,label:a(e),agent:e}))];return s`
    <div class="agent-scope-control">
      <openclaw-agent-select
        .options=${g}
        .value=${h}
        .accessibleLabel=${d(`agentScope.label`)}
        .menuLabel=${d(`agentScope.label`)}
        .onSelect=${t=>o?e.selection.setScope(t||null):e.selection.set(t||null)}
      ></openclaw-agent-select>
    </div>
  `}function h(){return(h=e((()=>{o(),l(),n(),i(),p(),f()})))()}export{m as n,h as t};
//# sourceMappingURL=agent-scope-control-CqnA-t3U.js.map