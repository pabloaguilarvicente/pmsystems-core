import{$a as pe,Ab as zi,Ac as N,Bc as jn,Cb as Wi,Cc as zn,D as Nn,Db as ae,Eb as k,F as Pn,Fb as Gi,Gb as fe,Hb as Ee,I as Ce,Ib as we,J as xn,Ja as J,Jb as Ki,Ka as Bi,L as v,Lb as yt,M as B,Mb as vt,Nb as Yi,O as A,P as Te,Pa as ht,Pb as Zi,Q as h,R as xi,Ra as Me,Rb as qi,Sa as P,Sb as qt,Tb as Xi,Ua as Kt,Ub as q,Vb as Xt,Wb as Qt,X as Ke,Xa as Z,Y as Rn,Ya as U,Z as Q,Za as L,_a as gt,a as m,aa as Wt,ab as M,b as $e,ba as Ri,bb as He,bc as H,c as Mi,da as ki,db as $i,eb as Ui,ec as Hn,fa as $,fb as Hi,g as ee,ia as F,ja as ft,jb as Se,k as ct,ka as Gt,la as C,m as Ue,mb as Vi,na as ce,nb as ji,o as In,pc as Qi,qc as ne,ra as Ye,rb as x,s as On,sb as kn,sc as G,t as Mn,tb as Bn,tc as g,u as Ni,ub as mt,vb as $n,vc as Vn,wb as Un,wc as Ve,x as Pi,xb as bt,xc as Ji,yb as Yt,yc as eo,z as pt,zb as Zt}from"./chunk-O7KPZUA6.js";var to=null;function Jt(){return to}function hs(t){to??=t}var Wn=class{},Ze=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>h(no),providedIn:"platform"})}return t})(),gs=new A(""),no=(()=>{class t extends Ze{_location;_history;_doc=h(Q);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Jt().getBaseHref(this._doc)}onPopState(e){let n=Jt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=Jt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,o){this._history.pushState(e,n,o)}replaceState(e,n,o){this._history.replaceState(e,n,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function en(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function io(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function he(t){return t&&t[0]!=="?"?`?${t}`:t}var qe=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>h(ro),providedIn:"root"})}return t})(),tn=new A(""),ro=(()=>{class t extends qe{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??h(Q).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return en(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+he(this._platformLocation.search),o=this._platformLocation.hash;return o&&e?`${n}${o}`:n}pushState(e,n,o,r){let s=this.prepareExternalUrl(o+he(r));this._platformLocation.pushState(e,n,s)}replaceState(e,n,o,r){let s=this.prepareExternalUrl(o+he(r));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(Te(Ze),Te(tn,8))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),so=(()=>{class t{_subject=new ee;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=ys(io(oo(n))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+he(n))}normalize(e){return t.stripTrailingSlash(bs(this._basePath,oo(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",o=null){this._locationStrategy.pushState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+he(n)),o)}replaceState(e,n="",o=null){this._locationStrategy.replaceState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+he(n)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(o=>o(e,n))}subscribe(e,n,o){return this._subject.subscribe({next:e,error:n??void 0,complete:o??void 0})}static normalizeQueryParams=he;static joinWithSlash=en;static stripTrailingSlash=io;static \u0275fac=function(n){return new(n||t)(Te(qe))};static \u0275prov=v({token:t,factory:()=>ms(),providedIn:"root"})}return t})();function ms(){return new so(Te(qe))}function bs(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function oo(t){return t.replace(/\/index.html$/,"")}function ys(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var vs=(()=>{class t extends qe{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=en(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,o,r){let s=this.prepareExternalUrl(o+he(r))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,s)}replaceState(e,n,o,r){let s=this.prepareExternalUrl(o+he(r))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(Te(Ze),Te(tn,8))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var X=(function(t){return t[t.Format=0]="Format",t[t.Standalone=1]="Standalone",t})(X||{}),S=(function(t){return t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short",t})(S||{}),te=(function(t){return t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full",t})(te||{}),Le={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function po(t){return ae(t)[k.LocaleId]}function fo(t,i,e){let n=ae(t),o=[n[k.DayPeriodsFormat],n[k.DayPeriodsStandalone]],r=le(o,i);return le(r,e)}function ho(t,i,e){let n=ae(t),o=[n[k.DaysFormat],n[k.DaysStandalone]],r=le(o,i);return le(r,e)}function go(t,i,e){let n=ae(t),o=[n[k.MonthsFormat],n[k.MonthsStandalone]],r=le(o,i);return le(r,e)}function mo(t,i){let n=ae(t)[k.Eras];return le(n,i)}function Dt(t,i){let e=ae(t);return le(e[k.DateFormat],i)}function Ct(t,i){let e=ae(t);return le(e[k.TimeFormat],i)}function St(t,i){let n=ae(t)[k.DateTimeFormat];return le(n,i)}function Et(t,i){let e=ae(t),n=e[k.NumberSymbols][i];if(typeof n>"u"){if(i===Le.CurrencyDecimal)return e[k.NumberSymbols][Le.Decimal];if(i===Le.CurrencyGroup)return e[k.NumberSymbols][Le.Group]}return n}function bo(t){if(!t[k.ExtraData])throw new Ce(2303,!1)}function yo(t){let i=ae(t);return bo(i),(i[k.ExtraData][2]||[]).map(n=>typeof n=="string"?Gn(n):[Gn(n[0]),Gn(n[1])])}function vo(t,i,e){let n=ae(t);bo(n);let o=[n[k.ExtraData][0],n[k.ExtraData][1]],r=le(o,i)||[];return le(r,e)||[]}function le(t,i){for(let e=i;e>-1;e--)if(typeof t[e]<"u")return t[e];throw new Ce(2304,!1)}function Gn(t){let[i,e]=t.split(":");return{hours:+i,minutes:+e}}var Ds=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,nn={},Cs=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function Do(t,i,e,n){let o=Is(t);i=_e(e,i)||i;let s=[],a;for(;i;)if(a=Cs.exec(i),a){s=s.concat(a.slice(1));let d=s.pop();if(!d)break;i=d}else{s.push(i);break}let l=o.getTimezoneOffset();n&&(l=So(n,l),o=Fs(o,n));let u="";return s.forEach(d=>{let c=_s(d);u+=c?c(o,e,l):d==="''"?"'":d.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),u}function ln(t,i,e){let n=new Date(0);return n.setFullYear(t,i,e),n.setHours(0,0,0),n}function _e(t,i){let e=po(t);if(nn[e]??={},nn[e][i])return nn[e][i];let n="";switch(i){case"shortDate":n=Dt(t,te.Short);break;case"mediumDate":n=Dt(t,te.Medium);break;case"longDate":n=Dt(t,te.Long);break;case"fullDate":n=Dt(t,te.Full);break;case"shortTime":n=Ct(t,te.Short);break;case"mediumTime":n=Ct(t,te.Medium);break;case"longTime":n=Ct(t,te.Long);break;case"fullTime":n=Ct(t,te.Full);break;case"short":let o=_e(t,"shortTime"),r=_e(t,"shortDate");n=on(St(t,te.Short),[o,r]);break;case"medium":let s=_e(t,"mediumTime"),a=_e(t,"mediumDate");n=on(St(t,te.Medium),[s,a]);break;case"long":let l=_e(t,"longTime"),u=_e(t,"longDate");n=on(St(t,te.Long),[l,u]);break;case"full":let d=_e(t,"fullTime"),c=_e(t,"fullDate");n=on(St(t,te.Full),[d,c]);break}return n&&(nn[e][i]=n),n}function on(t,i){return i&&(t=t.replace(/\{([^}]+)}/g,function(e,n){return i!=null&&n in i?i[n]:e})),t}function ge(t,i,e="-",n,o){let r="";(t<0||o&&t<=0)&&(o?t=-t+1:(t=-t,r=e));let s=String(t);for(;s.length<i;)s="0"+s;return n&&(s=s.slice(s.length-i)),r+s}function Ss(t,i){return ge(t,3).substring(0,i)}function R(t,i,e=0,n=!1,o=!1){return function(r,s){let a=Es(t,r);if((e>0||a>-e)&&(a+=e),t===3)a===0&&e===-12&&(a=12);else if(t===6)return Ss(a,i);let l=Et(s,Le.MinusSign);return ge(a,i,l,n,o)}}function Es(t,i){switch(t){case 0:return i.getFullYear();case 1:return i.getMonth();case 2:return i.getDate();case 3:return i.getHours();case 4:return i.getMinutes();case 5:return i.getSeconds();case 6:return i.getMilliseconds();case 7:return i.getDay();default:throw new Ce(2301,!1)}}function T(t,i,e=X.Format,n=!1){return function(o,r){return ws(o,r,t,i,e,n)}}function ws(t,i,e,n,o,r){switch(e){case 2:return go(i,o,n)[t.getMonth()];case 1:return ho(i,o,n)[t.getDay()];case 0:let s=t.getHours(),a=t.getMinutes();if(r){let u=yo(i),d=vo(i,o,n),c=u.findIndex(p=>{if(Array.isArray(p)){let[f,b]=p,y=s>=f.hours&&a>=f.minutes,D=s<b.hours||s===b.hours&&a<b.minutes;if(f.hours<b.hours){if(y&&D)return!0}else if(y||D)return!0}else if(p.hours===s&&p.minutes===a)return!0;return!1});if(c!==-1)return d[c]}return fo(i,o,n)[s<12?0:1];case 3:return mo(i,n)[t.getFullYear()<=0?0:1];default:let l=e;throw new Ce(2302,!1)}}function rn(t){return function(i,e,n){let o=-1*n,r=Et(e,Le.MinusSign),s=o>0?Math.floor(o/60):Math.ceil(o/60);switch(t){case 0:return(o>=0?"+":"")+ge(s,2,r)+ge(Math.abs(o%60),2,r);case 1:return"GMT"+(o>=0?"+":"")+ge(s,1,r);case 2:return"GMT"+(o>=0?"+":"")+ge(s,2,r)+":"+ge(Math.abs(o%60),2,r);case 3:return n===0?"Z":(o>=0?"+":"")+ge(s,2,r)+":"+ge(Math.abs(o%60),2,r);default:throw new Ce(2310,!1)}}}var As=0,an=4;function Ts(t){let i=ln(t,As,1).getDay();return ln(t,0,1+(i<=an?an:an+7)-i)}function Co(t){let i=t.getDay(),e=i===0?-3:an-i;return ln(t.getFullYear(),t.getMonth(),t.getDate()+e)}function Kn(t,i=!1){return function(e,n){let o;if(i){let r=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,s=e.getDate();o=1+Math.floor((s+r)/7)}else{let r=Co(e),s=Ts(r.getFullYear()),a=r.getTime()-s.getTime();o=1+Math.round(a/6048e5)}return ge(o,t,Et(n,Le.MinusSign))}}function sn(t,i=!1){return function(e,n){let r=Co(e).getFullYear();return ge(r,t,Et(n,Le.MinusSign),i)}}var Yn={};function _s(t){if(Yn[t])return Yn[t];let i;switch(t){case"G":case"GG":case"GGG":i=T(3,S.Abbreviated);break;case"GGGG":i=T(3,S.Wide);break;case"GGGGG":i=T(3,S.Narrow);break;case"y":i=R(0,1,0,!1,!0);break;case"yy":i=R(0,2,0,!0,!0);break;case"yyy":i=R(0,3,0,!1,!0);break;case"yyyy":i=R(0,4,0,!1,!0);break;case"Y":i=sn(1);break;case"YY":i=sn(2,!0);break;case"YYY":i=sn(3);break;case"YYYY":i=sn(4);break;case"M":case"L":i=R(1,1,1);break;case"MM":case"LL":i=R(1,2,1);break;case"MMM":i=T(2,S.Abbreviated);break;case"MMMM":i=T(2,S.Wide);break;case"MMMMM":i=T(2,S.Narrow);break;case"LLL":i=T(2,S.Abbreviated,X.Standalone);break;case"LLLL":i=T(2,S.Wide,X.Standalone);break;case"LLLLL":i=T(2,S.Narrow,X.Standalone);break;case"w":i=Kn(1);break;case"ww":i=Kn(2);break;case"W":i=Kn(1,!0);break;case"d":i=R(2,1);break;case"dd":i=R(2,2);break;case"c":case"cc":i=R(7,1);break;case"ccc":i=T(1,S.Abbreviated,X.Standalone);break;case"cccc":i=T(1,S.Wide,X.Standalone);break;case"ccccc":i=T(1,S.Narrow,X.Standalone);break;case"cccccc":i=T(1,S.Short,X.Standalone);break;case"E":case"EE":case"EEE":i=T(1,S.Abbreviated);break;case"EEEE":i=T(1,S.Wide);break;case"EEEEE":i=T(1,S.Narrow);break;case"EEEEEE":i=T(1,S.Short);break;case"a":case"aa":case"aaa":i=T(0,S.Abbreviated);break;case"aaaa":i=T(0,S.Wide);break;case"aaaaa":i=T(0,S.Narrow);break;case"b":case"bb":case"bbb":i=T(0,S.Abbreviated,X.Standalone,!0);break;case"bbbb":i=T(0,S.Wide,X.Standalone,!0);break;case"bbbbb":i=T(0,S.Narrow,X.Standalone,!0);break;case"B":case"BB":case"BBB":i=T(0,S.Abbreviated,X.Format,!0);break;case"BBBB":i=T(0,S.Wide,X.Format,!0);break;case"BBBBB":i=T(0,S.Narrow,X.Format,!0);break;case"h":i=R(3,1,-12);break;case"hh":i=R(3,2,-12);break;case"H":i=R(3,1);break;case"HH":i=R(3,2);break;case"m":i=R(4,1);break;case"mm":i=R(4,2);break;case"s":i=R(5,1);break;case"ss":i=R(5,2);break;case"S":i=R(6,1);break;case"SS":i=R(6,2);break;case"SSS":i=R(6,3);break;case"Z":case"ZZ":case"ZZZ":i=rn(0);break;case"ZZZZZ":i=rn(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":i=rn(1);break;case"OOOO":case"ZZZZ":case"zzzz":i=rn(2);break;default:return null}return Yn[t]=i,i}function So(t,i){t=t.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(e)?i:e}function Ls(t,i){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+i),t}function Fs(t,i,e){let o=t.getTimezoneOffset(),r=So(i,o);return Ls(t,-1*(r-o))}function Is(t){if(ao(t))return t;if(typeof t=="number"&&!isNaN(t))return new Date(t);if(typeof t=="string"){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[o,r=1,s=1]=t.split("-").map(a=>+a);return ln(o,r-1,s)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let n;if(n=t.match(Ds))return Os(n)}let i=new Date(t);if(!ao(i))throw new Ce(2311,!1);return i}function Os(t){let i=new Date(0),e=0,n=0,o=t[8]?i.setUTCFullYear:i.setFullYear,r=t[8]?i.setUTCHours:i.setHours;t[9]&&(e=Number(t[9]+t[10]),n=Number(t[9]+t[11])),o.call(i,Number(t[1]),Number(t[2])-1,Number(t[3]));let s=Number(t[4]||0)-e,a=Number(t[5]||0)-n,l=Number(t[6]||0),u=Math.floor(parseFloat("0."+(t[7]||0))*1e3);return r.call(i,s,a,l,u),i}function ao(t){return t instanceof Date&&!isNaN(t.valueOf())}var Zn=/\s+/,lo=[],Ms=(()=>{class t{_ngEl;_renderer;initialClasses=lo;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(Zn):lo}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Zn):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let o=this.stateMap.get(e);o!==void 0?(o.enabled!==n&&(o.changed=!0,o.enabled=n),o.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],o=e[1];o.changed?(this._toggleClass(n,o.enabled),o.changed=!1):o.touched||(o.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),o.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(Zn).forEach(o=>{n?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}static \u0275fac=function(n){return new(n||t)(P(ce),P(Me))};static \u0275dir=L({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var un=class{$implicit;ngForOf;index;count;constructor(i,e,n,o){this.$implicit=i,this.ngForOf=e,this.index=n,this.count=o}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Eo=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,o){this._viewContainer=e,this._template=n,this._differs=o}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((o,r,s)=>{if(o.previousIndex==null)n.createEmbeddedView(this._template,new un(o.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)n.remove(r===null?void 0:r);else if(r!==null){let a=n.get(r);n.move(a,s),uo(a,o)}});for(let o=0,r=n.length;o<r;o++){let a=n.get(o).context;a.index=o,a.count=r,a.ngForOf=this._ngForOf}e.forEachIdentityChange(o=>{let r=n.get(o.currentIndex);uo(r,o)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(P(Kt),P(ht),P(Ji))};static \u0275dir=L({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function uo(t,i){t.context.$implicit=i.item}var Qn=(()=>{class t{_viewContainer;_context=new dn;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){co(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){co(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(P(Kt),P(ht))};static \u0275dir=L({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),dn=class{$implicit=null;ngIf=null};function co(t,i){if(t&&!t.createEmbeddedView)throw new Ce(2020,!1)}var Jn=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,o){this._ngEl=e,this._differs=n,this._renderer=o}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[o,r]=e.split("."),s=o.indexOf("-")===-1?void 0:Bi.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,o,r?`${n}${r}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,o,s)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(P(ce),P(eo),P(Me))};static \u0275dir=L({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),ei=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let o=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,o,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,o)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,o):!1,get:(e,n,o)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,o)}})}static \u0275fac=function(n){return new(n||t)(P(Kt))};static \u0275dir=L({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Gt]})}return t})();function wo(t,i){return new Ce(2100,!1)}var qn=class{createSubscription(i,e,n){return ft(()=>i.subscribe({next:e,error:n}))}dispose(i){ft(()=>i.unsubscribe())}},Xn=class{createSubscription(i,e,n){return i.then(o=>e?.(o),o=>n?.(o)),{unsubscribe:()=>{e=null,n=null}}}dispose(i){i.unsubscribe()}},Ns=new Xn,Ps=new qn,xs=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=h(ki);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n),n=>this.applicationErrorHandler(n))}_selectStrategy(e){if($i(e))return Ns;if(Ui(e))return Ps;throw wo(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(n){return new(n||t)(P(Ve,16))};static \u0275pipe=gt({name:"async",type:t,pure:!1})}return t})();var Rs="mediumDate",Ao=new A(""),To=new A(""),ks=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,n,o){this.locale=e,this.defaultTimezone=n,this.defaultOptions=o}transform(e,n,o,r){if(e==null||e===""||e!==e)return null;try{let s=n??this.defaultOptions?.dateFormat??Rs,a=o??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Do(e,s,r||this.locale,a)}catch(s){throw wo(t,s.message)}}static \u0275fac=function(n){return new(n||t)(P(Qi,16),P(Ao,24),P(To,24))};static \u0275pipe=gt({name:"date",type:t,pure:!0})}return t})();var ue=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=U({type:t});static \u0275inj=B({})}return t})();function Bs(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[o,r]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(o.trim()===i)return decodeURIComponent(r)}return null}var ti=class{};var Us="browser",Hs="server";function Xe(t){return t===Us}function ii(t){return t===Hs}var Zu=(()=>{class t{static \u0275prov=v({token:t,providedIn:"root",factory:()=>new ni(h(Q),window)})}return t})(),ni=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i,e){this.window.scrollTo($e(m({},e),{left:i[0],top:i[1]}))}scrollToAnchor(i,e){let n=Vs(this.document,i);n&&(this.scrollToElement(n,e),n.focus())}setHistoryScrollRestoration(i){try{this.window.history.scrollRestoration=i}catch{console.warn(xn(2400,!1))}}scrollToElement(i,e){let n=i.getBoundingClientRect(),o=n.left+this.window.pageXOffset,r=n.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo($e(m({},e),{left:o-s[0],top:r-s[1]}))}};function Vs(t,i){let e=t.getElementById(i)||t.getElementsByName(i)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),o=n.currentNode;for(;o;){let r=o.shadowRoot;if(r){let s=r.getElementById(i)||r.querySelector(`[name="${i}"]`);if(s)return s}o=n.nextNode()}}return null}function Ne(...t){if(t){let i=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")i.push(n);else if(o==="object"){let r=Array.isArray(n)?[Ne(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);i=r.length?i.concat(r.filter(s=>!!s)):i}}return i.join(" ").trim()}}function _o(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function me(t,i){if(t&&i){let e=n=>{_o(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function zs(){return window.innerWidth-document.documentElement.offsetWidth}function Lo(t){typeof t=="string"?me(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.setProperty(t.variableName,zs()+"px"),me(document.body,t?.className||"p-overflow-hidden"))}function be(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Fo(t){typeof t=="string"?be(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.removeProperty(t.variableName),be(document.body,t?.className||"p-overflow-hidden"))}function wt(t){for(let i of document?.styleSheets)try{for(let e of i?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function cn(t){let i={width:0,height:0};if(t){let[e,n]=[t.style.visibility,t.style.display],o=t.getBoundingClientRect();t.style.visibility="hidden",t.style.display="block",i.width=o.width||t.offsetWidth,i.height=o.height||t.offsetHeight,t.style.display=n,t.style.visibility=e}return i}function Io(){let t=window,i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0],o=t.innerWidth||e.clientWidth||n.clientWidth,r=t.innerHeight||e.clientHeight||n.clientHeight;return{width:o,height:r}}function oi(t){return t?Math.abs(t.scrollLeft):0}function Ws(){let t=document.documentElement;return(window.pageXOffset||oi(t))-(t.clientLeft||0)}function Gs(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function Ks(t){return t?getComputedStyle(t).direction==="rtl":!1}function id(t,i,e=!0){var n,o,r,s;if(t){let a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:cn(t),l=a.height,u=a.width,d=i.offsetHeight,c=i.offsetWidth,p=i.getBoundingClientRect(),f=Gs(),b=Ws(),y=Io(),D,_,O="top";p.top+d+l>y.height?(D=p.top+f-l,O="bottom",D<0&&(D=f)):D=d+p.top+f,p.left+u>y.width?_=Math.max(0,p.left+b+c-u):_=p.left+b,Ks(t)?t.style.insetInlineEnd=_+"px":t.style.insetInlineStart=_+"px",t.style.top=D+"px",t.style.transformOrigin=O,e&&(t.style.marginTop=O==="bottom"?`calc(${(o=(n=wt(/-anchor-gutter$/))==null?void 0:n.value)!=null?o:"2px"} * -1)`:(s=(r=wt(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function od(t,i){t&&(typeof i=="string"?t.style.cssText=i:Object.entries(i||{}).forEach(([e,n])=>t.style[e]=n))}function Oo(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function rd(t,i,e=!0,n=void 0){var o;if(t){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:cn(t),s=i.offsetHeight,a=i.getBoundingClientRect(),l=Io(),u,d,c=n??"top";if(!n&&a.top+s+r.height>l.height?(u=-1*r.height,c="bottom",a.top+u<0&&(u=-1*a.top)):u=s,r.width>l.width?d=a.left*-1:a.left+r.width>l.width?d=(a.left+r.width-l.width)*-1:d=0,t.style.top=u+"px",t.style.insetInlineStart=d+"px",t.style.transformOrigin=c,e){let p=(o=wt(/-anchor-gutter$/))==null?void 0:o.value;t.style.marginTop=c==="bottom"?`calc(${p??"2px"} * -1)`:p??""}}}function Mo(t){if(t){let i=t.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function Ys(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&Mo(t))}function Qe(t){return typeof Element<"u"?t instanceof Element:t!==null&&typeof t=="object"&&t.nodeType===1&&typeof t.nodeName=="string"}function No(t){let i=t;return t&&typeof t=="object"&&(Object.hasOwn(t,"current")?i=t.current:Object.hasOwn(t,"el")&&(Object.hasOwn(t.el,"nativeElement")?i=t.el.nativeElement:i=t.el)),Qe(i)?i:void 0}function Zs(t,i){var e,n,o;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@first":return i?.firstElementChild;case"@last":return i?.lastElementChild;case"@child":return(e=i?.children)==null?void 0:e[0];case"@parent":return i?.parentElement;case"@grandparent":return(n=i?.parentElement)==null?void 0:n.parentElement;default:{if(typeof t=="string"){let a=t.match(/^@child\[(\d+)]/);return a?((o=i?.children)==null?void 0:o[parseInt(a[1],10)])||null:document.querySelector(t)||null}let r=(a=>typeof a=="function"&&"call"in a&&"apply"in a)(t)?t():t,s=No(r);return Ys(s)?s:r?.nodeType===9?r:void 0}}}function sd(t,i){let e=Zs(t,i);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}function pn(t,i={}){if(Qe(t)){let e=(n,o)=>{var r,s;let a=(r=t?.$attrs)!=null&&r[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[o].flat().reduce((l,u)=>{if(u!=null){let d=typeof u;if(d==="string"||d==="number")l.push(u);else if(d==="object"){let c=Array.isArray(u)?e(n,u):Object.entries(u).map(([p,f])=>n==="style"&&(f||f===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${f}`:f?p:void 0);l=c.length?l.concat(c.filter(p=>!!p)):l}}return l},a)};Object.entries(i).forEach(([n,o])=>{if(o!=null){let r=n.match(/^on(.+)/);r?t.addEventListener(r[1].toLowerCase(),o):n==="p-bind"||n==="pBind"?pn(t,o):(o=n==="class"?[...new Set(e("class",o))].join(" ").trim():n==="style"?e("style",o).join(";").trim():o,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=o),t.setAttribute(n,o))}})}}function fn(t,i={},...e){if(t){let n=document.createElement(t);return pn(n,i),n.append(...e),n}}function ad(t,i){if(t){t.style.opacity="0";let e=+new Date,n="0",o=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/i}`,t.style.opacity=n,e=+new Date,+n<1&&("requestAnimationFrame"in window?requestAnimationFrame(o):setTimeout(o,16))};o()}}function qs(t,i){return Qe(t)?Array.from(t.querySelectorAll(i)):[]}function Je(t,i){return Qe(t)?t.matches(i)?t:t.querySelector(i):null}function ld(t,i){t&&document.activeElement!==t&&t.focus(i)}function ud(t,i){if(Qe(t)){let e=t.getAttribute(i);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function Po(t,i=""){let e=qs(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let o of e)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&n.push(o);return n}function dd(t,i){let e=Po(t,i);return e.length>0?e[0]:null}function ri(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function cd(t){var i;if(t){let e=(i=Mo(t))==null?void 0:i.childNodes,n=0;if(e)for(let o=0;o<e.length;o++){if(e[o]===t)return n;e[o].nodeType===1&&n++}}return-1}function pd(t,i){let e=Po(t,i);return e.length>0?e[e.length-1]:null}function xo(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||oi(document.documentElement)||oi(document.body)||0)}}return{top:"auto",left:"auto"}}function si(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function fd(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function ai(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function hd(t){if(t){let i=t.nodeName,e=t.parentElement&&t.parentElement.nodeName;return i==="INPUT"||i==="TEXTAREA"||i==="BUTTON"||i==="A"||e==="INPUT"||e==="TEXTAREA"||e==="BUTTON"||e==="A"||!!t.closest(".p-button, .p-checkbox, .p-radiobutton")}return!1}function gd(t){return!!(t&&t.offsetParent!=null)}function Ro(){return typeof window>"u"||!window.matchMedia?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function md(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function hn(){return new Promise(t=>{requestAnimationFrame(()=>{requestAnimationFrame(t)})})}function ko(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function bd(t,i){let e=No(t);if(e)e.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function yd(t,i){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=e?parseFloat(e):0,o=getComputedStyle(t).getPropertyValue("paddingTop"),r=o?parseFloat(o):0,s=t.getBoundingClientRect(),a=i.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-n-r,l=t.scrollTop,u=t.clientHeight,d=si(i);a<0?t.scrollTop=l+a:a+d>u&&(t.scrollTop=l+a-u+d)}function Bo(t,i="",e){Qe(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function li(t,i,e=null,n){var o;i&&((o=t?.style)==null||o.setProperty(i,e,n))}function $o(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.forEach(o=>{o(e)})},clear(){t.clear()}}}var Xs=Object.defineProperty,Uo=Object.getOwnPropertySymbols,Qs=Object.prototype.hasOwnProperty,Js=Object.prototype.propertyIsEnumerable,Ho=(t,i,e)=>i in t?Xs(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,Vo=(t,i)=>{for(var e in i||(i={}))Qs.call(i,e)&&Ho(t,e,i[e]);if(Uo)for(var e of Uo(i))Js.call(i,e)&&Ho(t,e,i[e]);return t};function jo(...t){if(t){let i=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")i.push(n);else if(o==="object"){let r=Array.isArray(n)?[jo(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);i=r.length?i.concat(r.filter(s=>!!s)):i}}return i.join(" ").trim()}}function ea(t){return typeof t=="function"&&"call"in t&&"apply"in t}function ta({skipUndefined:t=!1},...i){return i?.reduce((e,n={})=>{for(let o in n){let r=n[o];if(!(t&&r===void 0))if(o==="style")e.style=Vo(Vo({},e.style),n.style);else if(o==="class"||o==="className")e[o]=jo(e[o],n[o]);else if(ea(r)){let s=e[o];e[o]=s?(...a)=>{s(...a),r(...a)}:r}else e[o]=r}return e},{})}function ui(...t){return ta({skipUndefined:!1},...t)}var na=Object.defineProperty,zo=Object.getOwnPropertySymbols,ia=Object.prototype.hasOwnProperty,oa=Object.prototype.propertyIsEnumerable,Wo=(t,i,e)=>i in t?na(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,ra=(t,i)=>{for(var e in i||(i={}))ia.call(i,e)&&Wo(t,e,i[e]);if(zo)for(var e of zo(i))oa.call(i,e)&&Wo(t,e,i[e]);return t};function Ae(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function di(t,i,e=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||e.has(t)||e.has(i))return!1;e.add(t).add(i);let n=Array.isArray(t),o=Array.isArray(i),r,s,a;if(n&&o){if(s=t.length,s!=i.length)return!1;for(r=s;r--!==0;)if(!di(t[r],i[r],e))return!1;return!0}if(n!=o)return!1;let l=t instanceof Date,u=i instanceof Date;if(l!=u)return!1;if(l&&u)return t.getTime()==i.getTime();let d=t instanceof RegExp,c=i instanceof RegExp;if(d!=c)return!1;if(d&&c)return t.toString()==i.toString();let p=Object.keys(t);if(s=p.length,s!==Object.keys(i).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(i,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!di(t[a],i[a],e))return!1;return!0}function sa(t,i){return di(t,i)}function mn(t){return typeof t=="function"&&"call"in t&&"apply"in t}function E(t){return!Ae(t)}function gn(t,i){if(!t||!i)return null;try{let e=t[i];if(E(e))return e}catch{}if(Object.keys(t).length){if(mn(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let e=i.split("."),n=t;for(let o=0,r=e.length;o<r;++o){if(n==null)return null;n=n[e[o]]}return n}}return null}function At(t,i,e){return e?gn(t,e)===gn(i,e):sa(t,i)}function Sd(t,i){if(t!=null&&i&&i.length){for(let e of i)if(At(t,e))return!0}return!1}function ye(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function Go(t={},i={}){let e=ra({},t);return Object.keys(i).forEach(n=>{let o=n;ye(i[o])&&o in t&&ye(t[o])?e[o]=Go(t[o],i[o]):e[o]=i[o]}),e}function Ko(...t){return t.reduce((i,e,n)=>n===0?e:Go(i,e),{})}function Ed(t,i){let e=-1;if(E(t))try{e=t.findLastIndex(i)}catch{e=t.lastIndexOf([...t].reverse().find(i))}return e}function j(t,...i){return mn(t)?t(...i):t}function de(t,i=!0){return typeof t=="string"&&(i||t!=="")}function Pe(t){return de(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function bn(t,i="",e={}){let n=Pe(i).split("."),o=n.shift();if(o){if(ye(t)){let r=Object.keys(t).find(s=>Pe(s)===o)||"";return bn(j(t[r],e),n.join("."),e)}return}return j(t,e)}function ci(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function wd(t){return t instanceof Date}function Yo(t){return E(t)&&!isNaN(t)}function Ad(t=""){return E(t)&&t.length===1&&!!t.match(/\S| /)}function ie(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function je(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function oe(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let i={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let e in i)t=t.replace(i[e],e)}return t}function yn(t){return de(t)?t.replace(/(_)/g,"-").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase():t}function pi(t){return t==="auto"?0:typeof t=="number"?t:Number(t.replace(/[^\d.]/g,"").replace(",","."))*1e3}var vn={};function Tt(t="pui_id_"){return Object.hasOwn(vn,t)||(vn[t]=0),vn[t]++,`${t}${vn[t]}`}var aa=["*"],la=(function(t){return t[t.ACCEPT=0]="ACCEPT",t[t.REJECT=1]="REJECT",t[t.CANCEL=2]="CANCEL",t})(la||{}),Od=(()=>{class t{requireConfirmationSource=new ee;acceptConfirmationSource=new ee;requireConfirmation$=this.requireConfirmationSource.asObservable();accept=this.acceptConfirmationSource.asObservable();confirm(e){return this.requireConfirmationSource.next(e),this}close(){return this.requireConfirmationSource.next(null),this}onAccept(){this.acceptConfirmationSource.next(null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var K=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})(),Md=(()=>{class t{static AND="and";static OR="or"}return t})(),Nd=(()=>{class t{filter(e,n,o,r,s){let a=[];if(e)for(let l of e)for(let u of n){let d=gn(l,u);if(this.filters[r](d,o,s)){a.push(l);break}}return a}filters={startsWith:(e,n,o)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=oe(n.toString()).toLocaleLowerCase(o);return oe(e.toString()).toLocaleLowerCase(o).slice(0,r.length)===r},contains:(e,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=oe(n.toString()).toLocaleLowerCase(o);return oe(e.toString()).toLocaleLowerCase(o).indexOf(r)!==-1},notContains:(e,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=oe(n.toString()).toLocaleLowerCase(o);return oe(e.toString()).toLocaleLowerCase(o).indexOf(r)===-1},endsWith:(e,n,o)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=oe(n.toString()).toLocaleLowerCase(o),s=oe(e.toString()).toLocaleLowerCase(o);return s.indexOf(r,s.length-r.length)!==-1},equals:(e,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():e==n?!0:oe(e.toString()).toLocaleLowerCase(o)==oe(n.toString()).toLocaleLowerCase(o),notEquals:(e,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():e==n?!1:oe(e.toString()).toLocaleLowerCase(o)!=oe(n.toString()).toLocaleLowerCase(o),in:(e,n)=>{if(n==null||n.length===0)return!0;for(let o=0;o<n.length;o++)if(At(e,n[o]))return!0;return!1},between:(e,n)=>n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1],lt:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n,lte:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n,gt:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n,gte:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n,is:(e,n,o)=>this.filters.equals(e,n,o),isNot:(e,n,o)=>this.filters.notEquals(e,n,o),before:(e,n,o)=>this.filters.lt(e,n,o),after:(e,n,o)=>this.filters.gt(e,n,o),dateIs:(e,n)=>n==null?!0:e==null?!1:e.toDateString()===n.toDateString(),dateIsNot:(e,n)=>n==null?!0:e==null?!1:e.toDateString()!==n.toDateString(),dateBefore:(e,n)=>n==null?!0:e==null?!1:e.getTime()<n.getTime(),dateAfter:(e,n)=>n==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>n.getTime())};register(e,n){this.filters[e]=n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Pd=(()=>{class t{messageSource=new ee;clearSource=new ee;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(e){e&&this.messageSource.next(e)}addAll(e){e&&e.length&&this.messageSource.next(e)}clear(e){this.clearSource.next(e||null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),xd=(()=>{class t{clickSource=new ee;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Rd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=Z({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:aa,decls:1,vars:0,template:function(n,o){n&1&&(Ee(),we(0))},encapsulation:2})}return t})(),Zo=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(P(ht))};static \u0275dir=L({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),xe=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=U({type:t});static \u0275inj=B({imports:[ue]})}return t})(),kd=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var Ft=class{},Xo=(()=>{class t{handle(e){return e.key}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),et=class{},Qo=(()=>{class t extends et{compile(e,n){return e}compileTranslations(e,n){return e}static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),tt=class{},Jo=(()=>{class t extends tt{getTranslation(e){return ct({})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();function Dn(t,i){if(t===i)return!0;if(t===null||i===null)return!1;if(t!==t&&i!==i)return!0;let e=typeof t,n=typeof i,o;if(e==n&&e=="object")if(Array.isArray(t)){if(!Array.isArray(i))return!1;if((o=t.length)==i.length){for(let r=0;r<o;r++)if(!Dn(t[r],i[r]))return!1;return!0}}else{if(Array.isArray(i))return!1;if(Fe(t)&&Fe(i)){let r=Object.create(null);for(let s in t){if(!Dn(t[s],i[s]))return!1;r[s]=!0}for(let s in i)if(!(s in r)&&typeof i[s]<"u")return!1;return!0}}return!1}function Re(t){return typeof t<"u"&&t!==null}function qo(t){return t!==void 0}function Fe(t){return Lt(t)&&!ze(t)&&t!==null}function Lt(t){return typeof t=="object"&&t!==null}function ze(t){return Array.isArray(t)}function Cn(t){return typeof t=="string"}function ua(t){return typeof t=="function"}function Sn(t){if(ze(t))return t.map(i=>Sn(i));if(Fe(t)){let i={};return Object.keys(t).forEach(e=>{i[e]=Sn(t[e])}),i}else return t}function bi(t,i){if(!Lt(t))return Sn(i);let e=Sn(t);return Lt(e)&&Lt(i)&&Object.keys(i).forEach(n=>{Fe(i[n])?n in t?e[n]=bi(t[n],i[n]):Object.assign(e,{[n]:i[n]}):Object.assign(e,{[n]:i[n]})}),e}function er(t,i){let e=i.split(".");i="";do{i+=e.shift();let n=!e.length;if(Re(t)){if(Fe(t)&&qo(t[i])&&(Fe(t[i])||ze(t[i])||n)){t=t[i],i="";continue}if(ze(t)){let o=parseInt(i,10);if(qo(t[o])&&(Fe(t[o])||ze(t[o])||n)){t=t[o],i="";continue}}}if(n){t=void 0;continue}i+="."}while(e.length);return t}function da(t,i,e){return bi(t,ca(i,e))}function ca(t,i){return t.split(".").reduceRight((e,n)=>({[n]:e}),i)}var nt=class{},tr=(()=>{class t extends nt{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(e,n){if(Cn(e))return this.interpolateString(e,n);if(ua(e))return this.interpolateFunction(e,n)}interpolateFunction(e,n){return e(n)}interpolateString(e,n){return n?e.replace(this.templateMatcher,(o,r)=>{let s=this.getInterpolationReplacement(n,r);return s!==void 0?s:o}):e}getInterpolationReplacement(e,n){return this.formatValue(er(e,n))}formatValue(e){if(Cn(e))return e;if(typeof e=="number"||typeof e=="boolean")return e.toString();if(e===null)return"null";if(ze(e))return e.join(", ");if(Lt(e))return typeof e.toString=="function"&&e.toString!==Object.prototype.toString?e.toString():JSON.stringify(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),fi=(()=>{class t{_onTranslationChange=new ee;_onLangChange=new ee;_onFallbackLangChange=new ee;fallbackLang=null;currentLang;translations={};languages=[];getTranslations(e){return this.translations[e]}setTranslations(e,n,o){this.translations[e]=o&&this.hasTranslationFor(e)?bi(this.translations[e],n):n,this.addLanguages([e]),this._onTranslationChange.next({lang:e,translations:this.getTranslations(e)})}getLanguages(){return this.languages}getCurrentLang(){return this.currentLang}getFallbackLang(){return this.fallbackLang}setFallbackLang(e,n=!0){this.fallbackLang=e,n&&this._onFallbackLangChange.next({lang:e,translations:this.translations[e]})}setCurrentLang(e,n=!0){this.currentLang=e,n&&this._onLangChange.next({lang:e,translations:this.translations[e]})}get onTranslationChange(){return this._onTranslationChange.asObservable()}get onLangChange(){return this._onLangChange.asObservable()}get onFallbackLangChange(){return this._onFallbackLangChange.asObservable()}addLanguages(e){this.languages=Array.from(new Set([...this.languages,...e]))}hasTranslationFor(e){return typeof this.translations[e]<"u"}deleteTranslations(e){delete this.translations[e]}getTranslation(e){let n=this.getValue(this.currentLang,e);return n===void 0&&this.fallbackLang!=null&&this.fallbackLang!==this.currentLang&&(n=this.getValue(this.fallbackLang,e)),n}getValue(e,n){return er(this.getTranslations(e),n)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),hi=new A("TRANSLATE_CONFIG"),_t=t=>Ue(t)?t:ct(t);var gi=(()=>{class t{loadingTranslations;pending=!1;_translationRequests={};lastUseLanguage=null;currentLoader=h(tt);compiler=h(et);parser=h(nt);missingTranslationHandler=h(Ft);store=h(fi);extend=!1;get onTranslationChange(){return this.store.onTranslationChange}get onLangChange(){return this.store.onLangChange}get onFallbackLangChange(){return this.store.onFallbackLangChange}get onDefaultLangChange(){return this.store.onFallbackLangChange}constructor(){let e=m({extend:!1,fallbackLang:null},h(hi,{optional:!0}));e.lang&&this.use(e.lang),e.fallbackLang&&this.setFallbackLang(e.fallbackLang),e.extend&&(this.extend=!0)}setFallbackLang(e){this.getFallbackLang()||this.store.setFallbackLang(e,!1);let n=this.loadOrExtendLanguage(e);return Ue(n)?(n.pipe(pt(1)).subscribe({next:()=>{this.store.setFallbackLang(e)},error:()=>{}}),n):(this.store.setFallbackLang(e),ct(this.store.getTranslations(e)))}use(e){this.lastUseLanguage=e,this.getCurrentLang()||this.store.setCurrentLang(e,!1);let n=this.loadOrExtendLanguage(e);return Ue(n)?(n.pipe(pt(1)).subscribe({next:()=>{this.changeLang(e)},error:()=>{}}),n):(this.changeLang(e),ct(this.store.getTranslations(e)))}loadOrExtendLanguage(e){if(!this.store.hasTranslationFor(e)||this.extend)return this._translationRequests[e]=this._translationRequests[e]||this.loadAndCompileTranslations(e),this._translationRequests[e]}changeLang(e){e===this.lastUseLanguage&&this.store.setCurrentLang(e)}getCurrentLang(){return this.store.getCurrentLang()}loadAndCompileTranslations(e){this.pending=!0;let n=this.currentLoader.getTranslation(e).pipe(Nn(1),pt(1));return this.loadingTranslations=n.pipe(In(o=>this.compiler.compileTranslations(o,e)),Nn(1),pt(1)),this.loadingTranslations.subscribe({next:o=>{this.store.setTranslations(e,o,this.extend),this.pending=!1},error:o=>{this.pending=!1}}),n}setTranslation(e,n,o=!1){let r=this.compiler.compileTranslations(n,e);this.store.setTranslations(e,r,o||this.extend)}getLangs(){return this.store.getLanguages()}addLangs(e){this.store.addLanguages(e)}getParsedResultForKey(e,n){let o=this.getTextToInterpolate(e);if(Re(o))return this.runInterpolation(o,n);let r=this.missingTranslationHandler.handle(m({key:e,translateService:this},n!==void 0&&{interpolateParams:n}));return r!==void 0?r:e}getFallbackLang(){return this.store.getFallbackLang()}getTextToInterpolate(e){return this.store.getTranslation(e)}runInterpolation(e,n){if(Re(e))return ze(e)?this.runInterpolationOnArray(e,n):Fe(e)?this.runInterpolationOnDict(e,n):this.parser.interpolate(e,n)}runInterpolationOnArray(e,n){return e.map(o=>this.runInterpolation(o,n))}runInterpolationOnDict(e,n){let o={};for(let r in e){let s=this.runInterpolation(e[r],n);s!==void 0&&(o[r]=s)}return o}getParsedResult(e,n){return e instanceof Array?this.getParsedResultForArray(e,n):this.getParsedResultForKey(e,n)}getParsedResultForArray(e,n){let o={},r=!1;for(let a of e)o[a]=this.getParsedResultForKey(a,n),r=r||Ue(o[a]);if(!r)return o;let s=e.map(a=>_t(o[a]));return Ni(s).pipe(In(a=>{let l={};return a.forEach((u,d)=>{l[e[d]]=u}),l}))}get(e,n){if(!Re(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return this.pending?this.loadingTranslations.pipe(Pi(()=>_t(this.getParsedResult(e,n)))):_t(this.getParsedResult(e,n))}getStreamOnTranslationChange(e,n){if(!Re(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return On(Mn(()=>this.get(e,n)),this.onTranslationChange.pipe(Pn(()=>{let o=this.getParsedResult(e,n);return _t(o)})))}stream(e,n){if(!Re(e)||!e.length)throw new Error('Parameter "key" required');return On(Mn(()=>this.get(e,n)),this.onLangChange.pipe(Pn(()=>{let o=this.getParsedResult(e,n);return _t(o)})))}instant(e,n){if(!Re(e)||e.length===0)throw new Error('Parameter "key" is required and cannot be empty');let o=this.getParsedResult(e,n);return Ue(o)?Array.isArray(e)?e.reduce((r,s)=>(r[s]=s,r),{}):e:o}set(e,n,o=this.getCurrentLang()){this.store.setTranslations(o,da(this.store.getTranslations(o),e,Cn(n)?this.compiler.compile(n,o):this.compiler.compileTranslations(n,o)),!1)}reloadLang(e){return this.resetLang(e),this.loadAndCompileTranslations(e)}resetLang(e){delete this._translationRequests[e],this.store.deleteTranslations(e)}static getBrowserLang(){if(typeof window>"u"||!window.navigator)return;let e=this.getBrowserCultureLang();return e?e.split(/[-_]/)[0]:void 0}static getBrowserCultureLang(){if(!(typeof window>"u"||typeof window.navigator>"u"))return window.navigator.languages?window.navigator.languages[0]:window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}getBrowserLang(){return t.getBrowserLang()}getBrowserCultureLang(){return t.getBrowserCultureLang()}get defaultLang(){return this.getFallbackLang()}get currentLang(){return this.store.getCurrentLang()}get langs(){return this.store.getLanguages()}setDefaultLang(e){return this.setFallbackLang(e)}getDefaultLang(){return this.getFallbackLang()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var Kd=(()=>{class t{translate=h(gi);_ref=h(Ve);value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onFallbackLangChange;updateValue(e,n,o){let r=s=>{this.value=s!==void 0?s:e,this.lastKey=e,this._ref.markForCheck()};if(o){let s=this.translate.getParsedResult(e,n);Ue(s)?s.subscribe(r):r(s)}this.translate.get(e,n).subscribe(r)}transform(e,...n){if(!e||!e.length)return e;if(Dn(e,this.lastKey)&&Dn(n,this.lastParams))return this.value;let o;if(Re(n[0])&&n.length)if(Cn(n[0])&&n[0].length){let r=n[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g,'"$2":').replace(/:(\s)?(')(.*?)(')/g,':"$3"');try{o=JSON.parse(r)}catch(s){throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${n[0]}`)}}else Fe(n[0])&&(o=n[0]);return this.lastKey=e,this.lastParams=n,this.updateValue(e,o),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(r=>{(this.lastKey&&r.lang===this.translate.getCurrentLang()||r.lang===this.translate.getFallbackLang())&&(this.lastKey=null,this.updateValue(e,o,r.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(r=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,o,r.translations))})),this.onFallbackLangChange||(this.onFallbackLangChange=this.translate.onFallbackLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,o))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onFallbackLangChange<"u"&&(this.onFallbackLangChange.unsubscribe(),this.onFallbackLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(n){return new(n||t)};static \u0275pipe=gt({name:"translate",type:t,pure:!1});static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();function nr(t){return{provide:tt,useClass:t}}function ir(t){return{provide:et,useClass:t}}function or(t){return{provide:nt,useClass:t}}function rr(t){return{provide:Ft,useClass:t}}function Yd(t={}){return mi(m({compiler:ir(Qo),parser:or(tr),loader:nr(Jo),missingTranslationHandler:rr(Xo)},t),!0)}function mi(t={},i){let e=[];t.loader&&e.push(t.loader),t.compiler&&e.push(t.compiler),t.parser&&e.push(t.parser),t.missingTranslationHandler&&e.push(t.missingTranslationHandler),i&&e.push(fi),(t.useDefaultLang||t.defaultLanguage)&&(console.warn("The `useDefaultLang` and `defaultLanguage` options are deprecated. Please use `fallbackLang` instead."),t.useDefaultLang===!0&&t.defaultLanguage&&(t.fallbackLang=t.defaultLanguage));let n={fallbackLang:t.fallbackLang??null,lang:t.lang,extend:t.extend??!1};return e.push({provide:hi,useValue:n}),e.push({provide:gi,useClass:gi,deps:[fi,tt,et,nt,Ft,hi]}),e}var Zd=(()=>{class t{static forRoot(e={}){return{ngModule:t,providers:[...mi(m({compiler:ir(Qo),parser:or(tr),loader:nr(Jo),missingTranslationHandler:rr(Xo)},e),!0)]}}static forChild(e={}){return{ngModule:t,providers:[...mi(e,e.isolate??!1)]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=U({type:t});static \u0275inj=B({})}return t})();var pa=Object.defineProperty,fa=Object.defineProperties,ha=Object.getOwnPropertyDescriptors,En=Object.getOwnPropertySymbols,cr=Object.prototype.hasOwnProperty,pr=Object.prototype.propertyIsEnumerable,sr=(t,i,e)=>i in t?pa(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,De=(t,i)=>{for(var e in i||(i={}))cr.call(i,e)&&sr(t,e,i[e]);if(En)for(var e of En(i))pr.call(i,e)&&sr(t,e,i[e]);return t},yi=(t,i)=>fa(t,ha(i)),Ie=(t,i)=>{var e={};for(var n in t)cr.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&En)for(var n of En(t))i.indexOf(n)<0&&pr.call(t,n)&&(e[n]=t[n]);return e};function Jd(...t){return Ko(...t)}var ga=$o(),re=ga,ot=/{([^}]*)}/g,fr=/(\d+\s+[\+\-\*\/]\s+\d+)/g,hr=/var\([^)]+\)/g;function ar(t){return de(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}function ma(t){return ye(t)&&t.hasOwnProperty("$value")&&t.hasOwnProperty("$type")?t.$value:t}function ba(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function vi(t="",i=""){return ba(`${de(t,!1)&&de(i,!1)?`${t}-`:t}${i}`)}function gr(t="",i=""){return`--${vi(t,i)}`}function ya(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function mr(t,i="",e="",n=[],o){if(de(t)){let r=t.trim();if(ya(r))return;if(ie(r,ot)){let s=r.replaceAll(ot,a=>{let l=a.replace(/{|}/g,"").split(".").filter(u=>!n.some(d=>ie(u,d)));return`var(${gr(e,yn(l.join("-")))}${E(o)?`, ${o}`:""})`});return ie(s.replace(hr,"0"),fr)?`calc(${s})`:s}return r}else if(Yo(t))return t}function va(t,i,e){de(i,!1)&&t.push(`${i}:${e};`)}function it(t,i){return t?`${t}{${i}}`:""}function br(t,i){if(t.indexOf("dt(")===-1)return t;function e(s,a){let l=[],u=0,d="",c=null,p=0;for(;u<=s.length;){let f=s[u];if((f==='"'||f==="'"||f==="`")&&s[u-1]!=="\\"&&(c=c===f?null:f),!c&&(f==="("&&p++,f===")"&&p--,(f===","||u===s.length)&&p===0)){let b=d.trim();b.startsWith("dt(")?l.push(br(b,a)):l.push(n(b)),d="",u++;continue}f!==void 0&&(d+=f),u++}return l}function n(s){let a=s[0];if((a==='"'||a==="'"||a==="`")&&s[s.length-1]===a)return s.slice(1,-1);let l=Number(s);return isNaN(l)?s:l}let o=[],r=[];for(let s=0;s<t.length;s++)if(t[s]==="d"&&t.slice(s,s+3)==="dt(")r.push(s),s+=2;else if(t[s]===")"&&r.length>0){let a=r.pop();r.length===0&&o.push([a,s])}if(!o.length)return t;for(let s=o.length-1;s>=0;s--){let[a,l]=o[s],u=t.slice(a+3,l),d=e(u,i),c=i(...d);t=t.slice(0,a)+c+t.slice(l+1)}return t}function lr(t){return t.length===4?`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`:t}function ur(t){let i=parseInt(t.substring(1),16),e=i>>16&255,n=i>>8&255,o=i&255;return{r:e,g:n,b:o}}function Da(t,i,e){return`#${t.toString(16).padStart(2,"0")}${i.toString(16).padStart(2,"0")}${e.toString(16).padStart(2,"0")}`}var yr=(t,i,e)=>{t=lr(t),i=lr(i);let n=(e/100*2-1+1)/2,o=1-n,r=ur(t),s=ur(i),a=Math.round(r.r*n+s.r*o),l=Math.round(r.g*n+s.g*o),u=Math.round(r.b*n+s.b*o);return Da(a,l,u)},Ca=(t,i)=>yr("#000000",t,i),Sa=(t,i)=>yr("#ffffff",t,i),dr=[50,100,200,300,400,500,600,700,800,900,950],oc=t=>{if(ie(t,ot)){let i=t.replace(/{|}/g,"");return dr.reduce((e,n)=>(e[n]=`{${i}.${n}}`,e),{})}return typeof t=="string"?dr.reduce((i,e,n)=>(i[e]=n<=5?Sa(t,(5-n)*19):Ca(t,(n-5)*15),i),{}):t},Ci=t=>{var i;let e=w.getTheme(),n=Di(e,t,void 0,"variable"),o=(i=n?.match(/--[\w-]+/g))==null?void 0:i[0],r=Di(e,t,void 0,"value");return{name:o,variable:n,value:r}},Oe=(...t)=>Di(w.getTheme(),...t),Di=(t={},i,e,n)=>{if(i){let{variable:o,options:r}=w.defaults||{},{prefix:s,transform:a}=t?.options||r||{},l=ie(i,ot)?i:`{${i}}`;return n==="value"||Ae(n)&&a==="strict"?w.getTokenValue(i):mr(l,void 0,s,[o.excludedKeyRegex],e)}return""};function rt(t,...i){if(t instanceof Array){let e=t.reduce((n,o,r)=>{var s;return n+o+((s=j(i[r],{dt:Oe}))!=null?s:"")},"");return br(e,Oe)}return j(t,{dt:Oe})}function Ea(t,i={}){let e=w.defaults.variable,{prefix:n=e.prefix,selector:o=e.selector,excludedKeyRegex:r=e.excludedKeyRegex}=i,s=[],a=[],l=[{node:t,path:n}];for(;l.length;){let{node:d,path:c}=l.pop();for(let p in d){let f=d[p],b=ma(f),y=ie(p,r)?vi(c):vi(c,yn(p));if(ye(b))l.push({node:b,path:y});else{let D=gr(y),_=mr(b,y,n,[r]);va(a,D,_);let O=y;n&&O.startsWith(n+"-")&&(O=O.slice(n.length+1)),s.push(O.replace(/-/g,"."))}}}let u=a.join("");return{value:a,tokens:s,declarations:u,css:it(o,u)}}var ve={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t},:host${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:t,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(o=>o.resolve(e)).find(o=>o.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return Ea(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:o}){var r,s,a,l,u,d,c;let{preset:p,options:f}=i,b,y,D,_,O,Y,We;if(E(p)&&f.transform!=="strict"){let{primitive:Be,semantic:Ge,extend:Mt}=p,lt=Ge||{},{colorScheme:Nt}=lt,Pt=Ie(lt,["colorScheme"]),xt=Mt||{},{colorScheme:Rt}=xt,ut=Ie(xt,["colorScheme"]),dt=Nt||{},{dark:kt}=dt,Bt=Ie(dt,["dark"]),$t=Rt||{},{dark:Ut}=$t,Ht=Ie($t,["dark"]),Vt=E(Be)?this._toVariables({primitive:Be},f):{},jt=E(Pt)?this._toVariables({semantic:Pt},f):{},zt=E(Bt)?this._toVariables({light:Bt},f):{},Li=E(kt)?this._toVariables({dark:kt},f):{},Fi=E(ut)?this._toVariables({semantic:ut},f):{},Ii=E(Ht)?this._toVariables({light:Ht},f):{},Oi=E(Ut)?this._toVariables({dark:Ut},f):{},[qr,Xr]=[(r=Vt.declarations)!=null?r:"",Vt.tokens],[Qr,Jr]=[(s=jt.declarations)!=null?s:"",jt.tokens||[]],[es,ts]=[(a=zt.declarations)!=null?a:"",zt.tokens||[]],[ns,is]=[(l=Li.declarations)!=null?l:"",Li.tokens||[]],[os,rs]=[(u=Fi.declarations)!=null?u:"",Fi.tokens||[]],[ss,as]=[(d=Ii.declarations)!=null?d:"",Ii.tokens||[]],[ls,us]=[(c=Oi.declarations)!=null?c:"",Oi.tokens||[]];b=this.transformCSS(t,qr,"light","variable",f,n,o),y=Xr;let ds=this.transformCSS(t,`${Qr}${es}`,"light","variable",f,n,o),cs=this.transformCSS(t,`${ns}`,"dark","variable",f,n,o);D=`${ds}${cs}`,_=[...new Set([...Jr,...ts,...is])];let ps=this.transformCSS(t,`${os}${ss}color-scheme:light`,"light","variable",f,n,o),fs=this.transformCSS(t,`${ls}color-scheme:dark`,"dark","variable",f,n,o);O=`${ps}${fs}`,Y=[...new Set([...rs,...as,...us])],We=j(p.css,{dt:Oe})}return{primitive:{css:b,tokens:y},semantic:{css:D,tokens:_},global:{css:O,tokens:Y},style:We}},getPreset({name:t="",preset:i={},options:e,params:n,set:o,defaults:r,selector:s}){var a,l,u;let d,c,p;if(E(i)&&e.transform!=="strict"){let f=t.replace("-directive",""),b=i,{colorScheme:y,extend:D,css:_}=b,O=Ie(b,["colorScheme","extend","css"]),Y=D||{},{colorScheme:We}=Y,Be=Ie(Y,["colorScheme"]),Ge=y||{},{dark:Mt}=Ge,lt=Ie(Ge,["dark"]),Nt=We||{},{dark:Pt}=Nt,xt=Ie(Nt,["dark"]),Rt=E(O)?this._toVariables({[f]:De(De({},O),Be)},e):{},ut=E(lt)?this._toVariables({[f]:De(De({},lt),xt)},e):{},dt=E(Mt)?this._toVariables({[f]:De(De({},Mt),Pt)},e):{},[kt,Bt]=[(a=Rt.declarations)!=null?a:"",Rt.tokens||[]],[$t,Ut]=[(l=ut.declarations)!=null?l:"",ut.tokens||[]],[Ht,Vt]=[(u=dt.declarations)!=null?u:"",dt.tokens||[]],jt=this.transformCSS(f,`${kt}${$t}`,"light","variable",e,o,r,s),zt=this.transformCSS(f,Ht,"dark","variable",e,o,r,s);d=`${jt}${zt}`,c=[...new Set([...Bt,...Ut,...Vt])],p=j(_,{dt:Oe})}return{css:d,tokens:c,style:p}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:o}){var r;let{preset:s,options:a}=i,l=(r=s?.components)==null?void 0:r[t];return this.getPreset({name:t,preset:l,options:a,params:e,set:n,defaults:o})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:o}){var r,s;let a=t.replace("-directive",""),{preset:l,options:u}=i,d=((r=l?.components)==null?void 0:r[a])||((s=l?.directives)==null?void 0:s[a]);return this.getPreset({name:a,preset:d,options:u,params:e,set:n,defaults:o})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:o}=i;return o?`@layer ${j(o.order||o.name||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:r}){let s=this.getCommon({name:t,theme:i,params:e,set:o,defaults:r}),a=Object.entries(n).reduce((l,[u,d])=>l.push(`${u}="${d}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[u,d])=>{if(ye(d)&&Object.hasOwn(d,"css")){let c=je(d.css),p=`${u}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${p}" ${a}>${c}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:r}){var s;let a={name:t,theme:i,params:e,set:o,defaults:r},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,u=Object.entries(n).reduce((d,[c,p])=>d.push(`${c}="${p}"`)&&d,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${u}>${je(l)}</style>`:""},createTokens(t={},i,e="",n="",o={}){let r=function(a,l={},u=[]){if(u.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:a,path:this.path,paths:l,value:void 0};u.push(this.path),l.name=this.path,l.binding||(l.binding={});let d=this.value;if(typeof this.value=="string"&&ot.test(this.value)){let c=this.value.trim().replace(ot,p=>{var f;let b=p.slice(1,-1),y=this.tokens[b];if(!y)return console.warn(`Token not found for path: ${b}`),"__UNRESOLVED__";let D=y.computed(a,l,u);return Array.isArray(D)&&D.length===2?`light-dark(${D[0].value},${D[1].value})`:(f=D?.value)!=null?f:"__UNRESOLVED__"});d=fr.test(c.replace(hr,"0"))?`calc(${c})`:c}return Ae(l.binding)&&delete l.binding,u.pop(),{colorScheme:a,path:this.path,paths:l,value:d.includes("__UNRESOLVED__")?void 0:d}},s=(a,l,u)=>{Object.entries(a).forEach(([d,c])=>{let p=ie(d,i.variable.excludedKeyRegex)?l:l?`${l}.${ar(d)}`:ar(d),f=u?`${u}.${d}`:d;ye(c)?s(c,p,f):(o[p]||(o[p]={paths:[],computed:(b,y={},D=[])=>{if(o[p].paths.length===1)return o[p].paths[0].computed(o[p].paths[0].scheme,y.binding,D);if(b&&b!=="none")for(let _=0;_<o[p].paths.length;_++){let O=o[p].paths[_];if(O.scheme===b)return O.computed(b,y.binding,D)}return o[p].paths.map(_=>_.computed(_.scheme,y[_.scheme],D))}}),o[p].paths.push({path:f,value:c,scheme:f.includes("colorScheme.light")?"light":f.includes("colorScheme.dark")?"dark":"none",computed:r,tokens:o}))})};return s(t,e,n),o},getTokenValue(t,i,e){var n;let o=(a=>a.split(".").filter(l=>!ie(l.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),r=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,s=[(n=t[o])==null?void 0:n.computed(r)].flat().filter(a=>a);return s.length===1?s[0].value:s.reduce((a={},l)=>{let u=l,{colorScheme:d}=u,c=Ie(u,["colorScheme"]);return a[d]=c,a},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?it(E(i)?`${t}${i},${t} ${i}`:t,n):it(t,it(i??":root,:host",n))},transformCSS(t,i,e,n,o={},r,s,a){if(E(i)){let{cssLayer:l}=o;if(n!=="style"){let u=this.getColorSchemeOption(o,s);i=e==="dark"?u.reduce((d,{type:c,selector:p})=>(E(p)&&(d+=p.includes("[CSS]")?p.replace("[CSS]",i):this.getSelectorRule(p,a,c,i)),d),""):it(a??":root,:host",i)}if(l){let u={name:"primeui",order:"primeui"};ye(l)&&(u.name=j(l.name,{name:t,type:n})),E(u.name)&&(i=it(`@layer ${u.name}`,i),r?.layerNames(u.name))}return i}return""}},w={defaults:{variable:{prefix:"p",selector:":root,:host",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=yi(De({},i),{options:De(De({},this.defaults.options),i.options)}),this._tokens=ve.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),re.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=yi(De({},this.theme),{preset:t}),this._tokens=ve.createTokens(t,this.defaults),this.clearLoadedStyleNames(),re.emit("preset:change",t),re.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=yi(De({},this.theme),{options:t}),this.clearLoadedStyleNames(),re.emit("options:change",t),re.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return ve.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return ve.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ve.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ve.getPresetD(e)},getCustomPreset(t="",i,e,n){let o={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ve.getPreset(o)},getLayerOrderCSS(t=""){return ve.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return ve.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return ve.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return ve.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),re.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&re.emit("theme:load"))}};var vr=`
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
`;var wa=0,Dr=(()=>{class t{document=h(Q);use(e,n={}){let o=!1,r=e,s=null,{immediate:a=!0,manual:l=!1,name:u=`style_${++wa}`,id:d=void 0,media:c=void 0,nonce:p=void 0,first:f=!1,props:b={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${u}"]`)||d&&this.document.getElementById(d)||this.document.createElement("style"),s){if(!s.isConnected){r=e;let y=this.document.head;Bo(s,"nonce",p),f&&y.firstChild?y.insertBefore(s,y.firstChild):y.appendChild(s),pn(s,{type:"text/css",media:c,nonce:p,"data-primeng-style-id":u})}s.textContent!==r&&(s.textContent=r)}return{id:d,name:u,el:s,css:r}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var st={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Aa=`
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
`,z=(()=>{class t{name="base";useStyle=h(Dr);css=void 0;style=void 0;classes={};inlineStyles={};load=(e,n={},o=r=>r)=>{let r=o(rt`${j(e,{dt:Oe})}`);return r?this.useStyle.use(je(r),m({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadStyle=(e={},n="")=>this.load(this.style,e,(o="")=>w.transformCSS(e.name||this.name,`${o}${rt`${n}`}`));loadBaseCSS=(e={})=>this.load(Aa,e);loadBaseStyle=(e={},n="")=>this.load(vr,e,(o="")=>w.transformCSS(e.name||this.name,`${o}${rt`${n}`}`));getCommonTheme=e=>w.getCommon(this.name,e);getComponentTheme=e=>w.getComponent(this.name,e);getPresetTheme=(e,n,o)=>w.getCustomPreset(this.name,e,n,o);getLayerOrderThemeCSS=()=>w.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let o=j(this.css,{dt:Oe}),r=je(rt`${o}${e}`),s=Object.entries(n).reduce((a,[l,u])=>a.push(`${l}="${u}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>w.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let o=[w.getStyleSheet(this.name,e,n)];if(this.style){let r=this.name==="base"?"global-style":`${this.name}-style`,s=rt`${j(this.style,{dt:Oe})}`,a=je(w.transformCSS(r,s)),l=Object.entries(n).reduce((u,[d,c])=>u.push(`${d}="${c}"`)&&u,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return o.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ta=(()=>{class t{theme=$(void 0);csp=$({nonce:void 0});isThemeChanged=!1;document=h(Q);baseStyle=h(z);constructor(){F(()=>{re.on("theme:change",e=>{ft(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),F(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){w.clearLoadedStyleNames(),re.clear()}onThemeChange(e){w.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!w.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,m({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,m({name:"semantic-variables"},s)),this.baseStyle.load(o?.css,m({name:"global-variables"},s)),this.baseStyle.loadBaseStyle(m({name:"global-style"},s),r),w.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:o}=e||{};n&&this.theme.set(n),o&&this.csp.set(o)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Si=(()=>{class t extends Ta{ripple=$(!1);platformId=h(Ye);inputStyle=$(null);inputVariant=$(null);overlayAppendTo=$("self");overlayOptions={};csp=$({nonce:void 0});unstyled=$(void 0);pt=$(void 0);ptOptions=$(void 0);filterMatchModeOptions={text:[K.STARTS_WITH,K.CONTAINS,K.NOT_CONTAINS,K.ENDS_WITH,K.EQUALS,K.NOT_EQUALS],numeric:[K.EQUALS,K.NOT_EQUALS,K.LESS_THAN,K.LESS_THAN_OR_EQUAL_TO,K.GREATER_THAN,K.GREATER_THAN_OR_EQUAL_TO],date:[K.DATE_IS,K.DATE_IS_NOT,K.DATE_BEFORE,K.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",completed:"Completed",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize",minimizeLabel:"Minimize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new ee;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=m(m({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:o,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:u,filterMatchModeOptions:d,overlayAppendTo:c,zIndex:p,ptOptions:f,pt:b,unstyled:y}=e||{};n&&this.csp.set(n),c&&this.overlayAppendTo.set(c),o&&this.ripple.set(o),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),u&&this.setTranslation(u),d&&(this.filterMatchModeOptions=d),p&&(this.zIndex=p),b&&this.pt.set(b),f&&this.ptOptions.set(f),y&&this.unstyled.set(y),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),_a=new A("PRIME_NG_CONFIG");function Ic(...t){let i=t?.map(n=>({provide:_a,useValue:n,multi:!1})),e=Hi(()=>{let n=h(Si);t?.forEach(o=>n.setConfig(o))});return xi([...i,e])}var Cr=(()=>{class t extends z{name="common";static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),se=new A("PARENT_INSTANCE"),W=(()=>{class t{document=h(Q);platformId=h(Ye);el=h(ce);injector=h(Rn);cd=h(Ve);renderer=h(Me);config=h(Si);$parentInstance=h(se,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=h(Cr);baseStyle=h(z);scopedStyleEl;parent=this.$params.parent;cn=Ne;_themeScopedListener;themeChangeListenerMap=new Map;dt=g();unstyled=g();pt=g();ptOptions=g();$attrSelector=Tt("pc");get $name(){return this.componentName||"UnknownComponent"}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=$(void 0);directiveUnstyled=$(void 0);$unstyled=ne(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=ne(()=>j(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,e=>j(e,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,e=>this._getOptionValue(e,this.$hostName||this.$name,this.$params)||j(e,this.$params))}get $style(){return m(m({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let e=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:e}}}onInit(){}onChanges(e){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){F(e=>{this.document&&!ii(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener("_themeScopedListener",this._themeScopedListener)):this._unloadScopedThemeStyles()),e(()=>{this._offThemeChangeListener("_themeScopedListener")})}),F(e=>{this.document&&!ii(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener("_loadCoreStyles",this._loadCoreStyles))),e(()=>{this._offThemeChangeListener("_loadCoreStyles")})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(e){this.onChanges(e),this._hook("onChanges",e)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(e,...n){return mn(e)?e(...n):ui(...n)}_getHostInstance(e){return e?this.$hostName?this.$name===this.$hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0}_getPropValue(e){return this[e]||this._getHostInstance(this)?.[e]}_getOptionValue(e,n="",o={}){return bn(e,n,o)}_hook(e,...n){if(!this.$hostName){let o=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${e}`),r=this._useDefaultPT(this._getOptionValue,`hooks.${e}`);o?.(...n),r?.(...n)}}_load(){st.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),st.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener("_load",()=>this._load())}_loadGlobalStyles(){let e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);E(e)&&this.baseStyle.load(e,m({name:"global"},this.$styleOptions))}_loadCoreStyles(){!st.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),st.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!w.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,m({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,m({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(o?.css,m({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(m({name:"global-style"},this.$styleOptions),r),w.setLoadedStyleName("common")}if(!w.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:e,style:n}=this.$style?.getComponentTheme?.()||{};this.$style?.load(e,m({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(m({name:`${this.$style?.name}-style`},this.$styleOptions),n),w.setLoadedStyleName(this.$style?.name)}if(!w.isStyleNameLoaded("layer-order")){let e=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,m({name:"layer-order",first:!0},this.$styleOptions)),w.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(e){let{css:n}=this.$style?.getPresetTheme?.(e,`[${this.$attrSelector}]`)||{},o=this.$style?.load(n,m({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e,n=()=>{}){this._offThemeChangeListener(e),st.clearLoadedStyleNames();let o=n.bind(this);this.themeChangeListenerMap.set(e,o),re.on("theme:change",o)}_removeThemeListeners(){this._offThemeChangeListener("_themeScopedListener"),this._offThemeChangeListener("_loadCoreStyles"),this._offThemeChangeListener("_load")}_offThemeChangeListener(e){this.themeChangeListenerMap.has(e)&&(re.off("theme:change",this.themeChangeListenerMap.get(e)),this.themeChangeListenerMap.delete(e))}_getPTValue(e={},n="",o={},r=!0){let s=/./g.test(n)&&!!o[n.split(".")[0]],{mergeSections:a=!0,mergeProps:l=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},u=r?s?this._useGlobalPT(this._getPTClassValue,n,o):this._useDefaultPT(this._getPTClassValue,n,o):void 0,d=s?void 0:this._usePT(this._getPT(e,this.$hostName||this.$name),this._getPTClassValue,n,$e(m({},o),{global:u||{}})),c=this._getPTDatasets(n);return a||!a&&d?l?this._mergeProps(l,u,d,c):m(m(m({},u),d),c):m(m({},d),c)}_getPTDatasets(e=""){let n="data-pc-",o=e==="root"&&E(this.$pt()?.["data-pc-section"]);return e!=="transition"&&$e(m({},e==="root"&&$e(m({[`${n}name`]:Pe(o?this.$pt()?.["data-pc-section"]:this.$name)},o&&{[`${n}extend`]:Pe(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${n}section`]:Pe(e.includes(".")?e.split(".").at(-1)??"":e)})}_getPTClassValue(e,n,o){let r=this._getOptionValue(e,n,o);return de(r)||ci(r)?{class:r}:r}_getPT(e,n="",o){let r=(s,a=!1)=>{let l=o?o(s):s,u=Pe(n),d=Pe(this.$hostName||this.$name);return(a?u!==d?l?.[u]:void 0:l?.[u])??l};return e?.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:r(e.originalValue),value:r(e.value)}:r(e,!0)}_usePT(e,n,o,r){let s=a=>n?.call(this,a,o,r);if(e?.hasOwnProperty("_usept")){let{mergeSections:a=!0,mergeProps:l=!1}=e._usept||this.config?.ptOptions()||{},u=s(e.originalValue),d=s(e.value);return u===void 0&&d===void 0?void 0:de(d)?d:de(u)?u:a||!a&&d?l?this._mergeProps(l,u,d):m(m({},u),d):d}return s(e)}_useGlobalPT(e,n,o){return this._usePT(this.$globalPT,e,n,o)}_useDefaultPT(e,n,o){return this._usePT(this.$defaultPT,e,n,o)}ptm(e="",n={}){return this._getPTValue(this.$pt(),e,m(m({},this.$params),n))}ptms(e,n={}){return e.reduce((o,r)=>(o=ui(o,this.ptm(r,n))||{},o),{})}ptmo(e={},n="",o={}){return this._getPTValue(e,n,m({instance:this},o),!1)}cx(e,n={}){return this.$unstyled()?void 0:Ne(this._getOptionValue(this.$style.classes,e,m(m({},this.$params),n)))}sx(e="",n=!0,o={}){if(n){let r=this._getOptionValue(this.$style.inlineStyles,e,m(m({},this.$params),o)),s=this._getOptionValue(this.baseComponentStyle.inlineStyles,e,m(m({},this.$params),o));return m(m({},s),r)}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=L({type:t,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[H([Cr,z]),Gt]})}return t})();var Ei=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let o=n.trim().split(" ");for(let r=0;r<o.length;r++)e.classList.add(o[r])}else{let o=n.split(" ");for(let r=0;r<o.length;r++)e.className+=" "+o[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,o=0;for(var r=0;r<n.length;r++){if(n[r]==e)return o;n[r].nodeType==1&&o++}return-1}static indexWithinGroup(e,n){let o=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==e)return r;o[s].attributes&&o[s].attributes[n]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,o="self"){o!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,o="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),o==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,o=!0){let r=Y=>{if(Y)return getComputedStyle(Y).getPropertyValue("position")==="relative"?Y:r(Y.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.offsetHeight,l=n.getBoundingClientRect(),u=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),c=this.getViewport(),f=r(e)?.getBoundingClientRect()||{top:-1*u,left:-1*d},b,y,D="top";l.top+a+s.height>c.height?(b=l.top-f.top-s.height,D="bottom",l.top+b<0&&(b=-1*l.top)):(b=a+l.top-f.top,D="top");let _=l.left+s.width-c.width,O=l.left-f.left;if(s.width>c.width?y=(l.left-f.left)*-1:_>0?y=O-_:y=l.left-f.left,e.style.top=b+"px",e.style.left=y+"px",e.style.transformOrigin=D,o){let Y=wt(/-anchor-gutter$/)?.value;e.style.marginTop=D==="bottom"?`calc(${Y??"2px"} * -1)`:Y??""}}static absolutePosition(e,n,o=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,a=r.width,l=n.offsetHeight,u=n.offsetWidth,d=n.getBoundingClientRect(),c=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),f=this.getViewport(),b,y;d.top+l+s>f.height?(b=d.top+c-s,e.style.transformOrigin="bottom",b<0&&(b=c)):(b=l+d.top+c,e.style.transformOrigin="top"),d.left+a>f.width?y=Math.max(0,d.left+p+u-a):y=d.left+p,e.style.top=b+"px",e.style.left=y+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let o=this.getParents(e),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let u=l.split(",");for(let d of u){let c=this.findSingle(a,d);c&&s(c)&&n.push(c)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let o=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),d=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,c=e.scrollTop,p=e.clientHeight,f=this.getOuterHeight(n);d<0?e.scrollTop=c+d:d+f>p&&(e.scrollTop=c+d-p+f)}static fadeIn(e,n){e.style.opacity=0;let o=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,e.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(e,n){var o=1,r=50,s=n,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),e.style.opacity=o},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let o=e.offsetWidth;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(e,n){let o=e.offsetHeight;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let e=window,n=document,o=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||o.clientWidth||r.clientWidth,a=e.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let o=e.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var o=e.indexOf("Trident/");if(o>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,o){e[n].apply(e,o)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let o=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let o=this.findSingle(e,this.getFocusableSelectorString(n));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(e,n=""){let o=this.getFocusableElements(e,n);return o.length>0?o[0]:null}static getLastFocusableElement(e,n){let o=this.getFocusableElements(e,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(e,n=!1){let o=t.getFocusableElements(e),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);n?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let o=typeof e;if(o==="string")return document.querySelector(e);if(o==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let o=e.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...o){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...o),r}}static setAttribute(e,n="",o){this.isElement(e)&&o!==null&&o!==void 0&&e.setAttribute(n,o)}static setAttributes(e,n={}){if(this.isElement(e)){let o=(r,s)=>{let a=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((l,u)=>{if(u!=null){let d=typeof u;if(d==="string"||d==="number")l.push(u);else if(d==="object"){let c=Array.isArray(u)?o(r,u):Object.entries(u).map(([p,f])=>r==="style"&&(f||f===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${f}`:f?p:void 0);l=c.length?l.concat(c.filter(p=>!!p)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();function Gc(){Lo({variableName:Ci("scrollbar.width").name})}function Kc(){Fo({variableName:Ci("scrollbar.width").name})}var Sr=class{element;listener;scrollableParents;constructor(i,e=()=>{}){this.element=i,this.listener=e}bindScrollListener(){this.scrollableParents=Ei.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Er=(()=>{class t extends W{autofocus=!1;focused=!1;platformId=h(Ye);document=h(Q);host=h(ce);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Xe(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=Ei.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275dir=L({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[M]})}return t})();var I=(()=>{class t{el;renderer;pBind=g(void 0);_attrs=$(void 0);attrs=ne(()=>this._attrs()||this.pBind());styles=ne(()=>this.attrs()?.style);classes=ne(()=>Ne(this.attrs()?.class));listeners=[];constructor(e,n){this.el=e,this.renderer=n,F(()=>{let a=this.attrs()||{},{style:o,class:r}=a,s=Mi(a,["style","class"]);for(let[l,u]of Object.entries(s))if(l.startsWith("on")&&typeof u=="function"){let d=l.slice(2).toLowerCase();if(!this.listeners.some(c=>c.eventName===d)){let c=this.renderer.listen(this.el.nativeElement,d,u);this.listeners.push({eventName:d,unlisten:c})}}else u==null?this.renderer.removeAttribute(this.el.nativeElement,l):(this.renderer.setAttribute(this.el.nativeElement,l,u.toString()),l in this.el.nativeElement&&(this.el.nativeElement[l]=u))})}ngOnDestroy(){this.clearListeners()}setAttrs(e){At(this._attrs(),e)||this._attrs.set(e)}clearListeners(){this.listeners.forEach(({unlisten:e})=>e()),this.listeners=[]}static \u0275fac=function(n){return new(n||t)(P(ce),P(Me))};static \u0275dir=L({type:t,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(n,o){n&2&&(Xi(o.styles()),q(o.classes()))},inputs:{pBind:[1,"pBind"]}})}return t})(),wn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=U({type:t});static \u0275inj=B({})}return t})();var wr=`
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
`;var La=`
    ${wr}

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
`,Fa={root:({instance:t})=>{let i=typeof t.value=="function"?t.value():t.value,e=typeof t.size=="function"?t.size():t.size,n=typeof t.badgeSize=="function"?t.badgeSize():t.badgeSize,o=typeof t.severity=="function"?t.severity():t.severity;return["p-badge p-component",{"p-badge-circle":E(i)&&String(i).length===1,"p-badge-dot":Ae(i),"p-badge-sm":e==="small"||n==="small","p-badge-lg":e==="large"||n==="large","p-badge-xl":e==="xlarge"||n==="xlarge","p-badge-info":o==="info","p-badge-success":o==="success","p-badge-warn":o==="warn","p-badge-danger":o==="danger","p-badge-secondary":o==="secondary","p-badge-contrast":o==="contrast"}]}},Ar=(()=>{class t extends z{name="badge";style=La;classes=Fa;static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var Tr=new A("BADGE_INSTANCE");var wi=(()=>{class t extends W{componentName="Badge";$pcBadge=h(Tr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(I,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=g();badgeSize=g();size=g();severity=g();value=g();badgeDisabled=g(!1,{transform:N});_componentStyle=h(Ar);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275cmp=Z({type:t,selectors:[["p-badge"]],hostVars:5,hostBindings:function(n,o){n&2&&(Se("data-p",o.dataP),q(o.cn(o.cx("root"),o.styleClass())),qi("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[H([Ar,{provide:Tr,useExisting:t},{provide:se,useExisting:t}]),pe([I]),M],decls:1,vars:1,template:function(n,o){n&1&&Xt(0),n&2&&Qt(o.value())},dependencies:[ue,xe,wn],encapsulation:2,changeDetection:0})}return t})(),_r=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=U({type:t});static \u0275inj=B({imports:[wi,xe,xe]})}return t})();var Oa=["*"],Ma={root:"p-fluid"},Lr=(()=>{class t extends z{name="fluid";classes=Ma;static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var Fr=new A("FLUID_INSTANCE"),Ai=(()=>{class t extends W{componentName="Fluid";$pcFluid=h(Fr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(I,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=h(Lr);static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275cmp=Z({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,o){n&2&&q(o.cx("root"))},features:[H([Lr,{provide:Fr,useExisting:t},{provide:se,useExisting:t}]),pe([I]),M],ngContentSelectors:Oa,decls:1,vars:0,template:function(n,o){n&1&&(Ee(),we(0))},dependencies:[ue],encapsulation:2,changeDetection:0})}return t})();var Na=["*"],Pa=`
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
`,Ir=(()=>{class t extends z{name="baseicon";css=Pa;static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Tn=(()=>{class t extends W{spin=!1;_componentStyle=h(Ir);getClassNames(){return Ne("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275cmp=Z({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,o){n&2&&q(o.getClassNames())},inputs:{spin:[2,"spin","spin",N]},features:[H([Ir]),M],ngContentSelectors:Na,decls:1,vars:0,template:function(n,o){n&1&&(Ee(),we(0))},encapsulation:2,changeDetection:0})}return t})();var xa=["data-p-icon","spinner"],Or=(()=>{class t extends Tn{pathId;onInit(){this.pathId="url(#"+Tt()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275cmp=Z({type:t,selectors:[["","data-p-icon","spinner"]],features:[M],attrs:xa,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(Ke(),$n(0,"g"),bt(1,"path",0),Un(),$n(2,"defs")(3,"clipPath",1),bt(4,"rect",2),Un()()),n&2&&(Se("clip-path",o.pathId),J(3),Wi("id",o.pathId))},encapsulation:2})}return t})();var Ra=["data-p-icon","times"],qp=(()=>{class t extends Tn{static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275cmp=Z({type:t,selectors:[["","data-p-icon","times"]],features:[M],attrs:Ra,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,o){n&1&&(Ke(),bt(0,"path",0))},encapsulation:2})}return t})();var Mr=`
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
`;var ka=`
    ${Mr}

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
`,Ba={root:"p-ink"},Nr=(()=>{class t extends z{name="ripple";style=ka;classes=Ba;static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var Pr=(()=>{class t extends W{componentName="Ripple";zone=h(Ri);_componentStyle=h(Nr);animationListener;mouseDownListener;timeout;constructor(){super(),F(()=>{Xe(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(!this.$unstyled()&&be(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"),!ri(n)&&!ai(n)){let a=Math.max(Oo(this.el.nativeElement),si(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let o=xo(this.el.nativeElement),r=e.pageX-o.left+this.document.body.scrollTop-ai(n)/2,s=e.pageY-o.top+this.document.body.scrollLeft-ri(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),!this.$unstyled()&&me(n,"p-ink-active"),n.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&(!this.$unstyled()&&be(a,"p-ink-active"),a.setAttribute("data-p-ink-active","false"))},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&be(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&be(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"data-p-ink","true"),this.renderer.setAttribute(e,"data-p-ink-active","false"),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,ko(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=L({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[H([Nr]),M]})}return t})(),uf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=U({type:t});static \u0275inj=B({})}return t})();var xr=`
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
`;var $a=["content"],Ua=["loadingicon"],Ha=["icon"],Va=["*"],Vr=(t,i)=>({class:t,pt:i});function ja(t,i){t&1&&zi(0)}function za(t,i){if(t&1&&mt(0,"span",7),t&2){let e=fe(3);q(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon))),x("pBind",e.ptm("loadingIcon")),Se("aria-hidden",!0)}}function Wa(t,i){if(t&1&&(Ke(),mt(0,"svg",8)),t&2){let e=fe(3);q(e.cn(e.cx("loadingIcon"),e.cx("spinnerIcon"))),x("pBind",e.ptm("loadingIcon"))("spin",!0),Se("aria-hidden",!0)}}function Ga(t,i){if(t&1&&(Yt(0),He(1,za,1,4,"span",3)(2,Wa,1,5,"svg",6),Zt()),t&2){let e=fe(2);J(),x("ngIf",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon)),J(),x("ngIf",!(e.loadingIcon||e.buttonProps!=null&&e.buttonProps.loadingIcon))}}function Ka(t,i){}function Ya(t,i){if(t&1&&He(0,Ka,0,0,"ng-template",9),t&2){let e=fe(2);x("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Za(t,i){if(t&1&&(Yt(0),He(1,Ga,3,2,"ng-container",2)(2,Ya,1,1,null,5),Zt()),t&2){let e=fe();J(),x("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),J(),x("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",Hn(3,Vr,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function qa(t,i){if(t&1&&mt(0,"span",7),t&2){let e=fe(2);q(e.cn(e.cx("icon"),e.icon||(e.buttonProps==null?null:e.buttonProps.icon))),x("pBind",e.ptm("icon")),Se("data-p",e.dataIconP)}}function Xa(t,i){}function Qa(t,i){if(t&1&&He(0,Xa,0,0,"ng-template",9),t&2){let e=fe(2);x("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Ja(t,i){if(t&1&&(Yt(0),He(1,qa,1,4,"span",3)(2,Qa,1,1,null,5),Zt()),t&2){let e=fe();J(),x("ngIf",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!e.iconTemplate&&!e._iconTemplate),J(),x("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Hn(3,Vr,e.cx("icon"),e.ptm("icon")))}}function el(t,i){if(t&1&&(kn(0,"span",7),Xt(1),Bn()),t&2){let e=fe();q(e.cx("label")),x("pBind",e.ptm("label")),Se("aria-hidden",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!(e.label||e.buttonProps!=null&&e.buttonProps.label))("data-p",e.dataLabelP),J(),Qt(e.label||(e.buttonProps==null?null:e.buttonProps.label))}}function tl(t,i){if(t&1&&mt(0,"p-badge",10),t&2){let e=fe();x("value",e.badge||(e.buttonProps==null?null:e.buttonProps.badge))("severity",e.badgeSeverity||(e.buttonProps==null?null:e.buttonProps.badgeSeverity))("pt",e.ptm("pcBadge"))("unstyled",e.unstyled())}}var nl={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!t.label&&!t.buttonProps?.label&&!t.badge,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label,"p-button-icon-top":(t.iconPos==="top"||t.buttonProps?.iconPos==="top")&&t.label||t.buttonProps?.label,"p-button-icon-bottom":(t.iconPos==="bottom"||t.buttonProps?.iconPos==="bottom")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.cx("icon")).filter(([,i])=>!!i).reduce((i,[e])=>i+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},at=(()=>{class t extends z{name="button";style=xr;classes=nl;static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var Rr=new A("BUTTON_INSTANCE"),kr=new A("BUTTON_DIRECTIVE_INSTANCE"),Br=new A("BUTTON_LABEL_INSTANCE"),$r=new A("BUTTON_ICON_INSTANCE"),ke={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},Ur=(()=>{class t extends W{ptButtonLabel=g();pButtonLabelPT=g();pButtonLabelUnstyled=g();$pcButtonLabel=h(Br,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(I,{self:!0});constructor(){super(),F(()=>{let e=this.ptButtonLabel()||this.pButtonLabelPT();e&&this.directivePT.set(e)}),F(()=>{this.pButtonLabelUnstyled()&&this.directiveUnstyled.set(this.pButtonLabelUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=L({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,o){n&2&&qt("p-button-label",!o.$unstyled()&&!0)},inputs:{ptButtonLabel:[1,"ptButtonLabel"],pButtonLabelPT:[1,"pButtonLabelPT"],pButtonLabelUnstyled:[1,"pButtonLabelUnstyled"]},features:[H([at,{provide:Br,useExisting:t},{provide:se,useExisting:t}]),pe([I]),M]})}return t})(),Hr=(()=>{class t extends W{ptButtonIcon=g();pButtonIconPT=g();pButtonUnstyled=g();$pcButtonIcon=h($r,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(I,{self:!0});constructor(){super(),F(()=>{let e=this.ptButtonIcon()||this.pButtonIconPT();e&&this.directivePT.set(e)}),F(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=L({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,o){n&2&&qt("p-button-icon",!o.$unstyled()&&!0)},inputs:{ptButtonIcon:[1,"ptButtonIcon"],pButtonIconPT:[1,"pButtonIconPT"],pButtonUnstyled:[1,"pButtonUnstyled"]},features:[H([at,{provide:$r,useExisting:t},{provide:se,useExisting:t}]),pe([I]),M]})}return t})(),xf=(()=>{class t extends W{$pcButtonDirective=h(kr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(I,{self:!0});_componentStyle=h(at);ptButtonDirective=g();pButtonPT=g();pButtonUnstyled=g();hostName="";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}constructor(){super(),F(()=>{let e=this.ptButtonDirective()||this.pButtonPT();e&&this.directivePT.set(e)}),F(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())}),F(()=>{let e=this.$unstyled();this.initialized&&e&&this.setStyleClass()})}text=!1;plain=!1;raised=!1;size;outlined=!1;rounded=!1;iconPos="left";loadingIcon;fluid=g(void 0,{transform:N});iconSignal=Vn(Hr);labelSignal=Vn(Ur);isIconOnly=ne(()=>!!(!this.labelSignal()&&this.iconSignal()));_label;_icon;_loading=!1;_severity;_buttonProps;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(ke);pcFluid=h(Ai,{optional:!0,host:!0,skipSelf:!0});isTextButton=ne(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}get icon(){return this._icon}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
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
    </svg>`;onAfterViewInit(){!this.$unstyled()&&me(this.htmlElement,this.getStyleClass().join(" ")),Xe(this.platformId)&&(this.createIcon(),this.createLabel(),this.initialized=!0)}getStyleClass(){let e=[ke.button,ke.component];return this.icon&&!this.label&&Ae(this.htmlElement.textContent)&&e.push(ke.iconOnly),this.loading&&(e.push(ke.disabled,ke.loading),!this.icon&&this.label&&e.push(ke.labelOnly),this.icon&&!this.label&&!Ae(this.htmlElement.textContent)&&e.push(ke.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),this.$unstyled()?[]:e}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(o=>e.some(r=>o===`p-button-${r}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!Je(this.htmlElement,'[data-pc-section="buttonlabel"]')&&this.label){let n=fn("span",{class:this.cx("label"),"p-bind":this.ptm("buttonlabel"),"aria-hidden":this.icon&&!this.label?"true":null});n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!Je(this.htmlElement,'[data-pc-section="buttonicon"]')&&(this.icon||this.loading)){let n=this.label&&!this.$unstyled()?"p-button-icon-"+this.iconPos:null,o=!this.$unstyled()&&this.getIconClass(),r=fn("span",{class:this.cn(this.cx("icon"),n,o),"aria-hidden":"true","p-bind":this.ptm("buttonicon")});!this.loadingIcon&&this.loading&&(r.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(r,this.htmlElement.firstChild)}}updateLabel(){let e=Je(this.htmlElement,'[data-pc-section="buttonlabel"]');if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=Je(this.htmlElement,'[data-pc-section="buttonicon"]'),n=Je(this.htmlElement,'[data-pc-section="buttonlabel"]');this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e&&!this.$unstyled()?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}onDestroy(){this.initialized=!1}static \u0275fac=function(n){return new(n||t)};static \u0275dir=L({type:t,selectors:[["","pButton",""]],contentQueries:function(n,o,r){n&1&&Yi(r,o.iconSignal,Hr,5)(r,o.labelSignal,Ur,5),n&2&&Zi(2)},hostVars:4,hostBindings:function(n,o){n&2&&qt("p-button-icon-only",!o.$unstyled()&&o.isIconOnly())("p-button-text",!o.$unstyled()&&o.isTextButton())},inputs:{ptButtonDirective:[1,"ptButtonDirective"],pButtonPT:[1,"pButtonPT"],pButtonUnstyled:[1,"pButtonUnstyled"],hostName:"hostName",text:[2,"text","text",N],plain:[2,"plain","plain",N],raised:[2,"raised","raised",N],size:"size",outlined:[2,"outlined","outlined",N],rounded:[2,"rounded","rounded",N],iconPos:"iconPos",loadingIcon:"loadingIcon",fluid:[1,"fluid"],label:"label",icon:"icon",loading:"loading",buttonProps:"buttonProps",severity:"severity"},features:[H([at,{provide:kr,useExisting:t},{provide:se,useExisting:t}]),pe([I]),M]})}return t})(),il=(()=>{class t extends W{componentName="Button";hostName="";$pcButton=h(Rr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(I,{self:!0});_componentStyle=h(at);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=g(void 0,{transform:N});onClick=new Wt;onFocus=new Wt;onBlur=new Wt;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=h(Ai,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275cmp=Z({type:t,selectors:[["p-button"]],contentQueries:function(n,o,r){if(n&1&&Ki(r,$a,5)(r,Ua,5)(r,Ha,5)(r,Zo,4),n&2){let s;yt(s=vt())&&(o.contentTemplate=s.first),yt(s=vt())&&(o.loadingIconTemplate=s.first),yt(s=vt())&&(o.iconTemplate=s.first),yt(s=vt())&&(o.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",N],raised:[2,"raised","raised",N],rounded:[2,"rounded","rounded",N],text:[2,"text","text",N],plain:[2,"plain","plain",N],outlined:[2,"outlined","outlined",N],link:[2,"link","link",N],tabindex:[2,"tabindex","tabindex",jn],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",N],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",N],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[H([at,{provide:Rr,useExisting:t},{provide:se,useExisting:t}]),pe([I]),M],ngContentSelectors:Va,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(n,o){n&1&&(Ee(),kn(0,"button",0),Gi("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),we(1),He(2,ja,1,0,"ng-container",1)(3,Za,3,6,"ng-container",2)(4,Ja,3,6,"ng-container",2)(5,el,2,6,"span",3)(6,tl,1,4,"p-badge",4),Bn()),n&2&&(q(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),x("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus))("pBind",o.ptm("root")),Se("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex))("data-p",o.dataP)("data-p-disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("data-p-severity",o.severity||(o.buttonProps==null?null:o.buttonProps.severity)),J(2),x("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),J(),x("ngIf",o.loading||(o.buttonProps==null?null:o.buttonProps.loading)),J(),x("ngIf",!(o.loading||o.buttonProps!=null&&o.buttonProps.loading)),J(),x("ngIf",!o.contentTemplate&&!o._contentTemplate&&(o.label||(o.buttonProps==null?null:o.buttonProps.label))),J(),x("ngIf",!o.contentTemplate&&!o._contentTemplate&&(o.badge||(o.buttonProps==null?null:o.buttonProps.badge))))},dependencies:[ue,Qn,ei,Jn,Pr,Er,Or,_r,wi,xe,I],encapsulation:2,changeDetection:0})}return t})(),Rf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=U({type:t});static \u0275inj=B({imports:[ue,il,xe,xe]})}return t})();var jr=class t{static isArray(i,e=!0){return Array.isArray(i)&&(e||i.length!==0)}static isObject(i,e=!0){return typeof i=="object"&&!Array.isArray(i)&&i!=null&&(e||Object.keys(i).length!==0)}static equals(i,e,n){return n?this.resolveFieldData(i,n)===this.resolveFieldData(e,n):this.equalsByValue(i,e)}static equalsByValue(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),o=Array.isArray(e),r,s,a;if(n&&o){if(s=i.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.equalsByValue(i[r],e[r]))return!1;return!0}if(n!=o)return!1;var l=this.isDate(i),u=this.isDate(e);if(l!=u)return!1;if(l&&u)return i.getTime()==e.getTime();var d=i instanceof RegExp,c=e instanceof RegExp;if(d!=c)return!1;if(d&&c)return i.toString()==e.toString();var p=Object.keys(i);if(s=p.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!this.equalsByValue(i[a],e[a]))return!1;return!0}return i!==i&&e!==e}static resolveFieldData(i,e){if(i&&e){if(this.isFunction(e))return e(i);if(e.indexOf(".")==-1)return i[e];{let n=e.split("."),o=i;for(let r=0,s=n.length;r<s;++r){if(o==null)return null;o=o[n[r]]}return o}}else return null}static isFunction(i){return!!(i&&i.constructor&&i.call&&i.apply)}static reorderArray(i,e,n){let o;i&&e!==n&&(n>=i.length&&(n%=i.length,e%=i.length),i.splice(n,0,i.splice(e,1)[0]))}static insertIntoOrderedArray(i,e,n,o){if(n.length>0){let r=!1;for(let s=0;s<n.length;s++)if(this.findIndexInList(n[s],o)>e){n.splice(s,0,i),r=!0;break}r||n.push(i)}else n.push(i)}static findIndexInList(i,e){let n=-1;if(e){for(let o=0;o<e.length;o++)if(e[o]==i){n=o;break}}return n}static contains(i,e){if(i!=null&&e&&e.length){for(let n of e)if(this.equals(i,n))return!0}return!1}static removeAccents(i){return i&&(i=i.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),i}static isDate(i){return Object.prototype.toString.call(i)==="[object Date]"}static isEmpty(i){return i==null||i===""||Array.isArray(i)&&i.length===0||!this.isDate(i)&&typeof i=="object"&&Object.keys(i).length===0}static isNotEmpty(i){return!this.isEmpty(i)}static compare(i,e,n,o=1){let r=-1,s=this.isEmpty(i),a=this.isEmpty(e);return s&&a?r=0:s?r=o:a?r=-o:typeof i=="string"&&typeof e=="string"?r=i.localeCompare(e,n,{numeric:!0}):r=i<e?-1:i>e?1:0,r}static sort(i,e,n=1,o,r=1){let s=t.compare(i,e,o,n),a=n;return(t.isEmpty(i)||t.isEmpty(e))&&(a=r===1?n:r),a*s}static merge(i,e){if(!(i==null&&e==null)){{if((i==null||typeof i=="object")&&(e==null||typeof e=="object"))return m(m({},i||{}),e||{});if((i==null||typeof i=="string")&&(e==null||typeof e=="string"))return[i||"",e||""].join(" ")}return e||i}}static isPrintableCharacter(i=""){return this.isNotEmpty(i)&&i.length===1&&i.match(/\S| /)}static getItemValue(i,...e){return this.isFunction(i)?i(...e):i}static findLastIndex(i,e){let n=-1;if(this.isNotEmpty(i))try{n=i.findLastIndex(e)}catch{n=i.lastIndexOf([...i].reverse().find(e))}return n}static findLast(i,e){let n;if(this.isNotEmpty(i))try{n=i.findLast(e)}catch{n=[...i].reverse().find(e)}return n}static deepEquals(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),o=Array.isArray(e),r,s,a;if(n&&o){if(s=i.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.deepEquals(i[r],e[r]))return!1;return!0}if(n!=o)return!1;var l=i instanceof Date,u=e instanceof Date;if(l!=u)return!1;if(l&&u)return i.getTime()==e.getTime();var d=i instanceof RegExp,c=e instanceof RegExp;if(d!=c)return!1;if(d&&c)return i.toString()==e.toString();var p=Object.keys(i);if(s=p.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!this.deepEquals(i[a],e[a]))return!1;return!0}return i!==i&&e!==e}static minifyCSS(i){return i&&i.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(i){return this.isString(i)?i.replace(/(-|_)/g,"").toLowerCase():i}static isString(i,e=!0){return typeof i=="string"&&(e||i!=="")}},zr=0;function $f(t="pn_id_"){return zr++,`${t}${zr}`}function ol(){let t=[],i=(r,s)=>{let a=t.length>0?t[t.length-1]:{key:r,value:s},l=a.value+(a.key===r?0:s)+2;return t.push({key:r,value:l}),l},e=r=>{t=t.filter(s=>s.value!==r)},n=()=>t.length>0?t[t.length-1].value:0,o=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:o,set:(r,s,a)=>{s&&(s.style.zIndex=String(i(r,a)))},clear:r=>{r&&(e(o(r)),r.style.zIndex="")},getCurrent:()=>n(),generateZIndex:i,revertZIndex:e}}var Uf=ol();var rl=Object.defineProperty,Wr=Object.getOwnPropertySymbols,sl=Object.prototype.hasOwnProperty,al=Object.prototype.propertyIsEnumerable,Gr=(t,i,e)=>i in t?rl(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,Kr=(t,i)=>{for(var e in i||(i={}))sl.call(i,e)&&Gr(t,e,i[e]);if(Wr)for(var e of Wr(i))al.call(i,e)&&Gr(t,e,i[e]);return t},ll=(t,i,e)=>new Promise((n,o)=>{var r=l=>{try{a(e.next(l))}catch(u){o(u)}},s=l=>{try{a(e.throw(l))}catch(u){o(u)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,s);a((e=e.apply(t,i)).next())}),_n="animation",It="transition";function ul(t){return t?t.disabled||!!(t.safe&&Ro()):!1}function dl(t,i){return t?Kr(Kr({},t),Object.entries(i).reduce((e,[n,o])=>{var r;return e[n]=(r=t[n])!=null?r:o,e},{})):i}function cl(t){let{name:i,enterClass:e,leaveClass:n}=t||{};return{enter:{from:e?.from||`${i}-enter-from`,to:e?.to||`${i}-enter-to`,active:e?.active||`${i}-enter-active`},leave:{from:n?.from||`${i}-leave-from`,to:n?.to||`${i}-leave-to`,active:n?.active||`${i}-leave-active`}}}function pl(t){return{enter:{onBefore:t?.onBeforeEnter,onStart:t?.onEnter,onAfter:t?.onAfterEnter,onCancelled:t?.onEnterCancelled},leave:{onBefore:t?.onBeforeLeave,onStart:t?.onLeave,onAfter:t?.onAfterLeave,onCancelled:t?.onLeaveCancelled}}}function fl(t,i){let e=window.getComputedStyle(t),n=f=>{let b=e[`${f}Delay`],y=e[`${f}Duration`];return[b.split(", ").map(pi),y.split(", ").map(pi)]},[o,r]=n(It),[s,a]=n(_n),l=Math.max(...r.map((f,b)=>f+o[b])),u=Math.max(...a.map((f,b)=>f+s[b])),d,c=0,p=0;return i===It?l>0&&(d=It,c=l,p=r.length):i===_n?u>0&&(d=_n,c=u,p=a.length):(c=Math.max(l,u),d=c>0?l>u?It:_n:void 0,p=d?d===It?r.length:a.length:0),{type:d,timeout:c,count:p}}function hl(t,i){return typeof t=="number"?t:typeof t=="object"&&t[i]!=null?t[i]:null}function gl(t,i=!0,e=!1){if(!i&&!e)return;let n=cn(t);i&&li(t,"--pui-motion-height",n.height+"px"),e&&li(t,"--pui-motion-width",n.width+"px")}var ml={name:"p",safe:!0,disabled:!1,enter:!0,leave:!0,autoHeight:!0,autoWidth:!1};function Ti(t,i){if(!t)throw new Error("Element is required.");let e={},n=!1,o={},r=null,s={},a=d=>{if(Object.assign(e,dl(d,ml)),!e.enter&&!e.leave)throw new Error("Enter or leave must be true.");s=pl(e),n=ul(e),o=cl(e),r=null},l=d=>ll(null,null,function*(){r?.();let{onBefore:c,onStart:p,onAfter:f,onCancelled:b}=s[d]||{},y={element:t};if(n){c?.(y),p?.(y),f?.(y);return}let{from:D,active:_,to:O}=o[d]||{};return gl(t,e.autoHeight,e.autoWidth),c?.(y),me(t,D),me(t,_),t.offsetHeight,be(t,D),me(t,O),p?.(y),new Promise(Y=>{let We=hl(e.duration,d),Be=()=>{be(t,[O,_]),r=null},Ge=()=>{Be(),f?.(y),Y()};r=()=>{Be(),b?.(y),Y()},yl(t,e.type,We,Ge)})});a(i);let u={enter:()=>e.enter?l("enter"):Promise.resolve(),leave:()=>e.leave?l("leave"):Promise.resolve(),cancel:()=>{r?.(),r=null},update:(d,c)=>{if(!d)throw new Error("Element is required.");t=d,u.cancel(),a(c)}};return e.appear&&u.enter(),u}var bl=0;function yl(t,i,e,n){let o=t._motionEndId=++bl,r=()=>{o===t._motionEndId&&n()};if(e!=null)return setTimeout(r,e);let{type:s,timeout:a,count:l}=fl(t,i);if(!s){n();return}let u=s+"end",d=0,c=()=>{t.removeEventListener(u,p,!0),r()},p=f=>{f.target===t&&++d>=l&&c()};t.addEventListener(u,p,{capture:!0,once:!0}),setTimeout(()=>{d<l&&c()},a+1)}var vl=["*"];function Dl(t,i){t&1&&we(0)}var Ln=new WeakMap;function Ot(t,i){if(t)switch(Ln.has(t)||Ln.set(t,{display:t.style.display,visibility:t.style.visibility,maxHeight:t.style.maxHeight}),i){case"display":t.style.display="none";break;case"visibility":t.style.visibility="hidden",t.style.maxHeight="0";break}}function Fn(t,i){if(!t)return;let e=Ln.get(t)??t.style;switch(i){case"display":t.style.display=e?.display||"";break;case"visibility":t.style.visibility=e?.visibility||"",t.style.maxHeight=e?.maxHeight||"";break}Ln.delete(t)}var Cl=`
    .p-motion {
        display: block;
    }
`,Sl={root:"p-motion"},_i=(()=>{class t extends z{name="motion";style=Cl;classes=Sl;static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var Yr=new A("MOTION_INSTANCE"),El=(()=>{class t extends W{$pcMotion=h(Yr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(I,{self:!0});onAfterViewChecked(){let n=this.options()?.root||{};this.bindDirectiveInstance.setAttrs(m(m({},this.ptms(["host","root"])),n))}_componentStyle=h(_i);visible=g(!1);mountOnEnter=g(!0);unmountOnLeave=g(!0);name=g(void 0);type=g(void 0);safe=g(void 0);disabled=g(!1);appear=g(!1);enter=g(!0);leave=g(!0);duration=g(void 0);hideStrategy=g("display");enterFromClass=g(void 0);enterToClass=g(void 0);enterActiveClass=g(void 0);leaveFromClass=g(void 0);leaveToClass=g(void 0);leaveActiveClass=g(void 0);options=g({});onBeforeEnter=G();onEnter=G();onAfterEnter=G();onEnterCancelled=G();onBeforeLeave=G();onLeave=G();onAfterLeave=G();onLeaveCancelled=G();motionOptions=ne(()=>{let e=this.options();return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;rendered=$(!1);handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),F(()=>{let e=this.hideStrategy();this.isInitialMount?(Ot(this.$el,e),this.rendered.set(this.visible()&&this.mountOnEnter()||!this.mountOnEnter())):this.visible()&&!this.rendered()&&(Ot(this.$el,e),this.rendered.set(!0))}),F(()=>{this.motion||(this.motion=Ti(this.$el,this.motionOptions()))}),zn(async()=>{if(!this.$el)return;let e=this.isInitialMount&&this.visible()&&this.appear(),n=this.hideStrategy();this.visible()?(await hn(),Fn(this.$el,n),(e||!this.isInitialMount)&&this.motion?.enter()):this.isInitialMount||(await hn(),this.motion?.leave()?.then(async()=>{this.$el&&!this.cancelled&&!this.visible()&&(Ot(this.$el,n),this.unmountOnLeave()&&(await hn(),this.cancelled||this.rendered.set(!1)))})),this.isInitialMount=!1})}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,Fn(this.$el,this.hideStrategy()),this.$el?.remove(),this.isInitialMount=!0}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=Z({type:t,selectors:[["p-motion"]],hostVars:2,hostBindings:function(n,o){n&2&&q(o.cx("root"))},inputs:{visible:[1,"visible"],mountOnEnter:[1,"mountOnEnter"],unmountOnLeave:[1,"unmountOnLeave"],name:[1,"name"],type:[1,"type"],safe:[1,"safe"],disabled:[1,"disabled"],appear:[1,"appear"],enter:[1,"enter"],leave:[1,"leave"],duration:[1,"duration"],hideStrategy:[1,"hideStrategy"],enterFromClass:[1,"enterFromClass"],enterToClass:[1,"enterToClass"],enterActiveClass:[1,"enterActiveClass"],leaveFromClass:[1,"leaveFromClass"],leaveToClass:[1,"leaveToClass"],leaveActiveClass:[1,"leaveActiveClass"],options:[1,"options"]},outputs:{onBeforeEnter:"onBeforeEnter",onEnter:"onEnter",onAfterEnter:"onAfterEnter",onEnterCancelled:"onEnterCancelled",onBeforeLeave:"onBeforeLeave",onLeave:"onLeave",onAfterLeave:"onAfterLeave",onLeaveCancelled:"onLeaveCancelled"},features:[H([_i,{provide:Yr,useExisting:t},{provide:se,useExisting:t}]),pe([I]),M],ngContentSelectors:vl,decls:1,vars:1,template:function(n,o){n&1&&(Ee(),Vi(0,Dl,1,0)),n&2&&ji(o.rendered()?0:-1)},dependencies:[ue,wn],encapsulation:2})}return t})(),Zr=new A("MOTION_DIRECTIVE_INSTANCE"),ih=(()=>{class t extends W{$pcMotionDirective=h(Zr,{optional:!0,skipSelf:!0})??void 0;visible=g(!1,{alias:"pMotion"});name=g(void 0,{alias:"pMotionName"});type=g(void 0,{alias:"pMotionType"});safe=g(void 0,{alias:"pMotionSafe"});disabled=g(!1,{alias:"pMotionDisabled"});appear=g(!1,{alias:"pMotionAppear"});enter=g(!0,{alias:"pMotionEnter"});leave=g(!0,{alias:"pMotionLeave"});duration=g(void 0,{alias:"pMotionDuration"});hideStrategy=g("display",{alias:"pMotionHideStrategy"});enterFromClass=g(void 0,{alias:"pMotionEnterFromClass"});enterToClass=g(void 0,{alias:"pMotionEnterToClass"});enterActiveClass=g(void 0,{alias:"pMotionEnterActiveClass"});leaveFromClass=g(void 0,{alias:"pMotionLeaveFromClass"});leaveToClass=g(void 0,{alias:"pMotionLeaveToClass"});leaveActiveClass=g(void 0,{alias:"pMotionLeaveActiveClass"});options=g({},{alias:"pMotionOptions"});onBeforeEnter=G({alias:"pMotionOnBeforeEnter"});onEnter=G({alias:"pMotionOnEnter"});onAfterEnter=G({alias:"pMotionOnAfterEnter"});onEnterCancelled=G({alias:"pMotionOnEnterCancelled"});onBeforeLeave=G({alias:"pMotionOnBeforeLeave"});onLeave=G({alias:"pMotionOnLeave"});onAfterLeave=G({alias:"pMotionOnAfterLeave"});onLeaveCancelled=G({alias:"pMotionOnLeaveCancelled"});motionOptions=ne(()=>{let e=this.options()??{};return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),F(()=>{this.motion||(this.motion=Ti(this.$el,this.motionOptions()))}),zn(()=>{if(!this.$el)return;let e=this.isInitialMount&&this.visible()&&this.appear(),n=this.hideStrategy();this.visible()?(Fn(this.$el,n),(e||!this.isInitialMount)&&this.motion?.enter()):this.isInitialMount?Ot(this.$el,n):this.motion?.leave()?.then(()=>{this.$el&&!this.cancelled&&!this.visible()&&Ot(this.$el,n)}),this.isInitialMount=!1})}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,Fn(this.$el,this.hideStrategy()),this.isInitialMount=!0}static \u0275fac=function(n){return new(n||t)};static \u0275dir=L({type:t,selectors:[["","pMotion",""]],inputs:{visible:[1,"pMotion","visible"],name:[1,"pMotionName","name"],type:[1,"pMotionType","type"],safe:[1,"pMotionSafe","safe"],disabled:[1,"pMotionDisabled","disabled"],appear:[1,"pMotionAppear","appear"],enter:[1,"pMotionEnter","enter"],leave:[1,"pMotionLeave","leave"],duration:[1,"pMotionDuration","duration"],hideStrategy:[1,"pMotionHideStrategy","hideStrategy"],enterFromClass:[1,"pMotionEnterFromClass","enterFromClass"],enterToClass:[1,"pMotionEnterToClass","enterToClass"],enterActiveClass:[1,"pMotionEnterActiveClass","enterActiveClass"],leaveFromClass:[1,"pMotionLeaveFromClass","leaveFromClass"],leaveToClass:[1,"pMotionLeaveToClass","leaveToClass"],leaveActiveClass:[1,"pMotionLeaveActiveClass","leaveActiveClass"],options:[1,"pMotionOptions","options"]},outputs:{onBeforeEnter:"pMotionOnBeforeEnter",onEnter:"pMotionOnEnter",onAfterEnter:"pMotionOnAfterEnter",onEnterCancelled:"pMotionOnEnterCancelled",onBeforeLeave:"pMotionOnBeforeLeave",onLeave:"pMotionOnLeave",onAfterLeave:"pMotionOnAfterLeave",onLeaveCancelled:"pMotionOnLeaveCancelled"},features:[H([_i,{provide:Zr,useExisting:t},{provide:se,useExisting:t}]),M]})}return t})(),oh=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=U({type:t});static \u0275inj=B({imports:[El]})}return t})();export{Jt as a,hs as b,Wn as c,Ze as d,gs as e,qe as f,ro as g,so as h,vs as i,Ms as j,Eo as k,Qn as l,Jn as m,ei as n,xs as o,ks as p,ue as q,Bs as r,ti as s,Us as t,Xe as u,Zu as v,_o as w,me as x,be as y,Io as z,Ws as A,Gs as B,id as C,od as D,Oo as E,rd as F,Qe as G,Zs as H,sd as I,fn as J,ad as K,qs as L,Je as M,ld as N,ud as O,Po as P,dd as Q,ri as R,cd as S,pd as T,si as U,fd as V,ai as W,hd as X,gd as Y,md as Z,bd as _,yd as $,Bo as aa,Ae as ba,sa as ca,E as da,gn as ea,At as fa,Sd as ga,Ed as ha,j as ia,wd as ja,Ad as ka,Tt as la,la as ma,Od as na,K as oa,Md as pa,Nd as qa,Pd as ra,xd as sa,Rd as ta,Zo as ua,xe as va,kd as wa,Jd as xa,oc as ya,z as za,Si as Aa,Ic as Ba,tt as Ca,gi as Da,Kd as Ea,Yd as Fa,Zd as Ga,se as Ha,W as Ia,Pr as Ja,uf as Ka,I as La,wn as Ma,Ai as Na,Ei as Oa,Gc as Pa,Kc as Qa,Sr as Ra,Er as Sa,wi as Ta,_r as Ua,Tn as Va,Or as Wa,qp as Xa,xf as Ya,il as Za,Rf as _a,jr as $a,$f as ab,Uf as bb,El as cb,ih as db,oh as eb};
