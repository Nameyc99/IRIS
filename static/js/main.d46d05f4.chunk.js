(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),a=n(23),o=n.n(a),i=n(5),c=n(15),l=n(27),d=n(4),u="http://140.117.71.98:8000/",j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r={method:t,headers:{"Content-Type":"application/json"}},s=localStorage.getItem("token");return s&&(r.headers.Authorization="token ".concat(s)),n&&(r.body=JSON.stringify(n)),fetch(e,r).then((function(e){return 204!==e.status?e.json():{}}))},A=function(e,t){return j(u+e,"POST",t)},b=n(72),p=n(2);var m=function(e){var t=Object(r.useState)({username:"",password:"",hidePassword:!0,passwordType:"password"}),n=Object(i.a)(t,2),s=n[0],a=n[1],o=Object(r.useState)(!1),u=Object(i.a)(o,2),j=u[0],m=u[1],O=Object(r.useState)(""),g=Object(i.a)(O,2),h=g[0],v=g[1];Object(r.useEffect)((function(){s.hidePassword?s.passwordType="password":s.passwordType="text"}));var f=Object(d.a)({log:Object(r.useState)(!1)},e.state||{}),x=Object(i.a)(f.log,2),w=(x[0],x[1]),S=function(e){var t=e.target,n=t.id,r=t.value;a((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(l.a)({},n,r))}))};return Object(p.jsxs)(c.animated.form,{action:"",id:"loginform",style:e.style,children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("input",{id:"username",type:"text",placeholder:"Enter your username",value:s.username,onChange:S})}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("input",{id:"password",type:s.passwordType,placeholder:"Enter your password",value:s.password,onChange:S}),Object(p.jsx)("img",{src:"data:image/png;base64,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",onClick:function(){a(Object(d.a)(Object(d.a)({},s),{},{hidePassword:!s.hidePassword}))},style:{position:"absolute",left:"345px",top:"115px",width:"30px",height:"30px",objectFit:"cover"}})]},"test"),j&&Object(p.jsx)(b.a,{variant:"warning",children:h}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"submit",value:"submit",className:"submit",onClick:function(e){e.preventDefault();var t={username:s.username,password:s.password};A("user/login/",t).then((function(e){e.token?(localStorage.setItem("token",e.token),localStorage.setItem("username",t.username),w(!0)):e.username?v("Field may not be blank"):v("Wrong username or password"),m(!0)}))}})]})};n(59),n(46);var O=function(e){var t=Object(r.useState)(0),n=Object(i.a)(t,2),s=n[0],a=n[1],o=Object(r.useState)(!1),l=Object(i.a)(o,2),d=l[0],u=l[1],j=Object(r.useState)("\u9a57\u8b49\u78bc\u932f\u8aa4"),A=Object(i.a)(j,2),m=A[0],O=A[1],g=Object(r.useState)("danger"),h=Object(i.a)(g,2),v=h[0],f=h[1];return Object(p.jsx)(c.animated.form,{action:"",id:"registerform",style:e.style,children:Object(p.jsxs)("div",{className:"verify",children:[Object(p.jsxs)("div",{className:"letterSize",children:["\u7372\u53d6\u9a57\u8b49\u78bc",Object(p.jsx)("br",{})]}),Object(p.jsx)("br",{}),"\u5df2\u767c\u90014\u4f4d\u6578\u9a57\u8b49\u78bc\u81f3\u60a8\u7684\u4fe1\u7bb1:",Object(p.jsx)("form",{children:Object(p.jsx)("input",{type:"text",name:"\u6b04\u4f4d\u540d\u7a31",onChange:function(e){a(e.target.value)}})}),d&&Object(p.jsx)(b.a,{variant:v,children:m}),Object(p.jsx)("div",{className:"verifySubmit",onClick:function(){var e=localStorage.getItem("verify");s==e?(O("\u9a57\u8b49\u78bc\u6b63\u78ba"),f("success"),u(!0),localStorage.removeItem("verify")):(O("\u9a57\u8b49\u78bc\u932f\u8aa4"),u(!0))},children:"\u78ba\u5b9a"})]})})},g=n(70),h=n(71);var v=function(e){var t=Object(r.useState)({username:"",email:"",password:"",confirmpassword:""}),n=Object(i.a)(t,2),s=n[0],a=n[1],o=Object(r.useState)(!1),u=Object(i.a)(o,2),j=u[0],m=u[1],v=Object(r.useState)(!1),f=Object(i.a)(v,2),x=f[0],w=f[1],S=function(e){var t=e.target,n=t.id,r=t.value;a((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(l.a)({},n,r))}))};return j?Object(p.jsx)(O,{style:e.style}):Object(p.jsxs)(c.animated.form,{action:"",id:"registerform",style:e.style,children:[Object(p.jsx)("input",{id:"username",type:"text",placeholder:"Create your username",value:s.username,onChange:S}),x&&Object(p.jsx)(g.a,{children:Object(p.jsx)(h.a,{children:Object(p.jsx)(b.a,{variant:"warning",children:"A user with that username already exists."})})}),Object(p.jsx)("input",{id:"email",type:"text",placeholder:"Create your email",value:s.email,onChange:S}),Object(p.jsx)("input",{id:"password",type:"text",placeholder:"Create your password",value:s.password,onChange:S}),Object(p.jsx)("input",{id:"confirmpassword",type:"text",placeholder:"Enter  your password again",value:s.confirmpassword,onChange:S}),Object(p.jsx)("input",{type:"submit",value:"submit",className:"submit",onClick:function(e){e.preventDefault();var t={username:s.username,email:s.email,password:s.password};A("user/register/",t).then((function(e){e.user?A("utils/mail_certification/",{mail:t.email}).then((function(e){e.success?(localStorage.setItem("verify",e.verify),m(!0)):alert("Mail not sent")})):e.username&&w(!0)}))}})]})};var f=function(){var e=localStorage.getItem("username");if(e){return Object(p.jsxs)("div",{children:["Hello, ",e," ",Object(p.jsx)("button",{onClick:function(){A("user/logout/",{}).then((function(e){console.log(e),localStorage.clear()}))},children:"logout"})]})}return null},x=(n(60),n.p+"static/media/logo.54ebdebe.png");var w=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),s=n[0],a=n[1],o=Object(c.useSpring)({left:s?-500:0}),l=Object(c.useSpring)({left:s?0:500}),d=Object(c.useSpring)({borderBottom:s?"solid 0px transparent":"solid 2px #754907"}),u=Object(c.useSpring)({borderBottom:s?"solid 2px #754907":"solid 0px transparent"}),j=function(){a(!s)};return Object(p.jsxs)("div",{className:"login-register-wrapper",children:[Object(p.jsx)("img",{className:"top11",style:{height:"80px",width:"140px"},src:x}),Object(p.jsx)(f,{}),Object(p.jsxs)("div",{className:"nav-buttons",children:[Object(p.jsx)(c.animated.button,{onClick:j,id:"loginBtn",style:d,children:"LOGIN"}),Object(p.jsx)(c.animated.button,{onClick:j,id:"registerBtn",style:u,children:"SIGN UP"})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)(m,{style:o,state:e.state}),Object(p.jsx)(v,{style:l})]}),Object(p.jsx)(c.animated.div,{className:"forgot-panel",style:o,children:Object(p.jsx)("a",{className:"forgot",herf:"#",children:"Forgot password"})})]})},S=(n(61),n.p+"static/media/homepage1.87cbea7a.png"),y=n.p+"static/media/journal.d9a2c7bd.png";var T=function(){var e=localStorage.getItem("username");if(e){return Object(p.jsxs)("div",{children:["Hello, ",e," ",Object(p.jsx)("button",{onClick:function(){A("user/logout/",{}).then((function(e){console.log(e),localStorage.clear(),window.location.href="/"}))},children:"logout"})]})}return null};var k=function(){return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"login-register-wrapper",children:[Object(p.jsx)(T,{}),Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{style:{width:"120px",height:"60px",border:"0",position:"relative",top:"80px",left:"65px"},src:S,id:"PIC1",onclick:"changeFunc1()"}),Object(p.jsx)("img",{style:{width:"144px",height:"61px",border:"0",position:"relative",top:"80px",left:"120px"},src:y,id:"PIC2",onclick:"changeFunc2()"})]}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{className:"button button1",type:"submit",value:"\u5efa\u7acb\u690d\u7269\u8cc7\u6599"})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{className:"button button2",type:"submit",value:"\u6f86\u6c34"})," "]}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{className:"button button3",type:"submit",value:"\u7167\u660e"})}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{className:"button button4",type:"submit",value:"\u67e5\u770b\u73fe\u6cc1/\u62cd\u7167"})}),Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)("div",{className:"content"}),Object(p.jsx)("footer",{className:"footer"})]})]})})},N=n(9);var I=function(){var e=Object(r.useState)(localStorage.getItem("token")),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(p.jsxs)(s.a.Fragment,{children:[Object(p.jsx)(N.b,{path:"/Homepage",children:Object(p.jsx)(k,{})}),n?Object(p.jsx)(N.a,{to:"/Homepage"}):Object(p.jsx)(w,{state:{log:[n,a]}})]})},B=n(38),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(B.a,{children:Object(p.jsx)(I,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/IRIS",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/IRIS","/service-worker.js");E?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):W(t,e)}))}}()}},[[68,1,2]]]);
//# sourceMappingURL=main.d46d05f4.chunk.js.map