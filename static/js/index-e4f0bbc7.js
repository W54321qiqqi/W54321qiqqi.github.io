import{_ as P}from"./index.vue_vue_type_script_setup_true_lang-d403be8f.js";import{a as k,l as A,c,f as a,ce as b,a2 as D,o as f,e as N,n as _,s as V,g as w,ay as E,aO as F,A as M,bf as S}from"./index-321a69c9.js";const T={modelValue:{type:[String,Number]},disabled:{type:Boolean,default:!1},controls:{type:Boolean,default:!1},controlsPosition:{type:String,default:"",validator(r){return["","right"].includes(r)}},precision:{type:Number,default:0,validator:r=>r>=0&&r===Number.parseInt(`${r}`,10)},max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},step:{type:Number,default:1},text:{type:Boolean,default:!1}};const O=k({name:"BaseInputNumber",__name:"index",props:T,emits:["update:modelValue","change"],setup(r,{emit:d}){const t=r,l=A(),v=c(()=>{const{disabled:e,controls:n}=t;return["el-input-number",{"is-disabled":e},{"is-without-controls":!n},{"is-controls-right":a(m)}]}),m=c(()=>t.controls&&t.controlsPosition==="right"),g=c(()=>b(t.modelValue)&&i(t.modelValue,-1)<t.min),y=c(()=>b(t.modelValue)&&i(t.modelValue,1)>t.max),i=(e,n=1)=>b(e)?h(e+t.step*n,t.precision):a(l),p=e=>{const n=e!==""?Number(e):"";l.value=I(n),d("update:modelValue",a(l)),d("change",a(l))},B=()=>{if(t.disabled||a(g))return;const e=t.modelValue||0,n=i(Number(e),-1);p(n)},C=()=>{if(t.disabled||a(y))return;const e=t.modelValue||0,n=i(Number(e),1);p(n)},I=e=>{const{max:n,min:s,precision:u}=t;let o=Number(e);return e==null||Number.isNaN(o)||e===""?null:(u!==0&&(o=h(o,u)),(o>n||o<s)&&(o=o>n?n:s),o)},h=(e,n)=>{if(n===0)return Math.round(e);let s=String(e);const u=s.indexOf(".");if(u===-1||!s.replace(".","").split("")[u+n])return e;const x=s.length;return s.charAt(x-1)==="5"&&(s=`${s.slice(0,Math.max(0,x-1))}6`),Number.parseFloat(Number(s).toFixed(n))};return D(()=>t.modelValue,e=>{l.value=I(e),d("update:modelValue",l.value)},{immediate:!0}),(e,n)=>{const s=M,u=P;return f(),N("div",{class:_(a(v)),onDragstart:n[1]||(n[1]=F(()=>{},["prevent"]))},[e.controls&&!e.text?(f(),N("span",{key:0,role:"button",class:_(["el-input-number__decrease",{"is-disabled":a(g)}]),"aria-label":"decrease number",onClick:B},[V(s,{name:a(m)?"el-icon-ArrowDown":"el-icon-Minus"},null,8,["name"])],2)):w("",!0),e.controls&&!e.text?(f(),N("span",{key:1,role:"button",class:_(["el-input-number__increase",{"is-disabled":a(y)}]),"aria-label":"increase number",onClick:C},[V(s,{name:a(m)?"el-icon-ArrowUp":"el-icon-Plus"},null,8,["name"])],2)):w("",!0),V(u,{modelValue:a(l),"onUpdate:modelValue":n[0]||(n[0]=o=>E(l)?l.value=o:null),type:"number",disabled:e.disabled,clearable:!1,text:e.text,onChange:p,class:"text-left"},null,8,["modelValue","disabled","text"])],34)}}});const Y=S(O,[["__scopeId","data-v-5c352b59"]]);export{Y as B};
