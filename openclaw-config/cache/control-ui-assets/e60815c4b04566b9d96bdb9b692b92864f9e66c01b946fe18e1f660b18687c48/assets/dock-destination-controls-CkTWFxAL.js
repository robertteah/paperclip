import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{K as t,X as n,q as r}from"./lit-runtime-vxhGQLC6.js";import{Nt as i}from"./control-ui-core-uEI6aN5p.js";function a(e){let t=e.destinations.filter(t=>t.dock!==e.current);return t.length===0?r:n`<span class=${e.groupClass} role="group" aria-label=${e.groupLabel}>
    ${t.map(t=>n`<openclaw-tooltip .content=${t.label}>
        <button
          class=${`rail-header__action ${t.className??``}`}
          type="button"
          aria-label=${t.label}
          @click=${()=>e.onSelect(t.dock)}
        >
          ${t.icon}
        </button>
      </openclaw-tooltip>`)}
  </span>`}function o(){return(o=e((()=>{t(),i()})))()}export{a as n,o as t};
//# sourceMappingURL=dock-destination-controls-CkTWFxAL.js.map