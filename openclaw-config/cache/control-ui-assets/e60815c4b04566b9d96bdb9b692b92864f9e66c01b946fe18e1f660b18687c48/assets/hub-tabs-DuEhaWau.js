import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{K as t,X as n,_ as r,b as i,q as a}from"./lit-runtime-vxhGQLC6.js";import{_n as o,gn as s}from"./control-ui-boot-chat-pu3gR1ly.js";function c(e,t,n){if(!n||f?.hubId!==e||f.tab!==t)return;let r=f;if(Date.now()-r.at>u){f=null;return}window.setTimeout(()=>{if(f!==r)return;f=null;let e=document.activeElement;n.isConnected&&Date.now()-r.at<=u&&(e===r.source||e===document.body||e===document.documentElement)&&n.focus()},0)}function l(e){let t=`hub-tabs hub-tabs--${e.variant??`primary`} ${e.id}-hub-tabs${e.className?` ${e.className}`:``}`,r=e.active===null?e.tabs.find(e=>!e.disabled)?.value:null;return n`
    <wa-tab-group
      class=${t}
      aria-label=${e.ariaLabel}
      .active=${e.active??d}
      activation="manual"
      without-scroll-controls
      ${i(t=>o(t,e.ariaLabel))}
    >
      ${e.tabs.map(t=>{let o=e.active===t.value;return n`
          <wa-tab
            id=${`${e.id}-tab-${t.value}`}
            panel=${t.value}
            aria-controls=${e.panelId}
            class="hub-tab"
            ?active=${o}
            ?disabled=${t.disabled}
            .tabIndex=${o||t.value===r?0:-1}
            aria-selected=${o?`true`:`false`}
            data-test-id=${t.testId??a}
            @click=${n=>{let r=n.currentTarget;r instanceof HTMLElement&&!t.disabled&&(n.detail>0||n.isTrusted)&&t.value!==e.active&&(e.onSelect(t.value),e.onActivate?.(r))}}
            @keydown=${n=>{let r=n.currentTarget;r instanceof HTMLElement&&!t.disabled&&!n.repeat&&(n.key===`Enter`||n.key===` `)&&t.value!==e.active&&(n.preventDefault(),f={hubId:e.id,tab:t.value,at:Date.now(),source:r},e.onSelect(t.value),e.onActivate?.(r))}}
            ${o?i(n=>c(e.id,t.value,n)):a}
          >
            ${t.label}${t.count==null?a:n`<span class="hub-tab__badge hub-tab__badge--count">${t.count}</span>`}${t.badge==null?a:n`<span class="hub-tab__badge">${t.badge}</span>`}
          </wa-tab>
        `})}
    </wa-tab-group>
  `}var u,d,f;function p(){return(p=e((()=>{t(),r(),s(),u=2e3,d=`__openclaw-hub-tabs-no-active__`,f=null})))()}export{l as n,p as t};
//# sourceMappingURL=hub-tabs-DuEhaWau.js.map