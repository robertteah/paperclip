const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./markdown-mermaid-DedW5dci.js","./rolldown-runtime-DkW27tQK.js","./control-ui-foundation-DMb6IeIq.js","./control-ui-core-DzidtL-P.js","./lit-runtime-vxhGQLC6.js","./control-ui-core-CaKBexnk.js","./control-ui-core-uEI6aN5p.js","./gateway-runtime-DP4whqrA.js","./control-ui-core-BRgpioGt.css","./control-ui-boot-shared-Cyt1Zyts.js","./control-ui-boot-shared-DW2inEkr.js","./control-ui-boot-shared-nBxCfWV5.js","./control-ui-boot-shared-gfE6fZcA.js","./markdown-runtime-Bn6OdBVq.js","./control-ui-boot-shared-BiKnED0X.js","./control-ui-boot-shared-D2DaCK2F.js","./control-ui-boot-shared-mS3IgGsF.js","./control-ui-boot-shared-CH-OC11d.js","./control-ui-boot-shared-CibIhXHx.css","./theme-color-BwHgSJo3.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$n as t,An as n,Ca as r,Fn as i,Fr as a,In as o,Nn as s,Qt as c,Ta as l,Vn as u,Xt as d,Zn as f,ba as p,bi as m,ia as h,nr as g,wa as _,xi as v}from"./control-ui-foundation-DMb6IeIq.js";import{Bn as ee,Fc as te,Ic as ne,Jc as y,Js as re,Jt as ie,Kc as ae,Wc as oe,Ws as se,Yc as ce,Yo as le,Ys as b,ao as ue,co as de,gc as fe,ic as pe,lc as x,nc as me,on as he,qc as ge,qo as _e,rc as ve,sa as ye,tn as be,to as xe,za as Se,zn as Ce}from"./control-ui-core-DzidtL-P.js";import{$ as we,G as Te,J as Ee,K as S,U as De,X as C,_ as Oe,at as ke,b as Ae,dt as je,g as Me,q as w,r as Ne,st as T,t as Pe,x as Fe}from"./lit-runtime-vxhGQLC6.js";import{X as Ie,cn as Le,fn as E,nt as Re,pn as ze,sn as Be}from"./control-ui-core-CaKBexnk.js";import{Bt as D,Ft as O,Gt as k,It as Ve,Xt as He,Yt as Ue,kt as We}from"./control-ui-core-uEI6aN5p.js";import{Ir as Ge,Vt as A,Xt as Ke,Zt as qe,xt as Je,zr as Ye}from"./control-ui-boot-shared-nBxCfWV5.js";import{a as Xe,r as Ze}from"./gateway-runtime-DP4whqrA.js";import{Bo as Qe,Fo as $e,Go as et,Ho as tt,In as nt,Ko as rt,Lo as it,Nn as at,Pn as ot,Po as st,Qo as ct,Rn as lt,Ro as ut,Sn as dt,Tn as ft,Wo as pt,Xo as mt,Zo as ht,er as gt,is as _t,mn as vt,on as yt,os as bt,sn as xt,tr as St,wn as Ct,yn as wt,zn as Tt,zo as Et}from"./control-ui-boot-shared-Cyt1Zyts.js";import{At as Dt,Mt as Ot,Nt as kt,Ot as At,X as jt,Y as Mt,_t as Nt,c as Pt,dt as Ft,ft as It,gt as Lt,ht as Rt,it as zt,jt as Bt,kt as Vt,l as Ht,lt as Ut,mt as Wt,nt as Gt,pt as Kt,rt as qt,tt as Jt,ut as Yt}from"./control-ui-boot-chat-B1e-zt03.js";import{$o as Xt,Qo as Zt,bs as Qt,cs as $t,ss as en,ys as tn}from"./control-ui-boot-shared-CH-OC11d.js";import{b as nn,x as rn}from"./control-ui-boot-shared-BiKnED0X.js";function an(e){let t=e.get(`content-length`);if(!t||!/^\d+$/u.test(t))return null;let n=Number(t);return Number.isSafeInteger(n)?n:1/0}async function on(e,t){let n=an(e.headers);if(n!==null&&n>t.maxBytes)throw e.body?.cancel().catch(()=>void 0),Error(t.tooLargeMessage);if(!e.body){if(t.missingBodyMessage)throw Error(t.missingBodyMessage);return``}let r=e.body.getReader(),i=new TextDecoder,a=[];try{await Ge({maxBytes:t.maxBytes,skipEmptyChunks:!1,read:()=>r.read(),onChunk:e=>{a.push(i.decode(e,{stream:!0}))},onLimit:()=>{throw r.cancel().catch(()=>void 0),Error(t.tooLargeMessage)}});let e=i.decode();e&&a.push(e)}finally{r.releaseLock()}return a.join(``)}function sn(){return(sn=e((()=>{n()})))()}function cn(e){let t=un.get(e);return t||(t=new ln,un.set(e,t)),t}var ln,un;function dn(){return(dn=e((()=>{ln=class{constructor(){this.region=`page`,this.listeners=new Set}get current(){return this.region}claim(e){if(this.region!==e){this.region=e;for(let e of this.listeners)e()}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}},un=new WeakMap})))()}function fn(e){let t=e.replace(/[\\/]+$/,``);return t.split(/[\\/]/).pop()||t}function pn(e){let t=e.session;if(!t)return{root:null,label:null};if(t.repositoryWorkspaceId)return{root:t.execNode&&t.execCwd?.trim()||null,label:t.repository?fn(t.repository.url).replace(/\.git$/u,``):null};let n=t.execNode?t.execCwd?.trim()||null:t.spawnedWorkspaceDir?.trim()||t.spawnedCwd?.trim()||e.worktreePath?.trim()||(t.worktree?``:e.agentWorkspace?.trim())||null;return{root:n,label:t.worktree?.repoRoot?fn(t.worktree.repoRoot):n?fn(n):null}}function mn(){return(mn=e((()=>{})))()}function hn(e){let t=0,n=0;for(let r of e)r.kind===`add`?t+=1:r.kind===`del`&&(n+=1);return{added:t,removed:n}}function gn(e){if(!e.trim())return null;let t=[],n=!1;for(let r of e.split(`
`)){if(!r)continue;if(/^\s*\.\.\.\(truncated\)\.\.\.\s*$/.test(r)){n=!0,t.push({kind:`skip`,text:``});continue}if(/^\s*\.\.\.\s*$/.test(r)){t.push({kind:`skip`,text:``});continue}let e=r.match(/^([+\- ])\s*(\d+) ?(.*)$/s);if(!e)return null;let[,i,a,o]=e;if(!i||!a)return null;if(t.push({kind:i===`+`?`add`:i===`-`?`del`:`ctx`,lineNo:Number.parseInt(a,10),text:o??``}),t.length>400){t.push({kind:`skip`,text:``}),n=!0;break}}return t.some(e=>e.kind===`add`||e.kind===`del`)?n?{kind:`truncated`,lines:t}:{kind:`complete`,lines:t,stat:hn(t)}:null}function _n(e){let t=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(t===``)return[];let n=t.split(`
`);return n.length>1&&n[n.length-1]===``&&n.pop(),n}function vn(e,t,n){if(!n&&e.length<=400&&!t)return e;if(!e.some(e=>e.kind===`add`||e.kind===`del`))return n&&!t?[]:t?[{kind:`skip`,text:``}]:[...e.slice(0,400),{kind:`skip`,text:``}];let r=new Uint8Array(e.length);for(let t=0;t<e.length;t++){let n=e[t];if(!n||n.kind!==`add`&&n.kind!==`del`)continue;let i=Math.max(0,t-3),a=Math.min(e.length,t+4);r.fill(1,i,a)}let i=[],a=!1,o=t;for(let t=0;t<e.length;t++){if(r[t]===0){a=!0,o=!0;continue}if(a&&i.at(-1)?.kind!==`skip`&&i.push({kind:`skip`,text:``}),a=!1,i.length>=400){o=!0;break}let n=e[t];n&&i.push(n)}return o&&i.at(-1)?.kind!==`skip`&&i.push({kind:`skip`,text:``}),i}function yn(e,t,n){let r=_n(e),i=_n(t),a=r.length>j||i.length>j,o=r.length===i.length&&r.every((e,t)=>e===i[t]),s=a&&!o,c=r.slice(0,j),l=i.slice(0,j),u=c.length,d=l.length,f=Array.from({length:u+1},()=>Array.from({length:d+1},()=>0));for(let e=u-1;e>=0;e--){let t=f[e],n=f[e+1];if(!(!t||!n))for(let r=d-1;r>=0;r--)t[r]=c[e]===l[r]?(n[r+1]??0)+1:Math.max(n[r]??0,t[r+1]??0)}let p=[],m=0,h=0;for(;m<u&&h<d;){let e=c[m],t=l[h];if(e===void 0||t===void 0)break;e===t?(p.push({kind:`ctx`,text:e}),m++,h++):(f[m+1]?.[h]??0)>=(f[m]?.[h+1]??0)?(p.push({kind:`del`,text:e}),m++):(p.push({kind:`add`,text:t}),h++)}for(;m<u;){let e=c[m];e!==void 0&&p.push({kind:`del`,text:e}),m++}for(;h<d;){let e=l[h];e!==void 0&&p.push({kind:`add`,text:e}),h++}let g=vn(p,s,n?.compactUnchanged===!0);return s?{kind:`truncated`,lines:g}:{kind:`complete`,lines:g,stat:hn(p)}}function bn(e,t=80){let n=_n(e),r=[];for(let[e,i]of n.slice(0,t).entries())r.push({kind:`add`,lineNo:e+1,text:i});return n.length>t&&r.push({kind:`skip`,text:``}),r}function xn(e){return _n(e).length}function Sn(e,t){let n=t?.maxLines??400,r=[],i=t?.truncated===!0||e.some(e=>e.kind===`truncated`),a=i;for(let t of e){if(t.lines.length===0)continue;if(r.length>0){if(r.length>=n){a=!0;break}r.push({kind:`skip`,text:``})}let e=n-r.length;if(t.lines.length>e){r.push(...t.lines.slice(0,e)),a=!0;break}r.push(...t.lines)}return a&&r.at(-1)?.kind!==`skip`&&r.push({kind:`skip`,text:``}),i?{kind:`truncated`,lines:r}:{kind:`complete`,lines:r,stat:e.reduce((e,t)=>({added:e.added+(t.kind===`complete`?t.stat.added:0),removed:e.removed+(t.kind===`complete`?t.stat.removed:0)}),{added:0,removed:0})}}var j;function Cn(){return(Cn=e((()=>{j=600})))()}function wn(e){if(e===``)return[];let t=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`);return t.length>1&&t.at(-1)===``&&t.pop(),t}function Tn(e,t,n){let r=n.trim(),i={operation:t,sourcePath:r,path:r,lines:[],stat:{added:0,removed:0}};return e.sections.push(i),i}function En(e,t,n){n.kind===`add`?t.stat.added+=1:n.kind===`del`&&(t.stat.removed+=1),e.storedRows<400?(t.lines.push(n),e.storedRows+=1):e.truncated=!0}function Dn(e,t){t.lines.length!==0&&t.lines.at(-1)?.kind!==`skip`&&En(e,t,{kind:`skip`,text:``})}function On(e){let t=e.match(/^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);return t?{oldLine:Number.parseInt(t[1]??``,10),oldLeft:t[2]===void 0?1:Number.parseInt(t[2],10),newLine:Number.parseInt(t[3]??``,10),newLeft:t[4]===void 0?1:Number.parseInt(t[4],10)}:{}}function kn(e,t,n,r){let i,a;n.startsWith(`+`)?(i=`add`,a=r.newLine,r.newLine!==void 0&&(r.newLine+=1,r.newLeft=Math.max(0,(r.newLeft??0)-1))):n.startsWith(`-`)?(i=`del`,a=r.oldLine,r.oldLine!==void 0&&(r.oldLine+=1,r.oldLeft=Math.max(0,(r.oldLeft??0)-1))):(i=`ctx`,a=r.newLine,r.oldLine!==void 0&&r.newLine!==void 0&&(r.oldLine+=1,r.newLine+=1,r.oldLeft=Math.max(0,(r.oldLeft??0)-1),r.newLeft=Math.max(0,(r.newLeft??0)-1))),En(e,t,{kind:i,...a===void 0?{}:{lineNo:a},text:n===``?``:n.slice(1)})}function An(e){return e.oldLeft!==void 0&&e.oldLeft===0&&e.newLeft===0}function jn(e){return e.operation===`update`&&e.path!==e.sourcePath?`Move ${e.sourcePath} → ${e.path}`:`${e.operation===`add`?`Add`:e.operation===`delete`?`Delete`:`Update`} ${e.path}`}function Mn(e){if(e.sections.length===0)return null;let t=[...new Set(e.sections.map(e=>e.path).filter(Boolean))],n=e.sections.map(({operation:e,path:t,sourcePath:n})=>({operation:e,path:t,...e===`update`&&n!==t?{oldPath:n}:{}})),r=e.sections.reduce((e,t)=>({added:e.added+t.stat.added,removed:e.removed+t.stat.removed}),{added:0,removed:0}),i=[],a=e.truncated,o=e=>{i.length<400?i.push(e):a=!0};for(let[t,r]of e.sections.entries()){e.sections.length>1&&(i.length>0&&i.at(-1)?.kind!==`skip`&&o({kind:`skip`,text:``}),o({kind:`file`,path:r.path,...`oldPath`in n[t]?{oldPath:r.sourcePath}:{},text:jn(r)}));for(let e of r.lines)o(e)}a&&i.at(-1)?.kind!==`skip`&&i.push({kind:`skip`,text:``});let s=e.sections.length===1?e.sections.at(0):void 0,c=s&&s.operation===`update`&&s.sourcePath!==s.path?{from:s.sourcePath,to:s.path}:void 0;return{paths:t,fileOperations:n,lines:i,stat:r,...c?{move:c}:{}}}function Nn(e){let t={sections:[],storedRows:0,truncated:!1},n=null,r=`outside`,i=null;for(let a of wn(e)){let e=r===`update`?a.trimEnd():a.trim(),o=e.match(/^\*\*\* (Update|Add|Delete) File: (.+)$/);if(o){let e=o[1],a=o[2];if(!e||!a)continue;r=e.toLowerCase(),n=Tn(t,r,a),i=null;continue}let s=r===`update`?e.match(/^\*\*\* Move to: (.+)$/):null;if(s&&n){n.path=s[1]?.trim()??n.path;continue}if(!(e===`*** Begin Patch`||e===`*** End Patch`||e===`*** End of File`||e.startsWith(`*** Environment ID:`))&&n){if(r===`update`&&a.startsWith(`@@`)){Dn(t,n),i=On(a);continue}r===`add`&&a.startsWith(`+`)?En(t,n,{kind:`add`,lineNo:n.stat.added+1,text:a.slice(1)}):r===`update`&&(a===``||a.startsWith(`+`)||a.startsWith(`-`)||a.startsWith(` `))&&(kn(t,n,a,i??{}),i&&An(i)&&(i=null))}}return Mn(t)}function Pn(e){return(e.split(`	`,1)[0]?.trim()??``).replace(/^[ab]\//,``)}function Fn(e,t,n,r,i){let a=Pn(n.slice(4)),o=Pn(r.slice(4)),s=a===`/dev/null`?`add`:o===`/dev/null`?`delete`:`update`,c=o===`/dev/null`?a:o,l=i&&t?t:Tn(e,s,c);return l.operation=s,l.sourcePath=a||l.sourcePath,l.path=c||l.path,l}function In(e){let t={sections:[],storedRows:0,truncated:!1},n=wn(e),r=null,i=null,a=!1;for(let e=0;e<n.length;e++){let o=n[e];if(o===void 0)continue;let s=o.match(/^diff --git a\/(.+) b\/(.+)$/);if(s){let e=s[1],n=s[2];if(!e||!n)continue;r=Tn(t,`update`,n),r.sourcePath=e,i=null,a=!0;continue}let c=n[e+1];if(!i&&o.startsWith(`--- `)&&c?.startsWith(`+++ `)){r=Fn(t,r,o,c,a),a=!1,e+=1;continue}if(o.startsWith(`@@`)){r&&Dn(t,r),i=On(o),a=!1;continue}/^index |^new file mode |^deleted file mode |^similarity index /.test(o)||r&&i&&(o.startsWith(`+`)||o.startsWith(`-`)||o.startsWith(` `))&&(kn(t,r,o,i),An(i)&&(i=null))}return Mn(t)}function Ln(e){let t=typeof e==`string`?e:f(e)?.type;return t===`add`||t===`delete`?t:`update`}function Rn(e){let t=f(e),n=t?.added,r=t?.removed;return typeof n==`number`&&typeof r==`number`&&n>=0&&r>=0?{added:Math.trunc(n),removed:Math.trunc(r)}:null}function zn(e,t,n){let r=null;for(let i of wn(n))i.startsWith(`@@`)?(Dn(e,t),r=On(i)):r&&(i.startsWith(`+`)||i.startsWith(`-`)||i.startsWith(` `))&&(kn(e,t,i,r),An(r)&&(r=null))}function Bn(e){let t={sections:[],storedRows:0,truncated:!1};for(let n of e){let e=f(n),r=_(e?.path)?.trim();if(!e||!r)continue;let i=Ln(e.kind),a=Tn(t,i,r),o=_(f(e.kind)?.move_path??f(e.kind)?.movePath);if(o&&(a.path=o.trim()),typeof e.diff==`string`){if(i===`update`)zn(t,a,e.diff);else{let n=i===`add`?`add`:`del`;for(let[r,i]of wn(e.diff).entries())En(t,a,{kind:n,lineNo:r+1,text:i})}}let s=Rn(e.stat);s&&(a.stat=s),t.truncated||=e.diffTruncated===!0}return Mn(t)}function Vn(e){let t=f(e);if(!t)return null;if(Array.isArray(t.changes)){let e=Bn(t.changes);if(e)return e}let n=_(t.patch)??_(t.input)??_(t.diff);return n?/(?:^|\n)\s*\*\*\* (?:Begin Patch|Update File:|Add File:|Delete File:)/.test(n)?Nn(n):In(n):null}function Hn(){return(Hn=e((()=>{Cn()})))()}function Un(e){if(e)return _(e.path)??_(e.file_path)??_(e.filePath)??_(e.file)??_(e.filepath)??_(e.filename)??_(e.notebook_path)}function M(e){let t=e.replace(/\\/g,`/`).replace(/\/+$/,``),n=t.lastIndexOf(`/`);return n<=0?{base:t||e}:{base:t.slice(n+1),dir:t.slice(0,n)}}function Wn(e){let t=[],n=0,r=!1,i=(e,i)=>{if(typeof e==`string`&&typeof i==`string`){let a=e.length+i.length;if(n+a>ur){r=!0;return}n+=a,t.push({oldText:e,newText:i})}};if(Array.isArray(e.edits))for(let t=0;t<e.edits.length;t++){if(t>=lr){r=!0;break}let n=e.edits[t],a=f(n);if(a&&(i(a.oldText??a.old_string??a.oldString??a.old_str,a.newText??a.new_string??a.newString??a.new_str),r))break}else i(e.oldText??e.old_string??e.oldString??e.old_str,e.newText??e.new_string??e.newString??e.new_str);return{pairs:t,truncated:r}}function Gn(e){let t=f(e),n=t?_(t.diff):void 0;if(!n)return null;let r=gn(n);return r?{lines:r.lines,...r.kind===`complete`?{stat:r.stat}:{}}:null}function Kn(e){let t=Gn(e.details);if(t)return t;let n=f(e.args);if(!n)return null;let{pairs:r,truncated:i}=Wn(n);if(r.length===0)return i?{lines:[{kind:`skip`,text:``}]}:null;let a=Sn(r.map(e=>yn(e.oldText,e.newText)),{truncated:i});return a.lines.length===0?null:{lines:a.lines,...a.kind===`complete`?{stat:a.stat}:{}}}function qn(e,t){let n=Gn(e.details);if(n)return n;let r=t?_(t.insert_text):void 0;if(!r)return null;let i=yn(``,r).lines;return i.length>0?{lines:i}:null}function Jn(e){let t=Vn(e);if(!t)return null;if(t.paths.length>1)return{kind:`edit`,target:`${t.paths.length} files`,fileOperations:t.fileOperations,diff:t.lines,stat:t.stat};if(t.move){let e=M(t.move.from),n=M(t.move.to),r=e.dir===n.dir?e.dir:void 0;return{kind:`edit`,target:r?`${e.base} → ${n.base}`:`${t.move.from} → ${t.move.to}`,targetDetail:r,fileOperations:t.fileOperations,diff:t.lines,stat:t.stat}}let n=t.paths[0]?M(t.paths[0]):null;return{kind:`edit`,target:n?.base,targetDetail:n?.dir,fileOperations:t.fileOperations,diff:t.lines,stat:t.stat}}function N(e){return e.trim().toLowerCase()}function Yn(e){let t=_(f(e)?.command)?.trim().toLowerCase();switch(t){case`view`:case`str_replace`:case`create`:case`insert`:case`undo_edit`:return t;default:return}}function Xn(e,t){let n=f(t);if(P.has(N(e)))return Vn(n)?.paths??[];let r=Un(n);return r?[r]:[]}function Zn(e,t){if(P.has(N(e)))return Vn(f(t))?.fileOperations}function Qn(e,t){let n=N(e);if(ar.has(n))switch(Yn(t)){case`view`:return`read`;case`str_replace`:case`insert`:case`undo_edit`:return`edit`;case`create`:return`write`;default:return`generic`}if(nr.has(n))return`command`;if(rr.has(n))return`read`;if(ir.has(n)||P.has(n))return`edit`;if(or.has(n))return`write`;if(sr.has(n))return`search`;if(cr.has(n))return`fetch`;let r=f(t);return r&&typeof r.command==`string`&&Object.keys(r).length<=3?`command`:`generic`}function $n(e){let t=f(e.args),n=t??f(e.details),r=N(e.name);if(n){let t=dr.get(n);if(t&&t.details===e.details&&t.name===r)return t.view}let i=tr(e,t);return n&&dr.set(n,{details:e.details,name:r,view:i}),i}function er(e){return e.match(/^\s*(?:\/(?:usr\/)?bin\/)?(?:ba|z|da)?sh\s+-l?c\s+(['"])([\s\S]+)\1\s*$/)?.[2]??e}function tr(e,t){let n=Qn(e.name,e.args),r=N(e.name),i=ar.has(r)?Yn(e.args):void 0;if(n===`command`){let e=t?_(t.command):void 0;return{kind:n,title:nr.has(r)?Nt(t):void 0,command:e&&er(e),code:t?_(t.code):void 0}}if(n===`read`){let e=Un(t);if(!e)return{kind:`generic`};let{base:r,dir:i}=M(e);return{kind:n,target:r,targetDetail:i}}if(n===`edit`){if(P.has(r))return Jn(t)??{kind:`generic`};let a=Un(t);if(!a)return{kind:`generic`};let{base:o,dir:s}=M(a),c=i===`insert`?qn(e,t):i===`undo_edit`?Gn(e.details):Kn(e);return{kind:n,target:o,targetDetail:s,...c?{diff:c.lines,...c.stat?{stat:c.stat}:{}}:{}}}if(n===`write`){let r=Un(t);if(!r)return{kind:`generic`};let{base:a,dir:o}=M(r),s=Gn(e.details);if(s)return{kind:n,target:a,targetDetail:o,diff:s.lines,...s.stat?{stat:s.stat}:{}};let c=f(e.details);if(c?.changed===!1)return{kind:n,target:a,targetDetail:o};let l=t?_(i===`create`?t.file_text:t.content):void 0;return l?{kind:n,target:a,targetDetail:o,diff:bn(l),...c&&c.created!==!0?{}:{stat:{added:xn(l),removed:0}}}:{kind:n,target:a,targetDetail:o}}if(n===`search`){let e=t?_(t.pattern)??_(t.query)??_(t.glob):void 0,r=Un(t);return!e&&!r?{kind:`generic`}:{kind:n,target:e??r,targetDetail:e?r:void 0}}if(n===`fetch`){let e=t?_(t.url):void 0;return e?{kind:n,target:e}:{kind:`generic`}}return{kind:`generic`}}var nr,rr,ir,ar,or,sr,cr,P,lr,ur,dr;function fr(){return(fr=e((()=>{Lt(),Cn(),Hn(),nr=new Set([`bash`,`exec`,`shell`,`run_command`,`run_terminal_cmd`]),rr=new Set([`read`,`read_file`,`readfile`,`notebookread`,`notebook_read`]),ir=new Set([`edit`,`edit_file`,`multiedit`,`multi_edit`,`notebookedit`,`notebook_edit`]),ar=new Set([`str_replace_editor`,`str_replace_based_edit_tool`]),or=new Set([`write`,`write_file`,`create_file`]),sr=new Set([`grep`,`find`,`glob`,`ls`,`list`,`codebase_search`]),cr=new Set([`web_fetch`,`webfetch`,`fetch`]),P=new Set([`apply_patch`,`applypatch`,`patch`]),lr=8,ur=12e4,dr=new WeakMap})))()}function pr(e){return e?Dr[e]??`puzzle`:`puzzle`}function mr(e){return{icon:pr(e?.emoji),title:e?.title,label:e?.label,detailKeys:e?.detailKeys,actions:e?.actions}}function hr(e){if(!e)return e;for(let t of[{re:/^\/Users\/[^/]+(\/|$)/,replacement:`~$1`},{re:/^\/home\/[^/]+(\/|$)/,replacement:`~$1`},{re:/^C:\\Users\\[^\\]+(\\|$)/i,replacement:`~$1`}])if(t.re.test(e))return e.replace(t.re,t.replacement);return e}function gr(e){let t=It(e.name),n=p(t),r=Ar[n],i=r?.icon??kr.icon??`puzzle`,a=r?.title??Ut(t),o=r?.label??a,s=Kt({toolKey:n,args:e.args,meta:e.meta,spec:r,fallbackDetailKeys:kr.detailKeys,detailMode:`first`,toolDetailMode:e.detailMode,detailCoerce:{includeFalsy:!0}}),{verb:c}=s,{detail:l}=s;return l&&=hr(l),{name:t,icon:i,title:a,label:o,verb:c,detail:l}}function _r(e){return Yt(e.detail,{prefixWithWith:!0})}function vr(e){return e===Tr||e.startsWith(`${Tr}/`)||e===wr||e.startsWith(`${wr}/`)}function yr(e){return e.protocol===`http:`||e.protocol===`https:`}function br(e,t=!1){try{let n=new URL(e,`http://localhost`);return n.origin===`http://localhost`?vr(n.pathname)?`${n.pathname}${n.search}${n.hash}`:void 0:!t||!yr(n)?void 0:n.toString()}catch{return}}function xr(e){let t=e?.trim();return!!(t&&br(t,!1))}function Sr(e,t,n=!1){let r=e?.trim();if(!r)return;let i=br(r,n);if(i){if(!t?.trim())return i;try{let e=new URL(t),n=e.pathname.replace(/\/+$/,``);if(!n.startsWith(Er))return i;let r=new URL(i,e.origin);return vr(r.pathname)?(r.protocol=e.protocol,r.username=e.username,r.password=e.password,r.host=e.host,r.pathname=`${n}${r.pathname}`,r.toString()):i}catch{return i}}}function Cr(e,t){if(t===`strict`||t===`scripts`&&e===`strict`)return``;if(t===`scripts`)return`allow-scripts`;switch(e){case`strict`:return``;case`trusted`:return`allow-scripts allow-same-origin`;default:return`allow-scripts`}}var wr,Tr,Er,Dr,Or,kr,Ar;function jr(){return(jr=e((()=>{Wt(),Ft(),wr=`/__openclaw__/a2ui`,Tr=`/__openclaw__/canvas`,Er=`/__openclaw__/cap`,Dr={"🧩":`puzzle`,"🛠️":`wrench`,"🧰":`wrench`,"📖":`fileText`,"✍️":`edit`,"📝":`penLine`,"📎":`paperclip`,"🌐":`globe`,"📺":`monitor`,"🧾":`fileText`,"🔐":`settings`,"💻":`monitor`,"🔌":`plug`,"💬":`messageSquare`},Or=Rt,kr=mr(Or.fallback??{emoji:`🧩`}),Ar=Object.fromEntries(Object.entries(Or.tools??{}).map(([e,t])=>[e,mr(t)]))})))()}function Mr(e,t,n){let r=e.files[t];r.calls+=1;for(let e of n)e.trim()&&r.paths.add(e.trim())}function Nr(e,t){let n=Qn(t.name,t.args),r=Zn(t.name,t.args);if(r)for(let{operation:t,path:n}of r)Mr(e,t===`add`?`write`:t===`delete`?`delete`:`edit`,[n]);else{let r=Xn(t.name,t.args);switch(n){case`command`:e.commands+=1;break;case`read`:Mr(e,`read`,r);break;case`edit`:Mr(e,`edit`,r);break;case`write`:Mr(e,`write`,r);break;case`search`:e.searches+=1;break;case`fetch`:e.fetches+=1;break;default:e.others+=1,e.otherNames.add(gr({name:t.name,args:t.args}).label)}}}function F(e,t,n){return k(e===1?t:n,{count:String(e)})}function Pr(e,t){return t.size>0?t.size:e}function Fr(e){let t={commands:0,files:{read:{calls:0,paths:new Set},edit:{calls:0,paths:new Set},write:{calls:0,paths:new Set},delete:{calls:0,paths:new Set}},searches:0,fetches:0,otherNames:new Set,others:0};for(let n of e)Nr(t,n);let n=[];t.commands>0&&n.push(F(t.commands,`chat.toolCards.group.commandsOne`,`chat.toolCards.group.commandsMany`));for(let[e,r,i]of[[`read`,`readsOne`,`readsMany`],[`edit`,`editsOne`,`editsMany`],[`write`,`writesOne`,`writesMany`],[`delete`,`deletesOne`,`deletesMany`]]){let{calls:a,paths:o}=t.files[e];a>0&&n.push(F(Pr(a,o),`chat.toolCards.group.${r}`,`chat.toolCards.group.${i}`))}if(t.searches>0&&n.push(F(t.searches,`chat.toolCards.group.searchesOne`,`chat.toolCards.group.searchesMany`)),t.fetches>0&&n.push(F(t.fetches,`chat.toolCards.group.fetchesOne`,`chat.toolCards.group.fetchesMany`)),t.others>0){let e=[...t.otherNames].slice(0,2).join(`, `);n.push(t.otherNames.size<=2&&e?k(t.others>t.otherNames.size?`chat.toolCards.group.namedToolRepeated`:`chat.toolCards.group.namedTool`,{names:e,count:String(t.others)}):F(t.others,`chat.toolCards.group.otherOne`,`chat.toolCards.group.otherMany`))}if(n.length===0)return F(e.length,`chat.toolCards.group.emptyOne`,`chat.toolCards.group.emptyMany`);let r=n.join(`, `);return r.charAt(0).toUpperCase()+r.slice(1)}function Ir(){return(Ir=e((()=>{D(),fr(),jr()})))()}function Lr(e){let t=JSON.parse(e),n=Object.create(null);if(t.avatars&&typeof t.avatars==`object`&&!Array.isArray(t.avatars))for(let[e,i]of Object.entries(t.avatars)){let t=r(e),a=r(i);t&&a&&(n[t]=a)}let i=r(t.avatar),a=r(t.agentId);return i&&a&&!Object.hasOwn(n,a)&&(n[a]=i),{avatars:n,legacyAvatar:a?null:i??null}}function Rr(e,t){if(Object.keys(t).length===0){e?.removeItem(Vr);return}e?.setItem(Vr,JSON.stringify({avatars:t}))}function zr(e){let t=r(e?.agentId);if(!t)return{avatar:null};let n=y();try{let e=n?.getItem(Vr);if(!e)return{avatar:null};let{avatars:r,legacyAvatar:i}=Lr(e);return!Object.hasOwn(r,t)&&i&&(r[t]=i,Rr(n,r)),{avatar:Object.hasOwn(r,t)?r[t]??null:null,agentId:t}}catch{return{avatar:null}}}async function Br(e,t){let n=await Ce(e,t);if(!n)return null;let r=ne(n),i=zr({agentId:r.agentId}).avatar;return i?{...r,avatar:i,avatarSource:i,avatarStatus:`data`,avatarReason:null}:r}var Vr;function Hr(){return(Hr=e((()=>{ee(),te(),Vr=`openclaw.control.assistant.v1`})))()}var Ur;function Wr(){return(Wr=e((()=>{Ur=String.raw`function openclawInspectBrowserElement(x, y) {
  const el = document.elementFromPoint(x, y);
  if (!el) return null;
  const rect = el.getBoundingClientRect();
  const label = el.getAttribute("aria-label") || el.getAttribute("alt") || el.getAttribute("title") || "";
  const text = (el.textContent || "").replace(/\s+/g, " ").trim();
  const nameSource = label || text;
  const nameLimit = 120;
  // This serialized page function cannot call imported helpers; back up only when the cap splits a surrogate pair.
  const nameEnd = (nameSource.codePointAt(nameLimit - 1) || 0) > 0xffff ? nameLimit - 1 : nameLimit;
  return {
    tag: el.tagName.toLowerCase(),
    id: el.id || "",
    classes: Array.from(el.classList).slice(0, 6),
    role: el.getAttribute("role") || "",
    name: nameSource.slice(0, nameEnd),
    rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
    focusable: typeof el.tabIndex === "number" && el.tabIndex >= 0,
  };
}`})))()}function Gr(e,t,n=()=>!0){return{async request(r,i){if(!n())throw new DOMException(`Browser request scope ended`,`AbortError`);let a=f(i);return await e.request(r,t?{...a,target:t.target,...t.target===`node`?{node:t.node}:{},query:{...f(a?.query),profile:t.profile}}:i)}}}function I(e,t){return e.request(mi,t)}function L(e){return l(e)??``}function Kr(e){let t=f(e),n=L(t?.targetId);return n?{kind:`remote`,id:L(t?.tabId)||n,targetId:n,title:L(t?.title),url:L(t?.url),...t?.urlUnavailableReason===`navigation_blocked`||t?.urlUnavailableReason===`navigation_check_failed`?{urlUnavailableReason:t.urlUnavailableReason}:{}}:null}async function qr(e){let t=f(await I(e,{method:`GET`,path:`/tabs`})),n=Array.isArray(t?.tabs)?t.tabs.flatMap(e=>Kr(e)??[]):[];return{running:t?.running===!0,tabs:n}}async function Jr(e){await I(e,{method:`POST`,path:`/start`,body:{}})}async function Yr(e,t){return Kr(await I(e,{method:`POST`,path:`/tabs/open`,body:{url:t}}))}async function Xr(e,t){await I(e,{method:`POST`,path:`/tabs/focus`,body:{targetId:t}})}async function Zr(e,t){await I(e,{method:`DELETE`,path:`/tabs/${encodeURIComponent(t)}`})}async function Qr(e,t){let n=f(await I(e,{method:`POST`,path:`/navigate`,body:t}));return{targetId:L(n?.targetId)||t.targetId||``,url:L(n?.url)||t.url}}async function $r(e,t){let n=f(await I(e,{method:`POST`,path:`/screencast`,body:t})),r=L(n?.token),i=L(n?.wsPath);if(!r||!i)throw Error(`browser screencast response is malformed`);return{token:r,wsPath:i,targetId:L(n?.targetId),url:L(n?.url)}}function ei(e){let t=f(e),n=e instanceof E?f(e.details):f(t?.details);return n?.code===`SCREENCAST_UNSUPPORTED`||f(n?.body)?.code===`SCREENCAST_UNSUPPORTED`||f(t?.body)?.code===`SCREENCAST_UNSUPPORTED`}async function ti(e,t){let n=f(await I(e,{method:`POST`,path:`/screenshot`,body:{targetId:t,type:`png`}})),r=L(n?.path);if(!r)throw Error(k(`browser.errors.screenshotPathMissing`));return{path:r,targetId:L(n?.targetId)||t,url:L(n?.url)}}async function ni(e,t){await I(e,{method:`POST`,path:`/act`,body:{kind:`clickCoords`,targetId:t.targetId,x:Math.max(0,Math.round(t.x)),y:Math.max(0,Math.round(t.y)),...t.doubleClick?{doubleClick:!0}:{}}})}async function ri(e,t){await I(e,{method:`POST`,path:`/act`,body:{kind:`press`,targetId:t.targetId,key:t.key}})}async function ii(e,t){await I(e,{method:`POST`,path:`/act`,body:{kind:`resize`,targetId:t.targetId,width:Math.round(t.width),height:Math.round(t.height)}})}async function ai(e,t){return f(await I(e,{method:`POST`,path:`/act`,body:{kind:`evaluate`,targetId:t.targetId,fn:t.fn}}))?.result??null}function oi(e){return e instanceof E&&f(e.details)?.reason===`navigation_blocked`}function si(e){if(!(e instanceof Error))return!1;let t=e instanceof E?f(e.details):null,n=t?.code;return n===void 0&&t?.unrecognizedCode!==!0?e.message.includes(`evaluateEnabled=false`):n===`ACT_EVALUATE_DISABLED`}async function ci(e,t){let n=Math.round(t.deltaX),r=Math.round(t.deltaY);await ai(e,{targetId:t.targetId,fn:`() => { window.scrollBy(${n}, ${r}); return true; }`})}async function li(e,t){await ai(e,{targetId:t.targetId,fn:`() => { history.go(${t.delta}); return true; }`})}async function ui(e,t){let n=f(await ai(e,{targetId:t,fn:`() => ({ cssWidth: window.innerWidth, cssHeight: window.innerHeight, title: document.title, url: location.href })`})),r=o(n?.cssWidth),i=o(n?.cssHeight);return!r||!i||r<=0||i<=0?null:{cssWidth:r,cssHeight:i,title:L(n?.title),url:L(n?.url)}}async function di(e,t){let n=Math.max(0,Math.round(t.x)),r=Math.max(0,Math.round(t.y));return fi(f(await ai(e,{targetId:t.targetId,fn:`() => { ${Ur}\nreturn openclawInspectBrowserElement(${n}, ${r}); }`})))}function fi(e){let t=f(e);if(!t)return null;let n=f(t.rect);return{tag:L(t.tag),id:L(t.id),classes:Array.isArray(t.classes)?t.classes.filter(e=>typeof e==`string`):[],role:L(t.role),name:L(t.name),rect:{x:o(n?.x)??0,y:o(n?.y)??0,width:o(n?.width)??0,height:o(n?.height)??0},focusable:t.focusable===!0}}async function pi(e){let t=new Headers({Accept:`image/*`});e.authToken&&t.set(`Authorization`,`Bearer ${e.authToken}`);let n=new AbortController,r=setTimeout(()=>n.abort(new DOMException(k(`browser.errors.screenshotFetchTimedOut`),`TimeoutError`)),hi),i;try{let r=await fetch(yt(e.path,e.resourceBasePath),{method:`GET`,headers:t,credentials:`same-origin`,signal:n.signal});if(!r.ok)throw r.body?.cancel().catch(()=>void 0),Error(k(`browser.errors.screenshotFetchFailed`,{status:String(r.status)}));i=await r.blob()}finally{clearTimeout(r)}return await new Promise((e,t)=>{let n=new FileReader;n.addEventListener(`load`,()=>{typeof n.result==`string`?e(n.result):t(Error(k(`browser.errors.screenshotReadFailed`)))}),n.addEventListener(`error`,()=>t(n.error??Error(k(`browser.errors.screenshotReadFailed`)))),n.readAsDataURL(i)})}var mi,hi;function gi(){return(gi=e((()=>{u(),ze(),xt(),D(),Wr(),mi=`browser.request`,hi=3e4})))()}function _i(e){return e.callId??e.messageId??e.previewRevision}function vi(e,t){let n=new Map;for(let r of[e,t])for(let e of r)if(g(e))for(let t of vt(e)){let e=_i(t);if(t.preview?.kind===`browser-tab`&&e&&dt(t,!1)===`succeeded`){let r=Ct(t.preview);n.delete(r),n.set(r,{tab:t.preview,revision:e})}}return n}function yi(e){let t=Ct(e.tab),n=bi.get(e.client);n||(n={tabs:new Map,images:new Map},bi.set(e.client,n));let{tabs:r,images:i}=n,a=r.get(t);if(a||(a={revisions:new Set},r.set(t,a)),a.revisions.has(e.revision))return a.pending??Promise.resolve(i.get(t));a.revisions.add(e.revision);let o=(a.pending??Promise.resolve()).then(async()=>{try{let n=await ti(Gr(e.client,e.tab),e.tab.targetId),r=await pi({resourceBasePath:e.resourceBasePath,authToken:e.authToken,path:n.path});if(i.delete(t),i.set(t,r),i.size>xi){let e=i.keys().next().value;e!==void 0&&i.delete(e)}return r}catch{i.delete(t);return}finally{a.pending===o&&(a.pending=void 0)}});return a.pending=o,o}var bi,xi;function Si(){return(Si=e((()=>{gi(),ft(),wt(),bi=new WeakMap,xi=32})))()}function Ci(e,t){e instanceof zt&&e.updateComplete.then(()=>{let n=e.shadowRoot?.querySelector(`[role="tablist"]`);e.isConnected&&n instanceof HTMLElement&&n.setAttribute(`aria-label`,t)})}function wi(){return(wi=e((()=>{qt(),Gt(),Jt()})))()}function Ti(e,t){let n=new URL(e||t,t);if(n.protocol===`ws:`?n.protocol=`http:`:n.protocol===`wss:`&&(n.protocol=`https:`),n.protocol!==`http:`&&n.protocol!==`https:`)throw Error(`Gateway URL is invalid`);return n.origin}function Ei(e,t,n,r,i,a=`Sandbox host URL is invalid`){if(!Number.isInteger(t)||t<1||t>65535)throw Error(a);let o;try{o=Ti(r,i)}catch{throw Error(a)}let s=n?new URL(n):new URL(o);if(n){if(s.origin!==n.replace(/\/$/u,``)||s.username!==``||s.password!==``)throw Error(a)}else s.port=String(t);s.pathname=`/`,s.search=``,s.hash=``;let c=new URL(e,s);if(s.protocol!==`http:`&&s.protocol!==`https:`||s.origin===new URL(i).origin||s.origin===o||c.origin!==s.origin||c.pathname!==`/mcp-app-sandbox`)throw Error(a);return c.href}function Di(){return(Di=e((()=>{})))()}function Oi(e){if(typeof e!=`string`)return null;let t=e.trim(),n=t.startsWith(`/`)||t.startsWith(`!`);return!t||t.length>Ii||n?null:t}function ki(e,t){let n=t-Li,r=(R.get(e)??[]).filter(e=>e>n);if(!R.has(e)&&R.size>=zi){let e=R.keys().next().value;e!==void 0&&R.delete(e)}return r.length>=Ri?(R.set(e,r),!1):(r.push(t),R.set(e,r),!0)}function Ai(e){if(!e.isConnected||!(typeof e.checkVisibility==`function`?e.checkVisibility():e.getClientRects().length>0))return!1;let t=e.ownerDocument.activeElement;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t===e}function ji(e,t,n,r){let i=Oi(t);return!i||!Ai(e)||!ki(n,Date.now())||r&&!r(i)?!1:(e.dispatchEvent(new CustomEvent(Pi,{bubbles:!0,composed:!0,detail:{text:i}})),!0)}function Mi(e,t=!1,n=!1,r=!1){return{openLinks:{},serverTools:{},sandbox:{csp:e??{}},...r?{serverResources:{}}:{},...t?{message:{text:{}}}:{},...n?{updateModelContext:{text:{}}}:{}}}function Ni(e,t,n,r,i){return Ei(e,t,n,r,i,k(`mcpApp.errors.invalidSandboxUrl`))}var Pi,Fi,Ii,Li,Ri,zi,R;function Bi(){return(Bi=e((()=>{D(),Pi=`openclaw-widget-prompt`,Fi=`openclaw-mcp-app-view-expired`,Ii=4e3,Li=6e4,Ri=10,zi=100,R=new Map})))()}var Vi;function Hi(){return(Hi=e((()=>{le(),Vi=class{constructor(){this.entries=new Map}clear(){this.entries.clear()}prune(e){let t=new Set(e.filter(e=>e.contentKind===`mcp-app`).map(e=>this.key(e)));for(let e of this.entries.keys())t.has(e)||this.entries.delete(e)}async resolve(e,t,n){let r=this.key(e);n&&this.entries.delete(r);let i=this.entries.get(r);if(i)return await i;let a=t().then(e=>({status:`ready`,...e})).catch(e=>({status:`stale`,error:_e(e)}));this.entries.set(r,a);let o=await a;return this.entries.get(r)===a&&this.entries.set(r,o),o}key(e){return`${e.name}\0${e.revision}\0${e.instanceId??``}\0${e.grantState}`}}})))()}function Ui(e){return{sessionKey:e,revision:0,tabs:[],widgets:[]}}function Wi(e){let t=e?.trim()??``;return t?Ye(t,80):void 0}function Gi(){return(Gi=e((()=>{})))()}var z,Ki;function qi(){return(qi=e((()=>{z=class{constructor(e){this.value=e,this.listeners=new Set}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}set(e){this.value=e;for(let e of this.listeners)e()}},Ki=class{constructor(){this.listeners=new Set}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(e){for(let t of this.listeners)t(e)}}})))()}function Ji(e){let t=14695981039346656037n;for(let n of new TextEncoder().encode(e))t^=BigInt(n),t=BigInt.asUintN(64,t*1099511628211n);return t.toString(16).padStart(16,`0`)}function Yi(e){let t=`canvas-${e.toLowerCase().replace(/[^a-z0-9._-]/gu,`-`)}`;return t===`canvas-${e}`&&t.length<=64?t:`${t.slice(0,47).replace(/[._-]+$/gu,``)||`canvas-widget`}-${Ji(e)}`}function Xi(e){return`mcp-app-${Ji(e)}`}function Zi(){return(Zi=e((()=>{})))()}function Qi(e,t=Date.now()){e.viewTicket&&e.viewTicketTtlMs&&B.set(e,t)}function $i(e,t,n=Date.now()){e.viewTicket&&e.viewTicketTtlMs&&B.set(e,B.get(t)??n)}function ea(e,t=Date.now()){let n=e.viewTicketTtlMs;if(!e.viewTicket||!n)return;let r=B.get(e);return r===void 0?n:Math.max(0,n-(t-r))}var B;function ta(){return(ta=e((()=>{B=new WeakMap})))()}function na(e,t){return{...e,...t.frameUrl===void 0?{}:{frameUrl:t.frameUrl},...t.viewTicket===void 0?{}:{viewTicket:t.viewTicket},...t.viewTicketTtlMs===void 0?{}:{viewTicketTtlMs:t.viewTicketTtlMs},...t.viewGeneration===void 0?{}:{viewGeneration:t.viewGeneration},...t.sandboxUrl===void 0?{}:{sandboxUrl:t.sandboxUrl},...t.sandboxPort===void 0?{}:{sandboxPort:t.sandboxPort},...t.sandboxOrigin===void 0?{}:{sandboxOrigin:t.sandboxOrigin}}}var ra;function ia(){return(ia=e((()=>{c(),le(),b(),Hi(),Gi(),qi(),ta(),ra=class{constructor(e,t,n=!0,r=!0,i=!1,a=!0,o=!0){this.session=e,this.canPinWidgets=r,this.canPinMcpApps=i,this.canMutate=a,this.canGrant=o,this.loadErrorSignal=new z(null),this.eventStream=new Ki,this.retiredClients=new WeakSet,this.clientGeneration=0,this.refreshRequested=!1,this.userRefreshRequested=!1,this.changedWidgets=new Set,this.stateGeneration=0,this.connected=!1,this.appViews=new Vi,this.disposed=!1,this.snapshotLoaded=!1,this.snapshotSignal=new z(Ui(this.sessionKey)),this.snapshot$=this.snapshotSignal,this.loadError$=this.loadErrorSignal,this.events=this.eventStream,this.client=t,this.connected=n,this.subscribe(t),n&&this.activate()}get sessionKey(){return this.session.sessionKey}attachClient(e,t=!0){if(this.disposed||e!==this.client&&this.retiredClients.has(e))return;let n=t!==this.connected,r=t&&!this.connected;if(this.connected=t,t||this.wakeRetryDelay?.(),e===this.client){n&&(this.clientGeneration+=1,this.stateGeneration+=1,this.appViews.clear(),this.publishAppViewGeneration()),r&&this.activate();return}this.retiredClients.add(this.client),this.unsubscribe?.(),this.client=e,this.clientGeneration+=1,this.stateGeneration+=1,this.changedWidgets.clear(),this.appViews.clear(),this.snapshotLoaded=!1,this.setLoadError(null),this.snapshotSignal.set(Ui(this.sessionKey)),this.subscribe(e),t&&this.activate()}activate(){return this.requestRefresh()}get hasLoadedSnapshot(){return this.snapshotLoaded}get appViewGeneration(){return this.clientGeneration}dispose(){this.disposed||(this.disposed=!0,this.connected=!1,this.unsubscribe?.(),this.unsubscribe=void 0,this.clientGeneration+=1,this.stateGeneration+=1,this.refreshRequested=!1,this.userRefreshRequested=!1,this.changedWidgets.clear(),this.appViews.clear(),this.wakeRetryDelay?.())}async applyOps(e){await this.mutate(`board.update`,{...this.session,ops:e})}async grant(e,t){let n=this.snapshotSignal.value.widgets.find(t=>t.name===e);if(!n)throw this.requestRefresh(),Error(`Dashboard widget not found: ${e}`);await this.mutate(`board.widget.grant`,{...this.session,name:e,decision:t,revision:n.revision,...n.instanceId?{instanceId:n.instanceId}:{}})}pinWidget(e){return this.pinBoardWidget(e,e.name??Yi(e.docId),{kind:`canvas-doc`,docId:e.docId})}pinMcpApp(e){return this.pinBoardWidget(e,e.name??Xi(e.viewId),{kind:`mcp-app`,viewId:e.viewId})}async pinBoardWidget(e,t,n){let r=Wi(e.title);await this.mutate(`board.widget.put`,{...this.session,name:t,...r?{title:r}:{},content:n,...e.tabId||e.size||e.after?{placement:{...e.tabId?{tabId:e.tabId}:{},...e.size?{size:e.size}:{},...e.after?{after:e.after}:{}}}:{}},t)}widgetFrameUrl(e,t){return this.snapshotSignal.value.widgets.find(n=>n.name===e&&n.revision===t)?.frameUrl??``}refreshWidgetFrame(e){return this.requestRefresh(e,!0)}async widgetAppView(e,t){return await this.resolveWidgetAppView(e,t,!1)}async refreshWidgetAppView(e,t){return await this.resolveWidgetAppView(e,t,!0)}async resolveWidgetAppView(e,t,n){if(this.disposed||!this.connected)return{status:`stale`,error:`Dashboard MCP App view unavailable`};let r=this.snapshotSignal.value.widgets.find(n=>n.name===e&&n.revision===t&&n.contentKind===`mcp-app`);if(!r)return{status:`stale`,error:`Dashboard MCP App widget unavailable`};let i=this.client,a=this.clientGeneration,o=await this.appViews.resolve(r,async()=>await i.request(`board.widget.appView`,{...this.session,name:e,revision:t,...r.instanceId?{instanceId:r.instanceId}:{}}),n);return this.disposed||!this.connected||i!==this.client||a!==this.clientGeneration?{status:`stale`,error:`Dashboard MCP App view unavailable`}:o}subscribe(e){this.unsubscribe=e.addEventListener(t=>{if(!(this.disposed||e!==this.client)){if(t.event===`board.changed`){let e=t.payload;e&&this.matchesSession(e.sessionKey)&&(this.stateGeneration+=1,this.requestRefresh(e.widget));return}if(t.event===`board.command`){let e=t.payload;e?.command&&this.matchesSession(e.sessionKey,e.agentId)&&this.eventStream.emit({sessionKey:this.snapshotSignal.value.sessionKey,command:e.command})}}})}matchesSession(e,t){if(typeof e!=`string`)return!1;let n=x({},this.sessionKey,this.session.agentId);if(t){let r=x({},e,t);return n.sessionKey===r.sessionKey&&n.agentId===r.agentId}if(!this.snapshotLoaded){let t=pe(e);return!!(t&&t.agentId===n.agentId&&(ve(e)===n.sessionKey||ve(t.rest)===n.sessionKey))}return ve(e)===ve(this.snapshotSignal.value.sessionKey)}requestRefresh(e,t=!1){return this.disposed?Promise.resolve():(this.refreshRequested=!0,this.userRefreshRequested||=t,e&&this.changedWidgets.add(e),this.wakeRetryDelay?.(),this.refreshLoop??=this.runRefreshLoop().finally(()=>{this.refreshLoop=void 0,this.refreshRequested&&(this.connected||this.userRefreshRequested)&&this.requestRefresh()}),this.refreshLoop)}async runRefreshLoop(){let e={delayMs:1e3};for(;this.refreshRequested;){if(this.disposed){this.refreshRequested=!1;return}if(!this.connected&&!this.userRefreshRequested)return;this.userRefreshRequested=!1;let t=new Set(this.changedWidgets);this.changedWidgets.clear();let n=this.client,r=this.stateGeneration;try{let i=await n.request(`board.get`,this.session);if(this.disposed)return;if(n!==this.client){this.refreshRequested=!0;continue}if(this.userRefreshRequested=!1,r!==this.stateGeneration){this.refreshRequested=!0;for(let e of t)this.changedWidgets.add(e);continue}for(let e of this.changedWidgets)t.add(e);this.changedWidgets.clear(),this.refreshRequested=!1,this.setSnapshot(i,t),e.delayMs=1e3}catch(i){if(this.disposed)return;if(this.refreshRequested=!0,n!==this.client)continue;this.setLoadError(_e(i));for(let e of t)this.changedWidgets.add(e);if(i instanceof d&&i.gatewayCode===`UNAVAILABLE`&&!i.retryable){this.refreshRequested=this.stateGeneration!==r||this.userRefreshRequested;continue}if(!this.connected){if(this.userRefreshRequested)continue;return}let a=e.delayMs;e.delayMs=Math.min(a*2,3e4),await this.waitForRetry(a);continue}}}waitForRetry(e){return new Promise(t=>{let n,r=()=>{n&&(clearTimeout(n),n=void 0,this.wakeRetryDelay===r&&(this.wakeRetryDelay=void 0),t())};n=setTimeout(r,e),this.wakeRetryDelay=r})}async mutate(e,t,n){if(this.disposed)throw Error(`Session dashboard provider is no longer active`);let r=this.client,i=this.clientGeneration,a=++this.stateGeneration;try{let o=await r.request(e,t);!this.disposed&&r===this.client&&i===this.clientGeneration&&a===this.stateGeneration&&(this.stateGeneration+=1,this.setSnapshot(o,n?new Set([n]):new Set,!0))}catch(e){throw!this.disposed&&r===this.client&&i===this.clientGeneration&&a===this.stateGeneration&&this.requestRefresh(),e}}setSnapshot(e,t=new Set,n=!1){let r=Date.now(),i=new Map(this.snapshotSignal.value.widgets.map(e=>[e.name,e])),a=e.widgets.map(e=>{let a=i.get(e.name);if(n&&a&&!t.has(e.name)&&a.revision===e.revision&&a.instanceId===e.instanceId&&e.viewGeneration===void 0){let t=na(e,a);return $i(t,a,r),t}if(a&&!t.has(e.name)&&a.revision===e.revision&&a.instanceId===e.instanceId&&a.viewGeneration===e.viewGeneration&&!e.sandboxUrl&&a.frameUrl){let t={...e,frameUrl:a.frameUrl};return Qi(t,r),t}return Qi(e,r),e});this.appViews.prune(a),this.snapshotLoaded=!0,this.snapshotSignal.set({...e,widgets:a}),this.setLoadError(null)}setLoadError(e){this.loadErrorSignal.value!==e&&this.loadErrorSignal.set(e)}publishAppViewGeneration(){let e=this.snapshotSignal.value;e.widgets.some(e=>e.contentKind===`mcp-app`)&&this.snapshotSignal.set({...e,widgets:e.widgets.map(e=>e.contentKind===`mcp-app`?Object.assign({},e):e)})}}})))()}function aa(e){return e.tabs.length>0||e.widgets.length>0}function oa(e){let t=x({},me(e.sessionKey),e.agentId);return JSON.stringify([e.agentId??t.agentId,t.sessionKey])}function sa(e,t=!0){let n=oa(e),r=me(e.sessionKey),i=t?V.get(n)?.provider:void 0;if(i)return i;let a=da.get(n);return a||(a=new la(r),da.set(n,a)),a}function ca(e,t,n=!0,r=!0,i=!1,a=!0,o=!0){let s=oa(e),c=V.get(s);if(c)c.provider.attachClient(t,n);else{let r={...e,sessionKey:me(e.sessionKey)};c={provider:new ra(r,t,n),consumers:0},V.set(s,c)}let l=new ua(c.provider,{canPinWidgets:r,canPinMcpApps:i,canMutate:a,canGrant:o});c.consumers+=1;let u=!1;return{provider:l,update:(e,t,n)=>{u||V.get(s)?.provider!==c.provider||(l.updateCapabilities(n),c.provider.attachClient(e,t))},release:()=>{if(u)return;u=!0,l.deactivate();let e=V.get(s);!e||e.provider!==c.provider||(--e.consumers,!(e.consumers>0)&&(V.delete(s),e.provider.dispose()))}}}var la,ua,da,V;function fa(){return(fa=e((()=>{b(),ia(),Gi(),qi(),la=class{constructor(e=``){this.sessionKey=e,this.appViewGeneration=0,this.canMutate=!1,this.canGrant=!1,this.canPinWidgets=!1,this.canPinMcpApps=!1,this.hasLoadedSnapshot=!0,this.loadError$=new z(null),this.events=new Ki,this.snapshot$=new z(Ui(e))}async applyOps(e){}async grant(e,t){}async pinWidget(e){throw Error(`Session dashboard unavailable`)}async pinMcpApp(e){throw Error(`Session dashboard unavailable`)}widgetFrameUrl(e,t){return``}async refreshWidgetFrame(e){}async widgetAppView(e,t){return{status:`stale`,error:`Session dashboard unavailable`}}async refreshWidgetAppView(e,t){return{status:`stale`,error:`Session dashboard unavailable`}}},ua=class{constructor(e,t){this.transport=e,this.capabilities=t,this.active=!0,this.loadError$=e.loadError$,this.snapshot$=e.snapshot$,this.events=e.events}get sessionKey(){return this.transport.sessionKey}get appViewGeneration(){return this.transport.appViewGeneration}get canPinWidgets(){return this.active&&this.capabilities.canPinWidgets}get canPinMcpApps(){return this.active&&this.capabilities.canPinMcpApps}get canMutate(){return this.active&&this.capabilities.canMutate}get canGrant(){return this.active&&this.capabilities.canGrant}get hasLoadedSnapshot(){return this.transport.hasLoadedSnapshot}updateCapabilities(e){this.active&&(this.capabilities=e)}deactivate(){this.active=!1}async applyOps(e){if(!this.canMutate)throw Error(`Session dashboard mutation unavailable`);await this.transport.applyOps(e)}async grant(e,t){if(!this.canGrant)throw Error(`Session dashboard approval unavailable`);await this.transport.grant(e,t)}async pinWidget(e){if(!this.canMutate||!this.canPinWidgets)throw Error(`Session dashboard widget pinning unavailable`);await this.transport.pinWidget(e)}async pinMcpApp(e){if(!this.canMutate||!this.canPinMcpApps)throw Error(`Session dashboard MCP App pinning unavailable`);await this.transport.pinMcpApp(e)}widgetFrameUrl(e,t){return this.transport.widgetFrameUrl(e,t)}refreshWidgetFrame(e){return this.transport.refreshWidgetFrame(e)}widgetAppView(e,t){return this.transport.widgetAppView(e,t)}refreshWidgetAppView(e,t){return this.transport.refreshWidgetAppView(e,t)}},da=new Map,V=new Map})))()}var pa,ma,ha,ga;function _a(){return(_a=e((()=>{S(),Me(),Te(),D(),gt(),lt(),v(),pa=0,ma=new WeakSet,ha=class extends Fe{constructor(...e){super(...e),this.scanPending=!1,this.active=!0,this.observedNodes=new Set,this.resizeObserver=typeof ResizeObserver>`u`?null:new ResizeObserver(e=>{if(!this.active||!this.isConnected)return;let t=new Set(e.map(({target:e})=>e.closest(`.code-block-wrapper`)));for(let e of t)e&&St(e)})}render(e=!0){return w}update(e,[t=!0]){return this.root=e.element instanceof HTMLElement?e.element:void 0,this.active=t,t?this.scheduleScan():this.release(),w}disconnected(){this.release()}release(){this.resizeObserver?.disconnect(),this.observedNodes.clear(),this.root&&Tt(this.root)}reconnected(){this.scheduleScan()}scheduleScan(){this.scanPending||!this.active||!this.isConnected||(this.scanPending=!0,queueMicrotask(()=>{this.scanPending=!1,this.active&&this.isConnected&&this.root?.isConnected&&this.scan(this.root)}))}scan(e){nt(e),e.querySelector(`.markdown-mermaid pre code`)&&m(async()=>{let{mountMermaidBlocks:e}=await import(`./markdown-mermaid-DedW5dci.js`);return{mountMermaidBlocks:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url).then(({mountMermaidBlocks:t})=>{this.active&&this.isConnected&&this.root===e&&e.isConnected&&t(e)&&this.scheduleScan()},()=>{if(!(!this.active||!this.isConnected||this.root!==e||!e.isConnected))for(let t of e.querySelectorAll(`.markdown-mermaid`))t.classList.remove(`markdown-mermaid`),t.prepend(k(`chat.mermaid.rendererError`))});for(let t of this.observedNodes)e.contains(t)||(this.resizeObserver?.unobserve(t),this.observedNodes.delete(t));for(let t of e.querySelectorAll(`.code-block-wrapper`)){let e=t.querySelector(`.code-block-viewport`),n=e?.querySelector(`code`);if(!(!e||!n)){if(!ma.has(t)){ma.add(t);let n=t.querySelector(`.code-block-expand`);if(n){let t=`code-block-${++pa}`;e.id=t,n.setAttribute(`aria-controls`,t)}}for(let t of[e,n])this.observedNodes.has(t)||(this.observedNodes.add(t),this.resizeObserver?.observe(t));this.resizeObserver||St(t)}}}},ga=De(ha)})))()}function va(e,t,n=!1,r=!1){return C`
    <openclaw-panel-loading-skeleton
      .variant=${e}
      ?compact=${n}
      ?overlay=${r}
      role="status"
      aria-busy="true"
      aria-label=${t}
    ></openclaw-panel-loading-skeleton>
  `}var H;function ya(){return(ya=e((()=>{S(),we(),ge(),H=class extends ae{constructor(...e){super(...e),this.variant=`files`,this.compact=!1,this.overlay=!1}static{this.styles=je`
    :host {
      display: block;
      box-sizing: border-box;
      width: 100%;
      min-height: 100%;
      padding: 14px;
      color: var(--muted);
    }

    :host([compact]) {
      min-height: 0;
      padding: 8px;
    }

    :host([overlay]) {
      position: absolute;
      inset: 0;
      z-index: 2;
      min-height: 0;
      background: color-mix(in srgb, var(--bg, #0e1015) 92%, transparent);
      pointer-events: none;
    }

    :host([compact]) .viewport,
    :host([compact]) .terminal,
    :host([compact]) .discussion-frame {
      min-height: 72px;
    }

    * {
      box-sizing: border-box;
    }

    /* Terminal/desktop/browser hosts use shadow roots, so base.css's .skeleton
       and global reduced-motion gate cannot reach here. Keep this primitive
       declaration-identical to base.css; the unit test guards against drift. */
    .skeleton {
      position: relative;
      overflow: hidden;
      background: var(--skeleton-base, var(--bg-muted));
      border-radius: var(--radius-md);
    }

    .skeleton::after {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg,
        transparent 25%,
        var(--skeleton-highlight, var(--bg-hover)) 50%,
        transparent 75%
      );
      content: "";
      transform: translateX(-100%);
      animation: shimmer var(--skeleton-duration, 1.5s) ease-in-out infinite;
      will-change: transform;
    }

    .line {
      height: 10px;
    }

    .short {
      width: 36%;
    }

    .medium {
      width: 62%;
    }

    .long {
      width: 88%;
    }

    .row,
    .toolbar,
    .bubble,
    .card,
    .summary {
      display: flex;
      gap: 10px;
      align-items: center;
    }

    .rows,
    .conversation,
    .code {
      display: grid;
      gap: 12px;
    }

    .toolbar {
      padding-bottom: 12px;
      border-bottom: 1px solid var(--border);
      margin-bottom: 14px;
    }

    .icon {
      width: 18px;
      height: 18px;
      flex: 0 0 auto;
      border-radius: 5px;
    }

    .copy {
      display: grid;
      flex: 1;
      gap: 6px;
    }

    .meta {
      height: 7px;
      width: 28%;
    }

    .viewport {
      min-height: 220px;
      border-radius: 8px;
    }

    .address {
      height: 28px;
      flex: 1;
      border-radius: 7px;
    }

    .button {
      width: 28px;
      height: 28px;
      flex: 0 0 auto;
    }

    .card {
      min-height: 58px;
      padding: 10px;
      border: 1px solid var(--border);
      border-radius: 8px;
    }

    .summary {
      margin-bottom: 16px;
    }

    .pill {
      width: 64px;
      height: 24px;
      border-radius: 999px;
    }

    .file-heading {
      height: 30px;
      margin-bottom: 14px;
    }

    .code .line {
      height: 9px;
      border-radius: 3px;
    }

    .terminal {
      display: grid;
      gap: 11px;
      padding: 12px;
      min-height: 220px;
      align-content: start;
      border-radius: 8px;
      background: color-mix(in srgb, var(--bg) 76%, transparent);
    }

    .bubble {
      width: 82%;
      min-height: 58px;
      padding: 12px;
      align-items: flex-start;
      border-radius: 12px;
      background: color-mix(in srgb, var(--bg-muted) 76%, transparent);
    }

    .bubble.user {
      width: 58%;
      margin-left: auto;
    }

    .discussion-frame {
      min-height: 280px;
      padding: 18px;
      border: 1px solid var(--border);
      border-radius: 8px;
    }

    /* Mirrors board.css: a 38px tab strip over a 12-column grid with 56px rows,
       so the placeholder occupies the same footprint as the widgets it precedes. */
    .board-tabs {
      display: flex;
      gap: 14px;
      align-items: center;
      min-height: 38px;
      margin-bottom: 12px;
      padding: 0 13px;
      border-bottom: 1px solid var(--border);
    }

    .tab {
      width: 64px;
      height: 10px;
      border-radius: 5px;
    }

    .board-grid {
      container-type: inline-size;
      display: grid;
      gap: 12px;
      grid-auto-rows: 56px;
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }

    .widget {
      display: grid;
      grid-template-rows: 38px minmax(0, 1fr);
      min-height: 0;
      min-width: 0;
      overflow: hidden;
      border: 1px solid var(--border);
      border-radius: 12px;
    }

    @container (max-width: 560px) {
      .widget {
        grid-column: 1 / -1 !important;
      }
    }

    .widget-bar {
      display: flex;
      gap: 7px;
      align-items: center;
      padding: 0 12px;
      border-bottom: 1px solid var(--border);
    }

    .widget-body {
      display: grid;
      gap: 10px;
      align-content: start;
      padding: 12px;
    }

    @keyframes shimmer {
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(100%);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .skeleton::after {
        animation-duration: 0.01ms;
        animation-iteration-count: 1;
      }
    }
  `}line(e=`long`){return C`<div class="skeleton line ${e}"></div>`}rows(e){return Array.from({length:e},(e,t)=>C`
        <div class="row">
          <div class="skeleton icon"></div>
          <div class="copy">
            ${this.line(t%2==0?`long`:`medium`)}
            <div class="skeleton meta"></div>
          </div>
        </div>
      `)}widget(e,t,n){return C`
      <div class="widget" style=${`grid-column: span ${e}; grid-row: span ${t}`}>
        <div class="widget-bar">
          <div class="skeleton icon"></div>
          ${this.line(`short`)}
        </div>
        <div class="widget-body">${n.map(e=>this.line(e))}</div>
      </div>
    `}renderContent(){switch(this.variant){case`board`:return C`
          <div class="board-tabs">
            <div class="skeleton tab"></div>
            <div class="skeleton tab"></div>
          </div>
          <div class="board-grid">
            ${this.widget(6,4,[`long`,`medium`,`short`])}
            ${this.widget(6,4,[`medium`,`long`])} ${this.widget(4,3,[`medium`,`short`])}
            ${this.widget(8,3,[`long`,`medium`,`long`])}
          </div>
        `;case`browser`:return C`
          <div class="toolbar">
            <div class="skeleton button"></div>
            <div class="skeleton button"></div>
            <div class="skeleton address"></div>
          </div>
          <div class="skeleton viewport"></div>
        `;case`chat`:return C`
          <div class="conversation">
            <div class="bubble"><div class="copy">${this.line()}${this.line(`medium`)}</div></div>
            <div class="bubble user"><div class="copy">${this.line(`medium`)}</div></div>
            <div class="bubble"><div class="copy">${this.line()}${this.line(`short`)}</div></div>
          </div>
        `;case`desktop`:return C`
          <div class="toolbar">${this.line(`medium`)}</div>
          <div class="rows">${this.rows(3).map(e=>C`<div class="card">${e}</div>`)}</div>
        `;case`discussion`:return C`
          <div class="discussion-frame">
            <div class="conversation">
              ${this.line(`medium`)} ${this.line()} ${this.line(`long`)} ${this.line(`short`)}
            </div>
          </div>
        `;case`review`:return C`
          <div class="summary">
            <div class="skeleton pill"></div>
            <div class="skeleton pill"></div>
          </div>
          <div class="skeleton file-heading"></div>
          <div class="code">
            ${this.line()} ${this.line(`long`)} ${this.line(`medium`)} ${this.line()}
            ${this.line(`short`)}
          </div>
        `;case`terminal`:return C`
          <div class="toolbar">
            <div class="skeleton pill"></div>
            <div class="skeleton pill"></div>
          </div>
          <div class="terminal">
            ${this.line(`medium`)} ${this.line()} ${this.line(`short`)} ${this.line(`long`)}
          </div>
        `;case`tasks`:return C`
          <div class="toolbar">${this.line(`short`)}</div>
          <div class="rows">${this.rows(4)}</div>
        `;default:return C`
          <div class="toolbar">
            <div class="skeleton address"></div>
            <div class="skeleton button"></div>
          </div>
          <div class="rows">${this.rows(5)}</div>
        `}}render(){return C`${this.renderContent()}`}},a([T({reflect:!0,attribute:`data-panel-skeleton`})],H.prototype,`variant`,void 0),a([T({type:Boolean,reflect:!0})],H.prototype,`compact`,void 0),a([T({type:Boolean,reflect:!0})],H.prototype,`overlay`,void 0),customElements.get(`openclaw-panel-loading-skeleton`)||customElements.define(`openclaw-panel-loading-skeleton`,H)})))()}function ba(e){let t=new CustomEvent(ja,{detail:e,cancelable:!0});return window.dispatchEvent(t),t.defaultPrevented?`accepted`:t.rejection?`rejected`:`unhandled`}function U(e){return Math.min(1,Math.max(0,e))}function xa(e){if(e.points.length===0)return null;let t=1,n=1,r=0,i=0;for(let a of e.points)t=Math.min(t,U(a.x)),n=Math.min(n,U(a.y)),r=Math.max(r,U(a.x)),i=Math.max(i,U(a.y));return{x:t,y:n,width:r-t,height:i-n}}function Sa(e){return String(Math.round(U(e)*100))}function W(e,t){return s(e.replace(/\s+/g,` `).trim(),t)}function Ca(e){let t=W(e,Na);try{let e=new URL(t);return!e.username&&!e.password?t:(e.username=``,e.password=``,s(e.href,Na))}catch{let e=t.replace(/^([a-z][a-z\d+.-]*:\/\/)[^/?#\s]*@/i,`$1`);return s(e,Na)}}function wa(e){try{let t=new URL(e).hostname;if(t)return W(t,Pa)}catch{}return s(e,Pa)}function Ta(e,t=40){return e.replace(/[^\w-]/g,``).slice(0,t)}function Ea(e){let t=e.classes.slice(0,3).map(e=>Ta(e)).filter(e=>e.length>0).map(e=>`.${e}`).join(``),n=Ta(e.tag)||`element`,r=Ta(e.id),i=`${n}${r?`#${r}`:``}${t}`,a=W(e.name,Ma);return`${i}${a?` "${a}"`:``}${e.role?` (role=${W(e.role,40)})`:``}`}function Da(e){let t=Ca(e.url),n=W(e.title,Ma),r=wa(t),i=e.strokes.flatMap(e=>xa(e)??[]),a=e.element?{descriptor:Ea(e.element),width:String(Math.round(e.element.rect.width)),height:String(Math.round(e.element.rect.height)),x:String(Math.round(e.element.rect.x)),y:String(Math.round(e.element.rect.y))}:null,o=[n?k(`browser.annotatePrompt.introTitled`,{url:t,title:n}):k(`browser.annotatePrompt.introUntitled`,{url:t})];return e.browserTab&&o.push(k(`browser.annotatePrompt.browserTarget`,{target:JSON.stringify(e.browserTab)})),i.slice(0,Fa).forEach((e,t)=>{o.push(k(`browser.annotatePrompt.region`,{index:String(t+1),x:Sa(e.x+e.width/2),y:Sa(e.y+e.height/2),width:Sa(e.width),height:Sa(e.height)}))}),i.length>Fa&&o.push(k(`browser.annotatePrompt.moreRegions`,{count:String(i.length-Fa)})),a&&o.push(k(`browser.annotatePrompt.elementDetail`,{descriptor:a.descriptor,width:a.width,height:a.height,x:a.x,y:a.y})),o.push(k(`browser.annotatePrompt.outro`)),{modelContext:o.join(`
`),card:{title:n||s(r,Ma),displayUrl:r,markedRegionCount:i.length,inspectedElement:a!==null}}}function Oa(e){return Math.max(4,Math.round(e*.005))}function ka(e,t){e.lineCap=`round`,e.lineJoin=`round`,e.strokeStyle=Ia,e.lineWidth=Oa(t.width);for(let n of t.strokes)if(n.points.length!==0){if(e.beginPath(),n.points.forEach((n,r)=>{let i=U(n.x)*t.width,a=U(n.y)*t.height;r===0?e.moveTo(i,a):e.lineTo(i,a)}),n.points.length===1){let r=n.points[0];r&&e.lineTo(U(r.x)*t.width+.1,U(r.y)*t.height)}e.stroke()}if(t.highlight){let{x:n,y:r,width:i,height:a}=t.highlight;e.strokeRect(U(n)*t.width,U(r)*t.height,Math.max(2,i*t.width),Math.max(2,a*t.height))}}function Aa(e){let t=document.createElement(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);if(!n)throw Error(k(`browser.errors.canvasUnavailable`));return n.drawImage(e.image,0,0,e.width,e.height),ka(n,e),t.toDataURL(`image/png`)}var ja,Ma,Na,Pa,Fa,Ia;function La(){return(La=e((()=>{D(),ja=`openclaw:browser-annotation`,Ma=80,Na=500,Pa=160,Fa=8,Ia=`#e0442d`})))()}function Ra(e){return C`<openclaw-panel-empty-state
    .heading=${e.heading}
    .description=${e.description}
  >
    ${e.icon}${e.action!=null&&e.action!==w?C`<span slot="action">${e.action}</span>`:w}
  </openclaw-panel-empty-state>`}var za;function Ba(){return(Ba=e((()=>{S(),we(),ge(),za=class extends ae{constructor(...e){super(...e),this.heading=``,this.description=``}render(){return C`<div class="empty-state" role="status">
      <div class="empty-state__icon" aria-hidden="true"><slot></slot></div>
      <strong class="empty-state__title">${this.heading}</strong>
      <p class="empty-state__description">${this.description}</p>
      <slot name="action"></slot>
    </div>`}static{this.styles=je`
    :host {
      display: flex;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      min-width: 0;
      min-height: 0;
      flex: 1 1 auto;
    }

    .empty-state {
      display: flex;
      box-sizing: border-box;
      width: 100%;
      min-height: 0;
      flex: 1 1 auto;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px;
      color: var(--muted);
      text-align: center;
      transform: translateY(-10px);
    }

    .empty-state__icon {
      display: inline-flex;
      width: 32px;
      height: 32px;
      align-items: center;
      justify-content: center;
      margin-bottom: 18px;
      color: var(--muted);
    }

    ::slotted(svg) {
      width: 32px;
      height: 32px;
      stroke-width: 1.5px;
    }

    .empty-state__title {
      color: var(--text);
      font-size: calc(16px * var(--control-ui-text-scale, 1));
      font-weight: 500;
      line-height: 1.25;
    }

    .empty-state__description {
      max-width: 320px;
      margin: 8px 0 0;
      color: var(--muted);
      font-size: calc(13px * var(--control-ui-text-scale, 1));
      line-height: 1.45;
    }

    ::slotted([slot="action"]) {
      margin-top: 16px;
    }
  `}},a([T()],za.prototype,`heading`,void 0),a([T()],za.prototype,`description`,void 0),customElements.get(`openclaw-panel-empty-state`)||customElements.define(`openclaw-panel-empty-state`,za)})))()}function Va(e){if(e.status!==503)return;let t=e.headers?.get(`retry-after`)?.trim();if(!t||!/^\d+$/.test(t))return;let n=Number(t)*1e3;return Number.isSafeInteger(n)&&n>0&&n<=qa?n:void 0}function Ha(e,t){G.get(e)===t&&(G.delete(e),t.retryTimer!==void 0&&(clearTimeout(t.retryTimer),t.retryTimer=void 0),t.controller.abort(),t.blobUrl&&URL.revokeObjectURL(t.blobUrl))}function Ua(e,t,n,r){return`${n?`stable-miss`:`retry-miss`}\0${r?`retry-503`:`drop-503`}\0${t.join(``)}\0${e}`}function Wa(e,t){let n=G.get(e);n&&(n.consumers.delete(t),!(n.consumers.size>0||n.releaseTimer!==void 0)&&(n.releaseTimer=setTimeout(()=>{n.releaseTimer=void 0,!(G.get(e)!==n||n.consumers.size>0)&&Ha(e,n)},0)))}async function Ga(e,t,n,r,i,a){let o=setTimeout(()=>a.controller.abort(),Ka),s=null,c=!1,l;try{for(let e of n.length>0?n:[``]){let n=await fetch(t,{...e?{headers:{Authorization:`Bearer ${e}`}}:{},signal:a.controller.signal});if(n.ok){s=URL.createObjectURL(await n.blob());break}if(c=n.status===404,l=i?Va(n):void 0,n.status!==401&&n.status!==403)break}}catch{}finally{clearTimeout(o)}if(G.get(e)!==a){s&&URL.revokeObjectURL(s);return}if(!s){if(c&&r)return;if(l!==void 0&&a.consumers.size>0){a.retryAttempts<Ja?(a.retryAttempts+=1,a.retryTimer=setTimeout(()=>{a.retryTimer=void 0,G.get(e)===a&&a.consumers.size!==0&&(a.controller=new AbortController,Ga(e,t,n,r,i,a))},l)):a.retryEligibleAt=Date.now()+Ya;return}Ha(e,a);return}a.blobUrl=s;for(let e of a.consumers.values())e()}var Ka,qa,Ja,Ya,G,Xa;function Za(){return(Za=e((()=>{Ka=3e4,qa=3e4,Ja=3,Ya=3e4,G=new Map,Xa=class{constructor(e,t={}){this.host=e,this.options=t,this.owner=Symbol(`authenticated-avatar-route-owner`),this.keys=new Set,this.connected=!1,this.onUpdate=()=>{this.connected&&this.host.requestUpdate()},e.addController(this)}hostConnected(){this.connected=!0,this.host.requestUpdate()}hostDisconnected(){this.connected=!1,this.reset()}reset(){for(let e of this.keys)Wa(e,this.owner);this.keys.clear()}withActiveRoutes(e){let t=this.keys;this.keys=new Set;try{return e()}finally{for(let e of t)this.keys.has(e)||Wa(e,this.owner)}}resolve(e,t){if(!e.startsWith(`/`))return e;if(!this.connected)return null;let n=this.options.cacheNotFound===!0,r=this.options.retryUnavailable===!0,i=Ua(e,t,n,r),a=G.get(i);return a?a.blobUrl===null&&a.retryTimer===void 0&&a.retryEligibleAt!==void 0&&Date.now()>=a.retryEligibleAt&&(a.retryAttempts=0,a.retryEligibleAt=void 0,a.controller=new AbortController,Ga(i,e,t,n,r,a)):(a={blobUrl:null,consumers:new Map,controller:new AbortController,releaseTimer:void 0,retryTimer:void 0,retryAttempts:0,retryEligibleAt:void 0},G.set(i,a),Ga(i,e,t,n,r,a)),a.releaseTimer!==void 0&&(clearTimeout(a.releaseTimer),a.releaseTimer=void 0),a.consumers.set(this.owner,this.onUpdate),this.keys.add(i),a.blobUrl}}})))()}function Qa(e,t){if(e?.signal?.aborted)return Promise.resolve(e.value);let n=document.createElement(`div`);return document.body.append(n),new Promise(r=>{let i={host:n,settled:!1,render(e){i.settled||Ee(e(),n)},finish(t){i.settled||(i.settled=!0,e?.signal?.removeEventListener(`abort`,a),Ee(w,n),n.remove(),r(t))}},a=()=>e&&i.finish(e.value);e?.signal?.addEventListener(`abort`,a,{once:!0}),t(i)})}function $a(){return($a=e((()=>{S(),We()})))()}function eo(e){return Qa({signal:e.signal,value:!1},({render:t,finish:n})=>{let r=!1,i=e.title??k(`common.confirm`);t(()=>C`
        <openclaw-modal-dialog
          label=${i}
          description=${e.message}
          @modal-cancel=${()=>n(!1)}
        >
          <div class="exec-approval-card">
            <div class="exec-approval-header">
              <div>
                <div class="exec-approval-title">${i}</div>
                <div class="exec-approval-sub" style="white-space: pre-line">
                  ${e.message}
                </div>
              </div>
            </div>
            ${e.details?C`<div class="exec-approval-command mono">${e.details}</div>`:w}
            ${e.skipPreference?C`<label class="field checkbox exec-approval-skip">
                    <input
                      type="checkbox"
                      @change=${e=>{r=e.target.checked}}
                    />
                    <span>${k(`common.dontAskAgain`)}</span>
                  </label>`:w}
            <div class="exec-approval-actions">
              <button
                type="button"
                class="btn ${e.danger?`danger`:`primary`}"
                @click=${()=>{r&&e.skipPreference?.remember(),n(!0)}}
              >
                ${e.confirmLabel??k(`common.confirm`)}
              </button>
              <button type="button" class="btn" autofocus @click=${()=>n(!1)}>
                ${e.cancelLabel??k(`common.cancel`)}
              </button>
            </div>
          </div>
        </openclaw-modal-dialog>
      `)})}function to(e){return e.skipPreference?.skipped?Promise.resolve(!0):no?Promise.resolve(!1):(no=!0,eo(e).finally(()=>{no=!1}))}var no;function ro(){return(ro=e((()=>{S(),D(),$a(),no=!1})))()}var io,ao;function oo(){return(oo=e((()=>{He(),io={sessionsView:{placementFactService:`Service`,placementFactProfile:`Profile`,placementFactMachine:`Machine`,placementFactState:`State`,placementFactDisk:`Disk`,placementDiskFree:`{free} free`,runsOnDevice:`Runs on device`,runsOnWorker:`Runs on worker`,stopWorker:`Stop worker…`,stopWorkerConfirm:`Stop the worker for "{session}"?`,stopWorkerConfirmAction:`Stop worker`,deviceOffline:`Device offline`,waitingForDevice:`Waiting for device to reconnect; retry after it returns.`,continueOnGatewayMenu:`Continue on Gateway…`,continueOnGatewayAction:`Continue on Gateway`,continueOnGatewayConfirm:`Continue "{session}" on the Gateway? Unsynced device files and in-flight work may be lost. OpenClaw will continue from the last Gateway-synced state and will not replay the interrupted turn.`,stopDeviceWorker:`Stop device worker…`,offlineDeviceStopUnavailable:`Reconnect the device to stop and sync its workspace, or Continue on Gateway.`,stopDeviceWorkerConfirm:`Stop the device worker for "{session}"?`,stopDeviceWorkerConfirmAction:`Stop device worker`,restartSession:`Restart session…`,restartingSession:`Restarting session…`,restartSessionTitle:`Restart session`,restartSessionDescription:`Choose where "{session}" should restart.`,restartSessionWarning:`A new worker starts from the last reconciled worktree. Changes that the previous worker did not upload may be lost.`,restartSessionAction:`Restart session`,stoppingSession:`Stopping session…`,finishingSessionMove:`Finishing session move…`,failedSessionTitle:`Runner failed`,failedSessionRestartPrompt:`Restart this session to continue.`,failedSessionStopPrompt:`Stop the failed worker before restarting this session.`,failedSessionUnavailable:`This session's runner failed and cannot accept messages.`}},ao=Object.assign(()=>{Object.assign(Ue.sessionsView,io.sessionsView)},{catalog:io})})))()}function so(e,t){return e>t?k(`execApproval.expiresIn`,{time:ie(e,t,!0)}):k(`execApproval.expired`)}function K(e,t,n){return t?C`<div class="exec-approval-meta-row">
    <span>${e}</span><span>${n?.path?jt(t):t}</span>
  </div>`:w}function co(e){let t=[...e.commandSpans??[]].filter(t=>Number.isSafeInteger(t.startIndex)&&Number.isSafeInteger(t.endIndex)&&t.startIndex>=0&&t.endIndex>t.startIndex&&t.endIndex<=e.command.length).toSorted((e,t)=>e.startIndex-t.startIndex||t.endIndex-e.endIndex),n=[],r=0;for(let e of t)e.startIndex>=r&&(n.push(e),r=e.endIndex);if(!n.length)return C`<div class="exec-approval-command mono">${e.command}</div>`;let i=[];r=0;for(let t of n)t.startIndex>r&&i.push(e.command.slice(r,t.startIndex)),i.push(C`<mark class="exec-approval-command-span"
        >${e.command.slice(t.startIndex,t.endIndex)}</mark
      >`),r=t.endIndex;return r<e.command.length&&i.push(e.command.slice(r)),C`<div class="exec-approval-command mono">${i}</div>`}function lo(e){return C`<details class="exec-approval-details">
    <summary>${k(`execApproval.details`)}</summary>
    <div class="exec-approval-meta">${e}</div>
  </details>`}function uo(e,t){return t?C`<span class="exec-approval-chip mono" data-approval-chip=${e}>${t}</span>`:w}function fo(e){switch(e.kind){case`standing-grant`:return e.expiresInDays===void 0?k(`execApproval.scope.standingGrant`,{automation:e.automation}):k(`execApproval.scope.standingGrantDays`,{automation:e.automation,count:String(e.expiresInDays)});case`message-send`:return k(`execApproval.scope.messageSend`,{count:String(e.recipientCount),target:e.target});case`payment`:return k(`execApproval.scope.payment`,{amount:e.amount,currency:e.currency,target:e.target});case`external-post`:return k(`execApproval.scope.externalPost`,{target:e.target})}return e}function po(e,t){return C` ${co(e)}
    ${e.scope?C`<div class="exec-approval-scope">${fo(e.scope)}</div>`:w}
    <div class="exec-approval-meta">
      ${K(k(`execApproval.labels.host`),e.host)}
      ${K(k(`execApproval.labels.cwd`),e.cwd,{path:!0})}
    </div>
    ${lo(C`
      ${K(k(`execApproval.labels.resolved`),e.resolvedPath,{path:!0})}
      ${K(k(`execApproval.labels.security`),e.security)}
      ${K(k(`execApproval.labels.ask`),e.ask)}
      ${t===`modal`?K(k(`execApproval.labels.session`),e.sessionKey):w}
    `)}`}function mo(e,t){return C` ${e.pluginDescription?C`<pre class="exec-approval-command mono">${e.pluginDescription}</pre>`:w}
  ${t===`modal`&&e.request.sessionKey?lo(C`${K(k(`execApproval.labels.session`),e.request.sessionKey)}`):w}`}function ho(e){let t=e.replace(/\s+/g,` `).trim();return t.length>64?`${s(t,61)}…`:t}function go(e,t){return k(e===`allow-once`?`execApproval.allowOnce`:e===`allow-always`?t===`exec`?`execApproval.alwaysAllowHere`:`execApproval.alwaysAllow`:`execApproval.deny`)}function _o(e){return e===`allow-once`?`btn primary`:e===`deny`?`btn danger`:`btn`}function vo(e){return e===`allow-once`?`Ctrl/Cmd+Enter`:e===`allow-always`?`Ctrl/Cmd+Shift+Enter`:`Ctrl/Cmd+D`}function yo(e){return e.request.allowedDecisions?.length?e.request.allowedDecisions:e.kind===`exec`&&e.request.ask===`always`?[`allow-once`,`deny`]:Co}function bo(e){return e.kind===`exec`?k(`execApproval.execApprovalNeeded`):e.pluginTitle??k(`execApproval.pluginApprovalNeeded`)}function xo(e){let t=e.approval,n=Date.now(),r=t.expiresAtMs<=n,i=ho(t.request.command),a=t.request.sessionKey?.trim(),o=e.sessionTitle??(a?ue(a):bo(t)),s=r||t.expiresAtMs-n<12e4,c=so(t.expiresAtMs,n),l=k(`execApproval.reviewOnly`),u=!e.canGrant&&e.error===l;return C`<article
    class="sidebar-approval-row sidebar-issues-panel__details--warning"
    data-attention-kind="pendingApproval"
    data-approval-id=${t.id}
  >
    <span class="sidebar-issues-panel__icon sidebar-approval-row__icon" aria-hidden="true"
      >${O.shieldQuestion}</span
    >
    <div class="sidebar-approval-row__content">
      <div class="sidebar-approval-row__header" data-issue-row-focus tabindex="-1">
        <span class="sidebar-issues-panel__entity" title=${o}>${o}</span>
        <openclaw-approval-countdown
          class="sidebar-approval-row__timer ${s?`sidebar-approval-row__timer--urgent`:``}"
          role="timer"
          aria-label=${c}
          title=${c}
          .expiresAtMs=${t.expiresAtMs}
          .compact=${!0}
        ></openclaw-approval-countdown>
      </div>
      <div class="sidebar-approval-row__command mono" title=${t.request.command}>
        <span aria-hidden="true">$ </span>${i}
      </div>
      ${t.request.scope?C`<div class="exec-approval-scope">
              ${fo(t.request.scope)}
            </div>`:w}
      <div
        class="sidebar-approval-row__actions"
        role="group"
        aria-label=${k(`approvalPage.actionsLabel`)}
      >
        ${yo(t).map(n=>{let a=go(n,t.kind);return C`<button
            type="button"
            class="btn btn--xs ${n===`deny`?`btn--ghost`:``} sidebar-approval-row__action sidebar-approval-row__action--${n}"
            aria-label=${k(`execApproval.decisionRequest`,{decision:a,command:i})}
            ?disabled=${e.busy||!e.canGrant||r}
            @click=${r=>e.onDecision(r,t.id,n)}
          >
            ${a}
          </button>`})}
        ${e.openSessionHref&&e.onOpenSession?C`<a
                class="sidebar-approval-row__open-session"
                href=${e.openSessionHref}
                aria-label=${k(`sessionsView.openSession`)}
                title=${k(`sessionsView.openSession`)}
                @click=${e.onOpenSession}
              >
                ${O.arrowUpRight}
              </a>`:w}
      </div>
      ${e.canGrant?w:C`<div class="sidebar-approval-row__message" role=${u?`alert`:`note`}>
              ${l}
            </div>`}
      ${e.error&&!u?C`<div
              class="sidebar-approval-row__message sidebar-approval-row__message--error"
              role="alert"
            >
              ${e.error}
            </div>`:w}
    </div>
  </article>`}function So(e){let t=e.approval,n=yo(t),r=k(`execApproval.reviewOnly`),i=!e.canGrant&&e.error===r,a=t.pluginSeverity?.trim().toLowerCase(),o=t.kind===`exec`||a===`warning`||a===`warn`?`warning`:a===`danger`||a===`critical`||a===`error`?`danger`:`info`,s=t.kind===`plugin`?t.pluginId?.trim():null,c=e.variant===`modal`?t.request.agentId?.trim():null;return C` <div
    class="exec-approval-card exec-approval-card--${e.variant} exec-approval-card--severity-${o}"
    data-approval-id=${t.id}
  >
    <div class="exec-approval-header">
      <div>
        <div class="exec-approval-title">${bo(t)}</div>
        ${s||c?C`<div class="exec-approval-chips">
                ${uo(`plugin`,s)} ${uo(`agent`,c)}
              </div>`:w}
        <openclaw-approval-countdown
          class="exec-approval-sub exec-approval-countdown"
          role="timer"
          .expiresAtMs=${t.expiresAtMs}
        ></openclaw-approval-countdown>
      </div>
      ${(e.queueCount??0)>1?C`<div class="exec-approval-queue">
              ${k(`execApproval.pending`,{count:String(e.queueCount)})}
            </div>`:w}
    </div>
    ${e.variant===`inline`&&t.sourceSessionKey?C`<div class="exec-approval-warning" role="note">
            ${k(`execApproval.requestedBySession`,{session:ue(t.sourceSessionKey,e.sourceSession)})}
          </div>`:w}
    ${t.kind===`exec`?po(t.request,e.variant):mo(t,e.variant)}
    ${t.kind===`exec`&&!n.includes(`allow-always`)?C`<div class="exec-approval-warning">${k(`execApproval.allowAlwaysUnavailable`)}</div>`:w}
    ${e.canGrant?w:C`<div
            class=${i?`exec-approval-error`:`exec-approval-warning`}
            role=${i?`alert`:`note`}
          >
            ${r}
          </div>`}
    ${e.error&&!i?C`<div class="exec-approval-error" role="alert">${e.error}</div>`:w}
    <div class="exec-approval-actions">
      ${n.map(n=>{let r=go(n,e.approval.kind);return C`<button
          class=${_o(n)}
          type="button"
          aria-label=${r}
          ?disabled=${e.busy||!e.canGrant}
          title=${e.variant===`modal`&&e.canGrant?`${r} (${vo(n)})`:r}
          @click=${()=>e.onDecision(t.id,n)}
        >
          <span>${r}</span>
        </button>`})}
    </div>
  </div>`}var Co,wo;function To(){return(To=e((()=>{S(),we(),D(),he(),xe(),ge(),Qt(),Ve(),Co=[`allow-once`,`allow-always`,`deny`],wo=class extends oe{constructor(...e){super(...e),this.expiresAtMs=0,this.compact=!1,this.polling=new tn(this,1e3,()=>{this.requestUpdate(),this.compact||this.closest(`openclaw-modal-dialog`)?.setAttribute(`description`,so(this.expiresAtMs,Date.now()))},!1)}connectedCallback(){super.connectedCallback(),this.polling.start()}render(){let e=Date.now();return C`${this.compact?ie(this.expiresAtMs,e,!0):so(this.expiresAtMs,e)}`}},a([T({type:Number})],wo.prototype,`expiresAtMs`,void 0),a([T({type:Boolean})],wo.prototype,`compact`,void 0),customElements.get(`openclaw-approval-countdown`)||customElements.define(`openclaw-approval-countdown`,wo)})))()}function Eo(e){return typeof e==`string`?rn(e):void 0}function Do(e,n={}){let r=t(e),i=t(r?.messages),a=t(i?.queue),o=Eo(t(a?.byChannel)?.webchat)??Eo(a?.mode),s=Eo(n.effectiveMode),c=Eo(n.sessionMode);if(c)return c;if(n.configNeedsApply)return s;if(!(n.sessionMetadataLoaded===!1&&!s)&&!(!r&&!s))return o??s??`steer`}function Oo(e,t){return Re(e)??t}function ko(){return(ko=e((()=>{nn(),Mt(),Ie()})))()}function Ao(e){let t=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`);return t.at(-1)===``&&t.pop(),t}function jo(e,t){for(let n of e)if((n.kind===`add`||n.kind===`ctx`)&&n.lineNo!==void 0&&t[n.lineNo-1]!==n.text)return!1;return!0}function Mo(e,t,n){return Array.from({length:n},(n,r)=>({kind:`ctx`,lineNo:t+r,text:e[t+r-1]}))}function No(e,t,n,r,i){let a=e.findIndex(e=>e.kind===`skip`&&e.gap===t),o=t.newStart+t.count-1;if(a<0||t.newStart<1||t.count<1||o>n.length||!jo(e,n))return null;let s=r===`all`||t.count<=Fo?t.count:Math.min(Po,t.count),c=t.count-s,l=Mo(n,r===`up`?t.newStart+c:t.newStart,s),u=[];return r===`up`&&c>0&&u.push({kind:`skip`,text:i(c),gap:{...t,count:c}}),u.push(...l),r!==`up`&&c>0&&u.push({kind:`skip`,text:i(c),gap:{oldStart:t.oldStart+s,newStart:t.newStart+s,count:c}}),[...e.slice(0,a),...u,...e.slice(a+1)]}var Po,Fo;function Io(){return(Io=e((()=>{Po=20,Fo=25})))()}function Lo(e,t,n=Ro){let r=[],i=!1,a=!1,o=0,s=0,c,l,u=e.replace(/\r\n/g,`
`).split(`
`);u.at(-1)===``&&u.pop();for(let e of u){let u=/^@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@/.exec(e);if(u){let e=Number.parseInt(u[1]??``,10),n=Number.parseInt(u[2]??``,10),i=c===void 0?e-1:e-c;i>0&&r.push({kind:`skip`,text:t(i),gap:{oldStart:c??e-i,newStart:l??n-i,count:i}}),o=e,s=n,a=!0;continue}if(!(!a||e.startsWith(`\\`))){if(r.length>=n){i=!0;break}e.startsWith(`+`)?(r.push({kind:`add`,lineNo:s,text:e.slice(1)}),s+=1):e.startsWith(`-`)?(r.push({kind:`del`,lineNo:o,text:e.slice(1)}),o+=1):(r.push({kind:`ctx`,lineNo:s,text:e.slice(1)}),o+=1,s+=1),c=o,l=s}}return{lines:r,truncated:i}}var Ro;function zo(){return(zo=e((()=>{Ro=600})))()}function Bo(e){let t=[];for(let n=0;n<e.length;){let r=e[n];if(!r)break;if(r.kind!==`add`&&r.kind!==`del`){t.push({kind:`span`,line:r}),n+=1;continue}let i=[],a=[];for(;n<e.length;){let t=e[n];if(t?.kind===`del`)i.push(t);else if(t?.kind===`add`)a.push(t);else break;n+=1}let o=Math.max(i.length,a.length);for(let e=0;e<o;e+=1)t.push({kind:`pair`,...i[e]?{left:i[e]}:{},...a[e]?{right:a[e]}:{}})}return t}function Vo(){return(Vo=e((()=>{})))()}function Ho(e){let t=ce();if(!t)throw Error(`Browser storage is unavailable`);let n=it(t,Et(e.settings?.gatewayUrl));return{entries:Object.entries(n.recovery).filter(([,t])=>(t.session.queue??[]).every(t=>ct(e,t))).map(([e,t])=>Object.assign({},t,{id:e})),blocked:n.recoveryBlocked===!0}}function Uo(e,t){let n=ce();if(!n||!re(e)||e.selectedChatSessionIncognito||e.connected&&e.client&&!e.client.recoveryScopeReady)return null;let r=Et(e.settings?.gatewayUrl),i=it(n,r);ut(i,e);let a=Qe(x(e,t.sessionKey,t.agentId)),o=i.sessions[a]??null;return{scope:t,gatewayOwner:r.gatewayOwner,recoveryScope:ht(e),session:JSON.stringify(o),revision:rt(n,r.key,a,o?.draftRevision).latestAttempt}}function Wo(e,t,n,r=0){let i=ce();if(!i)return`storage-failed`;try{let a=Uo(e,n.scope);if(!a||JSON.stringify(a)!==JSON.stringify(n))return`conflict`;let o=Et(e.settings?.gatewayUrl),s=it(i,o),{id:c,...l}=t;if(JSON.stringify(s.recovery[c])!==JSON.stringify(l)||!(t.session.queue??[]).every(t=>ct(e,t)))return`conflict`;let u=x(e,n.scope.sessionKey,n.scope.agentId);if(Qe(u)!==Qe(n.scope))return`conflict`;let d=Qe(u),f=s.sessions[d];if(f?.draft||f?.goalMode||f?.queue?.length)return`conflict`;let p=t.session;s.sessions[d]={...p,awaitingDefaults:void 0,draftRevision:et(Math.max(r,n.revision,p.draftRevision??0)),queue:p.queue?.map(e=>Object.assign({},e,u,{sendState:(e.sendAttempts??0)>0||e.sendState===`unconfirmed`?`unconfirmed`:`failed`,sendError:e.sendError??`Recovered message. Review this destination and retry only if it did not arrive.`}))},delete s.recovery[c],tt(i,o,s);let m=it(i,o);return m.recovery[c]||JSON.stringify(m.sessions[d])!==JSON.stringify(bt(s.sessions[d]))?`storage-failed`:($e(),`restored`)}catch{return`storage-failed`}}function Go(){return(Go=e((()=>{b(),mt(),_t(),pt(),st()})))()}function q(e){if(!A(At,e))return null;let t=e.id.trim(),n=e.taskId?.trim()||t;return!t||!n?null:{...e,id:t,taskId:n}}function Ko(){return(Ko=e((()=>{Je(),kt()})))()}function qo(e){return k(ss[e])}function Jo(e){switch(e.runtime){case`subagent`:return k(`tasksPage.runtime.subagent`);case`cron`:return k(`tasksPage.runtime.cron`);case`acp`:return k(`tasksPage.runtime.acp`);case`cli`:return k(`tasksPage.runtime.cli`);default:return k(`tasksPage.runtime.unknown`)}}function Yo(e){return e.title??e.kind??(e.runtime?Jo(e):k(`tasksPage.untitled`))}function Xo(e){return e.status===`queued`||e.status===`running`?e.progressSummary??null:e.status===`failed`||e.status===`timed_out`?e.error??e.terminalSummary??e.progressSummary??null:e.terminalSummary??e.error??e.progressSummary??null}function Zo(e){return e.status===`queued`||e.status===`running`}function J(e){if(typeof e==`number`)return e;if(typeof e==`string`){let t=Date.parse(e);return Number.isFinite(t)?t:0}return 0}function Y(e,t,n){let r=n.prompt??t.prompt;return r&&e.prompt!==r?{...e,prompt:r}:e}function Qo(e,t,n=`detail`){if(!t)return e;let r=J(e.updatedAt??e.endedAt??e.createdAt),i=J(t.updatedAt??t.endedAt??t.createdAt);if(i>r)return Y(t,e,t);if(i<r)return e;let a=Zo(e);if(a!==Zo(t))return Y(a?t:e,e,t);if(!a)return n===`event`?Y(t,e,t):e;if(e.status===`running`&&t.status===`queued`)return Y(e,e,t);if(e.status===`queued`&&t.status===`running`)return Y(t,e,t);let o=e.toolUseCount??0,s=t.toolUseCount??0;return Y(o>s?e:s>o||n!==`detail`?t:e,e,t)}function X(e){return e.toSorted((e,t)=>{let n=J(t.updatedAt)-J(e.updatedAt);return n===0?e.id<t.id?-1:+(e.id>t.id):n})}function $o(e){let t=(e,t)=>e.id<t.id?-1:+(e.id>t.id);return{active:e.filter(e=>e.status===`queued`||e.status===`running`).toSorted((e,n)=>J(e.createdAt)-J(n.createdAt)||t(e,n)),recent:e.filter(e=>e.status!==`queued`&&e.status!==`running`).toSorted((e,n)=>J(n.endedAt??n.updatedAt??n.createdAt)-J(e.endedAt??e.updatedAt??e.createdAt)||t(e,n)).slice(0,50)}}function es(e){return A(Bt,e)?{tasks:X(e.tasks.map(q).filter(e=>e!==null)),...e.nextCursor===void 0?{}:{nextCursor:e.nextCursor}}:null}function ts(e){return A(Dt,e)?q(e.task):null}function ns(...e){let t=new Map;for(let n of e)for(let e of n){let n=t.get(e.id);t.set(e.id,n?Qo(n,e,`snapshot`):e)}return X([...t.values()])}function rs(e){if(!A(Vt,e))return null;let t=r(e.reason),n=q(e.task);return{found:e.found,cancelled:e.cancelled,...t?{reason:t}:{},...n?{task:n}:{}}}function is(e){return A(Ot,e)?{results:e.results.map(e=>{let t=q(e.task),{task:n,...r}=e;return{...r,...t?{task:t}:{}}})}:null}function as(e){if(!g(e))return null;if(e.action===`restored`)return{action:`restored`};if(e.action===`deleted`){let t=r(e.taskId);return t?{action:`deleted`,taskId:t}:null}if(e.action===`upserted`){let t=q(e.task);return t?{action:`upserted`,task:t}:null}return null}function os(e,t){let n=as(t);if(!n||n.action===`restored`)return{tasks:[...e],refetch:!0};if(n.action===`deleted`)return{tasks:X(e.filter(e=>e.id!==n.taskId)),refetch:!1};let r=e.find(e=>e.id===n.task.id);return{tasks:X([r?Qo(r,n.task,`event`):n.task,...e.filter(e=>e.id!==n.task.id)]),refetch:!1}}var ss;function cs(){return(cs=e((()=>{Je(),kt(),D(),Ko(),ss={queued:`tasksPage.status.queued`,running:`tasksPage.status.running`,completed:`tasksPage.status.completed`,failed:`tasksPage.status.failed`,cancelled:`tasksPage.status.cancelled`,timed_out:`tasksPage.status.timedOut`}})))()}function ls(e){let t=e.replace(/\s+/g,` `).trim();return s(t,fs)}function us(e){let t=ls(e);return t?`Regarding "${t}": `:null}function ds(e){return e.trim().replace(/^\/(?:btw|side)(?::\s*|\s+|$)/i,``).trim()}var fs;function ps(){return(ps=e((()=>{fs=300})))()}function ms(e){return k(hs[e])}var hs;function gs(){return(gs=e((()=>{D(),hs={manual:`sessionsView.archiveReasonManual`,"active-session-cap":`sessionsView.archiveReasonActiveSessionCap`,"age-retention":`sessionsView.archiveReasonAgeRetention`,"stale-dashboard":`sessionsView.archiveReasonStaleDashboard`,"restart-recovery":`sessionsView.archiveReasonRestartRecovery`}})))()}function _s(e){return!g(e)||typeof e.step!=`string`||e.status!==`pending`&&e.status!==`in_progress`&&e.status!==`completed`?null:{status:e.status,step:e.step}}function vs(e,t){if(!g(e))throw Error(`Progress card response was invalid`);let n=e.card;if(n===null)return null;if(!g(n))throw Error(`Progress card response was invalid`);let r=n.markdown,a=n.revision,o=i(n.updatedAt),s=n.steps;if(n.sessionKey!==t||r!==void 0&&typeof r!=`string`||s!==void 0&&!Array.isArray(s)||typeof a!=`number`||!Number.isInteger(a)||a<1||o===void 0||!Number.isInteger(o))throw Error(`Progress card response did not match the requested session`);let c=Array.isArray(s)?s.map(_s):void 0;if(c?.some(e=>e===null))throw Error(`Progress card response contained invalid steps`);let l=c?.filter(e=>e!==null);if(r===void 0&&(!l||l.length===0))throw Error(`Progress card response contained no content`);return{sessionKey:t,revision:a,updatedAt:o,...r===void 0?{}:{markdown:r},...l&&l.length>0?{steps:l}:{}}}function ys(e,t){let n=t.agentId?.trim()?h(t.agentId):void 0,r=t.sessionKey.trim(),i=r.toLowerCase();return{...n?{agentId:n}:{},...x(e,i===`global`||i===`unknown`?i:fe(r,n),n)}}function bs(e){return pe(e.sessionKey)?{sessionKey:e.sessionKey}:e}function xs(e){let t=new Map,n=new Map,r=new Set,i=de(e.snapshot),a=e.snapshot.client,o=!1,s=null,c=null,l=t=>{let n=ys(e.snapshot,t);return{target:n,key:JSON.stringify([n.agentId??null,n.sessionKey]),wireKey:fe(n.sessionKey,n.agentId)}},u=()=>new Map(Array.from(t.values()).flatMap(e=>e.map(e=>{let t=l(e);return[t.key,t.target]}))),d=()=>{for(let e of r)e()},f=(e,t)=>{let n=t instanceof E&&g(t.details)&&t.details.code===`SESSION_PARTICIPATION_REQUIRED`;e.error=n?`access-denied`:`unavailable`,e.dirty=!0,n&&(e.card=null),d()},p=(e,t)=>{n.delete(e),n.set(e,t);let r=u();for(;n.size>Es;){let e=[...n].find(([e,t])=>!r.has(e)&&!t.load);if(!e)break;n.delete(e[0])}},m=()=>e.snapshot.phase===`connected`&&e.snapshot.client!==null,h=async t=>{let r=l(t);if(!r.target.sessionKey||!m())return null;let a=n.get(r.key)??{target:r.target,wireKey:r.wireKey,generation:0,dirty:!0};if(p(r.key,a),!a.dirty&&a.card!==void 0)return a.card;if(a.load)return a.load;i.transition(e.snapshot);let o=i.capture();if(!o)return null;let s=a.generation,c=()=>n.get(r.key)===a&&a.generation===s&&i.isCurrent(o)&&e.snapshot.client===o.client,u=o.client.request(Cs,bs(a.target)).then(e=>{let t=vs(e,a.wireKey);return c()?(a.card=t,a.dirty=!1,delete a.error,d(),t):null}).catch(e=>{throw c()&&f(a,e),e}).finally(()=>{a.load===u&&(delete a.load,n.get(r.key)===a&&p(r.key,a))});return a.load=u,p(r.key,a),u},_=()=>{for(let e of u().values())h(e).catch(()=>void 0)},v=e=>{i.transition(e);let t=e.client!==a,r=m(),s=r&&!o;if(!r&&o)for(let e of n.values())e.dirty=!0,delete e.load;o=r,!(!t&&!s)&&(t&&(a=e.client,n.clear(),d()),_())},ee=e=>{if(e.event!==Ts||!g(e.payload))return;let{sessionKey:t,revision:r}=e.payload;if(typeof t!=`string`||r!==null&&(typeof r!=`number`||!Number.isInteger(r)))return;let i=u(),a=[...n].filter(([,e])=>e.wireKey===t);for(let[e,t]of a)if(t.generation+=1,t.dirty=!0,delete t.error,i.has(e)){let n=()=>{u().has(e)&&h(t.target).catch(()=>void 0)};t.load?t.load.finally(n).catch(()=>void 0):n()}},te=()=>{s||c||(i.transition(e.snapshot),o=m(),s=e.subscribe(v),c=e.subscribeEvents(ee))},ne=()=>{t.size>0||r.size>0||(s?.(),c?.(),s=null,c=null,n.clear())},y=(e,n)=>{let r=n.filter(e=>e.sessionKey.trim()).map(({sessionKey:e,agentId:t})=>({sessionKey:e,agentId:t}));if(r.length===0){t.delete(e),ne();return}t.set(e,r),te();for(let e of r)h(e).catch(()=>void 0)};return{watch:y,unwatch:e=>y(e,[]),load:h,dismiss:async(t,r)=>{i.transition(e.snapshot);let a=i.capture();if(!a)return!1;let o=l(t),s=n.get(o.key);if(!s||s.card!==r)return!1;let c=s.generation,u=()=>n.get(o.key)===s&&i.isCurrent(a)&&e.snapshot.client===a.client,m=vs(await a.client.request(ws,{...bs(s.target),expectedRevision:r.revision}).catch(e=>{throw u()&&s.generation===c&&f(s,e),e}),s.wireKey);if(!u())return!1;let h=m===null;return(m?s.generation===c:s.card?.revision===r.revision)&&(s.card=m,s.dirty=!1,delete s.error,p(o.key,s),d()),h},get:e=>n.get(l(e).key)?.card,getError:e=>n.get(l(e).key)?.error,subscribe:e=>(r.add(e),te(),()=>{r.delete(e),ne()})}}function Ss(e){let t=Ds.get(e);if(t)return t;let n=xs(e);return Ds.set(e,n),n}var Cs,ws,Ts,Es,Ds;function Os(){return(Os=e((()=>{u(),ze(),b(),Cs=`progressCard.get`,ws=`progressCard.put`,Ts=`progressCard.changed`,Es=100,Ds=new WeakMap})))()}var ks;function As(){return(As=e((()=>{Os(),ks=class{constructor(e,t){this.host=e,this.options=t,this.store=null,this.stopUpdates=null,this.retry=()=>{this.target?.sessionKey&&this.store?.load(this.target).catch(()=>void 0)},this.dismiss=e=>this.target?this.store?.dismiss(this.target,e)??Promise.resolve(!1):Promise.resolve(!1),e.addController(this)}get card(){return this.target?this.store?.get(this.target)??null:null}get loading(){return!this.target||this.store?.get(this.target)===void 0}get error(){return this.target?this.store?.getError(this.target):void 0}hostUpdate(){this.synchronize()}hostDisconnected(){this.release()}synchronize(){let e=this.options.gateway()??null,t=this.options.target()??void 0,n=e?Ss(e):null;n!==this.store&&(this.release(),this.store=n,this.stopUpdates=n?.subscribe(()=>this.host.requestUpdate())??null),(t?.sessionKey!==this.target?.sessionKey||t?.agentId!==this.target?.agentId)&&(this.target=t,this.store?.watch(this,t?[t]:[]))}release(){this.store?.unwatch(this),this.stopUpdates?.(),this.stopUpdates=null,this.store=null,this.target=void 0}}})))()}var js;function Ms(){return(Ms=e((()=>{js=class{constructor(){this.activeSessionKey=``,this.activationObserved=!1,this.requested=!1}beginActivation(e){this.activeSessionKey=e.trim(),this.activationObserved=!1,this.activationMarkedUnreadAt=void 0,this.requested=!1}shouldPatch(e,t,n){let r=e.trim(),i=n??void 0;return r!==this.activeSessionKey&&this.beginActivation(r),r?(this.activationObserved||(this.activationObserved=!0,this.activationMarkedUnreadAt=i),t===!1?i===void 0&&(this.activationMarkedUnreadAt=void 0,this.requested=!1,!1):i!==void 0&&i!==this.activationMarkedUnreadAt||t!==!0||this.requested?!1:(this.requested=!0,!0)):!1}patchFailed(e){e.trim()===this.activeSessionKey&&(this.requested=!1)}}})))()}function Ns(e){let t=e.busy||e.disabled===!0;return C`
    <form class="mcp-server-form" @submit=${t=>{t.preventDefault();let n=t.currentTarget,r=new FormData(n),i=r.get(`mcp-name`),a=r.get(`mcp-transport`),o=r.get(`mcp-target`);e.onSubmit({name:typeof i==`string`?i.trim():``,transport:a===`sse`||a===`stdio`?a:`streamable-http`,target:typeof o==`string`?o.trim():``})}}>
      <label>
        <span>${k(`mcpServers.nameLabel`)}</span>
        <input
          name="mcp-name"
          class="settings-input"
          type="text"
          required
          placeholder="context7"
          autocomplete="off"
          ?autofocus=${e.autofocus??!1}
          title=${e.blockedReason??``}
          ?disabled=${t}
        />
      </label>
      <label>
        <span>${k(`mcpServers.transportLabel`)}</span>
        <select
          name="mcp-transport"
          class="settings-select"
          title=${e.blockedReason??``}
          ?disabled=${t}
        >
          <option value="streamable-http">${k(`mcpServers.transportStreamableHttp`)}</option>
          <option value="sse">${k(`mcpServers.transportSse`)}</option>
          <option value="stdio">${k(`mcpServers.transportStdio`)}</option>
        </select>
      </label>
      <label class="mcp-server-form__target">
        <span>${k(`mcpServers.targetLabel`)}</span>
        <input
          name="mcp-target"
          class="settings-input"
          type="text"
          required
          placeholder="https://mcp.example.com/mcp  ·  npx some-mcp-server"
          autocomplete="off"
          title=${e.blockedReason??``}
          ?disabled=${t}
        />
      </label>
      <div class="mcp-server-form__actions">
        <button
          type="submit"
          class="btn btn--sm"
          title=${e.blockedReason??``}
          ?disabled=${t}
        >
          ${e.busy?k(`mcpServers.adding`):k(`mcpServers.add`)}
        </button>
        <button type="button" class="btn btn--sm" ?disabled=${e.busy} @click=${e.onCancel}>
          ${k(`common.cancel`)}
        </button>
      </div>
    </form>
  `}function Ps(){return(Ps=e((()=>{S(),D()})))()}async function Fs(e,t){switch(t.kind){case`device-pairing`:{let t=e.gateway.snapshot;return t.phase!==`connected`||!Le(t).canAdmin?!1:e.overlays.openDevicePairSetup()}default:return t.kind,!1}}function Is(){return(Is=e((()=>{Be()})))()}function Ls(e){let t=qe(e??``);return t?C`<span
        class="session-color-dot"
        style=${`--session-color: var(--session-color-${t})`}
        role="img"
        aria-label=${k(`sessionsView.sessionColor`,{color:k(`sessionsView.colors.${t}`)})}
      ></span>`:w}function Rs(){return(Rs=e((()=>{S(),Ke(),D()})))()}var Z;function zs(){return(zs=e((()=>{S(),we(),Za(),ge(),Ve(),Z=class extends oe{constructor(...e){super(...e),this.routeUrl=null,this.authTokens=[],this.authReady=!1,this.undecodableRouteUrl=null,this.loader=new Xa(this,{cacheNotFound:!0,retryUnavailable:!0})}render(){return this.loader.withActiveRoutes(()=>this.renderContent())}renderContent(){let e=this.routeUrl,t=e&&this.authReady&&this.undecodableRouteUrl!==e?this.loader.resolve(e,this.authTokens):null;return t?C`<img
      class="workspace-icon"
      src=${t}
      alt=""
      aria-hidden="true"
      decoding="async"
      @error=${()=>{this.undecodableRouteUrl=e}}
    />`:C`<span class="workspace-icon-fallback" aria-hidden="true">${O.folder}</span>`}},a([T({attribute:!1})],Z.prototype,`routeUrl`,void 0),a([T({attribute:!1})],Z.prototype,`authTokens`,void 0),a([T({attribute:!1})],Z.prototype,`authReady`,void 0),a([ke()],Z.prototype,`undecodableRouteUrl`,void 0),customElements.get(`openclaw-workspace-icon`)||customElements.define(`openclaw-workspace-icon`,Z)})))()}function Bs(e){return typeof e==`string`&&e.length>0}function Vs(e){for(let t of[`sessionId`,`agentId`,`shell`,`cwd`])if(!Bs(e[t]))return t;return null}function Hs(e){return e instanceof Error&&/^gateway request timed out after \d+ms: (?:terminal\.open|sessions\.catalog\.startTerminal)$/u.test(e.message)}function Us(e){return e instanceof Error&&(e.message===`terminal open timed out`||Hs(e))}var Ws,Gs,Ks,qs,Js,Ys,Xs,Zs;function Qs(){return(Qs=e((()=>{Ht(),Ws=2e4,Gs=5e3,Ks=2,qs=5e3,Js=35e3,Ys=class extends Error{constructor(e){super(`terminal open timed out`,{cause:e}),this.name=`TerminalOpenTimeoutError`}},Xs=class extends Error{constructor(e){super(`terminal session response is missing ${e}`),this.field=e,this.name=`TerminalOpenUnusableSessionError`}},Zs=class e{static{this.MAX_PENDING_EVENTS=512}constructor(e){this.streams=new Map,this.pending=new Map,this.unsubscribe=null,this.disposed=!1,this.pendingOpenCount=0,this.livenessTimer=null,this.livenessProbeInFlight=!1,this.livenessProbeFailures=0,this.lastLivenessFailureActivityVersion=null,this.lastTerminalActivityAtMs=Date.now(),this.inboundActivityVersion=0,this.client=e}ensureSubscribed(){this.unsubscribe||=this.client.addEventListener(e=>{if(e.event===`terminal.data`){this.noteTerminalActivity();let t=e.payload;if(t?.sessionId&&typeof t.seq==`number`&&typeof t.data==`string`){let e={kind:`data`,seq:t.seq,data:t.data},n=this.streams.get(t.sessionId);n?this.deliverData(t.sessionId,n,e):this.bufferEarly(t.sessionId,e)}return}if(e.event===`terminal.exit`){this.noteTerminalActivity();let t=e.payload;if(t?.sessionId){let e={exitCode:t.exitCode??null,signal:t.signal??null,reason:t.reason,error:t.error},n=this.streams.get(t.sessionId);n?n.recovering?this.bufferEarly(t.sessionId,{kind:`exit`,info:e}):this.deliverExit(t.sessionId,n,e):this.bufferEarly(t.sessionId,{kind:`exit`,info:e})}}})}async open(e,t){return this.openRequest(`terminal.open`,e,t)}async start(e,t){return this.openRequest(`sessions.catalog.startTerminal`,e,t)}async openRequest(e,t,n){let r;try{r=await this.requestWhileHoldingStream(()=>this.client.request(e,t,{timeoutMs:Js}))}catch(e){throw Us(e)?(Hs(e)&&this.forceReconnect(`terminal open watchdog timeout`),new Ys(e)):e}let i=Vs(r);if(i)throw Bs(r.sessionId)&&this.close(r.sessionId),new Xs(i);if(this.disposed)return r;let a=this.setStream(r.sessionId,n,{seqMode:`unknown`,expectedSeq:0,recovering:!1});return this.flushPending(r.sessionId,a),this.scheduleLivenessCheck(),r}async attach(e,t){let n=await this.requestWhileHoldingStream(()=>this.client.request(`terminal.attach`,{sessionId:e})),r=Vs(n)??(typeof n.buffer==`string`?null:`buffer`);if(r)throw new Xs(r);let i=typeof n.seq==`number`&&Number.isSafeInteger(n.seq)?n.seq:null;if(this.disposed)return n;let a=this.setStream(e,t,{seqMode:i===null?`counter`:`offset`,expectedSeq:i,recovering:!0}),o=a.abort.signal;try{await t.onReplay({data:n.buffer,newlyObservedFrom:n.buffer.length,mode:`initial`,signal:o})}catch(t){throw o.aborted||(this.removeStream(e),this.pending.delete(e),this.maybeUnsubscribe()),t}return o.aborted?n:(a.recovering=!1,this.flushPending(e,a,i??void 0,!0),this.scheduleLivenessCheck(),n)}async list(){return(await this.client.request(`terminal.list`))?.sessions??[]}async requestWhileHoldingStream(e){this.ensureSubscribed(),this.pendingOpenCount+=1;try{let t=await e();return--this.pendingOpenCount,t}catch(e){throw--this.pendingOpenCount,this.maybeUnsubscribe(),e}}deliverData(e,t,n){if(t.recovering){this.bufferEarly(e,n);return}if(!Number.isSafeInteger(n.seq)){this.recoverGap(e,t,n);return}if(t.seqMode===`counter`){t.expectedSeq=n.seq+1,t.sink.onData(n.data);return}if(n.seq-n.data.length===t.expectedSeq){n.data.length>0&&(t.seqMode=`offset`),t.expectedSeq=n.seq,t.sink.onData(n.data);return}if(t.seqMode===`unknown`&&t.expectedSeq===0&&n.seq===0){t.seqMode=`counter`,t.expectedSeq=1,t.sink.onData(n.data);return}this.recoverGap(e,t,n)}recoverGap(e,t,n){if(t.recovering)return;t.recovering=!0;let r=t.abort.signal;this.client.request(`terminal.attach`,{sessionId:e}).then(async i=>{if(r.aborted)return;let a=typeof i.seq==`number`&&Number.isSafeInteger(i.seq)?i.seq:null;if(a===null){t.seqMode=`counter`,t.expectedSeq=null,t.recovering=!1,this.deliverData(e,t,n),this.flushPending(e,t,void 0,!0);return}let o=t.expectedSeq;t.seqMode=`offset`,t.expectedSeq=a;let s=a-i.buffer.length,c=typeof o==`number`?Math.max(0,Math.min(i.buffer.length,o-s)):0;await t.sink.onReplay({data:i.buffer,newlyObservedFrom:c,mode:`recovery`,signal:r}),!r.aborted&&(t.recovering=!1,this.flushPending(e,t,a,!0))}).catch(()=>{if(r.aborted)return;let i=this.pending.get(e)?.drain();if(i?.some(e=>e.kind===`exit`)){this.pending.delete(e),t.recovering=!1,t.sink.onData(n.data);for(let n of i)if(n.kind===`data`)t.sink.onData(n.data);else{this.deliverExit(e,t,n.info);break}return}t.recovering=!1,this.pending.delete(e),this.forceReconnect(`terminal replay failed`)})}flushPending(e,t,n,r=!1){let i=this.pending.get(e);if(!i)return;this.pending.delete(e);let a=i.drain();for(let i of a){if(this.streams.get(e)!==t)break;if(!(r&&i.kind===`exit`&&i.info.reason===`detached`)){if(i.kind===`data`){if(n!==void 0&&i.seq<=n)continue;this.deliverData(e,t,i)}else t.recovering?this.bufferEarly(e,i):this.deliverExit(e,t,i.info)}}}deliverExit(e,t,n){this.removeStream(e),t.sink.onExit(n),this.pending.delete(e),this.maybeUnsubscribe()}setStream(e,t,n){this.removeStream(e);let r={abort:new AbortController,sink:t,...n};return this.streams.set(e,r),this.lastTerminalActivityAtMs=Date.now(),r}removeStream(e){this.streams.get(e)?.abort.abort(),this.streams.delete(e)}bufferEarly(t,n){let r=this.pending.get(t)??new Pt(e.MAX_PENDING_EVENTS,{mode:`drop-oldest`});this.pending.set(t,r),r.push(n)}noteTerminalActivity(){this.resetLivenessProbeFailures(),this.lastTerminalActivityAtMs=Date.now(),this.inboundActivityVersion+=1}forceReconnect(e){this.resetLivenessProbeFailures(),this.client.forceReconnect(e)}resetLivenessProbeFailures(){this.livenessProbeFailures=0,this.lastLivenessFailureActivityVersion=null}scheduleLivenessCheck(e=Ws){this.livenessTimer||this.livenessProbeInFlight||this.streams.size===0||(this.livenessTimer=setTimeout(()=>{this.livenessTimer=null,this.checkLiveness()},Math.max(0,e)))}checkLiveness(){if(this.streams.size===0)return;let e=Ws-(Date.now()-this.lastTerminalActivityAtMs);if(e>0){this.scheduleLivenessCheck(e);return}let t=this.client.inboundActivitySeq??this.inboundActivityVersion;if(this.lastLivenessFailureActivityVersion!==null&&t!==this.lastLivenessFailureActivityVersion){this.resetLivenessProbeFailures(),this.lastTerminalActivityAtMs=Date.now(),this.scheduleLivenessCheck();return}let n=Ws;this.livenessProbeInFlight=!0,this.client.request(`terminal.list`,void 0,{timeoutMs:Gs}).then(()=>{this.resetLivenessProbeFailures(),this.lastTerminalActivityAtMs=Date.now()}).catch(()=>{if(this.streams.size===0){this.resetLivenessProbeFailures();return}let e=this.client.inboundActivitySeq??this.inboundActivityVersion;if(e!==t){this.resetLivenessProbeFailures(),this.lastTerminalActivityAtMs=Date.now();return}if(this.livenessProbeFailures+=1,this.lastLivenessFailureActivityVersion=e,this.livenessProbeFailures>=Ks){this.forceReconnect(`terminal liveness timeout`);return}n=qs}).finally(()=>{this.livenessProbeInFlight=!1,this.scheduleLivenessCheck(n)})}async input(e,t){await this.requestAction(`terminal.input`,e,{sessionId:e,data:t})}async resize(e,t,n){await this.requestAction(`terminal.resize`,e,{sessionId:e,cols:t,rows:n})}async requestAction(e,t,n){let r=this.streams.get(t);(await this.client.request(e,n).catch(()=>null))?.ok!==!1||!r||this.streams.get(t)!==r||this.deliverExit(t,r,{exitCode:null,signal:null,reason:`disconnected`,error:`Terminal session is no longer available. Open a new terminal session.`})}async close(e){this.removeStream(e),this.pending.delete(e),await this.client.request(`terminal.close`,{sessionId:e}).catch(()=>void 0),this.pending.delete(e),this.maybeUnsubscribe()}get size(){return this.streams.size}dispose(){this.disposed=!0;for(let e of this.streams.values())e.abort.abort();this.streams.clear(),this.pending.clear(),this.stopLiveness(),this.dropSubscriptions()}maybeUnsubscribe(){this.streams.size===0&&this.pendingOpenCount===0&&(this.pending.clear(),this.stopLiveness(),this.dropSubscriptions())}stopLiveness(){this.resetLivenessProbeFailures(),this.livenessTimer&&=(clearTimeout(this.livenessTimer),null)}dropSubscriptions(){this.unsubscribe?.(),this.unsubscribe=null}}})))()}function $s(e){return typeof e==`string`&&e.length>0}function ec(e){return g(e)&&$s(e.catalogId)&&$s(e.hostId)&&$s(e.threadId)?{catalogId:e.catalogId,hostId:e.hostId,threadId:e.threadId}:null}function tc(e){if(!g(e))return null;if(e.kind===`attach`)return $s(e.sessionId)&&typeof e.agentOwned==`boolean`?{kind:`attach`,sessionId:e.sessionId,agentOwned:e.agentOwned}:null;let t=e.agentId;if(t!==null&&!$s(t))return null;if(e.kind===`restore`||e.kind===`open`)return{kind:e.kind,agentId:t};if(e.kind===`catalog`){let n=ec(e.catalog);return n?{kind:`catalog`,agentId:t,catalog:n}:null}return null}function nc(){try{let e=globalThis.sessionStorage?.getItem(sc);if(!e)return[];let t=JSON.parse(e);return Array.isArray(t)?t.filter(e=>typeof e==`string`&&e.length>0):[]}catch{return[]}}function rc(e){try{globalThis.sessionStorage?.setItem(sc,JSON.stringify(e))}catch{}}function ic(e){rc(e.filter(e=>e.status===`live`&&e.gatewaySessionId).map(e=>e.gatewaySessionId))}function ac(){try{let e=globalThis.sessionStorage?.getItem(cc);if(!e)return[];let t=JSON.parse(e);return Array.isArray(t)?t.flatMap(e=>{let t=tc(e);return t?[t]:[]}):[]}catch{return[]}}function oc(e){try{if(e.length===0){globalThis.sessionStorage?.removeItem(cc);return}globalThis.sessionStorage?.setItem(cc,JSON.stringify(e))}catch{}}var sc,cc;function lc(){return(lc=e((()=>{sc=`openclaw.terminal.sessions.v1`,cc=`openclaw.terminal.actions.v1`})))()}function uc(e,t){let n=e instanceof CustomEvent&&typeof e.detail==`object`&&e.detail!==null?e.detail:null;if(!n||n.open===!1)return null;let r=n.agentId?.trim()||t;return n.terminalSessionId?{kind:`attach`,sessionId:n.terminalSessionId,agentOwned:n.agentOwned??!0}:n.catalog?{kind:`catalog`,agentId:r,catalog:n.catalog}:n.open===!0?{kind:`restore`,agentId:r}:null}var dc,fc,pc;function mc(){return(mc=e((()=>{Qs(),lc(),dc=class{constructor(){this.action=null}remember(e,t){this.action=e?{kind:`catalog`,agentId:t,catalog:e}:{kind:`open`,agentId:t}}clearUnlessRetryable(e){e instanceof Ys||e instanceof Xs||this.clear()}clear(){this.action=null}get available(){return this.action!==null}run(){let e=this.action;this.clear(),e&&pc.queue(e)}},fc=class{constructor(){this.refreshPending=!1,this.refreshTimedOut=!1,this.refreshTimer=null,this.drainScheduled=!1,this.hosts=[],this.fenceHost=null,this.fenceGeneration=0,this.timeoutHost=null,this.actions=[],this.rehydrate()}rehydrate(){let e=ac(),t=e.some(e=>e.kind!==`restore`)?e.filter(e=>e.kind!==`restore`):e;this.actions.splice(0,this.actions.length,...t),t.length!==e.length&&oc(this.actions)}get host(){return this.hosts.at(-1)??null}bindHost(e){this.hosts.length===0&&this.rehydrate(),this.hosts=[...this.hosts.filter(t=>t!==e),e],this.drain()}releaseHost(e){this.hosts=this.hosts.filter(t=>t!==e),this.fenceHost===e&&this.resetLifecycle(e),this.hosts.length===0&&(this.clearRefreshTimer(),this.refreshTimedOut=!1,this.timeoutHost=null,this.rehydrate())}get hasActions(){return this.actions.length>0}get fenced(){return this.refreshPending}get waitingForRefresh(){return this.refreshPending&&!this.refreshTimedOut&&this.actions.length>0}beginRefreshFence(e,t){this.refreshPending=!0,this.fenceHost=e,this.fenceGeneration=t,this.clearRefreshFailure(),this.clearRefreshTimer(),this.armRefreshTimer()}releaseRefreshFence(e){this.fenceHost===e&&(this.clearRefreshTimer(),this.refreshPending=!1,this.fenceHost=null,this.clearRefreshFailure(),this.drain())}resetLifecycle(e){(this.fenceHost===null||this.fenceHost===e)&&(this.clearRefreshTimer(),this.refreshPending=!1,this.fenceHost=null,this.clearRefreshFailure())}async queue(e,t={}){let n=!1;if(e.kind!==`restore`)for(let e=this.actions.length-1;e>=0;--e)this.actions[e]?.kind===`restore`&&(this.actions.splice(e,1),n=!0);let r=this.actions.some(e=>e.kind!==`restore`),i=JSON.stringify(e);if(!(e.kind===`restore`&&r)&&!this.actions.some(e=>JSON.stringify(e)===i)&&(this.actions.push(e),n=!0),n&&oc(this.actions),t.deferUntilHostChange)return;this.armRefreshTimer();let a=this.host;this.refreshPending?a?.requestUpdate():a&&!a.hasTabs()&&a.setBooting(!0),await this.drain()}async drain(){let e=this.host;if(!(this.drainScheduled||this.actions.length===0||!e||!this.canRun(e))){this.drainScheduled=!0;try{await e.bootQueue.enqueue(async t=>{let n=this.actions[0];if(!n||!t()||!this.canRun(e)||!await this.execute(e,n)||!t())return;let r=this.actions.indexOf(n);r!==-1&&(this.actions.splice(r,1),oc(this.actions))})}finally{this.drainScheduled=!1;let e=this.host;this.actions.length>0&&e&&this.canRun(e)?this.drain():this.actions.length===0&&e&&!e.hasTabs()&&e.setBooting(!1)}}}cancel(e){this.host===e&&(this.actions.splice(0),oc(this.actions),e.setBooting(!1),this.clearRefreshFailure())}canRun(e){return!this.refreshPending&&e.canRun()}async execute(e,t){return t.kind===`attach`?e.attach(t.sessionId,t.agentOwned):t.kind===`open`?e.open(void 0,t.agentId):(await e.reattach(),this.canRun(e)?t.kind===`catalog`?e.open(t.catalog,t.agentId):e.ensureInitial(t.agentId):!1)}clearRefreshTimer(){this.refreshTimer!==null&&(globalThis.clearTimeout(this.refreshTimer),this.refreshTimer=null)}clearRefreshFailure(){this.refreshTimedOut&&=(this.timeoutHost?.clearTimeout(),this.timeoutHost=null,!1)}armRefreshTimer(){let e=this.fenceHost;if(!this.refreshPending||!e||this.refreshTimer!==null||this.actions.length===0)return;let t=this.fenceGeneration;this.refreshTimer=globalThis.setTimeout(()=>{this.refreshTimer=null,!(this.fenceHost!==e||t!==e.currentGeneration()||!this.refreshPending||this.actions.length===0)&&(this.refreshTimedOut=!0,this.timeoutHost=e,e.showTimeout(),e.setBooting(!1))},e.timeoutMs())}},pc=new fc})))()}function hc(e){try{return e.getItem(vc)===null&&(e.setItem(vc,`1`),!0)}catch{return!1}}function gc(){return Array.from({length:xc},(e,t)=>({color:yc[t%yc.length]??yc[0],angle:-Math.PI*(.2+Math.random()*.6),speed:260+Math.random()*360,size:4+Math.random()*5,spin:(Math.random()-.5)*12,rotation:Math.random()*Math.PI}))}function _c(){if(typeof document>`u`||typeof window>`u`||!document.body||typeof window.requestAnimationFrame!=`function`||window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches)return;let e;try{e=window.localStorage}catch{return}if(!hc(e))return;let t=document.createElement(`canvas`);t.setAttribute(`aria-hidden`,`true`),Object.assign(t.style,{position:`fixed`,inset:`0`,width:`100vw`,height:`100vh`,pointerEvents:`none`,zIndex:`2147483647`});let n=t.getContext(`2d`);if(!n)return;document.body.append(t);let r=Math.min(2,Math.max(1,window.devicePixelRatio||1)),i=window.innerWidth,a=window.innerHeight;t.width=Math.round(i*r),t.height=Math.round(a*r),n.setTransform(r,0,0,r,0,0);let o=gc(),s={x:i/2,y:a*.62},c=performance.now(),l=e=>{let r=e-c,u=r/1e3,d=r/bc;n.clearRect(0,0,i,a),n.globalAlpha=d<.65?1:Math.max(0,(1-d)/.35);for(let e of o){let t=Math.max(0,1-u*.22),r=s.x+Math.cos(e.angle)*e.speed*u*t,i=s.y+Math.sin(e.angle)*e.speed*u+420*u*u;n.save(),n.translate(r,i),n.rotate(e.rotation+e.spin*u),n.fillStyle=e.color,n.fillRect(-e.size/2,-e.size/4,e.size,e.size/2),n.restore()}d<1?window.requestAnimationFrame(l):t.remove()};window.requestAnimationFrame(l)}var vc,yc,bc,xc;function Sc(){return(Sc=e((()=>{vc=`openclaw.confetti.firstReply`,yc=[`#ff4d4d`,`#ff7079`,`#00e5cc`,`#f2a833`],bc=1500,xc=64})))()}function Cc(e){let t=i(e);if(t===void 0)return null;let n=t-Date.now();if(n<=0)return`now`;let r=Math.floor(n/6e4);if(r<1)return`<1m`;if(r<60)return`${r}m`;let a=Math.floor(r/60),o=r%60;if(a<24)return o>0?`${a}h ${o}m`:`${a}h`;let s=Math.floor(a/24);if(s<7){let e=a%24;return e>0?`${s}d ${e}h`:`${s}d`}return new Date(t).toLocaleDateString(void 0,{month:`short`,day:`numeric`})}function wc(e){return Math.max(0,Math.min(100,Math.round(e)))}function Tc(e,t){let n=[];for(let r of(e?.providers??[]).filter(t)){let e=r.usage;if(!e)continue;let t=(e.windows??[]).map(e=>{let t={label:(e.label||``).trim(),usedPercent:wc(e.usedPercent)};return e.resetAt!==void 0&&(t.resetAt=e.resetAt),t}),i=(e.billing??[]).flatMap(e=>{if(e.type!==`budget`||!Number.isFinite(e.used)||!Number.isFinite(e.limit)||e.used<0||e.limit<=0)return[];let t={used:e.used,limit:e.limit,unit:e.unit};return e.label&&(t.label=e.label),[t]});if(t.length===0&&i.length===0)continue;let a=[...new Set([r.provider,e.providerId].filter(e=>!!e))],o=JSON.stringify([r.displayName,e.accountEmail??null,t,i]),s=n.find(e=>e.identity===o);if(s){for(let e of a)s.group.providers.includes(e)||s.group.providers.push(e);continue}n.push({identity:o,group:{providers:a,displayName:r.displayName,...e.plan?{plan:e.plan}:{},...e.accountEmail?{accountEmail:e.accountEmail}:{},windows:t,budgets:i}})}return n.map(e=>e.group)}function Ec(){return(Ec=e((()=>{u()})))()}function Dc(e,t,n,r,i){if(!(e instanceof HTMLDetailsElement))return;let a=i?.activeRunId??null,o=i?.completedRunId??null,s=Gc.get(e);if(!s||s.sessionKey!==t){e.open=n,Gc.set(e,{activeRunId:a,handledCompletedRunId:o,sessionKey:t});return}a&&a!==s.activeRunId&&(s.activeRunId=a,s.handledCompletedRunId=null,r&&(e.open=!1)),o&&o===s.activeRunId&&o!==s.handledCompletedRunId&&(s.handledCompletedRunId=o,r&&(e.open=!0))}function Oc(e){let t=e.steps;return t?.length?{completed:t.filter(e=>e.status===`completed`).length,total:t.length}:null}function kc(e){return e.find(e=>e.status===`in_progress`)??e.find(e=>e.status===`pending`)}function Ac(e,t){let n=i(t),r=i(e.updatedAt);return n!==void 0&&r!==void 0&&r<n}function jc(e,t,n,r=!0){let i=e?Ac(e,n):!1;if(t&&Q[t]&&!i)return null;let a=e?Oc(e):null;if(!a||!e?.steps)return null;let o=kc(e.steps);if(!o)return null;let s=o.status===`in_progress`&&(i||!r)?`paused`:o.status;return{...a,status:s,step:o.step}}function Mc(e){return kc(e)??e.findLast(e=>e.status===`completed`)}function Nc(e,t){if(e===`in_progress`&&t===`done`)return O.check;if(e===`in_progress`&&(t===`failed`||t===`timeout`||t===`killed`))return O.circleX;switch(e){case`completed`:return O.check;case`in_progress`:return C`<span class="session-run-spinner"></span>`;case`paused`:case`pending`:return O.clock}return e}function Pc(e){let t=Mc(e),n=t?e.indexOf(t):-1;return Math.max(1,n+1)}function Fc(e){let t=document.createElement(`template`);t.innerHTML=e;let n=t.content.querySelector(`progress`);if(!n)return e;let r=n.getAttribute(`value`)?.trim(),i=n.getAttribute(`max`)?.trim(),a=n.getAttribute(`aria-label`)?.trim()||(r&&i?`${k(`sessionProgressCard.title`)} · ${r}/${i}`:k(`sessionProgressCard.title`));n.setAttribute(`aria-label`,a);let o=n.parentElement,s=document.createElement(`div`);s.className=`session-progress-card__progress`;let c=document.createElement(`span`);return c.className=`session-progress-card__progress-label`,c.textContent=a,s.append(c,n),o?.tagName===`P`&&o.children.length===0&&!o.textContent?.trim()&&o.remove(),t.content.prepend(s),t.innerHTML}function Ic(e,t={}){if(!e)return w;let n=ot(e,{progressBars:!0});return C`<div class="session-progress-card__markdown sidebar-markdown">
    ${Ne(t.promoteProgress?Fc(n):n)}
  </div>`}function Lc(e,t,n){let r=e.steps;return r?.length?C`<ol class="session-progress-card__steps">
    ${r.map(e=>{let r=e.status===`in_progress`&&n?Hc[n]:void 0,i=e.status===`in_progress`&&!t&&!r?`paused`:e.status,a=k(r??(i===`paused`?`sessionProgressCard.status.paused`:Bc[i]));return C`<li
        class="session-progress-card__step session-progress-card__step--${i}"
        aria-label=${k(`sessionProgressCard.stepLabel`,{status:a,step:e.step})}
      >
        <span
          class="session-progress-card__step-marker"
          data-status=${i}
          data-outcome=${r?n:w}
          aria-hidden="true"
          >${Nc(i,n)}</span
        >
        <span class="session-progress-card__step-text">${e.step}</span>
      </li>`})}
  </ol>`:w}function Rc(e,t,n){return C`<div class="session-progress-card__body">
    ${Ic(e.markdown)} ${Lc(e,t,n)}
  </div>`}function zc(e,t,n,r,a,o,s=!0,c=!1,l){if(!e)return w;let u=Oc(e),d=u?k(`sessionProgressCard.countLabel`,{completed:String(u.completed),total:String(u.total)}):k(`sessionProgressCard.noteLabel`),f=i(a),p=i(o),m=i(e.updatedAt),h=f!==void 0&&p!==void 0&&p>=f&&m!==void 0&&m>=f,g=s&&!Ac(e,a),_=r&&Q[r]&&h?p:void 0,v=r&&Q[r]&&!_?void 0:r,ee=_??m??Date.now(),te=_?Vc[r]:`sessionProgressCard.activity.updated`,ne=d,y=Wc(ee,te),re=n&&e.steps?.length&&e.steps.every(e=>e.status===`completed`)?C`<button
        class="rail-header__action session-progress-card__dismiss"
        type="button"
        aria-label=${k(`sessionProgressCard.dismiss`)}
        title=${k(`sessionProgressCard.dismiss`)}
        @click=${t=>{t.preventDefault(),t.stopPropagation(),n?.(e)}}
      >
        ${O.x}
      </button>`:w;if(t===`composer`){let t=e.steps??[],n=Mc(t),r=Pc(t),i=t.length>0&&t.every(e=>e.status===`completed`),a=u?k(`sessionProgressCard.countLabel`,{completed:String(u.completed),total:String(u.total)}):k(`sessionProgressCard.noteLabel`),o=n?.step??k(`sessionProgressCard.noteLabel`),s=v?Q[v]:void 0,f=`${o}. ${s?k(s):d}`,p=u?k(`sessionProgressCard.shortCount`,{completed:String(r),total:String(u.total)}):w,m=n?.status===`in_progress`&&!g&&!s?`paused`:n?.status,h=v===`done`?O.check:v===`failed`||v===`timeout`||v===`killed`?O.circleX:i?O.check:n?.status===`in_progress`?Nc(m??`pending`):O.clock;return C`<details
      class="session-progress-card session-progress-card--composer"
      data-progress-card-placement="composer"
      data-complete=${String(i)}
      ${Ae(t=>Dc(t,e.sessionKey,!i&&!c,c,l))}
    >
      <summary class="session-progress-card__summary" aria-label=${f}>
        <span
          class="session-progress-card__summary-indicator session-progress-card__current-marker${i||v===`done`?` session-progress-card__summary-indicator--complete`:``}"
          data-status=${m??`pending`}
          data-outcome=${v??w}
          aria-hidden="true"
        >
          ${h}
        </span>
        <span class="session-progress-card__summary-collapsed">
          <span class="session-progress-card__current">${o}</span>
        </span>
        ${u?C`<span
                class="session-progress-card__summary-count session-progress-card__summary-count--collapsed"
                data-outcome=${v??w}
                >${s?k(s):`${r}/${u.total}`}</span
              >`:w}
        <span class="session-progress-card__summary-expanded">
          <span class="session-progress-card__summary-title"
            >${k(`sessionProgressCard.composerTitle`)}</span
          >
          <span class="session-progress-card__heading-actions"
            ><span>${y}${u?C` · ${p}`:w}</span
            >${re}</span
          >
        </span>
        <span
          class="session-progress-card__summary-chevron session-progress-card__chevron"
          aria-hidden="true"
          >${O.chevronDown}</span
        >
      </summary>
      <div class="session-progress-card__body" role="region" aria-label=${a}>
        ${Ic(e.markdown)}
        ${Lc(e,g,v)}
      </div>
    </details>`}return C`<section
    class="session-progress-card session-progress-card--${t}"
    data-progress-card-placement=${t}
    aria-label=${ne}
  >
    <div class="session-progress-card__heading">
      <span>${k(`sessionProgressCard.title`)}</span>
      <span class="session-progress-card__heading-actions">
        <span
          >${y}${u?C` · ${u.completed}/${u.total}`:w}</span
        >${re}
      </span>
    </div>
    ${Rc(e,g,v)}
  </section>`}var Bc,Vc,Q,Hc,Uc,Wc,Gc;function Kc(){return(Kc=e((()=>{u(),S(),Me(),Te(),Oe(),Pe(),D(),he(),Ve(),at(),Bc={completed:`sessionProgressCard.status.completed`,in_progress:`sessionProgressCard.status.inProgress`,pending:`sessionProgressCard.status.pending`},Vc={queued:`sessionProgressCard.activity.updated`,running:`sessionProgressCard.activity.updated`,done:`sessionProgressCard.activity.completed`,failed:`sessionProgressCard.activity.failed`,killed:`sessionProgressCard.activity.stopped`,timeout:`sessionProgressCard.activity.failed`},Q={done:`sessionProgressCard.outcome.completed`,failed:`sessionProgressCard.outcome.failed`,killed:`sessionProgressCard.outcome.stopped`,timeout:`sessionProgressCard.outcome.failed`},Hc={done:`sessionProgressCard.status.completed`,failed:`sessionProgressCard.status.failed`,killed:`sessionProgressCard.status.stopped`,timeout:`sessionProgressCard.status.failed`},Uc=class extends Fe{constructor(...e){super(...e),this.timestamp=0,this.labelKey=`sessionProgressCard.activity.updated`}render(e,t){return this.timestamp=e,this.labelKey=t,this.isConnected&&this.startTimer(),this.renderTime()}disconnected(){this.stopTimer()}reconnected(){this.setValue(this.renderTime()),this.startTimer()}startTimer(){this.timer||=setInterval(()=>this.setValue(this.renderTime()),3e4)}stopTimer(){this.timer&&=(clearInterval(this.timer),void 0)}renderTime(){let e=k(this.labelKey,{time:be(this.timestamp)});return C`<time
      datetime=${new Date(this.timestamp).toISOString()}
      aria-label=${e}
      title=${e}
      >${e}</time
    >`}},Wc=De(Uc),Gc=new WeakMap})))()}function qc(e){if(typeof e==`boolean`)return e;let t=f(e)?.enabled;return typeof t==`boolean`?t:void 0}function Jc(e,t){let n=f(e),r=qc(f(n?.tools)?.swarm),i=f(n?.agents),a=f(i?.entries),o=t?h(t):null,s=o?Object.keys(a??{}).find(e=>h(e)===o):null,c=s?f(a?.[s]):null;return qc(f(c?.tools)?.swarm)??r??!0}function Yc(e,t){return(e.updatedAt??0)>=(t.updatedAt??0)}function $(e,t){let n=new Map;for(let r of[...e,...t]){let e=n.get(r.key);(!e||Yc(r,e))&&n.set(r.key,r)}return[...n.values()]}async function Xc(e){let t=await Zt({sessions:e.sessions,parentKey:e.parentKey,isCurrent:e.isCurrent,pageSize:Zc});return t?$(e.currentRows,t):null}var Zc,Qc;function $c(){return($c=e((()=>{ze(),Xt(),b(),Zc=1e4,Qc=class{constructor(){this.rows=[],this.key=``,this.revision=-1,this.generation=0,this.attemptRevision=-1,this.attempts=0,this.currentRowsByKey=new Map,this.timer=null}update(e){let t=`${e.sourceEpoch}:${e.agentId??``}:${e.parentKey}`;this.key!==t&&this.reset(t);let n=e.currentRows().filter(t=>!se(t.key,e.parentKey)),r=new Map(n.map(e=>[e.key,JSON.stringify(e)]));this.rows=$(this.rows,n.filter(e=>this.currentRowsByKey.get(e.key)!==r.get(e.key))),this.currentRowsByKey=r,e.onRows(this.rows);let i=e.sessions.canonicalListRevision;this.attemptRevision!==i&&(this.attemptRevision=i,this.attempts=0),this.revision!==i&&this.timer===null&&(this.timer=setTimeout(()=>this.hydrate(e),250))}dispose(){this.reset(``)}hydrate(e){let t=++this.generation,n=e.sessions.canonicalListRevision,r=`${e.sourceEpoch}:${e.agentId??``}:${e.parentKey}`,i=()=>t===this.generation&&this.key===r,a=e.currentRows().filter(t=>!se(t.key,e.parentKey)),o=new Map(a.map(e=>[e.key,JSON.stringify(e)])),s=!1,c=!1;this.attempts+=1;let l=()=>{c=!0,this.revision=-1;let t=Math.min(3e4,1e3*2**Math.min(this.attempts-1,5));this.timer=setTimeout(()=>{this.timer=null,i()&&this.update(e)},t)},u=Xc({sessions:e.sessions,parentKey:e.parentKey,currentRows:a,isCurrent:i}).catch(()=>null);e.readParent().then(t=>{i()&&(s=!0,this.revision=n,this.rows=t?$(this.rows,[t]):[],e.onRows(this.rows),t&&u.then(n=>{if(!i())return;let r=e.currentRows().filter(t=>!se(t.key,e.parentKey)&&o.get(t.key)!==JSON.stringify(t));this.rows=n?$($(n,[t]),r):[t],e.onRows(this.rows),n||l()}))}).catch(t=>{i()&&(t instanceof E&&t.code===`INVALID_REQUEST`&&(this.rows=[],e.onRows(this.rows)),l())}).finally(()=>{i()&&(c||(this.timer=null),s&&this.revision!==e.sessions.canonicalListRevision&&this.update(e))})}reset(e){this.timer!==null&&clearTimeout(this.timer),this.rows=[],this.currentRowsByKey.clear(),this.key=e,this.revision=-1,this.generation+=1,this.attemptRevision=-1,this.attempts=0,this.timer=null}}})))()}function el(e){let t=new Map,n=e.snapshot.client,r=null,i=null,a=null,o=0,s=0,c=()=>t.size>0,l=()=>{let n=e.snapshot.hello,r=new Set;for(let e of t.values())for(let t of e){let e=Se(t,n).trim();e&&r.add(e)}return[...r].toSorted().slice(0,32)},u=en(e,{sync:f,onAttach:()=>{n=e.snapshot.client,r=null,i=null,a=null,o=0},onDetach:()=>{s+=1,r=null,i=null,a=null,o=0}}),{retry:d}=u;function f(){let t=e.snapshot,f=t.client;if(f!==n&&(d.reset(),n=f,r=null,i=null,a=null,o=0),t.phase!==`connected`||f===null||t.hello===null||Xe(t,nl)!==!0){r=null,i=null,a=null,o=0,c()||u.detach();return}let p=typeof document<`u`&&document.visibilityState===`hidden`?[]:l(),m=p.some(e=>!e.startsWith(`agent:`))?t.assistantAgentId:void 0,h=JSON.stringify({agentId:m,sessionKeys:p});if(t.hello===r&&h===i){!c()&&a===h&&o===s&&u.detach();return}r=t.hello,i=h;let g=++s,_=()=>u.attached&&g===s&&t.hello===r&&h===i;d.cancel(),f.request(nl,{...m?{agentId:m}:{},sessionKeys:p}).then(()=>{_()&&(a=h,o=g,d.reset(),c()||u.detach())}).catch(()=>{_()&&(i=null,d.schedule(u.schedule))})}let p=(e,n)=>{let r=new Set(n.map(e=>e.trim()).filter(Boolean)),i=t.get(e);(i===void 0?r.size===0:i.size===r.size&&[...r].every(e=>i.has(e)))||(r.size===0?t.delete(e):t.set(e,r),d.reset(),c()?(u.attach(),u.schedule()):u.attached&&u.sync())};return{watch:p,unwatch:e=>p(e,[])}}function tl(e){let t=rl.get(e);if(t)return t;let n=el(e);return rl.set(e,n),n}var nl,rl;function il(){return(il=e((()=>{Ze(),$t(),ye(),nl=`sessions.viewers.set`,rl=new WeakMap})))()}export{rs as $,Cr as $n,oa as $t,Ls as A,di as An,yo as At,ys as B,$r as Bn,Ra as Bt,ic as C,ti as Cn,Do as Ct,Qs as D,Xr as Dn,To as Dt,Xs as E,pi as En,ho as Et,js as F,Qr as Fn,$a as Ft,ds as G,Hr as Gn,La as Gt,ms as H,ci as Hn,Da as Ht,Ms as I,Yr as In,Qa as It,cs as J,Fr as Jn,va as Jt,ps as K,zr as Kn,ka as Kt,ks as L,ri as Ln,Xa as Lt,Is as M,oi as Mn,ao as Mt,Ps as N,ei as Nn,ro as Nt,zs as O,li as On,So as Ot,Ns as P,qr as Pn,to as Pt,as as Q,Sr as Qn,aa as Qt,As as R,fi as Rn,Za as Rt,nc as S,Gr as Sn,Oo as St,Ys as T,Zr as Tn,bo as Tt,gs as U,Jr as Un,Aa as Ut,Ss as V,ii as Vn,ja as Vt,us as W,Br as Wn,ba as Wt,ns as X,jr as Xn,ga as Xt,Zo as Y,_r as Yn,_a as Yt,Qo as Z,xr as Zn,ca as Zt,dc as _,Ci as _n,Lo as _t,$c as a,Zi as an,cn as ar,Xo as at,uc as b,vi as bn,Ao as bt,Kc as c,Pi as cn,on as cr,J as ct,zc as d,Bi as dn,Go as dt,sa as en,gr as er,ts as et,Tc as f,Ni as fn,Ho as ft,Sc as g,wi as gn,zo as gt,_c as h,Ei as hn,Bo as ht,Xc as i,Yi as in,pn as ir,X as it,Fs as j,si as jn,oo as jt,Rs as k,gi as kn,xo as kt,jc as l,Mi as ln,Yo as lt,Ec as m,Ti as mn,Vo as mt,tl as n,ta as nn,$n as nr,is as nt,Jc as o,Xi as on,dn as or,Jo as ot,Cc as p,Di as pn,Wo as pt,os as q,Ir as qn,ya as qt,Qc as r,ea as rn,mn as rr,$o as rt,$ as s,Fi as sn,sn as sr,qo as st,il as t,fa as tn,fr as tr,es as tt,Ic as u,ji as un,Uo as ut,mc as v,_i as vn,No as vt,Zs as w,ni as wn,so as wt,lc as x,yi as xn,ko as xt,pc as y,Si as yn,Io as yt,Os as z,ui as zn,Ba as zt};
//# sourceMappingURL=control-ui-boot-chat-pu3gR1ly.js.map