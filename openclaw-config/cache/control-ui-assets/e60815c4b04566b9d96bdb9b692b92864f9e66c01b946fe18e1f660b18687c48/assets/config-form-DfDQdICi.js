import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Fr as t,In as n,Vn as r,ba as i,nr as a}from"./control-ui-foundation-DMb6IeIq.js";import{Bo as o,Fo as s,Gc as c,Ho as l,Io as u,Lo as d,Ro as f,Uo as p,Vo as m,Wo as h,an as g,on as _,qc as v,zo as y}from"./control-ui-core-DzidtL-P.js";import{$ as b,K as x,X as S,_ as C,at as w,b as ee,q as T,st as E}from"./lit-runtime-vxhGQLC6.js";import{Bt as D,Ft as O,Gt as k,It as A,J as j,K as M,Nt as N,Ut as te,X as P,Y as F,Z as I,q as L}from"./control-ui-core-uEI6aN5p.js";import{$n as R,Ut as ne,Wt as re,er as ie}from"./control-ui-boot-shared-nBxCfWV5.js";import{At as ae,Bt as oe,Et as se,Nt as ce,Ot as le,Rt as ue,Vt as de,wt as fe}from"./control-ui-boot-shared-Cyt1Zyts.js";import{_ as pe}from"./control-ui-boot-new-DeGMjctK.js";import{a as me,c as he,d as ge,f as z,g as _e,h as ve,i as ye,l as B,m as be,n as xe,o as Se,p as Ce,r as we,s as Te,t as Ee,u as De}from"./config-form.tiers-BYNt98lg.js";import{i as Oe,n as ke,r as Ae,t as je}from"./phone-runtime-D7alg31e.js";function Me(e,t,n,r){let i=t[n];if(i===void 0)return{ok:!1,value:Pe};let a=n===t.length-1;if(typeof i==`number`){if(e!=null&&!Array.isArray(e))return{ok:!1,value:Pe};let o=Array.isArray(e)?[...e]:[];if(a)return r===void 0?o.splice(i,1):o[i]=r,{ok:!0,value:o};let s=Me(o[i],t,n+1,r);return s.ok?(o[i]=s.value,{ok:!0,value:o}):s}if(e!=null&&(typeof e!=`object`||Array.isArray(e)))return{ok:!1,value:Pe};let o=e?{...e}:{};if(a)return r===void 0?delete o[i]:Object.defineProperty(o,i,{value:r,enumerable:!0,configurable:!0,writable:!0}),{ok:!0,value:o};let s=Me(Object.hasOwn(o,i)?o[i]:void 0,t,n+1,r);return s.ok?(Object.defineProperty(o,i,{value:s.value,enumerable:!0,configurable:!0,writable:!0}),{ok:!0,value:o}):s}function Ne(e,t,n){return t.length===0?{ok:!0,value:n}:Me(e,t,0,n)}var Pe;function Fe(){return(Fe=e((()=>{Pe=Symbol(`invalid-path-patch`)})))()}function Ie(e){return a(e)?Object.fromEntries(Object.entries(e).map(([e,t])=>[e,Ue(t)])):e}function Le(e){try{return new RegExp(e,`u`),!0}catch{return!1}}function Re(e){if(Le(e))return e;let t=e.replace(/\\([^\\])/g,(e,t)=>t===`:`||t===`/`?t:e);return Le(t)?t:e}function ze(e){return a(e)?Object.fromEntries(Object.entries(e).map(([e,t])=>[e,We(t)?t:Ue(t)])):e}function Be(e){let t=new Map;for(let[n,r]of Object.entries(e)){let e=Re(n),i=Ue(r),a=t.get(e);t.set(e,a===void 0?i:{allOf:[a,i]})}return Object.fromEntries(t)}function Ve(e){let{nullable:t,type:n,...r}=e,i=Array.isArray(n)?[...n]:typeof n==`string`?[n]:null;if(!i||(t===!0&&!i.includes(`null`)&&i.push(`null`),i.length===1&&!Array.isArray(n)))return e;let a=Object.entries(r),o=a.filter(([e])=>Qe.has(e)),s=Object.fromEntries(a.filter(([e])=>!Qe.has(e)));return{...Object.fromEntries(o),anyOf:i.map(e=>Object.assign({},s,{type:e}))}}function He(e){if(!a(e.additionalProperties)||a(e.properties)||a(e.patternProperties))return e;let{additionalProperties:t,...n}=e;return{...n,patternProperties:{".*":t},additionalProperties:!1}}function Ue(e){if(Array.isArray(e))return e.map(e=>Ue(e));if(!a(e))return e;let t=He(Ve(e.nullable===!0&&e.enumIncludesNull===!0&&Array.isArray(e.enum)&&!e.enum.some(e=>e===null)?{...e,enum:[...e.enum,null]}:e));return Object.fromEntries(Object.entries(t).map(([e,n])=>e===`$dynamicRef`&&t.$ref===void 0?[`$ref`,n]:e===`pattern`&&typeof n==`string`?[e,Re(n)]:e===`patternProperties`&&a(n)?[e,Be(n)]:Ye.has(e)?[e,Ie(n)]:e===`dependencies`?[e,ze(n)]:Xe.has(e)||Ze.has(e)?[e,Ue(n)]:[e,n]))}function We(e){return Array.isArray(e)&&e.every(e=>typeof e==`string`)}function Ge(e,t=new WeakSet,n=new WeakSet){if(e===null||typeof e==`string`||typeof e==`boolean`)return!0;if(typeof e==`number`)return Number.isFinite(e);if(typeof e!=`object`)return!1;let r;try{if(Array.isArray(e)){let t=Reflect.ownKeys(e);if(t.length!==e.length+1||t.some(t=>{if(t===`length`)return!1;if(typeof t!=`string`)return!0;let n=Number(t);return!Number.isSafeInteger(n)||n<0||n>=e.length||String(n)!==t}))return!1;r=e}else{let t=Object.getPrototypeOf(e);if(t!==Object.prototype&&t!==null||Reflect.ownKeys(e).some(t=>typeof t!=`string`||!Object.prototype.propertyIsEnumerable.call(e,t)))return!1;r=Object.values(e)}}catch{return!1}if(n.has(e))return!0;if(t.has(e))return!1;t.add(e);let i=r.every(e=>Ge(e,t,n));return t.delete(e),i&&n.add(e),i}function Ke(e){return Ue(e)}function qe(e,t){if(!Ge(e)||!Ge(t))return!1;try{return ie(e,t)}catch{return!1}}function Je(e,t){if(!Ge(t))return!1;try{return re(Ke(e),t)}catch{return!1}}var Ye,Xe,Ze,Qe;function $e(){return($e=e((()=>{R(),ne(),Ye=new Set([`$defs`,`definitions`,`dependentSchemas`,`patternProperties`,`properties`]),Xe=new Set([`additionalItems`,`additionalProperties`,`contains`,`else`,`if`,`items`,`not`,`propertyNames`,`then`,`unevaluatedItems`,`unevaluatedProperties`]),Ze=new Set([`allOf`,`anyOf`,`oneOf`,`prefixItems`]),Qe=new Set([`$anchor`,`$defs`,`$dynamicAnchor`,`$id`,`$recursiveAnchor`,`$schema`,`$vocabulary`,`definitions`])})))()}function et(e){let t=i(e);return t.includes(`localservice.env.`)||!tt.some(e=>t.endsWith(e))&&nt.some(t=>t.test(e))}var tt,nt;function rt(){return(rt=e((()=>{tt=[`maxtokens`,`maxoutputtokens`,`maxinputtokens`,`maxcompletiontokens`,`contexttokens`,`totaltokens`,`tokencount`,`tokenlimit`,`tokenbudget`,`passwordfile`],nt=[/token$/i,/password/i,/secret/i,/api.?key/i,/encrypt.?key/i,/private.?key/i,/serviceaccount(?:ref)?$/i]})))()}function V(e,t){return`config-field-${e.length===0?`root`:e.map(e=>{let t=String(e),n=``;for(let e=0;e<t.length;e+=1)n+=t.charCodeAt(e).toString(16).padStart(4,`0`);return`${typeof e==`number`?`n`:`s`}${t.length}-${n}`}).join(`_`)}-${t}`}function it(){return k(`configForm.redactedPlaceholder`)}function at(){return{visited:0}}function ot(e,t){return!(t>ht||(e.visited+=1,e.visited>gt))}function st(e){return mt.test(e.trim())}function ct(e){return typeof e==`string`?e.trim().length>0&&!st(e):e!=null}function lt(e){return e?.sensitive??!1}function ut(e,t,n){return dt(e,t,n,at(),0)}function dt(e,t,n,r,i){if(!ot(r,i))return!0;let a=o(t);return(lt(d(t,n))||et(a))&&ct(e)?!0:Array.isArray(e)?e.some((e,a)=>dt(e,[...t,a],n,r,i+1)):e&&typeof e==`object`?Object.entries(e).some(([e,a])=>dt(a,[...t,e],n,r,i+1)):!1}function ft(e,t,n){return pt(e,t,n,at(),0)}function pt(e,t,n,r,i){if(!ot(r,i))return 1;if(e==null)return 0;let a=o(t);return(lt(d(t,n))||et(a))&&ct(e)?1:Array.isArray(e)?e.reduce((e,a,o)=>e+pt(a,[...t,o],n,r,i+1),0):e&&typeof e==`object`?Object.entries(e).reduce((e,[a,o])=>e+pt(o,[...t,a],n,r,i+1),0):0}var mt,ht,gt;function H(){return(H=e((()=>{rt(),D(),y(),mt=/^\$\{[^}]*\}$/,ht=64,gt=2e4})))()}function U(e,t){return Je(e,t)}function _t(e,t){let n=e.properties;return n&&Object.hasOwn(n,t)?n[t]:void 0}function vt(e){let[t=``,n]=String(e).toLowerCase().split(`e`),r=t.split(`.`)[1]?.length??0,i=Number(n??0);return Math.max(0,r-i)}function yt(e,t){if(!t)return e;let n=vt(t);return n<=100?Number(e.toFixed(n)):e}function bt(e,t){let n=e<0n?-e:e,r=t<0n?-t:t;for(;r!==0n;){let e=n%r;n=r,r=e}return n}function xt(e,t){return e/bt(e,t)*t}function St(e){let[t=``,n]=String(e).toLowerCase().split(`e`),[r=`0`,i=``]=t.split(`.`),a=Number(n??0),o=BigInt(`${r}${i}`),s=i.length-a,c=s<0?o*10n**BigInt(-s):o,l=bt(c,s>0?10n**BigInt(s):1n),u=Number(c/l);return!Number.isFinite(u)||u<=0?1:u}function Ct(e,t,n){let r=L(e),i=L(t);if(!r||!i||i.numerator===0n)return e;let a=r.numerator*i.denominator,o=r.denominator*i.numerator,s=a/o,c=a%o,l=c<0n?s-1n:s,u=n===`floor`?l:n===`ceil`?c===0n?s:c>0n?s+1n:s:(a-l*o)*2n<o?l:l+1n;return yt(Number(u)*t,t)}function wt(e,t){let r,i=!1;for(let a of e){let e=n(t===`lower`?a.minimum:a.maximum),o=n(t===`lower`?a.exclusiveMinimum:a.exclusiveMaximum);for(let[n,a]of[[e,!1],[o,!0]])n!==void 0&&(r===void 0||(t===`lower`?n>r:n<r)||n===r&&a&&!i)&&(r=n,i=a)}return{value:r,exclusive:i}}function Tt(e){let t,r;for(let i of e){let e=n(i.multipleOf);if(e===void 0||e<=0)continue;let a=L(e);if(!a)continue;let o=bt(a.numerator,a.denominator),s=a.numerator/o,c=a.denominator/o;t=t===void 0?s:xt(t,s),r=r===void 0?c:bt(r,c)}if(t===void 0||r===void 0)return;let i=Number(t)/Number(r);return Number.isFinite(i)&&i>0?i:void 0}function Et(e){let t=z(e),n=0,r,i=!1;for(let e of t)Number.isSafeInteger(e.minItems)&&e.minItems!==void 0&&e.minItems>=0&&(n=Math.max(n,e.minItems)),Number.isSafeInteger(e.maxItems)&&e.maxItems!==void 0&&e.maxItems>=0&&(r=r===void 0?e.maxItems:Math.min(r,e.maxItems)),Array.isArray(e.items)&&e.additionalItems===!1&&(r=Math.min(r??1/0,e.items.length)),i||=e.uniqueItems===!0;return{minItems:n,maxItems:r,uniqueItems:i}}function Dt(e){return new Set(z(e).flatMap(e=>e.required??[]))}function Ot(e){let t=z(e),n=new Set;for(let e of t)for(let t of Object.keys(e.properties??{}))n.add(t);return[...n].filter(e=>t.every(t=>_t(t,e)!==void 0||t.additionalProperties!==!1))}function kt(e){let t=z(e).map(e=>e.additionalProperties).filter(e=>e!==void 0);if(t.some(e=>e===!1))return!1;let n=t.filter(e=>!!e&&typeof e==`object`);return n.length>0?Ce(n):t.some(e=>e===!0)?{}:void 0}function At(e,t){let n=+!U(e,t),r=new Set(Ot(e));for(let r of Dt(e))Object.hasOwn(t,r)||(n+=1);let i=kt(e);for(let[a,o]of Object.entries(t)){let t=Nt(e,a);if(t){U(t,o)||(n+=1);continue}!r.has(a)&&(i===!1||i===void 0||!U(i,o))&&(n+=1)}return n}function jt(e,t){return z(e).every(({propertyNames:e})=>e===void 0||e===!0||e!==!1&&U(e,t))}function Mt(e,t,n){return Object.keys(n).some(n=>!Object.hasOwn(t,n)&&!jt(e,n))?!1:U(e,n)?!0:!U(e,t)&&At(e,n)<=At(e,t)}function Nt(e,t){if(Ot(e).includes(t))return Ce(z(e).map(e=>_t(e,t)).filter(e=>e!==void 0))}function Pt(e,t=new Set){if(t.has(e))return[];t.add(e);let n=[];Array.isArray(e.const)&&n.push(e.const);for(let t of e.enum??[])Array.isArray(t)&&n.push(t);for(let r of[...e.allOf??[],...e.anyOf??[],...e.oneOf??[]])n.push(...Pt(r,t));return t.delete(e),n}function Ft(e,t){let n=Math.abs(e.length-t.length),r=Math.min(e.length,t.length);for(let i=0;i<r;i+=1)G(e[i],t[i])||(n+=1);return n}function It(e,t,n){let{minItems:r,maxItems:i}=Et(e),a=Math.max(0,r-t.length),o=Pt(e).filter(t=>U(e,t)).map(e=>Ft(t,e));o.length>0&&(a+=Math.min(...o)),i!==void 0&&(a+=Math.max(0,t.length-i));for(let r=0;r<t.length;r+=1){let i=De(e,r);i&&!U(i,t[r])&&(a+=1),n&&t.slice(r+1).some(e=>G(t[r],e))&&(a+=1)}return a}function Lt(e,t,n,r,i){if(U(e,n))return!0;if(U(e,t))return!1;let a=It(e,t,r),o=It(e,n,r);return i?o<=a:o<a}function Rt(e){let t=z(e),n=new Set(t.flatMap(e=>{let t=Array.isArray(e.type)?e.type:e.type?[e.type]:[];return t.includes(`number`)?[`number`]:t.includes(`integer`)?[`integer`]:[]})),r=n.has(`integer`)?`integer`:n.has(`number`)?`number`:p(e),i=Tt(t),a=r===`integer`?i&&i>0?St(i):1:i&&i>0?i:void 0,o=wt(t,`lower`),s=wt(t,`upper`),c=o.exclusive?void 0:o.value,l=s.exclusive?void 0:s.value,u=o.exclusive?o.value:void 0,d=s.exclusive?s.value:void 0,f=c??u,m=l??d;if(a){if(f!==void 0&&(f=Ct(f,a,`ceil`)),m!==void 0&&(m=Ct(m,a,`floor`)),u!==void 0){let e=Ct(u,a,`ceil`),t=e<=u?yt(e+a,a):e;f=f===void 0?t:Math.max(f,t)}if(d!==void 0){let e=Ct(d,a,`floor`),t=e>=d?yt(e-a,a):e;m=m===void 0?t:Math.min(m,t)}}return{min:f,max:m,exclusiveMin:u,exclusiveMax:d,step:a??`any`}}function zt(e,t){if(!Number.isFinite(e))return e;if(e===0)return t>0?Number.MIN_VALUE:-Number.MIN_VALUE;let n=new DataView(new ArrayBuffer(8));n.setFloat64(0,e);let r=n.getBigUint64(0),i=e>0==t>0?r+1n:r-1n;return n.setBigUint64(0,i),n.getFloat64(0)}function Bt(e,t,n){if(n!==void 0&&Number.isFinite(n)){let r=e+(n-e)/2;if(t>0&&r>e||t<0&&r<e)return r}let r=e+t*Math.max(1,Math.abs(e));return Number.isFinite(r)&&r!==e?r:zt(e,t)}function Vt(e,t){let n=Rt(t),r=e;return typeof n.step==`number`&&(r=Ct(r,n.step,`round`)),n.min!==void 0&&(r=Math.max(n.min,r)),n.max!==void 0&&(r=Math.min(n.max,r)),n.exclusiveMin!==void 0&&r<=n.exclusiveMin&&(r=zt(n.exclusiveMin,1)),n.exclusiveMax!==void 0&&r>=n.exclusiveMax&&(r=zt(n.exclusiveMax,-1)),yt(r,typeof n.step==`number`?n.step:void 0)}function Ht(e){let t=Rt(e);if(t.step===`any`){if(t.exclusiveMin!==void 0&&t.exclusiveMin>=0)return Bt(t.exclusiveMin,1,t.max);if(t.exclusiveMax!==void 0&&t.exclusiveMax<=0)return Bt(t.exclusiveMax,-1,t.min)}return Vt(0,e)}function Ut(e){let t=Math.max(0,e.minLength??0),n=e.maxLength??Math.max(t,0);if(!Number.isSafeInteger(t)||t>Gt||n<t)return K;if(e.pattern)try{return t===0&&new RegExp(e.pattern,`u`).test(``)?``:K}catch{return K}return t===0?``:`x`.repeat(t).slice(0,n)}function W(e,t){if(t===K||!U(e,t))return K;if(!t||typeof t!=`object`)return t;try{return structuredClone(t)}catch{return K}}function Wt(e,t=0){if(!e)return``;if(e.default!==void 0)return W(e,e.default);if(e.const!==void 0)return W(e,e.const);if(e.enum&&e.enum.length>0){for(let t of e.enum){let n=W(e,t);if(n!==K)return n}return K}if(t>=32)return K;for(let n of e.allOf??[]){let r=W(e,Wt(n,t+1));if(r!==K)return r}switch(p(e)){case`object`:{let n={};for(let r of e.required??[]){let i=_t(e,r);if(!i)return K;let a=Wt(i,t+1);if(a===K)return K;n[r]=a}return W(e,n)}case`array`:{let n=Math.max(0,e.minItems??0);if(!Number.isSafeInteger(n)||n>100)return K;if(n===0)return W(e,[]);let r=e.items,i=[];for(let a=0;a<n;a+=1){let n=Array.isArray(r)?r[a]??(e.additionalItems&&typeof e.additionalItems==`object`?e.additionalItems:void 0):r;if(!n)return K;let o=Wt(n,t+1);if(o===K)return K;i.push(o)}return W(e,i)}case`boolean`:return W(e,!1);case`number`:case`integer`:return W(e,Ht(e));case`string`:return W(e,Ut(e));case`null`:return W(e,null);default:return W(e,``)}}var G,K,Gt;function q(){return(q=e((()=>{$e(),r(),be(),F(),H(),G=qe,K=Symbol(`no-safe-config-default`),Gt=4096})))()}function Kt(e){return structuredClone(e)}function qt(e){let t=p(e.schema);if(t!==`object`&&t!==`array`)return;let n=e.schema.default;return t===`object`&&n&&typeof n==`object`&&!Array.isArray(n)||t===`array`&&Array.isArray(n)?Kt(n):t===`object`?{}:[]}function Jt(e,t){return t!==void 0&&e.value===void 0&&e.isRequired!==!0&&e.structuredDraftOwner!==!0&&!U(e.schema,t)}var Yt;function Xt(){return(Xt=e((()=>{x(),b(),D(),v(),Fe(),q(),H(),Yt=class extends c{constructor(...e){super(...e),this.error=``}willUpdate(e){if(!e.has(`props`))return;let t=e.get(`props`),n=this.props;n&&(!t||t.identity!==n.identity||!Object.is(t.sourceIdentity,n.sourceIdentity))&&(this.draftValue=Kt(n.initialValue),this.error=``)}patchDraft(e,t){let n=this.props,r=this.draftValue;if(!n||!r)return!1;let i=n.params.path;if(e.length<i.length||!i.every((t,n)=>t===e[n]))return!1;let a=e.slice(i.length),o=a.length===0?{ok:!0,value:t}:Ne(r,a,t);if(!o.ok)return!1;let s=o.value,c=p(n.params.schema);return c===`object`&&(!s||typeof s!=`object`||Array.isArray(s))||c===`array`&&!Array.isArray(s)?!1:(this.draftValue=s,this.error=``,!U(n.params.schema,s)||n.params.onPatch(i,s)!==!1||(this.error=k(`configForm.draftRejected`),!1))}render(){let e=this.props,t=this.draftValue;if(!e||!t)return T;let n=V(e.params.path,`structured-draft-error`);return S`
      ${e.renderNode({...e.params,value:t,sourceIdentity:t,controlIdentity:t,structuredDraftOwner:!0,onPatch:(e,t)=>this.patchDraft(e,t),onRemove:e=>this.patchDraft(e,void 0)})}
      ${this.error?S`
              <div class="settings-row settings-row--stacked cfg-structured-draft__error">
                <div class="settings-row__control">
                  <span id=${n} class="cfg-field__error" role="alert">${this.error}</span>
                </div>
              </div>
            `:T}
    `}},t([E({attribute:!1})],Yt.prototype,`props`,void 0),t([w()],Yt.prototype,`draftValue`,void 0),t([w()],Yt.prototype,`error`,void 0),customElements.get(`openclaw-config-form-structured-draft`)||customElements.define(`openclaw-config-form-structured-draft`,Yt)})))()}function Zt(e,t){return t.length>e.length&&e.every((e,n)=>G(e,t[n]))}function Qt(e){let{schema:t,value:n,minimumItems:r,maximumItems:i,uniqueItems:a,isUnset:o,isRequired:s,itemSchemaAt:c}=e,l=Math.max(1,r-n.length),u=l>100?1:l,d=[];for(let e=0;e<u;e+=1){let t=Wt(c(n.length+e));if(t===K){d.length=0;break}d.push(t)}let f=d.length===u?[...n,...d]:void 0,p=f!==void 0&&!a&&(i===void 0||f.length<=i)&&(f.length<r||U(t,f))?f:void 0,m=U(t,n),h=Pt(t).find(e=>U(t,e)&&(o||!m||Zt(n,e)))??(o&&s&&i===0&&U(t,[])?[]:void 0);return{atomicCandidate:Array.isArray(h)?structuredClone(h):void 0,autoCandidate:p}}function $t(){return($t=e((()=>{q()})))()}function en(e,t){return`${typeof e}:${typeof e==`number`&&Object.is(e,-0)?`-0`:typeof e==`number`&&Number.isNaN(e)?`NaN`:String(e)}:${t}`}function tn(e){let t=on.get(e);if(t?.length===e.length)return t;let n=new Map,r=e.map(e=>{if(e&&typeof e==`object`)return e;let t=en(e,0),r=n.get(t)??0;return n.set(t,r+1),en(e,r)});return on.set(e,r),r}function nn(e,t){on.set(e,t)}function rn(e){on.delete(e)}function an(e,t,n){let r=Array.from({length:n},()=>Symbol(`array-row`));nn(e,[...t,...r])}var on;function sn(){return(sn=e((()=>{on=new WeakMap})))()}function cn(e,t){let n=e.currentTarget;if(!(n instanceof HTMLElement))return;let r=n.closest(`.cfg-block`);Array.from(r?.getElementsByTagName(`openclaw-config-form-collection-draft`)??[]).find(e=>e.parentElement===r&&e.id===t)?.openDraft?.()}var J;function ln(){return(ln=e((()=>{x(),b(),D(),v(),q(),F(),H(),J=class extends c{constructor(...e){super(...e),this.draftOpen=!1,this.draftKey=``,this.draftValue=``,this.draftIsNull=!1,this.error=``,this.invalidTarget=null}willUpdate(e){let t=e.get(`props`),n=this.props;t&&(!n||t.identity!==n.identity||!Object.is(t.sourceIdentity,n.sourceIdentity)&&!G(t.sourceIdentity,n.sourceIdentity))&&this.closeDraft()}openDraft(){this.props?.disabled||(this.draftOpen=!0,this.updateComplete.then(()=>{this.querySelector(`[data-collection-draft-value]`)?.focus()}))}clearError(){this.error=``,this.invalidTarget=null}closeDraft(){this.draftOpen=!1,this.draftKey=``,this.draftValue=``,this.draftIsNull=!1,this.clearError()}fail(e,t){this.invalidTarget=e,this.error=t,this.updateComplete.then(()=>{this.querySelector(e===`key`?`[data-collection-draft-key]`:`[data-collection-draft-value]`)?.focus()})}parseValue(e){if(this.draftIsNull)return{ok:!0,value:null};let t=p(e),n=e.anyOf??e.oneOf??[],r=n.some(l)&&n.some(e=>[`number`,`integer`].includes(p(e)??``));if(t===`string`)return{ok:!0,value:this.draftValue};if(t===`number`||t===`integer`){let e=M(this.draftValue,t===`integer`);return typeof e==`number`?{ok:!0,value:e}:{ok:!1,message:k(`configForm.invalidNumber`)}}try{let t=JSON.parse(this.draftValue);if(typeof t==`number`){let t=M(this.draftValue,!1);return typeof t==`number`?{ok:!0,value:t}:r&&U(e,this.draftValue)?{ok:!0,value:this.draftValue}:{ok:!1,message:k(`configForm.invalidNumber`)}}return{ok:!0,value:t}}catch{return r&&U(e,this.draftValue)?{ok:!0,value:this.draftValue}:{ok:!1,message:k(`configForm.invalidJson`)}}}commit(){let e=this.props;if(!e||e.disabled)return;let t=this.parseValue(e.schema);if(!t.ok){this.fail(`value`,t.message);return}if(!U(e.schema,t.value)){this.fail(`value`,[`number`,`integer`].includes(p(e.schema)??``)?k(`configForm.invalidNumber`):k(`configForm.invalidString`));return}if(e.existingValues?.some(e=>G(e,t.value))){this.fail(`value`,k(`configForm.invalidString`));return}if(e.validateValue&&!e.validateValue(t.value)){this.fail(`value`,k(`configForm.invalidString`));return}let n=this.draftKey.trim();if(e.existingKeys&&(!n||e.existingKeys.includes(n)||e.validateKey?.(n)===!1)){this.fail(`key`,k(`configForm.invalidString`));return}this.dispatchEvent(new CustomEvent(`config-collection-draft-commit`,{bubbles:!0,composed:!0,cancelable:!0,detail:{...e.existingKeys?{key:n}:{},value:t.value}}))?this.closeDraft():this.fail(`value`,k(`configForm.invalidString`))}updated(){let e=this.querySelector(`[data-collection-draft-key]`),t=this.querySelector(`[data-collection-draft-value]`);e?.setCustomValidity(this.invalidTarget===`key`?this.error:``),t?.setCustomValidity(this.invalidTarget===`value`?this.error:``)}render(){let e=this.props;if(!e||!this.draftOpen||e.disabled)return T;let t=p(e.schema),n=U(e.schema,null),r=t===`string`||t===`number`||t===`integer`,i=`${this.id}-error`,a=`${k(`configForm.add`)}: ${e.label}`,o=r?S`
          <input
            data-collection-draft-value
            type=${t===`string`?`text`:`number`}
            class="settings-input"
            aria-label=${a}
            aria-describedby=${i}
            aria-invalid=${this.invalidTarget===`value`?`true`:`false`}
            .value=${this.draftValue}
            ?disabled=${this.draftIsNull}
            @input=${e=>{this.draftValue=e.currentTarget.value,this.clearError()}}
          />
        `:S`
          <textarea
            data-collection-draft-value
            class="settings-input"
            aria-label=${a}
            aria-describedby=${i}
            aria-invalid=${this.invalidTarget===`value`?`true`:`false`}
            placeholder=${k(`configForm.jsonValue`)}
            rows="2"
            .value=${this.draftValue}
            ?disabled=${this.draftIsNull}
            @input=${e=>{this.draftValue=e.currentTarget.value,this.clearError()}}
          ></textarea>
        `;return S`
      <div class="settings-row settings-row--stacked cfg-collection-draft">
        <div class="settings-row__control">
          <div class="cfg-collection-draft__controls">
            ${e.existingKeys?S`
                    <input
                      data-collection-draft-key
                      type="text"
                      class="settings-input"
                      aria-label=${k(`configForm.key`)}
                      aria-describedby=${i}
                      aria-invalid=${this.invalidTarget===`key`?`true`:`false`}
                      placeholder=${k(`configForm.key`)}
                      .value=${this.draftKey}
                      @input=${e=>{this.draftKey=e.currentTarget.value,this.clearError()}}
                    />
                  `:T}
            ${n?S`
                    <label class="field checkbox">
                      <input
                        data-collection-draft-null
                        type="checkbox"
                        .checked=${this.draftIsNull}
                        @change=${e=>{this.draftIsNull=e.currentTarget.checked,this.clearError()}}
                      />
                      <span>${k(`configForm.nullValue`)}</span>
                    </label>
                  `:T}
            ${o}
            <span id=${i} class="cfg-field__error" role="alert" ?hidden=${!this.error}
              >${this.error}</span
            >
            <div class="cfg-collection-draft__actions">
              <button type="button" class="btn btn--sm" @click=${()=>this.commit()}>
                ${e.existingKeys?k(`configForm.addEntry`):k(`configForm.add`)}
              </button>
              <button type="button" class="btn btn--sm" @click=${()=>this.closeDraft()}>
                ${k(`common.cancel`)}
              </button>
            </div>
          </div>
        </div>
      </div>
    `}},t([E({attribute:!1})],J.prototype,`props`,void 0),t([w()],J.prototype,`draftOpen`,void 0),t([w()],J.prototype,`draftKey`,void 0),t([w()],J.prototype,`draftValue`,void 0),t([w()],J.prototype,`draftIsNull`,void 0),t([w()],J.prototype,`error`,void 0),t([w()],J.prototype,`invalidTarget`,void 0),customElements.get(`openclaw-config-form-collection-draft`)||customElements.define(`openclaw-config-form-collection-draft`,J)})))()}function un(e){return Object.keys(e??{}).filter(e=>!Tn.has(e)).length===0}function dn(e){if(e===void 0)return``;try{return JSON.stringify(e,null,2)??``}catch{return``}}function Y(e){return typeof e==`number`?j(e):g(e)}function fn(e,t){return{...e,default:t}}function pn(e){return typeof e==`string`||typeof e==`number`||typeof e==`boolean`||typeof e==`bigint`?String(e):null}function mn(e,t){if(Object.is(e,t))return!0;let n=pn(e),r=pn(t);return n!==null&&n===r}function hn(e){if(!a(e))return!1;let t=e;return typeof t.source!=`string`||typeof t.id!=`string`?!1:t.provider===void 0||typeof t.provider==`string`}function gn(e){let t=ut(e.value,e.path,e.hints),n=e.value===s,r=t&&!n&&(e.revealSensitive||(e.isSensitivePathRevealed?.(e.path)??!1));return{isSensitive:t,isRedacted:t&&!r,isRevealed:r,canReveal:t&&!n,sentinelRedacted:n}}function _n(e){let{state:t}=e;if(!t.isSensitive||!e.onToggleSensitivePath)return T;let n=t.canReveal?t.isRevealed?k(`configForm.hideValue`):k(`configForm.revealValue`):t.sentinelRedacted?k(`configForm.storedSecretNotRevealable`):k(`configForm.disableStreamToReveal`);return S`
    <openclaw-tooltip .content=${n}>
      <button
        type="button"
        class="settings-secret__toggle"
        aria-label=${n}
        aria-pressed=${t.isRevealed}
        ?disabled=${e.disabled||!t.canReveal}
        @click=${()=>e.onToggleSensitivePath?.(e.path)}
      >
        ${t.isRevealed?O.eye:O.eyeOff}
      </button>
    </openclaw-tooltip>
  `}function vn(e,t){return t===T?e:S`<span class="settings-secret">${e}${t}</span>`}function yn(e){let t=e.filter(e=>e!==`advanced`);return t.length===0?T:S`
    <div class="cfg-tags">
      ${t.map(e=>S`<span class="cfg-tag">${e}</span>`)}
    </div>
  `}function X(e){let t=e.showLabel?e.help:void 0,n=e.showLabel?e.defaultDescription:void 0,r=e.showLabel||!!t||!!n||e.tags.length>0||!!e.error,i=e.stacked||!r?`settings-row settings-row--stacked`:`settings-row`;return S`
    <div class=${i}>
      ${r?S`
              <div class="settings-row__text">
                ${e.showLabel?S`<span class="settings-row__title">${e.label}</span>`:T}
                ${t?S`<span class="settings-row__desc" id=${e.helpId??T}
                        >${t}</span
                      >`:T}
                ${n?S`<span class="settings-row__desc">${n}</span>`:T}
                ${yn(e.tags)}
                ${e.error?S`<span class="cfg-field__error" role="alert">${e.error}</span>`:T}
              </div>
            `:T}
      ${e.control===T?T:S`<div class="settings-row__control">${e.control}</div>`}
    </div>
  `}function bn(e){return e===T?T:S`
    <div class="settings-row">
      <div class="settings-row__text">
        <span class="settings-row__desc">${e}</span>
      </div>
    </div>
  `}function xn(e,t){return gn({path:e.path,value:t,hints:e.hints,revealSensitive:e.revealSensitive??!1,isSensitivePathRevealed:e.isSensitivePathRevealed}).isRedacted?T:Z(e.schema,e.value)}function Z(e,t){return e.default===void 0?T:S`${k(t===void 0?`configForm.usingDefault`:`configForm.defaultValue`,{value:Y(e.default)})}`}function Sn(e){let t=e.options.findIndex(t=>mn(t,e.resolvedValue));return ue({value:t<0?``:String(t),options:e.options.map((t,n)=>({value:String(n),label:Cn(t,e.options)})),disabled:e.disabled,ariaLabel:e.ariaLabel,onChange:t=>{let n=e.options[Number(t)];if(n!==void 0)return e.onSelect(n)}})}function Cn(e,t){return t.includes(!0)&&t.includes(!1)?e===!0?k(`configForm.enumOn`):e===!1?k(`configForm.enumOff`):e===`auto`?k(`configForm.enumAuto`):Y(e):Y(e)}function wn(e){let{path:t,fallback:n,sensitiveState:r,disabled:i,onPatch:a}=e,o=V(t,`json-error`),s=[e.descriptionId,o].filter(Boolean).join(` `),c=(e,t)=>{let n=e.closest(`.cfg-json-editor`)?.querySelector(`.cfg-field__error`);e.setCustomValidity(t),e.setAttribute(`aria-invalid`,String(!!t)),n&&(n.hidden=!t,n.textContent=t)},l=t=>{let n=``,r=t.value.trim();if(!r&&e.isRequired)n=k(`configForm.invalidJson`);else if(r)try{U(e.schema,JSON.parse(r))||(n=k(`configForm.invalidJson`))}catch{n=k(`configForm.invalidJson`)}return c(t,n),!n},u=r.isRedacted?``:n,d=JSON.stringify(t),f=(e,n)=>a(t,n)!==!1||(e.value=u,l(e),!1),p=S`
    <textarea
      ${ee(t=>{if(!(t instanceof HTMLTextAreaElement))return;let n=En.get(t);n&&(!Object.is(n.sourceValue,e.sourceValue)&&!G(n.sourceValue,e.sourceValue)||!Object.is(n.rowIdentity,e.rowIdentity)||n.fallback!==u||n.pathKey!==d)&&(t.value=u,c(t,``)),En.set(t,{sourceValue:e.sourceValue,rowIdentity:e.rowIdentity,fallback:u,pathKey:d})})}
      class="settings-input${r.isRedacted?` cfg-redacted`:``}"
      aria-label=${e.ariaLabel}
      aria-describedby=${s||T}
      aria-invalid="false"
      placeholder=${r.isRedacted?it():k(`configForm.jsonValue`)}
      rows=${e.rows}
      .value=${u}
      ?disabled=${i}
      ?readonly=${r.isRedacted}
      @click=${()=>{r.isRedacted&&e.onToggleSensitivePath&&e.onToggleSensitivePath(t)}}
      @input=${e=>{r.isRedacted||l(e.target)}}
      @change=${e=>{if(r.isRedacted)return;let t=e.target;if(!l(t))return;let n=t.value.trim();if(!n){f(t,void 0);return}try{f(t,JSON.parse(n))}catch{}}}
    ></textarea>
  `;return S`
    <span class="cfg-json-editor">
      ${vn(p,_n({path:t,state:r,disabled:i,onToggleSensitivePath:e.onToggleSensitivePath}))}
      <span id=${o} class="cfg-field__error" role="alert" hidden></span>
    </span>
  `}var Tn,En;function Dn(){return(Dn=e((()=>{x(),C(),A(),D(),N(),y(),_(),q(),F(),H(),fe(),Tn=new Set([`title`,`description`,`default`,`nullable`,`enumIncludesNull`,`tags`,`x-tags`]),En=new WeakMap})))()}function On(e,t){let{schema:n,value:r,path:i,hints:a,rawAvailable:o,unsupported:s,disabled:c,reservedKeys:l,validateKey:d,onPatch:f,searchCriteria:p,revealSensitive:m,isSensitivePathRevealed:h,onToggleSensitivePath:g}=e,_=un(n),v=_?{}:Wt(n),y=V(i,`map-draft`),b={schema:n,label:k(`configForm.customEntries`),disabled:c,identity:y,sourceIdentity:e.sourceIdentity??r,existingKeys:[...new Set([...Object.keys(r),...l])],validateKey:d},x=Object.entries(r??{}).filter(([e])=>!l.has(e)),C=p&&we(p)?x.filter(([e,t])=>Se({schema:n,value:t,path:[...i,e],hints:a,criteria:p})):x;return S`
    <div class="cfg-block cfg-map">
      <div class="settings-row">
        <div class="settings-row__text">
          <span class="settings-row__title">${k(`configForm.customEntries`)}</span>
        </div>
        <div class="settings-row__control">
          <button
            type="button"
            class="btn btn--sm"
            aria-controls=${y}
            ?disabled=${c}
            @click=${e=>{if(v===K){cn(e,y);return}let t={...r},n=1,a=`custom-${n}`;for(;a in t;)n+=1,a=`custom-${n}`;t[a]=v,f(i,t)===!1&&cn(e,y)}}
          >
            ${k(`configForm.addEntry`)}
          </button>
        </div>
      </div>

      <openclaw-config-form-collection-draft
        id=${y}
        .props=${b}
        @config-collection-draft-commit=${e=>{let t=e.detail.key;(!t||Object.hasOwn(r,t)||l.has(t)||f(i,{...r,[t]:e.detail.value})===!1)&&e.preventDefault()}}
      ></openclaw-config-form-collection-draft>
      ${C.length===0?le(k(`configForm.noCustomEntries`)):S`
              <div class="settings-subrows">
                ${C.map(([l,v])=>{let y=[...i,l],b=gn({path:y,value:v,hints:a,revealSensitive:m??!1,isSensitivePathRevealed:h});return S`
                    <div class="settings-row">
                      <div class="settings-row__text">
                        <input
                          type="text"
                          class="settings-input"
                          placeholder=${k(`configForm.key`)}
                          aria-label=${`${k(`configForm.key`)}: ${l}`}
                          .value=${l}
                          ?disabled=${c}
                          @change=${e=>{let t=e.currentTarget;if(!(t instanceof HTMLInputElement))return;let n=t.value.trim();if(!n||n===l){t.value=l;return}let a=d(n)?u(r[l])?k(`configForm.renameRedactedBlocked`):``:k(`configForm.invalidString`);if(n in r||a){t.value=l,a&&(t.setCustomValidity(a),t.reportValidity(),t.setCustomValidity(``));return}let o={...r,[n]:r[l]};delete o[l],f(i,o)===!1&&(t.value=l)}}
                        />
                      </div>
                      <div class="settings-row__control">
                        <openclaw-tooltip .content=${k(`configForm.removeEntry`)}>
                          <button
                            type="button"
                            class="btn btn--icon"
                            style="width:28px;height:28px;padding:0;"
                            aria-label=${k(`configForm.removeEntry`)}
                            ?disabled=${c}
                            @click=${()=>{let e={...r};delete e[l],f(i,e)}}
                          >
                            ${O.trash}
                          </button>
                        </openclaw-tooltip>
                      </div>
                    </div>
                    ${_?X({label:l,tags:[],showLabel:!1,stacked:!0,control:wn({schema:n,path:y,ariaLabel:`${l}: ${k(`configForm.jsonValue`)}`,sourceValue:v,rowIdentity:e.rowIdentity,fallback:dn(v),rows:2,sensitiveState:b,disabled:c,isRequired:!0,onToggleSensitivePath:g,onPatch:f})}):t({schema:n,value:v,path:y,hints:a,rawAvailable:o,unsupported:s,disabled:c,isRequired:!0,sourceIdentity:v,controlIdentity:r,rowIdentity:e.rowIdentity,searchCriteria:p,showLabel:!1,revealSensitive:m,isSensitivePathRevealed:h,onToggleSensitivePath:g,onPatch:f})}
                  `})}
              </div>
            `}
    </div>
  `}function kn(){return(kn=e((()=>{x(),A(),D(),y(),ln(),q(),Dn(),ye(),H(),fe()})))()}function An(e,t){let{schema:n,value:r,path:i,hints:a,unsupported:o,disabled:s,onPatch:c,searchCriteria:l,rawAvailable:u,revealSensitive:f,isSensitivePathRevealed:p,onToggleSensitivePath:g,onRemove:_}=e,{label:v,help:y,tags:b}=B(i,n,a),x=l&&we(l)&&Te({schema:n,path:i,hints:a,criteria:l})?void 0:l,C=r===void 0&&n.default!==void 0,w=C?n.default:r,ee=w===void 0?Nn:w,E=w&&typeof w==`object`&&!Array.isArray(w)?w:{},D=xn(e,w),k=Ot(n).map(e=>[e,Nt(n,e)]).filter(e=>!!e[1]),A=Dt(n),j=k.toSorted((e,t)=>{let n=d([...i,e[0]],a)?.order??0,r=d([...i,t[0]],a)?.order??0;return n===r?e[0].localeCompare(t[0]):n-r}),M=new Set(k.map(([e])=>e)),N=kt(n),te=!!N&&typeof N==`object`,P=(e,t)=>{if(e.length<i.length||!i.every((t,n)=>t===e[n]))return!1;let r,a=e.slice(i.length);if(a.length===0){if(!t||typeof t!=`object`||Array.isArray(t))return!1;r=t}else{try{r=structuredClone(E)}catch{return!1}t===void 0?m(r,a):h(r,a,t)}return Mt(n,E,r)?C?c(i,r)!==!1:(t===void 0&&_?_(e):c(e,t))!==!1:!1},F=S`
    ${j.map(([n,r])=>t({schema:C&&Object.hasOwn(E,n)?fn(r,E[n]):r,value:C?void 0:E[n],path:[...i,n],hints:a,rawAvailable:u,unsupported:o,disabled:s,isRequired:A.has(n),sourceIdentity:C?void 0:E[n],controlIdentity:e.controlIdentity??E,rowIdentity:e.rowIdentity,searchCriteria:x,revealSensitive:f,isSensitivePathRevealed:p,onToggleSensitivePath:g,onPatch:P}))}
    ${te?On({...e,schema:N,value:E,sourceIdentity:ee,reservedKeys:M,validateKey:e=>jt(n,e),searchCriteria:x,onPatch:P},t):T}
  `;return i.length===1||e.showLabel===!1?S`${i.length===1?bn(D):T}${F}`:S`
    <details class="cfg-object cfg-block" ?open=${i.length<=2}>
      <summary class="settings-row cfg-object__summary">
        <div class="settings-row__text">
          <span class="settings-row__title">${v}</span>
          ${y?S`<span class="settings-row__desc">${y}</span>`:T}
          ${n.default===void 0?T:S`<span class="settings-row__desc">${D}</span>`}
          ${yn(b)}
        </div>
        <div class="settings-row__control">
          <span class="settings-row__chevron cfg-object__chevron">${O.chevronDown}</span>
        </div>
      </summary>
      <div class="settings-subrows">${F}</div>
    </details>
  `}function jn(e,t){let{schema:n,value:r,path:i,hints:a,unsupported:o,disabled:s,onPatch:c,searchCriteria:l,rawAvailable:u,revealSensitive:d,isSensitivePathRevealed:f,onToggleSensitivePath:p}=e,m=e.showLabel??!0,h=e.showHeaderMeta??m,{label:g,help:_,tags:v}=B(i,n,a),y=l&&we(l)&&Te({schema:n,path:i,hints:a,criteria:l})?void 0:l,b=Array.isArray(n.items)?n.items:void 0,x=Array.isArray(n.items)?n.items[0]??{}:n.items;if(!x)return X({label:g,tags:[],showLabel:!0,control:T,error:k(`configForm.unsupportedArray`)});let C=r===void 0&&Array.isArray(n.default),w=Array.isArray(r)?r:Array.isArray(n.default)?n.default:[],ee=Array.isArray(r)?r:Array.isArray(n.default)?n.default:Mn,E=xn(e,w),D=tn(w),{minItems:A,maxItems:j,uniqueItems:M}=Et(n),N=e=>De(n,e)??(b?{}:x),{atomicCandidate:te,autoCandidate:P}=Qt({schema:n,value:w,minimumItems:A,maximumItems:j,uniqueItems:M,isUnset:r===void 0,isRequired:e.isRequired??!1,itemSchemaAt:N}),F=j===void 0||w.length<j,I=te===void 0&&P===void 0,L=N(w.length),R=V(i,`array-draft`),ne={schema:L,label:g,disabled:s||!F,identity:R,sourceIdentity:ee,existingValues:M?w:void 0,validateValue:e=>{let t=[...w,e];return(j===void 0||t.length<=j)&&(t.length<A||U(n,t))}},re=(e,t)=>{if(e.length<=i.length||!i.every((t,n)=>t===e[n]))return!1;let r=e.slice(i.length),a=r[0];if(typeof a!=`number`||a<0||a>=w.length)return!1;let o=[...w],s=r.slice(1);if(s.length===0){if(t===void 0)return!1;o[a]=t}else{let e=Ne(w[a],s,t);if(!e.ok)return!1;o[a]=e.value}if(Lt(n,w,o,M,!0)){nn(o,D);let e=c(i,o)!==!1;return e||rn(o),e}return!1};return S`
    <div class="cfg-block cfg-array">
      <div class="settings-row">
        <div class="settings-row__text">
          ${m?S`<span class="settings-row__title">${g}</span>`:T}
          ${h&&_?S`<span class="settings-row__desc">${_}</span>`:T}
          ${h&&n.default!==void 0?S`<span class="settings-row__desc">${E}</span>`:T}
          ${yn(v)}
        </div>
        <div class="settings-row__control">
          <span class="settings-row__value"
            >${k(w.length===1?`configForm.itemCountOne`:`configForm.itemCount`,{count:String(w.length)})}</span
          >
          <button
            type="button"
            class="btn btn--sm"
            aria-controls=${R}
            ?disabled=${s||!F&&te===void 0}
            @click=${e=>{te?c(i,te)===!1&&cn(e,R):I?cn(e,R):P&&(an(P,D,P.length-w.length),c(i,P)===!1&&(rn(P),cn(e,R)))}}
          >
            ${k(`configForm.add`)}
          </button>
        </div>
      </div>
      <openclaw-config-form-collection-draft
        id=${R}
        .props=${ne}
        @config-collection-draft-commit=${e=>{let t=[...w,e.detail.value],r=!(M&&w.some(t=>G(t,e.detail.value)))&&(j===void 0||w.length<j)&&U(L,e.detail.value)&&(t.length<A||U(n,t)),a=!1;r&&(an(t,D,1),a=c(i,t)!==!1,a||rn(t)),a||e.preventDefault()}}
      ></openclaw-config-form-collection-draft>
      ${w.length===0?le(k(`configForm.noItems`)):S`
              <div class="settings-subrows">
                ${w.map((e,r)=>{let l=N(r);return S`
                    <div class="settings-row">
                      <div class="settings-row__text">
                        <span class="settings-row__title">#${r+1}</span>
                      </div>
                      <div class="settings-row__control">
                        <openclaw-tooltip .content=${k(`configForm.removeItem`)}>
                          <button
                            type="button"
                            class="btn btn--icon"
                            style="width:28px;height:28px;padding:0;"
                            aria-label=${k(`configForm.removeItem`)}
                            ?disabled=${s||w.length<=A||!Lt(n,w,w.toSpliced(r,1),M,!1)}
                            @click=${()=>{let e=w.toSpliced(r,1);Lt(n,w,e,M,!1)&&(nn(e,D.toSpliced(r,1)),c(i,e)===!1&&rn(e))}}
                          >
                            ${O.trash}
                          </button>
                        </openclaw-tooltip>
                      </div>
                    </div>
                    ${t({schema:C?fn(l,e):l,value:C?void 0:e,path:[...i,r],hints:a,rawAvailable:u,unsupported:o,disabled:s,isRequired:!0,sourceIdentity:C?void 0:e,controlIdentity:w,rowIdentity:D[r],searchCriteria:y,showLabel:!1,revealSensitive:d,isSensitivePathRevealed:f,onToggleSensitivePath:p,onPatch:re})}
                  `})}
              </div>
            `}
    </div>
  `}var Mn,Nn;function Pn(){return(Pn=e((()=>{x(),A(),D(),y(),$t(),sn(),ln(),Fe(),be(),q(),kn(),Dn(),ye(),H(),fe(),Mn=Symbol(`unset-array-source`),Nn=Symbol(`unset-map-source`)})))()}function Fn(e){let{schema:t,value:n,path:r,hints:i,disabled:a,onPatch:o}=e,s=e.showLabel??!0,{label:c,help:l,tags:u}=B(r,t,i),d=s&&l?V(r,`description`):void 0,f=dn(n===void 0?t.default:n),p=gn({path:r,value:n,hints:i,revealSensitive:e.revealSensitive??!1,isSensitivePathRevealed:e.isSensitivePathRevealed}),m=wn({schema:t,path:r,ariaLabel:c,descriptionId:d,sourceValue:e.sourceIdentity??n,rowIdentity:e.rowIdentity,fallback:f,rows:3,sensitiveState:p,disabled:a,isRequired:e.isRequired,onToggleSensitivePath:e.onToggleSensitivePath,onPatch:o});return X({label:c,help:l,helpId:d,defaultDescription:p.isRedacted?T:Z(t,n),tags:u,showLabel:s,stacked:!0,control:m})}function In(){return(In=e((()=>{x(),Dn(),ye(),H()})))()}function Ln(e,t){let n=e.trim();if(n.startsWith(`+`))try{let e=ke(n,{extract:!1});if(!e?.isPossible())return;let r=e.formatInternational();return!e.country||Rn.has(e.countryCallingCode)?r:`${new Intl.DisplayNames(t?[t]:void 0,{type:`region`}).of(e.country)||e.country} · ${r}`}catch{return}}var Rn;function zn(){return(zn=e((()=>{je(),Ae(),Rn=new Set(Object.entries(Oe.country_calling_codes).filter(([,e])=>e.length>1).map(([e])=>e))})))()}function Bn(e){if(typeof e==`string`)return`string`;if(typeof e==`number`)return`number`;if(typeof e==`boolean`)return`boolean`}function Vn(e,t,n,r){if(!(e instanceof HTMLInputElement))return;let i=Kn.get(e),a=i?.edit!==void 0&&e.ownerDocument.activeElement===e&&Object.is(i.rowIdentity,t)&&i.pathKey===n&&i.presentationIdentity===r;Kn.set(e,{edit:a?i.edit:void 0,pathKey:n,presentationIdentity:r,rowIdentity:t})}function Hn(e,t){let n=Kn.get(e);return n?(n.edit??={branch:t},n.edit):{branch:t}}function Un(e,t){return Kn.get(e)?.edit??{branch:t}}function Wn(e){let t=Kn.get(e);t&&(t.edit=void 0)}function Gn(e){e.currentTarget instanceof HTMLInputElement&&Wn(e.currentTarget)}var Kn;function qn(){return(qn=e((()=>{Kn=new WeakMap})))()}function Q(e,t){return e.setCustomValidity(t),e.setAttribute(`aria-invalid`,String(!!t)),!t}function Jn(e,t,n,r,i,a,o,s){if(!(e instanceof HTMLInputElement))return;let c=or.get(e);c&&(!Object.is(c.sourceIdentity,n)||!Object.is(c.rowIdentity,r)||c.pathKey!==i||c.presentationIdentity!==a||c.renderedValue!==o?e.matches(`:focus`)&&e.value!==c.renderedValue?s(e):(e.value=o,Q(e,``)):Object.is(c.controlIdentity,t)||s(e)),or.set(e,{controlIdentity:t,sourceIdentity:n,rowIdentity:r,pathKey:i,presentationIdentity:a,renderedValue:o})}function Yn(e,t,n,r){let i=e.trim(),a=t.anyOf??t.oneOf??[],o=U(t,e),s=r?r.branch:Bn(n),c=i===`true`||i!==`false`&&void 0;if(c!==void 0&&U(t,c)){let e=!1,t=!1;for(let n of a)!(p(n)===`boolean`||typeof n.const==`boolean`||n.enum?.some(e=>typeof e==`boolean`))||!U(n,c)||(e=!0,t||=Object.is(n.const,c)||!!n.enum?.some(e=>Object.is(e,c)));if(e&&(s!==`string`||t||!o))return c}let l;for(let n of a){let r=p(n);if(r!==`number`&&r!==`integer`)continue;let i=M(e,r===`integer`);if(typeof i==`number`&&U(t,i)){l=i;break}}if(s===`number`){if(l!==void 0)return l;if(P(e))return o&&I(i)?e:void 0}return s===`string`&&o||l===void 0?e:l}function Xn(e,t,n,r){return U(t,Yn(e,t,n,r))?``:k(`configForm.invalidString`)}function Zn(e,t,n,r,i){return e===``&&!n&&!!Xn(e,t,r,i)}function Qn(e,t){return U(t,e)?``:k(`configForm.invalidNumber`)}function $n(e,t){let n=e.value;if(n.trim()===``)return e.validity.badInput?{kind:`badInput`}:{kind:`empty`};let r=M(n,p(t)===`integer`);return typeof r==`number`?{kind:`value`,parsed:r,message:Qn(r,t)}:{kind:`invalid`}}function er(e,t){return e.kind===`value`?e.message:e.kind===`invalid`||e.kind===`badInput`||t?k(`configForm.invalidNumber`):``}function tr(e,t,n,r){Q(e,er(t,n.isRequired===!0))&&(t.kind===`empty`?r(void 0):t.kind===`value`&&r(t.parsed))}function nr(e,t,n){return er($n(e,t),n)}function rr(e){let{schema:t,value:n,path:r,hints:i,disabled:a,onPatch:o,inputType:s}=e,c=e.showLabel??!0,l=d(r,i),{label:u,help:f,tags:p}=B(r,t,i),m=c&&f?V(r,`description`):void 0,h=gn({path:r,value:n,hints:i,revealSensitive:e.revealSensitive??!1,isSensitivePathRevealed:e.isSensitivePathRevealed}),g=typeof n==`object`&&!!n&&!Array.isArray(n),_=hn(n),v=e.rawAvailable??!0,y=h.isRedacted||_,b=y?_?k(v?`configForm.structuredSecretRaw`:`configForm.structuredSecretFile`):it():l?.placeholder??(t.default===void 0?``:k(`configForm.defaultValue`,{value:Y(t.default)})),x=y?``:g?dn(n):n??``,C=n===void 0?t.default:n,w=Bn(C),E=h.isSensitive&&!y?`text`:s,D=l?.presentation===`phone-number`,O=D&&!y&&typeof n==`string`?Ln(n,te.getLocale()):void 0,A=e.controlIdentity??e.sourceIdentity??n,j=e.sourceIdentity??n,M=V(r,`scalar-identity`),N=Y(x),P=[y?`redacted`:`visible`,E,D?`phone`:`plain`,_?v?`secret-raw`:`secret-file`:`scalar`].join(`:`),F=n=>{if(y){Q(n,``);return}if(s===`number`){Q(n,nr(n,t,e.isRequired===!0));return}let r=n.value,i=Un(n,w);Q(n,Zn(r,t,e.isRequired===!0,C,i)?``:Xn(r,t,C,i))},I=(e,t)=>o(r,t)!==!1||(e.value=N,F(e),!1),L=vn(S`
    <input
      ${ee(t=>{Vn(t,e.rowIdentity,M,P),Jn(t,A,j,e.rowIdentity,M,P,N,F)})}
      type=${E}
      class="settings-input${y?` cfg-redacted`:``}"
      aria-label=${u}
      aria-describedby=${m??T}
      aria-invalid="false"
      placeholder=${b}
      .value=${N}
      ?disabled=${a}
      ?readonly=${y}
      @click=${()=>{h.isRedacted&&!_&&e.onToggleSensitivePath&&e.onToggleSensitivePath(r)}}
      @input=${n=>{if(y)return;let r=n.target,i=r.value;if(s===`number`){tr(r,$n(r,t),e,e=>I(r,e));return}let a=Hn(r,w);Zn(i,t,e.isRequired===!0,C,a)?(Q(r,``),I(r,void 0)):Q(r,Xn(i,t,C,a))&&I(r,Yn(i,t,C,a))}}
      @change=${n=>{if(s===`number`||y)return;let r=n.target,i=Hn(r,w),a=r.value,o=Xn(a,t,C,i);if(!o&&!D){Q(r,``),I(r,Yn(a,t,C,i)),Wn(r);return}let c=a.trim();if(Zn(c,t,e.isRequired===!0,C,i)){r.value=c,Q(r,``),I(r,void 0),Wn(r);return}if(Xn(c,t,C,i)){Q(r,o),Wn(r);return}r.value=c,Q(r,``),I(r,Yn(c,t,C,i)),Wn(r)}}
      @blur=${Gn}
    />
  `,_?T:_n({path:r,state:h,disabled:a,onToggleSensitivePath:e.onToggleSensitivePath})),R=D?S`
        <span class="settings-phone-presentation">
          ${L}
          ${O?S`<span class="settings-phone-presentation__value">${O}</span>`:T}
        </span>
      `:L;return X({label:u,help:f,helpId:m,defaultDescription:y?T:Z(t,n),tags:p,showLabel:c,control:R})}function ir(e){let{schema:t,value:n,path:r,hints:i,disabled:a,onPatch:o}=e,s=e.showLabel??!0,{label:c,help:l,tags:u}=B(r,t,i),d=s&&l?V(r,`description`):void 0,f=n??``,p=n===void 0?t.default:n,m=Rt(t),h=typeof m.step==`number`?m.step:1,g=e.controlIdentity??e.sourceIdentity??n,_=e.sourceIdentity??n,v=V(r,`scalar-identity`),y=Y(f),b=n=>{Q(n,nr(n,t,e.isRequired===!0))},x=(e,t)=>o(r,t)!==!1||(e.value=y,b(e),!1),C=e=>{if(a)return;let n=Number(p),i=Vt((Number.isFinite(n)?n:Vt(0,t))+e*h,t);U(t,i)&&o(r,i)},w=S`
    <button
      type="button"
      class="btn btn--sm btn--icon"
      aria-label=${`${c}: -${h}`}
      ?disabled=${a}
      @click=${()=>C(-1)}
    >
      −
    </button>
    <input
      ${ee(t=>Jn(t,g,_,e.rowIdentity,v,`number`,y,b))}
      type="number"
      class="settings-input"
      aria-label=${c}
      aria-describedby=${d??T}
      aria-invalid="false"
      placeholder=${t.default===void 0?T:k(`configForm.defaultValue`,{value:Y(t.default)})}
      min=${m.min??T}
      max=${m.max??T}
      step=${m.step}
      .value=${y}
      ?disabled=${a}
      @keydown=${e=>{n===void 0&&p!==void 0&&(e.key===`ArrowUp`||e.key===`ArrowDown`)&&(e.preventDefault(),C(e.key===`ArrowUp`?1:-1))}}
      @input=${n=>{let r=n.target;tr(r,$n(r,t),e,e=>x(r,e))}}
      @change=${n=>{let r=n.target,i=$n(r,t);if(i.kind!==`value`){Q(r,er(i,e.isRequired===!0));return}let a=Vt(i.parsed,t);r.value=Y(a),Q(r,Qn(a,t))&&x(r,a)}}
    />
    <button
      type="button"
      class="btn btn--sm btn--icon"
      aria-label=${`${c}: +${h}`}
      ?disabled=${a}
      @click=${()=>C(1)}
    >
      +
    </button>
  `;return X({label:c,help:l,helpId:d,defaultDescription:Z(t,n),tags:u,showLabel:s,control:w})}function ar(e){let{schema:t,value:n,path:r,hints:i,disabled:a,options:o,onPatch:s}=e,c=e.showLabel??!0,{label:l,help:u,tags:f}=B(r,t,i),p=c&&u?V(r,`description`):void 0,m=n===void 0&&t.default!==void 0,h=m?t.default:n,g=o.findIndex(e=>e===h||String(e)===String(h)),_=`__unset__`,v=`__null__`,y=t.nullable&&t.enumIncludesNull,b=m?_:h===null&&y?v:g>=0?String(g):_,x=S`
    <select
      class="settings-select"
      aria-label=${l}
      aria-describedby=${p??T}
      ?disabled=${a}
      .value=${b}
      @change=${n=>{let i=n.target,a=i.value;if(a===_&&e.isRequired&&t.default===void 0){i.value=b;return}if(a===_){(e.isRequired&&t.default!==void 0?s(r,structuredClone(t.default)):e.onRemove?e.onRemove(r):s(r,void 0))===!1&&(i.value=b);return}let c=a===v?null:o[Number(a)];s(r,c)===!1&&(i.value=b)}}
    >
      <option
        value=${_}
        ?selected=${b===_}
        ?disabled=${e.isRequired&&t.default===void 0}
      >
        ${t.default===void 0?d(r,i)?.placeholder??k(`configForm.select`):k(`configForm.defaultValue`,{value:Y(t.default)})}
      </option>
      ${y?S`
              <option value=${v} ?selected=${b===v}>
                ${k(`configForm.nullValue`)}
              </option>
            `:T}
      ${o.map((e,t)=>S`
          <option value=${String(t)} ?selected=${b===String(t)}>
            ${Cn(e,o)}
          </option>
        `)}
    </select>
  `;return X({label:l,help:u,helpId:p,defaultDescription:Z(t,n),tags:f,showLabel:c,control:x})}var or;function sr(){return(sr=e((()=>{zn(),x(),C(),D(),q(),Dn(),F(),qn(),ye(),H(),or=new WeakMap})))()}function cr(e){let{schema:t,value:n,path:r,hints:i,unsupported:a,disabled:s,onPatch:c}=e,l=e.showLabel??!0,u=p(t),{label:f,help:m,tags:h}=B(r,t,i),g=o(r),_=e.searchCriteria;if(a.has(g)||[...a].some(e=>{if(!e.includes(`*`))return!1;let t=e.split(`.`);return t.length===r.length&&t.every((e,t)=>e===`*`||e===String(r[t]))}))return X({label:f,tags:[],showLabel:!0,control:T,error:k(`configForm.unsupportedNode`)});if(_&&we(_)&&!Se({schema:t,value:n,path:r,hints:i,criteria:_}))return T;let v=qt(e);if(Jt(e,v)){let t={identity:V(r,`structured-draft`),sourceIdentity:e.sourceIdentity??n,initialValue:v,params:e,renderNode:cr};return S`
      <openclaw-config-form-structured-draft
        class="cfg-structured-draft"
        .props=${t}
      ></openclaw-config-form-structured-draft>
    `}if(t.anyOf||t.oneOf){let i=(t.anyOf??t.oneOf??[]).filter(e=>!(e.type===`null`||Array.isArray(e.type)&&e.type.includes(`null`)));if(i.length===1){let t=i[0];return t?cr({...e,schema:t}):T}let a=i.map(e=>{if(e.const!==void 0)return e.const;if(e.enum&&e.enum.length===1)return e.enum[0]}),o=a.every(e=>e!==void 0);if(o&&a.length>0&&a.length<=5){let e=n===void 0?t.default:n;return X({label:f,help:m,defaultDescription:Z(t,n),tags:h,showLabel:l,control:Sn({options:a,resolvedValue:e,disabled:s,ariaLabel:f,onSelect:e=>c(r,e)})})}if(o&&a.length>5)return ar({...e,options:a});let u=new Set(i.map(e=>p(e)).filter(Boolean)),d=new Set([...u].map(e=>e===`integer`?`number`:e));if([...d].every(e=>[`string`,`number`,`boolean`].includes(e))){let n=d.has(`string`),r=d.has(`number`);if(d.has(`boolean`)&&d.size===1)return cr({...e,schema:{...t,type:`boolean`,anyOf:void 0,oneOf:void 0}});if(n||r)return rr({...e,inputType:r&&!n?`number`:`text`})}return Fn(e)}if(t.enum){let i=t.enum;if(i.length<=5&&!(t.nullable&&t.enumIncludesNull)){let e=n===void 0?t.default:n;return X({label:f,help:m,defaultDescription:Z(t,n),tags:h,showLabel:l,control:Sn({options:i,resolvedValue:e,disabled:s,ariaLabel:f,onSelect:e=>c(r,e)})})}return ar({...e,options:i})}if(u===`object`)return An(e,cr);if(u===`array`)return jn(e,cr);if(u===`boolean`){if(!e.isRequired&&d(r,i)?.placeholder)return ar({...e,options:[!0,!1]});let a=typeof n==`boolean`?n:typeof t.default==`boolean`&&t.default,o=e=>c(r,e);if(!l)return X({label:f,help:m,tags:h,showLabel:l,control:oe({checked:a,disabled:s,ariaLabel:f,onChange:o})});let u=m||h.length>0||t.default!==void 0?S`
            ${m??T} ${m&&t.default!==void 0?S`<br />`:T}
            ${Z(t,n)}${yn(h)}
          `:void 0;return de({title:f,description:u,checked:a,disabled:s,onChange:o})}return u===`number`||u===`integer`?ir(e):u===`string`?rr({...e,inputType:`text`}):un(t)?Fn(e):X({label:f,tags:[],showLabel:!0,control:T,error:k(`configForm.unsupportedType`,{type:String(u)})})}function lr(){return(lr=e((()=>{x(),D(),Xt(),Pn(),In(),sr(),Dn(),ye(),H(),fe()})))()}function ur(e){let t=xe({schema:e.schema,path:e.path.map(String),hints:e.hints});return S`
    <div class="config-tier-groups">
      ${t.common||e.commonPrelude?S`<div class="settings-group">
              ${e.commonPrelude??T}${t.common?e.renderTier(t.common):T}
            </div>`:T}
      ${t.advanced&&t.advancedLeafCount>0?S`<details
              class="config-advanced-disclosure"
              ?open=${e.revealAdvanced}
              @toggle=${t=>{let n=t.currentTarget;n instanceof HTMLDetailsElement&&n.open!==e.revealAdvanced&&(n.open?e.onShowAdvanced():e.onHideAdvanced?e.onHideAdvanced():n.open=!0)}}
            >
              <summary class="settings-section__heading config-advanced-disclosure__summary">
                ${k(`configForm.advancedSettings`)}
              </summary>
              ${e.revealAdvanced?S`<div class="settings-group">${e.renderTier(t.advanced)}</div>`:T}
            </details>`:T}
    </div>
  `}function dr(e){let t=ve[e.key];return me({key:e.key,schema:e.schema,value:e.sectionValue,hints:e.uiHints,query:e.query,label:t?.label,description:t?.description})}function fr(e){if(!e.schema)return S` <div class="muted">${k(`configForm.schemaUnavailable`)}</div> `;let t=e.schema,n=e.value??{};if(p(t)!==`object`||!t.properties)return S` <div class="callout danger">${k(`configForm.unsupportedSchema`)}</div> `;let r=new Set(e.unsupportedPaths??[]),i=t.properties,a=e.searchQuery??``,o=he(a),s=e.activeSection,c=e.activeSubsection??null,l=Object.entries(i).toSorted((t,n)=>{let r=d([t[0]],e.uiHints)?.order??50,i=d([n[0]],e.uiHints)?.order??50;return r===i?t[0].localeCompare(n[0]):r-i}).filter(([t,r])=>!(s&&t!==s||a&&!dr({key:t,schema:r,sectionValue:n[t],uiHints:e.uiHints,query:a}))),u=null;if(s&&c&&l.length===1){let e=l[0]?.[1];e&&p(e)===`object`&&e.properties&&e.properties[c]&&(u={sectionKey:s,subsectionKey:c,schema:e.properties[c]})}if(l.length===0)return e.embedded&&!a?T:ce(le(a?k(`configForm.noSettingsMatch`,{query:a}):k(`configForm.noSettingsInSection`)));let m=t=>{let n=d(t.path.slice(0,1),e.uiHints),i=e.showSectionDocs===!1?void 0:n?.docsUrl,s=`settings-section-help-${t.id}`,c=e.showAdvanced===!0||e.forceAdvancedSection===t.path[0]||!!a;return S`
      <section class="settings-section" id=${t.id}>
        <div class="settings-section__header">
          <h2 class="settings-section__heading">${t.label}</h2>
          ${e.sectionActions||i?S`<div class="settings-section__actions">
                  ${e.sectionActions??T}
                  ${i?S`
                          <span class="settings-section__docs">
                            ${ae({id:s,label:k(`configForm.sectionHelp`,{section:t.label}),tooltip:k(`configForm.sectionHelp`,{section:t.label}),icon:`question`,popoverId:`settings-section-help-popover-${t.id}`})}
                            <wa-popover
                              id=${`settings-section-help-popover-${t.id}`}
                              class="settings-section__help-popover"
                              for=${s}
                              placement="bottom-end"
                            >
                              <div class="settings-section__help-panel">
                                ${t.description?S`<p>${t.description}</p>`:T}
                                ${se(i)}
                              </div>
                            </wa-popover>
                          </span>
                        `:T}
                </div>`:T}
        </div>
        ${t.description?S`<p class="settings-section__desc">${t.description}</p>`:T}
        ${ur({schema:t.node,path:t.path,hints:e.uiHints,revealAdvanced:c,onShowAdvanced:e.onShowAdvanced,onHideAdvanced:e.showAdvanced===!0&&e.forceAdvancedSection!==t.path[0]&&!a?e.onHideAdvanced:void 0,renderTier:n=>cr({schema:n,value:t.nodeValue,path:t.path,hints:e.uiHints,rawAvailable:e.rawAvailable??!0,unsupported:r,disabled:e.disabled??!1,showLabel:!1,showHeaderMeta:!0,searchCriteria:o,revealSensitive:e.revealSensitive??!1,isSensitivePathRevealed:e.isSensitivePathRevealed,onToggleSensitivePath:e.onToggleSensitivePath,onPatch:e.onPatch,onRemove:e.onRemove}),commonPrelude:e.sectionPrelude})}
      </section>
    `};return ce(u?(()=>{let{sectionKey:t,subsectionKey:r,schema:i}=u,a=d([t,r],e.uiHints),o=a?.label??i.title??f(r),s=a?.help??i.description??``,c=n[t],l=c&&typeof c==`object`?c[r]:void 0;return m({id:`config-section-${t}-${r}`,label:o,description:s,node:i,nodeValue:l,path:[t,r]})})():l.map(([e,t])=>{let r=ve[e]??{label:e.charAt(0).toUpperCase()+e.slice(1),description:t.description??``};return m({id:`config-section-${e}`,label:r.label,description:r.description,node:t,nodeValue:n[e],path:[e]})}))}function pr(){return(pr=e((()=>{x(),D(),pe(),_e(),lr(),ye(),H(),Ee(),fe()})))()}function mr(e){return Object.keys(e??{}).filter(e=>!Mr.has(e)).length===0}function hr(e){let t=e.filter(e=>e!=null),n=t.length!==e.length;return{enumValues:gr(t),nullable:n}}function gr(e){let t=[];for(let n of e)t.some(e=>Object.is(e,n))||t.push(n);return t}function _r(e,t=new Set){if(t.has(e))return new Set;t.add(e);let n=new Set,r=Array.isArray(e.type)?e.type:e.type?[e.type]:[];for(let e of r)e!==`null`&&n.add(e);n.size===0&&(e.properties||e.additionalProperties)&&n.add(`object`);for(let r of e.allOf??[])for(let e of _r(r,t))n.add(e);return t.delete(e),n}function vr(e){if(e.size===1)return e.values().next().value;if(e.size>1&&[...e].every(e=>e===`number`||e===`integer`))return e.has(`integer`)?`integer`:`number`}function yr(e){return e.size>1&&vr(e)===void 0}function br(e){return vr(_r(e))}function xr(e){return!!(br(e)||e.items||e.enum||e.anyOf||e.oneOf||e.allOf)}function Sr(e){return wr(e,Nr)}function Cr(e){return wr(e,Pr)}function wr(e,t){return Object.keys(e).every(n=>t.has(n)||n===`propertyNames`&&typeof e.propertyNames==`object`&&e.propertyNames!==null&&!Array.isArray(e.propertyNames)&&l(e.propertyNames)&&$({type:`string`,...e.propertyNames},[]).unsupportedPaths.length===0)}function Tr(e,t=new Set){if(t.has(e))return!1;t.add(e);let n=Array.isArray(e.type)?e.type:e.type?[e.type]:[],r=e.nullable===!0||n.length===0||n.includes(`null`);return e.const!==void 0&&(r&&=e.const===null),e.enum&&(r&&=e.enum.some(e=>e===null)),e.allOf&&(r&&=e.allOf.every(e=>Tr(e,t))),e.anyOf&&(r&&=e.anyOf.some(e=>Tr(e,t))),e.oneOf&&(r&&=e.oneOf.filter(e=>Tr(e,t)).length===1),t.delete(e),r}function Er(e){let t=z(e);if(t.length<=1)return!1;let n=new Set(t.flatMap(e=>Object.keys(e.properties??{})));return t.some(e=>{let t=e.additionalProperties;return!!t&&typeof t==`object`&&Object.keys(t).length>0&&[...n].some(t=>!Object.hasOwn(e.properties??{},t))})}function Dr(e){return!e||typeof e!=`object`?{schema:null,unsupportedPaths:[`<root>`]}:$(e,[])}function $(e,t,n=!1,r,i){let a=new Set,s={...e},c=o(t)||`<root>`;if(Cr(e)||a.add(c),e.anyOf||e.oneOf){let n=jr(e,t);return n?{schema:n.schema,unsupportedPaths:Array.from(new Set([...a,...n.unsupportedPaths]))}:{schema:e,unsupportedPaths:[c]}}let l=Array.isArray(e.type)?e.type.filter(e=>e!==`null`):[],u=_r(e),d=n&&!!r&&e.type===void 0&&u.size===0;d&&r&&u.add(r),n&&r&&u.size>0&&yr(new Set([...u,r]))&&a.add(c),(new Set(l).size>1||yr(u))&&a.add(c);let f=vr(u),p=Tr(e)&&(i===void 0||i);if(e.allOf){let n=[];for(let r of e.allOf){if(!r||typeof r!=`object`){a.add(c);continue}if(!xr(r)){n.push(r),Sr(r)||a.add(c);continue}let e=$(r,t,!0,f,p);n.push(e.schema??r);for(let t of e.unsupportedPaths)a.add(t)}s.allOf=n}s.type=f??e.type,s.nullable=p;let m=e.properties!==void 0||e.additionalProperties!==void 0,h=e.items!==void 0||e.additionalItems!==void 0;if(s.enum){let{enumValues:e,nullable:t}=hr(s.enum);s.enum=e,s.enumIncludesNull=t&&p,e.length===0&&a.add(c)}if(e.allOf&&p&&!s.enumIncludesNull&&a.add(c),f===`object`&&(!d||m)){let r=e.properties??{},i=new Set(Ot(e)),l=kt(e);[...Dt(e)].some(e=>!i.has(e))&&!l&&a.add(c),Er(e)&&a.add(c);let u={};for(let[e,i]of Object.entries(r)){if(n&&!xr(i)){u[e]=i,Sr(i)||a.add(o([...t,e])||`<root>`);continue}let r=$(i,[...t,e],n);r.schema&&(u[e]=r.schema);for(let e of r.unsupportedPaths)a.add(e)}if(s.properties=u,e.allOf)for(let n of Ot(e)){let r=Nt(e,n);if(!r)continue;let i=$(r,[...t,n]);for(let e of i.unsupportedPaths)a.add(e)}if(e.additionalProperties===!0)s.additionalProperties={};else if(e.additionalProperties===!1)s.additionalProperties=!1;else if(e.additionalProperties&&typeof e.additionalProperties==`object`&&!mr(e.additionalProperties)){let r=$(e.additionalProperties,[...t,`*`],n);s.additionalProperties=r.schema??e.additionalProperties;for(let e of r.unsupportedPaths)a.add(e)}}else if(f===`array`&&(!d||h)){if(Array.isArray(e.items)){let r=[];for(let i=0;i<e.items.length;i+=1){let o=e.items[i];if(!o){a.add(c);continue}if(n&&!xr(o)){r.push(o),Sr(o)||a.add(c);continue}let s=$(o,[...t,i],n);r.push(s.schema??o);for(let e of s.unsupportedPaths)a.add(e)}if(s.items=r,e.additionalItems&&typeof e.additionalItems==`object`){if(n&&!xr(e.additionalItems))s.additionalItems=e.additionalItems,Sr(e.additionalItems)||a.add(c);else{let r=$(e.additionalItems,[...t,`*`],n);s.additionalItems=r.schema??e.additionalItems;for(let e of r.unsupportedPaths)a.add(e)}}else s.additionalItems=e.additionalItems}else if(!e.items)a.add(c);else if(n&&!xr(e.items))s.items=e.items,Sr(e.items)||a.add(c);else{let r=$(e.items,[...t,`*`],n);s.items=r.schema??e.items;for(let e of r.unsupportedPaths)a.add(e)}if(e.allOf)for(let n of ge(e)){let r=De(e,n);if(!r)continue;let i=$(r,[...t,n]);for(let e of i.unsupportedPaths)a.add(e)}}else!(d&&(f===`object`||f===`array`))&&f!==`string`&&f!==`number`&&f!==`integer`&&f!==`boolean`&&!s.enum&&!(n&&e.allOf)&&a.add(c);return{schema:s,unsupportedPaths:Array.from(a)}}function Or(e){if(p(e)!==`object`)return!1;let t=e.properties?.source,n=e.properties?.provider,r=e.properties?.id;return!t||!n||!r?!1:typeof t.const==`string`&&p(n)===`string`&&p(r)===`string`}function kr(e){let t=e.oneOf??e.anyOf;return!t||t.length===0?!1:t.every(e=>Or(e))}function Ar(e,t,n,r){let i=n.findIndex(e=>p(e)===`string`);if(i<0)return null;let a=n.filter((e,t)=>t!==i),o=a[0],s=n[i];return a.length!==1||!o||!s||!kr(o)?null:$({...e,...s,nullable:r||s.nullable,anyOf:void 0,oneOf:void 0,allOf:void 0},t)}function jr(e,t){if(e.allOf)return null;let n=e.anyOf??e.oneOf;if(!n)return null;let r=[],i=[],a=!1;for(let e of n){if(!e||typeof e!=`object`)return null;if(Array.isArray(e.enum)){let{enumValues:t,nullable:n}=hr(e.enum);r.push(...t),n&&(a=!0);continue}if(`const`in e){if(e.const==null){a=!0;continue}r.push(e.const);continue}if(p(e)===`null`){a=!0;continue}i.push(e)}a&&=Tr(e);let o=Ar(e,t,i,a);if(o)return o;if(r.length>0&&i.length>0){let t=i.length===1?i[0]:void 0;if(t?.type!==`boolean`||Object.keys(t).length!==1||r.includes(`true`)||r.includes(`false`)||e.anyOf===void 0&&r.some(e=>typeof e==`boolean`))return null;i.pop(),r.unshift(!0,!1)}if(r.length>0&&i.length===0)return{schema:{...e,enum:gr(r),nullable:a,enumIncludesNull:a,anyOf:void 0,oneOf:void 0,allOf:void 0},unsupportedPaths:[]};if(i.length===1){let n=i[0];return n?$({...e,...n,nullable:a||n.nullable,anyOf:void 0,oneOf:void 0,allOf:void 0},t):null}return i.length>0&&r.length===0&&i.every(e=>{let t=p(e);return!!t&&Fr.has(String(t))})?{schema:{...e,nullable:a},unsupportedPaths:[]}:null}var Mr,Nr,Pr,Fr;function Ir(){return(Ir=e((()=>{be(),q(),H(),Mr=new Set([`$id`,`$schema`,`title`,`description`,`default`,`deprecated`,`nullable`,`enumIncludesNull`,`examples`,`readOnly`,`tags`,`writeOnly`,`x-tags`]),Nr=new Set([...Mr,`const`,`required`,`additionalProperties`,`minimum`,`maximum`,`exclusiveMinimum`,`exclusiveMaximum`,`multipleOf`,`minLength`,`maxLength`,`pattern`,`format`,`minItems`,`maxItems`,`uniqueItems`]),Pr=new Set([...Nr,`type`,`properties`,`items`,`additionalItems`,`enum`,`anyOf`,`oneOf`,`allOf`]),Fr=new Set([`string`,`number`,`integer`,`boolean`,`object`,`array`])})))()}function Lr(){return(Lr=e((()=>{pr(),Ir(),lr(),H()})))()}export{fr as a,cr as c,ft as d,H as f,et as h,pr as i,Ln as l,rt as m,Dr as n,ur as o,it as p,Ir as r,lr as s,Lr as t,zn as u};
//# sourceMappingURL=config-form-DfDQdICi.js.map