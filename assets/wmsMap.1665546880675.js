import{L as a}from"./leaflet-src.1665546880675.js";import{a as e}from"./index.1665546880675.js";import{l as o,a as r,o as n}from"./vue.1665546880675.js";const s={id:"leaf_map"},_={__name:"wmsMap",setup(d){return o(()=>{var t=a.map("leaf_map",{crs:a.CRS.EPSG3857,center:[23.1317,113.2748],zoom:10,minZoom:1,zoomControl:!1,attributionControl:!1,maxBounds:a.latLngBounds(a.latLng(-180,-180),a.latLng(180,180))});a.tileLayer("http://t0.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=f6d75f77a5cb66b0fcfaec5cbe58a907",{noWrap:!0}).addTo(t),a.tileLayer("http://t0.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=f6d75f77a5cb66b0fcfaec5cbe58a907",{noWrap:!0}).addTo(t),a.tileLayer.wms("/geoserver/wuyong/wms",{layers:"wuyong:gzbuild",transparent:!0,format:"image/png",attribution:"Weather data \xA9 2012 IEM Nexrad"}).addTo(t)}),(t,m)=>(n(),r("div",s))}};var l=e(_,[["__scopeId","data-v-5d197d20"]]);export{l as default};
