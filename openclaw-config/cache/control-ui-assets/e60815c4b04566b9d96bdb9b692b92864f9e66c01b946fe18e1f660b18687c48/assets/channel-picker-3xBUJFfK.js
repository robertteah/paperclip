import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{K as t,X as n,q as r}from"./lit-runtime-vxhGQLC6.js";import{a as i,c as a,i as o,s}from"./presentation-aT_8EXkt.js";import{n as c,t as l}from"./select-picker-DnWtx1hT.js";function u(){return(u=e((()=>{})))()}function d(e,t,r,o={}){let c=r===`picker`?`tile`:r,l=o.pluginIconUrl??(o.preferPluginIcon?null:i(e)),[u,d]=l?[``,``]:s(e),f=`${r===`picker`?`--channels-art-size:24px;`:``}${l?``:`--channels-art-a:${u};--channels-art-b:${d}`}`,p=r===`cover`&&o.pluginIconUrl?` channels-cover--icon`:``;return n`<span
    class=${`channels-${c}${p}${l?``:` channels-${c}--fallback`}`}
    style=${f}
    aria-hidden="true"
  >
    ${l?n`<img src=${l} alt="" loading="lazy" decoding="async" />`:n`<span>${a(t)}</span>`}
  </span>`}function f(){return(f=e((()=>{t(),o()})))()}function p(e){return c({...e,className:`channel-picker`,renderLeading:e=>e.kind===`neutral`?r:d(e.value,e.label,`picker`)})}function m(){return(m=e((()=>{t(),f(),l()})))()}export{u as a,d as i,p as n,f as r,m as t};
//# sourceMappingURL=channel-picker-3xBUJFfK.js.map