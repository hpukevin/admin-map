import{u as f,L as s,_ as a}from"./index.1665470366715.js";import{K as p,aE as n,s as v,J as L,H as E,u as e,o as u,R as i,W as C,k as R}from"./vue.1665470366715.js";const g=p({name:"layout"}),A=Object.assign(g,{setup(T){const _=n(()=>a(()=>import("./defaults.1665470366715.js"),["assets/defaults.1665470366715.js","assets/vue.1665470366715.js","assets/index.1665470366715.js","assets/index.16654703667154.css","assets/aside.1665470366715.js","assets/main.1665470366715.js","assets/main.1665470366715.css","assets/parent.1665470366715.js"])),c=n(()=>a(()=>import("./classic.1665470366715.js"),["assets/classic.1665470366715.js","assets/vue.1665470366715.js","assets/index.1665470366715.js","assets/index.16654703667154.css","assets/aside.1665470366715.js","assets/main.1665470366715.js","assets/main.1665470366715.css","assets/parent.1665470366715.js"])),m=n(()=>a(()=>import("./transverse.1665470366715.js"),["assets/transverse.1665470366715.js","assets/main.1665470366715.js","assets/main.1665470366715.css","assets/vue.1665470366715.js","assets/index.1665470366715.js","assets/index.16654703667154.css","assets/parent.1665470366715.js"])),d=n(()=>a(()=>import("./columns.1665470366715.js"),["assets/columns.1665470366715.js","assets/columns.1665470366715.css","assets/vue.1665470366715.js","assets/index.1665470366715.js","assets/index.16654703667154.css","assets/aside.1665470366715.js","assets/main.1665470366715.js","assets/main.1665470366715.css","assets/parent.1665470366715.js"])),{proxy:r}=R(),y=f(),{themeConfig:t}=v(y),l=()=>{s.get("oldLayout")||s.set("oldLayout",t.value.layout);const o=document.body.clientWidth;o<1e3?(t.value.isCollapse=!1,r.mittBus.emit("layoutMobileResize",{layout:"defaults",clientWidth:o})):r.mittBus.emit("layoutMobileResize",{layout:s.get("oldLayout")?s.get("oldLayout"):t.value.layout,clientWidth:o})};return L(()=>{l(),window.addEventListener("resize",l)}),E(()=>{window.removeEventListener("resize",l)}),(o,k)=>e(t).layout==="defaults"?(u(),i(e(_),{key:0})):e(t).layout==="classic"?(u(),i(e(c),{key:1})):e(t).layout==="transverse"?(u(),i(e(m),{key:2})):e(t).layout==="columns"?(u(),i(e(d),{key:3})):C("",!0)}});export{A as default};
