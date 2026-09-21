import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{K as t,X as n,q as r}from"./lit-runtime-vxhGQLC6.js";import{io as i,to as a}from"./control-ui-boot-shared-Cyt1Zyts.js";import{n as o,t as s}from"./select-picker-DnWtx1hT.js";function c(e){let t=`__openclaw_custom_model__`,a=new Set([e.value,...e.options.map(e=>e.value)]);for(;a.has(t);)t+=`_`;let s=e.options.some(t=>t.value===e.value),c=[...e.options.map(e=>({...e,description:e.detail})),...e.custom?[{value:t,label:e.custom.label}]:[]];return n`
    <div class="model-picker">
      ${o({id:e.id,label:e.label,value:e.value,options:c,disabled:e.disabled,title:e.title,placement:e.placement,className:`model-picker__select ${e.className??``}`,onOpen:e.onOpen,renderLeading:e=>e.provider?i(e.provider,{className:`model-picker__provider-icon`}):r,onChange:e.onChange,onChangeTarget:(n,r)=>{let i=r.closest(`.model-picker`)?.querySelector(`.model-picker__custom`);if(n===t&&i){i.hidden=!1,queueMicrotask(()=>i.focus());return}i&&(i.hidden=!0),e.onChange(n)}})}
      ${e.custom?n`<input
              id=${e.custom.id??r}
              class="settings-input model-picker__custom"
              aria-label=${e.custom.label}
              aria-invalid=${e.custom.invalid?`true`:`false`}
              aria-describedby=${e.custom.describedBy??r}
              placeholder=${e.custom.placeholder??``}
              .value=${e.value}
              ?hidden=${s}
              ?disabled=${e.disabled}
              @input=${t=>{e.custom?.commit!==`change`&&e.onChange(t.currentTarget.value)}}
              @change=${t=>{e.custom?.commit===`change`&&e.onChange(t.currentTarget.value)}}
            />`:r}
    </div>
  `}function l(){return(l=e((()=>{t(),a(),s()})))()}export{c as n,l as t};
//# sourceMappingURL=model-picker-i-vL0MMG.js.map