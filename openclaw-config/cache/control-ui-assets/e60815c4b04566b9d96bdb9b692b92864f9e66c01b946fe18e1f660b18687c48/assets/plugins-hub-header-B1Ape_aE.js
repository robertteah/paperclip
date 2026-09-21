import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{K as t,X as n}from"./lit-runtime-vxhGQLC6.js";import{Rn as r,Tn as i,zn as a}from"./control-ui-core-CaKBexnk.js";import{Bt as o,Gt as s}from"./control-ui-core-uEI6aN5p.js";import{Et as c,wt as l}from"./control-ui-boot-shared-Cyt1Zyts.js";import{n as u,t as d}from"./hub-tabs-DuEhaWau.js";function f(){return(f=e((()=>{})))()}function p(){return[{value:`installed`,label:s(`pluginsPage.installedTab`)},{value:`discover`,label:s(`pluginsPage.discoverTab`)},{value:`skills`,label:s(`tabs.skills`)},{value:`workshop`,label:s(`pluginsPage.workshopTab`)}]}function m(e){return u({id:`plugins`,active:e.active,tabs:p(),ariaLabel:s(`pluginsPage.hubTablistLabel`),panelId:h,className:`plugins-tabs`,onSelect:e.onSelect})}var h;function g(){return(g=e((()=>{d(),o(),h=`plugins-hub-panel`})))()}function _(e){return n`
    <section
      class="content-header content-header--settings content-header--page hub-page-header plugins-hub-header"
    >
      <div class="hub-page-header__title">
        <h1 class="page-title">${a(`plugins`)}</h1>
        <div class="page-subtitle">
          ${r(`plugins`)} ${c(v)}
        </div>
      </div>
      <div class="hub-page-header__tabs">
        ${m({active:e.active,onSelect:e.onSelect})}
      </div>
    </section>
  `}var v;function y(){return(y=e((()=>{t(),i(),l(),g(),v=`https://docs.openclaw.ai/plugins/manage-plugins`})))()}export{f as a,g as i,_ as n,h as r,y as t};
//# sourceMappingURL=plugins-hub-header-B1Ape_aE.js.map