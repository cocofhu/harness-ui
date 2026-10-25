const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/IconGallery-WsO2inVy.js","assets/IconGallery-EEQdn2tp.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Be={},wn=[],Vt=()=>{},Aa=()=>!1,io=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),oo=e=>e.startsWith("onUpdate:"),Je=Object.assign,ls=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},fl=Object.prototype.hasOwnProperty,Pe=(e,t)=>fl.call(e,t),me=Array.isArray,gn=e=>mi(e)==="[object Map]",En=e=>mi(e)==="[object Set]",Ss=e=>mi(e)==="[object Date]",be=e=>typeof e=="function",Ge=e=>typeof e=="string",Zt=e=>typeof e=="symbol",We=e=>e!==null&&typeof e=="object",ka=e=>(We(e)||be(e))&&be(e.then)&&be(e.catch),Sa=Object.prototype.toString,mi=e=>Sa.call(e),hl=e=>mi(e).slice(8,-1),Ea=e=>mi(e)==="[object Object]",cs=e=>Ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ei=rs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),so=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ml=/-\w/g,vt=so(e=>e.replace(ml,t=>t.slice(1).toUpperCase())),yl=/\B([A-Z])/g,vn=so(e=>e.replace(yl,"-$1").toLowerCase()),ao=so(e=>e.charAt(0).toUpperCase()+e.slice(1)),Io=so(e=>e?`on${ao(e)}`:""),Ht=(e,t)=>!Object.is(e,t),Qi=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ca=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},ro=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Nl=e=>{const t=Ge(e)?Number(e):NaN;return isNaN(t)?e:t};let Es;const lo=()=>Es||(Es=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ft(e){if(me(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],o=Ge(i)?Ll(i):Ft(i);if(o)for(const s in o)t[s]=o[s]}return t}else if(Ge(e)||We(e))return e}const vl=/;(?![^(]*\))/g,xl=/:([^]+)/,jl=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Ll(e){const t={};return e.replace(jl,n=>n.startsWith("/*")?"":n).split(vl).forEach(n=>{if(n){const i=n.split(xl);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function he(e){let t="";if(Ge(e))t=e;else if(me(e))for(let n=0;n<e.length;n++){const i=he(e[n]);i&&(t+=i+" ")}else if(We(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const bl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Dl=rs(bl);function Oa(e){return!!e||e===""}function Il(e,t,n){if(e.length!==t.length)return!1;let i=!0;for(let o=0;i&&o<e.length;o++)i=hn(e[o],t[o],n);return i}function Cs(e,t,n){if(e.size!==t.size)return!1;const i=Array.from(t),o=new Uint8Array(i.length);for(const s of e){let r=-1;for(let a=0;a<i.length;a++)if(!o[a]&&hn(s,i[a],n)){r=a;break}if(r<0)return!1;o[r]=1}return!0}function Tl(e,t,n){let i=gn(e),o=gn(t);if(i||o||(i=En(e),o=En(t),i||o))return i&&o?Cs(e,t,n):!1;const s=Object.keys(e).length,r=Object.keys(t).length;if(s!==r)return!1;for(const a in e){const c=e.hasOwnProperty(a),d=t.hasOwnProperty(a);if(c&&!d||!c&&d||!hn(e[a],t[a],n))return!1}return String(e)===String(t)}function Os(e,t,n,i){n||(n=[new Map,new Map]);const[o,s]=n;if(o.has(e)||s.has(t))return o.get(e)===t&&s.get(t)===e;o.set(e,t),s.set(t,e);const r=i(e,t,n);return o.delete(e),s.delete(t),r}function hn(e,t,n){if(e===t)return!0;let i=Ss(e),o=Ss(t);return i||o?i&&o?e.getTime()===t.getTime():!1:(i=Zt(e),o=Zt(t),i||o?e===t:(i=me(e),o=me(t),i||o?i&&o?Os(e,t,n,Il):!1:(i=We(e),o=We(t),i||o?!i||!o?!1:Os(e,t,n,Tl):String(e)===String(t))))}function wl(e,t){return e.findIndex(n=>hn(n,t))}const Qa=e=>!!(e&&e.__v_isRef===!0),ie=e=>Ge(e)?e:e==null?"":me(e)||We(e)&&(e.toString===Sa||!be(e.toString))?Qa(e)?ie(e.value):JSON.stringify(e,Ua,2):String(e),Ua=(e,t)=>Qa(t)?Ua(e,t.value):gn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,o],s)=>(n[To(i,s)+" =>"]=o,n),{})}:En(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>To(n))}:Zt(t)?To(t):We(t)&&!me(t)&&!Ea(t)?String(t):t,To=(e,t="")=>{var n;return Zt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let st;class zl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&st&&(st.active?(this.parent=st,this.index=(st.scopes||(st.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const i=this.scopes.slice();for(t=0,n=i.length;t<n;t++)i[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const o=this.scopes.slice();for(t=0,n=o.length;t<n;t++)o[t].resume()}const i=this.effects.slice();for(t=0,n=i.length;t<n;t++)i[t].resume()}}run(t){if(this._active){const n=st;try{return st=this,t()}finally{st=n}}}on(){++this._on===1&&(this.prevScope=st,st=this)}off(){if(this._on>0&&--this._on===0){if(st===this)st=this.prevScope;else{let t=st;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const o=this.scopes.slice();for(n=0,i=o.length;n<i;n++)o[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Al(){return st}let $e;const wo=new WeakSet;class Ya{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,st&&(st.active?st.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wo.has(this)&&(wo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||_a(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qs(this),Wa(this);const t=$e,n=Ot;$e=this,Ot=!0;try{return this.fn()}finally{Ra(this),$e=t,Ot=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ms(t);this.deps=this.depsTail=void 0,Qs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$o(this)&&this.run()}get dirty(){return $o(this)}}let Pa=0,ti,ni;function _a(e,t=!1){if(e.flags|=8,t){e.next=ni,ni=e;return}e.next=ti,ti=e}function us(){Pa++}function ds(){if(--Pa>0)return;if(ni){let t=ni;for(ni=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;ti;){let t=ti;for(ti=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function Wa(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ra(e){let t,n=e.depsTail,i=n;for(;i;){const o=i.prevDep;i.version===-1?(i===n&&(n=o),Ms(i),kl(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=o}e.deps=t,e.depsTail=n}function $o(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ba(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ba(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===li)||(e.globalVersion=li,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!$o(e))))return;e.flags|=2;const t=e.dep,n=$e,i=Ot;$e=e,Ot=!0;try{Wa(e);const o=e.fn(e._value);(t.version===0||Ht(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{$e=n,Ot=i,Ra(e),e.flags&=-3}}function Ms(e,t=!1){const{dep:n,prevSub:i,nextSub:o}=e;if(i&&(i.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Ms(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function kl(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ot=!0;const $a=[];function Kt(){$a.push(Ot),Ot=!1}function Jt(){const e=$a.pop();Ot=e===void 0?!0:e}function Qs(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=$e;$e=void 0;try{t()}finally{$e=n}}}let li=0;class Sl{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ps{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!$e||!Ot||$e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==$e)n=this.activeLink=new Sl($e,this),$e.deps?(n.prevDep=$e.depsTail,$e.depsTail.nextDep=n,$e.depsTail=n):$e.deps=$e.depsTail=n,Ha(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=$e.depsTail,n.nextDep=void 0,$e.depsTail.nextDep=n,$e.depsTail=n,$e.deps===n&&($e.deps=i)}return n}trigger(t){this.version++,li++,this.notify(t)}notify(t){us();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ds()}}}function Ha(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Ha(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ho=new WeakMap,An=Symbol(""),Go=Symbol(""),ci=Symbol("");function ut(e,t,n){if(Ot&&$e){let i=Ho.get(e);i||Ho.set(e,i=new Map);let o=i.get(n);o||(i.set(n,o=new ps),o.map=i,o.key=n),o.track()}}function on(e,t,n,i,o,s){const r=Ho.get(e);if(!r){li++;return}const a=c=>{c&&c.trigger()};if(us(),t==="clear")r.forEach(a);else{const c=me(e),d=c&&cs(n);if(c&&n==="length"){const u=Number(i);r.forEach((h,L)=>{(L==="length"||L===ci||!Zt(L)&&L>=u)&&a(h)})}else switch((n!==void 0||r.has(void 0))&&a(r.get(n)),d&&a(r.get(ci)),t){case"add":c?d&&a(r.get("length")):(a(r.get(An)),gn(e)&&a(r.get(Go)));break;case"delete":c||(a(r.get(An)),gn(e)&&a(r.get(Go)));break;case"set":gn(e)&&a(r.get(An));break}}ds()}function Yn(e){const t=Ue(e);return t===e||(ut(t,"iterate",ci),wt(e))?t:qt(e)?fn(e)?t.map(n=>mn(zt(n))):t.map(mn):t.map(zt)}function co(e){return ut(e=Ue(e),"iterate",ci),e}function Rt(e,t){return qt(e)?mn(fn(e)?zt(t):t):zt(t)}const El={__proto__:null,[Symbol.iterator](){return zo(this,Symbol.iterator,e=>Rt(this,e))},concat(...e){return Yn(this).concat(...e.map(t=>me(t)?Yn(t):t))},entries(){return zo(this,"entries",e=>(e[1]=Rt(this,e[1]),e))},every(e,t){return en(this,"every",e,t,void 0,arguments)},filter(e,t){return en(this,"filter",e,t,n=>n.map(i=>Rt(this,i)),arguments)},find(e,t){return en(this,"find",e,t,n=>Rt(this,n),arguments)},findIndex(e,t){return en(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return en(this,"findLast",e,t,n=>Rt(this,n),arguments)},findLastIndex(e,t){return en(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return en(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ao(this,"includes",e)},indexOf(...e){return Ao(this,"indexOf",e)},join(e){return Yn(this).join(e)},lastIndexOf(...e){return Ao(this,"lastIndexOf",e)},map(e,t){return en(this,"map",e,t,void 0,arguments)},pop(){return $n(this,"pop")},push(...e){return $n(this,"push",e)},reduce(e,...t){return Ys(this,"reduce",e,t)},reduceRight(e,...t){return Ys(this,"reduceRight",e,t)},shift(){return $n(this,"shift")},some(e,t){return en(this,"some",e,t,void 0,arguments)},splice(...e){return $n(this,"splice",e)},toReversed(){return Yn(this).toReversed()},toSorted(e){return Yn(this).toSorted(e)},toSpliced(...e){return Yn(this).toSpliced(...e)},unshift(...e){return $n(this,"unshift",e)},values(){return zo(this,"values",e=>Rt(this,e))}};function zo(e,t,n){const i=co(e),o=i[t],s=o.call(i);if(i!==e&&!wt(e)){if(s[Symbol.toStringTag]==="Array Iterator"){const r=Object.create(Object.getPrototypeOf(s));return r.next=()=>Us(s.next(),n),o!==Ga[t]&&Object.defineProperties(r,{return:{get(){const a=s.return;return typeof a=="function"?a.bind(s):a}},throw:{get(){const a=s.throw;return typeof a=="function"?a.bind(s):a}}}),r}s._next=s.next,s.next=()=>Us(s._next(),n)}return s}function Us(e,t){return e.done||(e.value=t(e.value)),e}const Ga=Array.prototype;function en(e,t,n,i,o,s){const r=co(e),a=r!==e&&!wt(e),c=r[t];if(c!==Ga[t]){const h=c.apply(e,s);return a?zt(h):h}let d=n;r!==e&&(a?d=function(h,L){return n.call(this,Rt(e,h),L,e)}:n.length>2&&(d=function(h,L){return n.call(this,h,L,e)}));const u=c.call(r,d,i);return a&&o?o(u):u}function Ys(e,t,n,i){const o=co(e),s=o!==e&&!wt(e);let r=n,a=!1;o!==e&&(s?(a=i.length===0,r=function(d,u,h){return a&&(a=!1,d=Rt(e,d)),n.call(this,d,Rt(e,u),h,e)}):n.length>3&&(r=function(d,u,h){return n.call(this,d,u,h,e)}));const c=o[t](r,...i);return a?Rt(e,c):c}function Ao(e,t,n){const i=Ue(e);ut(i,"iterate",ci);const o=i[t](...n);return(o===-1||o===!1)&&ms(n[0])?(n[0]=Ue(n[0]),i[t](...n)):o}function $n(e,t,n=[]){Kt(),us();const i=Ue(e)[t].apply(e,n);return ds(),Jt(),i}const Cl=rs("__proto__,__v_isRef,__isVue"),Va=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Zt));function Ol(e){Zt(e)||(e=String(e));const t=Ue(this);return ut(t,"has",e),t.hasOwnProperty(e)}class Fa{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(o?s?Hl:qa:s?Ja:Ka).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const r=me(t);if(!o){let c;if(r&&(c=El[n]))return c;if(n==="hasOwnProperty")return Ol}const a=Reflect.get(t,n,pt(t)?t:i);if((Zt(n)?Va.has(n):Cl(n))||(o||ut(t,"get",n),s))return a;if(pt(a)){const c=r&&cs(n)?a:a.value;return o&&We(c)?Fo(c):c}return We(a)?o?Fo(a):fs(a):a}}class Za extends Fa{constructor(t=!1){super(!1,t)}set(t,n,i,o){let s=t[n];const r=me(t)&&cs(n);if(!this._isShallow){const d=qt(s);if(!wt(i)&&!qt(i)&&(s=Ue(s),i=Ue(i)),!r&&pt(s)&&!pt(i))return d||(s.value=i),!0}const a=r?Number(n)<t.length:Pe(t,n),c=Reflect.set(t,n,i,pt(t)?t:o);return t===Ue(o)&&c&&(a?Ht(i,s)&&on(t,"set",n,i):on(t,"add",n,i)),c}deleteProperty(t,n){const i=Pe(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&i&&on(t,"delete",n,void 0),o}has(t,n){const i=Reflect.has(t,n);return(!Zt(n)||!Va.has(n))&&ut(t,"has",n),i}ownKeys(t){return ut(t,"iterate",me(t)?"length":An),Reflect.ownKeys(t)}}class Ql extends Fa{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ul=new Za,Yl=new Ql,Pl=new Za(!0);const Vo=e=>e,Ti=e=>Reflect.getPrototypeOf(e);function _l(e,t,n){return function(...i){const o=this.__v_raw,s=Ue(o),r=gn(s),a=e==="entries"||e===Symbol.iterator&&r,c=e==="keys"&&r,d=o[e](...i),u=n?Vo:t?mn:zt;return!t&&ut(s,"iterate",c?Go:An),Je(Object.create(d),{next(){const{value:h,done:L}=d.next();return L?{value:h,done:L}:{value:a?[u(h[0]),u(h[1])]:u(h),done:L}}})}}function wi(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Wl(e,t){const n={get(o){const s=this.__v_raw,r=Ue(s),a=Ue(o);e||(Ht(o,a)&&ut(r,"get",o),ut(r,"get",a));const{has:c}=Ti(r),d=t?Vo:e?mn:zt;if(c.call(r,o))return d(s.get(o));if(c.call(r,a))return d(s.get(a));s!==r&&s.get(o)},get size(){const o=this.__v_raw;return!e&&ut(Ue(o),"iterate",An),o.size},has(o){const s=this.__v_raw,r=Ue(s),a=Ue(o);return e||(Ht(o,a)&&ut(r,"has",o),ut(r,"has",a)),o===a?s.has(o):s.has(o)||s.has(a)},forEach(o,s){const r=this,a=r.__v_raw,c=Ue(a),d=t?Vo:e?mn:zt;return!e&&ut(c,"iterate",An),a.forEach((u,h)=>o.call(s,d(u),d(h),r))}};return Je(n,e?{add:wi("add"),set:wi("set"),delete:wi("delete"),clear:wi("clear")}:{add(o){const s=Ue(this),r=Ti(s),a=Ue(o),c=!t&&!wt(o)&&!qt(o)?a:o;return r.has.call(s,c)||Ht(o,c)&&r.has.call(s,o)||Ht(a,c)&&r.has.call(s,a)||(s.add(c),on(s,"add",c,c)),this},set(o,s){!t&&!wt(s)&&!qt(s)&&(s=Ue(s));const r=Ue(this),{has:a,get:c}=Ti(r);let d=a.call(r,o);d||(o=Ue(o),d=a.call(r,o));const u=c.call(r,o);return r.set(o,s),d?Ht(s,u)&&on(r,"set",o,s):on(r,"add",o,s),this},delete(o){const s=Ue(this),{has:r,get:a}=Ti(s);let c=r.call(s,o);c||(o=Ue(o),c=r.call(s,o)),a&&a.call(s,o);const d=s.delete(o);return c&&on(s,"delete",o,void 0),d},clear(){const o=Ue(this),s=o.size!==0,r=o.clear();return s&&on(o,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=_l(o,e,t)}),n}function gs(e,t){const n=Wl(e,t);return(i,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_isShallow"?t:o==="__v_raw"?i:Reflect.get(Pe(n,o)&&o in i?n:i,o,s)}const Rl={get:gs(!1,!1)},Bl={get:gs(!1,!0)},$l={get:gs(!0,!1)};const Ka=new WeakMap,Ja=new WeakMap,qa=new WeakMap,Hl=new WeakMap;function Gl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fs(e){return qt(e)?e:hs(e,!1,Ul,Rl,Ka)}function Vl(e){return hs(e,!1,Pl,Bl,Ja)}function Fo(e){return hs(e,!0,Yl,$l,qa)}function hs(e,t,n,i,o){if(!We(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const s=o.get(e);if(s)return s;const r=Gl(hl(e));if(r===0)return e;const a=new Proxy(e,r===2?i:n);return o.set(e,a),a}function fn(e){return qt(e)?fn(e.__v_raw):!!(e&&e.__v_isReactive)}function qt(e){return!!(e&&e.__v_isReadonly)}function wt(e){return!!(e&&e.__v_isShallow)}function ms(e){return e?!!e.__v_raw:!1}function Ue(e){const t=e&&e.__v_raw;return t?Ue(t):e}function Fl(e){return!Pe(e,"__v_skip")&&Object.isExtensible(e)&&Ca(e,"__v_skip",!0),e}const zt=e=>We(e)?fs(e):e,mn=e=>We(e)?Fo(e):e;function pt(e){return e?e.__v_isRef===!0:!1}function G(e){return Zl(e,!1)}function Zl(e,t){return pt(e)?e:new Kl(e,t)}class Kl{constructor(t,n){this.dep=new ps,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Ue(t),this._value=n?t:zt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||wt(t)||qt(t);t=i?t:Ue(t),Ht(t,n)&&(this._rawValue=t,this._value=i?t:zt(t),this.dep.trigger())}}function F(e){return pt(e)?e.value:e}const Jl={get:(e,t,n)=>t==="__v_raw"?e:F(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const o=e[t];return pt(o)&&!pt(n)?(o.value=n,!0):Reflect.set(e,t,n,i)}};function Xa(e){return fn(e)?e:new Proxy(e,Jl)}class ql{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new ps(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=li-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return _a(this,!0),!0}get value(){const t=this.dep.track();return Ba(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Xl(e,t,n=!1){let i,o;return be(e)?i=e:(i=e.get,o=e.set),new ql(i,o,n)}const zi={},Ri=new WeakMap;let bn;function ec(e,t=!1,n=bn){if(n){let i=Ri.get(n);i||Ri.set(n,i=[]),i.push(e)}}function tc(e,t,n=Be){const{immediate:i,deep:o,once:s,scheduler:r,augmentJob:a,call:c}=n,d=w=>o?w:wt(w)||o===!1||o===0?sn(w,1):sn(w);let u,h,L,j,C=!1,O=!1;if(pt(e)?(h=()=>e.value,C=wt(e)):fn(e)?(h=()=>d(e),C=!0):me(e)?(O=!0,C=e.some(w=>fn(w)||wt(w)),h=()=>e.map(w=>{if(pt(w))return w.value;if(fn(w))return d(w);if(be(w))return c?c(w,2):w()})):be(e)?t?h=c?()=>c(e,2):e:h=()=>{if(L){Kt();try{L()}finally{Jt()}}const w=bn;bn=u;try{return c?c(e,3,[j]):e(j)}finally{bn=w}}:h=Vt,t&&o){const w=h,Y=o===!0?1/0:o;h=()=>sn(w(),Y)}const H=Al(),ee=()=>{u.stop(),H&&H.active&&ls(H.effects,u)};if(s&&t){const w=t;t=(...Y)=>{try{return w(...Y)}finally{ee()}}}let $=O?new Array(e.length).fill(zi):zi;const q=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(t){const Y=u.run();if(w||o||C||(O?Y.some((D,N)=>Ht(D,$[N])):Ht(Y,$))){const D=bn;Kt();try{L&&L(),bn=u;const N=[Y,$===zi?void 0:O&&$[0]===zi?[]:$,j];$=Y,c?c(t,3,N):t(...N)}finally{bn=D,Jt()}}}else u.run()};return a&&a(q),u=new Ya(h),u.scheduler=r?()=>r(q,!1):q,j=w=>ec(w,!1,u),L=u.onStop=()=>{const w=Ri.get(u);if(w){if(c)c(w,4);else for(const Y of w)Y();Ri.delete(u)}},t?i?q(!0):$=u.run():r?r(q.bind(null,!0),!0):u.run(),ee.pause=u.pause.bind(u),ee.resume=u.resume.bind(u),ee.stop=ee,ee}function sn(e,t=1/0,n){if(t<=0||!We(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,pt(e))sn(e.value,t,n);else if(me(e))for(let i=0;i<e.length;i++)sn(e[i],t,n);else if(En(e)||gn(e))e.forEach(i=>{sn(i,t,n)});else if(Ea(e)){for(const i in e)sn(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&sn(e[i],t,n)}return e}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yi(e,t,n,i){try{return i?e(...i):e()}catch(o){Ni(o,t,n)}}function At(e,t,n,i){if(be(e)){const o=yi(e,t,n,i);return o&&ka(o)&&o.catch(s=>{Ni(s,t,n)}),o}if(me(e)){const o=[];for(let s=0;s<e.length;s++)o.push(At(e[s],t,n,i));return o}}function Ni(e,t,n,i=!0){const o=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||Be;if(t){let a=t.parent;const c=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](e,c,d)===!1)return}a=a.parent}if(s){Kt(),yi(s,null,10,[e,c,d]),Jt();return}}nc(e,n,o,i,r)}function nc(e,t,n,i=!0,o=!1){if(o)throw e;console.error(e)}const Nt=[];let Et=-1;const Bt=[];let pn=null,Pn=0;const er=Promise.resolve();let Bi=null;function ke(e){const t=Bi||er;return e?t.then(this?e.bind(this):e):t}function ic(e){let t=Et+1,n=Nt.length;for(;t<n;){const i=t+n>>>1,o=Nt[i],s=ui(o);s<e||s===e&&o.flags&2?t=i+1:n=i}return t}function ys(e){if(!(e.flags&1)){const t=ui(e),n=Nt[Nt.length-1];!n||!(e.flags&2)&&t>=ui(n)?Nt.push(e):Nt.splice(ic(t),0,e),e.flags|=1,tr()}}function tr(){Bi||(Bi=er.then(or))}function oc(e){if(!me(e))pn&&e.id===-1?pn.splice(Pn+1,0,e):e.flags&1||(Bt.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Bt.push(e[t]);tr()}function nr(e,t,n,i=Et+1){for(;i<Nt.length;i++){const o=Nt[i];if(o&&o.flags&2){if(e&&o.id!==e.uid||t!==void 0&&!(o.id>=t))continue;Nt.splice(i,1),i=e?i-1:Et,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function ir(e,t,n=0){if(Bt.length){let i=Bt,o=0;if(t){i=[];for(let r=0;r<Bt.length;r++){const a=Bt[r];(a.i!==void 0?!a.i||a.i.uid<n:t.has(a))?Bt[o++]=a:i.push(a)}}const s=[...new Set(i)].sort((r,a)=>ui(r)-ui(a));if(Bt.length=o,pn){for(let r=0;r<s.length;r++)pn.push(s[r]);return}for(pn=s,Pn=0;Pn<pn.length;Pn++){const r=pn[Pn];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}pn=null,Pn=0}}let ko=!1;function sc(e,t){if(ko){e();return}const n=t===void 0?void 0:new Set(Bt);e(),ko=!0;try{nr(void 0,t),ir(void 0,n,t)}finally{ko=!1}}const ui=e=>e.id==null?e.flags&2?-1:1/0:e.id;function or(e){try{for(Et=0;Et<Nt.length;Et++){const t=Nt[Et];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),yi(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Et<Nt.length;Et++){const t=Nt[Et];t&&(t.flags&=-2)}Et=-1,Nt.length=0,ir(),Bi=null,(Nt.length||Bt.length)&&or()}}let Lt=null,sr=null;function $i(e){const t=Lt;return Lt=e,sr=e&&e.type.__scopeId||null,t}function Ke(e,t=Lt,n){if(!t||e._n)return e;const i=(...o)=>{i._d&&Fi(-1);const s=$i(t),r=Sn.length;let a;try{a=e(...o)}finally{for(let c=Sn.length;c>r;c--)kr();$i(s),i._d&&Fi(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function qe(e,t){if(Lt===null)return e;const n=yo(Lt),i=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[s,r,a,c=Be]=t[o];s&&(be(s)&&(s={mounted:s,updated:s}),s.deep&&sn(r),i.push({dir:s,instance:n,value:r,oldValue:void 0,arg:a,modifiers:c}))}return e}function xn(e,t,n,i){const o=e.dirs,s=t&&t.dirs;for(let r=0;r<o.length;r++){const a=o[r];s&&(a.oldValue=s[r].value);let c=a.dir[i];c&&(Kt(),At(c,n,8,[e.el,a,e,t]),Jt())}}function ac(e,t){if(rt){let n=rt.provides;const i=rt.parent&&rt.parent.provides;i===n&&(n=rt.provides=Object.create(i)),n[e]=t}}function Ui(e,t,n=!1){const i=mo();if(i||_n){let o=_n?_n._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&be(t)?t.call(i&&i.proxy):t}}const rc=Symbol.for("v-scx"),lc=()=>Ui(rc);function Ie(e,t,n){return ar(e,t,n)}function ar(e,t,n=Be){const{immediate:i,deep:o,flush:s,once:r}=n,a=Je({},n),c=t&&i||!t&&s!=="post";let d;if(Wn){if(s==="sync"){const j=lc();d=j.__watcherHandles||(j.__watcherHandles=[])}else if(!c){const j=()=>{};return j.stop=Vt,j.resume=Vt,j.pause=Vt,j}}const u=rt;a.call=(j,C,O)=>At(j,u,C,O);let h=!1;s==="post"?a.scheduler=j=>{j.i=u,yt(j,u&&u.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(j,C)=>{C?j():ys(j)}),a.augmentJob=j=>{t&&(j.flags|=4),h&&(j.flags|=2,u&&(j.id=u.uid,j.i=u))};const L=tc(e,t,a);return Wn&&(d?d.push(L):c&&L()),L}function cc(e,t,n){const i=this.proxy,o=Ge(e)?e.includes(".")?rr(i,e):()=>i[e]:e.bind(i,i);let s;be(t)?s=t:(s=t.handler,n=t);const r=xi(this),a=ar(o,s.bind(i),n);return r(),a}function rr(e,t){const n=t.split(".");return()=>{let i=e;for(let o=0;o<n.length&&i;o++)i=i[n[o]];return i}}const dn=new WeakMap,lr=Symbol("_vte"),uo=e=>e.__isTeleport,Dn=e=>e&&(e.disabled||e.disabled===""),uc=e=>e&&(e.defer||e.defer===""),Ps=e=>typeof SVGElement<"u"&&e instanceof SVGElement,_s=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Zo=(e,t)=>{const n=e&&e.to;return Ge(n)?t?t(n):null:n},dc={name:"Teleport",__isTeleport:!0,process(e,t,n,i,o,s,r,a,c,d){const{mc:u,pc:h,pbc:L,o:{insert:j,querySelector:C,createText:O,createComment:H,parentNode:ee}}=d,$=Dn(t.props);let{dynamicChildren:q}=t;const w=(N,S,g)=>{N.shapeFlag&16&&u(N.children,S,g,o,s,r,a,c)},Y=(N=t)=>{const S=Dn(N.props),g=N.target=Zo(N.props,C),W=Ko(g,N,O,j);g&&(r!=="svg"&&Ps(g)?r="svg":r!=="mathml"&&_s(g)&&(r="mathml"),o&&o.isCE&&(o.ce._teleportTargets||(o.ce._teleportTargets=new Set)).add(g),S||(w(N,g,W),Jn(N,!1)))},D=N=>{const S=()=>{if(dn.get(N)===S){if(dn.delete(N),Dn(N.props)){const g=ee(N.el)||n;w(N,g,N.anchor),Jn(N,!0)}Y(N)}};dn.set(N,S),yt(S,s)};if(e==null){const N=t.el=O(""),S=t.anchor=O("");if(j(N,n,i),j(S,n,i),uc(t.props)||s&&s.pendingBranch){D(t);return}$&&(w(t,n,S),Jn(t,!0)),Y()}else{t.el=e.el;const N=t.anchor=e.anchor,S=dn.get(e);if(S){S.flags|=8,dn.delete(e),D(t);return}t.targetStart=e.targetStart;const g=t.target=e.target,W=t.targetAnchor=e.targetAnchor,Z=Dn(e.props),Q=Z?n:g,J=Z?N:W;if(r==="svg"||Ps(g)?r="svg":(r==="mathml"||_s(g))&&(r="mathml"),q?(L(e.dynamicChildren,q,Q,o,s,r,a),Ls(e,t,!0)):c||h(e,t,Q,J,o,s,r,a,!1),$)Z?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Ai(t,n,N,d,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ue=Zo(t.props,C);ue&&(t.target=ue,Ai(t,ue,null,d,0))}else Z&&Ai(t,g,W,d,1);Jn(t,$)}},remove(e,t,n,{um:i,o:{remove:o}},s){const{shapeFlag:r,children:a,anchor:c,targetStart:d,targetAnchor:u,target:h,props:L}=e,j=Dn(L),C=s||!j,O=dn.get(e);if(O&&(O.flags|=8,dn.delete(e)),h&&(o(d),o(u)),s&&o(c),!O&&(j||h)&&r&16)for(let H=0;H<a.length;H++){const ee=a[H];i(ee,t,n,C,!!ee.dynamicChildren)}},move:Ai,hydrate:Mc};function Ai(e,t,n,{o:{insert:i},m:o},s=2){s===0&&(e.targetStart&&i(e.targetStart,t,n),i(e.targetAnchor,t,n),n=e.targetAnchor);const{el:r,anchor:a,shapeFlag:c,children:d,props:u}=e,h=s===2;if(h&&i(r,t,n),!dn.has(e)&&(!h||Dn(u))&&c&16)for(let L=0;L<d.length;L++)o(d[L],t,n,2);h&&i(a,t,n)}function Mc(e,t,n,i,o,s,{o:{nextSibling:r,parentNode:a,querySelector:c,insert:d,createText:u}},h){function L(H,ee){let $=ee;for(;$;){if($&&$.nodeType===8){if($.data==="teleport start anchor")t.targetStart=$;else if($.data==="teleport anchor"){t.targetAnchor=$,H._lpa=t.targetAnchor&&r(t.targetAnchor);break}}$=r($)}}function j(H,ee){ee.anchor=h(r(H),ee,a(H),n,i,o,s)}const C=t.target=Zo(t.props,c),O=Dn(t.props);if(C){const H=C._lpa||C.firstChild;t.shapeFlag&16&&(O?(j(e,t),L(C,H),t.targetAnchor||Ko(C,t,u,d,a(e)===C?e:null)):(t.anchor=r(e),L(C,H),t.targetAnchor||Ko(C,t,u,d),h(H&&r(H),t,C,n,i,o,s))),Jn(t,O)}else O&&t.shapeFlag&16&&(j(e,t),t.targetStart=e,t.targetAnchor=r(e));return t.anchor&&r(t.anchor)}const pc=dc;function Jn(e,t){const n=e.ctx;if(n&&n.ut){let i,o;for(t?(i=e.el,o=e.anchor):(i=e.targetStart,o=e.targetAnchor);i&&i!==o;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function Ko(e,t,n,i,o=null){const s=t.targetStart=n(""),r=t.targetAnchor=n("");return s[lr]=r,e&&(i(s,e,o),i(r,e,o)),r}const Tt=Symbol("_leaveCb"),Hn=Symbol("_enterCb");function cr(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return kt(()=>{e.isMounted=!0}),Qt(()=>{e.isUnmounting=!0}),e}const It=[Function,Array],ur={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:It,onEnter:It,onAfterEnter:It,onEnterCancelled:It,onBeforeLeave:It,onLeave:It,onAfterLeave:It,onLeaveCancelled:It,onBeforeAppear:It,onAppear:It,onAfterAppear:It,onAppearCancelled:It},gc={name:"BaseTransition",props:ur,setup(e,{slots:t}){const n=mo(),i=cr();return()=>{const o=t.default&&Ns(t.default(),!0),s=o&&o.length?dr(o):n.subTree?ge():void 0;if(!s)return;const r=Ue(e),{mode:a}=r;if(i.isLeaving)return So(s);const c=Hi(s);if(!c)return So(s);let d=di(c,r,i,n,h=>d=h);c.type!==Mt&&yn(c,d);let u=n.subTree&&Hi(n.subTree);if(u&&u.type!==Mt&&!In(u,c)&&Mi(n.subTree)){let h=di(u,r,i,n);if(yn(u,h),a==="out-in"&&c.type!==Mt)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave,u=void 0},So(s);a==="in-out"&&c.type!==Mt?h.delayLeave=(L,j,C)=>{const O=Mr(i,u);O[String(u.key)]=u,L[Tt]=()=>{j(),L[Tt]=void 0,delete d.delayedLeave,u=void 0},d.delayedLeave=()=>{C(),delete d.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function dr(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Mt){t=n;break}}return t}const fc=gc;function Mr(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function di(e,t,n,i,o){const{appear:s,mode:r,persisted:a=!1,onBeforeEnter:c,onEnter:d,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:L,onLeave:j,onAfterLeave:C,onLeaveCancelled:O,onBeforeAppear:H,onAppear:ee,onAfterAppear:$,onAppearCancelled:q}=t,w=String(e.key),Y=Mr(n,e),D=(g,W)=>{g&&At(g,i,9,W)},N=(g,W)=>{const Z=W[1];D(g,W),me(g)?g.every(Q=>Q.length<=1)&&Z():g.length<=1&&Z()},S={mode:r,persisted:a,beforeEnter(g){let W=c;if(!n.isMounted)if(s)W=H||c;else return;g[Tt]&&g[Tt](!0);const Z=Y[w];if(Z&&In(e,Z)){let Q=Z.el[Tt];if(!Q){const J=Mi(Z);Q=J&&J.el[Tt]}Q&&Q()}D(W,[g])},enter(g){if(Y[w]===e)return;let W=d,Z=u,Q=h;if(!n.isMounted)if(s)W=ee||d,Z=$||u,Q=q||h;else return;let J=!1;g[Hn]=fe=>{J||(J=!0,fe?D(Q,[g]):D(Z,[g]),S.delayedLeave&&S.delayedLeave(),g[Hn]=void 0)};const ue=g[Hn].bind(null,!1);W?N(W,[g,ue]):ue()},leave(g,W){const Z=String(e.key);if(g[Hn]&&g[Hn](!0),n.isUnmounting)return W();D(L,[g]);let Q=!1;g[Tt]=ue=>{Q||(Q=!0,W(),ue?D(O,[g]):D(C,[g]),g[Tt]=void 0,Y[Z]===e&&delete Y[Z])};const J=g[Tt].bind(null,!1);Y[Z]=e,j?N(j,[g,J]):J()},clone(g){const W=di(g,t,n,i,o);return o&&o(W),W}};return S}function So(e){if(vi(e))return e=Nn(e),e.children=null,e}function Hi(e){if(!vi(e))return uo(e.type)&&e.children?dr(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&be(n.default))return n.default()}}function yn(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;yn(uo(n.type)&&Hi(n)||n,t)}else if(e.shapeFlag&128)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===Ne&&me(e.children)){const n=Nr(e.children,!1);n&&yn(n,t)}}function Ns(e,t=!1,n){let i=[],o=0;for(let s=0;s<e.length;s++){let r=e[s];const a=n==null?r.key:String(n)+String(r.key!=null?r.key:s);r.type===Ne?(r.patchFlag&128&&o++,i=i.concat(Ns(r.children,t,a))):(t||r.type!==Mt)&&i.push(a!=null?Nn(r,{key:a}):r)}if(o>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Mi(e){if(e.component)return Mi(e.component.subTree);if(e.type===Ne){const t=me(e.children)&&Nr(e.children,!1);return t?Mi(t):void 0}if(e.type!==Mt)return e}function Fe(e,t){return be(e)?Je({name:e.name},t,{setup:e}):e}function Qn(){const e=mo();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function vs(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ws(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Gi=new WeakMap;function ii(e,t,n,i,o=!1){if(me(e)){e.forEach((O,H)=>ii(O,t&&(me(t)?t[H]:t),n,i,o));return}if(oi(i)&&!o){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ii(e,t,n,i.component.subTree);return}const s=i.shapeFlag&4?yo(i.component):i.el,r=o?null:s,{i:a,r:c}=e,d=t&&t.r,u=a.refs===Be?a.refs={}:a.refs,h=a.setupState,L=Ue(h),j=h===Be?Aa:O=>Ws(u,O)?!1:Pe(L,O),C=(O,H)=>!(H&&Ws(u,H));if(d!=null&&d!==c){if(Rs(t),Ge(d))u[d]=null,j(d)&&(h[d]=null);else if(pt(d)){const O=t;C(d,O.k)&&(d.value=null),O.k&&(u[O.k]=null)}}if(be(c))yi(c,a,12,[r,u]);else{const O=Ge(c),H=pt(c);if(O||H){const ee=()=>{if(e.f){const $=O?j(c)?h[c]:u[c]:C()||!e.k?c.value:u[e.k];if(o)me($)&&ls($,s);else if(me($))$.includes(s)||$.push(s);else if(O)u[c]=[s],j(c)&&(h[c]=u[c]);else{const q=[s];C(c,e.k)&&(c.value=q),e.k&&(u[e.k]=q)}}else O?(u[c]=r,j(c)&&(h[c]=r)):H&&(C(c,e.k)&&(c.value=r),e.k&&(u[e.k]=r))};if(r){const $=()=>{ee(),Gi.delete(e)};$.id=-1,Gi.set(e,$),yt($,n)}else Rs(e),ee()}}}function Rs(e){const t=Gi.get(e);t&&(t.flags|=8,Gi.delete(e))}const Bs=e=>e.nodeType===8;lo().requestIdleCallback;lo().cancelIdleCallback;function hc(e,t){if(Bs(e)&&e.data==="["){let n=1,i=e.nextSibling;for(;i;){if(i.nodeType===1){if(t(i)===!1)break}else if(Bs(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else t(e)}const oi=e=>!!e.type.__asyncLoader;function mc(e){be(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:i,delay:o=200,hydrate:s,timeout:r,suspensible:a=!0,onError:c}=e;let d=null,u,h=0;const L=()=>(h++,d=null,j()),j=()=>{let C;return d||(C=d=t().catch(O=>{if(O=O instanceof Error?O:new Error(String(O)),c)return new Promise((H,ee)=>{c(O,()=>H(L()),()=>ee(O),h+1)});throw O}).then(O=>C!==d&&d?d:(O&&(O.__esModule||O[Symbol.toStringTag]==="Module")&&(O=O.default),u=O,O)))};return Fe({name:"AsyncComponentWrapper",__asyncLoader:j,__asyncHydrate(C,O,H){const ee=C.isConnected;let $=!1;(O.bu||(O.bu=[])).push(()=>$=!0);const q=()=>{$||!C.parentNode||ee&&!C.isConnected||H()},w=s?()=>{const Y=s(q,D=>hc(C,D));Y&&(O.bum||(O.bum=[])).push(Y)}:q;u?w():j().then(()=>!O.isUnmounted&&w())},get __asyncResolved(){return u},setup(){const C=rt;if(vs(C),u)return()=>ki(u,C);const O=Y=>{d=null,Ni(Y,C,13,!i)};if(a&&C.suspense||Wn)return j().then(Y=>()=>ki(Y,C)).catch(Y=>(O(Y),()=>i?B(i,{error:Y}):null));const H=G(!1),ee=G(),$=G(!!o);let q,w;return go(()=>{q!=null&&clearTimeout(q),w!=null&&clearTimeout(w)}),o&&(w=setTimeout(()=>{C.isUnmounted||($.value=!1)},o)),r!=null&&(q=setTimeout(()=>{if(!C.isUnmounted&&!H.value&&!ee.value){const Y=new Error(`Async component timed out after ${r}ms.`);O(Y),ee.value=Y}},r)),j().then(()=>{C.isUnmounted||(H.value=!0,C.parent&&vi(C.parent.vnode)&&C.parent.update())}).catch(Y=>{if(C.isUnmounted){d=null;return}O(Y),ee.value=Y}),()=>{if(H.value&&u)return ki(u,C);if(ee.value&&i)return B(i,{error:ee.value});if(n&&!$.value)return ki(n,C)}}})}function ki(e,t){const{ref:n,props:i,children:o,ce:s}=t.vnode,r=B(e,i,o);return r.ref=n,r.ce=s,delete t.vnode.ce,r}const vi=e=>e.type.__isKeepAlive;function yc(e,t){pr(e,"a",t)}function Nc(e,t){pr(e,"da",t)}function pr(e,t,n=rt){const i=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Mo(t,i,n),n){let o=n.parent;for(;o&&o.parent;)vi(o.parent.vnode)&&vc(i,t,n,o),o=o.parent}}function vc(e,t,n,i){const o=Mo(t,e,i,!0);go(()=>{ls(i[t],o)},n)}function Mo(e,t,n=rt,i=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{Kt();const a=xi(n),c=At(t,n,e,r);return a(),Jt(),c});return i?o.unshift(s):o.push(s),s}}const rn=e=>(t,n=rt)=>{(!Wn||e==="sp")&&Mo(e,(...i)=>t(...i),n)},xc=rn("bm"),kt=rn("m"),jc=rn("bu"),po=rn("u"),Qt=rn("bum"),go=rn("um"),Lc=rn("sp"),bc=rn("rtg"),Dc=rn("rtc");function Ic(e,t=rt){Mo("ec",e,t)}const Tc="components",gr=Symbol.for("v-ndc");function kn(e){return Ge(e)?wc(Tc,e,!1)||e:e||gr}function wc(e,t,n=!0,i=!1){const o=Lt||rt;if(o){const s=o.type;{const a=du(s,!1);if(a&&(a===t||a===vt(t)||a===ao(vt(t))))return s}const r=$s(o[e]||s[e],t)||$s(o.appContext[e],t);return!r&&i?s:r}}function $s(e,t){return e&&(e[t]||e[vt(t)]||e[ao(vt(t))])}function _e(e,t,n,i){let o;const s=n,r=me(e);if(r||Ge(e)){const a=r&&fn(e);let c=!1,d=!1;a&&(c=!wt(e),d=qt(e),e=co(e)),o=new Array(e.length);for(let u=0,h=e.length;u<h;u++)o[u]=t(c?d?mn(zt(e[u])):zt(e[u]):e[u],u,void 0,s)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)o=[];else{o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,s)}else if(We(e))if(e[Symbol.iterator])o=Array.from(e,(a,c)=>t(a,c,void 0,s));else{const a=Object.keys(e);o=new Array(a.length);for(let c=0,d=a.length;c<d;c++){const u=a[c];o[c]=t(e[u],u,c,s)}}else o=[];return o}const Jo=e=>e?Qr(e)?yo(e):Jo(e.parent):null,si=Je(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Jo(e.parent),$root:e=>Jo(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>hr(e),$forceUpdate:e=>e.f||(e.f=()=>{ys(e.update)}),$nextTick:e=>e.n||(e.n=ke.bind(e.proxy)),$watch:e=>cc.bind(e)}),Eo=(e,t)=>e!==Be&&!e.__isScriptSetup&&Pe(e,t),zc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:o,props:s,accessCache:r,type:a,appContext:c}=e;if(t[0]!=="$"){const L=r[t];if(L!==void 0)switch(L){case 1:return i[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(Eo(i,t))return r[t]=1,i[t];if(o!==Be&&Pe(o,t))return r[t]=2,o[t];if(Pe(s,t))return r[t]=3,s[t];if(n!==Be&&Pe(n,t))return r[t]=4,n[t];qo&&(r[t]=0)}}const d=si[t];let u,h;if(d)return t==="$attrs"&&ut(e.attrs,"get",""),d(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(n!==Be&&Pe(n,t))return r[t]=4,n[t];if(h=c.config.globalProperties,Pe(h,t))return h[t]},set({_:e},t,n){const{data:i,setupState:o,ctx:s}=e;return Eo(o,t)?(o[t]=n,!0):i!==Be&&Pe(i,t)?(i[t]=n,!0):Pe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:o,props:s,type:r}},a){let c;return!!(n[a]||e!==Be&&a[0]!=="$"&&Pe(e,a)||Eo(t,a)||Pe(s,a)||Pe(i,a)||Pe(si,a)||Pe(o.config.globalProperties,a)||(c=r.__cssModules)&&c[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Pe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Hs(e){return me(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let qo=!0;function Ac(e){const t=hr(e),n=e.proxy,i=e.ctx;qo=!1,t.beforeCreate&&Gs(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:r,watch:a,provide:c,inject:d,created:u,beforeMount:h,mounted:L,beforeUpdate:j,updated:C,activated:O,deactivated:H,beforeDestroy:ee,beforeUnmount:$,destroyed:q,unmounted:w,render:Y,renderTracked:D,renderTriggered:N,errorCaptured:S,serverPrefetch:g,expose:W,inheritAttrs:Z,components:Q,directives:J,filters:ue}=t;if(d&&kc(d,i,null),r)for(const re in r){const pe=r[re];be(pe)&&(i[re]=pe.bind(n))}if(o){const re=o.call(n,n);We(re)&&(e.data=fs(re))}if(qo=!0,s)for(const re in s){const pe=s[re],te=be(pe)?pe.bind(n,n):be(pe.get)?pe.get.bind(n,n):Vt,z=!be(pe)&&be(pe.set)?pe.set.bind(n):Vt,R=Te({get:te,set:z});Object.defineProperty(i,re,{enumerable:!0,configurable:!0,get:()=>R.value,set:ne=>R.value=ne})}if(a)for(const re in a)fr(a[re],i,n,re);if(c){const re=be(c)?c.call(n):c;Reflect.ownKeys(re).forEach(pe=>{ac(pe,re[pe])})}u&&Gs(u,e,"c");function ae(re,pe){me(pe)?pe.forEach(te=>re(te.bind(n))):pe&&re(pe.bind(n))}if(ae(xc,h),ae(kt,L),ae(jc,j),ae(po,C),ae(yc,O),ae(Nc,H),ae(Ic,S),ae(Dc,D),ae(bc,N),ae(Qt,$),ae(go,w),ae(Lc,g),me(W))if(W.length){const re=e.exposed||(e.exposed={});W.forEach(pe=>{Object.defineProperty(re,pe,{get:()=>n[pe],set:te=>n[pe]=te,enumerable:!0})})}else e.exposed||(e.exposed={});Y&&e.render===Vt&&(e.render=Y),Z!=null&&(e.inheritAttrs=Z),Q&&(e.components=Q),J&&(e.directives=J),g&&vs(e)}function kc(e,t,n=Vt){me(e)&&(e=Xo(e));for(const i in e){const o=e[i];let s;We(o)?"default"in o?s=Ui(o.from||i,o.default,!0):s=Ui(o.from||i):s=Ui(o),pt(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:r=>s.value=r}):t[i]=s}}function Gs(e,t,n){At(me(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function fr(e,t,n,i){let o=i.includes(".")?rr(n,i):()=>n[i];if(Ge(e)){const s=t[e];be(s)&&Ie(o,s)}else if(be(e))Ie(o,e.bind(n));else if(We(e))if(me(e))e.forEach(s=>fr(s,t,n,i));else{const s=be(e.handler)?e.handler.bind(n):t[e.handler];be(s)&&Ie(o,s,e)}}function hr(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:r}}=e.appContext,a=s.get(t);let c;return a?c=a:!o.length&&!n&&!i?c=t:(c={},o.length&&o.forEach(d=>Vi(c,d,r,!0)),Vi(c,t,r)),We(t)&&s.set(t,c),c}function Vi(e,t,n,i=!1){const{mixins:o,extends:s}=t;s&&Vi(e,s,n,!0),o&&o.forEach(r=>Vi(e,r,n,!0));for(const r in t)if(!(i&&r==="expose")){const a=Sc[r]||n&&n[r];e[r]=a?a(e[r],t[r]):t[r]}return e}const Sc={data:Vs,props:Fs,emits:Fs,methods:qn,computed:qn,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:qn,directives:qn,watch:Cc,provide:Vs,inject:Ec};function Vs(e,t){return t?e?function(){return Je(be(e)?e.call(this,this):e,be(t)?t.call(this,this):t)}:t:e}function Ec(e,t){return qn(Xo(e),Xo(t))}function Xo(e){if(me(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ht(e,t){return e?[...new Set([].concat(e,t))]:t}function qn(e,t){return e?Je(Object.create(null),e,t):t}function Fs(e,t){return e?me(e)&&me(t)?[...new Set([...e,...t])]:Je(Object.create(null),Hs(e),Hs(t??{})):t}function Cc(e,t){if(!e)return t;if(!t)return e;const n=Je(Object.create(null),e);for(const i in t)n[i]=ht(e[i],t[i]);return n}function mr(){return{app:null,config:{isNativeTag:Aa,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Oc=0;function Qc(e,t){return function(i,o=null){be(i)||(i=Je({},i)),o!=null&&!We(o)&&(o=null);const s=mr(),r=new WeakSet,a=[];let c=!1;const d=s.app={_uid:Oc++,_component:i,_props:o,_container:null,_context:s,_instance:null,version:pu,get config(){return s.config},set config(u){},use(u,...h){return r.has(u)||(u&&be(u.install)?(r.add(u),u.install(d,...h)):be(u)&&(r.add(u),u(d,...h))),d},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),d},component(u,h){return h?(s.components[u]=h,d):s.components[u]},directive(u,h){return h?(s.directives[u]=h,d):s.directives[u]},mount(u,h,L){if(!c){const j=d._ceVNode||B(i,o);return j.appContext=s,L===!0?L="svg":L===!1&&(L=void 0),e(j,u,L),c=!0,d._container=u,u.__vue_app__=d,yo(j.component)}},onUnmount(u){a.push(u)},unmount(){c&&(At(a,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(u,h){return s.provides[u]=h,d},runWithContext(u){const h=_n;_n=d;try{return u()}finally{_n=h}}};return d}}let _n=null;const Uc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${vt(t)}Modifiers`]||e[`${vn(t)}Modifiers`];function Yc(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||Be;let o=n;const s=t.startsWith("update:"),r=s&&Uc(i,t.slice(7));r&&(r.trim&&(o=n.map(u=>Ge(u)?u.trim():u)),r.number&&(o=o.map(ro)));let a,c=i[a=Io(t)]||i[a=Io(vt(t))];!c&&s&&(c=i[a=Io(vn(t))]),c&&At(c,e,6,o);const d=i[a+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,At(d,e,6,o)}}const Pc=new WeakMap;function yr(e,t,n=!1){const i=n?Pc:t.emitsCache,o=i.get(e);if(o!==void 0)return o;const s=e.emits;let r={},a=!1;if(!be(e)){const c=d=>{const u=yr(d,t,!0);u&&(a=!0,Je(r,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!a?(We(e)&&i.set(e,null),null):(me(s)?s.forEach(c=>r[c]=null):Je(r,s),We(e)&&i.set(e,r),r)}function fo(e,t){return!e||!io(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),Pe(e,t[0].toLowerCase()+t.slice(1))||Pe(e,vn(t))||Pe(e,t))}function Zs(e){const{type:t,vnode:n,proxy:i,withProxy:o,propsOptions:[s],slots:r,attrs:a,emit:c,render:d,renderCache:u,props:h,data:L,setupState:j,ctx:C,inheritAttrs:O}=e,H=$i(e);let ee,$;try{if(n.shapeFlag&4){const w=o||i,Y=w;ee=$t(d.call(Y,w,u,h,j,L,C)),$=a}else{const w=t;ee=$t(w.length>1?w(h,{attrs:a,slots:r,emit:c}):w(h,null)),$=t.props?a:_c(a)}}catch(w){Sn.length=0,Ni(w,e,1),ee=B(Mt)}let q=ee;if($&&O!==!1){const w=Object.keys($),{shapeFlag:Y}=q;w.length&&Y&7&&(s&&w.some(oo)&&($=Wc($,s)),q=Nn(q,$,!1,!0))}if(n.dirs&&(q=Nn(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition){const w=uo(q.type)&&Hi(q)||q;yn(w,n.transition)}return ee=q,$i(H),ee}function Nr(e,t=!0){let n;for(let i=0;i<e.length;i++){const o=e[i];if(gi(o)){if(o.type!==Mt||o.children==="v-if"){if(n)return;n=o}}else return}return n}const _c=e=>{let t;for(const n in e)(n==="class"||n==="style"||io(n))&&((t||(t={}))[n]=e[n]);return t},Wc=(e,t)=>{const n={};for(const i in e)(!oo(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function Rc(e,t,n){const{props:i,children:o,component:s}=e,{props:r,children:a,patchFlag:c}=t,d=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?Ks(i,r,d):!!r;if(c&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const L=u[h];if(vr(r,i,L)&&!fo(d,L))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:i===r?!1:i?r?Ks(i,r,d):!0:!!r;return!1}function Ks(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let o=0;o<i.length;o++){const s=i[o];if(!Pe(e,s)||vr(t,e,s)&&!fo(n,s))return!0}return!1}function vr(e,t,n){const i=e[n],o=t[n];return n==="style"&&We(i)&&We(o)?!hn(i,o):i!==o}function Bc({vnode:e,parent:t,suspense:n},i){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.suspense.vnode.el=o.el=i,e=o),o===e)(e=t.vnode).el=i,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=i)}const xr={},jr=()=>Object.create(xr),Lr=e=>Object.getPrototypeOf(e)===xr;function $c(e,t,n,i=!1){const o={},s=jr();e.propsDefaults=Object.create(null),br(e,t,o,s);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:Vl(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Hc(e,t,n,i){const{props:o,attrs:s,vnode:{patchFlag:r}}=e,a=Ue(o),[c]=e.propsOptions;let d=!1;if((i||r>0)&&!(r&16)){if(r&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let L=u[h];if(fo(e.emitsOptions,L))continue;const j=t[L];if(c)if(Pe(s,L))j!==s[L]&&(s[L]=j,d=!0);else{const C=vt(L);o[C]=es(c,a,C,j,e,!1)}else j!==s[L]&&(s[L]=j,d=!0)}}}else{br(e,t,o,s)&&(d=!0);let u;for(const h in a)(!t||!Pe(t,h)&&((u=vn(h))===h||!Pe(t,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(o[h]=es(c,a,h,void 0,e,!0)):delete o[h]);if(s!==a)for(const h in s)(!t||!Pe(t,h))&&(delete s[h],d=!0)}d&&on(e.attrs,"set","")}function br(e,t,n,i){const[o,s]=e.propsOptions;let r=!1,a;if(t)for(let c in t){if(ei(c))continue;const d=t[c];let u;o&&Pe(o,u=vt(c))?!s||!s.includes(u)?n[u]=d:(a||(a={}))[u]=d:fo(e.emitsOptions,c)||(!(c in i)||d!==i[c])&&(i[c]=d,r=!0)}if(s){const c=Ue(n),d=a||Be;for(let u=0;u<s.length;u++){const h=s[u];n[h]=es(o,c,h,d[h],e,!Pe(d,h))}}return r}function es(e,t,n,i,o,s){const r=e[n];if(r!=null){const a=Pe(r,"default");if(a&&i===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&be(c)){const{propsDefaults:d}=o;if(n in d)i=d[n];else{const u=xi(o);i=d[n]=c.call(null,t),u()}}else i=c;o.ce&&o.ce._setProp(n,i)}r[0]&&(s&&!a?i=!1:r[1]&&(i===""||i===vn(n))&&(i=!0))}return i}const Gc=new WeakMap;function Dr(e,t,n=!1){const i=n?Gc:t.propsCache,o=i.get(e);if(o)return o;const s=e.props,r={},a=[];let c=!1;if(!be(e)){const u=h=>{c=!0;const[L,j]=Dr(h,t,!0);Je(r,L),j&&a.push(...j)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return We(e)&&i.set(e,wn),wn;if(me(s))for(let u=0;u<s.length;u++){const h=vt(s[u]);Js(h)&&(r[h]=Be)}else if(s)for(const u in s){const h=vt(u);if(Js(h)){const L=s[u],j=r[h]=me(L)||be(L)?{type:L}:Je({},L),C=j.type;let O=!1,H=!0;if(me(C))for(let ee=0;ee<C.length;++ee){const $=C[ee],q=be($)&&$.name;if(q==="Boolean"){O=!0;break}else q==="String"&&(H=!1)}else O=be(C)&&C.name==="Boolean";j[0]=O,j[1]=H,(O||Pe(j,"default"))&&a.push(h)}}const d=[r,a];return We(e)&&i.set(e,d),d}function Js(e){return e[0]!=="$"&&!ei(e)}const xs=e=>e==="_"||e==="_ctx"||e==="$stable",js=e=>me(e)?e.map($t):[$t(e)],Vc=(e,t,n)=>{if(t._n)return t;const i=Ke((...o)=>js(t(...o)),n);return i._c=!1,i},Ir=(e,t,n)=>{const i=e._ctx;for(const o in e){if(xs(o))continue;const s=e[o];if(be(s))t[o]=Vc(o,s,i);else if(s!=null){const r=js(s);t[o]=()=>r}}},Tr=(e,t)=>{const n=js(t);e.slots.default=()=>n},wr=(e,t,n)=>{for(const i in t)(n||!xs(i))&&(e[i]=t[i])},Fc=(e,t,n)=>{const i=e.slots=jr();if(e.vnode.shapeFlag&32){const o=t._;o?(wr(i,t,n),n&&Ca(i,"_",o,!0)):Ir(t,i)}else t&&Tr(e,t)},Zc=(e,t,n)=>{const{vnode:i,slots:o}=e;let s=!0,r=Be;if(i.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:wr(o,t,n):(s=!t.$stable,Ir(t,o)),r=t}else t&&(Tr(e,t),r={default:1});if(s)for(const a in o)!xs(a)&&r[a]==null&&delete o[a]},yt=eu;function Kc(e){return Jc(e)}function Jc(e,t){const n=lo();n.__VUE__=!0;const{insert:i,remove:o,patchProp:s,createElement:r,createText:a,createComment:c,setText:d,setElementText:u,parentNode:h,nextSibling:L,setScopeId:j=Vt,insertStaticContent:C}=e,O=(M,x,_,V=null,I=null,b=null,v=void 0,p=null,A=!!x.dynamicChildren)=>{if(M===x)return;M&&!In(M,x)&&(V=Ye(M),ne(M,I,b,!0),M=null),x.patchFlag===-2&&(A=!1,x.dynamicChildren=null),x.dynamicChildren&&M&&M.dynamicChildren&&M.dynamicChildren.hasOnce&&(x.dynamicChildren===wn&&(x.dynamicChildren=[]),x.dynamicChildren.hasOnce=!0);const{type:P,ref:ce,shapeFlag:U}=x;switch(P){case ho:H(M,x,_,V);break;case Mt:ee(M,x,_,V);break;case Yi:M==null&&$(x,_,V,v);break;case Ne:Q(M,x,_,V,I,b,v,p,A);break;default:U&1?Y(M,x,_,V,I,b,v,p,A):U&6?J(M,x,_,V,I,b,v,p,A):(U&64||U&128)&&P.process(M,x,_,V,I,b,v,p,A,Ze)}ce!=null&&I?ii(ce,M&&M.ref,b,x||M,!x):ce==null&&M&&M.ref!=null&&ii(M.ref,null,b,M,!0)},H=(M,x,_,V)=>{if(M==null)i(x.el=a(x.children),_,V);else{const I=x.el=M.el;x.children!==M.children&&d(I,x.children)}},ee=(M,x,_,V)=>{M==null?i(x.el=c(x.children||""),_,V):x.el=M.el},$=(M,x,_,V)=>{[M.el,M.anchor]=C(M.children,x,_,V,M.el,M.anchor)},q=({el:M,anchor:x},_,V)=>{let I;for(;M&&M!==x;)I=L(M),i(M,_,V),M=I;i(x,_,V)},w=({el:M,anchor:x})=>{let _;for(;M&&M!==x;)_=L(M),o(M),M=_;o(x)},Y=(M,x,_,V,I,b,v,p,A)=>{if(x.type==="svg"?v="svg":x.type==="math"&&(v="mathml"),M==null)D(x,_,V,I,b,v,p,A);else{const P=M.el&&M.el._isVueCE?M.el:null;try{P&&P._beginPatch(),g(M,x,I,b,v,p,A)}finally{P&&P._endPatch()}}},D=(M,x,_,V,I,b,v,p)=>{let A,P;const{props:ce,shapeFlag:U,transition:m,dirs:K}=M;if(A=M.el=r(M.type,b,ce&&ce.is,ce),U&8?u(A,M.children):U&16&&S(M.children,A,null,V,I,Co(M,b),v,p),K&&xn(M,null,V,"created"),N(A,M,M.scopeId,v,V),ce){for(const je in ce)je!=="value"&&!ei(je)&&s(A,je,null,ce[je],b,V);"value"in ce&&s(A,"value",null,ce.value,b),(P=ce.onVnodeBeforeMount)&&_t(P,V,M)}K&&xn(M,null,V,"beforeMount");const se=qc(I,m);se&&m.beforeEnter(A),i(A,x,_),((P=ce&&ce.onVnodeMounted)||se||K)&&yt(()=>{try{P&&_t(P,V,M),se&&m.enter(A),K&&xn(M,null,V,"mounted")}finally{}},I)},N=(M,x,_,V,I)=>{if(_&&j(M,_),V)for(let b=0;b<V.length;b++)j(M,V[b]);if(I){let b=I.subTree;if(x===b||Ar(b.type)&&(b.ssContent===x||b.ssFallback===x)){const v=I.vnode;N(M,v,v.scopeId,v.slotScopeIds,I.parent)}}},S=(M,x,_,V,I,b,v,p,A=0)=>{for(let P=A;P<M.length;P++){const ce=M[P]=p?nn(M[P]):$t(M[P]);O(null,ce,x,_,V,I,b,v,p)}},g=(M,x,_,V,I,b,v)=>{const p=x.el=M.el;let{patchFlag:A,dynamicChildren:P,dirs:ce}=x;A|=M.patchFlag&16;const U=M.props||Be,m=x.props||Be;let K;if(_&&jn(_,!1),(K=m.onVnodeBeforeUpdate)&&_t(K,_,x,M),ce&&xn(x,M,_,"beforeUpdate"),_&&jn(_,!0),P&&(!M.dynamicChildren||M.dynamicChildren.length!==P.length)&&(A=0,v=!1,P=null),(U.innerHTML&&m.innerHTML==null||U.textContent&&m.textContent==null)&&u(p,""),P?W(M.dynamicChildren,P,p,_,V,Co(x,I),b):v||pe(M,x,p,null,_,V,Co(x,I),b,!1),A>0){if(A&16)Z(p,U,m,_,I);else if(A&2&&U.class!==m.class&&s(p,"class",null,m.class,I),A&4&&s(p,"style",U.style,m.style,I),A&8){const se=x.dynamicProps;for(let je=0;je<se.length;je++){const Ae=se[je],Ce=U[Ae],He=m[Ae];(He!==Ce||Ae==="value")&&s(p,Ae,Ce,He,I,_)}}A&1&&M.children!==x.children&&u(p,x.children)}else!v&&P==null&&Z(p,U,m,_,I);((K=m.onVnodeUpdated)||ce)&&yt(()=>{K&&_t(K,_,x,M),ce&&xn(x,M,_,"updated")},V)},W=(M,x,_,V,I,b,v)=>{for(let p=0;p<x.length;p++){const A=M[p],P=x[p],ce=A.el||ts(A),U=ce&&(A.type===Ne||!In(A,P)||A.shapeFlag&198)?h(ce):_;O(A,P,U,null,V,I,b,v,!0)}},Z=(M,x,_,V,I)=>{if(x!==_){if(x!==Be)for(const b in x)!ei(b)&&!(b in _)&&s(M,b,x[b],null,I,V);for(const b in _){if(ei(b))continue;const v=_[b],p=x[b];v!==p&&b!=="value"&&s(M,b,p,v,I,V)}"value"in _&&s(M,"value",x.value,_.value,I)}},Q=(M,x,_,V,I,b,v,p,A)=>{const P=x.el=M?M.el:a(""),ce=x.anchor=M?M.anchor:a("");let{patchFlag:U,dynamicChildren:m,slotScopeIds:K}=x;K&&(p=p?p.concat(K):K),M==null?(i(P,_,V),i(ce,_,V),S(x.children||[],_,ce,I,b,v,p,A)):U>0&&U&64&&m&&M.dynamicChildren&&M.dynamicChildren.length===m.length?(W(M.dynamicChildren,m,_,I,b,v,p),(x.key!=null||I&&x===I.subTree)&&Ls(M,x,!0)):pe(M,x,_,ce,I,b,v,p,A)},J=(M,x,_,V,I,b,v,p,A)=>{x.slotScopeIds=p,M==null?x.shapeFlag&512?I.ctx.activate(x,_,V,v,A):ue(x,_,V,I,b,v,A):fe(M,x,A)},ue=(M,x,_,V,I,b,v)=>{const p=M.component=au(M,V,I);if(vi(M)&&(p.ctx.renderer=Ze),ru(p,!1,v),p.asyncDep){if(I&&I.registerDep(p,ae,v,b),!M.el){const A=p.subTree=B(Mt);ee(null,A,x,_),M.placeholder=A.el}}else ae(p,M,x,_,I,b,v)},fe=(M,x,_)=>{const V=x.component=M.component;if(Rc(M,x,_))if(V.asyncDep&&!V.asyncResolved){x.el=M.el,x.placeholder=M.placeholder,re(V,x,_);return}else V.next=x,V.update();else x.el=M.el,x.placeholder=M.placeholder,V.vnode=x},ae=(M,x,_,V,I,b,v)=>{const p=()=>{if(M.isMounted){let{next:U,bu:m,u:K,parent:se,vnode:je}=M;{const Ve=zr(M);if(Ve){U&&(U.el=je.el,re(M,U,v)),Ve.asyncDep.then(()=>{yt(()=>{M.isUnmounted||P()},I)});return}}let Ae=U,Ce;jn(M,!1),U?(U.el=je.el,re(M,U,v)):U=je,m&&Qi(m),(Ce=U.props&&U.props.onVnodeBeforeUpdate)&&_t(Ce,se,U,je),jn(M,!0);const He=Zs(M),et=M.subTree;M.subTree=He,O(et,He,h(et.el),Ye(et),M,I,b),U.el=He.el,Ae===null&&Bc(M,He.el),K&&yt(K,I),(Ce=U.props&&U.props.onVnodeUpdated)&&yt(()=>_t(Ce,se,U,je),I)}else{let U;const{el:m,props:K}=x,{bm:se,m:je,parent:Ae,root:Ce,type:He}=M,et=oi(x);jn(M,!1),se&&Qi(se),!et&&(U=K&&K.onVnodeBeforeMount)&&_t(U,Ae,x),jn(M,!0);{Ce.ce&&Ce.ce._hasShadowRoot()&&Ce.ce._injectChildStyle(He,M.parent?M.parent.type:void 0);const Ve=M.subTree=Zs(M);O(null,Ve,_,V,M,I,b),x.el=Ve.el}if(je&&yt(je,I),!et&&(U=K&&K.onVnodeMounted)){const Ve=x;yt(()=>_t(U,Ae,Ve),I)}(x.shapeFlag&256||Ae&&oi(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&M.a&&yt(M.a,I),M.isMounted=!0,x=_=V=null}};M.scope.on();const A=M.effect=new Ya(p);M.scope.off();const P=M.update=A.run.bind(A),ce=M.job=A.runIfDirty.bind(A);ce.i=M,ce.id=M.uid,A.scheduler=()=>ys(ce),jn(M,!0),P()},re=(M,x,_)=>{x.component=M;const V=M.vnode.props;M.vnode=x,M.next=null,Hc(M,x.props,V,_),Zc(M,x.children,_),Kt(),nr(M),Jt()},pe=(M,x,_,V,I,b,v,p,A=!1)=>{const P=M&&M.children,ce=M?M.shapeFlag:0,U=x.children,{patchFlag:m,shapeFlag:K}=x;if(m>0){if(m&128){z(P,U,_,V,I,b,v,p,A);return}else if(m&256){te(P,U,_,V,I,b,v,p,A);return}}K&8?(ce&16&&we(P,I,b),U!==P&&u(_,U)):ce&16?K&16?z(P,U,_,V,I,b,v,p,A):we(P,I,b,!0):(ce&8&&u(_,""),K&16&&S(U,_,V,I,b,v,p,A))},te=(M,x,_,V,I,b,v,p,A)=>{M=M||wn,x=x||wn;const P=M.length,ce=x.length,U=Math.min(P,ce);let m;for(m=0;m<U;m++){const K=x[m]=A?nn(x[m]):$t(x[m]);O(M[m],K,_,null,I,b,v,p,A)}P>ce?we(M,I,b,!0,!1,U):S(x,_,V,I,b,v,p,A,U)},z=(M,x,_,V,I,b,v,p,A)=>{let P=0;const ce=x.length;let U=M.length-1,m=ce-1;for(;P<=U&&P<=m;){const K=M[P],se=x[P]=A?nn(x[P]):$t(x[P]);if(In(K,se))O(K,se,_,null,I,b,v,p,A);else break;P++}for(;P<=U&&P<=m;){const K=M[U],se=x[m]=A?nn(x[m]):$t(x[m]);if(In(K,se))O(K,se,_,null,I,b,v,p,A);else break;U--,m--}if(P>U){if(P<=m){const K=m+1,se=K<ce?x[K].el:V;for(;P<=m;)O(null,x[P]=A?nn(x[P]):$t(x[P]),_,se,I,b,v,p,A),P++}}else if(P>m)for(;P<=U;)ne(M[P],I,b,!0),P++;else{const K=P,se=P,je=new Map;for(P=se;P<=m;P++){const it=x[P]=A?nn(x[P]):$t(x[P]);it.key!=null&&je.set(it.key,P)}let Ae,Ce=0;const He=m-se+1;let et=!1,Ve=0;const tt=new Array(He);for(P=0;P<He;P++)tt[P]=0;for(P=K;P<=U;P++){const it=M[P];if(Ce>=He){ne(it,I,b,!0);continue}let gt;if(it.key!=null)gt=je.get(it.key);else for(Ae=se;Ae<=m;Ae++)if(tt[Ae-se]===0&&In(it,x[Ae])){gt=Ae;break}gt===void 0?ne(it,I,b,!0):(tt[gt-se]=P+1,gt>=Ve?Ve=gt:et=!0,O(it,x[gt],_,null,I,b,v,p,A),Ce++)}const St=et?Xc(tt):wn;for(Ae=St.length-1,P=He-1;P>=0;P--){const it=se+P,gt=x[it],Xt=x[it+1],Un=it+1<ce?Xt.el||ts(Xt):V;tt[P]===0?O(null,gt,_,Un,I,b,v,p,A):et&&(Ae<0||P!==St[Ae]?R(gt,_,Un,2):Ae--)}}},R=(M,x,_,V,I=null)=>{const{el:b,type:v,transition:p,children:A,shapeFlag:P}=M;if(P&6){R(M.component.subTree,x,_,V);return}if(P&128){M.suspense.move(x,_,V);return}if(P&64){v.move(M,x,_,Ze);return}if(v===Ne){i(b,x,_);for(let U=0;U<A.length;U++)R(A[U],x,_,V);i(M.anchor,x,_);return}if(v===Yi){q(M,x,_);return}if(V!==2&&P&1&&p)if(V===0)p.persisted&&!b[Tt]?i(b,x,_):(p.beforeEnter(b),i(b,x,_),yt(()=>p.enter(b),I));else{const{leave:U,delayLeave:m,afterLeave:K}=p,se=()=>{M.ctx.isUnmounted?o(b):i(b,x,_)},je=()=>{const Ae=b._isLeaving||!!b[Tt];b._isLeaving&&b[Tt](!0),p.persisted&&!Ae?se():U(b,()=>{se(),K&&K()})};m?m(b,se,je):je()}else i(b,x,_)},ne=(M,x,_,V=!1,I=!1)=>{const{type:b,props:v,ref:p,children:A,dynamicChildren:P,shapeFlag:ce,patchFlag:U,dirs:m,cacheIndex:K,memo:se}=M;if((U===-2||P&&P.hasOnce)&&(I=!1),p!=null&&(Kt(),ii(p,null,_,M,!0),Jt()),K!=null&&(!M.ctx||M.ctx===x)&&(x.renderCache[K]=void 0),ce&256){x.ctx.deactivate(M);return}const je=ce&1&&m,Ae=!oi(M);let Ce;if(Ae&&(Ce=v&&v.onVnodeBeforeUnmount)&&_t(Ce,x,M),ce&6)Le(M.component,_,V);else{if(ce&128){M.suspense.unmount(_,V);return}je&&xn(M,null,x,"beforeUnmount"),ce&64?M.type.remove(M,x,_,Ze,V):P&&!P.hasOnce&&(b!==Ne||U>0&&U&64)?we(P,x,_,!1,!0):(b===Ne&&U&384||!I&&ce&16)&&we(A,x,_),V&&le(M)}const He=se!=null&&K==null;(Ae&&(Ce=v&&v.onVnodeUnmounted)||je||He)&&yt(()=>{Ce&&_t(Ce,x,M),je&&xn(M,null,x,"unmounted"),He&&(M.el=null)},_)},le=M=>{const{type:x,el:_,anchor:V,transition:I}=M,b=x===Ne;if(b&&!I){ve(_,V);return}if(x===Yi){w(M),I&&!I.persisted&&I.afterLeave&&I.afterLeave();return}const v=b?Mi(M):M,p=()=>{b?h(_)&&ve(_,V):o(_),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(v&&v.shapeFlag&1&&I&&!I.persisted){const{leave:A,delayLeave:P}=I,ce=v.el,U=()=>A(ce,p);P?P(ce,p,U):U()}else p()},ve=(M,x)=>{let _;for(;M!==x;)_=L(M),o(M),M=_;o(x)},Le=(M,x,_)=>{const{bum:V,scope:I,job:b,subTree:v,um:p,m:A,a:P}=M;qs(A),qs(P),V&&Qi(V),I.stop(),b?(b.flags|=8,ne(v,M,x,_)):M.vnode.el&&v&&(v.transition=M.vnode.transition,ne(v,M,x,_)),p&&yt(p,x),yt(()=>{M.isUnmounted=!0},x)},we=(M,x,_,V=!1,I=!1,b=0)=>{for(let v=b;v<M.length;v++)ne(M[v],x,_,V,I)},Ye=M=>{if(M.shapeFlag&6)return Ye(M.component.subTree);if(M.shapeFlag&128)return M.suspense.next();const x=L(M.anchor||M.el),_=x&&x[lr];return _?L(_):x},Xe=(M,x,_)=>{const V=M&&x._vnode?void 0:M&&M.component?M.component.uid:su();sc(()=>{M==null?x._vnode&&ne(x._vnode,null,null,!0):O(x._vnode||null,M,x,null,null,null,_),x._vnode=M},V)},Ze={p:O,um:ne,m:R,r:le,mt:ue,mc:S,pc:pe,pbc:W,n:Ye,o:e};return{render:Xe,hydrate:void 0,createApp:Qc(Xe)}}function Co({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function jn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function qc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ls(e,t,n=!1){const i=e.children,o=t.children;if(me(i)&&me(o))for(let s=0;s<i.length;s++){const r=i[s];let a=o[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[s]=nn(o[s]),a.el=r.el),!n&&a.patchFlag!==-2&&Ls(r,a)),a.type===ho&&(a.patchFlag===-1&&(a=o[s]=nn(a)),a.el=r.el),a.type===Mt&&!a.el&&(a.el=r.el)}}function Xc(e){const t=e.slice(),n=[0];let i,o,s,r,a;const c=e.length;for(i=0;i<c;i++){const d=e[i];if(d!==0){if(o=n[n.length-1],e[o]<d){t[i]=o,n.push(i);continue}for(s=0,r=n.length-1;s<r;)a=s+r>>1,e[n[a]]<d?s=a+1:r=a;d<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}for(s=n.length,r=n[s-1];s-- >0;)n[s]=r,r=t[r];return n}function zr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:zr(t)}function qs(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ts(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?ts(t.subTree):null}const Ar=e=>e.__isSuspense;function eu(e,t){t&&t.pendingBranch?me(e)?t.effects.push(...e):t.effects.push(e):oc(e)}const Ne=Symbol.for("v-fgt"),ho=Symbol.for("v-txt"),Mt=Symbol.for("v-cmt"),Yi=Symbol.for("v-stc"),Sn=[];let bt=null;function y(e=!1){Sn.push(bt=e?null:[])}function kr(){Sn.pop(),bt=Sn[Sn.length-1]||null}let pi=1;function Fi(e,t=!1){pi+=e,e<0&&bt&&t&&(bt.hasOnce=!0)}function Sr(e){return e.dynamicChildren=pi>0?bt||wn:null,kr(),pi>0&&bt&&bt.push(e),e}function k(e,t,n,i,o,s){return Sr(l(e,t,n,i,o,s,!0))}function xe(e,t,n,i,o){return Sr(B(e,t,n,i,o,!0))}function gi(e){return e?e.__v_isVNode===!0:!1}function In(e,t){return e.type===t.type&&e.key===t.key}const Er=({key:e})=>e??null,Pi=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ge(e)||pt(e)||be(e)?{i:Lt,r:e,k:t,f:!!n}:e:null);function l(e,t=null,n=null,i=0,o=null,s=e===Ne?0:1,r=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Er(t),ref:t&&Pi(t),scopeId:sr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Lt};return a?(Zi(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=Ge(n)?8:16),pi>0&&!r&&bt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&bt.push(c),c}const B=tu;function tu(e,t=null,n=null,i=0,o=null,s=!1){if((!e||e===gr)&&(e=Mt),gi(e)){const a=Nn(e,t,!0);return n&&Zi(a,n),pi>0&&!s&&bt&&(a.shapeFlag&6?bt[bt.indexOf(e)]=a:bt.push(a)),a.patchFlag=-2,a}if(Mu(e)&&(e=e.__vccOpts),t){t=nu(t);let{class:a,style:c}=t;a&&!Ge(a)&&(t.class=he(a)),We(c)&&(ms(c)&&!me(c)&&(c=Je({},c)),t.style=Ft(c))}const r=Ge(e)?1:Ar(e)?128:uo(e)?64:We(e)?4:be(e)?2:0;return l(e,t,n,i,o,r,s,!0)}function nu(e){return e?ms(e)||Lr(e)?Je({},e):e:null}function Nn(e,t,n=!1,i=!1){const{props:o,ref:s,patchFlag:r,children:a,transition:c}=e,d=t?iu(o||{},t):o,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Er(d),ref:t&&t.ref?n&&s?me(s)?s.concat(Pi(t)):[s,Pi(t)]:Pi(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ne?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Nn(e.ssContent),ssFallback:e.ssFallback&&Nn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&i&&yn(u,c.clone(u)),u}function De(e=" ",t=0){return B(ho,null,e,t)}function Cr(e,t){const n=B(Yi,null,e);return n.staticCount=t,n}function ge(e="",t=!1){return t?(y(),xe(Mt,null,e)):B(Mt,null,e)}function $t(e){return e==null||typeof e=="boolean"?B(Mt):me(e)?B(Ne,null,e.slice()):gi(e)?nn(e):B(ho,null,String(e))}function nn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Nn(e)}function Zi(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(me(t))n=16;else if(typeof t=="object")if(i&65){const o=t.default;o&&(o._c&&(o._d=!1),Zi(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!Lr(t)?t._ctx=Lt:o===3&&Lt&&(Lt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(be(t)){if(i&65){Zi(e,{default:t});return}t={default:t,_ctx:Lt},n=32}else t=String(t),i&64?(n=16,t=[De(t)]):n=8;e.children=t,e.shapeFlag|=n}function iu(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const o in i)if(o==="class")t.class!==i.class&&(t.class=he([t.class,i.class]));else if(o==="style")t.style=Ft([t.style,i.style]);else if(io(o)){const s=t[o],r=i[o];r&&s!==r&&!(me(s)&&s.includes(r))?t[o]=s?[].concat(s,r):r:r==null&&s==null&&!oo(o)&&(t[o]=r)}else o!==""&&(t[o]=i[o])}return t}function _t(e,t,n,i=null){At(e,t,7,[n,i])}const ou=mr();let Or=0;function su(){return Or}function au(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||ou,s={uid:Or++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dr(i,o),emitsOptions:yr(i,o),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:i.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Yc.bind(null,s),e.ce&&e.ce(s),s}let rt=null;const mo=()=>rt||Lt;let Ki,fi;{const e=lo(),t=(n,i)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(i),s=>{o.length>1?o.forEach(r=>r(s)):o[0](s)}};Ki=t("__VUE_INSTANCE_SETTERS__",n=>rt=n),fi=t("__VUE_SSR_SETTERS__",n=>Wn=n)}const xi=e=>{const t=rt;return Ki(e),e.scope.on(),()=>{e.scope.off(),Ki(t)}},Xs=()=>{rt&&rt.scope.off(),Ki(null)};function Qr(e){return e.vnode.shapeFlag&4}let Wn=!1;function ru(e,t=!1,n=!1){t&&fi(t);const{props:i,children:o}=e.vnode,s=Qr(e);$c(e,i,s,t),Fc(e,o,n||t);const r=s?lu(e,t):void 0;return t&&fi(!1),r}function lu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,zc);const{setup:i}=n;if(i){Kt();const o=e.setupContext=i.length>1?uu(e):null,s=xi(e),r=yi(i,e,0,[e.props,o]),a=ka(r);if(Jt(),s(),(a||e.sp)&&!oi(e)&&vs(e),a){if(r.then(Xs,Xs),t)return r.then(c=>{fi(!0);try{ea(e,c,t)}finally{fi(!1)}}).catch(c=>{Ni(c,e,0)});e.asyncDep=r}else ea(e,r)}else Ur(e)}function ea(e,t,n){be(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:We(t)&&(e.setupState=Xa(t)),Ur(e)}function Ur(e,t,n){const i=e.type;e.render||(e.render=i.render||Vt);{const o=xi(e);Kt();try{Ac(e)}finally{Jt(),o()}}}const cu={get(e,t){return ut(e,"get",""),e[t]}};function uu(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,cu),slots:e.slots,emit:e.emit,expose:t}}function yo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Xa(Fl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in si)return si[n](e)},has(t,n){return n in t||n in si}})):e.proxy}function du(e,t=!0){return be(e)?e.displayName||e.name:e.name||t&&e.__name}function Mu(e){return be(e)&&"__vccOpts"in e}const Te=(e,t)=>Xl(e,t,Wn);function Ee(e,t,n){try{Fi(-1);const i=arguments.length;return i===2?We(t)&&!me(t)?gi(t)?B(e,null,[t]):B(e,t):B(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&gi(n)&&(n=[n]),B(e,t,n))}finally{Fi(1)}}const pu="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ns;const ta=typeof window<"u"&&window.trustedTypes;if(ta)try{ns=ta.createPolicy("vue",{createHTML:e=>e})}catch{}const Yr=ns?e=>ns.createHTML(e):e=>e,gu="http://www.w3.org/2000/svg",fu="http://www.w3.org/1998/Math/MathML",tn=typeof document<"u"?document:null,na=tn&&tn.createElement("template"),hu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const o=t==="svg"?tn.createElementNS(gu,e):t==="mathml"?tn.createElementNS(fu,e):n?tn.createElement(e,{is:n}):tn.createElement(e);return e==="select"&&i&&i.multiple!=null&&o.setAttribute("multiple",i.multiple),o},createText:e=>tn.createTextNode(e),createComment:e=>tn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>tn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,o,s){const r=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{na.innerHTML=Yr(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const a=na.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},cn="transition",Gn="animation",Rn=Symbol("_vtc"),Pr={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},_r=Je({},ur,Pr),mu=e=>(e.displayName="Transition",e.props=_r,e),dt=mu((e,{slots:t})=>Ee(fc,Wr(e),t)),Ln=(e,t=[])=>{me(e)?e.forEach(n=>n(...t)):e&&e(...t)},ia=e=>e?me(e)?e.some(t=>t.length>1):e.length>1:!1;function Wr(e){const t={};for(const Q in e)Q in Pr||(t[Q]=e[Q]);if(e.css===!1)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:d=r,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:L=`${n}-leave-active`,leaveToClass:j=`${n}-leave-to`}=e,C=yu(o),O=C&&C[0],H=C&&C[1],{onBeforeEnter:ee,onEnter:$,onEnterCancelled:q,onLeave:w,onLeaveCancelled:Y,onBeforeAppear:D=ee,onAppear:N=$,onAppearCancelled:S=q}=t,g=(Q,J,ue,fe)=>{Q._enterCancelled=fe,Mn(Q,J?u:a),Mn(Q,J?d:r),ue&&ue()},W=(Q,J)=>{Q._isLeaving=!1,Mn(Q,h),Mn(Q,j),Mn(Q,L),J&&J()},Z=Q=>(J,ue)=>{const fe=Q?N:$,ae=()=>g(J,Q,ue);Ln(fe,[J,ae]),oa(()=>{Mn(J,Q?c:s),Wt(J,Q?u:a),ia(fe)||sa(J,i,O,ae)})};return Je(t,{onBeforeEnter(Q){Ln(ee,[Q]),Wt(Q,s),Wt(Q,r)},onBeforeAppear(Q){Ln(D,[Q]),Wt(Q,c),Wt(Q,d)},onEnter:Z(!1),onAppear:Z(!0),onLeave(Q,J){Q._isLeaving=!0;const ue=()=>W(Q,J);Wt(Q,h),Q._enterCancelled?(Wt(Q,L),is(Q)):(is(Q),Wt(Q,L)),oa(()=>{Q._isLeaving&&(Mn(Q,h),Wt(Q,j),ia(w)||sa(Q,i,H,ue))}),Ln(w,[Q,ue])},onEnterCancelled(Q){g(Q,!1,void 0,!0),Ln(q,[Q])},onAppearCancelled(Q){g(Q,!0,void 0,!0),Ln(S,[Q])},onLeaveCancelled(Q){W(Q),Ln(Y,[Q])}})}function yu(e){if(e==null)return null;if(We(e))return[Oo(e.enter),Oo(e.leave)];{const t=Oo(e);return[t,t]}}function Oo(e){return Nl(e)}function Wt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Rn]||(e[Rn]=new Set)).add(t)}function Mn(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const n=e[Rn];n&&(n.delete(t),n.size||(e[Rn]=void 0))}function oa(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Nu=0;function sa(e,t,n,i){const o=e._endId=++Nu,s=()=>{o===e._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:r,timeout:a,propCount:c}=Rr(e,t);if(!r)return i();const d=r+"end";let u=0;const h=()=>{e.removeEventListener(d,L),s()},L=j=>{j.target===e&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),e.addEventListener(d,L)}function Rr(e,t){const n=window.getComputedStyle(e),i=C=>(n[C]||"").split(", "),o=i(`${cn}Delay`),s=i(`${cn}Duration`),r=aa(o,s),a=i(`${Gn}Delay`),c=i(`${Gn}Duration`),d=aa(a,c);let u=null,h=0,L=0;t===cn?r>0&&(u=cn,h=r,L=s.length):t===Gn?d>0&&(u=Gn,h=d,L=c.length):(h=Math.max(r,d),u=h>0?r>d?cn:Gn:null,L=u?u===cn?s.length:c.length:0);const j=u===cn&&/\b(?:transform|all)(?:,|$)/.test(i(`${cn}Property`).toString());return{type:u,timeout:h,propCount:L,hasTransform:j}}function aa(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>ra(n)+ra(e[i])))}function ra(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function is(e){return(e?e.ownerDocument:document).body.offsetHeight}function vu(e,t,n){const i=e[Rn];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ji=Symbol("_vod"),bs=Symbol("_vsh"),Ct={name:"show",beforeMount(e,{value:t},{transition:n}){e[Ji]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Vn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:i}){!t!=!n&&(i?t?(i.beforeEnter(e),Vn(e,!0),i.enter(e)):i.leave(e,()=>{Vn(e,!1)}):Vn(e,t))},beforeUnmount(e,{value:t}){Vn(e,t)}};function Vn(e,t){e.style.display=t?e[Ji]:"none",e[bs]=!t}const xu=Symbol(""),ju=/(?:^|;)\s*display\s*:/;function Lu(e,t,n){const i=e.style,o=Ge(n);let s=!1;if(n&&!o){if(t)if(Ge(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();n[a]==null&&Xn(i,a,"")}else for(const r in t)n[r]==null&&Xn(i,r,"");for(const r in n){r==="display"&&(s=!0);const a=n[r];a!=null?Du(e,r,!Ge(t)&&t?t[r]:void 0,a)||Xn(i,r,a):Xn(i,r,"")}}else if(o){if(t!==n){const r=i[xu];r&&(n+=";"+r),i.cssText=n,s=ju.test(n)}}else t&&e.removeAttribute("style");Ji in e&&((!o||t!==n)&&(e[Ji]=s?i.display:""),e[bs]&&(i.display="none"))}const Si=/\s*!important$/;function Xn(e,t,n){if(me(n))n.forEach(i=>Xn(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))Si.test(n)?e.setProperty(t,n.replace(Si,""),"important"):e.setProperty(t,n);else{const i=bu(e,t);Si.test(n)?e.setProperty(vn(i),n.replace(Si,""),"important"):e[i]=n}}const la=["Webkit","Moz","ms"],Qo={};function bu(e,t){const n=Qo[t];if(n)return n;let i=vt(t);if(i!=="filter"&&i in e)return Qo[t]=i;i=ao(i);for(let o=0;o<la.length;o++){const s=la[o]+i;if(s in e)return Qo[t]=s}return t}function Du(e,t,n,i){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Ge(i)&&n===i}const ca="http://www.w3.org/1999/xlink";function ua(e,t,n,i,o,s=Dl(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ca,t.slice(6,t.length)):e.setAttributeNS(ca,t,n):n==null||s&&!Oa(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Zt(n)?String(n):n)}function da(e,t,n,i,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Yr(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Oa(n):n==null&&a==="string"?(n="",r=!0):a==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(o||t)}function Tn(e,t,n,i){e.addEventListener(t,n,i)}function Iu(e,t,n,i){e.removeEventListener(t,n,i)}const Ma=Symbol("_vei");function Tu(e,t,n,i,o=null){const s=e[Ma]||(e[Ma]={}),r=s[t];if(i&&r)r.value=i;else{const[a,c]=Au(t);if(i){const d=s[t]=Eu(i,o);Tn(e,a,d,c)}else r&&(Iu(e,a,r,c),s[t]=void 0)}}const wu=/(Once|Passive|Capture)$/,zu=/^on:?(?:Once|Passive|Capture)$/;function Au(e){let t,n;for(;(n=e.match(wu))&&!zu.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):vn(e.slice(2)),t]}let Uo=0;const ku=Promise.resolve(),Su=()=>Uo||(ku.then(()=>Uo=0),Uo=Date.now());function Eu(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const o=n.value;if(me(o)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const r=o.slice(),a=[i];for(let c=0;c<r.length&&!i._stopped;c++){const d=r[c];d&&At(d,t,5,a)}}else At(o,t,5,[i])};return n.value=e,n.attached=Su(),n}const pa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Cu=(e,t,n,i,o,s)=>{const r=o==="svg";t==="class"?vu(e,i,r):t==="style"?Lu(e,n,i):io(t)?oo(t)||Tu(e,t,n,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ou(e,t,i,r))?(da(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ua(e,t,i,r,s,t!=="value")):e._isVueCE&&(Qu(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!Ge(i)))?da(e,vt(t),i,s,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),ua(e,t,i,r))};function Ou(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&pa(t)&&be(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return pa(t)&&Ge(n)?!1:t in e}function Qu(e,t){const n=e._def.props;if(!n)return!1;const i=vt(t);return Array.isArray(n)?n.some(o=>vt(o)===i):Object.keys(n).some(o=>vt(o)===i)}const Br=new WeakMap,$r=new WeakMap,qi=Symbol("_moveCb"),ga=Symbol("_enterCb"),os=new WeakMap,Uu=e=>(delete e.props.mode,e),Yu=Uu({name:"TransitionGroup",props:Je({},_r,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=mo(),i=cr();let o,s,r,a;const c=()=>(a===void 0&&(a=o.length>0&&Gu(o[0].el,n.vnode.el,fa(e))),a);return po(()=>{if(os.delete(n),!c()){o=[],r=void 0;return}const d=fa(e);o.forEach(_u);const u=r&&Hu(r,n.vnode.el);r=void 0,o.forEach(L=>Wu(L,u));const h=o.filter(Ru);is(n.vnode.el),h.forEach(L=>{const j=L.el,C=j.style;Wt(j,d),C.transform=C.webkitTransform=C.transitionDuration="";const O=j[qi]=H=>{H&&H.target!==j||(!H||H.propertyName.endsWith("transform"))&&(j.removeEventListener("transitionend",O),j[qi]=null,Mn(j,d))};j.addEventListener("transitionend",O)}),o=[]}),()=>{const d=Ue(e),u=Wr(d);let h=d.tag||Ne;if(o=[],a=void 0,s)for(let L=0;L<s.length;L++){const j=s[L];j.el&&j.el instanceof Element&&!j.el[bs]&&(o.push(j),yn(j,di(j,u,i,n)),Br.set(j,No(j.el)))}s=t.default?Ns(t.default()):[];for(let L=0;L<s.length;L++){const j=s[L];j.key!=null&&yn(j,di(j,u,i,n))}return o.length&&(r=Bu(n),os.set(n,c)),B(h,null,s)}}}),Pu=Yu;function _u(e){const t=e.el;t[qi]&&t[qi](),t[ga]&&t[ga]()}function fa(e){return e.moveClass||`${e.name||"v"}-move`}function Wu(e,t){$r.set(e,No(e.el,t))}function Ru(e){const t=Br.get(e),n=$r.get(e),i=t.left-n.left,o=t.top-n.top;if(i||o){const s=e.el,r=s.style,a=s.getBoundingClientRect();let c=1,d=1;return s.offsetWidth&&(c=a.width/s.offsetWidth),s.offsetHeight&&(d=a.height/s.offsetHeight),(!Number.isFinite(c)||c===0)&&(c=1),(!Number.isFinite(d)||d===0)&&(d=1),Math.abs(c-1)<.01&&(c=1),Math.abs(d-1)<.01&&(d=1),r.transform=r.webkitTransform=`translate(${i/c}px,${o/d}px)`,r.transitionDuration="0s",e}}function No(e,t){const n=e.getBoundingClientRect();return{left:n.left-(t?t.left:0),top:n.top-(t?t.top:0)}}function Bu(e){let t;for(let n=e.parent;n;n=n.parent){const i=os.get(n);if(i){const o=$u(n.vnode.el,e.vnode.el);o&&(t||(t=[])).push(Je(No(o),{item:o,willMove:i}))}}return t}function $u(e,t){const n=e.nodeType===1?e:e.parentNode;for(;t&&t.parentNode!==n;)t=t.parentNode;if(t&&t.nodeType===1)return t}function Hu(e,t){const n=e.find(i=>i.willMove()&&i.item.contains(t));return n&&No(n.item,n)}function Gu(e,t,n){const i=e.cloneNode(),o=e[Rn];o&&o.forEach(a=>{a.split(/\s+/).forEach(c=>c&&i.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(i);const{hasTransform:r}=Rr(i);return s.removeChild(i),r}const Xi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return me(t)?n=>Qi(t,n):t};function Vu(e){e.target.composing=!0}function ha(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const zn=Symbol("_assign"),Ei=Symbol("_initialValue");function Yo(e,t,n){return t&&(e=e.trim()),n&&(e=ro(e)),e}const Ds={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e.parentNode&&(e.type==="text"?e[Ei]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Ei]=e.defaultValue.replace(/\r\n?/g,`
`))),e[zn]=Xi(o);const s=i||o.props&&o.props.type==="number";Tn(e,t?"change":"input",r=>{r.target.composing||e[zn](Yo(e.value,n,s))}),(n||s)&&Tn(e,"change",()=>{e.value=Yo(e.value,n,s)}),t||(Tn(e,"compositionstart",Vu),Tn(e,"compositionend",ha),Tn(e,"change",ha))},mounted(e,{value:t,modifiers:{trim:n,number:i}}){const o=t??"",s=e[Ei];delete e[Ei],s!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==s?e[zn](Yo(e.value,n,i)):e.value=o},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:i,trim:o,number:s}},r){if(e[zn]=Xi(r),e.composing)return;const a=(s||e.type==="number")&&!/^0\d/.test(e.value)?ro(e.value):e.value,c=t??"";if(a===c)return;const d=e.getRootNode();(d instanceof Document||d instanceof ShadowRoot)&&d.activeElement===e&&e.type!=="range"&&(i&&t===n||o&&e.value.trim()===c)||(e.value=c)}},Fu={deep:!0,created(e,{value:t,modifiers:{number:n}},i){e._modelValue=t,Tn(e,"change",()=>{const o=Array.prototype.filter.call(e.options,c=>c.selected).map(c=>n?ro(eo(c)):eo(c)),s=e.multiple,r=s?En(e._modelValue)?new Set(o):o:o[0],a=e._pendingValue=[s,s?me(r)?o.slice():o:r];try{e[zn](r)}finally{ke(()=>{e._pendingValue===a&&(e._pendingValue=void 0)})}}),e[zn]=Xi(i)},mounted(e,{value:t}){ma(e,t)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[zn]=Xi(n)},updated(e,{value:t}){const n=e._pendingValue;e._pendingValue=void 0,(!n||n[0]!==e.multiple||!Zu(t,n[1],n[0]))&&ma(e,t)}};function Zu(e,t,n){if(!n||me(e))return hn(e,t);if(En(e)){if(e.size!==t.length)return!1;for(const i of t)if(!e.has(i))return!1;return!0}return!1}function ma(e,t){const n=e.multiple,i=me(t);if(!(n&&!i&&!En(t))){for(let o=0,s=e.options.length;o<s;o++){const r=e.options[o],a=eo(r);if(n)if(i){const c=typeof a;c==="string"||c==="number"?r.selected=t.some(d=>String(d)===String(a)):r.selected=wl(t,a)>-1}else r.selected=t.has(a);else if(hn(eo(r),t)){e.selectedIndex!==o&&(e.selectedIndex=o);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function eo(e){return"_value"in e?e._value:e.value}const Ku=["ctrl","shift","alt","meta"],Ju={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Ku.some(n=>e[`${n}Key`]&&!t.includes(n))},an=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=((o,...s)=>{for(let r=0;r<t.length;r++){const a=Ju[t[r]];if(a&&a(o,t))return}return e(o,...s)}))},qu={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ai=(e,t)=>{const n=e._withKeys||(e._withKeys={}),i=t.join(".");return n[i]||(n[i]=(o=>{if(!("key"in o))return;const s=vn(o.key);if(t.some(r=>r===s||qu[r]===s))return e(o)}))},Xu=Je({patchProp:Cu},hu);let ya;function ed(){return ya||(ya=Kc(Xu))}const td=((...e)=>{const t=ed().createApp(...e),{mount:n}=t;return t.mount=i=>{const o=id(i);if(!o)return;const s=t._component;!be(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const r=n(o,!1,nd(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},t});function nd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function id(e){return Ge(e)?document.querySelector(e):e}const od="modulepreload",sd=function(e){return"/harness-ui/"+e},Na={},ad=function(t,n,i){let o=Promise.resolve();if(n&&n.length>0){let r=function(d){return Promise.all(d.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=r(n.map(d=>{if(d=sd(d),d in Na)return;Na[d]=!0;const u=d.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${h}`))return;const L=document.createElement("link");if(L.rel=u?"stylesheet":od,u||(L.as="script"),L.crossOrigin="",L.href=d,c&&L.setAttribute("nonce",c),document.head.appendChild(L),u)return new Promise((j,C)=>{L.addEventListener("load",j),L.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return o.then(r=>{for(const a of r||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ci={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=({size:e,strokeWidth:t=2,absoluteStrokeWidth:n,color:i,iconNode:o,name:s,class:r,...a},{slots:c})=>Ee("svg",{...Ci,width:e||Ci.width,height:e||Ci.height,stroke:i||Ci.stroke,"stroke-width":n?Number(t)*24/Number(e):t,class:["lucide",`lucide-${rd(s??"icon")}`],...a},[...o.map(d=>Ee(...d)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=(e,t)=>(n,{slots:i})=>Ee(ld,{...n,iconNode:t,name:e},i);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=Re("ArrowDownIcon",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=Re("ArrowLeftIcon",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=Re("ArrowUpRightIcon",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=Re("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=Re("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=Re("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=Re("CircleAlertIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=Re("ClockIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=Re("CpuIcon",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=Re("FileSearchIcon",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=Re("FileTextIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=Re("GithubIcon",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=Re("GlobeIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=Re("LayoutListIcon",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=Re("ListChecksIcon",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=Re("LoaderCircleIcon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=Re("MessageSquareIcon",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=Re("MinusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=Re("PanelRightOpenIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=Re("PaperclipIcon",[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=Re("PencilIcon",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=Re("PlusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=Re("SearchIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=Re("SparklesIcon",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=Re("TerminalIcon",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=Re("TriangleAlertIcon",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=Re("UserRoundIcon",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=Re("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),jd=`<script setup lang="ts">
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
`,Ld=`<script setup lang="ts">
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
`,bd=`<script setup lang="ts">
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
`,Dd=`<script setup lang="ts">
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
`,Id=`<script setup lang="ts">
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
`,Td=`<script setup lang="ts">
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
`,wd=`<script setup lang="ts">
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
`,zd=`<script setup lang="ts">
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
`,Ad=`<script setup lang="ts">
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
`,kd={class:"composer-demo"},Sd={key:0,class:"attachments"},Ed=["aria-label","disabled","onClick"],Cd={class:"composer-field"},Od=["value","placeholder","disabled"],Qd={class:"toolbar"},Ud=["disabled"],Yd=["disabled"],Pd=["aria-expanded","disabled"],_d={class:"model-button-label"},Wd=["disabled","aria-checked","onClick"],Rd={class:"model-option-label"},Bd=["disabled"],$d=Fe({__name:"ChatComposer",props:{modelValue:{default:""},placeholder:{default:"What would you like to build?"},models:{default:()=>["Claude Sonnet 4.6","GPT-5.4","Gemini 3.1 Pro"]},initialModel:{default:"Claude Sonnet 4.6"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","send","model-change"],setup(e,{emit:t}){const n={claude:"data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+Q2xhdWRlPC90aXRsZT48cGF0aCBkPSJtNC43MTQ0IDE1Ljk1NTUgNC43MTc0LTIuNjQ3MS4wNzktLjIzMDctLjA3OS0uMTI3NWgtLjIzMDdsLS43ODkzLS4wNDg2LTIuNjk1Ni0uMDcyOS0yLjMzNzUtLjA5NzEtMi4yNjQ2LS4xMjE0LS41NzA3LS4xMjE1LS41MzQzLS43MDQyLjA1NDYtLjM1MjIuNDc5Ny0uMzIxOC42ODYuMDYwOCAxLjUxNzkuMTAzMiAyLjI3NjcuMTU3OCAxLjY1MTQuMDk3MiAyLjQ0NjguMjU1aC4zODg2bC4wNTQ2LS4xNTc5LS4xMzM2LS4wOTcxLS4xMDMyLS4wOTcyTDYuOTczIDkuODM1NmwtMi41NS0xLjY4NzktMS4zMzU2LS45NzE0LS43MjI1LS40OTE4LS4zNjQzLS40NjE0LS4xNTc4LTEuMDA3OC42NTU3LS43MjI1Ljg4MDMuMDYwNy4yMjQ2LjA2MDcuODkyNS42ODYgMS45MDY0IDEuNDc1NCAyLjQ4OTMgMS44MzM2LjM2NDMuMzAzNS4xNDU3LS4xMDMyLjAxODItLjA3MjgtLjE2NC0uMjczMy0xLjM1MzktMi40NDY3LTEuNDQ1LTIuNDg5My0uNjQzNS0xLjAzMi0uMTctLjYxOTRjLS4wNjA3LS4yNTUtLjEwMzItLjQ2NzQtLjEwMzItLjcyODVMNi4yODcuMTMzNSA2LjY5OTcgMGwuOTk1Ny4xMzM2LjQxOS4zNjQyLjYxOTIgMS40MTQ3IDEuMDAxOCAyLjIyODIgMS41NTQzIDMuMDI5Ni40NTUzLjg5ODUuMjQyOS44MzE4LjA5MS4yNTVoLjE1Nzl2LS4xNDU3bC4xMjc1LTEuNzA2LjIzNjgtMi4wOTQ3LjIzMDctMi42OTU3LjA3ODktLjc1ODkuMzc2NC0uOTEwNy43NDY4LS40OTE4LjU4MjguMjc5My40Nzk3LjY4Ni0uMDY2OC40NDMzLS4yODUzIDEuODUxNy0uNTU4NiAyLjkwMjEtLjM2NDMgMS45NDI5aC4yMTI1bC4yNDI5LS4yNDI5Ljk4MzUtMS4zMDUzIDEuNjUxNC0yLjA2NDMuNzI4Ni0uODE5Ni44NS0uOTA0Ni41NDY0LS40MzExaDEuMDMyMWwuNzU5IDEuMTI5My0uMzQgMS4xNjU3LTEuMDYyNSAxLjM0NzgtLjg4MDQgMS4xNDE0LTEuMjYyOCAxLjctLjc4OTMgMS4zNi4wNzI5LjEwOTMuMTg4Mi0uMDE4MyAyLjg1MzUtLjYwNyAxLjU0MjEtLjI3OTQgMS44Mzk2LS4zMTU3LjgzMTguMzg4Ni4wOTEuMzk0Ni0uMzI3OC44MDc1LTEuOTY3LjQ4NTctMi4zMDcyLjQ2MTQtMy40MzY0LjgxMzYtLjA0MjUuMDMwNC4wNDg2LjA2MDcgMS41NDgyLjE0NTcuNjYxOC4wMzY0aDEuNjIxbDMuMDE3NS4yMjQ3Ljc4OTIuNTIyLjQ3MzYuNjM3Ni0uMDc5LjQ4NTctMS4yMTQyLjYxOTMtMS42MzkzLS4zODg2LTMuODI1LS45MTA3LTEuMzExMy0uMzI3OWgtLjE4MjJ2LjEwOTNsMS4wOTI5IDEuMDY4NiAyLjAwMzUgMS44MDkyIDIuNTA3NSAyLjMzMTQuMTI3NS41NzY4LS4zMjE4LjQ1NTQtLjM0LS4wNDg2LTIuMjAzOS0xLjY1NzUtLjg1LS43NDY4LTEuOTI0Ni0xLjYyMWgtLjEyNzV2LjE3bC40NDMyLjY0OTYgMi4zNDM2IDMuNTIxNC4xMjE0IDEuMDgwNy0uMTcuMzUyMS0uNjA3MS4yMTI1LS42Njc5LS4xMjE0LTEuMzcyMS0xLjkyNDZMMTQuMzggMTcuOTU5bC0xLjE0MTQtMS45NDI4LS4xMzk3LjA3OS0uNjc0IDcuMjU1Mi0uMzE1Ni4zNzAzLS43Mjg2LjI3OTMtLjYwNzEtLjQ2MTQtLjMyMTgtLjc0NjguMzIxOC0xLjQ3NTMuMzg4Ni0xLjkyNDYuMzE1Ny0xLjUzLjI4NTMtMS45MDA0LjE3LS42MzE0LS4wMTIxLS4wNDI1LS4xMzk3LjAxODItMS40MzI4IDEuOTY3Mi0yLjE3OTYgMi45NDQ2LTEuNzI0MyAxLjg0NTYtLjQxMjguMTY0LS43MTY0LS4zNzA0LjA2NjctLjY2MTguNDAwOC0uNTg4OSAyLjM4Ni0zLjAzNTcgMS40Mzg5LTEuODgyLjkyOS0xLjA4NjgtLjAwNjItLjE1NzloLS4wNTQ2bC02LjMzODUgNC4xMTY0LTEuMTI5My4xNDU3LS40ODU3LS40NTU0LjA2MDgtLjc0NjcuMjMwNy0uMjQyOSAxLjkwNjQtMS4zMTE0WiIvPjwvc3ZnPg==",openai:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIxIiBoZWlnaHQ9IjcyMSIgdmlld0JveD0iMCAwIDcyMSA3MjEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xNjM3XzI5MzQpIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxXzE2MzdfMjkzNCkiPgo8cGF0aCBkPSJNMzA0LjI0NiAyOTQuNjExVjI0OS4wMjhDMzA0LjI0NiAyNDUuMTg5IDMwNS42ODcgMjQyLjMwOSAzMDkuMDQ0IDI0MC4zOTJMNDAwLjY5MiAxODcuNjEyQzQxMy4xNjcgMTgwLjQxNSA0MjguMDQyIDE3Ny4wNTggNDQzLjM5NCAxNzcuMDU4QzUwMC45NzEgMTc3LjA1OCA1MzcuNDQgMjIxLjY4MiA1MzcuNDQgMjY5LjE4MkM1MzcuNDQgMjcyLjU0IDUzNy40NCAyNzYuMzc5IDUzNi45NTkgMjgwLjIxOEw0NDEuOTU0IDIyNC41NThDNDM2LjE5NyAyMjEuMjAxIDQzMC40MzcgMjIxLjIwMSA0MjQuNjggMjI0LjU1OEwzMDQuMjQ2IDI5NC42MTFaTTUxOC4yNDUgNDcyLjE0NVYzNjMuMjI0QzUxOC4yNDUgMzU2LjUwNSA1MTUuMzY0IDM1MS43MDcgNTA5LjYwOCAzNDguMzQ5TDM4OS4xNzQgMjc4LjI5Nkw0MjguNTE5IDI1NS43NDNDNDMxLjg3NyAyNTMuODI2IDQzNC43NTcgMjUzLjgyNiA0MzguMTE1IDI1NS43NDNMNTI5Ljc2MiAzMDguNTIzQzU1Ni4xNTQgMzIzLjg3OSA1NzMuOTA1IDM1Ni41MDUgNTczLjkwNSAzODguMTcxQzU3My45MDUgNDI0LjYzNiA1NTIuMzE1IDQ1OC4yMjUgNTE4LjI0NSA0NzIuMTQxVjQ3Mi4xNDVaTTI3NS45MzcgMzc2LjE4MkwyMzYuNTkyIDM1My4xNTJDMjMzLjIzNSAzNTEuMjM1IDIzMS43OTQgMzQ4LjM1NCAyMzEuNzk0IDM0NC41MTVWMjM4Ljk1NkMyMzEuNzk0IDE4Ny42MTcgMjcxLjEzOSAxNDguNzQ5IDMyNC40IDE0OC43NDlDMzQ0LjU1NSAxNDguNzQ5IDM2My4yNjQgMTU1LjQ2OCAzNzkuMTAyIDE2Ny40NjNMMjg0LjU3OCAyMjIuMTY0QzI3OC44MjIgMjI1LjUyMSAyNzUuOTQyIDIzMC4zMTkgMjc1Ljk0MiAyMzcuMDM5VjM3Ni4xODZMMjc1LjkzNyAzNzYuMTgyWk0zNjAuNjI2IDQyNS4xMjJMMzA0LjI0NiAzOTMuNDU1VjMyNi4yODNMMzYwLjYyNiAyOTQuNjE2TDQxNy4wMDIgMzI2LjI4M1YzOTMuNDU1TDM2MC42MjYgNDI1LjEyMlpNMzk2Ljg1MiA1NzAuOTg5QzM3Ni42OTggNTcwLjk4OSAzNTcuOTg5IDU2NC4yNyAzNDIuMTUxIDU1Mi4yNzZMNDM2LjY3NCA0OTcuNTc0QzQ0Mi40MzEgNDk0LjIxNyA0NDUuMzExIDQ4OS40MTkgNDQ1LjMxMSA0ODIuNjk5VjM0My41NTJMNDg1LjEzOCAzNjYuNTgyQzQ4OC40OTUgMzY4LjQ5OSA0ODkuOTM2IDM3MS4zNzkgNDg5LjkzNiAzNzUuMjE5VjQ4MC43NzhDNDg5LjkzNiA1MzIuMTE3IDQ1MC4xMDkgNTcwLjk4NSAzOTYuODUyIDU3MC45ODVWNTcwLjk4OVpNMjgzLjEzNCA0NjMuOTlMMTkxLjQ4NiA0MTEuMjExQzE2NS4wOTQgMzk1Ljg1NCAxNDcuMzQzIDM2My4yMjkgMTQ3LjM0MyAzMzEuNTYyQzE0Ny4zNDMgMjk0LjYxNiAxNjkuNDE1IDI2MS41MDkgMjAzLjQ4IDI0Ny41OTNWMzU2Ljk5MUMyMDMuNDggMzYzLjcxIDIwNi4zNjEgMzY4LjUwOCAyMTIuMTE3IDM3MS44NjZMMzMyLjA3NCA0NDEuNDM3TDI5Mi43MjkgNDYzLjk5QzI4OS4zNzIgNDY1LjkwNyAyODYuNDkxIDQ2NS45MDcgMjgzLjEzNCA0NjMuOTlaTTI3Ny44NTkgNTQyLjY4QzIyMy42MzkgNTQyLjY4IDE4My44MTMgNTAxLjg5NSAxODMuODEzIDQ1MS41MTRDMTgzLjgxMyA0NDcuNjc1IDE4NC4yOTQgNDQzLjgzNiAxODQuNzcxIDQzOS45OTdMMjc5LjI5NSA0OTQuNjk4QzI4NS4wNTEgNDk4LjA1NiAyOTAuODEyIDQ5OC4wNTYgMjk2LjU2OCA0OTQuNjk4TDQxNy4wMDIgNDI1LjEyN1Y0NzAuNzFDNDE3LjAwMiA0NzQuNTQ5IDQxNS41NjIgNDc3LjQyOSA0MTIuMjA0IDQ3OS4zNDZMMzIwLjU1NyA1MzIuMTI2QzMwOC4wODEgNTM5LjMyMyAyOTMuMjA2IDU0Mi42OCAyNzcuODU0IDU0Mi42OEgyNzcuODU5Wk0zOTYuODUyIDU5OS43NzZDNDU0LjkxMSA1OTkuNzc2IDUwMy4zNyA1NTguNTEzIDUxNC40MSA1MDMuODEyQzU2OC4xNDkgNDg5Ljg5NiA2MDIuNjk2IDQzOS41MTUgNjAyLjY5NiAzODguMTc2QzYwMi42OTYgMzU0LjU4NyA1ODguMzAzIDMyMS45NjIgNTYyLjM5MiAyOTguNDVDNTY0Ljc5MSAyODguMzczIDU2Ni4yMzEgMjc4LjI5NiA1NjYuMjMxIDI2OC4yMjRDNTY2LjIzMSAxOTkuNjExIDUxMC41NzEgMTQ4LjI2NyA0NDYuMjc0IDE0OC4yNjdDNDMzLjMyMiAxNDguMjY3IDQyMC44NDYgMTUwLjE4NCA0MDguMzcgMTU0LjUwNUMzODYuNzc1IDEzMy4zOTIgMzU3LjAyNiAxMTkuOTU4IDMyNC40IDExOS45NThDMjY2LjM0MiAxMTkuOTU4IDIxNy44ODMgMTYxLjIyIDIwNi44NDMgMjE1LjkyMUMxNTMuMTA0IDIyOS44MzcgMTE4LjU1NyAyODAuMjE4IDExOC41NTcgMzMxLjU1N0MxMTguNTU3IDM2NS4xNDYgMTMyLjk1IDM5Ny43NzEgMTU4Ljg2MSA0MjEuMjgzQzE1Ni40NjIgNDMxLjM2IDE1NS4wMjIgNDQxLjQzNyAxNTUuMDIyIDQ1MS41MUMxNTUuMDIyIDUyMC4xMjMgMjEwLjY4MiA1NzEuNDY2IDI3NC45NzggNTcxLjQ2NkMyODcuOTMxIDU3MS40NjYgMzAwLjQwNyA1NjkuNTQ5IDMxMi44ODMgNTY1LjIyOEMzMzQuNDczIDU4Ni4zNDEgMzY0LjIyMiA1OTkuNzc2IDM5Ni44NTIgNTk5Ljc3NloiIGZpbGw9ImJsYWNrIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNzIwIiBoZWlnaHQ9IjcyMCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNjA2OTM0IDAuMDk5OTc1NikiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNDg0LjEzOSIgaGVpZ2h0PSI0NzkuODE4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE4LjU1NyAxMTkuOTU4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",gemini:"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjFlbSIgc3R5bGU9ImZsZXg6bm9uZTtsaW5lLWhlaWdodDoxIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkdlbWluaTwvdGl0bGU+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9IiMzMTg2RkYiPjwvcGF0aD48cGF0aCBkPSJNMjAuNjE2IDEwLjgzNWExNC4xNDcgMTQuMTQ3IDAgMDEtNC40NS0zLjAwMSAxNC4xMTEgMTQuMTExIDAgMDEtMy42NzgtNi40NTIuNTAzLjUwMyAwIDAwLS45NzUgMCAxNC4xMzQgMTQuMTM0IDAgMDEtMy42NzkgNi40NTIgMTQuMTU1IDE0LjE1NSAwIDAxLTQuNDUgMy4wMDFjLS42NS4yOC0xLjMxOC41MDUtMi4wMDIuNjc4YS41MDIuNTAyIDAgMDAwIC45NzVjLjY4NC4xNzIgMS4zNS4zOTcgMi4wMDIuNjc3YTE0LjE0NyAxNC4xNDcgMCAwMTQuNDUgMy4wMDEgMTQuMTEyIDE0LjExMiAwIDAxMy42NzkgNi40NTMuNTAyLjUwMiAwIDAwLjk3NSAwYy4xNzItLjY4NS4zOTctMS4zNTEuNjc3LTIuMDAzYTE0LjE0NSAxNC4xNDUgMCAwMTMuMDAxLTQuNDUgMTQuMTEzIDE0LjExMyAwIDAxNi40NTMtMy42NzguNTAzLjUwMyAwIDAwMC0uOTc1IDEzLjI0NSAxMy4yNDUgMCAwMS0yLjAwMy0uNjc4eiIgZmlsbD0idXJsKCNsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfKSI+PC9wYXRoPjxwYXRoIGQ9Ik0yMC42MTYgMTAuODM1YTE0LjE0NyAxNC4xNDcgMCAwMS00LjQ1LTMuMDAxIDE0LjExMSAxNC4xMTEgMCAwMS0zLjY3OC02LjQ1Mi41MDMuNTAzIDAgMDAtLjk3NSAwIDE0LjEzNCAxNC4xMzQgMCAwMS0zLjY3OSA2LjQ1MiAxNC4xNTUgMTQuMTU1IDAgMDEtNC40NSAzLjAwMWMtLjY1LjI4LTEuMzE4LjUwNS0yLjAwMi42NzhhLjUwMi41MDIgMCAwMDAgLjk3NWMuNjg0LjE3MiAxLjM1LjM5NyAyLjAwMi42NzdhMTQuMTQ3IDE0LjE0NyAwIDAxNC40NSAzLjAwMSAxNC4xMTIgMTQuMTEyIDAgMDEzLjY3OSA2LjQ1My41MDIuNTAyIDAgMDAuOTc1IDBjLjE3Mi0uNjg1LjM5Ny0xLjM1MS42NzctMi4wMDNhMTQuMTQ1IDE0LjE0NSAwIDAxMy4wMDEtNC40NSAxNC4xMTMgMTQuMTEzIDAgMDE2LjQ1My0zLjY3OC41MDMuNTAzIDAgMDAwLS45NzUgMTMuMjQ1IDEzLjI0NSAwIDAxLTIuMDAzLS42Nzh6IiBmaWxsPSJ1cmwoI2xvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8pIj48L3BhdGg+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9InVybCgjbG9iZS1pY29ucy1nZW1pbmktMi1fUl8wXykiPjwvcGF0aD48ZGVmcz48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfIiB4MT0iNyIgeDI9IjExIiB5MT0iMTUuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjMDhCOTYyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDhCOTYyIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8iIHgxPSI4IiB4Mj0iMTEuNSIgeTE9IjUuNSIgeTI9IjExIj48c3RvcCBzdG9wLWNvbG9yPSIjRjk0NTQzIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjk0NTQzIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTItX1JfMF8iIHgxPSIzLjUiIHgyPSIxNy41IiB5MT0iMTMuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjRkFCQzEyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuNDYiIHN0b3AtY29sb3I9IiNGQUJDMTIiIHN0b3Atb3BhY2l0eT0iMCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==",deepseek:"data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RGVlcFNlZWs8L3RpdGxlPjxwYXRoIGQ9Ik0yMy43NDggNC42NTFjLS4yNTQtLjEyNC0uMzY0LjExMy0uNTEyLjIzMy0uMDUxLjA0LS4wOTQuMDktLjEzNy4xMzctLjM3Mi4zOTctLjgwNi42NTctMS4zNzMuNjI2LS44MjktLjA0Ni0xLjUzNy4yMTQtMi4xNjMuODQ4LS4xMzMtLjc4Mi0uNTc1LTEuMjQ4LTEuMjQ3LTEuNTQ4LS4zNTItLjE1NS0uNzA4LS4zMTEtLjk1NS0uNjUtLjE3Mi0uMjQtLjIxOS0uNTA5LS4zMDUtLjc3NC0uMDU1LS4xNi0uMTEtLjMyMy0uMjkzLS4zNS0uMi0uMDMxLS4yNzguMTM2LS4zNTYuMjc2LS4zMTMuNTcyLS40MzQgMS4yMDItLjQyMiAxLjg0LjAyNyAxLjQzNi42MzMgMi41OCAxLjgzOCAzLjM5My4xMzcuMDk0LjE3Mi4xODcuMTI5LjMyMy0uMDgyLjI4LS4xOC41NTMtLjI2Ni44MzMtLjA1NS4xNzktLjEzNy4yMTgtLjMyOC4xNGE1LjUgNS41IDAgMCAxLTEuNzM3LTEuMTc5Yy0uODU3LS44MjgtMS42MzEtMS43NDMtMi41OTctMi40NmExMiAxMiAwIDAgMC0uNjg5LS40N2MtLjk4NS0uOTU3LjEzLTEuNzQzLjM4Ny0xLjgzNi4yNy0uMDk4LjA5NC0uNDMzLS43NzgtLjQyOC0uODcyLjAwMy0xLjY3LjI5NS0yLjY4Ny42ODVhMyAzIDAgMCAxLS40NjUuMTM2IDkuNiA5LjYgMCAwIDAtMi44ODMtLjEwMWMtMS44ODUuMjEtMy4zOSAxLjEtNC40OTcgMi42MjJDLjA4MiA4Ljc3Ni0uMjMxIDEwLjg1NC4xNTIgMTMuMDJjLjQwMyAyLjI4NCAxLjU2OCA0LjE3NSAzLjM2IDUuNjUzIDEuODU3IDEuNTMzIDMuOTk3IDIuMjg0IDYuNDM4IDIuMTQgMS40ODItLjA4NSAzLjEzMi0uMjg0IDQuOTk0LTEuODYuNDcuMjM0Ljk2Mi4zMjggMS43OC4zOTguNjI5LjA1OCAxLjIzNS0uMDMxIDEuNzA1LS4xMjkuNzM1LS4xNTUuNjg0LS44MzYuNDE4LS45NjEtMi4xNTUtMS4wMDQtMS42ODItLjU5NS0yLjExMi0uOTI2IDEuMDk1LTEuMjk1IDIuNzY4LTMuNTk4IDMuMjg0LTYuNzMzLjA1LS4zNDYuMTE1LS44MzQuMTA4LTEuMTE0LS4wMDQtLjE3MS4wMzUtLjIzOC4yMy0uMjU3YTQuMiA0LjIgMCAwIDAgMS41NDUtLjQ3NWMxLjM5Ny0uNzYzIDEuOTYtMi4wMTYgMi4wOTMtMy41MTcuMDItLjIzLS4wMDQtLjQ2Ny0uMjQ3LS41ODhNMTEuNTggMTguMTY4Yy0yLjA4OC0xLjY0Mi0zLjEwMS0yLjE4My0zLjUyLTIuMTYtLjM5LjAyNC0uMzIuNDcyLS4yMzQuNzYzLjA5LjI4OC4yMDcuNDg3LjM3MS43NC4xMTQuMTY3LjE5Mi40MTYtLjExMy42MDMtLjY3My40MTYtMS44NDItLjE0LTEuODk3LS4xNjgtMS4zNjEtLjgwMS0yLjUtMS44Ni0zLjMwMS0zLjMwNi0uNzc1LTEuMzkzLTEuMjI1LTIuODg4LTEuMjk5LTQuNDgyLS4wMi0uMzg1LjA5NC0uNTIyLjQ3Ny0uNTkyYTQuNyA0LjcgMCAwIDEgMS41My0uMDM4YzIuMTMxLjMxMSAzLjk0NiAxLjI2NCA1LjQ2NyAyLjc3NC44NjguODYgMS41MjUgMS44ODcgMi4yMDIgMi44OS43MiAxLjA2NiAxLjQ5NCAyLjA4MiAyLjQ4IDIuOTE1LjM0OC4yOTEuNjI2LjUxMy44OTIuNjc3LS44MDIuMDktMi4xNC4xMDktMy4wNTUtLjYxNXptMS4wMDEtNi40NGEuMzA2LjMwNiAwIDAgMSAuNDE1LS4yODcuMy4zIDAgMCAxIC4xMTMuMDc0LjMuMyAwIDAgMSAuMDg2LjIxNGMwIC4xNy0uMTM2LjMwNy0uMzA4LjMwN2EuMzAzLjMwMyAwIDAgMS0uMzA2LS4zMDdtMy4xMSAxLjU5NmMtLjIuMDgxLS40LjE1MS0uNTkxLjE2YTEuMjUgMS4yNSAwIDAgMS0uNzk4LS4yNTRjLS4yNzQtLjIzLS40Ny0uMzU4LS41NTEtLjc1OGExLjcgMS43IDAgMCAxIC4wMTUtLjU4OGMuMDctLjMyNy0uMDA3LS41MzctLjIzOC0uNzI3LS4xODgtLjE1Ni0uNDI2LS4xOTktLjY4OS0uMTk5YS42LjYgMCAwIDEtLjI1NC0uMDc4LjI1My4yNTMgMCAwIDEtLjExNC0uMzU4IDEgMSAwIDAgMSAuMTkyLS4yMWMuMzU2LS4yMDIuNzY3LS4xMzYgMS4xNDYuMDE2LjM1Mi4xNDQuNjE4LjQwOCAxLjAwMS43ODIuMzkyLjQ1MS40NjIuNTc2LjY4NS45MTUuMTc2LjI2NC4zMzYuNTM2LjQ0Ni44NDguMDY2LjE5NC0uMDIuMzUzLS4yNS40NSIvPjwvc3ZnPg=="},i={claude:"Claude",openai:"OpenAI",gemini:"Gemini",deepseek:"DeepSeek"};function o(z,R=""){const ne=R.trim().toLowerCase().replace(/[^a-z0-9]+/g,"");if(R.trim())return{anthropic:"claude",claude:"claude",claudecode:"claude",openai:"openai",google:"gemini",googlegemini:"gemini",googleaistudio:"gemini",gemini:"gemini",deepseek:"deepseek"}[ne];const le=z.trim().toLowerCase();if(/^(?:anthropic\/)?claude(?:$|[\s-])/.test(le))return"claude";if(/^(?:openai\/)?(?:gpt[-\s]?\d|chatgpt(?:$|[\s-])|o[134](?:$|[\s-]))/.test(le))return"openai";if(/^(?:google\/)?gemini(?:$|[\s-])/.test(le))return"gemini";if(/^deepseek(?:$|[\s-])/.test(le))return"deepseek"}const s=Fe({props:{model:{type:String,default:""},provider:{type:String,default:""},size:{type:Number,default:20}},setup:z=>()=>{const R=o(z.model,z.provider),ne=R!=="gemini",le=Math.round(z.size*(R==="openai"?.82:.58));return Ee("span",{class:["model-provider-mark",{"is-color":R&&!ne}],"data-provider-logo":R??"unknown","aria-hidden":"true",title:R?`${i[R]} logo`:"Custom model",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:`${z.size}px`,height:`${z.size}px`,boxSizing:"border-box",border:"1px solid var(--provider-logo-border, #e5e5e8)",borderRadius:`${z.size>=28?9:z.size>=20?6:4}px`,background:"var(--provider-logo-surface, #fff)",color:"var(--provider-logo-muted, #a1a1aa)"}},R?[Ee("img",{src:n[R],alt:"","aria-hidden":"true",class:["model-provider-image",{"is-monochrome":ne}],"data-logo-source":"bundled-brand-asset",style:{display:"block",objectFit:"contain",width:`${le}px`,height:`${le}px`}})]:[Ee(no,{size:Math.round(z.size*.5),strokeWidth:1.7,"aria-hidden":"true"})])}}),r=e,a=t,c=G(r.modelValue),d=G(""),u=G(!1),h=G([]),L=G(null),j=G(null),C=G(null),O=G(null),H=G({}),ee=G(null),$=`composer-models-${Qn()}`;function q(z=!1){u.value=!1,z&&ke(()=>{var R;return(R=ee.value)==null?void 0:R.focus({preventScroll:!0})})}function w(){var z;return Array.from(((z=O.value)==null?void 0:z.querySelectorAll('[role="menuitemradio"]:not(:disabled)'))??[])}function Y(z){if(!z)return;z.focus({preventScroll:!0});const R=O.value;R&&(z.offsetTop<R.scrollTop?R.scrollTop=z.offsetTop:z.offsetTop+z.offsetHeight>R.scrollTop+R.clientHeight&&(R.scrollTop=z.offsetTop+z.offsetHeight-R.clientHeight))}function D(){if(!u.value||!ee.value)return;const z=ee.value.getBoundingClientRect(),R=Math.min(340,window.innerWidth-16),ne=Math.max(8,Math.min(z.left,window.innerWidth-R-8)),le={position:"fixed",left:`${Math.round(ne)}px`,width:`${R}px`};window.innerHeight-z.bottom<280&&z.top>window.innerHeight-z.bottom?le.bottom=`${Math.round(window.innerHeight-z.top+6)}px`:le.top=`${Math.round(z.bottom+6)}px`,H.value=le}async function N(){if(!r.disabled){if(u.value)return q();u.value=!0,await ke(),D(),u.value&&Y(w().find(z=>z.getAttribute("aria-checked")==="true")??w()[0])}}async function S(z){if(z.isComposing||r.disabled)return;if(z.key==="Escape"&&u.value){z.preventDefault(),z.stopPropagation(),q(!0);return}if(!["ArrowDown","ArrowUp","Home","End"].includes(z.key))return;z.preventDefault(),u.value=!0,await ke(),D();const R=w();if(!R.length)return;const ne=R.indexOf(document.activeElement),le=z.key==="Home"?0:z.key==="End"?R.length-1:(ne+(z.key==="ArrowDown"?1:ne<0?0:-1)+R.length)%R.length;Y(R[le])}function g(z){var ne,le;const R=z.relatedTarget;!((ne=C.value)!=null&&ne.contains(R))&&!((le=O.value)!=null&&le.contains(R))&&q()}function W(z){var ne,le;const R=z.target;!((ne=C.value)!=null&&ne.contains(R))&&!((le=O.value)!=null&&le.contains(R))&&q()}function Z(z){z.setAttribute("inert","")}function Q(z){r.disabled||h.value.splice(z,1)}Ie(()=>r.disabled,z=>{z&&q()}),kt(()=>{document.addEventListener("pointerdown",W),window.addEventListener("resize",D),window.addEventListener("scroll",D,!0),fe()}),Qt(()=>{document.removeEventListener("pointerdown",W),window.removeEventListener("resize",D),window.removeEventListener("scroll",D,!0)});const J=Te(()=>(c.value.trim().length>0||h.value.length>0)&&r.models.includes(d.value)&&!r.disabled);Ie(()=>r.modelValue,z=>{c.value=z}),Ie([()=>r.initialModel,()=>r.models],([z,R],ne)=>{const ve=!ne||z!==ne[0]?z:d.value;d.value=R.includes(ve)?ve:R[0]??"",R.length||q()},{immediate:!0,deep:!0});function ue(z){r.disabled||(c.value=z.target.value,a("update:modelValue",c.value))}function fe(){const z=j.value;z&&(z.style.height="auto",z.style.height=`${Math.min(Math.max(z.scrollHeight,40),128)}px`)}Ie(c,()=>ke(fe));function ae(z){r.disabled||!r.models.includes(z)||(d.value=z,q(!0),a("model-change",z))}function re(z){r.disabled||(h.value=[...h.value,...Array.from(z.target.files||[])],L.value&&(L.value.value=""))}function pe(){J.value&&(a("send",{text:c.value.trim(),model:d.value,files:[...h.value]}),c.value="",h.value=[],a("update:modelValue",""))}function te(z){z.key==="Enter"&&!z.shiftKey&&!z.isComposing&&(z.preventDefault(),pe())}return(z,R)=>(y(),k("div",kd,[h.value.length?(y(),k("div",Sd,[(y(!0),k(Ne,null,_e(h.value,(ne,le)=>(y(),k("span",{key:`${ne.name}-${le}`,class:"file-chip"},[B(F(hd),{size:12}),l("span",null,ie(ne.name),1),l("button",{type:"button","aria-label":`Remove ${ne.name}`,disabled:e.disabled,onClick:ve=>Q(le)},[B(F(Cn),{size:9,"stroke-width":1.7})],8,Ed)]))),128))])):ge("",!0),l("div",{class:he(["composer",{"is-disabled":e.disabled}])},[l("div",Cd,[l("textarea",{ref_key:"textarea",ref:j,value:c.value,placeholder:e.placeholder,"aria-label":"Message the assistant",disabled:e.disabled,rows:"1",onInput:ue,onKeydown:te},null,40,Od)]),l("div",Qd,[l("button",{type:"button",class:"icon-button",title:"Add attachments","aria-label":"Add attachments",disabled:e.disabled,onClick:R[0]||(R[0]=ne=>{var le;return(le=L.value)==null?void 0:le.click()})},[B(F(Vr),{size:18,"stroke-width":1.7})],8,Ud),l("input",{ref_key:"input",ref:L,class:"file-input",type:"file",disabled:e.disabled,multiple:"","aria-label":"Choose files",onChange:re},null,40,Yd),l("div",{ref_key:"modelRoot",ref:C,class:"model-select",onKeydown:S,onFocusout:g},[l("button",{type:"button",ref_key:"modelTrigger",ref:ee,class:"model-button","aria-haspopup":"menu","aria-controls":$,"aria-expanded":u.value,"aria-label":"Select model",disabled:e.disabled||!e.models.length,onClick:N},[d.value?(y(),xe(F(s),{key:0,model:d.value},null,8,["model"])):ge("",!0),l("span",_d,ie(d.value||"No models"),1),B(F(Gt),{size:12})],8,Pd),(y(),xe(pc,{to:"body"},[B(dt,{name:"composer-menu",onBeforeLeave:Z},{default:Ke(()=>[u.value?(y(),k("div",{key:0,ref_key:"modelMenu",ref:O,id:$,class:"model-menu",style:Ft(H.value),role:"menu","aria-label":"Models",onKeydown:S,onFocusout:g},[(y(!0),k(Ne,null,_e(e.models,ne=>(y(),k("button",{key:ne,type:"button",role:"menuitemradio",disabled:e.disabled,"aria-checked":d.value===ne,onClick:le=>ae(ne)},[B(F(s),{model:ne},null,8,["model"]),l("span",Rd,ie(ne),1),d.value===ne?(y(),xe(F(lt),{key:0,size:14})):ge("",!0)],8,Wd))),128))],36)):ge("",!0)]),_:1})]))],544),l("button",{type:"button",class:"send-button",disabled:!J.value,"aria-label":"Send message",onClick:pe},[...R[1]||(R[1]=[l("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[l("g",{class:"send-glyph"},[l("path",{d:"M12 18V6m-6 6 6-6 6 6"})])],-1)])],8,Bd)])],2)]))}}),Dt=(e,t)=>{const n=e.__vccOpts||e;for(const[i,o]of t)n[i]=o;return n},Hd=Dt($d,[["__scopeId","data-v-d126e9cf"]]),Gd={class:"chat-conversation","aria-label":"Chat conversation"},Vd={class:"conversation-body"},Fd=["data-scrolling"],Zd={key:0,class:"conversation-empty"},Kd={class:"conversation-message-list"},Jd=["data-message-id","aria-label"],qd={key:0,class:"system-text"},Xd={key:0,class:"message-attachments"},eM=["aria-label","onClick"],tM=["src","alt"],nM={key:1,class:"user-bubble"},iM={key:0,class:"conversation-fold process-heading"},oM=["aria-expanded","aria-controls","onClick"],sM={key:0,class:"failed-count"},aM={key:1,class:"process-meta"},rM=["id","data-block-kind","inert","aria-hidden"],lM={key:0,class:"thought-text"},cM=["aria-expanded","aria-controls","onClick"],uM={key:2,class:"thought-badge"},dM=["id","inert","aria-hidden"],MM={class:"thought-text"},pM=["data-state"],gM=["aria-expanded","aria-controls","onClick"],fM={class:"tools-count"},hM={key:3,class:"failed-count"},mM=["id","inert","aria-hidden"],yM={class:"tool-list"},NM=["data-state"],vM=["title"],xM=["title"],jM=["id","inert","aria-hidden"],LM={class:"tool-output"},bM={key:0},DM={key:1,class:"message-status"},IM={key:2,class:"message-error",role:"alert"},TM={key:3,class:"message-actions"},wM=["data-message-action","disabled","onClick"],zM={key:1,class:"generation-status",role:"status"},AM={class:"conversation-bottom"},kM={key:0,class:"composer-error",role:"alert"},SM={key:1,class:"pending-attachments"},EM=["aria-label","onClick"],CM=["src","alt"],OM=["title"],QM=["aria-label","disabled","onClick"],UM={class:"composer-input-slot"},YM=["value","placeholder","disabled"],PM={class:"composer-toolbar"},_M=["disabled"],WM=["accept","disabled"],RM=["disabled","aria-expanded","aria-controls"],BM={class:"model-trigger-label"},$M=["id"],HM=["aria-checked","onClick"],GM={class:"model-option-label"},VM={class:"composer-send-actions"},FM=["data-kind","disabled","aria-label","title"],ZM=["src","alt"],KM=Fe({__name:"ChatConversation",props:{messages:{},modelValue:{},model:{},models:{default:()=>["Claude Sonnet 4.6","GPT-5.4","Gemini 3.1 Pro"]},busy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},sessionKey:{default:""},placeholder:{default:"Message…"},error:{default:""},accept:{default:""}},emits:["send","stop","update:modelValue","update:model","message-action"],setup(e,{expose:t,emit:n}){const i={claude:"data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+Q2xhdWRlPC90aXRsZT48cGF0aCBkPSJtNC43MTQ0IDE1Ljk1NTUgNC43MTc0LTIuNjQ3MS4wNzktLjIzMDctLjA3OS0uMTI3NWgtLjIzMDdsLS43ODkzLS4wNDg2LTIuNjk1Ni0uMDcyOS0yLjMzNzUtLjA5NzEtMi4yNjQ2LS4xMjE0LS41NzA3LS4xMjE1LS41MzQzLS43MDQyLjA1NDYtLjM1MjIuNDc5Ny0uMzIxOC42ODYuMDYwOCAxLjUxNzkuMTAzMiAyLjI3NjcuMTU3OCAxLjY1MTQuMDk3MiAyLjQ0NjguMjU1aC4zODg2bC4wNTQ2LS4xNTc5LS4xMzM2LS4wOTcxLS4xMDMyLS4wOTcyTDYuOTczIDkuODM1NmwtMi41NS0xLjY4NzktMS4zMzU2LS45NzE0LS43MjI1LS40OTE4LS4zNjQzLS40NjE0LS4xNTc4LTEuMDA3OC42NTU3LS43MjI1Ljg4MDMuMDYwNy4yMjQ2LjA2MDcuODkyNS42ODYgMS45MDY0IDEuNDc1NCAyLjQ4OTMgMS44MzM2LjM2NDMuMzAzNS4xNDU3LS4xMDMyLjAxODItLjA3MjgtLjE2NC0uMjczMy0xLjM1MzktMi40NDY3LTEuNDQ1LTIuNDg5My0uNjQzNS0xLjAzMi0uMTctLjYxOTRjLS4wNjA3LS4yNTUtLjEwMzItLjQ2NzQtLjEwMzItLjcyODVMNi4yODcuMTMzNSA2LjY5OTcgMGwuOTk1Ny4xMzM2LjQxOS4zNjQyLjYxOTIgMS40MTQ3IDEuMDAxOCAyLjIyODIgMS41NTQzIDMuMDI5Ni40NTUzLjg5ODUuMjQyOS44MzE4LjA5MS4yNTVoLjE1Nzl2LS4xNDU3bC4xMjc1LTEuNzA2LjIzNjgtMi4wOTQ3LjIzMDctMi42OTU3LjA3ODktLjc1ODkuMzc2NC0uOTEwNy43NDY4LS40OTE4LjU4MjguMjc5My40Nzk3LjY4Ni0uMDY2OC40NDMzLS4yODUzIDEuODUxNy0uNTU4NiAyLjkwMjEtLjM2NDMgMS45NDI5aC4yMTI1bC4yNDI5LS4yNDI5Ljk4MzUtMS4zMDUzIDEuNjUxNC0yLjA2NDMuNzI4Ni0uODE5Ni44NS0uOTA0Ni41NDY0LS40MzExaDEuMDMyMWwuNzU5IDEuMTI5My0uMzQgMS4xNjU3LTEuMDYyNSAxLjM0NzgtLjg4MDQgMS4xNDE0LTEuMjYyOCAxLjctLjc4OTMgMS4zNi4wNzI5LjEwOTMuMTg4Mi0uMDE4MyAyLjg1MzUtLjYwNyAxLjU0MjEtLjI3OTQgMS44Mzk2LS4zMTU3LjgzMTguMzg4Ni4wOTEuMzk0Ni0uMzI3OC44MDc1LTEuOTY3LjQ4NTctMi4zMDcyLjQ2MTQtMy40MzY0LjgxMzYtLjA0MjUuMDMwNC4wNDg2LjA2MDcgMS41NDgyLjE0NTcuNjYxOC4wMzY0aDEuNjIxbDMuMDE3NS4yMjQ3Ljc4OTIuNTIyLjQ3MzYuNjM3Ni0uMDc5LjQ4NTctMS4yMTQyLjYxOTMtMS42MzkzLS4zODg2LTMuODI1LS45MTA3LTEuMzExMy0uMzI3OWgtLjE4MjJ2LjEwOTNsMS4wOTI5IDEuMDY4NiAyLjAwMzUgMS44MDkyIDIuNTA3NSAyLjMzMTQuMTI3NS41NzY4LS4zMjE4LjQ1NTQtLjM0LS4wNDg2LTIuMjAzOS0xLjY1NzUtLjg1LS43NDY4LTEuOTI0Ni0xLjYyMWgtLjEyNzV2LjE3bC40NDMyLjY0OTYgMi4zNDM2IDMuNTIxNC4xMjE0IDEuMDgwNy0uMTcuMzUyMS0uNjA3MS4yMTI1LS42Njc5LS4xMjE0LTEuMzcyMS0xLjkyNDZMMTQuMzggMTcuOTU5bC0xLjE0MTQtMS45NDI4LS4xMzk3LjA3OS0uNjc0IDcuMjU1Mi0uMzE1Ni4zNzAzLS43Mjg2LjI3OTMtLjYwNzEtLjQ2MTQtLjMyMTgtLjc0NjguMzIxOC0xLjQ3NTMuMzg4Ni0xLjkyNDYuMzE1Ny0xLjUzLjI4NTMtMS45MDA0LjE3LS42MzE0LS4wMTIxLS4wNDI1LS4xMzk3LjAxODItMS40MzI4IDEuOTY3Mi0yLjE3OTYgMi45NDQ2LTEuNzI0MyAxLjg0NTYtLjQxMjguMTY0LS43MTY0LS4zNzA0LjA2NjctLjY2MTguNDAwOC0uNTg4OSAyLjM4Ni0zLjAzNTcgMS40Mzg5LTEuODgyLjkyOS0xLjA4NjgtLjAwNjItLjE1NzloLS4wNTQ2bC02LjMzODUgNC4xMTY0LTEuMTI5My4xNDU3LS40ODU3LS40NTU0LjA2MDgtLjc0NjcuMjMwNy0uMjQyOSAxLjkwNjQtMS4zMTE0WiIvPjwvc3ZnPg==",openai:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIxIiBoZWlnaHQ9IjcyMSIgdmlld0JveD0iMCAwIDcyMSA3MjEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xNjM3XzI5MzQpIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxXzE2MzdfMjkzNCkiPgo8cGF0aCBkPSJNMzA0LjI0NiAyOTQuNjExVjI0OS4wMjhDMzA0LjI0NiAyNDUuMTg5IDMwNS42ODcgMjQyLjMwOSAzMDkuMDQ0IDI0MC4zOTJMNDAwLjY5MiAxODcuNjEyQzQxMy4xNjcgMTgwLjQxNSA0MjguMDQyIDE3Ny4wNTggNDQzLjM5NCAxNzcuMDU4QzUwMC45NzEgMTc3LjA1OCA1MzcuNDQgMjIxLjY4MiA1MzcuNDQgMjY5LjE4MkM1MzcuNDQgMjcyLjU0IDUzNy40NCAyNzYuMzc5IDUzNi45NTkgMjgwLjIxOEw0NDEuOTU0IDIyNC41NThDNDM2LjE5NyAyMjEuMjAxIDQzMC40MzcgMjIxLjIwMSA0MjQuNjggMjI0LjU1OEwzMDQuMjQ2IDI5NC42MTFaTTUxOC4yNDUgNDcyLjE0NVYzNjMuMjI0QzUxOC4yNDUgMzU2LjUwNSA1MTUuMzY0IDM1MS43MDcgNTA5LjYwOCAzNDguMzQ5TDM4OS4xNzQgMjc4LjI5Nkw0MjguNTE5IDI1NS43NDNDNDMxLjg3NyAyNTMuODI2IDQzNC43NTcgMjUzLjgyNiA0MzguMTE1IDI1NS43NDNMNTI5Ljc2MiAzMDguNTIzQzU1Ni4xNTQgMzIzLjg3OSA1NzMuOTA1IDM1Ni41MDUgNTczLjkwNSAzODguMTcxQzU3My45MDUgNDI0LjYzNiA1NTIuMzE1IDQ1OC4yMjUgNTE4LjI0NSA0NzIuMTQxVjQ3Mi4xNDVaTTI3NS45MzcgMzc2LjE4MkwyMzYuNTkyIDM1My4xNTJDMjMzLjIzNSAzNTEuMjM1IDIzMS43OTQgMzQ4LjM1NCAyMzEuNzk0IDM0NC41MTVWMjM4Ljk1NkMyMzEuNzk0IDE4Ny42MTcgMjcxLjEzOSAxNDguNzQ5IDMyNC40IDE0OC43NDlDMzQ0LjU1NSAxNDguNzQ5IDM2My4yNjQgMTU1LjQ2OCAzNzkuMTAyIDE2Ny40NjNMMjg0LjU3OCAyMjIuMTY0QzI3OC44MjIgMjI1LjUyMSAyNzUuOTQyIDIzMC4zMTkgMjc1Ljk0MiAyMzcuMDM5VjM3Ni4xODZMMjc1LjkzNyAzNzYuMTgyWk0zNjAuNjI2IDQyNS4xMjJMMzA0LjI0NiAzOTMuNDU1VjMyNi4yODNMMzYwLjYyNiAyOTQuNjE2TDQxNy4wMDIgMzI2LjI4M1YzOTMuNDU1TDM2MC42MjYgNDI1LjEyMlpNMzk2Ljg1MiA1NzAuOTg5QzM3Ni42OTggNTcwLjk4OSAzNTcuOTg5IDU2NC4yNyAzNDIuMTUxIDU1Mi4yNzZMNDM2LjY3NCA0OTcuNTc0QzQ0Mi40MzEgNDk0LjIxNyA0NDUuMzExIDQ4OS40MTkgNDQ1LjMxMSA0ODIuNjk5VjM0My41NTJMNDg1LjEzOCAzNjYuNTgyQzQ4OC40OTUgMzY4LjQ5OSA0ODkuOTM2IDM3MS4zNzkgNDg5LjkzNiAzNzUuMjE5VjQ4MC43NzhDNDg5LjkzNiA1MzIuMTE3IDQ1MC4xMDkgNTcwLjk4NSAzOTYuODUyIDU3MC45ODVWNTcwLjk4OVpNMjgzLjEzNCA0NjMuOTlMMTkxLjQ4NiA0MTEuMjExQzE2NS4wOTQgMzk1Ljg1NCAxNDcuMzQzIDM2My4yMjkgMTQ3LjM0MyAzMzEuNTYyQzE0Ny4zNDMgMjk0LjYxNiAxNjkuNDE1IDI2MS41MDkgMjAzLjQ4IDI0Ny41OTNWMzU2Ljk5MUMyMDMuNDggMzYzLjcxIDIwNi4zNjEgMzY4LjUwOCAyMTIuMTE3IDM3MS44NjZMMzMyLjA3NCA0NDEuNDM3TDI5Mi43MjkgNDYzLjk5QzI4OS4zNzIgNDY1LjkwNyAyODYuNDkxIDQ2NS45MDcgMjgzLjEzNCA0NjMuOTlaTTI3Ny44NTkgNTQyLjY4QzIyMy42MzkgNTQyLjY4IDE4My44MTMgNTAxLjg5NSAxODMuODEzIDQ1MS41MTRDMTgzLjgxMyA0NDcuNjc1IDE4NC4yOTQgNDQzLjgzNiAxODQuNzcxIDQzOS45OTdMMjc5LjI5NSA0OTQuNjk4QzI4NS4wNTEgNDk4LjA1NiAyOTAuODEyIDQ5OC4wNTYgMjk2LjU2OCA0OTQuNjk4TDQxNy4wMDIgNDI1LjEyN1Y0NzAuNzFDNDE3LjAwMiA0NzQuNTQ5IDQxNS41NjIgNDc3LjQyOSA0MTIuMjA0IDQ3OS4zNDZMMzIwLjU1NyA1MzIuMTI2QzMwOC4wODEgNTM5LjMyMyAyOTMuMjA2IDU0Mi42OCAyNzcuODU0IDU0Mi42OEgyNzcuODU5Wk0zOTYuODUyIDU5OS43NzZDNDU0LjkxMSA1OTkuNzc2IDUwMy4zNyA1NTguNTEzIDUxNC40MSA1MDMuODEyQzU2OC4xNDkgNDg5Ljg5NiA2MDIuNjk2IDQzOS41MTUgNjAyLjY5NiAzODguMTc2QzYwMi42OTYgMzU0LjU4NyA1ODguMzAzIDMyMS45NjIgNTYyLjM5MiAyOTguNDVDNTY0Ljc5MSAyODguMzczIDU2Ni4yMzEgMjc4LjI5NiA1NjYuMjMxIDI2OC4yMjRDNTY2LjIzMSAxOTkuNjExIDUxMC41NzEgMTQ4LjI2NyA0NDYuMjc0IDE0OC4yNjdDNDMzLjMyMiAxNDguMjY3IDQyMC44NDYgMTUwLjE4NCA0MDguMzcgMTU0LjUwNUMzODYuNzc1IDEzMy4zOTIgMzU3LjAyNiAxMTkuOTU4IDMyNC40IDExOS45NThDMjY2LjM0MiAxMTkuOTU4IDIxNy44ODMgMTYxLjIyIDIwNi44NDMgMjE1LjkyMUMxNTMuMTA0IDIyOS44MzcgMTE4LjU1NyAyODAuMjE4IDExOC41NTcgMzMxLjU1N0MxMTguNTU3IDM2NS4xNDYgMTMyLjk1IDM5Ny43NzEgMTU4Ljg2MSA0MjEuMjgzQzE1Ni40NjIgNDMxLjM2IDE1NS4wMjIgNDQxLjQzNyAxNTUuMDIyIDQ1MS41MUMxNTUuMDIyIDUyMC4xMjMgMjEwLjY4MiA1NzEuNDY2IDI3NC45NzggNTcxLjQ2NkMyODcuOTMxIDU3MS40NjYgMzAwLjQwNyA1NjkuNTQ5IDMxMi44ODMgNTY1LjIyOEMzMzQuNDczIDU4Ni4zNDEgMzY0LjIyMiA1OTkuNzc2IDM5Ni44NTIgNTk5Ljc3NloiIGZpbGw9ImJsYWNrIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNzIwIiBoZWlnaHQ9IjcyMCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNjA2OTM0IDAuMDk5OTc1NikiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNDg0LjEzOSIgaGVpZ2h0PSI0NzkuODE4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE4LjU1NyAxMTkuOTU4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",gemini:"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjFlbSIgc3R5bGU9ImZsZXg6bm9uZTtsaW5lLWhlaWdodDoxIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkdlbWluaTwvdGl0bGU+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9IiMzMTg2RkYiPjwvcGF0aD48cGF0aCBkPSJNMjAuNjE2IDEwLjgzNWExNC4xNDcgMTQuMTQ3IDAgMDEtNC40NS0zLjAwMSAxNC4xMTEgMTQuMTExIDAgMDEtMy42NzgtNi40NTIuNTAzLjUwMyAwIDAwLS45NzUgMCAxNC4xMzQgMTQuMTM0IDAgMDEtMy42NzkgNi40NTIgMTQuMTU1IDE0LjE1NSAwIDAxLTQuNDUgMy4wMDFjLS42NS4yOC0xLjMxOC41MDUtMi4wMDIuNjc4YS41MDIuNTAyIDAgMDAwIC45NzVjLjY4NC4xNzIgMS4zNS4zOTcgMi4wMDIuNjc3YTE0LjE0NyAxNC4xNDcgMCAwMTQuNDUgMy4wMDEgMTQuMTEyIDE0LjExMiAwIDAxMy42NzkgNi40NTMuNTAyLjUwMiAwIDAwLjk3NSAwYy4xNzItLjY4NS4zOTctMS4zNTEuNjc3LTIuMDAzYTE0LjE0NSAxNC4xNDUgMCAwMTMuMDAxLTQuNDUgMTQuMTEzIDE0LjExMyAwIDAxNi40NTMtMy42NzguNTAzLjUwMyAwIDAwMC0uOTc1IDEzLjI0NSAxMy4yNDUgMCAwMS0yLjAwMy0uNjc4eiIgZmlsbD0idXJsKCNsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfKSI+PC9wYXRoPjxwYXRoIGQ9Ik0yMC42MTYgMTAuODM1YTE0LjE0NyAxNC4xNDcgMCAwMS00LjQ1LTMuMDAxIDE0LjExMSAxNC4xMTEgMCAwMS0zLjY3OC02LjQ1Mi41MDMuNTAzIDAgMDAtLjk3NSAwIDE0LjEzNCAxNC4xMzQgMCAwMS0zLjY3OSA2LjQ1MiAxNC4xNTUgMTQuMTU1IDAgMDEtNC40NSAzLjAwMWMtLjY1LjI4LTEuMzE4LjUwNS0yLjAwMi42NzhhLjUwMi41MDIgMCAwMDAgLjk3NWMuNjg0LjE3MiAxLjM1LjM5NyAyLjAwMi42NzdhMTQuMTQ3IDE0LjE0NyAwIDAxNC40NSAzLjAwMSAxNC4xMTIgMTQuMTEyIDAgMDEzLjY3OSA2LjQ1My41MDIuNTAyIDAgMDAuOTc1IDBjLjE3Mi0uNjg1LjM5Ny0xLjM1MS42NzctMi4wMDNhMTQuMTQ1IDE0LjE0NSAwIDAxMy4wMDEtNC40NSAxNC4xMTMgMTQuMTEzIDAgMDE2LjQ1My0zLjY3OC41MDMuNTAzIDAgMDAwLS45NzUgMTMuMjQ1IDEzLjI0NSAwIDAxLTIuMDAzLS42Nzh6IiBmaWxsPSJ1cmwoI2xvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8pIj48L3BhdGg+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9InVybCgjbG9iZS1pY29ucy1nZW1pbmktMi1fUl8wXykiPjwvcGF0aD48ZGVmcz48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfIiB4MT0iNyIgeDI9IjExIiB5MT0iMTUuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjMDhCOTYyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDhCOTYyIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8iIHgxPSI4IiB4Mj0iMTEuNSIgeTE9IjUuNSIgeTI9IjExIj48c3RvcCBzdG9wLWNvbG9yPSIjRjk0NTQzIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjk0NTQzIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTItX1JfMF8iIHgxPSIzLjUiIHgyPSIxNy41IiB5MT0iMTMuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjRkFCQzEyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuNDYiIHN0b3AtY29sb3I9IiNGQUJDMTIiIHN0b3Atb3BhY2l0eT0iMCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==",deepseek:"data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RGVlcFNlZWs8L3RpdGxlPjxwYXRoIGQ9Ik0yMy43NDggNC42NTFjLS4yNTQtLjEyNC0uMzY0LjExMy0uNTEyLjIzMy0uMDUxLjA0LS4wOTQuMDktLjEzNy4xMzctLjM3Mi4zOTctLjgwNi42NTctMS4zNzMuNjI2LS44MjktLjA0Ni0xLjUzNy4yMTQtMi4xNjMuODQ4LS4xMzMtLjc4Mi0uNTc1LTEuMjQ4LTEuMjQ3LTEuNTQ4LS4zNTItLjE1NS0uNzA4LS4zMTEtLjk1NS0uNjUtLjE3Mi0uMjQtLjIxOS0uNTA5LS4zMDUtLjc3NC0uMDU1LS4xNi0uMTEtLjMyMy0uMjkzLS4zNS0uMi0uMDMxLS4yNzguMTM2LS4zNTYuMjc2LS4zMTMuNTcyLS40MzQgMS4yMDItLjQyMiAxLjg0LjAyNyAxLjQzNi42MzMgMi41OCAxLjgzOCAzLjM5My4xMzcuMDk0LjE3Mi4xODcuMTI5LjMyMy0uMDgyLjI4LS4xOC41NTMtLjI2Ni44MzMtLjA1NS4xNzktLjEzNy4yMTgtLjMyOC4xNGE1LjUgNS41IDAgMCAxLTEuNzM3LTEuMTc5Yy0uODU3LS44MjgtMS42MzEtMS43NDMtMi41OTctMi40NmExMiAxMiAwIDAgMC0uNjg5LS40N2MtLjk4NS0uOTU3LjEzLTEuNzQzLjM4Ny0xLjgzNi4yNy0uMDk4LjA5NC0uNDMzLS43NzgtLjQyOC0uODcyLjAwMy0xLjY3LjI5NS0yLjY4Ny42ODVhMyAzIDAgMCAxLS40NjUuMTM2IDkuNiA5LjYgMCAwIDAtMi44ODMtLjEwMWMtMS44ODUuMjEtMy4zOSAxLjEtNC40OTcgMi42MjJDLjA4MiA4Ljc3Ni0uMjMxIDEwLjg1NC4xNTIgMTMuMDJjLjQwMyAyLjI4NCAxLjU2OCA0LjE3NSAzLjM2IDUuNjUzIDEuODU3IDEuNTMzIDMuOTk3IDIuMjg0IDYuNDM4IDIuMTQgMS40ODItLjA4NSAzLjEzMi0uMjg0IDQuOTk0LTEuODYuNDcuMjM0Ljk2Mi4zMjggMS43OC4zOTguNjI5LjA1OCAxLjIzNS0uMDMxIDEuNzA1LS4xMjkuNzM1LS4xNTUuNjg0LS44MzYuNDE4LS45NjEtMi4xNTUtMS4wMDQtMS42ODItLjU5NS0yLjExMi0uOTI2IDEuMDk1LTEuMjk1IDIuNzY4LTMuNTk4IDMuMjg0LTYuNzMzLjA1LS4zNDYuMTE1LS44MzQuMTA4LTEuMTE0LS4wMDQtLjE3MS4wMzUtLjIzOC4yMy0uMjU3YTQuMiA0LjIgMCAwIDAgMS41NDUtLjQ3NWMxLjM5Ny0uNzYzIDEuOTYtMi4wMTYgMi4wOTMtMy41MTcuMDItLjIzLS4wMDQtLjQ2Ny0uMjQ3LS41ODhNMTEuNTggMTguMTY4Yy0yLjA4OC0xLjY0Mi0zLjEwMS0yLjE4My0zLjUyLTIuMTYtLjM5LjAyNC0uMzIuNDcyLS4yMzQuNzYzLjA5LjI4OC4yMDcuNDg3LjM3MS43NC4xMTQuMTY3LjE5Mi40MTYtLjExMy42MDMtLjY3My40MTYtMS44NDItLjE0LTEuODk3LS4xNjgtMS4zNjEtLjgwMS0yLjUtMS44Ni0zLjMwMS0zLjMwNi0uNzc1LTEuMzkzLTEuMjI1LTIuODg4LTEuMjk5LTQuNDgyLS4wMi0uMzg1LjA5NC0uNTIyLjQ3Ny0uNTkyYTQuNyA0LjcgMCAwIDEgMS41My0uMDM4YzIuMTMxLjMxMSAzLjk0NiAxLjI2NCA1LjQ2NyAyLjc3NC44NjguODYgMS41MjUgMS44ODcgMi4yMDIgMi44OS43MiAxLjA2NiAxLjQ5NCAyLjA4MiAyLjQ4IDIuOTE1LjM0OC4yOTEuNjI2LjUxMy44OTIuNjc3LS44MDIuMDktMi4xNC4xMDktMy4wNTUtLjYxNXptMS4wMDEtNi40NGEuMzA2LjMwNiAwIDAgMSAuNDE1LS4yODcuMy4zIDAgMCAxIC4xMTMuMDc0LjMuMyAwIDAgMSAuMDg2LjIxNGMwIC4xNy0uMTM2LjMwNy0uMzA4LjMwN2EuMzAzLjMwMyAwIDAgMS0uMzA2LS4zMDdtMy4xMSAxLjU5NmMtLjIuMDgxLS40LjE1MS0uNTkxLjE2YTEuMjUgMS4yNSAwIDAgMS0uNzk4LS4yNTRjLS4yNzQtLjIzLS40Ny0uMzU4LS41NTEtLjc1OGExLjcgMS43IDAgMCAxIC4wMTUtLjU4OGMuMDctLjMyNy0uMDA3LS41MzctLjIzOC0uNzI3LS4xODgtLjE1Ni0uNDI2LS4xOTktLjY4OS0uMTk5YS42LjYgMCAwIDEtLjI1NC0uMDc4LjI1My4yNTMgMCAwIDEtLjExNC0uMzU4IDEgMSAwIDAgMSAuMTkyLS4yMWMuMzU2LS4yMDIuNzY3LS4xMzYgMS4xNDYuMDE2LjM1Mi4xNDQuNjE4LjQwOCAxLjAwMS43ODIuMzkyLjQ1MS40NjIuNTc2LjY4NS45MTUuMTc2LjI2NC4zMzYuNTM2LjQ0Ni44NDguMDY2LjE5NC0uMDIuMzUzLS4yNS40NSIvPjwvc3ZnPg=="},o={claude:"Claude",openai:"OpenAI",gemini:"Gemini",deepseek:"DeepSeek"};function s(f,E=""){const T=E.trim().toLowerCase().replace(/[^a-z0-9]+/g,"");if(E.trim())return{anthropic:"claude",claude:"claude",claudecode:"claude",openai:"openai",google:"gemini",googlegemini:"gemini",googleaistudio:"gemini",gemini:"gemini",deepseek:"deepseek"}[T];const Me=f.trim().toLowerCase();if(/^(?:anthropic\/)?claude(?:$|[\s-])/.test(Me))return"claude";if(/^(?:openai\/)?(?:gpt[-\s]?\d|chatgpt(?:$|[\s-])|o[134](?:$|[\s-]))/.test(Me))return"openai";if(/^(?:google\/)?gemini(?:$|[\s-])/.test(Me))return"gemini";if(/^deepseek(?:$|[\s-])/.test(Me))return"deepseek"}const r=Fe({props:{model:{type:String,default:""},provider:{type:String,default:""},size:{type:Number,default:20}},setup:f=>()=>{const E=s(f.model,f.provider),T=E!=="gemini",Me=Math.round(f.size*(E==="openai"?.82:.58));return Ee("span",{class:["model-provider-mark",{"is-color":E&&!T}],"data-provider-logo":E??"unknown","aria-hidden":"true",title:E?`${o[E]} logo`:"Custom model",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:`${f.size}px`,height:`${f.size}px`,boxSizing:"border-box",border:"1px solid var(--provider-logo-border, #e5e5e8)",borderRadius:`${f.size>=28?9:f.size>=20?6:4}px`,background:"var(--provider-logo-surface, #fff)",color:"var(--provider-logo-muted, #a1a1aa)"}},E?[Ee("img",{src:i[E],alt:"","aria-hidden":"true",class:["model-provider-image",{"is-monochrome":T}],"data-logo-source":"bundled-brand-asset",style:{display:"block",objectFit:"contain",width:`${Me}px`,height:`${Me}px`}})]:[Ee(no,{size:Math.round(f.size*.5),strokeWidth:1.7,"aria-hidden":"true"})])}}),a=e,c=n,u=G([{id:"example-user-1",role:"user",text:"Check the typography on the homepage."},{id:"example-assistant-1",role:"assistant",parts:[{kind:"thought",text:"Check the hierarchy, type sizes, and contrast."},{kind:"tool",id:"read-page",title:"Read page styles",status:"success",input:"src/styles.css",output:"Read the heading, body, and supporting text styles."},{kind:"message",text:`Use three levels: headings, body text, and supporting details.

Keep the body readable, then refine the space between headings and paragraphs.`}]},{id:"example-user-2",role:"user",text:"Keep body text at 15px and supporting text at 12px or above."}]),h=G(""),L=G(a.models[0]??""),j=Te({get:()=>a.modelValue??h.value,set:f=>{a.modelValue===void 0&&(h.value=f),c("update:modelValue",f)}}),C=Te(()=>a.model??L.value),O=Te(()=>a.messages??u.value),H=Te(()=>a.busy||O.value.some(f=>f.streaming)),ee=G(null),$=G(null),q=G(null),w=G(null),Y=G(!0),D=G(!1),N=G(!1),S=G(!1),g=G(!1),W=G(null),Z=G(null),Q=G(null),J=G(null),ue=`conversation-${Qn().replace(/:/g,"")}`,fe=G({}),ae=G([]),re=new Set;let pe=0,te=0,z,R=!1,ne=!1,le=!1,ve,Le;const we=new Set;function Ye(){we.forEach(f=>f.cancel()),we.clear()}function Xe(){document.hidden&&Ye()}function Ze(){Le!=null&&Le.matches&&Ye()}Ie(()=>O.value.map(f=>`${f.role}:${f.id}`),(f,E)=>{if(!Le||Le.matches||document.hidden)return;const T=new Set(E),Me=new Set(f.filter(Qe=>Qe.startsWith("user:")&&!T.has(Qe)).map(Qe=>Qe.slice(5)));Me.size&&ke(()=>{var Qe;R||Le!=null&&Le.matches||document.hidden||(Qe=w.value)==null||Qe.querySelectorAll(".message-user").forEach(X=>{if(!Me.has(X.dataset.messageId??""))return;const de=X.querySelector(".user-bubble");if(!de)return;const Se=de.animate([{transform:"translate3d(0, 18px, 0)",opacity:0},{transform:"none",opacity:1}],{duration:360,easing:"cubic-bezier(.16,1,.3,1)"});Se.id="message-send-arrival",we.add(Se),Se.onfinish=()=>{we.delete(Se)},Se.oncancel=()=>{we.delete(Se)}})})});function ct(f){try{const E=new URL(f,"https://component.invalid");return["http:","https:","mailto:"].includes(E.protocol)?f:void 0}catch{return}}function M(f,E=0){if(E>4)return[f];const T=[],Me=/`([^`\n]+)`|\[([^\]\n]+)\]\(([^\s)]+)\)|\*\*([^*\n]+)\*\*|\*([^*\n]+)\*/g;let Qe=0;for(const X of f.matchAll(Me)){if(T.push(f.slice(Qe,X.index)),X[1]!==void 0)T.push(Ee("code",X[1]));else if(X[2]!==void 0){const de=ct(X[3]);T.push(Ee(de?"a":"span",de?{href:de,target:"_blank",rel:"noopener noreferrer"}:{},M(X[2],E+1)))}else T.push(Ee(X[4]!==void 0?"strong":"em",M(X[4]??X[5]??"",E+1)));Qe=X.index+X[0].length}return T.push(f.slice(Qe)),T}function x(f){var X;const E=f.replace(/\r\n?/g,`
`).split(`
`),T=[];let Me=0;const Qe=de=>/^(?:\s*```|#{1,4}\s|\s*[-*+]\s|\s*\d+\.\s|>\s?)/.test(de);for(;Me<E.length;){const de=E[Me];if(!de.trim()){Me++;continue}if(/^\s*```/.test(de)){const Se=[];for(Me++;Me<E.length&&!/^\s*```/.test(E[Me]);)Se.push(E[Me++]);Me++,T.push(Ee("pre",[Ee("code",Se.join(`
`))]))}else if(/^#{1,4}\s/.test(de)){const Se=de.match(/^(#{1,4})\s+(.*)$/);T.push(Ee(`h${Se[1].length}`,M(Se[2]))),Me++}else if(/^\s*(?:[-*+]|\d+\.)\s/.test(de)){const Se=/^\s*\d+\./.test(de),Yt=[],Bn=Se?/^\s*\d+\.\s+(.*)$/:/^\s*[-*+]\s+(.*)$/;for(;Me<E.length&&Bn.test(E[Me]);)Yt.push(Ee("li",M(E[Me++].replace(Bn,"$1"))));const ot=Se?Number(((X=de.match(/^\s*(\d+)/))==null?void 0:X[1])??1):void 0;T.push(Ee(Se?"ol":"ul",Se?{start:ot}:{},Yt))}else if(/^>\s?/.test(de)){const Se=[];for(;Me<E.length&&/^>\s?/.test(E[Me]);)Se.push(E[Me++].replace(/^>\s?/,""));T.push(Ee("blockquote",M(Se.join(`
`))))}else{const Se=[de];for(Me++;Me<E.length&&E[Me].trim()&&!Qe(E[Me]);)Se.push(E[Me++]);T.push(Ee("p",M(Se.join(`
`))))}}return T}const _=Fe({props:{text:{type:String,default:""}},setup:f=>()=>Ee("div",{class:"conversation-prose"},x(f.text))}),V=Fe({props:{name:{type:String,required:!0},size:{type:Number,default:18}},setup:f=>()=>Ee("svg",{class:["chat-glyph",`glyph-${f.name}`],width:f.size,height:f.size,viewBox:"0 0 24 24",fill:f.name==="stop"?"currentColor":"none",stroke:f.name==="stop"?"none":"currentColor","stroke-width":f.name==="stop"?void 0:1.7,"stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[Ee("g",{class:"glyph-motion"},f.name==="send"?[Ee("path",{d:"M12 18V6m-6 6 6-6 6 6"})]:f.name==="stop"?[Ee("rect",{x:3.75,y:3.75,width:16.5,height:16.5,rx:3})]:[Ee("path",{d:"M12 3A9 9 0 1 1 3 12"}),Ee("circle",{cx:3,cy:12,r:1.65,fill:"currentColor",stroke:"none"})])])}),I=Fe({setup:()=>()=>Ee("span",{class:"thinking-busy"},[Ee("span",{class:"thinking-lamp","aria-hidden":"true"},[Ee("span",{class:"thinking-lamp-halo"}),Ee("span",{class:"thinking-lamp-core"})]),Ee("span",{class:"thinking-sheen"},"Thinking…")])}),b=Te(()=>O.value.map(f=>{var Bn;const E=encodeURIComponent(f.id),T=[...f.parts??[]];f.text&&!T.some(ot=>ot.kind==="message")&&T.push({kind:"message",text:f.text});const Me=[];for(const[ot,Pt]of T.entries())if(Pt.kind==="tool"){const Ii=Me[Me.length-1];(Ii==null?void 0:Ii.kind)==="tools"?Ii.tools.push(Pt):Me.push({kind:"tools",key:`${E}-tools-${ot}`,tools:[Pt]})}else Pt.text&&Me.push({kind:Pt.kind,key:`${E}-${Pt.kind}-${encodeURIComponent(Pt.id??String(ot))}`,text:Pt.text});let Qe=-1;for(let ot=Me.length-1;ot>=0;ot--)if(((Bn=Me[ot])==null?void 0:Bn.kind)==="message"){Qe=ot;break}const X=!f.streaming,de=Me.filter((ot,Pt)=>Pt!==Qe),Se=Me[Qe],Yt=Me[Me.length-1];return{message:f,prefix:E,tailKey:Yt==null?void 0:Yt.key,blocks:X?[...de,...Se?[Se]:[]]:Me,processKey:`${E}-process`,workKeys:new Set(de.map(ot=>ot.key)),responseKey:Se==null?void 0:Se.key,outputKey:f.streaming&&(Yt==null?void 0:Yt.kind)==="message"?Yt.key:void 0,failures:T.filter(ot=>ot.kind==="tool"&&ot.status==="failed").length}})),v=Te(()=>{const f=new Set;for(const E of b.value){E.workKeys.size&&f.add(E.processKey);for(const T of E.blocks)if(f.add(T.key),T.kind==="tools")for(const Me of T.tools)U(Me)&&f.add(ce(T,Me))}return f});Ie(v,f=>{fe.value=Object.fromEntries(Object.entries(fe.value).filter(([E])=>f.has(E)))});function p(f,E=!1){return fe.value[f]??E}function A(f){return`${ue}-${f}`}function P(f,E=!1){const T=document.getElementById(A(f));T&&Ce.set(T,T.getBoundingClientRect().height),fe.value={...fe.value,[f]:!p(f,E)},le=!0,Y.value=!1}function ce(f,E){return`${f.key}-tool-${encodeURIComponent(E.id)}`}function U(f){return!!(f.input||f.output)}function m(f,E=!1){return f.status==="failed"?"failed":E&&(f.status==="running"||f.status==="pending")?"running":"done"}function K(f,E=!1){return{running:"Running",failed:"Failed",done:"Done"}[m(f,E)]}function se(f,E){a.disabled||E.disabled||(le=!0,Y.value=!1,c("message-action",{messageId:f.id,actionId:E.id}))}function je(f,E=!1){return f.tools.some(T=>m(T,E)==="running")?"running":f.tools.some(T=>m(T,E)==="failed")?"failed":"done"}function Ae(f,E=!1){const T=[...f.tools].reverse().find(Qe=>m(Qe,E)==="running");if(T)return[T.title,T.summary].filter(Boolean).join(" · ");const Me=[...new Set(f.tools.map(Qe=>Qe.title))];return Me.slice(0,3).join(" · ")+(Me.length>3?" …":"")}const Ce=new WeakMap;Ie(()=>O.value.map(f=>[f.id,!!f.streaming]),(f,E)=>{const T=new Map(E);for(const[Me,Qe]of f){if(Qe||!T.get(Me))continue;const X=b.value.find(de=>de.message.id===Me);if(!(!X||p(X.processKey,!!X.message.interrupted)))for(const de of X.workKeys){const Se=document.getElementById(A(`${de}-shell`));Se&&Ce.set(Se,Se.getBoundingClientRect().height)}}},{flush:"pre"});function He(f){const E=f;E.removeAttribute("inert"),E.style.height=`${Ce.get(f)??E.getBoundingClientRect().height}px`}function et(f){const E=f;E.offsetHeight,E.style.height=`${E.scrollHeight}px`,Ce.delete(f)}function Ve(f){f.style.removeProperty("height")}function tt(f){const E=f,T=getComputedStyle(E).display==="none"?Ce.get(f)??0:E.getBoundingClientRect().height;Ce.set(f,T),E.style.height=`${T}px`}function St(f){const E=f;E.setAttribute("inert",""),E.style.height=`${Ce.get(f)??E.getBoundingClientRect().height}px`,Ce.delete(f),E.offsetHeight,E.style.height="0px"}function it(){const f=q.value;f&&(D.value=f.scrollHeight-f.scrollTop-f.clientHeight>=80,Y.value=!le&&!D.value,N.value&&gt())}function gt(){N.value=!0,clearTimeout(ve),ve=setTimeout(()=>{N.value=!1},650)}function Xt(){le=!1,gt()}function Un(f){f.target===q.value&&Xt()}function Li(f){f.target===q.value&&!f.ctrlKey&&!f.altKey&&!f.metaKey&&["ArrowUp","ArrowDown","PageUp","PageDown","Home","End"," "].includes(f.key)&&Xt()}function bi(){const f=q.value;f&&(D.value=f.scrollHeight-f.scrollTop-f.clientHeight>=80),oe()}function oe(){R||le||!Y.value||te||(te=requestAnimationFrame(()=>{te=0,!R&&!le&&Y.value&&q.value&&(q.value.scrollTop=q.value.scrollHeight)}))}function ye(){le=!1,Y.value=!0,ke(oe)}function xt(){const f=ee.value;f&&(f.style.height="auto",f.style.height=`${Math.min(Math.max(f.scrollHeight,40),128)}px`)}Ie(j,()=>ke(xt)),Ie(O,()=>ke(oe),{deep:!0}),Ie(H,()=>ke(oe));const nt=Te(()=>!a.disabled&&!H.value&&!!(j.value.trim()||ae.value.length)&&(!a.models.length||a.models.includes(C.value)));function ft(f){a.disabled||(j.value=f.target.value)}function Ut(){if(!nt.value||S.value||ne)return;ne=!0;const f=j.value.trim(),E=ae.value.map(T=>T.file);if(a.messages===void 0)u.value=[...u.value,{id:`${ue}-user-${++pe}`,role:"user",text:f,attachments:ae.value.map(T=>({id:T.id,name:T.file.name,mimeType:T.file.type,url:T.url}))}];else for(const T of ae.value)T.url&&jo(T.url);j.value="",ae.value=[],c("send",{text:f,model:C.value,files:E}),ye(),ke(()=>{ne=!1})}function ll(f){f.key!=="Enter"||f.shiftKey||f.ctrlKey||f.metaKey||f.altKey||f.isComposing||S.value||f.keyCode===229||(f.preventDefault(),Ut())}function Ts(f){if(a.disabled)return;const E=[...ae.value];for(const T of f){if(E.some(Qe=>Qe.file.name===T.name&&Qe.file.size===T.size&&Qe.file.type===T.type&&Qe.file.lastModified===T.lastModified))continue;const Me=T.type.startsWith("image/")?URL.createObjectURL(T):void 0;Me&&re.add(Me),E.push({id:`${ue}-file-${++pe}`,file:T,url:Me})}ae.value=E}function cl(f){const E=f.target;Ts(Array.from(E.files??[])),E.value=""}function ul(f){var T;if(a.disabled)return;const E=Array.from(((T=f.clipboardData)==null?void 0:T.files)??[]).filter(Me=>Me.type.startsWith("image/"));E.length&&(f.preventDefault(),Ts(E))}function jo(f){var E;((E=J.value)==null?void 0:E.url)===f&&bo(),URL.revokeObjectURL(f),re.delete(f)}function dl(f){if(a.disabled)return;const E=ae.value.find(T=>T.id===f);E!=null&&E.url&&jo(E.url),ae.value=ae.value.filter(T=>T.id!==f)}function Lo(f){var E;if(!(!((E=f.mimeType)!=null&&E.startsWith("image/"))||!f.url))return Di(f)??(/^data:image\/(?:png|jpeg|gif|webp|avif|bmp);/i.test(f.url)?f.url:void 0)}function Di(f){if(f.url)try{const E=new URL(f.url,"https://component.invalid");return["http:","https:","blob:"].includes(E.protocol)?f.url:void 0}catch{return}}async function ws(f,E){J.value={url:f,name:E},await ke(),!R&&Q.value&&!Q.value.open&&Q.value.showModal()}function bo(){var f;(f=Q.value)==null||f.close(),J.value=null}function ln(f=!1){g.value=!1,f&&ke(()=>{var E;R||(E=Z.value)==null||E.focus({preventScroll:!0})})}function Do(){var f;return[...((f=W.value)==null?void 0:f.querySelectorAll('[role="menuitemradio"]'))??[]]}function zs(f){if(!f)return;f.focus({preventScroll:!0});const E=f.parentElement;E&&(f.offsetTop<E.scrollTop?E.scrollTop=f.offsetTop:f.offsetTop+f.offsetHeight>E.scrollTop+E.clientHeight&&(E.scrollTop=f.offsetTop+f.offsetHeight-E.clientHeight))}async function As(){a.disabled||!a.models.length||(g.value=!0,await ke(),!R&&g.value&&zs(Do().find(f=>f.getAttribute("aria-checked")==="true")??Do()[0]))}function Ml(f){a.disabled||!a.models.includes(f)||(a.model===void 0&&(L.value=f),c("update:model",f),ln(!0))}async function pl(f){if(f.isComposing||a.disabled||f.ctrlKey||f.altKey||f.metaKey)return;if(f.key==="Escape"&&g.value){f.preventDefault(),f.stopPropagation(),ln(!0);return}if(!["ArrowDown","ArrowUp","Home","End"].includes(f.key))return;if(f.preventDefault(),!g.value){await As();return}const E=Do();if(!E.length)return;const T=E.indexOf(document.activeElement),Me=f.key==="Home"?0:f.key==="End"?E.length-1:(T+(f.key==="ArrowDown"?1:-1)+E.length)%E.length;zs(E[Me])}function ks(f){var E;(E=W.value)!=null&&E.contains(f.target)||ln()}function gl(f){var E;(E=W.value)!=null&&E.contains(f.relatedTarget)||ln()}return Ie(()=>a.models,f=>{a.model===void 0&&!f.includes(L.value)&&(L.value=f[0]??""),ln()},{deep:!0}),Ie(()=>a.model,(f,E)=>{f===void 0&&E!==void 0&&(L.value=a.models.includes(E)?E:a.models[0]??"")}),Ie(()=>a.disabled,f=>{f&&ln()}),Ie(()=>a.sessionKey,()=>{j.value="";for(const f of[...re])jo(f);ae.value=[],u.value=[],fe.value={},ln(),S.value=!1,ye()}),kt(()=>{Le=matchMedia("(prefers-reduced-motion: reduce)"),Le.addEventListener("change",Ze),document.addEventListener("visibilitychange",Xe),document.addEventListener("pointerdown",ks),typeof ResizeObserver<"u"&&(z=new ResizeObserver(bi),w.value&&z.observe(w.value),q.value&&z.observe(q.value)),xt(),ye()}),Qt(()=>{var f;R=!0,clearTimeout(ve),Ye(),Le==null||Le.removeEventListener("change",Ze),document.removeEventListener("visibilitychange",Xe),te&&cancelAnimationFrame(te),z==null||z.disconnect(),document.removeEventListener("pointerdown",ks);for(const E of re)URL.revokeObjectURL(E);re.clear(),(f=Q.value)==null||f.close()}),t({focus:()=>{var f;return(f=ee.value)==null?void 0:f.focus()},scrollToBottom:ye}),(f,E)=>(y(),k("section",Gd,[l("div",Vd,[l("div",{ref_key:"scroller",ref:q,class:"conversation-scroller","data-scrolling":N.value||void 0,role:"region","aria-label":"Messages",tabindex:"0",onScrollPassive:it,onWheelPassive:Xt,onTouchmovePassive:Xt,onPointerdown:Un,onKeydown:Li},[l("div",{ref_key:"transcript",ref:w,class:"conversation-transcript"},[!b.value.length&&!H.value?(y(),k("p",Zd,"Start a conversation")):ge("",!0),l("div",Kd,[(y(!0),k(Ne,null,_e(b.value,T=>{var Me,Qe;return y(),k("article",{key:T.message.id,class:he(["conversation-message",`message-${T.message.role}`]),"data-message-id":T.message.id,"aria-label":T.message.role==="user"?"User message":T.message.role==="assistant"?"Assistant message":"System message"},[T.message.role==="system"?(y(),k("p",qd,ie(T.message.text),1)):(y(),k(Ne,{key:1},[(Me=T.message.attachments)!=null&&Me.length?(y(),k("div",Xd,[(y(!0),k(Ne,null,_e(T.message.attachments,(X,de)=>(y(),k(Ne,{key:X.id??de},[Lo(X)?(y(),k("button",{key:0,type:"button",class:"image-attachment","aria-label":`Preview ${X.name}`,onClick:Se=>ws(Lo(X),X.name)},[l("img",{src:Lo(X),alt:X.name,loading:"lazy",onLoad:oe},null,40,tM)],8,eM)):(y(),xe(kn(Di(X)?"a":"span"),{key:1,class:"message-file",href:Di(X),download:Di(X)?X.name:void 0,title:X.name},{default:Ke(()=>[B(F(va),{"aria-hidden":"true",size:17}),l("span",null,ie(X.name),1)]),_:2},1032,["href","download","title"]))],64))),128))])):ge("",!0),T.message.role==="user"&&T.message.text?(y(),k("div",nM,[B(F(_),{text:T.message.text},null,8,["text"])])):T.message.role==="assistant"?(y(),k(Ne,{key:2},[B(dt,{name:"conversation-fold",onBeforeEnter:He,onEnter:et,onAfterEnter:Ve,onLeave:St,onAfterLeave:Ve,onEnterCancelled:tt,onLeaveCancelled:tt},{default:Ke(()=>[!T.message.streaming&&T.workKeys.size?(y(),k("div",iM,[l("button",{type:"button",class:"process-toggle","aria-expanded":p(T.processKey,!!(T.message.streaming||T.message.interrupted)),"aria-controls":[...T.workKeys].map(X=>A(`${X}-shell`)).join(" "),onClick:X=>P(T.processKey,!!(T.message.streaming||T.message.interrupted))},[E[6]||(E[6]=l("span",null,"Process",-1)),B(F(ri),{"aria-hidden":"true",size:12,class:he(["process-chevron",{"is-open":p(T.processKey,!!(T.message.streaming||T.message.interrupted))}])},null,8,["class"]),T.failures?(y(),k("span",sM,ie(T.failures)+" failed",1)):ge("",!0),T.message.interrupted?(y(),k("span",aM,"Interrupted")):ge("",!0)],8,oM)])):ge("",!0)]),_:2},1024),(y(!0),k(Ne,null,_e(T.blocks,X=>(y(),xe(dt,{key:X.key,name:"conversation-fold",onBeforeEnter:He,onEnter:et,onAfterEnter:Ve,onLeave:St,onAfterLeave:Ve,onEnterCancelled:tt,onLeaveCancelled:tt,persisted:""},{default:Ke(()=>[qe(l("div",{id:A(`${X.key}-shell`),class:he(["conversation-fold message-block",{"completed-response":!T.message.streaming&&T.workKeys.size&&X.key===T.responseKey}]),"data-block-kind":X.kind,inert:!T.message.streaming&&T.workKeys.has(X.key)&&!p(T.processKey,!!(T.message.streaming||T.message.interrupted))||void 0,"aria-hidden":!T.message.streaming&&T.workKeys.has(X.key)&&!p(T.processKey,!!(T.message.streaming||T.message.interrupted))||void 0},[X.kind==="message"?(y(),xe(F(_),{key:0,text:X.text},null,8,["text"])):X.kind==="thought"?(y(),k("div",{key:1,class:he(["thought-block",{"elapsed-thought":!T.message.streaming}])},[T.message.streaming?(y(),k(Ne,{key:1},[l("button",{type:"button",class:"detail-toggle thought-toggle","aria-expanded":p(X.key,X.key===T.tailKey),"aria-controls":A(X.key),onClick:de=>P(X.key,X.key===T.tailKey)},[X.key===T.tailKey?(y(),xe(F(V),{key:0,name:"arc",size:12,class:"working-icon"})):(y(),xe(F(Nd),{key:1,"aria-hidden":"true",size:12})),E[7]||(E[7]=l("span",{class:"thought-title"},"Thinking process",-1)),X.key===T.tailKey?(y(),k("span",uM,"Generating…")):ge("",!0),B(F(Gt),{"aria-hidden":"true",size:12,class:he(["disclosure",{"is-open":p(X.key,X.key===T.tailKey)}])},null,8,["class"])],8,cM),B(dt,{name:"conversation-fold",onBeforeEnter:He,onEnter:et,onAfterEnter:Ve,onLeave:St,onAfterLeave:Ve,onEnterCancelled:tt,onLeaveCancelled:tt,persisted:""},{default:Ke(()=>[qe(l("div",{id:A(X.key),class:"conversation-fold",inert:!p(X.key,X.key===T.tailKey)||void 0,"aria-hidden":!p(X.key,X.key===T.tailKey)||void 0},[l("p",MM,ie(X.text),1)],8,dM),[[Ct,p(X.key,X.key===T.tailKey)]])]),_:2},1024)],64)):(y(),k("p",lM,ie(X.text),1))],2)):(y(),k("div",{key:2,class:"tools-block","data-state":je(X,!!T.message.streaming)},[l("button",{type:"button",class:"detail-toggle tools-toggle","aria-expanded":p(X.key),"aria-controls":A(X.key),onClick:de=>P(X.key)},[je(X,!!T.message.streaming)==="running"?(y(),xe(F(V),{key:0,name:"arc",size:12,class:"working-icon"})):je(X)==="failed"?(y(),xe(F(to),{key:1,"aria-hidden":"true",size:12,class:"error-icon"})):(y(),xe(F(lt),{key:2,"aria-hidden":"true",size:12})),l("span",fM,ie(X.tools.length)+" tool"+ie(X.tools.length===1?"":"s")+" used",1),je(X,!!T.message.streaming)==="failed"?(y(),k("span",hM,ie(X.tools.filter(de=>de.status==="failed").length)+" failed",1)):ge("",!0),l("span",{class:he(["tools-context",{"running-context":je(X,!!T.message.streaming)==="running"}])},ie(Ae(X,!!T.message.streaming)),3),B(F(Gt),{"aria-hidden":"true",size:12,class:he(["disclosure",{"is-open":p(X.key)}])},null,8,["class"])],8,gM),B(dt,{name:"conversation-fold",onBeforeEnter:He,onEnter:et,onAfterEnter:Ve,onLeave:St,onAfterLeave:Ve,onEnterCancelled:tt,onLeaveCancelled:tt,persisted:""},{default:Ke(()=>[qe(l("div",{id:A(X.key),class:"conversation-fold",inert:!p(X.key)||void 0,"aria-hidden":!p(X.key)||void 0},[l("ul",yM,[(y(!0),k(Ne,null,_e(X.tools,de=>(y(),k("li",{key:de.id,"data-state":m(de,!!T.message.streaming)},[(y(),xe(kn(U(de)?"button":"div"),{type:U(de)?"button":void 0,class:"tool-row","aria-expanded":U(de)?p(ce(X,de),de.status==="failed"):void 0,"aria-controls":U(de)?A(ce(X,de)):void 0,onClick:Se=>U(de)&&P(ce(X,de),de.status==="failed")},{default:Ke(()=>[m(de,!!T.message.streaming)==="running"?(y(),xe(F(V),{key:0,name:"arc",size:16,class:"working-icon"})):de.status==="failed"?(y(),xe(F(to),{key:1,"aria-hidden":"true",size:16,class:"error-icon"})):/read|读取/i.test(de.title)?(y(),xe(F(Gr),{key:2,"aria-hidden":"true",size:16})):(y(),xe(F(Fr),{key:3,"aria-hidden":"true",size:16})),l("span",{class:he(["tool-title",{"with-summary":de.summary}]),title:de.title},ie(de.title),11,vM),de.summary?(y(),k("span",{key:4,class:"tool-summary",title:de.summary},ie(de.summary),9,xM)):ge("",!0),l("span",{class:he(["tool-status",{"error-text":de.status==="failed","running-context":m(de,!!T.message.streaming)==="running"}])},ie(K(de,!!T.message.streaming)),3),U(de)?(y(),xe(F(Gt),{key:5,"aria-hidden":"true",size:16,class:he(["disclosure",{"is-open":p(ce(X,de),de.status==="failed")}])},null,8,["class"])):ge("",!0)]),_:2},1032,["type","aria-expanded","aria-controls","onClick"])),B(dt,{name:"conversation-fold",onBeforeEnter:He,onEnter:et,onAfterEnter:Ve,onLeave:St,onAfterLeave:Ve,onEnterCancelled:tt,onLeaveCancelled:tt,persisted:""},{default:Ke(()=>[qe(l("div",{id:A(ce(X,de)),class:"conversation-fold",inert:!p(ce(X,de),de.status==="failed")||void 0,"aria-hidden":!p(ce(X,de),de.status==="failed")||void 0},[l("div",LM,[de.input?(y(),k(Ne,{key:0},[E[8]||(E[8]=l("span",null,"Input",-1)),l("pre",null,ie(de.input),1)],64)):ge("",!0),de.output?(y(),k(Ne,{key:1},[l("span",{class:he({"error-text":de.status==="failed"})},"Output",2),l("pre",{class:he({"failed-output":de.status==="failed"})},ie(de.output),3)],64)):ge("",!0)])],8,jM),[[Ct,U(de)&&p(ce(X,de),de.status==="failed")]])]),_:2},1024)],8,NM))),128))])],8,mM),[[Ct,p(X.key)]])]),_:2},1024)],8,pM))],10,rM),[[Ct,T.message.streaming||!T.workKeys.has(X.key)||p(T.processKey,!!(T.message.streaming||T.message.interrupted))]])]),_:2},1024))),128)),T.message.streaming?(y(),k("div",{key:0,class:he(["generation-status",{"is-outputting":T.outputKey}]),role:"status"},[T.outputKey?(y(),k("span",bM,"Writing")):(y(),xe(F(I),{key:1}))],2)):T.message.interrupted?(y(),k("p",DM,"Stopped")):ge("",!0),T.message.error?(y(),k("p",IM,ie(T.message.error),1)):ge("",!0)],64)):ge("",!0),(Qe=T.message.actions)!=null&&Qe.length?(y(),k("div",TM,[(y(!0),k(Ne,null,_e(T.message.actions,X=>(y(),k("button",{key:X.id,type:"button",class:"message-action","data-message-action":X.id,disabled:e.disabled||X.disabled,onClick:de=>se(T.message,X)},[X.kind==="preview"?(y(),xe(F(fd),{key:0,size:15,"aria-hidden":"true"})):ge("",!0),De(ie(X.label),1)],8,wM))),128))])):ge("",!0)],64))],10,Jd)}),128))]),e.busy&&!O.value.some(T=>T.streaming)?(y(),k("div",zM,[B(F(I))])):ge("",!0)],512)],40,Fd),D.value?(y(),k("button",{key:0,type:"button",class:"jump-latest","aria-label":"Jump to latest message",onClick:ye},[B(F(cd),{"aria-hidden":"true",size:15}),E[9]||(E[9]=l("span",null,"Jump to latest",-1))])):ge("",!0)]),l("div",AM,[e.error?(y(),k("p",kM,ie(e.error),1)):ge("",!0),ae.value.length?(y(),k("div",SM,[(y(!0),k(Ne,null,_e(ae.value,T=>(y(),k("div",{key:T.id,class:"pending-file"},[T.url?(y(),k("button",{key:0,type:"button",class:"pending-image","aria-label":`Preview ${T.file.name}`,onClick:Me=>ws(T.url,T.file.name)},[l("img",{src:T.url,alt:T.file.name},null,8,CM)],8,EM)):(y(),k("span",{key:1,class:"pending-name",title:T.file.name},[B(F(va),{"aria-hidden":"true",size:17}),l("span",null,ie(T.file.name),1)],8,OM)),l("button",{type:"button",class:"remove-file","aria-label":`Remove ${T.file.name}`,disabled:e.disabled,onClick:Me=>dl(T.id)},[B(F(Cn),{"aria-hidden":"true",size:12})],8,QM)]))),128))])):ge("",!0),l("div",{class:he(["conversation-composer",{"is-disabled":e.disabled}])},[l("div",UM,[l("textarea",{ref_key:"textarea",ref:ee,value:j.value,rows:"1",placeholder:e.placeholder,"aria-label":"Message",disabled:e.disabled,onInput:ft,onKeydown:ll,onCompositionstart:E[0]||(E[0]=T=>S.value=!0),onCompositionend:E[1]||(E[1]=T=>S.value=!1),onPaste:ul},null,40,YM)]),l("div",PM,[l("button",{type:"button",class:"conversation-action attach-action","aria-label":"Add attachments",title:"Add attachments",disabled:e.disabled,onClick:E[2]||(E[2]=T=>{var Me;return(Me=$.value)==null?void 0:Me.click()})},[B(F(Vr),{"aria-hidden":"true",size:18})],8,_M),l("input",{ref_key:"fileInput",ref:$,type:"file",multiple:"",class:"conversation-file-input",accept:e.accept||void 0,disabled:e.disabled,"aria-label":"Choose files",onChange:cl},null,40,WM),e.models.length?(y(),k("div",{key:0,ref_key:"modelRoot",ref:W,class:"conversation-model",onKeydown:pl,onFocusout:gl},[l("button",{ref_key:"modelTrigger",ref:Z,type:"button",class:"model-trigger",disabled:e.disabled,"aria-label":"Select model","aria-haspopup":"menu","aria-expanded":g.value,"aria-controls":`${ue}-models`,onClick:E[3]||(E[3]=T=>g.value?ln():As())},[C.value?(y(),xe(F(r),{key:0,model:C.value},null,8,["model"])):ge("",!0),l("span",BM,ie(e.models.includes(C.value)?C.value:"Select model"),1),B(F(Gt),{"aria-hidden":"true",size:13,class:he(["disclosure",{"is-open":g.value}])},null,8,["class"])],8,RM),g.value?(y(),k("div",{key:0,id:`${ue}-models`,class:"conversation-model-menu",role:"menu","aria-label":"Available models"},[(y(!0),k(Ne,null,_e(e.models,T=>(y(),k("button",{key:T,type:"button",role:"menuitemradio","aria-checked":C.value===T,onClick:Me=>Ml(T)},[B(F(r),{model:T},null,8,["model"]),l("span",GM,ie(T),1),C.value===T?(y(),xe(F(lt),{key:0,"aria-hidden":"true",size:14})):ge("",!0)],8,HM))),128))],8,$M)):ge("",!0)],544)):ge("",!0),l("div",VM,[l("button",{type:"button",class:he(["conversation-action composer-primary",H.value?"stop-action":"send-action"]),"data-kind":H.value?"stop":"send",disabled:H.value?e.disabled:!nt.value,"aria-label":H.value?"Stop generating":"Send message",title:H.value?"Stop generating":"Send message",onClick:E[4]||(E[4]=T=>H.value?!e.disabled&&c("stop"):Ut())},[B(dt,{name:"primary-icon",mode:"out-in"},{default:Ke(()=>[(y(),xe(F(V),{key:H.value?"stop":"send",name:H.value?"stop":"send",size:H.value?16:18},null,8,["name","size"]))]),_:1})],10,FM)])])],2)]),l("dialog",{ref_key:"previewDialog",ref:Q,class:"conversation-image-dialog","aria-label":"Image preview",onClick:an(bo,["self"]),onClose:E[5]||(E[5]=T=>J.value=null)},[J.value?(y(),k(Ne,{key:0},[l("button",{type:"button",class:"close-preview","aria-label":"Close image preview",onClick:bo},[B(F(Cn),{"aria-hidden":"true",size:20})]),l("img",{src:J.value.url,alt:J.value.name},null,8,ZM),l("p",null,ie(J.value.name),1)],64)):ge("",!0)],544)]))}}),Zr=Dt(KM,[["__scopeId","data-v-d64f00d3"]]),JM={class:"thinking-label"},qM=Fe({__name:"ThinkingIndicator",props:{label:{default:"Thinking"},busy:{type:Boolean,default:!0}},setup(e){return(t,n)=>(y(),k("span",{class:he(["thinking-indicator",{"is-busy":e.busy}]),role:"status"},[n[0]||(n[0]=l("span",{class:"thinking-lamp","aria-hidden":"true"},[l("i",{class:"lamp-halo"}),l("i",{class:"lamp-core"})],-1)),l("span",JM,ie(e.label),1)],2))}}),XM=Dt(qM,[["__scopeId","data-v-067d7323"]]),ep={class:"model-label"},tp=["aria-expanded","disabled"],np={class:"model-description"},ip={class:"model-search"},op=["aria-activedescendant"],sp=["id","onPointerenter","onFocus","aria-selected","onClick"],ap={key:0,class:"no-models"},rp=Fe({__name:"ModelSelector",props:{modelValue:{default:"claude-sonnet"},options:{default:()=>[{id:"claude-sonnet",name:"Claude Sonnet 4",provider:"Anthropic",description:"General purpose",color:"#c58763"},{id:"gpt-4.1",name:"GPT-4.1",provider:"OpenAI",description:"Everyday reasoning",color:"#3b9b81"},{id:"gemini-pro",name:"Gemini 2.5 Pro",provider:"Google",description:"Complex tasks",color:"#648af4"},{id:"deepseek",name:"DeepSeek V3",provider:"DeepSeek",description:"Coding",color:"#6385f8"}]}},emits:["update:modelValue","select"],setup(e,{emit:t}){const n={claude:"data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+Q2xhdWRlPC90aXRsZT48cGF0aCBkPSJtNC43MTQ0IDE1Ljk1NTUgNC43MTc0LTIuNjQ3MS4wNzktLjIzMDctLjA3OS0uMTI3NWgtLjIzMDdsLS43ODkzLS4wNDg2LTIuNjk1Ni0uMDcyOS0yLjMzNzUtLjA5NzEtMi4yNjQ2LS4xMjE0LS41NzA3LS4xMjE1LS41MzQzLS43MDQyLjA1NDYtLjM1MjIuNDc5Ny0uMzIxOC42ODYuMDYwOCAxLjUxNzkuMTAzMiAyLjI3NjcuMTU3OCAxLjY1MTQuMDk3MiAyLjQ0NjguMjU1aC4zODg2bC4wNTQ2LS4xNTc5LS4xMzM2LS4wOTcxLS4xMDMyLS4wOTcyTDYuOTczIDkuODM1NmwtMi41NS0xLjY4NzktMS4zMzU2LS45NzE0LS43MjI1LS40OTE4LS4zNjQzLS40NjE0LS4xNTc4LTEuMDA3OC42NTU3LS43MjI1Ljg4MDMuMDYwNy4yMjQ2LjA2MDcuODkyNS42ODYgMS45MDY0IDEuNDc1NCAyLjQ4OTMgMS44MzM2LjM2NDMuMzAzNS4xNDU3LS4xMDMyLjAxODItLjA3MjgtLjE2NC0uMjczMy0xLjM1MzktMi40NDY3LTEuNDQ1LTIuNDg5My0uNjQzNS0xLjAzMi0uMTctLjYxOTRjLS4wNjA3LS4yNTUtLjEwMzItLjQ2NzQtLjEwMzItLjcyODVMNi4yODcuMTMzNSA2LjY5OTcgMGwuOTk1Ny4xMzM2LjQxOS4zNjQyLjYxOTIgMS40MTQ3IDEuMDAxOCAyLjIyODIgMS41NTQzIDMuMDI5Ni40NTUzLjg5ODUuMjQyOS44MzE4LjA5MS4yNTVoLjE1Nzl2LS4xNDU3bC4xMjc1LTEuNzA2LjIzNjgtMi4wOTQ3LjIzMDctMi42OTU3LjA3ODktLjc1ODkuMzc2NC0uOTEwNy43NDY4LS40OTE4LjU4MjguMjc5My40Nzk3LjY4Ni0uMDY2OC40NDMzLS4yODUzIDEuODUxNy0uNTU4NiAyLjkwMjEtLjM2NDMgMS45NDI5aC4yMTI1bC4yNDI5LS4yNDI5Ljk4MzUtMS4zMDUzIDEuNjUxNC0yLjA2NDMuNzI4Ni0uODE5Ni44NS0uOTA0Ni41NDY0LS40MzExaDEuMDMyMWwuNzU5IDEuMTI5My0uMzQgMS4xNjU3LTEuMDYyNSAxLjM0NzgtLjg4MDQgMS4xNDE0LTEuMjYyOCAxLjctLjc4OTMgMS4zNi4wNzI5LjEwOTMuMTg4Mi0uMDE4MyAyLjg1MzUtLjYwNyAxLjU0MjEtLjI3OTQgMS44Mzk2LS4zMTU3LjgzMTguMzg4Ni4wOTEuMzk0Ni0uMzI3OC44MDc1LTEuOTY3LjQ4NTctMi4zMDcyLjQ2MTQtMy40MzY0LjgxMzYtLjA0MjUuMDMwNC4wNDg2LjA2MDcgMS41NDgyLjE0NTcuNjYxOC4wMzY0aDEuNjIxbDMuMDE3NS4yMjQ3Ljc4OTIuNTIyLjQ3MzYuNjM3Ni0uMDc5LjQ4NTctMS4yMTQyLjYxOTMtMS42MzkzLS4zODg2LTMuODI1LS45MTA3LTEuMzExMy0uMzI3OWgtLjE4MjJ2LjEwOTNsMS4wOTI5IDEuMDY4NiAyLjAwMzUgMS44MDkyIDIuNTA3NSAyLjMzMTQuMTI3NS41NzY4LS4zMjE4LjQ1NTQtLjM0LS4wNDg2LTIuMjAzOS0xLjY1NzUtLjg1LS43NDY4LTEuOTI0Ni0xLjYyMWgtLjEyNzV2LjE3bC40NDMyLjY0OTYgMi4zNDM2IDMuNTIxNC4xMjE0IDEuMDgwNy0uMTcuMzUyMS0uNjA3MS4yMTI1LS42Njc5LS4xMjE0LTEuMzcyMS0xLjkyNDZMMTQuMzggMTcuOTU5bC0xLjE0MTQtMS45NDI4LS4xMzk3LjA3OS0uNjc0IDcuMjU1Mi0uMzE1Ni4zNzAzLS43Mjg2LjI3OTMtLjYwNzEtLjQ2MTQtLjMyMTgtLjc0NjguMzIxOC0xLjQ3NTMuMzg4Ni0xLjkyNDYuMzE1Ny0xLjUzLjI4NTMtMS45MDA0LjE3LS42MzE0LS4wMTIxLS4wNDI1LS4xMzk3LjAxODItMS40MzI4IDEuOTY3Mi0yLjE3OTYgMi45NDQ2LTEuNzI0MyAxLjg0NTYtLjQxMjguMTY0LS43MTY0LS4zNzA0LjA2NjctLjY2MTguNDAwOC0uNTg4OSAyLjM4Ni0zLjAzNTcgMS40Mzg5LTEuODgyLjkyOS0xLjA4NjgtLjAwNjItLjE1NzloLS4wNTQ2bC02LjMzODUgNC4xMTY0LTEuMTI5My4xNDU3LS40ODU3LS40NTU0LjA2MDgtLjc0NjcuMjMwNy0uMjQyOSAxLjkwNjQtMS4zMTE0WiIvPjwvc3ZnPg==",openai:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIxIiBoZWlnaHQ9IjcyMSIgdmlld0JveD0iMCAwIDcyMSA3MjEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xNjM3XzI5MzQpIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxXzE2MzdfMjkzNCkiPgo8cGF0aCBkPSJNMzA0LjI0NiAyOTQuNjExVjI0OS4wMjhDMzA0LjI0NiAyNDUuMTg5IDMwNS42ODcgMjQyLjMwOSAzMDkuMDQ0IDI0MC4zOTJMNDAwLjY5MiAxODcuNjEyQzQxMy4xNjcgMTgwLjQxNSA0MjguMDQyIDE3Ny4wNTggNDQzLjM5NCAxNzcuMDU4QzUwMC45NzEgMTc3LjA1OCA1MzcuNDQgMjIxLjY4MiA1MzcuNDQgMjY5LjE4MkM1MzcuNDQgMjcyLjU0IDUzNy40NCAyNzYuMzc5IDUzNi45NTkgMjgwLjIxOEw0NDEuOTU0IDIyNC41NThDNDM2LjE5NyAyMjEuMjAxIDQzMC40MzcgMjIxLjIwMSA0MjQuNjggMjI0LjU1OEwzMDQuMjQ2IDI5NC42MTFaTTUxOC4yNDUgNDcyLjE0NVYzNjMuMjI0QzUxOC4yNDUgMzU2LjUwNSA1MTUuMzY0IDM1MS43MDcgNTA5LjYwOCAzNDguMzQ5TDM4OS4xNzQgMjc4LjI5Nkw0MjguNTE5IDI1NS43NDNDNDMxLjg3NyAyNTMuODI2IDQzNC43NTcgMjUzLjgyNiA0MzguMTE1IDI1NS43NDNMNTI5Ljc2MiAzMDguNTIzQzU1Ni4xNTQgMzIzLjg3OSA1NzMuOTA1IDM1Ni41MDUgNTczLjkwNSAzODguMTcxQzU3My45MDUgNDI0LjYzNiA1NTIuMzE1IDQ1OC4yMjUgNTE4LjI0NSA0NzIuMTQxVjQ3Mi4xNDVaTTI3NS45MzcgMzc2LjE4MkwyMzYuNTkyIDM1My4xNTJDMjMzLjIzNSAzNTEuMjM1IDIzMS43OTQgMzQ4LjM1NCAyMzEuNzk0IDM0NC41MTVWMjM4Ljk1NkMyMzEuNzk0IDE4Ny42MTcgMjcxLjEzOSAxNDguNzQ5IDMyNC40IDE0OC43NDlDMzQ0LjU1NSAxNDguNzQ5IDM2My4yNjQgMTU1LjQ2OCAzNzkuMTAyIDE2Ny40NjNMMjg0LjU3OCAyMjIuMTY0QzI3OC44MjIgMjI1LjUyMSAyNzUuOTQyIDIzMC4zMTkgMjc1Ljk0MiAyMzcuMDM5VjM3Ni4xODZMMjc1LjkzNyAzNzYuMTgyWk0zNjAuNjI2IDQyNS4xMjJMMzA0LjI0NiAzOTMuNDU1VjMyNi4yODNMMzYwLjYyNiAyOTQuNjE2TDQxNy4wMDIgMzI2LjI4M1YzOTMuNDU1TDM2MC42MjYgNDI1LjEyMlpNMzk2Ljg1MiA1NzAuOTg5QzM3Ni42OTggNTcwLjk4OSAzNTcuOTg5IDU2NC4yNyAzNDIuMTUxIDU1Mi4yNzZMNDM2LjY3NCA0OTcuNTc0QzQ0Mi40MzEgNDk0LjIxNyA0NDUuMzExIDQ4OS40MTkgNDQ1LjMxMSA0ODIuNjk5VjM0My41NTJMNDg1LjEzOCAzNjYuNTgyQzQ4OC40OTUgMzY4LjQ5OSA0ODkuOTM2IDM3MS4zNzkgNDg5LjkzNiAzNzUuMjE5VjQ4MC43NzhDNDg5LjkzNiA1MzIuMTE3IDQ1MC4xMDkgNTcwLjk4NSAzOTYuODUyIDU3MC45ODVWNTcwLjk4OVpNMjgzLjEzNCA0NjMuOTlMMTkxLjQ4NiA0MTEuMjExQzE2NS4wOTQgMzk1Ljg1NCAxNDcuMzQzIDM2My4yMjkgMTQ3LjM0MyAzMzEuNTYyQzE0Ny4zNDMgMjk0LjYxNiAxNjkuNDE1IDI2MS41MDkgMjAzLjQ4IDI0Ny41OTNWMzU2Ljk5MUMyMDMuNDggMzYzLjcxIDIwNi4zNjEgMzY4LjUwOCAyMTIuMTE3IDM3MS44NjZMMzMyLjA3NCA0NDEuNDM3TDI5Mi43MjkgNDYzLjk5QzI4OS4zNzIgNDY1LjkwNyAyODYuNDkxIDQ2NS45MDcgMjgzLjEzNCA0NjMuOTlaTTI3Ny44NTkgNTQyLjY4QzIyMy42MzkgNTQyLjY4IDE4My44MTMgNTAxLjg5NSAxODMuODEzIDQ1MS41MTRDMTgzLjgxMyA0NDcuNjc1IDE4NC4yOTQgNDQzLjgzNiAxODQuNzcxIDQzOS45OTdMMjc5LjI5NSA0OTQuNjk4QzI4NS4wNTEgNDk4LjA1NiAyOTAuODEyIDQ5OC4wNTYgMjk2LjU2OCA0OTQuNjk4TDQxNy4wMDIgNDI1LjEyN1Y0NzAuNzFDNDE3LjAwMiA0NzQuNTQ5IDQxNS41NjIgNDc3LjQyOSA0MTIuMjA0IDQ3OS4zNDZMMzIwLjU1NyA1MzIuMTI2QzMwOC4wODEgNTM5LjMyMyAyOTMuMjA2IDU0Mi42OCAyNzcuODU0IDU0Mi42OEgyNzcuODU5Wk0zOTYuODUyIDU5OS43NzZDNDU0LjkxMSA1OTkuNzc2IDUwMy4zNyA1NTguNTEzIDUxNC40MSA1MDMuODEyQzU2OC4xNDkgNDg5Ljg5NiA2MDIuNjk2IDQzOS41MTUgNjAyLjY5NiAzODguMTc2QzYwMi42OTYgMzU0LjU4NyA1ODguMzAzIDMyMS45NjIgNTYyLjM5MiAyOTguNDVDNTY0Ljc5MSAyODguMzczIDU2Ni4yMzEgMjc4LjI5NiA1NjYuMjMxIDI2OC4yMjRDNTY2LjIzMSAxOTkuNjExIDUxMC41NzEgMTQ4LjI2NyA0NDYuMjc0IDE0OC4yNjdDNDMzLjMyMiAxNDguMjY3IDQyMC44NDYgMTUwLjE4NCA0MDguMzcgMTU0LjUwNUMzODYuNzc1IDEzMy4zOTIgMzU3LjAyNiAxMTkuOTU4IDMyNC40IDExOS45NThDMjY2LjM0MiAxMTkuOTU4IDIxNy44ODMgMTYxLjIyIDIwNi44NDMgMjE1LjkyMUMxNTMuMTA0IDIyOS44MzcgMTE4LjU1NyAyODAuMjE4IDExOC41NTcgMzMxLjU1N0MxMTguNTU3IDM2NS4xNDYgMTMyLjk1IDM5Ny43NzEgMTU4Ljg2MSA0MjEuMjgzQzE1Ni40NjIgNDMxLjM2IDE1NS4wMjIgNDQxLjQzNyAxNTUuMDIyIDQ1MS41MUMxNTUuMDIyIDUyMC4xMjMgMjEwLjY4MiA1NzEuNDY2IDI3NC45NzggNTcxLjQ2NkMyODcuOTMxIDU3MS40NjYgMzAwLjQwNyA1NjkuNTQ5IDMxMi44ODMgNTY1LjIyOEMzMzQuNDczIDU4Ni4zNDEgMzY0LjIyMiA1OTkuNzc2IDM5Ni44NTIgNTk5Ljc3NloiIGZpbGw9ImJsYWNrIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNzIwIiBoZWlnaHQ9IjcyMCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNjA2OTM0IDAuMDk5OTc1NikiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNDg0LjEzOSIgaGVpZ2h0PSI0NzkuODE4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE4LjU1NyAxMTkuOTU4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",gemini:"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjFlbSIgc3R5bGU9ImZsZXg6bm9uZTtsaW5lLWhlaWdodDoxIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkdlbWluaTwvdGl0bGU+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9IiMzMTg2RkYiPjwvcGF0aD48cGF0aCBkPSJNMjAuNjE2IDEwLjgzNWExNC4xNDcgMTQuMTQ3IDAgMDEtNC40NS0zLjAwMSAxNC4xMTEgMTQuMTExIDAgMDEtMy42NzgtNi40NTIuNTAzLjUwMyAwIDAwLS45NzUgMCAxNC4xMzQgMTQuMTM0IDAgMDEtMy42NzkgNi40NTIgMTQuMTU1IDE0LjE1NSAwIDAxLTQuNDUgMy4wMDFjLS42NS4yOC0xLjMxOC41MDUtMi4wMDIuNjc4YS41MDIuNTAyIDAgMDAwIC45NzVjLjY4NC4xNzIgMS4zNS4zOTcgMi4wMDIuNjc3YTE0LjE0NyAxNC4xNDcgMCAwMTQuNDUgMy4wMDEgMTQuMTEyIDE0LjExMiAwIDAxMy42NzkgNi40NTMuNTAyLjUwMiAwIDAwLjk3NSAwYy4xNzItLjY4NS4zOTctMS4zNTEuNjc3LTIuMDAzYTE0LjE0NSAxNC4xNDUgMCAwMTMuMDAxLTQuNDUgMTQuMTEzIDE0LjExMyAwIDAxNi40NTMtMy42NzguNTAzLjUwMyAwIDAwMC0uOTc1IDEzLjI0NSAxMy4yNDUgMCAwMS0yLjAwMy0uNjc4eiIgZmlsbD0idXJsKCNsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfKSI+PC9wYXRoPjxwYXRoIGQ9Ik0yMC42MTYgMTAuODM1YTE0LjE0NyAxNC4xNDcgMCAwMS00LjQ1LTMuMDAxIDE0LjExMSAxNC4xMTEgMCAwMS0zLjY3OC02LjQ1Mi41MDMuNTAzIDAgMDAtLjk3NSAwIDE0LjEzNCAxNC4xMzQgMCAwMS0zLjY3OSA2LjQ1MiAxNC4xNTUgMTQuMTU1IDAgMDEtNC40NSAzLjAwMWMtLjY1LjI4LTEuMzE4LjUwNS0yLjAwMi42NzhhLjUwMi41MDIgMCAwMDAgLjk3NWMuNjg0LjE3MiAxLjM1LjM5NyAyLjAwMi42NzdhMTQuMTQ3IDE0LjE0NyAwIDAxNC40NSAzLjAwMSAxNC4xMTIgMTQuMTEyIDAgMDEzLjY3OSA2LjQ1My41MDIuNTAyIDAgMDAuOTc1IDBjLjE3Mi0uNjg1LjM5Ny0xLjM1MS42NzctMi4wMDNhMTQuMTQ1IDE0LjE0NSAwIDAxMy4wMDEtNC40NSAxNC4xMTMgMTQuMTEzIDAgMDE2LjQ1My0zLjY3OC41MDMuNTAzIDAgMDAwLS45NzUgMTMuMjQ1IDEzLjI0NSAwIDAxLTIuMDAzLS42Nzh6IiBmaWxsPSJ1cmwoI2xvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8pIj48L3BhdGg+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9InVybCgjbG9iZS1pY29ucy1nZW1pbmktMi1fUl8wXykiPjwvcGF0aD48ZGVmcz48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfIiB4MT0iNyIgeDI9IjExIiB5MT0iMTUuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjMDhCOTYyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDhCOTYyIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8iIHgxPSI4IiB4Mj0iMTEuNSIgeTE9IjUuNSIgeTI9IjExIj48c3RvcCBzdG9wLWNvbG9yPSIjRjk0NTQzIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjk0NTQzIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTItX1JfMF8iIHgxPSIzLjUiIHgyPSIxNy41IiB5MT0iMTMuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjRkFCQzEyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuNDYiIHN0b3AtY29sb3I9IiNGQUJDMTIiIHN0b3Atb3BhY2l0eT0iMCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==",deepseek:"data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RGVlcFNlZWs8L3RpdGxlPjxwYXRoIGQ9Ik0yMy43NDggNC42NTFjLS4yNTQtLjEyNC0uMzY0LjExMy0uNTEyLjIzMy0uMDUxLjA0LS4wOTQuMDktLjEzNy4xMzctLjM3Mi4zOTctLjgwNi42NTctMS4zNzMuNjI2LS44MjktLjA0Ni0xLjUzNy4yMTQtMi4xNjMuODQ4LS4xMzMtLjc4Mi0uNTc1LTEuMjQ4LTEuMjQ3LTEuNTQ4LS4zNTItLjE1NS0uNzA4LS4zMTEtLjk1NS0uNjUtLjE3Mi0uMjQtLjIxOS0uNTA5LS4zMDUtLjc3NC0uMDU1LS4xNi0uMTEtLjMyMy0uMjkzLS4zNS0uMi0uMDMxLS4yNzguMTM2LS4zNTYuMjc2LS4zMTMuNTcyLS40MzQgMS4yMDItLjQyMiAxLjg0LjAyNyAxLjQzNi42MzMgMi41OCAxLjgzOCAzLjM5My4xMzcuMDk0LjE3Mi4xODcuMTI5LjMyMy0uMDgyLjI4LS4xOC41NTMtLjI2Ni44MzMtLjA1NS4xNzktLjEzNy4yMTgtLjMyOC4xNGE1LjUgNS41IDAgMCAxLTEuNzM3LTEuMTc5Yy0uODU3LS44MjgtMS42MzEtMS43NDMtMi41OTctMi40NmExMiAxMiAwIDAgMC0uNjg5LS40N2MtLjk4NS0uOTU3LjEzLTEuNzQzLjM4Ny0xLjgzNi4yNy0uMDk4LjA5NC0uNDMzLS43NzgtLjQyOC0uODcyLjAwMy0xLjY3LjI5NS0yLjY4Ny42ODVhMyAzIDAgMCAxLS40NjUuMTM2IDkuNiA5LjYgMCAwIDAtMi44ODMtLjEwMWMtMS44ODUuMjEtMy4zOSAxLjEtNC40OTcgMi42MjJDLjA4MiA4Ljc3Ni0uMjMxIDEwLjg1NC4xNTIgMTMuMDJjLjQwMyAyLjI4NCAxLjU2OCA0LjE3NSAzLjM2IDUuNjUzIDEuODU3IDEuNTMzIDMuOTk3IDIuMjg0IDYuNDM4IDIuMTQgMS40ODItLjA4NSAzLjEzMi0uMjg0IDQuOTk0LTEuODYuNDcuMjM0Ljk2Mi4zMjggMS43OC4zOTguNjI5LjA1OCAxLjIzNS0uMDMxIDEuNzA1LS4xMjkuNzM1LS4xNTUuNjg0LS44MzYuNDE4LS45NjEtMi4xNTUtMS4wMDQtMS42ODItLjU5NS0yLjExMi0uOTI2IDEuMDk1LTEuMjk1IDIuNzY4LTMuNTk4IDMuMjg0LTYuNzMzLjA1LS4zNDYuMTE1LS44MzQuMTA4LTEuMTE0LS4wMDQtLjE3MS4wMzUtLjIzOC4yMy0uMjU3YTQuMiA0LjIgMCAwIDAgMS41NDUtLjQ3NWMxLjM5Ny0uNzYzIDEuOTYtMi4wMTYgMi4wOTMtMy41MTcuMDItLjIzLS4wMDQtLjQ2Ny0uMjQ3LS41ODhNMTEuNTggMTguMTY4Yy0yLjA4OC0xLjY0Mi0zLjEwMS0yLjE4My0zLjUyLTIuMTYtLjM5LjAyNC0uMzIuNDcyLS4yMzQuNzYzLjA5LjI4OC4yMDcuNDg3LjM3MS43NC4xMTQuMTY3LjE5Mi40MTYtLjExMy42MDMtLjY3My40MTYtMS44NDItLjE0LTEuODk3LS4xNjgtMS4zNjEtLjgwMS0yLjUtMS44Ni0zLjMwMS0zLjMwNi0uNzc1LTEuMzkzLTEuMjI1LTIuODg4LTEuMjk5LTQuNDgyLS4wMi0uMzg1LjA5NC0uNTIyLjQ3Ny0uNTkyYTQuNyA0LjcgMCAwIDEgMS41My0uMDM4YzIuMTMxLjMxMSAzLjk0NiAxLjI2NCA1LjQ2NyAyLjc3NC44NjguODYgMS41MjUgMS44ODcgMi4yMDIgMi44OS43MiAxLjA2NiAxLjQ5NCAyLjA4MiAyLjQ4IDIuOTE1LjM0OC4yOTEuNjI2LjUxMy44OTIuNjc3LS44MDIuMDktMi4xNC4xMDktMy4wNTUtLjYxNXptMS4wMDEtNi40NGEuMzA2LjMwNiAwIDAgMSAuNDE1LS4yODcuMy4zIDAgMCAxIC4xMTMuMDc0LjMuMyAwIDAgMSAuMDg2LjIxNGMwIC4xNy0uMTM2LjMwNy0uMzA4LjMwN2EuMzAzLjMwMyAwIDAgMS0uMzA2LS4zMDdtMy4xMSAxLjU5NmMtLjIuMDgxLS40LjE1MS0uNTkxLjE2YTEuMjUgMS4yNSAwIDAgMS0uNzk4LS4yNTRjLS4yNzQtLjIzLS40Ny0uMzU4LS41NTEtLjc1OGExLjcgMS43IDAgMCAxIC4wMTUtLjU4OGMuMDctLjMyNy0uMDA3LS41MzctLjIzOC0uNzI3LS4xODgtLjE1Ni0uNDI2LS4xOTktLjY4OS0uMTk5YS42LjYgMCAwIDEtLjI1NC0uMDc4LjI1My4yNTMgMCAwIDEtLjExNC0uMzU4IDEgMSAwIDAgMSAuMTkyLS4yMWMuMzU2LS4yMDIuNzY3LS4xMzYgMS4xNDYuMDE2LjM1Mi4xNDQuNjE4LjQwOCAxLjAwMS43ODIuMzkyLjQ1MS40NjIuNTc2LjY4NS45MTUuMTc2LjI2NC4zMzYuNTM2LjQ0Ni44NDguMDY2LjE5NC0uMDIuMzUzLS4yNS40NSIvPjwvc3ZnPg=="},i={claude:"Claude",openai:"OpenAI",gemini:"Gemini",deepseek:"DeepSeek"};function o(S,g=""){const W=g.trim().toLowerCase().replace(/[^a-z0-9]+/g,"");if(g.trim())return{anthropic:"claude",claude:"claude",claudecode:"claude",openai:"openai",google:"gemini",googlegemini:"gemini",googleaistudio:"gemini",gemini:"gemini",deepseek:"deepseek"}[W];const Z=S.trim().toLowerCase();if(/^(?:anthropic\/)?claude(?:$|[\s-])/.test(Z))return"claude";if(/^(?:openai\/)?(?:gpt[-\s]?\d|chatgpt(?:$|[\s-])|o[134](?:$|[\s-]))/.test(Z))return"openai";if(/^(?:google\/)?gemini(?:$|[\s-])/.test(Z))return"gemini";if(/^deepseek(?:$|[\s-])/.test(Z))return"deepseek"}const s=Fe({props:{model:{type:String,default:""},provider:{type:String,default:""},size:{type:Number,default:20}},setup:S=>()=>{const g=o(S.model,S.provider),W=g!=="gemini",Z=Math.round(S.size*(g==="openai"?.82:.58));return Ee("span",{class:["model-provider-mark",{"is-color":g&&!W}],"data-provider-logo":g??"unknown","aria-hidden":"true",title:g?`${i[g]} logo`:"Custom model",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:`${S.size}px`,height:`${S.size}px`,boxSizing:"border-box",border:"1px solid var(--provider-logo-border, #e5e5e8)",borderRadius:`${S.size>=28?9:S.size>=20?6:4}px`,background:"var(--provider-logo-surface, #fff)",color:"var(--provider-logo-muted, #a1a1aa)"}},g?[Ee("img",{src:n[g],alt:"","aria-hidden":"true",class:["model-provider-image",{"is-monochrome":W}],"data-logo-source":"bundled-brand-asset",style:{display:"block",objectFit:"contain",width:`${Z}px`,height:`${Z}px`}})]:[Ee(no,{size:Math.round(S.size*.5),strokeWidth:1.7,"aria-hidden":"true"})])}}),r=e,a=t,c=G(null),d=G(null),u=G(null),h=`model-options-${Qn()}`,L=G(0),j=G(!1),C=G(""),O=G(r.modelValue);Ie(()=>r.modelValue,S=>{O.value=S}),Ie(()=>r.options,S=>{var g;S.some(W=>W.id===O.value)||(O.value=((g=S[0])==null?void 0:g.id)??""),S.length||$()},{immediate:!0,deep:!0});const H=Te(()=>r.options.find(S=>S.id===O.value)),ee=Te(()=>r.options.filter(S=>`${S.name} ${S.provider}`.toLowerCase().includes(C.value.toLowerCase())));Ie(j,async S=>{var g;S&&(L.value=Math.max(0,ee.value.findIndex(W=>W.id===O.value)),await ke(),j.value&&((g=d.value)==null||g.focus()))}),Ie(ee,()=>{L.value=0});function $(S=!1){j.value=!1,S&&ke(()=>{var g;return(g=u.value)==null?void 0:g.focus({preventScroll:!0})})}function q(S){S.setAttribute("inert","")}function w(S){var g;(g=c.value)!=null&&g.contains(S.relatedTarget)||$()}function Y(S){var g;if(!S.isComposing){if(S.key==="Enter"&&S.target===d.value){S.preventDefault();const W=ee.value[L.value];W&&D(W);return}!["ArrowDown","ArrowUp"].includes(S.key)||!ee.value.length||(S.preventDefault(),L.value=(L.value+(S.key==="ArrowDown"?1:-1)+ee.value.length)%ee.value.length,(g=d.value)==null||g.focus({preventScroll:!0}),ke(()=>{var W;return(W=document.getElementById(`${h}-${L.value}`))==null?void 0:W.scrollIntoView({block:"nearest"})}))}}function D(S){O.value=S.id,$(!0),C.value="",a("update:modelValue",S.id),a("select",S)}function N(S){var g;(g=c.value)!=null&&g.contains(S.target)||$()}return kt(()=>document.addEventListener("pointerdown",N)),Qt(()=>document.removeEventListener("pointerdown",N)),(S,g)=>{var W,Z,Q;return y(),k("div",{ref_key:"root",ref:c,class:"model-demo",onKeydown:g[4]||(g[4]=ai(an(J=>$(!0),["stop","prevent"]),["esc"])),onFocusout:w},[l("div",ep,[B(F(no),{size:16}),g[5]||(g[5]=De(" Model settings ",-1))]),l("button",{type:"button",ref_key:"trigger",ref:u,class:"model-trigger","aria-haspopup":"listbox","aria-controls":h,onKeydown:[g[0]||(g[0]=ai(an(J=>j.value=!0,["prevent"]),["down"])),g[1]||(g[1]=ai(an(J=>j.value=!0,["prevent"]),["up"]))],"aria-expanded":j.value,"aria-label":"Select model",disabled:!e.options.length,onClick:g[2]||(g[2]=J=>j.value=!j.value)},[B(F(s),{model:((W=H.value)==null?void 0:W.name)??"",provider:((Z=H.value)==null?void 0:Z.provider)??"",size:42},null,8,["model","provider"]),B(dt,{name:"model-current",mode:"out-in"},{default:Ke(()=>{var J,ue,fe;return[(y(),k("span",{key:(J=H.value)==null?void 0:J.id,class:"model-name"},[l("strong",null,ie(((ue=H.value)==null?void 0:ue.name)??"Select model"),1),l("small",null,ie(((fe=H.value)==null?void 0:fe.provider)??"No model selected"),1)]))]}),_:1}),B(F(Gt),{size:17,class:he(["chevron",{rotated:j.value}])},null,8,["class"])],40,tp),l("div",np,ie(((Q=H.value)==null?void 0:Q.description)??(e.options.length?"Select model":"No models available")),1),B(dt,{name:"model-popup",onBeforeLeave:q},{default:Ke(()=>[j.value?(y(),k("div",{key:0,class:"model-menu",onKeydown:Y},[l("label",ip,[B(F(yd),{size:16}),qe(l("input",{ref_key:"searchInput",ref:d,"onUpdate:modelValue":g[3]||(g[3]=J=>C.value=J),"aria-label":"Search models",placeholder:"Search models…","aria-autocomplete":"list","aria-controls":h,"aria-activedescendant":ee.value[L.value]?`${h}-${L.value}`:void 0},null,8,op),[[Ds,C.value]])]),l("div",{id:h,class:"model-options",role:"listbox","aria-label":"Models"},[(y(!0),k(Ne,null,_e(ee.value,(J,ue)=>(y(),k("button",{type:"button",key:J.id,id:`${h}-${ue}`,class:he(["model-option",{"keyboard-active":L.value===ue}]),onPointerenter:fe=>L.value=ue,onFocus:fe=>L.value=ue,role:"option","aria-selected":O.value===J.id,onClick:fe=>D(J)},[B(F(s),{model:J.name,provider:J.provider,size:24},null,8,["model","provider"]),l("span",null,[De(ie(J.name),1),l("small",null,ie(J.provider),1)]),O.value===J.id?(y(),xe(F(lt),{key:0,size:16,class:"selected-check"})):ge("",!0)],42,sp))),128)),ee.value.length?ge("",!0):(y(),k("div",ap,"No matching models."))])],32)):ge("",!0)]),_:1})],544)}}}),lp=Dt(rp,[["__scopeId","data-v-f78ea696"]]),cp={key:1,class:"status-lamp","aria-hidden":"true"},up=Fe({__name:"StatusBadge",props:{status:{default:"pending"},size:{default:"md"}},setup(e){const t=e,n={running:{label:"Running",tone:"info",icon:null},queued:{label:"Queued",tone:"neutral",icon:ud},pending:{label:"Pending",tone:"neutral",icon:ja},waiting_human:{label:"Needs input",tone:"neutral",icon:xd},completed:{label:"Completed",tone:"success",icon:lt},success:{label:"Success",tone:"success",icon:lt},failed:{label:"Failed",tone:"error",icon:vd},cancelled:{label:"Cancelled",tone:"neutral",icon:Cn},cancelling:{label:"Cancelling",tone:"neutral",icon:Cn},skipped:{label:"Skipped",tone:"neutral",icon:ja},published:{label:"Published",tone:"success",icon:lt},draft:{label:"Draft",tone:"neutral",icon:md}},i=Te(()=>n[t.status]??n.pending);return(o,s)=>(y(),k("span",{class:he(["status-badge",[`tone-${i.value.tone}`,{"is-small":e.size==="sm"}]])},[i.value.icon?(y(),xe(kn(i.value.icon),{key:0,size:13,"stroke-width":1.6,"aria-hidden":"true"})):(y(),k("span",cp,[...s[0]||(s[0]=[l("i",null,null,-1)])])),De(" "+ie(i.value.label),1)],2))}}),dp=Dt(up,[["__scopeId","data-v-25ae296a"]]),Mp={class:"activity-timeline","aria-label":"Task activity"},pp={class:"activity-heading"},gp={"aria-live":"polite"},fp={class:"activity-section"},hp=["disabled","aria-expanded","aria-controls"],mp={class:"section-meta"},yp=["inert","aria-hidden","id"],Np={class:"environment-list"},vp={class:"activity-section"},xp=["disabled","aria-expanded","aria-controls"],jp={class:"section-meta"},Lp=["inert","aria-hidden","id"],bp={class:"thought-summary"},Dp={class:"activity-section tools-section"},Ip=["disabled","aria-expanded","aria-controls"],Tp={key:3,class:"failed-count"},wp={key:4,class:"section-meta"},zp=["inert","aria-hidden","id"],Ap={class:"activity-tools"},kp={class:"tool-label"},Sp={class:"tool-duration"},Ep=["inert","aria-hidden","id"],Cp={class:"tool-details"},Op={key:0,class:"tool-name"},Qp={key:1},Up={key:2},Yp={key:3,class:"empty-details"},Pp=Fe({__name:"ActivityTimeline",props:{environmentSteps:{default:()=>[{label:"Connect workspace",duration:"8s"},{label:"Prepare project files",duration:"12s"},{label:"Start the assistant",duration:"5s"}]},environmentDuration:{default:"25s"},thought:{default:"Review the content, then arrange the components. Keep a clear hierarchy and give each section room to breathe."},tools:{default:()=>[{id:"read",label:"Read design files",name:"read_file",status:"success",duration:"0.6s",input:"src/theme.css",output:"Read 24 style variables, including colors and typography."},{id:"search",label:"Search components",name:"web_search",status:"success",duration:"1.2s",input:"Accessible navigation patterns",output:"Found three navigation patterns with clear groups and keyboard controls."},{id:"preview",label:"Generate preview",name:"preview_page",status:"failed",duration:"1.0s",input:"http://localhost:3000",output:"The preview server is not running. Start the project and try again."}]},initiallyExpanded:{default:()=>["tools"]},busy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["toggle","tool-toggle"],setup(e,{emit:t}){const n=e,i=t,o=`activity-${Qn().replace(/:/g,"")}`,s=G(new Set(n.initiallyExpanded)),r=G(new Set),a=new WeakMap;function c(Y){const D=document.getElementById(Y);D&&a.set(D,{height:D.getBoundingClientRect().height,opacity:getComputedStyle(D).opacity})}const d=Te(()=>n.tools.filter(Y=>Y.status==="failed").length),u=Te(()=>n.busy||n.tools.some(Y=>Y.status==="running"||Y.status==="pending")),h={success:"Done",failed:"Failed",running:"In progress",pending:"Queued"};function L(Y){return!!(Y.input||Y.output)}Ie(()=>n.initiallyExpanded,Y=>{s.value=new Set(Y)},{deep:!0}),Ie(()=>n.tools,Y=>{const D=new Set(Y.filter(L).map(N=>N.id));r.value=new Set([...r.value].filter(N=>D.has(N)))},{deep:!0});function j(Y){if(n.disabled)return;c(`${o}-${Y}`);const D=new Set(s.value);D.has(Y)?D.delete(Y):D.add(Y),s.value=D,i("toggle",Y,D.has(Y))}function C(Y){const D=n.tools.find(S=>S.id===Y);if(n.disabled||!D||!L(D))return;c(`${o}-tool-${n.tools.findIndex(S=>S.id===Y)}`);const N=new Set(r.value);N.has(Y)?N.delete(Y):N.add(Y),r.value=N,i("tool-toggle",Y,N.has(Y))}function O(Y){const D=Y;D.removeAttribute("inert");const N=a.get(D),S=(N==null?void 0:N.height)??D.getBoundingClientRect().height,g=(N==null?void 0:N.opacity)??getComputedStyle(D).opacity;D.style.height=`${S}px`,D.style.opacity=S?g:"0"}function H(Y){const D=Y;D.offsetHeight,D.style.height=`${D.scrollHeight}px`,D.style.opacity="1",a.delete(D)}function ee(Y){Y.style.removeProperty("height"),Y.style.removeProperty("opacity")}function $(Y){const D=Y,N=a.get(D),S=getComputedStyle(D).display==="none",g=S?(N==null?void 0:N.height)??0:D.getBoundingClientRect().height,W=S?(N==null?void 0:N.opacity)??"0":getComputedStyle(D).opacity;a.set(D,{height:g,opacity:W}),D.style.height=`${g}px`,D.style.opacity=W}function q(Y){const D=Y;D.style.removeProperty("height"),D.style.removeProperty("opacity")}function w(Y){const D=Y;D.setAttribute("inert",""),D.style.height=`${D.getBoundingClientRect().height}px`,D.offsetHeight,D.style.height="0px",D.style.opacity="0"}return(Y,D)=>(y(),k("section",Mp,[l("header",pp,[l("span",null,[B(F(gd),{size:17,"stroke-width":1.6}),D[3]||(D[3]=De(" Activity",-1))]),l("span",gp,ie(u.value?"In progress":"Finished"),1)]),l("div",fp,[l("button",{class:"activity-section-toggle",type:"button",disabled:e.disabled,"aria-expanded":s.value.has("environment"),"aria-controls":`${o}-environment`,onClick:D[0]||(D[0]=N=>j("environment"))},[B(F(lt),{size:15,class:"status-success"}),D[5]||(D[5]=l("strong",null,"Environment ready",-1)),l("span",mp,[De(ie(e.environmentSteps.length)+" steps ",1),D[4]||(D[4]=l("span",null,"·",-1)),De(" "+ie(e.environmentDuration),1)]),B(F(Gt),{size:14,class:he({turned:s.value.has("environment")})},null,8,["class"])],8,hp),B(dt,{name:"activity-fold",onBeforeEnter:O,onEnter:H,onAfterEnter:ee,onLeave:w,onAfterLeave:q,onEnterCancelled:$,onLeaveCancelled:$,persisted:""},{default:Ke(()=>[qe(l("div",{inert:!s.value.has("environment")||void 0,"aria-hidden":!s.value.has("environment")||void 0,id:`${o}-environment`,class:"activity-fold"},[l("ol",Np,[(y(!0),k(Ne,null,_e(e.environmentSteps,N=>(y(),k("li",{key:N.label},[B(F(lt),{size:13}),l("span",null,ie(N.label),1),l("small",null,ie(N.duration),1)]))),128))])],8,yp),[[Ct,s.value.has("environment")]])]),_:1})]),l("div",vp,[l("button",{class:"activity-section-toggle",type:"button",disabled:e.disabled,"aria-expanded":s.value.has("thought"),"aria-controls":`${o}-thought`,onClick:D[1]||(D[1]=N=>j("thought"))},[e.busy?(y(),xe(F(Po),{key:0,size:15,class:"activity-spinner"})):(y(),xe(F(lt),{key:1,size:15,class:"status-success"})),D[6]||(D[6]=l("strong",null,"Thinking process",-1)),l("span",jp,ie(e.busy?"In progress":"Completed"),1),B(F(Gt),{size:14,class:he({turned:s.value.has("thought")})},null,8,["class"])],8,xp),B(dt,{name:"activity-fold",onBeforeEnter:O,onEnter:H,onAfterEnter:ee,onLeave:w,onAfterLeave:q,onEnterCancelled:$,onLeaveCancelled:$,persisted:""},{default:Ke(()=>[qe(l("div",{inert:!s.value.has("thought")||void 0,"aria-hidden":!s.value.has("thought")||void 0,id:`${o}-thought`,class:"activity-fold"},[l("p",bp,ie(e.thought),1)],8,Lp),[[Ct,s.value.has("thought")]])]),_:1})]),l("div",Dp,[l("button",{class:"activity-section-toggle tools-heading",type:"button",disabled:e.disabled,"aria-expanded":s.value.has("tools"),"aria-controls":`${o}-tools`,onClick:D[2]||(D[2]=N=>j("tools"))},[u.value?(y(),xe(F(Po),{key:0,size:15,class:"activity-spinner"})):d.value?(y(),xe(F(to),{key:1,size:15,class:"status-failed"})):(y(),xe(F(lt),{key:2,size:15,class:"status-success"})),l("strong",null,ie(e.tools.length)+" tool"+ie(e.tools.length===1?"":"s")+" used",1),d.value?(y(),k("span",Tp,ie(d.value)+" failed",1)):(y(),k("span",wp,ie(u.value?"In progress":"Completed"),1)),B(F(Gt),{size:14,class:he({turned:s.value.has("tools")})},null,8,["class"])],8,Ip),B(dt,{name:"activity-fold",onBeforeEnter:O,onEnter:H,onAfterEnter:ee,onLeave:w,onAfterLeave:q,onEnterCancelled:$,onLeaveCancelled:$,persisted:""},{default:Ke(()=>[qe(l("div",{inert:!s.value.has("tools")||void 0,"aria-hidden":!s.value.has("tools")||void 0,id:`${o}-tools`,class:"activity-fold"},[l("ul",Ap,[(y(!0),k(Ne,null,_e(e.tools,(N,S)=>(y(),k("li",{key:N.id,class:he({"failed-tool":N.status==="failed"})},[(y(),xe(kn(L(N)?"button":"div"),{class:"activity-tool-toggle",type:L(N)?"button":void 0,disabled:L(N)?e.disabled:void 0,"aria-expanded":L(N)?r.value.has(N.id):void 0,"aria-controls":L(N)?`${o}-tool-${S}`:void 0,onClick:g=>C(N.id)},{default:Ke(()=>[N.status==="running"?(y(),xe(F(Po),{key:0,size:15,class:"activity-spinner"})):N.status==="failed"?(y(),xe(F(to),{key:1,size:15,class:"status-failed"})):S===0?(y(),xe(F(Gr),{key:2,size:15})):S===1?(y(),xe(F(Md),{key:3,size:15})):(y(),xe(F(Fr),{key:4,size:15})),l("span",kp,ie(N.label),1),l("span",Sp,ie(N.duration),1),l("span",{class:he(["tool-state",{"status-failed":N.status==="failed"}])},ie(h[N.status]),3),L(N)?(y(),xe(F(Gt),{key:5,size:13,class:he({turned:r.value.has(N.id)})},null,8,["class"])):ge("",!0)]),_:2},1032,["type","disabled","aria-expanded","aria-controls","onClick"])),B(dt,{name:"activity-fold",onBeforeEnter:O,onEnter:H,onAfterEnter:ee,onLeave:w,onAfterLeave:q,onEnterCancelled:$,onLeaveCancelled:$,persisted:""},{default:Ke(()=>[qe(l("div",{inert:!r.value.has(N.id)||void 0,"aria-hidden":!r.value.has(N.id)||void 0,id:`${o}-tool-${S}`,class:"activity-fold"},[l("div",Cp,[N.name?(y(),k("code",Op,ie(N.name),1)):ge("",!0),N.input?(y(),k("div",Qp,[D[7]||(D[7]=l("span",{class:"detail-label"},"Input",-1)),l("pre",null,ie(N.input),1)])):ge("",!0),N.output?(y(),k("div",Up,[l("span",{class:he(["detail-label",{"status-failed":N.status==="failed"}])},"Output",2),l("pre",{class:he({"failed-output":N.status==="failed"})},ie(N.output),3)])):ge("",!0),!N.input&&!N.output?(y(),k("p",Yp,"No additional output.")):ge("",!0)])],8,Ep),[[Ct,L(N)&&r.value.has(N.id)]])]),_:2},1024)],2))),128))])],8,zp),[[Ct,s.value.has("tools")]])]),_:1})])]))}}),_p=Dt(Pp,[["__scopeId","data-v-dc84a35c"]]),Wp=["id","aria-hidden","inert"],Rp={key:0,class:"clarification-history clarify-request"},Bp={class:"history-heading"},$p={class:"history-prompt"},Hp=["data-selected"],Gp={key:1,class:"history-check-space","aria-hidden":"true"},Vp={key:0,class:"question-progress"},Fp={class:"progress-dots","aria-hidden":"true"},Zp={class:"question-heading"},Kp=["id"],Jp={class:"question-kind"},qp=["role","aria-labelledby"],Xp=["id","role","aria-checked","aria-pressed","disabled","onClick","onKeydown"],eg={class:"option-label"},tg={key:0,class:"recommendation-label"},ng={class:"clarification-footer"},ig=["disabled"],og={key:1},sg=["disabled"],ag={key:3,class:"submit-actions"},rg=["disabled"],lg=["disabled"],cg={class:"summary-heading"},ug={class:"summary-prompt"},dg={class:"summary-labels"},Mg=Fe({__name:"ClarificationCard",props:{questions:{default:()=>[{id:"priority",prompt:"What should we build first?",options:[{id:"layout",label:"Build the page layout"},{id:"interaction",label:"Refine the interactions"}]},{id:"style",prompt:"Which direction do you prefer?",options:[{id:"quiet",label:"Quiet and spacious"},{id:"expressive",label:"Bold and expressive"}]}]},initialAnswers:{default:()=>({})},initiallyExpanded:{type:Boolean,default:!0},initiallySubmitted:{type:Boolean,default:!1},submitLabel:{default:"Confirm choices"},disabled:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1}},emits:["update:answers","update:expanded","submit","reset"],setup(e,{expose:t,emit:n}){const i=e,o=n,s=`clarification-${Qn().replace(/:/g,"")}`;function r(te){return Array.isArray(te)?te:te?[te]:[]}function a(te,z=!1){return Object.fromEntries(i.questions.flatMap(R=>{const ne=new Set(r(te[R.id])),le=R.options.filter(ve=>ne.has(ve.id)&&(z||!ve.disabled)).map(ve=>ve.id);return le.length?[[R.id,R.allowMultiple?le:le[0]]]:[]}))}function c(te=d.value){return Object.fromEntries(Object.entries(te).map(([z,R])=>[z,Array.isArray(R)?[...R]:R]))}const d=G(a(i.initialAnswers,i.initiallySubmitted||i.readOnly)),u=G(i.initiallyExpanded),h=G(i.initiallySubmitted),L=G(0),j=Te(()=>i.readOnly||h.value),C=Te(()=>i.questions[L.value]),O=G(null),H=G(null),ee=G("auto");let $,q=!1;const w=Te(()=>i.questions.flatMap(te=>te.options.filter(z=>r(d.value[te.id]).includes(z.id)).map(z=>({questionId:te.id,prompt:te.prompt,optionId:z.id,label:z.label})))),Y=Te(()=>i.questions.flatMap(te=>{const z=w.value.filter(R=>R.questionId===te.id);return z.length?[{question:te,selected:z}]:[]})),D=Te(()=>!i.disabled&&!j.value&&i.questions.some(te=>te.options.some(z=>!z.disabled&&g(te,z.id)))),N=Te(()=>i.questions.some(te=>te.options.some(z=>z.recommended&&!z.disabled))),S=Te(()=>JSON.stringify(i.questions));function g(te,z){return r(d.value[te.id]).includes(z)}async function W(){await ke(),!q&&O.value&&(ee.value=u.value?`${O.value.getBoundingClientRect().height}px`:"0px")}function Z(te,z,R=!1){if(i.disabled||j.value||!te.options.some(Le=>Le.id===z&&!Le.disabled))return;const ne=r(d.value[te.id]),le=R?[z]:te.allowMultiple?ne.includes(z)?ne.filter(Le=>Le!==z):[...ne,z]:ne.includes(z)?[]:[z],ve=c();le.length?ve[te.id]=te.allowMultiple?le:le[0]:delete ve[te.id],d.value=ve,o("update:answers",c())}function Q(te,z){return`${s}-${encodeURIComponent(te.id)}-${encodeURIComponent(z.id)}`}function J(te,z,R){var we;if(i.disabled||j.value||te.altKey||te.ctrlKey||te.metaKey)return;const ne=z.options.filter(Ye=>!Ye.disabled),le=ne.findIndex(Ye=>Ye.id===R.id);let ve;if(te.key==="Home")ve=0;else if(te.key==="End")ve=ne.length-1;else if(te.key==="ArrowDown"||te.key==="ArrowRight")ve=(le+1)%ne.length;else if(te.key==="ArrowUp"||te.key==="ArrowLeft")ve=(le-1+ne.length)%ne.length;else return;te.preventDefault();const Le=ne[ve];Le&&(z.allowMultiple||Z(z,Le.id,!0),(we=document.getElementById(Q(z,Le)))==null||we.focus({preventScroll:!0}))}function ue(te){i.disabled||j.value||(L.value=Math.max(0,Math.min(i.questions.length-1,L.value+te)))}function fe(){u.value=!u.value,o("update:expanded",u.value)}function ae(){D.value&&(h.value=!0,u.value=!0,o("submit",w.value.map(te=>({...te}))),ke(()=>{var te;return(te=H.value)==null?void 0:te.focus({preventScroll:!0})}))}function re(){if(i.disabled||j.value)return;const te={};for(const z of i.questions){const R=z.options.filter(le=>!le.disabled),ne=R.find(le=>le.recommended)??R[0];ne&&(te[z.id]=z.allowMultiple?[ne.id]:ne.id)}d.value=te,o("update:answers",c()),ae()}function pe(){i.disabled||i.readOnly||(d.value={},h.value=!1,L.value=0,u.value=!0,o("update:answers",{}),o("reset"),ke(()=>{var te,z;return(z=(te=O.value)==null?void 0:te.querySelector('[role="radio"]:not(:disabled), [role="checkbox"]:not(:disabled)'))==null?void 0:z.focus({preventScroll:!0})}))}return Ie(()=>i.initialAnswers,te=>{d.value=a(te,h.value||i.readOnly)},{deep:!0}),Ie(S,()=>{const te=a(d.value,i.initiallySubmitted||i.readOnly),z=JSON.stringify(te)!==JSON.stringify(d.value);d.value=te,i.initiallySubmitted||(h.value=!1),L.value=Math.min(L.value,Math.max(0,i.questions.length-1)),z&&o("update:answers",c())}),Ie(()=>i.initiallyExpanded,te=>{u.value=te}),Ie(()=>i.initiallySubmitted,te=>{h.value=te}),Ie([u,h,L,()=>i.readOnly,()=>i.questions],W,{flush:"post"}),kt(()=>{typeof ResizeObserver<"u"&&($=new ResizeObserver(()=>{W()}),O.value&&$.observe(O.value)),W()}),Qt(()=>{q=!0,$==null||$.disconnect()}),t({reset:pe,toggle:fe,submit:ae}),(te,z)=>(y(),k("section",{class:he(["clarification-card",{"is-submitted":h.value}]),"aria-label":"Questions and choices"},[l("div",{id:`${s}-body`,class:"clarification-body",style:Ft({height:ee.value}),"aria-hidden":!u.value||void 0,inert:!u.value||void 0},[l("div",{ref_key:"content",ref:O,class:"clarification-content"},[j.value?(y(),k("div",Rp,[l("div",Bp,[B(F(xa),{"aria-hidden":"true",size:16}),l("span",null,"Questions · "+ie(e.questions.length)+" questions",1),z[2]||(z[2]=l("span",{class:"readonly-label"},"Read only",-1))]),(y(!0),k(Ne,null,_e(e.questions,(R,ne)=>(y(),k("div",{key:R.id,class:"history-question"},[l("p",$p,[l("span",null,ie(ne+1)+".",1),De(" "+ie(R.prompt),1)]),(y(!0),k(Ne,null,_e(R.options,le=>(y(),k("div",{key:le.id,class:he(["history-option",{selected:g(R,le.id)}]),"data-selected":g(R,le.id)},[g(R,le.id)?(y(),xe(F(lt),{key:0,"aria-hidden":"true",size:12})):(y(),k("span",Gp)),l("span",null,ie(le.label),1)],10,Hp))),128))]))),128))])):C.value?(y(),k("form",{key:1,class:"clarification-form clarify-request",onSubmit:an(ae,["prevent"])},[e.questions.length>1?(y(),k("div",Vp,[l("div",Fp,[(y(!0),k(Ne,null,_e(e.questions,(R,ne)=>(y(),k("span",{key:R.id,class:he({current:L.value===ne,answered:r(d.value[R.id]).length})},null,2))),128))]),l("span",null,ie(L.value+1)+" / "+ie(e.questions.length),1)])):ge("",!0),l("div",Zp,[B(F(xa),{"aria-hidden":"true",size:16}),l("span",{id:`${s}-prompt`,class:"question-prompt"},ie(C.value.prompt),9,Kp),l("span",Jp,ie(C.value.allowMultiple?"Select multiple":"Select one"),1)]),l("div",{class:"clarification-options",role:C.value.allowMultiple?"group":"radiogroup","aria-labelledby":`${s}-prompt`},[(y(!0),k(Ne,null,_e(C.value.options,R=>(y(),k("button",{id:Q(C.value,R),key:R.id,type:"button",class:he(["clarification-option",{selected:g(C.value,R.id)}]),role:C.value.allowMultiple?"checkbox":"radio","aria-checked":g(C.value,R.id),"aria-pressed":g(C.value,R.id),disabled:e.disabled||R.disabled,onClick:ne=>Z(C.value,R.id),onKeydown:ne=>J(ne,C.value,R)},[l("span",{class:he(["option-indicator",{multiple:C.value.allowMultiple}])},[g(C.value,R.id)?(y(),xe(F(lt),{key:0,"aria-hidden":"true",size:10})):ge("",!0)],2),l("span",eg,ie(R.label),1),R.recommended?(y(),k("span",tg,"Recommended")):ge("",!0)],42,Xp))),128))],8,qp),l("footer",ng,[L.value>0?(y(),k("button",{key:0,type:"button",class:"previous-button",disabled:e.disabled,onClick:z[0]||(z[0]=R=>ue(-1))},[B(F(Hr),{"aria-hidden":"true",size:13}),z[3]||(z[3]=De("Previous",-1))],8,ig)):(y(),k("span",og)),L.value<e.questions.length-1?(y(),k("button",{key:2,type:"button",class:"secondary-button",disabled:e.disabled,onClick:z[1]||(z[1]=R=>ue(1))},[z[4]||(z[4]=De("Next",-1)),B(F(ri),{"aria-hidden":"true",size:13})],8,sg)):(y(),k("div",ag,[N.value?(y(),k("button",{key:0,type:"button",class:"secondary-button",disabled:e.disabled,onClick:re},[B(F(lt),{"aria-hidden":"true",size:14}),z[5]||(z[5]=De("Use recommended",-1))],8,rg)):ge("",!0),l("button",{type:"submit",class:"confirm-button",disabled:!D.value},[z[6]||(z[6]=l("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[l("path",{d:"M12 18V6m-6 6 6-6 6 6"})],-1)),De(ie(e.submitLabel),1)],8,lg)]))])],32)):ge("",!0),h.value?(y(),k("div",{key:2,ref_key:"receipt",ref:H,class:"clarification-summary",tabindex:"-1","aria-label":"Your choices","aria-live":"polite"},[l("div",cg,[B(F(lt),{"aria-hidden":"true",size:16}),z[7]||(z[7]=De("Your choices",-1))]),(y(!0),k(Ne,null,_e(Y.value,R=>(y(),k("div",{key:R.question.id,class:"summary-answer"},[l("p",ug,ie(R.question.prompt),1),l("div",dg,[(y(!0),k(Ne,null,_e(R.selected,ne=>(y(),k("span",{key:ne.optionId},ie(ne.label),1))),128))])]))),128))],512)):ge("",!0)],512)],12,Wp)],2))}}),pg=Dt(Mg,[["__scopeId","data-v-9d637c05"]]),gg=["aria-label"],fg=["data-tab-value","aria-selected","tabindex","disabled","onClick"],hg={key:0,class:"sliding-tab-count"},mg=Fe({__name:"SlidingTabs",props:{modelValue:{},items:{default:()=>[{value:"all",label:"All"},{value:"running",label:"Running"},{value:"waiting",label:"Needs input"},{value:"completed",label:"Completed"}]},label:{default:"Task status"}},emits:["update:modelValue","change"],setup(e,{emit:t}){var q;const n=e,i=t,o=Te(()=>n.items.filter(w=>!w.disabled)),s=G(n.modelValue??((q=o.value[0])==null?void 0:q.value)??""),r=Te(()=>n.modelValue??s.value),a=Te(()=>{var w,Y;return((w=o.value.find(D=>D.value===r.value))==null?void 0:w.value)??((Y=o.value[0])==null?void 0:Y.value)??""}),c=G(),d=G({opacity:"0"}),u=G(!1),h=new Set;let L,j=0,C=!1;function O(w){var Y;return[...((Y=c.value)==null?void 0:Y.querySelectorAll("button"))??[]].find(D=>D.dataset.tabValue===w)}function H(){const w=c.value;if(!w||C)return;const Y=new Set([w,...w.querySelectorAll("button")]);h.forEach(Q=>{Y.has(Q)||(L==null||L.unobserve(Q),h.delete(Q))}),Y.forEach(Q=>{L&&!h.has(Q)&&(L.observe(Q),h.add(Q))});const D=w.querySelector('[aria-selected="true"]');if(!D){d.value.opacity!=="0"&&(d.value={opacity:"0"});return}const N=w.getBoundingClientRect(),S=D.getBoundingClientRect(),g=w.offsetWidth?N.width/w.offsetWidth:1,W=w.offsetHeight?N.height/w.offsetHeight:1;if(!S.width||!S.height||!g||!W)return;const Z={opacity:"1",transform:`translate3d(${(S.left-N.left)/g-w.clientLeft+w.scrollLeft}px, ${(S.top-N.top)/W-w.clientTop+w.scrollTop}px, 0)`,width:`${S.width/g}px`,height:`${S.height/W}px`};Object.keys(Z).some(Q=>d.value[Q]!==Z[Q])&&(d.value=Z)}async function ee(w,Y=!1){var D;w.disabled||(r.value!==w.value&&(n.modelValue===void 0&&(s.value=w.value),i("update:modelValue",w.value),i("change",w.value)),await ke(),!C&&(H(),Y&&((D=O(w.value))==null||D.focus({preventScroll:!0}))))}function $(w){var Z;if(w.altKey||w.ctrlKey||w.metaKey||!["ArrowLeft","ArrowRight","Home","End"].includes(w.key)||!o.value.length)return;w.preventDefault();const Y=(Z=w.target.closest('[role="tab"]'))==null?void 0:Z.dataset.tabValue,D=o.value.findIndex(Q=>Q.value===(Y??r.value)),N=c.value&&getComputedStyle(c.value).direction==="rtl",S=w.key===(N?"ArrowLeft":"ArrowRight"),g=w.key==="Home"?0:w.key==="End"?o.value.length-1:D<0?S?0:o.value.length-1:(D+(S?1:-1)+o.value.length)%o.value.length,W=o.value[g];W&&ee(W,!0)}return Ie(()=>n.items,()=>{var w;n.modelValue===void 0&&!o.value.some(Y=>Y.value===s.value)&&(s.value=((w=o.value[0])==null?void 0:w.value)??"")},{deep:!0}),Ie(()=>n.modelValue,w=>{var Y;w!==void 0?s.value=w:o.value.some(D=>D.value===s.value)||(s.value=((Y=o.value[0])==null?void 0:Y.value)??"")}),Ie(()=>[n.modelValue,n.items],()=>ke(H),{deep:!0}),kt(()=>{var w;typeof ResizeObserver<"u"&&(L=new ResizeObserver(H)),H(),window.addEventListener("resize",H),(w=document.fonts)==null||w.ready.then(()=>{C||H()}),j=requestAnimationFrame(()=>{C||(u.value=!0)})}),po(H),Qt(()=>{C=!0,L==null||L.disconnect(),h.clear(),window.removeEventListener("resize",H),cancelAnimationFrame(j)}),(w,Y)=>(y(),k("div",{ref_key:"track",ref:c,class:he(["sliding-tabs-demo",{"is-ready":u.value}]),role:"tablist","aria-orientation":"horizontal","aria-label":e.label,onKeydown:$},[l("span",{class:"sliding-tabs-indicator",style:Ft(d.value),"aria-hidden":"true"},null,4),(y(!0),k(Ne,null,_e(e.items,D=>(y(),k("button",{key:D.value,type:"button",role:"tab","data-tab-value":D.value,"aria-selected":r.value===D.value&&!D.disabled,tabindex:!D.disabled&&a.value===D.value?0:-1,disabled:D.disabled,onClick:N=>ee(D)},[l("span",null,ie(D.label),1),D.count!==void 0?(y(),k("span",hg,ie(D.count),1)):ge("",!0)],8,fg))),128))],42,gg))}}),Is=Dt(mg,[["__scopeId","data-v-323e21e9"]]),yg=["disabled"],Ng={class:"task-groups-scroll"},vg=["data-group-id"],xg=["disabled","aria-expanded","aria-controls","aria-label","onClick"],jg=["innerHTML"],Lg={class:"task-group-count"},bg=["inert","aria-hidden","id"],Dg=["disabled","aria-current","aria-label","title","onClick"],Ig={class:"task-row-label"},Tg={key:0,class:"task-row-meta"},wg={key:1,class:"task-status-dot","aria-hidden":"true"},zg={key:2,class:"task-waiting-icon",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},Ag={key:3,class:"task-idle-dot","aria-hidden":"true"},kg={key:0,class:"task-group-empty"},Sg=350,Eg=Fe({__name:"GroupedTaskList",props:{groups:{default:()=>[{id:"running",label:"In progress",items:[{id:"portfolio",label:"Design a portfolio",status:"running"},{id:"brand",label:"Organize brand assets",status:"waiting"}]},{id:"auto",label:"Automations",items:[{id:"review",label:"Review the interface",status:"running"},{id:"export",label:"Export design assets",status:"idle"}]},{id:"history",label:"History",items:[{id:"landing",label:"Build the landing page",status:"completed",meta:"Just now"},{id:"research",label:"Collect references",status:"completed",meta:"Yesterday"}]}]},modelValue:{},disabled:{type:Boolean,default:!1},createDisabled:{type:Boolean,default:!1}},emits:["select","create","update:modelValue"],setup(e,{emit:t}){const n=e,i=t,o=G(n.modelValue??a()),s=Te(()=>n.modelValue??o.value),r=G();function a(){var I;return((I=n.groups.filter(b=>!b.disabled).flatMap(b=>b.items).find(b=>!b.disabled))==null?void 0:I.id)??""}function c(I){return`task-group-${u}-${encodeURIComponent(I)}`}const d=G({}),u=Qn(),h=new WeakMap;function L(I){var v;if(n.disabled||(v=n.groups.find(p=>p.id===I))!=null&&v.disabled)return;const b=document.getElementById(c(I));b&&h.set(b,{height:b.getBoundingClientRect().height,opacity:getComputedStyle(b).opacity}),d.value[I]=!d.value[I]}const j=G(),C=G({x:0,y:0,diameter:0}),O=G("idle"),H=G(!1),ee=G(!1);let $,q=!1,w=!1,Y,D,N;const S={running:"Running",waiting:"Needs input",idle:"Ready",completed:"Completed"},g={running:'<circle cx="12" cy="12" r="8.2"/><path d="M10.4 8.9l4.6 3.1-4.6 3.1z"/>',auto:'<circle cx="4.6" cy="12" r="1.35" fill="currentColor" stroke="none"/><path d="M6.4 12h11.2M14.2 6.6l6.2 5.4-6.2 5.4"/>',history:'<path d="M4.2 4.2v4.6h4.6M4.3 13.2A8.2 8.2 0 1 0 7.2 6.1L4.2 8.8M12 8.2v3.2l3.2 1.6"/>'};function W(I,b){n.disabled||b.disabled||I.disabled||(n.modelValue===void 0&&(o.value=I.id),i("update:modelValue",I.id),i("select",I,b))}function Z(){return window.matchMedia("(hover: hover) and (pointer: fine)").matches}function Q(){var I,b,v,p;return n.disabled||n.createDisabled||((I=r.value)==null?void 0:I.getAttribute("aria-disabled"))==="true"||((b=r.value)==null?void 0:b.getAttribute("aria-busy"))==="true"||((v=j.value)==null?void 0:v.getAttribute("aria-disabled"))==="true"||((p=j.value)==null?void 0:p.getAttribute("aria-busy"))==="true"}function J(){clearTimeout(D),D=void 0}function ue(I,b){const v=j.value;if(!v)return;const p=v.getBoundingClientRect(),A=I===void 0?p.width/2:I-p.left,P=b===void 0?p.height/2:b-p.top,ce=Math.max(A,p.width-A),U=Math.max(P,p.height-P);C.value={x:A,y:P,diameter:Math.hypot(ce,U)*2}}function fe(I,b){Q()||(J(),ue(I,b),H.value=!1,O.value="hover")}function ae(){J(),O.value="leave",D=setTimeout(()=>{O.value!=="hover"&&(C.value={...C.value,diameter:0},O.value="idle"),D=void 0},Sg)}function re(){clearTimeout(N),N=void 0,ee.value=!1}function pe(){Q()||(clearTimeout(N),ee.value=!0,N=setTimeout(()=>{ee.value=!1,N=void 0},520))}function te(I){!Z()||I.pointerType==="touch"||($={x:I.clientX,y:I.clientY},!Q()&&(fe($.x,$.y),pe()))}function z(){$=void 0,re(),q||ae()}function R(){var I;q=!Q()&&!!((I=j.value)!=null&&I.matches(":focus-visible")),q&&(fe(),pe())}function ne(){q=!1,$||(ae(),re())}function le(){Q()||(pe(),i("create"))}function ve(){$=void 0,q=!1,ae(),re()}function Le(){document.hidden&&ve()}function we(){var b;const I=Q();I?(J(),H.value=!0,O.value="idle",C.value.diameter&&(C.value={...C.value,diameter:0}),q=!1,re()):(H.value=!1,w&&$&&((b=j.value)!=null&&b.matches(":hover"))&&Z()&&fe($.x,$.y)),w=I}Ie(()=>n.disabled||n.createDisabled,we,{flush:"post"}),po(we),kt(()=>{we(),window.addEventListener("blur",ve),document.addEventListener("visibilitychange",Le),typeof ResizeObserver<"u"&&(Y=new ResizeObserver(()=>{O.value==="hover"&&!Q()&&ue(q||$==null?void 0:$.x,q||$==null?void 0:$.y)}),j.value&&Y.observe(j.value))}),Qt(()=>{Y==null||Y.disconnect(),J(),re(),window.removeEventListener("blur",ve),document.removeEventListener("visibilitychange",Le)});function Ye(I){var v;if(n.disabled||!r.value||I.altKey||I.ctrlKey||I.metaKey)return;const b=I.target.closest("button");if(!(!b||b.disabled)){if(["ArrowUp","ArrowDown","Home","End"].includes(I.key)){const p=[...r.value.querySelectorAll("button:not(:disabled)")].filter(ce=>!ce.closest("[inert]")&&ce.getClientRects().length),A=p.indexOf(b);if(!p.length)return;I.preventDefault();const P=I.key==="Home"?0:I.key==="End"?p.length-1:(A+(I.key==="ArrowDown"?1:-1)+p.length)%p.length;(v=p[P])==null||v.focus({preventScroll:!0})}else if(I.key==="ArrowLeft"||I.key==="ArrowRight"){const p=b.closest(".task-nav-group"),A=p==null?void 0:p.dataset.groupId,P=p==null?void 0:p.querySelector(".task-group-heading");if(!A||!P||P.disabled)return;I.preventDefault(),I.key==="ArrowLeft"?(d.value[A]||L(A),ke(()=>P.focus({preventScroll:!0}))):d.value[A]&&L(A)}}}function Xe(I){I.removeAttribute("inert"),I.removeAttribute("aria-hidden");const b=I,v=h.get(b),p=(v==null?void 0:v.height)??b.getBoundingClientRect().height,A=(v==null?void 0:v.opacity)??getComputedStyle(b).opacity;b.style.height=`${p}px`,b.style.opacity=p?A:"0"}function Ze(I){const b=I;b.getBoundingClientRect(),b.style.height=`${b.scrollHeight}px`,b.style.opacity="1",h.delete(b)}function ct(I){I.removeAttribute("inert"),I.removeAttribute("aria-hidden");const b=I;b.style.height="",b.style.opacity=""}function M(I){const b=I,v=h.get(b),p=getComputedStyle(b).display==="none",A=p?(v==null?void 0:v.height)??0:b.getBoundingClientRect().height,P=p?(v==null?void 0:v.opacity)??"0":getComputedStyle(b).opacity;h.set(b,{height:A,opacity:P}),b.style.height=`${A}px`,b.style.opacity=P}function x(I){I.setAttribute("inert",""),I.setAttribute("aria-hidden","true");const b=I;b.style.height=`${b.offsetHeight}px`,b.style.opacity="1"}function _(I){const b=I;b.getBoundingClientRect(),b.style.height="0px",b.style.opacity="0"}function V(I){const b=I;b.style.height="",b.style.opacity=""}return Ie(()=>n.modelValue,I=>{I!==void 0?o.value=I:n.groups.some(b=>!b.disabled&&b.items.some(v=>v.id===o.value&&!v.disabled))||(o.value=a())}),Ie(()=>n.groups,I=>{const b=new Set(I.map(v=>v.id));d.value=Object.fromEntries(Object.entries(d.value).filter(([v])=>b.has(v))),n.modelValue===void 0&&!I.some(v=>!v.disabled&&v.items.some(p=>p.id===o.value&&!p.disabled))&&(o.value=a())},{deep:!0}),(I,b)=>(y(),k("nav",{ref_key:"navigation",ref:r,class:"grouped-task-demo","aria-label":"Workspace tasks",onKeydown:Ye},[l("button",{ref_key:"createButton",ref:j,class:he(["task-create-button",{"is-active":O.value==="hover","is-leaving":O.value==="leave","is-ink-suppressed":H.value}]),type:"button",disabled:e.disabled||e.createDisabled,onPointerenter:te,onPointerleave:z,onPointercancel:z,onFocus:R,onBlur:ne,onClick:le},[l("span",{class:"task-create-wave",style:Ft({left:`${C.value.x}px`,top:`${C.value.y}px`,width:`${C.value.diameter}px`,height:`${C.value.diameter}px`}),"aria-hidden":"true"},null,4),(y(),k("svg",{class:he({"is-playing":ee.value}),width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[...b[0]||(b[0]=[l("path",{d:"M12.5 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6.5"},null,-1),l("path",{class:"task-create-pen",d:"m15.5 4.5 4 4M10 10l7.3-7.3a1.4 1.4 0 0 1 2 0l2 2a1.4 1.4 0 0 1 0 2L14 14l-5 1 1-5Z"},null,-1)])],2)),b[1]||(b[1]=l("span",null,"New task",-1))],42,yg),l("div",Ng,[(y(!0),k(Ne,null,_e(e.groups,v=>(y(),k("section",{key:v.id,class:"task-nav-group","data-group-id":v.id},[l("button",{class:"task-group-heading",type:"button",disabled:e.disabled||v.disabled,"aria-expanded":!d.value[v.id],"aria-controls":c(v.id),"aria-label":`${d.value[v.id]?"Expand":"Collapse"} ${v.label}`,onClick:p=>L(v.id)},[(y(),k("svg",{class:"task-group-icon",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:g[v.icon||v.id]||g.history},null,8,jg)),l("span",null,ie(v.label),1),(y(),k("svg",{class:he(["task-group-chevron",{collapsed:d.value[v.id]}]),width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[...b[2]||(b[2]=[l("path",{d:"m7 10 5 5 5-5"},null,-1)])],2)),l("span",Lg,ie(v.items.length),1)],8,xg),B(dt,{name:"task-group-collapse",onBeforeEnter:Xe,onEnter:Ze,onAfterEnter:ct,onBeforeLeave:x,onLeave:_,onAfterLeave:V,onEnterCancelled:M,onLeaveCancelled:M,persisted:""},{default:Ke(()=>[qe(l("div",{inert:d.value[v.id]||void 0,"aria-hidden":d.value[v.id]||void 0,id:c(v.id),class:"task-group-body"},[(y(!0),k(Ne,null,_e(v.items,p=>(y(),k("div",{key:p.id,class:"task-tree-item"},[l("button",{class:he(["task-nav-row",{selected:s.value===p.id}]),type:"button",disabled:e.disabled||v.disabled||p.disabled,"aria-current":s.value===p.id?"true":void 0,"aria-label":`${p.label}${p.status?`，${S[p.status]}`:""}`,title:p.label,onClick:A=>W(p,v)},[l("span",Ig,ie(p.label),1),p.meta?(y(),k("span",Tg,ie(p.meta),1)):ge("",!0),p.status==="running"?(y(),k("span",wg)):p.status==="waiting"?(y(),k("svg",zg,[...b[3]||(b[3]=[l("circle",{cx:"10.2",cy:"8",r:"3.2"},null,-1),l("path",{d:"M3.8 20a6.4 6.4 0 0 1 12.8 0"},null,-1),l("circle",{class:"task-waiting-dot",cx:"18.6",cy:"11.5",r:"1.55",fill:"currentColor",stroke:"none"},null,-1)])])):p.status==="idle"?(y(),k("span",Ag)):ge("",!0)],10,Dg)]))),128)),v.items.length?ge("",!0):(y(),k("p",kg,"No tasks"))],8,bg),[[Ct,!d.value[v.id]]])]),_:2},1024)],8,vg))),128))])],544))}}),Kr=Dt(Eg,[["__scopeId","data-v-148271d7"]]),Cg=Object.assign({"../components/ui/ActivityTimeline.vue":jd,"../components/ui/ChatComposer.vue":Ld,"../components/ui/ChatConversation.vue":bd,"../components/ui/ClarificationCard.vue":Dd,"../components/ui/GroupedTaskList.vue":Id,"../components/ui/ModelSelector.vue":Td,"../components/ui/SlidingTabs.vue":wd,"../components/ui/StatusBadge.vue":zd,"../components/ui/ThinkingIndicator.vue":Ad}),Og=[["chat-conversation","Chat Conversation","Chat Conversation","Messages, execution steps, and input","conversation",Zr,"ChatConversation",!0],["chat-composer","Chat Composer","Chat Composer","Messages, attachments, and model selection","conversation",Hd,"ChatComposer",!0],["model-selector","Model Selector","Model Selector","Search and switch models","agent",lp,"ModelSelector"],["thinking-indicator","Thinking Indicator","Thinking Indicator","A thinking status indicator","conversation",XM,"ThinkingIndicator"],["status-badge","Status Badge","Status Badge","Task execution status","agent",dp,"StatusBadge"],["activity-timeline","Activity Timeline","Activity Timeline","Execution steps and tool details","workflow",_p,"ActivityTimeline",!0],["clarification-card","Clarification Card","Clarification Card","Questions, choices, and answers","conversation",pg,"ClarificationCard",!0],["sliding-tabs","Sliding Tabs","Sliding Tabs","Switch between tabs","navigation",Is,"SlidingTabs",!0],["grouped-task-list","Grouped Task List","Grouped Task List","Grouped tasks with collapse and selection","navigation",Kr,"GroupedTaskList",!0]],mt=Og.map(([e,t,n,i,o,s,r,a])=>({slug:e,name:t,english:n,description:i,category:o,component:s,filename:r,fresh:a,source:Cg[`../components/ui/${r}.vue`]||""})),Oi=[{id:"all",name:"All components",english:"All components"},{id:"conversation",name:"Conversation",english:"Conversation"},{id:"agent",name:"Agents",english:"Agent"},{id:"workflow",name:"Workflow",english:"Workflow"},{id:"navigation",name:"Navigation",english:"Navigation"}],Qg=e=>e.filename,Ug={"chat-conversation":"chat conversation messages history attachments input send stop streaming","chat-composer":"chat composer message input attachments send","model-selector":"model select switch dropdown picker","thinking-indicator":"thinking waiting loading reasoning","status-badge":"status label badge tag","activity-timeline":"activity timeline fold expand collapse tools","clarification-card":"question answer clarification choices form","sliding-tabs":"tab tabs switch segmented control","grouped-task-list":"list group tasks navigation sidebar fold collapse hover new task"};function Yg(e,t){return`${e.name} ${e.english} ${e.description} ${Ug[e.slug]||""}`.toLowerCase().includes(t.trim().toLowerCase())}const Pg={body:'<rect class="front" x="9" y="9" width="11" height="11" rx="2"/><path class="back" d="M5 15V5a2 2 0 0 1 2-2h10"/>',duration:1050,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"前后两页分离，再贴合复位"},_g={body:'<g class="lid"><path d="M4 7h16M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></g><path class="bin" d="M6 7l1 13h10l1-13"/>',duration:1100,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"桶身固定，桶盖和把手一起抬起再合上"},Wg={body:'<path d="M3 17V7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8"/><path class="front" d="M3 10h18v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',duration:1150,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"后侧标签固定，前侧面板展开再合上"},Rg={body:'<rect x="3" y="4" width="18" height="16" rx="2"/><path class="prompt" d="M7 9l3 3-3 3"/><path class="cursor" d="M13 15h4"/>',duration:1100,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"外框保持固定，提示符前移，光标闪烁两次"},Bg={body:'<circle class="node-a" cx="6" cy="6" r="2.2" fill="currentColor" fill-opacity="0"/><circle class="node-b" cx="6" cy="18" r="2.2" fill="currentColor" fill-opacity="0"/><circle class="node-c" cx="18" cy="12" r="2.2" fill="currentColor" fill-opacity="0"/><path pathLength="1" d="M8.2 6C12 6 14 8.2 16.45 10.45M8.2 18C12 18 14 15.8 16.45 13.55"/><path class="signal" pathLength="1" d="M8.2 6C12 6 14 8.2 16.45 10.45M8.2 18C12 18 14 15.8 16.45 13.55" opacity="0" stroke-width="2.5"/>',duration:1250,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"较小节点依次点亮，信号沿两条实线到达终点"},$g={body:'<path class="agent-check-draw" pathLength="1" d="M5 12l5 5 9-11"/>',duration:1050,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"从左侧起笔，经过折点，向右上方完成勾选"},Hg={body:'<g class="bell-body"><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z"/></g><path class="clapper" d="M10 20a2 2 0 0 0 4 0"/>',duration:1200,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"钟身绕顶部摆动，铃舌延迟跟随并收稳"},Gg={body:'<circle cx="12" cy="12" r="3"/><path class="gear" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',duration:1050,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"中心轴固定，外部齿轮转动并停稳"},Vg={body:'<g class="motion-target"><path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/></g>',duration:1150,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"刷新箭头完整转动一圈"},Fg={body:'<g class="motion-target"><circle cx="12" cy="12" r="9" opacity="0.25"/><path d="M21 12a9 9 0 0 1-9 9"/></g>',duration:1150,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"演示单圈；实际加载期间才持续旋转"},Zg={body:'<g class="motion-target"><rect x="6" y="6" width="12" height="12" rx="2"/></g>',duration:900,viewBox:"0 0 24 24",filled:!0,strokeWidth:1.2,note:"停止方块收紧一次，再稳定回位"},Kg={body:'<g class="motion-target"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></g>',duration:1100,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"纸飞机沿右上方向送出，再回到起点"},Jg={body:'<g class="motion-target"><path d="M7 5l12 7-12 7z"/></g>',duration:950,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"播放符号轻轻前移，提示可开始运行"},qg={body:'<circle cx="12" cy="12" r="9"/><path class="motion-target" d="M10 9l5 3-5 3z"/>',duration:950,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"播放符号轻轻前移，提示可开始运行"},Xg={body:'<g class="motion-target"><path d="M21 12a8 8 0 0 1-11.3 7.3L4 20l.7-5.7A8 8 0 1 1 21 12z"/></g>',duration:1e3,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"气泡从尾部轻展开一次，提示开启对话"},ef={body:'<path class="left" d="M9.5 3A2.5 2.5 0 0 0 7 5.5v.1A3 3 0 0 0 4.6 10a3 3 0 0 0 .4 5.4A3 3 0 0 0 9.5 20a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 9.5 3z"/><path class="right" d="M14.5 3A2.5 2.5 0 0 1 17 5.5v.1a3 3 0 0 1 2.4 4.4 3 3 0 0 1-.4 5.4 3 3 0 0 1-4.5 4.6 2.5 2.5 0 0 1-2.5-2.5"/>',duration:1200,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"左右脑轮流轻亮，提示思考与技能"},tf={body:'<rect x="4" y="8" width="16" height="11" rx="2"/><path class="antenna" d="M12 3v5"/><path class="eyes" d="M8 13h.01M16 13h.01"/><path class="mouth" d="M9 17h6"/>',duration:1150,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"天线接收一次信号，眼睛眨动，表情轻回应"},nf={body:'<circle class="head" cx="12" cy="8" r="4"/><path class="body" d="M4 21a8 8 0 0 1 16 0"/>',duration:1050,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"头像轻点头一次，回应用户操作"},of={body:'<path d="M3 3h8v8H3z"/><path d="M13 3h8v5h-8z"/><path d="M13 12h8v9h-8z"/><path d="M3 13h8v8H3z"/>',duration:565,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"四块面板依次轻抬并复位"},sf={body:'<path class="logout-door" d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4"/><g class="logout-arrow"><path d="M10 12h10"/><path d="m16 8 4 4-4 4"/></g>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"门框固定，箭头尖与横线对齐，整个箭头向外移出后复位"},af={body:'<path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 17V9"/><path d="M12 17V7"/><path d="M16 17v-5"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"坐标轴固定，三条柱线从底部依次生长"},rf={body:'<rect x="3.1" y="3.6" width="5" height="16.8" rx="1.6"/><rect x="9.5" y="3.6" width="5" height="16.8" rx="1.6"/><rect x="15.9" y="3.6" width="5" height="16.8" rx="1.6"/>',duration:570,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"三根等宽圆角列依次变淡；没有内部卡片和外框"},lf={body:'<path class="gate-shield" d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path class="gate-bars" d="M9 9v6M15 9v6"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"中性盾牌与闸口，表示人工审核入口"},cf={body:'<rect x="5" y="11" width="14" height="10"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',duration:460,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"锁身固定，锁梁轻压后复位"},uf={body:'<g><circle cx="8" cy="15" r="4"/><path d="M11.5 12.5 21 3M16 8l3 3M18 5l3 3"/></g>',duration:530,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"钥匙小幅转动一次后复位"},df={body:'<rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01"/><path d="M7 17.5h.01"/>',duration:530,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"双层机架固定，两枚指示灯上下响应"},Mf={body:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"文档轮廓固定，右上折角轻翻后复位"},pf={body:'<path class="skill-piece" d="M9 4V3a2 2 0 0 1 4 0v1h5a2 2 0 0 1 2 2v4h-1a2 2 0 0 0 0 4h1v4a2 2 0 0 1-2 2h-4v-1a2 2 0 0 0-4 0v1H6a2 2 0 0 1-2-2v-4H3a2 2 0 0 1 0-4h1V6a2 2 0 0 1 2-2h3Z"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"完整拼图块，轻抬归位以提示能力接入"},gf={body:'<path d="M9 7V3M15 7V3"/><path d="M8 7h8v4a4 4 0 0 1-8 0z"/><path d="M12 15v6"/>',duration:460,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"插头外壳固定，双插脚向接入方向伸出"},ff={body:'<path d="M13 2L4 14h6l-1 8 9-12h-6z"/>',duration:470,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"闪电轻亮一次，回到完整轮廓"},hf={body:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',duration:530,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"镜框与镜柄一起向右上扫描后复位"},mf={body:'<path d="M4 5h16"/><path d="M7 12h10"/><path d="M10 19h4"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"三条筛选线交错轻移后复位"},yf={body:'<path d="M12 5v14"/><path d="M5 12h14"/>',duration:475,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"两条加号线从中心先后舒展"},Nf={body:'<path d="M5 3h12l4 4v14H3V5z"/><path d="M8 3v6h8V3"/><path d="M8 21v-7h8v7"/>',duration:570,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"存储轮廓固定，上槽轻压、下块响应"},vf={body:'<circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/>',duration:520,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"三个圆点从上到下依次回应"},xf={body:'<path d="M6 6l12 12M18 6L6 18"/>',duration:430,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"交叉线轻转一次后复位"},jf={body:'<path d="M12 3l9 16H3z"/><path d="M12 9v5"/><path d="M12 17h.01"/>',duration:490,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"三角框固定，感叹号竖线和点先后提醒"},Lf={body:'<path d="M7 4 3 8l4 4"/><path d="M3 8h13a5 5 0 0 1 5 5"/><path d="m17 20 4-4-4-4"/><path d="M21 16H8a5 5 0 0 1-5-5"/>',duration:560,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"两条箭头分别沿自己的方向交接"},bf={body:'<path d="M12 3v12M7 10l5 5 5-5"/><path d="M4 21h16"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"承接线固定，下载箭头向下轻落"},Df={body:'<path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z"/><path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z"/>',duration:570,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"主星与副星错峰闪耀一次"},If={body:'<circle class="branch-start" cx="12" cy="19" r="2"/><circle class="branch-left" cx="5" cy="5" r="2"/><circle class="branch-right" cx="19" cy="5" r="2"/><path pathLength="1" class="branch-routes" d="M12 17v-5a5 5 0 0 0-5-5H5M12 12a5 5 0 0 1 5-5h2"/>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"流程分支：一个起点分流到两个终点，与 Git 仓库图形区分"},Tf={body:'<circle cx="12" cy="12" r="9"/><path pathLength="1" d="M8 12l3 3 5-6"/>',duration:530,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"外圈固定，勾从左边起笔到右上收笔"},wf={body:'<circle cx="12" cy="12" r="4"/>',duration:430,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"圆点轻亮一次后恢复静态"},zf={body:'<g><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M14 6l4 4"/></g>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"铅笔向笔尖方向轻写一次"},Af={body:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',duration:530,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"眼眶固定，瞳孔向右查看后回中"},kf={body:'<path pathLength="1" d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path pathLength="1" d="M14 3v5h5"/><path pathLength="1" d="M9 13h6"/><path pathLength="1" d="M9 17h6"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"纸张与折角固定，两行文字从左向右依次画出"},Sf={body:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"钟框固定，表针小幅前探后复位"},Ef={body:'<path d="M4 12h12M11 7l5 5-5 5"/><path d="M20 4v16"/>',duration:480,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"边界固定，箭头轻推向右侧入口"},Cf={body:'<path d="M8 12h12M15 7l5 5-5 5"/><path d="M4 4v16"/>',duration:480,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"边界固定，箭头轻推离左侧出口"},Of={body:'<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/>',duration:540,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"瓶体轻摇一次；当前原图没有液面与气泡"},Qf={body:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"日轮固定，光线轻转后复位"},Uf={body:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"月牙轻转后回到静态位置"},Yf={body:'<path d="M9 3H3v6"/><path d="M3 3l7 7"/><path d="M15 21h6v-6"/><path d="M21 21l-7-7"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"两端角向各自对角方向展开后复位"},Pf={body:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',duration:560,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"旗杆固定，旗面小幅摆动一次"},_f={body:'<g><path d="M3 3v5h5"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/></g><path d="M12 7v5l4 2"/>',duration:560,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"回溯环与表针轻回摆后复位"},Wf={body:'<path d="M5 4C2 9 2 15 5 20"/><path d="M19 4c3 5 3 11 0 16"/><path d="M9 9l6 6M15 9l-6 6"/>',duration:480,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"变量符号固定，两侧括号轻展后收回"},Rf={body:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/>',duration:480,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"门框固定，离开箭头向右滑动一次"},Bf={body:'<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="9" r="2.5"/><path pathLength="1" d="M18 11.5a6 6 0 0 1-6 6H9M6 8.5v7"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"提交节点固定，连线沿已有路径描绘一次"},$f={body:'<path d="M21 11l-8.5 8.5a5 5 0 0 1-7-7L14 4a3.5 3.5 0 0 1 5 5l-8.5 8.5a2 2 0 0 1-3-3L15 6"/>',duration:520,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"回形针以上端为轴轻挂摆一次"},Hf={body:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"屏幕外框轻亮；原图没有独立屏内扫描线"},Gf={body:'<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 18h2"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"机身固定，屏幕底部短线轻响应"},Vf={body:'<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>',duration:540,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"三条菜单线依次向右轻移并归位"},Ff={body:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',duration:560,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"外圆与赤道固定，经线轻移模拟浏览"},Zf={body:'<circle cx="12" cy="12" r="7"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M2 12h4"/><path d="M18 12h4"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"中心圆固定，四向准星轻聚拢后复位"},Kf={body:'<g class="tag-shape"><path d="M4 4h7l9 9a1.4 1.4 0 0 1 0 2l-5 5a1.4 1.4 0 0 1-2 0l-9-9V4Z"/><circle cx="7.5" cy="7.5" r="1.2" stroke-width="1.4"/></g>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"标准斜角吊牌，保留穿孔；围绕孔位轻摆一次后回位"},Jf={body:'<g transform="scale(0.0234375)"><path fill="currentColor" stroke="none" d="M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2-73.2 0-146.4 24.1-206.5 72.3a33.23 33.23 0 0 0-2.7 49.4l181.7 181.7-215.4 215.2a15.8 15.8 0 0 0-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4 181.7 181.7c6.5 6.5 15 9.7 23.5 9.7 9.7 0 19.3-4.2 25.9-12.4 56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8zM666.2 549.3l-24.5 24.5 3.8 34.4a259.92 259.92 0 0 1-30.4 153.9L262 408.8c12.9-7.1 26.3-13.1 40.3-17.9 27.2-9.4 55.7-14.1 84.7-14.1 9.6 0 19.3.5 28.9 1.6l34.4 3.8 24.5-24.5L608.5 224 800 415.5 666.2 549.3z"/></g>',duration:480,viewBox:"0 0 24 24",filled:!0,strokeWidth:0,note:"图钉沿针尖方向轻落后复位"},qf={body:'<path d="m12 3.6 2.5 5.1 5.6.8-4 3.9.9 5.6L12 16.3 7 19l.9-5.6-4-3.9 5.6-.8z"/>',duration:520,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"星形轻转一次，始终保持空心"},Xf={body:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.2 2.4c-.8.3-1.2.8-1.2 1.6V14"/><circle cx="12" cy="17" r="1"/>',duration:520,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"外圈固定，问号轻探、底点延后回应"},eh={body:'<path d="m12 2 10 6-10 6L2 8Z"/><path class="token-layer-one" d="m3 13 9 5 9-5"/><path class="token-layer-two" d="m3 17 9 5 9-5"/><path d="M10 6h4m-2 0v4"/>',duration:750,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"Token 叠片计量，各层依次轻抬归位"},th={body:`<g class="motion">
          <rect class="p0" x="3.4" y="5.2" width="17.2" height="15.2" rx="2.6" />
          <path class="p1" d="M8.2 3v4.2M15.8 3v4.2M3.4 10.2h17.2"  pathLength="100"/>
          <circle class="p2" cx="12" cy="15.2" r="2.6" />
        </g>`,duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.6,note:"日历外框固定，仅日期圆点轻亮一次。"},nh={body:'<path d="M20 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"/><path class="queue-rows" d="M7 7h9M7 11h5M7 15h3"/><circle cx="17" cy="16" r="5"/><path class="queue-hand" d="M17 13v3l2 1"/>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"排队列表与等待时钟，时针前探一次"},ih={body:'<g class="motion"><path class="p0" d="M9 14 4 9l5-5"  pathLength="100"/><path class="p1" d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"  pathLength="100"/></g>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.8,note:"hover：回溯曲线描过，箭头向左提示一次。禁用时静止。"},oh={body:'<g class="motion"><path class="p0" d="m15 14 5-5-5-5"  pathLength="100"/><path class="p1" d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13"  pathLength="100"/></g>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.8,note:"hover：前进曲线描过，箭头向右提示一次。禁用时静止。"},sh={body:'<g class="motion"><rect class="p0" x="3" y="4" width="6" height="5" rx="1.5" /><rect class="p1" x="15" y="4" width="6" height="5" rx="1.5" /><rect class="p2" x="15" y="15" width="6" height="5" rx="1.5" /><path class="p3" d="M9 6.5h6M12 6.5v11h3"  pathLength="100"/></g>',duration:700,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.8,note:"hover：三节点各自归位，连线保持稳定，表达整理布局。"},ah={body:'<rect x="2.5" y="3.5" width="19" height="17" rx="2"/><path d="M7 8h6v7h4M7 8v7h4"/><rect x="5" y="6" width="4" height="4" rx=".6" fill="currentColor" stroke="none"/><rect x="9" y="13" width="4" height="4" rx=".6" fill="currentColor" stroke="none"/><rect x="15" y="13" width="4" height="4" rx=".6" fill="currentColor" stroke="none"/><rect class="minimap-viewport" x="9" y="10.5" width="11" height="8.5" rx="1" stroke-width="1.2"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"小流程图与视口框，视口短移后归位"},rh={body:`<g class="motion">
            <circle class="p0" cx="9" cy="6" r="1.6" /><circle class="p1" cx="15" cy="6" r="1.6" />
            <circle class="p2" cx="9" cy="12" r="1.6" /><circle class="p3" cx="15" cy="12" r="1.6" />
            <circle class="p4" cx="9" cy="18" r="1.6" /><circle class="p5" cx="15" cy="18" r="1.6" />
          </g>`,duration:550,viewBox:"0 0 24 24",filled:!0,strokeWidth:0,note:"hover：两列握点微分开再归位，实际拖动中保持稳定。"},lh={body:`<g class="motion">
                    <path class="p0" fill="currentColor" fill-rule="nonzero" d="M17.535 12.514l-.696-1.796c0-.021.01-.375.01-.558C16.848 7.088 15.446 4 12 4c-3.446 0-4.848 3.088-4.848 6.16 0 .183.009.537.01.558l-.696 1.796c-.19.515-.38 1.05-.517 1.51-.657 2.189-.444 3.095-.282 3.115.348.043 1.354-1.648 1.354-1.648 0 .98.488 2.258 1.542 3.18-.394.127-.878.32-1.188.557-.28.214-.245.431-.194.52.22.385 3.79.245 4.82.125 1.03.12 4.599.26 4.82-.126.05-.088.085-.305-.194-.519-.311-.237-.795-.43-1.19-.556 1.055-.923 1.542-2.202 1.542-3.181 0 0 1.007 1.691 1.355 1.648.162-.02.378-.928-.283-3.116-.14-.463-.325-.994-.516-1.509z" pathLength="100"/>
                </g>`,duration:650,viewBox:"0 0 24 24",filled:!0,strokeWidth:0,note:"品牌几何保持原样；仅在所属配置按钮 hover 时给外层背景/边框反馈。"},ch={body:'<g class="motion"><circle class="p0" cx="12" cy="12" r="10"/><line class="p1" x1="12" y1="16" x2="12" y2="12"/><line class="p2" x1="12" y1="8" x2="12.01" y2="8"/></g>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:2,note:"hover：外环固定，信息标点轻亮一次。"},uh={body:'<g class="motion"><path class="p0" d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" pathLength="100"/><line class="p1" x1="12" y1="9" x2="12" y2="13"/><line class="p2" x1="12" y1="17" x2="12.01" y2="17"/></g>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:2,note:"错误横幅首次出现时强调一次，历史错误保持静止。"},dh={body:'<g class="motion"><rect class="p0" x="4" y="4" width="14" height="14" rx="2"/><path class="p1" d="m7 20 10.5-.1A2.5 2.5 0 0 0 20 17.4V8" pathLength="100"/></g>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.8,note:"hover：前后两层短暂分离再归位。"},Mh={body:'<path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8M13 3v5h5V8l-5-5M8 11h3M8 15h2"/><g class="review-lens"><circle cx="16.5" cy="14.5" r="3.5"/><path d="m19 17 3 3"/></g>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"评审文档与放大镜，审阅镜头轻扫一次"},ph={body:'<rect x="4" y="3.5" width="16" height="17" rx="2"/><path d="M8 8h8"/><path class="form-fields" d="M8 12h8M8 16h5"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"表单轮廓固定，输入字段轻亮一次"},gh={body:'<g class="team-front"><circle cx="9" cy="8" r="3"/><path d="M3 20v-1a6 6 0 0 1 12 0v1"/></g><g class="team-back"><path d="M16 5a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5v1"/></g>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"双人团队图形，后方成员轻移归位"},fh={body:'<path class="integration-left" d="M9 4H6a3 3 0 0 0-3 3v2h5v6H3v2a3 3 0 0 0 3 3h3"/><path class="integration-right" d="M15 4h3a3 3 0 0 1 3 3v2h-5v6h5v2a3 3 0 0 1-3 3h-3"/><path d="M10 12h4"/>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"系统集成，两侧连接口靠近后归位"},hh={body:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle class="image-sun" cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"图片边框固定，光点轻亮一次"},mh={body:'<circle cx="12" cy="12" r="8.5"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"通用圆形状态"},yh={body:'<path d="m5 5 10 7-10 7z"/><path d="M19 5v14"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"跳过当前步骤"},Nh={copy:Pg,trash:_g,folder:Wg,terminal:Rg,"stage-terminal":{body:'<rect x="3.2" y="4.2" width="17.6" height="15.6" rx="2"/><path class="prompt" d="M7.1 9.3 10.3 12 7.1 14.7"/><path class="cursor" d="M12.2 14.8h4.6"/>',duration:1100,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"外框保持固定，提示符前移，光标闪烁两次"},workflow:Bg,check:$g,"check-draw":{body:'<path pathLength="1" class="agent-check-draw" d="M7.6 12.4l3.6 3.6L18.2 7.4"/>',duration:1050,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"去掉起笔圆点，仅保留从左侧经过折点、向右上方画出的连续勾"},bell:Hg,settings:Gg,refresh:Vg,spinner:Fg,"arc-spinner":{body:'<g class="motion-target"><g class="agent-arc-spin"><path d="M12 3A9 9 0 1 1 3 12"/><circle class="agent-arc-node" cx="3" cy="12" r="1.65" fill="currentColor" stroke="none"/></g></g>',duration:1150,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"演示单圈；实际加载期间才持续旋转"},"breath-dot":{body:'<circle class="agent-heart-ring" cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" stroke-width="1.15"/><circle class="agent-heart-core" cx="12" cy="12" r="3" fill="currentColor" stroke="none"/>',duration:1150,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"核心轻呼吸，外环扩散一轮后复位"},"bubble-idle":{body:'<path d="M20.5 11.5a7.5 7.5 0 0 1-10.4 6.9L4.2 19.6l.6-5.2A7.5 7.5 0 1 1 20.5 11.5z"/><circle class="agent-bdot-a" cx="9.2" cy="11.4" r="1.05" fill="currentColor" stroke="none"/><circle class="agent-bdot-b" cx="12" cy="11.4" r="1.05" fill="currentColor" stroke="none"/><circle class="agent-bdot-c" cx="14.8" cy="11.4" r="1.05" fill="currentColor" stroke="none"/>',duration:1300,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"对话框固定，三个思考点依次轻提一次"},"user-hold":{body:'<circle cx="10.2" cy="8" r="3.2"/><path d="M3.8 20a6.4 6.4 0 0 1 12.8 0"/><circle class="agent-user-dot" cx="18.6" cy="11.5" r="1.55" fill="currentColor" stroke="none"/>',duration:1100,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"人物保持静止，待确认提示点呼吸一次"},"arrow-flow":{body:'<g class="agent-wake"><circle cx="4.6" cy="12" r="1.35" fill="currentColor" stroke="none"/><path d="M6.4 12h11.2"/><path d="M14.2 6.6l6.2 5.4-6.2 5.4"/></g>',duration:1e3,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"起点轻亮，箭头向前传递一次"},"run-live":{body:'<g class="agent-wake"><circle cx="12" cy="12" r="8.2"/><path d="M10.4 8.9l4.6 3.1-4.6 3.1z"/></g>',duration:1050,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"运行环轻亮，播放符号向前唤醒一次"},"history-back":{body:'<path class="return-arrow" d="M4.2 4.2v4.6h4.6"/><path d="M4.3 13.2A8.2 8.2 0 1 0 7.2 6.1L4.2 8.8"/><circle cx="12" cy="12" r="1.45" fill="currentColor" stroke="none"/><path class="clock-hand" d="M12 8.2v3.2l3.2 1.6"/>',duration:1100,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"时针短暂回拨，返回箭头轻牵引后复位"},"play-continue":{body:'<g class="agent-wake"><circle cx="5.4" cy="12" r="1.4" fill="currentColor" stroke="none"/><path d="M9.2 6.4l10.4 5.6-10.4 5.6z"/></g>',duration:950,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"起点激活，继续符号前移后回位"},"quiet-dot":{body:'<g class="agent-quiet"><circle cx="12" cy="12" r="5.2" opacity="0.45"/><circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none" opacity="0.55"/></g>',duration:1150,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"低强度呼吸一次，保持静默状态"},"warn-pulse":{body:'<g class="agent-wake"><path d="M12 3.2L21.2 19.6H2.8z"/><path d="M12 9.2v5.2"/><circle cx="12" cy="17.4" r="0.85" fill="currentColor" stroke="none"/></g>',duration:1100,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"边框强调一次，感叹号轻压回弹"},"chat-send":{body:'<g class="motion-target"><path d="M12 18V6m-6 6 6-6 6 6"/></g>',duration:1050,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"发送箭头向上送出，再回到待发送位置"},"chat-stop":{body:'<g class="motion-target"><rect x="3.75" y="3.75" width="16.5" height="16.5" rx="3"/></g>',duration:900,viewBox:"0 0 24 24",filled:!0,strokeWidth:0,note:"停止方块收紧一次，再稳定回位"},stop:Zg,send:Kg,play:Jg,runs:qg,chat:Xg,brain:ef,robot:tf,user:nf,"stage-ide":{body:'<rect x="3.2" y="3.6" width="17.6" height="16.8" rx="2"/><path pathLength="1" d="M3.2 8h17.6"/><path pathLength="1" d="M8.2 8v12.4"/><path class="code-a" pathLength="1" d="M11 12.2h6"/><path class="code-b" pathLength="1" d="M11 15.4h4"/>',duration:1050,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"编辑器框架固定，两行代码依次输入"},"stage-browser":{body:'<circle cx="12" cy="12" r="8"/><path d="M4 12h16"/><ellipse cx="12" cy="12" rx="3.3" ry="8"/>',duration:1200,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"地球经线转过一面，外圈和纬线保持稳定"},"stage-log":{body:'<circle cx="6.1" cy="6.6" r="1.15" fill="currentColor" stroke="none"/><circle cx="6.1" cy="12" r="1.15" fill="currentColor" stroke="none"/><circle cx="6.1" cy="17.4" r="1.15" fill="currentColor" stroke="none"/><path class="row-a" pathLength="1" d="M9.3 6.6h8.6"/><path class="row-b" pathLength="1" d="M9.3 12h6.4"/><path class="row-c" pathLength="1" d="M9.3 17.4h8.6"/>',duration:1200,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"三行日志从上到下逐条写入"},"stage-resources":{body:'<rect x="3.2" y="3.2" width="7" height="7" rx="1.6"/><rect x="13.8" y="3.2" width="7" height="7" rx="1.6"/><rect x="3.2" y="13.8" width="7" height="7" rx="1.6"/><rect x="13.8" y="13.8" width="7" height="7" rx="1.6"/>',duration:1250,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"四个资源格依次轻亮并复位"},dashboard:of,"home-start":{body:'<path d="m3.5 10 7.3-6a1.9 1.9 0 0 1 2.4 0l7.3 6"/><path d="M5.5 8.4v10.1A1.5 1.5 0 0 0 7 20h3v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h3a1.5 1.5 0 0 0 1.5-1.5V8.4"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"屋顶固定，入口轮廓轻亮；门洞尚未拆层"},"new-request":{body:'<path d="M12.5 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6.5"/><path d="m15.5 4.5 4 4M10 10l7.3-7.3a1.4 1.4 0 0 1 2 0l2 2a1.4 1.4 0 0 1 0 2L14 14l-5 1 1-5Z"/>',duration:520,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"纸张固定，铅笔沿笔尖方向轻写一次"},"pending-chat":{body:'<path d="M8 5h8a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4H9l-5 3V9a4 4 0 0 1 4-4Z"/><path d="M8.5 10h7"/><path d="M8.5 13.5h4.5"/>',duration:470,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"气泡固定，两行文字先后回应"},"pending-review":{body:'<rect x="5" y="3.5" width="14" height="17" rx="3"/><path pathLength="1" d="M9 8h6"/><path pathLength="1" d="M9 12h6"/><path pathLength="1" d="M9 16h3"/>',duration:530,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"纸张固定，三行内容自上而下描绘"},"pending-approval":{body:'<circle cx="12" cy="12" r="8.5"/><path class="approval-hand" d="M12 7v5l3 2"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"等待审批，使用中性时钟而非通过勾"},"more-horizontal":{body:'<circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>',duration:490,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"三个点依次轻抬，保持横向排列"},logout:sf,chart:af,board:rf,gate:lf,lock:cf,key:uf,server:df,artifact:Mf,skills:pf,connector:gf,trigger:ff,search:hf,filter:mf,plus:yf,save:Nf,more:vf,close:xf,"chat-artifacts":{body:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M14 4v16"/>',duration:470,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"外框固定，分隔线轻拉展示分栏"},alert:jf,"chevron-down":{body:'<path d="M6 9l6 6 6-6"/>',duration:440,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"箭头沿指向轻移一次后复位"},"chevron-left":{body:'<path d="M15 6l-6 6 6 6"/>',duration:440,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"箭头沿指向轻移一次后复位"},"chevron-right":{body:'<path d="M9 6l6 6-6 6"/>',duration:440,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"箭头沿指向轻移一次后复位"},"arrow-left":{body:'<path d="M19 12H5M11 6l-6 6 6 6"/>',duration:440,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"箭头沿指向轻移一次后复位"},"arrow-right":{body:'<path d="M5 12h14M13 6l6 6-6 6"/>',duration:440,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"箭头沿指向轻移一次后复位"},"arrow-up":{body:'<path d="M12 19V5M5 12l7-7 7 7"/>',duration:440,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"箭头沿指向轻移一次后复位"},"chevrons-down":{body:'<path d="M6 5l6 6 6-6"/><path d="M6 11l6 6 6-6"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"双箭头从上到下依次推进"},swap:Lf,download:bf,sparkles:Df,branch:If,ci:Tf,dot:wf,edit:zf,eye:Af,"eye-off":{body:'<path pathLength="1" d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path pathLength="1" d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><path pathLength="1" d="M14.12 14.12a3 3 0 1 1-4.24-4.24"/><path pathLength="1" d="M1 1l22 22"/>',duration:520,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"眼眶固定，斜线从左上到右下描绘"},doc:kf,clock:Sf,input:Ef,output:Cf,flask:Of,sun:Qf,moon:Uf,expand:Yf,flag:Pf,history:_f,variable:Wf,leave:Rf,git:Bf,paperclip:$f,monitor:Hf,mobile:Gf,menu:Vf,"panel-left":{body:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="m16 15-3-3 3-3"/>',duration:470,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"外框固定，分隔线和箭头向收起方向轻移"},globe:Ff,crosshair:Zf,tag:Kf,pin:Jf,star:qf,"star-filled":{body:'<path d="m12 3.6 2.5 5.1 5.6.8-4 3.9.9 5.6L12 16.3 7 19l.9-5.6-4-3.9 5.6-.8z"/>',duration:460,viewBox:"0 0 24 24",filled:!0,strokeWidth:1.2,note:"星标轻亮舒展一次，保持实心状态"},help:Xf,token:eh,calendar:th,"metric-running":{body:`<g class="motion">
          <circle class="p0" cx="12" cy="12" r="8.2" />
          <path class="p1" d="M10.3 8.7l5.4 3.3-5.4 3.3z"  pathLength="100"/>
        </g>`,duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.6,note:"hover：内侧播放符向右短移，圆环固定。真实执行态才允许持续动效。"},queue:nh,undo:ih,redo:oh,"zoom-out":{body:'<g class="motion"><path class="p0" d="M5 12h14"  pathLength="100"/></g>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.8,note:"hover：减号轻收再复原，缩放数值由实际点击控制。"},layout:sh,minimap:ah,"priority-bolt":{body:`<g class="motion">
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
                        </g>`,duration:650,viewBox:"0 0 16 16",filled:!1,strokeWidth:1.5,note:"卡片 hover：左上、右下角分离一次，表示展开预览。"},grip:rh,"confirmation-check":{body:`<g class="motion">
        
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
  </g>`,duration:1200,viewBox:"0 0 14 14",filled:!0,strokeWidth:0,note:"真实正在回复期间可持续呼吸；此预览只演示一轮。"},qq:lh,info:ch,warning:uh,"preview-target":{body:'<g class="motion"><circle class="p0" cx="12" cy="12" r="7.5"/><circle class="p1" cx="12" cy="12" r="2"/><path class="p2" d="M12 2v3M12 19v3M2 12h3M19 12h3" pathLength="100"/></g>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.8,note:"hover：四向刻度描入、中心定位一次；取点状态保持强调色。"},layers:dh,"preview-chat":{body:'<g class="motion"><path class="p0" d="M19.5 4.5h-15A2.5 2.5 0 0 0 2 7v8.5A2.5 2.5 0 0 0 4.5 18H7l3 3 3-3h6.5a2.5 2.5 0 0 0 2.5-2.5V7a2.5 2.5 0 0 0-2.5-2.5Z" pathLength="100"/><path class="p1" d="M7 9h10" pathLength="100"/><path class="p2" d="M7 13h6" pathLength="100"/></g>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.8,note:"hover：框体固定，两行文字依次画出一次。"},"drawer-collapse":{body:'<g class="motion"><rect class="p0" x="1.5" y="2.5" width="13" height="11" rx="1.5" stroke="currentColor"/><path class="p1" d="M6 2.5v11M9.2 6.2 7.4 8l1.8 1.8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" pathLength="100"/></g>',duration:650,viewBox:"0 0 16 16",filled:!1,strokeWidth:1.8,note:"hover：框体固定，收起箭头向左短移一次。"},review:Mh,form:ph,users:gh,"bell-settings":{body:'<g class="bell-body"><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z"/></g><path d="M10 20a2 2 0 0 0 4 0"/><path class="bell-adjust" d="M10 8h4M12 6v4"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"通知设置，钟身固定，调节标记转动一次"},integration:fh,image:hh,circle:mh,skip:yh,"server-unavailable":{body:'<rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01M7 17.5h.01M3 3l18 18"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"沙箱或服务暂不可用"},"workflow-empty":{body:'<rect x="3" y="8" width="6" height="8" rx="2"/><rect x="15" y="8" width="6" height="8" rx="2"/><path d="M9 12h6M12 9v6"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"尚未创建工作流"}},_i=Nh,Jr=Object.keys(_i),vh=Jr.length;function xh(e){return Object.hasOwn(_i,e)?_i[e]:_i.dot}const jh=new Set(["check","check-draw","spinner","arc-spinner","breath-dot","bubble-idle","user-hold","arrow-flow","run-live","history-back","play-continue","quiet-dot","warn-pulse","chat-stop","stop","pending-chat","pending-review","pending-approval","alert","ci","dot","clock","metric-running","queue","confirmation-check","inbox-boot","inbox-reply","info","warning","circle","skip","server-unavailable","workflow-empty","gate","priority-bolt","priority-low","priority-medium","priority-high"]),qr={copy:"Copy",trash:"Delete",folder:"Folder",terminal:"Terminal","stage-terminal":"Terminal workspace",workflow:"Workflow",check:"Check","check-draw":"Draw check",bell:"Notifications",settings:"Settings",refresh:"Refresh",spinner:"Loading","arc-spinner":"Arc spinner","breath-dot":"Breathing dot","bubble-idle":"Thinking bubble","user-hold":"Waiting for input","arrow-flow":"Flow transition","run-live":"Running","history-back":"History back","play-continue":"Continue","quiet-dot":"Idle","warn-pulse":"Warning pulse","chat-send":"Send message","chat-stop":"Stop response",stop:"Stop",send:"Send",play:"Play",runs:"Run history",chat:"Chat",brain:"Thinking",robot:"Agent",user:"User","stage-ide":"Code editor","stage-browser":"Browser","stage-log":"Logs","stage-resources":"Resources",dashboard:"All components","home-start":"Start creating","new-request":"New task","pending-chat":"Awaiting reply","pending-review":"Awaiting review","pending-approval":"Awaiting approval","more-horizontal":"More actions",logout:"Log out",chart:"Chart",board:"Board",gate:"Approval gate",lock:"Lock",key:"Key",server:"Server",artifact:"Artifact",skills:"Skills",connector:"Connector",trigger:"Trigger",search:"Search",filter:"Filter",plus:"Add",save:"Save",more:"More",close:"Close","chat-artifacts":"Conversation artifacts",alert:"Alert","chevron-down":"Expand down","chevron-left":"Collapse left","chevron-right":"Expand right","arrow-left":"Arrow left","arrow-right":"Arrow right","arrow-up":"Arrow up","chevrons-down":"Collapse down",swap:"Switch",download:"Download",sparkles:"Sparkles",branch:"Branch",ci:"Continuous integration",dot:"Dot",edit:"Edit",eye:"Visible","eye-off":"Hidden",doc:"Document",clock:"Clock",input:"Input",output:"Output",flask:"Experiment",sun:"Light mode",moon:"Dark mode",expand:"Expand",flag:"Flag",history:"History",variable:"Variable",leave:"Leave",git:"Version control",paperclip:"Attachment",monitor:"Desktop",mobile:"Mobile",menu:"Menu","panel-left":"Sidebar",globe:"Web",crosshair:"Target",tag:"Tag",pin:"Pin",star:"Star","star-filled":"Starred",help:"Help",token:"Usage",calendar:"Calendar","metric-running":"Running metric",queue:"Queue",undo:"Undo",redo:"Redo","zoom-out":"Zoom out",layout:"Layout",minimap:"Minimap","priority-bolt":"Urgent priority","priority-low":"Low priority","priority-medium":"Medium priority","priority-high":"High priority","sort-ascending":"Sort ascending","sort-descending":"Sort descending","preview-expand":"Expand preview",grip:"Drag handle","confirmation-check":"Confirmed","image-off":"Image unavailable","inbox-boot":"Starting","inbox-reply":"New reply",qq:"QQ",info:"Information",warning:"Warning","preview-target":"Preview target",layers:"Layers","preview-chat":"Chat preview","drawer-collapse":"Collapse drawer",review:"Review",form:"Form",users:"Team","bell-settings":"Notification settings",integration:"Integration",image:"Image",circle:"Circle outline",skip:"Skip","server-unavailable":"Server unavailable","workflow-empty":"Empty workflow"};function La(e){return qr[e]||"Icon"}const Lh=Jr.map(e=>({name:e,label:qr[e],category:jh.has(e)?"status":"interface",animated:e!=="qq"}));function bh(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function Dh(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}async function Xr(e){if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(e);return}const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();const n=document.execCommand("copy");if(t.remove(),!n)throw new Error("Copy is unavailable")}const ss=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches,_o=new WeakMap,as={beforeMount(e){e.dataset.revealed=ss()?"true":"false"},mounted(e){if(ss()||!("IntersectionObserver"in window)){e.dataset.revealed="true";return}const t=new IntersectionObserver(n=>{n.some(i=>i.isIntersecting)&&(e.dataset.revealed="true",t.disconnect())},{threshold:.06,rootMargin:"0px 0px 45px 0px"});t.observe(e),_o.set(e,t)},beforeUnmount(e){var t;(t=_o.get(e))==null||t.disconnect(),_o.delete(e)}};function Ih(e){const t=e,{width:n,height:i}=t.getBoundingClientRect();t.style.width=`${n}px`,t.style.height=`${i}px`,t.style.left=`${t.offsetLeft}px`,t.style.top=`${t.offsetTop}px`,t.inert=!0}const Th=["data-icon","data-icon-motion","width","height","viewBox","fill","stroke","stroke-width","innerHTML"],wh='[data-icon-motion-host], button, a[href], summary, [role="button"], [role="tab"], [tabindex]:not([tabindex="-1"])',Oe=Fe({__name:"AnimatedIcon",props:{name:{},size:{default:20},motionKey:{},busy:{type:Boolean,default:!1},interactive:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},setup(e,{expose:t}){const n=e,i=G(null),o=Te(()=>xh(n.name)),s=G("idle"),r=G(!1);let a=null,c,d,u=!1,h=0,L=!1;const j=()=>{var w;return n.disabled||!!((w=i.value)!=null&&w.closest('[disabled], [aria-disabled="true"], [inert]'))};function C(){h++,d&&clearTimeout(d),d=void 0,s.value=n.busy&&!r.value&&!j()?"busy":"idle"}async function O(){var Y;if(!u||r.value||j()||n.busy)return;d&&clearTimeout(d);const w=++h;s.value="idle",await ke(),!(!u||w!==h||r.value||j()||n.busy)&&((Y=i.value)==null||Y.getBoundingClientRect(),s.value="once",d=setTimeout(()=>{w===h&&C()},o.value.duration+360))}function H(w){w.pointerType!=="touch"&&(L=!0,n.interactive&&O())}function ee(){L=!1}function $(w){!n.interactive||L||w.target instanceof Element&&w.target.matches(":focus-visible")&&O()}function q(){r.value=(c==null?void 0:c.matches)??!1,C()}return kt(()=>{var w;u=!0,c=window.matchMedia("(prefers-reduced-motion: reduce)"),r.value=c.matches,c.addEventListener("change",q),a=((w=i.value)==null?void 0:w.closest(wh))||i.value,a==null||a.addEventListener("pointerenter",H),a==null||a.addEventListener("pointerleave",ee),a==null||a.addEventListener("focusin",$),C()}),Ie(()=>[n.name,n.busy,n.disabled],C),Ie(()=>n.motionKey,(w,Y)=>{w!==Y&&w!==void 0&&O()}),Qt(()=>{u=!1,C(),a==null||a.removeEventListener("pointerenter",H),a==null||a.removeEventListener("pointerleave",ee),a==null||a.removeEventListener("focusin",$),c==null||c.removeEventListener("change",q)}),t({play:O,reset:C,element:i}),(w,Y)=>(y(),k("svg",{ref_key:"element",ref:i,class:"agent-icon","aria-hidden":"true",focusable:"false","data-icon":e.name,"data-icon-motion":s.value,width:e.size,height:e.size,viewBox:o.value.viewBox,fill:o.value.filled?"currentColor":"none",stroke:o.value.strokeWidth?"currentColor":"none","stroke-width":o.value.strokeWidth||void 0,"stroke-linecap":"round","stroke-linejoin":"round",innerHTML:o.value.body},null,8,Th))}}),at=22e3,el="cubic-bezier(.22,.75,.16,1)",zh=e=>e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),ze=(e,t)=>({...t,offset:e/at,easing:el});function Ah(e,t){const n=e.parentElement,i=new Map;let o=!1,s=!1,r=at,a=window.innerWidth<=700,c=null,d,u;function h(g){g.original.forEach(({value:W,priority:Z},Q)=>{W?g.node.style.setProperty(Q,W,Z):g.node.style.removeProperty(Q)})}function L(g){i.forEach(W=>{var Z;(Z=W.animation)==null||Z.cancel(),W.animation=void 0,g&&h(W)})}function j(g,W,Z){var ae;const Q=i.get(g);if((Q==null?void 0:Q.node)===W||(Q&&((ae=Q.animation)==null||ae.cancel(),h(Q),i.delete(g)),!W))return;const J=[...new Set(Z.flatMap(re=>Object.keys(re).filter(pe=>!["offset","easing","composite"].includes(pe)).map(zh)))],ue=new Map(J.map(re=>[re,{value:W.style.getPropertyValue(re),priority:W.style.getPropertyPriority(re)}])),fe=W.animate(Z,{duration:at,fill:"both"});fe.pause(),fe.currentTime=r,i.set(g,{node:W,properties:J,original:ue,animation:fe})}function C(g){let W=0,Z=0;for(let Q=g;Q&&Q!==e;Q=Q.offsetParent)W+=Q.offsetLeft,Z+=Q.offsetTop;for(let Q=g.parentElement;Q&&Q!==e;Q=Q.parentElement)W-=Q.scrollLeft,Z-=Q.scrollTop;return{x:W,y:Z,width:g.offsetWidth,height:g.offsetHeight}}function O(){const g=e.offsetWidth,W=e.offsetHeight,Z=n.clientWidth,Q=n.clientHeight,J=d??{x:g-264,y:60,width:244,height:47},ue=Math.min(a?1.45:2.15,(Z-(a?36:100))/J.width,(Q-100)/J.height),fe=new DOMMatrix().translate(Z/2-(Z-g)/2-ue*(J.x+J.width/2),Q*.48-(Q-W)/2-ue*(J.y+J.height/2)).scale(ue).toString(),ae="none";return[ze(0,{transform:fe,opacity:0}),ze(300,{transform:fe,opacity:1}),ze(1350,{transform:fe,opacity:1}),ze(2400,{transform:ae,opacity:1}),ze(7400,{transform:ae,opacity:1}),ze(8500,{transform:"none",opacity:1}),ze(at,{transform:"none",opacity:1})]}function H(g){return[ze(0,{opacity:0,filter:"blur(0px)"}),ze(1500,{opacity:0,filter:"blur(0px)"}),ze(2400,{opacity:1,filter:"blur(0px)"}),ze(4200,{opacity:1,filter:"blur(0px)"}),ze(5300,{opacity:g,filter:"blur(3px)"}),ze(7400,{opacity:g,filter:"blur(3px)"}),ze(8500,{opacity:1,filter:"blur(0px)"}),ze(at,{opacity:1,filter:"blur(0px)"})]}function ee(){var te,z,R;const g=e.querySelector('[data-message-id$="-sample-user"] .user-bubble');if(g&&r<1350){const ne=C(g);(g!==c||!d||ne.x!==d.x||ne.y!==d.y||ne.width!==d.width||ne.height!==d.height)&&(c=g,d=ne,u=O(),(R=(z=(te=i.get("camera"))==null?void 0:te.animation)==null?void 0:z.effect)==null||R.setKeyframes(u))}u??(u=O()),j("camera",e,u);const W=e.querySelector(".home-chat-window");if(W&&!i.has("window")){const ne=getComputedStyle(W);j("window",W,[ze(0,{borderColor:"transparent",boxShadow:"0 0 0 0 transparent"}),ze(1450,{borderColor:"transparent",boxShadow:"0 0 0 0 transparent"}),ze(2400,{borderColor:ne.borderTopColor,boxShadow:ne.boxShadow}),ze(11900,{borderColor:ne.borderTopColor,boxShadow:ne.boxShadow}),ze(13100,{borderColor:"transparent",boxShadow:"0 0 0 0 transparent"}),ze(at,{borderColor:"transparent",boxShadow:"0 0 0 0 transparent"})])}j("bar",e.querySelector(".home-chat-window-bar"),H(.35)),j("composer",e.querySelector(".conversation-bottom"),H(.27));const Z=e.querySelector('[data-message-id$="-sample-user"]');j("user",Z,[ze(0,{opacity:1,filter:"blur(0px)"}),ze(4200,{opacity:1,filter:"blur(0px)"}),ze(5300,{opacity:.32,filter:"blur(2px)"}),ze(7400,{opacity:.32,filter:"blur(2px)"}),ze(8500,{opacity:1,filter:"blur(0px)"}),ze(at,{opacity:1,filter:"blur(0px)"})]),j("question-text",(g==null?void 0:g.querySelector(".conversation-prose"))??null,[ze(0,{clipPath:"inset(0 100% 0 0)"}),ze(180,{clipPath:"inset(0 100% 0 0)"}),ze(850,{clipPath:"inset(0 0% 0 0)"}),ze(at,{clipPath:"inset(0 0% 0 0)"})]);const Q=e.querySelector('[data-message-id$="-sample-assistant"]');j("answer",Q,[ze(0,{opacity:1,filter:"blur(0px)"}),ze(at,{opacity:1,filter:"blur(0px)"})]);const J=n.clientWidth,ue=window.innerWidth<=900,fe=Math.min(760,J-(a?16:0)),ae=ue?Math.min(760,J-16):440,re={width:`${fe}px`,marginRight:`${(J-fe)/2}px`,opacity:1,visibility:"visible"},pe={width:`${ae}px`,marginRight:`${ue?(J-ae)/2:J-ae}px`,opacity:ue?0:1,visibility:ue?"hidden":"visible"};j("workspace-window",W,[ze(0,re),ze(11900,re),ze(13100,pe),ze(at,pe)]),j("workspace-preview",e.querySelector(".home-workspace-preview"),[ze(0,{opacity:0,transform:"translateX(32px)",visibility:"hidden"}),ze(11899,{opacity:0,transform:"translateX(32px)",visibility:"hidden"}),ze(11900,{opacity:0,transform:"translateX(32px)",visibility:"visible"}),ze(13100,{opacity:1,transform:"none",visibility:"visible"}),ze(at,{opacity:1,transform:"none",visibility:"visible"})]),i.forEach((ne,le)=>{var ve;ne.node.isConnected||((ve=ne.animation)==null||ve.cancel(),h(ne),i.delete(le))})}function $(g){if(r=Math.min(at,Math.max(0,g)),!o){if(t()){D();return}s&&(L(!0),i.clear(),s=!1),e.dataset.cameraScene=r<1350?"question-closeup":r<2400?"reveal":r<4200?"process":r<5600?"focus":r<7400?"answer":r<8500?"return":r<11900?"conversation":r<13100?"open-preview":"preview",ee(),i.forEach(W=>{W.animation&&(W.animation.currentTime=r)}),e.dataset.cameraTime=`${Math.round(r)}`,e.dataset.cameraState=r===at?"complete":"tracking"}}function q(){return[...i.values()].filter(g=>g.node.isConnected).map(g=>{const W=getComputedStyle(g.node);return{layer:g,styles:Object.fromEntries(g.properties.map(Z=>[Z,W.getPropertyValue(Z)]))}})}function w(){const g=q();L(!1),g.forEach(({layer:W,styles:Z})=>Object.entries(Z).forEach(([Q,J])=>W.node.style.setProperty(Q,J))),o=!0,s=!1,e.dataset.cameraState="held"}function Y(){if(!o)return;const g=q();if(L(!0),i.forEach(Z=>Z.node.getAnimations().forEach(Q=>{if(Q instanceof CSSTransition)try{Q.finish()}catch{Q.cancel()}})),o=!1,t()){D();return}s=!0,e.dataset.cameraState="returning";let W=g.length;if(!W){D();return}g.forEach(({layer:Z,styles:Q})=>{const J=getComputedStyle(Z.node),ue=Object.fromEntries(Z.properties.map(fe=>[fe,J.getPropertyValue(fe)]));Z.animation=Z.node.animate([Q,ue],{duration:380,easing:el}),Z.animation.onfinish=()=>{--W===0&&(i.clear(),s=!1,e.dataset.cameraState="idle")}})}function D(){L(!0),i.clear(),o=!1,s=!1,u=void 0,c=null,d=void 0,e.dataset.cameraTime=`${Math.round(r)}`,e.dataset.cameraState="idle"}function N(){D(),$(0)}function S(){const g=r,W=o||s;D(),a=window.innerWidth<=700,W||$(g)}return{seek:$,hold:w,release:Y,reset:D,replay:N,resize:S,destroy:D}}const kh=["data-demo-state"],Sh={key:0,class:"chat-demo-controls"},Eh={class:"chat-demo-status","aria-live":"polite"},ba="Check the typography on the homepage.",Wo="Check the hierarchy, type sizes, and contrast.",Da=`Use three levels: headings, body text, and supporting details.

Keep the body readable, then refine the space between headings and paragraphs.`,Ch=Fe({__name:"ChatConversationDemo",props:{controls:{type:Boolean,default:!0},workspace:{type:Boolean,default:!1}},emits:["state-change","timeline","open-preview","preview-step"],setup(e,{expose:t,emit:n}){const i=e,o=n,s=G(),r=G(),a=G("ready"),c=G(!1),d=G(""),u=G("Claude Sonnet 4.6"),h=["Claude Sonnet 4.6","GPT-5.4","Gemini 3.1 Pro"],L=`chat-demo-${Qn().replace(/:/g,"")}`,j=`${L}-sample-user`,C=`${L}-sample-assistant`,O=`${L}-sample-followup`,H=`${L}-sample-build-user`,ee=`${L}-sample-build`,$=`${L}-sample-inspect-user`,q=`${L}-sample-inspect`,w=()=>i.workspace?at:9e3;function Y(oe=Da){return[{kind:"thought",id:"thought",text:Wo},{kind:"tool",id:"read-page",title:"Read page styles",status:"success",input:"src/styles.css",output:"Read the heading, body, and supporting text styles."},{kind:"message",id:"response",text:oe}]}function D(){const oe=[{id:j,role:"user",text:ba},{id:C,role:"assistant",parts:Y()},{id:O,role:"user",text:"Keep body text at 15px and supporting text at 12px or above."}];return i.workspace?[...oe,{id:H,role:"user",text:"Build a task panel with filters and collapsible groups."},{id:ee,role:"assistant",parts:[{kind:"thought",id:"compose",text:"Combine Sliding Tabs and Grouped Task List, keeping their interactions."},{kind:"tool",id:"build-demo",title:"Prepare interactive preview",status:"success",output:"demo.vue"},{kind:"message",id:"demo-ready",text:"The task panel is ready to explore."}],actions:[{id:"open-task-demo",label:"Open preview",kind:"preview"}]},{id:$,role:"user",text:"Show running tasks, then expand the history."},{id:q,role:"assistant",text:"Filter tasks, expand groups, or select a task to update its status."}]:oe}const N=G(D()),S=G([]),g=G(0),W=Te(()=>[...S.value.slice(0,g.value),...N.value,...S.value.slice(g.value)]),Z=Te(()=>({ready:"",playing:"Playing",paused:"Paused",complete:"Demo complete",stopped:"Stopped"})[a.value]),Q=new Set,J=new Set;let ue,fe,ae,re=!1,pe=!1,te=!1,z=!1,R=0,ne=0,le=!1,ve=0,Le=0,we=0,Ye=0,Xe;Ie(a,oe=>o("state-change",oe),{immediate:!0,flush:"sync"});function Ze(){var oe,ye;return!z&&!document.hidden&&!!((oe=s.value)!=null&&oe.isConnected)&&!((ye=s.value)!=null&&ye.closest('[inert], [aria-hidden="true"]'))}function ct(){x(),R++,Q.forEach(oe=>clearTimeout(oe.timer)),Q.clear()}function M(){return Math.min(w(),Ye+(Xe===void 0?0:performance.now()-Xe))}function x(){Ye=M(),Xe=void 0,cancelAnimationFrame(we),we=0,o("timeline",Ye)}function _(oe=!1){cancelAnimationFrame(we),oe&&(Ye=0),Xe=performance.now(),o("timeline",Ye);const ye=()=>{if(z||a.value!=="playing"){we=0;return}o("timeline",M()),we=requestAnimationFrame(ye)};we=requestAnimationFrame(ye)}function V(){cancelAnimationFrame(ve),cancelAnimationFrame(Le),ve=0,Le=0}function I(oe){N.value=N.value.map(ye=>{var xt;return ye.streaming?{...ye,streaming:!1,interrupted:oe,parts:oe?(xt=ye.parts)==null?void 0:xt.map(nt=>nt.kind==="tool"&&(nt.status==="running"||nt.status==="pending")?{...nt,status:void 0,summary:nt.summary??"Stopped"}:nt):ye.parts}:ye})}function b(){pe=!0,te=!0,ct(),V(),le=!1,I(!0),(a.value==="playing"||a.value==="paused"||a.value==="ready")&&(a.value="stopped")}function v(){pe=!0,ct(),V(),le=!1,N.value=D(),Ye=w(),o("timeline",Ye),a.value="complete"}function p(oe){oe.dueAt=performance.now()+oe.remaining,oe.timer=setTimeout(()=>{if(Q.delete(oe),!(oe.version!==R||z||a.value!=="playing")){if(!Ze()||!re||ae!=null&&ae.matches){ae!=null&&ae.matches?v():b();return}oe.callback()}},oe.remaining)}function A(oe,ye,xt){const nt={callback:oe,remaining:ye,dueAt:0,version:xt};Q.add(nt),p(nt)}function P(){if(a.value!=="playing")return;x();const oe=performance.now();Q.forEach(ye=>{clearTimeout(ye.timer),ye.remaining=Math.max(0,ye.dueAt-oe),ye.timer=void 0}),a.value="paused"}function ce(){a.value!=="paused"||!Ze()||!re||ae!=null&&ae.matches||(a.value="playing",_(),Q.forEach(p))}function U(oe){N.value=N.value.map(ye=>ye.id===C?{...ye,parts:oe}:ye)}function m(){if(pe=!0,!Ze())return;if(ct(),V(),le=!1,c.value=!0,te=!1,g.value=S.value.length,ae!=null&&ae.matches){v();return}const oe=R;a.value="playing",_(!0),N.value=[],ke(()=>{var ft;!z&&oe===R&&((ft=r.value)==null||ft.scrollToBottom())}),A(()=>{N.value=[{id:j,role:"user",text:ba}]},120,oe),A(()=>{N.value=[...N.value,{id:C,role:"assistant",streaming:!0,parts:[]}]},1600,oe),A(()=>{U([{kind:"thought",id:"thought",text:Wo}])},2200,oe),A(()=>{U([{kind:"thought",id:"thought",text:Wo},{kind:"tool",id:"read-page",title:"Read page styles",status:"running",input:"src/styles.css"}])},3400,oe),A(()=>{U(Y(""))},4800,oe);const ye=Array.from(Da),xt=4,nt=Math.ceil(ye.length/xt);for(let ft=1;ft<=nt;ft++)A(()=>{U(Y(ye.slice(0,ft*xt).join("")))},5600+ft*(700/nt),oe);if(A(()=>{I(!1)},6600,oe),i.workspace){const ft=Ut=>{N.value=[...N.value,Ut]};A(()=>{ft(D()[2])},7800,oe),A(()=>{ft(D()[3])},8400,oe),A(()=>{ft({id:ee,role:"assistant",streaming:!0,parts:[{kind:"thought",id:"compose",text:"Combine Sliding Tabs and Grouped Task List, keeping their interactions."},{kind:"tool",id:"build-demo",title:"Prepare interactive preview",status:"running"}]})},9e3,oe),A(()=>{N.value=N.value.map(Ut=>Ut.id===ee?D()[4]:Ut)},11e3,oe),A(()=>{o("preview-step","all"),o("open-preview")},11900,oe),A(()=>{ft(D()[5])},13600,oe),A(()=>{ft({id:q,role:"assistant",streaming:!0,text:"Start with the running tasks."})},14200,oe),A(()=>{o("preview-step","running")},14800,oe),A(()=>{o("preview-step","all")},16e3,oe),A(()=>{o("preview-step","collapse-history")},16900,oe),A(()=>{o("preview-step","expand-history")},17900,oe),A(()=>{o("preview-step","waiting")},19e3,oe),A(()=>{N.value=N.value.map(Ut=>Ut.id===q?D()[6]:Ut)},19600,oe)}A(()=>{i.workspace||(N.value=[...N.value,D()[2]]),x(),Ye=w(),o("timeline",Ye),a.value="complete"},w(),oe)}function K(){te=!0,pe=!0,(a.value==="playing"||a.value==="paused"||le)&&b()}function se(){te=!0,pe=!0,!(a.value!=="playing"&&a.value!=="paused")&&(ct(),le=!0,a.value="stopped")}function je(){!le||z||(le=!1,V(),I(!0))}function Ae(){!le||ve||Le||(ve=requestAnimationFrame(()=>{ve=0,Le=requestAnimationFrame(()=>{Le=0,je()})}))}function Ce(oe){return oe.target instanceof Element?oe.target:null}function He(oe){const ye=Ce(oe);ye&&(ye.closest(".conversation-bottom")&&!ye.closest(".stop-action")?K():se())}function et(){le&&ke(je)}function Ve(oe){const ye=Ce(oe);ye!=null&&ye.closest(".stop-action")||(ye!=null&&ye.closest(".conversation-bottom")?K():["ArrowUp","ArrowDown","PageUp","PageDown","Home","End"," ","Enter"].includes(oe.key)&&(se(),[" ","Enter"].includes(oe.key)||Ae()))}function tt(oe){const ye=Ce(oe);ye!=null&&ye.closest(".conversation-bottom")&&!ye.closest(".stop-action")&&K()}function St(){se(),Ae()}function it(oe){K();const ye=oe.files.map(xt=>{const nt=URL.createObjectURL(xt);return J.add(nt),{id:`${L}-attachment-${++ne}`,name:xt.name,mimeType:xt.type,url:nt}});S.value=[...S.value,{id:`${L}-user-${++ne}`,role:"user",text:oe.text,attachments:ye}]}function gt(oe){K(),d.value=oe}function Xt(oe){K(),u.value=oe}function Un(oe){oe.actionId==="open-task-demo"&&(K(),o("open-preview"))}function Li(){document.hidden&&a.value==="playing"&&b()}function bi(){ae!=null&&ae.matches&&(a.value==="playing"||a.value==="paused"||a.value==="ready"&&!te)&&v()}return t({play:m,stop:b,pause:P,resume:ce}),kt(()=>{ae=matchMedia("(prefers-reduced-motion: reduce)"),ae.addEventListener("change",bi),document.addEventListener("visibilitychange",Li),document.addEventListener("pointerup",Ae),document.addEventListener("pointercancel",Ae),document.addEventListener("keyup",Ae),ae.matches&&v(),s.value&&"IntersectionObserver"in window?(ue=new IntersectionObserver(oe=>{for(const ye of oe)re=ye.isIntersecting&&ye.intersectionRatio>=.35,!re&&a.value==="playing"?b():re&&!pe&&!te&&!(ae!=null&&ae.matches)&&Ze()&&m()},{threshold:[0,.35]}),ue.observe(s.value.closest(".home-chat-viewport")??s.value)):re=!0,fe=new MutationObserver(()=>{a.value==="playing"&&!Ze()&&b()});for(let oe=s.value??null;oe;oe=oe.parentElement)fe.observe(oe,{attributes:!0,attributeFilter:["inert","aria-hidden","style"]})}),Qt(()=>{z=!0,ct(),V(),ue==null||ue.disconnect(),fe==null||fe.disconnect(),ae==null||ae.removeEventListener("change",bi),document.removeEventListener("visibilitychange",Li),document.removeEventListener("pointerup",Ae),document.removeEventListener("pointercancel",Ae),document.removeEventListener("keyup",Ae),J.forEach(oe=>URL.revokeObjectURL(oe)),J.clear()}),(oe,ye)=>(y(),k("div",{ref_key:"root",ref:s,class:"chat-conversation-demo","data-demo-state":a.value},[l("div",{class:"chat-demo-core",onPointerdownCapture:He,onFocusinCapture:tt,onKeydownCapture:Ve,onClick:et,onInputCapture:K,onChangeCapture:K,onPasteCapture:K,onCompositionstartCapture:K,onWheelPassive:St,onTouchmovePassive:St},[B(Zr,{ref_key:"conversation",ref:r,messages:W.value,"model-value":d.value,model:u.value,models:h,"onUpdate:modelValue":gt,"onUpdate:model":Xt,onSend:it,onStop:b,onMessageAction:Un},null,8,["messages","model-value","model"])],32),e.controls?(y(),k("div",Sh,[l("button",{type:"button",class:"chat-demo-play",onClick:m},[B(Oe,{name:c.value?"refresh":"play",size:14},null,8,["name"]),l("span",null,ie(c.value?"Replay":"Play demo"),1)]),l("span",Eh,ie(Z.value),1)])):ge("",!0)],8,kh))}}),tl=Dt(Ch,[["__scopeId","data-v-efed5366"]]),Oh=["inert"],Qh={class:"preview-titlebar"},Uh={class:"preview-filename"},Yh={class:"preview-filter"},Ph=["disabled"],_h={key:1,class:"preview-selection"},Wh={class:"selection-name"},Rh={class:"selection-status"},Bh={key:2,class:"preview-empty"},$h=Fe({__name:"WorkspaceDemoPreview",props:{active:{type:Boolean,default:!0}},emits:["close"],setup(e,{expose:t,emit:n}){const i=n,o=G([{id:"running",label:"In progress",icon:"running",items:[{id:"layout",label:"Review homepage layout",status:"running"},{id:"type",label:"Refine typography",status:"waiting"}]},{id:"auto",label:"Automations",icon:"auto",items:[{id:"mobile",label:"Check mobile spacing",status:"running"},{id:"interaction",label:"Complete interaction states",status:"idle"}]},{id:"history",label:"History",icon:"history",items:[{id:"navigation",label:"Organize navigation",status:"completed"},{id:"reference",label:"Collect references",status:"completed"}]}]),s=G("all"),r=G("layout"),a=G(),c=G();let d;const u=Te(()=>o.value.flatMap(D=>D.items)),h=Te(()=>[{value:"all",label:"All",count:u.value.length},{value:"running",label:"Running",count:u.value.filter(D=>D.status==="running").length},{value:"waiting",label:"Needs input",count:u.value.filter(D=>D.status==="waiting").length},{value:"completed",label:"Completed",count:u.value.filter(D=>D.status==="completed").length}]),L=Te(()=>o.value.map(D=>({...D,items:D.items.filter(N=>s.value==="all"||N.status===s.value)}))),j=Te(()=>u.value.find(D=>D.id===r.value));Ie(L,D=>{var S;const N=D.flatMap(g=>g.items);N.some(g=>g.id===r.value)||(r.value=((S=N[0])==null?void 0:S.id)??"")});const C=G(!1),O=G(""),H=G();let ee=0;async function $(){var D;C.value=!0,await ke(),(D=H.value)==null||D.focus()}function q(){const D=O.value.trim();if(!D)return;const N={id:`custom-${++ee}`,label:D,status:"idle"};o.value.find(S=>S.id==="auto").items.unshift(N),s.value="all",r.value=N.id,O.value="",C.value=!1}function w(D){var W;if(D==="all"||D==="running"||D==="waiting"){s.value=D;return}const N=(W=a.value)==null?void 0:W.$el,S=N==null?void 0:N.querySelector('[data-group-id="history"] > .task-group-heading'),g=D==="expand-history";S&&!S.disabled&&S.getAttribute("aria-expanded")!==String(g)&&S.click()}function Y(D){var Q;if(D<16e3){d=void 0;return}if(D<16200||D>16800)return;const N=c.value,S=(Q=a.value)==null?void 0:Q.$el,g=S==null?void 0:S.querySelector('[data-group-id="history"] > .task-group-heading');if(!(N!=null&&N.clientHeight)||!g)return;if(!d){const J=Math.max(0,N.scrollHeight-N.clientHeight),ue=N.scrollTop+g.getBoundingClientRect().top-N.getBoundingClientRect().top-80;d={start:N.scrollTop,target:Math.max(0,Math.min(J,ue))}}const W=Math.max(0,Math.min(1,(D-16200)/600)),Z=W*W*(3-2*W);N.scrollTop=d.start+(d.target-d.start)*Z}return t({showcaseStep:w,showcaseTick:Y}),(D,N)=>qe((y(),k("section",{class:"workspace-demo-preview",inert:!e.active||void 0,"aria-label":"Task panel preview"},[l("header",Qh,[l("button",{class:"preview-return",type:"button",onClick:N[0]||(N[0]=S=>i("close"))},[B(F(Hr),{size:15,"aria-hidden":"true"}),N[8]||(N[8]=De("Back to chat",-1))]),l("span",Uh,[B(F(pd),{size:15,"aria-hidden":"true"}),N[9]||(N[9]=De("Tasks",-1))]),N[10]||(N[10]=l("span",{class:"preview-label"},"Preview",-1)),l("button",{class:"preview-close",type:"button","aria-label":"Close preview",title:"Close preview",onClick:N[1]||(N[1]=S=>i("close"))},[B(F(Cn),{size:16,"aria-hidden":"true"})])]),N[13]||(N[13]=l("div",{class:"preview-addressbar"},[l("div",{class:"preview-address","aria-label":"Preview page"},[l("span",null,"Demo"),l("span",{class:"address-divider","aria-hidden":"true"},"/"),l("span",null,"Tasks")])],-1)),l("div",{ref_key:"previewContent",ref:c,class:"preview-content"},[l("div",Yh,[B(Is,{modelValue:s.value,"onUpdate:modelValue":N[2]||(N[2]=S=>s.value=S),items:h.value,label:"Filter preview tasks"},null,8,["modelValue","items"])]),C.value?(y(),k("form",{key:0,class:"preview-create",onSubmit:an(q,["prevent"]),onKeydown:N[5]||(N[5]=ai(an(S=>C.value=!1,["stop"]),["esc"]))},[qe(l("input",{ref_key:"nameInput",ref:H,"onUpdate:modelValue":N[3]||(N[3]=S=>O.value=S),"aria-label":"Task name",placeholder:"Task name",maxlength:"80"},null,512),[[Ds,O.value]]),l("button",{type:"submit",disabled:!O.value.trim()},"Add",8,Ph),l("button",{type:"button",class:"cancel-create","aria-label":"Cancel new task",onClick:N[4]||(N[4]=S=>C.value=!1)},[B(F(Cn),{size:15,"aria-hidden":"true"})])],32)):ge("",!0),B(Kr,{ref_key:"taskList",ref:a,modelValue:r.value,"onUpdate:modelValue":N[6]||(N[6]=S=>r.value=S),groups:L.value,onCreate:$},null,8,["modelValue","groups"]),j.value?(y(),k("div",_h,[l("span",Wh,ie(j.value.label),1),l("label",Rh,[N[12]||(N[12]=l("span",null,"Status",-1)),qe(l("select",{"onUpdate:modelValue":N[7]||(N[7]=S=>j.value.status=S),"aria-label":"Task status"},[...N[11]||(N[11]=[l("option",{value:"idle"},"Ready",-1),l("option",{value:"running"},"Running",-1),l("option",{value:"waiting"},"Needs input",-1),l("option",{value:"completed"},"Completed",-1)])],512),[[Fu,j.value.status]])])])):(y(),k("p",Bh,"No tasks"))],512)],8,Oh)),[[Ct,e.active]])}}),Hh=Dt($h,[["__scopeId","data-v-f8822a91"]]);function Gh(e,t,n,i){const o=Math.max(0,e),s=Math.max(0,t),r=Math.max(n,o-n),a=Math.max(i,s-i);return Math.hypot(r,a)*2}function nl(e=window.matchMedia){return e("(hover: hover) and (pointer: fine)").matches}const Vh=350,Ia="hover-ink",il="hover-ink-host",vo="is-hover-ink",xo="is-leave-ink",On="is-ink-suppressed",jt=new WeakMap;function Fh(e){let t=e.querySelector(`:scope > .${Ia}`);return t||(t=document.createElement("span"),t.className=Ia,t.setAttribute("aria-hidden","true"),e.insertBefore(t,e.firstChild)),t}function Wi(e,t){return!!((t==null?void 0:t.value)===!1||t!=null&&t.value&&typeof t.value=="object"&&"enabled"in t.value&&t.value.enabled===!1||e.disabled||e.hasAttribute("disabled")||e.getAttribute("aria-busy")==="true"||e.getAttribute("aria-disabled")==="true")}function ji(e){const t=jt.get(e);(t==null?void 0:t.collapseTimer)!=null&&(clearTimeout(t.collapseTimer),t.collapseTimer=void 0)}function hi(e){e.classList.add(il),Fh(e);const t=jt.get(e);t&&(e.classList.toggle(vo,t.phase==="hover"),e.classList.toggle(xo,t.phase==="leave"))}function ol(e,t,n){ji(e);const i=e.getBoundingClientRect(),o=t-i.left,s=n-i.top,r=Gh(i.width,i.height,o,s);e.style.setProperty("--ink-x",`${o}px`),e.style.setProperty("--ink-y",`${s}px`),e.style.setProperty("--ink-d",`${r}px`)}function sl(e){ji(e),e.classList.remove(On);const t=jt.get(e);t&&(t.phase="hover"),hi(e)}function al(e){ji(e);const t=jt.get(e);t&&(t.phase="idle"),e.classList.add(On),e.classList.remove(vo,xo),e.style.setProperty("--ink-d","0px")}function rl(e,t){const n=jt.get(e);if(n){if(n.binding=t,Wi(e,t)){n.phase!=="idle"?al(e):e.classList.add(On),hi(e);return}if(e.classList.remove(On),n.phase!=="hover"&&n.pointer&&e.matches(":hover")&&nl()){ol(e,n.pointer.x,n.pointer.y),sl(e);return}hi(e)}}function Ro(e){const t=jt.get(e);t&&(t.phase="leave"),hi(e),ji(e);const n=()=>{(t==null?void 0:t.phase)!=="hover"&&(e.style.setProperty("--ink-d","0px"),t&&(t.collapseTimer=void 0))};t?t.collapseTimer=setTimeout(n,Vh):n()}function Ta(e,t){if(jt.get(e)){rl(e,t);return}const i=a=>{if(!nl()||a.pointerType==="touch")return;const c=jt.get(e);c&&(c.pointer={x:a.clientX,y:a.clientY},!Wi(e,c.binding)&&(ol(e,a.clientX,a.clientY),sl(e)))},o=()=>{const a=jt.get(e);if(a&&(a.pointer=void 0),!(!a||a.phase==="idle")){if(Wi(e,a.binding)){al(e);return}Ro(e)}},s=()=>{Ro(e)},r=()=>{document.visibilityState==="hidden"&&Ro(e)};e.addEventListener("pointerenter",i),e.addEventListener("pointerleave",o),e.addEventListener("pointercancel",o),window.addEventListener("blur",s),document.addEventListener("visibilitychange",r),jt.set(e,{binding:t,phase:"idle",cleanup:()=>{e.removeEventListener("pointerenter",i),e.removeEventListener("pointerleave",o),e.removeEventListener("pointercancel",o),window.removeEventListener("blur",s),document.removeEventListener("visibilitychange",r),ji(e),e.classList.remove(vo,On),e.classList.add(xo),e.style.setProperty("--ink-d","0px"),jt.delete(e)}}),Wi(e,t)&&e.classList.add(On),hi(e)}const wa={mounted(e,t){Ta(e,t)},updated(e,t){const n=e;jt.get(n)?rl(n,t):Ta(n,t)},unmounted(e){var n;const t=e;(n=jt.get(t))==null||n.cleanup(),t.classList.remove(il,vo,xo,On)}},Zh={class:"home-page"},Kh={class:"home-hero"},Jh={class:"home-hero-actions"},qh={href:"https://github.com/cocofhu/harness-ui",target:"_blank",rel:"noopener noreferrer",class:"home-button home-primary"},Xh={href:"#/components",class:"home-button home-secondary"},em={class:"hero-smallprint"},tm={href:"#/components"},nm={href:"#/icons"},im={href:"https://github.com/cocofhu/harness-ui",target:"_blank",rel:"noopener noreferrer",class:"hero-github"},om={class:"home-chat-section","aria-label":"Chat conversation preview"},sm={class:"home-demo-intro"},am={href:"#/components",class:"home-text-link"},rm=["data-playback","data-shot"],lm={class:"home-chat-heading"},cm={href:"#/components/chat-conversation"},um={class:"home-chat-viewport"},dm=["inert","aria-hidden","onKeydown"],Mm={class:"home-chat-window"},pm={class:"home-chat-controls"},gm=["aria-label","title"],fm={viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor","aria-hidden":"true"},hm={key:0,d:"M7 5h3v14H7zm7 0h3v14h-3z"},mm={key:1,d:"m8 5 11 7-11 7Z"},ym={key:2,d:"M18.7 7A8 8 0 1 0 20 15h-2.1a6 6 0 1 1-.6-6H14v2h7V4h-2v3Z"},Nm={class:"home-icon-section"},vm={class:"section-editorial"},xm={href:"#/icons",class:"home-text-link"},jm={class:"home-icon-board"},Lm=["aria-label","onClick"],bm={class:"home-craft-section"},Dm={class:"craft-code-heading"},Im=["aria-selected","tabindex"],Tm=["aria-selected","tabindex"],wm=["aria-label"],zm={class:"craft-panel-stage"},Am=["inert","aria-hidden"],km=["inert","aria-hidden"],Sm={class:"section-editorial"},Em={href:"https://github.com/cocofhu/harness-ui",target:"_blank",rel:"noopener noreferrer",class:"home-text-link"},Cm=`<script setup lang="ts">
import SlidingTabs from './ui/SlidingTabs.vue'
<\/script>

<template>
  <SlidingTabs />
</template>`,Om=Fe({__name:"HomePage",emits:["notify"],setup(e,{emit:t}){const n=t,i=G(),o=G(),s=G(!1),r=G(!1),a=G("ready"),c=G(),d=G(),u=G(3),h=G(""),L=G({}),j=G("preview"),C=G(),O=G(!1),H=G(0),ee=G(!1),$=["folder","copy","robot","workflow","settings","search","terminal","sun","refresh"],q=Lh.filter(v=>v.animated).length;let w=!1,Y,D,N,S,g,W=at,Z=!1,Q=0,J=0,ue=0,fe;const ae=new Set;function re(){var v;(v=c.value)==null||v.getAnimations({subtree:!0}).forEach(p=>{p.playState==="running"&&(p.pause(),ae.add(p))})}function pe(v=!1,p=!0){var A;!v&&p&&((A=c.value)==null||A.getAnimations({subtree:!0}).forEach(P=>{P.playState==="running"&&ae.add(P)})),ae.forEach(P=>{if(P.playState==="paused"||!v&&P.playState==="running")if(v)P.play();else try{P.finish()}catch{P.cancel()}}),ae.clear()}function te(v){const p=a.value;a.value=v,v==="playing"&&p!=="paused"?(pe(),s.value=!1,Z=!1,g==null||g.replay()):v==="playing"?pe(!0):v==="paused"?re():v==="stopped"?Z?(re(),g==null||g.hold()):(pe(),g==null||g.reset()):v==="complete"&&(g==null||g.seek(at),window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(r.value=!0,s.value=!0))}function z(){var v;cancelAnimationFrame(ue),fe=((v=c.value)==null?void 0:v.querySelector('[data-message-action="open-task-demo"]'))??(document.activeElement instanceof HTMLElement?document.activeElement:void 0),r.value=!0,s.value=!0}async function R(){var A;cancelAnimationFrame(ue),(A=i.value)==null||A.stop(),s.value=!1,we(),await ke();let v=0;const p=()=>{if(ue=0,w||s.value||document.hidden||!(fe!=null&&fe.isConnected))return;if(++v<3||getComputedStyle(fe).visibility!=="visible"){v<10&&(ue=requestAnimationFrame(p));return}const P=document.activeElement;P instanceof HTMLElement&&P!==document.body&&!P.closest(".home-workspace-preview")||fe.focus({preventScroll:!0})};ue=requestAnimationFrame(p)}function ne(v){r.value=!0,ke(()=>{var p;return(p=o.value)==null?void 0:p.showcaseStep(v)})}function le(v){var ce,U;if(w)return;W=v,g==null||g.seek(v),a.value==="playing"&&!Z&&((ce=o.value)==null||ce.showcaseTick(v));const p=[0,1900,5500,11900,19600,at],A=v<1900?0:v<5500?1:v<11900?2:v<19600?3:4;u.value=A;const P=Math.min(1,Math.max(0,(v-p[A])/(p[A+1]-p[A])));(U=d.value)==null||U.querySelectorAll("i").forEach((m,K)=>{m.style.transform=`scaleX(${K<A?1:K===A?P:0})`})}function ve(){cancelAnimationFrame(Q),cancelAnimationFrame(J)}function Le(v){var A;const p=v.target instanceof Element?v.target:null;if(p){if(p.closest(".home-workspace-preview")){if(!v.isTrusted)return;ve(),Z=!0,g==null||g.hold(),(A=i.value)==null||A.stop(),v.type==="focusin"&&we();return}p.closest(".chat-demo-core")&&(p.closest(".stop-action")&&(v.type==="focusin"||v instanceof KeyboardEvent&&![" ","Enter"].includes(v.key))||v instanceof KeyboardEvent&&!p.closest(".conversation-bottom")&&!["ArrowUp","ArrowDown","PageUp","PageDown","Home","End"," ","Enter"].includes(v.key)||v.type==="focusin"&&!p.closest(".conversation-bottom")||(ve(),Z=!0,g==null||g.hold(),(v.type==="focusin"||v instanceof KeyboardEvent&&v.key==="Tab")&&we()))}}function we(){Z&&(ve(),Q=requestAnimationFrame(()=>{J=requestAnimationFrame(()=>{w||!Z||a.value==="playing"||a.value==="paused"||(Z=!1,pe(!1,!1),g==null||g.release())})}))}function Ye(){g==null||g.resize()}function Xe(){var v,p,A;a.value==="playing"?(v=i.value)==null||v.pause():a.value==="paused"?(p=i.value)==null||p.resume():(A=i.value)==null||A.play()}function Ze(v){clearTimeout(N),L.value[v]=(L.value[v]||0)+1,h.value=v,N=setTimeout(()=>{h.value=""},1200)}function ct(){clearTimeout(N),h.value=""}function M(){document.hidden&&ct()}function x(){S!=null&&S.matches&&(ct(),g==null||g.reset())}async function _(){try{if(await Xr(Cm),w)return;O.value=!0,H.value++,clearTimeout(Y),Y=setTimeout(()=>{O.value=!1},2200),n("notify","Usage example copied")}catch{w||n("notify","Select the code to copy it manually")}}function V(){ee.value=!0,clearTimeout(D),D=setTimeout(()=>{ee.value=!1},1800)}function I(v){j.value=v}async function b(v){var p,A;["ArrowLeft","ArrowRight","Home","End"].includes(v.key)&&(v.preventDefault(),I(v.key==="Home"?"preview":v.key==="End"||j.value==="preview"?"source":"preview"),await ke(),(A=(p=C.value)==null?void 0:p.querySelector('[aria-selected="true"]'))==null||A.focus())}return kt(()=>{S=window.matchMedia("(prefers-reduced-motion: reduce)"),S.addEventListener("change",x),document.addEventListener("visibilitychange",M),window.addEventListener("resize",Ye),c.value&&(g=Ah(c.value,()=>!!(S!=null&&S.matches)),le(W))}),Qt(()=>{w=!0,clearTimeout(Y),clearTimeout(D),ct(),ve(),cancelAnimationFrame(ue),pe(),g==null||g.destroy(),S==null||S.removeEventListener("change",x),document.removeEventListener("visibilitychange",M),window.removeEventListener("resize",Ye)}),(v,p)=>(y(),k("div",Zh,[l("section",Kh,[p[12]||(p[12]=l("h1",null,[l("span",{class:"hero-title-reveal"},[l("span",null,"Build better"),l("span",null,"agent interfaces.")])],-1)),p[13]||(p[13]=l("p",{class:"hero-description"},"Harness UI is a collection of Vue components and animated icons. Explore real interactions, then make the source your own.",-1)),l("div",Jh,[qe((y(),k("a",qh,[p[3]||(p[3]=l("span",null,"Get started",-1)),B(Oe,{name:"arrow-right",size:16})])),[[F(wa)]]),qe((y(),k("a",Xh,[p[4]||(p[4]=l("span",null,"Browse components",-1)),B(Oe,{name:"arrow-right",size:16})])),[[F(wa),{enabled:!1}]])]),l("div",em,[p[6]||(p[6]=l("svg",{viewBox:"0 0 24 24",width:"15",height:"15","aria-hidden":"true"},[l("path",{d:"M2 4h4l6 10 6-10h4L12 22Z",fill:"#42b883"}),l("path",{d:"M6 4h4l2 3 2-3h4L12 14Z",fill:"#35495e"})],-1)),p[7]||(p[7]=De(" Vue 3 ",-1)),p[8]||(p[8]=l("span",null,"·",-1)),p[9]||(p[9]=De()),l("a",tm,ie(F(mt).length)+" components",1),p[10]||(p[10]=l("span",null,"·",-1)),l("a",nm,ie(F(q))+" animated icons",1),p[11]||(p[11]=l("span",null,"·",-1)),l("a",im,[B(F(dd),{size:14,"aria-hidden":"true"}),p[5]||(p[5]=De("GitHub",-1))])])]),l("section",om,[l("div",sm,[p[14]||(p[14]=l("div",null,[l("h2",null,"See it in action."),l("p",null,"Explore chat, task navigation, and an interactive preview in one workspace.")],-1)),l("a",am,[De("Browse all "+ie(F(mt).length)+" components ",1),B(Oe,{name:"arrow-right",size:16})])]),l("div",{class:he(["home-chat-canvas",{"is-paused":a.value==="paused","has-preview":s.value}]),"data-playback":a.value,"data-shot":["question","process","answer","preview","complete"][u.value]},[l("div",lm,[l("a",cm,[p[15]||(p[15]=De("View component ",-1)),B(Oe,{name:"arrow-right",size:17})])]),l("div",um,[l("div",{ref_key:"cameraElement",ref:c,class:"home-chat-camera",onPointerdownCapture:Le,onPointerup:we,onPointercancel:we,onClick:we,onKeydownCapture:Le,onKeyup:we,onFocusinCapture:Le,onWheelCapturePassive:Le,onWheelPassive:we,onTouchmoveCapturePassive:Le,onTouchmovePassive:we},[l("aside",{class:"home-workspace-preview",inert:!s.value||void 0,"aria-hidden":!s.value,onKeydown:ai(an(R,["stop","prevent"]),["esc"])},[B(Hh,{ref_key:"workspaceDemo",ref:o,active:r.value,onClose:R},null,8,["active"])],40,dm),l("div",Mm,[p[16]||(p[16]=l("div",{class:"home-chat-window-bar"},[l("span",{class:"window-dots","aria-hidden":"true"},[l("i"),l("i"),l("i")]),l("span",null,"Chat conversation"),l("span",{class:"window-demo-label"},"Demo")],-1)),B(tl,{ref_key:"chatDemo",ref:i,workspace:"",controls:!1,onStateChange:te,onTimeline:le,onOpenPreview:z,onPreviewStep:ne},null,512)])],544)]),l("div",pm,[l("button",{type:"button",class:"home-chat-play","aria-label":"Play chat demo",onClick:p[0]||(p[0]=A=>{var P;return(P=i.value)==null?void 0:P.play()})},[B(Oe,{name:"refresh",size:14}),p[17]||(p[17]=De("Replay",-1))]),l("div",{ref_key:"shotProgress",ref:d,class:"home-chat-shots","aria-hidden":"true"},[(y(),k(Ne,null,_e(5,A=>l("span",{key:A},[...p[18]||(p[18]=[l("i",null,null,-1)])])),64))],512),l("button",{type:"button",class:"home-chat-pause","aria-label":a.value==="playing"?"Pause chat demo":a.value==="paused"?"Resume chat demo":"Replay chat demo",title:a.value==="playing"?"Pause":a.value==="paused"?"Resume":"Replay",onClick:Xe},[(y(),k("svg",fm,[a.value==="playing"?(y(),k("path",hm)):a.value==="paused"||a.value==="ready"?(y(),k("path",mm)):(y(),k("path",ym))]))],8,gm)])],10,rm)]),qe((y(),k("section",Nm,[l("div",vm,[p[20]||(p[20]=l("h2",null,"Animated icons.",-1)),l("p",null,ie(F(q))+" animated icons for everyday interface details.",1),l("a",xm,[p[19]||(p[19]=De("Explore icons ",-1)),B(Oe,{name:"arrow-right",size:16})])]),l("div",jm,[(y(),k(Ne,null,_e($,A=>l("button",{key:A,type:"button",class:he(["home-icon-cell",{"is-playing":h.value===A}]),"aria-label":`Play ${F(La)(A)} icon`,onClick:P=>Ze(A)},[B(Oe,{name:A,size:42,"motion-key":L.value[A]||0},null,8,["name","motion-key"]),l("span",null,ie(F(La)(A)),1)],10,Lm)),64))])])),[[F(as)]]),qe((y(),k("section",bm,[l("div",{class:he(["craft-visual",{"is-complete":ee.value}])},[l("div",Dm,[l("div",{ref_key:"craftTabs",ref:C,class:"craft-mode-switch",role:"tablist","aria-label":"Component preview and source",onKeydown:b},[l("span",{class:he(["craft-tab-indicator",{"at-source":j.value==="source"}]),"aria-hidden":"true"},null,2),l("button",{id:"home-preview-tab",type:"button",role:"tab","aria-selected":j.value==="preview",tabindex:j.value==="preview"?0:-1,"aria-controls":"home-preview-panel",onClick:p[1]||(p[1]=A=>I("preview"))},"Preview",8,Im),l("button",{id:"home-source-tab",type:"button",role:"tab","aria-selected":j.value==="source",tabindex:j.value==="source"?0:-1,"aria-controls":"home-source-panel",onClick:p[2]||(p[2]=A=>I("source"))},"Source",8,Tm)],544),l("button",{type:"button",class:"craft-copy","aria-label":O.value?"Example copied":"Copy usage example",onClick:_},[B(Oe,{name:O.value?"check-draw":"copy",size:17,"motion-key":H.value},null,8,["name","motion-key"])],8,wm)]),l("div",zm,[l("div",{id:"home-preview-panel",class:he(["craft-live-preview",{"is-current":j.value==="preview"}]),inert:j.value!=="preview","aria-hidden":j.value!=="preview",role:"tabpanel","aria-labelledby":"home-preview-tab"},[B(Is,{onChange:V})],10,Am),l("div",{id:"home-source-panel",class:he(["craft-source-panel",{"is-current":j.value==="source"}]),inert:j.value!=="source","aria-hidden":j.value!=="source",role:"tabpanel","aria-labelledby":"home-source-tab"},[...p[21]||(p[21]=[Cr(`<pre data-v-c42b45e4><code data-v-c42b45e4><span class="syntax-dim" data-v-c42b45e4>&lt;script setup lang=</span><span class="syntax-string" data-v-c42b45e4>&quot;ts&quot;</span><span class="syntax-dim" data-v-c42b45e4>&gt;</span>
<span class="syntax-purple" data-v-c42b45e4>import</span> SlidingTabs <span class="syntax-purple" data-v-c42b45e4>from</span> <span class="syntax-string" data-v-c42b45e4>&#39;./ui/SlidingTabs.vue&#39;</span>
<span class="syntax-dim" data-v-c42b45e4>&lt;/script&gt;</span>

<span class="syntax-dim" data-v-c42b45e4>&lt;template&gt;</span>
  <span class="syntax-purple" data-v-c42b45e4>&lt;SlidingTabs /&gt;</span>
<span class="syntax-dim" data-v-c42b45e4>&lt;/template&gt;</span></code></pre>`,1)])],10,km)])],2),l("div",Sm,[p[23]||(p[23]=l("h2",null,"Your app. Your code.",-1)),p[24]||(p[24]=l("p",null,"Copy the Vue source, then adapt the details to your product.",-1)),l("a",Em,[p[22]||(p[22]=De("Quick start ",-1)),B(Oe,{name:"arrow-right",size:16})])])])),[[F(as)]])]))}}),Qm=Dt(Om,[["__scopeId","data-v-c42b45e4"]]),Um={key:0,class:"line-number","aria-hidden":"true"},Ym={class:"line-content"},Bo=Fe({__name:"CodeViewer",props:{code:{},compact:{type:Boolean}},setup(e){const t=e,n=Te(()=>t.code.trim().split(`
`).map(o=>o.split(/(\"[^\"]*\"|'[^']*'|`[^`]*`|\/\/.*$|\b(?:import|from|const|let|function|return|export|default|interface|type|if|await|async|true|false)\b)/g).filter(Boolean)));function i(o){return/^["'`]/.test(o)?"code-string":o.startsWith("//")?"code-comment":/^(import|from|const|let|function|return|export|default|interface|type|if|await|async|true|false)$/.test(o)?"code-keyword":""}return(o,s)=>(y(),k("pre",{class:he(["source-code",{compact:e.compact}]),"aria-label":"Source code"},[l("code",null,[(y(!0),k(Ne,null,_e(n.value,(r,a)=>(y(),k("span",{key:a,class:"code-line"},[e.compact?ge("",!0):(y(),k("span",Um,ie(a+1),1)),l("span",Ym,[(y(!0),k(Ne,null,_e(r,(c,d)=>(y(),k("span",{key:d,class:he(i(c))},ie(c),3))),128)),De(ie(r.length?"":" "),1)])]))),128))])],2))}}),Pm={key:0,class:"status-examples","aria-label":"Run status examples"},_m={key:2,class:"clarification-preview"},Wm=Fe({__name:"ComponentPreview",props:{entry:{}},emits:["action"],setup(e){const t=e,n=["running","queued","waiting_human","completed","failed","cancelled"],i=G(),o=G(!1);function s(){var r;(r=i.value)==null||r.reset(),o.value=!1}return Ie(()=>t.entry.slug,()=>{o.value=!1}),(r,a)=>e.entry.slug==="status-badge"?(y(),k("div",Pm,[(y(),k(Ne,null,_e(n,c=>B(kn(e.entry.component),{key:c,status:c},null,8,["status"])),64))])):e.entry.slug==="chat-conversation"?(y(),xe(tl,{key:1})):e.entry.slug==="clarification-card"?(y(),k("div",_m,[(y(),xe(kn(e.entry.component),{ref_key:"clarification",ref:i,"initially-submitted":!1,"read-only":!1,onSubmit:a[0]||(a[0]=c=>o.value=!0),onReset:a[1]||(a[1]=c=>o.value=!1)},null,544)),o.value?(y(),k("button",{key:0,type:"button",class:"clarification-retry",onClick:s},"Try again")):ge("",!0)])):(y(),xe(kn(e.entry.component),{key:3,onCreate:a[2]||(a[2]=c=>r.$emit("action"))},null,32))}}),za=Dt(Wm,[["__scopeId","data-v-c7c3c72c"]]),Rm={class:"site-header"},Bm={class:"header-inner"},$m={class:"header-brand"},Hm=["aria-label","aria-expanded"],Gm={href:"#/",class:"brand","aria-label":"Harness UI home"},Vm={class:"brand-mark"},Fm={class:"top-nav","aria-label":"Main navigation"},Zm=["aria-current"],Km={class:"header-actions"},Jm={class:"github-star-label"},qm=["aria-label"],Xm={class:"theme-icon-stack","aria-hidden":"true"},e0=["inert"],t0=["inert"],n0={class:"nav-count"},i0=["aria-current","onClick"],o0={class:"nav-count"},s0={key:0,class:"quick-components"},a0=["href"],r0=["inert"],l0={key:2,id:"components",class:"components-section"},c0={class:"collection-toolbar"},u0=["aria-pressed","onClick"],d0={class:"toolbar-actions"},M0={class:"collection-search"},p0={class:"sort-wrap"},g0=["aria-expanded"],f0={class:"sort-menu"},h0=["onClick"],m0={class:"collection-subheading"},y0=["data-component"],N0={class:"card-stage"},v0={class:"stage-topline"},x0=["aria-label","onClick"],j0={class:"demo-holder"},L0={class:"card-description"},b0=["href"],D0={key:1,class:"empty-state"},I0={key:3,class:"detail-page"},T0={class:"breadcrumbs","aria-label":"Breadcrumb"},w0={class:"detail-heading"},z0={class:"detail-preview"},A0={class:"preview-toolbar"},k0=["aria-selected","tabindex"],S0=["aria-selected","tabindex"],E0={class:"preview-controls"},C0={key:0,class:"source-filename"},O0={class:"detail-preview-panels"},Q0=["data-component","inert","aria-hidden"],U0={class:"detail-footnote"},Y0={class:"component-pagination","aria-label":"Component navigation"},P0=["href"],_0=["href"],W0={key:4,class:"docs-page"},R0={class:"breadcrumbs","aria-label":"Breadcrumb"},B0=["href"],$0={class:"docs-code docs-command"},H0={class:"docs-example"},G0={class:"docs-example-header"},V0=["inert"],F0={class:"footer-inner"},Z0={href:"#/",class:"footer-brand"},K0={key:0,class:"toast-message",role:"status"},un="https://github.com/cocofhu/harness-ui",Zn=`<script setup lang="ts">
import ChatComposer from './components/ui/ChatComposer.vue'
<\/script>

<template>
  <ChatComposer @send="console.log" />
</template>`,J0=Fe({__name:"App",setup(e){const t=mc(()=>ad(()=>import("./IconGallery-WsO2inVy.js"),__vite__mapDeps([0,1])));function n(){const U=window.location.hash.replace(/^#\/?/,"")||"";return U.startsWith("components/")&&!mt.some(m=>U===`components/${m.slug}`)?(window.history.replaceState(null,"","#/components"),"components"):U}const i=G(n()),o=G("all"),s=G(""),r=G(bh("agent-ui-theme","light")==="dark"),a=G(!1),c=G(window.matchMedia("(max-width: 700px)").matches),d=G(),u=G(""),h=G(!1),L=G("recommended"),j=G("preview"),C=G(),O=G(0),H=G(""),ee=G(),$=G(),q=G({opacity:"0"}),w=G({opacity:"0"});let Y,D,N=r.value,S=!1,g,W=0;const Z=G(null),Q=Te(()=>Z.value===null?"Star":new Intl.NumberFormat("en",{notation:Z.value>=1e4?"compact":"standard",maximumFractionDigits:1}).format(Z.value));let J,ue,fe=!1;const ae={all:"dashboard",conversation:"chat",agent:"robot",workflow:"workflow",navigation:"board"},re=Te(()=>mt.find(U=>i.value===`components/${U.slug}`)),pe=Te(()=>i.value==="components"),te=Te(()=>i.value==="icons"),z=Te(()=>i.value.startsWith("docs/")),R=Te(()=>!pe.value&&!re.value&&!te.value&&!z.value),ne=Te(()=>pe.value||!!re.value||z.value),le=Te(()=>{var U;return((U=Oi.find(m=>m.id===o.value))==null?void 0:U.name)||"All components"}),ve=Te(()=>{const U=s.value.trim().toLowerCase();let m=mt.filter(K=>(o.value==="all"||K.category===o.value)&&Yg(K,U));return L.value==="name"&&(m=[...m].sort((K,se)=>K.name.localeCompare(se.name,"en"))),L.value==="new"&&(m=[...m].sort((K,se)=>+!!se.fresh-+!!K.fresh)),m}),Le=Te(()=>mt.findIndex(U=>{var m;return U.slug===((m=re.value)==null?void 0:m.slug)}));function we(U){H.value=U,clearTimeout(Y),Y=setTimeout(()=>{H.value=""},2600)}async function Ye(U,m="Copied to clipboard"){try{await Xr(U),u.value=U,clearTimeout(D),D=setTimeout(()=>{u.value=""},2200),we(m)}catch{we("Select the code and copy it manually")}}function Xe(U=""){window.location.hash=U?`/${U}`:"/",a.value=!1}async function Ze(){a.value=!1,h.value=!1,i.value=n(),j.value="preview",await ke(),fe||window.scrollTo({top:0,behavior:"instant"})}async function ct(U){var m,K;U.isComposing||!["ArrowLeft","ArrowRight","Home","End"].includes(U.key)||(U.preventDefault(),j.value=U.key==="Home"?"preview":U.key==="End"||j.value==="preview"?"source":"preview",await ke(),(K=(m=C.value)==null?void 0:m.querySelector('[aria-selected="true"]'))==null||K.focus())}async function M(){var U;await ke(),v(),fe&&(fe=!1,(U=document.getElementById("components"))==null||U.scrollIntoView({behavior:"smooth",block:"start"}))}function x(U){o.value=U,pe.value||(fe=!0,Xe("components")),a.value=!1}function _(){var U,m;(U=document.getElementById("main-content"))==null||U.focus(),(m=document.getElementById("main-content"))==null||m.scrollIntoView()}function V(U,m){const K=U==null?void 0:U.querySelector(m);if(!U||!K)return{opacity:"0"};const se=U.getBoundingClientRect(),je=K.getBoundingClientRect();return{opacity:"1",width:`${je.width}px`,height:`${je.height}px`,transform:`translate3d(${je.left-se.left+U.scrollLeft}px,${je.top-se.top+U.scrollTop}px,0)`}}function I(){c.value=window.matchMedia("(max-width: 700px)").matches,c.value||(a.value=!1),v()}function b(){var U;a.value&&(a.value=!1,(U=d.value)==null||U.focus())}function v(){q.value=V(ee.value,"button.active"),w.value=V($.value,".sidebar-link.selected")}function p(){document.documentElement.classList.remove("harness-theme-motion","harness-theme-capture")}function A(){if(N=!N,ss()||!document.startViewTransition){W++,g==null||g.skipTransition(),g=void 0,S=!1,p(),r.value=N;return}if(S)return;g==null||g.skipTransition();const U=++W;S=!0,document.documentElement.classList.add("harness-theme-motion","harness-theme-capture");try{const m=document.startViewTransition(async()=>{r.value=N,await ke(),r.value!==N&&(r.value=N,await ke()),S=!1});g=m,m.ready.then(()=>{U===W&&document.documentElement.classList.remove("harness-theme-capture")}).catch(()=>{}),m.finished.catch(()=>{}).finally(()=>{U===W&&(g=void 0,S=!1,p())})}catch{r.value=N,S=!1,p()}}async function P(){const U="harness-ui-github-stars";try{const m=JSON.parse(sessionStorage.getItem(U)||"null");if(m&&typeof m.checkedAt=="number"&&Date.now()-m.checkedAt<36e5&&(m.count===null||Number.isInteger(m.count)&&m.count>=0)){Z.value=m.count;return}}catch{}J=new AbortController,ue=setTimeout(()=>J==null?void 0:J.abort(),6e3);try{const m=await fetch("https://api.github.com/repos/cocofhu/harness-ui",{headers:{Accept:"application/vnd.github+json"},signal:J.signal});if(!m.ok)throw new Error("Repository unavailable");const K=await m.json();if(!Number.isInteger(K.stargazers_count)||K.stargazers_count<0)throw new Error("Invalid count");Z.value=K.stargazers_count}catch{Z.value=null}finally{clearTimeout(ue);try{sessionStorage.setItem(U,JSON.stringify({count:Z.value,checkedAt:Date.now()}))}catch{}}}function ce(U){U.key==="Escape"&&(b(),h.value=!1)}return Ie([re,pe,te,z],()=>{var m;const U=((m=re.value)==null?void 0:m.name)||(pe.value?"Components":te.value?"Animated icons":z.value?"Documentation":"Vue components and animated icons");document.title=`${U} · Harness UI`},{immediate:!0}),Ie(r,U=>{var m;document.documentElement.classList.toggle("dark",U),document.documentElement.style.colorScheme=U?"dark":"light",window.dispatchEvent(new CustomEvent("themechange",{detail:{theme:U?"dark":"light"}})),(m=document.querySelector('meta[name="theme-color"]'))==null||m.setAttribute("content",U?"#0a0a0b":"#ffffff"),Dh("agent-ui-theme",U?"dark":"light")},{immediate:!0}),Ie([a,c],([U,m])=>{document.body.style.overflow=U&&m?"hidden":""}),Ie([o,i,pe],async()=>{await ke(),v()}),kt(()=>{P(),window.addEventListener("hashchange",Ze),window.addEventListener("keydown",ce),window.addEventListener("resize",I),ke(v),document.fonts.ready.then(v)}),go(()=>{window.removeEventListener("hashchange",Ze),window.removeEventListener("keydown",ce),window.removeEventListener("resize",I),clearTimeout(Y),clearTimeout(D),clearTimeout(ue),J==null||J.abort(),W++,g==null||g.skipTransition(),p(),document.body.style.overflow=""}),(U,m)=>(y(),k(Ne,null,[l("a",{href:"#main-content",class:"skip-link",onClick:an(_,["prevent"])},"Skip to main content"),l("header",Rm,[l("div",Bm,[l("div",$m,[l("button",{type:"button",ref_key:"mobileMenu",ref:d,class:"icon-button mobile-menu","aria-label":a.value?"Close navigation":"Open navigation","aria-expanded":a.value,onClick:m[0]||(m[0]=K=>a.value=!a.value)},[B(Oe,{name:"menu",size:20})],8,Hm),l("a",Gm,[l("span",Vm,[B(Oe,{name:"sparkles",size:23,"stroke-width":1.7})]),m[20]||(m[20]=l("span",{class:"brand-name"},[De("Harness "),l("span",{class:"brand-ui"},"UI")],-1))])]),l("nav",Fm,[l("a",{href:"#/",class:he({active:R.value})},"Home",2),l("a",{href:"#/components",class:he({active:pe.value||re.value}),"aria-current":pe.value||re.value?"page":void 0},"Components",10,Zm),l("a",{href:"#/icons",class:he({active:te.value})},"Icons",2),l("a",{href:un,target:"_blank",rel:"noopener noreferrer"},"Docs")]),l("div",Km,[l("a",{class:"github-star-pill",href:un,target:"_blank",rel:"noopener noreferrer","aria-label":"Star Harness UI on GitHub"},[m[21]||(m[21]=Cr('<span class="github-star-icon" aria-hidden="true"><svg class="github-mark" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg><svg class="github-star-mark" width="23" height="23" viewBox="0 0 24 24" fill="none"><path d="m11 4 2.2 4.45 4.91.72-3.55 3.46.84 4.89L11 15.21l-4.4 2.31.84-4.89-3.55-3.46 4.91-.72L11 4Z" fill="currentColor"></path><path class="github-sparkle" d="m20 2 .7 1.8 1.8.7-1.8.7L20 7l-.7-1.8-1.8-.7 1.8-.7Z" fill="currentColor"></path><path class="github-sparkle github-sparkle-late" d="m3 16 .6 1.4L5 18l-1.4.6L3 20l-.6-1.4L1 18l1.4-.6Z" fill="currentColor"></path></svg></span>',1)),l("span",Jm,ie(Q.value),1)]),l("button",{type:"button",class:"icon-button theme-toggle","aria-label":r.value?"Switch to light theme":"Switch to dark theme",onClick:A},[l("span",Xm,[l("span",{class:he(["theme-icon theme-icon-moon",{"is-active":!r.value}])},[B(Oe,{name:"moon",size:16,interactive:!r.value},null,8,["interactive"])],2),l("span",{class:he(["theme-icon theme-icon-sun",{"is-active":r.value}])},[B(Oe,{name:"sun",size:16,interactive:r.value},null,8,["interactive"])],2)])],8,qm)])])]),a.value?(y(),k("button",{key:0,type:"button",class:"nav-backdrop","aria-label":"Close navigation",onClick:b})):ge("",!0),ne.value?ge("",!0):(y(),k("nav",{key:1,class:he(["home-mobile-nav",{"mobile-open":a.value}]),inert:!a.value,"aria-label":"Mobile navigation"},[l("a",{href:"#/",onClick:m[1]||(m[1]=K=>a.value=!1)},"Home"),l("a",{href:"#/components",onClick:m[2]||(m[2]=K=>a.value=!1)},"Components"),l("a",{href:"#/icons",onClick:m[3]||(m[3]=K=>a.value=!1)},"Icons"),l("a",{href:un,target:"_blank",rel:"noopener noreferrer",onClick:m[4]||(m[4]=K=>a.value=!1)},"Documentation")],10,e0)),l("div",{class:he(["app-layout",{"landing-layout":!ne.value}])},[ne.value?(y(),k("aside",{key:0,class:he(["sidebar",{"mobile-open":a.value}]),inert:c.value&&!a.value,"aria-label":"Component navigation"},[l("div",{ref_key:"sidebarList",ref:$,class:"sidebar-scroll"},[l("span",{class:"sidebar-highlight",style:Ft(w.value),"aria-hidden":"true"},null,4),m[25]||(m[25]=l("p",{class:"nav-label"},"Getting started",-1)),l("a",{href:un,target:"_blank",rel:"noopener noreferrer",class:"sidebar-link"},[B(Oe,{name:"terminal",size:17}),m[22]||(m[22]=l("span",null,"Quick start",-1))]),l("button",{type:"button",class:"sidebar-link",onClick:m[5]||(m[5]=K=>Xe("icons"))},[B(Oe,{name:"sparkles",size:17}),m[23]||(m[23]=l("span",null,"Icons",-1)),l("span",n0,ie(F(vh)),1)]),m[26]||(m[26]=l("p",{class:"nav-label category-nav-label"},"Components",-1)),(y(!0),k(Ne,null,_e(F(Oi),K=>(y(),k("button",{key:K.id,type:"button",class:he(["sidebar-link",{selected:pe.value&&o.value===K.id}]),"aria-current":pe.value&&o.value===K.id?"page":void 0,onClick:se=>x(K.id)},[B(Oe,{name:ae[K.id],size:17},null,8,["name"]),l("span",null,ie(K.name),1),l("span",o0,ie(K.id==="all"?F(mt).length:F(mt).filter(se=>se.category===K.id).length),1)],10,i0))),128)),re.value?(y(),k("div",s0,[m[24]||(m[24]=l("p",{class:"nav-label"},"In this category",-1)),(y(!0),k(Ne,null,_e(F(mt).filter(K=>K.category===re.value.category),K=>(y(),k("a",{key:K.slug,href:`#/components/${K.slug}`,class:he(["sidebar-component",{current:K.slug===re.value.slug}])},ie(K.name),11,a0))),128))])):ge("",!0)],512)],10,t0)):ge("",!0),l("main",{id:"main-content",class:"main-content",tabindex:"-1",inert:c.value&&a.value},[B(dt,{name:"page",mode:"out-in",appear:"",onAfterEnter:M},{default:Ke(()=>{var K;return[(y(),k("div",{key:pe.value?"gallery":i.value,class:"page-view"},[R.value?(y(),xe(Qm,{key:0,onNotify:we})):te.value?(y(),xe(F(t),{key:1,onNotify:we})):pe.value?(y(),k("section",l0,[m[29]||(m[29]=l("header",{class:"section-heading"},[l("h1",null,"Components")],-1)),l("div",c0,[l("div",{ref_key:"categoryTabList",ref:ee,class:"category-tabs",role:"group","aria-label":"Component categories"},[l("span",{class:"tab-highlight",style:Ft(q.value),"aria-hidden":"true"},null,4),(y(!0),k(Ne,null,_e(F(Oi),se=>(y(),k("button",{key:se.id,type:"button",class:he({active:o.value===se.id}),"aria-pressed":o.value===se.id,onClick:je=>x(se.id)},ie(se.id==="all"?"All":se.name),11,u0))),128))],512),l("div",d0,[l("label",M0,[B(Oe,{name:"search",size:15,interactive:!1}),qe(l("input",{"onUpdate:modelValue":m[6]||(m[6]=se=>s.value=se),"aria-label":"Filter components",placeholder:"Search components…"},null,512),[[Ds,s.value]]),s.value?(y(),k("button",{key:0,type:"button","aria-label":"Clear search",onClick:m[7]||(m[7]=se=>s.value="")},[B(Oe,{name:"close",size:13})])):ge("",!0)]),l("div",p0,[l("button",{type:"button",class:"icon-button sort-button","aria-label":"Sort components","aria-expanded":h.value,onClick:m[8]||(m[8]=se=>h.value=!h.value)},[B(Oe,{name:"filter",size:17})],8,g0),h.value?(y(),k(Ne,{key:0},[l("button",{type:"button",class:"sort-backdrop",tabindex:"-1","aria-label":"Close sort menu",onClick:m[9]||(m[9]=se=>h.value=!1)}),l("div",f0,[(y(),k(Ne,null,_e([{id:"recommended",label:"Featured"},{id:"new",label:"Newest first"},{id:"name",label:"Name"}],se=>l("button",{key:se.id,type:"button",onClick:je=>{L.value=se.id,h.value=!1}},[De(ie(se.label),1),L.value===se.id?(y(),xe(F(lt),{key:0,size:14})):ge("",!0)],8,h0)),64))])],64)):ge("",!0)])])]),l("div",m0,[l("span",null,[De(ie(le.value)+" ",1),l("small",null,ie(ve.value.length),1)])]),ve.value.length?(y(),xe(Pu,{key:0,tag:"div",name:"collection",class:"component-grid",onBeforeLeave:F(Ih)},{default:Ke(()=>[(y(!0),k(Ne,null,_e(ve.value,(se,je)=>qe((y(),k("article",{key:se.slug,"data-component":se.slug,class:"component-card",style:Ft({"--card-index":Math.min(je,5),"--stage-tone":je%3===0?"var(--stage-lilac)":je%3===1?"var(--stage-sand)":"var(--stage-gray)"})},[l("div",N0,[l("div",v0,[l("button",{type:"button",class:"stage-expand icon-button","aria-label":`View ${se.name} details`,onClick:Ae=>Xe(`components/${se.slug}`)},[B(F(Fn),{size:16})],8,x0)]),l("div",j0,[B(za,{entry:se,onAction:m[10]||(m[10]=Ae=>we("New task selected"))},null,8,["entry"])])]),l("div",L0,[l("a",{href:`#/components/${se.slug}`,class:"card-title-row"},[l("h3",null,ie(se.name),1),B(F(Fn),{size:15})],8,b0)])],12,y0)),[[F(as)]])),128))]),_:1},8,["onBeforeLeave"])):(y(),k("div",D0,[B(Oe,{name:"search",size:29}),m[28]||(m[28]=l("h3",null,"No components found",-1)),l("button",{type:"button",class:"button secondary",onClick:m[11]||(m[11]=se=>{s.value="",x("all")})},[m[27]||(m[27]=De(" Browse all components ",-1)),B(Oe,{name:"arrow-right",size:15})])]))])):re.value?(y(),k("div",I0,[l("nav",T0,[m[30]||(m[30]=l("a",{href:"#/components"},"Components",-1)),B(F(ri),{size:13}),l("button",{type:"button",onClick:m[12]||(m[12]=se=>x(re.value.category))},ie((K=F(Oi).find(se=>se.id===re.value.category))==null?void 0:K.name),1),B(F(ri),{size:13}),l("span",null,ie(re.value.name),1)]),l("div",w0,[l("h1",null,ie(re.value.name),1),l("p",null,ie(re.value.description),1)]),l("div",z0,[l("div",A0,[l("div",{ref_key:"detailTabs",ref:C,class:"preview-tabs",role:"tablist","aria-label":"Component preview and source",onKeydown:ct},[l("button",{id:"component-preview-tab",type:"button",role:"tab","aria-selected":j.value==="preview",tabindex:j.value==="preview"?0:-1,"aria-controls":"component-preview-panel",class:he({active:j.value==="preview"}),onClick:m[13]||(m[13]=se=>j.value="preview")},[B(Oe,{name:"eye",size:15}),m[31]||(m[31]=De("Preview",-1))],10,k0),l("button",{id:"component-source-tab",type:"button",role:"tab","aria-selected":j.value==="source",tabindex:j.value==="source"?0:-1,"aria-controls":"component-source-panel",class:he({active:j.value==="source"}),onClick:m[14]||(m[14]=se=>j.value="source")},[B(Oe,{name:"stage-ide",size:15}),m[32]||(m[32]=De("Source ",-1))],10,S0)],544),l("div",E0,[j.value==="source"?(y(),k("span",C0,ie(F(Qg)(re.value))+".vue",1)):ge("",!0),j.value==="preview"?(y(),k("button",{key:1,type:"button",class:"icon-button","aria-label":"Replay demo",onClick:m[15]||(m[15]=se=>O.value++)},[B(Oe,{name:"refresh",size:16,"motion-key":O.value},null,8,["motion-key"])])):ge("",!0),l("button",{type:"button",class:"button small secondary",onClick:m[16]||(m[16]=se=>Ye(re.value.source,"Component source copied"))},[B(Oe,{name:u.value===re.value.source?"check":"copy","motion-key":u.value===re.value.source?1:void 0,size:14},null,8,["name","motion-key"]),De(ie(u.value===re.value.source?"Copied":"Copy code"),1)])])]),l("div",O0,[qe(l("div",{id:"component-preview-panel",class:"large-demo","data-component":re.value.slug,role:"tabpanel","aria-labelledby":"component-preview-tab",inert:j.value!=="preview","aria-hidden":j.value!=="preview"},[(y(),xe(za,{entry:re.value,key:`${re.value.slug}-${O.value}`,onAction:m[17]||(m[17]=se=>we("New task selected"))},null,8,["entry"]))],8,Q0),[[Ct,j.value==="preview"]]),j.value==="source"?(y(),xe(Bo,{key:0,id:"component-source-panel",code:re.value.source,role:"tabpanel","aria-labelledby":"component-source-tab"},null,8,["code"])):ge("",!0)])]),l("div",U0,[m[34]||(m[34]=l("span",null,[De("Vue 3 "),l("i",null,"·"),De(" TypeScript "),l("i",null,"·"),De(" Standalone source")],-1)),l("a",{href:un,target:"_blank",rel:"noopener noreferrer"},[m[33]||(m[33]=De("How to use ",-1)),B(F(Fn),{size:13})])]),l("nav",Y0,[F(mt)[Le.value-1]?(y(),k("a",{key:0,href:`#/components/${F(mt)[Le.value-1].slug}`},[B(Oe,{name:"arrow-left",size:15}),l("span",null,[m[35]||(m[35]=l("small",null,"Previous",-1)),De(ie(F(mt)[Le.value-1].name),1)])],8,P0)):ge("",!0),F(mt)[Le.value+1]?(y(),k("a",{key:1,href:`#/components/${F(mt)[Le.value+1].slug}`,class:"next-component"},[l("span",null,[m[36]||(m[36]=l("small",null,"Next",-1)),De(ie(F(mt)[Le.value+1].name),1)]),B(Oe,{name:"arrow-right",size:15})],8,_0)):ge("",!0)])])):(y(),k("article",W0,[l("nav",R0,[m[37]||(m[37]=l("a",{href:"#/"},"Harness UI",-1)),B(F(ri),{size:13}),m[38]||(m[38]=l("span",null,"Documentation",-1))]),m[48]||(m[48]=l("h1",null,"Documentation",-1)),m[49]||(m[49]=l("p",{class:"docs-lead"},"For Vue 3 and TypeScript.",-1)),l("a",{href:un,target:"_blank",rel:"noopener noreferrer",class:"inline-link"},[m[39]||(m[39]=De("View documentation on GitHub ",-1)),B(F(Fn),{size:15})]),l("section",null,[m[42]||(m[42]=l("span",{class:"doc-number"},"01",-1)),l("div",null,[m[41]||(m[41]=l("h2",null,"Copy a component",-1)),l("a",{href:`${un}/tree/main/src/components/ui`,target:"_blank",rel:"noopener noreferrer",class:"inline-link"},[m[40]||(m[40]=De("Browse source on GitHub ",-1)),B(F(Fn),{size:15})],8,B0)])]),l("section",null,[m[44]||(m[44]=l("span",{class:"doc-number"},"02",-1)),l("div",null,[m[43]||(m[43]=l("h2",null,"Install dependencies",-1)),l("div",$0,[B(Oe,{name:"terminal",size:16,interactive:!1}),B(Bo,{code:"npm install lucide-vue-next",compact:""}),l("button",{type:"button",class:"icon-button","aria-label":"Copy install command",onClick:m[18]||(m[18]=se=>Ye("npm install lucide-vue-next"))},[B(Oe,{name:u.value==="npm install lucide-vue-next"?"check":"copy","motion-key":u.value==="npm install lucide-vue-next"?1:void 0,size:15},null,8,["name","motion-key"])])])])]),l("section",null,[m[47]||(m[47]=l("span",{class:"doc-number"},"03",-1)),l("div",null,[m[46]||(m[46]=l("h2",null,"Import and use",-1)),l("div",H0,[l("div",G0,[l("span",null,[B(Oe,{name:"doc",size:14,interactive:!1}),m[45]||(m[45]=De(" App.vue",-1))]),l("button",{type:"button",onClick:m[19]||(m[19]=se=>Ye(Zn,"Example copied"))},[B(Oe,{name:u.value===Zn?"check":"copy","motion-key":u.value===Zn?1:void 0,size:14},null,8,["name","motion-key"]),De(" "+ie(u.value===Zn?"Copied":"Copy example"),1)])]),B(Bo,{code:Zn,compact:""})])])])]))]))]}),_:1})],8,r0)],2),l("footer",{class:"site-footer",inert:c.value&&a.value},[l("div",F0,[l("a",Z0,[B(Oe,{name:"sparkles",size:20}),m[50]||(m[50]=l("strong",null,"Harness UI",-1))]),l("nav",{"aria-label":"Footer navigation"},[m[51]||(m[51]=l("a",{href:"#/components"},"Components",-1)),m[52]||(m[52]=l("a",{href:"#/icons"},"Icons",-1)),l("a",{href:un,target:"_blank",rel:"noopener noreferrer"},"Documentation")]),m[53]||(m[53]=l("span",null,"© 2026 · MIT License",-1))])],8,V0),B(dt,{name:"toast"},{default:Ke(()=>[H.value?(y(),k("div",K0,[l("span",null,[B(F(lt),{size:13})]),De(ie(H.value),1)])):ge("",!0)]),_:1})],64))}});let Kn;function q0(){if(Kn)return Kn;const e=new Map,t=i=>{const o=i.target===document?document.scrollingElement:i.target;o instanceof HTMLElement&&(clearTimeout(e.get(o)),o.classList.add("is-scrolling"),e.set(o,setTimeout(()=>{o.classList.remove("is-scrolling"),e.delete(o)},650)))};document.addEventListener("scroll",t,{capture:!0,passive:!0});const n=()=>{document.removeEventListener("scroll",t,!0),e.forEach((i,o)=>{clearTimeout(i),o.classList.remove("is-scrolling")}),e.clear(),Kn===n&&(Kn=void 0)};return Kn=n,n}q0();td(J0).mount("#app");export{Te as A,Xr as B,Ne as F,dt as T,Oe as _,y as a,l as b,k as c,Fe as d,Lh as e,_e as f,he as g,B as h,_i as i,qe as j,La as k,ge as l,De as m,ke as n,Qt as o,xe as p,Ke as q,xh as r,an as s,ie as t,F as u,Ds as v,Ie as w,Bo as x,pc as y,G as z};
