(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"sB+s":function(t,e,r){"use strict";r.r(e);r("XfO3"),r("HEwt"),r("rE2o"),r("ioFf"),r("rGqo"),r("a1Th"),r("Btvt"),r("Vd3H");var a=r("q1tI"),n=r.n(a),o=(r("u0+1"),r("LbRr"));function i(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s=function(t){var e,r;function a(){for(var e,r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))||this).state={arr:[14,10,12,4,8,15,13,9,2,11,6,7,1,5,"oops",3],date:new Date},e.clicked=function(t){var r=i(e.state.arr),a=r.indexOf("oops"),n=r.indexOf(t);n-4!==a&&n+4!==a&&n+1!==a&&n-1!==a||"oops"!==t&&(r.splice(n,1,"oops"),r.splice(a,1,t)),e.setState({arr:i(r)})},e.getScore=function(){return(new Date-e.state.date)/1e3},e.reset=function(){var t=e.state.arr.sort((function(){return.5-Math.random()}));e.setState({arr:t})},e}return r=t,(e=a).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,a.prototype.render=function(){var t=this;return n.a.createElement("div",{className:"gamewrap"},n.a.createElement("div",{className:"game"},n.a.createElement("ul",{className:"game1"},this.state.arr.map((function(e){return n.a.createElement("li",{style:{display:"inline-block",fontSize:"44px",width:"74px",height:"65px",textAlign:"center",margin:"2px",background:"#009999",cursor:"default",border:"3px solid #6699ff"},className:e,key:e,onClick:function(){t.clicked(e)}},e)}))),n.a.createElement("button",{style:{width:"92%"},className:"btn btn-warning bat",onClick:this.reset},"RESET"),this.state.arr.toString()===[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"oops"].toString()?n.a.createElement("div",{className:"somebody"},"Your time is:  "+Math.floor(Math.floor((new Date-this.state.date)/1e3/60))+" min "+Math.round((new Date-this.state.date)/1e3%60)+" sec"):null),n.a.createElement(o.a,null))},a}(a.Component);e.default=s}}]);
//# sourceMappingURL=component---src-pages-puzzle-js-7d9791e60f29e0e8b59f.js.map