import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./control-ui-core-DzidtL-P.js";import{$ as n,B as r,I as i,J as a,K as o,L as s,M as c,N as l,V as u,X as d,Y as f,Z as p,at as m,dt as h,j as g,k as _,lt as v,mt as y,nt as b,st as x,ut as S,z as C}from"./lit-runtime-vxhGQLC6.js";function w(){return(w=e((()=>{(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})()})))()}var T,E,ee;function D(){return(D=e((()=>{v(),p(),T=globalThis,E=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=a(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return f}},E._$litElement$=!0,E.finalized=!0,T.litElementHydrateSupport?.({LitElement:E}),ee=T.litElementPolyfillSupport,ee?.({LitElement:E}),(T.litElementVersions??=[]).push(`4.2.2`)})))()}function O(e){let t=e?.trim()??``;if(!t||t===`/`)return``;let n=t.startsWith(`/`)?t:`/${t}`;return n.endsWith(`/`)?n.slice(0,-1):n}function k(){return(k=e((()=>{})))()}var A,j;function te(){return(te=e((()=>{A=`data-openclaw-control-ui-build-id`,j=[`apple-touch-icon.png`,`favicon-32.png`,`favicon.ico`,`favicon.svg`,`manifest.webmanifest`,`sw.js`]})))()}function ne(e){return typeof e==`string`?e:void 0}function re(e){return typeof e==`string`&&e.trim()||null}function M(e){return re(e)??void 0}function ie(e){return typeof e==`string`&&e.trim()?e:void 0}function ae(e){return M(e)?.toLowerCase()}function oe(e){return ae(e)??``}function se(e){return M(e)!==void 0}function ce(){return(ce=e((()=>{})))()}function le(e){return(e??[]).map(e=>M(String(e))??``).filter(Boolean)}function ue(e){return[...new Set(e)]}function de(e){return ue(e)}function fe(e){return de(e).sort()}function pe(e){return Array.isArray(e)?e.flatMap(e=>{let t=M(e);return t?[t]:[]}):[]}function me(e){return de(pe(e))}function he(e){return fe(pe(e))}function ge(e){let t=pe(e);return t.length>0?t:void 0}function _e(e){if(Array.isArray(e))return pe(e)}function ve(e){if(Array.isArray(e))return pe(e);let t=M(e);return t?[t]:[]}function ye(e){return de(ve(e))}function be(e){return Array.isArray(e)?le(e):typeof e==`string`?e.split(`,`).map(e=>e.trim()).filter(Boolean):[]}function xe(e){return(ae(e)??``).normalize(`NFC`)}function Se(e){let t=xe(e);return t?t.replace(/^[@#]+/,``).replace(/[\s_]+/g,`-`).replace(/[^\p{L}\p{M}\p{N}-]+/gu,`-`).replace(/-{2,}/g,`-`).replace(/^-+|-+$/g,``):``}function Ce(){return(Ce=e((()=>{})))()}function we(e){return{ok:!0,value:e}}function Te(e){return{ok:!1,error:e}}function Ee(){return(Ee=e((()=>{})))()}function De(e){let t=Oe(e);return t.ok?t.value:ke}function Oe(e){let t=(e??``).trim(),n=oe(t);if(Ae.test(t))return we(n);let r=n.replace(je,`-`).replace(Me,``).replace(Ne,``).slice(0,64);return r?we(r):Te(`unrepresentable`)}var ke,Ae,je,Me,Ne;function Pe(){return(Pe=e((()=>{ke=`main`,Ae=/^[a-z0-9][a-z0-9_-]{0,63}$/i,je=/[^a-z0-9_-]+/g,Me=/^-+/,Ne=/-+$/})))()}function Fe(e){if(e.slice(0,6).toLowerCase()!==`agent:`)return null;let t=e.indexOf(`:`,6);if(t===-1)return null;let n=e.slice(6,t).trim(),r=e.slice(t+1);return n&&r&&!r.startsWith(`:`)?{agentId:n,rest:r}:null}function Ie(e){return oe(e)||`main`}function Le(e){return`agent:${De(e.agentId)}:${Ie(e.mainKey)}`}var Re;function ze(){return(ze=e((()=>{Pe(),Re=`main`})))()}function Be(e){return((e??``).toLowerCase().replace(/[^a-z0-9]+/gu,`-`).replace(/^-+|-+$/gu,``).match(/^.*[g-z][a-z0-9]*/u)?.[0]??``).slice(0,Ke).replace(/-+$/gu,``)}function Ve(e){let t=e?.trim().replace(/^\/+|\/+$/gu,``)??``;return t?`/${t}`:``}function He(e,t){let n=e.toLowerCase(),r=re(t)?.toLowerCase()??`main`;return Ge.has(n)||n===r}function Ue(e){let t=e.match(We)?.[1]?.toLowerCase();if(!t)return null;let n=e.slice(0,e.length-t.length).replace(/-+$/u,``);return n?{shortId:t,slugHint:n}:{shortId:t}}var We,Ge,Ke;function qe(){return(qe=e((()=>{ze(),We=/^(?:.*-)?([0-9a-f]{8,32})$/iu,Ge=new Set([`main`,`global`,`boot`,`sessions`]),Ke=48})))()}function Je(e){let t=e.trim(),n=t.startsWith(`/`)?t:`/${t}`;return n.length>1?n.replace(/\/+$/u,``):n}function Ye(e){let t=[e.indexOf(`?`),e.indexOf(`#`)].filter(e=>e>=0).reduce((e,t)=>Math.min(e,t),e.length);return{pathname:e.slice(0,t),suffix:e.slice(t)}}function Xe(e){return e&&e.trim()?e:null}function Ze(e){try{return{ok:!0,value:Xe(decodeURIComponent(e))}}catch{return{ok:!1}}}function Qe(e){let t=Je(e).split(`/`).filter(Boolean),n=t.flatMap((e,t)=>e===nt.slice(1)?[t]:[]);if(n.length===0)return null;let r=e=>{let n=t.slice(e+1);if(n[0]===`terminal`)return n.length===1;if(n[0]===`dashboard`)return n.length>=2;if(n[0]!==`desktop`)return!1;let r=n[1]===`control`?2:1;return n.length===r||n.length===r+2&&(n[r]===`source`||n[r]===`session`)},i=n.at(-1)??0;for(let e=n.length-1;e>=0;--e){let t=n[e];if(t!==void 0&&r(t)){i=t;break}}return Ve(t.slice(0,i).join(`/`))}function $e(e,t=``){let n=Je(e),r=`${Ve(t)}${nt}`;return n===r||n.startsWith(`${r}/`)}function et(e,t=``){let n=Ve(t),r=`${n}${nt}`;if(e.kind===`terminal`)return`${r}/terminal`;if(e.kind===`desktop`){let t=e.control===!0?`/control`:``,n=Xe(e.source),i=Xe(e.session);return`${r}/desktop${t}${n?`/source/${encodeURIComponent(n)}`:i?`/session/${encodeURIComponent(i)}`:``}`}let{pathname:i,suffix:a}=Ye(e.path),o=Je(i),s=`${n}/dashboard/`;return o.startsWith(s)?`${r}${o.slice(n.length)}${a}`:null}function tt(e,t){let n=typeof e==`string`?e:e.pathname,r=typeof e==`string`?``:e.search??``,i=typeof e==`string`?``:e.hash??``,a=Je(n),o=t===void 0?Qe(a):Ve(t);if(o===null||!$e(a,o))return null;let s=`${o}${nt}`,c=a.slice(s.length+1);if(c===`terminal`)return{status:`valid`,basePath:o,target:{kind:`terminal`}};if(c.startsWith(`dashboard/`)&&c.length>10)return{status:`valid`,basePath:o,target:{kind:`dashboard`,route:{pathname:`${o}/${c}`,search:r,hash:i}}};let l=c.split(`/`);if(l[0]!==`desktop`)return{status:`unsupported`,basePath:o};let u=1,d=l[u]===`control`;if(d&&(u+=1),l.length===u)return{status:`valid`,basePath:o,target:{kind:`desktop`,control:d,selector:null}};let f=l[u],p=l[u+1];if(l.length!==u+2||f!==`source`&&f!==`session`||p===void 0)return{status:`unsupported`,basePath:o};let m=Ze(p);return m.ok?m.value?{status:`valid`,basePath:o,target:{kind:`desktop`,control:d,selector:{kind:f,value:m.value}}}:{status:`valid`,basePath:o,target:{kind:`desktop`,control:d,selector:null}}:{status:`unsupported`,basePath:o}}var nt;function rt(){return(rt=e((()=>{qe(),nt=`/focus`})))()}function it(e){return st.includes(e.toLowerCase())}function at(e){let t=`${Ve(e.basePath)}/`;if(!e.pathname.startsWith(t))return null;let n=ot.exec(e.pathname.slice(t.length));return!n||it(n[1])?null:{routeSegment:n[1],shortId:n[2]}}var ot,st;function ct(){return(ct=e((()=>{qe(),ot=/^([a-z][a-z0-9-]*)\/(?:[a-z0-9]+-)*([a-zA-Z0-9]{12,})$/u,st=Object.freeze(`activity.agents.ai-agents.appearance.approve.apps.ask.automation.automations.channels.chat.communications.config.cron.custodian.dashboard.dashboards.debug.focus.infrastructure.lobsterdex.logs.mcp.meetings.memory-import.model-providers.model-setup.new.nodes.plugin.portals.profile.sessions.settings.share.skills.tasks.usage.workboard.worktrees`.split(`.`))})))()}function lt(e){let t=Fe(e);return!t||t.rest.split(`:`).some(e=>!e)?null:{agentId:De(t.agentId),rest:t.rest}}function ut(e){if(e===`.`)return`~dot`;if(e===`..`)return`~dotdot`;let t=encodeURIComponent(e).replaceAll(`.`,`%2E`);return t.startsWith(`~`)?`~${t}`:t}function dt(e){let t=re(e.sessionKey),n=t?lt(t):null,r=re(e.fallbackAgentId),i=n?.agentId??(r?De(r):null);if(!t||!i||!n&&t.toLowerCase().startsWith(`agent:`))return null;let a=`${Ve(e.basePath)}/${e.namespace}`,o=ut(i),s=n?.rest??t,c=s.toLowerCase();if(c===(re(e.mainKey)?.toLowerCase()??`main`)||!n&&(c===`main`||c===`global`))return`${a}/${o}`;let l=s.split(`:`);if(l.some(e=>!e))return null;if(e.exactKey||c===`global`){let t=l[0]??``;return l.length===1&&(He(t,e.mainKey)||Ue(t))?`${a}/${o}/~key/${ut(t)}`:`${a}/${o}/${l.map(ut).join(`/`)}`}let u=(n?.rest.match(ft)?.[1])?.toLowerCase().replaceAll(`-`,``)??null;if(u){let t=e.shortIdLength??8,n=Math.min(u.length,Math.max(8,Math.floor(t))),r=Be(e.displayName),i=`${r?`${r}-`:``}${u.slice(0,n)}`;for(;n<u.length&&He(i,e.mainKey);)n+=1,i=`${r?`${r}-`:``}${u.slice(0,n)}`;return He(i,e.mainKey)?null:`${a}/${o}/${i}`}if(l.length===1){let t=l[0]??``;if(!He(t,e.mainKey)&&Ue(t))return`${a}/${o}/~key/${ut(t)}`}return`${a}/${o}/${l.map(ut).join(`/`)}`}var ft,pt;function mt(){return(mt=e((()=>{Pe(),qe(),ze(),rt(),ct(),ft=/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/iu,pt=/^[0-9a-f]{8,32}$/iu})))()}function ht(e){return typeof e==`object`&&!!e&&`type`in e&&(e.type===`notFound`||e.type===`redirect`)}function gt(){return Date.now()}function _t(e,t){let n=new Map,r=new Map,i=new Map,a=(t,n,r)=>t.preload||r===`preload`?n.preloadStaleTime??e.preloadStaleTime:n.staleTime??e.staleTime,o=(e,t,n)=>e.status===`success`&&!e.invalid&&(!t.loader||gt()-e.updatedAt<a(e,t,n)),s=(n,r)=>{let a=n.preload?r.preloadGcTime??e.preloadGcTime:r.gcTime??e.gcTime,o=a-(gt()-n.updatedAt);if(!t.getCachedMatch(n.id)||o<=0){o<=0&&(t.removeCached(n.id),i.delete(n.id));return}let c=i.get(n.id);c&&globalThis.clearTimeout(c);let l=globalThis.setTimeout(()=>{let e=t.getCachedMatch(n.id);if(!e){i.delete(n.id);return}if(gt()-e.updatedAt<a){s(e,r);return}t.removeCached(n.id),i.delete(n.id)},o);i.set(n.id,l),l.unref?.()},c=(e,t)=>{if(t.module!==void 0)return Promise.resolve(t.module);let r=n.get(e.id);if(r)return r;let i=Promise.resolve(e.component());return n.set(e.id,i),i.catch(()=>n.delete(e.id)),i},l=(e,n,r,i,a)=>{let c=t.getMatch(e.id)??e;if(!a&&o(c,n,i.cause))return t.updateMatch(c.id,e=>({...e,preload:i.cause===`preload`})),s(c,n),Promise.resolve({data:c.data,updatedAt:c.updatedAt});let l=n.loader?.(r,{...i,deps:c.deps});return Promise.resolve(l).then(e=>{if(ht(e))throw e;return{data:e,updatedAt:gt()}})};return{loadRoute:async(e,n,i,a,o,u)=>{let d=r.get(e.id);if(d&&!o)return d;let f=t.getMatch(e.id)??e,p=f.fetchCount+1;t.updateMatch(e.id,e=>({...e,isFetching:`loader`,fetchCount:p}));let m=l(f,n,i,a,o),h=c(n,f).then(e=>(t.getMatch(f.id)?.fetchCount===p&&!a.signal.aborted&&(t.updateMatch(f.id,t=>({...t,module:e})),u?.(e)),e)),g=Promise.all([m,h]).then(([e,r])=>{if(t.getMatch(f.id)?.fetchCount!==p||a.signal.aborted)return{data:e.data,module:r};t.updateMatch(f.id,t=>({...t,data:e.data,module:r,status:`success`,isFetching:!1,error:void 0,invalid:!1,preload:a.cause===`preload`,updatedAt:e.updatedAt}));let i=t.getMatch(f.id);return i&&s(i,n),{data:e.data,module:r}});r.set(e.id,g);try{return await g}catch(n){throw t.getMatch(e.id)?.fetchCount===p&&!a.signal.aborted&&t.updateMatch(e.id,e=>({...e,status:`error`,isFetching:!1,error:n,updatedAt:gt()})),n}finally{r.get(e.id)===g&&r.delete(e.id)}},scheduleGc:s,isFresh:o,shouldReloadInBackground:t=>(t.staleReloadMode??e.staleReloadMode)===`background`,clear(){let e=t.getState();for(let t of[...e.matches,...e.pendingMatches,...e.cachedMatches])(t.isFetching||t.status===`pending`)&&t.abortController.abort();for(let e of i.values())globalThis.clearTimeout(e);i.clear(),r.clear(),n.clear()}}}function vt(e,t){return`${e}\u0000${t}`}function yt(e,t,n,r,i,a=!1){return{id:vt(e,n),routeId:e,location:t,deps:n,status:`pending`,isFetching:!1,updatedAt:0,fetchCount:0,abortController:i,cause:r,preload:a,invalid:!1}}function bt(){let e=new Map,t=new Map,n=new Map,r=new Set,i=new Map,a=Dt(`/`),o=null,s=`idle`,c=[],l=[],u=[],d=0,f=!1,p=new Set,m=()=>({location:a,resolvedLocation:o,status:s,matches:c,pendingMatches:l,cachedMatches:u}),h=()=>{c=[...e.values()],l=[...t.values()],u=[...n.values()]},g=a=>{if(f=!0,a&&p.add(a),d>0)return;let o=m(),s=[...p];p.clear(),f=!1;for(let e of r)e(o);for(let r of s){let a=e.get(r)??t.get(r)??n.get(r);for(let e of i.get(r)??[])e(a)}},_=e=>{d+=1;try{e()}finally{--d,d===0&&f&&g()}},v=(r,i)=>{for(let a of[e,t,n])a!==i&&a.delete(r)&&p.add(r)},y=(e,t)=>{let n=!1,r=new Set(t.map(e=>e.id));for(let t of e.keys())r.has(t)||(e.delete(t),p.add(t),n=!0);for(let r of t){let t=e.get(r.id);v(r.id,e),t!==r&&(e.set(r.id,r),p.add(r.id),n=!0)}n&&(h(),g())};return{batch:_,getState:m,getMatch:r=>e.get(r)??t.get(r)??n.get(r),getCachedMatch:e=>n.get(e),getActiveMatch:()=>e.values().next().value,setLocation(e,t){(a.pathname!==e.pathname||a.search!==e.search||a.hash!==e.hash||o?.pathname!==t?.pathname||o?.search!==t?.search||o?.hash!==t?.hash)&&(a=e,o=t,g())},setStatus(e){s!==e&&(s=e,g())},setActive(t){_(()=>y(e,t))},setPending(e){_(()=>y(t,e))},setCached(e){_(()=>y(n,e))},removeCached(e){n.delete(e)&&(h(),g(e))},updateMatch(r,i){let a=[e,t,n].find(e=>e.has(r)),o=a?.get(r);if(!a||!o)return!1;let s=i(o);return s!==o&&(a.set(r,s),h(),g(r)),!0},invalidate(r){_(()=>{for(let i of[e,t,n])for(let[e,t]of i)(r===void 0||t.routeId===r)&&(i.set(e,{...t,invalid:!0,...t.status===`error`||t.status===`notFound`?{status:`pending`,error:void 0}:{}}),g(e));h()})},clear(){_(()=>{for(let r of[e,t,n]){for(let e of r.keys())p.add(e);r.clear()}h(),a=Dt(`/`),o=null,s=`idle`,g()})},subscribe(e){return r.add(e),()=>r.delete(e)},subscribeSelector(e,t,n=Object.is){let i=e(m()),a=r=>{let a=e(r);n(i,a)||(i=a,t(a))};return r.add(a),()=>r.delete(a)},subscribeMatch(e,t){let n=i.get(e)??new Set;return n.add(t),i.set(e,n),()=>(n.delete(t),n.size===0&&i.delete(e),!0)}}}function xt(e){let t=e.trim();if(!t||t===`/`)return``;let n=t.startsWith(`/`)?t:`/${t}`;return n.endsWith(`/`)?n.slice(0,-1):n}function St(e){let t=e.trim();if(!t)return`/`;let n=t.startsWith(`/`)?t:`/${t}`;return n.length>1&&n.endsWith(`/`)?n.slice(0,-1):n}function Ct(e){let t=St(e).toLowerCase();return t.endsWith(`/index.html`)?St(t.slice(0,-11)):t}function wt(e){return{pathname:St(e.pathname),search:e.search,hash:e.hash}}function Tt(e,t){let n=xt(t),r=St(e);return r===n?`/`:n&&r.startsWith(`${n}/`)?r.slice(n.length):r}function Et(e){let t=new Map,n=new Map;for(let r of e){if(t.has(r.id))throw Error(`Duplicate route id "${r.id}".`);let e={...r,path:St(r.path)};t.set(r.id,e);for(let t of[e.path,...r.aliases??[]]){let e=Ct(t),i=n.get(e);if(i&&i!==r.id)throw Error(`Duplicate route path "${t}".`);n.set(e,r.id)}}return{byId:t,byPath:n,pathForRoute(e,n=``){let r=t.get(e);if(!r)throw Error(`Unknown route id "${e}".`);let i=xt(n);return i?`${i}${r.path}`:r.path},routeIdFromPath(e,t=``){let r=Ct(Tt(e,t));return n.get(r)??null}}}function Dt(e){let t=e.indexOf(`#`),n=e.indexOf(`?`),r=n<0?t:t<0?n:Math.min(n,t),i=t<0?e.length:t,a=r<0?e.length:r,o=t<0?e.length:t;return{pathname:St(e.slice(0,a)),search:r>=0&&r<i?e.slice(r,o):``,hash:i<e.length?e.slice(i):``}}function Ot(e,t){return e===t&&!t.controller.signal.aborted}function kt(e){e?.controller.abort()}function At(e){return e.status===`success`}function jt(e){return typeof e==`object`&&!!e&&`type`in e&&e.type===`notFound`}function Mt(e){return typeof e==`object`&&!!e&&`type`in e&&e.type===`redirect`&&`location`in e&&Nt(e.location)}function Nt(e){return typeof e==`object`&&!!e&&`pathname`in e&&typeof e.pathname==`string`&&`search`in e&&typeof e.search==`string`&&`hash`in e&&typeof e.hash==`string`}function Pt(e){let t=Et(e.routes),n=bt(),r=_t({staleTime:e.staleTime??Rt,staleReloadMode:e.defaultStaleReloadMode??zt,preloadStaleTime:e.preloadStaleTime??Bt,preloadGcTime:e.preloadGcTime??Vt,gcTime:e.gcTime??Vt},n),i,a=``,o,s=null,c={hasContext:!1},l=async(e,n,r,i)=>{!e||!i.shouldRun()||await t.byId.get(e.routeId)?.[n]?.(r,e.data,{...i,location:e.location,deps:e.deps})},u=async(e,o,u={},f=Dt(t.pathForRoute(e,a)))=>{let p=t.byId.get(e);if(!p)throw Error(`Unknown route id "${e}".`);c={hasContext:!0,value:o};let m=wt(f),h=n.getActiveMatch(),g=p.loaderDeps?.(o,m)??``,_=h?.routeId===e,v=vt(e,g),y=h?.id===v,b=u.revalidate===!0&&h?.routeId===e,x=n.getCachedMatch(v),S=!y&&x?.status===`success`&&x.module!==void 0&&!x.invalid,C=S&&r.isFresh(x,p,`navigation`),w=y&&b&&h?.status===`success`&&h.module!==void 0?!0:S&&!C&&r.shouldReloadInBackground(p);i&&u.history&&u.history!==`none`&&i[u.history](m);let T=s;if(T?.matchId===v&&T.promise&&!T.controller.signal.aborted)return n.updateMatch(v,e=>({...e,location:m})),n.setLocation(m,n.getState().resolvedLocation),T.location=m,T.promise;if(y&&h?.status===`success`&&!h.invalid&&!b){kt(s),s=null,n.batch(()=>{n.updateMatch(h.id,e=>({...e,location:m})),n.setPending([]),n.setLocation(m,m),n.setStatus(`success`)});return}kt(s);let E=new AbortController,ee=b?`revalidate`:`navigation`,D=y&&h?{...h,location:m,abortController:E,cause:ee,error:void 0,invalid:!0,isFetching:`loader`,preload:!1}:x?{...x,location:m,abortController:E,cause:ee,error:void 0,invalid:x.invalid,isFetching:!1,preload:!1}:{...yt(e,m,g,ee,E)},O=S&&(C||w)?{...D,isFetching:w?`loader`:!1,preload:C&&!w}:void 0,k=!!O,A={controller:E,matchId:v,location:m};s=A;let j={signal:E.signal,shouldRun:()=>Ot(s,A),revalidating:b,location:m,deps:g,cause:ee},te=n.getState().resolvedLocation;O?n.batch(()=>{if(h&&At(h)){n.setCached([...n.getState().cachedMatches.filter(e=>e.id!==h.id),h]);let e=t.byId.get(h.routeId);e&&r.scheduleGc(h,e)}n.setActive([O]),n.setPending([]),n.setLocation(m,m),n.setStatus(`success`)}):y?n.updateMatch(D.id,()=>D):n.setPending([D]),O||(n.setLocation(m,te),n.setStatus(w?`success`:`loading`));let ne=(async()=>{let e;try{e=await r.loadRoute(D,p,o,j,b||!!x?.invalid,e=>{if(!j.shouldRun()||n.getActiveMatch()?.id===D.id)return;let i=n.getMatch(D.id);i&&(k=!0,n.batch(()=>{if(h&&At(h)){n.setCached([...n.getState().cachedMatches.filter(e=>e.id!==h.id),h]);let e=t.byId.get(h.routeId);e&&r.scheduleGc(h,e)}n.setActive([{...i,module:e}]),n.setPending([]),n.setLocation(m,m)}))})}catch(e){if(!j.shouldRun())return;if(Mt(e)){n.updateMatch(D.id,t=>({...t,status:`redirected`,isFetching:!1,error:e,updatedAt:Date.now()})),n.setStatus(`redirected`),s=null,j.cause!==`preload`&&await d(e.location,o,!1,`replace`);return}let i=jt(e)?`notFound`:`error`,a=n.getMatch(D.id);if(a){let o=k?h:n.getActiveMatch();n.batch(()=>{if(!k&&!y&&o&&At(o)){n.setCached([...n.getState().cachedMatches,o]);let e=t.byId.get(o.routeId);e&&r.scheduleGc(o,e)}n.updateMatch(D.id,t=>({...t,status:i,isFetching:!1,error:e,updatedAt:Date.now()})),k||n.setActive([n.getMatch(D.id)??a]),n.setPending([]),n.setLocation(m,m),n.setStatus(i)})}else n.setStatus(i);throw Ot(s,A)&&(s=null),e}if(!j.shouldRun())return;let i={...n.getMatch(D.id)??{...D,data:e.data,module:e.module,status:`success`,isFetching:!1,error:void 0,invalid:!1,updatedAt:Date.now()},preload:!1},a=k?h:n.getActiveMatch();n.batch(()=>{if(!k&&!y&&a&&At(a)){n.setCached([...n.getState().cachedMatches,a]);let e=t.byId.get(a.routeId);e&&r.scheduleGc(a,e)}n.setActive([i]),n.setPending([]),n.setLocation(A.location,A.location),n.setStatus(`success`)});let c=[];if(!_){try{await l(a,`onLeave`,o,{...j,revalidating:!1})}catch(e){c.push(e)}try{await l(i,`onEnter`,o,j)}catch(e){c.push(e)}}if(c.length>0){let e=c[0];throw n.updateMatch(i.id,t=>({...t,status:`error`,error:e})),n.setStatus(`error`),Ot(s,A)&&(s=null),e}Ot(s,A)&&(s=null)})();if(A.promise=ne,w&&!b){ne.catch(()=>void 0);return}await ne},d=async(e,r,i=!1,o=`none`)=>{let c=wt(e),l=t.routeIdFromPath(c.pathname,a);if(!l){kt(s),s=null,n.batch(()=>{n.setActive([]),n.setPending([]),n.setLocation(c,null),n.setStatus(`notFound`)});return}await u(l,r,{history:o,revalidate:i},c)},f=(e,i,a)=>{let o=t.byId.get(e);if(!o)return Promise.reject(Error(`Unknown route id "${e}".`));c={hasContext:!0,value:i};let s=o.loaderDeps?.(i,a)??``,l=vt(e,s),u=n.getMatch(l),d=n.getCachedMatch(l),f=n.getActiveMatch();if(f?.id===l&&f.status===`success`&&!f.invalid)return Promise.resolve();let p=u??yt(e,a,s,`preload`,new AbortController,!0);u||n.setCached([...n.getState().cachedMatches.filter(e=>e.id!==p.id),p]);let h=p.abortController,g=u&&!d?p.cause:`preload`,_={signal:h.signal,shouldRun:()=>!h.signal.aborted,revalidating:!1,location:a,deps:s,cause:g};return r.loadRoute(p,o,i,_,!1).then(()=>void 0).catch(e=>{if(Mt(e))return n.removeCached(p.id),m(e.location,i);n.removeCached(p.id)})},p=(e,n)=>f(e,n,Dt(t.pathForRoute(e,a))),m=(e,n)=>{let r=wt(e),i=t.routeIdFromPath(r.pathname,a);return i?f(i,n,r):Promise.resolve()};return{routes:[...t.byId.values()],getRoute:e=>t.byId.get(e)??null,getMatch:n.getMatch,preloadRoute:p,preloadLocation:m,invalidate(e){n.invalidate(e);let t=n.getActiveMatch();return!t||e!==void 0&&t.routeId!==e||!c.hasContext?Promise.resolve():u(t.routeId,c.value,{history:`none`,revalidate:!0},t.location)},getState:n.getState,subscribe:n.subscribe,subscribeSelector:n.subscribeSelector,subscribeMatch:n.subscribeMatch,pathForRoute:t.pathForRoute,routeIdFromPath:t.routeIdFromPath,start(e,t,n){return i=e,a=xt(t),o?.(),o=i.listen(e=>{d(e,n).catch(()=>void 0)}),d(i.location(),n,!0)},navigate:u,navigateLocation(e,r){let i=wt(e),o=t.routeIdFromPath(i.pathname,a);return o?u(o,r,{history:`none`},i):(kt(s),s=null,n.batch(()=>{n.setActive([]),n.setPending([]),n.setLocation(i,null),n.setStatus(`notFound`)}),Promise.resolve())},revalidate(e,r=n.getActiveMatch()?.routeId){if(!r)return Promise.resolve();let i=n.getActiveMatch()?.routeId===r?n.getActiveMatch()?.location:Dt(t.pathForRoute(r,a));return u(r,e,{history:`none`,revalidate:!0},i)},stop(){o?.(),o=void 0,kt(s),s=null,i=void 0,c={hasContext:!1},r.clear(),n.clear()}}}function Ft(e){return{type:`notFound`,data:e}}function It(e){return{type:`redirect`,location:e}}function Lt(e){return e}var Rt,zt,Bt,Vt;function Ht(){return(Ht=e((()=>{Rt=0,zt=`background`,Bt=3e4,Vt=18e5})))()}function Ut(e){return typeof e==`string`&&Wt.test(e)}var Wt;function Gt(){return(Gt=e((()=>{Wt=/^[a-z0-9][a-z0-9._-]{0,79}$/})))()}var Kt,qt,Jt,Yt,Xt,Zt;function Qt(){return(Qt=e((()=>{Kt=`/control-ui-config.json`,qt=`bootstrapProfile`,Jt=`owner`,Yt=`data-openclaw-control-ui-base-path`,Xt=`data-openclaw-terminal-enabled`,Zt=`data-openclaw-environment`})))()}var $t,en,tn,nn;function rn(){return(rn=e((()=>{$t=`modulepreload`,en=function(e,t){return new URL(e,t).href},tn={},nn=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=en(t,n),t=s(t),t in tn)return;tn[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:$t,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})}})))()}var an;function on(){return(on=e((()=>{o(),an=h`
  :host {
    --max-width: 30ch;

    /** These styles are added so we don't interfere in the DOM. */
    display: inline-block;
    position: absolute;

    /** Defaults for inherited CSS properties */
    color: var(--wa-tooltip-content-color);
    font-size: var(--wa-tooltip-font-size);
    line-height: var(--wa-tooltip-line-height);
    text-align: start;
    white-space: normal;
  }

  .tooltip {
    --arrow-size: var(--wa-tooltip-arrow-size);
    --arrow-color: var(--wa-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: 1000;
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--wa-tooltip-border-radius);
    background-color: var(--wa-tooltip-background-color);
    border: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    padding: 0.25em 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  .tooltip {
    --popup-border-width: var(--wa-tooltip-border-width);

    /* Inset box-shadow, not a border: Safari seams a clip-path edge that runs along a border. */
    &::part(arrow) {
      box-shadow: inset calc(-1 * var(--wa-tooltip-border-width)) calc(-1 * var(--wa-tooltip-border-width)) 0 0
        var(--wa-tooltip-border-color);
    }
  }
`})))()}var sn;function cn(){return(cn=e((()=>{sn=class extends Event{constructor(){super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}}})))()}var ln;function un(){return(un=e((()=>{ln=class extends Event{constructor(e){super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}}})))()}var dn;function fn(){return(fn=e((()=>{dn=class extends Event{constructor(){super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}}})))()}var pn;function mn(){return(mn=e((()=>{pn=class extends Event{constructor(){super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}}})))()}var hn;function gn(){return(gn=e((()=>{hn=class extends Event{constructor(){super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}}})))()}var _n;function vn(){return(vn=e((()=>{o(),_n=h`
  :host {
    --arrow-color: black;
    --arrow-size: var(--wa-tooltip-arrow-size);
    --popup-border-width: 0px;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45) to calculate the length of the arrow after rotation.
     *
     * The diamond will be translated inward by --arrow-base-offset, the border thickness, to centralise it on
     * the inner edge of the popup border. This also means we need to increase the size of the arrow by the
     * same amount to compensate.
     *
     * A diamond shaped clipping mask is used to avoid overlap of popup content. This extends slightly inward so
     * the popup border is covered with no sub-pixel rounding artifacts. The diamond corners are mitred at 22.5º
     * to properly merge any arrow border with the popup border. The constant 1.4142 is derived from 1 + tan(22.5).
     *
     */
    --arrow-base-offset: var(--popup-border-width);
    --arrow-size-diagonal: calc((var(--arrow-size) + var(--arrow-base-offset)) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));
    --arrow-size-div: calc(var(--arrow-size-diagonal) * 2);
    --arrow-clipping-corner: calc(var(--arrow-base-offset) * 1.4142);

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);

    /* Clear UA styles for [popover] */
    :where(&) {
      inset: unset;
      padding: unset;
      margin: unset;
      width: unset;
      height: unset;
      color: unset;
      background: unset;
      border: unset;
      overflow: unset;
    }
  }

  .popup-fixed {
    position: fixed;
  }

  .popup:not(.popup-active) {
    display: none;
  }

  .arrow {
    position: absolute;
    width: var(--arrow-size-div);
    height: var(--arrow-size-div);
    background: var(--arrow-color);
    z-index: 3;
    clip-path: polygon(
      var(--arrow-clipping-corner) 100%,
      var(--arrow-base-offset) calc(100% - var(--arrow-base-offset)),
      calc(var(--arrow-base-offset) - 2px) calc(100% - var(--arrow-base-offset)),
      calc(100% - var(--arrow-base-offset)) calc(var(--arrow-base-offset) - 2px),
      calc(100% - var(--arrow-base-offset)) var(--arrow-base-offset),
      100% var(--arrow-clipping-corner),
      100% 100%
    );
    rotate: 45deg;
  }

  :host([data-current-placement|='left']) .arrow {
    rotate: -45deg;
  }

  :host([data-current-placement|='right']) .arrow {
    rotate: 135deg;
  }

  :host([data-current-placement|='bottom']) .arrow {
    rotate: 225deg;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge-visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: 899;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }

  /* Built-in animations */
  .show {
    animation: show var(--show-duration) ease;
  }

  .hide {
    animation: show var(--hide-duration) ease reverse;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .show-with-scale {
    animation: show-with-scale var(--show-duration) ease;
  }

  .hide-with-scale {
    animation: show-with-scale var(--hide-duration) ease reverse;
  }

  @keyframes show-with-scale {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }
`})))()}var yn,bn,xn,N,Sn,Cn,wn,Tn;function P(){return(P=e((()=>{yn=Object.defineProperty,bn=Object.getOwnPropertyDescriptor,xn=e=>{throw TypeError(e)},N=(e,t,n,r)=>{for(var i=r>1?void 0:r?bn(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&yn(t,n,i),i},Sn=(e,t,n)=>t.has(e)||xn(`Cannot `+n),Cn=(e,t,n)=>(Sn(e,t,`read from private field`),n?n.call(e):t.get(e)),wn=(e,t,n)=>t.has(e)?xn(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Tn=(e,t,n,r)=>(Sn(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n)})))()}function En(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function Dn(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(kn)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var On,kn,An,F;function I(){return(I=e((()=>{P(),o(),n(),On=h`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden],
  :host([hidden]) {
    display: none !important;
  }
`,kn=/;\s+$/,F=class extends E{constructor(){super(),wn(this,An,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[On,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){Cn(this,An)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),Tn(this,An,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(!this.style){let n=Dn({property:En(e),value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let n=Dn({property:e,value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}},An=new WeakMap,N([x()],F.prototype,`dir`,2),N([x()],F.prototype,`lang`,2),N([x({type:Boolean,reflect:!0,attribute:`did-ssr`})],F.prototype,`didSSR`,2)})))()}function jn(...e){e.map(e=>{let t=e.$code.toLowerCase();Pn.has(t)?Pn.set(t,Object.assign(Object.assign({},Pn.get(t)),e)):Pn.set(t,e),Fn||=e}),Mn()}function Mn(){Rn&&(In=document.documentElement.dir||`ltr`,Ln=document.documentElement.lang||navigator.language),[...Nn.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Nn,Pn,Fn,In,Ln,Rn,zn;function Bn(){return(Bn=e((()=>{if(Nn=new Set,Pn=new Map,In=`ltr`,Ln=`en`,Rn=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0,Rn){let e=new MutationObserver(Mn);In=document.documentElement.dir||`ltr`,Ln=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}zn=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Nn.add(this.host)}hostDisconnected(){Nn.delete(this.host)}dir(){return`${this.host.dir||In}`.toLowerCase()}lang(){let e=`${this.host.lang||Ln}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Fn?Fn.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=Pn.get(`${n}-${r}`),a=Pn.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Fn&&Fn[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Fn&&Fn[e])i=Fn[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}}})))()}var Vn,Hn;function Un(){return(Un=e((()=>{Bn(),Vn={$code:`en`,$name:`English`,$dir:`ltr`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noResults:`No matching results`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`},jn(Vn),Hn=Vn})))()}var Wn;function Gn(){return(Gn=e((()=>{Un(),Bn(),Wn=class extends zn{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}},jn(Hn)})))()}function Kn(e,t,n){return R(e,cr(t,n))}function qn(e,t){return typeof e==`function`?e(t):e}function Jn(e){return e.split(`-`)[0]}function Yn(e){return e.split(`-`)[1]}function Xn(e){return e===`x`?`y`:`x`}function Zn(e){return e===`y`?`height`:`width`}function L(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Qn(e){return Xn(L(e))}function $n(e,t,n){n===void 0&&(n=!1);let r=Yn(e),i=Qn(e),a=Zn(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=ir(o)),[o,ir(o)]}function er(e){let t=ir(e);return[tr(e),t,tr(t)]}function tr(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}function nr(e,t,n){switch(e){case`top`:case`bottom`:return n?t?pr:fr:t?fr:pr;case`left`:case`right`:return t?mr:hr;default:return[]}}function rr(e,t,n,r){let i=Yn(e),a=nr(Jn(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(tr)))),a}function ir(e){let t=Jn(e);return dr[t]+e.slice(t.length)}function ar(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function or(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:ar(e)}function sr(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}var cr,R,lr,ur,z,dr,fr,pr,mr,hr;function gr(){return(gr=e((()=>{cr=Math.min,R=Math.max,lr=Math.round,ur=Math.floor,z=e=>({x:e,y:e}),dr={left:`right`,right:`left`,bottom:`top`,top:`bottom`},fr=[`left`,`right`],pr=[`right`,`left`],mr=[`top`,`bottom`],hr=[`bottom`,`top`]})))()}function _r(e,t,n){let{reference:r,floating:i}=e,a=L(t),o=Qn(t),s=Zn(o),c=Jn(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=Yn(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function vr(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=qn(t,e),p=or(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=sr(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=sr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}async function yr(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Jn(n),s=Yn(n),c=L(n)===`y`,l=wr.has(o)?-1:1,u=a&&c?-1:1,d=qn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var br,xr,Sr,Cr,wr,Tr,Er,Dr;function Or(){return(Or=e((()=>{gr(),br=50,xr=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:vr},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=_r(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<br&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=_r(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},Sr=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=qn(e,t)||{};if(l==null)return{};let d=or(u),f={x:n,y:r},p=Qn(i),m=Zn(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],x=f[p]-a.reference[p],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),C=S?S[y]:0;(!C||!await(o.isElement==null?void 0:o.isElement(S)))&&(C=s.floating[y]||a.floating[m]);let w=b/2-x/2,T=C/2-h[m]/2-1,E=cr(d[_],T),ee=cr(d[v],T),D=C-h[m]-ee,O=C/2-h[m]/2+w,k=Kn(E,O,D),A=!c.arrow&&Yn(i)!=null&&O!==k&&a.reference[m]/2-(O<E?E:ee)-h[m]/2<0,j=A?O<E?O-E:O-D:0;return{[p]:f[p]+j,data:{[p]:k,centerOffset:O-k-j,...A&&{alignmentOffset:j}},reset:A}}}),Cr=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=qn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Jn(r),_=L(o),v=Jn(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[ir(o)]:er(o)),x=p!==`none`;!d&&x&&b.push(...rr(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=$n(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(u!==`alignment`||_===L(t)||T.every(e=>L(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=L(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},wr=new Set([`left`,`top`]),Tr=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await yr(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Er=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=qn(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=L(i),p=Xn(f),m=u[p],h=u[f],g=(e,t)=>Kn(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},Dr=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=qn(e,t),c=await i.detectOverflow(t,s),l=Jn(n),u=Yn(n),d=L(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=cr(p-c[m],g),y=cr(f-c[h],_),b=t.middlewareData.shift,x=!b,S=v,C=y;b!=null&&b.enabled.x&&(C=_),b!=null&&b.enabled.y&&(S=g),x&&!u&&(d?C=f-2*R(c.left,c.right):S=p-2*R(c.top,c.bottom)),await o({...t,availableWidth:C,availableHeight:S});let w=await i.getDimensions(a.floating);return f!==w.width||p!==w.height?{reset:{rects:!0}}:{}}}}})))()}function kr(){return typeof window<`u`}function Ar(e){return jr(e)?(e.nodeName||``).toLowerCase():`#document`}function B(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function V(e){return((jr(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function jr(e){return kr()?e instanceof Node||e instanceof B(e).Node:!1}function H(e){return kr()?e instanceof Element||e instanceof B(e).Element:!1}function Mr(e){return kr()?e instanceof HTMLElement||e instanceof B(e).HTMLElement:!1}function Nr(e){return!kr()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof B(e).ShadowRoot}function Pr(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=U(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Fr(e){return/^(table|td|th)$/.test(Ar(e))}function Ir(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}function Lr(e){let t=H(e)?U(e):e;return Jr(t.transform)||Jr(t.translate)||Jr(t.scale)||Jr(t.rotate)||Jr(t.perspective)||!zr()&&(Jr(t.backdropFilter)||Jr(t.filter))||Kr.test(t.willChange||``)||qr.test(t.contain||``)}function Rr(e){let t=Hr(e);for(;Mr(t)&&!Br(t);){if(Lr(t))return t;if(Ir(t))return null;t=Hr(t)}return null}function zr(){return Yr??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Yr}function Br(e){return/^(html|body|#document)$/.test(Ar(e))}function U(e){return B(e).getComputedStyle(e)}function Vr(e){return H(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Hr(e){if(Ar(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Nr(e)&&e.host||V(e);return Nr(t)?t.host:t}function Ur(e){let t=Hr(e);return Br(t)?(e.ownerDocument||e).body:Mr(t)&&Pr(t)?t:Ur(t)}function Wr(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Ur(e),i=r===e.ownerDocument?.body,a=B(r);if(i){let e=Gr(a);return t.concat(a,a.visualViewport||[],Pr(r)?r:[],e&&n?Wr(e):[])}return t.concat(r,Wr(r,[],n))}function Gr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}var Kr,qr,Jr,Yr;function Xr(){return(Xr=e((()=>{Kr=/transform|translate|scale|rotate|perspective|filter/,qr=/paint|layout|strict|content/,Jr=e=>!!e&&e!==`none`})))()}function Zr(e){let t=U(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Mr(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=lr(n)!==a||lr(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Qr(e){return H(e)?e:e.contextElement}function $r(e){let t=Qr(e);if(!Mr(t))return z(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Zr(t),o=(a?lr(n.width):n.width)/r,s=(a?lr(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}function ei(e){let t=B(e);return!zr()||!t.visualViewport?Si:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ti(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===B(e)}function ni(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Qr(e),o=z(1);t&&(r?H(r)&&(o=$r(r)):o=$r(e));let s=ti(a,n,r)?ei(a):z(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=B(a),t=H(r)?B(r):r,n=e,i=Gr(n);for(;i&&t!==n;){let e=$r(i),t=i.getBoundingClientRect(),r=U(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=B(i),i=Gr(n)}}return sr({width:u,height:d,x:c,y:l})}function ri(e,t){let n=Vr(e).scrollLeft;return t?t.left+n:ni(V(e)).left+n}function ii(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-ri(e,n),y:n.top+t.scrollTop}}function ai(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=V(r),s=t?Ir(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=z(1),u=z(0),d=Mr(r);if((d||!a)&&((Ar(r)!==`body`||Pr(o))&&(c=Vr(r)),d)){let e=ni(r);l=$r(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?ii(o,c):z(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function oi(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function si(e){let t=Vr(e),n=e.ownerDocument.body,r=R(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=R(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+ri(e),o=-t.scrollTop;return U(n).direction===`rtl`&&(a+=R(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}function ci(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=B(e),a=V(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!zr()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(ri(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=Ci&&(s-=o)}return{width:s,height:c,x:l,y:u}}function li(e,t){let n=ni(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=$r(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function ui(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=ci(e,n,t);else if(t===`document`)r=si(V(e));else if(H(t))r=li(t,n);else{let n=ei(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return sr(r)}function di(e,t){let n=t.get(e);if(n)return n;let r=Wr(e,[],!1).filter(e=>H(e)&&Ar(e)!==`body`),i=null,a=U(e).position===`fixed`,o=a?Hr(e):e;for(;H(o)&&!Br(o);){let e=U(o),t=Lr(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=Hr(o)}return t.set(e,r),r}function fi(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Ir(t)?[]:di(t,this._c):[].concat(n),r],o=ui(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=ui(t,a[e],i);s=R(n.top,s),c=cr(n.right,c),l=cr(n.bottom,l),u=R(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function pi(e){let{width:t,height:n}=Zr(e);return{width:t,height:n}}function mi(e,t,n){let r=Mr(t),i=V(t),a=n===`fixed`,o=ni(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=z(0);if((r||!a)&&((Ar(t)!==`body`||Pr(i))&&(s=Vr(t)),r)){let e=ni(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=ri(i));let l=i&&!r&&!a?ii(i,s):z(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function hi(e){return U(e).position===`static`}function gi(e,t){if(!Mr(e)||U(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return V(e)===n&&(n=n.ownerDocument.body),n}function _i(e,t){let n=B(e);if(Ir(e))return n;if(!Mr(e)){let t=Hr(e);for(;t&&!Br(t);){if(H(t)&&!hi(t))return t;t=Hr(t)}return n}let r=gi(e,t);for(;r&&Fr(r)&&hi(r);)r=gi(r,t);return r&&Br(r)&&hi(r)&&!Lr(r)?n:r||Rr(e)||n}function vi(e){return U(e).direction===`rtl`}function yi(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function bi(e,t,n){let r=null,i,a=V(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=ur(d),h=ur(a.clientWidth-(u+f)),g=ur(a.clientHeight-(d+p)),_=ur(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:R(0,cr(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!yi(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=B(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function xi(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Qr(e),u=i||a?[...l?Wr(l):[],...t?Wr(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?bi(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?ni(e):null;c&&g();function g(){let t=ni(e);h&&!yi(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji;function Mi(){return(Mi=e((()=>{Or(),gr(),Xr(),Si=z(0),Ci=25,wi=async function(e){let t=this.getOffsetParent||_i,n=this.getDimensions,r=await n(e.floating);return{reference:mi(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},Ti={convertOffsetParentRelativeRectToViewportRelativeRect:ai,getDocumentElement:V,getClippingRect:fi,getOffsetParent:_i,getElementRects:wi,getClientRects:oi,getDimensions:pi,getScale:$r,isElement:H,isRTL:vi},Ei=Tr,Di=Er,Oi=Cr,ki=Dr,Ai=Sr,ji=(e,t,n)=>{let r=new Map,i=n??{},a={...Ti,...i.platform,_c:r};return xr(e,t,{...i,platform:a})}})))()}function Ni(e){return Fi(e)}function Pi(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Fi(e){for(let t=e;t;t=Pi(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=Pi(e);t;t=Pi(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Lr(e)||t.tagName===`BODY`))return t}return null}function Ii(){return(Ii=e((()=>{Xr()})))()}function Li(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var Ri,W;function zi(){return(zi=e((()=>{gn(),vn(),I(),Gn(),P(),Mi(),Ii(),o(),n(),r(),Ri=!!globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),W=class extends F{constructor(){super(...arguments),this.localize=new Wn(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=Ri,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor==`string`){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchorEl=this.anchor instanceof Element||Li(this.anchor)?this.anchor:this.querySelector(`[slot="anchor"]`);this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=xi(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let e=[Ei({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(ki({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;this.SUPPORTS_POPOVER&&!Li(this.anchor)&&this.boundary===`scroll`&&(t=Wr(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(Oi({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(Di({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(ki({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(Ai({element:this.arrowEl,padding:this.arrowPadding}));let n=this.SUPPORTS_POPOVER?e=>Ti.getOffsetParent(e,Ni):Ti.getOffsetParent;ji(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.SUPPORTS_POPOVER?`absolute`:`fixed`,platform:{...Ti,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new hn)}render(){return d`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${u({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${u({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?d`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}},W.css=_n,N([b(`.popup`)],W.prototype,`popup`,2),N([b(`.arrow`)],W.prototype,`arrowEl`,2),N([x({attribute:!1,type:Boolean})],W.prototype,`SUPPORTS_POPOVER`,2),N([x()],W.prototype,`anchor`,2),N([x({type:Boolean,reflect:!0})],W.prototype,`active`,2),N([x({reflect:!0})],W.prototype,`placement`,2),N([x()],W.prototype,`boundary`,2),N([x({type:Number})],W.prototype,`distance`,2),N([x({type:Number})],W.prototype,`skidding`,2),N([x({type:Boolean})],W.prototype,`arrow`,2),N([x({attribute:`arrow-placement`})],W.prototype,`arrowPlacement`,2),N([x({attribute:`arrow-padding`,type:Number})],W.prototype,`arrowPadding`,2),N([x({type:Boolean})],W.prototype,`flip`,2),N([x({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],W.prototype,`flipFallbackPlacements`,2),N([x({attribute:`flip-fallback-strategy`})],W.prototype,`flipFallbackStrategy`,2),N([x({type:Object})],W.prototype,`flipBoundary`,2),N([x({attribute:`flip-padding`,type:Number})],W.prototype,`flipPadding`,2),N([x({type:Boolean})],W.prototype,`shift`,2),N([x({type:Object})],W.prototype,`shiftBoundary`,2),N([x({attribute:`shift-padding`,type:Number})],W.prototype,`shiftPadding`,2),N([x({attribute:`auto-size`})],W.prototype,`autoSize`,2),N([x()],W.prototype,`sync`,2),N([x({type:Object})],W.prototype,`autoSizeBoundary`,2),N([x({attribute:`auto-size-padding`,type:Number})],W.prototype,`autoSizePadding`,2),N([x({attribute:`hover-bridge`,type:Boolean})],W.prototype,`hoverBridge`,2),W=N([y(`wa-popup`)],W)})))()}function Bi(e){Vi(e),Ui.push(e)}function Vi(e){for(let t=Ui.length-1;t>=0;t--)if(Ui[t]===e){Ui.splice(t,1);break}}function Hi(e){return Ui.length>0&&Ui[Ui.length-1]===e}var Ui;function Wi(){return(Wi=e((()=>{Ui=[]})))()}var Gi;function Ki(){return(Ki=e((()=>{Gi=`useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`})))()}var qi;function Ji(){return(Ji=e((()=>{Ki(),qi=(e=21)=>{let t=``,n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=Gi[n[e]&63];return t}})))()}function Yi(e=``){return`${e}${qi()}`}function Xi(){return(Xi=e((()=>{Ji()})))()}function Zi(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}function Qi(){return(Qi=e((()=>{})))()}async function $i(e,t){e.getAnimations(),e.classList.add(t),await new Promise(e=>requestAnimationFrame(()=>e()));let n=e.getAnimations().filter(e=>e instanceof CSSAnimation&&e.effect?.getComputedTiming().endTime!==1/0);await Promise.allSettled(n.map(e=>e.finished)),e.classList.remove(t)}function ea(){return(ea=e((()=>{})))()}function G(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}function ta(){return(ta=e((()=>{})))()}var K;function na(){return(na=e((()=>{on(),cn(),un(),fn(),mn(),zi(),Wi(),Xi(),I(),P(),o(),n(),r(),K=class extends F{constructor(){super(...arguments),this.dismissedByPress=!1,this.placement=`top`,this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger=`hover focus`,this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.dismissedByPress=!1,this.hasTrigger(`focus`)&&this.hide()},this.handleClick=()=>{if(this.hasTrigger(`click`)){this.open?this.hide():this.show();return}this.hasTrigger(`manual`)||this.lightDismiss()},this.handleFocus=()=>{this.dismissedByPress||this.hasTrigger(`focus`)&&this.show()},this.handleMouseDown=()=>{this.hasTrigger(`click`)||this.hasTrigger(`manual`)||this.lightDismiss()},this.handleDocumentKeyDown=e=>{this.hasTrigger(`manual`)||e.key===`Escape`&&this.open&&Hi(this)&&(e.preventDefault(),e.stopPropagation(),this.hide())},this.handleDocumentClick=e=>{this.hasTrigger(`manual`)||this.anchor&&e.composedPath().includes(this.anchor)||this.hide()},this.handleMouseOver=()=>{this.dismissedByPress||this.hasTrigger(`hover`)&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=e=>{let t=e.relatedTarget,n=!!(t&&this.anchor?.contains(t)),r=!!(t&&this.contains(t));n||r||(this.dismissedByPress=!1,this.hasTrigger(`hover`)&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>{this.hide()},this.hideDelay)))}}connectedCallback(){super.connectedCallback(),typeof document<`u`&&(this.eventController.signal.aborted&&(this.eventController=new AbortController),this.addEventListener(`mouseout`,this.handleMouseOut),this.dismissedByPress=!1,this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||=Yi(`wa-tooltip-`),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`click`,this.handleDocumentClick),Vi(this),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(e){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition()),super.firstUpdated(e)}lightDismiss(){clearTimeout(this.hoverTimeout),this.dismissedByPress=!0,this.hide()}hasTrigger(e){return this.trigger.split(` `).includes(e)}addToAriaLabelledBy(e,t){let n=(e.getAttribute(`aria-labelledby`)||``).split(/\s+/).filter(Boolean);n.includes(t)||(n.push(t),e.setAttribute(`aria-labelledby`,n.join(` `)))}removeFromAriaLabelledBy(e,t){let n=(e.getAttribute(`aria-labelledby`)||``).split(/\s+/).filter(Boolean).filter(e=>e!==t);n.length>0?e.setAttribute(`aria-labelledby`,n.join(` `)):e.removeAttribute(`aria-labelledby`)}async handleOpenChange(){if(this.open){if(this.disabled)return;let e=new sn;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.hasTrigger(`manual`)||(document.addEventListener(`keydown`,this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener(`click`,this.handleDocumentClick,{signal:this.eventController.signal}),Bi(this)),this.body.hidden=!1,this.popup.active=!0,await $i(this.popup.popup,`show-with-scale`),this.popup.reposition(),this.dispatchEvent(new dn)}else{let e=new ln;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`click`,this.handleDocumentClick),Vi(this),await $i(this.popup.popup,`hide-with-scale`),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new pn)}}handleForChange(){let e=this.getRootNode?.();if(!e)return;let t=this.for?e.getElementById?.(this.for):null,n=this.anchor;if(t===n)return;this.dismissedByPress=!1;let{signal:r}=this.eventController;t&&(this.addToAriaLabelledBy(t,this.id),t.addEventListener(`blur`,this.handleBlur,{capture:!0,signal:r}),t.addEventListener(`focus`,this.handleFocus,{capture:!0,signal:r}),t.addEventListener(`click`,this.handleClick,{signal:r}),t.addEventListener(`mousedown`,this.handleMouseDown,{signal:r}),t.addEventListener(`mouseover`,this.handleMouseOver,{signal:r}),t.addEventListener(`mouseout`,this.handleMouseOut,{signal:r})),n&&(this.removeFromAriaLabelledBy(n,this.id),n.removeEventListener(`blur`,this.handleBlur,{capture:!0}),n.removeEventListener(`focus`,this.handleFocus,{capture:!0}),n.removeEventListener(`click`,this.handleClick),n.removeEventListener(`mousedown`,this.handleMouseDown),n.removeEventListener(`mouseover`,this.handleMouseOver),n.removeEventListener(`mouseout`,this.handleMouseOut)),this.anchor=t}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Zi(this,`wa-after-show`)}async hide(){if(this.open)return this.open=!1,Zi(this,`wa-after-hide`)}render(){return d`
      <wa-popup
        part="base tooltip"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${u({tooltip:!0,"tooltip-open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        ?arrow=${!this.withoutArrow}
        hover-bridge
        .anchor=${this.anchor}
      >
        <div part="body" class="body">
          <slot></slot>
        </div>
      </wa-popup>
    `}},K.css=an,K.dependencies={"wa-popup":W},N([b(`slot:not([name])`)],K.prototype,`defaultSlot`,2),N([b(`.body`)],K.prototype,`body`,2),N([b(`wa-popup`)],K.prototype,`popup`,2),N([x()],K.prototype,`placement`,2),N([x({type:Boolean,reflect:!0})],K.prototype,`disabled`,2),N([x({type:Number})],K.prototype,`distance`,2),N([x({type:Boolean,reflect:!0})],K.prototype,`open`,2),N([x({type:Number})],K.prototype,`skidding`,2),N([x({attribute:`show-delay`,type:Number})],K.prototype,`showDelay`,2),N([x({attribute:`hide-delay`,type:Number})],K.prototype,`hideDelay`,2),N([x()],K.prototype,`trigger`,2),N([x({attribute:`without-arrow`,type:Boolean,reflect:!0})],K.prototype,`withoutArrow`,2),N([x()],K.prototype,`for`,2),N([m()],K.prototype,`anchor`,2),N([G(`open`,{waitUntilFirstUpdate:!0})],K.prototype,`handleOpenChange`,1),N([G(`for`)],K.prototype,`handleForChange`,1),N([G([`distance`,`placement`,`skidding`])],K.prototype,`handleOptionsChange`,1),N([G(`disabled`)],K.prototype,`handleDisabledChange`,1),K=N([y(`wa-tooltip`)],K)})))()}function ra(){return(ra=e((()=>{na(),on(),zi(),vn(),I(),Gn(),Un()})))()}function ia(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function aa(){return(aa=e((()=>{})))()}var oa;function sa(){return(sa=e((()=>{o(),oa=class{constructor(e,t){this.element=e,this.callback=t}start(...e){this.observer??=new ResizeObserver(()=>this.check()),this.observer.observe(this.element);for(let t of e)this.observer.observe(t);this.initialCheckHandle??=requestAnimationFrame(()=>{this.initialCheckHandle=void 0,this.check()})}stop(){this.initialCheckHandle!==void 0&&(cancelAnimationFrame(this.initialCheckHandle),this.initialCheckHandle=void 0),this.observer?.disconnect()}check(){this.callback(this.element.getClientRects().length>0)}}})))()}function ca(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function la(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function ua(){let e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,``));return isNaN(e)||!e?0:e}function da(e){if(ma.add(e),!document.documentElement.classList.contains(`wa-scroll-lock`)){let e=la()+ua(),t=getComputedStyle(document.documentElement).scrollbarGutter;(!t||t===`auto`)&&(t=`stable`),e<2&&(t=``),document.documentElement.style.setProperty(`--wa-scroll-lock-gutter`,t),document.documentElement.classList.add(`wa-scroll-lock`),document.documentElement.style.setProperty(`--wa-scroll-lock-size`,`${e}px`)}}function fa(e){ma.delete(e),ma.size===0&&(document.documentElement.classList.remove(`wa-scroll-lock`),document.documentElement.style.removeProperty(`--wa-scroll-lock-size`))}function pa(e,t,n=`vertical`,r=`smooth`){let i=ca(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,s=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,l=t.scrollTop,u=t.scrollTop+t.offsetHeight;(n===`horizontal`||n===`both`)&&(o<s?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>c&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n===`vertical`||n===`both`)&&(a<l?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>u&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}var ma;function ha(){return(ha=e((()=>{ma=new Set})))()}function ga(e){return e.split(` `).map(e=>e.trim()).filter(e=>e!==``)}var _a;function va(){return(va=e((()=>{o(),_a=h`
  :host {
    --width: 31rem;
    --spacing: var(--wa-space-l);
    --backdrop-filter: none;
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);

    display: none;
  }

  :host([open]) {
    display: block;
  }

  .dialog {
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: var(--width);
    max-width: calc(100% - var(--wa-space-2xl));
    max-height: calc(100% - var(--wa-space-2xl));
    color: inherit;
    background-color: var(--wa-color-surface-raised);
    border-radius: var(--wa-panel-border-radius);
    border: none;
    box-shadow: var(--wa-shadow-l);
    padding: 0;
    margin: auto;

    &.show {
      animation: show-dialog var(--show-duration) ease;

      &::backdrop {
        animation: show-backdrop var(--show-duration, 200ms) ease;
      }
    }

    &.hide {
      animation: show-dialog var(--hide-duration) ease reverse;

      &::backdrop {
        animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
      }
    }

    &.pulse {
      animation: pulse 250ms ease;
    }
  }

  .dialog:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog {
      max-height: 80vh;
    }
  }

  .open {
    display: flex;
    opacity: 1;
  }

  .header {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: nowrap;

    padding-inline-start: var(--spacing);
    padding-block-end: 0;

    /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
    padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
    padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
  }

  .title {
    align-self: center;
    flex: 1 1 auto;
    font-family: inherit;
    font-size: var(--wa-font-size-l);
    font-weight: var(--wa-font-weight-heading);
    line-height: var(--wa-line-height-condensed);
    margin: 0;
  }

  .header-actions {
    align-self: start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--wa-space-2xs);
    padding-inline-start: var(--spacing);
  }

  .header-actions wa-button,
  .header-actions ::slotted(wa-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .body {
    flex: 1 1 auto;
    display: block;
    padding: var(--spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  .footer {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: var(--wa-space-xs);
    justify-content: end;
    padding: var(--spacing);
    padding-block-start: 0;
  }

  .footer ::slotted(wa-button:not(:first-of-type)) {
    margin-inline-start: var(--wa-spacing-xs);
  }

  .dialog::backdrop {
    /*
      NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
      remove the fallback values here.
    */
    background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
    backdrop-filter: var(--backdrop-filter);
  }

  @keyframes pulse {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.02;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes show-dialog {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  @keyframes show-backdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (forced-colors: active) {
    .dialog {
      border: solid 1px white;
    }
  }
`})))()}var ya;function ba(){return(ba=e((()=>{ya=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}}})))()}var q;function xa(){return(xa=e((()=>{sa(),ha(),cn(),un(),fn(),mn(),va(),Wi(),ba(),I(),Gn(),P(),o(),n(),r(),q=class extends F{constructor(){super(...arguments),this.localize=new Wn(this),this.hasSlotController=new ya(this,`footer`,`header-actions`,`label`),this.renderedWatcher=new oa(this,e=>this.handleRenderedChange(e)),this.open=!1,this.label=``,this.withoutHeader=!1,this.lightDismiss=!1,this.withFooter=!1,this.handleDocumentKeyDown=e=>{e.key===`Escape`&&this.open&&Hi(this)&&(e.preventDefault(),e.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(e){super.firstUpdated(e),this.open&&(this.addOpenListeners(),this.dialog.showModal(),da(this),this.renderedWatcher.start(this.dialog))}disconnectedCallback(){super.disconnectedCallback(),this.renderedWatcher.stop(),fa(this),this.removeOpenListeners()}async requestClose(e){let t=new ln({source:e});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0,$i(this.dialog,`pulse`);return}this.removeOpenListeners(),await $i(this.dialog,`hide`),this.open=!1,this.dialog.close(),fa(this),this.renderedWatcher.stop();let n=this.originalTrigger;typeof n?.focus==`function`&&setTimeout(()=>n.focus()),this.dispatchEvent(new pn)}addOpenListeners(){document.addEventListener(`keydown`,this.handleDocumentKeyDown),Bi(this)}removeOpenListeners(){document.removeEventListener(`keydown`,this.handleDocumentKeyDown),Vi(this)}handleDialogCancel(e){e.preventDefault(),!this.dialog.classList.contains(`hide`)&&e.target===this.dialog&&Hi(this)&&this.requestClose(this.dialog)}handleDialogClick(e){let t=e.target.closest(`[data-dialog="close"]`);t&&(e.stopPropagation(),this.requestClose(t))}async handleDialogPointerDown(e){e.target===this.dialog&&(this.lightDismiss?this.requestClose(this.dialog):await $i(this.dialog,`pulse`))}handleRenderedChange(e){if(!this.open){this.renderedWatcher.stop();return}!e&&this.dialog.open?(this.removeOpenListeners(),this.dialog.close(),fa(this)):e&&!this.dialog.open&&(this.addOpenListeners(),this.dialog.showModal(),da(this))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open?(this.open=!0,this.requestClose(this.dialog)):this.open||this.renderedWatcher.stop()}async show(){let e=new sn;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),da(this),this.renderedWatcher.start(this.dialog),requestAnimationFrame(()=>{let e=this.querySelector(`[autofocus]`);e&&typeof e.focus==`function`?e.focus():this.dialog.focus()}),await $i(this.dialog,`show`),this.dispatchEvent(new dn)}render(){let e=!this.withoutHeader,t=this.hasSlotController.test(`footer`,`withFooter`);return d`
      <dialog
        part="dialog"
        class=${u({dialog:!0,open:this.open})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${e?d`
              <div part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:`​`} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${e=>this.requestClose(e.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term(`close`)}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </div>
            `:``}

        <div part="body" class="body"><slot></slot></div>

        <!-- Use a hidden element so we still get "slotchange" events. -->
        <div part="footer" class="footer" ?hidden=${!t}>
          <slot name="footer"></slot>
        </div>
      </dialog>
    `}},q.css=_a,N([b(`.dialog`)],q.prototype,`dialog`,2),N([x({type:Boolean,reflect:!0})],q.prototype,`open`,2),N([x({reflect:!0})],q.prototype,`label`,2),N([x({attribute:`without-header`,type:Boolean,reflect:!0})],q.prototype,`withoutHeader`,2),N([x({attribute:`light-dismiss`,type:Boolean})],q.prototype,`lightDismiss`,2),N([x({attribute:`with-footer`,type:Boolean})],q.prototype,`withFooter`,2),N([G(`open`,{waitUntilFirstUpdate:!0})],q.prototype,`handleOpenChange`,1),q=N([y(`wa-dialog`)],q),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-dialog]`);if(t instanceof Element){let[e,n]=ga(t.getAttribute(`data-dialog`)||``);if(e===`open`&&n?.length){let e=t.getRootNode().getElementById(n);e?.localName===`wa-dialog`?e.open=!0:console.warn(`A dialog with an ID of "${n}" could not be found in this document.`)}}}),document.addEventListener(`pointerdown`,()=>{})})))()}var Sa;function Ca(){return(Ca=e((()=>{Sa=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}})})))()}var wa;function Ta(){return(Ta=e((()=>{wa=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}}})))()}var Ea,J;function Da(){return(Da=e((()=>{Ta(),I(),P(),o(),n(),Ea=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),J=class extends F{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new wa))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[Ea()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}},J.formAssociated=!0,N([x({reflect:!0})],J.prototype,`name`,2),N([x({type:Boolean})],J.prototype,`disabled`,2),N([x({state:!0,attribute:!1})],J.prototype,`valueHasChanged`,2),N([x({state:!0,attribute:!1})],J.prototype,`hasInteracted`,2),N([x({attribute:`custom-error`,reflect:!0})],J.prototype,`customError`,2),N([x({attribute:!1,state:!0,type:Object})],J.prototype,`validity`,1)})))()}function Oa(e,t){t in ka&&!Aa.has(`${e}:${t}`)&&(Aa.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${ka[t]}" instead. The long-form value will be removed in the next major version.`))}var ka,Aa;function ja(){return(ja=e((()=>{ka={small:`s`,medium:`m`,large:`l`},Aa=new Set})))()}var Ma;function Na(){return(Na=e((()=>{o(),Ma=h`
  :host([size='xs']) {
    font-size: var(--wa-font-size-xs);
  }

  :host([size='s']),
  :host([size='small']) {
    font-size: var(--wa-font-size-s);
  }

  :host([size='m']),
  :host([size='medium']) {
    font-size: var(--wa-font-size-m);
  }

  :host([size='l']),
  :host([size='large']) {
    font-size: var(--wa-font-size-l);
  }

  :host([size='xl']) {
    font-size: var(--wa-font-size-xl);
  }
`})))()}var Pa;function Fa(){return(Fa=e((()=>{o(),Pa=h`
  @layer wa-component {
    :host {
      display: inline-block;

      /* Workaround because Chrome doesn't like :host(:has()) below
       * https://issues.chromium.org/issues/40062355
       * Firefox doesn't like this nested rule, so both are needed */
      &:has(wa-badge) {
        position: relative;
      }
    }

    /* Apply relative positioning only when needed to position wa-badge
     * This avoids creating a new stacking context for every button */
    :host(:has(wa-badge)) {
      position: relative;
    }
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    transition-property: background, border, box-shadow, color, opacity, transform;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    transform-origin: center;
    cursor: pointer;
    padding: 0 var(--wa-form-control-padding-inline);
    font-family: inherit;
    font-size: inherit;
    font-weight: var(--wa-font-weight-action);
    height: var(--wa-form-control-height);
    width: 100%;

    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));

    border-color: transparent;
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-form-control-border-radius));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-form-control-border-radius));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-form-control-border-radius));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-form-control-border-radius));
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
  }

  /* Hover and active transforms */
  .button:not(.disabled):not(.loading) {
    @media (hover: hover) {
      &:hover {
        transform: var(--wa-button-transform-hover);
      }
    }
    &:active {
      transform: var(--wa-button-transform-active);
    }

    @media (prefers-reduced-motion: reduce) {
      &:hover,
      &:active {
        transform: none;
      }
    }
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled-outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='accent']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
        var(--wa-color-mix-active)
      );
    }
  }

  /* Focus states */
  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled state */
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;

    /* When disabled, prevent mouse events from bubbling up from children */
    .button {
      pointer-events: none;
    }
  }

  /* Keep it last so Safari doesn't stop parsing this block */
  .button::-moz-focus-inner {
    border: 0;
  }

  /* Icon buttons */
  .button.is-icon-button {
    outline-offset: 2px;
    width: var(--wa-form-control-height);
    aspect-ratio: 1;
  }

  /* Icon buttons with a caret need to grow to fit both the icon and the caret */
  .button.is-icon-button.caret {
    width: auto;
    aspect-ratio: auto;
    min-width: var(--wa-form-control-height);
  }

  /* Pill modifier */
  :host([pill]) .button {
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-border-radius-pill));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-border-radius-pill));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-border-radius-pill));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-border-radius-pill));
  }

  /*
   * Label
   */

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .label {
    display: inline-block;
  }

  .is-icon-button .label {
    display: flex;
    justify-content: center;
  }

  .label::slotted(wa-icon) {
    align-self: center;
  }

  /*
   * Caret modifier
   */

  wa-icon[part='caret'] {
    display: flex;
    align-self: center;
    align-items: center;

    &::part(svg) {
      width: 0.875em;
      height: 0.875em;
    }

    .button:has(&) .end {
      display: none;
    }
  }

  /*
   * Loading modifier
   */

  .loading {
    position: relative;
    cursor: wait;

    .start,
    .label,
    .end,
    .caret {
      /* Hidden with opacity, not visibility, so the label stays in the accessibility tree */
      opacity: 0;

      /* Unlike visibility: hidden, opacity leaves the content clickable */
      pointer-events: none;
    }

    wa-spinner {
      --indicator-color: currentColor;
      --track-color: color-mix(in oklab, currentColor, transparent 90%);

      position: absolute;
      font-size: 1em;
      height: 1em;
      width: 1em;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.5em);
    }
  }

  /*
   * Badges
   */

  .button ::slotted(wa-badge) {
    border-color: var(--wa-color-surface-default);
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  :host(:dir(rtl)) ::slotted(wa-badge) {
    translate: -50% -50%;
  }

  /*
  * Button spacing
  */

  slot[name='start']::slotted(*) {
    margin-inline-end: 0.75em;
  }

  slot[name='end']::slotted(*),
  .button:not(.visually-hidden-label) [part='caret'] {
    margin-inline-start: 0.75em;
  }
`})))()}var Ia;function La(){return(La=e((()=>{o(),Ia=h`
  :where(:root),
  .wa-neutral,
  :host([variant='neutral']) {
    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);
    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);
    --wa-color-border-loud: var(--wa-color-neutral-border-loud);
    --wa-color-border-normal: var(--wa-color-neutral-border-normal);
    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);
    --wa-color-on-loud: var(--wa-color-neutral-on-loud);
    --wa-color-on-normal: var(--wa-color-neutral-on-normal);
    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);
  }

  .wa-brand,
  :host([variant='brand']) {
    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);
    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);
    --wa-color-border-loud: var(--wa-color-brand-border-loud);
    --wa-color-border-normal: var(--wa-color-brand-border-normal);
    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);
    --wa-color-on-loud: var(--wa-color-brand-on-loud);
    --wa-color-on-normal: var(--wa-color-brand-on-normal);
    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);
  }

  .wa-success,
  :host([variant='success']) {
    --wa-color-fill-loud: var(--wa-color-success-fill-loud);
    --wa-color-fill-normal: var(--wa-color-success-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);
    --wa-color-border-loud: var(--wa-color-success-border-loud);
    --wa-color-border-normal: var(--wa-color-success-border-normal);
    --wa-color-border-quiet: var(--wa-color-success-border-quiet);
    --wa-color-on-loud: var(--wa-color-success-on-loud);
    --wa-color-on-normal: var(--wa-color-success-on-normal);
    --wa-color-on-quiet: var(--wa-color-success-on-quiet);
  }

  .wa-warning,
  :host([variant='warning']) {
    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);
    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);
    --wa-color-border-loud: var(--wa-color-warning-border-loud);
    --wa-color-border-normal: var(--wa-color-warning-border-normal);
    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);
    --wa-color-on-loud: var(--wa-color-warning-on-loud);
    --wa-color-on-normal: var(--wa-color-warning-on-normal);
    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);
  }

  .wa-danger,
  :host([variant='danger']) {
    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);
    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);
    --wa-color-border-loud: var(--wa-color-danger-border-loud);
    --wa-color-border-normal: var(--wa-color-danger-border-normal);
    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);
    --wa-color-on-loud: var(--wa-color-danger-on-loud);
    --wa-color-on-normal: var(--wa-color-danger-on-normal);
    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);
  }
`})))()}var Y;function Ra(){return(Ra=e((()=>{Ca(),Da(),Ta(),ja(),ba(),Na(),Fa(),La(),Gn(),P(),n(),r(),s(),c(),Y=class extends J{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new ya(this,`[default]`,`start`,`end`),this.localize=new Wn(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,Sa()]}handleSizeChange(){Oa(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new wa)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?l`a`:l`button`;return i`
      <${t}
        part="base button"
        class=${u({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${C(e?void 0:this.disabled)}
        type=${C(e?void 0:this.type)}
        title=${this.title}
        name=${C(e?void 0:this.name)}
        value=${C(e?void 0:this.value)}
        href=${C(e?this.href:void 0)}
        target=${C(e?this.target:void 0)}
        download=${C(e?this.download:void 0)}
        rel=${C(e&&this.rel?this.rel:void 0)}
        role=${C(e?void 0:`button`)}
        aria-disabled=${C(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?i`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?i`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}},Y.shadowRootOptions={...J.shadowRootOptions,delegatesFocus:!0},Y.css=[Pa,Ia,Ma],N([b(`.button`)],Y.prototype,`button`,2),N([b(`slot:not([name])`)],Y.prototype,`labelSlot`,2),N([m()],Y.prototype,`invalid`,2),N([m()],Y.prototype,`isIconButton`,2),N([x()],Y.prototype,`title`,2),N([x({reflect:!0})],Y.prototype,`variant`,2),N([x({reflect:!0})],Y.prototype,`appearance`,2),N([x({reflect:!0})],Y.prototype,`size`,2),N([G(`size`)],Y.prototype,`handleSizeChange`,1),N([x({attribute:`with-caret`,type:Boolean,reflect:!0})],Y.prototype,`withCaret`,2),N([x({attribute:`with-start`,type:Boolean})],Y.prototype,`withStart`,2),N([x({attribute:`with-end`,type:Boolean})],Y.prototype,`withEnd`,2),N([x({type:Boolean})],Y.prototype,`disabled`,2),N([x({type:Boolean,reflect:!0})],Y.prototype,`loading`,2),N([x({type:Boolean,reflect:!0})],Y.prototype,`pill`,2),N([x()],Y.prototype,`type`,2),N([x({reflect:!0})],Y.prototype,`name`,2),N([x({reflect:!0})],Y.prototype,`value`,2),N([x({reflect:!0})],Y.prototype,`href`,2),N([x()],Y.prototype,`target`,2),N([x()],Y.prototype,`rel`,2),N([x()],Y.prototype,`download`,2),N([x({attribute:`formaction`})],Y.prototype,`formAction`,2),N([x({attribute:`formenctype`})],Y.prototype,`formEnctype`,2),N([x({attribute:`formmethod`})],Y.prototype,`formMethod`,2),N([x({attribute:`formnovalidate`,type:Boolean})],Y.prototype,`formNoValidate`,2),N([x({attribute:`formtarget`})],Y.prototype,`formTarget`,2),N([G(`disabled`,{waitUntilFirstUpdate:!0})],Y.prototype,`handleDisabledChange`,1),N([G(`href`)],Y.prototype,`handleHrefChange`,1),N([G(`loading`,{waitUntilFirstUpdate:!0})],Y.prototype,`handleLoadingChange`,1),Y=N([y(`wa-button`)],Y),Y.disableWarning?.(`change-in-update`)})))()}var za;function Ba(){return(Ba=e((()=>{o(),za=h`
  :host {
    --track-width: 2px;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --speed: 2s;
    --size: 1em;

    /*
      Resizing a spinner element using anything but font-size will break the animation because the animation uses em
      units. Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can
      grow/shrink and break the animation. The use of \`flex: none\` on the host element prevents this by always having
      the spinner sized according to its actual dimensions.
    */
    flex: none;
    display: inline-flex;
    width: var(--size);
    height: var(--size);
  }

  svg {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    animation: spin var(--speed) linear infinite;
  }

  .track,
  .indicator {
    --radius: calc(var(--size) / 2 - var(--track-width) / 2);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
    r: var(--radius);
    fill: none;
    stroke-width: var(--track-width);
  }

  .track {
    stroke: var(--track-color);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: calc(0.597 * var(--circumference)), calc(0.796 * var(--circumference));
    stroke-dashoffset: calc(-0.04 * var(--circumference));
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: calc(0.008 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.278 * var(--circumference));
    }
    100% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.987 * var(--circumference));
    }
  }
`})))()}var Va;function Ha(){return(Ha=e((()=>{Ba(),I(),Gn(),P(),o(),n(),Va=class extends F{constructor(){super(...arguments),this.localize=new Wn(this)}render(){return d`
      <svg
        part="base spinner"
        role="progressbar"
        aria-label=${this.localize.term(`loading`)}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" />
        <circle class="indicator" />
      </svg>
    `}},Va.css=za,Va=N([y(`wa-spinner`)],Va)})))()}var Ua;function Wa(){return(Wa=e((()=>{Ua=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}}})))()}var Ga;function Ka(){return(Ka=e((()=>{Ga=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}}})))()}var qa;function Ja(){return(Ja=e((()=>{o(),qa=h`
  :host {
    --primary-color: currentColor;
    --primary-opacity: 1;
    --secondary-color: currentColor;
    --secondary-opacity: 0.4;
    --rotate-angle: 0deg;

    box-sizing: content-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: -0.125em;
  }

  /* #region Canvas — the box the icon is centered within (mirrors Font Awesome's icon canvas). Orthogonal to font-size. */

  /* Fixed width (default): 1.25em × 1em (20 × 16px) */
  :host(:not([canvas])),
  :host([canvas='fixed']) {
    width: 1.25em;
    height: 1em;
    min-width: 1.25em; /* <-- this is what Safari respects for intrinsic */
    min-height: 1em;
  }

  /* Auto: hug the icon's width. \`auto-width\` is the deprecated alias for canvas="auto". */
  :host([canvas='auto']),
  :host([auto-width]:not([canvas])) {
    width: auto;
    height: 1em;
  }

  /* Square: 1.25em × 1.25em (20 × 20px) */
  :host([canvas='square']) {
    width: 1.25em;
    height: 1.25em;
    min-width: 1.25em;
    min-height: 1.25em;
  }

  /* Roomy: 1.5em × 1.5em (24 × 24px) */
  :host([canvas='roomy']) {
    width: 1.5em;
    height: 1.5em;
    min-width: 1.5em;
    min-height: 1.5em;
  }

  /* #endregion */

  svg {
    /* NOTE: Avoid setting fill here. A stylesheet rule beats SVG presentation attributes, breaking stroke-based
       libraries like Lucide (fill="none" stroke="currentColor") and attribute-based mutators (issue #1733). The default
       library applies fill="currentColor" in its mutator instead. */
    height: 1em;
    overflow: visible;
    width: auto;

    /* Duotone colors with path-specific opacity fallback */
    path[data-duotone-primary] {
      color: var(--primary-color);
      opacity: var(--path-opacity, var(--primary-opacity));
    }

    path[data-duotone-secondary] {
      color: var(--secondary-color);
      opacity: var(--path-opacity, var(--secondary-opacity));
    }
  }

  /* Rotation */
  :host([rotate]) {
    transform: rotate(var(--rotate-angle, 0deg));
  }

  /* Flipping */
  :host([flip='x']) {
    transform: scaleX(-1);
  }
  :host([flip='y']) {
    transform: scaleY(-1);
  }
  :host([flip='both']) {
    transform: scale(-1, -1);
  }

  /* Rotation and Flipping combined */
  :host([rotate][flip='x']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleX(-1);
  }
  :host([rotate][flip='y']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleY(-1);
  }
  :host([rotate][flip='both']) {
    transform: rotate(var(--rotate-angle, 0deg)) scale(-1, -1);
  }

  /* #region Animations — ported from Font Awesome 7.3 (--fa-* props mapped to wa-icon's --* names) */

  :host([animation='beat']) {
    animation-name: beat;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='bounce']) {
    animation-name: bounce;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
  }

  :host([animation='fade']) {
    animation-name: fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='beat-fade']) {
    animation-name: beat-fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='flip']) {
    animation-name: flip;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1.5s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='flip-360']) {
    animation-name: flip-360;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='shake']) {
    animation-name: shake;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.75s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='spin']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-pulse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, steps(8));
  }

  /* spin-reverse is FA's reverse modifier expressed as a standalone value; reverse any spin via --animation-direction: reverse */
  :host([animation='spin-reverse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, reverse);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap']) {
    animation-name: spin-snap;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 3s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap-4']) {
    animation-name: spin-snap-4;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2.4s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap-8']) {
    animation-name: spin-snap-8;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 4s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='buzz']) {
    animation-name: buzz;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.6s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='wag']) {
    animation-name: wag;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.9s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
    transform-origin: bottom center;
  }

  :host([animation='float']) {
    animation-name: float;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 3s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
    will-change: transform;
  }

  :host([animation='swing']) {
    animation-name: swing;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1.2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
    transform-origin: top center;
  }

  :host([animation='jello']) {
    animation-name: jello;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.9s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
  }

  @media (prefers-reduced-motion: reduce) {
    :host([animation='beat']),
    :host([animation='bounce']),
    :host([animation='fade']),
    :host([animation='beat-fade']),
    :host([animation='flip']),
    :host([animation='flip-360']),
    :host([animation='shake']),
    :host([animation='spin']),
    :host([animation='spin-pulse']),
    :host([animation='spin-reverse']),
    :host([animation='spin-snap']),
    :host([animation='spin-snap-4']),
    :host([animation='spin-snap-8']),
    :host([animation='buzz']),
    :host([animation='wag']),
    :host([animation='float']),
    :host([animation='swing']),
    :host([animation='jello']) {
      animation: none !important;
      transition: none !important;
    }
  }

  /* #endregion */

  /* #region Keyframes — ported verbatim from Font Awesome 7.3 */

  @keyframes beat {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(calc(1.25 * var(--beat-scale, 1.25)));
    }
    45% {
      transform: scale(calc(1.22 * var(--beat-scale, 1.22)));
    }
    65% {
      transform: scale(calc(1.25 * var(--beat-scale, 1.25)));
    }
    90% {
      transform: scale(1);
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
      /* No fallback by design (ported from FA 7.3): the first segment uses the user's --animation-timing or the CSS
         initial ease, while the explicit cubic-beziers on later stops drive the bounce physics. */
      animation-timing-function: var(--animation-timing);
    }
    14% {
      transform: scale(var(--bounce-start-scale-x, 1.06), var(--bounce-start-scale-y, 0.94))
        translateY(var(--bounce-anticipation, 3px));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    32% {
      transform: scale(var(--bounce-jump-scale-x, 0.94), var(--bounce-jump-scale-y, 1.12))
        translateY(calc(-1 * var(--bounce-height, 0.5em)));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    52% {
      transform: scale(1, 1) translateY(calc(-1 * var(--bounce-height, 0.5em) * 1.1));
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    70% {
      transform: scale(var(--bounce-land-scale-x, 1.06), var(--bounce-land-scale-y, 0.92)) translateY(0);
      animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
    }
    85% {
      transform: scale(0.98, 1.04) translateY(calc(-2px * var(--bounce-rebound, 1)));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  @keyframes fade {
    0% {
      opacity: 1;
      transform: scale(1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    40% {
      opacity: var(--fade-opacity, 0.4);
      transform: scale(0.98);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes beat-fade {
    0% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    25% {
      opacity: calc(var(--beat-fade-opacity, 0.4) + 0.4);
      transform: scale(var(--beat-fade-scale, 1.28));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    45% {
      opacity: 1;
      transform: scale(var(--beat-fade-scale, 1.25));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    65% {
      opacity: calc(var(--beat-fade-opacity, 0.4) + 0.4);
      transform: scale(var(--beat-fade-scale, 1.28));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    100% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
    }
  }

  @keyframes flip {
    0% {
      transform: perspective(2em) scale(1) rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    8% {
      transform: perspective(2em) scale(var(--flip-anticipation-scale, 0.95))
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    35% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.6));
      animation-timing-function: linear;
    }
    65% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.5));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    92% {
      transform: perspective(2em) scale(1)
        rotate3d(
          var(--flip-x, 0),
          var(--flip-y, 1),
          var(--flip-z, 0),
          calc(var(--flip-angle, -360deg) * var(--flip-overshoot, 1.04))
        );
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -360deg));
    }
  }

  @keyframes flip-360 {
    0% {
      transform: perspective(2em) scale(1) rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    8% {
      transform: perspective(2em) scale(var(--flip-anticipation-scale, 0.95))
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    50% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.6));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    80% {
      transform: perspective(2em) scale(1)
        rotate3d(
          var(--flip-x, 0),
          var(--flip-y, 1),
          var(--flip-z, 0),
          calc(var(--flip-angle, -360deg) * var(--flip-overshoot, 1.04))
        );
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -360deg));
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    8% {
      transform: rotate(35deg) translateX(1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    20% {
      transform: rotate(-22deg) translateX(-1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    35% {
      transform: rotate(15deg) translateX(1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    50% {
      transform: rotate(-9deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    65% {
      transform: rotate(5deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    78% {
      transform: rotate(-3deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    90% {
      transform: rotate(1deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    12% {
      transform: rotate(60deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    16.67% {
      transform: rotate(60deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    28.67% {
      transform: rotate(120deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    33.33% {
      transform: rotate(120deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    45.33% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    62% {
      transform: rotate(240deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    66.67% {
      transform: rotate(240deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    78.67% {
      transform: rotate(300deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    83.33% {
      transform: rotate(300deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    95.33% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap-4 {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    15% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    25% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    40% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    65% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    75% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    90% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap-8 {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    9% {
      transform: rotate(45deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    12.5% {
      transform: rotate(45deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    21.5% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    25% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    34% {
      transform: rotate(135deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    37.5% {
      transform: rotate(135deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    46.5% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    59% {
      transform: rotate(225deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    62.5% {
      transform: rotate(225deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    71.5% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    75% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    84% {
      transform: rotate(315deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    87.5% {
      transform: rotate(315deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    96.5% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes buzz {
    0% {
      transform: translateX(0) rotate(0deg);
      animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
    }
    5% {
      transform: translateX(var(--buzz-distance, 4px)) rotate(0.5deg);
    }
    10% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px))) rotate(-0.5deg);
    }
    15% {
      transform: translateX(var(--buzz-distance, 4px)) rotate(0.3deg);
    }
    20% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px))) rotate(-0.3deg);
    }
    25% {
      transform: translateX(calc(var(--buzz-distance, 4px) * 0.7)) rotate(0.2deg);
    }
    30% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
    }
    35% {
      transform: translateX(calc(var(--buzz-distance, 4px) * 0.4)) rotate(0.1deg);
    }
    40% {
      transform: translateX(0) rotate(0deg);
    }
    100% {
      transform: translateX(0) rotate(0deg);
    }
  }

  @keyframes wag {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    12% {
      transform: rotate(var(--wag-angle, 12deg));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    24% {
      transform: rotate(2deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    36% {
      transform: rotate(calc(var(--wag-angle, 12deg) * 0.85));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    48% {
      transform: rotate(1deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    58% {
      transform: rotate(calc(var(--wag-angle, 12deg) * 0.6));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    68% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    15% {
      transform: translateY(calc(-0.4 * var(--float-height, 6px))) translateX(var(--float-drift, 1px))
        rotate(var(--float-tilt, 1deg)) scale(1, 1);
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    35% {
      transform: translateY(calc(-1 * var(--float-height, 6px))) translateX(0) rotate(0deg)
        scale(var(--float-stretch-x, 0.98), var(--float-stretch-y, 1.03));
      animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
    }
    50% {
      transform: translateY(calc(-0.92 * var(--float-height, 6px))) translateX(calc(-0.5 * var(--float-drift, 1px)))
        rotate(calc(-0.5 * var(--float-tilt, 1deg))) scale(0.995, 1.01);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    70% {
      transform: translateY(calc(-0.3 * var(--float-height, 6px))) translateX(calc(-1 * var(--float-drift, 1px)))
        rotate(calc(-1 * var(--float-tilt, 1deg))) scale(1, 1);
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    90% {
      transform: translateY(calc(0.05 * var(--float-height, 6px))) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: translateY(0) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
    }
  }

  @keyframes swing {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    8% {
      transform: rotate(var(--swing-angle, 22deg));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    18% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.85));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    28% {
      transform: rotate(calc(var(--swing-angle, 22deg) * 0.65));
      animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
    }
    38% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.45));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    48% {
      transform: rotate(calc(var(--swing-angle, 22deg) * 0.25));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    56% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.1));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    64% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes jello {
    0% {
      transform: scale(1, 1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    12% {
      transform: scale(var(--jello-scale-x, 1.15), calc(2 - var(--jello-scale-x, 1.15)));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    24% {
      transform: scale(calc(2 - var(--jello-scale-y, 1.12)), var(--jello-scale-y, 1.12));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    36% {
      transform: scale(
        calc(1 + (var(--jello-scale-x, 1.15) - 1) * 0.5),
        calc(2 - (1 + (var(--jello-scale-x, 1.15) - 1) * 0.5))
      );
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    48% {
      transform: scale(
        calc(2 - (1 + (var(--jello-scale-y, 1.12) - 1) * 0.3)),
        calc(1 + (var(--jello-scale-y, 1.12) - 1) * 0.3)
      );
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    58% {
      transform: scale(1.02, 0.98);
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    68% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  /* #endregion */
`})))()}function Ya(){return Qa.replace(/\/$/,``)}function Xa(e){$a=e}function Za(){if(!$a){let e=document.querySelector(`[data-fa-kit-code]`);e&&Xa(e.getAttribute(`data-fa-kit-code`)||``)}return $a}var Qa,$a;function eo(){return(eo=e((()=>{Qa=``,$a=``})))()}function to(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function no(e,t,n){let r=to(e,t,n),i=Ya();if(i)return`${i}/${r}/${e}.svg`;let a=Za();return a.length>0?`https://ka-p.fontawesome.com/releases/v${ro}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${ro}/svgs/${r}/${e}.svg`}var ro,io;function ao(){return(ao=e((()=>{eo(),ro=`7.3.0`,io={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>no(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}}})))()}function oo(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var so,co;function lo(){return(lo=e((()=>{so={solid:{backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},co={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=so[n][e]??so.regular[e]??so.regular[`circle-question`];return r?oo(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}}})))()}function uo(e){_o.add(e)}function fo(e){_o.delete(e)}function po(e){return go.find(t=>t.name===e)}function mo(){return ho}var ho,go,_o;function vo(){return(vo=e((()=>{ao(),lo(),ho=`classic`,go=[io,co],_o=new Set})))()}var yo,bo,xo,So,X;function Co(){return(Co=e((()=>{Wa(),Ka(),Ja(),I(),vo(),P(),o(),n(),_(),yo=Symbol(),bo=Symbol(),So=new Map,X=class extends F{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=d`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?yo:bo}catch{return bo}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return yo;xo||=new DOMParser;let r=xo.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):yo}catch{return yo}}}connectedCallback(){super.connectedCallback(),uo(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),fo(this)}async getIconSource(){let e=po(this.library),t=this.family||mo();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?po(this.library):void 0;if(!e){this.svg=null;return}let r=So.get(e);r||(r=this.resolveIcon(e,n),So.set(e,r));let i=await r;if(i===bo&&So.delete(e),e===(await this.getIconSource()).url){if(g(i)){this.svg=i;return}switch(i){case bo:case yo:this.svg=null,this.dispatchEvent(new Ua);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new Ga)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=po(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:d`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}},X.css=qa,N([m()],X.prototype,`svg`,2),N([x({reflect:!0})],X.prototype,`name`,2),N([x({reflect:!0})],X.prototype,`family`,2),N([x({reflect:!0})],X.prototype,`variant`,2),N([x({reflect:!0})],X.prototype,`canvas`,2),N([x({attribute:`auto-width`,type:Boolean,reflect:!0})],X.prototype,`autoWidth`,2),N([x({attribute:`swap-opacity`,type:Boolean,reflect:!0})],X.prototype,`swapOpacity`,2),N([x()],X.prototype,`src`,2),N([x()],X.prototype,`label`,2),N([x({reflect:!0})],X.prototype,`library`,2),N([x({type:Number,reflect:!0})],X.prototype,`rotate`,2),N([x({type:String,reflect:!0})],X.prototype,`flip`,2),N([x({type:String,reflect:!0})],X.prototype,`animation`,2),N([G(`label`)],X.prototype,`handleLabelChange`,1),N([G([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],X.prototype,`setIcon`,1),X=N([y(`wa-icon`)],X)})))()}function wo(){return(wo=e((()=>{xa(),sa(),va(),Ra(),Ha(),Ba(),Da(),Na(),Fa(),La(),Co(),Ja(),I(),Gn(),Un()})))()}function To(e){try{return e instanceof Error||Object.prototype.toString.call(e)===`[object Error]`}catch{return!1}}function Eo(e){try{if(e instanceof AggregateError)return!0;for(let t=Object.getPrototypeOf(e);t;t=Object.getPrototypeOf(t)){let e=Object.getOwnPropertyDescriptor(t,`constructor`)?.value;if(typeof e==`function`&&e.name===`AggregateError`)return!0}}catch{}return!1}function Do(e,t){try{return e[t]}catch{return}}function Oo(e,t){let n=Do(e,t);return typeof n==`string`?n:void 0}function ko(e){if((typeof e!=`object`||!e)&&typeof e!=`function`)return;try{if(Object.keys(e).some(e=>e!==`status`&&e!==`code`))return}catch{}let t=Do(e,`status`),n=Do(e,`code`);if(t!==void 0||n!==void 0)return`status=${typeof t==`string`||typeof t==`number`?String(t):`unknown`} code=${typeof n==`string`||typeof n==`number`?String(n):`unknown`}`}function Ao(e){if(e===null)return`null`;if(e===void 0)return`undefined`;if(typeof e==`string`||typeof e==`number`||typeof e==`boolean`||typeof e==`bigint`||typeof e==`symbol`)return String(e);try{let t=JSON.stringify(e);if(t!==void 0)return t}catch{}try{return Object.prototype.toString.call(e)}catch{return`Unknown error`}}function jo(e,t){let n;if(To(e)){n=Oo(e,`message`)||Oo(e,`name`)||`Error`;let r=new Set([n]),i=e=>{!e||r.has(e)||(n+=` | ${e}`,r.add(e))},a=e=>{if(e&&n.includes(e)){r.add(e);return}i(e)};if(t.includeCode){let t=Do(e,`code`);(typeof t==`string`||typeof t==`number`)&&i(String(t))}let o=Po(e,e=>{if(!To(e))return[];let t=Do(e,`cause`),n=Eo(e)?Do(e,`errors`):void 0,r=Oo(e,`name`)===`SuppressedError`?[Do(e,`error`),Do(e,`suppressed`)].map(e=>e??String(e)):[];return[t||void 0,...Array.isArray(n)?n:[],...r]});for(let e of o.slice(1))if(To(e)){a(Oo(e,`message`));let t=Do(e,`code`);(typeof t==`string`||typeof t==`number`)&&i(String(t))}else i(typeof e==`string`?e:ko(e)??Ao(e))}else n=ko(e)??Ao(e);return t.redact(n)}function Mo(e,t){if(e instanceof Error)return e;if(typeof e==`string`)return Error(e);let n=Error(t,{cause:e});return(typeof e==`object`&&e||typeof e==`function`)&&Object.assign(n,e),n}function No(e){return e instanceof Error?e:Error(String(e))}function Po(e,t){if(e==null)return[];let n=[e],r=new Set().add(e);for(let e of n)if(!(!e||typeof e!=`object`||!t))for(let i of t(e))i!=null&&!r.has(i)&&(r.add(i),n.push(i));return n}function Fo(){return(Fo=e((()=>{})))()}function Io(e,t){if(e==null)throw Error(`expected `+t+` to be defined`);return e}function Lo(){return(Lo=e((()=>{})))()}function Ro(e){let t=Math.round(e/1e3);if(t<60)return{value:t,unit:`second`};let n=Math.round(t/60);if(n<60)return{value:n,unit:`minute`};let r=Math.round(n/60);return r<48?{value:r,unit:`hour`}:{value:Math.round(r/24),unit:`day`}}function zo(e,t){let{base:n,labels:r}=Ho[t.style],i=Vo.indexOf(t.maxUnit),a=0,o=e;for(;o>=n&&a<i;)o/=n,a+=1;let s=Io(Vo[a],`byte-size unit`),c=Io(r[a],`byte-size label`),l=typeof t.fractionDigits==`function`?t.fractionDigits(o,s):t.fractionDigits;return l===null?`${o}${t.separator}${c}`:(t.floorUnits?.includes(s)&&(o=Math.floor(o*10**l)/10**l),`${o.toFixed(l)}${t.separator}${c}`)}function Bo(e,t={}){if(e<1e3)return String(Math.round(e));let n=e=>t.trimTrailingZero?e.replace(/\.0$/,``):e;if(t.maxUnit===`billion`&&e>=1e9)return`${n((e/1e9).toFixed(1))}B`;if(e<1e6){let r=(e/1e3).toFixed(t.thousandsPrecision??1);if(Number(r)<1e3)return`${n(r)}${t.thousandsSuffix??`k`}`}return`${n((e/1e6).toFixed(1))}${t.millionsSuffix??`m`}`}var Vo,Ho;function Uo(){return(Uo=e((()=>{Vo=[`byte`,`kilo`,`mega`,`giga`,`tera`],Ho={iec:{base:1024,labels:[`B`,`KiB`,`MiB`,`GiB`,`TiB`]},"legacy-binary":{base:1024,labels:[`B`,`KB`,`MB`,`GB`,`TB`]}}})))()}function Z(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function Wo(e){return typeof e==`object`&&e?e:{}}function Go(e,t){let n=e?.[t];return typeof n==`string`?n:void 0}function Ko(e){return Z(e)?e:void 0}function qo(e){return Ko(e)??{}}function Jo(e){return Z(e)?e:null}function Yo(e){return e&&typeof e==`object`?e:void 0}function Xo(e){return e&&typeof e==`object`?e:null}function Zo(){return(Zo=e((()=>{})))()}function Qo(e){try{return JSON.parse(e)}catch{return}}function $o(e){return/^[\t\n\r ]*\{/.test(e)?Ko(Qo(e)):void 0}function es(){return(es=e((()=>{})))()}function ts(e){return Number.isFinite(e)?e:void 0}function ns(e){let t=ts(e);return t&&t<0?void 0:t}function rs(e,t){let n=ts(e);if(n!==void 0&&!(t.min!==void 0&&(t.minExclusive?n<=t.min:n<t.min))&&!(t.max!==void 0&&(t.maxExclusive?n>=t.max:n>t.max)))return n}function is(e,t){if(!(typeof e!=`number`||!Number.isSafeInteger(e))&&!(t.min!==void 0&&e<t.min)&&!(t.max!==void 0&&e>t.max))return e}function as(e){return e.trim()||void 0}function os(e){if(typeof e==`number`)return Number.isSafeInteger(e)?e:void 0;if(typeof e!=`string`)return;let t=as(e);if(!t||!/^[+-]?\d+$/.test(t))return;let n=Number(t);return Number.isSafeInteger(n)?n:void 0}function ss(e){if(typeof e==`number`)return Number.isFinite(e)?e:void 0;if(typeof e!=`string`)return;let t=as(e);if(!t||!/^[+-]?(?:(?:\d+\.?\d*)|(?:\.\d+))(?:e[+-]?\d+)?$/i.test(t))return;let n=Number(t);return Number.isFinite(n)?n:void 0}function cs(e){return Number.isSafeInteger(e)&&e>0?e:void 0}function ls(e){return rs(e,{min:-864e13,max:ms})}function us(e){return typeof e==`string`?ls(Date.parse(e)):void 0}function ds(e){let t=ls(e);return t===void 0?void 0:new Date(t).toISOString()}function fs(e){let t=os(e);return t!==void 0&&t>0?t:void 0}var ps,ms;function hs(){return(hs=e((()=>{ps=2147e6,Math.floor(ps/1e3),ms=864e13})))()}function gs(e){return e>=55296&&e<=56319}function _s(e){return e>=56320&&e<=57343}function vs(e,t,n){let r=e.length,i=t<0?Math.max(r+t,0):Math.min(t,r),a=n===void 0?r:n<0?Math.max(r+n,0):Math.min(n,r);return a<=i?``:(i>0&&i<r&&_s(e.charCodeAt(i))&&gs(e.charCodeAt(i-1))&&(i+=1),a>0&&a<r&&gs(e.charCodeAt(a-1))&&_s(e.charCodeAt(a))&&--a,e.slice(i,a))}function ys(e,t){let n=Math.max(0,Math.floor(t));return e.length<=n?e:vs(e,0,n)}function bs(){return(bs=e((()=>{})))()}function xs(){return(xs=e((()=>{Fo(),Uo(),es(),hs()})))()}function Ss(e){let t=M(e?.id)??`pi`,n=M(e?.fallback);return n?`${t} (fallback ${n})`:t}function Cs(){return(Cs=e((()=>{})))()}function ws(e){return/^image\//i.test(e)}function Ts(e){return e.length<=Os&&ks.test(e)}var Es,Ds,Os,ks;function As(){return(As=e((()=>{Es=2097152,Ds=26,Os=Math.ceil(Es/3)*4+Ds,ks=/^data:image\//i})))()}function js(){return Ms.withResolvers()}var Ms;function Ns(){return(Ns=e((()=>{Ms=Promise})))()}function Ps(e){let t=e.scopes.join(`,`),n=e.token??``;return[`v2`,e.deviceId,e.clientId,e.clientMode,e.role,t,String(e.signedAtMs),n,e.nonce].join(`|`)}function Fs(){return(Fs=e((()=>{})))()}function Is(e){return typeof e==`string`&&e.length>0}function Ls(){return(Ls=e((()=>{})))()}function Rs(e){if(!Z(e))return null;let t=e.code;return typeof t==`string`&&t.trim().length>0?t.trim():null}function zs(e){let t=Rs(e);if(t!==Q.PROTOCOL_MISMATCH&&t!==Q.CONTROL_UI_BUILD_MISMATCH)return null;let n=e,r=M(n.gatewayBuildId);return!r||r.length>96||n.reloadRequired!==!0?null:r}function Bs(e){if(!Z(e))return{};let t=typeof e.canRetryWithDeviceToken==`boolean`?e.canRetryWithDeviceToken:void 0,n=M(e.recommendedNextStep)??``;return{canRetryWithDeviceToken:t,recommendedNextStep:$s.has(n)?n:void 0}}function Vs(e){let t=M(e)??``;return ec.has(t)?t:void 0}function Hs(e){let t=M(e);return t&&tc.test(t)?t:void 0}function Us(e){return{code:Q.PAIRING_REQUIRED,...e.reason?{reason:e.reason}:{},...e.requestId?{requestId:e.requestId}:{},...e.remediationHint?{remediationHint:e.remediationHint}:{},...e.recommendedNextStep?{recommendedNextStep:e.recommendedNextStep}:{},...e.retryable===void 0?{}:{retryable:e.retryable},...e.pauseReconnect===void 0?{}:{pauseReconnect:e.pauseReconnect},...e.deviceId?{deviceId:e.deviceId}:{},...e.requestedRole?{requestedRole:e.requestedRole}:{},...e.requestedScopes?{requestedScopes:e.requestedScopes}:{},...e.approvedRoles?{approvedRoles:e.approvedRoles}:{},...e.approvedScopes?{approvedScopes:e.approvedScopes}:{}}}function Ws(e){return e?nc[e].requirement:`device approval is required`}function Gs(e){return e?nc[e].remediationHint:`Approve the pending device request before retrying.`}function Ks(e){if(Rs(e)!==Q.PAIRING_REQUIRED||!Z(e))return null;let t=Vs(e.reason),n=Hs(e.requestId),r=M(e.remediationHint)??Gs(t),i=M(e.recommendedNextStep)??``,a=$s.has(i)?i:void 0,o=M(e.deviceId),s=M(e.requestedRole),c=ge(e.requestedScopes),l=ge(e.approvedRoles),u=ge(e.approvedScopes);return Us({reason:t,requestId:n,remediationHint:r,recommendedNextStep:a,retryable:typeof e.retryable==`boolean`?e.retryable:void 0,pauseReconnect:typeof e.pauseReconnect==`boolean`?e.pauseReconnect:void 0,deviceId:o,requestedRole:s,requestedScopes:c,approvedRoles:l,approvedScopes:u})}function qs(e){let t=M(e);if(!t)return null;let n=t.trim().toLowerCase(),r;for(let[e,t]of Object.entries(rc))if(n.includes(t)){r=e;break}if(!r&&n.includes(`pairing required`)&&(r=Qs.NOT_PAIRED),!r)return null;let i=Hs(t.match(/\(requestId:\s*([^\s)]+)\)/i)?.[1]);return{...i?{requestId:i}:{},reason:r}}function Js(e){let t=Ks(e),n=rc[t?.reason??Qs.NOT_PAIRED];return t?.requestId?`${n} (requestId: ${t.requestId})`:n}function Ys(e){return Rs(e.details)===Q.PAIRING_REQUIRED?Js(e.details):Rs(e.details)===Q.PROTOCOL_MISMATCH?Xs(e.message,e.details):M(e.message)??`gateway request failed`}function Xs(e,t){let n=t,r=Zs(n.clientMinProtocol),i=Zs(n.clientMaxProtocol),a=Zs(n.expectedProtocol),o=Zs(n.minimumProbeProtocol),s=[];r!==void 0&&i!==void 0&&s.push(r===i?`Control UI v${r}`:`Control UI v${r}-v${i}`),a!==void 0&&s.push(`Gateway v${a}`),o!==void 0&&s.push(`probe min v${o}`);let c=M(e)??`protocol mismatch`;return s.length>0?`${c}: ${s.join(`, `)}`:c}function Zs(e){return typeof e==`number`&&Number.isInteger(e)&&e>0?e:void 0}var Q,Qs,$s,ec,tc,nc,rc;function ic(){return(ic=e((()=>{Ce(),Q={AUTH_REQUIRED:`AUTH_REQUIRED`,AUTH_UNAUTHORIZED:`AUTH_UNAUTHORIZED`,AUTH_TOKEN_MISSING:`AUTH_TOKEN_MISSING`,AUTH_TOKEN_MISMATCH:`AUTH_TOKEN_MISMATCH`,AUTH_TOKEN_NOT_CONFIGURED:`AUTH_TOKEN_NOT_CONFIGURED`,AUTH_PASSWORD_MISSING:`AUTH_PASSWORD_MISSING`,AUTH_PASSWORD_MISMATCH:`AUTH_PASSWORD_MISMATCH`,AUTH_PASSWORD_NOT_CONFIGURED:`AUTH_PASSWORD_NOT_CONFIGURED`,AUTH_BOOTSTRAP_TOKEN_INVALID:`AUTH_BOOTSTRAP_TOKEN_INVALID`,AUTH_DEVICE_TOKEN_MISMATCH:`AUTH_DEVICE_TOKEN_MISMATCH`,AUTH_SCOPE_MISMATCH:`AUTH_SCOPE_MISMATCH`,AUTH_RATE_LIMITED:`AUTH_RATE_LIMITED`,AUTH_TAILSCALE_IDENTITY_MISSING:`AUTH_TAILSCALE_IDENTITY_MISSING`,AUTH_TAILSCALE_PROXY_MISSING:`AUTH_TAILSCALE_PROXY_MISSING`,AUTH_TAILSCALE_WHOIS_FAILED:`AUTH_TAILSCALE_WHOIS_FAILED`,AUTH_TAILSCALE_IDENTITY_MISMATCH:`AUTH_TAILSCALE_IDENTITY_MISMATCH`,AUTH_IDENTITY_HEADER_REQUIRED:`AUTH_IDENTITY_HEADER_REQUIRED`,AUTH_VERIFIED_USER_REQUIRED:`AUTH_VERIFIED_USER_REQUIRED`,AUTHENTICATED_PROFILE_UNAVAILABLE:`AUTHENTICATED_PROFILE_UNAVAILABLE`,CONTROL_UI_BUILD_MISMATCH:`CONTROL_UI_BUILD_MISMATCH`,CONTROL_UI_ORIGIN_NOT_ALLOWED:`CONTROL_UI_ORIGIN_NOT_ALLOWED`,PROTOCOL_MISMATCH:`PROTOCOL_MISMATCH`,CONTROL_UI_DEVICE_IDENTITY_REQUIRED:`CONTROL_UI_DEVICE_IDENTITY_REQUIRED`,DEVICE_IDENTITY_REQUIRED:`DEVICE_IDENTITY_REQUIRED`,DEVICE_AUTH_INVALID:`DEVICE_AUTH_INVALID`,DEVICE_AUTH_DEVICE_ID_MISMATCH:`DEVICE_AUTH_DEVICE_ID_MISMATCH`,DEVICE_AUTH_SIGNATURE_EXPIRED:`DEVICE_AUTH_SIGNATURE_EXPIRED`,DEVICE_AUTH_NONCE_REQUIRED:`DEVICE_AUTH_NONCE_REQUIRED`,DEVICE_AUTH_NONCE_MISMATCH:`DEVICE_AUTH_NONCE_MISMATCH`,DEVICE_AUTH_SIGNATURE_INVALID:`DEVICE_AUTH_SIGNATURE_INVALID`,DEVICE_AUTH_PUBLIC_KEY_INVALID:`DEVICE_AUTH_PUBLIC_KEY_INVALID`,PAIRING_REQUIRED:`PAIRING_REQUIRED`,CLIENT_VERSION_MISMATCH:`CLIENT_VERSION_MISMATCH`},Qs={NOT_PAIRED:`not-paired`,ROLE_UPGRADE:`role-upgrade`,SCOPE_UPGRADE:`scope-upgrade`,METADATA_UPGRADE:`metadata-upgrade`},$s=new Set([`retry_with_device_token`,`update_auth_configuration`,`update_auth_credentials`,`wait_then_retry`,`review_auth_configuration`]),ec=new Set([`not-paired`,`role-upgrade`,`scope-upgrade`,`metadata-upgrade`]),tc=/^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/,nc={"not-paired":{requirement:`device is not approved yet`,remediationHint:`Approve this device from the pending pairing requests.`,recoveryTitle:`Gateway pairing approval required.`},"role-upgrade":{requirement:`device is asking for a higher role than currently approved`,remediationHint:`Review the requested role upgrade, then approve the pending request.`,recoveryTitle:`Gateway role upgrade approval required.`},"scope-upgrade":{requirement:`device is asking for more scopes than currently approved`,remediationHint:`Review the requested scopes, then approve the pending upgrade.`,recoveryTitle:`Gateway scope upgrade approval required.`},"metadata-upgrade":{requirement:`device identity changed and must be re-approved`,remediationHint:`Review the refreshed device details, then approve the pending request.`,recoveryTitle:`Gateway device refresh approval required.`}},rc={"not-paired":`device pairing required`,"role-upgrade":`role upgrade pending approval`,"scope-upgrade":`scope upgrade pending approval`,"metadata-upgrade":`device metadata change pending approval`}})))()}function ac(e){return typeof e==`string`&&e.trim()||void 0}function oc(e){let t=ac(e.token),n=ac(e.bootstrapToken),r=ac(e.deviceToken),i=ac(e.password),a=ac(e.storedToken),o={storedToken:a,storedScopes:e.storedScopes};if(e.preferBootstrapToken&&n)return{authBootstrapToken:n,signatureToken:n,...o};let s=e.pendingDeviceTokenRetry===!0&&!r&&!!(t&&a&&e.trustedDeviceTokenRetry),c=r??(s||!(t||i)&&(!n||a)?a:void 0),l=!!(c&&!r&&a)&&c===a,u=t??c,d=!t&&!c&&!i?n:void 0;return{authToken:t,authBootstrapToken:d,authDeviceToken:s?a:void 0,authPassword:i,authApprovalRuntimeToken:ac(e.approvalRuntimeToken),authAgentRuntimeIdentityToken:ac(e.agentRuntimeIdentityToken),signatureToken:u??d,resolvedDeviceToken:c,usingStoredDeviceToken:l,...o}}function sc(e){let t={token:e.authToken,bootstrapToken:e.authBootstrapToken,deviceToken:e.authDeviceToken??e.resolvedDeviceToken,password:e.authPassword,approvalRuntimeToken:e.authApprovalRuntimeToken,agentRuntimeIdentityToken:e.authAgentRuntimeIdentityToken};return Object.values(t).some(Boolean)?t:void 0}function cc(e){return e.requestedScopes??(e.usingStoredDeviceToken&&e.storedScopes?.length?e.storedScopes:[...e.defaultScopes])}function lc(e){if(e.retryBudgetUsed||e.currentDeviceToken||!e.explicitToken||!e.storedToken||!e.trustedEndpoint)return!1;let t=Bs(e.errorDetails);return e.canRetryWithDeviceTokenHint===!0||t.canRetryWithDeviceToken===!0||t.recommendedNextStep===`retry_with_device_token`||Rs(e.errorDetails)===Q.AUTH_TOKEN_MISMATCH}function uc(){return(uc=e((()=>{ic()})))()}function dc(e,t){let n=e.trim();if(!n)return`default`;try{let e=globalThis.location,r=e?`${e.protocol}//${e.host}${e.pathname||`/`}`:void 0,i=r?new URL(n,r):new URL(n),a=i.pathname===`/`?``:i.pathname.replace(/\/+$/,``)||i.pathname;return`${i.protocol}//${i.host}${a}${t?i.search:``}`}catch{return n}}function fc(e){return dc(e,!1)}function pc(e){return dc(e,!0)}function mc(){return(mc=e((()=>{})))()}function hc(e){return typeof e==`number`&&Number.isInteger(e)&&e>=0}function gc(e){return!Z(e)||!Is(e.code)||!Is(e.message)||e.retryable!==void 0&&typeof e.retryable!=`boolean`?!1:e.retryAfterMs===void 0||hc(e.retryAfterMs)}function _c(e){return!Z(e)||e.type!==`event`||!Is(e.event)?!1:e.seq===void 0||hc(e.seq)}function vc(e){return!Z(e)||e.type!==`res`||!Is(e.id)||typeof e.ok!=`boolean`?!1:e.error===void 0||gc(e.error)}function yc(){return(yc=e((()=>{})))()}function bc(e,t){let n=Math.min(e.maxMs,e.initialMs*e.factor**Math.max(t-1,0)),r=n*e.jitter*Math.random();return Math.min(e.maxMs,Math.round(n+r))}async function xc(e,t,n={}){if(!Number.isFinite(e)||e<=0)return;let r=Math.min(Math.max(Math.floor(e),1),Ac);await new Promise((e,i)=>{let a=!1,o=null,s=()=>t?.removeEventListener(`abort`,c),c=()=>{if(a)return;a=!0,o&&clearTimeout(o),o=null,s();let e=Error(`aborted`,{cause:t?.reason??Error(`aborted`)});e.name=`AbortError`,i(e)};if(t?.addEventListener(`abort`,c,{once:!0}),t?.aborted){c();return}o=setTimeout(()=>{a=!0,s(),o=null,e()},r),n.ref===!1&&o.unref?.(),t?.aborted&&c()})}function Sc(e,t,n,r){let i=Number.isFinite(e)?e:void 0;return i===void 0?t:Math.min(Math.max(i,n??-1/0),r??1/0)}function Cc(e,t){return Math.max(1,Math.round(Number.isFinite(e)?e:t))}function wc(e){return Math.min(Math.max(Math.round(e===1/0?Ac:Number.isFinite(e)?e:0),0),Ac)}function Tc(e,t){if(e===`full`)return`full`;let n=Number.isFinite(e)?e:void 0;return n===void 0?t:Math.min(Math.max(n,0),1)}function Ec(e=Mc,t){let n=Cc(t?.attempts,e.attempts),r=wc(Sc(t?.minDelayMs,e.minDelayMs,0));return{attempts:n,minDelayMs:r,maxDelayMs:Math.max(r,wc(Sc(t?.maxDelayMs,e.maxDelayMs,0))),jitter:Tc(t?.jitter,e.jitter)}}function Dc(e,t,n,r){if(t===`full`)return n===`symmetric`?Math.max(0,Math.round(e*(.5+r()*.5))):Math.max(0,Math.ceil(e*(1+r())));if(t<=0)return n===`positive`?Math.ceil(e):e;let i=r(),a=e*(1+(n===`positive`?i*t:(i*2-1)*t));return Math.max(0,n===`positive`?Math.ceil(a):Math.round(a))}function Oc(e,t=`Non-Error thrown`){if(e instanceof Error)return e;if(typeof e==`string`)return Error(e);let n=Error(t,{cause:e});return(typeof e==`object`&&e||typeof e==`function`)&&Object.assign(n,e),n}function kc(e={}){let t=e.sleep??Nc,n=e.random??Math.random,r=e.createFailure??(e=>Oc(e.at(-1)??Error(`Retry failed`)));return async function(e,i=3,a=300){let o=[];if(typeof i==`number`){let n=Cc(i,Mc.attempts);for(let r=0;r<n;r+=1)try{return await e()}catch(e){if(o.push(e),r===n-1)break;await t(wc(a*2**r))}throw r(o)}let s=i,c=Ec(Mc,s),l=c.attempts,u=c.minDelayMs,d=c.maxDelayMs>0?c.maxDelayMs:1/0,f=s.retryAfterMaxDelayMs===void 0?d:Math.max(u,wc(Sc(s.retryAfterMaxDelayMs,d,0))),p=s.random??n,m=s.sleep??t,h=s.shouldRetry??(()=>!0);for(let t=1;t<=l;t+=1)try{return await e()}catch(e){if(o.push(e),t>=l||!h(e,t))break;let n={attempt:t,maxAttempts:l,err:e,label:s.label},r=s.retryAfterMs?.(e),i=typeof r==`number`&&Number.isFinite(r),a=typeof s.delayMs==`function`?s.delayMs(n):s.delayMs,g=a===void 0?void 0:wc(a),_=i?Math.max(r,u):g===void 0?u*2**(t-1):Math.max(g,u),v=i?f:d,y=Math.min(_,v),b=i&&(r??0)<=v,x=c.jitter===`full`&&!i||b;y=Dc(y,c.jitter,x?`positive`:`symmetric`,p),y=Math.min(Math.max(y,u),v),await s.onRetry?.({...n,delayMs:y}),y>0&&await m(y)}throw r(o)}}var Ac,jc,Mc,Nc;function Pc(){return(Pc=e((()=>{Ac=2147e6,jc=class{constructor(e,t=1/0){this.policy=e,this.maxAttempts=t,this.attempts=0,this.initialMs=e.initialMs}reset(e=this.policy.initialMs){this.cancel(),this.attempts=0,this.initialMs=e,this.nextDelayOverrideMs=void 0}cancel(e=Error(`retry cancelled`)){this.pendingAbort?.abort(e),this.pendingAbort=void 0}next(e){let t=this.nextDelayOverrideMs;if(this.nextDelayOverrideMs=void 0,t===void 0&&++this.attempts>Math.ceil(this.maxAttempts))return;let n=Math.max(this.attempts,1),r=t??bc({...this.policy,initialMs:this.initialMs},n);this.cancel();let i=new AbortController;return this.pendingAbort=i,{attempt:n,delayMs:r,signal:e?AbortSignal.any([i.signal,e]):i.signal}}},Mc={attempts:3,minDelayMs:300,maxDelayMs:3e4,jitter:0},Nc=e=>new Promise(t=>{setTimeout(t,e)}),kc()})))()}var Fc;function Ic(){return(Ic=e((()=>{Fc=class{constructor(){this.listeners=new Map}add(e){let t=this.listeners.get(e)??{};return this.listeners.set(e,t),()=>{this.listeners.get(e)===t&&this.listeners.delete(e)}}snapshot(){return[...this.listeners]}isCurrent(e,t){return this.listeners.get(e)===t}}})))()}function Lc(e,t){Rc.add(e),Object.defineProperty(e,"responsePayload",{value:t,enumerable:!1,configurable:!0})}var Rc,zc,Bc;function Vc(){return(Vc=e((()=>{Rc=new WeakSet,zc=class extends Error{constructor(e){super(e.message??`request failed`),this.name=`GatewayProtocolRequestError`,this.code=e.code??`UNAVAILABLE`,this.gatewayCode=this.code,this.details=e.details,this.retryable=e.retryable===!0,this.retryAfterMs=e.retryAfterMs}},Bc=class extends Error{constructor(e,t=`gateway request timed out after ${e.timeoutMs}ms: ${e.method}`){super(t),this.code=`CLIENT_TIMEOUT`,this.name=`GatewayProtocolRequestTimeoutError`,this.method=e.method,this.timeoutMs=e.timeoutMs,this.requestSent=e.requestSent}}})))()}function Hc(e){let t=setTimeout(e,Kc);return t.unref?.(),t}function Uc(e){return e!==null&&clearTimeout(e),null}function Wc(e,t){let n=t?.minMs??1,r=Math.min(Gc,Math.max(0,Number.isFinite(n)?Math.floor(n):1));return Math.min(Gc,Math.max(r,Number.isFinite(e)?Math.floor(e):r))}var Gc,Kc,qc;function Jc(){return(Jc=e((()=>{Gc=2147483647,Kc=15e3,qc=3e4})))()}var Yc;function Xc(){return(Xc=e((()=>{Vc(),Jc(),Yc=class{constructor(e){this.opts=e,this.pending=new Map,this.requestSequence=0}get hasPending(){return this.pending.size>0}get hasUnboundedPending(){for(let e of this.pending.values())if(e.unbounded)return!0;return!1}request(e,t,n,r){let i;try{i=this.allocateRequestId()}catch(e){return Promise.reject(e instanceof Error?e:Error(String(e)))}let a=r?.timeoutMs===null?void 0:r?.timeoutMs??this.opts.requestTimeoutMs,o=typeof a==`number`&&Number.isFinite(a)?Wc(a,{minMs:0}):void 0;return new Promise((a,s)=>{let c,l=!1,u={resolve:e=>a(e),reject:s,expectFinal:r?.expectFinal===!0,acceptedNotified:!1,onAccepted:r?.onAccepted,unbounded:o===void 0,method:t,startedAtMs:this.opts.nowMs()},d=()=>{c!==void 0&&clearTimeout(c),r?.signal?.removeEventListener(`abort`,p)},f=e=>this.pending.get(i)===u&&(this.pending.delete(i),d(),this.finishTiming(i,u,!1,e),!0),p=()=>{f(`CLIENT_ABORTED`)&&s(this.opts.createRequestAbortError?.(t)??Error(`gateway request aborted for ${t}`))};if(r?.signal?.aborted){s(this.opts.createRequestAbortError?.(t)??Error(`gateway request aborted for ${t}`));return}u.cleanup=d,o!==void 0&&(c=setTimeout(()=>{f(`CLIENT_TIMEOUT`)&&s(this.opts.createRequestTimeoutError?.(t,o,l)??new Bc({method:t,timeoutMs:o,requestSent:l}))},o),c.unref?.()),r?.signal?.addEventListener(`abort`,p,{once:!0}),this.pending.set(i,u);try{if(e.send(JSON.stringify({type:`req`,id:i,method:t,params:n})),this.pending.get(i)!==u)return;l=!0,this.invoke(`sent`,()=>r?.onSent?.())}catch(e){f(`CLIENT_SEND_ERROR`)&&s(e instanceof Error?e:Error(String(e)))}})}handleResponse(e){let t=this.pending.get(e.id);if(!t)return;let n=e.payload?.status;if(e.ok&&t.expectFinal&&n===`accepted`){t.acceptedNotified||(t.acceptedNotified=!0,this.invoke(`accepted`,()=>t.onAccepted?.(e.payload)));return}if(this.pending.delete(e.id),t.cleanup?.(),e.ok){this.finishTiming(e.id,t,!0),t.resolve(e.payload);return}this.finishTiming(e.id,t,!1,e.error?.code);let r=this.opts.createRequestError?.(e.error??{})??new zc(e.error??{});Lc(r,e.payload),t.reject(r)}flush(e){let t=this.pending;this.pending=new Map,this.requestSequence=0;for(let[n,r]of t)r.cleanup?.(),this.finishTiming(n,r,!1,`CLIENT_CLOSED`),r.reject(e)}allocateRequestId(){return this.requestSequence+=1,`${this.requestSequence}:${this.opts.createRequestId()}`}finishTiming(e,t,n,r){let i=this.opts.nowMs();try{this.opts.onTiming?.({id:e,method:t.method,ok:n,durationMs:Math.max(0,i-t.startedAtMs),startedAtMs:t.startedAtMs,endedAtMs:i,errorCode:r})}catch(e){this.opts.onCallbackError?.(`request timing`,e)}}invoke(e,t){try{t()}catch(t){this.opts.onCallbackError?.(e,t)}}}})))()}var Zc;function Qc(){return(Qc=e((()=>{yc(),Pc(),Ic(),Xc(),Vc(),Jc(),Zc=class{constructor(e){this.opts=e,this.socket=null,this.listeners=new Fc,this.stopped=!0,this.generation=0,this.lastSeq=null,this.connectNonce=null,this.connectSent=!1,this.connectRequestSent=!1,this.handshakeTimer=null,this.reconnectSignal=null,this.socketOpened=!1,this.helloReceived=!1,this.connectTiming=null,this.reconnectSupervisor=new jc({initialMs:e.reconnect.initialMs,maxMs:e.reconnect.maxMs,factor:e.reconnect.multiplier,jitter:0}),this.requests=new Yc({createRequestId:e.createRequestId,createRequestError:e.createRequestError,createRequestTimeoutError:e.createRequestTimeoutError,createRequestAbortError:e.createRequestAbortError,requestTimeoutMs:e.requestTimeoutMs,nowMs:()=>this.nowMs(),onTiming:e.onRequestTiming,onCallbackError:e.onCallbackError})}get connected(){return this.socket?.isOpen()??!1}get hasPendingRequests(){return this.requests.hasPending}get connecting(){return this.connectSent&&!this.helloReceived}get hasUnboundedPendingRequests(){return this.requests.hasUnboundedPending}start(){this.socket||this.reconnectSignal||(this.stopped=!1,this.reconnectSupervisor.cancel(),this.connect())}stop(){this.stopped=!0,this.clearHandshakeTimer(),this.reconnectSignal=null,this.reconnectSupervisor.reset();let e=this.socket;e&&this.opts.notifyStoppedClose&&(this.stoppedSocket={socket:e,context:this.closeContext()}),this.socket=null,this.connectFailure=void 0,this.connectTiming=null,this.requests.flush(Error(`gateway client stopped`)),e?.close()}request(e,t,n){let r=this.socket;return r?.isOpen()?typeof e!=`string`||e.length===0?Promise.reject(Error(`invalid request frame: method must be a non-empty string`)):this.requests.request(r,e,t,n):Promise.reject(Error(`gateway not connected`))}addEventListener(e){return this.listeners.add(e)}closeSocket(e,t){this.socket?.close(e,t)}resetReconnectBackoff(e){this.reconnectSignal=null,this.reconnectSupervisor.reset(e)}recordTiming(e,t,n,r){let i=this.nowMs(),a=this.connectTiming;!a||a.generation!==t||(a.hasChallenge||=e===`challenge`,a.usedFallback||=e===`fallback`,this.invoke(`connect timing`,()=>this.opts.onTiming?.({phase:e,generation:t,durationMs:Math.max(0,i-a.startedAtMs),phaseDurationMs:Math.max(0,i-a.lastAtMs),hasChallenge:a.hasChallenge,usedFallback:a.usedFallback,plan:n,detail:r})),a.lastAtMs=i,(e===`hello`||e===`failed`)&&(this.connectTiming=null))}connect(){if(this.stopped)return;let e=this.generation+1;this.lastSeq=null,this.connectNonce=null,this.connectChallengeTs=void 0,this.connectSent=this.connectRequestSent=!1,this.socketOpened=!1,this.helloReceived=!1,this.connectFailure=void 0;let t;try{t=this.opts.createSocket({open:()=>this.handleOpen(t,e),message:n=>this.handleMessage(t,e,n),close:(n,r)=>this.handleClose(t,e,n,r),error:n=>this.handleSocketError(t,e,n)})}catch(e){let t=e instanceof Error?e:Error(String(e));if(this.opts.onSocketFactoryError?.(t),this.opts.onConnectError?.(t),this.opts.rethrowSocketFactoryError?.(t))throw this.generation>0&&!this.stopped&&!this.socket&&!this.reconnectSignal&&this.opts.onReconnectStopped?.(t),t;this.opts.shouldRetrySocketFactoryError?.(t)&&!this.stopped&&!this.socket&&!this.reconnectSignal?this.scheduleReconnect():this.generation>0&&!this.stopped&&!this.socket&&!this.reconnectSignal&&this.opts.onReconnectStopped?.(t);return}this.generation=e,this.socket=t;let n=this.nowMs();this.connectTiming={generation:e,startedAtMs:n,lastAtMs:n,hasChallenge:!1,usedFallback:!1}}handleOpen(e,t){if(this.isActive(e,t)){if(this.socketOpened=!0,this.recordTiming(`socket-open`,t),this.connectNonce){this.sendConnect(e,t);return}this.armHandshakeTimer(e,t)}}armHandshakeTimer(e,t){this.clearHandshakeTimer();let n=Date.now();this.handshakeTimer=setTimeout(()=>{if(this.handshakeTimer=null,!this.isActive(e,t)||this.connectSent||!e.isOpen())return;if(this.opts.handshake.mode===`fallback`){this.recordTiming(`fallback`,t),this.sendConnect(e,t);return}let r=Date.now()-n,i=Error(this.opts.handshake.timeoutMessage?.(r)??`gateway connect challenge timeout after ${r}ms`);this.opts.onConnectError?.(i),e.close(1008,`connect challenge timeout`)},this.opts.handshake.timeoutMs),this.handshakeTimer.unref?.()}sendConnect(e,t){if(!this.isActive(e,t)||!e.isOpen()||this.connectSent)return;this.connectSent=!0,this.clearHandshakeTimer(),this.handshakeTimer=Hc(()=>{this.isActive(e,t)&&!this.helloReceived&&e.close(4e3,`connect timeout`)});let n;try{n=this.opts.buildConnectPlan({nonce:this.connectNonce,challengeTs:this.connectChallengeTs,generation:t})}catch(n){this.handleConnectPlanError(e,t,n);return}if(n instanceof Promise){n.then(n=>this.sendConnectPlan(e,t,n)).catch(n=>this.handleConnectPlanError(e,t,n));return}this.sendConnectPlan(e,t,n)}handleConnectPlanError(e,t,n){if(!this.isActive(e,t))return;let r=n instanceof Error?n:Error(String(n)),i=this.opts.onConnectPlanError?.(r)??{closeCode:1008,closeReason:`connect failed`};this.opts.onConnectError?.(i.error??r),i.stop&&(this.stopped=!0),e.close(i.closeCode,i.closeReason)}sendConnectPlan(e,t,n){if(!this.isActive(e,t)||!e.isOpen())return;let r={generation:t,nonce:this.connectNonce,challengeTs:this.connectChallengeTs,plan:n};this.recordTiming(`connect-plan-ready`,t,n),this.recordTiming(`request-sent`,t,n),this.connectRequestSent=!0,this.request(`connect`,this.opts.buildConnectParams(n)).then(i=>{!this.isActive(e,t)||!e.isOpen()||(this.helloReceived=!0,this.clearHandshakeTimer(),this.connectFailure=void 0,this.reconnectSupervisor.reset(),this.recordTiming(`hello`,t,n),this.opts.onConnectHello?.(i,r),this.invoke(`hello`,()=>this.opts.onHello?.(i)))}).catch(n=>{if(!this.isActive(e,t))return;let i=n instanceof zc?n:new zc({message:String(n)}),a=this.opts.onConnectFailure?.(i,r)??{closeCode:1008,closeReason:`connect failed`};this.connectFailure={error:i,reconnectDelayMs:a.reconnectDelayMs},a.stop&&(this.stopped=!0),e.close(a.closeCode,a.closeReason)})}handleMessage(e,t,n){if(!this.isActive(e,t))return;let r;try{r=JSON.parse(n)}catch(e){this.opts.onParseError?.(e);return}if(_c(r)){if(this.opts.onActivity?.(),r.event===`connect.challenge`){let n=r.payload,i=typeof n?.nonce==`string`?n.nonce.trim():``;if(!i){if(this.opts.handshake.mode===`require-challenge`){let t=Error(`gateway connect challenge missing nonce`);this.opts.onConnectError?.(t),e.close(1008,`connect challenge missing nonce`)}return}this.connectNonce=i;let a=n?.ts;this.connectChallengeTs=typeof a==`number`&&Number.isSafeInteger(a)&&a>=0?a:null,this.recordTiming(`challenge`,t),this.sendConnect(e,t);return}let n=typeof r.seq==`number`?r.seq:null;if(n!==null){if(this.lastSeq!==null&&n>this.lastSeq+1){let r=this.lastSeq+1;if(this.invoke(`gap`,()=>this.opts.onGap?.({expected:r,received:n})),!this.isActive(e,t))return}this.lastSeq=n}let i=this.listeners.snapshot();this.invoke(`event`,()=>this.opts.onEvent?.(r));for(let[n,a]of i){if(!this.isActive(e,t))return;this.listeners.isCurrent(n,a)&&this.invoke(`event listener`,()=>n(r))}return}vc(r)&&(this.opts.onActivity?.(),this.requests.handleResponse(r))}handleClose(e,t,n,r){if(this.socket!==e){if(this.stoppedSocket?.socket===e){let e={...this.stoppedSocket.context,code:n,reason:r};this.stoppedSocket=void 0,this.invoke(`close`,()=>this.opts.onClose?.(e,{retry:!1,notify:!0}))}return}this.socket=null,this.clearHandshakeTimer();let i={...this.closeContext(),code:n,reason:r,generation:t};this.connectFailure=void 0;let a=this.opts.resolveClose(i);if(this.requests.flush(a.pendingError??i.connectFailure?.error??Error(`gateway closed (${n}): ${r}`)),this.invoke(`close`,()=>this.opts.onClose?.(i,a)),a.retry&&!this.stopped&&!this.socket&&!this.reconnectSignal){let e=i.connectFailure?.error,t=e instanceof zc&&e.retryable&&e.retryAfterMs!==void 0&&Number.isFinite(e.retryAfterMs)&&e.retryAfterMs>0?e.retryAfterMs:void 0;this.scheduleReconnect(a.reconnectDelayMs??i.connectFailure?.reconnectDelayMs,t)}}handleSocketError(e,t,n){!this.isActive(e,t)||this.connectSent||(this.connectFailure={error:n},this.opts.onConnectError?.(n))}scheduleReconnect(e,t=0){e!==void 0&&(this.reconnectSupervisor.nextDelayOverrideMs=e);let n=this.reconnectSupervisor.next();n&&(this.reconnectSignal=n.signal,xc(e??Math.max(n.delayMs,t),n.signal).then(()=>{this.reconnectSignal===n.signal&&(this.reconnectSignal=null,this.invoke(`reconnect`,()=>this.connect()))},()=>{this.reconnectSignal===n.signal&&(this.reconnectSignal=null)}))}closeContext(){return{generation:this.generation,socketOpened:this.socketOpened,helloReceived:this.helloReceived,connectRequestSent:this.connectRequestSent,connectFailure:this.connectFailure}}isActive(e,t){return!this.stopped&&this.socket===e&&this.generation===t}nowMs(){return this.opts.nowMs?.()??Date.now()}clearHandshakeTimer(){this.handshakeTimer=Uc(this.handshakeTimer)}invoke(e,t){try{t()}catch(t){this.opts.onCallbackError?.(e,t)}}}})))()}function $c(e){let t=Rs(e.details);if(!t)return!1;let n=Ks(e.details);return t===Q.PAIRING_REQUIRED&&(n?.pauseReconnect===!1||n?.recommendedNextStep===`wait_then_retry`)?!1:t===Q.AUTH_TOKEN_MISMATCH?e.tokenMismatchIsTerminal===!0&&!e.deviceTokenRetryPending:t===Q.AUTH_IDENTITY_HEADER_REQUIRED?!e.deviceTokenRetryPending:el.has(t)||e.protocolMismatchIsTerminal===!0&&t===Q.PROTOCOL_MISMATCH||e.clientVersionMismatchIsTerminal===!0&&t===Q.CLIENT_VERSION_MISMATCH}var el;function tl(){return(tl=e((()=>{ic(),el=new Set([Q.AUTH_TOKEN_MISSING,Q.AUTH_BOOTSTRAP_TOKEN_INVALID,Q.AUTH_PASSWORD_MISSING,Q.AUTH_PASSWORD_MISMATCH,Q.AUTH_RATE_LIMITED,Q.AUTH_DEVICE_TOKEN_MISMATCH,Q.AUTH_SCOPE_MISMATCH,Q.AUTH_IDENTITY_HEADER_REQUIRED,Q.AUTH_VERIFIED_USER_REQUIRED,Q.CONTROL_UI_BUILD_MISMATCH,Q.PAIRING_REQUIRED,Q.CONTROL_UI_DEVICE_IDENTITY_REQUIRED,Q.DEVICE_IDENTITY_REQUIRED])})))()}function nl(e){let t=Jo(e),n=Jo(t?.details);return t?.code===ll.UNAVAILABLE&&n?.code===ul.GITHUB_PUBLICATION_SELECTION_REJECTED&&Object.keys(n).length===2&&typeof n.idempotencyKey==`string`&&n.idempotencyKey.length>0?{code:n.code,idempotencyKey:n.idempotencyKey}:null}function rl(e){return{code:ul.SKILL_PROPOSAL_REVISION_CHANGED,expectedRevisionHash:e.expectedRevisionHash,currentRevisionHash:e.currentRevisionHash}}function il(e){let t=Jo(Jo(e)?.details);if(t?.code!==ul.SKILL_PROPOSAL_REVISION_CHANGED)return null;let n=typeof t.expectedRevisionHash==`string`?t.expectedRevisionHash:``,r=typeof t.currentRevisionHash==`string`?t.currentRevisionHash:``;return!fl.test(n)||!fl.test(r)?null:rl({expectedRevisionHash:n,currentRevisionHash:r})}function al(e){let t=Jo(e);if(t?.code!==ul.MISSING_SCOPE)return null;let n=typeof t.missingScope==`string`?t.missingScope.trim():``,r=Array.isArray(t.requiredScopes)?t.requiredScopes.map(e=>typeof e==`string`?e.trim():``):[];return!n||r.length===0||r.some(e=>!e)?null:{code:ul.MISSING_SCOPE,missingScope:n,requiredScopes:r}}function ol(e){return Jo(Jo(e)?.details)?.code===ul.MCP_APP_VIEW_EXPIRED}function sl(e){let t=Jo(e);if(!t)return null;let n=al(t.details);if(n)return n;let r=t,i=typeof r.gatewayCode==`string`?r.gatewayCode:typeof r.code==`string`?r.code:``;if(i!==ll.FORBIDDEN&&i!==ll.INVALID_REQUEST)return null;let a=(typeof r.message==`string`?r.message:``).match(dl)?.[1];return a?{code:ul.MISSING_SCOPE,missingScope:a,requiredScopes:[a]}:null}var cl,ll,ul,dl,fl;function pl(){return(pl=e((()=>{cl=`The agent run failed before producing a reply.`,ll={NOT_LINKED:`NOT_LINKED`,NOT_PAIRED:`NOT_PAIRED`,AGENT_TIMEOUT:`AGENT_TIMEOUT`,INVALID_REQUEST:`INVALID_REQUEST`,FORBIDDEN:`FORBIDDEN`,APPROVAL_NOT_FOUND:`APPROVAL_NOT_FOUND`,UNAVAILABLE:`UNAVAILABLE`},ul={CRON_JOB_NOT_FOUND:`CRON_JOB_NOT_FOUND`,MISSING_SCOPE:`MISSING_SCOPE`,MCP_APP_VIEW_EXPIRED:`MCP_APP_VIEW_EXPIRED`,OUTBOUND_DELIVERY_QUEUED:`OUTBOUND_DELIVERY_QUEUED`,USER_PREFS_LIMIT_EXCEEDED:`USER_PREFS_LIMIT_EXCEEDED`,SESSION_COMPANION_BUSY:`SESSION_COMPANION_BUSY`,SKILL_PROPOSAL_REVISION_CHANGED:`SKILL_PROPOSAL_REVISION_CHANGED`,PROJECT_CLONE_FAILED:`PROJECT_CLONE_FAILED`,UNKNOWN_AGENT_ID:`UNKNOWN_AGENT_ID`,WIZARD_NOT_FOUND:`WIZARD_NOT_FOUND`,SETUP_ADMISSION_BUSY:`SETUP_ADMISSION_BUSY`,GITHUB_PUBLICATION_SELECTION_REJECTED:`GITHUB_PUBLICATION_SELECTION_REJECTED`},dl=/\bmissing scope:\s*([a-z0-9._-]+)/i,fl=/^[a-fA-F0-9]{64}$/})))()}function ml(e,t){return{key:e.trim(),...t?{agentId:t}:{}}}function hl(e,t={}){let n=bl.get(e);if(n)return n.configure(t);let r=new vl(e,t);return bl.set(e,r),r}function gl(e){bl.get(e)?.reset(),bl.delete(e)}function _l(e){return yl.get(e)?.coordinator.release(e)??Promise.resolve()}var vl,yl,bl;function xl(){return(xl=e((()=>{Vc(),Jc(),vl=class{#e;#t;#n=new Set;#r=!1;constructor(e,t={}){this.#e=e,this.#t=t.keysEquivalent}configure(e={}){let t=e.keysEquivalent;if(!t||t===this.#t)return this;if(this.#t||this.#n.size>0)throw Error(`Session message key equivalence cannot change for an active connection`);return this.#t=t,this}async acquire(e,t={}){let n=e.trim();if(!n)throw Error(`Session message subscription requires a session key`);let r=t.agentId?.trim()||null,i;for(;;){if(this.#r)throw Error(`Session message subscription belongs to a replaced Gateway connection`);let e=[...this.#n].find(e=>e.agentId===r&&(this.#l(e.key,n)||[...e.requestedKeys].some(e=>this.#l(e,n))));if(!e){let e=[...this.#n].find(e=>e.agentId===r&&!e.canonicalSettled&&this.#u(e.key,n));if(e){await(e.plainFallback??e.ready).catch(()=>void 0);continue}i=this.#i(n,r,t.includeApprovals===!0);break}if(!e.release){i=e,i.requestedKeys.add(n);break}await e.release.catch(()=>void 0)}i.pendingOwners+=1;try{let e=await this.#a(i,t.includeApprovals===!0);if(this.#r)throw Error(`Session message subscription completed on a replaced Gateway connection`);let n={key:e.key,agentId:r,...t.includeApprovals===!0?{includeApprovals:!0,...e.approvalReplay===void 0?{}:{approvalReplay:e.approvalReplay}}:{}};return i.handles.add(n),yl.set(n,{coordinator:this,entry:i}),n}finally{--i.pendingOwners,i.pendingOwners===0&&i.handles.size===0&&!i.release&&this.#n.delete(i)}}release(e){let t=yl.get(e);if(!t||t.coordinator!==this)return Promise.resolve();let{entry:n}=t;if(this.#r||n.handles.size>1)return this.#c(e,t),Promise.resolve();if(n.release)return n.release;if(n.pendingOwners>0){let t=[n.ready,...n.approvalRequest?[n.approvalRequest]:[]],r=Promise.allSettled(t).then(()=>(n.release===r&&(n.release=null),this.release(e)));return n.release=r,r}let r=this.#e.request(`sessions.messages.unsubscribe`,ml(n.key,n.agentId),{timeoutMs:qc}).then(()=>{this.#c(e,t,!0)}).finally(()=>{n.release===r&&(n.release=null)});return n.release=r,r}reset(){this.#r=!0;for(let e of this.#n)for(let t of e.handles){let e=yl.get(t);e?.coordinator===this&&this.#c(t,e)}this.#n.clear()}#i(e,t,n){let r={key:e,requestedKeys:new Set([e]),agentId:t,ready:Promise.resolve({key:e}),approvalRequest:null,plainFallback:null,canonicalSettled:!1,handles:new Set,pendingOwners:0,release:null};return r.ready=this.#s(r,n),n&&(r.ready=this.#o(r,r.ready)),r.ready.catch(()=>void 0),this.#n.add(r),r}#a(e,t){if(!t){if(e.approvalRequest===e.ready){if(!e.plainFallback){let t=e.ready;e.plainFallback=t.catch(async n=>{if(this.#r)throw n;let r=await this.#s(e,!1);return e.ready=Promise.resolve(r),e.approvalRequest===t&&(e.approvalRequest=null),r})}return e.plainFallback}return e.ready}return e.approvalRequest?e.approvalRequest:this.#o(e,e.ready.then(()=>this.#s(e,!0)))}#o(e,t){let n=t.finally(()=>{e.approvalRequest===n&&(e.approvalRequest=null)});return e.approvalRequest=n,n}async#s(e,t){let n=ml(e.key,e.agentId),r=await this.#e.request(`sessions.messages.subscribe`,t?{...n,includeApprovals:!0}:n,{timeoutMs:qc}).catch(async t=>{if(!(t instanceof Bc)||!t.requestSent||this.#r)throw t;try{let t=[...e.handles].some(e=>e.includeApprovals);await this.#e.request(e.handles.size>0?`sessions.messages.subscribe`:`sessions.messages.unsubscribe`,t?{...n,includeApprovals:!0}:n,{timeoutMs:qc})}catch(e){if(!this.#r)throw AggregateError([t,e],`session message subscription recovery failed`,{cause:e})}throw t}),i=r&&typeof r==`object`?r:null,a=i&&`key`in i?i.key:void 0;return e.key=typeof a==`string`&&a.trim()?a.trim():e.key,e.canonicalSettled=!0,{key:e.key,...i&&`approvalReplay`in i?{approvalReplay:i.approvalReplay}:{}}}#c(e,t,n=!1){yl.get(e)===t&&(yl.delete(e),t.entry.handles.delete(e),n&&this.#n.delete(t.entry))}#l(e,t){return e===t||this.#t?.(e,t)===!0}#u(e,t){let n=e.replace(/^agent:[^:]+:/i,``).toLowerCase(),r=t.replace(/^agent:[^:]+:/i,``).toLowerCase();return n===r||n===`main`||r===`main`||n===`global`||r===`global`}},yl=new WeakMap,bl=new WeakMap})))()}function Sl(e){let t=ae(e);if(t)return Dl.has(t)?t:void 0}function Cl(e){let t=ae(e);if(t)return Ol.has(t)?t:void 0}var wl,Tl,El,Dl,Ol;function kl(){return(kl=e((()=>{wl={WEBCHAT_UI:`webchat-ui`,CONTROL_UI:`openclaw-control-ui`,BROWSER_COPILOT:`openclaw-browser-copilot`,TUI:`openclaw-tui`,WEBCHAT:`webchat`,CLI:`cli`,GATEWAY_CLIENT:`gateway-client`,MACOS_APP:`openclaw-macos`,LINUX_APP:`openclaw-linux`,IOS_APP:`openclaw-ios`,WATCHOS_APP:`openclaw-watchos`,ANDROID_APP:`openclaw-android`,NODE_HOST:`node-host`,WORKER:`openclaw-worker`,TEST:`test`,FINGERPRINT:`fingerprint`,PROBE:`openclaw-probe`},Tl=wl,El={WEBCHAT:`webchat`,CLI:`cli`,UI:`ui`,BACKEND:`backend`,NODE:`node`,WORKER:`worker`,PROBE:`probe`,TEST:`test`},Dl=new Set(Object.values(wl)),Ol=new Set(Object.values(El))})))()}function Al(e){return typeof e==`object`&&!!e&&e.reason===`startup-sidecars`}function jl(e){if(!e||typeof e!=`object`)return!1;let t=e;return(t.gatewayCode??t.code)===`UNAVAILABLE`&&t.retryable===!0&&Al(t.details)}function Ml(e){if(!jl(e))return null;let t=e.retryAfterMs;return Math.min(Math.max(Math.floor(typeof t==`number`&&Number.isFinite(t)?t:500),Nl),Pl)}var Nl,Pl;function Fl(){return(Fl=e((()=>{Nl=100,Pl=2e3})))()}function Il(e){return e.trim()}function Ll(e){if(!Array.isArray(e))return[];let t=new Set;for(let n of e){if(typeof n!=`string`)continue;let e=n.trim();e&&t.add(e)}return t.has(`operator.admin`)?(t.add(`operator.read`),t.add(`operator.write`)):t.has(`operator.write`)&&t.add(`operator.read`),[...t].toSorted()}function Rl(){return(Rl=e((()=>{})))()}var zl,Bl,Vl;function Hl(){return(Hl=e((()=>{zl=[`operator.approvals`,`operator.questions`,`operator.read`,`operator.talk.secrets`,`operator.write`],new Set(zl),Bl=[`operator.admin`,`operator.approvals`,`operator.pairing`,`operator.questions`,`operator.read`,`operator.talk.secrets`,`operator.write`],new Set(Bl),Vl=[`operator.admin`,...zl],new Set(Vl),[...zl],[...Bl],[...Vl]})))()}function Ul(e){return e.replace(uu,`/bot***`)}function Wl(e){let t=e.replace(cu,``);for(let e=0;e<=du;e+=1){let e;try{e=decodeURIComponent(t).replace(cu,``)}catch{return{value:oe(t).replaceAll(`-`,`_`),unresolvedEncoding:t.includes(`%`)}}if(e===t)return{value:oe(t).replaceAll(`-`,`_`),unresolvedEncoding:!1};t=e}return{value:oe(t).replaceAll(`-`,`_`),unresolvedEncoding:t.includes(`%`)}}function Gl(e){if(fu.test(e))return!0;let t=e.indexOf(`//`),n=e.indexOf(`\\\\`),r=t<0?n:n<0?t:Math.min(t,n);if(r>=0&&e.includes(`@`,r+2))return!0;let i=e.search(/[?&]/u);if(i>=0&&e.includes(`=`,i+1))return!0;let a=e.indexOf(`#`);return a>=0&&e.includes(`=`,a+1)?!0:/%[\da-f]{2}/iu.test(e)}function Kl(e){let t=Wl(e);return t.unresolvedEncoding||su.has(t.value)||lu.test(t.value)}function ql(e){try{let t=new URL(e),n=!1,r=Ul(t.pathname);r!==t.pathname&&(t.pathname=r,n=!0),(t.username||t.password)&&(t.username=t.username?`***`:``,t.password=t.password?`***`:``,n=!0);for(let e of Array.from(t.searchParams.keys()))Kl(e)&&(t.searchParams.set(e,`***`),n=!0);return n?t.toString():e}catch{return e}}function Jl(e,t){let n=new URLSearchParams(e),r=Array.from(n.entries()),i=[],a=new Set,o=!1;for(let[e,n]of r){if(Kl(e)){o=!0,a.has(e)||(a.add(e),i.push([e,`***`]));continue}let r=au(e,t+1),s=au(n,t+1);(r!==e||s!==n)&&(o=!0),i.push([r,s])}if(!o)return e;let s=new URLSearchParams;for(let[e,t]of i)s.append(e,t);return s.toString()}function Yl(e){return Ul(Zl(e).replace(/([?&])([^=&]+)=([^&]*)/g,(e,t,n)=>Kl(n)?`${t}${n}=***`:e))}function Xl(e,t){let n=e.slice(t),r=n.lastIndexOf(`@`);return r<0?e:`${e.slice(0,t)}***:***@${n.slice(r+1)}`}function Zl(e){return e.replace(pu,e=>{let t=e.indexOf(`:`)+1;for(;t<e.length&&(e[t]===`/`||e[t]===`\\`);)t+=1;return Xl(e,t)}).replace(mu,e=>{let t=e.indexOf(`:`)+1;for(;t<e.length&&(e[t]===`/`||e[t]===`\\`);)t+=1;let n=e.lastIndexOf(`@`),r=e.slice(t).search(/[\\/?#]/u);if(n<0||r<0)return e;let i=t+r;if(i>=n)return e;let a=e.indexOf(`:`,t);if(a<0||a>i)return e;let o=e.slice(t,i),s=e.slice(a+1,i);return/^\d+$/u.test(s)||/^\[[^\]]+\](?::\d+)?$/u.test(o)?e:`${e.slice(0,t)}***:***@${e.slice(n+1)}`}).replace(hu,e=>{let t=0;for(;t<e.length&&(e[t]===`/`||e[t]===`\\`);)t+=1;return Xl(e,t)})}function Ql(e){for(let t of e.matchAll(/(?:\b(?:https?|wss?|ftp):[\\/]{0,2}|[\\/]{2,})/giu)){let n=e.slice((t.index??0)+t[0].length),r=n.search(/(?<!\*\*\*:\*\*\*)@/u),i=n.search(/[\\/?#]/u),a=n.slice(i+1,r);if(r>=0&&(i<0||r<=i||n[i]===`/`&&(a.includes(`:`)||/^[^/?#\s]+\.[^/?#\s]+(?:[/?#]|$)/u.test(n.slice(r+1)))))return!0}return!1}function $l(e,t){let n=e.indexOf(`#`);if(n<0)return e;let r=e.slice(n+1),i=eu(r,t+1);return i===r?e:`${e.slice(0,n+1)}${i}`}function eu(e,t){if(!e)return e;if(t>du&&Gl(e))return`***`;let n=nu(e,t);if(n.parsedWholeUrl)return Yl(n.value);let r=e,i=r.search(/[?&]/u),a=r.indexOf(`=`);if(a>=0&&(i<0||a<i))return Jl(r,t);let o=r.indexOf(`?`);if(o>=0){let e=Jl(r.slice(o+1),t);return`${iu(Yl(r.slice(0,o+1)),t+1)}${e}`}let s=Yl(r);if(!Gl(s))return s;let c;try{c=decodeURIComponent(s)}catch{return`***`}if(c===s)return s;let l=eu(c,t+1);return l===c?s:encodeURIComponent(l)}function tu(e,t){if(!Gl(e))return e;if(t>du)return`***`;let n;try{n=decodeURIComponent(e)}catch{return`***`}if(n===e)return e;let r=ru(n,t);if(r.value!==n||Ql(n))return r.value===n?`***`:r.value;if(r.parsedWholeUrl)return e;let i=tu(n,t+1);return i===n?e:i}function nu(e,t){try{let n=ql(e),r=new URL(n);if(t>du)return{value:`***`,parsedWholeUrl:!0};let i=n!==e,a=Zl(tu(r.pathname,t+1));if(a!==r.pathname){let e=r.pathname;if(r.pathname=a,r.pathname===e)return{value:n,parsedWholeUrl:!1};i=!0}let o=Jl(r.search.slice(1),t);o!==r.search.slice(1)&&(r.search=o,i=!0);let s=r.hash.slice(1),c=eu(s,t+1);return c!==s&&(r.hash=c,i=!0),{value:i?r.toString():e,parsedWholeUrl:!0}}catch{return{value:e,parsedWholeUrl:!1}}}function ru(e,t){let n=nu(e,t);return n.parsedWholeUrl?n:{value:iu($l(Yl(n.value),t),t+1),parsedWholeUrl:!1}}function iu(e,t){if(!Gl(e))return e;if(t>du)return`***`;let n;try{n=decodeURIComponent(e)}catch{return`***`}if(n===e)return e;let r=ru(n,t+1);return r.value!==n||r.parsedWholeUrl?r.value===n?e:r.value:Ql(n)?`***`:e}function au(e,t){if(!Gl(e))return e;if(t>du)return`***`;let n=ru(e,t);if(n.value!==e)return n.value;if(Ql(e))return`***`;if(n.parsedWholeUrl)return e;let r;try{r=decodeURIComponent(e)}catch{return`***`}if(r===e||!Gl(r))return e;let i=au(r,t+1);return i===r?e:encodeURIComponent(i)}function ou(e){return ru(e,0).value}var su,cu,lu,uu,du,fu,pu,mu,hu;function gu(){return(gu=e((()=>{su=new Set(`token.key.api_key.apikey.secret.access_token.auth_token.password.pass.passwd.auth.jwt.session.id_token.code.client_secret.app_secret.hook_token.refresh_token.signature.x_amz_signature.x_amz_security_token.private_key.credential.authorization.sig.x_api_key.x_access_token.x_auth_token`.split(`.`)),cu=/[\p{C}\p{Z}\u115F\u1160\u3164\uFFA0+]/gu,lu=/(?:^|_)token(?:_[a-f0-9]{16,})?$/u,uu=/\/bot\d{6,}(?::|%3[aA])[A-Za-z0-9_-]{20,}(?=\/|$)/giu,du=8,fu=/(?:^|[^a-z\d+.-])[a-z][a-z\d+.-]{0,31}:/iu,pu=/\b(?:https?|wss?|ftp):[\\/]{0,2}[^\\/?#\s]*/giu,mu=/\b(?:https?|wss?|ftp):[\\/]{0,2}[^\s]*@[^\\/?#\s]*/giu,hu=/[\\/]{2,}[^\\/?#\s]*/gu})))()}function _u(e){let t=e.match(/^\/(.+)\/([gimsuy]*)$/);if(!t)return[e,`gi`];let n=t[1]??``,r=t[2]??``;return[n,r.includes(`g`)?r:`${r}g`]}function vu(e){let t=e.length>0&&typeof e[e.length-1]==`object`&&e[e.length-1]!==null?e.length-2:e.length-1,n=t-1,r=typeof e[0]==`string`?e[0]:``,i=e.slice(1,n).map(e=>typeof e==`string`?e:``),a=typeof e[n]==`number`?e[n]:-1;return{match:r,groups:i,input:typeof e[t]==`string`?e[t]:``,offset:a}}function yu(e,t){let n=e.split(/\r?\n/).filter(Boolean);return n.length<2?`***`:`${n[0]}\n${t}\n${n[n.length-1]}`}function bu(){return(bu=e((()=>{})))()}var xu,Su,Cu,wu,Tu,Eu,Du,Ou,$;function ku(){return(ku=e((()=>{xu="[A-Za-z0-9!#$%&'*+.^_`|~-]+",Su=String.raw`(?:\[REDACTED\]|[^\s\\"',;&#?<>)}\]]+)`,Cu=String.raw`\\{1,64}t`,wu=String.raw`(?:[ \t]+|${Cu})`,Tu=String.raw`(?:[ \t]*\r?\n${wu}|[ \t]*\\{1,64}r\\{1,64}n${wu}|[ \t]*\\{1,64}n${wu}|[ \t]*${Cu}[ \t]*|[ \t]*)`,Eu=String.raw`(?:[ \t]*\r?\n${wu}|[ \t]*\\{1,64}r\\{1,64}n${wu}|[ \t]*\\{1,64}n${wu}|[ \t]*${Cu}[ \t]*|[ \t]+)`,Du=String.raw`(?:[ \t\r\n]*|[ \t]*\\{1,64}r\\{1,64}n(?:[ \t]*|${Cu})|[ \t]*\\{1,64}n(?:[ \t]*|${Cu})|[ \t]*${Cu}[ \t]*)`,Ou=String.raw`(^|[^A-Za-z0-9_-]|\\{1,64}[rn])`,$=String.raw`(?:\\{1,64}["']|["']|)`,String.raw`${Ou}(?:x-goog-api-key|api-key|apikey|x-api-token|x-access-token)${$}[ \t]*[:=]${Tu}${$}([^\s\\"',;]+)`,new RegExp(String.raw`${Ou}(?:Proxy-)?Authorization${$}[ \t]*[:=]${Tu}${$}(${xu})${Eu}`,`giu`)})))()}var Au,ju,Mu,Nu,Pu,Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu,Uu,Wu,Gu,Ku,qu,Ju,Yu,Xu,Zu,Qu,$u,ed,td,nd,rd,id,ad,od,sd,cd,ld,ud,dd,fd,pd,md,hd,gd,_d,vd,yd,bd,xd;function Sd(){return(Sd=e((()=>{ku(),Au=String.raw`CARD[_-]?NUMBER|CARD[_-]?CVC|CARD[_-]?CVV|CVC|CVV|SECURITY[_-]?CODE|PAYMENT[_-]?CREDENTIAL|SHARED[_-]?PAYMENT[_-]?TOKEN`,ju=String.raw`card[-_]?number|card[-_]?cvc|card[-_]?cvv|cvc|cvv|security[-_]?code|payment[-_]?credential|shared[-_]?payment[-_]?token`,Mu=String.raw`cardNumber|card_number|cardCvc|card_cvc|cardCvv|card_cvv|cvc|cvv|securityCode|security_code|paymentCredential|payment_credential|sharedPaymentToken|shared_payment_token`,Nu=String.raw`aws[-_]?secret[-_]?access[-_]?key|awsSecretAccessKey|SecretAccessKey`,Pu=String.raw`access[-_]?token|auth[-_]?token|hook[-_]?token|refresh[-_]?token|id[-_]?token|api[-_]?key|apikey|client[-_]?secret|app[-_]?secret|private[-_]?key|${Nu}|credential|authorization|token|key|secret|password|pass|passwd|auth|jwt|session|code|signature|x[-_]?amz[-_]?(?:signature|security[-_]?token)`,Fu=String.raw`${Pu}|app[-_]?secret|credential|${ju}`,Iu=String.raw`access_token|refresh_token|id_token|auth[-_]?token|hook[-_]?token|api[-_]?key|client[-_]?secret|app[-_]?secret|private[-_]?key|authorization|jwt|token|secret|password|pass|passwd|credential|${ju}`,Lu=String.raw`access[-_]?token|refresh[-_]?token|id[-_]?token|auth[-_]?token|hook[-_]?token|api[-_]?(?:key|secret)|client[-_]?secret|app[-_]?secret|private[-_]?key|secret[-_]?key|key[-_]?material|authorization|jwt|token|secret|password|passphrase|pass|passwd|credential|${ju}`,Ru=String.raw`access-token|refresh-token|id-token|auth-token|hook-token|api[-_]?(?:key|secret)|secret[-_]?key|key[-_]?material|passphrase`,zu=String.raw`password|passphrase|pass|passwd`,Bu=String.raw`${Nu}|api[-_]?key|hook[-_]?token|access[-_]?token|refresh[-_]?token|id[-_]?token|token|secret|password|passwd|credential|private[-_]?key|client[-_]?secret|${ju}`,String.raw`\p{C}\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000\u115F\u1160\u3164\uFFA0`,Vu=String.raw`/\b[A-Z0-9_]*(?:KEY|TOKEN|SECRET|PASSWORD|PASSWD|${Au})\b\s*[=:]\s*(["']?)([^\s"'\\]+)\1/g`,Hu=String.raw`/\b[A-Z0-9_]*(?:KEY|TOKEN|SECRET|PASSWORD|PASSWD|${Au})\b\s*[=:]\s*\\+(["'])([^\s"'\\]+)\\+\1/g`,Uu=String.raw`(^|[\s,;({\[])(?:${Iu})=(["'\x60])((?:(?!\2)[^\r\n])+)\2`,Wu=String.raw`(^|[\s,;({\[])(?:${Iu})=(["'\x60]?[^\s&#"'\x60<>]+)`,Gu=String.raw`access[-_]?token|refresh[-_]?token|id[-_]?token|auth[-_]?token|hook[-_]?token|api[-_]?(?:key|secret)|secret[-_]?key|key[-_]?material|authorization|jwt|token|secret|password|passphrase|pass|passwd|${ju}`,Ku=String.raw`/(^|[\s,{])(?:(?:${Gu})(?:\s*:\s*|\s+=\s*|=\s*)|[a-z0-9][a-z0-9._-]{0,79}[-_](?:${zu})\s*[:=]\s*|[a-z0-9_.-]{1,80}\.(?:${Lu})\s*[:=]\s*)(["'\x60])((?:(?!\2)[^\r\n])+)\2/g`,qu=String.raw`/(^|[\s,{])(?:${Lu})(?:\s*:\s*|\s+=\s*|=\s+)([^\s#"'\x60<>]+)/g`,Ju=String.raw`/(^|[\s,{])(?:${Ru})=([^\s#"'\x60<>]+)/g`,Yu=String.raw`/(^|[\s,{])[a-z0-9][a-z0-9._-]{0,79}[-_](?:${zu})\s*[:=]\s*([^\s#"'\x60<>]+)/g`,Xu=String.raw`/(^|[\s,{])[a-z0-9_.-]{1,80}\.(?:${Lu})\s*[:=]\s*([^\s#"'\x60<>]+)/g`,Zu=String.raw`"(?:apiKey|api_key|apiToken|api_token|bearerToken|bearer_token|token|secret|password|passwd|${Nu}|credential|authorization|proxy-authorization|cookie|set-cookie|x-api-key|x-auth-token|accessToken|access_token|refreshToken|refresh_token|idToken|id_token|authToken|auth_token|clientSecret|client_secret|privateKey|private_key|secret_value|raw_secret|secret_input|key_material)"\s*:\s*"([^"]+)"`,Qu=String.raw`"(?:${Mu})"\s*:\s*"([^"]+)"`,$u=String.raw`(^|[\s,{])["']?(?:api[-_]key|access[-_]token|refresh[-_]token|id[-_]token|authToken|auth[-_]token|clientSecret|client[-_]secret|appSecret|app[-_]secret|private[-_]key|credential|authorization|secret[-_]value|raw[-_]secret|secret[-_]input|key[-_]material)["']?\s*[:=]\s*(["'])([^"'\r\n]+)\2`,ed=String.raw`(^|[\s,{])["']?(?:authorization|proxy-authorization|cookie|set-cookie|x-api-key|x-auth-token)["']?\s*[:=]\s*(["'])([^"'\r\n]+)\2`,td=String.raw`(^|[^A-Za-z0-9])(?<!;base64,[A-Za-z0-9+/=]*)`,nd=String.raw`(^|[^A-Za-z0-9_])`,rd=String.raw`(^|[^A-Za-z0-9/+=_])(?<!;base64,[A-Za-z0-9+/=]*)`,id=String.raw`(?=[A-Za-z0-9/+=]{40}(?![A-Za-z0-9/+=]))(?=[A-Za-z0-9/+=]{0,39}[A-Z])(?=[A-Za-z0-9/+=]{0,39}[a-z])(?=[A-Za-z0-9/+=]{0,39}[0-9/+=])(?=[A-Za-z0-9/+=]{0,39}[^A-Fa-f0-9])[A-Za-z0-9/+=]{40}`,ad=String.raw`/${rd}(${id})(?!_)/g`,od=String.raw`\bbot(\d{6,}:[A-Za-z0-9_-]{20,})\b`,sd=String.raw`\b(\d{6,}:[A-Za-z0-9_-]{20,})\b`,cd=`x-goog-api-key|api-key|apikey|x-api-token|x-access-token`,ld=`X-OpenClaw-Token|x-pomerium-jwt-assertion|X-Api-Key|X-Auth-Token`,ud=String.raw`(^|[^A-Za-z0-9_?&-]|\\{1,64}[rn])`,dd=String.raw`${ud}(?:${cd})${$}[ \t]*:${Tu}${$}([^\s\\"',;]+)`,fd=String.raw`${ud}(?:${cd})${$}[ \t]*=${Tu}${$}([^\s\\"',;]+)`,pd=String.raw`${ud}(?:${ld})\s*:\s*([^\s"',;]+)`,md=String.raw`${ud}(?:${ld})\s*=\s*([^\s"',;]+)`,hd=[String.raw`${Ou}Proxy-Authorization${$}[ \t]*[:=]${Tu}${$}${xu}${Eu}(${Su})`,String.raw`${Ou}Proxy-Authorization${$}[ \t]*[:=]${Tu}${$}(${Su})[ \t]*(?=${$}(?:$|[,;)}\]]|\r?\n(?![ \t])))`,String.raw`${Ou}Authorization${$}[ \t]*[:=]${Tu}${$}(?!(?:Bearer|Basic|Bot)(?=${Eu}))${xu}${Eu}(${Su})`,String.raw`${Ou}Authorization${$}[ \t]*[:=]${Tu}${$}(?!(?:Bearer|Basic|Bot)(?=${Eu}))(${Su})[ \t]*(?=${$}(?:$|[,;)}\]]|\r?\n(?![ \t])))`,dd,fd],gd=String.raw`Authorization${$}[ \t]*[:=]${Du}${$}Bearer${Eu}(${Su})`,_d=String.raw`Authorization${$}[ \t]*[:=]${Du}${$}Basic${Eu}(${Su})`,vd=String.raw`Authorization${$}[ \t]*[:=]${Du}${$}Bot${Eu}(${Su})`,yd=String.raw`\bBearer\s+([-A-Za-z0-9._~+/=]{18,})(?![-A-Za-z0-9._~+/=])`,[...hd],bd=[Vu,Hu,Zu,Qu,$u,ed,String.raw`--(?:${Bu})=([^\s"']+)`,String.raw`--(?:${Bu})\s+(?!(?:or|and)\b(?=\s+--))(["']?)([^\s"']+)\1`,gd,_d,vd,...hd,pd,md,yd,String.raw`\b(?:https?|wss?|ftp):\/\/[^\/\s:@]*:([^\/\s@]+)@`,String.raw`\b(?:postgres(?:ql)?|mysql|mongodb(?:\+srv)?|rediss?|amqps?):\/\/[^:\s/@]*:([^@\s]+)@`,String.raw`(^|[\s,;])(?:${Fu})=([^&\s]+)(?=&[A-Za-z_][A-Za-z0-9_.-]*=)`,Uu,Wu,Ku,qu,Ju,Yu,Xu,String.raw`-----BEGIN [A-Z ]*PRIVATE KEY-----[\s\S]+?-----END [A-Z ]*PRIVATE KEY-----`,String.raw`(^|[\s,{])["']?(?:${Nu})["']?\s*[:=]\s*(["']?)([A-Za-z0-9/+=]{40})(?![A-Za-z0-9/+=])\2`,String.raw`\b(sk-[A-Za-z0-9_-]{8,})\b`,String.raw`(ghp_[A-Za-z0-9]{10,})`,String.raw`(github_pat_[A-Za-z0-9_]{10,})`,String.raw`(gho_[A-Za-z0-9]{10,})`,String.raw`(ghu_[A-Za-z0-9]{10,})`,String.raw`(ghs_[A-Za-z0-9]{10,})`,String.raw`(ghr_[A-Za-z0-9]{10,})`,String.raw`(glpat-[A-Za-z0-9._=\-]{20,})`,String.raw`(gloas-(?:[A-Fa-f0-9]{65,}|[A-Za-z0-9_-]{64}|[A-Fa-f0-9]{32,}))`,String.raw`(gldt-[A-Za-z0-9_-]{20,})`,String.raw`(glcbt-[A-Za-z0-9]{1,5}_[A-Za-z0-9_-]{20,})`,String.raw`(glptt-[A-Za-z0-9_-]{40,})`,String.raw`(glft-(?:[A-Za-z0-9_-]{20,}|[a-h0-9]+-[0-9]+_))`,String.raw`(glimt-[A-Za-z0-9_-]{25,})`,String.raw`(glagent-[A-Za-z0-9_-]{50,})`,String.raw`(glwt-[A-Za-z0-9_-]{20,})`,String.raw`(glsoat-[A-Za-z0-9_-]{20,})`,String.raw`(glffct-[A-Za-z0-9_-]{20,})`,String.raw`(glrt-[A-Za-z0-9._-]{20,})`,String.raw`(glrtr?-[A-Za-z0-9_-]{27,300}\.[0-9a-z]{2}\.[0-9a-z]{9})`,String.raw`(GR1348941[A-Za-z0-9_-]{20,})`,String.raw`(_gitlab_session=[A-Za-z0-9%._-]{20,})`,String.raw`(xox[baprs]-[A-Za-z0-9-]{10,})`,String.raw`(xapp-[A-Za-z0-9-]{10,})`,String.raw`(https:\/\/hooks\.slack\.com\/(?:services\/T[A-Z0-9]+\/B[A-Z0-9]+|workflows\/T[A-Z0-9]+\/A[A-Z0-9]+\/[0-9]{17,19})\/[A-Za-z0-9]{20,})`,String.raw`(https:\/\/discord(?:app)?\.com\/api\/webhooks\/[0-9]{17,20}\/[A-Za-z0-9_-]{60,})`,String.raw`discord(?:.|\n|\r){0,40}?\b([A-Za-z0-9_-]{24}\.[A-Za-z0-9_-]{6}\.[A-Za-z0-9_-]{27})\b`,String.raw`(gsk_[A-Za-z0-9_-]{10,})`,String.raw`(AIza[0-9A-Za-z\-_]{20,})`,String.raw`(ya29\.[0-9A-Za-z_\-./+=]{10,})`,String.raw`(1//0[0-9A-Za-z_\-./+=]{10,})`,String.raw`(eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,})`,String.raw`(pplx-[A-Za-z0-9_-]{10,})`,String.raw`(fal_[A-Za-z0-9_-]{10,})`,String.raw`${nd}(fc-[A-Za-z0-9]{10,})`,String.raw`(bb_live_[A-Za-z0-9_-]{10,})`,String.raw`${td}(gAAAA[A-Za-z0-9_=-]{20,})`,String.raw`(sk_live_[A-Za-z0-9]{10,})`,String.raw`(sk_test_[A-Za-z0-9]{10,})`,String.raw`(rk_live_[A-Za-z0-9]{10,})`,String.raw`(SG\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,})`,String.raw`(npm_[A-Za-z0-9]{10,})`,String.raw`(pypi-[A-Za-z0-9_-]{10,})`,String.raw`(dop_v1_[A-Za-z0-9]{10,})`,String.raw`(doo_v1_[A-Za-z0-9]{10,})`,String.raw`(dor_v1_[A-Za-z0-9]{10,})`,String.raw`(dp\.(?:ct|pt|sa|scim|audit)\.[A-Za-z0-9]{40,44})`,String.raw`(dp\.st\.[A-Za-z0-9]{40,44})`,String.raw`(dp\.st\.[a-z0-9_-]{2,35}\.[A-Za-z0-9]{40,44})`,String.raw`(dckr_(?:pat|oat)_[A-Za-z0-9_-]{27,32})`,String.raw`(bkua_[a-z0-9]{40})`,String.raw`(CCIPAT_[A-Za-z0-9]{22}_[A-Fa-f0-9]{40})`,String.raw`(sbp_[a-z0-9]{40})`,String.raw`${td}(dapi[0-9a-f]{32}(?:-\d)?)`,String.raw`(dd[pw]_[A-Za-z0-9]{36})`,String.raw`(glsa_[A-Za-z0-9_]{41})`,String.raw`(glc_eyJ[A-Za-z0-9+/=]{60,160})`,String.raw`(nfp_[A-Za-z0-9_]{36})`,String.raw`(CFPAT-[A-Za-z0-9_\-]{40,})`,String.raw`${td}(ATCTT3xFfG[A-Za-z0-9+/=_-]+=[A-Za-z0-9]{8})`,String.raw`${td}(ATATT[A-Za-z0-9+/=_-]+=[A-Za-z0-9]{8})`,String.raw`${td}(ATBB[A-Za-z0-9_=.-]{16,})`,String.raw`(BBDC-[A-Za-z0-9+/@_-]{40,50})`,String.raw`(HRKU-AA[A-Za-z0-9_-]{20,})`,String.raw`(pat-(?:eu|na)1-[A-Za-z0-9]{8}\-[A-Za-z0-9]{4}\-[A-Za-z0-9]{4}\-[A-Za-z0-9]{4}\-[A-Za-z0-9]{12})`,String.raw`(apify_api_[A-Za-z0-9\-]{20,})`,String.raw`(FlyV1 fm\d+_[A-Za-z0-9+/=,_-]{100,})`,String.raw`(fio-u-[A-Za-z0-9_-]{40,})`,String.raw`(^|[^A-Za-z0-9_])(am_[A-Za-z0-9_-]{10,})`,String.raw`(^|[^A-Za-z0-9_])(sk_[A-Za-z0-9_]{10,})`,String.raw`(tvly-[A-Za-z0-9]{10,})`,String.raw`(exa_[A-Za-z0-9]{10,})`,String.raw`(syt_[A-Za-z0-9]{10,})`,String.raw`(retaindb_[A-Za-z0-9]{10,})`,String.raw`(hsk-[A-Za-z0-9]{10,})`,String.raw`(mem0_[A-Za-z0-9]{10,})`,String.raw`(brv_[A-Za-z0-9]{10,})`,String.raw`(xai-[A-Za-z0-9]{30,})`,String.raw`${nd}(fw-[A-Za-z0-9]{30,})`,String.raw`${nd}(fw_[A-Za-z0-9]{30,})`,String.raw`${nd}(fpk_[A-Za-z0-9]{30,})`,String.raw`${td}(AKIA[A-Z0-9]{16})`,String.raw`${td}(ASIA[A-Z0-9]{16})`,String.raw`(AKID[A-Za-z0-9]{10,})`,String.raw`(LTAI[A-Za-z0-9]{10,})`,String.raw`(hf_[A-Za-z0-9]{10,})`,String.raw`(api_org_[A-Za-z0-9]{20,})`,String.raw`(r8_[A-Za-z0-9]{10,})`,od,sd,ad],xd=new Set([Vu,Hu,Zu,$u,ed,Uu,Wu,Ku,qu,Ju,Yu,Xu]),bd.filter(e=>!xd.has(e))})))()}function Cd(e){return e.status&&e.status!==`queued`&&e.status!==`running`?!1:typeof e.hasActiveRun==`boolean`?e.hasActiveRun:e.status===`queued`||e.status===`running`}function wd(){return(wd=e((()=>{})))()}var Td,Ed;function Dd(){return(Dd=e((()=>{Td=6e5,Ed={timeoutMs:Td}})))()}function Od(e,t){return e.startsWith(Id)?t.has(Md)?!0:e===Nd?t.has(Nd)||t.has(Fd):e===Fd?t.has(Fd):e===Pd?t.has(Pd)||t.has(Fd):t.has(e):!1}function kd(e){return Ad(e)===null}function Ad(e){let t=e.role.trim(),n=`${t}.`,r=new Set(e.allowedScopes.map(e=>e.trim()));for(let i of e.requestedScopes){let e=i.trim();if(e&&!(t===jd?Od(e,r):e.startsWith(n)&&r.has(e)))return i}return null}var jd,Md,Nd,Pd,Fd,Id;function Ld(){return(Ld=e((()=>{jd=`operator`,Md=`operator.admin`,Nd=`operator.read`,Pd=`operator.talk`,Fd=`operator.write`,Id=`operator.`})))()}function Rd(e){let t=e?.trim().toLowerCase();if(!t)return!1;let n=t.split(`:`);return n.length<3||n[0]!==`agent`||!n[1]?!1:zd.test(n.slice(2).join(`:`))}var zd;function Bd(){return(Bd=e((()=>{zd=/^(?:dashboard|subagent|internal-session-effects):incognito-[^:]+$/u})))()}function Vd(e){return Z(e)?e.permissionMode===`full`?`operator.admin`:Object.keys(e).every(e=>qd.has(e)||Kd.has(e))?`operator.write`:`operator.admin`:`operator.write`}function Hd(e){return!Z(e)||!Z(e.patch)?`operator.write`:e.patch.permissionMode===`full`?`operator.admin`:Object.keys(e.patch).every(e=>Kd.has(e))?`operator.write`:`operator.admin`}function Ud(e){return Z(e)&&(e.incognito===!0||typeof e.key==`string`&&Rd(e.key)||typeof e.parentSessionKey==`string`&&Rd(e.parentSessionKey)||Object.hasOwn(e,`execNode`)||Object.hasOwn(e,`toolOverrides`)||e.permissionMode===`full`)?`operator.admin`:`operator.write`}function Wd(e){return!Z(e)||e.archivedOnly!==!0?`operator.admin`:Object.keys(e).every(e=>Jd.has(e))?`operator.write`:`operator.admin`}function Gd(e,t){if(e===`sessions.recover`)return`operator.write`;if(e===`sessions.create`)return Ud(t);if(e===`sessions.patch`)return Vd(t);if(e===`sessions.patchMany`)return Hd(t);if(e===`sessions.delete`)return Wd(t)}var Kd,qd,Jd;function Yd(){return(Yd=e((()=>{Bd(),Kd=new Set([`label`,`icon`,`color`,`category`,`boardFace`,`pinned`,`archived`,`unread`,`model`,`permissionMode`]),qd=new Set([`key`,`agentId`,`expectedSessionId`,`expectedLifecycleRevision`,`expectedPermissionMode`,`expectedMarkedUnreadAt`]),Jd=new Set([`key`,`agentId`,`deleteTranscript`,`expectedSessionId`,`archivedOnly`])})))()}function Xd(e){return Qd(e,$d)}function Zd(e){return Qd(e,ef)}function Qd(e,t){if(!e||typeof e!=`object`||!(`details`in e))return!1;let n=e.details;return typeof n==`object`&&!!n&&`reason`in n&&n.reason===t}var $d,ef;function tf(){return(tf=e((()=>{$d=`gateway-restarting`,ef=`gateway-suspending`})))()}function nf(e){return e===af.SECURITY_UNAVAILABLE||e===af.DOWNLOAD_BLOCKED}function rf(e){if(!Z(e))return;let t=nf(e.clawhubTrustCode)?e.clawhubTrustCode:void 0,n=ie(e.version),r=ie(e.warning);if(!(!t&&!n&&!r))return{...t?{clawhubTrustCode:t}:{},...n?{version:n}:{},...r?{warning:r}:{}}}var af;function of(){return(of=e((()=>{af={SECURITY_UNAVAILABLE:`clawhub_security_unavailable`,DOWNLOAD_BLOCKED:`clawhub_download_blocked`}})))()}var sf;function cf(){return(cf=e((()=>{sf=class extends Event{constructor(e,t,n,r){super(`context-request`,{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=n,this.subscribe=r??!1}}})))()}function lf(e){return e}function uf(){return(uf=e((()=>{})))()}var df;function ff(){return(ff=e((()=>{cf(),df=class{constructor(e,t,n,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,t.context!==void 0){let e=t;this.context=e.context,this.callback=e.callback,this.subscribe=e.subscribe??!1}else this.context=t,this.callback=n,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&=(this.unsubscribe(),void 0)}dispatchRequest(){this.host.dispatchEvent(new sf(this.context,this.host,this.t,this.subscribe))}}})))()}var pf;function mf(){return(mf=e((()=>{pf=class{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let n=t||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},e!==void 0&&(this.value=e)}addCallback(e,t,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}}})))()}var hf,gf;function _f(){return(_f=e((()=>{cf(),mf(),hf=class extends Event{constructor(e,t){super(`context-provider`,{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}},gf=class extends pf{constructor(e,t,n){super(t.context===void 0?n:t.initialValue),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:n}]of this.subscriptions)t.has(e)||(t.add(e),n.dispatchEvent(new sf(this.context,n,e,!0)));e.stopPropagation()},this.host=e,this.context=t.context===void 0?t:t.context,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener(`context-request`,this.onContextRequest),this.host.addEventListener(`context-provider`,this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new hf(this.context,this.host))}}})))()}function vf({context:e,subscribe:t}){return(n,r)=>{typeof r==`object`?r.addInitializer((function(){new df(this,{context:e,callback:e=>{n.set.call(this,e)},subscribe:t})})):n.constructor.addInitializer((n=>{new df(n,{context:e,callback:e=>{n[r]=e},subscribe:t})}))}}function yf(){return(yf=e((()=>{ff()})))()}function bf(e){let t=e.trim();if(!t)return`/`;let n=t.startsWith(`/`)?t:`/${t}`;return n.length>1&&n.endsWith(`/`)?n.slice(0,-1):n}function xf(e){if(e===`~dot`)return`.`;if(e===`~dotdot`)return`..`;try{return decodeURIComponent(e.startsWith(`~~`)?e.slice(1):e)||null}catch{return null}}function Sf(e,t){let n=re(e);return!n||t.length===0||t.some(e=>!e)?null:`agent:${De(n)}:${t.join(`:`)}`}function Cf(e,t=``,n){let r=bf(e);for(let e of[`chat`,`dashboard`]){let i=`${Ve(t)}/${e}/`;if(!r.startsWith(i))continue;let a=r.slice(i.length).split(`/`),o=xf(a[0]??``);if(!o)return null;let s=De(o);if(a.length===1)return{namespace:e,kind:`main`,agentId:s};let c=a[1]===`~key`,l=a.slice(c?2:1).map(xf);if(l.some(e=>e===null))return null;let u=l,d=Sf(s,u);if(!d)return null;if(c||u.length!==1)return{namespace:e,kind:`literal`,agentId:s,sessionKey:d};let f=u[0]??``;if(He(f,n))return{namespace:e,kind:`literal`,agentId:s,sessionKey:d};let p=Ue(f);return p?{namespace:e,kind:`short`,agentId:s,literalSessionKey:d,...p}:{namespace:e,kind:`literal`,agentId:s,sessionKey:d,slugCandidate:f}}return null}function wf(){return(wf=e((()=>{Pe(),qe(),ct()})))()}function Tf(e){return{days:Math.trunc(e/864e5),hours:Math.trunc(e/36e5%24),minutes:Math.trunc(e/6e4%60),seconds:Math.trunc(e/1e3%60),milliseconds:Math.trunc(e%1e3),microseconds:Math.trunc(Of(e*1e3)%1e3),nanoseconds:Math.trunc(Of(e*1e6)%1e3)}}function Ef(e){return{days:e/86400000n,hours:e/3600000n%24n,minutes:e/60000n%60n,seconds:e/1000n%60n,milliseconds:e%1000n,microseconds:0n,nanoseconds:0n}}function Df(e){switch(typeof e){case`number`:if(Number.isFinite(e))return Tf(e);break;case`bigint`:return Ef(e)}throw TypeError(`Expected a finite number or bigint`)}var Of;function kf(){return(kf=e((()=>{Of=e=>Number.isFinite(e)?e:0})))()}function Af(e,t){let n=typeof e==`bigint`;if(!n&&!Number.isFinite(e))throw TypeError(`Expected a finite number or bigint`);t={...t};let r=e<0?`-`:``;e=e<0?-e:e,t.colonNotation&&(t.compact=!1,t.formatSubMilliseconds=!1,t.separateMilliseconds=!1,t.verbose=!1),t.compact&&(t.unitCount=1,t.secondsDecimalDigits=0,t.millisecondsDecimalDigits=0);let i=[],a=(e,t)=>{let n=Math.floor(e*10**t+Nf);return(Math.round(n)/10**t).toFixed(t)},o=(e,n,r,a)=>{if(!((i.length===0||!t.colonNotation)&&jf(e)&&!(t.colonNotation&&r===`m`))){if(a??=String(e),t.colonNotation){let e=a.includes(`.`)?a.split(`.`)[0].length:a.length,t=i.length>0?2:1;a=`0`.repeat(Math.max(0,t-e))+a}else a+=t.verbose?` `+Mf(n,e):r;i.push(a)}},s=Df(e),c=BigInt(s.days);if(t.hideYearAndDays?o(BigInt(c)*24n+BigInt(s.hours),`hour`,`h`):(t.hideYear?o(c,`day`,`d`):(o(c/365n,`year`,`y`),o(c%365n,`day`,`d`)),o(Number(s.hours),`hour`,`h`)),o(Number(s.minutes),`minute`,`m`),!t.hideSeconds){if(t.separateMilliseconds||t.formatSubMilliseconds||!t.colonNotation&&e<1e3&&!t.subSecondsAsDecimals){let e=Number(s.seconds),n=Number(s.milliseconds),r=Number(s.microseconds),i=Number(s.nanoseconds);if(o(e,`second`,`s`),t.formatSubMilliseconds)o(n,`millisecond`,`ms`),o(r,`microsecond`,`µs`),o(i,`nanosecond`,`ns`);else{let e=n+r/1e3+i/1e6,a=typeof t.millisecondsDecimalDigits==`number`?t.millisecondsDecimalDigits:0,s=e>=1?Math.round(e):Math.ceil(e),c=1e3-10**-a,l=a?Math.min(e,c).toFixed(a):Math.min(s,c);o(Number.parseFloat(l),`millisecond`,`ms`,l)}}else{let r=a((n?Number(e%Pf):e)/1e3%60,typeof t.secondsDecimalDigits==`number`?t.secondsDecimalDigits:1),i=t.keepDecimalsOnWholeSeconds?r:r.replace(/\.0+$/,``);o(Number.parseFloat(i),`second`,`s`,i)}}if(i.length===0)return r+`0`+(t.verbose?` milliseconds`:`ms`);let l=t.colonNotation?`:`:` `;return typeof t.unitCount==`number`&&(i=i.slice(0,Math.max(t.unitCount,1))),r+i.join(l)}var jf,Mf,Nf,Pf;function Ff(){return(Ff=e((()=>{kf(),jf=e=>e===0||e===0n,Mf=(e,t)=>t===1||t===1n?e:`${e}s`,Nf=1e-7,Pf=24n*60n*60n*1000n})))()}function If(e,t,n=!1){let r=BigInt(Math.trunc(e/zf.day)),i=[{value:n?r/365n:0n,unit:`year`},{value:n?r%365n:r,unit:`day`},{value:Math.trunc(e/zf.hour%24),unit:`hour`},{value:Math.trunc(e/zf.minute%60),unit:`minute`},{value:Math.trunc(e/zf.second%60),unit:`second`},{value:e<1e3?Math.trunc(e):0,unit:`millisecond`}].filter(({value:e})=>e!==0&&e!==0n).slice(0,t);return i.length?i:[{value:0,unit:`millisecond`}]}function Lf(e,t=!1){if(e==null||!Number.isFinite(e)||e<=0)return;let n=Math.round(e);return If(n<1e3?n:Math.round(e/1e3)*1e3,2,t)}function Rf(e){let t=zf.millisecond;for(let n of[`second`,`minute`,`hour`,`day`]){let r=zf[n];if(Math.round(e/t)*t<r)break;t=r}return If(Math.round(e/t)*t,1)}var zf;function Bf(){return(Bf=e((()=>{zf={year:31536e6,week:6048e5,day:864e5,hour:36e5,minute:6e4,second:1e3,millisecond:1}})))()}function Vf(e){return`${O(e)}/__openclaw__/plugins/control-ui/`}function Hf(e,t){return`${Vf(t)}${encodeURIComponent(e)}/`}function Uf(){return(Uf=e((()=>{})))()}function Wf(e){try{let t=new URL(`http://openclaw.invalid`),n=new URL(e,t);return n.origin===t.origin?n.pathname:void 0}catch{return}}var Gf,Kf,qf,Jf;function Yf(){return(Yf=e((()=>{Gf=3e5,Kf=`__openclaw_plugin_frame_auth_probe`,qf=`__openclaw_plugin_frame_auth_origin`,Jf=`openclaw-plugin-frame-auth-probe`})))()}function Xf(e,t){if(typeof t==`string`)return e===Zf.accent?/^#[0-9a-f]{6}$/i.test(t)?t.toLowerCase():void 0:e===Zf.fontUi||e===Zf.fontChat?np.has(t)?t:void 0:(e===Zf.theme?ep:tp).has(t)?t:void 0}var Zf,Qf,$f,ep,tp,np;function rp(){return(rp=e((()=>{Zf={theme:`ui.theme`,themeMode:`ui.themeMode`,accent:`ui.accent`,fontUi:`ui.fontUi`,fontChat:`ui.fontChat`},Qf=[`claw`,`knot`,`dash`,`absolutely`,`tide`,`beacon`,`phosphor`,`crt`,`manuscript`,`rose`,`miami`],$f=[`instrument-sans`,`geist`,`dm-sans`,`ibm-plex-sans`,`space-grotesk`,`atkinson-hyperlegible`,`fraunces`,`lora`,`jetbrains-mono`,`system`],ep=new Set(Qf),tp=new Set([`light`,`dark`,`system`]),np=new Set($f)})))()}var ip,ap,op;function sp(){return(sp=e((()=>{ip=`device.pair.changed`,ap=`update.available`,op=`update.run.changed`})))()}function cp(e){if(e.status===`ok`)return`succeeded`;if(e.status===`error`)return`failed`;if(e.status===`skipped`)return e.reason!==void 0&&Object.hasOwn(up,e.reason)?up[e.reason]:`failed`}function lp(e){return e.status===`failed`||e.status===`rolled-back`||e.status===`skipped`&&e.reason!==null&&e.reason!==`dry-run`&&e.reason!==`cancelled`&&cp({status:e.status,reason:e.reason})===`failed`}var up;function dp(){return(dp=e((()=>{up={"managed-service-handoff-started":`pending`,"restart-health-pending":`pending`,"already-current":`noop`,"managed-service-handoff-already-running":`noop`,"managed-service-handoff-cancelled":`noop`}})))()}var fp;function pp(){return(pp=e((()=>{fp=`gateway-owner`})))()}var mp,hp,gp,_p;function vp(){return(vp=e((()=>{mp=[`requested`,`staging`,`validating`,`repairing`,`activating`,`restarting`,`verifying`,`finished`],hp=[`running`,`succeeded`,`failed`,`rolled-back`,`skipped`],gp=[`chat`,`control-ui`,`cli`,`campaign`,`mac-app`,`api`],_p=[`pending`,`in_progress`,`completed`,`failed`,`skipped`]})))()}function yp(e,t={}){if(!Number.isFinite(e))return`unknown`;let n=t.decimals??1,r=t.unit??`s`,i=(Math.max(0,e)/1e3).toFixed(Math.max(0,n)).replace(/\.0+$/,``).replace(/(\.\d*[1-9])0+$/,`$1`);return r===`seconds`?`${i} seconds`:`${i}s`}function bp(e,t={}){if(!Number.isFinite(e))return`unknown`;let n=Math.max(0,Math.round(e));return n<1e3?Af(n):yp(e,{decimals:t.decimals??2,unit:t.unit??`s`})}function xp(){return(xp=e((()=>{Ff()})))()}function Sp(e,t){return e.length<=t?e:`${vs(e,0,t-1)}…`}function Cp(e,t){if(e.status===`running`)return[`Check progress with openclaw update status.`];if(e.status!==`failed`)return[];let n=[];return e.reason===`preflight-insufficient-space`?n.push(`Free space on the preflight staging and package-manager store filesystems, then rerun the update.`):e.reason===`pnpm-corepack-missing`?n.push(`This pnpm checkout could not auto-enable pnpm because corepack is missing. Install pnpm manually or install Node with corepack available, then rerun the update command.`):e.reason===`pnpm-corepack-enable-failed`?n.push(`Run corepack enable manually or install pnpm manually, then rerun the update command.`):e.reason===`pnpm-npm-bootstrap-failed`?n.push(`This pnpm checkout could not bootstrap pnpm from npm automatically. Install pnpm manually, then rerun the update command.`):e.reason===`preferred-manager-unavailable`&&n.push(`Install the checkout's declared package manager manually, then rerun the update command.`),t||n.push(`Run openclaw triage to diagnose and repair the failed update.`),n}function wp(e,t={}){let n=e.before.sha?.slice(0,8)??e.before.version,r=e.after.sha?.slice(0,8)??e.after.version,i=Sp(e.reason?.trim()||`unknown reason`,240),a=e.verification.serviceRunning===!0?e.verification.runningVersion:void 0,o;switch(e.status){case`succeeded`:o=r?`✅ OpenClaw updated to ${r}${n?` (from ${n})`:``}.`:`✅ OpenClaw updated.`;break;case`failed`:o=`⚠️ OpenClaw update failed: ${i}.${a?` The gateway is running ${a}.`:``}`;break;case`skipped`:o=`ℹ️ OpenClaw update skipped: ${i}.`;break;case`rolled-back`:o=`↩️ OpenClaw update rolled back to ${r??a??n??`the previous version`}: ${i}.`;break;case`running`:o=`⬆️ OpenClaw update in progress: ${e.phase}.`}o=Sp(o,500);let s=[],c=e.steps.filter(e=>Tp.has(e.step)).map(e=>{let t=e.startedAtMs!=null&&e.endedAtMs!=null?` (${bp(Math.max(0,e.endedAtMs-e.startedAtMs))})`:``;return`${e.step}${t}`});c.length&&s.push(`Phases: ${c.join(` → `)}`);for(let t of e.steps.filter(e=>e.status===`failed`).slice(-3))s.push(Sp(`Failed: ${t.step}${t.detail?` — ${t.detail}`:``}`,300));let l=[],u=e.verification;u.booted&&l.push(`gateway booted`),u.serviceRunning!==void 0&&l.push(u.serviceRunning?`service running`:`service stopped`),u.versionMatch!==void 0&&l.push(u.versionMatch?`version verified`:`version mismatch`),u.channelsReady!==void 0&&l.push(u.channelsReady?`channels ready`:`channels not ready`),u.readyz!==void 0&&l.push(u.readyz?`HTTP ready`:`HTTP not ready`),u.pluginErrors?.length&&l.push(`${u.pluginErrors.length} plugin activation error(s)`),l.length&&s.push(`Verification: ${l.join(`; `)}.`);for(let t of e.repair.slice(-3))s.push(Sp(`Repair ${t.attempt}: ${t.status}${t.summary||t.reason?` — ${t.summary??t.reason}`:``}`,300));e.downtimeMs!=null&&s.push(`Gateway downtime: ${bp(e.downtimeMs)}.`);let d=t.nextAction??e.origin.nextAction,f=e.repair.at(-1)?.reason??e.reason,p=e.status===`failed`&&f===`requester-revoked`?d?`Repair stopped because the chat requester is no longer a command owner. Further recovery requires a current command owner.`:`Repair stopped because the chat requester is no longer a command owner. A current command owner must start a new update, or the operator can run openclaw triage locally.`:e.status===`failed`&&f===`repair-requires-config-change`?d?`Rehearsal config changes were not promoted. Review the named top-level keys before continuing recovery.`:`Rehearsal config changes were not promoted. Review the named top-level keys, then run openclaw doctor --fix under your own authority, or openclaw triage.`:void 0,m=e.status===`running`?Cp(e):p?[p,...d?[d]:[]]:[...new Set([t.doctorHint??u.doctorHint??e.origin.doctorHint,...Cp(e,d),d].filter(e=>!!e))];s.push(...m);let h=m.at(-1),g=[o,...s.filter(e=>e!==h)].join(`
`),_=h?`\n${Sp(h,1100)}`:``;return{headline:o,lines:s,markdown:`${Sp(g,1500-_.length)}${_}`}}var Tp;function Ep(){return(Ep=e((()=>{vp(),xp(),Tp=new Set(mp)})))()}function Dp(){return(Dp=e((()=>{w(),t()})))()}export{Rd as $,Le as $i,Ko as $n,ji as $r,bc as $t,Uf as A,O as Aa,Ut as Ai,xs as An,Ca as Ar,hl as At,_f as B,dt as Bi,is as Bn,$i as Br,sl as Bt,Gf as C,M as Ca,Kt as Ci,Ns as Cn,Na as Cr,Ml as Ct,Yf as D,j as Da,Xt as Di,Ts as Dn,J as Dr,kl as Dt,Kf as E,A as Ea,Jt as Ei,ws as En,Oa as Er,Tl as Et,wf as F,St as Fi,ls as Fn,ia as Fr,cl as Ft,of as G,et as Gi,ds as Gn,Yi as Gr,Qc as Gt,df as H,ct as Hi,us as Hn,Qi as Hr,tl as Ht,Cf as I,Ft as Ii,ts as In,aa as Ir,ul as It,Xd as J,tt as Ji,$o as Jn,Bi as Jr,Jc as Jt,rf as K,Qe as Ki,es as Kn,Wi as Kr,qc as Kt,vf as L,It as Li,rs as Ln,ra as Lr,pl as Lt,Bf as M,D as Ma,Lt as Mi,vs as Mn,ba as Mr,_l as Mt,Lf as N,Ht as Ni,ys as Nn,ha as Nr,gl as Nt,Wf as O,te as Oa,Qt as Oi,Ss as On,Da as Or,Sl as Ot,Rf as P,xt as Pi,ms as Pn,pa as Pr,ll as Pt,Bd as Q,Re as Qi,Yo as Qn,xi as Qr,Vc as Qt,yf as R,ft as Ri,ns as Rn,ta as Rr,ol as Rt,Xf as S,ae as Sa,Yt as Si,js as Sn,Fa as Sr,jl as St,qf as T,ne as Ta,Zt as Ti,As as Tn,ja as Tr,El as Tt,uf as U,it as Ui,ss as Un,Zi as Ur,$c as Ut,ff as V,mt as Vi,hs as Vn,ea as Vr,il as Vt,lf as W,at as Wi,fs as Wn,Xi as Wr,Zc as Wt,Yd as X,qe as Xi,Xo as Xn,W as Xr,zc as Xt,Zd as Y,Be as Yi,qo as Yn,Vi as Yr,Wc as Yt,Gd as Z,Ve as Zi,Jo as Zn,zi as Zr,Bc as Zt,sp as _,de as _a,un as _i,Ks as _n,Ha as _r,Hl as _t,hp as a,Te as aa,Gn as ai,uc as an,zo as ar,Cd as at,$f as b,oe as ba,nn as bi,Ps as bn,La as br,Ll as bt,vp as c,Ce as ca,I as ci,lc as cn,Io as cr,bu as ct,cp as d,be as da,vn as di,Ys as dn,Fo as dr,yu as dt,ze as ea,Oi as ei,Pc as en,Wo as er,Ld as et,dp as f,he as fa,pn as fi,Js as fn,Mo as fr,gu as ft,op as g,fe as ga,ln as gi,zs as gn,Ja as gr,Bl as gt,ap as h,me as ha,fn as hi,qs as hn,Co as hr,zl as ht,mp as i,De as ia,Wn as ii,sc as in,Ro as ir,wd as it,zf as j,E as ja,Pt as ji,bs as jn,ya as jr,xl as jt,Hf as k,k as ka,Gt as ki,Cs as kn,Sa as kr,Cl as kt,fp as l,_e as la,N as li,Q as ln,Lo as lr,_u as lt,ip as m,ye as ma,dn as mi,Rs as mn,wo as mr,ou as mt,Ep as n,Fe as na,Ei as ni,fc as nn,Z as nr,Ed as nt,_p as o,Ee as oa,Un as oi,cc as on,Bo as or,bd as ot,lp as p,le as pa,mn as pi,ic as pn,No as pr,Kl as pt,tf as q,rt as qi,Qo as qn,Hi as qr,Kc as qt,wp as r,Pe as ra,Di as ri,mc as rn,Go as rr,Dd as rt,gp as s,we as sa,F as si,oc as sn,Uo as sr,Sd as st,Dp as t,Ie as ta,Mi as ti,pc as tn,Zo as tr,kd as tt,pp as u,Se as ua,P as ui,Ws as un,jo as ur,vu as ut,Zf as v,se as va,sn as vi,Ls as vn,Ba as vr,Rl as vt,Jf as w,ie as wa,qt as wi,Es as wn,Ma as wr,wl as wt,rp as x,re as xa,rn as xi,Fs as xn,Ia as xr,Fl as xt,Qf as y,ce as ya,cn as yi,Is as yn,Ra as yr,Il as yt,gf as z,pt as zi,cs as zn,G as zr,nl as zt};
//# sourceMappingURL=control-ui-foundation-DMb6IeIq.js.map