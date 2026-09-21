import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Jo as t,Yo as n}from"./control-ui-core-DzidtL-P.js";import{K as r,X as i,q as a}from"./lit-runtime-vxhGQLC6.js";import{Bt as o,Ft as s,Gt as c,It as l,Nt as u}from"./control-ui-core-uEI6aN5p.js";import{Cr as d,wr as f}from"./control-ui-boot-shared-Cyt1Zyts.js";import{n as p,t as m}from"./channel-picker-3xBUJFfK.js";import{n as h,t as g}from"./select-picker-DnWtx1hT.js";function _(e){return`*`.repeat(Array.from(b.segment(e)).length)}function v(e){let t=e.closest(`[data-sensitive-input]`)?.querySelector(`[data-sensitive-mask-text]`);t&&(t.textContent=_(e.value),t.style.transform=`translateX(${-e.scrollLeft}px)`)}function y(e){let t=e.revealed?e.hideLabel:e.revealLabel,n=e.className?`oc-sensitive-input ${e.className}`:`oc-sensitive-input`,r=t=>{let n=t.currentTarget;v(n),e.onInput(n.value)},o=e=>{v(e.currentTarget)};return i`
    <span
      class=${n}
      data-sensitive-input
      data-sensitive-mask-ready="true"
      data-revealed=${String(e.revealed)}
    >
      <span
        class="oc-sensitive-mask"
        aria-hidden="true"
        data-sensitive-mask
        ?hidden=${e.revealed}
      >
        <span
          data-sensitive-mask-text
          .textContent=${e.revealed?``:_(e.value)}
        ></span>
      </span>
      <input
        id=${e.id}
        class=${e.inputClassName??a}
        name=${e.name??a}
        type=${e.revealed?`text`:`password`}
        autocomplete="off"
        spellcheck="false"
        placeholder=${e.placeholder??``}
        .value=${e.value}
        ?disabled=${e.disabled}
        data-sensitive-value
        @input=${r}
        @change=${o}
        @focus=${o}
        @scroll=${o}
      />
      <openclaw-tooltip .content=${t}>
        <button
          type="button"
          class="oc-sensitive-toggle"
          aria-label=${t}
          aria-controls=${e.id}
          aria-pressed=${String(e.revealed)}
          data-sensitive-icon=${e.revealed?`eye-off`:`eye`}
          ?disabled=${e.disabled}
          @click=${e.onToggle}
        >
          ${e.revealed?s.eyeOff:s.eye}
        </button>
      </openclaw-tooltip>
    </span>
  `}var b;function x(){return(x=e((()=>{r(),l(),u(),b=new Intl.Segmenter(void 0,{granularity:`grapheme`})})))()}function S(e,t=c(`modelSetup.wizard.continue`)){return i`
    <button type="button" class="btn primary" disabled aria-busy="true" aria-label=${t}>
      <span class="btn__label">${t}</span>
      <span class="btn__spinner" aria-hidden="true"></span>
      <span class="sr-only" role="status" aria-live="polite">${e}</span>
    </button>
  `}function C(e,t){return`${e.presentation===`channels`?`channels-wizard`:`wizard-step`}__${t}`}function w(e){return e.step.message?i`<div class=${C(e,`message`)}>
        ${t(e.step.message)}
      </div>`:a}function T(e,t,n){return t===`channels`?i`
      <span class="channels-wizard__option-label">
        ${n===void 0?a:n?`☑ `:`☐ `}${e.label}
      </span>
      ${e.hint?i`<span class="channels-wizard__option-hint">${e.hint}</span>`:a}
    `:i`
    <span>
      <strong>${e.label}</strong>
      ${e.hint?i`<small>${e.hint}</small>`:a}
    </span>
  `}function E(e){let n=e.deviceCode;if(!n)return a;let r=c(`modelSetup.wizard.copy`);return i`
    <div class="wizard-step__device-code">
      ${n.message?i`<div class="muted">${t(n.message)}</div>`:a}
      <code>${n.code}</code>
      <button
        type="button"
        class="btn btn--sm"
        @click=${e=>void d(e,n.code,r)}
      >
        <span data-copy-label>${r}</span>
      </button>
      ${n.expiresInMinutes?i`<div class="muted">
              ${c(`modelSetup.wizard.expires`,{count:String(n.expiresInMinutes)})}
            </div>`:a}
    </div>
  `}function D(e,t,n,r=e.busy){let a=e.answerLabel??t;if(e.presentation===`channels`&&e.busy)return i`<div class="channels-wizard__footer">
      ${S(e.busyLabel??a)}
    </div>`;let o=i`
    <button
      type=${n?`button`:`submit`}
      class="btn primary"
      ?disabled=${r}
      @click=${n}
    >
      ${a}
    </button>
  `;return e.presentation===`channels`?i`<div class="channels-wizard__footer">${o}</div>`:e.leadingAction?i`<div class="wizard-step__actions wizard-step__actions--split">
        ${e.leadingAction}${o}
      </div>`:o}function O(e,t,n){let r=n.some(e=>Object.is(e,t.value));return e.presentation===`channels`?i`<button
      type="button"
      class="channels-wizard__option"
      aria-pressed=${r?`true`:`false`}
      ?disabled=${e.busy}
      @click=${()=>e.onValueChange(t.value)}
    >
      ${T(t,e.presentation,r)}
    </button>`:i`<label class="wizard-step__option">
    <input
      type=${e.step.type===`select`?`radio`:`checkbox`}
      name=${e.step.type===`select`?`${e.inputId}-option`:a}
      .checked=${r}
      ?disabled=${e.busy}
      @change=${r=>{let i=e.step.type===`select`?t.value:r.currentTarget.checked?[...n,t.value]:n.filter(e=>!Object.is(e,t.value));e.onValueChange(i)}}
    />
    ${T(t)}
  </label>`}function k(e){return i`
    ${e.externalUrl?i`<a
            class="btn btn--sm wizard-step__external-link"
            href=${e.externalUrl}
            target="_blank"
            rel="noreferrer"
          >
            ${c(`modelSetup.wizard.openSignIn`)}
          </a>`:a}
    ${E(e)}
  `}function A(e){return i`
    ${w(e)} ${k(e.step)}
    ${D(e,c(`modelSetup.wizard.continue`),()=>e.onAnswer(void 0))}
  `}function j(e){return i`
    <div class="wizard-step__progress" role="status" aria-live="polite">
      <span class="wizard-step__spinner" aria-hidden="true"></span>
      ${w(e)}
    </div>
    ${e.leadingAction?i`<div class="wizard-step__actions wizard-step__actions--split">
            ${e.leadingAction}
          </div>`:a}
  `}function M(e){let n=e.step,r=typeof e.value==`string`?e.value:``,o=n.sensitive&&e.onToggleSensitiveVisibility?y({id:e.inputId,name:`wizard-text`,value:r,revealed:e.sensitiveRevealed===!0,revealLabel:c(`configForm.revealValue`),hideLabel:c(`configForm.hideValue`),inputClassName:`input`,placeholder:n.placeholder,disabled:e.busy,onInput:e.onValueChange,onToggle:e.onToggleSensitiveVisibility}):i`<input
          id=${e.inputId}
          class="input"
          name="wizard-text"
          type=${n.sensitive?`password`:`text`}
          autocomplete=${n.sensitive?`off`:`on`}
          placeholder=${n.placeholder??``}
          .value=${r}
          ?disabled=${e.busy}
          @input=${t=>e.presentation!==`channels`&&e.onValueChange(t.currentTarget.value)}
        />`;return i`
    <form
      class="wizard-step__form"
      @submit=${t=>{t.preventDefault();let n=t.currentTarget.elements.namedItem(`wizard-text`);e.onAnswer(e.presentation===`channels`?n?.value??``:r)}}
    >
      ${n.message?i`<div class=${C(e,`message`)}>
              <label for=${e.inputId}>${t(n.message)}</label>
            </div>`:a}
      ${k(n)} ${o}
      ${D(e,c(`modelSetup.wizard.submit`))}
    </form>
  `}function N(e){let t=e.step.options??[],n=e.step.type===`multiselect`,r=n?Array.isArray(e.value)?e.value:[]:[e.value];if(e.presentation===`channels`&&!n){let n=t.findIndex(t=>Object.is(t.value,e.value)),r=e.channelSelect&&t.every(e=>typeof e.value==`string`),o=r?p:h;return i`
      ${w(e)}
      ${o({label:e.step.message??``,value:n<0?null:String(r?t[n]?.value:n),options:t.map((e,t)=>({value:String(r?e.value:t),label:e.label,description:e.hint,kind:r?`channel`:`neutral`})),disabled:e.busy,onChange:n=>e.onAnswer(r?n:t[Number(n)]?.value)})}
      ${e.busy?D(e,c(`modelSetup.wizard.continue`),void 0,!0):a}
    `}let o=n?e.presentation===`channels`?[...r]:r:e.value;return i`
    ${w(e)}
    <div class=${C(e,`options`)} role=${n?a:`radiogroup`}>
      ${t.map(t=>O(e,t,r))}
    </div>
    ${D(e,c(`modelSetup.wizard.continue`),()=>e.onAnswer(o),e.busy||!n&&e.value===void 0)}
  `}function P(e){let t=C(e,e.presentation===`channels`?`footer`:`actions`);return i`
    ${w(e)}
    <div
      class=${e.presentation!==`channels`&&e.leadingAction?`${t} wizard-step__actions--split`:t}
    >
      ${e.presentation===`channels`?a:e.leadingAction??a}
      ${e.presentation===`channels`&&e.busy?S(e.busyLabel??c(`common.loading`)):[!1,!0].map(t=>i`<button
                type="button"
                class=${t?`btn primary`:`btn`}
                ?disabled=${e.busy}
                @click=${()=>e.onAnswer(t)}
              >
                ${t?e.confirmAffirmativeLabel??c(`common.yes`):c(`common.no`)}
              </button>`)}
    </div>
  `}function F(e){switch(e.step.type){case`text`:return M(e);case`select`:case`multiselect`:return N(e);case`confirm`:return P(e);case`progress`:return e.step.executor===`gateway`?j(e):A(e);case`note`:case`action`:return A(e)}return a}function I(){return(I=e((()=>{r(),o(),n(),m(),f(),g(),x()})))()}export{S as n,F as r,I as t};
//# sourceMappingURL=wizard-step-controls-BVdQYpIH.js.map