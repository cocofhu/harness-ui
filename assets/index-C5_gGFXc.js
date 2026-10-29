const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/IconGallery-D4iqCc2x.js","assets/IconGallery-EEQdn2tp.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Fe={},On=[],qt=()=>{},Ea=()=>!1,si=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ai=e=>e.startsWith("onUpdate:"),tt=Object.assign,us=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Nl=Object.prototype.hasOwnProperty,Be=(e,t)=>Nl.call(e,t),be=Array.isArray,yn=e=>xo(e)==="[object Map]",Yn=e=>xo(e)==="[object Set]",Cs=e=>xo(e)==="[object Date]",Ae=e=>typeof e=="function",Je=e=>typeof e=="string",Rt=e=>typeof e=="symbol",He=e=>e!==null&&typeof e=="object",Ca=e=>(He(e)||Ae(e))&&Ae(e.then)&&Ae(e.catch),Oa=Object.prototype.toString,xo=e=>Oa.call(e),xl=e=>xo(e).slice(8,-1),Ua=e=>xo(e)==="[object Object]",ds=e=>Je(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,so=cs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ri=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},bl=/-\w/g,bt=ri(e=>e.replace(bl,t=>t.slice(1).toUpperCase())),Ll=/\B([A-Z])/g,jn=ri(e=>e.replace(Ll,"-$1").toLowerCase()),li=ri(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ti=ri(e=>e?`on${li(e)}`:""),Jt=(e,t)=>!Object.is(e,t),Yo=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Qa=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})},ci=e=>{const t=parseFloat(e);return isNaN(t)?e:t},jl=e=>{const t=Je(e)?Number(e):NaN;return isNaN(t)?e:t};let Os;const ui=()=>Os||(Os=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Et(e){if(be(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],i=Je(o)?Tl(o):Et(o);if(i)for(const s in i)t[s]=i[s]}return t}else if(Je(e)||He(e))return e}const Dl=/;(?![^(]*\))/g,wl=/:([^]+)/,Il=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Tl(e){const t={};return e.replace(Il,n=>n.startsWith("/*")?"":n).split(Dl).forEach(n=>{if(n){const o=n.split(wl);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function ye(e){let t="";if(Je(e))t=e;else if(be(e))for(let n=0;n<e.length;n++){const o=ye(e[n]);o&&(t+=o+" ")}else if(He(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const zl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Al=cs(zl);function Ya(e){return!!e||e===""}function kl(e,t,n){if(e.length!==t.length)return!1;let o=!0;for(let i=0;o&&i<e.length;i++)o=Nn(e[i],t[i],n);return o}function Us(e,t,n){if(e.size!==t.size)return!1;const o=Array.from(t),i=new Uint8Array(o.length);for(const s of e){let a=-1;for(let r=0;r<o.length;r++)if(!i[r]&&Nn(s,o[r],n)){a=r;break}if(a<0)return!1;i[a]=1}return!0}function Sl(e,t,n){let o=yn(e),i=yn(t);if(o||i||(o=Yn(e),i=Yn(t),o||i))return o&&i?Us(e,t,n):!1;const s=Object.keys(e).length,a=Object.keys(t).length;if(s!==a)return!1;for(const r in e){const c=e.hasOwnProperty(r),u=t.hasOwnProperty(r);if(c&&!u||!c&&u||!Nn(e[r],t[r],n))return!1}return String(e)===String(t)}function Qs(e,t,n,o){n||(n=[new Map,new Map]);const[i,s]=n;if(i.has(e)||s.has(t))return i.get(e)===t&&s.get(t)===e;i.set(e,t),s.set(t,e);const a=o(e,t,n);return i.delete(e),s.delete(t),a}function Nn(e,t,n){if(e===t)return!0;let o=Cs(e),i=Cs(t);return o||i?o&&i?e.getTime()===t.getTime():!1:(o=Rt(e),i=Rt(t),o||i?e===t:(o=be(e),i=be(t),o||i?o&&i?Qs(e,t,n,kl):!1:(o=He(e),i=He(t),o||i?!o||!i?!1:Qs(e,t,n,Sl):String(e)===String(t))))}function El(e,t){return e.findIndex(n=>Nn(n,t))}const Pa=e=>!!(e&&e.__v_isRef===!0),te=e=>Je(e)?e:e==null?"":be(e)||He(e)&&(e.toString===Oa||!Ae(e.toString))?Pa(e)?te(e.value):JSON.stringify(e,_a,2):String(e),_a=(e,t)=>Pa(t)?_a(e,t.value):yn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,i],s)=>(n[zi(o,s)+" =>"]=i,n),{})}:Yn(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>zi(n))}:Rt(t)?zi(t):He(t)&&!be(t)&&!Ua(t)?String(t):t,zi=(e,t="")=>{var n;return Rt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ct;class Cl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&ct&&(ct.active?(this.parent=ct,this.index=(ct.scopes||(ct.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const o=this.scopes.slice();for(t=0,n=o.length;t<n;t++)o[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const i=this.scopes.slice();for(t=0,n=i.length;t<n;t++)i[t].resume()}const o=this.effects.slice();for(t=0,n=o.length;t<n;t++)o[t].resume()}}run(t){if(this._active){const n=ct;try{return ct=this,t()}finally{ct=n}}}on(){++this._on===1&&(this.prevScope=ct,ct=this)}off(){if(this._on>0&&--this._on===0){if(ct===this)ct=this.prevScope;else{let t=ct;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(this.effects.length=0,n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const i=this.scopes.slice();for(n=0,o=i.length;n<o;n++)i[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ol(){return ct}let Ke;const Ai=new WeakSet;class $a{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ct&&(ct.active?ct.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ai.has(this)&&(Ai.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wa(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ys(this),Ba(this);const t=Ke,n=$t;Ke=this,$t=!0;try{return this.fn()}finally{Ha(this),Ke=t,$t=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)gs(t);this.deps=this.depsTail=void 0,Ys(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ai.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vi(this)&&this.run()}get dirty(){return Vi(this)}}let Ra=0,ao,ro;function Wa(e,t=!1){if(e.flags|=8,t){e.next=ro,ro=e;return}e.next=ao,ao=e}function ps(){Ra++}function Ms(){if(--Ra>0)return;if(ro){let t=ro;for(ro=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;ao;){let t=ao;for(ao=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(o){e||(e=o)}t=n}}if(e)throw e}function Ba(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ha(e){let t,n=e.depsTail,o=n;for(;o;){const i=o.prevDep;o.version===-1?(o===n&&(n=i),gs(o),Ul(o)):t=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=i}e.deps=t,e.depsTail=n}function Vi(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Va(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Va(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Mo)||(e.globalVersion=Mo,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Vi(e))))return;e.flags|=2;const t=e.dep,n=Ke,o=$t;Ke=e,$t=!0;try{Ba(e);const i=e.fn(e._value);(t.version===0||Jt(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{Ke=n,$t=o,Ha(e),e.flags&=-3}}function gs(e,t=!1){const{dep:n,prevSub:o,nextSub:i}=e;if(o&&(o.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=o,e.nextSub=void 0),n.subs===e&&(n.subs=o,!o&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)gs(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ul(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let $t=!0;const Ga=[];function Xt(){Ga.push($t),$t=!1}function en(){const e=Ga.pop();$t=e===void 0?!0:e}function Ys(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Ke;Ke=void 0;try{t()}finally{Ke=n}}}let Mo=0;class Ql{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ke||!$t||Ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ke)n=this.activeLink=new Ql(Ke,this),Ke.deps?(n.prevDep=Ke.depsTail,Ke.depsTail.nextDep=n,Ke.depsTail=n):Ke.deps=Ke.depsTail=n,Fa(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const o=n.nextDep;o.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=o),n.prevDep=Ke.depsTail,n.nextDep=void 0,Ke.depsTail.nextDep=n,Ke.depsTail=n,Ke.deps===n&&(Ke.deps=o)}return n}trigger(t){this.version++,Mo++,this.notify(t)}notify(t){ps();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ms()}}}function Fa(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let o=t.deps;o;o=o.nextDep)Fa(o)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Gi=new WeakMap,Qn=Symbol(""),Fi=Symbol(""),go=Symbol("");function ht(e,t,n){if($t&&Ke){let o=Gi.get(e);o||Gi.set(e,o=new Map);let i=o.get(n);i||(o.set(n,i=new fs),i.map=o,i.key=n),i.track()}}function rn(e,t,n,o,i,s){const a=Gi.get(e);if(!a){Mo++;return}const r=c=>{c&&c.trigger()};if(ps(),t==="clear")a.forEach(r);else{const c=be(e),u=c&&ds(n);if(c&&n==="length"){const d=Number(o);a.forEach((M,x)=>{(x==="length"||x===go||!Rt(x)&&x>=d)&&r(M)})}else switch((n!==void 0||a.has(void 0))&&r(a.get(n)),u&&r(a.get(go)),t){case"add":c?u&&r(a.get("length")):(r(a.get(Qn)),yn(e)&&r(a.get(Fi)));break;case"delete":c||(r(a.get(Qn)),yn(e)&&r(a.get(Fi)));break;case"set":yn(e)&&r(a.get(Qn));break}}Ms()}function $n(e){const t=Re(e);return t===e||(ht(t,"iterate",go),Ct(e))?t:tn(e)?vn(e)?t.map(n=>xn(Ut(n))):t.map(xn):t.map(Ut)}function di(e){return ht(e=Re(e),"iterate",go),e}function Ft(e,t){return tn(e)?xn(vn(e)?Ut(t):t):Ut(t)}const Yl={__proto__:null,[Symbol.iterator](){return ki(this,Symbol.iterator,e=>Ft(this,e))},concat(...e){return $n(this).concat(...e.map(t=>be(t)?$n(t):t))},entries(){return ki(this,"entries",e=>(e[1]=Ft(this,e[1]),e))},every(e,t){return on(this,"every",e,t,void 0,arguments)},filter(e,t){return on(this,"filter",e,t,n=>n.map(o=>Ft(this,o)),arguments)},find(e,t){return on(this,"find",e,t,n=>Ft(this,n),arguments)},findIndex(e,t){return on(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return on(this,"findLast",e,t,n=>Ft(this,n),arguments)},findLastIndex(e,t){return on(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return on(this,"forEach",e,t,void 0,arguments)},includes(...e){return Si(this,"includes",e)},indexOf(...e){return Si(this,"indexOf",e)},join(e){return $n(this).join(e)},lastIndexOf(...e){return Si(this,"lastIndexOf",e)},map(e,t){return on(this,"map",e,t,void 0,arguments)},pop(){return Zn(this,"pop")},push(...e){return Zn(this,"push",e)},reduce(e,...t){return _s(this,"reduce",e,t)},reduceRight(e,...t){return _s(this,"reduceRight",e,t)},shift(){return Zn(this,"shift")},some(e,t){return on(this,"some",e,t,void 0,arguments)},splice(...e){return Zn(this,"splice",e)},toReversed(){return $n(this).toReversed()},toSorted(e){return $n(this).toSorted(e)},toSpliced(...e){return $n(this).toSpliced(...e)},unshift(...e){return Zn(this,"unshift",e)},values(){return ki(this,"values",e=>Ft(this,e))}};function ki(e,t,n){const o=di(e),i=o[t],s=i.call(o);if(o!==e&&!Ct(e)){if(s[Symbol.toStringTag]==="Array Iterator"){const a=Object.create(Object.getPrototypeOf(s));return a.next=()=>Ps(s.next(),n),i!==Za[t]&&Object.defineProperties(a,{return:{get(){const r=s.return;return typeof r=="function"?r.bind(s):r}},throw:{get(){const r=s.throw;return typeof r=="function"?r.bind(s):r}}}),a}s._next=s.next,s.next=()=>Ps(s._next(),n)}return s}function Ps(e,t){return e.done||(e.value=t(e.value)),e}const Za=Array.prototype;function on(e,t,n,o,i,s){const a=di(e),r=a!==e&&!Ct(e),c=a[t];if(c!==Za[t]){const M=c.apply(e,s);return r?Ut(M):M}let u=n;a!==e&&(r?u=function(M,x){return n.call(this,Ft(e,M),x,e)}:n.length>2&&(u=function(M,x){return n.call(this,M,x,e)}));const d=c.call(a,u,o);return r&&i?i(d):d}function _s(e,t,n,o){const i=di(e),s=i!==e&&!Ct(e);let a=n,r=!1;i!==e&&(s?(r=o.length===0,a=function(u,d,M){return r&&(r=!1,u=Ft(e,u)),n.call(this,u,Ft(e,d),M,e)}):n.length>3&&(a=function(u,d,M){return n.call(this,u,d,M,e)}));const c=i[t](a,...o);return r?Ft(e,c):c}function Si(e,t,n){const o=Re(e);ht(o,"iterate",go);const i=o[t](...n);return(i===-1||i===!1)&&vs(n[0])?(n[0]=Re(n[0]),o[t](...n)):i}function Zn(e,t,n=[]){Xt(),ps();const o=Re(e)[t].apply(e,n);return Ms(),en(),o}const Pl=cs("__proto__,__v_isRef,__isVue"),Ka=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Rt));function _l(e){Rt(e)||(e=String(e));const t=Re(this);return ht(t,"has",e),t.hasOwnProperty(e)}class Ja{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,o){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return o===(i?s?Kl:tr:s?er:Xa).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const a=be(t);if(!i){let c;if(a&&(c=Yl[n]))return c;if(n==="hasOwnProperty")return _l}const r=Reflect.get(t,n,mt(t)?t:o);if((Rt(n)?Ka.has(n):Pl(n))||(i||ht(t,"get",n),s))return r;if(mt(r)){const c=a&&ds(n)?r:r.value;return i&&He(c)?Ki(c):c}return He(r)?i?Ki(r):ms(r):r}}class qa extends Ja{constructor(t=!1){super(!1,t)}set(t,n,o,i){let s=t[n];const a=be(t)&&ds(n);if(!this._isShallow){const u=tn(s);if(!Ct(o)&&!tn(o)&&(s=Re(s),o=Re(o)),!a&&mt(s)&&!mt(o))return u||(s.value=o),!0}const r=a?Number(n)<t.length:Be(t,n),c=Reflect.set(t,n,o,mt(t)?t:i);return t===Re(i)&&c&&(r?Jt(o,s)&&rn(t,"set",n,o):rn(t,"add",n,o)),c}deleteProperty(t,n){const o=Be(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&o&&rn(t,"delete",n,void 0),i}has(t,n){const o=Reflect.has(t,n);return(!Rt(n)||!Ka.has(n))&&ht(t,"has",n),o}ownKeys(t){return ht(t,"iterate",be(t)?"length":Qn),Reflect.ownKeys(t)}}class $l extends Ja{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Rl=new qa,Wl=new $l,Bl=new qa(!0);const Zi=e=>e,zo=e=>Reflect.getPrototypeOf(e);function Hl(e,t,n){return function(...o){const i=this.__v_raw,s=Re(i),a=yn(s),r=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,u=i[e](...o),d=n?Zi:t?xn:Ut;return!t&&ht(s,"iterate",c?Fi:Qn),tt(Object.create(u),{next(){const{value:M,done:x}=u.next();return x?{value:M,done:x}:{value:r?[d(M[0]),d(M[1])]:d(M),done:x}}})}}function Ao(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Vl(e,t){const n={get(i){const s=this.__v_raw,a=Re(s),r=Re(i);e||(Jt(i,r)&&ht(a,"get",i),ht(a,"get",r));const{has:c}=zo(a),u=t?Zi:e?xn:Ut;if(c.call(a,i))return u(s.get(i));if(c.call(a,r))return u(s.get(r));s!==a&&s.get(i)},get size(){const i=this.__v_raw;return!e&&ht(Re(i),"iterate",Qn),i.size},has(i){const s=this.__v_raw,a=Re(s),r=Re(i);return e||(Jt(i,r)&&ht(a,"has",i),ht(a,"has",r)),i===r?s.has(i):s.has(i)||s.has(r)},forEach(i,s){const a=this,r=a.__v_raw,c=Re(r),u=t?Zi:e?xn:Ut;return!e&&ht(c,"iterate",Qn),r.forEach((d,M)=>i.call(s,u(d),u(M),a))}};return tt(n,e?{add:Ao("add"),set:Ao("set"),delete:Ao("delete"),clear:Ao("clear")}:{add(i){const s=Re(this),a=zo(s),r=Re(i),c=!t&&!Ct(i)&&!tn(i)?r:i;return a.has.call(s,c)||Jt(i,c)&&a.has.call(s,i)||Jt(r,c)&&a.has.call(s,r)||(s.add(c),rn(s,"add",c,c)),this},set(i,s){!t&&!Ct(s)&&!tn(s)&&(s=Re(s));const a=Re(this),{has:r,get:c}=zo(a);let u=r.call(a,i);u||(i=Re(i),u=r.call(a,i));const d=c.call(a,i);return a.set(i,s),u?Jt(s,d)&&rn(a,"set",i,s):rn(a,"add",i,s),this},delete(i){const s=Re(this),{has:a,get:r}=zo(s);let c=a.call(s,i);c||(i=Re(i),c=a.call(s,i)),r&&r.call(s,i);const u=s.delete(i);return c&&rn(s,"delete",i,void 0),u},clear(){const i=Re(this),s=i.size!==0,a=i.clear();return s&&rn(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Hl(i,e,t)}),n}function hs(e,t){const n=Vl(e,t);return(o,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_isShallow"?t:i==="__v_raw"?o:Reflect.get(Be(n,i)&&i in o?n:o,i,s)}const Gl={get:hs(!1,!1)},Fl={get:hs(!1,!0)},Zl={get:hs(!0,!1)};const Xa=new WeakMap,er=new WeakMap,tr=new WeakMap,Kl=new WeakMap;function Jl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ms(e){return tn(e)?e:ys(e,!1,Rl,Gl,Xa)}function ql(e){return ys(e,!1,Bl,Fl,er)}function Ki(e){return ys(e,!0,Wl,Zl,tr)}function ys(e,t,n,o,i){if(!He(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const s=i.get(e);if(s)return s;const a=Jl(xl(e));if(a===0)return e;const r=new Proxy(e,a===2?o:n);return i.set(e,r),r}function vn(e){return tn(e)?vn(e.__v_raw):!!(e&&e.__v_isReactive)}function tn(e){return!!(e&&e.__v_isReadonly)}function Ct(e){return!!(e&&e.__v_isShallow)}function vs(e){return e?!!e.__v_raw:!1}function Re(e){const t=e&&e.__v_raw;return t?Re(t):e}function Xl(e){return!Be(e,"__v_skip")&&Object.isExtensible(e)&&Qa(e,"__v_skip",!0),e}const Ut=e=>He(e)?ms(e):e,xn=e=>He(e)?Ki(e):e;function mt(e){return e?e.__v_isRef===!0:!1}function V(e){return ec(e,!1)}function ec(e,t){return mt(e)?e:new tc(e,t)}class tc{constructor(t,n){this.dep=new fs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Re(t),this._value=n?t:Ut(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,o=this.__v_isShallow||Ct(t)||tn(t);t=o?t:Re(t),Jt(t,n)&&(this._rawValue=t,this._value=o?t:Ut(t),this.dep.trigger())}}function q(e){return mt(e)?e.value:e}const nc={get:(e,t,n)=>t==="__v_raw"?e:q(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const i=e[t];return mt(i)&&!mt(n)?(i.value=n,!0):Reflect.set(e,t,n,o)}};function nr(e){return vn(e)?e:new Proxy(e,nc)}class oc{constructor(t,n,o){this.fn=t,this.setter=n,this._value=void 0,this.dep=new fs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&Ke!==this)return Wa(this,!0),!0}get value(){const t=this.dep.track();return Va(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ic(e,t,n=!1){let o,i;return Ae(e)?o=e:(o=e.get,i=e.set),new oc(o,i,n)}const ko={},Bo=new WeakMap;let kn;function sc(e,t=!1,n=kn){if(n){let o=Bo.get(n);o||Bo.set(n,o=[]),o.push(e)}}function ac(e,t,n=Fe){const{immediate:o,deep:i,once:s,scheduler:a,augmentJob:r,call:c}=n,u=S=>i?S:Ct(S)||i===!1||i===0?ln(S,1):ln(S);let d,M,x,h,O=!1,Q=!1;if(mt(e)?(M=()=>e.value,O=Ct(e)):vn(e)?(M=()=>u(e),O=!0):be(e)?(Q=!0,O=e.some(S=>vn(S)||Ct(S)),M=()=>e.map(S=>{if(mt(S))return S.value;if(vn(S))return u(S);if(Ae(S))return c?c(S,2):S()})):Ae(e)?t?M=c?()=>c(e,2):e:M=()=>{if(x){Xt();try{x()}finally{en()}}const S=kn;kn=d;try{return c?c(e,3,[h]):e(h)}finally{kn=S}}:M=qt,t&&i){const S=M,_=i===!0?1/0:i;M=()=>ln(S(),_)}const K=Ol(),X=()=>{d.stop(),K&&K.active&&us(K.effects,d)};if(s&&t){const S=t;t=(..._)=>{try{return S(..._)}finally{X()}}}let Z=Q?new Array(e.length).fill(ko):ko;const ne=S=>{if(!(!(d.flags&1)||!d.dirty&&!S))if(t){const _=d.run();if(S||i||O||(Q?_.some((j,b)=>Jt(j,Z[b])):Jt(_,Z))){const j=kn;Xt();try{x&&x(),kn=d;const b=[_,Z===ko?void 0:Q&&Z[0]===ko?[]:Z,h];Z=_,c?c(t,3,b):t(...b)}finally{kn=j,en()}}}else d.run()};return r&&r(ne),d=new $a(M),d.scheduler=a?()=>a(ne,!1):ne,h=S=>sc(S,!1,d),x=d.onStop=()=>{const S=Bo.get(d);if(S){if(c)c(S,4);else for(const _ of S)_();Bo.delete(d)}},t?o?ne(!0):Z=d.run():a?a(ne.bind(null,!0),!0):d.run(),X.pause=d.pause.bind(d),X.resume=d.resume.bind(d),X.stop=X,X}function ln(e,t=1/0,n){if(t<=0||!He(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,mt(e))ln(e.value,t,n);else if(be(e))for(let o=0;o<e.length;o++)ln(e[o],t,n);else if(Yn(e)||yn(e))e.forEach(o=>{ln(o,t,n)});else if(Ua(e)){for(const o in e)ln(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&ln(e[o],t,n)}return e}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bo(e,t,n,o){try{return o?e(...o):e()}catch(i){Lo(i,t,n)}}function Qt(e,t,n,o){if(Ae(e)){const i=bo(e,t,n,o);return i&&Ca(i)&&i.catch(s=>{Lo(s,t,n)}),i}if(be(e)){const i=[];for(let s=0;s<e.length;s++)i.push(Qt(e[s],t,n,o));return i}}function Lo(e,t,n,o=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Fe;if(t){let r=t.parent;const c=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const d=r.ec;if(d){for(let M=0;M<d.length;M++)if(d[M](e,c,u)===!1)return}r=r.parent}if(s){Xt(),bo(s,null,10,[e,c,u]),en();return}}rc(e,n,i,o,a)}function rc(e,t,n,o=!0,i=!1){if(i)throw e;console.error(e)}const xt=[];let Pt=-1;const Zt=[];let mn=null,Rn=0;const or=Promise.resolve();let Ho=null;function ke(e){const t=Ho||or;return e?t.then(this?e.bind(this):e):t}function lc(e){let t=Pt+1,n=xt.length;for(;t<n;){const o=t+n>>>1,i=xt[o],s=fo(i);s<e||s===e&&i.flags&2?t=o+1:n=o}return t}function Ns(e){if(!(e.flags&1)){const t=fo(e),n=xt[xt.length-1];!n||!(e.flags&2)&&t>=fo(n)?xt.push(e):xt.splice(lc(t),0,e),e.flags|=1,ir()}}function ir(){Ho||(Ho=or.then(rr))}function cc(e){if(!be(e))mn&&e.id===-1?mn.splice(Rn+1,0,e):e.flags&1||(Zt.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Zt.push(e[t]);ir()}function sr(e,t,n,o=Pt+1){for(;o<xt.length;o++){const i=xt[o];if(i&&i.flags&2){if(e&&i.id!==e.uid||t!==void 0&&!(i.id>=t))continue;xt.splice(o,1),o=e?o-1:Pt,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ar(e,t,n=0){if(Zt.length){let o=Zt,i=0;if(t){o=[];for(let a=0;a<Zt.length;a++){const r=Zt[a];(r.i!==void 0?!r.i||r.i.uid<n:t.has(r))?Zt[i++]=r:o.push(r)}}const s=[...new Set(o)].sort((a,r)=>fo(a)-fo(r));if(Zt.length=i,mn){for(let a=0;a<s.length;a++)mn.push(s[a]);return}for(mn=s,Rn=0;Rn<mn.length;Rn++){const a=mn[Rn];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}mn=null,Rn=0}}let Ei=!1;function uc(e,t){if(Ei){e();return}const n=t===void 0?void 0:new Set(Zt);e(),Ei=!0;try{sr(void 0,t),ar(void 0,n,t)}finally{Ei=!1}}const fo=e=>e.id==null?e.flags&2?-1:1/0:e.id;function rr(e){try{for(Pt=0;Pt<xt.length;Pt++){const t=xt[Pt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),bo(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Pt<xt.length;Pt++){const t=xt[Pt];t&&(t.flags&=-2)}Pt=-1,xt.length=0,ar(),Ho=null,(xt.length||Zt.length)&&rr()}}let Mt=null,lr=null;function Vo(e){const t=Mt;return Mt=e,lr=e&&e.type.__scopeId||null,t}function Xe(e,t=Mt,n){if(!t||e._n)return e;const o=(...i)=>{o._d&&Ko(-1);const s=Vo(t),a=un.length;let r;try{r=e(...i)}finally{for(let c=un.length;c>a;c--)ws();Vo(s),o._d&&Ko(1)}return r};return o._n=!0,o._c=!0,o._d=!0,o}function et(e,t){if(Mt===null)return e;const n=vi(Mt),o=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,a,r,c=Fe]=t[i];s&&(Ae(s)&&(s={mounted:s,updated:s}),s.deep&&ln(a),o.push({dir:s,instance:n,value:a,oldValue:void 0,arg:r,modifiers:c}))}return e}function In(e,t,n,o){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const r=i[a];s&&(r.oldValue=s[a].value);let c=r.dir[o];c&&(Xt(),Qt(c,n,8,[e.el,r,e,t]),en())}}function dc(e,t){if(pt){let n=pt.provides;const o=pt.parent&&pt.parent.provides;o===n&&(n=pt.provides=Object.create(o)),n[e]=t}}function Po(e,t,n=!1){const o=yi();if(o||Bn){let i=Bn?Bn._context.provides:o?o.parent==null||o.ce?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&Ae(t)?t.call(o&&o.proxy):t}}const pc=Symbol.for("v-scx"),Mc=()=>Po(pc);function ze(e,t,n){return cr(e,t,n)}function cr(e,t,n=Fe){const{immediate:o,deep:i,flush:s,once:a}=n,r=tt({},n),c=t&&o||!t&&s!=="post";let u;if(Vn){if(s==="sync"){const h=Mc();u=h.__watcherHandles||(h.__watcherHandles=[])}else if(!c){const h=()=>{};return h.stop=qt,h.resume=qt,h.pause=qt,h}}const d=pt;r.call=(h,O,Q)=>Qt(h,d,O,Q);let M=!1;s==="post"?r.scheduler=h=>{h.i=d,Nt(h,d&&d.suspense)}:s!=="sync"&&(M=!0,r.scheduler=(h,O)=>{O?h():Ns(h)}),r.augmentJob=h=>{t&&(h.flags|=4),M&&(h.flags|=2,d&&(h.id=d.uid,h.i=d))};const x=ac(e,t,r);return Vn&&(u?u.push(x):c&&x()),x}function gc(e,t,n){const o=this.proxy,i=Je(e)?e.includes(".")?ur(o,e):()=>o[e]:e.bind(o,o);let s;Ae(t)?s=t:(s=t.handler,n=t);const a=Do(this),r=cr(i,s.bind(o),n);return a(),r}function ur(e,t){const n=t.split(".");return()=>{let o=e;for(let i=0;i<n.length&&o;i++)o=o[n[i]];return o}}const fn=new WeakMap,dr=Symbol("_vte"),pi=e=>e.__isTeleport,Sn=e=>e&&(e.disabled||e.disabled===""),fc=e=>e&&(e.defer||e.defer===""),$s=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Rs=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Ji=(e,t)=>{const n=e&&e.to;return Je(n)?t?t(n):null:n},hc={name:"Teleport",__isTeleport:!0,process(e,t,n,o,i,s,a,r,c,u){const{mc:d,pc:M,pbc:x,o:{insert:h,querySelector:O,createText:Q,createComment:K,parentNode:X}}=u,Z=Sn(t.props);let{dynamicChildren:ne}=t;const S=(b,E,f)=>{b.shapeFlag&16&&d(b.children,E,f,i,s,a,r,c)},_=(b=t)=>{const E=Sn(b.props),f=b.target=Ji(b.props,O),R=qi(f,b,Q,h);f&&(a!=="svg"&&$s(f)?a="svg":a!=="mathml"&&Rs(f)&&(a="mathml"),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(f),E||(S(b,f,R),no(b,!1)))},j=b=>{const E=()=>{if(fn.get(b)===E){if(fn.delete(b),Sn(b.props)){const f=X(b.el)||n;S(b,f,b.anchor),no(b,!0)}_(b)}};fn.set(b,E),Nt(E,s)};if(e==null){const b=t.el=Q(""),E=t.anchor=Q("");if(h(b,n,o),h(E,n,o),fc(t.props)||s&&s.pendingBranch){j(t);return}Z&&(S(t,n,E),no(t,!0)),_()}else{t.el=e.el;const b=t.anchor=e.anchor,E=fn.get(e);if(E){E.flags|=8,fn.delete(e),j(t);return}t.targetStart=e.targetStart;const f=t.target=e.target,R=t.targetAnchor=e.targetAnchor,F=Sn(e.props),U=F?n:f,ee=F?b:R;if(a==="svg"||$s(f)?a="svg":(a==="mathml"||Rs(f))&&(a="mathml"),ne?(x(e.dynamicChildren,ne,U,i,s,a,r),Ds(e,t,!0)):c||M(e,t,U,ee,i,s,a,r,!1),Z)F?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):So(t,n,b,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const pe=Ji(t.props,O);pe&&(t.target=pe,So(t,pe,null,u,0))}else F&&So(t,f,R,u,1);no(t,Z)}},remove(e,t,n,{um:o,o:{remove:i}},s){const{shapeFlag:a,children:r,anchor:c,targetStart:u,targetAnchor:d,target:M,props:x}=e,h=Sn(x),O=s||!h,Q=fn.get(e);if(Q&&(Q.flags|=8,fn.delete(e)),M&&(i(u),i(d)),s&&i(c),!Q&&(h||M)&&a&16)for(let K=0;K<r.length;K++){const X=r[K];o(X,t,n,O,!!X.dynamicChildren)}},move:So,hydrate:mc};function So(e,t,n,{o:{insert:o},m:i},s=2){s===0&&(e.targetStart&&o(e.targetStart,t,n),o(e.targetAnchor,t,n),n=e.targetAnchor);const{el:a,anchor:r,shapeFlag:c,children:u,props:d}=e,M=s===2;if(M&&o(a,t,n),!fn.has(e)&&(!M||Sn(d))&&c&16)for(let x=0;x<u.length;x++)i(u[x],t,n,2);M&&o(r,t,n)}function mc(e,t,n,o,i,s,{o:{nextSibling:a,parentNode:r,querySelector:c,insert:u,createText:d}},M){function x(K,X){let Z=X;for(;Z;){if(Z&&Z.nodeType===8){if(Z.data==="teleport start anchor")t.targetStart=Z;else if(Z.data==="teleport anchor"){t.targetAnchor=Z,K._lpa=t.targetAnchor&&a(t.targetAnchor);break}}Z=a(Z)}}function h(K,X){X.anchor=M(a(K),X,r(K),n,o,i,s)}const O=t.target=Ji(t.props,c),Q=Sn(t.props);if(O){const K=O._lpa||O.firstChild;t.shapeFlag&16&&(Q?(h(e,t),x(O,K),t.targetAnchor||qi(O,t,d,u,r(e)===O?e:null)):(t.anchor=a(e),x(O,K),t.targetAnchor||qi(O,t,d,u),M(K&&a(K),t,O,n,o,i,s))),no(t,Q)}else Q&&t.shapeFlag&16&&(h(e,t),t.targetStart=e,t.targetAnchor=a(e));return t.anchor&&a(t.anchor)}const pr=hc;function no(e,t){const n=e.ctx;if(n&&n.ut){let o,i;for(t?(o=e.el,i=e.anchor):(o=e.targetStart,i=e.targetAnchor);o&&o!==i;)o.nodeType===1&&o.setAttribute("data-v-owner",n.uid),o=o.nextSibling;n.ut()}}function qi(e,t,n,o,i=null){const s=t.targetStart=n(""),a=t.targetAnchor=n("");return s[dr]=a,e&&(o(s,e,i),o(a,e,i)),a}const kt=Symbol("_leaveCb"),Kn=Symbol("_enterCb");function Mr(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return zt(()=>{e.isMounted=!0}),Yt(()=>{e.isUnmounting=!0}),e}const At=[Function,Array],gr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:At,onEnter:At,onAfterEnter:At,onEnterCancelled:At,onBeforeLeave:At,onLeave:At,onAfterLeave:At,onLeaveCancelled:At,onBeforeAppear:At,onAppear:At,onAfterAppear:At,onAppearCancelled:At},yc={name:"BaseTransition",props:gr,setup(e,{slots:t}){const n=yi(),o=Mr();return()=>{const i=t.default&&xs(t.default(),!0),s=i&&i.length?fr(i):n.subTree?me():void 0;if(!s)return;const a=Re(e),{mode:r}=a;if(o.isLeaving)return Ci(s);const c=Go(s);if(!c)return Ci(s);let u=ho(c,a,o,n,M=>u=M);c.type!==gt&&bn(c,u);let d=n.subTree&&Go(n.subTree);if(d&&d.type!==gt&&!En(d,c)&&mo(n.subTree)){let M=ho(d,a,o,n);if(bn(d,M),r==="out-in"&&c.type!==gt)return o.isLeaving=!0,M.afterLeave=()=>{o.isLeaving=!1,n.job.flags&8||n.update(),delete M.afterLeave,d=void 0},Ci(s);r==="in-out"&&c.type!==gt?M.delayLeave=(x,h,O)=>{const Q=hr(o,d);Q[String(d.key)]=d,x[kt]=()=>{h(),x[kt]=void 0,delete u.delayedLeave,d=void 0},u.delayedLeave=()=>{O(),delete u.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return s}}};function fr(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==gt){t=n;break}}return t}const vc=yc;function hr(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function ho(e,t,n,o,i){const{appear:s,mode:a,persisted:r=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:M,onBeforeLeave:x,onLeave:h,onAfterLeave:O,onLeaveCancelled:Q,onBeforeAppear:K,onAppear:X,onAfterAppear:Z,onAppearCancelled:ne}=t,S=String(e.key),_=hr(n,e),j=(f,R)=>{f&&Qt(f,o,9,R)},b=(f,R)=>{const F=R[1];j(f,R),be(f)?f.every(U=>U.length<=1)&&F():f.length<=1&&F()},E={mode:a,persisted:r,beforeEnter(f){let R=c;if(!n.isMounted)if(s)R=K||c;else return;f[kt]&&f[kt](!0);const F=_[S];if(F&&En(e,F)){let U=F.el[kt];if(!U){const ee=mo(F);U=ee&&ee.el[kt]}U&&U()}j(R,[f])},enter(f){if(_[S]===e)return;let R=u,F=d,U=M;if(!n.isMounted)if(s)R=X||u,F=Z||d,U=ne||M;else return;let ee=!1;f[Kn]=ge=>{ee||(ee=!0,ge?j(U,[f]):j(F,[f]),E.delayedLeave&&E.delayedLeave(),f[Kn]=void 0)};const pe=f[Kn].bind(null,!1);R?b(R,[f,pe]):pe()},leave(f,R){const F=String(e.key);if(f[Kn]&&f[Kn](!0),n.isUnmounting)return R();j(x,[f]);let U=!1;f[kt]=pe=>{U||(U=!0,R(),pe?j(Q,[f]):j(O,[f]),f[kt]=void 0,_[F]===e&&delete _[F])};const ee=f[kt].bind(null,!1);_[F]=e,h?b(h,[f,ee]):ee()},clone(f){const R=ho(f,t,n,o,i);return i&&i(R),R}};return E}function Ci(e){if(jo(e))return e=Ln(e),e.children=null,e}function Go(e){if(!jo(e))return pi(e.type)&&e.children?fr(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&Ae(n.default))return n.default()}}function bn(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;bn(pi(n.type)&&Go(n)||n,t)}else if(e.shapeFlag&128)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===Ne&&be(e.children)){const n=jr(e.children,!1);n&&bn(n,t)}}function xs(e,t=!1,n){let o=[],i=0;for(let s=0;s<e.length;s++){let a=e[s];const r=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===Ne?(a.patchFlag&128&&i++,o=o.concat(xs(a.children,t,r))):(t||a.type!==gt)&&o.push(r!=null?Ln(a,{key:r}):a)}if(i>1)for(let s=0;s<o.length;s++)o[s].patchFlag=-2;return o}function mo(e){if(e.component)return mo(e.component.subTree);if(e.type===Ne){const t=be(e.children)&&jr(e.children,!1);return t?mo(t):void 0}if(e.type!==gt)return e}function qe(e,t){return Ae(e)?tt({name:e.name},t,{setup:e}):e}function Dn(){const e=yi();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function bs(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ws(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Fo=new WeakMap;function lo(e,t,n,o,i=!1){if(be(e)){e.forEach((Q,K)=>lo(Q,t&&(be(t)?t[K]:t),n,o,i));return}if(Wn(o)&&!i){o.shapeFlag&512&&o.type.__asyncResolved&&o.component.subTree.component&&lo(e,t,n,o.component.subTree);return}const s=o.shapeFlag&4?vi(o.component):o.el,a=i?null:s,{i:r,r:c}=e,u=t&&t.r,d=r.refs===Fe?r.refs={}:r.refs,M=r.setupState,x=Re(M),h=M===Fe?Ea:Q=>Ws(d,Q)?!1:Be(x,Q),O=(Q,K)=>!(K&&Ws(d,K));if(u!=null&&u!==c){if(Bs(t),Je(u))d[u]=null,h(u)&&(M[u]=null);else if(mt(u)){const Q=t;O(u,Q.k)&&(u.value=null),Q.k&&(d[Q.k]=null)}}if(Ae(c))bo(c,r,12,[a,d]);else{const Q=Je(c),K=mt(c);if(Q||K){const X=()=>{if(e.f){const Z=Q?h(c)?M[c]:d[c]:O()||!e.k?c.value:d[e.k];if(i)be(Z)&&us(Z,s);else if(be(Z))Z.includes(s)||Z.push(s);else if(Q)d[c]=[s],h(c)&&(M[c]=d[c]);else{const ne=[s];O(c,e.k)&&(c.value=ne),e.k&&(d[e.k]=ne)}}else Q?(d[c]=a,h(c)&&(M[c]=a)):K&&(O(c,e.k)&&(c.value=a),e.k&&(d[e.k]=a))};if(a){const Z=()=>{X(),Fo.delete(e)};Z.id=-1,Fo.set(e,Z),Nt(Z,n)}else Bs(e),X()}}}function Bs(e){const t=Fo.get(e);t&&(t.flags|=8,Fo.delete(e))}const Hs=e=>e.nodeType===8;ui().requestIdleCallback;ui().cancelIdleCallback;function Nc(e,t){if(Hs(e)&&e.data==="["){let n=1,o=e.nextSibling;for(;o;){if(o.nodeType===1){if(t(o)===!1)break}else if(Hs(o))if(o.data==="]"){if(--n===0)break}else o.data==="["&&n++;o=o.nextSibling}}else t(e)}const Wn=e=>!!e.type.__asyncLoader;function xc(e){Ae(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:o,delay:i=200,hydrate:s,timeout:a,suspensible:r=!0,onError:c}=e;let u=null,d,M=0;const x=()=>(M++,u=null,h()),h=()=>{let O;return u||(O=u=t().catch(Q=>{if(Q=Q instanceof Error?Q:new Error(String(Q)),c)return new Promise((K,X)=>{c(Q,()=>K(x()),()=>X(Q),M+1)});throw Q}).then(Q=>O!==u&&u?u:(Q&&(Q.__esModule||Q[Symbol.toStringTag]==="Module")&&(Q=Q.default),d=Q,Q)))};return qe({name:"AsyncComponentWrapper",__asyncLoader:h,__asyncHydrate(O,Q,K){const X=O.isConnected;let Z=!1;(Q.bu||(Q.bu=[])).push(()=>Z=!0);const ne=()=>{Z||!O.parentNode||X&&!O.isConnected||K()},S=s?()=>{const _=s(ne,j=>Nc(O,j));_&&(Q.bum||(Q.bum=[])).push(_)}:ne;d?S():h().then(()=>!Q.isUnmounted&&S())},get __asyncResolved(){return d},setup(){const O=pt;if(bs(O),d)return()=>Eo(d,O);const Q=_=>{u=null,Lo(_,O,13,!o)};if(r&&O.suspense||Vn)return h().then(_=>()=>Eo(_,O)).catch(_=>(Q(_),()=>o?H(o,{error:_}):null));const K=V(!1),X=V(),Z=V(!!i);let ne,S;return fi(()=>{ne!=null&&clearTimeout(ne),S!=null&&clearTimeout(S)}),i&&(S=setTimeout(()=>{O.isUnmounted||(Z.value=!1)},i)),a!=null&&(ne=setTimeout(()=>{if(!O.isUnmounted&&!K.value&&!X.value){const _=new Error(`Async component timed out after ${a}ms.`);Q(_),X.value=_}},a)),h().then(()=>{O.isUnmounted||(K.value=!0,O.parent&&jo(O.parent.vnode)&&O.parent.update())}).catch(_=>{if(O.isUnmounted){u=null;return}Q(_),X.value=_}),()=>{if(K.value&&d)return Eo(d,O);if(X.value&&o)return H(o,{error:X.value});if(n&&!Z.value)return Eo(n,O)}}})}function Eo(e,t){const{ref:n,props:o,children:i,ce:s}=t.vnode,a=H(e,o,i);return a.ref=n,a.ce=s,delete t.vnode.ce,a}const jo=e=>e.type.__isKeepAlive;function bc(e,t){mr(e,"a",t)}function Lc(e,t){mr(e,"da",t)}function mr(e,t,n=pt){const o=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Mi(t,o,n),n){let i=n.parent;for(;i&&i.parent;)jo(i.parent.vnode)&&jc(o,t,n,i),i=i.parent}}function jc(e,t,n,o){const i=Mi(t,e,o,!0);fi(()=>{us(o[t],i)},n)}function Mi(e,t,n=pt,o=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{Xt();const r=Do(n),c=Qt(t,n,e,a);return r(),en(),c});return o?i.unshift(s):i.push(s),s}}const dn=e=>(t,n=pt)=>{(!Vn||e==="sp")&&Mi(e,(...o)=>t(...o),n)},Dc=dn("bm"),zt=dn("m"),wc=dn("bu"),gi=dn("u"),Yt=dn("bum"),fi=dn("um"),Ic=dn("sp"),Tc=dn("rtg"),zc=dn("rtc");function Ac(e,t=pt){Mi("ec",e,t)}const kc="components",yr=Symbol.for("v-ndc");function cn(e){return Je(e)?Sc(kc,e,!1)||e:e||yr}function Sc(e,t,n=!0,o=!1){const i=Mt||pt;if(i){const s=i.type;{const r=fu(s,!1);if(r&&(r===t||r===bt(t)||r===li(bt(t))))return s}const a=Vs(i[e]||s[e],t)||Vs(i.appContext[e],t);return!a&&o?s:a}}function Vs(e,t){return e&&(e[t]||e[bt(t)]||e[li(bt(t))])}function We(e,t,n,o){let i;const s=n,a=be(e);if(a||Je(e)){const r=a&&vn(e);let c=!1,u=!1;r&&(c=!Ct(e),u=tn(e),e=di(e)),i=new Array(e.length);for(let d=0,M=e.length;d<M;d++)i[d]=t(c?u?xn(Ut(e[d])):Ut(e[d]):e[d],d,void 0,s)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)i=[];else{i=new Array(e);for(let r=0;r<e;r++)i[r]=t(r+1,r,void 0,s)}else if(He(e))if(e[Symbol.iterator])i=Array.from(e,(r,c)=>t(r,c,void 0,s));else{const r=Object.keys(e);i=new Array(r.length);for(let c=0,u=r.length;c<u;c++){const d=r[c];i[c]=t(e[d],d,c,s)}}else i=[];return i}function Gs(e,t,n,o,i,s){if(n==null&&(n={}),Mt.ce||Mt.parent&&Wn(Mt.parent)&&Mt.parent.ce){const u=n,d=Object.keys(u).length>0;return t!=="default"&&(u.name=t),m(),Le(Ne,null,[H("slot",u,o)],d?-2:64)}let a=e[t];a&&a._c&&(a._d=!1);const r=un.length;m();let c;try{const u=a&&vr(a(n)),d=n.key||s||u&&u.key;c=Le(Ne,{key:(d&&!Rt(d)?d:`_${t}`)+(!u&&o?"_fb":"")},u||(o?o():[]),u&&e._===1?64:-2)}catch(u){for(let d=un.length;d>r;d--)ws();throw u}finally{a&&a._c&&(a._d=!0)}return c}function vr(e){return e.some(t=>Hn(t)?!(t.type===gt||t.type===Ne&&!vr(t.children)):!0)?e:null}const Xi=e=>e?_r(e)?vi(e):Xi(e.parent):null,co=tt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xi(e.parent),$root:e=>Xi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>xr(e),$forceUpdate:e=>e.f||(e.f=()=>{Ns(e.update)}),$nextTick:e=>e.n||(e.n=ke.bind(e.proxy)),$watch:e=>gc.bind(e)}),Oi=(e,t)=>e!==Fe&&!e.__isScriptSetup&&Be(e,t),Ec={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:o,data:i,props:s,accessCache:a,type:r,appContext:c}=e;if(t[0]!=="$"){const x=a[t];if(x!==void 0)switch(x){case 1:return o[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(Oi(o,t))return a[t]=1,o[t];if(i!==Fe&&Be(i,t))return a[t]=2,i[t];if(Be(s,t))return a[t]=3,s[t];if(n!==Fe&&Be(n,t))return a[t]=4,n[t];es&&(a[t]=0)}}const u=co[t];let d,M;if(u)return t==="$attrs"&&ht(e.attrs,"get",""),u(e);if((d=r.__cssModules)&&(d=d[t]))return d;if(n!==Fe&&Be(n,t))return a[t]=4,n[t];if(M=c.config.globalProperties,Be(M,t))return M[t]},set({_:e},t,n){const{data:o,setupState:i,ctx:s}=e;return Oi(i,t)?(i[t]=n,!0):o!==Fe&&Be(o,t)?(o[t]=n,!0):Be(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:i,props:s,type:a}},r){let c;return!!(n[r]||e!==Fe&&r[0]!=="$"&&Be(e,r)||Oi(t,r)||Be(s,r)||Be(o,r)||Be(co,r)||Be(i.config.globalProperties,r)||(c=a.__cssModules)&&c[r])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Be(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Fs(e){return be(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let es=!0;function Cc(e){const t=xr(e),n=e.proxy,o=e.ctx;es=!1,t.beforeCreate&&Zs(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:r,provide:c,inject:u,created:d,beforeMount:M,mounted:x,beforeUpdate:h,updated:O,activated:Q,deactivated:K,beforeDestroy:X,beforeUnmount:Z,destroyed:ne,unmounted:S,render:_,renderTracked:j,renderTriggered:b,errorCaptured:E,serverPrefetch:f,expose:R,inheritAttrs:F,components:U,directives:ee,filters:pe}=t;if(u&&Oc(u,o,null),a)for(const ae in a){const Me=a[ae];Ae(Me)&&(o[ae]=Me.bind(n))}if(i){const ae=i.call(n,n);He(ae)&&(e.data=ms(ae))}if(es=!0,s)for(const ae in s){const Me=s[ae],oe=Ae(Me)?Me.bind(n,n):Ae(Me.get)?Me.get.bind(n,n):qt,A=!Ae(Me)&&Ae(Me.set)?Me.set.bind(n):qt,G=we({get:oe,set:A});Object.defineProperty(o,ae,{enumerable:!0,configurable:!0,get:()=>G.value,set:ie=>G.value=ie})}if(r)for(const ae in r)Nr(r[ae],o,n,ae);if(c){const ae=Ae(c)?c.call(n):c;Reflect.ownKeys(ae).forEach(Me=>{dc(Me,ae[Me])})}d&&Zs(d,e,"c");function le(ae,Me){be(Me)?Me.forEach(oe=>ae(oe.bind(n))):Me&&ae(Me.bind(n))}if(le(Dc,M),le(zt,x),le(wc,h),le(gi,O),le(bc,Q),le(Lc,K),le(Ac,E),le(zc,j),le(Tc,b),le(Yt,Z),le(fi,S),le(Ic,f),be(R))if(R.length){const ae=e.exposed||(e.exposed={});R.forEach(Me=>{Object.defineProperty(ae,Me,{get:()=>n[Me],set:oe=>n[Me]=oe,enumerable:!0})})}else e.exposed||(e.exposed={});_&&e.render===qt&&(e.render=_),F!=null&&(e.inheritAttrs=F),U&&(e.components=U),ee&&(e.directives=ee),f&&bs(e)}function Oc(e,t,n=qt){be(e)&&(e=ts(e));for(const o in e){const i=e[o];let s;He(i)?"default"in i?s=Po(i.from||o,i.default,!0):s=Po(i.from||o):s=Po(i),mt(s)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[o]=s}}function Zs(e,t,n){Qt(be(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function Nr(e,t,n,o){let i=o.includes(".")?ur(n,o):()=>n[o];if(Je(e)){const s=t[e];Ae(s)&&ze(i,s)}else if(Ae(e))ze(i,e.bind(n));else if(He(e))if(be(e))e.forEach(s=>Nr(s,t,n,o));else{const s=Ae(e.handler)?e.handler.bind(n):t[e.handler];Ae(s)&&ze(i,s,e)}}function xr(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,r=s.get(t);let c;return r?c=r:!i.length&&!n&&!o?c=t:(c={},i.length&&i.forEach(u=>Zo(c,u,a,!0)),Zo(c,t,a)),He(t)&&s.set(t,c),c}function Zo(e,t,n,o=!1){const{mixins:i,extends:s}=t;s&&Zo(e,s,n,!0),i&&i.forEach(a=>Zo(e,a,n,!0));for(const a in t)if(!(o&&a==="expose")){const r=Uc[a]||n&&n[a];e[a]=r?r(e[a],t[a]):t[a]}return e}const Uc={data:Ks,props:Js,emits:Js,methods:oo,computed:oo,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:oo,directives:oo,watch:Yc,provide:Ks,inject:Qc};function Ks(e,t){return t?e?function(){return tt(Ae(e)?e.call(this,this):e,Ae(t)?t.call(this,this):t)}:t:e}function Qc(e,t){return oo(ts(e),ts(t))}function ts(e){if(be(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function yt(e,t){return e?[...new Set([].concat(e,t))]:t}function oo(e,t){return e?tt(Object.create(null),e,t):t}function Js(e,t){return e?be(e)&&be(t)?[...new Set([...e,...t])]:tt(Object.create(null),Fs(e),Fs(t??{})):t}function Yc(e,t){if(!e)return t;if(!t)return e;const n=tt(Object.create(null),e);for(const o in t)n[o]=yt(e[o],t[o]);return n}function br(){return{app:null,config:{isNativeTag:Ea,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pc=0;function _c(e,t){return function(o,i=null){Ae(o)||(o=tt({},o)),i!=null&&!He(i)&&(i=null);const s=br(),a=new WeakSet,r=[];let c=!1;const u=s.app={_uid:Pc++,_component:o,_props:i,_container:null,_context:s,_instance:null,version:mu,get config(){return s.config},set config(d){},use(d,...M){return a.has(d)||(d&&Ae(d.install)?(a.add(d),d.install(u,...M)):Ae(d)&&(a.add(d),d(u,...M))),u},mixin(d){return s.mixins.includes(d)||s.mixins.push(d),u},component(d,M){return M?(s.components[d]=M,u):s.components[d]},directive(d,M){return M?(s.directives[d]=M,u):s.directives[d]},mount(d,M,x){if(!c){const h=u._ceVNode||H(o,i);return h.appContext=s,x===!0?x="svg":x===!1&&(x=void 0),e(h,d,x),c=!0,u._container=d,d.__vue_app__=u,vi(h.component)}},onUnmount(d){r.push(d)},unmount(){c&&(Qt(r,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(d,M){return s.provides[d]=M,u},runWithContext(d){const M=Bn;Bn=u;try{return d()}finally{Bn=M}}};return u}}let Bn=null;const $c=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${bt(t)}Modifiers`]||e[`${jn(t)}Modifiers`];function Rc(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||Fe;let i=n;const s=t.startsWith("update:"),a=s&&$c(o,t.slice(7));a&&(a.trim&&(i=n.map(d=>Je(d)?d.trim():d)),a.number&&(i=i.map(ci)));let r,c=o[r=Ti(t)]||o[r=Ti(bt(t))];!c&&s&&(c=o[r=Ti(jn(t))]),c&&Qt(c,e,6,i);const u=o[r+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,Qt(u,e,6,i)}}const Wc=new WeakMap;function Lr(e,t,n=!1){const o=n?Wc:t.emitsCache,i=o.get(e);if(i!==void 0)return i;const s=e.emits;let a={},r=!1;if(!Ae(e)){const c=u=>{const d=Lr(u,t,!0);d&&(r=!0,tt(a,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!r?(He(e)&&o.set(e,null),null):(be(s)?s.forEach(c=>a[c]=null):tt(a,s),He(e)&&o.set(e,a),a)}function hi(e,t){return!e||!si(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),Be(e,t[0].toLowerCase()+t.slice(1))||Be(e,jn(t))||Be(e,t))}function qs(e){const{type:t,vnode:n,proxy:o,withProxy:i,propsOptions:[s],slots:a,attrs:r,emit:c,render:u,renderCache:d,props:M,data:x,setupState:h,ctx:O,inheritAttrs:Q}=e,K=Vo(e);let X,Z;try{if(n.shapeFlag&4){const S=i||o,_=S;X=Kt(u.call(_,S,d,M,h,x,O)),Z=r}else{const S=t;X=Kt(S.length>1?S(M,{attrs:r,slots:a,emit:c}):S(M,null)),Z=t.props?r:Bc(r)}}catch(S){un.length=0,Lo(S,e,1),X=H(gt)}let ne=X;if(Z&&Q!==!1){const S=Object.keys(Z),{shapeFlag:_}=ne;S.length&&_&7&&(s&&S.some(ai)&&(Z=Hc(Z,s)),ne=Ln(ne,Z,!1,!0))}if(n.dirs&&(ne=Ln(ne,null,!1,!0),ne.dirs=ne.dirs?ne.dirs.concat(n.dirs):n.dirs),n.transition){const S=pi(ne.type)&&Go(ne)||ne;bn(S,n.transition)}return X=ne,Vo(K),X}function jr(e,t=!0){let n;for(let o=0;o<e.length;o++){const i=e[o];if(Hn(i)){if(i.type!==gt||i.children==="v-if"){if(n)return;n=i}}else return}return n}const Bc=e=>{let t;for(const n in e)(n==="class"||n==="style"||si(n))&&((t||(t={}))[n]=e[n]);return t},Hc=(e,t)=>{const n={};for(const o in e)(!ai(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function Vc(e,t,n){const{props:o,children:i,component:s}=e,{props:a,children:r,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return o?Xs(o,a,u):!!a;if(c&8){const d=t.dynamicProps;for(let M=0;M<d.length;M++){const x=d[M];if(Dr(a,o,x)&&!hi(u,x))return!0}}}else return(i||r)&&(!r||!r.$stable)?!0:o===a?!1:o?a?Xs(o,a,u):!0:!!a;return!1}function Xs(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let i=0;i<o.length;i++){const s=o[i];if(!Be(e,s)||Dr(t,e,s)&&!hi(n,s))return!0}return!1}function Dr(e,t,n){const o=e[n],i=t[n];return n==="style"&&He(o)&&He(i)?!Nn(o,i):o!==i}function Gc({vnode:e,parent:t,suspense:n},o){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.suspense.vnode.el=i.el=o,e=i),i===e)(e=t.vnode).el=o,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=o)}const wr={},Ir=()=>Object.create(wr),Tr=e=>Object.getPrototypeOf(e)===wr;function Fc(e,t,n,o=!1){const i={},s=Ir();e.propsDefaults=Object.create(null),zr(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);n?e.props=o?i:ql(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Zc(e,t,n,o){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,r=Re(i),[c]=e.propsOptions;let u=!1;if((o||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let M=0;M<d.length;M++){let x=d[M];if(hi(e.emitsOptions,x))continue;const h=t[x];if(c)if(Be(s,x))h!==s[x]&&(s[x]=h,u=!0);else{const O=bt(x);i[O]=ns(c,r,O,h,e,!1)}else h!==s[x]&&(s[x]=h,u=!0)}}}else{zr(e,t,i,s)&&(u=!0);let d;for(const M in r)(!t||!Be(t,M)&&((d=jn(M))===M||!Be(t,d)))&&(c?n&&(n[M]!==void 0||n[d]!==void 0)&&(i[M]=ns(c,r,M,void 0,e,!0)):delete i[M]);if(s!==r)for(const M in s)(!t||!Be(t,M))&&(delete s[M],u=!0)}u&&rn(e.attrs,"set","")}function zr(e,t,n,o){const[i,s]=e.propsOptions;let a=!1,r;if(t)for(let c in t){if(so(c))continue;const u=t[c];let d;i&&Be(i,d=bt(c))?!s||!s.includes(d)?n[d]=u:(r||(r={}))[d]=u:hi(e.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,a=!0)}if(s){const c=Re(n),u=r||Fe;for(let d=0;d<s.length;d++){const M=s[d];n[M]=ns(i,c,M,u[M],e,!Be(u,M))}}return a}function ns(e,t,n,o,i,s){const a=e[n];if(a!=null){const r=Be(a,"default");if(r&&o===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&Ae(c)){const{propsDefaults:u}=i;if(n in u)o=u[n];else{const d=Do(i);o=u[n]=c.call(null,t),d()}}else o=c;i.ce&&i.ce._setProp(n,o)}a[0]&&(s&&!r?o=!1:a[1]&&(o===""||o===jn(n))&&(o=!0))}return o}const Kc=new WeakMap;function Ar(e,t,n=!1){const o=n?Kc:t.propsCache,i=o.get(e);if(i)return i;const s=e.props,a={},r=[];let c=!1;if(!Ae(e)){const d=M=>{c=!0;const[x,h]=Ar(M,t,!0);tt(a,x),h&&r.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!s&&!c)return He(e)&&o.set(e,On),On;if(be(s))for(let d=0;d<s.length;d++){const M=bt(s[d]);ea(M)&&(a[M]=Fe)}else if(s)for(const d in s){const M=bt(d);if(ea(M)){const x=s[d],h=a[M]=be(x)||Ae(x)?{type:x}:tt({},x),O=h.type;let Q=!1,K=!0;if(be(O))for(let X=0;X<O.length;++X){const Z=O[X],ne=Ae(Z)&&Z.name;if(ne==="Boolean"){Q=!0;break}else ne==="String"&&(K=!1)}else Q=Ae(O)&&O.name==="Boolean";h[0]=Q,h[1]=K,(Q||Be(h,"default"))&&r.push(M)}}const u=[a,r];return He(e)&&o.set(e,u),u}function ea(e){return e[0]!=="$"&&!so(e)}const Ls=e=>e==="_"||e==="_ctx"||e==="$stable",js=e=>be(e)?e.map(Kt):[Kt(e)],Jc=(e,t,n)=>{if(t._n)return t;const o=Xe((...i)=>js(t(...i)),n);return o._c=!1,o},kr=(e,t,n)=>{const o=e._ctx;for(const i in e){if(Ls(i))continue;const s=e[i];if(Ae(s))t[i]=Jc(i,s,o);else if(s!=null){const a=js(s);t[i]=()=>a}}},Sr=(e,t)=>{const n=js(t);e.slots.default=()=>n},Er=(e,t,n)=>{for(const o in t)(n||!Ls(o))&&(e[o]=t[o])},qc=(e,t,n)=>{const o=e.slots=Ir();if(e.vnode.shapeFlag&32){const i=t._;i?(Er(o,t,n),n&&Qa(o,"_",i,!0)):kr(t,o)}else t&&Sr(e,t)},Xc=(e,t,n)=>{const{vnode:o,slots:i}=e;let s=!0,a=Fe;if(o.shapeFlag&32){const r=t._;r?n&&r===1?s=!1:Er(i,t,n):(s=!t.$stable,kr(t,i)),a=t}else t&&(Sr(e,t),a={default:1});if(s)for(const r in i)!Ls(r)&&a[r]==null&&delete i[r]},Nt=iu;function eu(e){return tu(e)}function tu(e,t){const n=ui();n.__VUE__=!0;const{insert:o,remove:i,patchProp:s,createElement:a,createText:r,createComment:c,setText:u,setElementText:d,parentNode:M,nextSibling:x,setScopeId:h=qt,insertStaticContent:O}=e,Q=(p,D,W,J=null,I=null,w=null,L=void 0,g=null,C=!!D.dynamicChildren)=>{if(p===D)return;p&&!En(p,D)&&(J=Qe(p),ie(p,I,w,!0),p=null),D.patchFlag===-2&&(C=!1,D.dynamicChildren=null),D.dynamicChildren&&p&&p.dynamicChildren&&p.dynamicChildren.hasOnce&&(D.dynamicChildren===On&&(D.dynamicChildren=[]),D.dynamicChildren.hasOnce=!0);const{type:$,ref:de,shapeFlag:P}=D;switch($){case mi:K(p,D,W,J);break;case gt:X(p,D,W,J);break;case _o:p==null&&Z(D,W,J,L);break;case Ne:U(p,D,W,J,I,w,L,g,C);break;default:P&1?_(p,D,W,J,I,w,L,g,C):P&6?ee(p,D,W,J,I,w,L,g,C):(P&64||P&128)&&$.process(p,D,W,J,I,w,L,g,C,Ge)}de!=null&&I?lo(de,p&&p.ref,w,D||p,!D):de==null&&p&&p.ref!=null&&lo(p.ref,null,w,p,!0)},K=(p,D,W,J)=>{if(p==null)o(D.el=r(D.children),W,J);else{const I=D.el=p.el;D.children!==p.children&&u(I,D.children)}},X=(p,D,W,J)=>{p==null?o(D.el=c(D.children||""),W,J):D.el=p.el},Z=(p,D,W,J)=>{[p.el,p.anchor]=O(p.children,D,W,J,p.el,p.anchor)},ne=({el:p,anchor:D},W,J)=>{let I;for(;p&&p!==D;)I=x(p),o(p,W,J),p=I;o(D,W,J)},S=({el:p,anchor:D})=>{let W;for(;p&&p!==D;)W=x(p),i(p),p=W;i(D)},_=(p,D,W,J,I,w,L,g,C)=>{if(D.type==="svg"?L="svg":D.type==="math"&&(L="mathml"),p==null)j(D,W,J,I,w,L,g,C);else{const $=p.el&&p.el._isVueCE?p.el:null;try{$&&$._beginPatch(),f(p,D,I,w,L,g,C)}finally{$&&$._endPatch()}}},j=(p,D,W,J,I,w,L,g)=>{let C,$;const{props:de,shapeFlag:P,transition:v,dirs:N}=p;if(C=p.el=a(p.type,w,de&&de.is,de),P&8?d(C,p.children):P&16&&E(p.children,C,null,J,I,Ui(p,w),L,g),N&&In(p,null,J,"created"),b(C,p,p.scopeId,L,J),de){for(const B in de)B!=="value"&&!so(B)&&s(C,B,null,de[B],w,J);"value"in de&&s(C,"value",null,de.value,w),($=de.onVnodeBeforeMount)&&Vt($,J,p)}N&&In(p,null,J,"beforeMount");const T=nu(I,v);T&&v.beforeEnter(C),o(C,D,W),(($=de&&de.onVnodeMounted)||T||N)&&Nt(()=>{try{$&&Vt($,J,p),T&&v.enter(C),N&&In(p,null,J,"mounted")}finally{}},I)},b=(p,D,W,J,I)=>{if(W&&h(p,W),J)for(let w=0;w<J.length;w++)h(p,J[w]);if(I){let w=I.subTree;if(D===w||Or(w.type)&&(w.ssContent===D||w.ssFallback===D)){const L=I.vnode;b(p,L,L.scopeId,L.slotScopeIds,I.parent)}}},E=(p,D,W,J,I,w,L,g,C=0)=>{for(let $=C;$<p.length;$++){const de=p[$]=g?an(p[$]):Kt(p[$]);Q(null,de,D,W,J,I,w,L,g)}},f=(p,D,W,J,I,w,L)=>{const g=D.el=p.el;let{patchFlag:C,dynamicChildren:$,dirs:de}=D;C|=p.patchFlag&16;const P=p.props||Fe,v=D.props||Fe;let N;if(W&&Tn(W,!1),(N=v.onVnodeBeforeUpdate)&&Vt(N,W,D,p),de&&In(D,p,W,"beforeUpdate"),W&&Tn(W,!0),$&&(!p.dynamicChildren||p.dynamicChildren.length!==$.length)&&(C=0,L=!1,$=null),(P.innerHTML&&v.innerHTML==null||P.textContent&&v.textContent==null)&&d(g,""),$?R(p.dynamicChildren,$,g,W,J,Ui(D,I),w):L||Me(p,D,g,null,W,J,Ui(D,I),w,!1),C>0){if(C&16)F(g,P,v,W,I);else if(C&2&&P.class!==v.class&&s(g,"class",null,v.class,I),C&4&&s(g,"style",P.style,v.style,I),C&8){const T=D.dynamicProps;for(let B=0;B<T.length;B++){const ce=T[B],ve=P[ce],Se=v[ce];(Se!==ve||ce==="value")&&s(g,ce,ve,Se,I,W)}}C&1&&p.children!==D.children&&d(g,D.children)}else!L&&$==null&&F(g,P,v,W,I);((N=v.onVnodeUpdated)||de)&&Nt(()=>{N&&Vt(N,W,D,p),de&&In(D,p,W,"updated")},J)},R=(p,D,W,J,I,w,L)=>{for(let g=0;g<D.length;g++){const C=p[g],$=D[g],de=C.el||os(C),P=de&&(C.type===Ne||!En(C,$)||C.shapeFlag&198)?M(de):W;Q(C,$,P,null,J,I,w,L,!0)}},F=(p,D,W,J,I)=>{if(D!==W){if(D!==Fe)for(const w in D)!so(w)&&!(w in W)&&s(p,w,D[w],null,I,J);for(const w in W){if(so(w))continue;const L=W[w],g=D[w];L!==g&&w!=="value"&&s(p,w,g,L,I,J)}"value"in W&&s(p,"value",D.value,W.value,I)}},U=(p,D,W,J,I,w,L,g,C)=>{const $=D.el=p?p.el:r(""),de=D.anchor=p?p.anchor:r("");let{patchFlag:P,dynamicChildren:v,slotScopeIds:N}=D;N&&(g=g?g.concat(N):N),p==null?(o($,W,J),o(de,W,J),E(D.children||[],W,de,I,w,L,g,C)):P>0&&P&64&&v&&p.dynamicChildren&&p.dynamicChildren.length===v.length?(R(p.dynamicChildren,v,W,I,w,L,g),(D.key!=null||I&&D===I.subTree)&&Ds(p,D,!0)):Me(p,D,W,de,I,w,L,g,C)},ee=(p,D,W,J,I,w,L,g,C)=>{D.slotScopeIds=g,p==null?D.shapeFlag&512?I.ctx.activate(D,W,J,L,C):pe(D,W,J,I,w,L,C):ge(p,D,C)},pe=(p,D,W,J,I,w,L)=>{const g=p.component=uu(p,J,I);if(jo(p)&&(g.ctx.renderer=Ge),du(g,!1,L),g.asyncDep){if(I&&I.registerDep(g,le,L,w),!p.el){const C=g.subTree=H(gt);X(null,C,D,W),p.placeholder=C.el}}else le(g,p,D,W,I,w,L)},ge=(p,D,W)=>{const J=D.component=p.component;if(Vc(p,D,W))if(J.asyncDep&&!J.asyncResolved){D.el=p.el,D.placeholder=p.placeholder,ae(J,D,W);return}else J.next=D,J.update();else D.el=p.el,D.placeholder=p.placeholder,J.vnode=D},le=(p,D,W,J,I,w,L)=>{const g=()=>{if(p.isMounted){let{next:P,bu:v,u:N,parent:T,vnode:B}=p;{const Ye=Cr(p);if(Ye){P&&(P.el=B.el,ae(p,P,L)),Ye.asyncDep.then(()=>{Nt(()=>{p.isUnmounted||$()},I)});return}}let ce=P,ve;Tn(p,!1),P?(P.el=B.el,ae(p,P,L)):P=B,v&&Yo(v),(ve=P.props&&P.props.onVnodeBeforeUpdate)&&Vt(ve,T,P,B),Tn(p,!0);const Se=qs(p),Ce=p.subTree;p.subTree=Se,Q(Ce,Se,M(Ce.el),Qe(Ce),p,I,w),P.el=Se.el,ce===null&&Gc(p,Se.el),N&&Nt(N,I),(ve=P.props&&P.props.onVnodeUpdated)&&Nt(()=>Vt(ve,T,P,B),I)}else{let P;const{el:v,props:N}=D,{bm:T,m:B,parent:ce,root:ve,type:Se}=p,Ce=Wn(D);Tn(p,!1),T&&Yo(T),!Ce&&(P=N&&N.onVnodeBeforeMount)&&Vt(P,ce,D),Tn(p,!0);{ve.ce&&ve.ce._hasShadowRoot()&&ve.ce._injectChildStyle(Se,p.parent?p.parent.type:void 0);const Ye=p.subTree=qs(p);Q(null,Ye,W,J,p,I,w),D.el=Ye.el}if(B&&Nt(B,I),!Ce&&(P=N&&N.onVnodeMounted)){const Ye=D;Nt(()=>Vt(P,ce,Ye),I)}(D.shapeFlag&256||ce&&Wn(ce.vnode)&&ce.vnode.shapeFlag&256)&&p.a&&Nt(p.a,I),p.isMounted=!0,D=W=J=null}};p.scope.on();const C=p.effect=new $a(g);p.scope.off();const $=p.update=C.run.bind(C),de=p.job=C.runIfDirty.bind(C);de.i=p,de.id=p.uid,C.scheduler=()=>Ns(de),Tn(p,!0),$()},ae=(p,D,W)=>{D.component=p;const J=p.vnode.props;p.vnode=D,p.next=null,Zc(p,D.props,J,W),Xc(p,D.children,W),Xt(),sr(p),en()},Me=(p,D,W,J,I,w,L,g,C=!1)=>{const $=p&&p.children,de=p?p.shapeFlag:0,P=D.children,{patchFlag:v,shapeFlag:N}=D;if(v>0){if(v&128){A($,P,W,J,I,w,L,g,C);return}else if(v&256){oe($,P,W,J,I,w,L,g,C);return}}N&8?(de&16&&De($,I,w),P!==$&&d(W,P)):de&16?N&16?A($,P,W,J,I,w,L,g,C):De($,I,w,!0):(de&8&&d(W,""),N&16&&E(P,W,J,I,w,L,g,C))},oe=(p,D,W,J,I,w,L,g,C)=>{p=p||On,D=D||On;const $=p.length,de=D.length,P=Math.min($,de);let v;for(v=0;v<P;v++){const N=D[v]=C?an(D[v]):Kt(D[v]);Q(p[v],N,W,null,I,w,L,g,C)}$>de?De(p,I,w,!0,!1,P):E(D,W,J,I,w,L,g,C,P)},A=(p,D,W,J,I,w,L,g,C)=>{let $=0;const de=D.length;let P=p.length-1,v=de-1;for(;$<=P&&$<=v;){const N=p[$],T=D[$]=C?an(D[$]):Kt(D[$]);if(En(N,T))Q(N,T,W,null,I,w,L,g,C);else break;$++}for(;$<=P&&$<=v;){const N=p[P],T=D[v]=C?an(D[v]):Kt(D[v]);if(En(N,T))Q(N,T,W,null,I,w,L,g,C);else break;P--,v--}if($>P){if($<=v){const N=v+1,T=N<de?D[N].el:J;for(;$<=v;)Q(null,D[$]=C?an(D[$]):Kt(D[$]),W,T,I,w,L,g,C),$++}}else if($>v)for(;$<=P;)ie(p[$],I,w,!0),$++;else{const N=$,T=$,B=new Map;for($=T;$<=v;$++){const it=D[$]=C?an(D[$]):Kt(D[$]);it.key!=null&&B.set(it.key,$)}let ce,ve=0;const Se=v-T+1;let Ce=!1,Ye=0;const Ze=new Array(Se);for($=0;$<Se;$++)Ze[$]=0;for($=N;$<=P;$++){const it=p[$];if(ve>=Se){ie(it,I,w,!0);continue}let st;if(it.key!=null)st=B.get(it.key);else for(ce=T;ce<=v;ce++)if(Ze[ce-T]===0&&En(it,D[ce])){st=ce;break}st===void 0?ie(it,I,w,!0):(Ze[st-T]=$+1,st>=Ye?Ye=st:Ce=!0,Q(it,D[st],W,null,I,w,L,g,C),ve++)}const Lt=Ce?ou(Ze):On;for(ce=Lt.length-1,$=Se-1;$>=0;$--){const it=T+$,st=D[it],Dt=D[it+1],nn=it+1<de?Dt.el||os(Dt):J;Ze[$]===0?Q(null,st,W,nn,I,w,L,g,C):Ce&&(ce<0||$!==Lt[ce]?G(st,W,nn,2):ce--)}}},G=(p,D,W,J,I=null)=>{const{el:w,type:L,transition:g,children:C,shapeFlag:$}=p;if($&6){G(p.component.subTree,D,W,J);return}if($&128){p.suspense.move(D,W,J);return}if($&64){L.move(p,D,W,Ge);return}if(L===Ne){o(w,D,W);for(let P=0;P<C.length;P++)G(C[P],D,W,J);o(p.anchor,D,W);return}if(L===_o){ne(p,D,W);return}if(J!==2&&$&1&&g)if(J===0)g.persisted&&!w[kt]?o(w,D,W):(g.beforeEnter(w),o(w,D,W),Nt(()=>g.enter(w),I));else{const{leave:P,delayLeave:v,afterLeave:N}=g,T=()=>{p.ctx.isUnmounted?i(w):o(w,D,W)},B=()=>{const ce=w._isLeaving||!!w[kt];w._isLeaving&&w[kt](!0),g.persisted&&!ce?T():P(w,()=>{T(),N&&N()})};v?v(w,T,B):B()}else o(w,D,W)},ie=(p,D,W,J=!1,I=!1)=>{const{type:w,props:L,ref:g,children:C,dynamicChildren:$,shapeFlag:de,patchFlag:P,dirs:v,cacheIndex:N,memo:T}=p;if((P===-2||$&&$.hasOnce)&&(I=!1),g!=null&&(Xt(),lo(g,null,W,p,!0),en()),N!=null&&(!p.ctx||p.ctx===D)&&(D.renderCache[N]=void 0),de&256){D.ctx.deactivate(p);return}const B=de&1&&v,ce=!Wn(p);let ve;if(ce&&(ve=L&&L.onVnodeBeforeUnmount)&&Vt(ve,D,p),de&6)Ie(p.component,W,J);else{if(de&128){p.suspense.unmount(W,J);return}B&&In(p,null,D,"beforeUnmount"),de&64?p.type.remove(p,D,W,Ge,J):$&&!$.hasOnce&&(w!==Ne||P>0&&P&64)?De($,D,W,!1,!0):(w===Ne&&P&384||!I&&de&16)&&De(C,D,W),J&&ue(p)}const Se=T!=null&&N==null;(ce&&(ve=L&&L.onVnodeUnmounted)||B||Se)&&Nt(()=>{ve&&Vt(ve,D,p),B&&In(p,null,D,"unmounted"),Se&&(p.el=null)},W)},ue=p=>{const{type:D,el:W,anchor:J,transition:I}=p,w=D===Ne;if(w&&!I){je(W,J);return}if(D===_o){S(p),I&&!I.persisted&&I.afterLeave&&I.afterLeave();return}const L=w?mo(p):p,g=()=>{w?M(W)&&je(W,J):i(W),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(L&&L.shapeFlag&1&&I&&!I.persisted){const{leave:C,delayLeave:$}=I,de=L.el,P=()=>C(de,g);$?$(de,g,P):P()}else g()},je=(p,D)=>{let W;for(;p!==D;)W=x(p),i(p),p=W;i(D)},Ie=(p,D,W)=>{const{bum:J,scope:I,job:w,subTree:L,um:g,m:C,a:$}=p;ta(C),ta($),J&&Yo(J),I.stop(),w?(w.flags|=8,ie(L,p,D,W)):p.vnode.el&&L&&(L.transition=p.vnode.transition,ie(L,p,D,W)),g&&Nt(g,D),Nt(()=>{p.isUnmounted=!0},D)},De=(p,D,W,J=!1,I=!1,w=0)=>{for(let L=w;L<p.length;L++)ie(p[L],D,W,J,I)},Qe=p=>{if(p.shapeFlag&6)return Qe(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const D=x(p.anchor||p.el),W=D&&D[dr];return W?x(W):D},Pe=(p,D,W)=>{const J=p&&D._vnode?void 0:p&&p.component?p.component.uid:cu();uc(()=>{p==null?D._vnode&&ie(D._vnode,null,null,!0):Q(D._vnode||null,p,D,null,null,null,W),D._vnode=p},J)},Ge={p:Q,um:ie,m:G,r:ue,mt:pe,mc:E,pc:Me,pbc:R,n:Qe,o:e};return{render:Pe,hydrate:void 0,createApp:_c(Pe)}}function Ui({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Tn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function nu(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ds(e,t,n=!1){const o=e.children,i=t.children;if(be(o)&&be(i))for(let s=0;s<o.length;s++){const a=o[s];let r=i[s];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=i[s]=an(i[s]),r.el=a.el),!n&&r.patchFlag!==-2&&Ds(a,r)),r.type===mi&&(r.patchFlag===-1&&(r=i[s]=an(r)),r.el=a.el),r.type===gt&&!r.el&&(r.el=a.el)}}function ou(e){const t=e.slice(),n=[0];let o,i,s,a,r;const c=e.length;for(o=0;o<c;o++){const u=e[o];if(u!==0){if(i=n[n.length-1],e[i]<u){t[o]=i,n.push(o);continue}for(s=0,a=n.length-1;s<a;)r=s+a>>1,e[n[r]]<u?s=r+1:a=r;u<e[n[s]]&&(s>0&&(t[o]=n[s-1]),n[s]=o)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}function Cr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Cr(t)}function ta(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function os(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?os(t.subTree):null}const Or=e=>e.__isSuspense;function iu(e,t){t&&t.pendingBranch?be(e)?t.effects.push(...e):t.effects.push(e):cc(e)}const Ne=Symbol.for("v-fgt"),mi=Symbol.for("v-txt"),gt=Symbol.for("v-cmt"),_o=Symbol.for("v-stc"),un=[];let Tt=null;function m(e=!1){un.push(Tt=e?null:[])}function ws(){un.pop(),Tt=un[un.length-1]||null}let yo=1;function Ko(e,t=!1){yo+=e,e<0&&Tt&&t&&(Tt.hasOnce=!0)}function Ur(e){return e.dynamicChildren=yo>0?Tt||On:null,ws(),yo>0&&Tt&&Tt.push(e),e}function z(e,t,n,o,i,s){return Ur(l(e,t,n,o,i,s,!0))}function Le(e,t,n,o,i){return Ur(H(e,t,n,o,i,!0))}function Hn(e){return e?e.__v_isVNode===!0:!1}function En(e,t){return e.type===t.type&&e.key===t.key}const Qr=({key:e})=>e??null,$o=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Je(e)||mt(e)||Ae(e)?{i:Mt,r:e,k:t,f:!!n}:e:null);function l(e,t=null,n=null,o=0,i=null,s=e===Ne?0:1,a=!1,r=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Qr(t),ref:t&&$o(t),scopeId:lr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:o,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Mt};return r?(Jo(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=Je(n)?8:16),yo>0&&!a&&Tt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Tt.push(c),c}const H=su;function su(e,t=null,n=null,o=0,i=null,s=!1){if((!e||e===yr)&&(e=gt),Hn(e)){const r=Ln(e,t,!0);return n&&Jo(r,n),yo>0&&!s&&Tt&&(r.shapeFlag&6?Tt[Tt.indexOf(e)]=r:Tt.push(r)),r.patchFlag=-2,r}if(hu(e)&&(e=e.__vccOpts),t){t=au(t);let{class:r,style:c}=t;r&&!Je(r)&&(t.class=ye(r)),He(c)&&(vs(c)&&!be(c)&&(c=tt({},c)),t.style=Et(c))}const a=Je(e)?1:Or(e)?128:pi(e)?64:He(e)?4:Ae(e)?2:0;return l(e,t,n,o,i,a,s,!0)}function au(e){return e?vs(e)||Tr(e)?tt({},e):e:null}function Ln(e,t,n=!1,o=!1){const{props:i,ref:s,patchFlag:a,children:r,transition:c}=e,u=t?ru(i||{},t):i,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Qr(u),ref:t&&t.ref?n&&s?be(s)?s.concat($o(t)):[s,$o(t)]:$o(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ne?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ln(e.ssContent),ssFallback:e.ssFallback&&Ln(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&o&&bn(d,c.clone(d)),d}function Te(e=" ",t=0){return H(mi,null,e,t)}function Yr(e,t){const n=H(_o,null,e);return n.staticCount=t,n}function me(e="",t=!1){return t?(m(),Le(gt,null,e)):H(gt,null,e)}function Kt(e){return e==null||typeof e=="boolean"?H(gt):be(e)?H(Ne,null,e.slice()):Hn(e)?an(e):H(mi,null,String(e))}function an(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ln(e)}function Jo(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(be(t))n=16;else if(typeof t=="object")if(o&65){const i=t.default;i&&(i._c&&(i._d=!1),Jo(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Tr(t)?t._ctx=Mt:i===3&&Mt&&(Mt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(Ae(t)){if(o&65){Jo(e,{default:t});return}t={default:t,_ctx:Mt},n=32}else t=String(t),o&64?(n=16,t=[Te(t)]):n=8;e.children=t,e.shapeFlag|=n}function ru(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const i in o)if(i==="class")t.class!==o.class&&(t.class=ye([t.class,o.class]));else if(i==="style")t.style=Et([t.style,o.style]);else if(si(i)){const s=t[i],a=o[i];a&&s!==a&&!(be(s)&&s.includes(a))?t[i]=s?[].concat(s,a):a:a==null&&s==null&&!ai(i)&&(t[i]=a)}else i!==""&&(t[i]=o[i])}return t}function Vt(e,t,n,o=null){Qt(e,t,7,[n,o])}const lu=br();let Pr=0;function cu(){return Pr}function uu(e,t,n){const o=e.type,i=(t?t.appContext:e.appContext)||lu,s={uid:Pr++,vnode:e,type:o,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Cl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ar(o,i),emitsOptions:Lr(o,i),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:o.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Rc.bind(null,s),e.ce&&e.ce(s),s}let pt=null;const yi=()=>pt||Mt;let qo,vo;{const e=ui(),t=(n,o)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(o),s=>{i.length>1?i.forEach(a=>a(s)):i[0](s)}};qo=t("__VUE_INSTANCE_SETTERS__",n=>pt=n),vo=t("__VUE_SSR_SETTERS__",n=>Vn=n)}const Do=e=>{const t=pt;return qo(e),e.scope.on(),()=>{e.scope.off(),qo(t)}},na=()=>{pt&&pt.scope.off(),qo(null)};function _r(e){return e.vnode.shapeFlag&4}let Vn=!1;function du(e,t=!1,n=!1){t&&vo(t);const{props:o,children:i}=e.vnode,s=_r(e);Fc(e,o,s,t),qc(e,i,n||t);const a=s?pu(e,t):void 0;return t&&vo(!1),a}function pu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ec);const{setup:o}=n;if(o){Xt();const i=e.setupContext=o.length>1?gu(e):null,s=Do(e),a=bo(o,e,0,[e.props,i]),r=Ca(a);if(en(),s(),(r||e.sp)&&!Wn(e)&&bs(e),r){if(a.then(na,na),t)return a.then(c=>{vo(!0);try{oa(e,c,t)}finally{vo(!1)}}).catch(c=>{Lo(c,e,0)});e.asyncDep=a}else oa(e,a)}else $r(e)}function oa(e,t,n){Ae(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:He(t)&&(e.setupState=nr(t)),$r(e)}function $r(e,t,n){const o=e.type;e.render||(e.render=o.render||qt);{const i=Do(e);Xt();try{Cc(e)}finally{en(),i()}}}const Mu={get(e,t){return ht(e,"get",""),e[t]}};function gu(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Mu),slots:e.slots,emit:e.emit,expose:t}}function vi(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(nr(Xl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in co)return co[n](e)},has(t,n){return n in t||n in co}})):e.proxy}function fu(e,t=!0){return Ae(e)?e.displayName||e.name:e.name||t&&e.__name}function hu(e){return Ae(e)&&"__vccOpts"in e}const we=(e,t)=>ic(e,t,Vn);function Ue(e,t,n){try{Ko(-1);const o=arguments.length;return o===2?He(t)&&!be(t)?Hn(t)?H(e,null,[t]):H(e,t):H(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&Hn(n)&&(n=[n]),H(e,t,n))}finally{Ko(1)}}const mu="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let is;const ia=typeof window<"u"&&window.trustedTypes;if(ia)try{is=ia.createPolicy("vue",{createHTML:e=>e})}catch{}const Rr=is?e=>is.createHTML(e):e=>e,yu="http://www.w3.org/2000/svg",vu="http://www.w3.org/1998/Math/MathML",sn=typeof document<"u"?document:null,sa=sn&&sn.createElement("template"),Nu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const i=t==="svg"?sn.createElementNS(yu,e):t==="mathml"?sn.createElementNS(vu,e):n?sn.createElement(e,{is:n}):sn.createElement(e);return e==="select"&&o&&o.multiple!=null&&i.setAttribute("multiple",o.multiple),i},createText:e=>sn.createTextNode(e),createComment:e=>sn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>sn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,i,s){const a=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{sa.innerHTML=Rr(o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e);const r=sa.content;if(o==="svg"||o==="mathml"){const c=r.firstChild;for(;c.firstChild;)r.appendChild(c.firstChild);r.removeChild(c)}t.insertBefore(r,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Mn="transition",Jn="animation",Gn=Symbol("_vtc"),Wr={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Br=tt({},gr,Wr),xu=e=>(e.displayName="Transition",e.props=Br,e),dt=xu((e,{slots:t})=>Ue(vc,Hr(e),t)),zn=(e,t=[])=>{be(e)?e.forEach(n=>n(...t)):e&&e(...t)},aa=e=>e?be(e)?e.some(t=>t.length>1):e.length>1:!1;function Hr(e){const t={};for(const U in e)U in Wr||(t[U]=e[U]);if(e.css===!1)return t;const{name:n="v",type:o,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:r=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:u=a,appearToClass:d=r,leaveFromClass:M=`${n}-leave-from`,leaveActiveClass:x=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,O=bu(i),Q=O&&O[0],K=O&&O[1],{onBeforeEnter:X,onEnter:Z,onEnterCancelled:ne,onLeave:S,onLeaveCancelled:_,onBeforeAppear:j=X,onAppear:b=Z,onAppearCancelled:E=ne}=t,f=(U,ee,pe,ge)=>{U._enterCancelled=ge,hn(U,ee?d:r),hn(U,ee?u:a),pe&&pe()},R=(U,ee)=>{U._isLeaving=!1,hn(U,M),hn(U,h),hn(U,x),ee&&ee()},F=U=>(ee,pe)=>{const ge=U?b:Z,le=()=>f(ee,U,pe);zn(ge,[ee,le]),ra(()=>{hn(ee,U?c:s),Gt(ee,U?d:r),aa(ge)||la(ee,o,Q,le)})};return tt(t,{onBeforeEnter(U){zn(X,[U]),Gt(U,s),Gt(U,a)},onBeforeAppear(U){zn(j,[U]),Gt(U,c),Gt(U,u)},onEnter:F(!1),onAppear:F(!0),onLeave(U,ee){U._isLeaving=!0;const pe=()=>R(U,ee);Gt(U,M),U._enterCancelled?(Gt(U,x),ss(U)):(ss(U),Gt(U,x)),ra(()=>{U._isLeaving&&(hn(U,M),Gt(U,h),aa(S)||la(U,o,K,pe))}),zn(S,[U,pe])},onEnterCancelled(U){f(U,!1,void 0,!0),zn(ne,[U])},onAppearCancelled(U){f(U,!0,void 0,!0),zn(E,[U])},onLeaveCancelled(U){R(U),zn(_,[U])}})}function bu(e){if(e==null)return null;if(He(e))return[Qi(e.enter),Qi(e.leave)];{const t=Qi(e);return[t,t]}}function Qi(e){return jl(e)}function Gt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Gn]||(e[Gn]=new Set)).add(t)}function hn(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const n=e[Gn];n&&(n.delete(t),n.size||(e[Gn]=void 0))}function ra(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Lu=0;function la(e,t,n,o){const i=e._endId=++Lu,s=()=>{i===e._endId&&o()};if(n!=null)return setTimeout(s,n);const{type:a,timeout:r,propCount:c}=Vr(e,t);if(!a)return o();const u=a+"end";let d=0;const M=()=>{e.removeEventListener(u,x),s()},x=h=>{h.target===e&&++d>=c&&M()};setTimeout(()=>{d<c&&M()},r+1),e.addEventListener(u,x)}function Vr(e,t){const n=window.getComputedStyle(e),o=O=>(n[O]||"").split(", "),i=o(`${Mn}Delay`),s=o(`${Mn}Duration`),a=ca(i,s),r=o(`${Jn}Delay`),c=o(`${Jn}Duration`),u=ca(r,c);let d=null,M=0,x=0;t===Mn?a>0&&(d=Mn,M=a,x=s.length):t===Jn?u>0&&(d=Jn,M=u,x=c.length):(M=Math.max(a,u),d=M>0?a>u?Mn:Jn:null,x=d?d===Mn?s.length:c.length:0);const h=d===Mn&&/\b(?:transform|all)(?:,|$)/.test(o(`${Mn}Property`).toString());return{type:d,timeout:M,propCount:x,hasTransform:h}}function ca(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,o)=>ua(n)+ua(e[o])))}function ua(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function ss(e){return(e?e.ownerDocument:document).body.offsetHeight}function ju(e,t,n){const o=e[Gn];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Xo=Symbol("_vod"),Is=Symbol("_vsh"),St={name:"show",beforeMount(e,{value:t},{transition:n}){e[Xo]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):qn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),qn(e,!0),o.enter(e)):o.leave(e,()=>{qn(e,!1)}):qn(e,t))},beforeUnmount(e,{value:t}){qn(e,t)}};function qn(e,t){e.style.display=t?e[Xo]:"none",e[Is]=!t}const Du=Symbol(""),wu=/(?:^|;)\s*display\s*:/;function Iu(e,t,n){const o=e.style,i=Je(n);let s=!1;if(n&&!i){if(t)if(Je(t))for(const a of t.split(";")){const r=a.slice(0,a.indexOf(":")).trim();n[r]==null&&io(o,r,"")}else for(const a in t)n[a]==null&&io(o,a,"");for(const a in n){a==="display"&&(s=!0);const r=n[a];r!=null?zu(e,a,!Je(t)&&t?t[a]:void 0,r)||io(o,a,r):io(o,a,"")}}else if(i){if(t!==n){const a=o[Du];a&&(n+=";"+a),o.cssText=n,s=wu.test(n)}}else t&&e.removeAttribute("style");Xo in e&&((!i||t!==n)&&(e[Xo]=s?o.display:""),e[Is]&&(o.display="none"))}const Co=/\s*!important$/;function io(e,t,n){if(be(n))n.forEach(o=>io(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))Co.test(n)?e.setProperty(t,n.replace(Co,""),"important"):e.setProperty(t,n);else{const o=Tu(e,t);Co.test(n)?e.setProperty(jn(o),n.replace(Co,""),"important"):e[o]=n}}const da=["Webkit","Moz","ms"],Yi={};function Tu(e,t){const n=Yi[t];if(n)return n;let o=bt(t);if(o!=="filter"&&o in e)return Yi[t]=o;o=li(o);for(let i=0;i<da.length;i++){const s=da[i]+o;if(s in e)return Yi[t]=s}return t}function zu(e,t,n,o){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Je(o)&&n===o}const pa="http://www.w3.org/1999/xlink";function Ma(e,t,n,o,i,s=Al(t)){o&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(pa,t.slice(6,t.length)):e.setAttributeNS(pa,t,n):n==null||s&&!Ya(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Rt(n)?String(n):n)}function ga(e,t,n,o,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Rr(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const r=s==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(r!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const r=typeof e[t];r==="boolean"?n=Ya(n):n==null&&r==="string"?(n="",a=!0):r==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(i||t)}function Cn(e,t,n,o){e.addEventListener(t,n,o)}function Au(e,t,n,o){e.removeEventListener(t,n,o)}const fa=Symbol("_vei");function ku(e,t,n,o,i=null){const s=e[fa]||(e[fa]={}),a=s[t];if(o&&a)a.value=o;else{const[r,c]=Cu(t);if(o){const u=s[t]=Qu(o,i);Cn(e,r,u,c)}else a&&(Au(e,r,a,c),s[t]=void 0)}}const Su=/(Once|Passive|Capture)$/,Eu=/^on:?(?:Once|Passive|Capture)$/;function Cu(e){let t,n;for(;(n=e.match(Su))&&!Eu.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):jn(e.slice(2)),t]}let Pi=0;const Ou=Promise.resolve(),Uu=()=>Pi||(Ou.then(()=>Pi=0),Pi=Date.now());function Qu(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;const i=n.value;if(be(i)){const s=o.stopImmediatePropagation;o.stopImmediatePropagation=()=>{s.call(o),o._stopped=!0};const a=i.slice(),r=[o];for(let c=0;c<a.length&&!o._stopped;c++){const u=a[c];u&&Qt(u,t,5,r)}}else Qt(i,t,5,[o])};return n.value=e,n.attached=Uu(),n}const ha=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Yu=(e,t,n,o,i,s)=>{const a=i==="svg";t==="class"?ju(e,o,a):t==="style"?Iu(e,n,o):si(t)?ai(t)||ku(e,t,n,o,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Pu(e,t,o,a))?(ga(e,t,o),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ma(e,t,o,a,s,t!=="value")):e._isVueCE&&(_u(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!Je(o)))?ga(e,bt(t),o,s,t):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Ma(e,t,o,a))};function Pu(e,t,n,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&ha(t)&&Ae(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ha(t)&&Je(n)?!1:t in e}function _u(e,t){const n=e._def.props;if(!n)return!1;const o=bt(t);return Array.isArray(n)?n.some(i=>bt(i)===o):Object.keys(n).some(i=>bt(i)===o)}const Gr=new WeakMap,Fr=new WeakMap,ei=Symbol("_moveCb"),ma=Symbol("_enterCb"),as=new WeakMap,$u=e=>(delete e.props.mode,e),Ru=$u({name:"TransitionGroup",props:tt({},Br,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=yi(),o=Mr();let i,s,a,r;const c=()=>(r===void 0&&(r=i.length>0&&Ku(i[0].el,n.vnode.el,ya(e))),r);return gi(()=>{if(as.delete(n),!c()){i=[],a=void 0;return}const u=ya(e);i.forEach(Bu);const d=a&&Zu(a,n.vnode.el);a=void 0,i.forEach(x=>Hu(x,d));const M=i.filter(Vu);ss(n.vnode.el),M.forEach(x=>{const h=x.el,O=h.style;Gt(h,u),O.transform=O.webkitTransform=O.transitionDuration="";const Q=h[ei]=K=>{K&&K.target!==h||(!K||K.propertyName.endsWith("transform"))&&(h.removeEventListener("transitionend",Q),h[ei]=null,hn(h,u))};h.addEventListener("transitionend",Q)}),i=[]}),()=>{const u=Re(e),d=Hr(u);let M=u.tag||Ne;if(i=[],r=void 0,s)for(let x=0;x<s.length;x++){const h=s[x];h.el&&h.el instanceof Element&&!h.el[Is]&&(i.push(h),bn(h,ho(h,d,o,n)),Gr.set(h,Ni(h.el)))}s=t.default?xs(t.default()):[];for(let x=0;x<s.length;x++){const h=s[x];h.key!=null&&bn(h,ho(h,d,o,n))}return i.length&&(a=Gu(n),as.set(n,c)),H(M,null,s)}}}),Wu=Ru;function Bu(e){const t=e.el;t[ei]&&t[ei](),t[ma]&&t[ma]()}function ya(e){return e.moveClass||`${e.name||"v"}-move`}function Hu(e,t){Fr.set(e,Ni(e.el,t))}function Vu(e){const t=Gr.get(e),n=Fr.get(e),o=t.left-n.left,i=t.top-n.top;if(o||i){const s=e.el,a=s.style,r=s.getBoundingClientRect();let c=1,u=1;return s.offsetWidth&&(c=r.width/s.offsetWidth),s.offsetHeight&&(u=r.height/s.offsetHeight),(!Number.isFinite(c)||c===0)&&(c=1),(!Number.isFinite(u)||u===0)&&(u=1),Math.abs(c-1)<.01&&(c=1),Math.abs(u-1)<.01&&(u=1),a.transform=a.webkitTransform=`translate(${o/c}px,${i/u}px)`,a.transitionDuration="0s",e}}function Ni(e,t){const n=e.getBoundingClientRect();return{left:n.left-(t?t.left:0),top:n.top-(t?t.top:0)}}function Gu(e){let t;for(let n=e.parent;n;n=n.parent){const o=as.get(n);if(o){const i=Fu(n.vnode.el,e.vnode.el);i&&(t||(t=[])).push(tt(Ni(i),{item:i,willMove:o}))}}return t}function Fu(e,t){const n=e.nodeType===1?e:e.parentNode;for(;t&&t.parentNode!==n;)t=t.parentNode;if(t&&t.nodeType===1)return t}function Zu(e,t){const n=e.find(o=>o.willMove()&&o.item.contains(t));return n&&Ni(n.item,n)}function Ku(e,t,n){const o=e.cloneNode(),i=e[Gn];i&&i.forEach(r=>{r.split(/\s+/).forEach(c=>c&&o.classList.remove(c))}),n.split(/\s+/).forEach(r=>r&&o.classList.add(r)),o.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(o);const{hasTransform:a}=Vr(o);return s.removeChild(o),a}const ti=e=>{const t=e.props["onUpdate:modelValue"]||!1;return be(t)?n=>Yo(t,n):t};function Ju(e){e.target.composing=!0}function va(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Un=Symbol("_assign"),Oo=Symbol("_initialValue");function _i(e,t,n){return t&&(e=e.trim()),n&&(e=ci(e)),e}const xi={created(e,{modifiers:{lazy:t,trim:n,number:o}},i){e.parentNode&&(e.type==="text"?e[Oo]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Oo]=e.defaultValue.replace(/\r\n?/g,`
`))),e[Un]=ti(i);const s=o||i.props&&i.props.type==="number";Cn(e,t?"change":"input",a=>{a.target.composing||e[Un](_i(e.value,n,s))}),(n||s)&&Cn(e,"change",()=>{e.value=_i(e.value,n,s)}),t||(Cn(e,"compositionstart",Ju),Cn(e,"compositionend",va),Cn(e,"change",va))},mounted(e,{value:t,modifiers:{trim:n,number:o}}){const i=t??"",s=e[Oo];delete e[Oo],s!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==s?e[Un](_i(e.value,n,o)):e.value=i},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:o,trim:i,number:s}},a){if(e[Un]=ti(a),e.composing)return;const r=(s||e.type==="number")&&!/^0\d/.test(e.value)?ci(e.value):e.value,c=t??"";if(r===c)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(o&&t===n||i&&e.value.trim()===c)||(e.value=c)}},qu={deep:!0,created(e,{value:t,modifiers:{number:n}},o){e._modelValue=t,Cn(e,"change",()=>{const i=Array.prototype.filter.call(e.options,c=>c.selected).map(c=>n?ci(ni(c)):ni(c)),s=e.multiple,a=s?Yn(e._modelValue)?new Set(i):i:i[0],r=e._pendingValue=[s,s?be(a)?i.slice():i:a];try{e[Un](a)}finally{ke(()=>{e._pendingValue===r&&(e._pendingValue=void 0)})}}),e[Un]=ti(o)},mounted(e,{value:t}){Na(e,t)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[Un]=ti(n)},updated(e,{value:t}){const n=e._pendingValue;e._pendingValue=void 0,(!n||n[0]!==e.multiple||!Xu(t,n[1],n[0]))&&Na(e,t)}};function Xu(e,t,n){if(!n||be(e))return Nn(e,t);if(Yn(e)){if(e.size!==t.length)return!1;for(const o of t)if(!e.has(o))return!1;return!0}return!1}function Na(e,t){const n=e.multiple,o=be(t);if(!(n&&!o&&!Yn(t))){for(let i=0,s=e.options.length;i<s;i++){const a=e.options[i],r=ni(a);if(n)if(o){const c=typeof r;c==="string"||c==="number"?a.selected=t.some(u=>String(u)===String(r)):a.selected=El(t,r)>-1}else a.selected=t.has(r);else if(Nn(ni(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function ni(e){return"_value"in e?e._value:e.value}const ed=["ctrl","shift","alt","meta"],td={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>ed.some(n=>e[`${n}Key`]&&!t.includes(n))},Ot=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),o=t.join(".");return n[o]||(n[o]=((i,...s)=>{for(let a=0;a<t.length;a++){const r=td[t[a]];if(r&&r(i,t))return}return e(i,...s)}))},nd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},uo=(e,t)=>{const n=e._withKeys||(e._withKeys={}),o=t.join(".");return n[o]||(n[o]=(i=>{if(!("key"in i))return;const s=jn(i.key);if(t.some(a=>a===s||nd[a]===s))return e(i)}))},od=tt({patchProp:Yu},Nu);let xa;function id(){return xa||(xa=eu(od))}const sd=((...e)=>{const t=id().createApp(...e),{mount:n}=t;return t.mount=o=>{const i=rd(o);if(!i)return;const s=t._component;!Ae(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const a=n(i,!1,ad(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t});function ad(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function rd(e){return Je(e)?document.querySelector(e):e}const ld="modulepreload",cd=function(e){return"/harness-ui/"+e},ba={},ud=function(t,n,o){let i=Promise.resolve();if(n&&n.length>0){let a=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(M=>({status:"fulfilled",value:M}),M=>({status:"rejected",reason:M}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),c=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));i=a(n.map(u=>{if(u=cd(u),u in ba)return;ba[u]=!0;const d=u.endsWith(".css"),M=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${M}`))return;const x=document.createElement("link");if(x.rel=d?"stylesheet":ld,d||(x.as="script"),x.crossOrigin="",x.href=u,c&&x.setAttribute("nonce",c),document.head.appendChild(x),d)return new Promise((h,O)=>{x.addEventListener("load",h),x.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a}return i.then(a=>{for(const r of a||[])r.status==="rejected"&&s(r.reason);return t().catch(s)})};/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Uo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=({size:e,strokeWidth:t=2,absoluteStrokeWidth:n,color:o,iconNode:i,name:s,class:a,...r},{slots:c})=>Ue("svg",{...Uo,width:e||Uo.width,height:e||Uo.height,stroke:o||Uo.stroke,"stroke-width":n?Number(t)*24/Number(e):t,class:["lucide",`lucide-${dd(s??"icon")}`],...r},[...i.map(u=>Ue(...u)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=(e,t)=>(n,{slots:o})=>Ue(pd,{...n,iconNode:t,name:e},o);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=Ve("ArrowDownIcon",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=Ve("ArrowLeftIcon",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=Ve("ArrowUpRightIcon",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=Ve("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=Ve("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=Ve("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=Ve("CircleAlertIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=Ve("ClockIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=Ve("CpuIcon",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=Ve("FileSearchIcon",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=Ve("FileTextIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=Ve("GithubIcon",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=Ve("GlobeIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=Ve("LayoutListIcon",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=Ve("ListChecksIcon",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=Ve("LoaderCircleIcon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=Ve("MessageSquareIcon",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=Ve("MinusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=Ve("PanelRightOpenIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=Ve("PaperclipIcon",[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=Ve("PencilIcon",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=Ve("PlusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=Ve("SearchIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=Ve("SparklesIcon",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=Ve("TerminalIcon",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=Ve("TriangleAlertIcon",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=Ve("UserRoundIcon",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=Ve("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Dd=`<script setup lang="ts">
import { computed, ref, useId, watch } from "vue";
import { Check, ChevronDown, CircleAlert, FileSearch, Globe, ListChecks, LoaderCircle, Terminal } from "lucide-vue-next";

type Section = "environment" | "thought" | "tools";
interface EnvironmentStep { label: string; duration?: string }
interface ActivityTool {
  id: string;
  label: string;
  name?: string;
  status: "success" | "failed" | "running" | "pending";
  duration?: string;
  input?: string;
  output?: string;
}
const props = withDefaults(defineProps<{
  environmentSteps?: EnvironmentStep[];
  environmentDuration?: string;
  thought?: string;
  tools?: ActivityTool[];
  initiallyExpanded?: Section[];
  busy?: boolean;
  disabled?: boolean;
}>(), {
  environmentSteps: () => [
    { label: "Connect workspace", duration: "8s" },
    { label: "Prepare project files", duration: "12s" },
    { label: "Start the assistant", duration: "5s" },
  ],
  environmentDuration: "25s",
  thought: "Review the content, then arrange the components. Keep a clear hierarchy and give each section room to breathe.",
  tools: () => [
    { id: "read", label: "Read design files", name: "read_file", status: "success", duration: "0.6s", input: "src/theme.css", output: "Read 24 style variables, including colors and typography." },
    { id: "search", label: "Search components", name: "web_search", status: "success", duration: "1.2s", input: "Accessible navigation patterns", output: "Found three navigation patterns with clear groups and keyboard controls." },
    { id: "preview", label: "Generate preview", name: "preview_page", status: "failed", duration: "1.0s", input: "http://localhost:3000", output: "The preview server is not running. Start the project and try again." },
  ],
  initiallyExpanded: () => ["tools"],
  busy: false,
  disabled: false,
});
const emit = defineEmits<{
  toggle: [section: Section, expanded: boolean];
  "tool-toggle": [toolId: string, expanded: boolean];
}>();
const instanceId = \`activity-\${useId().replace(/:/g, "")}\`;
const expanded = ref(new Set<Section>(props.initiallyExpanded));
const expandedTools = ref(new Set<string>());
const foldSnapshots = new WeakMap<HTMLElement, { height: number; opacity: string }>();
function captureFold(id: string) {
  const panel = document.getElementById(id);
  if (panel) foldSnapshots.set(panel, { height: panel.getBoundingClientRect().height, opacity: getComputedStyle(panel).opacity });
}
const failedCount = computed(() => props.tools.filter(tool => tool.status === "failed").length);
const isWorking = computed(() => props.busy || props.tools.some(tool => tool.status === "running" || tool.status === "pending"));
const toolStatusLabel = { success: "Done", failed: "Failed", running: "In progress", pending: "Queued" };
function hasDetails(tool: ActivityTool) { return Boolean(tool.input || tool.output); }
watch(() => props.initiallyExpanded, sections => { expanded.value = new Set(sections); }, { deep: true });
watch(() => props.tools, tools => {
  const validIds = new Set(tools.filter(hasDetails).map(tool => tool.id));
  expandedTools.value = new Set([...expandedTools.value].filter(id => validIds.has(id)));
}, { deep: true });
function toggle(section: Section) {
  if (props.disabled) return;
  captureFold(\`\${instanceId}-\${section}\`);
  const next = new Set(expanded.value);
  next.has(section) ? next.delete(section) : next.add(section);
  expanded.value = next;
  emit("toggle", section, next.has(section));
}
function toggleTool(toolId: string) {
  const tool = props.tools.find(item => item.id === toolId);
  if (props.disabled || !tool || !hasDetails(tool)) return;
  captureFold(\`\${instanceId}-tool-\${props.tools.findIndex(tool => tool.id === toolId)}\`);
  const next = new Set(expandedTools.value);
  next.has(toolId) ? next.delete(toolId) : next.add(toolId);
  expandedTools.value = next;
  emit("tool-toggle", toolId, next.has(toolId));
}
function beforeEnter(element: Element) {
  const panel = element as HTMLElement;
  panel.removeAttribute("inert");
  const snapshot = foldSnapshots.get(panel);
  const height = snapshot?.height ?? panel.getBoundingClientRect().height;
  const opacity = snapshot?.opacity ?? getComputedStyle(panel).opacity;
  panel.style.height = \`\${height}px\`;
  panel.style.opacity = height ? opacity : "0";
}
function enter(element: Element) {
  const panel = element as HTMLElement;
  void panel.offsetHeight;
  panel.style.height = \`\${panel.scrollHeight}px\`;
  panel.style.opacity = "1";
  foldSnapshots.delete(panel);
}
function afterEnter(element: Element) {
  (element as HTMLElement).style.removeProperty("height");
  (element as HTMLElement).style.removeProperty("opacity");
}
function freezeFold(element: Element) {
  const panel = element as HTMLElement;
  const snapshot = foldSnapshots.get(panel);
  const hidden = getComputedStyle(panel).display === "none";
  const height = hidden ? snapshot?.height ?? 0 : panel.getBoundingClientRect().height;
  const opacity = hidden ? snapshot?.opacity ?? "0" : getComputedStyle(panel).opacity;
  foldSnapshots.set(panel, { height, opacity });
  panel.style.height = \`\${height}px\`;
  panel.style.opacity = opacity;
}
function afterLeave(element: Element) {
  const panel = element as HTMLElement;
  panel.style.removeProperty("height");
  panel.style.removeProperty("opacity");
}
function leave(element: Element) {
  const panel = element as HTMLElement;
  panel.setAttribute("inert", "");
  panel.style.height = \`\${panel.getBoundingClientRect().height}px\`;
  void panel.offsetHeight;
  panel.style.height = "0px";
  panel.style.opacity = "0";
}
<\/script>

<template>
  <section class="activity-timeline" aria-label="Task activity">
    <header class="activity-heading"><span><ListChecks :size="17" :stroke-width="1.6" /> Activity</span><span aria-live="polite">{{ isWorking ? 'In progress' : 'Finished' }}</span></header>
    <div class="activity-section">
      <button class="activity-section-toggle" type="button" :disabled="disabled" :aria-expanded="expanded.has('environment')" :aria-controls="\`\${instanceId}-environment\`" @click="toggle('environment')"><Check :size="15" class="status-success" /><strong>Environment ready</strong><span class="section-meta">{{ environmentSteps.length }} steps <span>·</span> {{ environmentDuration }}</span><ChevronDown :size="14" :class="{ turned: expanded.has('environment') }" /></button>
      <Transition name="activity-fold" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave" @enter-cancelled="freezeFold" @leave-cancelled="freezeFold"><div v-show="expanded.has('environment')" :inert="!expanded.has('environment') || undefined" :aria-hidden="!expanded.has('environment') || undefined" :id="\`\${instanceId}-environment\`" class="activity-fold"><ol class="environment-list"><li v-for="step in environmentSteps" :key="step.label"><Check :size="13" /><span>{{ step.label }}</span><small>{{ step.duration }}</small></li></ol></div></Transition>
    </div>
    <div class="activity-section">
      <button class="activity-section-toggle" type="button" :disabled="disabled" :aria-expanded="expanded.has('thought')" :aria-controls="\`\${instanceId}-thought\`" @click="toggle('thought')"><LoaderCircle v-if="busy" :size="15" class="activity-spinner" /><Check v-else :size="15" class="status-success" /><strong>Thinking process</strong><span class="section-meta">{{ busy ? 'In progress' : 'Completed' }}</span><ChevronDown :size="14" :class="{ turned: expanded.has('thought') }" /></button>
      <Transition name="activity-fold" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave" @enter-cancelled="freezeFold" @leave-cancelled="freezeFold"><div v-show="expanded.has('thought')" :inert="!expanded.has('thought') || undefined" :aria-hidden="!expanded.has('thought') || undefined" :id="\`\${instanceId}-thought\`" class="activity-fold"><p class="thought-summary">{{ thought }}</p></div></Transition>
    </div>
    <div class="activity-section tools-section">
      <button class="activity-section-toggle tools-heading" type="button" :disabled="disabled" :aria-expanded="expanded.has('tools')" :aria-controls="\`\${instanceId}-tools\`" @click="toggle('tools')"><LoaderCircle v-if="isWorking" :size="15" class="activity-spinner" /><CircleAlert v-else-if="failedCount" :size="15" class="status-failed" /><Check v-else :size="15" class="status-success" /><strong>{{ tools.length }} tool{{ tools.length === 1 ? '' : 's' }} used</strong><span v-if="failedCount" class="failed-count">{{ failedCount }} failed</span><span v-else class="section-meta">{{ isWorking ? 'In progress' : 'Completed' }}</span><ChevronDown :size="14" :class="{ turned: expanded.has('tools') }" /></button>
      <Transition name="activity-fold" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave" @enter-cancelled="freezeFold" @leave-cancelled="freezeFold"><div v-show="expanded.has('tools')" :inert="!expanded.has('tools') || undefined" :aria-hidden="!expanded.has('tools') || undefined" :id="\`\${instanceId}-tools\`" class="activity-fold"><ul class="activity-tools"><li v-for="(tool, index) in tools" :key="tool.id" :class="{ 'failed-tool': tool.status === 'failed' }"><component :is="hasDetails(tool) ? 'button' : 'div'" class="activity-tool-toggle" :type="hasDetails(tool) ? 'button' : undefined" :disabled="hasDetails(tool) ? disabled : undefined" :aria-expanded="hasDetails(tool) ? expandedTools.has(tool.id) : undefined" :aria-controls="hasDetails(tool) ? \`\${instanceId}-tool-\${index}\` : undefined" @click="toggleTool(tool.id)"><LoaderCircle v-if="tool.status === 'running'" :size="15" class="activity-spinner" /><CircleAlert v-else-if="tool.status === 'failed'" :size="15" class="status-failed" /><FileSearch v-else-if="index === 0" :size="15" /><Globe v-else-if="index === 1" :size="15" /><Terminal v-else :size="15" /><span class="tool-label">{{ tool.label }}</span><span class="tool-duration">{{ tool.duration }}</span><span :class="['tool-state', { 'status-failed': tool.status === 'failed' }]">{{ toolStatusLabel[tool.status] }}</span><ChevronDown v-if="hasDetails(tool)" :size="13" :class="{ turned: expandedTools.has(tool.id) }" /></component><Transition name="activity-fold" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave" @enter-cancelled="freezeFold" @leave-cancelled="freezeFold"><div v-show="hasDetails(tool) && expandedTools.has(tool.id)" :inert="!expandedTools.has(tool.id) || undefined" :aria-hidden="!expandedTools.has(tool.id) || undefined" :id="\`\${instanceId}-tool-\${index}\`" class="activity-fold"><div class="tool-details"><code v-if="tool.name" class="tool-name">{{ tool.name }}</code><div v-if="tool.input"><span class="detail-label">Input</span><pre>{{ tool.input }}</pre></div><div v-if="tool.output"><span :class="['detail-label', { 'status-failed': tool.status === 'failed' }]">Output</span><pre :class="{ 'failed-output': tool.status === 'failed' }">{{ tool.output }}</pre></div><p v-if="!tool.input && !tool.output" class="empty-details">No additional output.</p></div></div></Transition></li></ul></div></Transition>
    </div>
  </section>
</template>

<style scoped>
.activity-timeline { --activity-success: #89a28d; --activity-error: #c17a72; --activity-hover: color-mix(in srgb, var(--demo-muted, #777782) 8%, transparent); box-sizing: border-box; width: 360px; max-width: 100%; padding: 20px 20px 14px; border: 1px solid var(--demo-border, #e8e8ed); border-radius: 11px; color: var(--demo-text, #252529); background: var(--demo-surface, #fff); font-family: Inter, "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 13px; text-align: left; }
.activity-timeline *, .activity-timeline *::before, .activity-timeline *::after { box-sizing: border-box; }.activity-timeline button { font: inherit; cursor: pointer; }.activity-timeline button:focus-visible { outline: 2px solid color-mix(in srgb, var(--accent, #7b61ff) 65%, transparent); outline-offset: 2px; }
.activity-heading { display: flex; align-items: center; justify-content: space-between; padding: 0 1px 15px; color: var(--demo-muted, #777782); }.activity-heading > span:first-child { display: flex; align-items: center; gap: 7px; font-size: 15px; font-weight: 500; color: var(--demo-text, #252529); }.activity-heading > span:last-child { font-size: 12px; }
.activity-section { border-top: 1px solid var(--demo-border, #e8e8ed); }.activity-section-toggle { display: flex; align-items: center; gap: 8px; width: 100%; min-height: 44px; padding: 0 1px; border: 0; border-radius: 4px; background: transparent; color: var(--demo-muted, #777782); text-align: left; transition: background-color 160ms ease, color 160ms ease; }.activity-section-toggle:is(:hover, :focus-visible):not(:disabled) { background: var(--activity-hover); color: var(--demo-text, #252529); }.activity-section-toggle strong { color: var(--demo-text, #252529); font-size: 14px; font-weight: 500; }.activity-section-toggle > svg { flex: 0 0 auto; }.activity-section-toggle > svg:last-child { margin-left: 1px; color: var(--demo-muted, #777782); transition: transform .3s cubic-bezier(.22,1,.36,1); }.activity-section-toggle .turned, .activity-tool-toggle .turned { transform: rotate(180deg); }
.section-meta { display: flex; align-items: center; gap: 6px; margin-left: auto; color: var(--demo-muted, #777782); font-size: 12px; font-variant-numeric: tabular-nums; }.section-meta > span { opacity: .6; }.failed-count { margin-left: auto; color: var(--activity-error); font-size: 12px; }.status-success { color: var(--activity-success); }.status-failed { color: var(--activity-error); }
.activity-timeline button:disabled { opacity: .5; cursor: not-allowed; }
.activity-spinner { color: var(--accent, #7b61ff); }
.activity-spinner :deep(path) { transform-origin: 12px 12px; animation: activity-spinner-turn 1.1s linear infinite; }
@keyframes activity-spinner-turn { to { transform: rotate(360deg); } }
.activity-fold { overflow: hidden; }.activity-fold-enter-active, .activity-fold-leave-active { transition: height .34s cubic-bezier(.22,1,.36,1), opacity .24s ease; }.environment-list, .activity-tools { min-width: 0; margin: 0 0 11px 7px; padding: 0 0 0 15px; border-left: 1px solid var(--demo-border, #e8e8ed); list-style: none; }.environment-list { display: grid; gap: 0; padding-top: 2px; }.environment-list li { display: flex; align-items: center; gap: 9px; min-height: 33px; color: var(--demo-muted, #777782); font-size: 13px; }.environment-list li > svg { color: var(--activity-success); }.environment-list small { margin-left: auto; padding-right: 15px; font-size: 12px; font-variant-numeric: tabular-nums; }.thought-summary { margin: 0 0 13px 22px; padding: 1px 8px 1px 0; color: var(--demo-muted, #777782); font-size: 13px; line-height: 1.8; overflow-wrap: anywhere; }
.activity-tools { padding-top: 0; }.activity-tool-toggle { display: flex; align-items: center; gap: 8px; width: 100%; min-height: 37px; padding: 5px 0 5px 1px; border: 0; border-radius: 4px; color: var(--demo-muted, #777782); background: transparent; text-align: left; transition: background-color 160ms ease, color 160ms ease; }button.activity-tool-toggle:is(:hover, :focus-visible):not(:disabled) { background: var(--activity-hover); color: var(--demo-text, #252529); }.activity-tool-toggle > svg { flex: 0 0 auto; }.tool-label { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--demo-text, #252529); font-size: 13px; }.tool-duration { margin-left: auto; font-size: 12px; font-variant-numeric: tabular-nums; }.tool-state { font-size: 12px; }.activity-tool-toggle > svg:last-child { margin: 0 1px 0 0; transition: transform .3s cubic-bezier(.22,1,.36,1); }
.tool-details { display: grid; gap: 10px; margin: 4px 1px 10px 20px; }.tool-name { color: var(--demo-muted, #777782); font-family: "SFMono-Regular", Consolas, monospace; font-size: 12px; }.detail-label { display: block; margin-bottom: 4px; color: var(--demo-muted, #777782); font-size: 12px; }.tool-details pre { margin: 0; color: var(--demo-text, #252529); font-family: "SFMono-Regular", Consolas, monospace; font-size: 12px; line-height: 1.7; white-space: pre-wrap; overflow-wrap: anywhere; }.tool-details pre.failed-output { border-left: 2px solid color-mix(in srgb, var(--activity-error) 50%, transparent); padding-left: 9px; color: var(--demo-muted, #777782); font-family: inherit; font-size: 12px; }.empty-details { margin: 0; color: var(--demo-muted, #777782); font-size: 12px; }
@media (prefers-reduced-motion: reduce) { .activity-spinner :deep(path) { animation: none; } .activity-fold-enter-active, .activity-fold-leave-active, .activity-section-toggle, .activity-tool-toggle, .activity-section-toggle > svg:last-child, .activity-tool-toggle > svg:last-child { transition-duration: .01ms; } }
</style>
`,wd=`<script setup lang="ts">
import { computed, defineComponent, h, nextTick, onBeforeUnmount, onMounted, ref, useId, watch } from "vue";
import {
  Check,
  ChevronDown,
  Cpu,
  Paperclip,
  Plus,
  X,
} from "lucide-vue-next";

/* Bundled provider marks: original LobeHub SVG assets.
MIT License

Copyright (c) 2023 LobeHub

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
type ModelProvider = "claude" | "openai" | "gemini" | "deepseek";
const modelProviderAssets: Record<ModelProvider, string> = {
  "claude": "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+Q2xhdWRlPC90aXRsZT48cGF0aCBkPSJtNC43MTQ0IDE1Ljk1NTUgNC43MTc0LTIuNjQ3MS4wNzktLjIzMDctLjA3OS0uMTI3NWgtLjIzMDdsLS43ODkzLS4wNDg2LTIuNjk1Ni0uMDcyOS0yLjMzNzUtLjA5NzEtMi4yNjQ2LS4xMjE0LS41NzA3LS4xMjE1LS41MzQzLS43MDQyLjA1NDYtLjM1MjIuNDc5Ny0uMzIxOC42ODYuMDYwOCAxLjUxNzkuMTAzMiAyLjI3NjcuMTU3OCAxLjY1MTQuMDk3MiAyLjQ0NjguMjU1aC4zODg2bC4wNTQ2LS4xNTc5LS4xMzM2LS4wOTcxLS4xMDMyLS4wOTcyTDYuOTczIDkuODM1NmwtMi41NS0xLjY4NzktMS4zMzU2LS45NzE0LS43MjI1LS40OTE4LS4zNjQzLS40NjE0LS4xNTc4LTEuMDA3OC42NTU3LS43MjI1Ljg4MDMuMDYwNy4yMjQ2LjA2MDcuODkyNS42ODYgMS45MDY0IDEuNDc1NCAyLjQ4OTMgMS44MzM2LjM2NDMuMzAzNS4xNDU3LS4xMDMyLjAxODItLjA3MjgtLjE2NC0uMjczMy0xLjM1MzktMi40NDY3LTEuNDQ1LTIuNDg5My0uNjQzNS0xLjAzMi0uMTctLjYxOTRjLS4wNjA3LS4yNTUtLjEwMzItLjQ2NzQtLjEwMzItLjcyODVMNi4yODcuMTMzNSA2LjY5OTcgMGwuOTk1Ny4xMzM2LjQxOS4zNjQyLjYxOTIgMS40MTQ3IDEuMDAxOCAyLjIyODIgMS41NTQzIDMuMDI5Ni40NTUzLjg5ODUuMjQyOS44MzE4LjA5MS4yNTVoLjE1Nzl2LS4xNDU3bC4xMjc1LTEuNzA2LjIzNjgtMi4wOTQ3LjIzMDctMi42OTU3LjA3ODktLjc1ODkuMzc2NC0uOTEwNy43NDY4LS40OTE4LjU4MjguMjc5My40Nzk3LjY4Ni0uMDY2OC40NDMzLS4yODUzIDEuODUxNy0uNTU4NiAyLjkwMjEtLjM2NDMgMS45NDI5aC4yMTI1bC4yNDI5LS4yNDI5Ljk4MzUtMS4zMDUzIDEuNjUxNC0yLjA2NDMuNzI4Ni0uODE5Ni44NS0uOTA0Ni41NDY0LS40MzExaDEuMDMyMWwuNzU5IDEuMTI5My0uMzQgMS4xNjU3LTEuMDYyNSAxLjM0NzgtLjg4MDQgMS4xNDE0LTEuMjYyOCAxLjctLjc4OTMgMS4zNi4wNzI5LjEwOTMuMTg4Mi0uMDE4MyAyLjg1MzUtLjYwNyAxLjU0MjEtLjI3OTQgMS44Mzk2LS4zMTU3LjgzMTguMzg4Ni4wOTEuMzk0Ni0uMzI3OC44MDc1LTEuOTY3LjQ4NTctMi4zMDcyLjQ2MTQtMy40MzY0LjgxMzYtLjA0MjUuMDMwNC4wNDg2LjA2MDcgMS41NDgyLjE0NTcuNjYxOC4wMzY0aDEuNjIxbDMuMDE3NS4yMjQ3Ljc4OTIuNTIyLjQ3MzYuNjM3Ni0uMDc5LjQ4NTctMS4yMTQyLjYxOTMtMS42MzkzLS4zODg2LTMuODI1LS45MTA3LTEuMzExMy0uMzI3OWgtLjE4MjJ2LjEwOTNsMS4wOTI5IDEuMDY4NiAyLjAwMzUgMS44MDkyIDIuNTA3NSAyLjMzMTQuMTI3NS41NzY4LS4zMjE4LjQ1NTQtLjM0LS4wNDg2LTIuMjAzOS0xLjY1NzUtLjg1LS43NDY4LTEuOTI0Ni0xLjYyMWgtLjEyNzV2LjE3bC40NDMyLjY0OTYgMi4zNDM2IDMuNTIxNC4xMjE0IDEuMDgwNy0uMTcuMzUyMS0uNjA3MS4yMTI1LS42Njc5LS4xMjE0LTEuMzcyMS0xLjkyNDZMMTQuMzggMTcuOTU5bC0xLjE0MTQtMS45NDI4LS4xMzk3LjA3OS0uNjc0IDcuMjU1Mi0uMzE1Ni4zNzAzLS43Mjg2LjI3OTMtLjYwNzEtLjQ2MTQtLjMyMTgtLjc0NjguMzIxOC0xLjQ3NTMuMzg4Ni0xLjkyNDYuMzE1Ny0xLjUzLjI4NTMtMS45MDA0LjE3LS42MzE0LS4wMTIxLS4wNDI1LS4xMzk3LjAxODItMS40MzI4IDEuOTY3Mi0yLjE3OTYgMi45NDQ2LTEuNzI0MyAxLjg0NTYtLjQxMjguMTY0LS43MTY0LS4zNzA0LjA2NjctLjY2MTguNDAwOC0uNTg4OSAyLjM4Ni0zLjAzNTcgMS40Mzg5LTEuODgyLjkyOS0xLjA4NjgtLjAwNjItLjE1NzloLS4wNTQ2bC02LjMzODUgNC4xMTY0LTEuMTI5My4xNDU3LS40ODU3LS40NTU0LjA2MDgtLjc0NjcuMjMwNy0uMjQyOSAxLjkwNjQtMS4zMTE0WiIvPjwvc3ZnPg==",
  "openai": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIxIiBoZWlnaHQ9IjcyMSIgdmlld0JveD0iMCAwIDcyMSA3MjEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xNjM3XzI5MzQpIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxXzE2MzdfMjkzNCkiPgo8cGF0aCBkPSJNMzA0LjI0NiAyOTQuNjExVjI0OS4wMjhDMzA0LjI0NiAyNDUuMTg5IDMwNS42ODcgMjQyLjMwOSAzMDkuMDQ0IDI0MC4zOTJMNDAwLjY5MiAxODcuNjEyQzQxMy4xNjcgMTgwLjQxNSA0MjguMDQyIDE3Ny4wNTggNDQzLjM5NCAxNzcuMDU4QzUwMC45NzEgMTc3LjA1OCA1MzcuNDQgMjIxLjY4MiA1MzcuNDQgMjY5LjE4MkM1MzcuNDQgMjcyLjU0IDUzNy40NCAyNzYuMzc5IDUzNi45NTkgMjgwLjIxOEw0NDEuOTU0IDIyNC41NThDNDM2LjE5NyAyMjEuMjAxIDQzMC40MzcgMjIxLjIwMSA0MjQuNjggMjI0LjU1OEwzMDQuMjQ2IDI5NC42MTFaTTUxOC4yNDUgNDcyLjE0NVYzNjMuMjI0QzUxOC4yNDUgMzU2LjUwNSA1MTUuMzY0IDM1MS43MDcgNTA5LjYwOCAzNDguMzQ5TDM4OS4xNzQgMjc4LjI5Nkw0MjguNTE5IDI1NS43NDNDNDMxLjg3NyAyNTMuODI2IDQzNC43NTcgMjUzLjgyNiA0MzguMTE1IDI1NS43NDNMNTI5Ljc2MiAzMDguNTIzQzU1Ni4xNTQgMzIzLjg3OSA1NzMuOTA1IDM1Ni41MDUgNTczLjkwNSAzODguMTcxQzU3My45MDUgNDI0LjYzNiA1NTIuMzE1IDQ1OC4yMjUgNTE4LjI0NSA0NzIuMTQxVjQ3Mi4xNDVaTTI3NS45MzcgMzc2LjE4MkwyMzYuNTkyIDM1My4xNTJDMjMzLjIzNSAzNTEuMjM1IDIzMS43OTQgMzQ4LjM1NCAyMzEuNzk0IDM0NC41MTVWMjM4Ljk1NkMyMzEuNzk0IDE4Ny42MTcgMjcxLjEzOSAxNDguNzQ5IDMyNC40IDE0OC43NDlDMzQ0LjU1NSAxNDguNzQ5IDM2My4yNjQgMTU1LjQ2OCAzNzkuMTAyIDE2Ny40NjNMMjg0LjU3OCAyMjIuMTY0QzI3OC44MjIgMjI1LjUyMSAyNzUuOTQyIDIzMC4zMTkgMjc1Ljk0MiAyMzcuMDM5VjM3Ni4xODZMMjc1LjkzNyAzNzYuMTgyWk0zNjAuNjI2IDQyNS4xMjJMMzA0LjI0NiAzOTMuNDU1VjMyNi4yODNMMzYwLjYyNiAyOTQuNjE2TDQxNy4wMDIgMzI2LjI4M1YzOTMuNDU1TDM2MC42MjYgNDI1LjEyMlpNMzk2Ljg1MiA1NzAuOTg5QzM3Ni42OTggNTcwLjk4OSAzNTcuOTg5IDU2NC4yNyAzNDIuMTUxIDU1Mi4yNzZMNDM2LjY3NCA0OTcuNTc0QzQ0Mi40MzEgNDk0LjIxNyA0NDUuMzExIDQ4OS40MTkgNDQ1LjMxMSA0ODIuNjk5VjM0My41NTJMNDg1LjEzOCAzNjYuNTgyQzQ4OC40OTUgMzY4LjQ5OSA0ODkuOTM2IDM3MS4zNzkgNDg5LjkzNiAzNzUuMjE5VjQ4MC43NzhDNDg5LjkzNiA1MzIuMTE3IDQ1MC4xMDkgNTcwLjk4NSAzOTYuODUyIDU3MC45ODVWNTcwLjk4OVpNMjgzLjEzNCA0NjMuOTlMMTkxLjQ4NiA0MTEuMjExQzE2NS4wOTQgMzk1Ljg1NCAxNDcuMzQzIDM2My4yMjkgMTQ3LjM0MyAzMzEuNTYyQzE0Ny4zNDMgMjk0LjYxNiAxNjkuNDE1IDI2MS41MDkgMjAzLjQ4IDI0Ny41OTNWMzU2Ljk5MUMyMDMuNDggMzYzLjcxIDIwNi4zNjEgMzY4LjUwOCAyMTIuMTE3IDM3MS44NjZMMzMyLjA3NCA0NDEuNDM3TDI5Mi43MjkgNDYzLjk5QzI4OS4zNzIgNDY1LjkwNyAyODYuNDkxIDQ2NS45MDcgMjgzLjEzNCA0NjMuOTlaTTI3Ny44NTkgNTQyLjY4QzIyMy42MzkgNTQyLjY4IDE4My44MTMgNTAxLjg5NSAxODMuODEzIDQ1MS41MTRDMTgzLjgxMyA0NDcuNjc1IDE4NC4yOTQgNDQzLjgzNiAxODQuNzcxIDQzOS45OTdMMjc5LjI5NSA0OTQuNjk4QzI4NS4wNTEgNDk4LjA1NiAyOTAuODEyIDQ5OC4wNTYgMjk2LjU2OCA0OTQuNjk4TDQxNy4wMDIgNDI1LjEyN1Y0NzAuNzFDNDE3LjAwMiA0NzQuNTQ5IDQxNS41NjIgNDc3LjQyOSA0MTIuMjA0IDQ3OS4zNDZMMzIwLjU1NyA1MzIuMTI2QzMwOC4wODEgNTM5LjMyMyAyOTMuMjA2IDU0Mi42OCAyNzcuODU0IDU0Mi42OEgyNzcuODU5Wk0zOTYuODUyIDU5OS43NzZDNDU0LjkxMSA1OTkuNzc2IDUwMy4zNyA1NTguNTEzIDUxNC40MSA1MDMuODEyQzU2OC4xNDkgNDg5Ljg5NiA2MDIuNjk2IDQzOS41MTUgNjAyLjY5NiAzODguMTc2QzYwMi42OTYgMzU0LjU4NyA1ODguMzAzIDMyMS45NjIgNTYyLjM5MiAyOTguNDVDNTY0Ljc5MSAyODguMzczIDU2Ni4yMzEgMjc4LjI5NiA1NjYuMjMxIDI2OC4yMjRDNTY2LjIzMSAxOTkuNjExIDUxMC41NzEgMTQ4LjI2NyA0NDYuMjc0IDE0OC4yNjdDNDMzLjMyMiAxNDguMjY3IDQyMC44NDYgMTUwLjE4NCA0MDguMzcgMTU0LjUwNUMzODYuNzc1IDEzMy4zOTIgMzU3LjAyNiAxMTkuOTU4IDMyNC40IDExOS45NThDMjY2LjM0MiAxMTkuOTU4IDIxNy44ODMgMTYxLjIyIDIwNi44NDMgMjE1LjkyMUMxNTMuMTA0IDIyOS44MzcgMTE4LjU1NyAyODAuMjE4IDExOC41NTcgMzMxLjU1N0MxMTguNTU3IDM2NS4xNDYgMTMyLjk1IDM5Ny43NzEgMTU4Ljg2MSA0MjEuMjgzQzE1Ni40NjIgNDMxLjM2IDE1NS4wMjIgNDQxLjQzNyAxNTUuMDIyIDQ1MS41MUMxNTUuMDIyIDUyMC4xMjMgMjEwLjY4MiA1NzEuNDY2IDI3NC45NzggNTcxLjQ2NkMyODcuOTMxIDU3MS40NjYgMzAwLjQwNyA1NjkuNTQ5IDMxMi44ODMgNTY1LjIyOEMzMzQuNDczIDU4Ni4zNDEgMzY0LjIyMiA1OTkuNzc2IDM5Ni44NTIgNTk5Ljc3NloiIGZpbGw9ImJsYWNrIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNzIwIiBoZWlnaHQ9IjcyMCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNjA2OTM0IDAuMDk5OTc1NikiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNDg0LjEzOSIgaGVpZ2h0PSI0NzkuODE4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE4LjU1NyAxMTkuOTU4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
  "gemini": "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjFlbSIgc3R5bGU9ImZsZXg6bm9uZTtsaW5lLWhlaWdodDoxIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkdlbWluaTwvdGl0bGU+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9IiMzMTg2RkYiPjwvcGF0aD48cGF0aCBkPSJNMjAuNjE2IDEwLjgzNWExNC4xNDcgMTQuMTQ3IDAgMDEtNC40NS0zLjAwMSAxNC4xMTEgMTQuMTExIDAgMDEtMy42NzgtNi40NTIuNTAzLjUwMyAwIDAwLS45NzUgMCAxNC4xMzQgMTQuMTM0IDAgMDEtMy42NzkgNi40NTIgMTQuMTU1IDE0LjE1NSAwIDAxLTQuNDUgMy4wMDFjLS42NS4yOC0xLjMxOC41MDUtMi4wMDIuNjc4YS41MDIuNTAyIDAgMDAwIC45NzVjLjY4NC4xNzIgMS4zNS4zOTcgMi4wMDIuNjc3YTE0LjE0NyAxNC4xNDcgMCAwMTQuNDUgMy4wMDEgMTQuMTEyIDE0LjExMiAwIDAxMy42NzkgNi40NTMuNTAyLjUwMiAwIDAwLjk3NSAwYy4xNzItLjY4NS4zOTctMS4zNTEuNjc3LTIuMDAzYTE0LjE0NSAxNC4xNDUgMCAwMTMuMDAxLTQuNDUgMTQuMTEzIDE0LjExMyAwIDAxNi40NTMtMy42NzguNTAzLjUwMyAwIDAwMC0uOTc1IDEzLjI0NSAxMy4yNDUgMCAwMS0yLjAwMy0uNjc4eiIgZmlsbD0idXJsKCNsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfKSI+PC9wYXRoPjxwYXRoIGQ9Ik0yMC42MTYgMTAuODM1YTE0LjE0NyAxNC4xNDcgMCAwMS00LjQ1LTMuMDAxIDE0LjExMSAxNC4xMTEgMCAwMS0zLjY3OC02LjQ1Mi41MDMuNTAzIDAgMDAtLjk3NSAwIDE0LjEzNCAxNC4xMzQgMCAwMS0zLjY3OSA2LjQ1MiAxNC4xNTUgMTQuMTU1IDAgMDEtNC40NSAzLjAwMWMtLjY1LjI4LTEuMzE4LjUwNS0yLjAwMi42NzhhLjUwMi41MDIgMCAwMDAgLjk3NWMuNjg0LjE3MiAxLjM1LjM5NyAyLjAwMi42NzdhMTQuMTQ3IDE0LjE0NyAwIDAxNC40NSAzLjAwMSAxNC4xMTIgMTQuMTEyIDAgMDEzLjY3OSA2LjQ1My41MDIuNTAyIDAgMDAuOTc1IDBjLjE3Mi0uNjg1LjM5Ny0xLjM1MS42NzctMi4wMDNhMTQuMTQ1IDE0LjE0NSAwIDAxMy4wMDEtNC40NSAxNC4xMTMgMTQuMTEzIDAgMDE2LjQ1My0zLjY3OC41MDMuNTAzIDAgMDAwLS45NzUgMTMuMjQ1IDEzLjI0NSAwIDAxLTIuMDAzLS42Nzh6IiBmaWxsPSJ1cmwoI2xvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8pIj48L3BhdGg+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9InVybCgjbG9iZS1pY29ucy1nZW1pbmktMi1fUl8wXykiPjwvcGF0aD48ZGVmcz48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfIiB4MT0iNyIgeDI9IjExIiB5MT0iMTUuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjMDhCOTYyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDhCOTYyIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8iIHgxPSI4IiB4Mj0iMTEuNSIgeTE9IjUuNSIgeTI9IjExIj48c3RvcCBzdG9wLWNvbG9yPSIjRjk0NTQzIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjk0NTQzIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTItX1JfMF8iIHgxPSIzLjUiIHgyPSIxNy41IiB5MT0iMTMuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjRkFCQzEyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuNDYiIHN0b3AtY29sb3I9IiNGQUJDMTIiIHN0b3Atb3BhY2l0eT0iMCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==",
  "deepseek": "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RGVlcFNlZWs8L3RpdGxlPjxwYXRoIGQ9Ik0yMy43NDggNC42NTFjLS4yNTQtLjEyNC0uMzY0LjExMy0uNTEyLjIzMy0uMDUxLjA0LS4wOTQuMDktLjEzNy4xMzctLjM3Mi4zOTctLjgwNi42NTctMS4zNzMuNjI2LS44MjktLjA0Ni0xLjUzNy4yMTQtMi4xNjMuODQ4LS4xMzMtLjc4Mi0uNTc1LTEuMjQ4LTEuMjQ3LTEuNTQ4LS4zNTItLjE1NS0uNzA4LS4zMTEtLjk1NS0uNjUtLjE3Mi0uMjQtLjIxOS0uNTA5LS4zMDUtLjc3NC0uMDU1LS4xNi0uMTEtLjMyMy0uMjkzLS4zNS0uMi0uMDMxLS4yNzguMTM2LS4zNTYuMjc2LS4zMTMuNTcyLS40MzQgMS4yMDItLjQyMiAxLjg0LjAyNyAxLjQzNi42MzMgMi41OCAxLjgzOCAzLjM5My4xMzcuMDk0LjE3Mi4xODcuMTI5LjMyMy0uMDgyLjI4LS4xOC41NTMtLjI2Ni44MzMtLjA1NS4xNzktLjEzNy4yMTgtLjMyOC4xNGE1LjUgNS41IDAgMCAxLTEuNzM3LTEuMTc5Yy0uODU3LS44MjgtMS42MzEtMS43NDMtMi41OTctMi40NmExMiAxMiAwIDAgMC0uNjg5LS40N2MtLjk4NS0uOTU3LjEzLTEuNzQzLjM4Ny0xLjgzNi4yNy0uMDk4LjA5NC0uNDMzLS43NzgtLjQyOC0uODcyLjAwMy0xLjY3LjI5NS0yLjY4Ny42ODVhMyAzIDAgMCAxLS40NjUuMTM2IDkuNiA5LjYgMCAwIDAtMi44ODMtLjEwMWMtMS44ODUuMjEtMy4zOSAxLjEtNC40OTcgMi42MjJDLjA4MiA4Ljc3Ni0uMjMxIDEwLjg1NC4xNTIgMTMuMDJjLjQwMyAyLjI4NCAxLjU2OCA0LjE3NSAzLjM2IDUuNjUzIDEuODU3IDEuNTMzIDMuOTk3IDIuMjg0IDYuNDM4IDIuMTQgMS40ODItLjA4NSAzLjEzMi0uMjg0IDQuOTk0LTEuODYuNDcuMjM0Ljk2Mi4zMjggMS43OC4zOTguNjI5LjA1OCAxLjIzNS0uMDMxIDEuNzA1LS4xMjkuNzM1LS4xNTUuNjg0LS44MzYuNDE4LS45NjEtMi4xNTUtMS4wMDQtMS42ODItLjU5NS0yLjExMi0uOTI2IDEuMDk1LTEuMjk1IDIuNzY4LTMuNTk4IDMuMjg0LTYuNzMzLjA1LS4zNDYuMTE1LS44MzQuMTA4LTEuMTE0LS4wMDQtLjE3MS4wMzUtLjIzOC4yMy0uMjU3YTQuMiA0LjIgMCAwIDAgMS41NDUtLjQ3NWMxLjM5Ny0uNzYzIDEuOTYtMi4wMTYgMi4wOTMtMy41MTcuMDItLjIzLS4wMDQtLjQ2Ny0uMjQ3LS41ODhNMTEuNTggMTguMTY4Yy0yLjA4OC0xLjY0Mi0zLjEwMS0yLjE4My0zLjUyLTIuMTYtLjM5LjAyNC0uMzIuNDcyLS4yMzQuNzYzLjA5LjI4OC4yMDcuNDg3LjM3MS43NC4xMTQuMTY3LjE5Mi40MTYtLjExMy42MDMtLjY3My40MTYtMS44NDItLjE0LTEuODk3LS4xNjgtMS4zNjEtLjgwMS0yLjUtMS44Ni0zLjMwMS0zLjMwNi0uNzc1LTEuMzkzLTEuMjI1LTIuODg4LTEuMjk5LTQuNDgyLS4wMi0uMzg1LjA5NC0uNTIyLjQ3Ny0uNTkyYTQuNyA0LjcgMCAwIDEgMS41My0uMDM4YzIuMTMxLjMxMSAzLjk0NiAxLjI2NCA1LjQ2NyAyLjc3NC44NjguODYgMS41MjUgMS44ODcgMi4yMDIgMi44OS43MiAxLjA2NiAxLjQ5NCAyLjA4MiAyLjQ4IDIuOTE1LjM0OC4yOTEuNjI2LjUxMy44OTIuNjc3LS44MDIuMDktMi4xNC4xMDktMy4wNTUtLjYxNXptMS4wMDEtNi40NGEuMzA2LjMwNiAwIDAgMSAuNDE1LS4yODcuMy4zIDAgMCAxIC4xMTMuMDc0LjMuMyAwIDAgMSAuMDg2LjIxNGMwIC4xNy0uMTM2LjMwNy0uMzA4LjMwN2EuMzAzLjMwMyAwIDAgMS0uMzA2LS4zMDdtMy4xMSAxLjU5NmMtLjIuMDgxLS40LjE1MS0uNTkxLjE2YTEuMjUgMS4yNSAwIDAgMS0uNzk4LS4yNTRjLS4yNzQtLjIzLS40Ny0uMzU4LS41NTEtLjc1OGExLjcgMS43IDAgMCAxIC4wMTUtLjU4OGMuMDctLjMyNy0uMDA3LS41MzctLjIzOC0uNzI3LS4xODgtLjE1Ni0uNDI2LS4xOTktLjY4OS0uMTk5YS42LjYgMCAwIDEtLjI1NC0uMDc4LjI1My4yNTMgMCAwIDEtLjExNC0uMzU4IDEgMSAwIDAgMSAuMTkyLS4yMWMuMzU2LS4yMDIuNzY3LS4xMzYgMS4xNDYuMDE2LjM1Mi4xNDQuNjE4LjQwOCAxLjAwMS43ODIuMzkyLjQ1MS40NjIuNTc2LjY4NS45MTUuMTc2LjI2NC4zMzYuNTM2LjQ0Ni44NDguMDY2LjE5NC0uMDIuMzUzLS4yNS40NSIvPjwvc3ZnPg=="
};
const modelProviderNames: Record<ModelProvider, string> = { claude: "Claude", openai: "OpenAI", gemini: "Gemini", deepseek: "DeepSeek" };
function modelProvider(name: string, provider = ""): ModelProvider | undefined {
  const explicit = provider.trim().toLowerCase().replace(/[^a-z0-9]+/g, "");
  if (provider.trim()) {
    const providers: Record<string, ModelProvider> = {
      anthropic: "claude", claude: "claude", claudecode: "claude",
      openai: "openai", google: "gemini", googlegemini: "gemini", googleaistudio: "gemini", gemini: "gemini",
      deepseek: "deepseek",
    };
    return providers[explicit];
  }
  const value = name.trim().toLowerCase();
  if (/^(?:anthropic\\/)?claude(?:$|[\\s-])/.test(value)) return "claude";
  if (/^(?:openai\\/)?(?:gpt[-\\s]?\\d|chatgpt(?:$|[\\s-])|o[134](?:$|[\\s-]))/.test(value)) return "openai";
  if (/^(?:google\\/)?gemini(?:$|[\\s-])/.test(value)) return "gemini";
  if (/^deepseek(?:$|[\\s-])/.test(value)) return "deepseek";
  return undefined;
}
const ProviderLogo = defineComponent({
  props: {
    model: { type: String, default: "" }, provider: { type: String, default: "" },
    size: { type: Number, default: 20 },
  },
  setup: props => () => {
    const provider = modelProvider(props.model, props.provider);
    const monochrome = provider !== "gemini";
    const markSize = Math.round(props.size * (provider === "openai" ? .82 : .58));
    return h("span", {
      class: ["model-provider-mark", { "is-color": provider && !monochrome }],
      "data-provider-logo": provider ?? "unknown", "aria-hidden": "true",
      title: provider ? \`\${modelProviderNames[provider]} logo\` : "Custom model",
      style: {
        display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        width: \`\${props.size}px\`, height: \`\${props.size}px\`, boxSizing: "border-box",
        border: "1px solid var(--provider-logo-border, #e5e5e8)",
        borderRadius: \`\${props.size >= 28 ? 9 : props.size >= 20 ? 6 : 4}px\`,
        background: "var(--provider-logo-surface, #fff)", color: "var(--provider-logo-muted, #a1a1aa)",
      },
    }, provider ? [h("img", {
      src: modelProviderAssets[provider], alt: "", "aria-hidden": "true",
      class: ["model-provider-image", { "is-monochrome": monochrome }],
      "data-logo-source": "bundled-brand-asset",
      style: { display: "block", objectFit: "contain", width: \`\${markSize}px\`, height: \`\${markSize}px\` },
    })] : [h(Cpu, { size: Math.round(props.size * .5), strokeWidth: 1.7, "aria-hidden": "true" })]);
  },
});

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    placeholder?: string;
    models?: string[];
    initialModel?: string;
    disabled?: boolean;
  }>(),
  {
    modelValue: "",
    placeholder: "What would you like to build?",
    models: () => ["Claude Sonnet 4.6", "GPT-5.4", "Gemini 3.1 Pro"],
    initialModel: "Claude Sonnet 4.6",
    disabled: false,
  },
);
const emit = defineEmits<{
  "update:modelValue": [value: string];
  send: [
    message: { text: string; model: string; files: File[] },
  ];
  "model-change": [model: string];
}>();
const text = ref(props.modelValue);
const selectedModel = ref("");
const menuOpen = ref(false);
const files = ref<File[]>([]);
const input = ref<HTMLInputElement | null>(null);
const textarea = ref<HTMLTextAreaElement | null>(null);
const modelRoot = ref<HTMLElement | null>(null);
const modelMenu = ref<HTMLElement | null>(null);
const modelMenuStyle = ref<Record<string, string>>({});
const modelTrigger = ref<HTMLButtonElement | null>(null);
const modelMenuId = \`composer-models-\${useId()}\`;
function closeModels(returnFocus = false) {
  menuOpen.value = false;
  if (returnFocus) void nextTick(() => modelTrigger.value?.focus({ preventScroll: true }));
}
function modelButtons() {
  return Array.from(modelMenu.value?.querySelectorAll<HTMLButtonElement>('[role="menuitemradio"]:not(:disabled)') ?? []);
}
function focusModel(button?: HTMLButtonElement) {
  if (!button) return;
  button.focus({ preventScroll: true });
  const menu = modelMenu.value;
  if (!menu) return;
  if (button.offsetTop < menu.scrollTop) menu.scrollTop = button.offsetTop;
  else if (button.offsetTop + button.offsetHeight > menu.scrollTop + menu.clientHeight)
    menu.scrollTop = button.offsetTop + button.offsetHeight - menu.clientHeight;
}
function placeModels() {
  if (!menuOpen.value || !modelTrigger.value) return;
  const bounds = modelTrigger.value.getBoundingClientRect();
  const width = Math.min(340, window.innerWidth - 16);
  const left = Math.max(8, Math.min(bounds.left, window.innerWidth - width - 8));
  const style: Record<string, string> = { position: "fixed", left: \`\${Math.round(left)}px\`, width: \`\${width}px\` };
  if (window.innerHeight - bounds.bottom < 280 && bounds.top > window.innerHeight - bounds.bottom)
    style.bottom = \`\${Math.round(window.innerHeight - bounds.top + 6)}px\`;
  else style.top = \`\${Math.round(bounds.bottom + 6)}px\`;
  modelMenuStyle.value = style;
}
async function toggleModels() {
  if (props.disabled) return;
  if (menuOpen.value) return closeModels();
  menuOpen.value = true;
  await nextTick();
  placeModels();
  if (menuOpen.value) focusModel(modelButtons().find(button => button.getAttribute("aria-checked") === "true") ?? modelButtons()[0]);
}
async function onModelKeydown(event: KeyboardEvent) {
  if (event.isComposing || props.disabled) return;
  if (event.key === "Escape" && menuOpen.value) {
    event.preventDefault();
    event.stopPropagation();
    closeModels(true);
    return;
  }
  if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  menuOpen.value = true;
  await nextTick();
  placeModels();
  const options = modelButtons();
  if (!options.length) return;
  const current = options.indexOf(document.activeElement as HTMLButtonElement);
  const index = event.key === "Home" ? 0 : event.key === "End" ? options.length - 1
    : (current + (event.key === "ArrowDown" ? 1 : current < 0 ? 0 : -1) + options.length) % options.length;
  focusModel(options[index]);
}
function leaveModels(event: FocusEvent) {
  const target = event.relatedTarget as Node | null;
  if (!modelRoot.value?.contains(target) && !modelMenu.value?.contains(target)) closeModels();
}
function closeModelsOutside(event: PointerEvent) {
  const target = event.target as Node;
  if (!modelRoot.value?.contains(target) && !modelMenu.value?.contains(target)) closeModels();
}
function retireMenu(element: Element) { element.setAttribute("inert", ""); }
function removeFile(index: number) { if (!props.disabled) files.value.splice(index, 1); }
watch(() => props.disabled, disabled => { if (disabled) closeModels(); });
onMounted(() => {
  document.addEventListener("pointerdown", closeModelsOutside);
  window.addEventListener("resize", placeModels);
  window.addEventListener("scroll", placeModels, true);
  autoGrow();
});
onBeforeUnmount(() => {
  document.removeEventListener("pointerdown", closeModelsOutside);
  window.removeEventListener("resize", placeModels);
  window.removeEventListener("scroll", placeModels, true);
});
const canSend = computed(
  () =>
    (text.value.trim().length > 0 || files.value.length > 0) &&
    props.models.includes(selectedModel.value) && !props.disabled,
);
watch(
  () => props.modelValue,
  (value) => {
    text.value = value;
  },
);
watch(
  [() => props.initialModel, () => props.models],
  ([initialModel, models], previous) => {
    const initialChanged = !previous || initialModel !== previous[0];
    const candidate = initialChanged ? initialModel : selectedModel.value;
    selectedModel.value = models.includes(candidate) ? candidate : models[0] ?? "";
    if (!models.length) closeModels();
  },
  { immediate: true, deep: true },
);

function updateText(event: Event) {
  if (props.disabled) return;
  text.value = (event.target as HTMLTextAreaElement).value;
  emit("update:modelValue", text.value);
}
function autoGrow() {
  const element = textarea.value;
  if (!element) return;
  element.style.height = "auto";
  element.style.height = \`\${Math.min(Math.max(element.scrollHeight, 40), 128)}px\`;
}
watch(text, () => nextTick(autoGrow));
function selectModel(model: string) {
  if (props.disabled || !props.models.includes(model)) return;
  selectedModel.value = model;
  closeModels(true);
  emit("model-change", model);
}
function attach(event: Event) {
  if (props.disabled) return;
  files.value = [
    ...files.value,
    ...Array.from((event.target as HTMLInputElement).files || []),
  ];
  if (input.value) input.value.value = "";
}
function send() {
  if (!canSend.value) return;
  emit("send", {
    text: text.value.trim(),
    model: selectedModel.value,
    files: [...files.value],
  });
  text.value = "";
  files.value = [];
  emit("update:modelValue", "");
}
function onKeydown(event: KeyboardEvent) {
  if (event.key === "Enter" && !event.shiftKey && !event.isComposing) {
    event.preventDefault();
    send();
  }
}
<\/script>

<template>
  <div class="composer-demo">
      <div v-if="files.length" class="attachments">
        <span
          v-for="(file, index) in files"
          :key="\`\${file.name}-\${index}\`"
          class="file-chip"
        >
          <Paperclip :size="12" /><span>{{ file.name }}</span>
          <button
            type="button"
            :aria-label="\`Remove \${file.name}\`"
            :disabled="disabled"
            @click="removeFile(index)"
          >
            <X :size="9" :stroke-width="1.7" />
          </button>
        </span>
      </div>
    <div class="composer" :class="{ 'is-disabled': disabled }">
      <div class="composer-field">
      <textarea
        ref="textarea"
        :value="text"
        :placeholder="placeholder"
        aria-label="Message the assistant"
        :disabled="disabled"
        rows="1"
        @input="updateText"
        @keydown="onKeydown"
      />
      </div>
      <div class="toolbar">
        <button
          type="button"
          class="icon-button"
          title="Add attachments"
          aria-label="Add attachments"
          :disabled="disabled"
          @click="input?.click()"
        >
          <Plus :size="18" :stroke-width="1.7" />
        </button>
        <input
          ref="input"
          class="file-input"
          type="file"
          :disabled="disabled"
          multiple
          aria-label="Choose files"
          @change="attach"
        />
        <div ref="modelRoot" class="model-select" @keydown="onModelKeydown" @focusout="leaveModels">
          <button
            type="button"
            ref="modelTrigger"
            class="model-button"
            aria-haspopup="menu"
            :aria-controls="modelMenuId"
            :aria-expanded="menuOpen"
            aria-label="Select model"
            :disabled="disabled || !models.length"
            @click="toggleModels"
          >
            <ProviderLogo v-if="selectedModel" :model="selectedModel" /><span class="model-button-label">{{ selectedModel || 'No models' }}</span><ChevronDown :size="12" />
          </button>
          <Teleport to="body">
          <Transition name="composer-menu" @before-leave="retireMenu">
            <div v-if="menuOpen" ref="modelMenu" :id="modelMenuId" class="model-menu" :style="modelMenuStyle" role="menu" aria-label="Models" @keydown="onModelKeydown" @focusout="leaveModels">
              <button
                v-for="model in models"
                :key="model"
                type="button"
                role="menuitemradio"
                :disabled="disabled"
                :aria-checked="selectedModel === model"
                @click="selectModel(model)"
              >
                <ProviderLogo :model="model" /><span class="model-option-label">{{ model }}</span><Check v-if="selectedModel === model" :size="14" />
              </button>
            </div>
          </Transition>
          </Teleport>
        </div>
        <button
          type="button"
          class="send-button"
          :disabled="!canSend"
          aria-label="Send message"
          @click="send"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><g class="send-glyph"><path d="M12 18V6m-6 6 6-6 6 6" /></g></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.composer-demo, .model-menu {
  --composer-surface: 255 255 255;
  --composer-elevated: 244 244 245;
  --composer-line: 229 229 232;
  --composer-strong: 212 212 216;
  --composer-text: 24 24 27;
  --composer-muted: 82 82 91;
  --composer-accent: 123 97 255;
  --composer-inverse-hover: #3f3f46;
  --composer-menu-shadow: 0 16px 44px rgb(48 36 85 / .09), 0 3px 10px rgb(48 36 85 / .035);
  color: rgb(var(--composer-text));
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
}
.composer-demo { width: 100%; max-width: 360px; min-width: 0; }
:global(html.dark .composer-demo), :global(html.dark .model-menu) {
  --composer-surface: 20 20 23;
  --composer-elevated: 28 28 33;
  --composer-line: 38 38 43;
  --composer-strong: 54 54 62;
  --composer-text: 237 237 240;
  --composer-muted: 161 161 170;
  --composer-inverse-hover: #d4d4d8;
  --composer-menu-shadow: 0 16px 44px rgb(0 0 0 / .22), 0 3px 10px rgb(0 0 0 / .08);
}
.composer-demo *, .composer-demo *::before, .composer-demo *::after,
.model-menu, .model-menu *, .model-menu *::before, .model-menu *::after { box-sizing: border-box; }
.composer {
  min-width: 0;
  border: 1px solid rgb(var(--composer-strong) / .7);
  border-radius: 20px;
  background: rgb(var(--composer-surface));
  box-shadow: 0 2px 10px rgb(var(--composer-text) / .025);
  transition: border-color 160ms, box-shadow 160ms;
}
.composer:focus-within {
  border-color: rgb(var(--composer-accent) / .45);
  box-shadow: 0 0 0 3px rgb(var(--composer-accent) / .06);
}
.composer-field { min-width: 0; padding: 16px 16px 0; }
.composer textarea {
  display: block;
  width: 100%;
  min-width: 0;
  min-height: 40px;
  max-height: 128px;
  margin: 0;
  padding: 0;
  resize: none;
  overflow-y: auto;
  border: 0;
  outline: none;
  background: transparent;
  color: rgb(var(--composer-text));
  font: inherit;
  font-size: 14px;
  line-height: 1.75;
  caret-color: rgb(var(--composer-accent));
}
.composer textarea::placeholder { color: rgb(var(--composer-muted) / .8); }
.composer textarea:disabled { opacity: .5; }
.toolbar {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 6px;
  min-height: 44px;
  padding: 4px 8px;
  color: rgb(var(--composer-muted));
  font-size: 12px;
}
.icon-button, .send-button {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 50%;
  background: transparent;
  color: rgb(var(--composer-muted));
  line-height: 1;
  cursor: pointer;
  transition: color 160ms, background 160ms, border-color 160ms, transform 90ms;
}
.icon-button:hover:enabled { background: rgb(var(--composer-elevated)); color: rgb(var(--composer-text)); }
.icon-button:active:enabled, .send-button:active:enabled { transform: scale(.96); }
.icon-button:disabled { opacity: .4; cursor: not-allowed; }
.send-button {
  margin-left: auto;
  background: rgb(var(--composer-text));
  color: rgb(var(--composer-surface));
}
.send-button:hover:enabled { background: var(--composer-inverse-hover); color: rgb(var(--composer-surface)); }
.send-button:disabled {
  border-color: rgb(var(--composer-line) / .65);
  background: rgb(var(--composer-elevated) / .8);
  color: rgb(var(--composer-muted) / .65);
  opacity: 1;
  cursor: not-allowed;
}
.send-button:is(:hover, :focus-visible):enabled .send-glyph { animation: composer-send-up 1050ms cubic-bezier(.25,.6,.3,1); }
@keyframes composer-send-up {
  0%, 100% { transform: translateY(0); opacity: 1; }
  38% { transform: translateY(-2px); opacity: .2; }
  39% { transform: translateY(2px); opacity: 0; }
  70% { transform: translateY(0); opacity: 1; }
}
.model-select { position: relative; flex: 0 1 auto; min-width: 0; max-width: 240px; }
.model-button {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  height: 32px;
  padding: 0 8px;
  border: 1px solid rgb(var(--composer-line));
  border-radius: 8px;
  background: transparent;
  color: rgb(var(--composer-text));
  font: inherit;
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  transition: border-color 180ms ease, background-color 180ms ease;
}
.model-button-label { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.model-button > svg { flex: none; color: rgb(var(--composer-muted)); transition: transform 180ms ease; }
.model-button:hover:enabled, .model-button[aria-expanded="true"] {
  border-color: rgb(var(--composer-accent) / .3);
  background: rgb(var(--composer-accent) / .045);
}
.model-button[aria-expanded="true"] > svg { transform: rotate(180deg); }
.model-button:disabled { cursor: default; opacity: .6; }
.model-menu {
  z-index: 70;
  max-height: min(420px, calc(100vh - 24px));
  padding: 8px;
  overflow-y: auto;
  overscroll-behavior: contain;
  border: 1px solid rgb(var(--composer-line) / .9);
  border-radius: 14px;
  background: rgb(var(--composer-surface));
  box-shadow: var(--composer-menu-shadow);
}
:global(html.dark .model-menu) { background: rgb(var(--composer-elevated)); }
.model-menu button {
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  min-height: 38px;
  padding: 6px 9px;
  border: 1px solid transparent;
  border-radius: 9px;
  background: transparent;
  color: rgb(var(--composer-text));
  font: inherit;
  font-size: 13px;
  text-align: left;
  cursor: pointer;
  outline: none;
  transition: background 140ms ease;
}
.model-option-label { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.model-menu button > svg { flex: none; margin-left: auto; color: rgb(var(--composer-accent)); }
.model-menu button:hover, .model-menu button:focus-visible { background: rgb(var(--composer-accent) / .07); }
.model-menu button[aria-checked="true"] { border-color: rgb(var(--composer-accent) / .08); background: rgb(var(--composer-accent) / .09); }
.composer-menu-enter-active { animation: composer-picker-in 160ms cubic-bezier(.2,.7,.2,1) both; }
@keyframes composer-picker-in { from { opacity: 0; transform: translateY(-4px) scale(.985); } to { opacity: 1; transform: none; } }
.composer button:focus-visible { outline: 2px solid rgb(var(--composer-accent) / .5); outline-offset: 3px; }
.composer .model-button:focus-visible { outline-color: rgb(var(--composer-accent) / .65); }
.file-input { display: none; }
.attachments { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 8px; padding-top: 6px; padding-right: 6px; }
.file-chip { position: relative; display: inline-flex; align-items: center; gap: 6px; height: 36px; max-width: 160px; padding: 0 10px; border: 1px solid rgb(var(--composer-line)); border-radius: 8px; background: rgb(var(--composer-elevated)); color: rgb(var(--composer-muted)); font-size: 12px; }
.file-chip > svg { flex: none; }
.file-chip > span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.file-chip button { position: absolute; top: -6px; right: -6px; display: flex; align-items: center; justify-content: center; width: 16px; height: 16px; padding: 0; border: 0; border-radius: 50%; background: rgb(var(--composer-elevated)); color: rgb(var(--composer-muted)); cursor: pointer; }
.file-chip button:focus-visible { outline: 2px solid rgb(var(--composer-accent) / .5); outline-offset: 2px; }
@media (max-width: 767px), (pointer: coarse) {
  .icon-button, .send-button { width: 44px; height: 44px; min-width: 44px; min-height: 44px; }
  .toolbar { min-height: 52px; height: auto; padding-block: 4px; }
}
@media (prefers-reduced-motion: reduce) {
  .composer, .composer button, .model-menu button, .model-button > svg { transition: none; }
  .composer-menu-enter-active, .send-button .send-glyph { animation: none !important; }
  .icon-button:active:enabled, .send-button:active:enabled { transform: none; }
}

:global(html.dark .model-provider-mark) {
  --provider-logo-border: #26262b;
  --provider-logo-surface: #141417;
  --provider-logo-muted: #a1a1aa;
}
:global(html.dark .model-provider-mark.is-color) { --provider-logo-surface: #fff; }
:global(html.dark .model-provider-image.is-monochrome) { filter: invert(1); }
</style>
`,Id=`<script setup lang="ts">
import { computed, defineComponent, h, nextTick, onBeforeUnmount, onMounted, ref, useId, watch } from "vue";
import type { VNodeChild } from "vue";
import { ArrowDown, Check, ChevronDown, ChevronRight, CircleAlert, Cpu, FileSearch, FileText, PanelRightOpen, Plus, Sparkles, Terminal, X } from "lucide-vue-next";

/* Bundled provider marks: original LobeHub SVG assets.
MIT License

Copyright (c) 2023 LobeHub

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
type ModelProvider = "claude" | "openai" | "gemini" | "deepseek";
const modelProviderAssets: Record<ModelProvider, string> = {
  "claude": "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+Q2xhdWRlPC90aXRsZT48cGF0aCBkPSJtNC43MTQ0IDE1Ljk1NTUgNC43MTc0LTIuNjQ3MS4wNzktLjIzMDctLjA3OS0uMTI3NWgtLjIzMDdsLS43ODkzLS4wNDg2LTIuNjk1Ni0uMDcyOS0yLjMzNzUtLjA5NzEtMi4yNjQ2LS4xMjE0LS41NzA3LS4xMjE1LS41MzQzLS43MDQyLjA1NDYtLjM1MjIuNDc5Ny0uMzIxOC42ODYuMDYwOCAxLjUxNzkuMTAzMiAyLjI3NjcuMTU3OCAxLjY1MTQuMDk3MiAyLjQ0NjguMjU1aC4zODg2bC4wNTQ2LS4xNTc5LS4xMzM2LS4wOTcxLS4xMDMyLS4wOTcyTDYuOTczIDkuODM1NmwtMi41NS0xLjY4NzktMS4zMzU2LS45NzE0LS43MjI1LS40OTE4LS4zNjQzLS40NjE0LS4xNTc4LTEuMDA3OC42NTU3LS43MjI1Ljg4MDMuMDYwNy4yMjQ2LjA2MDcuODkyNS42ODYgMS45MDY0IDEuNDc1NCAyLjQ4OTMgMS44MzM2LjM2NDMuMzAzNS4xNDU3LS4xMDMyLjAxODItLjA3MjgtLjE2NC0uMjczMy0xLjM1MzktMi40NDY3LTEuNDQ1LTIuNDg5My0uNjQzNS0xLjAzMi0uMTctLjYxOTRjLS4wNjA3LS4yNTUtLjEwMzItLjQ2NzQtLjEwMzItLjcyODVMNi4yODcuMTMzNSA2LjY5OTcgMGwuOTk1Ny4xMzM2LjQxOS4zNjQyLjYxOTIgMS40MTQ3IDEuMDAxOCAyLjIyODIgMS41NTQzIDMuMDI5Ni40NTUzLjg5ODUuMjQyOS44MzE4LjA5MS4yNTVoLjE1Nzl2LS4xNDU3bC4xMjc1LTEuNzA2LjIzNjgtMi4wOTQ3LjIzMDctMi42OTU3LjA3ODktLjc1ODkuMzc2NC0uOTEwNy43NDY4LS40OTE4LjU4MjguMjc5My40Nzk3LjY4Ni0uMDY2OC40NDMzLS4yODUzIDEuODUxNy0uNTU4NiAyLjkwMjEtLjM2NDMgMS45NDI5aC4yMTI1bC4yNDI5LS4yNDI5Ljk4MzUtMS4zMDUzIDEuNjUxNC0yLjA2NDMuNzI4Ni0uODE5Ni44NS0uOTA0Ni41NDY0LS40MzExaDEuMDMyMWwuNzU5IDEuMTI5My0uMzQgMS4xNjU3LTEuMDYyNSAxLjM0NzgtLjg4MDQgMS4xNDE0LTEuMjYyOCAxLjctLjc4OTMgMS4zNi4wNzI5LjEwOTMuMTg4Mi0uMDE4MyAyLjg1MzUtLjYwNyAxLjU0MjEtLjI3OTQgMS44Mzk2LS4zMTU3LjgzMTguMzg4Ni4wOTEuMzk0Ni0uMzI3OC44MDc1LTEuOTY3LjQ4NTctMi4zMDcyLjQ2MTQtMy40MzY0LjgxMzYtLjA0MjUuMDMwNC4wNDg2LjA2MDcgMS41NDgyLjE0NTcuNjYxOC4wMzY0aDEuNjIxbDMuMDE3NS4yMjQ3Ljc4OTIuNTIyLjQ3MzYuNjM3Ni0uMDc5LjQ4NTctMS4yMTQyLjYxOTMtMS42MzkzLS4zODg2LTMuODI1LS45MTA3LTEuMzExMy0uMzI3OWgtLjE4MjJ2LjEwOTNsMS4wOTI5IDEuMDY4NiAyLjAwMzUgMS44MDkyIDIuNTA3NSAyLjMzMTQuMTI3NS41NzY4LS4zMjE4LjQ1NTQtLjM0LS4wNDg2LTIuMjAzOS0xLjY1NzUtLjg1LS43NDY4LTEuOTI0Ni0xLjYyMWgtLjEyNzV2LjE3bC40NDMyLjY0OTYgMi4zNDM2IDMuNTIxNC4xMjE0IDEuMDgwNy0uMTcuMzUyMS0uNjA3MS4yMTI1LS42Njc5LS4xMjE0LTEuMzcyMS0xLjkyNDZMMTQuMzggMTcuOTU5bC0xLjE0MTQtMS45NDI4LS4xMzk3LjA3OS0uNjc0IDcuMjU1Mi0uMzE1Ni4zNzAzLS43Mjg2LjI3OTMtLjYwNzEtLjQ2MTQtLjMyMTgtLjc0NjguMzIxOC0xLjQ3NTMuMzg4Ni0xLjkyNDYuMzE1Ny0xLjUzLjI4NTMtMS45MDA0LjE3LS42MzE0LS4wMTIxLS4wNDI1LS4xMzk3LjAxODItMS40MzI4IDEuOTY3Mi0yLjE3OTYgMi45NDQ2LTEuNzI0MyAxLjg0NTYtLjQxMjguMTY0LS43MTY0LS4zNzA0LjA2NjctLjY2MTguNDAwOC0uNTg4OSAyLjM4Ni0zLjAzNTcgMS40Mzg5LTEuODgyLjkyOS0xLjA4NjgtLjAwNjItLjE1NzloLS4wNTQ2bC02LjMzODUgNC4xMTY0LTEuMTI5My4xNDU3LS40ODU3LS40NTU0LjA2MDgtLjc0NjcuMjMwNy0uMjQyOSAxLjkwNjQtMS4zMTE0WiIvPjwvc3ZnPg==",
  "openai": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIxIiBoZWlnaHQ9IjcyMSIgdmlld0JveD0iMCAwIDcyMSA3MjEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xNjM3XzI5MzQpIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxXzE2MzdfMjkzNCkiPgo8cGF0aCBkPSJNMzA0LjI0NiAyOTQuNjExVjI0OS4wMjhDMzA0LjI0NiAyNDUuMTg5IDMwNS42ODcgMjQyLjMwOSAzMDkuMDQ0IDI0MC4zOTJMNDAwLjY5MiAxODcuNjEyQzQxMy4xNjcgMTgwLjQxNSA0MjguMDQyIDE3Ny4wNTggNDQzLjM5NCAxNzcuMDU4QzUwMC45NzEgMTc3LjA1OCA1MzcuNDQgMjIxLjY4MiA1MzcuNDQgMjY5LjE4MkM1MzcuNDQgMjcyLjU0IDUzNy40NCAyNzYuMzc5IDUzNi45NTkgMjgwLjIxOEw0NDEuOTU0IDIyNC41NThDNDM2LjE5NyAyMjEuMjAxIDQzMC40MzcgMjIxLjIwMSA0MjQuNjggMjI0LjU1OEwzMDQuMjQ2IDI5NC42MTFaTTUxOC4yNDUgNDcyLjE0NVYzNjMuMjI0QzUxOC4yNDUgMzU2LjUwNSA1MTUuMzY0IDM1MS43MDcgNTA5LjYwOCAzNDguMzQ5TDM4OS4xNzQgMjc4LjI5Nkw0MjguNTE5IDI1NS43NDNDNDMxLjg3NyAyNTMuODI2IDQzNC43NTcgMjUzLjgyNiA0MzguMTE1IDI1NS43NDNMNTI5Ljc2MiAzMDguNTIzQzU1Ni4xNTQgMzIzLjg3OSA1NzMuOTA1IDM1Ni41MDUgNTczLjkwNSAzODguMTcxQzU3My45MDUgNDI0LjYzNiA1NTIuMzE1IDQ1OC4yMjUgNTE4LjI0NSA0NzIuMTQxVjQ3Mi4xNDVaTTI3NS45MzcgMzc2LjE4MkwyMzYuNTkyIDM1My4xNTJDMjMzLjIzNSAzNTEuMjM1IDIzMS43OTQgMzQ4LjM1NCAyMzEuNzk0IDM0NC41MTVWMjM4Ljk1NkMyMzEuNzk0IDE4Ny42MTcgMjcxLjEzOSAxNDguNzQ5IDMyNC40IDE0OC43NDlDMzQ0LjU1NSAxNDguNzQ5IDM2My4yNjQgMTU1LjQ2OCAzNzkuMTAyIDE2Ny40NjNMMjg0LjU3OCAyMjIuMTY0QzI3OC44MjIgMjI1LjUyMSAyNzUuOTQyIDIzMC4zMTkgMjc1Ljk0MiAyMzcuMDM5VjM3Ni4xODZMMjc1LjkzNyAzNzYuMTgyWk0zNjAuNjI2IDQyNS4xMjJMMzA0LjI0NiAzOTMuNDU1VjMyNi4yODNMMzYwLjYyNiAyOTQuNjE2TDQxNy4wMDIgMzI2LjI4M1YzOTMuNDU1TDM2MC42MjYgNDI1LjEyMlpNMzk2Ljg1MiA1NzAuOTg5QzM3Ni42OTggNTcwLjk4OSAzNTcuOTg5IDU2NC4yNyAzNDIuMTUxIDU1Mi4yNzZMNDM2LjY3NCA0OTcuNTc0QzQ0Mi40MzEgNDk0LjIxNyA0NDUuMzExIDQ4OS40MTkgNDQ1LjMxMSA0ODIuNjk5VjM0My41NTJMNDg1LjEzOCAzNjYuNTgyQzQ4OC40OTUgMzY4LjQ5OSA0ODkuOTM2IDM3MS4zNzkgNDg5LjkzNiAzNzUuMjE5VjQ4MC43NzhDNDg5LjkzNiA1MzIuMTE3IDQ1MC4xMDkgNTcwLjk4NSAzOTYuODUyIDU3MC45ODVWNTcwLjk4OVpNMjgzLjEzNCA0NjMuOTlMMTkxLjQ4NiA0MTEuMjExQzE2NS4wOTQgMzk1Ljg1NCAxNDcuMzQzIDM2My4yMjkgMTQ3LjM0MyAzMzEuNTYyQzE0Ny4zNDMgMjk0LjYxNiAxNjkuNDE1IDI2MS41MDkgMjAzLjQ4IDI0Ny41OTNWMzU2Ljk5MUMyMDMuNDggMzYzLjcxIDIwNi4zNjEgMzY4LjUwOCAyMTIuMTE3IDM3MS44NjZMMzMyLjA3NCA0NDEuNDM3TDI5Mi43MjkgNDYzLjk5QzI4OS4zNzIgNDY1LjkwNyAyODYuNDkxIDQ2NS45MDcgMjgzLjEzNCA0NjMuOTlaTTI3Ny44NTkgNTQyLjY4QzIyMy42MzkgNTQyLjY4IDE4My44MTMgNTAxLjg5NSAxODMuODEzIDQ1MS41MTRDMTgzLjgxMyA0NDcuNjc1IDE4NC4yOTQgNDQzLjgzNiAxODQuNzcxIDQzOS45OTdMMjc5LjI5NSA0OTQuNjk4QzI4NS4wNTEgNDk4LjA1NiAyOTAuODEyIDQ5OC4wNTYgMjk2LjU2OCA0OTQuNjk4TDQxNy4wMDIgNDI1LjEyN1Y0NzAuNzFDNDE3LjAwMiA0NzQuNTQ5IDQxNS41NjIgNDc3LjQyOSA0MTIuMjA0IDQ3OS4zNDZMMzIwLjU1NyA1MzIuMTI2QzMwOC4wODEgNTM5LjMyMyAyOTMuMjA2IDU0Mi42OCAyNzcuODU0IDU0Mi42OEgyNzcuODU5Wk0zOTYuODUyIDU5OS43NzZDNDU0LjkxMSA1OTkuNzc2IDUwMy4zNyA1NTguNTEzIDUxNC40MSA1MDMuODEyQzU2OC4xNDkgNDg5Ljg5NiA2MDIuNjk2IDQzOS41MTUgNjAyLjY5NiAzODguMTc2QzYwMi42OTYgMzU0LjU4NyA1ODguMzAzIDMyMS45NjIgNTYyLjM5MiAyOTguNDVDNTY0Ljc5MSAyODguMzczIDU2Ni4yMzEgMjc4LjI5NiA1NjYuMjMxIDI2OC4yMjRDNTY2LjIzMSAxOTkuNjExIDUxMC41NzEgMTQ4LjI2NyA0NDYuMjc0IDE0OC4yNjdDNDMzLjMyMiAxNDguMjY3IDQyMC44NDYgMTUwLjE4NCA0MDguMzcgMTU0LjUwNUMzODYuNzc1IDEzMy4zOTIgMzU3LjAyNiAxMTkuOTU4IDMyNC40IDExOS45NThDMjY2LjM0MiAxMTkuOTU4IDIxNy44ODMgMTYxLjIyIDIwNi44NDMgMjE1LjkyMUMxNTMuMTA0IDIyOS44MzcgMTE4LjU1NyAyODAuMjE4IDExOC41NTcgMzMxLjU1N0MxMTguNTU3IDM2NS4xNDYgMTMyLjk1IDM5Ny43NzEgMTU4Ljg2MSA0MjEuMjgzQzE1Ni40NjIgNDMxLjM2IDE1NS4wMjIgNDQxLjQzNyAxNTUuMDIyIDQ1MS41MUMxNTUuMDIyIDUyMC4xMjMgMjEwLjY4MiA1NzEuNDY2IDI3NC45NzggNTcxLjQ2NkMyODcuOTMxIDU3MS40NjYgMzAwLjQwNyA1NjkuNTQ5IDMxMi44ODMgNTY1LjIyOEMzMzQuNDczIDU4Ni4zNDEgMzY0LjIyMiA1OTkuNzc2IDM5Ni44NTIgNTk5Ljc3NloiIGZpbGw9ImJsYWNrIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNzIwIiBoZWlnaHQ9IjcyMCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNjA2OTM0IDAuMDk5OTc1NikiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNDg0LjEzOSIgaGVpZ2h0PSI0NzkuODE4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE4LjU1NyAxMTkuOTU4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
  "gemini": "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjFlbSIgc3R5bGU9ImZsZXg6bm9uZTtsaW5lLWhlaWdodDoxIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkdlbWluaTwvdGl0bGU+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9IiMzMTg2RkYiPjwvcGF0aD48cGF0aCBkPSJNMjAuNjE2IDEwLjgzNWExNC4xNDcgMTQuMTQ3IDAgMDEtNC40NS0zLjAwMSAxNC4xMTEgMTQuMTExIDAgMDEtMy42NzgtNi40NTIuNTAzLjUwMyAwIDAwLS45NzUgMCAxNC4xMzQgMTQuMTM0IDAgMDEtMy42NzkgNi40NTIgMTQuMTU1IDE0LjE1NSAwIDAxLTQuNDUgMy4wMDFjLS42NS4yOC0xLjMxOC41MDUtMi4wMDIuNjc4YS41MDIuNTAyIDAgMDAwIC45NzVjLjY4NC4xNzIgMS4zNS4zOTcgMi4wMDIuNjc3YTE0LjE0NyAxNC4xNDcgMCAwMTQuNDUgMy4wMDEgMTQuMTEyIDE0LjExMiAwIDAxMy42NzkgNi40NTMuNTAyLjUwMiAwIDAwLjk3NSAwYy4xNzItLjY4NS4zOTctMS4zNTEuNjc3LTIuMDAzYTE0LjE0NSAxNC4xNDUgMCAwMTMuMDAxLTQuNDUgMTQuMTEzIDE0LjExMyAwIDAxNi40NTMtMy42NzguNTAzLjUwMyAwIDAwMC0uOTc1IDEzLjI0NSAxMy4yNDUgMCAwMS0yLjAwMy0uNjc4eiIgZmlsbD0idXJsKCNsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfKSI+PC9wYXRoPjxwYXRoIGQ9Ik0yMC42MTYgMTAuODM1YTE0LjE0NyAxNC4xNDcgMCAwMS00LjQ1LTMuMDAxIDE0LjExMSAxNC4xMTEgMCAwMS0zLjY3OC02LjQ1Mi41MDMuNTAzIDAgMDAtLjk3NSAwIDE0LjEzNCAxNC4xMzQgMCAwMS0zLjY3OSA2LjQ1MiAxNC4xNTUgMTQuMTU1IDAgMDEtNC40NSAzLjAwMWMtLjY1LjI4LTEuMzE4LjUwNS0yLjAwMi42NzhhLjUwMi41MDIgMCAwMDAgLjk3NWMuNjg0LjE3MiAxLjM1LjM5NyAyLjAwMi42NzdhMTQuMTQ3IDE0LjE0NyAwIDAxNC40NSAzLjAwMSAxNC4xMTIgMTQuMTEyIDAgMDEzLjY3OSA2LjQ1My41MDIuNTAyIDAgMDAuOTc1IDBjLjE3Mi0uNjg1LjM5Ny0xLjM1MS42NzctMi4wMDNhMTQuMTQ1IDE0LjE0NSAwIDAxMy4wMDEtNC40NSAxNC4xMTMgMTQuMTEzIDAgMDE2LjQ1My0zLjY3OC41MDMuNTAzIDAgMDAwLS45NzUgMTMuMjQ1IDEzLjI0NSAwIDAxLTIuMDAzLS42Nzh6IiBmaWxsPSJ1cmwoI2xvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8pIj48L3BhdGg+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9InVybCgjbG9iZS1pY29ucy1nZW1pbmktMi1fUl8wXykiPjwvcGF0aD48ZGVmcz48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfIiB4MT0iNyIgeDI9IjExIiB5MT0iMTUuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjMDhCOTYyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDhCOTYyIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8iIHgxPSI4IiB4Mj0iMTEuNSIgeTE9IjUuNSIgeTI9IjExIj48c3RvcCBzdG9wLWNvbG9yPSIjRjk0NTQzIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjk0NTQzIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTItX1JfMF8iIHgxPSIzLjUiIHgyPSIxNy41IiB5MT0iMTMuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjRkFCQzEyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuNDYiIHN0b3AtY29sb3I9IiNGQUJDMTIiIHN0b3Atb3BhY2l0eT0iMCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==",
  "deepseek": "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RGVlcFNlZWs8L3RpdGxlPjxwYXRoIGQ9Ik0yMy43NDggNC42NTFjLS4yNTQtLjEyNC0uMzY0LjExMy0uNTEyLjIzMy0uMDUxLjA0LS4wOTQuMDktLjEzNy4xMzctLjM3Mi4zOTctLjgwNi42NTctMS4zNzMuNjI2LS44MjktLjA0Ni0xLjUzNy4yMTQtMi4xNjMuODQ4LS4xMzMtLjc4Mi0uNTc1LTEuMjQ4LTEuMjQ3LTEuNTQ4LS4zNTItLjE1NS0uNzA4LS4zMTEtLjk1NS0uNjUtLjE3Mi0uMjQtLjIxOS0uNTA5LS4zMDUtLjc3NC0uMDU1LS4xNi0uMTEtLjMyMy0uMjkzLS4zNS0uMi0uMDMxLS4yNzguMTM2LS4zNTYuMjc2LS4zMTMuNTcyLS40MzQgMS4yMDItLjQyMiAxLjg0LjAyNyAxLjQzNi42MzMgMi41OCAxLjgzOCAzLjM5My4xMzcuMDk0LjE3Mi4xODcuMTI5LjMyMy0uMDgyLjI4LS4xOC41NTMtLjI2Ni44MzMtLjA1NS4xNzktLjEzNy4yMTgtLjMyOC4xNGE1LjUgNS41IDAgMCAxLTEuNzM3LTEuMTc5Yy0uODU3LS44MjgtMS42MzEtMS43NDMtMi41OTctMi40NmExMiAxMiAwIDAgMC0uNjg5LS40N2MtLjk4NS0uOTU3LjEzLTEuNzQzLjM4Ny0xLjgzNi4yNy0uMDk4LjA5NC0uNDMzLS43NzgtLjQyOC0uODcyLjAwMy0xLjY3LjI5NS0yLjY4Ny42ODVhMyAzIDAgMCAxLS40NjUuMTM2IDkuNiA5LjYgMCAwIDAtMi44ODMtLjEwMWMtMS44ODUuMjEtMy4zOSAxLjEtNC40OTcgMi42MjJDLjA4MiA4Ljc3Ni0uMjMxIDEwLjg1NC4xNTIgMTMuMDJjLjQwMyAyLjI4NCAxLjU2OCA0LjE3NSAzLjM2IDUuNjUzIDEuODU3IDEuNTMzIDMuOTk3IDIuMjg0IDYuNDM4IDIuMTQgMS40ODItLjA4NSAzLjEzMi0uMjg0IDQuOTk0LTEuODYuNDcuMjM0Ljk2Mi4zMjggMS43OC4zOTguNjI5LjA1OCAxLjIzNS0uMDMxIDEuNzA1LS4xMjkuNzM1LS4xNTUuNjg0LS44MzYuNDE4LS45NjEtMi4xNTUtMS4wMDQtMS42ODItLjU5NS0yLjExMi0uOTI2IDEuMDk1LTEuMjk1IDIuNzY4LTMuNTk4IDMuMjg0LTYuNzMzLjA1LS4zNDYuMTE1LS44MzQuMTA4LTEuMTE0LS4wMDQtLjE3MS4wMzUtLjIzOC4yMy0uMjU3YTQuMiA0LjIgMCAwIDAgMS41NDUtLjQ3NWMxLjM5Ny0uNzYzIDEuOTYtMi4wMTYgMi4wOTMtMy41MTcuMDItLjIzLS4wMDQtLjQ2Ny0uMjQ3LS41ODhNMTEuNTggMTguMTY4Yy0yLjA4OC0xLjY0Mi0zLjEwMS0yLjE4My0zLjUyLTIuMTYtLjM5LjAyNC0uMzIuNDcyLS4yMzQuNzYzLjA5LjI4OC4yMDcuNDg3LjM3MS43NC4xMTQuMTY3LjE5Mi40MTYtLjExMy42MDMtLjY3My40MTYtMS44NDItLjE0LTEuODk3LS4xNjgtMS4zNjEtLjgwMS0yLjUtMS44Ni0zLjMwMS0zLjMwNi0uNzc1LTEuMzkzLTEuMjI1LTIuODg4LTEuMjk5LTQuNDgyLS4wMi0uMzg1LjA5NC0uNTIyLjQ3Ny0uNTkyYTQuNyA0LjcgMCAwIDEgMS41My0uMDM4YzIuMTMxLjMxMSAzLjk0NiAxLjI2NCA1LjQ2NyAyLjc3NC44NjguODYgMS41MjUgMS44ODcgMi4yMDIgMi44OS43MiAxLjA2NiAxLjQ5NCAyLjA4MiAyLjQ4IDIuOTE1LjM0OC4yOTEuNjI2LjUxMy44OTIuNjc3LS44MDIuMDktMi4xNC4xMDktMy4wNTUtLjYxNXptMS4wMDEtNi40NGEuMzA2LjMwNiAwIDAgMSAuNDE1LS4yODcuMy4zIDAgMCAxIC4xMTMuMDc0LjMuMyAwIDAgMSAuMDg2LjIxNGMwIC4xNy0uMTM2LjMwNy0uMzA4LjMwN2EuMzAzLjMwMyAwIDAgMS0uMzA2LS4zMDdtMy4xMSAxLjU5NmMtLjIuMDgxLS40LjE1MS0uNTkxLjE2YTEuMjUgMS4yNSAwIDAgMS0uNzk4LS4yNTRjLS4yNzQtLjIzLS40Ny0uMzU4LS41NTEtLjc1OGExLjcgMS43IDAgMCAxIC4wMTUtLjU4OGMuMDctLjMyNy0uMDA3LS41MzctLjIzOC0uNzI3LS4xODgtLjE1Ni0uNDI2LS4xOTktLjY4OS0uMTk5YS42LjYgMCAwIDEtLjI1NC0uMDc4LjI1My4yNTMgMCAwIDEtLjExNC0uMzU4IDEgMSAwIDAgMSAuMTkyLS4yMWMuMzU2LS4yMDIuNzY3LS4xMzYgMS4xNDYuMDE2LjM1Mi4xNDQuNjE4LjQwOCAxLjAwMS43ODIuMzkyLjQ1MS40NjIuNTc2LjY4NS45MTUuMTc2LjI2NC4zMzYuNTM2LjQ0Ni44NDguMDY2LjE5NC0uMDIuMzUzLS4yNS40NSIvPjwvc3ZnPg=="
};
const modelProviderNames: Record<ModelProvider, string> = { claude: "Claude", openai: "OpenAI", gemini: "Gemini", deepseek: "DeepSeek" };
function modelProvider(name: string, provider = ""): ModelProvider | undefined {
  const explicit = provider.trim().toLowerCase().replace(/[^a-z0-9]+/g, "");
  if (provider.trim()) {
    const providers: Record<string, ModelProvider> = {
      anthropic: "claude", claude: "claude", claudecode: "claude",
      openai: "openai", google: "gemini", googlegemini: "gemini", googleaistudio: "gemini", gemini: "gemini",
      deepseek: "deepseek",
    };
    return providers[explicit];
  }
  const value = name.trim().toLowerCase();
  if (/^(?:anthropic\\/)?claude(?:$|[\\s-])/.test(value)) return "claude";
  if (/^(?:openai\\/)?(?:gpt[-\\s]?\\d|chatgpt(?:$|[\\s-])|o[134](?:$|[\\s-]))/.test(value)) return "openai";
  if (/^(?:google\\/)?gemini(?:$|[\\s-])/.test(value)) return "gemini";
  if (/^deepseek(?:$|[\\s-])/.test(value)) return "deepseek";
  return undefined;
}
const ProviderLogo = defineComponent({
  props: {
    model: { type: String, default: "" }, provider: { type: String, default: "" },
    size: { type: Number, default: 20 },
  },
  setup: props => () => {
    const provider = modelProvider(props.model, props.provider);
    const monochrome = provider !== "gemini";
    const markSize = Math.round(props.size * (provider === "openai" ? .82 : .58));
    return h("span", {
      class: ["model-provider-mark", { "is-color": provider && !monochrome }],
      "data-provider-logo": provider ?? "unknown", "aria-hidden": "true",
      title: provider ? \`\${modelProviderNames[provider]} logo\` : "Custom model",
      style: {
        display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        width: \`\${props.size}px\`, height: \`\${props.size}px\`, boxSizing: "border-box",
        border: "1px solid var(--provider-logo-border, #e5e5e8)",
        borderRadius: \`\${props.size >= 28 ? 9 : props.size >= 20 ? 6 : 4}px\`,
        background: "var(--provider-logo-surface, #fff)", color: "var(--provider-logo-muted, #a1a1aa)",
      },
    }, provider ? [h("img", {
      src: modelProviderAssets[provider], alt: "", "aria-hidden": "true",
      class: ["model-provider-image", { "is-monochrome": monochrome }],
      "data-logo-source": "bundled-brand-asset",
      style: { display: "block", objectFit: "contain", width: \`\${markSize}px\`, height: \`\${markSize}px\` },
    })] : [h(Cpu, { size: Math.round(props.size * .5), strokeWidth: 1.7, "aria-hidden": "true" })]);
  },
});

export interface ConversationAttachment {
  id?: string;
  name: string;
  mimeType?: string;
  url?: string;
}
export interface ConversationTool {
  id: string;
  title: string;
  status?: "pending" | "running" | "success" | "failed";
  summary?: string;
  input?: string;
  output?: string;
}
export type ConversationPart =
  | { kind: "thought" | "message"; id?: string; text: string }
  | (ConversationTool & { kind: "tool" });
export interface ConversationMessage {
  id: string;
  role: "user" | "assistant" | "system";
  text?: string;
  /** Ordered process and response parts. text is a fallback when parts contain no message. */
  parts?: ConversationPart[];
  attachments?: ConversationAttachment[];
  streaming?: boolean;
  interrupted?: boolean;
  error?: string;
  actions?: { id: string; label: string; kind?: "preview"; disabled?: boolean }[];
}
const props = withDefaults(defineProps<{
  /** Omit for the local example. Supplying messages makes the transcript fully controlled. */
  messages?: ConversationMessage[];
  modelValue?: string;
  model?: string;
  models?: string[];
  busy?: boolean;
  disabled?: boolean;
  sessionKey?: string;
  placeholder?: string;
  error?: string;
  accept?: string;
}>(), {
  models: () => ["Claude Sonnet 4.6", "GPT-5.4", "Gemini 3.1 Pro"],
  busy: false,
  disabled: false,
  sessionKey: "",
  placeholder: "Message…",
  error: "",
  accept: "",
});
const emit = defineEmits<{
  send: [message: { text: string; model: string; files: File[] }];
  stop: [];
  "update:modelValue": [value: string];
  "update:model": [value: string];
  "message-action": [action: { messageId: string; actionId: string }];
}>();
const exampleMessages: ConversationMessage[] = [
  { id: "example-user-1", role: "user", text: "Check the typography on the homepage." },
  {
    id: "example-assistant-1", role: "assistant",
    parts: [
      { kind: "thought", text: "Check the hierarchy, type sizes, and contrast." },
      { kind: "tool", id: "read-page", title: "Read page styles", status: "success", input: "src/styles.css", output: "Read the heading, body, and supporting text styles." },
      { kind: "message", text: "Use three levels: headings, body text, and supporting details.\\n\\nKeep the body readable, then refine the space between headings and paragraphs." },
    ],
  },
  { id: "example-user-2", role: "user", text: "Keep body text at 15px and supporting text at 12px or above." },
];
const localMessages = ref<ConversationMessage[]>(exampleMessages);
const localDraft = ref("");
const localModel = ref(props.models[0] ?? "");
const draft = computed({
  get: () => props.modelValue ?? localDraft.value,
  set: (value: string) => {
    if (props.modelValue === undefined) localDraft.value = value;
    emit("update:modelValue", value);
  },
});
const selectedModel = computed(() => props.model ?? localModel.value);
const messages = computed(() => props.messages ?? localMessages.value);
const working = computed(() => props.busy || messages.value.some(message => message.streaming));
const textarea = ref<HTMLTextAreaElement | null>(null);
const fileInput = ref<HTMLInputElement | null>(null);
const scroller = ref<HTMLElement | null>(null);
const transcript = ref<HTMLElement | null>(null);
const followBottom = ref(true);
const awayFromBottom = ref(false);
const scrolling = ref(false);
const composing = ref(false);
const menuOpen = ref(false);
const modelRoot = ref<HTMLElement | null>(null);
const modelTrigger = ref<HTMLButtonElement | null>(null);
const previewDialog = ref<HTMLDialogElement | null>(null);
const preview = ref<{ url: string; name: string } | null>(null);
const instanceId = \`conversation-\${useId().replace(/:/g, "")}\`;
const expanded = ref<Record<string, boolean>>({});
interface PendingFile { id: string; file: File; url?: string }
const pendingFiles = ref<PendingFile[]>([]);
const objectUrls = new Set<string>();
let sequence = 0;
let scrollFrame = 0;
let resizeObserver: ResizeObserver | undefined;
let disposed = false;
let submitting = false;
let followPaused = false;
let scrollingTimer: ReturnType<typeof setTimeout> | undefined;
let arrivalMotion: MediaQueryList | undefined;
const arrivals = new Set<Animation>();
function stopArrivals() {
  arrivals.forEach(animation => animation.cancel());
  arrivals.clear();
}
function arrivalVisibility() { if (document.hidden) stopArrivals(); }
function arrivalPreference() { if (arrivalMotion?.matches) stopArrivals(); }
watch(() => messages.value.map(message => \`\${message.role}:\${message.id}\`), (current, previous) => {
  if (!arrivalMotion || arrivalMotion.matches || document.hidden) return;
  const earlier = new Set(previous);
  const newUsers = new Set(current.filter(key => key.startsWith("user:") && !earlier.has(key)).map(key => key.slice(5)));
  if (!newUsers.size) return;
  void nextTick(() => {
    if (disposed || arrivalMotion?.matches || document.hidden) return;
    transcript.value?.querySelectorAll<HTMLElement>(".message-user").forEach(message => {
      if (!newUsers.has(message.dataset.messageId ?? "")) return;
      const bubble = message.querySelector<HTMLElement>(".user-bubble");
      if (!bubble) return;
      const animation = bubble.animate([
        { transform: "translate3d(0, 18px, 0)", opacity: 0 },
        { transform: "none", opacity: 1 },
      ], { duration: 360, easing: "cubic-bezier(.16,1,.3,1)" });
      animation.id = "message-send-arrival";
      arrivals.add(animation);
      animation.onfinish = () => { arrivals.delete(animation); };
      animation.oncancel = () => { arrivals.delete(animation); };
    });
  });
});

// Build a small, safe chat prose renderer from text nodes, never raw HTML.
function linkUrl(value: string) {
  try {
    const parsed = new URL(value, "https://component.invalid");
    return ["http:", "https:", "mailto:"].includes(parsed.protocol) ? value : undefined;
  } catch { return undefined; }
}
function inline(text: string, depth = 0): VNodeChild[] {
  if (depth > 4) return [text];
  const nodes: VNodeChild[] = [];
  const pattern = /\`([^\`\\n]+)\`|\\[([^\\]\\n]+)\\]\\(([^\\s)]+)\\)|\\*\\*([^*\\n]+)\\*\\*|\\*([^*\\n]+)\\*/g;
  let start = 0;
  for (const match of text.matchAll(pattern)) {
    nodes.push(text.slice(start, match.index));
    if (match[1] !== undefined) nodes.push(h("code", match[1]));
    else if (match[2] !== undefined) {
      const href = linkUrl(match[3]!);
      nodes.push(h(href ? "a" : "span", href ? { href, target: "_blank", rel: "noopener noreferrer" } : {}, inline(match[2], depth + 1)));
    } else nodes.push(h(match[4] !== undefined ? "strong" : "em", inline(match[4] ?? match[5] ?? "", depth + 1)));
    start = match.index! + match[0].length;
  }
  nodes.push(text.slice(start));
  return nodes;
}
function prose(text: string): VNodeChild[] {
  const lines = text.replace(/\\r\\n?/g, "\\n").split("\\n");
  const nodes: VNodeChild[] = [];
  let index = 0;
  const special = (line: string) => /^(?:\\s*\`\`\`|#{1,4}\\s|\\s*[-*+]\\s|\\s*\\d+\\.\\s|>\\s?)/.test(line);
  while (index < lines.length) {
    const line = lines[index]!;
    if (!line.trim()) { index++; continue; }
    if (/^\\s*\`\`\`/.test(line)) {
      const code: string[] = [];
      index++;
      while (index < lines.length && !/^\\s*\`\`\`/.test(lines[index]!)) code.push(lines[index++]!);
      index++;
      nodes.push(h("pre", [h("code", code.join("\\n"))]));
    } else if (/^#{1,4}\\s/.test(line)) {
      const heading = line.match(/^(#{1,4})\\s+(.*)$/)!;
      nodes.push(h(\`h\${heading[1]!.length}\`, inline(heading[2]!)));
      index++;
    } else if (/^\\s*(?:[-*+]|\\d+\\.)\\s/.test(line)) {
      const ordered = /^\\s*\\d+\\./.test(line);
      const items: VNodeChild[] = [];
      const pattern = ordered ? /^\\s*\\d+\\.\\s+(.*)$/ : /^\\s*[-*+]\\s+(.*)$/;
      while (index < lines.length && pattern.test(lines[index]!)) items.push(h("li", inline(lines[index++]!.replace(pattern, "$1"))));
      const start = ordered ? Number(line.match(/^\\s*(\\d+)/)?.[1] ?? 1) : undefined;
      nodes.push(h(ordered ? "ol" : "ul", ordered ? { start } : {}, items));
    } else if (/^>\\s?/.test(line)) {
      const quote: string[] = [];
      while (index < lines.length && /^>\\s?/.test(lines[index]!)) quote.push(lines[index++]!.replace(/^>\\s?/, ""));
      nodes.push(h("blockquote", inline(quote.join("\\n"))));
    } else {
      const paragraph = [line];
      index++;
      while (index < lines.length && lines[index]!.trim() && !special(lines[index]!)) paragraph.push(lines[index++]!);
      nodes.push(h("p", inline(paragraph.join("\\n"))));
    }
  }
  return nodes;
}
const ChatText = defineComponent({
  props: { text: { type: String, default: "" } },
  setup: props => () => h("div", { class: "conversation-prose" }, prose(props.text)),
});
// These glyphs and the busy cue use the source chat controls' geometry.
const ChatGlyph = defineComponent({
  props: { name: { type: String, required: true }, size: { type: Number, default: 18 } },
  setup: props => () => h("svg", {
    class: ["chat-glyph", \`glyph-\${props.name}\`], width: props.size, height: props.size,
    viewBox: "0 0 24 24", fill: props.name === "stop" ? "currentColor" : "none",
    stroke: props.name === "stop" ? "none" : "currentColor", "stroke-width": props.name === "stop" ? undefined : 1.7,
    "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true",
  }, [h("g", { class: "glyph-motion" }, props.name === "send"
    ? [h("path", { d: "M12 18V6m-6 6 6-6 6 6" })]
    : props.name === "stop"
      ? [h("rect", { x: 3.75, y: 3.75, width: 16.5, height: 16.5, rx: 3 })]
      : [h("path", { d: "M12 3A9 9 0 1 1 3 12" }), h("circle", { cx: 3, cy: 12, r: 1.65, fill: "currentColor", stroke: "none" })])]),
});
const ThinkingCue = defineComponent({
  setup: () => () => h("span", { class: "thinking-busy" }, [
    h("span", { class: "thinking-lamp", "aria-hidden": "true" }, [h("span", { class: "thinking-lamp-halo" }), h("span", { class: "thinking-lamp-core" })]),
    h("span", { class: "thinking-sheen" }, "Thinking…"),
  ]),
});

type TextBlock = { kind: "message"; key: string; text: string } | { kind: "thought"; key: string; text: string };
type ToolBlock = { kind: "tools"; key: string; tools: ConversationTool[] };
type Block = TextBlock | ToolBlock;
const messageViews = computed(() => messages.value.map(message => {
  const prefix = encodeURIComponent(message.id);
  const parts: ConversationPart[] = [...(message.parts ?? [])];
  if (message.text && !parts.some(part => part.kind === "message")) parts.push({ kind: "message", text: message.text });
  const blocks: Block[] = [];
  for (const [index, part] of parts.entries()) {
    if (part.kind === "tool") {
      const previous = blocks[blocks.length - 1];
      if (previous?.kind === "tools") previous.tools.push(part);
      else blocks.push({ kind: "tools", key: \`\${prefix}-tools-\${index}\`, tools: [part] });
    } else if (part.text) blocks.push({ kind: part.kind, key: \`\${prefix}-\${part.kind}-\${encodeURIComponent(part.id ?? String(index))}\`, text: part.text });
  }
  let lastMessage = -1;
  for (let index = blocks.length - 1; index >= 0; index--) if (blocks[index]?.kind === "message") { lastMessage = index; break; }
  const settled = !message.streaming;
  const work = blocks.filter((_, index) => index !== lastMessage);
  const response = blocks[lastMessage];
  const tail = blocks[blocks.length - 1];
  return {
    message, prefix, tailKey: tail?.key,
    // Keys and the final response DOM survive the transition from streaming to settled.
    blocks: settled ? [...work, ...(response ? [response] : [])] : blocks,
    processKey: \`\${prefix}-process\`,
    workKeys: new Set(work.map(block => block.key)),
    responseKey: response?.key,
    outputKey: message.streaming && tail?.kind === "message" ? tail.key : undefined,
    failures: parts.filter(part => part.kind === "tool" && part.status === "failed").length,
  };
}));
const validFoldKeys = computed(() => {
  const keys = new Set<string>();
  for (const view of messageViews.value) {
    if (view.workKeys.size) keys.add(view.processKey);
    for (const block of view.blocks) {
      keys.add(block.key);
      if (block.kind === "tools") for (const tool of block.tools) if (hasDetails(tool)) keys.add(toolKey(block, tool));
    }
  }
  return keys;
});
watch(validFoldKeys, keys => {
  expanded.value = Object.fromEntries(Object.entries(expanded.value).filter(([key]) => keys.has(key)));
});
function isOpen(key: string, defaultOpen = false) { return expanded.value[key] ?? defaultOpen; }
function panelId(key: string) { return \`\${instanceId}-\${key}\`; }
function toggle(key: string, defaultOpen = false) {
  const panel = document.getElementById(panelId(key));
  if (panel) snapshots.set(panel, panel.getBoundingClientRect().height);
  expanded.value = { ...expanded.value, [key]: !isOpen(key, defaultOpen) };
  // Opening an earlier process is a request to read it, not to follow streaming output.
  followPaused = true;
  followBottom.value = false;
}
function toolKey(block: ToolBlock, tool: ConversationTool) { return \`\${block.key}-tool-\${encodeURIComponent(tool.id)}\`; }
function hasDetails(tool: ConversationTool) { return Boolean(tool.input || tool.output); }
function toolState(tool: ConversationTool, busy = false) {
  if (tool.status === "failed") return "failed";
  return busy && (tool.status === "running" || tool.status === "pending") ? "running" : "done";
}
function toolStatus(tool: ConversationTool, busy = false) { return { running: "Running", failed: "Failed", done: "Done" }[toolState(tool, busy)]; }
function activateMessageAction(message: ConversationMessage, action: { id: string; disabled?: boolean }) {
  if (props.disabled || action.disabled) return;
  followPaused = true;
  followBottom.value = false;
  emit("message-action", { messageId: message.id, actionId: action.id });
}
function groupState(block: ToolBlock, busy = false) {
  if (block.tools.some(tool => toolState(tool, busy) === "running")) return "running";
  return block.tools.some(tool => toolState(tool, busy) === "failed") ? "failed" : "done";
}
function groupContext(block: ToolBlock, busy = false) {
  const current = [...block.tools].reverse().find(tool => toolState(tool, busy) === "running");
  if (current) return [current.title, current.summary].filter(Boolean).join(" · ");
  const names = [...new Set(block.tools.map(tool => tool.title))];
  return names.slice(0, 3).join(" · ") + (names.length > 3 ? " …" : "");
}

const snapshots = new WeakMap<Element, number>();
watch(() => messages.value.map(message => [message.id, !!message.streaming] as const), (current, previous) => {
  const wasStreaming = new Map(previous);
  for (const [id, streaming] of current) {
    if (streaming || !wasStreaming.get(id)) continue;
    const view = messageViews.value.find(view => view.message.id === id);
    if (!view || isOpen(view.processKey, !!view.message.interrupted)) continue;
    // Settled thoughts become plain text. Capture the live shell before that patch,
    // so a previously closed summary cannot briefly grow to its full text height.
    for (const key of view.workKeys) {
      const panel = document.getElementById(panelId(\`\${key}-shell\`));
      if (panel) snapshots.set(panel, panel.getBoundingClientRect().height);
    }
  }
}, { flush: "pre" });
function beforeEnter(element: Element) {
  const panel = element as HTMLElement;
  panel.removeAttribute("inert");
  panel.style.height = \`\${snapshots.get(element) ?? panel.getBoundingClientRect().height}px\`;
}
function enter(element: Element) {
  const panel = element as HTMLElement;
  void panel.offsetHeight;
  panel.style.height = \`\${panel.scrollHeight}px\`;
  snapshots.delete(element);
}
function clearHeight(element: Element) { (element as HTMLElement).style.removeProperty("height"); }
function freezeFold(element: Element) {
  const panel = element as HTMLElement;
  const height = getComputedStyle(panel).display === "none" ? snapshots.get(element) ?? 0 : panel.getBoundingClientRect().height;
  snapshots.set(element, height);
  panel.style.height = \`\${height}px\`;
}
function leave(element: Element) {
  const panel = element as HTMLElement;
  panel.setAttribute("inert", "");
  panel.style.height = \`\${snapshots.get(element) ?? panel.getBoundingClientRect().height}px\`;
  snapshots.delete(element);
  void panel.offsetHeight;
  panel.style.height = "0px";
}

function onScroll() {
  const element = scroller.value;
  if (!element) return;
  awayFromBottom.value = element.scrollHeight - element.scrollTop - element.clientHeight >= 80;
  followBottom.value = !followPaused && !awayFromBottom.value;
  if (scrolling.value) showScrollbar();
}
function showScrollbar() {
  scrolling.value = true;
  clearTimeout(scrollingTimer);
  scrollingTimer = setTimeout(() => { scrolling.value = false; }, 650);
}
function userScroll() { followPaused = false; showScrollbar(); }
function scrollbarPointer(event: PointerEvent) {
  if (event.target === scroller.value) userScroll();
}
function scrollKey(event: KeyboardEvent) {
  if (event.target === scroller.value && !event.ctrlKey && !event.altKey && !event.metaKey && ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) userScroll();
}
function onLayout() {
  const element = scroller.value;
  if (element) awayFromBottom.value = element.scrollHeight - element.scrollTop - element.clientHeight >= 80;
  scheduleScroll();
}
function scheduleScroll() {
  if (disposed || followPaused || !followBottom.value || scrollFrame) return;
  scrollFrame = requestAnimationFrame(() => {
    scrollFrame = 0;
    if (!disposed && !followPaused && followBottom.value && scroller.value) scroller.value.scrollTop = scroller.value.scrollHeight;
  });
}
function scrollToBottom() {
  followPaused = false;
  followBottom.value = true;
  void nextTick(scheduleScroll);
}
function autoGrow() {
  const element = textarea.value;
  if (!element) return;
  element.style.height = "auto";
  element.style.height = \`\${Math.min(Math.max(element.scrollHeight, 40), 128)}px\`;
}
watch(draft, () => nextTick(autoGrow));
watch(messages, () => nextTick(scheduleScroll), { deep: true });
watch(working, () => nextTick(scheduleScroll));
const canSend = computed(() => !props.disabled && !working.value && Boolean(draft.value.trim() || pendingFiles.value.length) && (!props.models.length || props.models.includes(selectedModel.value)));
function updateDraft(event: Event) {
  if (!props.disabled) draft.value = (event.target as HTMLTextAreaElement).value;
}
function send() {
  if (!canSend.value || composing.value || submitting) return;
  submitting = true;
  const text = draft.value.trim();
  const files = pendingFiles.value.map(item => item.file);
  if (props.messages === undefined) {
    localMessages.value = [...localMessages.value, {
      id: \`\${instanceId}-user-\${++sequence}\`, role: "user", text,
      attachments: pendingFiles.value.map(item => ({ id: item.id, name: item.file.name, mimeType: item.file.type, url: item.url })),
    }];
  } else for (const item of pendingFiles.value) if (item.url) releaseUrl(item.url);
  draft.value = "";
  pendingFiles.value = [];
  emit("send", { text, model: selectedModel.value, files });
  scrollToBottom();
  void nextTick(() => { submitting = false; });
}
function onKeydown(event: KeyboardEvent) {
  if (event.key !== "Enter" || event.shiftKey || event.ctrlKey || event.metaKey || event.altKey || event.isComposing || composing.value || event.keyCode === 229) return;
  event.preventDefault();
  send();
}
function addFiles(files: File[]) {
  if (props.disabled) return;
  const next = [...pendingFiles.value];
  for (const file of files) {
    if (next.some(item => item.file.name === file.name && item.file.size === file.size && item.file.type === file.type && item.file.lastModified === file.lastModified)) continue;
    const url = file.type.startsWith("image/") ? URL.createObjectURL(file) : undefined;
    if (url) objectUrls.add(url);
    next.push({ id: \`\${instanceId}-file-\${++sequence}\`, file, url });
  }
  pendingFiles.value = next;
}
function pickFiles(event: Event) {
  const input = event.target as HTMLInputElement;
  addFiles(Array.from(input.files ?? []));
  input.value = "";
}
function pasteFiles(event: ClipboardEvent) {
  if (props.disabled) return;
  const images = Array.from(event.clipboardData?.files ?? []).filter(file => file.type.startsWith("image/"));
  if (images.length) { event.preventDefault(); addFiles(images); }
}
function releaseUrl(url: string) {
  if (preview.value?.url === url) closePreview();
  URL.revokeObjectURL(url);
  objectUrls.delete(url);
}
function removeFile(id: string) {
  if (props.disabled) return;
  const file = pendingFiles.value.find(item => item.id === id);
  if (file?.url) releaseUrl(file.url);
  pendingFiles.value = pendingFiles.value.filter(item => item.id !== id);
}
function imageUrl(attachment: ConversationAttachment) {
  if (!attachment.mimeType?.startsWith("image/") || !attachment.url) return undefined;
  return attachmentUrl(attachment) ?? (/^data:image\\/(?:png|jpeg|gif|webp|avif|bmp);/i.test(attachment.url) ? attachment.url : undefined);
}
function attachmentUrl(attachment: ConversationAttachment) {
  if (!attachment.url) return undefined;
  try {
    const parsed = new URL(attachment.url, "https://component.invalid");
    return ["http:", "https:", "blob:"].includes(parsed.protocol) ? attachment.url : undefined;
  } catch { return undefined; }
}
async function openPreview(url: string, name: string) {
  preview.value = { url, name };
  await nextTick();
  if (!disposed && previewDialog.value && !previewDialog.value.open) previewDialog.value.showModal();
}
function closePreview() { previewDialog.value?.close(); preview.value = null; }

function closeModels(restoreFocus = false) {
  menuOpen.value = false;
  if (restoreFocus) void nextTick(() => { if (!disposed) modelTrigger.value?.focus({ preventScroll: true }); });
}
function modelButtons() { return [...(modelRoot.value?.querySelectorAll<HTMLButtonElement>('[role="menuitemradio"]') ?? [])]; }
function focusModel(button?: HTMLButtonElement) {
  if (!button) return;
  button.focus({ preventScroll: true });
  const menu = button.parentElement;
  if (!menu) return;
  if (button.offsetTop < menu.scrollTop) menu.scrollTop = button.offsetTop;
  else if (button.offsetTop + button.offsetHeight > menu.scrollTop + menu.clientHeight) menu.scrollTop = button.offsetTop + button.offsetHeight - menu.clientHeight;
}
async function openModels() {
  if (props.disabled || !props.models.length) return;
  menuOpen.value = true;
  await nextTick();
  if (!disposed && menuOpen.value) focusModel(modelButtons().find(button => button.getAttribute("aria-checked") === "true") ?? modelButtons()[0]);
}
function selectModel(model: string) {
  if (props.disabled || !props.models.includes(model)) return;
  if (props.model === undefined) localModel.value = model;
  emit("update:model", model);
  closeModels(true);
}
async function onModelKeydown(event: KeyboardEvent) {
  if (event.isComposing || props.disabled || event.ctrlKey || event.altKey || event.metaKey) return;
  if (event.key === "Escape" && menuOpen.value) { event.preventDefault(); event.stopPropagation(); closeModels(true); return; }
  if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  if (!menuOpen.value) { await openModels(); return; }
  const options = modelButtons();
  if (!options.length) return;
  const current = options.indexOf(document.activeElement as HTMLButtonElement);
  const index = event.key === "Home" ? 0 : event.key === "End" ? options.length - 1 : (current + (event.key === "ArrowDown" ? 1 : -1) + options.length) % options.length;
  focusModel(options[index]);
}
function outsideModels(event: PointerEvent) { if (!modelRoot.value?.contains(event.target as Node)) closeModels(); }
function leaveModels(event: FocusEvent) { if (!modelRoot.value?.contains(event.relatedTarget as Node | null)) closeModels(); }
watch(() => props.models, models => {
  if (props.model === undefined && !models.includes(localModel.value)) localModel.value = models[0] ?? "";
  closeModels();
}, { deep: true });
watch(() => props.model, (model, previous) => {
  if (model === undefined && previous !== undefined) localModel.value = props.models.includes(previous) ? previous : props.models[0] ?? "";
});
watch(() => props.disabled, disabled => { if (disabled) closeModels(); });
watch(() => props.sessionKey, () => {
  draft.value = "";
  for (const url of [...objectUrls]) releaseUrl(url);
  pendingFiles.value = [];
  localMessages.value = [];
  expanded.value = {};
  closeModels();
  composing.value = false;
  scrollToBottom();
});
onMounted(() => {
  arrivalMotion = matchMedia("(prefers-reduced-motion: reduce)");
  arrivalMotion.addEventListener("change", arrivalPreference);
  document.addEventListener("visibilitychange", arrivalVisibility);
  document.addEventListener("pointerdown", outsideModels);
  if (typeof ResizeObserver !== "undefined") {
    resizeObserver = new ResizeObserver(onLayout);
    if (transcript.value) resizeObserver.observe(transcript.value);
    if (scroller.value) resizeObserver.observe(scroller.value);
  }
  autoGrow();
  scrollToBottom();
});
onBeforeUnmount(() => {
  disposed = true;
  clearTimeout(scrollingTimer);
  stopArrivals();
  arrivalMotion?.removeEventListener("change", arrivalPreference);
  document.removeEventListener("visibilitychange", arrivalVisibility);
  if (scrollFrame) cancelAnimationFrame(scrollFrame);
  resizeObserver?.disconnect();
  document.removeEventListener("pointerdown", outsideModels);
  for (const url of objectUrls) URL.revokeObjectURL(url);
  objectUrls.clear();
  previewDialog.value?.close();
});
defineExpose({ focus: () => textarea.value?.focus(), scrollToBottom });
<\/script>

<template>
  <section class="chat-conversation" aria-label="Chat conversation">
    <div class="conversation-body">
      <div ref="scroller" class="conversation-scroller" :data-scrolling="scrolling || undefined" role="region" aria-label="Messages" tabindex="0" @scroll.passive="onScroll" @wheel.passive="userScroll" @touchmove.passive="userScroll" @pointerdown="scrollbarPointer" @keydown="scrollKey">
        <div ref="transcript" class="conversation-transcript">
          <p v-if="!messageViews.length && !working" class="conversation-empty">Start a conversation</p>
          <div class="conversation-message-list">
          <article v-for="view in messageViews" :key="view.message.id" class="conversation-message" :class="\`message-\${view.message.role}\`" :data-message-id="view.message.id" :aria-label="view.message.role === 'user' ? 'User message' : view.message.role === 'assistant' ? 'Assistant message' : 'System message'">
            <template v-if="view.message.role === 'system'"><p class="system-text">{{ view.message.text }}</p></template>
            <template v-else>
              <div v-if="view.message.attachments?.length" class="message-attachments">
                <template v-for="(attachment, index) in view.message.attachments" :key="attachment.id ?? index">
                  <button v-if="imageUrl(attachment)" type="button" class="image-attachment" :aria-label="\`Preview \${attachment.name}\`" @click="openPreview(imageUrl(attachment)!, attachment.name)"><img :src="imageUrl(attachment)" :alt="attachment.name" loading="lazy" @load="scheduleScroll" /></button>
                  <component :is="attachmentUrl(attachment) ? 'a' : 'span'" v-else class="message-file" :href="attachmentUrl(attachment)" :download="attachmentUrl(attachment) ? attachment.name : undefined" :title="attachment.name"><FileText aria-hidden="true" :size="17" /><span>{{ attachment.name }}</span></component>
                </template>
              </div>
              <div v-if="view.message.role === 'user' && view.message.text" class="user-bubble"><ChatText :text="view.message.text" /></div>
              <template v-else-if="view.message.role === 'assistant'">
                <Transition name="conversation-fold" @before-enter="beforeEnter" @enter="enter" @after-enter="clearHeight" @leave="leave" @after-leave="clearHeight" @enter-cancelled="freezeFold" @leave-cancelled="freezeFold">
                  <div v-if="!view.message.streaming && view.workKeys.size" class="conversation-fold process-heading">
                    <button type="button" class="process-toggle" :aria-expanded="isOpen(view.processKey, !!(view.message.streaming || view.message.interrupted))" :aria-controls="[...view.workKeys].map(key => panelId(\`\${key}-shell\`)).join(' ')" @click="toggle(view.processKey, !!(view.message.streaming || view.message.interrupted))"><span>Process</span><ChevronRight aria-hidden="true" :size="12" class="process-chevron" :class="{ 'is-open': isOpen(view.processKey, !!(view.message.streaming || view.message.interrupted)) }" /><span v-if="view.failures" class="failed-count">{{ view.failures }} failed</span><span v-if="view.message.interrupted" class="process-meta">Interrupted</span></button>
                  </div>
                </Transition>
                <Transition v-for="block in view.blocks" :key="block.key" name="conversation-fold" @before-enter="beforeEnter" @enter="enter" @after-enter="clearHeight" @leave="leave" @after-leave="clearHeight" @enter-cancelled="freezeFold" @leave-cancelled="freezeFold">
                  <div v-show="view.message.streaming || !view.workKeys.has(block.key) || isOpen(view.processKey, !!(view.message.streaming || view.message.interrupted))" :id="panelId(\`\${block.key}-shell\`)" class="conversation-fold message-block" :class="{ 'completed-response': !view.message.streaming && view.workKeys.size && block.key === view.responseKey }" :data-block-kind="block.kind" :inert="!view.message.streaming && view.workKeys.has(block.key) && !isOpen(view.processKey, !!(view.message.streaming || view.message.interrupted)) || undefined" :aria-hidden="!view.message.streaming && view.workKeys.has(block.key) && !isOpen(view.processKey, !!(view.message.streaming || view.message.interrupted)) || undefined">
                    <ChatText v-if="block.kind === 'message'" :text="block.text"  />
                    <div v-else-if="block.kind === 'thought'" class="thought-block" :class="{ 'elapsed-thought': !view.message.streaming }">
                      <p v-if="!view.message.streaming" class="thought-text">{{ block.text }}</p>
                      <template v-else>
                        <button type="button" class="detail-toggle thought-toggle" :aria-expanded="isOpen(block.key, block.key === view.tailKey)" :aria-controls="panelId(block.key)" @click="toggle(block.key, block.key === view.tailKey)">
                          <ChatGlyph v-if="block.key === view.tailKey" name="arc" :size="12" class="working-icon" /><Sparkles v-else aria-hidden="true" :size="12" /><span class="thought-title">Thinking process</span><span v-if="block.key === view.tailKey" class="thought-badge">Generating…</span><ChevronDown aria-hidden="true" :size="12" class="disclosure" :class="{ 'is-open': isOpen(block.key, block.key === view.tailKey) }" />
                        </button>
                        <Transition name="conversation-fold" @before-enter="beforeEnter" @enter="enter" @after-enter="clearHeight" @leave="leave" @after-leave="clearHeight" @enter-cancelled="freezeFold" @leave-cancelled="freezeFold"><div v-show="isOpen(block.key, block.key === view.tailKey)" :id="panelId(block.key)" class="conversation-fold" :inert="!isOpen(block.key, block.key === view.tailKey) || undefined" :aria-hidden="!isOpen(block.key, block.key === view.tailKey) || undefined"><p class="thought-text">{{ block.text }}</p></div></Transition>
                      </template>
                    </div>
                    <div v-else class="tools-block" :data-state="groupState(block, !!view.message.streaming)">
                      <button type="button" class="detail-toggle tools-toggle" :aria-expanded="isOpen(block.key)" :aria-controls="panelId(block.key)" @click="toggle(block.key)">
                        <ChatGlyph v-if="groupState(block, !!view.message.streaming) === 'running'" name="arc" :size="12" class="working-icon" /><CircleAlert v-else-if="groupState(block) === 'failed'" aria-hidden="true" :size="12" class="error-icon" /><Check v-else aria-hidden="true" :size="12" />
                        <span class="tools-count">{{ block.tools.length }} tool{{ block.tools.length === 1 ? '' : 's' }} used</span><span v-if="groupState(block, !!view.message.streaming) === 'failed'" class="failed-count">{{ block.tools.filter(tool => tool.status === 'failed').length }} failed</span><span class="tools-context" :class="{ 'running-context': groupState(block, !!view.message.streaming) === 'running' }">{{ groupContext(block, !!view.message.streaming) }}</span><ChevronDown aria-hidden="true" :size="12" class="disclosure" :class="{ 'is-open': isOpen(block.key) }" />
                      </button>
                      <Transition name="conversation-fold" @before-enter="beforeEnter" @enter="enter" @after-enter="clearHeight" @leave="leave" @after-leave="clearHeight" @enter-cancelled="freezeFold" @leave-cancelled="freezeFold"><div v-show="isOpen(block.key)" :id="panelId(block.key)" class="conversation-fold" :inert="!isOpen(block.key) || undefined" :aria-hidden="!isOpen(block.key) || undefined"><ul class="tool-list"><li v-for="tool in block.tools" :key="tool.id" :data-state="toolState(tool, !!view.message.streaming)">
                        <component :is="hasDetails(tool) ? 'button' : 'div'" :type="hasDetails(tool) ? 'button' : undefined" class="tool-row" :aria-expanded="hasDetails(tool) ? isOpen(toolKey(block, tool), tool.status === 'failed') : undefined" :aria-controls="hasDetails(tool) ? panelId(toolKey(block, tool)) : undefined" @click="hasDetails(tool) && toggle(toolKey(block, tool), tool.status === 'failed')">
                          <ChatGlyph v-if="toolState(tool, !!view.message.streaming) === 'running'" name="arc" :size="16" class="working-icon" /><CircleAlert v-else-if="tool.status === 'failed'" aria-hidden="true" :size="16" class="error-icon" /><FileSearch v-else-if="/read|读取/i.test(tool.title)" aria-hidden="true" :size="16" /><Terminal v-else aria-hidden="true" :size="16" /><span class="tool-title" :class="{ 'with-summary': tool.summary }" :title="tool.title">{{ tool.title }}</span><span v-if="tool.summary" class="tool-summary" :title="tool.summary">{{ tool.summary }}</span><span class="tool-status" :class="{ 'error-text': tool.status === 'failed', 'running-context': toolState(tool, !!view.message.streaming) === 'running' }">{{ toolStatus(tool, !!view.message.streaming) }}</span><ChevronDown v-if="hasDetails(tool)" aria-hidden="true" :size="16" class="disclosure" :class="{ 'is-open': isOpen(toolKey(block, tool), tool.status === 'failed') }" />
                        </component>
                        <Transition name="conversation-fold" @before-enter="beforeEnter" @enter="enter" @after-enter="clearHeight" @leave="leave" @after-leave="clearHeight" @enter-cancelled="freezeFold" @leave-cancelled="freezeFold"><div v-show="hasDetails(tool) && isOpen(toolKey(block, tool), tool.status === 'failed')" :id="panelId(toolKey(block, tool))" class="conversation-fold" :inert="!isOpen(toolKey(block, tool), tool.status === 'failed') || undefined" :aria-hidden="!isOpen(toolKey(block, tool), tool.status === 'failed') || undefined"><div class="tool-output"><template v-if="tool.input"><span>Input</span><pre>{{ tool.input }}</pre></template><template v-if="tool.output"><span :class="{ 'error-text': tool.status === 'failed' }">Output</span><pre :class="{ 'failed-output': tool.status === 'failed' }">{{ tool.output }}</pre></template></div></div></Transition>
                      </li></ul></div></Transition>
                    </div>
                  </div>
                </Transition>
                <div v-if="view.message.streaming" class="generation-status" :class="{ 'is-outputting': view.outputKey }" role="status"><span v-if="view.outputKey">Writing</span><ThinkingCue v-else /></div>
                <p v-else-if="view.message.interrupted" class="message-status">Stopped</p>
                <p v-if="view.message.error" class="message-error" role="alert">{{ view.message.error }}</p>
              </template>
              <div v-if="view.message.actions?.length" class="message-actions">
                <button v-for="action in view.message.actions" :key="action.id" type="button" class="message-action" :data-message-action="action.id" :disabled="disabled || action.disabled" @click="activateMessageAction(view.message, action)"><PanelRightOpen v-if="action.kind === 'preview'" :size="15" aria-hidden="true" />{{ action.label }}</button>
              </div>
            </template>
          </article>
          </div>
          <div v-if="busy && !messages.some(message => message.streaming)" class="generation-status" role="status"><ThinkingCue /></div>
        </div>
      </div>
      <button v-if="awayFromBottom" type="button" class="jump-latest" aria-label="Jump to latest message" @click="scrollToBottom"><ArrowDown aria-hidden="true" :size="15" /><span>Jump to latest</span></button>
    </div>
    <div class="conversation-bottom">
      <p v-if="error" class="composer-error" role="alert">{{ error }}</p>
      <div v-if="pendingFiles.length" class="pending-attachments">
        <div v-for="item in pendingFiles" :key="item.id" class="pending-file">
          <button v-if="item.url" type="button" class="pending-image" :aria-label="\`Preview \${item.file.name}\`" @click="openPreview(item.url!, item.file.name)"><img :src="item.url" :alt="item.file.name" /></button><span v-else class="pending-name" :title="item.file.name"><FileText aria-hidden="true" :size="17" /><span>{{ item.file.name }}</span></span>
          <button type="button" class="remove-file" :aria-label="\`Remove \${item.file.name}\`" :disabled="disabled" @click="removeFile(item.id)"><X aria-hidden="true" :size="12" /></button>
        </div>
      </div>
      <div class="conversation-composer" :class="{ 'is-disabled': disabled }">
        <div class="composer-input-slot"><textarea ref="textarea" :value="draft" rows="1" :placeholder="placeholder" aria-label="Message" :disabled="disabled" @input="updateDraft" @keydown="onKeydown" @compositionstart="composing = true" @compositionend="composing = false" @paste="pasteFiles" /></div>
        <div class="composer-toolbar">
          <button type="button" class="conversation-action attach-action" aria-label="Add attachments" title="Add attachments" :disabled="disabled" @click="fileInput?.click()"><Plus aria-hidden="true" :size="18" /></button>
          <input ref="fileInput" type="file" multiple class="conversation-file-input" :accept="accept || undefined" :disabled="disabled" aria-label="Choose files" @change="pickFiles" />
          <div v-if="models.length" ref="modelRoot" class="conversation-model" @keydown="onModelKeydown" @focusout="leaveModels">
            <button ref="modelTrigger" type="button" class="model-trigger" :disabled="disabled" aria-label="Select model" aria-haspopup="menu" :aria-expanded="menuOpen" :aria-controls="\`\${instanceId}-models\`" @click="menuOpen ? closeModels() : openModels()"><ProviderLogo v-if="selectedModel" :model="selectedModel" /><span class="model-trigger-label">{{ models.includes(selectedModel) ? selectedModel : 'Select model' }}</span><ChevronDown aria-hidden="true" :size="13" class="disclosure" :class="{ 'is-open': menuOpen }" /></button>
            <div v-if="menuOpen" :id="\`\${instanceId}-models\`" class="conversation-model-menu" role="menu" aria-label="Available models"><button v-for="option in models" :key="option" type="button" role="menuitemradio" :aria-checked="selectedModel === option" @click="selectModel(option)"><ProviderLogo :model="option" /><span class="model-option-label">{{ option }}</span><Check aria-hidden="true" v-if="selectedModel === option" :size="14" /></button></div>
          </div>
          <div class="composer-send-actions"><button type="button" class="conversation-action composer-primary" :class="working ? 'stop-action' : 'send-action'" :data-kind="working ? 'stop' : 'send'" :disabled="working ? disabled : !canSend" :aria-label="working ? 'Stop generating' : 'Send message'" :title="working ? 'Stop generating' : 'Send message'" @click="working ? (!disabled && emit('stop')) : send()"><Transition name="primary-icon" mode="out-in"><ChatGlyph :key="working ? 'stop' : 'send'" :name="working ? 'stop' : 'send'" :size="working ? 16 : 18" /></Transition></button></div>
        </div>
      </div>
    </div>
    <dialog ref="previewDialog" class="conversation-image-dialog" aria-label="Image preview" @click.self="closePreview" @close="preview = null"><template v-if="preview"><button type="button" class="close-preview" aria-label="Close image preview" @click="closePreview"><X aria-hidden="true" :size="20" /></button><img :src="preview.url" :alt="preview.name" /><p>{{ preview.name }}</p></template></dialog>
  </section>
</template>

<style scoped>
/* Palette and geometry from the source chat.css / global.css; no demo card skin. */
.chat-conversation {
  --chat-bg: #fff; --chat-base: #fafafb; --chat-fg: #18181b; --chat-muted: #52525b;
  --chat-tertiary: #a1a1aa; --chat-elevated: #f4f4f5; --chat-line: #e5e5e8;
  --chat-strong: #d4d4d8; --chat-accent: #7b61ff; --chat-accent-2: #4f46e5;
  --chat-success: #16a34a; --chat-error: color-mix(in srgb, #dc2626 75%, var(--chat-fg) 25%);
  --chat-inverse-hover: #3f3f46;
  box-sizing: border-box; display: flex; flex-direction: column; width: 100%; max-width: 760px;
  min-width: 0; height: var(--chat-height, 560px); min-height: 360px; color: var(--chat-fg);
  background: var(--chat-bg); color-scheme: light; font-family: Inter, "PingFang SC", "Microsoft YaHei", sans-serif; text-align: left;
}
:global(html.dark .chat-conversation) {
  --chat-bg: #141417; --chat-base: #0a0a0b; --chat-fg: #ededf0; --chat-muted: #a1a1aa;
  --chat-tertiary: #6e6e78; --chat-elevated: #1c1c21; --chat-line: #26262b; --chat-strong: #36363e;
  --chat-accent-2: #818cf8; --chat-success: #34d399; --chat-inverse-hover: #d4d4d8; color-scheme: dark;
}
.chat-conversation *, .chat-conversation *::before, .chat-conversation *::after { box-sizing: border-box; }
.chat-conversation button, .chat-conversation textarea { font: inherit; }
.chat-conversation button { cursor: pointer; }
.chat-conversation button:disabled { cursor: not-allowed; }
.chat-conversation button:focus-visible, .chat-conversation a:focus-visible, .conversation-scroller:focus-visible { outline: 2px solid color-mix(in srgb, var(--chat-accent) 45%, transparent); outline-offset: 3px; }
.chat-conversation svg { display: block; flex: 0 0 auto; }
.conversation-body { position: relative; display: flex; flex: 1; min-height: 0; }
.conversation-scroller { width: 100%; min-height: 0; overflow-y: auto; overflow-x: hidden; overflow-anchor: none; scrollbar-gutter: stable; scrollbar-width: thin; scrollbar-color: transparent transparent; }
.conversation-scroller:is(:hover, :focus-visible, [data-scrolling]) { scrollbar-color: color-mix(in srgb, var(--chat-muted) 30%, transparent) transparent; }
.conversation-scroller::-webkit-scrollbar { width: 4px; height: 4px; }
.conversation-scroller::-webkit-scrollbar-track, .conversation-scroller::-webkit-scrollbar-corner { background: transparent; }
.conversation-scroller::-webkit-scrollbar-thumb { border: 0; border-radius: 999px; background: transparent; }
.conversation-scroller:is(:hover, :focus-visible, [data-scrolling])::-webkit-scrollbar-thumb { background: color-mix(in srgb, var(--chat-muted) 30%, transparent); }
.conversation-scroller::-webkit-scrollbar-button { display: none; width: 0; height: 0; }
@supports selector(::-webkit-scrollbar) {
  .conversation-scroller, .conversation-scroller:is(:hover, :focus-visible, [data-scrolling]) { scrollbar-width: auto; scrollbar-color: auto; }
}
.conversation-transcript { display: flex; flex-direction: column; gap: 28px; min-width: 0; padding: 24px 20px 32px; }
.conversation-message-list { display: flex; flex-direction: column; gap: 28px; min-width: 0; }
.conversation-message { flex: 0 0 auto; min-width: 0; width: 100%; }
.message-user { align-self: flex-end; width: fit-content; max-width: 88%; }
.message-system { text-align: center; }
.system-text, .conversation-empty { margin: 0; color: var(--chat-muted); font-size: 12px; line-height: 1.65; }
.conversation-empty { padding: 48px 0; text-align: center; }
.conversation-prose { min-width: 0; color: var(--chat-fg); font-size: 15px; line-height: 24px; overflow-wrap: anywhere; }
.user-bubble { border: 1px solid transparent; border-radius: 18px 18px 7px 18px; padding: 11px 16px; background: color-mix(in srgb, var(--chat-elevated) 80%, transparent); color: var(--chat-fg); font-size: 15px; line-height: 1.75; overflow-wrap: anywhere; }
.conversation-prose :deep(p) { margin: 0 0 8px; white-space: pre-wrap; }
.conversation-prose :deep(h1), .conversation-prose :deep(h2), .conversation-prose :deep(h3), .conversation-prose :deep(h4) { margin: 1.35em 0 .5em; font-weight: 600; line-height: 1.5; letter-spacing: -.015em; }
.conversation-prose :deep(h1) { font-size: 1.3em; }.conversation-prose :deep(h2) { font-size: 1.15em; }.conversation-prose :deep(h3), .conversation-prose :deep(h4) { font-size: 1em; }
.conversation-prose :deep(strong) { color: var(--chat-fg); font-weight: 600; }
.conversation-prose :deep(ul), .conversation-prose :deep(ol) { margin: 10px 0; padding-left: 1.5em; }.conversation-prose :deep(li + li) { margin-top: 8px; }.conversation-prose :deep(li::marker) { color: var(--chat-muted); }
.conversation-prose :deep(code) { border: 1px solid color-mix(in srgb, var(--chat-line) 60%, transparent); border-radius: 6px; padding: 1px 5px; background: color-mix(in srgb, var(--chat-elevated) 75%, transparent); color: var(--chat-muted); font-family: "SFMono-Regular", Consolas, monospace; font-size: .88em; }
.conversation-prose :deep(pre) { margin: 1em 0; padding: 14px 16px; border: 1px solid var(--chat-line); border-radius: 10px; background: var(--chat-base); overflow-x: auto; font-size: 12px; line-height: 1.75; }
.conversation-prose :deep(pre code) { border: 0; border-radius: 0; padding: 0; background: transparent; color: var(--chat-muted); font-size: inherit; white-space: pre; }
.conversation-prose :deep(a) { color: var(--chat-accent-2); text-decoration-color: color-mix(in srgb, var(--chat-accent) 35%, transparent); text-underline-offset: 3px; }.conversation-prose :deep(a:hover) { text-decoration-color: currentColor; }
.conversation-prose :deep(blockquote) { margin: 1em 0; padding-left: 14px; border-left: 2px solid var(--chat-strong); color: var(--chat-muted); }
.conversation-prose :deep(:first-child) { margin-top: 0; }.conversation-prose :deep(:last-child) { margin-bottom: 0; }
.process-toggle { display: inline-flex; align-items: center; gap: 5px; min-height: 24px; max-width: 100%; margin: 0; padding: 0; border: 0; border-radius: 4px; background: none; color: var(--chat-muted); font-size: 13px !important; line-height: 1; letter-spacing: .01em; }
.process-toggle:hover { color: var(--chat-fg); }.process-chevron { color: var(--chat-muted); }.process-chevron :deep(path) { transform-origin: 12px 12px; transition: transform 160ms; }.process-chevron.is-open :deep(path) { transform: rotate(90deg); }
.completed-response { margin-top: 4px; padding-top: 8px; border-top: 1px solid var(--chat-line); }
.message-block[aria-hidden="false"] { min-width: 0; }
.message-block[data-block-kind="message"]:not(.completed-response) { padding-top: 6px; }
.failed-count, .error-text, .error-icon { color: var(--chat-error); }.process-meta { color: var(--chat-muted); }
.detail-toggle { display: flex; align-items: center; gap: 6px; width: 100%; min-width: 0; height: 22px; min-height: 22px; max-height: 22px; padding: 0 4px; border: 0; border-radius: 4px; background: transparent; color: var(--chat-muted); font-size: 13px !important; line-height: 22px; font-weight: 400 !important; text-align: left; transition: background-color 160ms, color 160ms; }
.detail-toggle > svg:first-child { flex: none; width: 12px; height: 12px; }
.detail-toggle:hover, button.tool-row:hover { background: color-mix(in srgb, var(--chat-elevated) 60%, transparent); color: var(--chat-fg); }
.disclosure { color: var(--chat-tertiary); }.disclosure :deep(path) { transform-origin: 12px 12px; transition: transform 160ms; }.disclosure.is-open :deep(path) { transform: rotate(180deg); }
.conversation-fold { min-width: 0; overflow: hidden; }.conversation-fold-enter-active, .conversation-fold-leave-active { transition: height .28s cubic-bezier(.22,1,.36,1); }
.thought-block, .tools-block { margin: 0 0 2px; }.thought-title { min-width: 0; font-weight: 400; }.thought-badge { flex-shrink: 0; margin-left: auto; padding-left: 8px; color: var(--chat-accent-2); font-size: 11px; font-weight: 400; white-space: nowrap; }
.thought-toggle > svg:last-child { width: 12px; height: 12px; }.thought-text { margin: 2px 0 8px 13px; border-left: 1px solid color-mix(in srgb, var(--chat-line) 80%, transparent); padding: 2px 6px 6px 15px; color: var(--chat-muted); font-size: 13px; line-height: 1.6; white-space: pre-wrap; overflow-wrap: anywhere; }
.elapsed-thought { margin-top: 14px; }.elapsed-thought .thought-text { margin: 0 0 8px; border: 0; padding: 0; color: var(--chat-tertiary); }
.tools-count { flex-shrink: 0; font-weight: 400; }.tools-context { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }.running-context { color: var(--chat-accent-2); }
.tool-list { min-width: 0; margin: 3px 0 0 13px; border-left: 1px solid color-mix(in srgb, var(--chat-line) 80%, transparent); padding: 0 0 2px 15px; list-style: none; }
.tool-row { display: flex; align-items: center; gap: 8px; width: 100%; min-width: 0; min-height: 30px; padding: 4px; border: 0; border-radius: 6px; color: var(--chat-muted); background: transparent; font-size: 12px !important; line-height: 1.65; text-align: left; transition: background-color 160ms, color 160ms; }
.tool-title { min-width: 0; flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }.tool-title.with-summary { flex: 0 1 auto; max-width: 44%; }.tool-summary { min-width: 0; flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: "SFMono-Regular", Consolas, monospace; font-size: 11px; }.tool-status { flex-shrink: 0; font-size: 11px; }
.tool-output { display: flex; flex-direction: column; gap: 3px; min-width: 0; margin: 2px 0 10px 28px; font-size: 11px; font-weight: 500; color: var(--chat-muted); }
.tool-output pre { max-height: 240px; margin: 0 0 9px; overflow: auto; padding-block: 2px; white-space: pre-wrap; overflow-wrap: anywhere; color: var(--chat-muted); font-family: "SFMono-Regular", Consolas, monospace; font-size: 12px; font-weight: 400; line-height: 1.75; }.tool-output pre.failed-output { border-left: 2px solid color-mix(in srgb, #dc2626 45%, transparent); padding-left: 12px; }
.working-icon { color: var(--chat-accent-2); }.working-icon :deep(.glyph-motion) { transform-origin: 12px 12px; animation: chat-arc-spin 1.15s linear infinite; }@keyframes chat-arc-spin { to { transform: rotate(360deg); } }
.generation-status { display: inline-flex; align-items: center; gap: 8px; margin-top: 4px; color: color-mix(in srgb, var(--chat-muted) 82%, transparent); font-size: 13px; line-height: 22px; }.generation-status.is-outputting { color: color-mix(in srgb, var(--chat-muted) 75%, transparent); }
.generation-status:not(.is-outputting) { min-height: 22px; padding-inline: 4px; }
.generation-status :deep(.thinking-busy) { display: inline-flex; align-items: center; gap: 6px; min-width: 0; font-size: 13px; font-weight: 400; line-height: 22px; }
.generation-status :deep(.thinking-lamp) { position: relative; flex: none; width: 12px; height: 12px; color: var(--chat-accent-2); overflow: visible; }
.generation-status :deep(.thinking-lamp-core), .generation-status :deep(.thinking-lamp-halo) { position: absolute; left: 50%; top: 50%; width: 4px; height: 4px; margin: -2px 0 0 -2px; border-radius: 50%; box-sizing: border-box; }
.generation-status :deep(.thinking-lamp-core) { background: currentColor; animation: chat-lamp-core .8s ease-in-out infinite; }.generation-status :deep(.thinking-lamp-halo) { border: 1px solid currentColor; animation: chat-lamp-halo .8s ease-out infinite; }
.generation-status :deep(.thinking-sheen) { min-width: 0; color: color-mix(in srgb, var(--chat-muted) 82%, transparent); -webkit-text-fill-color: color-mix(in srgb, var(--chat-muted) 82%, transparent); }
@supports ((-webkit-background-clip: text) or (background-clip: text)) { .generation-status :deep(.thinking-sheen) { background-image: linear-gradient(100deg, color-mix(in srgb, var(--chat-muted) 82%, transparent) 0%, color-mix(in srgb, var(--chat-muted) 82%, transparent) 42%, light-dark(rgb(244 244 245 / .98), color-mix(in srgb, var(--chat-muted) 40%, white)) 50%, color-mix(in srgb, var(--chat-muted) 82%, transparent) 58%, color-mix(in srgb, var(--chat-muted) 82%, transparent) 100%); background-size: 220% 100%; background-position: 120% 50%; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; animation: chat-thinking-sheen 1s linear infinite; } }
@keyframes chat-lamp-core { 0%,100% { transform: scale(1); opacity: .6; box-shadow: 0 0 0 0 transparent; } 45% { transform: scale(1.15); opacity: 1; box-shadow: 0 0 2px 0 color-mix(in srgb, var(--chat-accent-2) 35%, transparent); } }@keyframes chat-lamp-halo { 0% { transform: scale(1); opacity: .55; } 100% { transform: scale(2.2); opacity: 0; } }@keyframes chat-thinking-sheen { 0% { background-position: 120% 50%; } 100% { background-position: -20% 50%; } }
.message-status { margin: 8px 0 0; color: var(--chat-muted); font-size: 12px; }.message-error, .composer-error { margin: 8px 0 0; color: var(--chat-error); font-size: 12px; line-height: 1.7; white-space: pre-wrap; overflow-wrap: anywhere; }
.message-actions { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
.message-action { display: inline-flex; align-items: center; justify-content: center; gap: 7px; min-height: 36px; padding: 6px 8px; border: 0; border-radius: 6px; background: transparent; color: var(--chat-fg); font-size: 13px !important; font-weight: 500 !important; cursor: pointer; transition: background-color 160ms, color 160ms; }
.message-action:hover:not(:disabled) { background: color-mix(in srgb, var(--chat-accent) 7%, transparent); color: var(--chat-accent-2); }
.message-action:disabled { opacity: .4; }
.jump-latest { position: absolute; bottom: 12px; left: 50%; display: flex; align-items: center; gap: 6px; min-height: 32px; padding: 5px 11px; border: 1px solid var(--chat-line); border-radius: 18px; background: var(--chat-bg); color: var(--chat-fg); box-shadow: 0 3px 12px #00000008; font-size: 12px !important; translate: -50% 0; }
.conversation-bottom { display: flex; flex: 0 0 auto; flex-direction: column; min-width: 0; min-height: 0; max-height: calc(100% - 100px); padding: 12px 20px; }.composer-error { min-height: 0; max-height: 96px; margin: 0 2px 8px; overflow-y: auto; }
.conversation-composer { display: flex; flex: 0 0 auto; flex-direction: column; min-width: 0; border: 1px solid color-mix(in srgb, var(--chat-strong) 70%, transparent); border-radius: 20px; background: var(--chat-bg); box-shadow: 0 2px 10px color-mix(in srgb, var(--chat-fg) 2.5%, transparent); transition: border-color 160ms, box-shadow 160ms; }
.conversation-composer:focus-within { border-color: color-mix(in srgb, var(--chat-accent) 45%, transparent); box-shadow: 0 0 0 3px color-mix(in srgb, var(--chat-accent) 6%, transparent); }
.composer-input-slot { min-width: 0; padding: 16px 16px 0; }
.conversation-composer textarea { display: block; width: 100%; min-width: 0; min-height: 40px; max-height: min(128px, calc(var(--chat-height, 560px) * .28)); margin: 0; padding: 0; border: 0; border-radius: 0; outline: none; resize: none; overflow-y: auto; background: transparent; color: var(--chat-fg); font-size: 14px; line-height: 1.75; caret-color: var(--chat-accent); }.conversation-composer textarea::placeholder { color: color-mix(in srgb, var(--chat-muted) 80%, transparent); }.conversation-composer textarea:disabled { opacity: .5; }
.composer-toolbar { display: flex; flex: 0 0 auto; align-items: center; gap: 6px; min-width: 0; height: 44px; padding: 4px 8px 8px; color: var(--chat-muted); font-size: 12px; }
.conversation-action { display: inline-flex; flex: none; align-items: center; justify-content: center; width: 36px; min-width: 36px; height: 36px; min-height: 36px; gap: 6px; padding: 0; border: 1px solid transparent; border-radius: 50%; background: transparent; color: var(--chat-muted); line-height: 1; transition: color 160ms, background 160ms, border-color 160ms; }
.conversation-action:hover:enabled { background: var(--chat-elevated); color: var(--chat-fg); }.conversation-action:disabled { opacity: .4; }
.composer-primary { overflow: hidden; white-space: nowrap; transition: background-color .2s, border-color .2s, color .2s, border-radius .24s; }
.send-action, .stop-action { border-color: transparent; background: var(--chat-fg); color: var(--chat-bg); }.send-action:hover:enabled, .stop-action:hover:enabled { border-color: transparent; background: var(--chat-inverse-hover); color: var(--chat-bg); }
.send-action:disabled { border-color: color-mix(in srgb, var(--chat-line) 65%, transparent); background: color-mix(in srgb, var(--chat-elevated) 80%, transparent); color: color-mix(in srgb, var(--chat-muted) 65%, transparent); opacity: 1; }
.composer-send-actions { display: flex; flex: 0 0 auto; align-items: center; gap: 6px; margin-left: auto; }.conversation-file-input { display: none; }
.primary-icon-enter-active, .primary-icon-leave-active { transition: opacity .12s, transform .12s; }.primary-icon-enter-from { opacity: 0; transform: rotate(-90deg) scale(.6); }.primary-icon-leave-to { opacity: 0; transform: rotate(90deg) scale(.6); }
.send-action:hover:enabled :deep(.glyph-motion), .send-action:focus-visible:enabled :deep(.glyph-motion) { animation: chat-send-up 1050ms cubic-bezier(.25,.6,.3,1); }.stop-action:hover:enabled :deep(.glyph-motion), .stop-action:focus-visible:enabled :deep(.glyph-motion) { transform-origin: 12px 12px; animation: chat-stop-press 900ms ease-in-out; }
@keyframes chat-send-up { 0%,100% { transform: translateY(0); opacity: 1; } 38% { transform: translateY(-2px); opacity: .2; } 39% { transform: translateY(2px); opacity: 0; } 70% { transform: translateY(0); opacity: 1; } }@keyframes chat-stop-press { 0%,100% { transform: scale(1); } 25% { transform: scale(.8); } 60% { transform: scale(1.03); } }
.conversation-model { position: relative; min-width: 0; max-width: 15rem; }
.model-trigger { display: flex; width: 100%; height: 32px; align-items: center; gap: 6px; padding: 0 8px; border: 1px solid var(--chat-line); border-radius: 8px; background: transparent; color: var(--chat-fg); font-size: 12px !important; font-weight: 500 !important; text-align: left; transition: border-color .18s ease, background-color .18s ease; }
.model-trigger-label { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.model-trigger:hover:enabled, .model-trigger[aria-expanded="true"] { border-color: color-mix(in srgb, var(--chat-accent) 30%, transparent); background: color-mix(in srgb, var(--chat-accent) 4.5%, transparent); }.model-trigger:focus-visible { outline-color: color-mix(in srgb, var(--chat-accent) 65%, transparent); }.model-trigger:disabled { cursor: default; opacity: .6; }
.conversation-model-menu { position: absolute; z-index: 70; bottom: calc(100% + 8px); left: 0; min-width: 200px; max-width: min(280px, calc(100vw - 64px)); max-height: min(240px, 40vh); overflow-y: auto; overscroll-behavior: contain; padding: 8px; border: 1px solid color-mix(in srgb, var(--chat-line) 90%, transparent); border-radius: 14px; background: var(--chat-bg); box-shadow: 0 16px 44px rgb(48 36 85 / .09), 0 3px 10px rgb(48 36 85 / .035); }
:global(html.dark .conversation-model-menu) { background: var(--chat-elevated); box-shadow: 0 16px 44px rgb(0 0 0 / .22), 0 3px 10px rgb(0 0 0 / .08); }
.conversation-model-menu > button { display: flex; width: 100%; min-height: 38px; align-items: center; justify-content: space-between; gap: 9px; padding: 6px 9px; border: 1px solid transparent; border-radius: 9px; background: transparent; color: var(--chat-fg); font-size: 13px; text-align: left; transition: background .14s ease; }.conversation-model-menu > button > .model-option-label { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.conversation-model-menu > button:hover, .conversation-model-menu > button:focus-visible { background: color-mix(in srgb, var(--chat-accent) 7%, transparent); }.conversation-model-menu > button[aria-checked="true"] { border-color: color-mix(in srgb, var(--chat-accent) 8%, transparent); background: color-mix(in srgb, var(--chat-accent) 9%, transparent); }

.message-attachments { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 6px; }.message-user .message-attachments { justify-content: flex-end; }.image-attachment { display: block; width: 100px; height: 76px; padding: 0; border: 1px solid var(--chat-line); border-radius: 6px; overflow: hidden; background: var(--chat-elevated); }.image-attachment img { width: 100%; height: 100%; object-fit: cover; }.message-file { display: flex; align-items: center; gap: 8px; max-width: 200px; min-height: 40px; padding: 6px 8px; border: 1px solid var(--chat-line); border-radius: 10px; background: color-mix(in srgb, var(--chat-elevated) 50%, transparent); color: var(--chat-muted); font-size: 12px; text-decoration: none; }.message-file > span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pending-attachments { display: flex; flex-wrap: wrap; gap: 10px; min-height: 0; max-height: min(120px, 20vh); overflow-y: auto; overscroll-behavior: contain; padding: 7px 5px 12px; scrollbar-width: thin; }.pending-file { position: relative; max-width: 160px; }.pending-image { display: block; width: 60px; height: 54px; padding: 0; border: 1px solid var(--chat-line); border-radius: 6px; overflow: hidden; background: var(--chat-elevated); }.pending-image img { width: 100%; height: 100%; object-fit: cover; }.pending-name { display: flex; align-items: center; gap: 6px; height: 56px; padding: 8px; border: 1px solid var(--chat-line); border-radius: 8px; background: var(--chat-elevated); color: var(--chat-muted); font-size: 12px; }.pending-name > span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }.remove-file { position: absolute; right: -6px; top: -6px; display: grid; place-items: center; width: 16px; height: 16px; padding: 0; border: 1px solid var(--chat-line); border-radius: 50%; background: var(--chat-bg); color: var(--chat-muted); }
.conversation-image-dialog { position: fixed; max-width: min(90vw, 960px); max-height: 90vh; padding: 28px 18px 12px; border: 1px solid var(--chat-line); border-radius: 14px; background: var(--chat-bg); color: var(--chat-fg); }.conversation-image-dialog::backdrop { background: #0009; }.conversation-image-dialog > img { display: block; max-width: 100%; max-height: calc(90vh - 110px); object-fit: contain; }.conversation-image-dialog > p { margin: 10px 0 0; font-size: 12px; overflow-wrap: anywhere; }.close-preview { position: absolute; top: 5px; right: 5px; display: grid; place-items: center; width: 28px; height: 28px; padding: 0; border: 0; border-radius: 6px; color: var(--chat-muted); background: var(--chat-bg); }
@media (max-width: 767px), (pointer: coarse) { .conversation-action { min-width: 44px; min-height: 44px; width: 44px; height: 44px; }.composer-toolbar { height: auto; min-height: 52px; padding-block: 4px; }button.tool-row { min-height: 44px; gap: 6px; } }
@media (pointer: coarse) { .detail-toggle, .process-toggle { height: 44px; min-height: 44px; max-height: 44px; line-height: 44px; } }
@media (max-width: 600px) { .conversation-transcript { padding-inline: 16px; }.conversation-bottom { padding-inline: 12px; }.conversation-model-menu { left: -35px; }.process-toggle { flex-wrap: wrap; } }
@media (prefers-reduced-motion: reduce) { .chat-conversation *, .chat-conversation :deep(*) { animation: none !important; transition: none !important; }.generation-status :deep(.thinking-lamp-halo) { opacity: 0; }.generation-status :deep(.thinking-lamp-core) { opacity: 1; transform: none; box-shadow: none; }.generation-status :deep(.thinking-sheen) { background: none; -webkit-text-fill-color: color-mix(in srgb, var(--chat-muted) 82%, transparent); } }

:global(html.dark .model-provider-mark) {
  --provider-logo-border: #26262b;
  --provider-logo-surface: #141417;
  --provider-logo-muted: #a1a1aa;
}
:global(html.dark .model-provider-mark.is-color) { --provider-logo-surface: #fff; }
:global(html.dark .model-provider-image.is-monochrome) { filter: invert(1); }
</style>
`,Td=`<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useId, watch } from "vue";
import { ArrowLeft, Check, ChevronRight, MessageSquare } from "lucide-vue-next";

interface ClarificationOption { id: string; label: string; disabled?: boolean; recommended?: boolean }
interface ClarificationQuestion { id: string; prompt: string; options: ClarificationOption[]; allowMultiple?: boolean }
interface ClarificationAnswer { questionId: string; prompt: string; optionId: string; label: string }
type Answers = Record<string, string | string[]>;
const props = withDefaults(defineProps<{
  questions?: ClarificationQuestion[];
  initialAnswers?: Answers;
  initiallyExpanded?: boolean;
  initiallySubmitted?: boolean;
  submitLabel?: string;
  disabled?: boolean;
  readOnly?: boolean;
}>(), {
  questions: () => [
    { id: "priority", prompt: "What should we build first?", options: [{ id: "layout", label: "Build the page layout" }, { id: "interaction", label: "Refine the interactions" }] },
    { id: "style", prompt: "Which direction do you prefer?", options: [{ id: "quiet", label: "Quiet and spacious" }, { id: "expressive", label: "Bold and expressive" }] },
  ],
  initialAnswers: () => ({}), initiallyExpanded: true, initiallySubmitted: false,
  submitLabel: "Confirm choices", disabled: false, readOnly: false,
});
const emit = defineEmits<{
  "update:answers": [answers: Answers];
  "update:expanded": [expanded: boolean];
  submit: [answers: ClarificationAnswer[]];
  reset: [];
}>();
const instanceId = \`clarification-\${useId().replace(/:/g, "")}\`;
function idsOf(value: string | string[] | undefined) { return Array.isArray(value) ? value : value ? [value] : []; }
function sanitizeAnswers(value: Answers, historical = false): Answers {
  return Object.fromEntries(props.questions.flatMap(question => {
    const requested = new Set(idsOf(value[question.id]));
    const valid = question.options.filter(option => requested.has(option.id) && (historical || !option.disabled)).map(option => option.id);
    return valid.length ? [[question.id, question.allowMultiple ? valid : valid[0]!]] : [];
  }));
}
function copyAnswers(value = answers.value): Answers { return Object.fromEntries(Object.entries(value).map(([id, answer]) => [id, Array.isArray(answer) ? [...answer] : answer])); }
const answers = ref<Answers>(sanitizeAnswers(props.initialAnswers, props.initiallySubmitted || props.readOnly));
const open = ref(props.initiallyExpanded);
const submitted = ref(props.initiallySubmitted);
const step = ref(0);
const historical = computed(() => props.readOnly || submitted.value);
const currentQuestion = computed(() => props.questions[step.value]);
const content = ref<HTMLDivElement | null>(null);
const receipt = ref<HTMLDivElement | null>(null);
const bodyHeight = ref("auto");
let resizeObserver: ResizeObserver | undefined;
let disposed = false;
const summary = computed<ClarificationAnswer[]>(() => props.questions.flatMap(question => question.options
  .filter(option => idsOf(answers.value[question.id]).includes(option.id))
  .map(option => ({ questionId: question.id, prompt: question.prompt, optionId: option.id, label: option.label }))));
const summaryGroups = computed(() => props.questions.flatMap(question => {
  const selected = summary.value.filter(answer => answer.questionId === question.id);
  return selected.length ? [{ question, selected }] : [];
}));
// The source permits submitting answered questions; skipped questions are omitted.
const canSubmit = computed(() => !props.disabled && !historical.value && props.questions.some(question => question.options.some(option => !option.disabled && selected(question, option.id))));
const hasRecommended = computed(() => props.questions.some(question => question.options.some(option => option.recommended && !option.disabled)));
const questionSchema = computed(() => JSON.stringify(props.questions));
function selected(question: ClarificationQuestion, optionId: string) { return idsOf(answers.value[question.id]).includes(optionId); }
async function measure() {
  await nextTick();
  if (!disposed && content.value) bodyHeight.value = open.value ? \`\${content.value.getBoundingClientRect().height}px\` : "0px";
}
function select(question: ClarificationQuestion, optionId: string, replace = false) {
  if (props.disabled || historical.value || !question.options.some(option => option.id === optionId && !option.disabled)) return;
  const current = idsOf(answers.value[question.id]);
  const chosen = replace ? [optionId] : question.allowMultiple
    ? current.includes(optionId) ? current.filter(id => id !== optionId) : [...current, optionId]
    : current.includes(optionId) ? [] : [optionId];
  const next = copyAnswers();
  if (chosen.length) next[question.id] = question.allowMultiple ? chosen : chosen[0]!;
  else delete next[question.id];
  answers.value = next;
  emit("update:answers", copyAnswers());
}
function optionId(question: ClarificationQuestion, option: ClarificationOption) { return \`\${instanceId}-\${encodeURIComponent(question.id)}-\${encodeURIComponent(option.id)}\`; }
function optionKey(event: KeyboardEvent, question: ClarificationQuestion, option: ClarificationOption) {
  if (props.disabled || historical.value || event.altKey || event.ctrlKey || event.metaKey) return;
  const enabled = question.options.filter(option => !option.disabled);
  const index = enabled.findIndex(item => item.id === option.id);
  let next: number;
  if (event.key === "Home") next = 0;
  else if (event.key === "End") next = enabled.length - 1;
  else if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % enabled.length;
  else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + enabled.length) % enabled.length;
  else return;
  event.preventDefault();
  const target = enabled[next];
  if (!target) return;
  if (!question.allowMultiple) select(question, target.id, true);
  document.getElementById(optionId(question, target))?.focus({ preventScroll: true });
}
function navigate(delta: number) {
  if (props.disabled || historical.value) return;
  step.value = Math.max(0, Math.min(props.questions.length - 1, step.value + delta));
}
function toggle() { open.value = !open.value; emit("update:expanded", open.value); }
function submit() {
  if (!canSubmit.value) return;
  submitted.value = true;
  open.value = true;
  emit("submit", summary.value.map(answer => ({ ...answer })));
  void nextTick(() => receipt.value?.focus({ preventScroll: true }));
}
function submitRecommended() {
  if (props.disabled || historical.value) return;
  const next: Answers = {};
  for (const question of props.questions) {
    const enabled = question.options.filter(option => !option.disabled);
    const option = enabled.find(option => option.recommended) ?? enabled[0];
    if (option) next[question.id] = question.allowMultiple ? [option.id] : option.id;
  }
  answers.value = next;
  emit("update:answers", copyAnswers());
  submit();
}
function reset() {
  if (props.disabled || props.readOnly) return;
  answers.value = {};
  submitted.value = false;
  step.value = 0;
  open.value = true;
  emit("update:answers", {});
  emit("reset");
  void nextTick(() => content.value?.querySelector<HTMLButtonElement>('[role="radio"]:not(:disabled), [role="checkbox"]:not(:disabled)')?.focus({ preventScroll: true }));
}
watch(() => props.initialAnswers, value => { answers.value = sanitizeAnswers(value, submitted.value || props.readOnly); }, { deep: true });
watch(questionSchema, () => {
  const next = sanitizeAnswers(answers.value, props.initiallySubmitted || props.readOnly);
  const changed = JSON.stringify(next) !== JSON.stringify(answers.value);
  answers.value = next;
  if (!props.initiallySubmitted) submitted.value = false;
  step.value = Math.min(step.value, Math.max(0, props.questions.length - 1));
  if (changed) emit("update:answers", copyAnswers());
});
watch(() => props.initiallyExpanded, value => { open.value = value; });
watch(() => props.initiallySubmitted, value => { submitted.value = value; });
watch([open, submitted, step, () => props.readOnly, () => props.questions], measure, { flush: "post" });
onMounted(() => {
  if (typeof ResizeObserver !== "undefined") {
    resizeObserver = new ResizeObserver(() => { void measure(); });
    if (content.value) resizeObserver.observe(content.value);
  }
  void measure();
});
onBeforeUnmount(() => { disposed = true; resizeObserver?.disconnect(); });
defineExpose({ reset, toggle, submit });
<\/script>

<template>
  <section class="clarification-card" :class="{ 'is-submitted': submitted }" aria-label="Questions and choices">
    <div :id="\`\${instanceId}-body\`" class="clarification-body" :style="{ height: bodyHeight }" :aria-hidden="!open || undefined" :inert="!open || undefined">
      <div ref="content" class="clarification-content">
        <div v-if="historical" class="clarification-history clarify-request">
          <div class="history-heading"><MessageSquare aria-hidden="true" :size="16" /><span>Questions · {{ questions.length }} questions</span><span class="readonly-label">Read only</span></div>
          <div v-for="(question, index) in questions" :key="question.id" class="history-question">
            <p class="history-prompt"><span>{{ index + 1 }}.</span> {{ question.prompt }}</p>
            <div v-for="option in question.options" :key="option.id" class="history-option" :class="{ selected: selected(question, option.id) }" :data-selected="selected(question, option.id)"><Check v-if="selected(question, option.id)" aria-hidden="true" :size="12" /><span v-else class="history-check-space" aria-hidden="true" /><span>{{ option.label }}</span></div>
          </div>
        </div>
        <form v-else-if="currentQuestion" class="clarification-form clarify-request" @submit.prevent="submit">
          <div v-if="questions.length > 1" class="question-progress"><div class="progress-dots" aria-hidden="true"><span v-for="(question, index) in questions" :key="question.id" :class="{ current: step === index, answered: idsOf(answers[question.id]).length }" /></div><span>{{ step + 1 }} / {{ questions.length }}</span></div>
          <div class="question-heading"><MessageSquare aria-hidden="true" :size="16" /><span :id="\`\${instanceId}-prompt\`" class="question-prompt">{{ currentQuestion.prompt }}</span><span class="question-kind">{{ currentQuestion.allowMultiple ? 'Select multiple' : 'Select one' }}</span></div>
          <div class="clarification-options" :role="currentQuestion.allowMultiple ? 'group' : 'radiogroup'" :aria-labelledby="\`\${instanceId}-prompt\`">
            <button v-for="option in currentQuestion.options" :id="optionId(currentQuestion, option)" :key="option.id" type="button" class="clarification-option" :class="{ selected: selected(currentQuestion, option.id) }" :role="currentQuestion.allowMultiple ? 'checkbox' : 'radio'" :aria-checked="selected(currentQuestion, option.id)" :aria-pressed="selected(currentQuestion, option.id)" :disabled="disabled || option.disabled" @click="select(currentQuestion, option.id)" @keydown="optionKey($event, currentQuestion, option)"><span class="option-indicator" :class="{ multiple: currentQuestion.allowMultiple }"><Check v-if="selected(currentQuestion, option.id)" aria-hidden="true" :size="10" /></span><span class="option-label">{{ option.label }}</span><span v-if="option.recommended" class="recommendation-label">Recommended</span></button>
          </div>
          <footer class="clarification-footer"><button v-if="step > 0" type="button" class="previous-button" :disabled="disabled" @click="navigate(-1)"><ArrowLeft aria-hidden="true" :size="13" />Previous</button><span v-else /><button v-if="step < questions.length - 1" type="button" class="secondary-button" :disabled="disabled" @click="navigate(1)">Next<ChevronRight aria-hidden="true" :size="13" /></button><div v-else class="submit-actions"><button v-if="hasRecommended" type="button" class="secondary-button" :disabled="disabled" @click="submitRecommended"><Check aria-hidden="true" :size="14" />Use recommended</button><button type="submit" class="confirm-button" :disabled="!canSubmit"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 18V6m-6 6 6-6 6 6" /></svg>{{ submitLabel }}</button></div></footer>
        </form>
        <div v-if="submitted" ref="receipt" class="clarification-summary" tabindex="-1" aria-label="Your choices" aria-live="polite"><div class="summary-heading"><Check aria-hidden="true" :size="16" />Your choices</div><div v-for="group in summaryGroups" :key="group.question.id" class="summary-answer"><p class="summary-prompt">{{ group.question.prompt }}</p><div class="summary-labels"><span v-for="answer in group.selected" :key="answer.optionId">{{ answer.label }}</span></div></div></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ClarifyChat's live question deck and ClarifyMessageThread's history/choice echo. */
.clarification-card { --clarify-fg: #18181b; --clarify-muted: #52525b; --clarify-tertiary: #a1a1aa; --clarify-surface: #fff; --clarify-elevated: #f4f4f5; --clarify-line: #e5e5e8; --clarify-strong: #d4d4d8; --clarify-accent: #7b61ff; box-sizing: border-box; width: 360px; max-width: 100%; min-width: 0; color: var(--clarify-fg); background: transparent; font-family: Inter, "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 12px; text-align: left; }
:global(html.dark .clarification-card) { --clarify-fg: #ededf0; --clarify-muted: #a1a1aa; --clarify-tertiary: #6e6e78; --clarify-surface: #141417; --clarify-elevated: #1c1c21; --clarify-line: #26262b; --clarify-strong: #36363e; }
.clarification-card *, .clarification-card *::before, .clarification-card *::after { box-sizing: border-box; }.clarification-card button { font: inherit; cursor: pointer; }.clarification-card button:disabled { cursor: not-allowed; }.clarification-card button:focus-visible { outline: 2px solid color-mix(in srgb, var(--clarify-accent) 65%, transparent); outline-offset: -2px; }.clarification-card svg { flex: 0 0 auto; }
.clarification-body { overflow: hidden; transition: height .28s cubic-bezier(.22,1,.36,1); }.clarification-content { display: flow-root; min-width: 0; }
.clarify-request { max-width: 100%; border-left: 1px solid color-mix(in srgb, var(--clarify-strong) 80%, transparent); padding: 2px 0 2px 14px; }.clarification-history { border-color: var(--clarify-line); }
.history-heading { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; color: var(--clarify-muted); font-size: 12px; font-weight: 500; }.readonly-label { margin-left: auto; font-size: 11px; font-weight: 400; }.history-question { margin-bottom: 12px; }.history-question:last-child { margin-bottom: 0; }.history-prompt { margin: 0 0 6px; color: var(--clarify-muted); font-size: 12px; line-height: 1.375; overflow-wrap: anywhere; }.history-prompt > span { color: var(--clarify-tertiary); }
.history-option { display: flex; align-items: flex-start; gap: 6px; padding-block: 2px; color: var(--clarify-muted); font-size: 12px; line-height: 1.65; }.history-option > svg, .history-check-space { flex: 0 0 auto; width: 12px; height: 12px; margin-top: 2px; }.history-option > span:last-child { min-width: 0; overflow-wrap: anywhere; }.history-option.selected { color: var(--clarify-accent); }
.clarification-form { margin: 0; }.question-progress { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; color: var(--clarify-muted); font-size: 11px; }.progress-dots { display: flex; align-items: center; gap: 4px; }.progress-dots > span { width: 6px; height: 6px; border-radius: 999px; background: var(--clarify-strong); transition: width 160ms, background 160ms; }.progress-dots > span.answered { background: color-mix(in srgb, var(--clarify-accent) 40%, transparent); }.progress-dots > span.current { width: 16px; background: var(--clarify-accent); }
.question-heading { display: grid; grid-template-columns: 16px minmax(0,1fr); align-items: start; column-gap: 8px; row-gap: 6px; margin-bottom: 12px; color: var(--clarify-fg); font-size: 13px; font-weight: 500; }.question-heading > svg { margin-top: 3px; color: var(--clarify-muted); }.question-prompt { min-width: 0; line-height: 1.625; overflow-wrap: anywhere; }.question-kind { grid-column: 2; color: var(--clarify-muted); font-size: 11px; font-weight: 400; line-height: 20px; }
.clarification-options { display: grid; gap: 6px; }.clarification-option { display: flex; align-items: center; gap: 8px; width: 100%; min-width: 0; min-height: 40px; padding: 8px 10px; border: 1px solid var(--clarify-line); border-radius: 8px; color: var(--clarify-muted); background: var(--clarify-surface); font-size: 12px; line-height: 1.5; text-align: left; transition: border-color 160ms, background 160ms, color 160ms; }.clarification-option:hover:not(:disabled) { border-color: var(--clarify-strong); background: color-mix(in srgb, var(--clarify-elevated) 55%, var(--clarify-surface)); color: var(--clarify-fg); }.clarification-option.selected { border-color: color-mix(in srgb, var(--clarify-accent) 45%, transparent); background: color-mix(in srgb, var(--clarify-accent) 4.5%, transparent); color: var(--clarify-fg); }.clarification-option.selected:hover:not(:disabled) { border-color: color-mix(in srgb, var(--clarify-accent) 65%, transparent); background: color-mix(in srgb, var(--clarify-accent) 7%, transparent); }.clarification-option:disabled { opacity: .4; }.option-indicator { display: flex; align-items: center; justify-content: center; flex: 0 0 16px; width: 16px; height: 16px; border: 1px solid var(--clarify-strong); border-radius: 50%; }.option-indicator.multiple { border-radius: 4px; }.selected .option-indicator { border-color: var(--clarify-accent); color: #fff; background: var(--clarify-accent); }.option-label { min-width: 0; flex: 1; overflow-wrap: anywhere; }.recommendation-label { flex: 0 0 auto; margin-left: auto; padding: 2px 6px; border-radius: 999px; background: color-mix(in srgb, var(--clarify-elevated) 80%, transparent); color: var(--clarify-muted); font-size: 10px; font-weight: 500; }
.clarification-footer { display: flex; align-items: center; justify-content: space-between; margin-top: 12px; }.submit-actions { display: flex; flex-wrap: wrap; gap: 8px; }.previous-button { display: inline-flex; align-items: center; gap: 2px; min-height: 36px; padding: 4px 8px; border: 0; border-radius: 6px; background: transparent; color: var(--clarify-muted); font-size: 12px; }.previous-button:hover { color: var(--clarify-fg); }.secondary-button, .confirm-button { display: inline-flex; align-items: center; justify-content: center; gap: 6px; min-height: 36px; max-width: 100%; padding: 0 10px; border: 1px solid transparent; border-radius: 10px; font-size: 12px; font-weight: 600; line-height: 1; white-space: nowrap; transition: color 160ms, background 160ms, border-color 160ms; }.secondary-button { border-color: var(--clarify-line); background: var(--clarify-surface); color: var(--clarify-muted); }.secondary-button:hover:not(:disabled) { border-color: var(--clarify-strong); background: var(--clarify-elevated); color: var(--clarify-fg); }.confirm-button { background: var(--clarify-fg); color: var(--clarify-surface); }.confirm-button:hover:not(:disabled) { background: color-mix(in srgb, var(--clarify-fg) 85%, var(--clarify-surface)); }.secondary-button:disabled, .confirm-button:disabled { border-color: color-mix(in srgb, var(--clarify-line) 65%, transparent); background: color-mix(in srgb, var(--clarify-elevated) 80%, transparent); color: color-mix(in srgb, var(--clarify-muted) 65%, transparent); }.previous-button:disabled { opacity: .4; }
.clarification-summary { width: fit-content; max-width: 88%; min-width: 0; margin: 28px 0 0 auto; padding: 11px 16px; border: 1px solid transparent; border-radius: 18px 18px 7px 18px; background: color-mix(in srgb, var(--clarify-elevated) 80%, transparent); color: var(--clarify-fg); overflow-wrap: anywhere; }.summary-heading { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; color: var(--clarify-muted); font-size: 12px; font-weight: 500; }.summary-answer + .summary-answer { margin-top: 10px; border-top: 1px solid color-mix(in srgb, var(--clarify-line) 70%, transparent); padding-top: 10px; }.summary-prompt { margin: 0 0 4px; color: var(--clarify-muted); font-size: 12px; line-height: 1.65; }.summary-labels { display: flex; flex-wrap: wrap; gap: 4px 8px; color: var(--clarify-fg); font-size: 14px; line-height: 1.75; }.summary-labels > span + span::before { content: '·'; margin-right: 8px; color: var(--clarify-muted); }
@media (max-width: 767px), (pointer: coarse) { .clarify-request { padding-left: 12px; }.clarification-option, .previous-button, .secondary-button, .confirm-button { min-height: 44px; } }
@media (prefers-reduced-motion: reduce) { .clarification-body, .progress-dots > span, .clarification-option, .secondary-button, .confirm-button { transition: none; } }
</style>
`,zd=`<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, onUpdated, ref, useId, watch } from "vue";

interface TaskItem {
  id: string;
  label: string;
  status?: "running" | "waiting" | "idle" | "completed";
  meta?: string;
  disabled?: boolean;
}
interface TaskGroup {
  id: string;
  label: string;
  items: TaskItem[];
  icon?: "running" | "auto" | "history";
  disabled?: boolean;
}
const props = withDefaults(
  defineProps<{
    groups?: TaskGroup[];
    modelValue?: string;
    disabled?: boolean;
    createDisabled?: boolean;
  }>(),
  {
    disabled: false,
    createDisabled: false,
    groups: () => [
      {
        id: "running",
        label: "In progress",
        items: [
          { id: "portfolio", label: "Design a portfolio", status: "running" },
          { id: "brand", label: "Organize brand assets", status: "waiting" },
        ],
      },
      {
        id: "auto",
        label: "Automations",
        items: [
          { id: "review", label: "Review the interface", status: "running" },
          { id: "export", label: "Export design assets", status: "idle" },
        ],
      },
      {
        id: "history",
        label: "History",
        items: [
          {
            id: "landing",
            label: "Build the landing page",
            status: "completed",
            meta: "Just now",
          },
          {
            id: "research",
            label: "Collect references",
            status: "completed",
            meta: "Yesterday",
          },
        ],
      },
    ],
  },
);
const emit = defineEmits<{
  select: [item: TaskItem, group: TaskGroup];
  create: [];
  "update:modelValue": [value: string];
}>();
const localSelectedId = ref(props.modelValue ?? firstEnabledId());
const selectedId = computed(() => props.modelValue ?? localSelectedId.value);
const navigation = ref<HTMLElement>();
function firstEnabledId() {
  return props.groups.filter(group => !group.disabled).flatMap(group => group.items).find(item => !item.disabled)?.id ?? "";
}
function groupPanelId(groupId: string) { return \`task-group-\${instanceId}-\${encodeURIComponent(groupId)}\`; }
const collapsed = ref<Record<string, boolean>>({});
const instanceId = useId();
const foldSnapshots = new WeakMap<HTMLElement, { height: number; opacity: string }>();
function toggleGroup(groupId: string) {
  if (props.disabled || props.groups.find(group => group.id === groupId)?.disabled) return;
  const panel = document.getElementById(groupPanelId(groupId));
  if (panel) foldSnapshots.set(panel, { height: panel.getBoundingClientRect().height, opacity: getComputedStyle(panel).opacity });
  collapsed.value[groupId] = !collapsed.value[groupId];
}
const createButton = ref<HTMLButtonElement>();
const ink = ref({ x: 0, y: 0, diameter: 0 });
const inkPhase = ref<"idle" | "hover" | "leave">("idle");
const inkSuppressed = ref(false);
const createGlyphPlaying = ref(false);
let createPointer: { x: number; y: number } | undefined;
let createKeyboardFocused = false;
let createPreviouslyBlocked = false;
let createObserver: ResizeObserver | undefined;
let createCollapseTimer: ReturnType<typeof setTimeout> | undefined;
let createGlyphTimer: ReturnType<typeof setTimeout> | undefined;
const INK_DURATION = 350;

const statusLabel = {
  running: "Running",
  waiting: "Needs input",
  idle: "Ready",
  completed: "Completed",
};
const headingIcons: Record<string, string> = {
  running:
    '<circle cx="12" cy="12" r="8.2"/><path d="M10.4 8.9l4.6 3.1-4.6 3.1z"/>',
  auto: '<circle cx="4.6" cy="12" r="1.35" fill="currentColor" stroke="none"/><path d="M6.4 12h11.2M14.2 6.6l6.2 5.4-6.2 5.4"/>',
  history:
    '<path d="M4.2 4.2v4.6h4.6M4.3 13.2A8.2 8.2 0 1 0 7.2 6.1L4.2 8.8M12 8.2v3.2l3.2 1.6"/>',
};

function selectItem(item: TaskItem, group: TaskGroup) {
  if (props.disabled || group.disabled || item.disabled) return;
  if (props.modelValue === undefined) localSelectedId.value = item.id;
  emit("update:modelValue", item.id);
  emit("select", item, group);
}

function canCreateHover() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}
function isCreateBlocked() {
  return props.disabled || props.createDisabled || navigation.value?.getAttribute("aria-disabled") === "true" || navigation.value?.getAttribute("aria-busy") === "true" || createButton.value?.getAttribute("aria-disabled") === "true" || createButton.value?.getAttribute("aria-busy") === "true";
}
function clearCollapseTimer() {
  clearTimeout(createCollapseTimer);
  createCollapseTimer = undefined;
}
function placeInk(clientX?: number, clientY?: number) {
  const element = createButton.value;
  if (!element) return;
  const rect = element.getBoundingClientRect();
  const x = clientX === undefined ? rect.width / 2 : clientX - rect.left;
  const y = clientY === undefined ? rect.height / 2 : clientY - rect.top;
  const dx = Math.max(x, rect.width - x);
  const dy = Math.max(y, rect.height - y);
  ink.value = { x, y, diameter: Math.hypot(dx, dy) * 2 };
}
function expand(clientX?: number, clientY?: number) {
  if (isCreateBlocked()) return;
  clearCollapseTimer();
  placeInk(clientX, clientY);
  inkSuppressed.value = false;
  inkPhase.value = "hover";
}
function retract() {
  clearCollapseTimer();
  inkPhase.value = "leave";
  createCollapseTimer = setTimeout(() => {
    if (inkPhase.value !== "hover") {
      ink.value = { ...ink.value, diameter: 0 };
      inkPhase.value = "idle";
    }
    createCollapseTimer = undefined;
  }, INK_DURATION);
}
function stopGlyph() {
  clearTimeout(createGlyphTimer);
  createGlyphTimer = undefined;
  createGlyphPlaying.value = false;
}
function playGlyph() {
  if (isCreateBlocked()) return;
  clearTimeout(createGlyphTimer);
  createGlyphPlaying.value = true;
  createGlyphTimer = setTimeout(() => { createGlyphPlaying.value = false; createGlyphTimer = undefined; }, 520);
}
function onCreatePointerEnter(event: PointerEvent) {
  if (!canCreateHover() || event.pointerType === "touch") return;
  createPointer = { x: event.clientX, y: event.clientY };
  if (isCreateBlocked()) return;
  expand(createPointer.x, createPointer.y);
  playGlyph();
}
function onCreatePointerLeave() {
  createPointer = undefined;
  stopGlyph();
  if (!createKeyboardFocused) retract();
}
function onCreateFocus() {
  createKeyboardFocused = !isCreateBlocked() && Boolean(createButton.value?.matches(":focus-visible"));
  if (createKeyboardFocused) { expand(); playGlyph(); }
}
function onCreateBlur() {
  createKeyboardFocused = false;
  if (!createPointer) { retract(); stopGlyph(); }
}
function onCreate() {
  if (!isCreateBlocked()) { playGlyph(); emit("create"); }
}
function clearCreateCover() {
  createPointer = undefined;
  createKeyboardFocused = false;
  retract();
  stopGlyph();
}
function onCreateVisibilityChange() { if (document.hidden) clearCreateCover(); }
function syncCreateBlocked() {
  const blocked = isCreateBlocked();
  if (blocked) {
    clearCollapseTimer();
    inkSuppressed.value = true;
    inkPhase.value = "idle";
    if (ink.value.diameter) ink.value = { ...ink.value, diameter: 0 };
    createKeyboardFocused = false;
    stopGlyph();
  } else {
    inkSuppressed.value = false;
    if (createPreviouslyBlocked && createPointer && createButton.value?.matches(":hover") && canCreateHover()) expand(createPointer.x, createPointer.y);
  }
  createPreviouslyBlocked = blocked;
}
watch(() => props.disabled || props.createDisabled, syncCreateBlocked, { flush: "post" });
onUpdated(syncCreateBlocked);
onMounted(() => {
  syncCreateBlocked();
  window.addEventListener("blur", clearCreateCover);
  document.addEventListener("visibilitychange", onCreateVisibilityChange);
  if (typeof ResizeObserver !== "undefined") {
    createObserver = new ResizeObserver(() => {
      if (inkPhase.value === "hover" && !isCreateBlocked()) placeInk(createKeyboardFocused ? undefined : createPointer?.x, createKeyboardFocused ? undefined : createPointer?.y);
    });
    if (createButton.value) createObserver.observe(createButton.value);
  }
});
onBeforeUnmount(() => {
  createObserver?.disconnect();
  clearCollapseTimer();
  stopGlyph();
  window.removeEventListener("blur", clearCreateCover);
  document.removeEventListener("visibilitychange", onCreateVisibilityChange);
});

function onNavigationKeydown(event: KeyboardEvent) {
  if (props.disabled || !navigation.value || event.altKey || event.ctrlKey || event.metaKey) return;
  const target = (event.target as HTMLElement).closest<HTMLButtonElement>("button");
  if (!target || target.disabled) return;
  if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
    const buttons = [...navigation.value.querySelectorAll<HTMLButtonElement>("button:not(:disabled)")].filter(button => !button.closest("[inert]") && button.getClientRects().length);
    const index = buttons.indexOf(target);
    if (!buttons.length) return;
    event.preventDefault();
    const next = event.key === "Home" ? 0 : event.key === "End" ? buttons.length - 1 : (index + (event.key === "ArrowDown" ? 1 : -1) + buttons.length) % buttons.length;
    buttons[next]?.focus({ preventScroll: true });
  } else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    const groupElement = target.closest<HTMLElement>(".task-nav-group");
    const groupId = groupElement?.dataset.groupId;
    const heading = groupElement?.querySelector<HTMLButtonElement>(".task-group-heading");
    if (!groupId || !heading || heading.disabled) return;
    event.preventDefault();
    if (event.key === "ArrowLeft") {
      if (!collapsed.value[groupId]) toggleGroup(groupId);
      void nextTick(() => heading.focus({ preventScroll: true }));
    } else if (collapsed.value[groupId]) toggleGroup(groupId);
  }
}

function beforeEnter(element: Element) {
  element.removeAttribute("inert");
  element.removeAttribute("aria-hidden");
  const body = element as HTMLElement;
  const snapshot = foldSnapshots.get(body);
  const height = snapshot?.height ?? body.getBoundingClientRect().height;
  const opacity = snapshot?.opacity ?? getComputedStyle(body).opacity;
  body.style.height = \`\${height}px\`;
  body.style.opacity = height ? opacity : "0";
}
function enter(element: Element) {
  const body = element as HTMLElement;
  body.getBoundingClientRect();
  body.style.height = \`\${body.scrollHeight}px\`;
  body.style.opacity = "1";
  foldSnapshots.delete(body);
}
function afterEnter(element: Element) {
  element.removeAttribute("inert");
  element.removeAttribute("aria-hidden");
  const body = element as HTMLElement;
  body.style.height = "";
  body.style.opacity = "";
}
function freezeFold(element: Element) {
  const body = element as HTMLElement;
  const snapshot = foldSnapshots.get(body);
  const hidden = getComputedStyle(body).display === "none";
  const height = hidden ? snapshot?.height ?? 0 : body.getBoundingClientRect().height;
  const opacity = hidden ? snapshot?.opacity ?? "0" : getComputedStyle(body).opacity;
  foldSnapshots.set(body, { height, opacity });
  body.style.height = \`\${height}px\`;
  body.style.opacity = opacity;
}
function beforeLeave(element: Element) {
  element.setAttribute("inert", "");
  element.setAttribute("aria-hidden", "true");
  const body = element as HTMLElement;
  body.style.height = \`\${body.offsetHeight}px\`;
  body.style.opacity = "1";
}
function leave(element: Element) {
  const body = element as HTMLElement;
  body.getBoundingClientRect();
  body.style.height = "0px";
  body.style.opacity = "0";
}
function afterLeave(element: Element) {
  const body = element as HTMLElement;
  body.style.height = "";
  body.style.opacity = "";
}

watch(
  () => props.modelValue,
  (value) => {
    if (value !== undefined) localSelectedId.value = value;
    else if (!props.groups.some(group => !group.disabled && group.items.some(item => item.id === localSelectedId.value && !item.disabled))) localSelectedId.value = firstEnabledId();
  },
);
watch(() => props.groups, groups => {
  const ids = new Set(groups.map(group => group.id));
  collapsed.value = Object.fromEntries(Object.entries(collapsed.value).filter(([id]) => ids.has(id)));
  if (props.modelValue === undefined && !groups.some(group => !group.disabled && group.items.some(item => item.id === localSelectedId.value && !item.disabled))) localSelectedId.value = firstEnabledId();
}, { deep: true });
<\/script>

<template>
  <nav ref="navigation" class="grouped-task-demo" aria-label="Workspace tasks" @keydown="onNavigationKeydown">
    <button
      ref="createButton"
      class="task-create-button"
      :class="{ 'is-active': inkPhase === 'hover', 'is-leaving': inkPhase === 'leave', 'is-ink-suppressed': inkSuppressed }"
      type="button"
      :disabled="disabled || createDisabled"
      @pointerenter="onCreatePointerEnter"
      @pointerleave="onCreatePointerLeave"
      @pointercancel="onCreatePointerLeave"
      @focus="onCreateFocus"
      @blur="onCreateBlur"
      @click="onCreate"
    >
      <span
        class="task-create-wave"
        :style="{ left: \`\${ink.x}px\`, top: \`\${ink.y}px\`, width: \`\${ink.diameter}px\`, height: \`\${ink.diameter}px\` }"
        aria-hidden="true"
      />
      <svg
        :class="{ 'is-playing': createGlyphPlaying }"
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M12.5 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6.5" />
        <path class="task-create-pen" d="m15.5 4.5 4 4M10 10l7.3-7.3a1.4 1.4 0 0 1 2 0l2 2a1.4 1.4 0 0 1 0 2L14 14l-5 1 1-5Z" />
      </svg>
      <span>New task</span>
    </button>

    <div class="task-groups-scroll">
      <section v-for="group in groups" :key="group.id" class="task-nav-group" :data-group-id="group.id">
        <button
          class="task-group-heading"
          type="button"
          :disabled="disabled || group.disabled"
          :aria-expanded="!collapsed[group.id]"
          :aria-controls="groupPanelId(group.id)"
          :aria-label="\`\${collapsed[group.id] ? 'Expand' : 'Collapse'} \${group.label}\`"
          @click="toggleGroup(group.id)"
        >
          <svg
            class="task-group-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            v-html="
              headingIcons[group.icon || group.id] || headingIcons.history
            "
          />
          <span>{{ group.label }}</span>
          <svg
            class="task-group-chevron"
            :class="{ collapsed: collapsed[group.id] }"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="m7 10 5 5 5-5" />
          </svg>
          <span class="task-group-count">{{ group.items.length }}</span>
        </button>
        <Transition
          name="task-group-collapse"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @enter-cancelled="freezeFold"
          @leave-cancelled="freezeFold"
        >
          <div
            v-show="!collapsed[group.id]"
            :inert="collapsed[group.id] || undefined"
            :aria-hidden="collapsed[group.id] || undefined"
            :id="groupPanelId(group.id)"
            class="task-group-body"
          >
            <div
              v-for="item in group.items"
              :key="item.id"
              class="task-tree-item"
            >
              <button
                class="task-nav-row"
                :class="{ selected: selectedId === item.id }"
                type="button"
                :disabled="disabled || group.disabled || item.disabled"
                :aria-current="selectedId === item.id ? 'true' : undefined"
                :aria-label="\`\${item.label}\${item.status ? \`，\${statusLabel[item.status]}\` : ''}\`"
                :title="item.label"
                @click="selectItem(item, group)"
              >
                <span class="task-row-label">{{ item.label }}</span>
                <span v-if="item.meta" class="task-row-meta">{{
                  item.meta
                }}</span>
                <span
                  v-if="item.status === 'running'"
                  class="task-status-dot"
                  aria-hidden="true"
                />
                <svg
                  v-else-if="item.status === 'waiting'"
                  class="task-waiting-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="10.2" cy="8" r="3.2" />
                  <path d="M3.8 20a6.4 6.4 0 0 1 12.8 0" />
                  <circle
                    class="task-waiting-dot"
                    cx="18.6"
                    cy="11.5"
                    r="1.55"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
                <span
                  v-else-if="item.status === 'idle'"
                  class="task-idle-dot"
                  aria-hidden="true"
                />
              </button>
            </div>
            <p v-if="!group.items.length" class="task-group-empty">No tasks</p>
          </div>
        </Transition>
      </section>
    </div>
  </nav>
</template>

<style scoped>
.grouped-task-demo {
  width: 100%;
  max-width: 360px;
  max-height: 340px;
  display: flex;
  flex-direction: column;
  padding: 13px;
  border: 1px solid var(--demo-border, #e8e8ed);
  border-radius: 13px;
  background: var(--demo-surface, #fff);
  color: var(--demo-text, #252529);
  box-sizing: border-box;
  text-align: left;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
}
.grouped-task-demo * {
  box-sizing: border-box;
}
.grouped-task-demo button {
  font-family: inherit;
  -webkit-tap-highlight-color: transparent;
}
.task-create-button {
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 40px;
  flex-shrink: 0;
  padding: 0 10px;
  margin: 0 0 8px;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: var(--demo-text, #252529);
  font-size: 13px;
  line-height: 20px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  overflow: clip;
}
.task-create-button > svg {
  display: block;
  color: var(--text-secondary, #52525b);
  flex-shrink: 0;
}
.task-create-pen { transform-box: fill-box; transform-origin: center; }
.task-create-button > svg.is-playing .task-create-pen { animation: task-create-write 520ms cubic-bezier(.25, .7, .3, 1) both; }
.task-create-wave {
  position: absolute;
  z-index: -1;
  margin: 0;
  border-radius: 50%;
  background: var(--hover-ink-color, color-mix(in srgb, var(--demo-text, #18181b) 4.5%, transparent));
  transform: translate(-50%, -50%) scale(0);
  transform-origin: center;
  transition: transform 350ms cubic-bezier(.16, 1, .3, 1);
  pointer-events: none;
}
.task-create-button.is-active > .task-create-wave { transform: translate(-50%, -50%) scale(1); }
.task-create-button.is-leaving > .task-create-wave { transform: translate(-50%, -50%) scale(0); }
.task-create-button.is-ink-suppressed > .task-create-wave { visibility: hidden; transition: none; transform: translate(-50%, -50%) scale(0); }
.task-create-feedback {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
  color: var(--demo-muted, #777782);
  font-size: 12px;
  font-weight: 400;
}
.task-create-feedback > span {
  color: var(--accent, #7b61ff);
}
.task-create-feedback-enter-active,
.task-create-feedback-leave-active {
  transition:
    opacity 180ms,
    transform 220ms;
}
.task-create-feedback-enter-from,
.task-create-feedback-leave-to {
  opacity: 0;
  transform: translateY(3px);
}
.task-groups-scroll {
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--demo-border, #e8e8ed) transparent;
  padding-right: 1px;
}
.task-nav-group + .task-nav-group {
  margin-top: 13px;
}
.task-group-heading {
  display: flex;
  align-items: center;
  gap: 7px;
  width: 100%;
  min-height: 33px;
  padding: 5px 11px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--demo-muted, #777782);
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  cursor: pointer;
  transition: color 160ms;
}
.task-group-heading:hover {
  color: var(--demo-text, #252529);
}
.task-group-icon {
  flex: none;
}
.task-group-chevron {
  opacity: 0.65;
  transition:
    transform 240ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 180ms;
}
.task-group-heading:hover .task-group-chevron {
  opacity: 1;
}
.task-group-chevron.collapsed {
  transform: rotate(-90deg);
}
.task-group-count {
  margin-left: auto;
  font-size: 12px;
  opacity: 0.6;
  font-variant-numeric: tabular-nums;
  font-weight: 400;
}
.task-group-body {
  overflow: hidden;
}
.task-tree-item {
  position: relative;
  display: flow-root;
  padding-left: 28px;
}
.task-tree-item::before {
  content: "";
  position: absolute;
  left: 17px;
  top: 0;
  width: 11px;
  height: 50%;
  border-left: 1px solid var(--demo-border, #e8e8ed);
  border-bottom: 1px solid var(--demo-border, #e8e8ed);
  border-bottom-left-radius: 6px;
  pointer-events: none;
}
.task-tree-item:not(:last-child)::after {
  content: "";
  position: absolute;
  left: 17px;
  top: 50%;
  bottom: 0;
  border-left: 1px solid var(--demo-border, #e8e8ed);
  pointer-events: none;
}
.task-nav-row {
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  min-width: 0;
  min-height: 34px;
  margin: 1px 0;
  padding: 6px 9px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--demo-text, #252529);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  cursor: pointer;
  transition:
    background 180ms,
    color 180ms;
}
.task-nav-row:hover {
  background: color-mix(
    in srgb,
    var(--demo-text, #252529) 3%,
    var(--demo-surface, #fff)
  );
}
.task-nav-row.selected {
  background: color-mix(
    in srgb,
    var(--demo-text, #252529) 6%,
    var(--demo-surface, #fff)
  );
}
.task-row-label {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.task-row-meta {
  flex: none;
  color: var(--demo-muted, #777782);
  font-size: 12px;
  opacity: 0.65;
}
.task-status-dot {
  position: relative;
  width: 6px;
  height: 6px;
  margin: 0 4px;
  flex: none;
  border-radius: 50%;
  background: var(--accent, #7b61ff);
}
.task-status-dot::after {
  content: "";
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  border: 1px solid var(--accent, #7b61ff);
  opacity: 0.2;
  animation: task-dot-breathe 2200ms ease-out infinite;
}
.task-idle-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin: 0 4px;
  background: var(--demo-muted, #777782);
  opacity: 0.4;
  flex: none;
}
.task-waiting-icon {
  color: #c78a43;
  flex: none;
  overflow: visible;
}
.task-waiting-dot {
  transform-origin: 18.6px 11.5px;
}
.task-nav-row:hover .task-waiting-dot {
  animation: task-waiting-ping 900ms ease 1;
}
.task-group-empty {
  margin: 0;
  padding: 7px 12px 7px 37px;
  color: var(--demo-muted, #777782);
  font-size: 12px;
}
.grouped-task-demo button:disabled { cursor: not-allowed; opacity: .5; }
.grouped-task-demo button:disabled .task-create-pen { transform: none; }
.grouped-task-demo button:focus-visible {
  outline: 2px solid var(--accent, #7b61ff);
  outline-offset: -2px;
}
.task-group-collapse-enter-active,
.task-group-collapse-leave-active {
  overflow: hidden;
  transition:
    height 320ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 220ms ease;
}
@keyframes task-create-write {
  0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
  45% { transform: translate(-.9px, .9px) rotate(-3deg) scale(1); }
}
@keyframes task-dot-breathe {
  0% {
    transform: scale(0.65);
    opacity: 0.28;
  }
  70%,
  100% {
    transform: scale(1.55);
    opacity: 0;
  }
}
@keyframes task-waiting-ping {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  40% {
    transform: scale(1.45);
    opacity: 0.5;
  }
}
@media (prefers-reduced-motion: reduce) {
  .grouped-task-demo *,
  .grouped-task-demo *::after {
    animation: none !important;
    transition: none !important;
  }
}
</style>
`,Ad=`<script setup lang="ts">
import {
  computed,
  defineComponent,
  h,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  useId,
  watch,
} from "vue";
import { Check, ChevronDown, Cpu, Search } from "lucide-vue-next";

/* Bundled provider marks: original LobeHub SVG assets.
MIT License

Copyright (c) 2023 LobeHub

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
type ModelProvider = "claude" | "openai" | "gemini" | "deepseek";
const modelProviderAssets: Record<ModelProvider, string> = {
  "claude": "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+Q2xhdWRlPC90aXRsZT48cGF0aCBkPSJtNC43MTQ0IDE1Ljk1NTUgNC43MTc0LTIuNjQ3MS4wNzktLjIzMDctLjA3OS0uMTI3NWgtLjIzMDdsLS43ODkzLS4wNDg2LTIuNjk1Ni0uMDcyOS0yLjMzNzUtLjA5NzEtMi4yNjQ2LS4xMjE0LS41NzA3LS4xMjE1LS41MzQzLS43MDQyLjA1NDYtLjM1MjIuNDc5Ny0uMzIxOC42ODYuMDYwOCAxLjUxNzkuMTAzMiAyLjI3NjcuMTU3OCAxLjY1MTQuMDk3MiAyLjQ0NjguMjU1aC4zODg2bC4wNTQ2LS4xNTc5LS4xMzM2LS4wOTcxLS4xMDMyLS4wOTcyTDYuOTczIDkuODM1NmwtMi41NS0xLjY4NzktMS4zMzU2LS45NzE0LS43MjI1LS40OTE4LS4zNjQzLS40NjE0LS4xNTc4LTEuMDA3OC42NTU3LS43MjI1Ljg4MDMuMDYwNy4yMjQ2LjA2MDcuODkyNS42ODYgMS45MDY0IDEuNDc1NCAyLjQ4OTMgMS44MzM2LjM2NDMuMzAzNS4xNDU3LS4xMDMyLjAxODItLjA3MjgtLjE2NC0uMjczMy0xLjM1MzktMi40NDY3LTEuNDQ1LTIuNDg5My0uNjQzNS0xLjAzMi0uMTctLjYxOTRjLS4wNjA3LS4yNTUtLjEwMzItLjQ2NzQtLjEwMzItLjcyODVMNi4yODcuMTMzNSA2LjY5OTcgMGwuOTk1Ny4xMzM2LjQxOS4zNjQyLjYxOTIgMS40MTQ3IDEuMDAxOCAyLjIyODIgMS41NTQzIDMuMDI5Ni40NTUzLjg5ODUuMjQyOS44MzE4LjA5MS4yNTVoLjE1Nzl2LS4xNDU3bC4xMjc1LTEuNzA2LjIzNjgtMi4wOTQ3LjIzMDctMi42OTU3LjA3ODktLjc1ODkuMzc2NC0uOTEwNy43NDY4LS40OTE4LjU4MjguMjc5My40Nzk3LjY4Ni0uMDY2OC40NDMzLS4yODUzIDEuODUxNy0uNTU4NiAyLjkwMjEtLjM2NDMgMS45NDI5aC4yMTI1bC4yNDI5LS4yNDI5Ljk4MzUtMS4zMDUzIDEuNjUxNC0yLjA2NDMuNzI4Ni0uODE5Ni44NS0uOTA0Ni41NDY0LS40MzExaDEuMDMyMWwuNzU5IDEuMTI5My0uMzQgMS4xNjU3LTEuMDYyNSAxLjM0NzgtLjg4MDQgMS4xNDE0LTEuMjYyOCAxLjctLjc4OTMgMS4zNi4wNzI5LjEwOTMuMTg4Mi0uMDE4MyAyLjg1MzUtLjYwNyAxLjU0MjEtLjI3OTQgMS44Mzk2LS4zMTU3LjgzMTguMzg4Ni4wOTEuMzk0Ni0uMzI3OC44MDc1LTEuOTY3LjQ4NTctMi4zMDcyLjQ2MTQtMy40MzY0LjgxMzYtLjA0MjUuMDMwNC4wNDg2LjA2MDcgMS41NDgyLjE0NTcuNjYxOC4wMzY0aDEuNjIxbDMuMDE3NS4yMjQ3Ljc4OTIuNTIyLjQ3MzYuNjM3Ni0uMDc5LjQ4NTctMS4yMTQyLjYxOTMtMS42MzkzLS4zODg2LTMuODI1LS45MTA3LTEuMzExMy0uMzI3OWgtLjE4MjJ2LjEwOTNsMS4wOTI5IDEuMDY4NiAyLjAwMzUgMS44MDkyIDIuNTA3NSAyLjMzMTQuMTI3NS41NzY4LS4zMjE4LjQ1NTQtLjM0LS4wNDg2LTIuMjAzOS0xLjY1NzUtLjg1LS43NDY4LTEuOTI0Ni0xLjYyMWgtLjEyNzV2LjE3bC40NDMyLjY0OTYgMi4zNDM2IDMuNTIxNC4xMjE0IDEuMDgwNy0uMTcuMzUyMS0uNjA3MS4yMTI1LS42Njc5LS4xMjE0LTEuMzcyMS0xLjkyNDZMMTQuMzggMTcuOTU5bC0xLjE0MTQtMS45NDI4LS4xMzk3LjA3OS0uNjc0IDcuMjU1Mi0uMzE1Ni4zNzAzLS43Mjg2LjI3OTMtLjYwNzEtLjQ2MTQtLjMyMTgtLjc0NjguMzIxOC0xLjQ3NTMuMzg4Ni0xLjkyNDYuMzE1Ny0xLjUzLjI4NTMtMS45MDA0LjE3LS42MzE0LS4wMTIxLS4wNDI1LS4xMzk3LjAxODItMS40MzI4IDEuOTY3Mi0yLjE3OTYgMi45NDQ2LTEuNzI0MyAxLjg0NTYtLjQxMjguMTY0LS43MTY0LS4zNzA0LjA2NjctLjY2MTguNDAwOC0uNTg4OSAyLjM4Ni0zLjAzNTcgMS40Mzg5LTEuODgyLjkyOS0xLjA4NjgtLjAwNjItLjE1NzloLS4wNTQ2bC02LjMzODUgNC4xMTY0LTEuMTI5My4xNDU3LS40ODU3LS40NTU0LjA2MDgtLjc0NjcuMjMwNy0uMjQyOSAxLjkwNjQtMS4zMTE0WiIvPjwvc3ZnPg==",
  "openai": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIxIiBoZWlnaHQ9IjcyMSIgdmlld0JveD0iMCAwIDcyMSA3MjEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xNjM3XzI5MzQpIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxXzE2MzdfMjkzNCkiPgo8cGF0aCBkPSJNMzA0LjI0NiAyOTQuNjExVjI0OS4wMjhDMzA0LjI0NiAyNDUuMTg5IDMwNS42ODcgMjQyLjMwOSAzMDkuMDQ0IDI0MC4zOTJMNDAwLjY5MiAxODcuNjEyQzQxMy4xNjcgMTgwLjQxNSA0MjguMDQyIDE3Ny4wNTggNDQzLjM5NCAxNzcuMDU4QzUwMC45NzEgMTc3LjA1OCA1MzcuNDQgMjIxLjY4MiA1MzcuNDQgMjY5LjE4MkM1MzcuNDQgMjcyLjU0IDUzNy40NCAyNzYuMzc5IDUzNi45NTkgMjgwLjIxOEw0NDEuOTU0IDIyNC41NThDNDM2LjE5NyAyMjEuMjAxIDQzMC40MzcgMjIxLjIwMSA0MjQuNjggMjI0LjU1OEwzMDQuMjQ2IDI5NC42MTFaTTUxOC4yNDUgNDcyLjE0NVYzNjMuMjI0QzUxOC4yNDUgMzU2LjUwNSA1MTUuMzY0IDM1MS43MDcgNTA5LjYwOCAzNDguMzQ5TDM4OS4xNzQgMjc4LjI5Nkw0MjguNTE5IDI1NS43NDNDNDMxLjg3NyAyNTMuODI2IDQzNC43NTcgMjUzLjgyNiA0MzguMTE1IDI1NS43NDNMNTI5Ljc2MiAzMDguNTIzQzU1Ni4xNTQgMzIzLjg3OSA1NzMuOTA1IDM1Ni41MDUgNTczLjkwNSAzODguMTcxQzU3My45MDUgNDI0LjYzNiA1NTIuMzE1IDQ1OC4yMjUgNTE4LjI0NSA0NzIuMTQxVjQ3Mi4xNDVaTTI3NS45MzcgMzc2LjE4MkwyMzYuNTkyIDM1My4xNTJDMjMzLjIzNSAzNTEuMjM1IDIzMS43OTQgMzQ4LjM1NCAyMzEuNzk0IDM0NC41MTVWMjM4Ljk1NkMyMzEuNzk0IDE4Ny42MTcgMjcxLjEzOSAxNDguNzQ5IDMyNC40IDE0OC43NDlDMzQ0LjU1NSAxNDguNzQ5IDM2My4yNjQgMTU1LjQ2OCAzNzkuMTAyIDE2Ny40NjNMMjg0LjU3OCAyMjIuMTY0QzI3OC44MjIgMjI1LjUyMSAyNzUuOTQyIDIzMC4zMTkgMjc1Ljk0MiAyMzcuMDM5VjM3Ni4xODZMMjc1LjkzNyAzNzYuMTgyWk0zNjAuNjI2IDQyNS4xMjJMMzA0LjI0NiAzOTMuNDU1VjMyNi4yODNMMzYwLjYyNiAyOTQuNjE2TDQxNy4wMDIgMzI2LjI4M1YzOTMuNDU1TDM2MC42MjYgNDI1LjEyMlpNMzk2Ljg1MiA1NzAuOTg5QzM3Ni42OTggNTcwLjk4OSAzNTcuOTg5IDU2NC4yNyAzNDIuMTUxIDU1Mi4yNzZMNDM2LjY3NCA0OTcuNTc0QzQ0Mi40MzEgNDk0LjIxNyA0NDUuMzExIDQ4OS40MTkgNDQ1LjMxMSA0ODIuNjk5VjM0My41NTJMNDg1LjEzOCAzNjYuNTgyQzQ4OC40OTUgMzY4LjQ5OSA0ODkuOTM2IDM3MS4zNzkgNDg5LjkzNiAzNzUuMjE5VjQ4MC43NzhDNDg5LjkzNiA1MzIuMTE3IDQ1MC4xMDkgNTcwLjk4NSAzOTYuODUyIDU3MC45ODVWNTcwLjk4OVpNMjgzLjEzNCA0NjMuOTlMMTkxLjQ4NiA0MTEuMjExQzE2NS4wOTQgMzk1Ljg1NCAxNDcuMzQzIDM2My4yMjkgMTQ3LjM0MyAzMzEuNTYyQzE0Ny4zNDMgMjk0LjYxNiAxNjkuNDE1IDI2MS41MDkgMjAzLjQ4IDI0Ny41OTNWMzU2Ljk5MUMyMDMuNDggMzYzLjcxIDIwNi4zNjEgMzY4LjUwOCAyMTIuMTE3IDM3MS44NjZMMzMyLjA3NCA0NDEuNDM3TDI5Mi43MjkgNDYzLjk5QzI4OS4zNzIgNDY1LjkwNyAyODYuNDkxIDQ2NS45MDcgMjgzLjEzNCA0NjMuOTlaTTI3Ny44NTkgNTQyLjY4QzIyMy42MzkgNTQyLjY4IDE4My44MTMgNTAxLjg5NSAxODMuODEzIDQ1MS41MTRDMTgzLjgxMyA0NDcuNjc1IDE4NC4yOTQgNDQzLjgzNiAxODQuNzcxIDQzOS45OTdMMjc5LjI5NSA0OTQuNjk4QzI4NS4wNTEgNDk4LjA1NiAyOTAuODEyIDQ5OC4wNTYgMjk2LjU2OCA0OTQuNjk4TDQxNy4wMDIgNDI1LjEyN1Y0NzAuNzFDNDE3LjAwMiA0NzQuNTQ5IDQxNS41NjIgNDc3LjQyOSA0MTIuMjA0IDQ3OS4zNDZMMzIwLjU1NyA1MzIuMTI2QzMwOC4wODEgNTM5LjMyMyAyOTMuMjA2IDU0Mi42OCAyNzcuODU0IDU0Mi42OEgyNzcuODU5Wk0zOTYuODUyIDU5OS43NzZDNDU0LjkxMSA1OTkuNzc2IDUwMy4zNyA1NTguNTEzIDUxNC40MSA1MDMuODEyQzU2OC4xNDkgNDg5Ljg5NiA2MDIuNjk2IDQzOS41MTUgNjAyLjY5NiAzODguMTc2QzYwMi42OTYgMzU0LjU4NyA1ODguMzAzIDMyMS45NjIgNTYyLjM5MiAyOTguNDVDNTY0Ljc5MSAyODguMzczIDU2Ni4yMzEgMjc4LjI5NiA1NjYuMjMxIDI2OC4yMjRDNTY2LjIzMSAxOTkuNjExIDUxMC41NzEgMTQ4LjI2NyA0NDYuMjc0IDE0OC4yNjdDNDMzLjMyMiAxNDguMjY3IDQyMC44NDYgMTUwLjE4NCA0MDguMzcgMTU0LjUwNUMzODYuNzc1IDEzMy4zOTIgMzU3LjAyNiAxMTkuOTU4IDMyNC40IDExOS45NThDMjY2LjM0MiAxMTkuOTU4IDIxNy44ODMgMTYxLjIyIDIwNi44NDMgMjE1LjkyMUMxNTMuMTA0IDIyOS44MzcgMTE4LjU1NyAyODAuMjE4IDExOC41NTcgMzMxLjU1N0MxMTguNTU3IDM2NS4xNDYgMTMyLjk1IDM5Ny43NzEgMTU4Ljg2MSA0MjEuMjgzQzE1Ni40NjIgNDMxLjM2IDE1NS4wMjIgNDQxLjQzNyAxNTUuMDIyIDQ1MS41MUMxNTUuMDIyIDUyMC4xMjMgMjEwLjY4MiA1NzEuNDY2IDI3NC45NzggNTcxLjQ2NkMyODcuOTMxIDU3MS40NjYgMzAwLjQwNyA1NjkuNTQ5IDMxMi44ODMgNTY1LjIyOEMzMzQuNDczIDU4Ni4zNDEgMzY0LjIyMiA1OTkuNzc2IDM5Ni44NTIgNTk5Ljc3NloiIGZpbGw9ImJsYWNrIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNzIwIiBoZWlnaHQ9IjcyMCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNjA2OTM0IDAuMDk5OTc1NikiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNDg0LjEzOSIgaGVpZ2h0PSI0NzkuODE4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE4LjU1NyAxMTkuOTU4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
  "gemini": "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjFlbSIgc3R5bGU9ImZsZXg6bm9uZTtsaW5lLWhlaWdodDoxIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkdlbWluaTwvdGl0bGU+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9IiMzMTg2RkYiPjwvcGF0aD48cGF0aCBkPSJNMjAuNjE2IDEwLjgzNWExNC4xNDcgMTQuMTQ3IDAgMDEtNC40NS0zLjAwMSAxNC4xMTEgMTQuMTExIDAgMDEtMy42NzgtNi40NTIuNTAzLjUwMyAwIDAwLS45NzUgMCAxNC4xMzQgMTQuMTM0IDAgMDEtMy42NzkgNi40NTIgMTQuMTU1IDE0LjE1NSAwIDAxLTQuNDUgMy4wMDFjLS42NS4yOC0xLjMxOC41MDUtMi4wMDIuNjc4YS41MDIuNTAyIDAgMDAwIC45NzVjLjY4NC4xNzIgMS4zNS4zOTcgMi4wMDIuNjc3YTE0LjE0NyAxNC4xNDcgMCAwMTQuNDUgMy4wMDEgMTQuMTEyIDE0LjExMiAwIDAxMy42NzkgNi40NTMuNTAyLjUwMiAwIDAwLjk3NSAwYy4xNzItLjY4NS4zOTctMS4zNTEuNjc3LTIuMDAzYTE0LjE0NSAxNC4xNDUgMCAwMTMuMDAxLTQuNDUgMTQuMTEzIDE0LjExMyAwIDAxNi40NTMtMy42NzguNTAzLjUwMyAwIDAwMC0uOTc1IDEzLjI0NSAxMy4yNDUgMCAwMS0yLjAwMy0uNjc4eiIgZmlsbD0idXJsKCNsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfKSI+PC9wYXRoPjxwYXRoIGQ9Ik0yMC42MTYgMTAuODM1YTE0LjE0NyAxNC4xNDcgMCAwMS00LjQ1LTMuMDAxIDE0LjExMSAxNC4xMTEgMCAwMS0zLjY3OC02LjQ1Mi41MDMuNTAzIDAgMDAtLjk3NSAwIDE0LjEzNCAxNC4xMzQgMCAwMS0zLjY3OSA2LjQ1MiAxNC4xNTUgMTQuMTU1IDAgMDEtNC40NSAzLjAwMWMtLjY1LjI4LTEuMzE4LjUwNS0yLjAwMi42NzhhLjUwMi41MDIgMCAwMDAgLjk3NWMuNjg0LjE3MiAxLjM1LjM5NyAyLjAwMi42NzdhMTQuMTQ3IDE0LjE0NyAwIDAxNC40NSAzLjAwMSAxNC4xMTIgMTQuMTEyIDAgMDEzLjY3OSA2LjQ1My41MDIuNTAyIDAgMDAuOTc1IDBjLjE3Mi0uNjg1LjM5Ny0xLjM1MS42NzctMi4wMDNhMTQuMTQ1IDE0LjE0NSAwIDAxMy4wMDEtNC40NSAxNC4xMTMgMTQuMTEzIDAgMDE2LjQ1My0zLjY3OC41MDMuNTAzIDAgMDAwLS45NzUgMTMuMjQ1IDEzLjI0NSAwIDAxLTIuMDAzLS42Nzh6IiBmaWxsPSJ1cmwoI2xvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8pIj48L3BhdGg+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9InVybCgjbG9iZS1pY29ucy1nZW1pbmktMi1fUl8wXykiPjwvcGF0aD48ZGVmcz48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfIiB4MT0iNyIgeDI9IjExIiB5MT0iMTUuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjMDhCOTYyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDhCOTYyIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8iIHgxPSI4IiB4Mj0iMTEuNSIgeTE9IjUuNSIgeTI9IjExIj48c3RvcCBzdG9wLWNvbG9yPSIjRjk0NTQzIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjk0NTQzIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTItX1JfMF8iIHgxPSIzLjUiIHgyPSIxNy41IiB5MT0iMTMuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjRkFCQzEyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuNDYiIHN0b3AtY29sb3I9IiNGQUJDMTIiIHN0b3Atb3BhY2l0eT0iMCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==",
  "deepseek": "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RGVlcFNlZWs8L3RpdGxlPjxwYXRoIGQ9Ik0yMy43NDggNC42NTFjLS4yNTQtLjEyNC0uMzY0LjExMy0uNTEyLjIzMy0uMDUxLjA0LS4wOTQuMDktLjEzNy4xMzctLjM3Mi4zOTctLjgwNi42NTctMS4zNzMuNjI2LS44MjktLjA0Ni0xLjUzNy4yMTQtMi4xNjMuODQ4LS4xMzMtLjc4Mi0uNTc1LTEuMjQ4LTEuMjQ3LTEuNTQ4LS4zNTItLjE1NS0uNzA4LS4zMTEtLjk1NS0uNjUtLjE3Mi0uMjQtLjIxOS0uNTA5LS4zMDUtLjc3NC0uMDU1LS4xNi0uMTEtLjMyMy0uMjkzLS4zNS0uMi0uMDMxLS4yNzguMTM2LS4zNTYuMjc2LS4zMTMuNTcyLS40MzQgMS4yMDItLjQyMiAxLjg0LjAyNyAxLjQzNi42MzMgMi41OCAxLjgzOCAzLjM5My4xMzcuMDk0LjE3Mi4xODcuMTI5LjMyMy0uMDgyLjI4LS4xOC41NTMtLjI2Ni44MzMtLjA1NS4xNzktLjEzNy4yMTgtLjMyOC4xNGE1LjUgNS41IDAgMCAxLTEuNzM3LTEuMTc5Yy0uODU3LS44MjgtMS42MzEtMS43NDMtMi41OTctMi40NmExMiAxMiAwIDAgMC0uNjg5LS40N2MtLjk4NS0uOTU3LjEzLTEuNzQzLjM4Ny0xLjgzNi4yNy0uMDk4LjA5NC0uNDMzLS43NzgtLjQyOC0uODcyLjAwMy0xLjY3LjI5NS0yLjY4Ny42ODVhMyAzIDAgMCAxLS40NjUuMTM2IDkuNiA5LjYgMCAwIDAtMi44ODMtLjEwMWMtMS44ODUuMjEtMy4zOSAxLjEtNC40OTcgMi42MjJDLjA4MiA4Ljc3Ni0uMjMxIDEwLjg1NC4xNTIgMTMuMDJjLjQwMyAyLjI4NCAxLjU2OCA0LjE3NSAzLjM2IDUuNjUzIDEuODU3IDEuNTMzIDMuOTk3IDIuMjg0IDYuNDM4IDIuMTQgMS40ODItLjA4NSAzLjEzMi0uMjg0IDQuOTk0LTEuODYuNDcuMjM0Ljk2Mi4zMjggMS43OC4zOTguNjI5LjA1OCAxLjIzNS0uMDMxIDEuNzA1LS4xMjkuNzM1LS4xNTUuNjg0LS44MzYuNDE4LS45NjEtMi4xNTUtMS4wMDQtMS42ODItLjU5NS0yLjExMi0uOTI2IDEuMDk1LTEuMjk1IDIuNzY4LTMuNTk4IDMuMjg0LTYuNzMzLjA1LS4zNDYuMTE1LS44MzQuMTA4LTEuMTE0LS4wMDQtLjE3MS4wMzUtLjIzOC4yMy0uMjU3YTQuMiA0LjIgMCAwIDAgMS41NDUtLjQ3NWMxLjM5Ny0uNzYzIDEuOTYtMi4wMTYgMi4wOTMtMy41MTcuMDItLjIzLS4wMDQtLjQ2Ny0uMjQ3LS41ODhNMTEuNTggMTguMTY4Yy0yLjA4OC0xLjY0Mi0zLjEwMS0yLjE4My0zLjUyLTIuMTYtLjM5LjAyNC0uMzIuNDcyLS4yMzQuNzYzLjA5LjI4OC4yMDcuNDg3LjM3MS43NC4xMTQuMTY3LjE5Mi40MTYtLjExMy42MDMtLjY3My40MTYtMS44NDItLjE0LTEuODk3LS4xNjgtMS4zNjEtLjgwMS0yLjUtMS44Ni0zLjMwMS0zLjMwNi0uNzc1LTEuMzkzLTEuMjI1LTIuODg4LTEuMjk5LTQuNDgyLS4wMi0uMzg1LjA5NC0uNTIyLjQ3Ny0uNTkyYTQuNyA0LjcgMCAwIDEgMS41My0uMDM4YzIuMTMxLjMxMSAzLjk0NiAxLjI2NCA1LjQ2NyAyLjc3NC44NjguODYgMS41MjUgMS44ODcgMi4yMDIgMi44OS43MiAxLjA2NiAxLjQ5NCAyLjA4MiAyLjQ4IDIuOTE1LjM0OC4yOTEuNjI2LjUxMy44OTIuNjc3LS44MDIuMDktMi4xNC4xMDktMy4wNTUtLjYxNXptMS4wMDEtNi40NGEuMzA2LjMwNiAwIDAgMSAuNDE1LS4yODcuMy4zIDAgMCAxIC4xMTMuMDc0LjMuMyAwIDAgMSAuMDg2LjIxNGMwIC4xNy0uMTM2LjMwNy0uMzA4LjMwN2EuMzAzLjMwMyAwIDAgMS0uMzA2LS4zMDdtMy4xMSAxLjU5NmMtLjIuMDgxLS40LjE1MS0uNTkxLjE2YTEuMjUgMS4yNSAwIDAgMS0uNzk4LS4yNTRjLS4yNzQtLjIzLS40Ny0uMzU4LS41NTEtLjc1OGExLjcgMS43IDAgMCAxIC4wMTUtLjU4OGMuMDctLjMyNy0uMDA3LS41MzctLjIzOC0uNzI3LS4xODgtLjE1Ni0uNDI2LS4xOTktLjY4OS0uMTk5YS42LjYgMCAwIDEtLjI1NC0uMDc4LjI1My4yNTMgMCAwIDEtLjExNC0uMzU4IDEgMSAwIDAgMSAuMTkyLS4yMWMuMzU2LS4yMDIuNzY3LS4xMzYgMS4xNDYuMDE2LjM1Mi4xNDQuNjE4LjQwOCAxLjAwMS43ODIuMzkyLjQ1MS40NjIuNTc2LjY4NS45MTUuMTc2LjI2NC4zMzYuNTM2LjQ0Ni44NDguMDY2LjE5NC0uMDIuMzUzLS4yNS40NSIvPjwvc3ZnPg=="
};
const modelProviderNames: Record<ModelProvider, string> = { claude: "Claude", openai: "OpenAI", gemini: "Gemini", deepseek: "DeepSeek" };
function modelProvider(name: string, provider = ""): ModelProvider | undefined {
  const explicit = provider.trim().toLowerCase().replace(/[^a-z0-9]+/g, "");
  if (provider.trim()) {
    const providers: Record<string, ModelProvider> = {
      anthropic: "claude", claude: "claude", claudecode: "claude",
      openai: "openai", google: "gemini", googlegemini: "gemini", googleaistudio: "gemini", gemini: "gemini",
      deepseek: "deepseek",
    };
    return providers[explicit];
  }
  const value = name.trim().toLowerCase();
  if (/^(?:anthropic\\/)?claude(?:$|[\\s-])/.test(value)) return "claude";
  if (/^(?:openai\\/)?(?:gpt[-\\s]?\\d|chatgpt(?:$|[\\s-])|o[134](?:$|[\\s-]))/.test(value)) return "openai";
  if (/^(?:google\\/)?gemini(?:$|[\\s-])/.test(value)) return "gemini";
  if (/^deepseek(?:$|[\\s-])/.test(value)) return "deepseek";
  return undefined;
}
const ProviderLogo = defineComponent({
  props: {
    model: { type: String, default: "" }, provider: { type: String, default: "" },
    size: { type: Number, default: 20 },
  },
  setup: props => () => {
    const provider = modelProvider(props.model, props.provider);
    const monochrome = provider !== "gemini";
    const markSize = Math.round(props.size * (provider === "openai" ? .82 : .58));
    return h("span", {
      class: ["model-provider-mark", { "is-color": provider && !monochrome }],
      "data-provider-logo": provider ?? "unknown", "aria-hidden": "true",
      title: provider ? \`\${modelProviderNames[provider]} logo\` : "Custom model",
      style: {
        display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        width: \`\${props.size}px\`, height: \`\${props.size}px\`, boxSizing: "border-box",
        border: "1px solid var(--provider-logo-border, #e5e5e8)",
        borderRadius: \`\${props.size >= 28 ? 9 : props.size >= 20 ? 6 : 4}px\`,
        background: "var(--provider-logo-surface, #fff)", color: "var(--provider-logo-muted, #a1a1aa)",
      },
    }, provider ? [h("img", {
      src: modelProviderAssets[provider], alt: "", "aria-hidden": "true",
      class: ["model-provider-image", { "is-monochrome": monochrome }],
      "data-logo-source": "bundled-brand-asset",
      style: { display: "block", objectFit: "contain", width: \`\${markSize}px\`, height: \`\${markSize}px\` },
    })] : [h(Cpu, { size: Math.round(props.size * .5), strokeWidth: 1.7, "aria-hidden": "true" })]);
  },
});

interface ModelOption {
  id: string;
  name: string;
  provider: string;
  description?: string;
  color?: string;
}

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    options?: ModelOption[];
  }>(),
  {
    modelValue: "claude-sonnet",
    options: () => [
      {
        id: "claude-sonnet",
        name: "Claude Sonnet 4",
        provider: "Anthropic",
        description: "General purpose",
        color: "#c58763",
      },
      {
        id: "gpt-4.1",
        name: "GPT-4.1",
        provider: "OpenAI",
        description: "Everyday reasoning",
        color: "#3b9b81",
      },
      {
        id: "gemini-pro",
        name: "Gemini 2.5 Pro",
        provider: "Google",
        description: "Complex tasks",
        color: "#648af4",
      },
      {
        id: "deepseek",
        name: "DeepSeek V3",
        provider: "DeepSeek",
        description: "Coding",
        color: "#6385f8",
      },
    ],
  },
);
const emit = defineEmits<{
  "update:modelValue": [id: string];
  select: [model: ModelOption];
}>();

const root = ref<HTMLElement | null>(null);
const searchInput = ref<HTMLInputElement | null>(null);
const trigger = ref<HTMLButtonElement | null>(null);
const listId = \`model-options-\${useId()}\`;
const activeIndex = ref(0);
const open = ref(false);
const query = ref("");
const currentId = ref(props.modelValue);
watch(
  () => props.modelValue,
  (value) => {
    currentId.value = value;
  },
);
watch(
  () => props.options,
  options => {
    if (!options.some(model => model.id === currentId.value))
      currentId.value = options[0]?.id ?? "";
    if (!options.length) close();
  },
  { immediate: true, deep: true },
);
const selected = computed(() => props.options.find(model => model.id === currentId.value));
const filtered = computed(() =>
  props.options.filter((model) =>
    \`\${model.name} \${model.provider}\`
      .toLowerCase()
      .includes(query.value.toLowerCase()),
  ),
);
watch(open, async (isOpen) => {
  if (isOpen) {
    activeIndex.value = Math.max(0, filtered.value.findIndex(model => model.id === currentId.value));
    await nextTick();
    if (open.value) searchInput.value?.focus();
  }
});

watch(filtered, () => { activeIndex.value = 0; });
function close(returnFocus = false) {
  open.value = false;
  if (returnFocus) void nextTick(() => trigger.value?.focus({ preventScroll: true }));
}
function retireMenu(element: Element) { element.setAttribute("inert", ""); }
function leaveMenu(event: FocusEvent) {
  if (!root.value?.contains(event.relatedTarget as Node | null)) close();
}
function onMenuKeydown(event: KeyboardEvent) {
  if (event.isComposing) return;
  if (event.key === "Enter" && event.target === searchInput.value) {
    event.preventDefault();
    const model = filtered.value[activeIndex.value];
    if (model) select(model);
    return;
  }
  if (!["ArrowDown", "ArrowUp"].includes(event.key) || !filtered.value.length) return;
  event.preventDefault();
  activeIndex.value = (activeIndex.value + (event.key === "ArrowDown" ? 1 : -1) + filtered.value.length) % filtered.value.length;
  searchInput.value?.focus({ preventScroll: true });
  void nextTick(() => document.getElementById(\`\${listId}-\${activeIndex.value}\`)?.scrollIntoView({ block: "nearest" }));
}
function select(model: ModelOption) {
  currentId.value = model.id;
  close(true);
  query.value = "";
  emit("update:modelValue", model.id);
  emit("select", model);
}
function closeOutside(event: PointerEvent) {
  if (!root.value?.contains(event.target as Node)) close();
}
onMounted(() => document.addEventListener("pointerdown", closeOutside));
onBeforeUnmount(() =>
  document.removeEventListener("pointerdown", closeOutside),
);
<\/script>

<template>
  <div ref="root" class="model-demo" @keydown.esc.stop.prevent="close(true)" @focusout="leaveMenu">
    <div class="model-label">
      <Cpu :size="16" /> Model settings
    </div>
    <button
      type="button"
      ref="trigger"
      class="model-trigger"
      aria-haspopup="listbox"
      :aria-controls="listId"
      @keydown.down.prevent="open = true"
      @keydown.up.prevent="open = true"
      :aria-expanded="open"
      aria-label="Select model"
      :disabled="!options.length"
      @click="open = !open"
    >
      <ProviderLogo :model="selected?.name ?? ''" :provider="selected?.provider ?? ''" :size="42" />
      <Transition name="model-current" mode="out-in">
        <span :key="selected?.id" class="model-name"
          ><strong>{{ selected?.name ?? "Select model" }}</strong
          ><small>{{ selected?.provider ?? "No model selected" }}</small></span
        >
      </Transition>
      <ChevronDown :size="17" class="chevron" :class="{ rotated: open }" />
    </button>
    <div class="model-description">
      {{ selected?.description ?? (options.length ? "Select model" : "No models available") }}
    </div>
    <Transition name="model-popup" @before-leave="retireMenu">
    <div v-if="open" class="model-menu" @keydown="onMenuKeydown">
      <label class="model-search"
        ><Search :size="16" /><input
          ref="searchInput"
          v-model="query"
          aria-label="Search models"
          placeholder="Search models…"
          aria-autocomplete="list"
          :aria-controls="listId"
          :aria-activedescendant="filtered[activeIndex] ? \`\${listId}-\${activeIndex}\` : undefined"
      /></label>
      <div :id="listId" class="model-options" role="listbox" aria-label="Models">
        <button
          type="button"
          v-for="(model, index) in filtered"
          :key="model.id"
          :id="\`\${listId}-\${index}\`"
          class="model-option"
          :class="{ 'keyboard-active': activeIndex === index }"
          @pointerenter="activeIndex = index"
          @focus="activeIndex = index"
          role="option"
          :aria-selected="currentId === model.id"
          @click="select(model)"
        >
          <ProviderLogo :model="model.name" :provider="model.provider" :size="24" /><span
            >{{ model.name }}<small>{{ model.provider }}</small></span
          ><Check
            v-if="currentId === model.id"
            :size="16"
            class="selected-check"
          />
        </button>
        <div v-if="!filtered.length" class="no-models">No matching models.</div>
      </div>
    </div>
    </Transition>
  </div>
</template>

<style scoped>
.model-demo {
  position: relative;
  width: 100%;
  padding: 22px;
  border: 1px solid var(--demo-border, #e8e8ed);
  border-radius: 16px;
  background: var(--demo-surface, #fff);
  color: var(--demo-text, #252529);
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  font-size: 13px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px #21182e03, 0 12px 28px #21182e05;
  max-width: 360px;
}
.model-demo * {
  box-sizing: border-box;
}
.model-label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  font-size: 12px;
  font-weight: 500;
  color: var(--demo-muted, #85858f);
  line-height: 1.5;
}
.model-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 14px;
  border: 1px solid var(--demo-border, #e8e8ed);
  border-radius: 10px;
  background: var(--demo-surface, #fff);
  color: inherit;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.16s;
}
.model-trigger:hover,
.model-trigger:focus-visible {
  border-color: var(--accent, #7b61ff);
  outline: none;
}
.model-trigger:disabled {
  cursor: default;
  opacity: 0.6;
}
.model-trigger:disabled:hover {
  border-color: var(--demo-border, #e8e8ed);
}
.model-name {
  display: grid;
  gap: 5px;
}
.model-name strong {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.02em;
}
.model-name small {
  font-size: 12px;
  color: var(--demo-muted, #85858f);
}
.chevron {
  margin-left: auto;
  color: var(--demo-muted, #85858f);
  transition: transform 380ms cubic-bezier(.22, 1.3, .36, 1);
}
.chevron.rotated {
  transform: rotate(180deg);
}
.model-description {
  margin-top: 16px;
  font-size: 13px;
  color: var(--demo-muted, #85858f);
  line-height: 1.6;
}
.model-menu {
  position: absolute;
  top: 61px;
  left: 21px;
  right: 21px;
  z-index: 5;
  overflow: hidden;
  border: 1px solid var(--demo-border, #e8e8ed);
  border-radius: 11px;
  background: var(--demo-surface, #fff);
  box-shadow: 0 10px 30px #15151d18;
  transform-origin: 50% 0;
}
.model-search {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 14px;
  border-bottom: 1px solid var(--demo-border, #e8e8ed);
  color: var(--demo-muted, #85858f);
}
.model-search input {
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--demo-text, #252529);
  font: inherit;
  font-size: 13px;
}
.model-options {
  max-height: 184px;
  padding: 5px;
  overflow: auto;
}
.model-option {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  border: 0;
  padding: 11px;
  border-radius: 7px;
  text-align: left;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 13px;
  cursor: pointer;
  transition: background 220ms ease, color 220ms ease;
  line-height: 1.4;
}

.model-option:hover,
.model-option.keyboard-active,
.model-option[aria-selected="true"] {
  background: var(--demo-bg, #fafafb);
}
.model-option > span:nth-child(2) {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
}
.model-option small {
  font-size: 12px;
  color: var(--demo-muted, #85858f);
}
.selected-check {
  color: var(--accent, #7b61ff);
}
.no-models {
  padding: 17px 8px;
  text-align: center;
  font-size: 13px;
  color: var(--demo-muted, #85858f);
}
.model-popup-enter-active { transition: opacity 300ms ease, transform 420ms cubic-bezier(.16, 1.25, .3, 1), filter 300ms ease; }
.model-popup-leave-active { pointer-events: none; transition: opacity 220ms ease, transform 260ms cubic-bezier(.16, 1, .3, 1), filter 220ms ease; }
.model-popup-enter-from { opacity: 0; transform: translateY(-8px) scale(.94); filter: blur(3px); }
.model-popup-leave-to { opacity: 0; transform: translateY(-4px) scale(.97); filter: blur(2px); }
.model-current-enter-active { transition: opacity 260ms ease, transform 350ms cubic-bezier(.16, 1, .3, 1); }
.model-current-leave-active { transition: opacity 130ms ease, transform 160ms ease; }
.model-current-enter-from { opacity: 0; transform: translateY(6px); }
.model-current-leave-to { opacity: 0; transform: translateY(-4px); }

.model-demo button:focus-visible { outline: 2px solid var(--accent, #7b61ff); outline-offset: 2px; }
.model-search:focus-within { box-shadow: inset 0 -2px 0 var(--accent, #7b61ff); }

@media (prefers-reduced-motion: reduce) {
  .model-popup-enter-active, .model-popup-leave-active,
  .model-current-enter-active, .model-current-leave-active,
  .chevron, .model-option { transition: none; }
  .model-popup-enter-from, .model-popup-leave-to,
  .model-current-enter-from, .model-current-leave-to { transform: none; filter: none; }
  .model-option:active { transform: none; }
}

:global(html.dark .model-provider-mark) {
  --provider-logo-border: #26262b;
  --provider-logo-surface: #141417;
  --provider-logo-muted: #a1a1aa;
}
:global(html.dark .model-provider-mark.is-color) { --provider-logo-surface: #fff; }
:global(html.dark .model-provider-image.is-monochrome) { filter: invert(1); }
</style>
`,kd=`<script lang="ts">
export interface SelectorOption {
  value: string;
  label: string;
  hint?: string;
  disabled?: boolean;
}

// Opening another instance dismisses the previous panel, including portals.
let closeOpenSelector: (() => void) | undefined;
<\/script>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useId, watch } from "vue";
import { Check, ChevronDown, Search } from "lucide-vue-next";

const props = withDefaults(defineProps<{
  modelValue?: string;
  options?: SelectorOption[];
  disabled?: boolean;
  invalid?: boolean;
  placeholder?: string;
  emptyText?: string;
  ariaLabel?: string;
  searchable?: boolean;
  searchPlaceholder?: string;
  allowCustom?: boolean;
  customPosition?: "first" | "last";
  loading?: boolean;
  size?: "sm" | "md";
  variant?: "outline" | "ghost";
}>(), {
  options: () => [], disabled: false, invalid: false,
  placeholder: "Select an option", emptyText: "No matching options",
  ariaLabel: "Select an option", searchable: false, searchPlaceholder: "Search options…",
  allowCustom: false, customPosition: "first", loading: false,
  size: "md", variant: "outline",
});
const emit = defineEmits<{ "update:modelValue": [value: string] }>();
const instanceId = \`selector-\${useId().replace(/:/g, "")}\`;
const listboxId = \`\${instanceId}-listbox\`;
const optionId = (index: number) => \`\${instanceId}-option-\${index}\`;
const root = ref<HTMLElement>();
const trigger = ref<HTMLButtonElement>();
const panel = ref<HTMLElement>();
const list = ref<HTMLElement>();
const optionsContainer = ref<HTMLElement>();
const searchInput = ref<HTMLInputElement>();
const open = ref(false);
const search = ref("");
const scrolling = ref(false);
const localValue = ref("");
const currentValue = computed(() => props.modelValue === undefined ? localValue.value : props.modelValue);
const matched = computed(() => props.options.find(option => option.value === currentValue.value));
const isPlaceholder = computed(() => !matched.value && !(props.allowCustom && currentValue.value));
const selectedLabel = computed(() => matched.value?.label ?? (props.allowCustom && currentValue.value ? currentValue.value : props.placeholder));
const panelStyle = ref<Record<string, string>>({ visibility: "hidden" });
const activeIndex = ref(-1);
const highlightStyle = ref<Record<string, string>>({ opacity: "0" });
let placement: "above" | "below" | undefined;
let motionGeneration = 0;
let panelMotion: { animation: Animation; element: HTMLElement; opening: boolean } | undefined;
let motionPreference: MediaQueryList | undefined;
let panelPositioned = false;
let positionFrame = 0;
let scrollTimer: ReturnType<typeof setTimeout> | undefined;
let observer: ResizeObserver | undefined;
let disposed = false;

const rows = computed(() => {
  const query = props.searchable ? search.value.trim().toLowerCase() : "";
  const options = props.options.filter(option => !query || [option.label, option.value, option.hint || ""].some(value => value.toLowerCase().includes(query)))
    .map(option => ({ ...option, custom: false }));
  const customValue = props.searchable && props.allowCustom ? search.value.trim() : "";
  const custom = customValue && !props.options.some(option => option.value === customValue)
    ? [{ value: customValue, label: customValue, hint: "", disabled: false, custom: true }]
    : [];
  return props.customPosition === "last" ? [...options, ...custom] : [...custom, ...options];
});
const enabledIndices = computed(() => rows.value.flatMap((row, index) => row.disabled ? [] : [index]));
const activeDescendant = computed(() => open.value && rows.value[activeIndex.value] && !rows.value[activeIndex.value]!.disabled ? optionId(activeIndex.value) : undefined);

// Text interpolation keeps both labels and the highlighted query safe HTML.
function highlightParts(text: string) {
  const query = props.searchable ? search.value.trim() : "";
  const index = query ? text.toLowerCase().indexOf(query.toLowerCase()) : -1;
  return index < 0 ? { before: text, match: "", after: "" }
    : { before: text.slice(0, index), match: text.slice(index, index + query.length), after: text.slice(index + query.length) };
}

function anchorVisible(element: HTMLElement, rect: DOMRect) {
  if (!element.isConnected || rect.width <= 0 || rect.height <= 0 || element.closest('[inert], [hidden], [aria-hidden="true"]')) return false;
  let left = Math.max(0, rect.left), right = Math.min(innerWidth, rect.right);
  let top = Math.max(0, rect.top), bottom = Math.min(innerHeight, rect.bottom);
  for (let ancestor = element.parentElement; ancestor; ancestor = ancestor.parentElement) {
    const style = getComputedStyle(ancestor);
    const box = ancestor.getBoundingClientRect();
    if (/auto|scroll|hidden|clip/.test(style.overflowX)) {
      left = Math.max(left, box.left + ancestor.clientLeft);
      right = Math.min(right, box.left + ancestor.clientLeft + ancestor.clientWidth);
    }
    if (/auto|scroll|hidden|clip/.test(style.overflowY)) {
      top = Math.max(top, box.top + ancestor.clientTop);
      bottom = Math.min(bottom, box.top + ancestor.clientTop + ancestor.clientHeight);
    }
    if (left >= right || top >= bottom) return false;
  }
  return left < right && top < bottom;
}

function placePanel(animateSize = false) {
  if (!open.value || !trigger.value || !panel.value) return;
  const rect = trigger.value.getBoundingClientRect();
  if (!anchorVisible(trigger.value, rect)) { closePanel(); return; }
  const viewport = window.visualViewport;
  const margin = 8, gap = 6, limit = 288;
  const viewportLeft = viewport?.offsetLeft || 0, viewportTop = viewport?.offsetTop || 0;
  const viewportWidth = viewport?.width || innerWidth, viewportHeight = viewport?.height || innerHeight;
  const headerHeight = panel.value.querySelector<HTMLElement>(".selector-search-bar")?.offsetHeight || 0;
  const naturalHeight = Math.min(limit, headerHeight + (optionsContainer.value?.offsetHeight || 0) + 10);
  const below = Math.max(0, viewportTop + viewportHeight - rect.bottom - gap - margin);
  const above = Math.max(0, rect.top - viewportTop - gap - margin);
  // Filtering keeps the current side, so the search field never changes sides.
  const flip = placement && animateSize ? placement === "above" : below < naturalHeight && above > below;
  placement = flip ? "above" : "below";
  const maxHeight = Math.min(limit, flip ? above : below);
  const height = Math.min(naturalHeight, maxHeight);
  const width = Math.min(props.variant === "ghost" ? Math.max(168, rect.width) : rect.width, Math.max(0, viewportWidth - margin * 2));
  const left = Math.max(viewportLeft + margin, Math.min(rect.left, viewportLeft + viewportWidth - width - margin));
  const top = Math.max(viewportTop + margin, Math.min(flip ? rect.top - gap - height : rect.bottom + gap, viewportTop + viewportHeight - height - margin));
  panelStyle.value = { "--selector-size-duration": animateSize && panelPositioned ? "200ms" : "0ms", "--selector-offset": flip ? "5px" : "-5px", "--selector-origin": flip ? "bottom" : "top", position: "fixed", top: \`\${Math.round(top)}px\`, left: \`\${Math.round(left)}px\`, width: \`\${Math.round(width)}px\`, height: \`\${Math.round(height)}px\`, maxHeight: \`\${Math.floor(maxHeight)}px\`, visibility: "visible", zIndex: "60" };
}

function measureHighlight(animate = true) {
  if (!open.value || !panelPositioned) return;
  const option = document.getElementById(optionId(activeIndex.value));
  if (!option || !optionsContainer.value?.contains(option)) { highlightStyle.value = { opacity: "0" }; return; }
  highlightStyle.value = {
    transform: \`translateY(\${option.offsetTop}px)\`, height: \`\${option.offsetHeight}px\`, opacity: "1",
    "--selector-highlight-duration": animate ? "190ms" : "0ms",
  };
}
function revealActiveOption(animate = false) {
  if (!open.value || !panelPositioned || !list.value) return;
  const option = document.getElementById(optionId(activeIndex.value));
  if (!option) return;
  // Scroll only the list. scrollIntoView could also move the page or a dialog.
  const optionRect = option.getBoundingClientRect(), listRect = list.value.getBoundingClientRect();
  let delta = 0;
  if (optionRect.top < listRect.top + 4) delta = optionRect.top - listRect.top - 4;
  else if (optionRect.bottom > listRect.bottom - 4) delta = optionRect.bottom - listRect.bottom + 4;
  if (delta) list.value.scrollTo({ top: list.value.scrollTop + delta, behavior: animate && !motionPreference?.matches && Math.abs(delta) < list.value.clientHeight ? "smooth" : "instant" });
}
function onListScroll() {
  scrolling.value = true;
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => { scrolling.value = false; }, 650);
}
function schedulePosition(event?: Event) {
  if (!open.value || (event?.target instanceof Node && panel.value?.contains(event.target))) return;
  cancelAnimationFrame(positionFrame);
  positionFrame = requestAnimationFrame(() => { positionFrame = 0; placePanel(); });
}
async function openPanel(edge?: "first" | "last") {
  if (props.disabled || disposed) return;
  if (closeOpenSelector !== closePanel) closeOpenSelector?.();
  closeOpenSelector = closePanel;
  const reversing = Boolean(panelMotion && !panelMotion.opening);
  panelPositioned = reversing;
  if (!reversing) {
    placement = undefined;
    panelStyle.value = { position: "fixed", visibility: "hidden" };
  }
  search.value = "";
  open.value = true;
  const selectedIndex = rows.value.findIndex(row => row.value === currentValue.value && !row.disabled);
  activeIndex.value = edge === "last" ? enabledIndices.value.at(-1) ?? -1 : edge === "first" ? enabledIndices.value[0] ?? -1 : selectedIndex >= 0 ? selectedIndex : enabledIndices.value[0] ?? -1;
  await nextTick();
  if (!open.value || disposed) return;
  placePanel(reversing);
  await nextTick();
  if (!open.value || disposed) return;
  panelPositioned = true;
  revealActiveOption();
  searchInput.value?.focus({ preventScroll: true });
  measureHighlight(false);
  if (optionsContainer.value) observer?.observe(optionsContainer.value);
}
function closePanel(restoreFocus = false) {
  if (closeOpenSelector === closePanel) closeOpenSelector = undefined;
  cancelAnimationFrame(positionFrame);
  positionFrame = 0;
  if (optionsContainer.value) observer?.unobserve(optionsContainer.value);
  open.value = false;
  panelPositioned = false;
  clearTimeout(scrollTimer);
  scrolling.value = false;
  // Keep the rendered results intact until the exit has actually finished.
  if (restoreFocus && !disposed) trigger.value?.focus({ preventScroll: true });
}
function freezePanel(element: Element) {
  motionGeneration++;
  if (!panelMotion || panelMotion.element !== element) return;
  const style = getComputedStyle(element);
  const opacity = style.opacity, transform = style.transform;
  panelMotion.animation.cancel();
  (element as HTMLElement).style.opacity = opacity;
  (element as HTMLElement).style.transform = transform;
  panelMotion = undefined;
}
function animatePanel(element: HTMLElement, opening: boolean, done: () => void) {
  const style = getComputedStyle(element);
  const opacity = Number.parseFloat(style.opacity);
  const target = { opacity: opening ? "1" : "0", transform: opening ? "translateY(0)" : \`translateY(\${placement === "above" ? 5 : -5}px)\` };
  if (motionPreference?.matches || document.hidden) { Object.assign(element.style, target); done(); return; }
  const animation = element.animate([{ opacity: style.opacity, transform: style.transform }, target], {
    duration: Math.max(65, (opening ? 220 : 130) * Math.abs((opening ? 1 : 0) - opacity)),
    easing: opening ? "cubic-bezier(.16,1,.3,1)" : "cubic-bezier(.4,0,1,1)", fill: "both",
  });
  panelMotion = { animation, element, opening };
  void animation.finished.then(() => {
    if (panelMotion?.animation !== animation) return;
    Object.assign(element.style, target);
    panelMotion = undefined;
    animation.cancel();
    done();
  }, () => {});
}
async function enterPanel(element: Element, done: () => void) {
  freezePanel(element);
  const generation = motionGeneration;
  await nextTick();
  await nextTick();
  if (!open.value || disposed || generation !== motionGeneration) return;
  animatePanel(element as HTMLElement, true, done);
}
function leavePanel(element: Element, done: () => void) {
  freezePanel(element);
  element.setAttribute("aria-hidden", "true");
  (element as HTMLElement).inert = true;
  animatePanel(element as HTMLElement, false, done);
}
function afterPanelLeave() {
  if (open.value) return;
  search.value = "";
  placement = undefined;
}
function onMotionChange() { if (motionPreference?.matches) panelMotion?.animation.finish(); }
function choose(index: number) {
  const row = rows.value[index];
  if (!open.value || props.disabled || !row || row.disabled) return;
  if (props.modelValue === undefined) localValue.value = row.value;
  emit("update:modelValue", row.value);
  closePanel(true);
}
function togglePanel(event: MouseEvent) {
  event.stopPropagation();
  if (open.value) closePanel(); else void openPanel();
}
function moveActive(delta: number) {
  const indices = enabledIndices.value;
  const index = indices.indexOf(activeIndex.value);
  activeIndex.value = indices.length ? indices[(index + delta + indices.length) % indices.length]! : -1;
}
function handleListKeydown(event: KeyboardEvent) {
  if (!open.value || props.disabled || event.isComposing || event.keyCode === 229 || event.ctrlKey || event.metaKey || event.altKey) return;
  if (event.key === "Tab") {
    if (panel.value?.contains(document.activeElement)) trigger.value?.focus({ preventScroll: true });
    closePanel();
    return; // Let Tab continue in the trigger's original form order.
  }
  if (event.key === "Escape") { event.preventDefault(); event.stopPropagation(); closePanel(true); return; }
  if (["ArrowDown", "ArrowUp"].includes(event.key)) {
    event.preventDefault(); event.stopPropagation(); moveActive(event.key === "ArrowDown" ? 1 : -1); return;
  }
  if (["Home", "End"].includes(event.key) && event.target !== searchInput.value) {
    event.preventDefault(); event.stopPropagation(); activeIndex.value = event.key === "Home" ? enabledIndices.value[0] ?? -1 : enabledIndices.value.at(-1) ?? -1; return;
  }
  if (event.key === "Enter" || (event.key === " " && !props.searchable)) {
    event.preventDefault(); event.stopPropagation(); choose(activeIndex.value);
  }
}
function onTriggerKeydown(event: KeyboardEvent) {
  if (props.disabled || open.value || event.isComposing || event.keyCode === 229 || event.ctrlKey || event.metaKey || event.altKey) return;
  if (["ArrowDown", "ArrowUp", "Home", "End", "Enter", " "].includes(event.key)) {
    event.preventDefault(); event.stopPropagation();
    void openPanel(event.key === "Home" ? "first" : event.key === "End" ? "last" : undefined);
  }
}
function onDocumentKeydown(event: KeyboardEvent) {
  const target = event.target;
  if (target instanceof Node && (root.value?.contains(target) || panel.value?.contains(target))) handleListKeydown(event);
}
function onOutsidePointer(event: PointerEvent) {
  const target = event.target;
  if (target instanceof Node && !root.value?.contains(target) && !panel.value?.contains(target)) closePanel();
}
function onFocusin(event: FocusEvent) {
  const target = event.target;
  if (open.value && target instanceof Node && !root.value?.contains(target) && !panel.value?.contains(target)) closePanel();
}
function onVisibilityChange() { if (document.hidden) closePanel(); }
watch([rows, search], ([next, query], [previous, previousQuery]) => {
  const previousValue = previous?.[activeIndex.value]?.value;
  const index = query === previousQuery ? next.findIndex(row => row.value === previousValue && !row.disabled) : -1;
  activeIndex.value = index >= 0 ? index : enabledIndices.value[0] ?? -1;
  if (open.value) void nextTick(() => { placePanel(true); revealActiveOption(); measureHighlight(false); });
});
watch(activeIndex, () => { if (open.value) void nextTick(() => { revealActiveOption(true); measureHighlight(); }); });
watch(() => props.disabled, disabled => { if (disabled) closePanel(); }, { flush: "sync" });
watch(() => props.searchable, () => closePanel());
onMounted(() => {
  motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  motionPreference.addEventListener("change", onMotionChange);
  observer = new ResizeObserver(entries => {
    if (!open.value) return;
    if (entries.some(entry => entry.target === root.value)) schedulePosition();
    else { placePanel(true); measureHighlight(false); }
  });
  if (root.value) observer.observe(root.value);
  document.addEventListener("pointerdown", onOutsidePointer, true);
  document.addEventListener("keydown", onDocumentKeydown, true);
  document.addEventListener("focusin", onFocusin);
  document.addEventListener("visibilitychange", onVisibilityChange);
  window.addEventListener("scroll", schedulePosition, true);
  window.addEventListener("resize", schedulePosition);
  window.visualViewport?.addEventListener("resize", schedulePosition);
  window.visualViewport?.addEventListener("scroll", schedulePosition);
});
onBeforeUnmount(() => {
  disposed = true;
  closePanel();
  if (panel.value) freezePanel(panel.value);
  motionPreference?.removeEventListener("change", onMotionChange);
  observer?.disconnect();
  document.removeEventListener("pointerdown", onOutsidePointer, true);
  document.removeEventListener("keydown", onDocumentKeydown, true);
  document.removeEventListener("focusin", onFocusin);
  document.removeEventListener("visibilitychange", onVisibilityChange);
  window.removeEventListener("scroll", schedulePosition, true);
  window.removeEventListener("resize", schedulePosition);
  window.visualViewport?.removeEventListener("resize", schedulePosition);
  window.visualViewport?.removeEventListener("scroll", schedulePosition);
});
<\/script>

<template>
  <div ref="root" class="selector" :class="[\`selector--\${size}\`, \`selector--\${variant}\`, { 'is-open': open, 'is-invalid': invalid }]">
    <button ref="trigger" type="button" class="selector-trigger" :disabled="disabled" :role="searchable ? undefined : 'combobox'" aria-haspopup="listbox" :aria-expanded="open" :aria-controls="open ? listboxId : undefined" :aria-activedescendant="searchable ? undefined : activeDescendant" :aria-invalid="invalid || undefined" :aria-label="ariaLabel" @click="togglePanel" @keydown="onTriggerKeydown">
      <slot name="leading" :value="currentValue" />
      <span class="selector-value" :class="{ 'is-placeholder': isPlaceholder }">{{ selectedLabel }}</span>
      <ChevronDown class="selector-chevron" :size="14" aria-hidden="true" />
    </button>
    <Teleport to="body">
      <Transition :css="false" @enter="enterPanel" @leave="leavePanel" @enter-cancelled="freezePanel" @leave-cancelled="freezePanel" @after-leave="afterPanelLeave">
        <div v-show="open" ref="panel" class="selector-panel" :inert="!open || undefined" :aria-hidden="!open || undefined" :class="[\`selector-panel--\${size}\`, \`selector-panel--\${variant}\`]" :style="panelStyle" @click.stop>
          <div v-if="searchable" class="selector-search-bar">
            <Search :size="14" aria-hidden="true" />
            <input ref="searchInput" v-model="search" class="selector-search" type="search" role="combobox" aria-autocomplete="list" :aria-expanded="open" :aria-controls="listboxId" :aria-activedescendant="activeDescendant" :aria-label="searchPlaceholder" :placeholder="searchPlaceholder" autocomplete="off" />
          </div>
          <div :id="listboxId" ref="list" class="selector-list" :data-scrolling="scrolling || undefined" @scroll.passive="onListScroll" role="listbox" :aria-label="ariaLabel" :aria-busy="loading || undefined">
            <div ref="optionsContainer" class="selector-options">
            <span class="selector-highlight" :style="highlightStyle" aria-hidden="true" />
            <button v-for="(row, index) in rows" :id="optionId(index)" :key="\`\${row.custom ? 'custom' : 'option'}:\${row.value}\`" class="selector-option" :class="{ 'is-active': index === activeIndex, 'is-selected': row.value === currentValue }" type="button" role="option" tabindex="-1" :disabled="row.disabled" :aria-selected="row.value === currentValue" @pointermove="!row.disabled && (activeIndex = index)" @pointerdown.prevent @click.stop="choose(index)">
              <slot name="option-leading" :option="row" />
              <span v-if="row.custom" class="selector-option-label">Use “{{ row.value }}”</span>
              <span v-else class="selector-option-label">{{ highlightParts(row.label).before }}<mark v-if="highlightParts(row.label).match">{{ highlightParts(row.label).match }}</mark>{{ highlightParts(row.label).after }}</span>
              <span v-if="row.hint" class="selector-option-hint">{{ highlightParts(row.hint).before }}<mark v-if="highlightParts(row.hint).match">{{ highlightParts(row.hint).match }}</mark>{{ highlightParts(row.hint).after }}</span>
              <Check class="selector-check" :class="{ 'is-visible': row.value === currentValue }" :size="14" aria-hidden="true" />
            </button>
            <p v-if="!rows.length" class="selector-empty" role="status">{{ loading ? 'Loading options…' : emptyText }}</p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.selector, .selector-panel {
  --selector-bg: var(--demo-surface, #fff);
  --selector-fg: var(--demo-text, #252529);
  --selector-muted: var(--demo-muted, #6b6b76);
  --selector-border: var(--demo-border, #e8e8ed);
  --selector-accent: var(--accent, #7b61ff);
  --selector-hover: color-mix(in srgb, var(--selector-fg) 5%, var(--selector-bg));
  --selector-active: color-mix(in srgb, var(--selector-accent) 9%, var(--selector-bg));
  box-sizing: border-box;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  color: var(--selector-fg);
}
.selector *, .selector-panel * { box-sizing: border-box; }
.selector { width: 100%; min-width: 0; }
.selector-trigger { display: flex; align-items: center; gap: 8px; width: 100%; min-width: 0; min-height: 38px; padding: 8px 12px; border: 1px solid var(--selector-border); border-radius: 8px; background: var(--selector-bg); color: var(--selector-fg); font: inherit; line-height: 20px; text-align: left; cursor: pointer; transition: border-color 160ms, background-color 160ms; }
.selector-trigger:hover:not(:disabled) { border-color: color-mix(in srgb, var(--selector-fg) 24%, var(--selector-border)); }
.selector-trigger:focus-visible { outline: 2px solid color-mix(in srgb, var(--selector-accent) 55%, transparent); outline-offset: 2px; }
.selector.is-open .selector-trigger { border-color: var(--selector-accent); }
.selector-trigger:disabled { opacity: .5; cursor: default; }
.selector-value { flex: 1; min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.selector-value.is-placeholder, .selector-chevron { color: var(--selector-muted); }
.selector-chevron { flex: 0 0 auto; transition: transform 220ms cubic-bezier(.16,1,.3,1); }
.is-open .selector-chevron { transform: rotate(180deg); }
.selector--sm { font-size: 12px; }
.selector--sm .selector-trigger { min-height: 32px; padding: 5px 10px; }
.selector--ghost .selector-trigger { min-height: 36px; padding: 5px 8px; border-color: transparent; background: transparent; color: var(--selector-muted); }
.selector--ghost .selector-trigger:hover:not(:disabled) { border-color: var(--selector-border); background: var(--selector-hover); color: var(--selector-fg); }
.selector--ghost.is-open .selector-trigger { border-color: color-mix(in srgb, var(--selector-accent) 35%, transparent); background: color-mix(in srgb, var(--selector-accent) 4%, var(--selector-bg)); }
.selector--ghost.selector--sm .selector-trigger { min-height: 30px; padding-block: 4px; }
.selector.is-invalid .selector-trigger, .selector.is-invalid .selector-trigger:hover, .selector.is-invalid.is-open .selector-trigger { border-color: #c17a72; }
.selector-panel { display: flex; flex-direction: column; overflow: hidden; border: 1px solid var(--selector-border); border-radius: 8px; background: var(--selector-bg); box-shadow: 0 8px 28px #00000012, 0 2px 8px #00000006; text-align: left; opacity: 0; transform: translateY(var(--selector-offset, -5px)); transform-origin: center var(--selector-origin, top); transition: height var(--selector-size-duration, 0ms) cubic-bezier(.16,1,.3,1), top var(--selector-size-duration, 0ms) cubic-bezier(.16,1,.3,1); }
.selector-panel--ghost { box-shadow: 0 6px 20px #0000001a; }
.selector-panel--sm { font-size: 12px; }
.selector-search-bar { display: flex; align-items: center; flex: 0 0 auto; gap: 7px; min-width: 0; padding: 8px 10px; border-bottom: 1px solid var(--selector-border); color: var(--selector-muted); }
.selector-search-bar > svg { flex: 0 0 auto; }
.selector-search { width: 100%; min-width: 0; height: 28px; padding: 0; border: 0; border-radius: 0; outline: none; background: transparent; color: var(--selector-fg); font: inherit; font-size: 12px; line-height: 20px; }
.selector-search::placeholder { color: var(--selector-muted); }
.selector-search::-webkit-search-cancel-button { appearance: none; }
.selector-list { min-height: 0; overflow-y: auto; padding: 4px; scrollbar-width: thin; scrollbar-color: transparent transparent; overscroll-behavior: contain; }
.selector-options { position: relative; min-width: 0; isolation: isolate; }
.selector-highlight { position: absolute; z-index: -1; top: 0; left: 0; width: 100%; border-radius: 6px; background: var(--selector-active); pointer-events: none; transition: transform var(--selector-highlight-duration, 0ms) cubic-bezier(.16,1,.3,1), height var(--selector-highlight-duration, 0ms) cubic-bezier(.16,1,.3,1), opacity 100ms ease; }
.selector-option { position: relative; display: flex; align-items: center; gap: 8px; width: 100%; min-width: 0; min-height: 36px; padding: 8px 10px; border: 0; border-radius: 6px; background: transparent; color: var(--selector-muted); font: inherit; line-height: 20px; text-align: left; cursor: pointer; transition: color 100ms ease; }
.selector-option:hover:not(:disabled) { color: var(--selector-fg); }
.selector-option.is-active:not(:disabled) { color: var(--selector-fg); }
.selector-option.is-selected { color: var(--selector-accent); }
.selector-option:disabled { opacity: .4; cursor: default; }
.selector-option-label { min-width: 0; flex: 1; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.selector-option-hint { min-width: 0; max-width: 38%; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-size: 11px; color: var(--selector-muted); }
.selector-check { flex: 0 0 auto; color: var(--selector-accent); visibility: hidden; }
.selector-check.is-visible { visibility: visible; }
.selector-panel mark { padding: 0; border-radius: 2px; background: color-mix(in srgb, var(--selector-accent) 25%, transparent); color: inherit; }
.selector-panel--ghost .selector-option { min-height: 32px; padding-block: 6px; }
.selector-empty { margin: 0; padding: 16px 10px; color: var(--selector-muted); font-size: 12px; line-height: 20px; text-align: center; }
.selector-list:is(:hover, :focus-within, [data-scrolling]) { scrollbar-color: color-mix(in srgb, var(--selector-muted) 28%, transparent) transparent; }
.selector-list::-webkit-scrollbar { width: 4px; height: 4px; }
.selector-list::-webkit-scrollbar-track, .selector-list::-webkit-scrollbar-thumb { background: transparent; }
.selector-list:is(:hover, :focus-within, [data-scrolling])::-webkit-scrollbar-thumb { background: color-mix(in srgb, var(--selector-muted) 28%, transparent); border-radius: 999px; }
.selector-list::-webkit-scrollbar-button { display: none; width: 0; height: 0; }
@supports selector(::-webkit-scrollbar) { .selector-list, .selector-list:is(:hover, :focus-within, [data-scrolling]) { scrollbar-width: auto; scrollbar-color: auto; } }
@media (max-width: 767px), (pointer: coarse) { .selector-trigger, .selector--sm .selector-trigger, .selector--ghost .selector-trigger, .selector--ghost.selector--sm .selector-trigger, .selector-option, .selector-panel--ghost .selector-option { min-height: 44px; } }
@media (prefers-reduced-motion: reduce) { .selector-trigger, .selector-chevron, .selector-option, .selector-panel, .selector-highlight { transition: none; } }
</style>
`,Sd=`<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, onUpdated, ref, watch } from 'vue'

interface TabItem { value: string; label: string; disabled?: boolean; count?: number }
const props = withDefaults(defineProps<{
  modelValue?: string
  items?: TabItem[]
  label?: string
}>(), {
  items: () => [
    { value: 'all', label: 'All' },
    { value: 'running', label: 'Running' },
    { value: 'waiting', label: 'Needs input' },
    { value: 'completed', label: 'Completed' },
  ],
  label: 'Task status',
})
const emit = defineEmits<{
  'update:modelValue': [value: string]
  change: [value: string]
}>()
const enabled = computed(() => props.items.filter(item => !item.disabled))
const localValue = ref(props.modelValue ?? enabled.value[0]?.value ?? '')
const current = computed(() => props.modelValue ?? localValue.value)
const focusValue = computed(() => enabled.value.find(item => item.value === current.value)?.value ?? enabled.value[0]?.value ?? '')
const track = ref<HTMLElement>()
const indicator = ref<Record<string, string>>({ opacity: '0' })
const ready = ref(false)
const observed = new Set<Element>()
let observer: ResizeObserver | undefined
let readyFrame = 0
let disposed = false

function buttonFor(value: string) {
  return [...(track.value?.querySelectorAll<HTMLButtonElement>('button') ?? [])].find(button => button.dataset.tabValue === value)
}
function measure() {
  const root = track.value
  if (!root || disposed) return
  const targets = new Set<Element>([root, ...root.querySelectorAll('button')])
  observed.forEach(element => {
    if (!targets.has(element)) { observer?.unobserve(element); observed.delete(element) }
  })
  targets.forEach(element => {
    if (observer && !observed.has(element)) { observer.observe(element); observed.add(element) }
  })
  const active = root.querySelector<HTMLElement>('[aria-selected="true"]')
  if (!active) {
    if (indicator.value.opacity !== '0') indicator.value = { opacity: '0' }
    return
  }
  const bounds = root.getBoundingClientRect()
  const button = active.getBoundingClientRect()
  const scaleX = root.offsetWidth ? bounds.width / root.offsetWidth : 1
  const scaleY = root.offsetHeight ? bounds.height / root.offsetHeight : 1
  if (!button.width || !button.height || !scaleX || !scaleY) return
  const next = {
    opacity: '1',
    transform: \`translate3d(\${(button.left - bounds.left) / scaleX - root.clientLeft + root.scrollLeft}px, \${(button.top - bounds.top) / scaleY - root.clientTop + root.scrollTop}px, 0)\`,
    width: \`\${button.width / scaleX}px\`,
    height: \`\${button.height / scaleY}px\`,
  }
  if (Object.keys(next).some(key => indicator.value[key] !== next[key as keyof typeof next])) indicator.value = next
}
async function select(item: TabItem, moveFocus = false) {
  if (item.disabled) return
  if (current.value !== item.value) {
    if (props.modelValue === undefined) localValue.value = item.value
    emit('update:modelValue', item.value)
    emit('change', item.value)
  }
  await nextTick()
  if (disposed) return
  measure()
  if (moveFocus) buttonFor(item.value)?.focus({ preventScroll: true })
}
function onKeydown(event: KeyboardEvent) {
  if (event.altKey || event.ctrlKey || event.metaKey || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
  if (!enabled.value.length) return
  event.preventDefault()
  const focused = (event.target as HTMLElement).closest<HTMLButtonElement>('[role="tab"]')?.dataset.tabValue
  const index = enabled.value.findIndex(item => item.value === (focused ?? current.value))
  const rtl = track.value && getComputedStyle(track.value).direction === 'rtl'
  const forward = event.key === (rtl ? 'ArrowLeft' : 'ArrowRight')
  const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? enabled.value.length - 1
    : index < 0 ? (forward ? 0 : enabled.value.length - 1)
      : (index + (forward ? 1 : -1) + enabled.value.length) % enabled.value.length
  const item = enabled.value[nextIndex]
  if (item) void select(item, true)
}
watch(() => props.items, () => {
  if (props.modelValue === undefined && !enabled.value.some(item => item.value === localValue.value)) localValue.value = enabled.value[0]?.value ?? ''
}, { deep: true })
watch(() => props.modelValue, value => {
  if (value !== undefined) localValue.value = value
  else if (!enabled.value.some(item => item.value === localValue.value)) localValue.value = enabled.value[0]?.value ?? ''
})
watch(() => [props.modelValue, props.items], () => nextTick(measure), { deep: true })
onMounted(() => {
  if (typeof ResizeObserver !== 'undefined') observer = new ResizeObserver(measure)
  measure()
  window.addEventListener('resize', measure)
  void document.fonts?.ready.then(() => { if (!disposed) measure() })
  readyFrame = requestAnimationFrame(() => { if (!disposed) ready.value = true })
})
onUpdated(measure)
onBeforeUnmount(() => {
  disposed = true
  observer?.disconnect()
  observed.clear()
  window.removeEventListener('resize', measure)
  cancelAnimationFrame(readyFrame)
})
<\/script>


<template>
  <div ref="track" class="sliding-tabs-demo" :class="{ 'is-ready': ready }" role="tablist" aria-orientation="horizontal" :aria-label="label" @keydown="onKeydown">
    <span class="sliding-tabs-indicator" :style="indicator" aria-hidden="true" />
    <button
      v-for="item in items"
      :key="item.value"
      type="button"
      role="tab"
      :data-tab-value="item.value"
      :aria-selected="current === item.value && !item.disabled"
      :tabindex="!item.disabled && focusValue === item.value ? 0 : -1"
      :disabled="item.disabled"
      @click="select(item)"
    >
      <span>{{ item.label }}</span><span v-if="item.count !== undefined" class="sliding-tab-count">{{ item.count }}</span>
    </button>
  </div>
</template>

<style scoped>
.sliding-tabs-demo { --tab-spring: cubic-bezier(.22, 1.15, .36, 1); display: flex; align-items: stretch; position: relative; isolation: isolate; width: 100%; max-width: 360px; min-height: 48px; padding: 4px; border-radius: 11px; background: color-mix(in srgb, var(--demo-text, #252529) 5%, var(--demo-surface, #fff)); font-family: Inter, ui-sans-serif, system-ui, sans-serif; box-sizing: border-box; }
.sliding-tabs-demo * { box-sizing: border-box; }
.sliding-tabs-indicator { position: absolute; z-index: 0; top: 0; left: 0; border: 1px solid color-mix(in srgb, var(--demo-text, #252529) 3%, transparent); border-radius: 8px; background: var(--demo-surface, #fff); box-shadow: 0 1px 3px #18181b0a, 0 2px 5px #18181b06; pointer-events: none; }
.is-ready .sliding-tabs-indicator { transition: transform 440ms var(--tab-spring), width 440ms var(--tab-spring), height 440ms var(--tab-spring); }
.sliding-tabs-demo button { display: inline-flex; align-items: center; justify-content: center; gap: 6px; position: relative; z-index: 1; flex: 1 1 auto; min-width: 0; min-height: 40px; padding: 8px 6px; border: 0; border-radius: 7px; background: transparent; color: var(--demo-muted, #85858f); font-family: inherit; font-size: 14px; font-weight: 400; line-height: 22px; white-space: nowrap; cursor: pointer; transition: color 180ms ease; -webkit-tap-highlight-color: transparent; }
.sliding-tabs-demo button[aria-selected="true"] { color: var(--demo-text, #252529); font-weight: 500; }
.sliding-tabs-demo button:not(:disabled):hover { color: var(--demo-text, #252529); }
.sliding-tabs-demo button:disabled { opacity: .38; cursor: not-allowed; }
.sliding-tabs-demo button:focus-visible { outline: 2px solid var(--accent, #7b61ff); outline-offset: -2px; }
.sliding-tab-count { font-size: 12px; opacity: .65; font-variant-numeric: tabular-nums; }
@supports (transition-timing-function: linear(0, 1)) {
  .sliding-tabs-demo { --tab-spring: linear(0, .0669, .213, .3816, .5413, .6774, .7851, .8655, .9224, .9606, .9846, .9987, 1.006, 1.0089, 1.0094, 1.0084, 1.007, 1.0054, 1.0039, 1.0027, 1.0018, 1); }
}
@media (prefers-reduced-motion: reduce) { .sliding-tabs-demo *, .is-ready .sliding-tabs-indicator { transition: none; } }
</style>
`,Ed=`<script setup lang="ts">
import { computed } from "vue";
import { AlertTriangle, Check, Clock, Minus, Pencil, UserRound, X } from "lucide-vue-next";

const props = withDefaults(defineProps<{ status?: string; size?: "sm" | "md" }>(), { status: "pending", size: "md" });
const states = {
  running: { label: "Running", tone: "info", icon: null },
  queued: { label: "Queued", tone: "neutral", icon: Clock },
  pending: { label: "Pending", tone: "neutral", icon: Minus },
  waiting_human: { label: "Needs input", tone: "neutral", icon: UserRound },
  completed: { label: "Completed", tone: "success", icon: Check },
  success: { label: "Success", tone: "success", icon: Check },
  failed: { label: "Failed", tone: "error", icon: AlertTriangle },
  cancelled: { label: "Cancelled", tone: "neutral", icon: X },
  cancelling: { label: "Cancelling", tone: "neutral", icon: X },
  skipped: { label: "Skipped", tone: "neutral", icon: Minus },
  published: { label: "Published", tone: "success", icon: Check },
  draft: { label: "Draft", tone: "neutral", icon: Pencil },
} as const;
const state = computed(() => states[props.status as keyof typeof states] ?? states.pending);
<\/script>

<template>
  <span class="status-badge" :class="[\`tone-\${state.tone}\`, { 'is-small': size === 'sm' }]">
    <component v-if="state.icon" :is="state.icon" :size="13" :stroke-width="1.6" aria-hidden="true" />
    <span v-else class="status-lamp" aria-hidden="true"><i /></span>
    {{ state.label }}
  </span>
</template>

<style scoped>
.status-badge { --status-ink: var(--demo-muted, #6b6b76); --status-fill: var(--demo-bg, #f8f8fa); display: inline-flex; align-items: center; flex: none; gap: 6px; width: max-content; max-width: 100%; box-sizing: border-box; padding: 5px 10px; border: 1px solid color-mix(in srgb, var(--status-ink) 23%, transparent); border-radius: 99px; color: var(--status-ink); background: var(--status-fill); font: 13px/1.5 Inter, ui-sans-serif, system-ui, sans-serif; white-space: nowrap; }
.is-small { padding: 3px 8px; font-size: 12px; }
.tone-info { --status-ink: #597dcc; --status-fill: color-mix(in srgb, #6589e8 9%, var(--demo-surface, #fff)); }
.tone-success { --status-ink: #338768; --status-fill: color-mix(in srgb, #32a77e 8%, var(--demo-surface, #fff)); }
.tone-error { --status-ink: #c15161; --status-fill: color-mix(in srgb, #de6a76 8%, var(--demo-surface, #fff)); }
.status-lamp { display: grid; place-items: center; position: relative; width: 13px; height: 13px; }
.status-lamp i { width: 5px; height: 5px; background: currentColor; border-radius: 50%; animation: status-breathe 1.6s ease-in-out infinite; }
@keyframes status-breathe { 50% { opacity: .45; box-shadow: 0 0 0 3px color-mix(in srgb, currentColor 12%, transparent); } }
@media (prefers-reduced-motion: reduce) { .status-lamp i { animation: none; } }
</style>
`,Cd=`<script setup lang="ts">
withDefaults(defineProps<{ label?: string; busy?: boolean }>(), {
  label: "Thinking",
  busy: true,
});
<\/script>

<template>
  <span class="thinking-indicator" :class="{ 'is-busy': busy }" role="status">
    <span class="thinking-lamp" aria-hidden="true"><i class="lamp-halo" /><i class="lamp-core" /></span>
    <span class="thinking-label">{{ label }}</span>
  </span>
</template>

<style scoped>
.thinking-indicator { display: inline-flex; align-items: center; gap: 9px; min-width: 0; color: var(--demo-muted, #6b6b76); font: 14px/1.65 Inter, ui-sans-serif, system-ui, sans-serif; }
.thinking-lamp { position: relative; width: 12px; height: 12px; flex: none; color: var(--accent, #7b61ff); }
.thinking-lamp i { position: absolute; left: 4px; top: 4px; width: 4px; height: 4px; border-radius: 50%; box-sizing: border-box; }
.lamp-core { background: currentColor; }
.lamp-halo { border: 1px solid currentColor; opacity: 0; }
.is-busy .lamp-core { animation: thinking-core .8s ease-in-out infinite; }
.is-busy .lamp-halo { animation: thinking-halo .8s ease-out infinite; }
.thinking-label { min-width: 0; overflow-wrap: anywhere; }
@supports ((-webkit-background-clip: text) or (background-clip: text)) {
  .is-busy .thinking-label { background: linear-gradient(100deg, currentColor 0%, currentColor 42%, color-mix(in srgb, var(--demo-text, #252529) 70%, var(--demo-surface, #fff)) 50%, currentColor 58%, currentColor 100%) 120% 50% / 220% 100%; background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: thinking-sheen 1s linear infinite; }
}
@keyframes thinking-core { 0%, 100% { opacity: .6; } 45% { opacity: 1; box-shadow: 0 0 2px currentColor; } }
@keyframes thinking-halo { 0% { transform: scale(1); opacity: .55; } 100% { transform: scale(2.2); opacity: 0; } }
@keyframes thinking-sheen { to { background-position: -20% 50%; } }
@media (prefers-reduced-motion: reduce) {
  .is-busy .lamp-core, .is-busy .lamp-halo, .is-busy .thinking-label { animation: none; }
  .is-busy .thinking-label { background: none; -webkit-text-fill-color: currentColor; }
  .lamp-halo { opacity: 0; }
}
</style>
`,Od={class:"composer-demo"},Ud={key:0,class:"attachments"},Qd=["aria-label","disabled","onClick"],Yd={class:"composer-field"},Pd=["value","placeholder","disabled"],_d={class:"toolbar"},$d=["disabled"],Rd=["disabled"],Wd=["aria-expanded","disabled"],Bd={class:"model-button-label"},Hd=["disabled","aria-checked","onClick"],Vd={class:"model-option-label"},Gd=["disabled"],Fd=qe({__name:"ChatComposer",props:{modelValue:{default:""},placeholder:{default:"What would you like to build?"},models:{default:()=>["Claude Sonnet 4.6","GPT-5.4","Gemini 3.1 Pro"]},initialModel:{default:"Claude Sonnet 4.6"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","send","model-change"],setup(e,{emit:t}){const n={claude:"data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+Q2xhdWRlPC90aXRsZT48cGF0aCBkPSJtNC43MTQ0IDE1Ljk1NTUgNC43MTc0LTIuNjQ3MS4wNzktLjIzMDctLjA3OS0uMTI3NWgtLjIzMDdsLS43ODkzLS4wNDg2LTIuNjk1Ni0uMDcyOS0yLjMzNzUtLjA5NzEtMi4yNjQ2LS4xMjE0LS41NzA3LS4xMjE1LS41MzQzLS43MDQyLjA1NDYtLjM1MjIuNDc5Ny0uMzIxOC42ODYuMDYwOCAxLjUxNzkuMTAzMiAyLjI3NjcuMTU3OCAxLjY1MTQuMDk3MiAyLjQ0NjguMjU1aC4zODg2bC4wNTQ2LS4xNTc5LS4xMzM2LS4wOTcxLS4xMDMyLS4wOTcyTDYuOTczIDkuODM1NmwtMi41NS0xLjY4NzktMS4zMzU2LS45NzE0LS43MjI1LS40OTE4LS4zNjQzLS40NjE0LS4xNTc4LTEuMDA3OC42NTU3LS43MjI1Ljg4MDMuMDYwNy4yMjQ2LjA2MDcuODkyNS42ODYgMS45MDY0IDEuNDc1NCAyLjQ4OTMgMS44MzM2LjM2NDMuMzAzNS4xNDU3LS4xMDMyLjAxODItLjA3MjgtLjE2NC0uMjczMy0xLjM1MzktMi40NDY3LTEuNDQ1LTIuNDg5My0uNjQzNS0xLjAzMi0uMTctLjYxOTRjLS4wNjA3LS4yNTUtLjEwMzItLjQ2NzQtLjEwMzItLjcyODVMNi4yODcuMTMzNSA2LjY5OTcgMGwuOTk1Ny4xMzM2LjQxOS4zNjQyLjYxOTIgMS40MTQ3IDEuMDAxOCAyLjIyODIgMS41NTQzIDMuMDI5Ni40NTUzLjg5ODUuMjQyOS44MzE4LjA5MS4yNTVoLjE1Nzl2LS4xNDU3bC4xMjc1LTEuNzA2LjIzNjgtMi4wOTQ3LjIzMDctMi42OTU3LjA3ODktLjc1ODkuMzc2NC0uOTEwNy43NDY4LS40OTE4LjU4MjguMjc5My40Nzk3LjY4Ni0uMDY2OC40NDMzLS4yODUzIDEuODUxNy0uNTU4NiAyLjkwMjEtLjM2NDMgMS45NDI5aC4yMTI1bC4yNDI5LS4yNDI5Ljk4MzUtMS4zMDUzIDEuNjUxNC0yLjA2NDMuNzI4Ni0uODE5Ni44NS0uOTA0Ni41NDY0LS40MzExaDEuMDMyMWwuNzU5IDEuMTI5My0uMzQgMS4xNjU3LTEuMDYyNSAxLjM0NzgtLjg4MDQgMS4xNDE0LTEuMjYyOCAxLjctLjc4OTMgMS4zNi4wNzI5LjEwOTMuMTg4Mi0uMDE4MyAyLjg1MzUtLjYwNyAxLjU0MjEtLjI3OTQgMS44Mzk2LS4zMTU3LjgzMTguMzg4Ni4wOTEuMzk0Ni0uMzI3OC44MDc1LTEuOTY3LjQ4NTctMi4zMDcyLjQ2MTQtMy40MzY0LjgxMzYtLjA0MjUuMDMwNC4wNDg2LjA2MDcgMS41NDgyLjE0NTcuNjYxOC4wMzY0aDEuNjIxbDMuMDE3NS4yMjQ3Ljc4OTIuNTIyLjQ3MzYuNjM3Ni0uMDc5LjQ4NTctMS4yMTQyLjYxOTMtMS42MzkzLS4zODg2LTMuODI1LS45MTA3LTEuMzExMy0uMzI3OWgtLjE4MjJ2LjEwOTNsMS4wOTI5IDEuMDY4NiAyLjAwMzUgMS44MDkyIDIuNTA3NSAyLjMzMTQuMTI3NS41NzY4LS4zMjE4LjQ1NTQtLjM0LS4wNDg2LTIuMjAzOS0xLjY1NzUtLjg1LS43NDY4LTEuOTI0Ni0xLjYyMWgtLjEyNzV2LjE3bC40NDMyLjY0OTYgMi4zNDM2IDMuNTIxNC4xMjE0IDEuMDgwNy0uMTcuMzUyMS0uNjA3MS4yMTI1LS42Njc5LS4xMjE0LTEuMzcyMS0xLjkyNDZMMTQuMzggMTcuOTU5bC0xLjE0MTQtMS45NDI4LS4xMzk3LjA3OS0uNjc0IDcuMjU1Mi0uMzE1Ni4zNzAzLS43Mjg2LjI3OTMtLjYwNzEtLjQ2MTQtLjMyMTgtLjc0NjguMzIxOC0xLjQ3NTMuMzg4Ni0xLjkyNDYuMzE1Ny0xLjUzLjI4NTMtMS45MDA0LjE3LS42MzE0LS4wMTIxLS4wNDI1LS4xMzk3LjAxODItMS40MzI4IDEuOTY3Mi0yLjE3OTYgMi45NDQ2LTEuNzI0MyAxLjg0NTYtLjQxMjguMTY0LS43MTY0LS4zNzA0LjA2NjctLjY2MTguNDAwOC0uNTg4OSAyLjM4Ni0zLjAzNTcgMS40Mzg5LTEuODgyLjkyOS0xLjA4NjgtLjAwNjItLjE1NzloLS4wNTQ2bC02LjMzODUgNC4xMTY0LTEuMTI5My4xNDU3LS40ODU3LS40NTU0LjA2MDgtLjc0NjcuMjMwNy0uMjQyOSAxLjkwNjQtMS4zMTE0WiIvPjwvc3ZnPg==",openai:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIxIiBoZWlnaHQ9IjcyMSIgdmlld0JveD0iMCAwIDcyMSA3MjEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xNjM3XzI5MzQpIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxXzE2MzdfMjkzNCkiPgo8cGF0aCBkPSJNMzA0LjI0NiAyOTQuNjExVjI0OS4wMjhDMzA0LjI0NiAyNDUuMTg5IDMwNS42ODcgMjQyLjMwOSAzMDkuMDQ0IDI0MC4zOTJMNDAwLjY5MiAxODcuNjEyQzQxMy4xNjcgMTgwLjQxNSA0MjguMDQyIDE3Ny4wNTggNDQzLjM5NCAxNzcuMDU4QzUwMC45NzEgMTc3LjA1OCA1MzcuNDQgMjIxLjY4MiA1MzcuNDQgMjY5LjE4MkM1MzcuNDQgMjcyLjU0IDUzNy40NCAyNzYuMzc5IDUzNi45NTkgMjgwLjIxOEw0NDEuOTU0IDIyNC41NThDNDM2LjE5NyAyMjEuMjAxIDQzMC40MzcgMjIxLjIwMSA0MjQuNjggMjI0LjU1OEwzMDQuMjQ2IDI5NC42MTFaTTUxOC4yNDUgNDcyLjE0NVYzNjMuMjI0QzUxOC4yNDUgMzU2LjUwNSA1MTUuMzY0IDM1MS43MDcgNTA5LjYwOCAzNDguMzQ5TDM4OS4xNzQgMjc4LjI5Nkw0MjguNTE5IDI1NS43NDNDNDMxLjg3NyAyNTMuODI2IDQzNC43NTcgMjUzLjgyNiA0MzguMTE1IDI1NS43NDNMNTI5Ljc2MiAzMDguNTIzQzU1Ni4xNTQgMzIzLjg3OSA1NzMuOTA1IDM1Ni41MDUgNTczLjkwNSAzODguMTcxQzU3My45MDUgNDI0LjYzNiA1NTIuMzE1IDQ1OC4yMjUgNTE4LjI0NSA0NzIuMTQxVjQ3Mi4xNDVaTTI3NS45MzcgMzc2LjE4MkwyMzYuNTkyIDM1My4xNTJDMjMzLjIzNSAzNTEuMjM1IDIzMS43OTQgMzQ4LjM1NCAyMzEuNzk0IDM0NC41MTVWMjM4Ljk1NkMyMzEuNzk0IDE4Ny42MTcgMjcxLjEzOSAxNDguNzQ5IDMyNC40IDE0OC43NDlDMzQ0LjU1NSAxNDguNzQ5IDM2My4yNjQgMTU1LjQ2OCAzNzkuMTAyIDE2Ny40NjNMMjg0LjU3OCAyMjIuMTY0QzI3OC44MjIgMjI1LjUyMSAyNzUuOTQyIDIzMC4zMTkgMjc1Ljk0MiAyMzcuMDM5VjM3Ni4xODZMMjc1LjkzNyAzNzYuMTgyWk0zNjAuNjI2IDQyNS4xMjJMMzA0LjI0NiAzOTMuNDU1VjMyNi4yODNMMzYwLjYyNiAyOTQuNjE2TDQxNy4wMDIgMzI2LjI4M1YzOTMuNDU1TDM2MC42MjYgNDI1LjEyMlpNMzk2Ljg1MiA1NzAuOTg5QzM3Ni42OTggNTcwLjk4OSAzNTcuOTg5IDU2NC4yNyAzNDIuMTUxIDU1Mi4yNzZMNDM2LjY3NCA0OTcuNTc0QzQ0Mi40MzEgNDk0LjIxNyA0NDUuMzExIDQ4OS40MTkgNDQ1LjMxMSA0ODIuNjk5VjM0My41NTJMNDg1LjEzOCAzNjYuNTgyQzQ4OC40OTUgMzY4LjQ5OSA0ODkuOTM2IDM3MS4zNzkgNDg5LjkzNiAzNzUuMjE5VjQ4MC43NzhDNDg5LjkzNiA1MzIuMTE3IDQ1MC4xMDkgNTcwLjk4NSAzOTYuODUyIDU3MC45ODVWNTcwLjk4OVpNMjgzLjEzNCA0NjMuOTlMMTkxLjQ4NiA0MTEuMjExQzE2NS4wOTQgMzk1Ljg1NCAxNDcuMzQzIDM2My4yMjkgMTQ3LjM0MyAzMzEuNTYyQzE0Ny4zNDMgMjk0LjYxNiAxNjkuNDE1IDI2MS41MDkgMjAzLjQ4IDI0Ny41OTNWMzU2Ljk5MUMyMDMuNDggMzYzLjcxIDIwNi4zNjEgMzY4LjUwOCAyMTIuMTE3IDM3MS44NjZMMzMyLjA3NCA0NDEuNDM3TDI5Mi43MjkgNDYzLjk5QzI4OS4zNzIgNDY1LjkwNyAyODYuNDkxIDQ2NS45MDcgMjgzLjEzNCA0NjMuOTlaTTI3Ny44NTkgNTQyLjY4QzIyMy42MzkgNTQyLjY4IDE4My44MTMgNTAxLjg5NSAxODMuODEzIDQ1MS41MTRDMTgzLjgxMyA0NDcuNjc1IDE4NC4yOTQgNDQzLjgzNiAxODQuNzcxIDQzOS45OTdMMjc5LjI5NSA0OTQuNjk4QzI4NS4wNTEgNDk4LjA1NiAyOTAuODEyIDQ5OC4wNTYgMjk2LjU2OCA0OTQuNjk4TDQxNy4wMDIgNDI1LjEyN1Y0NzAuNzFDNDE3LjAwMiA0NzQuNTQ5IDQxNS41NjIgNDc3LjQyOSA0MTIuMjA0IDQ3OS4zNDZMMzIwLjU1NyA1MzIuMTI2QzMwOC4wODEgNTM5LjMyMyAyOTMuMjA2IDU0Mi42OCAyNzcuODU0IDU0Mi42OEgyNzcuODU5Wk0zOTYuODUyIDU5OS43NzZDNDU0LjkxMSA1OTkuNzc2IDUwMy4zNyA1NTguNTEzIDUxNC40MSA1MDMuODEyQzU2OC4xNDkgNDg5Ljg5NiA2MDIuNjk2IDQzOS41MTUgNjAyLjY5NiAzODguMTc2QzYwMi42OTYgMzU0LjU4NyA1ODguMzAzIDMyMS45NjIgNTYyLjM5MiAyOTguNDVDNTY0Ljc5MSAyODguMzczIDU2Ni4yMzEgMjc4LjI5NiA1NjYuMjMxIDI2OC4yMjRDNTY2LjIzMSAxOTkuNjExIDUxMC41NzEgMTQ4LjI2NyA0NDYuMjc0IDE0OC4yNjdDNDMzLjMyMiAxNDguMjY3IDQyMC44NDYgMTUwLjE4NCA0MDguMzcgMTU0LjUwNUMzODYuNzc1IDEzMy4zOTIgMzU3LjAyNiAxMTkuOTU4IDMyNC40IDExOS45NThDMjY2LjM0MiAxMTkuOTU4IDIxNy44ODMgMTYxLjIyIDIwNi44NDMgMjE1LjkyMUMxNTMuMTA0IDIyOS44MzcgMTE4LjU1NyAyODAuMjE4IDExOC41NTcgMzMxLjU1N0MxMTguNTU3IDM2NS4xNDYgMTMyLjk1IDM5Ny43NzEgMTU4Ljg2MSA0MjEuMjgzQzE1Ni40NjIgNDMxLjM2IDE1NS4wMjIgNDQxLjQzNyAxNTUuMDIyIDQ1MS41MUMxNTUuMDIyIDUyMC4xMjMgMjEwLjY4MiA1NzEuNDY2IDI3NC45NzggNTcxLjQ2NkMyODcuOTMxIDU3MS40NjYgMzAwLjQwNyA1NjkuNTQ5IDMxMi44ODMgNTY1LjIyOEMzMzQuNDczIDU4Ni4zNDEgMzY0LjIyMiA1OTkuNzc2IDM5Ni44NTIgNTk5Ljc3NloiIGZpbGw9ImJsYWNrIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNzIwIiBoZWlnaHQ9IjcyMCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNjA2OTM0IDAuMDk5OTc1NikiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNDg0LjEzOSIgaGVpZ2h0PSI0NzkuODE4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE4LjU1NyAxMTkuOTU4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",gemini:"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjFlbSIgc3R5bGU9ImZsZXg6bm9uZTtsaW5lLWhlaWdodDoxIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkdlbWluaTwvdGl0bGU+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9IiMzMTg2RkYiPjwvcGF0aD48cGF0aCBkPSJNMjAuNjE2IDEwLjgzNWExNC4xNDcgMTQuMTQ3IDAgMDEtNC40NS0zLjAwMSAxNC4xMTEgMTQuMTExIDAgMDEtMy42NzgtNi40NTIuNTAzLjUwMyAwIDAwLS45NzUgMCAxNC4xMzQgMTQuMTM0IDAgMDEtMy42NzkgNi40NTIgMTQuMTU1IDE0LjE1NSAwIDAxLTQuNDUgMy4wMDFjLS42NS4yOC0xLjMxOC41MDUtMi4wMDIuNjc4YS41MDIuNTAyIDAgMDAwIC45NzVjLjY4NC4xNzIgMS4zNS4zOTcgMi4wMDIuNjc3YTE0LjE0NyAxNC4xNDcgMCAwMTQuNDUgMy4wMDEgMTQuMTEyIDE0LjExMiAwIDAxMy42NzkgNi40NTMuNTAyLjUwMiAwIDAwLjk3NSAwYy4xNzItLjY4NS4zOTctMS4zNTEuNjc3LTIuMDAzYTE0LjE0NSAxNC4xNDUgMCAwMTMuMDAxLTQuNDUgMTQuMTEzIDE0LjExMyAwIDAxNi40NTMtMy42NzguNTAzLjUwMyAwIDAwMC0uOTc1IDEzLjI0NSAxMy4yNDUgMCAwMS0yLjAwMy0uNjc4eiIgZmlsbD0idXJsKCNsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfKSI+PC9wYXRoPjxwYXRoIGQ9Ik0yMC42MTYgMTAuODM1YTE0LjE0NyAxNC4xNDcgMCAwMS00LjQ1LTMuMDAxIDE0LjExMSAxNC4xMTEgMCAwMS0zLjY3OC02LjQ1Mi41MDMuNTAzIDAgMDAtLjk3NSAwIDE0LjEzNCAxNC4xMzQgMCAwMS0zLjY3OSA2LjQ1MiAxNC4xNTUgMTQuMTU1IDAgMDEtNC40NSAzLjAwMWMtLjY1LjI4LTEuMzE4LjUwNS0yLjAwMi42NzhhLjUwMi41MDIgMCAwMDAgLjk3NWMuNjg0LjE3MiAxLjM1LjM5NyAyLjAwMi42NzdhMTQuMTQ3IDE0LjE0NyAwIDAxNC40NSAzLjAwMSAxNC4xMTIgMTQuMTEyIDAgMDEzLjY3OSA2LjQ1My41MDIuNTAyIDAgMDAuOTc1IDBjLjE3Mi0uNjg1LjM5Ny0xLjM1MS42NzctMi4wMDNhMTQuMTQ1IDE0LjE0NSAwIDAxMy4wMDEtNC40NSAxNC4xMTMgMTQuMTEzIDAgMDE2LjQ1My0zLjY3OC41MDMuNTAzIDAgMDAwLS45NzUgMTMuMjQ1IDEzLjI0NSAwIDAxLTIuMDAzLS42Nzh6IiBmaWxsPSJ1cmwoI2xvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8pIj48L3BhdGg+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9InVybCgjbG9iZS1pY29ucy1nZW1pbmktMi1fUl8wXykiPjwvcGF0aD48ZGVmcz48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfIiB4MT0iNyIgeDI9IjExIiB5MT0iMTUuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjMDhCOTYyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDhCOTYyIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8iIHgxPSI4IiB4Mj0iMTEuNSIgeTE9IjUuNSIgeTI9IjExIj48c3RvcCBzdG9wLWNvbG9yPSIjRjk0NTQzIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjk0NTQzIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTItX1JfMF8iIHgxPSIzLjUiIHgyPSIxNy41IiB5MT0iMTMuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjRkFCQzEyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuNDYiIHN0b3AtY29sb3I9IiNGQUJDMTIiIHN0b3Atb3BhY2l0eT0iMCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==",deepseek:"data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RGVlcFNlZWs8L3RpdGxlPjxwYXRoIGQ9Ik0yMy43NDggNC42NTFjLS4yNTQtLjEyNC0uMzY0LjExMy0uNTEyLjIzMy0uMDUxLjA0LS4wOTQuMDktLjEzNy4xMzctLjM3Mi4zOTctLjgwNi42NTctMS4zNzMuNjI2LS44MjktLjA0Ni0xLjUzNy4yMTQtMi4xNjMuODQ4LS4xMzMtLjc4Mi0uNTc1LTEuMjQ4LTEuMjQ3LTEuNTQ4LS4zNTItLjE1NS0uNzA4LS4zMTEtLjk1NS0uNjUtLjE3Mi0uMjQtLjIxOS0uNTA5LS4zMDUtLjc3NC0uMDU1LS4xNi0uMTEtLjMyMy0uMjkzLS4zNS0uMi0uMDMxLS4yNzguMTM2LS4zNTYuMjc2LS4zMTMuNTcyLS40MzQgMS4yMDItLjQyMiAxLjg0LjAyNyAxLjQzNi42MzMgMi41OCAxLjgzOCAzLjM5My4xMzcuMDk0LjE3Mi4xODcuMTI5LjMyMy0uMDgyLjI4LS4xOC41NTMtLjI2Ni44MzMtLjA1NS4xNzktLjEzNy4yMTgtLjMyOC4xNGE1LjUgNS41IDAgMCAxLTEuNzM3LTEuMTc5Yy0uODU3LS44MjgtMS42MzEtMS43NDMtMi41OTctMi40NmExMiAxMiAwIDAgMC0uNjg5LS40N2MtLjk4NS0uOTU3LjEzLTEuNzQzLjM4Ny0xLjgzNi4yNy0uMDk4LjA5NC0uNDMzLS43NzgtLjQyOC0uODcyLjAwMy0xLjY3LjI5NS0yLjY4Ny42ODVhMyAzIDAgMCAxLS40NjUuMTM2IDkuNiA5LjYgMCAwIDAtMi44ODMtLjEwMWMtMS44ODUuMjEtMy4zOSAxLjEtNC40OTcgMi42MjJDLjA4MiA4Ljc3Ni0uMjMxIDEwLjg1NC4xNTIgMTMuMDJjLjQwMyAyLjI4NCAxLjU2OCA0LjE3NSAzLjM2IDUuNjUzIDEuODU3IDEuNTMzIDMuOTk3IDIuMjg0IDYuNDM4IDIuMTQgMS40ODItLjA4NSAzLjEzMi0uMjg0IDQuOTk0LTEuODYuNDcuMjM0Ljk2Mi4zMjggMS43OC4zOTguNjI5LjA1OCAxLjIzNS0uMDMxIDEuNzA1LS4xMjkuNzM1LS4xNTUuNjg0LS44MzYuNDE4LS45NjEtMi4xNTUtMS4wMDQtMS42ODItLjU5NS0yLjExMi0uOTI2IDEuMDk1LTEuMjk1IDIuNzY4LTMuNTk4IDMuMjg0LTYuNzMzLjA1LS4zNDYuMTE1LS44MzQuMTA4LTEuMTE0LS4wMDQtLjE3MS4wMzUtLjIzOC4yMy0uMjU3YTQuMiA0LjIgMCAwIDAgMS41NDUtLjQ3NWMxLjM5Ny0uNzYzIDEuOTYtMi4wMTYgMi4wOTMtMy41MTcuMDItLjIzLS4wMDQtLjQ2Ny0uMjQ3LS41ODhNMTEuNTggMTguMTY4Yy0yLjA4OC0xLjY0Mi0zLjEwMS0yLjE4My0zLjUyLTIuMTYtLjM5LjAyNC0uMzIuNDcyLS4yMzQuNzYzLjA5LjI4OC4yMDcuNDg3LjM3MS43NC4xMTQuMTY3LjE5Mi40MTYtLjExMy42MDMtLjY3My40MTYtMS44NDItLjE0LTEuODk3LS4xNjgtMS4zNjEtLjgwMS0yLjUtMS44Ni0zLjMwMS0zLjMwNi0uNzc1LTEuMzkzLTEuMjI1LTIuODg4LTEuMjk5LTQuNDgyLS4wMi0uMzg1LjA5NC0uNTIyLjQ3Ny0uNTkyYTQuNyA0LjcgMCAwIDEgMS41My0uMDM4YzIuMTMxLjMxMSAzLjk0NiAxLjI2NCA1LjQ2NyAyLjc3NC44NjguODYgMS41MjUgMS44ODcgMi4yMDIgMi44OS43MiAxLjA2NiAxLjQ5NCAyLjA4MiAyLjQ4IDIuOTE1LjM0OC4yOTEuNjI2LjUxMy44OTIuNjc3LS44MDIuMDktMi4xNC4xMDktMy4wNTUtLjYxNXptMS4wMDEtNi40NGEuMzA2LjMwNiAwIDAgMSAuNDE1LS4yODcuMy4zIDAgMCAxIC4xMTMuMDc0LjMuMyAwIDAgMSAuMDg2LjIxNGMwIC4xNy0uMTM2LjMwNy0uMzA4LjMwN2EuMzAzLjMwMyAwIDAgMS0uMzA2LS4zMDdtMy4xMSAxLjU5NmMtLjIuMDgxLS40LjE1MS0uNTkxLjE2YTEuMjUgMS4yNSAwIDAgMS0uNzk4LS4yNTRjLS4yNzQtLjIzLS40Ny0uMzU4LS41NTEtLjc1OGExLjcgMS43IDAgMCAxIC4wMTUtLjU4OGMuMDctLjMyNy0uMDA3LS41MzctLjIzOC0uNzI3LS4xODgtLjE1Ni0uNDI2LS4xOTktLjY4OS0uMTk5YS42LjYgMCAwIDEtLjI1NC0uMDc4LjI1My4yNTMgMCAwIDEtLjExNC0uMzU4IDEgMSAwIDAgMSAuMTkyLS4yMWMuMzU2LS4yMDIuNzY3LS4xMzYgMS4xNDYuMDE2LjM1Mi4xNDQuNjE4LjQwOCAxLjAwMS43ODIuMzkyLjQ1MS40NjIuNTc2LjY4NS45MTUuMTc2LjI2NC4zMzYuNTM2LjQ0Ni44NDguMDY2LjE5NC0uMDIuMzUzLS4yNS40NSIvPjwvc3ZnPg=="},o={claude:"Claude",openai:"OpenAI",gemini:"Gemini",deepseek:"DeepSeek"};function i(A,G=""){const ie=G.trim().toLowerCase().replace(/[^a-z0-9]+/g,"");if(G.trim())return{anthropic:"claude",claude:"claude",claudecode:"claude",openai:"openai",google:"gemini",googlegemini:"gemini",googleaistudio:"gemini",gemini:"gemini",deepseek:"deepseek"}[ie];const ue=A.trim().toLowerCase();if(/^(?:anthropic\/)?claude(?:$|[\s-])/.test(ue))return"claude";if(/^(?:openai\/)?(?:gpt[-\s]?\d|chatgpt(?:$|[\s-])|o[134](?:$|[\s-]))/.test(ue))return"openai";if(/^(?:google\/)?gemini(?:$|[\s-])/.test(ue))return"gemini";if(/^deepseek(?:$|[\s-])/.test(ue))return"deepseek"}const s=qe({props:{model:{type:String,default:""},provider:{type:String,default:""},size:{type:Number,default:20}},setup:A=>()=>{const G=i(A.model,A.provider),ie=G!=="gemini",ue=Math.round(A.size*(G==="openai"?.82:.58));return Ue("span",{class:["model-provider-mark",{"is-color":G&&!ie}],"data-provider-logo":G??"unknown","aria-hidden":"true",title:G?`${o[G]} logo`:"Custom model",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:`${A.size}px`,height:`${A.size}px`,boxSizing:"border-box",border:"1px solid var(--provider-logo-border, #e5e5e8)",borderRadius:`${A.size>=28?9:A.size>=20?6:4}px`,background:"var(--provider-logo-surface, #fff)",color:"var(--provider-logo-muted, #a1a1aa)"}},G?[Ue("img",{src:n[G],alt:"","aria-hidden":"true",class:["model-provider-image",{"is-monochrome":ie}],"data-logo-source":"bundled-brand-asset",style:{display:"block",objectFit:"contain",width:`${ue}px`,height:`${ue}px`}})]:[Ue(ii,{size:Math.round(A.size*.5),strokeWidth:1.7,"aria-hidden":"true"})])}}),a=e,r=t,c=V(a.modelValue),u=V(""),d=V(!1),M=V([]),x=V(null),h=V(null),O=V(null),Q=V(null),K=V({}),X=V(null),Z=`composer-models-${Dn()}`;function ne(A=!1){d.value=!1,A&&ke(()=>{var G;return(G=X.value)==null?void 0:G.focus({preventScroll:!0})})}function S(){var A;return Array.from(((A=Q.value)==null?void 0:A.querySelectorAll('[role="menuitemradio"]:not(:disabled)'))??[])}function _(A){if(!A)return;A.focus({preventScroll:!0});const G=Q.value;G&&(A.offsetTop<G.scrollTop?G.scrollTop=A.offsetTop:A.offsetTop+A.offsetHeight>G.scrollTop+G.clientHeight&&(G.scrollTop=A.offsetTop+A.offsetHeight-G.clientHeight))}function j(){if(!d.value||!X.value)return;const A=X.value.getBoundingClientRect(),G=Math.min(340,window.innerWidth-16),ie=Math.max(8,Math.min(A.left,window.innerWidth-G-8)),ue={position:"fixed",left:`${Math.round(ie)}px`,width:`${G}px`};window.innerHeight-A.bottom<280&&A.top>window.innerHeight-A.bottom?ue.bottom=`${Math.round(window.innerHeight-A.top+6)}px`:ue.top=`${Math.round(A.bottom+6)}px`,K.value=ue}async function b(){if(!a.disabled){if(d.value)return ne();d.value=!0,await ke(),j(),d.value&&_(S().find(A=>A.getAttribute("aria-checked")==="true")??S()[0])}}async function E(A){if(A.isComposing||a.disabled)return;if(A.key==="Escape"&&d.value){A.preventDefault(),A.stopPropagation(),ne(!0);return}if(!["ArrowDown","ArrowUp","Home","End"].includes(A.key))return;A.preventDefault(),d.value=!0,await ke(),j();const G=S();if(!G.length)return;const ie=G.indexOf(document.activeElement),ue=A.key==="Home"?0:A.key==="End"?G.length-1:(ie+(A.key==="ArrowDown"?1:ie<0?0:-1)+G.length)%G.length;_(G[ue])}function f(A){var ie,ue;const G=A.relatedTarget;!((ie=O.value)!=null&&ie.contains(G))&&!((ue=Q.value)!=null&&ue.contains(G))&&ne()}function R(A){var ie,ue;const G=A.target;!((ie=O.value)!=null&&ie.contains(G))&&!((ue=Q.value)!=null&&ue.contains(G))&&ne()}function F(A){A.setAttribute("inert","")}function U(A){a.disabled||M.value.splice(A,1)}ze(()=>a.disabled,A=>{A&&ne()}),zt(()=>{document.addEventListener("pointerdown",R),window.addEventListener("resize",j),window.addEventListener("scroll",j,!0),ge()}),Yt(()=>{document.removeEventListener("pointerdown",R),window.removeEventListener("resize",j),window.removeEventListener("scroll",j,!0)});const ee=we(()=>(c.value.trim().length>0||M.value.length>0)&&a.models.includes(u.value)&&!a.disabled);ze(()=>a.modelValue,A=>{c.value=A}),ze([()=>a.initialModel,()=>a.models],([A,G],ie)=>{const je=!ie||A!==ie[0]?A:u.value;u.value=G.includes(je)?je:G[0]??"",G.length||ne()},{immediate:!0,deep:!0});function pe(A){a.disabled||(c.value=A.target.value,r("update:modelValue",c.value))}function ge(){const A=h.value;A&&(A.style.height="auto",A.style.height=`${Math.min(Math.max(A.scrollHeight,40),128)}px`)}ze(c,()=>ke(ge));function le(A){a.disabled||!a.models.includes(A)||(u.value=A,ne(!0),r("model-change",A))}function ae(A){a.disabled||(M.value=[...M.value,...Array.from(A.target.files||[])],x.value&&(x.value.value=""))}function Me(){ee.value&&(r("send",{text:c.value.trim(),model:u.value,files:[...M.value]}),c.value="",M.value=[],r("update:modelValue",""))}function oe(A){A.key==="Enter"&&!A.shiftKey&&!A.isComposing&&(A.preventDefault(),Me())}return(A,G)=>(m(),z("div",Od,[M.value.length?(m(),z("div",Ud,[(m(!0),z(Ne,null,We(M.value,(ie,ue)=>(m(),z("span",{key:`${ie.name}-${ue}`,class:"file-chip"},[H(q(Nd),{size:12}),l("span",null,te(ie.name),1),l("button",{type:"button","aria-label":`Remove ${ie.name}`,disabled:e.disabled,onClick:je=>U(ue)},[H(q(Pn),{size:9,"stroke-width":1.7})],8,Qd)]))),128))])):me("",!0),l("div",{class:ye(["composer",{"is-disabled":e.disabled}])},[l("div",Yd,[l("textarea",{ref_key:"textarea",ref:h,value:c.value,placeholder:e.placeholder,"aria-label":"Message the assistant",disabled:e.disabled,rows:"1",onInput:pe,onKeydown:oe},null,40,Pd)]),l("div",_d,[l("button",{type:"button",class:"icon-button",title:"Add attachments","aria-label":"Add attachments",disabled:e.disabled,onClick:G[0]||(G[0]=ie=>{var ue;return(ue=x.value)==null?void 0:ue.click()})},[H(q(Jr),{size:18,"stroke-width":1.7})],8,$d),l("input",{ref_key:"input",ref:x,class:"file-input",type:"file",disabled:e.disabled,multiple:"","aria-label":"Choose files",onChange:ae},null,40,Rd),l("div",{ref_key:"modelRoot",ref:O,class:"model-select",onKeydown:E,onFocusout:f},[l("button",{type:"button",ref_key:"modelTrigger",ref:X,class:"model-button","aria-haspopup":"menu","aria-controls":Z,"aria-expanded":d.value,"aria-label":"Select model",disabled:e.disabled||!e.models.length,onClick:b},[u.value?(m(),Le(q(s),{key:0,model:u.value},null,8,["model"])):me("",!0),l("span",Bd,te(u.value||"No models"),1),H(q(_t),{size:12})],8,Wd),(m(),Le(pr,{to:"body"},[H(dt,{name:"composer-menu",onBeforeLeave:F},{default:Xe(()=>[d.value?(m(),z("div",{key:0,ref_key:"modelMenu",ref:Q,id:Z,class:"model-menu",style:Et(K.value),role:"menu","aria-label":"Models",onKeydown:E,onFocusout:f},[(m(!0),z(Ne,null,We(e.models,ie=>(m(),z("button",{key:ie,type:"button",role:"menuitemradio",disabled:e.disabled,"aria-checked":u.value===ie,onClick:ue=>le(ie)},[H(q(s),{model:ie},null,8,["model"]),l("span",Vd,te(ie),1),u.value===ie?(m(),Le(q(rt),{key:0,size:14})):me("",!0)],8,Hd))),128))],36)):me("",!0)]),_:1})]))],544),l("button",{type:"button",class:"send-button",disabled:!ee.value,"aria-label":"Send message",onClick:Me},[...G[1]||(G[1]=[l("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[l("g",{class:"send-glyph"},[l("path",{d:"M12 18V6m-6 6 6-6 6 6"})])],-1)])],8,Gd)])],2)]))}}),jt=(e,t)=>{const n=e.__vccOpts||e;for(const[o,i]of t)n[o]=i;return n},Zd=jt(Fd,[["__scopeId","data-v-d126e9cf"]]),Kd={class:"chat-conversation","aria-label":"Chat conversation"},Jd={class:"conversation-body"},qd=["data-scrolling"],Xd={key:0,class:"conversation-empty"},ep={class:"conversation-message-list"},tp=["data-message-id","aria-label"],np={key:0,class:"system-text"},op={key:0,class:"message-attachments"},ip=["aria-label","onClick"],sp=["src","alt"],ap={key:1,class:"user-bubble"},rp={key:0,class:"conversation-fold process-heading"},lp=["aria-expanded","aria-controls","onClick"],cp={key:0,class:"failed-count"},up={key:1,class:"process-meta"},dp=["id","data-block-kind","inert","aria-hidden"],pp={key:0,class:"thought-text"},Mp=["aria-expanded","aria-controls","onClick"],gp={key:2,class:"thought-badge"},fp=["id","inert","aria-hidden"],hp={class:"thought-text"},mp=["data-state"],yp=["aria-expanded","aria-controls","onClick"],vp={class:"tools-count"},Np={key:3,class:"failed-count"},xp=["id","inert","aria-hidden"],bp={class:"tool-list"},Lp=["data-state"],jp=["title"],Dp=["title"],wp=["id","inert","aria-hidden"],Ip={class:"tool-output"},Tp={key:0},zp={key:1,class:"message-status"},Ap={key:2,class:"message-error",role:"alert"},kp={key:3,class:"message-actions"},Sp=["data-message-action","disabled","onClick"],Ep={key:1,class:"generation-status",role:"status"},Cp={class:"conversation-bottom"},Op={key:0,class:"composer-error",role:"alert"},Up={key:1,class:"pending-attachments"},Qp=["aria-label","onClick"],Yp=["src","alt"],Pp=["title"],_p=["aria-label","disabled","onClick"],$p={class:"composer-input-slot"},Rp=["value","placeholder","disabled"],Wp={class:"composer-toolbar"},Bp=["disabled"],Hp=["accept","disabled"],Vp=["disabled","aria-expanded","aria-controls"],Gp={class:"model-trigger-label"},Fp=["id"],Zp=["aria-checked","onClick"],Kp={class:"model-option-label"},Jp={class:"composer-send-actions"},qp=["data-kind","disabled","aria-label","title"],Xp=["src","alt"],eM=qe({__name:"ChatConversation",props:{messages:{},modelValue:{},model:{},models:{default:()=>["Claude Sonnet 4.6","GPT-5.4","Gemini 3.1 Pro"]},busy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},sessionKey:{default:""},placeholder:{default:"Message…"},error:{default:""},accept:{default:""}},emits:["send","stop","update:modelValue","update:model","message-action"],setup(e,{expose:t,emit:n}){const o={claude:"data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+Q2xhdWRlPC90aXRsZT48cGF0aCBkPSJtNC43MTQ0IDE1Ljk1NTUgNC43MTc0LTIuNjQ3MS4wNzktLjIzMDctLjA3OS0uMTI3NWgtLjIzMDdsLS43ODkzLS4wNDg2LTIuNjk1Ni0uMDcyOS0yLjMzNzUtLjA5NzEtMi4yNjQ2LS4xMjE0LS41NzA3LS4xMjE1LS41MzQzLS43MDQyLjA1NDYtLjM1MjIuNDc5Ny0uMzIxOC42ODYuMDYwOCAxLjUxNzkuMTAzMiAyLjI3NjcuMTU3OCAxLjY1MTQuMDk3MiAyLjQ0NjguMjU1aC4zODg2bC4wNTQ2LS4xNTc5LS4xMzM2LS4wOTcxLS4xMDMyLS4wOTcyTDYuOTczIDkuODM1NmwtMi41NS0xLjY4NzktMS4zMzU2LS45NzE0LS43MjI1LS40OTE4LS4zNjQzLS40NjE0LS4xNTc4LTEuMDA3OC42NTU3LS43MjI1Ljg4MDMuMDYwNy4yMjQ2LjA2MDcuODkyNS42ODYgMS45MDY0IDEuNDc1NCAyLjQ4OTMgMS44MzM2LjM2NDMuMzAzNS4xNDU3LS4xMDMyLjAxODItLjA3MjgtLjE2NC0uMjczMy0xLjM1MzktMi40NDY3LTEuNDQ1LTIuNDg5My0uNjQzNS0xLjAzMi0uMTctLjYxOTRjLS4wNjA3LS4yNTUtLjEwMzItLjQ2NzQtLjEwMzItLjcyODVMNi4yODcuMTMzNSA2LjY5OTcgMGwuOTk1Ny4xMzM2LjQxOS4zNjQyLjYxOTIgMS40MTQ3IDEuMDAxOCAyLjIyODIgMS41NTQzIDMuMDI5Ni40NTUzLjg5ODUuMjQyOS44MzE4LjA5MS4yNTVoLjE1Nzl2LS4xNDU3bC4xMjc1LTEuNzA2LjIzNjgtMi4wOTQ3LjIzMDctMi42OTU3LjA3ODktLjc1ODkuMzc2NC0uOTEwNy43NDY4LS40OTE4LjU4MjguMjc5My40Nzk3LjY4Ni0uMDY2OC40NDMzLS4yODUzIDEuODUxNy0uNTU4NiAyLjkwMjEtLjM2NDMgMS45NDI5aC4yMTI1bC4yNDI5LS4yNDI5Ljk4MzUtMS4zMDUzIDEuNjUxNC0yLjA2NDMuNzI4Ni0uODE5Ni44NS0uOTA0Ni41NDY0LS40MzExaDEuMDMyMWwuNzU5IDEuMTI5My0uMzQgMS4xNjU3LTEuMDYyNSAxLjM0NzgtLjg4MDQgMS4xNDE0LTEuMjYyOCAxLjctLjc4OTMgMS4zNi4wNzI5LjEwOTMuMTg4Mi0uMDE4MyAyLjg1MzUtLjYwNyAxLjU0MjEtLjI3OTQgMS44Mzk2LS4zMTU3LjgzMTguMzg4Ni4wOTEuMzk0Ni0uMzI3OC44MDc1LTEuOTY3LjQ4NTctMi4zMDcyLjQ2MTQtMy40MzY0LjgxMzYtLjA0MjUuMDMwNC4wNDg2LjA2MDcgMS41NDgyLjE0NTcuNjYxOC4wMzY0aDEuNjIxbDMuMDE3NS4yMjQ3Ljc4OTIuNTIyLjQ3MzYuNjM3Ni0uMDc5LjQ4NTctMS4yMTQyLjYxOTMtMS42MzkzLS4zODg2LTMuODI1LS45MTA3LTEuMzExMy0uMzI3OWgtLjE4MjJ2LjEwOTNsMS4wOTI5IDEuMDY4NiAyLjAwMzUgMS44MDkyIDIuNTA3NSAyLjMzMTQuMTI3NS41NzY4LS4zMjE4LjQ1NTQtLjM0LS4wNDg2LTIuMjAzOS0xLjY1NzUtLjg1LS43NDY4LTEuOTI0Ni0xLjYyMWgtLjEyNzV2LjE3bC40NDMyLjY0OTYgMi4zNDM2IDMuNTIxNC4xMjE0IDEuMDgwNy0uMTcuMzUyMS0uNjA3MS4yMTI1LS42Njc5LS4xMjE0LTEuMzcyMS0xLjkyNDZMMTQuMzggMTcuOTU5bC0xLjE0MTQtMS45NDI4LS4xMzk3LjA3OS0uNjc0IDcuMjU1Mi0uMzE1Ni4zNzAzLS43Mjg2LjI3OTMtLjYwNzEtLjQ2MTQtLjMyMTgtLjc0NjguMzIxOC0xLjQ3NTMuMzg4Ni0xLjkyNDYuMzE1Ny0xLjUzLjI4NTMtMS45MDA0LjE3LS42MzE0LS4wMTIxLS4wNDI1LS4xMzk3LjAxODItMS40MzI4IDEuOTY3Mi0yLjE3OTYgMi45NDQ2LTEuNzI0MyAxLjg0NTYtLjQxMjguMTY0LS43MTY0LS4zNzA0LjA2NjctLjY2MTguNDAwOC0uNTg4OSAyLjM4Ni0zLjAzNTcgMS40Mzg5LTEuODgyLjkyOS0xLjA4NjgtLjAwNjItLjE1NzloLS4wNTQ2bC02LjMzODUgNC4xMTY0LTEuMTI5My4xNDU3LS40ODU3LS40NTU0LjA2MDgtLjc0NjcuMjMwNy0uMjQyOSAxLjkwNjQtMS4zMTE0WiIvPjwvc3ZnPg==",openai:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIxIiBoZWlnaHQ9IjcyMSIgdmlld0JveD0iMCAwIDcyMSA3MjEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xNjM3XzI5MzQpIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxXzE2MzdfMjkzNCkiPgo8cGF0aCBkPSJNMzA0LjI0NiAyOTQuNjExVjI0OS4wMjhDMzA0LjI0NiAyNDUuMTg5IDMwNS42ODcgMjQyLjMwOSAzMDkuMDQ0IDI0MC4zOTJMNDAwLjY5MiAxODcuNjEyQzQxMy4xNjcgMTgwLjQxNSA0MjguMDQyIDE3Ny4wNTggNDQzLjM5NCAxNzcuMDU4QzUwMC45NzEgMTc3LjA1OCA1MzcuNDQgMjIxLjY4MiA1MzcuNDQgMjY5LjE4MkM1MzcuNDQgMjcyLjU0IDUzNy40NCAyNzYuMzc5IDUzNi45NTkgMjgwLjIxOEw0NDEuOTU0IDIyNC41NThDNDM2LjE5NyAyMjEuMjAxIDQzMC40MzcgMjIxLjIwMSA0MjQuNjggMjI0LjU1OEwzMDQuMjQ2IDI5NC42MTFaTTUxOC4yNDUgNDcyLjE0NVYzNjMuMjI0QzUxOC4yNDUgMzU2LjUwNSA1MTUuMzY0IDM1MS43MDcgNTA5LjYwOCAzNDguMzQ5TDM4OS4xNzQgMjc4LjI5Nkw0MjguNTE5IDI1NS43NDNDNDMxLjg3NyAyNTMuODI2IDQzNC43NTcgMjUzLjgyNiA0MzguMTE1IDI1NS43NDNMNTI5Ljc2MiAzMDguNTIzQzU1Ni4xNTQgMzIzLjg3OSA1NzMuOTA1IDM1Ni41MDUgNTczLjkwNSAzODguMTcxQzU3My45MDUgNDI0LjYzNiA1NTIuMzE1IDQ1OC4yMjUgNTE4LjI0NSA0NzIuMTQxVjQ3Mi4xNDVaTTI3NS45MzcgMzc2LjE4MkwyMzYuNTkyIDM1My4xNTJDMjMzLjIzNSAzNTEuMjM1IDIzMS43OTQgMzQ4LjM1NCAyMzEuNzk0IDM0NC41MTVWMjM4Ljk1NkMyMzEuNzk0IDE4Ny42MTcgMjcxLjEzOSAxNDguNzQ5IDMyNC40IDE0OC43NDlDMzQ0LjU1NSAxNDguNzQ5IDM2My4yNjQgMTU1LjQ2OCAzNzkuMTAyIDE2Ny40NjNMMjg0LjU3OCAyMjIuMTY0QzI3OC44MjIgMjI1LjUyMSAyNzUuOTQyIDIzMC4zMTkgMjc1Ljk0MiAyMzcuMDM5VjM3Ni4xODZMMjc1LjkzNyAzNzYuMTgyWk0zNjAuNjI2IDQyNS4xMjJMMzA0LjI0NiAzOTMuNDU1VjMyNi4yODNMMzYwLjYyNiAyOTQuNjE2TDQxNy4wMDIgMzI2LjI4M1YzOTMuNDU1TDM2MC42MjYgNDI1LjEyMlpNMzk2Ljg1MiA1NzAuOTg5QzM3Ni42OTggNTcwLjk4OSAzNTcuOTg5IDU2NC4yNyAzNDIuMTUxIDU1Mi4yNzZMNDM2LjY3NCA0OTcuNTc0QzQ0Mi40MzEgNDk0LjIxNyA0NDUuMzExIDQ4OS40MTkgNDQ1LjMxMSA0ODIuNjk5VjM0My41NTJMNDg1LjEzOCAzNjYuNTgyQzQ4OC40OTUgMzY4LjQ5OSA0ODkuOTM2IDM3MS4zNzkgNDg5LjkzNiAzNzUuMjE5VjQ4MC43NzhDNDg5LjkzNiA1MzIuMTE3IDQ1MC4xMDkgNTcwLjk4NSAzOTYuODUyIDU3MC45ODVWNTcwLjk4OVpNMjgzLjEzNCA0NjMuOTlMMTkxLjQ4NiA0MTEuMjExQzE2NS4wOTQgMzk1Ljg1NCAxNDcuMzQzIDM2My4yMjkgMTQ3LjM0MyAzMzEuNTYyQzE0Ny4zNDMgMjk0LjYxNiAxNjkuNDE1IDI2MS41MDkgMjAzLjQ4IDI0Ny41OTNWMzU2Ljk5MUMyMDMuNDggMzYzLjcxIDIwNi4zNjEgMzY4LjUwOCAyMTIuMTE3IDM3MS44NjZMMzMyLjA3NCA0NDEuNDM3TDI5Mi43MjkgNDYzLjk5QzI4OS4zNzIgNDY1LjkwNyAyODYuNDkxIDQ2NS45MDcgMjgzLjEzNCA0NjMuOTlaTTI3Ny44NTkgNTQyLjY4QzIyMy42MzkgNTQyLjY4IDE4My44MTMgNTAxLjg5NSAxODMuODEzIDQ1MS41MTRDMTgzLjgxMyA0NDcuNjc1IDE4NC4yOTQgNDQzLjgzNiAxODQuNzcxIDQzOS45OTdMMjc5LjI5NSA0OTQuNjk4QzI4NS4wNTEgNDk4LjA1NiAyOTAuODEyIDQ5OC4wNTYgMjk2LjU2OCA0OTQuNjk4TDQxNy4wMDIgNDI1LjEyN1Y0NzAuNzFDNDE3LjAwMiA0NzQuNTQ5IDQxNS41NjIgNDc3LjQyOSA0MTIuMjA0IDQ3OS4zNDZMMzIwLjU1NyA1MzIuMTI2QzMwOC4wODEgNTM5LjMyMyAyOTMuMjA2IDU0Mi42OCAyNzcuODU0IDU0Mi42OEgyNzcuODU5Wk0zOTYuODUyIDU5OS43NzZDNDU0LjkxMSA1OTkuNzc2IDUwMy4zNyA1NTguNTEzIDUxNC40MSA1MDMuODEyQzU2OC4xNDkgNDg5Ljg5NiA2MDIuNjk2IDQzOS41MTUgNjAyLjY5NiAzODguMTc2QzYwMi42OTYgMzU0LjU4NyA1ODguMzAzIDMyMS45NjIgNTYyLjM5MiAyOTguNDVDNTY0Ljc5MSAyODguMzczIDU2Ni4yMzEgMjc4LjI5NiA1NjYuMjMxIDI2OC4yMjRDNTY2LjIzMSAxOTkuNjExIDUxMC41NzEgMTQ4LjI2NyA0NDYuMjc0IDE0OC4yNjdDNDMzLjMyMiAxNDguMjY3IDQyMC44NDYgMTUwLjE4NCA0MDguMzcgMTU0LjUwNUMzODYuNzc1IDEzMy4zOTIgMzU3LjAyNiAxMTkuOTU4IDMyNC40IDExOS45NThDMjY2LjM0MiAxMTkuOTU4IDIxNy44ODMgMTYxLjIyIDIwNi44NDMgMjE1LjkyMUMxNTMuMTA0IDIyOS44MzcgMTE4LjU1NyAyODAuMjE4IDExOC41NTcgMzMxLjU1N0MxMTguNTU3IDM2NS4xNDYgMTMyLjk1IDM5Ny43NzEgMTU4Ljg2MSA0MjEuMjgzQzE1Ni40NjIgNDMxLjM2IDE1NS4wMjIgNDQxLjQzNyAxNTUuMDIyIDQ1MS41MUMxNTUuMDIyIDUyMC4xMjMgMjEwLjY4MiA1NzEuNDY2IDI3NC45NzggNTcxLjQ2NkMyODcuOTMxIDU3MS40NjYgMzAwLjQwNyA1NjkuNTQ5IDMxMi44ODMgNTY1LjIyOEMzMzQuNDczIDU4Ni4zNDEgMzY0LjIyMiA1OTkuNzc2IDM5Ni44NTIgNTk5Ljc3NloiIGZpbGw9ImJsYWNrIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNzIwIiBoZWlnaHQ9IjcyMCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNjA2OTM0IDAuMDk5OTc1NikiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNDg0LjEzOSIgaGVpZ2h0PSI0NzkuODE4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE4LjU1NyAxMTkuOTU4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",gemini:"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjFlbSIgc3R5bGU9ImZsZXg6bm9uZTtsaW5lLWhlaWdodDoxIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkdlbWluaTwvdGl0bGU+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9IiMzMTg2RkYiPjwvcGF0aD48cGF0aCBkPSJNMjAuNjE2IDEwLjgzNWExNC4xNDcgMTQuMTQ3IDAgMDEtNC40NS0zLjAwMSAxNC4xMTEgMTQuMTExIDAgMDEtMy42NzgtNi40NTIuNTAzLjUwMyAwIDAwLS45NzUgMCAxNC4xMzQgMTQuMTM0IDAgMDEtMy42NzkgNi40NTIgMTQuMTU1IDE0LjE1NSAwIDAxLTQuNDUgMy4wMDFjLS42NS4yOC0xLjMxOC41MDUtMi4wMDIuNjc4YS41MDIuNTAyIDAgMDAwIC45NzVjLjY4NC4xNzIgMS4zNS4zOTcgMi4wMDIuNjc3YTE0LjE0NyAxNC4xNDcgMCAwMTQuNDUgMy4wMDEgMTQuMTEyIDE0LjExMiAwIDAxMy42NzkgNi40NTMuNTAyLjUwMiAwIDAwLjk3NSAwYy4xNzItLjY4NS4zOTctMS4zNTEuNjc3LTIuMDAzYTE0LjE0NSAxNC4xNDUgMCAwMTMuMDAxLTQuNDUgMTQuMTEzIDE0LjExMyAwIDAxNi40NTMtMy42NzguNTAzLjUwMyAwIDAwMC0uOTc1IDEzLjI0NSAxMy4yNDUgMCAwMS0yLjAwMy0uNjc4eiIgZmlsbD0idXJsKCNsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfKSI+PC9wYXRoPjxwYXRoIGQ9Ik0yMC42MTYgMTAuODM1YTE0LjE0NyAxNC4xNDcgMCAwMS00LjQ1LTMuMDAxIDE0LjExMSAxNC4xMTEgMCAwMS0zLjY3OC02LjQ1Mi41MDMuNTAzIDAgMDAtLjk3NSAwIDE0LjEzNCAxNC4xMzQgMCAwMS0zLjY3OSA2LjQ1MiAxNC4xNTUgMTQuMTU1IDAgMDEtNC40NSAzLjAwMWMtLjY1LjI4LTEuMzE4LjUwNS0yLjAwMi42NzhhLjUwMi41MDIgMCAwMDAgLjk3NWMuNjg0LjE3MiAxLjM1LjM5NyAyLjAwMi42NzdhMTQuMTQ3IDE0LjE0NyAwIDAxNC40NSAzLjAwMSAxNC4xMTIgMTQuMTEyIDAgMDEzLjY3OSA2LjQ1My41MDIuNTAyIDAgMDAuOTc1IDBjLjE3Mi0uNjg1LjM5Ny0xLjM1MS42NzctMi4wMDNhMTQuMTQ1IDE0LjE0NSAwIDAxMy4wMDEtNC40NSAxNC4xMTMgMTQuMTEzIDAgMDE2LjQ1My0zLjY3OC41MDMuNTAzIDAgMDAwLS45NzUgMTMuMjQ1IDEzLjI0NSAwIDAxLTIuMDAzLS42Nzh6IiBmaWxsPSJ1cmwoI2xvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8pIj48L3BhdGg+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9InVybCgjbG9iZS1pY29ucy1nZW1pbmktMi1fUl8wXykiPjwvcGF0aD48ZGVmcz48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfIiB4MT0iNyIgeDI9IjExIiB5MT0iMTUuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjMDhCOTYyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDhCOTYyIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8iIHgxPSI4IiB4Mj0iMTEuNSIgeTE9IjUuNSIgeTI9IjExIj48c3RvcCBzdG9wLWNvbG9yPSIjRjk0NTQzIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjk0NTQzIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTItX1JfMF8iIHgxPSIzLjUiIHgyPSIxNy41IiB5MT0iMTMuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjRkFCQzEyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuNDYiIHN0b3AtY29sb3I9IiNGQUJDMTIiIHN0b3Atb3BhY2l0eT0iMCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==",deepseek:"data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RGVlcFNlZWs8L3RpdGxlPjxwYXRoIGQ9Ik0yMy43NDggNC42NTFjLS4yNTQtLjEyNC0uMzY0LjExMy0uNTEyLjIzMy0uMDUxLjA0LS4wOTQuMDktLjEzNy4xMzctLjM3Mi4zOTctLjgwNi42NTctMS4zNzMuNjI2LS44MjktLjA0Ni0xLjUzNy4yMTQtMi4xNjMuODQ4LS4xMzMtLjc4Mi0uNTc1LTEuMjQ4LTEuMjQ3LTEuNTQ4LS4zNTItLjE1NS0uNzA4LS4zMTEtLjk1NS0uNjUtLjE3Mi0uMjQtLjIxOS0uNTA5LS4zMDUtLjc3NC0uMDU1LS4xNi0uMTEtLjMyMy0uMjkzLS4zNS0uMi0uMDMxLS4yNzguMTM2LS4zNTYuMjc2LS4zMTMuNTcyLS40MzQgMS4yMDItLjQyMiAxLjg0LjAyNyAxLjQzNi42MzMgMi41OCAxLjgzOCAzLjM5My4xMzcuMDk0LjE3Mi4xODcuMTI5LjMyMy0uMDgyLjI4LS4xOC41NTMtLjI2Ni44MzMtLjA1NS4xNzktLjEzNy4yMTgtLjMyOC4xNGE1LjUgNS41IDAgMCAxLTEuNzM3LTEuMTc5Yy0uODU3LS44MjgtMS42MzEtMS43NDMtMi41OTctMi40NmExMiAxMiAwIDAgMC0uNjg5LS40N2MtLjk4NS0uOTU3LjEzLTEuNzQzLjM4Ny0xLjgzNi4yNy0uMDk4LjA5NC0uNDMzLS43NzgtLjQyOC0uODcyLjAwMy0xLjY3LjI5NS0yLjY4Ny42ODVhMyAzIDAgMCAxLS40NjUuMTM2IDkuNiA5LjYgMCAwIDAtMi44ODMtLjEwMWMtMS44ODUuMjEtMy4zOSAxLjEtNC40OTcgMi42MjJDLjA4MiA4Ljc3Ni0uMjMxIDEwLjg1NC4xNTIgMTMuMDJjLjQwMyAyLjI4NCAxLjU2OCA0LjE3NSAzLjM2IDUuNjUzIDEuODU3IDEuNTMzIDMuOTk3IDIuMjg0IDYuNDM4IDIuMTQgMS40ODItLjA4NSAzLjEzMi0uMjg0IDQuOTk0LTEuODYuNDcuMjM0Ljk2Mi4zMjggMS43OC4zOTguNjI5LjA1OCAxLjIzNS0uMDMxIDEuNzA1LS4xMjkuNzM1LS4xNTUuNjg0LS44MzYuNDE4LS45NjEtMi4xNTUtMS4wMDQtMS42ODItLjU5NS0yLjExMi0uOTI2IDEuMDk1LTEuMjk1IDIuNzY4LTMuNTk4IDMuMjg0LTYuNzMzLjA1LS4zNDYuMTE1LS44MzQuMTA4LTEuMTE0LS4wMDQtLjE3MS4wMzUtLjIzOC4yMy0uMjU3YTQuMiA0LjIgMCAwIDAgMS41NDUtLjQ3NWMxLjM5Ny0uNzYzIDEuOTYtMi4wMTYgMi4wOTMtMy41MTcuMDItLjIzLS4wMDQtLjQ2Ny0uMjQ3LS41ODhNMTEuNTggMTguMTY4Yy0yLjA4OC0xLjY0Mi0zLjEwMS0yLjE4My0zLjUyLTIuMTYtLjM5LjAyNC0uMzIuNDcyLS4yMzQuNzYzLjA5LjI4OC4yMDcuNDg3LjM3MS43NC4xMTQuMTY3LjE5Mi40MTYtLjExMy42MDMtLjY3My40MTYtMS44NDItLjE0LTEuODk3LS4xNjgtMS4zNjEtLjgwMS0yLjUtMS44Ni0zLjMwMS0zLjMwNi0uNzc1LTEuMzkzLTEuMjI1LTIuODg4LTEuMjk5LTQuNDgyLS4wMi0uMzg1LjA5NC0uNTIyLjQ3Ny0uNTkyYTQuNyA0LjcgMCAwIDEgMS41My0uMDM4YzIuMTMxLjMxMSAzLjk0NiAxLjI2NCA1LjQ2NyAyLjc3NC44NjguODYgMS41MjUgMS44ODcgMi4yMDIgMi44OS43MiAxLjA2NiAxLjQ5NCAyLjA4MiAyLjQ4IDIuOTE1LjM0OC4yOTEuNjI2LjUxMy44OTIuNjc3LS44MDIuMDktMi4xNC4xMDktMy4wNTUtLjYxNXptMS4wMDEtNi40NGEuMzA2LjMwNiAwIDAgMSAuNDE1LS4yODcuMy4zIDAgMCAxIC4xMTMuMDc0LjMuMyAwIDAgMSAuMDg2LjIxNGMwIC4xNy0uMTM2LjMwNy0uMzA4LjMwN2EuMzAzLjMwMyAwIDAgMS0uMzA2LS4zMDdtMy4xMSAxLjU5NmMtLjIuMDgxLS40LjE1MS0uNTkxLjE2YTEuMjUgMS4yNSAwIDAgMS0uNzk4LS4yNTRjLS4yNzQtLjIzLS40Ny0uMzU4LS41NTEtLjc1OGExLjcgMS43IDAgMCAxIC4wMTUtLjU4OGMuMDctLjMyNy0uMDA3LS41MzctLjIzOC0uNzI3LS4xODgtLjE1Ni0uNDI2LS4xOTktLjY4OS0uMTk5YS42LjYgMCAwIDEtLjI1NC0uMDc4LjI1My4yNTMgMCAwIDEtLjExNC0uMzU4IDEgMSAwIDAgMSAuMTkyLS4yMWMuMzU2LS4yMDIuNzY3LS4xMzYgMS4xNDYuMDE2LjM1Mi4xNDQuNjE4LjQwOCAxLjAwMS43ODIuMzkyLjQ1MS40NjIuNTc2LjY4NS45MTUuMTc2LjI2NC4zMzYuNTM2LjQ0Ni44NDguMDY2LjE5NC0uMDIuMzUzLS4yNS40NSIvPjwvc3ZnPg=="},i={claude:"Claude",openai:"OpenAI",gemini:"Gemini",deepseek:"DeepSeek"};function s(y,Y=""){const k=Y.trim().toLowerCase().replace(/[^a-z0-9]+/g,"");if(Y.trim())return{anthropic:"claude",claude:"claude",claudecode:"claude",openai:"openai",google:"gemini",googlegemini:"gemini",googleaistudio:"gemini",gemini:"gemini",deepseek:"deepseek"}[k];const he=y.trim().toLowerCase();if(/^(?:anthropic\/)?claude(?:$|[\s-])/.test(he))return"claude";if(/^(?:openai\/)?(?:gpt[-\s]?\d|chatgpt(?:$|[\s-])|o[134](?:$|[\s-]))/.test(he))return"openai";if(/^(?:google\/)?gemini(?:$|[\s-])/.test(he))return"gemini";if(/^deepseek(?:$|[\s-])/.test(he))return"deepseek"}const a=qe({props:{model:{type:String,default:""},provider:{type:String,default:""},size:{type:Number,default:20}},setup:y=>()=>{const Y=s(y.model,y.provider),k=Y!=="gemini",he=Math.round(y.size*(Y==="openai"?.82:.58));return Ue("span",{class:["model-provider-mark",{"is-color":Y&&!k}],"data-provider-logo":Y??"unknown","aria-hidden":"true",title:Y?`${i[Y]} logo`:"Custom model",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:`${y.size}px`,height:`${y.size}px`,boxSizing:"border-box",border:"1px solid var(--provider-logo-border, #e5e5e8)",borderRadius:`${y.size>=28?9:y.size>=20?6:4}px`,background:"var(--provider-logo-surface, #fff)",color:"var(--provider-logo-muted, #a1a1aa)"}},Y?[Ue("img",{src:o[Y],alt:"","aria-hidden":"true",class:["model-provider-image",{"is-monochrome":k}],"data-logo-source":"bundled-brand-asset",style:{display:"block",objectFit:"contain",width:`${he}px`,height:`${he}px`}})]:[Ue(ii,{size:Math.round(y.size*.5),strokeWidth:1.7,"aria-hidden":"true"})])}}),r=e,c=n,d=V([{id:"example-user-1",role:"user",text:"Check the typography on the homepage."},{id:"example-assistant-1",role:"assistant",parts:[{kind:"thought",text:"Check the hierarchy, type sizes, and contrast."},{kind:"tool",id:"read-page",title:"Read page styles",status:"success",input:"src/styles.css",output:"Read the heading, body, and supporting text styles."},{kind:"message",text:`Use three levels: headings, body text, and supporting details.

Keep the body readable, then refine the space between headings and paragraphs.`}]},{id:"example-user-2",role:"user",text:"Keep body text at 15px and supporting text at 12px or above."}]),M=V(""),x=V(r.models[0]??""),h=we({get:()=>r.modelValue??M.value,set:y=>{r.modelValue===void 0&&(M.value=y),c("update:modelValue",y)}}),O=we(()=>r.model??x.value),Q=we(()=>r.messages??d.value),K=we(()=>r.busy||Q.value.some(y=>y.streaming)),X=V(null),Z=V(null),ne=V(null),S=V(null),_=V(!0),j=V(!1),b=V(!1),E=V(!1),f=V(!1),R=V(null),F=V(null),U=V(null),ee=V(null),pe=`conversation-${Dn().replace(/:/g,"")}`,ge=V({}),le=V([]),ae=new Set;let Me=0,oe=0,A,G=!1,ie=!1,ue=!1,je,Ie;const De=new Set;function Qe(){De.forEach(y=>y.cancel()),De.clear()}function Pe(){document.hidden&&Qe()}function Ge(){Ie!=null&&Ie.matches&&Qe()}ze(()=>Q.value.map(y=>`${y.role}:${y.id}`),(y,Y)=>{if(!Ie||Ie.matches||document.hidden)return;const k=new Set(Y),he=new Set(y.filter($e=>$e.startsWith("user:")&&!k.has($e)).map($e=>$e.slice(5)));he.size&&ke(()=>{var $e;G||Ie!=null&&Ie.matches||document.hidden||($e=S.value)==null||$e.querySelectorAll(".message-user").forEach(se=>{if(!he.has(se.dataset.messageId??""))return;const fe=se.querySelector(".user-bubble");if(!fe)return;const Oe=fe.animate([{transform:"translate3d(0, 18px, 0)",opacity:0},{transform:"none",opacity:1}],{duration:360,easing:"cubic-bezier(.16,1,.3,1)"});Oe.id="message-send-arrival",De.add(Oe),Oe.onfinish=()=>{De.delete(Oe)},Oe.oncancel=()=>{De.delete(Oe)}})})});function ot(y){try{const Y=new URL(y,"https://component.invalid");return["http:","https:","mailto:"].includes(Y.protocol)?y:void 0}catch{return}}function p(y,Y=0){if(Y>4)return[y];const k=[],he=/`([^`\n]+)`|\[([^\]\n]+)\]\(([^\s)]+)\)|\*\*([^*\n]+)\*\*|\*([^*\n]+)\*/g;let $e=0;for(const se of y.matchAll(he)){if(k.push(y.slice($e,se.index)),se[1]!==void 0)k.push(Ue("code",se[1]));else if(se[2]!==void 0){const fe=ot(se[3]);k.push(Ue(fe?"a":"span",fe?{href:fe,target:"_blank",rel:"noopener noreferrer"}:{},p(se[2],Y+1)))}else k.push(Ue(se[4]!==void 0?"strong":"em",p(se[4]??se[5]??"",Y+1)));$e=se.index+se[0].length}return k.push(y.slice($e)),k}function D(y){var se;const Y=y.replace(/\r\n?/g,`
`).split(`
`),k=[];let he=0;const $e=fe=>/^(?:\s*```|#{1,4}\s|\s*[-*+]\s|\s*\d+\.\s|>\s?)/.test(fe);for(;he<Y.length;){const fe=Y[he];if(!fe.trim()){he++;continue}if(/^\s*```/.test(fe)){const Oe=[];for(he++;he<Y.length&&!/^\s*```/.test(Y[he]);)Oe.push(Y[he++]);he++,k.push(Ue("pre",[Ue("code",Oe.join(`
`))]))}else if(/^#{1,4}\s/.test(fe)){const Oe=fe.match(/^(#{1,4})\s+(.*)$/);k.push(Ue(`h${Oe[1].length}`,p(Oe[2]))),he++}else if(/^\s*(?:[-*+]|\d+\.)\s/.test(fe)){const Oe=/^\s*\d+\./.test(fe),Bt=[],Fn=Oe?/^\s*\d+\.\s+(.*)$/:/^\s*[-*+]\s+(.*)$/;for(;he<Y.length&&Fn.test(Y[he]);)Bt.push(Ue("li",p(Y[he++].replace(Fn,"$1"))));const lt=Oe?Number(((se=fe.match(/^\s*(\d+)/))==null?void 0:se[1])??1):void 0;k.push(Ue(Oe?"ol":"ul",Oe?{start:lt}:{},Bt))}else if(/^>\s?/.test(fe)){const Oe=[];for(;he<Y.length&&/^>\s?/.test(Y[he]);)Oe.push(Y[he++].replace(/^>\s?/,""));k.push(Ue("blockquote",p(Oe.join(`
`))))}else{const Oe=[fe];for(he++;he<Y.length&&Y[he].trim()&&!$e(Y[he]);)Oe.push(Y[he++]);k.push(Ue("p",p(Oe.join(`
`))))}}return k}const W=qe({props:{text:{type:String,default:""}},setup:y=>()=>Ue("div",{class:"conversation-prose"},D(y.text))}),J=qe({props:{name:{type:String,required:!0},size:{type:Number,default:18}},setup:y=>()=>Ue("svg",{class:["chat-glyph",`glyph-${y.name}`],width:y.size,height:y.size,viewBox:"0 0 24 24",fill:y.name==="stop"?"currentColor":"none",stroke:y.name==="stop"?"none":"currentColor","stroke-width":y.name==="stop"?void 0:1.7,"stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[Ue("g",{class:"glyph-motion"},y.name==="send"?[Ue("path",{d:"M12 18V6m-6 6 6-6 6 6"})]:y.name==="stop"?[Ue("rect",{x:3.75,y:3.75,width:16.5,height:16.5,rx:3})]:[Ue("path",{d:"M12 3A9 9 0 1 1 3 12"}),Ue("circle",{cx:3,cy:12,r:1.65,fill:"currentColor",stroke:"none"})])])}),I=qe({setup:()=>()=>Ue("span",{class:"thinking-busy"},[Ue("span",{class:"thinking-lamp","aria-hidden":"true"},[Ue("span",{class:"thinking-lamp-halo"}),Ue("span",{class:"thinking-lamp-core"})]),Ue("span",{class:"thinking-sheen"},"Thinking…")])}),w=we(()=>Q.value.map(y=>{var Fn;const Y=encodeURIComponent(y.id),k=[...y.parts??[]];y.text&&!k.some(lt=>lt.kind==="message")&&k.push({kind:"message",text:y.text});const he=[];for(const[lt,Ht]of k.entries())if(Ht.kind==="tool"){const To=he[he.length-1];(To==null?void 0:To.kind)==="tools"?To.tools.push(Ht):he.push({kind:"tools",key:`${Y}-tools-${lt}`,tools:[Ht]})}else Ht.text&&he.push({kind:Ht.kind,key:`${Y}-${Ht.kind}-${encodeURIComponent(Ht.id??String(lt))}`,text:Ht.text});let $e=-1;for(let lt=he.length-1;lt>=0;lt--)if(((Fn=he[lt])==null?void 0:Fn.kind)==="message"){$e=lt;break}const se=!y.streaming,fe=he.filter((lt,Ht)=>Ht!==$e),Oe=he[$e],Bt=he[he.length-1];return{message:y,prefix:Y,tailKey:Bt==null?void 0:Bt.key,blocks:se?[...fe,...Oe?[Oe]:[]]:he,processKey:`${Y}-process`,workKeys:new Set(fe.map(lt=>lt.key)),responseKey:Oe==null?void 0:Oe.key,outputKey:y.streaming&&(Bt==null?void 0:Bt.kind)==="message"?Bt.key:void 0,failures:k.filter(lt=>lt.kind==="tool"&&lt.status==="failed").length}})),L=we(()=>{const y=new Set;for(const Y of w.value){Y.workKeys.size&&y.add(Y.processKey);for(const k of Y.blocks)if(y.add(k.key),k.kind==="tools")for(const he of k.tools)P(he)&&y.add(de(k,he))}return y});ze(L,y=>{ge.value=Object.fromEntries(Object.entries(ge.value).filter(([Y])=>y.has(Y)))});function g(y,Y=!1){return ge.value[y]??Y}function C(y){return`${pe}-${y}`}function $(y,Y=!1){const k=document.getElementById(C(y));k&&ve.set(k,k.getBoundingClientRect().height),ge.value={...ge.value,[y]:!g(y,Y)},ue=!0,_.value=!1}function de(y,Y){return`${y.key}-tool-${encodeURIComponent(Y.id)}`}function P(y){return!!(y.input||y.output)}function v(y,Y=!1){return y.status==="failed"?"failed":Y&&(y.status==="running"||y.status==="pending")?"running":"done"}function N(y,Y=!1){return{running:"Running",failed:"Failed",done:"Done"}[v(y,Y)]}function T(y,Y){r.disabled||Y.disabled||(ue=!0,_.value=!1,c("message-action",{messageId:y.id,actionId:Y.id}))}function B(y,Y=!1){return y.tools.some(k=>v(k,Y)==="running")?"running":y.tools.some(k=>v(k,Y)==="failed")?"failed":"done"}function ce(y,Y=!1){const k=[...y.tools].reverse().find($e=>v($e,Y)==="running");if(k)return[k.title,k.summary].filter(Boolean).join(" · ");const he=[...new Set(y.tools.map($e=>$e.title))];return he.slice(0,3).join(" · ")+(he.length>3?" …":"")}const ve=new WeakMap;ze(()=>Q.value.map(y=>[y.id,!!y.streaming]),(y,Y)=>{const k=new Map(Y);for(const[he,$e]of y){if($e||!k.get(he))continue;const se=w.value.find(fe=>fe.message.id===he);if(!(!se||g(se.processKey,!!se.message.interrupted)))for(const fe of se.workKeys){const Oe=document.getElementById(C(`${fe}-shell`));Oe&&ve.set(Oe,Oe.getBoundingClientRect().height)}}},{flush:"pre"});function Se(y){const Y=y;Y.removeAttribute("inert"),Y.style.height=`${ve.get(y)??Y.getBoundingClientRect().height}px`}function Ce(y){const Y=y;Y.offsetHeight,Y.style.height=`${Y.scrollHeight}px`,ve.delete(y)}function Ye(y){y.style.removeProperty("height")}function Ze(y){const Y=y,k=getComputedStyle(Y).display==="none"?ve.get(y)??0:Y.getBoundingClientRect().height;ve.set(y,k),Y.style.height=`${k}px`}function Lt(y){const Y=y;Y.setAttribute("inert",""),Y.style.height=`${ve.get(y)??Y.getBoundingClientRect().height}px`,ve.delete(y),Y.offsetHeight,Y.style.height="0px"}function it(){const y=ne.value;y&&(j.value=y.scrollHeight-y.scrollTop-y.clientHeight>=80,_.value=!ue&&!j.value,b.value&&st())}function st(){b.value=!0,clearTimeout(je),je=setTimeout(()=>{b.value=!1},650)}function Dt(){ue=!1,st()}function nn(y){y.target===ne.value&&Dt()}function Wt(y){y.target===ne.value&&!y.ctrlKey&&!y.altKey&&!y.metaKey&&["ArrowUp","ArrowDown","PageUp","PageDown","Home","End"," "].includes(y.key)&&Dt()}function wn(){const y=ne.value;y&&(j.value=y.scrollHeight-y.scrollTop-y.clientHeight>=80),re()}function re(){G||ue||!_.value||oe||(oe=requestAnimationFrame(()=>{oe=0,!G&&!ue&&_.value&&ne.value&&(ne.value.scrollTop=ne.value.scrollHeight)}))}function xe(){ue=!1,_.value=!0,ke(re)}function ft(){const y=X.value;y&&(y.style.height="auto",y.style.height=`${Math.min(Math.max(y.scrollHeight,40),128)}px`)}ze(h,()=>ke(ft)),ze(Q,()=>ke(re),{deep:!0}),ze(K,()=>ke(re));const nt=we(()=>!r.disabled&&!K.value&&!!(h.value.trim()||le.value.length)&&(!r.models.length||r.models.includes(O.value)));function at(y){r.disabled||(h.value=y.target.value)}function wt(){if(!nt.value||E.value||ie)return;ie=!0;const y=h.value.trim(),Y=le.value.map(k=>k.file);if(r.messages===void 0)d.value=[...d.value,{id:`${pe}-user-${++Me}`,role:"user",text:y,attachments:le.value.map(k=>({id:k.id,name:k.file.name,mimeType:k.file.type,url:k.url}))}];else for(const k of le.value)k.url&&ji(k.url);h.value="",le.value=[],c("send",{text:y,model:O.value,files:Y}),xe(),ke(()=>{ie=!1})}function Ml(y){y.key!=="Enter"||y.shiftKey||y.ctrlKey||y.metaKey||y.altKey||y.isComposing||E.value||y.keyCode===229||(y.preventDefault(),wt())}function zs(y){if(r.disabled)return;const Y=[...le.value];for(const k of y){if(Y.some($e=>$e.file.name===k.name&&$e.file.size===k.size&&$e.file.type===k.type&&$e.file.lastModified===k.lastModified))continue;const he=k.type.startsWith("image/")?URL.createObjectURL(k):void 0;he&&ae.add(he),Y.push({id:`${pe}-file-${++Me}`,file:k,url:he})}le.value=Y}function gl(y){const Y=y.target;zs(Array.from(Y.files??[])),Y.value=""}function fl(y){var k;if(r.disabled)return;const Y=Array.from(((k=y.clipboardData)==null?void 0:k.files)??[]).filter(he=>he.type.startsWith("image/"));Y.length&&(y.preventDefault(),zs(Y))}function ji(y){var Y;((Y=ee.value)==null?void 0:Y.url)===y&&wi(),URL.revokeObjectURL(y),ae.delete(y)}function hl(y){if(r.disabled)return;const Y=le.value.find(k=>k.id===y);Y!=null&&Y.url&&ji(Y.url),le.value=le.value.filter(k=>k.id!==y)}function Di(y){var Y;if(!(!((Y=y.mimeType)!=null&&Y.startsWith("image/"))||!y.url))return Io(y)??(/^data:image\/(?:png|jpeg|gif|webp|avif|bmp);/i.test(y.url)?y.url:void 0)}function Io(y){if(y.url)try{const Y=new URL(y.url,"https://component.invalid");return["http:","https:","blob:"].includes(Y.protocol)?y.url:void 0}catch{return}}async function As(y,Y){ee.value={url:y,name:Y},await ke(),!G&&U.value&&!U.value.open&&U.value.showModal()}function wi(){var y;(y=U.value)==null||y.close(),ee.value=null}function pn(y=!1){f.value=!1,y&&ke(()=>{var Y;G||(Y=F.value)==null||Y.focus({preventScroll:!0})})}function Ii(){var y;return[...((y=R.value)==null?void 0:y.querySelectorAll('[role="menuitemradio"]'))??[]]}function ks(y){if(!y)return;y.focus({preventScroll:!0});const Y=y.parentElement;Y&&(y.offsetTop<Y.scrollTop?Y.scrollTop=y.offsetTop:y.offsetTop+y.offsetHeight>Y.scrollTop+Y.clientHeight&&(Y.scrollTop=y.offsetTop+y.offsetHeight-Y.clientHeight))}async function Ss(){r.disabled||!r.models.length||(f.value=!0,await ke(),!G&&f.value&&ks(Ii().find(y=>y.getAttribute("aria-checked")==="true")??Ii()[0]))}function ml(y){r.disabled||!r.models.includes(y)||(r.model===void 0&&(x.value=y),c("update:model",y),pn(!0))}async function yl(y){if(y.isComposing||r.disabled||y.ctrlKey||y.altKey||y.metaKey)return;if(y.key==="Escape"&&f.value){y.preventDefault(),y.stopPropagation(),pn(!0);return}if(!["ArrowDown","ArrowUp","Home","End"].includes(y.key))return;if(y.preventDefault(),!f.value){await Ss();return}const Y=Ii();if(!Y.length)return;const k=Y.indexOf(document.activeElement),he=y.key==="Home"?0:y.key==="End"?Y.length-1:(k+(y.key==="ArrowDown"?1:-1)+Y.length)%Y.length;ks(Y[he])}function Es(y){var Y;(Y=R.value)!=null&&Y.contains(y.target)||pn()}function vl(y){var Y;(Y=R.value)!=null&&Y.contains(y.relatedTarget)||pn()}return ze(()=>r.models,y=>{r.model===void 0&&!y.includes(x.value)&&(x.value=y[0]??""),pn()},{deep:!0}),ze(()=>r.model,(y,Y)=>{y===void 0&&Y!==void 0&&(x.value=r.models.includes(Y)?Y:r.models[0]??"")}),ze(()=>r.disabled,y=>{y&&pn()}),ze(()=>r.sessionKey,()=>{h.value="";for(const y of[...ae])ji(y);le.value=[],d.value=[],ge.value={},pn(),E.value=!1,xe()}),zt(()=>{Ie=matchMedia("(prefers-reduced-motion: reduce)"),Ie.addEventListener("change",Ge),document.addEventListener("visibilitychange",Pe),document.addEventListener("pointerdown",Es),typeof ResizeObserver<"u"&&(A=new ResizeObserver(wn),S.value&&A.observe(S.value),ne.value&&A.observe(ne.value)),ft(),xe()}),Yt(()=>{var y;G=!0,clearTimeout(je),Qe(),Ie==null||Ie.removeEventListener("change",Ge),document.removeEventListener("visibilitychange",Pe),oe&&cancelAnimationFrame(oe),A==null||A.disconnect(),document.removeEventListener("pointerdown",Es);for(const Y of ae)URL.revokeObjectURL(Y);ae.clear(),(y=U.value)==null||y.close()}),t({focus:()=>{var y;return(y=X.value)==null?void 0:y.focus()},scrollToBottom:xe}),(y,Y)=>(m(),z("section",Kd,[l("div",Jd,[l("div",{ref_key:"scroller",ref:ne,class:"conversation-scroller","data-scrolling":b.value||void 0,role:"region","aria-label":"Messages",tabindex:"0",onScrollPassive:it,onWheelPassive:Dt,onTouchmovePassive:Dt,onPointerdown:nn,onKeydown:Wt},[l("div",{ref_key:"transcript",ref:S,class:"conversation-transcript"},[!w.value.length&&!K.value?(m(),z("p",Xd,"Start a conversation")):me("",!0),l("div",ep,[(m(!0),z(Ne,null,We(w.value,k=>{var he,$e;return m(),z("article",{key:k.message.id,class:ye(["conversation-message",`message-${k.message.role}`]),"data-message-id":k.message.id,"aria-label":k.message.role==="user"?"User message":k.message.role==="assistant"?"Assistant message":"System message"},[k.message.role==="system"?(m(),z("p",np,te(k.message.text),1)):(m(),z(Ne,{key:1},[(he=k.message.attachments)!=null&&he.length?(m(),z("div",op,[(m(!0),z(Ne,null,We(k.message.attachments,(se,fe)=>(m(),z(Ne,{key:se.id??fe},[Di(se)?(m(),z("button",{key:0,type:"button",class:"image-attachment","aria-label":`Preview ${se.name}`,onClick:Oe=>As(Di(se),se.name)},[l("img",{src:Di(se),alt:se.name,loading:"lazy",onLoad:re},null,40,sp)],8,ip)):(m(),Le(cn(Io(se)?"a":"span"),{key:1,class:"message-file",href:Io(se),download:Io(se)?se.name:void 0,title:se.name},{default:Xe(()=>[H(q(La),{"aria-hidden":"true",size:17}),l("span",null,te(se.name),1)]),_:2},1032,["href","download","title"]))],64))),128))])):me("",!0),k.message.role==="user"&&k.message.text?(m(),z("div",ap,[H(q(W),{text:k.message.text},null,8,["text"])])):k.message.role==="assistant"?(m(),z(Ne,{key:2},[H(dt,{name:"conversation-fold",onBeforeEnter:Se,onEnter:Ce,onAfterEnter:Ye,onLeave:Lt,onAfterLeave:Ye,onEnterCancelled:Ze,onLeaveCancelled:Ze},{default:Xe(()=>[!k.message.streaming&&k.workKeys.size?(m(),z("div",rp,[l("button",{type:"button",class:"process-toggle","aria-expanded":g(k.processKey,!!(k.message.streaming||k.message.interrupted)),"aria-controls":[...k.workKeys].map(se=>C(`${se}-shell`)).join(" "),onClick:se=>$(k.processKey,!!(k.message.streaming||k.message.interrupted))},[Y[6]||(Y[6]=l("span",null,"Process",-1)),H(q(po),{"aria-hidden":"true",size:12,class:ye(["process-chevron",{"is-open":g(k.processKey,!!(k.message.streaming||k.message.interrupted))}])},null,8,["class"]),k.failures?(m(),z("span",cp,te(k.failures)+" failed",1)):me("",!0),k.message.interrupted?(m(),z("span",up,"Interrupted")):me("",!0)],8,lp)])):me("",!0)]),_:2},1024),(m(!0),z(Ne,null,We(k.blocks,se=>(m(),Le(dt,{key:se.key,name:"conversation-fold",onBeforeEnter:Se,onEnter:Ce,onAfterEnter:Ye,onLeave:Lt,onAfterLeave:Ye,onEnterCancelled:Ze,onLeaveCancelled:Ze,persisted:""},{default:Xe(()=>[et(l("div",{id:C(`${se.key}-shell`),class:ye(["conversation-fold message-block",{"completed-response":!k.message.streaming&&k.workKeys.size&&se.key===k.responseKey}]),"data-block-kind":se.kind,inert:!k.message.streaming&&k.workKeys.has(se.key)&&!g(k.processKey,!!(k.message.streaming||k.message.interrupted))||void 0,"aria-hidden":!k.message.streaming&&k.workKeys.has(se.key)&&!g(k.processKey,!!(k.message.streaming||k.message.interrupted))||void 0},[se.kind==="message"?(m(),Le(q(W),{key:0,text:se.text},null,8,["text"])):se.kind==="thought"?(m(),z("div",{key:1,class:ye(["thought-block",{"elapsed-thought":!k.message.streaming}])},[k.message.streaming?(m(),z(Ne,{key:1},[l("button",{type:"button",class:"detail-toggle thought-toggle","aria-expanded":g(se.key,se.key===k.tailKey),"aria-controls":C(se.key),onClick:fe=>$(se.key,se.key===k.tailKey)},[se.key===k.tailKey?(m(),Le(q(J),{key:0,name:"arc",size:12,class:"working-icon"})):(m(),Le(q(bd),{key:1,"aria-hidden":"true",size:12})),Y[7]||(Y[7]=l("span",{class:"thought-title"},"Thinking process",-1)),se.key===k.tailKey?(m(),z("span",gp,"Generating…")):me("",!0),H(q(_t),{"aria-hidden":"true",size:12,class:ye(["disclosure",{"is-open":g(se.key,se.key===k.tailKey)}])},null,8,["class"])],8,Mp),H(dt,{name:"conversation-fold",onBeforeEnter:Se,onEnter:Ce,onAfterEnter:Ye,onLeave:Lt,onAfterLeave:Ye,onEnterCancelled:Ze,onLeaveCancelled:Ze,persisted:""},{default:Xe(()=>[et(l("div",{id:C(se.key),class:"conversation-fold",inert:!g(se.key,se.key===k.tailKey)||void 0,"aria-hidden":!g(se.key,se.key===k.tailKey)||void 0},[l("p",hp,te(se.text),1)],8,fp),[[St,g(se.key,se.key===k.tailKey)]])]),_:2},1024)],64)):(m(),z("p",pp,te(se.text),1))],2)):(m(),z("div",{key:2,class:"tools-block","data-state":B(se,!!k.message.streaming)},[l("button",{type:"button",class:"detail-toggle tools-toggle","aria-expanded":g(se.key),"aria-controls":C(se.key),onClick:fe=>$(se.key)},[B(se,!!k.message.streaming)==="running"?(m(),Le(q(J),{key:0,name:"arc",size:12,class:"working-icon"})):B(se)==="failed"?(m(),Le(q(oi),{key:1,"aria-hidden":"true",size:12,class:"error-icon"})):(m(),Le(q(rt),{key:2,"aria-hidden":"true",size:12})),l("span",vp,te(se.tools.length)+" tool"+te(se.tools.length===1?"":"s")+" used",1),B(se,!!k.message.streaming)==="failed"?(m(),z("span",Np,te(se.tools.filter(fe=>fe.status==="failed").length)+" failed",1)):me("",!0),l("span",{class:ye(["tools-context",{"running-context":B(se,!!k.message.streaming)==="running"}])},te(ce(se,!!k.message.streaming)),3),H(q(_t),{"aria-hidden":"true",size:12,class:ye(["disclosure",{"is-open":g(se.key)}])},null,8,["class"])],8,yp),H(dt,{name:"conversation-fold",onBeforeEnter:Se,onEnter:Ce,onAfterEnter:Ye,onLeave:Lt,onAfterLeave:Ye,onEnterCancelled:Ze,onLeaveCancelled:Ze,persisted:""},{default:Xe(()=>[et(l("div",{id:C(se.key),class:"conversation-fold",inert:!g(se.key)||void 0,"aria-hidden":!g(se.key)||void 0},[l("ul",bp,[(m(!0),z(Ne,null,We(se.tools,fe=>(m(),z("li",{key:fe.id,"data-state":v(fe,!!k.message.streaming)},[(m(),Le(cn(P(fe)?"button":"div"),{type:P(fe)?"button":void 0,class:"tool-row","aria-expanded":P(fe)?g(de(se,fe),fe.status==="failed"):void 0,"aria-controls":P(fe)?C(de(se,fe)):void 0,onClick:Oe=>P(fe)&&$(de(se,fe),fe.status==="failed")},{default:Xe(()=>[v(fe,!!k.message.streaming)==="running"?(m(),Le(q(J),{key:0,name:"arc",size:16,class:"working-icon"})):fe.status==="failed"?(m(),Le(q(oi),{key:1,"aria-hidden":"true",size:16,class:"error-icon"})):/read|读取/i.test(fe.title)?(m(),Le(q(Kr),{key:2,"aria-hidden":"true",size:16})):(m(),Le(q(Xr),{key:3,"aria-hidden":"true",size:16})),l("span",{class:ye(["tool-title",{"with-summary":fe.summary}]),title:fe.title},te(fe.title),11,jp),fe.summary?(m(),z("span",{key:4,class:"tool-summary",title:fe.summary},te(fe.summary),9,Dp)):me("",!0),l("span",{class:ye(["tool-status",{"error-text":fe.status==="failed","running-context":v(fe,!!k.message.streaming)==="running"}])},te(N(fe,!!k.message.streaming)),3),P(fe)?(m(),Le(q(_t),{key:5,"aria-hidden":"true",size:16,class:ye(["disclosure",{"is-open":g(de(se,fe),fe.status==="failed")}])},null,8,["class"])):me("",!0)]),_:2},1032,["type","aria-expanded","aria-controls","onClick"])),H(dt,{name:"conversation-fold",onBeforeEnter:Se,onEnter:Ce,onAfterEnter:Ye,onLeave:Lt,onAfterLeave:Ye,onEnterCancelled:Ze,onLeaveCancelled:Ze,persisted:""},{default:Xe(()=>[et(l("div",{id:C(de(se,fe)),class:"conversation-fold",inert:!g(de(se,fe),fe.status==="failed")||void 0,"aria-hidden":!g(de(se,fe),fe.status==="failed")||void 0},[l("div",Ip,[fe.input?(m(),z(Ne,{key:0},[Y[8]||(Y[8]=l("span",null,"Input",-1)),l("pre",null,te(fe.input),1)],64)):me("",!0),fe.output?(m(),z(Ne,{key:1},[l("span",{class:ye({"error-text":fe.status==="failed"})},"Output",2),l("pre",{class:ye({"failed-output":fe.status==="failed"})},te(fe.output),3)],64)):me("",!0)])],8,wp),[[St,P(fe)&&g(de(se,fe),fe.status==="failed")]])]),_:2},1024)],8,Lp))),128))])],8,xp),[[St,g(se.key)]])]),_:2},1024)],8,mp))],10,dp),[[St,k.message.streaming||!k.workKeys.has(se.key)||g(k.processKey,!!(k.message.streaming||k.message.interrupted))]])]),_:2},1024))),128)),k.message.streaming?(m(),z("div",{key:0,class:ye(["generation-status",{"is-outputting":k.outputKey}]),role:"status"},[k.outputKey?(m(),z("span",Tp,"Writing")):(m(),Le(q(I),{key:1}))],2)):k.message.interrupted?(m(),z("p",zp,"Stopped")):me("",!0),k.message.error?(m(),z("p",Ap,te(k.message.error),1)):me("",!0)],64)):me("",!0),($e=k.message.actions)!=null&&$e.length?(m(),z("div",kp,[(m(!0),z(Ne,null,We(k.message.actions,se=>(m(),z("button",{key:se.id,type:"button",class:"message-action","data-message-action":se.id,disabled:e.disabled||se.disabled,onClick:fe=>T(k.message,se)},[se.kind==="preview"?(m(),Le(q(vd),{key:0,size:15,"aria-hidden":"true"})):me("",!0),Te(te(se.label),1)],8,Sp))),128))])):me("",!0)],64))],10,tp)}),128))]),e.busy&&!Q.value.some(k=>k.streaming)?(m(),z("div",Ep,[H(q(I))])):me("",!0)],512)],40,qd),j.value?(m(),z("button",{key:0,type:"button",class:"jump-latest","aria-label":"Jump to latest message",onClick:xe},[H(q(Md),{"aria-hidden":"true",size:15}),Y[9]||(Y[9]=l("span",null,"Jump to latest",-1))])):me("",!0)]),l("div",Cp,[e.error?(m(),z("p",Op,te(e.error),1)):me("",!0),le.value.length?(m(),z("div",Up,[(m(!0),z(Ne,null,We(le.value,k=>(m(),z("div",{key:k.id,class:"pending-file"},[k.url?(m(),z("button",{key:0,type:"button",class:"pending-image","aria-label":`Preview ${k.file.name}`,onClick:he=>As(k.url,k.file.name)},[l("img",{src:k.url,alt:k.file.name},null,8,Yp)],8,Qp)):(m(),z("span",{key:1,class:"pending-name",title:k.file.name},[H(q(La),{"aria-hidden":"true",size:17}),l("span",null,te(k.file.name),1)],8,Pp)),l("button",{type:"button",class:"remove-file","aria-label":`Remove ${k.file.name}`,disabled:e.disabled,onClick:he=>hl(k.id)},[H(q(Pn),{"aria-hidden":"true",size:12})],8,_p)]))),128))])):me("",!0),l("div",{class:ye(["conversation-composer",{"is-disabled":e.disabled}])},[l("div",$p,[l("textarea",{ref_key:"textarea",ref:X,value:h.value,rows:"1",placeholder:e.placeholder,"aria-label":"Message",disabled:e.disabled,onInput:at,onKeydown:Ml,onCompositionstart:Y[0]||(Y[0]=k=>E.value=!0),onCompositionend:Y[1]||(Y[1]=k=>E.value=!1),onPaste:fl},null,40,Rp)]),l("div",Wp,[l("button",{type:"button",class:"conversation-action attach-action","aria-label":"Add attachments",title:"Add attachments",disabled:e.disabled,onClick:Y[2]||(Y[2]=k=>{var he;return(he=Z.value)==null?void 0:he.click()})},[H(q(Jr),{"aria-hidden":"true",size:18})],8,Bp),l("input",{ref_key:"fileInput",ref:Z,type:"file",multiple:"",class:"conversation-file-input",accept:e.accept||void 0,disabled:e.disabled,"aria-label":"Choose files",onChange:gl},null,40,Hp),e.models.length?(m(),z("div",{key:0,ref_key:"modelRoot",ref:R,class:"conversation-model",onKeydown:yl,onFocusout:vl},[l("button",{ref_key:"modelTrigger",ref:F,type:"button",class:"model-trigger",disabled:e.disabled,"aria-label":"Select model","aria-haspopup":"menu","aria-expanded":f.value,"aria-controls":`${pe}-models`,onClick:Y[3]||(Y[3]=k=>f.value?pn():Ss())},[O.value?(m(),Le(q(a),{key:0,model:O.value},null,8,["model"])):me("",!0),l("span",Gp,te(e.models.includes(O.value)?O.value:"Select model"),1),H(q(_t),{"aria-hidden":"true",size:13,class:ye(["disclosure",{"is-open":f.value}])},null,8,["class"])],8,Vp),f.value?(m(),z("div",{key:0,id:`${pe}-models`,class:"conversation-model-menu",role:"menu","aria-label":"Available models"},[(m(!0),z(Ne,null,We(e.models,k=>(m(),z("button",{key:k,type:"button",role:"menuitemradio","aria-checked":O.value===k,onClick:he=>ml(k)},[H(q(a),{model:k},null,8,["model"]),l("span",Kp,te(k),1),O.value===k?(m(),Le(q(rt),{key:0,"aria-hidden":"true",size:14})):me("",!0)],8,Zp))),128))],8,Fp)):me("",!0)],544)):me("",!0),l("div",Jp,[l("button",{type:"button",class:ye(["conversation-action composer-primary",K.value?"stop-action":"send-action"]),"data-kind":K.value?"stop":"send",disabled:K.value?e.disabled:!nt.value,"aria-label":K.value?"Stop generating":"Send message",title:K.value?"Stop generating":"Send message",onClick:Y[4]||(Y[4]=k=>K.value?!e.disabled&&c("stop"):wt())},[H(dt,{name:"primary-icon",mode:"out-in"},{default:Xe(()=>[(m(),Le(q(J),{key:K.value?"stop":"send",name:K.value?"stop":"send",size:K.value?16:18},null,8,["name","size"]))]),_:1})],10,qp)])])],2)]),l("dialog",{ref_key:"previewDialog",ref:U,class:"conversation-image-dialog","aria-label":"Image preview",onClick:Ot(wi,["self"]),onClose:Y[5]||(Y[5]=k=>ee.value=null)},[ee.value?(m(),z(Ne,{key:0},[l("button",{type:"button",class:"close-preview","aria-label":"Close image preview",onClick:wi},[H(q(Pn),{"aria-hidden":"true",size:20})]),l("img",{src:ee.value.url,alt:ee.value.name},null,8,Xp),l("p",null,te(ee.value.name),1)],64)):me("",!0)],544)]))}}),el=jt(eM,[["__scopeId","data-v-d64f00d3"]]),tM={class:"thinking-label"},nM=qe({__name:"ThinkingIndicator",props:{label:{default:"Thinking"},busy:{type:Boolean,default:!0}},setup(e){return(t,n)=>(m(),z("span",{class:ye(["thinking-indicator",{"is-busy":e.busy}]),role:"status"},[n[0]||(n[0]=l("span",{class:"thinking-lamp","aria-hidden":"true"},[l("i",{class:"lamp-halo"}),l("i",{class:"lamp-core"})],-1)),l("span",tM,te(e.label),1)],2))}}),oM=jt(nM,[["__scopeId","data-v-067d7323"]]),iM={class:"model-label"},sM=["aria-expanded","disabled"],aM={class:"model-description"},rM={class:"model-search"},lM=["aria-activedescendant"],cM=["id","onPointerenter","onFocus","aria-selected","onClick"],uM={key:0,class:"no-models"},dM=qe({__name:"ModelSelector",props:{modelValue:{default:"claude-sonnet"},options:{default:()=>[{id:"claude-sonnet",name:"Claude Sonnet 4",provider:"Anthropic",description:"General purpose",color:"#c58763"},{id:"gpt-4.1",name:"GPT-4.1",provider:"OpenAI",description:"Everyday reasoning",color:"#3b9b81"},{id:"gemini-pro",name:"Gemini 2.5 Pro",provider:"Google",description:"Complex tasks",color:"#648af4"},{id:"deepseek",name:"DeepSeek V3",provider:"DeepSeek",description:"Coding",color:"#6385f8"}]}},emits:["update:modelValue","select"],setup(e,{emit:t}){const n={claude:"data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+Q2xhdWRlPC90aXRsZT48cGF0aCBkPSJtNC43MTQ0IDE1Ljk1NTUgNC43MTc0LTIuNjQ3MS4wNzktLjIzMDctLjA3OS0uMTI3NWgtLjIzMDdsLS43ODkzLS4wNDg2LTIuNjk1Ni0uMDcyOS0yLjMzNzUtLjA5NzEtMi4yNjQ2LS4xMjE0LS41NzA3LS4xMjE1LS41MzQzLS43MDQyLjA1NDYtLjM1MjIuNDc5Ny0uMzIxOC42ODYuMDYwOCAxLjUxNzkuMTAzMiAyLjI3NjcuMTU3OCAxLjY1MTQuMDk3MiAyLjQ0NjguMjU1aC4zODg2bC4wNTQ2LS4xNTc5LS4xMzM2LS4wOTcxLS4xMDMyLS4wOTcyTDYuOTczIDkuODM1NmwtMi41NS0xLjY4NzktMS4zMzU2LS45NzE0LS43MjI1LS40OTE4LS4zNjQzLS40NjE0LS4xNTc4LTEuMDA3OC42NTU3LS43MjI1Ljg4MDMuMDYwNy4yMjQ2LjA2MDcuODkyNS42ODYgMS45MDY0IDEuNDc1NCAyLjQ4OTMgMS44MzM2LjM2NDMuMzAzNS4xNDU3LS4xMDMyLjAxODItLjA3MjgtLjE2NC0uMjczMy0xLjM1MzktMi40NDY3LTEuNDQ1LTIuNDg5My0uNjQzNS0xLjAzMi0uMTctLjYxOTRjLS4wNjA3LS4yNTUtLjEwMzItLjQ2NzQtLjEwMzItLjcyODVMNi4yODcuMTMzNSA2LjY5OTcgMGwuOTk1Ny4xMzM2LjQxOS4zNjQyLjYxOTIgMS40MTQ3IDEuMDAxOCAyLjIyODIgMS41NTQzIDMuMDI5Ni40NTUzLjg5ODUuMjQyOS44MzE4LjA5MS4yNTVoLjE1Nzl2LS4xNDU3bC4xMjc1LTEuNzA2LjIzNjgtMi4wOTQ3LjIzMDctMi42OTU3LjA3ODktLjc1ODkuMzc2NC0uOTEwNy43NDY4LS40OTE4LjU4MjguMjc5My40Nzk3LjY4Ni0uMDY2OC40NDMzLS4yODUzIDEuODUxNy0uNTU4NiAyLjkwMjEtLjM2NDMgMS45NDI5aC4yMTI1bC4yNDI5LS4yNDI5Ljk4MzUtMS4zMDUzIDEuNjUxNC0yLjA2NDMuNzI4Ni0uODE5Ni44NS0uOTA0Ni41NDY0LS40MzExaDEuMDMyMWwuNzU5IDEuMTI5My0uMzQgMS4xNjU3LTEuMDYyNSAxLjM0NzgtLjg4MDQgMS4xNDE0LTEuMjYyOCAxLjctLjc4OTMgMS4zNi4wNzI5LjEwOTMuMTg4Mi0uMDE4MyAyLjg1MzUtLjYwNyAxLjU0MjEtLjI3OTQgMS44Mzk2LS4zMTU3LjgzMTguMzg4Ni4wOTEuMzk0Ni0uMzI3OC44MDc1LTEuOTY3LjQ4NTctMi4zMDcyLjQ2MTQtMy40MzY0LjgxMzYtLjA0MjUuMDMwNC4wNDg2LjA2MDcgMS41NDgyLjE0NTcuNjYxOC4wMzY0aDEuNjIxbDMuMDE3NS4yMjQ3Ljc4OTIuNTIyLjQ3MzYuNjM3Ni0uMDc5LjQ4NTctMS4yMTQyLjYxOTMtMS42MzkzLS4zODg2LTMuODI1LS45MTA3LTEuMzExMy0uMzI3OWgtLjE4MjJ2LjEwOTNsMS4wOTI5IDEuMDY4NiAyLjAwMzUgMS44MDkyIDIuNTA3NSAyLjMzMTQuMTI3NS41NzY4LS4zMjE4LjQ1NTQtLjM0LS4wNDg2LTIuMjAzOS0xLjY1NzUtLjg1LS43NDY4LTEuOTI0Ni0xLjYyMWgtLjEyNzV2LjE3bC40NDMyLjY0OTYgMi4zNDM2IDMuNTIxNC4xMjE0IDEuMDgwNy0uMTcuMzUyMS0uNjA3MS4yMTI1LS42Njc5LS4xMjE0LTEuMzcyMS0xLjkyNDZMMTQuMzggMTcuOTU5bC0xLjE0MTQtMS45NDI4LS4xMzk3LjA3OS0uNjc0IDcuMjU1Mi0uMzE1Ni4zNzAzLS43Mjg2LjI3OTMtLjYwNzEtLjQ2MTQtLjMyMTgtLjc0NjguMzIxOC0xLjQ3NTMuMzg4Ni0xLjkyNDYuMzE1Ny0xLjUzLjI4NTMtMS45MDA0LjE3LS42MzE0LS4wMTIxLS4wNDI1LS4xMzk3LjAxODItMS40MzI4IDEuOTY3Mi0yLjE3OTYgMi45NDQ2LTEuNzI0MyAxLjg0NTYtLjQxMjguMTY0LS43MTY0LS4zNzA0LjA2NjctLjY2MTguNDAwOC0uNTg4OSAyLjM4Ni0zLjAzNTcgMS40Mzg5LTEuODgyLjkyOS0xLjA4NjgtLjAwNjItLjE1NzloLS4wNTQ2bC02LjMzODUgNC4xMTY0LTEuMTI5My4xNDU3LS40ODU3LS40NTU0LjA2MDgtLjc0NjcuMjMwNy0uMjQyOSAxLjkwNjQtMS4zMTE0WiIvPjwvc3ZnPg==",openai:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIxIiBoZWlnaHQ9IjcyMSIgdmlld0JveD0iMCAwIDcyMSA3MjEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xNjM3XzI5MzQpIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxXzE2MzdfMjkzNCkiPgo8cGF0aCBkPSJNMzA0LjI0NiAyOTQuNjExVjI0OS4wMjhDMzA0LjI0NiAyNDUuMTg5IDMwNS42ODcgMjQyLjMwOSAzMDkuMDQ0IDI0MC4zOTJMNDAwLjY5MiAxODcuNjEyQzQxMy4xNjcgMTgwLjQxNSA0MjguMDQyIDE3Ny4wNTggNDQzLjM5NCAxNzcuMDU4QzUwMC45NzEgMTc3LjA1OCA1MzcuNDQgMjIxLjY4MiA1MzcuNDQgMjY5LjE4MkM1MzcuNDQgMjcyLjU0IDUzNy40NCAyNzYuMzc5IDUzNi45NTkgMjgwLjIxOEw0NDEuOTU0IDIyNC41NThDNDM2LjE5NyAyMjEuMjAxIDQzMC40MzcgMjIxLjIwMSA0MjQuNjggMjI0LjU1OEwzMDQuMjQ2IDI5NC42MTFaTTUxOC4yNDUgNDcyLjE0NVYzNjMuMjI0QzUxOC4yNDUgMzU2LjUwNSA1MTUuMzY0IDM1MS43MDcgNTA5LjYwOCAzNDguMzQ5TDM4OS4xNzQgMjc4LjI5Nkw0MjguNTE5IDI1NS43NDNDNDMxLjg3NyAyNTMuODI2IDQzNC43NTcgMjUzLjgyNiA0MzguMTE1IDI1NS43NDNMNTI5Ljc2MiAzMDguNTIzQzU1Ni4xNTQgMzIzLjg3OSA1NzMuOTA1IDM1Ni41MDUgNTczLjkwNSAzODguMTcxQzU3My45MDUgNDI0LjYzNiA1NTIuMzE1IDQ1OC4yMjUgNTE4LjI0NSA0NzIuMTQxVjQ3Mi4xNDVaTTI3NS45MzcgMzc2LjE4MkwyMzYuNTkyIDM1My4xNTJDMjMzLjIzNSAzNTEuMjM1IDIzMS43OTQgMzQ4LjM1NCAyMzEuNzk0IDM0NC41MTVWMjM4Ljk1NkMyMzEuNzk0IDE4Ny42MTcgMjcxLjEzOSAxNDguNzQ5IDMyNC40IDE0OC43NDlDMzQ0LjU1NSAxNDguNzQ5IDM2My4yNjQgMTU1LjQ2OCAzNzkuMTAyIDE2Ny40NjNMMjg0LjU3OCAyMjIuMTY0QzI3OC44MjIgMjI1LjUyMSAyNzUuOTQyIDIzMC4zMTkgMjc1Ljk0MiAyMzcuMDM5VjM3Ni4xODZMMjc1LjkzNyAzNzYuMTgyWk0zNjAuNjI2IDQyNS4xMjJMMzA0LjI0NiAzOTMuNDU1VjMyNi4yODNMMzYwLjYyNiAyOTQuNjE2TDQxNy4wMDIgMzI2LjI4M1YzOTMuNDU1TDM2MC42MjYgNDI1LjEyMlpNMzk2Ljg1MiA1NzAuOTg5QzM3Ni42OTggNTcwLjk4OSAzNTcuOTg5IDU2NC4yNyAzNDIuMTUxIDU1Mi4yNzZMNDM2LjY3NCA0OTcuNTc0QzQ0Mi40MzEgNDk0LjIxNyA0NDUuMzExIDQ4OS40MTkgNDQ1LjMxMSA0ODIuNjk5VjM0My41NTJMNDg1LjEzOCAzNjYuNTgyQzQ4OC40OTUgMzY4LjQ5OSA0ODkuOTM2IDM3MS4zNzkgNDg5LjkzNiAzNzUuMjE5VjQ4MC43NzhDNDg5LjkzNiA1MzIuMTE3IDQ1MC4xMDkgNTcwLjk4NSAzOTYuODUyIDU3MC45ODVWNTcwLjk4OVpNMjgzLjEzNCA0NjMuOTlMMTkxLjQ4NiA0MTEuMjExQzE2NS4wOTQgMzk1Ljg1NCAxNDcuMzQzIDM2My4yMjkgMTQ3LjM0MyAzMzEuNTYyQzE0Ny4zNDMgMjk0LjYxNiAxNjkuNDE1IDI2MS41MDkgMjAzLjQ4IDI0Ny41OTNWMzU2Ljk5MUMyMDMuNDggMzYzLjcxIDIwNi4zNjEgMzY4LjUwOCAyMTIuMTE3IDM3MS44NjZMMzMyLjA3NCA0NDEuNDM3TDI5Mi43MjkgNDYzLjk5QzI4OS4zNzIgNDY1LjkwNyAyODYuNDkxIDQ2NS45MDcgMjgzLjEzNCA0NjMuOTlaTTI3Ny44NTkgNTQyLjY4QzIyMy42MzkgNTQyLjY4IDE4My44MTMgNTAxLjg5NSAxODMuODEzIDQ1MS41MTRDMTgzLjgxMyA0NDcuNjc1IDE4NC4yOTQgNDQzLjgzNiAxODQuNzcxIDQzOS45OTdMMjc5LjI5NSA0OTQuNjk4QzI4NS4wNTEgNDk4LjA1NiAyOTAuODEyIDQ5OC4wNTYgMjk2LjU2OCA0OTQuNjk4TDQxNy4wMDIgNDI1LjEyN1Y0NzAuNzFDNDE3LjAwMiA0NzQuNTQ5IDQxNS41NjIgNDc3LjQyOSA0MTIuMjA0IDQ3OS4zNDZMMzIwLjU1NyA1MzIuMTI2QzMwOC4wODEgNTM5LjMyMyAyOTMuMjA2IDU0Mi42OCAyNzcuODU0IDU0Mi42OEgyNzcuODU5Wk0zOTYuODUyIDU5OS43NzZDNDU0LjkxMSA1OTkuNzc2IDUwMy4zNyA1NTguNTEzIDUxNC40MSA1MDMuODEyQzU2OC4xNDkgNDg5Ljg5NiA2MDIuNjk2IDQzOS41MTUgNjAyLjY5NiAzODguMTc2QzYwMi42OTYgMzU0LjU4NyA1ODguMzAzIDMyMS45NjIgNTYyLjM5MiAyOTguNDVDNTY0Ljc5MSAyODguMzczIDU2Ni4yMzEgMjc4LjI5NiA1NjYuMjMxIDI2OC4yMjRDNTY2LjIzMSAxOTkuNjExIDUxMC41NzEgMTQ4LjI2NyA0NDYuMjc0IDE0OC4yNjdDNDMzLjMyMiAxNDguMjY3IDQyMC44NDYgMTUwLjE4NCA0MDguMzcgMTU0LjUwNUMzODYuNzc1IDEzMy4zOTIgMzU3LjAyNiAxMTkuOTU4IDMyNC40IDExOS45NThDMjY2LjM0MiAxMTkuOTU4IDIxNy44ODMgMTYxLjIyIDIwNi44NDMgMjE1LjkyMUMxNTMuMTA0IDIyOS44MzcgMTE4LjU1NyAyODAuMjE4IDExOC41NTcgMzMxLjU1N0MxMTguNTU3IDM2NS4xNDYgMTMyLjk1IDM5Ny43NzEgMTU4Ljg2MSA0MjEuMjgzQzE1Ni40NjIgNDMxLjM2IDE1NS4wMjIgNDQxLjQzNyAxNTUuMDIyIDQ1MS41MUMxNTUuMDIyIDUyMC4xMjMgMjEwLjY4MiA1NzEuNDY2IDI3NC45NzggNTcxLjQ2NkMyODcuOTMxIDU3MS40NjYgMzAwLjQwNyA1NjkuNTQ5IDMxMi44ODMgNTY1LjIyOEMzMzQuNDczIDU4Ni4zNDEgMzY0LjIyMiA1OTkuNzc2IDM5Ni44NTIgNTk5Ljc3NloiIGZpbGw9ImJsYWNrIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNzIwIiBoZWlnaHQ9IjcyMCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNjA2OTM0IDAuMDk5OTc1NikiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNDg0LjEzOSIgaGVpZ2h0PSI0NzkuODE4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE4LjU1NyAxMTkuOTU4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",gemini:"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjFlbSIgc3R5bGU9ImZsZXg6bm9uZTtsaW5lLWhlaWdodDoxIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkdlbWluaTwvdGl0bGU+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9IiMzMTg2RkYiPjwvcGF0aD48cGF0aCBkPSJNMjAuNjE2IDEwLjgzNWExNC4xNDcgMTQuMTQ3IDAgMDEtNC40NS0zLjAwMSAxNC4xMTEgMTQuMTExIDAgMDEtMy42NzgtNi40NTIuNTAzLjUwMyAwIDAwLS45NzUgMCAxNC4xMzQgMTQuMTM0IDAgMDEtMy42NzkgNi40NTIgMTQuMTU1IDE0LjE1NSAwIDAxLTQuNDUgMy4wMDFjLS42NS4yOC0xLjMxOC41MDUtMi4wMDIuNjc4YS41MDIuNTAyIDAgMDAwIC45NzVjLjY4NC4xNzIgMS4zNS4zOTcgMi4wMDIuNjc3YTE0LjE0NyAxNC4xNDcgMCAwMTQuNDUgMy4wMDEgMTQuMTEyIDE0LjExMiAwIDAxMy42NzkgNi40NTMuNTAyLjUwMiAwIDAwLjk3NSAwYy4xNzItLjY4NS4zOTctMS4zNTEuNjc3LTIuMDAzYTE0LjE0NSAxNC4xNDUgMCAwMTMuMDAxLTQuNDUgMTQuMTEzIDE0LjExMyAwIDAxNi40NTMtMy42NzguNTAzLjUwMyAwIDAwMC0uOTc1IDEzLjI0NSAxMy4yNDUgMCAwMS0yLjAwMy0uNjc4eiIgZmlsbD0idXJsKCNsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfKSI+PC9wYXRoPjxwYXRoIGQ9Ik0yMC42MTYgMTAuODM1YTE0LjE0NyAxNC4xNDcgMCAwMS00LjQ1LTMuMDAxIDE0LjExMSAxNC4xMTEgMCAwMS0zLjY3OC02LjQ1Mi41MDMuNTAzIDAgMDAtLjk3NSAwIDE0LjEzNCAxNC4xMzQgMCAwMS0zLjY3OSA2LjQ1MiAxNC4xNTUgMTQuMTU1IDAgMDEtNC40NSAzLjAwMWMtLjY1LjI4LTEuMzE4LjUwNS0yLjAwMi42NzhhLjUwMi41MDIgMCAwMDAgLjk3NWMuNjg0LjE3MiAxLjM1LjM5NyAyLjAwMi42NzdhMTQuMTQ3IDE0LjE0NyAwIDAxNC40NSAzLjAwMSAxNC4xMTIgMTQuMTEyIDAgMDEzLjY3OSA2LjQ1My41MDIuNTAyIDAgMDAuOTc1IDBjLjE3Mi0uNjg1LjM5Ny0xLjM1MS42NzctMi4wMDNhMTQuMTQ1IDE0LjE0NSAwIDAxMy4wMDEtNC40NSAxNC4xMTMgMTQuMTEzIDAgMDE2LjQ1My0zLjY3OC41MDMuNTAzIDAgMDAwLS45NzUgMTMuMjQ1IDEzLjI0NSAwIDAxLTIuMDAzLS42Nzh6IiBmaWxsPSJ1cmwoI2xvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8pIj48L3BhdGg+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9InVybCgjbG9iZS1pY29ucy1nZW1pbmktMi1fUl8wXykiPjwvcGF0aD48ZGVmcz48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfIiB4MT0iNyIgeDI9IjExIiB5MT0iMTUuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjMDhCOTYyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDhCOTYyIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8iIHgxPSI4IiB4Mj0iMTEuNSIgeTE9IjUuNSIgeTI9IjExIj48c3RvcCBzdG9wLWNvbG9yPSIjRjk0NTQzIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjk0NTQzIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTItX1JfMF8iIHgxPSIzLjUiIHgyPSIxNy41IiB5MT0iMTMuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjRkFCQzEyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuNDYiIHN0b3AtY29sb3I9IiNGQUJDMTIiIHN0b3Atb3BhY2l0eT0iMCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==",deepseek:"data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RGVlcFNlZWs8L3RpdGxlPjxwYXRoIGQ9Ik0yMy43NDggNC42NTFjLS4yNTQtLjEyNC0uMzY0LjExMy0uNTEyLjIzMy0uMDUxLjA0LS4wOTQuMDktLjEzNy4xMzctLjM3Mi4zOTctLjgwNi42NTctMS4zNzMuNjI2LS44MjktLjA0Ni0xLjUzNy4yMTQtMi4xNjMuODQ4LS4xMzMtLjc4Mi0uNTc1LTEuMjQ4LTEuMjQ3LTEuNTQ4LS4zNTItLjE1NS0uNzA4LS4zMTEtLjk1NS0uNjUtLjE3Mi0uMjQtLjIxOS0uNTA5LS4zMDUtLjc3NC0uMDU1LS4xNi0uMTEtLjMyMy0uMjkzLS4zNS0uMi0uMDMxLS4yNzguMTM2LS4zNTYuMjc2LS4zMTMuNTcyLS40MzQgMS4yMDItLjQyMiAxLjg0LjAyNyAxLjQzNi42MzMgMi41OCAxLjgzOCAzLjM5My4xMzcuMDk0LjE3Mi4xODcuMTI5LjMyMy0uMDgyLjI4LS4xOC41NTMtLjI2Ni44MzMtLjA1NS4xNzktLjEzNy4yMTgtLjMyOC4xNGE1LjUgNS41IDAgMCAxLTEuNzM3LTEuMTc5Yy0uODU3LS44MjgtMS42MzEtMS43NDMtMi41OTctMi40NmExMiAxMiAwIDAgMC0uNjg5LS40N2MtLjk4NS0uOTU3LjEzLTEuNzQzLjM4Ny0xLjgzNi4yNy0uMDk4LjA5NC0uNDMzLS43NzgtLjQyOC0uODcyLjAwMy0xLjY3LjI5NS0yLjY4Ny42ODVhMyAzIDAgMCAxLS40NjUuMTM2IDkuNiA5LjYgMCAwIDAtMi44ODMtLjEwMWMtMS44ODUuMjEtMy4zOSAxLjEtNC40OTcgMi42MjJDLjA4MiA4Ljc3Ni0uMjMxIDEwLjg1NC4xNTIgMTMuMDJjLjQwMyAyLjI4NCAxLjU2OCA0LjE3NSAzLjM2IDUuNjUzIDEuODU3IDEuNTMzIDMuOTk3IDIuMjg0IDYuNDM4IDIuMTQgMS40ODItLjA4NSAzLjEzMi0uMjg0IDQuOTk0LTEuODYuNDcuMjM0Ljk2Mi4zMjggMS43OC4zOTguNjI5LjA1OCAxLjIzNS0uMDMxIDEuNzA1LS4xMjkuNzM1LS4xNTUuNjg0LS44MzYuNDE4LS45NjEtMi4xNTUtMS4wMDQtMS42ODItLjU5NS0yLjExMi0uOTI2IDEuMDk1LTEuMjk1IDIuNzY4LTMuNTk4IDMuMjg0LTYuNzMzLjA1LS4zNDYuMTE1LS44MzQuMTA4LTEuMTE0LS4wMDQtLjE3MS4wMzUtLjIzOC4yMy0uMjU3YTQuMiA0LjIgMCAwIDAgMS41NDUtLjQ3NWMxLjM5Ny0uNzYzIDEuOTYtMi4wMTYgMi4wOTMtMy41MTcuMDItLjIzLS4wMDQtLjQ2Ny0uMjQ3LS41ODhNMTEuNTggMTguMTY4Yy0yLjA4OC0xLjY0Mi0zLjEwMS0yLjE4My0zLjUyLTIuMTYtLjM5LjAyNC0uMzIuNDcyLS4yMzQuNzYzLjA5LjI4OC4yMDcuNDg3LjM3MS43NC4xMTQuMTY3LjE5Mi40MTYtLjExMy42MDMtLjY3My40MTYtMS44NDItLjE0LTEuODk3LS4xNjgtMS4zNjEtLjgwMS0yLjUtMS44Ni0zLjMwMS0zLjMwNi0uNzc1LTEuMzkzLTEuMjI1LTIuODg4LTEuMjk5LTQuNDgyLS4wMi0uMzg1LjA5NC0uNTIyLjQ3Ny0uNTkyYTQuNyA0LjcgMCAwIDEgMS41My0uMDM4YzIuMTMxLjMxMSAzLjk0NiAxLjI2NCA1LjQ2NyAyLjc3NC44NjguODYgMS41MjUgMS44ODcgMi4yMDIgMi44OS43MiAxLjA2NiAxLjQ5NCAyLjA4MiAyLjQ4IDIuOTE1LjM0OC4yOTEuNjI2LjUxMy44OTIuNjc3LS44MDIuMDktMi4xNC4xMDktMy4wNTUtLjYxNXptMS4wMDEtNi40NGEuMzA2LjMwNiAwIDAgMSAuNDE1LS4yODcuMy4zIDAgMCAxIC4xMTMuMDc0LjMuMyAwIDAgMSAuMDg2LjIxNGMwIC4xNy0uMTM2LjMwNy0uMzA4LjMwN2EuMzAzLjMwMyAwIDAgMS0uMzA2LS4zMDdtMy4xMSAxLjU5NmMtLjIuMDgxLS40LjE1MS0uNTkxLjE2YTEuMjUgMS4yNSAwIDAgMS0uNzk4LS4yNTRjLS4yNzQtLjIzLS40Ny0uMzU4LS41NTEtLjc1OGExLjcgMS43IDAgMCAxIC4wMTUtLjU4OGMuMDctLjMyNy0uMDA3LS41MzctLjIzOC0uNzI3LS4xODgtLjE1Ni0uNDI2LS4xOTktLjY4OS0uMTk5YS42LjYgMCAwIDEtLjI1NC0uMDc4LjI1My4yNTMgMCAwIDEtLjExNC0uMzU4IDEgMSAwIDAgMSAuMTkyLS4yMWMuMzU2LS4yMDIuNzY3LS4xMzYgMS4xNDYuMDE2LjM1Mi4xNDQuNjE4LjQwOCAxLjAwMS43ODIuMzkyLjQ1MS40NjIuNTc2LjY4NS45MTUuMTc2LjI2NC4zMzYuNTM2LjQ0Ni44NDguMDY2LjE5NC0uMDIuMzUzLS4yNS40NSIvPjwvc3ZnPg=="},o={claude:"Claude",openai:"OpenAI",gemini:"Gemini",deepseek:"DeepSeek"};function i(E,f=""){const R=f.trim().toLowerCase().replace(/[^a-z0-9]+/g,"");if(f.trim())return{anthropic:"claude",claude:"claude",claudecode:"claude",openai:"openai",google:"gemini",googlegemini:"gemini",googleaistudio:"gemini",gemini:"gemini",deepseek:"deepseek"}[R];const F=E.trim().toLowerCase();if(/^(?:anthropic\/)?claude(?:$|[\s-])/.test(F))return"claude";if(/^(?:openai\/)?(?:gpt[-\s]?\d|chatgpt(?:$|[\s-])|o[134](?:$|[\s-]))/.test(F))return"openai";if(/^(?:google\/)?gemini(?:$|[\s-])/.test(F))return"gemini";if(/^deepseek(?:$|[\s-])/.test(F))return"deepseek"}const s=qe({props:{model:{type:String,default:""},provider:{type:String,default:""},size:{type:Number,default:20}},setup:E=>()=>{const f=i(E.model,E.provider),R=f!=="gemini",F=Math.round(E.size*(f==="openai"?.82:.58));return Ue("span",{class:["model-provider-mark",{"is-color":f&&!R}],"data-provider-logo":f??"unknown","aria-hidden":"true",title:f?`${o[f]} logo`:"Custom model",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:`${E.size}px`,height:`${E.size}px`,boxSizing:"border-box",border:"1px solid var(--provider-logo-border, #e5e5e8)",borderRadius:`${E.size>=28?9:E.size>=20?6:4}px`,background:"var(--provider-logo-surface, #fff)",color:"var(--provider-logo-muted, #a1a1aa)"}},f?[Ue("img",{src:n[f],alt:"","aria-hidden":"true",class:["model-provider-image",{"is-monochrome":R}],"data-logo-source":"bundled-brand-asset",style:{display:"block",objectFit:"contain",width:`${F}px`,height:`${F}px`}})]:[Ue(ii,{size:Math.round(E.size*.5),strokeWidth:1.7,"aria-hidden":"true"})])}}),a=e,r=t,c=V(null),u=V(null),d=V(null),M=`model-options-${Dn()}`,x=V(0),h=V(!1),O=V(""),Q=V(a.modelValue);ze(()=>a.modelValue,E=>{Q.value=E}),ze(()=>a.options,E=>{var f;E.some(R=>R.id===Q.value)||(Q.value=((f=E[0])==null?void 0:f.id)??""),E.length||Z()},{immediate:!0,deep:!0});const K=we(()=>a.options.find(E=>E.id===Q.value)),X=we(()=>a.options.filter(E=>`${E.name} ${E.provider}`.toLowerCase().includes(O.value.toLowerCase())));ze(h,async E=>{var f;E&&(x.value=Math.max(0,X.value.findIndex(R=>R.id===Q.value)),await ke(),h.value&&((f=u.value)==null||f.focus()))}),ze(X,()=>{x.value=0});function Z(E=!1){h.value=!1,E&&ke(()=>{var f;return(f=d.value)==null?void 0:f.focus({preventScroll:!0})})}function ne(E){E.setAttribute("inert","")}function S(E){var f;(f=c.value)!=null&&f.contains(E.relatedTarget)||Z()}function _(E){var f;if(!E.isComposing){if(E.key==="Enter"&&E.target===u.value){E.preventDefault();const R=X.value[x.value];R&&j(R);return}!["ArrowDown","ArrowUp"].includes(E.key)||!X.value.length||(E.preventDefault(),x.value=(x.value+(E.key==="ArrowDown"?1:-1)+X.value.length)%X.value.length,(f=u.value)==null||f.focus({preventScroll:!0}),ke(()=>{var R;return(R=document.getElementById(`${M}-${x.value}`))==null?void 0:R.scrollIntoView({block:"nearest"})}))}}function j(E){Q.value=E.id,Z(!0),O.value="",r("update:modelValue",E.id),r("select",E)}function b(E){var f;(f=c.value)!=null&&f.contains(E.target)||Z()}return zt(()=>document.addEventListener("pointerdown",b)),Yt(()=>document.removeEventListener("pointerdown",b)),(E,f)=>{var R,F,U;return m(),z("div",{ref_key:"root",ref:c,class:"model-demo",onKeydown:f[4]||(f[4]=uo(Ot(ee=>Z(!0),["stop","prevent"]),["esc"])),onFocusout:S},[l("div",iM,[H(q(ii),{size:16}),f[5]||(f[5]=Te(" Model settings ",-1))]),l("button",{type:"button",ref_key:"trigger",ref:d,class:"model-trigger","aria-haspopup":"listbox","aria-controls":M,onKeydown:[f[0]||(f[0]=uo(Ot(ee=>h.value=!0,["prevent"]),["down"])),f[1]||(f[1]=uo(Ot(ee=>h.value=!0,["prevent"]),["up"]))],"aria-expanded":h.value,"aria-label":"Select model",disabled:!e.options.length,onClick:f[2]||(f[2]=ee=>h.value=!h.value)},[H(q(s),{model:((R=K.value)==null?void 0:R.name)??"",provider:((F=K.value)==null?void 0:F.provider)??"",size:42},null,8,["model","provider"]),H(dt,{name:"model-current",mode:"out-in"},{default:Xe(()=>{var ee,pe,ge;return[(m(),z("span",{key:(ee=K.value)==null?void 0:ee.id,class:"model-name"},[l("strong",null,te(((pe=K.value)==null?void 0:pe.name)??"Select model"),1),l("small",null,te(((ge=K.value)==null?void 0:ge.provider)??"No model selected"),1)]))]}),_:1}),H(q(_t),{size:17,class:ye(["chevron",{rotated:h.value}])},null,8,["class"])],40,sM),l("div",aM,te(((U=K.value)==null?void 0:U.description)??(e.options.length?"Select model":"No models available")),1),H(dt,{name:"model-popup",onBeforeLeave:ne},{default:Xe(()=>[h.value?(m(),z("div",{key:0,class:"model-menu",onKeydown:_},[l("label",rM,[H(q(qr),{size:16}),et(l("input",{ref_key:"searchInput",ref:u,"onUpdate:modelValue":f[3]||(f[3]=ee=>O.value=ee),"aria-label":"Search models",placeholder:"Search models…","aria-autocomplete":"list","aria-controls":M,"aria-activedescendant":X.value[x.value]?`${M}-${x.value}`:void 0},null,8,lM),[[xi,O.value]])]),l("div",{id:M,class:"model-options",role:"listbox","aria-label":"Models"},[(m(!0),z(Ne,null,We(X.value,(ee,pe)=>(m(),z("button",{type:"button",key:ee.id,id:`${M}-${pe}`,class:ye(["model-option",{"keyboard-active":x.value===pe}]),onPointerenter:ge=>x.value=pe,onFocus:ge=>x.value=pe,role:"option","aria-selected":Q.value===ee.id,onClick:ge=>j(ee)},[H(q(s),{model:ee.name,provider:ee.provider,size:24},null,8,["model","provider"]),l("span",null,[Te(te(ee.name),1),l("small",null,te(ee.provider),1)]),Q.value===ee.id?(m(),Le(q(rt),{key:0,size:16,class:"selected-check"})):me("",!0)],42,cM))),128)),X.value.length?me("",!0):(m(),z("div",uM,"No matching models."))])],32)):me("",!0)]),_:1})],544)}}}),pM=jt(dM,[["__scopeId","data-v-f78ea696"]]),MM={key:1,class:"status-lamp","aria-hidden":"true"},gM=qe({__name:"StatusBadge",props:{status:{default:"pending"},size:{default:"md"}},setup(e){const t=e,n={running:{label:"Running",tone:"info",icon:null},queued:{label:"Queued",tone:"neutral",icon:gd},pending:{label:"Pending",tone:"neutral",icon:Da},waiting_human:{label:"Needs input",tone:"neutral",icon:jd},completed:{label:"Completed",tone:"success",icon:rt},success:{label:"Success",tone:"success",icon:rt},failed:{label:"Failed",tone:"error",icon:Ld},cancelled:{label:"Cancelled",tone:"neutral",icon:Pn},cancelling:{label:"Cancelling",tone:"neutral",icon:Pn},skipped:{label:"Skipped",tone:"neutral",icon:Da},published:{label:"Published",tone:"success",icon:rt},draft:{label:"Draft",tone:"neutral",icon:xd}},o=we(()=>n[t.status]??n.pending);return(i,s)=>(m(),z("span",{class:ye(["status-badge",[`tone-${o.value.tone}`,{"is-small":e.size==="sm"}]])},[o.value.icon?(m(),Le(cn(o.value.icon),{key:0,size:13,"stroke-width":1.6,"aria-hidden":"true"})):(m(),z("span",MM,[...s[0]||(s[0]=[l("i",null,null,-1)])])),Te(" "+te(o.value.label),1)],2))}}),fM=jt(gM,[["__scopeId","data-v-25ae296a"]]),hM={class:"activity-timeline","aria-label":"Task activity"},mM={class:"activity-heading"},yM={"aria-live":"polite"},vM={class:"activity-section"},NM=["disabled","aria-expanded","aria-controls"],xM={class:"section-meta"},bM=["inert","aria-hidden","id"],LM={class:"environment-list"},jM={class:"activity-section"},DM=["disabled","aria-expanded","aria-controls"],wM={class:"section-meta"},IM=["inert","aria-hidden","id"],TM={class:"thought-summary"},zM={class:"activity-section tools-section"},AM=["disabled","aria-expanded","aria-controls"],kM={key:3,class:"failed-count"},SM={key:4,class:"section-meta"},EM=["inert","aria-hidden","id"],CM={class:"activity-tools"},OM={class:"tool-label"},UM={class:"tool-duration"},QM=["inert","aria-hidden","id"],YM={class:"tool-details"},PM={key:0,class:"tool-name"},_M={key:1},$M={key:2},RM={key:3,class:"empty-details"},WM=qe({__name:"ActivityTimeline",props:{environmentSteps:{default:()=>[{label:"Connect workspace",duration:"8s"},{label:"Prepare project files",duration:"12s"},{label:"Start the assistant",duration:"5s"}]},environmentDuration:{default:"25s"},thought:{default:"Review the content, then arrange the components. Keep a clear hierarchy and give each section room to breathe."},tools:{default:()=>[{id:"read",label:"Read design files",name:"read_file",status:"success",duration:"0.6s",input:"src/theme.css",output:"Read 24 style variables, including colors and typography."},{id:"search",label:"Search components",name:"web_search",status:"success",duration:"1.2s",input:"Accessible navigation patterns",output:"Found three navigation patterns with clear groups and keyboard controls."},{id:"preview",label:"Generate preview",name:"preview_page",status:"failed",duration:"1.0s",input:"http://localhost:3000",output:"The preview server is not running. Start the project and try again."}]},initiallyExpanded:{default:()=>["tools"]},busy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["toggle","tool-toggle"],setup(e,{emit:t}){const n=e,o=t,i=`activity-${Dn().replace(/:/g,"")}`,s=V(new Set(n.initiallyExpanded)),a=V(new Set),r=new WeakMap;function c(_){const j=document.getElementById(_);j&&r.set(j,{height:j.getBoundingClientRect().height,opacity:getComputedStyle(j).opacity})}const u=we(()=>n.tools.filter(_=>_.status==="failed").length),d=we(()=>n.busy||n.tools.some(_=>_.status==="running"||_.status==="pending")),M={success:"Done",failed:"Failed",running:"In progress",pending:"Queued"};function x(_){return!!(_.input||_.output)}ze(()=>n.initiallyExpanded,_=>{s.value=new Set(_)},{deep:!0}),ze(()=>n.tools,_=>{const j=new Set(_.filter(x).map(b=>b.id));a.value=new Set([...a.value].filter(b=>j.has(b)))},{deep:!0});function h(_){if(n.disabled)return;c(`${i}-${_}`);const j=new Set(s.value);j.has(_)?j.delete(_):j.add(_),s.value=j,o("toggle",_,j.has(_))}function O(_){const j=n.tools.find(E=>E.id===_);if(n.disabled||!j||!x(j))return;c(`${i}-tool-${n.tools.findIndex(E=>E.id===_)}`);const b=new Set(a.value);b.has(_)?b.delete(_):b.add(_),a.value=b,o("tool-toggle",_,b.has(_))}function Q(_){const j=_;j.removeAttribute("inert");const b=r.get(j),E=(b==null?void 0:b.height)??j.getBoundingClientRect().height,f=(b==null?void 0:b.opacity)??getComputedStyle(j).opacity;j.style.height=`${E}px`,j.style.opacity=E?f:"0"}function K(_){const j=_;j.offsetHeight,j.style.height=`${j.scrollHeight}px`,j.style.opacity="1",r.delete(j)}function X(_){_.style.removeProperty("height"),_.style.removeProperty("opacity")}function Z(_){const j=_,b=r.get(j),E=getComputedStyle(j).display==="none",f=E?(b==null?void 0:b.height)??0:j.getBoundingClientRect().height,R=E?(b==null?void 0:b.opacity)??"0":getComputedStyle(j).opacity;r.set(j,{height:f,opacity:R}),j.style.height=`${f}px`,j.style.opacity=R}function ne(_){const j=_;j.style.removeProperty("height"),j.style.removeProperty("opacity")}function S(_){const j=_;j.setAttribute("inert",""),j.style.height=`${j.getBoundingClientRect().height}px`,j.offsetHeight,j.style.height="0px",j.style.opacity="0"}return(_,j)=>(m(),z("section",hM,[l("header",mM,[l("span",null,[H(q(yd),{size:17,"stroke-width":1.6}),j[3]||(j[3]=Te(" Activity",-1))]),l("span",yM,te(d.value?"In progress":"Finished"),1)]),l("div",vM,[l("button",{class:"activity-section-toggle",type:"button",disabled:e.disabled,"aria-expanded":s.value.has("environment"),"aria-controls":`${i}-environment`,onClick:j[0]||(j[0]=b=>h("environment"))},[H(q(rt),{size:15,class:"status-success"}),j[5]||(j[5]=l("strong",null,"Environment ready",-1)),l("span",xM,[Te(te(e.environmentSteps.length)+" steps ",1),j[4]||(j[4]=l("span",null,"·",-1)),Te(" "+te(e.environmentDuration),1)]),H(q(_t),{size:14,class:ye({turned:s.value.has("environment")})},null,8,["class"])],8,NM),H(dt,{name:"activity-fold",onBeforeEnter:Q,onEnter:K,onAfterEnter:X,onLeave:S,onAfterLeave:ne,onEnterCancelled:Z,onLeaveCancelled:Z,persisted:""},{default:Xe(()=>[et(l("div",{inert:!s.value.has("environment")||void 0,"aria-hidden":!s.value.has("environment")||void 0,id:`${i}-environment`,class:"activity-fold"},[l("ol",LM,[(m(!0),z(Ne,null,We(e.environmentSteps,b=>(m(),z("li",{key:b.label},[H(q(rt),{size:13}),l("span",null,te(b.label),1),l("small",null,te(b.duration),1)]))),128))])],8,bM),[[St,s.value.has("environment")]])]),_:1})]),l("div",jM,[l("button",{class:"activity-section-toggle",type:"button",disabled:e.disabled,"aria-expanded":s.value.has("thought"),"aria-controls":`${i}-thought`,onClick:j[1]||(j[1]=b=>h("thought"))},[e.busy?(m(),Le(q($i),{key:0,size:15,class:"activity-spinner"})):(m(),Le(q(rt),{key:1,size:15,class:"status-success"})),j[6]||(j[6]=l("strong",null,"Thinking process",-1)),l("span",wM,te(e.busy?"In progress":"Completed"),1),H(q(_t),{size:14,class:ye({turned:s.value.has("thought")})},null,8,["class"])],8,DM),H(dt,{name:"activity-fold",onBeforeEnter:Q,onEnter:K,onAfterEnter:X,onLeave:S,onAfterLeave:ne,onEnterCancelled:Z,onLeaveCancelled:Z,persisted:""},{default:Xe(()=>[et(l("div",{inert:!s.value.has("thought")||void 0,"aria-hidden":!s.value.has("thought")||void 0,id:`${i}-thought`,class:"activity-fold"},[l("p",TM,te(e.thought),1)],8,IM),[[St,s.value.has("thought")]])]),_:1})]),l("div",zM,[l("button",{class:"activity-section-toggle tools-heading",type:"button",disabled:e.disabled,"aria-expanded":s.value.has("tools"),"aria-controls":`${i}-tools`,onClick:j[2]||(j[2]=b=>h("tools"))},[d.value?(m(),Le(q($i),{key:0,size:15,class:"activity-spinner"})):u.value?(m(),Le(q(oi),{key:1,size:15,class:"status-failed"})):(m(),Le(q(rt),{key:2,size:15,class:"status-success"})),l("strong",null,te(e.tools.length)+" tool"+te(e.tools.length===1?"":"s")+" used",1),u.value?(m(),z("span",kM,te(u.value)+" failed",1)):(m(),z("span",SM,te(d.value?"In progress":"Completed"),1)),H(q(_t),{size:14,class:ye({turned:s.value.has("tools")})},null,8,["class"])],8,AM),H(dt,{name:"activity-fold",onBeforeEnter:Q,onEnter:K,onAfterEnter:X,onLeave:S,onAfterLeave:ne,onEnterCancelled:Z,onLeaveCancelled:Z,persisted:""},{default:Xe(()=>[et(l("div",{inert:!s.value.has("tools")||void 0,"aria-hidden":!s.value.has("tools")||void 0,id:`${i}-tools`,class:"activity-fold"},[l("ul",CM,[(m(!0),z(Ne,null,We(e.tools,(b,E)=>(m(),z("li",{key:b.id,class:ye({"failed-tool":b.status==="failed"})},[(m(),Le(cn(x(b)?"button":"div"),{class:"activity-tool-toggle",type:x(b)?"button":void 0,disabled:x(b)?e.disabled:void 0,"aria-expanded":x(b)?a.value.has(b.id):void 0,"aria-controls":x(b)?`${i}-tool-${E}`:void 0,onClick:f=>O(b.id)},{default:Xe(()=>[b.status==="running"?(m(),Le(q($i),{key:0,size:15,class:"activity-spinner"})):b.status==="failed"?(m(),Le(q(oi),{key:1,size:15,class:"status-failed"})):E===0?(m(),Le(q(Kr),{key:2,size:15})):E===1?(m(),Le(q(hd),{key:3,size:15})):(m(),Le(q(Xr),{key:4,size:15})),l("span",OM,te(b.label),1),l("span",UM,te(b.duration),1),l("span",{class:ye(["tool-state",{"status-failed":b.status==="failed"}])},te(M[b.status]),3),x(b)?(m(),Le(q(_t),{key:5,size:13,class:ye({turned:a.value.has(b.id)})},null,8,["class"])):me("",!0)]),_:2},1032,["type","disabled","aria-expanded","aria-controls","onClick"])),H(dt,{name:"activity-fold",onBeforeEnter:Q,onEnter:K,onAfterEnter:X,onLeave:S,onAfterLeave:ne,onEnterCancelled:Z,onLeaveCancelled:Z,persisted:""},{default:Xe(()=>[et(l("div",{inert:!a.value.has(b.id)||void 0,"aria-hidden":!a.value.has(b.id)||void 0,id:`${i}-tool-${E}`,class:"activity-fold"},[l("div",YM,[b.name?(m(),z("code",PM,te(b.name),1)):me("",!0),b.input?(m(),z("div",_M,[j[7]||(j[7]=l("span",{class:"detail-label"},"Input",-1)),l("pre",null,te(b.input),1)])):me("",!0),b.output?(m(),z("div",$M,[l("span",{class:ye(["detail-label",{"status-failed":b.status==="failed"}])},"Output",2),l("pre",{class:ye({"failed-output":b.status==="failed"})},te(b.output),3)])):me("",!0),!b.input&&!b.output?(m(),z("p",RM,"No additional output.")):me("",!0)])],8,QM),[[St,x(b)&&a.value.has(b.id)]])]),_:2},1024)],2))),128))])],8,EM),[[St,s.value.has("tools")]])]),_:1})])]))}}),BM=jt(WM,[["__scopeId","data-v-dc84a35c"]]),HM=["id","aria-hidden","inert"],VM={key:0,class:"clarification-history clarify-request"},GM={class:"history-heading"},FM={class:"history-prompt"},ZM=["data-selected"],KM={key:1,class:"history-check-space","aria-hidden":"true"},JM={key:0,class:"question-progress"},qM={class:"progress-dots","aria-hidden":"true"},XM={class:"question-heading"},eg=["id"],tg={class:"question-kind"},ng=["role","aria-labelledby"],og=["id","role","aria-checked","aria-pressed","disabled","onClick","onKeydown"],ig={class:"option-label"},sg={key:0,class:"recommendation-label"},ag={class:"clarification-footer"},rg=["disabled"],lg={key:1},cg=["disabled"],ug={key:3,class:"submit-actions"},dg=["disabled"],pg=["disabled"],Mg={class:"summary-heading"},gg={class:"summary-prompt"},fg={class:"summary-labels"},hg=qe({__name:"ClarificationCard",props:{questions:{default:()=>[{id:"priority",prompt:"What should we build first?",options:[{id:"layout",label:"Build the page layout"},{id:"interaction",label:"Refine the interactions"}]},{id:"style",prompt:"Which direction do you prefer?",options:[{id:"quiet",label:"Quiet and spacious"},{id:"expressive",label:"Bold and expressive"}]}]},initialAnswers:{default:()=>({})},initiallyExpanded:{type:Boolean,default:!0},initiallySubmitted:{type:Boolean,default:!1},submitLabel:{default:"Confirm choices"},disabled:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1}},emits:["update:answers","update:expanded","submit","reset"],setup(e,{expose:t,emit:n}){const o=e,i=n,s=`clarification-${Dn().replace(/:/g,"")}`;function a(oe){return Array.isArray(oe)?oe:oe?[oe]:[]}function r(oe,A=!1){return Object.fromEntries(o.questions.flatMap(G=>{const ie=new Set(a(oe[G.id])),ue=G.options.filter(je=>ie.has(je.id)&&(A||!je.disabled)).map(je=>je.id);return ue.length?[[G.id,G.allowMultiple?ue:ue[0]]]:[]}))}function c(oe=u.value){return Object.fromEntries(Object.entries(oe).map(([A,G])=>[A,Array.isArray(G)?[...G]:G]))}const u=V(r(o.initialAnswers,o.initiallySubmitted||o.readOnly)),d=V(o.initiallyExpanded),M=V(o.initiallySubmitted),x=V(0),h=we(()=>o.readOnly||M.value),O=we(()=>o.questions[x.value]),Q=V(null),K=V(null),X=V("auto");let Z,ne=!1;const S=we(()=>o.questions.flatMap(oe=>oe.options.filter(A=>a(u.value[oe.id]).includes(A.id)).map(A=>({questionId:oe.id,prompt:oe.prompt,optionId:A.id,label:A.label})))),_=we(()=>o.questions.flatMap(oe=>{const A=S.value.filter(G=>G.questionId===oe.id);return A.length?[{question:oe,selected:A}]:[]})),j=we(()=>!o.disabled&&!h.value&&o.questions.some(oe=>oe.options.some(A=>!A.disabled&&f(oe,A.id)))),b=we(()=>o.questions.some(oe=>oe.options.some(A=>A.recommended&&!A.disabled))),E=we(()=>JSON.stringify(o.questions));function f(oe,A){return a(u.value[oe.id]).includes(A)}async function R(){await ke(),!ne&&Q.value&&(X.value=d.value?`${Q.value.getBoundingClientRect().height}px`:"0px")}function F(oe,A,G=!1){if(o.disabled||h.value||!oe.options.some(Ie=>Ie.id===A&&!Ie.disabled))return;const ie=a(u.value[oe.id]),ue=G?[A]:oe.allowMultiple?ie.includes(A)?ie.filter(Ie=>Ie!==A):[...ie,A]:ie.includes(A)?[]:[A],je=c();ue.length?je[oe.id]=oe.allowMultiple?ue:ue[0]:delete je[oe.id],u.value=je,i("update:answers",c())}function U(oe,A){return`${s}-${encodeURIComponent(oe.id)}-${encodeURIComponent(A.id)}`}function ee(oe,A,G){var De;if(o.disabled||h.value||oe.altKey||oe.ctrlKey||oe.metaKey)return;const ie=A.options.filter(Qe=>!Qe.disabled),ue=ie.findIndex(Qe=>Qe.id===G.id);let je;if(oe.key==="Home")je=0;else if(oe.key==="End")je=ie.length-1;else if(oe.key==="ArrowDown"||oe.key==="ArrowRight")je=(ue+1)%ie.length;else if(oe.key==="ArrowUp"||oe.key==="ArrowLeft")je=(ue-1+ie.length)%ie.length;else return;oe.preventDefault();const Ie=ie[je];Ie&&(A.allowMultiple||F(A,Ie.id,!0),(De=document.getElementById(U(A,Ie)))==null||De.focus({preventScroll:!0}))}function pe(oe){o.disabled||h.value||(x.value=Math.max(0,Math.min(o.questions.length-1,x.value+oe)))}function ge(){d.value=!d.value,i("update:expanded",d.value)}function le(){j.value&&(M.value=!0,d.value=!0,i("submit",S.value.map(oe=>({...oe}))),ke(()=>{var oe;return(oe=K.value)==null?void 0:oe.focus({preventScroll:!0})}))}function ae(){if(o.disabled||h.value)return;const oe={};for(const A of o.questions){const G=A.options.filter(ue=>!ue.disabled),ie=G.find(ue=>ue.recommended)??G[0];ie&&(oe[A.id]=A.allowMultiple?[ie.id]:ie.id)}u.value=oe,i("update:answers",c()),le()}function Me(){o.disabled||o.readOnly||(u.value={},M.value=!1,x.value=0,d.value=!0,i("update:answers",{}),i("reset"),ke(()=>{var oe,A;return(A=(oe=Q.value)==null?void 0:oe.querySelector('[role="radio"]:not(:disabled), [role="checkbox"]:not(:disabled)'))==null?void 0:A.focus({preventScroll:!0})}))}return ze(()=>o.initialAnswers,oe=>{u.value=r(oe,M.value||o.readOnly)},{deep:!0}),ze(E,()=>{const oe=r(u.value,o.initiallySubmitted||o.readOnly),A=JSON.stringify(oe)!==JSON.stringify(u.value);u.value=oe,o.initiallySubmitted||(M.value=!1),x.value=Math.min(x.value,Math.max(0,o.questions.length-1)),A&&i("update:answers",c())}),ze(()=>o.initiallyExpanded,oe=>{d.value=oe}),ze(()=>o.initiallySubmitted,oe=>{M.value=oe}),ze([d,M,x,()=>o.readOnly,()=>o.questions],R,{flush:"post"}),zt(()=>{typeof ResizeObserver<"u"&&(Z=new ResizeObserver(()=>{R()}),Q.value&&Z.observe(Q.value)),R()}),Yt(()=>{ne=!0,Z==null||Z.disconnect()}),t({reset:Me,toggle:ge,submit:le}),(oe,A)=>(m(),z("section",{class:ye(["clarification-card",{"is-submitted":M.value}]),"aria-label":"Questions and choices"},[l("div",{id:`${s}-body`,class:"clarification-body",style:Et({height:X.value}),"aria-hidden":!d.value||void 0,inert:!d.value||void 0},[l("div",{ref_key:"content",ref:Q,class:"clarification-content"},[h.value?(m(),z("div",VM,[l("div",GM,[H(q(ja),{"aria-hidden":"true",size:16}),l("span",null,"Questions · "+te(e.questions.length)+" questions",1),A[2]||(A[2]=l("span",{class:"readonly-label"},"Read only",-1))]),(m(!0),z(Ne,null,We(e.questions,(G,ie)=>(m(),z("div",{key:G.id,class:"history-question"},[l("p",FM,[l("span",null,te(ie+1)+".",1),Te(" "+te(G.prompt),1)]),(m(!0),z(Ne,null,We(G.options,ue=>(m(),z("div",{key:ue.id,class:ye(["history-option",{selected:f(G,ue.id)}]),"data-selected":f(G,ue.id)},[f(G,ue.id)?(m(),Le(q(rt),{key:0,"aria-hidden":"true",size:12})):(m(),z("span",KM)),l("span",null,te(ue.label),1)],10,ZM))),128))]))),128))])):O.value?(m(),z("form",{key:1,class:"clarification-form clarify-request",onSubmit:Ot(le,["prevent"])},[e.questions.length>1?(m(),z("div",JM,[l("div",qM,[(m(!0),z(Ne,null,We(e.questions,(G,ie)=>(m(),z("span",{key:G.id,class:ye({current:x.value===ie,answered:a(u.value[G.id]).length})},null,2))),128))]),l("span",null,te(x.value+1)+" / "+te(e.questions.length),1)])):me("",!0),l("div",XM,[H(q(ja),{"aria-hidden":"true",size:16}),l("span",{id:`${s}-prompt`,class:"question-prompt"},te(O.value.prompt),9,eg),l("span",tg,te(O.value.allowMultiple?"Select multiple":"Select one"),1)]),l("div",{class:"clarification-options",role:O.value.allowMultiple?"group":"radiogroup","aria-labelledby":`${s}-prompt`},[(m(!0),z(Ne,null,We(O.value.options,G=>(m(),z("button",{id:U(O.value,G),key:G.id,type:"button",class:ye(["clarification-option",{selected:f(O.value,G.id)}]),role:O.value.allowMultiple?"checkbox":"radio","aria-checked":f(O.value,G.id),"aria-pressed":f(O.value,G.id),disabled:e.disabled||G.disabled,onClick:ie=>F(O.value,G.id),onKeydown:ie=>ee(ie,O.value,G)},[l("span",{class:ye(["option-indicator",{multiple:O.value.allowMultiple}])},[f(O.value,G.id)?(m(),Le(q(rt),{key:0,"aria-hidden":"true",size:10})):me("",!0)],2),l("span",ig,te(G.label),1),G.recommended?(m(),z("span",sg,"Recommended")):me("",!0)],42,og))),128))],8,ng),l("footer",ag,[x.value>0?(m(),z("button",{key:0,type:"button",class:"previous-button",disabled:e.disabled,onClick:A[0]||(A[0]=G=>pe(-1))},[H(q(Zr),{"aria-hidden":"true",size:13}),A[3]||(A[3]=Te("Previous",-1))],8,rg)):(m(),z("span",lg)),x.value<e.questions.length-1?(m(),z("button",{key:2,type:"button",class:"secondary-button",disabled:e.disabled,onClick:A[1]||(A[1]=G=>pe(1))},[A[4]||(A[4]=Te("Next",-1)),H(q(po),{"aria-hidden":"true",size:13})],8,cg)):(m(),z("div",ug,[b.value?(m(),z("button",{key:0,type:"button",class:"secondary-button",disabled:e.disabled,onClick:ae},[H(q(rt),{"aria-hidden":"true",size:14}),A[5]||(A[5]=Te("Use recommended",-1))],8,dg)):me("",!0),l("button",{type:"submit",class:"confirm-button",disabled:!j.value},[A[6]||(A[6]=l("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[l("path",{d:"M12 18V6m-6 6 6-6 6 6"})],-1)),Te(te(e.submitLabel),1)],8,pg)]))])],32)):me("",!0),M.value?(m(),z("div",{key:2,ref_key:"receipt",ref:K,class:"clarification-summary",tabindex:"-1","aria-label":"Your choices","aria-live":"polite"},[l("div",Mg,[H(q(rt),{"aria-hidden":"true",size:16}),A[7]||(A[7]=Te("Your choices",-1))]),(m(!0),z(Ne,null,We(_.value,G=>(m(),z("div",{key:G.question.id,class:"summary-answer"},[l("p",gg,te(G.question.prompt),1),l("div",fg,[(m(!0),z(Ne,null,We(G.selected,ie=>(m(),z("span",{key:ie.optionId},te(ie.label),1))),128))])]))),128))],512)):me("",!0)],512)],12,HM)],2))}}),mg=jt(hg,[["__scopeId","data-v-9d637c05"]]),yg=["aria-label"],vg=["data-tab-value","aria-selected","tabindex","disabled","onClick"],Ng={key:0,class:"sliding-tab-count"},xg=qe({__name:"SlidingTabs",props:{modelValue:{},items:{default:()=>[{value:"all",label:"All"},{value:"running",label:"Running"},{value:"waiting",label:"Needs input"},{value:"completed",label:"Completed"}]},label:{default:"Task status"}},emits:["update:modelValue","change"],setup(e,{emit:t}){var ne;const n=e,o=t,i=we(()=>n.items.filter(S=>!S.disabled)),s=V(n.modelValue??((ne=i.value[0])==null?void 0:ne.value)??""),a=we(()=>n.modelValue??s.value),r=we(()=>{var S,_;return((S=i.value.find(j=>j.value===a.value))==null?void 0:S.value)??((_=i.value[0])==null?void 0:_.value)??""}),c=V(),u=V({opacity:"0"}),d=V(!1),M=new Set;let x,h=0,O=!1;function Q(S){var _;return[...((_=c.value)==null?void 0:_.querySelectorAll("button"))??[]].find(j=>j.dataset.tabValue===S)}function K(){const S=c.value;if(!S||O)return;const _=new Set([S,...S.querySelectorAll("button")]);M.forEach(U=>{_.has(U)||(x==null||x.unobserve(U),M.delete(U))}),_.forEach(U=>{x&&!M.has(U)&&(x.observe(U),M.add(U))});const j=S.querySelector('[aria-selected="true"]');if(!j){u.value.opacity!=="0"&&(u.value={opacity:"0"});return}const b=S.getBoundingClientRect(),E=j.getBoundingClientRect(),f=S.offsetWidth?b.width/S.offsetWidth:1,R=S.offsetHeight?b.height/S.offsetHeight:1;if(!E.width||!E.height||!f||!R)return;const F={opacity:"1",transform:`translate3d(${(E.left-b.left)/f-S.clientLeft+S.scrollLeft}px, ${(E.top-b.top)/R-S.clientTop+S.scrollTop}px, 0)`,width:`${E.width/f}px`,height:`${E.height/R}px`};Object.keys(F).some(U=>u.value[U]!==F[U])&&(u.value=F)}async function X(S,_=!1){var j;S.disabled||(a.value!==S.value&&(n.modelValue===void 0&&(s.value=S.value),o("update:modelValue",S.value),o("change",S.value)),await ke(),!O&&(K(),_&&((j=Q(S.value))==null||j.focus({preventScroll:!0}))))}function Z(S){var F;if(S.altKey||S.ctrlKey||S.metaKey||!["ArrowLeft","ArrowRight","Home","End"].includes(S.key)||!i.value.length)return;S.preventDefault();const _=(F=S.target.closest('[role="tab"]'))==null?void 0:F.dataset.tabValue,j=i.value.findIndex(U=>U.value===(_??a.value)),b=c.value&&getComputedStyle(c.value).direction==="rtl",E=S.key===(b?"ArrowLeft":"ArrowRight"),f=S.key==="Home"?0:S.key==="End"?i.value.length-1:j<0?E?0:i.value.length-1:(j+(E?1:-1)+i.value.length)%i.value.length,R=i.value[f];R&&X(R,!0)}return ze(()=>n.items,()=>{var S;n.modelValue===void 0&&!i.value.some(_=>_.value===s.value)&&(s.value=((S=i.value[0])==null?void 0:S.value)??"")},{deep:!0}),ze(()=>n.modelValue,S=>{var _;S!==void 0?s.value=S:i.value.some(j=>j.value===s.value)||(s.value=((_=i.value[0])==null?void 0:_.value)??"")}),ze(()=>[n.modelValue,n.items],()=>ke(K),{deep:!0}),zt(()=>{var S;typeof ResizeObserver<"u"&&(x=new ResizeObserver(K)),K(),window.addEventListener("resize",K),(S=document.fonts)==null||S.ready.then(()=>{O||K()}),h=requestAnimationFrame(()=>{O||(d.value=!0)})}),gi(K),Yt(()=>{O=!0,x==null||x.disconnect(),M.clear(),window.removeEventListener("resize",K),cancelAnimationFrame(h)}),(S,_)=>(m(),z("div",{ref_key:"track",ref:c,class:ye(["sliding-tabs-demo",{"is-ready":d.value}]),role:"tablist","aria-orientation":"horizontal","aria-label":e.label,onKeydown:Z},[l("span",{class:"sliding-tabs-indicator",style:Et(u.value),"aria-hidden":"true"},null,4),(m(!0),z(Ne,null,We(e.items,j=>(m(),z("button",{key:j.value,type:"button",role:"tab","data-tab-value":j.value,"aria-selected":a.value===j.value&&!j.disabled,tabindex:!j.disabled&&r.value===j.value?0:-1,disabled:j.disabled,onClick:b=>X(j)},[l("span",null,te(j.label),1),j.count!==void 0?(m(),z("span",Ng,te(j.count),1)):me("",!0)],8,vg))),128))],42,yg))}}),Ts=jt(xg,[["__scopeId","data-v-323e21e9"]]),bg=["disabled"],Lg={class:"task-groups-scroll"},jg=["data-group-id"],Dg=["disabled","aria-expanded","aria-controls","aria-label","onClick"],wg=["innerHTML"],Ig={class:"task-group-count"},Tg=["inert","aria-hidden","id"],zg=["disabled","aria-current","aria-label","title","onClick"],Ag={class:"task-row-label"},kg={key:0,class:"task-row-meta"},Sg={key:1,class:"task-status-dot","aria-hidden":"true"},Eg={key:2,class:"task-waiting-icon",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},Cg={key:3,class:"task-idle-dot","aria-hidden":"true"},Og={key:0,class:"task-group-empty"},Ug=350,Qg=qe({__name:"GroupedTaskList",props:{groups:{default:()=>[{id:"running",label:"In progress",items:[{id:"portfolio",label:"Design a portfolio",status:"running"},{id:"brand",label:"Organize brand assets",status:"waiting"}]},{id:"auto",label:"Automations",items:[{id:"review",label:"Review the interface",status:"running"},{id:"export",label:"Export design assets",status:"idle"}]},{id:"history",label:"History",items:[{id:"landing",label:"Build the landing page",status:"completed",meta:"Just now"},{id:"research",label:"Collect references",status:"completed",meta:"Yesterday"}]}]},modelValue:{},disabled:{type:Boolean,default:!1},createDisabled:{type:Boolean,default:!1}},emits:["select","create","update:modelValue"],setup(e,{emit:t}){const n=e,o=t,i=V(n.modelValue??r()),s=we(()=>n.modelValue??i.value),a=V();function r(){var I;return((I=n.groups.filter(w=>!w.disabled).flatMap(w=>w.items).find(w=>!w.disabled))==null?void 0:I.id)??""}function c(I){return`task-group-${d}-${encodeURIComponent(I)}`}const u=V({}),d=Dn(),M=new WeakMap;function x(I){var L;if(n.disabled||(L=n.groups.find(g=>g.id===I))!=null&&L.disabled)return;const w=document.getElementById(c(I));w&&M.set(w,{height:w.getBoundingClientRect().height,opacity:getComputedStyle(w).opacity}),u.value[I]=!u.value[I]}const h=V(),O=V({x:0,y:0,diameter:0}),Q=V("idle"),K=V(!1),X=V(!1);let Z,ne=!1,S=!1,_,j,b;const E={running:"Running",waiting:"Needs input",idle:"Ready",completed:"Completed"},f={running:'<circle cx="12" cy="12" r="8.2"/><path d="M10.4 8.9l4.6 3.1-4.6 3.1z"/>',auto:'<circle cx="4.6" cy="12" r="1.35" fill="currentColor" stroke="none"/><path d="M6.4 12h11.2M14.2 6.6l6.2 5.4-6.2 5.4"/>',history:'<path d="M4.2 4.2v4.6h4.6M4.3 13.2A8.2 8.2 0 1 0 7.2 6.1L4.2 8.8M12 8.2v3.2l3.2 1.6"/>'};function R(I,w){n.disabled||w.disabled||I.disabled||(n.modelValue===void 0&&(i.value=I.id),o("update:modelValue",I.id),o("select",I,w))}function F(){return window.matchMedia("(hover: hover) and (pointer: fine)").matches}function U(){var I,w,L,g;return n.disabled||n.createDisabled||((I=a.value)==null?void 0:I.getAttribute("aria-disabled"))==="true"||((w=a.value)==null?void 0:w.getAttribute("aria-busy"))==="true"||((L=h.value)==null?void 0:L.getAttribute("aria-disabled"))==="true"||((g=h.value)==null?void 0:g.getAttribute("aria-busy"))==="true"}function ee(){clearTimeout(j),j=void 0}function pe(I,w){const L=h.value;if(!L)return;const g=L.getBoundingClientRect(),C=I===void 0?g.width/2:I-g.left,$=w===void 0?g.height/2:w-g.top,de=Math.max(C,g.width-C),P=Math.max($,g.height-$);O.value={x:C,y:$,diameter:Math.hypot(de,P)*2}}function ge(I,w){U()||(ee(),pe(I,w),K.value=!1,Q.value="hover")}function le(){ee(),Q.value="leave",j=setTimeout(()=>{Q.value!=="hover"&&(O.value={...O.value,diameter:0},Q.value="idle"),j=void 0},Ug)}function ae(){clearTimeout(b),b=void 0,X.value=!1}function Me(){U()||(clearTimeout(b),X.value=!0,b=setTimeout(()=>{X.value=!1,b=void 0},520))}function oe(I){!F()||I.pointerType==="touch"||(Z={x:I.clientX,y:I.clientY},!U()&&(ge(Z.x,Z.y),Me()))}function A(){Z=void 0,ae(),ne||le()}function G(){var I;ne=!U()&&!!((I=h.value)!=null&&I.matches(":focus-visible")),ne&&(ge(),Me())}function ie(){ne=!1,Z||(le(),ae())}function ue(){U()||(Me(),o("create"))}function je(){Z=void 0,ne=!1,le(),ae()}function Ie(){document.hidden&&je()}function De(){var w;const I=U();I?(ee(),K.value=!0,Q.value="idle",O.value.diameter&&(O.value={...O.value,diameter:0}),ne=!1,ae()):(K.value=!1,S&&Z&&((w=h.value)!=null&&w.matches(":hover"))&&F()&&ge(Z.x,Z.y)),S=I}ze(()=>n.disabled||n.createDisabled,De,{flush:"post"}),gi(De),zt(()=>{De(),window.addEventListener("blur",je),document.addEventListener("visibilitychange",Ie),typeof ResizeObserver<"u"&&(_=new ResizeObserver(()=>{Q.value==="hover"&&!U()&&pe(ne||Z==null?void 0:Z.x,ne||Z==null?void 0:Z.y)}),h.value&&_.observe(h.value))}),Yt(()=>{_==null||_.disconnect(),ee(),ae(),window.removeEventListener("blur",je),document.removeEventListener("visibilitychange",Ie)});function Qe(I){var L;if(n.disabled||!a.value||I.altKey||I.ctrlKey||I.metaKey)return;const w=I.target.closest("button");if(!(!w||w.disabled)){if(["ArrowUp","ArrowDown","Home","End"].includes(I.key)){const g=[...a.value.querySelectorAll("button:not(:disabled)")].filter(de=>!de.closest("[inert]")&&de.getClientRects().length),C=g.indexOf(w);if(!g.length)return;I.preventDefault();const $=I.key==="Home"?0:I.key==="End"?g.length-1:(C+(I.key==="ArrowDown"?1:-1)+g.length)%g.length;(L=g[$])==null||L.focus({preventScroll:!0})}else if(I.key==="ArrowLeft"||I.key==="ArrowRight"){const g=w.closest(".task-nav-group"),C=g==null?void 0:g.dataset.groupId,$=g==null?void 0:g.querySelector(".task-group-heading");if(!C||!$||$.disabled)return;I.preventDefault(),I.key==="ArrowLeft"?(u.value[C]||x(C),ke(()=>$.focus({preventScroll:!0}))):u.value[C]&&x(C)}}}function Pe(I){I.removeAttribute("inert"),I.removeAttribute("aria-hidden");const w=I,L=M.get(w),g=(L==null?void 0:L.height)??w.getBoundingClientRect().height,C=(L==null?void 0:L.opacity)??getComputedStyle(w).opacity;w.style.height=`${g}px`,w.style.opacity=g?C:"0"}function Ge(I){const w=I;w.getBoundingClientRect(),w.style.height=`${w.scrollHeight}px`,w.style.opacity="1",M.delete(w)}function ot(I){I.removeAttribute("inert"),I.removeAttribute("aria-hidden");const w=I;w.style.height="",w.style.opacity=""}function p(I){const w=I,L=M.get(w),g=getComputedStyle(w).display==="none",C=g?(L==null?void 0:L.height)??0:w.getBoundingClientRect().height,$=g?(L==null?void 0:L.opacity)??"0":getComputedStyle(w).opacity;M.set(w,{height:C,opacity:$}),w.style.height=`${C}px`,w.style.opacity=$}function D(I){I.setAttribute("inert",""),I.setAttribute("aria-hidden","true");const w=I;w.style.height=`${w.offsetHeight}px`,w.style.opacity="1"}function W(I){const w=I;w.getBoundingClientRect(),w.style.height="0px",w.style.opacity="0"}function J(I){const w=I;w.style.height="",w.style.opacity=""}return ze(()=>n.modelValue,I=>{I!==void 0?i.value=I:n.groups.some(w=>!w.disabled&&w.items.some(L=>L.id===i.value&&!L.disabled))||(i.value=r())}),ze(()=>n.groups,I=>{const w=new Set(I.map(L=>L.id));u.value=Object.fromEntries(Object.entries(u.value).filter(([L])=>w.has(L))),n.modelValue===void 0&&!I.some(L=>!L.disabled&&L.items.some(g=>g.id===i.value&&!g.disabled))&&(i.value=r())},{deep:!0}),(I,w)=>(m(),z("nav",{ref_key:"navigation",ref:a,class:"grouped-task-demo","aria-label":"Workspace tasks",onKeydown:Qe},[l("button",{ref_key:"createButton",ref:h,class:ye(["task-create-button",{"is-active":Q.value==="hover","is-leaving":Q.value==="leave","is-ink-suppressed":K.value}]),type:"button",disabled:e.disabled||e.createDisabled,onPointerenter:oe,onPointerleave:A,onPointercancel:A,onFocus:G,onBlur:ie,onClick:ue},[l("span",{class:"task-create-wave",style:Et({left:`${O.value.x}px`,top:`${O.value.y}px`,width:`${O.value.diameter}px`,height:`${O.value.diameter}px`}),"aria-hidden":"true"},null,4),(m(),z("svg",{class:ye({"is-playing":X.value}),width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[...w[0]||(w[0]=[l("path",{d:"M12.5 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6.5"},null,-1),l("path",{class:"task-create-pen",d:"m15.5 4.5 4 4M10 10l7.3-7.3a1.4 1.4 0 0 1 2 0l2 2a1.4 1.4 0 0 1 0 2L14 14l-5 1 1-5Z"},null,-1)])],2)),w[1]||(w[1]=l("span",null,"New task",-1))],42,bg),l("div",Lg,[(m(!0),z(Ne,null,We(e.groups,L=>(m(),z("section",{key:L.id,class:"task-nav-group","data-group-id":L.id},[l("button",{class:"task-group-heading",type:"button",disabled:e.disabled||L.disabled,"aria-expanded":!u.value[L.id],"aria-controls":c(L.id),"aria-label":`${u.value[L.id]?"Expand":"Collapse"} ${L.label}`,onClick:g=>x(L.id)},[(m(),z("svg",{class:"task-group-icon",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:f[L.icon||L.id]||f.history},null,8,wg)),l("span",null,te(L.label),1),(m(),z("svg",{class:ye(["task-group-chevron",{collapsed:u.value[L.id]}]),width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[...w[2]||(w[2]=[l("path",{d:"m7 10 5 5 5-5"},null,-1)])],2)),l("span",Ig,te(L.items.length),1)],8,Dg),H(dt,{name:"task-group-collapse",onBeforeEnter:Pe,onEnter:Ge,onAfterEnter:ot,onBeforeLeave:D,onLeave:W,onAfterLeave:J,onEnterCancelled:p,onLeaveCancelled:p,persisted:""},{default:Xe(()=>[et(l("div",{inert:u.value[L.id]||void 0,"aria-hidden":u.value[L.id]||void 0,id:c(L.id),class:"task-group-body"},[(m(!0),z(Ne,null,We(L.items,g=>(m(),z("div",{key:g.id,class:"task-tree-item"},[l("button",{class:ye(["task-nav-row",{selected:s.value===g.id}]),type:"button",disabled:e.disabled||L.disabled||g.disabled,"aria-current":s.value===g.id?"true":void 0,"aria-label":`${g.label}${g.status?`，${E[g.status]}`:""}`,title:g.label,onClick:C=>R(g,L)},[l("span",Ag,te(g.label),1),g.meta?(m(),z("span",kg,te(g.meta),1)):me("",!0),g.status==="running"?(m(),z("span",Sg)):g.status==="waiting"?(m(),z("svg",Eg,[...w[3]||(w[3]=[l("circle",{cx:"10.2",cy:"8",r:"3.2"},null,-1),l("path",{d:"M3.8 20a6.4 6.4 0 0 1 12.8 0"},null,-1),l("circle",{class:"task-waiting-dot",cx:"18.6",cy:"11.5",r:"1.55",fill:"currentColor",stroke:"none"},null,-1)])])):g.status==="idle"?(m(),z("span",Cg)):me("",!0)],10,zg)]))),128)),L.items.length?me("",!0):(m(),z("p",Og,"No tasks"))],8,Tg),[[St,!u.value[L.id]]])]),_:2},1024)],8,jg))),128))])],544))}}),tl=jt(Qg,[["__scopeId","data-v-148271d7"]]),Yg=["disabled","role","aria-expanded","aria-controls","aria-activedescendant","aria-invalid","aria-label"],Pg=["inert","aria-hidden"],_g={key:0,class:"selector-search-bar"},$g=["aria-expanded","aria-activedescendant","aria-label","placeholder"],Rg=["data-scrolling","aria-label","aria-busy"],Wg=["id","disabled","aria-selected","onPointermove","onClick"],Bg={key:0,class:"selector-option-label"},Hg={key:1,class:"selector-option-label"},Vg={key:0},Gg={key:2,class:"selector-option-hint"},Fg={key:0},Zg={key:0,class:"selector-empty",role:"status"};let An;const Kg=qe({__name:"Selector",props:{modelValue:{},options:{default:()=>[]},disabled:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},placeholder:{default:"Select an option"},emptyText:{default:"No matching options"},ariaLabel:{default:"Select an option"},searchable:{type:Boolean,default:!1},searchPlaceholder:{default:"Search options…"},allowCustom:{type:Boolean,default:!1},customPosition:{default:"first"},loading:{type:Boolean,default:!1},size:{default:"md"},variant:{default:"outline"}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,o=t,i=`selector-${Dn().replace(/:/g,"")}`,s=`${i}-listbox`,a=N=>`${i}-option-${N}`,r=V(),c=V(),u=V(),d=V(),M=V(),x=V(),h=V(!1),O=V(""),Q=V(!1),K=V(""),X=we(()=>n.modelValue===void 0?K.value:n.modelValue),Z=we(()=>n.options.find(N=>N.value===X.value)),ne=we(()=>!Z.value&&!(n.allowCustom&&X.value)),S=we(()=>{var N;return((N=Z.value)==null?void 0:N.label)??(n.allowCustom&&X.value?X.value:n.placeholder)}),_=V({visibility:"hidden"}),j=V(-1),b=V({opacity:"0"});let E,f=0,R,F,U=!1,ee=0,pe,ge,le=!1;const ae=we(()=>{const N=n.searchable?O.value.trim().toLowerCase():"",T=n.options.filter(ve=>!N||[ve.label,ve.value,ve.hint||""].some(Se=>Se.toLowerCase().includes(N))).map(ve=>({...ve,custom:!1})),B=n.searchable&&n.allowCustom?O.value.trim():"",ce=B&&!n.options.some(ve=>ve.value===B)?[{value:B,label:B,hint:"",disabled:!1,custom:!0}]:[];return n.customPosition==="last"?[...T,...ce]:[...ce,...T]}),Me=we(()=>ae.value.flatMap((N,T)=>N.disabled?[]:[T])),oe=we(()=>h.value&&ae.value[j.value]&&!ae.value[j.value].disabled?a(j.value):void 0);function A(N){const T=n.searchable?O.value.trim():"",B=T?N.toLowerCase().indexOf(T.toLowerCase()):-1;return B<0?{before:N,match:"",after:""}:{before:N.slice(0,B),match:N.slice(B,B+T.length),after:N.slice(B+T.length)}}function G(N,T){if(!N.isConnected||T.width<=0||T.height<=0||N.closest('[inert], [hidden], [aria-hidden="true"]'))return!1;let B=Math.max(0,T.left),ce=Math.min(innerWidth,T.right),ve=Math.max(0,T.top),Se=Math.min(innerHeight,T.bottom);for(let Ce=N.parentElement;Ce;Ce=Ce.parentElement){const Ye=getComputedStyle(Ce),Ze=Ce.getBoundingClientRect();if(/auto|scroll|hidden|clip/.test(Ye.overflowX)&&(B=Math.max(B,Ze.left+Ce.clientLeft),ce=Math.min(ce,Ze.left+Ce.clientLeft+Ce.clientWidth)),/auto|scroll|hidden|clip/.test(Ye.overflowY)&&(ve=Math.max(ve,Ze.top+Ce.clientTop),Se=Math.min(Se,Ze.top+Ce.clientTop+Ce.clientHeight)),B>=ce||ve>=Se)return!1}return B<ce&&ve<Se}function ie(N=!1){var at,wt;if(!h.value||!c.value||!u.value)return;const T=c.value.getBoundingClientRect();if(!G(c.value,T)){Pe();return}const B=window.visualViewport,ce=8,ve=6,Se=288,Ce=(B==null?void 0:B.offsetLeft)||0,Ye=(B==null?void 0:B.offsetTop)||0,Ze=(B==null?void 0:B.width)||innerWidth,Lt=(B==null?void 0:B.height)||innerHeight,it=((at=u.value.querySelector(".selector-search-bar"))==null?void 0:at.offsetHeight)||0,st=Math.min(Se,it+(((wt=M.value)==null?void 0:wt.offsetHeight)||0)+10),Dt=Math.max(0,Ye+Lt-T.bottom-ve-ce),nn=Math.max(0,T.top-Ye-ve-ce),Wt=E&&N?E==="above":Dt<st&&nn>Dt;E=Wt?"above":"below";const wn=Math.min(Se,Wt?nn:Dt),re=Math.min(st,wn),xe=Math.min(n.variant==="ghost"?Math.max(168,T.width):T.width,Math.max(0,Ze-ce*2)),ft=Math.max(Ce+ce,Math.min(T.left,Ce+Ze-xe-ce)),nt=Math.max(Ye+ce,Math.min(Wt?T.top-ve-re:T.bottom+ve,Ye+Lt-re-ce));_.value={"--selector-size-duration":N&&U?"200ms":"0ms","--selector-offset":Wt?"5px":"-5px","--selector-origin":Wt?"bottom":"top",position:"fixed",top:`${Math.round(nt)}px`,left:`${Math.round(ft)}px`,width:`${Math.round(xe)}px`,height:`${Math.round(re)}px`,maxHeight:`${Math.floor(wn)}px`,visibility:"visible",zIndex:"60"}}function ue(N=!0){var B;if(!h.value||!U)return;const T=document.getElementById(a(j.value));if(!T||!((B=M.value)!=null&&B.contains(T))){b.value={opacity:"0"};return}b.value={transform:`translateY(${T.offsetTop}px)`,height:`${T.offsetHeight}px`,opacity:"1","--selector-highlight-duration":N?"190ms":"0ms"}}function je(N=!1){if(!h.value||!U||!d.value)return;const T=document.getElementById(a(j.value));if(!T)return;const B=T.getBoundingClientRect(),ce=d.value.getBoundingClientRect();let ve=0;B.top<ce.top+4?ve=B.top-ce.top-4:B.bottom>ce.bottom-4&&(ve=B.bottom-ce.bottom+4),ve&&d.value.scrollTo({top:d.value.scrollTop+ve,behavior:N&&!(F!=null&&F.matches)&&Math.abs(ve)<d.value.clientHeight?"smooth":"instant"})}function Ie(){Q.value=!0,clearTimeout(pe),pe=setTimeout(()=>{Q.value=!1},650)}function De(N){var T;!h.value||(N==null?void 0:N.target)instanceof Node&&((T=u.value)!=null&&T.contains(N.target))||(cancelAnimationFrame(ee),ee=requestAnimationFrame(()=>{ee=0,ie()}))}async function Qe(N){var ce;if(n.disabled||le)return;An!==Pe&&(An==null||An()),An=Pe;const T=!!(R&&!R.opening);U=T,T||(E=void 0,_.value={position:"fixed",visibility:"hidden"}),O.value="",h.value=!0;const B=ae.value.findIndex(ve=>ve.value===X.value&&!ve.disabled);j.value=N==="last"?Me.value.at(-1)??-1:N==="first"?Me.value[0]??-1:B>=0?B:Me.value[0]??-1,await ke(),!(!h.value||le)&&(ie(T),await ke(),!(!h.value||le)&&(U=!0,je(),(ce=x.value)==null||ce.focus({preventScroll:!0}),ue(!1),M.value&&(ge==null||ge.observe(M.value))))}function Pe(N=!1){var T;An===Pe&&(An=void 0),cancelAnimationFrame(ee),ee=0,M.value&&(ge==null||ge.unobserve(M.value)),h.value=!1,U=!1,clearTimeout(pe),Q.value=!1,N&&!le&&((T=c.value)==null||T.focus({preventScroll:!0}))}function Ge(N){if(f++,!R||R.element!==N)return;const T=getComputedStyle(N),B=T.opacity,ce=T.transform;R.animation.cancel(),N.style.opacity=B,N.style.transform=ce,R=void 0}function ot(N,T,B){const ce=getComputedStyle(N),ve=Number.parseFloat(ce.opacity),Se={opacity:T?"1":"0",transform:T?"translateY(0)":`translateY(${E==="above"?5:-5}px)`};if(F!=null&&F.matches||document.hidden){Object.assign(N.style,Se),B();return}const Ce=N.animate([{opacity:ce.opacity,transform:ce.transform},Se],{duration:Math.max(65,(T?220:130)*Math.abs((T?1:0)-ve)),easing:T?"cubic-bezier(.16,1,.3,1)":"cubic-bezier(.4,0,1,1)",fill:"both"});R={animation:Ce,element:N,opening:T},Ce.finished.then(()=>{(R==null?void 0:R.animation)===Ce&&(Object.assign(N.style,Se),R=void 0,Ce.cancel(),B())},()=>{})}async function p(N,T){Ge(N);const B=f;await ke(),await ke(),!(!h.value||le||B!==f)&&ot(N,!0,T)}function D(N,T){Ge(N),N.setAttribute("aria-hidden","true"),N.inert=!0,ot(N,!1,T)}function W(){h.value||(O.value="",E=void 0)}function J(){F!=null&&F.matches&&(R==null||R.animation.finish())}function I(N){const T=ae.value[N];!h.value||n.disabled||!T||T.disabled||(n.modelValue===void 0&&(K.value=T.value),o("update:modelValue",T.value),Pe(!0))}function w(N){N.stopPropagation(),h.value?Pe():Qe()}function L(N){const T=Me.value,B=T.indexOf(j.value);j.value=T.length?T[(B+N+T.length)%T.length]:-1}function g(N){var T,B;if(!(!h.value||n.disabled||N.isComposing||N.keyCode===229||N.ctrlKey||N.metaKey||N.altKey)){if(N.key==="Tab"){(T=u.value)!=null&&T.contains(document.activeElement)&&((B=c.value)==null||B.focus({preventScroll:!0})),Pe();return}if(N.key==="Escape"){N.preventDefault(),N.stopPropagation(),Pe(!0);return}if(["ArrowDown","ArrowUp"].includes(N.key)){N.preventDefault(),N.stopPropagation(),L(N.key==="ArrowDown"?1:-1);return}if(["Home","End"].includes(N.key)&&N.target!==x.value){N.preventDefault(),N.stopPropagation(),j.value=N.key==="Home"?Me.value[0]??-1:Me.value.at(-1)??-1;return}(N.key==="Enter"||N.key===" "&&!n.searchable)&&(N.preventDefault(),N.stopPropagation(),I(j.value))}}function C(N){n.disabled||h.value||N.isComposing||N.keyCode===229||N.ctrlKey||N.metaKey||N.altKey||["ArrowDown","ArrowUp","Home","End","Enter"," "].includes(N.key)&&(N.preventDefault(),N.stopPropagation(),Qe(N.key==="Home"?"first":N.key==="End"?"last":void 0))}function $(N){var B,ce;const T=N.target;T instanceof Node&&((B=r.value)!=null&&B.contains(T)||(ce=u.value)!=null&&ce.contains(T))&&g(N)}function de(N){var B,ce;const T=N.target;T instanceof Node&&!((B=r.value)!=null&&B.contains(T))&&!((ce=u.value)!=null&&ce.contains(T))&&Pe()}function P(N){var B,ce;const T=N.target;h.value&&T instanceof Node&&!((B=r.value)!=null&&B.contains(T))&&!((ce=u.value)!=null&&ce.contains(T))&&Pe()}function v(){document.hidden&&Pe()}return ze([ae,O],([N,T],[B,ce])=>{var Ce;const ve=(Ce=B==null?void 0:B[j.value])==null?void 0:Ce.value,Se=T===ce?N.findIndex(Ye=>Ye.value===ve&&!Ye.disabled):-1;j.value=Se>=0?Se:Me.value[0]??-1,h.value&&ke(()=>{ie(!0),je(),ue(!1)})}),ze(j,()=>{h.value&&ke(()=>{je(!0),ue()})}),ze(()=>n.disabled,N=>{N&&Pe()},{flush:"sync"}),ze(()=>n.searchable,()=>Pe()),zt(()=>{var N,T;F=window.matchMedia("(prefers-reduced-motion: reduce)"),F.addEventListener("change",J),ge=new ResizeObserver(B=>{h.value&&(B.some(ce=>ce.target===r.value)?De():(ie(!0),ue(!1)))}),r.value&&ge.observe(r.value),document.addEventListener("pointerdown",de,!0),document.addEventListener("keydown",$,!0),document.addEventListener("focusin",P),document.addEventListener("visibilitychange",v),window.addEventListener("scroll",De,!0),window.addEventListener("resize",De),(N=window.visualViewport)==null||N.addEventListener("resize",De),(T=window.visualViewport)==null||T.addEventListener("scroll",De)}),Yt(()=>{var N,T;le=!0,Pe(),u.value&&Ge(u.value),F==null||F.removeEventListener("change",J),ge==null||ge.disconnect(),document.removeEventListener("pointerdown",de,!0),document.removeEventListener("keydown",$,!0),document.removeEventListener("focusin",P),document.removeEventListener("visibilitychange",v),window.removeEventListener("scroll",De,!0),window.removeEventListener("resize",De),(N=window.visualViewport)==null||N.removeEventListener("resize",De),(T=window.visualViewport)==null||T.removeEventListener("scroll",De)}),(N,T)=>(m(),z("div",{ref_key:"root",ref:r,class:ye(["selector",[`selector--${e.size}`,`selector--${e.variant}`,{"is-open":h.value,"is-invalid":e.invalid}]])},[l("button",{ref_key:"trigger",ref:c,type:"button",class:"selector-trigger",disabled:e.disabled,role:e.searchable?void 0:"combobox","aria-haspopup":"listbox","aria-expanded":h.value,"aria-controls":h.value?s:void 0,"aria-activedescendant":e.searchable?void 0:oe.value,"aria-invalid":e.invalid||void 0,"aria-label":e.ariaLabel,onClick:w,onKeydown:C},[Gs(N.$slots,"leading",{value:X.value},void 0),l("span",{class:ye(["selector-value",{"is-placeholder":ne.value}])},te(S.value),3),H(q(_t),{class:"selector-chevron",size:14,"aria-hidden":"true"})],40,Yg),(m(),Le(pr,{to:"body"},[H(dt,{css:!1,onEnter:p,onLeave:D,onEnterCancelled:Ge,onLeaveCancelled:Ge,onAfterLeave:W,persisted:""},{default:Xe(()=>[et(l("div",{ref_key:"panel",ref:u,class:ye(["selector-panel",[`selector-panel--${e.size}`,`selector-panel--${e.variant}`]]),inert:!h.value||void 0,"aria-hidden":!h.value||void 0,style:Et(_.value),onClick:T[2]||(T[2]=Ot(()=>{},["stop"]))},[e.searchable?(m(),z("div",_g,[H(q(qr),{size:14,"aria-hidden":"true"}),et(l("input",{ref_key:"searchInput",ref:x,"onUpdate:modelValue":T[0]||(T[0]=B=>O.value=B),class:"selector-search",type:"search",role:"combobox","aria-autocomplete":"list","aria-expanded":h.value,"aria-controls":s,"aria-activedescendant":oe.value,"aria-label":e.searchPlaceholder,placeholder:e.searchPlaceholder,autocomplete:"off"},null,8,$g),[[xi,O.value]])])):me("",!0),l("div",{id:s,ref_key:"list",ref:d,class:"selector-list","data-scrolling":Q.value||void 0,onScrollPassive:Ie,role:"listbox","aria-label":e.ariaLabel,"aria-busy":e.loading||void 0},[l("div",{ref_key:"optionsContainer",ref:M,class:"selector-options"},[l("span",{class:"selector-highlight",style:Et(b.value),"aria-hidden":"true"},null,4),(m(!0),z(Ne,null,We(ae.value,(B,ce)=>(m(),z("button",{id:a(ce),key:`${B.custom?"custom":"option"}:${B.value}`,class:ye(["selector-option",{"is-active":ce===j.value,"is-selected":B.value===X.value}]),type:"button",role:"option",tabindex:"-1",disabled:B.disabled,"aria-selected":B.value===X.value,onPointermove:ve=>!B.disabled&&(j.value=ce),onPointerdown:T[1]||(T[1]=Ot(()=>{},["prevent"])),onClick:Ot(ve=>I(ce),["stop"])},[Gs(N.$slots,"option-leading",{option:B},void 0,!0),B.custom?(m(),z("span",Bg,"Use “"+te(B.value)+"”",1)):(m(),z("span",Hg,[Te(te(A(B.label).before),1),A(B.label).match?(m(),z("mark",Vg,te(A(B.label).match),1)):me("",!0),Te(te(A(B.label).after),1)])),B.hint?(m(),z("span",Gg,[Te(te(A(B.hint).before),1),A(B.hint).match?(m(),z("mark",Fg,te(A(B.hint).match),1)):me("",!0),Te(te(A(B.hint).after),1)])):me("",!0),H(q(rt),{class:ye(["selector-check",{"is-visible":B.value===X.value}]),size:14,"aria-hidden":"true"},null,8,["class"])],42,Wg))),128)),ae.value.length?me("",!0):(m(),z("p",Zg,te(e.loading?"Loading options…":e.emptyText),1))],512)],40,Rg)],14,Pg),[[St,h.value]])]),_:3})]))],2))}}),Jg=jt(Kg,[["__scopeId","data-v-bb77e455"]]),qg=Object.assign({"../components/ui/ActivityTimeline.vue":Dd,"../components/ui/ChatComposer.vue":wd,"../components/ui/ChatConversation.vue":Id,"../components/ui/ClarificationCard.vue":Td,"../components/ui/GroupedTaskList.vue":zd,"../components/ui/ModelSelector.vue":Ad,"../components/ui/Selector.vue":kd,"../components/ui/SlidingTabs.vue":Sd,"../components/ui/StatusBadge.vue":Ed,"../components/ui/ThinkingIndicator.vue":Cd}),Xg=[["chat-conversation","Chat Conversation","Chat Conversation","Messages, execution steps, and input","conversation",el,"ChatConversation",!0],["chat-composer","Chat Composer","Chat Composer","Messages, attachments, and model selection","conversation",Zd,"ChatComposer",!0],["model-selector","Model Selector","Model Selector","Search and switch models","agent",pM,"ModelSelector"],["thinking-indicator","Thinking Indicator","Thinking Indicator","A thinking status indicator","conversation",oM,"ThinkingIndicator"],["status-badge","Status Badge","Status Badge","Task execution status","agent",fM,"StatusBadge"],["activity-timeline","Activity Timeline","Activity Timeline","Execution steps and tool details","workflow",BM,"ActivityTimeline",!0],["clarification-card","Clarification Card","Clarification Card","Questions, choices, and answers","conversation",mg,"ClarificationCard",!0],["sliding-tabs","Sliding Tabs","Sliding Tabs","Switch between tabs","navigation",Ts,"SlidingTabs",!0],["selector","Selector","Selector","Search and choose from a dropdown","navigation",Jg,"Selector"],["grouped-task-list","Grouped Task List","Grouped Task List","Grouped tasks with collapse and selection","navigation",tl,"GroupedTaskList",!0]],vt=Xg.map(([e,t,n,o,i,s,a,r])=>({slug:e,name:t,english:n,description:o,category:i,component:s,filename:a,fresh:r,source:qg[`../components/ui/${a}.vue`]||""})),Qo=[{id:"all",name:"All components",english:"All components"},{id:"conversation",name:"Conversation",english:"Conversation"},{id:"agent",name:"Agents",english:"Agent"},{id:"workflow",name:"Workflow",english:"Workflow"},{id:"navigation",name:"Navigation",english:"Navigation"}],ef=e=>e.filename,tf={"chat-conversation":"chat conversation messages history attachments input send stop streaming","chat-composer":"chat composer message input attachments send","model-selector":"model select switch dropdown picker","thinking-indicator":"thinking waiting loading reasoning","status-badge":"status label badge tag","activity-timeline":"activity timeline fold expand collapse tools","clarification-card":"question answer clarification choices form","sliding-tabs":"tab tabs switch segmented control",selector:"select selector dropdown options picker form searchable","grouped-task-list":"list group tasks navigation sidebar fold collapse hover new task"};function nf(e,t){return`${e.name} ${e.english} ${e.description} ${tf[e.slug]||""}`.toLowerCase().includes(t.trim().toLowerCase())}const of={body:'<rect class="front" x="9" y="9" width="11" height="11" rx="2"/><path class="back" d="M5 15V5a2 2 0 0 1 2-2h10"/>',duration:1050,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"前后两页分离，再贴合复位"},sf={body:'<g class="lid"><path d="M4 7h16M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></g><path class="bin" d="M6 7l1 13h10l1-13"/>',duration:1100,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"桶身固定，桶盖和把手一起抬起再合上"},af={body:'<path d="M3 17V7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8"/><path class="front" d="M3 10h18v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',duration:1150,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"后侧标签固定，前侧面板展开再合上"},rf={body:'<rect x="3" y="4" width="18" height="16" rx="2"/><path class="prompt" d="M7 9l3 3-3 3"/><path class="cursor" d="M13 15h4"/>',duration:1100,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"外框保持固定，提示符前移，光标闪烁两次"},lf={body:'<circle class="node-a" cx="6" cy="6" r="2.2" fill="currentColor" fill-opacity="0"/><circle class="node-b" cx="6" cy="18" r="2.2" fill="currentColor" fill-opacity="0"/><circle class="node-c" cx="18" cy="12" r="2.2" fill="currentColor" fill-opacity="0"/><path pathLength="1" d="M8.2 6C12 6 14 8.2 16.45 10.45M8.2 18C12 18 14 15.8 16.45 13.55"/><path class="signal" pathLength="1" d="M8.2 6C12 6 14 8.2 16.45 10.45M8.2 18C12 18 14 15.8 16.45 13.55" opacity="0" stroke-width="2.5"/>',duration:1250,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"较小节点依次点亮，信号沿两条实线到达终点"},cf={body:'<path class="agent-check-draw" pathLength="1" d="M5 12l5 5 9-11"/>',duration:1050,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"从左侧起笔，经过折点，向右上方完成勾选"},uf={body:'<g class="bell-body"><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z"/></g><path class="clapper" d="M10 20a2 2 0 0 0 4 0"/>',duration:1200,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"钟身绕顶部摆动，铃舌延迟跟随并收稳"},df={body:'<circle cx="12" cy="12" r="3"/><path class="gear" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',duration:1050,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"中心轴固定，外部齿轮转动并停稳"},pf={body:'<g class="motion-target"><path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/></g>',duration:1150,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"刷新箭头完整转动一圈"},Mf={body:'<g class="motion-target"><circle cx="12" cy="12" r="9" opacity="0.25"/><path d="M21 12a9 9 0 0 1-9 9"/></g>',duration:1150,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"演示单圈；实际加载期间才持续旋转"},gf={body:'<g class="motion-target"><rect x="6" y="6" width="12" height="12" rx="2"/></g>',duration:900,viewBox:"0 0 24 24",filled:!0,strokeWidth:1.2,note:"停止方块收紧一次，再稳定回位"},ff={body:'<g class="motion-target"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></g>',duration:1100,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"纸飞机沿右上方向送出，再回到起点"},hf={body:'<g class="motion-target"><path d="M7 5l12 7-12 7z"/></g>',duration:950,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"播放符号轻轻前移，提示可开始运行"},mf={body:'<circle cx="12" cy="12" r="9"/><path class="motion-target" d="M10 9l5 3-5 3z"/>',duration:950,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"播放符号轻轻前移，提示可开始运行"},yf={body:'<g class="motion-target"><path d="M21 12a8 8 0 0 1-11.3 7.3L4 20l.7-5.7A8 8 0 1 1 21 12z"/></g>',duration:1e3,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"气泡从尾部轻展开一次，提示开启对话"},vf={body:'<path class="left" d="M9.5 3A2.5 2.5 0 0 0 7 5.5v.1A3 3 0 0 0 4.6 10a3 3 0 0 0 .4 5.4A3 3 0 0 0 9.5 20a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 9.5 3z"/><path class="right" d="M14.5 3A2.5 2.5 0 0 1 17 5.5v.1a3 3 0 0 1 2.4 4.4 3 3 0 0 1-.4 5.4 3 3 0 0 1-4.5 4.6 2.5 2.5 0 0 1-2.5-2.5"/>',duration:1200,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"左右脑轮流轻亮，提示思考与技能"},Nf={body:'<rect x="4" y="8" width="16" height="11" rx="2"/><path class="antenna" d="M12 3v5"/><path class="eyes" d="M8 13h.01M16 13h.01"/><path class="mouth" d="M9 17h6"/>',duration:1150,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"天线接收一次信号，眼睛眨动，表情轻回应"},xf={body:'<circle class="head" cx="12" cy="8" r="4"/><path class="body" d="M4 21a8 8 0 0 1 16 0"/>',duration:1050,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"头像轻点头一次，回应用户操作"},bf={body:'<path d="M3 3h8v8H3z"/><path d="M13 3h8v5h-8z"/><path d="M13 12h8v9h-8z"/><path d="M3 13h8v8H3z"/>',duration:565,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"四块面板依次轻抬并复位"},Lf={body:'<path class="logout-door" d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4"/><g class="logout-arrow"><path d="M10 12h10"/><path d="m16 8 4 4-4 4"/></g>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"门框固定，箭头尖与横线对齐，整个箭头向外移出后复位"},jf={body:'<path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 17V9"/><path d="M12 17V7"/><path d="M16 17v-5"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"坐标轴固定，三条柱线从底部依次生长"},Df={body:'<rect x="3.1" y="3.6" width="5" height="16.8" rx="1.6"/><rect x="9.5" y="3.6" width="5" height="16.8" rx="1.6"/><rect x="15.9" y="3.6" width="5" height="16.8" rx="1.6"/>',duration:570,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"三根等宽圆角列依次变淡；没有内部卡片和外框"},wf={body:'<path class="gate-shield" d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path class="gate-bars" d="M9 9v6M15 9v6"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"中性盾牌与闸口，表示人工审核入口"},If={body:'<rect x="5" y="11" width="14" height="10"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',duration:460,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"锁身固定，锁梁轻压后复位"},Tf={body:'<g><circle cx="8" cy="15" r="4"/><path d="M11.5 12.5 21 3M16 8l3 3M18 5l3 3"/></g>',duration:530,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"钥匙小幅转动一次后复位"},zf={body:'<rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01"/><path d="M7 17.5h.01"/>',duration:530,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"双层机架固定，两枚指示灯上下响应"},Af={body:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"文档轮廓固定，右上折角轻翻后复位"},kf={body:'<path class="skill-piece" d="M9 4V3a2 2 0 0 1 4 0v1h5a2 2 0 0 1 2 2v4h-1a2 2 0 0 0 0 4h1v4a2 2 0 0 1-2 2h-4v-1a2 2 0 0 0-4 0v1H6a2 2 0 0 1-2-2v-4H3a2 2 0 0 1 0-4h1V6a2 2 0 0 1 2-2h3Z"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"完整拼图块，轻抬归位以提示能力接入"},Sf={body:'<path d="M9 7V3M15 7V3"/><path d="M8 7h8v4a4 4 0 0 1-8 0z"/><path d="M12 15v6"/>',duration:460,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"插头外壳固定，双插脚向接入方向伸出"},Ef={body:'<path d="M13 2L4 14h6l-1 8 9-12h-6z"/>',duration:470,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"闪电轻亮一次，回到完整轮廓"},Cf={body:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',duration:530,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"镜框与镜柄一起向右上扫描后复位"},Of={body:'<path d="M4 5h16"/><path d="M7 12h10"/><path d="M10 19h4"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"三条筛选线交错轻移后复位"},Uf={body:'<path d="M12 5v14"/><path d="M5 12h14"/>',duration:475,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"两条加号线从中心先后舒展"},Qf={body:'<path d="M5 3h12l4 4v14H3V5z"/><path d="M8 3v6h8V3"/><path d="M8 21v-7h8v7"/>',duration:570,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"存储轮廓固定，上槽轻压、下块响应"},Yf={body:'<circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/>',duration:520,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"三个圆点从上到下依次回应"},Pf={body:'<path d="M6 6l12 12M18 6L6 18"/>',duration:430,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"交叉线轻转一次后复位"},_f={body:'<path d="M12 3l9 16H3z"/><path d="M12 9v5"/><path d="M12 17h.01"/>',duration:490,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"三角框固定，感叹号竖线和点先后提醒"},$f={body:'<path d="M7 4 3 8l4 4"/><path d="M3 8h13a5 5 0 0 1 5 5"/><path d="m17 20 4-4-4-4"/><path d="M21 16H8a5 5 0 0 1-5-5"/>',duration:560,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"两条箭头分别沿自己的方向交接"},Rf={body:'<path d="M12 3v12M7 10l5 5 5-5"/><path d="M4 21h16"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"承接线固定，下载箭头向下轻落"},Wf={body:'<path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z"/><path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z"/>',duration:570,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"主星与副星错峰闪耀一次"},Bf={body:'<circle class="branch-start" cx="12" cy="19" r="2"/><circle class="branch-left" cx="5" cy="5" r="2"/><circle class="branch-right" cx="19" cy="5" r="2"/><path pathLength="1" class="branch-routes" d="M12 17v-5a5 5 0 0 0-5-5H5M12 12a5 5 0 0 1 5-5h2"/>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"流程分支：一个起点分流到两个终点，与 Git 仓库图形区分"},Hf={body:'<circle cx="12" cy="12" r="9"/><path pathLength="1" d="M8 12l3 3 5-6"/>',duration:530,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"外圈固定，勾从左边起笔到右上收笔"},Vf={body:'<circle cx="12" cy="12" r="4"/>',duration:430,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"圆点轻亮一次后恢复静态"},Gf={body:'<g><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M14 6l4 4"/></g>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"铅笔向笔尖方向轻写一次"},Ff={body:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',duration:530,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"眼眶固定，瞳孔向右查看后回中"},Zf={body:'<path pathLength="1" d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path pathLength="1" d="M14 3v5h5"/><path pathLength="1" d="M9 13h6"/><path pathLength="1" d="M9 17h6"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"纸张与折角固定，两行文字从左向右依次画出"},Kf={body:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"钟框固定，表针小幅前探后复位"},Jf={body:'<path d="M4 12h12M11 7l5 5-5 5"/><path d="M20 4v16"/>',duration:480,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"边界固定，箭头轻推向右侧入口"},qf={body:'<path d="M8 12h12M15 7l5 5-5 5"/><path d="M4 4v16"/>',duration:480,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"边界固定，箭头轻推离左侧出口"},Xf={body:'<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/>',duration:540,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"瓶体轻摇一次；当前原图没有液面与气泡"},eh={body:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"日轮固定，光线轻转后复位"},th={body:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"月牙轻转后回到静态位置"},nh={body:'<path d="M9 3H3v6"/><path d="M3 3l7 7"/><path d="M15 21h6v-6"/><path d="M21 21l-7-7"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"两端角向各自对角方向展开后复位"},oh={body:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',duration:560,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"旗杆固定，旗面小幅摆动一次"},ih={body:'<g><path d="M3 3v5h5"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/></g><path d="M12 7v5l4 2"/>',duration:560,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"回溯环与表针轻回摆后复位"},sh={body:'<path d="M5 4C2 9 2 15 5 20"/><path d="M19 4c3 5 3 11 0 16"/><path d="M9 9l6 6M15 9l-6 6"/>',duration:480,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"变量符号固定，两侧括号轻展后收回"},ah={body:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/>',duration:480,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"门框固定，离开箭头向右滑动一次"},rh={body:'<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="9" r="2.5"/><path pathLength="1" d="M18 11.5a6 6 0 0 1-6 6H9M6 8.5v7"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"提交节点固定，连线沿已有路径描绘一次"},lh={body:'<path d="M21 11l-8.5 8.5a5 5 0 0 1-7-7L14 4a3.5 3.5 0 0 1 5 5l-8.5 8.5a2 2 0 0 1-3-3L15 6"/>',duration:520,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"回形针以上端为轴轻挂摆一次"},ch={body:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"屏幕外框轻亮；原图没有独立屏内扫描线"},uh={body:'<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 18h2"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"机身固定，屏幕底部短线轻响应"},dh={body:'<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>',duration:540,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"三条菜单线依次向右轻移并归位"},ph={body:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',duration:560,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"外圆与赤道固定，经线轻移模拟浏览"},Mh={body:'<circle cx="12" cy="12" r="7"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M2 12h4"/><path d="M18 12h4"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"中心圆固定，四向准星轻聚拢后复位"},gh={body:'<g class="tag-shape"><path d="M4 4h7l9 9a1.4 1.4 0 0 1 0 2l-5 5a1.4 1.4 0 0 1-2 0l-9-9V4Z"/><circle cx="7.5" cy="7.5" r="1.2" stroke-width="1.4"/></g>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"标准斜角吊牌，保留穿孔；围绕孔位轻摆一次后回位"},fh={body:'<g transform="scale(0.0234375)"><path fill="currentColor" stroke="none" d="M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2-73.2 0-146.4 24.1-206.5 72.3a33.23 33.23 0 0 0-2.7 49.4l181.7 181.7-215.4 215.2a15.8 15.8 0 0 0-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4 181.7 181.7c6.5 6.5 15 9.7 23.5 9.7 9.7 0 19.3-4.2 25.9-12.4 56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8zM666.2 549.3l-24.5 24.5 3.8 34.4a259.92 259.92 0 0 1-30.4 153.9L262 408.8c12.9-7.1 26.3-13.1 40.3-17.9 27.2-9.4 55.7-14.1 84.7-14.1 9.6 0 19.3.5 28.9 1.6l34.4 3.8 24.5-24.5L608.5 224 800 415.5 666.2 549.3z"/></g>',duration:480,viewBox:"0 0 24 24",filled:!0,strokeWidth:0,note:"图钉沿针尖方向轻落后复位"},hh={body:'<path d="m12 3.6 2.5 5.1 5.6.8-4 3.9.9 5.6L12 16.3 7 19l.9-5.6-4-3.9 5.6-.8z"/>',duration:520,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"星形轻转一次，始终保持空心"},mh={body:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.2 2.4c-.8.3-1.2.8-1.2 1.6V14"/><circle cx="12" cy="17" r="1"/>',duration:520,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"外圈固定，问号轻探、底点延后回应"},yh={body:'<path d="m12 2 10 6-10 6L2 8Z"/><path class="token-layer-one" d="m3 13 9 5 9-5"/><path class="token-layer-two" d="m3 17 9 5 9-5"/><path d="M10 6h4m-2 0v4"/>',duration:750,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"Token 叠片计量，各层依次轻抬归位"},vh={body:`<g class="motion">
          <rect class="p0" x="3.4" y="5.2" width="17.2" height="15.2" rx="2.6" />
          <path class="p1" d="M8.2 3v4.2M15.8 3v4.2M3.4 10.2h17.2"  pathLength="100"/>
          <circle class="p2" cx="12" cy="15.2" r="2.6" />
        </g>`,duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.6,note:"日历外框固定，仅日期圆点轻亮一次。"},Nh={body:'<path d="M20 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"/><path class="queue-rows" d="M7 7h9M7 11h5M7 15h3"/><circle cx="17" cy="16" r="5"/><path class="queue-hand" d="M17 13v3l2 1"/>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"排队列表与等待时钟，时针前探一次"},xh={body:'<g class="motion"><path class="p0" d="M9 14 4 9l5-5"  pathLength="100"/><path class="p1" d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"  pathLength="100"/></g>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.8,note:"hover：回溯曲线描过，箭头向左提示一次。禁用时静止。"},bh={body:'<g class="motion"><path class="p0" d="m15 14 5-5-5-5"  pathLength="100"/><path class="p1" d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13"  pathLength="100"/></g>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.8,note:"hover：前进曲线描过，箭头向右提示一次。禁用时静止。"},Lh={body:'<g class="motion"><rect class="p0" x="3" y="4" width="6" height="5" rx="1.5" /><rect class="p1" x="15" y="4" width="6" height="5" rx="1.5" /><rect class="p2" x="15" y="15" width="6" height="5" rx="1.5" /><path class="p3" d="M9 6.5h6M12 6.5v11h3"  pathLength="100"/></g>',duration:700,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.8,note:"hover：三节点各自归位，连线保持稳定，表达整理布局。"},jh={body:'<rect x="2.5" y="3.5" width="19" height="17" rx="2"/><path d="M7 8h6v7h4M7 8v7h4"/><rect x="5" y="6" width="4" height="4" rx=".6" fill="currentColor" stroke="none"/><rect x="9" y="13" width="4" height="4" rx=".6" fill="currentColor" stroke="none"/><rect x="15" y="13" width="4" height="4" rx=".6" fill="currentColor" stroke="none"/><rect class="minimap-viewport" x="9" y="10.5" width="11" height="8.5" rx="1" stroke-width="1.2"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"小流程图与视口框，视口短移后归位"},Dh={body:`<g class="motion">
            <circle class="p0" cx="9" cy="6" r="1.6" /><circle class="p1" cx="15" cy="6" r="1.6" />
            <circle class="p2" cx="9" cy="12" r="1.6" /><circle class="p3" cx="15" cy="12" r="1.6" />
            <circle class="p4" cx="9" cy="18" r="1.6" /><circle class="p5" cx="15" cy="18" r="1.6" />
          </g>`,duration:550,viewBox:"0 0 24 24",filled:!0,strokeWidth:0,note:"hover：两列握点微分开再归位，实际拖动中保持稳定。"},wh={body:`<g class="motion">
                    <path class="p0" fill="currentColor" fill-rule="nonzero" d="M17.535 12.514l-.696-1.796c0-.021.01-.375.01-.558C16.848 7.088 15.446 4 12 4c-3.446 0-4.848 3.088-4.848 6.16 0 .183.009.537.01.558l-.696 1.796c-.19.515-.38 1.05-.517 1.51-.657 2.189-.444 3.095-.282 3.115.348.043 1.354-1.648 1.354-1.648 0 .98.488 2.258 1.542 3.18-.394.127-.878.32-1.188.557-.28.214-.245.431-.194.52.22.385 3.79.245 4.82.125 1.03.12 4.599.26 4.82-.126.05-.088.085-.305-.194-.519-.311-.237-.795-.43-1.19-.556 1.055-.923 1.542-2.202 1.542-3.181 0 0 1.007 1.691 1.355 1.648.162-.02.378-.928-.283-3.116-.14-.463-.325-.994-.516-1.509z" pathLength="100"/>
                </g>`,duration:650,viewBox:"0 0 24 24",filled:!0,strokeWidth:0,note:"品牌几何保持原样；仅在所属配置按钮 hover 时给外层背景/边框反馈。"},Ih={body:'<g class="motion"><circle class="p0" cx="12" cy="12" r="10"/><line class="p1" x1="12" y1="16" x2="12" y2="12"/><line class="p2" x1="12" y1="8" x2="12.01" y2="8"/></g>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:2,note:"hover：外环固定，信息标点轻亮一次。"},Th={body:'<g class="motion"><path class="p0" d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" pathLength="100"/><line class="p1" x1="12" y1="9" x2="12" y2="13"/><line class="p2" x1="12" y1="17" x2="12.01" y2="17"/></g>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:2,note:"错误横幅首次出现时强调一次，历史错误保持静止。"},zh={body:'<g class="motion"><rect class="p0" x="4" y="4" width="14" height="14" rx="2"/><path class="p1" d="m7 20 10.5-.1A2.5 2.5 0 0 0 20 17.4V8" pathLength="100"/></g>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.8,note:"hover：前后两层短暂分离再归位。"},Ah={body:'<path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8M13 3v5h5V8l-5-5M8 11h3M8 15h2"/><g class="review-lens"><circle cx="16.5" cy="14.5" r="3.5"/><path d="m19 17 3 3"/></g>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"评审文档与放大镜，审阅镜头轻扫一次"},kh={body:'<rect x="4" y="3.5" width="16" height="17" rx="2"/><path d="M8 8h8"/><path class="form-fields" d="M8 12h8M8 16h5"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"表单轮廓固定，输入字段轻亮一次"},Sh={body:'<g class="team-front"><circle cx="9" cy="8" r="3"/><path d="M3 20v-1a6 6 0 0 1 12 0v1"/></g><g class="team-back"><path d="M16 5a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5v1"/></g>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"双人团队图形，后方成员轻移归位"},Eh={body:'<path class="integration-left" d="M9 4H6a3 3 0 0 0-3 3v2h5v6H3v2a3 3 0 0 0 3 3h3"/><path class="integration-right" d="M15 4h3a3 3 0 0 1 3 3v2h-5v6h5v2a3 3 0 0 1-3 3h-3"/><path d="M10 12h4"/>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"系统集成，两侧连接口靠近后归位"},Ch={body:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle class="image-sun" cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"图片边框固定，光点轻亮一次"},Oh={body:'<circle cx="12" cy="12" r="8.5"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"通用圆形状态"},Uh={body:'<path d="m5 5 10 7-10 7z"/><path d="M19 5v14"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"跳过当前步骤"},Qh={copy:of,trash:sf,folder:af,terminal:rf,"stage-terminal":{body:'<rect x="3.2" y="4.2" width="17.6" height="15.6" rx="2"/><path class="prompt" d="M7.1 9.3 10.3 12 7.1 14.7"/><path class="cursor" d="M12.2 14.8h4.6"/>',duration:1100,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"外框保持固定，提示符前移，光标闪烁两次"},workflow:lf,check:cf,"check-draw":{body:'<path pathLength="1" class="agent-check-draw" d="M7.6 12.4l3.6 3.6L18.2 7.4"/>',duration:1050,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"去掉起笔圆点，仅保留从左侧经过折点、向右上方画出的连续勾"},bell:uf,settings:df,refresh:pf,spinner:Mf,"arc-spinner":{body:'<g class="motion-target"><g class="agent-arc-spin"><path d="M12 3A9 9 0 1 1 3 12"/><circle class="agent-arc-node" cx="3" cy="12" r="1.65" fill="currentColor" stroke="none"/></g></g>',duration:1150,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"演示单圈；实际加载期间才持续旋转"},"breath-dot":{body:'<circle class="agent-heart-ring" cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" stroke-width="1.15"/><circle class="agent-heart-core" cx="12" cy="12" r="3" fill="currentColor" stroke="none"/>',duration:1150,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"核心轻呼吸，外环扩散一轮后复位"},"bubble-idle":{body:'<path d="M20.5 11.5a7.5 7.5 0 0 1-10.4 6.9L4.2 19.6l.6-5.2A7.5 7.5 0 1 1 20.5 11.5z"/><circle class="agent-bdot-a" cx="9.2" cy="11.4" r="1.05" fill="currentColor" stroke="none"/><circle class="agent-bdot-b" cx="12" cy="11.4" r="1.05" fill="currentColor" stroke="none"/><circle class="agent-bdot-c" cx="14.8" cy="11.4" r="1.05" fill="currentColor" stroke="none"/>',duration:1300,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"对话框固定，三个思考点依次轻提一次"},"user-hold":{body:'<circle cx="10.2" cy="8" r="3.2"/><path d="M3.8 20a6.4 6.4 0 0 1 12.8 0"/><circle class="agent-user-dot" cx="18.6" cy="11.5" r="1.55" fill="currentColor" stroke="none"/>',duration:1100,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"人物保持静止，待确认提示点呼吸一次"},"arrow-flow":{body:'<g class="agent-wake"><circle cx="4.6" cy="12" r="1.35" fill="currentColor" stroke="none"/><path d="M6.4 12h11.2"/><path d="M14.2 6.6l6.2 5.4-6.2 5.4"/></g>',duration:1e3,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"起点轻亮，箭头向前传递一次"},"run-live":{body:'<g class="agent-wake"><circle cx="12" cy="12" r="8.2"/><path d="M10.4 8.9l4.6 3.1-4.6 3.1z"/></g>',duration:1050,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"运行环轻亮，播放符号向前唤醒一次"},"history-back":{body:'<path class="return-arrow" d="M4.2 4.2v4.6h4.6"/><path d="M4.3 13.2A8.2 8.2 0 1 0 7.2 6.1L4.2 8.8"/><circle cx="12" cy="12" r="1.45" fill="currentColor" stroke="none"/><path class="clock-hand" d="M12 8.2v3.2l3.2 1.6"/>',duration:1100,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"时针短暂回拨，返回箭头轻牵引后复位"},"play-continue":{body:'<g class="agent-wake"><circle cx="5.4" cy="12" r="1.4" fill="currentColor" stroke="none"/><path d="M9.2 6.4l10.4 5.6-10.4 5.6z"/></g>',duration:950,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"起点激活，继续符号前移后回位"},"quiet-dot":{body:'<g class="agent-quiet"><circle cx="12" cy="12" r="5.2" opacity="0.45"/><circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none" opacity="0.55"/></g>',duration:1150,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"低强度呼吸一次，保持静默状态"},"warn-pulse":{body:'<g class="agent-wake"><path d="M12 3.2L21.2 19.6H2.8z"/><path d="M12 9.2v5.2"/><circle cx="12" cy="17.4" r="0.85" fill="currentColor" stroke="none"/></g>',duration:1100,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"边框强调一次，感叹号轻压回弹"},"chat-send":{body:'<g class="motion-target"><path d="M12 18V6m-6 6 6-6 6 6"/></g>',duration:1050,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"发送箭头向上送出，再回到待发送位置"},"chat-stop":{body:'<g class="motion-target"><rect x="3.75" y="3.75" width="16.5" height="16.5" rx="3"/></g>',duration:900,viewBox:"0 0 24 24",filled:!0,strokeWidth:0,note:"停止方块收紧一次，再稳定回位"},stop:gf,send:ff,play:hf,runs:mf,chat:yf,brain:vf,robot:Nf,user:xf,"stage-ide":{body:'<rect x="3.2" y="3.6" width="17.6" height="16.8" rx="2"/><path pathLength="1" d="M3.2 8h17.6"/><path pathLength="1" d="M8.2 8v12.4"/><path class="code-a" pathLength="1" d="M11 12.2h6"/><path class="code-b" pathLength="1" d="M11 15.4h4"/>',duration:1050,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"编辑器框架固定，两行代码依次输入"},"stage-browser":{body:'<circle cx="12" cy="12" r="8"/><path d="M4 12h16"/><ellipse cx="12" cy="12" rx="3.3" ry="8"/>',duration:1200,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"地球经线转过一面，外圈和纬线保持稳定"},"stage-log":{body:'<circle cx="6.1" cy="6.6" r="1.15" fill="currentColor" stroke="none"/><circle cx="6.1" cy="12" r="1.15" fill="currentColor" stroke="none"/><circle cx="6.1" cy="17.4" r="1.15" fill="currentColor" stroke="none"/><path class="row-a" pathLength="1" d="M9.3 6.6h8.6"/><path class="row-b" pathLength="1" d="M9.3 12h6.4"/><path class="row-c" pathLength="1" d="M9.3 17.4h8.6"/>',duration:1200,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"三行日志从上到下逐条写入"},"stage-resources":{body:'<rect x="3.2" y="3.2" width="7" height="7" rx="1.6"/><rect x="13.8" y="3.2" width="7" height="7" rx="1.6"/><rect x="3.2" y="13.8" width="7" height="7" rx="1.6"/><rect x="13.8" y="13.8" width="7" height="7" rx="1.6"/>',duration:1250,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"四个资源格依次轻亮并复位"},dashboard:bf,"home-start":{body:'<path d="m3.5 10 7.3-6a1.9 1.9 0 0 1 2.4 0l7.3 6"/><path d="M5.5 8.4v10.1A1.5 1.5 0 0 0 7 20h3v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h3a1.5 1.5 0 0 0 1.5-1.5V8.4"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"屋顶固定，入口轮廓轻亮；门洞尚未拆层"},"new-request":{body:'<path d="M12.5 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6.5"/><path d="m15.5 4.5 4 4M10 10l7.3-7.3a1.4 1.4 0 0 1 2 0l2 2a1.4 1.4 0 0 1 0 2L14 14l-5 1 1-5Z"/>',duration:520,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"纸张固定，铅笔沿笔尖方向轻写一次"},"pending-chat":{body:'<path d="M8 5h8a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4H9l-5 3V9a4 4 0 0 1 4-4Z"/><path d="M8.5 10h7"/><path d="M8.5 13.5h4.5"/>',duration:470,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"气泡固定，两行文字先后回应"},"pending-review":{body:'<rect x="5" y="3.5" width="14" height="17" rx="3"/><path pathLength="1" d="M9 8h6"/><path pathLength="1" d="M9 12h6"/><path pathLength="1" d="M9 16h3"/>',duration:530,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"纸张固定，三行内容自上而下描绘"},"pending-approval":{body:'<circle cx="12" cy="12" r="8.5"/><path class="approval-hand" d="M12 7v5l3 2"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"等待审批，使用中性时钟而非通过勾"},"more-horizontal":{body:'<circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>',duration:490,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"三个点依次轻抬，保持横向排列"},logout:Lf,chart:jf,board:Df,gate:wf,lock:If,key:Tf,server:zf,artifact:Af,skills:kf,connector:Sf,trigger:Ef,search:Cf,filter:Of,plus:Uf,save:Qf,more:Yf,close:Pf,"chat-artifacts":{body:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M14 4v16"/>',duration:470,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"外框固定，分隔线轻拉展示分栏"},alert:_f,"chevron-down":{body:'<path d="M6 9l6 6 6-6"/>',duration:440,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"箭头沿指向轻移一次后复位"},"chevron-left":{body:'<path d="M15 6l-6 6 6 6"/>',duration:440,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"箭头沿指向轻移一次后复位"},"chevron-right":{body:'<path d="M9 6l6 6-6 6"/>',duration:440,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"箭头沿指向轻移一次后复位"},"arrow-left":{body:'<path d="M19 12H5M11 6l-6 6 6 6"/>',duration:440,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"箭头沿指向轻移一次后复位"},"arrow-right":{body:'<path d="M5 12h14M13 6l6 6-6 6"/>',duration:440,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"箭头沿指向轻移一次后复位"},"arrow-up":{body:'<path d="M12 19V5M5 12l7-7 7 7"/>',duration:440,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"箭头沿指向轻移一次后复位"},"chevrons-down":{body:'<path d="M6 5l6 6 6-6"/><path d="M6 11l6 6 6-6"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"双箭头从上到下依次推进"},swap:$f,download:Rf,sparkles:Wf,branch:Bf,ci:Hf,dot:Vf,edit:Gf,eye:Ff,"eye-off":{body:'<path pathLength="1" d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path pathLength="1" d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><path pathLength="1" d="M14.12 14.12a3 3 0 1 1-4.24-4.24"/><path pathLength="1" d="M1 1l22 22"/>',duration:520,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"眼眶固定，斜线从左上到右下描绘"},doc:Zf,clock:Kf,input:Jf,output:qf,flask:Xf,sun:eh,moon:th,expand:nh,flag:oh,history:ih,variable:sh,leave:ah,git:rh,paperclip:lh,monitor:ch,mobile:uh,menu:dh,"panel-left":{body:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="m16 15-3-3 3-3"/>',duration:470,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"外框固定，分隔线和箭头向收起方向轻移"},globe:ph,crosshair:Mh,tag:gh,pin:fh,star:hh,"star-filled":{body:'<path d="m12 3.6 2.5 5.1 5.6.8-4 3.9.9 5.6L12 16.3 7 19l.9-5.6-4-3.9 5.6-.8z"/>',duration:460,viewBox:"0 0 24 24",filled:!0,strokeWidth:1.2,note:"星标轻亮舒展一次，保持实心状态"},help:mh,token:yh,calendar:vh,"metric-running":{body:`<g class="motion">
          <circle class="p0" cx="12" cy="12" r="8.2" />
          <path class="p1" d="M10.3 8.7l5.4 3.3-5.4 3.3z"  pathLength="100"/>
        </g>`,duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.6,note:"hover：内侧播放符向右短移，圆环固定。真实执行态才允许持续动效。"},queue:Nh,undo:xh,redo:bh,"zoom-out":{body:'<g class="motion"><path class="p0" d="M5 12h14"  pathLength="100"/></g>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.8,note:"hover：减号轻收再复原，缩放数值由实际点击控制。"},layout:Lh,minimap:jh,"priority-bolt":{body:`<g class="motion">
        <path class="p0" d="m11.7 2.7-6 8.2h4l-1.4 6.4 6-8.2h-4l1.4-6.4Z" fill="currentColor"  pathLength="100"/>
      </g>`,duration:550,viewBox:"0 0 20 20",filled:!0,strokeWidth:0,note:"hover：能量符单次亮起归位。与触发器闪电原图不同，为实心变体。"},"priority-low":{body:`<g class="motion">
            <rect class="p0" x="3" y="11" width="3" height="5" rx="1.1" fill="currentColor"  opacity="1"/>
            <rect class="p1" x="8.5" y="7.5" width="3" height="8.5" rx="1.1" fill="currentColor"  opacity="0.2"/>
            <rect class="p2" x="14" y="4" width="3" height="12" rx="1.1" fill="currentColor"  opacity="0.2"/>
          </g>`,duration:800,viewBox:"0 0 20 20",filled:!0,strokeWidth:0,note:"面板进入或选择改变：三根柱从左到右升起一次，保留当前档位明暗。"},"priority-medium":{body:`<g class="motion">
            <rect class="p0" x="3" y="11" width="3" height="5" rx="1.1" fill="currentColor"  opacity="1"/>
            <rect class="p1" x="8.5" y="7.5" width="3" height="8.5" rx="1.1" fill="currentColor"  opacity="1"/>
            <rect class="p2" x="14" y="4" width="3" height="12" rx="1.1" fill="currentColor"  opacity="0.2"/>
          </g>`,duration:800,viewBox:"0 0 20 20",filled:!0,strokeWidth:0,note:"面板进入或选择改变：三根柱从左到右升起一次，保留当前档位明暗。"},"priority-high":{body:`<g class="motion">
            <rect class="p0" x="3" y="11" width="3" height="5" rx="1.1" fill="currentColor"  opacity="1"/>
            <rect class="p1" x="8.5" y="7.5" width="3" height="8.5" rx="1.1" fill="currentColor"  opacity="1"/>
            <rect class="p2" x="14" y="4" width="3" height="12" rx="1.1" fill="currentColor"  opacity="1"/>
          </g>`,duration:800,viewBox:"0 0 20 20",filled:!0,strokeWidth:0,note:"面板进入或选择改变：三根柱从左到右升起一次，保留当前档位明暗。"},"sort-ascending":{body:'<g class="motion"><path class="p0" fill="currentColor" d="M5 2 L9 7 H1 Z"  pathLength="100"/></g>',duration:550,viewBox:"0 0 10 10",filled:!0,strokeWidth:0,note:"排序按钮 hover：轻微上移；实际升序状态持续保持明亮。"},"sort-descending":{body:'<g class="motion"><path class="p0" fill="currentColor" d="M5 8 L1 3 H9 Z"  pathLength="100"/></g>',duration:550,viewBox:"0 0 10 10",filled:!0,strokeWidth:0,note:"排序按钮 hover：轻微下移；实际降序状态持续保持明亮。"},"preview-expand":{body:`<g class="motion">
                          <path class="p0" d="M6.25 2.75H2.75V6.25"  pathLength="100"/>
                          <path class="p1" d="M2.75 2.75 6.5 6.5"  pathLength="100"/>
                          <path class="p2" d="M9.75 13.25h3.5V9.75"  pathLength="100"/>
                          <path class="p3" d="M13.25 13.25 9.5 9.5"  pathLength="100"/>
                        </g>`,duration:650,viewBox:"0 0 16 16",filled:!1,strokeWidth:1.5,note:"卡片 hover：左上、右下角分离一次，表示展开预览。"},grip:Dh,"confirmation-check":{body:`<g class="motion">
        
        <path class="p0"
          d="M4.2 12.2 L9.3 17.3 L19.8 6.4"
         pathLength="100"/>
      </g>`,duration:620,viewBox:"0 0 24 24",filled:!1,strokeWidth:2.4,note:"真实确认成功进入时播放一次：左侧起笔 → 折点 → 右上收笔。预览 hover 可重播。"},"image-off":{body:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5-4 4M5 21l4-4"/><path class="image-slash" pathLength="1" d="M3 3l18 18"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"不可用图片，完整对角遮断线描画一次"},"inbox-boot":{body:`<g class="motion">
    <circle class="p0"
      cx="7"
      cy="7"
      r="5"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-dasharray="18 14"
    />
  </g>`,duration:1e3,viewBox:"0 0 14 14",filled:!1,strokeWidth:1.7,note:"真实沙箱启动期间可持续旋转；此预览只演示一圈。"},"inbox-reply":{body:`<g class="motion">
    <circle class="p0" cx="7" cy="7" r="2.5" fill="currentColor" />
  </g>`,duration:1200,viewBox:"0 0 14 14",filled:!0,strokeWidth:0,note:"真实正在回复期间可持续呼吸；此预览只演示一轮。"},qq:wh,info:Ih,warning:Th,"preview-target":{body:'<g class="motion"><circle class="p0" cx="12" cy="12" r="7.5"/><circle class="p1" cx="12" cy="12" r="2"/><path class="p2" d="M12 2v3M12 19v3M2 12h3M19 12h3" pathLength="100"/></g>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.8,note:"hover：四向刻度描入、中心定位一次；取点状态保持强调色。"},layers:zh,"preview-chat":{body:'<g class="motion"><path class="p0" d="M19.5 4.5h-15A2.5 2.5 0 0 0 2 7v8.5A2.5 2.5 0 0 0 4.5 18H7l3 3 3-3h6.5a2.5 2.5 0 0 0 2.5-2.5V7a2.5 2.5 0 0 0-2.5-2.5Z" pathLength="100"/><path class="p1" d="M7 9h10" pathLength="100"/><path class="p2" d="M7 13h6" pathLength="100"/></g>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.8,note:"hover：框体固定，两行文字依次画出一次。"},"drawer-collapse":{body:'<g class="motion"><rect class="p0" x="1.5" y="2.5" width="13" height="11" rx="1.5" stroke="currentColor"/><path class="p1" d="M6 2.5v11M9.2 6.2 7.4 8l1.8 1.8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" pathLength="100"/></g>',duration:650,viewBox:"0 0 16 16",filled:!1,strokeWidth:1.8,note:"hover：框体固定，收起箭头向左短移一次。"},review:Ah,form:kh,users:Sh,"bell-settings":{body:'<g class="bell-body"><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z"/></g><path d="M10 20a2 2 0 0 0 4 0"/><path class="bell-adjust" d="M10 8h4M12 6v4"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"通知设置，钟身固定，调节标记转动一次"},integration:Eh,image:Ch,circle:Oh,skip:Uh,"server-unavailable":{body:'<rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01M7 17.5h.01M3 3l18 18"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"沙箱或服务暂不可用"},"workflow-empty":{body:'<rect x="3" y="8" width="6" height="8" rx="2"/><rect x="15" y="8" width="6" height="8" rx="2"/><path d="M9 12h6M12 9v6"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"尚未创建工作流"}},Ro=Qh,nl=Object.keys(Ro),Yh=nl.length;function Ph(e){return Object.hasOwn(Ro,e)?Ro[e]:Ro.dot}const _h=new Set(["check","check-draw","spinner","arc-spinner","breath-dot","bubble-idle","user-hold","arrow-flow","run-live","history-back","play-continue","quiet-dot","warn-pulse","chat-stop","stop","pending-chat","pending-review","pending-approval","alert","ci","dot","clock","metric-running","queue","confirmation-check","inbox-boot","inbox-reply","info","warning","circle","skip","server-unavailable","workflow-empty","gate","priority-bolt","priority-low","priority-medium","priority-high"]),ol={copy:"Copy",trash:"Delete",folder:"Folder",terminal:"Terminal","stage-terminal":"Terminal workspace",workflow:"Workflow",check:"Check","check-draw":"Draw check",bell:"Notifications",settings:"Settings",refresh:"Refresh",spinner:"Loading","arc-spinner":"Arc spinner","breath-dot":"Breathing dot","bubble-idle":"Thinking bubble","user-hold":"Waiting for input","arrow-flow":"Flow transition","run-live":"Running","history-back":"History back","play-continue":"Continue","quiet-dot":"Idle","warn-pulse":"Warning pulse","chat-send":"Send message","chat-stop":"Stop response",stop:"Stop",send:"Send",play:"Play",runs:"Run history",chat:"Chat",brain:"Thinking",robot:"Agent",user:"User","stage-ide":"Code editor","stage-browser":"Browser","stage-log":"Logs","stage-resources":"Resources",dashboard:"All components","home-start":"Start creating","new-request":"New task","pending-chat":"Awaiting reply","pending-review":"Awaiting review","pending-approval":"Awaiting approval","more-horizontal":"More actions",logout:"Log out",chart:"Chart",board:"Board",gate:"Approval gate",lock:"Lock",key:"Key",server:"Server",artifact:"Artifact",skills:"Skills",connector:"Connector",trigger:"Trigger",search:"Search",filter:"Filter",plus:"Add",save:"Save",more:"More",close:"Close","chat-artifacts":"Conversation artifacts",alert:"Alert","chevron-down":"Expand down","chevron-left":"Collapse left","chevron-right":"Expand right","arrow-left":"Arrow left","arrow-right":"Arrow right","arrow-up":"Arrow up","chevrons-down":"Collapse down",swap:"Switch",download:"Download",sparkles:"Sparkles",branch:"Branch",ci:"Continuous integration",dot:"Dot",edit:"Edit",eye:"Visible","eye-off":"Hidden",doc:"Document",clock:"Clock",input:"Input",output:"Output",flask:"Experiment",sun:"Light mode",moon:"Dark mode",expand:"Expand",flag:"Flag",history:"History",variable:"Variable",leave:"Leave",git:"Version control",paperclip:"Attachment",monitor:"Desktop",mobile:"Mobile",menu:"Menu","panel-left":"Sidebar",globe:"Web",crosshair:"Target",tag:"Tag",pin:"Pin",star:"Star","star-filled":"Starred",help:"Help",token:"Usage",calendar:"Calendar","metric-running":"Running metric",queue:"Queue",undo:"Undo",redo:"Redo","zoom-out":"Zoom out",layout:"Layout",minimap:"Minimap","priority-bolt":"Urgent priority","priority-low":"Low priority","priority-medium":"Medium priority","priority-high":"High priority","sort-ascending":"Sort ascending","sort-descending":"Sort descending","preview-expand":"Expand preview",grip:"Drag handle","confirmation-check":"Confirmed","image-off":"Image unavailable","inbox-boot":"Starting","inbox-reply":"New reply",qq:"QQ",info:"Information",warning:"Warning","preview-target":"Preview target",layers:"Layers","preview-chat":"Chat preview","drawer-collapse":"Collapse drawer",review:"Review",form:"Form",users:"Team","bell-settings":"Notification settings",integration:"Integration",image:"Image",circle:"Circle outline",skip:"Skip","server-unavailable":"Server unavailable","workflow-empty":"Empty workflow"};function wa(e){return ol[e]||"Icon"}const $h=nl.map(e=>({name:e,label:ol[e],category:_h.has(e)?"status":"interface",animated:e!=="qq"}));function Rh(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function Wh(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}async function il(e){if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(e);return}const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();const n=document.execCommand("copy");if(t.remove(),!n)throw new Error("Copy is unavailable")}const rs=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches,Ri=new WeakMap,ls={beforeMount(e){e.dataset.revealed=rs()?"true":"false"},mounted(e){if(rs()||!("IntersectionObserver"in window)){e.dataset.revealed="true";return}const t=new IntersectionObserver(n=>{n.some(o=>o.isIntersecting)&&(e.dataset.revealed="true",t.disconnect())},{threshold:.06,rootMargin:"0px 0px 45px 0px"});t.observe(e),Ri.set(e,t)},beforeUnmount(e){var t;(t=Ri.get(e))==null||t.disconnect(),Ri.delete(e)}};function Bh(e){const t=e,{width:n,height:o}=t.getBoundingClientRect();t.style.width=`${n}px`,t.style.height=`${o}px`,t.style.left=`${t.offsetLeft}px`,t.style.top=`${t.offsetTop}px`,t.inert=!0}const Hh=["data-icon","data-icon-motion","width","height","viewBox","fill","stroke","stroke-width","innerHTML"],Vh='[data-icon-motion-host], button, a[href], summary, [role="button"], [role="tab"], [tabindex]:not([tabindex="-1"])',_e=qe({__name:"AnimatedIcon",props:{name:{},size:{default:20},motionKey:{},busy:{type:Boolean,default:!1},interactive:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},setup(e,{expose:t}){const n=e,o=V(null),i=we(()=>Ph(n.name)),s=V("idle"),a=V(!1);let r=null,c,u,d=!1,M=0,x=!1;const h=()=>{var S;return n.disabled||!!((S=o.value)!=null&&S.closest('[disabled], [aria-disabled="true"], [inert]'))};function O(){M++,u&&clearTimeout(u),u=void 0,s.value=n.busy&&!a.value&&!h()?"busy":"idle"}async function Q(){var _;if(!d||a.value||h()||n.busy)return;u&&clearTimeout(u);const S=++M;s.value="idle",await ke(),!(!d||S!==M||a.value||h()||n.busy)&&((_=o.value)==null||_.getBoundingClientRect(),s.value="once",u=setTimeout(()=>{S===M&&O()},i.value.duration+360))}function K(S){S.pointerType!=="touch"&&(x=!0,n.interactive&&Q())}function X(){x=!1}function Z(S){!n.interactive||x||S.target instanceof Element&&S.target.matches(":focus-visible")&&Q()}function ne(){a.value=(c==null?void 0:c.matches)??!1,O()}return zt(()=>{var S;d=!0,c=window.matchMedia("(prefers-reduced-motion: reduce)"),a.value=c.matches,c.addEventListener("change",ne),r=((S=o.value)==null?void 0:S.closest(Vh))||o.value,r==null||r.addEventListener("pointerenter",K),r==null||r.addEventListener("pointerleave",X),r==null||r.addEventListener("focusin",Z),O()}),ze(()=>[n.name,n.busy,n.disabled],O),ze(()=>n.motionKey,(S,_)=>{S!==_&&S!==void 0&&Q()}),Yt(()=>{d=!1,O(),r==null||r.removeEventListener("pointerenter",K),r==null||r.removeEventListener("pointerleave",X),r==null||r.removeEventListener("focusin",Z),c==null||c.removeEventListener("change",ne)}),t({play:Q,reset:O,element:o}),(S,_)=>(m(),z("svg",{ref_key:"element",ref:o,class:"agent-icon","aria-hidden":"true",focusable:"false","data-icon":e.name,"data-icon-motion":s.value,width:e.size,height:e.size,viewBox:i.value.viewBox,fill:i.value.filled?"currentColor":"none",stroke:i.value.strokeWidth?"currentColor":"none","stroke-width":i.value.strokeWidth||void 0,"stroke-linecap":"round","stroke-linejoin":"round",innerHTML:i.value.body},null,8,Hh))}}),ut=22e3,sl="cubic-bezier(.22,.75,.16,1)",Gh=e=>e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),Ee=(e,t)=>({...t,offset:e/ut,easing:sl});function Fh(e,t){const n=e.parentElement,o=new Map;let i=!1,s=!1,a=ut,r=window.innerWidth<=700,c=null,u,d;function M(f){f.original.forEach(({value:R,priority:F},U)=>{R?f.node.style.setProperty(U,R,F):f.node.style.removeProperty(U)})}function x(f){o.forEach(R=>{var F;(F=R.animation)==null||F.cancel(),R.animation=void 0,f&&M(R)})}function h(f,R,F){var le;const U=o.get(f);if((U==null?void 0:U.node)===R||(U&&((le=U.animation)==null||le.cancel(),M(U),o.delete(f)),!R))return;const ee=[...new Set(F.flatMap(ae=>Object.keys(ae).filter(Me=>!["offset","easing","composite"].includes(Me)).map(Gh)))],pe=new Map(ee.map(ae=>[ae,{value:R.style.getPropertyValue(ae),priority:R.style.getPropertyPriority(ae)}])),ge=R.animate(F,{duration:ut,fill:"both"});ge.pause(),ge.currentTime=a,o.set(f,{node:R,properties:ee,original:pe,animation:ge})}function O(f){let R=0,F=0;for(let U=f;U&&U!==e;U=U.offsetParent)R+=U.offsetLeft,F+=U.offsetTop;for(let U=f.parentElement;U&&U!==e;U=U.parentElement)R-=U.scrollLeft,F-=U.scrollTop;return{x:R,y:F,width:f.offsetWidth,height:f.offsetHeight}}function Q(){const f=e.offsetWidth,R=e.offsetHeight,F=n.clientWidth,U=n.clientHeight,ee=u??{x:f-264,y:60,width:244,height:47},pe=Math.min(r?1.45:2.15,(F-(r?36:100))/ee.width,(U-100)/ee.height),ge=new DOMMatrix().translate(F/2-(F-f)/2-pe*(ee.x+ee.width/2),U*.48-(U-R)/2-pe*(ee.y+ee.height/2)).scale(pe).toString(),le="none";return[Ee(0,{transform:ge,opacity:0}),Ee(300,{transform:ge,opacity:1}),Ee(1350,{transform:ge,opacity:1}),Ee(2400,{transform:le,opacity:1}),Ee(7400,{transform:le,opacity:1}),Ee(8500,{transform:"none",opacity:1}),Ee(ut,{transform:"none",opacity:1})]}function K(f){return[Ee(0,{opacity:0,filter:"blur(0px)"}),Ee(1500,{opacity:0,filter:"blur(0px)"}),Ee(2400,{opacity:1,filter:"blur(0px)"}),Ee(4200,{opacity:1,filter:"blur(0px)"}),Ee(5300,{opacity:f,filter:"blur(3px)"}),Ee(7400,{opacity:f,filter:"blur(3px)"}),Ee(8500,{opacity:1,filter:"blur(0px)"}),Ee(ut,{opacity:1,filter:"blur(0px)"})]}function X(){var oe,A,G;const f=e.querySelector('[data-message-id$="-sample-user"] .user-bubble');if(f&&a<1350){const ie=O(f);(f!==c||!u||ie.x!==u.x||ie.y!==u.y||ie.width!==u.width||ie.height!==u.height)&&(c=f,u=ie,d=Q(),(G=(A=(oe=o.get("camera"))==null?void 0:oe.animation)==null?void 0:A.effect)==null||G.setKeyframes(d))}d??(d=Q()),h("camera",e,d);const R=e.querySelector(".home-chat-window");if(R&&!o.has("window")){const ie=getComputedStyle(R);h("window",R,[Ee(0,{borderColor:"transparent",boxShadow:"0 0 0 0 transparent"}),Ee(1450,{borderColor:"transparent",boxShadow:"0 0 0 0 transparent"}),Ee(2400,{borderColor:ie.borderTopColor,boxShadow:ie.boxShadow}),Ee(11900,{borderColor:ie.borderTopColor,boxShadow:ie.boxShadow}),Ee(13100,{borderColor:"transparent",boxShadow:"0 0 0 0 transparent"}),Ee(ut,{borderColor:"transparent",boxShadow:"0 0 0 0 transparent"})])}h("bar",e.querySelector(".home-chat-window-bar"),K(.35)),h("composer",e.querySelector(".conversation-bottom"),K(.27));const F=e.querySelector('[data-message-id$="-sample-user"]');h("user",F,[Ee(0,{opacity:1,filter:"blur(0px)"}),Ee(4200,{opacity:1,filter:"blur(0px)"}),Ee(5300,{opacity:.32,filter:"blur(2px)"}),Ee(7400,{opacity:.32,filter:"blur(2px)"}),Ee(8500,{opacity:1,filter:"blur(0px)"}),Ee(ut,{opacity:1,filter:"blur(0px)"})]),h("question-text",(f==null?void 0:f.querySelector(".conversation-prose"))??null,[Ee(0,{clipPath:"inset(0 100% 0 0)"}),Ee(180,{clipPath:"inset(0 100% 0 0)"}),Ee(850,{clipPath:"inset(0 0% 0 0)"}),Ee(ut,{clipPath:"inset(0 0% 0 0)"})]);const U=e.querySelector('[data-message-id$="-sample-assistant"]');h("answer",U,[Ee(0,{opacity:1,filter:"blur(0px)"}),Ee(ut,{opacity:1,filter:"blur(0px)"})]);const ee=n.clientWidth,pe=window.innerWidth<=900,ge=Math.min(760,ee-(r?16:0)),le=pe?Math.min(760,ee-16):440,ae={width:`${ge}px`,marginRight:`${(ee-ge)/2}px`,opacity:1,visibility:"visible"},Me={width:`${le}px`,marginRight:`${pe?(ee-le)/2:ee-le}px`,opacity:pe?0:1,visibility:pe?"hidden":"visible"};h("workspace-window",R,[Ee(0,ae),Ee(11900,ae),Ee(13100,Me),Ee(ut,Me)]),h("workspace-preview",e.querySelector(".home-workspace-preview"),[Ee(0,{opacity:0,transform:"translateX(32px)",visibility:"hidden"}),Ee(11899,{opacity:0,transform:"translateX(32px)",visibility:"hidden"}),Ee(11900,{opacity:0,transform:"translateX(32px)",visibility:"visible"}),Ee(13100,{opacity:1,transform:"none",visibility:"visible"}),Ee(ut,{opacity:1,transform:"none",visibility:"visible"})]),o.forEach((ie,ue)=>{var je;ie.node.isConnected||((je=ie.animation)==null||je.cancel(),M(ie),o.delete(ue))})}function Z(f){if(a=Math.min(ut,Math.max(0,f)),!i){if(t()){j();return}s&&(x(!0),o.clear(),s=!1),e.dataset.cameraScene=a<1350?"question-closeup":a<2400?"reveal":a<4200?"process":a<5600?"focus":a<7400?"answer":a<8500?"return":a<11900?"conversation":a<13100?"open-preview":"preview",X(),o.forEach(R=>{R.animation&&(R.animation.currentTime=a)}),e.dataset.cameraTime=`${Math.round(a)}`,e.dataset.cameraState=a===ut?"complete":"tracking"}}function ne(){return[...o.values()].filter(f=>f.node.isConnected).map(f=>{const R=getComputedStyle(f.node);return{layer:f,styles:Object.fromEntries(f.properties.map(F=>[F,R.getPropertyValue(F)]))}})}function S(){const f=ne();x(!1),f.forEach(({layer:R,styles:F})=>Object.entries(F).forEach(([U,ee])=>R.node.style.setProperty(U,ee))),i=!0,s=!1,e.dataset.cameraState="held"}function _(){if(!i)return;const f=ne();if(x(!0),o.forEach(F=>F.node.getAnimations().forEach(U=>{if(U instanceof CSSTransition)try{U.finish()}catch{U.cancel()}})),i=!1,t()){j();return}s=!0,e.dataset.cameraState="returning";let R=f.length;if(!R){j();return}f.forEach(({layer:F,styles:U})=>{const ee=getComputedStyle(F.node),pe=Object.fromEntries(F.properties.map(ge=>[ge,ee.getPropertyValue(ge)]));F.animation=F.node.animate([U,pe],{duration:380,easing:sl}),F.animation.onfinish=()=>{--R===0&&(o.clear(),s=!1,e.dataset.cameraState="idle")}})}function j(){x(!0),o.clear(),i=!1,s=!1,d=void 0,c=null,u=void 0,e.dataset.cameraTime=`${Math.round(a)}`,e.dataset.cameraState="idle"}function b(){j(),Z(0)}function E(){const f=a,R=i||s;j(),r=window.innerWidth<=700,R||Z(f)}return{seek:Z,hold:S,release:_,reset:j,replay:b,resize:E,destroy:j}}const Zh=["data-demo-state"],Kh={key:0,class:"chat-demo-controls"},Jh={class:"chat-demo-status","aria-live":"polite"},Ia="Check the typography on the homepage.",Wi="Check the hierarchy, type sizes, and contrast.",Ta=`Use three levels: headings, body text, and supporting details.

Keep the body readable, then refine the space between headings and paragraphs.`,qh=qe({__name:"ChatConversationDemo",props:{controls:{type:Boolean,default:!0},workspace:{type:Boolean,default:!1}},emits:["state-change","timeline","open-preview","preview-step"],setup(e,{expose:t,emit:n}){const o=e,i=n,s=V(),a=V(),r=V("ready"),c=V(!1),u=V(""),d=V("Claude Sonnet 4.6"),M=["Claude Sonnet 4.6","GPT-5.4","Gemini 3.1 Pro"],x=`chat-demo-${Dn().replace(/:/g,"")}`,h=`${x}-sample-user`,O=`${x}-sample-assistant`,Q=`${x}-sample-followup`,K=`${x}-sample-build-user`,X=`${x}-sample-build`,Z=`${x}-sample-inspect-user`,ne=`${x}-sample-inspect`,S=()=>o.workspace?ut:9e3;function _(re=Ta){return[{kind:"thought",id:"thought",text:Wi},{kind:"tool",id:"read-page",title:"Read page styles",status:"success",input:"src/styles.css",output:"Read the heading, body, and supporting text styles."},{kind:"message",id:"response",text:re}]}function j(){const re=[{id:h,role:"user",text:Ia},{id:O,role:"assistant",parts:_()},{id:Q,role:"user",text:"Keep body text at 15px and supporting text at 12px or above."}];return o.workspace?[...re,{id:K,role:"user",text:"Build a task panel with filters and collapsible groups."},{id:X,role:"assistant",parts:[{kind:"thought",id:"compose",text:"Combine Sliding Tabs and Grouped Task List, keeping their interactions."},{kind:"tool",id:"build-demo",title:"Prepare interactive preview",status:"success",output:"demo.vue"},{kind:"message",id:"demo-ready",text:"The task panel is ready to explore."}],actions:[{id:"open-task-demo",label:"Open preview",kind:"preview"}]},{id:Z,role:"user",text:"Show running tasks, then expand the history."},{id:ne,role:"assistant",text:"Filter tasks, expand groups, or select a task to update its status."}]:re}const b=V(j()),E=V([]),f=V(0),R=we(()=>[...E.value.slice(0,f.value),...b.value,...E.value.slice(f.value)]),F=we(()=>({ready:"",playing:"Playing",paused:"Paused",complete:"Demo complete",stopped:"Stopped"})[r.value]),U=new Set,ee=new Set;let pe,ge,le,ae=!1,Me=!1,oe=!1,A=!1,G=0,ie=0,ue=!1,je=0,Ie=0,De=0,Qe=0,Pe;ze(r,re=>i("state-change",re),{immediate:!0,flush:"sync"});function Ge(){var re,xe;return!A&&!document.hidden&&!!((re=s.value)!=null&&re.isConnected)&&!((xe=s.value)!=null&&xe.closest('[inert], [aria-hidden="true"]'))}function ot(){D(),G++,U.forEach(re=>clearTimeout(re.timer)),U.clear()}function p(){return Math.min(S(),Qe+(Pe===void 0?0:performance.now()-Pe))}function D(){Qe=p(),Pe=void 0,cancelAnimationFrame(De),De=0,i("timeline",Qe)}function W(re=!1){cancelAnimationFrame(De),re&&(Qe=0),Pe=performance.now(),i("timeline",Qe);const xe=()=>{if(A||r.value!=="playing"){De=0;return}i("timeline",p()),De=requestAnimationFrame(xe)};De=requestAnimationFrame(xe)}function J(){cancelAnimationFrame(je),cancelAnimationFrame(Ie),je=0,Ie=0}function I(re){b.value=b.value.map(xe=>{var ft;return xe.streaming?{...xe,streaming:!1,interrupted:re,parts:re?(ft=xe.parts)==null?void 0:ft.map(nt=>nt.kind==="tool"&&(nt.status==="running"||nt.status==="pending")?{...nt,status:void 0,summary:nt.summary??"Stopped"}:nt):xe.parts}:xe})}function w(){Me=!0,oe=!0,ot(),J(),ue=!1,I(!0),(r.value==="playing"||r.value==="paused"||r.value==="ready")&&(r.value="stopped")}function L(){Me=!0,ot(),J(),ue=!1,b.value=j(),Qe=S(),i("timeline",Qe),r.value="complete"}function g(re){re.dueAt=performance.now()+re.remaining,re.timer=setTimeout(()=>{if(U.delete(re),!(re.version!==G||A||r.value!=="playing")){if(!Ge()||!ae||le!=null&&le.matches){le!=null&&le.matches?L():w();return}re.callback()}},re.remaining)}function C(re,xe,ft){const nt={callback:re,remaining:xe,dueAt:0,version:ft};U.add(nt),g(nt)}function $(){if(r.value!=="playing")return;D();const re=performance.now();U.forEach(xe=>{clearTimeout(xe.timer),xe.remaining=Math.max(0,xe.dueAt-re),xe.timer=void 0}),r.value="paused"}function de(){r.value!=="paused"||!Ge()||!ae||le!=null&&le.matches||(r.value="playing",W(),U.forEach(g))}function P(re){b.value=b.value.map(xe=>xe.id===O?{...xe,parts:re}:xe)}function v(){if(Me=!0,!Ge())return;if(ot(),J(),ue=!1,c.value=!0,oe=!1,f.value=E.value.length,le!=null&&le.matches){L();return}const re=G;r.value="playing",W(!0),b.value=[],ke(()=>{var at;!A&&re===G&&((at=a.value)==null||at.scrollToBottom())}),C(()=>{b.value=[{id:h,role:"user",text:Ia}]},120,re),C(()=>{b.value=[...b.value,{id:O,role:"assistant",streaming:!0,parts:[]}]},1600,re),C(()=>{P([{kind:"thought",id:"thought",text:Wi}])},2200,re),C(()=>{P([{kind:"thought",id:"thought",text:Wi},{kind:"tool",id:"read-page",title:"Read page styles",status:"running",input:"src/styles.css"}])},3400,re),C(()=>{P(_(""))},4800,re);const xe=Array.from(Ta),ft=4,nt=Math.ceil(xe.length/ft);for(let at=1;at<=nt;at++)C(()=>{P(_(xe.slice(0,at*ft).join("")))},5600+at*(700/nt),re);if(C(()=>{I(!1)},6600,re),o.workspace){const at=wt=>{b.value=[...b.value,wt]};C(()=>{at(j()[2])},7800,re),C(()=>{at(j()[3])},8400,re),C(()=>{at({id:X,role:"assistant",streaming:!0,parts:[{kind:"thought",id:"compose",text:"Combine Sliding Tabs and Grouped Task List, keeping their interactions."},{kind:"tool",id:"build-demo",title:"Prepare interactive preview",status:"running"}]})},9e3,re),C(()=>{b.value=b.value.map(wt=>wt.id===X?j()[4]:wt)},11e3,re),C(()=>{i("preview-step","all"),i("open-preview")},11900,re),C(()=>{at(j()[5])},13600,re),C(()=>{at({id:ne,role:"assistant",streaming:!0,text:"Start with the running tasks."})},14200,re),C(()=>{i("preview-step","running")},14800,re),C(()=>{i("preview-step","all")},16e3,re),C(()=>{i("preview-step","collapse-history")},16900,re),C(()=>{i("preview-step","expand-history")},17900,re),C(()=>{i("preview-step","waiting")},19e3,re),C(()=>{b.value=b.value.map(wt=>wt.id===ne?j()[6]:wt)},19600,re)}C(()=>{o.workspace||(b.value=[...b.value,j()[2]]),D(),Qe=S(),i("timeline",Qe),r.value="complete"},S(),re)}function N(){oe=!0,Me=!0,(r.value==="playing"||r.value==="paused"||ue)&&w()}function T(){oe=!0,Me=!0,!(r.value!=="playing"&&r.value!=="paused")&&(ot(),ue=!0,r.value="stopped")}function B(){!ue||A||(ue=!1,J(),I(!0))}function ce(){!ue||je||Ie||(je=requestAnimationFrame(()=>{je=0,Ie=requestAnimationFrame(()=>{Ie=0,B()})}))}function ve(re){return re.target instanceof Element?re.target:null}function Se(re){const xe=ve(re);xe&&(xe.closest(".conversation-bottom")&&!xe.closest(".stop-action")?N():T())}function Ce(){ue&&ke(B)}function Ye(re){const xe=ve(re);xe!=null&&xe.closest(".stop-action")||(xe!=null&&xe.closest(".conversation-bottom")?N():["ArrowUp","ArrowDown","PageUp","PageDown","Home","End"," ","Enter"].includes(re.key)&&(T(),[" ","Enter"].includes(re.key)||ce()))}function Ze(re){const xe=ve(re);xe!=null&&xe.closest(".conversation-bottom")&&!xe.closest(".stop-action")&&N()}function Lt(){T(),ce()}function it(re){N();const xe=re.files.map(ft=>{const nt=URL.createObjectURL(ft);return ee.add(nt),{id:`${x}-attachment-${++ie}`,name:ft.name,mimeType:ft.type,url:nt}});E.value=[...E.value,{id:`${x}-user-${++ie}`,role:"user",text:re.text,attachments:xe}]}function st(re){N(),u.value=re}function Dt(re){N(),d.value=re}function nn(re){re.actionId==="open-task-demo"&&(N(),i("open-preview"))}function Wt(){document.hidden&&r.value==="playing"&&w()}function wn(){le!=null&&le.matches&&(r.value==="playing"||r.value==="paused"||r.value==="ready"&&!oe)&&L()}return t({play:v,stop:w,pause:$,resume:de}),zt(()=>{le=matchMedia("(prefers-reduced-motion: reduce)"),le.addEventListener("change",wn),document.addEventListener("visibilitychange",Wt),document.addEventListener("pointerup",ce),document.addEventListener("pointercancel",ce),document.addEventListener("keyup",ce),le.matches&&L(),s.value&&"IntersectionObserver"in window?(pe=new IntersectionObserver(re=>{for(const xe of re)ae=xe.isIntersecting&&xe.intersectionRatio>=.35,!ae&&r.value==="playing"?w():ae&&!Me&&!oe&&!(le!=null&&le.matches)&&Ge()&&v()},{threshold:[0,.35]}),pe.observe(s.value.closest(".home-chat-viewport")??s.value)):ae=!0,ge=new MutationObserver(()=>{r.value==="playing"&&!Ge()&&w()});for(let re=s.value??null;re;re=re.parentElement)ge.observe(re,{attributes:!0,attributeFilter:["inert","aria-hidden","style"]})}),Yt(()=>{A=!0,ot(),J(),pe==null||pe.disconnect(),ge==null||ge.disconnect(),le==null||le.removeEventListener("change",wn),document.removeEventListener("visibilitychange",Wt),document.removeEventListener("pointerup",ce),document.removeEventListener("pointercancel",ce),document.removeEventListener("keyup",ce),ee.forEach(re=>URL.revokeObjectURL(re)),ee.clear()}),(re,xe)=>(m(),z("div",{ref_key:"root",ref:s,class:"chat-conversation-demo","data-demo-state":r.value},[l("div",{class:"chat-demo-core",onPointerdownCapture:Se,onFocusinCapture:Ze,onKeydownCapture:Ye,onClick:Ce,onInputCapture:N,onChangeCapture:N,onPasteCapture:N,onCompositionstartCapture:N,onWheelPassive:Lt,onTouchmovePassive:Lt},[H(el,{ref_key:"conversation",ref:a,messages:R.value,"model-value":u.value,model:d.value,models:M,"onUpdate:modelValue":st,"onUpdate:model":Dt,onSend:it,onStop:w,onMessageAction:nn},null,8,["messages","model-value","model"])],32),e.controls?(m(),z("div",Kh,[l("button",{type:"button",class:"chat-demo-play",onClick:v},[H(_e,{name:c.value?"refresh":"play",size:14},null,8,["name"]),l("span",null,te(c.value?"Replay":"Play demo"),1)]),l("span",Jh,te(F.value),1)])):me("",!0)],8,Zh))}}),al=jt(qh,[["__scopeId","data-v-efed5366"]]),Xh=["inert"],em={class:"preview-titlebar"},tm={class:"preview-filename"},nm={class:"preview-filter"},om=["disabled"],im={key:1,class:"preview-selection"},sm={class:"selection-name"},am={class:"selection-status"},rm={key:2,class:"preview-empty"},lm=qe({__name:"WorkspaceDemoPreview",props:{active:{type:Boolean,default:!0}},emits:["close"],setup(e,{expose:t,emit:n}){const o=n,i=V([{id:"running",label:"In progress",icon:"running",items:[{id:"layout",label:"Review homepage layout",status:"running"},{id:"type",label:"Refine typography",status:"waiting"}]},{id:"auto",label:"Automations",icon:"auto",items:[{id:"mobile",label:"Check mobile spacing",status:"running"},{id:"interaction",label:"Complete interaction states",status:"idle"}]},{id:"history",label:"History",icon:"history",items:[{id:"navigation",label:"Organize navigation",status:"completed"},{id:"reference",label:"Collect references",status:"completed"}]}]),s=V("all"),a=V("layout"),r=V(),c=V();let u;const d=we(()=>i.value.flatMap(j=>j.items)),M=we(()=>[{value:"all",label:"All",count:d.value.length},{value:"running",label:"Running",count:d.value.filter(j=>j.status==="running").length},{value:"waiting",label:"Needs input",count:d.value.filter(j=>j.status==="waiting").length},{value:"completed",label:"Completed",count:d.value.filter(j=>j.status==="completed").length}]),x=we(()=>i.value.map(j=>({...j,items:j.items.filter(b=>s.value==="all"||b.status===s.value)}))),h=we(()=>d.value.find(j=>j.id===a.value));ze(x,j=>{var E;const b=j.flatMap(f=>f.items);b.some(f=>f.id===a.value)||(a.value=((E=b[0])==null?void 0:E.id)??"")});const O=V(!1),Q=V(""),K=V();let X=0;async function Z(){var j;O.value=!0,await ke(),(j=K.value)==null||j.focus()}function ne(){const j=Q.value.trim();if(!j)return;const b={id:`custom-${++X}`,label:j,status:"idle"};i.value.find(E=>E.id==="auto").items.unshift(b),s.value="all",a.value=b.id,Q.value="",O.value=!1}function S(j){var R;if(j==="all"||j==="running"||j==="waiting"){s.value=j;return}const b=(R=r.value)==null?void 0:R.$el,E=b==null?void 0:b.querySelector('[data-group-id="history"] > .task-group-heading'),f=j==="expand-history";E&&!E.disabled&&E.getAttribute("aria-expanded")!==String(f)&&E.click()}function _(j){var U;if(j<16e3){u=void 0;return}if(j<16200||j>16800)return;const b=c.value,E=(U=r.value)==null?void 0:U.$el,f=E==null?void 0:E.querySelector('[data-group-id="history"] > .task-group-heading');if(!(b!=null&&b.clientHeight)||!f)return;if(!u){const ee=Math.max(0,b.scrollHeight-b.clientHeight),pe=b.scrollTop+f.getBoundingClientRect().top-b.getBoundingClientRect().top-80;u={start:b.scrollTop,target:Math.max(0,Math.min(ee,pe))}}const R=Math.max(0,Math.min(1,(j-16200)/600)),F=R*R*(3-2*R);b.scrollTop=u.start+(u.target-u.start)*F}return t({showcaseStep:S,showcaseTick:_}),(j,b)=>et((m(),z("section",{class:"workspace-demo-preview",inert:!e.active||void 0,"aria-label":"Task panel preview"},[l("header",em,[l("button",{class:"preview-return",type:"button",onClick:b[0]||(b[0]=E=>o("close"))},[H(q(Zr),{size:15,"aria-hidden":"true"}),b[8]||(b[8]=Te("Back to chat",-1))]),l("span",tm,[H(q(md),{size:15,"aria-hidden":"true"}),b[9]||(b[9]=Te("Tasks",-1))]),b[10]||(b[10]=l("span",{class:"preview-label"},"Preview",-1)),l("button",{class:"preview-close",type:"button","aria-label":"Close preview",title:"Close preview",onClick:b[1]||(b[1]=E=>o("close"))},[H(q(Pn),{size:16,"aria-hidden":"true"})])]),b[13]||(b[13]=l("div",{class:"preview-addressbar"},[l("div",{class:"preview-address","aria-label":"Preview page"},[l("span",null,"Demo"),l("span",{class:"address-divider","aria-hidden":"true"},"/"),l("span",null,"Tasks")])],-1)),l("div",{ref_key:"previewContent",ref:c,class:"preview-content"},[l("div",nm,[H(Ts,{modelValue:s.value,"onUpdate:modelValue":b[2]||(b[2]=E=>s.value=E),items:M.value,label:"Filter preview tasks"},null,8,["modelValue","items"])]),O.value?(m(),z("form",{key:0,class:"preview-create",onSubmit:Ot(ne,["prevent"]),onKeydown:b[5]||(b[5]=uo(Ot(E=>O.value=!1,["stop"]),["esc"]))},[et(l("input",{ref_key:"nameInput",ref:K,"onUpdate:modelValue":b[3]||(b[3]=E=>Q.value=E),"aria-label":"Task name",placeholder:"Task name",maxlength:"80"},null,512),[[xi,Q.value]]),l("button",{type:"submit",disabled:!Q.value.trim()},"Add",8,om),l("button",{type:"button",class:"cancel-create","aria-label":"Cancel new task",onClick:b[4]||(b[4]=E=>O.value=!1)},[H(q(Pn),{size:15,"aria-hidden":"true"})])],32)):me("",!0),H(tl,{ref_key:"taskList",ref:r,modelValue:a.value,"onUpdate:modelValue":b[6]||(b[6]=E=>a.value=E),groups:x.value,onCreate:Z},null,8,["modelValue","groups"]),h.value?(m(),z("div",im,[l("span",sm,te(h.value.label),1),l("label",am,[b[12]||(b[12]=l("span",null,"Status",-1)),et(l("select",{"onUpdate:modelValue":b[7]||(b[7]=E=>h.value.status=E),"aria-label":"Task status"},[...b[11]||(b[11]=[l("option",{value:"idle"},"Ready",-1),l("option",{value:"running"},"Running",-1),l("option",{value:"waiting"},"Needs input",-1),l("option",{value:"completed"},"Completed",-1)])],512),[[qu,h.value.status]])])])):(m(),z("p",rm,"No tasks"))],512)],8,Xh)),[[St,e.active]])}}),cm=jt(lm,[["__scopeId","data-v-f8822a91"]]);function um(e,t,n,o){const i=Math.max(0,e),s=Math.max(0,t),a=Math.max(n,i-n),r=Math.max(o,s-o);return Math.hypot(a,r)*2}function rl(e=window.matchMedia){return e("(hover: hover) and (pointer: fine)").matches}const dm=350,za="hover-ink",ll="hover-ink-host",bi="is-hover-ink",Li="is-leave-ink",_n="is-ink-suppressed",It=new WeakMap;function pm(e){let t=e.querySelector(`:scope > .${za}`);return t||(t=document.createElement("span"),t.className=za,t.setAttribute("aria-hidden","true"),e.insertBefore(t,e.firstChild)),t}function Wo(e,t){return!!((t==null?void 0:t.value)===!1||t!=null&&t.value&&typeof t.value=="object"&&"enabled"in t.value&&t.value.enabled===!1||e.disabled||e.hasAttribute("disabled")||e.getAttribute("aria-busy")==="true"||e.getAttribute("aria-disabled")==="true")}function wo(e){const t=It.get(e);(t==null?void 0:t.collapseTimer)!=null&&(clearTimeout(t.collapseTimer),t.collapseTimer=void 0)}function No(e){e.classList.add(ll),pm(e);const t=It.get(e);t&&(e.classList.toggle(bi,t.phase==="hover"),e.classList.toggle(Li,t.phase==="leave"))}function cl(e,t,n){wo(e);const o=e.getBoundingClientRect(),i=t-o.left,s=n-o.top,a=um(o.width,o.height,i,s);e.style.setProperty("--ink-x",`${i}px`),e.style.setProperty("--ink-y",`${s}px`),e.style.setProperty("--ink-d",`${a}px`)}function ul(e){wo(e),e.classList.remove(_n);const t=It.get(e);t&&(t.phase="hover"),No(e)}function dl(e){wo(e);const t=It.get(e);t&&(t.phase="idle"),e.classList.add(_n),e.classList.remove(bi,Li),e.style.setProperty("--ink-d","0px")}function pl(e,t){const n=It.get(e);if(n){if(n.binding=t,Wo(e,t)){n.phase!=="idle"?dl(e):e.classList.add(_n),No(e);return}if(e.classList.remove(_n),n.phase!=="hover"&&n.pointer&&e.matches(":hover")&&rl()){cl(e,n.pointer.x,n.pointer.y),ul(e);return}No(e)}}function Bi(e){const t=It.get(e);t&&(t.phase="leave"),No(e),wo(e);const n=()=>{(t==null?void 0:t.phase)!=="hover"&&(e.style.setProperty("--ink-d","0px"),t&&(t.collapseTimer=void 0))};t?t.collapseTimer=setTimeout(n,dm):n()}function Aa(e,t){if(It.get(e)){pl(e,t);return}const o=r=>{if(!rl()||r.pointerType==="touch")return;const c=It.get(e);c&&(c.pointer={x:r.clientX,y:r.clientY},!Wo(e,c.binding)&&(cl(e,r.clientX,r.clientY),ul(e)))},i=()=>{const r=It.get(e);if(r&&(r.pointer=void 0),!(!r||r.phase==="idle")){if(Wo(e,r.binding)){dl(e);return}Bi(e)}},s=()=>{Bi(e)},a=()=>{document.visibilityState==="hidden"&&Bi(e)};e.addEventListener("pointerenter",o),e.addEventListener("pointerleave",i),e.addEventListener("pointercancel",i),window.addEventListener("blur",s),document.addEventListener("visibilitychange",a),It.set(e,{binding:t,phase:"idle",cleanup:()=>{e.removeEventListener("pointerenter",o),e.removeEventListener("pointerleave",i),e.removeEventListener("pointercancel",i),window.removeEventListener("blur",s),document.removeEventListener("visibilitychange",a),wo(e),e.classList.remove(bi,_n),e.classList.add(Li),e.style.setProperty("--ink-d","0px"),It.delete(e)}}),Wo(e,t)&&e.classList.add(_n),No(e)}const ka={mounted(e,t){Aa(e,t)},updated(e,t){const n=e;It.get(n)?pl(n,t):Aa(n,t)},unmounted(e){var n;const t=e;(n=It.get(t))==null||n.cleanup(),t.classList.remove(ll,bi,Li,_n)}},Mm={class:"home-page"},gm={class:"home-hero"},fm={class:"home-hero-actions"},hm={href:"https://github.com/cocofhu/harness-ui",target:"_blank",rel:"noopener noreferrer",class:"home-button home-primary"},mm={href:"#/components",class:"home-button home-secondary"},ym={class:"hero-smallprint"},vm={href:"#/components"},Nm={href:"#/icons"},xm={href:"https://github.com/cocofhu/harness-ui",target:"_blank",rel:"noopener noreferrer",class:"hero-github"},bm={class:"home-chat-section","aria-label":"Chat conversation preview"},Lm={class:"home-demo-intro"},jm={href:"#/components",class:"home-text-link"},Dm=["data-playback","data-shot"],wm={class:"home-chat-heading"},Im={href:"#/components/chat-conversation"},Tm={class:"home-chat-viewport"},zm=["inert","aria-hidden","onKeydown"],Am={class:"home-chat-window"},km={class:"home-chat-controls"},Sm=["aria-label","title"],Em={viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor","aria-hidden":"true"},Cm={key:0,d:"M7 5h3v14H7zm7 0h3v14h-3z"},Om={key:1,d:"m8 5 11 7-11 7Z"},Um={key:2,d:"M18.7 7A8 8 0 1 0 20 15h-2.1a6 6 0 1 1-.6-6H14v2h7V4h-2v3Z"},Qm={class:"home-icon-section"},Ym={class:"section-editorial"},Pm={href:"#/icons",class:"home-text-link"},_m={class:"home-icon-board"},$m=["aria-label","onClick"],Rm={class:"home-craft-section"},Wm={class:"craft-code-heading"},Bm=["aria-selected","tabindex"],Hm=["aria-selected","tabindex"],Vm=["aria-label"],Gm={class:"craft-panel-stage"},Fm=["inert","aria-hidden"],Zm=["inert","aria-hidden"],Km={class:"section-editorial"},Jm={href:"https://github.com/cocofhu/harness-ui",target:"_blank",rel:"noopener noreferrer",class:"home-text-link"},qm=`<script setup lang="ts">
import SlidingTabs from './ui/SlidingTabs.vue'
<\/script>

<template>
  <SlidingTabs />
</template>`,Xm=qe({__name:"HomePage",emits:["notify"],setup(e,{emit:t}){const n=t,o=V(),i=V(),s=V(!1),a=V(!1),r=V("ready"),c=V(),u=V(),d=V(3),M=V(""),x=V({}),h=V("preview"),O=V(),Q=V(!1),K=V(0),X=V(!1),Z=["folder","copy","robot","workflow","settings","search","terminal","sun","refresh"],ne=$h.filter(L=>L.animated).length;let S=!1,_,j,b,E,f,R=ut,F=!1,U=0,ee=0,pe=0,ge;const le=new Set;function ae(){var L;(L=c.value)==null||L.getAnimations({subtree:!0}).forEach(g=>{g.playState==="running"&&(g.pause(),le.add(g))})}function Me(L=!1,g=!0){var C;!L&&g&&((C=c.value)==null||C.getAnimations({subtree:!0}).forEach($=>{$.playState==="running"&&le.add($)})),le.forEach($=>{if($.playState==="paused"||!L&&$.playState==="running")if(L)$.play();else try{$.finish()}catch{$.cancel()}}),le.clear()}function oe(L){const g=r.value;r.value=L,L==="playing"&&g!=="paused"?(Me(),s.value=!1,F=!1,f==null||f.replay()):L==="playing"?Me(!0):L==="paused"?ae():L==="stopped"?F?(ae(),f==null||f.hold()):(Me(),f==null||f.reset()):L==="complete"&&(f==null||f.seek(ut),window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(a.value=!0,s.value=!0))}function A(){var L;cancelAnimationFrame(pe),ge=((L=c.value)==null?void 0:L.querySelector('[data-message-action="open-task-demo"]'))??(document.activeElement instanceof HTMLElement?document.activeElement:void 0),a.value=!0,s.value=!0}async function G(){var C;cancelAnimationFrame(pe),(C=o.value)==null||C.stop(),s.value=!1,De(),await ke();let L=0;const g=()=>{if(pe=0,S||s.value||document.hidden||!(ge!=null&&ge.isConnected))return;if(++L<3||getComputedStyle(ge).visibility!=="visible"){L<10&&(pe=requestAnimationFrame(g));return}const $=document.activeElement;$ instanceof HTMLElement&&$!==document.body&&!$.closest(".home-workspace-preview")||ge.focus({preventScroll:!0})};pe=requestAnimationFrame(g)}function ie(L){a.value=!0,ke(()=>{var g;return(g=i.value)==null?void 0:g.showcaseStep(L)})}function ue(L){var de,P;if(S)return;R=L,f==null||f.seek(L),r.value==="playing"&&!F&&((de=i.value)==null||de.showcaseTick(L));const g=[0,1900,5500,11900,19600,ut],C=L<1900?0:L<5500?1:L<11900?2:L<19600?3:4;d.value=C;const $=Math.min(1,Math.max(0,(L-g[C])/(g[C+1]-g[C])));(P=u.value)==null||P.querySelectorAll("i").forEach((v,N)=>{v.style.transform=`scaleX(${N<C?1:N===C?$:0})`})}function je(){cancelAnimationFrame(U),cancelAnimationFrame(ee)}function Ie(L){var C;const g=L.target instanceof Element?L.target:null;if(g){if(g.closest(".home-workspace-preview")){if(!L.isTrusted)return;je(),F=!0,f==null||f.hold(),(C=o.value)==null||C.stop(),L.type==="focusin"&&De();return}g.closest(".chat-demo-core")&&(g.closest(".stop-action")&&(L.type==="focusin"||L instanceof KeyboardEvent&&![" ","Enter"].includes(L.key))||L instanceof KeyboardEvent&&!g.closest(".conversation-bottom")&&!["ArrowUp","ArrowDown","PageUp","PageDown","Home","End"," ","Enter"].includes(L.key)||L.type==="focusin"&&!g.closest(".conversation-bottom")||(je(),F=!0,f==null||f.hold(),(L.type==="focusin"||L instanceof KeyboardEvent&&L.key==="Tab")&&De()))}}function De(){F&&(je(),U=requestAnimationFrame(()=>{ee=requestAnimationFrame(()=>{S||!F||r.value==="playing"||r.value==="paused"||(F=!1,Me(!1,!1),f==null||f.release())})}))}function Qe(){f==null||f.resize()}function Pe(){var L,g,C;r.value==="playing"?(L=o.value)==null||L.pause():r.value==="paused"?(g=o.value)==null||g.resume():(C=o.value)==null||C.play()}function Ge(L){clearTimeout(b),x.value[L]=(x.value[L]||0)+1,M.value=L,b=setTimeout(()=>{M.value=""},1200)}function ot(){clearTimeout(b),M.value=""}function p(){document.hidden&&ot()}function D(){E!=null&&E.matches&&(ot(),f==null||f.reset())}async function W(){try{if(await il(qm),S)return;Q.value=!0,K.value++,clearTimeout(_),_=setTimeout(()=>{Q.value=!1},2200),n("notify","Usage example copied")}catch{S||n("notify","Select the code to copy it manually")}}function J(){X.value=!0,clearTimeout(j),j=setTimeout(()=>{X.value=!1},1800)}function I(L){h.value=L}async function w(L){var g,C;["ArrowLeft","ArrowRight","Home","End"].includes(L.key)&&(L.preventDefault(),I(L.key==="Home"?"preview":L.key==="End"||h.value==="preview"?"source":"preview"),await ke(),(C=(g=O.value)==null?void 0:g.querySelector('[aria-selected="true"]'))==null||C.focus())}return zt(()=>{E=window.matchMedia("(prefers-reduced-motion: reduce)"),E.addEventListener("change",D),document.addEventListener("visibilitychange",p),window.addEventListener("resize",Qe),c.value&&(f=Fh(c.value,()=>!!(E!=null&&E.matches)),ue(R))}),Yt(()=>{S=!0,clearTimeout(_),clearTimeout(j),ot(),je(),cancelAnimationFrame(pe),Me(),f==null||f.destroy(),E==null||E.removeEventListener("change",D),document.removeEventListener("visibilitychange",p),window.removeEventListener("resize",Qe)}),(L,g)=>(m(),z("div",Mm,[l("section",gm,[g[12]||(g[12]=l("h1",null,[l("span",{class:"hero-title-reveal"},[l("span",null,"Build better"),l("span",null,"agent interfaces.")])],-1)),g[13]||(g[13]=l("p",{class:"hero-description"},"Harness UI is a collection of Vue components and animated icons. Explore real interactions, then make the source your own.",-1)),l("div",fm,[et((m(),z("a",hm,[g[3]||(g[3]=l("span",null,"Get started",-1)),H(_e,{name:"arrow-right",size:16})])),[[q(ka)]]),et((m(),z("a",mm,[g[4]||(g[4]=l("span",null,"Browse components",-1)),H(_e,{name:"arrow-right",size:16})])),[[q(ka),{enabled:!1}]])]),l("div",ym,[g[6]||(g[6]=l("svg",{viewBox:"0 0 24 24",width:"15",height:"15","aria-hidden":"true"},[l("path",{d:"M2 4h4l6 10 6-10h4L12 22Z",fill:"#42b883"}),l("path",{d:"M6 4h4l2 3 2-3h4L12 14Z",fill:"#35495e"})],-1)),g[7]||(g[7]=Te(" Vue 3 ",-1)),g[8]||(g[8]=l("span",null,"·",-1)),g[9]||(g[9]=Te()),l("a",vm,te(q(vt).length)+" components",1),g[10]||(g[10]=l("span",null,"·",-1)),l("a",Nm,te(q(ne))+" animated icons",1),g[11]||(g[11]=l("span",null,"·",-1)),l("a",xm,[H(q(fd),{size:14,"aria-hidden":"true"}),g[5]||(g[5]=Te("GitHub",-1))])])]),l("section",bm,[l("div",Lm,[g[14]||(g[14]=l("div",null,[l("h2",null,"See it in action."),l("p",null,"Explore chat, task navigation, and an interactive preview in one workspace.")],-1)),l("a",jm,[Te("Browse all "+te(q(vt).length)+" components ",1),H(_e,{name:"arrow-right",size:16})])]),l("div",{class:ye(["home-chat-canvas",{"is-paused":r.value==="paused","has-preview":s.value}]),"data-playback":r.value,"data-shot":["question","process","answer","preview","complete"][d.value]},[l("div",wm,[l("a",Im,[g[15]||(g[15]=Te("View component ",-1)),H(_e,{name:"arrow-right",size:17})])]),l("div",Tm,[l("div",{ref_key:"cameraElement",ref:c,class:"home-chat-camera",onPointerdownCapture:Ie,onPointerup:De,onPointercancel:De,onClick:De,onKeydownCapture:Ie,onKeyup:De,onFocusinCapture:Ie,onWheelCapturePassive:Ie,onWheelPassive:De,onTouchmoveCapturePassive:Ie,onTouchmovePassive:De},[l("aside",{class:"home-workspace-preview",inert:!s.value||void 0,"aria-hidden":!s.value,onKeydown:uo(Ot(G,["stop","prevent"]),["esc"])},[H(cm,{ref_key:"workspaceDemo",ref:i,active:a.value,onClose:G},null,8,["active"])],40,zm),l("div",Am,[g[16]||(g[16]=l("div",{class:"home-chat-window-bar"},[l("span",{class:"window-dots","aria-hidden":"true"},[l("i"),l("i"),l("i")]),l("span",null,"Chat conversation"),l("span",{class:"window-demo-label"},"Demo")],-1)),H(al,{ref_key:"chatDemo",ref:o,workspace:"",controls:!1,onStateChange:oe,onTimeline:ue,onOpenPreview:A,onPreviewStep:ie},null,512)])],544)]),l("div",km,[l("button",{type:"button",class:"home-chat-play","aria-label":"Play chat demo",onClick:g[0]||(g[0]=C=>{var $;return($=o.value)==null?void 0:$.play()})},[H(_e,{name:"refresh",size:14}),g[17]||(g[17]=Te("Replay",-1))]),l("div",{ref_key:"shotProgress",ref:u,class:"home-chat-shots","aria-hidden":"true"},[(m(),z(Ne,null,We(5,C=>l("span",{key:C},[...g[18]||(g[18]=[l("i",null,null,-1)])])),64))],512),l("button",{type:"button",class:"home-chat-pause","aria-label":r.value==="playing"?"Pause chat demo":r.value==="paused"?"Resume chat demo":"Replay chat demo",title:r.value==="playing"?"Pause":r.value==="paused"?"Resume":"Replay",onClick:Pe},[(m(),z("svg",Em,[r.value==="playing"?(m(),z("path",Cm)):r.value==="paused"||r.value==="ready"?(m(),z("path",Om)):(m(),z("path",Um))]))],8,Sm)])],10,Dm)]),et((m(),z("section",Qm,[l("div",Ym,[g[20]||(g[20]=l("h2",null,"Animated icons.",-1)),l("p",null,te(q(ne))+" animated icons for everyday interface details.",1),l("a",Pm,[g[19]||(g[19]=Te("Explore icons ",-1)),H(_e,{name:"arrow-right",size:16})])]),l("div",_m,[(m(),z(Ne,null,We(Z,C=>l("button",{key:C,type:"button",class:ye(["home-icon-cell",{"is-playing":M.value===C}]),"aria-label":`Play ${q(wa)(C)} icon`,onClick:$=>Ge(C)},[H(_e,{name:C,size:42,"motion-key":x.value[C]||0},null,8,["name","motion-key"]),l("span",null,te(q(wa)(C)),1)],10,$m)),64))])])),[[q(ls)]]),et((m(),z("section",Rm,[l("div",{class:ye(["craft-visual",{"is-complete":X.value}])},[l("div",Wm,[l("div",{ref_key:"craftTabs",ref:O,class:"craft-mode-switch",role:"tablist","aria-label":"Component preview and source",onKeydown:w},[l("span",{class:ye(["craft-tab-indicator",{"at-source":h.value==="source"}]),"aria-hidden":"true"},null,2),l("button",{id:"home-preview-tab",type:"button",role:"tab","aria-selected":h.value==="preview",tabindex:h.value==="preview"?0:-1,"aria-controls":"home-preview-panel",onClick:g[1]||(g[1]=C=>I("preview"))},"Preview",8,Bm),l("button",{id:"home-source-tab",type:"button",role:"tab","aria-selected":h.value==="source",tabindex:h.value==="source"?0:-1,"aria-controls":"home-source-panel",onClick:g[2]||(g[2]=C=>I("source"))},"Source",8,Hm)],544),l("button",{type:"button",class:"craft-copy","aria-label":Q.value?"Example copied":"Copy usage example",onClick:W},[H(_e,{name:Q.value?"check-draw":"copy",size:17,"motion-key":K.value},null,8,["name","motion-key"])],8,Vm)]),l("div",Gm,[l("div",{id:"home-preview-panel",class:ye(["craft-live-preview",{"is-current":h.value==="preview"}]),inert:h.value!=="preview","aria-hidden":h.value!=="preview",role:"tabpanel","aria-labelledby":"home-preview-tab"},[H(Ts,{onChange:J})],10,Fm),l("div",{id:"home-source-panel",class:ye(["craft-source-panel",{"is-current":h.value==="source"}]),inert:h.value!=="source","aria-hidden":h.value!=="source",role:"tabpanel","aria-labelledby":"home-source-tab"},[...g[21]||(g[21]=[Yr(`<pre data-v-c42b45e4><code data-v-c42b45e4><span class="syntax-dim" data-v-c42b45e4>&lt;script setup lang=</span><span class="syntax-string" data-v-c42b45e4>&quot;ts&quot;</span><span class="syntax-dim" data-v-c42b45e4>&gt;</span>
<span class="syntax-purple" data-v-c42b45e4>import</span> SlidingTabs <span class="syntax-purple" data-v-c42b45e4>from</span> <span class="syntax-string" data-v-c42b45e4>&#39;./ui/SlidingTabs.vue&#39;</span>
<span class="syntax-dim" data-v-c42b45e4>&lt;/script&gt;</span>

<span class="syntax-dim" data-v-c42b45e4>&lt;template&gt;</span>
  <span class="syntax-purple" data-v-c42b45e4>&lt;SlidingTabs /&gt;</span>
<span class="syntax-dim" data-v-c42b45e4>&lt;/template&gt;</span></code></pre>`,1)])],10,Zm)])],2),l("div",Km,[g[23]||(g[23]=l("h2",null,"Your app. Your code.",-1)),g[24]||(g[24]=l("p",null,"Copy the Vue source, then adapt the details to your product.",-1)),l("a",Jm,[g[22]||(g[22]=Te("Quick start ",-1)),H(_e,{name:"arrow-right",size:16})])])])),[[q(ls)]])]))}}),ey=jt(Xm,[["__scopeId","data-v-c42b45e4"]]),ty={key:0,class:"line-number","aria-hidden":"true"},ny={class:"line-content"},Hi=qe({__name:"CodeViewer",props:{code:{},compact:{type:Boolean}},setup(e){const t=e,n=we(()=>t.code.trim().split(`
`).map(i=>i.split(/(\"[^\"]*\"|'[^']*'|`[^`]*`|\/\/.*$|\b(?:import|from|const|let|function|return|export|default|interface|type|if|await|async|true|false)\b)/g).filter(Boolean)));function o(i){return/^["'`]/.test(i)?"code-string":i.startsWith("//")?"code-comment":/^(import|from|const|let|function|return|export|default|interface|type|if|await|async|true|false)$/.test(i)?"code-keyword":""}return(i,s)=>(m(),z("pre",{class:ye(["source-code",{compact:e.compact}]),"aria-label":"Source code"},[l("code",null,[(m(!0),z(Ne,null,We(n.value,(a,r)=>(m(),z("span",{key:r,class:"code-line"},[e.compact?me("",!0):(m(),z("span",ty,te(r+1),1)),l("span",ny,[(m(!0),z(Ne,null,We(a,(c,u)=>(m(),z("span",{key:u,class:ye(o(c))},te(c),3))),128)),Te(te(a.length?"":" "),1)])]))),128))])],2))}}),oy={key:0,class:"status-examples","aria-label":"Run status examples"},iy={key:2,class:"clarification-preview"},sy={key:3,class:"selector-preview"},ay={class:"selector-example-field"},ry={class:"selector-example-field"},ly=qe({__name:"ComponentPreview",props:{entry:{}},emits:["action"],setup(e){const t=e,n=["running","queued","waiting_human","completed","failed","cancelled"],o=V("in-progress"),i=V("medium"),s=[{value:"backlog",label:"Backlog",hint:"Not started"},{value:"in-progress",label:"In progress",hint:"Active"},{value:"in-review",label:"In review",hint:"Needs review"},{value:"done",label:"Done",hint:"Completed"}],a=[{value:"low",label:"Low priority"},{value:"medium",label:"Medium priority"},{value:"high",label:"High priority"}],r=V(),c=V(!1);function u(){var d;(d=r.value)==null||d.reset(),c.value=!1}return ze(()=>t.entry.slug,()=>{c.value=!1}),(d,M)=>e.entry.slug==="status-badge"?(m(),z("div",oy,[(m(),z(Ne,null,We(n,x=>H(cn(e.entry.component),{key:x,status:x},null,8,["status"])),64))])):e.entry.slug==="chat-conversation"?(m(),Le(al,{key:1})):e.entry.slug==="clarification-card"?(m(),z("div",iy,[(m(),Le(cn(e.entry.component),{ref_key:"clarification",ref:r,"initially-submitted":!1,"read-only":!1,onSubmit:M[0]||(M[0]=x=>c.value=!0),onReset:M[1]||(M[1]=x=>c.value=!1)},null,544)),c.value?(m(),z("button",{key:0,type:"button",class:"clarification-retry",onClick:u},"Try again")):me("",!0)])):e.entry.slug==="selector"?(m(),z("div",sy,[l("div",ay,[M[5]||(M[5]=l("span",{class:"selector-example-label"},"Status",-1)),(m(),Le(cn(e.entry.component),{modelValue:o.value,"onUpdate:modelValue":M[2]||(M[2]=x=>o.value=x),options:s,searchable:"","aria-label":"Task status","search-placeholder":"Search statuses…"},null,8,["modelValue"]))]),l("div",ry,[M[6]||(M[6]=l("span",{class:"selector-example-label"},"Priority",-1)),(m(),Le(cn(e.entry.component),{modelValue:i.value,"onUpdate:modelValue":M[3]||(M[3]=x=>i.value=x),options:a,variant:"ghost",size:"sm","aria-label":"Task priority"},null,8,["modelValue"]))])])):(m(),Le(cn(e.entry.component),{key:4,onCreate:M[4]||(M[4]=x=>d.$emit("action"))},null,32))}}),Sa=jt(ly,[["__scopeId","data-v-8c2ac0c1"]]),cy={class:"site-header"},uy={class:"header-inner"},dy={class:"header-brand"},py=["aria-label","aria-expanded"],My={href:"#/",class:"brand","aria-label":"Harness UI home"},gy={class:"brand-mark"},fy={class:"top-nav","aria-label":"Main navigation"},hy=["aria-current"],my={class:"header-actions"},yy={class:"github-star-label"},vy=["aria-label"],Ny={class:"theme-icon-stack","aria-hidden":"true"},xy=["inert"],by=["inert"],Ly={class:"nav-count"},jy=["aria-current","onClick"],Dy={class:"nav-count"},wy={key:0,class:"quick-components"},Iy=["href"],Ty=["inert"],zy={key:2,id:"components",class:"components-section"},Ay={class:"collection-toolbar"},ky=["aria-pressed","onClick"],Sy={class:"toolbar-actions"},Ey={class:"collection-search"},Cy={class:"sort-wrap"},Oy=["aria-expanded"],Uy={class:"sort-menu"},Qy=["onClick"],Yy={class:"collection-subheading"},Py=["data-component"],_y={class:"card-stage"},$y={class:"stage-topline"},Ry=["aria-label","onClick"],Wy={class:"demo-holder"},By={class:"card-description"},Hy=["href"],Vy={key:1,class:"empty-state"},Gy={key:3,class:"detail-page"},Fy={class:"breadcrumbs","aria-label":"Breadcrumb"},Zy={class:"detail-heading"},Ky={class:"detail-preview"},Jy={class:"preview-toolbar"},qy=["aria-selected","tabindex"],Xy=["aria-selected","tabindex"],e0={class:"preview-controls"},t0={key:0,class:"source-filename"},n0={class:"detail-preview-panels"},o0=["data-component","inert","aria-hidden"],i0={class:"detail-footnote"},s0={class:"component-pagination","aria-label":"Component navigation"},a0=["href"],r0=["href"],l0={key:4,class:"docs-page"},c0={class:"breadcrumbs","aria-label":"Breadcrumb"},u0=["href"],d0={class:"docs-code docs-command"},p0={class:"docs-example"},M0={class:"docs-example-header"},g0=["inert"],f0={class:"footer-inner"},h0={href:"#/",class:"footer-brand"},m0={key:0,class:"toast-message",role:"status"},gn="https://github.com/cocofhu/harness-ui",eo=`<script setup lang="ts">
import ChatComposer from './components/ui/ChatComposer.vue'
<\/script>

<template>
  <ChatComposer @send="console.log" />
</template>`,y0=qe({__name:"App",setup(e){const t=xc(()=>ud(()=>import("./IconGallery-D4iqCc2x.js"),__vite__mapDeps([0,1])));function n(){const P=window.location.hash.replace(/^#\/?/,"")||"";return P.startsWith("components/")&&!vt.some(v=>P===`components/${v.slug}`)?(window.history.replaceState(null,"","#/components"),"components"):P}const o=V(n()),i=V("all"),s=V(""),a=V(Rh("agent-ui-theme","light")==="dark"),r=V(!1),c=V(window.matchMedia("(max-width: 700px)").matches),u=V(),d=V(""),M=V(!1),x=V("recommended"),h=V("preview"),O=V(),Q=V(0),K=V(""),X=V(),Z=V(),ne=V({opacity:"0"}),S=V({opacity:"0"});let _,j,b=a.value,E=!1,f,R=0;const F=V(null),U=we(()=>F.value===null?"Star":new Intl.NumberFormat("en",{notation:F.value>=1e4?"compact":"standard",maximumFractionDigits:1}).format(F.value));let ee,pe,ge=!1;const le={all:"dashboard",conversation:"chat",agent:"robot",workflow:"workflow",navigation:"board"},ae=we(()=>vt.find(P=>o.value===`components/${P.slug}`)),Me=we(()=>o.value==="components"),oe=we(()=>o.value==="icons"),A=we(()=>o.value.startsWith("docs/")),G=we(()=>!Me.value&&!ae.value&&!oe.value&&!A.value),ie=we(()=>Me.value||!!ae.value||A.value),ue=we(()=>{var P;return((P=Qo.find(v=>v.id===i.value))==null?void 0:P.name)||"All components"}),je=we(()=>{const P=s.value.trim().toLowerCase();let v=vt.filter(N=>(i.value==="all"||N.category===i.value)&&nf(N,P));return x.value==="name"&&(v=[...v].sort((N,T)=>N.name.localeCompare(T.name,"en"))),x.value==="new"&&(v=[...v].sort((N,T)=>+!!T.fresh-+!!N.fresh)),v}),Ie=we(()=>vt.findIndex(P=>{var v;return P.slug===((v=ae.value)==null?void 0:v.slug)}));function De(P){K.value=P,clearTimeout(_),_=setTimeout(()=>{K.value=""},2600)}async function Qe(P,v="Copied to clipboard"){try{await il(P),d.value=P,clearTimeout(j),j=setTimeout(()=>{d.value=""},2200),De(v)}catch{De("Select the code and copy it manually")}}function Pe(P=""){window.location.hash=P?`/${P}`:"/",r.value=!1}async function Ge(){r.value=!1,M.value=!1,o.value=n(),h.value="preview",await ke(),ge||window.scrollTo({top:0,behavior:"instant"})}async function ot(P){var v,N;P.isComposing||!["ArrowLeft","ArrowRight","Home","End"].includes(P.key)||(P.preventDefault(),h.value=P.key==="Home"?"preview":P.key==="End"||h.value==="preview"?"source":"preview",await ke(),(N=(v=O.value)==null?void 0:v.querySelector('[aria-selected="true"]'))==null||N.focus())}async function p(){var P;await ke(),L(),ge&&(ge=!1,(P=document.getElementById("components"))==null||P.scrollIntoView({behavior:"smooth",block:"start"}))}function D(P){i.value=P,Me.value||(ge=!0,Pe("components")),r.value=!1}function W(){var P,v;(P=document.getElementById("main-content"))==null||P.focus(),(v=document.getElementById("main-content"))==null||v.scrollIntoView()}function J(P,v){const N=P==null?void 0:P.querySelector(v);if(!P||!N)return{opacity:"0"};const T=P.getBoundingClientRect(),B=N.getBoundingClientRect();return{opacity:"1",width:`${B.width}px`,height:`${B.height}px`,transform:`translate3d(${B.left-T.left+P.scrollLeft}px,${B.top-T.top+P.scrollTop}px,0)`}}function I(){c.value=window.matchMedia("(max-width: 700px)").matches,c.value||(r.value=!1),L()}function w(){var P;r.value&&(r.value=!1,(P=u.value)==null||P.focus())}function L(){ne.value=J(X.value,"button.active"),S.value=J(Z.value,".sidebar-link.selected")}function g(){document.documentElement.classList.remove("harness-theme-motion","harness-theme-capture")}function C(){if(b=!b,rs()||!document.startViewTransition){R++,f==null||f.skipTransition(),f=void 0,E=!1,g(),a.value=b;return}if(E)return;f==null||f.skipTransition();const P=++R;E=!0,document.documentElement.classList.add("harness-theme-motion","harness-theme-capture");try{const v=document.startViewTransition(async()=>{a.value=b,await ke(),a.value!==b&&(a.value=b,await ke()),E=!1});f=v,v.ready.then(()=>{P===R&&document.documentElement.classList.remove("harness-theme-capture")}).catch(()=>{}),v.finished.catch(()=>{}).finally(()=>{P===R&&(f=void 0,E=!1,g())})}catch{a.value=b,E=!1,g()}}async function $(){const P="harness-ui-github-stars";try{const v=JSON.parse(sessionStorage.getItem(P)||"null");if(v&&typeof v.checkedAt=="number"&&Date.now()-v.checkedAt<36e5&&(v.count===null||Number.isInteger(v.count)&&v.count>=0)){F.value=v.count;return}}catch{}ee=new AbortController,pe=setTimeout(()=>ee==null?void 0:ee.abort(),6e3);try{const v=await fetch("https://api.github.com/repos/cocofhu/harness-ui",{headers:{Accept:"application/vnd.github+json"},signal:ee.signal});if(!v.ok)throw new Error("Repository unavailable");const N=await v.json();if(!Number.isInteger(N.stargazers_count)||N.stargazers_count<0)throw new Error("Invalid count");F.value=N.stargazers_count}catch{F.value=null}finally{clearTimeout(pe);try{sessionStorage.setItem(P,JSON.stringify({count:F.value,checkedAt:Date.now()}))}catch{}}}function de(P){P.key==="Escape"&&(w(),M.value=!1)}return ze([ae,Me,oe,A],()=>{var v;const P=((v=ae.value)==null?void 0:v.name)||(Me.value?"Components":oe.value?"Animated icons":A.value?"Documentation":"Vue components and animated icons");document.title=`${P} · Harness UI`},{immediate:!0}),ze(a,P=>{var v;document.documentElement.classList.toggle("dark",P),document.documentElement.style.colorScheme=P?"dark":"light",window.dispatchEvent(new CustomEvent("themechange",{detail:{theme:P?"dark":"light"}})),(v=document.querySelector('meta[name="theme-color"]'))==null||v.setAttribute("content",P?"#0a0a0b":"#ffffff"),Wh("agent-ui-theme",P?"dark":"light")},{immediate:!0}),ze([r,c],([P,v])=>{document.body.style.overflow=P&&v?"hidden":""}),ze([i,o,Me],async()=>{await ke(),L()}),zt(()=>{$(),window.addEventListener("hashchange",Ge),window.addEventListener("keydown",de),window.addEventListener("resize",I),ke(L),document.fonts.ready.then(L)}),fi(()=>{window.removeEventListener("hashchange",Ge),window.removeEventListener("keydown",de),window.removeEventListener("resize",I),clearTimeout(_),clearTimeout(j),clearTimeout(pe),ee==null||ee.abort(),R++,f==null||f.skipTransition(),g(),document.body.style.overflow=""}),(P,v)=>(m(),z(Ne,null,[l("a",{href:"#main-content",class:"skip-link",onClick:Ot(W,["prevent"])},"Skip to main content"),l("header",cy,[l("div",uy,[l("div",dy,[l("button",{type:"button",ref_key:"mobileMenu",ref:u,class:"icon-button mobile-menu","aria-label":r.value?"Close navigation":"Open navigation","aria-expanded":r.value,onClick:v[0]||(v[0]=N=>r.value=!r.value)},[H(_e,{name:"menu",size:20})],8,py),l("a",My,[l("span",gy,[H(_e,{name:"sparkles",size:23,"stroke-width":1.7})]),v[20]||(v[20]=l("span",{class:"brand-name"},[Te("Harness "),l("span",{class:"brand-ui"},"UI")],-1))])]),l("nav",fy,[l("a",{href:"#/",class:ye({active:G.value})},"Home",2),l("a",{href:"#/components",class:ye({active:Me.value||ae.value}),"aria-current":Me.value||ae.value?"page":void 0},"Components",10,hy),l("a",{href:"#/icons",class:ye({active:oe.value})},"Icons",2),l("a",{href:gn,target:"_blank",rel:"noopener noreferrer"},"Docs")]),l("div",my,[l("a",{class:"github-star-pill",href:gn,target:"_blank",rel:"noopener noreferrer","aria-label":"Star Harness UI on GitHub"},[v[21]||(v[21]=Yr('<span class="github-star-icon" aria-hidden="true"><svg class="github-mark" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg><svg class="github-star-mark" width="23" height="23" viewBox="0 0 24 24" fill="none"><path d="m11 4 2.2 4.45 4.91.72-3.55 3.46.84 4.89L11 15.21l-4.4 2.31.84-4.89-3.55-3.46 4.91-.72L11 4Z" fill="currentColor"></path><path class="github-sparkle" d="m20 2 .7 1.8 1.8.7-1.8.7L20 7l-.7-1.8-1.8-.7 1.8-.7Z" fill="currentColor"></path><path class="github-sparkle github-sparkle-late" d="m3 16 .6 1.4L5 18l-1.4.6L3 20l-.6-1.4L1 18l1.4-.6Z" fill="currentColor"></path></svg></span>',1)),l("span",yy,te(U.value),1)]),l("button",{type:"button",class:"icon-button theme-toggle","aria-label":a.value?"Switch to light theme":"Switch to dark theme",onClick:C},[l("span",Ny,[l("span",{class:ye(["theme-icon theme-icon-moon",{"is-active":!a.value}])},[H(_e,{name:"moon",size:16,interactive:!a.value},null,8,["interactive"])],2),l("span",{class:ye(["theme-icon theme-icon-sun",{"is-active":a.value}])},[H(_e,{name:"sun",size:16,interactive:a.value},null,8,["interactive"])],2)])],8,vy)])])]),r.value?(m(),z("button",{key:0,type:"button",class:"nav-backdrop","aria-label":"Close navigation",onClick:w})):me("",!0),ie.value?me("",!0):(m(),z("nav",{key:1,class:ye(["home-mobile-nav",{"mobile-open":r.value}]),inert:!r.value,"aria-label":"Mobile navigation"},[l("a",{href:"#/",onClick:v[1]||(v[1]=N=>r.value=!1)},"Home"),l("a",{href:"#/components",onClick:v[2]||(v[2]=N=>r.value=!1)},"Components"),l("a",{href:"#/icons",onClick:v[3]||(v[3]=N=>r.value=!1)},"Icons"),l("a",{href:gn,target:"_blank",rel:"noopener noreferrer",onClick:v[4]||(v[4]=N=>r.value=!1)},"Documentation")],10,xy)),l("div",{class:ye(["app-layout",{"landing-layout":!ie.value}])},[ie.value?(m(),z("aside",{key:0,class:ye(["sidebar",{"mobile-open":r.value}]),inert:c.value&&!r.value,"aria-label":"Component navigation"},[l("div",{ref_key:"sidebarList",ref:Z,class:"sidebar-scroll"},[l("span",{class:"sidebar-highlight",style:Et(S.value),"aria-hidden":"true"},null,4),v[25]||(v[25]=l("p",{class:"nav-label"},"Getting started",-1)),l("a",{href:gn,target:"_blank",rel:"noopener noreferrer",class:"sidebar-link"},[H(_e,{name:"terminal",size:17}),v[22]||(v[22]=l("span",null,"Quick start",-1))]),l("button",{type:"button",class:"sidebar-link",onClick:v[5]||(v[5]=N=>Pe("icons"))},[H(_e,{name:"sparkles",size:17}),v[23]||(v[23]=l("span",null,"Icons",-1)),l("span",Ly,te(q(Yh)),1)]),v[26]||(v[26]=l("p",{class:"nav-label category-nav-label"},"Components",-1)),(m(!0),z(Ne,null,We(q(Qo),N=>(m(),z("button",{key:N.id,type:"button",class:ye(["sidebar-link",{selected:Me.value&&i.value===N.id}]),"aria-current":Me.value&&i.value===N.id?"page":void 0,onClick:T=>D(N.id)},[H(_e,{name:le[N.id],size:17},null,8,["name"]),l("span",null,te(N.name),1),l("span",Dy,te(N.id==="all"?q(vt).length:q(vt).filter(T=>T.category===N.id).length),1)],10,jy))),128)),ae.value?(m(),z("div",wy,[v[24]||(v[24]=l("p",{class:"nav-label"},"In this category",-1)),(m(!0),z(Ne,null,We(q(vt).filter(N=>N.category===ae.value.category),N=>(m(),z("a",{key:N.slug,href:`#/components/${N.slug}`,class:ye(["sidebar-component",{current:N.slug===ae.value.slug}])},te(N.name),11,Iy))),128))])):me("",!0)],512)],10,by)):me("",!0),l("main",{id:"main-content",class:"main-content",tabindex:"-1",inert:c.value&&r.value},[H(dt,{name:"page",mode:"out-in",appear:"",onAfterEnter:p},{default:Xe(()=>{var N;return[(m(),z("div",{key:Me.value?"gallery":o.value,class:"page-view"},[G.value?(m(),Le(ey,{key:0,onNotify:De})):oe.value?(m(),Le(q(t),{key:1,onNotify:De})):Me.value?(m(),z("section",zy,[v[29]||(v[29]=l("header",{class:"section-heading"},[l("h1",null,"Components")],-1)),l("div",Ay,[l("div",{ref_key:"categoryTabList",ref:X,class:"category-tabs",role:"group","aria-label":"Component categories"},[l("span",{class:"tab-highlight",style:Et(ne.value),"aria-hidden":"true"},null,4),(m(!0),z(Ne,null,We(q(Qo),T=>(m(),z("button",{key:T.id,type:"button",class:ye({active:i.value===T.id}),"aria-pressed":i.value===T.id,onClick:B=>D(T.id)},te(T.id==="all"?"All":T.name),11,ky))),128))],512),l("div",Sy,[l("label",Ey,[H(_e,{name:"search",size:15,interactive:!1}),et(l("input",{"onUpdate:modelValue":v[6]||(v[6]=T=>s.value=T),"aria-label":"Filter components",placeholder:"Search components…"},null,512),[[xi,s.value]]),s.value?(m(),z("button",{key:0,type:"button","aria-label":"Clear search",onClick:v[7]||(v[7]=T=>s.value="")},[H(_e,{name:"close",size:13})])):me("",!0)]),l("div",Cy,[l("button",{type:"button",class:"icon-button sort-button","aria-label":"Sort components","aria-expanded":M.value,onClick:v[8]||(v[8]=T=>M.value=!M.value)},[H(_e,{name:"filter",size:17})],8,Oy),M.value?(m(),z(Ne,{key:0},[l("button",{type:"button",class:"sort-backdrop",tabindex:"-1","aria-label":"Close sort menu",onClick:v[9]||(v[9]=T=>M.value=!1)}),l("div",Uy,[(m(),z(Ne,null,We([{id:"recommended",label:"Featured"},{id:"new",label:"Newest first"},{id:"name",label:"Name"}],T=>l("button",{key:T.id,type:"button",onClick:B=>{x.value=T.id,M.value=!1}},[Te(te(T.label),1),x.value===T.id?(m(),Le(q(rt),{key:0,size:14})):me("",!0)],8,Qy)),64))])],64)):me("",!0)])])]),l("div",Yy,[l("span",null,[Te(te(ue.value)+" ",1),l("small",null,te(je.value.length),1)])]),je.value.length?(m(),Le(Wu,{key:0,tag:"div",name:"collection",class:"component-grid",onBeforeLeave:q(Bh)},{default:Xe(()=>[(m(!0),z(Ne,null,We(je.value,(T,B)=>et((m(),z("article",{key:T.slug,"data-component":T.slug,class:"component-card",style:Et({"--card-index":Math.min(B,5),"--stage-tone":B%3===0?"var(--stage-lilac)":B%3===1?"var(--stage-sand)":"var(--stage-gray)"})},[l("div",_y,[l("div",$y,[l("button",{type:"button",class:"stage-expand icon-button","aria-label":`View ${T.name} details`,onClick:ce=>Pe(`components/${T.slug}`)},[H(q(Xn),{size:16})],8,Ry)]),l("div",Wy,[H(Sa,{entry:T,onAction:v[10]||(v[10]=ce=>De("New task selected"))},null,8,["entry"])])]),l("div",By,[l("a",{href:`#/components/${T.slug}`,class:"card-title-row"},[l("h3",null,te(T.name),1),H(q(Xn),{size:15})],8,Hy)])],12,Py)),[[q(ls)]])),128))]),_:1},8,["onBeforeLeave"])):(m(),z("div",Vy,[H(_e,{name:"search",size:29}),v[28]||(v[28]=l("h3",null,"No components found",-1)),l("button",{type:"button",class:"button secondary",onClick:v[11]||(v[11]=T=>{s.value="",D("all")})},[v[27]||(v[27]=Te(" Browse all components ",-1)),H(_e,{name:"arrow-right",size:15})])]))])):ae.value?(m(),z("div",Gy,[l("nav",Fy,[v[30]||(v[30]=l("a",{href:"#/components"},"Components",-1)),H(q(po),{size:13}),l("button",{type:"button",onClick:v[12]||(v[12]=T=>D(ae.value.category))},te((N=q(Qo).find(T=>T.id===ae.value.category))==null?void 0:N.name),1),H(q(po),{size:13}),l("span",null,te(ae.value.name),1)]),l("div",Zy,[l("h1",null,te(ae.value.name),1),l("p",null,te(ae.value.description),1)]),l("div",Ky,[l("div",Jy,[l("div",{ref_key:"detailTabs",ref:O,class:"preview-tabs",role:"tablist","aria-label":"Component preview and source",onKeydown:ot},[l("button",{id:"component-preview-tab",type:"button",role:"tab","aria-selected":h.value==="preview",tabindex:h.value==="preview"?0:-1,"aria-controls":"component-preview-panel",class:ye({active:h.value==="preview"}),onClick:v[13]||(v[13]=T=>h.value="preview")},[H(_e,{name:"eye",size:15}),v[31]||(v[31]=Te("Preview",-1))],10,qy),l("button",{id:"component-source-tab",type:"button",role:"tab","aria-selected":h.value==="source",tabindex:h.value==="source"?0:-1,"aria-controls":"component-source-panel",class:ye({active:h.value==="source"}),onClick:v[14]||(v[14]=T=>h.value="source")},[H(_e,{name:"stage-ide",size:15}),v[32]||(v[32]=Te("Source ",-1))],10,Xy)],544),l("div",e0,[h.value==="source"?(m(),z("span",t0,te(q(ef)(ae.value))+".vue",1)):me("",!0),h.value==="preview"?(m(),z("button",{key:1,type:"button",class:"icon-button","aria-label":"Replay demo",onClick:v[15]||(v[15]=T=>Q.value++)},[H(_e,{name:"refresh",size:16,"motion-key":Q.value},null,8,["motion-key"])])):me("",!0),l("button",{type:"button",class:"button small secondary",onClick:v[16]||(v[16]=T=>Qe(ae.value.source,"Component source copied"))},[H(_e,{name:d.value===ae.value.source?"check":"copy","motion-key":d.value===ae.value.source?1:void 0,size:14},null,8,["name","motion-key"]),Te(te(d.value===ae.value.source?"Copied":"Copy code"),1)])])]),l("div",n0,[et(l("div",{id:"component-preview-panel",class:"large-demo","data-component":ae.value.slug,role:"tabpanel","aria-labelledby":"component-preview-tab",inert:h.value!=="preview","aria-hidden":h.value!=="preview"},[(m(),Le(Sa,{entry:ae.value,key:`${ae.value.slug}-${Q.value}`,onAction:v[17]||(v[17]=T=>De("New task selected"))},null,8,["entry"]))],8,o0),[[St,h.value==="preview"]]),h.value==="source"?(m(),Le(Hi,{key:0,id:"component-source-panel",code:ae.value.source,role:"tabpanel","aria-labelledby":"component-source-tab"},null,8,["code"])):me("",!0)])]),l("div",i0,[v[34]||(v[34]=l("span",null,[Te("Vue 3 "),l("i",null,"·"),Te(" TypeScript "),l("i",null,"·"),Te(" Standalone source")],-1)),l("a",{href:gn,target:"_blank",rel:"noopener noreferrer"},[v[33]||(v[33]=Te("How to use ",-1)),H(q(Xn),{size:13})])]),l("nav",s0,[q(vt)[Ie.value-1]?(m(),z("a",{key:0,href:`#/components/${q(vt)[Ie.value-1].slug}`},[H(_e,{name:"arrow-left",size:15}),l("span",null,[v[35]||(v[35]=l("small",null,"Previous",-1)),Te(te(q(vt)[Ie.value-1].name),1)])],8,a0)):me("",!0),q(vt)[Ie.value+1]?(m(),z("a",{key:1,href:`#/components/${q(vt)[Ie.value+1].slug}`,class:"next-component"},[l("span",null,[v[36]||(v[36]=l("small",null,"Next",-1)),Te(te(q(vt)[Ie.value+1].name),1)]),H(_e,{name:"arrow-right",size:15})],8,r0)):me("",!0)])])):(m(),z("article",l0,[l("nav",c0,[v[37]||(v[37]=l("a",{href:"#/"},"Harness UI",-1)),H(q(po),{size:13}),v[38]||(v[38]=l("span",null,"Documentation",-1))]),v[48]||(v[48]=l("h1",null,"Documentation",-1)),v[49]||(v[49]=l("p",{class:"docs-lead"},"For Vue 3 and TypeScript.",-1)),l("a",{href:gn,target:"_blank",rel:"noopener noreferrer",class:"inline-link"},[v[39]||(v[39]=Te("View documentation on GitHub ",-1)),H(q(Xn),{size:15})]),l("section",null,[v[42]||(v[42]=l("span",{class:"doc-number"},"01",-1)),l("div",null,[v[41]||(v[41]=l("h2",null,"Copy a component",-1)),l("a",{href:`${gn}/tree/main/src/components/ui`,target:"_blank",rel:"noopener noreferrer",class:"inline-link"},[v[40]||(v[40]=Te("Browse source on GitHub ",-1)),H(q(Xn),{size:15})],8,u0)])]),l("section",null,[v[44]||(v[44]=l("span",{class:"doc-number"},"02",-1)),l("div",null,[v[43]||(v[43]=l("h2",null,"Install dependencies",-1)),l("div",d0,[H(_e,{name:"terminal",size:16,interactive:!1}),H(Hi,{code:"npm install lucide-vue-next",compact:""}),l("button",{type:"button",class:"icon-button","aria-label":"Copy install command",onClick:v[18]||(v[18]=T=>Qe("npm install lucide-vue-next"))},[H(_e,{name:d.value==="npm install lucide-vue-next"?"check":"copy","motion-key":d.value==="npm install lucide-vue-next"?1:void 0,size:15},null,8,["name","motion-key"])])])])]),l("section",null,[v[47]||(v[47]=l("span",{class:"doc-number"},"03",-1)),l("div",null,[v[46]||(v[46]=l("h2",null,"Import and use",-1)),l("div",p0,[l("div",M0,[l("span",null,[H(_e,{name:"doc",size:14,interactive:!1}),v[45]||(v[45]=Te(" App.vue",-1))]),l("button",{type:"button",onClick:v[19]||(v[19]=T=>Qe(eo,"Example copied"))},[H(_e,{name:d.value===eo?"check":"copy","motion-key":d.value===eo?1:void 0,size:14},null,8,["name","motion-key"]),Te(" "+te(d.value===eo?"Copied":"Copy example"),1)])]),H(Hi,{code:eo,compact:""})])])])]))]))]}),_:1})],8,Ty)],2),l("footer",{class:"site-footer",inert:c.value&&r.value},[l("div",f0,[l("a",h0,[H(_e,{name:"sparkles",size:20}),v[50]||(v[50]=l("strong",null,"Harness UI",-1))]),l("nav",{"aria-label":"Footer navigation"},[v[51]||(v[51]=l("a",{href:"#/components"},"Components",-1)),v[52]||(v[52]=l("a",{href:"#/icons"},"Icons",-1)),l("a",{href:gn,target:"_blank",rel:"noopener noreferrer"},"Documentation")]),v[53]||(v[53]=l("span",null,"© 2026 · MIT License",-1))])],8,g0),H(dt,{name:"toast"},{default:Xe(()=>[K.value?(m(),z("div",m0,[l("span",null,[H(q(rt),{size:13})]),Te(te(K.value),1)])):me("",!0)]),_:1})],64))}});let to;function v0(){if(to)return to;const e=new Map,t=o=>{const i=o.target===document?document.scrollingElement:o.target;i instanceof HTMLElement&&(clearTimeout(e.get(i)),i.classList.add("is-scrolling"),e.set(i,setTimeout(()=>{i.classList.remove("is-scrolling"),e.delete(i)},650)))};document.addEventListener("scroll",t,{capture:!0,passive:!0});const n=()=>{document.removeEventListener("scroll",t,!0),e.forEach((o,i)=>{clearTimeout(o),i.classList.remove("is-scrolling")}),e.clear(),to===n&&(to=void 0)};return to=n,n}v0();sd(y0).mount("#app");export{we as A,il as B,Ne as F,dt as T,_e as _,m as a,l as b,z as c,qe as d,$h as e,We as f,ye as g,H as h,Ro as i,et as j,wa as k,me as l,Te as m,ke as n,Yt as o,Le as p,Xe as q,Ph as r,Ot as s,te as t,q as u,xi as v,ze as w,Hi as x,pr as y,V as z};
