import{a as qe,b as Ge,c as it}from"./chunk-CKAS7PN5.js";import"./chunk-Y5JX4CDQ.js";import"./chunk-MQ63V4TA.js";import{$ as ee,Bb as ce,E as ge,Fa as We,Ga as xe,H as $e,Ma as U,P as Ke,Pa as W,Q as Qe,Qa as q,R as Z,Wa as h,X as ye,Xa as B,bb as _e,cb as Je,eb as Xe,fb as Ye,kb as Ze,nb as et,o as oe,q as Y,qa as Te,qb as tt,v as re,wb as nt,xa as Ue,zb as se}from"./chunk-HGRPES34.js";import{$ as D,$b as Ve,Ab as Ae,Bb as Se,Cb as b,Cc as m,Db as r,Eb as d,Fb as u,Gb as V,Gc as w,Hb as R,Ic as He,Jc as ae,Lb as ie,Mb as z,Nb as ke,Pc as E,Q as J,Qa as Ee,Qc as je,R as I,Rb as y,S as Ce,Sa as c,Sb as _,Tb as O,U as A,Ub as H,Vb as Fe,W as l,Wb as Pe,Xb as T,Yb as x,Zb as Le,aa as C,ac as j,ba as he,bc as Re,cc as ze,ec as f,fc as v,gb as p,gc as M,hb as Ie,kb as k,lb as F,ma as S,mb as X,nc as $,pa as Ne,sa as g,tb as N,ua as Me,wb as P,wc as K,xb as L,xc as Q,zc as Oe}from"./chunk-BTMHG5IJ.js";var le=class t{profilePictureControl=new et(null);coverPreviewUrl=S(null);user={fullName:"Pablo Aguilar",role:"Software Developer",location:"San Francisco, CA"};isSmallScreen=window.innerWidth<1024;onResize(){this.isSmallScreen=window.innerWidth<1024}onCoverSelected(o){let e=o.target,i=e.files?.[0];i&&(this.coverPreviewUrl.set(URL.createObjectURL(i)),e.value="")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=p({type:t,selectors:[["account-visuals"]],hostBindings:function(e,i){e&1&&y("resize",function(){return i.onResize()},Ee)},decls:25,vars:15,consts:[["coverInput",""],[1,"card"],[1,"flex","flex-col","gap-4"],[1,"relative","w-full"],["type","file","accept","image/*",1,"hidden",3,"change"],[1,"w-full","h-45","rounded-xl","bg-cover","bg-center","cursor-pointer","group",3,"click"],[1,"w-full","h-full","rounded-xl","flex","items-center","justify-center","opacity-0","group-hover:opacity-100","transition-opacity","bg-black/20"],[1,"ph","ph-camera","text-white","text-4xl"],[1,"absolute","-bottom-12","left-1","lg:left-6"],["shape","round",3,"formControl","size"],[1,"absolute","-bottom-10","right-0","flex","items-center","gap-2"],["icon","ph ph-share-network","severity","secondary","size","small","outlined","",3,"label"],["icon","ph ph-pencil-simple","severity","secondary","size","small","outlined","",3,"label"],[1,"h-8"],[1,"flex","flex-col","gap-1","lg:px-10"],[1,"text-xl","font-bold","text-color"],[1,"text-sm","text-muted-color"],[1,"flex","items-center","gap-1"],[1,"ph","ph-map-pin","text-muted-color","text-sm"],[1,"text-xs","text-muted-color"]],template:function(e,i){if(e&1){let n=z();r(0,"div",1)(1,"div",2)(2,"div",3)(3,"input",4,0),y("change",function(s){return D(n),C(i.onCoverSelected(s))}),d(),r(5,"div",5),y("click",function(){D(n);let s=j(4);return C(s.click())}),r(6,"div",6),u(7,"i",7),d()(),r(8,"div",8),u(9,"form-picture",9),d(),r(10,"div",10),u(11,"p-button",11),K(12,"translate"),u(13,"p-button",12),K(14,"translate"),d()(),u(15,"div",13),r(16,"div",14)(17,"span",15),v(18),d(),r(19,"span",16),v(20),d(),r(21,"div",17),u(22,"i",18),r(23,"span",19),v(24),d()()()()()}e&2&&(c(5),Re("background-image",i.coverPreviewUrl()?"url("+i.coverPreviewUrl()+")":null),ze("bg-primary-100",!i.coverPreviewUrl()),c(4),b("formControl",i.profilePictureControl)("size",i.isSmallScreen?"md":"lg"),c(2),b("label",Q(12,11,"actions.share")),c(2),b("label",Q(14,13,"actions.update")),c(5),M(i.user.fullName),c(2),M(i.user.role),c(4),M(i.user.location))},dependencies:[it,nt,Ze,tt,Ye,Xe,ce,se],encapsulation:2})};var at=`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
        overflow: hidden;
        background: dt('tabs.tablist.background');
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`;var ne=["*"],gt=["previcon"],yt=["nexticon"],mt=["content"],Tt=["prevButton"],xt=["nextButton"],_t=["inkbar"],wt=["tabs"];function Bt(t,o){t&1&&ie(0)}function Dt(t,o){if(t&1&&X(0,Bt,1,0,"ng-container",11),t&2){let e=_(2);b("ngTemplateOutlet",e.prevIconTemplate||e._prevIconTemplate)}}function Ct(t,o){t&1&&(he(),u(0,"svg",10))}function Nt(t,o){if(t&1){let e=z();r(0,"button",9,3),y("click",function(){D(e);let n=_();return C(n.onPrevButtonClick())}),P(2,Dt,1,1,"ng-container")(3,Ct,1,0,":svg:svg",10),d()}if(t&2){let e=_();f(e.cx("prevButton")),b("pBind",e.ptm("prevButton")),N("aria-label",e.prevButtonAriaLabel)("tabindex",e.tabindex())("data-pc-group-section","navigator"),c(2),L(e.prevIconTemplate||e._prevIconTemplate?2:3)}}function Mt(t,o){t&1&&ie(0)}function Et(t,o){if(t&1&&X(0,Mt,1,0,"ng-container",11),t&2){let e=_(2);b("ngTemplateOutlet",e.nextIconTemplate||e._nextIconTemplate)}}function It(t,o){t&1&&(he(),u(0,"svg",12))}function At(t,o){if(t&1){let e=z();r(0,"button",9,4),y("click",function(){D(e);let n=_();return C(n.onNextButtonClick())}),P(2,Et,1,1,"ng-container")(3,It,1,0,":svg:svg",12),d()}if(t&2){let e=_();f(e.cx("nextButton")),b("pBind",e.ptm("nextButton")),N("aria-label",e.nextButtonAriaLabel)("tabindex",e.tabindex())("data-pc-group-section","navigator"),c(2),L(e.nextIconTemplate||e._nextIconTemplate?2:3)}}function St(t,o){t&1&&H(0)}function kt(t,o){t&1&&ie(0)}function Ft(t,o){if(t&1&&X(0,kt,1,0,"ng-container",1),t&2){let e=_(),i=j(1);b("ngTemplateOutlet",e.content()?e.content():i)}}var Pt={root:({instance:t})=>["p-tabs p-component",{"p-tabs-scrollable":t.scrollable()}]},ot=(()=>{class t extends U{name="tabs";style=at;classes=Pt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=g(t)))(n||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var rt=new A("TABS_INSTANCE"),G=(()=>{class t extends q{componentName="Tabs";$pcTabs=l(rt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=l(h,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=ae(void 0);scrollable=w(!1,{transform:E});lazy=w(!1,{transform:E});selectOnFocus=w(!1,{transform:E});showNavigators=w(!0,{transform:E});tabindex=w(0,{transform:je});id=S(Ue("pn_id_"));_componentStyle=l(ot);updateValue(e){this.value.update(()=>e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=g(t)))(n||t)}})();static \u0275cmp=p({type:t,selectors:[["p-tabs"]],hostVars:3,hostBindings:function(i,n){i&2&&(N("id",n.id()),f(n.cx("root")))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[$([ot,{provide:rt,useExisting:t},{provide:W,useExisting:t}]),k([h]),F],ngContentSelectors:ne,decls:1,vars:0,template:function(i,n){i&1&&(O(),H(0))},dependencies:[Y,B],encapsulation:2,changeDetection:0})}return t})(),Lt={root:({instance:t})=>["p-tab",{"p-tab-active":t.active(),"p-disabled":t.disabled()}]},st=(()=>{class t extends U{name="tab";classes=Lt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=g(t)))(n||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var Vt={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},ct=(()=>{class t extends U{name="tablist";classes=Vt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=g(t)))(n||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var lt=new A("TABLIST_INSTANCE"),ue=(()=>{class t extends q{componentName="TabList";$pcTabList=l(lt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=l(h,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=l(J(()=>G));isPrevButtonEnabled=S(!1);isNextButtonEnabled=S(!1);resizeObserver;showNavigators=m(()=>this.pcTabs.showNavigators());tabindex=m(()=>this.pcTabs.tabindex());scrollable=m(()=>this.pcTabs.scrollable());_componentStyle=l(ct);constructor(){super(),Ne(()=>{this.pcTabs.value(),re(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config?.translation?.aria?.previous}get nextButtonAriaLabel(){return this.config?.translation?.aria?.next}onAfterViewInit(){this.showNavigators()&&re(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"previcon":this._prevIconTemplate=e.template;break;case"nexticon":this._nextIconTemplate=e.template;break}})}onDestroy(){this.unbindResizeObserver()}onScroll(e){this.showNavigators()&&this.updateButtonState(),e.preventDefault()}onPrevButtonClick(){let e=this.content.nativeElement,i=ee(e),n=Math.abs(e.scrollLeft)-i,a=n<=0?0:n;e.scrollLeft=ge(e)?-1*a:a}onNextButtonClick(){let e=this.content.nativeElement,i=ee(e)-this.getVisibleButtonWidths(),n=e.scrollLeft+i,a=e.scrollWidth-i,s=n>=a?a:n;e.scrollLeft=ge(e)?-1*s:s}updateButtonState(){let e=this.content?.nativeElement,i=this.el?.nativeElement,{scrollWidth:n,offsetWidth:a}=e,s=Math.abs(e.scrollLeft),ve=ee(e);this.isPrevButtonEnabled.set(s!==0),this.isNextButtonEnabled.set(i.offsetWidth>=a&&Math.abs(s-n+ve)>1)}updateInkBar(){let e=this.content?.nativeElement,i=this.inkbar?.nativeElement,n=this.tabs?.nativeElement,a=Ke(e,'[data-pc-name="tab"][data-p-active="true"]');i&&(i.style.width=$e(a)+"px",i.style.left=ye(a).left-ye(n).left+"px")}getVisibleButtonWidths(){let e=this.prevButton?.nativeElement,i=this.nextButton?.nativeElement;return[e,i].reduce((n,a)=>a?n+ee(a):n,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=p({type:t,selectors:[["p-tablist"]],contentQueries:function(i,n,a){if(i&1&&Fe(a,gt,4)(a,yt,4)(a,We,4),i&2){let s;T(s=x())&&(n.prevIconTemplate=s.first),T(s=x())&&(n.nextIconTemplate=s.first),T(s=x())&&(n.templates=s)}},viewQuery:function(i,n){if(i&1&&Pe(mt,5)(Tt,5)(xt,5)(_t,5)(wt,5),i&2){let a;T(a=x())&&(n.content=a.first),T(a=x())&&(n.prevButton=a.first),T(a=x())&&(n.nextButton=a.first),T(a=x())&&(n.inkbar=a.first),T(a=x())&&(n.tabs=a.first)}},hostVars:2,hostBindings:function(i,n){i&2&&f(n.cx("root"))},features:[$([ct,{provide:lt,useExisting:t},{provide:W,useExisting:t}]),k([h]),F],ngContentSelectors:ne,decls:9,vars:11,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",3,"pBind","class"],[3,"scroll","pBind"],["role","tablist",3,"pBind"],["role","presentation",3,"pBind"],["type","button","pRipple","",3,"click","pBind"],["data-p-icon","chevron-left"],[4,"ngTemplateOutlet"],["data-p-icon","chevron-right"]],template:function(i,n){if(i&1){let a=z();O(),P(0,Nt,4,7,"button",5),r(1,"div",6,0),y("scroll",function(ve){return D(a),C(n.onScroll(ve))}),r(3,"div",7,1),H(5),u(6,"span",8,2),d()(),P(8,At,4,7,"button",5)}i&2&&(L(n.showNavigators()&&n.isPrevButtonEnabled()?0:-1),c(),f(n.cx("content")),b("pBind",n.ptm("content")),c(2),f(n.cx("tabList")),b("pBind",n.ptm("tabList")),c(3),f(n.cx("activeBar")),b("pBind",n.ptm("activeBar")),c(2),L(n.showNavigators()&&n.isNextButtonEnabled()?8:-1))},dependencies:[Y,oe,qe,Ge,Je,_e,xe,B,h],encapsulation:2,changeDetection:0})}return t})(),dt=new A("TAB_INSTANCE"),we=(()=>{class t extends q{componentName="Tab";$pcTab=l(dt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=l(h,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=ae();disabled=w(!1,{transform:E});pcTabs=l(J(()=>G));pcTabList=l(J(()=>ue));el=l(Me);_componentStyle=l(st);ripple=m(()=>this.config.ripple());id=m(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=m(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=m(()=>Te(this.pcTabs.value(),this.value()));tabindex=m(()=>this.disabled()?-1:this.active()?this.pcTabs.tabindex():-1);mutationObserver;onFocus(e){this.disabled()||this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(e){this.disabled()||this.changeActiveValue()}onKeyDown(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break;default:break}e.stopPropagation()}onAfterViewInit(){this.bindMutationObserver()}onArrowRightKey(e){let i=this.findNextTab(e.currentTarget);i?this.changeFocusedTab(e,i):this.onHomeKey(e),e.preventDefault()}onArrowLeftKey(e){let i=this.findPrevTab(e.currentTarget);i?this.changeFocusedTab(e,i):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let i=this.findFirstTab();this.changeFocusedTab(e,i),e.preventDefault()}onEndKey(e){let i=this.findLastTab();this.changeFocusedTab(e,i),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.findLastTab()),e.preventDefault()}onPageUpKey(e){this.scrollInView(this.findFirstTab()),e.preventDefault()}onEnterKey(e){this.disabled()||this.changeActiveValue(),e.preventDefault()}findNextTab(e,i=!1){let n=i?e:e.nextElementSibling;return n?Z(n,"data-p-disabled")||Z(n,"data-pc-section")==="activebar"?this.findNextTab(n):n:null}findPrevTab(e,i=!1){let n=i?e:e.previousElementSibling;return n?Z(n,"data-p-disabled")||Z(n,"data-pc-section")==="activebar"?this.findPrevTab(n):n:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(e,i){Qe(i),this.scrollInView(i)}scrollInView(e){e?.scrollIntoView?.({block:"nearest"})}bindMutationObserver(){re(this.platformId)&&(this.mutationObserver=new MutationObserver(e=>{e.forEach(()=>{this.active()&&this.pcTabList?.updateInkBar()})}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,characterData:!0,subtree:!0}))}unbindMutationObserver(){this.mutationObserver?.disconnect()}onDestroy(){this.mutationObserver&&this.unbindMutationObserver()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=g(t)))(n||t)}})();static \u0275cmp=p({type:t,selectors:[["p-tab"]],hostVars:10,hostBindings:function(i,n){i&1&&y("focus",function(s){return n.onFocus(s)})("click",function(s){return n.onClick(s)})("keydown",function(s){return n.onKeyDown(s)}),i&2&&(N("id",n.id())("aria-controls",n.ariaControls())("role","tab")("aria-selected",n.active())("aria-disabled",n.disabled())("data-p-disabled",n.disabled())("data-p-active",n.active())("tabindex",n.tabindex()),f(n.cx("root")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[$([st,{provide:dt,useExisting:t},{provide:W,useExisting:t}]),k([_e,h]),F],ngContentSelectors:ne,decls:1,vars:0,template:function(i,n){i&1&&(O(),H(0))},dependencies:[Y,xe,B],encapsulation:2,changeDetection:0})}return t})(),Rt={root:({instance:t})=>["p-tabpanel",{"p-tabpanel-active":t.active()}]},ut=(()=>{class t extends U{name="tabpanel";classes=Rt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=g(t)))(n||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var pt=new A("TABPANEL_INSTANCE"),Be=(()=>{class t extends q{componentName="TabPanel";$pcTabPanel=l(pt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=l(h,{self:!0});pcTabs=l(J(()=>G));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}lazy=w(!1,{transform:E});value=ae(void 0);content=He("content");id=m(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=m(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=m(()=>Te(this.pcTabs.value(),this.value()));isLazyEnabled=m(()=>this.pcTabs.lazy()||this.lazy());hasBeenRendered=!1;shouldRender=m(()=>!this.isLazyEnabled()||this.hasBeenRendered?!0:this.active()?(this.hasBeenRendered=!0,!0):!1);_componentStyle=l(ut);static \u0275fac=(()=>{let e;return function(n){return(e||(e=g(t)))(n||t)}})();static \u0275cmp=p({type:t,selectors:[["p-tabpanel"]],contentQueries:function(i,n,a){i&1&&Le(a,n.content,mt,5),i&2&&Ve()},hostVars:7,hostBindings:function(i,n){i&2&&(ke("hidden",!n.active()),N("id",n.id())("role","tabpanel")("aria-labelledby",n.ariaLabelledby())("data-p-active",n.active()),f(n.cx("root")))},inputs:{lazy:[1,"lazy"],value:[1,"value"]},outputs:{value:"valueChange"},features:[$([ut,{provide:pt,useExisting:t},{provide:W,useExisting:t}]),k([h]),F],ngContentSelectors:ne,decls:3,vars:1,consts:[["defaultContent",""],[4,"ngTemplateOutlet"]],template:function(i,n){i&1&&(O(),X(0,St,1,0,"ng-template",null,0,Oe),P(2,Ft,1,1,"ng-container")),i&2&&(c(2),L(n.shouldRender()?2:-1))},dependencies:[oe,B],encapsulation:2,changeDetection:0})}return t})(),zt={root:"p-tabpanels"},bt=(()=>{class t extends U{name="tabpanels";classes=zt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=g(t)))(n||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var ft=new A("TABPANELS_INSTANCE"),De=(()=>{class t extends q{componentName="TabPanels";$pcTabPanels=l(ft,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=l(h,{self:!0});_componentStyle=l(bt);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let e;return function(n){return(e||(e=g(t)))(n||t)}})();static \u0275cmp=p({type:t,selectors:[["p-tabpanels"]],hostVars:3,hostBindings:function(i,n){i&2&&(N("role","presentation"),f(n.cx("root")))},features:[$([bt,{provide:ft,useExisting:t},{provide:W,useExisting:t}]),k([h]),F],ngContentSelectors:ne,decls:1,vars:0,template:function(i,n){i&1&&(O(),H(0))},dependencies:[Y,B],encapsulation:2,changeDetection:0})}return t})(),vt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Ie({type:t});static \u0275inj=Ce({imports:[G,De,Be,ue,we,B,B]})}return t})();var pe=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=p({type:t,selectors:[["account-appearence"]],decls:2,vars:0,template:function(e,i){e&1&&(V(0,"p"),v(1,"account-appearence works!"),R())},encapsulation:2})};var be=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=p({type:t,selectors:[["account-security"]],decls:2,vars:0,template:function(e,i){e&1&&(V(0,"p"),v(1,"account-security works!"),R())},encapsulation:2})};var fe=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=p({type:t,selectors:[["account-basic-information"]],decls:2,vars:0,template:function(e,i){e&1&&(V(0,"p"),v(1,"account-basic-information works!"),R())},encapsulation:2})};var Ht=(t,o)=>o.value;function jt(t,o){if(t&1&&(r(0,"p-tab",5,0)(2,"div",8),u(3,"i"),r(4,"div",9)(5,"span"),v(6),K(7,"translate"),d(),r(8,"span",10),v(9),K(10,"translate"),d()()()()),t&2){let e=o.$implicit,i=j(1);b("value",e.value),c(3),f((i.active()?"ph-duotone":"ph")+" "+e.icon.split(" ")[1]+" text-2xl"),c(2),f(i.active()?"font-bold":"font-normal"),c(),M(Q(7,7,e.title)),c(3),M(Q(10,9,e.description))}}var me=class t{tabs=[{title:"account.label",value:"0",icon:"ph ph-user",description:"account.description"},{title:"appearance.label",value:"1",icon:"ph ph-paint-brush",description:"appearance.description"},{title:"security.label",value:"2",icon:"ph ph-lock",description:"security.description"}];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=p({type:t,selectors:[["account-main"]],decls:16,vars:0,consts:[["tabRef",""],[1,"grid","grid-cols-12","gap-4"],[1,"col-span-12"],[1,"card"],["value","0"],[1,"w-70",3,"value"],["value","1"],["value","2"],[1,"flex","items-center","gap-2"],[1,"flex","flex-col","items-start"],[1,"text-xs","text-muted-color","font-light","whitespace-normal","wrap-break-word"]],template:function(e,i){e&1&&(r(0,"div",1)(1,"div",2),u(2,"account-visuals"),d(),r(3,"div",2)(4,"div",3)(5,"p-tabs",4)(6,"p-tablist"),Ae(7,jt,11,11,"p-tab",5,Ht),d(),r(9,"p-tabpanels")(10,"p-tabpanel",4),u(11,"account-basic-information"),d(),r(12,"p-tabpanel",6),u(13,"account-appearence"),d(),r(14,"p-tabpanel",7),u(15,"account-security"),d()()()()()()),e&2&&(c(7),Se(i.tabs))},dependencies:[vt,G,De,Be,ue,we,ce,le,pe,be,fe,se],encapsulation:2})};var Pn=[{path:"",component:me,data:{breadcrumb:"account.label"}}];export{Pn as default};
