import{p as J,i as j,c,r as R,a as B,g as Q,o as ce,b as L,d as ve,e as ee,f as pe,h as me,j as de,k as fe,l as M,u as ye,t as W,m as y,n as te,q as D,s as K,w as P,v as ge,x as he,y as be,z as _e,A as xe}from"./index.91913d98.js";import{m as Ie,u as oe,V as Y,a as Ve,b as Se}from"./ssrBoot.fc4c31c1.js";import{u as we,a as k,V as $e,m as Ae}from"./VIcon.2cf66452.js";const C=Symbol.for("vuetify:layout"),ae=Symbol.for("vuetify:layout-item"),G=1e3,Be=J({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Te=J({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function ze(){const e=j(C);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Le(e){var v;const a=j(C);if(!a)throw new Error("[Vuetify] Could not find injected layout");const t=(v=e.id)!=null?v:`layout-item-${ve()}`,n=Q("useLayoutItem");ee(ae,{id:t});const s=R(!1);pe(()=>s.value=!0),me(()=>s.value=!1);const{layoutItemStyles:u,layoutItemScrimStyles:r}=a.register(n,{...e,active:c(()=>s.value?!1:e.active.value),id:t});return de(()=>a.unregister(t)),{layoutItemStyles:u,layoutRect:a.layoutRect,layoutItemScrimStyles:r}}const Re=(e,a,t,n)=>{let s={top:0,left:0,right:0,bottom:0};const u=[{id:"",layer:{...s}}];for(const r of e){const v=a.get(r),p=t.get(r),b=n.get(r);if(!v||!p||!b)continue;const d={...s,[v.value]:parseInt(s[v.value],10)+(b.value?parseInt(p.value,10):0)};u.push({id:r,layer:d}),s=d}return u};function Pe(e){const a=j(C,null),t=c(()=>a?a.rootZIndex.value-100:G),n=R([]),s=B(new Map),u=B(new Map),r=B(new Map),v=B(new Map),p=B(new Map),{resizeRef:b,contentRect:d}=we(),T=c(()=>{var o;const l=new Map,m=(o=e.overlaps)!=null?o:[];for(const h of m.filter(i=>i.includes(":"))){const[i,f]=h.split(":");if(!n.value.includes(i)||!n.value.includes(f))continue;const x=s.get(i),w=s.get(f),$=u.get(i),z=u.get(f);!x||!w||!$||!z||(l.set(f,{position:x.value,amount:parseInt($.value,10)}),l.set(i,{position:w.value,amount:-parseInt(z.value,10)}))}return l}),_=c(()=>{const l=[...new Set([...r.values()].map(o=>o.value))].sort((o,h)=>o-h),m=[];for(const o of l){const h=n.value.filter(i=>{var f;return((f=r.get(i))==null?void 0:f.value)===o});m.push(...h)}return Re(m,s,u,v)}),I=c(()=>!Array.from(p.values()).some(l=>l.value)),V=c(()=>_.value[_.value.length-1].layer),ne=c(()=>({"--v-layout-left":L(V.value.left),"--v-layout-right":L(V.value.right),"--v-layout-top":L(V.value.top),"--v-layout-bottom":L(V.value.bottom),...I.value?void 0:{transition:"none"}})),S=c(()=>_.value.slice(1).map((l,m)=>{let{id:o}=l;const{layer:h}=_.value[m],i=u.get(o),f=s.get(o);return{id:o,...h,size:Number(i.value),position:f.value}})),U=l=>S.value.find(m=>m.id===l),H=Q("createLayout"),Z=R(!1);ce(()=>{Z.value=!0}),ee(C,{register:(l,m)=>{let{id:o,order:h,position:i,layoutSize:f,elementSize:x,active:w,disableTransitions:$,absolute:z}=m;r.set(o,h),s.set(o,i),u.set(o,f),v.set(o,w),$&&p.set(o,$);const q=fe(ae,H==null?void 0:H.vnode).indexOf(l);q>-1?n.value.splice(q,0,o):n.value.push(o);const X=c(()=>S.value.findIndex(A=>A.id===o)),O=c(()=>t.value+_.value.length*2-X.value*2),ue=c(()=>{const A=i.value==="left"||i.value==="right",N=i.value==="right",re=i.value==="bottom",F={[i.value]:0,zIndex:O.value,transform:`translate${A?"X":"Y"}(${(w.value?0:-110)*(N||re?-1:1)}%)`,position:z.value||t.value!==G?"absolute":"fixed",...I.value?void 0:{transition:"none"}};if(!Z.value)return F;const g=S.value[X.value];if(!g)throw new Error(`[Vuetify] Could not find layout item "${o}"`);const E=T.value.get(o);return E&&(g[E.position]+=E.amount),{...F,height:A?`calc(100% - ${g.top}px - ${g.bottom}px)`:x.value?`${x.value}px`:void 0,left:N?void 0:`${g.left}px`,right:N?`${g.right}px`:void 0,top:i.value!=="bottom"?`${g.top}px`:void 0,bottom:i.value!=="top"?`${g.bottom}px`:void 0,width:A?x.value?`${x.value}px`:void 0:`calc(100% - ${g.left}px - ${g.right}px)`}}),ie=c(()=>({zIndex:O.value-1}));return{layoutItemStyles:ue,layoutItemScrimStyles:ie,zIndex:O}},unregister:l=>{r.delete(l),s.delete(l),u.delete(l),v.delete(l),p.delete(l),n.value=n.value.filter(m=>m!==l)},mainRect:V,mainStyles:ne,getLayoutItem:U,items:S,layoutRect:d,rootZIndex:t});const se=c(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),le=c(()=>({zIndex:t.value,position:a?"relative":void 0,overflow:a?"hidden":void 0}));return{layoutClasses:se,layoutStyles:le,getLayoutItem:U,items:S,layoutRect:d,layoutRef:b}}const Ce=M()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Ie(),...Te(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const n=R(),s=ye(e,"modelValue"),u=c(()=>{var d,T,_,I;const p=(T=(d=n.value)==null?void 0:d.contentHeight)!=null?T:0,b=(I=(_=n.value)==null?void 0:_.extensionHeight)!=null?I:0;return p+b}),{ssrBootStyles:r}=oe(),{layoutItemStyles:v}=Le({id:e.name,order:c(()=>parseInt(e.order,10)),position:W(e,"location"),layoutSize:u,elementSize:u,active:s,absolute:W(e,"absolute")});return k(()=>{const[p]=Y.filterProps(e);return y(Y,te({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...v.value,height:void 0,...r.value}},p),t)}),{}}}),Me=M()({name:"VAppBarTitle",props:Ve(),setup(e,a){let{slots:t}=a;return k(()=>y(Se,te(e,{class:"v-app-bar-title"}),t)),{}}}),ke={__name:"AppBar",setup(e){return(a,t)=>(D(),K(Ce,{flat:""},{default:P(()=>[y(Me,null,{default:P(()=>[y($e,{icon:"mdi-circle-slice-4"}),ge(" Auto Bot ")]),_:1})]),_:1}))}};const He=M()({name:"VMain",props:{scrollable:Boolean,...Ae({tag:"main"})},setup(e,a){let{slots:t}=a;const{mainStyles:n}=ze(),{ssrBootStyles:s}=oe();return k(()=>y(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[n.value,s.value]},{default:()=>{var u,r;return[e.scrollable?y("div",{class:"v-main__scroller"},[(u=t.default)==null?void 0:u.call(t)]):(r=t.default)==null?void 0:r.call(t)]}})),{}}}),Oe={__name:"View",setup(e){return(a,t)=>{const n=he("router-view");return D(),K(He,null,{default:P(()=>[y(n)]),_:1})}}};const Ne=M()({name:"VApp",props:{...Be({fullHeight:!0}),...be()},setup(e,a){let{slots:t}=a;const n=_e(e),{layoutClasses:s,layoutStyles:u,getLayoutItem:r,items:v,layoutRef:p}=Pe(e),{rtlClasses:b}=xe();return k(()=>{var d;return y("div",{ref:p,class:["v-application",n.themeClasses.value,s.value,b.value],style:u.value},[y("div",{class:"v-application__wrap"},[(d=t.default)==null?void 0:d.call(t)])])}),{getLayoutItem:r,items:v,theme:n}}}),Ue={__name:"Default",setup(e){return(a,t)=>(D(),K(Ne,null,{default:P(()=>[y(ke),y(Oe)]),_:1}))}};export{Ue as default};
