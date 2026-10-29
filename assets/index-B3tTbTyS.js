const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/IconGallery--tklWYzm.js","assets/IconGallery-EEQdn2tp.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Be={},Sn=[],Kt=()=>{},Ea=()=>!1,si=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ai=e=>e.startsWith("onUpdate:"),et=Object.assign,us=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Nl=Object.prototype.hasOwnProperty,_e=(e,t)=>Nl.call(e,t),ye=Array.isArray,hn=e=>vo(e)==="[object Map]",On=e=>vo(e)==="[object Set]",Cs=e=>vo(e)==="[object Date]",Ie=e=>typeof e=="function",Ge=e=>typeof e=="string",_t=e=>typeof e=="symbol",$e=e=>e!==null&&typeof e=="object",Ca=e=>($e(e)||Ie(e))&&Ie(e.then)&&Ie(e.catch),Oa=Object.prototype.toString,vo=e=>Oa.call(e),xl=e=>vo(e).slice(8,-1),Ua=e=>vo(e)==="[object Object]",ds=e=>Ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,oo=cs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ri=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},bl=/-\w/g,xt=ri(e=>e.replace(bl,t=>t.slice(1).toUpperCase())),jl=/\B([A-Z])/g,bn=ri(e=>e.replace(jl,"-$1").toLowerCase()),li=ri(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ti=ri(e=>e?`on${li(e)}`:""),Zt=(e,t)=>!Object.is(e,t),Yo=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Qa=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})},ci=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ll=e=>{const t=Ge(e)?Number(e):NaN;return isNaN(t)?e:t};let Os;const ui=()=>Os||(Os=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yt(e){if(ye(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],i=Ge(o)?Tl(o):Yt(o);if(i)for(const s in i)t[s]=i[s]}return t}else if(Ge(e)||$e(e))return e}const Dl=/;(?![^(]*\))/g,wl=/:([^]+)/,Il=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Tl(e){const t={};return e.replace(Il,n=>n.startsWith("/*")?"":n).split(Dl).forEach(n=>{if(n){const o=n.split(wl);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function fe(e){let t="";if(Ge(e))t=e;else if(ye(e))for(let n=0;n<e.length;n++){const o=fe(e[n]);o&&(t+=o+" ")}else if($e(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const zl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Al=cs(zl);function Ya(e){return!!e||e===""}function kl(e,t,n){if(e.length!==t.length)return!1;let o=!0;for(let i=0;o&&i<e.length;i++)o=yn(e[i],t[i],n);return o}function Us(e,t,n){if(e.size!==t.size)return!1;const o=Array.from(t),i=new Uint8Array(o.length);for(const s of e){let a=-1;for(let r=0;r<o.length;r++)if(!i[r]&&yn(s,o[r],n)){a=r;break}if(a<0)return!1;i[a]=1}return!0}function Sl(e,t,n){let o=hn(e),i=hn(t);if(o||i||(o=On(e),i=On(t),o||i))return o&&i?Us(e,t,n):!1;const s=Object.keys(e).length,a=Object.keys(t).length;if(s!==a)return!1;for(const r in e){const c=e.hasOwnProperty(r),u=t.hasOwnProperty(r);if(c&&!u||!c&&u||!yn(e[r],t[r],n))return!1}return String(e)===String(t)}function Qs(e,t,n,o){n||(n=[new Map,new Map]);const[i,s]=n;if(i.has(e)||s.has(t))return i.get(e)===t&&s.get(t)===e;i.set(e,t),s.set(t,e);const a=o(e,t,n);return i.delete(e),s.delete(t),a}function yn(e,t,n){if(e===t)return!0;let o=Cs(e),i=Cs(t);return o||i?o&&i?e.getTime()===t.getTime():!1:(o=_t(e),i=_t(t),o||i?e===t:(o=ye(e),i=ye(t),o||i?o&&i?Qs(e,t,n,kl):!1:(o=$e(e),i=$e(t),o||i?!o||!i?!1:Qs(e,t,n,Sl):String(e)===String(t))))}function El(e,t){return e.findIndex(n=>yn(n,t))}const Pa=e=>!!(e&&e.__v_isRef===!0),X=e=>Ge(e)?e:e==null?"":ye(e)||$e(e)&&(e.toString===Oa||!Ie(e.toString))?Pa(e)?X(e.value):JSON.stringify(e,_a,2):String(e),_a=(e,t)=>Pa(t)?_a(e,t.value):hn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,i],s)=>(n[zi(o,s)+" =>"]=i,n),{})}:On(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>zi(n))}:_t(t)?zi(t):$e(t)&&!ye(t)&&!Ua(t)?String(t):t,zi=(e,t="")=>{var n;return _t(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rt;class Cl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&rt&&(rt.active?(this.parent=rt,this.index=(rt.scopes||(rt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const o=this.scopes.slice();for(t=0,n=o.length;t<n;t++)o[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const i=this.scopes.slice();for(t=0,n=i.length;t<n;t++)i[t].resume()}const o=this.effects.slice();for(t=0,n=o.length;t<n;t++)o[t].resume()}}run(t){if(this._active){const n=rt;try{return rt=this,t()}finally{rt=n}}}on(){++this._on===1&&(this.prevScope=rt,rt=this)}off(){if(this._on>0&&--this._on===0){if(rt===this)rt=this.prevScope;else{let t=rt;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(this.effects.length=0,n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const i=this.scopes.slice();for(n=0,o=i.length;n<o;n++)i[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ol(){return rt}let Ve;const Ai=new WeakSet;class $a{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,rt&&(rt.active?rt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ai.has(this)&&(Ai.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wa(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ys(this),Ba(this);const t=Ve,n=Pt;Ve=this,Pt=!0;try{return this.fn()}finally{Ha(this),Ve=t,Pt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)gs(t);this.deps=this.depsTail=void 0,Ys(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ai.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vi(this)&&this.run()}get dirty(){return Vi(this)}}let Ra=0,io,so;function Wa(e,t=!1){if(e.flags|=8,t){e.next=so,so=e;return}e.next=io,io=e}function ps(){Ra++}function Ms(){if(--Ra>0)return;if(so){let t=so;for(so=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;io;){let t=io;for(io=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(o){e||(e=o)}t=n}}if(e)throw e}function Ba(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ha(e){let t,n=e.depsTail,o=n;for(;o;){const i=o.prevDep;o.version===-1?(o===n&&(n=i),gs(o),Ul(o)):t=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=i}e.deps=t,e.depsTail=n}function Vi(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Va(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Va(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===uo)||(e.globalVersion=uo,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Vi(e))))return;e.flags|=2;const t=e.dep,n=Ve,o=Pt;Ve=e,Pt=!0;try{Ba(e);const i=e.fn(e._value);(t.version===0||Zt(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{Ve=n,Pt=o,Ha(e),e.flags&=-3}}function gs(e,t=!1){const{dep:n,prevSub:o,nextSub:i}=e;if(o&&(o.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=o,e.nextSub=void 0),n.subs===e&&(n.subs=o,!o&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)gs(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ul(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Pt=!0;const Ga=[];function Jt(){Ga.push(Pt),Pt=!1}function qt(){const e=Ga.pop();Pt=e===void 0?!0:e}function Ys(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Ve;Ve=void 0;try{t()}finally{Ve=n}}}let uo=0;class Ql{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ve||!Pt||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new Ql(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,Fa(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const o=n.nextDep;o.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=o),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=o)}return n}trigger(t){this.version++,uo++,this.notify(t)}notify(t){ps();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ms()}}}function Fa(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let o=t.deps;o;o=o.nextDep)Fa(o)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Gi=new WeakMap,Cn=Symbol(""),Fi=Symbol(""),po=Symbol("");function Mt(e,t,n){if(Pt&&Ve){let o=Gi.get(e);o||Gi.set(e,o=new Map);let i=o.get(n);i||(o.set(n,i=new fs),i.map=o,i.key=n),i.track()}}function sn(e,t,n,o,i,s){const a=Gi.get(e);if(!a){uo++;return}const r=c=>{c&&c.trigger()};if(ps(),t==="clear")a.forEach(r);else{const c=ye(e),u=c&&ds(n);if(c&&n==="length"){const p=Number(o);a.forEach((h,m)=>{(m==="length"||m===po||!_t(m)&&m>=p)&&r(h)})}else switch((n!==void 0||a.has(void 0))&&r(a.get(n)),u&&r(a.get(po)),t){case"add":c?u&&r(a.get("length")):(r(a.get(Cn)),hn(e)&&r(a.get(Fi)));break;case"delete":c||(r(a.get(Cn)),hn(e)&&r(a.get(Fi)));break;case"set":hn(e)&&r(a.get(Cn));break}}Ms()}function Pn(e){const t=Ye(e);return t===e||(Mt(t,"iterate",po),zt(e))?t:Xt(e)?mn(e)?t.map(n=>vn(kt(n))):t.map(vn):t.map(kt)}function di(e){return Mt(e=Ye(e),"iterate",po),e}function Vt(e,t){return Xt(e)?vn(mn(e)?kt(t):t):kt(t)}const Yl={__proto__:null,[Symbol.iterator](){return ki(this,Symbol.iterator,e=>Vt(this,e))},concat(...e){return Pn(this).concat(...e.map(t=>ye(t)?Pn(t):t))},entries(){return ki(this,"entries",e=>(e[1]=Vt(this,e[1]),e))},every(e,t){return tn(this,"every",e,t,void 0,arguments)},filter(e,t){return tn(this,"filter",e,t,n=>n.map(o=>Vt(this,o)),arguments)},find(e,t){return tn(this,"find",e,t,n=>Vt(this,n),arguments)},findIndex(e,t){return tn(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return tn(this,"findLast",e,t,n=>Vt(this,n),arguments)},findLastIndex(e,t){return tn(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return tn(this,"forEach",e,t,void 0,arguments)},includes(...e){return Si(this,"includes",e)},indexOf(...e){return Si(this,"indexOf",e)},join(e){return Pn(this).join(e)},lastIndexOf(...e){return Si(this,"lastIndexOf",e)},map(e,t){return tn(this,"map",e,t,void 0,arguments)},pop(){return Gn(this,"pop")},push(...e){return Gn(this,"push",e)},reduce(e,...t){return _s(this,"reduce",e,t)},reduceRight(e,...t){return _s(this,"reduceRight",e,t)},shift(){return Gn(this,"shift")},some(e,t){return tn(this,"some",e,t,void 0,arguments)},splice(...e){return Gn(this,"splice",e)},toReversed(){return Pn(this).toReversed()},toSorted(e){return Pn(this).toSorted(e)},toSpliced(...e){return Pn(this).toSpliced(...e)},unshift(...e){return Gn(this,"unshift",e)},values(){return ki(this,"values",e=>Vt(this,e))}};function ki(e,t,n){const o=di(e),i=o[t],s=i.call(o);if(o!==e&&!zt(e)){if(s[Symbol.toStringTag]==="Array Iterator"){const a=Object.create(Object.getPrototypeOf(s));return a.next=()=>Ps(s.next(),n),i!==Za[t]&&Object.defineProperties(a,{return:{get(){const r=s.return;return typeof r=="function"?r.bind(s):r}},throw:{get(){const r=s.throw;return typeof r=="function"?r.bind(s):r}}}),a}s._next=s.next,s.next=()=>Ps(s._next(),n)}return s}function Ps(e,t){return e.done||(e.value=t(e.value)),e}const Za=Array.prototype;function tn(e,t,n,o,i,s){const a=di(e),r=a!==e&&!zt(e),c=a[t];if(c!==Za[t]){const h=c.apply(e,s);return r?kt(h):h}let u=n;a!==e&&(r?u=function(h,m){return n.call(this,Vt(e,h),m,e)}:n.length>2&&(u=function(h,m){return n.call(this,h,m,e)}));const p=c.call(a,u,o);return r&&i?i(p):p}function _s(e,t,n,o){const i=di(e),s=i!==e&&!zt(e);let a=n,r=!1;i!==e&&(s?(r=o.length===0,a=function(u,p,h){return r&&(r=!1,u=Vt(e,u)),n.call(this,u,Vt(e,p),h,e)}):n.length>3&&(a=function(u,p,h){return n.call(this,u,p,h,e)}));const c=i[t](a,...o);return r?Vt(e,c):c}function Si(e,t,n){const o=Ye(e);Mt(o,"iterate",po);const i=o[t](...n);return(i===-1||i===!1)&&vs(n[0])?(n[0]=Ye(n[0]),o[t](...n)):i}function Gn(e,t,n=[]){Jt(),ps();const o=Ye(e)[t].apply(e,n);return Ms(),qt(),o}const Pl=cs("__proto__,__v_isRef,__isVue"),Ka=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(_t));function _l(e){_t(e)||(e=String(e));const t=Ye(this);return Mt(t,"has",e),t.hasOwnProperty(e)}class Ja{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,o){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return o===(i?s?Kl:tr:s?er:Xa).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const a=ye(t);if(!i){let c;if(a&&(c=Yl[n]))return c;if(n==="hasOwnProperty")return _l}const r=Reflect.get(t,n,gt(t)?t:o);if((_t(n)?Ka.has(n):Pl(n))||(i||Mt(t,"get",n),s))return r;if(gt(r)){const c=a&&ds(n)?r:r.value;return i&&$e(c)?Ki(c):c}return $e(r)?i?Ki(r):ms(r):r}}class qa extends Ja{constructor(t=!1){super(!1,t)}set(t,n,o,i){let s=t[n];const a=ye(t)&&ds(n);if(!this._isShallow){const u=Xt(s);if(!zt(o)&&!Xt(o)&&(s=Ye(s),o=Ye(o)),!a&&gt(s)&&!gt(o))return u||(s.value=o),!0}const r=a?Number(n)<t.length:_e(t,n),c=Reflect.set(t,n,o,gt(t)?t:i);return t===Ye(i)&&c&&(r?Zt(o,s)&&sn(t,"set",n,o):sn(t,"add",n,o)),c}deleteProperty(t,n){const o=_e(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&o&&sn(t,"delete",n,void 0),i}has(t,n){const o=Reflect.has(t,n);return(!_t(n)||!Ka.has(n))&&Mt(t,"has",n),o}ownKeys(t){return Mt(t,"iterate",ye(t)?"length":Cn),Reflect.ownKeys(t)}}class $l extends Ja{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Rl=new qa,Wl=new $l,Bl=new qa(!0);const Zi=e=>e,zo=e=>Reflect.getPrototypeOf(e);function Hl(e,t,n){return function(...o){const i=this.__v_raw,s=Ye(i),a=hn(s),r=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,u=i[e](...o),p=n?Zi:t?vn:kt;return!t&&Mt(s,"iterate",c?Fi:Cn),et(Object.create(u),{next(){const{value:h,done:m}=u.next();return m?{value:h,done:m}:{value:r?[p(h[0]),p(h[1])]:p(h),done:m}}})}}function Ao(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Vl(e,t){const n={get(i){const s=this.__v_raw,a=Ye(s),r=Ye(i);e||(Zt(i,r)&&Mt(a,"get",i),Mt(a,"get",r));const{has:c}=zo(a),u=t?Zi:e?vn:kt;if(c.call(a,i))return u(s.get(i));if(c.call(a,r))return u(s.get(r));s!==a&&s.get(i)},get size(){const i=this.__v_raw;return!e&&Mt(Ye(i),"iterate",Cn),i.size},has(i){const s=this.__v_raw,a=Ye(s),r=Ye(i);return e||(Zt(i,r)&&Mt(a,"has",i),Mt(a,"has",r)),i===r?s.has(i):s.has(i)||s.has(r)},forEach(i,s){const a=this,r=a.__v_raw,c=Ye(r),u=t?Zi:e?vn:kt;return!e&&Mt(c,"iterate",Cn),r.forEach((p,h)=>i.call(s,u(p),u(h),a))}};return et(n,e?{add:Ao("add"),set:Ao("set"),delete:Ao("delete"),clear:Ao("clear")}:{add(i){const s=Ye(this),a=zo(s),r=Ye(i),c=!t&&!zt(i)&&!Xt(i)?r:i;return a.has.call(s,c)||Zt(i,c)&&a.has.call(s,i)||Zt(r,c)&&a.has.call(s,r)||(s.add(c),sn(s,"add",c,c)),this},set(i,s){!t&&!zt(s)&&!Xt(s)&&(s=Ye(s));const a=Ye(this),{has:r,get:c}=zo(a);let u=r.call(a,i);u||(i=Ye(i),u=r.call(a,i));const p=c.call(a,i);return a.set(i,s),u?Zt(s,p)&&sn(a,"set",i,s):sn(a,"add",i,s),this},delete(i){const s=Ye(this),{has:a,get:r}=zo(s);let c=a.call(s,i);c||(i=Ye(i),c=a.call(s,i)),r&&r.call(s,i);const u=s.delete(i);return c&&sn(s,"delete",i,void 0),u},clear(){const i=Ye(this),s=i.size!==0,a=i.clear();return s&&sn(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Hl(i,e,t)}),n}function hs(e,t){const n=Vl(e,t);return(o,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_isShallow"?t:i==="__v_raw"?o:Reflect.get(_e(n,i)&&i in o?n:o,i,s)}const Gl={get:hs(!1,!1)},Fl={get:hs(!1,!0)},Zl={get:hs(!0,!1)};const Xa=new WeakMap,er=new WeakMap,tr=new WeakMap,Kl=new WeakMap;function Jl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ms(e){return Xt(e)?e:ys(e,!1,Rl,Gl,Xa)}function ql(e){return ys(e,!1,Bl,Fl,er)}function Ki(e){return ys(e,!0,Wl,Zl,tr)}function ys(e,t,n,o,i){if(!$e(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const s=i.get(e);if(s)return s;const a=Jl(xl(e));if(a===0)return e;const r=new Proxy(e,a===2?o:n);return i.set(e,r),r}function mn(e){return Xt(e)?mn(e.__v_raw):!!(e&&e.__v_isReactive)}function Xt(e){return!!(e&&e.__v_isReadonly)}function zt(e){return!!(e&&e.__v_isShallow)}function vs(e){return e?!!e.__v_raw:!1}function Ye(e){const t=e&&e.__v_raw;return t?Ye(t):e}function Xl(e){return!_e(e,"__v_skip")&&Object.isExtensible(e)&&Qa(e,"__v_skip",!0),e}const kt=e=>$e(e)?ms(e):e,vn=e=>$e(e)?Ki(e):e;function gt(e){return e?e.__v_isRef===!0:!1}function H(e){return ec(e,!1)}function ec(e,t){return gt(e)?e:new tc(e,t)}class tc{constructor(t,n){this.dep=new fs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Ye(t),this._value=n?t:kt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,o=this.__v_isShallow||zt(t)||Xt(t);t=o?t:Ye(t),Zt(t,n)&&(this._rawValue=t,this._value=o?t:kt(t),this.dep.trigger())}}function K(e){return gt(e)?e.value:e}const nc={get:(e,t,n)=>t==="__v_raw"?e:K(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const i=e[t];return gt(i)&&!gt(n)?(i.value=n,!0):Reflect.set(e,t,n,o)}};function nr(e){return mn(e)?e:new Proxy(e,nc)}class oc{constructor(t,n,o){this.fn=t,this.setter=n,this._value=void 0,this.dep=new fs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=uo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return Wa(this,!0),!0}get value(){const t=this.dep.track();return Va(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ic(e,t,n=!1){let o,i;return Ie(e)?o=e:(o=e.get,i=e.set),new oc(o,i,n)}const ko={},Bo=new WeakMap;let Tn;function sc(e,t=!1,n=Tn){if(n){let o=Bo.get(n);o||Bo.set(n,o=[]),o.push(e)}}function ac(e,t,n=Be){const{immediate:o,deep:i,once:s,scheduler:a,augmentJob:r,call:c}=n,u=S=>i?S:zt(S)||i===!1||i===0?an(S,1):an(S);let p,h,m,w,U=!1,Y=!1;if(gt(e)?(h=()=>e.value,U=zt(e)):mn(e)?(h=()=>u(e),U=!0):ye(e)?(Y=!0,U=e.some(S=>mn(S)||zt(S)),h=()=>e.map(S=>{if(gt(S))return S.value;if(mn(S))return u(S);if(Ie(S))return c?c(S,2):S()})):Ie(e)?t?h=c?()=>c(e,2):e:h=()=>{if(m){Jt();try{m()}finally{qt()}}const S=Tn;Tn=p;try{return c?c(e,3,[w]):e(w)}finally{Tn=S}}:h=Kt,t&&i){const S=h,Q=i===!0?1/0:i;h=()=>an(S(),Q)}const V=Ol(),ee=()=>{p.stop(),V&&V.active&&us(V.effects,p)};if(s&&t){const S=t;t=(...Q)=>{try{return S(...Q)}finally{ee()}}}let G=Y?new Array(e.length).fill(ko):ko;const te=S=>{if(!(!(p.flags&1)||!p.dirty&&!S))if(t){const Q=p.run();if(S||i||U||(Y?Q.some((I,L)=>Zt(I,G[L])):Zt(Q,G))){const I=Tn;Jt();try{m&&m(),Tn=p;const L=[Q,G===ko?void 0:Y&&G[0]===ko?[]:G,w];G=Q,c?c(t,3,L):t(...L)}finally{Tn=I,qt()}}}else p.run()};return r&&r(te),p=new $a(h),p.scheduler=a?()=>a(te,!1):te,w=S=>sc(S,!1,p),m=p.onStop=()=>{const S=Bo.get(p);if(S){if(c)c(S,4);else for(const Q of S)Q();Bo.delete(p)}},t?o?te(!0):G=p.run():a?a(te.bind(null,!0),!0):p.run(),ee.pause=p.pause.bind(p),ee.resume=p.resume.bind(p),ee.stop=ee,ee}function an(e,t=1/0,n){if(t<=0||!$e(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,gt(e))an(e.value,t,n);else if(ye(e))for(let o=0;o<e.length;o++)an(e[o],t,n);else if(On(e)||hn(e))e.forEach(o=>{an(o,t,n)});else if(Ua(e)){for(const o in e)an(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&an(e[o],t,n)}return e}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function No(e,t,n,o){try{return o?e(...o):e()}catch(i){xo(i,t,n)}}function St(e,t,n,o){if(Ie(e)){const i=No(e,t,n,o);return i&&Ca(i)&&i.catch(s=>{xo(s,t,n)}),i}if(ye(e)){const i=[];for(let s=0;s<e.length;s++)i.push(St(e[s],t,n,o));return i}}function xo(e,t,n,o=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Be;if(t){let r=t.parent;const c=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const p=r.ec;if(p){for(let h=0;h<p.length;h++)if(p[h](e,c,u)===!1)return}r=r.parent}if(s){Jt(),No(s,null,10,[e,c,u]),qt();return}}rc(e,n,i,o,a)}function rc(e,t,n,o=!0,i=!1){if(i)throw e;console.error(e)}const Nt=[];let Ot=-1;const Gt=[];let fn=null,_n=0;const or=Promise.resolve();let Ho=null;function ke(e){const t=Ho||or;return e?t.then(this?e.bind(this):e):t}function lc(e){let t=Ot+1,n=Nt.length;for(;t<n;){const o=t+n>>>1,i=Nt[o],s=Mo(i);s<e||s===e&&i.flags&2?t=o+1:n=o}return t}function Ns(e){if(!(e.flags&1)){const t=Mo(e),n=Nt[Nt.length-1];!n||!(e.flags&2)&&t>=Mo(n)?Nt.push(e):Nt.splice(lc(t),0,e),e.flags|=1,ir()}}function ir(){Ho||(Ho=or.then(rr))}function cc(e){if(!ye(e))fn&&e.id===-1?fn.splice(_n+1,0,e):e.flags&1||(Gt.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Gt.push(e[t]);ir()}function sr(e,t,n,o=Ot+1){for(;o<Nt.length;o++){const i=Nt[o];if(i&&i.flags&2){if(e&&i.id!==e.uid||t!==void 0&&!(i.id>=t))continue;Nt.splice(o,1),o=e?o-1:Ot,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ar(e,t,n=0){if(Gt.length){let o=Gt,i=0;if(t){o=[];for(let a=0;a<Gt.length;a++){const r=Gt[a];(r.i!==void 0?!r.i||r.i.uid<n:t.has(r))?Gt[i++]=r:o.push(r)}}const s=[...new Set(o)].sort((a,r)=>Mo(a)-Mo(r));if(Gt.length=i,fn){for(let a=0;a<s.length;a++)fn.push(s[a]);return}for(fn=s,_n=0;_n<fn.length;_n++){const a=fn[_n];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}fn=null,_n=0}}let Ei=!1;function uc(e,t){if(Ei){e();return}const n=t===void 0?void 0:new Set(Gt);e(),Ei=!0;try{sr(void 0,t),ar(void 0,n,t)}finally{Ei=!1}}const Mo=e=>e.id==null?e.flags&2?-1:1/0:e.id;function rr(e){try{for(Ot=0;Ot<Nt.length;Ot++){const t=Nt[Ot];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),No(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ot<Nt.length;Ot++){const t=Nt[Ot];t&&(t.flags&=-2)}Ot=-1,Nt.length=0,ar(),Ho=null,(Nt.length||Gt.length)&&rr()}}let dt=null,lr=null;function Vo(e){const t=dt;return dt=e,lr=e&&e.type.__scopeId||null,t}function Ke(e,t=dt,n){if(!t||e._n)return e;const o=(...i)=>{o._d&&Ko(-1);const s=Vo(t),a=ln.length;let r;try{r=e(...i)}finally{for(let c=ln.length;c>a;c--)ws();Vo(s),o._d&&Ko(1)}return r};return o._n=!0,o._c=!0,o._d=!0,o}function Xe(e,t){if(dt===null)return e;const n=vi(dt),o=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,a,r,c=Be]=t[i];s&&(Ie(s)&&(s={mounted:s,updated:s}),s.deep&&an(a),o.push({dir:s,instance:n,value:a,oldValue:void 0,arg:r,modifiers:c}))}return e}function Ln(e,t,n,o){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const r=i[a];s&&(r.oldValue=s[a].value);let c=r.dir[o];c&&(Jt(),St(c,n,8,[e.el,r,e,t]),qt())}}function dc(e,t){if(ut){let n=ut.provides;const o=ut.parent&&ut.parent.provides;o===n&&(n=ut.provides=Object.create(o)),n[e]=t}}function Po(e,t,n=!1){const o=yi();if(o||Rn){let i=Rn?Rn._context.provides:o?o.parent==null||o.ce?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&Ie(t)?t.call(o&&o.proxy):t}}const pc=Symbol.for("v-scx"),Mc=()=>Po(pc);function we(e,t,n){return cr(e,t,n)}function cr(e,t,n=Be){const{immediate:o,deep:i,flush:s,once:a}=n,r=et({},n),c=t&&o||!t&&s!=="post";let u;if(Bn){if(s==="sync"){const w=Mc();u=w.__watcherHandles||(w.__watcherHandles=[])}else if(!c){const w=()=>{};return w.stop=Kt,w.resume=Kt,w.pause=Kt,w}}const p=ut;r.call=(w,U,Y)=>St(w,p,U,Y);let h=!1;s==="post"?r.scheduler=w=>{w.i=p,vt(w,p&&p.suspense)}:s!=="sync"&&(h=!0,r.scheduler=(w,U)=>{U?w():Ns(w)}),r.augmentJob=w=>{t&&(w.flags|=4),h&&(w.flags|=2,p&&(w.id=p.uid,w.i=p))};const m=ac(e,t,r);return Bn&&(u?u.push(m):c&&m()),m}function gc(e,t,n){const o=this.proxy,i=Ge(e)?e.includes(".")?ur(o,e):()=>o[e]:e.bind(o,o);let s;Ie(t)?s=t:(s=t.handler,n=t);const a=jo(this),r=cr(i,s.bind(o),n);return a(),r}function ur(e,t){const n=t.split(".");return()=>{let o=e;for(let i=0;i<n.length&&o;i++)o=o[n[i]];return o}}const Mn=new WeakMap,dr=Symbol("_vte"),pi=e=>e.__isTeleport,zn=e=>e&&(e.disabled||e.disabled===""),fc=e=>e&&(e.defer||e.defer===""),$s=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Rs=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Ji=(e,t)=>{const n=e&&e.to;return Ge(n)?t?t(n):null:n},hc={name:"Teleport",__isTeleport:!0,process(e,t,n,o,i,s,a,r,c,u){const{mc:p,pc:h,pbc:m,o:{insert:w,querySelector:U,createText:Y,createComment:V,parentNode:ee}}=u,G=zn(t.props);let{dynamicChildren:te}=t;const S=(L,C,f)=>{L.shapeFlag&16&&p(L.children,C,f,i,s,a,r,c)},Q=(L=t)=>{const C=zn(L.props),f=L.target=Ji(L.props,U),W=qi(f,L,Y,w);f&&(a!=="svg"&&$s(f)?a="svg":a!=="mathml"&&Rs(f)&&(a="mathml"),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(f),C||(S(L,f,W),eo(L,!1)))},I=L=>{const C=()=>{if(Mn.get(L)===C){if(Mn.delete(L),zn(L.props)){const f=ee(L.el)||n;S(L,f,L.anchor),eo(L,!0)}Q(L)}};Mn.set(L,C),vt(C,s)};if(e==null){const L=t.el=Y(""),C=t.anchor=Y("");if(w(L,n,o),w(C,n,o),fc(t.props)||s&&s.pendingBranch){I(t);return}G&&(S(t,n,C),eo(t,!0)),Q()}else{t.el=e.el;const L=t.anchor=e.anchor,C=Mn.get(e);if(C){C.flags|=8,Mn.delete(e),I(t);return}t.targetStart=e.targetStart;const f=t.target=e.target,W=t.targetAnchor=e.targetAnchor,F=zn(e.props),O=F?n:f,q=F?L:W;if(a==="svg"||$s(f)?a="svg":(a==="mathml"||Rs(f))&&(a="mathml"),te?(m(e.dynamicChildren,te,O,i,s,a,r),Ds(e,t,!0)):c||h(e,t,O,q,i,s,a,r,!1),G)F?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):So(t,n,L,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const le=Ji(t.props,U);le&&(t.target=le,So(t,le,null,u,0))}else F&&So(t,f,W,u,1);eo(t,G)}},remove(e,t,n,{um:o,o:{remove:i}},s){const{shapeFlag:a,children:r,anchor:c,targetStart:u,targetAnchor:p,target:h,props:m}=e,w=zn(m),U=s||!w,Y=Mn.get(e);if(Y&&(Y.flags|=8,Mn.delete(e)),h&&(i(u),i(p)),s&&i(c),!Y&&(w||h)&&a&16)for(let V=0;V<r.length;V++){const ee=r[V];o(ee,t,n,U,!!ee.dynamicChildren)}},move:So,hydrate:mc};function So(e,t,n,{o:{insert:o},m:i},s=2){s===0&&(e.targetStart&&o(e.targetStart,t,n),o(e.targetAnchor,t,n),n=e.targetAnchor);const{el:a,anchor:r,shapeFlag:c,children:u,props:p}=e,h=s===2;if(h&&o(a,t,n),!Mn.has(e)&&(!h||zn(p))&&c&16)for(let m=0;m<u.length;m++)i(u[m],t,n,2);h&&o(r,t,n)}function mc(e,t,n,o,i,s,{o:{nextSibling:a,parentNode:r,querySelector:c,insert:u,createText:p}},h){function m(V,ee){let G=ee;for(;G;){if(G&&G.nodeType===8){if(G.data==="teleport start anchor")t.targetStart=G;else if(G.data==="teleport anchor"){t.targetAnchor=G,V._lpa=t.targetAnchor&&a(t.targetAnchor);break}}G=a(G)}}function w(V,ee){ee.anchor=h(a(V),ee,r(V),n,o,i,s)}const U=t.target=Ji(t.props,c),Y=zn(t.props);if(U){const V=U._lpa||U.firstChild;t.shapeFlag&16&&(Y?(w(e,t),m(U,V),t.targetAnchor||qi(U,t,p,u,r(e)===U?e:null)):(t.anchor=a(e),m(U,V),t.targetAnchor||qi(U,t,p,u),h(V&&a(V),t,U,n,o,i,s))),eo(t,Y)}else Y&&t.shapeFlag&16&&(w(e,t),t.targetStart=e,t.targetAnchor=a(e));return t.anchor&&a(t.anchor)}const pr=hc;function eo(e,t){const n=e.ctx;if(n&&n.ut){let o,i;for(t?(o=e.el,i=e.anchor):(o=e.targetStart,i=e.targetAnchor);o&&o!==i;)o.nodeType===1&&o.setAttribute("data-v-owner",n.uid),o=o.nextSibling;n.ut()}}function qi(e,t,n,o,i=null){const s=t.targetStart=n(""),a=t.targetAnchor=n("");return s[dr]=a,e&&(o(s,e,i),o(a,e,i)),a}const Tt=Symbol("_leaveCb"),Fn=Symbol("_enterCb");function Mr(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wt(()=>{e.isMounted=!0}),Et(()=>{e.isUnmounting=!0}),e}const It=[Function,Array],gr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:It,onEnter:It,onAfterEnter:It,onEnterCancelled:It,onBeforeLeave:It,onLeave:It,onAfterLeave:It,onLeaveCancelled:It,onBeforeAppear:It,onAppear:It,onAfterAppear:It,onAppearCancelled:It},yc={name:"BaseTransition",props:gr,setup(e,{slots:t}){const n=yi(),o=Mr();return()=>{const i=t.default&&xs(t.default(),!0),s=i&&i.length?fr(i):n.subTree?ge():void 0;if(!s)return;const a=Ye(e),{mode:r}=a;if(o.isLeaving)return Ci(s);const c=Go(s);if(!c)return Ci(s);let u=go(c,a,o,n,h=>u=h);c.type!==pt&&Nn(c,u);let p=n.subTree&&Go(n.subTree);if(p&&p.type!==pt&&!An(p,c)&&fo(n.subTree)){let h=go(p,a,o,n);if(Nn(p,h),r==="out-in"&&c.type!==pt)return o.isLeaving=!0,h.afterLeave=()=>{o.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave,p=void 0},Ci(s);r==="in-out"&&c.type!==pt?h.delayLeave=(m,w,U)=>{const Y=hr(o,p);Y[String(p.key)]=p,m[Tt]=()=>{w(),m[Tt]=void 0,delete u.delayedLeave,p=void 0},u.delayedLeave=()=>{U(),delete u.delayedLeave,p=void 0}}:p=void 0}else p&&(p=void 0);return s}}};function fr(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==pt){t=n;break}}return t}const vc=yc;function hr(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function go(e,t,n,o,i){const{appear:s,mode:a,persisted:r=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:p,onEnterCancelled:h,onBeforeLeave:m,onLeave:w,onAfterLeave:U,onLeaveCancelled:Y,onBeforeAppear:V,onAppear:ee,onAfterAppear:G,onAppearCancelled:te}=t,S=String(e.key),Q=hr(n,e),I=(f,W)=>{f&&St(f,o,9,W)},L=(f,W)=>{const F=W[1];I(f,W),ye(f)?f.every(O=>O.length<=1)&&F():f.length<=1&&F()},C={mode:a,persisted:r,beforeEnter(f){let W=c;if(!n.isMounted)if(s)W=V||c;else return;f[Tt]&&f[Tt](!0);const F=Q[S];if(F&&An(e,F)){let O=F.el[Tt];if(!O){const q=fo(F);O=q&&q.el[Tt]}O&&O()}I(W,[f])},enter(f){if(Q[S]===e)return;let W=u,F=p,O=h;if(!n.isMounted)if(s)W=ee||u,F=G||p,O=te||h;else return;let q=!1;f[Fn]=he=>{q||(q=!0,he?I(O,[f]):I(F,[f]),C.delayedLeave&&C.delayedLeave(),f[Fn]=void 0)};const le=f[Fn].bind(null,!1);W?L(W,[f,le]):le()},leave(f,W){const F=String(e.key);if(f[Fn]&&f[Fn](!0),n.isUnmounting)return W();I(m,[f]);let O=!1;f[Tt]=le=>{O||(O=!0,W(),le?I(Y,[f]):I(U,[f]),f[Tt]=void 0,Q[F]===e&&delete Q[F])};const q=f[Tt].bind(null,!1);Q[F]=e,w?L(w,[f,q]):q()},clone(f){const W=go(f,t,n,o,i);return i&&i(W),W}};return C}function Ci(e){if(bo(e))return e=xn(e),e.children=null,e}function Go(e){if(!bo(e))return pi(e.type)&&e.children?fr(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&Ie(n.default))return n.default()}}function Nn(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;Nn(pi(n.type)&&Go(n)||n,t)}else if(e.shapeFlag&128)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===me&&ye(e.children)){const n=Lr(e.children,!1);n&&Nn(n,t)}}function xs(e,t=!1,n){let o=[],i=0;for(let s=0;s<e.length;s++){let a=e[s];const r=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===me?(a.patchFlag&128&&i++,o=o.concat(xs(a.children,t,r))):(t||a.type!==pt)&&o.push(r!=null?xn(a,{key:r}):a)}if(i>1)for(let s=0;s<o.length;s++)o[s].patchFlag=-2;return o}function fo(e){if(e.component)return fo(e.component.subTree);if(e.type===me){const t=ye(e.children)&&Lr(e.children,!1);return t?fo(t):void 0}if(e.type!==pt)return e}function Ze(e,t){return Ie(e)?et({name:e.name},t,{setup:e}):e}function jn(){const e=yi();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function bs(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ws(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Fo=new WeakMap;function ao(e,t,n,o,i=!1){if(ye(e)){e.forEach((Y,V)=>ao(Y,t&&(ye(t)?t[V]:t),n,o,i));return}if($n(o)&&!i){o.shapeFlag&512&&o.type.__asyncResolved&&o.component.subTree.component&&ao(e,t,n,o.component.subTree);return}const s=o.shapeFlag&4?vi(o.component):o.el,a=i?null:s,{i:r,r:c}=e,u=t&&t.r,p=r.refs===Be?r.refs={}:r.refs,h=r.setupState,m=Ye(h),w=h===Be?Ea:Y=>Ws(p,Y)?!1:_e(m,Y),U=(Y,V)=>!(V&&Ws(p,V));if(u!=null&&u!==c){if(Bs(t),Ge(u))p[u]=null,w(u)&&(h[u]=null);else if(gt(u)){const Y=t;U(u,Y.k)&&(u.value=null),Y.k&&(p[Y.k]=null)}}if(Ie(c))No(c,r,12,[a,p]);else{const Y=Ge(c),V=gt(c);if(Y||V){const ee=()=>{if(e.f){const G=Y?w(c)?h[c]:p[c]:U()||!e.k?c.value:p[e.k];if(i)ye(G)&&us(G,s);else if(ye(G))G.includes(s)||G.push(s);else if(Y)p[c]=[s],w(c)&&(h[c]=p[c]);else{const te=[s];U(c,e.k)&&(c.value=te),e.k&&(p[e.k]=te)}}else Y?(p[c]=a,w(c)&&(h[c]=a)):V&&(U(c,e.k)&&(c.value=a),e.k&&(p[e.k]=a))};if(a){const G=()=>{ee(),Fo.delete(e)};G.id=-1,Fo.set(e,G),vt(G,n)}else Bs(e),ee()}}}function Bs(e){const t=Fo.get(e);t&&(t.flags|=8,Fo.delete(e))}const Hs=e=>e.nodeType===8;ui().requestIdleCallback;ui().cancelIdleCallback;function Nc(e,t){if(Hs(e)&&e.data==="["){let n=1,o=e.nextSibling;for(;o;){if(o.nodeType===1){if(t(o)===!1)break}else if(Hs(o))if(o.data==="]"){if(--n===0)break}else o.data==="["&&n++;o=o.nextSibling}}else t(e)}const $n=e=>!!e.type.__asyncLoader;function xc(e){Ie(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:o,delay:i=200,hydrate:s,timeout:a,suspensible:r=!0,onError:c}=e;let u=null,p,h=0;const m=()=>(h++,u=null,w()),w=()=>{let U;return u||(U=u=t().catch(Y=>{if(Y=Y instanceof Error?Y:new Error(String(Y)),c)return new Promise((V,ee)=>{c(Y,()=>V(m()),()=>ee(Y),h+1)});throw Y}).then(Y=>U!==u&&u?u:(Y&&(Y.__esModule||Y[Symbol.toStringTag]==="Module")&&(Y=Y.default),p=Y,Y)))};return Ze({name:"AsyncComponentWrapper",__asyncLoader:w,__asyncHydrate(U,Y,V){const ee=U.isConnected;let G=!1;(Y.bu||(Y.bu=[])).push(()=>G=!0);const te=()=>{G||!U.parentNode||ee&&!U.isConnected||V()},S=s?()=>{const Q=s(te,I=>Nc(U,I));Q&&(Y.bum||(Y.bum=[])).push(Q)}:te;p?S():w().then(()=>!Y.isUnmounted&&S())},get __asyncResolved(){return p},setup(){const U=ut;if(bs(U),p)return()=>Eo(p,U);const Y=Q=>{u=null,xo(Q,U,13,!o)};if(r&&U.suspense||Bn)return w().then(Q=>()=>Eo(Q,U)).catch(Q=>(Y(Q),()=>o?B(o,{error:Q}):null));const V=H(!1),ee=H(),G=H(!!i);let te,S;return fi(()=>{te!=null&&clearTimeout(te),S!=null&&clearTimeout(S)}),i&&(S=setTimeout(()=>{U.isUnmounted||(G.value=!1)},i)),a!=null&&(te=setTimeout(()=>{if(!U.isUnmounted&&!V.value&&!ee.value){const Q=new Error(`Async component timed out after ${a}ms.`);Y(Q),ee.value=Q}},a)),w().then(()=>{U.isUnmounted||(V.value=!0,U.parent&&bo(U.parent.vnode)&&U.parent.update())}).catch(Q=>{if(U.isUnmounted){u=null;return}Y(Q),ee.value=Q}),()=>{if(V.value&&p)return Eo(p,U);if(ee.value&&o)return B(o,{error:ee.value});if(n&&!G.value)return Eo(n,U)}}})}function Eo(e,t){const{ref:n,props:o,children:i,ce:s}=t.vnode,a=B(e,o,i);return a.ref=n,a.ce=s,delete t.vnode.ce,a}const bo=e=>e.type.__isKeepAlive;function bc(e,t){mr(e,"a",t)}function jc(e,t){mr(e,"da",t)}function mr(e,t,n=ut){const o=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Mi(t,o,n),n){let i=n.parent;for(;i&&i.parent;)bo(i.parent.vnode)&&Lc(o,t,n,i),i=i.parent}}function Lc(e,t,n,o){const i=Mi(t,e,o,!0);fi(()=>{us(o[t],i)},n)}function Mi(e,t,n=ut,o=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{Jt();const r=jo(n),c=St(t,n,e,a);return r(),qt(),c});return o?i.unshift(s):i.push(s),s}}const cn=e=>(t,n=ut)=>{(!Bn||e==="sp")&&Mi(e,(...o)=>t(...o),n)},Dc=cn("bm"),wt=cn("m"),wc=cn("bu"),gi=cn("u"),Et=cn("bum"),fi=cn("um"),Ic=cn("sp"),Tc=cn("rtg"),zc=cn("rtc");function Ac(e,t=ut){Mi("ec",e,t)}const kc="components",yr=Symbol.for("v-ndc");function rn(e){return Ge(e)?Sc(kc,e,!1)||e:e||yr}function Sc(e,t,n=!0,o=!1){const i=dt||ut;if(i){const s=i.type;{const r=fu(s,!1);if(r&&(r===t||r===xt(t)||r===li(xt(t))))return s}const a=Vs(i[e]||s[e],t)||Vs(i.appContext[e],t);return!a&&o?s:a}}function Vs(e,t){return e&&(e[t]||e[xt(t)]||e[li(xt(t))])}function Pe(e,t,n,o){let i;const s=n,a=ye(e);if(a||Ge(e)){const r=a&&mn(e);let c=!1,u=!1;r&&(c=!zt(e),u=Xt(e),e=di(e)),i=new Array(e.length);for(let p=0,h=e.length;p<h;p++)i[p]=t(c?u?vn(kt(e[p])):kt(e[p]):e[p],p,void 0,s)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)i=[];else{i=new Array(e);for(let r=0;r<e;r++)i[r]=t(r+1,r,void 0,s)}else if($e(e))if(e[Symbol.iterator])i=Array.from(e,(r,c)=>t(r,c,void 0,s));else{const r=Object.keys(e);i=new Array(r.length);for(let c=0,u=r.length;c<u;c++){const p=r[c];i[c]=t(e[p],p,c,s)}}else i=[];return i}function Gs(e,t,n,o,i,s){if(n==null&&(n={}),dt.ce||dt.parent&&$n(dt.parent)&&dt.parent.ce){const u=n,p=Object.keys(u).length>0;return t!=="default"&&(u.name=t),y(),Ne(me,null,[B("slot",u,o)],p?-2:64)}let a=e[t];a&&a._c&&(a._d=!1);const r=ln.length;y();let c;try{const u=a&&vr(a(n)),p=n.key||s||u&&u.key;c=Ne(me,{key:(p&&!_t(p)?p:`_${t}`)+(!u&&o?"_fb":"")},u||(o?o():[]),u&&e._===1?64:-2)}catch(u){for(let p=ln.length;p>r;p--)ws();throw u}finally{a&&a._c&&(a._d=!0)}return c}function vr(e){return e.some(t=>Wn(t)?!(t.type===pt||t.type===me&&!vr(t.children)):!0)?e:null}const Xi=e=>e?_r(e)?vi(e):Xi(e.parent):null,ro=et(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xi(e.parent),$root:e=>Xi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>xr(e),$forceUpdate:e=>e.f||(e.f=()=>{Ns(e.update)}),$nextTick:e=>e.n||(e.n=ke.bind(e.proxy)),$watch:e=>gc.bind(e)}),Oi=(e,t)=>e!==Be&&!e.__isScriptSetup&&_e(e,t),Ec={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:o,data:i,props:s,accessCache:a,type:r,appContext:c}=e;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return o[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(Oi(o,t))return a[t]=1,o[t];if(i!==Be&&_e(i,t))return a[t]=2,i[t];if(_e(s,t))return a[t]=3,s[t];if(n!==Be&&_e(n,t))return a[t]=4,n[t];es&&(a[t]=0)}}const u=ro[t];let p,h;if(u)return t==="$attrs"&&Mt(e.attrs,"get",""),u(e);if((p=r.__cssModules)&&(p=p[t]))return p;if(n!==Be&&_e(n,t))return a[t]=4,n[t];if(h=c.config.globalProperties,_e(h,t))return h[t]},set({_:e},t,n){const{data:o,setupState:i,ctx:s}=e;return Oi(i,t)?(i[t]=n,!0):o!==Be&&_e(o,t)?(o[t]=n,!0):_e(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:i,props:s,type:a}},r){let c;return!!(n[r]||e!==Be&&r[0]!=="$"&&_e(e,r)||Oi(t,r)||_e(s,r)||_e(o,r)||_e(ro,r)||_e(i.config.globalProperties,r)||(c=a.__cssModules)&&c[r])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:_e(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Fs(e){return ye(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let es=!0;function Cc(e){const t=xr(e),n=e.proxy,o=e.ctx;es=!1,t.beforeCreate&&Zs(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:r,provide:c,inject:u,created:p,beforeMount:h,mounted:m,beforeUpdate:w,updated:U,activated:Y,deactivated:V,beforeDestroy:ee,beforeUnmount:G,destroyed:te,unmounted:S,render:Q,renderTracked:I,renderTriggered:L,errorCaptured:C,serverPrefetch:f,expose:W,inheritAttrs:F,components:O,directives:q,filters:le}=t;if(u&&Oc(u,o,null),a)for(const ae in a){const pe=a[ae];Ie(pe)&&(o[ae]=pe.bind(n))}if(i){const ae=i.call(n,n);$e(ae)&&(e.data=ms(ae))}if(es=!0,s)for(const ae in s){const pe=s[ae],Z=Ie(pe)?pe.bind(n,n):Ie(pe.get)?pe.get.bind(n,n):Kt,E=!Ie(pe)&&Ie(pe.set)?pe.set.bind(n):Kt,R=je({get:Z,set:E});Object.defineProperty(o,ae,{enumerable:!0,configurable:!0,get:()=>R.value,set:oe=>R.value=oe})}if(r)for(const ae in r)Nr(r[ae],o,n,ae);if(c){const ae=Ie(c)?c.call(n):c;Reflect.ownKeys(ae).forEach(pe=>{dc(pe,ae[pe])})}p&&Zs(p,e,"c");function se(ae,pe){ye(pe)?pe.forEach(Z=>ae(Z.bind(n))):pe&&ae(pe.bind(n))}if(se(Dc,h),se(wt,m),se(wc,w),se(gi,U),se(bc,Y),se(jc,V),se(Ac,C),se(zc,I),se(Tc,L),se(Et,G),se(fi,S),se(Ic,f),ye(W))if(W.length){const ae=e.exposed||(e.exposed={});W.forEach(pe=>{Object.defineProperty(ae,pe,{get:()=>n[pe],set:Z=>n[pe]=Z,enumerable:!0})})}else e.exposed||(e.exposed={});Q&&e.render===Kt&&(e.render=Q),F!=null&&(e.inheritAttrs=F),O&&(e.components=O),q&&(e.directives=q),f&&bs(e)}function Oc(e,t,n=Kt){ye(e)&&(e=ts(e));for(const o in e){const i=e[o];let s;$e(i)?"default"in i?s=Po(i.from||o,i.default,!0):s=Po(i.from||o):s=Po(i),gt(s)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[o]=s}}function Zs(e,t,n){St(ye(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function Nr(e,t,n,o){let i=o.includes(".")?ur(n,o):()=>n[o];if(Ge(e)){const s=t[e];Ie(s)&&we(i,s)}else if(Ie(e))we(i,e.bind(n));else if($e(e))if(ye(e))e.forEach(s=>Nr(s,t,n,o));else{const s=Ie(e.handler)?e.handler.bind(n):t[e.handler];Ie(s)&&we(i,s,e)}}function xr(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,r=s.get(t);let c;return r?c=r:!i.length&&!n&&!o?c=t:(c={},i.length&&i.forEach(u=>Zo(c,u,a,!0)),Zo(c,t,a)),$e(t)&&s.set(t,c),c}function Zo(e,t,n,o=!1){const{mixins:i,extends:s}=t;s&&Zo(e,s,n,!0),i&&i.forEach(a=>Zo(e,a,n,!0));for(const a in t)if(!(o&&a==="expose")){const r=Uc[a]||n&&n[a];e[a]=r?r(e[a],t[a]):t[a]}return e}const Uc={data:Ks,props:Js,emits:Js,methods:to,computed:to,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:to,directives:to,watch:Yc,provide:Ks,inject:Qc};function Ks(e,t){return t?e?function(){return et(Ie(e)?e.call(this,this):e,Ie(t)?t.call(this,this):t)}:t:e}function Qc(e,t){return to(ts(e),ts(t))}function ts(e){if(ye(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function mt(e,t){return e?[...new Set([].concat(e,t))]:t}function to(e,t){return e?et(Object.create(null),e,t):t}function Js(e,t){return e?ye(e)&&ye(t)?[...new Set([...e,...t])]:et(Object.create(null),Fs(e),Fs(t??{})):t}function Yc(e,t){if(!e)return t;if(!t)return e;const n=et(Object.create(null),e);for(const o in t)n[o]=mt(e[o],t[o]);return n}function br(){return{app:null,config:{isNativeTag:Ea,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pc=0;function _c(e,t){return function(o,i=null){Ie(o)||(o=et({},o)),i!=null&&!$e(i)&&(i=null);const s=br(),a=new WeakSet,r=[];let c=!1;const u=s.app={_uid:Pc++,_component:o,_props:i,_container:null,_context:s,_instance:null,version:mu,get config(){return s.config},set config(p){},use(p,...h){return a.has(p)||(p&&Ie(p.install)?(a.add(p),p.install(u,...h)):Ie(p)&&(a.add(p),p(u,...h))),u},mixin(p){return s.mixins.includes(p)||s.mixins.push(p),u},component(p,h){return h?(s.components[p]=h,u):s.components[p]},directive(p,h){return h?(s.directives[p]=h,u):s.directives[p]},mount(p,h,m){if(!c){const w=u._ceVNode||B(o,i);return w.appContext=s,m===!0?m="svg":m===!1&&(m=void 0),e(w,p,m),c=!0,u._container=p,p.__vue_app__=u,vi(w.component)}},onUnmount(p){r.push(p)},unmount(){c&&(St(r,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(p,h){return s.provides[p]=h,u},runWithContext(p){const h=Rn;Rn=u;try{return p()}finally{Rn=h}}};return u}}let Rn=null;const $c=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${xt(t)}Modifiers`]||e[`${bn(t)}Modifiers`];function Rc(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||Be;let i=n;const s=t.startsWith("update:"),a=s&&$c(o,t.slice(7));a&&(a.trim&&(i=n.map(p=>Ge(p)?p.trim():p)),a.number&&(i=i.map(ci)));let r,c=o[r=Ti(t)]||o[r=Ti(xt(t))];!c&&s&&(c=o[r=Ti(bn(t))]),c&&St(c,e,6,i);const u=o[r+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,St(u,e,6,i)}}const Wc=new WeakMap;function jr(e,t,n=!1){const o=n?Wc:t.emitsCache,i=o.get(e);if(i!==void 0)return i;const s=e.emits;let a={},r=!1;if(!Ie(e)){const c=u=>{const p=jr(u,t,!0);p&&(r=!0,et(a,p))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!r?($e(e)&&o.set(e,null),null):(ye(s)?s.forEach(c=>a[c]=null):et(a,s),$e(e)&&o.set(e,a),a)}function hi(e,t){return!e||!si(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),_e(e,t[0].toLowerCase()+t.slice(1))||_e(e,bn(t))||_e(e,t))}function qs(e){const{type:t,vnode:n,proxy:o,withProxy:i,propsOptions:[s],slots:a,attrs:r,emit:c,render:u,renderCache:p,props:h,data:m,setupState:w,ctx:U,inheritAttrs:Y}=e,V=Vo(e);let ee,G;try{if(n.shapeFlag&4){const S=i||o,Q=S;ee=Ft(u.call(Q,S,p,h,w,m,U)),G=r}else{const S=t;ee=Ft(S.length>1?S(h,{attrs:r,slots:a,emit:c}):S(h,null)),G=t.props?r:Bc(r)}}catch(S){ln.length=0,xo(S,e,1),ee=B(pt)}let te=ee;if(G&&Y!==!1){const S=Object.keys(G),{shapeFlag:Q}=te;S.length&&Q&7&&(s&&S.some(ai)&&(G=Hc(G,s)),te=xn(te,G,!1,!0))}if(n.dirs&&(te=xn(te,null,!1,!0),te.dirs=te.dirs?te.dirs.concat(n.dirs):n.dirs),n.transition){const S=pi(te.type)&&Go(te)||te;Nn(S,n.transition)}return ee=te,Vo(V),ee}function Lr(e,t=!0){let n;for(let o=0;o<e.length;o++){const i=e[o];if(Wn(i)){if(i.type!==pt||i.children==="v-if"){if(n)return;n=i}}else return}return n}const Bc=e=>{let t;for(const n in e)(n==="class"||n==="style"||si(n))&&((t||(t={}))[n]=e[n]);return t},Hc=(e,t)=>{const n={};for(const o in e)(!ai(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function Vc(e,t,n){const{props:o,children:i,component:s}=e,{props:a,children:r,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return o?Xs(o,a,u):!!a;if(c&8){const p=t.dynamicProps;for(let h=0;h<p.length;h++){const m=p[h];if(Dr(a,o,m)&&!hi(u,m))return!0}}}else return(i||r)&&(!r||!r.$stable)?!0:o===a?!1:o?a?Xs(o,a,u):!0:!!a;return!1}function Xs(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let i=0;i<o.length;i++){const s=o[i];if(!_e(e,s)||Dr(t,e,s)&&!hi(n,s))return!0}return!1}function Dr(e,t,n){const o=e[n],i=t[n];return n==="style"&&$e(o)&&$e(i)?!yn(o,i):o!==i}function Gc({vnode:e,parent:t,suspense:n},o){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.suspense.vnode.el=i.el=o,e=i),i===e)(e=t.vnode).el=o,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=o)}const wr={},Ir=()=>Object.create(wr),Tr=e=>Object.getPrototypeOf(e)===wr;function Fc(e,t,n,o=!1){const i={},s=Ir();e.propsDefaults=Object.create(null),zr(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);n?e.props=o?i:ql(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Zc(e,t,n,o){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,r=Ye(i),[c]=e.propsOptions;let u=!1;if((o||a>0)&&!(a&16)){if(a&8){const p=e.vnode.dynamicProps;for(let h=0;h<p.length;h++){let m=p[h];if(hi(e.emitsOptions,m))continue;const w=t[m];if(c)if(_e(s,m))w!==s[m]&&(s[m]=w,u=!0);else{const U=xt(m);i[U]=ns(c,r,U,w,e,!1)}else w!==s[m]&&(s[m]=w,u=!0)}}}else{zr(e,t,i,s)&&(u=!0);let p;for(const h in r)(!t||!_e(t,h)&&((p=bn(h))===h||!_e(t,p)))&&(c?n&&(n[h]!==void 0||n[p]!==void 0)&&(i[h]=ns(c,r,h,void 0,e,!0)):delete i[h]);if(s!==r)for(const h in s)(!t||!_e(t,h))&&(delete s[h],u=!0)}u&&sn(e.attrs,"set","")}function zr(e,t,n,o){const[i,s]=e.propsOptions;let a=!1,r;if(t)for(let c in t){if(oo(c))continue;const u=t[c];let p;i&&_e(i,p=xt(c))?!s||!s.includes(p)?n[p]=u:(r||(r={}))[p]=u:hi(e.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,a=!0)}if(s){const c=Ye(n),u=r||Be;for(let p=0;p<s.length;p++){const h=s[p];n[h]=ns(i,c,h,u[h],e,!_e(u,h))}}return a}function ns(e,t,n,o,i,s){const a=e[n];if(a!=null){const r=_e(a,"default");if(r&&o===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&Ie(c)){const{propsDefaults:u}=i;if(n in u)o=u[n];else{const p=jo(i);o=u[n]=c.call(null,t),p()}}else o=c;i.ce&&i.ce._setProp(n,o)}a[0]&&(s&&!r?o=!1:a[1]&&(o===""||o===bn(n))&&(o=!0))}return o}const Kc=new WeakMap;function Ar(e,t,n=!1){const o=n?Kc:t.propsCache,i=o.get(e);if(i)return i;const s=e.props,a={},r=[];let c=!1;if(!Ie(e)){const p=h=>{c=!0;const[m,w]=Ar(h,t,!0);et(a,m),w&&r.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!s&&!c)return $e(e)&&o.set(e,Sn),Sn;if(ye(s))for(let p=0;p<s.length;p++){const h=xt(s[p]);ea(h)&&(a[h]=Be)}else if(s)for(const p in s){const h=xt(p);if(ea(h)){const m=s[p],w=a[h]=ye(m)||Ie(m)?{type:m}:et({},m),U=w.type;let Y=!1,V=!0;if(ye(U))for(let ee=0;ee<U.length;++ee){const G=U[ee],te=Ie(G)&&G.name;if(te==="Boolean"){Y=!0;break}else te==="String"&&(V=!1)}else Y=Ie(U)&&U.name==="Boolean";w[0]=Y,w[1]=V,(Y||_e(w,"default"))&&r.push(h)}}const u=[a,r];return $e(e)&&o.set(e,u),u}function ea(e){return e[0]!=="$"&&!oo(e)}const js=e=>e==="_"||e==="_ctx"||e==="$stable",Ls=e=>ye(e)?e.map(Ft):[Ft(e)],Jc=(e,t,n)=>{if(t._n)return t;const o=Ke((...i)=>Ls(t(...i)),n);return o._c=!1,o},kr=(e,t,n)=>{const o=e._ctx;for(const i in e){if(js(i))continue;const s=e[i];if(Ie(s))t[i]=Jc(i,s,o);else if(s!=null){const a=Ls(s);t[i]=()=>a}}},Sr=(e,t)=>{const n=Ls(t);e.slots.default=()=>n},Er=(e,t,n)=>{for(const o in t)(n||!js(o))&&(e[o]=t[o])},qc=(e,t,n)=>{const o=e.slots=Ir();if(e.vnode.shapeFlag&32){const i=t._;i?(Er(o,t,n),n&&Qa(o,"_",i,!0)):kr(t,o)}else t&&Sr(e,t)},Xc=(e,t,n)=>{const{vnode:o,slots:i}=e;let s=!0,a=Be;if(o.shapeFlag&32){const r=t._;r?n&&r===1?s=!1:Er(i,t,n):(s=!t.$stable,kr(t,i)),a=t}else t&&(Sr(e,t),a={default:1});if(s)for(const r in i)!js(r)&&a[r]==null&&delete i[r]},vt=iu;function eu(e){return tu(e)}function tu(e,t){const n=ui();n.__VUE__=!0;const{insert:o,remove:i,patchProp:s,createElement:a,createText:r,createComment:c,setText:u,setElementText:p,parentNode:h,nextSibling:m,setScopeId:w=Kt,insertStaticContent:U}=e,Y=(g,d,x,T=null,b=null,D=null,j=void 0,M=null,A=!!d.dynamicChildren)=>{if(g===d)return;g&&!An(g,d)&&(T=Oe(g),oe(g,b,D,!0),g=null),d.patchFlag===-2&&(A=!1,d.dynamicChildren=null),d.dynamicChildren&&g&&g.dynamicChildren&&g.dynamicChildren.hasOnce&&(d.dynamicChildren===Sn&&(d.dynamicChildren=[]),d.dynamicChildren.hasOnce=!0);const{type:$,ref:ue,shapeFlag:_}=d;switch($){case mi:V(g,d,x,T);break;case pt:ee(g,d,x,T);break;case _o:g==null&&G(d,x,T,j);break;case me:O(g,d,x,T,b,D,j,M,A);break;default:_&1?Q(g,d,x,T,b,D,j,M,A):_&6?q(g,d,x,T,b,D,j,M,A):(_&64||_&128)&&$.process(g,d,x,T,b,D,j,M,A,Fe)}ue!=null&&b?ao(ue,g&&g.ref,D,d||g,!d):ue==null&&g&&g.ref!=null&&ao(g.ref,null,D,g,!0)},V=(g,d,x,T)=>{if(g==null)o(d.el=r(d.children),x,T);else{const b=d.el=g.el;d.children!==g.children&&u(b,d.children)}},ee=(g,d,x,T)=>{g==null?o(d.el=c(d.children||""),x,T):d.el=g.el},G=(g,d,x,T)=>{[g.el,g.anchor]=U(g.children,d,x,T,g.el,g.anchor)},te=({el:g,anchor:d},x,T)=>{let b;for(;g&&g!==d;)b=m(g),o(g,x,T),g=b;o(d,x,T)},S=({el:g,anchor:d})=>{let x;for(;g&&g!==d;)x=m(g),i(g),g=x;i(d)},Q=(g,d,x,T,b,D,j,M,A)=>{if(d.type==="svg"?j="svg":d.type==="math"&&(j="mathml"),g==null)I(d,x,T,b,D,j,M,A);else{const $=g.el&&g.el._isVueCE?g.el:null;try{$&&$._beginPatch(),f(g,d,b,D,j,M,A)}finally{$&&$._endPatch()}}},I=(g,d,x,T,b,D,j,M)=>{let A,$;const{props:ue,shapeFlag:_,transition:v,dirs:J}=g;if(A=g.el=a(g.type,D,ue&&ue.is,ue),_&8?p(A,g.children):_&16&&C(g.children,A,null,T,b,Ui(g,D),j,M),J&&Ln(g,null,T,"created"),L(A,g,g.scopeId,j,T),ue){for(const be in ue)be!=="value"&&!oo(be)&&s(A,be,null,ue[be],D,T);"value"in ue&&s(A,"value",null,ue.value,D),($=ue.onVnodeBeforeMount)&&Bt($,T,g)}J&&Ln(g,null,T,"beforeMount");const re=nu(b,v);re&&v.beforeEnter(A),o(A,d,x),(($=ue&&ue.onVnodeMounted)||re||J)&&vt(()=>{try{$&&Bt($,T,g),re&&v.enter(A),J&&Ln(g,null,T,"mounted")}finally{}},b)},L=(g,d,x,T,b)=>{if(x&&w(g,x),T)for(let D=0;D<T.length;D++)w(g,T[D]);if(b){let D=b.subTree;if(d===D||Or(D.type)&&(D.ssContent===d||D.ssFallback===d)){const j=b.vnode;L(g,j,j.scopeId,j.slotScopeIds,b.parent)}}},C=(g,d,x,T,b,D,j,M,A=0)=>{for(let $=A;$<g.length;$++){const ue=g[$]=M?on(g[$]):Ft(g[$]);Y(null,ue,d,x,T,b,D,j,M)}},f=(g,d,x,T,b,D,j)=>{const M=d.el=g.el;let{patchFlag:A,dynamicChildren:$,dirs:ue}=d;A|=g.patchFlag&16;const _=g.props||Be,v=d.props||Be;let J;if(x&&Dn(x,!1),(J=v.onVnodeBeforeUpdate)&&Bt(J,x,d,g),ue&&Ln(d,g,x,"beforeUpdate"),x&&Dn(x,!0),$&&(!g.dynamicChildren||g.dynamicChildren.length!==$.length)&&(A=0,j=!1,$=null),(_.innerHTML&&v.innerHTML==null||_.textContent&&v.textContent==null)&&p(M,""),$?W(g.dynamicChildren,$,M,x,T,Ui(d,b),D):j||pe(g,d,M,null,x,T,Ui(d,b),D,!1),A>0){if(A&16)F(M,_,v,x,b);else if(A&2&&_.class!==v.class&&s(M,"class",null,v.class,b),A&4&&s(M,"style",_.style,v.style,b),A&8){const re=d.dynamicProps;for(let be=0;be<re.length;be++){const ze=re[be],Se=_[ze],We=v[ze];(We!==Se||ze==="value")&&s(M,ze,Se,We,b,x)}}A&1&&g.children!==d.children&&p(M,d.children)}else!j&&$==null&&F(M,_,v,x,b);((J=v.onVnodeUpdated)||ue)&&vt(()=>{J&&Bt(J,x,d,g),ue&&Ln(d,g,x,"updated")},T)},W=(g,d,x,T,b,D,j)=>{for(let M=0;M<d.length;M++){const A=g[M],$=d[M],ue=A.el||os(A),_=ue&&(A.type===me||!An(A,$)||A.shapeFlag&198)?h(ue):x;Y(A,$,_,null,T,b,D,j,!0)}},F=(g,d,x,T,b)=>{if(d!==x){if(d!==Be)for(const D in d)!oo(D)&&!(D in x)&&s(g,D,d[D],null,b,T);for(const D in x){if(oo(D))continue;const j=x[D],M=d[D];j!==M&&D!=="value"&&s(g,D,M,j,b,T)}"value"in x&&s(g,"value",d.value,x.value,b)}},O=(g,d,x,T,b,D,j,M,A)=>{const $=d.el=g?g.el:r(""),ue=d.anchor=g?g.anchor:r("");let{patchFlag:_,dynamicChildren:v,slotScopeIds:J}=d;J&&(M=M?M.concat(J):J),g==null?(o($,x,T),o(ue,x,T),C(d.children||[],x,ue,b,D,j,M,A)):_>0&&_&64&&v&&g.dynamicChildren&&g.dynamicChildren.length===v.length?(W(g.dynamicChildren,v,x,b,D,j,M),(d.key!=null||b&&d===b.subTree)&&Ds(g,d,!0)):pe(g,d,x,ue,b,D,j,M,A)},q=(g,d,x,T,b,D,j,M,A)=>{d.slotScopeIds=M,g==null?d.shapeFlag&512?b.ctx.activate(d,x,T,j,A):le(d,x,T,b,D,j,A):he(g,d,A)},le=(g,d,x,T,b,D,j)=>{const M=g.component=uu(g,T,b);if(bo(g)&&(M.ctx.renderer=Fe),du(M,!1,j),M.asyncDep){if(b&&b.registerDep(M,se,j,D),!g.el){const A=M.subTree=B(pt);ee(null,A,d,x),g.placeholder=A.el}}else se(M,g,d,x,b,D,j)},he=(g,d,x)=>{const T=d.component=g.component;if(Vc(g,d,x))if(T.asyncDep&&!T.asyncResolved){d.el=g.el,d.placeholder=g.placeholder,ae(T,d,x);return}else T.next=d,T.update();else d.el=g.el,d.placeholder=g.placeholder,T.vnode=d},se=(g,d,x,T,b,D,j)=>{const M=()=>{if(g.isMounted){let{next:_,bu:v,u:J,parent:re,vnode:be}=g;{const He=Cr(g);if(He){_&&(_.el=be.el,ae(g,_,j)),He.asyncDep.then(()=>{vt(()=>{g.isUnmounted||$()},b)});return}}let ze=_,Se;Dn(g,!1),_?(_.el=be.el,ae(g,_,j)):_=be,v&&Yo(v),(Se=_.props&&_.props.onVnodeBeforeUpdate)&&Bt(Se,re,_,be),Dn(g,!0);const We=qs(g),tt=g.subTree;g.subTree=We,Y(tt,We,h(tt.el),Oe(tt),g,b,D),_.el=We.el,ze===null&&Gc(g,We.el),J&&vt(J,b),(Se=_.props&&_.props.onVnodeUpdated)&&vt(()=>Bt(Se,re,_,be),b)}else{let _;const{el:v,props:J}=d,{bm:re,m:be,parent:ze,root:Se,type:We}=g,tt=$n(d);Dn(g,!1),re&&Yo(re),!tt&&(_=J&&J.onVnodeBeforeMount)&&Bt(_,ze,d),Dn(g,!0);{Se.ce&&Se.ce._hasShadowRoot()&&Se.ce._injectChildStyle(We,g.parent?g.parent.type:void 0);const He=g.subTree=qs(g);Y(null,He,x,T,g,b,D),d.el=He.el}if(be&&vt(be,b),!tt&&(_=J&&J.onVnodeMounted)){const He=d;vt(()=>Bt(_,ze,He),b)}(d.shapeFlag&256||ze&&$n(ze.vnode)&&ze.vnode.shapeFlag&256)&&g.a&&vt(g.a,b),g.isMounted=!0,d=x=T=null}};g.scope.on();const A=g.effect=new $a(M);g.scope.off();const $=g.update=A.run.bind(A),ue=g.job=A.runIfDirty.bind(A);ue.i=g,ue.id=g.uid,A.scheduler=()=>Ns(ue),Dn(g,!0),$()},ae=(g,d,x)=>{d.component=g;const T=g.vnode.props;g.vnode=d,g.next=null,Zc(g,d.props,T,x),Xc(g,d.children,x),Jt(),sr(g),qt()},pe=(g,d,x,T,b,D,j,M,A=!1)=>{const $=g&&g.children,ue=g?g.shapeFlag:0,_=d.children,{patchFlag:v,shapeFlag:J}=d;if(v>0){if(v&128){E($,_,x,T,b,D,j,M,A);return}else if(v&256){Z($,_,x,T,b,D,j,M,A);return}}J&8?(ue&16&&Te($,b,D),_!==$&&p(x,_)):ue&16?J&16?E($,_,x,T,b,D,j,M,A):Te($,b,D,!0):(ue&8&&p(x,""),J&16&&C(_,x,T,b,D,j,M,A))},Z=(g,d,x,T,b,D,j,M,A)=>{g=g||Sn,d=d||Sn;const $=g.length,ue=d.length,_=Math.min($,ue);let v;for(v=0;v<_;v++){const J=d[v]=A?on(d[v]):Ft(d[v]);Y(g[v],J,x,null,b,D,j,M,A)}$>ue?Te(g,b,D,!0,!1,_):C(d,x,T,b,D,j,M,A,_)},E=(g,d,x,T,b,D,j,M,A)=>{let $=0;const ue=d.length;let _=g.length-1,v=ue-1;for(;$<=_&&$<=v;){const J=g[$],re=d[$]=A?on(d[$]):Ft(d[$]);if(An(J,re))Y(J,re,x,null,b,D,j,M,A);else break;$++}for(;$<=_&&$<=v;){const J=g[_],re=d[v]=A?on(d[v]):Ft(d[v]);if(An(J,re))Y(J,re,x,null,b,D,j,M,A);else break;_--,v--}if($>_){if($<=v){const J=v+1,re=J<ue?d[J].el:T;for(;$<=v;)Y(null,d[$]=A?on(d[$]):Ft(d[$]),x,re,b,D,j,M,A),$++}}else if($>v)for(;$<=_;)oe(g[$],b,D,!0),$++;else{const J=$,re=$,be=new Map;for($=re;$<=v;$++){const st=d[$]=A?on(d[$]):Ft(d[$]);st.key!=null&&be.set(st.key,$)}let ze,Se=0;const We=v-re+1;let tt=!1,He=0;const qe=new Array(We);for($=0;$<We;$++)qe[$]=0;for($=J;$<=_;$++){const st=g[$];if(Se>=We){oe(st,b,D,!0);continue}let ft;if(st.key!=null)ft=be.get(st.key);else for(ze=re;ze<=v;ze++)if(qe[ze-re]===0&&An(st,d[ze])){ft=ze;break}ft===void 0?oe(st,b,D,!0):(qe[ft-re]=$+1,ft>=He?He=ft:tt=!0,Y(st,d[ft],x,null,b,D,j,M,A),Se++)}const Ct=tt?ou(qe):Sn;for(ze=Ct.length-1,$=We-1;$>=0;$--){const st=re+$,ft=d[st],en=d[st+1],Yn=st+1<ue?en.el||os(en):T;qe[$]===0?Y(null,ft,x,Yn,b,D,j,M,A):tt&&(ze<0||$!==Ct[ze]?R(ft,x,Yn,2):ze--)}}},R=(g,d,x,T,b=null)=>{const{el:D,type:j,transition:M,children:A,shapeFlag:$}=g;if($&6){R(g.component.subTree,d,x,T);return}if($&128){g.suspense.move(d,x,T);return}if($&64){j.move(g,d,x,Fe);return}if(j===me){o(D,d,x);for(let _=0;_<A.length;_++)R(A[_],d,x,T);o(g.anchor,d,x);return}if(j===_o){te(g,d,x);return}if(T!==2&&$&1&&M)if(T===0)M.persisted&&!D[Tt]?o(D,d,x):(M.beforeEnter(D),o(D,d,x),vt(()=>M.enter(D),b));else{const{leave:_,delayLeave:v,afterLeave:J}=M,re=()=>{g.ctx.isUnmounted?i(D):o(D,d,x)},be=()=>{const ze=D._isLeaving||!!D[Tt];D._isLeaving&&D[Tt](!0),M.persisted&&!ze?re():_(D,()=>{re(),J&&J()})};v?v(D,re,be):be()}else o(D,d,x)},oe=(g,d,x,T=!1,b=!1)=>{const{type:D,props:j,ref:M,children:A,dynamicChildren:$,shapeFlag:ue,patchFlag:_,dirs:v,cacheIndex:J,memo:re}=g;if((_===-2||$&&$.hasOnce)&&(b=!1),M!=null&&(Jt(),ao(M,null,x,g,!0),qt()),J!=null&&(!g.ctx||g.ctx===d)&&(d.renderCache[J]=void 0),ue&256){d.ctx.deactivate(g);return}const be=ue&1&&v,ze=!$n(g);let Se;if(ze&&(Se=j&&j.onVnodeBeforeUnmount)&&Bt(Se,d,g),ue&6)Le(g.component,x,T);else{if(ue&128){g.suspense.unmount(x,T);return}be&&Ln(g,null,d,"beforeUnmount"),ue&64?g.type.remove(g,d,x,Fe,T):$&&!$.hasOnce&&(D!==me||_>0&&_&64)?Te($,d,x,!1,!0):(D===me&&_&384||!b&&ue&16)&&Te(A,d,x),T&&ce(g)}const We=re!=null&&J==null;(ze&&(Se=j&&j.onVnodeUnmounted)||be||We)&&vt(()=>{Se&&Bt(Se,d,g),be&&Ln(g,null,d,"unmounted"),We&&(g.el=null)},x)},ce=g=>{const{type:d,el:x,anchor:T,transition:b}=g,D=d===me;if(D&&!b){xe(x,T);return}if(d===_o){S(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave();return}const j=D?fo(g):g,M=()=>{D?h(x)&&xe(x,T):i(x),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(j&&j.shapeFlag&1&&b&&!b.persisted){const{leave:A,delayLeave:$}=b,ue=j.el,_=()=>A(ue,M);$?$(ue,M,_):_()}else M()},xe=(g,d)=>{let x;for(;g!==d;)x=m(g),i(g),g=x;i(d)},Le=(g,d,x)=>{const{bum:T,scope:b,job:D,subTree:j,um:M,m:A,a:$}=g;ta(A),ta($),T&&Yo(T),b.stop(),D?(D.flags|=8,oe(j,g,d,x)):g.vnode.el&&j&&(j.transition=g.vnode.transition,oe(j,g,d,x)),M&&vt(M,d),vt(()=>{g.isUnmounted=!0},d)},Te=(g,d,x,T=!1,b=!1,D=0)=>{for(let j=D;j<g.length;j++)oe(g[j],d,x,T,b)},Oe=g=>{if(g.shapeFlag&6)return Oe(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const d=m(g.anchor||g.el),x=d&&d[dr];return x?m(x):d},Je=(g,d,x)=>{const T=g&&d._vnode?void 0:g&&g.component?g.component.uid:cu();uc(()=>{g==null?d._vnode&&oe(d._vnode,null,null,!0):Y(d._vnode||null,g,d,null,null,null,x),d._vnode=g},T)},Fe={p:Y,um:oe,m:R,r:ce,mt:le,mc:C,pc:pe,pbc:W,n:Oe,o:e};return{render:Je,hydrate:void 0,createApp:_c(Je)}}function Ui({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Dn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function nu(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ds(e,t,n=!1){const o=e.children,i=t.children;if(ye(o)&&ye(i))for(let s=0;s<o.length;s++){const a=o[s];let r=i[s];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=i[s]=on(i[s]),r.el=a.el),!n&&r.patchFlag!==-2&&Ds(a,r)),r.type===mi&&(r.patchFlag===-1&&(r=i[s]=on(r)),r.el=a.el),r.type===pt&&!r.el&&(r.el=a.el)}}function ou(e){const t=e.slice(),n=[0];let o,i,s,a,r;const c=e.length;for(o=0;o<c;o++){const u=e[o];if(u!==0){if(i=n[n.length-1],e[i]<u){t[o]=i,n.push(o);continue}for(s=0,a=n.length-1;s<a;)r=s+a>>1,e[n[r]]<u?s=r+1:a=r;u<e[n[s]]&&(s>0&&(t[o]=n[s-1]),n[s]=o)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}function Cr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Cr(t)}function ta(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function os(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?os(t.subTree):null}const Or=e=>e.__isSuspense;function iu(e,t){t&&t.pendingBranch?ye(e)?t.effects.push(...e):t.effects.push(e):cc(e)}const me=Symbol.for("v-fgt"),mi=Symbol.for("v-txt"),pt=Symbol.for("v-cmt"),_o=Symbol.for("v-stc"),ln=[];let Dt=null;function y(e=!1){ln.push(Dt=e?null:[])}function ws(){ln.pop(),Dt=ln[ln.length-1]||null}let ho=1;function Ko(e,t=!1){ho+=e,e<0&&Dt&&t&&(Dt.hasOnce=!0)}function Ur(e){return e.dynamicChildren=ho>0?Dt||Sn:null,ws(),ho>0&&Dt&&Dt.push(e),e}function z(e,t,n,o,i,s){return Ur(l(e,t,n,o,i,s,!0))}function Ne(e,t,n,o,i){return Ur(B(e,t,n,o,i,!0))}function Wn(e){return e?e.__v_isVNode===!0:!1}function An(e,t){return e.type===t.type&&e.key===t.key}const Qr=({key:e})=>e??null,$o=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ge(e)||gt(e)||Ie(e)?{i:dt,r:e,k:t,f:!!n}:e:null);function l(e,t=null,n=null,o=0,i=null,s=e===me?0:1,a=!1,r=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Qr(t),ref:t&&$o(t),scopeId:lr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:o,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:dt};return r?(Jo(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=Ge(n)?8:16),ho>0&&!a&&Dt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Dt.push(c),c}const B=su;function su(e,t=null,n=null,o=0,i=null,s=!1){if((!e||e===yr)&&(e=pt),Wn(e)){const r=xn(e,t,!0);return n&&Jo(r,n),ho>0&&!s&&Dt&&(r.shapeFlag&6?Dt[Dt.indexOf(e)]=r:Dt.push(r)),r.patchFlag=-2,r}if(hu(e)&&(e=e.__vccOpts),t){t=au(t);let{class:r,style:c}=t;r&&!Ge(r)&&(t.class=fe(r)),$e(c)&&(vs(c)&&!ye(c)&&(c=et({},c)),t.style=Yt(c))}const a=Ge(e)?1:Or(e)?128:pi(e)?64:$e(e)?4:Ie(e)?2:0;return l(e,t,n,o,i,a,s,!0)}function au(e){return e?vs(e)||Tr(e)?et({},e):e:null}function xn(e,t,n=!1,o=!1){const{props:i,ref:s,patchFlag:a,children:r,transition:c}=e,u=t?ru(i||{},t):i,p={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Qr(u),ref:t&&t.ref?n&&s?ye(s)?s.concat($o(t)):[s,$o(t)]:$o(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==me?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&xn(e.ssContent),ssFallback:e.ssFallback&&xn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&o&&Nn(p,c.clone(p)),p}function De(e=" ",t=0){return B(mi,null,e,t)}function Yr(e,t){const n=B(_o,null,e);return n.staticCount=t,n}function ge(e="",t=!1){return t?(y(),Ne(pt,null,e)):B(pt,null,e)}function Ft(e){return e==null||typeof e=="boolean"?B(pt):ye(e)?B(me,null,e.slice()):Wn(e)?on(e):B(mi,null,String(e))}function on(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:xn(e)}function Jo(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(ye(t))n=16;else if(typeof t=="object")if(o&65){const i=t.default;i&&(i._c&&(i._d=!1),Jo(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Tr(t)?t._ctx=dt:i===3&&dt&&(dt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(Ie(t)){if(o&65){Jo(e,{default:t});return}t={default:t,_ctx:dt},n=32}else t=String(t),o&64?(n=16,t=[De(t)]):n=8;e.children=t,e.shapeFlag|=n}function ru(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const i in o)if(i==="class")t.class!==o.class&&(t.class=fe([t.class,o.class]));else if(i==="style")t.style=Yt([t.style,o.style]);else if(si(i)){const s=t[i],a=o[i];a&&s!==a&&!(ye(s)&&s.includes(a))?t[i]=s?[].concat(s,a):a:a==null&&s==null&&!ai(i)&&(t[i]=a)}else i!==""&&(t[i]=o[i])}return t}function Bt(e,t,n,o=null){St(e,t,7,[n,o])}const lu=br();let Pr=0;function cu(){return Pr}function uu(e,t,n){const o=e.type,i=(t?t.appContext:e.appContext)||lu,s={uid:Pr++,vnode:e,type:o,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Cl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ar(o,i),emitsOptions:jr(o,i),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:o.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Rc.bind(null,s),e.ce&&e.ce(s),s}let ut=null;const yi=()=>ut||dt;let qo,mo;{const e=ui(),t=(n,o)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(o),s=>{i.length>1?i.forEach(a=>a(s)):i[0](s)}};qo=t("__VUE_INSTANCE_SETTERS__",n=>ut=n),mo=t("__VUE_SSR_SETTERS__",n=>Bn=n)}const jo=e=>{const t=ut;return qo(e),e.scope.on(),()=>{e.scope.off(),qo(t)}},na=()=>{ut&&ut.scope.off(),qo(null)};function _r(e){return e.vnode.shapeFlag&4}let Bn=!1;function du(e,t=!1,n=!1){t&&mo(t);const{props:o,children:i}=e.vnode,s=_r(e);Fc(e,o,s,t),qc(e,i,n||t);const a=s?pu(e,t):void 0;return t&&mo(!1),a}function pu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ec);const{setup:o}=n;if(o){Jt();const i=e.setupContext=o.length>1?gu(e):null,s=jo(e),a=No(o,e,0,[e.props,i]),r=Ca(a);if(qt(),s(),(r||e.sp)&&!$n(e)&&bs(e),r){if(a.then(na,na),t)return a.then(c=>{mo(!0);try{oa(e,c,t)}finally{mo(!1)}}).catch(c=>{xo(c,e,0)});e.asyncDep=a}else oa(e,a)}else $r(e)}function oa(e,t,n){Ie(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:$e(t)&&(e.setupState=nr(t)),$r(e)}function $r(e,t,n){const o=e.type;e.render||(e.render=o.render||Kt);{const i=jo(e);Jt();try{Cc(e)}finally{qt(),i()}}}const Mu={get(e,t){return Mt(e,"get",""),e[t]}};function gu(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Mu),slots:e.slots,emit:e.emit,expose:t}}function vi(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(nr(Xl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ro)return ro[n](e)},has(t,n){return n in t||n in ro}})):e.proxy}function fu(e,t=!0){return Ie(e)?e.displayName||e.name:e.name||t&&e.__name}function hu(e){return Ie(e)&&"__vccOpts"in e}const je=(e,t)=>ic(e,t,Bn);function Ce(e,t,n){try{Ko(-1);const o=arguments.length;return o===2?$e(t)&&!ye(t)?Wn(t)?B(e,null,[t]):B(e,t):B(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&Wn(n)&&(n=[n]),B(e,t,n))}finally{Ko(1)}}const mu="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let is;const ia=typeof window<"u"&&window.trustedTypes;if(ia)try{is=ia.createPolicy("vue",{createHTML:e=>e})}catch{}const Rr=is?e=>is.createHTML(e):e=>e,yu="http://www.w3.org/2000/svg",vu="http://www.w3.org/1998/Math/MathML",nn=typeof document<"u"?document:null,sa=nn&&nn.createElement("template"),Nu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const i=t==="svg"?nn.createElementNS(yu,e):t==="mathml"?nn.createElementNS(vu,e):n?nn.createElement(e,{is:n}):nn.createElement(e);return e==="select"&&o&&o.multiple!=null&&i.setAttribute("multiple",o.multiple),i},createText:e=>nn.createTextNode(e),createComment:e=>nn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>nn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,i,s){const a=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{sa.innerHTML=Rr(o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e);const r=sa.content;if(o==="svg"||o==="mathml"){const c=r.firstChild;for(;c.firstChild;)r.appendChild(c.firstChild);r.removeChild(c)}t.insertBefore(r,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},dn="transition",Zn="animation",Hn=Symbol("_vtc"),Wr={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Br=et({},gr,Wr),xu=e=>(e.displayName="Transition",e.props=Br,e),ct=xu((e,{slots:t})=>Ce(vc,Hr(e),t)),wn=(e,t=[])=>{ye(e)?e.forEach(n=>n(...t)):e&&e(...t)},aa=e=>e?ye(e)?e.some(t=>t.length>1):e.length>1:!1;function Hr(e){const t={};for(const O in e)O in Wr||(t[O]=e[O]);if(e.css===!1)return t;const{name:n="v",type:o,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:r=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:u=a,appearToClass:p=r,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:w=`${n}-leave-to`}=e,U=bu(i),Y=U&&U[0],V=U&&U[1],{onBeforeEnter:ee,onEnter:G,onEnterCancelled:te,onLeave:S,onLeaveCancelled:Q,onBeforeAppear:I=ee,onAppear:L=G,onAppearCancelled:C=te}=t,f=(O,q,le,he)=>{O._enterCancelled=he,gn(O,q?p:r),gn(O,q?u:a),le&&le()},W=(O,q)=>{O._isLeaving=!1,gn(O,h),gn(O,w),gn(O,m),q&&q()},F=O=>(q,le)=>{const he=O?L:G,se=()=>f(q,O,le);wn(he,[q,se]),ra(()=>{gn(q,O?c:s),Ht(q,O?p:r),aa(he)||la(q,o,Y,se)})};return et(t,{onBeforeEnter(O){wn(ee,[O]),Ht(O,s),Ht(O,a)},onBeforeAppear(O){wn(I,[O]),Ht(O,c),Ht(O,u)},onEnter:F(!1),onAppear:F(!0),onLeave(O,q){O._isLeaving=!0;const le=()=>W(O,q);Ht(O,h),O._enterCancelled?(Ht(O,m),ss(O)):(ss(O),Ht(O,m)),ra(()=>{O._isLeaving&&(gn(O,h),Ht(O,w),aa(S)||la(O,o,V,le))}),wn(S,[O,le])},onEnterCancelled(O){f(O,!1,void 0,!0),wn(te,[O])},onAppearCancelled(O){f(O,!0,void 0,!0),wn(C,[O])},onLeaveCancelled(O){W(O),wn(Q,[O])}})}function bu(e){if(e==null)return null;if($e(e))return[Qi(e.enter),Qi(e.leave)];{const t=Qi(e);return[t,t]}}function Qi(e){return Ll(e)}function Ht(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Hn]||(e[Hn]=new Set)).add(t)}function gn(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const n=e[Hn];n&&(n.delete(t),n.size||(e[Hn]=void 0))}function ra(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ju=0;function la(e,t,n,o){const i=e._endId=++ju,s=()=>{i===e._endId&&o()};if(n!=null)return setTimeout(s,n);const{type:a,timeout:r,propCount:c}=Vr(e,t);if(!a)return o();const u=a+"end";let p=0;const h=()=>{e.removeEventListener(u,m),s()},m=w=>{w.target===e&&++p>=c&&h()};setTimeout(()=>{p<c&&h()},r+1),e.addEventListener(u,m)}function Vr(e,t){const n=window.getComputedStyle(e),o=U=>(n[U]||"").split(", "),i=o(`${dn}Delay`),s=o(`${dn}Duration`),a=ca(i,s),r=o(`${Zn}Delay`),c=o(`${Zn}Duration`),u=ca(r,c);let p=null,h=0,m=0;t===dn?a>0&&(p=dn,h=a,m=s.length):t===Zn?u>0&&(p=Zn,h=u,m=c.length):(h=Math.max(a,u),p=h>0?a>u?dn:Zn:null,m=p?p===dn?s.length:c.length:0);const w=p===dn&&/\b(?:transform|all)(?:,|$)/.test(o(`${dn}Property`).toString());return{type:p,timeout:h,propCount:m,hasTransform:w}}function ca(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,o)=>ua(n)+ua(e[o])))}function ua(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function ss(e){return(e?e.ownerDocument:document).body.offsetHeight}function Lu(e,t,n){const o=e[Hn];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Xo=Symbol("_vod"),Is=Symbol("_vsh"),Ut={name:"show",beforeMount(e,{value:t},{transition:n}){e[Xo]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Kn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),Kn(e,!0),o.enter(e)):o.leave(e,()=>{Kn(e,!1)}):Kn(e,t))},beforeUnmount(e,{value:t}){Kn(e,t)}};function Kn(e,t){e.style.display=t?e[Xo]:"none",e[Is]=!t}const Du=Symbol(""),wu=/(?:^|;)\s*display\s*:/;function Iu(e,t,n){const o=e.style,i=Ge(n);let s=!1;if(n&&!i){if(t)if(Ge(t))for(const a of t.split(";")){const r=a.slice(0,a.indexOf(":")).trim();n[r]==null&&no(o,r,"")}else for(const a in t)n[a]==null&&no(o,a,"");for(const a in n){a==="display"&&(s=!0);const r=n[a];r!=null?zu(e,a,!Ge(t)&&t?t[a]:void 0,r)||no(o,a,r):no(o,a,"")}}else if(i){if(t!==n){const a=o[Du];a&&(n+=";"+a),o.cssText=n,s=wu.test(n)}}else t&&e.removeAttribute("style");Xo in e&&((!i||t!==n)&&(e[Xo]=s?o.display:""),e[Is]&&(o.display="none"))}const Co=/\s*!important$/;function no(e,t,n){if(ye(n))n.forEach(o=>no(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))Co.test(n)?e.setProperty(t,n.replace(Co,""),"important"):e.setProperty(t,n);else{const o=Tu(e,t);Co.test(n)?e.setProperty(bn(o),n.replace(Co,""),"important"):e[o]=n}}const da=["Webkit","Moz","ms"],Yi={};function Tu(e,t){const n=Yi[t];if(n)return n;let o=xt(t);if(o!=="filter"&&o in e)return Yi[t]=o;o=li(o);for(let i=0;i<da.length;i++){const s=da[i]+o;if(s in e)return Yi[t]=s}return t}function zu(e,t,n,o){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Ge(o)&&n===o}const pa="http://www.w3.org/1999/xlink";function Ma(e,t,n,o,i,s=Al(t)){o&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(pa,t.slice(6,t.length)):e.setAttributeNS(pa,t,n):n==null||s&&!Ya(n)?e.removeAttribute(t):e.setAttribute(t,s?"":_t(n)?String(n):n)}function ga(e,t,n,o,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Rr(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const r=s==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(r!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const r=typeof e[t];r==="boolean"?n=Ya(n):n==null&&r==="string"?(n="",a=!0):r==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(i||t)}function kn(e,t,n,o){e.addEventListener(t,n,o)}function Au(e,t,n,o){e.removeEventListener(t,n,o)}const fa=Symbol("_vei");function ku(e,t,n,o,i=null){const s=e[fa]||(e[fa]={}),a=s[t];if(o&&a)a.value=o;else{const[r,c]=Cu(t);if(o){const u=s[t]=Qu(o,i);kn(e,r,u,c)}else a&&(Au(e,r,a,c),s[t]=void 0)}}const Su=/(Once|Passive|Capture)$/,Eu=/^on:?(?:Once|Passive|Capture)$/;function Cu(e){let t,n;for(;(n=e.match(Su))&&!Eu.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):bn(e.slice(2)),t]}let Pi=0;const Ou=Promise.resolve(),Uu=()=>Pi||(Ou.then(()=>Pi=0),Pi=Date.now());function Qu(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;const i=n.value;if(ye(i)){const s=o.stopImmediatePropagation;o.stopImmediatePropagation=()=>{s.call(o),o._stopped=!0};const a=i.slice(),r=[o];for(let c=0;c<a.length&&!o._stopped;c++){const u=a[c];u&&St(u,t,5,r)}}else St(i,t,5,[o])};return n.value=e,n.attached=Uu(),n}const ha=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Yu=(e,t,n,o,i,s)=>{const a=i==="svg";t==="class"?Lu(e,o,a):t==="style"?Iu(e,n,o):si(t)?ai(t)||ku(e,t,n,o,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Pu(e,t,o,a))?(ga(e,t,o),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ma(e,t,o,a,s,t!=="value")):e._isVueCE&&(_u(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!Ge(o)))?ga(e,xt(t),o,s,t):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Ma(e,t,o,a))};function Pu(e,t,n,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&ha(t)&&Ie(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ha(t)&&Ge(n)?!1:t in e}function _u(e,t){const n=e._def.props;if(!n)return!1;const o=xt(t);return Array.isArray(n)?n.some(i=>xt(i)===o):Object.keys(n).some(i=>xt(i)===o)}const Gr=new WeakMap,Fr=new WeakMap,ei=Symbol("_moveCb"),ma=Symbol("_enterCb"),as=new WeakMap,$u=e=>(delete e.props.mode,e),Ru=$u({name:"TransitionGroup",props:et({},Br,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=yi(),o=Mr();let i,s,a,r;const c=()=>(r===void 0&&(r=i.length>0&&Ku(i[0].el,n.vnode.el,ya(e))),r);return gi(()=>{if(as.delete(n),!c()){i=[],a=void 0;return}const u=ya(e);i.forEach(Bu);const p=a&&Zu(a,n.vnode.el);a=void 0,i.forEach(m=>Hu(m,p));const h=i.filter(Vu);ss(n.vnode.el),h.forEach(m=>{const w=m.el,U=w.style;Ht(w,u),U.transform=U.webkitTransform=U.transitionDuration="";const Y=w[ei]=V=>{V&&V.target!==w||(!V||V.propertyName.endsWith("transform"))&&(w.removeEventListener("transitionend",Y),w[ei]=null,gn(w,u))};w.addEventListener("transitionend",Y)}),i=[]}),()=>{const u=Ye(e),p=Hr(u);let h=u.tag||me;if(i=[],r=void 0,s)for(let m=0;m<s.length;m++){const w=s[m];w.el&&w.el instanceof Element&&!w.el[Is]&&(i.push(w),Nn(w,go(w,p,o,n)),Gr.set(w,Ni(w.el)))}s=t.default?xs(t.default()):[];for(let m=0;m<s.length;m++){const w=s[m];w.key!=null&&Nn(w,go(w,p,o,n))}return i.length&&(a=Gu(n),as.set(n,c)),B(h,null,s)}}}),Wu=Ru;function Bu(e){const t=e.el;t[ei]&&t[ei](),t[ma]&&t[ma]()}function ya(e){return e.moveClass||`${e.name||"v"}-move`}function Hu(e,t){Fr.set(e,Ni(e.el,t))}function Vu(e){const t=Gr.get(e),n=Fr.get(e),o=t.left-n.left,i=t.top-n.top;if(o||i){const s=e.el,a=s.style,r=s.getBoundingClientRect();let c=1,u=1;return s.offsetWidth&&(c=r.width/s.offsetWidth),s.offsetHeight&&(u=r.height/s.offsetHeight),(!Number.isFinite(c)||c===0)&&(c=1),(!Number.isFinite(u)||u===0)&&(u=1),Math.abs(c-1)<.01&&(c=1),Math.abs(u-1)<.01&&(u=1),a.transform=a.webkitTransform=`translate(${o/c}px,${i/u}px)`,a.transitionDuration="0s",e}}function Ni(e,t){const n=e.getBoundingClientRect();return{left:n.left-(t?t.left:0),top:n.top-(t?t.top:0)}}function Gu(e){let t;for(let n=e.parent;n;n=n.parent){const o=as.get(n);if(o){const i=Fu(n.vnode.el,e.vnode.el);i&&(t||(t=[])).push(et(Ni(i),{item:i,willMove:o}))}}return t}function Fu(e,t){const n=e.nodeType===1?e:e.parentNode;for(;t&&t.parentNode!==n;)t=t.parentNode;if(t&&t.nodeType===1)return t}function Zu(e,t){const n=e.find(o=>o.willMove()&&o.item.contains(t));return n&&Ni(n.item,n)}function Ku(e,t,n){const o=e.cloneNode(),i=e[Hn];i&&i.forEach(r=>{r.split(/\s+/).forEach(c=>c&&o.classList.remove(c))}),n.split(/\s+/).forEach(r=>r&&o.classList.add(r)),o.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(o);const{hasTransform:a}=Vr(o);return s.removeChild(o),a}const ti=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ye(t)?n=>Yo(t,n):t};function Ju(e){e.target.composing=!0}function va(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const En=Symbol("_assign"),Oo=Symbol("_initialValue");function _i(e,t,n){return t&&(e=e.trim()),n&&(e=ci(e)),e}const xi={created(e,{modifiers:{lazy:t,trim:n,number:o}},i){e.parentNode&&(e.type==="text"?e[Oo]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Oo]=e.defaultValue.replace(/\r\n?/g,`
`))),e[En]=ti(i);const s=o||i.props&&i.props.type==="number";kn(e,t?"change":"input",a=>{a.target.composing||e[En](_i(e.value,n,s))}),(n||s)&&kn(e,"change",()=>{e.value=_i(e.value,n,s)}),t||(kn(e,"compositionstart",Ju),kn(e,"compositionend",va),kn(e,"change",va))},mounted(e,{value:t,modifiers:{trim:n,number:o}}){const i=t??"",s=e[Oo];delete e[Oo],s!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==s?e[En](_i(e.value,n,o)):e.value=i},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:o,trim:i,number:s}},a){if(e[En]=ti(a),e.composing)return;const r=(s||e.type==="number")&&!/^0\d/.test(e.value)?ci(e.value):e.value,c=t??"";if(r===c)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(o&&t===n||i&&e.value.trim()===c)||(e.value=c)}},qu={deep:!0,created(e,{value:t,modifiers:{number:n}},o){e._modelValue=t,kn(e,"change",()=>{const i=Array.prototype.filter.call(e.options,c=>c.selected).map(c=>n?ci(ni(c)):ni(c)),s=e.multiple,a=s?On(e._modelValue)?new Set(i):i:i[0],r=e._pendingValue=[s,s?ye(a)?i.slice():i:a];try{e[En](a)}finally{ke(()=>{e._pendingValue===r&&(e._pendingValue=void 0)})}}),e[En]=ti(o)},mounted(e,{value:t}){Na(e,t)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[En]=ti(n)},updated(e,{value:t}){const n=e._pendingValue;e._pendingValue=void 0,(!n||n[0]!==e.multiple||!Xu(t,n[1],n[0]))&&Na(e,t)}};function Xu(e,t,n){if(!n||ye(e))return yn(e,t);if(On(e)){if(e.size!==t.length)return!1;for(const o of t)if(!e.has(o))return!1;return!0}return!1}function Na(e,t){const n=e.multiple,o=ye(t);if(!(n&&!o&&!On(t))){for(let i=0,s=e.options.length;i<s;i++){const a=e.options[i],r=ni(a);if(n)if(o){const c=typeof r;c==="string"||c==="number"?a.selected=t.some(u=>String(u)===String(r)):a.selected=El(t,r)>-1}else a.selected=t.has(r);else if(yn(ni(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function ni(e){return"_value"in e?e._value:e.value}const ed=["ctrl","shift","alt","meta"],td={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>ed.some(n=>e[`${n}Key`]&&!t.includes(n))},At=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),o=t.join(".");return n[o]||(n[o]=((i,...s)=>{for(let a=0;a<t.length;a++){const r=td[t[a]];if(r&&r(i,t))return}return e(i,...s)}))},nd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},lo=(e,t)=>{const n=e._withKeys||(e._withKeys={}),o=t.join(".");return n[o]||(n[o]=(i=>{if(!("key"in i))return;const s=bn(i.key);if(t.some(a=>a===s||nd[a]===s))return e(i)}))},od=et({patchProp:Yu},Nu);let xa;function id(){return xa||(xa=eu(od))}const sd=((...e)=>{const t=id().createApp(...e),{mount:n}=t;return t.mount=o=>{const i=rd(o);if(!i)return;const s=t._component;!Ie(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const a=n(i,!1,ad(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t});function ad(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function rd(e){return Ge(e)?document.querySelector(e):e}const ld="modulepreload",cd=function(e){return"/harness-ui/"+e},ba={},ud=function(t,n,o){let i=Promise.resolve();if(n&&n.length>0){let a=function(u){return Promise.all(u.map(p=>Promise.resolve(p).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),c=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));i=a(n.map(u=>{if(u=cd(u),u in ba)return;ba[u]=!0;const p=u.endsWith(".css"),h=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const m=document.createElement("link");if(m.rel=p?"stylesheet":ld,p||(m.as="script"),m.crossOrigin="",m.href=u,c&&m.setAttribute("nonce",c),document.head.appendChild(m),p)return new Promise((w,U)=>{m.addEventListener("load",w),m.addEventListener("error",()=>U(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a}return i.then(a=>{for(const r of a||[])r.status==="rejected"&&s(r.reason);return t().catch(s)})};/**
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
 */const pd=({size:e,strokeWidth:t=2,absoluteStrokeWidth:n,color:o,iconNode:i,name:s,class:a,...r},{slots:c})=>Ce("svg",{...Uo,width:e||Uo.width,height:e||Uo.height,stroke:o||Uo.stroke,"stroke-width":n?Number(t)*24/Number(e):t,class:["lucide",`lucide-${dd(s??"icon")}`],...r},[...i.map(u=>Ce(...u)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=(e,t)=>(n,{slots:o})=>Ce(pd,{...n,iconNode:t,name:e},o);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=Re("ArrowDownIcon",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=Re("ArrowLeftIcon",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=Re("ArrowUpRightIcon",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=Re("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=Re("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=Re("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=Re("CircleAlertIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=Re("ClockIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=Re("CpuIcon",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=Re("FileSearchIcon",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=Re("FileTextIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=Re("GithubIcon",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=Re("GlobeIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=Re("LayoutListIcon",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=Re("ListChecksIcon",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=Re("LoaderCircleIcon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=Re("MessageSquareIcon",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=Re("MinusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=Re("PanelRightOpenIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=Re("PaperclipIcon",[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=Re("PencilIcon",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=Re("PlusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=Re("SearchIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=Re("SparklesIcon",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=Re("TerminalIcon",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=Re("TriangleAlertIcon",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=Re("UserRoundIcon",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=Re("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Dd=`<script setup lang="ts">
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

function placePanel() {
  if (!open.value || !trigger.value || !panel.value) return;
  const rect = trigger.value.getBoundingClientRect();
  if (!anchorVisible(trigger.value, rect)) { closePanel(); return; }
  const viewport = window.visualViewport;
  const margin = 8, gap = 6, limit = 288;
  const viewportLeft = viewport?.offsetLeft || 0, viewportTop = viewport?.offsetTop || 0;
  const viewportWidth = viewport?.width || innerWidth, viewportHeight = viewport?.height || innerHeight;
  const headerHeight = panel.value.querySelector<HTMLElement>(".selector-search-bar")?.offsetHeight || 0;
  const naturalHeight = Math.min(limit, headerHeight + (list.value?.scrollHeight || 0) + 2);
  const below = Math.max(0, viewportTop + viewportHeight - rect.bottom - gap - margin);
  const above = Math.max(0, rect.top - viewportTop - gap - margin);
  const flip = below < naturalHeight && above > below;
  const maxHeight = Math.min(limit, flip ? above : below);
  const height = Math.min(naturalHeight, maxHeight);
  const width = Math.min(props.variant === "ghost" ? Math.max(168, rect.width) : rect.width, Math.max(0, viewportWidth - margin * 2));
  const left = Math.max(viewportLeft + margin, Math.min(rect.left, viewportLeft + viewportWidth - width - margin));
  const top = Math.max(viewportTop + margin, Math.min(flip ? rect.top - gap - height : rect.bottom + gap, viewportTop + viewportHeight - height - margin));
  panelStyle.value = { position: "fixed", top: \`\${Math.round(top)}px\`, left: \`\${Math.round(left)}px\`, width: \`\${Math.round(width)}px\`, maxHeight: \`\${Math.floor(maxHeight)}px\`, visibility: "visible", zIndex: "60" };
}

function revealActiveOption() {
  if (!open.value || !panelPositioned || !list.value) return;
  const option = document.getElementById(optionId(activeIndex.value));
  if (!option) return;
  // Scroll only the list. scrollIntoView could also move the page or a dialog.
  const optionRect = option.getBoundingClientRect(), listRect = list.value.getBoundingClientRect();
  if (optionRect.top < listRect.top + 4) list.value.scrollTop -= listRect.top + 4 - optionRect.top;
  else if (optionRect.bottom > listRect.bottom - 4) list.value.scrollTop += optionRect.bottom - listRect.bottom + 4;
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
  panelPositioned = false;
  panelStyle.value = { position: "fixed", visibility: "hidden" };
  search.value = "";
  open.value = true;
  const selectedIndex = rows.value.findIndex(row => row.value === currentValue.value && !row.disabled);
  activeIndex.value = edge === "last" ? enabledIndices.value.at(-1) ?? -1 : edge === "first" ? enabledIndices.value[0] ?? -1 : selectedIndex >= 0 ? selectedIndex : enabledIndices.value[0] ?? -1;
  await nextTick();
  if (!open.value || disposed) return;
  placePanel();
  await nextTick();
  if (!open.value || disposed) return;
  panelPositioned = true;
  revealActiveOption();
  searchInput.value?.focus({ preventScroll: true });
  observer?.observe(panel.value!);
  schedulePosition();
}
function closePanel(restoreFocus = false) {
  if (closeOpenSelector === closePanel) closeOpenSelector = undefined;
  cancelAnimationFrame(positionFrame);
  positionFrame = 0;
  if (panel.value) observer?.unobserve(panel.value);
  open.value = false;
  panelPositioned = false;
  clearTimeout(scrollTimer);
  scrolling.value = false;
  search.value = "";
  if (restoreFocus && !disposed) trigger.value?.focus({ preventScroll: true });
}
function hideLeavingPanel(element: Element) {
  element.setAttribute("aria-hidden", "true");
  (element as HTMLElement).inert = true;
}
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
  if (open.value) void nextTick(() => { placePanel(); revealActiveOption(); });
});
watch(activeIndex, () => { if (open.value) void nextTick(revealActiveOption); });
watch(() => props.disabled, disabled => { if (disabled) closePanel(); }, { flush: "sync" });
watch(() => props.searchable, () => closePanel());
onMounted(() => {
  observer = new ResizeObserver(() => schedulePosition());
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
      <Transition name="selector-pop" @before-leave="hideLeavingPanel">
        <div v-if="open" ref="panel" class="selector-panel" :class="[\`selector-panel--\${size}\`, \`selector-panel--\${variant}\`]" :style="panelStyle" @click.stop>
          <div v-if="searchable" class="selector-search-bar">
            <Search :size="14" aria-hidden="true" />
            <input ref="searchInput" v-model="search" class="selector-search" type="search" role="combobox" aria-autocomplete="list" :aria-expanded="open" :aria-controls="listboxId" :aria-activedescendant="activeDescendant" :aria-label="searchPlaceholder" :placeholder="searchPlaceholder" autocomplete="off" />
          </div>
          <div :id="listboxId" ref="list" class="selector-list" :data-scrolling="scrolling || undefined" @scroll.passive="onListScroll" role="listbox" :aria-label="ariaLabel" :aria-busy="loading || undefined">
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
.selector-chevron { flex: 0 0 auto; transition: transform 160ms cubic-bezier(.22,1,.36,1); }
.is-open .selector-chevron { transform: rotate(180deg); }
.selector--sm { font-size: 12px; }
.selector--sm .selector-trigger { min-height: 32px; padding: 5px 10px; }
.selector--ghost .selector-trigger { min-height: 36px; padding: 5px 8px; border-color: transparent; background: transparent; color: var(--selector-muted); }
.selector--ghost .selector-trigger:hover:not(:disabled) { border-color: var(--selector-border); background: var(--selector-hover); color: var(--selector-fg); }
.selector--ghost.is-open .selector-trigger { border-color: color-mix(in srgb, var(--selector-accent) 35%, transparent); background: color-mix(in srgb, var(--selector-accent) 4%, var(--selector-bg)); }
.selector--ghost.selector--sm .selector-trigger { min-height: 30px; padding-block: 4px; }
.selector.is-invalid .selector-trigger, .selector.is-invalid .selector-trigger:hover, .selector.is-invalid.is-open .selector-trigger { border-color: #c17a72; }
.selector-panel { display: flex; flex-direction: column; overflow: hidden; border: 1px solid var(--selector-border); border-radius: 8px; background: var(--selector-bg); box-shadow: 0 8px 28px #00000012, 0 2px 8px #00000006; text-align: left; }
.selector-panel--ghost { box-shadow: 0 6px 20px #0000001a; }
.selector-panel--sm { font-size: 12px; }
.selector-search-bar { display: flex; align-items: center; flex: 0 0 auto; gap: 7px; min-width: 0; padding: 8px 10px; border-bottom: 1px solid var(--selector-border); color: var(--selector-muted); }
.selector-search-bar > svg { flex: 0 0 auto; }
.selector-search { width: 100%; min-width: 0; height: 28px; padding: 0; border: 0; border-radius: 0; outline: none; background: transparent; color: var(--selector-fg); font: inherit; font-size: 12px; line-height: 20px; }
.selector-search::placeholder { color: var(--selector-muted); }
.selector-search::-webkit-search-cancel-button { appearance: none; }
.selector-list { min-height: 0; overflow-y: auto; padding: 4px; scrollbar-width: thin; scrollbar-color: transparent transparent; overscroll-behavior: contain; }
.selector-option { display: flex; align-items: center; gap: 8px; width: 100%; min-width: 0; min-height: 36px; padding: 8px 10px; border: 0; border-radius: 6px; background: transparent; color: var(--selector-muted); font: inherit; line-height: 20px; text-align: left; cursor: pointer; transition: background-color 120ms, color 120ms; }
.selector-option:hover:not(:disabled) { background: var(--selector-hover); color: var(--selector-fg); }
.selector-option.is-active:not(:disabled) { background: var(--selector-active); color: var(--selector-fg); }
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
.selector-pop-enter-active, .selector-pop-leave-active { transition: opacity 160ms ease, transform 160ms cubic-bezier(.22,1,.36,1); }
.selector-pop-enter-from, .selector-pop-leave-to { opacity: 0; transform: translateY(-3px); }
@media (max-width: 767px), (pointer: coarse) { .selector-trigger, .selector--sm .selector-trigger, .selector--ghost .selector-trigger, .selector--ghost.selector--sm .selector-trigger, .selector-option, .selector-panel--ghost .selector-option { min-height: 44px; } }
@media (prefers-reduced-motion: reduce) { .selector-trigger, .selector-chevron, .selector-option, .selector-pop-enter-active, .selector-pop-leave-active { transition: none; } }
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
`,Od={class:"composer-demo"},Ud={key:0,class:"attachments"},Qd=["aria-label","disabled","onClick"],Yd={class:"composer-field"},Pd=["value","placeholder","disabled"],_d={class:"toolbar"},$d=["disabled"],Rd=["disabled"],Wd=["aria-expanded","disabled"],Bd={class:"model-button-label"},Hd=["disabled","aria-checked","onClick"],Vd={class:"model-option-label"},Gd=["disabled"],Fd=Ze({__name:"ChatComposer",props:{modelValue:{default:""},placeholder:{default:"What would you like to build?"},models:{default:()=>["Claude Sonnet 4.6","GPT-5.4","Gemini 3.1 Pro"]},initialModel:{default:"Claude Sonnet 4.6"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","send","model-change"],setup(e,{emit:t}){const n={claude:"data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+Q2xhdWRlPC90aXRsZT48cGF0aCBkPSJtNC43MTQ0IDE1Ljk1NTUgNC43MTc0LTIuNjQ3MS4wNzktLjIzMDctLjA3OS0uMTI3NWgtLjIzMDdsLS43ODkzLS4wNDg2LTIuNjk1Ni0uMDcyOS0yLjMzNzUtLjA5NzEtMi4yNjQ2LS4xMjE0LS41NzA3LS4xMjE1LS41MzQzLS43MDQyLjA1NDYtLjM1MjIuNDc5Ny0uMzIxOC42ODYuMDYwOCAxLjUxNzkuMTAzMiAyLjI3NjcuMTU3OCAxLjY1MTQuMDk3MiAyLjQ0NjguMjU1aC4zODg2bC4wNTQ2LS4xNTc5LS4xMzM2LS4wOTcxLS4xMDMyLS4wOTcyTDYuOTczIDkuODM1NmwtMi41NS0xLjY4NzktMS4zMzU2LS45NzE0LS43MjI1LS40OTE4LS4zNjQzLS40NjE0LS4xNTc4LTEuMDA3OC42NTU3LS43MjI1Ljg4MDMuMDYwNy4yMjQ2LjA2MDcuODkyNS42ODYgMS45MDY0IDEuNDc1NCAyLjQ4OTMgMS44MzM2LjM2NDMuMzAzNS4xNDU3LS4xMDMyLjAxODItLjA3MjgtLjE2NC0uMjczMy0xLjM1MzktMi40NDY3LTEuNDQ1LTIuNDg5My0uNjQzNS0xLjAzMi0uMTctLjYxOTRjLS4wNjA3LS4yNTUtLjEwMzItLjQ2NzQtLjEwMzItLjcyODVMNi4yODcuMTMzNSA2LjY5OTcgMGwuOTk1Ny4xMzM2LjQxOS4zNjQyLjYxOTIgMS40MTQ3IDEuMDAxOCAyLjIyODIgMS41NTQzIDMuMDI5Ni40NTUzLjg5ODUuMjQyOS44MzE4LjA5MS4yNTVoLjE1Nzl2LS4xNDU3bC4xMjc1LTEuNzA2LjIzNjgtMi4wOTQ3LjIzMDctMi42OTU3LjA3ODktLjc1ODkuMzc2NC0uOTEwNy43NDY4LS40OTE4LjU4MjguMjc5My40Nzk3LjY4Ni0uMDY2OC40NDMzLS4yODUzIDEuODUxNy0uNTU4NiAyLjkwMjEtLjM2NDMgMS45NDI5aC4yMTI1bC4yNDI5LS4yNDI5Ljk4MzUtMS4zMDUzIDEuNjUxNC0yLjA2NDMuNzI4Ni0uODE5Ni44NS0uOTA0Ni41NDY0LS40MzExaDEuMDMyMWwuNzU5IDEuMTI5My0uMzQgMS4xNjU3LTEuMDYyNSAxLjM0NzgtLjg4MDQgMS4xNDE0LTEuMjYyOCAxLjctLjc4OTMgMS4zNi4wNzI5LjEwOTMuMTg4Mi0uMDE4MyAyLjg1MzUtLjYwNyAxLjU0MjEtLjI3OTQgMS44Mzk2LS4zMTU3LjgzMTguMzg4Ni4wOTEuMzk0Ni0uMzI3OC44MDc1LTEuOTY3LjQ4NTctMi4zMDcyLjQ2MTQtMy40MzY0LjgxMzYtLjA0MjUuMDMwNC4wNDg2LjA2MDcgMS41NDgyLjE0NTcuNjYxOC4wMzY0aDEuNjIxbDMuMDE3NS4yMjQ3Ljc4OTIuNTIyLjQ3MzYuNjM3Ni0uMDc5LjQ4NTctMS4yMTQyLjYxOTMtMS42MzkzLS4zODg2LTMuODI1LS45MTA3LTEuMzExMy0uMzI3OWgtLjE4MjJ2LjEwOTNsMS4wOTI5IDEuMDY4NiAyLjAwMzUgMS44MDkyIDIuNTA3NSAyLjMzMTQuMTI3NS41NzY4LS4zMjE4LjQ1NTQtLjM0LS4wNDg2LTIuMjAzOS0xLjY1NzUtLjg1LS43NDY4LTEuOTI0Ni0xLjYyMWgtLjEyNzV2LjE3bC40NDMyLjY0OTYgMi4zNDM2IDMuNTIxNC4xMjE0IDEuMDgwNy0uMTcuMzUyMS0uNjA3MS4yMTI1LS42Njc5LS4xMjE0LTEuMzcyMS0xLjkyNDZMMTQuMzggMTcuOTU5bC0xLjE0MTQtMS45NDI4LS4xMzk3LjA3OS0uNjc0IDcuMjU1Mi0uMzE1Ni4zNzAzLS43Mjg2LjI3OTMtLjYwNzEtLjQ2MTQtLjMyMTgtLjc0NjguMzIxOC0xLjQ3NTMuMzg4Ni0xLjkyNDYuMzE1Ny0xLjUzLjI4NTMtMS45MDA0LjE3LS42MzE0LS4wMTIxLS4wNDI1LS4xMzk3LjAxODItMS40MzI4IDEuOTY3Mi0yLjE3OTYgMi45NDQ2LTEuNzI0MyAxLjg0NTYtLjQxMjguMTY0LS43MTY0LS4zNzA0LjA2NjctLjY2MTguNDAwOC0uNTg4OSAyLjM4Ni0zLjAzNTcgMS40Mzg5LTEuODgyLjkyOS0xLjA4NjgtLjAwNjItLjE1NzloLS4wNTQ2bC02LjMzODUgNC4xMTY0LTEuMTI5My4xNDU3LS40ODU3LS40NTU0LjA2MDgtLjc0NjcuMjMwNy0uMjQyOSAxLjkwNjQtMS4zMTE0WiIvPjwvc3ZnPg==",openai:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIxIiBoZWlnaHQ9IjcyMSIgdmlld0JveD0iMCAwIDcyMSA3MjEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xNjM3XzI5MzQpIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxXzE2MzdfMjkzNCkiPgo8cGF0aCBkPSJNMzA0LjI0NiAyOTQuNjExVjI0OS4wMjhDMzA0LjI0NiAyNDUuMTg5IDMwNS42ODcgMjQyLjMwOSAzMDkuMDQ0IDI0MC4zOTJMNDAwLjY5MiAxODcuNjEyQzQxMy4xNjcgMTgwLjQxNSA0MjguMDQyIDE3Ny4wNTggNDQzLjM5NCAxNzcuMDU4QzUwMC45NzEgMTc3LjA1OCA1MzcuNDQgMjIxLjY4MiA1MzcuNDQgMjY5LjE4MkM1MzcuNDQgMjcyLjU0IDUzNy40NCAyNzYuMzc5IDUzNi45NTkgMjgwLjIxOEw0NDEuOTU0IDIyNC41NThDNDM2LjE5NyAyMjEuMjAxIDQzMC40MzcgMjIxLjIwMSA0MjQuNjggMjI0LjU1OEwzMDQuMjQ2IDI5NC42MTFaTTUxOC4yNDUgNDcyLjE0NVYzNjMuMjI0QzUxOC4yNDUgMzU2LjUwNSA1MTUuMzY0IDM1MS43MDcgNTA5LjYwOCAzNDguMzQ5TDM4OS4xNzQgMjc4LjI5Nkw0MjguNTE5IDI1NS43NDNDNDMxLjg3NyAyNTMuODI2IDQzNC43NTcgMjUzLjgyNiA0MzguMTE1IDI1NS43NDNMNTI5Ljc2MiAzMDguNTIzQzU1Ni4xNTQgMzIzLjg3OSA1NzMuOTA1IDM1Ni41MDUgNTczLjkwNSAzODguMTcxQzU3My45MDUgNDI0LjYzNiA1NTIuMzE1IDQ1OC4yMjUgNTE4LjI0NSA0NzIuMTQxVjQ3Mi4xNDVaTTI3NS45MzcgMzc2LjE4MkwyMzYuNTkyIDM1My4xNTJDMjMzLjIzNSAzNTEuMjM1IDIzMS43OTQgMzQ4LjM1NCAyMzEuNzk0IDM0NC41MTVWMjM4Ljk1NkMyMzEuNzk0IDE4Ny42MTcgMjcxLjEzOSAxNDguNzQ5IDMyNC40IDE0OC43NDlDMzQ0LjU1NSAxNDguNzQ5IDM2My4yNjQgMTU1LjQ2OCAzNzkuMTAyIDE2Ny40NjNMMjg0LjU3OCAyMjIuMTY0QzI3OC44MjIgMjI1LjUyMSAyNzUuOTQyIDIzMC4zMTkgMjc1Ljk0MiAyMzcuMDM5VjM3Ni4xODZMMjc1LjkzNyAzNzYuMTgyWk0zNjAuNjI2IDQyNS4xMjJMMzA0LjI0NiAzOTMuNDU1VjMyNi4yODNMMzYwLjYyNiAyOTQuNjE2TDQxNy4wMDIgMzI2LjI4M1YzOTMuNDU1TDM2MC42MjYgNDI1LjEyMlpNMzk2Ljg1MiA1NzAuOTg5QzM3Ni42OTggNTcwLjk4OSAzNTcuOTg5IDU2NC4yNyAzNDIuMTUxIDU1Mi4yNzZMNDM2LjY3NCA0OTcuNTc0QzQ0Mi40MzEgNDk0LjIxNyA0NDUuMzExIDQ4OS40MTkgNDQ1LjMxMSA0ODIuNjk5VjM0My41NTJMNDg1LjEzOCAzNjYuNTgyQzQ4OC40OTUgMzY4LjQ5OSA0ODkuOTM2IDM3MS4zNzkgNDg5LjkzNiAzNzUuMjE5VjQ4MC43NzhDNDg5LjkzNiA1MzIuMTE3IDQ1MC4xMDkgNTcwLjk4NSAzOTYuODUyIDU3MC45ODVWNTcwLjk4OVpNMjgzLjEzNCA0NjMuOTlMMTkxLjQ4NiA0MTEuMjExQzE2NS4wOTQgMzk1Ljg1NCAxNDcuMzQzIDM2My4yMjkgMTQ3LjM0MyAzMzEuNTYyQzE0Ny4zNDMgMjk0LjYxNiAxNjkuNDE1IDI2MS41MDkgMjAzLjQ4IDI0Ny41OTNWMzU2Ljk5MUMyMDMuNDggMzYzLjcxIDIwNi4zNjEgMzY4LjUwOCAyMTIuMTE3IDM3MS44NjZMMzMyLjA3NCA0NDEuNDM3TDI5Mi43MjkgNDYzLjk5QzI4OS4zNzIgNDY1LjkwNyAyODYuNDkxIDQ2NS45MDcgMjgzLjEzNCA0NjMuOTlaTTI3Ny44NTkgNTQyLjY4QzIyMy42MzkgNTQyLjY4IDE4My44MTMgNTAxLjg5NSAxODMuODEzIDQ1MS41MTRDMTgzLjgxMyA0NDcuNjc1IDE4NC4yOTQgNDQzLjgzNiAxODQuNzcxIDQzOS45OTdMMjc5LjI5NSA0OTQuNjk4QzI4NS4wNTEgNDk4LjA1NiAyOTAuODEyIDQ5OC4wNTYgMjk2LjU2OCA0OTQuNjk4TDQxNy4wMDIgNDI1LjEyN1Y0NzAuNzFDNDE3LjAwMiA0NzQuNTQ5IDQxNS41NjIgNDc3LjQyOSA0MTIuMjA0IDQ3OS4zNDZMMzIwLjU1NyA1MzIuMTI2QzMwOC4wODEgNTM5LjMyMyAyOTMuMjA2IDU0Mi42OCAyNzcuODU0IDU0Mi42OEgyNzcuODU5Wk0zOTYuODUyIDU5OS43NzZDNDU0LjkxMSA1OTkuNzc2IDUwMy4zNyA1NTguNTEzIDUxNC40MSA1MDMuODEyQzU2OC4xNDkgNDg5Ljg5NiA2MDIuNjk2IDQzOS41MTUgNjAyLjY5NiAzODguMTc2QzYwMi42OTYgMzU0LjU4NyA1ODguMzAzIDMyMS45NjIgNTYyLjM5MiAyOTguNDVDNTY0Ljc5MSAyODguMzczIDU2Ni4yMzEgMjc4LjI5NiA1NjYuMjMxIDI2OC4yMjRDNTY2LjIzMSAxOTkuNjExIDUxMC41NzEgMTQ4LjI2NyA0NDYuMjc0IDE0OC4yNjdDNDMzLjMyMiAxNDguMjY3IDQyMC44NDYgMTUwLjE4NCA0MDguMzcgMTU0LjUwNUMzODYuNzc1IDEzMy4zOTIgMzU3LjAyNiAxMTkuOTU4IDMyNC40IDExOS45NThDMjY2LjM0MiAxMTkuOTU4IDIxNy44ODMgMTYxLjIyIDIwNi44NDMgMjE1LjkyMUMxNTMuMTA0IDIyOS44MzcgMTE4LjU1NyAyODAuMjE4IDExOC41NTcgMzMxLjU1N0MxMTguNTU3IDM2NS4xNDYgMTMyLjk1IDM5Ny43NzEgMTU4Ljg2MSA0MjEuMjgzQzE1Ni40NjIgNDMxLjM2IDE1NS4wMjIgNDQxLjQzNyAxNTUuMDIyIDQ1MS41MUMxNTUuMDIyIDUyMC4xMjMgMjEwLjY4MiA1NzEuNDY2IDI3NC45NzggNTcxLjQ2NkMyODcuOTMxIDU3MS40NjYgMzAwLjQwNyA1NjkuNTQ5IDMxMi44ODMgNTY1LjIyOEMzMzQuNDczIDU4Ni4zNDEgMzY0LjIyMiA1OTkuNzc2IDM5Ni44NTIgNTk5Ljc3NloiIGZpbGw9ImJsYWNrIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNzIwIiBoZWlnaHQ9IjcyMCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNjA2OTM0IDAuMDk5OTc1NikiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNDg0LjEzOSIgaGVpZ2h0PSI0NzkuODE4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE4LjU1NyAxMTkuOTU4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",gemini:"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjFlbSIgc3R5bGU9ImZsZXg6bm9uZTtsaW5lLWhlaWdodDoxIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkdlbWluaTwvdGl0bGU+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9IiMzMTg2RkYiPjwvcGF0aD48cGF0aCBkPSJNMjAuNjE2IDEwLjgzNWExNC4xNDcgMTQuMTQ3IDAgMDEtNC40NS0zLjAwMSAxNC4xMTEgMTQuMTExIDAgMDEtMy42NzgtNi40NTIuNTAzLjUwMyAwIDAwLS45NzUgMCAxNC4xMzQgMTQuMTM0IDAgMDEtMy42NzkgNi40NTIgMTQuMTU1IDE0LjE1NSAwIDAxLTQuNDUgMy4wMDFjLS42NS4yOC0xLjMxOC41MDUtMi4wMDIuNjc4YS41MDIuNTAyIDAgMDAwIC45NzVjLjY4NC4xNzIgMS4zNS4zOTcgMi4wMDIuNjc3YTE0LjE0NyAxNC4xNDcgMCAwMTQuNDUgMy4wMDEgMTQuMTEyIDE0LjExMiAwIDAxMy42NzkgNi40NTMuNTAyLjUwMiAwIDAwLjk3NSAwYy4xNzItLjY4NS4zOTctMS4zNTEuNjc3LTIuMDAzYTE0LjE0NSAxNC4xNDUgMCAwMTMuMDAxLTQuNDUgMTQuMTEzIDE0LjExMyAwIDAxNi40NTMtMy42NzguNTAzLjUwMyAwIDAwMC0uOTc1IDEzLjI0NSAxMy4yNDUgMCAwMS0yLjAwMy0uNjc4eiIgZmlsbD0idXJsKCNsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfKSI+PC9wYXRoPjxwYXRoIGQ9Ik0yMC42MTYgMTAuODM1YTE0LjE0NyAxNC4xNDcgMCAwMS00LjQ1LTMuMDAxIDE0LjExMSAxNC4xMTEgMCAwMS0zLjY3OC02LjQ1Mi41MDMuNTAzIDAgMDAtLjk3NSAwIDE0LjEzNCAxNC4xMzQgMCAwMS0zLjY3OSA2LjQ1MiAxNC4xNTUgMTQuMTU1IDAgMDEtNC40NSAzLjAwMWMtLjY1LjI4LTEuMzE4LjUwNS0yLjAwMi42NzhhLjUwMi41MDIgMCAwMDAgLjk3NWMuNjg0LjE3MiAxLjM1LjM5NyAyLjAwMi42NzdhMTQuMTQ3IDE0LjE0NyAwIDAxNC40NSAzLjAwMSAxNC4xMTIgMTQuMTEyIDAgMDEzLjY3OSA2LjQ1My41MDIuNTAyIDAgMDAuOTc1IDBjLjE3Mi0uNjg1LjM5Ny0xLjM1MS42NzctMi4wMDNhMTQuMTQ1IDE0LjE0NSAwIDAxMy4wMDEtNC40NSAxNC4xMTMgMTQuMTEzIDAgMDE2LjQ1My0zLjY3OC41MDMuNTAzIDAgMDAwLS45NzUgMTMuMjQ1IDEzLjI0NSAwIDAxLTIuMDAzLS42Nzh6IiBmaWxsPSJ1cmwoI2xvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8pIj48L3BhdGg+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9InVybCgjbG9iZS1pY29ucy1nZW1pbmktMi1fUl8wXykiPjwvcGF0aD48ZGVmcz48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfIiB4MT0iNyIgeDI9IjExIiB5MT0iMTUuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjMDhCOTYyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDhCOTYyIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8iIHgxPSI4IiB4Mj0iMTEuNSIgeTE9IjUuNSIgeTI9IjExIj48c3RvcCBzdG9wLWNvbG9yPSIjRjk0NTQzIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjk0NTQzIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTItX1JfMF8iIHgxPSIzLjUiIHgyPSIxNy41IiB5MT0iMTMuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjRkFCQzEyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuNDYiIHN0b3AtY29sb3I9IiNGQUJDMTIiIHN0b3Atb3BhY2l0eT0iMCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==",deepseek:"data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RGVlcFNlZWs8L3RpdGxlPjxwYXRoIGQ9Ik0yMy43NDggNC42NTFjLS4yNTQtLjEyNC0uMzY0LjExMy0uNTEyLjIzMy0uMDUxLjA0LS4wOTQuMDktLjEzNy4xMzctLjM3Mi4zOTctLjgwNi42NTctMS4zNzMuNjI2LS44MjktLjA0Ni0xLjUzNy4yMTQtMi4xNjMuODQ4LS4xMzMtLjc4Mi0uNTc1LTEuMjQ4LTEuMjQ3LTEuNTQ4LS4zNTItLjE1NS0uNzA4LS4zMTEtLjk1NS0uNjUtLjE3Mi0uMjQtLjIxOS0uNTA5LS4zMDUtLjc3NC0uMDU1LS4xNi0uMTEtLjMyMy0uMjkzLS4zNS0uMi0uMDMxLS4yNzguMTM2LS4zNTYuMjc2LS4zMTMuNTcyLS40MzQgMS4yMDItLjQyMiAxLjg0LjAyNyAxLjQzNi42MzMgMi41OCAxLjgzOCAzLjM5My4xMzcuMDk0LjE3Mi4xODcuMTI5LjMyMy0uMDgyLjI4LS4xOC41NTMtLjI2Ni44MzMtLjA1NS4xNzktLjEzNy4yMTgtLjMyOC4xNGE1LjUgNS41IDAgMCAxLTEuNzM3LTEuMTc5Yy0uODU3LS44MjgtMS42MzEtMS43NDMtMi41OTctMi40NmExMiAxMiAwIDAgMC0uNjg5LS40N2MtLjk4NS0uOTU3LjEzLTEuNzQzLjM4Ny0xLjgzNi4yNy0uMDk4LjA5NC0uNDMzLS43NzgtLjQyOC0uODcyLjAwMy0xLjY3LjI5NS0yLjY4Ny42ODVhMyAzIDAgMCAxLS40NjUuMTM2IDkuNiA5LjYgMCAwIDAtMi44ODMtLjEwMWMtMS44ODUuMjEtMy4zOSAxLjEtNC40OTcgMi42MjJDLjA4MiA4Ljc3Ni0uMjMxIDEwLjg1NC4xNTIgMTMuMDJjLjQwMyAyLjI4NCAxLjU2OCA0LjE3NSAzLjM2IDUuNjUzIDEuODU3IDEuNTMzIDMuOTk3IDIuMjg0IDYuNDM4IDIuMTQgMS40ODItLjA4NSAzLjEzMi0uMjg0IDQuOTk0LTEuODYuNDcuMjM0Ljk2Mi4zMjggMS43OC4zOTguNjI5LjA1OCAxLjIzNS0uMDMxIDEuNzA1LS4xMjkuNzM1LS4xNTUuNjg0LS44MzYuNDE4LS45NjEtMi4xNTUtMS4wMDQtMS42ODItLjU5NS0yLjExMi0uOTI2IDEuMDk1LTEuMjk1IDIuNzY4LTMuNTk4IDMuMjg0LTYuNzMzLjA1LS4zNDYuMTE1LS44MzQuMTA4LTEuMTE0LS4wMDQtLjE3MS4wMzUtLjIzOC4yMy0uMjU3YTQuMiA0LjIgMCAwIDAgMS41NDUtLjQ3NWMxLjM5Ny0uNzYzIDEuOTYtMi4wMTYgMi4wOTMtMy41MTcuMDItLjIzLS4wMDQtLjQ2Ny0uMjQ3LS41ODhNMTEuNTggMTguMTY4Yy0yLjA4OC0xLjY0Mi0zLjEwMS0yLjE4My0zLjUyLTIuMTYtLjM5LjAyNC0uMzIuNDcyLS4yMzQuNzYzLjA5LjI4OC4yMDcuNDg3LjM3MS43NC4xMTQuMTY3LjE5Mi40MTYtLjExMy42MDMtLjY3My40MTYtMS44NDItLjE0LTEuODk3LS4xNjgtMS4zNjEtLjgwMS0yLjUtMS44Ni0zLjMwMS0zLjMwNi0uNzc1LTEuMzkzLTEuMjI1LTIuODg4LTEuMjk5LTQuNDgyLS4wMi0uMzg1LjA5NC0uNTIyLjQ3Ny0uNTkyYTQuNyA0LjcgMCAwIDEgMS41My0uMDM4YzIuMTMxLjMxMSAzLjk0NiAxLjI2NCA1LjQ2NyAyLjc3NC44NjguODYgMS41MjUgMS44ODcgMi4yMDIgMi44OS43MiAxLjA2NiAxLjQ5NCAyLjA4MiAyLjQ4IDIuOTE1LjM0OC4yOTEuNjI2LjUxMy44OTIuNjc3LS44MDIuMDktMi4xNC4xMDktMy4wNTUtLjYxNXptMS4wMDEtNi40NGEuMzA2LjMwNiAwIDAgMSAuNDE1LS4yODcuMy4zIDAgMCAxIC4xMTMuMDc0LjMuMyAwIDAgMSAuMDg2LjIxNGMwIC4xNy0uMTM2LjMwNy0uMzA4LjMwN2EuMzAzLjMwMyAwIDAgMS0uMzA2LS4zMDdtMy4xMSAxLjU5NmMtLjIuMDgxLS40LjE1MS0uNTkxLjE2YTEuMjUgMS4yNSAwIDAgMS0uNzk4LS4yNTRjLS4yNzQtLjIzLS40Ny0uMzU4LS41NTEtLjc1OGExLjcgMS43IDAgMCAxIC4wMTUtLjU4OGMuMDctLjMyNy0uMDA3LS41MzctLjIzOC0uNzI3LS4xODgtLjE1Ni0uNDI2LS4xOTktLjY4OS0uMTk5YS42LjYgMCAwIDEtLjI1NC0uMDc4LjI1My4yNTMgMCAwIDEtLjExNC0uMzU4IDEgMSAwIDAgMSAuMTkyLS4yMWMuMzU2LS4yMDIuNzY3LS4xMzYgMS4xNDYuMDE2LjM1Mi4xNDQuNjE4LjQwOCAxLjAwMS43ODIuMzkyLjQ1MS40NjIuNTc2LjY4NS45MTUuMTc2LjI2NC4zMzYuNTM2LjQ0Ni44NDguMDY2LjE5NC0uMDIuMzUzLS4yNS40NSIvPjwvc3ZnPg=="},o={claude:"Claude",openai:"OpenAI",gemini:"Gemini",deepseek:"DeepSeek"};function i(E,R=""){const oe=R.trim().toLowerCase().replace(/[^a-z0-9]+/g,"");if(R.trim())return{anthropic:"claude",claude:"claude",claudecode:"claude",openai:"openai",google:"gemini",googlegemini:"gemini",googleaistudio:"gemini",gemini:"gemini",deepseek:"deepseek"}[oe];const ce=E.trim().toLowerCase();if(/^(?:anthropic\/)?claude(?:$|[\s-])/.test(ce))return"claude";if(/^(?:openai\/)?(?:gpt[-\s]?\d|chatgpt(?:$|[\s-])|o[134](?:$|[\s-]))/.test(ce))return"openai";if(/^(?:google\/)?gemini(?:$|[\s-])/.test(ce))return"gemini";if(/^deepseek(?:$|[\s-])/.test(ce))return"deepseek"}const s=Ze({props:{model:{type:String,default:""},provider:{type:String,default:""},size:{type:Number,default:20}},setup:E=>()=>{const R=i(E.model,E.provider),oe=R!=="gemini",ce=Math.round(E.size*(R==="openai"?.82:.58));return Ce("span",{class:["model-provider-mark",{"is-color":R&&!oe}],"data-provider-logo":R??"unknown","aria-hidden":"true",title:R?`${o[R]} logo`:"Custom model",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:`${E.size}px`,height:`${E.size}px`,boxSizing:"border-box",border:"1px solid var(--provider-logo-border, #e5e5e8)",borderRadius:`${E.size>=28?9:E.size>=20?6:4}px`,background:"var(--provider-logo-surface, #fff)",color:"var(--provider-logo-muted, #a1a1aa)"}},R?[Ce("img",{src:n[R],alt:"","aria-hidden":"true",class:["model-provider-image",{"is-monochrome":oe}],"data-logo-source":"bundled-brand-asset",style:{display:"block",objectFit:"contain",width:`${ce}px`,height:`${ce}px`}})]:[Ce(ii,{size:Math.round(E.size*.5),strokeWidth:1.7,"aria-hidden":"true"})])}}),a=e,r=t,c=H(a.modelValue),u=H(""),p=H(!1),h=H([]),m=H(null),w=H(null),U=H(null),Y=H(null),V=H({}),ee=H(null),G=`composer-models-${jn()}`;function te(E=!1){p.value=!1,E&&ke(()=>{var R;return(R=ee.value)==null?void 0:R.focus({preventScroll:!0})})}function S(){var E;return Array.from(((E=Y.value)==null?void 0:E.querySelectorAll('[role="menuitemradio"]:not(:disabled)'))??[])}function Q(E){if(!E)return;E.focus({preventScroll:!0});const R=Y.value;R&&(E.offsetTop<R.scrollTop?R.scrollTop=E.offsetTop:E.offsetTop+E.offsetHeight>R.scrollTop+R.clientHeight&&(R.scrollTop=E.offsetTop+E.offsetHeight-R.clientHeight))}function I(){if(!p.value||!ee.value)return;const E=ee.value.getBoundingClientRect(),R=Math.min(340,window.innerWidth-16),oe=Math.max(8,Math.min(E.left,window.innerWidth-R-8)),ce={position:"fixed",left:`${Math.round(oe)}px`,width:`${R}px`};window.innerHeight-E.bottom<280&&E.top>window.innerHeight-E.bottom?ce.bottom=`${Math.round(window.innerHeight-E.top+6)}px`:ce.top=`${Math.round(E.bottom+6)}px`,V.value=ce}async function L(){if(!a.disabled){if(p.value)return te();p.value=!0,await ke(),I(),p.value&&Q(S().find(E=>E.getAttribute("aria-checked")==="true")??S()[0])}}async function C(E){if(E.isComposing||a.disabled)return;if(E.key==="Escape"&&p.value){E.preventDefault(),E.stopPropagation(),te(!0);return}if(!["ArrowDown","ArrowUp","Home","End"].includes(E.key))return;E.preventDefault(),p.value=!0,await ke(),I();const R=S();if(!R.length)return;const oe=R.indexOf(document.activeElement),ce=E.key==="Home"?0:E.key==="End"?R.length-1:(oe+(E.key==="ArrowDown"?1:oe<0?0:-1)+R.length)%R.length;Q(R[ce])}function f(E){var oe,ce;const R=E.relatedTarget;!((oe=U.value)!=null&&oe.contains(R))&&!((ce=Y.value)!=null&&ce.contains(R))&&te()}function W(E){var oe,ce;const R=E.target;!((oe=U.value)!=null&&oe.contains(R))&&!((ce=Y.value)!=null&&ce.contains(R))&&te()}function F(E){E.setAttribute("inert","")}function O(E){a.disabled||h.value.splice(E,1)}we(()=>a.disabled,E=>{E&&te()}),wt(()=>{document.addEventListener("pointerdown",W),window.addEventListener("resize",I),window.addEventListener("scroll",I,!0),he()}),Et(()=>{document.removeEventListener("pointerdown",W),window.removeEventListener("resize",I),window.removeEventListener("scroll",I,!0)});const q=je(()=>(c.value.trim().length>0||h.value.length>0)&&a.models.includes(u.value)&&!a.disabled);we(()=>a.modelValue,E=>{c.value=E}),we([()=>a.initialModel,()=>a.models],([E,R],oe)=>{const xe=!oe||E!==oe[0]?E:u.value;u.value=R.includes(xe)?xe:R[0]??"",R.length||te()},{immediate:!0,deep:!0});function le(E){a.disabled||(c.value=E.target.value,r("update:modelValue",c.value))}function he(){const E=w.value;E&&(E.style.height="auto",E.style.height=`${Math.min(Math.max(E.scrollHeight,40),128)}px`)}we(c,()=>ke(he));function se(E){a.disabled||!a.models.includes(E)||(u.value=E,te(!0),r("model-change",E))}function ae(E){a.disabled||(h.value=[...h.value,...Array.from(E.target.files||[])],m.value&&(m.value.value=""))}function pe(){q.value&&(r("send",{text:c.value.trim(),model:u.value,files:[...h.value]}),c.value="",h.value=[],r("update:modelValue",""))}function Z(E){E.key==="Enter"&&!E.shiftKey&&!E.isComposing&&(E.preventDefault(),pe())}return(E,R)=>(y(),z("div",Od,[h.value.length?(y(),z("div",Ud,[(y(!0),z(me,null,Pe(h.value,(oe,ce)=>(y(),z("span",{key:`${oe.name}-${ce}`,class:"file-chip"},[B(K(Nd),{size:12}),l("span",null,X(oe.name),1),l("button",{type:"button","aria-label":`Remove ${oe.name}`,disabled:e.disabled,onClick:xe=>O(ce)},[B(K(Un),{size:9,"stroke-width":1.7})],8,Qd)]))),128))])):ge("",!0),l("div",{class:fe(["composer",{"is-disabled":e.disabled}])},[l("div",Yd,[l("textarea",{ref_key:"textarea",ref:w,value:c.value,placeholder:e.placeholder,"aria-label":"Message the assistant",disabled:e.disabled,rows:"1",onInput:le,onKeydown:Z},null,40,Pd)]),l("div",_d,[l("button",{type:"button",class:"icon-button",title:"Add attachments","aria-label":"Add attachments",disabled:e.disabled,onClick:R[0]||(R[0]=oe=>{var ce;return(ce=m.value)==null?void 0:ce.click()})},[B(K(Jr),{size:18,"stroke-width":1.7})],8,$d),l("input",{ref_key:"input",ref:m,class:"file-input",type:"file",disabled:e.disabled,multiple:"","aria-label":"Choose files",onChange:ae},null,40,Rd),l("div",{ref_key:"modelRoot",ref:U,class:"model-select",onKeydown:C,onFocusout:f},[l("button",{type:"button",ref_key:"modelTrigger",ref:ee,class:"model-button","aria-haspopup":"menu","aria-controls":G,"aria-expanded":p.value,"aria-label":"Select model",disabled:e.disabled||!e.models.length,onClick:L},[u.value?(y(),Ne(K(s),{key:0,model:u.value},null,8,["model"])):ge("",!0),l("span",Bd,X(u.value||"No models"),1),B(K(Qt),{size:12})],8,Wd),(y(),Ne(pr,{to:"body"},[B(ct,{name:"composer-menu",onBeforeLeave:F},{default:Ke(()=>[p.value?(y(),z("div",{key:0,ref_key:"modelMenu",ref:Y,id:G,class:"model-menu",style:Yt(V.value),role:"menu","aria-label":"Models",onKeydown:C,onFocusout:f},[(y(!0),z(me,null,Pe(e.models,oe=>(y(),z("button",{key:oe,type:"button",role:"menuitemradio",disabled:e.disabled,"aria-checked":u.value===oe,onClick:ce=>se(oe)},[B(K(s),{model:oe},null,8,["model"]),l("span",Vd,X(oe),1),u.value===oe?(y(),Ne(K(it),{key:0,size:14})):ge("",!0)],8,Hd))),128))],36)):ge("",!0)]),_:1})]))],544),l("button",{type:"button",class:"send-button",disabled:!q.value,"aria-label":"Send message",onClick:pe},[...R[1]||(R[1]=[l("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[l("g",{class:"send-glyph"},[l("path",{d:"M12 18V6m-6 6 6-6 6 6"})])],-1)])],8,Gd)])],2)]))}}),jt=(e,t)=>{const n=e.__vccOpts||e;for(const[o,i]of t)n[o]=i;return n},Zd=jt(Fd,[["__scopeId","data-v-d126e9cf"]]),Kd={class:"chat-conversation","aria-label":"Chat conversation"},Jd={class:"conversation-body"},qd=["data-scrolling"],Xd={key:0,class:"conversation-empty"},ep={class:"conversation-message-list"},tp=["data-message-id","aria-label"],np={key:0,class:"system-text"},op={key:0,class:"message-attachments"},ip=["aria-label","onClick"],sp=["src","alt"],ap={key:1,class:"user-bubble"},rp={key:0,class:"conversation-fold process-heading"},lp=["aria-expanded","aria-controls","onClick"],cp={key:0,class:"failed-count"},up={key:1,class:"process-meta"},dp=["id","data-block-kind","inert","aria-hidden"],pp={key:0,class:"thought-text"},Mp=["aria-expanded","aria-controls","onClick"],gp={key:2,class:"thought-badge"},fp=["id","inert","aria-hidden"],hp={class:"thought-text"},mp=["data-state"],yp=["aria-expanded","aria-controls","onClick"],vp={class:"tools-count"},Np={key:3,class:"failed-count"},xp=["id","inert","aria-hidden"],bp={class:"tool-list"},jp=["data-state"],Lp=["title"],Dp=["title"],wp=["id","inert","aria-hidden"],Ip={class:"tool-output"},Tp={key:0},zp={key:1,class:"message-status"},Ap={key:2,class:"message-error",role:"alert"},kp={key:3,class:"message-actions"},Sp=["data-message-action","disabled","onClick"],Ep={key:1,class:"generation-status",role:"status"},Cp={class:"conversation-bottom"},Op={key:0,class:"composer-error",role:"alert"},Up={key:1,class:"pending-attachments"},Qp=["aria-label","onClick"],Yp=["src","alt"],Pp=["title"],_p=["aria-label","disabled","onClick"],$p={class:"composer-input-slot"},Rp=["value","placeholder","disabled"],Wp={class:"composer-toolbar"},Bp=["disabled"],Hp=["accept","disabled"],Vp=["disabled","aria-expanded","aria-controls"],Gp={class:"model-trigger-label"},Fp=["id"],Zp=["aria-checked","onClick"],Kp={class:"model-option-label"},Jp={class:"composer-send-actions"},qp=["data-kind","disabled","aria-label","title"],Xp=["src","alt"],eM=Ze({__name:"ChatConversation",props:{messages:{},modelValue:{},model:{},models:{default:()=>["Claude Sonnet 4.6","GPT-5.4","Gemini 3.1 Pro"]},busy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},sessionKey:{default:""},placeholder:{default:"Message…"},error:{default:""},accept:{default:""}},emits:["send","stop","update:modelValue","update:model","message-action"],setup(e,{expose:t,emit:n}){const o={claude:"data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+Q2xhdWRlPC90aXRsZT48cGF0aCBkPSJtNC43MTQ0IDE1Ljk1NTUgNC43MTc0LTIuNjQ3MS4wNzktLjIzMDctLjA3OS0uMTI3NWgtLjIzMDdsLS43ODkzLS4wNDg2LTIuNjk1Ni0uMDcyOS0yLjMzNzUtLjA5NzEtMi4yNjQ2LS4xMjE0LS41NzA3LS4xMjE1LS41MzQzLS43MDQyLjA1NDYtLjM1MjIuNDc5Ny0uMzIxOC42ODYuMDYwOCAxLjUxNzkuMTAzMiAyLjI3NjcuMTU3OCAxLjY1MTQuMDk3MiAyLjQ0NjguMjU1aC4zODg2bC4wNTQ2LS4xNTc5LS4xMzM2LS4wOTcxLS4xMDMyLS4wOTcyTDYuOTczIDkuODM1NmwtMi41NS0xLjY4NzktMS4zMzU2LS45NzE0LS43MjI1LS40OTE4LS4zNjQzLS40NjE0LS4xNTc4LTEuMDA3OC42NTU3LS43MjI1Ljg4MDMuMDYwNy4yMjQ2LjA2MDcuODkyNS42ODYgMS45MDY0IDEuNDc1NCAyLjQ4OTMgMS44MzM2LjM2NDMuMzAzNS4xNDU3LS4xMDMyLjAxODItLjA3MjgtLjE2NC0uMjczMy0xLjM1MzktMi40NDY3LTEuNDQ1LTIuNDg5My0uNjQzNS0xLjAzMi0uMTctLjYxOTRjLS4wNjA3LS4yNTUtLjEwMzItLjQ2NzQtLjEwMzItLjcyODVMNi4yODcuMTMzNSA2LjY5OTcgMGwuOTk1Ny4xMzM2LjQxOS4zNjQyLjYxOTIgMS40MTQ3IDEuMDAxOCAyLjIyODIgMS41NTQzIDMuMDI5Ni40NTUzLjg5ODUuMjQyOS44MzE4LjA5MS4yNTVoLjE1Nzl2LS4xNDU3bC4xMjc1LTEuNzA2LjIzNjgtMi4wOTQ3LjIzMDctMi42OTU3LjA3ODktLjc1ODkuMzc2NC0uOTEwNy43NDY4LS40OTE4LjU4MjguMjc5My40Nzk3LjY4Ni0uMDY2OC40NDMzLS4yODUzIDEuODUxNy0uNTU4NiAyLjkwMjEtLjM2NDMgMS45NDI5aC4yMTI1bC4yNDI5LS4yNDI5Ljk4MzUtMS4zMDUzIDEuNjUxNC0yLjA2NDMuNzI4Ni0uODE5Ni44NS0uOTA0Ni41NDY0LS40MzExaDEuMDMyMWwuNzU5IDEuMTI5My0uMzQgMS4xNjU3LTEuMDYyNSAxLjM0NzgtLjg4MDQgMS4xNDE0LTEuMjYyOCAxLjctLjc4OTMgMS4zNi4wNzI5LjEwOTMuMTg4Mi0uMDE4MyAyLjg1MzUtLjYwNyAxLjU0MjEtLjI3OTQgMS44Mzk2LS4zMTU3LjgzMTguMzg4Ni4wOTEuMzk0Ni0uMzI3OC44MDc1LTEuOTY3LjQ4NTctMi4zMDcyLjQ2MTQtMy40MzY0LjgxMzYtLjA0MjUuMDMwNC4wNDg2LjA2MDcgMS41NDgyLjE0NTcuNjYxOC4wMzY0aDEuNjIxbDMuMDE3NS4yMjQ3Ljc4OTIuNTIyLjQ3MzYuNjM3Ni0uMDc5LjQ4NTctMS4yMTQyLjYxOTMtMS42MzkzLS4zODg2LTMuODI1LS45MTA3LTEuMzExMy0uMzI3OWgtLjE4MjJ2LjEwOTNsMS4wOTI5IDEuMDY4NiAyLjAwMzUgMS44MDkyIDIuNTA3NSAyLjMzMTQuMTI3NS41NzY4LS4zMjE4LjQ1NTQtLjM0LS4wNDg2LTIuMjAzOS0xLjY1NzUtLjg1LS43NDY4LTEuOTI0Ni0xLjYyMWgtLjEyNzV2LjE3bC40NDMyLjY0OTYgMi4zNDM2IDMuNTIxNC4xMjE0IDEuMDgwNy0uMTcuMzUyMS0uNjA3MS4yMTI1LS42Njc5LS4xMjE0LTEuMzcyMS0xLjkyNDZMMTQuMzggMTcuOTU5bC0xLjE0MTQtMS45NDI4LS4xMzk3LjA3OS0uNjc0IDcuMjU1Mi0uMzE1Ni4zNzAzLS43Mjg2LjI3OTMtLjYwNzEtLjQ2MTQtLjMyMTgtLjc0NjguMzIxOC0xLjQ3NTMuMzg4Ni0xLjkyNDYuMzE1Ny0xLjUzLjI4NTMtMS45MDA0LjE3LS42MzE0LS4wMTIxLS4wNDI1LS4xMzk3LjAxODItMS40MzI4IDEuOTY3Mi0yLjE3OTYgMi45NDQ2LTEuNzI0MyAxLjg0NTYtLjQxMjguMTY0LS43MTY0LS4zNzA0LjA2NjctLjY2MTguNDAwOC0uNTg4OSAyLjM4Ni0zLjAzNTcgMS40Mzg5LTEuODgyLjkyOS0xLjA4NjgtLjAwNjItLjE1NzloLS4wNTQ2bC02LjMzODUgNC4xMTY0LTEuMTI5My4xNDU3LS40ODU3LS40NTU0LjA2MDgtLjc0NjcuMjMwNy0uMjQyOSAxLjkwNjQtMS4zMTE0WiIvPjwvc3ZnPg==",openai:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIxIiBoZWlnaHQ9IjcyMSIgdmlld0JveD0iMCAwIDcyMSA3MjEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xNjM3XzI5MzQpIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxXzE2MzdfMjkzNCkiPgo8cGF0aCBkPSJNMzA0LjI0NiAyOTQuNjExVjI0OS4wMjhDMzA0LjI0NiAyNDUuMTg5IDMwNS42ODcgMjQyLjMwOSAzMDkuMDQ0IDI0MC4zOTJMNDAwLjY5MiAxODcuNjEyQzQxMy4xNjcgMTgwLjQxNSA0MjguMDQyIDE3Ny4wNTggNDQzLjM5NCAxNzcuMDU4QzUwMC45NzEgMTc3LjA1OCA1MzcuNDQgMjIxLjY4MiA1MzcuNDQgMjY5LjE4MkM1MzcuNDQgMjcyLjU0IDUzNy40NCAyNzYuMzc5IDUzNi45NTkgMjgwLjIxOEw0NDEuOTU0IDIyNC41NThDNDM2LjE5NyAyMjEuMjAxIDQzMC40MzcgMjIxLjIwMSA0MjQuNjggMjI0LjU1OEwzMDQuMjQ2IDI5NC42MTFaTTUxOC4yNDUgNDcyLjE0NVYzNjMuMjI0QzUxOC4yNDUgMzU2LjUwNSA1MTUuMzY0IDM1MS43MDcgNTA5LjYwOCAzNDguMzQ5TDM4OS4xNzQgMjc4LjI5Nkw0MjguNTE5IDI1NS43NDNDNDMxLjg3NyAyNTMuODI2IDQzNC43NTcgMjUzLjgyNiA0MzguMTE1IDI1NS43NDNMNTI5Ljc2MiAzMDguNTIzQzU1Ni4xNTQgMzIzLjg3OSA1NzMuOTA1IDM1Ni41MDUgNTczLjkwNSAzODguMTcxQzU3My45MDUgNDI0LjYzNiA1NTIuMzE1IDQ1OC4yMjUgNTE4LjI0NSA0NzIuMTQxVjQ3Mi4xNDVaTTI3NS45MzcgMzc2LjE4MkwyMzYuNTkyIDM1My4xNTJDMjMzLjIzNSAzNTEuMjM1IDIzMS43OTQgMzQ4LjM1NCAyMzEuNzk0IDM0NC41MTVWMjM4Ljk1NkMyMzEuNzk0IDE4Ny42MTcgMjcxLjEzOSAxNDguNzQ5IDMyNC40IDE0OC43NDlDMzQ0LjU1NSAxNDguNzQ5IDM2My4yNjQgMTU1LjQ2OCAzNzkuMTAyIDE2Ny40NjNMMjg0LjU3OCAyMjIuMTY0QzI3OC44MjIgMjI1LjUyMSAyNzUuOTQyIDIzMC4zMTkgMjc1Ljk0MiAyMzcuMDM5VjM3Ni4xODZMMjc1LjkzNyAzNzYuMTgyWk0zNjAuNjI2IDQyNS4xMjJMMzA0LjI0NiAzOTMuNDU1VjMyNi4yODNMMzYwLjYyNiAyOTQuNjE2TDQxNy4wMDIgMzI2LjI4M1YzOTMuNDU1TDM2MC42MjYgNDI1LjEyMlpNMzk2Ljg1MiA1NzAuOTg5QzM3Ni42OTggNTcwLjk4OSAzNTcuOTg5IDU2NC4yNyAzNDIuMTUxIDU1Mi4yNzZMNDM2LjY3NCA0OTcuNTc0QzQ0Mi40MzEgNDk0LjIxNyA0NDUuMzExIDQ4OS40MTkgNDQ1LjMxMSA0ODIuNjk5VjM0My41NTJMNDg1LjEzOCAzNjYuNTgyQzQ4OC40OTUgMzY4LjQ5OSA0ODkuOTM2IDM3MS4zNzkgNDg5LjkzNiAzNzUuMjE5VjQ4MC43NzhDNDg5LjkzNiA1MzIuMTE3IDQ1MC4xMDkgNTcwLjk4NSAzOTYuODUyIDU3MC45ODVWNTcwLjk4OVpNMjgzLjEzNCA0NjMuOTlMMTkxLjQ4NiA0MTEuMjExQzE2NS4wOTQgMzk1Ljg1NCAxNDcuMzQzIDM2My4yMjkgMTQ3LjM0MyAzMzEuNTYyQzE0Ny4zNDMgMjk0LjYxNiAxNjkuNDE1IDI2MS41MDkgMjAzLjQ4IDI0Ny41OTNWMzU2Ljk5MUMyMDMuNDggMzYzLjcxIDIwNi4zNjEgMzY4LjUwOCAyMTIuMTE3IDM3MS44NjZMMzMyLjA3NCA0NDEuNDM3TDI5Mi43MjkgNDYzLjk5QzI4OS4zNzIgNDY1LjkwNyAyODYuNDkxIDQ2NS45MDcgMjgzLjEzNCA0NjMuOTlaTTI3Ny44NTkgNTQyLjY4QzIyMy42MzkgNTQyLjY4IDE4My44MTMgNTAxLjg5NSAxODMuODEzIDQ1MS41MTRDMTgzLjgxMyA0NDcuNjc1IDE4NC4yOTQgNDQzLjgzNiAxODQuNzcxIDQzOS45OTdMMjc5LjI5NSA0OTQuNjk4QzI4NS4wNTEgNDk4LjA1NiAyOTAuODEyIDQ5OC4wNTYgMjk2LjU2OCA0OTQuNjk4TDQxNy4wMDIgNDI1LjEyN1Y0NzAuNzFDNDE3LjAwMiA0NzQuNTQ5IDQxNS41NjIgNDc3LjQyOSA0MTIuMjA0IDQ3OS4zNDZMMzIwLjU1NyA1MzIuMTI2QzMwOC4wODEgNTM5LjMyMyAyOTMuMjA2IDU0Mi42OCAyNzcuODU0IDU0Mi42OEgyNzcuODU5Wk0zOTYuODUyIDU5OS43NzZDNDU0LjkxMSA1OTkuNzc2IDUwMy4zNyA1NTguNTEzIDUxNC40MSA1MDMuODEyQzU2OC4xNDkgNDg5Ljg5NiA2MDIuNjk2IDQzOS41MTUgNjAyLjY5NiAzODguMTc2QzYwMi42OTYgMzU0LjU4NyA1ODguMzAzIDMyMS45NjIgNTYyLjM5MiAyOTguNDVDNTY0Ljc5MSAyODguMzczIDU2Ni4yMzEgMjc4LjI5NiA1NjYuMjMxIDI2OC4yMjRDNTY2LjIzMSAxOTkuNjExIDUxMC41NzEgMTQ4LjI2NyA0NDYuMjc0IDE0OC4yNjdDNDMzLjMyMiAxNDguMjY3IDQyMC44NDYgMTUwLjE4NCA0MDguMzcgMTU0LjUwNUMzODYuNzc1IDEzMy4zOTIgMzU3LjAyNiAxMTkuOTU4IDMyNC40IDExOS45NThDMjY2LjM0MiAxMTkuOTU4IDIxNy44ODMgMTYxLjIyIDIwNi44NDMgMjE1LjkyMUMxNTMuMTA0IDIyOS44MzcgMTE4LjU1NyAyODAuMjE4IDExOC41NTcgMzMxLjU1N0MxMTguNTU3IDM2NS4xNDYgMTMyLjk1IDM5Ny43NzEgMTU4Ljg2MSA0MjEuMjgzQzE1Ni40NjIgNDMxLjM2IDE1NS4wMjIgNDQxLjQzNyAxNTUuMDIyIDQ1MS41MUMxNTUuMDIyIDUyMC4xMjMgMjEwLjY4MiA1NzEuNDY2IDI3NC45NzggNTcxLjQ2NkMyODcuOTMxIDU3MS40NjYgMzAwLjQwNyA1NjkuNTQ5IDMxMi44ODMgNTY1LjIyOEMzMzQuNDczIDU4Ni4zNDEgMzY0LjIyMiA1OTkuNzc2IDM5Ni44NTIgNTk5Ljc3NloiIGZpbGw9ImJsYWNrIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNzIwIiBoZWlnaHQ9IjcyMCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNjA2OTM0IDAuMDk5OTc1NikiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNDg0LjEzOSIgaGVpZ2h0PSI0NzkuODE4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE4LjU1NyAxMTkuOTU4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",gemini:"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjFlbSIgc3R5bGU9ImZsZXg6bm9uZTtsaW5lLWhlaWdodDoxIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkdlbWluaTwvdGl0bGU+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9IiMzMTg2RkYiPjwvcGF0aD48cGF0aCBkPSJNMjAuNjE2IDEwLjgzNWExNC4xNDcgMTQuMTQ3IDAgMDEtNC40NS0zLjAwMSAxNC4xMTEgMTQuMTExIDAgMDEtMy42NzgtNi40NTIuNTAzLjUwMyAwIDAwLS45NzUgMCAxNC4xMzQgMTQuMTM0IDAgMDEtMy42NzkgNi40NTIgMTQuMTU1IDE0LjE1NSAwIDAxLTQuNDUgMy4wMDFjLS42NS4yOC0xLjMxOC41MDUtMi4wMDIuNjc4YS41MDIuNTAyIDAgMDAwIC45NzVjLjY4NC4xNzIgMS4zNS4zOTcgMi4wMDIuNjc3YTE0LjE0NyAxNC4xNDcgMCAwMTQuNDUgMy4wMDEgMTQuMTEyIDE0LjExMiAwIDAxMy42NzkgNi40NTMuNTAyLjUwMiAwIDAwLjk3NSAwYy4xNzItLjY4NS4zOTctMS4zNTEuNjc3LTIuMDAzYTE0LjE0NSAxNC4xNDUgMCAwMTMuMDAxLTQuNDUgMTQuMTEzIDE0LjExMyAwIDAxNi40NTMtMy42NzguNTAzLjUwMyAwIDAwMC0uOTc1IDEzLjI0NSAxMy4yNDUgMCAwMS0yLjAwMy0uNjc4eiIgZmlsbD0idXJsKCNsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfKSI+PC9wYXRoPjxwYXRoIGQ9Ik0yMC42MTYgMTAuODM1YTE0LjE0NyAxNC4xNDcgMCAwMS00LjQ1LTMuMDAxIDE0LjExMSAxNC4xMTEgMCAwMS0zLjY3OC02LjQ1Mi41MDMuNTAzIDAgMDAtLjk3NSAwIDE0LjEzNCAxNC4xMzQgMCAwMS0zLjY3OSA2LjQ1MiAxNC4xNTUgMTQuMTU1IDAgMDEtNC40NSAzLjAwMWMtLjY1LjI4LTEuMzE4LjUwNS0yLjAwMi42NzhhLjUwMi41MDIgMCAwMDAgLjk3NWMuNjg0LjE3MiAxLjM1LjM5NyAyLjAwMi42NzdhMTQuMTQ3IDE0LjE0NyAwIDAxNC40NSAzLjAwMSAxNC4xMTIgMTQuMTEyIDAgMDEzLjY3OSA2LjQ1My41MDIuNTAyIDAgMDAuOTc1IDBjLjE3Mi0uNjg1LjM5Ny0xLjM1MS42NzctMi4wMDNhMTQuMTQ1IDE0LjE0NSAwIDAxMy4wMDEtNC40NSAxNC4xMTMgMTQuMTEzIDAgMDE2LjQ1My0zLjY3OC41MDMuNTAzIDAgMDAwLS45NzUgMTMuMjQ1IDEzLjI0NSAwIDAxLTIuMDAzLS42Nzh6IiBmaWxsPSJ1cmwoI2xvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8pIj48L3BhdGg+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9InVybCgjbG9iZS1pY29ucy1nZW1pbmktMi1fUl8wXykiPjwvcGF0aD48ZGVmcz48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfIiB4MT0iNyIgeDI9IjExIiB5MT0iMTUuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjMDhCOTYyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDhCOTYyIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8iIHgxPSI4IiB4Mj0iMTEuNSIgeTE9IjUuNSIgeTI9IjExIj48c3RvcCBzdG9wLWNvbG9yPSIjRjk0NTQzIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjk0NTQzIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTItX1JfMF8iIHgxPSIzLjUiIHgyPSIxNy41IiB5MT0iMTMuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjRkFCQzEyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuNDYiIHN0b3AtY29sb3I9IiNGQUJDMTIiIHN0b3Atb3BhY2l0eT0iMCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==",deepseek:"data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RGVlcFNlZWs8L3RpdGxlPjxwYXRoIGQ9Ik0yMy43NDggNC42NTFjLS4yNTQtLjEyNC0uMzY0LjExMy0uNTEyLjIzMy0uMDUxLjA0LS4wOTQuMDktLjEzNy4xMzctLjM3Mi4zOTctLjgwNi42NTctMS4zNzMuNjI2LS44MjktLjA0Ni0xLjUzNy4yMTQtMi4xNjMuODQ4LS4xMzMtLjc4Mi0uNTc1LTEuMjQ4LTEuMjQ3LTEuNTQ4LS4zNTItLjE1NS0uNzA4LS4zMTEtLjk1NS0uNjUtLjE3Mi0uMjQtLjIxOS0uNTA5LS4zMDUtLjc3NC0uMDU1LS4xNi0uMTEtLjMyMy0uMjkzLS4zNS0uMi0uMDMxLS4yNzguMTM2LS4zNTYuMjc2LS4zMTMuNTcyLS40MzQgMS4yMDItLjQyMiAxLjg0LjAyNyAxLjQzNi42MzMgMi41OCAxLjgzOCAzLjM5My4xMzcuMDk0LjE3Mi4xODcuMTI5LjMyMy0uMDgyLjI4LS4xOC41NTMtLjI2Ni44MzMtLjA1NS4xNzktLjEzNy4yMTgtLjMyOC4xNGE1LjUgNS41IDAgMCAxLTEuNzM3LTEuMTc5Yy0uODU3LS44MjgtMS42MzEtMS43NDMtMi41OTctMi40NmExMiAxMiAwIDAgMC0uNjg5LS40N2MtLjk4NS0uOTU3LjEzLTEuNzQzLjM4Ny0xLjgzNi4yNy0uMDk4LjA5NC0uNDMzLS43NzgtLjQyOC0uODcyLjAwMy0xLjY3LjI5NS0yLjY4Ny42ODVhMyAzIDAgMCAxLS40NjUuMTM2IDkuNiA5LjYgMCAwIDAtMi44ODMtLjEwMWMtMS44ODUuMjEtMy4zOSAxLjEtNC40OTcgMi42MjJDLjA4MiA4Ljc3Ni0uMjMxIDEwLjg1NC4xNTIgMTMuMDJjLjQwMyAyLjI4NCAxLjU2OCA0LjE3NSAzLjM2IDUuNjUzIDEuODU3IDEuNTMzIDMuOTk3IDIuMjg0IDYuNDM4IDIuMTQgMS40ODItLjA4NSAzLjEzMi0uMjg0IDQuOTk0LTEuODYuNDcuMjM0Ljk2Mi4zMjggMS43OC4zOTguNjI5LjA1OCAxLjIzNS0uMDMxIDEuNzA1LS4xMjkuNzM1LS4xNTUuNjg0LS44MzYuNDE4LS45NjEtMi4xNTUtMS4wMDQtMS42ODItLjU5NS0yLjExMi0uOTI2IDEuMDk1LTEuMjk1IDIuNzY4LTMuNTk4IDMuMjg0LTYuNzMzLjA1LS4zNDYuMTE1LS44MzQuMTA4LTEuMTE0LS4wMDQtLjE3MS4wMzUtLjIzOC4yMy0uMjU3YTQuMiA0LjIgMCAwIDAgMS41NDUtLjQ3NWMxLjM5Ny0uNzYzIDEuOTYtMi4wMTYgMi4wOTMtMy41MTcuMDItLjIzLS4wMDQtLjQ2Ny0uMjQ3LS41ODhNMTEuNTggMTguMTY4Yy0yLjA4OC0xLjY0Mi0zLjEwMS0yLjE4My0zLjUyLTIuMTYtLjM5LjAyNC0uMzIuNDcyLS4yMzQuNzYzLjA5LjI4OC4yMDcuNDg3LjM3MS43NC4xMTQuMTY3LjE5Mi40MTYtLjExMy42MDMtLjY3My40MTYtMS44NDItLjE0LTEuODk3LS4xNjgtMS4zNjEtLjgwMS0yLjUtMS44Ni0zLjMwMS0zLjMwNi0uNzc1LTEuMzkzLTEuMjI1LTIuODg4LTEuMjk5LTQuNDgyLS4wMi0uMzg1LjA5NC0uNTIyLjQ3Ny0uNTkyYTQuNyA0LjcgMCAwIDEgMS41My0uMDM4YzIuMTMxLjMxMSAzLjk0NiAxLjI2NCA1LjQ2NyAyLjc3NC44NjguODYgMS41MjUgMS44ODcgMi4yMDIgMi44OS43MiAxLjA2NiAxLjQ5NCAyLjA4MiAyLjQ4IDIuOTE1LjM0OC4yOTEuNjI2LjUxMy44OTIuNjc3LS44MDIuMDktMi4xNC4xMDktMy4wNTUtLjYxNXptMS4wMDEtNi40NGEuMzA2LjMwNiAwIDAgMSAuNDE1LS4yODcuMy4zIDAgMCAxIC4xMTMuMDc0LjMuMyAwIDAgMSAuMDg2LjIxNGMwIC4xNy0uMTM2LjMwNy0uMzA4LjMwN2EuMzAzLjMwMyAwIDAgMS0uMzA2LS4zMDdtMy4xMSAxLjU5NmMtLjIuMDgxLS40LjE1MS0uNTkxLjE2YTEuMjUgMS4yNSAwIDAgMS0uNzk4LS4yNTRjLS4yNzQtLjIzLS40Ny0uMzU4LS41NTEtLjc1OGExLjcgMS43IDAgMCAxIC4wMTUtLjU4OGMuMDctLjMyNy0uMDA3LS41MzctLjIzOC0uNzI3LS4xODgtLjE1Ni0uNDI2LS4xOTktLjY4OS0uMTk5YS42LjYgMCAwIDEtLjI1NC0uMDc4LjI1My4yNTMgMCAwIDEtLjExNC0uMzU4IDEgMSAwIDAgMSAuMTkyLS4yMWMuMzU2LS4yMDIuNzY3LS4xMzYgMS4xNDYuMDE2LjM1Mi4xNDQuNjE4LjQwOCAxLjAwMS43ODIuMzkyLjQ1MS40NjIuNTc2LjY4NS45MTUuMTc2LjI2NC4zMzYuNTM2LjQ0Ni44NDguMDY2LjE5NC0uMDIuMzUzLS4yNS40NSIvPjwvc3ZnPg=="},i={claude:"Claude",openai:"OpenAI",gemini:"Gemini",deepseek:"DeepSeek"};function s(N,P=""){const k=P.trim().toLowerCase().replace(/[^a-z0-9]+/g,"");if(P.trim())return{anthropic:"claude",claude:"claude",claudecode:"claude",openai:"openai",google:"gemini",googlegemini:"gemini",googleaistudio:"gemini",gemini:"gemini",deepseek:"deepseek"}[k];const Me=N.trim().toLowerCase();if(/^(?:anthropic\/)?claude(?:$|[\s-])/.test(Me))return"claude";if(/^(?:openai\/)?(?:gpt[-\s]?\d|chatgpt(?:$|[\s-])|o[134](?:$|[\s-]))/.test(Me))return"openai";if(/^(?:google\/)?gemini(?:$|[\s-])/.test(Me))return"gemini";if(/^deepseek(?:$|[\s-])/.test(Me))return"deepseek"}const a=Ze({props:{model:{type:String,default:""},provider:{type:String,default:""},size:{type:Number,default:20}},setup:N=>()=>{const P=s(N.model,N.provider),k=P!=="gemini",Me=Math.round(N.size*(P==="openai"?.82:.58));return Ce("span",{class:["model-provider-mark",{"is-color":P&&!k}],"data-provider-logo":P??"unknown","aria-hidden":"true",title:P?`${i[P]} logo`:"Custom model",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:`${N.size}px`,height:`${N.size}px`,boxSizing:"border-box",border:"1px solid var(--provider-logo-border, #e5e5e8)",borderRadius:`${N.size>=28?9:N.size>=20?6:4}px`,background:"var(--provider-logo-surface, #fff)",color:"var(--provider-logo-muted, #a1a1aa)"}},P?[Ce("img",{src:o[P],alt:"","aria-hidden":"true",class:["model-provider-image",{"is-monochrome":k}],"data-logo-source":"bundled-brand-asset",style:{display:"block",objectFit:"contain",width:`${Me}px`,height:`${Me}px`}})]:[Ce(ii,{size:Math.round(N.size*.5),strokeWidth:1.7,"aria-hidden":"true"})])}}),r=e,c=n,p=H([{id:"example-user-1",role:"user",text:"Check the typography on the homepage."},{id:"example-assistant-1",role:"assistant",parts:[{kind:"thought",text:"Check the hierarchy, type sizes, and contrast."},{kind:"tool",id:"read-page",title:"Read page styles",status:"success",input:"src/styles.css",output:"Read the heading, body, and supporting text styles."},{kind:"message",text:`Use three levels: headings, body text, and supporting details.

Keep the body readable, then refine the space between headings and paragraphs.`}]},{id:"example-user-2",role:"user",text:"Keep body text at 15px and supporting text at 12px or above."}]),h=H(""),m=H(r.models[0]??""),w=je({get:()=>r.modelValue??h.value,set:N=>{r.modelValue===void 0&&(h.value=N),c("update:modelValue",N)}}),U=je(()=>r.model??m.value),Y=je(()=>r.messages??p.value),V=je(()=>r.busy||Y.value.some(N=>N.streaming)),ee=H(null),G=H(null),te=H(null),S=H(null),Q=H(!0),I=H(!1),L=H(!1),C=H(!1),f=H(!1),W=H(null),F=H(null),O=H(null),q=H(null),le=`conversation-${jn().replace(/:/g,"")}`,he=H({}),se=H([]),ae=new Set;let pe=0,Z=0,E,R=!1,oe=!1,ce=!1,xe,Le;const Te=new Set;function Oe(){Te.forEach(N=>N.cancel()),Te.clear()}function Je(){document.hidden&&Oe()}function Fe(){Le!=null&&Le.matches&&Oe()}we(()=>Y.value.map(N=>`${N.role}:${N.id}`),(N,P)=>{if(!Le||Le.matches||document.hidden)return;const k=new Set(P),Me=new Set(N.filter(Qe=>Qe.startsWith("user:")&&!k.has(Qe)).map(Qe=>Qe.slice(5)));Me.size&&ke(()=>{var Qe;R||Le!=null&&Le.matches||document.hidden||(Qe=S.value)==null||Qe.querySelectorAll(".message-user").forEach(ne=>{if(!Me.has(ne.dataset.messageId??""))return;const de=ne.querySelector(".user-bubble");if(!de)return;const Ee=de.animate([{transform:"translate3d(0, 18px, 0)",opacity:0},{transform:"none",opacity:1}],{duration:360,easing:"cubic-bezier(.16,1,.3,1)"});Ee.id="message-send-arrival",Te.add(Ee),Ee.onfinish=()=>{Te.delete(Ee)},Ee.oncancel=()=>{Te.delete(Ee)}})})});function nt(N){try{const P=new URL(N,"https://component.invalid");return["http:","https:","mailto:"].includes(P.protocol)?N:void 0}catch{return}}function g(N,P=0){if(P>4)return[N];const k=[],Me=/`([^`\n]+)`|\[([^\]\n]+)\]\(([^\s)]+)\)|\*\*([^*\n]+)\*\*|\*([^*\n]+)\*/g;let Qe=0;for(const ne of N.matchAll(Me)){if(k.push(N.slice(Qe,ne.index)),ne[1]!==void 0)k.push(Ce("code",ne[1]));else if(ne[2]!==void 0){const de=nt(ne[3]);k.push(Ce(de?"a":"span",de?{href:de,target:"_blank",rel:"noopener noreferrer"}:{},g(ne[2],P+1)))}else k.push(Ce(ne[4]!==void 0?"strong":"em",g(ne[4]??ne[5]??"",P+1)));Qe=ne.index+ne[0].length}return k.push(N.slice(Qe)),k}function d(N){var ne;const P=N.replace(/\r\n?/g,`
`).split(`
`),k=[];let Me=0;const Qe=de=>/^(?:\s*```|#{1,4}\s|\s*[-*+]\s|\s*\d+\.\s|>\s?)/.test(de);for(;Me<P.length;){const de=P[Me];if(!de.trim()){Me++;continue}if(/^\s*```/.test(de)){const Ee=[];for(Me++;Me<P.length&&!/^\s*```/.test(P[Me]);)Ee.push(P[Me++]);Me++,k.push(Ce("pre",[Ce("code",Ee.join(`
`))]))}else if(/^#{1,4}\s/.test(de)){const Ee=de.match(/^(#{1,4})\s+(.*)$/);k.push(Ce(`h${Ee[1].length}`,g(Ee[2]))),Me++}else if(/^\s*(?:[-*+]|\d+\.)\s/.test(de)){const Ee=/^\s*\d+\./.test(de),Rt=[],Vn=Ee?/^\s*\d+\.\s+(.*)$/:/^\s*[-*+]\s+(.*)$/;for(;Me<P.length&&Vn.test(P[Me]);)Rt.push(Ce("li",g(P[Me++].replace(Vn,"$1"))));const at=Ee?Number(((ne=de.match(/^\s*(\d+)/))==null?void 0:ne[1])??1):void 0;k.push(Ce(Ee?"ol":"ul",Ee?{start:at}:{},Rt))}else if(/^>\s?/.test(de)){const Ee=[];for(;Me<P.length&&/^>\s?/.test(P[Me]);)Ee.push(P[Me++].replace(/^>\s?/,""));k.push(Ce("blockquote",g(Ee.join(`
`))))}else{const Ee=[de];for(Me++;Me<P.length&&P[Me].trim()&&!Qe(P[Me]);)Ee.push(P[Me++]);k.push(Ce("p",g(Ee.join(`
`))))}}return k}const x=Ze({props:{text:{type:String,default:""}},setup:N=>()=>Ce("div",{class:"conversation-prose"},d(N.text))}),T=Ze({props:{name:{type:String,required:!0},size:{type:Number,default:18}},setup:N=>()=>Ce("svg",{class:["chat-glyph",`glyph-${N.name}`],width:N.size,height:N.size,viewBox:"0 0 24 24",fill:N.name==="stop"?"currentColor":"none",stroke:N.name==="stop"?"none":"currentColor","stroke-width":N.name==="stop"?void 0:1.7,"stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[Ce("g",{class:"glyph-motion"},N.name==="send"?[Ce("path",{d:"M12 18V6m-6 6 6-6 6 6"})]:N.name==="stop"?[Ce("rect",{x:3.75,y:3.75,width:16.5,height:16.5,rx:3})]:[Ce("path",{d:"M12 3A9 9 0 1 1 3 12"}),Ce("circle",{cx:3,cy:12,r:1.65,fill:"currentColor",stroke:"none"})])])}),b=Ze({setup:()=>()=>Ce("span",{class:"thinking-busy"},[Ce("span",{class:"thinking-lamp","aria-hidden":"true"},[Ce("span",{class:"thinking-lamp-halo"}),Ce("span",{class:"thinking-lamp-core"})]),Ce("span",{class:"thinking-sheen"},"Thinking…")])}),D=je(()=>Y.value.map(N=>{var Vn;const P=encodeURIComponent(N.id),k=[...N.parts??[]];N.text&&!k.some(at=>at.kind==="message")&&k.push({kind:"message",text:N.text});const Me=[];for(const[at,Wt]of k.entries())if(Wt.kind==="tool"){const To=Me[Me.length-1];(To==null?void 0:To.kind)==="tools"?To.tools.push(Wt):Me.push({kind:"tools",key:`${P}-tools-${at}`,tools:[Wt]})}else Wt.text&&Me.push({kind:Wt.kind,key:`${P}-${Wt.kind}-${encodeURIComponent(Wt.id??String(at))}`,text:Wt.text});let Qe=-1;for(let at=Me.length-1;at>=0;at--)if(((Vn=Me[at])==null?void 0:Vn.kind)==="message"){Qe=at;break}const ne=!N.streaming,de=Me.filter((at,Wt)=>Wt!==Qe),Ee=Me[Qe],Rt=Me[Me.length-1];return{message:N,prefix:P,tailKey:Rt==null?void 0:Rt.key,blocks:ne?[...de,...Ee?[Ee]:[]]:Me,processKey:`${P}-process`,workKeys:new Set(de.map(at=>at.key)),responseKey:Ee==null?void 0:Ee.key,outputKey:N.streaming&&(Rt==null?void 0:Rt.kind)==="message"?Rt.key:void 0,failures:k.filter(at=>at.kind==="tool"&&at.status==="failed").length}})),j=je(()=>{const N=new Set;for(const P of D.value){P.workKeys.size&&N.add(P.processKey);for(const k of P.blocks)if(N.add(k.key),k.kind==="tools")for(const Me of k.tools)_(Me)&&N.add(ue(k,Me))}return N});we(j,N=>{he.value=Object.fromEntries(Object.entries(he.value).filter(([P])=>N.has(P)))});function M(N,P=!1){return he.value[N]??P}function A(N){return`${le}-${N}`}function $(N,P=!1){const k=document.getElementById(A(N));k&&Se.set(k,k.getBoundingClientRect().height),he.value={...he.value,[N]:!M(N,P)},ce=!0,Q.value=!1}function ue(N,P){return`${N.key}-tool-${encodeURIComponent(P.id)}`}function _(N){return!!(N.input||N.output)}function v(N,P=!1){return N.status==="failed"?"failed":P&&(N.status==="running"||N.status==="pending")?"running":"done"}function J(N,P=!1){return{running:"Running",failed:"Failed",done:"Done"}[v(N,P)]}function re(N,P){r.disabled||P.disabled||(ce=!0,Q.value=!1,c("message-action",{messageId:N.id,actionId:P.id}))}function be(N,P=!1){return N.tools.some(k=>v(k,P)==="running")?"running":N.tools.some(k=>v(k,P)==="failed")?"failed":"done"}function ze(N,P=!1){const k=[...N.tools].reverse().find(Qe=>v(Qe,P)==="running");if(k)return[k.title,k.summary].filter(Boolean).join(" · ");const Me=[...new Set(N.tools.map(Qe=>Qe.title))];return Me.slice(0,3).join(" · ")+(Me.length>3?" …":"")}const Se=new WeakMap;we(()=>Y.value.map(N=>[N.id,!!N.streaming]),(N,P)=>{const k=new Map(P);for(const[Me,Qe]of N){if(Qe||!k.get(Me))continue;const ne=D.value.find(de=>de.message.id===Me);if(!(!ne||M(ne.processKey,!!ne.message.interrupted)))for(const de of ne.workKeys){const Ee=document.getElementById(A(`${de}-shell`));Ee&&Se.set(Ee,Ee.getBoundingClientRect().height)}}},{flush:"pre"});function We(N){const P=N;P.removeAttribute("inert"),P.style.height=`${Se.get(N)??P.getBoundingClientRect().height}px`}function tt(N){const P=N;P.offsetHeight,P.style.height=`${P.scrollHeight}px`,Se.delete(N)}function He(N){N.style.removeProperty("height")}function qe(N){const P=N,k=getComputedStyle(P).display==="none"?Se.get(N)??0:P.getBoundingClientRect().height;Se.set(N,k),P.style.height=`${k}px`}function Ct(N){const P=N;P.setAttribute("inert",""),P.style.height=`${Se.get(N)??P.getBoundingClientRect().height}px`,Se.delete(N),P.offsetHeight,P.style.height="0px"}function st(){const N=te.value;N&&(I.value=N.scrollHeight-N.scrollTop-N.clientHeight>=80,Q.value=!ce&&!I.value,L.value&&ft())}function ft(){L.value=!0,clearTimeout(xe),xe=setTimeout(()=>{L.value=!1},650)}function en(){ce=!1,ft()}function Yn(N){N.target===te.value&&en()}function Do(N){N.target===te.value&&!N.ctrlKey&&!N.altKey&&!N.metaKey&&["ArrowUp","ArrowDown","PageUp","PageDown","Home","End"," "].includes(N.key)&&en()}function wo(){const N=te.value;N&&(I.value=N.scrollHeight-N.scrollTop-N.clientHeight>=80),ie()}function ie(){R||ce||!Q.value||Z||(Z=requestAnimationFrame(()=>{Z=0,!R&&!ce&&Q.value&&te.value&&(te.value.scrollTop=te.value.scrollHeight)}))}function ve(){ce=!1,Q.value=!0,ke(ie)}function bt(){const N=ee.value;N&&(N.style.height="auto",N.style.height=`${Math.min(Math.max(N.scrollHeight,40),128)}px`)}we(w,()=>ke(bt)),we(Y,()=>ke(ie),{deep:!0}),we(V,()=>ke(ie));const ot=je(()=>!r.disabled&&!V.value&&!!(w.value.trim()||se.value.length)&&(!r.models.length||r.models.includes(U.value)));function ht(N){r.disabled||(w.value=N.target.value)}function $t(){if(!ot.value||C.value||oe)return;oe=!0;const N=w.value.trim(),P=se.value.map(k=>k.file);if(r.messages===void 0)p.value=[...p.value,{id:`${le}-user-${++pe}`,role:"user",text:N,attachments:se.value.map(k=>({id:k.id,name:k.file.name,mimeType:k.file.type,url:k.url}))}];else for(const k of se.value)k.url&&Li(k.url);w.value="",se.value=[],c("send",{text:N,model:U.value,files:P}),ve(),ke(()=>{oe=!1})}function Ml(N){N.key!=="Enter"||N.shiftKey||N.ctrlKey||N.metaKey||N.altKey||N.isComposing||C.value||N.keyCode===229||(N.preventDefault(),$t())}function zs(N){if(r.disabled)return;const P=[...se.value];for(const k of N){if(P.some(Qe=>Qe.file.name===k.name&&Qe.file.size===k.size&&Qe.file.type===k.type&&Qe.file.lastModified===k.lastModified))continue;const Me=k.type.startsWith("image/")?URL.createObjectURL(k):void 0;Me&&ae.add(Me),P.push({id:`${le}-file-${++pe}`,file:k,url:Me})}se.value=P}function gl(N){const P=N.target;zs(Array.from(P.files??[])),P.value=""}function fl(N){var k;if(r.disabled)return;const P=Array.from(((k=N.clipboardData)==null?void 0:k.files)??[]).filter(Me=>Me.type.startsWith("image/"));P.length&&(N.preventDefault(),zs(P))}function Li(N){var P;((P=q.value)==null?void 0:P.url)===N&&wi(),URL.revokeObjectURL(N),ae.delete(N)}function hl(N){if(r.disabled)return;const P=se.value.find(k=>k.id===N);P!=null&&P.url&&Li(P.url),se.value=se.value.filter(k=>k.id!==N)}function Di(N){var P;if(!(!((P=N.mimeType)!=null&&P.startsWith("image/"))||!N.url))return Io(N)??(/^data:image\/(?:png|jpeg|gif|webp|avif|bmp);/i.test(N.url)?N.url:void 0)}function Io(N){if(N.url)try{const P=new URL(N.url,"https://component.invalid");return["http:","https:","blob:"].includes(P.protocol)?N.url:void 0}catch{return}}async function As(N,P){q.value={url:N,name:P},await ke(),!R&&O.value&&!O.value.open&&O.value.showModal()}function wi(){var N;(N=O.value)==null||N.close(),q.value=null}function un(N=!1){f.value=!1,N&&ke(()=>{var P;R||(P=F.value)==null||P.focus({preventScroll:!0})})}function Ii(){var N;return[...((N=W.value)==null?void 0:N.querySelectorAll('[role="menuitemradio"]'))??[]]}function ks(N){if(!N)return;N.focus({preventScroll:!0});const P=N.parentElement;P&&(N.offsetTop<P.scrollTop?P.scrollTop=N.offsetTop:N.offsetTop+N.offsetHeight>P.scrollTop+P.clientHeight&&(P.scrollTop=N.offsetTop+N.offsetHeight-P.clientHeight))}async function Ss(){r.disabled||!r.models.length||(f.value=!0,await ke(),!R&&f.value&&ks(Ii().find(N=>N.getAttribute("aria-checked")==="true")??Ii()[0]))}function ml(N){r.disabled||!r.models.includes(N)||(r.model===void 0&&(m.value=N),c("update:model",N),un(!0))}async function yl(N){if(N.isComposing||r.disabled||N.ctrlKey||N.altKey||N.metaKey)return;if(N.key==="Escape"&&f.value){N.preventDefault(),N.stopPropagation(),un(!0);return}if(!["ArrowDown","ArrowUp","Home","End"].includes(N.key))return;if(N.preventDefault(),!f.value){await Ss();return}const P=Ii();if(!P.length)return;const k=P.indexOf(document.activeElement),Me=N.key==="Home"?0:N.key==="End"?P.length-1:(k+(N.key==="ArrowDown"?1:-1)+P.length)%P.length;ks(P[Me])}function Es(N){var P;(P=W.value)!=null&&P.contains(N.target)||un()}function vl(N){var P;(P=W.value)!=null&&P.contains(N.relatedTarget)||un()}return we(()=>r.models,N=>{r.model===void 0&&!N.includes(m.value)&&(m.value=N[0]??""),un()},{deep:!0}),we(()=>r.model,(N,P)=>{N===void 0&&P!==void 0&&(m.value=r.models.includes(P)?P:r.models[0]??"")}),we(()=>r.disabled,N=>{N&&un()}),we(()=>r.sessionKey,()=>{w.value="";for(const N of[...ae])Li(N);se.value=[],p.value=[],he.value={},un(),C.value=!1,ve()}),wt(()=>{Le=matchMedia("(prefers-reduced-motion: reduce)"),Le.addEventListener("change",Fe),document.addEventListener("visibilitychange",Je),document.addEventListener("pointerdown",Es),typeof ResizeObserver<"u"&&(E=new ResizeObserver(wo),S.value&&E.observe(S.value),te.value&&E.observe(te.value)),bt(),ve()}),Et(()=>{var N;R=!0,clearTimeout(xe),Oe(),Le==null||Le.removeEventListener("change",Fe),document.removeEventListener("visibilitychange",Je),Z&&cancelAnimationFrame(Z),E==null||E.disconnect(),document.removeEventListener("pointerdown",Es);for(const P of ae)URL.revokeObjectURL(P);ae.clear(),(N=O.value)==null||N.close()}),t({focus:()=>{var N;return(N=ee.value)==null?void 0:N.focus()},scrollToBottom:ve}),(N,P)=>(y(),z("section",Kd,[l("div",Jd,[l("div",{ref_key:"scroller",ref:te,class:"conversation-scroller","data-scrolling":L.value||void 0,role:"region","aria-label":"Messages",tabindex:"0",onScrollPassive:st,onWheelPassive:en,onTouchmovePassive:en,onPointerdown:Yn,onKeydown:Do},[l("div",{ref_key:"transcript",ref:S,class:"conversation-transcript"},[!D.value.length&&!V.value?(y(),z("p",Xd,"Start a conversation")):ge("",!0),l("div",ep,[(y(!0),z(me,null,Pe(D.value,k=>{var Me,Qe;return y(),z("article",{key:k.message.id,class:fe(["conversation-message",`message-${k.message.role}`]),"data-message-id":k.message.id,"aria-label":k.message.role==="user"?"User message":k.message.role==="assistant"?"Assistant message":"System message"},[k.message.role==="system"?(y(),z("p",np,X(k.message.text),1)):(y(),z(me,{key:1},[(Me=k.message.attachments)!=null&&Me.length?(y(),z("div",op,[(y(!0),z(me,null,Pe(k.message.attachments,(ne,de)=>(y(),z(me,{key:ne.id??de},[Di(ne)?(y(),z("button",{key:0,type:"button",class:"image-attachment","aria-label":`Preview ${ne.name}`,onClick:Ee=>As(Di(ne),ne.name)},[l("img",{src:Di(ne),alt:ne.name,loading:"lazy",onLoad:ie},null,40,sp)],8,ip)):(y(),Ne(rn(Io(ne)?"a":"span"),{key:1,class:"message-file",href:Io(ne),download:Io(ne)?ne.name:void 0,title:ne.name},{default:Ke(()=>[B(K(ja),{"aria-hidden":"true",size:17}),l("span",null,X(ne.name),1)]),_:2},1032,["href","download","title"]))],64))),128))])):ge("",!0),k.message.role==="user"&&k.message.text?(y(),z("div",ap,[B(K(x),{text:k.message.text},null,8,["text"])])):k.message.role==="assistant"?(y(),z(me,{key:2},[B(ct,{name:"conversation-fold",onBeforeEnter:We,onEnter:tt,onAfterEnter:He,onLeave:Ct,onAfterLeave:He,onEnterCancelled:qe,onLeaveCancelled:qe},{default:Ke(()=>[!k.message.streaming&&k.workKeys.size?(y(),z("div",rp,[l("button",{type:"button",class:"process-toggle","aria-expanded":M(k.processKey,!!(k.message.streaming||k.message.interrupted)),"aria-controls":[...k.workKeys].map(ne=>A(`${ne}-shell`)).join(" "),onClick:ne=>$(k.processKey,!!(k.message.streaming||k.message.interrupted))},[P[6]||(P[6]=l("span",null,"Process",-1)),B(K(co),{"aria-hidden":"true",size:12,class:fe(["process-chevron",{"is-open":M(k.processKey,!!(k.message.streaming||k.message.interrupted))}])},null,8,["class"]),k.failures?(y(),z("span",cp,X(k.failures)+" failed",1)):ge("",!0),k.message.interrupted?(y(),z("span",up,"Interrupted")):ge("",!0)],8,lp)])):ge("",!0)]),_:2},1024),(y(!0),z(me,null,Pe(k.blocks,ne=>(y(),Ne(ct,{key:ne.key,name:"conversation-fold",onBeforeEnter:We,onEnter:tt,onAfterEnter:He,onLeave:Ct,onAfterLeave:He,onEnterCancelled:qe,onLeaveCancelled:qe,persisted:""},{default:Ke(()=>[Xe(l("div",{id:A(`${ne.key}-shell`),class:fe(["conversation-fold message-block",{"completed-response":!k.message.streaming&&k.workKeys.size&&ne.key===k.responseKey}]),"data-block-kind":ne.kind,inert:!k.message.streaming&&k.workKeys.has(ne.key)&&!M(k.processKey,!!(k.message.streaming||k.message.interrupted))||void 0,"aria-hidden":!k.message.streaming&&k.workKeys.has(ne.key)&&!M(k.processKey,!!(k.message.streaming||k.message.interrupted))||void 0},[ne.kind==="message"?(y(),Ne(K(x),{key:0,text:ne.text},null,8,["text"])):ne.kind==="thought"?(y(),z("div",{key:1,class:fe(["thought-block",{"elapsed-thought":!k.message.streaming}])},[k.message.streaming?(y(),z(me,{key:1},[l("button",{type:"button",class:"detail-toggle thought-toggle","aria-expanded":M(ne.key,ne.key===k.tailKey),"aria-controls":A(ne.key),onClick:de=>$(ne.key,ne.key===k.tailKey)},[ne.key===k.tailKey?(y(),Ne(K(T),{key:0,name:"arc",size:12,class:"working-icon"})):(y(),Ne(K(bd),{key:1,"aria-hidden":"true",size:12})),P[7]||(P[7]=l("span",{class:"thought-title"},"Thinking process",-1)),ne.key===k.tailKey?(y(),z("span",gp,"Generating…")):ge("",!0),B(K(Qt),{"aria-hidden":"true",size:12,class:fe(["disclosure",{"is-open":M(ne.key,ne.key===k.tailKey)}])},null,8,["class"])],8,Mp),B(ct,{name:"conversation-fold",onBeforeEnter:We,onEnter:tt,onAfterEnter:He,onLeave:Ct,onAfterLeave:He,onEnterCancelled:qe,onLeaveCancelled:qe,persisted:""},{default:Ke(()=>[Xe(l("div",{id:A(ne.key),class:"conversation-fold",inert:!M(ne.key,ne.key===k.tailKey)||void 0,"aria-hidden":!M(ne.key,ne.key===k.tailKey)||void 0},[l("p",hp,X(ne.text),1)],8,fp),[[Ut,M(ne.key,ne.key===k.tailKey)]])]),_:2},1024)],64)):(y(),z("p",pp,X(ne.text),1))],2)):(y(),z("div",{key:2,class:"tools-block","data-state":be(ne,!!k.message.streaming)},[l("button",{type:"button",class:"detail-toggle tools-toggle","aria-expanded":M(ne.key),"aria-controls":A(ne.key),onClick:de=>$(ne.key)},[be(ne,!!k.message.streaming)==="running"?(y(),Ne(K(T),{key:0,name:"arc",size:12,class:"working-icon"})):be(ne)==="failed"?(y(),Ne(K(oi),{key:1,"aria-hidden":"true",size:12,class:"error-icon"})):(y(),Ne(K(it),{key:2,"aria-hidden":"true",size:12})),l("span",vp,X(ne.tools.length)+" tool"+X(ne.tools.length===1?"":"s")+" used",1),be(ne,!!k.message.streaming)==="failed"?(y(),z("span",Np,X(ne.tools.filter(de=>de.status==="failed").length)+" failed",1)):ge("",!0),l("span",{class:fe(["tools-context",{"running-context":be(ne,!!k.message.streaming)==="running"}])},X(ze(ne,!!k.message.streaming)),3),B(K(Qt),{"aria-hidden":"true",size:12,class:fe(["disclosure",{"is-open":M(ne.key)}])},null,8,["class"])],8,yp),B(ct,{name:"conversation-fold",onBeforeEnter:We,onEnter:tt,onAfterEnter:He,onLeave:Ct,onAfterLeave:He,onEnterCancelled:qe,onLeaveCancelled:qe,persisted:""},{default:Ke(()=>[Xe(l("div",{id:A(ne.key),class:"conversation-fold",inert:!M(ne.key)||void 0,"aria-hidden":!M(ne.key)||void 0},[l("ul",bp,[(y(!0),z(me,null,Pe(ne.tools,de=>(y(),z("li",{key:de.id,"data-state":v(de,!!k.message.streaming)},[(y(),Ne(rn(_(de)?"button":"div"),{type:_(de)?"button":void 0,class:"tool-row","aria-expanded":_(de)?M(ue(ne,de),de.status==="failed"):void 0,"aria-controls":_(de)?A(ue(ne,de)):void 0,onClick:Ee=>_(de)&&$(ue(ne,de),de.status==="failed")},{default:Ke(()=>[v(de,!!k.message.streaming)==="running"?(y(),Ne(K(T),{key:0,name:"arc",size:16,class:"working-icon"})):de.status==="failed"?(y(),Ne(K(oi),{key:1,"aria-hidden":"true",size:16,class:"error-icon"})):/read|读取/i.test(de.title)?(y(),Ne(K(Kr),{key:2,"aria-hidden":"true",size:16})):(y(),Ne(K(Xr),{key:3,"aria-hidden":"true",size:16})),l("span",{class:fe(["tool-title",{"with-summary":de.summary}]),title:de.title},X(de.title),11,Lp),de.summary?(y(),z("span",{key:4,class:"tool-summary",title:de.summary},X(de.summary),9,Dp)):ge("",!0),l("span",{class:fe(["tool-status",{"error-text":de.status==="failed","running-context":v(de,!!k.message.streaming)==="running"}])},X(J(de,!!k.message.streaming)),3),_(de)?(y(),Ne(K(Qt),{key:5,"aria-hidden":"true",size:16,class:fe(["disclosure",{"is-open":M(ue(ne,de),de.status==="failed")}])},null,8,["class"])):ge("",!0)]),_:2},1032,["type","aria-expanded","aria-controls","onClick"])),B(ct,{name:"conversation-fold",onBeforeEnter:We,onEnter:tt,onAfterEnter:He,onLeave:Ct,onAfterLeave:He,onEnterCancelled:qe,onLeaveCancelled:qe,persisted:""},{default:Ke(()=>[Xe(l("div",{id:A(ue(ne,de)),class:"conversation-fold",inert:!M(ue(ne,de),de.status==="failed")||void 0,"aria-hidden":!M(ue(ne,de),de.status==="failed")||void 0},[l("div",Ip,[de.input?(y(),z(me,{key:0},[P[8]||(P[8]=l("span",null,"Input",-1)),l("pre",null,X(de.input),1)],64)):ge("",!0),de.output?(y(),z(me,{key:1},[l("span",{class:fe({"error-text":de.status==="failed"})},"Output",2),l("pre",{class:fe({"failed-output":de.status==="failed"})},X(de.output),3)],64)):ge("",!0)])],8,wp),[[Ut,_(de)&&M(ue(ne,de),de.status==="failed")]])]),_:2},1024)],8,jp))),128))])],8,xp),[[Ut,M(ne.key)]])]),_:2},1024)],8,mp))],10,dp),[[Ut,k.message.streaming||!k.workKeys.has(ne.key)||M(k.processKey,!!(k.message.streaming||k.message.interrupted))]])]),_:2},1024))),128)),k.message.streaming?(y(),z("div",{key:0,class:fe(["generation-status",{"is-outputting":k.outputKey}]),role:"status"},[k.outputKey?(y(),z("span",Tp,"Writing")):(y(),Ne(K(b),{key:1}))],2)):k.message.interrupted?(y(),z("p",zp,"Stopped")):ge("",!0),k.message.error?(y(),z("p",Ap,X(k.message.error),1)):ge("",!0)],64)):ge("",!0),(Qe=k.message.actions)!=null&&Qe.length?(y(),z("div",kp,[(y(!0),z(me,null,Pe(k.message.actions,ne=>(y(),z("button",{key:ne.id,type:"button",class:"message-action","data-message-action":ne.id,disabled:e.disabled||ne.disabled,onClick:de=>re(k.message,ne)},[ne.kind==="preview"?(y(),Ne(K(vd),{key:0,size:15,"aria-hidden":"true"})):ge("",!0),De(X(ne.label),1)],8,Sp))),128))])):ge("",!0)],64))],10,tp)}),128))]),e.busy&&!Y.value.some(k=>k.streaming)?(y(),z("div",Ep,[B(K(b))])):ge("",!0)],512)],40,qd),I.value?(y(),z("button",{key:0,type:"button",class:"jump-latest","aria-label":"Jump to latest message",onClick:ve},[B(K(Md),{"aria-hidden":"true",size:15}),P[9]||(P[9]=l("span",null,"Jump to latest",-1))])):ge("",!0)]),l("div",Cp,[e.error?(y(),z("p",Op,X(e.error),1)):ge("",!0),se.value.length?(y(),z("div",Up,[(y(!0),z(me,null,Pe(se.value,k=>(y(),z("div",{key:k.id,class:"pending-file"},[k.url?(y(),z("button",{key:0,type:"button",class:"pending-image","aria-label":`Preview ${k.file.name}`,onClick:Me=>As(k.url,k.file.name)},[l("img",{src:k.url,alt:k.file.name},null,8,Yp)],8,Qp)):(y(),z("span",{key:1,class:"pending-name",title:k.file.name},[B(K(ja),{"aria-hidden":"true",size:17}),l("span",null,X(k.file.name),1)],8,Pp)),l("button",{type:"button",class:"remove-file","aria-label":`Remove ${k.file.name}`,disabled:e.disabled,onClick:Me=>hl(k.id)},[B(K(Un),{"aria-hidden":"true",size:12})],8,_p)]))),128))])):ge("",!0),l("div",{class:fe(["conversation-composer",{"is-disabled":e.disabled}])},[l("div",$p,[l("textarea",{ref_key:"textarea",ref:ee,value:w.value,rows:"1",placeholder:e.placeholder,"aria-label":"Message",disabled:e.disabled,onInput:ht,onKeydown:Ml,onCompositionstart:P[0]||(P[0]=k=>C.value=!0),onCompositionend:P[1]||(P[1]=k=>C.value=!1),onPaste:fl},null,40,Rp)]),l("div",Wp,[l("button",{type:"button",class:"conversation-action attach-action","aria-label":"Add attachments",title:"Add attachments",disabled:e.disabled,onClick:P[2]||(P[2]=k=>{var Me;return(Me=G.value)==null?void 0:Me.click()})},[B(K(Jr),{"aria-hidden":"true",size:18})],8,Bp),l("input",{ref_key:"fileInput",ref:G,type:"file",multiple:"",class:"conversation-file-input",accept:e.accept||void 0,disabled:e.disabled,"aria-label":"Choose files",onChange:gl},null,40,Hp),e.models.length?(y(),z("div",{key:0,ref_key:"modelRoot",ref:W,class:"conversation-model",onKeydown:yl,onFocusout:vl},[l("button",{ref_key:"modelTrigger",ref:F,type:"button",class:"model-trigger",disabled:e.disabled,"aria-label":"Select model","aria-haspopup":"menu","aria-expanded":f.value,"aria-controls":`${le}-models`,onClick:P[3]||(P[3]=k=>f.value?un():Ss())},[U.value?(y(),Ne(K(a),{key:0,model:U.value},null,8,["model"])):ge("",!0),l("span",Gp,X(e.models.includes(U.value)?U.value:"Select model"),1),B(K(Qt),{"aria-hidden":"true",size:13,class:fe(["disclosure",{"is-open":f.value}])},null,8,["class"])],8,Vp),f.value?(y(),z("div",{key:0,id:`${le}-models`,class:"conversation-model-menu",role:"menu","aria-label":"Available models"},[(y(!0),z(me,null,Pe(e.models,k=>(y(),z("button",{key:k,type:"button",role:"menuitemradio","aria-checked":U.value===k,onClick:Me=>ml(k)},[B(K(a),{model:k},null,8,["model"]),l("span",Kp,X(k),1),U.value===k?(y(),Ne(K(it),{key:0,"aria-hidden":"true",size:14})):ge("",!0)],8,Zp))),128))],8,Fp)):ge("",!0)],544)):ge("",!0),l("div",Jp,[l("button",{type:"button",class:fe(["conversation-action composer-primary",V.value?"stop-action":"send-action"]),"data-kind":V.value?"stop":"send",disabled:V.value?e.disabled:!ot.value,"aria-label":V.value?"Stop generating":"Send message",title:V.value?"Stop generating":"Send message",onClick:P[4]||(P[4]=k=>V.value?!e.disabled&&c("stop"):$t())},[B(ct,{name:"primary-icon",mode:"out-in"},{default:Ke(()=>[(y(),Ne(K(T),{key:V.value?"stop":"send",name:V.value?"stop":"send",size:V.value?16:18},null,8,["name","size"]))]),_:1})],10,qp)])])],2)]),l("dialog",{ref_key:"previewDialog",ref:O,class:"conversation-image-dialog","aria-label":"Image preview",onClick:At(wi,["self"]),onClose:P[5]||(P[5]=k=>q.value=null)},[q.value?(y(),z(me,{key:0},[l("button",{type:"button",class:"close-preview","aria-label":"Close image preview",onClick:wi},[B(K(Un),{"aria-hidden":"true",size:20})]),l("img",{src:q.value.url,alt:q.value.name},null,8,Xp),l("p",null,X(q.value.name),1)],64)):ge("",!0)],544)]))}}),el=jt(eM,[["__scopeId","data-v-d64f00d3"]]),tM={class:"thinking-label"},nM=Ze({__name:"ThinkingIndicator",props:{label:{default:"Thinking"},busy:{type:Boolean,default:!0}},setup(e){return(t,n)=>(y(),z("span",{class:fe(["thinking-indicator",{"is-busy":e.busy}]),role:"status"},[n[0]||(n[0]=l("span",{class:"thinking-lamp","aria-hidden":"true"},[l("i",{class:"lamp-halo"}),l("i",{class:"lamp-core"})],-1)),l("span",tM,X(e.label),1)],2))}}),oM=jt(nM,[["__scopeId","data-v-067d7323"]]),iM={class:"model-label"},sM=["aria-expanded","disabled"],aM={class:"model-description"},rM={class:"model-search"},lM=["aria-activedescendant"],cM=["id","onPointerenter","onFocus","aria-selected","onClick"],uM={key:0,class:"no-models"},dM=Ze({__name:"ModelSelector",props:{modelValue:{default:"claude-sonnet"},options:{default:()=>[{id:"claude-sonnet",name:"Claude Sonnet 4",provider:"Anthropic",description:"General purpose",color:"#c58763"},{id:"gpt-4.1",name:"GPT-4.1",provider:"OpenAI",description:"Everyday reasoning",color:"#3b9b81"},{id:"gemini-pro",name:"Gemini 2.5 Pro",provider:"Google",description:"Complex tasks",color:"#648af4"},{id:"deepseek",name:"DeepSeek V3",provider:"DeepSeek",description:"Coding",color:"#6385f8"}]}},emits:["update:modelValue","select"],setup(e,{emit:t}){const n={claude:"data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+Q2xhdWRlPC90aXRsZT48cGF0aCBkPSJtNC43MTQ0IDE1Ljk1NTUgNC43MTc0LTIuNjQ3MS4wNzktLjIzMDctLjA3OS0uMTI3NWgtLjIzMDdsLS43ODkzLS4wNDg2LTIuNjk1Ni0uMDcyOS0yLjMzNzUtLjA5NzEtMi4yNjQ2LS4xMjE0LS41NzA3LS4xMjE1LS41MzQzLS43MDQyLjA1NDYtLjM1MjIuNDc5Ny0uMzIxOC42ODYuMDYwOCAxLjUxNzkuMTAzMiAyLjI3NjcuMTU3OCAxLjY1MTQuMDk3MiAyLjQ0NjguMjU1aC4zODg2bC4wNTQ2LS4xNTc5LS4xMzM2LS4wOTcxLS4xMDMyLS4wOTcyTDYuOTczIDkuODM1NmwtMi41NS0xLjY4NzktMS4zMzU2LS45NzE0LS43MjI1LS40OTE4LS4zNjQzLS40NjE0LS4xNTc4LTEuMDA3OC42NTU3LS43MjI1Ljg4MDMuMDYwNy4yMjQ2LjA2MDcuODkyNS42ODYgMS45MDY0IDEuNDc1NCAyLjQ4OTMgMS44MzM2LjM2NDMuMzAzNS4xNDU3LS4xMDMyLjAxODItLjA3MjgtLjE2NC0uMjczMy0xLjM1MzktMi40NDY3LTEuNDQ1LTIuNDg5My0uNjQzNS0xLjAzMi0uMTctLjYxOTRjLS4wNjA3LS4yNTUtLjEwMzItLjQ2NzQtLjEwMzItLjcyODVMNi4yODcuMTMzNSA2LjY5OTcgMGwuOTk1Ny4xMzM2LjQxOS4zNjQyLjYxOTIgMS40MTQ3IDEuMDAxOCAyLjIyODIgMS41NTQzIDMuMDI5Ni40NTUzLjg5ODUuMjQyOS44MzE4LjA5MS4yNTVoLjE1Nzl2LS4xNDU3bC4xMjc1LTEuNzA2LjIzNjgtMi4wOTQ3LjIzMDctMi42OTU3LjA3ODktLjc1ODkuMzc2NC0uOTEwNy43NDY4LS40OTE4LjU4MjguMjc5My40Nzk3LjY4Ni0uMDY2OC40NDMzLS4yODUzIDEuODUxNy0uNTU4NiAyLjkwMjEtLjM2NDMgMS45NDI5aC4yMTI1bC4yNDI5LS4yNDI5Ljk4MzUtMS4zMDUzIDEuNjUxNC0yLjA2NDMuNzI4Ni0uODE5Ni44NS0uOTA0Ni41NDY0LS40MzExaDEuMDMyMWwuNzU5IDEuMTI5My0uMzQgMS4xNjU3LTEuMDYyNSAxLjM0NzgtLjg4MDQgMS4xNDE0LTEuMjYyOCAxLjctLjc4OTMgMS4zNi4wNzI5LjEwOTMuMTg4Mi0uMDE4MyAyLjg1MzUtLjYwNyAxLjU0MjEtLjI3OTQgMS44Mzk2LS4zMTU3LjgzMTguMzg4Ni4wOTEuMzk0Ni0uMzI3OC44MDc1LTEuOTY3LjQ4NTctMi4zMDcyLjQ2MTQtMy40MzY0LjgxMzYtLjA0MjUuMDMwNC4wNDg2LjA2MDcgMS41NDgyLjE0NTcuNjYxOC4wMzY0aDEuNjIxbDMuMDE3NS4yMjQ3Ljc4OTIuNTIyLjQ3MzYuNjM3Ni0uMDc5LjQ4NTctMS4yMTQyLjYxOTMtMS42MzkzLS4zODg2LTMuODI1LS45MTA3LTEuMzExMy0uMzI3OWgtLjE4MjJ2LjEwOTNsMS4wOTI5IDEuMDY4NiAyLjAwMzUgMS44MDkyIDIuNTA3NSAyLjMzMTQuMTI3NS41NzY4LS4zMjE4LjQ1NTQtLjM0LS4wNDg2LTIuMjAzOS0xLjY1NzUtLjg1LS43NDY4LTEuOTI0Ni0xLjYyMWgtLjEyNzV2LjE3bC40NDMyLjY0OTYgMi4zNDM2IDMuNTIxNC4xMjE0IDEuMDgwNy0uMTcuMzUyMS0uNjA3MS4yMTI1LS42Njc5LS4xMjE0LTEuMzcyMS0xLjkyNDZMMTQuMzggMTcuOTU5bC0xLjE0MTQtMS45NDI4LS4xMzk3LjA3OS0uNjc0IDcuMjU1Mi0uMzE1Ni4zNzAzLS43Mjg2LjI3OTMtLjYwNzEtLjQ2MTQtLjMyMTgtLjc0NjguMzIxOC0xLjQ3NTMuMzg4Ni0xLjkyNDYuMzE1Ny0xLjUzLjI4NTMtMS45MDA0LjE3LS42MzE0LS4wMTIxLS4wNDI1LS4xMzk3LjAxODItMS40MzI4IDEuOTY3Mi0yLjE3OTYgMi45NDQ2LTEuNzI0MyAxLjg0NTYtLjQxMjguMTY0LS43MTY0LS4zNzA0LjA2NjctLjY2MTguNDAwOC0uNTg4OSAyLjM4Ni0zLjAzNTcgMS40Mzg5LTEuODgyLjkyOS0xLjA4NjgtLjAwNjItLjE1NzloLS4wNTQ2bC02LjMzODUgNC4xMTY0LTEuMTI5My4xNDU3LS40ODU3LS40NTU0LjA2MDgtLjc0NjcuMjMwNy0uMjQyOSAxLjkwNjQtMS4zMTE0WiIvPjwvc3ZnPg==",openai:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIxIiBoZWlnaHQ9IjcyMSIgdmlld0JveD0iMCAwIDcyMSA3MjEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xNjM3XzI5MzQpIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxXzE2MzdfMjkzNCkiPgo8cGF0aCBkPSJNMzA0LjI0NiAyOTQuNjExVjI0OS4wMjhDMzA0LjI0NiAyNDUuMTg5IDMwNS42ODcgMjQyLjMwOSAzMDkuMDQ0IDI0MC4zOTJMNDAwLjY5MiAxODcuNjEyQzQxMy4xNjcgMTgwLjQxNSA0MjguMDQyIDE3Ny4wNTggNDQzLjM5NCAxNzcuMDU4QzUwMC45NzEgMTc3LjA1OCA1MzcuNDQgMjIxLjY4MiA1MzcuNDQgMjY5LjE4MkM1MzcuNDQgMjcyLjU0IDUzNy40NCAyNzYuMzc5IDUzNi45NTkgMjgwLjIxOEw0NDEuOTU0IDIyNC41NThDNDM2LjE5NyAyMjEuMjAxIDQzMC40MzcgMjIxLjIwMSA0MjQuNjggMjI0LjU1OEwzMDQuMjQ2IDI5NC42MTFaTTUxOC4yNDUgNDcyLjE0NVYzNjMuMjI0QzUxOC4yNDUgMzU2LjUwNSA1MTUuMzY0IDM1MS43MDcgNTA5LjYwOCAzNDguMzQ5TDM4OS4xNzQgMjc4LjI5Nkw0MjguNTE5IDI1NS43NDNDNDMxLjg3NyAyNTMuODI2IDQzNC43NTcgMjUzLjgyNiA0MzguMTE1IDI1NS43NDNMNTI5Ljc2MiAzMDguNTIzQzU1Ni4xNTQgMzIzLjg3OSA1NzMuOTA1IDM1Ni41MDUgNTczLjkwNSAzODguMTcxQzU3My45MDUgNDI0LjYzNiA1NTIuMzE1IDQ1OC4yMjUgNTE4LjI0NSA0NzIuMTQxVjQ3Mi4xNDVaTTI3NS45MzcgMzc2LjE4MkwyMzYuNTkyIDM1My4xNTJDMjMzLjIzNSAzNTEuMjM1IDIzMS43OTQgMzQ4LjM1NCAyMzEuNzk0IDM0NC41MTVWMjM4Ljk1NkMyMzEuNzk0IDE4Ny42MTcgMjcxLjEzOSAxNDguNzQ5IDMyNC40IDE0OC43NDlDMzQ0LjU1NSAxNDguNzQ5IDM2My4yNjQgMTU1LjQ2OCAzNzkuMTAyIDE2Ny40NjNMMjg0LjU3OCAyMjIuMTY0QzI3OC44MjIgMjI1LjUyMSAyNzUuOTQyIDIzMC4zMTkgMjc1Ljk0MiAyMzcuMDM5VjM3Ni4xODZMMjc1LjkzNyAzNzYuMTgyWk0zNjAuNjI2IDQyNS4xMjJMMzA0LjI0NiAzOTMuNDU1VjMyNi4yODNMMzYwLjYyNiAyOTQuNjE2TDQxNy4wMDIgMzI2LjI4M1YzOTMuNDU1TDM2MC42MjYgNDI1LjEyMlpNMzk2Ljg1MiA1NzAuOTg5QzM3Ni42OTggNTcwLjk4OSAzNTcuOTg5IDU2NC4yNyAzNDIuMTUxIDU1Mi4yNzZMNDM2LjY3NCA0OTcuNTc0QzQ0Mi40MzEgNDk0LjIxNyA0NDUuMzExIDQ4OS40MTkgNDQ1LjMxMSA0ODIuNjk5VjM0My41NTJMNDg1LjEzOCAzNjYuNTgyQzQ4OC40OTUgMzY4LjQ5OSA0ODkuOTM2IDM3MS4zNzkgNDg5LjkzNiAzNzUuMjE5VjQ4MC43NzhDNDg5LjkzNiA1MzIuMTE3IDQ1MC4xMDkgNTcwLjk4NSAzOTYuODUyIDU3MC45ODVWNTcwLjk4OVpNMjgzLjEzNCA0NjMuOTlMMTkxLjQ4NiA0MTEuMjExQzE2NS4wOTQgMzk1Ljg1NCAxNDcuMzQzIDM2My4yMjkgMTQ3LjM0MyAzMzEuNTYyQzE0Ny4zNDMgMjk0LjYxNiAxNjkuNDE1IDI2MS41MDkgMjAzLjQ4IDI0Ny41OTNWMzU2Ljk5MUMyMDMuNDggMzYzLjcxIDIwNi4zNjEgMzY4LjUwOCAyMTIuMTE3IDM3MS44NjZMMzMyLjA3NCA0NDEuNDM3TDI5Mi43MjkgNDYzLjk5QzI4OS4zNzIgNDY1LjkwNyAyODYuNDkxIDQ2NS45MDcgMjgzLjEzNCA0NjMuOTlaTTI3Ny44NTkgNTQyLjY4QzIyMy42MzkgNTQyLjY4IDE4My44MTMgNTAxLjg5NSAxODMuODEzIDQ1MS41MTRDMTgzLjgxMyA0NDcuNjc1IDE4NC4yOTQgNDQzLjgzNiAxODQuNzcxIDQzOS45OTdMMjc5LjI5NSA0OTQuNjk4QzI4NS4wNTEgNDk4LjA1NiAyOTAuODEyIDQ5OC4wNTYgMjk2LjU2OCA0OTQuNjk4TDQxNy4wMDIgNDI1LjEyN1Y0NzAuNzFDNDE3LjAwMiA0NzQuNTQ5IDQxNS41NjIgNDc3LjQyOSA0MTIuMjA0IDQ3OS4zNDZMMzIwLjU1NyA1MzIuMTI2QzMwOC4wODEgNTM5LjMyMyAyOTMuMjA2IDU0Mi42OCAyNzcuODU0IDU0Mi42OEgyNzcuODU5Wk0zOTYuODUyIDU5OS43NzZDNDU0LjkxMSA1OTkuNzc2IDUwMy4zNyA1NTguNTEzIDUxNC40MSA1MDMuODEyQzU2OC4xNDkgNDg5Ljg5NiA2MDIuNjk2IDQzOS41MTUgNjAyLjY5NiAzODguMTc2QzYwMi42OTYgMzU0LjU4NyA1ODguMzAzIDMyMS45NjIgNTYyLjM5MiAyOTguNDVDNTY0Ljc5MSAyODguMzczIDU2Ni4yMzEgMjc4LjI5NiA1NjYuMjMxIDI2OC4yMjRDNTY2LjIzMSAxOTkuNjExIDUxMC41NzEgMTQ4LjI2NyA0NDYuMjc0IDE0OC4yNjdDNDMzLjMyMiAxNDguMjY3IDQyMC44NDYgMTUwLjE4NCA0MDguMzcgMTU0LjUwNUMzODYuNzc1IDEzMy4zOTIgMzU3LjAyNiAxMTkuOTU4IDMyNC40IDExOS45NThDMjY2LjM0MiAxMTkuOTU4IDIxNy44ODMgMTYxLjIyIDIwNi44NDMgMjE1LjkyMUMxNTMuMTA0IDIyOS44MzcgMTE4LjU1NyAyODAuMjE4IDExOC41NTcgMzMxLjU1N0MxMTguNTU3IDM2NS4xNDYgMTMyLjk1IDM5Ny43NzEgMTU4Ljg2MSA0MjEuMjgzQzE1Ni40NjIgNDMxLjM2IDE1NS4wMjIgNDQxLjQzNyAxNTUuMDIyIDQ1MS41MUMxNTUuMDIyIDUyMC4xMjMgMjEwLjY4MiA1NzEuNDY2IDI3NC45NzggNTcxLjQ2NkMyODcuOTMxIDU3MS40NjYgMzAwLjQwNyA1NjkuNTQ5IDMxMi44ODMgNTY1LjIyOEMzMzQuNDczIDU4Ni4zNDEgMzY0LjIyMiA1OTkuNzc2IDM5Ni44NTIgNTk5Ljc3NloiIGZpbGw9ImJsYWNrIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNzIwIiBoZWlnaHQ9IjcyMCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNjA2OTM0IDAuMDk5OTc1NikiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNDg0LjEzOSIgaGVpZ2h0PSI0NzkuODE4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE4LjU1NyAxMTkuOTU4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",gemini:"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjFlbSIgc3R5bGU9ImZsZXg6bm9uZTtsaW5lLWhlaWdodDoxIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkdlbWluaTwvdGl0bGU+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9IiMzMTg2RkYiPjwvcGF0aD48cGF0aCBkPSJNMjAuNjE2IDEwLjgzNWExNC4xNDcgMTQuMTQ3IDAgMDEtNC40NS0zLjAwMSAxNC4xMTEgMTQuMTExIDAgMDEtMy42NzgtNi40NTIuNTAzLjUwMyAwIDAwLS45NzUgMCAxNC4xMzQgMTQuMTM0IDAgMDEtMy42NzkgNi40NTIgMTQuMTU1IDE0LjE1NSAwIDAxLTQuNDUgMy4wMDFjLS42NS4yOC0xLjMxOC41MDUtMi4wMDIuNjc4YS41MDIuNTAyIDAgMDAwIC45NzVjLjY4NC4xNzIgMS4zNS4zOTcgMi4wMDIuNjc3YTE0LjE0NyAxNC4xNDcgMCAwMTQuNDUgMy4wMDEgMTQuMTEyIDE0LjExMiAwIDAxMy42NzkgNi40NTMuNTAyLjUwMiAwIDAwLjk3NSAwYy4xNzItLjY4NS4zOTctMS4zNTEuNjc3LTIuMDAzYTE0LjE0NSAxNC4xNDUgMCAwMTMuMDAxLTQuNDUgMTQuMTEzIDE0LjExMyAwIDAxNi40NTMtMy42NzguNTAzLjUwMyAwIDAwMC0uOTc1IDEzLjI0NSAxMy4yNDUgMCAwMS0yLjAwMy0uNjc4eiIgZmlsbD0idXJsKCNsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfKSI+PC9wYXRoPjxwYXRoIGQ9Ik0yMC42MTYgMTAuODM1YTE0LjE0NyAxNC4xNDcgMCAwMS00LjQ1LTMuMDAxIDE0LjExMSAxNC4xMTEgMCAwMS0zLjY3OC02LjQ1Mi41MDMuNTAzIDAgMDAtLjk3NSAwIDE0LjEzNCAxNC4xMzQgMCAwMS0zLjY3OSA2LjQ1MiAxNC4xNTUgMTQuMTU1IDAgMDEtNC40NSAzLjAwMWMtLjY1LjI4LTEuMzE4LjUwNS0yLjAwMi42NzhhLjUwMi41MDIgMCAwMDAgLjk3NWMuNjg0LjE3MiAxLjM1LjM5NyAyLjAwMi42NzdhMTQuMTQ3IDE0LjE0NyAwIDAxNC40NSAzLjAwMSAxNC4xMTIgMTQuMTEyIDAgMDEzLjY3OSA2LjQ1My41MDIuNTAyIDAgMDAuOTc1IDBjLjE3Mi0uNjg1LjM5Ny0xLjM1MS42NzctMi4wMDNhMTQuMTQ1IDE0LjE0NSAwIDAxMy4wMDEtNC40NSAxNC4xMTMgMTQuMTEzIDAgMDE2LjQ1My0zLjY3OC41MDMuNTAzIDAgMDAwLS45NzUgMTMuMjQ1IDEzLjI0NSAwIDAxLTIuMDAzLS42Nzh6IiBmaWxsPSJ1cmwoI2xvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8pIj48L3BhdGg+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9InVybCgjbG9iZS1pY29ucy1nZW1pbmktMi1fUl8wXykiPjwvcGF0aD48ZGVmcz48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfIiB4MT0iNyIgeDI9IjExIiB5MT0iMTUuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjMDhCOTYyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDhCOTYyIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8iIHgxPSI4IiB4Mj0iMTEuNSIgeTE9IjUuNSIgeTI9IjExIj48c3RvcCBzdG9wLWNvbG9yPSIjRjk0NTQzIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjk0NTQzIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTItX1JfMF8iIHgxPSIzLjUiIHgyPSIxNy41IiB5MT0iMTMuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjRkFCQzEyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuNDYiIHN0b3AtY29sb3I9IiNGQUJDMTIiIHN0b3Atb3BhY2l0eT0iMCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==",deepseek:"data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RGVlcFNlZWs8L3RpdGxlPjxwYXRoIGQ9Ik0yMy43NDggNC42NTFjLS4yNTQtLjEyNC0uMzY0LjExMy0uNTEyLjIzMy0uMDUxLjA0LS4wOTQuMDktLjEzNy4xMzctLjM3Mi4zOTctLjgwNi42NTctMS4zNzMuNjI2LS44MjktLjA0Ni0xLjUzNy4yMTQtMi4xNjMuODQ4LS4xMzMtLjc4Mi0uNTc1LTEuMjQ4LTEuMjQ3LTEuNTQ4LS4zNTItLjE1NS0uNzA4LS4zMTEtLjk1NS0uNjUtLjE3Mi0uMjQtLjIxOS0uNTA5LS4zMDUtLjc3NC0uMDU1LS4xNi0uMTEtLjMyMy0uMjkzLS4zNS0uMi0uMDMxLS4yNzguMTM2LS4zNTYuMjc2LS4zMTMuNTcyLS40MzQgMS4yMDItLjQyMiAxLjg0LjAyNyAxLjQzNi42MzMgMi41OCAxLjgzOCAzLjM5My4xMzcuMDk0LjE3Mi4xODcuMTI5LjMyMy0uMDgyLjI4LS4xOC41NTMtLjI2Ni44MzMtLjA1NS4xNzktLjEzNy4yMTgtLjMyOC4xNGE1LjUgNS41IDAgMCAxLTEuNzM3LTEuMTc5Yy0uODU3LS44MjgtMS42MzEtMS43NDMtMi41OTctMi40NmExMiAxMiAwIDAgMC0uNjg5LS40N2MtLjk4NS0uOTU3LjEzLTEuNzQzLjM4Ny0xLjgzNi4yNy0uMDk4LjA5NC0uNDMzLS43NzgtLjQyOC0uODcyLjAwMy0xLjY3LjI5NS0yLjY4Ny42ODVhMyAzIDAgMCAxLS40NjUuMTM2IDkuNiA5LjYgMCAwIDAtMi44ODMtLjEwMWMtMS44ODUuMjEtMy4zOSAxLjEtNC40OTcgMi42MjJDLjA4MiA4Ljc3Ni0uMjMxIDEwLjg1NC4xNTIgMTMuMDJjLjQwMyAyLjI4NCAxLjU2OCA0LjE3NSAzLjM2IDUuNjUzIDEuODU3IDEuNTMzIDMuOTk3IDIuMjg0IDYuNDM4IDIuMTQgMS40ODItLjA4NSAzLjEzMi0uMjg0IDQuOTk0LTEuODYuNDcuMjM0Ljk2Mi4zMjggMS43OC4zOTguNjI5LjA1OCAxLjIzNS0uMDMxIDEuNzA1LS4xMjkuNzM1LS4xNTUuNjg0LS44MzYuNDE4LS45NjEtMi4xNTUtMS4wMDQtMS42ODItLjU5NS0yLjExMi0uOTI2IDEuMDk1LTEuMjk1IDIuNzY4LTMuNTk4IDMuMjg0LTYuNzMzLjA1LS4zNDYuMTE1LS44MzQuMTA4LTEuMTE0LS4wMDQtLjE3MS4wMzUtLjIzOC4yMy0uMjU3YTQuMiA0LjIgMCAwIDAgMS41NDUtLjQ3NWMxLjM5Ny0uNzYzIDEuOTYtMi4wMTYgMi4wOTMtMy41MTcuMDItLjIzLS4wMDQtLjQ2Ny0uMjQ3LS41ODhNMTEuNTggMTguMTY4Yy0yLjA4OC0xLjY0Mi0zLjEwMS0yLjE4My0zLjUyLTIuMTYtLjM5LjAyNC0uMzIuNDcyLS4yMzQuNzYzLjA5LjI4OC4yMDcuNDg3LjM3MS43NC4xMTQuMTY3LjE5Mi40MTYtLjExMy42MDMtLjY3My40MTYtMS44NDItLjE0LTEuODk3LS4xNjgtMS4zNjEtLjgwMS0yLjUtMS44Ni0zLjMwMS0zLjMwNi0uNzc1LTEuMzkzLTEuMjI1LTIuODg4LTEuMjk5LTQuNDgyLS4wMi0uMzg1LjA5NC0uNTIyLjQ3Ny0uNTkyYTQuNyA0LjcgMCAwIDEgMS41My0uMDM4YzIuMTMxLjMxMSAzLjk0NiAxLjI2NCA1LjQ2NyAyLjc3NC44NjguODYgMS41MjUgMS44ODcgMi4yMDIgMi44OS43MiAxLjA2NiAxLjQ5NCAyLjA4MiAyLjQ4IDIuOTE1LjM0OC4yOTEuNjI2LjUxMy44OTIuNjc3LS44MDIuMDktMi4xNC4xMDktMy4wNTUtLjYxNXptMS4wMDEtNi40NGEuMzA2LjMwNiAwIDAgMSAuNDE1LS4yODcuMy4zIDAgMCAxIC4xMTMuMDc0LjMuMyAwIDAgMSAuMDg2LjIxNGMwIC4xNy0uMTM2LjMwNy0uMzA4LjMwN2EuMzAzLjMwMyAwIDAgMS0uMzA2LS4zMDdtMy4xMSAxLjU5NmMtLjIuMDgxLS40LjE1MS0uNTkxLjE2YTEuMjUgMS4yNSAwIDAgMS0uNzk4LS4yNTRjLS4yNzQtLjIzLS40Ny0uMzU4LS41NTEtLjc1OGExLjcgMS43IDAgMCAxIC4wMTUtLjU4OGMuMDctLjMyNy0uMDA3LS41MzctLjIzOC0uNzI3LS4xODgtLjE1Ni0uNDI2LS4xOTktLjY4OS0uMTk5YS42LjYgMCAwIDEtLjI1NC0uMDc4LjI1My4yNTMgMCAwIDEtLjExNC0uMzU4IDEgMSAwIDAgMSAuMTkyLS4yMWMuMzU2LS4yMDIuNzY3LS4xMzYgMS4xNDYuMDE2LjM1Mi4xNDQuNjE4LjQwOCAxLjAwMS43ODIuMzkyLjQ1MS40NjIuNTc2LjY4NS45MTUuMTc2LjI2NC4zMzYuNTM2LjQ0Ni44NDguMDY2LjE5NC0uMDIuMzUzLS4yNS40NSIvPjwvc3ZnPg=="},o={claude:"Claude",openai:"OpenAI",gemini:"Gemini",deepseek:"DeepSeek"};function i(C,f=""){const W=f.trim().toLowerCase().replace(/[^a-z0-9]+/g,"");if(f.trim())return{anthropic:"claude",claude:"claude",claudecode:"claude",openai:"openai",google:"gemini",googlegemini:"gemini",googleaistudio:"gemini",gemini:"gemini",deepseek:"deepseek"}[W];const F=C.trim().toLowerCase();if(/^(?:anthropic\/)?claude(?:$|[\s-])/.test(F))return"claude";if(/^(?:openai\/)?(?:gpt[-\s]?\d|chatgpt(?:$|[\s-])|o[134](?:$|[\s-]))/.test(F))return"openai";if(/^(?:google\/)?gemini(?:$|[\s-])/.test(F))return"gemini";if(/^deepseek(?:$|[\s-])/.test(F))return"deepseek"}const s=Ze({props:{model:{type:String,default:""},provider:{type:String,default:""},size:{type:Number,default:20}},setup:C=>()=>{const f=i(C.model,C.provider),W=f!=="gemini",F=Math.round(C.size*(f==="openai"?.82:.58));return Ce("span",{class:["model-provider-mark",{"is-color":f&&!W}],"data-provider-logo":f??"unknown","aria-hidden":"true",title:f?`${o[f]} logo`:"Custom model",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:`${C.size}px`,height:`${C.size}px`,boxSizing:"border-box",border:"1px solid var(--provider-logo-border, #e5e5e8)",borderRadius:`${C.size>=28?9:C.size>=20?6:4}px`,background:"var(--provider-logo-surface, #fff)",color:"var(--provider-logo-muted, #a1a1aa)"}},f?[Ce("img",{src:n[f],alt:"","aria-hidden":"true",class:["model-provider-image",{"is-monochrome":W}],"data-logo-source":"bundled-brand-asset",style:{display:"block",objectFit:"contain",width:`${F}px`,height:`${F}px`}})]:[Ce(ii,{size:Math.round(C.size*.5),strokeWidth:1.7,"aria-hidden":"true"})])}}),a=e,r=t,c=H(null),u=H(null),p=H(null),h=`model-options-${jn()}`,m=H(0),w=H(!1),U=H(""),Y=H(a.modelValue);we(()=>a.modelValue,C=>{Y.value=C}),we(()=>a.options,C=>{var f;C.some(W=>W.id===Y.value)||(Y.value=((f=C[0])==null?void 0:f.id)??""),C.length||G()},{immediate:!0,deep:!0});const V=je(()=>a.options.find(C=>C.id===Y.value)),ee=je(()=>a.options.filter(C=>`${C.name} ${C.provider}`.toLowerCase().includes(U.value.toLowerCase())));we(w,async C=>{var f;C&&(m.value=Math.max(0,ee.value.findIndex(W=>W.id===Y.value)),await ke(),w.value&&((f=u.value)==null||f.focus()))}),we(ee,()=>{m.value=0});function G(C=!1){w.value=!1,C&&ke(()=>{var f;return(f=p.value)==null?void 0:f.focus({preventScroll:!0})})}function te(C){C.setAttribute("inert","")}function S(C){var f;(f=c.value)!=null&&f.contains(C.relatedTarget)||G()}function Q(C){var f;if(!C.isComposing){if(C.key==="Enter"&&C.target===u.value){C.preventDefault();const W=ee.value[m.value];W&&I(W);return}!["ArrowDown","ArrowUp"].includes(C.key)||!ee.value.length||(C.preventDefault(),m.value=(m.value+(C.key==="ArrowDown"?1:-1)+ee.value.length)%ee.value.length,(f=u.value)==null||f.focus({preventScroll:!0}),ke(()=>{var W;return(W=document.getElementById(`${h}-${m.value}`))==null?void 0:W.scrollIntoView({block:"nearest"})}))}}function I(C){Y.value=C.id,G(!0),U.value="",r("update:modelValue",C.id),r("select",C)}function L(C){var f;(f=c.value)!=null&&f.contains(C.target)||G()}return wt(()=>document.addEventListener("pointerdown",L)),Et(()=>document.removeEventListener("pointerdown",L)),(C,f)=>{var W,F,O;return y(),z("div",{ref_key:"root",ref:c,class:"model-demo",onKeydown:f[4]||(f[4]=lo(At(q=>G(!0),["stop","prevent"]),["esc"])),onFocusout:S},[l("div",iM,[B(K(ii),{size:16}),f[5]||(f[5]=De(" Model settings ",-1))]),l("button",{type:"button",ref_key:"trigger",ref:p,class:"model-trigger","aria-haspopup":"listbox","aria-controls":h,onKeydown:[f[0]||(f[0]=lo(At(q=>w.value=!0,["prevent"]),["down"])),f[1]||(f[1]=lo(At(q=>w.value=!0,["prevent"]),["up"]))],"aria-expanded":w.value,"aria-label":"Select model",disabled:!e.options.length,onClick:f[2]||(f[2]=q=>w.value=!w.value)},[B(K(s),{model:((W=V.value)==null?void 0:W.name)??"",provider:((F=V.value)==null?void 0:F.provider)??"",size:42},null,8,["model","provider"]),B(ct,{name:"model-current",mode:"out-in"},{default:Ke(()=>{var q,le,he;return[(y(),z("span",{key:(q=V.value)==null?void 0:q.id,class:"model-name"},[l("strong",null,X(((le=V.value)==null?void 0:le.name)??"Select model"),1),l("small",null,X(((he=V.value)==null?void 0:he.provider)??"No model selected"),1)]))]}),_:1}),B(K(Qt),{size:17,class:fe(["chevron",{rotated:w.value}])},null,8,["class"])],40,sM),l("div",aM,X(((O=V.value)==null?void 0:O.description)??(e.options.length?"Select model":"No models available")),1),B(ct,{name:"model-popup",onBeforeLeave:te},{default:Ke(()=>[w.value?(y(),z("div",{key:0,class:"model-menu",onKeydown:Q},[l("label",rM,[B(K(qr),{size:16}),Xe(l("input",{ref_key:"searchInput",ref:u,"onUpdate:modelValue":f[3]||(f[3]=q=>U.value=q),"aria-label":"Search models",placeholder:"Search models…","aria-autocomplete":"list","aria-controls":h,"aria-activedescendant":ee.value[m.value]?`${h}-${m.value}`:void 0},null,8,lM),[[xi,U.value]])]),l("div",{id:h,class:"model-options",role:"listbox","aria-label":"Models"},[(y(!0),z(me,null,Pe(ee.value,(q,le)=>(y(),z("button",{type:"button",key:q.id,id:`${h}-${le}`,class:fe(["model-option",{"keyboard-active":m.value===le}]),onPointerenter:he=>m.value=le,onFocus:he=>m.value=le,role:"option","aria-selected":Y.value===q.id,onClick:he=>I(q)},[B(K(s),{model:q.name,provider:q.provider,size:24},null,8,["model","provider"]),l("span",null,[De(X(q.name),1),l("small",null,X(q.provider),1)]),Y.value===q.id?(y(),Ne(K(it),{key:0,size:16,class:"selected-check"})):ge("",!0)],42,cM))),128)),ee.value.length?ge("",!0):(y(),z("div",uM,"No matching models."))])],32)):ge("",!0)]),_:1})],544)}}}),pM=jt(dM,[["__scopeId","data-v-f78ea696"]]),MM={key:1,class:"status-lamp","aria-hidden":"true"},gM=Ze({__name:"StatusBadge",props:{status:{default:"pending"},size:{default:"md"}},setup(e){const t=e,n={running:{label:"Running",tone:"info",icon:null},queued:{label:"Queued",tone:"neutral",icon:gd},pending:{label:"Pending",tone:"neutral",icon:Da},waiting_human:{label:"Needs input",tone:"neutral",icon:Ld},completed:{label:"Completed",tone:"success",icon:it},success:{label:"Success",tone:"success",icon:it},failed:{label:"Failed",tone:"error",icon:jd},cancelled:{label:"Cancelled",tone:"neutral",icon:Un},cancelling:{label:"Cancelling",tone:"neutral",icon:Un},skipped:{label:"Skipped",tone:"neutral",icon:Da},published:{label:"Published",tone:"success",icon:it},draft:{label:"Draft",tone:"neutral",icon:xd}},o=je(()=>n[t.status]??n.pending);return(i,s)=>(y(),z("span",{class:fe(["status-badge",[`tone-${o.value.tone}`,{"is-small":e.size==="sm"}]])},[o.value.icon?(y(),Ne(rn(o.value.icon),{key:0,size:13,"stroke-width":1.6,"aria-hidden":"true"})):(y(),z("span",MM,[...s[0]||(s[0]=[l("i",null,null,-1)])])),De(" "+X(o.value.label),1)],2))}}),fM=jt(gM,[["__scopeId","data-v-25ae296a"]]),hM={class:"activity-timeline","aria-label":"Task activity"},mM={class:"activity-heading"},yM={"aria-live":"polite"},vM={class:"activity-section"},NM=["disabled","aria-expanded","aria-controls"],xM={class:"section-meta"},bM=["inert","aria-hidden","id"],jM={class:"environment-list"},LM={class:"activity-section"},DM=["disabled","aria-expanded","aria-controls"],wM={class:"section-meta"},IM=["inert","aria-hidden","id"],TM={class:"thought-summary"},zM={class:"activity-section tools-section"},AM=["disabled","aria-expanded","aria-controls"],kM={key:3,class:"failed-count"},SM={key:4,class:"section-meta"},EM=["inert","aria-hidden","id"],CM={class:"activity-tools"},OM={class:"tool-label"},UM={class:"tool-duration"},QM=["inert","aria-hidden","id"],YM={class:"tool-details"},PM={key:0,class:"tool-name"},_M={key:1},$M={key:2},RM={key:3,class:"empty-details"},WM=Ze({__name:"ActivityTimeline",props:{environmentSteps:{default:()=>[{label:"Connect workspace",duration:"8s"},{label:"Prepare project files",duration:"12s"},{label:"Start the assistant",duration:"5s"}]},environmentDuration:{default:"25s"},thought:{default:"Review the content, then arrange the components. Keep a clear hierarchy and give each section room to breathe."},tools:{default:()=>[{id:"read",label:"Read design files",name:"read_file",status:"success",duration:"0.6s",input:"src/theme.css",output:"Read 24 style variables, including colors and typography."},{id:"search",label:"Search components",name:"web_search",status:"success",duration:"1.2s",input:"Accessible navigation patterns",output:"Found three navigation patterns with clear groups and keyboard controls."},{id:"preview",label:"Generate preview",name:"preview_page",status:"failed",duration:"1.0s",input:"http://localhost:3000",output:"The preview server is not running. Start the project and try again."}]},initiallyExpanded:{default:()=>["tools"]},busy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["toggle","tool-toggle"],setup(e,{emit:t}){const n=e,o=t,i=`activity-${jn().replace(/:/g,"")}`,s=H(new Set(n.initiallyExpanded)),a=H(new Set),r=new WeakMap;function c(Q){const I=document.getElementById(Q);I&&r.set(I,{height:I.getBoundingClientRect().height,opacity:getComputedStyle(I).opacity})}const u=je(()=>n.tools.filter(Q=>Q.status==="failed").length),p=je(()=>n.busy||n.tools.some(Q=>Q.status==="running"||Q.status==="pending")),h={success:"Done",failed:"Failed",running:"In progress",pending:"Queued"};function m(Q){return!!(Q.input||Q.output)}we(()=>n.initiallyExpanded,Q=>{s.value=new Set(Q)},{deep:!0}),we(()=>n.tools,Q=>{const I=new Set(Q.filter(m).map(L=>L.id));a.value=new Set([...a.value].filter(L=>I.has(L)))},{deep:!0});function w(Q){if(n.disabled)return;c(`${i}-${Q}`);const I=new Set(s.value);I.has(Q)?I.delete(Q):I.add(Q),s.value=I,o("toggle",Q,I.has(Q))}function U(Q){const I=n.tools.find(C=>C.id===Q);if(n.disabled||!I||!m(I))return;c(`${i}-tool-${n.tools.findIndex(C=>C.id===Q)}`);const L=new Set(a.value);L.has(Q)?L.delete(Q):L.add(Q),a.value=L,o("tool-toggle",Q,L.has(Q))}function Y(Q){const I=Q;I.removeAttribute("inert");const L=r.get(I),C=(L==null?void 0:L.height)??I.getBoundingClientRect().height,f=(L==null?void 0:L.opacity)??getComputedStyle(I).opacity;I.style.height=`${C}px`,I.style.opacity=C?f:"0"}function V(Q){const I=Q;I.offsetHeight,I.style.height=`${I.scrollHeight}px`,I.style.opacity="1",r.delete(I)}function ee(Q){Q.style.removeProperty("height"),Q.style.removeProperty("opacity")}function G(Q){const I=Q,L=r.get(I),C=getComputedStyle(I).display==="none",f=C?(L==null?void 0:L.height)??0:I.getBoundingClientRect().height,W=C?(L==null?void 0:L.opacity)??"0":getComputedStyle(I).opacity;r.set(I,{height:f,opacity:W}),I.style.height=`${f}px`,I.style.opacity=W}function te(Q){const I=Q;I.style.removeProperty("height"),I.style.removeProperty("opacity")}function S(Q){const I=Q;I.setAttribute("inert",""),I.style.height=`${I.getBoundingClientRect().height}px`,I.offsetHeight,I.style.height="0px",I.style.opacity="0"}return(Q,I)=>(y(),z("section",hM,[l("header",mM,[l("span",null,[B(K(yd),{size:17,"stroke-width":1.6}),I[3]||(I[3]=De(" Activity",-1))]),l("span",yM,X(p.value?"In progress":"Finished"),1)]),l("div",vM,[l("button",{class:"activity-section-toggle",type:"button",disabled:e.disabled,"aria-expanded":s.value.has("environment"),"aria-controls":`${i}-environment`,onClick:I[0]||(I[0]=L=>w("environment"))},[B(K(it),{size:15,class:"status-success"}),I[5]||(I[5]=l("strong",null,"Environment ready",-1)),l("span",xM,[De(X(e.environmentSteps.length)+" steps ",1),I[4]||(I[4]=l("span",null,"·",-1)),De(" "+X(e.environmentDuration),1)]),B(K(Qt),{size:14,class:fe({turned:s.value.has("environment")})},null,8,["class"])],8,NM),B(ct,{name:"activity-fold",onBeforeEnter:Y,onEnter:V,onAfterEnter:ee,onLeave:S,onAfterLeave:te,onEnterCancelled:G,onLeaveCancelled:G,persisted:""},{default:Ke(()=>[Xe(l("div",{inert:!s.value.has("environment")||void 0,"aria-hidden":!s.value.has("environment")||void 0,id:`${i}-environment`,class:"activity-fold"},[l("ol",jM,[(y(!0),z(me,null,Pe(e.environmentSteps,L=>(y(),z("li",{key:L.label},[B(K(it),{size:13}),l("span",null,X(L.label),1),l("small",null,X(L.duration),1)]))),128))])],8,bM),[[Ut,s.value.has("environment")]])]),_:1})]),l("div",LM,[l("button",{class:"activity-section-toggle",type:"button",disabled:e.disabled,"aria-expanded":s.value.has("thought"),"aria-controls":`${i}-thought`,onClick:I[1]||(I[1]=L=>w("thought"))},[e.busy?(y(),Ne(K($i),{key:0,size:15,class:"activity-spinner"})):(y(),Ne(K(it),{key:1,size:15,class:"status-success"})),I[6]||(I[6]=l("strong",null,"Thinking process",-1)),l("span",wM,X(e.busy?"In progress":"Completed"),1),B(K(Qt),{size:14,class:fe({turned:s.value.has("thought")})},null,8,["class"])],8,DM),B(ct,{name:"activity-fold",onBeforeEnter:Y,onEnter:V,onAfterEnter:ee,onLeave:S,onAfterLeave:te,onEnterCancelled:G,onLeaveCancelled:G,persisted:""},{default:Ke(()=>[Xe(l("div",{inert:!s.value.has("thought")||void 0,"aria-hidden":!s.value.has("thought")||void 0,id:`${i}-thought`,class:"activity-fold"},[l("p",TM,X(e.thought),1)],8,IM),[[Ut,s.value.has("thought")]])]),_:1})]),l("div",zM,[l("button",{class:"activity-section-toggle tools-heading",type:"button",disabled:e.disabled,"aria-expanded":s.value.has("tools"),"aria-controls":`${i}-tools`,onClick:I[2]||(I[2]=L=>w("tools"))},[p.value?(y(),Ne(K($i),{key:0,size:15,class:"activity-spinner"})):u.value?(y(),Ne(K(oi),{key:1,size:15,class:"status-failed"})):(y(),Ne(K(it),{key:2,size:15,class:"status-success"})),l("strong",null,X(e.tools.length)+" tool"+X(e.tools.length===1?"":"s")+" used",1),u.value?(y(),z("span",kM,X(u.value)+" failed",1)):(y(),z("span",SM,X(p.value?"In progress":"Completed"),1)),B(K(Qt),{size:14,class:fe({turned:s.value.has("tools")})},null,8,["class"])],8,AM),B(ct,{name:"activity-fold",onBeforeEnter:Y,onEnter:V,onAfterEnter:ee,onLeave:S,onAfterLeave:te,onEnterCancelled:G,onLeaveCancelled:G,persisted:""},{default:Ke(()=>[Xe(l("div",{inert:!s.value.has("tools")||void 0,"aria-hidden":!s.value.has("tools")||void 0,id:`${i}-tools`,class:"activity-fold"},[l("ul",CM,[(y(!0),z(me,null,Pe(e.tools,(L,C)=>(y(),z("li",{key:L.id,class:fe({"failed-tool":L.status==="failed"})},[(y(),Ne(rn(m(L)?"button":"div"),{class:"activity-tool-toggle",type:m(L)?"button":void 0,disabled:m(L)?e.disabled:void 0,"aria-expanded":m(L)?a.value.has(L.id):void 0,"aria-controls":m(L)?`${i}-tool-${C}`:void 0,onClick:f=>U(L.id)},{default:Ke(()=>[L.status==="running"?(y(),Ne(K($i),{key:0,size:15,class:"activity-spinner"})):L.status==="failed"?(y(),Ne(K(oi),{key:1,size:15,class:"status-failed"})):C===0?(y(),Ne(K(Kr),{key:2,size:15})):C===1?(y(),Ne(K(hd),{key:3,size:15})):(y(),Ne(K(Xr),{key:4,size:15})),l("span",OM,X(L.label),1),l("span",UM,X(L.duration),1),l("span",{class:fe(["tool-state",{"status-failed":L.status==="failed"}])},X(h[L.status]),3),m(L)?(y(),Ne(K(Qt),{key:5,size:13,class:fe({turned:a.value.has(L.id)})},null,8,["class"])):ge("",!0)]),_:2},1032,["type","disabled","aria-expanded","aria-controls","onClick"])),B(ct,{name:"activity-fold",onBeforeEnter:Y,onEnter:V,onAfterEnter:ee,onLeave:S,onAfterLeave:te,onEnterCancelled:G,onLeaveCancelled:G,persisted:""},{default:Ke(()=>[Xe(l("div",{inert:!a.value.has(L.id)||void 0,"aria-hidden":!a.value.has(L.id)||void 0,id:`${i}-tool-${C}`,class:"activity-fold"},[l("div",YM,[L.name?(y(),z("code",PM,X(L.name),1)):ge("",!0),L.input?(y(),z("div",_M,[I[7]||(I[7]=l("span",{class:"detail-label"},"Input",-1)),l("pre",null,X(L.input),1)])):ge("",!0),L.output?(y(),z("div",$M,[l("span",{class:fe(["detail-label",{"status-failed":L.status==="failed"}])},"Output",2),l("pre",{class:fe({"failed-output":L.status==="failed"})},X(L.output),3)])):ge("",!0),!L.input&&!L.output?(y(),z("p",RM,"No additional output.")):ge("",!0)])],8,QM),[[Ut,m(L)&&a.value.has(L.id)]])]),_:2},1024)],2))),128))])],8,EM),[[Ut,s.value.has("tools")]])]),_:1})])]))}}),BM=jt(WM,[["__scopeId","data-v-dc84a35c"]]),HM=["id","aria-hidden","inert"],VM={key:0,class:"clarification-history clarify-request"},GM={class:"history-heading"},FM={class:"history-prompt"},ZM=["data-selected"],KM={key:1,class:"history-check-space","aria-hidden":"true"},JM={key:0,class:"question-progress"},qM={class:"progress-dots","aria-hidden":"true"},XM={class:"question-heading"},eg=["id"],tg={class:"question-kind"},ng=["role","aria-labelledby"],og=["id","role","aria-checked","aria-pressed","disabled","onClick","onKeydown"],ig={class:"option-label"},sg={key:0,class:"recommendation-label"},ag={class:"clarification-footer"},rg=["disabled"],lg={key:1},cg=["disabled"],ug={key:3,class:"submit-actions"},dg=["disabled"],pg=["disabled"],Mg={class:"summary-heading"},gg={class:"summary-prompt"},fg={class:"summary-labels"},hg=Ze({__name:"ClarificationCard",props:{questions:{default:()=>[{id:"priority",prompt:"What should we build first?",options:[{id:"layout",label:"Build the page layout"},{id:"interaction",label:"Refine the interactions"}]},{id:"style",prompt:"Which direction do you prefer?",options:[{id:"quiet",label:"Quiet and spacious"},{id:"expressive",label:"Bold and expressive"}]}]},initialAnswers:{default:()=>({})},initiallyExpanded:{type:Boolean,default:!0},initiallySubmitted:{type:Boolean,default:!1},submitLabel:{default:"Confirm choices"},disabled:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1}},emits:["update:answers","update:expanded","submit","reset"],setup(e,{expose:t,emit:n}){const o=e,i=n,s=`clarification-${jn().replace(/:/g,"")}`;function a(Z){return Array.isArray(Z)?Z:Z?[Z]:[]}function r(Z,E=!1){return Object.fromEntries(o.questions.flatMap(R=>{const oe=new Set(a(Z[R.id])),ce=R.options.filter(xe=>oe.has(xe.id)&&(E||!xe.disabled)).map(xe=>xe.id);return ce.length?[[R.id,R.allowMultiple?ce:ce[0]]]:[]}))}function c(Z=u.value){return Object.fromEntries(Object.entries(Z).map(([E,R])=>[E,Array.isArray(R)?[...R]:R]))}const u=H(r(o.initialAnswers,o.initiallySubmitted||o.readOnly)),p=H(o.initiallyExpanded),h=H(o.initiallySubmitted),m=H(0),w=je(()=>o.readOnly||h.value),U=je(()=>o.questions[m.value]),Y=H(null),V=H(null),ee=H("auto");let G,te=!1;const S=je(()=>o.questions.flatMap(Z=>Z.options.filter(E=>a(u.value[Z.id]).includes(E.id)).map(E=>({questionId:Z.id,prompt:Z.prompt,optionId:E.id,label:E.label})))),Q=je(()=>o.questions.flatMap(Z=>{const E=S.value.filter(R=>R.questionId===Z.id);return E.length?[{question:Z,selected:E}]:[]})),I=je(()=>!o.disabled&&!w.value&&o.questions.some(Z=>Z.options.some(E=>!E.disabled&&f(Z,E.id)))),L=je(()=>o.questions.some(Z=>Z.options.some(E=>E.recommended&&!E.disabled))),C=je(()=>JSON.stringify(o.questions));function f(Z,E){return a(u.value[Z.id]).includes(E)}async function W(){await ke(),!te&&Y.value&&(ee.value=p.value?`${Y.value.getBoundingClientRect().height}px`:"0px")}function F(Z,E,R=!1){if(o.disabled||w.value||!Z.options.some(Le=>Le.id===E&&!Le.disabled))return;const oe=a(u.value[Z.id]),ce=R?[E]:Z.allowMultiple?oe.includes(E)?oe.filter(Le=>Le!==E):[...oe,E]:oe.includes(E)?[]:[E],xe=c();ce.length?xe[Z.id]=Z.allowMultiple?ce:ce[0]:delete xe[Z.id],u.value=xe,i("update:answers",c())}function O(Z,E){return`${s}-${encodeURIComponent(Z.id)}-${encodeURIComponent(E.id)}`}function q(Z,E,R){var Te;if(o.disabled||w.value||Z.altKey||Z.ctrlKey||Z.metaKey)return;const oe=E.options.filter(Oe=>!Oe.disabled),ce=oe.findIndex(Oe=>Oe.id===R.id);let xe;if(Z.key==="Home")xe=0;else if(Z.key==="End")xe=oe.length-1;else if(Z.key==="ArrowDown"||Z.key==="ArrowRight")xe=(ce+1)%oe.length;else if(Z.key==="ArrowUp"||Z.key==="ArrowLeft")xe=(ce-1+oe.length)%oe.length;else return;Z.preventDefault();const Le=oe[xe];Le&&(E.allowMultiple||F(E,Le.id,!0),(Te=document.getElementById(O(E,Le)))==null||Te.focus({preventScroll:!0}))}function le(Z){o.disabled||w.value||(m.value=Math.max(0,Math.min(o.questions.length-1,m.value+Z)))}function he(){p.value=!p.value,i("update:expanded",p.value)}function se(){I.value&&(h.value=!0,p.value=!0,i("submit",S.value.map(Z=>({...Z}))),ke(()=>{var Z;return(Z=V.value)==null?void 0:Z.focus({preventScroll:!0})}))}function ae(){if(o.disabled||w.value)return;const Z={};for(const E of o.questions){const R=E.options.filter(ce=>!ce.disabled),oe=R.find(ce=>ce.recommended)??R[0];oe&&(Z[E.id]=E.allowMultiple?[oe.id]:oe.id)}u.value=Z,i("update:answers",c()),se()}function pe(){o.disabled||o.readOnly||(u.value={},h.value=!1,m.value=0,p.value=!0,i("update:answers",{}),i("reset"),ke(()=>{var Z,E;return(E=(Z=Y.value)==null?void 0:Z.querySelector('[role="radio"]:not(:disabled), [role="checkbox"]:not(:disabled)'))==null?void 0:E.focus({preventScroll:!0})}))}return we(()=>o.initialAnswers,Z=>{u.value=r(Z,h.value||o.readOnly)},{deep:!0}),we(C,()=>{const Z=r(u.value,o.initiallySubmitted||o.readOnly),E=JSON.stringify(Z)!==JSON.stringify(u.value);u.value=Z,o.initiallySubmitted||(h.value=!1),m.value=Math.min(m.value,Math.max(0,o.questions.length-1)),E&&i("update:answers",c())}),we(()=>o.initiallyExpanded,Z=>{p.value=Z}),we(()=>o.initiallySubmitted,Z=>{h.value=Z}),we([p,h,m,()=>o.readOnly,()=>o.questions],W,{flush:"post"}),wt(()=>{typeof ResizeObserver<"u"&&(G=new ResizeObserver(()=>{W()}),Y.value&&G.observe(Y.value)),W()}),Et(()=>{te=!0,G==null||G.disconnect()}),t({reset:pe,toggle:he,submit:se}),(Z,E)=>(y(),z("section",{class:fe(["clarification-card",{"is-submitted":h.value}]),"aria-label":"Questions and choices"},[l("div",{id:`${s}-body`,class:"clarification-body",style:Yt({height:ee.value}),"aria-hidden":!p.value||void 0,inert:!p.value||void 0},[l("div",{ref_key:"content",ref:Y,class:"clarification-content"},[w.value?(y(),z("div",VM,[l("div",GM,[B(K(La),{"aria-hidden":"true",size:16}),l("span",null,"Questions · "+X(e.questions.length)+" questions",1),E[2]||(E[2]=l("span",{class:"readonly-label"},"Read only",-1))]),(y(!0),z(me,null,Pe(e.questions,(R,oe)=>(y(),z("div",{key:R.id,class:"history-question"},[l("p",FM,[l("span",null,X(oe+1)+".",1),De(" "+X(R.prompt),1)]),(y(!0),z(me,null,Pe(R.options,ce=>(y(),z("div",{key:ce.id,class:fe(["history-option",{selected:f(R,ce.id)}]),"data-selected":f(R,ce.id)},[f(R,ce.id)?(y(),Ne(K(it),{key:0,"aria-hidden":"true",size:12})):(y(),z("span",KM)),l("span",null,X(ce.label),1)],10,ZM))),128))]))),128))])):U.value?(y(),z("form",{key:1,class:"clarification-form clarify-request",onSubmit:At(se,["prevent"])},[e.questions.length>1?(y(),z("div",JM,[l("div",qM,[(y(!0),z(me,null,Pe(e.questions,(R,oe)=>(y(),z("span",{key:R.id,class:fe({current:m.value===oe,answered:a(u.value[R.id]).length})},null,2))),128))]),l("span",null,X(m.value+1)+" / "+X(e.questions.length),1)])):ge("",!0),l("div",XM,[B(K(La),{"aria-hidden":"true",size:16}),l("span",{id:`${s}-prompt`,class:"question-prompt"},X(U.value.prompt),9,eg),l("span",tg,X(U.value.allowMultiple?"Select multiple":"Select one"),1)]),l("div",{class:"clarification-options",role:U.value.allowMultiple?"group":"radiogroup","aria-labelledby":`${s}-prompt`},[(y(!0),z(me,null,Pe(U.value.options,R=>(y(),z("button",{id:O(U.value,R),key:R.id,type:"button",class:fe(["clarification-option",{selected:f(U.value,R.id)}]),role:U.value.allowMultiple?"checkbox":"radio","aria-checked":f(U.value,R.id),"aria-pressed":f(U.value,R.id),disabled:e.disabled||R.disabled,onClick:oe=>F(U.value,R.id),onKeydown:oe=>q(oe,U.value,R)},[l("span",{class:fe(["option-indicator",{multiple:U.value.allowMultiple}])},[f(U.value,R.id)?(y(),Ne(K(it),{key:0,"aria-hidden":"true",size:10})):ge("",!0)],2),l("span",ig,X(R.label),1),R.recommended?(y(),z("span",sg,"Recommended")):ge("",!0)],42,og))),128))],8,ng),l("footer",ag,[m.value>0?(y(),z("button",{key:0,type:"button",class:"previous-button",disabled:e.disabled,onClick:E[0]||(E[0]=R=>le(-1))},[B(K(Zr),{"aria-hidden":"true",size:13}),E[3]||(E[3]=De("Previous",-1))],8,rg)):(y(),z("span",lg)),m.value<e.questions.length-1?(y(),z("button",{key:2,type:"button",class:"secondary-button",disabled:e.disabled,onClick:E[1]||(E[1]=R=>le(1))},[E[4]||(E[4]=De("Next",-1)),B(K(co),{"aria-hidden":"true",size:13})],8,cg)):(y(),z("div",ug,[L.value?(y(),z("button",{key:0,type:"button",class:"secondary-button",disabled:e.disabled,onClick:ae},[B(K(it),{"aria-hidden":"true",size:14}),E[5]||(E[5]=De("Use recommended",-1))],8,dg)):ge("",!0),l("button",{type:"submit",class:"confirm-button",disabled:!I.value},[E[6]||(E[6]=l("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[l("path",{d:"M12 18V6m-6 6 6-6 6 6"})],-1)),De(X(e.submitLabel),1)],8,pg)]))])],32)):ge("",!0),h.value?(y(),z("div",{key:2,ref_key:"receipt",ref:V,class:"clarification-summary",tabindex:"-1","aria-label":"Your choices","aria-live":"polite"},[l("div",Mg,[B(K(it),{"aria-hidden":"true",size:16}),E[7]||(E[7]=De("Your choices",-1))]),(y(!0),z(me,null,Pe(Q.value,R=>(y(),z("div",{key:R.question.id,class:"summary-answer"},[l("p",gg,X(R.question.prompt),1),l("div",fg,[(y(!0),z(me,null,Pe(R.selected,oe=>(y(),z("span",{key:oe.optionId},X(oe.label),1))),128))])]))),128))],512)):ge("",!0)],512)],12,HM)],2))}}),mg=jt(hg,[["__scopeId","data-v-9d637c05"]]),yg=["aria-label"],vg=["data-tab-value","aria-selected","tabindex","disabled","onClick"],Ng={key:0,class:"sliding-tab-count"},xg=Ze({__name:"SlidingTabs",props:{modelValue:{},items:{default:()=>[{value:"all",label:"All"},{value:"running",label:"Running"},{value:"waiting",label:"Needs input"},{value:"completed",label:"Completed"}]},label:{default:"Task status"}},emits:["update:modelValue","change"],setup(e,{emit:t}){var te;const n=e,o=t,i=je(()=>n.items.filter(S=>!S.disabled)),s=H(n.modelValue??((te=i.value[0])==null?void 0:te.value)??""),a=je(()=>n.modelValue??s.value),r=je(()=>{var S,Q;return((S=i.value.find(I=>I.value===a.value))==null?void 0:S.value)??((Q=i.value[0])==null?void 0:Q.value)??""}),c=H(),u=H({opacity:"0"}),p=H(!1),h=new Set;let m,w=0,U=!1;function Y(S){var Q;return[...((Q=c.value)==null?void 0:Q.querySelectorAll("button"))??[]].find(I=>I.dataset.tabValue===S)}function V(){const S=c.value;if(!S||U)return;const Q=new Set([S,...S.querySelectorAll("button")]);h.forEach(O=>{Q.has(O)||(m==null||m.unobserve(O),h.delete(O))}),Q.forEach(O=>{m&&!h.has(O)&&(m.observe(O),h.add(O))});const I=S.querySelector('[aria-selected="true"]');if(!I){u.value.opacity!=="0"&&(u.value={opacity:"0"});return}const L=S.getBoundingClientRect(),C=I.getBoundingClientRect(),f=S.offsetWidth?L.width/S.offsetWidth:1,W=S.offsetHeight?L.height/S.offsetHeight:1;if(!C.width||!C.height||!f||!W)return;const F={opacity:"1",transform:`translate3d(${(C.left-L.left)/f-S.clientLeft+S.scrollLeft}px, ${(C.top-L.top)/W-S.clientTop+S.scrollTop}px, 0)`,width:`${C.width/f}px`,height:`${C.height/W}px`};Object.keys(F).some(O=>u.value[O]!==F[O])&&(u.value=F)}async function ee(S,Q=!1){var I;S.disabled||(a.value!==S.value&&(n.modelValue===void 0&&(s.value=S.value),o("update:modelValue",S.value),o("change",S.value)),await ke(),!U&&(V(),Q&&((I=Y(S.value))==null||I.focus({preventScroll:!0}))))}function G(S){var F;if(S.altKey||S.ctrlKey||S.metaKey||!["ArrowLeft","ArrowRight","Home","End"].includes(S.key)||!i.value.length)return;S.preventDefault();const Q=(F=S.target.closest('[role="tab"]'))==null?void 0:F.dataset.tabValue,I=i.value.findIndex(O=>O.value===(Q??a.value)),L=c.value&&getComputedStyle(c.value).direction==="rtl",C=S.key===(L?"ArrowLeft":"ArrowRight"),f=S.key==="Home"?0:S.key==="End"?i.value.length-1:I<0?C?0:i.value.length-1:(I+(C?1:-1)+i.value.length)%i.value.length,W=i.value[f];W&&ee(W,!0)}return we(()=>n.items,()=>{var S;n.modelValue===void 0&&!i.value.some(Q=>Q.value===s.value)&&(s.value=((S=i.value[0])==null?void 0:S.value)??"")},{deep:!0}),we(()=>n.modelValue,S=>{var Q;S!==void 0?s.value=S:i.value.some(I=>I.value===s.value)||(s.value=((Q=i.value[0])==null?void 0:Q.value)??"")}),we(()=>[n.modelValue,n.items],()=>ke(V),{deep:!0}),wt(()=>{var S;typeof ResizeObserver<"u"&&(m=new ResizeObserver(V)),V(),window.addEventListener("resize",V),(S=document.fonts)==null||S.ready.then(()=>{U||V()}),w=requestAnimationFrame(()=>{U||(p.value=!0)})}),gi(V),Et(()=>{U=!0,m==null||m.disconnect(),h.clear(),window.removeEventListener("resize",V),cancelAnimationFrame(w)}),(S,Q)=>(y(),z("div",{ref_key:"track",ref:c,class:fe(["sliding-tabs-demo",{"is-ready":p.value}]),role:"tablist","aria-orientation":"horizontal","aria-label":e.label,onKeydown:G},[l("span",{class:"sliding-tabs-indicator",style:Yt(u.value),"aria-hidden":"true"},null,4),(y(!0),z(me,null,Pe(e.items,I=>(y(),z("button",{key:I.value,type:"button",role:"tab","data-tab-value":I.value,"aria-selected":a.value===I.value&&!I.disabled,tabindex:!I.disabled&&r.value===I.value?0:-1,disabled:I.disabled,onClick:L=>ee(I)},[l("span",null,X(I.label),1),I.count!==void 0?(y(),z("span",Ng,X(I.count),1)):ge("",!0)],8,vg))),128))],42,yg))}}),Ts=jt(xg,[["__scopeId","data-v-323e21e9"]]),bg=["disabled"],jg={class:"task-groups-scroll"},Lg=["data-group-id"],Dg=["disabled","aria-expanded","aria-controls","aria-label","onClick"],wg=["innerHTML"],Ig={class:"task-group-count"},Tg=["inert","aria-hidden","id"],zg=["disabled","aria-current","aria-label","title","onClick"],Ag={class:"task-row-label"},kg={key:0,class:"task-row-meta"},Sg={key:1,class:"task-status-dot","aria-hidden":"true"},Eg={key:2,class:"task-waiting-icon",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},Cg={key:3,class:"task-idle-dot","aria-hidden":"true"},Og={key:0,class:"task-group-empty"},Ug=350,Qg=Ze({__name:"GroupedTaskList",props:{groups:{default:()=>[{id:"running",label:"In progress",items:[{id:"portfolio",label:"Design a portfolio",status:"running"},{id:"brand",label:"Organize brand assets",status:"waiting"}]},{id:"auto",label:"Automations",items:[{id:"review",label:"Review the interface",status:"running"},{id:"export",label:"Export design assets",status:"idle"}]},{id:"history",label:"History",items:[{id:"landing",label:"Build the landing page",status:"completed",meta:"Just now"},{id:"research",label:"Collect references",status:"completed",meta:"Yesterday"}]}]},modelValue:{},disabled:{type:Boolean,default:!1},createDisabled:{type:Boolean,default:!1}},emits:["select","create","update:modelValue"],setup(e,{emit:t}){const n=e,o=t,i=H(n.modelValue??r()),s=je(()=>n.modelValue??i.value),a=H();function r(){var b;return((b=n.groups.filter(D=>!D.disabled).flatMap(D=>D.items).find(D=>!D.disabled))==null?void 0:b.id)??""}function c(b){return`task-group-${p}-${encodeURIComponent(b)}`}const u=H({}),p=jn(),h=new WeakMap;function m(b){var j;if(n.disabled||(j=n.groups.find(M=>M.id===b))!=null&&j.disabled)return;const D=document.getElementById(c(b));D&&h.set(D,{height:D.getBoundingClientRect().height,opacity:getComputedStyle(D).opacity}),u.value[b]=!u.value[b]}const w=H(),U=H({x:0,y:0,diameter:0}),Y=H("idle"),V=H(!1),ee=H(!1);let G,te=!1,S=!1,Q,I,L;const C={running:"Running",waiting:"Needs input",idle:"Ready",completed:"Completed"},f={running:'<circle cx="12" cy="12" r="8.2"/><path d="M10.4 8.9l4.6 3.1-4.6 3.1z"/>',auto:'<circle cx="4.6" cy="12" r="1.35" fill="currentColor" stroke="none"/><path d="M6.4 12h11.2M14.2 6.6l6.2 5.4-6.2 5.4"/>',history:'<path d="M4.2 4.2v4.6h4.6M4.3 13.2A8.2 8.2 0 1 0 7.2 6.1L4.2 8.8M12 8.2v3.2l3.2 1.6"/>'};function W(b,D){n.disabled||D.disabled||b.disabled||(n.modelValue===void 0&&(i.value=b.id),o("update:modelValue",b.id),o("select",b,D))}function F(){return window.matchMedia("(hover: hover) and (pointer: fine)").matches}function O(){var b,D,j,M;return n.disabled||n.createDisabled||((b=a.value)==null?void 0:b.getAttribute("aria-disabled"))==="true"||((D=a.value)==null?void 0:D.getAttribute("aria-busy"))==="true"||((j=w.value)==null?void 0:j.getAttribute("aria-disabled"))==="true"||((M=w.value)==null?void 0:M.getAttribute("aria-busy"))==="true"}function q(){clearTimeout(I),I=void 0}function le(b,D){const j=w.value;if(!j)return;const M=j.getBoundingClientRect(),A=b===void 0?M.width/2:b-M.left,$=D===void 0?M.height/2:D-M.top,ue=Math.max(A,M.width-A),_=Math.max($,M.height-$);U.value={x:A,y:$,diameter:Math.hypot(ue,_)*2}}function he(b,D){O()||(q(),le(b,D),V.value=!1,Y.value="hover")}function se(){q(),Y.value="leave",I=setTimeout(()=>{Y.value!=="hover"&&(U.value={...U.value,diameter:0},Y.value="idle"),I=void 0},Ug)}function ae(){clearTimeout(L),L=void 0,ee.value=!1}function pe(){O()||(clearTimeout(L),ee.value=!0,L=setTimeout(()=>{ee.value=!1,L=void 0},520))}function Z(b){!F()||b.pointerType==="touch"||(G={x:b.clientX,y:b.clientY},!O()&&(he(G.x,G.y),pe()))}function E(){G=void 0,ae(),te||se()}function R(){var b;te=!O()&&!!((b=w.value)!=null&&b.matches(":focus-visible")),te&&(he(),pe())}function oe(){te=!1,G||(se(),ae())}function ce(){O()||(pe(),o("create"))}function xe(){G=void 0,te=!1,se(),ae()}function Le(){document.hidden&&xe()}function Te(){var D;const b=O();b?(q(),V.value=!0,Y.value="idle",U.value.diameter&&(U.value={...U.value,diameter:0}),te=!1,ae()):(V.value=!1,S&&G&&((D=w.value)!=null&&D.matches(":hover"))&&F()&&he(G.x,G.y)),S=b}we(()=>n.disabled||n.createDisabled,Te,{flush:"post"}),gi(Te),wt(()=>{Te(),window.addEventListener("blur",xe),document.addEventListener("visibilitychange",Le),typeof ResizeObserver<"u"&&(Q=new ResizeObserver(()=>{Y.value==="hover"&&!O()&&le(te||G==null?void 0:G.x,te||G==null?void 0:G.y)}),w.value&&Q.observe(w.value))}),Et(()=>{Q==null||Q.disconnect(),q(),ae(),window.removeEventListener("blur",xe),document.removeEventListener("visibilitychange",Le)});function Oe(b){var j;if(n.disabled||!a.value||b.altKey||b.ctrlKey||b.metaKey)return;const D=b.target.closest("button");if(!(!D||D.disabled)){if(["ArrowUp","ArrowDown","Home","End"].includes(b.key)){const M=[...a.value.querySelectorAll("button:not(:disabled)")].filter(ue=>!ue.closest("[inert]")&&ue.getClientRects().length),A=M.indexOf(D);if(!M.length)return;b.preventDefault();const $=b.key==="Home"?0:b.key==="End"?M.length-1:(A+(b.key==="ArrowDown"?1:-1)+M.length)%M.length;(j=M[$])==null||j.focus({preventScroll:!0})}else if(b.key==="ArrowLeft"||b.key==="ArrowRight"){const M=D.closest(".task-nav-group"),A=M==null?void 0:M.dataset.groupId,$=M==null?void 0:M.querySelector(".task-group-heading");if(!A||!$||$.disabled)return;b.preventDefault(),b.key==="ArrowLeft"?(u.value[A]||m(A),ke(()=>$.focus({preventScroll:!0}))):u.value[A]&&m(A)}}}function Je(b){b.removeAttribute("inert"),b.removeAttribute("aria-hidden");const D=b,j=h.get(D),M=(j==null?void 0:j.height)??D.getBoundingClientRect().height,A=(j==null?void 0:j.opacity)??getComputedStyle(D).opacity;D.style.height=`${M}px`,D.style.opacity=M?A:"0"}function Fe(b){const D=b;D.getBoundingClientRect(),D.style.height=`${D.scrollHeight}px`,D.style.opacity="1",h.delete(D)}function nt(b){b.removeAttribute("inert"),b.removeAttribute("aria-hidden");const D=b;D.style.height="",D.style.opacity=""}function g(b){const D=b,j=h.get(D),M=getComputedStyle(D).display==="none",A=M?(j==null?void 0:j.height)??0:D.getBoundingClientRect().height,$=M?(j==null?void 0:j.opacity)??"0":getComputedStyle(D).opacity;h.set(D,{height:A,opacity:$}),D.style.height=`${A}px`,D.style.opacity=$}function d(b){b.setAttribute("inert",""),b.setAttribute("aria-hidden","true");const D=b;D.style.height=`${D.offsetHeight}px`,D.style.opacity="1"}function x(b){const D=b;D.getBoundingClientRect(),D.style.height="0px",D.style.opacity="0"}function T(b){const D=b;D.style.height="",D.style.opacity=""}return we(()=>n.modelValue,b=>{b!==void 0?i.value=b:n.groups.some(D=>!D.disabled&&D.items.some(j=>j.id===i.value&&!j.disabled))||(i.value=r())}),we(()=>n.groups,b=>{const D=new Set(b.map(j=>j.id));u.value=Object.fromEntries(Object.entries(u.value).filter(([j])=>D.has(j))),n.modelValue===void 0&&!b.some(j=>!j.disabled&&j.items.some(M=>M.id===i.value&&!M.disabled))&&(i.value=r())},{deep:!0}),(b,D)=>(y(),z("nav",{ref_key:"navigation",ref:a,class:"grouped-task-demo","aria-label":"Workspace tasks",onKeydown:Oe},[l("button",{ref_key:"createButton",ref:w,class:fe(["task-create-button",{"is-active":Y.value==="hover","is-leaving":Y.value==="leave","is-ink-suppressed":V.value}]),type:"button",disabled:e.disabled||e.createDisabled,onPointerenter:Z,onPointerleave:E,onPointercancel:E,onFocus:R,onBlur:oe,onClick:ce},[l("span",{class:"task-create-wave",style:Yt({left:`${U.value.x}px`,top:`${U.value.y}px`,width:`${U.value.diameter}px`,height:`${U.value.diameter}px`}),"aria-hidden":"true"},null,4),(y(),z("svg",{class:fe({"is-playing":ee.value}),width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[...D[0]||(D[0]=[l("path",{d:"M12.5 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6.5"},null,-1),l("path",{class:"task-create-pen",d:"m15.5 4.5 4 4M10 10l7.3-7.3a1.4 1.4 0 0 1 2 0l2 2a1.4 1.4 0 0 1 0 2L14 14l-5 1 1-5Z"},null,-1)])],2)),D[1]||(D[1]=l("span",null,"New task",-1))],42,bg),l("div",jg,[(y(!0),z(me,null,Pe(e.groups,j=>(y(),z("section",{key:j.id,class:"task-nav-group","data-group-id":j.id},[l("button",{class:"task-group-heading",type:"button",disabled:e.disabled||j.disabled,"aria-expanded":!u.value[j.id],"aria-controls":c(j.id),"aria-label":`${u.value[j.id]?"Expand":"Collapse"} ${j.label}`,onClick:M=>m(j.id)},[(y(),z("svg",{class:"task-group-icon",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:f[j.icon||j.id]||f.history},null,8,wg)),l("span",null,X(j.label),1),(y(),z("svg",{class:fe(["task-group-chevron",{collapsed:u.value[j.id]}]),width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[...D[2]||(D[2]=[l("path",{d:"m7 10 5 5 5-5"},null,-1)])],2)),l("span",Ig,X(j.items.length),1)],8,Dg),B(ct,{name:"task-group-collapse",onBeforeEnter:Je,onEnter:Fe,onAfterEnter:nt,onBeforeLeave:d,onLeave:x,onAfterLeave:T,onEnterCancelled:g,onLeaveCancelled:g,persisted:""},{default:Ke(()=>[Xe(l("div",{inert:u.value[j.id]||void 0,"aria-hidden":u.value[j.id]||void 0,id:c(j.id),class:"task-group-body"},[(y(!0),z(me,null,Pe(j.items,M=>(y(),z("div",{key:M.id,class:"task-tree-item"},[l("button",{class:fe(["task-nav-row",{selected:s.value===M.id}]),type:"button",disabled:e.disabled||j.disabled||M.disabled,"aria-current":s.value===M.id?"true":void 0,"aria-label":`${M.label}${M.status?`，${C[M.status]}`:""}`,title:M.label,onClick:A=>W(M,j)},[l("span",Ag,X(M.label),1),M.meta?(y(),z("span",kg,X(M.meta),1)):ge("",!0),M.status==="running"?(y(),z("span",Sg)):M.status==="waiting"?(y(),z("svg",Eg,[...D[3]||(D[3]=[l("circle",{cx:"10.2",cy:"8",r:"3.2"},null,-1),l("path",{d:"M3.8 20a6.4 6.4 0 0 1 12.8 0"},null,-1),l("circle",{class:"task-waiting-dot",cx:"18.6",cy:"11.5",r:"1.55",fill:"currentColor",stroke:"none"},null,-1)])])):M.status==="idle"?(y(),z("span",Cg)):ge("",!0)],10,zg)]))),128)),j.items.length?ge("",!0):(y(),z("p",Og,"No tasks"))],8,Tg),[[Ut,!u.value[j.id]]])]),_:2},1024)],8,Lg))),128))])],544))}}),tl=jt(Qg,[["__scopeId","data-v-148271d7"]]),Yg=["disabled","role","aria-expanded","aria-controls","aria-activedescendant","aria-invalid","aria-label"],Pg={key:0,class:"selector-search-bar"},_g=["aria-expanded","aria-activedescendant","aria-label","placeholder"],$g=["data-scrolling","aria-label","aria-busy"],Rg=["id","disabled","aria-selected","onPointermove","onClick"],Wg={key:0,class:"selector-option-label"},Bg={key:1,class:"selector-option-label"},Hg={key:0},Vg={key:2,class:"selector-option-hint"},Gg={key:0},Fg={key:0,class:"selector-empty",role:"status"};let In;const Zg=Ze({__name:"Selector",props:{modelValue:{},options:{default:()=>[]},disabled:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},placeholder:{default:"Select an option"},emptyText:{default:"No matching options"},ariaLabel:{default:"Select an option"},searchable:{type:Boolean,default:!1},searchPlaceholder:{default:"Search options…"},allowCustom:{type:Boolean,default:!1},customPosition:{default:"first"},loading:{type:Boolean,default:!1},size:{default:"md"},variant:{default:"outline"}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,o=t,i=`selector-${jn().replace(/:/g,"")}`,s=`${i}-listbox`,a=d=>`${i}-option-${d}`,r=H(),c=H(),u=H(),p=H(),h=H(),m=H(!1),w=H(""),U=H(!1),Y=H(""),V=je(()=>n.modelValue===void 0?Y.value:n.modelValue),ee=je(()=>n.options.find(d=>d.value===V.value)),G=je(()=>!ee.value&&!(n.allowCustom&&V.value)),te=je(()=>{var d;return((d=ee.value)==null?void 0:d.label)??(n.allowCustom&&V.value?V.value:n.placeholder)}),S=H({visibility:"hidden"}),Q=H(-1);let I=!1,L=0,C,f,W=!1;const F=je(()=>{const d=n.searchable?w.value.trim().toLowerCase():"",x=n.options.filter(D=>!d||[D.label,D.value,D.hint||""].some(j=>j.toLowerCase().includes(d))).map(D=>({...D,custom:!1})),T=n.searchable&&n.allowCustom?w.value.trim():"",b=T&&!n.options.some(D=>D.value===T)?[{value:T,label:T,hint:"",disabled:!1,custom:!0}]:[];return n.customPosition==="last"?[...x,...b]:[...b,...x]}),O=je(()=>F.value.flatMap((d,x)=>d.disabled?[]:[x])),q=je(()=>m.value&&F.value[Q.value]&&!F.value[Q.value].disabled?a(Q.value):void 0);function le(d){const x=n.searchable?w.value.trim():"",T=x?d.toLowerCase().indexOf(x.toLowerCase()):-1;return T<0?{before:d,match:"",after:""}:{before:d.slice(0,T),match:d.slice(T,T+x.length),after:d.slice(T+x.length)}}function he(d,x){if(!d.isConnected||x.width<=0||x.height<=0||d.closest('[inert], [hidden], [aria-hidden="true"]'))return!1;let T=Math.max(0,x.left),b=Math.min(innerWidth,x.right),D=Math.max(0,x.top),j=Math.min(innerHeight,x.bottom);for(let M=d.parentElement;M;M=M.parentElement){const A=getComputedStyle(M),$=M.getBoundingClientRect();if(/auto|scroll|hidden|clip/.test(A.overflowX)&&(T=Math.max(T,$.left+M.clientLeft),b=Math.min(b,$.left+M.clientLeft+M.clientWidth)),/auto|scroll|hidden|clip/.test(A.overflowY)&&(D=Math.max(D,$.top+M.clientTop),j=Math.min(j,$.top+M.clientTop+M.clientHeight)),T>=b||D>=j)return!1}return T<b&&D<j}function se(){var He,qe;if(!m.value||!c.value||!u.value)return;const d=c.value.getBoundingClientRect();if(!he(c.value,d)){R();return}const x=window.visualViewport,T=8,b=6,D=288,j=(x==null?void 0:x.offsetLeft)||0,M=(x==null?void 0:x.offsetTop)||0,A=(x==null?void 0:x.width)||innerWidth,$=(x==null?void 0:x.height)||innerHeight,ue=((He=u.value.querySelector(".selector-search-bar"))==null?void 0:He.offsetHeight)||0,_=Math.min(D,ue+(((qe=p.value)==null?void 0:qe.scrollHeight)||0)+2),v=Math.max(0,M+$-d.bottom-b-T),J=Math.max(0,d.top-M-b-T),re=v<_&&J>v,be=Math.min(D,re?J:v),ze=Math.min(_,be),Se=Math.min(n.variant==="ghost"?Math.max(168,d.width):d.width,Math.max(0,A-T*2)),We=Math.max(j+T,Math.min(d.left,j+A-Se-T)),tt=Math.max(M+T,Math.min(re?d.top-b-ze:d.bottom+b,M+$-ze-T));S.value={position:"fixed",top:`${Math.round(tt)}px`,left:`${Math.round(We)}px`,width:`${Math.round(Se)}px`,maxHeight:`${Math.floor(be)}px`,visibility:"visible",zIndex:"60"}}function ae(){if(!m.value||!I||!p.value)return;const d=document.getElementById(a(Q.value));if(!d)return;const x=d.getBoundingClientRect(),T=p.value.getBoundingClientRect();x.top<T.top+4?p.value.scrollTop-=T.top+4-x.top:x.bottom>T.bottom-4&&(p.value.scrollTop+=x.bottom-T.bottom+4)}function pe(){U.value=!0,clearTimeout(C),C=setTimeout(()=>{U.value=!1},650)}function Z(d){var x;!m.value||(d==null?void 0:d.target)instanceof Node&&((x=u.value)!=null&&x.contains(d.target))||(cancelAnimationFrame(L),L=requestAnimationFrame(()=>{L=0,se()}))}async function E(d){var T;if(n.disabled||W)return;In!==R&&(In==null||In()),In=R,I=!1,S.value={position:"fixed",visibility:"hidden"},w.value="",m.value=!0;const x=F.value.findIndex(b=>b.value===V.value&&!b.disabled);Q.value=d==="last"?O.value.at(-1)??-1:d==="first"?O.value[0]??-1:x>=0?x:O.value[0]??-1,await ke(),!(!m.value||W)&&(se(),await ke(),!(!m.value||W)&&(I=!0,ae(),(T=h.value)==null||T.focus({preventScroll:!0}),f==null||f.observe(u.value),Z()))}function R(d=!1){var x;In===R&&(In=void 0),cancelAnimationFrame(L),L=0,u.value&&(f==null||f.unobserve(u.value)),m.value=!1,I=!1,clearTimeout(C),U.value=!1,w.value="",d&&!W&&((x=c.value)==null||x.focus({preventScroll:!0}))}function oe(d){d.setAttribute("aria-hidden","true"),d.inert=!0}function ce(d){const x=F.value[d];!m.value||n.disabled||!x||x.disabled||(n.modelValue===void 0&&(Y.value=x.value),o("update:modelValue",x.value),R(!0))}function xe(d){d.stopPropagation(),m.value?R():E()}function Le(d){const x=O.value,T=x.indexOf(Q.value);Q.value=x.length?x[(T+d+x.length)%x.length]:-1}function Te(d){var x,T;if(!(!m.value||n.disabled||d.isComposing||d.keyCode===229||d.ctrlKey||d.metaKey||d.altKey)){if(d.key==="Tab"){(x=u.value)!=null&&x.contains(document.activeElement)&&((T=c.value)==null||T.focus({preventScroll:!0})),R();return}if(d.key==="Escape"){d.preventDefault(),d.stopPropagation(),R(!0);return}if(["ArrowDown","ArrowUp"].includes(d.key)){d.preventDefault(),d.stopPropagation(),Le(d.key==="ArrowDown"?1:-1);return}if(["Home","End"].includes(d.key)&&d.target!==h.value){d.preventDefault(),d.stopPropagation(),Q.value=d.key==="Home"?O.value[0]??-1:O.value.at(-1)??-1;return}(d.key==="Enter"||d.key===" "&&!n.searchable)&&(d.preventDefault(),d.stopPropagation(),ce(Q.value))}}function Oe(d){n.disabled||m.value||d.isComposing||d.keyCode===229||d.ctrlKey||d.metaKey||d.altKey||["ArrowDown","ArrowUp","Home","End","Enter"," "].includes(d.key)&&(d.preventDefault(),d.stopPropagation(),E(d.key==="Home"?"first":d.key==="End"?"last":void 0))}function Je(d){var T,b;const x=d.target;x instanceof Node&&((T=r.value)!=null&&T.contains(x)||(b=u.value)!=null&&b.contains(x))&&Te(d)}function Fe(d){var T,b;const x=d.target;x instanceof Node&&!((T=r.value)!=null&&T.contains(x))&&!((b=u.value)!=null&&b.contains(x))&&R()}function nt(d){var T,b;const x=d.target;m.value&&x instanceof Node&&!((T=r.value)!=null&&T.contains(x))&&!((b=u.value)!=null&&b.contains(x))&&R()}function g(){document.hidden&&R()}return we([F,w],([d,x],[T,b])=>{var M;const D=(M=T==null?void 0:T[Q.value])==null?void 0:M.value,j=x===b?d.findIndex(A=>A.value===D&&!A.disabled):-1;Q.value=j>=0?j:O.value[0]??-1,m.value&&ke(()=>{se(),ae()})}),we(Q,()=>{m.value&&ke(ae)}),we(()=>n.disabled,d=>{d&&R()},{flush:"sync"}),we(()=>n.searchable,()=>R()),wt(()=>{var d,x;f=new ResizeObserver(()=>Z()),r.value&&f.observe(r.value),document.addEventListener("pointerdown",Fe,!0),document.addEventListener("keydown",Je,!0),document.addEventListener("focusin",nt),document.addEventListener("visibilitychange",g),window.addEventListener("scroll",Z,!0),window.addEventListener("resize",Z),(d=window.visualViewport)==null||d.addEventListener("resize",Z),(x=window.visualViewport)==null||x.addEventListener("scroll",Z)}),Et(()=>{var d,x;W=!0,R(),f==null||f.disconnect(),document.removeEventListener("pointerdown",Fe,!0),document.removeEventListener("keydown",Je,!0),document.removeEventListener("focusin",nt),document.removeEventListener("visibilitychange",g),window.removeEventListener("scroll",Z,!0),window.removeEventListener("resize",Z),(d=window.visualViewport)==null||d.removeEventListener("resize",Z),(x=window.visualViewport)==null||x.removeEventListener("scroll",Z)}),(d,x)=>(y(),z("div",{ref_key:"root",ref:r,class:fe(["selector",[`selector--${e.size}`,`selector--${e.variant}`,{"is-open":m.value,"is-invalid":e.invalid}]])},[l("button",{ref_key:"trigger",ref:c,type:"button",class:"selector-trigger",disabled:e.disabled,role:e.searchable?void 0:"combobox","aria-haspopup":"listbox","aria-expanded":m.value,"aria-controls":m.value?s:void 0,"aria-activedescendant":e.searchable?void 0:q.value,"aria-invalid":e.invalid||void 0,"aria-label":e.ariaLabel,onClick:xe,onKeydown:Oe},[Gs(d.$slots,"leading",{value:V.value},void 0),l("span",{class:fe(["selector-value",{"is-placeholder":G.value}])},X(te.value),3),B(K(Qt),{class:"selector-chevron",size:14,"aria-hidden":"true"})],40,Yg),(y(),Ne(pr,{to:"body"},[B(ct,{name:"selector-pop",onBeforeLeave:oe},{default:Ke(()=>[m.value?(y(),z("div",{key:0,ref_key:"panel",ref:u,class:fe(["selector-panel",[`selector-panel--${e.size}`,`selector-panel--${e.variant}`]]),style:Yt(S.value),onClick:x[2]||(x[2]=At(()=>{},["stop"]))},[e.searchable?(y(),z("div",Pg,[B(K(qr),{size:14,"aria-hidden":"true"}),Xe(l("input",{ref_key:"searchInput",ref:h,"onUpdate:modelValue":x[0]||(x[0]=T=>w.value=T),class:"selector-search",type:"search",role:"combobox","aria-autocomplete":"list","aria-expanded":m.value,"aria-controls":s,"aria-activedescendant":q.value,"aria-label":e.searchPlaceholder,placeholder:e.searchPlaceholder,autocomplete:"off"},null,8,_g),[[xi,w.value]])])):ge("",!0),l("div",{id:s,ref_key:"list",ref:p,class:"selector-list","data-scrolling":U.value||void 0,onScrollPassive:pe,role:"listbox","aria-label":e.ariaLabel,"aria-busy":e.loading||void 0},[(y(!0),z(me,null,Pe(F.value,(T,b)=>(y(),z("button",{id:a(b),key:`${T.custom?"custom":"option"}:${T.value}`,class:fe(["selector-option",{"is-active":b===Q.value,"is-selected":T.value===V.value}]),type:"button",role:"option",tabindex:"-1",disabled:T.disabled,"aria-selected":T.value===V.value,onPointermove:D=>!T.disabled&&(Q.value=b),onPointerdown:x[1]||(x[1]=At(()=>{},["prevent"])),onClick:At(D=>ce(b),["stop"])},[Gs(d.$slots,"option-leading",{option:T},void 0,!0),T.custom?(y(),z("span",Wg,"Use “"+X(T.value)+"”",1)):(y(),z("span",Bg,[De(X(le(T.label).before),1),le(T.label).match?(y(),z("mark",Hg,X(le(T.label).match),1)):ge("",!0),De(X(le(T.label).after),1)])),T.hint?(y(),z("span",Vg,[De(X(le(T.hint).before),1),le(T.hint).match?(y(),z("mark",Gg,X(le(T.hint).match),1)):ge("",!0),De(X(le(T.hint).after),1)])):ge("",!0),B(K(it),{class:fe(["selector-check",{"is-visible":T.value===V.value}]),size:14,"aria-hidden":"true"},null,8,["class"])],42,Rg))),128)),F.value.length?ge("",!0):(y(),z("p",Fg,X(e.loading?"Loading options…":e.emptyText),1))],40,$g)],6)):ge("",!0)]),_:3})]))],2))}}),Kg=jt(Zg,[["__scopeId","data-v-0da0e848"]]),Jg=Object.assign({"../components/ui/ActivityTimeline.vue":Dd,"../components/ui/ChatComposer.vue":wd,"../components/ui/ChatConversation.vue":Id,"../components/ui/ClarificationCard.vue":Td,"../components/ui/GroupedTaskList.vue":zd,"../components/ui/ModelSelector.vue":Ad,"../components/ui/Selector.vue":kd,"../components/ui/SlidingTabs.vue":Sd,"../components/ui/StatusBadge.vue":Ed,"../components/ui/ThinkingIndicator.vue":Cd}),qg=[["chat-conversation","Chat Conversation","Chat Conversation","Messages, execution steps, and input","conversation",el,"ChatConversation",!0],["chat-composer","Chat Composer","Chat Composer","Messages, attachments, and model selection","conversation",Zd,"ChatComposer",!0],["model-selector","Model Selector","Model Selector","Search and switch models","agent",pM,"ModelSelector"],["thinking-indicator","Thinking Indicator","Thinking Indicator","A thinking status indicator","conversation",oM,"ThinkingIndicator"],["status-badge","Status Badge","Status Badge","Task execution status","agent",fM,"StatusBadge"],["activity-timeline","Activity Timeline","Activity Timeline","Execution steps and tool details","workflow",BM,"ActivityTimeline",!0],["clarification-card","Clarification Card","Clarification Card","Questions, choices, and answers","conversation",mg,"ClarificationCard",!0],["sliding-tabs","Sliding Tabs","Sliding Tabs","Switch between tabs","navigation",Ts,"SlidingTabs",!0],["selector","Selector","Selector","Search and choose from a dropdown","navigation",Kg,"Selector"],["grouped-task-list","Grouped Task List","Grouped Task List","Grouped tasks with collapse and selection","navigation",tl,"GroupedTaskList",!0]],yt=qg.map(([e,t,n,o,i,s,a,r])=>({slug:e,name:t,english:n,description:o,category:i,component:s,filename:a,fresh:r,source:Jg[`../components/ui/${a}.vue`]||""})),Qo=[{id:"all",name:"All components",english:"All components"},{id:"conversation",name:"Conversation",english:"Conversation"},{id:"agent",name:"Agents",english:"Agent"},{id:"workflow",name:"Workflow",english:"Workflow"},{id:"navigation",name:"Navigation",english:"Navigation"}],Xg=e=>e.filename,ef={"chat-conversation":"chat conversation messages history attachments input send stop streaming","chat-composer":"chat composer message input attachments send","model-selector":"model select switch dropdown picker","thinking-indicator":"thinking waiting loading reasoning","status-badge":"status label badge tag","activity-timeline":"activity timeline fold expand collapse tools","clarification-card":"question answer clarification choices form","sliding-tabs":"tab tabs switch segmented control",selector:"select selector dropdown options picker form searchable","grouped-task-list":"list group tasks navigation sidebar fold collapse hover new task"};function tf(e,t){return`${e.name} ${e.english} ${e.description} ${ef[e.slug]||""}`.toLowerCase().includes(t.trim().toLowerCase())}const nf={body:'<rect class="front" x="9" y="9" width="11" height="11" rx="2"/><path class="back" d="M5 15V5a2 2 0 0 1 2-2h10"/>',duration:1050,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"前后两页分离，再贴合复位"},of={body:'<g class="lid"><path d="M4 7h16M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></g><path class="bin" d="M6 7l1 13h10l1-13"/>',duration:1100,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"桶身固定，桶盖和把手一起抬起再合上"},sf={body:'<path d="M3 17V7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8"/><path class="front" d="M3 10h18v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',duration:1150,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"后侧标签固定，前侧面板展开再合上"},af={body:'<rect x="3" y="4" width="18" height="16" rx="2"/><path class="prompt" d="M7 9l3 3-3 3"/><path class="cursor" d="M13 15h4"/>',duration:1100,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"外框保持固定，提示符前移，光标闪烁两次"},rf={body:'<circle class="node-a" cx="6" cy="6" r="2.2" fill="currentColor" fill-opacity="0"/><circle class="node-b" cx="6" cy="18" r="2.2" fill="currentColor" fill-opacity="0"/><circle class="node-c" cx="18" cy="12" r="2.2" fill="currentColor" fill-opacity="0"/><path pathLength="1" d="M8.2 6C12 6 14 8.2 16.45 10.45M8.2 18C12 18 14 15.8 16.45 13.55"/><path class="signal" pathLength="1" d="M8.2 6C12 6 14 8.2 16.45 10.45M8.2 18C12 18 14 15.8 16.45 13.55" opacity="0" stroke-width="2.5"/>',duration:1250,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"较小节点依次点亮，信号沿两条实线到达终点"},lf={body:'<path class="agent-check-draw" pathLength="1" d="M5 12l5 5 9-11"/>',duration:1050,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"从左侧起笔，经过折点，向右上方完成勾选"},cf={body:'<g class="bell-body"><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z"/></g><path class="clapper" d="M10 20a2 2 0 0 0 4 0"/>',duration:1200,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"钟身绕顶部摆动，铃舌延迟跟随并收稳"},uf={body:'<circle cx="12" cy="12" r="3"/><path class="gear" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',duration:1050,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"中心轴固定，外部齿轮转动并停稳"},df={body:'<g class="motion-target"><path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/></g>',duration:1150,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"刷新箭头完整转动一圈"},pf={body:'<g class="motion-target"><circle cx="12" cy="12" r="9" opacity="0.25"/><path d="M21 12a9 9 0 0 1-9 9"/></g>',duration:1150,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"演示单圈；实际加载期间才持续旋转"},Mf={body:'<g class="motion-target"><rect x="6" y="6" width="12" height="12" rx="2"/></g>',duration:900,viewBox:"0 0 24 24",filled:!0,strokeWidth:1.2,note:"停止方块收紧一次，再稳定回位"},gf={body:'<g class="motion-target"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></g>',duration:1100,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"纸飞机沿右上方向送出，再回到起点"},ff={body:'<g class="motion-target"><path d="M7 5l12 7-12 7z"/></g>',duration:950,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"播放符号轻轻前移，提示可开始运行"},hf={body:'<circle cx="12" cy="12" r="9"/><path class="motion-target" d="M10 9l5 3-5 3z"/>',duration:950,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"播放符号轻轻前移，提示可开始运行"},mf={body:'<g class="motion-target"><path d="M21 12a8 8 0 0 1-11.3 7.3L4 20l.7-5.7A8 8 0 1 1 21 12z"/></g>',duration:1e3,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"气泡从尾部轻展开一次，提示开启对话"},yf={body:'<path class="left" d="M9.5 3A2.5 2.5 0 0 0 7 5.5v.1A3 3 0 0 0 4.6 10a3 3 0 0 0 .4 5.4A3 3 0 0 0 9.5 20a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 9.5 3z"/><path class="right" d="M14.5 3A2.5 2.5 0 0 1 17 5.5v.1a3 3 0 0 1 2.4 4.4 3 3 0 0 1-.4 5.4 3 3 0 0 1-4.5 4.6 2.5 2.5 0 0 1-2.5-2.5"/>',duration:1200,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"左右脑轮流轻亮，提示思考与技能"},vf={body:'<rect x="4" y="8" width="16" height="11" rx="2"/><path class="antenna" d="M12 3v5"/><path class="eyes" d="M8 13h.01M16 13h.01"/><path class="mouth" d="M9 17h6"/>',duration:1150,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"天线接收一次信号，眼睛眨动，表情轻回应"},Nf={body:'<circle class="head" cx="12" cy="8" r="4"/><path class="body" d="M4 21a8 8 0 0 1 16 0"/>',duration:1050,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"头像轻点头一次，回应用户操作"},xf={body:'<path d="M3 3h8v8H3z"/><path d="M13 3h8v5h-8z"/><path d="M13 12h8v9h-8z"/><path d="M3 13h8v8H3z"/>',duration:565,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"四块面板依次轻抬并复位"},bf={body:'<path class="logout-door" d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4"/><g class="logout-arrow"><path d="M10 12h10"/><path d="m16 8 4 4-4 4"/></g>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"门框固定，箭头尖与横线对齐，整个箭头向外移出后复位"},jf={body:'<path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 17V9"/><path d="M12 17V7"/><path d="M16 17v-5"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"坐标轴固定，三条柱线从底部依次生长"},Lf={body:'<rect x="3.1" y="3.6" width="5" height="16.8" rx="1.6"/><rect x="9.5" y="3.6" width="5" height="16.8" rx="1.6"/><rect x="15.9" y="3.6" width="5" height="16.8" rx="1.6"/>',duration:570,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"三根等宽圆角列依次变淡；没有内部卡片和外框"},Df={body:'<path class="gate-shield" d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path class="gate-bars" d="M9 9v6M15 9v6"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"中性盾牌与闸口，表示人工审核入口"},wf={body:'<rect x="5" y="11" width="14" height="10"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',duration:460,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"锁身固定，锁梁轻压后复位"},If={body:'<g><circle cx="8" cy="15" r="4"/><path d="M11.5 12.5 21 3M16 8l3 3M18 5l3 3"/></g>',duration:530,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"钥匙小幅转动一次后复位"},Tf={body:'<rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01"/><path d="M7 17.5h.01"/>',duration:530,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"双层机架固定，两枚指示灯上下响应"},zf={body:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"文档轮廓固定，右上折角轻翻后复位"},Af={body:'<path class="skill-piece" d="M9 4V3a2 2 0 0 1 4 0v1h5a2 2 0 0 1 2 2v4h-1a2 2 0 0 0 0 4h1v4a2 2 0 0 1-2 2h-4v-1a2 2 0 0 0-4 0v1H6a2 2 0 0 1-2-2v-4H3a2 2 0 0 1 0-4h1V6a2 2 0 0 1 2-2h3Z"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"完整拼图块，轻抬归位以提示能力接入"},kf={body:'<path d="M9 7V3M15 7V3"/><path d="M8 7h8v4a4 4 0 0 1-8 0z"/><path d="M12 15v6"/>',duration:460,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"插头外壳固定，双插脚向接入方向伸出"},Sf={body:'<path d="M13 2L4 14h6l-1 8 9-12h-6z"/>',duration:470,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"闪电轻亮一次，回到完整轮廓"},Ef={body:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',duration:530,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"镜框与镜柄一起向右上扫描后复位"},Cf={body:'<path d="M4 5h16"/><path d="M7 12h10"/><path d="M10 19h4"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"三条筛选线交错轻移后复位"},Of={body:'<path d="M12 5v14"/><path d="M5 12h14"/>',duration:475,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"两条加号线从中心先后舒展"},Uf={body:'<path d="M5 3h12l4 4v14H3V5z"/><path d="M8 3v6h8V3"/><path d="M8 21v-7h8v7"/>',duration:570,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"存储轮廓固定，上槽轻压、下块响应"},Qf={body:'<circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/>',duration:520,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"三个圆点从上到下依次回应"},Yf={body:'<path d="M6 6l12 12M18 6L6 18"/>',duration:430,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"交叉线轻转一次后复位"},Pf={body:'<path d="M12 3l9 16H3z"/><path d="M12 9v5"/><path d="M12 17h.01"/>',duration:490,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"三角框固定，感叹号竖线和点先后提醒"},_f={body:'<path d="M7 4 3 8l4 4"/><path d="M3 8h13a5 5 0 0 1 5 5"/><path d="m17 20 4-4-4-4"/><path d="M21 16H8a5 5 0 0 1-5-5"/>',duration:560,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"两条箭头分别沿自己的方向交接"},$f={body:'<path d="M12 3v12M7 10l5 5 5-5"/><path d="M4 21h16"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"承接线固定，下载箭头向下轻落"},Rf={body:'<path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z"/><path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z"/>',duration:570,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"主星与副星错峰闪耀一次"},Wf={body:'<circle class="branch-start" cx="12" cy="19" r="2"/><circle class="branch-left" cx="5" cy="5" r="2"/><circle class="branch-right" cx="19" cy="5" r="2"/><path pathLength="1" class="branch-routes" d="M12 17v-5a5 5 0 0 0-5-5H5M12 12a5 5 0 0 1 5-5h2"/>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"流程分支：一个起点分流到两个终点，与 Git 仓库图形区分"},Bf={body:'<circle cx="12" cy="12" r="9"/><path pathLength="1" d="M8 12l3 3 5-6"/>',duration:530,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"外圈固定，勾从左边起笔到右上收笔"},Hf={body:'<circle cx="12" cy="12" r="4"/>',duration:430,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"圆点轻亮一次后恢复静态"},Vf={body:'<g><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M14 6l4 4"/></g>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"铅笔向笔尖方向轻写一次"},Gf={body:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',duration:530,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"眼眶固定，瞳孔向右查看后回中"},Ff={body:'<path pathLength="1" d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path pathLength="1" d="M14 3v5h5"/><path pathLength="1" d="M9 13h6"/><path pathLength="1" d="M9 17h6"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"纸张与折角固定，两行文字从左向右依次画出"},Zf={body:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"钟框固定，表针小幅前探后复位"},Kf={body:'<path d="M4 12h12M11 7l5 5-5 5"/><path d="M20 4v16"/>',duration:480,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"边界固定，箭头轻推向右侧入口"},Jf={body:'<path d="M8 12h12M15 7l5 5-5 5"/><path d="M4 4v16"/>',duration:480,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"边界固定，箭头轻推离左侧出口"},qf={body:'<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/>',duration:540,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"瓶体轻摇一次；当前原图没有液面与气泡"},Xf={body:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"日轮固定，光线轻转后复位"},eh={body:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"月牙轻转后回到静态位置"},th={body:'<path d="M9 3H3v6"/><path d="M3 3l7 7"/><path d="M15 21h6v-6"/><path d="M21 21l-7-7"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"两端角向各自对角方向展开后复位"},nh={body:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',duration:560,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"旗杆固定，旗面小幅摆动一次"},oh={body:'<g><path d="M3 3v5h5"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/></g><path d="M12 7v5l4 2"/>',duration:560,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"回溯环与表针轻回摆后复位"},ih={body:'<path d="M5 4C2 9 2 15 5 20"/><path d="M19 4c3 5 3 11 0 16"/><path d="M9 9l6 6M15 9l-6 6"/>',duration:480,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"变量符号固定，两侧括号轻展后收回"},sh={body:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/>',duration:480,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"门框固定，离开箭头向右滑动一次"},ah={body:'<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="9" r="2.5"/><path pathLength="1" d="M18 11.5a6 6 0 0 1-6 6H9M6 8.5v7"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"提交节点固定，连线沿已有路径描绘一次"},rh={body:'<path d="M21 11l-8.5 8.5a5 5 0 0 1-7-7L14 4a3.5 3.5 0 0 1 5 5l-8.5 8.5a2 2 0 0 1-3-3L15 6"/>',duration:520,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"回形针以上端为轴轻挂摆一次"},lh={body:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"屏幕外框轻亮；原图没有独立屏内扫描线"},ch={body:'<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 18h2"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"机身固定，屏幕底部短线轻响应"},uh={body:'<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>',duration:540,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"三条菜单线依次向右轻移并归位"},dh={body:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',duration:560,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"外圆与赤道固定，经线轻移模拟浏览"},ph={body:'<circle cx="12" cy="12" r="7"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M2 12h4"/><path d="M18 12h4"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"中心圆固定，四向准星轻聚拢后复位"},Mh={body:'<g class="tag-shape"><path d="M4 4h7l9 9a1.4 1.4 0 0 1 0 2l-5 5a1.4 1.4 0 0 1-2 0l-9-9V4Z"/><circle cx="7.5" cy="7.5" r="1.2" stroke-width="1.4"/></g>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"标准斜角吊牌，保留穿孔；围绕孔位轻摆一次后回位"},gh={body:'<g transform="scale(0.0234375)"><path fill="currentColor" stroke="none" d="M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2-73.2 0-146.4 24.1-206.5 72.3a33.23 33.23 0 0 0-2.7 49.4l181.7 181.7-215.4 215.2a15.8 15.8 0 0 0-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4 181.7 181.7c6.5 6.5 15 9.7 23.5 9.7 9.7 0 19.3-4.2 25.9-12.4 56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8zM666.2 549.3l-24.5 24.5 3.8 34.4a259.92 259.92 0 0 1-30.4 153.9L262 408.8c12.9-7.1 26.3-13.1 40.3-17.9 27.2-9.4 55.7-14.1 84.7-14.1 9.6 0 19.3.5 28.9 1.6l34.4 3.8 24.5-24.5L608.5 224 800 415.5 666.2 549.3z"/></g>',duration:480,viewBox:"0 0 24 24",filled:!0,strokeWidth:0,note:"图钉沿针尖方向轻落后复位"},fh={body:'<path d="m12 3.6 2.5 5.1 5.6.8-4 3.9.9 5.6L12 16.3 7 19l.9-5.6-4-3.9 5.6-.8z"/>',duration:520,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"星形轻转一次，始终保持空心"},hh={body:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.2 2.4c-.8.3-1.2.8-1.2 1.6V14"/><circle cx="12" cy="17" r="1"/>',duration:520,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"外圈固定，问号轻探、底点延后回应"},mh={body:'<path d="m12 2 10 6-10 6L2 8Z"/><path class="token-layer-one" d="m3 13 9 5 9-5"/><path class="token-layer-two" d="m3 17 9 5 9-5"/><path d="M10 6h4m-2 0v4"/>',duration:750,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"Token 叠片计量，各层依次轻抬归位"},yh={body:`<g class="motion">
          <rect class="p0" x="3.4" y="5.2" width="17.2" height="15.2" rx="2.6" />
          <path class="p1" d="M8.2 3v4.2M15.8 3v4.2M3.4 10.2h17.2"  pathLength="100"/>
          <circle class="p2" cx="12" cy="15.2" r="2.6" />
        </g>`,duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.6,note:"日历外框固定，仅日期圆点轻亮一次。"},vh={body:'<path d="M20 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"/><path class="queue-rows" d="M7 7h9M7 11h5M7 15h3"/><circle cx="17" cy="16" r="5"/><path class="queue-hand" d="M17 13v3l2 1"/>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"排队列表与等待时钟，时针前探一次"},Nh={body:'<g class="motion"><path class="p0" d="M9 14 4 9l5-5"  pathLength="100"/><path class="p1" d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"  pathLength="100"/></g>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.8,note:"hover：回溯曲线描过，箭头向左提示一次。禁用时静止。"},xh={body:'<g class="motion"><path class="p0" d="m15 14 5-5-5-5"  pathLength="100"/><path class="p1" d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13"  pathLength="100"/></g>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.8,note:"hover：前进曲线描过，箭头向右提示一次。禁用时静止。"},bh={body:'<g class="motion"><rect class="p0" x="3" y="4" width="6" height="5" rx="1.5" /><rect class="p1" x="15" y="4" width="6" height="5" rx="1.5" /><rect class="p2" x="15" y="15" width="6" height="5" rx="1.5" /><path class="p3" d="M9 6.5h6M12 6.5v11h3"  pathLength="100"/></g>',duration:700,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.8,note:"hover：三节点各自归位，连线保持稳定，表达整理布局。"},jh={body:'<rect x="2.5" y="3.5" width="19" height="17" rx="2"/><path d="M7 8h6v7h4M7 8v7h4"/><rect x="5" y="6" width="4" height="4" rx=".6" fill="currentColor" stroke="none"/><rect x="9" y="13" width="4" height="4" rx=".6" fill="currentColor" stroke="none"/><rect x="15" y="13" width="4" height="4" rx=".6" fill="currentColor" stroke="none"/><rect class="minimap-viewport" x="9" y="10.5" width="11" height="8.5" rx="1" stroke-width="1.2"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"小流程图与视口框，视口短移后归位"},Lh={body:`<g class="motion">
            <circle class="p0" cx="9" cy="6" r="1.6" /><circle class="p1" cx="15" cy="6" r="1.6" />
            <circle class="p2" cx="9" cy="12" r="1.6" /><circle class="p3" cx="15" cy="12" r="1.6" />
            <circle class="p4" cx="9" cy="18" r="1.6" /><circle class="p5" cx="15" cy="18" r="1.6" />
          </g>`,duration:550,viewBox:"0 0 24 24",filled:!0,strokeWidth:0,note:"hover：两列握点微分开再归位，实际拖动中保持稳定。"},Dh={body:`<g class="motion">
                    <path class="p0" fill="currentColor" fill-rule="nonzero" d="M17.535 12.514l-.696-1.796c0-.021.01-.375.01-.558C16.848 7.088 15.446 4 12 4c-3.446 0-4.848 3.088-4.848 6.16 0 .183.009.537.01.558l-.696 1.796c-.19.515-.38 1.05-.517 1.51-.657 2.189-.444 3.095-.282 3.115.348.043 1.354-1.648 1.354-1.648 0 .98.488 2.258 1.542 3.18-.394.127-.878.32-1.188.557-.28.214-.245.431-.194.52.22.385 3.79.245 4.82.125 1.03.12 4.599.26 4.82-.126.05-.088.085-.305-.194-.519-.311-.237-.795-.43-1.19-.556 1.055-.923 1.542-2.202 1.542-3.181 0 0 1.007 1.691 1.355 1.648.162-.02.378-.928-.283-3.116-.14-.463-.325-.994-.516-1.509z" pathLength="100"/>
                </g>`,duration:650,viewBox:"0 0 24 24",filled:!0,strokeWidth:0,note:"品牌几何保持原样；仅在所属配置按钮 hover 时给外层背景/边框反馈。"},wh={body:'<g class="motion"><circle class="p0" cx="12" cy="12" r="10"/><line class="p1" x1="12" y1="16" x2="12" y2="12"/><line class="p2" x1="12" y1="8" x2="12.01" y2="8"/></g>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:2,note:"hover：外环固定，信息标点轻亮一次。"},Ih={body:'<g class="motion"><path class="p0" d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" pathLength="100"/><line class="p1" x1="12" y1="9" x2="12" y2="13"/><line class="p2" x1="12" y1="17" x2="12.01" y2="17"/></g>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:2,note:"错误横幅首次出现时强调一次，历史错误保持静止。"},Th={body:'<g class="motion"><rect class="p0" x="4" y="4" width="14" height="14" rx="2"/><path class="p1" d="m7 20 10.5-.1A2.5 2.5 0 0 0 20 17.4V8" pathLength="100"/></g>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.8,note:"hover：前后两层短暂分离再归位。"},zh={body:'<path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8M13 3v5h5V8l-5-5M8 11h3M8 15h2"/><g class="review-lens"><circle cx="16.5" cy="14.5" r="3.5"/><path d="m19 17 3 3"/></g>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"评审文档与放大镜，审阅镜头轻扫一次"},Ah={body:'<rect x="4" y="3.5" width="16" height="17" rx="2"/><path d="M8 8h8"/><path class="form-fields" d="M8 12h8M8 16h5"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"表单轮廓固定，输入字段轻亮一次"},kh={body:'<g class="team-front"><circle cx="9" cy="8" r="3"/><path d="M3 20v-1a6 6 0 0 1 12 0v1"/></g><g class="team-back"><path d="M16 5a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5v1"/></g>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"双人团队图形，后方成员轻移归位"},Sh={body:'<path class="integration-left" d="M9 4H6a3 3 0 0 0-3 3v2h5v6H3v2a3 3 0 0 0 3 3h3"/><path class="integration-right" d="M15 4h3a3 3 0 0 1 3 3v2h-5v6h5v2a3 3 0 0 1-3 3h-3"/><path d="M10 12h4"/>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"系统集成，两侧连接口靠近后归位"},Eh={body:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle class="image-sun" cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"图片边框固定，光点轻亮一次"},Ch={body:'<circle cx="12" cy="12" r="8.5"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"通用圆形状态"},Oh={body:'<path d="m5 5 10 7-10 7z"/><path d="M19 5v14"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"跳过当前步骤"},Uh={copy:nf,trash:of,folder:sf,terminal:af,"stage-terminal":{body:'<rect x="3.2" y="4.2" width="17.6" height="15.6" rx="2"/><path class="prompt" d="M7.1 9.3 10.3 12 7.1 14.7"/><path class="cursor" d="M12.2 14.8h4.6"/>',duration:1100,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"外框保持固定，提示符前移，光标闪烁两次"},workflow:rf,check:lf,"check-draw":{body:'<path pathLength="1" class="agent-check-draw" d="M7.6 12.4l3.6 3.6L18.2 7.4"/>',duration:1050,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"去掉起笔圆点，仅保留从左侧经过折点、向右上方画出的连续勾"},bell:cf,settings:uf,refresh:df,spinner:pf,"arc-spinner":{body:'<g class="motion-target"><g class="agent-arc-spin"><path d="M12 3A9 9 0 1 1 3 12"/><circle class="agent-arc-node" cx="3" cy="12" r="1.65" fill="currentColor" stroke="none"/></g></g>',duration:1150,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"演示单圈；实际加载期间才持续旋转"},"breath-dot":{body:'<circle class="agent-heart-ring" cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" stroke-width="1.15"/><circle class="agent-heart-core" cx="12" cy="12" r="3" fill="currentColor" stroke="none"/>',duration:1150,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"核心轻呼吸，外环扩散一轮后复位"},"bubble-idle":{body:'<path d="M20.5 11.5a7.5 7.5 0 0 1-10.4 6.9L4.2 19.6l.6-5.2A7.5 7.5 0 1 1 20.5 11.5z"/><circle class="agent-bdot-a" cx="9.2" cy="11.4" r="1.05" fill="currentColor" stroke="none"/><circle class="agent-bdot-b" cx="12" cy="11.4" r="1.05" fill="currentColor" stroke="none"/><circle class="agent-bdot-c" cx="14.8" cy="11.4" r="1.05" fill="currentColor" stroke="none"/>',duration:1300,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"对话框固定，三个思考点依次轻提一次"},"user-hold":{body:'<circle cx="10.2" cy="8" r="3.2"/><path d="M3.8 20a6.4 6.4 0 0 1 12.8 0"/><circle class="agent-user-dot" cx="18.6" cy="11.5" r="1.55" fill="currentColor" stroke="none"/>',duration:1100,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"人物保持静止，待确认提示点呼吸一次"},"arrow-flow":{body:'<g class="agent-wake"><circle cx="4.6" cy="12" r="1.35" fill="currentColor" stroke="none"/><path d="M6.4 12h11.2"/><path d="M14.2 6.6l6.2 5.4-6.2 5.4"/></g>',duration:1e3,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"起点轻亮，箭头向前传递一次"},"run-live":{body:'<g class="agent-wake"><circle cx="12" cy="12" r="8.2"/><path d="M10.4 8.9l4.6 3.1-4.6 3.1z"/></g>',duration:1050,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"运行环轻亮，播放符号向前唤醒一次"},"history-back":{body:'<path class="return-arrow" d="M4.2 4.2v4.6h4.6"/><path d="M4.3 13.2A8.2 8.2 0 1 0 7.2 6.1L4.2 8.8"/><circle cx="12" cy="12" r="1.45" fill="currentColor" stroke="none"/><path class="clock-hand" d="M12 8.2v3.2l3.2 1.6"/>',duration:1100,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"时针短暂回拨，返回箭头轻牵引后复位"},"play-continue":{body:'<g class="agent-wake"><circle cx="5.4" cy="12" r="1.4" fill="currentColor" stroke="none"/><path d="M9.2 6.4l10.4 5.6-10.4 5.6z"/></g>',duration:950,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"起点激活，继续符号前移后回位"},"quiet-dot":{body:'<g class="agent-quiet"><circle cx="12" cy="12" r="5.2" opacity="0.45"/><circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none" opacity="0.55"/></g>',duration:1150,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"低强度呼吸一次，保持静默状态"},"warn-pulse":{body:'<g class="agent-wake"><path d="M12 3.2L21.2 19.6H2.8z"/><path d="M12 9.2v5.2"/><circle cx="12" cy="17.4" r="0.85" fill="currentColor" stroke="none"/></g>',duration:1100,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"边框强调一次，感叹号轻压回弹"},"chat-send":{body:'<g class="motion-target"><path d="M12 18V6m-6 6 6-6 6 6"/></g>',duration:1050,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"发送箭头向上送出，再回到待发送位置"},"chat-stop":{body:'<g class="motion-target"><rect x="3.75" y="3.75" width="16.5" height="16.5" rx="3"/></g>',duration:900,viewBox:"0 0 24 24",filled:!0,strokeWidth:0,note:"停止方块收紧一次，再稳定回位"},stop:Mf,send:gf,play:ff,runs:hf,chat:mf,brain:yf,robot:vf,user:Nf,"stage-ide":{body:'<rect x="3.2" y="3.6" width="17.6" height="16.8" rx="2"/><path pathLength="1" d="M3.2 8h17.6"/><path pathLength="1" d="M8.2 8v12.4"/><path class="code-a" pathLength="1" d="M11 12.2h6"/><path class="code-b" pathLength="1" d="M11 15.4h4"/>',duration:1050,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"编辑器框架固定，两行代码依次输入"},"stage-browser":{body:'<circle cx="12" cy="12" r="8"/><path d="M4 12h16"/><ellipse cx="12" cy="12" rx="3.3" ry="8"/>',duration:1200,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"地球经线转过一面，外圈和纬线保持稳定"},"stage-log":{body:'<circle cx="6.1" cy="6.6" r="1.15" fill="currentColor" stroke="none"/><circle cx="6.1" cy="12" r="1.15" fill="currentColor" stroke="none"/><circle cx="6.1" cy="17.4" r="1.15" fill="currentColor" stroke="none"/><path class="row-a" pathLength="1" d="M9.3 6.6h8.6"/><path class="row-b" pathLength="1" d="M9.3 12h6.4"/><path class="row-c" pathLength="1" d="M9.3 17.4h8.6"/>',duration:1200,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"三行日志从上到下逐条写入"},"stage-resources":{body:'<rect x="3.2" y="3.2" width="7" height="7" rx="1.6"/><rect x="13.8" y="3.2" width="7" height="7" rx="1.6"/><rect x="3.2" y="13.8" width="7" height="7" rx="1.6"/><rect x="13.8" y="13.8" width="7" height="7" rx="1.6"/>',duration:1250,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"四个资源格依次轻亮并复位"},dashboard:xf,"home-start":{body:'<path d="m3.5 10 7.3-6a1.9 1.9 0 0 1 2.4 0l7.3 6"/><path d="M5.5 8.4v10.1A1.5 1.5 0 0 0 7 20h3v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h3a1.5 1.5 0 0 0 1.5-1.5V8.4"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"屋顶固定，入口轮廓轻亮；门洞尚未拆层"},"new-request":{body:'<path d="M12.5 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6.5"/><path d="m15.5 4.5 4 4M10 10l7.3-7.3a1.4 1.4 0 0 1 2 0l2 2a1.4 1.4 0 0 1 0 2L14 14l-5 1 1-5Z"/>',duration:520,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"纸张固定，铅笔沿笔尖方向轻写一次"},"pending-chat":{body:'<path d="M8 5h8a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4H9l-5 3V9a4 4 0 0 1 4-4Z"/><path d="M8.5 10h7"/><path d="M8.5 13.5h4.5"/>',duration:470,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"气泡固定，两行文字先后回应"},"pending-review":{body:'<rect x="5" y="3.5" width="14" height="17" rx="3"/><path pathLength="1" d="M9 8h6"/><path pathLength="1" d="M9 12h6"/><path pathLength="1" d="M9 16h3"/>',duration:530,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"纸张固定，三行内容自上而下描绘"},"pending-approval":{body:'<circle cx="12" cy="12" r="8.5"/><path class="approval-hand" d="M12 7v5l3 2"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"等待审批，使用中性时钟而非通过勾"},"more-horizontal":{body:'<circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>',duration:490,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"三个点依次轻抬，保持横向排列"},logout:bf,chart:jf,board:Lf,gate:Df,lock:wf,key:If,server:Tf,artifact:zf,skills:Af,connector:kf,trigger:Sf,search:Ef,filter:Cf,plus:Of,save:Uf,more:Qf,close:Yf,"chat-artifacts":{body:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M14 4v16"/>',duration:470,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"外框固定，分隔线轻拉展示分栏"},alert:Pf,"chevron-down":{body:'<path d="M6 9l6 6 6-6"/>',duration:440,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"箭头沿指向轻移一次后复位"},"chevron-left":{body:'<path d="M15 6l-6 6 6 6"/>',duration:440,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"箭头沿指向轻移一次后复位"},"chevron-right":{body:'<path d="M9 6l6 6-6 6"/>',duration:440,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"箭头沿指向轻移一次后复位"},"arrow-left":{body:'<path d="M19 12H5M11 6l-6 6 6 6"/>',duration:440,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"箭头沿指向轻移一次后复位"},"arrow-right":{body:'<path d="M5 12h14M13 6l6 6-6 6"/>',duration:440,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"箭头沿指向轻移一次后复位"},"arrow-up":{body:'<path d="M12 19V5M5 12l7-7 7 7"/>',duration:440,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"箭头沿指向轻移一次后复位"},"chevrons-down":{body:'<path d="M6 5l6 6 6-6"/><path d="M6 11l6 6 6-6"/>',duration:500,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"双箭头从上到下依次推进"},swap:_f,download:$f,sparkles:Rf,branch:Wf,ci:Bf,dot:Hf,edit:Vf,eye:Gf,"eye-off":{body:'<path pathLength="1" d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path pathLength="1" d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><path pathLength="1" d="M14.12 14.12a3 3 0 1 1-4.24-4.24"/><path pathLength="1" d="M1 1l22 22"/>',duration:520,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"眼眶固定，斜线从左上到右下描绘"},doc:Ff,clock:Zf,input:Kf,output:Jf,flask:qf,sun:Xf,moon:eh,expand:th,flag:nh,history:oh,variable:ih,leave:sh,git:ah,paperclip:rh,monitor:lh,mobile:ch,menu:uh,"panel-left":{body:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="m16 15-3-3 3-3"/>',duration:470,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"外框固定，分隔线和箭头向收起方向轻移"},globe:dh,crosshair:ph,tag:Mh,pin:gh,star:fh,"star-filled":{body:'<path d="m12 3.6 2.5 5.1 5.6.8-4 3.9.9 5.6L12 16.3 7 19l.9-5.6-4-3.9 5.6-.8z"/>',duration:460,viewBox:"0 0 24 24",filled:!0,strokeWidth:1.2,note:"星标轻亮舒展一次，保持实心状态"},help:hh,token:mh,calendar:yh,"metric-running":{body:`<g class="motion">
          <circle class="p0" cx="12" cy="12" r="8.2" />
          <path class="p1" d="M10.3 8.7l5.4 3.3-5.4 3.3z"  pathLength="100"/>
        </g>`,duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.6,note:"hover：内侧播放符向右短移，圆环固定。真实执行态才允许持续动效。"},queue:vh,undo:Nh,redo:xh,"zoom-out":{body:'<g class="motion"><path class="p0" d="M5 12h14"  pathLength="100"/></g>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.8,note:"hover：减号轻收再复原，缩放数值由实际点击控制。"},layout:bh,minimap:jh,"priority-bolt":{body:`<g class="motion">
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
                        </g>`,duration:650,viewBox:"0 0 16 16",filled:!1,strokeWidth:1.5,note:"卡片 hover：左上、右下角分离一次，表示展开预览。"},grip:Lh,"confirmation-check":{body:`<g class="motion">
        
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
  </g>`,duration:1200,viewBox:"0 0 14 14",filled:!0,strokeWidth:0,note:"真实正在回复期间可持续呼吸；此预览只演示一轮。"},qq:Dh,info:wh,warning:Ih,"preview-target":{body:'<g class="motion"><circle class="p0" cx="12" cy="12" r="7.5"/><circle class="p1" cx="12" cy="12" r="2"/><path class="p2" d="M12 2v3M12 19v3M2 12h3M19 12h3" pathLength="100"/></g>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.8,note:"hover：四向刻度描入、中心定位一次；取点状态保持强调色。"},layers:Th,"preview-chat":{body:'<g class="motion"><path class="p0" d="M19.5 4.5h-15A2.5 2.5 0 0 0 2 7v8.5A2.5 2.5 0 0 0 4.5 18H7l3 3 3-3h6.5a2.5 2.5 0 0 0 2.5-2.5V7a2.5 2.5 0 0 0-2.5-2.5Z" pathLength="100"/><path class="p1" d="M7 9h10" pathLength="100"/><path class="p2" d="M7 13h6" pathLength="100"/></g>',duration:650,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.8,note:"hover：框体固定，两行文字依次画出一次。"},"drawer-collapse":{body:'<g class="motion"><rect class="p0" x="1.5" y="2.5" width="13" height="11" rx="1.5" stroke="currentColor"/><path class="p1" d="M6 2.5v11M9.2 6.2 7.4 8l1.8 1.8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" pathLength="100"/></g>',duration:650,viewBox:"0 0 16 16",filled:!1,strokeWidth:1.8,note:"hover：框体固定，收起箭头向左短移一次。"},review:zh,form:Ah,users:kh,"bell-settings":{body:'<g class="bell-body"><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z"/></g><path d="M10 20a2 2 0 0 0 4 0"/><path class="bell-adjust" d="M10 8h4M12 6v4"/>',duration:600,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"通知设置，钟身固定，调节标记转动一次"},integration:Sh,image:Eh,circle:Ch,skip:Oh,"server-unavailable":{body:'<rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01M7 17.5h.01M3 3l18 18"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"沙箱或服务暂不可用"},"workflow-empty":{body:'<rect x="3" y="8" width="6" height="8" rx="2"/><rect x="15" y="8" width="6" height="8" rx="2"/><path d="M9 12h6M12 9v6"/>',duration:550,viewBox:"0 0 24 24",filled:!1,strokeWidth:1.7,note:"尚未创建工作流"}},Ro=Uh,nl=Object.keys(Ro),Qh=nl.length;function Yh(e){return Object.hasOwn(Ro,e)?Ro[e]:Ro.dot}const Ph=new Set(["check","check-draw","spinner","arc-spinner","breath-dot","bubble-idle","user-hold","arrow-flow","run-live","history-back","play-continue","quiet-dot","warn-pulse","chat-stop","stop","pending-chat","pending-review","pending-approval","alert","ci","dot","clock","metric-running","queue","confirmation-check","inbox-boot","inbox-reply","info","warning","circle","skip","server-unavailable","workflow-empty","gate","priority-bolt","priority-low","priority-medium","priority-high"]),ol={copy:"Copy",trash:"Delete",folder:"Folder",terminal:"Terminal","stage-terminal":"Terminal workspace",workflow:"Workflow",check:"Check","check-draw":"Draw check",bell:"Notifications",settings:"Settings",refresh:"Refresh",spinner:"Loading","arc-spinner":"Arc spinner","breath-dot":"Breathing dot","bubble-idle":"Thinking bubble","user-hold":"Waiting for input","arrow-flow":"Flow transition","run-live":"Running","history-back":"History back","play-continue":"Continue","quiet-dot":"Idle","warn-pulse":"Warning pulse","chat-send":"Send message","chat-stop":"Stop response",stop:"Stop",send:"Send",play:"Play",runs:"Run history",chat:"Chat",brain:"Thinking",robot:"Agent",user:"User","stage-ide":"Code editor","stage-browser":"Browser","stage-log":"Logs","stage-resources":"Resources",dashboard:"All components","home-start":"Start creating","new-request":"New task","pending-chat":"Awaiting reply","pending-review":"Awaiting review","pending-approval":"Awaiting approval","more-horizontal":"More actions",logout:"Log out",chart:"Chart",board:"Board",gate:"Approval gate",lock:"Lock",key:"Key",server:"Server",artifact:"Artifact",skills:"Skills",connector:"Connector",trigger:"Trigger",search:"Search",filter:"Filter",plus:"Add",save:"Save",more:"More",close:"Close","chat-artifacts":"Conversation artifacts",alert:"Alert","chevron-down":"Expand down","chevron-left":"Collapse left","chevron-right":"Expand right","arrow-left":"Arrow left","arrow-right":"Arrow right","arrow-up":"Arrow up","chevrons-down":"Collapse down",swap:"Switch",download:"Download",sparkles:"Sparkles",branch:"Branch",ci:"Continuous integration",dot:"Dot",edit:"Edit",eye:"Visible","eye-off":"Hidden",doc:"Document",clock:"Clock",input:"Input",output:"Output",flask:"Experiment",sun:"Light mode",moon:"Dark mode",expand:"Expand",flag:"Flag",history:"History",variable:"Variable",leave:"Leave",git:"Version control",paperclip:"Attachment",monitor:"Desktop",mobile:"Mobile",menu:"Menu","panel-left":"Sidebar",globe:"Web",crosshair:"Target",tag:"Tag",pin:"Pin",star:"Star","star-filled":"Starred",help:"Help",token:"Usage",calendar:"Calendar","metric-running":"Running metric",queue:"Queue",undo:"Undo",redo:"Redo","zoom-out":"Zoom out",layout:"Layout",minimap:"Minimap","priority-bolt":"Urgent priority","priority-low":"Low priority","priority-medium":"Medium priority","priority-high":"High priority","sort-ascending":"Sort ascending","sort-descending":"Sort descending","preview-expand":"Expand preview",grip:"Drag handle","confirmation-check":"Confirmed","image-off":"Image unavailable","inbox-boot":"Starting","inbox-reply":"New reply",qq:"QQ",info:"Information",warning:"Warning","preview-target":"Preview target",layers:"Layers","preview-chat":"Chat preview","drawer-collapse":"Collapse drawer",review:"Review",form:"Form",users:"Team","bell-settings":"Notification settings",integration:"Integration",image:"Image",circle:"Circle outline",skip:"Skip","server-unavailable":"Server unavailable","workflow-empty":"Empty workflow"};function wa(e){return ol[e]||"Icon"}const _h=nl.map(e=>({name:e,label:ol[e],category:Ph.has(e)?"status":"interface",animated:e!=="qq"}));function $h(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function Rh(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}async function il(e){if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(e);return}const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();const n=document.execCommand("copy");if(t.remove(),!n)throw new Error("Copy is unavailable")}const rs=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches,Ri=new WeakMap,ls={beforeMount(e){e.dataset.revealed=rs()?"true":"false"},mounted(e){if(rs()||!("IntersectionObserver"in window)){e.dataset.revealed="true";return}const t=new IntersectionObserver(n=>{n.some(o=>o.isIntersecting)&&(e.dataset.revealed="true",t.disconnect())},{threshold:.06,rootMargin:"0px 0px 45px 0px"});t.observe(e),Ri.set(e,t)},beforeUnmount(e){var t;(t=Ri.get(e))==null||t.disconnect(),Ri.delete(e)}};function Wh(e){const t=e,{width:n,height:o}=t.getBoundingClientRect();t.style.width=`${n}px`,t.style.height=`${o}px`,t.style.left=`${t.offsetLeft}px`,t.style.top=`${t.offsetTop}px`,t.inert=!0}const Bh=["data-icon","data-icon-motion","width","height","viewBox","fill","stroke","stroke-width","innerHTML"],Hh='[data-icon-motion-host], button, a[href], summary, [role="button"], [role="tab"], [tabindex]:not([tabindex="-1"])',Ue=Ze({__name:"AnimatedIcon",props:{name:{},size:{default:20},motionKey:{},busy:{type:Boolean,default:!1},interactive:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},setup(e,{expose:t}){const n=e,o=H(null),i=je(()=>Yh(n.name)),s=H("idle"),a=H(!1);let r=null,c,u,p=!1,h=0,m=!1;const w=()=>{var S;return n.disabled||!!((S=o.value)!=null&&S.closest('[disabled], [aria-disabled="true"], [inert]'))};function U(){h++,u&&clearTimeout(u),u=void 0,s.value=n.busy&&!a.value&&!w()?"busy":"idle"}async function Y(){var Q;if(!p||a.value||w()||n.busy)return;u&&clearTimeout(u);const S=++h;s.value="idle",await ke(),!(!p||S!==h||a.value||w()||n.busy)&&((Q=o.value)==null||Q.getBoundingClientRect(),s.value="once",u=setTimeout(()=>{S===h&&U()},i.value.duration+360))}function V(S){S.pointerType!=="touch"&&(m=!0,n.interactive&&Y())}function ee(){m=!1}function G(S){!n.interactive||m||S.target instanceof Element&&S.target.matches(":focus-visible")&&Y()}function te(){a.value=(c==null?void 0:c.matches)??!1,U()}return wt(()=>{var S;p=!0,c=window.matchMedia("(prefers-reduced-motion: reduce)"),a.value=c.matches,c.addEventListener("change",te),r=((S=o.value)==null?void 0:S.closest(Hh))||o.value,r==null||r.addEventListener("pointerenter",V),r==null||r.addEventListener("pointerleave",ee),r==null||r.addEventListener("focusin",G),U()}),we(()=>[n.name,n.busy,n.disabled],U),we(()=>n.motionKey,(S,Q)=>{S!==Q&&S!==void 0&&Y()}),Et(()=>{p=!1,U(),r==null||r.removeEventListener("pointerenter",V),r==null||r.removeEventListener("pointerleave",ee),r==null||r.removeEventListener("focusin",G),c==null||c.removeEventListener("change",te)}),t({play:Y,reset:U,element:o}),(S,Q)=>(y(),z("svg",{ref_key:"element",ref:o,class:"agent-icon","aria-hidden":"true",focusable:"false","data-icon":e.name,"data-icon-motion":s.value,width:e.size,height:e.size,viewBox:i.value.viewBox,fill:i.value.filled?"currentColor":"none",stroke:i.value.strokeWidth?"currentColor":"none","stroke-width":i.value.strokeWidth||void 0,"stroke-linecap":"round","stroke-linejoin":"round",innerHTML:i.value.body},null,8,Bh))}}),lt=22e3,sl="cubic-bezier(.22,.75,.16,1)",Vh=e=>e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),Ae=(e,t)=>({...t,offset:e/lt,easing:sl});function Gh(e,t){const n=e.parentElement,o=new Map;let i=!1,s=!1,a=lt,r=window.innerWidth<=700,c=null,u,p;function h(f){f.original.forEach(({value:W,priority:F},O)=>{W?f.node.style.setProperty(O,W,F):f.node.style.removeProperty(O)})}function m(f){o.forEach(W=>{var F;(F=W.animation)==null||F.cancel(),W.animation=void 0,f&&h(W)})}function w(f,W,F){var se;const O=o.get(f);if((O==null?void 0:O.node)===W||(O&&((se=O.animation)==null||se.cancel(),h(O),o.delete(f)),!W))return;const q=[...new Set(F.flatMap(ae=>Object.keys(ae).filter(pe=>!["offset","easing","composite"].includes(pe)).map(Vh)))],le=new Map(q.map(ae=>[ae,{value:W.style.getPropertyValue(ae),priority:W.style.getPropertyPriority(ae)}])),he=W.animate(F,{duration:lt,fill:"both"});he.pause(),he.currentTime=a,o.set(f,{node:W,properties:q,original:le,animation:he})}function U(f){let W=0,F=0;for(let O=f;O&&O!==e;O=O.offsetParent)W+=O.offsetLeft,F+=O.offsetTop;for(let O=f.parentElement;O&&O!==e;O=O.parentElement)W-=O.scrollLeft,F-=O.scrollTop;return{x:W,y:F,width:f.offsetWidth,height:f.offsetHeight}}function Y(){const f=e.offsetWidth,W=e.offsetHeight,F=n.clientWidth,O=n.clientHeight,q=u??{x:f-264,y:60,width:244,height:47},le=Math.min(r?1.45:2.15,(F-(r?36:100))/q.width,(O-100)/q.height),he=new DOMMatrix().translate(F/2-(F-f)/2-le*(q.x+q.width/2),O*.48-(O-W)/2-le*(q.y+q.height/2)).scale(le).toString(),se="none";return[Ae(0,{transform:he,opacity:0}),Ae(300,{transform:he,opacity:1}),Ae(1350,{transform:he,opacity:1}),Ae(2400,{transform:se,opacity:1}),Ae(7400,{transform:se,opacity:1}),Ae(8500,{transform:"none",opacity:1}),Ae(lt,{transform:"none",opacity:1})]}function V(f){return[Ae(0,{opacity:0,filter:"blur(0px)"}),Ae(1500,{opacity:0,filter:"blur(0px)"}),Ae(2400,{opacity:1,filter:"blur(0px)"}),Ae(4200,{opacity:1,filter:"blur(0px)"}),Ae(5300,{opacity:f,filter:"blur(3px)"}),Ae(7400,{opacity:f,filter:"blur(3px)"}),Ae(8500,{opacity:1,filter:"blur(0px)"}),Ae(lt,{opacity:1,filter:"blur(0px)"})]}function ee(){var Z,E,R;const f=e.querySelector('[data-message-id$="-sample-user"] .user-bubble');if(f&&a<1350){const oe=U(f);(f!==c||!u||oe.x!==u.x||oe.y!==u.y||oe.width!==u.width||oe.height!==u.height)&&(c=f,u=oe,p=Y(),(R=(E=(Z=o.get("camera"))==null?void 0:Z.animation)==null?void 0:E.effect)==null||R.setKeyframes(p))}p??(p=Y()),w("camera",e,p);const W=e.querySelector(".home-chat-window");if(W&&!o.has("window")){const oe=getComputedStyle(W);w("window",W,[Ae(0,{borderColor:"transparent",boxShadow:"0 0 0 0 transparent"}),Ae(1450,{borderColor:"transparent",boxShadow:"0 0 0 0 transparent"}),Ae(2400,{borderColor:oe.borderTopColor,boxShadow:oe.boxShadow}),Ae(11900,{borderColor:oe.borderTopColor,boxShadow:oe.boxShadow}),Ae(13100,{borderColor:"transparent",boxShadow:"0 0 0 0 transparent"}),Ae(lt,{borderColor:"transparent",boxShadow:"0 0 0 0 transparent"})])}w("bar",e.querySelector(".home-chat-window-bar"),V(.35)),w("composer",e.querySelector(".conversation-bottom"),V(.27));const F=e.querySelector('[data-message-id$="-sample-user"]');w("user",F,[Ae(0,{opacity:1,filter:"blur(0px)"}),Ae(4200,{opacity:1,filter:"blur(0px)"}),Ae(5300,{opacity:.32,filter:"blur(2px)"}),Ae(7400,{opacity:.32,filter:"blur(2px)"}),Ae(8500,{opacity:1,filter:"blur(0px)"}),Ae(lt,{opacity:1,filter:"blur(0px)"})]),w("question-text",(f==null?void 0:f.querySelector(".conversation-prose"))??null,[Ae(0,{clipPath:"inset(0 100% 0 0)"}),Ae(180,{clipPath:"inset(0 100% 0 0)"}),Ae(850,{clipPath:"inset(0 0% 0 0)"}),Ae(lt,{clipPath:"inset(0 0% 0 0)"})]);const O=e.querySelector('[data-message-id$="-sample-assistant"]');w("answer",O,[Ae(0,{opacity:1,filter:"blur(0px)"}),Ae(lt,{opacity:1,filter:"blur(0px)"})]);const q=n.clientWidth,le=window.innerWidth<=900,he=Math.min(760,q-(r?16:0)),se=le?Math.min(760,q-16):440,ae={width:`${he}px`,marginRight:`${(q-he)/2}px`,opacity:1,visibility:"visible"},pe={width:`${se}px`,marginRight:`${le?(q-se)/2:q-se}px`,opacity:le?0:1,visibility:le?"hidden":"visible"};w("workspace-window",W,[Ae(0,ae),Ae(11900,ae),Ae(13100,pe),Ae(lt,pe)]),w("workspace-preview",e.querySelector(".home-workspace-preview"),[Ae(0,{opacity:0,transform:"translateX(32px)",visibility:"hidden"}),Ae(11899,{opacity:0,transform:"translateX(32px)",visibility:"hidden"}),Ae(11900,{opacity:0,transform:"translateX(32px)",visibility:"visible"}),Ae(13100,{opacity:1,transform:"none",visibility:"visible"}),Ae(lt,{opacity:1,transform:"none",visibility:"visible"})]),o.forEach((oe,ce)=>{var xe;oe.node.isConnected||((xe=oe.animation)==null||xe.cancel(),h(oe),o.delete(ce))})}function G(f){if(a=Math.min(lt,Math.max(0,f)),!i){if(t()){I();return}s&&(m(!0),o.clear(),s=!1),e.dataset.cameraScene=a<1350?"question-closeup":a<2400?"reveal":a<4200?"process":a<5600?"focus":a<7400?"answer":a<8500?"return":a<11900?"conversation":a<13100?"open-preview":"preview",ee(),o.forEach(W=>{W.animation&&(W.animation.currentTime=a)}),e.dataset.cameraTime=`${Math.round(a)}`,e.dataset.cameraState=a===lt?"complete":"tracking"}}function te(){return[...o.values()].filter(f=>f.node.isConnected).map(f=>{const W=getComputedStyle(f.node);return{layer:f,styles:Object.fromEntries(f.properties.map(F=>[F,W.getPropertyValue(F)]))}})}function S(){const f=te();m(!1),f.forEach(({layer:W,styles:F})=>Object.entries(F).forEach(([O,q])=>W.node.style.setProperty(O,q))),i=!0,s=!1,e.dataset.cameraState="held"}function Q(){if(!i)return;const f=te();if(m(!0),o.forEach(F=>F.node.getAnimations().forEach(O=>{if(O instanceof CSSTransition)try{O.finish()}catch{O.cancel()}})),i=!1,t()){I();return}s=!0,e.dataset.cameraState="returning";let W=f.length;if(!W){I();return}f.forEach(({layer:F,styles:O})=>{const q=getComputedStyle(F.node),le=Object.fromEntries(F.properties.map(he=>[he,q.getPropertyValue(he)]));F.animation=F.node.animate([O,le],{duration:380,easing:sl}),F.animation.onfinish=()=>{--W===0&&(o.clear(),s=!1,e.dataset.cameraState="idle")}})}function I(){m(!0),o.clear(),i=!1,s=!1,p=void 0,c=null,u=void 0,e.dataset.cameraTime=`${Math.round(a)}`,e.dataset.cameraState="idle"}function L(){I(),G(0)}function C(){const f=a,W=i||s;I(),r=window.innerWidth<=700,W||G(f)}return{seek:G,hold:S,release:Q,reset:I,replay:L,resize:C,destroy:I}}const Fh=["data-demo-state"],Zh={key:0,class:"chat-demo-controls"},Kh={class:"chat-demo-status","aria-live":"polite"},Ia="Check the typography on the homepage.",Wi="Check the hierarchy, type sizes, and contrast.",Ta=`Use three levels: headings, body text, and supporting details.

Keep the body readable, then refine the space between headings and paragraphs.`,Jh=Ze({__name:"ChatConversationDemo",props:{controls:{type:Boolean,default:!0},workspace:{type:Boolean,default:!1}},emits:["state-change","timeline","open-preview","preview-step"],setup(e,{expose:t,emit:n}){const o=e,i=n,s=H(),a=H(),r=H("ready"),c=H(!1),u=H(""),p=H("Claude Sonnet 4.6"),h=["Claude Sonnet 4.6","GPT-5.4","Gemini 3.1 Pro"],m=`chat-demo-${jn().replace(/:/g,"")}`,w=`${m}-sample-user`,U=`${m}-sample-assistant`,Y=`${m}-sample-followup`,V=`${m}-sample-build-user`,ee=`${m}-sample-build`,G=`${m}-sample-inspect-user`,te=`${m}-sample-inspect`,S=()=>o.workspace?lt:9e3;function Q(ie=Ta){return[{kind:"thought",id:"thought",text:Wi},{kind:"tool",id:"read-page",title:"Read page styles",status:"success",input:"src/styles.css",output:"Read the heading, body, and supporting text styles."},{kind:"message",id:"response",text:ie}]}function I(){const ie=[{id:w,role:"user",text:Ia},{id:U,role:"assistant",parts:Q()},{id:Y,role:"user",text:"Keep body text at 15px and supporting text at 12px or above."}];return o.workspace?[...ie,{id:V,role:"user",text:"Build a task panel with filters and collapsible groups."},{id:ee,role:"assistant",parts:[{kind:"thought",id:"compose",text:"Combine Sliding Tabs and Grouped Task List, keeping their interactions."},{kind:"tool",id:"build-demo",title:"Prepare interactive preview",status:"success",output:"demo.vue"},{kind:"message",id:"demo-ready",text:"The task panel is ready to explore."}],actions:[{id:"open-task-demo",label:"Open preview",kind:"preview"}]},{id:G,role:"user",text:"Show running tasks, then expand the history."},{id:te,role:"assistant",text:"Filter tasks, expand groups, or select a task to update its status."}]:ie}const L=H(I()),C=H([]),f=H(0),W=je(()=>[...C.value.slice(0,f.value),...L.value,...C.value.slice(f.value)]),F=je(()=>({ready:"",playing:"Playing",paused:"Paused",complete:"Demo complete",stopped:"Stopped"})[r.value]),O=new Set,q=new Set;let le,he,se,ae=!1,pe=!1,Z=!1,E=!1,R=0,oe=0,ce=!1,xe=0,Le=0,Te=0,Oe=0,Je;we(r,ie=>i("state-change",ie),{immediate:!0,flush:"sync"});function Fe(){var ie,ve;return!E&&!document.hidden&&!!((ie=s.value)!=null&&ie.isConnected)&&!((ve=s.value)!=null&&ve.closest('[inert], [aria-hidden="true"]'))}function nt(){d(),R++,O.forEach(ie=>clearTimeout(ie.timer)),O.clear()}function g(){return Math.min(S(),Oe+(Je===void 0?0:performance.now()-Je))}function d(){Oe=g(),Je=void 0,cancelAnimationFrame(Te),Te=0,i("timeline",Oe)}function x(ie=!1){cancelAnimationFrame(Te),ie&&(Oe=0),Je=performance.now(),i("timeline",Oe);const ve=()=>{if(E||r.value!=="playing"){Te=0;return}i("timeline",g()),Te=requestAnimationFrame(ve)};Te=requestAnimationFrame(ve)}function T(){cancelAnimationFrame(xe),cancelAnimationFrame(Le),xe=0,Le=0}function b(ie){L.value=L.value.map(ve=>{var bt;return ve.streaming?{...ve,streaming:!1,interrupted:ie,parts:ie?(bt=ve.parts)==null?void 0:bt.map(ot=>ot.kind==="tool"&&(ot.status==="running"||ot.status==="pending")?{...ot,status:void 0,summary:ot.summary??"Stopped"}:ot):ve.parts}:ve})}function D(){pe=!0,Z=!0,nt(),T(),ce=!1,b(!0),(r.value==="playing"||r.value==="paused"||r.value==="ready")&&(r.value="stopped")}function j(){pe=!0,nt(),T(),ce=!1,L.value=I(),Oe=S(),i("timeline",Oe),r.value="complete"}function M(ie){ie.dueAt=performance.now()+ie.remaining,ie.timer=setTimeout(()=>{if(O.delete(ie),!(ie.version!==R||E||r.value!=="playing")){if(!Fe()||!ae||se!=null&&se.matches){se!=null&&se.matches?j():D();return}ie.callback()}},ie.remaining)}function A(ie,ve,bt){const ot={callback:ie,remaining:ve,dueAt:0,version:bt};O.add(ot),M(ot)}function $(){if(r.value!=="playing")return;d();const ie=performance.now();O.forEach(ve=>{clearTimeout(ve.timer),ve.remaining=Math.max(0,ve.dueAt-ie),ve.timer=void 0}),r.value="paused"}function ue(){r.value!=="paused"||!Fe()||!ae||se!=null&&se.matches||(r.value="playing",x(),O.forEach(M))}function _(ie){L.value=L.value.map(ve=>ve.id===U?{...ve,parts:ie}:ve)}function v(){if(pe=!0,!Fe())return;if(nt(),T(),ce=!1,c.value=!0,Z=!1,f.value=C.value.length,se!=null&&se.matches){j();return}const ie=R;r.value="playing",x(!0),L.value=[],ke(()=>{var ht;!E&&ie===R&&((ht=a.value)==null||ht.scrollToBottom())}),A(()=>{L.value=[{id:w,role:"user",text:Ia}]},120,ie),A(()=>{L.value=[...L.value,{id:U,role:"assistant",streaming:!0,parts:[]}]},1600,ie),A(()=>{_([{kind:"thought",id:"thought",text:Wi}])},2200,ie),A(()=>{_([{kind:"thought",id:"thought",text:Wi},{kind:"tool",id:"read-page",title:"Read page styles",status:"running",input:"src/styles.css"}])},3400,ie),A(()=>{_(Q(""))},4800,ie);const ve=Array.from(Ta),bt=4,ot=Math.ceil(ve.length/bt);for(let ht=1;ht<=ot;ht++)A(()=>{_(Q(ve.slice(0,ht*bt).join("")))},5600+ht*(700/ot),ie);if(A(()=>{b(!1)},6600,ie),o.workspace){const ht=$t=>{L.value=[...L.value,$t]};A(()=>{ht(I()[2])},7800,ie),A(()=>{ht(I()[3])},8400,ie),A(()=>{ht({id:ee,role:"assistant",streaming:!0,parts:[{kind:"thought",id:"compose",text:"Combine Sliding Tabs and Grouped Task List, keeping their interactions."},{kind:"tool",id:"build-demo",title:"Prepare interactive preview",status:"running"}]})},9e3,ie),A(()=>{L.value=L.value.map($t=>$t.id===ee?I()[4]:$t)},11e3,ie),A(()=>{i("preview-step","all"),i("open-preview")},11900,ie),A(()=>{ht(I()[5])},13600,ie),A(()=>{ht({id:te,role:"assistant",streaming:!0,text:"Start with the running tasks."})},14200,ie),A(()=>{i("preview-step","running")},14800,ie),A(()=>{i("preview-step","all")},16e3,ie),A(()=>{i("preview-step","collapse-history")},16900,ie),A(()=>{i("preview-step","expand-history")},17900,ie),A(()=>{i("preview-step","waiting")},19e3,ie),A(()=>{L.value=L.value.map($t=>$t.id===te?I()[6]:$t)},19600,ie)}A(()=>{o.workspace||(L.value=[...L.value,I()[2]]),d(),Oe=S(),i("timeline",Oe),r.value="complete"},S(),ie)}function J(){Z=!0,pe=!0,(r.value==="playing"||r.value==="paused"||ce)&&D()}function re(){Z=!0,pe=!0,!(r.value!=="playing"&&r.value!=="paused")&&(nt(),ce=!0,r.value="stopped")}function be(){!ce||E||(ce=!1,T(),b(!0))}function ze(){!ce||xe||Le||(xe=requestAnimationFrame(()=>{xe=0,Le=requestAnimationFrame(()=>{Le=0,be()})}))}function Se(ie){return ie.target instanceof Element?ie.target:null}function We(ie){const ve=Se(ie);ve&&(ve.closest(".conversation-bottom")&&!ve.closest(".stop-action")?J():re())}function tt(){ce&&ke(be)}function He(ie){const ve=Se(ie);ve!=null&&ve.closest(".stop-action")||(ve!=null&&ve.closest(".conversation-bottom")?J():["ArrowUp","ArrowDown","PageUp","PageDown","Home","End"," ","Enter"].includes(ie.key)&&(re(),[" ","Enter"].includes(ie.key)||ze()))}function qe(ie){const ve=Se(ie);ve!=null&&ve.closest(".conversation-bottom")&&!ve.closest(".stop-action")&&J()}function Ct(){re(),ze()}function st(ie){J();const ve=ie.files.map(bt=>{const ot=URL.createObjectURL(bt);return q.add(ot),{id:`${m}-attachment-${++oe}`,name:bt.name,mimeType:bt.type,url:ot}});C.value=[...C.value,{id:`${m}-user-${++oe}`,role:"user",text:ie.text,attachments:ve}]}function ft(ie){J(),u.value=ie}function en(ie){J(),p.value=ie}function Yn(ie){ie.actionId==="open-task-demo"&&(J(),i("open-preview"))}function Do(){document.hidden&&r.value==="playing"&&D()}function wo(){se!=null&&se.matches&&(r.value==="playing"||r.value==="paused"||r.value==="ready"&&!Z)&&j()}return t({play:v,stop:D,pause:$,resume:ue}),wt(()=>{se=matchMedia("(prefers-reduced-motion: reduce)"),se.addEventListener("change",wo),document.addEventListener("visibilitychange",Do),document.addEventListener("pointerup",ze),document.addEventListener("pointercancel",ze),document.addEventListener("keyup",ze),se.matches&&j(),s.value&&"IntersectionObserver"in window?(le=new IntersectionObserver(ie=>{for(const ve of ie)ae=ve.isIntersecting&&ve.intersectionRatio>=.35,!ae&&r.value==="playing"?D():ae&&!pe&&!Z&&!(se!=null&&se.matches)&&Fe()&&v()},{threshold:[0,.35]}),le.observe(s.value.closest(".home-chat-viewport")??s.value)):ae=!0,he=new MutationObserver(()=>{r.value==="playing"&&!Fe()&&D()});for(let ie=s.value??null;ie;ie=ie.parentElement)he.observe(ie,{attributes:!0,attributeFilter:["inert","aria-hidden","style"]})}),Et(()=>{E=!0,nt(),T(),le==null||le.disconnect(),he==null||he.disconnect(),se==null||se.removeEventListener("change",wo),document.removeEventListener("visibilitychange",Do),document.removeEventListener("pointerup",ze),document.removeEventListener("pointercancel",ze),document.removeEventListener("keyup",ze),q.forEach(ie=>URL.revokeObjectURL(ie)),q.clear()}),(ie,ve)=>(y(),z("div",{ref_key:"root",ref:s,class:"chat-conversation-demo","data-demo-state":r.value},[l("div",{class:"chat-demo-core",onPointerdownCapture:We,onFocusinCapture:qe,onKeydownCapture:He,onClick:tt,onInputCapture:J,onChangeCapture:J,onPasteCapture:J,onCompositionstartCapture:J,onWheelPassive:Ct,onTouchmovePassive:Ct},[B(el,{ref_key:"conversation",ref:a,messages:W.value,"model-value":u.value,model:p.value,models:h,"onUpdate:modelValue":ft,"onUpdate:model":en,onSend:st,onStop:D,onMessageAction:Yn},null,8,["messages","model-value","model"])],32),e.controls?(y(),z("div",Zh,[l("button",{type:"button",class:"chat-demo-play",onClick:v},[B(Ue,{name:c.value?"refresh":"play",size:14},null,8,["name"]),l("span",null,X(c.value?"Replay":"Play demo"),1)]),l("span",Kh,X(F.value),1)])):ge("",!0)],8,Fh))}}),al=jt(Jh,[["__scopeId","data-v-efed5366"]]),qh=["inert"],Xh={class:"preview-titlebar"},em={class:"preview-filename"},tm={class:"preview-filter"},nm=["disabled"],om={key:1,class:"preview-selection"},im={class:"selection-name"},sm={class:"selection-status"},am={key:2,class:"preview-empty"},rm=Ze({__name:"WorkspaceDemoPreview",props:{active:{type:Boolean,default:!0}},emits:["close"],setup(e,{expose:t,emit:n}){const o=n,i=H([{id:"running",label:"In progress",icon:"running",items:[{id:"layout",label:"Review homepage layout",status:"running"},{id:"type",label:"Refine typography",status:"waiting"}]},{id:"auto",label:"Automations",icon:"auto",items:[{id:"mobile",label:"Check mobile spacing",status:"running"},{id:"interaction",label:"Complete interaction states",status:"idle"}]},{id:"history",label:"History",icon:"history",items:[{id:"navigation",label:"Organize navigation",status:"completed"},{id:"reference",label:"Collect references",status:"completed"}]}]),s=H("all"),a=H("layout"),r=H(),c=H();let u;const p=je(()=>i.value.flatMap(I=>I.items)),h=je(()=>[{value:"all",label:"All",count:p.value.length},{value:"running",label:"Running",count:p.value.filter(I=>I.status==="running").length},{value:"waiting",label:"Needs input",count:p.value.filter(I=>I.status==="waiting").length},{value:"completed",label:"Completed",count:p.value.filter(I=>I.status==="completed").length}]),m=je(()=>i.value.map(I=>({...I,items:I.items.filter(L=>s.value==="all"||L.status===s.value)}))),w=je(()=>p.value.find(I=>I.id===a.value));we(m,I=>{var C;const L=I.flatMap(f=>f.items);L.some(f=>f.id===a.value)||(a.value=((C=L[0])==null?void 0:C.id)??"")});const U=H(!1),Y=H(""),V=H();let ee=0;async function G(){var I;U.value=!0,await ke(),(I=V.value)==null||I.focus()}function te(){const I=Y.value.trim();if(!I)return;const L={id:`custom-${++ee}`,label:I,status:"idle"};i.value.find(C=>C.id==="auto").items.unshift(L),s.value="all",a.value=L.id,Y.value="",U.value=!1}function S(I){var W;if(I==="all"||I==="running"||I==="waiting"){s.value=I;return}const L=(W=r.value)==null?void 0:W.$el,C=L==null?void 0:L.querySelector('[data-group-id="history"] > .task-group-heading'),f=I==="expand-history";C&&!C.disabled&&C.getAttribute("aria-expanded")!==String(f)&&C.click()}function Q(I){var O;if(I<16e3){u=void 0;return}if(I<16200||I>16800)return;const L=c.value,C=(O=r.value)==null?void 0:O.$el,f=C==null?void 0:C.querySelector('[data-group-id="history"] > .task-group-heading');if(!(L!=null&&L.clientHeight)||!f)return;if(!u){const q=Math.max(0,L.scrollHeight-L.clientHeight),le=L.scrollTop+f.getBoundingClientRect().top-L.getBoundingClientRect().top-80;u={start:L.scrollTop,target:Math.max(0,Math.min(q,le))}}const W=Math.max(0,Math.min(1,(I-16200)/600)),F=W*W*(3-2*W);L.scrollTop=u.start+(u.target-u.start)*F}return t({showcaseStep:S,showcaseTick:Q}),(I,L)=>Xe((y(),z("section",{class:"workspace-demo-preview",inert:!e.active||void 0,"aria-label":"Task panel preview"},[l("header",Xh,[l("button",{class:"preview-return",type:"button",onClick:L[0]||(L[0]=C=>o("close"))},[B(K(Zr),{size:15,"aria-hidden":"true"}),L[8]||(L[8]=De("Back to chat",-1))]),l("span",em,[B(K(md),{size:15,"aria-hidden":"true"}),L[9]||(L[9]=De("Tasks",-1))]),L[10]||(L[10]=l("span",{class:"preview-label"},"Preview",-1)),l("button",{class:"preview-close",type:"button","aria-label":"Close preview",title:"Close preview",onClick:L[1]||(L[1]=C=>o("close"))},[B(K(Un),{size:16,"aria-hidden":"true"})])]),L[13]||(L[13]=l("div",{class:"preview-addressbar"},[l("div",{class:"preview-address","aria-label":"Preview page"},[l("span",null,"Demo"),l("span",{class:"address-divider","aria-hidden":"true"},"/"),l("span",null,"Tasks")])],-1)),l("div",{ref_key:"previewContent",ref:c,class:"preview-content"},[l("div",tm,[B(Ts,{modelValue:s.value,"onUpdate:modelValue":L[2]||(L[2]=C=>s.value=C),items:h.value,label:"Filter preview tasks"},null,8,["modelValue","items"])]),U.value?(y(),z("form",{key:0,class:"preview-create",onSubmit:At(te,["prevent"]),onKeydown:L[5]||(L[5]=lo(At(C=>U.value=!1,["stop"]),["esc"]))},[Xe(l("input",{ref_key:"nameInput",ref:V,"onUpdate:modelValue":L[3]||(L[3]=C=>Y.value=C),"aria-label":"Task name",placeholder:"Task name",maxlength:"80"},null,512),[[xi,Y.value]]),l("button",{type:"submit",disabled:!Y.value.trim()},"Add",8,nm),l("button",{type:"button",class:"cancel-create","aria-label":"Cancel new task",onClick:L[4]||(L[4]=C=>U.value=!1)},[B(K(Un),{size:15,"aria-hidden":"true"})])],32)):ge("",!0),B(tl,{ref_key:"taskList",ref:r,modelValue:a.value,"onUpdate:modelValue":L[6]||(L[6]=C=>a.value=C),groups:m.value,onCreate:G},null,8,["modelValue","groups"]),w.value?(y(),z("div",om,[l("span",im,X(w.value.label),1),l("label",sm,[L[12]||(L[12]=l("span",null,"Status",-1)),Xe(l("select",{"onUpdate:modelValue":L[7]||(L[7]=C=>w.value.status=C),"aria-label":"Task status"},[...L[11]||(L[11]=[l("option",{value:"idle"},"Ready",-1),l("option",{value:"running"},"Running",-1),l("option",{value:"waiting"},"Needs input",-1),l("option",{value:"completed"},"Completed",-1)])],512),[[qu,w.value.status]])])])):(y(),z("p",am,"No tasks"))],512)],8,qh)),[[Ut,e.active]])}}),lm=jt(rm,[["__scopeId","data-v-f8822a91"]]);function cm(e,t,n,o){const i=Math.max(0,e),s=Math.max(0,t),a=Math.max(n,i-n),r=Math.max(o,s-o);return Math.hypot(a,r)*2}function rl(e=window.matchMedia){return e("(hover: hover) and (pointer: fine)").matches}const um=350,za="hover-ink",ll="hover-ink-host",bi="is-hover-ink",ji="is-leave-ink",Qn="is-ink-suppressed",Lt=new WeakMap;function dm(e){let t=e.querySelector(`:scope > .${za}`);return t||(t=document.createElement("span"),t.className=za,t.setAttribute("aria-hidden","true"),e.insertBefore(t,e.firstChild)),t}function Wo(e,t){return!!((t==null?void 0:t.value)===!1||t!=null&&t.value&&typeof t.value=="object"&&"enabled"in t.value&&t.value.enabled===!1||e.disabled||e.hasAttribute("disabled")||e.getAttribute("aria-busy")==="true"||e.getAttribute("aria-disabled")==="true")}function Lo(e){const t=Lt.get(e);(t==null?void 0:t.collapseTimer)!=null&&(clearTimeout(t.collapseTimer),t.collapseTimer=void 0)}function yo(e){e.classList.add(ll),dm(e);const t=Lt.get(e);t&&(e.classList.toggle(bi,t.phase==="hover"),e.classList.toggle(ji,t.phase==="leave"))}function cl(e,t,n){Lo(e);const o=e.getBoundingClientRect(),i=t-o.left,s=n-o.top,a=cm(o.width,o.height,i,s);e.style.setProperty("--ink-x",`${i}px`),e.style.setProperty("--ink-y",`${s}px`),e.style.setProperty("--ink-d",`${a}px`)}function ul(e){Lo(e),e.classList.remove(Qn);const t=Lt.get(e);t&&(t.phase="hover"),yo(e)}function dl(e){Lo(e);const t=Lt.get(e);t&&(t.phase="idle"),e.classList.add(Qn),e.classList.remove(bi,ji),e.style.setProperty("--ink-d","0px")}function pl(e,t){const n=Lt.get(e);if(n){if(n.binding=t,Wo(e,t)){n.phase!=="idle"?dl(e):e.classList.add(Qn),yo(e);return}if(e.classList.remove(Qn),n.phase!=="hover"&&n.pointer&&e.matches(":hover")&&rl()){cl(e,n.pointer.x,n.pointer.y),ul(e);return}yo(e)}}function Bi(e){const t=Lt.get(e);t&&(t.phase="leave"),yo(e),Lo(e);const n=()=>{(t==null?void 0:t.phase)!=="hover"&&(e.style.setProperty("--ink-d","0px"),t&&(t.collapseTimer=void 0))};t?t.collapseTimer=setTimeout(n,um):n()}function Aa(e,t){if(Lt.get(e)){pl(e,t);return}const o=r=>{if(!rl()||r.pointerType==="touch")return;const c=Lt.get(e);c&&(c.pointer={x:r.clientX,y:r.clientY},!Wo(e,c.binding)&&(cl(e,r.clientX,r.clientY),ul(e)))},i=()=>{const r=Lt.get(e);if(r&&(r.pointer=void 0),!(!r||r.phase==="idle")){if(Wo(e,r.binding)){dl(e);return}Bi(e)}},s=()=>{Bi(e)},a=()=>{document.visibilityState==="hidden"&&Bi(e)};e.addEventListener("pointerenter",o),e.addEventListener("pointerleave",i),e.addEventListener("pointercancel",i),window.addEventListener("blur",s),document.addEventListener("visibilitychange",a),Lt.set(e,{binding:t,phase:"idle",cleanup:()=>{e.removeEventListener("pointerenter",o),e.removeEventListener("pointerleave",i),e.removeEventListener("pointercancel",i),window.removeEventListener("blur",s),document.removeEventListener("visibilitychange",a),Lo(e),e.classList.remove(bi,Qn),e.classList.add(ji),e.style.setProperty("--ink-d","0px"),Lt.delete(e)}}),Wo(e,t)&&e.classList.add(Qn),yo(e)}const ka={mounted(e,t){Aa(e,t)},updated(e,t){const n=e;Lt.get(n)?pl(n,t):Aa(n,t)},unmounted(e){var n;const t=e;(n=Lt.get(t))==null||n.cleanup(),t.classList.remove(ll,bi,ji,Qn)}},pm={class:"home-page"},Mm={class:"home-hero"},gm={class:"home-hero-actions"},fm={href:"https://github.com/cocofhu/harness-ui",target:"_blank",rel:"noopener noreferrer",class:"home-button home-primary"},hm={href:"#/components",class:"home-button home-secondary"},mm={class:"hero-smallprint"},ym={href:"#/components"},vm={href:"#/icons"},Nm={href:"https://github.com/cocofhu/harness-ui",target:"_blank",rel:"noopener noreferrer",class:"hero-github"},xm={class:"home-chat-section","aria-label":"Chat conversation preview"},bm={class:"home-demo-intro"},jm={href:"#/components",class:"home-text-link"},Lm=["data-playback","data-shot"],Dm={class:"home-chat-heading"},wm={href:"#/components/chat-conversation"},Im={class:"home-chat-viewport"},Tm=["inert","aria-hidden","onKeydown"],zm={class:"home-chat-window"},Am={class:"home-chat-controls"},km=["aria-label","title"],Sm={viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor","aria-hidden":"true"},Em={key:0,d:"M7 5h3v14H7zm7 0h3v14h-3z"},Cm={key:1,d:"m8 5 11 7-11 7Z"},Om={key:2,d:"M18.7 7A8 8 0 1 0 20 15h-2.1a6 6 0 1 1-.6-6H14v2h7V4h-2v3Z"},Um={class:"home-icon-section"},Qm={class:"section-editorial"},Ym={href:"#/icons",class:"home-text-link"},Pm={class:"home-icon-board"},_m=["aria-label","onClick"],$m={class:"home-craft-section"},Rm={class:"craft-code-heading"},Wm=["aria-selected","tabindex"],Bm=["aria-selected","tabindex"],Hm=["aria-label"],Vm={class:"craft-panel-stage"},Gm=["inert","aria-hidden"],Fm=["inert","aria-hidden"],Zm={class:"section-editorial"},Km={href:"https://github.com/cocofhu/harness-ui",target:"_blank",rel:"noopener noreferrer",class:"home-text-link"},Jm=`<script setup lang="ts">
import SlidingTabs from './ui/SlidingTabs.vue'
<\/script>

<template>
  <SlidingTabs />
</template>`,qm=Ze({__name:"HomePage",emits:["notify"],setup(e,{emit:t}){const n=t,o=H(),i=H(),s=H(!1),a=H(!1),r=H("ready"),c=H(),u=H(),p=H(3),h=H(""),m=H({}),w=H("preview"),U=H(),Y=H(!1),V=H(0),ee=H(!1),G=["folder","copy","robot","workflow","settings","search","terminal","sun","refresh"],te=_h.filter(j=>j.animated).length;let S=!1,Q,I,L,C,f,W=lt,F=!1,O=0,q=0,le=0,he;const se=new Set;function ae(){var j;(j=c.value)==null||j.getAnimations({subtree:!0}).forEach(M=>{M.playState==="running"&&(M.pause(),se.add(M))})}function pe(j=!1,M=!0){var A;!j&&M&&((A=c.value)==null||A.getAnimations({subtree:!0}).forEach($=>{$.playState==="running"&&se.add($)})),se.forEach($=>{if($.playState==="paused"||!j&&$.playState==="running")if(j)$.play();else try{$.finish()}catch{$.cancel()}}),se.clear()}function Z(j){const M=r.value;r.value=j,j==="playing"&&M!=="paused"?(pe(),s.value=!1,F=!1,f==null||f.replay()):j==="playing"?pe(!0):j==="paused"?ae():j==="stopped"?F?(ae(),f==null||f.hold()):(pe(),f==null||f.reset()):j==="complete"&&(f==null||f.seek(lt),window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(a.value=!0,s.value=!0))}function E(){var j;cancelAnimationFrame(le),he=((j=c.value)==null?void 0:j.querySelector('[data-message-action="open-task-demo"]'))??(document.activeElement instanceof HTMLElement?document.activeElement:void 0),a.value=!0,s.value=!0}async function R(){var A;cancelAnimationFrame(le),(A=o.value)==null||A.stop(),s.value=!1,Te(),await ke();let j=0;const M=()=>{if(le=0,S||s.value||document.hidden||!(he!=null&&he.isConnected))return;if(++j<3||getComputedStyle(he).visibility!=="visible"){j<10&&(le=requestAnimationFrame(M));return}const $=document.activeElement;$ instanceof HTMLElement&&$!==document.body&&!$.closest(".home-workspace-preview")||he.focus({preventScroll:!0})};le=requestAnimationFrame(M)}function oe(j){a.value=!0,ke(()=>{var M;return(M=i.value)==null?void 0:M.showcaseStep(j)})}function ce(j){var ue,_;if(S)return;W=j,f==null||f.seek(j),r.value==="playing"&&!F&&((ue=i.value)==null||ue.showcaseTick(j));const M=[0,1900,5500,11900,19600,lt],A=j<1900?0:j<5500?1:j<11900?2:j<19600?3:4;p.value=A;const $=Math.min(1,Math.max(0,(j-M[A])/(M[A+1]-M[A])));(_=u.value)==null||_.querySelectorAll("i").forEach((v,J)=>{v.style.transform=`scaleX(${J<A?1:J===A?$:0})`})}function xe(){cancelAnimationFrame(O),cancelAnimationFrame(q)}function Le(j){var A;const M=j.target instanceof Element?j.target:null;if(M){if(M.closest(".home-workspace-preview")){if(!j.isTrusted)return;xe(),F=!0,f==null||f.hold(),(A=o.value)==null||A.stop(),j.type==="focusin"&&Te();return}M.closest(".chat-demo-core")&&(M.closest(".stop-action")&&(j.type==="focusin"||j instanceof KeyboardEvent&&![" ","Enter"].includes(j.key))||j instanceof KeyboardEvent&&!M.closest(".conversation-bottom")&&!["ArrowUp","ArrowDown","PageUp","PageDown","Home","End"," ","Enter"].includes(j.key)||j.type==="focusin"&&!M.closest(".conversation-bottom")||(xe(),F=!0,f==null||f.hold(),(j.type==="focusin"||j instanceof KeyboardEvent&&j.key==="Tab")&&Te()))}}function Te(){F&&(xe(),O=requestAnimationFrame(()=>{q=requestAnimationFrame(()=>{S||!F||r.value==="playing"||r.value==="paused"||(F=!1,pe(!1,!1),f==null||f.release())})}))}function Oe(){f==null||f.resize()}function Je(){var j,M,A;r.value==="playing"?(j=o.value)==null||j.pause():r.value==="paused"?(M=o.value)==null||M.resume():(A=o.value)==null||A.play()}function Fe(j){clearTimeout(L),m.value[j]=(m.value[j]||0)+1,h.value=j,L=setTimeout(()=>{h.value=""},1200)}function nt(){clearTimeout(L),h.value=""}function g(){document.hidden&&nt()}function d(){C!=null&&C.matches&&(nt(),f==null||f.reset())}async function x(){try{if(await il(Jm),S)return;Y.value=!0,V.value++,clearTimeout(Q),Q=setTimeout(()=>{Y.value=!1},2200),n("notify","Usage example copied")}catch{S||n("notify","Select the code to copy it manually")}}function T(){ee.value=!0,clearTimeout(I),I=setTimeout(()=>{ee.value=!1},1800)}function b(j){w.value=j}async function D(j){var M,A;["ArrowLeft","ArrowRight","Home","End"].includes(j.key)&&(j.preventDefault(),b(j.key==="Home"?"preview":j.key==="End"||w.value==="preview"?"source":"preview"),await ke(),(A=(M=U.value)==null?void 0:M.querySelector('[aria-selected="true"]'))==null||A.focus())}return wt(()=>{C=window.matchMedia("(prefers-reduced-motion: reduce)"),C.addEventListener("change",d),document.addEventListener("visibilitychange",g),window.addEventListener("resize",Oe),c.value&&(f=Gh(c.value,()=>!!(C!=null&&C.matches)),ce(W))}),Et(()=>{S=!0,clearTimeout(Q),clearTimeout(I),nt(),xe(),cancelAnimationFrame(le),pe(),f==null||f.destroy(),C==null||C.removeEventListener("change",d),document.removeEventListener("visibilitychange",g),window.removeEventListener("resize",Oe)}),(j,M)=>(y(),z("div",pm,[l("section",Mm,[M[12]||(M[12]=l("h1",null,[l("span",{class:"hero-title-reveal"},[l("span",null,"Build better"),l("span",null,"agent interfaces.")])],-1)),M[13]||(M[13]=l("p",{class:"hero-description"},"Harness UI is a collection of Vue components and animated icons. Explore real interactions, then make the source your own.",-1)),l("div",gm,[Xe((y(),z("a",fm,[M[3]||(M[3]=l("span",null,"Get started",-1)),B(Ue,{name:"arrow-right",size:16})])),[[K(ka)]]),Xe((y(),z("a",hm,[M[4]||(M[4]=l("span",null,"Browse components",-1)),B(Ue,{name:"arrow-right",size:16})])),[[K(ka),{enabled:!1}]])]),l("div",mm,[M[6]||(M[6]=l("svg",{viewBox:"0 0 24 24",width:"15",height:"15","aria-hidden":"true"},[l("path",{d:"M2 4h4l6 10 6-10h4L12 22Z",fill:"#42b883"}),l("path",{d:"M6 4h4l2 3 2-3h4L12 14Z",fill:"#35495e"})],-1)),M[7]||(M[7]=De(" Vue 3 ",-1)),M[8]||(M[8]=l("span",null,"·",-1)),M[9]||(M[9]=De()),l("a",ym,X(K(yt).length)+" components",1),M[10]||(M[10]=l("span",null,"·",-1)),l("a",vm,X(K(te))+" animated icons",1),M[11]||(M[11]=l("span",null,"·",-1)),l("a",Nm,[B(K(fd),{size:14,"aria-hidden":"true"}),M[5]||(M[5]=De("GitHub",-1))])])]),l("section",xm,[l("div",bm,[M[14]||(M[14]=l("div",null,[l("h2",null,"See it in action."),l("p",null,"Explore chat, task navigation, and an interactive preview in one workspace.")],-1)),l("a",jm,[De("Browse all "+X(K(yt).length)+" components ",1),B(Ue,{name:"arrow-right",size:16})])]),l("div",{class:fe(["home-chat-canvas",{"is-paused":r.value==="paused","has-preview":s.value}]),"data-playback":r.value,"data-shot":["question","process","answer","preview","complete"][p.value]},[l("div",Dm,[l("a",wm,[M[15]||(M[15]=De("View component ",-1)),B(Ue,{name:"arrow-right",size:17})])]),l("div",Im,[l("div",{ref_key:"cameraElement",ref:c,class:"home-chat-camera",onPointerdownCapture:Le,onPointerup:Te,onPointercancel:Te,onClick:Te,onKeydownCapture:Le,onKeyup:Te,onFocusinCapture:Le,onWheelCapturePassive:Le,onWheelPassive:Te,onTouchmoveCapturePassive:Le,onTouchmovePassive:Te},[l("aside",{class:"home-workspace-preview",inert:!s.value||void 0,"aria-hidden":!s.value,onKeydown:lo(At(R,["stop","prevent"]),["esc"])},[B(lm,{ref_key:"workspaceDemo",ref:i,active:a.value,onClose:R},null,8,["active"])],40,Tm),l("div",zm,[M[16]||(M[16]=l("div",{class:"home-chat-window-bar"},[l("span",{class:"window-dots","aria-hidden":"true"},[l("i"),l("i"),l("i")]),l("span",null,"Chat conversation"),l("span",{class:"window-demo-label"},"Demo")],-1)),B(al,{ref_key:"chatDemo",ref:o,workspace:"",controls:!1,onStateChange:Z,onTimeline:ce,onOpenPreview:E,onPreviewStep:oe},null,512)])],544)]),l("div",Am,[l("button",{type:"button",class:"home-chat-play","aria-label":"Play chat demo",onClick:M[0]||(M[0]=A=>{var $;return($=o.value)==null?void 0:$.play()})},[B(Ue,{name:"refresh",size:14}),M[17]||(M[17]=De("Replay",-1))]),l("div",{ref_key:"shotProgress",ref:u,class:"home-chat-shots","aria-hidden":"true"},[(y(),z(me,null,Pe(5,A=>l("span",{key:A},[...M[18]||(M[18]=[l("i",null,null,-1)])])),64))],512),l("button",{type:"button",class:"home-chat-pause","aria-label":r.value==="playing"?"Pause chat demo":r.value==="paused"?"Resume chat demo":"Replay chat demo",title:r.value==="playing"?"Pause":r.value==="paused"?"Resume":"Replay",onClick:Je},[(y(),z("svg",Sm,[r.value==="playing"?(y(),z("path",Em)):r.value==="paused"||r.value==="ready"?(y(),z("path",Cm)):(y(),z("path",Om))]))],8,km)])],10,Lm)]),Xe((y(),z("section",Um,[l("div",Qm,[M[20]||(M[20]=l("h2",null,"Animated icons.",-1)),l("p",null,X(K(te))+" animated icons for everyday interface details.",1),l("a",Ym,[M[19]||(M[19]=De("Explore icons ",-1)),B(Ue,{name:"arrow-right",size:16})])]),l("div",Pm,[(y(),z(me,null,Pe(G,A=>l("button",{key:A,type:"button",class:fe(["home-icon-cell",{"is-playing":h.value===A}]),"aria-label":`Play ${K(wa)(A)} icon`,onClick:$=>Fe(A)},[B(Ue,{name:A,size:42,"motion-key":m.value[A]||0},null,8,["name","motion-key"]),l("span",null,X(K(wa)(A)),1)],10,_m)),64))])])),[[K(ls)]]),Xe((y(),z("section",$m,[l("div",{class:fe(["craft-visual",{"is-complete":ee.value}])},[l("div",Rm,[l("div",{ref_key:"craftTabs",ref:U,class:"craft-mode-switch",role:"tablist","aria-label":"Component preview and source",onKeydown:D},[l("span",{class:fe(["craft-tab-indicator",{"at-source":w.value==="source"}]),"aria-hidden":"true"},null,2),l("button",{id:"home-preview-tab",type:"button",role:"tab","aria-selected":w.value==="preview",tabindex:w.value==="preview"?0:-1,"aria-controls":"home-preview-panel",onClick:M[1]||(M[1]=A=>b("preview"))},"Preview",8,Wm),l("button",{id:"home-source-tab",type:"button",role:"tab","aria-selected":w.value==="source",tabindex:w.value==="source"?0:-1,"aria-controls":"home-source-panel",onClick:M[2]||(M[2]=A=>b("source"))},"Source",8,Bm)],544),l("button",{type:"button",class:"craft-copy","aria-label":Y.value?"Example copied":"Copy usage example",onClick:x},[B(Ue,{name:Y.value?"check-draw":"copy",size:17,"motion-key":V.value},null,8,["name","motion-key"])],8,Hm)]),l("div",Vm,[l("div",{id:"home-preview-panel",class:fe(["craft-live-preview",{"is-current":w.value==="preview"}]),inert:w.value!=="preview","aria-hidden":w.value!=="preview",role:"tabpanel","aria-labelledby":"home-preview-tab"},[B(Ts,{onChange:T})],10,Gm),l("div",{id:"home-source-panel",class:fe(["craft-source-panel",{"is-current":w.value==="source"}]),inert:w.value!=="source","aria-hidden":w.value!=="source",role:"tabpanel","aria-labelledby":"home-source-tab"},[...M[21]||(M[21]=[Yr(`<pre data-v-c42b45e4><code data-v-c42b45e4><span class="syntax-dim" data-v-c42b45e4>&lt;script setup lang=</span><span class="syntax-string" data-v-c42b45e4>&quot;ts&quot;</span><span class="syntax-dim" data-v-c42b45e4>&gt;</span>
<span class="syntax-purple" data-v-c42b45e4>import</span> SlidingTabs <span class="syntax-purple" data-v-c42b45e4>from</span> <span class="syntax-string" data-v-c42b45e4>&#39;./ui/SlidingTabs.vue&#39;</span>
<span class="syntax-dim" data-v-c42b45e4>&lt;/script&gt;</span>

<span class="syntax-dim" data-v-c42b45e4>&lt;template&gt;</span>
  <span class="syntax-purple" data-v-c42b45e4>&lt;SlidingTabs /&gt;</span>
<span class="syntax-dim" data-v-c42b45e4>&lt;/template&gt;</span></code></pre>`,1)])],10,Fm)])],2),l("div",Zm,[M[23]||(M[23]=l("h2",null,"Your app. Your code.",-1)),M[24]||(M[24]=l("p",null,"Copy the Vue source, then adapt the details to your product.",-1)),l("a",Km,[M[22]||(M[22]=De("Quick start ",-1)),B(Ue,{name:"arrow-right",size:16})])])])),[[K(ls)]])]))}}),Xm=jt(qm,[["__scopeId","data-v-c42b45e4"]]),ey={key:0,class:"line-number","aria-hidden":"true"},ty={class:"line-content"},Hi=Ze({__name:"CodeViewer",props:{code:{},compact:{type:Boolean}},setup(e){const t=e,n=je(()=>t.code.trim().split(`
`).map(i=>i.split(/(\"[^\"]*\"|'[^']*'|`[^`]*`|\/\/.*$|\b(?:import|from|const|let|function|return|export|default|interface|type|if|await|async|true|false)\b)/g).filter(Boolean)));function o(i){return/^["'`]/.test(i)?"code-string":i.startsWith("//")?"code-comment":/^(import|from|const|let|function|return|export|default|interface|type|if|await|async|true|false)$/.test(i)?"code-keyword":""}return(i,s)=>(y(),z("pre",{class:fe(["source-code",{compact:e.compact}]),"aria-label":"Source code"},[l("code",null,[(y(!0),z(me,null,Pe(n.value,(a,r)=>(y(),z("span",{key:r,class:"code-line"},[e.compact?ge("",!0):(y(),z("span",ey,X(r+1),1)),l("span",ty,[(y(!0),z(me,null,Pe(a,(c,u)=>(y(),z("span",{key:u,class:fe(o(c))},X(c),3))),128)),De(X(a.length?"":" "),1)])]))),128))])],2))}}),ny={key:0,class:"status-examples","aria-label":"Run status examples"},oy={key:2,class:"clarification-preview"},iy={key:3,class:"selector-preview"},sy={class:"selector-example-field"},ay={class:"selector-example-field"},ry=Ze({__name:"ComponentPreview",props:{entry:{}},emits:["action"],setup(e){const t=e,n=["running","queued","waiting_human","completed","failed","cancelled"],o=H("in-progress"),i=H("medium"),s=[{value:"backlog",label:"Backlog",hint:"Not started"},{value:"in-progress",label:"In progress",hint:"Active"},{value:"in-review",label:"In review",hint:"Needs review"},{value:"done",label:"Done",hint:"Completed"}],a=[{value:"low",label:"Low priority"},{value:"medium",label:"Medium priority"},{value:"high",label:"High priority"}],r=H(),c=H(!1);function u(){var p;(p=r.value)==null||p.reset(),c.value=!1}return we(()=>t.entry.slug,()=>{c.value=!1}),(p,h)=>e.entry.slug==="status-badge"?(y(),z("div",ny,[(y(),z(me,null,Pe(n,m=>B(rn(e.entry.component),{key:m,status:m},null,8,["status"])),64))])):e.entry.slug==="chat-conversation"?(y(),Ne(al,{key:1})):e.entry.slug==="clarification-card"?(y(),z("div",oy,[(y(),Ne(rn(e.entry.component),{ref_key:"clarification",ref:r,"initially-submitted":!1,"read-only":!1,onSubmit:h[0]||(h[0]=m=>c.value=!0),onReset:h[1]||(h[1]=m=>c.value=!1)},null,544)),c.value?(y(),z("button",{key:0,type:"button",class:"clarification-retry",onClick:u},"Try again")):ge("",!0)])):e.entry.slug==="selector"?(y(),z("div",iy,[l("div",sy,[h[5]||(h[5]=l("span",{class:"selector-example-label"},"Status",-1)),(y(),Ne(rn(e.entry.component),{modelValue:o.value,"onUpdate:modelValue":h[2]||(h[2]=m=>o.value=m),options:s,searchable:"","aria-label":"Task status","search-placeholder":"Search statuses…"},null,8,["modelValue"]))]),l("div",ay,[h[6]||(h[6]=l("span",{class:"selector-example-label"},"Priority",-1)),(y(),Ne(rn(e.entry.component),{modelValue:i.value,"onUpdate:modelValue":h[3]||(h[3]=m=>i.value=m),options:a,variant:"ghost",size:"sm","aria-label":"Task priority"},null,8,["modelValue"]))])])):(y(),Ne(rn(e.entry.component),{key:4,onCreate:h[4]||(h[4]=m=>p.$emit("action"))},null,32))}}),Sa=jt(ry,[["__scopeId","data-v-8c2ac0c1"]]),ly={class:"site-header"},cy={class:"header-inner"},uy={class:"header-brand"},dy=["aria-label","aria-expanded"],py={href:"#/",class:"brand","aria-label":"Harness UI home"},My={class:"brand-mark"},gy={class:"top-nav","aria-label":"Main navigation"},fy=["aria-current"],hy={class:"header-actions"},my={class:"github-star-label"},yy=["aria-label"],vy={class:"theme-icon-stack","aria-hidden":"true"},Ny=["inert"],xy=["inert"],by={class:"nav-count"},jy=["aria-current","onClick"],Ly={class:"nav-count"},Dy={key:0,class:"quick-components"},wy=["href"],Iy=["inert"],Ty={key:2,id:"components",class:"components-section"},zy={class:"collection-toolbar"},Ay=["aria-pressed","onClick"],ky={class:"toolbar-actions"},Sy={class:"collection-search"},Ey={class:"sort-wrap"},Cy=["aria-expanded"],Oy={class:"sort-menu"},Uy=["onClick"],Qy={class:"collection-subheading"},Yy=["data-component"],Py={class:"card-stage"},_y={class:"stage-topline"},$y=["aria-label","onClick"],Ry={class:"demo-holder"},Wy={class:"card-description"},By=["href"],Hy={key:1,class:"empty-state"},Vy={key:3,class:"detail-page"},Gy={class:"breadcrumbs","aria-label":"Breadcrumb"},Fy={class:"detail-heading"},Zy={class:"detail-preview"},Ky={class:"preview-toolbar"},Jy=["aria-selected","tabindex"],qy=["aria-selected","tabindex"],Xy={class:"preview-controls"},e0={key:0,class:"source-filename"},t0={class:"detail-preview-panels"},n0=["data-component","inert","aria-hidden"],o0={class:"detail-footnote"},i0={class:"component-pagination","aria-label":"Component navigation"},s0=["href"],a0=["href"],r0={key:4,class:"docs-page"},l0={class:"breadcrumbs","aria-label":"Breadcrumb"},c0=["href"],u0={class:"docs-code docs-command"},d0={class:"docs-example"},p0={class:"docs-example-header"},M0=["inert"],g0={class:"footer-inner"},f0={href:"#/",class:"footer-brand"},h0={key:0,class:"toast-message",role:"status"},pn="https://github.com/cocofhu/harness-ui",qn=`<script setup lang="ts">
import ChatComposer from './components/ui/ChatComposer.vue'
<\/script>

<template>
  <ChatComposer @send="console.log" />
</template>`,m0=Ze({__name:"App",setup(e){const t=xc(()=>ud(()=>import("./IconGallery--tklWYzm.js"),__vite__mapDeps([0,1])));function n(){const _=window.location.hash.replace(/^#\/?/,"")||"";return _.startsWith("components/")&&!yt.some(v=>_===`components/${v.slug}`)?(window.history.replaceState(null,"","#/components"),"components"):_}const o=H(n()),i=H("all"),s=H(""),a=H($h("agent-ui-theme","light")==="dark"),r=H(!1),c=H(window.matchMedia("(max-width: 700px)").matches),u=H(),p=H(""),h=H(!1),m=H("recommended"),w=H("preview"),U=H(),Y=H(0),V=H(""),ee=H(),G=H(),te=H({opacity:"0"}),S=H({opacity:"0"});let Q,I,L=a.value,C=!1,f,W=0;const F=H(null),O=je(()=>F.value===null?"Star":new Intl.NumberFormat("en",{notation:F.value>=1e4?"compact":"standard",maximumFractionDigits:1}).format(F.value));let q,le,he=!1;const se={all:"dashboard",conversation:"chat",agent:"robot",workflow:"workflow",navigation:"board"},ae=je(()=>yt.find(_=>o.value===`components/${_.slug}`)),pe=je(()=>o.value==="components"),Z=je(()=>o.value==="icons"),E=je(()=>o.value.startsWith("docs/")),R=je(()=>!pe.value&&!ae.value&&!Z.value&&!E.value),oe=je(()=>pe.value||!!ae.value||E.value),ce=je(()=>{var _;return((_=Qo.find(v=>v.id===i.value))==null?void 0:_.name)||"All components"}),xe=je(()=>{const _=s.value.trim().toLowerCase();let v=yt.filter(J=>(i.value==="all"||J.category===i.value)&&tf(J,_));return m.value==="name"&&(v=[...v].sort((J,re)=>J.name.localeCompare(re.name,"en"))),m.value==="new"&&(v=[...v].sort((J,re)=>+!!re.fresh-+!!J.fresh)),v}),Le=je(()=>yt.findIndex(_=>{var v;return _.slug===((v=ae.value)==null?void 0:v.slug)}));function Te(_){V.value=_,clearTimeout(Q),Q=setTimeout(()=>{V.value=""},2600)}async function Oe(_,v="Copied to clipboard"){try{await il(_),p.value=_,clearTimeout(I),I=setTimeout(()=>{p.value=""},2200),Te(v)}catch{Te("Select the code and copy it manually")}}function Je(_=""){window.location.hash=_?`/${_}`:"/",r.value=!1}async function Fe(){r.value=!1,h.value=!1,o.value=n(),w.value="preview",await ke(),he||window.scrollTo({top:0,behavior:"instant"})}async function nt(_){var v,J;_.isComposing||!["ArrowLeft","ArrowRight","Home","End"].includes(_.key)||(_.preventDefault(),w.value=_.key==="Home"?"preview":_.key==="End"||w.value==="preview"?"source":"preview",await ke(),(J=(v=U.value)==null?void 0:v.querySelector('[aria-selected="true"]'))==null||J.focus())}async function g(){var _;await ke(),j(),he&&(he=!1,(_=document.getElementById("components"))==null||_.scrollIntoView({behavior:"smooth",block:"start"}))}function d(_){i.value=_,pe.value||(he=!0,Je("components")),r.value=!1}function x(){var _,v;(_=document.getElementById("main-content"))==null||_.focus(),(v=document.getElementById("main-content"))==null||v.scrollIntoView()}function T(_,v){const J=_==null?void 0:_.querySelector(v);if(!_||!J)return{opacity:"0"};const re=_.getBoundingClientRect(),be=J.getBoundingClientRect();return{opacity:"1",width:`${be.width}px`,height:`${be.height}px`,transform:`translate3d(${be.left-re.left+_.scrollLeft}px,${be.top-re.top+_.scrollTop}px,0)`}}function b(){c.value=window.matchMedia("(max-width: 700px)").matches,c.value||(r.value=!1),j()}function D(){var _;r.value&&(r.value=!1,(_=u.value)==null||_.focus())}function j(){te.value=T(ee.value,"button.active"),S.value=T(G.value,".sidebar-link.selected")}function M(){document.documentElement.classList.remove("harness-theme-motion","harness-theme-capture")}function A(){if(L=!L,rs()||!document.startViewTransition){W++,f==null||f.skipTransition(),f=void 0,C=!1,M(),a.value=L;return}if(C)return;f==null||f.skipTransition();const _=++W;C=!0,document.documentElement.classList.add("harness-theme-motion","harness-theme-capture");try{const v=document.startViewTransition(async()=>{a.value=L,await ke(),a.value!==L&&(a.value=L,await ke()),C=!1});f=v,v.ready.then(()=>{_===W&&document.documentElement.classList.remove("harness-theme-capture")}).catch(()=>{}),v.finished.catch(()=>{}).finally(()=>{_===W&&(f=void 0,C=!1,M())})}catch{a.value=L,C=!1,M()}}async function $(){const _="harness-ui-github-stars";try{const v=JSON.parse(sessionStorage.getItem(_)||"null");if(v&&typeof v.checkedAt=="number"&&Date.now()-v.checkedAt<36e5&&(v.count===null||Number.isInteger(v.count)&&v.count>=0)){F.value=v.count;return}}catch{}q=new AbortController,le=setTimeout(()=>q==null?void 0:q.abort(),6e3);try{const v=await fetch("https://api.github.com/repos/cocofhu/harness-ui",{headers:{Accept:"application/vnd.github+json"},signal:q.signal});if(!v.ok)throw new Error("Repository unavailable");const J=await v.json();if(!Number.isInteger(J.stargazers_count)||J.stargazers_count<0)throw new Error("Invalid count");F.value=J.stargazers_count}catch{F.value=null}finally{clearTimeout(le);try{sessionStorage.setItem(_,JSON.stringify({count:F.value,checkedAt:Date.now()}))}catch{}}}function ue(_){_.key==="Escape"&&(D(),h.value=!1)}return we([ae,pe,Z,E],()=>{var v;const _=((v=ae.value)==null?void 0:v.name)||(pe.value?"Components":Z.value?"Animated icons":E.value?"Documentation":"Vue components and animated icons");document.title=`${_} · Harness UI`},{immediate:!0}),we(a,_=>{var v;document.documentElement.classList.toggle("dark",_),document.documentElement.style.colorScheme=_?"dark":"light",window.dispatchEvent(new CustomEvent("themechange",{detail:{theme:_?"dark":"light"}})),(v=document.querySelector('meta[name="theme-color"]'))==null||v.setAttribute("content",_?"#0a0a0b":"#ffffff"),Rh("agent-ui-theme",_?"dark":"light")},{immediate:!0}),we([r,c],([_,v])=>{document.body.style.overflow=_&&v?"hidden":""}),we([i,o,pe],async()=>{await ke(),j()}),wt(()=>{$(),window.addEventListener("hashchange",Fe),window.addEventListener("keydown",ue),window.addEventListener("resize",b),ke(j),document.fonts.ready.then(j)}),fi(()=>{window.removeEventListener("hashchange",Fe),window.removeEventListener("keydown",ue),window.removeEventListener("resize",b),clearTimeout(Q),clearTimeout(I),clearTimeout(le),q==null||q.abort(),W++,f==null||f.skipTransition(),M(),document.body.style.overflow=""}),(_,v)=>(y(),z(me,null,[l("a",{href:"#main-content",class:"skip-link",onClick:At(x,["prevent"])},"Skip to main content"),l("header",ly,[l("div",cy,[l("div",uy,[l("button",{type:"button",ref_key:"mobileMenu",ref:u,class:"icon-button mobile-menu","aria-label":r.value?"Close navigation":"Open navigation","aria-expanded":r.value,onClick:v[0]||(v[0]=J=>r.value=!r.value)},[B(Ue,{name:"menu",size:20})],8,dy),l("a",py,[l("span",My,[B(Ue,{name:"sparkles",size:23,"stroke-width":1.7})]),v[20]||(v[20]=l("span",{class:"brand-name"},[De("Harness "),l("span",{class:"brand-ui"},"UI")],-1))])]),l("nav",gy,[l("a",{href:"#/",class:fe({active:R.value})},"Home",2),l("a",{href:"#/components",class:fe({active:pe.value||ae.value}),"aria-current":pe.value||ae.value?"page":void 0},"Components",10,fy),l("a",{href:"#/icons",class:fe({active:Z.value})},"Icons",2),l("a",{href:pn,target:"_blank",rel:"noopener noreferrer"},"Docs")]),l("div",hy,[l("a",{class:"github-star-pill",href:pn,target:"_blank",rel:"noopener noreferrer","aria-label":"Star Harness UI on GitHub"},[v[21]||(v[21]=Yr('<span class="github-star-icon" aria-hidden="true"><svg class="github-mark" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg><svg class="github-star-mark" width="23" height="23" viewBox="0 0 24 24" fill="none"><path d="m11 4 2.2 4.45 4.91.72-3.55 3.46.84 4.89L11 15.21l-4.4 2.31.84-4.89-3.55-3.46 4.91-.72L11 4Z" fill="currentColor"></path><path class="github-sparkle" d="m20 2 .7 1.8 1.8.7-1.8.7L20 7l-.7-1.8-1.8-.7 1.8-.7Z" fill="currentColor"></path><path class="github-sparkle github-sparkle-late" d="m3 16 .6 1.4L5 18l-1.4.6L3 20l-.6-1.4L1 18l1.4-.6Z" fill="currentColor"></path></svg></span>',1)),l("span",my,X(O.value),1)]),l("button",{type:"button",class:"icon-button theme-toggle","aria-label":a.value?"Switch to light theme":"Switch to dark theme",onClick:A},[l("span",vy,[l("span",{class:fe(["theme-icon theme-icon-moon",{"is-active":!a.value}])},[B(Ue,{name:"moon",size:16,interactive:!a.value},null,8,["interactive"])],2),l("span",{class:fe(["theme-icon theme-icon-sun",{"is-active":a.value}])},[B(Ue,{name:"sun",size:16,interactive:a.value},null,8,["interactive"])],2)])],8,yy)])])]),r.value?(y(),z("button",{key:0,type:"button",class:"nav-backdrop","aria-label":"Close navigation",onClick:D})):ge("",!0),oe.value?ge("",!0):(y(),z("nav",{key:1,class:fe(["home-mobile-nav",{"mobile-open":r.value}]),inert:!r.value,"aria-label":"Mobile navigation"},[l("a",{href:"#/",onClick:v[1]||(v[1]=J=>r.value=!1)},"Home"),l("a",{href:"#/components",onClick:v[2]||(v[2]=J=>r.value=!1)},"Components"),l("a",{href:"#/icons",onClick:v[3]||(v[3]=J=>r.value=!1)},"Icons"),l("a",{href:pn,target:"_blank",rel:"noopener noreferrer",onClick:v[4]||(v[4]=J=>r.value=!1)},"Documentation")],10,Ny)),l("div",{class:fe(["app-layout",{"landing-layout":!oe.value}])},[oe.value?(y(),z("aside",{key:0,class:fe(["sidebar",{"mobile-open":r.value}]),inert:c.value&&!r.value,"aria-label":"Component navigation"},[l("div",{ref_key:"sidebarList",ref:G,class:"sidebar-scroll"},[l("span",{class:"sidebar-highlight",style:Yt(S.value),"aria-hidden":"true"},null,4),v[25]||(v[25]=l("p",{class:"nav-label"},"Getting started",-1)),l("a",{href:pn,target:"_blank",rel:"noopener noreferrer",class:"sidebar-link"},[B(Ue,{name:"terminal",size:17}),v[22]||(v[22]=l("span",null,"Quick start",-1))]),l("button",{type:"button",class:"sidebar-link",onClick:v[5]||(v[5]=J=>Je("icons"))},[B(Ue,{name:"sparkles",size:17}),v[23]||(v[23]=l("span",null,"Icons",-1)),l("span",by,X(K(Qh)),1)]),v[26]||(v[26]=l("p",{class:"nav-label category-nav-label"},"Components",-1)),(y(!0),z(me,null,Pe(K(Qo),J=>(y(),z("button",{key:J.id,type:"button",class:fe(["sidebar-link",{selected:pe.value&&i.value===J.id}]),"aria-current":pe.value&&i.value===J.id?"page":void 0,onClick:re=>d(J.id)},[B(Ue,{name:se[J.id],size:17},null,8,["name"]),l("span",null,X(J.name),1),l("span",Ly,X(J.id==="all"?K(yt).length:K(yt).filter(re=>re.category===J.id).length),1)],10,jy))),128)),ae.value?(y(),z("div",Dy,[v[24]||(v[24]=l("p",{class:"nav-label"},"In this category",-1)),(y(!0),z(me,null,Pe(K(yt).filter(J=>J.category===ae.value.category),J=>(y(),z("a",{key:J.slug,href:`#/components/${J.slug}`,class:fe(["sidebar-component",{current:J.slug===ae.value.slug}])},X(J.name),11,wy))),128))])):ge("",!0)],512)],10,xy)):ge("",!0),l("main",{id:"main-content",class:"main-content",tabindex:"-1",inert:c.value&&r.value},[B(ct,{name:"page",mode:"out-in",appear:"",onAfterEnter:g},{default:Ke(()=>{var J;return[(y(),z("div",{key:pe.value?"gallery":o.value,class:"page-view"},[R.value?(y(),Ne(Xm,{key:0,onNotify:Te})):Z.value?(y(),Ne(K(t),{key:1,onNotify:Te})):pe.value?(y(),z("section",Ty,[v[29]||(v[29]=l("header",{class:"section-heading"},[l("h1",null,"Components")],-1)),l("div",zy,[l("div",{ref_key:"categoryTabList",ref:ee,class:"category-tabs",role:"group","aria-label":"Component categories"},[l("span",{class:"tab-highlight",style:Yt(te.value),"aria-hidden":"true"},null,4),(y(!0),z(me,null,Pe(K(Qo),re=>(y(),z("button",{key:re.id,type:"button",class:fe({active:i.value===re.id}),"aria-pressed":i.value===re.id,onClick:be=>d(re.id)},X(re.id==="all"?"All":re.name),11,Ay))),128))],512),l("div",ky,[l("label",Sy,[B(Ue,{name:"search",size:15,interactive:!1}),Xe(l("input",{"onUpdate:modelValue":v[6]||(v[6]=re=>s.value=re),"aria-label":"Filter components",placeholder:"Search components…"},null,512),[[xi,s.value]]),s.value?(y(),z("button",{key:0,type:"button","aria-label":"Clear search",onClick:v[7]||(v[7]=re=>s.value="")},[B(Ue,{name:"close",size:13})])):ge("",!0)]),l("div",Ey,[l("button",{type:"button",class:"icon-button sort-button","aria-label":"Sort components","aria-expanded":h.value,onClick:v[8]||(v[8]=re=>h.value=!h.value)},[B(Ue,{name:"filter",size:17})],8,Cy),h.value?(y(),z(me,{key:0},[l("button",{type:"button",class:"sort-backdrop",tabindex:"-1","aria-label":"Close sort menu",onClick:v[9]||(v[9]=re=>h.value=!1)}),l("div",Oy,[(y(),z(me,null,Pe([{id:"recommended",label:"Featured"},{id:"new",label:"Newest first"},{id:"name",label:"Name"}],re=>l("button",{key:re.id,type:"button",onClick:be=>{m.value=re.id,h.value=!1}},[De(X(re.label),1),m.value===re.id?(y(),Ne(K(it),{key:0,size:14})):ge("",!0)],8,Uy)),64))])],64)):ge("",!0)])])]),l("div",Qy,[l("span",null,[De(X(ce.value)+" ",1),l("small",null,X(xe.value.length),1)])]),xe.value.length?(y(),Ne(Wu,{key:0,tag:"div",name:"collection",class:"component-grid",onBeforeLeave:K(Wh)},{default:Ke(()=>[(y(!0),z(me,null,Pe(xe.value,(re,be)=>Xe((y(),z("article",{key:re.slug,"data-component":re.slug,class:"component-card",style:Yt({"--card-index":Math.min(be,5),"--stage-tone":be%3===0?"var(--stage-lilac)":be%3===1?"var(--stage-sand)":"var(--stage-gray)"})},[l("div",Py,[l("div",_y,[l("button",{type:"button",class:"stage-expand icon-button","aria-label":`View ${re.name} details`,onClick:ze=>Je(`components/${re.slug}`)},[B(K(Jn),{size:16})],8,$y)]),l("div",Ry,[B(Sa,{entry:re,onAction:v[10]||(v[10]=ze=>Te("New task selected"))},null,8,["entry"])])]),l("div",Wy,[l("a",{href:`#/components/${re.slug}`,class:"card-title-row"},[l("h3",null,X(re.name),1),B(K(Jn),{size:15})],8,By)])],12,Yy)),[[K(ls)]])),128))]),_:1},8,["onBeforeLeave"])):(y(),z("div",Hy,[B(Ue,{name:"search",size:29}),v[28]||(v[28]=l("h3",null,"No components found",-1)),l("button",{type:"button",class:"button secondary",onClick:v[11]||(v[11]=re=>{s.value="",d("all")})},[v[27]||(v[27]=De(" Browse all components ",-1)),B(Ue,{name:"arrow-right",size:15})])]))])):ae.value?(y(),z("div",Vy,[l("nav",Gy,[v[30]||(v[30]=l("a",{href:"#/components"},"Components",-1)),B(K(co),{size:13}),l("button",{type:"button",onClick:v[12]||(v[12]=re=>d(ae.value.category))},X((J=K(Qo).find(re=>re.id===ae.value.category))==null?void 0:J.name),1),B(K(co),{size:13}),l("span",null,X(ae.value.name),1)]),l("div",Fy,[l("h1",null,X(ae.value.name),1),l("p",null,X(ae.value.description),1)]),l("div",Zy,[l("div",Ky,[l("div",{ref_key:"detailTabs",ref:U,class:"preview-tabs",role:"tablist","aria-label":"Component preview and source",onKeydown:nt},[l("button",{id:"component-preview-tab",type:"button",role:"tab","aria-selected":w.value==="preview",tabindex:w.value==="preview"?0:-1,"aria-controls":"component-preview-panel",class:fe({active:w.value==="preview"}),onClick:v[13]||(v[13]=re=>w.value="preview")},[B(Ue,{name:"eye",size:15}),v[31]||(v[31]=De("Preview",-1))],10,Jy),l("button",{id:"component-source-tab",type:"button",role:"tab","aria-selected":w.value==="source",tabindex:w.value==="source"?0:-1,"aria-controls":"component-source-panel",class:fe({active:w.value==="source"}),onClick:v[14]||(v[14]=re=>w.value="source")},[B(Ue,{name:"stage-ide",size:15}),v[32]||(v[32]=De("Source ",-1))],10,qy)],544),l("div",Xy,[w.value==="source"?(y(),z("span",e0,X(K(Xg)(ae.value))+".vue",1)):ge("",!0),w.value==="preview"?(y(),z("button",{key:1,type:"button",class:"icon-button","aria-label":"Replay demo",onClick:v[15]||(v[15]=re=>Y.value++)},[B(Ue,{name:"refresh",size:16,"motion-key":Y.value},null,8,["motion-key"])])):ge("",!0),l("button",{type:"button",class:"button small secondary",onClick:v[16]||(v[16]=re=>Oe(ae.value.source,"Component source copied"))},[B(Ue,{name:p.value===ae.value.source?"check":"copy","motion-key":p.value===ae.value.source?1:void 0,size:14},null,8,["name","motion-key"]),De(X(p.value===ae.value.source?"Copied":"Copy code"),1)])])]),l("div",t0,[Xe(l("div",{id:"component-preview-panel",class:"large-demo","data-component":ae.value.slug,role:"tabpanel","aria-labelledby":"component-preview-tab",inert:w.value!=="preview","aria-hidden":w.value!=="preview"},[(y(),Ne(Sa,{entry:ae.value,key:`${ae.value.slug}-${Y.value}`,onAction:v[17]||(v[17]=re=>Te("New task selected"))},null,8,["entry"]))],8,n0),[[Ut,w.value==="preview"]]),w.value==="source"?(y(),Ne(Hi,{key:0,id:"component-source-panel",code:ae.value.source,role:"tabpanel","aria-labelledby":"component-source-tab"},null,8,["code"])):ge("",!0)])]),l("div",o0,[v[34]||(v[34]=l("span",null,[De("Vue 3 "),l("i",null,"·"),De(" TypeScript "),l("i",null,"·"),De(" Standalone source")],-1)),l("a",{href:pn,target:"_blank",rel:"noopener noreferrer"},[v[33]||(v[33]=De("How to use ",-1)),B(K(Jn),{size:13})])]),l("nav",i0,[K(yt)[Le.value-1]?(y(),z("a",{key:0,href:`#/components/${K(yt)[Le.value-1].slug}`},[B(Ue,{name:"arrow-left",size:15}),l("span",null,[v[35]||(v[35]=l("small",null,"Previous",-1)),De(X(K(yt)[Le.value-1].name),1)])],8,s0)):ge("",!0),K(yt)[Le.value+1]?(y(),z("a",{key:1,href:`#/components/${K(yt)[Le.value+1].slug}`,class:"next-component"},[l("span",null,[v[36]||(v[36]=l("small",null,"Next",-1)),De(X(K(yt)[Le.value+1].name),1)]),B(Ue,{name:"arrow-right",size:15})],8,a0)):ge("",!0)])])):(y(),z("article",r0,[l("nav",l0,[v[37]||(v[37]=l("a",{href:"#/"},"Harness UI",-1)),B(K(co),{size:13}),v[38]||(v[38]=l("span",null,"Documentation",-1))]),v[48]||(v[48]=l("h1",null,"Documentation",-1)),v[49]||(v[49]=l("p",{class:"docs-lead"},"For Vue 3 and TypeScript.",-1)),l("a",{href:pn,target:"_blank",rel:"noopener noreferrer",class:"inline-link"},[v[39]||(v[39]=De("View documentation on GitHub ",-1)),B(K(Jn),{size:15})]),l("section",null,[v[42]||(v[42]=l("span",{class:"doc-number"},"01",-1)),l("div",null,[v[41]||(v[41]=l("h2",null,"Copy a component",-1)),l("a",{href:`${pn}/tree/main/src/components/ui`,target:"_blank",rel:"noopener noreferrer",class:"inline-link"},[v[40]||(v[40]=De("Browse source on GitHub ",-1)),B(K(Jn),{size:15})],8,c0)])]),l("section",null,[v[44]||(v[44]=l("span",{class:"doc-number"},"02",-1)),l("div",null,[v[43]||(v[43]=l("h2",null,"Install dependencies",-1)),l("div",u0,[B(Ue,{name:"terminal",size:16,interactive:!1}),B(Hi,{code:"npm install lucide-vue-next",compact:""}),l("button",{type:"button",class:"icon-button","aria-label":"Copy install command",onClick:v[18]||(v[18]=re=>Oe("npm install lucide-vue-next"))},[B(Ue,{name:p.value==="npm install lucide-vue-next"?"check":"copy","motion-key":p.value==="npm install lucide-vue-next"?1:void 0,size:15},null,8,["name","motion-key"])])])])]),l("section",null,[v[47]||(v[47]=l("span",{class:"doc-number"},"03",-1)),l("div",null,[v[46]||(v[46]=l("h2",null,"Import and use",-1)),l("div",d0,[l("div",p0,[l("span",null,[B(Ue,{name:"doc",size:14,interactive:!1}),v[45]||(v[45]=De(" App.vue",-1))]),l("button",{type:"button",onClick:v[19]||(v[19]=re=>Oe(qn,"Example copied"))},[B(Ue,{name:p.value===qn?"check":"copy","motion-key":p.value===qn?1:void 0,size:14},null,8,["name","motion-key"]),De(" "+X(p.value===qn?"Copied":"Copy example"),1)])]),B(Hi,{code:qn,compact:""})])])])]))]))]}),_:1})],8,Iy)],2),l("footer",{class:"site-footer",inert:c.value&&r.value},[l("div",g0,[l("a",f0,[B(Ue,{name:"sparkles",size:20}),v[50]||(v[50]=l("strong",null,"Harness UI",-1))]),l("nav",{"aria-label":"Footer navigation"},[v[51]||(v[51]=l("a",{href:"#/components"},"Components",-1)),v[52]||(v[52]=l("a",{href:"#/icons"},"Icons",-1)),l("a",{href:pn,target:"_blank",rel:"noopener noreferrer"},"Documentation")]),v[53]||(v[53]=l("span",null,"© 2026 · MIT License",-1))])],8,M0),B(ct,{name:"toast"},{default:Ke(()=>[V.value?(y(),z("div",h0,[l("span",null,[B(K(it),{size:13})]),De(X(V.value),1)])):ge("",!0)]),_:1})],64))}});let Xn;function y0(){if(Xn)return Xn;const e=new Map,t=o=>{const i=o.target===document?document.scrollingElement:o.target;i instanceof HTMLElement&&(clearTimeout(e.get(i)),i.classList.add("is-scrolling"),e.set(i,setTimeout(()=>{i.classList.remove("is-scrolling"),e.delete(i)},650)))};document.addEventListener("scroll",t,{capture:!0,passive:!0});const n=()=>{document.removeEventListener("scroll",t,!0),e.forEach((o,i)=>{clearTimeout(o),i.classList.remove("is-scrolling")}),e.clear(),Xn===n&&(Xn=void 0)};return Xn=n,n}y0();sd(m0).mount("#app");export{je as A,il as B,me as F,ct as T,Ue as _,y as a,l as b,z as c,Ze as d,_h as e,Pe as f,fe as g,B as h,Ro as i,Xe as j,wa as k,ge as l,De as m,ke as n,Et as o,Ne as p,Ke as q,Yh as r,At as s,X as t,K as u,xi as v,we as w,Hi as x,pr as y,H as z};
