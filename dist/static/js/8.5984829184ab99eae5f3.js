webpackJsonp([8],{G4Ks:function(e,t,s){e.exports=s.p+"static/img/logo3.6e02f10.jpg"},xVOn:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("lC5x"),i=s.n(r),a=s("J0Oq"),n=s.n(a),o=s("gyMJ"),l={data:function(){return{password1:"",userinfo:{nickName:"",password:""}}},methods:{submit:function(){var e=this;return n()(i.a.mark(function t(){var s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.password1===e.userinfo.password){t.next=4;break}e.$message.error("两次输入的密码不一致"),t.next=14;break;case 4:return t.next=6,Object(o.s)(e.userinfo);case 6:if(1!==(s=t.sent).status){t.next=12;break}e.$message.success("注册成功，现在去登录"),e.$router.push("/login"),t.next=14;break;case 12:return e.$message.error(s.message),t.abrupt("return");case 14:case"end":return t.stop()}},t,e)}))()}}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"register"},[s("div",{staticClass:"register-child"},[e._m(0),e._v(" "),s("div",{staticClass:"register-section"},[s("el-form",{staticStyle:{"padding-top":"10px"},attrs:{model:e.userinfo}},[s("el-form-item",[s("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.userinfo.nickName,callback:function(t){e.$set(e.userinfo,"nickName",t)},expression:"userinfo.nickName"}})],1),e._v(" "),s("el-form-item",[s("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.password1,callback:function(t){e.password1=t},expression:"password1"}})],1),e._v(" "),s("el-form-item",[s("el-input",{attrs:{type:"password",placeholder:"请重新输入密码"},model:{value:e.userinfo.password,callback:function(t){e.$set(e.userinfo,"password",t)},expression:"userinfo.password"}})],1),e._v(" "),s("el-form-item",{staticClass:"lastitem"},[s("el-button",{staticClass:"register-btn",attrs:{type:"primary"},on:{click:function(t){return e.submit()}}},[e._v("立即注册")]),e._v(" "),s("span",{staticClass:"register-forget"},[s("router-link",{attrs:{tag:"a",to:"/login"}},[e._v("已有账号？去登录")]),e._v(" "),s("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),s("a",[e._v("忘记密码")])],1)],1)],1),e._v(" "),e._m(1)],1),e._v(" "),s("div",{staticClass:"register-footer"},[s("el-divider",[s("span",{staticClass:"otherInfo"},[s("i",{staticClass:"el-icon-warning",staticStyle:{color:"#C0C4CC"}},[e._v(" ")]),e._v("其他信息")])]),e._v(" "),s("div",{staticClass:"register-footer-txt"},[s("p",[s("el-link",{attrs:{type:"info"}},[e._v("English")]),e._v(" "),s("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),s("el-link",{attrs:{type:"info"}},[e._v("常见问题")]),e._v(" "),s("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),s("el-link",{attrs:{type:"info"}},[e._v("隐私政策")])],1)])],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"register-header"},[t("img",{staticClass:"register-header-logo",attrs:{src:s("G4Ks"),alt:""}}),this._v(" "),t("p",[this._v("博客平台账号")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"agreeAndRead"},[this._v("已阅读并同意："),t("strong",[this._v("用户协议")]),this._v("和 "),t("strong",[this._v("隐私政策")])])}]};var u=s("C7Lr")(l,c,!1,function(e){s("zvQH")},null,null);t.default=u.exports},zvQH:function(e,t){}});
//# sourceMappingURL=8.5984829184ab99eae5f3.js.map