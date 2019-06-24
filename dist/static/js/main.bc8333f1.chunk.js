(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{214:function(e,t,a){e.exports=a(412)},219:function(e,t,a){},412:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(210),l=a.n(c),i=(a(219),a(21)),o=a(22),s=a(24),m=a(23),u=a(25),d=a(6),p=a(40),h=a(8),E=Object(h.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("ul",{className:"navbar-nav d-flex"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.c,{to:"/create",className:"nav-link"},"New Project")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{onClick:e.signOut,className:"nav-link"},"Log Out")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.c,{to:"/",className:"btn bg-info rounded-circle nav-link"},e.profile.initials)))}),f=function(){return r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.c,{to:"/signUp",className:"nav-link"},"Signup")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.c,{to:"/signIn",className:"nav-link"},"Login")))},b=Object(h.b)(function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile;console.log(t);var n=t.uid?r.a.createElement(E,{profile:a}):r.a.createElement(f,null);return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark mb-0 h1"},r.a.createElement("div",{className:"container"},r.a.createElement(d.b,{to:"/",className:"navbar-brand"},"Wippo"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n)))}),g=a(47),v=a.n(g),N=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"card-title"},r.a.createElement("h3",null,"Notifications")),r.a.createElement("ul",{className:"notifications"},t&&t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"text-info"},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"note-date text-info"},v()(e.time.toDate()).fromNow()))})))))},j=function(e){var t=e.project;return r.a.createElement("div",{className:"card project-summary"},r.a.createElement("div",{className:"card-content text-secondary"},r.a.createElement("h5",{className:"card-title"},t.title),r.a.createElement("p",{className:"card-text"},"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"text-secondary"},v()(t.createdAt.toDate()).calendar())))},O=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map(function(e){return r.a.createElement(d.b,{to:"/project/"+e.id,key:e.id},r.a.createElement(j,{project:e}))}))},C=a(27),S=a(16),y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){console.log(this.props);var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-12 col-md-6"},r.a.createElement(O,{projects:t})),r.a.createElement("div",{className:"col col-12 col-md-5 offset-md-1"},r.a.createElement(N,{notifications:n})))):r.a.createElement(p.a,{to:"/signIn"})}}]),t}(n.Component),w=Object(S.d)(Object(h.b)(function(e){return console.log(e),{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}}),Object(C.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(y),R=Object(S.d)(Object(h.b)(function(e,t){console.log(e);var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}}),Object(C.firestoreConnect)([{collection:"projects"}]))(function(e){var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card action"}),r.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,v()(t.createdAt.toDate()).calendar()))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading project...")):r.a.createElement(p.a,{to:"/signIn"})}),I=a(31),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(I.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state),console.log(a.state)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(p.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"bg-white"},r.a.createElement("h5",{className:"text-grey"},"SignIn"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn bg-info"},"LogIn"),r.a.createElement("div",{className:"text-danger center"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component),x=Object(h.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a}}})(F),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(I.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state),a.props.signUp(a.state)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(p.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"bg-white"},r.a.createElement("h5",{className:"text-grey"},"SignUp"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn bg-info"},"SignUp"),r.a.createElement("div",{className:"text-danger center"},a?r.a.createElement("p",null,a):null))))}}]),t}(n.Component),A=Object(h.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,c=n.getFirestore,l=r(),i=c();l.auth().createUserWithEmailAndPassword(a.email,a.password).then(function(e){return i.collection("users").doc(e.user.uid).set({firstName:a.firstName,lastName:a.lastName,initials:a.firstName[0]+a.lastName[0]})}).then(function(){e({type:"SIGNUP_SUCCESS"})}).catch(function(t){e({type:"SIGNUP_ERROR",err:t})})}));var a}}})(k),P=a(41),U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(I.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"bg-white"},r.a.createElement("h5",{className:"text-grey"},"Create new project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn bg-info"},"Create")))):r.a.createElement(p.a,{to:"/signIn"})}}]),t}(n.Component),_=Object(h.b)(function(e){return{auth:e.firebase.auth}},function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,l=a().firebase.auth.uid;r.collection("projects").add(Object(P.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:l,createdAt:new Date})).then(function(){t({type:"CREATE_PROJECT",project:e})}).catch(function(e){t({type:"CREATE_PROJECT_ERROR"},e)})}}(t))}}})(U),L=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:w}),r.a.createElement(p.b,{path:"/project/:id",component:R}),r.a.createElement(p.b,{path:"/signIn",component:x}),r.a.createElement(p.b,{path:"/signUp",component:A}),r.a.createElement(p.b,{path:"/create",component:_}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T={authError:null},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(P.a)({},e,{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(P.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(P.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(P.a)({},e,{authError:t.err.message});default:return e}},D={},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT_SUCCESS":return console.log("create project",t.project),e;case"CREATE_PROJECTR_ERROR":return console.log("create project error",t.err),e;default:return e}},B=a(62),W=Object(S.c)({auth:G,project:J,firestore:B.firestoreReducer,firebase:C.firebaseReducer}),z=a(213),Z=a(91),K=a.n(Z);a(406),a(410);K.a.initializeApp({apiKey:"AIzaSyAvpCPZIXZobErOBI6jkSJnvA31Rs0051A",authDomain:"wippo-c6ee3.firebaseapp.com",databaseURL:"https://wippo-c6ee3.firebaseio.com",projectId:"wippo-c6ee3",storageBucket:"wippo-c6ee3.appspot.com",messagingSenderId:"177517400758"}),K.a.firestore().settings({timestampsInSnapshots:!0});var X=K.a,$=Object(S.e)(W,Object(S.d)(Object(S.a)(z.a.withExtraArgument({getFirebase:C.getFirebase,getFirestore:B.getFirestore})),Object(B.reduxFirestore)(X),Object(C.reactReduxFirebase)(X,{userProfile:"users",useFirestoreForProfile:!0,attachAuthIsReady:!0})));l.a.render(r.a.createElement(h.a,{store:$},r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[214,1,2]]]);
//# sourceMappingURL=main.bc8333f1.chunk.js.map