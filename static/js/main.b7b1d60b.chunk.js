(this["webpackJsonpquizr-client"]=this["webpackJsonpquizr-client"]||[]).push([[0],{121:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12),i=n.n(o),c=n(13),u=n(34),s=n(77),l=n(14);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={authToken:"",user:"",isLoggedIn:!1,isLoggingIn:!1};function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h={hubConnection:null,usersOnline:null,isHubConnectionLoading:!1};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={isAddingUserToQuizRoom:!1,quizRoom:null,roomTime:0,quizPhase:"lobby",results:null,usersOnline:0,currentQuestion:{text:"testing text",answers:["test answer 1","test answer 2","test answer 3","test answer 4"]},currentQuestionResult:{isAnswerCorrect:!1,correctAnswer:1,answer:2,currentScore:-1}},v=Object(u.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH/SET_AUTH_TOKEN":return f({},e,{authToken:t.payload});case"AUTH/SET_USER":return f({},e,{user:t.payload});case"AUTH/SET_IS_LOGGED_IN":return f({},e,{isLoggedIn:t.payload});case"AUTH/SET_IS_LOGGING_IN":return f({},e,{isLoggingIn:t.payload});default:return e}},server:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SERVER/SET_HUBCONNECTION":return b({},e,{hubConnection:t.payload});case"SERVER/USERS_ONLINE":return b({},e,{usersOnline:t.payload});case"SERVER/IS_HUB_CONNECTION_LOADING":return b({},e,{isHubConnectionLoading:t.payload});default:return e}},quizRoom:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"QUIZ_ROOM/SET_QUIZ_ROOM":return O({},e,{quizRoom:t.payload});case"QUIZ_ROOM/SET_IS_ADDING_USER_TO_QUIZ_ROOM":return O({},e,{isAddingUserToQuizRoom:t.payload});case"QUIZ_ROOM/SET_QUIZ_ROOM_TIME":return O({},e,{roomTime:t.payload});case"QUIZ_ROOM/SET_QUIZ_ROOM_PHASE":return O({},e,{quizPhase:t.payload});case"QUIZ_ROOM/SET_QUIZ_RESULTS":return O({},e,{results:t.payload});case"QUIZ_ROOM/SET_QUIZ_ROOM_USERS_ONLINE":return O({},e,{usersOnline:t.payload});case"QUIZ_ROOM/SET_CURRENT_QUESTION":return O({},e,{currentQuestion:t.payload});case"QUIZ_ROOM/SET_CURRENT_QUESTION_RESULT":return O({},e,{currentQuestionResult:t.payload});default:return e}}}),E=[n(78).a],j=Object(u.createStore)(v,{},Object(s.composeWithDevTools)(u.applyMiddleware.apply(void 0,E))),x=n(18),R=n(15),I=n(21),w=n(22),S=n(23),C=n(6),Q=function(e){return{type:"QUIZ_ROOM/SET_QUIZ_ROOM",payload:e}},z=function(e){return{type:"QUIZ_ROOM/SET_QUIZ_RESULTS",payload:e}},T=n(63),_=n(158),U=n(163),A=n(87),L=n(161),D=Object(A.a)({palette:{type:"dark"},typography:{fontFamily:"'Varela Round', sans-serif"}}),q=D=Object(L.a)(D),P=n(7),k=n(3),N=n(38),F=Object(c.b)((function(e){return{isLoggedIn:e.auth.isLoggedIn}}))((function(e){e.component;var t=Object(k.a)(e,["component"]);return a.a.createElement(N.b,t,e.isLoggedIn?a.a.createElement(e.component,null):a.a.createElement(N.a,{to:"/"}))})),H=n(162),M=n(153),Z=n(159);function B(){var e=Object(C.a)(["\n  height: 0.7rem;\n"]);return B=function(){return e},e}function J(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n"]);return J=function(){return e},e}function G(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n"]);return G=function(){return e},e}function W(){var e=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n"]);return W=function(){return e},e}function V(){var e=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  // padding-bottom: 1rem;\n\n  // @media (max-width: 768px) {\n  //   flex-direction: column;\n  // }\n"]);return V=function(){return e},e}function K(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n"]);return K=function(){return e},e}var $=P.a.div(K()),X=P.a.div(V()),Y=P.a.form(W()),ee=P.a.div(G()),te=P.a.div(J()),ne=P.a.div(B()),re=n(149),ae=n(152),oe=n(154);function ie(){var e=Object(C.a)(["\n  flex: 1;\n"]);return ie=function(){return e},e}var ce=function(e){return a.a.createElement(re.a,{position:"static",color:"primary"},a.a.createElement(ae.a,null,a.a.createElement(ue,{variant:"h4"},"Quizr"),e.buttons&&a.a.createElement(M.a,{color:"inherit"},"Create Quiz")))};ce.defaultProps={buttons:!0};var ue=Object(P.a)(oe.a)(ie());function se(){var e=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return se=function(){return e},e}var le=P.a.div(se()),me=function(e){return a.a.createElement(le,null,a.a.createElement(oe.a,{variant:"h4",color:"textSecondary"},e.time),a.a.createElement(oe.a,{variant:"h6",color:"textSecondary"},"Time"))};function fe(){var e=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return fe=function(){return e},e}var pe=P.a.div(fe()),de=function(e){return a.a.createElement(pe,null,a.a.createElement(oe.a,{variant:"h4",color:"textSecondary"},e.usersCount),a.a.createElement(oe.a,{variant:"h6",color:"textSecondary"},"Users Online"))},be=1,he=function(e){function t(){var e,n;Object(x.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=Object(I.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(o)))).state={usernameInputText:"",submitAuthenticationFormDisable:!0,submitAuthenticationFormError:!1},n.handleUsernameInputTextChange=function(e){n.setState({usernameInputText:e.target.value},(function(){n.validateFormFields()}))},n.renderConnectButton=function(){var e=n.props.isLoggedIn;return a.a.createElement(M.a,{variant:"contained",color:"primary",endIcon:a.a.createElement(H.a,null),disabled:!e&&n.state.submitAuthenticationFormDisable,onClick:n.handleSubmitAuthenticationForm,type:"submit"},n.props.isLoggedIn?"Reconnect":"Login")},n.validateFormFields=function(){n.state.usernameInputText.length>=be?n.setState({submitAuthenticationFormDisable:!1}):n.setState({submitAuthenticationFormDisable:!0})},n.handleSubmitAuthenticationForm=function(e){e.preventDefault(),n.props.isLoggedIn?n.props.history.push(an):(n.props.setIsLoggingIn(!0),n.props.connection.invoke("Login",n.state.usernameInputText).then((function(e){n.setState({submitAuthenticationFormError:!1}),n.props.setIsLoggingIn(!1),console.info("Logged in as user ".concat(e)),n.props.setIsLoggedIn(!0),n.props.setUser(e),n.props.history.push(an)})).catch((function(e){n.props.setIsLoggingIn(!1),console.log(e.toString()),n.setState({submitAuthenticationFormError:!0})})))},n}return Object(S.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(r.Fragment,null,a.a.createElement(ce,{buttons:!1}),a.a.createElement($,null,a.a.createElement(ee,null),a.a.createElement(Y,{onSubmit:this.handleSubmitAuthenticationForm},a.a.createElement(X,null,!this.props.isLoggedIn&&a.a.createElement(Z.a,{id:"username-input",label:"Username",value:this.state.usernameInputText,onChange:function(t){return e.handleUsernameInputTextChange(t)},variant:"outlined",error:this.state.submitAuthenticationFormError,helperText:this.state.submitAuthenticationFormError?"Username already being used":null}),a.a.createElement(ne,null),this.renderConnectButton())),a.a.createElement(te,null)))}}]),t}(r.Component),ye=Object(c.b)((function(e){return{connection:e.server.hubConnection,isLoggedIn:e.auth.isLoggedIn}}),{setIsLoggedIn:function(e){return{type:"AUTH/SET_IS_LOGGED_IN",payload:e}},setUser:function(e){return{type:"AUTH/SET_USER",payload:e}},setIsLoggingIn:function(e){return{type:"AUTH/SET_IS_LOGGING_IN",payload:e}}})(he);function Oe(){var e=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  /* align-items: center;\n  justify-content: center; */\n"]);return Oe=function(){return e},e}function ge(){var e=Object(C.a)(["\n  height: 0.7rem;\n"]);return ge=function(){return e},e}function ve(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n"]);return ve=function(){return e},e}function Ee(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n"]);return Ee=function(){return e},e}function je(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: column;\n"]);return je=function(){return e},e}function xe(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n"]);return xe=function(){return e},e}var Re=P.a.div(xe()),Ie=P.a.div(je()),we=P.a.div(Ee()),Se=P.a.div(ve()),Ce=P.a.div(ge()),Qe=P.a.form(Oe()),ze=5,Te=function(e){function t(){var e,n;Object(x.a)(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(n=Object(I.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(i)))).state={roomNumberInputText:"",submitJoinQuizFormDisable:!0,submitJoinQuizFormError:!1},n.handleRoomNumberInputTextChange=function(e){n.setState({roomNumberInputText:e.target.value},(function(){n.validateFormFields()}))},n.validateFormFields=function(){n.state.roomNumberInputText.length>=ze?n.setState({submitJoinQuizFormDisable:!1}):n.setState({submitJoinQuizFormDisable:!0})},n.handleSubmitJoinQuizForm=function(e){e.preventDefault();var t=n.props,r=t.connection,a=t.user;n.props.setIsAddingUserToQuizRoom(!0),r.invoke("AddUserToRoom",a.name,n.state.roomNumberInputText).then((function(e){n.props.setIsAddingUserToQuizRoom(!1),n.props.setQuizRoom(e),n.setState({submitJoinQuizFormError:!1},(function(){n.props.history.push(on),n.props.setQuizResults(null)}))})).catch((function(e){n.props.setIsAddingUserToQuizRoom(!1),n.setState({submitJoinQuizFormError:!0})}))},n.renderFormInputsOrReturnToQuizButton=function(){return null==n.props.quizRoom?a.a.createElement(r.Fragment,null,a.a.createElement(Z.a,{id:"room-number-input",label:"Room #",value:n.state.roomNumberInputText,onChange:function(e){return n.handleRoomNumberInputTextChange(e)},variant:"outlined",error:n.state.submitJoinQuizFormError,helperText:n.state.submitJoinQuizFormError?"Unable to join room":null}),a.a.createElement(Ce,null),a.a.createElement(M.a,{variant:"contained",color:"primary",endIcon:null,disabled:n.state.submitJoinQuizFormDisable,onClick:n.handleSubmitJoinQuizForm,type:"submit"},"Join Room")):a.a.createElement(M.a,{variant:"contained",color:"primary",endIcon:null,onClick:function(e){e.preventDefault(),n.props.history.push(on)},type:"submit"},"Rejoin Quiz")},n}return Object(S.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){return a.a.createElement(r.Fragment,null,a.a.createElement(ce,{buttons:!1}),a.a.createElement(Re,null,a.a.createElement(Ie,null,a.a.createElement(oe.a,{variant:"h4",style:{fontSize:"calc(16px + 3vw)"}},"Welcome ",a.a.createElement("strong",null,a.a.createElement("em",null,this.props.user.name))),!this.props.quizRoom&&a.a.createElement(oe.a,{variant:"body1",style:{fontSize:"calc(12px + 0.5vw)"}},"Enter a room # below to get started")),a.a.createElement(we,null,a.a.createElement(Qe,null,this.renderFormInputsOrReturnToQuizButton())),a.a.createElement(Se,null)))}}]),t}(r.Component),_e=Object(N.g)(Object(c.b)((function(e){return{user:e.auth.user,connection:e.server.hubConnection,quizRoom:e.quizRoom.quizRoom}}),{setQuizRoom:Q,setIsAddingUserToQuizRoom:function(e){return{type:"QUIZ_ROOM/SET_IS_ADDING_USER_TO_QUIZ_ROOM",payload:e}},setQuizResults:z})(Te));function Ue(){var e=Object(C.a)(["\n  height: 0.7rem;\n"]);return Ue=function(){return e},e}function Ae(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: ",";\n"]);return Ae=function(){return e},e}function Le(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  align-items: ",";\n  justify-content: ",";\n"]);return Le=function(){return e},e}function De(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: column;\n"]);return De=function(){return e},e}function qe(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n"]);return qe=function(){return e},e}var Pe=P.a.div(qe()),ke=P.a.div(De()),Ne=P.a.div(Le(),(function(e){return e.alignItems?e.alignItems:"center"}),(function(e){return e.justifyContent?e.justifyContent:"center"})),Fe=P.a.div(Ae(),(function(e){return e.flexDirection?e.flexDirection:"row"})),He=(P.a.div(Ue()),function(e){function t(){return Object(x.a)(this,t),Object(I.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){return a.a.createElement(Pe,null,a.a.createElement(ke,null,a.a.createElement(Ne,null,a.a.createElement(oe.a,{variant:"h2"},"Preparing quiz"))),a.a.createElement(Ne,null,a.a.createElement(Ne,null,a.a.createElement(oe.a,{variant:"h1"},this.props.roomTime))),a.a.createElement(Fe,{flexDirection:"column"},a.a.createElement(Ne,null),a.a.createElement(Ne,null,a.a.createElement(oe.a,{variant:"h6"},"Online Users: ",this.props.quizRoomUsersOnline))))}}]),t}(r.Component)),Me=Object(c.b)((function(e){return{roomTime:e.quizRoom.roomTime,quizRoomUsersOnline:e.quizRoom.usersOnline}}),{})(He);function Ze(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: ",";\n"]);return Ze=function(){return e},e}function Be(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  padding: 2rem;\n  align-items: ",";\n  justify-content: ",";\n"]);return Be=function(){return e},e}function Je(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  width: 100vw;\n  padding: 15rem;\n"]);return Je=function(){return e},e}function Ge(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n"]);return Ge=function(){return e},e}var We=P.a.div(Ge()),Ve=P.a.div(Je()),Ke=P.a.div(Be(),(function(e){return e.alignItems?e.alignItems:"center"}),(function(e){return e.justifyContent?e.justifyContent:"center"})),$e=P.a.div(Ze(),(function(e){return e.flexDirection?e.flexDirection:"row"})),Xe=function(e){function t(){return Object(x.a)(this,t),Object(I.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){return a.a.createElement(We,null,a.a.createElement(Ve,null,a.a.createElement(oe.a,{variant:"h4",style:{fontSize:"calc(10px + .8vw)"}},"Question ",this.props.currentQuestion.currentQuestionIndex," of ",this.props.currentQuestion.questionCount),a.a.createElement(oe.a,{variant:"h4",style:{fontSize:"calc(10px + 2vw)"}},this.props.currentQuestion.text)),a.a.createElement(Ke,null,a.a.createElement("div",{style:{display:"flex",flex:1,justifyContent:"flex-start",flexdirection:"column"}},a.a.createElement(me,{time:this.props.questionTime}))),a.a.createElement($e,null))}}]),t}(r.Component),Ye=Object(c.b)((function(e){return{questionTime:e.quizRoom.roomTime,currentQuestion:e.quizRoom.currentQuestion}}))(Xe),et=n(26);function tt(){var e=Object(C.a)(["\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n"]);return tt=function(){return e},e}function nt(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n"]);return nt=function(){return e},e}function rt(){var e=Object(C.a)(["\n  height: 0.7rem;\n"]);return rt=function(){return e},e}function at(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: ",";\n"]);return at=function(){return e},e}function ot(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  padding: 2rem;\n  align-items: ",";\n  justify-content: ",";\n  flex-direction: ","\n"]);return ot=function(){return e},e}function it(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  padding: 2rem;\n"]);return it=function(){return e},e}function ct(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n"]);return ct=function(){return e},e}var ut=P.a.div(ct()),st=P.a.div(it()),lt=P.a.div(ot(),(function(e){return e.alignItems?e.alignItems:"center"}),(function(e){return e.justifyContent?e.justifyContent:"center"}),(function(e){return e.flexDirection?e.flexDirection:"row"})),mt=P.a.div(at(),(function(e){return e.flexDirection?e.flexDirection:"row"})),ft=(P.a.div(rt()),P.a.div(nt())),pt=P.a.div(tt()),dt=function(e){return a.a.createElement("div",{style:{display:"flex",flex:5,alignItems:"center",justifyContent:"center",paddingRight:"0.5rem",paddingLeft:"0.5rem"}},a.a.createElement(oe.a,{style:{fontSize:"calc(12px + 1vw)",textAlign:"center"}},e.children))},bt=function(e){return a.a.createElement("div",{style:{display:"flex",justifyContent:"center",height:"100%",alignItems:"flex-start",paddingTop:"0.5rem",paddingLeft:"10px"}},a.a.createElement(oe.a,null,e.children))},ht=n(155),yt=n(157),Ot=n(156),gt=n(54);function vt(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  /* padding: 0.5rem; */\n  margin: 0.5rem;\n  /* padding: 0 1rem; */\n  /* padding-top: 1rem; */\n"]);return vt=function(){return e},e}var Et=Object(P.a)(ht.a)(vt()),jt=function(e){return a.a.createElement(Et,{style:{opacity:e.disabled&&!e.noStyleChangesOnDisabled?.4:1,backgroundColor:e.correct?Ot.a[400]:e.incorrect?gt.a[400]:void 0}},a.a.createElement(yt.a,{onClick:e.onClick,style:{display:"flex",flex:1},disabled:e.disabled,disableRipple:!0},e.children))},xt=function(e){function t(){var e,n;Object(x.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(I.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(a)))).state={disableAnswers:[!0,!0,!0,!0],disabled:!1},n._handleAnswerClick=function(e){n._disableAllQuestionsExcept(e),n.props.connection.invoke("AnswerQuestion",e,n.props.room.id).then((function(e){n.props.setCurrentQuestionResult(e)})).catch((function(e){console.error("error answering question")}))},n._disableAllQuestionsExcept=function(e){n.setState({disabled:!0});for(var t=n.state.disableAnswers,r=0;r<4;r++)r!==e&&(t[r]=!1);n.setState({disableAnswers:Object(et.a)(t)})},n}return Object(S.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){this.props.setCurrentQuestionResult({isAnswerCorrect:null,correctAnswer:-1,answer:-1,currentScore:-1!==this.props.currentQuestionResult.currentScore?this.props.currentQuestionResult.currentScore:0})}},{key:"render",value:function(){return a.a.createElement(ut,null,a.a.createElement(st,null,a.a.createElement(oe.a,{variant:"h4",style:{fontSize:"calc(10px + 2.5vw)"}},this.props.currentQuestion.text)),a.a.createElement(lt,null,a.a.createElement("div",{style:{display:"flex",flex:1,justifyContent:"flex-start",flexdirection:"column"}},a.a.createElement(me,{time:this.props.roomTime})),a.a.createElement("div",{style:{display:"flex",flex:1,justifyContent:"flex-end",flexdirection:"column"}},a.a.createElement(de,{usersCount:this.props.quizRoomUsersOnline}))),a.a.createElement(mt,null,a.a.createElement(ft,null,a.a.createElement(pt,null,a.a.createElement(jt,{onClick:this._handleAnswerClick.bind(this,0),disabled:this.state.disabled,noStyleChangesOnDisabled:this.state.disableAnswers[0]},a.a.createElement(bt,null,"A"),a.a.createElement(dt,null,this.props.currentQuestion.answers[0])),a.a.createElement(jt,{onClick:this._handleAnswerClick.bind(this,1),disabled:this.state.disabled,noStyleChangesOnDisabled:this.state.disableAnswers[1]},a.a.createElement(bt,null,"B"),a.a.createElement(dt,null,this.props.currentQuestion.answers[1]))),a.a.createElement(pt,null,a.a.createElement(jt,{onClick:this._handleAnswerClick.bind(this,2),disabled:this.state.disabled,noStyleChangesOnDisabled:this.state.disableAnswers[2]},a.a.createElement(bt,null,"C"),a.a.createElement(dt,null,this.props.currentQuestion.answers[2])),a.a.createElement(jt,{onClick:this._handleAnswerClick.bind(this,3),disabled:this.state.disabled,noStyleChangesOnDisabled:this.state.disableAnswers[3]},a.a.createElement(bt,null,"D"),a.a.createElement(dt,null,this.props.currentQuestion.answers[3]))))))}}]),t}(r.Component),Rt=Object(c.b)((function(e){return{quizRoomUsersOnline:e.quizRoom.usersOnline,roomTime:e.quizRoom.roomTime,currentQuestion:e.quizRoom.currentQuestion,connection:e.server.hubConnection,room:e.quizRoom.quizRoom,currentQuestionResult:e.quizRoom.currentQuestionResult}}),{setCurrentQuestionResult:function(e){return{type:"QUIZ_ROOM/SET_CURRENT_QUESTION_RESULT",payload:e}}})(xt),It=n(85),wt=n.n(It),St=n(86),Ct=n.n(St),Qt=function(e){function t(){var e,n;Object(x.a)(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(n=Object(I.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(i)))).state={disableStyles:[!0,!0,!0,!0],answerCorrect:[!1,!1,!1,!1],answerIncorrect:[!1,!1,!1,!1]},n.renderCorrect=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(wt.a,{style:{fontSize:"calc(15px + 8vw)",paddingBottom:"0.5rem",color:Ot.a[400]}}),a.a.createElement(oe.a,{variant:"h4",style:{fontSize:"calc(10px + 1.5vw)",color:Ot.a[400]}},"Correct!"),a.a.createElement(oe.a,{color:"primary",variant:"h4",style:{fontSize:"calc(10px + 1.5vw)",marginTop:"0.3rem"}},"Current Score: ",n.props.currentQuestionResult.currentScore))},n.renderIncorrect=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(Ct.a,{style:{fontSize:"calc(15px + 4vw)",paddingBottom:"0.5rem",color:gt.a[400]}}),a.a.createElement(oe.a,{variant:"h4",style:{fontSize:"calc(10px + 1.5vw)",color:gt.a[400]}},null===n.props.isAnswerCorrect?"Question not answered":"Incorrect"),a.a.createElement(oe.a,{color:"primary",variant:"h4",style:{fontSize:"calc(10px + 1.5vw)",marginTop:"0.3rem"}},"Current Score: ",n.props.currentQuestionResult.currentScore))},n.determineCorrectOrIncorrect=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return e?n.renderCorrect():n.renderIncorrect()},n}return Object(S.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){null!==this.props.currentQuestionResult.isAnswerCorrect&&this.determineAnswerStyles()}},{key:"componentWillUnmount",value:function(){}},{key:"determineAnswerStyles",value:function(){var e=this.props.currentQuestionResult,t=this.state,n=t.disableStyles,r=t.answerCorrect,a=t.answerIncorrect;if(e.isAnswerCorrect){r[e.correctAnswer]=!0;for(var o=0;o<4;o++)o!==e.answer&&(n[o]=!1)}if(!e.isAnswerCorrect){r[e.correctAnswer]=!0,a[e.answer]=!0;for(var i=0;i<4;i++)i!==e.answer&&i!==e.correctAnswer&&(n[i]=!1)}this.setState({disableStyles:Object(et.a)(n)}),this.setState({answerCorrect:Object(et.a)(r)}),this.setState({answerIncorrect:Object(et.a)(a)})}},{key:"render",value:function(){return a.a.createElement(ut,null,a.a.createElement(st,null,a.a.createElement(oe.a,{variant:"h4",style:{fontSize:"calc(10px + 2.5vw)"}},this.props.currentQuestion.text)),a.a.createElement(lt,{flexDirection:"column"},this.determineCorrectOrIncorrect(this.props.currentQuestionResult.isAnswerCorrect)),a.a.createElement(mt,null,a.a.createElement(ft,null,a.a.createElement(pt,null,a.a.createElement(jt,{disabled:!0,noStyleChangesOnDisabled:this.state.disableStyles[0],correct:this.state.answerCorrect[0],incorrect:this.state.answerIncorrect[0]},a.a.createElement(bt,null,"A"),a.a.createElement(dt,null,this.props.currentQuestion.answers[0])),a.a.createElement(jt,{disabled:!0,noStyleChangesOnDisabled:this.state.disableStyles[1],correct:this.state.answerCorrect[1],incorrect:this.state.answerIncorrect[1]},a.a.createElement(bt,null,"B"),a.a.createElement(dt,null,this.props.currentQuestion.answers[1]))),a.a.createElement(pt,null,a.a.createElement(jt,{disabled:!0,noStyleChangesOnDisabled:this.state.disableStyles[2],correct:this.state.answerCorrect[2],incorrect:this.state.answerIncorrect[2]},a.a.createElement(bt,null,"C"),a.a.createElement(dt,null,this.props.currentQuestion.answers[2])),a.a.createElement(jt,{disabled:!0,noStyleChangesOnDisabled:this.state.disableStyles[3],correct:this.state.answerCorrect[3],incorrect:this.state.answerIncorrect[3]},a.a.createElement(bt,null,"D"),a.a.createElement(dt,null,this.props.currentQuestion.answers[3]))))))}}]),t}(r.Component),zt=Object(c.b)((function(e){return{currentQuestion:e.quizRoom.currentQuestion,currentQuestionResult:e.quizRoom.currentQuestionResult}}))(Qt),Tt=Object(c.b)((function(e){return{isLoggedIn:e.auth.isLoggedIn,quizRoom:e.quizRoom.quizRoom,quizPhase:e.quizRoom.quizPhase,quizResults:e.quizRoom.results}}))((function(e){e.component;var t=Object(k.a)(e,["component"]);return a.a.createElement(N.b,t,function(){if(!e.isLoggedIn)return a.a.createElement(N.a,{to:"/"});if(!e.quizRoom)return a.a.createElement(N.a,{to:an});switch(e.quizPhase){case"lobby":return a.a.createElement(Me,null);case"prequestion":return a.a.createElement(Ye,null);case"question":return a.a.createElement(Rt,null);case"postquestion":return a.a.createElement(zt,null);case"finished":return a.a.createElement(N.a,{to:cn});default:return a.a.createElement(N.a,{to:"/"})}}())})),_t=n(40);function Ut(){var e=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  /* align-items: center;\n  justify-content: center; */\n"]);return Ut=function(){return e},e}function At(){var e=Object(C.a)(["\n  height: 0.7rem;\n"]);return At=function(){return e},e}function Lt(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n"]);return Lt=function(){return e},e}function Dt(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  /* align-items: ",";\n  justify-content: ","; */\n  flex-direction: row;\n\n  @media (max-width: 480px) {\n    flex-direction: column;\n  }\n"]);return Dt=function(){return e},e}function qt(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  align-items: ",";\n  justify-content: ",";\n"]);return qt=function(){return e},e}function Pt(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: column;\n"]);return Pt=function(){return e},e}function kt(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n"]);return kt=function(){return e},e}var Nt=P.a.div(kt()),Ft=P.a.div(Pt()),Ht=P.a.div(qt(),(function(e){return e.alignItems?e.alignItems:"center"}),(function(e){return e.justifyContent?e.justifyContent:"center"})),Mt=P.a.div(Dt(),(function(e){return e.alignItems?e.alignItems:"center"}),(function(e){return e.justifyContent?e.justifyContent:"center"})),Zt=P.a.div(Lt()),Bt=(P.a.div(At()),P.a.form(Ut()),n(89));function Jt(){var e=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  height: 100%;\n  margin: 1rem;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n"]);return Jt=function(){return e},e}var Gt=Object(P.a)(Bt.a)(Jt()),Wt=function(e){return a.a.createElement(Gt,null,a.a.createElement(oe.a,{variant:"h3"},e.place),a.a.createElement(oe.a,{variant:"h5"},e.userName),a.a.createElement(oe.a,{variant:"h5"},"Score: ",e.score))},Vt=function(e){function t(){var e,n;Object(x.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=Object(I.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(o))))._renderResultCards=function(){var e=n.props.quizResults.topThreeUsers;switch(e.length){case 3:return a.a.createElement(a.a.Fragment,null,a.a.createElement(Wt,{place:"1st",userName:e[0].name,score:e[0].score}),a.a.createElement(Wt,{place:"2nd",userName:e[1].name,score:e[1].score}),a.a.createElement(Wt,{place:"3rd",userName:e[2].name,score:e[2].score}));case 2:return a.a.createElement(a.a.Fragment,null,a.a.createElement(Wt,{place:"1st",userName:e[0].name,score:e[0].score}),a.a.createElement(Wt,{place:"2nd",userName:e[1].name,score:e[1].score}));case 1:return a.a.createElement(Wt,{place:"1st",userName:e[0].name,score:e[0].score})}},n.onTakeAnotherQuizButtonClick=function(){n.props.history.push(an)},n}return Object(S.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){return a.a.createElement(Nt,null,a.a.createElement(Ft,null,a.a.createElement(Ht,null,a.a.createElement(oe.a,{variant:"h2"},"Results"))),a.a.createElement(Mt,null,this._renderResultCards()),a.a.createElement(Zt,null,a.a.createElement(M.a,{variant:"contained",color:"primary",onClick:this.onTakeAnotherQuizButtonClick},"Take another quiz")))}}]),t}(r.Component),Kt=Object(c.b)((function(e){return{quizResults:e.quizRoom.results}}))(Vt),$t=Object(N.g)(Kt),Xt=function(e){return a.a.createElement(_t.a,{basename:"/"},a.a.createElement(N.d,null,a.a.createElement(N.b,{exact:!0,path:"/",component:ye}),a.a.createElement(F,{path:an,component:_e}),a.a.createElement(Tt,{path:on}),a.a.createElement(rn,{path:cn,component:$t}),a.a.createElement(N.a,{to:"/"})))},Yt=n(53),en=n.n(Yt);function tn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function nn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?tn(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tn(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var rn=Object(c.b)((function(e){return{quizResults:e.quizRoom.results,isLoggedIn:e.auth.isLoggedIn}}))((function(e){var t=function(){return a.a.createElement(en.a,{active:!e.quizResults,spinner:!0,fadeSpeed:0,text:"Retrieving quiz results",styles:{spinner:function(e){return nn({},e,{"& svg circle":{stroke:"".concat(q.palette.primary[q.palette.type])}})},content:function(e){return nn({},e,{fontFamily:q.typography.fontFamily})},overlay:function(e){return nn({},e,{zIndex:2e3,width:"100vw",height:"100vh"})}}})};return e.isLoggedIn?e.quizResults?a.a.createElement(F,e):t():a.a.createElement(N.a,{to:"/"})})),an="/joinquiz",on="/quiz",cn="/quizresults";function un(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function sn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?un(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):un(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ln(){var e=Object(C.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"]);return ln=function(){return e},e}var mn=P.a.div(ln()),fn=function(e){function t(){var e,n;Object(x.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(I.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(a)))).state={isHubConnectionLoading:!1,errorLoadingHubConnection:!1},n.setIsHubConnectionLoading=function(e){n.setState({isHubConnectionLoading:e})},n.determineLoadingOverlayText=function(){return n.state.errorLoadingHubConnection?"Error contacting server. Please refresh page to try again!":n.state.isHubConnectionLoading?"":n.props.isLoggingIn?"Logging in":n.props.isAddingUserToQuizRoom?"Joining Quiz":""},n}return Object(S.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setIsHubConnectionLoading(!0);var t=(new T.b).withUrl("https://quizr-api.herokuapp.com/quizrhub",T.a.WebSockets).withAutomaticReconnect().build();t.onreconnecting((function(){e.setIsHubConnectionLoading(!0)})),t.onreconnected((function(){e.setIsHubConnectionLoading(!1)})),t.start().then((function(){e.props.setHubConnection(t),e.setIsHubConnectionLoading(!1)})).catch((function(t){e.setIsHubConnectionLoading(!1),e.setState({errorLoadingHubConnection:!0})})),t.on("UpdateRoomTimer",(function(t){e.props.setQuizRoomTime(t)})),t.on("UpdateRoomPhase",(function(t){e.props.setQuizRoomPhase(t)})),t.on("UpdateQuizRoomUsers",(function(t){e.props.setQuizRoomUsersOnline(t)})),t.on("ReceiveQuizResults",(function(t){e.props.setQuizResults(t),e.props.setQuizRoom(null),e.props.setQuizRoomPhase("lobby")})),t.on("ReceiveNewQuestion",(function(t){e.props.setCurrentQuestion(t)}))}},{key:"render",value:function(){return a.a.createElement(_.a,{theme:q},a.a.createElement(en.a,{active:this.state.isHubConnectionLoading||this.props.isLoggingIn||this.state.errorLoadingHubConnection||this.props.isAddingUserToQuizRoom,spinner:!this.state.errorLoadingHubConnection,fadeSpeed:0,text:this.determineLoadingOverlayText(),styles:{spinner:function(e){return sn({},e,{"& svg circle":{stroke:"".concat(q.palette.primary[q.palette.type])}})},content:function(e){return sn({},e,{fontFamily:q.typography.fontFamily})},overlay:function(e){return sn({},e,{zIndex:2e3})}}},a.a.createElement(U.a,null),a.a.createElement(mn,null,a.a.createElement(Xt,null))))}}]),t}(r.Component),pn=Object(c.b)((function(e){return{isLoggingIn:e.auth.isLoggingIn,isAddingUserToQuizRoom:e.quizRoom.isAddingUserToQuizRoom}}),{setHubConnection:function(e){return{type:"SERVER/SET_HUBCONNECTION",payload:e}},setQuizRoomTime:function(e){return{type:"QUIZ_ROOM/SET_QUIZ_ROOM_TIME",payload:e}},setQuizRoomPhase:function(e){return{type:"QUIZ_ROOM/SET_QUIZ_ROOM_PHASE",payload:e}},setQuizRoomUsersOnline:function(e){return{type:"QUIZ_ROOM/SET_QUIZ_ROOM_USERS_ONLINE",payload:e}},setQuizResults:z,setQuizRoom:Q,setCurrentQuestion:function(e){return{type:"QUIZ_ROOM/SET_CURRENT_QUESTION",payload:e}}})(fn);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(c.a,{store:j},a.a.createElement(pn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},97:function(e,t,n){e.exports=n(121)}},[[97,1,2]]]);
//# sourceMappingURL=main.b7b1d60b.chunk.js.map