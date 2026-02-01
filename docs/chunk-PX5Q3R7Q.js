import{d as rt}from"./chunk-DXHD5K7F.js";import{$a as ce,$b as gn,Aa as si,Ab as bi,Cb as yi,D as sn,Db as Nt,Eb as vi,F as an,Fa as et,Fb as G,Gb as Pt,Ha as Ce,Hb as xt,I as Tt,Ia as k,J as ln,Ka as Lt,L as v,M as O,Na as W,Nb as B,O as L,Oa as M,P as ge,Pa as S,Q as h,Qa as It,Qb as hn,R as ii,Ra as ie,Sa as A,Ta as Ie,Va as ai,Wa as li,X as Re,Xa as ui,Xb as q,Y as un,Z as K,Zb as V,_b as g,a as m,aa as Ft,ab as di,ac as Oe,b as _e,ba as oi,bb as ci,bc as Di,c as ei,cc as Ci,da as ri,ec as T,fa as R,fb as N,fc as mn,g as Z,gb as dn,gc as bn,hb as cn,ia as F,ib as tt,ja as Je,jb as pn,k as Xe,ka as _t,kb as fn,la as D,lb as nt,m as Le,mb as Ot,na as ne,nb as Mt,o as nn,ob as pi,qb as fi,ra as De,rb as hi,s as on,sb as oe,t as rn,tb as pe,u as ti,ub as fe,vb as gi,x as ni,xb as it,yb as ot,z as Qe,za as Y,zb as mi}from"./chunk-NWR5K5L3.js";function Rt(t,o){return t?o?t.endsWith("/")?o.startsWith("/")?t+o.slice(1):t+o:o.startsWith("/")?t+o:`${t}/${o}`:t:o}function Ei(t){let o=t.search(/#|\?|$/);return t[o-1]==="/"?t.slice(0,o-1)+t.slice(o):t}function re(t){return t&&t[0]!=="?"?`?${t}`:t}var ke=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>h(wi),providedIn:"root"})}return t})(),kt=new L(""),wi=(()=>{class t extends ke{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??h(K).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Rt(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+re(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${n}${i}`:n}pushState(e,n,i,r){let s=this.prepareExternalUrl(i+re(r));this._platformLocation.pushState(e,n,s)}replaceState(e,n,i,r){let s=this.prepareExternalUrl(i+re(r));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(ge(rt),ge(kt,8))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ai=(()=>{class t{_subject=new Z;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Sr(Ei(Si(n))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+re(n))}normalize(e){return t.stripTrailingSlash(Er(this._basePath,Si(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",i=null){this._locationStrategy.pushState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+re(n)),i)}replaceState(e,n="",i=null){this._locationStrategy.replaceState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+re(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(i=>i(e,n))}subscribe(e,n,i){return this._subject.subscribe({next:e,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=re;static joinWithSlash=Rt;static stripTrailingSlash=Ei;static \u0275fac=function(n){return new(n||t)(ge(ke))};static \u0275prov=v({token:t,factory:()=>Cr(),providedIn:"root"})}return t})();function Cr(){return new Ai(ge(ke))}function Er(t,o){if(!t||!o.startsWith(t))return o;let e=o.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:o}function Si(t){return t.replace(/\/index.html$/,"")}function Sr(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var wr=(()=>{class t extends ke{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=Rt(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,i,r){let s=this.prepareExternalUrl(i+re(r))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,s)}replaceState(e,n,i,r){let s=this.prepareExternalUrl(i+re(r))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(ge(rt),ge(kt,8))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var yn=/\s+/,Ti=[],Ar=(()=>{class t{_ngEl;_renderer;initialClasses=Ti;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(yn):Ti}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(yn):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let i=this.stateMap.get(e);i!==void 0?(i.enabled!==n&&(i.changed=!0,i.enabled=n),i.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],i=e[1];i.changed?(this._toggleClass(n,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),i.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(yn).forEach(i=>{n?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static \u0275fac=function(n){return new(n||t)(k(ne),k(Ce))};static \u0275dir=S({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Bt=class{$implicit;ngForOf;index;count;constructor(o,e,n,i){this.$implicit=o,this.ngForOf=e,this.index=n,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Li=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,i){this._viewContainer=e,this._template=n,this._differs=i}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((i,r,s)=>{if(i.previousIndex==null)n.createEmbeddedView(this._template,new Bt(i.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)n.remove(r===null?void 0:r);else if(r!==null){let a=n.get(r);n.move(a,s),Fi(a,i)}});for(let i=0,r=n.length;i<r;i++){let a=n.get(i).context;a.index=i,a.count=r,a.ngForOf=this._ngForOf}e.forEachIdentityChange(i=>{let r=n.get(i.currentIndex);Fi(r,i)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(k(Lt),k(et),k(Di))};static \u0275dir=S({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function Fi(t,o){t.context.$implicit=o.item}var Cn=(()=>{class t{_viewContainer;_context=new $t;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){_i(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){_i(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(k(Lt),k(et))};static \u0275dir=S({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),$t=class{$implicit=null;ngIf=null};function _i(t,o){if(t&&!t.createEmbeddedView)throw new Tt(2020,!1)}var En=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,i){this._ngEl=e,this._differs=n,this._renderer=i}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[i,r]=e.split("."),s=i.indexOf("-")===-1?void 0:si.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,i,r?`${n}${r}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,i,s)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(k(ne),k(Ci),k(Ce))};static \u0275dir=S({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),Sn=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,i):!1,get:(e,n,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,i)}})}static \u0275fac=function(n){return new(n||t)(k(Lt))};static \u0275dir=S({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[_t]})}return t})();function Tr(t,o){return new Tt(2100,!1)}var vn=class{createSubscription(o,e,n){return Je(()=>o.subscribe({next:e,error:n}))}dispose(o){Je(()=>o.unsubscribe())}},Dn=class{createSubscription(o,e,n){return o.then(i=>e?.(i),i=>n?.(i)),{unsubscribe:()=>{e=null,n=null}}}dispose(o){o.unsubscribe()}},Fr=new Dn,_r=new vn,Lr=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=h(ri);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n),n=>this.applicationErrorHandler(n))}_selectStrategy(e){if(ai(e))return Fr;if(li(e))return _r;throw Tr(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(n){return new(n||t)(k(Oe,16))};static \u0275pipe=It({name:"async",type:t,pure:!1})}return t})();var ee=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=M({type:t});static \u0275inj=O({})}return t})();var Or="browser",Mr="server";function me(t){return t===Or}function An(t){return t===Mr}var uu=(()=>{class t{static \u0275prov=v({token:t,providedIn:"root",factory:()=>new wn(h(K),window)})}return t})(),wn=class{document;window;offset=()=>[0,0];constructor(o,e){this.document=o,this.window=e}setOffset(o){Array.isArray(o)?this.offset=()=>o:this.offset=o}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(o,e){this.window.scrollTo(_e(m({},e),{left:o[0],top:o[1]}))}scrollToAnchor(o,e){let n=Nr(this.document,o);n&&(this.scrollToElement(n,e),n.focus())}setHistoryScrollRestoration(o){try{this.window.history.scrollRestoration=o}catch{console.warn(ln(2400,!1))}}scrollToElement(o,e){let n=o.getBoundingClientRect(),i=n.left+this.window.pageXOffset,r=n.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(_e(m({},e),{left:i-s[0],top:r-s[1]}))}};function Nr(t,o){let e=t.getElementById(o)||t.getElementsByName(o)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let r=i.shadowRoot;if(r){let s=r.getElementById(o)||r.querySelector(`[name="${o}"]`);if(s)return s}i=n.nextNode()}}return null}function Ee(...t){if(t){let o=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")o.push(n);else if(i==="object"){let r=Array.isArray(n)?[Ee(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);o=r.length?o.concat(r.filter(s=>!!s)):o}}return o.join(" ").trim()}}function Ii(t,o){return t?t.classList?t.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(t.className):!1}function se(t,o){if(t&&o){let e=n=>{Ii(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function xr(){return window.innerWidth-document.documentElement.offsetWidth}function Oi(t){typeof t=="string"?se(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.setProperty(t.variableName,xr()+"px"),se(document.body,t?.className||"p-overflow-hidden"))}function ae(t,o){if(t&&o){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Mi(t){typeof t=="string"?ae(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.removeProperty(t.variableName),ae(document.body,t?.className||"p-overflow-hidden"))}function Ni(t){for(let o of document?.styleSheets)try{for(let e of o?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function Pi(t){let o={width:0,height:0};if(t){let[e,n]=[t.style.visibility,t.style.display],i=t.getBoundingClientRect();t.style.visibility="hidden",t.style.display="block",o.width=i.width||t.offsetWidth,o.height=i.height||t.offsetHeight,t.style.display=n,t.style.visibility=e}return o}function bu(){let t=window,o=document,e=o.documentElement,n=o.getElementsByTagName("body")[0],i=t.innerWidth||e.clientWidth||n.clientWidth,r=t.innerHeight||e.clientHeight||n.clientHeight;return{width:i,height:r}}function Tn(t){return t?Math.abs(t.scrollLeft):0}function yu(){let t=document.documentElement;return(window.pageXOffset||Tn(t))-(t.clientLeft||0)}function vu(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function Du(t,o){t&&(typeof o=="string"?t.style.cssText=o:Object.entries(o||{}).forEach(([e,n])=>t.style[e]=n))}function xi(t,o){if(t instanceof HTMLElement){let e=t.offsetWidth;if(o){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function Rr(t){if(t){let o=t.parentNode;return o&&o instanceof ShadowRoot&&o.host&&(o=o.host),o}return null}function kr(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&Rr(t))}function st(t){return typeof Element<"u"?t instanceof Element:t!==null&&typeof t=="object"&&t.nodeType===1&&typeof t.nodeName=="string"}function Ri(t){let o=t;return t&&typeof t=="object"&&(Object.hasOwn(t,"current")?o=t.current:Object.hasOwn(t,"el")&&(Object.hasOwn(t.el,"nativeElement")?o=t.el.nativeElement:o=t.el)),st(o)?o:void 0}function Br(t,o){var e,n,i;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return o?.nextElementSibling;case"@prev":return o?.previousElementSibling;case"@first":return o?.firstElementChild;case"@last":return o?.lastElementChild;case"@child":return(e=o?.children)==null?void 0:e[0];case"@parent":return o?.parentElement;case"@grandparent":return(n=o?.parentElement)==null?void 0:n.parentElement;default:{if(typeof t=="string"){let a=t.match(/^@child\[(\d+)]/);return a?((i=o?.children)==null?void 0:i[parseInt(a[1],10)])||null:document.querySelector(t)||null}let r=(a=>typeof a=="function"&&"call"in a&&"apply"in a)(t)?t():t,s=Ri(r);return kr(s)?s:r?.nodeType===9?r:void 0}}}function Cu(t,o){let e=Br(t,o);if(e)e.appendChild(o);else throw new Error("Cannot append "+o+" to "+t)}function Ht(t,o={}){if(st(t)){let e=(n,i)=>{var r,s;let a=(r=t?.$attrs)!=null&&r[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[i].flat().reduce((l,u)=>{if(u!=null){let d=typeof u;if(d==="string"||d==="number")l.push(u);else if(d==="object"){let c=Array.isArray(u)?e(n,u):Object.entries(u).map(([f,p])=>n==="style"&&(p||p===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?f:void 0);l=c.length?l.concat(c.filter(f=>!!f)):l}}return l},a)};Object.entries(o).forEach(([n,i])=>{if(i!=null){let r=n.match(/^on(.+)/);r?t.addEventListener(r[1].toLowerCase(),i):n==="p-bind"||n==="pBind"?Ht(t,i):(i=n==="class"?[...new Set(e("class",i))].join(" ").trim():n==="style"?e("style",i).join(";").trim():i,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=i),t.setAttribute(n,i))}})}}function Be(t,o={},...e){if(t){let n=document.createElement(t);return Ht(n,o),n.append(...e),n}}function Eu(t,o){if(t){t.style.opacity="0";let e=+new Date,n="0",i=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/o}`,t.style.opacity=n,e=+new Date,+n<1&&("requestAnimationFrame"in window?requestAnimationFrame(i):setTimeout(i,16))};i()}}function $r(t,o){return st(t)?Array.from(t.querySelectorAll(o)):[]}function $e(t,o){return st(t)?t.matches(o)?t:t.querySelector(o):null}function Fn(t,o){t&&document.activeElement!==t&&t.focus(o)}function ki(t,o=""){let e=$r(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${o},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o}`),n=[];for(let i of e)getComputedStyle(i).display!="none"&&getComputedStyle(i).visibility!="hidden"&&n.push(i);return n}function Bi(t,o){let e=ki(t,o);return e.length>0?e[0]:null}function _n(t){if(t){let o=t.offsetHeight,e=getComputedStyle(t);return o-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),o}return 0}function $i(t,o){let e=ki(t,o);return e.length>0?e[e.length-1]:null}function Hi(t){if(t){let o=t.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||Tn(document.documentElement)||Tn(document.body)||0)}}return{top:"auto",left:"auto"}}function Ui(t,o){if(t){let e=t.offsetHeight;if(o){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function Ln(t){if(t){let o=t.offsetWidth,e=getComputedStyle(t);return o-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),o}return 0}function Vi(){return typeof window>"u"||!window.matchMedia?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Su(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Ut(){return new Promise(t=>{requestAnimationFrame(()=>{requestAnimationFrame(t)})})}function ji(t){var o;t&&("remove"in Element.prototype?t.remove():(o=t.parentNode)==null||o.removeChild(t))}function wu(t,o){let e=Ri(t);if(e)e.removeChild(o);else throw new Error("Cannot remove "+o+" from "+t)}function zi(t,o="",e){st(t)&&e!==null&&e!==void 0&&t.setAttribute(o,e)}function In(t,o,e=null,n){var i;o&&((i=t?.style)==null||i.setProperty(o,e,n))}function Wi(){let t=new Map;return{on(o,e){let n=t.get(o);return n?n.push(e):n=[e],t.set(o,n),this},off(o,e){let n=t.get(o);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(o,e){let n=t.get(o);n&&n.forEach(i=>{i(e)})},clear(){t.clear()}}}var Hr=Object.defineProperty,Gi=Object.getOwnPropertySymbols,Ur=Object.prototype.hasOwnProperty,Vr=Object.prototype.propertyIsEnumerable,Ki=(t,o,e)=>o in t?Hr(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,Yi=(t,o)=>{for(var e in o||(o={}))Ur.call(o,e)&&Ki(t,e,o[e]);if(Gi)for(var e of Gi(o))Vr.call(o,e)&&Ki(t,e,o[e]);return t};function Zi(...t){if(t){let o=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")o.push(n);else if(i==="object"){let r=Array.isArray(n)?[Zi(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);o=r.length?o.concat(r.filter(s=>!!s)):o}}return o.join(" ").trim()}}function jr(t){return typeof t=="function"&&"call"in t&&"apply"in t}function zr({skipUndefined:t=!1},...o){return o?.reduce((e,n={})=>{for(let i in n){let r=n[i];if(!(t&&r===void 0))if(i==="style")e.style=Yi(Yi({},e.style),n.style);else if(i==="class"||i==="className")e[i]=Zi(e[i],n[i]);else if(jr(r)){let s=e[i];e[i]=s?(...a)=>{s(...a),r(...a)}:r}else e[i]=r}return e},{})}function On(...t){return zr({skipUndefined:!1},...t)}var Wr=Object.defineProperty,qi=Object.getOwnPropertySymbols,Gr=Object.prototype.hasOwnProperty,Kr=Object.prototype.propertyIsEnumerable,Xi=(t,o,e)=>o in t?Wr(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,Yr=(t,o)=>{for(var e in o||(o={}))Gr.call(o,e)&&Xi(t,e,o[e]);if(qi)for(var e of qi(o))Kr.call(o,e)&&Xi(t,e,o[e]);return t};function he(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function Mn(t,o,e=new WeakSet){if(t===o)return!0;if(!t||!o||typeof t!="object"||typeof o!="object"||e.has(t)||e.has(o))return!1;e.add(t).add(o);let n=Array.isArray(t),i=Array.isArray(o),r,s,a;if(n&&i){if(s=t.length,s!=o.length)return!1;for(r=s;r--!==0;)if(!Mn(t[r],o[r],e))return!1;return!0}if(n!=i)return!1;let l=t instanceof Date,u=o instanceof Date;if(l!=u)return!1;if(l&&u)return t.getTime()==o.getTime();let d=t instanceof RegExp,c=o instanceof RegExp;if(d!=c)return!1;if(d&&c)return t.toString()==o.toString();let f=Object.keys(t);if(s=f.length,s!==Object.keys(o).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(o,f[r]))return!1;for(r=s;r--!==0;)if(a=f[r],!Mn(t[a],o[a],e))return!1;return!0}function Zr(t,o){return Mn(t,o)}function Vt(t){return typeof t=="function"&&"call"in t&&"apply"in t}function C(t){return!he(t)}function Qi(t,o){if(!t||!o)return null;try{let e=t[o];if(C(e))return e}catch{}if(Object.keys(t).length){if(Vt(o))return o(t);if(o.indexOf(".")===-1)return t[o];{let e=o.split("."),n=t;for(let i=0,r=e.length;i<r;++i){if(n==null)return null;n=n[e[i]]}return n}}return null}function Ji(t,o,e){return e?Qi(t,e)===Qi(o,e):Zr(t,o)}function le(t,o=!0){return t instanceof Object&&t.constructor===Object&&(o||Object.keys(t).length!==0)}function eo(t={},o={}){let e=Yr({},t);return Object.keys(o).forEach(n=>{let i=n;le(o[i])&&i in t&&le(t[i])?e[i]=eo(t[i],o[i]):e[i]=o[i]}),e}function to(...t){return t.reduce((o,e,n)=>n===0?e:eo(o,e),{})}function _u(t,o){let e=-1;if(C(t))try{e=t.findLastIndex(o)}catch{e=t.lastIndexOf([...t].reverse().find(o))}return e}function H(t,...o){return Vt(t)?t(...o):t}function te(t,o=!0){return typeof t=="string"&&(o||t!=="")}function Se(t){return te(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function jt(t,o="",e={}){let n=Se(o).split("."),i=n.shift();if(i){if(le(t)){let r=Object.keys(t).find(s=>Se(s)===i)||"";return jt(H(t[r],e),n.join("."),e)}return}return H(t,e)}function Nn(t,o=!0){return Array.isArray(t)&&(o||t.length!==0)}function no(t){return C(t)&&!isNaN(t)}function Lu(t=""){return C(t)&&t.length===1&&!!t.match(/\S| /)}function X(t,o){if(o){let e=o.test(t);return o.lastIndex=0,e}return!1}function Me(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function zt(t){return te(t)?t.replace(/(_)/g,"-").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase():t}function Pn(t){return t==="auto"?0:typeof t=="number"?t:Number(t.replace(/[^\d.]/g,"").replace(",","."))*1e3}var Wt={};function at(t="pui_id_"){return Object.hasOwn(Wt,t)||(Wt[t]=0),Wt[t]++,`${t}${Wt[t]}`}var qr=["*"],Xr=(function(t){return t[t.ACCEPT=0]="ACCEPT",t[t.REJECT=1]="REJECT",t[t.CANCEL=2]="CANCEL",t})(Xr||{}),Pu=(()=>{class t{requireConfirmationSource=new Z;acceptConfirmationSource=new Z;requireConfirmation$=this.requireConfirmationSource.asObservable();accept=this.acceptConfirmationSource.asObservable();confirm(e){return this.requireConfirmationSource.next(e),this}close(){return this.requireConfirmationSource.next(null),this}onAccept(){this.acceptConfirmationSource.next(null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var j=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var xu=(()=>{class t{messageSource=new Z;clearSource=new Z;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(e){e&&this.messageSource.next(e)}addAll(e){e&&e.length&&this.messageSource.next(e)}clear(e){this.clearSource.next(e||null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var Ru=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=W({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:qr,decls:1,vars:0,template:function(n,i){n&1&&(pe(),fe(0))},encapsulation:2})}return t})(),io=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(k(et))};static \u0275dir=S({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),we=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=M({type:t});static \u0275inj=O({imports:[ee]})}return t})(),ku=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var Qr=Object.defineProperty,Jr=Object.defineProperties,es=Object.getOwnPropertyDescriptors,Gt=Object.getOwnPropertySymbols,uo=Object.prototype.hasOwnProperty,co=Object.prototype.propertyIsEnumerable,oo=(t,o,e)=>o in t?Qr(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,de=(t,o)=>{for(var e in o||(o={}))uo.call(o,e)&&oo(t,e,o[e]);if(Gt)for(var e of Gt(o))co.call(o,e)&&oo(t,e,o[e]);return t},xn=(t,o)=>Jr(t,es(o)),be=(t,o)=>{var e={};for(var n in t)uo.call(t,n)&&o.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&Gt)for(var n of Gt(t))o.indexOf(n)<0&&co.call(t,n)&&(e[n]=t[n]);return e};function Hu(...t){return to(...t)}var ts=Wi(),Q=ts,Ue=/{([^}]*)}/g,po=/(\d+\s+[\+\-\*\/]\s+\d+)/g,fo=/var\([^)]+\)/g;function ro(t){return te(t)?t.replace(/[A-Z]/g,(o,e)=>e===0?o:"."+o.toLowerCase()).toLowerCase():t}function ns(t){return le(t)&&t.hasOwnProperty("$value")&&t.hasOwnProperty("$type")?t.$value:t}function is(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Rn(t="",o=""){return is(`${te(t,!1)&&te(o,!1)?`${t}-`:t}${o}`)}function ho(t="",o=""){return`--${Rn(t,o)}`}function os(t=""){let o=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(o+e)%2!==0}function go(t,o="",e="",n=[],i){if(te(t)){let r=t.trim();if(os(r))return;if(X(r,Ue)){let s=r.replaceAll(Ue,a=>{let l=a.replace(/{|}/g,"").split(".").filter(u=>!n.some(d=>X(u,d)));return`var(${ho(e,zt(l.join("-")))}${C(i)?`, ${i}`:""})`});return X(s.replace(fo,"0"),po)?`calc(${s})`:s}return r}else if(no(t))return t}function rs(t,o,e){te(o,!1)&&t.push(`${o}:${e};`)}function He(t,o){return t?`${t}{${o}}`:""}function mo(t,o){if(t.indexOf("dt(")===-1)return t;function e(s,a){let l=[],u=0,d="",c=null,f=0;for(;u<=s.length;){let p=s[u];if((p==='"'||p==="'"||p==="`")&&s[u-1]!=="\\"&&(c=c===p?null:p),!c&&(p==="("&&f++,p===")"&&f--,(p===","||u===s.length)&&f===0)){let b=d.trim();b.startsWith("dt(")?l.push(mo(b,a)):l.push(n(b)),d="",u++;continue}p!==void 0&&(d+=p),u++}return l}function n(s){let a=s[0];if((a==='"'||a==="'"||a==="`")&&s[s.length-1]===a)return s.slice(1,-1);let l=Number(s);return isNaN(l)?s:l}let i=[],r=[];for(let s=0;s<t.length;s++)if(t[s]==="d"&&t.slice(s,s+3)==="dt(")r.push(s),s+=2;else if(t[s]===")"&&r.length>0){let a=r.pop();r.length===0&&i.push([a,s])}if(!i.length)return t;for(let s=i.length-1;s>=0;s--){let[a,l]=i[s],u=t.slice(a+3,l),d=e(u,o),c=o(...d);t=t.slice(0,a)+c+t.slice(l+1)}return t}function so(t){return t.length===4?`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`:t}function ao(t){let o=parseInt(t.substring(1),16),e=o>>16&255,n=o>>8&255,i=o&255;return{r:e,g:n,b:i}}function ss(t,o,e){return`#${t.toString(16).padStart(2,"0")}${o.toString(16).padStart(2,"0")}${e.toString(16).padStart(2,"0")}`}var bo=(t,o,e)=>{t=so(t),o=so(o);let n=(e/100*2-1+1)/2,i=1-n,r=ao(t),s=ao(o),a=Math.round(r.r*n+s.r*i),l=Math.round(r.g*n+s.g*i),u=Math.round(r.b*n+s.b*i);return ss(a,l,u)},as=(t,o)=>bo("#000000",t,o),ls=(t,o)=>bo("#ffffff",t,o),lo=[50,100,200,300,400,500,600,700,800,900,950],Wu=t=>{if(X(t,Ue)){let o=t.replace(/{|}/g,"");return lo.reduce((e,n)=>(e[n]=`{${o}.${n}}`,e),{})}return typeof t=="string"?lo.reduce((o,e,n)=>(o[e]=n<=5?ls(t,(5-n)*19):as(t,(n-5)*15),o),{}):t},Bn=t=>{var o;let e=E.getTheme(),n=kn(e,t,void 0,"variable"),i=(o=n?.match(/--[\w-]+/g))==null?void 0:o[0],r=kn(e,t,void 0,"value");return{name:i,variable:n,value:r}},ye=(...t)=>kn(E.getTheme(),...t),kn=(t={},o,e,n)=>{if(o){let{variable:i,options:r}=E.defaults||{},{prefix:s,transform:a}=t?.options||r||{},l=X(o,Ue)?o:`{${o}}`;return n==="value"||he(n)&&a==="strict"?E.getTokenValue(o):go(l,void 0,s,[i.excludedKeyRegex],e)}return""};function Ve(t,...o){if(t instanceof Array){let e=t.reduce((n,i,r)=>{var s;return n+i+((s=H(o[r],{dt:ye}))!=null?s:"")},"");return mo(e,ye)}return H(t,{dt:ye})}function us(t,o={}){let e=E.defaults.variable,{prefix:n=e.prefix,selector:i=e.selector,excludedKeyRegex:r=e.excludedKeyRegex}=o,s=[],a=[],l=[{node:t,path:n}];for(;l.length;){let{node:d,path:c}=l.pop();for(let f in d){let p=d[f],b=ns(p),y=X(f,r)?Rn(c):Rn(c,zt(f));if(le(b))l.push({node:b,path:y});else{let w=ho(y),I=go(b,y,n,[r]);rs(a,w,I);let x=y;n&&x.startsWith(n+"-")&&(x=x.slice(n.length+1)),s.push(x.replace(/-/g,"."))}}}let u=a.join("");return{value:a,tokens:s,declarations:u,css:He(i,u)}}var ue={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t},:host${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:t,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let o=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=o.map(i=>i.resolve(e)).find(i=>i.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,o){return us(t,{prefix:o?.prefix})},getCommon({name:t="",theme:o={},params:e,set:n,defaults:i}){var r,s,a,l,u,d,c;let{preset:f,options:p}=o,b,y,w,I,x,z,Pe;if(C(f)&&p.transform!=="strict"){let{primitive:Fe,semantic:xe,extend:ft}=f,Ye=xe||{},{colorScheme:ht}=Ye,gt=be(Ye,["colorScheme"]),mt=ft||{},{colorScheme:bt}=mt,Ze=be(mt,["colorScheme"]),qe=ht||{},{dark:yt}=qe,vt=be(qe,["dark"]),Dt=bt||{},{dark:Ct}=Dt,Et=be(Dt,["dark"]),St=C(Fe)?this._toVariables({primitive:Fe},p):{},wt=C(gt)?this._toVariables({semantic:gt},p):{},At=C(vt)?this._toVariables({light:vt},p):{},qn=C(yt)?this._toVariables({dark:yt},p):{},Xn=C(Ze)?this._toVariables({semantic:Ze},p):{},Qn=C(Et)?this._toVariables({light:Et},p):{},Jn=C(Ct)?this._toVariables({dark:Ct},p):{},[ir,or]=[(r=St.declarations)!=null?r:"",St.tokens],[rr,sr]=[(s=wt.declarations)!=null?s:"",wt.tokens||[]],[ar,lr]=[(a=At.declarations)!=null?a:"",At.tokens||[]],[ur,dr]=[(l=qn.declarations)!=null?l:"",qn.tokens||[]],[cr,pr]=[(u=Xn.declarations)!=null?u:"",Xn.tokens||[]],[fr,hr]=[(d=Qn.declarations)!=null?d:"",Qn.tokens||[]],[gr,mr]=[(c=Jn.declarations)!=null?c:"",Jn.tokens||[]];b=this.transformCSS(t,ir,"light","variable",p,n,i),y=or;let br=this.transformCSS(t,`${rr}${ar}`,"light","variable",p,n,i),yr=this.transformCSS(t,`${ur}`,"dark","variable",p,n,i);w=`${br}${yr}`,I=[...new Set([...sr,...lr,...dr])];let vr=this.transformCSS(t,`${cr}${fr}color-scheme:light`,"light","variable",p,n,i),Dr=this.transformCSS(t,`${gr}color-scheme:dark`,"dark","variable",p,n,i);x=`${vr}${Dr}`,z=[...new Set([...pr,...hr,...mr])],Pe=H(f.css,{dt:ye})}return{primitive:{css:b,tokens:y},semantic:{css:w,tokens:I},global:{css:x,tokens:z},style:Pe}},getPreset({name:t="",preset:o={},options:e,params:n,set:i,defaults:r,selector:s}){var a,l,u;let d,c,f;if(C(o)&&e.transform!=="strict"){let p=t.replace("-directive",""),b=o,{colorScheme:y,extend:w,css:I}=b,x=be(b,["colorScheme","extend","css"]),z=w||{},{colorScheme:Pe}=z,Fe=be(z,["colorScheme"]),xe=y||{},{dark:ft}=xe,Ye=be(xe,["dark"]),ht=Pe||{},{dark:gt}=ht,mt=be(ht,["dark"]),bt=C(x)?this._toVariables({[p]:de(de({},x),Fe)},e):{},Ze=C(Ye)?this._toVariables({[p]:de(de({},Ye),mt)},e):{},qe=C(ft)?this._toVariables({[p]:de(de({},ft),gt)},e):{},[yt,vt]=[(a=bt.declarations)!=null?a:"",bt.tokens||[]],[Dt,Ct]=[(l=Ze.declarations)!=null?l:"",Ze.tokens||[]],[Et,St]=[(u=qe.declarations)!=null?u:"",qe.tokens||[]],wt=this.transformCSS(p,`${yt}${Dt}`,"light","variable",e,i,r,s),At=this.transformCSS(p,Et,"dark","variable",e,i,r,s);d=`${wt}${At}`,c=[...new Set([...vt,...Ct,...St])],f=H(I,{dt:ye})}return{css:d,tokens:c,style:f}},getPresetC({name:t="",theme:o={},params:e,set:n,defaults:i}){var r;let{preset:s,options:a}=o,l=(r=s?.components)==null?void 0:r[t];return this.getPreset({name:t,preset:l,options:a,params:e,set:n,defaults:i})},getPresetD({name:t="",theme:o={},params:e,set:n,defaults:i}){var r,s;let a=t.replace("-directive",""),{preset:l,options:u}=o,d=((r=l?.components)==null?void 0:r[a])||((s=l?.directives)==null?void 0:s[a]);return this.getPreset({name:a,preset:d,options:u,params:e,set:n,defaults:i})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,o){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?o.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:o.options.darkModeSelector):[]},getLayerOrder(t,o={},e,n){let{cssLayer:i}=o;return i?`@layer ${H(i.order||i.name||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:o={},params:e,props:n={},set:i,defaults:r}){let s=this.getCommon({name:t,theme:o,params:e,set:i,defaults:r}),a=Object.entries(n).reduce((l,[u,d])=>l.push(`${u}="${d}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[u,d])=>{if(le(d)&&Object.hasOwn(d,"css")){let c=Me(d.css),f=`${u}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${f}" ${a}>${c}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:o={},params:e,props:n={},set:i,defaults:r}){var s;let a={name:t,theme:o,params:e,set:i,defaults:r},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,u=Object.entries(n).reduce((d,[c,f])=>d.push(`${c}="${f}"`)&&d,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${u}>${Me(l)}</style>`:""},createTokens(t={},o,e="",n="",i={}){let r=function(a,l={},u=[]){if(u.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:a,path:this.path,paths:l,value:void 0};u.push(this.path),l.name=this.path,l.binding||(l.binding={});let d=this.value;if(typeof this.value=="string"&&Ue.test(this.value)){let c=this.value.trim().replace(Ue,f=>{var p;let b=f.slice(1,-1),y=this.tokens[b];if(!y)return console.warn(`Token not found for path: ${b}`),"__UNRESOLVED__";let w=y.computed(a,l,u);return Array.isArray(w)&&w.length===2?`light-dark(${w[0].value},${w[1].value})`:(p=w?.value)!=null?p:"__UNRESOLVED__"});d=po.test(c.replace(fo,"0"))?`calc(${c})`:c}return he(l.binding)&&delete l.binding,u.pop(),{colorScheme:a,path:this.path,paths:l,value:d.includes("__UNRESOLVED__")?void 0:d}},s=(a,l,u)=>{Object.entries(a).forEach(([d,c])=>{let f=X(d,o.variable.excludedKeyRegex)?l:l?`${l}.${ro(d)}`:ro(d),p=u?`${u}.${d}`:d;le(c)?s(c,f,p):(i[f]||(i[f]={paths:[],computed:(b,y={},w=[])=>{if(i[f].paths.length===1)return i[f].paths[0].computed(i[f].paths[0].scheme,y.binding,w);if(b&&b!=="none")for(let I=0;I<i[f].paths.length;I++){let x=i[f].paths[I];if(x.scheme===b)return x.computed(b,y.binding,w)}return i[f].paths.map(I=>I.computed(I.scheme,y[I.scheme],w))}}),i[f].paths.push({path:p,value:c,scheme:p.includes("colorScheme.light")?"light":p.includes("colorScheme.dark")?"dark":"none",computed:r,tokens:i}))})};return s(t,e,n),i},getTokenValue(t,o,e){var n;let i=(a=>a.split(".").filter(l=>!X(l.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(o),r=o.includes("colorScheme.light")?"light":o.includes("colorScheme.dark")?"dark":void 0,s=[(n=t[i])==null?void 0:n.computed(r)].flat().filter(a=>a);return s.length===1?s[0].value:s.reduce((a={},l)=>{let u=l,{colorScheme:d}=u,c=be(u,["colorScheme"]);return a[d]=c,a},void 0)},getSelectorRule(t,o,e,n){return e==="class"||e==="attr"?He(C(o)?`${t}${o},${t} ${o}`:t,n):He(t,He(o??":root,:host",n))},transformCSS(t,o,e,n,i={},r,s,a){if(C(o)){let{cssLayer:l}=i;if(n!=="style"){let u=this.getColorSchemeOption(i,s);o=e==="dark"?u.reduce((d,{type:c,selector:f})=>(C(f)&&(d+=f.includes("[CSS]")?f.replace("[CSS]",o):this.getSelectorRule(f,a,c,o)),d),""):He(a??":root,:host",o)}if(l){let u={name:"primeui",order:"primeui"};le(l)&&(u.name=H(l.name,{name:t,type:n})),C(u.name)&&(o=He(`@layer ${u.name}`,o),r?.layerNames(u.name))}return o}return""}},E={defaults:{variable:{prefix:"p",selector:":root,:host",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:o}=t;o&&(this._theme=xn(de({},o),{options:de(de({},this.defaults.options),o.options)}),this._tokens=ue.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),Q.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=xn(de({},this.theme),{preset:t}),this._tokens=ue.createTokens(t,this.defaults),this.clearLoadedStyleNames(),Q.emit("preset:change",t),Q.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=xn(de({},this.theme),{options:t}),this.clearLoadedStyleNames(),Q.emit("options:change",t),Q.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return ue.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",o){return ue.getCommon({name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",o){let e={name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ue.getPresetC(e)},getDirective(t="",o){let e={name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ue.getPresetD(e)},getCustomPreset(t="",o,e,n){let i={name:t,preset:o,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ue.getPreset(i)},getLayerOrderCSS(t=""){return ue.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",o,e="style",n){return ue.transformCSS(t,o,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",o,e={}){return ue.getCommonStyleSheet({name:t,theme:this.theme,params:o,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,o,e={}){return ue.getStyleSheet({name:t,theme:this.theme,params:o,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:o}){this._loadingStyles.size&&(this._loadingStyles.delete(o),Q.emit(`theme:${o}:load`,t),!this._loadingStyles.size&&Q.emit("theme:load"))}};var yo=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    .p-collapsible-enter-active {
        animation: p-animate-collapsible-expand 0.2s ease-out;
        overflow: hidden;
    }

    .p-collapsible-leave-active {
        animation: p-animate-collapsible-collapse 0.2s ease-out;
        overflow: hidden;
    }

    @keyframes p-animate-collapsible-expand {
        from {
            grid-template-rows: 0fr;
        }
        to {
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-collapsible-collapse {
        from {
            grid-template-rows: 1fr;
        }
        to {
            grid-template-rows: 0fr;
        }
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: var(--px-mask-background, dt('mask.background'));
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter-active {
        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave-active {
        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;
    }

    @keyframes p-animate-overlay-mask-enter {
        from {
            background: transparent;
        }
        to {
            background: var(--px-mask-background, dt('mask.background'));
        }
    }
    @keyframes p-animate-overlay-mask-leave {
        from {
            background: var(--px-mask-background, dt('mask.background'));
        }
        to {
            background: transparent;
        }
    }

    .p-anchored-overlay-enter-active {
        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-anchored-overlay-leave-active {
        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-anchored-overlay-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-anchored-overlay-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;var ds=0,vo=(()=>{class t{document=h(K);use(e,n={}){let i=!1,r=e,s=null,{immediate:a=!0,manual:l=!1,name:u=`style_${++ds}`,id:d=void 0,media:c=void 0,nonce:f=void 0,first:p=!1,props:b={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${u}"]`)||d&&this.document.getElementById(d)||this.document.createElement("style"),s){if(!s.isConnected){r=e;let y=this.document.head;zi(s,"nonce",f),p&&y.firstChild?y.insertBefore(s,y.firstChild):y.appendChild(s),Ht(s,{type:"text/css",media:c,nonce:f,"data-primeng-style-id":u})}s.textContent!==r&&(s.textContent=r)}return{id:d,name:u,el:s,css:r}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var je={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},cs=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`,U=(()=>{class t{name="base";useStyle=h(vo);css=void 0;style=void 0;classes={};inlineStyles={};load=(e,n={},i=r=>r)=>{let r=i(Ve`${H(e,{dt:ye})}`);return r?this.useStyle.use(Me(r),m({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadStyle=(e={},n="")=>this.load(this.style,e,(i="")=>E.transformCSS(e.name||this.name,`${i}${Ve`${n}`}`));loadBaseCSS=(e={})=>this.load(cs,e);loadBaseStyle=(e={},n="")=>this.load(yo,e,(i="")=>E.transformCSS(e.name||this.name,`${i}${Ve`${n}`}`));getCommonTheme=e=>E.getCommon(this.name,e);getComponentTheme=e=>E.getComponent(this.name,e);getPresetTheme=(e,n,i)=>E.getCustomPreset(this.name,e,n,i);getLayerOrderThemeCSS=()=>E.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let i=H(this.css,{dt:ye}),r=Me(Ve`${i}${e}`),s=Object.entries(n).reduce((a,[l,u])=>a.push(`${l}="${u}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>E.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let i=[E.getStyleSheet(this.name,e,n)];if(this.style){let r=this.name==="base"?"global-style":`${this.name}-style`,s=Ve`${H(this.style,{dt:ye})}`,a=Me(E.transformCSS(r,s)),l=Object.entries(n).reduce((u,[d,c])=>u.push(`${d}="${c}"`)&&u,[]).join(" ");i.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return i.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ps=(()=>{class t{theme=R(void 0);csp=R({nonce:void 0});isThemeChanged=!1;document=h(K);baseStyle=h(U);constructor(){F(()=>{Q.on("theme:change",e=>{Je(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),F(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){E.clearLoadedStyleNames(),Q.clear()}onThemeChange(e){E.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!E.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,m({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,m({name:"semantic-variables"},s)),this.baseStyle.load(i?.css,m({name:"global-variables"},s)),this.baseStyle.loadBaseStyle(m({name:"global-style"},s),r),E.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:i}=e||{};n&&this.theme.set(n),i&&this.csp.set(i)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),$n=(()=>{class t extends ps{ripple=R(!1);platformId=h(De);inputStyle=R(null);inputVariant=R(null);overlayAppendTo=R("self");overlayOptions={};csp=R({nonce:void 0});unstyled=R(void 0);pt=R(void 0);ptOptions=R(void 0);filterMatchModeOptions={text:[j.STARTS_WITH,j.CONTAINS,j.NOT_CONTAINS,j.ENDS_WITH,j.EQUALS,j.NOT_EQUALS],numeric:[j.EQUALS,j.NOT_EQUALS,j.LESS_THAN,j.LESS_THAN_OR_EQUAL_TO,j.GREATER_THAN,j.GREATER_THAN_OR_EQUAL_TO],date:[j.DATE_IS,j.DATE_IS_NOT,j.DATE_BEFORE,j.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",completed:"Completed",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize",minimizeLabel:"Minimize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new Z;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=m(m({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:i,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:u,filterMatchModeOptions:d,overlayAppendTo:c,zIndex:f,ptOptions:p,pt:b,unstyled:y}=e||{};n&&this.csp.set(n),c&&this.overlayAppendTo.set(c),i&&this.ripple.set(i),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),u&&this.setTranslation(u),d&&(this.filterMatchModeOptions=d),f&&(this.zIndex=f),b&&this.pt.set(b),p&&this.ptOptions.set(p),y&&this.unstyled.set(y),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=D(t)))(i||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),fs=new L("PRIME_NG_CONFIG");function bd(...t){let o=t?.map(n=>({provide:fs,useValue:n,multi:!1})),e=ui(()=>{let n=h($n);t?.forEach(i=>n.setConfig(i))});return ii([...o,e])}var Do=(()=>{class t extends U{name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=D(t)))(i||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),J=new L("PARENT_INSTANCE"),P=(()=>{class t{document=h(K);platformId=h(De);el=h(ne);injector=h(un);cd=h(Oe);renderer=h(Ce);config=h($n);$parentInstance=h(J,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=h(Do);baseStyle=h(U);scopedStyleEl;parent=this.$params.parent;cn=Ee;_themeScopedListener;themeChangeListenerMap=new Map;dt=g();unstyled=g();pt=g();ptOptions=g();$attrSelector=at("pc");get $name(){return this.componentName||"UnknownComponent"}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=R(void 0);directiveUnstyled=R(void 0);$unstyled=q(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=q(()=>H(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,e=>H(e,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,e=>this._getOptionValue(e,this.$hostName||this.$name,this.$params)||H(e,this.$params))}get $style(){return m(m({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let e=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:e}}}onInit(){}onChanges(e){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){F(e=>{this.document&&!An(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener("_themeScopedListener",this._themeScopedListener)):this._unloadScopedThemeStyles()),e(()=>{this._offThemeChangeListener("_themeScopedListener")})}),F(e=>{this.document&&!An(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener("_loadCoreStyles",this._loadCoreStyles))),e(()=>{this._offThemeChangeListener("_loadCoreStyles")})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(e){this.onChanges(e),this._hook("onChanges",e)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(e,...n){return Vt(e)?e(...n):On(...n)}_getHostInstance(e){return e?this.$hostName?this.$name===this.$hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0}_getPropValue(e){return this[e]||this._getHostInstance(this)?.[e]}_getOptionValue(e,n="",i={}){return jt(e,n,i)}_hook(e,...n){if(!this.$hostName){let i=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${e}`),r=this._useDefaultPT(this._getOptionValue,`hooks.${e}`);i?.(...n),r?.(...n)}}_load(){je.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),je.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener("_load",()=>this._load())}_loadGlobalStyles(){let e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);C(e)&&this.baseStyle.load(e,m({name:"global"},this.$styleOptions))}_loadCoreStyles(){!je.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),je.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!E.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:r}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,m({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,m({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(i?.css,m({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(m({name:"global-style"},this.$styleOptions),r),E.setLoadedStyleName("common")}if(!E.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:e,style:n}=this.$style?.getComponentTheme?.()||{};this.$style?.load(e,m({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(m({name:`${this.$style?.name}-style`},this.$styleOptions),n),E.setLoadedStyleName(this.$style?.name)}if(!E.isStyleNameLoaded("layer-order")){let e=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,m({name:"layer-order",first:!0},this.$styleOptions)),E.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(e){let{css:n}=this.$style?.getPresetTheme?.(e,`[${this.$attrSelector}]`)||{},i=this.$style?.load(n,m({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e,n=()=>{}){this._offThemeChangeListener(e),je.clearLoadedStyleNames();let i=n.bind(this);this.themeChangeListenerMap.set(e,i),Q.on("theme:change",i)}_removeThemeListeners(){this._offThemeChangeListener("_themeScopedListener"),this._offThemeChangeListener("_loadCoreStyles"),this._offThemeChangeListener("_load")}_offThemeChangeListener(e){this.themeChangeListenerMap.has(e)&&(Q.off("theme:change",this.themeChangeListenerMap.get(e)),this.themeChangeListenerMap.delete(e))}_getPTValue(e={},n="",i={},r=!0){let s=/./g.test(n)&&!!i[n.split(".")[0]],{mergeSections:a=!0,mergeProps:l=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},u=r?s?this._useGlobalPT(this._getPTClassValue,n,i):this._useDefaultPT(this._getPTClassValue,n,i):void 0,d=s?void 0:this._usePT(this._getPT(e,this.$hostName||this.$name),this._getPTClassValue,n,_e(m({},i),{global:u||{}})),c=this._getPTDatasets(n);return a||!a&&d?l?this._mergeProps(l,u,d,c):m(m(m({},u),d),c):m(m({},d),c)}_getPTDatasets(e=""){let n="data-pc-",i=e==="root"&&C(this.$pt()?.["data-pc-section"]);return e!=="transition"&&_e(m({},e==="root"&&_e(m({[`${n}name`]:Se(i?this.$pt()?.["data-pc-section"]:this.$name)},i&&{[`${n}extend`]:Se(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${n}section`]:Se(e.includes(".")?e.split(".").at(-1)??"":e)})}_getPTClassValue(e,n,i){let r=this._getOptionValue(e,n,i);return te(r)||Nn(r)?{class:r}:r}_getPT(e,n="",i){let r=(s,a=!1)=>{let l=i?i(s):s,u=Se(n),d=Se(this.$hostName||this.$name);return(a?u!==d?l?.[u]:void 0:l?.[u])??l};return e?.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:r(e.originalValue),value:r(e.value)}:r(e,!0)}_usePT(e,n,i,r){let s=a=>n?.call(this,a,i,r);if(e?.hasOwnProperty("_usept")){let{mergeSections:a=!0,mergeProps:l=!1}=e._usept||this.config?.ptOptions()||{},u=s(e.originalValue),d=s(e.value);return u===void 0&&d===void 0?void 0:te(d)?d:te(u)?u:a||!a&&d?l?this._mergeProps(l,u,d):m(m({},u),d):d}return s(e)}_useGlobalPT(e,n,i){return this._usePT(this.$globalPT,e,n,i)}_useDefaultPT(e,n,i){return this._usePT(this.$defaultPT,e,n,i)}ptm(e="",n={}){return this._getPTValue(this.$pt(),e,m(m({},this.$params),n))}ptms(e,n={}){return e.reduce((i,r)=>(i=On(i,this.ptm(r,n))||{},i),{})}ptmo(e={},n="",i={}){return this._getPTValue(e,n,m({instance:this},i),!1)}cx(e,n={}){return this.$unstyled()?void 0:Ee(this._getOptionValue(this.$style.classes,e,m(m({},this.$params),n)))}sx(e="",n=!0,i={}){if(n){let r=this._getOptionValue(this.$style.inlineStyles,e,m(m({},this.$params),i)),s=this._getOptionValue(this.baseComponentStyle.inlineStyles,e,m(m({},this.$params),i));return m(m({},s),r)}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=S({type:t,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[B([Do,U]),_t]})}return t})();var Hn=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let i=n.trim().split(" ");for(let r=0;r<i.length;r++)e.classList.add(i[r])}else{let i=n.split(" ");for(let r=0;r<i.length;r++)e.className+=" "+i[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,i=0;for(var r=0;r<n.length;r++){if(n[r]==e)return i;n[r].nodeType==1&&i++}return-1}static indexWithinGroup(e,n){let i=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<i.length;s++){if(i[s]==e)return r;i[s].attributes&&i[s].attributes[n]&&i[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,i="self"){i!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,i="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),i==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,i=!0){let r=z=>{if(z)return getComputedStyle(z).getPropertyValue("position")==="relative"?z:r(z.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.offsetHeight,l=n.getBoundingClientRect(),u=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),c=this.getViewport(),p=r(e)?.getBoundingClientRect()||{top:-1*u,left:-1*d},b,y,w="top";l.top+a+s.height>c.height?(b=l.top-p.top-s.height,w="bottom",l.top+b<0&&(b=-1*l.top)):(b=a+l.top-p.top,w="top");let I=l.left+s.width-c.width,x=l.left-p.left;if(s.width>c.width?y=(l.left-p.left)*-1:I>0?y=x-I:y=l.left-p.left,e.style.top=b+"px",e.style.left=y+"px",e.style.transformOrigin=w,i){let z=Ni(/-anchor-gutter$/)?.value;e.style.marginTop=w==="bottom"?`calc(${z??"2px"} * -1)`:z??""}}static absolutePosition(e,n,i=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,a=r.width,l=n.offsetHeight,u=n.offsetWidth,d=n.getBoundingClientRect(),c=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),p=this.getViewport(),b,y;d.top+l+s>p.height?(b=d.top+c-s,e.style.transformOrigin="bottom",b<0&&(b=c)):(b=l+d.top+c,e.style.transformOrigin="top"),d.left+a>p.width?y=Math.max(0,d.left+f+u-a):y=d.left+f,e.style.top=b+"px",e.style.left=y+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let i=this.getParents(e),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of i){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let u=l.split(",");for(let d of u){let c=this.findSingle(a,d);c&&s(c)&&n.push(c)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),d=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,c=e.scrollTop,f=e.clientHeight,p=this.getOuterHeight(n);d<0?e.scrollTop=c+d:d+p>f&&(e.scrollTop=c+d-f+p)}static fadeIn(e,n){e.style.opacity=0;let i=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,e.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(e,n){var i=1,r=50,s=n,a=r/s;let l=setInterval(()=>{i=i-a,i<=0&&(i=0,clearInterval(l)),e.style.opacity=i},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let i=e.offsetWidth;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(e,n){let i=e.offsetHeight;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let e=window,n=document,i=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||i.clientWidth||r.clientWidth,a=e.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var i=e.indexOf("Trident/");if(i>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,i){e[n].apply(e,i)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let i=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of i){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let i=this.findSingle(e,this.getFocusableSelectorString(n));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,n=""){let i=this.getFocusableElements(e,n);return i.length>0?i[0]:null}static getLastFocusableElement(e,n){let i=this.getFocusableElements(e,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,n=!1){let i=t.getFocusableElements(e),r=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);n?s==-1||s===0?r=i.length-1:r=s-1:s!=-1&&s!==i.length-1&&(r=s+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let i=e.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...i){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...i),r}}static setAttribute(e,n="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(n,i)}static setAttributes(e,n={}){if(this.isElement(e)){let i=(r,s)=>{let a=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((l,u)=>{if(u!=null){let d=typeof u;if(d==="string"||d==="number")l.push(u);else if(d==="object"){let c=Array.isArray(u)?i(r,u):Object.entries(u).map(([f,p])=>r==="style"&&(p||p===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?f:void 0);l=c.length?l.concat(c.filter(f=>!!f)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(i("class",s))].join(" ").trim():r==="style"?i("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();function Nd(){Oi({variableName:Bn("scrollbar.width").name})}function Pd(){Mi({variableName:Bn("scrollbar.width").name})}var Co=class{element;listener;scrollableParents;constructor(o,e=()=>{}){this.element=o,this.listener=e}bindScrollListener(){this.scrollableParents=Hn.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Eo=(()=>{class t extends P{autofocus=!1;focused=!1;platformId=h(De);document=h(K);host=h(ne);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){me(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=Hn.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=D(t)))(i||t)}})();static \u0275dir=S({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[A]})}return t})();var _=(()=>{class t{el;renderer;pBind=g(void 0);_attrs=R(void 0);attrs=q(()=>this._attrs()||this.pBind());styles=q(()=>this.attrs()?.style);classes=q(()=>Ee(this.attrs()?.class));listeners=[];constructor(e,n){this.el=e,this.renderer=n,F(()=>{let a=this.attrs()||{},{style:i,class:r}=a,s=ei(a,["style","class"]);for(let[l,u]of Object.entries(s))if(l.startsWith("on")&&typeof u=="function"){let d=l.slice(2).toLowerCase();if(!this.listeners.some(c=>c.eventName===d)){let c=this.renderer.listen(this.el.nativeElement,d,u);this.listeners.push({eventName:d,unlisten:c})}}else u==null?this.renderer.removeAttribute(this.el.nativeElement,l):(this.renderer.setAttribute(this.el.nativeElement,l,u.toString()),l in this.el.nativeElement&&(this.el.nativeElement[l]=u))})}ngOnDestroy(){this.clearListeners()}setAttrs(e){Ji(this._attrs(),e)||this._attrs.set(e)}clearListeners(){this.listeners.forEach(({unlisten:e})=>e()),this.listeners=[]}static \u0275fac=function(n){return new(n||t)(k(ne),k(Ce))};static \u0275dir=S({type:t,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(n,i){n&2&&(vi(i.styles()),G(i.classes()))},inputs:{pBind:[1,"pBind"]}})}return t})(),Kt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=M({type:t});static \u0275inj=O({})}return t})();var So=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var hs=`
    ${So}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,gs={root:({instance:t})=>{let o=typeof t.value=="function"?t.value():t.value,e=typeof t.size=="function"?t.size():t.size,n=typeof t.badgeSize=="function"?t.badgeSize():t.badgeSize,i=typeof t.severity=="function"?t.severity():t.severity;return["p-badge p-component",{"p-badge-circle":C(o)&&String(o).length===1,"p-badge-dot":he(o),"p-badge-sm":e==="small"||n==="small","p-badge-lg":e==="large"||n==="large","p-badge-xl":e==="xlarge"||n==="xlarge","p-badge-info":i==="info","p-badge-success":i==="success","p-badge-warn":i==="warn","p-badge-danger":i==="danger","p-badge-secondary":i==="secondary","p-badge-contrast":i==="contrast"}]}},wo=(()=>{class t extends U{name="badge";style=hs;classes=gs;static \u0275fac=(()=>{let e;return function(i){return(e||(e=D(t)))(i||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var Ao=new L("BADGE_INSTANCE");var Un=(()=>{class t extends P{componentName="Badge";$pcBadge=h(Ao,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(_,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=g();badgeSize=g();size=g();severity=g();value=g();badgeDisabled=g(!1,{transform:T});_componentStyle=h(wo);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=D(t)))(i||t)}})();static \u0275cmp=W({type:t,selectors:[["p-badge"]],hostVars:5,hostBindings:function(n,i){n&2&&(ce("data-p",i.dataP),G(i.cn(i.cx("root"),i.styleClass())),yi("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[B([wo,{provide:Ao,useExisting:t},{provide:J,useExisting:t}]),ie([_]),A],decls:1,vars:1,template:function(n,i){n&1&&Pt(0),n&2&&xt(i.value())},dependencies:[ee,we,Kt],encapsulation:2,changeDetection:0})}return t})(),To=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=M({type:t});static \u0275inj=O({imports:[Un,we,we]})}return t})();var bs=["*"],ys={root:"p-fluid"},Fo=(()=>{class t extends U{name="fluid";classes=ys;static \u0275fac=(()=>{let e;return function(i){return(e||(e=D(t)))(i||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var _o=new L("FLUID_INSTANCE"),Vn=(()=>{class t extends P{componentName="Fluid";$pcFluid=h(_o,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(_,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=h(Fo);static \u0275fac=(()=>{let e;return function(i){return(e||(e=D(t)))(i||t)}})();static \u0275cmp=W({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,i){n&2&&G(i.cx("root"))},features:[B([Fo,{provide:_o,useExisting:t},{provide:J,useExisting:t}]),ie([_]),A],ngContentSelectors:bs,decls:1,vars:0,template:function(n,i){n&1&&(pe(),fe(0))},dependencies:[ee],encapsulation:2,changeDetection:0})}return t})();var vs=["*"],Ds=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Lo=(()=>{class t extends U{name="baseicon";css=Ds;static \u0275fac=(()=>{let e;return function(i){return(e||(e=D(t)))(i||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Zt=(()=>{class t extends P{spin=!1;_componentStyle=h(Lo);getClassNames(){return Ee("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=D(t)))(i||t)}})();static \u0275cmp=W({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,i){n&2&&G(i.getClassNames())},inputs:{spin:[2,"spin","spin",T]},features:[B([Lo]),A],ngContentSelectors:vs,decls:1,vars:0,template:function(n,i){n&1&&(pe(),fe(0))},encapsulation:2,changeDetection:0})}return t})();var Cs=["data-p-icon","spinner"],Io=(()=>{class t extends Zt{pathId;onInit(){this.pathId="url(#"+at()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=D(t)))(i||t)}})();static \u0275cmp=W({type:t,selectors:[["","data-p-icon","spinner"]],features:[A],attrs:Cs,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(Re(),pn(0,"g"),nt(1,"path",0),fn(),pn(2,"defs")(3,"clipPath",1),nt(4,"rect",2),fn()()),n&2&&(ce("clip-path",i.pathId),Y(3),fi("id",i.pathId))},encapsulation:2})}return t})();var Es=["data-p-icon","times"],kc=(()=>{class t extends Zt{static \u0275fac=(()=>{let e;return function(i){return(e||(e=D(t)))(i||t)}})();static \u0275cmp=W({type:t,selectors:[["","data-p-icon","times"]],features:[A],attrs:Es,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,i){n&1&&(Re(),nt(0,"path",0))},encapsulation:2})}return t})();var Oo=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var Ss=`
    ${Oo}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,ws={root:"p-ink"},Mo=(()=>{class t extends U{name="ripple";style=Ss;classes=ws;static \u0275fac=(()=>{let e;return function(i){return(e||(e=D(t)))(i||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var No=(()=>{class t extends P{componentName="Ripple";zone=h(oi);_componentStyle=h(Mo);animationListener;mouseDownListener;timeout;constructor(){super(),F(()=>{me(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(!this.$unstyled()&&ae(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"),!_n(n)&&!Ln(n)){let a=Math.max(xi(this.el.nativeElement),Ui(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let i=Hi(this.el.nativeElement),r=e.pageX-i.left+this.document.body.scrollTop-Ln(n)/2,s=e.pageY-i.top+this.document.body.scrollLeft-_n(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),!this.$unstyled()&&se(n,"p-ink-active"),n.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&(!this.$unstyled()&&ae(a,"p-ink-active"),a.setAttribute("data-p-ink-active","false"))},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&ae(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&ae(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"data-p-ink","true"),this.renderer.setAttribute(e,"data-p-ink-active","false"),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,ji(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=S({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[B([Mo]),A]})}return t})(),Zc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=M({type:t});static \u0275inj=O({})}return t})();var Po=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var As=["content"],Ts=["loadingicon"],Fs=["icon"],_s=["*"],Uo=(t,o)=>({class:t,pt:o});function Ls(t,o){t&1&&pi(0)}function Is(t,o){if(t&1&&tt(0,"span",7),t&2){let e=oe(3);G(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon))),N("pBind",e.ptm("loadingIcon")),ce("aria-hidden",!0)}}function Os(t,o){if(t&1&&(Re(),tt(0,"svg",8)),t&2){let e=oe(3);G(e.cn(e.cx("loadingIcon"),e.cx("spinnerIcon"))),N("pBind",e.ptm("loadingIcon"))("spin",!0),ce("aria-hidden",!0)}}function Ms(t,o){if(t&1&&(Ot(0),Ie(1,Is,1,4,"span",3)(2,Os,1,5,"svg",6),Mt()),t&2){let e=oe(2);Y(),N("ngIf",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon)),Y(),N("ngIf",!(e.loadingIcon||e.buttonProps!=null&&e.buttonProps.loadingIcon))}}function Ns(t,o){}function Ps(t,o){if(t&1&&Ie(0,Ns,0,0,"ng-template",9),t&2){let e=oe(2);N("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function xs(t,o){if(t&1&&(Ot(0),Ie(1,Ms,3,2,"ng-container",2)(2,Ps,1,1,null,5),Mt()),t&2){let e=oe();Y(),N("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),Y(),N("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",hn(3,Uo,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function Rs(t,o){if(t&1&&tt(0,"span",7),t&2){let e=oe(2);G(e.cn(e.cx("icon"),e.icon||(e.buttonProps==null?null:e.buttonProps.icon))),N("pBind",e.ptm("icon")),ce("data-p",e.dataIconP)}}function ks(t,o){}function Bs(t,o){if(t&1&&Ie(0,ks,0,0,"ng-template",9),t&2){let e=oe(2);N("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function $s(t,o){if(t&1&&(Ot(0),Ie(1,Rs,1,4,"span",3)(2,Bs,1,1,null,5),Mt()),t&2){let e=oe();Y(),N("ngIf",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!e.iconTemplate&&!e._iconTemplate),Y(),N("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",hn(3,Uo,e.cx("icon"),e.ptm("icon")))}}function Hs(t,o){if(t&1&&(dn(0,"span",7),Pt(1),cn()),t&2){let e=oe();G(e.cx("label")),N("pBind",e.ptm("label")),ce("aria-hidden",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!(e.label||e.buttonProps!=null&&e.buttonProps.label))("data-p",e.dataLabelP),Y(),xt(e.label||(e.buttonProps==null?null:e.buttonProps.label))}}function Us(t,o){if(t&1&&tt(0,"p-badge",10),t&2){let e=oe();N("value",e.badge||(e.buttonProps==null?null:e.buttonProps.badge))("severity",e.badgeSeverity||(e.buttonProps==null?null:e.buttonProps.badgeSeverity))("pt",e.ptm("pcBadge"))("unstyled",e.unstyled())}}var Vs={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!t.label&&!t.buttonProps?.label&&!t.badge,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label,"p-button-icon-top":(t.iconPos==="top"||t.buttonProps?.iconPos==="top")&&t.label||t.buttonProps?.label,"p-button-icon-bottom":(t.iconPos==="bottom"||t.buttonProps?.iconPos==="bottom")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.cx("icon")).filter(([,o])=>!!o).reduce((o,[e])=>o+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},ze=(()=>{class t extends U{name="button";style=Po;classes=Vs;static \u0275fac=(()=>{let e;return function(i){return(e||(e=D(t)))(i||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var xo=new L("BUTTON_INSTANCE"),Ro=new L("BUTTON_DIRECTIVE_INSTANCE"),ko=new L("BUTTON_LABEL_INSTANCE"),Bo=new L("BUTTON_ICON_INSTANCE"),Ae={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},$o=(()=>{class t extends P{ptButtonLabel=g();pButtonLabelPT=g();pButtonLabelUnstyled=g();$pcButtonLabel=h(ko,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(_,{self:!0});constructor(){super(),F(()=>{let e=this.ptButtonLabel()||this.pButtonLabelPT();e&&this.directivePT.set(e)}),F(()=>{this.pButtonLabelUnstyled()&&this.directiveUnstyled.set(this.pButtonLabelUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=S({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,i){n&2&&Nt("p-button-label",!i.$unstyled()&&!0)},inputs:{ptButtonLabel:[1,"ptButtonLabel"],pButtonLabelPT:[1,"pButtonLabelPT"],pButtonLabelUnstyled:[1,"pButtonLabelUnstyled"]},features:[B([ze,{provide:ko,useExisting:t},{provide:J,useExisting:t}]),ie([_]),A]})}return t})(),Ho=(()=>{class t extends P{ptButtonIcon=g();pButtonIconPT=g();pButtonUnstyled=g();$pcButtonIcon=h(Bo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(_,{self:!0});constructor(){super(),F(()=>{let e=this.ptButtonIcon()||this.pButtonIconPT();e&&this.directivePT.set(e)}),F(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=S({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,i){n&2&&Nt("p-button-icon",!i.$unstyled()&&!0)},inputs:{ptButtonIcon:[1,"ptButtonIcon"],pButtonIconPT:[1,"pButtonIconPT"],pButtonUnstyled:[1,"pButtonUnstyled"]},features:[B([ze,{provide:Bo,useExisting:t},{provide:J,useExisting:t}]),ie([_]),A]})}return t})(),Cp=(()=>{class t extends P{$pcButtonDirective=h(Ro,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(_,{self:!0});_componentStyle=h(ze);ptButtonDirective=g();pButtonPT=g();pButtonUnstyled=g();hostName="";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}constructor(){super(),F(()=>{let e=this.ptButtonDirective()||this.pButtonPT();e&&this.directivePT.set(e)}),F(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())}),F(()=>{let e=this.$unstyled();this.initialized&&e&&this.setStyleClass()})}text=!1;plain=!1;raised=!1;size;outlined=!1;rounded=!1;iconPos="left";loadingIcon;fluid=g(void 0,{transform:T});iconSignal=gn(Ho);labelSignal=gn($o);isIconOnly=q(()=>!!(!this.labelSignal()&&this.iconSignal()));_label;_icon;_loading=!1;_severity;_buttonProps;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(Ae);pcFluid=h(Vn,{optional:!0,host:!0,skipSelf:!0});isTextButton=q(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}get icon(){return this._icon}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;onAfterViewInit(){!this.$unstyled()&&se(this.htmlElement,this.getStyleClass().join(" ")),me(this.platformId)&&(this.createIcon(),this.createLabel(),this.initialized=!0)}getStyleClass(){let e=[Ae.button,Ae.component];return this.icon&&!this.label&&he(this.htmlElement.textContent)&&e.push(Ae.iconOnly),this.loading&&(e.push(Ae.disabled,Ae.loading),!this.icon&&this.label&&e.push(Ae.labelOnly),this.icon&&!this.label&&!he(this.htmlElement.textContent)&&e.push(Ae.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),this.$unstyled()?[]:e}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(i=>e.some(r=>i===`p-button-${r}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!$e(this.htmlElement,'[data-pc-section="buttonlabel"]')&&this.label){let n=Be("span",{class:this.cx("label"),"p-bind":this.ptm("buttonlabel"),"aria-hidden":this.icon&&!this.label?"true":null});n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!$e(this.htmlElement,'[data-pc-section="buttonicon"]')&&(this.icon||this.loading)){let n=this.label&&!this.$unstyled()?"p-button-icon-"+this.iconPos:null,i=!this.$unstyled()&&this.getIconClass(),r=Be("span",{class:this.cn(this.cx("icon"),n,i),"aria-hidden":"true","p-bind":this.ptm("buttonicon")});!this.loadingIcon&&this.loading&&(r.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(r,this.htmlElement.firstChild)}}updateLabel(){let e=$e(this.htmlElement,'[data-pc-section="buttonlabel"]');if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=$e(this.htmlElement,'[data-pc-section="buttonicon"]'),n=$e(this.htmlElement,'[data-pc-section="buttonlabel"]');this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e&&!this.$unstyled()?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}onDestroy(){this.initialized=!1}static \u0275fac=function(n){return new(n||t)};static \u0275dir=S({type:t,selectors:[["","pButton",""]],contentQueries:function(n,i,r){n&1&&mi(r,i.iconSignal,Ho,5)(r,i.labelSignal,$o,5),n&2&&bi(2)},hostVars:4,hostBindings:function(n,i){n&2&&Nt("p-button-icon-only",!i.$unstyled()&&i.isIconOnly())("p-button-text",!i.$unstyled()&&i.isTextButton())},inputs:{ptButtonDirective:[1,"ptButtonDirective"],pButtonPT:[1,"pButtonPT"],pButtonUnstyled:[1,"pButtonUnstyled"],hostName:"hostName",text:[2,"text","text",T],plain:[2,"plain","plain",T],raised:[2,"raised","raised",T],size:"size",outlined:[2,"outlined","outlined",T],rounded:[2,"rounded","rounded",T],iconPos:"iconPos",loadingIcon:"loadingIcon",fluid:[1,"fluid"],label:"label",icon:"icon",loading:"loading",buttonProps:"buttonProps",severity:"severity"},features:[B([ze,{provide:Ro,useExisting:t},{provide:J,useExisting:t}]),ie([_]),A]})}return t})(),js=(()=>{class t extends P{componentName="Button";hostName="";$pcButton=h(xo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(_,{self:!0});_componentStyle=h(ze);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=g(void 0,{transform:T});onClick=new Ft;onFocus=new Ft;onBlur=new Ft;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=h(Vn,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=D(t)))(i||t)}})();static \u0275cmp=W({type:t,selectors:[["p-button"]],contentQueries:function(n,i,r){if(n&1&&gi(r,As,5)(r,Ts,5)(r,Fs,5)(r,io,4),n&2){let s;it(s=ot())&&(i.contentTemplate=s.first),it(s=ot())&&(i.loadingIconTemplate=s.first),it(s=ot())&&(i.iconTemplate=s.first),it(s=ot())&&(i.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",T],raised:[2,"raised","raised",T],rounded:[2,"rounded","rounded",T],text:[2,"text","text",T],plain:[2,"plain","plain",T],outlined:[2,"outlined","outlined",T],link:[2,"link","link",T],tabindex:[2,"tabindex","tabindex",mn],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",T],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",T],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[B([ze,{provide:xo,useExisting:t},{provide:J,useExisting:t}]),ie([_]),A],ngContentSelectors:_s,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(n,i){n&1&&(pe(),dn(0,"button",0),hi("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),fe(1),Ie(2,Ls,1,0,"ng-container",1)(3,xs,3,6,"ng-container",2)(4,$s,3,6,"ng-container",2)(5,Hs,2,6,"span",3)(6,Us,1,4,"p-badge",4),cn()),n&2&&(G(i.cn(i.cx("root"),i.styleClass,i.buttonProps==null?null:i.buttonProps.styleClass)),N("ngStyle",i.style||(i.buttonProps==null?null:i.buttonProps.style))("disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("pAutoFocus",i.autofocus||(i.buttonProps==null?null:i.buttonProps.autofocus))("pBind",i.ptm("root")),ce("type",i.type||(i.buttonProps==null?null:i.buttonProps.type))("aria-label",i.ariaLabel||(i.buttonProps==null?null:i.buttonProps.ariaLabel))("tabindex",i.tabindex||(i.buttonProps==null?null:i.buttonProps.tabindex))("data-p",i.dataP)("data-p-disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("data-p-severity",i.severity||(i.buttonProps==null?null:i.buttonProps.severity)),Y(2),N("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),Y(),N("ngIf",i.loading||(i.buttonProps==null?null:i.buttonProps.loading)),Y(),N("ngIf",!(i.loading||i.buttonProps!=null&&i.buttonProps.loading)),Y(),N("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.label||(i.buttonProps==null?null:i.buttonProps.label))),Y(),N("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.badge||(i.buttonProps==null?null:i.buttonProps.badge))))},dependencies:[ee,Cn,Sn,En,No,Eo,Io,To,Un,we,_],encapsulation:2,changeDetection:0})}return t})(),Ep=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=M({type:t});static \u0275inj=O({imports:[ee,js,we,we]})}return t})();var dt=class{},jo=(()=>{class t{handle(e){return e.key}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),We=class{},zo=(()=>{class t extends We{compile(e,n){return e}compileTranslations(e,n){return e}static \u0275fac=(()=>{let e;return function(i){return(e||(e=D(t)))(i||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Ge=class{},Wo=(()=>{class t extends Ge{getTranslation(e){return Xe({})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=D(t)))(i||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();function qt(t,o){if(t===o)return!0;if(t===null||o===null)return!1;if(t!==t&&o!==o)return!0;let e=typeof t,n=typeof o,i;if(e==n&&e=="object")if(Array.isArray(t)){if(!Array.isArray(o))return!1;if((i=t.length)==o.length){for(let r=0;r<i;r++)if(!qt(t[r],o[r]))return!1;return!0}}else{if(Array.isArray(o))return!1;if(ve(t)&&ve(o)){let r=Object.create(null);for(let s in t){if(!qt(t[s],o[s]))return!1;r[s]=!0}for(let s in o)if(!(s in r)&&typeof o[s]<"u")return!1;return!0}}return!1}function Te(t){return typeof t<"u"&&t!==null}function Vo(t){return t!==void 0}function ve(t){return ut(t)&&!Ne(t)&&t!==null}function ut(t){return typeof t=="object"&&t!==null}function Ne(t){return Array.isArray(t)}function Xt(t){return typeof t=="string"}function zs(t){return typeof t=="function"}function Qt(t){if(Ne(t))return t.map(o=>Qt(o));if(ve(t)){let o={};return Object.keys(t).forEach(e=>{o[e]=Qt(t[e])}),o}else return t}function Kn(t,o){if(!ut(t))return Qt(o);let e=Qt(t);return ut(e)&&ut(o)&&Object.keys(o).forEach(n=>{ve(o[n])?n in t?e[n]=Kn(t[n],o[n]):Object.assign(e,{[n]:o[n]}):Object.assign(e,{[n]:o[n]})}),e}function Go(t,o){let e=o.split(".");o="";do{o+=e.shift();let n=!e.length;if(Te(t)){if(ve(t)&&Vo(t[o])&&(ve(t[o])||Ne(t[o])||n)){t=t[o],o="";continue}if(Ne(t)){let i=parseInt(o,10);if(Vo(t[i])&&(ve(t[i])||Ne(t[i])||n)){t=t[i],o="";continue}}}if(n){t=void 0;continue}o+="."}while(e.length);return t}function Ws(t,o,e){return Kn(t,Gs(o,e))}function Gs(t,o){return t.split(".").reduceRight((e,n)=>({[n]:e}),o)}var Ke=class{},Ko=(()=>{class t extends Ke{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(e,n){if(Xt(e))return this.interpolateString(e,n);if(zs(e))return this.interpolateFunction(e,n)}interpolateFunction(e,n){return e(n)}interpolateString(e,n){return n?e.replace(this.templateMatcher,(i,r)=>{let s=this.getInterpolationReplacement(n,r);return s!==void 0?s:i}):e}getInterpolationReplacement(e,n){return this.formatValue(Go(e,n))}formatValue(e){if(Xt(e))return e;if(typeof e=="number"||typeof e=="boolean")return e.toString();if(e===null)return"null";if(Ne(e))return e.join(", ");if(ut(e))return typeof e.toString=="function"&&e.toString!==Object.prototype.toString?e.toString():JSON.stringify(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=D(t)))(i||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),jn=(()=>{class t{_onTranslationChange=new Z;_onLangChange=new Z;_onFallbackLangChange=new Z;fallbackLang=null;currentLang;translations={};languages=[];getTranslations(e){return this.translations[e]}setTranslations(e,n,i){this.translations[e]=i&&this.hasTranslationFor(e)?Kn(this.translations[e],n):n,this.addLanguages([e]),this._onTranslationChange.next({lang:e,translations:this.getTranslations(e)})}getLanguages(){return this.languages}getCurrentLang(){return this.currentLang}getFallbackLang(){return this.fallbackLang}setFallbackLang(e,n=!0){this.fallbackLang=e,n&&this._onFallbackLangChange.next({lang:e,translations:this.translations[e]})}setCurrentLang(e,n=!0){this.currentLang=e,n&&this._onLangChange.next({lang:e,translations:this.translations[e]})}get onTranslationChange(){return this._onTranslationChange.asObservable()}get onLangChange(){return this._onLangChange.asObservable()}get onFallbackLangChange(){return this._onFallbackLangChange.asObservable()}addLanguages(e){this.languages=Array.from(new Set([...this.languages,...e]))}hasTranslationFor(e){return typeof this.translations[e]<"u"}deleteTranslations(e){delete this.translations[e]}getTranslation(e){let n=this.getValue(this.currentLang,e);return n===void 0&&this.fallbackLang!=null&&this.fallbackLang!==this.currentLang&&(n=this.getValue(this.fallbackLang,e)),n}getValue(e,n){return Go(this.getTranslations(e),n)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),zn=new L("TRANSLATE_CONFIG"),lt=t=>Le(t)?t:Xe(t);var Wn=(()=>{class t{loadingTranslations;pending=!1;_translationRequests={};lastUseLanguage=null;currentLoader=h(Ge);compiler=h(We);parser=h(Ke);missingTranslationHandler=h(dt);store=h(jn);extend=!1;get onTranslationChange(){return this.store.onTranslationChange}get onLangChange(){return this.store.onLangChange}get onFallbackLangChange(){return this.store.onFallbackLangChange}get onDefaultLangChange(){return this.store.onFallbackLangChange}constructor(){let e=m({extend:!1,fallbackLang:null},h(zn,{optional:!0}));e.lang&&this.use(e.lang),e.fallbackLang&&this.setFallbackLang(e.fallbackLang),e.extend&&(this.extend=!0)}setFallbackLang(e){this.getFallbackLang()||this.store.setFallbackLang(e,!1);let n=this.loadOrExtendLanguage(e);return Le(n)?(n.pipe(Qe(1)).subscribe({next:()=>{this.store.setFallbackLang(e)},error:()=>{}}),n):(this.store.setFallbackLang(e),Xe(this.store.getTranslations(e)))}use(e){this.lastUseLanguage=e,this.getCurrentLang()||this.store.setCurrentLang(e,!1);let n=this.loadOrExtendLanguage(e);return Le(n)?(n.pipe(Qe(1)).subscribe({next:()=>{this.changeLang(e)},error:()=>{}}),n):(this.changeLang(e),Xe(this.store.getTranslations(e)))}loadOrExtendLanguage(e){if(!this.store.hasTranslationFor(e)||this.extend)return this._translationRequests[e]=this._translationRequests[e]||this.loadAndCompileTranslations(e),this._translationRequests[e]}changeLang(e){e===this.lastUseLanguage&&this.store.setCurrentLang(e)}getCurrentLang(){return this.store.getCurrentLang()}loadAndCompileTranslations(e){this.pending=!0;let n=this.currentLoader.getTranslation(e).pipe(sn(1),Qe(1));return this.loadingTranslations=n.pipe(nn(i=>this.compiler.compileTranslations(i,e)),sn(1),Qe(1)),this.loadingTranslations.subscribe({next:i=>{this.store.setTranslations(e,i,this.extend),this.pending=!1},error:i=>{this.pending=!1}}),n}setTranslation(e,n,i=!1){let r=this.compiler.compileTranslations(n,e);this.store.setTranslations(e,r,i||this.extend)}getLangs(){return this.store.getLanguages()}addLangs(e){this.store.addLanguages(e)}getParsedResultForKey(e,n){let i=this.getTextToInterpolate(e);if(Te(i))return this.runInterpolation(i,n);let r=this.missingTranslationHandler.handle(m({key:e,translateService:this},n!==void 0&&{interpolateParams:n}));return r!==void 0?r:e}getFallbackLang(){return this.store.getFallbackLang()}getTextToInterpolate(e){return this.store.getTranslation(e)}runInterpolation(e,n){if(Te(e))return Ne(e)?this.runInterpolationOnArray(e,n):ve(e)?this.runInterpolationOnDict(e,n):this.parser.interpolate(e,n)}runInterpolationOnArray(e,n){return e.map(i=>this.runInterpolation(i,n))}runInterpolationOnDict(e,n){let i={};for(let r in e){let s=this.runInterpolation(e[r],n);s!==void 0&&(i[r]=s)}return i}getParsedResult(e,n){return e instanceof Array?this.getParsedResultForArray(e,n):this.getParsedResultForKey(e,n)}getParsedResultForArray(e,n){let i={},r=!1;for(let a of e)i[a]=this.getParsedResultForKey(a,n),r=r||Le(i[a]);if(!r)return i;let s=e.map(a=>lt(i[a]));return ti(s).pipe(nn(a=>{let l={};return a.forEach((u,d)=>{l[e[d]]=u}),l}))}get(e,n){if(!Te(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return this.pending?this.loadingTranslations.pipe(ni(()=>lt(this.getParsedResult(e,n)))):lt(this.getParsedResult(e,n))}getStreamOnTranslationChange(e,n){if(!Te(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return on(rn(()=>this.get(e,n)),this.onTranslationChange.pipe(an(()=>{let i=this.getParsedResult(e,n);return lt(i)})))}stream(e,n){if(!Te(e)||!e.length)throw new Error('Parameter "key" required');return on(rn(()=>this.get(e,n)),this.onLangChange.pipe(an(()=>{let i=this.getParsedResult(e,n);return lt(i)})))}instant(e,n){if(!Te(e)||e.length===0)throw new Error('Parameter "key" is required and cannot be empty');let i=this.getParsedResult(e,n);return Le(i)?Array.isArray(e)?e.reduce((r,s)=>(r[s]=s,r),{}):e:i}set(e,n,i=this.getCurrentLang()){this.store.setTranslations(i,Ws(this.store.getTranslations(i),e,Xt(n)?this.compiler.compile(n,i):this.compiler.compileTranslations(n,i)),!1)}reloadLang(e){return this.resetLang(e),this.loadAndCompileTranslations(e)}resetLang(e){delete this._translationRequests[e],this.store.deleteTranslations(e)}static getBrowserLang(){if(typeof window>"u"||!window.navigator)return;let e=this.getBrowserCultureLang();return e?e.split(/[-_]/)[0]:void 0}static getBrowserCultureLang(){if(!(typeof window>"u"||typeof window.navigator>"u"))return window.navigator.languages?window.navigator.languages[0]:window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}getBrowserLang(){return t.getBrowserLang()}getBrowserCultureLang(){return t.getBrowserCultureLang()}get defaultLang(){return this.getFallbackLang()}get currentLang(){return this.store.getCurrentLang()}get langs(){return this.store.getLanguages()}setDefaultLang(e){return this.setFallbackLang(e)}getDefaultLang(){return this.getFallbackLang()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var Np=(()=>{class t{translate=h(Wn);_ref=h(Oe);value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onFallbackLangChange;updateValue(e,n,i){let r=s=>{this.value=s!==void 0?s:e,this.lastKey=e,this._ref.markForCheck()};if(i){let s=this.translate.getParsedResult(e,n);Le(s)?s.subscribe(r):r(s)}this.translate.get(e,n).subscribe(r)}transform(e,...n){if(!e||!e.length)return e;if(qt(e,this.lastKey)&&qt(n,this.lastParams))return this.value;let i;if(Te(n[0])&&n.length)if(Xt(n[0])&&n[0].length){let r=n[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g,'"$2":').replace(/:(\s)?(')(.*?)(')/g,':"$3"');try{i=JSON.parse(r)}catch(s){throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${n[0]}`)}}else ve(n[0])&&(i=n[0]);return this.lastKey=e,this.lastParams=n,this.updateValue(e,i),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(r=>{(this.lastKey&&r.lang===this.translate.getCurrentLang()||r.lang===this.translate.getFallbackLang())&&(this.lastKey=null,this.updateValue(e,i,r.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(r=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,i,r.translations))})),this.onFallbackLangChange||(this.onFallbackLangChange=this.translate.onFallbackLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,i))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onFallbackLangChange<"u"&&(this.onFallbackLangChange.unsubscribe(),this.onFallbackLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(n){return new(n||t)};static \u0275pipe=It({name:"translate",type:t,pure:!1});static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();function Yo(t){return{provide:Ge,useClass:t}}function Zo(t){return{provide:We,useClass:t}}function qo(t){return{provide:Ke,useClass:t}}function Xo(t){return{provide:dt,useClass:t}}function Pp(t={}){return Gn(m({compiler:Zo(zo),parser:qo(Ko),loader:Yo(Wo),missingTranslationHandler:Xo(jo)},t),!0)}function Gn(t={},o){let e=[];t.loader&&e.push(t.loader),t.compiler&&e.push(t.compiler),t.parser&&e.push(t.parser),t.missingTranslationHandler&&e.push(t.missingTranslationHandler),o&&e.push(jn),(t.useDefaultLang||t.defaultLanguage)&&(console.warn("The `useDefaultLang` and `defaultLanguage` options are deprecated. Please use `fallbackLang` instead."),t.useDefaultLang===!0&&t.defaultLanguage&&(t.fallbackLang=t.defaultLanguage));let n={fallbackLang:t.fallbackLang??null,lang:t.lang,extend:t.extend??!1};return e.push({provide:zn,useValue:n}),e.push({provide:Wn,useClass:Wn,deps:[jn,Ge,We,Ke,dt,zn]}),e}var xp=(()=>{class t{static forRoot(e={}){return{ngModule:t,providers:[...Gn(m({compiler:Zo(zo),parser:qo(Ko),loader:Yo(Wo),missingTranslationHandler:Xo(jo)},e),!0)]}}static forChild(e={}){return{ngModule:t,providers:[...Gn(e,e.isolate??!1)]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=M({type:t});static \u0275inj=O({})}return t})();function Ks(){let t=[],o=(r,s)=>{let a=t.length>0?t[t.length-1]:{key:r,value:s},l=a.value+(a.key===r?0:s)+2;return t.push({key:r,value:l}),l},e=r=>{t=t.filter(s=>s.value!==r)},n=()=>t.length>0?t[t.length-1].value:0,i=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:i,set:(r,s,a)=>{s&&(s.style.zIndex=String(o(r,a)))},clear:r=>{r&&(e(i(r)),r.style.zIndex="")},getCurrent:()=>n(),generateZIndex:o,revertZIndex:e}}var Bp=Ks();var Yp=(()=>{class t extends P{pFocusTrapDisabled=!1;platformId=h(De);document=h(K);firstHiddenFocusableElement;lastHiddenFocusableElement;onInit(){me(this.platformId)&&!this.pFocusTrapDisabled&&!this.firstHiddenFocusableElement&&!this.lastHiddenFocusableElement&&this.createHiddenFocusableElements()}onChanges(e){e.pFocusTrapDisabled&&me(this.platformId)&&(e.pFocusTrapDisabled.currentValue?this.removeHiddenFocusableElements():this.createHiddenFocusableElements())}removeHiddenFocusableElements(){this.firstHiddenFocusableElement&&this.firstHiddenFocusableElement.parentNode&&this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement),this.lastHiddenFocusableElement&&this.lastHiddenFocusableElement.parentNode&&this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement)}getComputedSelector(e){return`:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${e??""}`}createHiddenFocusableElements(){let n=i=>Be("span",{class:"p-hidden-accessible p-hidden-focusable",tabindex:"0",role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:i?.bind(this)});this.firstHiddenFocusableElement=n(this.onFirstHiddenElementFocus),this.lastHiddenFocusableElement=n(this.onLastHiddenElementFocus),this.firstHiddenFocusableElement.setAttribute("data-pc-section","firstfocusableelement"),this.lastHiddenFocusableElement.setAttribute("data-pc-section","lastfocusableelement"),this.el.nativeElement.prepend(this.firstHiddenFocusableElement),this.el.nativeElement.append(this.lastHiddenFocusableElement)}onFirstHiddenElementFocus(e){let{currentTarget:n,relatedTarget:i}=e,r=i===this.lastHiddenFocusableElement||!this.el.nativeElement?.contains(i)?Bi(n.parentElement,":not(.p-hidden-focusable)"):this.lastHiddenFocusableElement;Fn(r)}onLastHiddenElementFocus(e){let{currentTarget:n,relatedTarget:i}=e,r=i===this.firstHiddenFocusableElement||!this.el.nativeElement?.contains(i)?$i(n.parentElement,":not(.p-hidden-focusable)"):this.firstHiddenFocusableElement;Fn(r)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=D(t)))(i||t)}})();static \u0275dir=S({type:t,selectors:[["","pFocusTrap",""]],inputs:{pFocusTrapDisabled:[2,"pFocusTrapDisabled","pFocusTrapDisabled",T]},features:[A]})}return t})(),Zp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=M({type:t});static \u0275inj=O({})}return t})();var Ys=Object.defineProperty,Qo=Object.getOwnPropertySymbols,Zs=Object.prototype.hasOwnProperty,qs=Object.prototype.propertyIsEnumerable,Jo=(t,o,e)=>o in t?Ys(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,er=(t,o)=>{for(var e in o||(o={}))Zs.call(o,e)&&Jo(t,e,o[e]);if(Qo)for(var e of Qo(o))qs.call(o,e)&&Jo(t,e,o[e]);return t},Xs=(t,o,e)=>new Promise((n,i)=>{var r=l=>{try{a(e.next(l))}catch(u){i(u)}},s=l=>{try{a(e.throw(l))}catch(u){i(u)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,s);a((e=e.apply(t,o)).next())}),Jt="animation",ct="transition";function Qs(t){return t?t.disabled||!!(t.safe&&Vi()):!1}function Js(t,o){return t?er(er({},t),Object.entries(o).reduce((e,[n,i])=>{var r;return e[n]=(r=t[n])!=null?r:i,e},{})):o}function ea(t){let{name:o,enterClass:e,leaveClass:n}=t||{};return{enter:{from:e?.from||`${o}-enter-from`,to:e?.to||`${o}-enter-to`,active:e?.active||`${o}-enter-active`},leave:{from:n?.from||`${o}-leave-from`,to:n?.to||`${o}-leave-to`,active:n?.active||`${o}-leave-active`}}}function ta(t){return{enter:{onBefore:t?.onBeforeEnter,onStart:t?.onEnter,onAfter:t?.onAfterEnter,onCancelled:t?.onEnterCancelled},leave:{onBefore:t?.onBeforeLeave,onStart:t?.onLeave,onAfter:t?.onAfterLeave,onCancelled:t?.onLeaveCancelled}}}function na(t,o){let e=window.getComputedStyle(t),n=p=>{let b=e[`${p}Delay`],y=e[`${p}Duration`];return[b.split(", ").map(Pn),y.split(", ").map(Pn)]},[i,r]=n(ct),[s,a]=n(Jt),l=Math.max(...r.map((p,b)=>p+i[b])),u=Math.max(...a.map((p,b)=>p+s[b])),d,c=0,f=0;return o===ct?l>0&&(d=ct,c=l,f=r.length):o===Jt?u>0&&(d=Jt,c=u,f=a.length):(c=Math.max(l,u),d=c>0?l>u?ct:Jt:void 0,f=d?d===ct?r.length:a.length:0),{type:d,timeout:c,count:f}}function ia(t,o){return typeof t=="number"?t:typeof t=="object"&&t[o]!=null?t[o]:null}function oa(t,o=!0,e=!1){if(!o&&!e)return;let n=Pi(t);o&&In(t,"--pui-motion-height",n.height+"px"),e&&In(t,"--pui-motion-width",n.width+"px")}var ra={name:"p",safe:!0,disabled:!1,enter:!0,leave:!0,autoHeight:!0,autoWidth:!1};function Yn(t,o){if(!t)throw new Error("Element is required.");let e={},n=!1,i={},r=null,s={},a=d=>{if(Object.assign(e,Js(d,ra)),!e.enter&&!e.leave)throw new Error("Enter or leave must be true.");s=ta(e),n=Qs(e),i=ea(e),r=null},l=d=>Xs(null,null,function*(){r?.();let{onBefore:c,onStart:f,onAfter:p,onCancelled:b}=s[d]||{},y={element:t};if(n){c?.(y),f?.(y),p?.(y);return}let{from:w,active:I,to:x}=i[d]||{};return oa(t,e.autoHeight,e.autoWidth),c?.(y),se(t,w),se(t,I),t.offsetHeight,ae(t,w),se(t,x),f?.(y),new Promise(z=>{let Pe=ia(e.duration,d),Fe=()=>{ae(t,[x,I]),r=null},xe=()=>{Fe(),p?.(y),z()};r=()=>{Fe(),b?.(y),z()},aa(t,e.type,Pe,xe)})});a(o);let u={enter:()=>e.enter?l("enter"):Promise.resolve(),leave:()=>e.leave?l("leave"):Promise.resolve(),cancel:()=>{r?.(),r=null},update:(d,c)=>{if(!d)throw new Error("Element is required.");t=d,u.cancel(),a(c)}};return e.appear&&u.enter(),u}var sa=0;function aa(t,o,e,n){let i=t._motionEndId=++sa,r=()=>{i===t._motionEndId&&n()};if(e!=null)return setTimeout(r,e);let{type:s,timeout:a,count:l}=na(t,o);if(!s){n();return}let u=s+"end",d=0,c=()=>{t.removeEventListener(u,f,!0),r()},f=p=>{p.target===t&&++d>=l&&c()};t.addEventListener(u,f,{capture:!0,once:!0}),setTimeout(()=>{d<l&&c()},a+1)}var la=["*"];function ua(t,o){t&1&&fe(0)}var en=new WeakMap;function pt(t,o){if(t)switch(en.has(t)||en.set(t,{display:t.style.display,visibility:t.style.visibility,maxHeight:t.style.maxHeight}),o){case"display":t.style.display="none";break;case"visibility":t.style.visibility="hidden",t.style.maxHeight="0";break}}function tn(t,o){if(!t)return;let e=en.get(t)??t.style;switch(o){case"display":t.style.display=e?.display||"";break;case"visibility":t.style.visibility=e?.visibility||"",t.style.maxHeight=e?.maxHeight||"";break}en.delete(t)}var da=`
    .p-motion {
        display: block;
    }
`,ca={root:"p-motion"},Zn=(()=>{class t extends U{name="motion";style=da;classes=ca;static \u0275fac=(()=>{let e;return function(i){return(e||(e=D(t)))(i||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var tr=new L("MOTION_INSTANCE"),pa=(()=>{class t extends P{$pcMotion=h(tr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(_,{self:!0});onAfterViewChecked(){let n=this.options()?.root||{};this.bindDirectiveInstance.setAttrs(m(m({},this.ptms(["host","root"])),n))}_componentStyle=h(Zn);visible=g(!1);mountOnEnter=g(!0);unmountOnLeave=g(!0);name=g(void 0);type=g(void 0);safe=g(void 0);disabled=g(!1);appear=g(!1);enter=g(!0);leave=g(!0);duration=g(void 0);hideStrategy=g("display");enterFromClass=g(void 0);enterToClass=g(void 0);enterActiveClass=g(void 0);leaveFromClass=g(void 0);leaveToClass=g(void 0);leaveActiveClass=g(void 0);options=g({});onBeforeEnter=V();onEnter=V();onAfterEnter=V();onEnterCancelled=V();onBeforeLeave=V();onLeave=V();onAfterLeave=V();onLeaveCancelled=V();motionOptions=q(()=>{let e=this.options();return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;rendered=R(!1);handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),F(()=>{let e=this.hideStrategy();this.isInitialMount?(pt(this.$el,e),this.rendered.set(this.visible()&&this.mountOnEnter()||!this.mountOnEnter())):this.visible()&&!this.rendered()&&(pt(this.$el,e),this.rendered.set(!0))}),F(()=>{this.motion||(this.motion=Yn(this.$el,this.motionOptions()))}),bn(async()=>{if(!this.$el)return;let e=this.isInitialMount&&this.visible()&&this.appear(),n=this.hideStrategy();this.visible()?(await Ut(),tn(this.$el,n),(e||!this.isInitialMount)&&this.motion?.enter()):this.isInitialMount||(await Ut(),this.motion?.leave()?.then(async()=>{this.$el&&!this.cancelled&&!this.visible()&&(pt(this.$el,n),this.unmountOnLeave()&&(await Ut(),this.cancelled||this.rendered.set(!1)))})),this.isInitialMount=!1})}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,tn(this.$el,this.hideStrategy()),this.$el?.remove(),this.isInitialMount=!0}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=W({type:t,selectors:[["p-motion"]],hostVars:2,hostBindings:function(n,i){n&2&&G(i.cx("root"))},inputs:{visible:[1,"visible"],mountOnEnter:[1,"mountOnEnter"],unmountOnLeave:[1,"unmountOnLeave"],name:[1,"name"],type:[1,"type"],safe:[1,"safe"],disabled:[1,"disabled"],appear:[1,"appear"],enter:[1,"enter"],leave:[1,"leave"],duration:[1,"duration"],hideStrategy:[1,"hideStrategy"],enterFromClass:[1,"enterFromClass"],enterToClass:[1,"enterToClass"],enterActiveClass:[1,"enterActiveClass"],leaveFromClass:[1,"leaveFromClass"],leaveToClass:[1,"leaveToClass"],leaveActiveClass:[1,"leaveActiveClass"],options:[1,"options"]},outputs:{onBeforeEnter:"onBeforeEnter",onEnter:"onEnter",onAfterEnter:"onAfterEnter",onEnterCancelled:"onEnterCancelled",onBeforeLeave:"onBeforeLeave",onLeave:"onLeave",onAfterLeave:"onAfterLeave",onLeaveCancelled:"onLeaveCancelled"},features:[B([Zn,{provide:tr,useExisting:t},{provide:J,useExisting:t}]),ie([_]),A],ngContentSelectors:la,decls:1,vars:1,template:function(n,i){n&1&&(pe(),di(0,ua,1,0)),n&2&&ci(i.rendered()?0:-1)},dependencies:[ee,Kt],encapsulation:2})}return t})(),nr=new L("MOTION_DIRECTIVE_INSTANCE"),pf=(()=>{class t extends P{$pcMotionDirective=h(nr,{optional:!0,skipSelf:!0})??void 0;visible=g(!1,{alias:"pMotion"});name=g(void 0,{alias:"pMotionName"});type=g(void 0,{alias:"pMotionType"});safe=g(void 0,{alias:"pMotionSafe"});disabled=g(!1,{alias:"pMotionDisabled"});appear=g(!1,{alias:"pMotionAppear"});enter=g(!0,{alias:"pMotionEnter"});leave=g(!0,{alias:"pMotionLeave"});duration=g(void 0,{alias:"pMotionDuration"});hideStrategy=g("display",{alias:"pMotionHideStrategy"});enterFromClass=g(void 0,{alias:"pMotionEnterFromClass"});enterToClass=g(void 0,{alias:"pMotionEnterToClass"});enterActiveClass=g(void 0,{alias:"pMotionEnterActiveClass"});leaveFromClass=g(void 0,{alias:"pMotionLeaveFromClass"});leaveToClass=g(void 0,{alias:"pMotionLeaveToClass"});leaveActiveClass=g(void 0,{alias:"pMotionLeaveActiveClass"});options=g({},{alias:"pMotionOptions"});onBeforeEnter=V({alias:"pMotionOnBeforeEnter"});onEnter=V({alias:"pMotionOnEnter"});onAfterEnter=V({alias:"pMotionOnAfterEnter"});onEnterCancelled=V({alias:"pMotionOnEnterCancelled"});onBeforeLeave=V({alias:"pMotionOnBeforeLeave"});onLeave=V({alias:"pMotionOnLeave"});onAfterLeave=V({alias:"pMotionOnAfterLeave"});onLeaveCancelled=V({alias:"pMotionOnLeaveCancelled"});motionOptions=q(()=>{let e=this.options()??{};return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),F(()=>{this.motion||(this.motion=Yn(this.$el,this.motionOptions()))}),bn(()=>{if(!this.$el)return;let e=this.isInitialMount&&this.visible()&&this.appear(),n=this.hideStrategy();this.visible()?(tn(this.$el,n),(e||!this.isInitialMount)&&this.motion?.enter()):this.isInitialMount?pt(this.$el,n):this.motion?.leave()?.then(()=>{this.$el&&!this.cancelled&&!this.visible()&&pt(this.$el,n)}),this.isInitialMount=!1})}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,tn(this.$el,this.hideStrategy()),this.isInitialMount=!0}static \u0275fac=function(n){return new(n||t)};static \u0275dir=S({type:t,selectors:[["","pMotion",""]],inputs:{visible:[1,"pMotion","visible"],name:[1,"pMotionName","name"],type:[1,"pMotionType","type"],safe:[1,"pMotionSafe","safe"],disabled:[1,"pMotionDisabled","disabled"],appear:[1,"pMotionAppear","appear"],enter:[1,"pMotionEnter","enter"],leave:[1,"pMotionLeave","leave"],duration:[1,"pMotionDuration","duration"],hideStrategy:[1,"pMotionHideStrategy","hideStrategy"],enterFromClass:[1,"pMotionEnterFromClass","enterFromClass"],enterToClass:[1,"pMotionEnterToClass","enterToClass"],enterActiveClass:[1,"pMotionEnterActiveClass","enterActiveClass"],leaveFromClass:[1,"pMotionLeaveFromClass","leaveFromClass"],leaveToClass:[1,"pMotionLeaveToClass","leaveToClass"],leaveActiveClass:[1,"pMotionLeaveActiveClass","leaveActiveClass"],options:[1,"pMotionOptions","options"]},outputs:{onBeforeEnter:"pMotionOnBeforeEnter",onEnter:"pMotionOnEnter",onAfterEnter:"pMotionOnAfterEnter",onEnterCancelled:"pMotionOnEnterCancelled",onBeforeLeave:"pMotionOnBeforeLeave",onLeave:"pMotionOnLeave",onAfterLeave:"pMotionOnAfterLeave",onLeaveCancelled:"pMotionOnLeaveCancelled"},features:[B([Zn,{provide:nr,useExisting:t},{provide:J,useExisting:t}]),A]})}return t})(),ff=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=M({type:t});static \u0275inj=O({imports:[pa]})}return t})();export{ke as a,wi as b,Ai as c,wr as d,Ar as e,Li as f,Cn as g,En as h,Sn as i,Lr as j,ee as k,Or as l,me as m,uu as n,Ii as o,se as p,ae as q,bu as r,yu as s,vu as t,Du as u,xi as v,st as w,Br as x,Cu as y,Be as z,Eu as A,$e as B,Fn as C,Ui as D,Su as E,wu as F,zi as G,he as H,C as I,Qi as J,Ji as K,_u as L,H as M,Lu as N,at as O,Xr as P,Pu as Q,xu as R,Ru as S,io as T,we as U,ku as V,Hu as W,Wu as X,U as Y,$n as Z,bd as _,Ge as $,Wn as aa,Np as ba,Pp as ca,xp as da,J as ea,P as fa,No as ga,Zc as ha,_ as ia,Kt as ja,Vn as ka,Hn as la,Nd as ma,Pd as na,Co as oa,Eo as pa,Un as qa,To as ra,Zt as sa,kc as ta,Cp as ua,js as va,Ep as wa,Bp as xa,Yp as ya,Zp as za,pf as Aa,ff as Ba};
