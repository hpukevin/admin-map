import{L as e}from"./leaflet-src.1665546880675.js";import{a as t}from"./index.1665546880675.js";import{a2 as o,l as c,a as i,o as l}from"./vue.1665546880675.js";const d={id:"leaf_map"},p={__name:"graphicDraw",setup(_){let a=o({});c(()=>{a=e.map("leaf_map").setView([30.52181,114.39518],17),e.tileLayer("http://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=f6d75f77a5cb66b0fcfaec5cbe58a907",{noWrap:!0}).addTo(a),e.tileLayer("http://t0.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=f6d75f77a5cb66b0fcfaec5cbe58a907",{noWrap:!0}).addTo(a),r()});const r=()=>{e.circle([30.52181,114.39518],{radius:5,color:"red",fillOpacity:1}).addTo(a),e.polyline([[30.52247,114.39332],[30.5209,114.39332]],{color:"blue",weight:3}).addTo(a),e.circle([30.52094,114.39445],{radius:15,color:"#ffcc33",fillColor:"white",fillOpacity:.8}).addTo(a),e.rectangle([[30.52172,114.39359],[30.52153,114.39428]],{color:"#ff7800",weight:1,fillOpacity:.5}).addTo(a),e.polygon([[30.52263,114.39445],[30.52215,114.39406],[30.52215,114.39477]],{color:"red"}).addTo(a)};return(f,n)=>(l(),i("div",d))}};var v=t(p,[["__scopeId","data-v-1fbd3f39"]]);export{v as default};
