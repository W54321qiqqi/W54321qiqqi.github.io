import{_ as B}from"./index-b2e204a1.js";import{B as T}from"./index-e4f0bbc7.js";import{_ as V}from"./index-9d1ad57c.js";import{_ as $}from"./index.vue_vue_type_script_setup_true_lang-a99eb9e8.js";import{a as D,l as i,cd as N,o as r,z as d,t,ax as h,f as u,s,x as m,e as w,v as F,ak as z,F as E,ay as I,b_ as g}from"./index-321a69c9.js";import"./useTagViewSetting-b9295522.js";import"./index.vue_vue_type_script_setup_true_lang-d403be8f.js";import"./index-c7108e1e.js";import"./el-popper-634c8048.js";const O=D({__name:"index",setup(R){const p=i(!1),_=i(!1),l=i(1e3),v=i(["pulse","rect","plane","cube","preloader","chase","dot"]),f=o=>{_.value=o===2,p.value=!0,setTimeout(()=>{p.value=!1},2e3)},k=o=>{const{open:e,close:n}=g({spin:o});e(),setTimeout(()=>{n()},2e3)},y=()=>{const{open:o,close:e}=g({minTime:l.value});o(),e()};return(o,e)=>{const n=$,c=V,b=T,x=B,C=N("custom-loading");return r(),d(x,null,{default:t(()=>[h((r(),d(c,{title:"指令方式加载loading",class:"relative",height:"150px","loading-text":"自定义指令loading","loading-spin":"pulse","loading-full":u(_)},{default:t(()=>[s(n,{type:"primary",onClick:e[0]||(e[0]=a=>f(1))},{default:t(()=>[m(" v-custom-loading指令非全屏 ")]),_:1}),s(n,{type:"primary",onClick:e[1]||(e[1]=a=>f(2))},{default:t(()=>[m(" v-custom-loading指令全屏 ")]),_:1})]),_:1},8,["loading-full"])),[[C,u(p)]]),s(c,{title:"hook加载loading"},{default:t(()=>[(r(!0),w(E,null,F(u(v),(a,L)=>(r(),d(n,{type:"primary",key:a,onClick:S=>k(a)},{default:t(()=>[m(" loading"+z(L+1),1)]),_:2},1032,["onClick"]))),128))]),_:1}),s(c,{title:"loading最小时长"},{default:t(()=>[s(b,{modelValue:u(l),"onUpdate:modelValue":e[2]||(e[2]=a=>I(l)?l.value=a:null),class:"mr-5",controls:"","controls-position":"right"},null,8,["modelValue"]),s(n,{type:"primary",onClick:y},{default:t(()=>[m(" 点击触发loading ")]),_:1})]),_:1})]),_:1})}}});export{O as default};
