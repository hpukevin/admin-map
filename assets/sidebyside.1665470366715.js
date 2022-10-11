import{L as h}from"./leaflet-src.1665470366715.js";import{a as x}from"./index.1665470366715.js";import{a2 as L,l as w,a as B,o as C,aB as S,aC as E,b as k}from"./vue.1665470366715.js";(function(){function d(i,p,o){function r(n,f){if(!p[n]){if(!i[n]){var u=typeof require=="function"&&require;if(!f&&u)return u(n,!0);if(l)return l(n,!0);var y=new Error("Cannot find module '"+n+"'");throw y.code="MODULE_NOT_FOUND",y}var c=p[n]={exports:{}};i[n][0].call(c.exports,function(m){var _=i[n][1][m];return r(_||m)},c,c.exports,d,i,p,o)}return p[n].exports}for(var l=typeof require=="function"&&require,s=0;s<o.length;s++)r(o[s]);return r}return d})()({1:[function(d,i,p){(function(o){var r=typeof window!="undefined"?window.L:typeof o!="undefined"?o.L:null;d("./layout.css"),d("./range.css");var l,s;function n(e,t,a,g){t.split(" ").forEach(function(A){r.DomEvent.on(e,A,a,g)})}function f(e,t,a,g){t.split(" ").forEach(function(A){r.DomEvent.off(e,A,a,g)})}function u(e){return"oninput"in e?"input":"change"}function y(){l=this._map.dragging.enabled(),s=this._map.tap&&this._map.tap.enabled(),this._map.dragging.disable(),this._map.tap&&this._map.tap.disable()}function c(e){this._refocusOnMap(e),l&&this._map.dragging.enable(),s&&this._map.tap.enable()}function m(e){return e==="undefined"?[]:Array.isArray(e)?e:[e]}function _(){}r.Control.SideBySide=r.Control.extend({options:{thumbSize:42,padding:0},initialize:function(e,t,a){this.setLeftLayers(e),this.setRightLayers(t),r.setOptions(this,a)},getPosition:function(){var e=this._range.value,t=(.5-e)*(2*this.options.padding+this.options.thumbSize);return this._map.getSize().x*e+t},setPosition:_,includes:r.Evented.prototype||r.Mixin.Events,addTo:function(e){this.remove(),this._map=e;var t=this._container=r.DomUtil.create("div","leaflet-sbs",e._controlContainer);this._divider=r.DomUtil.create("div","leaflet-sbs-divider",t);var a=this._range=r.DomUtil.create("input","leaflet-sbs-range",t);return a.type="range",a.min=0,a.max=1,a.step="any",a.value=.5,a.style.paddingLeft=a.style.paddingRight=this.options.padding+"px",this._addEvents(),this._updateLayers(),this},remove:function(){return this._map?(this._leftLayer&&(this._leftLayer.getContainer().style.clip=""),this._rightLayer&&(this._rightLayer.getContainer().style.clip=""),this._removeEvents(),r.DomUtil.remove(this._container),this._map=null,this):this},setLeftLayers:function(e){return this._leftLayers=m(e),this._updateLayers(),this},setRightLayers:function(e){return this._rightLayers=m(e),this._updateLayers(),this},_updateClip:function(){var e=this._map,t=e.containerPointToLayerPoint([0,0]),a=e.containerPointToLayerPoint(e.getSize()),g=t.x+this.getPosition(),A=this.getPosition();this._divider.style.left=A+"px",this.fire("dividermove",{x:A});var v="rect("+[t.y,g,a.y,t.x].join("px,")+"px)",b="rect("+[t.y,a.x,a.y,g].join("px,")+"px)";this._leftLayer&&(this._leftLayer.getContainer().style.clip=v),this._rightLayer&&(this._rightLayer.getContainer().style.clip=b)},_updateLayers:function(){if(!this._map)return this;var e=this._leftLayer,t=this._rightLayer;this._leftLayer=this._rightLayer=null,this._leftLayers.forEach(function(a){this._map.hasLayer(a)&&(this._leftLayer=a)},this),this._rightLayers.forEach(function(a){this._map.hasLayer(a)&&(this._rightLayer=a)},this),e!==this._leftLayer&&(e&&this.fire("leftlayerremove",{layer:e}),this._leftLayer&&this.fire("leftlayeradd",{layer:this._leftLayer})),t!==this._rightLayer&&(t&&this.fire("rightlayerremove",{layer:t}),this._rightLayer&&this.fire("rightlayeradd",{layer:this._rightLayer})),this._updateClip()},_addEvents:function(){var e=this._range,t=this._map;!t||!e||(t.on("move",this._updateClip,this),t.on("layeradd layerremove",this._updateLayers,this),n(e,u(e),this._updateClip,this),n(e,r.Browser.touch?"touchstart":"mousedown",y,this),n(e,r.Browser.touch?"touchend":"mouseup",c,this))},_removeEvents:function(){var e=this._range,t=this._map;e&&(f(e,u(e),this._updateClip,this),f(e,r.Browser.touch?"touchstart":"mousedown",y,this),f(e,r.Browser.touch?"touchend":"mouseup",c,this)),t&&(t.off("layeradd layerremove",this._updateLayers,this),t.off("move",this._updateClip,this))}}),r.control.sideBySide=function(e,t,a){return new r.Control.SideBySide(e,t,a)},i.exports=r.Control.SideBySide}).call(this,typeof global!="undefined"?global:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{"./layout.css":2,"./range.css":4}],2:[function(d,i,p){var o=d("./node_modules/cssify"),r=`.leaflet-sbs-range {\r
    position: absolute;\r
    top: 50%;\r
    width: 100%;\r
    z-index: 999;\r
}\r
.leaflet-sbs-divider {\r
    position: absolute;\r
    top: 0;\r
    bottom: 0;\r
    left: 50%;\r
    margin-left: -2px;\r
    width: 4px;\r
    background-color: #fff;\r
    pointer-events: none;\r
    z-index: 999;\r
}\r
`;o(r,void 0,"_i6aomd"),i.exports=r},{"./node_modules/cssify":3}],3:[function(d,i,p){function o(r,l,s){var n=r.getElementById(l);if(n)s(n);else{var f=r.getElementsByTagName("head")[0];n=r.createElement("style"),l!=null&&(n.id=l),s(n),f.appendChild(n)}return n}i.exports=function(r,l,s){var n=l||document;if(n.createStyleSheet){var f=n.createStyleSheet();return f.cssText=r,f.ownerNode}else return o(n,s,function(u){u.styleSheet?u.styleSheet.cssText=r:u.innerHTML=r})},i.exports.byUrl=function(r){if(document.createStyleSheet)return document.createStyleSheet(r).ownerNode;var l=document.getElementsByTagName("head")[0],s=document.createElement("link");return s.rel="stylesheet",s.href=r,l.appendChild(s),s}},{}],4:[function(d,i,p){var o=d("./node_modules/cssify"),r=`.leaflet-sbs-range {\r
    -webkit-appearance: none;\r
    display: inline-block!important;\r
    vertical-align: middle;\r
    height: 0;\r
    padding: 0;\r
    margin: 0;\r
    border: 0;\r
    background: rgba(0, 0, 0, 0.25);\r
    min-width: 100px;\r
    cursor: pointer;\r
    pointer-events: none;\r
    z-index: 999;\r
}\r
.leaflet-sbs-range::-ms-fill-upper {\r
    background: transparent;\r
}\r
.leaflet-sbs-range::-ms-fill-lower {\r
    background: rgba(255, 255, 255, 0.25);\r
}\r
/* Browser thingies */\r
\r
.leaflet-sbs-range::-moz-range-track {\r
    opacity: 0;\r
}\r
.leaflet-sbs-range::-ms-track {\r
    opacity: 0;\r
}\r
.leaflet-sbs-range::-ms-tooltip {\r
    display: none;\r
}\r
/* For whatever reason, these need to be defined\r
 * on their own so dont group them */\r
\r
.leaflet-sbs-range::-webkit-slider-thumb {\r
    -webkit-appearance: none;\r
    margin: 0;\r
    padding: 0;\r
    background: #fff;\r
    height: 40px;\r
    width: 40px;\r
    border-radius: 20px;\r
    cursor: ew-resize;\r
    pointer-events: auto;\r
    border: 1px solid #ddd;\r
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABlBMVEV9fX3///+Kct39AAAAAnRSTlP/AOW3MEoAAAA9SURBVFjD7dehDQAwDANBZ/+l2wmKoiqR7pHRcaeaCxAIBAL/g7k9JxAIBAKBQCAQCAQC14H+MhAIBE4CD3fOFvGVBzhZAAAAAElFTkSuQmCC");\r
    background-position: 50% 50%;\r
    background-repeat: no-repeat;\r
    background-size: 40px 40px;\r
}\r
.leaflet-sbs-range::-ms-thumb {\r
    margin: 0;\r
    padding: 0;\r
    background: #fff;\r
    height: 40px;\r
    width: 40px;\r
    border-radius: 20px;\r
    cursor: ew-resize;\r
    pointer-events: auto;\r
    border: 1px solid #ddd;\r
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABlBMVEV9fX3///+Kct39AAAAAnRSTlP/AOW3MEoAAAA9SURBVFjD7dehDQAwDANBZ/+l2wmKoiqR7pHRcaeaCxAIBAL/g7k9JxAIBAKBQCAQCAQC14H+MhAIBE4CD3fOFvGVBzhZAAAAAElFTkSuQmCC");\r
    background-position: 50% 50%;\r
    background-repeat: no-repeat;\r
    background-size: 40px 40px;\r
}\r
.leaflet-sbs-range::-moz-range-thumb {\r
    padding: 0;\r
    right: 0    ;\r
    background: #fff;\r
    height: 40px;\r
    width: 40px;\r
    border-radius: 20px;\r
    cursor: ew-resize;\r
    pointer-events: auto;\r
    border: 1px solid #ddd;\r
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABlBMVEV9fX3///+Kct39AAAAAnRSTlP/AOW3MEoAAAA9SURBVFjD7dehDQAwDANBZ/+l2wmKoiqR7pHRcaeaCxAIBAL/g7k9JxAIBAKBQCAQCAQC14H+MhAIBE4CD3fOFvGVBzhZAAAAAElFTkSuQmCC");\r
    background-position: 50% 50%;\r
    background-repeat: no-repeat;\r
    background-size: 40px 40px;\r
}\r
.leaflet-sbs-range:disabled::-moz-range-thumb {\r
    cursor: default;\r
}\r
.leaflet-sbs-range:disabled::-ms-thumb {\r
    cursor: default;\r
}\r
.leaflet-sbs-range:disabled::-webkit-slider-thumb {\r
    cursor: default;\r
}\r
.leaflet-sbs-range:disabled {\r
    cursor: default;\r
}\r
.leaflet-sbs-range:focus {\r
    outline: none!important;\r
}\r
.leaflet-sbs-range::-moz-focus-outer {\r
    border: 0;\r
}\r
\r
`;o(r,void 0,"_1tlt668"),i.exports=r},{"./node_modules/cssify":3}]},{},[1]);const z=d=>(S("data-v-c2d018f8"),d=d(),E(),d),D=z(()=>k("div",{id:"leaf_map"},null,-1)),T=[D],R={__name:"sidebyside",setup(d){let i=L({});return w(()=>{i=h.map("leaf_map").setView([23.221,113.394],10);var p=h.tileLayer("http://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=f6d75f77a5cb66b0fcfaec5cbe58a907",{noWrap:!0}),o=h.tileLayer("http://t0.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=f6d75f77a5cb66b0fcfaec5cbe58a907",{noWrap:!0}),r=h.tileLayer("http://t0.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=f6d75f77a5cb66b0fcfaec5cbe58a907",{noWrap:!0}),l=h.tileLayer("http://t0.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=f6d75f77a5cb66b0fcfaec5cbe58a907",{noWrap:!0}),s=h.layerGroup([p,o]),n=h.layerGroup([r,l]);i.addLayer(s),i.addLayer(n),h.control.sideBySide([p,o],[r]).addTo(i)}),(p,o)=>(C(),B("div",null,T))}};var U=x(R,[["__scopeId","data-v-c2d018f8"]]);export{U as default};
