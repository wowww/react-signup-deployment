(this["webpackJsonpreact-firebase-auth"]=this["webpackJsonpreact-firebase-auth"]||[]).push([[0],{545:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),o=r(34),a=r.n(o),s=r(50),i=r(39),l=r(21),j=r(11),b=r(217),u=r(54),d=Object(b.a)({apiKey:"AIzaSyDuC12_fs5zD5b-ltyD_9j0Jn49b9s9DMI",authDomain:"react-firebase-auth-6fbdf.firebaseapp.com",projectId:"react-firebase-auth-6fbdf",storageBucket:"react-firebase-auth-6fbdf.appspot.com",messagingSenderId:"516375964100",appId:"1:516375964100:web:daac813214c1337a87dc91"}),h=Object(u.d)(d),O=r(6),x=Object(n.createContext)({currentUser:null,register:function(){return Promise},login:function(){return Promise},logout:function(){return Promise},signInWithGoogle:function(){return Promise},forgotPassword:function(){return Promise},resetPassword:function(){return Promise}}),m=function(){return Object(n.useContext)(x)};function f(e){var t=e.children,r=Object(n.useState)(null),c=Object(j.a)(r,2),o=c[0],a=c[1];Object(n.useEffect)((function(){var e=Object(u.e)(h,(function(e){a(e)}));return function(){e()}}),[]);var s={currentUser:o,register:function(e,t){return Object(u.c)(h,e,t)},login:function(e,t){return Object(u.g)(h,e,t)},logout:function(){return Object(u.i)(h)},signInWithGoogle:function(){var e=new u.a;return Object(u.h)(h,e)},forgotPassword:function(e){return Object(u.f)(h,e,{url:"http://localhost:3000/login"})},resetPassword:function(e,t){return Object(u.b)(h,e,t)}};return Object(O.jsx)(x.Provider,{value:s,children:t})}var p=r(1),g=r.n(p),v=r(5),w=r(576),y=r(567),S=r(30),C=r(578),k=r(104),z=r(569),P=r(579),W=r(226),R=r(570),I=r(560),D=r(228),U=function(e){return Object(O.jsx)(I.a,Object(s.a)({bg:Object(D.d)("white","gray.700"),py:"8",px:{base:"4",md:"10"},shadow:"base",rounded:{sm:"lg"}},e))},A=r(128),F=r(561),L=r(562),G=r(563),M=["children"];function q(e){var t=e.children,r=Object(A.a)(e,M);return Object(O.jsxs)(F.a,Object(s.a)(Object(s.a)({align:"center",color:"gray.300"},r),{},{children:[Object(O.jsx)(I.a,{flex:"1",children:Object(O.jsx)(L.a,{borderColor:"currentcolor"})}),Object(O.jsx)(G.a,{as:"span",px:"3",color:Object(D.d)("gray.600","gray.400"),fontWeight:"medium",children:t}),Object(O.jsx)(I.a,{flex:"1",children:Object(O.jsx)(L.a,{borderColor:"currentcolor"})})]}))}var E=r(566),B=r(564),J=r(565),N=r(80),T=["to","name"];function _(e){var t=e.to,r=e.name,n=Object(A.a)(e,T),c=Object(l.h)().pathname===t;return Object(O.jsx)(i.c,{to:t,children:Object(O.jsx)(W.a,Object(s.a)(Object(s.a)({as:"a",variant:c?"outline":"ghost",colorScheme:c?"primary":"gray"},n),{},{children:r}))})}function K(){var e=Object(D.c)().toggleColorMode,t=m(),r=t.logout,n=t.currentUser;return Object(O.jsx)(I.a,{borderBottom:"2px",borderBottomColor:Object(D.d)("gray.100","gray.700"),mb:4,children:Object(O.jsxs)(C.a,{py:4,justifyContent:"flex-end",maxW:"container.lg",mx:"auto",children:[Object(O.jsx)(_,{to:"/",name:"Firbase Authentication",size:"lg"}),Object(O.jsx)(B.a,{}),!n&&Object(O.jsx)(_,{to:"/login",name:"Login"}),!n&&Object(O.jsx)(_,{to:"/register",name:"Register"}),n&&Object(O.jsx)(_,{to:"/profile",name:"Profile"}),n&&Object(O.jsx)(_,{to:"/protected-page",name:"Protected"}),n&&Object(O.jsx)(_,{to:"/logout",name:"Logout",onClick:function(){var e=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),Object(O.jsx)(J.a,{variant:"outline",icon:Object(D.d)(Object(O.jsx)(N.c,{}),Object(O.jsx)(N.b,{})),onClick:e,"aria-label":"toggle-dark-mode"})]})})}function X(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(K,{}),Object(O.jsx)(E.a,{maxW:"container.lg",children:e.children})]})}function H(){var e=Object(l.g)(),t=m().forgotPassword,r=Object(w.a)(),c=Object(n.useState)(""),o=Object(j.a)(c,2),a=o[0],s=o[1];return Object(O.jsxs)(X,{children:[Object(O.jsx)(y.a,{textAlign:"center",my:12,children:"Forgot password"}),Object(O.jsxs)(U,{maxW:"md",mx:"auto",mt:4,children:[Object(O.jsx)(S.a.form,{onSubmit:function(){var e=Object(v.a)(g.a.mark((function e(n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,t(a);case 4:r({description:"An email is sent to ".concat(a," for password reset instructions."),status:"success",duration:5e3,isClosable:!0}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0.message),r({description:e.t0.message,status:"error",duration:5e3,isClosable:!0});case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),children:Object(O.jsxs)(C.b,{spacing:"6",children:[Object(O.jsxs)(k.a,{id:"email",children:[Object(O.jsx)(z.a,{children:"Email address"}),Object(O.jsx)(P.a,{name:"email",type:"email",autoComplete:"email",required:!0,value:a,onChange:function(e){return s(e.target.value)}})]}),Object(O.jsx)(W.a,{type:"submit",colorScheme:"pink",size:"lg",fontSize:"md",children:"Submit"})]})}),Object(O.jsx)(q,{my:6,children:"OR"}),Object(O.jsx)(R.a,{children:Object(O.jsx)(W.a,{variant:"link",onClick:function(){return e.push("/login")},children:"Login"})})]})]})}var Q=r(571),V=r(572);function Y(){m().currentUser;return Object(O.jsxs)(X,{children:[Object(O.jsx)(y.a,{children:"Firebase Authentication"}),Object(O.jsxs)(Q.c,{fontSize:"3xl",my:4,children:[Object(O.jsx)(Q.b,{children:"\uc774\uba54\uc77c \uc554\ud638 \uc778\uc99d(\ub4f1\ub85d/\ub85c\uadf8\uc778)"}),Object(O.jsx)(Q.b,{children:"Google \ub85c\uadf8\uc778 \uae30\ub2a5"}),Object(O.jsx)(Q.b,{children:"\ube44\ubc00\ubc88\ud638 \ucc3e\uae30 \uae30\ub2a5"}),Object(O.jsx)(Q.b,{children:"\uc0ac\uc6a9\uc790 \uc815\uc758 \uc554\ud638 \uc7ac\uc124\uc815 \ud398\uc774\uc9c0"}),Object(O.jsxs)(Q.b,{children:[Object(O.jsx)(V.a,{fontSize:"inherit",colorScheme:"teal",mx:2,textTransform:"capitalize",borderRadius:"md",children:"Chakra UI"}),"\ub97c \ud65c\uc6a9\ud55c \ub2e4\ud06c \ubaa8\ub4dc \ud15c\ud50c\ub9bf"]})]}),Object(O.jsx)(y.a,{size:"md",mt:20,children:"Some other links (only for reference):"}),Object(O.jsxs)(Q.a,{children:[Object(O.jsx)(Q.b,{children:Object(O.jsx)(i.b,{to:"/reset-password",children:Object(O.jsx)(V.a,{fontWeight:"black",fontSize:"4xl",mx:2,px:2,colorScheme:"green",mt:4,borderRadius:"md",children:"reset page"})})}),Object(O.jsx)(Q.b,{children:Object(O.jsx)(i.b,{to:"/forgot-password",children:Object(O.jsx)(V.a,{fontWeight:"black",fontSize:"4xl",mx:2,px:2,colorScheme:"purple",mt:4,mb:20,borderRadius:"md",children:"forgot page"})})})]})]})}r(245);function Z(){var e=Object(n.useRef)(!1);return Object(n.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}function $(){var e=Object(l.g)(),t=Object(n.useState)(""),r=Object(j.a)(t,2),c=r[0],o=r[1],a=Object(n.useState)(""),s=Object(j.a)(a,2),b=s[0],u=s[1],d=Object(n.useState)(!1),h=Object(j.a)(d,2),x=h[0],f=h[1],p=Object(w.a)(),R=m(),I=R.login,D=R.signInWithGoogle,A=Z();return Object(O.jsxs)(X,{children:[Object(O.jsx)(y.a,{textAlign:"center",my:12,children:"Login"}),Object(O.jsxs)(U,{maxW:"md",mx:"auto",mt:4,children:[Object(O.jsx)(S.a.form,{onSubmit:function(){var t=Object(v.a)(g.a.mark((function t(r){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.preventDefault(),c&&b||p({description:"Credentails not valid",status:"error",duration:5e3,isClosable:!0}),f(!0),I(c,b).then((function(t){console.log(t),e.push("/profile")})).catch((function(e){console.log(e.message),p({description:e.message,status:"error",duration:5e3,isClosable:!0})})).finally((function(){A.current&&f(!1)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:Object(O.jsxs)(C.b,{spacing:"6",children:[Object(O.jsxs)(k.a,{id:"email",children:[Object(O.jsx)(z.a,{children:"Email address"}),Object(O.jsx)(P.a,{name:"email",type:"email",autoComplete:"email",required:!0,value:c,onChange:function(e){return o(e.target.value)}})]}),Object(O.jsxs)(k.a,{id:"password",children:[Object(O.jsx)(z.a,{children:"Password"}),Object(O.jsx)(P.a,{name:"password",type:"password",autoComplete:"password",required:!0,value:b,onChange:function(e){return u(e.target.value)}})]}),Object(O.jsx)(W.a,{isLoading:x,type:"submit",colorScheme:"primary",size:"lg",fontSize:"md",children:"Sign in"})]})}),Object(O.jsxs)(C.a,{justifyContent:"space-between",my:4,children:[Object(O.jsx)(W.a,{variant:"link",children:Object(O.jsx)(i.b,{to:"/forgot-password",children:"Forgot password?"})}),Object(O.jsx)(W.a,{variant:"link",onClick:function(){return e.push("/register")},children:"Register"})]}),Object(O.jsx)(q,{my:6,children:"OR"}),Object(O.jsx)(W.a,{variant:"outline",isFullWidth:!0,colorScheme:"red",leftIcon:Object(O.jsx)(N.a,{}),onClick:function(){return D().then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},children:"Sign in with Google"})]})]})}var ee=r(573);function te(){return Object(O.jsxs)(X,{children:[Object(O.jsx)(y.a,{children:"Firebase Authentication"}),Object(O.jsxs)(Q.c,{fontSize:"3xl",my:4,children:[Object(O.jsx)(Q.b,{children:"\uc774\uba54\uc77c \uc554\ud638 \uc778\uc99d(\ub4f1\ub85d/\ub85c\uadf8\uc778)"}),Object(O.jsx)(Q.b,{children:"Google \ub85c\uadf8\uc778 \uae30\ub2a5"}),Object(O.jsx)(Q.b,{children:"\ube44\ubc00\ubc88\ud638 \ucc3e\uae30 \uae30\ub2a5"}),Object(O.jsx)(Q.b,{children:"\uc0ac\uc6a9\uc790 \uc815\uc758 \uc554\ud638 \uc7ac\uc124\uc815 \ud398\uc774\uc9c0"}),Object(O.jsxs)(Q.b,{children:[Object(O.jsx)(V.a,{fontSize:"inherit",colorScheme:"teal",mx:2,textTransform:"capitalize",borderRadius:"md",children:"Chakra UI"}),"\ub97c \ud65c\uc6a9\ud55c \ub2e4\ud06c \ubaa8\ub4dc \ud15c\ud50c\ub9bf"]})]}),Object(O.jsx)(y.a,{size:"md",mt:20,children:"Some other links (only for reference):"}),Object(O.jsxs)(Q.a,{children:[Object(O.jsx)(Q.b,{children:Object(O.jsx)(ee.a,{to:"/reset-password",children:Object(O.jsx)(V.a,{fontWeight:"black",fontSize:"4xl",mx:2,px:2,colorScheme:"green",mt:4,borderRadius:"md",children:"reset page"})})}),Object(O.jsx)(Q.b,{children:Object(O.jsx)(ee.a,{to:"/forgot-password",children:Object(O.jsx)(V.a,{fontWeight:"black",fontSize:"4xl",mx:2,px:2,colorScheme:"purple",mt:4,mb:20,borderRadius:"md",children:"forgot page"})})})]})]})}function re(){var e=m().currentUser;return Object(O.jsxs)(X,{children:[Object(O.jsxs)(y.a,{children:["Profile page",Object(O.jsx)(V.a,{colorScheme:"green",fontSize:"lg",mx:4,children:"Protected Page"})]}),Object(O.jsx)(E.a,{maxW:"container.lg",overflowX:"auto",py:4,children:Object(O.jsx)(S.a.pre,{children:JSON.stringify(e,null,2)})})]})}function ne(){var e=Object(l.g)(),t=Object(n.useState)(""),r=Object(j.a)(t,2),c=r[0],o=r[1],a=Object(n.useState)(""),s=Object(j.a)(a,2),i=s[0],b=s[1],u=Object(n.useState)(!1),d=Object(j.a)(u,2),h=d[0],x=d[1],f=Object(w.a)(),p=m().register,I=Z();return Object(O.jsxs)(X,{children:[Object(O.jsx)(y.a,{textAlign:"center",my:12,children:"Register"}),Object(O.jsxs)(U,{maxW:"md",mx:"auto",mt:4,children:[Object(O.jsx)(S.a.form,{onSubmit:function(){var e=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),c&&i||f({description:"Credentails not valid",status:"error",duration:5e3,isClosable:!0}),x(!0),p(c,i).then((function(e){return console.log(e)})).catch((function(e){console.log(e.message),f({description:e.message,status:"error",duration:5e3,isClosable:!0})})).finally((function(){I.current&&x(!1)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:Object(O.jsxs)(C.b,{spacing:"6",children:[Object(O.jsxs)(k.a,{id:"email",children:[Object(O.jsx)(z.a,{children:"Email address"}),Object(O.jsx)(P.a,{value:c,onChange:function(e){return o(e.target.value)},name:"email",type:"email",autoComplete:"email",required:!0})]}),Object(O.jsxs)(k.a,{id:"password",children:[Object(O.jsx)(z.a,{children:"Password"}),Object(O.jsx)(P.a,{value:i,onChange:function(e){return b(e.target.value)},name:"password",type:"password",autoComplete:"password",required:!0})]}),Object(O.jsx)(W.a,{isLoading:h,type:"submit",colorScheme:"primary",size:"lg",fontSize:"md",children:"Sign up"})]})}),Object(O.jsx)(R.a,{my:4,children:Object(O.jsx)(W.a,{variant:"link",onClick:function(){return e.push("/login")},children:"Login"})}),Object(O.jsx)(q,{my:6,children:"OR"}),Object(O.jsx)(W.a,{variant:"outline",isFullWidth:!0,colorScheme:"red",leftIcon:Object(O.jsx)(N.a,{}),onClick:function(){return alert("sign in with google")},children:"Sign in with Google"})]})]})}function ce(){var e=m().resetPassword,t=Object(l.g)(),r=(Object(l.h)(),new URLSearchParams(Object(l.h)().search));console.log(r.get("mode")),console.log(r.get("oobCode")),console.log(r.get("continueUrl"));var c=Object(w.a)(),o=Object(n.useState)(),a=Object(j.a)(o,2),s=a[0],i=a[1];return Object(O.jsxs)(X,{children:[Object(O.jsx)(y.a,{textAlign:"center",my:12,children:"Reset password"}),Object(O.jsx)(U,{maxW:"md",mx:"auto",mt:4,children:Object(O.jsx)(S.a.form,{onSubmit:function(){var n=Object(v.a)(g.a.mark((function n(o){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o.preventDefault(),e(r.get("oobCode"),s).then((function(e){console.log(e),c({description:"Password ha been changed, you can login now.",status:"success",duration:9e3,isClosable:!0}),t.push("/login")})).catch((function(e){console.log(e.message),c({description:e.message,status:"error",duration:9e3,isClosable:!0})}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),children:Object(O.jsxs)(C.b,{spacing:"6",children:[Object(O.jsxs)(k.a,{id:"password",children:[Object(O.jsx)(z.a,{children:"New password"}),Object(O.jsx)(P.a,{value:s,onChange:function(e){return i(e.target.value)},type:"password",autoComplete:"password",required:!0})]}),Object(O.jsx)(W.a,{type:"submit",colorScheme:"primary",size:"lg",fontSize:"md",children:"Reset password"})]})})})]})}function oe(e){return Object(O.jsx)(i.a,{basename:"https://wowww.github.io/react-signup-deployment",children:Object(O.jsx)(i.a,{children:Object(O.jsxs)(l.d,{children:[Object(O.jsx)(l.b,{exact:!0,path:"/",component:Y}),Object(O.jsx)(ae,{exact:!0,path:"/login",component:$}),Object(O.jsx)(ae,{exact:!0,path:"/register",component:ne}),Object(O.jsx)(ae,{exact:!0,path:"/profile",component:re}),Object(O.jsx)(ae,{exact:!0,path:"/forgot-password",component:H}),Object(O.jsx)(ae,{exact:!0,path:"/reset-password",component:ce}),Object(O.jsx)(l.b,{exact:!0,path:"*",component:te})]})})})}function ae(e){var t=m().currentUser,r=e.path;console.log("path",r);var n,c,o=Object(l.h)();return console.log("location state",o.state),"/login"===r||"/register"===r||"/forgot-password"===r||"/reset-password"===r?t?Object(O.jsx)(l.a,{to:null!==(n=null===(c=o.state)||void 0===c?void 0:c.from)&&void 0!==n?n:"/profile"}):Object(O.jsx)(l.b,Object(s.a)({},e)):t?Object(O.jsx)(l.b,Object(s.a)({},e)):Object(O.jsx)(l.a,{to:{pathname:"/login",state:{from:r}}})}var se=function(){return Object(O.jsx)(f,{children:Object(O.jsx)(oe,{})})},ie=r(574),le=r(88),je=r(577),be=r(575),ue=Object(ie.a)({config:{initialColorMode:"light",useSystemColorMode:!1},colors:{primary:le.theme.colors.purple}});a.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsxs)(je.a,{theme:ue,children:[Object(O.jsx)(be.a,{initialColorMode:ue.config.initialColorMode}),Object(O.jsx)(se,{})]})}),document.getElementById("root"))}},[[545,1,2]]]);
//# sourceMappingURL=main.aef54447.chunk.js.map