(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{6587:function(n,e,t){"use strict";var u=t("ba1c"),o=t.n(u);o.a},8609:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){var n=getApp().globalData.baseUrl;return{baseUrl:n,openId:"",userInfo:{},userActionCount:{}}},onLoad:function(){},onShareAppMessage:function(n){return{title:"YQ图库-你值得拥有",path:"/pages/images/images"}},onShareTimeline:function(n){return{title:"YQ图库-你值得拥有",path:"/pages/images/images"}},onShow:function(){var e=this;this.openId=n.getStorageSync("openId"),n.request({url:this.baseUrl+"/user/userPageData?openId="+this.openId,success:function(n){console.log(n);var t=n.data.result;e.userInfo=t.user,e.userActionCount=t.userActionCount}})},methods:{getActionList:function(n,e){console.log("openId=>"+n+"\naction=>"+e)}}};e.default=t}).call(this,t("543d")["default"])},"8d29":function(n,e,t){"use strict";(function(n){t("f8eb");u(t("66fd"));var e=u(t("bcd0"));function u(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t("543d")["createPage"])},ba1c:function(n,e,t){},bcd0:function(n,e,t){"use strict";t.r(e);var u=t("cb3f"),o=t("f5f3");for(var a in o)"default"!==a&&function(n){t.d(e,n,(function(){return o[n]}))}(a);t("6587");var r,c=t("f0c5"),i=Object(c["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);e["default"]=i.exports},cb3f:function(n,e,t){"use strict";var u;t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return u}));var o=function(){var n=this,e=n.$createElement;n._self._c},a=[]},f5f3:function(n,e,t){"use strict";t.r(e);var u=t("8609"),o=t.n(u);for(var a in u)"default"!==a&&function(n){t.d(e,n,(function(){return u[n]}))}(a);e["default"]=o.a}},[["8d29","common/runtime","common/vendor"]]]);