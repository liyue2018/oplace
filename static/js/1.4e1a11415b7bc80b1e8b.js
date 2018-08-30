webpackJsonp([1],{"/ucu":function(t,s,a){"use strict";var e=a("8f4f"),o=a("hsoU"),i={name:"Login",data:function(){return{closeFlag:!0,codeFlag:!0,passwordFlag:!1,setPassFlag:!1,formdata:{tel:"",code:"",password:"",setPassword:""},rules:{tel:{required:!0,message:"请输入手机号码",trigger:"blur"},code:{required:!0,message:"请输入验证码",trigger:"blur"}},isLogin:this.$store.state.isLogin}},mounted:function(){},computed:{},methods:{showPasswordPopup:function(){this.codeFlag=!this.codeFlag,this.passwordFlag=!this.passwordFlag},showCodePopup:function(){this.codeFlag=!this.codeFlag,this.passwordFlag=!1},close:function(){this.closeFlag=!this.closeFlag,this.$emit("closePopup",this.closeFlag)},submitForm:function(){this.isLogin=!this.isLogin,localStorage.setItem("isLogin",this.isLogin),this.$store.commit("ISLOGIN",this.isLogin),this.close()}},props:{},components:{Popup:e.a,OButton:o.a}},n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.closeFlag?a("popup",[a("h2",{ref:"temp",staticClass:"login-box-bg",attrs:{slot:"header"},slot:"header"},[a("img",{attrs:{src:"static/images_icon/login_box_bg.png",alt:""}}),t._v(" "),a("span",{staticClass:"close",on:{click:t.close}})]),t._v(" "),a("form",{staticClass:"form-content login-popup",attrs:{slot:"content"},slot:"content"},[t.codeFlag||t.passwordFlag?a("div",{staticClass:"from-control"},[a("label",{staticClass:"label"},[t._v("手机号")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.formdata.tel,expression:"formdata.tel",modifiers:{number:!0}}],staticClass:"form-input",attrs:{type:"number",name:"tel",value:"",placeholder:"请输入手机号码"},domProps:{value:t.formdata.tel},on:{input:function(s){s.target.composing||t.$set(t.formdata,"tel",t._n(s.target.value))},blur:function(s){t.$forceUpdate()}}})]):t._e(),t._v(" "),t.codeFlag?a("div",{staticClass:"from-control"},[a("label",{staticClass:"label"},[t._v("验证码")]),t._v(" "),a("span",{staticClass:"v-code-box"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.formdata.code,expression:"formdata.code",modifiers:{number:!0}}],staticClass:"form-input v-code",attrs:{type:"number",placeholder:"请输入验证码",name:"code"},domProps:{value:t.formdata.code},on:{input:function(s){s.target.composing||t.$set(t.formdata,"code",t._n(s.target.value))},blur:function(s){t.$forceUpdate()}}}),t._v(" "),a("o-button",{staticClass:"v-code-btn",attrs:{text:"获取验证码",classStyle:"main-btn"}})],1)]):t._e(),t._v(" "),t.passwordFlag?a("div",{staticClass:"from-control"},[a("label",{staticClass:"label"},[t._v("密码")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formdata.password,expression:"formdata.password",modifiers:{trim:!0}}],staticClass:"form-input",attrs:{type:"password",name:"password",value:"",placeholder:"请输入密码"},domProps:{value:t.formdata.password},on:{input:function(s){s.target.composing||t.$set(t.formdata,"password",s.target.value.trim())},blur:function(s){t.$forceUpdate()}}})]):t._e(),t._v(" "),t.setPassFlag?a("div",{staticClass:"from-control"},[a("label",{staticClass:"label"},[t._v("设置密码")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formdata.setPassword,expression:"formdata.setPassword",modifiers:{trim:!0}}],staticClass:"form-input",attrs:{type:"password",name:"password",value:"",placeholder:"请输入密码"},domProps:{value:t.formdata.setPassword},on:{input:function(s){s.target.composing||t.$set(t.formdata,"setPassword",s.target.value.trim())},blur:function(s){t.$forceUpdate()}}})]):t._e(),t._v(" "),t.codeFlag?a("o-button",{staticClass:"go-login",attrs:{inputType:"button",text:"登录 / 注册",classStyle:"main-btn"},on:{btnClick:t.submitForm}}):t._e(),t._v(" "),t.passwordFlag?a("o-button",{staticClass:"go-login",attrs:{text:"登录",classStyle:"main-btn"}}):t._e(),t._v(" "),t.setPassFlag?a("o-button",{staticClass:"go-login",attrs:{text:"确定",classStyle:"main-btn"}}):t._e()],1),t._v(" "),a("div",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[t.codeFlag?a("a",{attrs:{href:"javascript:;"},on:{click:function(s){return s.preventDefault(),t.showPasswordPopup(s)}}},[t._v("\n            密码登录\n            "),a("span",{staticClass:"arrowR"})]):t._e(),t._v(" "),t.passwordFlag?a("a",{attrs:{href:"javascript:;"},on:{click:function(s){return s.preventDefault(),t.showPasswordPopup(s)}}},[t._v("\n            验证码登录\n            "),a("span",{staticClass:"arrowR"})]):t._e(),t._v(" "),t.setPassFlag?a("a",{staticClass:"back",on:{click:function(s){return s.preventDefault(),t.showCodePopup(s)}}},[a("span",{staticClass:"arrowR arrowL"},[t._v("<")]),t._v("\n            返回\n        ")]):t._e()])]):t._e()},staticRenderFns:[]};var l=a("C7Lr")(i,n,!1,function(t){a("Tnn1")},"data-v-c4d308b6",null);s.a=l.exports},B2GG:function(t,s){},Oker:function(t,s,a){"use strict";var e={data:function(){return{}},props:{text:{type:[String],default:"提示信息"}}},o={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"mask popup-mask"},[s("div",{staticClass:"popup"},[this._v("\n        "+this._s(this.text)+"\n    ")])])},staticRenderFns:[]};var i=a("C7Lr")(e,o,!1,function(t){a("wEvc")},"data-v-118e042d",null);s.a=i.exports},Tnn1:function(t,s){},ayI9:function(t,s){},dAjm:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("/ucu"),o=a("ymEw"),i=a.n(o),n=a("hsoU"),l=a("8f4f"),r=a("Oker"),c={data:function(){return{select:{province:"广东省",city:"广州市"},skill:"",skills:["风景阿姆","山水中国","山川河流","风景"],comSkills:["人物","中国","河流","风景"],years:[],months:[],days:[],preserFlag:!1}},created:function(){this.getYears(),this.getMonths(),this.getDays()},methods:{closePopup:function(){this.$emit("showModifyPopup")},addSkill:function(t){-1===this.skills.indexOf(t)&&this.skills.push(t)},getYears:function(){for(var t=1980;t<=2020;t++)this.years.push(t);return this.years},getMonths:function(){for(var t=1;t<=12;t++)this.months.push(t);return this.months},getDays:function(){for(var t=1;t<=31;t++)this.days.push(t);return this.days},makeSure:function(){this.preserFlag=!this.preserFlag;var t=this;setTimeout(function(){t.closePopup()},800)}},components:{VDistpicker:i.a,OButton:n.a,Popup:l.a,SmallPop:r.a}},u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("popup",[a("div",{attrs:{slot:"content"},slot:"content"},[a("h2",{staticClass:"header"},[a("span",{staticClass:"edit-icon"}),t._v(" "),a("p",{staticClass:"text"},[t._v("修改资料")])]),t._v(" "),a("div",{staticClass:"slide-box"},[a("form",{staticClass:"modify-form"},[a("div",{staticClass:"form-control"},[a("label",{staticClass:"label-title"},[t._v("昵称：")]),t._v(" "),a("input",{staticClass:"input-control",attrs:{type:"text",name:"username",placeholder:"输入您的昵称"}})]),t._v(" "),a("div",{staticClass:"form-control"},[a("label",{staticClass:"label-title"},[t._v("一句话自我介绍：")]),t._v(" "),a("input",{staticClass:"input-control w245",attrs:{type:"text",placeholder:"输入一句话自我介绍"}})]),t._v(" "),a("div",{staticClass:"form-control"},[a("label",{staticClass:"label-title"},[t._v("技能：")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.skill,expression:"skill"}],staticClass:"input-control",attrs:{type:"text",placeholder:"输入您的技能"},domProps:{value:t.skill},on:{input:function(s){s.target.composing||(t.skill=s.target.value)}}}),t._v(" "),a("o-button",{staticClass:"add-label-btn",attrs:{text:"添加",classStyle:"main-btn"},on:{btnClick:function(s){t.addSkill(t.skill)}}})],1),t._v(" "),a("div",{staticClass:"labels"},[a("ul",{staticClass:"labels-list"},t._l(t.skills,function(s,e){return a("li",{key:e,staticClass:"item"},[t._v(t._s(s))])})),t._v(" "),a("span",{staticClass:"com-labels-title"},[t._v("常用技能：")]),t._v(" "),a("ul",{staticClass:"labels-list"},t._l(t.comSkills,function(s,e){return a("li",{key:e,staticClass:"item"},[t._v(t._s(s))])}))]),t._v(" "),a("div",{staticClass:"form-control"},[a("label",{staticClass:"label-title"},[t._v("性别：")]),t._v(" "),a("select",{staticClass:"select-control"},[a("option",{attrs:{value:"man"}},[t._v("男")]),t._v(" "),a("option",{attrs:{value:"girl"}},[t._v("女")])])]),t._v(" "),a("div",{staticClass:"form-control"},[a("label",{staticClass:"label-title"},[t._v("出生日期(阳历)：")]),t._v(" "),a("div",{staticClass:"birth-date"},[a("select",{staticClass:"select-control"},t._l(t.years,function(s){return a("option",{key:s,domProps:{value:s}},[t._v(t._s(s))])})),t._v(" "),a("span",{staticClass:"date"},[t._v("年")]),t._v(" "),a("select",{staticClass:"select-control"},t._l(t.months,function(s){return a("option",{key:s,domProps:{value:s}},[t._v(t._s(s))])})),t._v(" "),a("span",{staticClass:"date"},[t._v("月")]),t._v(" "),a("select",{staticClass:"select-control"},t._l(t.days,function(s){return a("option",{key:s,domProps:{value:s}},[t._v(t._s(s))])})),t._v(" "),a("span",{staticClass:"date"},[t._v("日")])])]),t._v(" "),a("div",{staticClass:"form-control city"},[a("label",{staticClass:"label-title"},[t._v("所在城市：")]),t._v(" "),a("v-distpicker")],1),t._v(" "),a("div",{staticClass:"form-control"},[a("label",{staticClass:"label-title"},[t._v("家乡：")]),t._v(" "),a("v-distpicker",{attrs:{"only-province":""}})],1),t._v(" "),a("div",{staticClass:"form-control"},[a("label",{staticClass:"label-title"},[t._v("毕业学校：")]),t._v(" "),a("input",{staticClass:"input-control",attrs:{type:"text",placeholder:"输入您毕业学校的名称"}}),t._v(" "),a("input",{staticClass:"input-control w142",attrs:{type:"text",placeholder:"输入您的专业"}})]),t._v(" "),a("div",{staticClass:"form-control"},[a("label",{staticClass:"label-title"},[t._v("作品链接：")]),t._v(" "),a("input",{staticClass:"input-control w320",attrs:{type:"text",placeholder:"输入您线上的作品链接，方便别人更了解您"}})]),t._v(" "),a("o-button",{staticClass:"btn",attrs:{text:"确定",classStyle:"main-btn"},on:{btnClick:t.makeSure}})],1)])]),t._v(" "),a("input",{staticClass:"close-btn",attrs:{slot:"close",type:"button",name:""},on:{click:t.closePopup},slot:"close"})]),t._v(" "),t.preserFlag?a("small-pop",{staticClass:"preserPop",attrs:{text:"保存"}}):t._e()],1)},staticRenderFns:[]};var p=a("C7Lr")(c,u,!1,function(t){a("ayI9")},"data-v-55cfa618",null).exports,v=a("Ng83"),d={data:function(){return{}},created:function(){},methods:{closePopup:function(){this.$emit("exitLogon")},cancleLogin:function(){this.$emit("exitLogon")},sureLogin:function(){this.$emit("exitLogon"),this.$store.commit("ISLOGIN",!this.$store.state.isLogin)}},components:{Popup:l.a,OButton:n.a}},m={render:function(){var t=this.$createElement,s=this._self._c||t;return s("popup",{staticClass:"exit-popup"},[s("div",{staticClass:"content",attrs:{slot:"content"},slot:"content"},[s("h3",[this._v("确定要退出登录")]),this._v(" "),s("div",{staticClass:"buttons"},[s("o-button",{staticClass:"btn",attrs:{text:"取消",classStyle:"del-btn"},on:{btnClick:this.cancleLogin}}),this._v(" "),s("o-button",{staticClass:"btn",attrs:{text:"确定",classStyle:"main-btn"},on:{btnClick:this.sureLogin}})],1)]),this._v(" "),s("input",{staticClass:"close-btn",attrs:{slot:"close",type:"button",name:""},on:{click:this.closePopup},slot:"close"})])},staticRenderFns:[]};var f=a("C7Lr")(d,m,!1,function(t){a("oc8/")},"data-v-7e7db8ca",null).exports,h={data:function(){return{topNavList:[{navHref:"/recommend",text:"推荐"},{navHref:"/picture",text:"图片"},{navHref:"/video",text:"视频"},{navHref:"/audio",text:"音频"},{navHref:"/artist",text:"艺术家"}],options:[{classType:"upload",title:"上传作品",event:this.showUploadPopup},{classType:"edit",title:"修改资料",event:this.showModifyPopup},{classType:"home",title:"我的主页",event:this.goToMine},{classType:"wallet",title:"我的账户",event:this.goToAccount},{classType:"attestation",title:"艺术家认证",event:this.goTocCertify},{classType:"enterprise",title:"升级为企业号",event:this.goToUpgrade}],messages:[{id:1,reading:!0,senderImg:"static/images_header/header2.jpg",senderName:"上帝的宠儿",date:"2018-8-10 18:20",title:"XX消息标题XX消息标题XX消息标题XX消息标题XX消息标题XX消息标题",content:"XX消息内容XX消息内X消息内容XX消X消息内容XX消X消息内容XX消容XX消息"},{id:2,reading:!1,senderImg:"static/images_header/header4.jpg",senderName:"好好说话",date:"2018-12-10 20:22",title:"121212XX消息标题XX消息标题XX消息标题XX消息标题XX消息标题",content:"121212XX消息内容XX消息内X消息内容XX消X消息内容XX消X消息内容XX消容XX消息"}],flag:!1,searchFlag:!1,loginFlag:!1,modifyFlag:!1,relaseFlag:!1,exitFlag:!1,preserved:"已保存"}},methods:{showSearch:function(){this.flag=!0,this.searchFlag=!0},closeSearch:function(){this.flag=!this.flag,this.searchFlag=!1},showLogin:function(){this.loginFlag=!this.loginFlag},closePopup:function(t){this.loginFlag=t},showUploadPopup:function(){this.relaseFlag=!this.relaseFlag},closeRelasePopup:function(){this.relaseFlag=!this.relaseFlag},goToMine:function(){this.$router.push("/mine")},goToAccount:function(){this.$router.push("/account")},goToUpgrade:function(){this.$router.push("/account/upgrade")},goTocCertify:function(){this.$router.push("/account/certify")},exitLogon:function(){this.exitFlag=!this.exitFlag},closeExitPopup:function(){this.$store.commit("ISLOGIN",!this.$store.state.isLogin)},showModifyPopup:function(){this.modifyFlag=!this.modifyFlag},showMoreMessage:function(){console.log("hello world")}},components:{Login:e.a,Modify:p,Relase:v.a,Exit:f,SmallPop:r.a}},_={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("header",{staticClass:"header"},[a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("div",{staticClass:"center"},[a("nav",{staticClass:"top-nav"},[a("ul",{staticClass:"list"},t._l(t.topNavList,function(s,e){return a("li",{key:e,staticClass:"item"},[a("router-link",{attrs:{to:s.navHref,tag:"a"}},[t._v(t._s(s.text))])],1)}))]),t._v(" "),a("div",{staticClass:"search-wrap"},[a("input",{directives:[{name:"show",rawName:"v-show",value:t.flag,expression:"flag"}],staticClass:"search-close",attrs:{type:"button",name:"",readonly:"readonly"},on:{click:t.closeSearch}}),t._v(" "),a("input",{staticClass:"search-icon",class:{"search-click":t.searchFlag},attrs:{type:"button",readonly:"readonly"},on:{click:t.showSearch}}),t._v(" "),a("input",{directives:[{name:"show",rawName:"v-show",value:t.flag,expression:"flag"}],staticClass:"search-input",attrs:{type:"text",placeholder:"请输入您想要搜索的内容"}})])]),t._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.isLogin,expression:"!$store.state.isLogin"}],staticClass:"login-or-register",on:{click:function(s){return s.preventDefault(),t.showLogin(s)}}},[t._v("登陆 / 注册")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isLogin,expression:"$store.state.isLogin"}],staticClass:"account-box"},[a("span",{staticClass:"account-head-box"},[a("a",{staticClass:"account-head",attrs:{href:"javascript:;"}},[a("img",{attrs:{src:"static/images_header/header3.jpg"}}),t._v(" "),a("div",{staticClass:"account-option hover-box"},[a("ul",{staticClass:"list"},t._l(t.options,function(s,e){return a("li",{key:e,staticClass:"item"},[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return t.preventDefault(),s.event(t)}}},[a("span",{staticClass:"icon",class:s.classType}),t._v(" "),a("p",{staticClass:"title"},[t._v(t._s(s.title))])])])})),t._v(" "),a("a",{staticClass:"bottom-btn",attrs:{href:"javascript:;"},on:{click:function(s){return s.preventDefault(),t.exitLogon(s)}}},[t._v("退出登录")])]),t._v(" "),t._m(1)])]),t._v(" "),a("a",{staticClass:"account-type",attrs:{href:"javascript:;"}}),t._v(" "),a("a",{staticClass:"message",class:{"no-message":0===t.messages.length},attrs:{href:"javascript:;"}},[a("div",{staticClass:"message-box hover-box"},[0!==t.messages.length?a("div",[a("ul",{staticClass:"list"},t._l(t.messages,function(s,e){return a("li",{key:e,staticClass:"item"},[a("a",{staticClass:"message-author-box",attrs:{href:"javascript:;"}},[s.reading?a("span",{staticClass:"unread"}):t._e(),t._v(" "),a("span",{staticClass:"sender-head"},[a("img",{attrs:{src:s.senderImg,alt:""}})]),t._v(" "),a("p",{staticClass:"sender-name"},[t._v(t._s(s.senderName))])]),t._v(" "),a("span",{staticClass:"message-date"},[t._v(t._s(s.date))]),t._v(" "),a("a",{staticClass:"message-content-box",attrs:{href:"javascript::"}},[a("h3",{staticClass:"message-title"},[t._v(t._s(s.title))]),t._v(" "),a("p",{staticClass:"message-content"},[t._v(t._s(s.content))])])])})),t._v(" "),a("a",{staticClass:"bottom-btn",attrs:{href:"javascript:;"},on:{click:function(s){return s.preventDefault(),t.showMoreMessage(s)}}},[t._v("查看更多")])]):t._e(),t._v(" "),0===t.messages.length?a("div",[a("p",{staticClass:"no-unread-message"},[t._v("您还没有未读消息")])]):t._e()])])]),t._v(" "),t.loginFlag?a("login",{on:{closePopup:t.closePopup}}):t._e(),t._v(" "),t.modifyFlag?a("modify",{on:{showModifyPopup:t.showModifyPopup}}):t._e(),t._v(" "),t._e(),t._v(" "),a("relase",{directives:[{name:"show",rawName:"v-show",value:t.relaseFlag,expression:"relaseFlag"}],on:{closeClick:t.closeRelasePopup}}),t._v(" "),t.exitFlag?a("exit",{on:{exitLogon:t.exitLogon,closeRelasePopup:t.closeRelasePopup}}):t._e()],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.flag,expression:"flag"}],staticClass:"mask"})])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{staticClass:"logo"},[s("a",{attrs:{href:"index.html"}},[s("img",{attrs:{src:"static/images_icon/logo.png",alt:"原点·Oplace"}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"perfect-information-tip hover-box"},[s("p",{staticClass:"perfect-information-text"},[this._v("进一步完善您的资料，获得折扣券")])])}]};var g=a("C7Lr")(h,_,!1,function(t){a("jfq0")},"data-v-c7bcefc0",null).exports,C={data:function(){return{flag:!1,viceNavs:["版权声明","服务条款","隐私政策","关于我们","API"]}},methods:{},components:{Popup:l.a}},b={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"vice-nav"},[a("ul",[a("li",{staticClass:"web-information"},[t._v("© 2018 原点·Oplace")]),t._v(" "),t._l(t.viceNavs,function(s,e){return a("li",{key:e},[a("a",{attrs:{href:"javascript:;"}},[t._v(t._s(s))])])})],2)]),t._v(" "),a("div",{staticClass:"contact-us"},[a("p",[t._v("联系我们：")]),t._v(" "),a("a",{staticClass:"weixin",on:{click:function(s){s.preventDefault(),t.flag=!t.flag}}}),t._v(" "),a("a",{staticClass:"weibo",attrs:{href:""}})]),t._v(" "),t.flag?a("popup",{staticClass:"QR-popup"},[a("div",{staticClass:"QR-content",attrs:{slot:"content"},slot:"content"},[a("h2",{staticClass:"QR-code-title"},[t._v("扫一扫，关注「原点·Oplace」微信公众号")]),t._v(" "),a("span",{staticClass:"QR"},[a("img",{attrs:{src:"static/images_icon/QR.png",alt:"扫一扫微信二维码"}})])]),t._v(" "),a("input",{staticClass:"close-btn",attrs:{slot:"close",type:"button",name:""},on:{click:function(s){t.flag=!1}},slot:"close"})]):t._e()],1)},staticRenderFns:[]};var w={data:function(){return{}},components:{OHeader:g,OFooter:a("C7Lr")(C,b,!1,function(t){a("B2GG")},"data-v-46c712a4",null).exports}},y={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("o-header"),this._v(" "),s("div",{staticClass:"main-container"},[s("router-view")],1),this._v(" "),s("o-footer")],1)},staticRenderFns:[]};var x=a("C7Lr")(w,y,!1,function(t){a("s+rL")},"data-v-b9c656ea",null);s.default=x.exports},jfq0:function(t,s){},"oc8/":function(t,s){},"s+rL":function(t,s){},wEvc:function(t,s){}});
//# sourceMappingURL=1.4e1a11415b7bc80b1e8b.js.map