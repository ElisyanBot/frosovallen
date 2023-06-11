(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function F6(c,a){const e=Object.create(null),r=c.split(",");for(let i=0;i<r.length;i++)e[r[i]]=!0;return a?i=>!!e[i.toLowerCase()]:i=>!!e[i]}const e1={},_2=[],F1=()=>{},eo=()=>!1,ro=/^on[^a-z]/,v4=c=>ro.test(c),B6=c=>c.startsWith("onUpdate:"),m1=Object.assign,R6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},io=Object.prototype.hasOwnProperty,G=(c,a)=>io.call(c,a),q=Array.isArray,E2=c=>h4(c)==="[object Map]",$5=c=>h4(c)==="[object Set]",U=c=>typeof c=="function",f1=c=>typeof c=="string",_6=c=>typeof c=="symbol",r1=c=>c!==null&&typeof c=="object",I5=c=>r1(c)&&U(c.then)&&U(c.catch),G5=Object.prototype.toString,h4=c=>G5.call(c),so=c=>h4(c).slice(8,-1),W5=c=>h4(c)==="[object Object]",E6=c=>f1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,Y3=F6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),H4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},no=/-(\w)/g,G1=H4(c=>c.replace(no,(a,e)=>e?e.toUpperCase():"")),fo=/\B([A-Z])/g,j2=H4(c=>c.replace(fo,"-$1").toLowerCase()),u4=H4(c=>c.charAt(0).toUpperCase()+c.slice(1)),Z4=H4(c=>c?`on${u4(c)}`:""),v3=(c,a)=>!Object.is(c,a),j4=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},e4=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},lo=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let L0;const f6=()=>L0||(L0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function D6(c){if(q(c)){const a={};for(let e=0;e<c.length;e++){const r=c[e],i=f1(r)?zo(r):D6(r);if(i)for(const s in i)a[s]=i[s]}return a}else{if(f1(c))return c;if(r1(c))return c}}const oo=/;(?![^(]*\))/g,to=/:([^]+)/,mo=/\/\*[^]*?\*\//g;function zo(c){const a={};return c.replace(mo,"").split(oo).forEach(e=>{if(e){const r=e.split(to);r.length>1&&(a[r[0].trim()]=r[1].trim())}}),a}function q6(c){let a="";if(f1(c))a=c;else if(q(c))for(let e=0;e<c.length;e++){const r=q6(c[e]);r&&(a+=r+" ")}else if(r1(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const vo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ho=F6(vo);function Z5(c){return!!c||c===""}const IJ=c=>f1(c)?c:c==null?"":q(c)||r1(c)&&(c.toString===G5||!U(c.toString))?JSON.stringify(c,j5,2):String(c),j5=(c,a)=>a&&a.__v_isRef?j5(c,a.value):E2(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[r,i])=>(e[`${r} =>`]=i,e),{})}:$5(a)?{[`Set(${a.size})`]:[...a.values()]}:r1(a)&&!q(a)&&!W5(a)?String(a):a;let w1;class Ho{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=w1,!a&&w1&&(this.index=(w1.scopes||(w1.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=w1;try{return w1=this,a()}finally{w1=e}}}on(){w1=this}off(){w1=this.parent}stop(a){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function uo(c,a=w1){a&&a.active&&a.effects.push(c)}function Vo(){return w1}const O6=c=>{const a=new Set(c);return a.w=0,a.n=0,a},K5=c=>(c.w&m2)>0,Y5=c=>(c.n&m2)>0,po=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=m2},Mo=c=>{const{deps:a}=c;if(a.length){let e=0;for(let r=0;r<a.length;r++){const i=a[r];K5(i)&&!Y5(i)?i.delete(c):a[e++]=i,i.w&=~m2,i.n&=~m2}a.length=e}},l6=new WeakMap;let e3=0,m2=1;const o6=30;let k1;const g2=Symbol(""),t6=Symbol("");class U6{constructor(a,e=null,r){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,uo(this,r)}run(){if(!this.active)return this.fn();let a=k1,e=o2;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=k1,k1=this,o2=!0,m2=1<<++e3,e3<=o6?po(this):g0(this),this.fn()}finally{e3<=o6&&Mo(this),m2=1<<--e3,k1=this.parent,o2=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){k1===this?this.deferStop=!0:this.active&&(g0(this),this.onStop&&this.onStop(),this.active=!1)}}function g0(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let o2=!0;const X5=[];function K2(){X5.push(o2),o2=!1}function Y2(){const c=X5.pop();o2=c===void 0?!0:c}function g1(c,a,e){if(o2&&k1){let r=l6.get(c);r||l6.set(c,r=new Map);let i=r.get(e);i||r.set(e,i=O6()),Q5(i)}}function Q5(c,a){let e=!1;e3<=o6?Y5(c)||(c.n|=m2,e=!K5(c)):e=!c.has(k1),e&&(c.add(k1),k1.deps.push(c))}function Y1(c,a,e,r,i,s){const n=l6.get(c);if(!n)return;let f=[];if(a==="clear")f=[...n.values()];else if(e==="length"&&q(c)){const l=Number(r);n.forEach((t,o)=>{(o==="length"||o>=l)&&f.push(t)})}else switch(e!==void 0&&f.push(n.get(e)),a){case"add":q(c)?E6(e)&&f.push(n.get("length")):(f.push(n.get(g2)),E2(c)&&f.push(n.get(t6)));break;case"delete":q(c)||(f.push(n.get(g2)),E2(c)&&f.push(n.get(t6)));break;case"set":E2(c)&&f.push(n.get(g2));break}if(f.length===1)f[0]&&m6(f[0]);else{const l=[];for(const t of f)t&&l.push(...t);m6(O6(l))}}function m6(c,a){const e=q(c)?c:[...c];for(const r of e)r.computed&&x0(r);for(const r of e)r.computed||x0(r)}function x0(c,a){(c!==k1||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const Co=F6("__proto__,__v_isRef,__isVue"),J5=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(_6)),Lo=$6(),go=$6(!1,!0),xo=$6(!0),b0=bo();function bo(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const r=W(this);for(let s=0,n=this.length;s<n;s++)g1(r,"get",s+"");const i=r[a](...e);return i===-1||i===!1?r[a](...e.map(W)):i}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){K2();const r=W(this)[a].apply(this,e);return Y2(),r}}),c}function No(c){const a=W(this);return g1(a,"has",c),a.hasOwnProperty(c)}function $6(c=!1,a=!1){return function(r,i,s){if(i==="__v_isReactive")return!c;if(i==="__v_isReadonly")return c;if(i==="__v_isShallow")return a;if(i==="__v_raw"&&s===(c?a?Uo:i7:a?r7:e7).get(r))return r;const n=q(r);if(!c){if(n&&G(b0,i))return Reflect.get(b0,i,s);if(i==="hasOwnProperty")return No}const f=Reflect.get(r,i,s);return(_6(i)?J5.has(i):Co(i))||(c||g1(r,"get",i),a)?f:H1(f)?n&&E6(i)?f:f.value:r1(f)?c?s7(f):b3(f):f}}const So=c7(),yo=c7(!0);function c7(c=!1){return function(e,r,i,s){let n=e[r];if(U2(n)&&H1(n)&&!H1(i))return!1;if(!c&&(!r4(i)&&!U2(i)&&(n=W(n),i=W(i)),!q(e)&&H1(n)&&!H1(i)))return n.value=i,!0;const f=q(e)&&E6(r)?Number(r)<e.length:G(e,r),l=Reflect.set(e,r,i,s);return e===W(s)&&(f?v3(i,n)&&Y1(e,"set",r,i):Y1(e,"add",r,i)),l}}function wo(c,a){const e=G(c,a);c[a];const r=Reflect.deleteProperty(c,a);return r&&e&&Y1(c,"delete",a,void 0),r}function Ao(c,a){const e=Reflect.has(c,a);return(!_6(a)||!J5.has(a))&&g1(c,"has",a),e}function ko(c){return g1(c,"iterate",q(c)?"length":g2),Reflect.ownKeys(c)}const a7={get:Lo,set:So,deleteProperty:wo,has:Ao,ownKeys:ko},Po={get:xo,set(c,a){return!0},deleteProperty(c,a){return!0}},To=m1({},a7,{get:go,set:yo}),I6=c=>c,V4=c=>Reflect.getPrototypeOf(c);function B3(c,a,e=!1,r=!1){c=c.__v_raw;const i=W(c),s=W(a);e||(a!==s&&g1(i,"get",a),g1(i,"get",s));const{has:n}=V4(i),f=r?I6:e?Z6:h3;if(n.call(i,a))return f(c.get(a));if(n.call(i,s))return f(c.get(s));c!==i&&c.get(a)}function R3(c,a=!1){const e=this.__v_raw,r=W(e),i=W(c);return a||(c!==i&&g1(r,"has",c),g1(r,"has",i)),c===i?e.has(c):e.has(c)||e.has(i)}function _3(c,a=!1){return c=c.__v_raw,!a&&g1(W(c),"iterate",g2),Reflect.get(c,"size",c)}function N0(c){c=W(c);const a=W(this);return V4(a).has.call(a,c)||(a.add(c),Y1(a,"add",c,c)),this}function S0(c,a){a=W(a);const e=W(this),{has:r,get:i}=V4(e);let s=r.call(e,c);s||(c=W(c),s=r.call(e,c));const n=i.call(e,c);return e.set(c,a),s?v3(a,n)&&Y1(e,"set",c,a):Y1(e,"add",c,a),this}function y0(c){const a=W(this),{has:e,get:r}=V4(a);let i=e.call(a,c);i||(c=W(c),i=e.call(a,c)),r&&r.call(a,c);const s=a.delete(c);return i&&Y1(a,"delete",c,void 0),s}function w0(){const c=W(this),a=c.size!==0,e=c.clear();return a&&Y1(c,"clear",void 0,void 0),e}function E3(c,a){return function(r,i){const s=this,n=s.__v_raw,f=W(n),l=a?I6:c?Z6:h3;return!c&&g1(f,"iterate",g2),n.forEach((t,o)=>r.call(i,l(t),l(o),s))}}function D3(c,a,e){return function(...r){const i=this.__v_raw,s=W(i),n=E2(s),f=c==="entries"||c===Symbol.iterator&&n,l=c==="keys"&&n,t=i[c](...r),o=e?I6:a?Z6:h3;return!a&&g1(s,"iterate",l?t6:g2),{next(){const{value:z,done:h}=t.next();return h?{value:z,done:h}:{value:f?[o(z[0]),o(z[1])]:o(z),done:h}},[Symbol.iterator](){return this}}}}function i2(c){return function(...a){return c==="delete"?!1:this}}function Fo(){const c={get(s){return B3(this,s)},get size(){return _3(this)},has:R3,add:N0,set:S0,delete:y0,clear:w0,forEach:E3(!1,!1)},a={get(s){return B3(this,s,!1,!0)},get size(){return _3(this)},has:R3,add:N0,set:S0,delete:y0,clear:w0,forEach:E3(!1,!0)},e={get(s){return B3(this,s,!0)},get size(){return _3(this,!0)},has(s){return R3.call(this,s,!0)},add:i2("add"),set:i2("set"),delete:i2("delete"),clear:i2("clear"),forEach:E3(!0,!1)},r={get(s){return B3(this,s,!0,!0)},get size(){return _3(this,!0)},has(s){return R3.call(this,s,!0)},add:i2("add"),set:i2("set"),delete:i2("delete"),clear:i2("clear"),forEach:E3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{c[s]=D3(s,!1,!1),e[s]=D3(s,!0,!1),a[s]=D3(s,!1,!0),r[s]=D3(s,!0,!0)}),[c,e,a,r]}const[Bo,Ro,_o,Eo]=Fo();function G6(c,a){const e=a?c?Eo:_o:c?Ro:Bo;return(r,i,s)=>i==="__v_isReactive"?!c:i==="__v_isReadonly"?c:i==="__v_raw"?r:Reflect.get(G(e,i)&&i in r?e:r,i,s)}const Do={get:G6(!1,!1)},qo={get:G6(!1,!0)},Oo={get:G6(!0,!1)},e7=new WeakMap,r7=new WeakMap,i7=new WeakMap,Uo=new WeakMap;function $o(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Io(c){return c.__v_skip||!Object.isExtensible(c)?0:$o(so(c))}function b3(c){return U2(c)?c:W6(c,!1,a7,Do,e7)}function Go(c){return W6(c,!1,To,qo,r7)}function s7(c){return W6(c,!0,Po,Oo,i7)}function W6(c,a,e,r,i){if(!r1(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const s=i.get(c);if(s)return s;const n=Io(c);if(n===0)return c;const f=new Proxy(c,n===2?r:e);return i.set(c,f),f}function D2(c){return U2(c)?D2(c.__v_raw):!!(c&&c.__v_isReactive)}function U2(c){return!!(c&&c.__v_isReadonly)}function r4(c){return!!(c&&c.__v_isShallow)}function n7(c){return D2(c)||U2(c)}function W(c){const a=c&&c.__v_raw;return a?W(a):c}function f7(c){return e4(c,"__v_skip",!0),c}const h3=c=>r1(c)?b3(c):c,Z6=c=>r1(c)?s7(c):c;function l7(c){o2&&k1&&(c=W(c),Q5(c.dep||(c.dep=O6())))}function o7(c,a){c=W(c);const e=c.dep;e&&m6(e)}function H1(c){return!!(c&&c.__v_isRef===!0)}function Wo(c){return t7(c,!1)}function Zo(c){return t7(c,!0)}function t7(c,a){return H1(c)?c:new jo(c,a)}class jo{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:W(a),this._value=e?a:h3(a)}get value(){return l7(this),this._value}set value(a){const e=this.__v_isShallow||r4(a)||U2(a);a=e?a:W(a),v3(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:h3(a),o7(this))}}function x2(c){return H1(c)?c.value:c}const Ko={get:(c,a,e)=>x2(Reflect.get(c,a,e)),set:(c,a,e,r)=>{const i=c[a];return H1(i)&&!H1(e)?(i.value=e,!0):Reflect.set(c,a,e,r)}};function m7(c){return D2(c)?c:new Proxy(c,Ko)}class Yo{constructor(a,e,r,i){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new U6(a,()=>{this._dirty||(this._dirty=!0,o7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const a=W(this);return l7(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}function Xo(c,a,e=!1){let r,i;const s=U(c);return s?(r=c,i=F1):(r=c.get,i=c.set),new Yo(r,i,s||!i,e)}function t2(c,a,e,r){let i;try{i=r?c(...r):c()}catch(s){p4(s,a,e)}return i}function B1(c,a,e,r){if(U(c)){const s=t2(c,a,e,r);return s&&I5(s)&&s.catch(n=>{p4(n,a,e)}),s}const i=[];for(let s=0;s<c.length;s++)i.push(B1(c[s],a,e,r));return i}function p4(c,a,e,r=!0){const i=a?a.vnode:null;if(a){let s=a.parent;const n=a.proxy,f=e;for(;s;){const t=s.ec;if(t){for(let o=0;o<t.length;o++)if(t[o](c,n,f)===!1)return}s=s.parent}const l=a.appContext.config.errorHandler;if(l){t2(l,null,10,[c,n,f]);return}}Qo(c,e,i,r)}function Qo(c,a,e,r=!0){console.error(c)}let H3=!1,z6=!1;const h1=[];let U1=0;const q2=[];let j1=null,M2=0;const z7=Promise.resolve();let j6=null;function v7(c){const a=j6||z7;return c?a.then(this?c.bind(this):c):a}function Jo(c){let a=U1+1,e=h1.length;for(;a<e;){const r=a+e>>>1;u3(h1[r])<c?a=r+1:e=r}return a}function K6(c){(!h1.length||!h1.includes(c,H3&&c.allowRecurse?U1+1:U1))&&(c.id==null?h1.push(c):h1.splice(Jo(c.id),0,c),h7())}function h7(){!H3&&!z6&&(z6=!0,j6=z7.then(u7))}function ct(c){const a=h1.indexOf(c);a>U1&&h1.splice(a,1)}function at(c){q(c)?q2.push(...c):(!j1||!j1.includes(c,c.allowRecurse?M2+1:M2))&&q2.push(c),h7()}function A0(c,a=H3?U1+1:0){for(;a<h1.length;a++){const e=h1[a];e&&e.pre&&(h1.splice(a,1),a--,e())}}function H7(c){if(q2.length){const a=[...new Set(q2)];if(q2.length=0,j1){j1.push(...a);return}for(j1=a,j1.sort((e,r)=>u3(e)-u3(r)),M2=0;M2<j1.length;M2++)j1[M2]();j1=null,M2=0}}const u3=c=>c.id==null?1/0:c.id,et=(c,a)=>{const e=u3(c)-u3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function u7(c){z6=!1,H3=!0,h1.sort(et);const a=F1;try{for(U1=0;U1<h1.length;U1++){const e=h1[U1];e&&e.active!==!1&&t2(e,null,14)}}finally{U1=0,h1.length=0,H7(),H3=!1,j6=null,(h1.length||q2.length)&&u7()}}function rt(c,a,...e){if(c.isUnmounted)return;const r=c.vnode.props||e1;let i=e;const s=a.startsWith("update:"),n=s&&a.slice(7);if(n&&n in r){const o=`${n==="modelValue"?"model":n}Modifiers`,{number:z,trim:h}=r[o]||e1;h&&(i=e.map(u=>f1(u)?u.trim():u)),z&&(i=e.map(lo))}let f,l=r[f=Z4(a)]||r[f=Z4(G1(a))];!l&&s&&(l=r[f=Z4(j2(a))]),l&&B1(l,c,6,i);const t=r[f+"Once"];if(t){if(!c.emitted)c.emitted={};else if(c.emitted[f])return;c.emitted[f]=!0,B1(t,c,6,i)}}function V7(c,a,e=!1){const r=a.emitsCache,i=r.get(c);if(i!==void 0)return i;const s=c.emits;let n={},f=!1;if(!U(c)){const l=t=>{const o=V7(t,a,!0);o&&(f=!0,m1(n,o))};!e&&a.mixins.length&&a.mixins.forEach(l),c.extends&&l(c.extends),c.mixins&&c.mixins.forEach(l)}return!s&&!f?(r1(c)&&r.set(c,null),null):(q(s)?s.forEach(l=>n[l]=null):m1(n,s),r1(c)&&r.set(c,n),n)}function M4(c,a){return!c||!v4(a)?!1:(a=a.slice(2).replace(/Once$/,""),G(c,a[0].toLowerCase()+a.slice(1))||G(c,j2(a))||G(c,a))}let p1=null,C4=null;function i4(c){const a=p1;return p1=c,C4=c&&c.type.__scopeId||null,a}function GJ(c){C4=c}function WJ(){C4=null}function it(c,a=p1,e){if(!a||c._n)return c;const r=(...i)=>{r._d&&O0(-1);const s=i4(a);let n;try{n=c(...i)}finally{i4(s),r._d&&O0(1)}return n};return r._n=!0,r._c=!0,r._d=!0,r}function K4(c){const{type:a,vnode:e,proxy:r,withProxy:i,props:s,propsOptions:[n],slots:f,attrs:l,emit:t,render:o,renderCache:z,data:h,setupState:u,ctx:S,inheritAttrs:y}=c;let R,C;const d=i4(c);try{if(e.shapeFlag&4){const w=i||r;R=O1(o.call(w,w,z,s,u,h,S)),C=l}else{const w=a;R=O1(w.length>1?w(s,{attrs:l,slots:f,emit:t}):w(s,null)),C=a.props?l:st(l)}}catch(w){l3.length=0,p4(w,c,1),R=M1(z2)}let B=R;if(C&&y!==!1){const w=Object.keys(C),{shapeFlag:$}=B;w.length&&$&7&&(n&&w.some(B6)&&(C=nt(C,n)),B=$2(B,C))}return e.dirs&&(B=$2(B),B.dirs=B.dirs?B.dirs.concat(e.dirs):e.dirs),e.transition&&(B.transition=e.transition),R=B,i4(d),R}const st=c=>{let a;for(const e in c)(e==="class"||e==="style"||v4(e))&&((a||(a={}))[e]=c[e]);return a},nt=(c,a)=>{const e={};for(const r in c)(!B6(r)||!(r.slice(9)in a))&&(e[r]=c[r]);return e};function ft(c,a,e){const{props:r,children:i,component:s}=c,{props:n,children:f,patchFlag:l}=a,t=s.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return r?k0(r,n,t):!!n;if(l&8){const o=a.dynamicProps;for(let z=0;z<o.length;z++){const h=o[z];if(n[h]!==r[h]&&!M4(t,h))return!0}}}else return(i||f)&&(!f||!f.$stable)?!0:r===n?!1:r?n?k0(r,n,t):!0:!!n;return!1}function k0(c,a,e){const r=Object.keys(a);if(r.length!==Object.keys(c).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(a[s]!==c[s]&&!M4(e,s))return!0}return!1}function lt({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const ot=c=>c.__isSuspense;function tt(c,a){a&&a.pendingBranch?q(c)?a.effects.push(...c):a.effects.push(c):at(c)}function ZJ(c,a){return Y6(c,null,a)}const q3={};function s3(c,a,e){return Y6(c,a,e)}function Y6(c,a,{immediate:e,deep:r,flush:i,onTrack:s,onTrigger:n}=e1){var f;const l=Vo()===((f=z1)==null?void 0:f.scope)?z1:null;let t,o=!1,z=!1;if(H1(c)?(t=()=>c.value,o=r4(c)):D2(c)?(t=()=>c,r=!0):q(c)?(z=!0,o=c.some(w=>D2(w)||r4(w)),t=()=>c.map(w=>{if(H1(w))return w.value;if(D2(w))return F2(w);if(U(w))return t2(w,l,2)})):U(c)?a?t=()=>t2(c,l,2):t=()=>{if(!(l&&l.isUnmounted))return h&&h(),B1(c,l,3,[u])}:t=F1,a&&r){const w=t;t=()=>F2(w())}let h,u=w=>{h=d.onStop=()=>{t2(w,l,4)}},S;if(p3)if(u=F1,a?e&&B1(a,l,3,[t(),z?[]:void 0,u]):t(),i==="sync"){const w=im();S=w.__watcherHandles||(w.__watcherHandles=[])}else return F1;let y=z?new Array(c.length).fill(q3):q3;const R=()=>{if(d.active)if(a){const w=d.run();(r||o||(z?w.some(($,Q)=>v3($,y[Q])):v3(w,y)))&&(h&&h(),B1(a,l,3,[w,y===q3?void 0:z&&y[0]===q3?[]:y,u]),y=w)}else d.run()};R.allowRecurse=!!a;let C;i==="sync"?C=R:i==="post"?C=()=>L1(R,l&&l.suspense):(R.pre=!0,l&&(R.id=l.uid),C=()=>K6(R));const d=new U6(t,C);a?e?R():y=d.run():i==="post"?L1(d.run.bind(d),l&&l.suspense):d.run();const B=()=>{d.stop(),l&&l.scope&&R6(l.scope.effects,d)};return S&&S.push(B),B}function mt(c,a,e){const r=this.proxy,i=f1(c)?c.includes(".")?p7(r,c):()=>r[c]:c.bind(r,r);let s;U(a)?s=a:(s=a.handler,e=a);const n=z1;I2(this);const f=Y6(i,s.bind(r),e);return n?I2(n):b2(),f}function p7(c,a){const e=a.split(".");return()=>{let r=c;for(let i=0;i<e.length&&r;i++)r=r[e[i]];return r}}function F2(c,a){if(!r1(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),H1(c))F2(c.value,a);else if(q(c))for(let e=0;e<c.length;e++)F2(c[e],a);else if($5(c)||E2(c))c.forEach(e=>{F2(e,a)});else if(W5(c))for(const e in c)F2(c[e],a);return c}function V2(c,a,e,r){const i=c.dirs,s=a&&a.dirs;for(let n=0;n<i.length;n++){const f=i[n];s&&(f.oldValue=s[n].value);let l=f.dir[r];l&&(K2(),B1(l,e,8,[c.el,f,c,a]),Y2())}}function X6(c,a){return U(c)?(()=>m1({name:c.name},a,{setup:c}))():c}const n3=c=>!!c.type.__asyncLoader,M7=c=>c.type.__isKeepAlive;function zt(c,a){C7(c,"a",a)}function vt(c,a){C7(c,"da",a)}function C7(c,a,e=z1){const r=c.__wdc||(c.__wdc=()=>{let i=e;for(;i;){if(i.isDeactivated)return;i=i.parent}return c()});if(d4(a,r,e),e){let i=e.parent;for(;i&&i.parent;)M7(i.parent.vnode)&&ht(r,a,e,i),i=i.parent}}function ht(c,a,e,r){const i=d4(a,c,r,!0);d7(()=>{R6(r[a],i)},e)}function d4(c,a,e=z1,r=!1){if(e){const i=e[c]||(e[c]=[]),s=a.__weh||(a.__weh=(...n)=>{if(e.isUnmounted)return;K2(),I2(e);const f=B1(a,e,c,n);return b2(),Y2(),f});return r?i.unshift(s):i.push(s),s}}const c2=c=>(a,e=z1)=>(!p3||c==="sp")&&d4(c,(...r)=>a(...r),e),Ht=c2("bm"),ut=c2("m"),Vt=c2("bu"),pt=c2("u"),Mt=c2("bum"),d7=c2("um"),Ct=c2("sp"),dt=c2("rtg"),Lt=c2("rtc");function gt(c,a=z1){d4("ec",c,a)}const L7="components";function jJ(c,a){return bt(L7,c,!0,a)||c}const xt=Symbol.for("v-ndc");function bt(c,a,e=!0,r=!1){const i=p1||z1;if(i){const s=i.type;if(c===L7){const f=am(s,!1);if(f&&(f===a||f===G1(a)||f===u4(G1(a))))return s}const n=P0(i[c]||s[c],a)||P0(i.appContext[c],a);return!n&&r?s:n}}function P0(c,a){return c&&(c[a]||c[G1(a)]||c[u4(G1(a))])}function KJ(c,a,e,r){let i;const s=e&&e[r];if(q(c)||f1(c)){i=new Array(c.length);for(let n=0,f=c.length;n<f;n++)i[n]=a(c[n],n,void 0,s&&s[n])}else if(typeof c=="number"){i=new Array(c);for(let n=0;n<c;n++)i[n]=a(n+1,n,void 0,s&&s[n])}else if(r1(c))if(c[Symbol.iterator])i=Array.from(c,(n,f)=>a(n,f,void 0,s&&s[f]));else{const n=Object.keys(c);i=new Array(n.length);for(let f=0,l=n.length;f<l;f++){const t=n[f];i[f]=a(c[t],t,f,s&&s[f])}}else i=[];return e&&(e[r]=i),i}function YJ(c,a,e={},r,i){if(p1.isCE||p1.parent&&n3(p1.parent)&&p1.parent.isCE)return a!=="default"&&(e.name=a),M1("slot",e,r&&r());let s=c[a];s&&s._c&&(s._d=!1),c8();const n=s&&g7(s(e)),f=a8(A1,{key:e.key||n&&n.key||`_${a}`},n||(r?r():[]),n&&c._===1?64:-2);return!i&&f.scopeId&&(f.slotScopeIds=[f.scopeId+"-s"]),s&&s._c&&(s._d=!0),f}function g7(c){return c.some(a=>f4(a)?!(a.type===z2||a.type===A1&&!g7(a.children)):!0)?c:null}const v6=c=>c?B7(c)?i8(c)||c.proxy:v6(c.parent):null,f3=m1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>v6(c.parent),$root:c=>v6(c.root),$emit:c=>c.emit,$options:c=>Q6(c),$forceUpdate:c=>c.f||(c.f=()=>K6(c.update)),$nextTick:c=>c.n||(c.n=v7.bind(c.proxy)),$watch:c=>mt.bind(c)}),Y4=(c,a)=>c!==e1&&!c.__isScriptSetup&&G(c,a),Nt={get({_:c},a){const{ctx:e,setupState:r,data:i,props:s,accessCache:n,type:f,appContext:l}=c;let t;if(a[0]!=="$"){const u=n[a];if(u!==void 0)switch(u){case 1:return r[a];case 2:return i[a];case 4:return e[a];case 3:return s[a]}else{if(Y4(r,a))return n[a]=1,r[a];if(i!==e1&&G(i,a))return n[a]=2,i[a];if((t=c.propsOptions[0])&&G(t,a))return n[a]=3,s[a];if(e!==e1&&G(e,a))return n[a]=4,e[a];h6&&(n[a]=0)}}const o=f3[a];let z,h;if(o)return a==="$attrs"&&g1(c,"get",a),o(c);if((z=f.__cssModules)&&(z=z[a]))return z;if(e!==e1&&G(e,a))return n[a]=4,e[a];if(h=l.config.globalProperties,G(h,a))return h[a]},set({_:c},a,e){const{data:r,setupState:i,ctx:s}=c;return Y4(i,a)?(i[a]=e,!0):r!==e1&&G(r,a)?(r[a]=e,!0):G(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(s[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:r,appContext:i,propsOptions:s}},n){let f;return!!e[n]||c!==e1&&G(c,n)||Y4(a,n)||(f=s[0])&&G(f,n)||G(r,n)||G(f3,n)||G(i.config.globalProperties,n)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:G(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function T0(c){return q(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let h6=!0;function St(c){const a=Q6(c),e=c.proxy,r=c.ctx;h6=!1,a.beforeCreate&&F0(a.beforeCreate,c,"bc");const{data:i,computed:s,methods:n,watch:f,provide:l,inject:t,created:o,beforeMount:z,mounted:h,beforeUpdate:u,updated:S,activated:y,deactivated:R,beforeDestroy:C,beforeUnmount:d,destroyed:B,unmounted:w,render:$,renderTracked:Q,renderTriggered:i1,errorCaptured:x1,serverPrefetch:u1,expose:S1,inheritAttrs:e2,components:u2,directives:_1,filters:Q2}=a;if(t&&yt(t,r,null),n)for(const X in n){const Z=n[X];U(Z)&&(r[X]=Z.bind(e))}if(i){const X=i.call(e,e);r1(X)&&(c.data=b3(X))}if(h6=!0,s)for(const X in s){const Z=s[X],W1=U(Z)?Z.bind(e,e):U(Z.get)?Z.get.bind(e,e):F1,r2=!U(Z)&&U(Z.set)?Z.set.bind(e):F1,E1=t1({get:W1,set:r2});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>E1.value,set:C1=>E1.value=C1})}if(f)for(const X in f)x7(f[X],r,e,X);if(l){const X=U(l)?l.call(e):l;Reflect.ownKeys(X).forEach(Z=>{X3(Z,X[Z])})}o&&F0(o,c,"c");function o1(X,Z){q(Z)?Z.forEach(W1=>X(W1.bind(e))):Z&&X(Z.bind(e))}if(o1(Ht,z),o1(ut,h),o1(Vt,u),o1(pt,S),o1(zt,y),o1(vt,R),o1(gt,x1),o1(Lt,Q),o1(dt,i1),o1(Mt,d),o1(d7,w),o1(Ct,u1),q(S1))if(S1.length){const X=c.exposed||(c.exposed={});S1.forEach(Z=>{Object.defineProperty(X,Z,{get:()=>e[Z],set:W1=>e[Z]=W1})})}else c.exposed||(c.exposed={});$&&c.render===F1&&(c.render=$),e2!=null&&(c.inheritAttrs=e2),u2&&(c.components=u2),_1&&(c.directives=_1)}function yt(c,a,e=F1){q(c)&&(c=H6(c));for(const r in c){const i=c[r];let s;r1(i)?"default"in i?s=I1(i.from||r,i.default,!0):s=I1(i.from||r):s=I1(i),H1(s)?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:n=>s.value=n}):a[r]=s}}function F0(c,a,e){B1(q(c)?c.map(r=>r.bind(a.proxy)):c.bind(a.proxy),a,e)}function x7(c,a,e,r){const i=r.includes(".")?p7(e,r):()=>e[r];if(f1(c)){const s=a[c];U(s)&&s3(i,s)}else if(U(c))s3(i,c.bind(e));else if(r1(c))if(q(c))c.forEach(s=>x7(s,a,e,r));else{const s=U(c.handler)?c.handler.bind(e):a[c.handler];U(s)&&s3(i,s,c)}}function Q6(c){const a=c.type,{mixins:e,extends:r}=a,{mixins:i,optionsCache:s,config:{optionMergeStrategies:n}}=c.appContext,f=s.get(a);let l;return f?l=f:!i.length&&!e&&!r?l=a:(l={},i.length&&i.forEach(t=>s4(l,t,n,!0)),s4(l,a,n)),r1(a)&&s.set(a,l),l}function s4(c,a,e,r=!1){const{mixins:i,extends:s}=a;s&&s4(c,s,e,!0),i&&i.forEach(n=>s4(c,n,e,!0));for(const n in a)if(!(r&&n==="expose")){const f=wt[n]||e&&e[n];c[n]=f?f(c[n],a[n]):a[n]}return c}const wt={data:B0,props:R0,emits:R0,methods:r3,computed:r3,beforeCreate:V1,created:V1,beforeMount:V1,mounted:V1,beforeUpdate:V1,updated:V1,beforeDestroy:V1,beforeUnmount:V1,destroyed:V1,unmounted:V1,activated:V1,deactivated:V1,errorCaptured:V1,serverPrefetch:V1,components:r3,directives:r3,watch:kt,provide:B0,inject:At};function B0(c,a){return a?c?function(){return m1(U(c)?c.call(this,this):c,U(a)?a.call(this,this):a)}:a:c}function At(c,a){return r3(H6(c),H6(a))}function H6(c){if(q(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function V1(c,a){return c?[...new Set([].concat(c,a))]:a}function r3(c,a){return c?m1(Object.create(null),c,a):a}function R0(c,a){return c?q(c)&&q(a)?[...new Set([...c,...a])]:m1(Object.create(null),T0(c),T0(a??{})):a}function kt(c,a){if(!c)return a;if(!a)return c;const e=m1(Object.create(null),c);for(const r in a)e[r]=V1(c[r],a[r]);return e}function b7(){return{app:null,config:{isNativeTag:eo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pt=0;function Tt(c,a){return function(r,i=null){U(r)||(r=m1({},r)),i!=null&&!r1(i)&&(i=null);const s=b7(),n=new Set;let f=!1;const l=s.app={_uid:Pt++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:sm,get config(){return s.config},set config(t){},use(t,...o){return n.has(t)||(t&&U(t.install)?(n.add(t),t.install(l,...o)):U(t)&&(n.add(t),t(l,...o))),l},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),l},component(t,o){return o?(s.components[t]=o,l):s.components[t]},directive(t,o){return o?(s.directives[t]=o,l):s.directives[t]},mount(t,o,z){if(!f){const h=M1(r,i);return h.appContext=s,o&&a?a(h,t):c(h,t,z),f=!0,l._container=t,t.__vue_app__=l,i8(h.component)||h.component.proxy}},unmount(){f&&(c(null,l._container),delete l._container.__vue_app__)},provide(t,o){return s.provides[t]=o,l},runWithContext(t){n4=l;try{return t()}finally{n4=null}}};return l}}let n4=null;function X3(c,a){if(z1){let e=z1.provides;const r=z1.parent&&z1.parent.provides;r===e&&(e=z1.provides=Object.create(r)),e[c]=a}}function I1(c,a,e=!1){const r=z1||p1;if(r||n4){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:n4._context.provides;if(i&&c in i)return i[c];if(arguments.length>1)return e&&U(a)?a.call(r&&r.proxy):a}}function Ft(c,a,e,r=!1){const i={},s={};e4(s,g4,1),c.propsDefaults=Object.create(null),N7(c,a,i,s);for(const n in c.propsOptions[0])n in i||(i[n]=void 0);e?c.props=r?i:Go(i):c.type.props?c.props=i:c.props=s,c.attrs=s}function Bt(c,a,e,r){const{props:i,attrs:s,vnode:{patchFlag:n}}=c,f=W(i),[l]=c.propsOptions;let t=!1;if((r||n>0)&&!(n&16)){if(n&8){const o=c.vnode.dynamicProps;for(let z=0;z<o.length;z++){let h=o[z];if(M4(c.emitsOptions,h))continue;const u=a[h];if(l)if(G(s,h))u!==s[h]&&(s[h]=u,t=!0);else{const S=G1(h);i[S]=u6(l,f,S,u,c,!1)}else u!==s[h]&&(s[h]=u,t=!0)}}}else{N7(c,a,i,s)&&(t=!0);let o;for(const z in f)(!a||!G(a,z)&&((o=j2(z))===z||!G(a,o)))&&(l?e&&(e[z]!==void 0||e[o]!==void 0)&&(i[z]=u6(l,f,z,void 0,c,!0)):delete i[z]);if(s!==f)for(const z in s)(!a||!G(a,z))&&(delete s[z],t=!0)}t&&Y1(c,"set","$attrs")}function N7(c,a,e,r){const[i,s]=c.propsOptions;let n=!1,f;if(a)for(let l in a){if(Y3(l))continue;const t=a[l];let o;i&&G(i,o=G1(l))?!s||!s.includes(o)?e[o]=t:(f||(f={}))[o]=t:M4(c.emitsOptions,l)||(!(l in r)||t!==r[l])&&(r[l]=t,n=!0)}if(s){const l=W(e),t=f||e1;for(let o=0;o<s.length;o++){const z=s[o];e[z]=u6(i,l,z,t[z],c,!G(t,z))}}return n}function u6(c,a,e,r,i,s){const n=c[e];if(n!=null){const f=G(n,"default");if(f&&r===void 0){const l=n.default;if(n.type!==Function&&!n.skipFactory&&U(l)){const{propsDefaults:t}=i;e in t?r=t[e]:(I2(i),r=t[e]=l.call(null,a),b2())}else r=l}n[0]&&(s&&!f?r=!1:n[1]&&(r===""||r===j2(e))&&(r=!0))}return r}function S7(c,a,e=!1){const r=a.propsCache,i=r.get(c);if(i)return i;const s=c.props,n={},f=[];let l=!1;if(!U(c)){const o=z=>{l=!0;const[h,u]=S7(z,a,!0);m1(n,h),u&&f.push(...u)};!e&&a.mixins.length&&a.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}if(!s&&!l)return r1(c)&&r.set(c,_2),_2;if(q(s))for(let o=0;o<s.length;o++){const z=G1(s[o]);_0(z)&&(n[z]=e1)}else if(s)for(const o in s){const z=G1(o);if(_0(z)){const h=s[o],u=n[z]=q(h)||U(h)?{type:h}:m1({},h);if(u){const S=q0(Boolean,u.type),y=q0(String,u.type);u[0]=S>-1,u[1]=y<0||S<y,(S>-1||G(u,"default"))&&f.push(z)}}}const t=[n,f];return r1(c)&&r.set(c,t),t}function _0(c){return c[0]!=="$"}function E0(c){const a=c&&c.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:c===null?"null":""}function D0(c,a){return E0(c)===E0(a)}function q0(c,a){return q(a)?a.findIndex(e=>D0(e,c)):U(a)&&D0(a,c)?0:-1}const y7=c=>c[0]==="_"||c==="$stable",J6=c=>q(c)?c.map(O1):[O1(c)],Rt=(c,a,e)=>{if(a._n)return a;const r=it((...i)=>J6(a(...i)),e);return r._c=!1,r},w7=(c,a,e)=>{const r=c._ctx;for(const i in c){if(y7(i))continue;const s=c[i];if(U(s))a[i]=Rt(i,s,r);else if(s!=null){const n=J6(s);a[i]=()=>n}}},A7=(c,a)=>{const e=J6(a);c.slots.default=()=>e},_t=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=W(a),e4(a,"_",e)):w7(a,c.slots={})}else c.slots={},a&&A7(c,a);e4(c.slots,g4,1)},Et=(c,a,e)=>{const{vnode:r,slots:i}=c;let s=!0,n=e1;if(r.shapeFlag&32){const f=a._;f?e&&f===1?s=!1:(m1(i,a),!e&&f===1&&delete i._):(s=!a.$stable,w7(a,i)),n=a}else a&&(A7(c,a),n={default:1});if(s)for(const f in i)!y7(f)&&!(f in n)&&delete i[f]};function V6(c,a,e,r,i=!1){if(q(c)){c.forEach((h,u)=>V6(h,a&&(q(a)?a[u]:a),e,r,i));return}if(n3(r)&&!i)return;const s=r.shapeFlag&4?i8(r.component)||r.component.proxy:r.el,n=i?null:s,{i:f,r:l}=c,t=a&&a.r,o=f.refs===e1?f.refs={}:f.refs,z=f.setupState;if(t!=null&&t!==l&&(f1(t)?(o[t]=null,G(z,t)&&(z[t]=null)):H1(t)&&(t.value=null)),U(l))t2(l,f,12,[n,o]);else{const h=f1(l),u=H1(l);if(h||u){const S=()=>{if(c.f){const y=h?G(z,l)?z[l]:o[l]:l.value;i?q(y)&&R6(y,s):q(y)?y.includes(s)||y.push(s):h?(o[l]=[s],G(z,l)&&(z[l]=o[l])):(l.value=[s],c.k&&(o[c.k]=l.value))}else h?(o[l]=n,G(z,l)&&(z[l]=n)):u&&(l.value=n,c.k&&(o[c.k]=n))};n?(S.id=-1,L1(S,e)):S()}}}const L1=tt;function Dt(c){return qt(c)}function qt(c,a){const e=f6();e.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:n,createText:f,createComment:l,setText:t,setElementText:o,parentNode:z,nextSibling:h,setScopeId:u=F1,insertStaticContent:S}=c,y=(m,v,H,V=null,M=null,L=null,A=!1,x=null,b=!!v.dynamicChildren)=>{if(m===v)return;m&&!c3(m,v)&&(V=p(m),C1(m,M,L,!0),m=null),v.patchFlag===-2&&(b=!1,v.dynamicChildren=null);const{type:g,ref:E,shapeFlag:T}=v;switch(g){case L4:R(m,v,H,V);break;case z2:C(m,v,H,V);break;case Q3:m==null&&d(v,H,V,A);break;case A1:u2(m,v,H,V,M,L,A,x,b);break;default:T&1?$(m,v,H,V,M,L,A,x,b):T&6?_1(m,v,H,V,M,L,A,x,b):(T&64||T&128)&&g.process(m,v,H,V,M,L,A,x,b,N)}E!=null&&M&&V6(E,m&&m.ref,L,v||m,!v)},R=(m,v,H,V)=>{if(m==null)r(v.el=f(v.children),H,V);else{const M=v.el=m.el;v.children!==m.children&&t(M,v.children)}},C=(m,v,H,V)=>{m==null?r(v.el=l(v.children||""),H,V):v.el=m.el},d=(m,v,H,V)=>{[m.el,m.anchor]=S(m.children,v,H,V,m.el,m.anchor)},B=({el:m,anchor:v},H,V)=>{let M;for(;m&&m!==v;)M=h(m),r(m,H,V),m=M;r(v,H,V)},w=({el:m,anchor:v})=>{let H;for(;m&&m!==v;)H=h(m),i(m),m=H;i(v)},$=(m,v,H,V,M,L,A,x,b)=>{A=A||v.type==="svg",m==null?Q(v,H,V,M,L,A,x,b):u1(m,v,M,L,A,x,b)},Q=(m,v,H,V,M,L,A,x)=>{let b,g;const{type:E,props:T,shapeFlag:D,transition:O,dirs:I}=m;if(b=m.el=n(m.type,L,T&&T.is,T),D&8?o(b,m.children):D&16&&x1(m.children,b,null,V,M,L&&E!=="foreignObject",A,x),I&&V2(m,null,V,"created"),i1(b,m,m.scopeId,A,V),T){for(const Y in T)Y!=="value"&&!Y3(Y)&&s(b,Y,null,T[Y],L,m.children,V,M,v1);"value"in T&&s(b,"value",null,T.value),(g=T.onVnodeBeforeMount)&&q1(g,V,m)}I&&V2(m,null,V,"beforeMount");const J=(!M||M&&!M.pendingBranch)&&O&&!O.persisted;J&&O.beforeEnter(b),r(b,v,H),((g=T&&T.onVnodeMounted)||J||I)&&L1(()=>{g&&q1(g,V,m),J&&O.enter(b),I&&V2(m,null,V,"mounted")},M)},i1=(m,v,H,V,M)=>{if(H&&u(m,H),V)for(let L=0;L<V.length;L++)u(m,V[L]);if(M){let L=M.subTree;if(v===L){const A=M.vnode;i1(m,A,A.scopeId,A.slotScopeIds,M.parent)}}},x1=(m,v,H,V,M,L,A,x,b=0)=>{for(let g=b;g<m.length;g++){const E=m[g]=x?f2(m[g]):O1(m[g]);y(null,E,v,H,V,M,L,A,x)}},u1=(m,v,H,V,M,L,A)=>{const x=v.el=m.el;let{patchFlag:b,dynamicChildren:g,dirs:E}=v;b|=m.patchFlag&16;const T=m.props||e1,D=v.props||e1;let O;H&&p2(H,!1),(O=D.onVnodeBeforeUpdate)&&q1(O,H,v,m),E&&V2(v,m,H,"beforeUpdate"),H&&p2(H,!0);const I=M&&v.type!=="foreignObject";if(g?S1(m.dynamicChildren,g,x,H,V,I,L):A||Z(m,v,x,null,H,V,I,L,!1),b>0){if(b&16)e2(x,v,T,D,H,V,M);else if(b&2&&T.class!==D.class&&s(x,"class",null,D.class,M),b&4&&s(x,"style",T.style,D.style,M),b&8){const J=v.dynamicProps;for(let Y=0;Y<J.length;Y++){const n1=J[Y],y1=T[n1],k2=D[n1];(k2!==y1||n1==="value")&&s(x,n1,y1,k2,M,m.children,H,V,v1)}}b&1&&m.children!==v.children&&o(x,v.children)}else!A&&g==null&&e2(x,v,T,D,H,V,M);((O=D.onVnodeUpdated)||E)&&L1(()=>{O&&q1(O,H,v,m),E&&V2(v,m,H,"updated")},V)},S1=(m,v,H,V,M,L,A)=>{for(let x=0;x<v.length;x++){const b=m[x],g=v[x],E=b.el&&(b.type===A1||!c3(b,g)||b.shapeFlag&70)?z(b.el):H;y(b,g,E,null,V,M,L,A,!0)}},e2=(m,v,H,V,M,L,A)=>{if(H!==V){if(H!==e1)for(const x in H)!Y3(x)&&!(x in V)&&s(m,x,H[x],null,A,v.children,M,L,v1);for(const x in V){if(Y3(x))continue;const b=V[x],g=H[x];b!==g&&x!=="value"&&s(m,x,g,b,A,v.children,M,L,v1)}"value"in V&&s(m,"value",H.value,V.value)}},u2=(m,v,H,V,M,L,A,x,b)=>{const g=v.el=m?m.el:f(""),E=v.anchor=m?m.anchor:f("");let{patchFlag:T,dynamicChildren:D,slotScopeIds:O}=v;O&&(x=x?x.concat(O):O),m==null?(r(g,H,V),r(E,H,V),x1(v.children,H,E,M,L,A,x,b)):T>0&&T&64&&D&&m.dynamicChildren?(S1(m.dynamicChildren,D,H,M,L,A,x),(v.key!=null||M&&v===M.subTree)&&k7(m,v,!0)):Z(m,v,H,E,M,L,A,x,b)},_1=(m,v,H,V,M,L,A,x,b)=>{v.slotScopeIds=x,m==null?v.shapeFlag&512?M.ctx.activate(v,H,V,A,b):Q2(v,H,V,M,L,A,b):y2(m,v,b)},Q2=(m,v,H,V,M,L,A)=>{const x=m.component=Yt(m,V,M);if(M7(m)&&(x.ctx.renderer=N),Xt(x),x.asyncDep){if(M&&M.registerDep(x,o1),!m.el){const b=x.subTree=M1(z2);C(null,b,v,H)}return}o1(x,m,v,H,M,L,A)},y2=(m,v,H)=>{const V=v.component=m.component;if(ft(m,v,H))if(V.asyncDep&&!V.asyncResolved){X(V,v,H);return}else V.next=v,ct(V.update),V.update();else v.el=m.el,V.vnode=v},o1=(m,v,H,V,M,L,A)=>{const x=()=>{if(m.isMounted){let{next:E,bu:T,u:D,parent:O,vnode:I}=m,J=E,Y;p2(m,!1),E?(E.el=I.el,X(m,E,A)):E=I,T&&j4(T),(Y=E.props&&E.props.onVnodeBeforeUpdate)&&q1(Y,O,E,I),p2(m,!0);const n1=K4(m),y1=m.subTree;m.subTree=n1,y(y1,n1,z(y1.el),p(y1),m,M,L),E.el=n1.el,J===null&&lt(m,n1.el),D&&L1(D,M),(Y=E.props&&E.props.onVnodeUpdated)&&L1(()=>q1(Y,O,E,I),M)}else{let E;const{el:T,props:D}=v,{bm:O,m:I,parent:J}=m,Y=n3(v);if(p2(m,!1),O&&j4(O),!Y&&(E=D&&D.onVnodeBeforeMount)&&q1(E,J,v),p2(m,!0),T&&j){const n1=()=>{m.subTree=K4(m),j(T,m.subTree,m,M,null)};Y?v.type.__asyncLoader().then(()=>!m.isUnmounted&&n1()):n1()}else{const n1=m.subTree=K4(m);y(null,n1,H,V,m,M,L),v.el=n1.el}if(I&&L1(I,M),!Y&&(E=D&&D.onVnodeMounted)){const n1=v;L1(()=>q1(E,J,n1),M)}(v.shapeFlag&256||J&&n3(J.vnode)&&J.vnode.shapeFlag&256)&&m.a&&L1(m.a,M),m.isMounted=!0,v=H=V=null}},b=m.effect=new U6(x,()=>K6(g),m.scope),g=m.update=()=>b.run();g.id=m.uid,p2(m,!0),g()},X=(m,v,H)=>{v.component=m;const V=m.vnode.props;m.vnode=v,m.next=null,Bt(m,v.props,V,H),Et(m,v.children,H),K2(),A0(),Y2()},Z=(m,v,H,V,M,L,A,x,b=!1)=>{const g=m&&m.children,E=m?m.shapeFlag:0,T=v.children,{patchFlag:D,shapeFlag:O}=v;if(D>0){if(D&128){r2(g,T,H,V,M,L,A,x,b);return}else if(D&256){W1(g,T,H,V,M,L,A,x,b);return}}O&8?(E&16&&v1(g,M,L),T!==g&&o(H,T)):E&16?O&16?r2(g,T,H,V,M,L,A,x,b):v1(g,M,L,!0):(E&8&&o(H,""),O&16&&x1(T,H,V,M,L,A,x,b))},W1=(m,v,H,V,M,L,A,x,b)=>{m=m||_2,v=v||_2;const g=m.length,E=v.length,T=Math.min(g,E);let D;for(D=0;D<T;D++){const O=v[D]=b?f2(v[D]):O1(v[D]);y(m[D],O,H,null,M,L,A,x,b)}g>E?v1(m,M,L,!0,!1,T):x1(v,H,V,M,L,A,x,b,T)},r2=(m,v,H,V,M,L,A,x,b)=>{let g=0;const E=v.length;let T=m.length-1,D=E-1;for(;g<=T&&g<=D;){const O=m[g],I=v[g]=b?f2(v[g]):O1(v[g]);if(c3(O,I))y(O,I,H,null,M,L,A,x,b);else break;g++}for(;g<=T&&g<=D;){const O=m[T],I=v[D]=b?f2(v[D]):O1(v[D]);if(c3(O,I))y(O,I,H,null,M,L,A,x,b);else break;T--,D--}if(g>T){if(g<=D){const O=D+1,I=O<E?v[O].el:V;for(;g<=D;)y(null,v[g]=b?f2(v[g]):O1(v[g]),H,I,M,L,A,x,b),g++}}else if(g>D)for(;g<=T;)C1(m[g],M,L,!0),g++;else{const O=g,I=g,J=new Map;for(g=I;g<=D;g++){const b1=v[g]=b?f2(v[g]):O1(v[g]);b1.key!=null&&J.set(b1.key,g)}let Y,n1=0;const y1=D-I+1;let k2=!1,M0=0;const J2=new Array(y1);for(g=0;g<y1;g++)J2[g]=0;for(g=O;g<=T;g++){const b1=m[g];if(n1>=y1){C1(b1,M,L,!0);continue}let D1;if(b1.key!=null)D1=J.get(b1.key);else for(Y=I;Y<=D;Y++)if(J2[Y-I]===0&&c3(b1,v[Y])){D1=Y;break}D1===void 0?C1(b1,M,L,!0):(J2[D1-I]=g+1,D1>=M0?M0=D1:k2=!0,y(b1,v[D1],H,null,M,L,A,x,b),n1++)}const C0=k2?Ot(J2):_2;for(Y=C0.length-1,g=y1-1;g>=0;g--){const b1=I+g,D1=v[b1],d0=b1+1<E?v[b1+1].el:V;J2[g]===0?y(null,D1,H,d0,M,L,A,x,b):k2&&(Y<0||g!==C0[Y]?E1(D1,H,d0,2):Y--)}}},E1=(m,v,H,V,M=null)=>{const{el:L,type:A,transition:x,children:b,shapeFlag:g}=m;if(g&6){E1(m.component.subTree,v,H,V);return}if(g&128){m.suspense.move(v,H,V);return}if(g&64){A.move(m,v,H,N);return}if(A===A1){r(L,v,H);for(let T=0;T<b.length;T++)E1(b[T],v,H,V);r(m.anchor,v,H);return}if(A===Q3){B(m,v,H);return}if(V!==2&&g&1&&x)if(V===0)x.beforeEnter(L),r(L,v,H),L1(()=>x.enter(L),M);else{const{leave:T,delayLeave:D,afterLeave:O}=x,I=()=>r(L,v,H),J=()=>{T(L,()=>{I(),O&&O()})};D?D(L,I,J):J()}else r(L,v,H)},C1=(m,v,H,V=!1,M=!1)=>{const{type:L,props:A,ref:x,children:b,dynamicChildren:g,shapeFlag:E,patchFlag:T,dirs:D}=m;if(x!=null&&V6(x,null,H,m,!0),E&256){v.ctx.deactivate(m);return}const O=E&1&&D,I=!n3(m);let J;if(I&&(J=A&&A.onVnodeBeforeUnmount)&&q1(J,v,m),E&6)F3(m.component,H,V);else{if(E&128){m.suspense.unmount(H,V);return}O&&V2(m,null,v,"beforeUnmount"),E&64?m.type.remove(m,v,H,M,N,V):g&&(L!==A1||T>0&&T&64)?v1(g,v,H,!1,!0):(L===A1&&T&384||!M&&E&16)&&v1(b,v,H),V&&w2(m)}(I&&(J=A&&A.onVnodeUnmounted)||O)&&L1(()=>{J&&q1(J,v,m),O&&V2(m,null,v,"unmounted")},H)},w2=m=>{const{type:v,el:H,anchor:V,transition:M}=m;if(v===A1){A2(H,V);return}if(v===Q3){w(m);return}const L=()=>{i(H),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(m.shapeFlag&1&&M&&!M.persisted){const{leave:A,delayLeave:x}=M,b=()=>A(H,L);x?x(m.el,L,b):b()}else L()},A2=(m,v)=>{let H;for(;m!==v;)H=h(m),i(m),m=H;i(v)},F3=(m,v,H)=>{const{bum:V,scope:M,update:L,subTree:A,um:x}=m;V&&j4(V),M.stop(),L&&(L.active=!1,C1(A,m,v,H)),x&&L1(x,v),L1(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},v1=(m,v,H,V=!1,M=!1,L=0)=>{for(let A=L;A<m.length;A++)C1(m[A],v,H,V,M)},p=m=>m.shapeFlag&6?p(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el),P=(m,v,H)=>{m==null?v._vnode&&C1(v._vnode,null,null,!0):y(v._vnode||null,m,v,null,null,null,H),A0(),H7(),v._vnode=m},N={p:y,um:C1,m:E1,r:w2,mt:Q2,mc:x1,pc:Z,pbc:S1,n:p,o:c};let _,j;return a&&([_,j]=a(N)),{render:P,hydrate:_,createApp:Tt(P,_)}}function p2({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function k7(c,a,e=!1){const r=c.children,i=a.children;if(q(r)&&q(i))for(let s=0;s<r.length;s++){const n=r[s];let f=i[s];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=i[s]=f2(i[s]),f.el=n.el),e||k7(n,f)),f.type===L4&&(f.el=n.el)}}function Ot(c){const a=c.slice(),e=[0];let r,i,s,n,f;const l=c.length;for(r=0;r<l;r++){const t=c[r];if(t!==0){if(i=e[e.length-1],c[i]<t){a[r]=i,e.push(r);continue}for(s=0,n=e.length-1;s<n;)f=s+n>>1,c[e[f]]<t?s=f+1:n=f;t<c[e[s]]&&(s>0&&(a[r]=e[s-1]),e[s]=r)}}for(s=e.length,n=e[s-1];s-- >0;)e[s]=n,n=a[n];return e}const Ut=c=>c.__isTeleport,A1=Symbol.for("v-fgt"),L4=Symbol.for("v-txt"),z2=Symbol.for("v-cmt"),Q3=Symbol.for("v-stc"),l3=[];let P1=null;function c8(c=!1){l3.push(P1=c?null:[])}function $t(){l3.pop(),P1=l3[l3.length-1]||null}let V3=1;function O0(c){V3+=c}function P7(c){return c.dynamicChildren=V3>0?P1||_2:null,$t(),V3>0&&P1&&P1.push(c),c}function XJ(c,a,e,r,i,s){return P7(F7(c,a,e,r,i,s,!0))}function a8(c,a,e,r,i){return P7(M1(c,a,e,r,i,!0))}function f4(c){return c?c.__v_isVNode===!0:!1}function c3(c,a){return c.type===a.type&&c.key===a.key}const g4="__vInternal",T7=({key:c})=>c??null,J3=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?f1(c)||H1(c)||U(c)?{i:p1,r:c,k:a,f:!!e}:c:null);function F7(c,a=null,e=null,r=0,i=null,s=c===A1?0:1,n=!1,f=!1){const l={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&T7(a),ref:a&&J3(a),scopeId:C4,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:p1};return f?(e8(l,e),s&128&&c.normalize(l)):e&&(l.shapeFlag|=f1(e)?8:16),V3>0&&!n&&P1&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&P1.push(l),l}const M1=It;function It(c,a=null,e=null,r=0,i=null,s=!1){if((!c||c===xt)&&(c=z2),f4(c)){const f=$2(c,a,!0);return e&&e8(f,e),V3>0&&!s&&P1&&(f.shapeFlag&6?P1[P1.indexOf(c)]=f:P1.push(f)),f.patchFlag|=-2,f}if(em(c)&&(c=c.__vccOpts),a){a=Gt(a);let{class:f,style:l}=a;f&&!f1(f)&&(a.class=q6(f)),r1(l)&&(n7(l)&&!q(l)&&(l=m1({},l)),a.style=D6(l))}const n=f1(c)?1:ot(c)?128:Ut(c)?64:r1(c)?4:U(c)?2:0;return F7(c,a,e,r,i,n,s,!0)}function Gt(c){return c?n7(c)||g4 in c?m1({},c):c:null}function $2(c,a,e=!1){const{props:r,ref:i,patchFlag:s,children:n}=c,f=a?Zt(r||{},a):r;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:f,key:f&&T7(f),ref:a&&a.ref?e&&i?q(i)?i.concat(J3(a)):[i,J3(a)]:J3(a):i,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:n,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==A1?s===-1?16:s|16:s,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&$2(c.ssContent),ssFallback:c.ssFallback&&$2(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function Wt(c=" ",a=0){return M1(L4,null,c,a)}function QJ(c,a){const e=M1(Q3,null,c);return e.staticCount=a,e}function JJ(c="",a=!1){return a?(c8(),a8(z2,null,c)):M1(z2,null,c)}function O1(c){return c==null||typeof c=="boolean"?M1(z2):q(c)?M1(A1,null,c.slice()):typeof c=="object"?f2(c):M1(L4,null,String(c))}function f2(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:$2(c)}function e8(c,a){let e=0;const{shapeFlag:r}=c;if(a==null)a=null;else if(q(a))e=16;else if(typeof a=="object")if(r&65){const i=a.default;i&&(i._c&&(i._d=!1),e8(c,i()),i._c&&(i._d=!0));return}else{e=32;const i=a._;!i&&!(g4 in a)?a._ctx=p1:i===3&&p1&&(p1.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else U(a)?(a={default:a,_ctx:p1},e=32):(a=String(a),r&64?(e=16,a=[Wt(a)]):e=8);c.children=a,c.shapeFlag|=e}function Zt(...c){const a={};for(let e=0;e<c.length;e++){const r=c[e];for(const i in r)if(i==="class")a.class!==r.class&&(a.class=q6([a.class,r.class]));else if(i==="style")a.style=D6([a.style,r.style]);else if(v4(i)){const s=a[i],n=r[i];n&&s!==n&&!(q(s)&&s.includes(n))&&(a[i]=s?[].concat(s,n):n)}else i!==""&&(a[i]=r[i])}return a}function q1(c,a,e,r=null){B1(c,a,7,[e,r])}const jt=b7();let Kt=0;function Yt(c,a,e){const r=c.type,i=(a?a.appContext:c.appContext)||jt,s={uid:Kt++,vnode:c,type:r,parent:a,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ho(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:S7(r,i),emitsOptions:V7(r,i),emit:null,emitted:null,propsDefaults:e1,inheritAttrs:r.inheritAttrs,ctx:e1,data:e1,props:e1,attrs:e1,slots:e1,refs:e1,setupState:e1,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=a?a.root:s,s.emit=rt.bind(null,s),c.ce&&c.ce(s),s}let z1=null,r8,P2,U0="__VUE_INSTANCE_SETTERS__";(P2=f6()[U0])||(P2=f6()[U0]=[]),P2.push(c=>z1=c),r8=c=>{P2.length>1?P2.forEach(a=>a(c)):P2[0](c)};const I2=c=>{r8(c),c.scope.on()},b2=()=>{z1&&z1.scope.off(),r8(null)};function B7(c){return c.vnode.shapeFlag&4}let p3=!1;function Xt(c,a=!1){p3=a;const{props:e,children:r}=c.vnode,i=B7(c);Ft(c,e,i,a),_t(c,r);const s=i?Qt(c,a):void 0;return p3=!1,s}function Qt(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=f7(new Proxy(c.ctx,Nt));const{setup:r}=e;if(r){const i=c.setupContext=r.length>1?cm(c):null;I2(c),K2();const s=t2(r,c,0,[c.props,i]);if(Y2(),b2(),I5(s)){if(s.then(b2,b2),a)return s.then(n=>{$0(c,n,a)}).catch(n=>{p4(n,c,0)});c.asyncDep=s}else $0(c,s,a)}else R7(c,a)}function $0(c,a,e){U(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:r1(a)&&(c.setupState=m7(a)),R7(c,e)}let I0;function R7(c,a,e){const r=c.type;if(!c.render){if(!a&&I0&&!r.render){const i=r.template||Q6(c).template;if(i){const{isCustomElement:s,compilerOptions:n}=c.appContext.config,{delimiters:f,compilerOptions:l}=r,t=m1(m1({isCustomElement:s,delimiters:f},n),l);r.render=I0(i,t)}}c.render=r.render||F1}I2(c),K2(),St(c),Y2(),b2()}function Jt(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(a,e){return g1(c,"get","$attrs"),a[e]}}))}function cm(c){const a=e=>{c.exposed=e||{}};return{get attrs(){return Jt(c)},slots:c.slots,emit:c.emit,expose:a}}function i8(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(m7(f7(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in f3)return f3[e](c)},has(a,e){return e in a||e in f3}}))}function am(c,a=!0){return U(c)?c.displayName||c.name:c.name||a&&c.__name}function em(c){return U(c)&&"__vccOpts"in c}const t1=(c,a)=>Xo(c,a,p3);function s8(c,a,e){const r=arguments.length;return r===2?r1(a)&&!q(a)?f4(a)?M1(c,null,[a]):M1(c,a):M1(c,null,a):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&f4(e)&&(e=[e]),M1(c,a,e))}const rm=Symbol.for("v-scx"),im=()=>I1(rm),sm="3.3.4",nm="http://www.w3.org/2000/svg",C2=typeof document<"u"?document:null,G0=C2&&C2.createElement("template"),fm={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,r)=>{const i=a?C2.createElementNS(nm,c):C2.createElement(c,e?{is:e}:void 0);return c==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:c=>C2.createTextNode(c),createComment:c=>C2.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>C2.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,r,i,s){const n=e?e.previousSibling:a.lastChild;if(i&&(i===s||i.nextSibling))for(;a.insertBefore(i.cloneNode(!0),e),!(i===s||!(i=i.nextSibling)););else{G0.innerHTML=r?`<svg>${c}</svg>`:c;const f=G0.content;if(r){const l=f.firstChild;for(;l.firstChild;)f.appendChild(l.firstChild);f.removeChild(l)}a.insertBefore(f,e)}return[n?n.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}};function lm(c,a,e){const r=c._vtc;r&&(a=(a?[a,...r]:[...r]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}function om(c,a,e){const r=c.style,i=f1(e);if(e&&!i){if(a&&!f1(a))for(const s in a)e[s]==null&&p6(r,s,"");for(const s in e)p6(r,s,e[s])}else{const s=r.display;i?a!==e&&(r.cssText=e):a&&c.removeAttribute("style"),"_vod"in c&&(r.display=s)}}const W0=/\s*!important$/;function p6(c,a,e){if(q(e))e.forEach(r=>p6(c,a,r));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const r=tm(c,a);W0.test(e)?c.setProperty(j2(r),e.replace(W0,""),"important"):c[r]=e}}const Z0=["Webkit","Moz","ms"],X4={};function tm(c,a){const e=X4[a];if(e)return e;let r=G1(a);if(r!=="filter"&&r in c)return X4[a]=r;r=u4(r);for(let i=0;i<Z0.length;i++){const s=Z0[i]+r;if(s in c)return X4[a]=s}return a}const j0="http://www.w3.org/1999/xlink";function mm(c,a,e,r,i){if(r&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(j0,a.slice(6,a.length)):c.setAttributeNS(j0,a,e);else{const s=ho(a);e==null||s&&!Z5(e)?c.removeAttribute(a):c.setAttribute(a,s?"":e)}}function zm(c,a,e,r,i,s,n){if(a==="innerHTML"||a==="textContent"){r&&n(r,i,s),c[a]=e??"";return}const f=c.tagName;if(a==="value"&&f!=="PROGRESS"&&!f.includes("-")){c._value=e;const t=f==="OPTION"?c.getAttribute("value"):c.value,o=e??"";t!==o&&(c.value=o),e==null&&c.removeAttribute(a);return}let l=!1;if(e===""||e==null){const t=typeof c[a];t==="boolean"?e=Z5(e):e==null&&t==="string"?(e="",l=!0):t==="number"&&(e=0,l=!0)}try{c[a]=e}catch{}l&&c.removeAttribute(a)}function vm(c,a,e,r){c.addEventListener(a,e,r)}function hm(c,a,e,r){c.removeEventListener(a,e,r)}function Hm(c,a,e,r,i=null){const s=c._vei||(c._vei={}),n=s[a];if(r&&n)n.value=r;else{const[f,l]=um(a);if(r){const t=s[a]=Mm(r,i);vm(c,f,t,l)}else n&&(hm(c,f,n,l),s[a]=void 0)}}const K0=/(?:Once|Passive|Capture)$/;function um(c){let a;if(K0.test(c)){a={};let r;for(;r=c.match(K0);)c=c.slice(0,c.length-r[0].length),a[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):j2(c.slice(2)),a]}let Q4=0;const Vm=Promise.resolve(),pm=()=>Q4||(Vm.then(()=>Q4=0),Q4=Date.now());function Mm(c,a){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;B1(Cm(r,e.value),a,5,[r])};return e.value=c,e.attached=pm(),e}function Cm(c,a){if(q(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(r=>i=>!i._stopped&&r&&r(i))}else return a}const Y0=/^on[a-z]/,dm=(c,a,e,r,i=!1,s,n,f,l)=>{a==="class"?lm(c,r,i):a==="style"?om(c,e,r):v4(a)?B6(a)||Hm(c,a,e,r,n):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Lm(c,a,r,i))?zm(c,a,r,s,n,f,l):(a==="true-value"?c._trueValue=r:a==="false-value"&&(c._falseValue=r),mm(c,a,r,i))};function Lm(c,a,e,r){return r?!!(a==="innerHTML"||a==="textContent"||a in c&&Y0.test(a)&&U(e)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA"||Y0.test(a)&&f1(e)?!1:a in c}const gm=["ctrl","shift","alt","meta"],xm={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,a)=>gm.some(e=>c[`${e}Key`]&&!a.includes(e))},c11=(c,a)=>(e,...r)=>{for(let i=0;i<a.length;i++){const s=xm[a[i]];if(s&&s(e,a))return}return c(e,...r)},bm=m1({patchProp:dm},fm);let X0;function Nm(){return X0||(X0=Dt(bm))}const Sm=(...c)=>{const a=Nm().createApp(...c),{mount:e}=a;return a.mount=r=>{const i=ym(r);if(!i)return;const s=a._component;!U(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const n=e(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),n},a};function ym(c){return f1(c)?document.querySelector(c):c}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const T2=typeof window<"u";function wm(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const K=Object.assign;function J4(c,a){const e={};for(const r in a){const i=a[r];e[r]=R1(i)?i.map(c):c(i)}return e}const o3=()=>{},R1=Array.isArray,Am=/\/$/,km=c=>c.replace(Am,"");function c6(c,a,e="/"){let r,i={},s="",n="";const f=a.indexOf("#");let l=a.indexOf("?");return f<l&&f>=0&&(l=-1),l>-1&&(r=a.slice(0,l),s=a.slice(l+1,f>-1?f:a.length),i=c(s)),f>-1&&(r=r||a.slice(0,f),n=a.slice(f,a.length)),r=Bm(r??a,e),{fullPath:r+(s&&"?")+s+n,path:r,query:i,hash:n}}function Pm(c,a){const e=a.query?c(a.query):"";return a.path+(e&&"?")+e+(a.hash||"")}function Q0(c,a){return!a||!c.toLowerCase().startsWith(a.toLowerCase())?c:c.slice(a.length)||"/"}function Tm(c,a,e){const r=a.matched.length-1,i=e.matched.length-1;return r>-1&&r===i&&G2(a.matched[r],e.matched[i])&&_7(a.params,e.params)&&c(a.query)===c(e.query)&&a.hash===e.hash}function G2(c,a){return(c.aliasOf||c)===(a.aliasOf||a)}function _7(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(const e in c)if(!Fm(c[e],a[e]))return!1;return!0}function Fm(c,a){return R1(c)?J0(c,a):R1(a)?J0(a,c):c===a}function J0(c,a){return R1(a)?c.length===a.length&&c.every((e,r)=>e===a[r]):c.length===1&&c[0]===a}function Bm(c,a){if(c.startsWith("/"))return c;if(!c)return a;const e=a.split("/"),r=c.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=e.length-1,n,f;for(n=0;n<r.length;n++)if(f=r[n],f!==".")if(f==="..")s>1&&s--;else break;return e.slice(0,s).join("/")+"/"+r.slice(n-(n===r.length?1:0)).join("/")}var M3;(function(c){c.pop="pop",c.push="push"})(M3||(M3={}));var t3;(function(c){c.back="back",c.forward="forward",c.unknown=""})(t3||(t3={}));function Rm(c){if(!c)if(T2){const a=document.querySelector("base");c=a&&a.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),km(c)}const _m=/^[^#]+#/;function Em(c,a){return c.replace(_m,"#")+a}function Dm(c,a){const e=document.documentElement.getBoundingClientRect(),r=c.getBoundingClientRect();return{behavior:a.behavior,left:r.left-e.left-(a.left||0),top:r.top-e.top-(a.top||0)}}const x4=()=>({left:window.pageXOffset,top:window.pageYOffset});function qm(c){let a;if("el"in c){const e=c.el,r=typeof e=="string"&&e.startsWith("#"),i=typeof e=="string"?r?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!i)return;a=Dm(i,c)}else a=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function c5(c,a){return(history.state?history.state.position-a:-1)+c}const M6=new Map;function Om(c,a){M6.set(c,a)}function Um(c){const a=M6.get(c);return M6.delete(c),a}let $m=()=>location.protocol+"//"+location.host;function E7(c,a){const{pathname:e,search:r,hash:i}=a,s=c.indexOf("#");if(s>-1){let f=i.includes(c.slice(s))?c.slice(s).length:1,l=i.slice(f);return l[0]!=="/"&&(l="/"+l),Q0(l,"")}return Q0(e,c)+r+i}function Im(c,a,e,r){let i=[],s=[],n=null;const f=({state:h})=>{const u=E7(c,location),S=e.value,y=a.value;let R=0;if(h){if(e.value=u,a.value=h,n&&n===S){n=null;return}R=y?h.position-y.position:0}else r(u);i.forEach(C=>{C(e.value,S,{delta:R,type:M3.pop,direction:R?R>0?t3.forward:t3.back:t3.unknown})})};function l(){n=e.value}function t(h){i.push(h);const u=()=>{const S=i.indexOf(h);S>-1&&i.splice(S,1)};return s.push(u),u}function o(){const{history:h}=window;h.state&&h.replaceState(K({},h.state,{scroll:x4()}),"")}function z(){for(const h of s)h();s=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",o,{passive:!0}),{pauseListeners:l,listen:t,destroy:z}}function a5(c,a,e,r=!1,i=!1){return{back:c,current:a,forward:e,replaced:r,position:window.history.length,scroll:i?x4():null}}function Gm(c){const{history:a,location:e}=window,r={value:E7(c,e)},i={value:a.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function s(l,t,o){const z=c.indexOf("#"),h=z>-1?(e.host&&document.querySelector("base")?c:c.slice(z))+l:$m()+c+l;try{a[o?"replaceState":"pushState"](t,"",h),i.value=t}catch(u){console.error(u),e[o?"replace":"assign"](h)}}function n(l,t){const o=K({},a.state,a5(i.value.back,l,i.value.forward,!0),t,{position:i.value.position});s(l,o,!0),r.value=l}function f(l,t){const o=K({},i.value,a.state,{forward:l,scroll:x4()});s(o.current,o,!0);const z=K({},a5(r.value,l,null),{position:o.position+1},t);s(l,z,!1),r.value=l}return{location:r,state:i,push:f,replace:n}}function Wm(c){c=Rm(c);const a=Gm(c),e=Im(c,a.state,a.location,a.replace);function r(s,n=!0){n||e.pauseListeners(),history.go(s)}const i=K({location:"",base:c,go:r,createHref:Em.bind(null,c)},a,e);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>a.state.value}),i}function Zm(c){return typeof c=="string"||c&&typeof c=="object"}function D7(c){return typeof c=="string"||typeof c=="symbol"}const s2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},q7=Symbol("");var e5;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(e5||(e5={}));function W2(c,a){return K(new Error,{type:c,[q7]:!0},a)}function Z1(c,a){return c instanceof Error&&q7 in c&&(a==null||!!(c.type&a))}const r5="[^/]+?",jm={sensitive:!1,strict:!1,start:!0,end:!0},Km=/[.+*?^${}()[\]/\\]/g;function Ym(c,a){const e=K({},jm,a),r=[];let i=e.start?"^":"";const s=[];for(const t of c){const o=t.length?[]:[90];e.strict&&!t.length&&(i+="/");for(let z=0;z<t.length;z++){const h=t[z];let u=40+(e.sensitive?.25:0);if(h.type===0)z||(i+="/"),i+=h.value.replace(Km,"\\$&"),u+=40;else if(h.type===1){const{value:S,repeatable:y,optional:R,regexp:C}=h;s.push({name:S,repeatable:y,optional:R});const d=C||r5;if(d!==r5){u+=10;try{new RegExp(`(${d})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${S}" (${d}): `+w.message)}}let B=y?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;z||(B=R&&t.length<2?`(?:/${B})`:"/"+B),R&&(B+="?"),i+=B,u+=20,R&&(u+=-8),y&&(u+=-20),d===".*"&&(u+=-50)}o.push(u)}r.push(o)}if(e.strict&&e.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}e.strict||(i+="/?"),e.end?i+="$":e.strict&&(i+="(?:/|$)");const n=new RegExp(i,e.sensitive?"":"i");function f(t){const o=t.match(n),z={};if(!o)return null;for(let h=1;h<o.length;h++){const u=o[h]||"",S=s[h-1];z[S.name]=u&&S.repeatable?u.split("/"):u}return z}function l(t){let o="",z=!1;for(const h of c){(!z||!o.endsWith("/"))&&(o+="/"),z=!1;for(const u of h)if(u.type===0)o+=u.value;else if(u.type===1){const{value:S,repeatable:y,optional:R}=u,C=S in t?t[S]:"";if(R1(C)&&!y)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const d=R1(C)?C.join("/"):C;if(!d)if(R)h.length<2&&(o.endsWith("/")?o=o.slice(0,-1):z=!0);else throw new Error(`Missing required param "${S}"`);o+=d}}return o||"/"}return{re:n,score:r,keys:s,parse:f,stringify:l}}function Xm(c,a){let e=0;for(;e<c.length&&e<a.length;){const r=a[e]-c[e];if(r)return r;e++}return c.length<a.length?c.length===1&&c[0]===40+40?-1:1:c.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function Qm(c,a){let e=0;const r=c.score,i=a.score;for(;e<r.length&&e<i.length;){const s=Xm(r[e],i[e]);if(s)return s;e++}if(Math.abs(i.length-r.length)===1){if(i5(r))return 1;if(i5(i))return-1}return i.length-r.length}function i5(c){const a=c[c.length-1];return c.length>0&&a[a.length-1]<0}const Jm={type:0,value:""},cz=/[a-zA-Z0-9_]/;function az(c){if(!c)return[[]];if(c==="/")return[[Jm]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function a(u){throw new Error(`ERR (${e})/"${t}": ${u}`)}let e=0,r=e;const i=[];let s;function n(){s&&i.push(s),s=[]}let f=0,l,t="",o="";function z(){t&&(e===0?s.push({type:0,value:t}):e===1||e===2||e===3?(s.length>1&&(l==="*"||l==="+")&&a(`A repeatable param (${t}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:t,regexp:o,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):a("Invalid state to consume buffer"),t="")}function h(){t+=l}for(;f<c.length;){if(l=c[f++],l==="\\"&&e!==2){r=e,e=4;continue}switch(e){case 0:l==="/"?(t&&z(),n()):l===":"?(z(),e=1):h();break;case 4:h(),e=r;break;case 1:l==="("?e=2:cz.test(l)?h():(z(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&f--);break;case 2:l===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+l:e=3:o+=l;break;case 3:z(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&f--,o="";break;default:a("Unknown state");break}}return e===2&&a(`Unfinished custom RegExp for param "${t}"`),z(),n(),i}function ez(c,a,e){const r=Ym(az(c.path),e),i=K(r,{record:c,parent:a,children:[],alias:[]});return a&&!i.record.aliasOf==!a.record.aliasOf&&a.children.push(i),i}function rz(c,a){const e=[],r=new Map;a=f5({strict:!1,end:!0,sensitive:!1},a);function i(o){return r.get(o)}function s(o,z,h){const u=!h,S=iz(o);S.aliasOf=h&&h.record;const y=f5(a,o),R=[S];if("alias"in o){const B=typeof o.alias=="string"?[o.alias]:o.alias;for(const w of B)R.push(K({},S,{components:h?h.record.components:S.components,path:w,aliasOf:h?h.record:S}))}let C,d;for(const B of R){const{path:w}=B;if(z&&w[0]!=="/"){const $=z.record.path,Q=$[$.length-1]==="/"?"":"/";B.path=z.record.path+(w&&Q+w)}if(C=ez(B,z,y),h?h.alias.push(C):(d=d||C,d!==C&&d.alias.push(C),u&&o.name&&!n5(C)&&n(o.name)),S.children){const $=S.children;for(let Q=0;Q<$.length;Q++)s($[Q],C,h&&h.children[Q])}h=h||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&l(C)}return d?()=>{n(d)}:o3}function n(o){if(D7(o)){const z=r.get(o);z&&(r.delete(o),e.splice(e.indexOf(z),1),z.children.forEach(n),z.alias.forEach(n))}else{const z=e.indexOf(o);z>-1&&(e.splice(z,1),o.record.name&&r.delete(o.record.name),o.children.forEach(n),o.alias.forEach(n))}}function f(){return e}function l(o){let z=0;for(;z<e.length&&Qm(o,e[z])>=0&&(o.record.path!==e[z].record.path||!O7(o,e[z]));)z++;e.splice(z,0,o),o.record.name&&!n5(o)&&r.set(o.record.name,o)}function t(o,z){let h,u={},S,y;if("name"in o&&o.name){if(h=r.get(o.name),!h)throw W2(1,{location:o});y=h.record.name,u=K(s5(z.params,h.keys.filter(d=>!d.optional).map(d=>d.name)),o.params&&s5(o.params,h.keys.map(d=>d.name))),S=h.stringify(u)}else if("path"in o)S=o.path,h=e.find(d=>d.re.test(S)),h&&(u=h.parse(S),y=h.record.name);else{if(h=z.name?r.get(z.name):e.find(d=>d.re.test(z.path)),!h)throw W2(1,{location:o,currentLocation:z});y=h.record.name,u=K({},z.params,o.params),S=h.stringify(u)}const R=[];let C=h;for(;C;)R.unshift(C.record),C=C.parent;return{name:y,path:S,params:u,matched:R,meta:nz(R)}}return c.forEach(o=>s(o)),{addRoute:s,resolve:t,removeRoute:n,getRoutes:f,getRecordMatcher:i}}function s5(c,a){const e={};for(const r of a)r in c&&(e[r]=c[r]);return e}function iz(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:sz(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function sz(c){const a={},e=c.props||!1;if("component"in c)a.default=e;else for(const r in c.components)a[r]=typeof e=="boolean"?e:e[r];return a}function n5(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function nz(c){return c.reduce((a,e)=>K(a,e.meta),{})}function f5(c,a){const e={};for(const r in c)e[r]=r in a?a[r]:c[r];return e}function O7(c,a){return a.children.some(e=>e===c||O7(c,e))}const U7=/#/g,fz=/&/g,lz=/\//g,oz=/=/g,tz=/\?/g,$7=/\+/g,mz=/%5B/g,zz=/%5D/g,I7=/%5E/g,vz=/%60/g,G7=/%7B/g,hz=/%7C/g,W7=/%7D/g,Hz=/%20/g;function n8(c){return encodeURI(""+c).replace(hz,"|").replace(mz,"[").replace(zz,"]")}function uz(c){return n8(c).replace(G7,"{").replace(W7,"}").replace(I7,"^")}function C6(c){return n8(c).replace($7,"%2B").replace(Hz,"+").replace(U7,"%23").replace(fz,"%26").replace(vz,"`").replace(G7,"{").replace(W7,"}").replace(I7,"^")}function Vz(c){return C6(c).replace(oz,"%3D")}function pz(c){return n8(c).replace(U7,"%23").replace(tz,"%3F")}function Mz(c){return c==null?"":pz(c).replace(lz,"%2F")}function l4(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function Cz(c){const a={};if(c===""||c==="?")return a;const r=(c[0]==="?"?c.slice(1):c).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace($7," "),n=s.indexOf("="),f=l4(n<0?s:s.slice(0,n)),l=n<0?null:l4(s.slice(n+1));if(f in a){let t=a[f];R1(t)||(t=a[f]=[t]),t.push(l)}else a[f]=l}return a}function l5(c){let a="";for(let e in c){const r=c[e];if(e=Vz(e),r==null){r!==void 0&&(a+=(a.length?"&":"")+e);continue}(R1(r)?r.map(s=>s&&C6(s)):[r&&C6(r)]).forEach(s=>{s!==void 0&&(a+=(a.length?"&":"")+e,s!=null&&(a+="="+s))})}return a}function dz(c){const a={};for(const e in c){const r=c[e];r!==void 0&&(a[e]=R1(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return a}const Lz=Symbol(""),o5=Symbol(""),b4=Symbol(""),Z7=Symbol(""),d6=Symbol("");function a3(){let c=[];function a(r){return c.push(r),()=>{const i=c.indexOf(r);i>-1&&c.splice(i,1)}}function e(){c=[]}return{add:a,list:()=>c,reset:e}}function l2(c,a,e,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((n,f)=>{const l=z=>{z===!1?f(W2(4,{from:e,to:a})):z instanceof Error?f(z):Zm(z)?f(W2(2,{from:a,to:z})):(s&&r.enterCallbacks[i]===s&&typeof z=="function"&&s.push(z),n())},t=c.call(r&&r.instances[i],a,e,l);let o=Promise.resolve(t);c.length<3&&(o=o.then(l)),o.catch(z=>f(z))})}function a6(c,a,e,r){const i=[];for(const s of c)for(const n in s.components){let f=s.components[n];if(!(a!=="beforeRouteEnter"&&!s.instances[n]))if(gz(f)){const t=(f.__vccOpts||f)[a];t&&i.push(l2(t,e,r,s,n))}else{let l=f();i.push(()=>l.then(t=>{if(!t)return Promise.reject(new Error(`Couldn't resolve component "${n}" at "${s.path}"`));const o=wm(t)?t.default:t;s.components[n]=o;const h=(o.__vccOpts||o)[a];return h&&l2(h,e,r,s,n)()}))}}return i}function gz(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function t5(c){const a=I1(b4),e=I1(Z7),r=t1(()=>a.resolve(x2(c.to))),i=t1(()=>{const{matched:l}=r.value,{length:t}=l,o=l[t-1],z=e.matched;if(!o||!z.length)return-1;const h=z.findIndex(G2.bind(null,o));if(h>-1)return h;const u=m5(l[t-2]);return t>1&&m5(o)===u&&z[z.length-1].path!==u?z.findIndex(G2.bind(null,l[t-2])):h}),s=t1(()=>i.value>-1&&Sz(e.params,r.value.params)),n=t1(()=>i.value>-1&&i.value===e.matched.length-1&&_7(e.params,r.value.params));function f(l={}){return Nz(l)?a[x2(c.replace)?"replace":"push"](x2(c.to)).catch(o3):Promise.resolve()}return{route:r,href:t1(()=>r.value.href),isActive:s,isExactActive:n,navigate:f}}const xz=X6({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:t5,setup(c,{slots:a}){const e=b3(t5(c)),{options:r}=I1(b4),i=t1(()=>({[z5(c.activeClass,r.linkActiveClass,"router-link-active")]:e.isActive,[z5(c.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const s=a.default&&a.default(e);return c.custom?s:s8("a",{"aria-current":e.isExactActive?c.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:i.value},s)}}}),bz=xz;function Nz(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const a=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return c.preventDefault&&c.preventDefault(),!0}}function Sz(c,a){for(const e in a){const r=a[e],i=c[e];if(typeof r=="string"){if(r!==i)return!1}else if(!R1(i)||i.length!==r.length||r.some((s,n)=>s!==i[n]))return!1}return!0}function m5(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const z5=(c,a,e)=>c??a??e,yz=X6({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:a,slots:e}){const r=I1(d6),i=t1(()=>c.route||r.value),s=I1(o5,0),n=t1(()=>{let t=x2(s);const{matched:o}=i.value;let z;for(;(z=o[t])&&!z.components;)t++;return t}),f=t1(()=>i.value.matched[n.value]);X3(o5,t1(()=>n.value+1)),X3(Lz,f),X3(d6,i);const l=Wo();return s3(()=>[l.value,f.value,c.name],([t,o,z],[h,u,S])=>{o&&(o.instances[z]=t,u&&u!==o&&t&&t===h&&(o.leaveGuards.size||(o.leaveGuards=u.leaveGuards),o.updateGuards.size||(o.updateGuards=u.updateGuards))),t&&o&&(!u||!G2(o,u)||!h)&&(o.enterCallbacks[z]||[]).forEach(y=>y(t))},{flush:"post"}),()=>{const t=i.value,o=c.name,z=f.value,h=z&&z.components[o];if(!h)return v5(e.default,{Component:h,route:t});const u=z.props[o],S=u?u===!0?t.params:typeof u=="function"?u(t):u:null,R=s8(h,K({},S,a,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(z.instances[o]=null)},ref:l}));return v5(e.default,{Component:R,route:t})||R}}});function v5(c,a){if(!c)return null;const e=c(a);return e.length===1?e[0]:e}const j7=yz;function wz(c){const a=rz(c.routes,c),e=c.parseQuery||Cz,r=c.stringifyQuery||l5,i=c.history,s=a3(),n=a3(),f=a3(),l=Zo(s2);let t=s2;T2&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=J4.bind(null,p=>""+p),z=J4.bind(null,Mz),h=J4.bind(null,l4);function u(p,P){let N,_;return D7(p)?(N=a.getRecordMatcher(p),_=P):_=p,a.addRoute(_,N)}function S(p){const P=a.getRecordMatcher(p);P&&a.removeRoute(P)}function y(){return a.getRoutes().map(p=>p.record)}function R(p){return!!a.getRecordMatcher(p)}function C(p,P){if(P=K({},P||l.value),typeof p=="string"){const H=c6(e,p,P.path),V=a.resolve({path:H.path},P),M=i.createHref(H.fullPath);return K(H,V,{params:h(V.params),hash:l4(H.hash),redirectedFrom:void 0,href:M})}let N;if("path"in p)N=K({},p,{path:c6(e,p.path,P.path).path});else{const H=K({},p.params);for(const V in H)H[V]==null&&delete H[V];N=K({},p,{params:z(H)}),P.params=z(P.params)}const _=a.resolve(N,P),j=p.hash||"";_.params=o(h(_.params));const m=Pm(r,K({},p,{hash:uz(j),path:_.path})),v=i.createHref(m);return K({fullPath:m,hash:j,query:r===l5?dz(p.query):p.query||{}},_,{redirectedFrom:void 0,href:v})}function d(p){return typeof p=="string"?c6(e,p,l.value.path):K({},p)}function B(p,P){if(t!==p)return W2(8,{from:P,to:p})}function w(p){return i1(p)}function $(p){return w(K(d(p),{replace:!0}))}function Q(p){const P=p.matched[p.matched.length-1];if(P&&P.redirect){const{redirect:N}=P;let _=typeof N=="function"?N(p):N;return typeof _=="string"&&(_=_.includes("?")||_.includes("#")?_=d(_):{path:_},_.params={}),K({query:p.query,hash:p.hash,params:"path"in _?{}:p.params},_)}}function i1(p,P){const N=t=C(p),_=l.value,j=p.state,m=p.force,v=p.replace===!0,H=Q(N);if(H)return i1(K(d(H),{state:typeof H=="object"?K({},j,H.state):j,force:m,replace:v}),P||N);const V=N;V.redirectedFrom=P;let M;return!m&&Tm(r,_,N)&&(M=W2(16,{to:V,from:_}),E1(_,_,!0,!1)),(M?Promise.resolve(M):S1(V,_)).catch(L=>Z1(L)?Z1(L,2)?L:r2(L):Z(L,V,_)).then(L=>{if(L){if(Z1(L,2))return i1(K({replace:v},d(L.to),{state:typeof L.to=="object"?K({},j,L.to.state):j,force:m}),P||V)}else L=u2(V,_,!0,v,j);return e2(V,_,L),L})}function x1(p,P){const N=B(p,P);return N?Promise.reject(N):Promise.resolve()}function u1(p){const P=A2.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(p):p()}function S1(p,P){let N;const[_,j,m]=Az(p,P);N=a6(_.reverse(),"beforeRouteLeave",p,P);for(const H of _)H.leaveGuards.forEach(V=>{N.push(l2(V,p,P))});const v=x1.bind(null,p,P);return N.push(v),v1(N).then(()=>{N=[];for(const H of s.list())N.push(l2(H,p,P));return N.push(v),v1(N)}).then(()=>{N=a6(j,"beforeRouteUpdate",p,P);for(const H of j)H.updateGuards.forEach(V=>{N.push(l2(V,p,P))});return N.push(v),v1(N)}).then(()=>{N=[];for(const H of p.matched)if(H.beforeEnter&&!P.matched.includes(H))if(R1(H.beforeEnter))for(const V of H.beforeEnter)N.push(l2(V,p,P));else N.push(l2(H.beforeEnter,p,P));return N.push(v),v1(N)}).then(()=>(p.matched.forEach(H=>H.enterCallbacks={}),N=a6(m,"beforeRouteEnter",p,P),N.push(v),v1(N))).then(()=>{N=[];for(const H of n.list())N.push(l2(H,p,P));return N.push(v),v1(N)}).catch(H=>Z1(H,8)?H:Promise.reject(H))}function e2(p,P,N){for(const _ of f.list())u1(()=>_(p,P,N))}function u2(p,P,N,_,j){const m=B(p,P);if(m)return m;const v=P===s2,H=T2?history.state:{};N&&(_||v?i.replace(p.fullPath,K({scroll:v&&H&&H.scroll},j)):i.push(p.fullPath,j)),l.value=p,E1(p,P,N,v),r2()}let _1;function Q2(){_1||(_1=i.listen((p,P,N)=>{if(!F3.listening)return;const _=C(p),j=Q(_);if(j){i1(K(j,{replace:!0}),_).catch(o3);return}t=_;const m=l.value;T2&&Om(c5(m.fullPath,N.delta),x4()),S1(_,m).catch(v=>Z1(v,12)?v:Z1(v,2)?(i1(v.to,_).then(H=>{Z1(H,20)&&!N.delta&&N.type===M3.pop&&i.go(-1,!1)}).catch(o3),Promise.reject()):(N.delta&&i.go(-N.delta,!1),Z(v,_,m))).then(v=>{v=v||u2(_,m,!1),v&&(N.delta&&!Z1(v,8)?i.go(-N.delta,!1):N.type===M3.pop&&Z1(v,20)&&i.go(-1,!1)),e2(_,m,v)}).catch(o3)}))}let y2=a3(),o1=a3(),X;function Z(p,P,N){r2(p);const _=o1.list();return _.length?_.forEach(j=>j(p,P,N)):console.error(p),Promise.reject(p)}function W1(){return X&&l.value!==s2?Promise.resolve():new Promise((p,P)=>{y2.add([p,P])})}function r2(p){return X||(X=!p,Q2(),y2.list().forEach(([P,N])=>p?N(p):P()),y2.reset()),p}function E1(p,P,N,_){const{scrollBehavior:j}=c;if(!T2||!j)return Promise.resolve();const m=!N&&Um(c5(p.fullPath,0))||(_||!N)&&history.state&&history.state.scroll||null;return v7().then(()=>j(p,P,m)).then(v=>v&&qm(v)).catch(v=>Z(v,p,P))}const C1=p=>i.go(p);let w2;const A2=new Set,F3={currentRoute:l,listening:!0,addRoute:u,removeRoute:S,hasRoute:R,getRoutes:y,resolve:C,options:c,push:w,replace:$,go:C1,back:()=>C1(-1),forward:()=>C1(1),beforeEach:s.add,beforeResolve:n.add,afterEach:f.add,onError:o1.add,isReady:W1,install(p){const P=this;p.component("RouterLink",bz),p.component("RouterView",j7),p.config.globalProperties.$router=P,Object.defineProperty(p.config.globalProperties,"$route",{enumerable:!0,get:()=>x2(l)}),T2&&!w2&&l.value===s2&&(w2=!0,w(i.location).catch(j=>{}));const N={};for(const j in s2)N[j]=t1(()=>l.value[j]);p.provide(b4,P),p.provide(Z7,b3(N)),p.provide(d6,l);const _=p.unmount;A2.add(p),p.unmount=function(){A2.delete(p),A2.size<1&&(t=s2,_1&&_1(),_1=null,l.value=s2,w2=!1,X=!1),_()}}};function v1(p){return p.reduce((P,N)=>P.then(()=>u1(N)),Promise.resolve())}return F3}function Az(c,a){const e=[],r=[],i=[],s=Math.max(a.matched.length,c.matched.length);for(let n=0;n<s;n++){const f=a.matched[n];f&&(c.matched.find(t=>G2(t,f))?r.push(f):e.push(f));const l=c.matched[n];l&&(a.matched.find(t=>G2(t,l))||i.push(l))}return[e,r,i]}function a11(){return I1(b4)}function h5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),e.push.apply(e,r)}return e}function k(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?h5(Object(e),!0).forEach(function(r){l1(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):h5(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function o4(c){"@babel/helpers - typeof";return o4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},o4(c)}function kz(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function H5(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function Pz(c,a,e){return a&&H5(c.prototype,a),e&&H5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function l1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function f8(c,a){return Fz(c)||Rz(c,a)||K7(c,a)||Ez()}function N3(c){return Tz(c)||Bz(c)||K7(c)||_z()}function Tz(c){if(Array.isArray(c))return L6(c)}function Fz(c){if(Array.isArray(c))return c}function Bz(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Rz(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],i=!0,s=!1,n,f;try{for(e=e.call(c);!(i=(n=e.next()).done)&&(r.push(n.value),!(a&&r.length===a));i=!0);}catch(l){s=!0,f=l}finally{try{!i&&e.return!=null&&e.return()}finally{if(s)throw f}}return r}}function K7(c,a){if(c){if(typeof c=="string")return L6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return L6(c,a)}}function L6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function _z(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ez(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var u5=function(){},l8={},Y7={},X7=null,Q7={mark:u5,measure:u5};try{typeof window<"u"&&(l8=window),typeof document<"u"&&(Y7=document),typeof MutationObserver<"u"&&(X7=MutationObserver),typeof performance<"u"&&(Q7=performance)}catch{}var Dz=l8.navigator||{},V5=Dz.userAgent,p5=V5===void 0?"":V5,v2=l8,a1=Y7,M5=X7,O3=Q7;v2.document;var a2=!!a1.documentElement&&!!a1.head&&typeof a1.addEventListener=="function"&&typeof a1.createElement=="function",J7=~p5.indexOf("MSIE")||~p5.indexOf("Trident/"),U3,$3,I3,G3,W3,X1="___FONT_AWESOME___",g6=16,c9="fa",a9="svg-inline--fa",N2="data-fa-i2svg",x6="data-fa-pseudo-element",qz="data-fa-pseudo-element-pending",o8="data-prefix",t8="data-icon",C5="fontawesome-i2svg",Oz="async",Uz=["HTML","HEAD","STYLE","SCRIPT"],e9=function(){try{return!0}catch{return!1}}(),c1="classic",s1="sharp",m8=[c1,s1];function S3(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[c1]}})}var C3=S3((U3={},l1(U3,c1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),l1(U3,s1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),U3)),d3=S3(($3={},l1($3,c1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),l1($3,s1,{solid:"fass",regular:"fasr",light:"fasl"}),$3)),L3=S3((I3={},l1(I3,c1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),l1(I3,s1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),I3)),$z=S3((G3={},l1(G3,c1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),l1(G3,s1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),G3)),Iz=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,r9="fa-layers-text",Gz=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Wz=S3((W3={},l1(W3,c1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),l1(W3,s1,{900:"fass",400:"fasr",300:"fasl"}),W3)),i9=[1,2,3,4,5,6,7,8,9,10],Zz=i9.concat([11,12,13,14,15,16,17,18,19,20]),jz=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],d2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},g3=new Set;Object.keys(d3[c1]).map(g3.add.bind(g3));Object.keys(d3[s1]).map(g3.add.bind(g3));var Kz=[].concat(m8,N3(g3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",d2.GROUP,d2.SWAP_OPACITY,d2.PRIMARY,d2.SECONDARY]).concat(i9.map(function(c){return"".concat(c,"x")})).concat(Zz.map(function(c){return"w-".concat(c)})),m3=v2.FontAwesomeConfig||{};function Yz(c){var a=a1.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Xz(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(a1&&typeof a1.querySelector=="function"){var Qz=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Qz.forEach(function(c){var a=f8(c,2),e=a[0],r=a[1],i=Xz(Yz(e));i!=null&&(m3[r]=i)})}var s9={styleDefault:"solid",familyDefault:"classic",cssPrefix:c9,replacementClass:a9,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};m3.familyPrefix&&(m3.cssPrefix=m3.familyPrefix);var Z2=k(k({},s9),m3);Z2.autoReplaceSvg||(Z2.observeMutations=!1);var F={};Object.keys(s9).forEach(function(c){Object.defineProperty(F,c,{enumerable:!0,set:function(e){Z2[c]=e,z3.forEach(function(r){return r(F)})},get:function(){return Z2[c]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(a){Z2.cssPrefix=a,z3.forEach(function(e){return e(F)})},get:function(){return Z2.cssPrefix}});v2.FontAwesomeConfig=F;var z3=[];function Jz(c){return z3.push(c),function(){z3.splice(z3.indexOf(c),1)}}var n2=g6,$1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function cv(c){if(!(!c||!a2)){var a=a1.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=a1.head.childNodes,r=null,i=e.length-1;i>-1;i--){var s=e[i],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=s)}return a1.head.insertBefore(a,r),c}}var av="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function x3(){for(var c=12,a="";c-- >0;)a+=av[Math.random()*62|0];return a}function X2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function z8(c){return c.classList?X2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function n9(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ev(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(n9(c[e]),'" ')},"").trim()}function N4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function v8(c){return c.size!==$1.size||c.x!==$1.x||c.y!==$1.y||c.rotate!==$1.rotate||c.flipX||c.flipY}function rv(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,i={transform:"translate(".concat(e/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(s," ").concat(n," ").concat(f)},t={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:t}}function iv(c){var a=c.transform,e=c.width,r=e===void 0?g6:e,i=c.height,s=i===void 0?g6:i,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&J7?l+="translate(".concat(a.x/n2-r/2,"em, ").concat(a.y/n2-s/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/n2,"em), calc(-50% + ").concat(a.y/n2,"em)) "):l+="translate(".concat(a.x/n2,"em, ").concat(a.y/n2,"em) "),l+="scale(".concat(a.size/n2*(a.flipX?-1:1),", ").concat(a.size/n2*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var sv=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function f9(){var c=c9,a=a9,e=F.cssPrefix,r=F.replacementClass,i=sv;if(e!==c||r!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");i=i.replace(s,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(f,".".concat(r))}return i}var d5=!1;function e6(){F.autoAddCss&&!d5&&(cv(f9()),d5=!0)}var nv={mixout:function(){return{dom:{css:f9,insertCss:e6}}},hooks:function(){return{beforeDOMElementCreation:function(){e6()},beforeI2svg:function(){e6()}}}},Q1=v2||{};Q1[X1]||(Q1[X1]={});Q1[X1].styles||(Q1[X1].styles={});Q1[X1].hooks||(Q1[X1].hooks={});Q1[X1].shims||(Q1[X1].shims=[]);var T1=Q1[X1],l9=[],fv=function c(){a1.removeEventListener("DOMContentLoaded",c),t4=1,l9.map(function(a){return a()})},t4=!1;a2&&(t4=(a1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(a1.readyState),t4||a1.addEventListener("DOMContentLoaded",fv));function lv(c){a2&&(t4?setTimeout(c,0):l9.push(c))}function y3(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,i=c.children,s=i===void 0?[]:i;return typeof c=="string"?n9(c):"<".concat(a," ").concat(ev(r),">").concat(s.map(y3).join(""),"</").concat(a,">")}function L5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var ov=function(a,e){return function(r,i,s,n){return a.call(e,r,i,s,n)}},r6=function(a,e,r,i){var s=Object.keys(a),n=s.length,f=i!==void 0?ov(e,i):e,l,t,o;for(r===void 0?(l=1,o=a[s[0]]):(l=0,o=r);l<n;l++)t=s[l],o=f(o,a[t],t,a);return o};function tv(c){for(var a=[],e=0,r=c.length;e<r;){var i=c.charCodeAt(e++);if(i>=55296&&i<=56319&&e<r){var s=c.charCodeAt(e++);(s&64512)==56320?a.push(((i&1023)<<10)+(s&1023)+65536):(a.push(i),e--)}else a.push(i)}return a}function b6(c){var a=tv(c);return a.length===1?a[0].toString(16):null}function mv(c,a){var e=c.length,r=c.charCodeAt(a),i;return r>=55296&&r<=56319&&e>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function g5(c){return Object.keys(c).reduce(function(a,e){var r=c[e],i=!!r.icon;return i?a[r.iconName]=r.icon:a[e]=r,a},{})}function N6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,i=r===void 0?!1:r,s=g5(a);typeof T1.hooks.addPack=="function"&&!i?T1.hooks.addPack(c,g5(a)):T1.styles[c]=k(k({},T1.styles[c]||{}),s),c==="fas"&&N6("fa",a)}var Z3,j3,K3,B2=T1.styles,zv=T1.shims,vv=(Z3={},l1(Z3,c1,Object.values(L3[c1])),l1(Z3,s1,Object.values(L3[s1])),Z3),h8=null,o9={},t9={},m9={},z9={},v9={},hv=(j3={},l1(j3,c1,Object.keys(C3[c1])),l1(j3,s1,Object.keys(C3[s1])),j3);function Hv(c){return~Kz.indexOf(c)}function uv(c,a){var e=a.split("-"),r=e[0],i=e.slice(1).join("-");return r===c&&i!==""&&!Hv(i)?i:null}var h9=function(){var a=function(s){return r6(B2,function(n,f,l){return n[l]=r6(f,s,{}),n},{})};o9=a(function(i,s,n){if(s[3]&&(i[s[3]]=n),s[2]){var f=s[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){i[l.toString(16)]=n})}return i}),t9=a(function(i,s,n){if(i[n]=n,s[2]){var f=s[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){i[l]=n})}return i}),v9=a(function(i,s,n){var f=s[2];return i[n]=n,f.forEach(function(l){i[l]=n}),i});var e="far"in B2||F.autoFetchSvg,r=r6(zv,function(i,s){var n=s[0],f=s[1],l=s[2];return f==="far"&&!e&&(f="fas"),typeof n=="string"&&(i.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(i.unicodes[n.toString(16)]={prefix:f,iconName:l}),i},{names:{},unicodes:{}});m9=r.names,z9=r.unicodes,h8=S4(F.styleDefault,{family:F.familyDefault})};Jz(function(c){h8=S4(c.styleDefault,{family:F.familyDefault})});h9();function H8(c,a){return(o9[c]||{})[a]}function Vv(c,a){return(t9[c]||{})[a]}function L2(c,a){return(v9[c]||{})[a]}function H9(c){return m9[c]||{prefix:null,iconName:null}}function pv(c){var a=z9[c],e=H8("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function h2(){return h8}var u8=function(){return{prefix:null,iconName:null,rest:[]}};function S4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?c1:e,i=C3[r][c],s=d3[r][c]||d3[r][i],n=c in T1.styles?c:null;return s||n||null}var x5=(K3={},l1(K3,c1,Object.keys(L3[c1])),l1(K3,s1,Object.keys(L3[s1])),K3);function y4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,i=r===void 0?!1:r,s=(a={},l1(a,c1,"".concat(F.cssPrefix,"-").concat(c1)),l1(a,s1,"".concat(F.cssPrefix,"-").concat(s1)),a),n=null,f=c1;(c.includes(s[c1])||c.some(function(t){return x5[c1].includes(t)}))&&(f=c1),(c.includes(s[s1])||c.some(function(t){return x5[s1].includes(t)}))&&(f=s1);var l=c.reduce(function(t,o){var z=uv(F.cssPrefix,o);if(B2[o]?(o=vv[f].includes(o)?$z[f][o]:o,n=o,t.prefix=o):hv[f].indexOf(o)>-1?(n=o,t.prefix=S4(o,{family:f})):z?t.iconName=z:o!==F.replacementClass&&o!==s[c1]&&o!==s[s1]&&t.rest.push(o),!i&&t.prefix&&t.iconName){var h=n==="fa"?H9(t.iconName):{},u=L2(t.prefix,t.iconName);h.prefix&&(n=null),t.iconName=h.iconName||u||t.iconName,t.prefix=h.prefix||t.prefix,t.prefix==="far"&&!B2.far&&B2.fas&&!F.autoFetchSvg&&(t.prefix="fas")}return t},u8());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===s1&&(B2.fass||F.autoFetchSvg)&&(l.prefix="fass",l.iconName=L2(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=h2()||"fas"),l}var Mv=function(){function c(){kz(this,c),this.definitions={}}return Pz(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var n=i.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){e.definitions[f]=k(k({},e.definitions[f]||{}),n[f]),N6(f,n[f]);var l=L3[c1][f];l&&N6(l,n[f]),h9()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var n=i[s],f=n.prefix,l=n.iconName,t=n.icon,o=t[2];e[f]||(e[f]={}),o.length>0&&o.forEach(function(z){typeof z=="string"&&(e[f][z]=t)}),e[f][l]=t}),e}}]),c}(),b5=[],R2={},O2={},Cv=Object.keys(O2);function dv(c,a){var e=a.mixoutsTo;return b5=c,R2={},Object.keys(O2).forEach(function(r){Cv.indexOf(r)===-1&&delete O2[r]}),b5.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(n){typeof i[n]=="function"&&(e[n]=i[n]),o4(i[n])==="object"&&Object.keys(i[n]).forEach(function(f){e[n]||(e[n]={}),e[n][f]=i[n][f]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(n){R2[n]||(R2[n]=[]),R2[n].push(s[n])})}r.provides&&r.provides(O2)}),e}function S6(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];var s=R2[c]||[];return s.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function S2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var i=R2[c]||[];i.forEach(function(s){s.apply(null,e)})}function J1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return O2[c]?O2[c].apply(null,a):void 0}function y6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||h2();if(a)return a=L2(e,a)||a,L5(u9.definitions,e,a)||L5(T1.styles,e,a)}var u9=new Mv,Lv=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,S2("noAuto")},gv={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return a2?(S2("beforeI2svg",a),J1("pseudoElements2svg",a),J1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,lv(function(){bv({autoReplaceSvgRoot:e}),S2("watch",a)})}},xv={icon:function(a){if(a===null)return null;if(o4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:L2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=S4(a[0]);return{prefix:r,iconName:L2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(F.cssPrefix,"-"))>-1||a.match(Iz))){var i=y4(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||h2(),iconName:L2(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var s=h2();return{prefix:s,iconName:L2(s,a)||a}}}},N1={noAuto:Lv,config:F,dom:gv,parse:xv,library:u9,findIconDefinition:y6,toHtml:y3},bv=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?a1:e;(Object.keys(T1.styles).length>0||F.autoFetchSvg)&&a2&&F.autoReplaceSvg&&N1.dom.i2svg({node:r})};function w4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return y3(r)})}}),Object.defineProperty(c,"node",{get:function(){if(a2){var r=a1.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function Nv(c){var a=c.children,e=c.main,r=c.mask,i=c.attributes,s=c.styles,n=c.transform;if(v8(n)&&e.found&&!r.found){var f=e.width,l=e.height,t={x:f/l/2,y:.5};i.style=N4(k(k({},s),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function Sv(c){var a=c.prefix,e=c.iconName,r=c.children,i=c.attributes,s=c.symbol,n=s===!0?"".concat(a,"-").concat(F.cssPrefix,"-").concat(e):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},i),{},{id:n}),children:r}]}]}function V8(c){var a=c.icons,e=a.main,r=a.mask,i=c.prefix,s=c.iconName,n=c.transform,f=c.symbol,l=c.title,t=c.maskId,o=c.titleId,z=c.extra,h=c.watchable,u=h===void 0?!1:h,S=r.found?r:e,y=S.width,R=S.height,C=i==="fak",d=[F.replacementClass,s?"".concat(F.cssPrefix,"-").concat(s):""].filter(function(u1){return z.classes.indexOf(u1)===-1}).filter(function(u1){return u1!==""||!!u1}).concat(z.classes).join(" "),B={children:[],attributes:k(k({},z.attributes),{},{"data-prefix":i,"data-icon":s,class:d,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(R)})},w=C&&!~z.classes.indexOf("fa-fw")?{width:"".concat(y/R*16*.0625,"em")}:{};u&&(B.attributes[N2]=""),l&&(B.children.push({tag:"title",attributes:{id:B.attributes["aria-labelledby"]||"title-".concat(o||x3())},children:[l]}),delete B.attributes.title);var $=k(k({},B),{},{prefix:i,iconName:s,main:e,mask:r,maskId:t,transform:n,symbol:f,styles:k(k({},w),z.styles)}),Q=r.found&&e.found?J1("generateAbstractMask",$)||{children:[],attributes:{}}:J1("generateAbstractIcon",$)||{children:[],attributes:{}},i1=Q.children,x1=Q.attributes;return $.children=i1,$.attributes=x1,f?Sv($):Nv($)}function N5(c){var a=c.content,e=c.width,r=c.height,i=c.transform,s=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,t=k(k(k({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});l&&(t[N2]="");var o=k({},n.styles);v8(i)&&(o.transform=iv({transform:i,startCentered:!0,width:e,height:r}),o["-webkit-transform"]=o.transform);var z=N4(o);z.length>0&&(t.style=z);var h=[];return h.push({tag:"span",attributes:t,children:[a]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function yv(c){var a=c.content,e=c.title,r=c.extra,i=k(k(k({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),s=N4(r.styles);s.length>0&&(i.style=s);var n=[];return n.push({tag:"span",attributes:i,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var i6=T1.styles;function w6(c){var a=c[0],e=c[1],r=c.slice(4),i=f8(r,1),s=i[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(d2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(d2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(d2.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:e,icon:n}}var wv={found:!1,width:512,height:512};function Av(c,a){!e9&&!F.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function A6(c,a){var e=a;return a==="fa"&&F.styleDefault!==null&&(a=h2()),new Promise(function(r,i){if(J1("missingIconAbstract"),e==="fa"){var s=H9(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&i6[a]&&i6[a][c]){var n=i6[a][c];return r(w6(n))}Av(c,a),r(k(k({},wv),{},{icon:F.showMissingIcons&&c?J1("missingIconAbstract")||{}:{}}))})}var S5=function(){},k6=F.measurePerformance&&O3&&O3.mark&&O3.measure?O3:{mark:S5,measure:S5},i3='FA "6.4.0"',kv=function(a){return k6.mark("".concat(i3," ").concat(a," begins")),function(){return V9(a)}},V9=function(a){k6.mark("".concat(i3," ").concat(a," ends")),k6.measure("".concat(i3," ").concat(a),"".concat(i3," ").concat(a," begins"),"".concat(i3," ").concat(a," ends"))},p8={begin:kv,end:V9},c4=function(){};function y5(c){var a=c.getAttribute?c.getAttribute(N2):null;return typeof a=="string"}function Pv(c){var a=c.getAttribute?c.getAttribute(o8):null,e=c.getAttribute?c.getAttribute(t8):null;return a&&e}function Tv(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(F.replacementClass)}function Fv(){if(F.autoReplaceSvg===!0)return a4.replace;var c=a4[F.autoReplaceSvg];return c||a4.replace}function Bv(c){return a1.createElementNS("http://www.w3.org/2000/svg",c)}function Rv(c){return a1.createElement(c)}function p9(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?Bv:Rv:e;if(typeof c=="string")return a1.createTextNode(c);var i=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){i.setAttribute(n,c.attributes[n])});var s=c.children||[];return s.forEach(function(n){i.appendChild(p9(n,{ceFn:r}))}),i}function _v(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var a4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(i){e.parentNode.insertBefore(p9(i),e)}),e.getAttribute(N2)===null&&F.keepOriginalSource){var r=a1.createComment(_v(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~z8(e).indexOf(F.replacementClass))return a4.replace(a);var i=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(f,l){return l===F.replacementClass||l.match(i)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}var n=r.map(function(f){return y3(f)}).join(`
`);e.setAttribute(N2,""),e.innerHTML=n}};function w5(c){c()}function M9(c,a){var e=typeof a=="function"?a:c4;if(c.length===0)e();else{var r=w5;F.mutateApproach===Oz&&(r=v2.requestAnimationFrame||w5),r(function(){var i=Fv(),s=p8.begin("mutate");c.map(i),s(),e()})}}var M8=!1;function C9(){M8=!0}function P6(){M8=!1}var m4=null;function A5(c){if(M5&&F.observeMutations){var a=c.treeCallback,e=a===void 0?c4:a,r=c.nodeCallback,i=r===void 0?c4:r,s=c.pseudoElementsCallback,n=s===void 0?c4:s,f=c.observeMutationsRoot,l=f===void 0?a1:f;m4=new M5(function(t){if(!M8){var o=h2();X2(t).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!y5(z.addedNodes[0])&&(F.searchPseudoElements&&n(z.target),e(z.target)),z.type==="attributes"&&z.target.parentNode&&F.searchPseudoElements&&n(z.target.parentNode),z.type==="attributes"&&y5(z.target)&&~jz.indexOf(z.attributeName))if(z.attributeName==="class"&&Pv(z.target)){var h=y4(z8(z.target)),u=h.prefix,S=h.iconName;z.target.setAttribute(o8,u||o),S&&z.target.setAttribute(t8,S)}else Tv(z.target)&&i(z.target)})}}),a2&&m4.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ev(){m4&&m4.disconnect()}function Dv(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,i){var s=i.split(":"),n=s[0],f=s.slice(1);return n&&f.length>0&&(r[n]=f.join(":").trim()),r},{})),e}function qv(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",i=y4(z8(c));return i.prefix||(i.prefix=h2()),a&&e&&(i.prefix=a,i.iconName=e),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Vv(i.prefix,c.innerText)||H8(i.prefix,b6(c.innerText))),!i.iconName&&F.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function Ov(c){var a=X2(c.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return F.autoA11y&&(e?a["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||x3()):(a["aria-hidden"]="true",a.focusable="false")),a}function Uv(){return{iconName:null,title:null,titleId:null,prefix:null,transform:$1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function k5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=qv(c),r=e.iconName,i=e.prefix,s=e.rest,n=Ov(c),f=S6("parseNodeAttributes",{},c),l=a.styleParser?Dv(c):[];return k({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:$1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:n}},f)}var $v=T1.styles;function d9(c){var a=F.autoReplaceSvg==="nest"?k5(c,{styleParser:!1}):k5(c);return~a.extra.classes.indexOf(r9)?J1("generateLayersText",c,a):J1("generateSvgReplacementMutation",c,a)}var H2=new Set;m8.map(function(c){H2.add("fa-".concat(c))});Object.keys(C3[c1]).map(H2.add.bind(H2));Object.keys(C3[s1]).map(H2.add.bind(H2));H2=N3(H2);function P5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!a2)return Promise.resolve();var e=a1.documentElement.classList,r=function(z){return e.add("".concat(C5,"-").concat(z))},i=function(z){return e.remove("".concat(C5,"-").concat(z))},s=F.autoFetchSvg?H2:m8.map(function(o){return"fa-".concat(o)}).concat(Object.keys($v));s.includes("fa")||s.push("fa");var n=[".".concat(r9,":not([").concat(N2,"])")].concat(s.map(function(o){return".".concat(o,":not([").concat(N2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=X2(c.querySelectorAll(n))}catch{}if(f.length>0)r("pending"),i("complete");else return Promise.resolve();var l=p8.begin("onTree"),t=f.reduce(function(o,z){try{var h=d9(z);h&&o.push(h)}catch(u){e9||u.name==="MissingIcon"&&console.error(u)}return o},[]);return new Promise(function(o,z){Promise.all(t).then(function(h){M9(h,function(){r("active"),r("complete"),i("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(h){l(),z(h)})})}function Iv(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;d9(c).then(function(e){e&&M9([e],a)})}function Gv(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:y6(a||{}),i=e.mask;return i&&(i=(i||{}).icon?i:y6(i||{})),c(r,k(k({},e),{},{mask:i}))}}var Wv=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?$1:r,s=e.symbol,n=s===void 0?!1:s,f=e.mask,l=f===void 0?null:f,t=e.maskId,o=t===void 0?null:t,z=e.title,h=z===void 0?null:z,u=e.titleId,S=u===void 0?null:u,y=e.classes,R=y===void 0?[]:y,C=e.attributes,d=C===void 0?{}:C,B=e.styles,w=B===void 0?{}:B;if(a){var $=a.prefix,Q=a.iconName,i1=a.icon;return w4(k({type:"icon"},a),function(){return S2("beforeDOMElementCreation",{iconDefinition:a,params:e}),F.autoA11y&&(h?d["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(S||x3()):(d["aria-hidden"]="true",d.focusable="false")),V8({icons:{main:w6(i1),mask:l?w6(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:$,iconName:Q,transform:k(k({},$1),i),symbol:n,title:h,maskId:o,titleId:S,extra:{attributes:d,styles:w,classes:R}})})}},Zv={mixout:function(){return{icon:Gv(Wv)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=P5,e.nodeCallback=Iv,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,i=r===void 0?a1:r,s=e.callback,n=s===void 0?function(){}:s;return P5(i,n)},a.generateSvgReplacementMutation=function(e,r){var i=r.iconName,s=r.title,n=r.titleId,f=r.prefix,l=r.transform,t=r.symbol,o=r.mask,z=r.maskId,h=r.extra;return new Promise(function(u,S){Promise.all([A6(i,f),o.iconName?A6(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var R=f8(y,2),C=R[0],d=R[1];u([e,V8({icons:{main:C,mask:d},prefix:f,iconName:i,transform:l,symbol:t,maskId:z,title:s,titleId:n,extra:h,watchable:!0})])}).catch(S)})},a.generateAbstractIcon=function(e){var r=e.children,i=e.attributes,s=e.main,n=e.transform,f=e.styles,l=N4(f);l.length>0&&(i.style=l);var t;return v8(n)&&(t=J1("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),r.push(t||s.icon),{children:r,attributes:i}}}},jv={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return w4({type:"layer"},function(){S2("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(N3(s)).join(" ")},children:n}]})}}}},Kv={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,n=r.classes,f=n===void 0?[]:n,l=r.attributes,t=l===void 0?{}:l,o=r.styles,z=o===void 0?{}:o;return w4({type:"counter",content:e},function(){return S2("beforeDOMElementCreation",{content:e,params:r}),yv({content:e.toString(),title:s,extra:{attributes:t,styles:z,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(N3(f))}})})}}}},Yv={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?$1:i,n=r.title,f=n===void 0?null:n,l=r.classes,t=l===void 0?[]:l,o=r.attributes,z=o===void 0?{}:o,h=r.styles,u=h===void 0?{}:h;return w4({type:"text",content:e},function(){return S2("beforeDOMElementCreation",{content:e,params:r}),N5({content:e,transform:k(k({},$1),s),title:f,extra:{attributes:z,styles:u,classes:["".concat(F.cssPrefix,"-layers-text")].concat(N3(t))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var i=r.title,s=r.transform,n=r.extra,f=null,l=null;if(J7){var t=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();f=o.width/t,l=o.height/t}return F.autoA11y&&!i&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,N5({content:e.innerHTML,width:f,height:l,transform:s,title:i,extra:n,watchable:!0})])}}},Xv=new RegExp('"',"ug"),T5=[1105920,1112319];function Qv(c){var a=c.replace(Xv,""),e=mv(a,0),r=e>=T5[0]&&e<=T5[1],i=a.length===2?a[0]===a[1]:!1;return{value:b6(i?a[0]:a),isSecondary:r||i}}function F5(c,a){var e="".concat(qz).concat(a.replace(":","-"));return new Promise(function(r,i){if(c.getAttribute(e)!==null)return r();var s=X2(c.children),n=s.filter(function(i1){return i1.getAttribute(x6)===a})[0],f=v2.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(Gz),t=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),r();if(l&&o!=="none"&&o!==""){var z=f.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?s1:c1,u=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?d3[h][l[2].toLowerCase()]:Wz[h][t],S=Qv(z),y=S.value,R=S.isSecondary,C=l[0].startsWith("FontAwesome"),d=H8(u,y),B=d;if(C){var w=pv(y);w.iconName&&w.prefix&&(d=w.iconName,u=w.prefix)}if(d&&!R&&(!n||n.getAttribute(o8)!==u||n.getAttribute(t8)!==B)){c.setAttribute(e,B),n&&c.removeChild(n);var $=Uv(),Q=$.extra;Q.attributes[x6]=a,A6(d,u).then(function(i1){var x1=V8(k(k({},$),{},{icons:{main:i1,mask:u8()},prefix:u,iconName:B,extra:Q,watchable:!0})),u1=a1.createElement("svg");a==="::before"?c.insertBefore(u1,c.firstChild):c.appendChild(u1),u1.outerHTML=x1.map(function(S1){return y3(S1)}).join(`