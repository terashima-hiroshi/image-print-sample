(function(e){function t(t){for(var a,i,o=t[0],s=t[1],p=t[2],l=0,h=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&h.push(c[i][0]),c[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(h.length)h.shift()();return r.push.apply(r,p||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==c[s]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/image-print-sample/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var p=0;p<o.length;p++)t(o[p]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";n("85ec")},"12e3":function(e,t,n){},"1ab1":function(e,t,n){"use strict";n("dfb0")},"623d":function(e,t,n){"use strict";n("12e3")},"85ec":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i=n("d4ec"),o=n("262e"),s=n("2caf"),p=n("9ab4"),u=n("1b40"),l=function(e){Object(o["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return n}(u["b"]);l=Object(p["a"])([Object(u["a"])({})],l);var h=l,m=h,d=(n("034f"),n("2877")),f=Object(d["a"])(m,c,r,!1,null,null,null),g=f.exports,v=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("ImagePicker")],1)},k=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"image-picker"},[n("div",{staticClass:"ctrl"},[n("button",{on:{click:e.preview}},[e._v("preview")])]),n("div",{staticClass:"panel"},e._l(e.images,(function(t,a){return n("div",{key:a,staticClass:"image",on:{click:function(e){t.checked=!t.checked}}},[n("div",{staticClass:"wrap"},[n("img",{attrs:{alt:"pop",src:t.path}})]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"image.checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checked)?e._i(t.checked,null)>-1:t.checked},on:{change:function(n){var a=t.checked,c=n.target,r=!!c.checked;if(Array.isArray(a)){var i=null,o=e._i(a,i);c.checked?o<0&&e.$set(t,"checked",a.concat([i])):o>-1&&e.$set(t,"checked",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(t,"checked",r)}}})])})),0)])},O=[],j=n("bee2"),w=function(e){Object(o["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.images=[{path:"./images/pop1.png",checked:!1},{path:"./images/pop2.png",checked:!1},{path:"./images/pop3.png",checked:!1},{path:"./images/pop4.png",checked:!1},{path:"./images/pop5.png",checked:!1},{path:"./images/pop6.png",checked:!1},{path:"./images/pop7.png",checked:!1},{path:"./images/pop8.png",checked:!1},{path:"./images/pop11.png",checked:!1},{path:"./images/pop12.png",checked:!1},{path:"./images/pop13.png",checked:!1},{path:"./images/pop14.png",checked:!1},{path:"./images/pop15.png",checked:!1},{path:"./images/pop16.png",checked:!1},{path:"./images/pop17.png",checked:!1},{path:"./images/pop18.png",checked:!1}],e}return Object(j["a"])(n,[{key:"preview",value:function(){this.$store.commit("setImages",this.images),this.$router.push({name:"Preview"})}}]),n}(u["b"]);w=Object(p["a"])([u["a"]],w);var _=w,P=_,x=(n("623d"),Object(d["a"])(P,y,O,!1,null,"63cd1c28",null)),C=x.exports,$={name:"Home",components:{ImagePicker:C}},N=$,S=Object(d["a"])(N,b,k,!1,null,null,null),E=S.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preview"},[n("PreviewConponent")],1)},I=[],M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preview"},[n("div",{staticClass:"ctrl"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.hNum,expression:"hNum"}],attrs:{type:"number",min:"1"},domProps:{value:e.hNum},on:{change:e.change,input:function(t){t.target.composing||(e.hNum=t.target.value)}}}),n("button",{on:{click:e.print}},[e._v("print")]),n("button",{on:{click:e.back}},[e._v("back")])]),n("div",{staticClass:"panel"},e._l(e.images,(function(e,t){return n("div",{key:t,staticClass:"image"},[n("div",{staticClass:"wrap"},[n("img",{attrs:{alt:"pop",src:e.path}})])])})),0)])},H=[],T=n("b85c"),B=(n("159b"),n("ac1f"),n("5319"),n("d3b7"),n("25f0"),function(e){Object(o["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.images=[],e.hNum=3,e}return Object(j["a"])(n,[{key:"mounted",value:function(){var e=this;this.$store.state.images.forEach((function(t){t.checked&&e.images.push(t)})),this.images.length||this.$router.replace({name:"Home"}),this.change()}},{key:"change",value:function(){var e=100/this.hNum,t=document.getElementsByClassName("image");if(t.length){var n,a=Object(T["a"])(t);try{for(a.s();!(n=a.n()).done;){var c=n.value;c.style.flexBasis=e+"%"}}catch(r){a.e(r)}finally{a.f()}}}},{key:"print",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){print()}))},{key:"back",value:function(){this.$router.back()}}]),n}(u["b"]));B=Object(p["a"])([u["a"]],B);var J=B,q=J,z=(n("1ab1"),Object(d["a"])(q,M,H,!1,null,"0f4d88d6",null)),D=z.exports,F={name:"Preview",components:{PreviewConponent:D}},G=F,K=Object(d["a"])(G,A,I,!1,null,null,null),L=K.exports;a["a"].use(v["a"]);var Q=[{path:"/",name:"Home",component:E},{path:"/preview",name:"Preview",component:L}],R=new v["a"]({mode:"history",base:"/image-print-sample/",routes:Q}),U=R,V=n("2f62");a["a"].use(V["a"]);var W=new V["a"].Store({state:{images:[]},mutations:{setImages:function(e,t){e.images=t}},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:U,store:W,render:function(e){return e(g)}}).$mount("#app")},dfb0:function(e,t,n){}});
//# sourceMappingURL=app.cc6832b7.js.map