var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function u(t,e,n,o){if(t){const r=l(t,e,n,o);return t[0](r)}}function l(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function a(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}function f(t,e,n,o,r,s){if(r){const c=l(e,n,o,s);t.p(c,r)}}function d(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function p(t){return null==t?"":t}const $="undefined"!=typeof window;let m=$?()=>window.performance.now():()=>Date.now(),g=$?t=>requestAnimationFrame(t):t;const h=new Set;function y(t){h.forEach((e=>{e.c(t)||(h.delete(e),e.f())})),0!==h.size&&g(y)}function b(t){let e;return 0===h.size&&g(y),{promise:new Promise((n=>{h.add(e={c:t,f:n})})),abort(){h.delete(e)}}}function v(t,e){t.appendChild(e)}function x(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function w(t){const e=E("style");return function(t,e){v(t.head||t,e),e.sheet}(x(t),e),e.sheet}function k(t,e,n){t.insertBefore(e,n||null)}function _(t){t.parentNode&&t.parentNode.removeChild(t)}function E(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function U(){return S(" ")}function C(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function M(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function D(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function R(t,e){t.value=null==e?"":e}function z(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}const A=new Map;let N,j=0;function q(t,e,n,o,r,s,c,i=0){const u=16.666/o;let l="{\n";for(let t=0;t<=1;t+=u){const o=e+(n-e)*s(t);l+=100*t+`%{${c(o,1-o)}}\n`}const a=l+`100% {${c(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${i}`,d=x(t),{stylesheet:p,rules:$}=A.get(d)||function(t,e){const n={stylesheet:w(e),rules:{}};return A.set(t,n),n}(d,t);$[f]||($[f]=!0,p.insertRule(`@keyframes ${f} ${a}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${o}ms linear ${r}ms 1 both`,j+=1,f}function L(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),j-=r,j||g((()=>{j||(A.forEach((t=>{const{ownerNode:e}=t.stylesheet;e&&_(e)})),A.clear())})))}function T(t){N=t}function I(){const t=function(){if(!N)throw new Error("Function called outside component initialization");return N}();return(e,n,{cancelable:o=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=z(e,n,{cancelable:o});return r.slice().forEach((e=>{e.call(t,s)})),!s.defaultPrevented}return!0}}const O=[],P=[],F=[],V=[],H=Promise.resolve();let B=!1;function X(t){F.push(t)}const G=new Set;let J,K=0;function Q(){if(0!==K)return;const t=N;do{try{for(;K<O.length;){const t=O[K];K++,T(t),W(t.$$)}}catch(t){throw O.length=0,K=0,t}for(T(null),O.length=0,K=0;P.length;)P.pop()();for(let t=0;t<F.length;t+=1){const e=F[t];G.has(e)||(G.add(e),e())}F.length=0}while(O.length);for(;V.length;)V.pop()();B=!1,G.clear(),T(t)}function W(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}function Y(){return J||(J=Promise.resolve(),J.then((()=>{J=null}))),J}function Z(t,e,n){t.dispatchEvent(z(`${e?"intro":"outro"}${n}`))}const tt=new Set;let et;function nt(t,e){t&&t.i&&(tt.delete(t),t.i(e))}function ot(t,e,n,o){if(t&&t.o){if(tt.has(t))return;tt.add(t),et.c.push((()=>{tt.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}const rt={duration:0};function st(t,e){t.d(1),e.delete(t.key)}function ct(t,e){ot(t,1,1,(()=>{e.delete(t.key)}))}function it(t,e,n,o,r,s,c,i,u,l,a,f){let d=t.length,p=s.length,$=d;const m={};for(;$--;)m[t[$].key]=$;const g=[],h=new Map,y=new Map;for($=p;$--;){const t=f(r,s,$),i=n(t);let u=c.get(i);u?o&&u.p(t,e):(u=l(i,t),u.c()),h.set(i,g[$]=u),i in m&&y.set(i,Math.abs($-m[i]))}const b=new Set,v=new Set;function x(t){nt(t,1),t.m(i,a),c.set(t.key,t),a=t.first,p--}for(;d&&p;){const e=g[p-1],n=t[d-1],o=e.key,r=n.key;e===n?(a=e.first,d--,p--):h.has(r)?!c.has(o)||b.has(o)?x(e):v.has(r)?d--:y.get(o)>y.get(r)?(v.add(o),x(e)):(b.add(r),d--):(u(n,c),d--)}for(;d--;){const e=t[d];h.has(e.key)||u(e,c)}for(;p;)x(g[p-1]);return g}function ut(t){t&&t.c()}function lt(t,e,o,c){const{fragment:i,after_update:u}=t.$$;i&&i.m(e,o),c||X((()=>{const e=t.$$.on_mount.map(n).filter(s);t.$$.on_destroy?t.$$.on_destroy.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(X)}function at(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(t,e){-1===t.$$.dirty[0]&&(O.push(t),B||(B=!0,H.then(Q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function dt(e,n,s,c,i,u,l,a=[-1]){const f=N;T(e);const d=e.$$={fragment:null,ctx:[],props:u,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:o(),dirty:a,skip_bound:!1,root:n.target||f.$$.root};l&&l(d.root);let p=!1;if(d.ctx=s?s(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&ft(e,t)),n})):[],d.update(),p=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(_)}else d.fragment&&d.fragment.c();n.intro&&nt(e.$$.fragment),lt(e,n.target,n.anchor,n.customElement),Q()}T(f)}class pt{$destroy(){at(this,1),this.$destroy=t}$on(e,n){if(!s(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function $t(t){const e=t-1;return e*e*e+1}function mt(t,{delay:n=0,duration:o=400,easing:r=e}={}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>"opacity: "+t*s}}function gt(t,{delay:e=0,duration:n=400,easing:o=$t,start:r=0,opacity:s=0}={}){const c=getComputedStyle(t),i=+c.opacity,u="none"===c.transform?"":c.transform,l=1-r,a=i*(1-s);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${u} scale(${1-l*e});\n\t\t\topacity: ${i-a*e}\n\t\t`}}const ht=[];const yt=function(e,n=t){let o;const r=new Set;function s(t){if(c(e,t)&&(e=t,o)){const t=!ht.length;for(const t of r)t[1](),ht.push(t,e);if(t){for(let t=0;t<ht.length;t+=2)ht[t][0](ht[t+1]);ht.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,i=t){const u=[c,i];return r.add(u),1===r.size&&(o=n(s)||t),c(e),()=>{r.delete(u),0===r.size&&(o(),o=null)}}}}([{id:1,rating:10,text:"Test from store"},{id:2,rating:8,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae."},{id:3,rating:5,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae."}]);function bt(t){let e,n;const o=t[1].default,r=u(o,t,t[0],null);return{c(){e=E("div"),r&&r.c(),M(e,"class","card svelte-1s1u6qb")},m(t,o){k(t,e,o),r&&r.m(e,null),n=!0},p(t,[e]){r&&r.p&&(!n||1&e)&&f(r,o,t,t[0],n?a(o,t[0],e,null):d(t[0]),null)},i(t){n||(nt(r,t),n=!0)},o(t){ot(r,t),n=!1},d(t){t&&_(e),r&&r.d(t)}}}function vt(t,e,n){let{$$slots:o={},$$scope:r}=e;return t.$$set=t=>{"$$scope"in t&&n(0,r=t.$$scope)},[r,o]}class xt extends pt{constructor(t){super(),dt(this,t,vt,bt,c,{})}}function wt(t){let e,n,o,r,s,c,i,u,l,a=t[0].rating+"",f=t[0].text+"";return{c(){e=E("div"),n=S(a),o=U(),r=E("button"),r.textContent="X",s=U(),c=E("p"),i=S(f),M(e,"class","rating svelte-7tip00"),M(r,"class","close svelte-7tip00")},m(a,f){k(a,e,f),v(e,n),k(a,o,f),k(a,r,f),k(a,s,f),k(a,c,f),v(c,i),u||(l=C(r,"click",t[2]),u=!0)},p(t,e){1&e&&a!==(a=t[0].rating+"")&&D(n,a),1&e&&f!==(f=t[0].text+"")&&D(i,f)},d(t){t&&_(e),t&&_(o),t&&_(r),t&&_(s),t&&_(c),u=!1,l()}}}function kt(t){let e,n;return e=new xt({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),{c(){ut(e.$$.fragment)},m(t,o){lt(e,t,o),n=!0},p(t,[n]){const o={};9&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){ot(e.$$.fragment,t),n=!1},d(t){at(e,t)}}}function _t(t,e,n){let{feedback:o}=e;const r=t=>{yt.update((e=>e.filter((e=>e.id!=t))))};return t.$$set=t=>{"feedback"in t&&n(0,o=t.feedback)},[o,r,()=>r(o.id)]}class Et extends pt{constructor(t){super(),dt(this,t,_t,kt,c,{feedback:0})}}function St(t,e,n){const o=t.slice();return o[1]=e[n],o}function Ut(e){let n;return{c(){n=E("p"),n.textContent="No Feedback",M(n,"class","empty svelte-15rfgru")},m(t,e){k(t,n,e)},p:t,d(t){t&&_(n)}}}function Ct(n,o){let c,i,u,l,a,f;return i=new Et({props:{feedback:o[1]}}),{key:n,first:null,c(){c=E("div"),ut(i.$$.fragment),u=U(),this.first=c},m(t,e){k(t,c,e),lt(i,c,null),v(c,u),f=!0},p(t,e){o=t;const n={};1&e&&(n.feedback=o[1]),i.$set(n)},i(n){f||(nt(i.$$.fragment,n),X((()=>{a&&a.end(1),l=function(n,o,r){const c={direction:"in"};let i,u,l=o(n,r,c),a=!1,f=0;function d(){i&&L(n,i)}function p(){const{delay:o=0,duration:r=300,easing:s=e,tick:c=t,css:p}=l||rt;p&&(i=q(n,0,1,r,o,s,p,f++)),c(0,1);const $=m()+o,g=$+r;u&&u.abort(),a=!0,X((()=>Z(n,!0,"start"))),u=b((t=>{if(a){if(t>=g)return c(1,0),Z(n,!0,"end"),d(),a=!1;if(t>=$){const e=s((t-$)/r);c(e,1-e)}}return a}))}let $=!1;return{start(){$||($=!0,L(n),s(l)?(l=l(c),Y().then(p)):p())},invalidate(){$=!1},end(){a&&(d(),a=!1)}}}(c,gt,{}),l.start()})),f=!0)},o(n){ot(i.$$.fragment,n),l&&l.invalidate(),a=function(n,o,c){const i={direction:"out"};let u,l=o(n,c,i),a=!0;const f=et;function d(){const{delay:o=0,duration:s=300,easing:c=e,tick:i=t,css:d}=l||rt;d&&(u=q(n,1,0,s,o,c,d));const p=m()+o,$=p+s;X((()=>Z(n,!1,"start"))),b((t=>{if(a){if(t>=$)return i(0,1),Z(n,!1,"end"),--f.r||r(f.c),!1;if(t>=p){const e=c((t-p)/s);i(1-e,e)}}return a}))}return f.r+=1,s(l)?Y().then((()=>{l=l(i),d()})):d(),{end(t){t&&l.tick&&l.tick(1,0),a&&(u&&L(n,u),a=!1)}}}(c,mt,{duration:500}),f=!1},d(t){t&&_(c),at(i),t&&a&&a.end()}}}function Mt(t){let e,n,o=[],s=new Map,c=t[0];const i=t=>t[1].id;for(let e=0;e<c.length;e+=1){let n=St(t,c,e),r=i(n);s.set(r,o[e]=Ct(r,n))}let u=null;return c.length||(u=Ut()),{c(){e=E("div");for(let t=0;t<o.length;t+=1)o[t].c();u&&u.c()},m(t,r){k(t,e,r);for(let t=0;t<o.length;t+=1)o[t].m(e,null);u&&u.m(e,null),n=!0},p(t,[n]){1&n&&(c=t[0],et={r:0,c:[],p:et},o=it(o,n,i,1,t,c,s,e,ct,Ct,null,St),et.r||r(et.c),et=et.p,!c.length&&u?u.p(t,n):c.length?u&&(u.d(1),u=null):(u=Ut(),u.c(),u.m(e,null)))},i(t){if(!n){for(let t=0;t<c.length;t+=1)nt(o[t]);n=!0}},o(t){for(let t=0;t<o.length;t+=1)ot(o[t]);n=!1},d(t){t&&_(e);for(let t=0;t<o.length;t+=1)o[t].d();u&&u.d()}}}function Dt(t,e,n){let o;return i(t,yt,(t=>n(0,o=t))),[o]}class Rt extends pt{constructor(t){super(),dt(this,t,Dt,Mt,c,{})}}function zt(e){let n,o,r,s,c,i,u,l;return{c(){n=E("div"),o=E("h4"),r=S(e[1]),s=S(" Reviews"),c=U(),i=E("h4"),u=S("Rating Average: "),l=S(e[0]),M(n,"class","stats svelte-1pjanza")},m(t,e){k(t,n,e),v(n,o),v(o,r),v(o,s),v(n,c),v(n,i),v(i,u),v(i,l)},p(t,[e]){2&e&&D(r,t[1]),1&e&&D(l,t[0])},i:t,o:t,d(t){t&&_(n)}}}function At(t,e,n){let o,r,s;i(t,yt,(t=>n(2,s=t)));return t.$$.update=()=>{var e;4&t.$$.dirty&&n(1,o=s.length),4&t.$$.dirty&&n(0,r=0===(e=s).length?0:Math.floor(e.reduce(((t,{rating:e})=>t+e),0)/e.length))},[r,o,s]}class Nt extends pt{constructor(t){super(),dt(this,t,At,zt,c,{})}}let jt;const qt=new Uint8Array(16);function Lt(){if(!jt&&(jt="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!jt))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return jt(qt)}const Tt=[];for(let t=0;t<256;++t)Tt.push((t+256).toString(16).slice(1));var It={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function Ot(t,e,n){if(It.randomUUID&&!e&&!t)return It.randomUUID();const o=(t=t||{}).random||(t.rng||Lt)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){n=n||0;for(let t=0;t<16;++t)e[n+t]=o[t];return e}return function(t,e=0){return(Tt[t[e+0]]+Tt[t[e+1]]+Tt[t[e+2]]+Tt[t[e+3]]+"-"+Tt[t[e+4]]+Tt[t[e+5]]+"-"+Tt[t[e+6]]+Tt[t[e+7]]+"-"+Tt[t[e+8]]+Tt[t[e+9]]+"-"+Tt[t[e+10]]+Tt[t[e+11]]+Tt[t[e+12]]+Tt[t[e+13]]+Tt[t[e+14]]+Tt[t[e+15]]).toLowerCase()}(o)}function Pt(t){let e,n,o;const r=t[4].default,s=u(r,t,t[3],null);return{c(){e=E("button"),s&&s.c(),M(e,"type",t[1]),e.disabled=t[2],M(e,"class",n=p(t[0])+" svelte-1hshxze")},m(t,n){k(t,e,n),s&&s.m(e,null),o=!0},p(t,[c]){s&&s.p&&(!o||8&c)&&f(s,r,t,t[3],o?a(r,t[3],c,null):d(t[3]),null),(!o||2&c)&&M(e,"type",t[1]),(!o||4&c)&&(e.disabled=t[2]),(!o||1&c&&n!==(n=p(t[0])+" svelte-1hshxze"))&&M(e,"class",n)},i(t){o||(nt(s,t),o=!0)},o(t){ot(s,t),o=!1},d(t){t&&_(e),s&&s.d(t)}}}function Ft(t,e,n){let{$$slots:o={},$$scope:r}=e,{style:s="primary"}=e,{type:c="button"}=e,{disabled:i=!1}=e;return t.$$set=t=>{"style"in t&&n(0,s=t.style),"type"in t&&n(1,c=t.type),"disabled"in t&&n(2,i=t.disabled),"$$scope"in t&&n(3,r=t.$$scope)},[s,c,i,r,o]}class Vt extends pt{constructor(t){super(),dt(this,t,Ft,Pt,c,{style:0,type:1,disabled:2})}}function Ht(t,e,n){const o=t.slice();return o[4]=e[n],o}function Bt(t,e){let n,o,r,s,c,i,u,l,a,f=e[4]+"";return{key:t,first:null,c(){n=E("li"),o=E("input"),s=U(),c=E("label"),i=S(f),u=U(),M(o,"type","radio"),M(o,"id",`rate-${e[4]}`),M(o,"name","rating"),o.value=e[4],o.checked=r=e[0]===e[4],M(o,"class","svelte-1u4bxs5"),M(c,"for",`rate-${e[4]}`),M(c,"class","svelte-1u4bxs5"),M(n,"class","svelte-1u4bxs5"),this.first=n},m(t,r){k(t,n,r),v(n,o),v(n,s),v(n,c),v(c,i),v(n,u),l||(a=C(o,"change",e[2]),l=!0)},p(t,n){e=t,1&n&&r!==(r=e[0]===e[4])&&(o.checked=r)},d(t){t&&_(n),l=!1,a()}}}function Xt(e){let n,o=[],r=new Map,s=e[1];const c=t=>t[4];for(let t=0;t<s.length;t+=1){let n=Ht(e,s,t),i=c(n);r.set(i,o[t]=Bt(i,n))}return{c(){n=E("ul");for(let t=0;t<o.length;t+=1)o[t].c();M(n,"class","rating svelte-1u4bxs5")},m(t,e){k(t,n,e);for(let t=0;t<o.length;t+=1)o[t].m(n,null)},p(t,[e]){7&e&&(s=t[1],o=it(o,e,c,1,t,s,r,n,st,Bt,null,Ht))},i:t,o:t,d(t){t&&_(n);for(let t=0;t<o.length;t+=1)o[t].d()}}}function Gt(t,e,n){const o=I();let{selected:r=10}=e;return t.$$set=t=>{"selected"in t&&n(0,r=t.selected)},[r,[1,2,3,4,5,6,7,8,9,10],t=>{n(0,r=t.target.value),o("ratingSelecte",r)}]}class Jt extends pt{constructor(t){super(),dt(this,t,Gt,Xt,c,{selected:0})}}function Kt(t){let e;return{c(){e=S("Send")},m(t,n){k(t,e,n)},d(t){t&&_(e)}}}function Qt(t){let e,n;return{c(){e=E("p"),n=S(t[2]),M(e,"class","message svelte-15v76s4")},m(t,o){k(t,e,o),v(e,n)},p(t,e){4&e&&D(n,t[2])},d(t){t&&_(e)}}}function Wt(t){let e,n,o,s,c,i,u,l,a,f,d,p,$;s=new Jt({props:{selected:t[3]}}),s.$on("ratingSelecte",t[5]),a=new Vt({props:{disabled:t[1],type:"submit",$$slots:{default:[Kt]},$$scope:{ctx:t}}});let m=t[2]&&Qt(t);return{c(){e=E("header"),e.innerHTML='<h2 class="svelte-15v76s4">How would you rate your service with us?</h2>',n=U(),o=E("form"),ut(s.$$.fragment),c=U(),i=E("div"),u=E("input"),l=U(),ut(a.$$.fragment),f=U(),m&&m.c(),M(e,"class","svelte-15v76s4"),M(u,"type","text"),M(u,"placeholder","Tell us something that keeps you coming back"),M(u,"class","svelte-15v76s4"),M(i,"class","input-group svelte-15v76s4")},m(r,g){var h;k(r,e,g),k(r,n,g),k(r,o,g),lt(s,o,null),v(o,c),v(o,i),v(i,u),R(u,t[0]),v(i,l),lt(a,i,null),v(o,f),m&&m.m(o,null),d=!0,p||($=[C(u,"input",t[7]),C(u,"input",t[4]),C(o,"submit",(h=t[6],function(t){return t.preventDefault(),h.call(this,t)}))],p=!0)},p(t,e){const n={};8&e&&(n.selected=t[3]),s.$set(n),1&e&&u.value!==t[0]&&R(u,t[0]);const r={};2&e&&(r.disabled=t[1]),256&e&&(r.$$scope={dirty:e,ctx:t}),a.$set(r),t[2]?m?m.p(t,e):(m=Qt(t),m.c(),m.m(o,null)):m&&(m.d(1),m=null)},i(t){d||(nt(s.$$.fragment,t),nt(a.$$.fragment,t),d=!0)},o(t){ot(s.$$.fragment,t),ot(a.$$.fragment,t),d=!1},d(t){t&&_(e),t&&_(n),t&&_(o),at(s),at(a),m&&m.d(),p=!1,r($)}}}function Yt(t){let e,n;return e=new xt({props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}}),{c(){ut(e.$$.fragment)},m(t,o){lt(e,t,o),n=!0},p(t,[n]){const o={};271&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){ot(e.$$.fragment,t),n=!1},d(t){at(e,t)}}}const Zt=10;function te(t,e,n){let o,r="",s=!0,c=10;return[r,s,o,c,()=>{r.trim().length>=Zt?(n(1,s=!1),n(2,o=null)):(n(1,s=!0),n(2,o=`Text must be at least ${Zt} characters`))},t=>{n(3,c=t.detail)},()=>{if(r.trim().length>=Zt){const t={id:Ot(),text:r,rating:+c};yt.update((e=>[t,...e])),n(0,r=""),n(3,c=10)}},function(){r=this.value,n(0,r)}]}class ee extends pt{constructor(t){super(),dt(this,t,te,Yt,c,{})}}function ne(e){let n,o,r,s,c,i,u;return o=new ee({}),s=new Nt({}),i=new Rt({}),{c(){n=E("main"),ut(o.$$.fragment),r=U(),ut(s.$$.fragment),c=U(),ut(i.$$.fragment),M(n,"class","container")},m(t,e){k(t,n,e),lt(o,n,null),v(n,r),lt(s,n,null),v(n,c),lt(i,n,null),u=!0},p:t,i(t){u||(nt(o.$$.fragment,t),nt(s.$$.fragment,t),nt(i.$$.fragment,t),u=!0)},o(t){ot(o.$$.fragment,t),ot(s.$$.fragment,t),ot(i.$$.fragment,t),u=!1},d(t){t&&_(n),at(o),at(s),at(i)}}}return new class extends pt{constructor(t){super(),dt(this,t,null,ne,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
