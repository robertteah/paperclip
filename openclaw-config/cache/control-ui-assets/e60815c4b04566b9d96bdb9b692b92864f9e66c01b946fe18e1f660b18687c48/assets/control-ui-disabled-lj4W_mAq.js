import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t}from"./control-ui-core-DzidtL-P.js";import{K as n,X as r}from"./lit-runtime-vxhGQLC6.js";import{cr as i,hr as a}from"./control-ui-core-CaKBexnk.js";import{Bt as o,Gt as s}from"./control-ui-core-uEI6aN5p.js";function c(e,n,i){if(e?.plugins?.errors.some(e=>e.pluginId===n&&e.code===`custom-plugin-ui-disabled`))return r`<div class="card-title">${s(`pluginUi.customPluginsDisabled`)}</div>
    <p class="card-sub">${s(`pluginUi.customPluginsEnableHint`)}</p>
    <a
      class="btn btn--sm"
      href=${a(`labs`,e.basePath)}
      @click=${n=>{t(n)&&(n.preventDefault(),i?.(),e.navigate(`labs`))}}
      >${s(`pluginUi.openLabs`)}</a
    >`}function l(){return(l=e((()=>{n(),i(),o()})))()}export{c as n,l as t};
//# sourceMappingURL=control-ui-disabled-lj4W_mAq.js.map