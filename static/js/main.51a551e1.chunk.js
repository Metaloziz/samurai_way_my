(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{13:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),function(t){t[t.success=0]="success",t[t.error=1]="error"}(r||(r={}))},135:function(t,e,n){},221:function(t,e,n){},223:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(42),c=n.n(a),u=function(t){t&&t instanceof Function&&n.e(12).then(n.bind(null,306)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,u=e.getTTFB;n(t),r(t),a(t),c(t),u(t)}))},s=(n(135),n(54)),i=n(69),o=[{path:"/profile",title:"Profile"},{path:"/messages",title:"Messages"},{path:"/users",title:"Users"},{path:"/news",title:"News"},{path:"/music",title:"Music"},{path:"/settings",title:"Settings"},{path:"/login",title:"Login"}],l=n(70),f=n(23),d=n(22),p=n(80),b=n(77),j=n(6),h=n.n(j),O=n(8),g=n(3),m=n(7),v={initialized:!1},x=Object(d.c)({sidebarPage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;return t},profilePage:s.c,dialogsPage:i.b,users:l.d,auth:f.a,form:b.a,app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m.d:return Object(g.a)(Object(g.a)({},t),{},{initialized:e.initialized});default:return t}}}),w=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d,_=Object(d.e)(x,Object(d.d)(Object(d.a)(p.a),w())),k=n(18),y=n(17),E=n(30),C=n(31),S=n(33),A=n(32),P=(n(221),n(50)),D=n.n(P),T=n(2),U=Object(r.memo)((function(t){var e=t.data,n=t.setLogoutThunkCreator;return Object(T.jsxs)("div",{className:D.a.header,children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("img",{alt:"logo",src:"https://w7.pngwing.com/pngs/200/945/png-transparent-vitruvian-man-vinci-italian-renaissance-drawing-others-white-hand-monochrome.png"}),Object(T.jsx)("div",{children:"LOGO"})]}),Object(T.jsx)("div",{className:D.a.loginBlock,children:0===e.resultCode?Object(T.jsxs)("div",{children:[e.data.login,Object(T.jsx)("button",{onClick:n,children:"logout"})]}):Object(T.jsx)(k.b,{to:"/login",children:"Login"})})]})})),I=function(t){Object(S.a)(n,t);var e=Object(A.a)(n);function n(){return Object(E.a)(this,n),e.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){var t=this.props,e=t.data,n=t.setLogoutThunkCreator;return Object(T.jsx)(U,{data:e,setLogoutThunkCreator:n})}}]),n}(r.Component),F={setLogoutThunkCreator:f.c},L=Object(y.b)((function(t){return{data:t.auth}}),F)(I),N=n(4),G=n(43),z=n.n(G),R=Object(r.memo)((function(t){return Object(T.jsx)("div",{children:Object(T.jsx)("nav",{className:z.a.navigation,children:t.sidebarPage.map((function(t,e){return Object(T.jsx)("div",{className:z.a.item,children:Object(T.jsxs)(k.b,{to:t.path,className:function(t){return t.isActive?z.a.active:""},children:[" ",t.title," "]})},e)}))})})})),J=Object(y.b)((function(t){return{sidebarPage:t.sidebarPage}}),(function(t){return{test:function(){return t({type:"SIDE_BAR_TEST"})}}}))(R),M=n(59),Y=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,312))})),B=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,311))})),H=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,313))})),q=Object(r.lazy)((function(){return n.e(9).then(n.bind(null,307))})),K=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,314))})),X=Object(r.lazy)((function(){return n.e(8).then(n.bind(null,308))})),Z=Object(r.lazy)((function(){return n.e(11).then(n.bind(null,309))})),Q=Object(r.lazy)((function(){return n.e(10).then(n.bind(null,310))})),V=function(t){Object(S.a)(n,t);var e=Object(A.a)(n);function n(){var t;Object(E.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).componentDidMount=function(){t.props.initializeThunkCreator()},t}return Object(C.a)(n,[{key:"render",value:function(){return this.props.initialized?Object(T.jsxs)("div",{className:"app-wrapper",children:[Object(T.jsx)(L,{}),Object(T.jsx)(J,{}),Object(T.jsx)("div",{children:Object(T.jsx)(r.Suspense,{fallback:Object(T.jsx)("div",{children:"Loading..."}),children:Object(T.jsxs)(N.d,{children:[Object(T.jsx)(N.b,{path:"/",element:Object(T.jsx)(N.a,{to:"/profile"})}),Object(T.jsx)(N.b,{path:"/samurai_way_my/",element:Object(T.jsx)(N.a,{to:"/profile"})}),Object(T.jsx)(N.b,{path:"/profile",element:Object(T.jsx)(B,{}),children:Object(T.jsx)(N.b,{path:":userId",element:Object(T.jsx)(B,{})})}),Object(T.jsx)(N.b,{path:"/messages/*",element:Object(T.jsx)(Y,{})}),Object(T.jsx)(N.b,{path:"/users/",element:Object(T.jsx)(H,{})}),Object(T.jsx)(N.b,{path:"/news",element:Object(T.jsx)(q,{})}),Object(T.jsx)(N.b,{path:"/music",element:Object(T.jsx)(X,{})}),Object(T.jsx)(N.b,{path:"/settings",element:Object(T.jsx)(Q,{})}),Object(T.jsx)(N.b,{path:"/login",element:Object(T.jsx)(K,{})}),Object(T.jsx)(N.b,{path:"/*",element:Object(T.jsx)(Z,{})})]})})})]}):Object(T.jsx)(M.a,{})}}]),n}(r.Component),W=function(){return Object(T.jsx)(k.a,{basename:"/samurai_way_my",children:Object(T.jsx)(y.a,{store:_,children:Object(T.jsx)(tt,{})})})},$={initializeThunkCreator:function(){return function(){var t=Object(O.a)(h.a.mark((function t(e){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e(Object(f.d)()),Promise.all([n]).then((function(){var t;e((t=!0,{type:m.d,initialized:t}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},tt=Object(y.b)((function(t){return{initialized:t.app.initialized}}),$)(V),et=function(){c.a.render(Object(T.jsx)(W,{}),document.getElementById("root"))};et(),_.subscribe(et),u()},23:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"d",(function(){return b})),n.d(e,"b",(function(){return j})),n.d(e,"c",(function(){return h}));var r=n(6),a=n.n(r),c=n(8),u=n(3),s=n(9),i=n(26),o=n(13),l=n(7),f=function(t,e){return{type:l.f,data:t,isAuth:e}},d={data:{id:1,login:"",email:""},messages:[""],fieldsErrors:[""],resultCode:1,isAuth:!1},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l.f:return Object(u.a)(Object(u.a)(Object(u.a)({},t),e.data),{},{isAuth:e.isAuth});default:return t}},b=function(){return function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.me();case 2:(n=t.sent).resultCode===o.a.success?e(f(n,!0)):console.warn(" You are not authorised. ResultCode: "+n.resultCode);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.login(t);case 2:if((r=e.sent).data.resultCode!==o.a.success){e.next=8;break}return e.next=6,n(b());case 6:e.next=11;break;case 8:c=Object(i.a)("LOGIN",{_error:r.data.messages[0]?r.data.messages[0]:"something is wrong"}),n(c),console.warn(r.data.messages[0]);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(){return function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.logout();case 2:if(t.sent.data.resultCode!==o.a.success){t.next=8;break}return t.next=6,s.b.me();case 6:(n=t.sent).resultCode!==o.a.success?e(f(n,!1)):console.warn(" You are not authorised. ResultCode: "+n.resultCode);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},43:function(t,e,n){t.exports={navigation:"Navigation_navigation__1JoqJ",active:"Navigation_active__3E8Bg",item:"Navigation_item__1f3e1"}},50:function(t,e,n){t.exports={header:"Header_header__1fh2h",loginBlock:"Header_loginBlock__3MQmn"}},54:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return b})),n.d(e,"c",(function(){return m})),n.d(e,"g",(function(){return v})),n.d(e,"f",(function(){return x})),n.d(e,"h",(function(){return w})),n.d(e,"d",(function(){return _})),n.d(e,"e",(function(){return k}));var r=n(6),a=n.n(r),c=n(8),u=n(82),s=n(3),i=n(51),o=n(9),l=n(13),f=n(7),d=n(26),p=function(t){return{type:f.b,value:t,id:Object(i.a)()}},b=function(t){return{type:f.a,postID:t}},j=function(t){return{type:f.g,profile:t}},h=function(t){return{type:f.i,status:t}},O=function(t){return{type:f.e,file:t}},g={postData:[{id:Object(i.a)(),message:"Kiss me hard before you go Summertime sadness",like:2,comment:4},{id:Object(i.a)(),message:"I just wanted you to know That baby you're the best",like:7,comment:8}],newPostText:"stock",profile:{userId:0,lookingForAJob:!1,lookingForAJobDescription:"stock",fullName:"test",contacts:{vk:"stock",github:"stock",facebook:"stock",instagram:"stock",mainLink:"stock",twitter:"stock",website:"stock",youtube:"stock"},aboutMe:"stock",photos:{small:"stock",large:"stock"}},status:"default status"},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case f.b:var n={id:e.id,message:e.value,like:0,comment:0};return Object(s.a)(Object(s.a)({},t),{},{postData:[n].concat(Object(u.a)(t.postData)),newPostText:""});case f.a:return Object(s.a)(Object(s.a)({},t),{},{postData:t.postData.map((function(t){return t.id===e.postID?Object(s.a)(Object(s.a)({},t),{},{like:t.like+1}):t}))});case f.g:return Object(s.a)(Object(s.a)({},t),{},{profile:e.profile});case f.i:return Object(s.a)(Object(s.a)({},t),{},{status:e.status});case f.e:return Object(s.a)(Object(s.a)({},t),{},{profile:Object(s.a)(Object(s.a)({},t.profile),{},{photos:e.file.photos})});case f.h:var r=e.data,a=r.lookingForAJobDescription,c=(r.lookingForAJob,r.aboutMe),i=r.fullName,o=r.contacts;return Object(s.a)(Object(s.a)({},t),{},{profile:{aboutMe:c,contacts:Object(s.a)({},o),lookingForAJob:!1,lookingForAJobDescription:a,fullName:i,userId:0,photos:{small:"stock",large:"stock"}}});default:return t}},v=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.getUserData(t);case 2:r=e.sent,n(j(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.getUserStatus(t);case 2:r=e.sent,n(h(r||"status from API is null"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.updateUserStatus(t);case 2:r=e.sent,console.log(r),r.resultCode===l.a.success&&n(h(t));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.putPhoto(t);case 2:(r=e.sent).resultCode===l.a.success&&n(O(r.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(t,e,n){return function(){var r=Object(c.a)(a.a.mark((function r(c){var u,s,i;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.d.updateUserData(t);case 2:if((u=r.sent).resultCode!==l.a.success){r.next=11;break}return r.next=6,o.d.getUserData(e);case 6:s=r.sent,c(j(s)),n(!1),r.next=13;break;case 11:i=Object(d.a)("PROFILE",{_error:u.messages[0]?u.messages[0]:"something is wrong"}),c(i);case 13:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}},59:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(76),a=n.n(r),c=n.p+"static/media/blak_water.3ed3be3a.gif",u=n(0),s=n(2),i=Object(u.memo)((function(){return Object(s.jsx)("img",{className:a.a.loader,alt:"loader",src:c})}))},69:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return s}));var r=n(3),a=n(7),c=function(t){return{type:a.c,value:t}},u={dialogs:[{id:1,name:"Alexa",ava:"https://wl-adme.cf.tsp.li/resize/728x/jpg/828/489/b2756c5cdd8b6216f063d69448.jpg"},{id:2,name:"Olga",ava:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRyOavUGIwOOX3ETRRyYRX5i6cckfejkOGGZuuzC49v3Kn9fts9Af4l3JsKYc1SxZb3VU&usqp=CAU"},{id:3,name:"Anna",ava:"https://www.meme-arsenal.com/memes/45e5d421b1445a06da4d6850fcafdb1a.jpg"},{id:4,name:"Yra",ava:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg/250px-Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg"},{id:5,name:"Mary",ava:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxVCtR7JN6dLYj0xMPGyB0n-cSqxx7DQpLrf34ZuJHv4UhUeJlf5TCgyBg4IwWroZIFE&usqp=CAU"}],messages:[{id:1,text:"Hi"},{id:2,text:"How are you"},{id:3,text:"Good"},{id:4,text:"Yo"},{id:5,text:"Yo"}]},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a.c:var n={id:2,text:e.value},c=Object(r.a)(Object(r.a)({},t),{},{messages:t.messages.map((function(t){return Object(r.a)({},t)}))});return c.messages.push(n),c;default:return t}}},7:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"e",(function(){return a})),n.d(e,"a",(function(){return c})),n.d(e,"g",(function(){return u})),n.d(e,"i",(function(){return s})),n.d(e,"h",(function(){return i})),n.d(e,"f",(function(){return o})),n.d(e,"d",(function(){return l})),n.d(e,"c",(function(){return f}));var r="ADD-POST",a="SET_PHOTO",c="ADD_LIKE",u="SET_USER_PROFILE",s="SET_USER_STATUS",i="SET_USER_PROFILE_DATA",o="SET_USER_DATA",l="APP_REDUCER/SET_INITIALIZED",f="ADD_TEXT_MESSAGE"},70:function(t,e,n){"use strict";n.d(e,"d",(function(){return m})),n.d(e,"b",(function(){return v})),n.d(e,"c",(function(){return w})),n.d(e,"a",(function(){return _}));var r=n(6),a=n.n(r),c=n(8),u=n(3),s=n(9),i=n(13),o="FOLLOW",l="SET_USERS",f="CHANGE_PAGE",d="TOGGLE_IS_FETCHING_PAGE",p="TOGGLE_IS_FETCHING_USER",b=function(t){return{type:o,userID:t}},j=function(t){return{type:f,pageID:t}},h=function(t){return{type:d,isFetchingPage:t}},O=function(t,e){return{type:p,isFetchingUser:t,userID:e}},g={items:[{id:0,name:"null",status:"null",photos:{small:"null",large:"null"},followed:!1,isFetchingUser:!1}],pageSize:4,totalCount:36,error:"Error",currentPage:1,isFetchingPage:!0},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:return Object(u.a)(Object(u.a)({},t),{},{items:t.items.map((function(t){return t.id===e.userID?Object(u.a)(Object(u.a)({},t),{},{followed:!t.followed}):t}))});case l:return Object(u.a)(Object(u.a)({},t),{},{items:e.users,totalCount:e.totalCount});case f:return Object(u.a)(Object(u.a)({},t),{},{currentPage:e.pageID});case d:return Object(u.a)(Object(u.a)({},t),{},{isFetchingPage:e.isFetchingPage});case p:return Object(u.a)(Object(u.a)({},t),{},{items:t.items.map((function(t){return t.id===e.userID?Object(u.a)(Object(u.a)({},t),{},{isFetchingUser:e.isFetchingUser}):t}))});default:return t}},v=function(t,e){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(h(!0)),r(j(t)),n.next=4,s.a.setUserOnPageAPI(t,e);case 4:c=n.sent,r((a=c.items,u=c.totalCount,{type:l,users:a,totalCount:u})),r(h(!1));case 7:case"end":return n.stop()}var a,u}),n)})));return function(t){return n.apply(this,arguments)}}()},x=function(){var t=Object(c.a)(a.a.mark((function t(e,n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(O(!0,e)),t.next=3,r(e);case 3:t.sent.resultCode===i.a.success&&(n(b(e)),n(O(!1,e)));case 5:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),w=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t,n,s.c.setUnFollow);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t,n,s.c.setFollow);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},76:function(t,e,n){t.exports={main_div:"Users_main_div__2ONGl",buttons_pages:"Users_buttons_pages__2JlFY",current:"Users_current__1rDG_",loader:"Users_loader__3wz82"}},9:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return o}));var r=n(3),a=n(78),c=n.n(a).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"6d28cae1-0bac-4f22-abce-7f5967410738"}}),u={me:function(){return c.get("auth/me").then((function(t){return t.data}))},login:function(t){return c.post("/auth/login",t).then((function(t){return t})).catch((function(t){return t}))},logout:function(){return c.delete("/auth/login")}},s={putPhoto:function(t){var e=new FormData;return e.append("image",t),c.put("/profile/photo",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){return t.data}))},getUserData:function(t){return c.get("profile/"+t).then((function(t){return t.data}))},getUserStatus:function(t){return c.get("/profile/status/"+t).then((function(t){return t.data}))},updateUserStatus:function(t){return c.put("/profile/status",{status:t}).then((function(t){return t.data}))},updateUserData:function(t){return c.put("/profile",Object(r.a)({},t)).then((function(t){return t.data}))}},i={setUserOnPageAPI:function(t,e){return c.get("users?page=".concat(t,"&count=").concat(e)).then((function(t){return t.data}))}},o={setUnFollow:function(t){return c.delete("follow/"+t).then((function(t){return t.data}))},setFollow:function(t){return c.post("follow/"+t).then((function(t){return t.data}))}}}},[[223,2,3]]]);
//# sourceMappingURL=main.51a551e1.chunk.js.map