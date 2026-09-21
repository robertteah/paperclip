import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{K as t,X as n,q as r}from"./lit-runtime-vxhGQLC6.js";import{Bt as i,Gt as a}from"./control-ui-core-uEI6aN5p.js";import{n as o,t as s}from"./hub-tabs-DuEhaWau.js";function c(){return[{value:`sessions`,label:a(`tabs.sessions`)},{value:`worktrees`,label:a(`tabs.worktrees`)}]}function l(e){return o({id:`sessions`,active:e.active,tabs:c(),ariaLabel:a(`sessionsPage.hubTablistLabel`),panelId:`sessions-hub-panel`,onSelect:e.onSelect})}function u(){return(u=e((()=>{i(),s()})))()}function d(e){return n`
    <section
      class="content-header content-header--settings content-header--page hub-page-header sessions-hub-header"
    >
      <div class="hub-page-header__title">
        <div class="page-title">${e.title}</div>
        ${e.subtitle?n`<div class="page-subtitle">${e.subtitle}</div>`:r}
      </div>
      <div class="hub-page-header__tabs">
        ${l({active:e.active,onSelect:e.onSelect})}
      </div>
      <div class="hub-page-header__actions">${e.actions??r}</div>
    </section>
  `}function f(){return(f=e((()=>{t(),u()})))()}export{d as n,f as t};
//# sourceMappingURL=sessions-hub-header-CcnzhSlV.js.map