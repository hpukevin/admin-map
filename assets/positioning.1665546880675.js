import{L as d}from"./leaflet-src.1665546880675.js";import{a as V,E as m}from"./index.1665546880675.js";import{a2 as u,l as X,a as x,b as f,Z as t,S as a,a6 as r,o as Y,aB as w,aC as h,X as v}from"./vue.1665546880675.js";const N=l=>(w("data-v-69e4ab56"),l=l(),h(),l),k=v("\u5B9A\u4F4D"),S=v("\u590D\u4F4D"),C=N(()=>f("div",{id:"leaf_map"},null,-1)),T={__name:"positioning",setup(l){const e=u({X:113.394,Y:23.221});let o=u({});const y=()=>{if(e.X!=""&&e.Y!="")if(!isNaN(e.X)&&!isNaN(e.Y))e.X=parseFloat(e.X),e.Y=parseFloat(e.Y);else{m({message:"\u8BF7\u8F93\u5165\u6570\u5B57\uFF01",type:"warning"});return}else{m({message:"\u8BF7\u8F93\u5165\u5185\u5BB9\uFF01",type:"warning"});return}const n=[e.Y,e.X];o.setView(n,o.getZoom())},b=()=>{const n=[23.221,113.394];o.setView(n,10)};return X(()=>{o=d.map("leaf_map").setView([23.221,113.394],10),d.tileLayer("http://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=f6d75f77a5cb66b0fcfaec5cbe58a907",{noWrap:!0}).addTo(o),d.tileLayer("http://t0.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=f6d75f77a5cb66b0fcfaec5cbe58a907",{noWrap:!0}).addTo(o)}),(n,s)=>{const _=r("el-input"),i=r("el-form-item"),c=r("el-button"),g=r("el-form");return Y(),x("div",null,[f("div",null,[t(g,{model:e,class:"form-inline"},{default:a(()=>[t(i,{label:"X\u5750\u6807"},{default:a(()=>[t(_,{modelValue:e.X,"onUpdate:modelValue":s[0]||(s[0]=p=>e.X=p),placeholder:"X\u5750\u6807"},null,8,["modelValue"])]),_:1}),t(i,{label:"Y\u5750\u6807"},{default:a(()=>[t(_,{modelValue:e.Y,"onUpdate:modelValue":s[1]||(s[1]=p=>e.Y=p),placeholder:"Y\u5750\u6807"},null,8,["modelValue"])]),_:1}),t(i,null,{default:a(()=>[t(c,{type:"primary",onClick:y},{default:a(()=>[k]),_:1}),t(c,{type:"primary",onClick:b},{default:a(()=>[S]),_:1})]),_:1})]),_:1},8,["model"])]),C])}}};var L=V(T,[["__scopeId","data-v-69e4ab56"]]);export{L as default};
