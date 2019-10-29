(this.webpackJsonproadmap_at=this.webpackJsonproadmap_at||[]).push([[0],{45:function(n,e,t){n.exports=t(73)},72:function(n,e,t){},73:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"fetchRoadmap",(function(){return T}));var a=t(1),o=t.n(a),i=t(15),c=t.n(i),u=t(20),s=t(8),d=t(38),p="FETCH_ROADMAP_REQUEST",l="FETCH_ROADMAP_SUCCESS",f="FETCH_ROADMAP_FAILURE";function b(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function h(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?b(t,!0).forEach((function(e){Object(d.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):b(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var g={isLoading:!1,roadmap:!1},v=function(n,e){var t=n.fields.priority,r=e.fields.priority;return t>r?1:r>t?-1:0},m=function(n){var e={};return n.data.records.map((function(n){return"undefined"===typeof e[n.fields.theme]&&(e[n.fields.theme]={theme:n.fields.theme,epics:[],id:n.fields.theme.toLowerCase().split(" ").join("")}),e[n.fields.theme].epics.push(n)})),Object.values(e).forEach((function(n){n.epics.sort(v)})),console.log(e),e};var x=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:return h({},n,{isLoading:!0});case l:return h({},n,{isLoading:!1,roadmap:m(e.res)});case f:return h({},n,{isLoading:!1,roadmap:e.error});default:return n}},w=function(){return Object(s.c)({airtable:x})},y=t(42),O=t(12),j=t.n(O),E=t(14),k=t(39),S=t.n(k),C=j.a.mark(A),L=j.a.mark(D);function A(n){var e;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,S.a.get("https://api.airtable.com/v0/".concat("appPAsX6MaCQGIDJO","/").concat("solo_product_priority_board"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat("keyY2NCkMVK5faXto")}}).then((function(n){return n}));case 3:return e=n.sent,n.next=6,Object(E.b)({type:l,res:e});case 6:n.next=13;break;case 8:return n.prev=8,n.t0=n.catch(0),console.log(n.t0),n.next=13,Object(E.b)({type:f,error:n.t0});case 13:case"end":return n.stop()}}),C,null,[[0,8]])}function D(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(E.c)(p,A);case 2:case"end":return n.stop()}}),L)}var z=j.a.mark(H);function H(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(E.a)([D()]);case 2:case"end":return n.stop()}}),z)}var M=t(17),B=t(18),P=t(21),R=t(19),_=t(22),N=t(4);t(72);function T(){return{type:p}}var q=t(5);function F(){var n=Object(N.a)(["\n  font-size: 10px;\n"]);return F=function(){return n},n}function J(){var n=Object(N.a)(["\n  font-size: 12px;\n"]);return J=function(){return n},n}function W(){var n=Object(N.a)(["\n  width: 200px;\n  color: ",";\n  background-color: #f6f6f6;\n  border: "," solid ",";\n  border-radius: 5px;\n  white-space: pre-wrap;\n  position: absolute;\n  padding: 5px;\n  font-size: 8px;\n  box-shadow: 0 4px 11px 3px rgba(115, 115, 115, 0.35);\n"]);return W=function(){return n},n}function G(){var n=Object(N.a)(['\n  background-image: url("/vault_logo_onblack.png");\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 250px;\n  height: 110px;\n  margin: 30px auto 130px auto;\n']);return G=function(){return n},n}function U(){var n=Object(N.a)(["\n  background-color: ",";\n  font-size: 12px;\n  min-width: 125px;\n  max-width: 125px;\n  white-space: pre-wrap;\n  color: ",";\n  padding: 10px;\n  margin: 25px auto;\n  border-radius: 5px;\n\n  &.orangeHover {\n    /* Material box shadow */\n    box-shadow: 0 1px 3px rgba(216, 61, 3, 0.32),\n      0 1px 2px rgba(216, 61, 3, 0.24);\n    transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);\n    &:hover {\n      box-shadow: 0 5px 15px 3px rgba(216, 61, 3, 0.35);\n    }\n  }\n\n  &.greyHover {\n    /* Material box shadow */\n    box-shadow: 0 1px 3px rgba(115, 115, 115, 0.32),\n      0 1px 2px rgba(115, 115, 115, 0.24);\n    transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);\n    &:hover {\n      box-shadow: 0 5px 15px 3px rgba(115, 115, 115, 0.35);\n    }\n  }\n"]);return U=function(){return n},n}function I(){var n=Object(N.a)(['\n  font-family: "Muli SemiBold", "Helvetica", sans-serif;\n  font-weight: 900;\n  font-size: 18px;\n  margin: 0;\n  padding: 10px;\n  border-radius: 5px;\n  color: inherit;\n  background-color: ',";\n  /* border: "," solid ","; */\n  text-align: center;\n  min-height: 75px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return I=function(){return n},n}function V(){var n=Object(N.a)(["\n  display: inline-block;\n  vertical-align: top;\n  margin: 8px;\n  max-width: 165px;\n  white-space: pre-wrap;\n"]);return V=function(){return n},n}function X(){var n=Object(N.a)(["\n  white-space: nowrap;\n  padding-top: 100px;\n"]);return X=function(){return n},n}var Y="#737373",Q="#737373",K="".concat("1px"," solid ").concat("#f05e2f"),$="".concat("1px"," dashed ").concat("#f05e2f"),Z="".concat("1px"," solid  ").concat("#737373"),nn=q.a.div(X()),en=q.a.div(V()),tn=q.a.h2(I(),"#252525","1px","#aaaaaa"),rn=q.a.div(U(),"#252525","#f6f6f6"),an=q.a.div(G()),on=q.a.div(W(),"#555555","1px","#737373"),cn=q.a.p(J()),un=q.a.p(F()),sn=function(n){function e(n){var t;return Object(M.a)(this,e),(t=Object(P.a)(this,Object(R.a)(e).call(this,n))).componentDidUpdate=function(){var n=t.props.roadmap;!1===t.state.linesDrawn&&n&&t.drawLines()},t.createSVG=function(){var n=document.querySelector("#svg-canvas");return null===n&&((n=document.createElementNS("http://www.w3.org/2000/svg","svg")).setAttribute("id","svg-canvas"),n.setAttribute("style","position:absolute;top:0px;left:0px;z-index:-10;"),n.setAttribute("width",document.body.scrollWidth),n.setAttribute("height",document.body.scrollHeight),n.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),document.body.appendChild(n)),n},t.drawCurvedLine=function(n,e,r,a,o,i){var c=t.createSVG(),u=document.createElementNS("http://www.w3.org/2000/svg","path"),s=(r-n)*i,d="M "+n+" "+e+" C "+(n+s)+" "+e+" "+(r-s)+" "+a+" "+r+" "+a;u.setAttributeNS(null,"d",d),u.setAttributeNS(null,"fill","none"),u.setAttributeNS(null,"stroke",o),u.setAttributeNS(null,"stroke-width","1px"),c.appendChild(u)},t.drawLines=function(){var n=t.props.roadmap;return Object.values(n).map((function(n){return t.drawLine(document.querySelector("#".concat(n.id)).getBoundingClientRect(),document.querySelector("#".concat(n.epics[0].id)).getBoundingClientRect(),Y),t.drawLine(document.querySelector("#roadmapLogo").getBoundingClientRect(),document.querySelector("#".concat(n.id)).getBoundingClientRect(),Y),n.epics.map((function(e,r){var a="done"===e.fields["dev status"]||"underway"===e.fields["dev status"]?Y:Q;return r<n.epics.length-1?t.drawLine(document.querySelector("#".concat(e.id)).getBoundingClientRect(),document.querySelector("#".concat(n.epics[r+1].id)).getBoundingClientRect(),a):""}))})),t.setState({linesDrawn:!0})},t.drawLine=function(n,e,r){t.drawCurvedLine(n.x+n.width/2,n.y+n.height,e.x+e.width/2,e.y,r,0)},t.addHoverEpic=function(n,e,r){t.setState({hoverEpic:n,x:e,y:r},(function(){}))},t.removeHoverEpic=function(n){t.setState({hoverEpic:!1,x:!1,y:!1})},t.drawEpics=function(n){return n.map((function(n,e){var r=n.fields["dev status"],a="done"===r?{border:K}:"underway"===r?{border:$}:{border:Z};return o.a.createElement(rn,{className:"done"===r||"underway"===r?"orangeHover":"greyHover",key:e,style:a,id:n.id,onMouseEnter:function(e){t.addHoverEpic(n,e.pageX,e.pageY)},onMouseLeave:function(){t.removeHoverEpic(n)}},n.fields.summary)}))},t.drawThemes=function(n){return Object.values(n).map((function(n,e){return o.a.createElement(en,{key:e},o.a.createElement(tn,{id:n.id},n.theme),t.drawEpics(n.epics))}))},t.drawHoverEpic=function(){var n=t.state,e=n.hoverEpic,r=n.x,a=n.y,i={left:"".concat(r+50,"px"),top:"".concat(a-150,"px")};console.log(document.body.scrollWidth),i.left-400>document.body.scrollWidth&&(i.left=i.left-300),console.log(i.left);var c=e.fields,u=c["proposed release"]?new Date(Date.parse(c["proposed release"])):"";return o.a.createElement(on,{style:i},o.a.createElement(cn,null,c.epic),o.a.createElement(un,null,"proposed release:"," ",u?"".concat(u.getDate()," ").concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][u.getMonth()]," ").concat(u.getFullYear()):"TBD"),o.a.createElement(un,null,"design status: ",c["design status"]?c["design status"]:"TBD"),o.a.createElement(un,null,"dev status: ",c["dev status"]?c["dev status"]:"TBD"))},t.state={hoverEpic:!1,x:!1,y:!1,linesDrawn:!1},t}return Object(_.a)(e,n),Object(B.a)(e,[{key:"render",value:function(){var n=this.props.roadmap,e=this.state.hoverEpic;return o.a.createElement(nn,{id:"roadmapcont"},!!n&&o.a.createElement(an,{id:"roadmapLogo"}),!!e&&this.drawHoverEpic(),this.drawThemes(n))}}]),e}(o.a.Component);function dn(){var n=Object(N.a)(["\n  font-family: inherit;\n  width: 150px;\n  margin: 16px;\n  padding: 8px;\n  font-size: 12px;\n  color: inherit;\n  background-color: transparent;\n  border: 1px solid ",";\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  &:focus,\n  &:hover,\n  &:active {\n    outline: none;\n    box-shadow: 0 1px 3px rgba(216, 61, 3, 0.32),\n      0 1px 2px rgba(216, 61, 3, 0.24);\n  }\n"]);return dn=function(){return n},n}function pn(){var n=Object(N.a)(["\n  font-family: inherit;\n  width: 90px;\n  margin: 16px;\n  padding: 8px;\n  font-size: 12px;\n  color: inherit;\n  background-color: transparent;\n  border: none;\n"]);return pn=function(){return n},n}function ln(){var n=Object(N.a)(["\n  font-family: inherit;\n  width: 90px;\n  margin: 16px;\n  padding: 8px;\n  font-size: 12px;\n  color: inherit;\n  background-color: transparent;\n  border: 1px solid ",";\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  &:focus,\n  &:hover,\n  &:active {\n    outline: none;\n    box-shadow: 0 1px 3px rgba(216, 61, 3, 0.32),\n      0 1px 2px rgba(216, 61, 3, 0.24);\n  }\n"]);return ln=function(){return n},n}function fn(){var n=Object(N.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return fn=function(){return n},n}function bn(){var n=Object(N.a)(['\n  background-image: url("/vault_logo_onblack.png");\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 150px;\n  height: 60px;\n  margin-top: 10px;\n']);return bn=function(){return n},n}function hn(){var n=Object(N.a)(['\n  font-family: "Muli Light", "Helvetica", sans-serif;\n  font-size: 18px;\n  margin: 0;\n  padding: 0;\n  color: ',";\n"]);return hn=function(){return n},n}function gn(){var n=Object(N.a)(["\n  width: 100vw;\n  height: 80px;\n  background-color: ",";\n  position: fixed;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n"]);return gn=function(){return n},n}function vn(){var n=Object(N.a)(['\n  min-height: 100vh;\n  font-family: "Muli", "Helvetica", sans-serif;\n']);return vn=function(){return n},n}var mn=q.a.div(vn()),xn=q.a.div(gn(),"#252525"),wn=q.a.h1(hn(),"#f6f6f6"),yn=q.a.div(bn()),On=q.a.div(fn()),jn=q.a.button(ln(),"#d83d03"),En=q.a.div(pn()),kn=q.a.input.attrs((function(n){return{type:"password"}}))(dn(),"#d83d03"),Sn=function(n){function e(n){var t;return Object(M.a)(this,e),(t=Object(P.a)(this,Object(R.a)(e).call(this,n))).checkPassword=function(n){t.setState({password:n.target.value})},t.state={password:!1},t}return Object(_.a)(e,n),Object(B.a)(e,[{key:"roadmapBtnClick",value:function(){var n=this.props.fetchRoadmap;"steelisreal"===this.state.password&&n()}},{key:"render",value:function(){var n=this,e=this.props,t=e.roadmap,r=e.isLoading;return o.a.createElement(mn,null,o.a.createElement(xn,null,o.a.createElement(yn,null),o.a.createElement(wn,null,"Solo Product Roadmap"),o.a.createElement("div",{style:{width:"150px"}})),r?o.a.createElement(On,null,o.a.createElement(En,null,"loading")):!t&&o.a.createElement(On,null,o.a.createElement(kn,{onChange:function(e){return n.checkPassword(e)}}),o.a.createElement(jn,{onClick:function(){n.roadmapBtnClick()}},"Go!")),o.a.createElement(sn,{roadmap:t}))}}]),e}(o.a.Component),Cn=Object(u.b)((function(n){return{roadmap:n.airtable.roadmap,isLoading:n.airtable.isLoading}}),(function(n){return Object(s.b)(r,n)}))(Sn);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ln=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object(y.a)(),t=[e],r=[],a="";return(a=Object(s.e)(w(),n,s.d.apply(void 0,[s.a.apply(void 0,t)].concat(r)))).asyncReducers={},e.run(H),window.store=a,{store:a}}().store,An=o.a.createElement(u.a,{store:Ln},o.a.createElement(Cn,null));c.a.render(An,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.b9c37e9b.chunk.js.map