import{c1 as $,c2 as w,c3 as C,c4 as S,b as T,a as k,u as B,c as R,o,e as u,q as d,r as l,f as t,z as g,n,aj as h,g as r,ak as b,_ as I,w as N,k as D,aD as E,t as _,x as H}from"./index-321a69c9.js";import{_ as V}from"./index.vue_vue_type_script_setup_true_lang-a99eb9e8.js";const a={success:"icon-success",warning:"icon-warning",error:"icon-error",info:"icon-info"},y={[a.success]:$,[a.warning]:w,[a.error]:C,[a.info]:S},z=T({title:{type:String,default:""},subTitle:{type:String,default:""},icon:{type:String,values:["success","warning","info","error"],default:"info"}}),M=k({name:"ElResult"}),P=k({...M,props:z,setup(f){const p=f,s=B("result"),i=R(()=>{const e=p.icon,c=e&&a[e]?a[e]:"icon-info",m=y[c]||y["icon-info"];return{class:c,component:m}});return(e,c)=>(o(),u("div",{class:n(t(s).b())},[d("div",{class:n(t(s).e("icon"))},[l(e.$slots,"icon",{},()=>[t(i).component?(o(),g(h(t(i).component),{key:0,class:n(t(i).class)},null,8,["class"])):r("v-if",!0)])],2),e.title||e.$slots.title?(o(),u("div",{key:0,class:n(t(s).e("title"))},[l(e.$slots,"title",{},()=>[d("p",null,b(e.title),1)])],2)):r("v-if",!0),e.subTitle||e.$slots["sub-title"]?(o(),u("div",{key:1,class:n(t(s).e("subtitle"))},[l(e.$slots,"sub-title",{},()=>[d("p",null,b(e.subTitle),1)])],2)):r("v-if",!0),e.$slots.extra?(o(),u("div",{key:2,class:n(t(s).e("extra"))},[l(e.$slots,"extra")],2)):r("v-if",!0)],2))}});var j=I(P,[["__file","/home/runner/work/element-plus/element-plus/packages/components/result/src/result.vue"]]);const q=N(j);const G=k({name:"BaseResult",__name:"index",props:{status:{default:"info"},title:{default:""},subTitle:{default:""},returnText:{default:"返回上一页"},goHome:{type:Boolean,default:!1},isSlot:{type:Boolean,default:!1}},setup(f){const p=f,s=D(),i=()=>{p.goHome?s.replace("/"):s.go(-1)};return(e,c)=>{const m=V,v=q;return o(),g(v,{title:e.title,"sub-title":e.subTitle,icon:e.status},E({extra:_(()=>[l(e.$slots,"extra"),e.$slots.extra?r("",!0):(o(),g(m,{key:0,type:"primary",onClick:i},{default:_(()=>[H(b(e.goHome?"返回首页":e.returnText),1)]),_:1}))]),_:2},[e.isSlot?{name:"icon",fn:_(()=>[l(e.$slots,"icon")]),key:"0"}:void 0]),1032,["title","sub-title","icon"])}}});export{G as _};
