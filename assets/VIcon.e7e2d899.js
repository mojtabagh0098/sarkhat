import{g as T,r as z,I as k,j as E,B as O,C as V,l as h,D as L,E as H,T as A,F as p,G as x,H as W,p as m,c as v,b as c,m as S,S as j,n as D,J as _,K as b,L as $,M as I,N as q,O as F,y as G,P as M,z as U,Q as J,t as K}from"./index.b866b194.js";function B(e){const s=T("useRender");s.render=e}function le(e){const s=z(),n=z();if(k){const t=new ResizeObserver(r=>{e==null||e(r,t),r.length&&(n.value=r[0].contentRect)});E(()=>{t.disconnect()}),O(s,(r,a)=>{a&&(t.unobserve(a),n.value=void 0),r&&t.observe(r)},{flush:"post"})}return{resizeRef:s,contentRect:V(n)}}const ue=h(!1)({name:"VDefaultsProvider",props:{defaults:Object,disabled:Boolean,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,s){let{slots:n}=s;const{defaults:t,disabled:r,reset:a,root:o,scoped:i}=L(e);return H(t,{reset:a,root:o,scoped:i,disabled:r}),()=>{var d;return(d=n.default)==null?void 0:d.call(n)}}});function u(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"center center",n=arguments.length>2?arguments[2]:void 0;return h()({name:e,props:{disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:s}},setup(t,r){let{slots:a}=r;const o={onBeforeEnter(i){i.style.transformOrigin=t.origin},onLeave(i){if(t.leaveAbsolute){const{offsetTop:d,offsetLeft:f,offsetWidth:l,offsetHeight:g}=i;i._transitionInitialStyles={position:i.style.position,top:i.style.top,left:i.style.left,width:i.style.width,height:i.style.height},i.style.position="absolute",i.style.top=`${d}px`,i.style.left=`${f}px`,i.style.width=`${l}px`,i.style.height=`${g}px`}t.hideOnLeave&&i.style.setProperty("display","none","important")},onAfterLeave(i){if(t.leaveAbsolute&&(i==null?void 0:i._transitionInitialStyles)){const{position:d,top:f,left:l,width:g,height:y}=i._transitionInitialStyles;delete i._transitionInitialStyles,i.style.position=d||"",i.style.top=f||"",i.style.left=l||"",i.style.width=g||"",i.style.height=y||""}}};return()=>{const i=t.group?A:p;return x(i,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:o},a.default)}}})}function N(e,s){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return h()({name:e,props:{mode:{type:String,default:n},disabled:Boolean},setup(t,r){let{slots:a}=r;return()=>x(p,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:s},a.default)}})}function R(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=W(`offset-${n}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[n]:o.style[n]}},onEnter(o){const i=o._initialStyle;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const d=`${o[t]}px`;o.style[n]="0",o.offsetHeight,o.style.transition=i.transition,e&&o._parent&&o._parent.classList.add(e),requestAnimationFrame(()=>{o.style[n]=d})},onAfterEnter:a,onEnterCancelled:a,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[n]:o.style[n]},o.style.overflow="hidden",o.style[n]=`${o[t]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[n]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(o){e&&o._parent&&o._parent.classList.remove(e),a(o)}function a(o){const i=o._initialStyle[n];o.style.overflow=o._initialStyle.overflow,i!=null&&(o.style[n]=i),delete o._initialStyle}}u("fab-transition","center center","out-in");u("dialog-bottom-transition");u("dialog-top-transition");u("fade-transition");u("scale-transition");u("scroll-x-transition");u("scroll-x-reverse-transition");u("scroll-y-transition");u("scroll-y-reverse-transition");u("slide-x-transition");u("slide-x-reverse-transition");const de=u("slide-y-transition");u("slide-y-reverse-transition");const ce=N("expand-transition",R()),fe=N("expand-x-transition",R("",!0));const Q=m({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function X(e){return{dimensionStyles:v(()=>({height:c(e.height),maxHeight:c(e.maxHeight),maxWidth:c(e.maxWidth),minHeight:c(e.minHeight),minWidth:c(e.minWidth),width:c(e.width)}))}}function Y(e){return{aspectStyles:v(()=>{const s=Number(e.aspectRatio);return s?{paddingBottom:String(1/s*100)+"%"}:void 0})}}const ge=h()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...Q()},setup(e,s){let{slots:n}=s;const{aspectStyles:t}=Y(e),{dimensionStyles:r}=X(e);return B(()=>{var a;return S("div",{class:"v-responsive",style:r.value},[S("div",{class:"v-responsive__sizer",style:t.value},null),(a=n.additional)==null?void 0:a.call(n),n.default&&S("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function Z(e,s){if(!j)return;const n=s.modifiers||{},t=s.value,{handler:r,options:a}=typeof t=="object"?t:{handler:t,options:{}},o=new IntersectionObserver(function(){var g;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0;const f=(g=e._observe)==null?void 0:g[s.instance.$.uid];if(!f)return;const l=i.some(y=>y.isIntersecting);r&&(!n.quiet||f.init)&&(!n.once||l||f.init)&&r(l,i,d),l&&n.once?w(e,s):f.init=!0},a);e._observe=Object(e._observe),e._observe[s.instance.$.uid]={init:!1,observer:o},o.observe(e)}function w(e,s){var t;const n=(t=e._observe)==null?void 0:t[s.instance.$.uid];!n||(n.observer.unobserve(e),delete e._observe[s.instance.$.uid])}const ee={mounted:Z,unmounted:w},me=ee,ve=m({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),ye=(e,s)=>{let{slots:n}=s;const{transition:t,...r}=e,{component:a=p,...o}=typeof t=="object"?t:{};return x(a,D(typeof t=="string"?{name:t}:o,r),n)},te=m({tag:{type:String,default:"div"}},"tag"),he=m({border:[Boolean,Number,String]},"border");function be(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_();return{borderClasses:v(()=>{const t=b(e)?e.value:e.border,r=[];if(t===!0||t==="")r.push(`${s}--border`);else if(typeof t=="string"||t===0)for(const a of String(t).split(" "))r.push(`border-${a}`);return r})}}const Se=m({elevation:{type:[Number,String],validator(e){const s=parseInt(e);return!isNaN(s)&&s>=0&&s<=24}}},"elevation");function Ce(e){return{elevationClasses:v(()=>{const n=b(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const pe=m({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function xe(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_();return{roundedClasses:v(()=>{const t=b(e)?e.value:e.rounded,r=[];if(t===!0||t==="")r.push(`${s}--rounded`);else if(typeof t=="string"||t===0)for(const a of String(t).split(" "))r.push(`rounded-${a}`);return r})}}function P(e){return $(()=>{const s=[],n={};return e.value.background&&(I(e.value.background)?n.backgroundColor=e.value.background:s.push(`bg-${e.value.background}`)),e.value.text&&(I(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):s.push(`text-${e.value.text}`)),{colorClasses:s,colorStyles:n}})}function ne(e,s){const n=v(()=>({text:b(e)?e.value:s?e[s]:null})),{colorClasses:t,colorStyles:r}=P(n);return{textColorClasses:t,textColorStyles:r}}function _e(e,s){const n=v(()=>({background:b(e)?e.value:s?e[s]:null})),{colorClasses:t,colorStyles:r}=P(n);return{backgroundColorClasses:t,backgroundColorStyles:r}}const se=["x-small","small","default","large","x-large"],oe=m({size:{type:[String,Number],default:"default"}},"size");function ie(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_();return $(()=>{let n,t;return q(se,e.size)?n=`${s}--size-${e.size}`:e.size&&(t={width:c(e.size),height:c(e.size)}),{sizeClasses:n,sizeStyles:t}})}const re=m({color:String,start:Boolean,end:Boolean,icon:F,...oe(),...te({tag:"i"}),...G()},"v-icon"),ze=h()({name:"VIcon",props:re(),setup(e,s){let{attrs:n,slots:t}=s,r;t.default&&(r=v(()=>{var g,y;const l=(g=t.default)==null?void 0:g.call(t);if(!!l)return(y=l.filter(C=>C.type===M&&C.children&&typeof C.children=="string")[0])==null?void 0:y.children}));const{themeClasses:a}=U(e),{iconData:o}=J(r||e),{sizeClasses:i}=ie(e),{textColorClasses:d,textColorStyles:f}=ne(K(e,"color"));return B(()=>S(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",a.value,i.value,d.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[i.value?void 0:{fontSize:c(e.size),height:c(e.size),width:c(e.size)},f.value],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>{var l;return[(l=t.default)==null?void 0:l.call(t)]}})),{}}});export{me as I,ye as M,ze as V,B as a,ve as b,ge as c,he as d,Se as e,pe as f,_e as g,be as h,Ce as i,xe as j,ue as k,ce as l,te as m,ne as n,oe as o,ie as p,fe as q,Q as r,X as s,P as t,le as u,de as v};
