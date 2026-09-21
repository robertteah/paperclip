const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./browser-qPo8-Qu_.js","./rolldown-runtime-DkW27tQK.js","./control-ui-foundation-DMb6IeIq.js","./control-ui-core-DzidtL-P.js","./lit-runtime-vxhGQLC6.js","./control-ui-core-CaKBexnk.js","./control-ui-core-uEI6aN5p.js","./gateway-runtime-DP4whqrA.js","./control-ui-core-BRgpioGt.css","./sw-refresh.runtime-BgcP0jqe.js","./ghostty-web-Cbs8rc72.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$n as t,Fr as n,Gi as r,Vi as i,bi as a,xi as o}from"./control-ui-foundation-DMb6IeIq.js";import{Jo as s,Kc as c,Qa as l,Yo as u,eo as d,qc as f,qo as p}from"./control-ui-core-DzidtL-P.js";import{$ as m,K as h,Q as ee,X as g,at as _,dt as v,q as y,st as b}from"./lit-runtime-vxhGQLC6.js";import{Bt as x,Ft as S,Gt as C,It as w,R as T,V as te,m as ne,p as re,z as E}from"./control-ui-core-uEI6aN5p.js";import{B as ie,I as ae,L as oe,R as se}from"./control-ui-boot-shared-nBxCfWV5.js";import{Bt as ce,C as D,D as le,E as ue,Jt as de,S as fe,T as pe,_ as me,qt as he,v as ge,w as _e,x as ve,y as O,zt as ye}from"./control-ui-boot-chat-pu3gR1ly.js";import{c as be,l as xe}from"./control-ui-boot-chat-B1e-zt03.js";import{_a as Se,ga as Ce}from"./control-ui-boot-shared-CH-OC11d.js";import{n as we,r as Te,t as Ee}from"./dock-layout-controller-CX9mJz3R.js";import{n as De,t as Oe}from"./scrollbar-styles-DxwFVPWs.js";import{n as ke,r as Ae,t as k}from"./panel-tab-strip-DnNDQ8xL.js";import{n as je,t as Me}from"./dock-destination-controls-CkTWFxAL.js";import{n as A}from"./theme-color-BwHgSJo3.js";var j,M;function N(){return(N=e((()=>{j=16777216,M=864e5,Math.ceil(j/3)*4})))()}function Ne(e){return e.shellName??C(`terminal.tabLabel`,{n:String(e.sequence)})}function Pe(e){return e.agentId===null||e.cwd===null?null:C(`terminal.tabHint`,{agent:e.agentId,cwd:e.cwd})}function Fe(e){return e.status===`connecting`?C(`terminal.connecting`):e.status===`exited`?e.exitReason===`detached`?C(`terminal.detached`):typeof e.exitSignal==`number`&&e.exitSignal>0?C(`terminal.exitedSignal`,{signal:String(e.exitSignal)}):e.exitReason===`process_exit`&&typeof e.exitCode==`number`?C(`terminal.exitedCode`,{code:String(e.exitCode)}):C(`terminal.exited`):null}function Ie(e){let t=e.tabs.map(e=>{let t=Ne(e);return{id:e.id,domId:`terminal-tab-${e.id}`,label:t,title:Pe(e),icon:P,statusLabel:Fe(e),badge:e.agentOwned?C(`terminal.agentOwnedBadge`):null,className:`is-${e.status}`,closeLabel:`${C(`terminal.closeSession`)}: ${t}`}});return Ae({tabs:t,activeId:e.activeId,ariaControls:`terminal-tab-panel`,onSelect:e.onSelect,onClose:e.onClose,onNew:e.onNew,newLabel:C(`terminal.newSession`),newDisabled:e.booting})}var P;function F(){return(F=e((()=>{h(),x(),k(),P=ee`<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4l3 3-3 3M8 11h5" /></svg>`})))()}async function Le(e,t,n,r){let i={sessionId:t,...n};return await(r?e.request(`terminal.upload`,i,{signal:r}):e.request(`terminal.upload`,i))}async function Re(e){if(e.size>I)throw Error(C(`terminal.uploadTooLarge`,{file:e.name}));let t=new Uint8Array(await e.arrayBuffer()),n=[],r=32768;for(let e=0;e<t.length;e+=r)n.push(String.fromCharCode(...t.subarray(e,e+r)));return btoa(n.join(``))}function ze(e,t){let n=t.split(/[\\/]/u).pop()?.toLowerCase()??``;if(/^(?:pwsh|powershell)(?:\.exe)?$/u.test(n))return`'${e.replaceAll(`'`,`''`)}'`;if(/^cmd(?:\.exe)?$/u.test(n)){if(/[%!]/u.test(e))throw Error(C(`terminal.uploadUnsafeCmdPath`));return`"${e.replaceAll(`"`,`""`)}"`}if(!/^(?:(?:ba|da|a|k|z)?sh|fish)(?:\.exe)?$/u.test(n))throw Error(C(`terminal.uploadUnsupportedShell`,{shell:n||t}));return/^[A-Za-z0-9_@%+=:,./-]+$/u.test(e)?e:`'${e.replaceAll(`'`,`'\\''`)}'`}var I;function L(){return(L=e((()=>{x(),I=16777216})))()}function Be(e){if(typeof e==`object`&&e&&`retryable`in e){let t=e;return t.gatewayCode===`UNAVAILABLE`||t.code===`UNAVAILABLE`||t.retryable===!0}return!0}function Ve(e){return g`<div class="rail-header__actions tp-actions">
    <input
      class="tp-file-input"
      type="file"
      multiple
      aria-hidden="true"
      tabindex="-1"
      @change=${e.upload.handleFileSelection}
    />
    <button
      class="rail-header__action tp-icon tp-upload"
      type="button"
      title=${C(`terminal.addFiles`)}
      aria-label=${C(`terminal.addFiles`)}
      ?disabled=${e.upload.hasPendingBatch()||!e.upload.hasActiveTab()}
      @click=${e.upload.chooseFiles}
    >
      ${S.paperclip}
    </button>
    ${e.fullscreen?y:g`${e.sessionPicker}${e.embedded?g`<button
                  class="rail-header__action tp-icon"
                  type="button"
                  title=${C(`terminal.dockBottom`)}
                  aria-label=${C(`terminal.dockBottom`)}
                  @click=${()=>e.onDock(`bottom`)}
                >
                  ${S.panelBottomOpen}
                </button>`:g`${je({current:e.dock,groupClass:`tp-dock-modes`,groupLabel:C(`terminal.dockMode`),destinations:[{dock:`bottom`,label:C(`terminal.dockBottom`),icon:S.panelBottomOpen,className:`tp-icon`},{dock:`right`,label:C(`terminal.dockRight`),icon:S.panelRightOpen,className:`tp-icon`},{dock:`main`,label:C(`terminal.dockMain`),icon:S.columns2,className:`tp-icon`}],onSelect:e.onDock})}
                  <button
                    class="rail-header__action tp-icon tp-open-fullscreen"
                    type="button"
                    data-new-tab-action
                    title=${C(`terminal.openWindow`)}
                    aria-label=${C(`terminal.openWindow`)}
                    @click=${e.onOpenFullscreen}
                  >
                    ${S.maximize}
                  </button>
                  <button
                    class="rail-header__action tp-icon"
                    type="button"
                    title=${C(`terminal.hide`)}
                    aria-label=${C(`terminal.hide`)}
                    @click=${e.onHide}
                  >
                    ${S.x}
                  </button>`}`}
  </div>`}function He(e){let t=e.progress;return g`${e.dragActive?g`<div class="tp-drop-overlay">${C(`terminal.dropFiles`)}</div>`:y}
  ${t?g`<div
          class="tp-upload-card ${t.state===`failed`?`tp-upload-card--failed`:``}"
          role=${t.state===`failed`?`alert`:`status`}
          aria-live=${t.state===`failed`?`assertive`:`polite`}
        >
          <div class="tp-upload-card__header">
            <div class="tp-upload-card__copy">
              <div class="tp-upload-card__title">
                ${t.state===`failed`?C(`terminal.uploadFailed`):C(`terminal.uploadProgress`,{current:String(t.current),total:String(t.total)})}
              </div>
              <div class="tp-upload-card__file">${t.fileName}</div>
            </div>
            <div class="tp-upload-card__actions">
              ${t.state===`failed`&&t.retryable?g`<button
                      class="tp-upload-card__action tp-upload-retry"
                      type="button"
                      @click=${e.retry}
                    >
                      ${C(`terminal.retryUpload`)}
                    </button>`:y}
              <button
                class="tp-upload-card__action tp-upload-cancel"
                type="button"
                @click=${e.cancel}
              >
                ${C(`common.cancel`)}
              </button>
            </div>
          </div>
          <div
            class="tp-upload-progress"
            role="progressbar"
            aria-label=${t.state===`failed`?C(`terminal.uploadFailed`):C(`terminal.uploadProgress`,{current:String(t.current),total:String(t.total)})}
            aria-valuemin="0"
            aria-valuemax=${String(t.total)}
            aria-valuenow=${String(t.completed)}
          >
            <span
              class="tp-upload-progress__fill"
              style=${`width:${t.completed/t.total*100}%`}
            ></span>
            ${t.state===`uploading`?g`<span class="tp-upload-progress__activity"></span>`:y}
          </div>
          ${t.error?g`<div class="tp-upload-card__error">${t.error}</div>`:y}
          ${t.state===`failed`&&t.canInsert?g`<div class="tp-upload-card__recovery">
                  <button
                    class="tp-upload-card__action tp-upload-insert"
                    type="button"
                    @click=${e.insertCompleted}
                  >
                    ${C(`terminal.insertUploadedPaths`)}
                  </button>
                </div>`:y}
        </div>`:y}`}var R;function z(){return(z=e((()=>{h(),N(),x(),u(),Me(),w(),L(),R=class{constructor(e){this.host=e,this.dragActive=!1,this.batch=null,this.dragDepth=0,this.chooseFiles=()=>{this.host.fileInput()?.click()},this.handleFileSelection=e=>{let t=e.currentTarget,n=Array.from(t.files??[]);t.value=``,this.uploadFiles(n)},this.handleDragEnter=e=>{!this.hasDraggedFiles(e)||!this.hasActiveTab()||this.hasPendingBatch()||(e.preventDefault(),this.dragDepth+=1,this.dragActive=!0,this.host.requestUpdate())},this.handleDragOver=e=>{!this.hasDraggedFiles(e)||!this.hasActiveTab()||this.hasPendingBatch()||(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=`copy`))},this.handleDragLeave=e=>{this.hasDraggedFiles(e)&&(this.dragDepth=Math.max(0,this.dragDepth-1),this.dragDepth===0&&(this.dragActive=!1,this.host.requestUpdate()))},this.handleDrop=e=>{this.hasDraggedFiles(e)&&(e.preventDefault(),this.dragDepth=0,this.dragActive=!1,this.host.requestUpdate(),!this.hasPendingBatch()&&this.uploadFiles(Array.from(e.dataTransfer?.files??[])))},this.insertCompleted=()=>{let e=this.batch;e?.state===`failed`&&e.paths.length>0&&this.insertPaths(e)},this.retry=()=>{let e=this.batch;if(!(!e||e.state!==`failed`||!e.retryable)){if(!this.host.isCurrent(e.tab)||!this.host.client()){this.cancelBatch(e);return}this.ensureUploadsRetained(e)&&(e.state=`uploading`,e.error=null,e.retryable=!1,e.abortController=new AbortController,this.host.requestUpdate(),this.runBatch(e))}},this.cancel=()=>{let e=this.batch;e&&this.cancelBatch(e)}}hasActiveTab(){return!!this.host.activeTab()}hasPendingBatch(){return this.batch!==null}get progress(){let e=this.batch;if(!e)return null;let t=e.files.length,n=Math.min(e.nextIndex,t-1);return{completed:e.nextIndex,canInsert:e.paths.length>0&&(e.expiresAtMs===null||Date.now()<e.expiresAtMs),current:n+1,error:e.error,fileName:e.files[n]?.name??``,retryable:e.retryable,state:e.state,total:t}}hasDraggedFiles(e){return Array.from(e.dataTransfer?.types??[]).includes(`Files`)}uploadFiles(e){let t=this.host.activeTab();if(e.length===0||!t||!this.host.client()||this.hasPendingBatch())return;this.host.setError(null);let n={tab:t,files:e,paths:[],expiresAtMs:null,nextIndex:0,state:`uploading`,error:null,retryable:!1,abortController:new AbortController};this.batch=n,this.host.requestUpdate(),this.runBatch(n)}isActive(e){return this.batch===e&&!e.abortController.signal.aborted}ensureCurrent(e){return this.isActive(e)?this.host.isCurrent(e.tab)?!0:(this.cancelBatch(e),!1):!1}failBatch(e,t,n){this.ensureCurrent(e)&&(e.state=`failed`,e.error=p(t),e.retryable=n,this.host.requestUpdate())}ensureUploadsRetained(e){return e.expiresAtMs!==null&&Date.now()>=e.expiresAtMs?(this.failBatch(e,Error(C(`terminal.uploadExpired`)),!1),!1):!0}async runBatch(e){let t=this.host.client();if(!t||!this.ensureCurrent(e)){this.cancelBatch(e);return}for(;e.nextIndex<e.files.length;){let n=e.files[e.nextIndex];if(!n||!this.ensureCurrent(e)||!this.ensureUploadsRetained(e))return;this.host.requestUpdate();let r;try{r=await Re(n)}catch(t){this.failBatch(e,t,!1);return}if(!this.ensureCurrent(e))return;let i,a=Date.now();try{let a=await Le(t,e.tab.gatewaySessionId,{name:n.name,contentBase64:r},e.abortController.signal);if(!this.ensureCurrent(e))return;i=a.path}catch(t){this.failBatch(e,t,Be(t));return}try{i=ze(i,e.tab.shell)}catch(t){this.failBatch(e,t,!1);return}e.paths.push(i),e.expiresAtMs??=a+M,e.nextIndex+=1,this.host.requestUpdate()}this.insertPaths(e)}insertPaths(e){!this.ensureCurrent(e)||!this.ensureUploadsRetained(e)||(e.tab.controller.terminal.paste(e.paths.join(` `)),e.tab.controller.terminal.focus(),this.batch=null,this.host.requestUpdate())}cancelForTab(e){let t=this.batch;t?.tab===e&&this.cancelBatch(t)}cancelBatch(e){this.batch===e&&(e.abortController.abort(),this.batch=null,this.dragActive=!1,this.dragDepth=0,this.host.requestUpdate())}dispose(){this.batch?.abortController.abort(),this.batch=null,this.dragActive=!1,this.dragDepth=0}}})))()}function Ue(e,t,n,r,i,a,o,s){return Ve({fullscreen:e,embedded:t,dock:n,upload:r,sessionPicker:i,onDock:a,onOpenFullscreen:o,onHide:s})}function We(e,t,n,r,i,a,o){return g`<header class="rail-header tp-header">
    ${Ie({tabs:e,activeId:t,booting:n,onSelect:i,onClose:a,onNew:o})}
    ${r}
  </header>`}function Ge({activeId:e,connecting:t,error:n,uploadController:r}){return g`
    ${n?g`<div class="tp-error" role="alert">
            <span>${n.text}</span>
            ${n.retry?g`<button class="btn btn--sm" type="button" @click=${n.retry}>
                    ${C(`common.retry`)}
                  </button>`:y}
          </div>`:y}
    <wa-tab-panel
      id="terminal-tab-panel"
      class="tp-viewport"
      name=${e??`terminal`}
      active
      aria-labelledby=${e?`terminal-tab-${e}`:y}
      @dragenter=${r.handleDragEnter}
      @dragover=${r.handleDragOver}
      @dragleave=${r.handleDragLeave}
      @drop=${r.handleDrop}
    >
      ${t?de(`terminal`,C(`terminal.connecting`),!1,!0):y}
      ${!e&&!t&&!n?ce({icon:S.terminal,heading:C(`chat.sidePanel.terminal`),description:C(`chat.sidePanel.terminalEmpty`)}):y}
      ${He(r)}
    </wa-tab-panel>
  `}function Ke(e){return e instanceof pe?C(`terminal.connectionTimedOut`):e instanceof ue?C(`terminal.unusableSession`,{field:e.field}):p(e)}function B(){return(B=e((()=>{h(),x(),u(),w(),ye(),he(),le(),F(),z()})))()}function V(e){let t=e.getRootNode();return t instanceof ShadowRoot?t.activeElement??document.activeElement:document.activeElement}function H(e,t){return t===e||e.contains(t)}function U(e){e instanceof HTMLElement&&e.isConnected&&e.focus()}function W(e,t){try{e.dispose()}catch{}finally{t.remove()}}async function qe(e,t,n,r){if(r.aborted)return!1;let i=e.controller,a=e.host,o=V(a),s=H(a,o),c=a.cloneNode();c.style.display=`block`,c.style.visibility=`hidden`,c.inert=!0,a.before(c);let l,u=()=>{H(c,V(c))&&U(o),l?W(l,c):c.remove()};try{if(l=await t(c,{readOnly:!0}),r.aborted||(n&&l.write(Je.encode(n)),await new Promise(e=>{setTimeout(e,0)}),r.aborted))return u(),!1}catch(e){throw u(),e}let d=V(a),f=null;return H(a,d)?f=c:H(c,d)&&(f=s?c:o),c.inert=!1,l.setReadOnly(i.readOnly),c.style.display=a.style.display,c.style.visibility=a.style.visibility,e.controller=l,e.host=c,W(i,a),U(f),!0}var Je;function G(){return(G=e((()=>{Je=new TextEncoder})))()}function Ye(e,t){let n=e?.trim();return!t&&n&&!d(n)?n:void 0}function Xe(e){let t=e.split(/[\\/]/).pop()?.trim();return t&&t.length>0?t:`shell`}function K(e){let t=e.terminal;t.renderer&&t.wasmTerm&&t.renderer.render(t.wasmTerm,!0,t.viewportY,t,0)}var Ze,q;function J(){return(J=e((()=>{l(),Ze=`ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Symbols Nerd Font Mono", "MesloLGLDZ Nerd Font Mono", "JetBrainsMono Nerd Font Mono", "Liberation Mono", monospace`,q=new TextEncoder})))()}function Qe(e,t){let n=new be($e,{mode:`latch`},e=>e.length);return{buffer:n,onData:r=>{let i=et.decode(r),a=t();a?e.input(a,i):n.push(i)},onResize:({columns:n,rows:r})=>{let i=t();i&&e.resize(i,n,r)}}}var $e,et;function tt(){return(tt=e((()=>{xe(),$e=8192,et=new TextDecoder})))()}function nt(){let e=getComputedStyle(document.documentElement);return{background:A(e,`--bg`),cursor:A(e,`--accent`),foreground:A(e,`--text`)}}function rt(e){let t=nt();return{...e===`light`?at:it,...t,cursorAccent:t.background,selectionBackground:`${t.cursor}${e===`light`?`4d`:`52`}`}}var it,at;function Y(){return(Y=e((()=>{it={black:`#1b1e26`,red:`#ff6b6b`,green:`#4ec9a8`,yellow:`#e5c07b`,blue:`#5aa2ff`,magenta:`#c586c0`,cyan:`#56b6c2`,white:`#d7dae0`,brightBlack:`#5c6370`,brightRed:`#ff8787`,brightGreen:`#6fd7bd`,brightYellow:`#f0d197`,brightBlue:`#7cb7ff`,brightMagenta:`#d7a3d4`,brightCyan:`#7bd3dd`,brightWhite:`#ffffff`},at={black:`#3a3f4b`,red:`#c62f3d`,green:`#177a5e`,yellow:`#8f6400`,blue:`#1e66d0`,magenta:`#94439c`,cyan:`#0f7487`,white:`#1b1e26`,brightBlack:`#5c6370`,brightRed:`#a3242f`,brightGreen:`#0f664e`,brightYellow:`#755200`,brightBlue:`#1a55ab`,brightMagenta:`#7c3382`,brightCyan:`#0c6070`,brightWhite:`#0a0c10`}})))()}async function ot(e){let{panel:t,connection:n}=e,r=document.createElement(`div`);if(r.className=`tp-host`,await t.updateComplete,!e.isCurrent())throw Error(`terminal operation cancelled`);let i=t.findTerminalPanelViewport();if(!i)throw Error(`terminal viewport unavailable`);i.append(r);let o={},s=Qe(n,()=>o.current?.gatewaySessionId),{createTerminalDefaultColorQueryResponder:c}=await a(async()=>{let{createTerminalDefaultColorQueryResponder:e}=await import(`./browser-qPo8-Qu_.js`);return{createTerminalDefaultColorQueryResponder:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),l=c({getColors:nt,reply:e=>s.onData(q.encode(e))}),u=(n,r)=>t.createTerminalController({parent:n,readOnly:r?.readOnly??!1,terminalOptions:{fontSize:11,fontFamily:Ze,cursorBlink:!0,theme:rt(t.themeMode),scrollback:5e3},signal:e.signal,onData:s.onData,onResize:s.onResize}),d;try{d=await u(r)}catch(e){throw r.remove(),e}if(!e.isCurrent())throw W(d,r),Error(`terminal operation cancelled`);let f={id:`tab-${e.sequence}`,sequence:e.sequence,gatewaySessionId:``,pendingInput:s.buffer,defaultColorQueries:l,shellName:null,shell:``,agentId:null,cwd:null,agentOwned:!1,controller:d,host:r,status:`connecting`,awaitFirstOutput:e.awaitFirstOutput,readyTimer:null};return o.current=f,{tab:f,connection:n,cols:d.terminal.cols||80,rows:d.terminal.rows||24,sink:{onData:t=>{f.cancelled||(f.defaultColorQueries.observe(t),f.controller.write(q.encode(t)),t.length>0&&e.onReady(f))},onReplay:({data:t,newlyObservedFrom:n,mode:r,signal:i})=>{if(!(f.cancelled||i.aborted)){if(f.defaultColorQueries.primeFromReplay(t.slice(0,n)),f.defaultColorQueries.observe(t.slice(n)),r===`recovery`)return qe(f,u,t,i).then(n=>{n&&t&&e.onReady(f)});t&&(f.controller.write(q.encode(t)),e.onReady(f))}},onExit:t=>e.onExit(f,t)}}}function st(){return(st=e((()=>{G(),J(),tt(),Y(),o()})))()}async function ct(e,t){await t,e&&(e.controller.fit(),K(e.controller),e.controller.terminal.focus())}function lt(e,t){let n;for(let r of e){let e=r.controller.terminal;e.renderer&&e.wasmTerm&&(e.renderer.setTheme(n??=rt(t)),K(r.controller))}}function ut(e,t,n){if(!n)return;for(let t of e)t.host.parentElement!==n&&n.append(t.host);let r=e.find(e=>e.id===t);r&&(r.controller.fit(),K(r.controller))}function dt(e,t){e.find(e=>e.id===t)?.controller.fit()}function ft(e){for(let t of e)t.controller.fit()}function pt(e,t){for(let n of e)n.host.style.display=n.id===t?`block`:`none`}function X(){return(X=e((()=>{J(),Y()})))()}var Z;function mt(){return(mt=e((()=>{Z=class{constructor(e){this.options=e}markReady(e){this.stop(e),e.status===`connecting`&&(e.status=`live`,this.options.onReady(e))}arm(e){e.readyTimer||e.status!==`connecting`||!e.awaitFirstOutput||(e.readyTimer=setTimeout(()=>{e.readyTimer=null,!(!this.options.isCurrent(e)||e.status!==`connecting`||!e.awaitFirstOutput)&&(e.awaitFirstOutput=!1,this.options.onTimeout(e))},this.options.timeoutMs()))}stop(e){e.readyTimer&&=(clearTimeout(e.readyTimer),null),e.awaitFirstOutput=!1}}})))()}async function ht(e,t){for(let n of t)if(await n(),!e())return}var gt;function _t(){return(_t=e((()=>{gt=class{constructor(){this.tail=Promise.resolve(),this.generation=0}enqueue(e){let t=this.generation,n=()=>t===this.generation,r=()=>n()?e(n):Promise.resolve(),i=this.tail.then(r,r);return this.tail=i.catch(()=>{}),i}enqueueSteps(...e){return this.enqueue(t=>ht(t,e))}reset(){this.generation+=1}}})))()}var vt;function yt(){return(yt=e((()=>{x(),u(),le(),G(),B(),st(),X(),J(),ge(),ve(),mt(),_t(),o(),vt=class{constructor(e){this.host=e,this.tabs=[],this.activeId=null,this.booting=!1,this.connection=null,this.activeClient=null,this.activeAvailable=!1,this.hadClient=!1,this.hadAvailable=!1,this.lifecycleGeneration=0,this.lifecycleAbortController=new AbortController,this.lifecycleSyncToken=0,this.tabSequence=0,this.openRetry=new me,this.bootQueue=new gt,e.addController(this),this.intentHost={bootQueue:this.bootQueue,currentGeneration:()=>this.lifecycleGeneration,canRun:()=>this.terminalActionsCanRun(),attach:(e,t)=>this.attachSessionNow(e,t),open:(e,t)=>this.openSessionNow(e,t),reattach:()=>this.reattachPersistedSessions(),ensureInitial:e=>this.ensureInitialSession(e),hasTabs:()=>this.tabs.length>0,requestUpdate:()=>this.host.requestUpdate(),setBooting:e=>this.updateControllerState(`booting`,e),timeoutMs:()=>this.host.catalogReadyTimeoutMs,showTimeout:()=>this.host.terminalPanelErrorText=C(`terminal.refreshRequired`),clearTimeout:()=>this.host.terminalPanelErrorText=null},this.readiness=new Z({timeoutMs:()=>this.host.catalogReadyTimeoutMs,isCurrent:e=>this.tabs.includes(e),onReady:()=>{this.openRetry.clear(),this.updateControllerState(`tabs`,[...this.tabs]),D(this.tabs)},onTimeout:e=>{this.host.terminalPanelErrorText=C(`terminal.connectionTimedOut`),this.connection?.close(e.gatewaySessionId),this.dropFailedTab(e),D(this.tabs)}})}hostConnected(){}updateControllerState(e,t){Object.assign(this,{[e]:t}),this.host.requestUpdate()}connectHost(){this.activeClient=this.host.client,this.activeAvailable=this.host.available,this.hadClient=this.host.client!==null,this.hadAvailable=this.host.available,O.bindHost(this.intentHost),this.updateControllerState(`booting`,O.hasActions)}disconnectHost(){O.releaseHost(this.intentHost),this.disposeAllTabs(),this.activeClient=null,this.activeAvailable=!1}scheduleLifecycleSync(){let e=++this.lifecycleSyncToken,t=this.lifecycleGeneration;queueMicrotask(()=>{e!==this.lifecycleSyncToken||t!==this.lifecycleGeneration||!this.host.isConnected||this.synchronizeLifecycle()})}synchronizeLifecycle(){let e=this.host.client!==this.activeClient,t=this.host.available!==this.activeAvailable;if(!e&&!t)return;let n=t&&this.host.available&&this.hadAvailable,r=e&&this.hadClient||n,i=this.host.client!==null&&r;e&&(this.activeClient=this.host.client,this.hadClient||=this.host.client!==null),this.activeAvailable=this.host.available,this.hadAvailable||=this.host.available;let a=t&&!this.host.available;(e||a)&&this.disposeAllTabs();let o=e&&this.host.available&&this.host.terminalPanelOpen;t&&(this.host.available?this.host.restoreTerminalPanelOpenState()&&(o=!0):this.host.hideTerminalPanelForUnavailableSurface()),i?this.refreshBeforeReconnectRestore(o):o?this.restoreSessions():O.drain()}refreshBeforeReconnectRestore(e){let t=this.lifecycleGeneration;O.beginRefreshFence(this.intentHost,t),e&&this.restoreSessions();let n=()=>{t!==this.lifecycleGeneration||!this.host.isConnected||O.releaseRefreshFence(this.intentHost)};a(async()=>{let{refreshControlUiServiceWorker:e}=await import(`./sw-refresh.runtime-BgcP0jqe.js`);return{refreshControlUiServiceWorker:e}},__vite__mapDeps([9,1,5,2,3,4,6,7,8]),import.meta.url).then(({refreshControlUiServiceWorker:e})=>e()).then(e=>{e||n()},n)}async restoreSessions(){let e=this.host.agentId?.trim()||null;await O.queue({kind:`restore`,agentId:e})}async openCatalogSession(e){await O.queue({kind:`catalog`,agentId:this.host.agentId?.trim()||null,catalog:e})}async openRequestedSession(e){await O.queue({kind:`attach`,sessionId:e,agentOwned:!0})}terminalActionsCanRun(){return this.host.client!==null&&this.host.client===this.activeClient&&this.host.available&&this.host.terminalPanelOpen&&this.host.isConnected}cancelPendingActions(){O.cancel(this.intentHost)}get waitingForRefresh(){return O.waitingForRefresh}async reattachPersistedSessions(){let e=this.captureTerminalOperation();if(!e||this.tabs.length>0)return;let t=fe();if(t.length!==0){this.updateControllerState(`booting`,!0);try{let n=await this.connectionFor(e).list();if(!this.isTerminalOperationCurrent(e))return;let r=new Map(n.map(e=>[e.sessionId,e]));for(let n of t){let t=r.get(n);if(t?await this.attachSession(n,e,t.owner?.startsWith(`agent:`)===!0,!0):await this.restoreExitedSession(n,e),!this.isTerminalOperationCurrent(e))return}}catch{if(!this.isTerminalOperationCurrent(e))return}finally{this.isTerminalOperationCurrent(e)&&this.updateControllerState(`booting`,!1)}this.isTerminalOperationCurrent(e)&&D(this.tabs)}}async ensureInitialSession(e){return this.tabs.length===0?this.openSessionNow(void 0,e):this.terminalActionsCanRun()}async listSessions(){let e=this.captureTerminalOperation();if(!e)return null;try{let t=await this.connectionFor(e).list();return this.isTerminalOperationCurrent(e)?t:null}catch{return this.isTerminalOperationCurrent(e)?[]:null}}async attachSessionById(e,t=!1){await O.queue({kind:`attach`,sessionId:e,agentOwned:t})}async attachSessionNow(e,t){let n=this.tabs.find(t=>t.gatewaySessionId===e);if(n)return this.switchTo(n.id),!0;let r=this.captureTerminalOperation();if(!r)return!1;this.updateControllerState(`booting`,!0),this.openRetry.clear(),this.host.terminalPanelErrorText=null;try{return await this.attachSession(e,r,t)?(this.activeId&&this.switchTo(this.activeId),!0):this.isTerminalOperationCurrent(r)?(this.host.terminalPanelErrorText??=C(`terminal.attachFailed`),!0):!1}finally{this.isTerminalOperationCurrent(r)&&this.updateControllerState(`booting`,!1)}}async bootTab(e,t={}){let n=await ot({panel:this.host,connection:this.connectionFor(e),sequence:++this.tabSequence,signal:e.signal,awaitFirstOutput:t.awaitFirstOutput===!0,isCurrent:()=>this.isTerminalOperationCurrent(e),onReady:e=>this.readiness.markReady(e),onExit:(e,t)=>this.handleExit(e.id,t)});if(!this.isTerminalOperationCurrent(e))throw W(n.tab.controller,n.tab.host),Error(`terminal operation cancelled`);return this.updateControllerState(`tabs`,[...this.tabs,n.tab]),this.updateControllerState(`activeId`,n.tab.id),n}adoptSession(e,t,n=!1){e.gatewaySessionId=t.sessionId,e.shellName=t.title??Xe(t.shell),e.shell=t.shell,e.agentId=t.agentId,e.cwd=t.cwd,e.agentOwned=t.owner===void 0?n:t.owner.startsWith(`agent:`);let r=e.pendingInput.drain();if(e.status!==`exited`){let{cols:n,rows:i}=e.controller.terminal;this.connection?.resize(t.sessionId,n||80,i||24);for(let e of r)this.connection?.input(t.sessionId,e)}e.status===`connecting`&&(e.awaitFirstOutput?this.readiness.arm(e):this.readiness.markReady(e)),this.updateControllerState(`tabs`,[...this.tabs]),D(this.tabs)}dropFailedTab(e){this.disposeTab(e),this.updateControllerState(`tabs`,this.tabs.filter(t=>t.id!==e.id)),this.activeId===e.id&&this.updateControllerState(`activeId`,this.tabs.at(-1)?.id??null)}async openSession(e){await O.queue(e?{kind:`catalog`,agentId:this.host.agentId?.trim()||null,catalog:e}:{kind:`open`,agentId:this.host.agentId?.trim()||null})}async openSessionNow(e,t){try{return await this.createSession(e,t)!==null}catch{return!0}}async startCatalogSession(e,t){let n=null;if(await this.bootQueue.enqueue(async()=>{n=await this.createSession(void 0,e.agentId,{params:e,isCurrent:t})}),!n)throw Error(C(`terminal.startCancelled`));return n}async createSession(e,t,n){let r=this.captureTerminalOperation();if(!r||n&&!n.isCurrent())return null;this.updateControllerState(`booting`,!0),n?this.openRetry.clear():this.openRetry.remember(e,t),this.host.terminalPanelErrorText=null;let i=n?void 0:Ye(this.host.sessionKey,e),a;try{let o=await this.bootTab(r,{awaitFirstOutput:!!(e||n)});if(a=o.tab,n&&!n.isCurrent())throw Error(C(`terminal.startCancelled`));let s=n?await o.connection.start(n.params,o.sink):await o.connection.open({agentId:t??void 0,...i?{sessionKey:i}:{},cols:o.cols,rows:o.rows,...e?{catalog:e}:{}},o.sink);return!this.isTerminalOperationCurrent(r)||o.tab.cancelled||n&&!n.isCurrent()?(o.connection.close(s.sessionId),this.tabs.includes(o.tab)&&(o.tab.cancelled=`lifecycle`,this.dropFailedTab(o.tab)),null):(this.adoptSession(o.tab,s,i!==void 0),o.tab.controller.terminal.focus(),s)}catch(e){if(a&&!a.gatewaySessionId&&this.tabs.includes(a)&&this.dropFailedTab(a),!this.isTerminalOperationCurrent(r)||n&&!n.isCurrent())return null;throw this.openRetry.clearUnlessRetryable(e),this.host.terminalPanelErrorText=Ke(e),e}finally{this.isTerminalOperationCurrent(r)&&this.updateControllerState(`booting`,!1)}}async attachSession(e,t,n=!1,r=!1){let i,a;try{let r=await this.bootTab(t);i=r.tab,a=r.connection;let o=await r.connection.attach(e,r.sink);return!this.isTerminalOperationCurrent(t)||r.tab.cancelled?(r.tab.cancelled===`close`&&r.connection.close(o.sessionId),this.tabs.includes(r.tab)&&(r.tab.cancelled=`lifecycle`,this.dropFailedTab(r.tab)),!1):(this.adoptSession(r.tab,o,n),!0)}catch(n){let o=r&&a?await this.confirmRestoredSessionGone(a,e,t):!1;return i&&!i.gatewaySessionId&&this.tabs.includes(i)&&(o?this.markRestoredSessionExited(i,e):this.dropFailedTab(i)),!r&&this.isTerminalOperationCurrent(t)&&(this.host.terminalPanelErrorText=`${C(`terminal.attachFailed`)}: ${p(n)}`),!1}}async confirmRestoredSessionGone(e,t,n){try{let r=await e.list();return this.isTerminalOperationCurrent(n)&&!r.some(e=>e.sessionId===t)}catch{return!1}}async restoreExitedSession(e,t){let n=await this.bootTab(t);if(!this.isTerminalOperationCurrent(t)||n.tab.cancelled){this.tabs.includes(n.tab)&&(n.tab.cancelled=`lifecycle`,this.dropFailedTab(n.tab));return}this.markRestoredSessionExited(n.tab,e)}markRestoredSessionExited(e,t){e.gatewaySessionId=t,this.handleExit(e.id,{reason:`disconnected`,exitCode:null})}handleExit(e,t){let n=this.tabs.find(t=>t.id===e);n&&(this.readiness.stop(n),n.status=`exited`,n.exitReason=t.reason,n.exitCode=t.exitCode,n.exitSignal=t.signal,t.error?.trim()&&(this.host.terminalPanelErrorText=s(t.error)),this.updateControllerState(`tabs`,[...this.tabs]),D(this.tabs))}closeTab(e){let t=this.tabs.find(t=>t.id===e);t&&(this.host.terminalPanelUploadController.cancelForTab(t),t.gatewaySessionId&&t.status!==`exited`?this.connection?.close(t.gatewaySessionId):!t.gatewaySessionId&&t.status!==`exited`&&(t.cancelled=`close`),this.disposeTab(t),this.updateControllerState(`tabs`,this.tabs.filter(t=>t.id!==e)),this.activeId===e&&this.updateControllerState(`activeId`,this.tabs.at(-1)?.id??null),D(this.tabs),this.tabs.length===0&&!this.host.fullscreen&&this.host.closeTerminalPanel())}switchTo(e){this.updateControllerState(`activeId`,e),ct(this.tabs.find(t=>t.id===e),this.host.updateComplete)}captureTerminalOperation(){let e=this.host.client;return O.fenced||!e||e!==this.activeClient||!this.host.available||!this.host.isConnected?null:{generation:this.lifecycleGeneration,client:e,signal:this.lifecycleAbortController.signal}}isTerminalOperationCurrent(e){return this.host.isConnected&&this.host.available&&this.host.client===e.client&&this.activeClient===e.client&&this.lifecycleGeneration===e.generation&&!e.signal.aborted}connectionFor(e){if(!this.isTerminalOperationCurrent(e))throw Error(`terminal operation cancelled`);return this.connection??=new _e(e.client),this.connection}disposeTab(e){this.readiness.stop(e),W(e.controller,e.host)}disposeAllTabs(){this.lifecycleGeneration+=1,O.resetLifecycle(this.intentHost),this.lifecycleAbortController.abort(),this.lifecycleAbortController=new AbortController,this.bootQueue.reset(),this.openRetry.clear(),this.updateControllerState(`booting`,!1),this.host.terminalPanelUploadController.dispose();for(let e of this.tabs)e.cancelled=`lifecycle`,this.disposeTab(e);this.updateControllerState(`tabs`,[]),this.updateControllerState(`activeId`,null),this.host.resetTerminalSessionPicker(),this.connection?.dispose(),this.connection=null}}})))()}var bt;function xt(){return(xt=e((()=>{h(),bt=v`
  .tp--bottom {
    left: var(--shell-nav-width, 0);
    right: 0;
    bottom: 0;
    --tp-session-menu-max-height: calc(var(--tp-panel-height) - 44px);
  }
  .tp--right {
    top: var(--shell-topbar-height, 0);
    right: 0;
    bottom: 0;
    --tp-session-menu-max-height: calc(100dvh - var(--shell-topbar-height, 0px) - 44px);
  }
  .tp--main {
    /* Main mode owns the content region; later sibling docks may overlay it. */
    top: var(--shell-topbar-height, 0);
    left: var(--shell-nav-width, 0);
    right: 0;
    bottom: 0;
    --tp-session-menu-max-height: calc(100dvh - var(--shell-topbar-height, 0px) - 44px);
  }
  .tp--fullscreen {
    inset: 0;
  }
  .tp--embedded {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .tp-header .tabstrip-tab__icon {
    color: var(--muted, #8a919e);
  }
  /* Same glyph system as the side panel rail. Positioned so the session
     menu anchors to the header, not its mid-toolbar trigger: a
     trigger-anchored menu wider than the icons spills past the panel's
     left edge, and header anchoring makes 100% mean "panel width". */
  .tp-header {
    --rail-header-action-glyph-size: 15px;

    position: relative;
  }
  .tp-header .tabstrip-tab__icon svg,
  .tp-header .tp-icon svg {
    width: 15px;
    height: 15px;
    stroke-width: 1.6px;
  }
  .tp-dock-modes {
    display: flex;
    align-items: center;
    gap: 2px;
  }
  .tp-session-picker {
    position: static;
  }
  .tp-session-menu {
    position: absolute;
    z-index: 4;
    top: calc(100% + 3px);
    left: 8px;
    right: 8px;
    width: auto;
    max-width: 360px;
    /* Both edges are pinned, so the menu can never reach past the panel; the
       auto margin keeps it right-aligned under its trigger while it fits. */
    margin-left: auto;
    max-height: min(420px, var(--tp-session-menu-max-height));
    overflow-y: auto;
    padding: var(--menu-padding);
    border: 1px solid var(--overlay-border);
    border-radius: var(--menu-radius);
    background: var(--bg-elevated);
    box-shadow: var(--overlay-shadow);
  }
  .tp-session-menu__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 6px 7px;
    color: var(--text, #d7dae0);
    font-size: 12px;
    font-weight: 600;
  }
  /* Refreshing the list is not destructive, so it reads as a plain action. */
  .tp-session-refresh {
    border: 0;
    background: transparent;
    color: var(--muted, #8a919e);
    font: inherit;
    font-weight: 500;
    padding: 2px 4px;
  }
  .tp-session-refresh:hover,
  .tp-session-refresh:focus-visible {
    color: var(--text, #d7dae0);
  }
  .tp-session {
    display: grid;
    grid-template-columns: minmax(70px, auto) minmax(100px, 1fr) auto;
    align-items: center;
    gap: 8px;
    width: 100%;
    border: 0;
    min-height: var(--menu-item-height);
    border-radius: var(--menu-item-radius);
    background: transparent;
    color: var(--text, #d7dae0);
    padding: 7px 8px;
    text-align: left;
  }
  .tp-session:not(:disabled):hover,
  .tp-session:not(:disabled):focus-visible {
    background: var(--bg-hover);
  }
  .tp-session:disabled {
    opacity: 0.55;
  }
  .tp-session__agent {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    font-weight: 600;
  }
  .tp-session__cwd {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--muted, #8a919e);
    font:
      11px ui-monospace,
      SFMono-Regular,
      "SF Mono",
      Menlo,
      Consolas,
      "Liberation Mono",
      monospace;
  }
  .tp-session__state {
    color: var(--muted, #8a919e);
    font-size: 11px;
    white-space: nowrap;
  }
  .tp-session-empty {
    padding: 10px 8px;
    color: var(--muted, #8a919e);
    font-size: 12px;
  }
  .tp-viewport {
    position: relative;
    flex: 1;
    min-height: 0;
    background: var(--bg, #0e1015);
  }
  .tp-host {
    position: absolute;
    inset: 0;
    z-index: 0;
    padding: 6px 8px;
    caret-color: transparent;
  }
  .tp-error {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 12px;
    font-size: 12px;
    color: var(--danger, #ff6b6b);
  }
  .tp-error .btn {
    flex: 0 0 auto;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    color: var(--text);
    padding: 6px 10px;
    font: inherit;
  }
`})))()}var St;function Ct(){return(Ct=e((()=>{h(),St=v`
  .rail-header__action:disabled {
    opacity: var(--rail-header-action-disabled-opacity, 0.4);
    pointer-events: none;
  }
  .tp-file-input {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
  .tp-drop-overlay {
    position: absolute;
    z-index: 4;
    inset: 8px;
    display: grid;
    place-items: center;
    border: 1px dashed var(--accent, #ff5c5c);
    background: color-mix(in srgb, var(--bg, #0e1015) 88%, var(--accent, #ff5c5c));
    color: var(--text, #d7dae0);
    font-size: 13px;
    pointer-events: none;
  }
  .tp-upload-card {
    position: absolute;
    z-index: 5;
    right: 10px;
    bottom: 10px;
    width: min(300px, calc(100% - 20px));
    box-sizing: border-box;
    padding: 9px 10px 10px;
    border: 1px solid var(--border, #262b34);
    border-radius: 7px;
    background: color-mix(in srgb, var(--bg, #0e1015) 94%, var(--text, #d7dae0));
    box-shadow: 0 8px 24px rgb(0 0 0 / 28%);
    color: var(--text, #d7dae0);
    font-size: 11px;
  }
  .tp-upload-card--failed {
    border-color: color-mix(in srgb, var(--danger, #ff6b6b) 55%, var(--border, #262b34));
  }
  .tp-upload-card__header {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }
  .tp-upload-card__copy {
    flex: 1;
    min-width: 0;
  }
  .tp-upload-card__title {
    color: var(--text, #d7dae0);
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }
  .tp-upload-card--failed .tp-upload-card__title,
  .tp-upload-card__error {
    color: var(--danger, #ff6b6b);
  }
  .tp-upload-card__file {
    margin-top: 2px;
    overflow: hidden;
    color: var(--muted, #8a919e);
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .tp-upload-card__error {
    margin-top: 6px;
    line-height: 1.35;
    overflow-wrap: anywhere;
  }
  .tp-upload-card__actions {
    display: flex;
    gap: 4px;
  }
  .tp-upload-card__recovery {
    margin-top: 8px;
  }
  .tp-upload-card__action {
    margin: -3px 0;
    padding: 3px 5px;
    border: 0;
    border-radius: 4px;
    background: transparent;
    color: var(--muted, #8a919e);
    font: inherit;
    cursor: var(--cursor-action);
  }
  .tp-upload-card__action:hover {
    background: color-mix(in srgb, var(--text, #d7dae0) 10%, transparent);
    color: var(--text, #d7dae0);
  }
  .tp-upload-card__action:focus-visible {
    outline: 1px solid var(--accent, #ff5c5c);
    outline-offset: 1px;
  }
  .tp-upload-retry {
    color: var(--accent, #ff5c5c);
  }
  .tp-upload-progress {
    position: relative;
    height: 3px;
    margin-top: 8px;
    overflow: hidden;
    border-radius: 999px;
    background: color-mix(in srgb, var(--border, #262b34) 72%, transparent);
  }
  .tp-upload-progress__fill,
  .tp-upload-progress__activity {
    position: absolute;
    inset-block: 0;
    left: 0;
    border-radius: inherit;
    background: var(--accent, #ff5c5c);
  }
  .tp-upload-progress__fill {
    transition: width 180ms ease-out;
  }
  .tp-upload-progress__activity {
    width: 26%;
    opacity: 0.7;
    animation: tp-upload-progress 1.15s ease-in-out infinite;
  }
  .tp-upload-card--failed .tp-upload-progress__fill {
    background: var(--danger, #ff6b6b);
  }
  @keyframes tp-upload-progress {
    from {
      transform: translateX(-110%);
    }
    to {
      transform: translateX(385%);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .tp-upload-progress__activity {
      animation: none;
      transform: none;
    }
  }
`})))()}function wt(e){return typeof e==`function`}async function Tt(e){let[{createGhosttyTerminal:n,loadGhosttyRuntime:r},i]=await Promise.all([a(()=>import(`./browser-qPo8-Qu_.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),a(()=>import(`./ghostty-web-Cbs8rc72.js`),__vite__mapDeps([10,1,2,3,4,5,6,7,8]),import.meta.url)]),o=await r({module:i}),s=await n({...e,runtime:o,autoFit:!1}),c=s.dispose.bind(s),l=s.terminal,u=new o.FitAddon;u.activate(l);let d;l.attachCustomKeyEventHandler(e=>e.defaultPrevented);let f=t(l)?.handleMouseUp,p=wt(f)?f:void 0,m=!1;return s.fit=()=>{if(m)return;let e=u.proposeDimensions();e&&(e.cols!==l.cols||e.rows!==l.rows)&&s.resize({columns:e.cols,rows:e.rows})},s.dispose=()=>{m||(m=!0,d?.disconnect(),u.dispose(),p&&=(document.removeEventListener(`mouseup`,p),void 0),c())},e.signal?.aborted?s.dispose():e.autoFit!==!1&&(d=new ResizeObserver(()=>s.fit()),d.observe(e.parent),e.size||s.fit()),s}function Et(){return(Et=e((()=>{o()})))()}function Dt(e){return g`
    <div class="tp-session-picker" @focusout=${e.onFocusOut}>
      <button
        class="rail-header__action tp-icon"
        type="button"
        title=${C(`terminal.sessions`)}
        aria-label=${C(`terminal.sessions`)}
        aria-expanded=${e.open?`true`:`false`}
        aria-haspopup="dialog"
        aria-controls=${Q}
        @click=${e.onToggle}
      >
        ${S.server}
      </button>
      ${e.open?g`<div
              id=${Q}
              class="tp-session-menu"
              role="dialog"
              aria-label=${C(`terminal.sessions`)}
              @keydown=${t=>{t.key===`Escape`&&(t.preventDefault(),t.stopPropagation(),e.onDismiss(!0))}}
            >
              <div class="tp-session-menu__header">
                <span>${C(`terminal.sessions`)}</span>
                <button class="tp-session-refresh" type="button" @click=${e.onRefresh}>
                  ${C(`terminal.refreshSessions`)}
                </button>
              </div>
              ${e.loading?de(`terminal`,C(`terminal.loadingSessions`),!0):e.sessions.length===0?g`<div class="tp-session-empty">${C(`terminal.noSessions`)}</div>`:e.sessions.map(t=>{let n=e.currentSessionIds.has(t.sessionId),r=`${t.owner?.startsWith(`agent:`)===!0?`${C(`terminal.agentOwnedBadge`)} · `:``}${n?C(`terminal.currentSession`):t.attached?C(`terminal.sessionAttached`):C(`terminal.detached`)}`;return g`<button
                          class="tp-session"
                          type="button"
                          ?disabled=${n}
                          title=${n?r:C(`terminal.attachSession`)}
                          @click=${()=>e.onAttach(t.sessionId,t.owner)}
                        >
                          <span class="tp-session__agent">${t.agentId}</span>
                          <span class="tp-session__cwd">${t.cwd}</span>
                          <span class="tp-session__state">${r}</span>
                        </button>`})}
            </div>`:y}
    </div>
  `}var Q;function Ot(){return(Ot=e((()=>{h(),x(),w(),he(),Q=`terminal-session-picker-dialog`})))()}var kt,$;function At(){return(At=e((()=>{ae(),i(),h(),m(),x(),Ce(),f(),Oe(),Te(),re(),k(),te(),B(),yt(),X(),xt(),Ct(),z(),Et(),Ot(),kt=3e4,$=class extends c{constructor(...e){super(...e),this.client=null,this.agentId=null,this.sessionKey=null,this.available=!1,this.suppressed=!1,this.themeMode=`dark`,this.basePath=``,this.fullscreen=!1,this.embedded=!1,this.terminalPanelErrorText=null,this.sessionPickerOpen=!1,this.pickerSessions=[],this.sessionPickerTask=new oe(this,{autoRun:!1,args:()=>[this.available?this.client:null],task:([e])=>e?this.terminalSessions.listSessions():se,onComplete:e=>{e!==null&&(this.pickerSessions=e)}}),this.terminalPanelUploadController=new R({activeTab:()=>this.terminalSessions.tabs.find(e=>e.id===this.terminalSessions.activeId&&e.status===`live`&&e.gatewaySessionId),client:()=>this.client,isCurrent:e=>this.terminalSessions.tabs.includes(e)&&e.status===`live`,fileInput:()=>this.renderRoot.querySelector(`.tp-file-input`),setError:e=>this.terminalPanelErrorText=e,requestUpdate:()=>this.requestUpdate()}),this.createTerminalController=Tt,this.catalogReadyTimeoutMs=kt,this.terminalSessions=new vt(this),this.dockLayout=new Ee(this,{layout:ne,reservationPrefix:`terminal`,isAvailable:()=>this.isDockLayoutAvailable(),isFullscreen:()=>this.fullscreen,onResize:()=>dt(this.terminalSessions.tabs,this.terminalSessions.activeId)}),this.onToggleRequest=e=>this.handleToggleRequest(e),this.onDockBottomRequest=e=>this.handleToggleRequest(e),this.onDocumentPointerDown=e=>this.handleDocumentPointerDown(e),this.themeObserver=null}get sessionBottomOnly(){return!this.embedded&&this.sessionKey!==null}connectedCallback(){super.connectedCallback(),this.terminalSessions.connectHost(),this.dockLayout.setSuppressed(this.suppressed),!this.fullscreen&&!this.embedded&&!this.sessionBottomOnly&&window.addEventListener(E,this.onToggleRequest),!this.fullscreen&&!this.embedded&&window.addEventListener(T,this.onDockBottomRequest),document.addEventListener(`pointerdown`,this.onDocumentPointerDown,!0),typeof MutationObserver<`u`&&(this.themeObserver=new MutationObserver(()=>lt(this.terminalSessions.tabs,this.themeMode)),this.themeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-theme`,`data-theme-mode`,`style`]})),this.dockLayout.open&&this.terminalSessions.restoreSessions()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(E,this.onToggleRequest),window.removeEventListener(T,this.onDockBottomRequest),document.removeEventListener(`pointerdown`,this.onDocumentPointerDown,!0),this.themeObserver?.disconnect(),this.themeObserver=null,this.terminalSessions.disconnectHost()}updated(e){(e.has(`embedded`)||e.has(`sessionKey`))&&!this.fullscreen&&(this.embedded||this.sessionBottomOnly?window.removeEventListener(E,this.onToggleRequest):window.addEventListener(E,this.onToggleRequest),this.embedded?window.removeEventListener(T,this.onDockBottomRequest):window.addEventListener(T,this.onDockBottomRequest)),e.has(`suppressed`)&&this.dockLayout.setSuppressed(this.suppressed)&&this.terminalSessions.restoreSessions(),(e.has(`client`)||e.has(`available`))&&this.terminalSessions.scheduleLifecycleSync(),e.has(`themeMode`)&&lt(this.terminalSessions.tabs,this.themeMode),e.has(`embedded`)&&this.embedded&&this.terminalSessions.restoreSessions(),(this.embedded||this.dockLayout.open)&&ut(this.terminalSessions.tabs,this.terminalSessions.activeId,this.findTerminalPanelViewport()),this.dockLayout.syncReservation()}toggle(){this.available&&(this.dockLayout.open?this.closeTerminalPanel():(this.dockLayout.setOpen(!0),this.terminalSessions.restoreSessions()))}handleToggleRequest(e){let t=e instanceof CustomEvent&&typeof e.detail==`object`&&e.detail!==null?e.detail:null,n=t?.dock===`right`||t?.dock===`bottom`?t.dock:null;if(t?.agentId!==void 0&&(this.agentId=t.agentId),n&&this.dockLayout.setDock(n,!1),t?.open===!1){this.closeTerminalPanel();return}if(t?.catalogStart){e.stopImmediatePropagation(),this.dockLayout.setOpen(!0),t.catalogStart.respondWith(this.terminalSessions.startCatalogSession(t.catalogStart.params,t.catalogStart.isCurrent));return}if(t?.terminalSessionId||t?.catalog||t?.open===!0){if(!this.available)return;t.catalog&&this.dockLayout.setDock(`main`),this.dockLayout.setOpen(!0),t.terminalSessionId?this.terminalSessions.openRequestedSession(t.terminalSessionId):t.catalog?this.terminalSessions.openCatalogSession(t.catalog):this.terminalSessions.restoreSessions();return}this.toggle()}closeTerminalPanel(){this.closeSessionPicker(!1),this.terminalSessions.cancelPendingActions(),this.dockLayout.setOpen(!1)}get terminalPanelOpen(){return this.embedded?this.available:this.dockLayout.open&&this.isDockLayoutAvailable()}hideTerminalPanelForUnavailableSurface(){this.dockLayout.hideWithoutPersisting()}restoreTerminalPanelOpenState(){return this.dockLayout.restoreOpenState()}isDockLayoutAvailable(){return this.available&&(!this.sessionBottomOnly||this.dockLayout.dock===`bottom`)}toggleSessionPicker(){if(this.sessionPickerOpen){this.closeSessionPicker(!0);return}this.sessionPickerOpen=!0,this.refreshSessionPicker(),this.updateComplete.then(()=>{this.sessionPickerOpen&&this.renderRoot.querySelector(`.tp-session-refresh`)?.focus()})}closeSessionPicker(e){this.sessionPickerOpen&&(this.sessionPickerOpen=!1,e&&this.updateComplete.then(()=>{this.renderRoot.querySelector(`[aria-controls="terminal-session-picker-dialog"]`)?.focus()}))}handleDocumentPointerDown(e){if(!this.sessionPickerOpen)return;let t=this.renderRoot.querySelector(`.tp-session-picker`),n=e.composedPath();t&&!n.includes(t)&&this.closeSessionPicker(!1)}handleSessionPickerFocusOut(e){let t=e.currentTarget,n=e.relatedTarget;t instanceof HTMLElement&&n instanceof Node&&t.contains(n)||queueMicrotask(()=>{t instanceof HTMLElement&&!t.contains(this.shadowRoot?.activeElement??null)&&this.sessionPickerOpen&&this.closeSessionPicker(!1)})}refreshSessionPicker(){return this.sessionPickerTask.run()}async attachPickedSession(e,t){this.sessionPickerOpen=!1,await this.terminalSessions.attachSessionById(e,t?.startsWith(`agent:`)===!0)}setDock(e){if(this.embedded&&e===`bottom`){window.dispatchEvent(new CustomEvent(T,{detail:{agentId:this.agentId,dock:`bottom`,open:!0}}));return}this.dockLayout.setDock(e),this.updateComplete.then(()=>ft(this.terminalSessions.tabs))}openFullscreen(){let e=r({kind:`terminal`},this.basePath);e&&Se(e)}resetTerminalSessionPicker(){this.closeSessionPicker(!1),this.sessionPickerTask.run([null]),this.pickerSessions=[]}findTerminalPanelViewport(){return this.renderRoot.querySelector(`.tp-viewport`)}retryTerminalOpen(){this.terminalPanelErrorText=null,this.terminalSessions.openRetry.run()}render(){if(!this.terminalPanelOpen)return y;let e=this.embedded?`embedded`:this.fullscreen?`fullscreen`:this.dockLayout.dock,t=this.embedded||this.fullscreen||this.dockLayout.dock===`main`?y:this.dockLayout.dock===`bottom`?`height:${this.dockLayout.height}px;--tp-panel-height:${this.dockLayout.height}px`:`width:${this.dockLayout.width}px`,n=this.terminalSessions.tabs.find(e=>e.id===this.terminalSessions.activeId),r=this.terminalSessions.waitingForRefresh||this.terminalSessions.booting&&this.terminalSessions.tabs.length===0||n?.status===`connecting`,i=this.terminalPanelErrorText?{text:this.terminalPanelErrorText,retry:this.terminalSessions.openRetry.available?()=>this.retryTerminalOpen():void 0}:null,a=Dt({open:this.sessionPickerOpen,loading:this.sessionPickerTask.status===ie.PENDING,sessions:this.pickerSessions,currentSessionIds:new Set(this.terminalSessions.tabs.map(e=>e.gatewaySessionId).filter(e=>typeof e==`string`&&e.length>0)),onToggle:()=>this.toggleSessionPicker(),onDismiss:e=>this.closeSessionPicker(e),onFocusOut:e=>this.handleSessionPickerFocusOut(e),onRefresh:()=>void this.refreshSessionPicker(),onAttach:(e,t)=>void this.attachPickedSession(e,t)}),o=Ue(this.fullscreen,this.embedded,this.dockLayout.dock,this.terminalPanelUploadController,a,e=>this.setDock(e),()=>this.openFullscreen(),()=>this.closeTerminalPanel());return g`
      <section class="tp tp--${e}" style=${t} aria-label=${C(`terminal.title`)}>
        ${this.embedded?y:this.dockLayout.renderResizer(`tp`,C(`terminal.resize`))}
        ${We(this.terminalSessions.tabs,this.terminalSessions.activeId,this.terminalSessions.booting,o,e=>this.terminalSessions.switchTo(e),e=>(this.terminalSessions.closeTab(e),this.updateComplete.then(()=>void 0)),()=>void this.terminalSessions.openSession())}
        ${Ge({activeId:this.terminalSessions.activeId,connecting:r,error:i,uploadController:this.terminalPanelUploadController})}
      </section>
    `}willUpdate(){pt(this.terminalSessions.tabs,this.terminalSessions.activeId)}static{this.styles=[ke,we,bt,St,De]}},n([b({attribute:!1})],$.prototype,`client`,void 0),n([b({attribute:!1})],$.prototype,`agentId`,void 0),n([b({attribute:!1})],$.prototype,`sessionKey`,void 0),n([b({type:Boolean})],$.prototype,`available`,void 0),n([b({type:Boolean})],$.prototype,`suppressed`,void 0),n([b({attribute:!1})],$.prototype,`themeMode`,void 0),n([b({attribute:!1})],$.prototype,`basePath`,void 0),n([b({type:Boolean})],$.prototype,`fullscreen`,void 0),n([b({type:Boolean})],$.prototype,`embedded`,void 0),n([_()],$.prototype,`terminalPanelErrorText`,void 0),n([_()],$.prototype,`sessionPickerOpen`,void 0),n([_()],$.prototype,`pickerSessions`,void 0)})))()}function jt(){return(jt=e((()=>{At(),customElements.get(`openclaw-terminal-panel`)||customElements.define(`openclaw-terminal-panel`,$)})))()}jt();
//# sourceMappingURL=terminal-panel-registration-D2fcncvL.js.map