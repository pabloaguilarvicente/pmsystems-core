import{a as Re,c as P,e as oe,f as Pe,g as re,h as $e,j as Ze}from"./chunk-QN4PRIOS.js";import{$a as Ae,G as we,H as Ie,Ia as Ve,Ja as Ne,M as Oe,Ma as te,Na as N,Nb as He,O as Ee,P as Se,R as Me,S as ue,Ta as L,Wa as A,X as he,Xa as Le,b as Ce,bb as u,cb as ze,e as W,fb as ne,g as J,gb as Fe,i as ee,k as Te,ma as H,nb as je,qb as ie,xa as De,ya as Be}from"./chunk-P7H3KCWD.js";import{$ as h,Bb as l,Bc as T,Cb as S,Db as j,Eb as K,Fc as s,Hb as ye,Ib as le,Jb as de,Kb as ce,Lb as U,Oc as g,Pc as _e,Q as ve,Qb as I,R as w,Ra as m,Rb as c,S as z,Sb as ge,Tb as pe,U as M,Ub as q,Vb as G,W as a,Wb as _,Xb as C,_a as ae,a as E,aa as v,ba as F,cc as X,dc as f,fb as D,gb as R,ha as d,hb as Q,ia as me,jb as B,kb as y,lb as x,ma as Z,mc as V,nc as xe,oc as Y,pa as se,qc as ke,sa as b,sb as k,vb as fe,wb as be}from"./chunk-M47FV36Y.js";var at=["data-p-icon","minus"],Qe=(()=>{class t extends Fe{static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275cmp=D({type:t,selectors:[["","data-p-icon","minus"]],features:[y],attrs:at,decls:1,vars:0,consts:[["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(i,n){i&1&&(F(),ye(0,"path",0))},encapsulation:2})}return t})();var Ke=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`;var dt=["icon"],ct=["input"],pt=(t,r,e)=>({checked:t,class:r,dataP:e});function ut(t,r){if(t&1&&K(0,"span",8),t&2){let e=c(3);f(e.cx("icon")),l("ngClass",e.checkboxIcon)("pBind",e.ptm("icon")),k("data-p",e.dataP)}}function ht(t,r){if(t&1&&(F(),K(0,"svg",9)),t&2){let e=c(3);f(e.cx("icon")),l("pBind",e.ptm("icon")),k("data-p",e.dataP)}}function vt(t,r){if(t&1&&(le(0),x(1,ut,1,5,"span",6)(2,ht,1,4,"svg",7),de()),t&2){let e=c(2);m(),l("ngIf",e.checkboxIcon),m(),l("ngIf",!e.checkboxIcon)}}function mt(t,r){if(t&1&&(F(),K(0,"svg",10)),t&2){let e=c(2);f(e.cx("icon")),l("pBind",e.ptm("icon")),k("data-p",e.dataP)}}function ft(t,r){if(t&1&&(le(0),x(1,vt,3,2,"ng-container",3)(2,mt,1,4,"svg",5),de()),t&2){let e=c();m(),l("ngIf",e.checked),m(),l("ngIf",e._indeterminate())}}function bt(t,r){}function yt(t,r){t&1&&x(0,bt,0,0,"ng-template")}var gt=`
    ${Ke}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`,xt={root:({instance:t})=>["p-checkbox p-component",{"p-checkbox-checked p-highlight":t.checked,"p-disabled":t.$disabled(),"p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-checkbox-sm p-inputfield-sm":t.size()==="small","p-checkbox-lg p-inputfield-lg":t.size()==="large"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},Ue=(()=>{class t extends L{name="checkbox";style=gt;classes=xt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})();var qe=new M("CHECKBOX_INSTANCE"),kt={provide:je,useExisting:ve(()=>Xe),multi:!0},Xe=(()=>{class t extends re{componentName="Checkbox";hostName="";value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=s();size=s();onChange=new d;onFocus=new d;onBlur=new d;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:Be(this.value,this.modelValue())}_indeterminate=Z(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=a(Ue);bindDirectiveInstance=a(u,{self:!0});$pcCheckbox=a(qe,{optional:!0,skipSelf:!0})??void 0;$variant=T(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"icon":this._checkboxIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break}})}onChanges(e){e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}updateModel(e){let i,n=this.injector.get(ie,null,{optional:!0,self:!0}),o=n&&!this.formControl?n.value:this.modelValue();this.binary?(i=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(i),this.onModelChange(i)):(this.checked||this._indeterminate()?i=o.filter(p=>!De(p,this.value)):i=o?[...o,this.value]:[this.value],this.onModelChange(i),this.writeModelValue(i),this.formControl&&this.formControl.setValue(i)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:i,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(e,i){i(e),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()==="filled",[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275cmp=D({type:t,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(i,n,o){if(i&1&&q(o,dt,4)(o,te,4),i&2){let p;_(p=C())&&(n.checkboxIconTemplate=p.first),_(p=C())&&(n.templates=p)}},viewQuery:function(i,n){if(i&1&&G(ct,5),i&2){let o;_(o=C())&&(n.inputViewChild=o.first)}},hostVars:6,hostBindings:function(i,n){i&2&&(k("data-p-highlight",n.checked)("data-p-checked",n.checked)("data-p-disabled",n.$disabled())("data-p",n.dataP),f(n.cn(n.cx("root"),n.styleClass)))},inputs:{hostName:"hostName",value:"value",binary:[2,"binary","binary",g],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",_e],inputId:"inputId",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",g],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",g],autofocus:[2,"autofocus","autofocus",g],trueValue:"trueValue",falseValue:"falseValue",variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[V([kt,Ue,{provide:qe,useExisting:t},{provide:A,useExisting:t}]),B([u]),y],decls:5,vars:26,consts:[["input",""],["type","checkbox",3,"focus","blur","change","checked","pBind"],[3,"pBind"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"class","pBind",4,"ngIf"],[3,"class","ngClass","pBind",4,"ngIf"],["data-p-icon","check",3,"class","pBind",4,"ngIf"],[3,"ngClass","pBind"],["data-p-icon","check",3,"pBind"],["data-p-icon","minus",3,"pBind"]],template:function(i,n){if(i&1){let o=U();S(0,"input",1,0),I("focus",function(O){return h(o),v(n.onInputFocus(O))})("blur",function(O){return h(o),v(n.onInputBlur(O))})("change",function(O){return h(o),v(n.handleChange(O))}),j(),S(2,"div",2),x(3,ft,3,2,"ng-container",3)(4,yt,1,0,null,4),j()}i&2&&(X(n.inputStyle),f(n.cn(n.cx("input"),n.inputClass)),l("checked",n.checked)("pBind",n.ptm("input")),k("id",n.inputId)("value",n.value)("name",n.name())("tabindex",n.tabindex)("required",n.required()?"":void 0)("readonly",n.readonly?"":void 0)("disabled",n.$disabled()?"":void 0)("aria-labelledby",n.ariaLabelledBy)("aria-label",n.ariaLabel),m(2),f(n.cx("box")),l("pBind",n.ptm("box")),k("data-p",n.dataP),m(),l("ngIf",!n.checkboxIconTemplate&&!n._checkboxIconTemplate),m(),l("ngTemplateOutlet",n.checkboxIconTemplate||n._checkboxIconTemplate)("ngTemplateOutletContext",ke(22,pt,n.checked,n.cx("icon"),n.dataP)))},dependencies:[ee,Ce,W,J,N,Re,Qe,ze,u],encapsulation:2,changeDetection:0})}return t})(),an=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=R({type:t});static \u0275inj=z({imports:[Xe,N,N]})}return t})();var Ye=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var _t=`
    ${Ye}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,Ct={root:({instance:t})=>["p-inputtext p-component",{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize==="small","p-inputtext-lg":t.pSize==="large","p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-inputtext-fluid":t.hasFluid}]},We=(()=>{class t extends L{name="inputtext";style=_t;classes=Ct;static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})();var Je=new M("INPUTTEXT_INSTANCE"),Tn=(()=>{class t extends Pe{componentName="InputText";hostName="";ptInputText=s();pInputTextPT=s();pInputTextUnstyled=s();bindDirectiveInstance=a(u,{self:!0});$pcInputText=a(Je,{optional:!0,skipSelf:!0})??void 0;ngControl=a(ie,{optional:!0,self:!0});pcFluid=a(ne,{optional:!0,host:!0,skipSelf:!0});pSize;variant=s();fluid=s(void 0,{transform:g});invalid=s(void 0,{transform:g});$variant=T(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=a(We);constructor(){super(),se(()=>{let e=this.ptInputText()||this.pInputTextPT();e&&this.directivePT.set(e)}),se(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()==="filled",[this.pSize]:this.pSize})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=Q({type:t,selectors:[["","pInputText",""]],hostVars:3,hostBindings:function(i,n){i&1&&I("input",function(){return n.onInput()}),i&2&&(k("data-p",n.dataP),f(n.cx("root")))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pInputTextPT:[1,"pInputTextPT"],pInputTextUnstyled:[1,"pInputTextUnstyled"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[V([We,{provide:Je,useExisting:t},{provide:A,useExisting:t}]),B([u]),y]})}return t})(),wn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=R({type:t});static \u0275inj=z({})}return t})();var et=class t{messageService=a(Ve);translateService=a(He);show(r,{title:e,description:i,translate:n=!1,life:o=3e3,sticky:p=!1}){let O=n?this.translateService.instant(e):e,st=n?this.translateService.instant(i):i;this.messageService.add({severity:r,summary:O,detail:st,life:o,sticky:p})}hide(){this.messageService.clear()}success(r){this.show("success",r)}info(r){this.show("info",r)}warn(r){this.show("warn",r)}error(r){this.show("error",r)}contrast(r){this.show("contrast",r)}secondary(r){this.show("secondary",r)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})};var An=(()=>{class t extends re{pcFluid=a(ne,{optional:!0,host:!0,skipSelf:!0});fluid=s(void 0,{transform:g});variant=s();size=s();inputSize=s();pattern=s();min=s();max=s();step=s();minlength=s();maxlength=s();$variant=T(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275dir=Q({type:t,inputs:{fluid:[1,"fluid"],variant:[1,"variant"],size:[1,"size"],inputSize:[1,"inputSize"],pattern:[1,"pattern"],min:[1,"min"],max:[1,"max"],step:[1,"step"],minlength:[1,"minlength"],maxlength:[1,"maxlength"]},features:[y]})}return t})();var tt=["content"],Tt=["overlay"],nt=["*","*"],wt=()=>({mode:null}),rt=t=>({$implicit:t}),It=t=>({mode:t});function Ot(t,r){t&1&&ce(0)}function Et(t,r){if(t&1&&(pe(0),x(1,Ot,1,0,"ng-container",3)),t&2){let e=c();m(),l("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Y(3,rt,xe(2,wt)))}}function St(t,r){t&1&&ce(0)}function Mt(t,r){if(t&1){let e=U();S(0,"div",5,0),I("click",function(){h(e);let n=c(2);return v(n.onOverlayClick())}),S(2,"p-motion",6),I("onBeforeEnter",function(n){h(e);let o=c(2);return v(o.onOverlayBeforeEnter(n))})("onEnter",function(n){h(e);let o=c(2);return v(o.onOverlayEnter(n))})("onAfterEnter",function(n){h(e);let o=c(2);return v(o.onOverlayAfterEnter(n))})("onBeforeLeave",function(n){h(e);let o=c(2);return v(o.onOverlayBeforeLeave(n))})("onLeave",function(n){h(e);let o=c(2);return v(o.onOverlayLeave(n))})("onAfterLeave",function(n){h(e);let o=c(2);return v(o.onOverlayAfterLeave(n))}),S(3,"div",5,1),I("click",function(n){h(e);let o=c(2);return v(o.onOverlayContentClick(n))}),pe(5,1),x(6,St,1,0,"ng-container",3),j()()()}if(t&2){let e=c(2);X(e.sx("root")),f(e.cn(e.cx("root"),e.styleClass)),l("pBind",e.ptm("root")),m(2),l("visible",e.visible)("appear",!0)("options",e.computedMotionOptions()),m(),f(e.cn(e.cx("content"),e.contentStyleClass)),l("pBind",e.ptm("content")),m(3),l("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Y(15,rt,Y(13,It,e.overlayMode)))}}function Dt(t,r){if(t&1&&x(0,Mt,7,17,"div",4),t&2){let e=c();l("ngIf",e.modalVisible)}}var Bt={root:()=>({position:"absolute",top:"0"})},Vt=`
.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
    will-change: transform;
}

/* Github Issue #18560 */
.p-component-overlay.p-component {
    position: relative;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}

.p-overlay-content ~ .p-overlay-content {
    display: none;
}
`,Nt={host:"p-overlay-host",root:({instance:t})=>["p-overlay p-component",{"p-overlay-modal p-overlay-mask p-overlay-mask-enter-active":t.modal,"p-overlay-center":t.modal&&t.overlayResponsiveDirection==="center","p-overlay-top":t.modal&&t.overlayResponsiveDirection==="top","p-overlay-top-start":t.modal&&t.overlayResponsiveDirection==="top-start","p-overlay-top-end":t.modal&&t.overlayResponsiveDirection==="top-end","p-overlay-bottom":t.modal&&t.overlayResponsiveDirection==="bottom","p-overlay-bottom-start":t.modal&&t.overlayResponsiveDirection==="bottom-start","p-overlay-bottom-end":t.modal&&t.overlayResponsiveDirection==="bottom-end","p-overlay-left":t.modal&&t.overlayResponsiveDirection==="left","p-overlay-left-start":t.modal&&t.overlayResponsiveDirection==="left-start","p-overlay-left-end":t.modal&&t.overlayResponsiveDirection==="left-end","p-overlay-right":t.modal&&t.overlayResponsiveDirection==="right","p-overlay-right-start":t.modal&&t.overlayResponsiveDirection==="right-start","p-overlay-right-end":t.modal&&t.overlayResponsiveDirection==="right-end"}],content:"p-overlay-content"},it=(()=>{class t extends L{name="overlay";style=Vt;classes=Nt;inlineStyles=Bt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),ot=new M("OVERLAY_INSTANCE"),si=(()=>{class t extends Le{overlayService;zone;componentName="Overlay";$pcOverlay=a(ot,{optional:!0,skipSelf:!0})??void 0;hostName="";get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}get mode(){return this._mode||this.overlayOptions?.mode}set mode(e){this._mode=e}get style(){return P.merge(this._style,this.modal?this.overlayResponsiveOptions?.style:this.overlayOptions?.style)}set style(e){this._style=e}get styleClass(){return P.merge(this._styleClass,this.modal?this.overlayResponsiveOptions?.styleClass:this.overlayOptions?.styleClass)}set styleClass(e){this._styleClass=e}get contentStyle(){return P.merge(this._contentStyle,this.modal?this.overlayResponsiveOptions?.contentStyle:this.overlayOptions?.contentStyle)}set contentStyle(e){this._contentStyle=e}get contentStyleClass(){return P.merge(this._contentStyleClass,this.modal?this.overlayResponsiveOptions?.contentStyleClass:this.overlayOptions?.contentStyleClass)}set contentStyleClass(e){this._contentStyleClass=e}get target(){let e=this._target||this.overlayOptions?.target;return e===void 0?"@prev":e}set target(e){this._target=e}get autoZIndex(){let e=this._autoZIndex||this.overlayOptions?.autoZIndex;return e===void 0?!0:e}set autoZIndex(e){this._autoZIndex=e}get baseZIndex(){let e=this._baseZIndex||this.overlayOptions?.baseZIndex;return e===void 0?0:e}set baseZIndex(e){this._baseZIndex=e}get showTransitionOptions(){let e=this._showTransitionOptions||this.overlayOptions?.showTransitionOptions;return e===void 0?".12s cubic-bezier(0, 0, 0.2, 1)":e}set showTransitionOptions(e){this._showTransitionOptions=e}get hideTransitionOptions(){let e=this._hideTransitionOptions||this.overlayOptions?.hideTransitionOptions;return e===void 0?".1s linear":e}set hideTransitionOptions(e){this._hideTransitionOptions=e}get listener(){return this._listener||this.overlayOptions?.listener}set listener(e){this._listener=e}get responsive(){return this._responsive||this.overlayOptions?.responsive}set responsive(e){this._responsive=e}get options(){return this._options}set options(e){this._options=e}appendTo=s(void 0);inline=s(!1);motionOptions=s(void 0);computedMotionOptions=T(()=>E(E({},this.ptm("motion")),this.motionOptions()||this.overlayOptions?.motionOptions));visibleChange=new d;onBeforeShow=new d;onShow=new d;onBeforeHide=new d;onHide=new d;onAnimationStart=new d;onAnimationDone=new d;onBeforeEnter=new d;onEnter=new d;onAfterEnter=new d;onBeforeLeave=new d;onLeave=new d;onAfterLeave=new d;overlayViewChild;contentViewChild;contentTemplate;templates;hostAttrSelector=s();$appendTo=T(()=>this.appendTo()||this.config.overlayAppendTo());_contentTemplate;_visible=!1;_mode;_style;_styleClass;_contentStyle;_contentStyleClass;_target;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_listener;_responsive;_options;modalVisible=!1;isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;_componentStyle=a(it);bindDirectiveInstance=a(u,{self:!0});documentKeyboardListener;window;transformOptions={default:"scaleY(0.8)",center:"scale(0.7)",top:"translate3d(0px, -100%, 0px)","top-start":"translate3d(0px, -100%, 0px)","top-end":"translate3d(0px, -100%, 0px)",bottom:"translate3d(0px, 100%, 0px)","bottom-start":"translate3d(0px, 100%, 0px)","bottom-end":"translate3d(0px, 100%, 0px)",left:"translate3d(-100%, 0px, 0px)","left-start":"translate3d(-100%, 0px, 0px)","left-end":"translate3d(-100%, 0px, 0px)",right:"translate3d(100%, 0px, 0px)","right-start":"translate3d(100%, 0px, 0px)","right-end":"translate3d(100%, 0px, 0px)"};get modal(){if(Te(this.platformId))return this.mode==="modal"||this.overlayResponsiveOptions&&this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media","")||`(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches}get overlayMode(){return this.mode||(this.modal?"modal":"overlay")}get overlayOptions(){return E(E({},this.config?.overlayOptions),this.options)}get overlayResponsiveOptions(){return E(E({},this.overlayOptions?.responsive),this.responsive)}get overlayResponsiveDirection(){return this.overlayResponsiveOptions?.direction||"center"}get overlayEl(){return this.overlayViewChild?.nativeElement}get contentEl(){return this.contentViewChild?.nativeElement}get targetEl(){return Me(this.target,this.el?.nativeElement)}constructor(e,i){super(),this.overlayService=e,this.zone=i}onAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="content"?this._contentTemplate=e.template:this._contentTemplate=e.template})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}show(e,i=!1){this.onVisibleChange(!0),this.handleEvents("onShow",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&he(this.targetEl),this.modal&&we(this.document?.body,"p-overflow-hidden")}hide(e,i=!1){if(this.visible)this.onVisibleChange(!1),this.handleEvents("onHide",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&he(this.targetEl),this.modal&&Ie(this.document?.body,"p-overflow-hidden");else return}onVisibleChange(e){this._visible=e,this.visibleChange.emit(e)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(e){this.overlayService.add({originalEvent:e,target:this.targetEl}),this.isOverlayContentClicked=!0}container=Z(void 0);onOverlayBeforeEnter(e){this.handleEvents("onBeforeShow",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.container.set(this.overlayEl||e.element),this.show(this.overlayEl,!0),this.hostAttrSelector()&&this.overlayEl&&this.overlayEl.setAttribute(this.hostAttrSelector(),""),this.appendOverlay(),this.alignOverlay(),this.setZIndex(),this.handleEvents("onBeforeEnter",e)}onOverlayEnter(e){this.handleEvents("onEnter",e)}onOverlayAfterEnter(e){this.bindListeners(),this.handleEvents("onAfterEnter",e)}onOverlayBeforeLeave(e){this.handleEvents("onBeforeHide",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.handleEvents("onBeforeLeave",e)}onOverlayLeave(e){this.handleEvents("onLeave",e)}onOverlayAfterLeave(e){this.hide(this.overlayEl,!0),this.container.set(null),this.unbindListeners(),this.appendOverlay(),oe.clear(this.overlayEl),this.modalVisible=!1,this.cd.markForCheck(),this.handleEvents("onAfterLeave",e)}handleEvents(e,i){this[e].emit(i),this.options&&this.options[e]&&this.options[e](i),this.config?.overlayOptions&&(this.config?.overlayOptions)[e]&&(this.config?.overlayOptions)[e](i)}setZIndex(){this.autoZIndex&&oe.set(this.overlayMode,this.overlayEl,this.baseZIndex+this.config?.zIndex[this.overlayMode])}appendOverlay(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?ue(this.document.body,this.overlayEl):ue(this.$appendTo(),this.overlayEl))}alignOverlay(){this.modal||this.overlayEl&&this.targetEl&&(this.overlayEl.style.minWidth=Ee(this.targetEl)+"px",this.$appendTo()==="self"?Se(this.overlayEl,this.targetEl):Oe(this.overlayEl,this.targetEl))}bindListeners(){this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Ae(this.targetEl,e=>{(!this.listener||this.listener(e,{type:"scroll",mode:this.overlayMode,valid:!0}))&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{let n=!(this.targetEl&&(this.targetEl.isSameNode(e.target)||!this.isOverlayClicked&&this.targetEl.contains(e.target)))&&!this.isOverlayContentClicked;(this.listener?this.listener(e,{type:"outside",mode:this.overlayMode,valid:e.which!==3&&n}):n)&&this.hide(e),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{(this.listener?this.listener(e,{type:"resize",mode:this.overlayMode,valid:!H()}):!H())&&this.hide(e,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||this.zone.runOutsideAngular(()=>{this.documentKeyboardListener=this.renderer.listen(this.document.defaultView,"keydown",e=>{if(this.overlayOptions.hideOnEscape===!1||e.code!=="Escape")return;(this.listener?this.listener(e,{type:"keydown",mode:this.overlayMode,valid:!H()}):!H())&&this.zone.run(()=>{this.hide(e,!0)})})})}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}onDestroy(){this.hide(this.overlayEl,!0),this.overlayEl&&this.$appendTo()!=="self"&&(this.renderer.appendChild(this.el.nativeElement,this.overlayEl),oe.clear(this.overlayEl)),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners()}static \u0275fac=function(i){return new(i||t)(ae(Ne),ae(me))};static \u0275cmp=D({type:t,selectors:[["p-overlay"]],contentQueries:function(i,n,o){if(i&1&&q(o,tt,4)(o,te,4),i&2){let p;_(p=C())&&(n.contentTemplate=p.first),_(p=C())&&(n.templates=p)}},viewQuery:function(i,n){if(i&1&&G(Tt,5)(tt,5),i&2){let o;_(o=C())&&(n.overlayViewChild=o.first),_(o=C())&&(n.contentViewChild=o.first)}},inputs:{hostName:"hostName",visible:"visible",mode:"mode",style:"style",styleClass:"styleClass",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",target:"target",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",listener:"listener",responsive:"responsive",options:"options",appendTo:[1,"appendTo"],inline:[1,"inline"],motionOptions:[1,"motionOptions"],hostAttrSelector:[1,"hostAttrSelector"]},outputs:{visibleChange:"visibleChange",onBeforeShow:"onBeforeShow",onShow:"onShow",onBeforeHide:"onBeforeHide",onHide:"onHide",onAnimationStart:"onAnimationStart",onAnimationDone:"onAnimationDone",onBeforeEnter:"onBeforeEnter",onEnter:"onEnter",onAfterEnter:"onAfterEnter",onBeforeLeave:"onBeforeLeave",onLeave:"onLeave",onAfterLeave:"onAfterLeave"},features:[V([it,{provide:ot,useExisting:t},{provide:A,useExisting:t}]),B([u]),y],ngContentSelectors:nt,decls:2,vars:1,consts:[["overlay",""],["content",""],[3,"class","style","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","style","pBind","click",4,"ngIf"],[3,"click","pBind"],["name","p-anchored-overlay",3,"onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave","visible","appear","options"]],template:function(i,n){i&1&&(ge(nt),fe(0,Et,2,5)(1,Dt,1,1,"div",2)),i&2&&be(n.inline()?0:1)},dependencies:[ee,W,J,N,u,Ze,$e],encapsulation:2,changeDetection:0})}return t})();export{Xe as a,an as b,An as c,Tn as d,wn as e,si as f,et as g};
