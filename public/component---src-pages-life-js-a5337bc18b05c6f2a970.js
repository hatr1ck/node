(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{3781:function(t,e,a){"use strict";a.r(e);var n=a("q1tI"),r=a.n(n),o=(a("l+Yv"),a("wx14")),i=a("zLVn"),s=a("TSYQ"),l=a.n(s),c=a("vUet"),u=r.a.forwardRef((function(t,e){var a=t.bsPrefix,n=t.className,s=Object(i.a)(t,["bsPrefix","className"]),u=Object(c.a)(a,"btn-toolbar");return r.a.createElement("div",Object(o.a)({},s,{ref:e,className:l()(n,u)}))}));u.displayName="ButtonToolbar",u.defaultProps={role:"toolbar"};var h=u,f=a("cWnB"),d=a("LbRr");function m(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}a.d(e,"WIDTH",(function(){return p})),a.d(e,"HEIGHT",(function(){return v}));var p=800,v=600,b=function(t){function e(){return t.apply(this,arguments)||this}return m(e,t),e.prototype.render=function(){var t=this.props,e=t.x,a=t.y;return r.a.createElement("div",{style:{background:"#73b76e",position:"absolute",left:20*e+1+"px",top:20*a+1+"px",width:"19px",height:"19px"}})},e}(r.a.Component),w=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={cells:[],isRunning:!1},a.runGame=function(){a.setState({isRunning:!0}),a.runIteration()},a.stopGame=function(){a.setState({isRunning:!1}),a.timeoutHandler&&(window.clearTimeout(a.timeoutHandler),a.timeoutHandler=null)},a.handleIntervalChange=function(t){a.setState(a.setState({interval:t.target.value}))},a.handleClear=function(){a.board=a.makeEmptyBoard(),a.setState({cells:a.makeCells()})},a.rows=30,a.cols=40,a.board=a.makeEmptyBoard(),a.boardRef=r.a.createRef(),a}m(e,t);var a=e.prototype;return a.runIteration=function(){var t=this;console.log("running iteration");for(var e=this.makeEmptyBoard(),a=0;a<this.rows;a++)for(var n=0;n<this.cols;n++){var r=this.calculateNeighbors(this.board,n,a);this.board[a][n]?e[a][n]=2===r||3===r:this.board[a][n]||3!==r||(e[a][n]=!0)}this.board=e,this.setState({cells:this.makeCells()}),this.timeoutHandler=window.setTimeout((function(){t.runIteration()}),100)},a.calculateNeighbors=function(t,e,a){for(var n=0,r=[[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]],o=0;o<r.length;o++){var i=r[o],s=a+i[0],l=e+i[1];l>=0&&l<this.cols&&s>=0&&s<this.rows&&t[s][l]&&n++}return n},a.makeEmptyBoard=function(){for(var t=[],e=0;e<this.rows;e++){t[e]=[];for(var a=0;a<this.cols;a++)t[e][a]=!1}return t},a.makeCells=function(){for(var t=[],e=0;e<this.rows;e++)for(var a=0;a<this.cols;a++)this.board[e][a]&&t.push({x:a,y:e});return t},a.getElementOffset=function(){var t=this.boardRef.current.getBoundingClientRect(),e=document.documentElement;return{x:t.left+window.pageXOffset-e.clientLeft,y:t.top+window.pageYOffset-e.clientTop}},a.handleClick=function(t){var e=this.getElementOffset(),a=t.clientX-e.x,n=t.clientY-e.y,r=Math.floor(a/20),o=Math.floor(n/20);r>=0&&r<=this.cols&&o>=0&&o<=this.rows&&(this.board[o][r]=!this.board[o][r]),this.setState({cells:this.makeCells()})},a.handleRandom=function(){for(var t=0;t<this.rows;t++)for(var e=0;e<this.cols;e++)this.board[t][e]=Math.random()>=.5;this.setState({cells:this.makeCells()})},a.render=function(){var t=this.state.cells;return r.a.createElement("div",{className:"life"},r.a.createElement(d.a,null),r.a.createElement(h,null,r.a.createElement(f.a,{className:"lifeButton",onClick:this.handleRandom,variant:"primary"},"Random"),r.a.createElement("br",null),r.a.createElement(f.a,{className:"lifeButton",onClick:this.handleClear,variant:"secondary"},"Clear"),r.a.createElement("br",null),this.state.isRunning?r.a.createElement(f.a,{className:"lifeButton",onClick:this.stopGame,variant:"warning"},"Stop"):r.a.createElement(f.a,{className:"lifeButton",onClick:this.runGame,variant:"success"},"Start")),r.a.createElement("div",{className:"Board",style:{width:p,height:v,backgroundSize:"20px 20px"},onClick:this.handleClick,ref:this.boardRef},t.map((function(t){return r.a.createElement(b,{x:t.x,y:t.y,key:t.x+","+t.y})}))))},e}(r.a.Component);e.default=w}}]);
//# sourceMappingURL=component---src-pages-life-js-a5337bc18b05c6f2a970.js.map