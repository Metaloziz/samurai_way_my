(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{12:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),function(t){t[t.success=0]="success",t[t.error=1]="error",t[t.captcha=10]="captcha"}(r||(r={}))},135:function(t,e,n){},221:function(t,e,n){},223:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(42),c=n.n(a),u=function(t){t&&t instanceof Function&&n.e(12).then(n.bind(null,307)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,u=e.getTTFB;n(t),r(t),a(t),c(t),u(t)}))},s=(n(135),n(54)),i=n(69),o=[{path:"/profile",title:"Profile"},{path:"/messages",title:"Messages"},{path:"/users",title:"Users"},{path:"/news",title:"News"},{path:"/music",title:"Music"},{path:"/settings",title:"Settings"},{path:"/login",title:"Login"}],l=n(70),d=n(23),f=n(22),p=n(80),b=n(77),j=n(7),h=n.n(j),O=n(8),g=n(3),m=n(6),v={initialized:!1},x=Object(f.c)({sidebarPage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;return t},profilePage:s.c,dialogsPage:i.b,users:l.d,auth:d.a,form:b.a,app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m.g:return Object(g.a)(Object(g.a)({},t),{},{initialized:e.initialized});default:return t}}}),w=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||f.d,_=Object(f.e)(x,Object(f.d)(Object(f.a)(p.a),w())),k=n(18),y=n(17),E=n(30),C=n(31),U=n(33),A=n(32),P=(n(221),n(50)),S=n.n(P),T=n(2),D=Object(r.memo)((function(t){var e=t.data,n=t.setLogoutThunkCreator;return Object(T.jsxs)("div",{className:S.a.header,children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("img",{alt:"logo",src:"https://w7.pngwing.com/pngs/200/945/png-transparent-vitruvian-man-vinci-italian-renaissance-drawing-others-white-hand-monochrome.png"}),Object(T.jsx)("div",{children:"LOGO"})]}),Object(T.jsx)("div",{className:S.a.loginBlock,children:0===e.resultCode?Object(T.jsxs)("div",{children:[e.data.login,Object(T.jsx)("button",{onClick:n,children:"logout"})]}):Object(T.jsx)(k.b,{to:"/login",children:"Login"})})]})})),I=function(t){Object(U.a)(n,t);var e=Object(A.a)(n);function n(){return Object(E.a)(this,n),e.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){var t=this.props,e=t.data,n=t.setLogoutThunkCreator;return Object(T.jsx)(D,{data:e,setLogoutThunkCreator:n})}}]),n}(r.Component),L={setLogoutThunkCreator:d.c},F=Object(y.b)((function(t){return{data:t.auth}}),L)(I),R=n(4),G=n(43),N=n.n(G),z=Object(r.memo)((function(t){return Object(T.jsx)("div",{children:Object(T.jsx)("nav",{className:N.a.navigation,children:t.sidebarPage.map((function(t,e){return Object(T.jsx)("div",{className:N.a.item,children:Object(T.jsxs)(k.b,{to:t.path,className:function(t){return t.isActive?N.a.active:""},children:[" ",t.title," "]})},e)}))})})})),J=Object(y.b)((function(t){return{sidebarPage:t.sidebarPage}}),(function(t){return{test:function(){return t({type:"SIDE_BAR_TEST"})}}}))(z),M=n(59),H=Object(r.lazy)((function(){return n.e(9).then(n.bind(null,308))})),Y=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,315))})),B=Object(r.lazy)((function(){return n.e(8).then(n.bind(null,309))})),q=Object(r.lazy)((function(){return n.e(11).then(n.bind(null,310))})),K=Object(r.lazy)((function(){return n.e(10).then(n.bind(null,311))})),X=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,314))})),Z=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,312))})),Q=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,313))})),V=function(t){Object(U.a)(n,t);var e=Object(A.a)(n);function n(){var t;Object(E.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).catchAllUnhandledErrors=function(){console.warn("\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435: \u041d\u0435\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 Promise. \u041f\u043e\u0437\u043e\u0440 \u0432\u0430\u043c! ")},t.componentDidMount=function(){t.props.initializeTC(),window.addEventListener("unhandledrejection",t.catchAllUnhandledErrors)},t}return Object(C.a)(n,[{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(T.jsxs)("div",{className:"app-wrapper",children:[Object(T.jsx)(F,{}),Object(T.jsx)(J,{}),Object(T.jsx)("div",{children:Object(T.jsx)(r.Suspense,{fallback:Object(T.jsx)("div",{children:"Loading..."}),children:Object(T.jsxs)(R.d,{children:[Object(T.jsx)(R.b,{path:"/",element:Object(T.jsx)(R.a,{to:"/profile"})}),Object(T.jsx)(R.b,{path:"/samurai_way_my/",element:Object(T.jsx)(R.a,{to:"/profile"})}),Object(T.jsx)(R.b,{path:"/profile",element:Object(T.jsx)(Z,{}),children:Object(T.jsx)(R.b,{path:":userId",element:Object(T.jsx)(Z,{})})}),Object(T.jsx)(R.b,{path:"/messages/*",element:Object(T.jsx)(Q,{})}),Object(T.jsx)(R.b,{path:"/users/",element:Object(T.jsx)(X,{})}),Object(T.jsx)(R.b,{path:"/news",element:Object(T.jsx)(H,{})}),Object(T.jsx)(R.b,{path:"/music",element:Object(T.jsx)(B,{})}),Object(T.jsx)(R.b,{path:"/settings",element:Object(T.jsx)(K,{})}),Object(T.jsx)(R.b,{path:"/login",element:Object(T.jsx)(Y,{})}),Object(T.jsx)(R.b,{path:"/*",element:Object(T.jsx)(q,{})})]})})})]}):Object(T.jsx)(M.a,{})}}]),n}(r.Component),W=function(){return Object(T.jsx)(k.a,{basename:"/samurai_way_my",children:Object(T.jsxs)(y.a,{store:_,children:["   ",Object(T.jsx)(tt,{})]})})},$={initializeTC:function(){return function(){var t=Object(O.a)(h.a.mark((function t(e){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e(Object(d.d)()),Promise.all([n]).then((function(){var t;e((t=!0,{type:m.g,initialized:t}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},tt=Object(y.b)((function(t){return{initialized:t.app.initialized}}),$)(V),et=function(){c.a.render(Object(T.jsx)(W,{}),document.getElementById("root"))};et(),_.subscribe(et),u()},23:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"d",(function(){return b})),n.d(e,"b",(function(){return j})),n.d(e,"c",(function(){return h}));var r=n(7),a=n.n(r),c=n(8),u=n(3),s=n(9),i=n(26),o=n(12),l=n(6),d=function(t,e){return{type:l.j,data:t,isAuth:e}},f={data:{id:1,login:"",email:""},messages:[""],fieldsErrors:[""],resultCode:1,isAuth:!1,captchaURL:""},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l.j:return Object(u.a)(Object(u.a)(Object(u.a)({},t),e.data),{},{isAuth:e.isAuth,captchaURL:""});case l.f:return Object(u.a)(Object(u.a)({},t),{},{captchaURL:e.url});default:return t}},b=function(){return function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.me();case 2:(n=t.sent).resultCode===o.a.success?e(d(n,!0)):console.warn(" You are not authorised. ResultCode: "+n.resultCode);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.login(t);case 2:if((r=e.sent).data.resultCode!==o.a.success){e.next=8;break}return e.next=6,n(b());case 6:e.next=14;break;case 8:if(r.data.resultCode!==o.a.captcha){e.next=11;break}return e.next=11,n(O());case 11:c=Object(i.a)("LOGIN",{_error:r.data.messages[0]?r.data.messages[0]:"something is wrong"}),n(c),console.warn(r.data.messages[0]);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(){return function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.logout();case 2:if(t.sent.data.resultCode!==o.a.success){t.next=8;break}return t.next=6,s.b.me();case 6:(n=t.sent).resultCode!==o.a.success?e(d(n,!1)):console.warn(" You are not authorised. ResultCode: "+n.resultCode);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(){return function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getCaptchaURL();case 2:n=t.sent,e((r=n.data.url,{type:l.f,url:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()}},43:function(t,e,n){t.exports={navigation:"Navigation_navigation__1JoqJ",active:"Navigation_active__3E8Bg",item:"Navigation_item__1f3e1"}},50:function(t,e,n){t.exports={header:"Header_header__1fh2h",loginBlock:"Header_loginBlock__3MQmn"}},54:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return b})),n.d(e,"c",(function(){return m})),n.d(e,"g",(function(){return v})),n.d(e,"f",(function(){return x})),n.d(e,"h",(function(){return w})),n.d(e,"d",(function(){return _})),n.d(e,"e",(function(){return k}));var r=n(7),a=n.n(r),c=n(8),u=n(82),s=n(3),i=n(51),o=n(9),l=n(12),d=n(6),f=n(26),p=function(t){return{type:d.b,value:t,id:Object(i.a)()}},b=function(t){return{type:d.a,postID:t}},j=function(t){return{type:d.k,profile:t}},h=function(t){return{type:d.m,status:t}},O=function(t){return{type:d.h,file:t}},g={postData:[{id:Object(i.a)(),message:"Kiss me hard before you go Summertime sadness",like:2,comment:4},{id:Object(i.a)(),message:"I just wanted you to know That baby you're the best",like:7,comment:8}],newPostText:"stock",profile:{userId:0,lookingForAJob:!1,lookingForAJobDescription:"stock",fullName:"test",contacts:{vk:"stock",github:"stock",facebook:"stock",instagram:"stock",mainLink:"stock",twitter:"stock",website:"stock",youtube:"stock"},aboutMe:"stock",photos:{small:"stock",large:"stock"}},status:"default status"},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d.b:var n={id:e.id,message:e.value,like:0,comment:0};return Object(s.a)(Object(s.a)({},t),{},{postData:[n].concat(Object(u.a)(t.postData)),newPostText:""});case d.a:return Object(s.a)(Object(s.a)({},t),{},{postData:t.postData.map((function(t){return t.id===e.postID?Object(s.a)(Object(s.a)({},t),{},{like:t.like+1}):t}))});case d.k:return Object(s.a)(Object(s.a)({},t),{},{profile:e.profile});case d.m:return Object(s.a)(Object(s.a)({},t),{},{status:e.status});case d.h:return Object(s.a)(Object(s.a)({},t),{},{profile:Object(s.a)(Object(s.a)({},t.profile),{},{photos:e.file.photos})});case d.l:var r=e.data,a=r.lookingForAJobDescription,c=(r.lookingForAJob,r.aboutMe),i=r.fullName,o=r.contacts;return Object(s.a)(Object(s.a)({},t),{},{profile:{aboutMe:c,contacts:Object(s.a)({},o),lookingForAJob:!1,lookingForAJobDescription:a,fullName:i,userId:0,photos:{small:"stock",large:"stock"}}});default:return t}},v=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.getUserData(t);case 2:r=e.sent,n(j(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.getUserStatus(t);case 2:r=e.sent,n(h(r||"status from API is null"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.updateUserStatus({status:t});case 2:r=e.sent,console.log(r),r.resultCode===l.a.success?n(h(t)):console.warn(r.messages[0]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.putPhoto(t);case 2:(r=e.sent).resultCode===l.a.success&&n(O(r.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(t,e,n){return function(){var r=Object(c.a)(a.a.mark((function r(c){var u,s,i;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.d.updateUserData(t);case 2:if((u=r.sent).resultCode!==l.a.success){r.next=11;break}return r.next=6,o.d.getUserData(e);case 6:s=r.sent,c(j(s)),n(!1),r.next=13;break;case 11:i=Object(f.a)("PROFILE",{_error:u.messages[0]?u.messages[0]:"something is wrong"}),c(i);case 13:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}},59:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(76),a=n.n(r),c=n.p+"static/media/blak_water.3ed3be3a.gif",u=n(0),s=n(2),i=Object(u.memo)((function(){return Object(s.jsx)("img",{className:a.a.loader,alt:"loader",src:c})}))},6:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"h",(function(){return a})),n.d(e,"a",(function(){return c})),n.d(e,"k",(function(){return u})),n.d(e,"m",(function(){return s})),n.d(e,"l",(function(){return i})),n.d(e,"j",(function(){return o})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"e",(function(){return p})),n.d(e,"i",(function(){return b})),n.d(e,"d",(function(){return j})),n.d(e,"n",(function(){return h})),n.d(e,"o",(function(){return O}));var r="ADD-POST",a="SET_PHOTO",c="ADD_LIKE",u="SET_USER_PROFILE",s="SET_USER_STATUS",i="SET_USER_PROFILE_DATA",o="SET_USER_DATA",l="GET_CAPTCHA",d="APP_REDUCER/SET_INITIALIZED",f="ADD_TEXT_MESSAGE",p="FOLLOW",b="SET_USERS",j="CHANGE_PAGE",h="TOGGLE_IS_FETCHING_PAGE",O="TOGGLE_IS_FETCHING_USER"},69:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return s}));var r=n(3),a=n(6),c=function(t){return{type:a.c,value:t}},u={dialogs:[{id:1,name:"Alexa",ava:"https://wl-adme.cf.tsp.li/resize/728x/jpg/828/489/b2756c5cdd8b6216f063d69448.jpg"},{id:2,name:"Olga",ava:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRyOavUGIwOOX3ETRRyYRX5i6cckfejkOGGZuuzC49v3Kn9fts9Af4l3JsKYc1SxZb3VU&usqp=CAU"},{id:3,name:"Anna",ava:"https://www.meme-arsenal.com/memes/45e5d421b1445a06da4d6850fcafdb1a.jpg"},{id:4,name:"Yra",ava:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg/250px-Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg"},{id:5,name:"Mary",ava:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxVCtR7JN6dLYj0xMPGyB0n-cSqxx7DQpLrf34ZuJHv4UhUeJlf5TCgyBg4IwWroZIFE&usqp=CAU"}],messages:[{id:1,text:"Hi"},{id:2,text:"How are you"},{id:3,text:"Good"},{id:4,text:"Yo"},{id:5,text:"Yo"}]},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a.c:var n={id:2,text:e.value},c=Object(r.a)(Object(r.a)({},t),{},{messages:t.messages.map((function(t){return Object(r.a)({},t)}))});return c.messages.push(n),c;default:return t}}},70:function(t,e,n){"use strict";n.d(e,"d",(function(){return j})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return g})),n.d(e,"a",(function(){return m}));var r=n(7),a=n.n(r),c=n(8),u=n(3),s=n(9),i=n(12),o=n(6),l=function(t){return{type:o.e,userID:t}},d=function(t){return{type:o.d,pageID:t}},f=function(t){return{type:o.n,isFetchingPage:t}},p=function(t,e){return{type:o.o,isFetchingUser:t,userID:e}},b={items:[{id:0,name:"null",status:"null",photos:{small:"null",large:"null"},followed:!1,isFetchingUser:!1}],pageSize:4,totalCount:36,error:"Error",currentPage:1,isFetchingPage:!0},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o.e:return Object(u.a)(Object(u.a)({},t),{},{items:t.items.map((function(t){return t.id===e.userID?Object(u.a)(Object(u.a)({},t),{},{followed:!t.followed}):t}))});case o.i:return Object(u.a)(Object(u.a)({},t),{},{items:e.users,totalCount:e.totalCount});case o.d:return Object(u.a)(Object(u.a)({},t),{},{currentPage:e.pageID});case o.n:return Object(u.a)(Object(u.a)({},t),{},{isFetchingPage:e.isFetchingPage});case o.o:return Object(u.a)(Object(u.a)({},t),{},{items:t.items.map((function(t){return t.id===e.userID?Object(u.a)(Object(u.a)({},t),{},{isFetchingUser:e.isFetchingUser}):t}))});default:return t}},h=function(t,e){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(f(!0)),r(d(t)),n.next=4,s.a.setUserOnPageAPI(t,e);case 4:c=n.sent,r((a=c.items,u=c.totalCount,{type:o.i,users:a,totalCount:u})),r(f(!1));case 7:case"end":return n.stop()}var a,u}),n)})));return function(t){return n.apply(this,arguments)}}()},O=function(){var t=Object(c.a)(a.a.mark((function t(e,n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(p(!0,e)),t.next=3,r(e);case 3:t.sent.resultCode===i.a.success&&(n(l(e)),n(p(!1,e)));case 5:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),g=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t,n,s.c.setUnFollow);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t,n,s.c.setFollow);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},76:function(t,e,n){t.exports={main_div:"Users_main_div__2ONGl",main_div2:"Users_main_div2__18coC",buttons_pages:"Users_buttons_pages__2JlFY",current:"Users_current__1rDG_",loader:"Users_loader__3wz82"}},9:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return o}));var r=n(3),a=n(78),c=n.n(a).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"6d28cae1-0bac-4f22-abce-7f5967410738"}}),u={me:function(){return c.get("auth/me").then((function(t){return t.data}))},login:function(t){return c.post("/auth/login",t).then((function(t){return t})).catch((function(t){return t}))},logout:function(){return c.delete("/auth/login")},getCaptchaURL:function(){return c.get("/security/get-captcha-url")}},s={putPhoto:function(t){var e=new FormData;return e.append("image",t),c.put("/profile/photo",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){return t.data}))},getUserData:function(t){return c.get("profile/"+t).then((function(t){return t.data}))},getUserStatus:function(t){return c.get("/profile/status/"+t).then((function(t){return t.data})).catch((function(t){return t}))},updateUserStatus:function(t){return c.put("/profile/status",t).then((function(t){return t.data}))},updateUserData:function(t){return c.put("/profile",Object(r.a)({},t)).then((function(t){return t.data}))}},i={setUserOnPageAPI:function(t,e){return c.get("users?page=".concat(t,"&count=").concat(e)).then((function(t){return t.data}))}},o={setUnFollow:function(t){return c.delete("follow/"+t).then((function(t){return t.data}))},setFollow:function(t){return c.post("follow/"+t).then((function(t){return t.data}))}}}},[[223,2,3]]]);
//# sourceMappingURL=main.5e023be7.chunk.js.map