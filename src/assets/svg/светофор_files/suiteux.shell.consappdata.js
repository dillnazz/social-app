var shellPerformance=window.performance,HighResolutionTimingSupported=!!shellPerformance&&"function"==typeof shellPerformance.mark;HighResolutionTimingSupported&&shellPerformance.mark("shell_consappdata_start"),(self["suiteux_shell_webpackJsonp_suiteux-bootstrapper"]=self["suiteux_shell_webpackJsonp_suiteux-bootstrapper"]||[]).push([["consappdata"],{9227:function(e,o,t){t.r(o),t.d(o,{loadConsumerAppData:function(){return _}});var l=t(6968);const n="auth=1";function s(e,o,t,l,s,r){const i=encodeURIComponent(o),a=s?encodeURIComponent(s):"",h=s?"login_hint="+a:void 0,m="https://www.microsoft365.com",u="https://outlook.com";let p=h?u+"?"+h:u;const f="https://outlook.live.com/calendar/";let d=h?f+"?"+h:f;const S="https://onedrive.live.com";let g=h?S+"?"+h:S;const w=m+"/launch/word?"+["username="+i,n].join("&");let C=h?w+"&"+h:w;const _=m+"/launch/excel?"+["username="+i,n].join("&");let O=h?_+"&"+h:_;const P=m+"/launch/powerpoint?"+["username="+i,n].join("&");let y=h?P+"&"+h:P;let E="https://www.onenote.com/notebooks?"+n,v="https://to-do.microsoft.com/tasks/?auth=1";let L="https://web.skype.com/?source=owa";const D="https://teams.live.com/_?utm_source=OfficeWeb",I="https://app.clipchamp.com/signup/microsoft?utm_source=m365&utm_medium=office&utm_campaign=appswaffle",F="https://designer.microsoft.com/";let N;return{NODE_ENV:"production",__DEV__:!1,BUILD_BUILDNUMBER:"1.20240522.6.0"}.STANDALONE_APP_LAUNCHER&&"EdgeNewsNTP"===l&&(t?(C=m+"/launch/word?"+n,O=m+"/launch/excel?"+n,y=m+"/launch/powerpoint?"+n):(p="https://www.microsoft.com/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook",g="https://www.microsoft.com/microsoft-365/onedrive/online-cloud-storage",C="https://www.microsoft.com/microsoft-365/word",O="https://www.microsoft.com/microsoft-365/excel",y="https://www.microsoft.com/microsoft-365/powerpoint",E="https://www.microsoft.com/microsoft-365/onenote/digital-note-taking-app",v="https://www.microsoft.com/microsoft-365/microsoft-to-do-list-app",d="https://www.microsoft.com/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook",L="https://www.skype.com/")),N=(null==r?void 0:r.UpdatedConsumerAppList)?[c("ShellMail",e.Outlook,p),c("ShellDocuments",e.OneDrive,g),c("ShellClipchamp",e.Clipchamp,I),c("ShellDesigner",e.Designer,F),c("ShellWordOnline",e.WordOnline,C),c("ShellExcelOnline",e.ExcelOnline,O),c("ShellPowerPointOnline",e.PowerPointOnline,y),c("ShellOneNoteOnline",e.OneNoteOnline,E),c("ShellOfficeForms",e.Forms,"https://forms.office.com/Pages/DesignPageV2.aspx"),c("ShellCalendar",e.Calendar,d),c("ShellToDo",e.ToDo,v),c("ShellTeams",e.Teams,D),c("ShellSkype",e.Skype,L)].filter((e=>null!=e)):[c("ShellMail",e.Outlook,p),c("ShellDocuments",e.OneDrive,g),c("ShellTeams",e.Teams,D),c("ShellWordOnline",e.WordOnline,C),c("ShellExcelOnline",e.ExcelOnline,O),c("ShellPowerPointOnline",e.PowerPointOnline,y),c("ShellOneNoteOnline",e.OneNoteOnline,E),c("ShellToDo",e.ToDo,v),c("ShellFamilySafety",e.FamilySafety,"https://account.microsoft.com/family"),c("ShellCalendar",e.Calendar,d),c("ShellClipchamp",e.Clipchamp,I),c("ShellDesigner",e.Designer,F),c("ShellSkype",e.Skype,L)].filter((e=>null!=e)),N}function r(e,o,t,l,n,s){const r=encodeURIComponent(o),i=n?encodeURIComponent(n):"",a=n?"login_hint="+i:void 0,h="https://www.microsoft365.com",m=h+"?auth=1&from=ShellNav";let u=a?m+"&"+a:m,p="https://outlook.live.com/people/",f=o?"https://sway.office.com/?auth_pvr=WindowsLiveId&auth_upn="+r:"https://sway.com",d="https://flow.microsoft.com/manage/?auth_upn="+r+"&utm_source=consumer_office&utm_medium=%7Bmedium%7D&utm_campaign=consumer_referrals",S="https://forms.office.com/Pages/DesignPageV2.aspx";({NODE_ENV:"production",__DEV__:!1,BUILD_BUILDNUMBER:"1.20240522.6.0"}).STANDALONE_APP_LAUNCHER&&"EdgeNewsNTP"===l&&(t?(f="https://sway.office.com/?auth_pvr=WindowsLiveId",d="https://flow.microsoft.com/manage/?utm_source=consumer_office&utm_medium=%7Bmedium%7D&utm_campaign=consumer_referrals",S="https://forms.office.com/Pages/DesignPageV2.aspx"):(u=h+"/?auth=1&from=ShellNav",p="https://www.microsoft.com/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook",f="https://sway.office.com",d="https://flow.microsoft.com",S="https://forms.office.com/Pages/DesignPageV2.aspx"));const g=[c("ShellPeople",e.People,p),c("ShellSway",e.Sway,f),c("ShellLogicFlows",e.Flow,d),c("ShellLists",e.Lists,"https://lists.live.com/?ocid=cmmovh5r9x5"),c("ShellLoop",e.Loop,"https://loop.microsoft.com/")];return(null==s?void 0:s.UpdatedConsumerAppList)||g.push(c("ShellOfficeForms",e.Forms,S)),g}function i(e,o){const t=[a("ShellBing",e.Bing,"https://www.bing.com/?FORM=MO0027",!0,e.Microsoft,"MoreFirstParty"),a("ShellMSN",e.MSN,"https://www.msn.com/?OCID=cmmgltaajc1",!0,e.Microsoft,"MoreFirstParty"),a("ShellPrivacy",e.Privacy,"https://account.microsoft.com/privacy/",!0,e.Microsoft,"MoreFirstParty"),a("ShellRewards",e.Rewards,"https://account.microsoft.com/rewards/",!0,e.Microsoft,"MoreFirstParty")];return(null==o?void 0:o.UpdatedConsumerAppList)&&t.push(a("ShellFamilySafety",e.FamilySafety,"https://account.microsoft.com/family",!0,e.Microsoft,"MoreFirstParty")),t}function c(e,o,t,l){return{Id:e,Text:o,Title:o,Url:t,FontIconCss:h(e),BackgroundColor:m(e),TargetWindow:l||"_blank"}}function a(e,o,t,l,n,s="FirstParty"){return{CollectorId:s,Id:0===e.indexOf("Shell")?e.substr(5):e,Title:o,AriaLabel:o,Publisher:n,FontIconCss:h(e),BackgroundColor:m(e),LaunchFullUrl:t,IsAutoPinnedDisabled:l,CustomActions:[{ActionVerb:1},{ActionVerb:2}]}}function h(e){return"ms-Icon--"+function(e){switch(e){case"ShellMail":return"OutlookLogo";case"ShellCalendar":return"Calendar";case"ShellPeople":return"People";case"ShellDocuments":return"OneDrive";case"ShellToDo":return"ToDoLogoInverse";case"ShellWordOnline":return"WordLogo";case"ShellExcelOnline":return"ExcelLogo";case"ShellPowerPointOnline":return"PowerPointLogo";case"ShellOneNoteOnline":return"OneNoteLogo";case"ShellSway":return"SwayLogo32";case"ShellBing":return"BingLogo";case"ShellMSN":return"MSNLogo";case"ShellSkype":return"SkypeLogo";case"ShellLogicFlows":return"MicrosoftFlowLogo";case"ShellOfficeForms":return"OfficeFormsLogo";case"ShellPrivacy":return"PrivacyLogo";case"ShellRewards":return"RewardsLogo";case"ShellFamilySafety":return"FamilySafetyLogo";case"ShellTeams":return"TeamsLogo";case"ShellClipchamp":return"ClipchampLogo";case"ShellLists":return"ListsLogo";case"ShellDesigner":return"DesignerLogo";case"ShellLoop":return"LoopLogo";default:return"CircleFill"}}(e)}function m(e){switch(e){case"ShellDocuments":return"#094ab2";case"ShellWordOnline":return"#2b579a";case"ShellExcelOnline":return"#217346";case"ShellPowerPointOnline":return"#d24726";case"ShellOneNoteOnline":return"#80397b";case"ShellSway":case"ShellOfficeForms":return"#008272";case"ShellBing":return"#0C8484";case"ShellMSN":return"#1e1e1e";case"ShellSkype":return"#00AFF0";case"ShellLogicFlows":return"#0077FF";case"ShellFamilySafety":case"ShellClipchamp":return"#0C9D8C";case"ShellTeams":return"#6264A7";case"ShellLists":return"#974B8B";case"ShellDesigner":return"#972ADB";case"ShellLoop":return"#8230FF";default:return"#0072c6"}}function u(e){const o=[];for(let t=0;t<e.length;++t){const l=("00"+e[t].toString(16)).slice(-2);o.push(l)}return o.join("")}function p(e){const o=function(e){const o=new Uint16Array(e.length);for(let t=0;t<e.length;t++)o[t]=e.charCodeAt(t);return new Uint8Array(o)}(JSON.stringify(e));try{return crypto.subtle.digest("sha-256",o).then((e=>u(new Uint8Array(e))))}catch(e){return Promise.resolve(u(o))}}class f{constructor(e){this.localStorageKey=e}readCache(){return JSON.parse(localStorage.getItem(this.localStorageKey)||"{}")}writeCache(e){localStorage.setItem(this.localStorageKey,JSON.stringify(e))}getValue(e){return new Promise(((o,t)=>{p(e).then((e=>{const l=this.readCache(),n=l[e];n?n.expiryTime<Date.now()?(delete l[e],this.writeCache(l),t("Expired")):o(n.value):t("EntryNotFound")}))}))}setValue(e,o,t){return new Promise(((l,n)=>{p(e).then((e=>{try{const l=Date.now()+t,n=this.readCache();n[e]={expiryTime:l,value:o},this.writeCache(n)}catch(e){e instanceof DOMException?n("WriteFailedQuotaExceeded"):n("WriteFailedOther")}})).then((()=>l(o)))}))}}const d="OneShellECSClient";class S{constructor(){this.CONFIG_CACHE_KEY="O365Shell_ECS_config",this.CONFIG_TIME_TO_LIVE=864e5,this.ECS_PROJECT="OneShell",this.ECS_BASE_URI=`https://ecs.office.com/config/v1/${this.ECS_PROJECT}/1.0.0.0`,this.getConfigCalled=!1,this.cache=new f(this.CONFIG_CACHE_KEY)}getUri(){const e="?agents="+encodeURIComponent(`${this.ECS_PROJECT}`);return this.ECS_BASE_URI+e+Object.keys(this.model).reduce(((e,o)=>`${e}&${encodeURIComponent(o)}=${encodeURIComponent(this.model[o])}`),"")}fetchConfig(){(0,l.tZ)().perfMarker("shell_ecs_fetch_start");return new Promise(((e,o)=>{fetch(this.getUri()).then((e=>((0,l.tZ)().perfMarker("shell_ecs_fetch_end"),e.json()))).then((t=>{t.OneShell?(this.cacheConfig(t),e(t)):o("Invalid ECS config received")})).catch((e=>{(0,l.tZ)().exception("ECS_GetECSConfig_Failed",6,e)}))}))}cacheConfig(e){this.cache.setValue(this.model,e,this.CONFIG_TIME_TO_LIVE)}getCachedConfig(){return this.cache.getValue(this.model).catch((()=>this.config))}logConfigIds(e){var o;const t=null===(o=null==e?void 0:e.ConfigIDs)||void 0===o?void 0:o[this.ECS_PROJECT];(0,l.tZ)().tag("ECS_ConfigIds",1,t),(0,l.tZ)().registerContextParam("Context_ECS_FlightIds",t,0)}setModel(e){this.model=e,this.config=this.fetchConfig()}getConfig(e=2e3){if(!this.model)return(0,l.tZ)().tag("ECS_No_User_Model",1),Promise.resolve({});const o=new Promise(((o,t)=>{setTimeout((()=>{t(new Error(`ECS getConfig timedout after ${e}`))}),e)}));return Promise.race([this.getCachedConfig(),this.config,o]).then((e=>(this.getConfigCalled||(this.getConfigCalled=!0,this.logConfigIds(e)),e.OneShell))).catch((e=>((0,l.tZ)().exception("ECS_GetECSConfig_Failed",6,e),Promise.resolve({}))))}}const g=()=>(window[d]||(()=>{if(!localStorage)return void(0,l.tZ)().exception("ECS_InitECS_Failed",4,new Error("Localstorage is not available"));const e=(o,t)=>{const{TID:n,UPN:s,IsConsumerShell:r,WorkloadId:i,UID:c}=t;if(t.EnableClientECSFetch||r){const e={IsConsumer:r,WorkloadId:i,TenantId:n,UserId:r?s:c,UPN:s};window[d].setModel(e)}(0,l.NP)().unsubscribe("ShellDataUpdated",e)};window[d]=new S,(0,l.NP)().subscribe("ShellDataUpdated",e,!0)})(),window[d]);let w,C;function _(e,o,t,n){const c="https://www.microsoft365.com";if(void 0===w)try{g().getConfig().then((l=>{l&&l.UpdatedConsumerAppList?(w=!0,C=l,_(e,o,t,n)):l&&!0===o.ShowUpdatedConsumerAppList?(l.UpdatedConsumerAppList=!0,a(e,o,t,l)):a(e,o,t,C)})).catch((()=>{a(e,o,t,C)}))}catch(l){a(e,o,t,C)}else a(e,o,t,C);function a(e,o,t,a){var h,m;const u=Object.assign(Object.assign({},e),{WorkloadLinks:s(n,o.UPN,o.PUID,o.WorkloadId,null===(h=null==t?void 0:t.shellAuthProviderConfig)||void 0===h?void 0:h.login_Hint,a),AppsLinks:r(n,o.UPN,o.PUID,o.WorkloadId,null===(m=null==t?void 0:t.shellAuthProviderConfig)||void 0===m?void 0:m.login_Hint,a),LogoNavigationUrl:c+"?auth=1&from=ShellNav"}),p=Object.assign(Object.assign({},o),{AppDataCache:i(n,a),AppGalleryUrl:c+"/apps?auth=1&home=1"});return(0,l.NP)().invoke("ShellDataUpdated",u,p,t),p}}}}]),HighResolutionTimingSupported&&(shellPerformance.mark("shell_consappdata_end"),shellPerformance.measure("shell_consappdata","shell_consappdata_start","shell_consappdata_end"));