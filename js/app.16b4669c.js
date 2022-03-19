(function(t){function e(e){for(var n,s,a=e[0],c=e[1],u=e[2],l=0,f=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},o={app:0},i=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var p=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0943":function(t,e,r){},"1b20":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("app-bar"),r("guitar"),r("side-menu",{attrs:{show:t.guitarConfig.showSideMenu}})],1)},i=[],s=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"main",attrs:{transition:"slide"}},[t._v(" Hello ")])},c=[],u={props:["show"],data:function(){return{}}},p=u,l=(r("b056"),r("2877")),f=Object(l["a"])(p,a,c,!1,null,"1b56b518",null),d=f.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"is-flex options shadow"},[r("div",{staticClass:"button-menu",staticStyle:{display:"flex","flex-direction":"column"}},[r("button",{staticClass:"button is-danger",on:{click:function(e){return t.set(Object.assign({},t.guitarConfig,{realFretSpacing:!t.guitarConfig.realFretSpacing}))}}},[t._v(" "+t._s(t.guitarConfig.realFretSpacing?"Real":"Equal")+" Fret Spacing ")]),r("button",{staticClass:"button is-danger",on:{click:function(e){t.guitarConfig.isVertical=!t.guitarConfig.isVertical}}},[t._v(t._s(t.guitarConfig.isVertical?"Vertical":"Horizontal"))]),r("button",{staticClass:"button is-danger",on:{click:function(e){t.guitarConfig.showSideMenu=!t.guitarConfig.showSideMenu}}},[t._v("Chord Menu")])]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.guitarConfig.fretCount,expression:"guitarConfig.fretCount"}],staticClass:"slider is-fullwidth is-large is-circle",attrs:{type:"range",step:"1",min:"16",max:"26"},domProps:{value:t.guitarConfig.fretCount},on:{__r:function(e){return t.$set(t.guitarConfig,"fretCount",e.target.value)}}}),t._m(0),t._m(1)])},v=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"info"},[r("div",[t._v("Chord Info: ")]),r("div",[t._v("Major: "),r("span",{staticClass:"selected"},[t._v("Root")]),t._v(", "),r("span",{staticClass:"major-third"},[t._v("Major Third")]),t._v(", "),r("span",{staticClass:"major-fifth"},[t._v("Major Fifth")])]),r("div",[t._v("Minor: "),r("span",{staticClass:"selected"},[t._v("Root")]),t._v(", "),r("span",{staticClass:"minor-third"},[t._v("Minor Third")]),t._v(", "),r("span",{staticClass:"major-fifth"},[t._v("Major Fifth")])]),r("div",[t._v("Major Seventh: "),r("span",{staticClass:"selected"},[t._v("Root")]),t._v(", "),r("span",{staticClass:"major-third"},[t._v("Major Third")]),t._v(", "),r("span",{staticClass:"major-seventh"},[t._v("Major Seventh")])]),r("div",[t._v("Minor Seventh: "),r("span",{staticClass:"selected"},[t._v("Root")]),t._v(", "),r("span",{staticClass:"minor-third"},[t._v("Minor Third")]),t._v(", "),r("span",{staticClass:"major-fifth"},[t._v("Major Fifth")]),t._v(", "),r("span",{staticClass:"minor-seventh"},[t._v("Minor Seventh")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"info"},[r("div",[t._v("Scale Info: ")]),r("div",[t._v("Major (WWHWWWH): "),r("span",{staticClass:"selected"},[t._v("Root")]),t._v(", "),r("span",{staticClass:"major-second"},[t._v("Major Second")]),t._v(" "),r("span",{staticClass:"major-third"},[t._v("Major Third")]),t._v(", "),r("span",{staticClass:"major-fourth"},[t._v("Major Fourth")]),t._v(", "),r("span",{staticClass:"major-fifth"},[t._v("Major Fifth")]),t._v(", "),r("span",{staticClass:"major-sixth"},[t._v("Major Sixth")]),t._v(", "),r("span",{staticClass:"major-seventh"},[t._v("Major Seventh")]),t._v(", "),r("span",{staticClass:"selected"},[t._v("Root")])]),r("div",[t._v("Minor (WHWWHWW): "),r("span",{staticClass:"selected"},[t._v("Root")]),t._v(", "),r("span",{staticClass:"major-second"},[t._v("Major Second")]),t._v(" "),r("span",{staticClass:"minor-third"},[t._v("Minor Third")]),t._v(", "),r("span",{staticClass:"major-fourth"},[t._v("Major Fourth")]),t._v(", "),r("span",{staticClass:"major-fifth"},[t._v("Major Fifth")]),t._v(", "),r("span",{staticClass:"minor-sixth"},[t._v("Minor Sixth")]),t._v(", "),r("span",{staticClass:"minor-seventh"},[t._v("Minor Seventh")]),t._v(", "),r("span",{staticClass:"selected"},[t._v("Root")])]),r("div",[t._v("Major Seventh: "),r("span",{staticClass:"selected"},[t._v("Root")]),t._v(", "),r("span",{staticClass:"major-third"},[t._v("Major Third")]),t._v(", "),r("span",{staticClass:"major-seventh"},[t._v("Major Seventh")])]),r("div",[t._v("Minor Seventh: "),r("span",{staticClass:"selected"},[t._v("Root")]),t._v(", "),r("span",{staticClass:"minor-third"},[t._v("Minor Third")]),t._v(", "),r("span",{staticClass:"major-fifth"},[t._v("Major Fifth")]),t._v(", "),r("span",{staticClass:"minor-seventh"},[t._v("Minor Seventh")])])])}],g=r("2f62"),m={MODULE:"guitar",store:{GUITAR_CONFIG:"guitarConfig"},mutations:{SET_GUITAR_CONFIG:"setGuitarConfig"},actions:{GET_GUITAR_CONFIG:"getGuitarConfig"}},b=m;function _(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(r,!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var y={name:"AppBar",computed:C({},Object(g["b"])([b.store.GUITAR_CONFIG])),methods:{set:function(t){this.$store.commit(b.mutations.SET_GUITAR_CONFIG,t)}}},S=y,w=Object(l["a"])(S,h,v,!1,null,"77a00a70",null),O=w.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"guitar",class:{horizontal:!t.guitarConfig.isVertical}},[r("div",{staticClass:"bridge"},t._l(t.getNItems(6),(function(e){return r("tooltip",{key:e,staticClass:"string",class:t.getStringClass(t.getNote(0,e)),attrs:{trigger:"hover",options:{placement:"top",delayOnMouseOut:0}}},[r("div",{ref:"popper",refInFor:!0,staticClass:"popper"},[t._v(" "+t._s(Math.round(10*t.getNote(0,e).frequency)/10)+"hz "),r("p",[t._v(t._s(t.getNoteInfo(t.getNote(0,e))?t.getNoteInfo(t.getNote(0,e)).name:""))])]),r("div",{staticClass:"string",attrs:{slot:"reference"},on:{click:function(r){t.setSelectedNote(t.getNote(0,e))},contextmenu:function(r){r.preventDefault(),t.playTone(r,t.getNote(0,e))},mouseenter:function(r){t.playTone(r,t.getNote(0,e),!0)}},slot:"reference"},[t._v(" "+t._s(t.getNote(0,e).note.toUpperCase()+t.getNote(0,e).octave)+" ")])])})),1),r("style",{tag:"component"},[t._v(" .guitar .fret-board::before { border-"+t._s(t.guitarConfig.isVertical?"bottom":"right")+"-width: "+t._s(t.boardSize)+"px; } ")]),r("div",{ref:"fretBoard",staticClass:"fret-board"},[r("div",{staticClass:"fret-labels"},t._l(t.frets,(function(e){return r("transition",{key:e,attrs:{name:"fret",appear:""}},[r("div",{staticClass:"fret-label",class:{special:t.specialFret.includes(e+1)},style:"flex-basis: "+100*(t.guitarConfig.realFretSpacing?t.getStringStrength(e)/t.totalFretStrength:1/t.guitarConfig.fretCount)+"%"},[t._v(t._s(e+1))])])})),1),r("div",{staticClass:"actual-frets frets shadow"},t._l(t.frets,(function(e){return r("transition",{key:e,attrs:{name:"fret",appear:""}},[r("div",{staticClass:"fret",class:{special:t.specialFret.includes(e+1)},style:"flex-basis: "+100*(t.guitarConfig.realFretSpacing?t.getStringStrength(e)/t.totalFretStrength:1/t.guitarConfig.fretCount)+"%"},t._l(t.getNItems(6),(function(n){return r("div",{key:n,staticClass:"string",class:t.getStringClass(t.getNote(e+1,n))},[r("p",{staticClass:"string-info"},[t._v(" "+t._s(t.getNote(e+1,n).note.toUpperCase()+t.getNote(e+1,n).octave)+" ")])])})),0)])})),1),r("div",{staticClass:"tooltip-frets frets frequency"},t._l(t.frets,(function(e){return r("transition",{key:e,attrs:{name:"fret",appear:""}},[r("div",{staticClass:"fret frequency",style:"flex-basis: "+100*(t.guitarConfig.realFretSpacing?t.getStringStrength(e)/t.totalFretStrength:1/t.guitarConfig.fretCount)+"%"},t._l(t.getNItems(6),(function(n){return r("tooltip",{key:n,staticClass:"string frequency",attrs:{trigger:"hover",options:{placement:"top",delayOnMouseOut:0}}},[r("div",{ref:"popper",refInFor:!0,staticClass:"popper"},[t._v(" "+t._s(Math.round(10*t.getNote(e+1,n).frequency)/10)+"hz "),r("p",[t._v(t._s(t.getNoteInfo(t.getNote(e+1,n)).name))]),r("p",[t._v(t._s(t.getNoteInfo(t.getNote(e+1,n)).ratioString))])]),r("div",{staticClass:"string-frequency-box",attrs:{slot:"reference"},on:{contextmenu:function(r){r.preventDefault(),t.playTone(r,t.getNote(e+1,n))},mouseenter:function(r){t.playTone(r,t.getNote(e+1,n),!0)},click:function(r){t.setSelectedNote(t.getNote(e+1,n))}},slot:"reference"})])})),1)])})),1)])],1)},M=[],N=(r("7db0"),r("13d5"),r("4e82"),r("b0c0"),r("a9e3"),r("d3b7"),r("ddb0"),r("284c")),P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(t.tagName,{tag:"component"},[r("transition",{attrs:{name:t.transition,"enter-active-class":t.enterActiveClass,"leave-active-class":t.leaveActiveClass},on:{"after-leave":t.doDestroy}},[r("span",{directives:[{name:"show",rawName:"v-show",value:!t.disabled&&t.showPopper,expression:"!disabled && showPopper"}],ref:"popper"},[t._t("default",[t._v(t._s(t.content))])],2)]),t._t("reference")],2)},T=[],E=(r("c975"),r("f0bd"));function x(t,e,r){t&&e&&r&&(document.addEventListener?t.addEventListener(e,r,!1):t.attachEvent("on"+e,r))}function k(t,e,r){t&&e&&(document.removeEventListener?t.removeEventListener(e,r,!1):t.detachEvent("on"+e,r))}var F={props:{tagName:{type:String,default:"span"},trigger:{type:String,default:"hover",validator:function(t){return["clickToOpen","click","clickToToggle","hover","focus"].indexOf(t)>-1}},delayOnMouseOver:{type:Number,default:10},delayOnMouseOut:{type:Number,default:10},disabled:{type:Boolean,default:!1},content:String,enterActiveClass:String,leaveActiveClass:String,boundariesSelector:String,reference:{},forceShow:{type:Boolean,default:!1},dataValue:{default:null},appendToBody:{type:Boolean,default:!1},visibleArrow:{type:Boolean,default:!0},transition:{type:String,default:""},stopPropagation:{type:Boolean,default:!1},preventDefault:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}}},data:function(){return{referenceElm:null,popperJS:null,showPopper:!1,currentPlacement:"",popperOptions:{placement:"bottom",computeStyle:{gpuAcceleration:!1}}}},watch:{showPopper:function(t){t?(this.$emit("show",this),this.popperJS&&this.popperJS.enableEventListeners(),this.updatePopper()):(this.popperJS&&this.popperJS.disableEventListeners(),this.$emit("hide",this))},forceShow:{handler:function(t){this[t?"doShow":"doClose"]()},immediate:!0},disabled:function(t){t&&(this.showPopper=!1)}},created:function(){this.appendedArrow=!1,this.appendedToBody=!1,this.popperOptions=Object.assign(this.popperOptions,this.options)},mounted:function(){switch(this.referenceElm=this.reference||this.$slots.reference[0].elm,this.popper=this.$slots.default[0].elm,this.trigger){case"clickToOpen":x(this.referenceElm,"click",this.doShow),x(document,"click",this.handleDocumentClick);break;case"click":case"clickToToggle":x(this.referenceElm,"click",this.doToggle),x(document,"click",this.handleDocumentClick);break;case"hover":x(this.referenceElm,"mouseover",this.onMouseOver),x(this.referenceElm,"mouseout",this.onMouseOut)}},methods:{doToggle:function(t){this.stopPropagation&&t.stopPropagation(),this.preventDefault&&t.preventDefault(),this.forceShow||(this.showPopper=!this.showPopper)},doShow:function(){this.showPopper=!0},doClose:function(){this.showPopper=!1},doDestroy:function(){this.showPopper||(this.popperJS&&(this.popperJS.destroy(),this.popperJS=null),this.appendedToBody&&(this.appendedToBody=!1,document.body.removeChild(this.popper.parentElement)))},createPopper:function(){var t=this;this.$nextTick((function(){if(t.visibleArrow&&t.appendArrow(t.popper),t.appendToBody&&!t.appendedToBody&&(t.appendedToBody=!0,document.body.appendChild(t.popper.parentElement)),t.popperJS&&t.popperJS.destroy&&t.popperJS.destroy(),t.boundariesSelector){var e=document.querySelector(t.boundariesSelector);e&&(t.popperOptions.modifiers=Object.assign({},t.popperOptions.modifiers),t.popperOptions.modifiers.preventOverflow=Object.assign({},t.popperOptions.modifiers.preventOverflow),t.popperOptions.modifiers.preventOverflow.boundariesElement=e)}t.popperOptions.onCreate=function(){t.$emit("created",t),t.$nextTick(t.updatePopper)},t.popperJS=new E["a"](t.referenceElm,t.popper,t.popperOptions)}))},destroyPopper:function(){k(document,"click",this.handleDocumentClick),this.showPopper=!1,this.doDestroy()},appendArrow:function(t){if(!this.appendedArrow){this.appendedArrow=!0;var e=document.createElement("div");e.setAttribute("x-arrow",""),e.className="popper__arrow",t.appendChild(e)}},updatePopper:function(){this.popperJS?this.popperJS.scheduleUpdate():this.createPopper()},onMouseOver:function(){this.showPopper=!0},onMouseOut:function(){this.showPopper=!1},handleDocumentClick:function(t){this.$el&&this.referenceElm&&!this.elementContains(this.$el,t.target)&&!this.elementContains(this.referenceElm,t.target)&&this.popper&&!this.elementContains(this.popper,t.target)&&(this.$emit("documentClick",this),this.forceShow||(this.showPopper=!1))},elementContains:function(t,e){return"function"===typeof t.contains&&t.contains(e)}},destroyed:function(){this.destroyPopper()}},D=F,I=(r("c9e6"),Object(l["a"])(D,P,T,!1,null,null,null)),A=I.exports,R=r("5e54");r("99af");Array.prototype.j=function(t){var e=[];return this.forEach(function(r,n){if(1!==this.length){if(n!==this.length-1){0===n&&e.push(this[n]);var o=t(this[n],this[n+1]);!1!==o&&e.push(o),e.push(this[n+1])}}else e.push(r[n])}.bind(this)),e};var $="♯",G="♭",B=["a","b","c","d","e","f","g"],J=[].concat(Object(N["a"])(B.j((function(t,e){return"b"!==t&&"e"!=t&&"".concat(t).concat($).concat(e).concat(G)}))),["g".concat($,"a").concat(G)]),L=[-5,0,5,10,14,19],q=8,U=[{ratio:1,ratioString:"1:1",name:"Root",css:"selected"},{ratio:8/9,ratioString:"3:1",name:"Major Second",css:"major-second"},{ratio:5/6,ratioString:"6:5",name:"Minor Third",css:"minor-third"},{ratio:.8,ratioString:"5:4",name:"Major Third",css:"major-third"},{ratio:.75,ratioString:"4:3",name:"Major Fourth",css:"major-fourth"},{ratio:1/3,ratioString:"3:1",name:"Major Fifth",css:"major-fifth"},{ratio:5/8,ratioString:"8:5",name:"Minor Sixth",css:"minor-sixth"},{ratio:.6,ratioString:"5:3",name:"Major Sixth",css:"major-sixth"},{ratio:8/15,ratioString:"15:8",name:"Major Seventh",css:"major-seventh"},{ratio:9/16,ratioString:"9:5",name:"Minor Seventh",css:"minor-seventh"}];n["a"].use(g["a"]);var W=new g["a"].Store({state:Object(s["a"])({},b.store.GUITAR_CONFIG,{realFretSpacing:!0,isVertical:!0,showSideMenu:!1,fretCount:22}),mutations:Object(s["a"])({},b.mutations.SET_GUITAR_CONFIG,(function(t,e){t.guitarConfig=e}))});r("d81d");function V(t,e){var r=t+L[e];return Math.abs(r)>=12&&(r%=12),r<0&&(r=12+r),J[r]}function z(t){return Object(N["a"])(Array(t)).map((function(t,e){var r=V(e,0),n=Math.floor((e-q+36)/12),o=440/Math.pow(2,4-n),i=(e-q)%12;i<0&&(i=12+i);var s=o*Math.pow(2,(-9+i)/12),a={index:e,note:r,octave:n,frequency:s};return a}))}function H(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=L[r]+e+Math.abs(L[0]);return!t||n>=t.length?{index:0,note:"...",octave:0,frequency:0}:t[n]}function Q(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function K(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Q(r,!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Q(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var X={name:"Guitar.vue",components:{Tooltip:A},data:function(){return{boardSize:0,selectedNote:null,mouseDown:!1,ctrlDown:!1,noteQueue:[],showSideMenu:!1}},computed:K({},Object(g["b"])([b.store.GUITAR_CONFIG]),{frets:function(){return Object(N["a"])(Array(Number(this.guitarConfig.fretCount)).keys())},stringStrengths:function(){for(var t=new Array(Number(this.guitarConfig.fretCount)),e=0;e<t.length;e++){var r=void 0;r=0===e?1:t[e-1],t[e]=r*Math.pow(2,-1/12)}return t},totalFretStrength:function(){return this.stringStrengths.reduce((function(t,e){return t+e}))},specialFret:function(){return this.frets.filter((function(t){var e=t%12;return e<=5?e%3===0||e%5===0||0===e:e%7===0||e%9===0}))},noteRange:function(){var t=Math.abs(L[0])+L[5];return t+Number(this.guitarConfig.fretCount)+1},notes:function(){return z(this.noteRange)}}),methods:{getStringStrength:function(t){return this.stringStrengths.length-1<t?0:this.stringStrengths[t]},getNItems:function(t){return Object(N["a"])(Array(Number(t)).keys())},getNote:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return H(this.notes,t,e)},setSelectedNote:function(t){this.selectedNote=t},isMatch:function(t,e,r){for(var n=1;n<4;n++){r&&console.log(t,1/Math.pow(2,n)+e/Math.pow(2,n));var o=t;t<1/Math.pow(2,n)+e/Math.pow(2,n)&&(o=t*Math.pow(2,n));var i=o%1,s=i>.5?1-i:i;if(r&&console.log(n,o,i,s,e,s<e),s<e)return{result:!0,difference:s}}return{result:!1,difference:1/0}},getStringClass:function(t){if(!t||!t.note||!this.selectedNote||!this.selectedNote.note)return{};for(var e=[],r=0;r<U.length;r++){var n=void 0;n="Root"===U[r].name?t.note===this.selectedNote.note:this.getRelatedNote(U[r].ratio,t.index),n&&e.push(K({},U[r],{difference:n.difference}))}return e.sort((function(t,e){return t.difference-e.difference===0?t.ratio-e.ratio:t.difference-e.difference})),e.length>0?Object(s["a"])({},e[0].css,e[0]):{}},getRelatedNote:function(t,e){var r=this;if(!this.notes||!this.selectedNote)return[];var n,o=this.notes.find((function(t){return t.note===r.selectedNote.note}));if(!o)return[];var i=this.notes.filter((function(i,s){var a=o.frequency/i.frequency,c=a/t,u=!1;"c"===i.note&&5===i.octave&&32===e&&.75===t&&(console.log("here",i,t,a,c),console.log(o,r.selectedNote,r.notes),u=!0);var p=r.isMatch(c,.02,u);return p.result&&(n=p.difference),p.result}));if("undefined"!==typeof e){var s=i.find((function(t){return t.index===e}));return!!s&&("undefined"!==typeof n?K({},s,{difference:n}):s)}return i},getNoteInfo:function(t){if(!t||!t.note||!this.selectedNote||!this.selectedNote.note)return{};for(var e=[],r=0;r<U.length;r++){var n=void 0;n="Root"===U[r].name?t.note===this.selectedNote.note:this.getRelatedNote(U[r].ratio,t.index),n&&e.push(K({},U[r],{difference:n.difference}))}return e.sort((function(t,e){return t.difference-e.difference===0?t.ratio-e.ratio:t.difference-e.difference})),e.length>0?e[0]:{}},playTone:function(t,e,r){if(this.mouseDown||!r)if(this.ctrlDown)this.noteQueue.push(e);else{var n=(new R["a"]).toDestination();n.triggerAttackRelease(e.frequency,"8n")}}},mounted:function(){var t=this;this.boardSize=this.isVertical?this.$refs.fretBoard.offsetHeight:this.$refs.fretBoard.offsetWidth,console.log(this.$refs),this.$refs.popper.forEach((function(t){t.onmouseout})),window.addEventListener("mouseup",(function(){return t.mouseDown=!1})),window.addEventListener("mousedown",(function(){return t.mouseDown=!0})),window.addEventListener("contextmenu",(function(t){return t.preventDefault()})),window.addEventListener("keydown",(function(e){"ControlLeft"===e.code&&(t.ctrlDown=!0)})),window.addEventListener("keyup",(function(e){"ControlLeft"===e.code&&(t.ctrlDown=!1,t.noteQueue.forEach((function(e){return t.playTone({},e,!1)})),t.noteQueue=[])}))},updated:function(){this.boardSize=this.isVertical?this.$refs.fretBoard.offsetHeight:this.$refs.fretBoard.offsetWidth}},Y=X,Z=(r("d0d5"),Object(l["a"])(Y,j,M,!1,null,"061d56ea",null)),tt=Z.exports;function et(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function rt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?et(r,!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):et(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var nt={components:{SideMenu:d,AppBar:O,Guitar:tt},computed:rt({},Object(g["b"])([b.store.GUITAR_CONFIG]))},ot=nt,it=(r("5c0b"),Object(l["a"])(ot,o,i,!1,null,null,null)),st=it.exports,at=r("6597"),ct=r.n(at);r("206f");n["a"].config.productionTip=!1,n["a"].use(ct.a),new n["a"]({store:W,render:function(t){return t(st)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),o=r.n(n);o.a},"79bc":function(t,e,r){},"9c0c":function(t,e,r){},b056:function(t,e,r){"use strict";var n=r("1b20"),o=r.n(n);o.a},c9e6:function(t,e,r){"use strict";var n=r("79bc"),o=r.n(n);o.a},d0d5:function(t,e,r){"use strict";var n=r("0943"),o=r.n(n);o.a}});
//# sourceMappingURL=app.16b4669c.js.map