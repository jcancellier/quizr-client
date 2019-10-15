(this["webpackJsonpquizr-client"]=this["webpackJsonpquizr-client"]||[]).push([[0],{62:function(e,t,n){e.exports=n(73)},73:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),l=n.n(i),u=n(18),o=n(109),c=n(114),s=n(52),m=Object(s.a)({palette:{type:"dark"},typography:{fontFamily:"'Varela Round', sans-serif"}}),d=n(19),h=n(24),p=function(e){return r.a.createElement(h.b,e,r.a.createElement(h.a,{to:"/"}))},f=n(26),b=n(15),v=n(35),E=n(36),x=n(39),g=n(113),j=n(110),w=n(112);function y(){var e=Object(u.a)(["\n  width: 0.5rem;\n\n  @media (max-width: 768px) {\n    height: 0.7rem;\n  }\n"]);return y=function(){return e},e}function O(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return O=function(){return e},e}function F(){var e=Object(u.a)(["\n  display: flex;\n  padding-bottom: 1rem;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]);return F=function(){return e},e}function I(){var e=Object(u.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return I=function(){return e},e}var T=d.a.div(I()),C=d.a.div(F()),k=d.a.form(O()),A=d.a.div(y()),S=n(103),z=n(106),D=n(107);function P(){var e=Object(u.a)(["\n  flex: 1;\n"]);return P=function(){return e},e}var q=function(){return r.a.createElement(S.a,{position:"static",color:"primary"},r.a.createElement(z.a,null,r.a.createElement(J,{variant:"h4"},"Quizr"),r.a.createElement(w.a,{color:"inherit"},"Create Quiz")))},J=Object(d.a)(D.a)(P()),Q=1,U=1,W=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={usernameInputText:"",passwordInputText:"",submitAuthenticationFormDisable:!0},n.handleUsernameInputTextChange=function(e){n.setState({usernameInputText:e.target.value},(function(){n.validateFormFields()}))},n.handlePasswordInputTextChange=function(e){n.setState({passwordInputText:e.target.value},(function(){n.validateFormFields()}))},n.validateFormFields=function(){n.state.usernameInputText.length>=Q&&n.state.passwordInputText.length>=U?n.setState({submitAuthenticationFormDisable:!1}):n.setState({submitAuthenticationFormDisable:!0})},n.handleSubmitAuthenticationForm=function(e){e.preventDefault(),alert("Welcome")},n}return Object(x.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(a.Fragment,null,r.a.createElement(q,null),r.a.createElement(T,null,r.a.createElement(k,{onSubmit:this.handleSubmitAuthenticationForm},r.a.createElement(C,null,r.a.createElement(j.a,{id:"username-input",label:"Username",value:this.state.usernameInputText,onChange:function(t){return e.handleUsernameInputTextChange(t)},variant:"outlined"}),r.a.createElement(A,null),r.a.createElement(j.a,{id:"password-input",label:"Password",value:this.state.passwordInputText,onChange:function(t){return e.handlePasswordInputTextChange(t)},variant:"outlined",type:"password"})),r.a.createElement(w.a,{variant:"contained",color:"primary",endIcon:r.a.createElement(g.a,null),disabled:this.state.submitAuthenticationFormDisable,onClick:this.handleSubmitAuthenticationForm,type:"submit"},"Connect"))))}}]),t}(a.Component),B=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(q,null),r.a.createElement("h1",null,"Join Quiz Page"))}}]),t}(a.Component),R=n(32),V=function(e){return r.a.createElement(R.a,null,r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:W}),r.a.createElement(p,{path:"/joinquiz",component:B}),r.a.createElement(h.a,{to:"/"})))};function $(){var e=Object(u.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"]);return $=function(){return e},e}var G=d.a.div($());var H=function(){return r.a.createElement(o.a,{theme:m},r.a.createElement(c.a,null),r.a.createElement(G,null,r.a.createElement(V,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[62,1,2]]]);
//# sourceMappingURL=main.92afbe42.chunk.js.map