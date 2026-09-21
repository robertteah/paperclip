import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{K as t,X as n}from"./lit-runtime-vxhGQLC6.js";import{Bt as r,Gt as i,Xt as a,Yt as o}from"./control-ui-core-uEI6aN5p.js";function s(){return(s=e((()=>{})))()}async function c(e,t){return e.request(`diagnostics.lanes`,{},{signal:t})}async function l(e,t,n){let r=t?e.request(`models.list`,{agentId:t,preparedOnly:!0},{signal:n}):Promise.resolve({models:[]}),i=c(e,n),[a,o,s,l,u]=await Promise.all([e.request(`status`,{},{signal:n}),e.request(`health`,{},{signal:n}),r,e.request(`last-heartbeat`,{},{signal:n}),i]),d=s;return{status:a,health:o,models:Array.isArray(d?.models)?d.models:[],heartbeat:l,...u}}function u(){return(u=e((()=>{})))()}var d,f;function p(){return(p=e((()=>{a(),d={debug:{snapshotsTitle:`Snapshots`,snapshotsSubtitle:`Status, health, and heartbeat data.`,refreshingSnapshots:`Refreshing Gateway diagnostics.`,offlineSnapshots:`Connect to the Gateway to refresh diagnostics.`,status:`Status`,health:`Health`,lastHeartbeat:`Last heartbeat`,security:{audit:`Security audit`,critical:`{count} critical`,warnings:`{count} warnings`,noCriticalIssues:`No critical issues`,info:`{count} info`,runPrefix:`Run`,runSuffix:`for details.`},manualRpcTitle:`Manual RPC`,manualRpcSubtitle:`Send a raw gateway method with JSON params.`,callFailed:`Call failed`,method:`Method`,selectMethod:`Select a method…`,paramsJson:`Params (JSON)`,modelsTitle:`Models`,modelsSubtitle:`Catalog from models.list.`,eventLogTitle:`Event Log`,eventLogSubtitle:`Latest gateway events.`,noEvents:`No events yet.`,lanes:{title:`Lanes`,subtitle:`Live command-lane capacity and queue pressure.`,lane:`Lane`,sessionLanes:`Session lanes · {count}`,active:`Active`,queued:`Queued`,group:`Group`,blocked:`Blocked`},overlay:{...o.debug.overlay,eyebrow:`Live diagnostics`,open:`Open overlay`,openWithShortcut:`Open overlay · {shortcut}`,unavailable:`Unavailable`,lanes:`Lanes`,status:`Event loop / status`,activeRuns:`Active runs`,events:`Events`,cpu:`CPU`,memory:`Memory`,disk:`Disk`,memoryMb:`{value} MB`,loopShort:`loop {value}`,heapShort:`heap {value}`,maxShort:`max {value}`,freeShort:`{value} free`,totalShort:`{value} total`,delayP99:`Delay p99`,uptime:`Uptime`,activeRunsCount:`{count} active`,noActiveRuns:`No active runs.`}}},f=Object.assign(()=>{let{overlay:e,...t}=d.debug;Object.assign(o.debug,t),Object.assign(o.debug.overlay,e)},{catalog:d})})))()}function m(e,t={}){let r=e.lanes.map(e=>{let r=e.activeCount>=e.maxConcurrent,a=e.queuedCount>0,o=[`command-lane-row`,r?`command-lane-row--saturated`:``,a?`command-lane-row--queued`:``].filter(Boolean).join(` `),s=e.group?`${e.group} · ${e.groupActive??0}/${e.groupBudget??0}`:``;return n`
      <tr class=${o}>
        <td class="mono command-lane-row__name" data-label=${i(`debug.lanes.lane`)}>
          ${e.lane}
        </td>
        <td class="mono" data-label=${i(`debug.lanes.active`)}>
          ${e.activeCount}/${e.maxConcurrent}
        </td>
        <td class="mono" data-label=${i(`debug.lanes.queued`)}>${e.queuedCount}</td>
        ${t.compact?``:n`<td data-label=${i(`debug.lanes.group`)}>${s}</td>`}
        <td class="mono" data-label=${i(`debug.lanes.blocked`)}>${e.blockedBy??`—`}</td>
      </tr>
    `}),a=e.dynamic;if(a){let e=[`command-lane-row`,`command-lane-row--dynamic`,a.queuedCount>0?`command-lane-row--queued`:``].filter(Boolean).join(` `);r.push(n`
      <tr class=${e}>
        <td class="mono command-lane-row__name" data-label=${i(`debug.lanes.lane`)}>
          ${i(`debug.lanes.sessionLanes`,{count:String(a.laneCount)})}
        </td>
        <td class="mono" data-label=${i(`debug.lanes.active`)}>${a.activeCount}</td>
        <td class="mono" data-label=${i(`debug.lanes.queued`)}>${a.queuedCount}</td>
        ${t.compact?``:n`<td data-label=${i(`debug.lanes.group`)}></td>`}
        <td class="mono" data-label=${i(`debug.lanes.blocked`)}>—</td>
      </tr>
    `)}return r}function h(){return(h=e((()=>{t(),r(),p(),f()})))()}export{l as a,c as i,m as n,s as o,u as r,h as t};
//# sourceMappingURL=lane-table-Do_ICwiZ.js.map