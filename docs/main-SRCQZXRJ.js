import{c as Ct,d as Pe,f as W,g as ct,h as De}from"./chunk-CJPLD6EO.js";import{B as Rn,C as Fn,E as Vn,J as zn,K as $n,L as jn,M as le,P as qn,Q as Kn,R as Gn,T as Xt,U as Jt,V as Qn,W as Un,a as bn,c as vn,d as Zt,n as gt,p as Tn,r as Ln,s as Bn,t as On,u as Wt,x as Se,y as Me,z as oe}from"./chunk-E7PG3OJC.js";import{A as _n,Aa as Mn,B as yn,C as Cn,Ca as Le,D as xn,E as ne,F as wn,G as Ie,H as Ae,Ha as Qe,Na as Qt,Q as In,R as Mi,Ra as Ue,S as ki,Sa as Y,Va as kn,W as xt,Wa as $e,X as mt,Xa as Be,Ya as ft,Za as Ut,_a as z,b as $t,bb as En,c as xe,cb as An,db as Pn,e as jt,f as Ne,g as lt,gb as Dn,h as ze,hb as wt,ib as Ze,j as A,k as wi,ka as Sn,kb as Yt,l as Ii,lb as bt,m as mn,mb as We,n as un,nb as Hn,oa as ut,p as Si,pb as X,q as qt,qa as ht,qb as Nn,r as hn,rb as J,s as fn,t as gn,ta as Z,v as dt,w as Kt,x as we,xa as Ti,y as pt,ya as Ei,z as Gt}from"./chunk-AXJ5RZJW.js";import{$ as f,$b as Ve,A as it,Ab as c,Ac as j,Bb as l,C as Ki,Cb as d,Db as m,Dc as xi,E as Gi,Eb as O,Ec as He,Fb as N,Gb as U,Hb as _e,Ib as ye,Ic as dn,Jb as re,Jc as pn,Kb as P,Lb as Ee,Ma as yt,N as Bt,Na as Ot,Nc as R,O as Qi,Oc as he,Pb as y,Q as Je,Qa as s,Qb as p,R as be,Rb as Rt,S as ee,Sb as Ft,Tb as Ge,U as me,Ua as en,Ub as ae,Vb as M,W as _,Wb as k,X as Ui,Xa as tn,Ya as rt,Za as G,_a as nn,_b as Ci,a as S,aa as g,ac as ie,b as B,ba as H,bc as ue,ca as Zi,cc as w,da as Wi,dc as h,e as gi,eb as C,ec as L,fb as te,fc as V,ga as $,gb as _i,gc as sn,ha as nt,hc as Vt,ib as Fe,ic as Ht,jb as q,jc as Nt,ka as Yi,kb as I,kc as ln,la as ve,lc as se,ma as Xi,mc as st,n as qi,nb as on,nc as Ce,oa as ot,oc as zt,pb as rn,qa as vi,qb as yi,ra as K,rb as x,ta as Re,ub as T,uc as b,vb as E,vc as v,wb as at,wc as cn,x as bi,xb as an,xc as et,ya as Ji,yb as qe,zb as Ke}from"./chunk-HSP3RMEJ.js";var Zo="@",Wo=(()=>{class t{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=_(Zi);loadingSchedulerFn=_(Yo,{optional:!0});_engine;constructor(e,i,n,r,a){this.doc=e,this.delegate=i,this.zone=n,this.animationType=r,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-GNK2DIBN.js").then(n=>n),i;return this.loadingSchedulerFn?i=this.loadingSchedulerFn(e):i=e(),i.catch(n=>{throw new Qi(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:r})=>{this._engine=n(this.animationType,this.doc);let a=new r(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,i){let n=this.delegate.createRenderer(e,i);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let r=new Ai(n);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let u=a.createRenderer(e,i);r.use(u),this.scheduler??=this.injector.get(Xi,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{r.use(n)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(i){nn()};static \u0275prov=be({token:t,factory:t.\u0275fac})}return t})(),Ai=class{delegate;replay=[];\u0275type=1;constructor(o){this.delegate=o}use(o){if(this.delegate=o,this.replay!==null){for(let e of this.replay)e(o);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(o,e){return this.delegate.createElement(o,e)}createComment(o){return this.delegate.createComment(o)}createText(o){return this.delegate.createText(o)}get destroyNode(){return this.delegate.destroyNode}appendChild(o,e){this.delegate.appendChild(o,e)}insertBefore(o,e,i,n){this.delegate.insertBefore(o,e,i,n)}removeChild(o,e,i,n){this.delegate.removeChild(o,e,i,n)}selectRootElement(o,e){return this.delegate.selectRootElement(o,e)}parentNode(o){return this.delegate.parentNode(o)}nextSibling(o){return this.delegate.nextSibling(o)}setAttribute(o,e,i,n){this.delegate.setAttribute(o,e,i,n)}removeAttribute(o,e,i){this.delegate.removeAttribute(o,e,i)}addClass(o,e){this.delegate.addClass(o,e)}removeClass(o,e){this.delegate.removeClass(o,e)}setStyle(o,e,i,n){this.delegate.setStyle(o,e,i,n)}removeStyle(o,e,i){this.delegate.removeStyle(o,e,i)}setProperty(o,e,i){this.shouldReplay(e)&&this.replay.push(n=>n.setProperty(o,e,i)),this.delegate.setProperty(o,e,i)}setValue(o,e){this.delegate.setValue(o,e)}listen(o,e,i,n){return this.shouldReplay(e)&&this.replay.push(r=>r.listen(o,e,i,n)),this.delegate.listen(o,e,i,n)}shouldReplay(o){return this.replay!==null&&o.startsWith(Zo)}},Yo=new me("");function Zn(t="animations"){return en("NgAsyncAnimations"),Ui([{provide:tn,useFactory:()=>new Wo(_(Wi),_(mn),_(nt),t)},{provide:Ji,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Wn=(t,o)=>{let e=_(we);return o(t).pipe(Ki(i=>{let n={title:Xo(i.status),description:Jo(i),code:`ERROR_${i.status}`,status:i.status,statusText:i.statusText,message:i.message,url:i.url||t.url,timestamp:new Date().toISOString()};return e.navigate(["/error"],{state:{error:n}}),qi(()=>i)}))};function Xo(t){return{400:"errors.titles.400",401:"errors.titles.401",403:"errors.titles.403",404:"errors.titles.404",408:"errors.titles.408",409:"errors.titles.409",422:"errors.titles.422",429:"errors.titles.429",500:"errors.titles.500",502:"errors.titles.502",503:"errors.titles.503",504:"errors.titles.504"}[t]||"errors.titles.default"}function Jo(t){return t.error?.message?t.error.message:{400:"errors.descriptions.400",401:"errors.descriptions.401",403:"errors.descriptions.403",404:"errors.descriptions.404",408:"errors.descriptions.408",409:"errors.descriptions.409",422:"errors.descriptions.422",429:"errors.descriptions.429",500:"errors.descriptions.500",502:"errors.descriptions.502",503:"errors.descriptions.503",504:"errors.descriptions.504"}[t.status]||"errors.descriptions.default"}var Yn=fn([vn,Wn]);var Xn=(()=>{class t{el;renderer;zone;constructor(e,i,n){this.el=e,this.renderer=i,this.zone=n}selector;enterFromClass;enterActiveClass;enterToClass;leaveFromClass;leaveActiveClass;leaveToClass;hideOnOutsideClick;toggleClass;hideOnEscape;hideOnResize;resizeSelector;eventListener;documentClickListener;documentKeydownListener;windowResizeListener;resizeObserver;target;enterListener;leaveListener;animating;_enterClass;_leaveClass;_resizeTarget;clickListener(){this.target||=Mi(this.selector,this.el.nativeElement),this.toggleClass?this.toggle():this.target?.offsetParent===null?this.enter():this.leave()}toggle(){wn(this.target,this.toggleClass)?Ae(this.target,this.toggleClass):Ie(this.target,this.toggleClass)}enter(){this.enterActiveClass?this.animating||(this.animating=!0,this.enterActiveClass.includes("slidedown")&&(this.target.style.height="0px",Ae(this.target,this.enterFromClass||"hidden"),this.target.style.maxHeight=this.target.scrollHeight+"px",Ie(this.target,this.enterFromClass||"hidden"),this.target.style.height=""),Ie(this.target,this.enterActiveClass),this.enterFromClass&&Ae(this.target,this.enterFromClass),this.enterListener=this.renderer.listen(this.target,"animationend",()=>{Ae(this.target,this.enterActiveClass),this.enterToClass&&Ie(this.target,this.enterToClass),this.enterListener&&this.enterListener(),this.enterActiveClass?.includes("slidedown")&&(this.target.style.maxHeight=""),this.animating=!1})):(this.enterFromClass&&Ae(this.target,this.enterFromClass),this.enterToClass&&Ie(this.target,this.enterToClass)),this.hideOnOutsideClick&&this.bindDocumentClickListener(),this.hideOnEscape&&this.bindDocumentKeydownListener(),this.hideOnResize&&this.bindResizeListener()}leave(){this.leaveActiveClass?this.animating||(this.animating=!0,Ie(this.target,this.leaveActiveClass),this.leaveFromClass&&Ae(this.target,this.leaveFromClass),this.leaveListener=this.renderer.listen(this.target,"animationend",()=>{Ae(this.target,this.leaveActiveClass),this.leaveToClass&&Ie(this.target,this.leaveToClass),this.leaveListener&&this.leaveListener(),this.animating=!1})):(this.leaveFromClass&&Ae(this.target,this.leaveFromClass),this.leaveToClass&&Ie(this.target,this.leaveToClass)),this.hideOnOutsideClick&&this.unbindDocumentClickListener(),this.hideOnEscape&&this.unbindDocumentKeydownListener(),this.hideOnResize&&this.unbindResizeListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.el.nativeElement.ownerDocument,"click",e=>{!this.isVisible()||getComputedStyle(this.target).getPropertyValue("position")==="static"?this.unbindDocumentClickListener():this.isOutsideClick(e)&&this.leave()}))}bindDocumentKeydownListener(){this.documentKeydownListener||this.zone.runOutsideAngular(()=>{this.documentKeydownListener=this.renderer.listen(this.el.nativeElement.ownerDocument,"keydown",e=>{let{key:i,keyCode:n,which:r,type:a}=e;(!this.isVisible()||getComputedStyle(this.target).getPropertyValue("position")==="static")&&this.unbindDocumentKeydownListener(),this.isVisible()&&i==="Escape"&&n===27&&r===27&&this.leave()})})}isVisible(){return this.target.offsetParent!==null}isOutsideClick(e){return!this.el.nativeElement.isSameNode(e.target)&&!this.el.nativeElement.contains(e.target)&&!this.target.contains(e.target)}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}unbindDocumentKeydownListener(){this.documentKeydownListener&&(this.documentKeydownListener(),this.documentKeydownListener=null)}bindResizeListener(){this._resizeTarget=Mi(this.resizeSelector),In(this._resizeTarget)?this.bindElementResizeListener():this.bindWindowResizeListener()}unbindResizeListener(){this.unbindWindowResizeListener(),this.unbindElementResizeListener()}bindWindowResizeListener(){this.windowResizeListener||this.zone.runOutsideAngular(()=>{this.windowResizeListener=this.renderer.listen(window,"resize",()=>{this.isVisible()?this.leave():this.unbindWindowResizeListener()})})}unbindWindowResizeListener(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null)}bindElementResizeListener(){if(!this.resizeObserver&&this._resizeTarget){let e=!0;this.resizeObserver=new ResizeObserver(()=>{if(e){e=!1;return}this.isVisible()&&this.leave()}),this.resizeObserver.observe(this._resizeTarget)}}unbindElementResizeListener(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=void 0)}ngOnDestroy(){this.target=null,this._resizeTarget=null,this.eventListener&&this.eventListener(),this.unbindDocumentClickListener(),this.unbindDocumentKeydownListener(),this.unbindResizeListener()}static \u0275fac=function(i){return new(i||t)(G(Re),G(rt),G(nt))};static \u0275dir=_i({type:t,selectors:[["","pStyleClass",""]],hostBindings:function(i,n){i&1&&y("click",function(){return n.clickListener()})},inputs:{selector:[0,"pStyleClass","selector"],enterFromClass:"enterFromClass",enterActiveClass:"enterActiveClass",enterToClass:"enterToClass",leaveFromClass:"leaveFromClass",leaveActiveClass:"leaveActiveClass",leaveToClass:"leaveToClass",hideOnOutsideClick:[2,"hideOnOutsideClick","hideOnOutsideClick",R],toggleClass:"toggleClass",hideOnEscape:[2,"hideOnEscape","hideOnEscape",R],hideOnResize:[2,"hideOnResize","hideOnResize",R],resizeSelector:"resizeSelector"}})}return t})(),Jn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=te({type:t});static \u0275inj=ee({})}return t})();var tr=["data-p-icon","bars"],eo=(()=>{class t extends Ze{static \u0275fac=(()=>{let e;return function(n){return(e||(e=K(t)))(n||t)}})();static \u0275cmp=C({type:t,selectors:[["","data-p-icon","bars"]],features:[q],attrs:tr,decls:1,vars:0,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z","fill","currentColor"]],template:function(i,n){i&1&&(H(),U(0,"path",0))},encapsulation:2})}return t})();var ir=["data-p-icon","exclamation-triangle"],to=(()=>{class t extends Ze{pathId;onInit(){this.pathId="url(#"+Le()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=K(t)))(n||t)}})();static \u0275cmp=C({type:t,selectors:[["","data-p-icon","exclamation-triangle"]],features:[q],attrs:ir,decls:7,vars:2,consts:[["d","M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z","fill","currentColor"],["d","M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z","fill","currentColor"],["d","M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(H(),O(0,"g"),U(1,"path",0)(2,"path",1)(3,"path",2),N(),O(4,"defs")(5,"clipPath",3),U(6,"rect",4),N()()),i&2&&(x("clip-path",n.pathId),s(5),Ee("id",n.pathId))},encapsulation:2})}return t})();var nr=["data-p-icon","info-circle"],io=(()=>{class t extends Ze{pathId;onInit(){this.pathId="url(#"+Le()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=K(t)))(n||t)}})();static \u0275cmp=C({type:t,selectors:[["","data-p-icon","info-circle"]],features:[q],attrs:nr,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(H(),O(0,"g"),U(1,"path",0),N(),O(2,"defs")(3,"clipPath",1),U(4,"rect",2),N()()),i&2&&(x("clip-path",n.pathId),s(3),Ee("id",n.pathId))},encapsulation:2})}return t})();var or=["data-p-icon","times-circle"],no=(()=>{class t extends Ze{pathId;onInit(){this.pathId="url(#"+Le()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=K(t)))(n||t)}})();static \u0275cmp=C({type:t,selectors:[["","data-p-icon","times-circle"]],features:[q],attrs:or,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(H(),O(0,"g"),U(1,"path",0),N(),O(2,"defs")(3,"clipPath",1),U(4,"rect",2),N()()),i&2&&(x("clip-path",n.pathId),s(3),Ee("id",n.pathId))},encapsulation:2})}return t})();var oo=`
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
`;var ao=t=>({processedItem:t}),rr=()=>({exact:!1}),ar=t=>({$implicit:t});function sr(t,o){if(t&1&&(l(0,"li",5),h(1),d()),t&2){let e=p();ue(e.getItemProp(e.submenu,"style")),w(e.cn(e.cx("submenuLabel"),e.getItemProp(e.submenu,"class"))),c("pBind",e.ptm("submenuLabel")),s(),V(" ",e.getItemLabel(e.submenu)," ")}}function lr(t,o){if(t&1&&m(0,"li",8),t&2){let e=p().$implicit,i=p();ue(i.getItemProp(e,"style")),w(i.cn(i.cx("separator"),i.getItemProp(e,"class"))),c("pBind",i.ptm("separator")),x("id",i.getItemId(e))}}function cr(t,o){if(t&1&&m(0,"span",19),t&2){let e=p(4),i=e.$implicit,n=e.index,r=p();w(r.cn(r.cx("itemIcon"),r.getItemProp(i,"icon"),r.getItemProp(i,"iconClass"))),c("ngStyle",r.getItemProp(i,"iconStyle"))("pBind",r.getPTOptions(i,n,"itemIcon")),x("tabindex",-1)}}function dr(t,o){if(t&1&&(l(0,"span",19),h(1),d()),t&2){let e=p(4),i=e.$implicit,n=e.index,r=p();w(r.cn(r.cx("itemLabel"),r.getItemProp(i,"labelClass"))),c("ngStyle",r.getItemProp(i,"labelStyle"))("pBind",r.getPTOptions(i,n,"itemLabel")),s(),V(" ",r.getItemLabel(i)," ")}}function pr(t,o){if(t&1&&m(0,"span",20),t&2){let e=p(4),i=e.$implicit,n=e.index,r=p();w(r.cn(r.cx("itemLabel"),r.getItemProp(i,"labelClass"))),c("ngStyle",r.getItemProp(i,"labelStyle"))("innerHTML",r.getItemLabel(i),yt)("pBind",r.getPTOptions(i,n,"itemLabel"))}}function mr(t,o){if(t&1&&m(0,"p-badge",21),t&2){let e=p(4).$implicit,i=p();w(i.getItemProp(e,"badgeStyleClass")),c("value",i.getItemProp(e,"badge"))("unstyled",i.unstyled())}}function ur(t,o){if(t&1&&(H(),m(0,"svg",25)),t&2){let e=p(6),i=e.$implicit,n=e.index,r=p();w(r.cx("submenuIcon")),c("pBind",r.getPTOptions(i,n,"submenuIcon")),x("aria-hidden",!0)}}function hr(t,o){if(t&1&&(H(),m(0,"svg",27)),t&2){let e=p(7),i=e.$implicit,n=e.index,r=p();w(r.cx("submenuIcon")),c("pBind",r.getPTOptions(i,n,"submenuIcon")),x("aria-hidden",!0)}}function fr(t,o){if(t&1&&I(0,hr,1,4,"svg",26),t&2){let e=p(7);c("ngIf",e.orientation==="vertical")}}function gr(t,o){if(t&1&&(_e(0),T(1,ur,1,4,":svg:svg",23)(2,fr,1,1,":svg:svg",24),ye()),t&2){let e=p(6);s(),E(e.orientation==="horizontal"||e.mobileActive?1:2)}}function br(t,o){}function vr(t,o){t&1&&I(0,br,0,0,"ng-template",28),t&2&&yi("aria-hidden",!0)}function _r(t,o){if(t&1&&(_e(0),I(1,gr,3,1,"ng-container",11)(2,vr,1,1,null,22),ye()),t&2){let e=p(5);s(),c("ngIf",!e.megaMenu.submenuIconTemplate&&!e.megaMenu._submenuIconTemplate),s(),c("ngTemplateOutlet",e.megaMenu.submenuIconTemplate||e.megaMenu._submenuIconTemplate)}}function yr(t,o){if(t&1&&(l(0,"a",15),I(1,cr,1,5,"span",16)(2,dr,2,5,"span",17)(3,pr,1,5,"ng-template",null,1,et)(5,mr,1,4,"p-badge",18)(6,_r,3,2,"ng-container",11),d()),t&2){let e=Ci(4),i=p(3),n=i.$implicit,r=i.index,a=p();w(a.cn(a.cx("itemLink"),a.getItemProp(n,"linkClass"))),c("target",a.getItemProp(n,"target"))("ngStyle",a.getItemProp(n,"linkStyle"))("pBind",a.getPTOptions(n,r,"itemLink")),x("href",a.getItemProp(n,"url"),Ot)("data-automationid",a.getItemProp(n,"automationId"))("title",a.getItemProp(n,"title"))("tabindex",-1),s(),c("ngIf",a.getItemProp(n,"icon")),s(),c("ngIf",a.getItemProp(n,"escape"))("ngIfElse",e),s(3),c("ngIf",a.getItemProp(n,"badge")),s(),c("ngIf",a.isItemGroup(n))}}function Cr(t,o){if(t&1&&m(0,"span",19),t&2){let e=p(4),i=e.$implicit,n=e.index,r=p();w(r.cn(r.cx("itemIcon"),r.getItemProp(i,"icon"),r.getItemProp(i,"iconClass"))),c("ngStyle",r.getItemProp(i,"iconStyle"))("pBind",r.getPTOptions(i,n,"itemIcon")),x("tabindex",-1)}}function xr(t,o){if(t&1&&(l(0,"span",19),h(1),d()),t&2){let e=p(4),i=e.$implicit,n=e.index,r=p();w(r.cn(r.cx("itemLabel"),r.getItemProp(i,"labelClass"))),c("ngStyle",r.getItemProp(i,"labelStyle"))("pBind",r.getPTOptions(i,n,"itemLabel")),s(),L(r.getItemLabel(i))}}function wr(t,o){if(t&1&&m(0,"span",20),t&2){let e=p(4),i=e.$implicit,n=e.index,r=p();w(r.cn(r.cx("itemLabel"),r.getItemProp(i,"labelClass"))),c("ngStyle",r.getItemProp(i,"labelStyle"))("innerHTML",r.getItemLabel(i),yt)("pBind",r.getPTOptions(i,n,"itemLabel"))}}function Ir(t,o){if(t&1&&m(0,"p-badge",31),t&2){let e=p(4).$implicit,i=p();c("styleClass",i.getItemProp(e,"badgeStyleClass"))("value",i.getItemProp(e,"badge"))("unstyled",i.unstyled())}}function Sr(t,o){if(t&1&&(H(),m(0,"svg",25)),t&2){let e=p(6),i=e.$implicit,n=e.index,r=p();w(r.cx("submenuIcon")),c("pBind",r.getPTOptions(i,n,"submenuIcon")),x("aria-hidden",!0)}}function Mr(t,o){if(t&1&&(H(),m(0,"svg",27)),t&2){let e=p(6),i=e.$implicit,n=e.index,r=p();w(r.cx("submenuIcon")),c("pBind",r.getPTOptions(i,n,"submenuIcon")),x("aria-hidden",!0)}}function kr(t,o){if(t&1&&(_e(0),I(1,Sr,1,4,"svg",32)(2,Mr,1,4,"svg",26),ye()),t&2){let e=p(6);s(),c("ngIf",e.orientation==="horizontal"),s(),c("ngIf",e.orientation==="vertical")}}function Tr(t,o){}function Er(t,o){t&1&&I(0,Tr,0,0,"ng-template",28),t&2&&yi("aria-hidden",!0)}function Ar(t,o){if(t&1&&(_e(0),I(1,kr,3,2,"ng-container",11)(2,Er,1,1,null,22),ye()),t&2){let e=p(5);s(),c("ngIf",!e.megaMenu.submenuIconTemplate&&!e.megaMenu._submenuIconTemplate),s(),c("ngTemplateOutlet",e.megaMenu.submenuIconTemplate||e.megaMenu._submenuIconTemplate)}}function Pr(t,o){if(t&1&&(l(0,"a",29),I(1,Cr,1,5,"span",16)(2,xr,2,5,"span",17)(3,wr,1,5,"ng-template",null,2,et)(5,Ir,1,3,"p-badge",30)(6,Ar,3,2,"ng-container",11),d()),t&2){let e=Ci(4),i=p(3),n=i.$implicit,r=i.index,a=p();w(a.cn(a.cx("itemLink"),a.getItemProp(n,"linkClass"))),c("routerLink",a.getItemProp(n,"routerLink"))("queryParams",a.getItemProp(n,"queryParams"))("routerLinkActive","p-megamenu-item-link-active")("routerLinkActiveOptions",a.getItemProp(n,"routerLinkActiveOptions")||st(23,rr))("target",a.getItemProp(n,"target"))("ngStyle",a.getItemProp(n,"linkStyle"))("fragment",a.getItemProp(n,"fragment"))("queryParamsHandling",a.getItemProp(n,"queryParamsHandling"))("preserveFragment",a.getItemProp(n,"preserveFragment"))("skipLocationChange",a.getItemProp(n,"skipLocationChange"))("replaceUrl",a.getItemProp(n,"replaceUrl"))("state",a.getItemProp(n,"state"))("pBind",a.getPTOptions(n,r,"itemLink")),x("data-automationid",a.getItemProp(n,"automationId"))("title",a.getItemProp(n,"title"))("tabindex",-1),s(),c("ngIf",a.getItemProp(n,"icon")),s(),c("ngIf",a.getItemProp(n,"escape"))("ngIfElse",e),s(3),c("ngIf",a.getItemProp(n,"badge")),s(),c("ngIf",a.isItemGroup(n))}}function Dr(t,o){if(t&1&&(_e(0),I(1,yr,7,14,"a",13)(2,Pr,7,24,"a",14),ye()),t&2){let e=p(2).$implicit,i=p();s(),c("ngIf",!i.getItemProp(e,"routerLink")),s(),c("ngIf",i.getItemProp(e,"routerLink"))}}function Lr(t,o){}function Br(t,o){t&1&&I(0,Lr,0,0,"ng-template")}function Or(t,o){if(t&1&&(_e(0),I(1,Br,1,0,null,33),ye()),t&2){let e=p(2).$implicit,i=p();s(),c("ngTemplateOutlet",i.itemTemplate)("ngTemplateOutletContext",Ce(2,ar,e.item))}}function Rr(t,o){if(t&1){let e=P();l(0,"ul",37),y("itemClick",function(n){f(e);let r=p(5);return g(r.itemClick.emit(n))})("itemMouseEnter",function(n){f(e);let r=p(5);return g(r.onItemMouseEnter(n))}),d()}if(t&2){let e=o.$implicit,i=p(5);c("id",i.getSubListId(e))("submenu",e)("items",e.items)("itemTemplate",i.itemTemplate)("mobileActive",i.mobileActive)("menuId",i.menuId)("focusedItemId",i.focusedItemId)("level",i.level+1)("root",!1)("pt",i.pt())("unstyled",i.unstyled())}}function Fr(t,o){if(t&1&&(l(0,"div",34),I(1,Rr,1,11,"ul",36),d()),t&2){let e=o.$implicit,i=p(3).$implicit,n=p();w(n.cx("column",Ce(4,ao,i))),c("pBind",n.ptm("column")),s(),c("ngForOf",e)}}function Vr(t,o){if(t&1&&(l(0,"div",34)(1,"div",34),I(2,Fr,2,6,"div",35),d()()),t&2){let e=p(2).$implicit,i=p();w(i.cx("overlay")),c("pBind",i.ptm("overlay")),s(),w(i.cx("grid")),c("pBind",i.ptm("grid")),s(),c("ngForOf",e.items)}}function Hr(t,o){if(t&1){let e=P();l(0,"li",9,0)(2,"div",10),y("click",function(n){f(e);let r=p().$implicit,a=p();return g(a.onItemClick(n,r))})("mouseenter",function(n){f(e);let r=p().$implicit,a=p();return g(a.onItemMouseEnter({$event:n,processedItem:r}))}),I(3,Dr,3,2,"ng-container",11)(4,Or,2,4,"ng-container",11),d(),I(5,Vr,3,7,"div",12),d()}if(t&2){let e=p(),i=e.$implicit,n=e.index,r=p();w(r.cn(r.cx("item",Ce(23,ao,i)),r.getItemProp(i,"styleClass"))),c("ngStyle",r.getItemProp(i,"style"))("tooltipOptions",r.getItemProp(i,"tooltipOptions"))("pBind",r.getPTOptions(i,n,"item"))("pTooltipUnstyled",r.unstyled()),x("id",r.getItemId(i))("data-p-active",r.isItemActive(i))("data-p-focused",r.isItemFocused(i))("data-p-disabled",r.isItemDisabled(i))("aria-label",r.getItemLabel(i))("aria-disabled",r.isItemDisabled(i)||void 0)("aria-haspopup",r.isItemGroup(i)&&!r.getItemProp(i,"to")?"menu":void 0)("aria-expanded",r.isItemGroup(i)?r.isItemActive(i):void 0)("aria-level",r.level+1)("aria-setsize",r.getAriaSetSize())("aria-posinset",r.getAriaPosInset(n)),s(2),w(r.cx("itemContent")),c("pBind",r.getPTOptions(i,n,"itemContent")),s(),c("ngIf",!r.itemTemplate),s(),c("ngIf",r.itemTemplate),s(),c("ngIf",r.isItemVisible(i)&&r.isItemGroup(i))}}function Nr(t,o){if(t&1&&I(0,lr,1,6,"li",6)(1,Hr,6,25,"li",7),t&2){let e=o.$implicit,i=p();c("ngIf",i.isItemVisible(e)&&i.getItemProp(e,"separator")),s(),c("ngIf",i.isItemVisible(e)&&!i.getItemProp(e,"separator"))}}var zr=["start"],$r=["end"],jr=["menuicon"],qr=["submenuicon"],Kr=["item"],Gr=["button"],Qr=["buttonicon"],Ur=["menubutton"],Zr=["rootmenu"];function Wr(t,o){t&1&&re(0)}function Yr(t,o){if(t&1&&(l(0,"div",6),I(1,Wr,1,0,"ng-container",4),d()),t&2){let e=p();w(e.cx("start")),c("pBind",e.ptm("start")),s(),c("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function Xr(t,o){if(t&1&&(H(),m(0,"svg",10)),t&2){let e=p(3);c("pBind",e.ptm("buttonIcon"))}}function Jr(t,o){}function ea(t,o){t&1&&I(0,Jr,0,0,"ng-template")}function ta(t,o){if(t&1){let e=P();l(0,"a",8,1),y("click",function(n){f(e);let r=p(2);return g(r.menuButtonClick(n))})("keydown",function(n){f(e);let r=p(2);return g(r.menuButtonKeydown(n))}),I(2,Xr,1,1,"svg",9)(3,ea,1,0,null,4),d()}if(t&2){let e=p(2);w(e.cx("button")),c("pBind",e.ptm("button")),x("aria-haspopup",!!(e.model.length&&e.model.length>0))("aria-expanded",e.mobileActive)("aria-controls",e.id)("aria-label",e.config.translation.aria.navigation),s(2),c("ngIf",!e.buttonIconTemplate&&!e._buttonIconTemplate),s(),c("ngTemplateOutlet",e.buttonIconTemplate||e._buttonIconTemplate)}}function ia(t,o){if(t&1&&(_e(0),I(1,ta,4,9,"a",7),ye()),t&2){let e=p();s(),c("ngIf",e.model&&e.model.length>0)}}function na(t,o){t&1&&re(0)}function oa(t,o){t&1&&re(0)}function ra(t,o){if(t&1&&(l(0,"div",6),I(1,oa,1,0,"ng-container",4),d()),t&2){let e=p();w(e.cx("end")),c("pBind",e.ptm("end")),s(),c("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}var aa={rootList:({instance:t})=>({"max-height":t.scrollHeight,overflow:"auto"})},sa={root:({instance:t})=>["p-megamenu p-component",{"p-megamenu-mobile":t.queryMatches(),"p-megamenu-mobile-active":t.mobileActive,"p-megamenu-horizontal":t.orientation==="horizontal","p-megamenu-vertical":t.orientation==="vertical"}],start:"p-megamenu-start",button:"p-megamenu-button",rootList:"p-megamenu-root-list",submenuLabel:({instance:t,processedItem:o})=>["p-megamenu-submenu-label",{"p-disabled":t.isItemDisabled(o)}],item:({instance:t,processedItem:o})=>["p-megamenu-item",t.getItemProp(o,"styleClass"),t.getItemProp(o,"class"),{"p-megamenu-item-active":t.isItemActive(o),"p-focus":t.isItemFocused(o),"p-disabled":t.isItemDisabled(o)}],itemContent:"p-megamenu-item-content",itemLink:"p-megamenu-item-link",itemIcon:"p-megamenu-item-icon",itemLabel:"p-megamenu-item-label",submenuIcon:"p-megamenu-submenu-icon",overlay:"p-megamenu-overlay",grid:"p-megamenu-grid",column:({instance:t,processedItem:o})=>{let e=t.isItemGroup(o)?o.items.length:0,i;if(t.megaMenu.queryMatches())i="p-megamenu-col-12";else switch(e){case 2:i="p-megamenu-col-6";break;case 3:i="p-megamenu-col-4";break;case 4:i="p-megamenu-col-3";break;case 6:i="p-megamenu-col-2";break;default:i="p-megamenu-col-12";break}return i},submenu:"p-megamenu-submenu",separator:"p-megamenu-separator",end:"p-megamenu-end"},Pi=(()=>{class t extends Qe{name="megamenu";style=oo;classes=sa;inlineStyles=aa;static \u0275fac=(()=>{let e;return function(n){return(e||(e=K(t)))(n||t)}})();static \u0275prov=be({token:t,factory:t.\u0275fac})}return t})();var so=new me("MEGAMENU_INSTANCE"),ro=new me("MEGAMENU_SUB_INSTANCE"),la=(()=>{class t extends Be{bindDirectiveInstance=_(z,{self:!0});$pcMegaMenu=_(so,{optional:!0,skipSelf:!0})??void 0;$pcMegaMenuSub=_(ro,{optional:!0,skipSelf:!0})??void 0;id;items;itemTemplate;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;disabled=!1;orientation;activeItem;submenu;queryMatches=!1;mobileActive=!1;scrollHeight;tabindex=0;root=!1;itemClick=new $;itemMouseEnter=new $;menuFocus=new $;menuBlur=new $;menuKeydown=new $;menuMouseDown=new $;megaMenu=_(Je(()=>lo));_componentStyle=_(Pi);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(this.root?"rootList":"submenu"))}onItemClick(e,i){this.getItemProp(i,"command",{originalEvent:e,item:i.item}),this.itemClick.emit({originalEvent:e,processedItem:i,isFocus:!0})}getItemProp(e,i,n=null){return e&&e.item?Ei(e.item[i],n):void 0}getItemId(e){return e.item&&e.item?.id?e.item.id:`${this.menuId}_${e.key}`}getSubListId(e){return`${this.getItemId(e)}_list`}getItemLabel(e){return this.getItemProp(e,"label")}isSubmenuVisible(e){return this.submenu&&!this.root?this.isItemVisible(e):!0}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemActive(e){return Z(this.activeItem)?this.activeItem.key===e.key:!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return Z(e.items)}getAriaSetSize(){return this.items?.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-(this.items?.slice(0,e).filter(i=>this.isItemVisible(i)&&this.getItemProp(i,"separator")).length||0)+1}onItemMouseEnter(e){let{event:i,processedItem:n}=e;this.itemMouseEnter.emit({originalEvent:i,processedItem:n})}getPTOptions(e,i,n){let r={context:{item:e.item,index:i,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e)}};return this.ptm(n,r)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=K(t)))(n||t)}})();static \u0275cmp=C({type:t,selectors:[["p-megaMenuSub"],["p-megamenu-sub"],["ul","pMegaMenuSub",""]],hostVars:12,hostBindings:function(i,n){i&1&&y("keydown",function(a){return n.menuKeydown.emit(a)})("focus",function(a){return n.menuFocus.emit(a)})("blur",function(a){return n.menuBlur.emit(a)})("mousedown",function(a){return n.menuMouseDown.emit(a)}),i&2&&(Ee("tabIndex",n.tabindex),x("role",n.root?"menubar":"menu")("id",n.id)("aria-orientation",n.orientation)("aria-activedescendant",n.focusedItemId)("data-pc-section",n.root?"rootlist":"submenu"),ue(n.sx("rootList")),w(n.root?n.cx("rootList"):n.cx("submenu")),Ve("display",n.isSubmenuVisible(n.submenu)?null:"none"))},inputs:{id:"id",items:"items",itemTemplate:"itemTemplate",menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",he],focusedItemId:"focusedItemId",disabled:[2,"disabled","disabled",R],orientation:"orientation",activeItem:"activeItem",submenu:"submenu",queryMatches:[2,"queryMatches","queryMatches",R],mobileActive:[2,"mobileActive","mobileActive",R],scrollHeight:"scrollHeight",tabindex:[2,"tabindex","tabindex",he],root:[2,"root","root",R]},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown",menuMouseDown:"menuMouseDown"},features:[se([{provide:ro,useExisting:t},{provide:$e,useExisting:t}]),Fe([z]),q],decls:2,vars:2,consts:[["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],["role","presentation",3,"class","style","pBind",4,"ngIf"],["ngFor","",3,"ngForOf"],["role","presentation",3,"pBind"],["role","separator",3,"style","class","pBind",4,"ngIf"],["role","menuitem","pTooltip","",3,"ngStyle","class","tooltipOptions","pBind","pTooltipUnstyled",4,"ngIf"],["role","separator",3,"pBind"],["role","menuitem","pTooltip","",3,"ngStyle","tooltipOptions","pBind","pTooltipUnstyled"],[3,"click","mouseenter","pBind"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],["pRipple","",3,"target","class","ngStyle","pBind",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","class","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind",4,"ngIf"],["pRipple","",3,"target","ngStyle","pBind"],[3,"class","ngStyle","pBind",4,"ngIf"],[3,"class","ngStyle","pBind",4,"ngIf","ngIfElse"],[3,"class","value","unstyled",4,"ngIf"],[3,"ngStyle","pBind"],[3,"ngStyle","innerHTML","pBind"],[3,"value","unstyled"],[4,"ngTemplateOutlet"],["data-p-icon","angle-down",3,"class","pBind"],["data-p-icon","angle-right",3,"class","pBind"],["data-p-icon","angle-down",3,"pBind"],["data-p-icon","angle-right",3,"class","pBind",4,"ngIf"],["data-p-icon","angle-right",3,"pBind"],[3,"aria-hidden"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind"],[3,"styleClass","value","unstyled",4,"ngIf"],[3,"styleClass","value","unstyled"],["data-p-icon","angle-down",3,"class","pBind",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],[3,"class","pBind",4,"ngFor","ngForOf"],["pMegaMenuSub","",3,"id","submenu","items","itemTemplate","mobileActive","menuId","focusedItemId","level","root","pt","unstyled","itemClick","itemMouseEnter",4,"ngFor","ngForOf"],["pMegaMenuSub","",3,"itemClick","itemMouseEnter","id","submenu","items","itemTemplate","mobileActive","menuId","focusedItemId","level","root","pt","unstyled"]],template:function(i,n){i&1&&I(0,sr,2,6,"li",3)(1,Nr,2,2,"ng-template",4),i&2&&(c("ngIf",n.submenu),s(),c("ngForOf",n.items))},dependencies:[t,A,jt,Ne,ze,lt,ne,pt,Gt,ft,oe,Me,z,Ln,Bn,wt,Dn,Y],encapsulation:2})}return t})(),lo=(()=>{class t extends Be{componentName="MegaMenu";bindDirectiveInstance=_(z,{self:!0});set model(e){this._model=e,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}styleClass;orientation="horizontal";id;ariaLabel;ariaLabelledBy;breakpoint="960px";scrollHeight="20rem";disabled=!1;tabindex=0;startTemplate;endTemplate;menuIconTemplate;submenuIconTemplate;itemTemplate;buttonTemplate;buttonIconTemplate;templates;menubuttonViewChild;rootmenu;_startTemplate;_endTemplate;_menuIconTemplate;_submenuIconTemplate;_itemTemplate;_buttonTemplate;_buttonIconTemplate;outsideClickListener;resizeListener;dirty=!1;focused=!1;activeItem=ve(null);focusedItemInfo=ve({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_model;_componentStyle=_(Pi);matchMediaListener;query;queryMatches=ve(!1);mobileActive=!1;get visibleItems(){let e=Z(this.activeItem())?this.activeItem():null;return e?e.items.reduce((i,n)=>(n.forEach(r=>{r.items.forEach(a=>{i.push(a)})}),i),[]):this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e?.item&&e.item?.id?e.item.id:Z(e.key)?`${this.id}_${e.key}`:null}constructor(){super(),ot(()=>{let e=this.activeItem();Z(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}onInit(){this.bindMatchMediaListener(),this.id=this.id||Le("pn_id_")}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"menuicon":this._menuIconTemplate=e.template;break;case"submenuicon":this._submenuIconTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"button":this._buttonTemplate=e.template;break;case"buttonicon":this._buttonIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}bindMatchMediaListener(){if(Ii(this.platformId)&&!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=e,this.queryMatches.set(e.matches),this.matchMediaListener=()=>{this.queryMatches.set(e.matches),this.mobileActive=!1,this.cd.markForCheck()},e.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}createProcessedItems(e,i=0,n={},r="",a){let u=[];return e&&e.forEach((D,de)=>{let pe=(r!==""?r+"_":"")+(a!==void 0?a+"_":"")+de,Te={item:D,index:de,level:i,key:pe,parent:n,parentKey:r,columnIndex:a!==void 0?a:n.columnIndex!==void 0?n.columnIndex:de};Te.items=i===0&&D.items&&D.items.length>0?D.items.map((je,Lt)=>this.createProcessedItems(je,i+1,Te,pe,Lt)):this.createProcessedItems(D.items,i+1,Te,pe),u.push(Te)}),u}getItemProp(e,i){return e?Ei(e[i]):void 0}onItemClick(e){this.dirty=!0;let{originalEvent:i,processedItem:n}=e,r=this.isProcessedItemGroup(n),a=ht(n.parent);if(this.isSelected(n)){let{index:D,key:de,parentKey:pe,item:Te}=n;this.activeItem.set(null),this.focusedItemInfo.set({index:D,key:de,parentKey:pe,item:Te}),this.dirty=!a,this.mobileActive||mt(this.rootmenu?.el?.nativeElement,{preventScroll:!0})}else r?this.onItemChange(e):this.hide(i)}onItemMouseEnter(e){!this.mobileActive&&this.dirty&&this.onItemChange(e)}menuButtonClick(e){this.toggle(e)}menuButtonKeydown(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&this.menuButtonClick(e)}toggle(e){this.mobileActive?(this.mobileActive=!1,Se.clear(this.rootmenu?.el.nativeElement),this.hide()):(this.mobileActive=!0,Se.set("menu",this.rootmenu?.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()}show(){this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:""}),mt(this.rootmenu?.el.nativeElement)}scrollInView(e=-1){let i=e!==-1?`${this.id}_${e}`:this.focusedItemId,n;i===null&&this.queryMatches()?n=this.menubuttonViewChild?.nativeElement:n=xt(this.rootmenu?.el?.nativeElement,`li[id="${i}"]`),n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})}onItemChange(e){let{processedItem:i,isFocus:n}=e;if(ht(i))return;let{index:r,key:a,parentKey:u,items:D,item:de}=i,pe=Z(D);pe&&this.activeItem.set(i),this.focusedItemInfo.set({index:r,key:a,parentKey:u,item:de}),pe&&(this.dirty=!0),n&&mt(this.rootmenu?.el?.nativeElement)}hide(e,i){this.mobileActive&&(this.mobileActive=!1,setTimeout(()=>{mt(this.menubuttonViewChild?.nativeElement),this.scrollInView()},100)),this.activeItem.set(null),this.focusedItemInfo.set({index:-1,key:"",parentKey:"",item:null}),i&&mt(this.rootmenu?.el?.nativeElement),this.dirty=!1}onMenuMouseDown(e){this.dirty=!0}onMenuFocus(e){this.focused=!0;let i=e.relatedTarget;if((!i||!this.el.nativeElement.contains(i))&&this.focusedItemInfo().index===-1&&ht(this.activeItem())&&!this.dirty){let r=this.findFirstFocusedItemIndex(),a=this.findVisibleItem(r);this.focusedItemInfo.set({index:r,key:a.key,parentKey:a.parentKey,item:a.item})}}onMenuBlur(e){let i=e.relatedTarget;i&&this.el.nativeElement.contains(i)||setTimeout(()=>{let n=this.document.activeElement;n&&this.el.nativeElement.contains(n)||(this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1)})}onKeyDown(e){let i=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!i&&Mn(e.key)&&this.searchItems(e,e.key);break}}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}isProcessedItemGroup(e){return e&&Z(e.items)}isSelected(e){return Z(this.activeItem())?this.activeItem().key===e.key:!1}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemSeparator(e){return this.getItemProp(e,"separator")}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&Z(e.items)}searchItems(e,i){this.searchValue=(this.searchValue||"")+i;let n=-1,r=!1;return this.focusedItemInfo().index!==-1?(n=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(a=>this.isItemMatched(a)),n=n===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(a=>this.isItemMatched(a)):n+this.focusedItemInfo().index):n=this.visibleItems.findIndex(a=>this.isItemMatched(a)),n!==-1&&(r=!0),n===-1&&this.focusedItemInfo().index===-1&&(n=this.findFirstFocusedItemIndex()),n!==-1&&this.changeFocusedItemInfo(e,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),r}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,"label")}changeFocusedItemInfo(e,i){let n=this.findVisibleItem(i);if(Z(n)){let{key:r,parentKey:a,item:u}=n;this.focusedItemInfo.set({index:i,key:r||"",parentKey:a,item:u})}this.scrollInView()}onArrowDownKey(e){if(this.orientation==="horizontal")if(Z(this.activeItem())&&this.activeItem().key===this.focusedItemInfo().key){let{key:n,item:r}=this.activeItem();this.focusedItemInfo.set({index:-1,key:"",parentKey:n,item:r})}else{let n=this.findVisibleItem(this.focusedItemInfo().index);if(this.isProccessedItemGroup(n)){let{parentKey:a,key:u,item:D}=n;this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo.set({index:-1,key:u,parentKey:a,item:D}),this.searchValue=""}}let i=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,i),e.preventDefault()}onArrowRightKey(e){let i=this.findVisibleItem(this.focusedItemInfo().index);if(this.isProccessedItemGroup(i)){if(this.orientation==="vertical")if(Z(this.activeItem())&&this.activeItem().key===i.key)this.focusedItemInfo.set({index:-1,key:"",parentKey:this.activeItem().key,item:i.item});else{let a=this.findVisibleItem(this.focusedItemInfo().index);this.isProccessedItemGroup(a)&&(this.onItemChange({originalEvent:e,processedItem:a}),this.focusedItemInfo.set({index:-1,key:a.key,parentKey:a.parentKey,item:a.item}),this.searchValue="")}let r=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,r)}else{let r=i.columnIndex+1,a=this.visibleItems.findIndex(u=>u.columnIndex===r);a!==-1&&this.changeFocusedItemInfo(e,a)}e.preventDefault()}onArrowUpKey(e){if(e.altKey&&this.orientation==="horizontal"){if(this.focusedItemInfo().index!==-1){let i=this.findVisibleItem(this.focusedItemInfo().index);!this.isProccessedItemGroup(i)&&Z(this.activeItem)&&(this.focusedItemInfo().index===0?(this.focusedItemInfo.set({index:this.activeItem().index,key:this.activeItem().key,parentKey:this.activeItem().parentKey,item:i.item}),this.activeItem.set(null)):this.changeFocusedItemInfo(e,this.findFirstItemIndex()))}e.preventDefault()}else{let i=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,i),e.preventDefault()}}onArrowLeftKey(e){let i=this.findVisibleItem(this.focusedItemInfo().index);if(this.isProccessedItemGroup(i)){if(this.orientation==="horizontal"){let r=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,r)}}else{this.orientation==="vertical"&&Z(this.activeItem())&&i.columnIndex===0&&(this.focusedItemInfo.set({index:this.activeItem().index,key:this.activeItem().key,parentKey:this.activeItem().parentKey,item:i.item}),this.activeItem.set(null));let r=i.columnIndex-1,a=this.visibleItems.findIndex(u=>u.columnIndex===r);a!==-1&&this.changeFocusedItemInfo(e,a)}e.preventDefault()}onHomeKey(e){this.changeFocusedItemInfo(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemInfo(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){Z(this.activeItem())&&(this.focusedItemInfo.set({index:this.activeItem().index,key:this.activeItem().key,item:this.activeItem().item}),this.activeItem.set(null)),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let i=this.findVisibleItem(this.focusedItemInfo().index);!this.isProccessedItemGroup(i)&&this.onItemChange({originalEvent:e,processedItem:i})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let i=xt(this.rootmenu?.el?.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),n=i&&(xt(i,'[data-pc-section="itemlink"]')||xt(i,"a,button"));n?n.click():i&&i.click();let r=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(r)&&this.changeFocusedItemInfo(e,this.findFirstFocusedItemIndex())}e.preventDefault()}findVisibleItem(e){return Z(this.visibleItems)?this.visibleItems[e]:null}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return Ti(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let i=e>0?Ti(this.visibleItems.slice(0,e),n=>this.isValidItem(n)):-1;return i>-1?i:e}findNextItemIndex(e){let i=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(n=>this.isValidItem(n)):-1;return i>-1?i+e+1:e}bindResizeListener(){this.resizeListener||(this.resizeListener=e=>{Sn()||this.hide(e,!0),this.mobileActive=!1},window.addEventListener("resize",this.resizeListener))}bindOutsideClickListener(){Ii(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",e=>{this.el?.nativeElement!==e.target&&!this.el?.nativeElement.contains(e.target)&&this.hide()})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}onDestroy(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["p-megaMenu"],["p-megamenu"],["p-mega-menu"]],contentQueries:function(i,n,r){if(i&1&&Ge(r,zr,4)(r,$r,4)(r,jr,4)(r,qr,4)(r,Kr,4)(r,Gr,4)(r,Qr,4)(r,Ue,4),i&2){let a;M(a=k())&&(n.startTemplate=a.first),M(a=k())&&(n.endTemplate=a.first),M(a=k())&&(n.menuIconTemplate=a.first),M(a=k())&&(n.submenuIconTemplate=a.first),M(a=k())&&(n.itemTemplate=a.first),M(a=k())&&(n.buttonTemplate=a.first),M(a=k())&&(n.buttonIconTemplate=a.first),M(a=k())&&(n.templates=a)}},viewQuery:function(i,n){if(i&1&&ae(Ur,5)(Zr,5),i&2){let r;M(r=k())&&(n.menubuttonViewChild=r.first),M(r=k())&&(n.rootmenu=r.first)}},hostVars:3,hostBindings:function(i,n){i&2&&(Ee("id",n.id),w(n.cn(n.cx("root"),n.styleClass)))},inputs:{model:"model",styleClass:"styleClass",orientation:"orientation",id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",breakpoint:"breakpoint",scrollHeight:"scrollHeight",disabled:[2,"disabled","disabled",R],tabindex:[2,"tabindex","tabindex",he]},features:[se([Pi,{provide:so,useExisting:t},{provide:$e,useExisting:t}]),Fe([z]),q],decls:6,vars:22,consts:[["rootmenu",""],["menubutton",""],[3,"class","pBind",4,"ngIf"],[4,"ngIf"],[4,"ngTemplateOutlet"],["pMegaMenuSub","",3,"itemClick","menuFocus","menuBlur","menuKeydown","menuMouseDown","itemMouseEnter","itemTemplate","items","menuId","root","orientation","ariaLabel","disabled","tabindex","activeItem","level","ariaLabelledBy","focusedItemId","mobileActive","queryMatches","scrollHeight","pt","unstyled"],[3,"pBind"],["role","button","tabindex","0",3,"class","pBind","click","keydown",4,"ngIf"],["role","button","tabindex","0",3,"click","keydown","pBind"],["data-p-icon","bars",3,"pBind",4,"ngIf"],["data-p-icon","bars",3,"pBind"]],template:function(i,n){if(i&1){let r=P();I(0,Yr,2,4,"div",2)(1,ia,2,1,"ng-container",3)(2,na,1,0,"ng-container",4),l(3,"ul",5,0),y("itemClick",function(u){return f(r),g(n.onItemClick(u))})("menuFocus",function(u){return f(r),g(n.onMenuFocus(u))})("menuBlur",function(u){return f(r),g(n.onMenuBlur(u))})("menuKeydown",function(u){return f(r),g(n.onKeyDown(u))})("menuMouseDown",function(u){return f(r),g(n.onMenuMouseDown(u))})("itemMouseEnter",function(u){return f(r),g(n.onItemMouseEnter(u))}),d(),I(5,ra,2,4,"div",2)}i&2&&(c("ngIf",n.startTemplate||n._startTemplate),s(),c("ngIf",!n.buttonTemplate&&!n._buttonTemplate),s(),c("ngTemplateOutlet",n.buttonTemplate||n._buttonTemplate),s(),c("itemTemplate",n.itemTemplate||n._itemTemplate)("items",n.processedItems)("menuId",n.id)("root",!0)("orientation",n.orientation)("ariaLabel",n.ariaLabel)("disabled",n.disabled)("tabindex",n.disabled?-1:n.tabindex)("activeItem",n.activeItem())("level",0)("ariaLabelledBy",n.ariaLabelledBy)("focusedItemId",n.focused?n.focusedItemId:void 0)("mobileActive",n.mobileActive)("queryMatches",n.queryMatches())("scrollHeight",n.scrollHeight)("pt",n.pt())("unstyled",n.unstyled()),x("id",n.id+"_list"),s(2),c("ngIf",n.endTemplate||n._endTemplate))},dependencies:[A,Ne,ze,ne,la,oe,z,eo,wt,Y],encapsulation:2,changeDetection:0})}return t})(),co=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=te({type:t});static \u0275inj=ee({imports:[lo,Y,Y]})}return t})();var ca=t=>({value:t}),ei=class t{count=4;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["notifications"]],decls:52,vars:18,consts:[[1,"list-none","p-0","m-0"],[1,"px-4","py-1"],[3,"innerHTML"],[1,"p-4"],[1,"flex","items-center"],["src","images/user.jpg","width","25"],[1,"flex","flex-col","ml-4","flex-1"],[1,"flex","items-center","justify-between","mb-1"],[1,"font-bold"],[1,"text-sm","leading-normal"],[1,"fs-small","font-bold"]],template:function(e,i){e&1&&(O(0,"ul",0)(1,"li",1),U(2,"span",2),b(3,"translate"),N(),O(4,"li",3)(5,"div",4),U(6,"img",5),O(7,"div",6)(8,"div",7)(9,"span",8),h(10,"Jerome Bell"),N(),O(11,"small"),h(12),b(13,"translate"),N()(),O(14,"span",9),h(15,"Lorem ipsum dolor sit amet."),N()()()(),O(16,"li",3)(17,"div",4),U(18,"img",5),O(19,"div",6)(20,"div",7)(21,"span",10),h(22,"Cameron Williamson"),N(),O(23,"small"),h(24),b(25,"translate"),N()(),O(26,"span",9),h(27,"Lorem ipsum dolor, sit amet consectetur adipisicing elit."),N()()()(),O(28,"li",3)(29,"div",4),U(30,"img",5),O(31,"div",6)(32,"div",7)(33,"span",10),h(34,"Anna Miles"),N(),O(35,"small"),h(36),b(37,"translate"),N()(),O(38,"span",9),h(39,"Lorem ipsum dolor sit amet."),N()()()(),O(40,"li",3)(41,"div",4),U(42,"img",5),O(43,"div",6)(44,"div",7)(45,"span",10),h(46,"Arlene Mccoy"),N(),O(47,"small"),h(48),b(49,"translate"),N()(),O(50,"span",9),h(51,"Lorem ipsum dolor sit amet, consectetur adipisicing."),N()()()()()),e&2&&(s(2),Ee("innerHTML",cn(3,5,"notifications.count",Ce(16,ca,i.count)),yt),s(10),V("42 min ",v(13,8,"time.ago")),s(12),V("48 min ",v(25,10,"time.ago")),s(12),V("50 min ",v(37,12,"time.ago")),s(12),V("60 min ",v(49,14,"time.ago")))},dependencies:[J,X],encapsulation:2})};var ti=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["tools"]],decls:31,vars:18,consts:[[1,"flex","flex-wrap"],[1,"w-4/12","flex","flex-col","items-center","p-4"],["pButton","","pRipple","","rounded","","icon","ph ph-image",1,"mb-2"],["pButton","","pRipple","","rounded","","severity","success","icon","ph ph-file-pdf",1,"mb-2"],["pButton","","pRipple","","rounded","","severity","contrast","icon","ph ph-money",1,"mb-2"],["pButton","","pRipple","","rounded","","severity","warn","icon","ph ph-gear",1,"mb-2"],["pButton","","pRipple","","rounded","","severity","help","icon","ph ph-key",1,"mb-2"],["pButton","","pRipple","","rounded","","severity","info","icon","ph ph-circles-three",1,"mb-2"]],template:function(e,i){e&1&&(l(0,"div",0)(1,"div",1),m(2,"button",2),l(3,"span"),h(4),b(5,"translate"),d()(),l(6,"div",1),m(7,"button",3),l(8,"span"),h(9),b(10,"translate"),d()(),l(11,"div",1),m(12,"button",4),l(13,"span"),h(14),b(15,"translate"),d()(),l(16,"div",1),m(17,"button",5),l(18,"span"),h(19),b(20,"translate"),d()(),l(21,"div",1),m(22,"button",6),l(23,"span"),h(24),b(25,"translate"),d()(),l(26,"div",1),m(27,"button",7),l(28,"span"),h(29),b(30,"translate"),d()()()),e&2&&(s(4),L(v(5,6,"products.label")),s(5),L(v(10,8,"analytics.reports")),s(5),L(v(15,10,"balance.label")),s(5),L(v(20,12,"settings.label")),s(5),L(v(25,14,"security.credentials")),s(5),L(v(30,16,"teams.label")))},dependencies:[We,Yt,J,X],encapsulation:2})};var da=["searchInput"],pa=["menuButton"],ma=["mobileMenuButton"],ua=["app-topbar",""],Mt=class t{layoutService=_(le);cdr=_(pn);isFullScreen=!1;searchInput;menuButton;mobileMenuButton;ngOnInit(){document.addEventListener("fullscreenchange",()=>{this.isFullScreen=!!document.fullscreenElement,this.cdr.detectChanges()})}onMenuButtonClick(){this.layoutService.onMenuToggle()}onRightMenuButtonClick(){this.layoutService.openRightMenu()}toggleConfigSidebar(){let o=this.layoutService.layoutState();this.layoutService.isSidebarActive()&&(o.overlayMenuActive=!1,o.overlaySubmenuActive=!1,o.staticMenuMobileActive=!1,o.menuHoverActive=!1,o.configSidebarVisible=!1),o.configSidebarVisible=!o.configSidebarVisible,this.layoutService.layoutState.set(S({},o))}focusSearchInput(){setTimeout(()=>{this.searchInput.nativeElement.focus()},150)}onTopbarMenuToggle(){this.layoutService.layoutState.update(o=>B(S({},o),{topbarMenuActive:!o.topbarMenuActive}))}toggleFullScreen(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["","app-topbar",""]],viewQuery:function(e,i){if(e&1&&ae(da,5)(pa,5)(ma,5),e&2){let n;M(n=k())&&(i.searchInput=n.first),M(n=k())&&(i.menuButton=n.first),M(n=k())&&(i.mobileMenuButton=n.first)}},hostAttrs:[1,"layout-topbar"],attrs:ua,decls:52,vars:28,consts:[["menuButton",""],["mobileMenuButton",""],["searchInput",""],[1,"layout-topbar-start"],["routerLink","/",1,"layout-topbar-logo"],[1,"layout-topbar-logo-full","flex","items-center","gap-2"],[1,"ph-duotone","ph-chalkboard-simple","logo-icon"],[1,"font-black","whitespace-nowrap","text-primary"],[1,"layout-topbar-logo-slim"],["tooltipPosition","bottom","showDelay","300",1,"layout-menu-button",3,"click","pTooltip"],[1,"ph","ph-list"],[1,"app-config-mobile-button"],[1,"layout-topbar-mobile-button",3,"click"],[1,"ph-fill","ph-dots-three-outline-vertical"],[1,"layout-topbar-end"],[1,"layout-topbar-actions-start"],[1,"layout-topbar-actions-end"],[1,"layout-topbar-items"],["tooltipPosition","bottom","showDelay","300",3,"click","pTooltip"],[1,"ph","ph-corners-out"],[1,"layout-topbar-search"],["pStyleClass","@next","enterFromClass","hidden!","enterActiveClass","animate-scalein","leaveToClass","hidden!","leaveActiveClass","animate-fadeout","tooltipPosition","bottom","showDelay","300",3,"click","hideOnOutsideClick","pTooltip"],[1,"ph","ph-magnifying-glass"],[1,"layout-search-panel","hidden!","p-input-filled"],["type","text","pInputText","",3,"placeholder"],["pButton","","pRipple","","type","button","icon","ph ph-x","rounded","","text","","pStyleClass",".layout-search-panel","leaveToClass","hidden!","leaveActiveClass","animate-fadeout"],["pStyleClass","@next","enterFromClass","hidden","enterActiveClass","animate-scalein","leaveToClass","hidden","leaveActiveClass","animate-fadeout","tooltipPosition","bottom","showDelay","300",3,"hideOnOutsideClick","pTooltip"],[1,"ph","ph-bell","align-middle!"],[1,"hidden"],[1,"ph","ph-grid-four"],["tooltipPosition","left","showDelay","300",3,"click","pTooltip"],[1,"ph","ph-faders"]],template:function(e,i){if(e&1){let n=P();l(0,"div",3)(1,"a",4)(2,"div",5),m(3,"i",6),l(4,"span",7),h(5,"PM SYSTEMS"),d()(),l(6,"div",8),m(7,"i",6),d()(),l(8,"a",9,0),b(10,"translate"),b(11,"translate"),b(12,"translate"),y("click",function(){return f(n),g(i.onMenuButtonClick())}),m(13,"i",10),d(),m(14,"button",11),l(15,"a",12,1),y("click",function(){return f(n),g(i.onTopbarMenuToggle())}),m(17,"i",13),d()(),l(18,"div",14),m(19,"div",15),l(20,"div",16)(21,"ul",17)(22,"li")(23,"a",18),b(24,"translate"),y("click",function(){return f(n),g(i.toggleFullScreen())}),m(25,"i",19),d()(),l(26,"li",20)(27,"a",21),b(28,"translate"),y("click",function(){return f(n),g(i.focusSearchInput())}),m(29,"i",22),d(),l(30,"div",23),m(31,"i",22)(32,"input",24,2),b(34,"translate"),m(35,"button",25),d()(),l(36,"li")(37,"a",26),b(38,"translate"),m(39,"i",27),d(),l(40,"div",28),m(41,"notifications"),d()(),l(42,"li")(43,"a",26),b(44,"translate"),m(45,"i",29),d(),l(46,"div",28),m(47,"tools"),d()(),l(48,"li")(49,"a",30),b(50,"translate"),y("click",function(){return f(n),g(i.toggleConfigSidebar())}),m(51,"i",31),d()()()()()}e&2&&(s(8),c("pTooltip",v(10,10,"actions.hide")+"/"+v(11,12,"actions.show")+" "+v(12,14,"menu.label")),s(15),c("pTooltip",v(24,16,i.isFullScreen?"screen.exit":"screen.full")),s(4),c("hideOnOutsideClick",!0)("pTooltip",v(28,18,"actions.search")),s(5),c("placeholder",v(34,20,"actions.search")),s(5),c("hideOnOutsideClick",!0)("pTooltip",v(38,22,"notifications.label")),s(6),c("hideOnOutsideClick",!0)("pTooltip",v(44,24,"tools.label")),s(6),c("pTooltip",v(50,26,"settings.preferences")))},dependencies:[ne,pt,A,Jn,Xn,gt,ft,Tn,We,Yt,co,wt,ei,ti,oe,Me,J,X],styles:["[_nghost-%COMP%]     .p-overlaybadge .p-badge{outline-width:0px}"]})};var mo=`
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
`;var fa=["header"],ga=["footer"],ba=["content"],va=["closeicon"],_a=["headless"],ya=["container"],Ca=["closeButton"],xa=["*"];function wa(t,o){t&1&&re(0)}function Ia(t,o){if(t&1&&I(0,wa,1,0,"ng-container",4),t&2){let e=p(2);c("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function Sa(t,o){t&1&&re(0)}function Ma(t,o){if(t&1&&(l(0,"div",9),h(1),d()),t&2){let e=p(3);w(e.cx("title")),c("pBind",e.ptm("title")),s(),L(e.header)}}function ka(t,o){t&1&&(H(),m(0,"svg",12)),t&2&&x("data-pc-section","closeicon")}function Ta(t,o){}function Ea(t,o){t&1&&I(0,Ta,0,0,"ng-template")}function Aa(t,o){if(t&1&&I(0,ka,1,1,"svg",11)(1,Ea,1,0,null,4),t&2){let e=p(4);c("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),s(),c("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function Pa(t,o){if(t&1){let e=P();l(0,"p-button",10),y("onClick",function(n){f(e);let r=p(3);return g(r.close(n))})("keydown.enter",function(n){f(e);let r=p(3);return g(r.close(n))}),I(1,Aa,2,2,"ng-template",null,1,et),d()}if(t&2){let e=p(3);c("pt",e.ptm("pcCloseButton"))("ngClass",e.cx("pcCloseButton"))("buttonProps",e.closeButtonProps)("ariaLabel",e.ariaCloseLabel)("unstyled",e.unstyled()),x("data-pc-group-section","iconcontainer")}}function Da(t,o){t&1&&re(0)}function La(t,o){t&1&&re(0)}function Ba(t,o){if(t&1&&(_e(0),l(1,"div",5),I(2,La,1,0,"ng-container",4),d(),ye()),t&2){let e=p(3);s(),c("pBind",e.ptm("footer"))("ngClass",e.cx("footer")),x("data-pc-section","footer"),s(),c("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function Oa(t,o){if(t&1&&(l(0,"div",5),I(1,Sa,1,0,"ng-container",4)(2,Ma,2,4,"div",6)(3,Pa,3,6,"p-button",7),d(),l(4,"div",5),Ft(5),I(6,Da,1,0,"ng-container",4),d(),I(7,Ba,3,4,"ng-container",8)),t&2){let e=p(2);c("pBind",e.ptm("header"))("ngClass",e.cx("header")),x("data-pc-section","header"),s(),c("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),s(),c("ngIf",e.header),s(),c("ngIf",e.showCloseIcon&&e.closable),s(),c("pBind",e.ptm("content"))("ngClass",e.cx("content")),x("data-pc-section","content"),s(2),c("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),s(),c("ngIf",e.footerTemplate||e._footerTemplate)}}function Ra(t,o){if(t&1){let e=P();l(0,"div",3,0),y("pMotionOnBeforeEnter",function(n){f(e);let r=p();return g(r.onBeforeEnter(n))})("pMotionOnAfterLeave",function(n){f(e);let r=p();return g(r.onAfterLeave(n))})("keydown",function(n){f(e);let r=p();return g(r.onKeyDown(n))}),T(2,Ia,1,1,"ng-container")(3,Oa,8,11),d()}if(t&2){let e=p();ue(e.style),w(e.cn(e.cx("root"),e.styleClass)),c("pBind",e.ptm("root"))("pMotion",e.visible)("pMotionAppear",!0)("pMotionEnterActiveClass",e.$enterAnimation())("pMotionLeaveActiveClass",e.$leaveAnimation())("pMotionOptions",e.computedMotionOptions()),x("data-p",e.dataP)("data-p-open",e.visible),s(2),E(e.headlessTemplate||e._headlessTemplate?2:3)}}var Fa=`
${mo}

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
`,Va={mask:({instance:t})=>["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter-active":t.modal},{"p-drawer-full":t.fullScreen()}],root:({instance:t})=>["p-drawer p-component",{"p-drawer-full":t.fullScreen(),"p-drawer-open":t.visible},`p-drawer-${t.position()}`],header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},uo=(()=>{class t extends Qe{name="drawer";style=Fa;classes=Va;static \u0275fac=(()=>{let e;return function(n){return(e||(e=K(t)))(n||t)}})();static \u0275prov=be({token:t,factory:t.\u0275fac})}return t})();var ho=new me("DRAWER_INSTANCE"),kt=(()=>{class t extends Be{componentName="Drawer";$pcDrawer=_(ho,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=_(z,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}appendTo=He(void 0);motionOptions=He(void 0);computedMotionOptions=j(()=>S(S({},this.ptm("motion")),this.motionOptions()));blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible??!1}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}position=He("left");fullScreen=He(!1);$enterAnimation=j(()=>this.fullScreen()?"p-drawer-enter-full":`p-drawer-enter-${this.position()}`);$leaveAnimation=j(()=>this.fullScreen()?"p-drawer-leave-full":`p-drawer-leave-${this.position()}`);header;maskStyle;closable=!0;onShow=new $;onHide=new $;visibleChange=new $;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;modalVisible=!1;container;mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=_(uo);onAfterViewInit(){this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;$appendTo=j(()=>this.appendTo()||this.config.overlayAppendTo());_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.container?.setAttribute(this.$attrSelector,""),this.autoZIndex&&Se.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll('[data-p-open="true"]'),i=e.length,n=i==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[i-1].style.zIndex)-1);if(!this.mask){if(this.mask=this.renderer.createElement("div"),this.mask){let r=`z-index: ${n};${this.getMaskStyle()}`;ut(this.mask,"style",r),ut(this.mask,"data-p",this.dataP),Ie(this.mask,this.cx("mask"))}this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",r=>{this.dismissible&&this.close(r)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&An()}}getMaskStyle(){return this.maskStyle?Object.entries(this.maskStyle).map(([e,i])=>`${e}: ${i}`).join("; "):""}disableModality(){this.mask&&(!this.$unstyled()&&Ae(this.mask,"p-overlay-mask-enter-active"),!this.$unstyled()&&Ie(this.mask,"p-overlay-mask-leave-active"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&Pn(),this.unbindAnimationEndListener(),this.mask=null}onBeforeEnter(e){this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener()}onAfterLeave(){this.hide(!1),Se.clear(this.container),this.unbindGlobalListeners(),this.modalVisible=!1,this.container=null}appendContainer(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?ki(this.document.body,this.container):ki(this.$appendTo(),this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",i=>{i.which==27&&parseInt(this.container?.style.zIndex)===Se.get(this.container)&&this.close(i)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}onDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.$appendTo()&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&Se.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}get dataP(){return this.cn({"full-screen":this.position()==="full",[this.position()]:this.position(),open:this.visible,modal:this.modal})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=K(t)))(n||t)}})();static \u0275cmp=C({type:t,selectors:[["p-drawer"]],contentQueries:function(i,n,r){if(i&1&&Ge(r,fa,4)(r,ga,4)(r,ba,4)(r,va,4)(r,_a,4)(r,Ue,4),i&2){let a;M(a=k())&&(n.headerTemplate=a.first),M(a=k())&&(n.footerTemplate=a.first),M(a=k())&&(n.contentTemplate=a.first),M(a=k())&&(n.closeIconTemplate=a.first),M(a=k())&&(n.headlessTemplate=a.first),M(a=k())&&(n.templates=a)}},viewQuery:function(i,n){if(i&1&&ae(ya,5)(Ca,5),i&2){let r;M(r=k())&&(n.containerViewChild=r.first),M(r=k())&&(n.closeButtonViewChild=r.first)}},inputs:{appendTo:[1,"appendTo"],motionOptions:[1,"motionOptions"],blockScroll:[2,"blockScroll","blockScroll",R],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",R],baseZIndex:[2,"baseZIndex","baseZIndex",he],modal:[2,"modal","modal",R],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",R],showCloseIcon:[2,"showCloseIcon","showCloseIcon",R],closeOnEscape:[2,"closeOnEscape","closeOnEscape",R],transitionOptions:"transitionOptions",visible:"visible",position:[1,"position"],fullScreen:[1,"fullScreen"],header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",R]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[se([uo,{provide:ho,useExisting:t},{provide:$e,useExisting:t}]),Fe([z]),q],ngContentSelectors:xa,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary","pFocusTrap","",3,"pBind","pMotion","pMotionAppear","pMotionEnterActiveClass","pMotionLeaveActiveClass","pMotionOptions","class","style"],["role","complementary","pFocusTrap","",3,"pMotionOnBeforeEnter","pMotionOnAfterLeave","keydown","pBind","pMotion","pMotionAppear","pMotionEnterActiveClass","pMotionLeaveActiveClass","pMotionOptions"],[4,"ngTemplateOutlet"],[3,"pBind","ngClass"],[3,"pBind","class",4,"ngIf"],[3,"pt","ngClass","buttonProps","ariaLabel","unstyled","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"pBind"],[3,"onClick","keydown.enter","pt","ngClass","buttonProps","ariaLabel","unstyled"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(i,n){i&1&&(Rt(),T(0,Ra,4,13,"div",2)),i&2&&E(n.modalVisible?0:-1)},dependencies:[A,xe,Ne,ze,bt,Wt,Y,z,Gn,Kn,Jt,Xt],encapsulation:2,changeDetection:0})}return t})(),ii=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=te({type:t});static \u0275inj=ee({imports:[kt,Y,Y]})}return t})();function Q(t,o){Ha(t)&&(t="100%");let e=Na(t);return t=o===360?t:Math.min(o,Math.max(0,parseFloat(t))),e&&(t=parseInt(String(t*o),10)/100),Math.abs(t-o)<1e-6?1:(o===360?t=(t<0?t%o+o:t%o)/parseFloat(String(o)):t=t%o/parseFloat(String(o)),t)}function Tt(t){return Math.min(1,Math.max(0,t))}function Ha(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function Na(t){return typeof t=="string"&&t.indexOf("%")!==-1}function ni(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Et(t){return Number(t)<=1?`${Number(t)*100}%`:t}function Ye(t){return t.length===1?"0"+t:String(t)}function go(t,o,e){return{r:Q(t,255)*255,g:Q(o,255)*255,b:Q(e,255)*255}}function Bi(t,o,e){t=Q(t,255),o=Q(o,255),e=Q(e,255);let i=Math.max(t,o,e),n=Math.min(t,o,e),r=0,a=0,u=(i+n)/2;if(i===n)a=0,r=0;else{let D=i-n;switch(a=u>.5?D/(2-i-n):D/(i+n),i){case t:r=(o-e)/D+(o<e?6:0);break;case o:r=(e-t)/D+2;break;case e:r=(t-o)/D+4;break;default:break}r/=6}return{h:r,s:a,l:u}}function Li(t,o,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+(o-t)*(6*e):e<1/2?o:e<2/3?t+(o-t)*(2/3-e)*6:t}function bo(t,o,e){let i,n,r;if(t=Q(t,360),o=Q(o,100),e=Q(e,100),o===0)n=e,r=e,i=e;else{let a=e<.5?e*(1+o):e+o-e*o,u=2*e-a;i=Li(u,a,t+1/3),n=Li(u,a,t),r=Li(u,a,t-1/3)}return{r:i*255,g:n*255,b:r*255}}function Oi(t,o,e){t=Q(t,255),o=Q(o,255),e=Q(e,255);let i=Math.max(t,o,e),n=Math.min(t,o,e),r=0,a=i,u=i-n,D=i===0?0:u/i;if(i===n)r=0;else{switch(i){case t:r=(o-e)/u+(o<e?6:0);break;case o:r=(e-t)/u+2;break;case e:r=(t-o)/u+4;break;default:break}r/=6}return{h:r,s:D,v:a}}function vo(t,o,e){t=Q(t,360)*6,o=Q(o,100),e=Q(e,100);let i=Math.floor(t),n=t-i,r=e*(1-o),a=e*(1-n*o),u=e*(1-(1-n)*o),D=i%6,de=[e,a,r,r,u,e][D],pe=[u,e,e,a,r,r][D],Te=[r,r,u,e,e,a][D];return{r:de*255,g:pe*255,b:Te*255}}function Ri(t,o,e,i){let n=[Ye(Math.round(t).toString(16)),Ye(Math.round(o).toString(16)),Ye(Math.round(e).toString(16))];return i&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function _o(t,o,e,i,n){let r=[Ye(Math.round(t).toString(16)),Ye(Math.round(o).toString(16)),Ye(Math.round(e).toString(16)),Ye(za(i))];return n&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))&&r[3].startsWith(r[3].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0)+r[3].charAt(0):r.join("")}function yo(t,o,e,i){let n=t/100,r=o/100,a=e/100,u=i/100,D=255*(1-n)*(1-u),de=255*(1-r)*(1-u),pe=255*(1-a)*(1-u);return{r:D,g:de,b:pe}}function Fi(t,o,e){let i=1-t/255,n=1-o/255,r=1-e/255,a=Math.min(i,n,r);return a===1?(i=0,n=0,r=0):(i=(i-a)/(1-a)*100,n=(n-a)/(1-a)*100,r=(r-a)/(1-a)*100),a*=100,{c:Math.round(i),m:Math.round(n),y:Math.round(r),k:Math.round(a)}}function za(t){return Math.round(parseFloat(t)*255).toString(16)}function Vi(t){return ce(t)/255}function ce(t){return parseInt(t,16)}function Co(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}var At={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function xo(t){let o={r:0,g:0,b:0},e=1,i=null,n=null,r=null,a=!1,u=!1;return typeof t=="string"&&(t=qa(t)),typeof t=="object"&&(ge(t.r)&&ge(t.g)&&ge(t.b)?(o=go(t.r,t.g,t.b),a=!0,u=String(t.r).substr(-1)==="%"?"prgb":"rgb"):ge(t.h)&&ge(t.s)&&ge(t.v)?(i=Et(t.s),n=Et(t.v),o=vo(t.h,i,n),a=!0,u="hsv"):ge(t.h)&&ge(t.s)&&ge(t.l)?(i=Et(t.s),r=Et(t.l),o=bo(t.h,i,r),a=!0,u="hsl"):ge(t.c)&&ge(t.m)&&ge(t.y)&&ge(t.k)&&(o=yo(t.c,t.m,t.y,t.k),a=!0,u="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(e=t.a)),e=ni(e),{ok:a,format:t.format||u,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:e}}var $a="[-\\+]?\\d+%?",ja="[-\\+]?\\d*\\.\\d+%?",Xe="(?:"+ja+")|(?:"+$a+")",Hi="[\\s|\\(]+("+Xe+")[,|\\s]+("+Xe+")[,|\\s]+("+Xe+")\\s*\\)?",oi="[\\s|\\(]+("+Xe+")[,|\\s]+("+Xe+")[,|\\s]+("+Xe+")[,|\\s]+("+Xe+")\\s*\\)?",ke={CSS_UNIT:new RegExp(Xe),rgb:new RegExp("rgb"+Hi),rgba:new RegExp("rgba"+oi),hsl:new RegExp("hsl"+Hi),hsla:new RegExp("hsla"+oi),hsv:new RegExp("hsv"+Hi),hsva:new RegExp("hsva"+oi),cmyk:new RegExp("cmyk"+oi),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function qa(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let o=!1;if(At[t])t=At[t],o=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let e=ke.rgb.exec(t);return e?{r:e[1],g:e[2],b:e[3]}:(e=ke.rgba.exec(t),e?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=ke.hsl.exec(t),e?{h:e[1],s:e[2],l:e[3]}:(e=ke.hsla.exec(t),e?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=ke.hsv.exec(t),e?{h:e[1],s:e[2],v:e[3]}:(e=ke.hsva.exec(t),e?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=ke.cmyk.exec(t),e?{c:e[1],m:e[2],y:e[3],k:e[4]}:(e=ke.hex8.exec(t),e?{r:ce(e[1]),g:ce(e[2]),b:ce(e[3]),a:Vi(e[4]),format:o?"name":"hex8"}:(e=ke.hex6.exec(t),e?{r:ce(e[1]),g:ce(e[2]),b:ce(e[3]),format:o?"name":"hex"}:(e=ke.hex4.exec(t),e?{r:ce(e[1]+e[1]),g:ce(e[2]+e[2]),b:ce(e[3]+e[3]),a:Vi(e[4]+e[4]),format:o?"name":"hex8"}:(e=ke.hex3.exec(t),e?{r:ce(e[1]+e[1]),g:ce(e[2]+e[2]),b:ce(e[3]+e[3]),format:o?"name":"hex"}:!1))))))))))}function ge(t){return typeof t=="number"?!Number.isNaN(t):ke.CSS_UNIT.test(t)}var vt=class t{constructor(o="",e={}){if(o instanceof t)return o;typeof o=="number"&&(o=Co(o)),this.originalInput=o;let i=xo(o);this.originalInput=o,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=e.format??i.format,this.gradientType=e.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){let o=this.toRgb();return(o.r*299+o.g*587+o.b*114)/1e3}getLuminance(){let o=this.toRgb(),e,i,n,r=o.r/255,a=o.g/255,u=o.b/255;return r<=.03928?e=r/12.92:e=Math.pow((r+.055)/1.055,2.4),a<=.03928?i=a/12.92:i=Math.pow((a+.055)/1.055,2.4),u<=.03928?n=u/12.92:n=Math.pow((u+.055)/1.055,2.4),.2126*e+.7152*i+.0722*n}getAlpha(){return this.a}setAlpha(o){return this.a=ni(o),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:o}=this.toHsl();return o===0}toHsv(){let o=Oi(this.r,this.g,this.b);return{h:o.h*360,s:o.s,v:o.v,a:this.a}}toHsvString(){let o=Oi(this.r,this.g,this.b),e=Math.round(o.h*360),i=Math.round(o.s*100),n=Math.round(o.v*100);return this.a===1?`hsv(${e}, ${i}%, ${n}%)`:`hsva(${e}, ${i}%, ${n}%, ${this.roundA})`}toHsl(){let o=Bi(this.r,this.g,this.b);return{h:o.h*360,s:o.s,l:o.l,a:this.a}}toHslString(){let o=Bi(this.r,this.g,this.b),e=Math.round(o.h*360),i=Math.round(o.s*100),n=Math.round(o.l*100);return this.a===1?`hsl(${e}, ${i}%, ${n}%)`:`hsla(${e}, ${i}%, ${n}%, ${this.roundA})`}toHex(o=!1){return Ri(this.r,this.g,this.b,o)}toHexString(o=!1){return"#"+this.toHex(o)}toHex8(o=!1){return _o(this.r,this.g,this.b,this.a,o)}toHex8String(o=!1){return"#"+this.toHex8(o)}toHexShortString(o=!1){return this.a===1?this.toHexString(o):this.toHex8String(o)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let o=Math.round(this.r),e=Math.round(this.g),i=Math.round(this.b);return this.a===1?`rgb(${o}, ${e}, ${i})`:`rgba(${o}, ${e}, ${i}, ${this.roundA})`}toPercentageRgb(){let o=e=>`${Math.round(Q(e,255)*100)}%`;return{r:o(this.r),g:o(this.g),b:o(this.b),a:this.a}}toPercentageRgbString(){let o=e=>Math.round(Q(e,255)*100);return this.a===1?`rgb(${o(this.r)}%, ${o(this.g)}%, ${o(this.b)}%)`:`rgba(${o(this.r)}%, ${o(this.g)}%, ${o(this.b)}%, ${this.roundA})`}toCmyk(){return S({},Fi(this.r,this.g,this.b))}toCmykString(){let{c:o,m:e,y:i,k:n}=Fi(this.r,this.g,this.b);return`cmyk(${o}, ${e}, ${i}, ${n})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;let o="#"+Ri(this.r,this.g,this.b,!1);for(let[e,i]of Object.entries(At))if(o===i)return e;return!1}toString(o){let e=!!o;o=o??this.format;let i=!1,n=this.a<1&&this.a>=0;return!e&&n&&(o.startsWith("hex")||o==="name")?o==="name"&&this.a===0?this.toName():this.toRgbString():(o==="rgb"&&(i=this.toRgbString()),o==="prgb"&&(i=this.toPercentageRgbString()),(o==="hex"||o==="hex6")&&(i=this.toHexString()),o==="hex3"&&(i=this.toHexString(!0)),o==="hex4"&&(i=this.toHex8String(!0)),o==="hex8"&&(i=this.toHex8String()),o==="name"&&(i=this.toName()),o==="hsl"&&(i=this.toHslString()),o==="hsv"&&(i=this.toHsvString()),o==="cmyk"&&(i=this.toCmykString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new t(this.toString())}lighten(o=10){let e=this.toHsl();return e.l+=o/100,e.l=Tt(e.l),new t(e)}brighten(o=10){let e=this.toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(255*-(o/100)))),e.g=Math.max(0,Math.min(255,e.g-Math.round(255*-(o/100)))),e.b=Math.max(0,Math.min(255,e.b-Math.round(255*-(o/100)))),new t(e)}darken(o=10){let e=this.toHsl();return e.l-=o/100,e.l=Tt(e.l),new t(e)}tint(o=10){return this.mix("white",o)}shade(o=10){return this.mix("black",o)}desaturate(o=10){let e=this.toHsl();return e.s-=o/100,e.s=Tt(e.s),new t(e)}saturate(o=10){let e=this.toHsl();return e.s+=o/100,e.s=Tt(e.s),new t(e)}greyscale(){return this.desaturate(100)}spin(o){let e=this.toHsl(),i=(e.h+o)%360;return e.h=i<0?360+i:i,new t(e)}mix(o,e=50){let i=this.toRgb(),n=new t(o).toRgb(),r=e/100,a={r:(n.r-i.r)*r+i.r,g:(n.g-i.g)*r+i.g,b:(n.b-i.b)*r+i.b,a:(n.a-i.a)*r+i.a};return new t(a)}analogous(o=6,e=30){let i=this.toHsl(),n=360/e,r=[this];for(i.h=(i.h-(n*o>>1)+720)%360;--o;)i.h=(i.h+n)%360,r.push(new t(i));return r}complement(){let o=this.toHsl();return o.h=(o.h+180)%360,new t(o)}monochromatic(o=6){let e=this.toHsv(),{h:i}=e,{s:n}=e,{v:r}=e,a=[],u=1/o;for(;o--;)a.push(new t({h:i,s:n,v:r})),r=(r+u)%1;return a}splitcomplement(){let o=this.toHsl(),{h:e}=o;return[this,new t({h:(e+72)%360,s:o.s,l:o.l}),new t({h:(e+216)%360,s:o.s,l:o.l})]}onBackground(o){let e=this.toRgb(),i=new t(o).toRgb(),n=e.a+i.a*(1-e.a);return new t({r:(e.r*e.a+i.r*i.a*(1-e.a))/n,g:(e.g*e.a+i.g*i.a*(1-e.a))/n,b:(e.b*e.a+i.b*i.a*(1-e.a))/n,a:n})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(o){let e=this.toHsl(),{h:i}=e,n=[this],r=360/o;for(let a=1;a<o;a++)n.push(new t({h:(i+a*r)%360,s:e.s,l:e.l}));return n}equals(o){let e=new t(o);return this.format==="cmyk"||e.format==="cmyk"?this.toCmykString()===e.toCmykString():this.toRgbString()===e.toRgbString()}};function Ka(t,o){if(t&1){let e=P();l(0,"span",3),y("mousedown",function(n){f(e);let r=p();return g(r.handleMousedown(n))}),h(1),d()}if(t&2){let e=p();c("id",e.uniqueId)("ngStyle",e.labelStyle),s(),V(" ",e.label," ")}}var Ga=["*"];function Qa(t,o){t&1&&m(0,"color-checkboard",1)}var Ni={};function Ua(t,o,e){if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=e*2,i.height=e*2;let n=i.getContext("2d");return n?(n.fillStyle=t,n.fillRect(0,0,i.width,i.height),n.fillStyle=o,n.fillRect(0,0,e,e),n.translate(e,e),n.fillRect(0,0,e,e),i.toDataURL()):null}function Za(t,o,e){let i=`${t}-${o}-${e}`;if(Ni[i])return Ni[i];let n=Ua(t,o,e);return n?(Ni[i]=n,n):null}var Wa=(()=>{class t{white="transparent";size=8;grey="rgba(0,0,0,.08)";boxShadow;borderRadius;gridStyles;ngOnInit(){let e=Za(this.white,this.grey,this.size);this.gridStyles={borderRadius:this.borderRadius,boxShadow:this.boxShadow,background:`url(${e}) center left`}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["color-checkboard"]],inputs:{white:"white",size:"size",grey:"grey",boxShadow:"boxShadow",borderRadius:"borderRadius"},standalone:!1,decls:1,vars:1,consts:[[1,"grid",3,"ngStyle"]],template:function(i,n){i&1&&m(0,"div",0),i&2&&c("ngStyle",n.gridStyles)},dependencies:[lt],styles:[".grid[_ngcontent-%COMP%]{inset:0;position:absolute}"],changeDetection:0})}return t})(),Ya=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=te({type:t});static \u0275inj=ee({imports:[A]})}return t})();function wo(t){let o=["r","g","b","a","h","s","l","v"],e=0,i=0;return o.forEach(n=>{t[n]&&(e+=1,isNaN(t[n])||(i+=1),(n==="s"||n==="l")&&/^\d+%$/.test(t[n])&&(i+=1))}),e===i?t:!1}function ri(t,o,e){let i=t.hex?new vt(t.hex):new vt(t);e&&i.setAlpha(1);let n=i.toHsl(),r=i.toHsv(),a=i.toRgb(),u=i.toHex();n.s===0&&(n.h=o||0,r.h=o||0);let D=u==="000000"&&a.a===0;return{hsl:n,hex:D?"transparent":i.toHexString(),rgb:a,hsv:r,oldHue:t.h||o||n.h,source:t.source}}function Io(t){return new vt(t).isValid}var _t=(function(t){return t.HEX="hex",t.HSL="hsl",t.HSV="hsv",t.RGB="rgb",t})(_t||{}),zi=(()=>{class t{className;mode=_t.HEX;color={h:250,s:.5,l:.2,a:1};colorChange=new $;onChange=new $;onChangeComplete=new $;onSwatchHover=new $;oldHue;hsl;hsv;rgb;hex;source;currentColor;changes;disableAlpha;_onChangeCompleteSubscription=new gi;_onSwatchHoverSubscription=new gi;ngOnInit(){this.changes=this.onChange.pipe(Gi(100),Bt(e=>{switch(this.onChangeComplete.emit(e),this.mode){case _t.HEX:this.colorChange.emit(e.color.hex);break;case _t.HSL:this.colorChange.emit(e.color.hsl);break;case _t.HSV:this.colorChange.emit(e.color.hsv);break;case _t.RGB:this.colorChange.emit(e.color.rgb);break;default:let i=`The mode '${this.mode}' is not supported`;if(dn())throw new Error(i);console.warn(i);break}})).subscribe(),this.setState(ri(this.color,0)),this.currentColor=this.hex}ngOnChanges(){this.setState(ri(this.color,this.oldHue))}ngOnDestroy(){this.changes?.unsubscribe(),this._onChangeCompleteSubscription?.unsubscribe(),this._onSwatchHoverSubscription?.unsubscribe()}setState(e){this.oldHue=e.oldHue,this.hsl=e.hsl,this.hsv=e.hsv,this.rgb=e.rgb,this.hex=e.hex,this.source=e.source,this.afterValidChange()}handleChange(e,i){if(wo(e)){let r=ri(e,e.h||this.oldHue,this.disableAlpha);this.setState(r),this.onChange.emit({color:r,$event:i}),this.afterValidChange()}}afterValidChange(){}handleSwatchHover(e,i){if(wo(e)){let r=ri(e,e.h||this.oldHue);this.setState(r),this.onSwatchHover.emit({color:r,$event:i})}}registerOnChange(e){this._onChangeCompleteSubscription.add(this.onChangeComplete.pipe(Bt(i=>e(i.color.hex))).subscribe())}registerOnTouched(e){this._onSwatchHoverSubscription.add(this.onSwatchHover.pipe(Bt(()=>e())).subscribe())}setDisabledState(e){}writeValue(e){this.color=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["color-wrap"]],inputs:{className:"className",mode:"mode",color:"color"},outputs:{colorChange:"colorChange",onChange:"onChange",onChangeComplete:"onChangeComplete",onSwatchHover:"onSwatchHover"},standalone:!1,features:[se([{provide:Zt,useExisting:Je(()=>t),multi:!0}]),vi],decls:0,vars:0,template:function(i,n){},encapsulation:2})}return t})();var Xa=0,So=(()=>{class t{style;label;value;arrowOffset;dragLabel;dragMax;placeholder="";onChange=new $;currentValue;blurValue;wrapStyle;inputStyle;labelStyle;focus=!1;mousemove;mouseup;uniqueId=`editableInput-${++Xa}`;ngOnInit(){this.wrapStyle=this.style&&this.style.wrap?this.style.wrap:{},this.inputStyle=this.style&&this.style.input?this.style.input:{},this.labelStyle=this.style&&this.style.label?this.style.label:{},this.dragLabel&&(this.labelStyle.cursor="ew-resize")}handleFocus(e){this.focus=!0}handleFocusOut(e){this.focus=!1,this.currentValue=this.blurValue}handleKeydown(e){let i=String(e.target.value),n=i.indexOf("%")>-1,r=Number(i.replace(/%/g,""));if(isNaN(r))return;let a=this.arrowOffset||1;e.keyCode===38&&(this.label?this.onChange.emit({data:{[this.label]:r+a},$event:e}):this.onChange.emit({data:r+a,$event:e}),n?this.currentValue=`${r+a}%`:this.currentValue=r+a),e.keyCode===40&&(this.label?this.onChange.emit({data:{[this.label]:r-a},$event:e}):this.onChange.emit({data:r-a,$event:e}),n?this.currentValue=`${r-a}%`:this.currentValue=r-a)}handleKeyup(e){e.keyCode===40||e.keyCode===38||`${this.currentValue}`!==e.target.value&&(this.label?this.onChange.emit({data:{[this.label]:e.target.value},$event:e}):this.onChange.emit({data:e.target.value,$event:e}))}ngOnChanges(){this.focus?this.blurValue=String(this.value).toUpperCase():(this.currentValue=String(this.value).toUpperCase(),this.blurValue=String(this.value).toUpperCase())}ngOnDestroy(){this.unsubscribe()}subscribe(){this.mousemove=bi(document,"mousemove").subscribe(e=>this.handleDrag(e)),this.mouseup=bi(document,"mouseup").subscribe(()=>this.unsubscribe())}unsubscribe(){this.mousemove?.unsubscribe(),this.mouseup?.unsubscribe()}handleMousedown(e){this.dragLabel&&(e.preventDefault(),this.handleDrag(e),this.subscribe())}handleDrag(e){if(this.dragLabel){let i=Math.round(this.value+e.movementX);i>=0&&i<=this.dragMax&&this.onChange.emit({data:{[this.label]:i},$event:e})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["color-editable-input"]],inputs:{style:"style",label:"label",value:"value",arrowOffset:"arrowOffset",dragLabel:"dragLabel",dragMax:"dragMax",placeholder:"placeholder"},outputs:{onChange:"onChange"},standalone:!1,features:[vi],decls:3,vars:6,consts:[[1,"wrap",3,"ngStyle"],["spellCheck","false",3,"keydown","keyup","focus","focusout","ngStyle","value","placeholder"],[3,"id","ngStyle"],[3,"mousedown","id","ngStyle"]],template:function(i,n){i&1&&(l(0,"div",0)(1,"input",1),y("keydown",function(a){return n.handleKeydown(a)})("keyup",function(a){return n.handleKeyup(a)})("focus",function(a){return n.handleFocus(a)})("focusout",function(a){return n.handleFocusOut(a)}),d(),T(2,Ka,2,3,"span",2),d()),i&2&&(c("ngStyle",n.wrapStyle),s(),c("ngStyle",n.inputStyle)("value",n.currentValue)("placeholder",n.placeholder),x("aria-labelledby",n.uniqueId),s(),E(n.label?2:-1))},dependencies:[lt],styles:["[_nghost-%COMP%]{display:flex}.wrap[_ngcontent-%COMP%]{position:relative}"],changeDetection:0})}return t})(),Mo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=te({type:t});static \u0275inj=ee({imports:[A]})}return t})();var ko=(()=>{class t{color;style={};focusStyle={};focus;onClick=new $;onHover=new $;divStyles={};focusStyles={};inFocus=!1;ngOnInit(){this.divStyles=S({background:this.color},this.style)}currentStyles(){return this.focusStyles=S(S({},this.divStyles),this.focusStyle),this.focus||this.inFocus?this.focusStyles:this.divStyles}handleFocusOut(){this.inFocus=!1}handleFocus(){this.inFocus=!0}handleHover(e,i){this.onHover.emit({hex:e,$event:i})}handleClick(e,i){this.onClick.emit({hex:e,$event:i})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["color-swatch"]],inputs:{color:"color",style:"style",focusStyle:"focusStyle",focus:"focus"},outputs:{onClick:"onClick",onHover:"onHover"},standalone:!1,ngContentSelectors:Ga,decls:3,vars:3,consts:[["tabindex","0",1,"swatch",3,"click","keydown.enter","focus","blur","mouseover","ngStyle"],["boxShadow","inset 0 0 0 1px rgba(0,0,0,0.1)"]],template:function(i,n){i&1&&(Rt(),l(0,"div",0),y("click",function(a){return n.handleClick(n.color,a)})("keydown.enter",function(a){return n.handleClick(n.color,a)})("focus",function(){return n.handleFocus()})("blur",function(){return n.handleFocusOut()})("mouseover",function(a){return n.handleHover(n.color,a)}),Ft(1),T(2,Qa,1,0,"color-checkboard",1),d()),i&2&&(c("ngStyle",n.currentStyles()),x("title",n.color),s(2),E(n.color==="transparent"?2:-1))},dependencies:[lt,Wa],styles:[".swatch[_ngcontent-%COMP%]{outline:none;height:100%;width:100%;cursor:pointer;position:relative}"],changeDetection:0})}return t})(),To=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=te({type:t});static \u0275inj=ee({imports:[A,Ya]})}return t})();var es=t=>({input:t});function ts(t,o){if(t&1){let e=P();l(0,"div",3)(1,"color-swatch",7),y("onClick",function(n){f(e);let r=p();return g(r.handleBlockChange(n))})("onHover",function(n){f(e);let r=p();return g(r.onSwatchHover.emit(n))}),d()()}if(t&2){let e=o.$implicit,i=p();s(),ue(i.swatchStyle),c("color",e)("focusStyle",i.focus(e))}}var Eo=(()=>{class t extends zi{width=276;colors=["#FF6900","#FCB900","#7BDCB5","#00D084","#8ED1FC","#0693E3","#ABB8C3","#EB144C","#F78DA7","#9900EF"];triangle="top-left";swatchStyle={width:"30px",height:"30px",borderRadius:"4px",fontSize:"0"};input={borderRadius:"4px",borderBottomLeftRadius:"0",borderTopLeftRadius:"0",border:"1px solid #e6ecf0",boxSizing:"border-box",display:"inline",fontSize:"14px",height:"30px",padding:"0",paddingLeft:"6px",width:"100%",color:"#657786"};disableAlpha=!0;constructor(){super()}focus(e){return{boxShadow:`0 0 4px ${e}`}}handleBlockChange({hex:e,$event:i}){Io(e)&&this.handleChange({hex:e,source:"hex"},i)}handleValueChange({data:e,$event:i}){this.handleBlockChange({hex:e,$event:i})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["color-twitter"]],inputs:{width:"width",colors:"colors",triangle:"triangle"},standalone:!1,features:[se([{provide:Zt,useExisting:Je(()=>t),multi:!0},{provide:zi,useExisting:Je(()=>t)}]),q],decls:11,vars:11,consts:[[1,"triangleShadow"],[1,"triangle"],[1,"twitter-body"],[1,"twitter-swatch"],[1,"twitter-hash"],[1,"twitter-input"],[3,"onChange","value"],[3,"onClick","onHover","color","focusStyle"]],template:function(i,n){i&1&&(l(0,"div"),m(1,"div",0)(2,"div",1),l(3,"div",2),qe(4,ts,2,4,"div",3,an),l(6,"div",4)(7,"div"),h(8,"#"),d()(),l(9,"div",5)(10,"color-editable-input",6),y("onChange",function(a){return n.handleValueChange(a)}),d()()()()),i&2&&(w(ln("twitter-picker ",n.triangle,"-triangle ",n.className)),Ve("width",n.width,"px"),s(4),Ke(n.colors),s(6),ue(Ce(9,es,n.input)),c("value",n.hex.replace("#","")))},dependencies:[ko,So],styles:[".twitter-picker[_ngcontent-%COMP%]{background:#fff;border:0px solid rgba(0,0,0,.25);box-shadow:#00000040 0 1px 4px;border-radius:4px;position:relative;box-sizing:border-box}.triangleShadow[_ngcontent-%COMP%]{width:0px;height:0px;border-style:solid;border-width:0px 9px 10px;border-color:transparent transparent rgba(0,0,0,.1);position:absolute}.triangle[_ngcontent-%COMP%]{width:0px;height:0px;border-style:solid;border-width:0px 9px 10px;border-color:transparent transparent rgb(255,255,255);position:absolute}.hide-triangle[_ngcontent-%COMP%] > .triangle[_ngcontent-%COMP%]{display:none}.hide-triangle[_ngcontent-%COMP%] > .triangleShadow[_ngcontent-%COMP%]{display:none}.top-left-triangle[_ngcontent-%COMP%] > .triangle[_ngcontent-%COMP%]{top:-10px;left:12px}.top-left-triangle[_ngcontent-%COMP%] > .triangleShadow[_ngcontent-%COMP%]{top:-11px;left:12px}.top-right-triangle[_ngcontent-%COMP%] > .triangle[_ngcontent-%COMP%]{top:-10px;right:12px}.top-right-triangle[_ngcontent-%COMP%] > .triangleShadow[_ngcontent-%COMP%]{top:-11px;right:12px}.twitter-body[_ngcontent-%COMP%]{padding:15px 9px 9px 15px}.twitter-swatch[_ngcontent-%COMP%]{width:30px;height:30px;display:inline-block;margin:0 6px 0 0}.twitter-hash[_ngcontent-%COMP%]{background:#f0f0f0;height:30px;width:30px;border-radius:4px 0 0 4px;color:#98a1a4;margin-left:-3px;display:inline-block}.twitter-hash[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;align-items:center;justify-content:center;height:30px;width:30px;display:flex}.twitter-input[_ngcontent-%COMP%]{display:inline-block;margin-top:-6px;font-size:10px;height:27px;padding:0;position:relative;top:6px;vertical-align:top;width:108px;margin-left:-4px}"],changeDetection:0})}return t})(),Ao=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=te({type:t});static \u0275inj=ee({imports:[A,To,Mo]})}return t})();function ns(t,o){if(t&1){let e=P();l(0,"div",2)(1,"span",3),h(2),b(3,"translate"),d(),l(4,"div",4)(5,"div",5),y("click",function(){f(e);let n=p();return g(n.menuMode="static")}),l(6,"div",10)(7,"div",28)(8,"div",29),m(9,"div",30)(10,"div",30)(11,"div",30)(12,"div",30),d()(),l(13,"div",31)(14,"div",32)(15,"div",13),m(16,"div",33)(17,"div",33),d()(),m(18,"div",34),d()(),l(19,"div",8),h(20),b(21,"translate"),d()(),l(22,"div",5),y("click",function(){f(e);let n=p();return g(n.menuMode="overlay")}),l(23,"div",10)(24,"div",35)(25,"div",32)(26,"div",13),m(27,"div",33)(28,"div",33),d()(),l(29,"div",34)(30,"div",36)(31,"div",29),m(32,"div",30)(33,"div",30)(34,"div",30),d()()()()(),l(35,"div",8),h(36),b(37,"translate"),d()(),l(38,"div",5),y("click",function(){f(e);let n=p();return g(n.menuMode="slim")}),l(39,"div",10)(40,"div",37)(41,"div",38),m(42,"div",30)(43,"div",30)(44,"div",30)(45,"div",30),d()(),l(46,"div",31)(47,"div",32)(48,"div",13),m(49,"div",33)(50,"div",33),d()(),m(51,"div",34),d()(),l(52,"div",8),h(53),b(54,"translate"),d()(),l(55,"div",5),y("click",function(){f(e);let n=p();return g(n.menuMode="slim-plus")}),l(56,"div",10)(57,"div",39)(58,"div",38),m(59,"div",30)(60,"div",30)(61,"div",30)(62,"div",30),d()(),l(63,"div",31)(64,"div",32)(65,"div",13),m(66,"div",33)(67,"div",33),d()(),m(68,"div",34),d()(),l(69,"div",8),h(70),b(71,"translate"),d()(),l(72,"div",5),y("click",function(){f(e);let n=p();return g(n.menuMode="drawer")}),l(73,"div",10)(74,"div",35)(75,"div",32)(76,"div",40),m(77,"div",41),d()(),l(78,"div",34)(79,"div",42)(80,"div",29),m(81,"div",30)(82,"div",30)(83,"div",30),d()()()()(),l(84,"div",8),h(85),b(86,"translate"),d()(),l(87,"div",5),y("click",function(){f(e);let n=p();return g(n.menuMode="horizontal")}),l(88,"div",10)(89,"div",43)(90,"div",44),m(91,"div",41)(92,"div",41)(93,"div",41),d()(),m(94,"div",45),d(),l(95,"div",8),h(96),b(97,"translate"),d()()()(),l(98,"div",2)(99,"span",3),h(100),b(101,"translate"),d(),l(102,"div",4)(103,"div",5),y("click",function(){f(e);let n=p();return g(n.menuProfilePosition="start")}),l(104,"div",10)(105,"div",28)(106,"div",46),m(107,"div",47),d(),l(108,"div",48),m(109,"div",30)(110,"div",30)(111,"div",30),d()(),l(112,"div",31),m(113,"div",32)(114,"div",34),d()(),l(115,"div",8),h(116),b(117,"translate"),d()(),l(118,"div",5),y("click",function(){f(e);let n=p();return g(n.menuProfilePosition="end")}),l(119,"div",10)(120,"div",28)(121,"div",49),m(122,"div",30)(123,"div",30)(124,"div",30),d(),l(125,"div",50),m(126,"div",47),d()(),l(127,"div",31),m(128,"div",32)(129,"div",34),d()(),l(130,"div",8),h(131),b(132,"translate"),d()()()()}if(t&2){let e=p();s(2),L(v(3,34,"menu.type")),s(4),c("ngClass",e.menuMode==="static"?"border-primary border-3":"border-surface-200 dark:border-surface-700"),s(13),ie("text-primary",e.menuMode==="static"),s(),V(" ",v(21,36,"menu.static")," "),s(3),c("ngClass",e.menuMode==="overlay"?"border-primary border-3":"border-surface-200 dark:border-surface-700"),s(12),ie("text-primary",e.menuMode==="overlay"),s(),V(" ",v(37,38,"menu.overlay")," "),s(3),c("ngClass",e.menuMode==="slim"?"border-primary border-3":"border-surface-200 dark:border-surface-700"),s(13),ie("text-primary",e.menuMode==="slim"),s(),V(" ",v(54,40,"menu.slim")," "),s(3),c("ngClass",e.menuMode==="slim-plus"?"border-primary border-3":"border-surface-200 dark:border-surface-700"),s(13),ie("text-primary",e.menuMode==="slim-plus"),s(),V(" ",v(71,42,"menu.slim_plus")," "),s(3),c("ngClass",e.menuMode==="drawer"?"border-primary border-3":"border-surface-200 dark:border-surface-700"),s(11),ie("text-primary",e.menuMode==="drawer"),s(),V(" ",v(86,44,"menu.drawer")," "),s(3),c("ngClass",e.menuMode==="horizontal"?"border-primary border-3":"border-surface-200 dark:border-surface-700"),s(7),ie("text-primary",e.menuMode==="horizontal"),s(),V(" ",v(97,46,"menu.horizontal")," "),s(4),L(v(101,48,"profile.position")),s(4),c("ngClass",e.menuProfilePosition==="start"?"border-primary border-3":"border-surface-200 dark:border-surface-700"),s(11),ie("text-primary",e.menuProfilePosition==="start"),s(),V(" ",v(117,50,"time.start")," "),s(3),c("ngClass",e.menuProfilePosition==="end"?"border-primary border-3":"border-surface-200 dark:border-surface-700"),s(11),ie("text-primary",e.menuProfilePosition==="end"),s(),V(" ",v(132,52,"time.end")," ")}}var ai=class t{simple=!1;layoutService=_(le);colors=Vn;get currentLanguage(){return this.layoutService.currentLanguage()}get menuMode(){return this.layoutService.layoutConfig().menuMode}set menuMode(o){this.layoutService.layoutConfig.update(e=>B(S({},e),{menuMode:o}))}get menuProfilePosition(){return this.layoutService.layoutConfig().menuProfilePosition}set menuProfilePosition(o){this.layoutService.layoutConfig.update(e=>B(S({},e),{menuProfilePosition:o}))}get darkTheme(){return this.layoutService.layoutConfig().darkTheme}set darkTheme(o){this.layoutService.layoutConfig.update(e=>B(S({},e),{menuTheme:o?"dark":"light",topbarTheme:o?"dark":"light",darkTheme:o}))}get primaryColor(){return this.layoutService.layoutConfig().primaryColor??Rn}get visible(){return this.layoutService.layoutState().configSidebarVisible}set visible(o){this.layoutService.layoutState.update(e=>B(S({},e),{configSidebarVisible:o}))}toggleConfigSidebar(){this.layoutService.layoutState.update(o=>B(S({},o),{configSidebarVisible:!o.configSidebarVisible}))}changeLanguage(o){this.layoutService.changeLanguage(o)}selectPresetColor(o){this.applyColor(o)}applyColor(o){this.layoutService.layoutConfig.update(e=>B(S({},e),{primaryColor:o})),$n(o)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-preferences"]],inputs:{simple:[2,"simple","simple",R]},decls:61,vars:41,consts:[["position","right","styleClass","w-90",3,"visibleChange","onHide","visible","header","blockScroll"],[1,"flex","flex-col","gap-6"],[1,"flex","flex-col","gap-3"],[1,"font-semibold","text-sm"],[1,"grid","grid-cols-2","gap-4"],[1,"flex","cursor-pointer","flex-col",3,"click"],[1,"flex","h-20","items-center","justify-center","overflow-hidden","rounded-md","border-2","transition-all","hover:opacity-80",3,"ngClass"],["src","images/flags/PE.png","alt","","width","30"],[1,"text-surface-600","dark:text-surface-400","mt-2","text-center","text-sm","font-thin"],["src","images/flags/US.png","alt","","width","30"],[1,"flex","h-20","overflow-hidden","rounded-md","border-2","transition-all","hover:opacity-80",3,"ngClass"],[1,"flex","flex-auto","flex-col","bg-white"],[1,"h-3","bg-gray-100","border-b","border-gray-200"],[1,"mr-1.5","flex","h-full","items-center","justify-end"],[1,"ml-1","h-1","w-1","rounded-full","bg-gray-400"],[1,"flex","flex-auto","bg-gray-50","p-2"],[1,"w-full","space-y-1"],[1,"h-1","w-3/4","rounded-sm","bg-gray-300"],[1,"h-1","w-full","rounded-sm","bg-gray-200"],[1,"h-1","w-2/3","rounded-sm","bg-gray-200"],[1,"flex","flex-auto","flex-col","bg-gray-900"],[1,"h-3","bg-gray-800","border-b","border-gray-700"],[1,"ml-1","h-1","w-1","rounded-full","bg-gray-500"],[1,"flex","flex-auto","bg-gray-950","p-2"],[1,"h-1","w-3/4","rounded-sm","bg-gray-600"],[1,"h-1","w-full","rounded-sm","bg-gray-700"],[1,"h-1","w-2/3","rounded-sm","bg-gray-700"],[3,"onChangeComplete","color","colors"],[1,"w-8","bg-surface-100","dark:bg-surface-800"],[1,"mx-1.5","mt-3","space-y-1"],[1,"h-1","rounded-sm","bg-surface-300","dark:bg-surface-600"],[1,"flex","flex-auto","flex-col","border-l","border-surface-200","dark:border-surface-700"],[1,"h-3","bg-surface-100","dark:bg-surface-800"],[1,"ml-1","h-1","w-1","rounded-full","bg-surface-400","dark:bg-surface-600"],[1,"flex","flex-auto","border-t","border-surface-200","bg-surface-0","dark:border-surface-700","dark:bg-surface-900"],[1,"flex","flex-auto","flex-col"],[1,"w-8","bg-surface-100","dark:bg-surface-800","opacity-70"],[1,"w-5","bg-surface-100","dark:bg-surface-800"],[1,"mx-1","mt-3","space-y-1"],[1,"w-7","bg-surface-100","dark:bg-surface-800"],[1,"ml-1.5","flex","h-full","items-center"],[1,"h-1","w-3","rounded-sm","bg-surface-300","dark:bg-surface-600"],[1,"w-10","bg-surface-100","dark:bg-surface-800","shadow-md"],[1,"h-5","border-b","border-surface-200","bg-surface-100","dark:border-surface-700","dark:bg-surface-800","w-full"],[1,"ml-1.5","flex","h-full","items-center","gap-1"],[1,"flex","flex-auto","bg-surface-0","dark:bg-surface-900"],[1,"mx-1.5","mt-2","mb-2","pb-2","border-b","border-surface-200","dark:border-surface-700"],[1,"h-3","w-3","mx-auto","rounded-full","bg-surface-300","dark:bg-surface-600"],[1,"mx-1.5","space-y-1"],[1,"mx-1.5","mt-2","space-y-1","flex-auto"],[1,"mx-1.5","mt-6","pt-2","border-t","border-surface-200","dark:border-surface-700"]],template:function(e,i){e&1&&(l(0,"p-drawer",0),b(1,"translate"),Nt("visibleChange",function(r){return Ht(i.visible,r)||(i.visible=r),r}),y("onHide",function(){return i.layoutService.hideConfigSidebar()}),l(2,"div",1)(3,"div",2)(4,"span",3),h(5),b(6,"translate"),d(),l(7,"div",4)(8,"div",5),y("click",function(){return i.changeLanguage("es")}),l(9,"div",6),m(10,"img",7),d(),l(11,"div",8),h(12),b(13,"translate"),d()(),l(14,"div",5),y("click",function(){return i.changeLanguage("en")}),l(15,"div",6),m(16,"img",9),d(),l(17,"div",8),h(18),b(19,"translate"),d()()()(),l(20,"div",2)(21,"span",3),h(22),b(23,"translate"),d(),l(24,"div",4)(25,"div",5),y("click",function(){return i.darkTheme=!1}),l(26,"div",10)(27,"div",11)(28,"div",12)(29,"div",13),m(30,"div",14)(31,"div",14),d()(),l(32,"div",15)(33,"div",16),m(34,"div",17)(35,"div",18)(36,"div",19),d()()()(),l(37,"div",8),h(38),b(39,"translate"),d()(),l(40,"div",5),y("click",function(){return i.darkTheme=!0}),l(41,"div",10)(42,"div",20)(43,"div",21)(44,"div",13),m(45,"div",22)(46,"div",22),d()(),l(47,"div",23)(48,"div",16),m(49,"div",24)(50,"div",25)(51,"div",26),d()()()(),l(52,"div",8),h(53),b(54,"translate"),d()()()(),l(55,"div",2)(56,"span",3),h(57),b(58,"translate"),d(),l(59,"color-twitter",27),y("onChangeComplete",function(r){return i.selectPresetColor(r.color.hex)}),d()(),T(60,ns,133,54),d()()),e&2&&(Vt("visible",i.visible),c("header",v(1,25,"settings.preferences"))("blockScroll",!0),s(5),L(v(6,27,"language.label")),s(4),c("ngClass",i.currentLanguage==="es"?"border-primary border-3":"border-surface-200 dark:border-surface-700"),s(2),ie("text-primary",i.currentLanguage==="es"),s(),V(" ",v(13,29,"language.spanish")," "),s(3),c("ngClass",i.currentLanguage==="en"?"border-primary border-3":"border-surface-200 dark:border-surface-700"),s(2),ie("text-primary",i.currentLanguage==="en"),s(),V(" ",v(19,31,"language.english")," "),s(4),L(v(23,33,"theme.label")),s(4),c("ngClass",i.darkTheme?"border-surface-200 dark:border-surface-700":"border-primary border-3"),s(11),ie("text-primary",!i.darkTheme),s(),V(" ",v(39,35,"theme.light")," "),s(3),c("ngClass",i.darkTheme?"border-primary border-3":"border-surface-200 dark:border-surface-700"),s(11),ie("text-primary",i.darkTheme),s(),V(" ",v(54,37,"theme.dark")," "),s(4),L(v(58,39,"theme.primaryColor")),s(2),c("color",i.primaryColor)("colors",i.colors),s(),E(i.simple?-1:60))},dependencies:[A,xe,gt,qn,ii,kt,Qn,J,oe,Ao,Eo,X],encapsulation:2})};var os=["app-breadcrumb",""];function rs(t,o){if(t&1&&(l(0,"li"),m(1,"i",4),d(),l(2,"li")(3,"span",5),h(4),b(5,"translate"),d()()),t&2){let e=o.$implicit;s(4),L(v(5,1,e.label))}}function as(t,o){if(t&1){let e=P();l(0,"p-button",6),b(1,"translate"),y("onClick",function(){f(e);let n=p();return g(n.goBack())}),d()}t&2&&c("pTooltip",v(1,1,"actions.return"))}var si=class t{constructor(o,e){this.router=o;this.location=e;this.router.events.pipe(it(i=>i instanceof dt)).subscribe(()=>{let i=this.router.routerState.snapshot.root,n=[];this.addBreadcrumb(i,[],n),this.breadcrumbs.set(n),this.updateBackButtonVisibility(i)})}breadcrumbs=ve([]);showBackButton=ve(!1);addBreadcrumb(o,e,i){let n=e.concat(o.url.map(u=>u.path)),r=o.data.breadcrumb,a=o.parent&&o.parent.data?o.parent.data.breadcrumb:null;r&&r!==a&&i.push({label:o.data.breadcrumb,url:"/"+n.join("/")}),o.firstChild&&this.addBreadcrumb(o.firstChild,n,i)}updateBackButtonVisibility(o){let e=o;for(;e.firstChild;)e=e.firstChild;let i=e.data.showBackButton;i!==void 0?this.showBackButton.set(i):this.showBackButton.set(this.breadcrumbs().length>1)}goBack(){this.location.back()}static \u0275fac=function(e){return new(e||t)(G(we),G($t))};static \u0275cmp=C({type:t,selectors:[["","app-breadcrumb",""]],hostAttrs:[1,"layout-breadcrumb-container"],attrs:os,decls:8,vars:1,consts:[[1,"layout-breadcrumb"],[1,"ph-thin","ph-house"],[1,"layout-breadcrumb-buttons"],["variant","text","icon","ph-bold ph-arrow-fat-left","styleClass","p-0!",3,"pTooltip"],[1,"ph","ph-caret-right","text-sm!"],[1,"text-sm"],["variant","text","icon","ph-bold ph-arrow-fat-left","styleClass","p-0!",3,"onClick","pTooltip"]],template:function(e,i){e&1&&(l(0,"nav",0)(1,"ol")(2,"li"),m(3,"i",1),d(),qe(4,rs,6,3,null,null,at),d()(),l(6,"div",2),T(7,as,2,3,"p-button",3),d()),e&2&&(s(4),Ke(i.breadcrumbs()),s(3),E(i.showBackButton()?7:-1))},dependencies:[A,ne,We,bt,Ut,J,oe,Me,X],encapsulation:2})};var ls=["submenu"],cs=["app-menuitem",""],ds=()=>({paths:"exact",queryParams:"ignored",matrixParams:"ignored",fragment:"ignored"});function ps(t,o){if(t&1&&(l(0,"div",1)(1,"span"),h(2),b(3,"translate"),d(),m(4,"i",4),d()),t&2){let e=p(2);s(2),L(v(3,1,e.item.label))}}function ms(t,o){t&1&&m(0,"i",8)}function us(t,o){if(t&1){let e=P();l(0,"a",5),b(1,"translate"),y("click",function(n){f(e);let r=p(2);return g(r.itemClick(n))})("mouseenter",function(){f(e);let n=p(2);return g(n.onMouseEnter())}),m(2,"i",6),l(3,"span",7),h(4),b(5,"translate"),d(),T(6,ms,1,0,"i",8),d()}if(t&2){let e=p(2);c("ngClass",e.item.class)("pTooltip",v(1,8,e.item.label))("tooltipDisabled",!(e.isSlim()&&e.root&&!e.active)),x("href",e.item.url,Ot)("target",e.item.target),s(2),c("ngClass",e.item.icon),s(2),L(v(5,10,e.item.label)),s(2),E(e.item.items?6:-1)}}function hs(t,o){if(t&1){let e=P();l(0,"a",9),b(1,"translate"),y("click",function(n){f(e);let r=p(2);return g(r.itemClick(n))})("mouseenter",function(){f(e);let n=p(2);return g(n.onMouseEnter())}),m(2,"i",6),l(3,"span",7),h(4),b(5,"translate"),d()()}if(t&2){let e=p(2);c("ngClass",e.item.class)("routerLink",e.item.routerLink)("routerLinkActiveOptions",e.item.routerLinkActiveOptions||st(19,ds))("fragment",e.item.fragment)("queryParamsHandling",e.item.queryParamsHandling)("preserveFragment",e.item.preserveFragment)("skipLocationChange",e.item.skipLocationChange)("replaceUrl",e.item.replaceUrl)("state",e.item.state)("queryParams",e.item.queryParams)("pTooltip",v(1,15,e.item.label))("tooltipDisabled",!(e.isSlim()&&e.root)),x("target",e.item.target),s(2),c("ngClass",e.item.icon),s(2),L(v(5,17,e.item.label))}}function fs(t,o){if(t&1&&m(0,"li",11),t&2){let e=o.$implicit,i=o.$index,n=p(3);w(e.badgeClass),c("item",e)("index",i)("parentKey",n.key)}}function gs(t,o){if(t&1){let e=P();l(0,"ul",null,0),y("@children.done",function(n){f(e);let r=p(2);return g(r.onSubmenuAnimated(n))}),qe(2,fs,1,5,"li",10,at),d()}if(t&2){let e=p(2);c("@children",e.submenuAnimation),s(2),Ke(e.item.items)}}function bs(t,o){if(t&1&&(T(0,ps,5,3,"div",1),T(1,us,7,12,"a",2),T(2,hs,6,20,"a",3),T(3,gs,4,1,"ul")),t&2){let e=p();E(e.root?0:-1),s(),E(!e.item.routerLink||e.item.items?1:-1),s(),E(e.item.routerLink&&!e.item.items?2:-1),s(),E(e.item.items?3:-1)}}var li=class t{constructor(o,e){this.layoutService=o;this.router=e;this.menuSourceSubscription=this.layoutService.menuSource$.subscribe(i=>{Promise.resolve(null).then(()=>{i.routeEvent?this.active=!!(i.key===this.key||i.key.startsWith(this.key+"-")):i.key!==this.key&&!i.key.startsWith(this.key+"-")&&(this.active=!1)})}),this.menuResetSubscription=this.layoutService.resetSource$.subscribe(()=>{this.active=!1}),this.router.events.pipe(it(i=>i instanceof dt)).subscribe(()=>{this.isSlimPlus()||this.isSlim()||this.isHorizontal()?(this.active=!1,this.updateHasActiveRoute()):this.item.routerLink&&this.updateActiveStateFromRoute()})}item;index;root;parentKey;submenu;get activeClass(){return this.active}get hasActiveRouteClass(){return this.root&&(this.isSlim()||this.isSlimPlus())&&this.layoutService.isDesktop()?this.hasActiveRoute:!1}leaveTimer=null;onHostMouseEnter(){this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null)}onHostMouseLeave(){this.leaveTimer=setTimeout(()=>{this.onMouseLeave(),this.leaveTimer=null},100)}active=!1;hasActiveRoute=!1;menuSourceSubscription;menuResetSubscription;key="";get submenuAnimation(){return this.layoutService.isDesktop()&&(this.layoutService.isHorizontal()||this.layoutService.isSlim()||this.layoutService.isSlimPlus())?this.active?"visible":"hidden":this.root||this.active?"expanded":"collapsed"}isSlim=j(()=>this.layoutService.isSlim());isSlimPlus=j(()=>this.layoutService.isSlimPlus());isHorizontal=j(()=>this.layoutService.isHorizontal());get isDesktop(){return this.layoutService.isDesktop()}get isMobile(){return this.layoutService.isMobile()}ngOnInit(){this.key=this.parentKey?this.parentKey+"-"+this.index:String(this.index),!(this.isSlimPlus()||this.isSlim()||this.isHorizontal())&&this.item.routerLink&&this.updateActiveStateFromRoute(),this.updateHasActiveRoute()}ngAfterViewChecked(){this.root&&this.active&&this.isDesktop&&(this.isHorizontal()||this.isSlim()||this.isSlimPlus())&&this.calculatePosition(this.submenu?.nativeElement,this.submenu?.nativeElement.parentElement)}updateHasActiveRoute(){if(!this.root||!this.item.items)return;let o=this.itemHasActiveRoute(this.item);this.hasActiveRoute=o}itemHasActiveRoute(o){if(o.routerLink){let e=Array.isArray(o.routerLink)?o.routerLink[0]:o.routerLink;if(e&&this.router.isActive(e,{paths:"exact",queryParams:"ignored",matrixParams:"ignored",fragment:"ignored"}))return!0}return o.items?o.items.some(e=>this.itemHasActiveRoute(e)):!1}updateActiveStateFromRoute(){this.router.isActive(this.item.routerLink[0],{paths:"exact",queryParams:"ignored",matrixParams:"ignored",fragment:"ignored"})&&this.layoutService.onMenuStateChange({key:this.key,routeEvent:!0})}onSubmenuAnimated(o){if(o.toState==="visible"&&this.isDesktop&&(this.isHorizontal()||this.isSlim()||this.isSlimPlus())){let e=o.element,i=e.parentElement;this.calculatePosition(e,i)}}calculatePosition(o,e){if(o){let{left:i,top:n}=e.getBoundingClientRect(),[r,a]=[window.innerWidth,window.innerHeight],[u,D]=[o.offsetWidth,o.offsetHeight],de=En.calculateScrollbarWidth(),Te=document.querySelector(".layout-topbar")?.offsetHeight||0;if(o.style.top="",o.style.left="",this.layoutService.isHorizontal()){let je=i+u+de;o.style.left=r<je?`${i-(je-r)}px`:`${i}px`}else if(this.layoutService.isSlim()||this.layoutService.isSlimPlus()){let je=n-Te,Lt=je+D+Te;o.style.top=a<Lt?`${je-(Lt-a)}px`:`${je}px`}}}itemClick(o){if(this.item.disabled){o.preventDefault();return}(this.root&&this.isSlim()||this.isHorizontal()||this.isSlimPlus())&&this.layoutService.layoutState.update(e=>B(S({},e),{menuHoverActive:!e.menuHoverActive})),this.item.command&&this.item.command({originalEvent:o,item:this.item}),this.item.items?(this.active=!this.active,this.root&&this.active&&(this.isSlim()||this.isHorizontal()||this.isSlimPlus())&&this.layoutService.onOverlaySubmenuOpen()):(this.layoutService.isMobile()&&this.layoutService.layoutState.update(e=>B(S({},e),{staticMenuMobileActive:!1})),(this.isSlim()||this.isHorizontal()||this.isSlimPlus())&&(this.layoutService.reset(),this.layoutService.layoutState.update(e=>B(S({},e),{menuHoverActive:!1})))),this.layoutService.onMenuStateChange({key:this.key})}onMouseEnter(){this.root&&(this.isSlim()||this.isHorizontal()||this.isSlimPlus())&&this.layoutService.isDesktop()&&(this.layoutService.layoutState().menuHoverActive?(this.active=!0,this.layoutService.onMenuStateChange({key:this.key})):(this.isSlim()||this.isSlimPlus())&&(this.active=!0,this.layoutService.layoutState.update(o=>B(S({},o),{menuHoverActive:!0})),this.layoutService.onMenuStateChange({key:this.key}),this.item.items&&this.layoutService.onOverlaySubmenuOpen()))}onMouseLeave(){this.root&&(this.isSlim()||this.isSlimPlus())&&this.layoutService.isDesktop()&&this.layoutService.layoutState.update(o=>B(S({},o),{menuHoverActive:!1}))}ngOnDestroy(){this.menuSourceSubscription&&this.menuSourceSubscription.unsubscribe(),this.menuResetSubscription&&this.menuResetSubscription.unsubscribe(),this.leaveTimer&&clearTimeout(this.leaveTimer)}static \u0275fac=function(e){return new(e||t)(G(le),G(we))};static \u0275cmp=C({type:t,selectors:[["","app-menuitem",""]],viewQuery:function(e,i){if(e&1&&ae(ls,5),e&2){let n;M(n=k())&&(i.submenu=n.first)}},hostVars:6,hostBindings:function(e,i){e&1&&y("mouseenter",function(){return i.onHostMouseEnter()})("mouseleave",function(){return i.onHostMouseLeave()}),e&2&&ie("layout-root-menuitem",i.root)("active-menuitem",i.activeClass)("has-active-route",i.hasActiveRouteClass)},inputs:{item:"item",index:"index",root:"root",parentKey:"parentKey"},attrs:cs,decls:1,vars:1,consts:[["submenu",""],[1,"layout-menuitem-root-text"],["tabindex","0","pRipple","",3,"ngClass","pTooltip","tooltipDisabled"],["routerLinkActive","active-route","tabindex","0","pRipple","",3,"ngClass","routerLink","routerLinkActiveOptions","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","queryParams","pTooltip","tooltipDisabled"],[1,"layout-menuitem-root-icon","ph-thin","ph-minus"],["tabindex","0","pRipple","",3,"click","mouseenter","ngClass","pTooltip","tooltipDisabled"],[1,"layout-menuitem-icon",3,"ngClass"],[1,"layout-menuitem-text"],[1,"ph-thin","ph-caret-down","layout-submenu-toggler"],["routerLinkActive","active-route","tabindex","0","pRipple","",3,"click","mouseenter","ngClass","routerLink","routerLinkActiveOptions","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","queryParams","pTooltip","tooltipDisabled"],["app-menuitem","",3,"item","index","parentKey","class"],["app-menuitem","",3,"item","index","parentKey"]],template:function(e,i){e&1&&T(0,bs,4,4),e&2&&E(i.item.visible!==!1?0:-1)},dependencies:[t,A,xe,ne,pt,Gt,Ut,ft,oe,Me,J,X],encapsulation:2,data:{animation:[Ct("children",[ct("collapsed",W({height:"0",overflow:"hidden"})),ct("expanded",W({height:"*",overflow:"hidden"})),ct("hidden",W({height:"0",opacity:"0",overflow:"hidden"})),ct("visible",W({height:"*",opacity:"1",overflow:"visible"})),De("collapsed <=> expanded",Pe("400ms cubic-bezier(0.86, 0, 0.07, 1)")),De("hidden => visible",[W({height:"0",opacity:"0",overflow:"hidden"}),Pe("400ms cubic-bezier(0.86, 0, 0.07, 1)",W({height:"*",opacity:"1"}))]),De("visible => hidden",[W({overflow:"hidden"}),Pe("400ms cubic-bezier(0.86, 0, 0.07, 1)",W({height:"0",opacity:"0"}))])])]}})};var vs=["menuContainer"];function _s(t,o){if(t&1&&m(0,"li",2),t&2){let e=p(),i=e.$implicit,n=e.$index;c("item",i)("index",n)("root",!0)}}function ys(t,o){t&1&&m(0,"li",3)}function Cs(t,o){if(t&1&&T(0,_s,1,3,"li",2)(1,ys,1,0,"li",3),t&2){let e=o.$implicit;E(e.separator?1:0)}}var Pt=class t{el=_(Re);menuContainer;model=[{label:"analytics.label",icon:"ph-thin ph-chart-bar",items:[{label:"analytics.overview",icon:"ph-thin ph-chart-pie-slice",routerLink:["/analytics/overview"]},{label:"analytics.reports",icon:"ph-thin ph-chart-bar",routerLink:["/analytics/reports"]},{label:"analytics.realtime",icon:"ph-thin ph-presentation-chart",routerLink:["/analytics/realtime"]}]},{label:"management.label",icon:"ph-thin ph-briefcase",items:[{label:"user.plural.label",icon:"ph-thin ph-users",routerLink:"/users"},{label:"teams.label",icon:"ph-thin ph-tree-structure",routerLink:""}]},{label:"apps.label",icon:"ph-thin ph-grid-four",items:[{label:"blog.label",icon:"ph-thin ph-chat-circle-text",items:[{label:"blog.list",icon:"ph-thin ph-image",routerLink:""},{label:"blog.detail",icon:"ph-thin ph-file-text",routerLink:""},{label:"blog.edit",icon:"ph-thin ph-pencil",routerLink:""}]},{label:"notifications.label",icon:"ph-thin ph-bell",routerLink:""},{label:"messages.label",icon:"ph-thin ph-envelope",routerLink:""}]},{label:"settings.label",icon:"ph-thin ph-gear",items:[{label:"profile.label",icon:"ph-thin ph-user",routerLink:""},{label:"preferences.label",icon:"ph-thin ph-sliders",routerLink:""},{label:"security.label",icon:"ph-thin ph-shield",routerLink:""}]},{separator:!0},{label:"support.label",icon:"ph-thin ph-question",items:[{label:"support.documentation",icon:"ph-thin ph-book",routerLink:""},{label:"support.contact",icon:"ph-thin ph-headset",routerLink:""}]}];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-menu"],["","app-menu",""]],viewQuery:function(e,i){if(e&1&&ae(vs,5),e&2){let n;M(n=k())&&(i.menuContainer=n.first)}},decls:4,vars:0,consts:[["menuContainer",""],[1,"layout-menu"],["app-menuitem","",3,"item","index","root"],[1,"menu-separator"]],template:function(e,i){e&1&&(l(0,"ul",1,0),qe(2,Cs,2,1,null,null,at),d()),e&2&&(s(2),Ke(i.model))},dependencies:[A,li,ne],encapsulation:2})};var xs=["app-menu-profile",""],ws=(t,o)=>({"ph-caret-down":t,"ph-caret-up":o});function Is(t,o){if(t&1){let e=P();l(0,"ul")(1,"li",4),b(2,"translate"),l(3,"button",5),y("click",function(){f(e);let n=p();return g(n.toggleConfigSidebar())}),m(4,"i",6),l(5,"span"),h(6),b(7,"translate"),d()()(),l(8,"li",4),b(9,"translate"),l(10,"button",7),m(11,"i",8),l(12,"span"),h(13),b(14,"translate"),d()()(),l(15,"li",4),b(16,"translate"),l(17,"button",7),m(18,"i",9),l(19,"span"),h(20),b(21,"translate"),d()()()()}if(t&2){let e=p();c("@menu",e.isHorizontal()?"overlay":"inline"),s(),c("pTooltip",v(2,10,"preferences.label"))("tooltipDisabled",e.isTooltipDisabled()),s(5),L(v(7,12,"preferences.label")),s(2),c("pTooltip",v(9,14,"profile.label"))("tooltipDisabled",e.isTooltipDisabled()),s(5),L(v(14,16,"profile.label")),s(2),c("pTooltip",v(16,18,"auth.logout"))("tooltipDisabled",e.isTooltipDisabled()),s(5),L(v(21,20,"auth.logout"))}}var ci=class t{layoutService=_(le);renderer=_(rt);el=_(Re);isHorizontal=j(()=>this.layoutService.isHorizontal()&&this.layoutService.isDesktop());menuProfileActive=j(()=>this.layoutService.layoutState().menuProfileActive);menuProfilePosition=j(()=>this.layoutService.layoutConfig().menuProfilePosition);isTooltipDisabled=j(()=>!this.layoutService.isSlim());subscription;outsideClickListener;constructor(){this.subscription=this.layoutService.overlayOpen$.subscribe(()=>{this.isHorizontal()&&this.menuProfileActive()&&this.layoutService.layoutState.update(o=>B(S({},o),{menuProfileActive:!1}))}),ot(()=>{this.isHorizontal()&&this.menuProfileActive()&&!this.outsideClickListener&&this.bindOutsideClickListener(),!this.menuProfileActive()&&this.isHorizontal()&&this.unbindOutsideClickListener()})}bindOutsideClickListener(){this.isHorizontal()&&(this.outsideClickListener=this.renderer.listen(document,"click",o=>{this.menuProfileActive()&&!(this.el.nativeElement.isSameNode(o.target)||this.el.nativeElement.contains(o.target))&&this.layoutService.layoutState.update(i=>B(S({},i),{menuProfileActive:!1}))}))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}ngOnDestroy(){this.subscription.unsubscribe(),this.unbindOutsideClickListener()}toggleMenu(o){o.stopPropagation(),this.layoutService.onMenuProfileToggle()}toggleConfigSidebar(){let o=this.layoutService.layoutState();this.layoutService.isSidebarActive()&&(o.overlayMenuActive=!1,o.overlaySubmenuActive=!1,o.staticMenuMobileActive=!1,o.menuHoverActive=!1,o.configSidebarVisible=!1),o.configSidebarVisible=!o.configSidebarVisible,this.layoutService.layoutState.set(S({},o))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["","app-menu-profile",""]],hostAttrs:[1,"layout-menu-profile"],attrs:xs,decls:9,vars:6,consts:[["pTooltip","Profile",1,"cursor-pointer","flex","items-center",3,"click","tooltipDisabled"],["src","images/user.jpg","alt","avatar","width","25",1,"rounded-sm"],[1,"text-start"],[1,"layout-menu-profile-toggler","ph-thin",3,"ngClass"],[3,"pTooltip","tooltipDisabled"],[1,"cursor-pointer",3,"click"],[1,"ph-thin","ph-faders"],[1,"cursor-pointer"],[1,"ph-thin","ph-user-rectangle"],[1,"ph-thin","ph-power"]],template:function(e,i){e&1&&(l(0,"button",0),y("click",function(r){return i.toggleMenu(r)}),m(1,"img",1),l(2,"span",2)(3,"strong"),h(4,"Pablo Aguilar"),d(),l(5,"small"),h(6,"Software Developer"),d()(),m(7,"i",3),d(),T(8,Is,22,22,"ul")),e&2&&(c("tooltipDisabled",i.isTooltipDisabled()),s(7),c("ngClass",zt(3,ws,!i.menuProfileActive()&&(i.menuProfilePosition()==="start"||i.isHorizontal())||i.menuProfileActive()&&i.menuProfilePosition()==="end"&&!i.isHorizontal(),i.menuProfileActive()&&(i.menuProfilePosition()==="start"||i.isHorizontal())||!i.menuProfileActive()&&i.menuProfilePosition()==="end"&&!i.isHorizontal())),s(),E(i.menuProfileActive()?8:-1))},dependencies:[A,xe,oe,Me,We,ne,J,X],encapsulation:2,data:{animation:[Ct("menu",[De("void => inline",[W({height:0}),Pe("400ms cubic-bezier(0.86, 0, 0.07, 1)",W({opacity:1,height:"*"}))]),De("inline => void",[Pe("400ms cubic-bezier(0.86, 0, 0.07, 1)",W({opacity:0,height:"0"}))]),De("void => overlay",[W({opacity:0,transform:"scaleY(0.8)"}),Pe(".12s cubic-bezier(0, 0, 0.2, 1)")]),De("overlay => void",[Pe(".1s linear",W({opacity:0}))])])]}})};var Ss=["menuProfileStart"],Ms=["menuProfileEnd"],ks=["menuContainer"],Ts=["app-sidebar",""];function Es(t,o){t&1&&m(0,"div",11,1)}function As(t,o){t&1&&m(0,"div",11,2)}var Dt=class t{el=_(Re);layoutService=_(le);appMenu;menuProfileStart;menuProfileEnd;menuContainer;overlayMenuActive=j(()=>this.layoutService.layoutState().overlayMenuActive);menuProfilePosition=j(()=>this.layoutService.layoutConfig().menuProfilePosition);anchored=j(()=>this.layoutService.layoutState().anchored);timeout;resetOverlay(){this.overlayMenuActive()&&this.layoutService.layoutState.update(o=>B(S({},o),{overlayMenuActive:!1}))}onMouseEnter(){this.anchored()||(this.timeout&&(clearTimeout(this.timeout),this.timeout=null),this.layoutService.layoutState.update(o=>B(S({},o),{sidebarActive:!0})))}onMouseLeave(){this.anchored()||this.timeout||(this.timeout=setTimeout(()=>this.layoutService.layoutState.update(o=>B(S({},o),{sidebarActive:!1})),300))}anchor(){this.layoutService.layoutState.update(o=>B(S({},o),{anchored:!o.anchored}))}ngOnDestroy(){this.resetOverlay()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["","app-sidebar",""]],viewQuery:function(e,i){if(e&1&&ae(Pt,5)(Ss,5)(Ms,5)(ks,5),e&2){let n;M(n=k())&&(i.appMenu=n.first),M(n=k())&&(i.menuProfileStart=n.first),M(n=k())&&(i.menuProfileEnd=n.first),M(n=k())&&(i.menuContainer=n.first)}},attrs:Ts,decls:17,vars:10,consts:[["menuContainer",""],["menuProfileStart",""],["menuProfileEnd",""],[1,"layout-sidebar",3,"mouseenter","mouseleave"],[1,"layout-sidebar-top"],["href","/"],[1,"layout-sidebar-logo"],[1,"ph-duotone","ph-chalkboard-simple","logo-icon"],[1,"font-black","whitespace-nowrap"],[1,"layout-sidebar-logo-slim"],["size","small","tooltipPosition","right",1,"layout-sidebar-anchor",3,"onClick","icon","text","rounded","pTooltip"],["app-menu-profile",""],[1,"layout-menu-container"],["app-menu",""]],template:function(e,i){if(e&1){let n=P();l(0,"div",3),y("mouseenter",function(){return f(n),g(i.onMouseEnter())})("mouseleave",function(){return f(n),g(i.onMouseLeave())}),l(1,"div",4)(2,"a",5)(3,"div",6),m(4,"i",7),l(5,"span",8),h(6,"PM SYSTEMS"),d()(),l(7,"div",9),m(8,"i",7),d()(),l(9,"p-button",10),b(10,"translate"),b(11,"translate"),y("onClick",function(){return f(n),g(i.anchor())}),d()(),T(12,Es,2,0,"div",11),l(13,"div",12,0),m(15,"div",13),d(),T(16,As,2,0,"div",11),d()}e&2&&(s(9),c("icon",i.anchored()?"ph-fill ph-push-pin-simple":"ph ph-push-pin-simple")("text",!0)("rounded",!0)("pTooltip",i.anchored()?v(10,6,"actions.unpin"):v(11,8,"actions.pin")),s(3),E(i.menuProfilePosition()==="start"?12:-1),s(4),E(i.menuProfilePosition()==="end"?16:-1))},dependencies:[ci,Pt,A,bt,oe,Me,J,X],encapsulation:2})};var Ps=["app-right-menu",""];function Ds(t,o){}var di=class t{layoutService=_(le);get rightMenuActive(){return this.layoutService.layoutState().rightMenuActive}set rightMenuActive(o){this.layoutService.layoutState.update(e=>B(S({},e),{rightMenuActive:o}))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["","app-right-menu",""]],attrs:Ps,decls:3,vars:1,consts:[["headless",""],["position","right",3,"visibleChange","visible"]],template:function(e,i){if(e&1){let n=P();l(0,"p-drawer",1),Nt("visibleChange",function(a){return f(n),Ht(i.rightMenuActive,a)||(i.rightMenuActive=a),g(a)}),I(1,Ds,0,0,"ng-template",null,0,et),d()}e&2&&Vt("visible",i.rightMenuActive)},dependencies:[ii,kt,gt],encapsulation:2})};var Po=`
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
`;var Ls=["content"],Bs=t=>({$implicit:t});function Os(t,o){if(t&1&&(l(0,"div"),h(1),d()),t&2){let e=p(2);Ve("display",e.value!=null&&e.value!==0?"flex":"none"),s(),sn("",e.value,"",e.unit)}}function Rs(t,o){t&1&&re(0)}function Fs(t,o){if(t&1&&(l(0,"div",2)(1,"div",2),I(2,Os,2,4,"div",3)(3,Rs,1,0,"ng-container",4),d()()),t&2){let e=p();w(e.cn(e.cx("value"),e.valueStyleClass)),Ve("width",e.value+"%")("display","flex")("background",e.color),c("pBind",e.ptm("value")),x("data-p",e.dataP),s(),w(e.cx("label")),c("pBind",e.ptm("label")),x("data-p",e.dataP),s(),c("ngIf",e.showValue&&!e.contentTemplate&&!e._contentTemplate),s(),c("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Ce(17,Bs,e.value))}}function Vs(t,o){if(t&1&&m(0,"div",2),t&2){let e=p();w(e.cn(e.cx("value"),e.valueStyleClass)),Ve("background",e.color),c("pBind",e.ptm("value")),x("data-p",e.dataP)}}var Hs={root:({instance:t})=>["p-progressbar p-component",{"p-progressbar-determinate":t.mode=="determinate","p-progressbar-indeterminate":t.mode=="indeterminate"}],value:"p-progressbar-value",label:"p-progressbar-label"},Do=(()=>{class t extends Qe{name="progressbar";style=Po;classes=Hs;static \u0275fac=(()=>{let e;return function(n){return(e||(e=K(t)))(n||t)}})();static \u0275prov=be({token:t,factory:t.\u0275fac})}return t})();var Lo=new me("PROGRESSBAR_INSTANCE"),$i=(()=>{class t extends Be{componentName="ProgressBar";$pcProgressBar=_(Lo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=_(z,{self:!0});value;showValue=!0;styleClass;valueStyleClass;unit="%";mode="determinate";color;contentTemplate;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=_(Do);templates;_contentTemplate;onAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="content"?this._contentTemplate=e.template:this._contentTemplate=e.template})}get dataP(){return this.cn({determinate:this.mode==="determinate",indeterminate:this.mode==="indeterminate"})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=K(t)))(n||t)}})();static \u0275cmp=C({type:t,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(i,n,r){if(i&1&&Ge(r,Ls,4)(r,Ue,4),i&2){let a;M(a=k())&&(n.contentTemplate=a.first),M(a=k())&&(n.templates=a)}},hostAttrs:["role","progressbar"],hostVars:7,hostBindings:function(i,n){i&2&&(x("aria-valuemin",0)("aria-valuenow",n.value)("aria-valuemax",100)("aria-level",n.value+n.unit)("data-p",n.dataP),w(n.cn(n.cx("root"),n.styleClass)))},inputs:{value:[2,"value","value",he],showValue:[2,"showValue","showValue",R],styleClass:"styleClass",valueStyleClass:"valueStyleClass",unit:"unit",mode:"mode",color:"color"},features:[se([Do,{provide:Lo,useExisting:t},{provide:$e,useExisting:t}]),Fe([z]),q],decls:2,vars:2,consts:[[3,"class","pBind","width","display","background",4,"ngIf"],[3,"class","pBind","background",4,"ngIf"],[3,"pBind"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&I(0,Fs,4,19,"div",0)(1,Vs,1,6,"div",1),i&2&&(c("ngIf",n.mode==="determinate"),s(),c("ngIf",n.mode==="indeterminate"))},dependencies:[A,Ne,ze,Y,z],encapsulation:2,changeDetection:0})}return t})(),Bo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=te({type:t});static \u0275inj=ee({imports:[$i,Y,Y]})}return t})();var zs=()=>({height:"3px"});function $s(t,o){t&1&&(l(0,"div",0),m(1,"p-progressBar",1),d()),t&2&&(s(),ue(st(2,zs)))}var pi=class t{progressBarService=_(bn);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-progress-bar"]],decls:1,vars:1,consts:[[1,"app-progress-bar"],["mode","indeterminate"]],template:function(e,i){e&1&&T(0,$s,2,3,"div",0),e&2&&E(i.progressBarService.isLoading()?0:-1)},dependencies:[A,Bo,$i],encapsulation:2})};var mi=class t{constructor(o,e,i){this.layoutService=o;this.renderer=e;this.router=i;this.overlayMenuOpenSubscription=this.layoutService.overlayOpen$.subscribe(()=>{this.menuOutsideClickListener||(this.menuOutsideClickListener=this.renderer.listen("document","click",n=>{!(this.appSidebar.appMenu.el.nativeElement.isSameNode(n.target)||this.appSidebar.appMenu.el.nativeElement.contains(n.target)||this.appTopbar.menuButton.nativeElement.isSameNode(n.target)||this.appTopbar.menuButton.nativeElement.contains(n.target))&&this.hideMenu()})),(this.layoutService.isSlim()||this.layoutService.isSlimPlus())&&!this.menuScrollListener&&(this.menuScrollListener=this.renderer.listen(this.appSidebar.appMenu.menuContainer.nativeElement,"scroll",()=>{this.layoutService.isDesktop()&&this.hideMenu()})),this.layoutService.layoutState().staticMenuMobileActive&&this.blockBodyScroll()}),this.router.events.pipe(it(n=>n instanceof dt)).subscribe(()=>{this.hideMenu()})}overlayMenuOpenSubscription;menuOutsideClickListener;menuScrollListener;appSidebar;appTopbar;blockBodyScroll(){document.body.classList?document.body.classList.add("blocked-scroll"):document.body.className+=" blocked-scroll"}unblockBodyScroll(){document.body.classList?document.body.classList.remove("blocked-scroll"):document.body.className=document.body.className.replace(new RegExp("(^|\\b)"+"blocked-scroll".split(" ").join("|")+"(\\b|$)","gi")," ")}hideMenu(){this.layoutService.layoutState.update(o=>B(S({},o),{overlayMenuActive:!1,staticMenuMobileActive:!1,menuHoverActive:!1})),this.layoutService.reset(),this.menuOutsideClickListener&&(this.menuOutsideClickListener(),this.menuOutsideClickListener=null),this.menuScrollListener&&(this.menuScrollListener(),this.menuScrollListener=null),this.unblockBodyScroll()}containerClass=j(()=>{let o=this.layoutService.layoutConfig(),e=this.layoutService.layoutState();return{"layout-overlay":o.menuMode==="overlay","layout-static":o.menuMode==="static","layout-slim":o.menuMode==="slim","layout-slim-plus":o.menuMode==="slim-plus","layout-horizontal":o.menuMode==="horizontal","layout-reveal":o.menuMode==="reveal","layout-drawer":o.menuMode==="drawer","layout-sidebar-dark":o.darkTheme,"layout-static-inactive":e.staticMenuDesktopInactive&&o.menuMode==="static","layout-overlay-active":e.overlayMenuActive,"layout-mobile-active":e.staticMenuMobileActive,"layout-topbar-menu-active":e.topbarMenuActive,"layout-menu-profile-active":e.rightMenuActive,"layout-sidebar-active":e.sidebarActive,"layout-sidebar-anchored":e.anchored,[`layout-topbar-${o.topbarTheme}`]:!0,[`layout-menu-${o.menuTheme}`]:!0,[`layout-menu-profile-${o.menuProfilePosition}`]:!0}});ngOnDestroy(){this.overlayMenuOpenSubscription&&this.overlayMenuOpenSubscription.unsubscribe(),this.menuOutsideClickListener&&this.menuOutsideClickListener()}static \u0275fac=function(e){return new(e||t)(G(le),G(rt),G(we))};static \u0275cmp=C({type:t,selectors:[["app-layout"]],viewQuery:function(e,i){if(e&1&&ae(Dt,5)(Mt,5),e&2){let n;M(n=k())&&(i.appSidebar=n.first),M(n=k())&&(i.appTopbar=n.first)}},decls:10,vars:1,consts:[[1,"layout-container",3,"ngClass"],["app-topbar",""],["app-right-menu",""],["app-sidebar",""],[1,"layout-content-wrapper"],["app-breadcrumb",""],[1,"layout-content"]],template:function(e,i){e&1&&(l(0,"div",0),m(1,"div",1)(2,"div",2)(3,"div",3),l(4,"div",4),m(5,"div",5),l(6,"div",6),m(7,"app-progress-bar")(8,"router-outlet"),d()()(),m(9,"app-preferences")),e&2&&c("ngClass",i.containerClass())},dependencies:[A,xe,Mt,Dt,ne,Kt,ai,si,di,pi],encapsulation:2})};var ui=class t{constructor(o,e){this.router=o;this.location=e}errorMessage=ve({});ngOnInit(){let e=this.router.currentNavigation()?.extras?.state||this.location.getState();if(e&&typeof e=="object"&&"error"in e){let i=e.error;this.errorMessage.set({title:i.title,description:i.description,code:i.code,status:i.status,statusText:i.statusText,message:i.message,url:i.url,timestamp:i.timestamp,icon:"ph-duotone ph-warning-circle",size:"xl"})}}static \u0275fac=function(e){return new(e||t)(G(we),G($t))};static \u0275cmp=C({type:t,selectors:[["error-page"]],decls:3,vars:1,consts:[[1,"card"],[1,"full-screen"],[3,"message"]],template:function(e,i){e&1&&(l(0,"div",0)(1,"div",1),m(2,"app-messages",2),d()()),e&2&&(s(2),c("message",i.errorMessage()))},dependencies:[Un],encapsulation:2})};var Oo=()=>{let t=_(we);return t.currentNavigation()?.extras?.state?.error?!0:(t.navigate(["/"]),!1)};var Ro=[{path:"",component:mi,children:[{path:"analytics",loadChildren:()=>import("./chunk-CV6PHFWP.js").then(t=>t.default)},{path:"users",data:{breadcrumb:"user.plural.label"},loadChildren:()=>import("./chunk-F75G4AFF.js").then(t=>t.default)},{path:"error",component:ui,canActivate:[Oo]},{path:"",redirectTo:"analytics",pathMatch:"full"}]},{path:"**",redirectTo:"analytics"}];var Fo=_n(Ro,xn(),yn({anchorScrolling:"enabled",scrollPositionRestoration:"enabled"}),Cn());var Vo=[kn({theme:{preset:zn,options:{darkModeSelector:".app-dark"}}}),Qt];var ji=new me("TRANSLATE_HTTP_LOADER_CONFIG"),js=(()=>{class t{http;config;constructor(){this.config=S({prefix:"/assets/i18n/",suffix:".json",enforceLoading:!1,useHttpBackend:!1},_(ji)),this.http=this.config.useHttpBackend?new qt(_(Si)):_(qt)}getTranslation(e){let i=this.config.enforceLoading?`?enforceLoading=${Date.now()}`:"";return this.http.get(`${this.config.prefix}${e}${this.config.suffix}${i}`)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=be({token:t,factory:t.\u0275fac})}return t})();function Ho(t={}){let o=t.useHttpBackend??!1;return[{provide:ji,useValue:t},{provide:Hn,useClass:js,deps:[o?Si:qt,ji]}]}function No(){document.querySelectorAll("[title]").forEach(t=>{let o=t.getAttribute("title");o&&o.includes(".")&&t.removeAttribute("title")})}function qs(){_(rn).isStable.subscribe(o=>{o&&(No(),new MutationObserver(i=>{i.some(r=>r.type==="attributes"&&r.attributeName==="title")&&No()}).observe(document.body,{attributes:!0,attributeFilter:["title"],subtree:!0,childList:!1,characterData:!1}))})}var zo=[Nn({loader:Ho({prefix:Fn}),fallbackLang:"es",lang:"es"}),on(qs)];function Ks(t){let o=t,e=Math.floor(Math.abs(t)),i=t.toString().replace(/^[^.]*\.?/,"").length,n=parseInt(t.toString().replace(/^[^e]*(e([-+]?\d+))?/,"$2"))||0;return o===1?1:n===0&&e!==0&&e%1e6===0&&i===0||!(n>=0&&n<=5)?4:5}var $o=["es",[["a.\u202Fm.","p.\u202Fm."],void 0,["a.\xA0m.","p.\xA0m."]],void 0,[["D","L","M","X","J","V","S"],["dom","lun","mar","mi\xE9","jue","vie","s\xE1b"],["domingo","lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado"],["DO","LU","MA","MI","JU","VI","SA"]],void 0,[["E","F","M","A","M","J","J","A","S","O","N","D"],["ene","feb","mar","abr","may","jun","jul","ago","sept","oct","nov","dic"],["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]],void 0,[["a. C.","d. C."],void 0,["antes de Cristo","despu\xE9s de Cristo"]],1,[6,0],["d/M/yy","d MMM y","d 'de' MMMM 'de' y","EEEE, d 'de' MMMM 'de' y"],["H:mm","H:mm:ss","H:mm:ss z","H:mm:ss (zzzz)"],["{1}, {0}",void 0,void 0,void 0],[",",".",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"EUR","\u20AC","euro",{AUD:[void 0,"$"],BRL:[void 0,"R$"],BYN:[void 0,"\u0440."],CAD:[void 0,"$"],CNY:[void 0,"\xA5"],EGP:[void 0,"EGP"],ESP:["\u20A7"],GBP:[void 0,"\xA3"],HKD:[void 0,"$"],ILS:[void 0,"\u20AA"],INR:[void 0,"\u20B9"],JPY:[void 0,"\xA5"],KRW:[void 0,"\u20A9"],MXN:[void 0,"$"],NZD:[void 0,"$"],PHP:[void 0,"\u20B1"],RON:[void 0,"L"],THB:["\u0E3F"],TWD:[void 0,"NT$"],USD:["US$","$"],XAF:[],XCD:[void 0,"$"],XOF:[]},"ltr",Ks];function Gs(t){let o=t,e=Math.floor(Math.abs(t)),i=t.toString().replace(/^[^.]*\.?/,"").length;return e===1&&i===0?1:5}var jo=["en",[["a","p"],["AM","PM"]],[["AM","PM"]],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],void 0,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],void 0,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm\u202Fa","h:mm:ss\u202Fa","h:mm:ss\u202Fa z","h:mm:ss\u202Fa zzzz"],["{1}, {0}",void 0,void 0,void 0],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",Gs];wi($o,"es");wi(jo,"en");var qo=[];var Ko={providers:[Yi(),hn(gn(),Yn),Zn(),Fo,Vo,zo,qo]};var Go=`
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
`;var Qs=(t,o)=>({$implicit:t,closeFn:o}),Us=t=>({$implicit:t});function Zs(t,o){t&1&&re(0)}function Ws(t,o){if(t&1&&I(0,Zs,1,0,"ng-container",3),t&2){let e=p();c("ngTemplateOutlet",e.headlessTemplate)("ngTemplateOutletContext",zt(2,Qs,e.message,e.onCloseIconClick))}}function Ys(t,o){if(t&1&&m(0,"span",4),t&2){let e=p(3);w(e.cn(e.cx("messageIcon"),e.message==null?null:e.message.icon)),c("pBind",e.ptm("messageIcon"))}}function Xs(t,o){if(t&1&&(H(),m(0,"svg",11)),t&2){let e=p(4);w(e.cx("messageIcon")),c("pBind",e.ptm("messageIcon")),x("aria-hidden",!0)}}function Js(t,o){if(t&1&&(H(),m(0,"svg",12)),t&2){let e=p(4);w(e.cx("messageIcon")),c("pBind",e.ptm("messageIcon")),x("aria-hidden",!0)}}function el(t,o){if(t&1&&(H(),m(0,"svg",13)),t&2){let e=p(4);w(e.cx("messageIcon")),c("pBind",e.ptm("messageIcon")),x("aria-hidden",!0)}}function tl(t,o){if(t&1&&(H(),m(0,"svg",14)),t&2){let e=p(4);w(e.cx("messageIcon")),c("pBind",e.ptm("messageIcon")),x("aria-hidden",!0)}}function il(t,o){if(t&1&&(H(),m(0,"svg",12)),t&2){let e=p(4);w(e.cx("messageIcon")),c("pBind",e.ptm("messageIcon")),x("aria-hidden",!0)}}function nl(t,o){if(t&1&&T(0,Xs,1,4,":svg:svg",7)(1,Js,1,4,":svg:svg",8)(2,el,1,4,":svg:svg",9)(3,tl,1,4,":svg:svg",10)(4,il,1,4,":svg:svg",8),t&2){let e,i=p(3);E((e=i.message.severity)==="success"?0:e==="info"?1:e==="error"?2:e==="warn"?3:4)}}function ol(t,o){if(t&1&&(_e(0),T(1,Ys,1,3,"span",2)(2,nl,5,1),l(3,"div",6)(4,"div",6),h(5),d(),l(6,"div",6),h(7),d()(),ye()),t&2){let e=p(2);s(),E(e.message.icon?1:2),s(2),c("pBind",e.ptm("messageText"))("ngClass",e.cx("messageText")),x("data-p",e.dataP),s(),c("pBind",e.ptm("summary"))("ngClass",e.cx("summary")),x("data-p",e.dataP),s(),V(" ",e.message.summary," "),s(),c("pBind",e.ptm("detail"))("ngClass",e.cx("detail")),x("data-p",e.dataP),s(),L(e.message.detail)}}function rl(t,o){t&1&&re(0)}function al(t,o){if(t&1&&m(0,"span",4),t&2){let e=p(4);w(e.cn(e.cx("closeIcon"),e.message==null?null:e.message.closeIcon)),c("pBind",e.ptm("closeIcon"))}}function sl(t,o){if(t&1&&I(0,al,1,3,"span",17),t&2){let e=p(3);c("ngIf",e.message.closeIcon)}}function ll(t,o){if(t&1&&(H(),m(0,"svg",18)),t&2){let e=p(3);w(e.cx("closeIcon")),c("pBind",e.ptm("closeIcon")),x("aria-hidden",!0)}}function cl(t,o){if(t&1){let e=P();l(0,"div")(1,"button",15),y("click",function(n){f(e);let r=p(2);return g(r.onCloseIconClick(n))})("keydown.enter",function(n){f(e);let r=p(2);return g(r.onCloseIconClick(n))}),T(2,sl,1,1,"span",2)(3,ll,1,4,":svg:svg",16),d()()}if(t&2){let e=p(2);s(),c("pBind",e.ptm("closeButton")),x("class",e.cx("closeButton"))("aria-label",e.closeAriaLabel)("data-p",e.dataP),s(),E(e.message.closeIcon?2:3)}}function dl(t,o){if(t&1&&(l(0,"div",4),I(1,ol,8,12,"ng-container",5)(2,rl,1,0,"ng-container",3),T(3,cl,4,5,"div"),d()),t&2){let e=p();w(e.cn(e.cx("messageContent"),e.message==null?null:e.message.contentStyleClass)),c("pBind",e.ptm("messageContent")),s(),c("ngIf",!e.template),s(),c("ngTemplateOutlet",e.template)("ngTemplateOutletContext",Ce(7,Us,e.message)),s(),E((e.message==null?null:e.message.closable)!==!1?3:-1)}}var pl=["message"],ml=["headless"];function ul(t,o){if(t&1){let e=P();l(0,"p-toastItem",1),y("onClose",function(n){f(e);let r=p();return g(r.onMessageClose(n))})("onAnimationEnd",function(){f(e);let n=p();return g(n.onAnimationEnd())})("onAnimationStart",function(){f(e);let n=p();return g(n.onAnimationStart())}),d()}if(t&2){let e=o.$implicit,i=o.index,n=p();c("message",e)("index",i)("life",n.life)("clearAll",n.clearAllTrigger())("template",n.template||n._template)("headlessTemplate",n.headlessTemplate||n._headlessTemplate)("pt",n.pt)("unstyled",n.unstyled())("motionOptions",n.computedMotionOptions())}}var hl={root:({instance:t})=>{let{_position:o}=t;return{position:"fixed",top:o==="top-right"||o==="top-left"||o==="top-center"?"20px":o==="center"?"50%":null,right:(o==="top-right"||o==="bottom-right")&&"20px",bottom:(o==="bottom-left"||o==="bottom-right"||o==="bottom-center")&&"20px",left:o==="top-left"||o==="bottom-left"?"20px":o==="center"||o==="top-center"||o==="bottom-center"?"50%":null}}},fl={root:({instance:t})=>["p-toast p-component",`p-toast-${t._position}`],message:({instance:t})=>({"p-toast-message":!0,"p-toast-message-info":t.message.severity==="info"||t.message.severity===void 0,"p-toast-message-warn":t.message.severity==="warn","p-toast-message-error":t.message.severity==="error","p-toast-message-success":t.message.severity==="success","p-toast-message-secondary":t.message.severity==="secondary","p-toast-message-contrast":t.message.severity==="contrast"}),messageContent:"p-toast-message-content",messageIcon:({instance:t})=>({"p-toast-message-icon":!0,[`pi ${t.message.icon}`]:!!t.message.icon}),messageText:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-close-button",closeIcon:({instance:t})=>({"p-toast-close-icon":!0,[`pi ${t.message.closeIcon}`]:!!t.message.closeIcon})},hi=(()=>{class t extends Qe{name="toast";style=Go;classes=fl;inlineStyles=hl;static \u0275fac=(()=>{let e;return function(n){return(e||(e=K(t)))(n||t)}})();static \u0275prov=be({token:t,factory:t.\u0275fac})}return t})();var Qo=new me("TOAST_INSTANCE"),gl=(()=>{class t extends Be{zone;message;index;life;template;headlessTemplate;showTransformOptions;hideTransformOptions;showTransitionOptions;hideTransitionOptions;motionOptions=He();clearAll=He(null);onAnimationStart=xi();onAnimationEnd=xi();onBeforeEnter(e){this.onAnimationStart.emit(e.element)}onAfterLeave(e){!this.visible()&&!this.isDestroyed&&(this.onClose.emit({index:this.index,message:this.message}),this.isDestroyed||this.onAnimationEnd.emit(e.element))}onClose=new $;_componentStyle=_(hi);timeout;visible=ve(void 0);isDestroyed=!1;isClosing=!1;constructor(e){super(),this.zone=e,ot(()=>{this.clearAll()&&this.visible.set(!1)})}onAfterViewInit(){this.message?.sticky&&this.visible.set(!0),this.initTimeout()}initTimeout(){this.message?.sticky||(this.clearTimeout(),this.zone.runOutsideAngular(()=>{this.visible.set(!0),this.timeout=setTimeout(()=>{this.visible.set(!1)},this.message?.life||this.life||3e3)}))}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.isClosing||this.initTimeout()}onCloseIconClick=e=>{this.isClosing=!0,this.clearTimeout(),this.visible.set(!1),e.preventDefault()};get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}onDestroy(){this.isDestroyed=!0,this.clearTimeout(),this.visible.set(!1)}get dataP(){return this.cn({[this.message?.severity]:this.message?.severity})}static \u0275fac=function(i){return new(i||t)(G(nt))};static \u0275cmp=C({type:t,selectors:[["p-toastItem"]],inputs:{message:"message",index:[2,"index","index",he],life:[2,"life","life",he],template:"template",headlessTemplate:"headlessTemplate",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",motionOptions:[1,"motionOptions"],clearAll:[1,"clearAll"]},outputs:{onAnimationStart:"onAnimationStart",onAnimationEnd:"onAnimationEnd",onClose:"onClose"},features:[se([hi]),q],decls:4,vars:10,consts:[["container",""],["role","alert","aria-live","assertive","aria-atomic","true",3,"pMotionOnBeforeEnter","pMotionOnAfterLeave","mouseenter","mouseleave","pMotion","pMotionAppear","pMotionName","pMotionOptions","pBind"],[3,"pBind","class"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],[4,"ngIf"],[3,"pBind","ngClass"],["data-p-icon","check",3,"pBind","class"],["data-p-icon","info-circle",3,"pBind","class"],["data-p-icon","times-circle",3,"pBind","class"],["data-p-icon","exclamation-triangle",3,"pBind","class"],["data-p-icon","check",3,"pBind"],["data-p-icon","info-circle",3,"pBind"],["data-p-icon","times-circle",3,"pBind"],["data-p-icon","exclamation-triangle",3,"pBind"],["type","button","autofocus","",3,"click","keydown.enter","pBind"],["data-p-icon","times",3,"pBind","class"],[3,"pBind","class",4,"ngIf"],["data-p-icon","times",3,"pBind"]],template:function(i,n){if(i&1){let r=P();l(0,"div",1,0),y("pMotionOnBeforeEnter",function(u){return f(r),g(n.onBeforeEnter(u))})("pMotionOnAfterLeave",function(u){return f(r),g(n.onAfterLeave(u))})("mouseenter",function(){return f(r),g(n.onMouseEnter())})("mouseleave",function(){return f(r),g(n.onMouseLeave())}),T(2,Ws,1,5,"ng-container")(3,dl,4,9,"div",2),d()}i&2&&(w(n.cn(n.cx("message"),n.message==null?null:n.message.styleClass)),c("pMotion",n.visible())("pMotionAppear",!0)("pMotionName","p-toast-message")("pMotionOptions",n.motionOptions())("pBind",n.ptm("message")),x("id",n.message==null?null:n.message.id)("data-p",n.dataP),s(2),E(n.headlessTemplate?2:3))},dependencies:[A,xe,Ne,ze,On,to,io,Wt,no,Y,z,Jt,Xt],encapsulation:2,changeDetection:0})}return t})(),Uo=(()=>{class t extends Be{componentName="Toast";$pcToast=_(Qo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=_(z,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}key;autoZIndex=!0;baseZIndex=0;life=3e3;styleClass;get position(){return this._position}set position(e){this._position=e,this.cd.markForCheck()}preventOpenDuplicates=!1;preventDuplicates=!1;showTransformOptions="translateY(100%)";hideTransformOptions="translateY(-100%)";showTransitionOptions="300ms ease-out";hideTransitionOptions="250ms ease-in";motionOptions=He(void 0);computedMotionOptions=j(()=>S(S({},this.ptm("motion")),this.motionOptions()));breakpoints;onClose=new $;template;headlessTemplate;messageSubscription;clearSubscription;messages;messagesArchieve;_position="top-right";messageService=_(Qt);_componentStyle=_(hi);styleElement;id=Le("pn_id_");templates;clearAllTrigger=ve(null);constructor(){super()}onInit(){this.messageSubscription=this.messageService.messageObserver.subscribe(e=>{if(e)if(Array.isArray(e)){let i=e.filter(n=>this.canAdd(n));this.add(i)}else this.canAdd(e)&&this.add([e])}),this.clearSubscription=this.messageService.clearObserver.subscribe(e=>{e?this.key===e&&this.clearAll():this.clearAll(),this.cd.markForCheck()})}clearAll(){this.clearAllTrigger.set({})}_template;_headlessTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"message":this._template=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._template=e.template;break}})}onAfterViewInit(){this.breakpoints&&this.createStyle()}add(e){this.messages=this.messages?[...this.messages,...e]:[...e],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...e]:[...e]),this.cd.markForCheck()}canAdd(e){let i=this.key===e.key;return i&&this.preventOpenDuplicates&&(i=!this.containsMessage(this.messages,e)),i&&this.preventDuplicates&&(i=!this.containsMessage(this.messagesArchieve,e)),i}containsMessage(e,i){return e?e.find(n=>n.summary===i.summary&&n.detail==i.detail&&n.severity===i.severity)!=null:!1}onMessageClose(e){this.messages?.splice(e.index,1),this.onClose.emit({message:e.message}),this.onAnimationEnd(),this.cd.detectChanges()}onAnimationStart(){this.renderer.setAttribute(this.el?.nativeElement,this.id,""),this.autoZIndex&&this.el?.nativeElement.style.zIndex===""&&Se.set("modal",this.el?.nativeElement,this.baseZIndex||this.config.zIndex.modal)}onAnimationEnd(){this.autoZIndex&&ht(this.messages)&&Se.clear(this.el?.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",ut(this.styleElement,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.styleElement);let e="";for(let i in this.breakpoints){let n="";for(let r in this.breakpoints[i])n+=r+":"+this.breakpoints[i][r]+" !important;";e+=`
                    @media screen and (max-width: ${i}) {
                        .p-toast[${this.id}] {
                           ${n}
                        }
                    }
                `}this.renderer.setProperty(this.styleElement,"innerHTML",e),ut(this.styleElement,"nonce",this.config?.csp()?.nonce)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}onDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.el&&this.autoZIndex&&Se.clear(this.el.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle()}get dataP(){return this.cn({[this.position]:this.position})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["p-toast"]],contentQueries:function(i,n,r){if(i&1&&Ge(r,pl,5)(r,ml,5)(r,Ue,4),i&2){let a;M(a=k())&&(n.template=a.first),M(a=k())&&(n.headlessTemplate=a.first),M(a=k())&&(n.templates=a)}},hostVars:5,hostBindings:function(i,n){i&2&&(x("data-p",n.dataP),ue(n.sx("root")),w(n.cn(n.cx("root"),n.styleClass)))},inputs:{key:"key",autoZIndex:[2,"autoZIndex","autoZIndex",R],baseZIndex:[2,"baseZIndex","baseZIndex",he],life:[2,"life","life",he],styleClass:"styleClass",position:"position",preventOpenDuplicates:[2,"preventOpenDuplicates","preventOpenDuplicates",R],preventDuplicates:[2,"preventDuplicates","preventDuplicates",R],showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",motionOptions:[1,"motionOptions"],breakpoints:"breakpoints"},outputs:{onClose:"onClose"},features:[se([hi,{provide:Qo,useExisting:t},{provide:$e,useExisting:t}]),Fe([z]),q],decls:1,vars:1,consts:[[3,"message","index","life","clearAll","template","headlessTemplate","pt","unstyled","motionOptions","onClose","onAnimationEnd","onAnimationStart",4,"ngFor","ngForOf"],[3,"onClose","onAnimationEnd","onAnimationStart","message","index","life","clearAll","template","headlessTemplate","pt","unstyled","motionOptions"]],template:function(i,n){i&1&&I(0,ul,1,9,"p-toastItem",0),i&2&&c("ngForOf",n.messages)},dependencies:[A,jt,gl,Y],encapsulation:2,changeDetection:0})}return t})();var fi=class t{breakpoints={"920px":{width:"90%",right:"auto",left:"5%"}};static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-root"]],decls:2,vars:1,consts:[["position","bottom-right",3,"breakpoints"]],template:function(e,i){e&1&&m(0,"router-outlet")(1,"p-toast",0),e&2&&(s(),c("breakpoints",i.breakpoints))},dependencies:[Kt,Uo],encapsulation:2})};jn();un(fi,Ko).catch(t=>console.error(t));
