import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{K as t,X as n,q as r}from"./lit-runtime-vxhGQLC6.js";import{Bt as i,Gt as a}from"./control-ui-core-uEI6aN5p.js";function o(e){return n`
    <div class="cron-table__footer">
      <span class="muted">
        ${a(`cron.list.shownOf`,{shown:String(e.jobsShown),total:String(Math.max(e.jobsTotal,e.jobsShown))})}
      </span>
      ${e.hasMore?n`
              <button
                class="btn btn--sm cron-load-more"
                ?disabled=${e.loading||e.loadingMore}
                @click=${e.onLoadMore}
              >
                ${e.loadingMore?a(`cron.list.loading`):a(`cron.list.loadMore`)}
              </button>
            `:r}
    </div>
  `}function s(){return(s=e((()=>{t(),i()})))()}export{o as n,s as t};
//# sourceMappingURL=cron-jobs-pagination-jMZJvr0B.js.map