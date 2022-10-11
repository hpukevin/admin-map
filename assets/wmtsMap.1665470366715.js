import{L as o}from"./leaflet-src.1665470366715.js";import{a as u}from"./index.1665470366715.js";import{l as x,a as w,o as g}from"./vue.1665470366715.js";(function(e){typeof define=="function"&&define.amd?define(e):e()})(function(){L.TileLayer.WMTS=L.TileLayer.extend({defaultWmtsParams:{service:"WMTS",request:"GetTile",version:"1.0.0",layer:"",style:"",tilematrixset:"",format:"image/jpeg"},initialize(e,t){this._url=e;const i={};Object.keys(t).forEach(a=>i[a.toLowerCase()]=t[a]);const s=L.extend({},this.defaultWmtsParams),r=i.tileSize||this.options.tileSize;i.detectRetina&&L.Browser.retina?(s.width=2*r,s.height=2*r):(s.width=r,s.height=r);for(const a in i)s.hasOwnProperty(a)&&a!=="matrixIds"&&(s[a]=i[a]);this.wmtsParams=s,this.matrixIds=t.matrixIds||this.getDefaultMatrix(),L.setOptions(this,t)},onAdd(e){this._crs=this.options.crs||e.options.crs,L.TileLayer.prototype.onAdd.call(this,e)},getTileUrl(e){const t=this.options.tileSize,i=e.multiplyBy(t);i.x+=1,i.y-=1;const s=i.add(new L.Point(t,t)),r=this._tileZoom,a=this._crs.project(this._map.unproject(s,r)),n=this._crs.project(this._map.unproject(i,r)),m=a.x-n.x,p=this.matrixIds[r].identifier,d=`${this.wmtsParams.tilematrixset}:${p}`,c=this.matrixIds[r].topLeftCorner.lng,h=this.matrixIds[r].topLeftCorner.lat,f=Math.floor((n.x-c)/m),_=-Math.floor((n.y-h)/m),l=L.Util.template(this._url,{s:this._getSubdomain(e)});return`${l}${L.Util.getParamString(this.wmtsParams,l)}&tilematrix=${d}&tilerow=${_}&tilecol=${f}`},setParams(e,t){return L.extend(this.wmtsParams,e),t||this.redraw(),this},getDefaultMatrix(){const e=new Array(22);for(let t=0;t<22;t++)e[t]={identifier:String(t),topLeftCorner:new L.LatLng(200375083428e-4,-200375083428e-4)};return e}})});const y={id:"leaf_map"},v={__name:"wmtsMap",setup(e){return x(()=>{var t=o.map("leaf_map",{crs:o.CRS.EPSG3857,center:[23.1317,113.5048],zoom:12});for(let i=1;i<16;++i)""+(i+1),new o.LatLng(90,-180);new o.TileLayer.WMTS("/geoserver/gwc/service/wmts",{layer:"image:hp",tilematrixset:"test",format:"image/png",attribution:"4490"}).addTo(t)}),(t,i)=>(g(),w("div",y))}};var T=u(v,[["__scopeId","data-v-02deee33"]]);export{T as default};
