const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./rfb-3fIY7_Ix.js","./rolldown-runtime-DkW27tQK.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,bi as n,xi as r}from"./control-ui-foundation-DMb6IeIq.js";import{Aa as i,Gn as a,Jo as o,Kc as s,Kn as c,Oa as ee,Ws as te,Yo as l,Ys as ne,qc as re,qo as u}from"./control-ui-core-DzidtL-P.js";import{$ as ie,K as d,Q as ae,X as f,at as p,dt as m,q as h,st as g}from"./lit-runtime-vxhGQLC6.js";import{Bt as _,F as v,Ft as y,Gt as b,It as x,Lt as oe,Rt as se,V as ce,Xt as le,Yt as S,l as ue,u as de}from"./control-ui-core-uEI6aN5p.js";import{Jt as C,qt as w}from"./control-ui-boot-chat-pu3gR1ly.js";import{d as fe,u as pe}from"./control-ui-boot-chat-BoyWVlmW.js";import{n as me,r as T,t as he}from"./dock-layout-controller-CX9mJz3R.js";import{n as ge,t as _e}from"./scrollbar-styles-DxwFVPWs.js";import{n as ve}from"./gateway-websocket-url-DeLAU9tz.js";import{n as ye,t as be}from"./desktop-focus-window-CTicLge9.js";var E,D;function O(){return(O=e((()=>{le(),E={desktop:{title:S.desktop.title,openWindow:S.desktop.openWindow,unavailable:S.desktop.unavailable,toggle:S.desktop.toggle,hide:`Hide desktop panel`,resize:`Resize desktop panel`,dockBottom:`Dock to bottom`,dockRight:`Dock to right`,enterFullscreen:`Enter fullscreen`,exitFullscreen:`Exit fullscreen`,fullscreenUnavailable:`Fullscreen is unavailable in this browser`,pickerTitle:`Desktop sources`,thisMachine:`This machine`,refresh:`Refresh`,refreshing:`Refreshing…`,loading:`Loading desktop sources…`,empty:`No desktop-capable sources are available.`,sourceUnavailable:`The requested desktop source is unavailable. Choose another source.`,connect:`Connect`,connecting:`Connecting to desktop…`,takeControl:`Take control`,switchToViewOnly:`Switch to view only`,viewOnly:`View only`,control:`Control`,keyboard:`Keyboard`,keyboardInput:`Remote desktop keyboard input`,touchControls:`Remote desktop controls`,fit:`Fit`,fitScreen:`Fit screen`,actualSize:`Use actual size`,back:`Back`,disconnect:`Disconnect`,reconnect:S.desktop.reconnect,passwordPrompt:`Enter the VNC password for this machine.`,passwordLabel:`VNC password`,accountPrompt:`Enter a macOS account to authenticate Screen Sharing.`,usernameLabel:`macOS username`,accountPasswordLabel:`macOS password`,controlTaken:`Another operator took control`,disconnected:`Desktop disconnected: {reason}`,closeCode:`connection closed with code {code}`,unknownReason:`unknown reason`,errors:{listFailed:`Could not load desktop sources: {error}`,fullscreenFailed:`Could not change fullscreen mode: {error}`,securityFailed:`Desktop security negotiation failed: {reason}`,connectionFailed:`Reconnect. If it fails again, check the browser console and desktop service logs.`}}},D=Object.assign(()=>Object.assign(S.desktop,E.desktop),{catalog:E})})))()}var k,A;function j(){return(j=e((()=>{r(),k=async()=>(await n(()=>import(`./rfb-3fIY7_Ix.js`),__vite__mapDeps([0,1]),import.meta.url)).default,A=class{constructor(e,t=e=>new WebSocket(e),n=k){this.rfbConstructor=e,this.createWebSocket=t,this.loadRfb=n}async connect(e){let t=this.rfbConstructor??await this.loadRfb(),n=ve(e.wsUrl,e.gatewayUrl);if(!e.isCurrent())throw new DOMException(`Desktop connection is no longer current`,`AbortError`);let r=this.createWebSocket(n),i;r.addEventListener(`close`,e=>{i={code:e.code,reason:e.reason}});let a=new t(e.target,r,e.credentials?{credentials:e.credentials}:void 0);a.background=e.background??getComputedStyle(e.target).backgroundColor,a.viewOnly=e.viewOnly,a.scaleViewport=e.scaleViewport??!0;let o=!1;a.addEventListener(`connect`,()=>e.onConnect?.()),a.addEventListener(`disconnect`,t=>{o=!0;let{clean:n}=t.detail;e.onDisconnect?.({...i,clean:n})}),a.addEventListener(`securityfailure`,t=>{let n=t.detail??{};e.onSecurityFailure?.(n)});let s=t=>{e.target.querySelector(`canvas`)?.dispatchEvent(t)},c=e=>new KeyboardEvent(e.type,{key:e.key,code:e.code,location:e.location,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,altKey:e.altKey,metaKey:e.metaKey,repeat:e.repeat,isComposing:e.isComposing,bubbles:!0,cancelable:!0});return{disconnect:()=>{o||(o=!0,a.disconnect())},disableInput:()=>{a.viewOnly=!0},setScaleViewport:e=>{a.scaleViewport=e},sendKeyboardEvent:e=>s(c(e)),sendText:e=>{let t=e.replace(/\r\n?/g,`
`);for(let e of t){if(e.length===2){a.sendKey(16777216|e.codePointAt(0),null);continue}s(new KeyboardEvent(`keydown`,{key:e===`
`?`Enter`:e,code:`Unidentified`,bubbles:!0,cancelable:!0}))}},sendBackspace:()=>a.sendKey(65288,`Backspace`)}}}})))()}function xe(e){return b(e===`browser`?`browser.title`:`terminal.title`)}function Se(e){return e===`browser`?y.chrome:y.terminal}function M(){return(M=e((()=>{_(),x()})))()}function N(e){return e.id===`gateway`?{kind:`host`}:e.id.startsWith(`node:`)&&e.id.length>5?{kind:`node`,nodeId:e.id.slice(5)}:{kind:`environment`,environmentId:e.id}}function P(e){return f`
    <div class="desktop-content">
      ${e.notice}
      ${e.state===`picker`?e.picker:e.state===`inventory-error`||e.state===`disconnected`?e.recovery:e.state===`credentials`?e.credentials:e.connection}
    </div>
  `}function Ce(e){return f`
    <header class="rail-header bp-header">
      <div class="rail-header__title bp-title">${b(`desktop.title`)}</div>
      <div class="rail-header__actions bp-actions">
        <button
          class="rail-header__action bp-icon ${e.dock===`bottom`?`is-active`:``}"
          type="button"
          title=${b(`desktop.dockBottom`)}
          aria-label=${b(`desktop.dockBottom`)}
          @click=${()=>e.onDock(`bottom`)}
        >
          ${y.panelBottomOpen}
        </button>
        <button
          class="rail-header__action bp-icon ${e.dock===`right`?`is-active`:``}"
          type="button"
          title=${b(`desktop.dockRight`)}
          aria-label=${b(`desktop.dockRight`)}
          @click=${()=>e.onDock(`right`)}
        >
          ${y.panelRightOpen}
        </button>
        <button
          class="rail-header__action bp-icon bp-open-window"
          type="button"
          title=${b(`desktop.openWindow`)}
          aria-label=${b(`desktop.openWindow`)}
          @click=${e.onOpenWindow}
        >
          ${y.externalLink}
        </button>
        ${e.fullscreenControl}
        <button
          class="rail-header__action bp-icon"
          type="button"
          title=${b(`desktop.hide`)}
          aria-label=${b(`desktop.hide`)}
          @click=${e.onClose}
        >
          ${y.x}
        </button>
      </div>
    </header>
  `}function we(e){return f`
    <div class="desktop-toolbar">
      <span>${b(`desktop.pickerTitle`)}</span>
      <span class="desktop-toolbar__spacer"></span>
      <button
        class="desktop-button"
        type="button"
        ?disabled=${e.loading}
        @click=${e.onRefresh}
      >
        ${e.loading?b(`desktop.refreshing`):b(`desktop.refresh`)}
      </button>
    </div>
    <div class="desktop-picker">
      ${e.loading&&e.environments.length===0?C(`desktop`,b(`desktop.loading`)):e.environments.length===0?f`<div class="desktop-status">${b(`desktop.empty`)}</div>`:e.environments.map(t=>Te(t,e.onConnect))}
    </div>
  `}function Te(e,t){let n=e.worker,r=N(e);return f`
    <div class="desktop-environment">
      <div class="desktop-environment__details">
        <div class="desktop-environment__id">
          ${r.kind===`host`?b(`desktop.thisMachine`):e.id}
        </div>
        <div class="desktop-environment__meta">
          <span>${n?.state??e.status}</span>
        </div>
        ${n&&n.attachedSessionIds.length>0?f`<div class="desktop-environment__sessions">
                ${n.attachedSessionIds.map(e=>f`<span class="desktop-session">${e}</span>`)}
              </div>`:h}
      </div>
      <button
        class="desktop-button desktop-button--primary"
        type="button"
        @click=${()=>t(e.id)}
      >
        ${b(`desktop.connect`)}
      </button>
    </div>
  `}function Ee(e){return f`
    <div class="desktop-status">
      <form class="desktop-credentials" @submit=${e.onSubmit}>
        <div>${b(e.ardAccount?`desktop.accountPrompt`:`desktop.passwordPrompt`)}</div>
        ${e.ardAccount?f`<label class="desktop-credentials__label">
                ${b(`desktop.usernameLabel`)}
                <input
                  class="desktop-credentials__input"
                  name="username"
                  type="text"
                  autocomplete="off"
                  .value=${e.username}
                  required
                />
              </label>`:h}
        <label class="desktop-credentials__label">
          ${b(e.ardAccount?`desktop.accountPasswordLabel`:`desktop.passwordLabel`)}
          <input
            class="desktop-credentials__input"
            name="password"
            type="password"
            autocomplete="off"
            required
          />
        </label>
        <button class="desktop-button desktop-button--primary" type="submit">
          ${b(`desktop.connect`)}
        </button>
      </form>
    </div>
  `}function De(e){return f`
    <div class="desktop-toolbar desktop-toolbar--connection">
      ${e.showApps&&e.desktopApps.length>0?f`<div class="desktop-apps">
              ${e.desktopApps.map(t=>{let n=e.launchingApp===t,r=xe(t);return f`<button
                  class="desktop-app-button"
                  type="button"
                  title=${r}
                  aria-label=${r}
                  aria-busy=${n?`true`:`false`}
                  ?disabled=${!e.environmentSelected||n}
                  @click=${()=>e.onLaunch(t)}
                >
                  <span
                    class="desktop-app-button__icon ${n?`desktop-app-button__icon--launching`:``}"
                    aria-hidden="true"
                  >
                    ${Se(t)}
                  </span>
                  <span>${r}</span>
                </button>`})}
            </div>`:h}
      <span class="desktop-toolbar__spacer"></span>
      <button
        class="desktop-toolbar-action"
        type="button"
        title=${b(`desktop.disconnect`)}
        aria-label=${b(`desktop.disconnect`)}
        @click=${e.onDisconnect}
      >
        ${b(`desktop.disconnect`)}
      </button>
    </div>
    <div class="desktop-stage">
      <div class="desktop-surface"></div>
      ${e.controlling?h:f`<button
              class="desktop-stage__take-control"
              type="button"
              title=${b(`desktop.takeControl`)}
              aria-label=${b(`desktop.takeControl`)}
              @click=${e.onTakeControl}
            ></button>`}
      ${e.state===`connecting`?C(`desktop`,b(`desktop.connecting`),!1,!0):h}
    </div>
  `}function Oe(e,t){return e?f`<div class="desktop-note desktop-note--error" role="alert">${e}</div>`:t?f`<div class="desktop-note" role="status">${t}</div>`:h}function F(){return(F=e((()=>{d(),_(),O(),x(),w(),M(),D()})))()}function ke(e){let t=f`
    <div class="desktop-stage">
      <div class="desktop-surface"></div>
      ${e.state===`connecting`?C(`desktop`,b(`desktop.connecting`),!1,!0):h}
      <textarea
        class="desktop-keyboard-input"
        inputmode="text"
        autocomplete="off"
        autocapitalize="off"
        spellcheck="false"
        tabindex="-1"
        aria-label=${b(`desktop.keyboardInput`)}
        ?disabled=${e.state!==`connected`||!e.controlling}
        .value=${e.keyboardInputValue}
        @keydown=${e.onKeyboardEvent}
        @keyup=${e.onKeyboardEvent}
        @input=${e.onKeyboardInput}
      ></textarea>
      <nav class="desktop-touch-toolbar" aria-label=${b(`desktop.touchControls`)}>
        <button
          class="desktop-touch-action"
          type="button"
          aria-label=${b(e.controlling?`desktop.switchToViewOnly`:`desktop.takeControl`)}
          aria-pressed=${e.controlling?`true`:`false`}
          @click=${e.onControlToggle}
        >
          <span class="desktop-touch-action__icon" aria-hidden="true">
            ${e.controlling?y.hand:y.eye}
          </span>
          <span class="desktop-touch-action__label">
            ${b(e.controlling?`desktop.control`:`desktop.viewOnly`)}
          </span>
        </button>
        <button
          class="desktop-touch-action"
          type="button"
          aria-label=${b(`desktop.keyboard`)}
          ?disabled=${e.state!==`connected`||!e.controlling}
          @click=${e.onKeyboardFocus}
        >
          <span class="desktop-touch-action__icon" aria-hidden="true">${I}</span>
          <span class="desktop-touch-action__label">${b(`desktop.keyboard`)}</span>
        </button>
        <button
          class="desktop-touch-action"
          type="button"
          aria-label=${b(e.scaleViewport?`desktop.actualSize`:`desktop.fitScreen`)}
          aria-pressed=${e.scaleViewport?`true`:`false`}
          @click=${e.onScaleToggle}
        >
          <span class="desktop-touch-action__icon" aria-hidden="true">
            ${e.scaleViewport?y.minimize:y.maximize}
          </span>
          <span class="desktop-touch-action__label">${b(`desktop.fit`)}</span>
        </button>
        <button
          class="desktop-touch-action"
          type="button"
          aria-label=${b(`desktop.back`)}
          @click=${e.onClose}
        >
          <span class="desktop-touch-action__icon" aria-hidden="true">${y.arrowLeft}</span>
          <span class="desktop-touch-action__label">${b(`desktop.back`)}</span>
        </button>
      </nav>
    </div>
  `;return f`
    <section class="desktop-document" aria-label=${b(`desktop.title`)}>
      ${P({state:e.state,notice:e.notice,picker:e.picker,recovery:e.recovery,credentials:e.credentials,connection:t})}
    </section>
  `}var I;function L(){return(L=e((()=>{d(),_(),O(),oe(),x(),w(),F(),D(),I=se(ae`
  <rect width="20" height="14" x="2" y="5" rx="2" />
  <path d="M6 9h.01" />
  <path d="M10 9h.01" />
  <path d="M14 9h.01" />
  <path d="M18 9h.01" />
  <path d="M6 13h.01" />
  <path d="M10 13h.01" />
  <path d="M14 13h.01" />
  <path d="M18 13h.01" />
  <path d="M8 17h8" />
`)})))()}var R,z;function B(){return(B=e((()=>{R=`________________`,z=class{constructor(e){this.options=e,this.value=R}focus(){let e=this.options.input();e?.focus({preventScroll:!0}),e?.setSelectionRange(e.value.length,e.value.length)}reset(e){this.value=R;let t=e??this.options.input();t&&(t.value=R)}handleKeyboardEvent(e){let t=this.options.connection();!this.options.controlling()||!t||(t.sendKeyboardEvent(e),e.preventDefault())}handleInput(e){let t=e.currentTarget;if(!this.options.controlling()){this.reset(t);return}let n=t.value,r=this.options.connection(),i=0;for(let e of this.value){if(!n.startsWith(e,i))break;i+=e.length}for(let e=Array.from(this.value.slice(i)).length;e>0;--e)r?.sendBackspace();if(r?.sendText(n.slice(i)),n.length<1||n.length>32){this.reset(t);return}this.value=n}}})))()}var V;function H(){return(H=e((()=>{V=class{constructor(){this.current=null,this.retained=null,this.connected=!1}get handle(){return this.connected?this.current:null}begin(e){let t=e?this.connected?this.current:this.retained:null,n=this.current,r=this.retained;this.current=null,this.retained=t,this.connected=!1,n!==t&&n?.disconnect(),r!==t&&r?.disconnect(),t?.disableInput()}attach(e){this.current=e}markConnected(){this.connected=!0;let e=this.retained;this.retained=null,e?.disconnect()}disconnect(){this.begin(!1)}}})))()}function Ae(e){if(!e||typeof e!=`object`||!(`details`in e))return null;let t=e.details;if(!t||typeof t!=`object`||!(`code`in t)||t.code!==U)return null;let n=`auth`in t?t.auth:void 0;return n===`vnc-password`||n===`ard-account`?n:null}var U;function W(){return(W=e((()=>{U=`DESKTOP_CREDENTIALS_REQUIRED`})))()}var G;function K(){return(K=e((()=>{d(),x(),G=class{constructor(e,t){this.host=e,this.options=t,this.active=!1,this.errorText=null,this.restoreFocus=!1,this.onFullscreenChange=()=>this.handleFullscreenChange(),e.addController(this)}hostConnected(){document.addEventListener(`fullscreenchange`,this.onFullscreenChange)}hostDisconnected(){document.removeEventListener(`fullscreenchange`,this.onFullscreenChange),this.restoreFocus=!1,this.fullscreenElement()===this.options.section()&&document.exitFullscreen().catch(()=>{})}renderButton(){let e=this.supported(),t=this.active?this.options.exitLabel():e?this.options.enterLabel():this.options.unavailableLabel();return f`<openclaw-tooltip .content=${t}>
      <button
        class=${this.options.buttonClass}
        type="button"
        aria-label=${t}
        aria-pressed=${this.active?`true`:`false`}
        aria-disabled=${e?`false`:`true`}
        @click=${()=>void this.toggle()}
      >
        <span class=${this.options.iconClass} aria-hidden="true">
          ${this.active?y.minimize:y.maximize}
        </span>
      </button>
    </openclaw-tooltip>`}async exit(){if(this.active)try{await document.exitFullscreen()}catch(e){this.setError(this.options.errorMessage(e))}}fullscreenElement(){return(this.host.renderRoot instanceof ShadowRoot?this.host.renderRoot.fullscreenElement:null)??document.fullscreenElement}supported(){return document.fullscreenEnabled&&typeof Element.prototype.requestFullscreen==`function`}handleFullscreenChange(){let e=this.active;this.active=this.fullscreenElement()===this.options.section(),this.options.onChange(),this.host.requestUpdate(),e&&!this.active&&this.restoreFocus&&this.host.updateComplete.then(()=>{this.host.renderRoot.querySelector(this.options.buttonSelector)?.focus(),this.restoreFocus=!1})}async toggle(){if(this.setError(null),this.active){await this.exit();return}let e=this.options.section();if(!e||!this.supported()){this.setError(this.options.unavailableLabel());return}this.restoreFocus=!0;try{await e.requestFullscreen()}catch(e){this.restoreFocus=!1,this.setError(this.options.errorMessage(e))}}setError(e){this.errorText=e,e&&this.options.onError?.(e),this.host.requestUpdate()}}})))()}var q;function J(){return(J=e((()=>{_(),O(),l(),K(),D(),q=class extends G{constructor(e,t){super(e,{...t,buttonClass:`bp-icon desktop-fullscreen-button`,buttonSelector:`.desktop-fullscreen-button`,iconClass:`desktop-fullscreen-icon`,enterLabel:()=>b(`desktop.enterFullscreen`),exitLabel:()=>b(`desktop.exitFullscreen`),unavailableLabel:()=>b(`desktop.fullscreenUnavailable`),errorMessage:e=>b(`desktop.errors.fullscreenFailed`,{error:u(e)})})}}})))()}function je(e){return f`
    <div class="desktop-status">
      ${e.inventoryError?h:f`<div>
              ${b(`desktop.disconnected`,{reason:e.reason??b(`desktop.unknownReason`)})}
            </div>`}
      <button class="desktop-button desktop-button--primary" type="button" @click=${e.onRetry}>
        ${b(e.inventoryError?`common.retry`:`desktop.reconnect`)}
      </button>
    </div>
  `}function Y(){return(Y=e((()=>{d(),_(),O(),D()})))()}var X;function Z(){return(Z=e((()=>{d(),X=m`
  /* The inset sizes this to the viewport on its own. Do not reintroduce viewport
     height units: Android WebView hosts the Control UI in a container that
     resolves dvh/vh/svh/lvh to 0, which collapses the viewer to a blank page. */
  .desktop-document {
    position: fixed;
    inset: 0;
    display: flex;
    overflow: hidden;
    box-sizing: border-box;
    background: var(--bg);
  }
  .desktop-document .desktop-content {
    width: 100%;
  }
  .desktop-document .desktop-stage {
    width: 100%;
  }
  .desktop-touch-toolbar {
    position: absolute;
    z-index: 3;
    right: 12px;
    bottom: max(12px, env(safe-area-inset-bottom));
    left: 12px;
    display: flex;
    width: max-content;
    max-width: calc(100% - 24px);
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin: 0 auto;
    padding: 5px;
    border: 1px solid color-mix(in srgb, var(--text) 16%, transparent);
    border-radius: 14px;
    background: color-mix(in srgb, var(--bg) 84%, transparent);
    box-shadow: 0 8px 28px rgb(0 0 0 / 35%);
    backdrop-filter: blur(16px);
  }
  .desktop-touch-action {
    display: inline-flex;
    min-width: 48px;
    height: 44px;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border: 0;
    border-radius: 10px;
    padding: 0 9px;
    background: transparent;
    color: var(--text);
    font: inherit;
    font-size: 11px;
  }
  .desktop-touch-action[aria-pressed="true"] {
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 16%, transparent);
  }
  .desktop-touch-action:focus-visible {
    outline: 2px solid var(--focus, var(--accent));
    outline-offset: 1px;
  }
  .desktop-touch-action__icon {
    display: inline-flex;
    width: 18px;
    height: 18px;
  }
  .desktop-touch-action__icon svg {
    width: 100%;
    height: 100%;
    stroke-width: 1.8;
  }
  .desktop-keyboard-input {
    position: fixed;
    bottom: 0;
    left: 50%;
    width: 1px;
    height: 1px;
    border: 0;
    padding: 0;
    opacity: 0;
    pointer-events: none;
  }
  @media (max-width: 430px) {
    .desktop-touch-action {
      min-width: 44px;
      padding: 0 7px;
    }
    .desktop-touch-action__label {
      display: none;
    }
  }
`})))()}var Me;function Ne(){return(Ne=e((()=>{d(),Me=m`
  .desktop-apps {
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 3px;
  }
  .desktop-app-button,
  .desktop-toolbar-action {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    border: 0;
    border-radius: 4px;
    padding: 5px 7px;
    background: transparent;
    color: var(--muted);
    font: inherit;
    font-size: 12px;
    white-space: nowrap;
  }
  .desktop-app-button {
    color: var(--text);
  }
  .desktop-app-button:hover:not(:disabled),
  .desktop-toolbar-action:hover:not(:disabled) {
    background: color-mix(in srgb, var(--text) 8%, transparent);
    color: var(--text);
  }
  .desktop-app-button:focus-visible,
  .desktop-toolbar-action:focus-visible {
    outline: 2px solid var(--focus, var(--accent));
    outline-offset: 1px;
  }
  .desktop-app-button:disabled,
  .desktop-toolbar-action:disabled {
    cursor: default;
    opacity: 0.55;
  }
  .desktop-app-button__icon {
    display: inline-flex;
    width: 15px;
    height: 15px;
  }
  .desktop-app-button__icon svg {
    width: 100%;
    height: 100%;
    stroke-width: 1.75;
  }
  .desktop-app-button__icon--launching {
    animation: desktop-app-launch 900ms linear infinite;
  }
  @keyframes desktop-app-launch {
    50% {
      opacity: 0.6;
      transform: rotate(180deg) scale(0.92);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .desktop-app-button__icon--launching {
      animation: none;
    }
  }
`})))()}var Pe,Fe;function Ie(){return(Ie=e((()=>{d(),_e(),T(),Z(),Ne(),Pe=m`
  .bp--embedded {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .bp--bottom {
    left: var(--shell-nav-width, 0);
    right: calc(var(--oc-terminal-reserve-right, 0px) + var(--oc-browser-reserve-right, 0px));
    bottom: calc(var(--oc-terminal-reserve-bottom, 0px) + var(--oc-browser-reserve-bottom, 0px));
  }
  .bp--right {
    top: var(--shell-topbar-height, 0);
    right: calc(var(--oc-terminal-reserve-right, 0px) + var(--oc-browser-reserve-right, 0px));
    bottom: calc(var(--oc-terminal-reserve-bottom, 0px) + var(--oc-browser-reserve-bottom, 0px));
  }
  .bp-title {
    min-width: 0;
  }
  .bp-icon[aria-disabled="true"] {
    opacity: 0.4;
  }
  .desktop-fullscreen-icon > svg {
    width: 15px;
    height: 15px;
  }
  .bp:fullscreen {
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
  .desktop-content {
    display: flex;
    flex: 1;
    min-height: 0;
    flex-direction: column;
  }
  .desktop-toolbar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    border-bottom: 1px solid var(--border, #262b34);
  }
  .desktop-toolbar--connection {
    min-height: 42px;
    gap: 12px;
  }
  .desktop-toolbar__spacer {
    flex: 1;
  }
  .desktop-button {
    border: 1px solid var(--border, #262b34);
    border-radius: 6px;
    padding: 5px 10px;
    background: transparent;
    color: var(--text, #d7dae0);
    font: inherit;
    font-size: 12px;
  }
  .desktop-button:hover:not(:disabled) {
    background: color-mix(in srgb, var(--text, #d7dae0) 10%, transparent);
  }
  .desktop-button--primary {
    border-color: var(--accent, #ff5c5c);
    color: var(--accent, #ff5c5c);
  }
  .desktop-button:disabled,
  .desktop-touch-action:disabled {
    opacity: 0.5;
  }
  .desktop-session {
    overflow: hidden;
    max-width: 100%;
    color: var(--muted);
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .desktop-note {
    padding: 7px 12px;
    border-bottom: 1px solid var(--border, #262b34);
    color: var(--muted, #8a919e);
    font-size: 12px;
  }
  .desktop-note--error {
    color: var(--danger, #ff6b6b);
  }
  .desktop-picker,
  .desktop-status {
    display: flex;
    flex: 1;
    min-height: 0;
    flex-direction: column;
    gap: 10px;
    overflow: auto;
    padding: 14px;
    background: var(--panel);
  }
  .desktop-status {
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--muted, #8a919e);
  }
  .desktop-credentials {
    display: flex;
    width: min(320px, 100%);
    flex-direction: column;
    gap: 10px;
    text-align: left;
  }
  .desktop-credentials__label {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: var(--text, #d7dae0);
    font-size: 12px;
  }
  .desktop-credentials__input {
    border: 1px solid var(--border, #262b34);
    border-radius: 6px;
    padding: 7px 9px;
    background: var(--bg, #111318);
    color: var(--text, #d7dae0);
    font: inherit;
  }
  .desktop-environment {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border: 1px solid var(--border, #262b34);
    border-radius: 8px;
  }
  .desktop-environment__details {
    display: flex;
    flex: 1;
    min-width: 0;
    flex-direction: column;
    gap: 5px;
  }
  .desktop-environment__id {
    overflow: hidden;
    color: var(--text, #d7dae0);
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .desktop-environment__meta,
  .desktop-environment__sessions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
    color: var(--muted, #8a919e);
    font-size: 11px;
  }
  .desktop-stage {
    position: relative;
    flex: 1;
    min-height: 0;
    overflow: hidden;
    background: var(--bg);
  }
  .desktop-surface {
    position: absolute;
    inset: 0;
    background: var(--bg);
  }
  /* View-only affordance: clicking anywhere on the desktop takes control. */
  .desktop-stage__take-control {
    position: absolute;
    inset: 0;
    border: 0;
    padding: 0;
    background: transparent;
    cursor: var(--cursor-action, pointer);
  }
  .desktop-stage__take-control:focus-visible {
    outline: 2px solid var(--accent, #ff5c5c);
    outline-offset: -2px;
  }
`,Fe=[me,Me,Pe,X,ge]})))()}async function Le(e,t){let n;try{n=(await e?.request(`sessions.describe`,{key:t}))?.session??void 0}catch{}return fe(n)}var Re;function ze(){return(ze=e((()=>{ee(),ne(),c(),pe(),Re=class{constructor(e,t,n,r){this.host=e,this.currentTarget=t,this.onTargetChange=n,this.onInventoryChange=r,this.refreshId=0,new a(e).effect(()=>e.available?e.client:null,t=>t.addEventListener(n=>{if(!e.isConnected||!e.available||t!==e.client)return;if(n.event===`presence`||n.event===`node.pair.resolved`||n.event===`node.runnerInventory.changed`){this.onInventoryChange();return}let r=e.documentMode&&e.sessionKey!==null&&e.requestedSource===null&&n.event===`sessions.changed`?i(n.payload):null;r&&te(r.key,e.sessionKey)&&this.resolveTarget(e=>{(e===null||e!==this.currentTarget())&&this.onTargetChange(e)})}))}invalidate(){this.refreshId+=1}async resolveInventoryTarget(e,t,n){let r=n=>t(e.some(e=>e.id===n)?n:null),i=this.host.requestedSource??n;return i===void 0&&this.host.documentMode&&this.host.sessionKey!==null?this.resolveTarget(r):r(i??null)}async resolveTarget(e){let{client:t,sessionKey:n}=this.host;if(!t||!n)return;let r=++this.refreshId,i=await Le(t,n);if(!(r!==this.refreshId||!this.host.isConnected||t!==this.host.client||n!==this.host.sessionKey||!this.host.documentMode||!this.host.available||this.host.requestedSource!==null))return e(i)}}})))()}var Q;function $(){return($=e((()=>{d(),ie(),_(),O(),l(),re(),T(),ce(),j(),L(),be(),B(),H(),W(),J(),de(),Y(),Ie(),F(),ze(),D(),Q=class extends s{constructor(...e){super(...e),this.client=null,this.available=!1,this.suppressed=!1,this.documentMode=!1,this.requestedSource=null,this.sessionKey=null,this.documentControl=!1,this.basePath=``,this.embedded=!1,this.presented=!1,this.refreshOnPresentation=!0,this.onDocumentClose=null,this.onFocusTargetChange=null,this.desktopClientFactory=()=>new A,this.environments=[],this.loading=!1,this.state=`picker`,this.environmentId=null,this.source=null,this.controlling=!1,this.errorText=null,this.noticeText=null,this.disconnectedReason=null,this.launchingApp=null,this.launchErrorText=null,this.desktopApps=[],this.scaleViewport=!0,this.connection=new V,this.pendingConnection=null,this.operationId=0,this.launchOperationId=0,this.controlTakeoverRecoveryUsed=!1,this.sourceSelection=`pending`,this.sessionSource=new Re(this,()=>this.environmentId,e=>{this.usesAutomaticSource&&(this.returnToPicker(`pending`),this.refreshEnvironments(void 0,e))},()=>{this.state===`picker`&&!this.suppressed&&(this.embedded?this.presented:this.documentMode||this.dockLayout.open)&&this.refreshEnvironments()}),this.mobileKeyboard=new z({connection:()=>this.connection.handle,controlling:()=>this.controlling,input:()=>this.shadowRoot?.querySelector(`.desktop-keyboard-input`)}),this.dockLayout=new he(this,{layout:ue,reservationPrefix:`desktop`,isAvailable:()=>this.available,isFullscreen:()=>this.fullscreenMode.active}),this.fullscreenMode=new q(this,{section:()=>this.renderRoot.querySelector(`section.bp`),onChange:()=>this.dockLayout.syncReservation()}),this.onToggleRequest=e=>this.handleToggleRequest(e)}static{this.styles=Fe}connectedCallback(){super.connectedCallback(),this.embedded||window.addEventListener(v,this.onToggleRequest),this.dockLayout.setSuppressed(this.suppressed),(this.documentMode&&this.available||!this.embedded&&this.dockLayout.open)&&this.refreshEnvironments()}disconnectedCallback(){window.removeEventListener(v,this.onToggleRequest),this.disconnectConnection(),this.credentials=void 0,super.disconnectedCallback()}updated(e){if(e.has(`embedded`)&&(this.embedded?window.removeEventListener(v,this.onToggleRequest):window.addEventListener(v,this.onToggleRequest)),e.has(`suppressed`)){let e=this.dockLayout.setSuppressed(this.suppressed);this.suppressed?this.returnToPicker():e&&this.refreshEnvironments()}let t=e.has(`client`)||e.has(`available`),n=t||e.has(`embedded`)||e.has(`presented`)||e.has(`documentMode`)||e.has(`requestedSource`)&&(!this.embedded||this.usesAutomaticSource)||e.has(`sessionKey`)||e.has(`documentControl`);(this.documentMode||this.embedded)&&n?(this.returnToPicker(`pending`),this.available&&(!this.embedded||this.presented&&this.refreshOnPresentation)&&this.refreshEnvironments()):t&&(!this.available&&this.dockLayout.open?(this.dockLayout.hideWithoutPersisting(),this.returnToPicker()):this.available&&this.dockLayout.restoreOpenState()&&this.refreshEnvironments()),this.dockLayout.syncReservation(),this.onFocusTargetChange?.({kind:`desktop`,control:this.controlling,...this.sourceSelection===`picker`?{}:this.sourceSelection===`explicit`||this.sessionKey===null?{source:this.environmentId}:{session:this.sessionKey}})}handleToggleRequest(e){if(this.documentMode)return;let t=e instanceof CustomEvent&&typeof e.detail==`object`&&e.detail!==null?e.detail:null;if(this.embedded){if(!this.presented)return;if(t?.open===!1){this.returnToPicker();return}if(!this.available||!this.client)return;t?.environmentId?this.connectRequestedEnvironment(t.environmentId):(this.returnToPicker(),this.refreshEnvironments());return}if((t?.dock===`right`||t?.dock===`bottom`)&&this.dockLayout.setDock(t.dock,!1),t?.open===!1){this.closePanel();return}if(!this.available)return;let n=this.dockLayout.open;this.dockLayout.setOpen(!0),t?.environmentId?this.connectRequestedEnvironment(t.environmentId):n?t?.open!==!0&&this.closePanel():this.refreshEnvironments()}closePanel(){this.returnToPicker(),this.dockLayout.setOpen(!1)}get usesAutomaticSource(){return this.sourceSelection===`pending`||this.sourceSelection===`resolved`}returnToPicker(e=`picker`){this.sessionSource.invalidate(),this.disconnectConnection(),this.clearLaunchState(),this.state=`picker`,this.sourceSelection=e,this.environmentId=null,this.source=null,this.credentials=void 0,this.credentialAuth=void 0,this.desktopApps=[],this.controlling=!1,this.disconnectedReason=null}disconnectConnection(e=!1){this.operationId+=1,this.pendingConnection=null,this.connection.begin(e),this.mobileKeyboard.reset()}clearLaunchState(){this.launchOperationId+=1,this.launchingApp=null,this.launchErrorText=null}async refreshEnvironments(e,t){let n=this.client;if(!n||!this.available||this.embedded&&!this.presented)return!1;this.sessionSource.invalidate();let r=e??++this.operationId;this.loading=!0,this.errorText=null;let i=!1;try{let e=await n.request(`environments.list`,{});if(r!==this.operationId)return!1;this.environments=e.environments.filter(e=>e.desktop===!0),i=!0}catch(e){r===this.operationId&&(this.errorText=b(`desktop.errors.listFailed`,{error:u(e)}),(this.requestedSource!==null||this.sessionKey!==null)&&(this.state=`inventory-error`))}finally{r===this.operationId&&(this.loading=!1)}return i&&this.sourceSelection===`pending`&&await this.sessionSource.resolveInventoryTarget(this.environments,async e=>{r===this.operationId&&(e===null?(this.requestedSource!==null||this.sessionKey!==null)&&(this.noticeText=b(`desktop.sourceUnavailable`)):(this.sourceSelection=`resolved`,await this.connectEnvironment(e,this.documentControl)))},t),i}async connectRequestedEnvironment(e){this.returnToPicker(`explicit`),this.environmentId=e,this.state=`connecting`;let t=this.operationId,n=await this.refreshEnvironments(t);if(t===this.operationId){if(!n){this.state=`inventory-error`;return}this.connectEnvironment(e,!1)}}async connectEnvironment(e,t,n={}){let r=this.client;if(!e||!r||!this.available||this.embedded&&!this.presented)return;this.environmentId!==e&&(this.clearLaunchState(),this.credentials=void 0,this.credentialAuth=void 0);let i=this.environments.find(t=>t.id===e);this.desktopApps=[...i?.worker?.desktopApps??[]],this.disconnectConnection(this.environmentId===e);let a=this.operationId,o=N(i??{id:e});this.environmentId=e,this.source=o,this.controlling=t,this.state=`connecting`,this.errorText=null,this.disconnectedReason=null,n.preserveNotice||(this.noticeText=null),this.controlTakeoverRecoveryUsed=n.takeoverRecovery===!0;try{let n=o.kind!==`environment`&&this.credentials?.password&&(this.credentialAuth===`vnc-password`||this.credentialAuth===`ard-account`&&this.credentials.username)?this.credentials:void 0,i=await r.request(`desktop.observe`,{source:o,control:t,...n?{credentials:n}:{}});if(a!==this.operationId)return;this.controlling=i.control;let s=i.preauthenticated?void 0:i.vncPassword?{password:i.vncPassword}:i.auth===`vnc-password`?this.credentials:void 0;if(i.auth===`vnc-password`&&i.preauthenticated!==!0&&!s?.password){this.connection.disconnect(),this.credentialAuth=`vnc-password`,this.pendingConnection={environmentId:e,control:t,observed:i,operationId:a},this.state=`credentials`;return}i.auth===`ard-account`&&(this.credentialAuth=`ard-account`),await this.connectObserved({environmentId:e,control:t,observed:i,operationId:a},i.auth===`vnc-password`?s:void 0)}catch(n){let r=Ae(n);if(r&&a===this.operationId){this.connection.disconnect(),this.credentialAuth=r,this.pendingConnection={environmentId:e,control:t,operationId:a},this.state=`credentials`;return}this.failConnection(a,n)}}async connectObserved(e,t){let n=this.client;if(!(!n||e.operationId!==this.operationId)){this.state=`connecting`;try{if(await this.updateComplete,e.operationId!==this.operationId)return;let r=this.shadowRoot?.querySelector(`.desktop-surface`);if(!r)throw Error(`Desktop render target is unavailable`);let i=await this.desktopClientFactory().connect({background:getComputedStyle(r).backgroundColor,isCurrent:()=>e.operationId===this.operationId,wsUrl:e.observed.wsPath,gatewayUrl:n.gatewayUrl,credentials:t,viewOnly:!e.observed.control,scaleViewport:this.scaleViewport,target:r,onConnect:()=>{e.operationId===this.operationId&&(this.connection.markConnected(),this.state=`connected`)},onDisconnect:t=>{e.operationId===this.operationId&&this.handleDesktopDisconnect(e.environmentId,t)},onSecurityFailure:t=>{if(e.operationId===this.operationId){let n=o(t.reason,b(`desktop.unknownReason`));this.errorText=b(`desktop.errors.securityFailed`,{reason:n}),this.failConnection(e.operationId,Error(n))}}});if(e.operationId!==this.operationId){i.disconnect();return}this.connection.attach(i)}catch(t){this.failConnection(e.operationId,t)}}}failConnection(e,t){e===this.operationId&&(this.disconnectConnection(),this.state=`disconnected`,this.disconnectedReason=u(t),this.clearLaunchState())}handleCredentialsSubmit(e){e.preventDefault();let t=this.pendingConnection;if(!t||t.operationId!==this.operationId)return;let n=new FormData(e.currentTarget),r=n.get(`password`);if(typeof r!=`string`||r.length===0)return;let i=n.get(`username`);if(this.credentialAuth===`ard-account`&&(typeof i!=`string`||i.trim().length===0))return;let a={...typeof i==`string`&&i.trim()?{username:i.trim()}:{},password:r};this.credentials=a,this.pendingConnection=null,t.observed?this.connectObserved({...t,observed:t.observed},a):this.connectEnvironment(t.environmentId,t.control)}handleDesktopDisconnect(e,{code:t,reason:n,clean:r}){if(this.disconnectConnection(),this.clearLaunchState(),t===1008&&this.credentialAuth===`ard-account`){this.credentials=this.credentials?.username?{username:this.credentials.username}:void 0,this.pendingConnection={environmentId:e,control:this.controlling,operationId:this.operationId},this.state=`credentials`,this.errorText=b(`desktop.errors.securityFailed`,{reason:o(n,b(`desktop.unknownReason`))});return}if(t===4e3&&n===`control-taken`&&this.controlling&&!this.controlTakeoverRecoveryUsed){this.noticeText=b(`desktop.controlTaken`),this.connectEnvironment(e,!1,{preserveNotice:!0,takeoverRecovery:!0});return}this.state=`disconnected`,this.disconnectedReason=o(n,t?b(`desktop.closeCode`,{code:String(t)}):``)||(r?null:b(`desktop.errors.connectionFailed`))}async launchApp(e){let{client:t,source:n}=this;if(!t||this.embedded&&!this.presented||n?.kind!==`environment`||this.state!==`connecting`&&this.state!==`connected`||!this.desktopApps.includes(e)||this.launchingApp===e)return;let r=++this.launchOperationId;this.launchingApp=e,this.launchErrorText=null;try{if(await t.request(`desktop.launch`,{source:n,app:e}),r!==this.launchOperationId)return}catch(e){if(r!==this.launchOperationId)return;this.launchErrorText=u(e)}this.launchingApp=null}render(){if(!this.available||!this.documentMode&&!this.embedded&&!this.dockLayout.open)return h;let e=Oe(this.fullscreenMode.errorText??this.launchErrorText??this.errorText,this.noticeText),t=we({environments:this.environments,loading:this.loading,onRefresh:()=>void this.refreshEnvironments(),onConnect:e=>{this.sourceSelection=`explicit`,this.connectEnvironment(e,!1)}}),n=Ee({ardAccount:this.credentialAuth===`ard-account`,username:this.credentials?.username??``,onSubmit:e=>this.handleCredentialsSubmit(e)}),r=je({inventoryError:this.state===`inventory-error`,reason:this.disconnectedReason,onRetry:()=>{if(this.state===`inventory-error`&&(this.documentMode||!this.environmentId)){this.sourceSelection!==`picker`&&(this.sourceSelection=`pending`),this.state=`picker`,this.refreshEnvironments();return}if(this.state===`inventory-error`&&this.environmentId){this.connectRequestedEnvironment(this.environmentId);return}this.connectEnvironment(this.environmentId,this.controlling)}});if(this.documentMode)return ke({state:this.state,controlling:this.controlling,scaleViewport:this.scaleViewport,keyboardInputValue:this.mobileKeyboard.value,notice:e,picker:t,credentials:n,recovery:r,onControlToggle:()=>void this.connectEnvironment(this.environmentId,!this.controlling),onKeyboardFocus:()=>this.mobileKeyboard.focus(),onKeyboardEvent:e=>this.mobileKeyboard.handleKeyboardEvent(e),onKeyboardInput:e=>this.mobileKeyboard.handleInput(e),onScaleToggle:()=>{this.scaleViewport=!this.scaleViewport,this.connection.handle?.setScaleViewport(this.scaleViewport)},onClose:()=>this.onDocumentClose?.()});let i=De({state:this.state,controlling:this.controlling,desktopApps:this.desktopApps,environmentSelected:this.environmentId!==null,launchingApp:this.launchingApp,showApps:this.source?.kind===`environment`,onLaunch:e=>void this.launchApp(e),onTakeControl:()=>void this.connectEnvironment(this.environmentId,!0),onDisconnect:()=>this.returnToPicker()}),a=this.dockLayout.dock,o=this.embedded||this.fullscreenMode.active?``:a===`bottom`?`height:${this.dockLayout.height}px`:`width:${this.dockLayout.width}px`;return f`
      <section
        class="bp bp--${this.embedded?`embedded`:a}"
        style=${o}
        aria-label=${b(`desktop.title`)}
      >
        ${this.embedded?h:this.dockLayout.renderResizer(`bp`,b(`desktop.resize`))}
        ${this.embedded?h:Ce({dock:a,fullscreenControl:this.fullscreenMode.renderButton(),onDock:e=>this.dockLayout.setDock(e),onOpenWindow:()=>ye(this.basePath,this.environmentId,this.controlling),onClose:()=>this.closePanel()})}
        ${P({state:this.state,notice:e,picker:t,recovery:r,credentials:n,connection:i})}
      </section>
    `}},t([g({attribute:!1})],Q.prototype,`client`,void 0),t([g({type:Boolean})],Q.prototype,`available`,void 0),t([g({type:Boolean})],Q.prototype,`suppressed`,void 0),t([g({type:Boolean})],Q.prototype,`documentMode`,void 0),t([g({attribute:!1})],Q.prototype,`requestedSource`,void 0),t([g({attribute:!1})],Q.prototype,`sessionKey`,void 0),t([g({type:Boolean})],Q.prototype,`documentControl`,void 0),t([g({attribute:!1})],Q.prototype,`basePath`,void 0),t([g({type:Boolean})],Q.prototype,`embedded`,void 0),t([g({type:Boolean})],Q.prototype,`presented`,void 0),t([g({type:Boolean})],Q.prototype,`refreshOnPresentation`,void 0),t([g({attribute:!1})],Q.prototype,`onDocumentClose`,void 0),t([g({attribute:!1})],Q.prototype,`onFocusTargetChange`,void 0),t([p()],Q.prototype,`environments`,void 0),t([p()],Q.prototype,`loading`,void 0),t([p()],Q.prototype,`state`,void 0),t([p()],Q.prototype,`environmentId`,void 0),t([p()],Q.prototype,`source`,void 0),t([p()],Q.prototype,`controlling`,void 0),t([p()],Q.prototype,`errorText`,void 0),t([p()],Q.prototype,`noticeText`,void 0),t([p()],Q.prototype,`disconnectedReason`,void 0),t([p()],Q.prototype,`launchingApp`,void 0),t([p()],Q.prototype,`launchErrorText`,void 0),t([p()],Q.prototype,`desktopApps`,void 0),t([p()],Q.prototype,`scaleViewport`,void 0),t([p()],Q.prototype,`sourceSelection`,void 0),customElements.get(`openclaw-desktop-panel`)||customElements.define(`openclaw-desktop-panel`,Q)})))()}$();
//# sourceMappingURL=desktop-panel-DcezC1oM.js.map