(this["webpackJsonpquizr-client"]=this["webpackJsonpquizr-client"]||[]).push([[0],{70:function(e,t,n){e.exports=n(81)},81:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),o=n.n(i),c=n(18),u=n(117),l=n(59),s=n(122),m=n(60),p=Object(m.a)({palette:{type:"dark"},typography:{fontFamily:"'Varela Round', sans-serif"}}),d=n(20),h=n(26),f=function(e){return r.a.createElement(h.b,e,(alert("must be admin to access"),r.a.createElement(h.a,{to:"/"})))},b=n(30),v=n(16),O=n(37),y=n(38),j=n(41),E=n(121),g=n(118),w=n(120);function x(){var e=Object(c.a)(["\n  width: 0.5rem;\n\n  @media (max-width: 768px) {\n    height: 0.7rem;\n  }\n"]);return x=function(){return e},e}function T(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return T=function(){return e},e}function F(){var e=Object(c.a)(["\n  display: flex;\n  padding-bottom: 1rem;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]);return F=function(){return e},e}function I(){var e=Object(c.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return I=function(){return e},e}var P=d.a.div(I()),S=d.a.div(F()),k=d.a.form(T()),C=d.a.div(x()),D=n(111),A=n(114),z=n(115);function q(){var e=Object(c.a)(["\n  flex: 1;\n"]);return q=function(){return e},e}var U=function(e){return r.a.createElement(D.a,{position:"static",color:"primary"},r.a.createElement(A.a,null,r.a.createElement(J,{variant:"h4"},"Quizr"),e.buttons&&r.a.createElement(w.a,{color:"inherit"},"Create Quiz")))};U.defaultProps={buttons:!0};var J=Object(d.a)(z.a)(q()),Q=1,W=1,B=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(O.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={usernameInputText:"",passwordInputText:"",submitAuthenticationFormDisable:!0},n.handleUsernameInputTextChange=function(e){n.setState({usernameInputText:e.target.value},(function(){n.validateFormFields()}))},n.handlePasswordInputTextChange=function(e){n.setState({passwordInputText:e.target.value},(function(){n.validateFormFields()}))},n.validateFormFields=function(){n.state.usernameInputText.length>=Q&&n.state.passwordInputText.length>=W?n.setState({submitAuthenticationFormDisable:!1}):n.setState({submitAuthenticationFormDisable:!0})},n.handleSubmitAuthenticationForm=function(e){e.preventDefault(),n.props.history.push("/joinquiz")},n}return Object(j.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(a.Fragment,null,r.a.createElement(U,null),r.a.createElement(P,null,r.a.createElement(k,{onSubmit:this.handleSubmitAuthenticationForm},r.a.createElement(S,null,r.a.createElement(g.a,{id:"username-input",label:"Username",value:this.state.usernameInputText,onChange:function(t){return e.handleUsernameInputTextChange(t)},variant:"outlined"}),r.a.createElement(C,null),r.a.createElement(g.a,{id:"password-input",label:"Password",value:this.state.passwordInputText,onChange:function(t){return e.handlePasswordInputTextChange(t)},variant:"outlined",type:"password"})),r.a.createElement(w.a,{variant:"contained",color:"primary",endIcon:r.a.createElement(E.a,null),disabled:this.state.submitAuthenticationFormDisable,onClick:this.handleSubmitAuthenticationForm,type:"submit"},"Connect"))))}}]),t}(a.Component),R=function(e){function t(){return Object(b.a)(this,t),Object(O.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(U,{buttons:!1}),r.a.createElement("h1",null,"Join Quiz Page"))}}]),t}(a.Component),_=n(35),H=function(e){return r.a.createElement(_.a,{basename:"/"},r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:B}),r.a.createElement(f,{path:"/joinquiz",component:R}),r.a.createElement(h.a,{to:"/"})))},K=n(22),M=n(57),N=n(15);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(n,!0).forEach((function(t){Object(N.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G={authToken:""},L=Object(K.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTH_TOKEN":return $({},e,{authToken:t.payload});default:return e}}}),X=[n(58).a],Y=Object(K.createStore)(L,{},Object(M.composeWithDevTools)(K.applyMiddleware.apply(void 0,X)));function Z(){var e=Object(c.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"]);return Z=function(){return e},e}var ee=d.a.div(Z());var te=function(){return r.a.createElement(l.a,{store:Y},r.a.createElement(u.a,{theme:p},r.a.createElement(s.a,null),r.a.createElement(ee,null,r.a.createElement(H,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[70,1,2]]]);
//# sourceMappingURL=main.137784ec.chunk.js.map