import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$i as t,Fr as n,L as r,R as i,Zn as a,ia as o,ja as s,nr as c,xa as l}from"./control-ui-foundation-DMb6IeIq.js";import{Gc as u,Gn as d,Jc as f,Jo as p,Kn as ee,Yo as te,Ys as ne,aa as re,cc as ie,do as ae,fa as m,na as oe,qc as se,qo as ce,ta as le,ua as ue,uo as de}from"./control-ui-core-DzidtL-P.js";import{$ as h,K as g,X as _,at as fe,q as v,st as y}from"./lit-runtime-vxhGQLC6.js";import{Gn as pe,M as me,N as he,Nt as ge,Pt as _e,Un as ve,cr as ye,fn as be,h as xe,i as Se,m as Ce,n as we,pn as Te,r as Ee,sr as De,vr as Oe}from"./control-ui-core-CaKBexnk.js";import{Bt as b,Ft as ke,Gt as x,It as Ae}from"./control-ui-core-uEI6aN5p.js";import{bt as je,yt as Me}from"./control-ui-boot-shared-nBxCfWV5.js";import{a as S,i as Ne,n as C,r as w}from"./gateway-runtime-DP4whqrA.js";import{$r as T,Ar as Pe,Ln as Fe,Qr as Ie,Rn as Le,Xr as Re,Yr as ze,Zn as Be,Zr as E,cr as Ve,ei as He,er as Ue,fr as We,ir as Ge,mr as Ke}from"./control-ui-boot-shared-Cyt1Zyts.js";import{Xt as qe,Yt as Je}from"./control-ui-boot-chat-pu3gR1ly.js";import"./control-ui-boot-shared-CH-OC11d.js";import{n as Ye,t as D}from"./custodian-alert-store-C8M3qKFB.js";import{r as Xe,t as Ze}from"./wizard-step-controls-BVdQYpIH.js";import{Ft as Qe,Lt as $e,Xt as et,Yt as tt}from"./control-ui-boot-chat-B4FQbyJR.js";import"./control-ui-boot-chat-CKX96sa9.js";function nt(e){if(!c(e))return;let t=e.code;return t===O.INFERENCE_UNAVAILABLE?{code:t}:void 0}function rt(e){if(!c(e))return;let t=e.code;return t===O.SESSION_INVALIDATED?{code:t}:void 0}var O;function k(){return(k=e((()=>{O={INFERENCE_UNAVAILABLE:`system_agent_inference_unavailable`,SESSION_INVALIDATED:`system_agent_session_invalidated`}})))()}async function it(e){let{context:n}=e,r=n.gateway.snapshot.sessionKey?.trim();if(e.agentId){let i=await n.agents.refreshList();if(!e.isCurrent())return`stale`;r=t({agentId:e.agentId,mainKey:i?.mainKey}),_e({selection:n.agentSelection,gateway:n.gateway,sessionKey:r,agentId:e.agentId})}return e.hatchDraft&&r?(n.navigate(`chat`,{pathname:at(n,r),search:`?draft=${encodeURIComponent(x(`custodian.hatchDraft`))}`}),`navigated`):`exit-setup`}function at(e,t){return re({face:`chat`,sessionKey:t,fallbackAgentId:oe(e),basePath:e.basePath,mainKey:ie({agentsList:e.agents.state.agentsList,hello:e.gateway.snapshot.hello})}).href}function A(){return(A=e((()=>{ge(),b(),le(),ne()})))()}function ot(e,t){return t===`received`?`sent`:e instanceof be||t===`unsent`?`rejected`:`unknown`}function st(e,t){return t===`sent`?!1:t===`unknown`||e}function ct(e,t,n){return n!==`rejected`&&e!==null&&e.severity===t.severity&&e.message===t.message}function lt(e,t,n){if(n.event!==`health`)return[e,t];let r=vt(n);return t?[r,t]:[r,null]}function ut(e){if(e.kind===`config-reload`)return x(`custodian.nudge.configReload`);let t=e.channelLabel??x(`custodian.nudge.channelFallback`);return e.kind===`channel-auth`?x(`custodian.nudge.channelAuth`,{channel:t}):e.kind===`channel-disconnected`?x(`custodian.nudge.channelDisconnected`,{channel:t}):x(`custodian.nudge.channelDegraded`,{channel:t})}function dt(e){return _`<div class="custodian__nudge" role="status">
    <button
      class="custodian__nudge-action"
      type="button"
      ?disabled=${e.disabled}
      @click=${e.onSend}
    >
      ${ut(e.nudge)}
    </button>
    <button
      class="custodian__nudge-dismiss"
      type="button"
      aria-label=${x(`custodian.nudge.dismiss`)}
      @click=${e.onDismiss}
    >
      ×
    </button>
  </div>`}function ft(e){return _`<div class="custodian__nudge custodian__nudge--channel-onboarding" role="status">
    <div class="custodian__nudge-copy">
      <strong>${x(`custodian.nudge.channelSetupTitle`)}</strong>
      <span>${x(`custodian.nudge.channelSetupBody`)}</span>
    </div>
    <button
      class="btn btn--sm primary custodian__nudge-cta"
      type="button"
      @click=${e.onOpenChannels}
    >
      ${x(`custodian.nudge.channelSetupAction`)}
    </button>
    <button
      class="custodian__nudge-dismiss"
      type="button"
      aria-label=${x(`custodian.nudge.channelSetupDismiss`)}
      @click=${e.onDismiss}
    >
      ×
    </button>
  </div>`}function pt(e){return _`<div class="custodian__nudge custodian__nudge--channel-onboarding" role="alert">
    <div class="custodian__nudge-copy">
      <strong>${x(`custodian.nudge.channelStatusErrorTitle`)}</strong>
      <span>${x(`custodian.nudge.channelStatusErrorBody`)}</span>
    </div>
    <button
      class="btn btn--sm primary custodian__nudge-cta"
      type="button"
      ?disabled=${e.retrying}
      @click=${e.onRetry}
    >
      ${e.retrying?x(`common.loading`):x(`common.retry`)}
    </button>
    <button
      class="custodian__nudge-dismiss"
      type="button"
      aria-label=${x(`custodian.nudge.channelSetupDismiss`)}
      @click=${e.onDismiss}
    >
      ×
    </button>
  </div>`}function mt(e){return M.some(t=>e[t]===`configured_unavailable`)}function ht(e){return a(e.probe)?.ok===!1}function gt(e,t,n){if(n.configured===!1||n.enabled===!1)return null;let r=e.toLowerCase();if(mt(n))return{severity:3,kind:`channel-auth`,channelLabel:t,message:`what happened with ${r} authentication?`};let i=typeof n.healthState==`string`?n.healthState.trim().toLowerCase():void 0;if(i===`terminal-disconnect`||ht(n))return{severity:3,kind:`channel-degraded`,channelLabel:t,message:`what happened with ${r}?`};if(i===`not-running`&&n.running===!1){let e=typeof n.reconnectAttempts==`number`?n.reconnectAttempts:0,t=typeof n.lastStartAt==`number`?n.lastStartAt:void 0,r=typeof n.lastStopAt==`number`?n.lastStopAt:void 0;if(n.restartPending===!1&&r!==void 0&&(t===void 0||r>=t)&&e<10)return null}return n.connected!==!0&&i!==`healthy`&&typeof n.lastError==`string`&&n.lastError.trim()?{severity:3,kind:`channel-degraded`,channelLabel:t,message:`what happened with ${r}?`}:n.connected===!1&&n.running===!0?{severity:2,kind:`channel-disconnected`,channelLabel:t,message:`what happened with ${r}?`}:i&&j.has(i)?{severity:1,kind:`channel-degraded`,channelLabel:t,message:`what happened with ${r}?`}:null}function _t(e){let t=a(e);if(!t)return null;if(a(t.configReload)?.hotReloadStatus===`disabled`)return{severity:3,kind:`config-reload`,message:`what happened with configuration reload?`};let n=a(t.channels);if(!n)return null;let r=a(t.channelLabels),i=null;for(let[e,t]of Object.entries(n)){let n=a(t);if(!n)continue;let o=typeof r?.[e]==`string`?r[e]:e,s=a(n.accounts),c=s?Object.values(s).map(a).filter(e=>e!==null):[],l=c.length>0?c:[n];for(let t of l){let n=gt(e,o,t);n&&(!i||n.severity>i.severity)&&(i=n)}}return i}function vt(e){return e.event===`health`?_t(e.payload):null}var j,M;function N(){return(N=e((()=>{g(),Te(),b(),j=new Set([`disconnected`,`stale-socket`,`stuck`,`terminal-disconnect`]),M=[`tokenStatus`,`botTokenStatus`,`appTokenStatus`,`signingSecretStatus`,`userTokenStatus`]})))()}function yt(e,t){e.activeVariant!==`caretaker`||e.eventNudgeClosed||([e.eventNudge,e.eventNudgePending]=lt(e.eventNudge,e.eventNudgePending,t),e.requestNudgeUpdate())}async function bt(e){let t=e.eventNudge;if(!t||e.sensitive||e.hasUnresolvedQuestion())return;e.eventNudgePending=t,e.requestNudgeUpdate();let n=await e.send(t.message);if(e.eventNudgePending===t){e.eventNudgePending=null;let r=ct(e.eventNudge,t,n);[e.eventNudgeClosed,e.eventNudge]=[r,r?null:e.eventNudge],e.requestNudgeUpdate()}}function xt(e){[e.eventNudge,e.eventNudgeClosed]=[null,!0],e.requestNudgeUpdate()}function St(e,t){e.channelOnboardingNudgeClosed=!0,e.requestNudgeUpdate(),t()}function Ct(e,t,n){e.channelOnboardingNudgeClosed=!0,t(),e.requestNudgeUpdate(),n()}function P(){return(P=e((()=>{N()})))()}function wt(e){return e!==null&&e.length<=512&&e.trim().length>0}function F(){return`control-ui-onboarding-${de()}`}function I(e){try{f()?.setItem(L,e)}catch{}}function Tt(){let e=null;try{e=f()?.getItem(L)??null}catch{}if(wt(e))return{sessionId:e,restored:!0};let t=F();return I(t),{sessionId:t,restored:!1}}var L,R;function z(){return(z=e((()=>{ae(),L=`openclaw.custodian.session.v1`,R=class{constructor(){this.lastDeviceToken=``}key(e){if(!e)return``;let{gatewayUrl:t,token:n,password:r,bootstrapToken:i}=e.connection,a=e.snapshot.hello?.auth;return a&&(this.lastDeviceToken=a.deviceToken??``),JSON.stringify([t,n,r,i,this.lastDeviceToken])}}})))()}function Et(e){if(!e||e.gateway.snapshot.phase!==`connected`)return`unresolved`;let t=e.agents.state.agentsList;if(!t)return`unresolved`;let n=o(e.gateway.snapshot.assistantAgentId??t.defaultId??``),r=t.agents.find(e=>o(e.id)===n);return r?r.model?.primary?.trim()?`ready`:`required`:`unresolved`}function B(){return(B=e((()=>{ne()})))()}function V(e,t){return e.options?.find(e=>Object.is(e.value,t))}function Dt(e,t){if(e.type===`note`||e.type===`action`||e.type===`progress`)return{answer:{stepId:e.id},display:x(`common.continue`)};if(e.type===`text`)return typeof t==`string`?{answer:{stepId:e.id,value:t},display:t}:null;if(e.type===`confirm`)return typeof t==`boolean`?{answer:{stepId:e.id,value:t},display:x(t?`common.yes`:`common.no`)}:null;if(e.type===`select`){let n=V(e,t);return n?{answer:{stepId:e.id,value:t},display:n.label}:null}if(!Array.isArray(t))return null;if(t.length===0)return{answer:{stepId:e.id,value:[]},display:x(`common.none`)};let n=t.map(t=>V(e,t)?.label);return n.every(e=>e!==void 0)?{answer:{stepId:e.id,value:t},display:n.join(`, `)}:null}function Ot(e){return e.type===`multiselect`?Array.isArray(e.initialValue)?[...e.initialValue]:[]:e.initialValue}function kt(e){return Ne(e?.gateway.snapshot??{},Me.SYSTEM_AGENT_WIZARD_CANCEL)??!1}function H(){return(H=e((()=>{je(),b(),w()})))()}function At(e,t){return e?`onboarding`:t?`new-agent`:`caretaker`}function U(e,t){let n=e===`caretaker`?{}:{welcomeVariant:e};if(t===void 0)return n;let r=window.location.pathname,i=Oe(r,De(r));return{...n,message:t,...i?{context:{page:i}}:{}}}function W(e){return e.message!==void 0||e.wizardAnswer!==void 0||e.wizardCancel!==void 0}function jt(e){let t=e&&typeof e==`object`?e.details:void 0;return{inferenceUnavailable:nt(t)!==void 0,sessionInvalidated:rt(t)!==void 0}}function G(){return(G=e((()=>{k(),ye()})))()}var K;function Mt(){return(Mt=e((()=>{g(),h(),b(),K=class extends s{constructor(...e){super(...e),this.selectedValue=``,this.requestKey=``,this.focusPreselection=!1}createRenderRoot(){return this}willUpdate(){let e=this.props,t=e?JSON.stringify([e.header??``,e.question,e.options.map(e=>[e.value,e.label,e.recommended===!0])]):``;t!==this.requestKey&&(this.requestKey=t,this.selectedValue=e?.options.slice(0,4).find(e=>e.recommended)?.value??``,this.focusPreselection=!!this.selectedValue)}updated(e){!this.focusPreselection||this.props?.disabled||(this.focusPreselection=!1,[...this.querySelectorAll(`.option-card__choice`)].find(e=>e.dataset.optionValue===this.selectedValue)?.focus({preventScroll:!0}))}select(e){this.props?.disabled||(this.selectedValue=e,this.props?.onSelect?.(e),this.dispatchEvent(new CustomEvent(`option-select`,{bubbles:!0,composed:!0,detail:{value:e}})))}skip(){this.props?.disabled||(this.props?.onSkip?.(),this.dispatchEvent(new CustomEvent(`option-skip`,{bubbles:!0,composed:!0})))}render(){let e=this.props;if(!e)return v;let t=e.options.slice(0,4),n=t.findIndex(e=>e.recommended===!0);return _`
      <section class="option-card" role="group" aria-label=${e.question}>
        ${e.header?_`<div class="option-card__chip">${e.header}</div>`:v}
        <div class="option-card__question">${e.question}</div>
        <div class="option-card__choices" role="radiogroup">
          ${t.map((t,r)=>{let i=r===n,a=t.value===this.selectedValue;return _`
              <button
                class=${`option-card__choice ${i?`option-card__choice--recommended`:``} ${a?`option-card__choice--selected`:``}`}
                type="button"
                role="radio"
                aria-checked=${a?`true`:`false`}
                data-option-value=${t.value}
                ?disabled=${e.disabled}
                @click=${()=>this.select(t.value)}
              >
                <span class="option-card__choice-copy">
                  <strong>${t.label}</strong>
                  ${t.description?_`<span class="option-card__description">${t.description}</span>`:v}
                </span>
                ${i?_`<span class="option-card__recommended">
                        ${x(`optionCard.recommended`)}
                      </span>`:v}
              </button>
            `})}
        </div>
        <button
          class="option-card__skip"
          type="button"
          ?disabled=${e.disabled}
          @click=${()=>this.skip()}
        >
          ${x(`optionCard.skip`)}
        </button>
      </section>
    `}},n([y({attribute:!1})],K.prototype,`props`,void 0),n([fe()],K.prototype,`selectedValue`,void 0),customElements.get(`openclaw-option-card`)||customElements.define(`openclaw-option-card`,K)})))()}function Nt(e){return _`<div class="custodian__option-card">
    <openclaw-option-card
      .props=${{header:e.question.header,question:e.question.question,options:e.question.options.map(e=>({value:e.label,label:e.label,description:e.description,recommended:e.recommended})),disabled:e.disabled,onSelect:e.onSelect,onSkip:e.onSkip}}
    ></openclaw-option-card>
  </div>`}function Pt(){return(Pt=e((()=>{g(),Mt()})))()}function Ft(e){if(!e||typeof e!=`object`)return null;let t=l(e.id),n=l(e.header),r=l(e.question);if(!t||!n||!r||!Array.isArray(e.options)||e.options.length<2||e.options.length>4)return null;let i=[];for(let t of e.options){let e=l(t?.label);if(!e)return null;let n=l(t.description??null),r=l(t.reply??null);i.push({label:e,...n?{description:n}:{},...t.recommended===!0?{recommended:!0}:{},...r?{reply:r}:{}})}return new Set(i.map(e=>e.label.toLocaleLowerCase())).size!==i.length||i.filter(e=>e.recommended).length>1?null:{id:t,header:n,question:r,options:i,isOther:e.isOther===!0,...e.skipAction===`exit`?{skipAction:`exit`}:{}}}function It(){return(It=e((()=>{})))()}function Lt(e,t,n,r=null,i=null){return{id:e,role:t,text:n,at:Date.now(),question:r,step:i}}function Rt(e,t){let n=t.step??null,r=n?null:Ft(t.question),i=Kt.test(t.reply);return i&&!r&&!n?null:Lt(e,`assistant`,i?``:t.reply,r,n)}function zt(e,t,n,r,i){return r||i||e.some(e=>e.question!==null&&e.question.id!==`system-agent-quick-actions`&&!t.has(`${e.id}:${e.question.id}`)&&!n.has(`${e.id}:${e.question.id}`))}function Bt(e,t){let n=new Set(t);for(let t of e)t.question&&n.add(`${t.id}:${t.question.id}`);return n}function q(e){return ce(e,x(`custodian.requestFailed`))}function Vt(e){let t=`msg-${e.id}`,n={role:e.role,content:e.text};return{kind:`group`,key:t,role:e.role,messages:[{message:n,key:t}],visibleContent:Ve(n,Ke(n)),timestamp:e.at,isStreaming:!1}}async function Ht(e){try{return{ok:!0,turns:(await e.request(`openclaw.chat.history`,{},{timeoutMs:J})).turns}}catch(e){return{ok:!1,error:e}}}function Ut(e,t){let n=t;return{messages:e.map(e=>({id:n++,role:e.role,text:e.role===`user`&&e.text===Jt?x(`custodian.sensitiveReply`):e.text,at:e.at,question:null,step:null})),nextMessageId:n}}function Wt(e,t){return e.id===t?et({kind:`divider`,key:`custodian-earlier`,label:x(`custodian.earlier`),timestamp:e.at}):v}function Gt(e){let t=e.message.question,n=e.message.step;return _`
    ${e.message.text?$e(Vt(e.message),{showReasoning:!1,showToolCalls:!1,assistantName:x(`custodian.title`),assistantAvatar:e.assistantAvatar}):v}
    ${Wt(e.message,e.boundaryAfterId)}
    ${e.showQuestion&&t?Nt({question:t,disabled:e.questionDisabled,onSelect:e.onSelect,onSkip:e.onSkip}):v}
    ${e.showWizardStep&&n?_`<section
            class="custodian__wizard-step"
            aria-label=${p(n.title??n.message,`Setup`)}
          >
            ${n.title?_`<strong class="custodian__wizard-title"
                    >${p(n.title)}</strong
                  >`:v}
            ${Xe({step:n,value:e.wizardValue,busy:e.wizardDisabled,inputId:`custodian-wizard-input-${e.message.id}`,sensitiveRevealed:e.wizardSecretVisible,onValueChange:e.onWizardValueChange,onAnswer:e.onWizardAnswer,leadingAction:e.showWizardCancel?_`<button
                    class="btn btn--ghost custodian__wizard-cancel"
                    type="button"
                    ?disabled=${e.wizardDisabled}
                    @click=${e.onWizardCancel}
                  >
                    ${x(`custodian.cancel`)}
                  </button>`:void 0,onToggleSensitiveVisibility:e.onToggleWizardSecretVisibility})}
          </section>`:v}
  `}var J,Kt,qt,Jt;function Y(){return(Y=e((()=>{g(),T(),Ze(),b(),We(),Ge(),te(),ue(),tt(),Qe(),Pt(),It(),J=15e3,Kt=/^\s*NO_REPLY\s*$/,qt=class{constructor(e,t){this.onStatusChange=e,this.getGatewaySnapshot=t,this.status=E(),this.generation=0,this.recoveryPending=!1,this.inFlight=null}get refreshing(){return this.inFlight!==null}deferRecovery(){this.recoveryPending=!0}clearRecovery(){this.recoveryPending=!1}settleRecovery(e,t){this.recoveryPending&&!e&&(this.clearRecovery(),t())}watchAvailability(e){let t=this.getGatewaySnapshot();return()=>{let n=this.getGatewaySnapshot(),r=n&&m(n)&&(!t||!m(t));t=n,r&&this.recover(e)}}async recover(e){let t=this.generation;await this.inFlight?.promise;let n=this.getGatewaySnapshot();t===this.generation&&n&&m(n)&&(this.status.awaitingGateway||this.status.error!==null)&&e()}invalidate(){this.generation+=1,this.inFlight=null}reset(){this.clearRecovery(),this.invalidate(),this.status=E()}async read(e,t,n){let r=this.inFlight;if(r&&r.client===e&&r.epoch===t)return await r.promise,null;let i=++this.generation;this.status=ze(this.status,{clearError:!1});let a=Ht(e);this.inFlight={client:e,epoch:t,promise:a},this.onStatusChange();try{let e=await a;return!n()||i!==this.generation?null:(this.status=e.ok?Re():Ie(this.status,e.error,this.getGatewaySnapshot()),e)}finally{this.inFlight?.promise===a&&(this.inFlight=null,this.onStatusChange())}}async loadMessages(e,t,n,r){this.clearRecovery();let i=await this.read(e,t,r);return i?.ok&&r()?Ut(i.turns,n):null}},Jt=`<redacted secret>`})))()}var Yt,Xt,X;function Z(){return(Z=e((()=>{b(),w(),A(),P(),z(),B(),H(),N(),G(),Y(),Yt=19e4,Xt=class{constructor(){this.messages=[],this.sending=!1,this.sensitive=!1,this.wizardInputPending=!1,this.wizardSecretVisible=!1,this.questionReplyUncertain=!1,this.error=null,this.transcript=new qt(()=>this.emit(),()=>this.context?.gateway.snapshot),this.dismissedQuestions=new Set,this.answeredQuestions=new Set,this.activeClient=null,this.chatAvailable=!1,this.eventNudge=null,this.eventNudgePending=null,this.eventNudgeClosed=!1,this.channelOnboardingNudgeClosed=!1,this.earlierBoundaryAfterId=null,this.abandonedTurnOutcomeUnknown=!1,this.inferenceState=`unverified`,this.inputDrafts={ordinary:{value:``},sensitive:{value:``}},this.context=null,this.variant=`caretaker`,this.sessionVariant=null,this.restoredIdentity=Tt(),this.sessionId=this.restoredIdentity.sessionId,this.rejoinBarrierPending=this.restoredIdentity.restored,this.requestEpoch=0,this.requestAbort=null,this.nextMessageId=1,this.retryParams=null,this.sessionClient=null,this.sessionOwnershipKey=null,this.sessionOwner=new R,this.sessionStarted=!1,this.configuredInferenceState=`unresolved`,this.gatewayCleanup=null,this.agentCleanup=null,this.eventCleanup=null,this.listeners=new Set}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}connect(e,t){let n=this.context!==e,r=this.variant!==t;if(!(!n&&!r)){if(n){this.gatewayCleanup?.(),this.agentCleanup?.(),this.eventCleanup?.(),this.context=e;let t=this.transcript.watchAvailability(()=>void this.refreshTranscriptIfIdle());this.gatewayCleanup=e.gateway.subscribe(()=>{t(),this.synchronizeClient(),this.emit()}),this.agentCleanup=e.agents.subscribe(()=>{this.synchronizeClient(),this.emit()}),this.eventCleanup=e.gateway.subscribeEvents(e=>yt(this,e))}this.variant=t,this.synchronizeClient(),this.emit()}}get input(){return this.inputDrafts[this.sensitive?`sensitive`:`ordinary`].value}set input(e){this.inputDrafts[this.sensitive?`sensitive`:`ordinary`]={value:e}}setInput(e){this.input=e,this.emit()}resetPromptInput(e){this.inputDrafts.sensitive={value:``},[this.wizardValue,this.wizardSecretVisible]=[void 0,!1],this.sensitive=e}setWizardValue(e){this.wizardValue=e,this.emit()}toggleWizardSecretVisibility(){this.wizardSecretVisible=!this.wizardSecretVisible,this.emit()}hasRealUserTurn(){return this.messages.some(e=>e.role===`user`)}get activeVariant(){return this.variant}hasUnresolvedQuestion(){return zt(this.messages,this.dismissedQuestions,this.answeredQuestions,this.wizardInputPending,this.questionReplyUncertain)}get transcriptBlocked(){return this.sending||this.hasUnresolvedQuestion()||this.transcript.refreshing}async refreshTranscriptIfIdle(){let e=this.activeClient;if(!(!e||!this.sessionStarted||!this.chatAvailable)){if(this.transcriptBlocked){(this.transcript.status.awaitingGateway||this.transcript.status.error!==null)&&this.transcript.deferRecovery();return}await this.refreshTranscriptHistory(e,this.requestEpoch)&&this.abandonedTurnOutcomeUnknown&&(this.abandonedTurnOutcomeUnknown=!1,this.emit())}}canRetry(){return this.retryParams!==null&&!W(this.retryParams)}get setupRequired(){return this.configuredInferenceState===`required`}get canSend(){return this.activeClient!==null&&this.chatAvailable&&!this.sending&&this.configuredInferenceState===`ready`&&this.inferenceState===`ready`}get wizardCancelAvailable(){return kt(this.context)}retry(){let e=this.activeClient,t=this.retryParams;e&&t&&!W(t)&&this.chatAvailable&&!this.sending&&this.initializeSession(e,t,!1)}async send(e,t,n=this.hasUnresolvedQuestion(),r){let i=e??this.input,a=this.sensitive?i:i.trim(),o=this.activeClient;if(!a.trim()||!o||!this.canSend)return this.emit(),`rejected`;let s=this.sensitive?x(`custodian.sensitiveReply`):t??a,c={sessionId:this.sessionId,...U(this.variant,a)};return await this.sendUserTurn(o,c,s,n,()=>r&&(!r.isCurrent()||!r.admit())?!1:(e===void 0&&(this.input=``),!0))}async sendUserTurn(e,t,n,r,i){let a=[this.answeredQuestions,this.questionReplyUncertain],o,s=await this.requestReply(e,t,()=>{let e=this.inputDrafts.ordinary;if(i&&!i())return!1;let t=this.inputDrafts.ordinary;this.resetPromptInput(this.sensitive),o=this.requestEpoch,r&&(this.questionReplyUncertain=!0),this.abandonedTurnOutcomeUnknown=!1,this.answeredQuestions=Bt(this.messages,this.answeredQuestions);let s=Lt(this.nextMessageId++,`user`,n);return this.messages=[...this.messages,s],()=>{this.messages=this.messages.filter(e=>e!==s),this.answeredQuestions=a[0],e!==t&&this.inputDrafts.ordinary===t&&(this.inputDrafts.ordinary=e)}});return r&&this.requestEpoch===o&&(this.questionReplyUncertain=st(a[1],s),s===`rejected`&&(this.answeredQuestions=a[0]),this.emit()),s}requestNudgeUpdate(){this.emit()}sendEventNudge(){return bt(this)}dismissEventNudge(){xt(this)}dismissChannelOnboardingNudge(){St(this,()=>this.context?.replace(`custodian`))}openChannelsFromOnboarding(){Ct(this,()=>this.revokeNavigationAuthority(),()=>this.context?.navigate(`channels`))}async dismissQuestion(e){let t=e.question;if(t){if(t.skipAction===`exit`){this.exitSetup();return}await this.send(t.isOther?x(`optionCard.skip`):`cancel`,x(`optionCard.skip`),!0)!==`rejected`&&this.messages.includes(e)&&(this.dismissedQuestions=new Set(this.dismissedQuestions).add(`${e.id}:${t.id}`),this.emit())}}answerQuestion(e,t){let n=e.question;if(!n)return;let r=n.options.find(e=>e.label===t);this.send(r?.reply??t,t,!0)}answerWizardStep(e,t){if(!e.step||!this.wizardInputPending)return;let n=Dt(e.step,t),r=this.activeClient;if(!n||!r||!this.canSend){this.emit();return}let i=e.step.sensitive?x(`custodian.sensitiveReply`):n.display;this.sendUserTurn(r,{sessionId:this.sessionId,wizardAnswer:n.answer},i,!0)}cancelWizardStep(e){let t=e.step,n=this.activeClient;if(!t||!this.wizardInputPending||!n||!this.canSend||!this.wizardCancelAvailable){this.emit();return}this.sendUserTurn(n,{sessionId:this.sessionId,wizardCancel:{stepId:t.id}},x(`custodian.cancel`),!0)}exitSetup(e=`chat`){this.revokeNavigationAuthority(),this.context?.navigate(e)}revokeNavigationAuthority(){this.requestAbort?.abort(),this.requestAbort=null,this.transcript.clearRecovery(),this.advanceRequestEpoch(),this.sending=!1,this.questionReplyUncertain=!1,this.retryParams=null,this.error=null}advanceRequestEpoch(){return this.transcript.invalidate(),++this.requestEpoch}emit(){this.transcript.settleRecovery(this.transcriptBlocked,()=>void this.refreshTranscriptIfIdle());for(let e of this.listeners)e()}startSession(e,t){this.sessionVariant=this.variant,this.sessionClient=e,this.sessionOwnershipKey=this.sessionOwner.key(this.context?.gateway??null),this.sessionStarted=!0,this.initializeSession(e,{sessionId:this.sessionId,...U(this.variant)},t)}replaceSessionId(e){e===void 0&&(this.rejoinBarrierPending=!1);let t=e??F();this.sessionId=t,I(t)}abandonPendingUserTurn(e){!e||!W(e)||(this.retryParams=null,this.abandonedTurnOutcomeUnknown=!0)}restartVolatileSession(e){this.replaceSessionId(),this.answeredQuestions=Bt(this.messages,this.answeredQuestions),this.resetPromptInput(!1),this.wizardInputPending=this.questionReplyUncertain=!1,this.earlierBoundaryAfterId=this.messages.at(-1)?.id??null,this.startSession(e,!1)}synchronizeClient(){let e=this.context;if(!e)return;let t=e.gateway.snapshot,n=t.phase===`connected`?t.client:null,r=n!==null&&C(t,`openclaw.chat`,`operator.admin`),i=S(t,`openclaw.chat`)===!1,a=Et(this.context),o=a!==this.configuredInferenceState;this.configuredInferenceState=a;let s=this.sessionStarted&&this.sessionVariant!==this.variant,c=this.sessionOwner.key(e.gateway),l=this.sessionStarted&&n!==null&&this.activeClient===null,u=this.sessionStarted&&n!==null&&this.sessionClient!==null&&n!==this.sessionClient,d=this.sessionOwnershipKey!==null&&c!==this.sessionOwnershipKey;if(n===this.activeClient&&!s&&!u&&!d&&this.chatAvailable===(r&&a!==`unresolved`)&&!o)return;let f=this.sending&&this.retryParams!==null,p=f?this.retryParams:null;if((n!==this.activeClient||d)&&this.transcript.clearRecovery(),this.activeClient=n,this.advanceRequestEpoch(),this.sending=!1,this.chatAvailable=!1,s||d)d&&this.replaceSessionId(),[this.eventNudge,this.eventNudgePending]=[null,null],this.eventNudgeClosed=!1,this.abandonedTurnOutcomeUnknown=!1,this.sessionStarted=!1,this.clearConversation();else if(n&&(u||l)){if(!r){this.sessionStarted=!1,this.abandonPendingUserTurn(p),this.error=i?x(`custodian.unsupportedGateway`):null;return}this.chatAvailable=!0,this.abandonPendingUserTurn(p),this.requestAbort?.abort(),this.requestAbort=null,this.sessionClient=n,this.sessionOwnershipKey=c,this.questionReplyUncertain||this.abandonedTurnOutcomeUnknown?(this.questionReplyUncertain=!1,this.wizardInputPending=!1,this.abandonedTurnOutcomeUnknown=!1,this.rejoinBarrierPending=!0,this.initializeSession(n,{sessionId:this.sessionId,...U(this.variant)})):this.refreshTranscriptIfIdle();return}else f&&(p?.message===void 0&&(this.error=x(`custodian.connectionChanged`)),this.abandonPendingUserTurn(p));if(n){if(!r){this.error=i?x(`custodian.unsupportedGateway`):null;return}if(a!==`unresolved`){if(this.chatAvailable=!0,a===`required`){this.sessionStarted=!1,this.clearConversation();return}if(this.sessionStarted){this.retryParams||(this.error=f?this.error:null);return}this.clearConversation(),this.startSession(n,!0)}}}async initializeSession(e,t,n=!0){let r=this.advanceRequestEpoch();this.sending=!0,this.inferenceState=`unverified`,this.error=null,this.retryParams=t,this.emit(),n&&await this.refreshTranscriptHistory(e,r),r===this.requestEpoch&&e===this.activeClient&&await this.requestReply(e,t)}async refreshTranscriptHistory(e,t){let n=this.context;if(!n||S(n.gateway.snapshot,`openclaw.chat.history`)!==!0)return!1;let r=await this.transcript.loadMessages(e,t,this.nextMessageId,()=>t===this.requestEpoch&&e===this.activeClient);return r?([this.messages,this.nextMessageId]=[r.messages,r.nextMessageId],this.earlierBoundaryAfterId=this.messages.at(-1)?.id??null,this.emit(),!0):!1}clearConversation(){this.messages=[],this.dismissedQuestions=new Set,this.answeredQuestions=new Set,this.retryParams=null,this.error=null,this.transcript.reset(),this.inferenceState=`unverified`,this.inputDrafts.ordinary={value:``},this.resetPromptInput(!1),this.wizardInputPending=this.questionReplyUncertain=!1,this.earlierBoundaryAfterId=null}async requestReply(e,t,n){let r=this.context;if(!r)return`rejected`;let i=()=>e===this.activeClient&&r.gateway.snapshot.client===e&&C(r.gateway.snapshot,`openclaw.chat`,`operator.admin`);if(!i())return`rejected`;this.requestAbort?.abort();let a=new AbortController;this.requestAbort=a;let o=this.advanceRequestEpoch(),s=`unsent`,c;this.sending=!0,this.error=null,this.retryParams=t,this.emit();try{if(o!==this.requestEpoch||!i()||(c=n?.())===!1)return this.retryParams===t&&(this.retryParams=null),`rejected`;let l=e.request(`openclaw.chat`,t,{timeoutMs:Yt,onSent:()=>{s=`sent`},signal:a.signal});this.emit();let u=await l;if(s=`received`,o!==this.requestEpoch||e!==this.activeClient||(this.replaceSessionId(u.sessionId),this.resetPromptInput(u.sensitive===!0),this.wizardInputPending=u.wizardInputPending===!0,this.retryParams=null,this.inferenceState=`ready`,this.rejoinBarrierPending&&!W(t)&&(this.rejoinBarrierPending=!1,await this.refreshTranscriptHistory(e,o),o!==this.requestEpoch||e!==this.activeClient)))return`sent`;this.wizardValue=u.step?Ot(u.step):void 0;let d=Rt(this.nextMessageId,u);return d&&(this.nextMessageId+=1,this.messages=[...this.messages,d]),u.handoff?.kind===`model-accounts`?this.exitSetup(`profile`):u.action===`open-agent`?await it({context:r,...u.agentId?{agentId:u.agentId}:{},hatchDraft:u.agentDraft===`hatch`,isCurrent:()=>o===this.requestEpoch&&e===this.activeClient})===`exit-setup`&&this.exitSetup():u.action===`exit`&&this.exitSetup(),`sent`}catch(n){if(o===this.requestEpoch&&e===this.activeClient){s===`unsent`&&c&&c(),this.error=q(n);let{inferenceUnavailable:r,sessionInvalidated:i}=jt(n);r&&(this.inferenceState=`unverified`,this.retryParams={sessionId:this.sessionId,...U(this.variant)}),i&&W(t)?(this.restartVolatileSession(e),this.error=x(`custodian.sessionRestarted`,{error:q(n)})):i&&(this.replaceSessionId(),this.retryParams={...t,sessionId:this.sessionId},this.error=x(`custodian.sessionRestarted`,{error:q(n)}))}return W(t)&&this.retryParams===t&&(this.retryParams=null),ot(n,s)}finally{this.requestAbort===a&&(this.requestAbort=null),o===this.requestEpoch&&(this.sending=!1),this.emit()}}},X=new Xt})))()}function Zt(){return(Zt=e((()=>{})))()}function Qt(e,t,n){e.kind===`navigate`?t.navigate(e.routeId):n&&we({startGatewayUpdate:()=>void t.overlays.runUpdate(),watchUpdateProgress:Ee(t),onAcknowledge:()=>t.overlays.acknowledgeUpdateRun(),onCheckStatus:()=>t.overlays.refreshUpdateStatus(),onReviewUpdate:()=>t.navigate(`updates`),updateAvailable:t.overlays.snapshot.updateAvailable,updateSchedule:t.overlays.snapshot.updateSchedule,viaNativeApp:me()})}function $t(e){let{action:t}=e.alert,n=C(e.context.gateway.snapshot,`update.run`,`operator.admin`),r=t?.target.kind===`update`&&!n;return _`<article class="custodian__nudge custodian__alert-card" role="status">
    <div class="custodian__alert-heading">
      <strong>${e.alert.title}</strong>
      <button
        class="custodian__nudge-dismiss"
        type="button"
        aria-label=${x(`common.dismiss`)}
        @click=${e.onDismiss}
      >
        ×
      </button>
    </div>
    <ul class="custodian__alert-facts">
      ${e.alert.facts.map(e=>_`<li>${e}</li>`)}
    </ul>
    ${t?_`<button
            class="btn btn--sm primary custodian__alert-action"
            type="button"
            title=${r?x(`updates.adminRequired`):v}
            ?disabled=${r}
            @click=${()=>Qt(t.target,e.context,n)}
          >
            ${t.label}
          </button>`:v}
  </article>`}function en(){return(en=e((()=>{g(),he(),Se(),b(),w()})))()}var Q;function $(){return($=e((()=>{i(),g(),h(),xe(),pe(),Ae(),Je(),Ue(),Le(),T(),Pe(),b(),se(),ee(),en(),Ye(),Z(),N(),G(),Y(),Q=class extends u{constructor(){super(),this.store=X,this.onboarding=!1,this.newAgentIntent=!1,this.showChannelOnboardingNudge=!1,this.channelOnboardingError=null,this.channelOnboardingRetrying=!1,this.onRetryChannelOnboarding=()=>void 0,this.compact=!1,this.historyContent=v,this.lastMessageId=null,new d(this).watch(()=>this.store,(e,t)=>e.subscribe(t)).watch(()=>D,(e,t)=>e.subscribe(t))}async getUpdateComplete(){let e=await super.getUpdateComplete();return await Promise.all(Array.from(this.querySelectorAll(`openclaw-option-card`)).map(e=>e.updateComplete)),e}willUpdate(){this.store.connect(this.context,At(this.onboarding,this.newAgentIntent))}updated(){let e=this.store;e.canSend&&!e.sensitive&&!e.hasUnresolvedQuestion()&&D.askIfReady((t,n,r)=>void e.send(t,r,!1,n));let t=this.querySelector(`.custodian__messages`),n=this.store.messages.at(-1)?.id??null;if(n!==this.lastMessageId){this.lastMessageId=n;let e=t?.lastElementChild;e instanceof HTMLElement&&e.scrollIntoView?.({block:`nearest`})}}handleComposerKeydown(e){e.key!==`Enter`||e.shiftKey||e.isComposing||(e.preventDefault(),this.store.send())}render(){let e=this.store,t=ve(`favicon.svg`,this.context.resourceBasePath),n=D.alert?$t({alert:D.alert,context:this.context,onDismiss:()=>D.dismiss()}):v;if(e.setupRequired)return _`
        <section
          class="custodian-surface custodian-surface--setup-required ${this.compact?`custodian-surface--panel`:``}"
        >
          ${n}
          <div class="custodian__setup-state" role="alert">
            <openclaw-mascot mood="idle" .size=${this.compact?72:96}></openclaw-mascot>
            <h2>${x(`modelSetup.required.title`)}</h2>
            <p>${x(`modelSetup.required.body`)}</p>
            <div class="custodian__setup-actions">
              <button
                class="btn primary"
                type="button"
                @click=${()=>e.exitSetup(`model-setup`)}
              >
                ${x(`modelSetup.required.action`)}
              </button>
            </div>
          </div>
        </section>
      `;let r=e.messages.length===0&&e.error!==null&&!e.sending,i=e.wizardInputPending?e.messages.findLast(e=>e.step!==null):void 0;return _`
      <section
        class="custodian-surface ${this.compact?`custodian-surface--panel`:``} ${r?`custodian-surface--empty-error`:``}"
      >
        <div
          class="custodian__messages"
          ${qe()}
          aria-live="polite"
          @click=${e=>{Be(e),Fe(e)}}
        >
          ${n}
          ${this.channelOnboardingError?pt({retrying:this.channelOnboardingRetrying,onRetry:this.onRetryChannelOnboarding,onDismiss:()=>e.dismissChannelOnboardingNudge()}):this.showChannelOnboardingNudge?ft({onOpenChannels:()=>e.openChannelsFromOnboarding(),onDismiss:()=>e.dismissChannelOnboardingNudge()}):v}
          ${!this.onboarding&&e.eventNudge&&!e.eventNudgePending?dt({nudge:e.eventNudge,disabled:!e.canSend||e.sensitive||e.hasUnresolvedQuestion(),onSend:()=>void e.sendEventNudge(),onDismiss:()=>e.dismissEventNudge()}):v}
          ${e.messages.map(n=>{let r=n.question?`${n.id}:${n.question.id}`:``,a=n.question!==null&&!e.dismissedQuestions.has(r);return Gt({message:n,boundaryAfterId:e.earlierBoundaryAfterId,assistantAvatar:t,showQuestion:a,questionDisabled:!e.canSend||e.answeredQuestions.has(r),onSelect:t=>e.answerQuestion(n,t),onSkip:()=>void e.dismissQuestion(n),showWizardStep:n===i,wizardValue:e.wizardValue,wizardDisabled:!e.canSend,wizardSecretVisible:e.wizardSecretVisible,onWizardValueChange:t=>e.setWizardValue(t),onWizardAnswer:t=>e.answerWizardStep(n,t),showWizardCancel:e.wizardCancelAvailable,onWizardCancel:()=>e.cancelWizardStep(n),onToggleWizardSecretVisibility:()=>e.toggleWizardSecretVisibility()})})}
          ${e.sending?_`<div class="chat-group assistant custodian__thinking-row" role="status">
                  <div class="chat-avatar assistant custodian__mascot-avatar" aria-hidden="true">
                    <openclaw-mascot mood="thinking" .size=${26}></openclaw-mascot>
                  </div>
                  <div class="chat-group-messages custodian__thinking">
                    <span></span><span></span><span></span>
                    <span class="sr-only">${x(`custodian.thinking`)}</span>
                  </div>
                </div>`:v}
          ${e.abandonedTurnOutcomeUnknown?_`<div class="custodian__error" role="alert">
                  <span>${x(`custodian.connectionChanged`)}</span>
                </div>`:v}
          ${He({status:e.transcript.status,className:`custodian__transcript-status`})}
          ${e.error&&!(e.abandonedTurnOutcomeUnknown&&e.error===x(`custodian.connectionChanged`))?_`<div class="custodian__error" role="alert">
                  <span>${e.error}</span>
                  ${e.activeClient&&e.chatAvailable&&e.canRetry()?_`<button
                          class="btn btn--sm"
                          type="button"
                          @click=${()=>e.retry()}
                        >
                          ${x(`common.retry`)}
                        </button>`:v}
                </div>`:v}
        </div>

        ${this.historyContent}
        ${i?v:_`<div class="agent-chat__composer-shell">
                <div class="agent-chat__input">
                  <div class="agent-chat__composer-input-row">
                    <div class="agent-chat__composer-combobox">
                      ${e.sensitive?_`<input
                              type="password"
                              .value=${e.input}
                              autocomplete="off"
                              placeholder=${x(`custodian.sensitivePlaceholder`)}
                              aria-label=${x(`custodian.sensitivePlaceholder`)}
                              ?disabled=${!e.canSend}
                              @input=${t=>e.setInput(t.target.value)}
                              @keydown=${e=>this.handleComposerKeydown(e)}
                            />`:_`<textarea
                              rows="1"
                              .value=${e.input}
                              autocomplete="on"
                              placeholder=${x(`custodian.placeholder`)}
                              aria-label=${x(`custodian.placeholder`)}
                              ?disabled=${!e.canSend}
                              @input=${t=>e.setInput(t.target.value)}
                              @keydown=${e=>this.handleComposerKeydown(e)}
                            ></textarea>`}
                    </div>
                    <div class="agent-chat__composer-actions">
                      <button
                        class="chat-send-btn"
                        type="button"
                        aria-label=${x(`custodian.send`)}
                        ?disabled=${!e.input.trim()||!e.canSend}
                        @click=${()=>void e.send()}
                      >
                        ${ke.arrowUp}
                        <span class="agent-chat__control-label">${x(`custodian.send`)}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>`}
      </section>
    `}},n([r({context:Ce,subscribe:!0})],Q.prototype,`context`,void 0),n([y({attribute:!1})],Q.prototype,`store`,void 0),n([y({attribute:!1})],Q.prototype,`onboarding`,void 0),n([y({attribute:!1})],Q.prototype,`newAgentIntent`,void 0),n([y({attribute:!1})],Q.prototype,`showChannelOnboardingNudge`,void 0),n([y({attribute:!1})],Q.prototype,`channelOnboardingError`,void 0),n([y({attribute:!1})],Q.prototype,`channelOnboardingRetrying`,void 0),n([y({attribute:!1})],Q.prototype,`onRetryChannelOnboarding`,void 0),n([y({attribute:!1})],Q.prototype,`compact`,void 0),n([y({attribute:!1})],Q.prototype,`historyContent`,void 0),customElements.get(`openclaw-custodian-surface`)||customElements.define(`openclaw-custodian-surface`,Q)})))()}export{Z as i,Zt as n,X as r,$ as t};
//# sourceMappingURL=custodian-surface-C45NYNiU.js.map