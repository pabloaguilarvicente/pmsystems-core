import{c as bt,d as Pe,f as J,g as ot,h as Le}from"./chunk-CJPLD6EO.js";import{B as hn,G as bn,H as _n,I as vn,J as pe,K as yn,M as Cn,N as xn,O as In,Q as Ft,R as ut,S as wn,T as Mn,U as Sn,V as kn,a as Ji,d as en,f as tn,k as mt,m as nn,o as pn,p as mn,q as dn,r as Vt,u as le,v as ce,w as oe,y as mi,z as un}from"./chunk-BRD3VGMR.js";import{A as ji,Aa as Wi,B as qi,C as Ki,Ca as Be,D as Qi,E as ne,F as Gi,G as ve,H as Se,Ha as De,Na as Dt,Oa as Xi,Q as Ui,R as ai,Ra as Ke,S as si,Sa as Q,Ta as pi,Va as Yi,W as _t,Wa as ke,X as st,Xa as Oe,Ya as pt,Za as Ot,_a as D,b as Et,bb as on,c as be,cb as rn,db as an,e as At,f as Me,fb as sn,g as Ri,gb as ln,h as Ne,hb as cn,ib as vt,j as L,jb as Qe,k as ni,ka as Zi,l as oi,lb as Rt,m as Fi,mb as dt,n as Ni,nb as Ge,oa as lt,ob as fn,p as ri,q as Pt,qa as ct,qb as ee,r as Hi,rb as gn,s as zi,sb as te,t as $i,ta as W,v as rt,w as Lt,x as _e,xa as li,y as at,ya as ci,z as Bt}from"./chunk-4MEKSSSE.js";import{$ as h,$b as Ee,Ab as m,Ac as ii,B as bi,Bb as d,Bc as me,Cb as O,Db as $,Eb as Z,F as _i,Fb as he,Fc as Vi,Gb as fe,Hb as ae,Ib as T,Jb as we,Jc as P,Kc as de,La as gt,Ma as kt,N as vi,Nb as C,Ob as p,P as St,Pa as a,Pb as Li,Q as X,Qb as Bi,R as Ce,Rb as qe,Sb as Y,T as ie,Ta as Si,Tb as I,Ub as w,V as g,W as yi,Wa as ki,Xa as tt,Ya as q,Yb as ti,Za as Ti,Zb as Te,_ as u,_b as se,a as k,aa as z,ac as v,b as F,ba as Ci,bc as f,ca as xi,cc as B,db as M,dc as N,eb as xe,ec as Di,fa as U,fb as Ei,fc as Ue,ga as Je,gc as Ze,hb as Ie,hc as We,ib as K,ic as ge,ja as Ii,jb as S,jc as nt,ka as re,kc as Ae,la as wi,lc as Tt,mb as Ai,n as gi,na as et,ob as Pi,pb as ei,qa as j,qb as x,rc as b,sa as ze,sc as _,tb as E,tc as Oi,ub as A,uc as Fe,vb as it,wb as $e,xa as Mi,xb as je,xc as H,yb as l,z as Ye,zb as c}from"./chunk-BLBKXXHP.js";var vo="@",yo=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=g(Ci);loadingSchedulerFn=g(Co,{optional:!0});_engine;constructor(e,t,n,r,s){this.doc=e,this.delegate=t,this.zone=n,this.animationType=r,this.moduleImpl=s}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-DUSLANAV.js").then(n=>n),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(n=>{throw new vi(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:r})=>{this._engine=n(this.animationType,this.doc);let s=new r(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(e,t){let n=this.delegate.createRenderer(e,t);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let r=new di(n);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let y=s.createRenderer(e,t);r.use(y),this.scheduler??=this.injector.get(wi,null,{optional:!0}),this.scheduler?.notify(10)}).catch(s=>{r.use(n)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){Ti()};static \u0275prov=X({token:i,factory:i.\u0275fac})}return i})(),di=class{delegate;replay=[];\u0275type=1;constructor(o){this.delegate=o}use(o){if(this.delegate=o,this.replay!==null){for(let e of this.replay)e(o);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(o,e){return this.delegate.createElement(o,e)}createComment(o){return this.delegate.createComment(o)}createText(o){return this.delegate.createText(o)}get destroyNode(){return this.delegate.destroyNode}appendChild(o,e){this.delegate.appendChild(o,e)}insertBefore(o,e,t,n){this.delegate.insertBefore(o,e,t,n)}removeChild(o,e,t,n){this.delegate.removeChild(o,e,t,n)}selectRootElement(o,e){return this.delegate.selectRootElement(o,e)}parentNode(o){return this.delegate.parentNode(o)}nextSibling(o){return this.delegate.nextSibling(o)}setAttribute(o,e,t,n){this.delegate.setAttribute(o,e,t,n)}removeAttribute(o,e,t){this.delegate.removeAttribute(o,e,t)}addClass(o,e){this.delegate.addClass(o,e)}removeClass(o,e){this.delegate.removeClass(o,e)}setStyle(o,e,t,n){this.delegate.setStyle(o,e,t,n)}removeStyle(o,e,t){this.delegate.removeStyle(o,e,t)}setProperty(o,e,t){this.shouldReplay(e)&&this.replay.push(n=>n.setProperty(o,e,t)),this.delegate.setProperty(o,e,t)}setValue(o,e){this.delegate.setValue(o,e)}listen(o,e,t,n){return this.shouldReplay(e)&&this.replay.push(r=>r.listen(o,e,t,n)),this.delegate.listen(o,e,t,n)}shouldReplay(o){return this.replay!==null&&o.startsWith(vo)}},Co=new ie("");function Tn(i="animations"){return Si("NgAsyncAnimations"),yi([{provide:ki,useFactory:()=>new yo(g(xi),g(Fi),g(Je),i)},{provide:Mi,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ht=class i{_isLoading=re(!1);isLoading=this._isLoading.asReadonly();activeRequests=0;show(){this.activeRequests++,this._isLoading.set(!0)}hide(){this.activeRequests--,this.activeRequests<=0&&(this.activeRequests=0,this._isLoading.set(!1))}forceHide(){this.activeRequests=0,this._isLoading.set(!1)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=X({token:i,factory:i.\u0275fac,providedIn:"root"})};var En="X-Skip-Progress-Bar",An=(i,o)=>{let e=g(ht),t=i.headers.has(En),n=i;return t&&(n=i.clone({headers:i.headers.delete(En)})),t||e.show(),o(n).pipe(_i(()=>{t||e.hide()}))};var Pn=(i,o)=>{let e=g(_e);return o(i).pipe(bi(t=>{let n={title:xo(t.status),description:Io(t),code:`ERROR_${t.status}`,status:t.status,statusText:t.statusText,message:t.message,url:t.url||i.url,timestamp:new Date().toISOString()};return e.navigate(["/error"],{state:{error:n}}),gi(()=>t)}))};function xo(i){return{400:"errors.titles.400",401:"errors.titles.401",403:"errors.titles.403",404:"errors.titles.404",408:"errors.titles.408",409:"errors.titles.409",422:"errors.titles.422",429:"errors.titles.429",500:"errors.titles.500",502:"errors.titles.502",503:"errors.titles.503",504:"errors.titles.504"}[i]||"errors.titles.default"}function Io(i){return i.error?.message?i.error.message:{400:"errors.descriptions.400",401:"errors.descriptions.401",403:"errors.descriptions.403",404:"errors.descriptions.404",408:"errors.descriptions.408",409:"errors.descriptions.409",422:"errors.descriptions.422",429:"errors.descriptions.429",500:"errors.descriptions.500",502:"errors.descriptions.502",503:"errors.descriptions.503",504:"errors.descriptions.504"}[i.status]||"errors.descriptions.default"}var Ln=zi([An,Pn]);var Bn=(()=>{class i{el;renderer;zone;constructor(e,t,n){this.el=e,this.renderer=t,this.zone=n}selector;enterFromClass;enterActiveClass;enterToClass;leaveFromClass;leaveActiveClass;leaveToClass;hideOnOutsideClick;toggleClass;hideOnEscape;hideOnResize;resizeSelector;eventListener;documentClickListener;documentKeydownListener;windowResizeListener;resizeObserver;target;enterListener;leaveListener;animating;_enterClass;_leaveClass;_resizeTarget;clickListener(){this.target||=ai(this.selector,this.el.nativeElement),this.toggleClass?this.toggle():this.target?.offsetParent===null?this.enter():this.leave()}toggle(){Gi(this.target,this.toggleClass)?Se(this.target,this.toggleClass):ve(this.target,this.toggleClass)}enter(){this.enterActiveClass?this.animating||(this.animating=!0,this.enterActiveClass.includes("slidedown")&&(this.target.style.height="0px",Se(this.target,this.enterFromClass||"hidden"),this.target.style.maxHeight=this.target.scrollHeight+"px",ve(this.target,this.enterFromClass||"hidden"),this.target.style.height=""),ve(this.target,this.enterActiveClass),this.enterFromClass&&Se(this.target,this.enterFromClass),this.enterListener=this.renderer.listen(this.target,"animationend",()=>{Se(this.target,this.enterActiveClass),this.enterToClass&&ve(this.target,this.enterToClass),this.enterListener&&this.enterListener(),this.enterActiveClass?.includes("slidedown")&&(this.target.style.maxHeight=""),this.animating=!1})):(this.enterFromClass&&Se(this.target,this.enterFromClass),this.enterToClass&&ve(this.target,this.enterToClass)),this.hideOnOutsideClick&&this.bindDocumentClickListener(),this.hideOnEscape&&this.bindDocumentKeydownListener(),this.hideOnResize&&this.bindResizeListener()}leave(){this.leaveActiveClass?this.animating||(this.animating=!0,ve(this.target,this.leaveActiveClass),this.leaveFromClass&&Se(this.target,this.leaveFromClass),this.leaveListener=this.renderer.listen(this.target,"animationend",()=>{Se(this.target,this.leaveActiveClass),this.leaveToClass&&ve(this.target,this.leaveToClass),this.leaveListener&&this.leaveListener(),this.animating=!1})):(this.leaveFromClass&&Se(this.target,this.leaveFromClass),this.leaveToClass&&ve(this.target,this.leaveToClass)),this.hideOnOutsideClick&&this.unbindDocumentClickListener(),this.hideOnEscape&&this.unbindDocumentKeydownListener(),this.hideOnResize&&this.unbindResizeListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.el.nativeElement.ownerDocument,"click",e=>{!this.isVisible()||getComputedStyle(this.target).getPropertyValue("position")==="static"?this.unbindDocumentClickListener():this.isOutsideClick(e)&&this.leave()}))}bindDocumentKeydownListener(){this.documentKeydownListener||this.zone.runOutsideAngular(()=>{this.documentKeydownListener=this.renderer.listen(this.el.nativeElement.ownerDocument,"keydown",e=>{let{key:t,keyCode:n,which:r,type:s}=e;(!this.isVisible()||getComputedStyle(this.target).getPropertyValue("position")==="static")&&this.unbindDocumentKeydownListener(),this.isVisible()&&t==="Escape"&&n===27&&r===27&&this.leave()})})}isVisible(){return this.target.offsetParent!==null}isOutsideClick(e){return!this.el.nativeElement.isSameNode(e.target)&&!this.el.nativeElement.contains(e.target)&&!this.target.contains(e.target)}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}unbindDocumentKeydownListener(){this.documentKeydownListener&&(this.documentKeydownListener(),this.documentKeydownListener=null)}bindResizeListener(){this._resizeTarget=ai(this.resizeSelector),Ui(this._resizeTarget)?this.bindElementResizeListener():this.bindWindowResizeListener()}unbindResizeListener(){this.unbindWindowResizeListener(),this.unbindElementResizeListener()}bindWindowResizeListener(){this.windowResizeListener||this.zone.runOutsideAngular(()=>{this.windowResizeListener=this.renderer.listen(window,"resize",()=>{this.isVisible()?this.leave():this.unbindWindowResizeListener()})})}unbindWindowResizeListener(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null)}bindElementResizeListener(){if(!this.resizeObserver&&this._resizeTarget){let e=!0;this.resizeObserver=new ResizeObserver(()=>{if(e){e=!1;return}this.isVisible()&&this.leave()}),this.resizeObserver.observe(this._resizeTarget)}}unbindElementResizeListener(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=void 0)}ngOnDestroy(){this.target=null,this._resizeTarget=null,this.eventListener&&this.eventListener(),this.unbindDocumentClickListener(),this.unbindDocumentKeydownListener(),this.unbindResizeListener()}static \u0275fac=function(t){return new(t||i)(q(ze),q(tt),q(Je))};static \u0275dir=Ei({type:i,selectors:[["","pStyleClass",""]],hostBindings:function(t,n){t&1&&C("click",function(){return n.clickListener()})},inputs:{selector:[0,"pStyleClass","selector"],enterFromClass:"enterFromClass",enterActiveClass:"enterActiveClass",enterToClass:"enterToClass",leaveFromClass:"leaveFromClass",leaveActiveClass:"leaveActiveClass",leaveToClass:"leaveToClass",hideOnOutsideClick:[2,"hideOnOutsideClick","hideOnOutsideClick",P],toggleClass:"toggleClass",hideOnEscape:[2,"hideOnEscape","hideOnEscape",P],hideOnResize:[2,"hideOnResize","hideOnResize",P],resizeSelector:"resizeSelector"}})}return i})(),Dn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=xe({type:i});static \u0275inj=Ce({})}return i})();var Mo=["data-p-icon","bars"],On=(()=>{class i extends Qe{static \u0275fac=(()=>{let e;return function(n){return(e||(e=j(i)))(n||i)}})();static \u0275cmp=M({type:i,selectors:[["","data-p-icon","bars"]],features:[K],attrs:Mo,decls:1,vars:0,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z","fill","currentColor"]],template:function(t,n){t&1&&(z(),Z(0,"path",0))},encapsulation:2})}return i})();var So=["data-p-icon","exclamation-triangle"],Vn=(()=>{class i extends Qe{pathId;onInit(){this.pathId="url(#"+Be()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=j(i)))(n||i)}})();static \u0275cmp=M({type:i,selectors:[["","data-p-icon","exclamation-triangle"]],features:[K],attrs:So,decls:7,vars:2,consts:[["d","M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z","fill","currentColor"],["d","M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z","fill","currentColor"],["d","M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(t,n){t&1&&(z(),O(0,"g"),Z(1,"path",0)(2,"path",1)(3,"path",2),$(),O(4,"defs")(5,"clipPath",3),Z(6,"rect",4),$()()),t&2&&(x("clip-path",n.pathId),a(5),we("id",n.pathId))},encapsulation:2})}return i})();var ko=["data-p-icon","info-circle"],Rn=(()=>{class i extends Qe{pathId;onInit(){this.pathId="url(#"+Be()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=j(i)))(n||i)}})();static \u0275cmp=M({type:i,selectors:[["","data-p-icon","info-circle"]],features:[K],attrs:ko,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(t,n){t&1&&(z(),O(0,"g"),Z(1,"path",0),$(),O(2,"defs")(3,"clipPath",1),Z(4,"rect",2),$()()),t&2&&(x("clip-path",n.pathId),a(3),we("id",n.pathId))},encapsulation:2})}return i})();var To=["data-p-icon","times-circle"],Fn=(()=>{class i extends Qe{pathId;onInit(){this.pathId="url(#"+Be()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=j(i)))(n||i)}})();static \u0275cmp=M({type:i,selectors:[["","data-p-icon","times-circle"]],features:[K],attrs:To,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(t,n){t&1&&(z(),O(0,"g"),Z(1,"path",0),$(),O(2,"defs")(3,"clipPath",1),Z(4,"rect",2),$()()),t&2&&(x("clip-path",n.pathId),a(3),we("id",n.pathId))},encapsulation:2})}return i})();var Nn=`
    .p-megamenu {
        position: relative;
        display: flex;
        align-items: center;
        background: dt('megamenu.background');
        border: 1px solid dt('megamenu.border.color');
        border-radius: dt('megamenu.border.radius');
        color: dt('megamenu.color');
        gap: dt('megamenu.gap');
    }

    .p-megamenu-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-megamenu-root-list {
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: dt('megamenu.gap');
    }

    .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content {
        border-radius: dt('megamenu.base.item.border.radius');
    }

    .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content > .p-megamenu-item-link {
        padding: dt('megamenu.base.item.padding');
    }

    .p-megamenu-item-content {
        transition:
            background dt('megamenu.transition.duration'),
            color dt('megamenu.transition.duration');
        border-radius: dt('megamenu.item.border.radius');
        color: dt('megamenu.item.color');
    }

    .p-megamenu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('megamenu.item.padding');
        gap: dt('megamenu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-megamenu-item-label {
        line-height: 1;
    }

    .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.color');
    }

    .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.color');
        font-size: dt('megamenu.submenu.icon.size');
        width: dt('megamenu.submenu.icon.size');
        height: dt('megamenu.submenu.icon.size');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content {
        color: dt('megamenu.item.focus.color');
        background: dt('megamenu.item.focus.background');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.focus.color');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.focus.color');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover {
        color: dt('megamenu.item.focus.color');
        background: dt('megamenu.item.focus.background');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.focus.color');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.focus.color');
    }

    .p-megamenu-item-active > .p-megamenu-item-content {
        color: dt('megamenu.item.active.color');
        background: dt('megamenu.item.active.background');
    }

    .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.active.color');
    }

    .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.active.color');
    }

    .p-megamenu-overlay {
        display: none;
        position: absolute;
        width: auto;
        z-index: 1;
        left: 0;
        min-width: 100%;
        padding: dt('megamenu.overlay.padding');
        background: dt('megamenu.overlay.background');
        color: dt('megamenu.overlay.color');
        border: 1px solid dt('megamenu.overlay.border.color');
        border-radius: dt('megamenu.overlay.border.radius');
        box-shadow: dt('megamenu.overlay.shadow');
    }

    .p-megamenu-overlay:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
        display: block;
    }

    .p-megamenu-submenu {
        margin: 0;
        list-style: none;
        padding: dt('megamenu.submenu.padding');
        min-width: 12.5rem;
        display: flex;
        flex-direction: column;
        gap: dt('megamenu.submenu.gap');
    }

    .p-megamenu-submenu-label {
        padding: dt('megamenu.submenu.label.padding');
        color: dt('megamenu.submenu.label.color');
        font-weight: dt('megamenu.submenu.label.font.weight');
        background: dt('megamenu.submenu.label.background');
    }

    .p-megamenu-separator {
        border-block-start: 1px solid dt('megamenu.separator.border.color');
    }

    .p-megamenu-horizontal {
        align-items: center;
        padding: dt('megamenu.horizontal.orientation.padding');
    }

    .p-megamenu-horizontal .p-megamenu-root-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: dt('megamenu.horizontal.orientation.gap');
    }

    .p-megamenu-horizontal .p-megamenu-end {
        margin-left: auto;
        align-self: center;
    }

    .p-megamenu-horizontal .p-megamenu-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-megamenu-vertical {
        display: inline-flex;
        min-width: 12.5rem;
        flex-direction: column;
        align-items: stretch;
        padding: dt('megamenu.vertical.orientation.padding');
    }

    .p-megamenu-vertical .p-megamenu-root-list {
        align-items: stretch;
        flex-direction: column;
        gap: dt('megamenu.vertical.orientation.gap');
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
        left: 100%;
        top: 0;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay:dir(rtl) {
        left: auto;
        right: 100%;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
        margin-left: auto;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
        transform: rotate(180deg);
    }

    .p-megamenu-grid {
        display: flex;
    }

    .p-megamenu-col-2,
    .p-megamenu-col-3,
    .p-megamenu-col-4,
    .p-megamenu-col-6,
    .p-megamenu-col-12 {
        flex: 0 0 auto;
        padding: dt('megamenu.overlay.gap');
    }

    .p-megamenu-col-2 {
        width: 16.6667%;
    }

    .p-megamenu-col-3 {
        width: 25%;
    }

    .p-megamenu-col-4 {
        width: 33.3333%;
    }

    .p-megamenu-col-6 {
        width: 50%;
    }

    .p-megamenu-col-12 {
        width: 100%;
    }

    .p-megamenu-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('megamenu.mobile.button.size');
        height: dt('megamenu.mobile.button.size');
        position: relative;
        color: dt('megamenu.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('megamenu.mobile.button.border.radius');
        transition:
            background dt('megamenu.transition.duration'),
            color dt('megamenu.transition.duration'),
            outline-color dt('megamenu.transition.duration'),
            box-shadow dt('megamenu.transition.duration');
        outline-color: transparent;
    }

    .p-megamenu-button:hover {
        color: dt('megamenu.mobile.button.hover.color');
        background: dt('megamenu.mobile.button.hover.background');
    }

    .p-megamenu-button:focus-visible {
        box-shadow: dt('megamenu.mobile.button.focus.ring.shadow');
        outline: dt('megamenu.mobile.button.focus.ring.width') dt('megamenu.mobile.button.focus.ring.style') dt('megamenu.mobile.button.focus.ring.color');
        outline-offset: dt('megamenu.mobile.button.focus.ring.offset');
    }

    .p-megamenu-mobile {
        display: flex;
    }

    .p-megamenu-mobile .p-megamenu-button {
        display: flex;
    }

    .p-megamenu-mobile .p-megamenu-root-list {
        position: absolute;
        display: none;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        width: 100%;
        padding: dt('megamenu.submenu.padding');
        gap: dt('megamenu.submenu.gap');
        background: dt('megamenu.overlay.background');
        border: 1px solid dt('megamenu.overlay.border.color');
        box-shadow: dt('megamenu.overlay.shadow');
    }

    .p-megamenu-mobile .p-megamenu-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-megamenu-mobile-active .p-megamenu-root-list {
        display: block;
    }

    .p-megamenu-mobile .p-megamenu-root-list .p-megamenu-item {
        width: 100%;
        position: static;
    }

    .p-megamenu-mobile .p-megamenu-overlay {
        position: static;
        border: 0 none;
        border-radius: 0;
        box-shadow: none;
    }

    .p-megamenu-mobile .p-megamenu-grid {
        flex-wrap: wrap;
        overflow: auto;
        max-height: 90%;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
        transform: rotate(-180deg);
    }
`;var zn=i=>({processedItem:i}),Eo=()=>({exact:!1}),Ao=i=>({$implicit:i});function Po(i,o){if(i&1&&(c(0,"li",5),f(1),m()),i&2){let e=p();Ee(e.getItemProp(e.submenu,"style")),v(e.cn(e.cx("submenuLabel"),e.getItemProp(e.submenu,"class"))),l("pBind",e.ptm("submenuLabel")),a(),N(" ",e.getItemLabel(e.submenu)," ")}}function Lo(i,o){if(i&1&&d(0,"li",8),i&2){let e=p().$implicit,t=p();Ee(t.getItemProp(e,"style")),v(t.cn(t.cx("separator"),t.getItemProp(e,"class"))),l("pBind",t.ptm("separator")),x("id",t.getItemId(e))}}function Bo(i,o){if(i&1&&d(0,"span",19),i&2){let e=p(4),t=e.$implicit,n=e.index,r=p();v(r.cn(r.cx("itemIcon"),r.getItemProp(t,"icon"),r.getItemProp(t,"iconClass"))),l("ngStyle",r.getItemProp(t,"iconStyle"))("pBind",r.getPTOptions(t,n,"itemIcon")),x("tabindex",-1)}}function Do(i,o){if(i&1&&(c(0,"span",19),f(1),m()),i&2){let e=p(4),t=e.$implicit,n=e.index,r=p();v(r.cn(r.cx("itemLabel"),r.getItemProp(t,"labelClass"))),l("ngStyle",r.getItemProp(t,"labelStyle"))("pBind",r.getPTOptions(t,n,"itemLabel")),a(),N(" ",r.getItemLabel(t)," ")}}function Oo(i,o){if(i&1&&d(0,"span",20),i&2){let e=p(4),t=e.$implicit,n=e.index,r=p();v(r.cn(r.cx("itemLabel"),r.getItemProp(t,"labelClass"))),l("ngStyle",r.getItemProp(t,"labelStyle"))("innerHTML",r.getItemLabel(t),gt)("pBind",r.getPTOptions(t,n,"itemLabel"))}}function Vo(i,o){if(i&1&&d(0,"p-badge",21),i&2){let e=p(4).$implicit,t=p();v(t.getItemProp(e,"badgeStyleClass")),l("value",t.getItemProp(e,"badge"))("unstyled",t.unstyled())}}function Ro(i,o){if(i&1&&(z(),d(0,"svg",25)),i&2){let e=p(6),t=e.$implicit,n=e.index,r=p();v(r.cx("submenuIcon")),l("pBind",r.getPTOptions(t,n,"submenuIcon")),x("aria-hidden",!0)}}function Fo(i,o){if(i&1&&(z(),d(0,"svg",27)),i&2){let e=p(7),t=e.$implicit,n=e.index,r=p();v(r.cx("submenuIcon")),l("pBind",r.getPTOptions(t,n,"submenuIcon")),x("aria-hidden",!0)}}function No(i,o){if(i&1&&S(0,Fo,1,4,"svg",26),i&2){let e=p(7);l("ngIf",e.orientation==="vertical")}}function Ho(i,o){if(i&1&&(he(0),E(1,Ro,1,4,":svg:svg",23)(2,No,1,1,":svg:svg",24),fe()),i&2){let e=p(6);a(),A(e.orientation==="horizontal"||e.mobileActive?1:2)}}function zo(i,o){}function $o(i,o){i&1&&S(0,zo,0,0,"ng-template",28),i&2&&ei("aria-hidden",!0)}function jo(i,o){if(i&1&&(he(0),S(1,Ho,3,1,"ng-container",11)(2,$o,1,1,null,22),fe()),i&2){let e=p(5);a(),l("ngIf",!e.megaMenu.submenuIconTemplate&&!e.megaMenu._submenuIconTemplate),a(),l("ngTemplateOutlet",e.megaMenu.submenuIconTemplate||e.megaMenu._submenuIconTemplate)}}function qo(i,o){if(i&1&&(c(0,"a",15),S(1,Bo,1,5,"span",16)(2,Do,2,5,"span",17)(3,Oo,1,5,"ng-template",null,1,Fe)(5,Vo,1,4,"p-badge",18)(6,jo,3,2,"ng-container",11),m()),i&2){let e=ti(4),t=p(3),n=t.$implicit,r=t.index,s=p();v(s.cn(s.cx("itemLink"),s.getItemProp(n,"linkClass"))),l("target",s.getItemProp(n,"target"))("ngStyle",s.getItemProp(n,"linkStyle"))("pBind",s.getPTOptions(n,r,"itemLink")),x("href",s.getItemProp(n,"url"),kt)("data-automationid",s.getItemProp(n,"automationId"))("title",s.getItemProp(n,"title"))("tabindex",-1),a(),l("ngIf",s.getItemProp(n,"icon")),a(),l("ngIf",s.getItemProp(n,"escape"))("ngIfElse",e),a(3),l("ngIf",s.getItemProp(n,"badge")),a(),l("ngIf",s.isItemGroup(n))}}function Ko(i,o){if(i&1&&d(0,"span",19),i&2){let e=p(4),t=e.$implicit,n=e.index,r=p();v(r.cn(r.cx("itemIcon"),r.getItemProp(t,"icon"),r.getItemProp(t,"iconClass"))),l("ngStyle",r.getItemProp(t,"iconStyle"))("pBind",r.getPTOptions(t,n,"itemIcon")),x("tabindex",-1)}}function Qo(i,o){if(i&1&&(c(0,"span",19),f(1),m()),i&2){let e=p(4),t=e.$implicit,n=e.index,r=p();v(r.cn(r.cx("itemLabel"),r.getItemProp(t,"labelClass"))),l("ngStyle",r.getItemProp(t,"labelStyle"))("pBind",r.getPTOptions(t,n,"itemLabel")),a(),B(r.getItemLabel(t))}}function Go(i,o){if(i&1&&d(0,"span",20),i&2){let e=p(4),t=e.$implicit,n=e.index,r=p();v(r.cn(r.cx("itemLabel"),r.getItemProp(t,"labelClass"))),l("ngStyle",r.getItemProp(t,"labelStyle"))("innerHTML",r.getItemLabel(t),gt)("pBind",r.getPTOptions(t,n,"itemLabel"))}}function Uo(i,o){if(i&1&&d(0,"p-badge",31),i&2){let e=p(4).$implicit,t=p();l("styleClass",t.getItemProp(e,"badgeStyleClass"))("value",t.getItemProp(e,"badge"))("unstyled",t.unstyled())}}function Zo(i,o){if(i&1&&(z(),d(0,"svg",25)),i&2){let e=p(6),t=e.$implicit,n=e.index,r=p();v(r.cx("submenuIcon")),l("pBind",r.getPTOptions(t,n,"submenuIcon")),x("aria-hidden",!0)}}function Wo(i,o){if(i&1&&(z(),d(0,"svg",27)),i&2){let e=p(6),t=e.$implicit,n=e.index,r=p();v(r.cx("submenuIcon")),l("pBind",r.getPTOptions(t,n,"submenuIcon")),x("aria-hidden",!0)}}function Xo(i,o){if(i&1&&(he(0),S(1,Zo,1,4,"svg",32)(2,Wo,1,4,"svg",26),fe()),i&2){let e=p(6);a(),l("ngIf",e.orientation==="horizontal"),a(),l("ngIf",e.orientation==="vertical")}}function Yo(i,o){}function Jo(i,o){i&1&&S(0,Yo,0,0,"ng-template",28),i&2&&ei("aria-hidden",!0)}function er(i,o){if(i&1&&(he(0),S(1,Xo,3,2,"ng-container",11)(2,Jo,1,1,null,22),fe()),i&2){let e=p(5);a(),l("ngIf",!e.megaMenu.submenuIconTemplate&&!e.megaMenu._submenuIconTemplate),a(),l("ngTemplateOutlet",e.megaMenu.submenuIconTemplate||e.megaMenu._submenuIconTemplate)}}function tr(i,o){if(i&1&&(c(0,"a",29),S(1,Ko,1,5,"span",16)(2,Qo,2,5,"span",17)(3,Go,1,5,"ng-template",null,2,Fe)(5,Uo,1,3,"p-badge",30)(6,er,3,2,"ng-container",11),m()),i&2){let e=ti(4),t=p(3),n=t.$implicit,r=t.index,s=p();v(s.cn(s.cx("itemLink"),s.getItemProp(n,"linkClass"))),l("routerLink",s.getItemProp(n,"routerLink"))("queryParams",s.getItemProp(n,"queryParams"))("routerLinkActive","p-megamenu-item-link-active")("routerLinkActiveOptions",s.getItemProp(n,"routerLinkActiveOptions")||nt(23,Eo))("target",s.getItemProp(n,"target"))("ngStyle",s.getItemProp(n,"linkStyle"))("fragment",s.getItemProp(n,"fragment"))("queryParamsHandling",s.getItemProp(n,"queryParamsHandling"))("preserveFragment",s.getItemProp(n,"preserveFragment"))("skipLocationChange",s.getItemProp(n,"skipLocationChange"))("replaceUrl",s.getItemProp(n,"replaceUrl"))("state",s.getItemProp(n,"state"))("pBind",s.getPTOptions(n,r,"itemLink")),x("data-automationid",s.getItemProp(n,"automationId"))("title",s.getItemProp(n,"title"))("tabindex",-1),a(),l("ngIf",s.getItemProp(n,"icon")),a(),l("ngIf",s.getItemProp(n,"escape"))("ngIfElse",e),a(3),l("ngIf",s.getItemProp(n,"badge")),a(),l("ngIf",s.isItemGroup(n))}}function ir(i,o){if(i&1&&(he(0),S(1,qo,7,14,"a",13)(2,tr,7,24,"a",14),fe()),i&2){let e=p(2).$implicit,t=p();a(),l("ngIf",!t.getItemProp(e,"routerLink")),a(),l("ngIf",t.getItemProp(e,"routerLink"))}}function nr(i,o){}function or(i,o){i&1&&S(0,nr,0,0,"ng-template")}function rr(i,o){if(i&1&&(he(0),S(1,or,1,0,null,33),fe()),i&2){let e=p(2).$implicit,t=p();a(),l("ngTemplateOutlet",t.itemTemplate)("ngTemplateOutletContext",Ae(2,Ao,e.item))}}function ar(i,o){if(i&1){let e=T();c(0,"ul",37),C("itemClick",function(n){u(e);let r=p(5);return h(r.itemClick.emit(n))})("itemMouseEnter",function(n){u(e);let r=p(5);return h(r.onItemMouseEnter(n))}),m()}if(i&2){let e=o.$implicit,t=p(5);l("id",t.getSubListId(e))("submenu",e)("items",e.items)("itemTemplate",t.itemTemplate)("mobileActive",t.mobileActive)("menuId",t.menuId)("focusedItemId",t.focusedItemId)("level",t.level+1)("root",!1)("pt",t.pt())("unstyled",t.unstyled())}}function sr(i,o){if(i&1&&(c(0,"div",34),S(1,ar,1,11,"ul",36),m()),i&2){let e=o.$implicit,t=p(3).$implicit,n=p();v(n.cx("column",Ae(4,zn,t))),l("pBind",n.ptm("column")),a(),l("ngForOf",e)}}function lr(i,o){if(i&1&&(c(0,"div",34)(1,"div",34),S(2,sr,2,6,"div",35),m()()),i&2){let e=p(2).$implicit,t=p();v(t.cx("overlay")),l("pBind",t.ptm("overlay")),a(),v(t.cx("grid")),l("pBind",t.ptm("grid")),a(),l("ngForOf",e.items)}}function cr(i,o){if(i&1){let e=T();c(0,"li",9,0)(2,"div",10),C("click",function(n){u(e);let r=p().$implicit,s=p();return h(s.onItemClick(n,r))})("mouseenter",function(n){u(e);let r=p().$implicit,s=p();return h(s.onItemMouseEnter({$event:n,processedItem:r}))}),S(3,ir,3,2,"ng-container",11)(4,rr,2,4,"ng-container",11),m(),S(5,lr,3,7,"div",12),m()}if(i&2){let e=p(),t=e.$implicit,n=e.index,r=p();v(r.cn(r.cx("item",Ae(23,zn,t)),r.getItemProp(t,"styleClass"))),l("ngStyle",r.getItemProp(t,"style"))("tooltipOptions",r.getItemProp(t,"tooltipOptions"))("pBind",r.getPTOptions(t,n,"item"))("pTooltipUnstyled",r.unstyled()),x("id",r.getItemId(t))("data-p-active",r.isItemActive(t))("data-p-focused",r.isItemFocused(t))("data-p-disabled",r.isItemDisabled(t))("aria-label",r.getItemLabel(t))("aria-disabled",r.isItemDisabled(t)||void 0)("aria-haspopup",r.isItemGroup(t)&&!r.getItemProp(t,"to")?"menu":void 0)("aria-expanded",r.isItemGroup(t)?r.isItemActive(t):void 0)("aria-level",r.level+1)("aria-setsize",r.getAriaSetSize())("aria-posinset",r.getAriaPosInset(n)),a(2),v(r.cx("itemContent")),l("pBind",r.getPTOptions(t,n,"itemContent")),a(),l("ngIf",!r.itemTemplate),a(),l("ngIf",r.itemTemplate),a(),l("ngIf",r.isItemVisible(t)&&r.isItemGroup(t))}}function pr(i,o){if(i&1&&S(0,Lo,1,6,"li",6)(1,cr,6,25,"li",7),i&2){let e=o.$implicit,t=p();l("ngIf",t.isItemVisible(e)&&t.getItemProp(e,"separator")),a(),l("ngIf",t.isItemVisible(e)&&!t.getItemProp(e,"separator"))}}var mr=["start"],dr=["end"],ur=["menuicon"],hr=["submenuicon"],fr=["item"],gr=["button"],br=["buttonicon"],_r=["menubutton"],vr=["rootmenu"];function yr(i,o){i&1&&ae(0)}function Cr(i,o){if(i&1&&(c(0,"div",6),S(1,yr,1,0,"ng-container",4),m()),i&2){let e=p();v(e.cx("start")),l("pBind",e.ptm("start")),a(),l("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function xr(i,o){if(i&1&&(z(),d(0,"svg",10)),i&2){let e=p(3);l("pBind",e.ptm("buttonIcon"))}}function Ir(i,o){}function wr(i,o){i&1&&S(0,Ir,0,0,"ng-template")}function Mr(i,o){if(i&1){let e=T();c(0,"a",8,1),C("click",function(n){u(e);let r=p(2);return h(r.menuButtonClick(n))})("keydown",function(n){u(e);let r=p(2);return h(r.menuButtonKeydown(n))}),S(2,xr,1,1,"svg",9)(3,wr,1,0,null,4),m()}if(i&2){let e=p(2);v(e.cx("button")),l("pBind",e.ptm("button")),x("aria-haspopup",!!(e.model.length&&e.model.length>0))("aria-expanded",e.mobileActive)("aria-controls",e.id)("aria-label",e.config.translation.aria.navigation),a(2),l("ngIf",!e.buttonIconTemplate&&!e._buttonIconTemplate),a(),l("ngTemplateOutlet",e.buttonIconTemplate||e._buttonIconTemplate)}}function Sr(i,o){if(i&1&&(he(0),S(1,Mr,4,9,"a",7),fe()),i&2){let e=p();a(),l("ngIf",e.model&&e.model.length>0)}}function kr(i,o){i&1&&ae(0)}function Tr(i,o){i&1&&ae(0)}function Er(i,o){if(i&1&&(c(0,"div",6),S(1,Tr,1,0,"ng-container",4),m()),i&2){let e=p();v(e.cx("end")),l("pBind",e.ptm("end")),a(),l("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}var Ar={rootList:({instance:i})=>({"max-height":i.scrollHeight,overflow:"auto"})},Pr={root:({instance:i})=>["p-megamenu p-component",{"p-megamenu-mobile":i.queryMatches(),"p-megamenu-mobile-active":i.mobileActive,"p-megamenu-horizontal":i.orientation==="horizontal","p-megamenu-vertical":i.orientation==="vertical"}],start:"p-megamenu-start",button:"p-megamenu-button",rootList:"p-megamenu-root-list",submenuLabel:({instance:i,processedItem:o})=>["p-megamenu-submenu-label",{"p-disabled":i.isItemDisabled(o)}],item:({instance:i,processedItem:o})=>["p-megamenu-item",i.getItemProp(o,"styleClass"),i.getItemProp(o,"class"),{"p-megamenu-item-active":i.isItemActive(o),"p-focus":i.isItemFocused(o),"p-disabled":i.isItemDisabled(o)}],itemContent:"p-megamenu-item-content",itemLink:"p-megamenu-item-link",itemIcon:"p-megamenu-item-icon",itemLabel:"p-megamenu-item-label",submenuIcon:"p-megamenu-submenu-icon",overlay:"p-megamenu-overlay",grid:"p-megamenu-grid",column:({instance:i,processedItem:o})=>{let e=i.isItemGroup(o)?o.items.length:0,t;if(i.megaMenu.queryMatches())t="p-megamenu-col-12";else switch(e){case 2:t="p-megamenu-col-6";break;case 3:t="p-megamenu-col-4";break;case 4:t="p-megamenu-col-3";break;case 6:t="p-megamenu-col-2";break;default:t="p-megamenu-col-12";break}return t},submenu:"p-megamenu-submenu",separator:"p-megamenu-separator",end:"p-megamenu-end"},ui=(()=>{class i extends De{name="megamenu";style=Nn;classes=Pr;inlineStyles=Ar;static \u0275fac=(()=>{let e;return function(n){return(e||(e=j(i)))(n||i)}})();static \u0275prov=X({token:i,factory:i.\u0275fac})}return i})();var $n=new ie("MEGAMENU_INSTANCE"),Hn=new ie("MEGAMENU_SUB_INSTANCE"),Lr=(()=>{class i extends Oe{bindDirectiveInstance=g(D,{self:!0});$pcMegaMenu=g($n,{optional:!0,skipSelf:!0})??void 0;$pcMegaMenuSub=g(Hn,{optional:!0,skipSelf:!0})??void 0;id;items;itemTemplate;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;disabled=!1;orientation;activeItem;submenu;queryMatches=!1;mobileActive=!1;scrollHeight;tabindex=0;root=!1;itemClick=new U;itemMouseEnter=new U;menuFocus=new U;menuBlur=new U;menuKeydown=new U;menuMouseDown=new U;megaMenu=g(St(()=>jn));_componentStyle=g(ui);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(this.root?"rootList":"submenu"))}onItemClick(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.itemClick.emit({originalEvent:e,processedItem:t,isFocus:!0})}getItemProp(e,t,n=null){return e&&e.item?ci(e.item[t],n):void 0}getItemId(e){return e.item&&e.item?.id?e.item.id:`${this.menuId}_${e.key}`}getSubListId(e){return`${this.getItemId(e)}_list`}getItemLabel(e){return this.getItemProp(e,"label")}isSubmenuVisible(e){return this.submenu&&!this.root?this.isItemVisible(e):!0}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemActive(e){return W(this.activeItem)?this.activeItem.key===e.key:!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return W(e.items)}getAriaSetSize(){return this.items?.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-(this.items?.slice(0,e).filter(t=>this.isItemVisible(t)&&this.getItemProp(t,"separator")).length||0)+1}onItemMouseEnter(e){let{event:t,processedItem:n}=e;this.itemMouseEnter.emit({originalEvent:t,processedItem:n})}getPTOptions(e,t,n){let r={context:{item:e.item,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e)}};return this.ptm(n,r)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=j(i)))(n||i)}})();static \u0275cmp=M({type:i,selectors:[["p-megaMenuSub"],["p-megamenu-sub"],["ul","pMegaMenuSub",""]],hostVars:12,hostBindings:function(t,n){t&1&&C("keydown",function(s){return n.menuKeydown.emit(s)})("focus",function(s){return n.menuFocus.emit(s)})("blur",function(s){return n.menuBlur.emit(s)})("mousedown",function(s){return n.menuMouseDown.emit(s)}),t&2&&(we("tabIndex",n.tabindex),x("role",n.root?"menubar":"menu")("id",n.id)("aria-orientation",n.orientation)("aria-activedescendant",n.focusedItemId)("data-pc-section",n.root?"rootlist":"submenu"),Ee(n.sx("rootList")),v(n.root?n.cx("rootList"):n.cx("submenu")),Te("display",n.isSubmenuVisible(n.submenu)?null:"none"))},inputs:{id:"id",items:"items",itemTemplate:"itemTemplate",menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",de],focusedItemId:"focusedItemId",disabled:[2,"disabled","disabled",P],orientation:"orientation",activeItem:"activeItem",submenu:"submenu",queryMatches:[2,"queryMatches","queryMatches",P],mobileActive:[2,"mobileActive","mobileActive",P],scrollHeight:"scrollHeight",tabindex:[2,"tabindex","tabindex",de],root:[2,"root","root",P]},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown",menuMouseDown:"menuMouseDown"},features:[ge([{provide:Hn,useExisting:i},{provide:ke,useExisting:i}]),Ie([D]),K],decls:2,vars:2,consts:[["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],["role","presentation",3,"class","style","pBind",4,"ngIf"],["ngFor","",3,"ngForOf"],["role","presentation",3,"pBind"],["role","separator",3,"style","class","pBind",4,"ngIf"],["role","menuitem","pTooltip","",3,"ngStyle","class","tooltipOptions","pBind","pTooltipUnstyled",4,"ngIf"],["role","separator",3,"pBind"],["role","menuitem","pTooltip","",3,"ngStyle","tooltipOptions","pBind","pTooltipUnstyled"],[3,"click","mouseenter","pBind"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],["pRipple","",3,"target","class","ngStyle","pBind",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","class","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind",4,"ngIf"],["pRipple","",3,"target","ngStyle","pBind"],[3,"class","ngStyle","pBind",4,"ngIf"],[3,"class","ngStyle","pBind",4,"ngIf","ngIfElse"],[3,"class","value","unstyled",4,"ngIf"],[3,"ngStyle","pBind"],[3,"ngStyle","innerHTML","pBind"],[3,"value","unstyled"],[4,"ngTemplateOutlet"],["data-p-icon","angle-down",3,"class","pBind"],["data-p-icon","angle-right",3,"class","pBind"],["data-p-icon","angle-down",3,"pBind"],["data-p-icon","angle-right",3,"class","pBind",4,"ngIf"],["data-p-icon","angle-right",3,"pBind"],[3,"aria-hidden"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind"],[3,"styleClass","value","unstyled",4,"ngIf"],[3,"styleClass","value","unstyled"],["data-p-icon","angle-down",3,"class","pBind",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],[3,"class","pBind",4,"ngFor","ngForOf"],["pMegaMenuSub","",3,"id","submenu","items","itemTemplate","mobileActive","menuId","focusedItemId","level","root","pt","unstyled","itemClick","itemMouseEnter",4,"ngFor","ngForOf"],["pMegaMenuSub","",3,"itemClick","itemMouseEnter","id","submenu","items","itemTemplate","mobileActive","menuId","focusedItemId","level","root","pt","unstyled"]],template:function(t,n){t&1&&S(0,Po,2,6,"li",3)(1,pr,2,2,"ng-template",4),t&2&&(l("ngIf",n.submenu),a(),l("ngForOf",n.items))},dependencies:[i,L,At,Me,Ne,Ri,ne,at,Bt,pt,oe,ce,D,pn,mn,vt,cn,Q],encapsulation:2})}return i})(),jn=(()=>{class i extends Oe{componentName="MegaMenu";bindDirectiveInstance=g(D,{self:!0});set model(e){this._model=e,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}styleClass;orientation="horizontal";id;ariaLabel;ariaLabelledBy;breakpoint="960px";scrollHeight="20rem";disabled=!1;tabindex=0;startTemplate;endTemplate;menuIconTemplate;submenuIconTemplate;itemTemplate;buttonTemplate;buttonIconTemplate;templates;menubuttonViewChild;rootmenu;_startTemplate;_endTemplate;_menuIconTemplate;_submenuIconTemplate;_itemTemplate;_buttonTemplate;_buttonIconTemplate;outsideClickListener;resizeListener;dirty=!1;focused=!1;activeItem=re(null);focusedItemInfo=re({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_model;_componentStyle=g(ui);matchMediaListener;query;queryMatches=re(!1);mobileActive=!1;get visibleItems(){let e=W(this.activeItem())?this.activeItem():null;return e?e.items.reduce((t,n)=>(n.forEach(r=>{r.items.forEach(s=>{t.push(s)})}),t),[]):this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e?.item&&e.item?.id?e.item.id:W(e.key)?`${this.id}_${e.key}`:null}constructor(){super(),et(()=>{let e=this.activeItem();W(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}onInit(){this.bindMatchMediaListener(),this.id=this.id||Be("pn_id_")}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"menuicon":this._menuIconTemplate=e.template;break;case"submenuicon":this._submenuIconTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"button":this._buttonTemplate=e.template;break;case"buttonicon":this._buttonIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}bindMatchMediaListener(){if(oi(this.platformId)&&!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=e,this.queryMatches.set(e.matches),this.matchMediaListener=()=>{this.queryMatches.set(e.matches),this.mobileActive=!1,this.cd.markForCheck()},e.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}createProcessedItems(e,t=0,n={},r="",s){let y=[];return e&&e.forEach((V,G)=>{let ye=(r!==""?r+"_":"")+(s!==void 0?s+"_":"")+G,Re={item:V,index:G,level:t,key:ye,parent:n,parentKey:r,columnIndex:s!==void 0?s:n.columnIndex!==void 0?n.columnIndex:G};Re.items=t===0&&V.items&&V.items.length>0?V.items.map((He,Mt)=>this.createProcessedItems(He,t+1,Re,ye,Mt)):this.createProcessedItems(V.items,t+1,Re,ye),y.push(Re)}),y}getItemProp(e,t){return e?ci(e[t]):void 0}onItemClick(e){this.dirty=!0;let{originalEvent:t,processedItem:n}=e,r=this.isProcessedItemGroup(n),s=ct(n.parent);if(this.isSelected(n)){let{index:V,key:G,parentKey:ye,item:Re}=n;this.activeItem.set(null),this.focusedItemInfo.set({index:V,key:G,parentKey:ye,item:Re}),this.dirty=!s,this.mobileActive||st(this.rootmenu?.el?.nativeElement,{preventScroll:!0})}else r?this.onItemChange(e):this.hide(t)}onItemMouseEnter(e){!this.mobileActive&&this.dirty&&this.onItemChange(e)}menuButtonClick(e){this.toggle(e)}menuButtonKeydown(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&this.menuButtonClick(e)}toggle(e){this.mobileActive?(this.mobileActive=!1,le.clear(this.rootmenu?.el.nativeElement),this.hide()):(this.mobileActive=!0,le.set("menu",this.rootmenu?.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()}show(){this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:""}),st(this.rootmenu?.el.nativeElement)}scrollInView(e=-1){let t=e!==-1?`${this.id}_${e}`:this.focusedItemId,n;t===null&&this.queryMatches()?n=this.menubuttonViewChild?.nativeElement:n=_t(this.rootmenu?.el?.nativeElement,`li[id="${t}"]`),n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})}onItemChange(e){let{processedItem:t,isFocus:n}=e;if(ct(t))return;let{index:r,key:s,parentKey:y,items:V,item:G}=t,ye=W(V);ye&&this.activeItem.set(t),this.focusedItemInfo.set({index:r,key:s,parentKey:y,item:G}),ye&&(this.dirty=!0),n&&st(this.rootmenu?.el?.nativeElement)}hide(e,t){this.mobileActive&&(this.mobileActive=!1,setTimeout(()=>{st(this.menubuttonViewChild?.nativeElement),this.scrollInView()},100)),this.activeItem.set(null),this.focusedItemInfo.set({index:-1,key:"",parentKey:"",item:null}),t&&st(this.rootmenu?.el?.nativeElement),this.dirty=!1}onMenuMouseDown(e){this.dirty=!0}onMenuFocus(e){this.focused=!0;let t=e.relatedTarget;if((!t||!this.el.nativeElement.contains(t))&&this.focusedItemInfo().index===-1&&ct(this.activeItem())&&!this.dirty){let r=this.findFirstFocusedItemIndex(),s=this.findVisibleItem(r);this.focusedItemInfo.set({index:r,key:s.key,parentKey:s.parentKey,item:s.item})}}onMenuBlur(e){let t=e.relatedTarget;t&&this.el.nativeElement.contains(t)||setTimeout(()=>{let n=this.document.activeElement;n&&this.el.nativeElement.contains(n)||(this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1)})}onKeyDown(e){let t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&Wi(e.key)&&this.searchItems(e,e.key);break}}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}isProcessedItemGroup(e){return e&&W(e.items)}isSelected(e){return W(this.activeItem())?this.activeItem().key===e.key:!1}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemSeparator(e){return this.getItemProp(e,"separator")}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&W(e.items)}searchItems(e,t){this.searchValue=(this.searchValue||"")+t;let n=-1,r=!1;return this.focusedItemInfo().index!==-1?(n=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(s=>this.isItemMatched(s)),n=n===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(s=>this.isItemMatched(s)):n+this.focusedItemInfo().index):n=this.visibleItems.findIndex(s=>this.isItemMatched(s)),n!==-1&&(r=!0),n===-1&&this.focusedItemInfo().index===-1&&(n=this.findFirstFocusedItemIndex()),n!==-1&&this.changeFocusedItemInfo(e,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),r}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,"label")}changeFocusedItemInfo(e,t){let n=this.findVisibleItem(t);if(W(n)){let{key:r,parentKey:s,item:y}=n;this.focusedItemInfo.set({index:t,key:r||"",parentKey:s,item:y})}this.scrollInView()}onArrowDownKey(e){if(this.orientation==="horizontal")if(W(this.activeItem())&&this.activeItem().key===this.focusedItemInfo().key){let{key:n,item:r}=this.activeItem();this.focusedItemInfo.set({index:-1,key:"",parentKey:n,item:r})}else{let n=this.findVisibleItem(this.focusedItemInfo().index);if(this.isProccessedItemGroup(n)){let{parentKey:s,key:y,item:V}=n;this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo.set({index:-1,key:y,parentKey:s,item:V}),this.searchValue=""}}let t=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,t),e.preventDefault()}onArrowRightKey(e){let t=this.findVisibleItem(this.focusedItemInfo().index);if(this.isProccessedItemGroup(t)){if(this.orientation==="vertical")if(W(this.activeItem())&&this.activeItem().key===t.key)this.focusedItemInfo.set({index:-1,key:"",parentKey:this.activeItem().key,item:t.item});else{let s=this.findVisibleItem(this.focusedItemInfo().index);this.isProccessedItemGroup(s)&&(this.onItemChange({originalEvent:e,processedItem:s}),this.focusedItemInfo.set({index:-1,key:s.key,parentKey:s.parentKey,item:s.item}),this.searchValue="")}let r=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,r)}else{let r=t.columnIndex+1,s=this.visibleItems.findIndex(y=>y.columnIndex===r);s!==-1&&this.changeFocusedItemInfo(e,s)}e.preventDefault()}onArrowUpKey(e){if(e.altKey&&this.orientation==="horizontal"){if(this.focusedItemInfo().index!==-1){let t=this.findVisibleItem(this.focusedItemInfo().index);!this.isProccessedItemGroup(t)&&W(this.activeItem)&&(this.focusedItemInfo().index===0?(this.focusedItemInfo.set({index:this.activeItem().index,key:this.activeItem().key,parentKey:this.activeItem().parentKey,item:t.item}),this.activeItem.set(null)):this.changeFocusedItemInfo(e,this.findFirstItemIndex()))}e.preventDefault()}else{let t=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,t),e.preventDefault()}}onArrowLeftKey(e){let t=this.findVisibleItem(this.focusedItemInfo().index);if(this.isProccessedItemGroup(t)){if(this.orientation==="horizontal"){let r=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,r)}}else{this.orientation==="vertical"&&W(this.activeItem())&&t.columnIndex===0&&(this.focusedItemInfo.set({index:this.activeItem().index,key:this.activeItem().key,parentKey:this.activeItem().parentKey,item:t.item}),this.activeItem.set(null));let r=t.columnIndex-1,s=this.visibleItems.findIndex(y=>y.columnIndex===r);s!==-1&&this.changeFocusedItemInfo(e,s)}e.preventDefault()}onHomeKey(e){this.changeFocusedItemInfo(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemInfo(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){W(this.activeItem())&&(this.focusedItemInfo.set({index:this.activeItem().index,key:this.activeItem().key,item:this.activeItem().item}),this.activeItem.set(null)),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let t=this.findVisibleItem(this.focusedItemInfo().index);!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let t=_t(this.rootmenu?.el?.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),n=t&&(_t(t,'[data-pc-section="itemlink"]')||_t(t,"a,button"));n?n.click():t&&t.click();let r=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(r)&&this.changeFocusedItemInfo(e,this.findFirstFocusedItemIndex())}e.preventDefault()}findVisibleItem(e){return W(this.visibleItems)?this.visibleItems[e]:null}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return li(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let t=e>0?li(this.visibleItems.slice(0,e),n=>this.isValidItem(n)):-1;return t>-1?t:e}findNextItemIndex(e){let t=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(n=>this.isValidItem(n)):-1;return t>-1?t+e+1:e}bindResizeListener(){this.resizeListener||(this.resizeListener=e=>{Zi()||this.hide(e,!0),this.mobileActive=!1},window.addEventListener("resize",this.resizeListener))}bindOutsideClickListener(){oi(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",e=>{this.el?.nativeElement!==e.target&&!this.el?.nativeElement.contains(e.target)&&this.hide()})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}onDestroy(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["p-megaMenu"],["p-megamenu"],["p-mega-menu"]],contentQueries:function(t,n,r){if(t&1&&qe(r,mr,4)(r,dr,4)(r,ur,4)(r,hr,4)(r,fr,4)(r,gr,4)(r,br,4)(r,Ke,4),t&2){let s;I(s=w())&&(n.startTemplate=s.first),I(s=w())&&(n.endTemplate=s.first),I(s=w())&&(n.menuIconTemplate=s.first),I(s=w())&&(n.submenuIconTemplate=s.first),I(s=w())&&(n.itemTemplate=s.first),I(s=w())&&(n.buttonTemplate=s.first),I(s=w())&&(n.buttonIconTemplate=s.first),I(s=w())&&(n.templates=s)}},viewQuery:function(t,n){if(t&1&&Y(_r,5)(vr,5),t&2){let r;I(r=w())&&(n.menubuttonViewChild=r.first),I(r=w())&&(n.rootmenu=r.first)}},hostVars:3,hostBindings:function(t,n){t&2&&(we("id",n.id),v(n.cn(n.cx("root"),n.styleClass)))},inputs:{model:"model",styleClass:"styleClass",orientation:"orientation",id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",breakpoint:"breakpoint",scrollHeight:"scrollHeight",disabled:[2,"disabled","disabled",P],tabindex:[2,"tabindex","tabindex",de]},features:[ge([ui,{provide:$n,useExisting:i},{provide:ke,useExisting:i}]),Ie([D]),K],decls:6,vars:22,consts:[["rootmenu",""],["menubutton",""],[3,"class","pBind",4,"ngIf"],[4,"ngIf"],[4,"ngTemplateOutlet"],["pMegaMenuSub","",3,"itemClick","menuFocus","menuBlur","menuKeydown","menuMouseDown","itemMouseEnter","itemTemplate","items","menuId","root","orientation","ariaLabel","disabled","tabindex","activeItem","level","ariaLabelledBy","focusedItemId","mobileActive","queryMatches","scrollHeight","pt","unstyled"],[3,"pBind"],["role","button","tabindex","0",3,"class","pBind","click","keydown",4,"ngIf"],["role","button","tabindex","0",3,"click","keydown","pBind"],["data-p-icon","bars",3,"pBind",4,"ngIf"],["data-p-icon","bars",3,"pBind"]],template:function(t,n){if(t&1){let r=T();S(0,Cr,2,4,"div",2)(1,Sr,2,1,"ng-container",3)(2,kr,1,0,"ng-container",4),c(3,"ul",5,0),C("itemClick",function(y){return u(r),h(n.onItemClick(y))})("menuFocus",function(y){return u(r),h(n.onMenuFocus(y))})("menuBlur",function(y){return u(r),h(n.onMenuBlur(y))})("menuKeydown",function(y){return u(r),h(n.onKeyDown(y))})("menuMouseDown",function(y){return u(r),h(n.onMenuMouseDown(y))})("itemMouseEnter",function(y){return u(r),h(n.onItemMouseEnter(y))}),m(),S(5,Er,2,4,"div",2)}t&2&&(l("ngIf",n.startTemplate||n._startTemplate),a(),l("ngIf",!n.buttonTemplate&&!n._buttonTemplate),a(),l("ngTemplateOutlet",n.buttonTemplate||n._buttonTemplate),a(),l("itemTemplate",n.itemTemplate||n._itemTemplate)("items",n.processedItems)("menuId",n.id)("root",!0)("orientation",n.orientation)("ariaLabel",n.ariaLabel)("disabled",n.disabled)("tabindex",n.disabled?-1:n.tabindex)("activeItem",n.activeItem())("level",0)("ariaLabelledBy",n.ariaLabelledBy)("focusedItemId",n.focused?n.focusedItemId:void 0)("mobileActive",n.mobileActive)("queryMatches",n.queryMatches())("scrollHeight",n.scrollHeight)("pt",n.pt())("unstyled",n.unstyled()),x("id",n.id+"_list"),a(2),l("ngIf",n.endTemplate||n._endTemplate))},dependencies:[L,Me,Ne,ne,Lr,oe,D,On,vt,Q],encapsulation:2,changeDetection:0})}return i})(),qn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=xe({type:i});static \u0275inj=Ce({imports:[jn,Q,Q]})}return i})();var Br=i=>({value:i}),Ht=class i{count=4;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=M({type:i,selectors:[["notifications"]],decls:52,vars:18,consts:[[1,"list-none","p-0","m-0"],[1,"px-4","py-1"],[3,"innerHTML"],[1,"p-4"],[1,"flex","items-center"],["src","images/user.jpg","width","25"],[1,"flex","flex-col","ml-4","flex-1"],[1,"flex","items-center","justify-between","mb-1"],[1,"font-bold"],[1,"text-sm","leading-normal"],[1,"fs-small","font-bold"]],template:function(e,t){e&1&&(O(0,"ul",0)(1,"li",1),Z(2,"span",2),b(3,"translate"),$(),O(4,"li",3)(5,"div",4),Z(6,"img",5),O(7,"div",6)(8,"div",7)(9,"span",8),f(10,"Jerome Bell"),$(),O(11,"small"),f(12),b(13,"translate"),$()(),O(14,"span",9),f(15,"Lorem ipsum dolor sit amet."),$()()()(),O(16,"li",3)(17,"div",4),Z(18,"img",5),O(19,"div",6)(20,"div",7)(21,"span",10),f(22,"Cameron Williamson"),$(),O(23,"small"),f(24),b(25,"translate"),$()(),O(26,"span",9),f(27,"Lorem ipsum dolor, sit amet consectetur adipisicing elit."),$()()()(),O(28,"li",3)(29,"div",4),Z(30,"img",5),O(31,"div",6)(32,"div",7)(33,"span",10),f(34,"Anna Miles"),$(),O(35,"small"),f(36),b(37,"translate"),$()(),O(38,"span",9),f(39,"Lorem ipsum dolor sit amet."),$()()()(),O(40,"li",3)(41,"div",4),Z(42,"img",5),O(43,"div",6)(44,"div",7)(45,"span",10),f(46,"Arlene Mccoy"),$(),O(47,"small"),f(48),b(49,"translate"),$()(),O(50,"span",9),f(51,"Lorem ipsum dolor sit amet, consectetur adipisicing."),$()()()()()),e&2&&(a(2),we("innerHTML",Oi(3,5,"notifications.count",Ae(16,Br,t.count)),gt),a(10),N("42 min ",_(13,8,"time.ago")),a(12),N("48 min ",_(25,10,"time.ago")),a(12),N("50 min ",_(37,12,"time.ago")),a(12),N("60 min ",_(49,14,"time.ago")))},dependencies:[te,ee],encapsulation:2})};var zt=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=M({type:i,selectors:[["tools"]],decls:31,vars:18,consts:[[1,"flex","flex-wrap"],[1,"w-4/12","flex","flex-col","items-center","p-4"],["pButton","","pRipple","","rounded","","icon","ph ph-image",1,"mb-2"],["pButton","","pRipple","","rounded","","severity","success","icon","ph ph-file-pdf",1,"mb-2"],["pButton","","pRipple","","rounded","","severity","contrast","icon","ph ph-money",1,"mb-2"],["pButton","","pRipple","","rounded","","severity","warn","icon","ph ph-gear",1,"mb-2"],["pButton","","pRipple","","rounded","","severity","help","icon","ph ph-key",1,"mb-2"],["pButton","","pRipple","","rounded","","severity","info","icon","ph ph-circles-three",1,"mb-2"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"div",1),d(2,"button",2),c(3,"span"),f(4),b(5,"translate"),m()(),c(6,"div",1),d(7,"button",3),c(8,"span"),f(9),b(10,"translate"),m()(),c(11,"div",1),d(12,"button",4),c(13,"span"),f(14),b(15,"translate"),m()(),c(16,"div",1),d(17,"button",5),c(18,"span"),f(19),b(20,"translate"),m()(),c(21,"div",1),d(22,"button",6),c(23,"span"),f(24),b(25,"translate"),m()(),c(26,"div",1),d(27,"button",7),c(28,"span"),f(29),b(30,"translate"),m()()()),e&2&&(a(4),B(_(5,6,"products.label")),a(5),B(_(10,8,"analytics.reports")),a(5),B(_(15,10,"balance.label")),a(5),B(_(20,12,"settings.label")),a(5),B(_(25,14,"security.credentials")),a(5),B(_(30,16,"teams.label")))},dependencies:[Ge,Rt,te,ee],encapsulation:2})};var Dr=["searchInput"],Or=["menuButton"],Vr=["mobileMenuButton"],Rr=["app-topbar",""],Ct=class i{layoutService=g(pe);cdr=g(Vi);isFullScreen=!1;searchInput;menuButton;mobileMenuButton;ngOnInit(){document.addEventListener("fullscreenchange",()=>{this.isFullScreen=!!document.fullscreenElement,this.cdr.detectChanges()})}onMenuButtonClick(){this.layoutService.onMenuToggle()}onRightMenuButtonClick(){this.layoutService.openRightMenu()}toggleConfigSidebar(){let o=this.layoutService.layoutState();this.layoutService.isSidebarActive()&&(o.overlayMenuActive=!1,o.overlaySubmenuActive=!1,o.staticMenuMobileActive=!1,o.menuHoverActive=!1,o.configSidebarVisible=!1),o.configSidebarVisible=!o.configSidebarVisible,this.layoutService.layoutState.set(k({},o))}focusSearchInput(){setTimeout(()=>{this.searchInput.nativeElement.focus()},150)}onTopbarMenuToggle(){this.layoutService.layoutState.update(o=>F(k({},o),{topbarMenuActive:!o.topbarMenuActive}))}toggleFullScreen(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=M({type:i,selectors:[["","app-topbar",""]],viewQuery:function(e,t){if(e&1&&Y(Dr,5)(Or,5)(Vr,5),e&2){let n;I(n=w())&&(t.searchInput=n.first),I(n=w())&&(t.menuButton=n.first),I(n=w())&&(t.mobileMenuButton=n.first)}},hostAttrs:[1,"layout-topbar"],attrs:Rr,decls:52,vars:28,consts:[["menuButton",""],["mobileMenuButton",""],["searchInput",""],[1,"layout-topbar-start"],["routerLink","/",1,"layout-topbar-logo"],[1,"layout-topbar-logo-full","flex","items-center","gap-2"],[1,"ph-duotone","ph-chalkboard-simple","logo-icon"],[1,"font-black","whitespace-nowrap","text-primary"],[1,"layout-topbar-logo-slim"],["tooltipPosition","bottom","showDelay","300",1,"layout-menu-button",3,"click","pTooltip"],[1,"ph","ph-list"],[1,"app-config-mobile-button"],[1,"layout-topbar-mobile-button",3,"click"],[1,"ph-fill","ph-dots-three-outline-vertical"],[1,"layout-topbar-end"],[1,"layout-topbar-actions-start"],[1,"layout-topbar-actions-end"],[1,"layout-topbar-items"],["tooltipPosition","bottom","showDelay","300",3,"click","pTooltip"],[1,"ph","ph-corners-out"],[1,"layout-topbar-search"],["pStyleClass","@next","enterFromClass","hidden!","enterActiveClass","animate-scalein","leaveToClass","hidden!","leaveActiveClass","animate-fadeout","tooltipPosition","bottom","showDelay","300",3,"click","hideOnOutsideClick","pTooltip"],[1,"ph","ph-magnifying-glass"],[1,"layout-search-panel","hidden!","p-input-filled"],["type","text","pInputText","",3,"placeholder"],["pButton","","pRipple","","type","button","icon","ph ph-x","rounded","","text","","pStyleClass",".layout-search-panel","leaveToClass","hidden!","leaveActiveClass","animate-fadeout"],["pStyleClass","@next","enterFromClass","hidden","enterActiveClass","animate-scalein","leaveToClass","hidden","leaveActiveClass","animate-fadeout","tooltipPosition","bottom","showDelay","300",3,"hideOnOutsideClick","pTooltip"],[1,"ph","ph-bell","align-middle!"],[1,"hidden"],[1,"ph","ph-grid-four"],["tooltipPosition","left","showDelay","300",3,"click","pTooltip"],[1,"ph","ph-faders"]],template:function(e,t){if(e&1){let n=T();c(0,"div",3)(1,"a",4)(2,"div",5),d(3,"i",6),c(4,"span",7),f(5,"PM SYSTEMS"),m()(),c(6,"div",8),d(7,"i",6),m()(),c(8,"a",9,0),b(10,"translate"),b(11,"translate"),b(12,"translate"),C("click",function(){return u(n),h(t.onMenuButtonClick())}),d(13,"i",10),m(),d(14,"button",11),c(15,"a",12,1),C("click",function(){return u(n),h(t.onTopbarMenuToggle())}),d(17,"i",13),m()(),c(18,"div",14),d(19,"div",15),c(20,"div",16)(21,"ul",17)(22,"li")(23,"a",18),b(24,"translate"),C("click",function(){return u(n),h(t.toggleFullScreen())}),d(25,"i",19),m()(),c(26,"li",20)(27,"a",21),b(28,"translate"),C("click",function(){return u(n),h(t.focusSearchInput())}),d(29,"i",22),m(),c(30,"div",23),d(31,"i",22)(32,"input",24,2),b(34,"translate"),d(35,"button",25),m()(),c(36,"li")(37,"a",26),b(38,"translate"),d(39,"i",27),m(),c(40,"div",28),d(41,"notifications"),m()(),c(42,"li")(43,"a",26),b(44,"translate"),d(45,"i",29),m(),c(46,"div",28),d(47,"tools"),m()(),c(48,"li")(49,"a",30),b(50,"translate"),C("click",function(){return u(n),h(t.toggleConfigSidebar())}),d(51,"i",31),m()()()()()}e&2&&(a(8),l("pTooltip",_(10,10,"actions.hide")+"/"+_(11,12,"actions.show")+" "+_(12,14,"menu.label")),a(15),l("pTooltip",_(24,16,t.isFullScreen?"screen.exit":"screen.full")),a(4),l("hideOnOutsideClick",!0)("pTooltip",_(28,18,"actions.search")),a(5),l("placeholder",_(34,20,"actions.search")),a(5),l("hideOnOutsideClick",!0)("pTooltip",_(38,22,"notifications.label")),a(6),l("hideOnOutsideClick",!0)("pTooltip",_(44,24,"tools.label")),a(6),l("pTooltip",_(50,26,"settings.preferences")))},dependencies:[ne,at,L,Dn,Bn,mt,pt,nn,Ge,Rt,qn,vt,Ht,zt,oe,ce,te,ee],styles:["[_nghost-%COMP%]     .p-overlaybadge .p-badge{outline-width:0px}"]})};var Qn=`
    .p-drawer {
        display: flex;
        flex-direction: column;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
        background: dt('drawer.background');
        color: dt('drawer.color');
        border-style: solid;
        border-color: dt('drawer.border.color');
        box-shadow: dt('drawer.shadow');
    }

    .p-drawer-content {
        overflow-y: auto;
        flex-grow: 1;
        padding: dt('drawer.content.padding');
    }

    .p-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('drawer.header.padding');
    }

    .p-drawer-footer {
        padding: dt('drawer.footer.padding');
    }

    .p-drawer-title {
        font-weight: dt('drawer.title.font.weight');
        font-size: dt('drawer.title.font.size');
    }

    .p-drawer-full .p-drawer {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
        border-width: 1px;
    }

    .p-drawer-left .p-drawer-enter-active {
        animation: p-animate-drawer-enter-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-left .p-drawer-leave-active {
        animation: p-animate-drawer-leave-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-right .p-drawer-enter-active {
        animation: p-animate-drawer-enter-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-right .p-drawer-leave-active {
        animation: p-animate-drawer-leave-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-top .p-drawer-enter-active {
        animation: p-animate-drawer-enter-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-top .p-drawer-leave-active {
        animation: p-animate-drawer-leave-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-bottom .p-drawer-enter-active {
        animation: p-animate-drawer-enter-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-bottom .p-drawer-leave-active {
        animation: p-animate-drawer-leave-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-full .p-drawer-enter-active {
        animation: p-animate-drawer-enter-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-full .p-drawer-leave-active {
        animation: p-animate-drawer-leave-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    
    .p-drawer-left .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-end-width: 1px;
    }

    .p-drawer-right .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-start-width: 1px;
    }

    .p-drawer-top .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-end-width: 1px;
    }

    .p-drawer-bottom .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-start-width: 1px;
    }

    .p-drawer-left .p-drawer-content,
    .p-drawer-right .p-drawer-content,
    .p-drawer-top .p-drawer-content,
    .p-drawer-bottom .p-drawer-content {
        width: 100%;
        height: 100%;
    }

    .p-drawer-open {
        display: flex;
    }

    .p-drawer-mask:dir(rtl) {
        flex-direction: row-reverse;
    }

    @keyframes p-animate-drawer-enter-left {
        from {
            transform: translate3d(-100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-left {
        to {
            transform: translate3d(-100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-right {
        from {
            transform: translate3d(100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-right {
        to {
            transform: translate3d(100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-top {
        from {
            transform: translate3d(0px, -100%, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-top {
        to {
            transform: translate3d(0px, -100%, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-bottom {
        from {
            transform: translate3d(0px, 100%, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-bottom {
        to {
            transform: translate3d(0px, 100%, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-full {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-drawer-leave-full {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;var Nr=["header"],Hr=["footer"],zr=["content"],$r=["closeicon"],jr=["headless"],qr=["container"],Kr=["closeButton"],Qr=["*"];function Gr(i,o){i&1&&ae(0)}function Ur(i,o){if(i&1&&S(0,Gr,1,0,"ng-container",4),i&2){let e=p(2);l("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function Zr(i,o){i&1&&ae(0)}function Wr(i,o){if(i&1&&(c(0,"div",9),f(1),m()),i&2){let e=p(3);v(e.cx("title")),l("pBind",e.ptm("title")),a(),B(e.header)}}function Xr(i,o){i&1&&(z(),d(0,"svg",12)),i&2&&x("data-pc-section","closeicon")}function Yr(i,o){}function Jr(i,o){i&1&&S(0,Yr,0,0,"ng-template")}function ea(i,o){if(i&1&&S(0,Xr,1,1,"svg",11)(1,Jr,1,0,null,4),i&2){let e=p(4);l("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),a(),l("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function ta(i,o){if(i&1){let e=T();c(0,"p-button",10),C("onClick",function(n){u(e);let r=p(3);return h(r.close(n))})("keydown.enter",function(n){u(e);let r=p(3);return h(r.close(n))}),S(1,ea,2,2,"ng-template",null,1,Fe),m()}if(i&2){let e=p(3);l("pt",e.ptm("pcCloseButton"))("ngClass",e.cx("pcCloseButton"))("buttonProps",e.closeButtonProps)("ariaLabel",e.ariaCloseLabel)("unstyled",e.unstyled()),x("data-pc-group-section","iconcontainer")}}function ia(i,o){i&1&&ae(0)}function na(i,o){i&1&&ae(0)}function oa(i,o){if(i&1&&(he(0),c(1,"div",5),S(2,na,1,0,"ng-container",4),m(),fe()),i&2){let e=p(3);a(),l("pBind",e.ptm("footer"))("ngClass",e.cx("footer")),x("data-pc-section","footer"),a(),l("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function ra(i,o){if(i&1&&(c(0,"div",5),S(1,Zr,1,0,"ng-container",4)(2,Wr,2,4,"div",6)(3,ta,3,6,"p-button",7),m(),c(4,"div",5),Bi(5),S(6,ia,1,0,"ng-container",4),m(),S(7,oa,3,4,"ng-container",8)),i&2){let e=p(2);l("pBind",e.ptm("header"))("ngClass",e.cx("header")),x("data-pc-section","header"),a(),l("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),a(),l("ngIf",e.header),a(),l("ngIf",e.showCloseIcon&&e.closable),a(),l("pBind",e.ptm("content"))("ngClass",e.cx("content")),x("data-pc-section","content"),a(2),l("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),a(),l("ngIf",e.footerTemplate||e._footerTemplate)}}function aa(i,o){if(i&1){let e=T();c(0,"div",3,0),C("pMotionOnBeforeEnter",function(n){u(e);let r=p();return h(r.onBeforeEnter(n))})("pMotionOnAfterLeave",function(n){u(e);let r=p();return h(r.onAfterLeave(n))})("keydown",function(n){u(e);let r=p();return h(r.onKeyDown(n))}),E(2,Ur,1,1,"ng-container")(3,ra,8,11),m()}if(i&2){let e=p();Ee(e.style),v(e.cn(e.cx("root"),e.styleClass)),l("pBind",e.ptm("root"))("pMotion",e.visible)("pMotionAppear",!0)("pMotionEnterActiveClass",e.$enterAnimation())("pMotionLeaveActiveClass",e.$leaveAnimation())("pMotionOptions",e.computedMotionOptions()),x("data-p",e.dataP)("data-p-open",e.visible),a(2),A(e.headlessTemplate||e._headlessTemplate?2:3)}}var sa=`
${Qn}

/** For PrimeNG **/
.p-drawer {
    position: fixed;
}

.p-drawer-left {
    top: 0;
    left: 0;
    width: 20rem;
    height: 100%;
    border-inline-end-width: 1px;
}

.p-drawer-right {
    top: 0;
    right: 0;
    width: 20rem;
    height: 100%;
    border-inline-start-width: 1px;
}

.p-drawer-top {
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    border-block-end-width: 1px;
}

.p-drawer-bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    border-block-start-width: 1px;
}

.p-drawer-full {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-transition: none;
    transition: none;
}

/* Animations */
.p-drawer-enter-left {
    animation: p-animate-drawer-enter-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-left {
    animation: p-animate-drawer-leave-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-enter-right {
    animation: p-animate-drawer-enter-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-right {
    animation: p-animate-drawer-leave-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-enter-top {
    animation: p-animate-drawer-enter-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-top {
    animation: p-animate-drawer-leave-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-enter-bottom {
    animation: p-animate-drawer-enter-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-bottom {
    animation: p-animate-drawer-leave-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-enter-full {
    animation: p-animate-drawer-enter-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-full {
    animation: p-animate-drawer-leave-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}
`,la={mask:({instance:i})=>["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter-active":i.modal},{"p-drawer-full":i.fullScreen()}],root:({instance:i})=>["p-drawer p-component",{"p-drawer-full":i.fullScreen(),"p-drawer-open":i.visible},`p-drawer-${i.position()}`],header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},Gn=(()=>{class i extends De{name="drawer";style=sa;classes=la;static \u0275fac=(()=>{let e;return function(n){return(e||(e=j(i)))(n||i)}})();static \u0275prov=X({token:i,factory:i.\u0275fac})}return i})();var Un=new ie("DRAWER_INSTANCE"),xt=(()=>{class i extends Oe{componentName="Drawer";$pcDrawer=g(Un,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(D,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}appendTo=me(void 0);motionOptions=me(void 0);computedMotionOptions=H(()=>k(k({},this.ptm("motion")),this.motionOptions()));blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible??!1}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}position=me("left");fullScreen=me(!1);$enterAnimation=H(()=>this.fullScreen()?"p-drawer-enter-full":`p-drawer-enter-${this.position()}`);$leaveAnimation=H(()=>this.fullScreen()?"p-drawer-leave-full":`p-drawer-leave-${this.position()}`);header;maskStyle;closable=!0;onShow=new U;onHide=new U;visibleChange=new U;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;modalVisible=!1;container;mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=g(Gn);onAfterViewInit(){this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;$appendTo=H(()=>this.appendTo()||this.config.overlayAppendTo());_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.container?.setAttribute(this.$attrSelector,""),this.autoZIndex&&le.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll('[data-p-open="true"]'),t=e.length,n=t==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[t-1].style.zIndex)-1);if(!this.mask){if(this.mask=this.renderer.createElement("div"),this.mask){let r=`z-index: ${n};${this.getMaskStyle()}`;lt(this.mask,"style",r),lt(this.mask,"data-p",this.dataP),ve(this.mask,this.cx("mask"))}this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",r=>{this.dismissible&&this.close(r)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&rn()}}getMaskStyle(){return this.maskStyle?Object.entries(this.maskStyle).map(([e,t])=>`${e}: ${t}`).join("; "):""}disableModality(){this.mask&&(!this.$unstyled()&&Se(this.mask,"p-overlay-mask-enter-active"),!this.$unstyled()&&ve(this.mask,"p-overlay-mask-leave-active"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&an(),this.unbindAnimationEndListener(),this.mask=null}onBeforeEnter(e){this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener()}onAfterLeave(){this.hide(!1),le.clear(this.container),this.unbindGlobalListeners(),this.modalVisible=!1,this.container=null}appendContainer(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?si(this.document.body,this.container):si(this.$appendTo(),this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",t=>{t.which==27&&parseInt(this.container?.style.zIndex)===le.get(this.container)&&this.close(t)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}onDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.$appendTo()&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&le.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}get dataP(){return this.cn({"full-screen":this.position()==="full",[this.position()]:this.position(),open:this.visible,modal:this.modal})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=j(i)))(n||i)}})();static \u0275cmp=M({type:i,selectors:[["p-drawer"]],contentQueries:function(t,n,r){if(t&1&&qe(r,Nr,4)(r,Hr,4)(r,zr,4)(r,$r,4)(r,jr,4)(r,Ke,4),t&2){let s;I(s=w())&&(n.headerTemplate=s.first),I(s=w())&&(n.footerTemplate=s.first),I(s=w())&&(n.contentTemplate=s.first),I(s=w())&&(n.closeIconTemplate=s.first),I(s=w())&&(n.headlessTemplate=s.first),I(s=w())&&(n.templates=s)}},viewQuery:function(t,n){if(t&1&&Y(qr,5)(Kr,5),t&2){let r;I(r=w())&&(n.containerViewChild=r.first),I(r=w())&&(n.closeButtonViewChild=r.first)}},inputs:{appendTo:[1,"appendTo"],motionOptions:[1,"motionOptions"],blockScroll:[2,"blockScroll","blockScroll",P],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",P],baseZIndex:[2,"baseZIndex","baseZIndex",de],modal:[2,"modal","modal",P],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",P],showCloseIcon:[2,"showCloseIcon","showCloseIcon",P],closeOnEscape:[2,"closeOnEscape","closeOnEscape",P],transitionOptions:"transitionOptions",visible:"visible",position:[1,"position"],fullScreen:[1,"fullScreen"],header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",P]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[ge([Gn,{provide:Un,useExisting:i},{provide:ke,useExisting:i}]),Ie([D]),K],ngContentSelectors:Qr,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary","pFocusTrap","",3,"pBind","pMotion","pMotionAppear","pMotionEnterActiveClass","pMotionLeaveActiveClass","pMotionOptions","class","style"],["role","complementary","pFocusTrap","",3,"pMotionOnBeforeEnter","pMotionOnAfterLeave","keydown","pBind","pMotion","pMotionAppear","pMotionEnterActiveClass","pMotionLeaveActiveClass","pMotionOptions"],[4,"ngTemplateOutlet"],[3,"pBind","ngClass"],[3,"pBind","class",4,"ngIf"],[3,"pt","ngClass","buttonProps","ariaLabel","unstyled","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"pBind"],[3,"onClick","keydown.enter","pt","ngClass","buttonProps","ariaLabel","unstyled"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(t,n){t&1&&(Li(),E(0,aa,4,13,"div",2)),t&2&&A(n.modalVisible?0:-1)},dependencies:[L,be,Me,Ne,dt,Vt,Q,D,In,xn,ut,Ft],encapsulation:2,changeDetection:0})}return i})(),$t=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=xe({type:i});static \u0275inj=Ce({imports:[xt,Q,Q]})}return i})();var Wn=`
    .p-colorpicker {
        display: inline-block;
        position: relative;
    }

    .p-colorpicker-dragging {
        cursor: pointer;
    }

    .p-colorpicker-preview {
        width: dt('colorpicker.preview.width');
        height: dt('colorpicker.preview.height');
        padding: 0;
        border: 0 none;
        border-radius: dt('colorpicker.preview.border.radius');
        transition:
            background dt('colorpicker.transition.duration'),
            color dt('colorpicker.transition.duration'),
            border-color dt('colorpicker.transition.duration'),
            outline-color dt('colorpicker.transition.duration'),
            box-shadow dt('colorpicker.transition.duration');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-colorpicker-preview:enabled:focus-visible {
        border-color: dt('colorpicker.preview.focus.border.color');
        box-shadow: dt('colorpicker.preview.focus.ring.shadow');
        outline: dt('colorpicker.preview.focus.ring.width') dt('colorpicker.preview.focus.ring.style') dt('colorpicker.preview.focus.ring.color');
        outline-offset: dt('colorpicker.preview.focus.ring.offset');
    }

    .p-colorpicker-panel {
        background: dt('colorpicker.panel.background');
        border: 1px solid dt('colorpicker.panel.border.color');
        border-radius: dt('colorpicker.panel.border.radius');
        box-shadow: dt('colorpicker.panel.shadow');
        width: 193px;
        height: 166px;
        position: absolute;
        top: 0;
        left: 0;
    }

    .p-colorpicker-panel-inline {
        box-shadow: none;
        position: static;
    }

    .p-colorpicker-content {
        position: relative;
    }

    .p-colorpicker-color-selector {
        width: 150px;
        height: 150px;
        inset-block-start: 8px;
        inset-inline-start: 8px;
        position: absolute;
    }

    .p-colorpicker-color-background {
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    }

    .p-colorpicker-color-handle {
        position: absolute;
        inset-block-start: 0px;
        inset-inline-start: 150px;
        border-radius: 100%;
        width: 10px;
        height: 10px;
        border-width: 1px;
        border-style: solid;
        margin: -5px 0 0 -5px;
        cursor: pointer;
        opacity: 0.85;
        border-color: dt('colorpicker.handle.color');
    }

    .p-colorpicker-hue {
        width: 17px;
        height: 150px;
        inset-block-start: 8px;
        inset-inline-start: 167px;
        position: absolute;
        opacity: 0.85;
        background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red);
    }

    .p-colorpicker-hue-handle {
        position: absolute;
        inset-block-start: 150px;
        inset-inline-start: 0px;
        width: 21px;
        margin-inline-start: -2px;
        margin-block-start: -5px;
        height: 10px;
        border-width: 2px;
        border-style: solid;
        opacity: 0.85;
        cursor: pointer;
        border-color: dt('colorpicker.handle.color');
    }
`;var ca=["input"],pa=["overlay"],ma=["colorSelector"],da=["colorHandle"],ua=["hue"],ha=["hueHandle"];function fa(i,o){if(i&1){let e=T();c(0,"input",9,2),C("click",function(){u(e);let n=p();return h(n.onInputClick())})("keydown",function(n){u(e);let r=p();return h(r.onInputKeydown(n))})("focus",function(){u(e);let n=p();return h(n.onInputFocus())}),m()}if(i&2){let e=p();v(e.cx("preview")),Te("background-color",e.inputBgColor),l("pAutoFocus",e.autofocus)("pBind",e.ptm("preview")),x("tabindex",e.tabindex)("disabled",e.$disabled()?"":void 0)("id",e.inputId)("aria-label",e.ariaLabel)}}function ga(i,o){if(i&1){let e=T();c(0,"div",10)(1,"div",10)(2,"div",11,3),C("touchstart",function(n){u(e);let r=p();return h(r.onColorDragStart(n))})("touchmove",function(n){u(e);let r=p();return h(r.onDrag(n))})("touchend",function(){u(e);let n=p();return h(n.onDragEnd())})("mousedown",function(n){u(e);let r=p();return h(r.onColorMousedown(n))}),c(4,"div",10),d(5,"div",10,4),m()(),c(7,"div",12,5),C("mousedown",function(n){u(e);let r=p();return h(r.onHueMousedown(n))})("touchstart",function(n){u(e);let r=p();return h(r.onHueDragStart(n))})("touchmove",function(n){u(e);let r=p();return h(r.onDrag(n))})("touchend",function(){u(e);let n=p();return h(n.onDragEnd())}),d(9,"div",10,6),m()()()}if(i&2){let e=p();v(e.cx("panel")),l("pBind",e.ptm("panel")),a(),v(e.cx("content")),l("pBind",e.ptm("content")),a(),v(e.cx("colorSelector")),l("pBind",e.ptm("colorSelector")),a(2),v(e.cx("colorBackground")),l("pBind",e.ptm("colorBackground")),a(),v(e.cx("colorHandle")),l("pBind",e.ptm("colorHandle")),a(2),v(e.cx("hue")),l("pBind",e.ptm("hue")),a(2),v(e.cx("hueHandle")),l("pBind",e.ptm("hueHandle"))}}var ba={root:({instance:i})=>["p-colorpicker p-component",{"p-colorpicker-overlay":!i.inline,"p-colorpicker-dragging":i.colorDragging||i.hueDragging}],preview:({instance:i})=>["p-colorpicker-preview",{"p-disabled":i.$disabled()}],panel:({instance:i})=>["p-colorpicker-panel",{"p-colorpicker-panel-inline":i.inline,"p-disabled":i.$disabled()}],content:"p-colorpicker-content",colorSelector:"p-colorpicker-color-selector",colorBackground:"p-colorpicker-color-background",colorHandle:"p-colorpicker-color-handle",hue:"p-colorpicker-hue",hueHandle:"p-colorpicker-hue-handle"},Xn=(()=>{class i extends De{name="colorpicker";style=Wn;classes=ba;static \u0275fac=(()=>{let e;return function(n){return(e||(e=j(i)))(n||i)}})();static \u0275prov=X({token:i,factory:i.\u0275fac})}return i})();var _a={provide:Ji,useExisting:St(()=>jt),multi:!0},Yn=new ie("COLORPICKER_INSTANCE"),jt=(()=>{class i extends yn{overlayService;componentName="ColorPicker";$pcColorPicker=g(Yn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(D,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";inline;format="hex";tabindex;inputId;autoZIndex=!0;autofocus;defaultColor="ff0000";appendTo=me(void 0);overlayOptions=me(void 0);motionOptions=me(void 0);onChange=new U;onShow=new U;onHide=new U;inputViewChild;overlayViewChild;$appendTo=H(()=>this.appendTo()||this.config.overlayAppendTo());value={h:0,s:100,b:100};inputBgColor;shown;overlayVisible;documentMousemoveListener;documentMouseupListener;documentHueMoveListener;scrollHandler;colorDragging;hueDragging;overlay;colorSelectorViewChild;colorHandleViewChild;hueViewChild;hueHandleViewChild;_componentStyle=g(Xn);constructor(e){super(),this.overlayService=e}set colorSelector(e){this.colorSelectorViewChild=e}set colorHandle(e){this.colorHandleViewChild=e}set hue(e){this.hueViewChild=e}set hueHandle(e){this.hueHandleViewChild=e}get ariaLabel(){return this.config?.getTranslation(pi.ARIA)[pi.SELECT_COLOR]}onHueMousedown(e){this.$disabled()||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.hueDragging=!0,this.pickHue(e))}onHueDragStart(e){this.$disabled()||(this.hueDragging=!0,this.pickHue(e,e.changedTouches[0]))}onColorDragStart(e){this.$disabled()||(this.colorDragging=!0,this.pickColor(e,e.changedTouches[0]),this.el.nativeElement.setAttribute("p-colorpicker-dragging","true"))}pickHue(e,t){let n=t?t.pageY:e.pageY,r=this.hueViewChild?.nativeElement.getBoundingClientRect().top+(this.document.defaultView.pageYOffset||this.document.documentElement.scrollTop||this.document.body.scrollTop||0);this.value=this.validateHSB({h:Math.floor(360*(150-Math.max(0,Math.min(150,n-r)))/150),s:this.value.s,b:this.value.b}),this.updateColorSelector(),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}onColorMousedown(e){this.$disabled()||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.colorDragging=!0,this.pickColor(e))}onDrag(e){this.colorDragging&&(this.pickColor(e,e.changedTouches[0]),e.preventDefault()),this.hueDragging&&(this.pickHue(e,e.changedTouches[0]),e.preventDefault())}onDragEnd(){this.colorDragging=!1,this.hueDragging=!1,this.el.nativeElement.setAttribute("p-colorpicker-dragging","false"),this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()}pickColor(e,t){let n=t?t.pageX:e.pageX,r=t?t.pageY:e.pageY,s=this.colorSelectorViewChild?.nativeElement.getBoundingClientRect(),y=s.top+(this.document.defaultView.pageYOffset||this.document.documentElement.scrollTop||this.document.body.scrollTop||0),V=s.left+this.document.body.scrollLeft,G=Math.floor(100*Math.max(0,Math.min(150,n-V))/150),ye=Math.floor(100*(150-Math.max(0,Math.min(150,r-y)))/150);this.value=this.validateHSB({h:this.value.h,s:G,b:ye}),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}getValueToUpdate(){let e;switch(this.format){case"hex":e="#"+this.HSBtoHEX(this.value);break;case"rgb":e=this.HSBtoRGB(this.value);break;case"hsb":e=this.value;break}return e}updateModel(){this.onModelChange(this.getValueToUpdate()),this.cd.markForCheck()}updateColorSelector(){if(this.colorSelectorViewChild){let e={};e.s=100,e.b=100,e.h=this.value.h,this.colorSelectorViewChild.nativeElement.style.backgroundColor="#"+this.HSBtoHEX(e)}}updateUI(){this.colorHandleViewChild&&this.hueHandleViewChild?.nativeElement&&(this.colorHandleViewChild.nativeElement.style.left=Math.floor(150*this.value.s/100)+"px",this.colorHandleViewChild.nativeElement.style.top=Math.floor(150*(100-this.value.b)/100)+"px",this.hueHandleViewChild.nativeElement.style.top=Math.floor(150-150*this.value.h/360)+"px"),this.inputBgColor="#"+this.HSBtoHEX(this.value)}onInputFocus(){this.onModelTouched()}show(){this.overlayVisible=!0,this.cd.markForCheck()}onOverlayBeforeEnter(){this.inline||(this.updateColorSelector(),this.updateUI(),this.onShow.emit({}))}onOverlayAfterLeave(){this.inline||this.onHide.emit({})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onInputClick(){this.togglePanel()}togglePanel(){this.overlayVisible?this.hide():this.show()}onInputKeydown(e){switch(e.code){case"Space":this.togglePanel(),e.preventDefault();break;case"Escape":case"Tab":this.hide();break;default:break}}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement})}bindDocumentMousemoveListener(){if(!this.documentMousemoveListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentMousemoveListener=this.renderer.listen(e,"mousemove",t=>{this.colorDragging&&this.pickColor(t),this.hueDragging&&this.pickHue(t)})}}unbindDocumentMousemoveListener(){this.documentMousemoveListener&&(this.documentMousemoveListener(),this.documentMousemoveListener=null)}bindDocumentMouseupListener(){if(!this.documentMouseupListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentMouseupListener=this.renderer.listen(e,"mouseup",()=>{this.colorDragging=!1,this.hueDragging=!1,this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()})}}unbindDocumentMouseupListener(){this.documentMouseupListener&&(this.documentMouseupListener(),this.documentMouseupListener=null)}validateHSB(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}}validateRGB(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}}validateHEX(e){var t=6-e.length;if(t>0){for(var n=[],r=0;r<t;r++)n.push("0");n.push(e),e=n.join("")}return e}HEXtoRGB(e){if(!e||typeof e!="string")return{r:0,g:0,b:0};let t=parseInt(e.indexOf("#")>-1?e.substring(1):e,16);return{r:t>>16,g:(t&65280)>>8,b:t&255}}HEXtoHSB(e){return this.RGBtoHSB(this.HEXtoRGB(e))}RGBtoHSB(e){var t={h:0,s:0,b:0},n=Math.min(e.r,e.g,e.b),r=Math.max(e.r,e.g,e.b),s=r-n;return t.b=r,t.s=r!=0?255*s/r:0,t.s!=0?e.r==r?t.h=(e.g-e.b)/s:e.g==r?t.h=2+(e.b-e.r)/s:t.h=4+(e.r-e.g)/s:t.h=-1,t.h*=60,t.h<0&&(t.h+=360),t.s*=100/255,t.b*=100/255,t}HSBtoRGB(e){var t={r:0,g:0,b:0};let n=e.h,r=e.s*255/100,s=e.b*255/100;if(r==0)t={r:s,g:s,b:s};else{let y=s,V=(255-r)*s/255,G=(y-V)*(n%60)/60;n==360&&(n=0),n<60?(t.r=y,t.b=V,t.g=V+G):n<120?(t.g=y,t.b=V,t.r=y-G):n<180?(t.g=y,t.r=V,t.b=V+G):n<240?(t.b=y,t.r=V,t.g=y-G):n<300?(t.b=y,t.g=V,t.r=V+G):n<360?(t.r=y,t.g=V,t.b=y-G):(t.r=0,t.g=0,t.b=0)}return{r:Math.round(t.r),g:Math.round(t.g),b:Math.round(t.b)}}RGBtoHEX(e){var t=[e.r.toString(16),e.g.toString(16),e.b.toString(16)];for(var n in t)t[n].length==1&&(t[n]="0"+t[n]);return t.join("")}HSBtoHEX(e){return this.RGBtoHEX(this.HSBtoRGB(e))}onAfterViewInit(){this.inline&&(this.updateColorSelector(),this.updateUI())}writeControlValue(e){if(e)switch(this.format){case"hex":this.value=this.HEXtoHSB(e);break;case"rgb":this.value=this.RGBtoHSB(e);break;case"hsb":this.value=e;break}else this.value=this.HEXtoHSB(this.defaultColor);this.updateColorSelector(),this.updateUI(),this.cd.markForCheck()}onDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlayViewChild?.nativeElement&&this.autoZIndex&&le.clear(this.overlayViewChild?.nativeElement)}static \u0275fac=function(t){return new(t||i)(q(Xi))};static \u0275cmp=M({type:i,selectors:[["p-colorPicker"],["p-colorpicker"],["p-color-picker"]],viewQuery:function(t,n){if(t&1&&Y(ca,5)(pa,5)(ma,5)(da,5)(ua,5)(ha,5),t&2){let r;I(r=w())&&(n.inputViewChild=r.first),I(r=w())&&(n.overlayViewChild=r.first),I(r=w())&&(n.colorSelector=r.first),I(r=w())&&(n.colorHandle=r.first),I(r=w())&&(n.hue=r.first),I(r=w())&&(n.hueHandle=r.first)}},hostVars:2,hostBindings:function(t,n){t&2&&v(n.cn(n.cx("root"),n.styleClass))},inputs:{styleClass:"styleClass",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",inline:[2,"inline","inline",P],format:"format",tabindex:"tabindex",inputId:"inputId",autoZIndex:[2,"autoZIndex","autoZIndex",P],autofocus:[2,"autofocus","autofocus",P],defaultColor:"defaultColor",appendTo:[1,"appendTo"],overlayOptions:[1,"overlayOptions"],motionOptions:[1,"motionOptions"]},outputs:{onChange:"onChange",onShow:"onShow",onHide:"onHide"},features:[ge([_a,Xn,{provide:Yn,useExisting:i},{provide:ke,useExisting:i}]),Ie([D]),K],decls:5,vars:10,consts:[["overlay",""],["content",""],["input",""],["colorSelector",""],["colorHandle",""],["hue",""],["hueHandle",""],["type","text","readonly","",3,"class","backgroundColor","pAutoFocus","pBind","click","keydown","focus",4,"ngIf"],[3,"visibleChange","onBeforeEnter","onAfterLeave","onHide","hostAttrSelector","visible","options","target","inline","appendTo","unstyled","pt","motionOptions"],["type","text","readonly","",3,"click","keydown","focus","pAutoFocus","pBind"],[3,"pBind"],[3,"touchstart","touchmove","touchend","mousedown","pBind"],[3,"mousedown","touchstart","touchmove","touchend","pBind"]],template:function(t,n){if(t&1){let r=T();S(0,fa,2,10,"input",7),c(1,"p-overlay",8,0),We("visibleChange",function(y){return u(r),Ze(n.overlayVisible,y)||(n.overlayVisible=y),h(y)}),C("onBeforeEnter",function(){return u(r),h(n.onOverlayBeforeEnter())})("onAfterLeave",function(){return u(r),h(n.onOverlayAfterLeave())})("onHide",function(){return u(r),h(n.hide())}),S(3,ga,11,21,"ng-template",null,1,Fe),m()}t&2&&(l("ngIf",!n.inline),a(),l("hostAttrSelector",n.$attrSelector),Ue("visible",n.overlayVisible),l("options",n.overlayOptions())("target","@parent")("inline",n.inline)("appendTo",n.$appendTo())("unstyled",n.unstyled())("pt",n.ptm("pcOverlay"))("motionOptions",n.motionOptions()))},dependencies:[L,Me,ln,sn,Q,D,ut,Sn,Mn],encapsulation:2,changeDetection:0})}return i})(),Jn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=xe({type:i});static \u0275inj=Ce({imports:[jt,Q,Q]})}return i})();var ya=(i,o)=>o.value;function Ca(i,o){if(i&1){let e=T();c(0,"button",33),C("click",function(){let n=u(e).$implicit,r=p();return h(r.selectPresetColor(n.value))}),m()}if(i&2){let e=o.$implicit,t=p();Te("background-color",e.value),l("ngClass",t.primaryColor===e.value?" border-surface-500 dark:border-surface-0 scale-110 shadow-md":"border-transparent")("pTooltip",e.label)}}function xa(i,o){if(i&1){let e=T();c(0,"div",2)(1,"span",3),f(2),b(3,"translate"),m(),c(4,"div",4)(5,"div",5),C("click",function(){u(e);let n=p();return h(n.menuMode="static")}),c(6,"div",10)(7,"div",34)(8,"div",35),d(9,"div",36)(10,"div",36)(11,"div",36)(12,"div",36),m()(),c(13,"div",37)(14,"div",38)(15,"div",13),d(16,"div",39)(17,"div",39),m()(),d(18,"div",40),m()(),c(19,"div",8),f(20),b(21,"translate"),m()(),c(22,"div",5),C("click",function(){u(e);let n=p();return h(n.menuMode="overlay")}),c(23,"div",10)(24,"div",41)(25,"div",38)(26,"div",13),d(27,"div",39)(28,"div",39),m()(),c(29,"div",40)(30,"div",42)(31,"div",35),d(32,"div",36)(33,"div",36)(34,"div",36),m()()()()(),c(35,"div",8),f(36),b(37,"translate"),m()(),c(38,"div",5),C("click",function(){u(e);let n=p();return h(n.menuMode="slim")}),c(39,"div",10)(40,"div",43)(41,"div",44),d(42,"div",36)(43,"div",36)(44,"div",36)(45,"div",36),m()(),c(46,"div",37)(47,"div",38)(48,"div",13),d(49,"div",39)(50,"div",39),m()(),d(51,"div",40),m()(),c(52,"div",8),f(53),b(54,"translate"),m()(),c(55,"div",5),C("click",function(){u(e);let n=p();return h(n.menuMode="drawer")}),c(56,"div",10)(57,"div",41)(58,"div",38)(59,"div",45),d(60,"div",46),m()(),c(61,"div",40)(62,"div",47)(63,"div",35),d(64,"div",36)(65,"div",36)(66,"div",36),m()()()()(),c(67,"div",8),f(68),b(69,"translate"),m()(),c(70,"div",5),C("click",function(){u(e);let n=p();return h(n.menuMode="horizontal")}),c(71,"div",10)(72,"div",48)(73,"div",49),d(74,"div",46)(75,"div",46)(76,"div",46),m()(),d(77,"div",50),m(),c(78,"div",8),f(79),b(80,"translate"),m()()()(),c(81,"div",2)(82,"span",3),f(83),b(84,"translate"),m(),c(85,"div",4)(86,"div",5),C("click",function(){u(e);let n=p();return h(n.menuProfilePosition="start")}),c(87,"div",10)(88,"div",34)(89,"div",51),d(90,"div",52),m(),c(91,"div",53),d(92,"div",36)(93,"div",36)(94,"div",36),m()(),c(95,"div",37),d(96,"div",38)(97,"div",40),m()(),c(98,"div",8),f(99),b(100,"translate"),m()(),c(101,"div",5),C("click",function(){u(e);let n=p();return h(n.menuProfilePosition="end")}),c(102,"div",10)(103,"div",34)(104,"div",54),d(105,"div",36)(106,"div",36)(107,"div",36),m(),c(108,"div",55),d(109,"div",52),m()(),c(110,"div",37),d(111,"div",38)(112,"div",40),m()(),c(113,"div",8),f(114),b(115,"translate"),m()()()()}if(i&2){let e=p();a(2),B(_(3,30,"menu.type")),a(4),l("ngClass",e.menuMode==="static"?"border-primary border-3":"border-surface-200 dark:border-surface-700"),a(13),se("text-primary",e.menuMode==="static"),a(),N(" ",_(21,32,"menu.static")," "),a(3),l("ngClass",e.menuMode==="overlay"?"border-primary border-3":"border-surface-200 dark:border-surface-700"),a(12),se("text-primary",e.menuMode==="overlay"),a(),N(" ",_(37,34,"menu.overlay")," "),a(3),l("ngClass",e.menuMode==="slim"?"border-primary border-3":"border-surface-200 dark:border-surface-700"),a(13),se("text-primary",e.menuMode==="slim"),a(),N(" ",_(54,36,"menu.slim")," "),a(3),l("ngClass",e.menuMode==="drawer"?"border-primary border-3":"border-surface-200 dark:border-surface-700"),a(11),se("text-primary",e.menuMode==="drawer"),a(),N(" ",_(69,38,"menu.drawer")," "),a(3),l("ngClass",e.menuMode==="horizontal"?"border-primary border-3":"border-surface-200 dark:border-surface-700"),a(7),se("text-primary",e.menuMode==="horizontal"),a(),N(" ",_(80,40,"menu.horizontal")," "),a(4),B(_(84,42,"profile.position")),a(4),l("ngClass",e.menuProfilePosition==="start"?"border-primary border-3":"border-surface-200 dark:border-surface-700"),a(11),se("text-primary",e.menuProfilePosition==="start"),a(),N(" ",_(100,44,"time.start")," "),a(3),l("ngClass",e.menuProfilePosition==="end"?"border-primary border-3":"border-surface-200 dark:border-surface-700"),a(11),se("text-primary",e.menuProfilePosition==="end"),a(),N(" ",_(115,46,"time.end")," ")}}var qt=class i{simple=!1;layoutService=g(pe);presetColors=hn;customColor=mi.replace("#","");get currentLanguage(){return this.layoutService.currentLanguage()}get menuMode(){return this.layoutService.layoutConfig().menuMode}set menuMode(o){this.layoutService.layoutConfig.update(e=>F(k({},e),{menuMode:o}))}get menuProfilePosition(){return this.layoutService.layoutConfig().menuProfilePosition}set menuProfilePosition(o){this.layoutService.layoutConfig.update(e=>F(k({},e),{menuProfilePosition:o}))}get darkTheme(){return this.layoutService.layoutConfig().darkTheme}set darkTheme(o){this.layoutService.layoutConfig.update(e=>F(k({},e),{menuTheme:o?"dark":"light",topbarTheme:o?"dark":"light",darkTheme:o}))}get primaryColor(){return this.layoutService.layoutConfig().primaryColor??mi}get visible(){return this.layoutService.layoutState().configSidebarVisible}set visible(o){this.layoutService.layoutState.update(e=>F(k({},e),{configSidebarVisible:o}))}toggleConfigSidebar(){this.layoutService.layoutState.update(o=>F(k({},o),{configSidebarVisible:!o.configSidebarVisible}))}changeLanguage(o){this.layoutService.changeLanguage(o)}selectPresetColor(o){this.customColor=o.replace("#",""),this.applyColor(o)}onCustomColorChange(o){o&&this.applyColor(`#${o}`)}applyColor(o){this.layoutService.layoutConfig.update(e=>F(k({},e),{primaryColor:o})),_n(o)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=M({type:i,selectors:[["app-preferences"]],inputs:{simple:[2,"simple","simple",P]},decls:70,vars:45,consts:[["position","right","styleClass","w-80",3,"visibleChange","onHide","visible","header","blockScroll"],[1,"flex","flex-col","gap-6"],[1,"flex","flex-col","gap-3"],[1,"font-semibold","text-sm"],[1,"grid","grid-cols-2","gap-4"],[1,"flex","cursor-pointer","flex-col",3,"click"],[1,"flex","h-20","items-center","justify-center","overflow-hidden","rounded-md","border-2","transition-all","hover:opacity-80",3,"ngClass"],["src","images/flags/PE.png","alt","","width","30"],[1,"text-surface-600","dark:text-surface-400","mt-2","text-center","text-sm","font-thin"],["src","images/flags/US.png","alt","","width","30"],[1,"flex","h-20","overflow-hidden","rounded-md","border-2","transition-all","hover:opacity-80",3,"ngClass"],[1,"flex","flex-auto","flex-col","bg-white"],[1,"h-3","bg-gray-100","border-b","border-gray-200"],[1,"mr-1.5","flex","h-full","items-center","justify-end"],[1,"ml-1","h-1","w-1","rounded-full","bg-gray-400"],[1,"flex","flex-auto","bg-gray-50","p-2"],[1,"w-full","space-y-1"],[1,"h-1","w-3/4","rounded-sm","bg-gray-300"],[1,"h-1","w-full","rounded-sm","bg-gray-200"],[1,"h-1","w-2/3","rounded-sm","bg-gray-200"],[1,"flex","flex-auto","flex-col","bg-gray-900"],[1,"h-3","bg-gray-800","border-b","border-gray-700"],[1,"ml-1","h-1","w-1","rounded-full","bg-gray-500"],[1,"flex","flex-auto","bg-gray-950","p-2"],[1,"h-1","w-3/4","rounded-sm","bg-gray-600"],[1,"h-1","w-full","rounded-sm","bg-gray-700"],[1,"h-1","w-2/3","rounded-sm","bg-gray-700"],[1,"flex","items-center","gap-2","flex-wrap"],["type","button","tooltipPosition","top",1,"cursor-pointer","h-8","w-8","rounded-full","border-2","transition-all","hover:scale-110","focus:outline-none",3,"backgroundColor","ngClass","pTooltip"],[1,"flex","items-center","gap-3","mt-1"],["appendTo","body",3,"ngModelChange","ngModel","inline"],[1,"text-surface-500","dark:text-surface-400","text-sm"],[1,"text-surface-500","dark:text-surface-400","text-xs","font-mono","ml-auto"],["type","button","tooltipPosition","top",1,"cursor-pointer","h-8","w-8","rounded-full","border-2","transition-all","hover:scale-110","focus:outline-none",3,"click","ngClass","pTooltip"],[1,"w-8","bg-surface-100","dark:bg-surface-800"],[1,"mx-1.5","mt-3","space-y-1"],[1,"h-1","rounded-sm","bg-surface-300","dark:bg-surface-600"],[1,"flex","flex-auto","flex-col","border-l","border-surface-200","dark:border-surface-700"],[1,"h-3","bg-surface-100","dark:bg-surface-800"],[1,"ml-1","h-1","w-1","rounded-full","bg-surface-400","dark:bg-surface-600"],[1,"flex","flex-auto","border-t","border-surface-200","bg-surface-0","dark:border-surface-700","dark:bg-surface-900"],[1,"flex","flex-auto","flex-col"],[1,"w-8","bg-surface-100","dark:bg-surface-800","opacity-70"],[1,"w-5","bg-surface-100","dark:bg-surface-800"],[1,"mx-1","mt-3","space-y-1"],[1,"ml-1.5","flex","h-full","items-center"],[1,"h-1","w-3","rounded-sm","bg-surface-300","dark:bg-surface-600"],[1,"w-10","bg-surface-100","dark:bg-surface-800","shadow-md"],[1,"h-5","border-b","border-surface-200","bg-surface-100","dark:border-surface-700","dark:bg-surface-800","w-full"],[1,"ml-1.5","flex","h-full","items-center","gap-1"],[1,"flex","flex-auto","bg-surface-0","dark:bg-surface-900"],[1,"mx-1.5","mt-2","mb-2","pb-2","border-b","border-surface-200","dark:border-surface-700"],[1,"h-3","w-3","mx-auto","rounded-full","bg-surface-300","dark:bg-surface-600"],[1,"mx-1.5","space-y-1"],[1,"mx-1.5","mt-2","space-y-1","flex-auto"],[1,"mx-1.5","mt-6","pt-2","border-t","border-surface-200","dark:border-surface-700"]],template:function(e,t){e&1&&(c(0,"p-drawer",0),b(1,"translate"),We("visibleChange",function(r){return Ze(t.visible,r)||(t.visible=r),r}),C("onHide",function(){return t.layoutService.hideConfigSidebar()}),c(2,"div",1)(3,"div",2)(4,"span",3),f(5),b(6,"translate"),m(),c(7,"div",4)(8,"div",5),C("click",function(){return t.changeLanguage("es")}),c(9,"div",6),d(10,"img",7),m(),c(11,"div",8),f(12),b(13,"translate"),m()(),c(14,"div",5),C("click",function(){return t.changeLanguage("en")}),c(15,"div",6),d(16,"img",9),m(),c(17,"div",8),f(18),b(19,"translate"),m()()()(),c(20,"div",2)(21,"span",3),f(22),b(23,"translate"),m(),c(24,"div",4)(25,"div",5),C("click",function(){return t.darkTheme=!1}),c(26,"div",10)(27,"div",11)(28,"div",12)(29,"div",13),d(30,"div",14)(31,"div",14),m()(),c(32,"div",15)(33,"div",16),d(34,"div",17)(35,"div",18)(36,"div",19),m()()()(),c(37,"div",8),f(38),b(39,"translate"),m()(),c(40,"div",5),C("click",function(){return t.darkTheme=!0}),c(41,"div",10)(42,"div",20)(43,"div",21)(44,"div",13),d(45,"div",22)(46,"div",22),m()(),c(47,"div",23)(48,"div",16),d(49,"div",24)(50,"div",25)(51,"div",26),m()()()(),c(52,"div",8),f(53),b(54,"translate"),m()()()(),c(55,"div",2)(56,"span",3),f(57),b(58,"translate"),m(),c(59,"div",27),$e(60,Ca,1,4,"button",28,ya),m(),c(62,"div",29)(63,"p-colorpicker",30),We("ngModelChange",function(r){return Ze(t.customColor,r)||(t.customColor=r),r}),C("ngModelChange",function(r){return t.onCustomColorChange(r)}),m(),c(64,"span",31),f(65),b(66,"translate"),m(),c(67,"span",32),f(68),m()()(),E(69,xa,116,48),m()()),e&2&&(Ue("visible",t.visible),l("header",_(1,27,"settings.preferences"))("blockScroll",!0),a(5),B(_(6,29,"language.label")),a(4),l("ngClass",t.currentLanguage==="es"?"border-primary border-3":"border-surface-200 dark:border-surface-700"),a(2),se("text-primary",t.currentLanguage==="es"),a(),N(" ",_(13,31,"language.spanish")," "),a(3),l("ngClass",t.currentLanguage==="en"?"border-primary border-3":"border-surface-200 dark:border-surface-700"),a(2),se("text-primary",t.currentLanguage==="en"),a(),N(" ",_(19,33,"language.english")," "),a(4),B(_(23,35,"theme.label")),a(4),l("ngClass",t.darkTheme?"border-surface-200 dark:border-surface-700":"border-primary border-3"),a(11),se("text-primary",!t.darkTheme),a(),N(" ",_(39,37,"theme.light")," "),a(3),l("ngClass",t.darkTheme?"border-primary border-3":"border-surface-200 dark:border-surface-700"),a(11),se("text-primary",t.darkTheme),a(),N(" ",_(54,39,"theme.dark")," "),a(4),B(_(58,41,"theme.primaryColor")),a(3),je(t.presetColors),a(3),Ue("ngModel",t.customColor),l("inline",!1),a(2),N(" ",_(66,43,"theme.customColor")," "),a(3),N(" ",t.primaryColor," "),a(),A(t.simple?-1:69))},dependencies:[L,be,mt,en,tn,Cn,$t,xt,wn,Jn,jt,te,oe,ce,ee],encapsulation:2})};var Ia=["app-breadcrumb",""];function wa(i,o){if(i&1&&(c(0,"li"),d(1,"i",4),m(),c(2,"li")(3,"span",5),f(4),b(5,"translate"),m()()),i&2){let e=o.$implicit;a(4),B(_(5,1,e.label))}}function Ma(i,o){if(i&1){let e=T();c(0,"p-button",6),b(1,"translate"),C("onClick",function(){u(e);let n=p();return h(n.goBack())}),m()}i&2&&l("pTooltip",_(1,1,"actions.return"))}var Kt=class i{constructor(o,e){this.router=o;this.location=e;this.router.events.pipe(Ye(t=>t instanceof rt)).subscribe(()=>{let t=this.router.routerState.snapshot.root,n=[];this.addBreadcrumb(t,[],n),this.breadcrumbs.set(n),this.updateBackButtonVisibility(t)})}breadcrumbs=re([]);showBackButton=re(!1);addBreadcrumb(o,e,t){let n=e.concat(o.url.map(y=>y.path)),r=o.data.breadcrumb,s=o.parent&&o.parent.data?o.parent.data.breadcrumb:null;r&&r!==s&&t.push({label:o.data.breadcrumb,url:"/"+n.join("/")}),o.firstChild&&this.addBreadcrumb(o.firstChild,n,t)}updateBackButtonVisibility(o){let e=o;for(;e.firstChild;)e=e.firstChild;let t=e.data.showBackButton;t!==void 0?this.showBackButton.set(t):this.showBackButton.set(this.breadcrumbs().length>1)}goBack(){this.location.back()}static \u0275fac=function(e){return new(e||i)(q(_e),q(Et))};static \u0275cmp=M({type:i,selectors:[["","app-breadcrumb",""]],hostAttrs:[1,"layout-breadcrumb-container"],attrs:Ia,decls:8,vars:1,consts:[[1,"layout-breadcrumb"],[1,"ph-thin","ph-house"],[1,"layout-breadcrumb-buttons"],["variant","text","icon","ph-bold ph-arrow-fat-left","styleClass","p-0!",3,"pTooltip"],[1,"ph","ph-caret-right","text-sm!"],[1,"text-sm"],["variant","text","icon","ph-bold ph-arrow-fat-left","styleClass","p-0!",3,"onClick","pTooltip"]],template:function(e,t){e&1&&(c(0,"nav",0)(1,"ol")(2,"li"),d(3,"i",1),m(),$e(4,wa,6,3,null,null,it),m()(),c(6,"div",2),E(7,Ma,2,3,"p-button",3),m()),e&2&&(a(4),je(t.breadcrumbs()),a(3),A(t.showBackButton()?7:-1))},dependencies:[L,ne,Ge,dt,Ot,te,oe,ce,ee],encapsulation:2})};var ka=["submenu"],Ta=["app-menuitem",""],Ea=()=>({paths:"exact",queryParams:"ignored",matrixParams:"ignored",fragment:"ignored"});function Aa(i,o){if(i&1&&(c(0,"div",1)(1,"span"),f(2),b(3,"translate"),m(),d(4,"i",4),m()),i&2){let e=p(2);a(2),B(_(3,1,e.item.label))}}function Pa(i,o){i&1&&d(0,"i",8)}function La(i,o){if(i&1){let e=T();c(0,"a",5),b(1,"translate"),C("click",function(n){u(e);let r=p(2);return h(r.itemClick(n))})("mouseenter",function(){u(e);let n=p(2);return h(n.onMouseEnter())}),d(2,"i",6),c(3,"span",7),f(4),b(5,"translate"),m(),E(6,Pa,1,0,"i",8),m()}if(i&2){let e=p(2);l("ngClass",e.item.class)("pTooltip",_(1,8,e.item.label))("tooltipDisabled",!(e.isSlim()&&e.root&&!e.active)),x("href",e.item.url,kt)("target",e.item.target),a(2),l("ngClass",e.item.icon),a(2),B(_(5,10,e.item.label)),a(2),A(e.item.items?6:-1)}}function Ba(i,o){if(i&1){let e=T();c(0,"a",9),b(1,"translate"),C("click",function(n){u(e);let r=p(2);return h(r.itemClick(n))})("mouseenter",function(){u(e);let n=p(2);return h(n.onMouseEnter())}),d(2,"i",6),c(3,"span",7),f(4),b(5,"translate"),m()()}if(i&2){let e=p(2);l("ngClass",e.item.class)("routerLink",e.item.routerLink)("routerLinkActiveOptions",e.item.routerLinkActiveOptions||nt(19,Ea))("fragment",e.item.fragment)("queryParamsHandling",e.item.queryParamsHandling)("preserveFragment",e.item.preserveFragment)("skipLocationChange",e.item.skipLocationChange)("replaceUrl",e.item.replaceUrl)("state",e.item.state)("queryParams",e.item.queryParams)("pTooltip",_(1,15,e.item.label))("tooltipDisabled",!(e.isSlim()&&e.root)),x("target",e.item.target),a(2),l("ngClass",e.item.icon),a(2),B(_(5,17,e.item.label))}}function Da(i,o){if(i&1&&d(0,"li",11),i&2){let e=o.$implicit,t=o.$index,n=p(3);v(e.badgeClass),l("item",e)("index",t)("parentKey",n.key)}}function Oa(i,o){if(i&1){let e=T();c(0,"ul",null,0),C("@children.done",function(n){u(e);let r=p(2);return h(r.onSubmenuAnimated(n))}),$e(2,Da,1,5,"li",10,it),m()}if(i&2){let e=p(2);l("@children",e.submenuAnimation),a(2),je(e.item.items)}}function Va(i,o){if(i&1&&(E(0,Aa,5,3,"div",1),E(1,La,7,12,"a",2),E(2,Ba,6,20,"a",3),E(3,Oa,4,1,"ul")),i&2){let e=p();A(e.root?0:-1),a(),A(!e.item.routerLink||e.item.items?1:-1),a(),A(e.item.routerLink&&!e.item.items?2:-1),a(),A(e.item.items?3:-1)}}var Qt=class i{constructor(o,e){this.layoutService=o;this.router=e;this.menuSourceSubscription=this.layoutService.menuSource$.subscribe(t=>{Promise.resolve(null).then(()=>{t.routeEvent?this.active=!!(t.key===this.key||t.key.startsWith(this.key+"-")):t.key!==this.key&&!t.key.startsWith(this.key+"-")&&(this.active=!1)})}),this.menuResetSubscription=this.layoutService.resetSource$.subscribe(()=>{this.active=!1}),this.router.events.pipe(Ye(t=>t instanceof rt)).subscribe(t=>{this.isSlimPlus()||this.isSlim()||this.isHorizontal()?this.active=!1:this.item.routerLink&&this.updateActiveStateFromRoute()})}item;index;root;parentKey;submenu;get activeClass(){return this.active}active=!1;menuSourceSubscription;menuResetSubscription;key="";get submenuAnimation(){return this.layoutService.isDesktop()&&(this.layoutService.isHorizontal()||this.layoutService.isSlim()||this.layoutService.isSlimPlus())?this.active?"visible":"hidden":this.root||this.active?"expanded":"collapsed"}isSlim=H(()=>this.layoutService.isSlim());isSlimPlus=H(()=>this.layoutService.isSlimPlus());isHorizontal=H(()=>this.layoutService.isHorizontal());get isDesktop(){return this.layoutService.isDesktop()}get isMobile(){return this.layoutService.isMobile()}ngOnInit(){this.key=this.parentKey?this.parentKey+"-"+this.index:String(this.index),!(this.isSlimPlus()||this.isSlim()||this.isHorizontal())&&this.item.routerLink&&this.updateActiveStateFromRoute()}ngAfterViewChecked(){this.root&&this.active&&this.isDesktop&&(this.isHorizontal()||this.isSlim()||this.isSlimPlus())&&this.calculatePosition(this.submenu?.nativeElement,this.submenu?.nativeElement.parentElement)}updateActiveStateFromRoute(){this.router.isActive(this.item.routerLink[0],{paths:"exact",queryParams:"ignored",matrixParams:"ignored",fragment:"ignored"})&&this.layoutService.onMenuStateChange({key:this.key,routeEvent:!0})}onSubmenuAnimated(o){if(o.toState==="visible"&&this.isDesktop&&(this.isHorizontal()||this.isSlim()||this.isSlimPlus())){let e=o.element,t=e.parentElement;this.calculatePosition(e,t)}}calculatePosition(o,e){if(o){let{left:t,top:n}=e.getBoundingClientRect(),[r,s]=[window.innerWidth,window.innerHeight],[y,V]=[o.offsetWidth,o.offsetHeight],G=on.calculateScrollbarWidth(),Re=document.querySelector(".layout-topbar")?.offsetHeight||0;if(o.style.top="",o.style.left="",this.layoutService.isHorizontal()){let He=t+y+G;o.style.left=r<He?`${t-(He-r)}px`:`${t}px`}else if(this.layoutService.isSlim()||this.layoutService.isSlimPlus()){let He=n-Re,Mt=He+V+Re;o.style.top=s<Mt?`${He-(Mt-s)}px`:`${He}px`}}}itemClick(o){if(this.item.disabled){o.preventDefault();return}(this.root&&this.isSlim()||this.isHorizontal()||this.isSlimPlus())&&this.layoutService.layoutState.update(e=>F(k({},e),{menuHoverActive:!e.menuHoverActive})),this.item.command&&this.item.command({originalEvent:o,item:this.item}),this.item.items?(this.active=!this.active,this.root&&this.active&&(this.isSlim()||this.isHorizontal()||this.isSlimPlus())&&this.layoutService.onOverlaySubmenuOpen()):(this.layoutService.isMobile()&&this.layoutService.layoutState.update(e=>F(k({},e),{staticMenuMobileActive:!1})),(this.isSlim()||this.isHorizontal()||this.isSlimPlus())&&(this.layoutService.reset(),this.layoutService.layoutState.update(e=>F(k({},e),{menuHoverActive:!1})))),this.layoutService.onMenuStateChange({key:this.key})}onMouseEnter(){this.root&&(this.isSlim()||this.isHorizontal()||this.isSlimPlus())&&this.layoutService.isDesktop()&&this.layoutService.layoutState().menuHoverActive&&(this.active=!0,this.layoutService.onMenuStateChange({key:this.key}))}ngOnDestroy(){this.menuSourceSubscription&&this.menuSourceSubscription.unsubscribe(),this.menuResetSubscription&&this.menuResetSubscription.unsubscribe()}static \u0275fac=function(e){return new(e||i)(q(pe),q(_e))};static \u0275cmp=M({type:i,selectors:[["","app-menuitem",""]],viewQuery:function(e,t){if(e&1&&Y(ka,5),e&2){let n;I(n=w())&&(t.submenu=n.first)}},hostVars:4,hostBindings:function(e,t){e&2&&se("layout-root-menuitem",t.root)("active-menuitem",t.activeClass)},inputs:{item:"item",index:"index",root:"root",parentKey:"parentKey"},attrs:Ta,decls:1,vars:1,consts:[["submenu",""],[1,"layout-menuitem-root-text"],["tabindex","0","pRipple","",3,"ngClass","pTooltip","tooltipDisabled"],["routerLinkActive","active-route","tabindex","0","pRipple","",3,"ngClass","routerLink","routerLinkActiveOptions","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","queryParams","pTooltip","tooltipDisabled"],[1,"layout-menuitem-root-icon","ph-thin","ph-minus"],["tabindex","0","pRipple","",3,"click","mouseenter","ngClass","pTooltip","tooltipDisabled"],[1,"layout-menuitem-icon",3,"ngClass"],[1,"layout-menuitem-text"],[1,"ph-thin","ph-caret-down","layout-submenu-toggler"],["routerLinkActive","active-route","tabindex","0","pRipple","",3,"click","mouseenter","ngClass","routerLink","routerLinkActiveOptions","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","queryParams","pTooltip","tooltipDisabled"],["app-menuitem","",3,"item","index","parentKey","class"],["app-menuitem","",3,"item","index","parentKey"]],template:function(e,t){e&1&&E(0,Va,4,4),e&2&&A(t.item.visible!==!1?0:-1)},dependencies:[i,L,be,ne,at,Bt,Ot,pt,oe,ce,te,ee],encapsulation:2,data:{animation:[bt("children",[ot("collapsed",J({height:"0",overflow:"hidden"})),ot("expanded",J({height:"*",overflow:"hidden"})),ot("hidden",J({height:"0",opacity:"0",overflow:"hidden"})),ot("visible",J({height:"*",opacity:"1",overflow:"visible"})),Le("collapsed <=> expanded",Pe("400ms cubic-bezier(0.86, 0, 0.07, 1)")),Le("hidden => visible",[J({height:"0",opacity:"0",overflow:"hidden"}),Pe("400ms cubic-bezier(0.86, 0, 0.07, 1)",J({height:"*",opacity:"1"}))]),Le("visible => hidden",[J({overflow:"hidden"}),Pe("400ms cubic-bezier(0.86, 0, 0.07, 1)",J({height:"0",opacity:"0"}))])])]}})};var Ra=["menuContainer"];function Fa(i,o){if(i&1&&d(0,"li",2),i&2){let e=p(),t=e.$implicit,n=e.$index;l("item",t)("index",n)("root",!0)}}function Na(i,o){i&1&&d(0,"li",3)}function Ha(i,o){if(i&1&&E(0,Fa,1,3,"li",2)(1,Na,1,0,"li",3),i&2){let e=o.$implicit;A(e.separator?1:0)}}var It=class i{el=g(ze);menuContainer;model=[{label:"analytics.label",icon:"ph-thin ph-chart-bar",items:[{label:"analytics.overview",icon:"ph-thin ph-chart-pie-slice",routerLink:["/analytics/overview"]},{label:"analytics.reports",icon:"ph-thin ph-chart-bar",routerLink:["/analytics/reports"]},{label:"analytics.realtime",icon:"ph-thin ph-presentation-chart",routerLink:["/analytics/realtime"]}]},{label:"management.label",icon:"ph-thin ph-briefcase",items:[{label:"user.plural.label",icon:"ph-thin ph-users",routerLink:"/users"},{label:"teams.label",icon:"ph-thin ph-tree-structure",routerLink:""}]},{label:"apps.label",icon:"ph-thin ph-grid-four",items:[{label:"blog.label",icon:"ph-thin ph-chat-circle-text",items:[{label:"blog.list",icon:"ph-thin ph-image",routerLink:""},{label:"blog.detail",icon:"ph-thin ph-file-text",routerLink:""},{label:"blog.edit",icon:"ph-thin ph-pencil",routerLink:""}]},{label:"notifications.label",icon:"ph-thin ph-bell",routerLink:""},{label:"messages.label",icon:"ph-thin ph-envelope",routerLink:""}]},{label:"settings.label",icon:"ph-thin ph-gear",items:[{label:"profile.label",icon:"ph-thin ph-user",routerLink:""},{label:"preferences.label",icon:"ph-thin ph-sliders",routerLink:""},{label:"security.label",icon:"ph-thin ph-shield",routerLink:""}]},{separator:!0},{label:"support.label",icon:"ph-thin ph-question",items:[{label:"support.documentation",icon:"ph-thin ph-book",routerLink:""},{label:"support.contact",icon:"ph-thin ph-headset",routerLink:""}]}];static \u0275fac=function(e){return new(e||i)};static \u0275cmp=M({type:i,selectors:[["app-menu"],["","app-menu",""]],viewQuery:function(e,t){if(e&1&&Y(Ra,5),e&2){let n;I(n=w())&&(t.menuContainer=n.first)}},decls:4,vars:0,consts:[["menuContainer",""],[1,"layout-menu"],["app-menuitem","",3,"item","index","root"],[1,"menu-separator"]],template:function(e,t){e&1&&(c(0,"ul",1,0),$e(2,Ha,2,1,null,null,it),m()),e&2&&(a(2),je(t.model))},dependencies:[L,Qt,ne],encapsulation:2})};var za=["app-menu-profile",""],$a=(i,o)=>({"ph-caret-down":i,"ph-caret-up":o});function ja(i,o){if(i&1){let e=T();c(0,"ul")(1,"li",4),b(2,"translate"),c(3,"button",5),C("click",function(){u(e);let n=p();return h(n.toggleConfigSidebar())}),d(4,"i",6),c(5,"span"),f(6),b(7,"translate"),m()()(),c(8,"li",4),b(9,"translate"),c(10,"button",7),d(11,"i",8),c(12,"span"),f(13),b(14,"translate"),m()()(),c(15,"li",4),b(16,"translate"),c(17,"button",7),d(18,"i",9),c(19,"span"),f(20),b(21,"translate"),m()()()()}if(i&2){let e=p();l("@menu",e.isHorizontal()?"overlay":"inline"),a(),l("pTooltip",_(2,10,"preferences.label"))("tooltipDisabled",e.isTooltipDisabled()),a(5),B(_(7,12,"preferences.label")),a(2),l("pTooltip",_(9,14,"profile.label"))("tooltipDisabled",e.isTooltipDisabled()),a(5),B(_(14,16,"profile.label")),a(2),l("pTooltip",_(16,18,"auth.logout"))("tooltipDisabled",e.isTooltipDisabled()),a(5),B(_(21,20,"auth.logout"))}}var Gt=class i{layoutService=g(pe);renderer=g(tt);el=g(ze);isHorizontal=H(()=>this.layoutService.isHorizontal()&&this.layoutService.isDesktop());menuProfileActive=H(()=>this.layoutService.layoutState().menuProfileActive);menuProfilePosition=H(()=>this.layoutService.layoutConfig().menuProfilePosition);isTooltipDisabled=H(()=>!this.layoutService.isSlim());subscription;outsideClickListener;constructor(){this.subscription=this.layoutService.overlayOpen$.subscribe(()=>{this.isHorizontal()&&this.menuProfileActive()&&this.layoutService.layoutState.update(o=>F(k({},o),{menuProfileActive:!1}))}),et(()=>{this.isHorizontal()&&this.menuProfileActive()&&!this.outsideClickListener&&this.bindOutsideClickListener(),!this.menuProfileActive()&&this.isHorizontal()&&this.unbindOutsideClickListener()})}bindOutsideClickListener(){this.isHorizontal()&&(this.outsideClickListener=this.renderer.listen(document,"click",o=>{this.menuProfileActive()&&!(this.el.nativeElement.isSameNode(o.target)||this.el.nativeElement.contains(o.target))&&this.layoutService.layoutState.update(t=>F(k({},t),{menuProfileActive:!1}))}))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}ngOnDestroy(){this.subscription.unsubscribe(),this.unbindOutsideClickListener()}toggleMenu(o){o.stopPropagation(),this.layoutService.onMenuProfileToggle()}toggleConfigSidebar(){let o=this.layoutService.layoutState();this.layoutService.isSidebarActive()&&(o.overlayMenuActive=!1,o.overlaySubmenuActive=!1,o.staticMenuMobileActive=!1,o.menuHoverActive=!1,o.configSidebarVisible=!1),o.configSidebarVisible=!o.configSidebarVisible,this.layoutService.layoutState.set(k({},o))}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=M({type:i,selectors:[["","app-menu-profile",""]],hostAttrs:[1,"layout-menu-profile"],attrs:za,decls:9,vars:6,consts:[["pTooltip","Profile",1,"cursor-pointer","flex","items-center",3,"click","tooltipDisabled"],["src","images/user.jpg","alt","avatar","width","25",1,"rounded-sm"],[1,"text-start"],[1,"layout-menu-profile-toggler","ph-thin",3,"ngClass"],[3,"pTooltip","tooltipDisabled"],[1,"cursor-pointer",3,"click"],[1,"ph-thin","ph-faders"],[1,"cursor-pointer"],[1,"ph-thin","ph-user-rectangle"],[1,"ph-thin","ph-power"]],template:function(e,t){e&1&&(c(0,"button",0),C("click",function(r){return t.toggleMenu(r)}),d(1,"img",1),c(2,"span",2)(3,"strong"),f(4,"Pablo Aguilar"),m(),c(5,"small"),f(6,"Software Developer"),m()(),d(7,"i",3),m(),E(8,ja,22,22,"ul")),e&2&&(l("tooltipDisabled",t.isTooltipDisabled()),a(7),l("ngClass",Tt(3,$a,!t.menuProfileActive()&&(t.menuProfilePosition()==="start"||t.isHorizontal())||t.menuProfileActive()&&t.menuProfilePosition()==="end"&&!t.isHorizontal(),t.menuProfileActive()&&(t.menuProfilePosition()==="start"||t.isHorizontal())||!t.menuProfileActive()&&t.menuProfilePosition()==="end"&&!t.isHorizontal())),a(),A(t.menuProfileActive()?8:-1))},dependencies:[L,be,oe,ce,Ge,ne,te,ee],encapsulation:2,data:{animation:[bt("menu",[Le("void => inline",[J({height:0}),Pe("400ms cubic-bezier(0.86, 0, 0.07, 1)",J({opacity:1,height:"*"}))]),Le("inline => void",[Pe("400ms cubic-bezier(0.86, 0, 0.07, 1)",J({opacity:0,height:"0"}))]),Le("void => overlay",[J({opacity:0,transform:"scaleY(0.8)"}),Pe(".12s cubic-bezier(0, 0, 0.2, 1)")]),Le("overlay => void",[Pe(".1s linear",J({opacity:0}))])])]}})};var qa=["menuProfileStart"],Ka=["menuProfileEnd"],Qa=["menuContainer"],Ga=["app-sidebar",""];function Ua(i,o){i&1&&d(0,"div",11,1)}function Za(i,o){i&1&&d(0,"div",11,2)}var wt=class i{el=g(ze);layoutService=g(pe);appMenu;menuProfileStart;menuProfileEnd;menuContainer;overlayMenuActive=H(()=>this.layoutService.layoutState().overlayMenuActive);menuProfilePosition=H(()=>this.layoutService.layoutConfig().menuProfilePosition);anchored=H(()=>this.layoutService.layoutState().anchored);timeout;resetOverlay(){this.overlayMenuActive()&&this.layoutService.layoutState.update(o=>F(k({},o),{overlayMenuActive:!1}))}onMouseEnter(){this.anchored()||(this.timeout&&(clearTimeout(this.timeout),this.timeout=null),this.layoutService.layoutState.update(o=>F(k({},o),{sidebarActive:!0})))}onMouseLeave(){this.anchored()||this.timeout||(this.timeout=setTimeout(()=>this.layoutService.layoutState.update(o=>F(k({},o),{sidebarActive:!1})),300))}anchor(){this.layoutService.layoutState.update(o=>F(k({},o),{anchored:!o.anchored}))}ngOnDestroy(){this.resetOverlay()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=M({type:i,selectors:[["","app-sidebar",""]],viewQuery:function(e,t){if(e&1&&Y(It,5)(qa,5)(Ka,5)(Qa,5),e&2){let n;I(n=w())&&(t.appMenu=n.first),I(n=w())&&(t.menuProfileStart=n.first),I(n=w())&&(t.menuProfileEnd=n.first),I(n=w())&&(t.menuContainer=n.first)}},attrs:Ga,decls:17,vars:10,consts:[["menuContainer",""],["menuProfileStart",""],["menuProfileEnd",""],[1,"layout-sidebar",3,"mouseenter","mouseleave"],[1,"layout-sidebar-top"],["href","/"],[1,"layout-sidebar-logo"],[1,"ph-duotone","ph-chalkboard-simple","logo-icon"],[1,"font-black","whitespace-nowrap"],[1,"layout-sidebar-logo-slim"],["size","small","tooltipPosition","right",1,"layout-sidebar-anchor",3,"onClick","icon","text","rounded","pTooltip"],["app-menu-profile",""],[1,"layout-menu-container"],["app-menu",""]],template:function(e,t){if(e&1){let n=T();c(0,"div",3),C("mouseenter",function(){return u(n),h(t.onMouseEnter())})("mouseleave",function(){return u(n),h(t.onMouseLeave())}),c(1,"div",4)(2,"a",5)(3,"div",6),d(4,"i",7),c(5,"span",8),f(6,"PM SYSTEMS"),m()(),c(7,"div",9),d(8,"i",7),m()(),c(9,"p-button",10),b(10,"translate"),b(11,"translate"),C("onClick",function(){return u(n),h(t.anchor())}),m()(),E(12,Ua,2,0,"div",11),c(13,"div",12,0),d(15,"div",13),m(),E(16,Za,2,0,"div",11),m()}e&2&&(a(9),l("icon",t.anchored()?"ph-fill ph-push-pin-simple":"ph ph-push-pin-simple")("text",!0)("rounded",!0)("pTooltip",t.anchored()?_(10,6,"actions.unpin"):_(11,8,"actions.pin")),a(3),A(t.menuProfilePosition()==="start"?12:-1),a(4),A(t.menuProfilePosition()==="end"?16:-1))},dependencies:[Gt,It,L,dt,oe,ce,te,ee],encapsulation:2})};var Wa=["app-right-menu",""];function Xa(i,o){}var Ut=class i{layoutService=g(pe);get rightMenuActive(){return this.layoutService.layoutState().rightMenuActive}set rightMenuActive(o){this.layoutService.layoutState.update(e=>F(k({},e),{rightMenuActive:o}))}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=M({type:i,selectors:[["","app-right-menu",""]],attrs:Wa,decls:3,vars:1,consts:[["headless",""],["position","right",3,"visibleChange","visible"]],template:function(e,t){if(e&1){let n=T();c(0,"p-drawer",1),We("visibleChange",function(s){return u(n),Ze(t.rightMenuActive,s)||(t.rightMenuActive=s),h(s)}),S(1,Xa,0,0,"ng-template",null,0,Fe),m()}e&2&&Ue("visible",t.rightMenuActive)},dependencies:[$t,xt,mt],encapsulation:2})};var eo=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var Ya=["content"],Ja=i=>({$implicit:i});function es(i,o){if(i&1&&(c(0,"div"),f(1),m()),i&2){let e=p(2);Te("display",e.value!=null&&e.value!==0?"flex":"none"),a(),Di("",e.value,"",e.unit)}}function ts(i,o){i&1&&ae(0)}function is(i,o){if(i&1&&(c(0,"div",2)(1,"div",2),S(2,es,2,4,"div",3)(3,ts,1,0,"ng-container",4),m()()),i&2){let e=p();v(e.cn(e.cx("value"),e.valueStyleClass)),Te("width",e.value+"%")("display","flex")("background",e.color),l("pBind",e.ptm("value")),x("data-p",e.dataP),a(),v(e.cx("label")),l("pBind",e.ptm("label")),x("data-p",e.dataP),a(),l("ngIf",e.showValue&&!e.contentTemplate&&!e._contentTemplate),a(),l("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Ae(17,Ja,e.value))}}function ns(i,o){if(i&1&&d(0,"div",2),i&2){let e=p();v(e.cn(e.cx("value"),e.valueStyleClass)),Te("background",e.color),l("pBind",e.ptm("value")),x("data-p",e.dataP)}}var os={root:({instance:i})=>["p-progressbar p-component",{"p-progressbar-determinate":i.mode=="determinate","p-progressbar-indeterminate":i.mode=="indeterminate"}],value:"p-progressbar-value",label:"p-progressbar-label"},to=(()=>{class i extends De{name="progressbar";style=eo;classes=os;static \u0275fac=(()=>{let e;return function(n){return(e||(e=j(i)))(n||i)}})();static \u0275prov=X({token:i,factory:i.\u0275fac})}return i})();var io=new ie("PROGRESSBAR_INSTANCE"),hi=(()=>{class i extends Oe{componentName="ProgressBar";$pcProgressBar=g(io,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(D,{self:!0});value;showValue=!0;styleClass;valueStyleClass;unit="%";mode="determinate";color;contentTemplate;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=g(to);templates;_contentTemplate;onAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="content"?this._contentTemplate=e.template:this._contentTemplate=e.template})}get dataP(){return this.cn({determinate:this.mode==="determinate",indeterminate:this.mode==="indeterminate"})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=j(i)))(n||i)}})();static \u0275cmp=M({type:i,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(t,n,r){if(t&1&&qe(r,Ya,4)(r,Ke,4),t&2){let s;I(s=w())&&(n.contentTemplate=s.first),I(s=w())&&(n.templates=s)}},hostAttrs:["role","progressbar"],hostVars:7,hostBindings:function(t,n){t&2&&(x("aria-valuemin",0)("aria-valuenow",n.value)("aria-valuemax",100)("aria-level",n.value+n.unit)("data-p",n.dataP),v(n.cn(n.cx("root"),n.styleClass)))},inputs:{value:[2,"value","value",de],showValue:[2,"showValue","showValue",P],styleClass:"styleClass",valueStyleClass:"valueStyleClass",unit:"unit",mode:"mode",color:"color"},features:[ge([to,{provide:io,useExisting:i},{provide:ke,useExisting:i}]),Ie([D]),K],decls:2,vars:2,consts:[[3,"class","pBind","width","display","background",4,"ngIf"],[3,"class","pBind","background",4,"ngIf"],[3,"pBind"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,n){t&1&&S(0,is,4,19,"div",0)(1,ns,1,6,"div",1),t&2&&(l("ngIf",n.mode==="determinate"),a(),l("ngIf",n.mode==="indeterminate"))},dependencies:[L,Me,Ne,Q,D],encapsulation:2,changeDetection:0})}return i})(),no=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=xe({type:i});static \u0275inj=Ce({imports:[hi,Q,Q]})}return i})();var as=()=>({height:"3px"});function ss(i,o){i&1&&(c(0,"div",0),d(1,"p-progressBar",1),m()),i&2&&(a(),Ee(nt(2,as)))}var Zt=class i{progressBarService=g(ht);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=M({type:i,selectors:[["app-progress-bar"]],decls:1,vars:1,consts:[[1,"app-progress-bar"],["mode","indeterminate"]],template:function(e,t){e&1&&E(0,ss,2,3,"div",0),e&2&&A(t.progressBarService.isLoading()?0:-1)},dependencies:[L,no,hi],encapsulation:2})};var Wt=class i{constructor(o,e,t){this.layoutService=o;this.renderer=e;this.router=t;this.overlayMenuOpenSubscription=this.layoutService.overlayOpen$.subscribe(()=>{this.menuOutsideClickListener||(this.menuOutsideClickListener=this.renderer.listen("document","click",n=>{!(this.appSidebar.appMenu.el.nativeElement.isSameNode(n.target)||this.appSidebar.appMenu.el.nativeElement.contains(n.target)||this.appTopbar.menuButton.nativeElement.isSameNode(n.target)||this.appTopbar.menuButton.nativeElement.contains(n.target))&&this.hideMenu()})),(this.layoutService.isSlim()||this.layoutService.isSlimPlus())&&!this.menuScrollListener&&(this.menuScrollListener=this.renderer.listen(this.appSidebar.appMenu.menuContainer.nativeElement,"scroll",n=>{this.layoutService.isDesktop()&&this.hideMenu()})),this.layoutService.layoutState().staticMenuMobileActive&&this.blockBodyScroll()}),this.router.events.pipe(Ye(n=>n instanceof rt)).subscribe(()=>{this.hideMenu()})}overlayMenuOpenSubscription;menuOutsideClickListener;menuScrollListener;appSidebar;appTopbar;blockBodyScroll(){document.body.classList?document.body.classList.add("blocked-scroll"):document.body.className+=" blocked-scroll"}unblockBodyScroll(){document.body.classList?document.body.classList.remove("blocked-scroll"):document.body.className=document.body.className.replace(new RegExp("(^|\\b)"+"blocked-scroll".split(" ").join("|")+"(\\b|$)","gi")," ")}hideMenu(){this.layoutService.layoutState.update(o=>F(k({},o),{overlayMenuActive:!1,staticMenuMobileActive:!1,menuHoverActive:!1})),this.layoutService.reset(),this.menuOutsideClickListener&&(this.menuOutsideClickListener(),this.menuOutsideClickListener=null),this.menuScrollListener&&(this.menuScrollListener(),this.menuScrollListener=null),this.unblockBodyScroll()}containerClass=H(()=>{let o=this.layoutService.layoutConfig(),e=this.layoutService.layoutState();return{"layout-overlay":o.menuMode==="overlay","layout-static":o.menuMode==="static","layout-slim":o.menuMode==="slim","layout-slim-plus":o.menuMode==="slim-plus","layout-horizontal":o.menuMode==="horizontal","layout-reveal":o.menuMode==="reveal","layout-drawer":o.menuMode==="drawer","layout-sidebar-dark":o.darkTheme,"layout-static-inactive":e.staticMenuDesktopInactive&&o.menuMode==="static","layout-overlay-active":e.overlayMenuActive,"layout-mobile-active":e.staticMenuMobileActive,"layout-topbar-menu-active":e.topbarMenuActive,"layout-menu-profile-active":e.rightMenuActive,"layout-sidebar-active":e.sidebarActive,"layout-sidebar-anchored":e.anchored,[`layout-topbar-${o.topbarTheme}`]:!0,[`layout-menu-${o.menuTheme}`]:!0,[`layout-menu-profile-${o.menuProfilePosition}`]:!0}});ngOnDestroy(){this.overlayMenuOpenSubscription&&this.overlayMenuOpenSubscription.unsubscribe(),this.menuOutsideClickListener&&this.menuOutsideClickListener()}static \u0275fac=function(e){return new(e||i)(q(pe),q(tt),q(_e))};static \u0275cmp=M({type:i,selectors:[["app-layout"]],viewQuery:function(e,t){if(e&1&&Y(wt,5)(Ct,5),e&2){let n;I(n=w())&&(t.appSidebar=n.first),I(n=w())&&(t.appTopbar=n.first)}},decls:10,vars:1,consts:[[1,"layout-container",3,"ngClass"],["app-topbar",""],["app-right-menu",""],["app-sidebar",""],[1,"layout-content-wrapper"],["app-breadcrumb",""],[1,"layout-content"]],template:function(e,t){e&1&&(c(0,"div",0),d(1,"div",1)(2,"div",2)(3,"div",3),c(4,"div",4),d(5,"div",5),c(6,"div",6),d(7,"app-progress-bar")(8,"router-outlet"),m()()(),d(9,"app-preferences")),e&2&&l("ngClass",t.containerClass())},dependencies:[L,be,Ct,wt,ne,Lt,qt,Kt,Ut,Zt],encapsulation:2})};var Xt=class i{constructor(o,e){this.router=o;this.location=e}errorMessage=re({});ngOnInit(){let e=this.router.currentNavigation()?.extras?.state||this.location.getState();if(e&&typeof e=="object"&&"error"in e){let t=e.error;this.errorMessage.set({title:t.title,description:t.description,code:t.code,status:t.status,statusText:t.statusText,message:t.message,url:t.url,timestamp:t.timestamp,icon:"ph-duotone ph-warning-circle",size:"xl"})}}static \u0275fac=function(e){return new(e||i)(q(_e),q(Et))};static \u0275cmp=M({type:i,selectors:[["error-page"]],decls:3,vars:1,consts:[[1,"card"],[1,"full-screen"],[3,"message"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"div",1),d(2,"app-messages",2),m()()),e&2&&(a(2),l("message",t.errorMessage()))},dependencies:[kn],encapsulation:2})};var oo=(i,o)=>{let e=g(_e);return e.currentNavigation()?.extras?.state?.error?!0:(e.navigate(["/"]),!1)};var ro=[{path:"",component:Wt,children:[{path:"analytics",loadChildren:()=>import("./chunk-5ANKQHNK.js").then(i=>i.default)},{path:"users",data:{breadcrumb:"user.plural.label"},loadChildren:()=>import("./chunk-5RXAEOMZ.js").then(i=>i.default)},{path:"error",component:Xt,canActivate:[oo]},{path:"",redirectTo:"analytics",pathMatch:"full"}]},{path:"**",redirectTo:"analytics"}];var ao=ji(ro,Qi(),qi({anchorScrolling:"enabled",scrollPositionRestoration:"enabled"}),Ki());var so=[Yi({theme:{preset:bn,options:{darkModeSelector:".app-dark"}}}),Dt];var fi=new ie("TRANSLATE_HTTP_LOADER_CONFIG"),ls=(()=>{class i{http;config;constructor(){this.config=k({prefix:"/assets/i18n/",suffix:".json",enforceLoading:!1,useHttpBackend:!1},g(fi)),this.http=this.config.useHttpBackend?new Pt(g(ri)):g(Pt)}getTranslation(e){let t=this.config.enforceLoading?`?enforceLoading=${Date.now()}`:"";return this.http.get(`${this.config.prefix}${e}${this.config.suffix}${t}`)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=X({token:i,factory:i.\u0275fac})}return i})();function lo(i={}){let o=i.useHttpBackend??!1;return[{provide:fi,useValue:i},{provide:fn,useClass:ls,deps:[o?ri:Pt,fi]}]}function co(){document.querySelectorAll("[title]").forEach(i=>{let o=i.getAttribute("title");o&&o.includes(".")&&i.removeAttribute("title")})}function cs(){g(Pi).isStable.subscribe(o=>{o&&(co(),new MutationObserver(t=>{t.some(r=>r.type==="attributes"&&r.attributeName==="title")&&co()}).observe(document.body,{attributes:!0,attributeFilter:["title"],subtree:!0,childList:!1,characterData:!1}))})}var po=[gn({loader:lo({prefix:un}),fallbackLang:"es",lang:"es"}),Ai(cs)];function ps(i){let o=i,e=Math.floor(Math.abs(i)),t=i.toString().replace(/^[^.]*\.?/,"").length,n=parseInt(i.toString().replace(/^[^e]*(e([-+]?\d+))?/,"$2"))||0;return o===1?1:n===0&&e!==0&&e%1e6===0&&t===0||!(n>=0&&n<=5)?4:5}var mo=["es",[["a.\u202Fm.","p.\u202Fm."],void 0,["a.\xA0m.","p.\xA0m."]],void 0,[["D","L","M","X","J","V","S"],["dom","lun","mar","mi\xE9","jue","vie","s\xE1b"],["domingo","lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado"],["DO","LU","MA","MI","JU","VI","SA"]],void 0,[["E","F","M","A","M","J","J","A","S","O","N","D"],["ene","feb","mar","abr","may","jun","jul","ago","sept","oct","nov","dic"],["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]],void 0,[["a. C.","d. C."],void 0,["antes de Cristo","despu\xE9s de Cristo"]],1,[6,0],["d/M/yy","d MMM y","d 'de' MMMM 'de' y","EEEE, d 'de' MMMM 'de' y"],["H:mm","H:mm:ss","H:mm:ss z","H:mm:ss (zzzz)"],["{1}, {0}",void 0,void 0,void 0],[",",".",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"EUR","\u20AC","euro",{AUD:[void 0,"$"],BRL:[void 0,"R$"],BYN:[void 0,"\u0440."],CAD:[void 0,"$"],CNY:[void 0,"\xA5"],EGP:[void 0,"EGP"],ESP:["\u20A7"],GBP:[void 0,"\xA3"],HKD:[void 0,"$"],ILS:[void 0,"\u20AA"],INR:[void 0,"\u20B9"],JPY:[void 0,"\xA5"],KRW:[void 0,"\u20A9"],MXN:[void 0,"$"],NZD:[void 0,"$"],PHP:[void 0,"\u20B1"],RON:[void 0,"L"],THB:["\u0E3F"],TWD:[void 0,"NT$"],USD:["US$","$"],XAF:[],XCD:[void 0,"$"],XOF:[]},"ltr",ps];function ms(i){let o=i,e=Math.floor(Math.abs(i)),t=i.toString().replace(/^[^.]*\.?/,"").length;return e===1&&t===0?1:5}var uo=["en",[["a","p"],["AM","PM"]],[["AM","PM"]],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],void 0,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],void 0,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm\u202Fa","h:mm:ss\u202Fa","h:mm:ss\u202Fa z","h:mm:ss\u202Fa zzzz"],["{1}, {0}",void 0,void 0,void 0],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",ms];ni(mo,"es");ni(uo,"en");var ho=[];var fo={providers:[Ii(),Hi($i(),Ln),Tn(),ao,so,po,ho]};var go=`
    .p-toast {
        width: dt('toast.width');
        white-space: pre-line;
        word-break: break-word;
    }

    .p-toast-message {
        margin: 0 0 1rem 0;
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-toast-message-icon {
        flex-shrink: 0;
        font-size: dt('toast.icon.size');
        width: dt('toast.icon.size');
        height: dt('toast.icon.size');
    }

    .p-toast-message-content {
        display: flex;
        align-items: flex-start;
        padding: dt('toast.content.padding');
        gap: dt('toast.content.gap');
        min-height: 0;
        overflow: hidden;
        transition: padding 250ms ease-in;
    }

    .p-toast-message-text {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        gap: dt('toast.text.gap');
    }

    .p-toast-summary {
        font-weight: dt('toast.summary.font.weight');
        font-size: dt('toast.summary.font.size');
    }

    .p-toast-detail {
        font-weight: dt('toast.detail.font.weight');
        font-size: dt('toast.detail.font.size');
    }

    .p-toast-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        background: transparent;
        transition:
            background dt('toast.transition.duration'),
            color dt('toast.transition.duration'),
            outline-color dt('toast.transition.duration'),
            box-shadow dt('toast.transition.duration');
        outline-color: transparent;
        color: inherit;
        width: dt('toast.close.button.width');
        height: dt('toast.close.button.height');
        border-radius: dt('toast.close.button.border.radius');
        margin: -25% 0 0 0;
        right: -25%;
        padding: 0;
        border: none;
        user-select: none;
    }

    .p-toast-close-button:dir(rtl) {
        margin: -25% 0 0 auto;
        left: -25%;
        right: auto;
    }

    .p-toast-message-info,
    .p-toast-message-success,
    .p-toast-message-warn,
    .p-toast-message-error,
    .p-toast-message-secondary,
    .p-toast-message-contrast {
        border-width: dt('toast.border.width');
        border-style: solid;
        backdrop-filter: blur(dt('toast.blur'));
        border-radius: dt('toast.border.radius');
    }

    .p-toast-close-icon {
        font-size: dt('toast.close.icon.size');
        width: dt('toast.close.icon.size');
        height: dt('toast.close.icon.size');
    }

    .p-toast-close-button:focus-visible {
        outline-width: dt('focus.ring.width');
        outline-style: dt('focus.ring.style');
        outline-offset: dt('focus.ring.offset');
    }

    .p-toast-message-info {
        background: dt('toast.info.background');
        border-color: dt('toast.info.border.color');
        color: dt('toast.info.color');
        box-shadow: dt('toast.info.shadow');
    }

    .p-toast-message-info .p-toast-detail {
        color: dt('toast.info.detail.color');
    }

    .p-toast-message-info .p-toast-close-button:focus-visible {
        outline-color: dt('toast.info.close.button.focus.ring.color');
        box-shadow: dt('toast.info.close.button.focus.ring.shadow');
    }

    .p-toast-message-info .p-toast-close-button:hover {
        background: dt('toast.info.close.button.hover.background');
    }

    .p-toast-message-success {
        background: dt('toast.success.background');
        border-color: dt('toast.success.border.color');
        color: dt('toast.success.color');
        box-shadow: dt('toast.success.shadow');
    }

    .p-toast-message-success .p-toast-detail {
        color: dt('toast.success.detail.color');
    }

    .p-toast-message-success .p-toast-close-button:focus-visible {
        outline-color: dt('toast.success.close.button.focus.ring.color');
        box-shadow: dt('toast.success.close.button.focus.ring.shadow');
    }

    .p-toast-message-success .p-toast-close-button:hover {
        background: dt('toast.success.close.button.hover.background');
    }

    .p-toast-message-warn {
        background: dt('toast.warn.background');
        border-color: dt('toast.warn.border.color');
        color: dt('toast.warn.color');
        box-shadow: dt('toast.warn.shadow');
    }

    .p-toast-message-warn .p-toast-detail {
        color: dt('toast.warn.detail.color');
    }

    .p-toast-message-warn .p-toast-close-button:focus-visible {
        outline-color: dt('toast.warn.close.button.focus.ring.color');
        box-shadow: dt('toast.warn.close.button.focus.ring.shadow');
    }

    .p-toast-message-warn .p-toast-close-button:hover {
        background: dt('toast.warn.close.button.hover.background');
    }

    .p-toast-message-error {
        background: dt('toast.error.background');
        border-color: dt('toast.error.border.color');
        color: dt('toast.error.color');
        box-shadow: dt('toast.error.shadow');
    }

    .p-toast-message-error .p-toast-detail {
        color: dt('toast.error.detail.color');
    }

    .p-toast-message-error .p-toast-close-button:focus-visible {
        outline-color: dt('toast.error.close.button.focus.ring.color');
        box-shadow: dt('toast.error.close.button.focus.ring.shadow');
    }

    .p-toast-message-error .p-toast-close-button:hover {
        background: dt('toast.error.close.button.hover.background');
    }

    .p-toast-message-secondary {
        background: dt('toast.secondary.background');
        border-color: dt('toast.secondary.border.color');
        color: dt('toast.secondary.color');
        box-shadow: dt('toast.secondary.shadow');
    }

    .p-toast-message-secondary .p-toast-detail {
        color: dt('toast.secondary.detail.color');
    }

    .p-toast-message-secondary .p-toast-close-button:focus-visible {
        outline-color: dt('toast.secondary.close.button.focus.ring.color');
        box-shadow: dt('toast.secondary.close.button.focus.ring.shadow');
    }

    .p-toast-message-secondary .p-toast-close-button:hover {
        background: dt('toast.secondary.close.button.hover.background');
    }

    .p-toast-message-contrast {
        background: dt('toast.contrast.background');
        border-color: dt('toast.contrast.border.color');
        color: dt('toast.contrast.color');
        box-shadow: dt('toast.contrast.shadow');
    }
    
    .p-toast-message-contrast .p-toast-detail {
        color: dt('toast.contrast.detail.color');
    }

    .p-toast-message-contrast .p-toast-close-button:focus-visible {
        outline-color: dt('toast.contrast.close.button.focus.ring.color');
        box-shadow: dt('toast.contrast.close.button.focus.ring.shadow');
    }

    .p-toast-message-contrast .p-toast-close-button:hover {
        background: dt('toast.contrast.close.button.hover.background');
    }

    .p-toast-top-center {
        transform: translateX(-50%);
    }

    .p-toast-bottom-center {
        transform: translateX(-50%);
    }

    .p-toast-center {
        min-width: 20vw;
        transform: translate(-50%, -50%);
    }

    .p-toast-message-enter-active {
        animation: p-animate-toast-enter 300ms ease-out;
    }

    .p-toast-message-leave-active {
        animation: p-animate-toast-leave 250ms ease-in;
    }

    .p-toast-message-leave-to .p-toast-message-content {
        padding-top: 0;
        padding-bottom: 0;
    }

    @keyframes p-animate-toast-enter {
        from {
            opacity: 0;
            transform: scale(0.6);
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

     @keyframes p-animate-toast-leave {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
            margin-bottom: 0;
            grid-template-rows: 0fr;
            transform: translateY(-100%) scale(0.6);
        }
    }
`;var ds=(i,o)=>({$implicit:i,closeFn:o}),us=i=>({$implicit:i});function hs(i,o){i&1&&ae(0)}function fs(i,o){if(i&1&&S(0,hs,1,0,"ng-container",3),i&2){let e=p();l("ngTemplateOutlet",e.headlessTemplate)("ngTemplateOutletContext",Tt(2,ds,e.message,e.onCloseIconClick))}}function gs(i,o){if(i&1&&d(0,"span",4),i&2){let e=p(3);v(e.cn(e.cx("messageIcon"),e.message==null?null:e.message.icon)),l("pBind",e.ptm("messageIcon"))}}function bs(i,o){if(i&1&&(z(),d(0,"svg",11)),i&2){let e=p(4);v(e.cx("messageIcon")),l("pBind",e.ptm("messageIcon")),x("aria-hidden",!0)}}function _s(i,o){if(i&1&&(z(),d(0,"svg",12)),i&2){let e=p(4);v(e.cx("messageIcon")),l("pBind",e.ptm("messageIcon")),x("aria-hidden",!0)}}function vs(i,o){if(i&1&&(z(),d(0,"svg",13)),i&2){let e=p(4);v(e.cx("messageIcon")),l("pBind",e.ptm("messageIcon")),x("aria-hidden",!0)}}function ys(i,o){if(i&1&&(z(),d(0,"svg",14)),i&2){let e=p(4);v(e.cx("messageIcon")),l("pBind",e.ptm("messageIcon")),x("aria-hidden",!0)}}function Cs(i,o){if(i&1&&(z(),d(0,"svg",12)),i&2){let e=p(4);v(e.cx("messageIcon")),l("pBind",e.ptm("messageIcon")),x("aria-hidden",!0)}}function xs(i,o){if(i&1&&E(0,bs,1,4,":svg:svg",7)(1,_s,1,4,":svg:svg",8)(2,vs,1,4,":svg:svg",9)(3,ys,1,4,":svg:svg",10)(4,Cs,1,4,":svg:svg",8),i&2){let e,t=p(3);A((e=t.message.severity)==="success"?0:e==="info"?1:e==="error"?2:e==="warn"?3:4)}}function Is(i,o){if(i&1&&(he(0),E(1,gs,1,3,"span",2)(2,xs,5,1),c(3,"div",6)(4,"div",6),f(5),m(),c(6,"div",6),f(7),m()(),fe()),i&2){let e=p(2);a(),A(e.message.icon?1:2),a(2),l("pBind",e.ptm("messageText"))("ngClass",e.cx("messageText")),x("data-p",e.dataP),a(),l("pBind",e.ptm("summary"))("ngClass",e.cx("summary")),x("data-p",e.dataP),a(),N(" ",e.message.summary," "),a(),l("pBind",e.ptm("detail"))("ngClass",e.cx("detail")),x("data-p",e.dataP),a(),B(e.message.detail)}}function ws(i,o){i&1&&ae(0)}function Ms(i,o){if(i&1&&d(0,"span",4),i&2){let e=p(4);v(e.cn(e.cx("closeIcon"),e.message==null?null:e.message.closeIcon)),l("pBind",e.ptm("closeIcon"))}}function Ss(i,o){if(i&1&&S(0,Ms,1,3,"span",17),i&2){let e=p(3);l("ngIf",e.message.closeIcon)}}function ks(i,o){if(i&1&&(z(),d(0,"svg",18)),i&2){let e=p(3);v(e.cx("closeIcon")),l("pBind",e.ptm("closeIcon")),x("aria-hidden",!0)}}function Ts(i,o){if(i&1){let e=T();c(0,"div")(1,"button",15),C("click",function(n){u(e);let r=p(2);return h(r.onCloseIconClick(n))})("keydown.enter",function(n){u(e);let r=p(2);return h(r.onCloseIconClick(n))}),E(2,Ss,1,1,"span",2)(3,ks,1,4,":svg:svg",16),m()()}if(i&2){let e=p(2);a(),l("pBind",e.ptm("closeButton")),x("class",e.cx("closeButton"))("aria-label",e.closeAriaLabel)("data-p",e.dataP),a(),A(e.message.closeIcon?2:3)}}function Es(i,o){if(i&1&&(c(0,"div",4),S(1,Is,8,12,"ng-container",5)(2,ws,1,0,"ng-container",3),E(3,Ts,4,5,"div"),m()),i&2){let e=p();v(e.cn(e.cx("messageContent"),e.message==null?null:e.message.contentStyleClass)),l("pBind",e.ptm("messageContent")),a(),l("ngIf",!e.template),a(),l("ngTemplateOutlet",e.template)("ngTemplateOutletContext",Ae(7,us,e.message)),a(),A((e.message==null?null:e.message.closable)!==!1?3:-1)}}var As=["message"],Ps=["headless"];function Ls(i,o){if(i&1){let e=T();c(0,"p-toastItem",1),C("onClose",function(n){u(e);let r=p();return h(r.onMessageClose(n))})("onAnimationEnd",function(){u(e);let n=p();return h(n.onAnimationEnd())})("onAnimationStart",function(){u(e);let n=p();return h(n.onAnimationStart())}),m()}if(i&2){let e=o.$implicit,t=o.index,n=p();l("message",e)("index",t)("life",n.life)("clearAll",n.clearAllTrigger())("template",n.template||n._template)("headlessTemplate",n.headlessTemplate||n._headlessTemplate)("pt",n.pt)("unstyled",n.unstyled())("motionOptions",n.computedMotionOptions())}}var Bs={root:({instance:i})=>{let{_position:o}=i;return{position:"fixed",top:o==="top-right"||o==="top-left"||o==="top-center"?"20px":o==="center"?"50%":null,right:(o==="top-right"||o==="bottom-right")&&"20px",bottom:(o==="bottom-left"||o==="bottom-right"||o==="bottom-center")&&"20px",left:o==="top-left"||o==="bottom-left"?"20px":o==="center"||o==="top-center"||o==="bottom-center"?"50%":null}}},Ds={root:({instance:i})=>["p-toast p-component",`p-toast-${i._position}`],message:({instance:i})=>({"p-toast-message":!0,"p-toast-message-info":i.message.severity==="info"||i.message.severity===void 0,"p-toast-message-warn":i.message.severity==="warn","p-toast-message-error":i.message.severity==="error","p-toast-message-success":i.message.severity==="success","p-toast-message-secondary":i.message.severity==="secondary","p-toast-message-contrast":i.message.severity==="contrast"}),messageContent:"p-toast-message-content",messageIcon:({instance:i})=>({"p-toast-message-icon":!0,[`pi ${i.message.icon}`]:!!i.message.icon}),messageText:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-close-button",closeIcon:({instance:i})=>({"p-toast-close-icon":!0,[`pi ${i.message.closeIcon}`]:!!i.message.closeIcon})},Yt=(()=>{class i extends De{name="toast";style=go;classes=Ds;inlineStyles=Bs;static \u0275fac=(()=>{let e;return function(n){return(e||(e=j(i)))(n||i)}})();static \u0275prov=X({token:i,factory:i.\u0275fac})}return i})();var bo=new ie("TOAST_INSTANCE"),Os=(()=>{class i extends Oe{zone;message;index;life;template;headlessTemplate;showTransformOptions;hideTransformOptions;showTransitionOptions;hideTransitionOptions;motionOptions=me();clearAll=me(null);onAnimationStart=ii();onAnimationEnd=ii();onBeforeEnter(e){this.onAnimationStart.emit(e.element)}onAfterLeave(e){!this.visible()&&!this.isDestroyed&&(this.onClose.emit({index:this.index,message:this.message}),this.isDestroyed||this.onAnimationEnd.emit(e.element))}onClose=new U;_componentStyle=g(Yt);timeout;visible=re(void 0);isDestroyed=!1;isClosing=!1;constructor(e){super(),this.zone=e,et(()=>{this.clearAll()&&this.visible.set(!1)})}onAfterViewInit(){this.message?.sticky&&this.visible.set(!0),this.initTimeout()}initTimeout(){this.message?.sticky||(this.clearTimeout(),this.zone.runOutsideAngular(()=>{this.visible.set(!0),this.timeout=setTimeout(()=>{this.visible.set(!1)},this.message?.life||this.life||3e3)}))}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.isClosing||this.initTimeout()}onCloseIconClick=e=>{this.isClosing=!0,this.clearTimeout(),this.visible.set(!1),e.preventDefault()};get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}onDestroy(){this.isDestroyed=!0,this.clearTimeout(),this.visible.set(!1)}get dataP(){return this.cn({[this.message?.severity]:this.message?.severity})}static \u0275fac=function(t){return new(t||i)(q(Je))};static \u0275cmp=M({type:i,selectors:[["p-toastItem"]],inputs:{message:"message",index:[2,"index","index",de],life:[2,"life","life",de],template:"template",headlessTemplate:"headlessTemplate",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",motionOptions:[1,"motionOptions"],clearAll:[1,"clearAll"]},outputs:{onAnimationStart:"onAnimationStart",onAnimationEnd:"onAnimationEnd",onClose:"onClose"},features:[ge([Yt]),K],decls:4,vars:10,consts:[["container",""],["role","alert","aria-live","assertive","aria-atomic","true",3,"pMotionOnBeforeEnter","pMotionOnAfterLeave","mouseenter","mouseleave","pMotion","pMotionAppear","pMotionName","pMotionOptions","pBind"],[3,"pBind","class"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],[4,"ngIf"],[3,"pBind","ngClass"],["data-p-icon","check",3,"pBind","class"],["data-p-icon","info-circle",3,"pBind","class"],["data-p-icon","times-circle",3,"pBind","class"],["data-p-icon","exclamation-triangle",3,"pBind","class"],["data-p-icon","check",3,"pBind"],["data-p-icon","info-circle",3,"pBind"],["data-p-icon","times-circle",3,"pBind"],["data-p-icon","exclamation-triangle",3,"pBind"],["type","button","autofocus","",3,"click","keydown.enter","pBind"],["data-p-icon","times",3,"pBind","class"],[3,"pBind","class",4,"ngIf"],["data-p-icon","times",3,"pBind"]],template:function(t,n){if(t&1){let r=T();c(0,"div",1,0),C("pMotionOnBeforeEnter",function(y){return u(r),h(n.onBeforeEnter(y))})("pMotionOnAfterLeave",function(y){return u(r),h(n.onAfterLeave(y))})("mouseenter",function(){return u(r),h(n.onMouseEnter())})("mouseleave",function(){return u(r),h(n.onMouseLeave())}),E(2,fs,1,5,"ng-container")(3,Es,4,9,"div",2),m()}t&2&&(v(n.cn(n.cx("message"),n.message==null?null:n.message.styleClass)),l("pMotion",n.visible())("pMotionAppear",!0)("pMotionName","p-toast-message")("pMotionOptions",n.motionOptions())("pBind",n.ptm("message")),x("id",n.message==null?null:n.message.id)("data-p",n.dataP),a(2),A(n.headlessTemplate?2:3))},dependencies:[L,be,Me,Ne,dn,Vn,Rn,Vt,Fn,Q,D,ut,Ft],encapsulation:2,changeDetection:0})}return i})(),_o=(()=>{class i extends Oe{componentName="Toast";$pcToast=g(bo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(D,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}key;autoZIndex=!0;baseZIndex=0;life=3e3;styleClass;get position(){return this._position}set position(e){this._position=e,this.cd.markForCheck()}preventOpenDuplicates=!1;preventDuplicates=!1;showTransformOptions="translateY(100%)";hideTransformOptions="translateY(-100%)";showTransitionOptions="300ms ease-out";hideTransitionOptions="250ms ease-in";motionOptions=me(void 0);computedMotionOptions=H(()=>k(k({},this.ptm("motion")),this.motionOptions()));breakpoints;onClose=new U;template;headlessTemplate;messageSubscription;clearSubscription;messages;messagesArchieve;_position="top-right";messageService=g(Dt);_componentStyle=g(Yt);styleElement;id=Be("pn_id_");templates;clearAllTrigger=re(null);constructor(){super()}onInit(){this.messageSubscription=this.messageService.messageObserver.subscribe(e=>{if(e)if(Array.isArray(e)){let t=e.filter(n=>this.canAdd(n));this.add(t)}else this.canAdd(e)&&this.add([e])}),this.clearSubscription=this.messageService.clearObserver.subscribe(e=>{e?this.key===e&&this.clearAll():this.clearAll(),this.cd.markForCheck()})}clearAll(){this.clearAllTrigger.set({})}_template;_headlessTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"message":this._template=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._template=e.template;break}})}onAfterViewInit(){this.breakpoints&&this.createStyle()}add(e){this.messages=this.messages?[...this.messages,...e]:[...e],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...e]:[...e]),this.cd.markForCheck()}canAdd(e){let t=this.key===e.key;return t&&this.preventOpenDuplicates&&(t=!this.containsMessage(this.messages,e)),t&&this.preventDuplicates&&(t=!this.containsMessage(this.messagesArchieve,e)),t}containsMessage(e,t){return e?e.find(n=>n.summary===t.summary&&n.detail==t.detail&&n.severity===t.severity)!=null:!1}onMessageClose(e){this.messages?.splice(e.index,1),this.onClose.emit({message:e.message}),this.onAnimationEnd(),this.cd.detectChanges()}onAnimationStart(){this.renderer.setAttribute(this.el?.nativeElement,this.id,""),this.autoZIndex&&this.el?.nativeElement.style.zIndex===""&&le.set("modal",this.el?.nativeElement,this.baseZIndex||this.config.zIndex.modal)}onAnimationEnd(){this.autoZIndex&&ct(this.messages)&&le.clear(this.el?.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",lt(this.styleElement,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.styleElement);let e="";for(let t in this.breakpoints){let n="";for(let r in this.breakpoints[t])n+=r+":"+this.breakpoints[t][r]+" !important;";e+=`
                    @media screen and (max-width: ${t}) {
                        .p-toast[${this.id}] {
                           ${n}
                        }
                    }
                `}this.renderer.setProperty(this.styleElement,"innerHTML",e),lt(this.styleElement,"nonce",this.config?.csp()?.nonce)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}onDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.el&&this.autoZIndex&&le.clear(this.el.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle()}get dataP(){return this.cn({[this.position]:this.position})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["p-toast"]],contentQueries:function(t,n,r){if(t&1&&qe(r,As,5)(r,Ps,5)(r,Ke,4),t&2){let s;I(s=w())&&(n.template=s.first),I(s=w())&&(n.headlessTemplate=s.first),I(s=w())&&(n.templates=s)}},hostVars:5,hostBindings:function(t,n){t&2&&(x("data-p",n.dataP),Ee(n.sx("root")),v(n.cn(n.cx("root"),n.styleClass)))},inputs:{key:"key",autoZIndex:[2,"autoZIndex","autoZIndex",P],baseZIndex:[2,"baseZIndex","baseZIndex",de],life:[2,"life","life",de],styleClass:"styleClass",position:"position",preventOpenDuplicates:[2,"preventOpenDuplicates","preventOpenDuplicates",P],preventDuplicates:[2,"preventDuplicates","preventDuplicates",P],showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",motionOptions:[1,"motionOptions"],breakpoints:"breakpoints"},outputs:{onClose:"onClose"},features:[ge([Yt,{provide:bo,useExisting:i},{provide:ke,useExisting:i}]),Ie([D]),K],decls:1,vars:1,consts:[[3,"message","index","life","clearAll","template","headlessTemplate","pt","unstyled","motionOptions","onClose","onAnimationEnd","onAnimationStart",4,"ngFor","ngForOf"],[3,"onClose","onAnimationEnd","onAnimationStart","message","index","life","clearAll","template","headlessTemplate","pt","unstyled","motionOptions"]],template:function(t,n){t&1&&S(0,Ls,1,9,"p-toastItem",0),t&2&&l("ngForOf",n.messages)},dependencies:[L,At,Os,Q],encapsulation:2,changeDetection:0})}return i})();var Jt=class i{breakpoints={"920px":{width:"90%",right:"auto",left:"5%"}};static \u0275fac=function(e){return new(e||i)};static \u0275cmp=M({type:i,selectors:[["app-root"]],decls:2,vars:1,consts:[["position","bottom-right",3,"breakpoints"]],template:function(e,t){e&1&&d(0,"router-outlet")(1,"p-toast",0),e&2&&(a(),l("breakpoints",t.breakpoints))},dependencies:[Lt,_o],encapsulation:2})};vn();Ni(Jt,fo).catch(i=>console.error(i));
