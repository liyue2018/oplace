webpackJsonp([4],{"+uqi":function(t,s,e){"use strict";var a=e("hsoU"),i=e("8f4f"),l={data:function(){return{elem:this.$refs.selectBox}},methods:{closePopup:function(){console.log("hihi"),this.$emit("goToUpgrade")},nextStep:function(){this.changeStep(this.$refs.selectBox,"back","next",397,this.$refs.first,this.$refs.second)},returnStep:function(){this.changeStep(this.$refs.selectBox,"next","back",397,this.$refs.second,this.$refs.first)},relaseStep:function(){this.changeStep(this.$refs.selectBox,"next","last",340,this.$refs.second,this.$refs.over),this.uploadFailure&&(this.$refs.over.classList.add("failure-message"),this.$refs.fail.innerHTML="失败")},reUpgrade:function(){this.changeStep(this.$refs.selectBox,"last","back",390,this.$refs.over,this.$refs.first),this.$refs.over.classList.remove("failure-message"),this.$refs.fail.innerHTML="完成"},changeStep:function(t,s,e,a,i,l){t.classList.remove(s),t.classList.add(e),t.style.height=a+"px",i.classList.remove("active"),l.classList.add("active")}},components:{OButton:a.a,Popup:i.a},props:["header","stepText","helpMessage","uploadSuccess","uploadFailure"]},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("popup",[e("div",{staticClass:"release-popup",attrs:{slot:"content"},slot:"content"},[e("h2",{staticClass:"header"},[t._v("\n            "+t._s(t.header)+"\n        ")]),t._v(" "),e("div",{staticClass:"upgrade-step"},[e("div",{ref:"first",staticClass:"active"},[e("span",{staticClass:"num-step"},[t._v("1")]),t._v(" "),e("span",[t._v(t._s(t.stepText.first))]),t._v(" "),e("i",{staticClass:"spot"},[t._v("........")])]),t._v(" "),e("div",{ref:"second"},[e("span",{staticClass:"num-step"},[t._v("2")]),t._v(" "),e("span",[t._v(t._s(t.stepText.second))]),t._v(" "),e("i",{staticClass:"spot"},[t._v("........")])]),t._v(" "),e("div",{ref:"over"},[e("span",{staticClass:"num-step"},[t._v("3")]),t._v(" "),e("span",{ref:"fail"},[t._v("完成")])])]),t._v(" "),e("div",{ref:"selectBox",staticClass:"container-wrapper"},[e("div",{staticClass:"slide-box upload-box"},[t._t("firstStep"),t._v(" "),e("div",{staticClass:"alert-btn-box"},[e("o-button",{staticClass:"next-btn",attrs:{text:"下一步",classStyle:"main-btn"},on:{btnClick:t.nextStep}})],1)],2),t._v(" "),e("div",{staticClass:"slide-box select-box"},[t._t("secondStep"),t._v(" "),e("div",{staticClass:"buttons"},[e("o-button",{staticClass:"btn",attrs:{text:"上一步",classStyle:"main-btn"},on:{btnClick:t.returnStep}}),t._v(" "),e("o-button",{staticClass:"btn",attrs:{text:"提交",classStyle:"main-btn"},on:{btnClick:t.relaseStep}})],1)],2),t._v(" "),e("div",{staticClass:"slide-box"},[t.uploadSuccess?e("div",{staticClass:"upload-result"},[e("div",{staticClass:"uploading"},[e("span",{staticClass:"upload-img success-img"}),t._v(" "),e("p",{staticClass:"upload-text"},[t._v("支付成功")])]),t._v(" "),e("p",{staticClass:"help-message"},[t._v("\n                        "+t._s(t.helpMessage)+"\n                    ")]),t._v(" "),t._t("makeSureBtn")],2):t._e(),t._v(" "),t.uploadFailure?e("div",{staticClass:"upload-result"},[e("div",{staticClass:"uploading"},[e("span",{staticClass:"upload-img error-img"}),t._v(" "),e("p",{staticClass:"upload-text"},[t._v("上传失败")])]),t._v(" "),e("p",{staticClass:"help-message"},[t._v("\n                        如遇到无法解决的问题，请"),e("a",{attrs:{href:"javascript:;"}},[t._v("联系客服")])]),t._v(" "),e("o-button",{staticClass:"btn",attrs:{text:"重新支付",classStyle:"main-btn"},on:{btnClick:t.reUpgrade}})],1):t._e()])])]),t._v(" "),e("input",{staticClass:"close-btn",attrs:{slot:"close",type:"button",name:""},on:{click:t.closePopup},slot:"close"})])},staticRenderFns:[]};var o=e("C7Lr")(l,n,!1,function(t){e("W0lB")},"data-v-32255431",null);s.a=o.exports},"2Ldk":function(t,s){},Cvcl:function(t,s){},W0lB:function(t,s){},ejSg:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("hsoU"),i=e("+uqi"),l={data:function(){return{header:"艺术家认证",stepText:{first:"填写认证信息",second:"上传认证资料"},helpMessage:"将在7个工作日内审核完成，请耐心等待审核结果",uploadSuccess:!1,uploadFailure:!0,artistFlag:!1}},methods:{goToCertify:function(){this.$emit("goToCertify")},certifySuccess:function(){this.$emit("goToCertify",!this.artistFlag)}},components:{OButton:a.a,UpgradeStep:i.a}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("upgrade-step",{attrs:{header:t.header,stepText:t.stepText,helpMessage:t.helpMessage,uploadSuccess:t.uploadSuccess,uploadFailure:t.uploadFailure},on:{goToUpgrade:t.goToCertify}},[e("form",{staticClass:"modify-form",attrs:{slot:"firstStep"},slot:"firstStep"},[e("div",{staticClass:"form-control"},[e("label",{staticClass:"label-title"},[t._v("真实姓名：")]),t._v(" "),e("input",{staticClass:"input-control",attrs:{type:"text",name:"username",placeholder:"输入您的真实姓名"}})]),t._v(" "),e("div",{staticClass:"form-control"},[e("label",{staticClass:"label-title"},[t._v("身份证号：")]),t._v(" "),e("input",{staticClass:"input-control w245",attrs:{type:"text",placeholder:"请输入您的身份证号"}})]),t._v(" "),e("div",{staticClass:"form-control upload-ID"},[e("label",{staticClass:"label-title"},[t._v("身份证正面照片：")]),t._v(" "),e("div",{staticClass:"bg"},[e("input",{staticClass:"input-control",attrs:{type:"file"}}),t._v(" "),e("span",{staticClass:"upload"},[t._v("点击上传")])])])]),t._v(" "),e("div",{staticClass:"pay-tab",attrs:{slot:"secondStep"},slot:"secondStep"},[e("form",{staticClass:"modify-form"},[e("div",{staticClass:"form-control"},[e("label",{staticClass:"label-title"},[t._v("认证身份：")]),t._v(" "),e("input",{staticClass:"input-control w245",attrs:{type:"text",name:"username",placeholder:"请输入您需要认证的身份名称"}})]),t._v(" "),e("div",{staticClass:"form-control upload-ID"},[e("label",{staticClass:"label-title"},[t._v("上传认证资料：")]),t._v(" "),e("div",{staticClass:"upload-file"},[e("div",{staticClass:"up"},[e("o-button",{staticClass:"upload-btn",attrs:{text:"点击上传",classStyle:"main-btn"},on:{btnClick:function(t){}}}),t._v(" "),e("input",{staticClass:"input-control",attrs:{type:"file"}})],1),t._v(" "),e("p",{staticClass:"tips"},[t._v('\n                        请上传任何您觉得能够体现您认证身份的资料，请以图片或".zip"格式的文件上传，文件大小请控制在500Mb以内\n                    ')])])])])]),t._v(" "),e("o-button",{staticClass:"btn",attrs:{slot:"makeSureBtn",text:"确定",classStyle:"main-btn"},on:{btnClick:t.certifySuccess},slot:"makeSureBtn"})],1)},staticRenderFns:[]};var o=e("C7Lr")(l,n,!1,function(t){e("Cvcl")},"data-v-ab4086b6",null).exports,r={data:function(){return{certifyFlag:!1,artistFlag:!1}},methods:{goToCertify:function(t){this.certifyFlag=!this.certifyFlag,this.artistFlag=t}},components:{OButton:a.a,CertifyPopup:o}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"certify"},[e("h1",{staticClass:"title"},[t._v("艺术家认证")]),t._v(" "),t._m(0),t._v(" "),e("o-button",{directives:[{name:"show",rawName:"v-show",value:!t.artistFlag,expression:"!artistFlag"}],staticClass:"certify-btn",attrs:{text:"艺术家认证",classStyle:"main-btn"},on:{btnClick:t.goToCertify}}),t._v(" "),t.artistFlag?e("o-button",{staticClass:"over-btn",attrs:{text:"您已认证为圆点艺术家",classStyle:"gray-btn"}}):t._e(),t._v(" "),t.certifyFlag?e("certify-popup",{on:{goToCertify:t.goToCertify}}):t._e()],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"certify-text"},[e("li",[e("h3",[t._v("1、什么人可以进行艺术家认证？")]),t._v(" "),e("p",[t._v("只要您有足够多的优质的，原创的图片、视频、音频作品，并通过原点展示出来，您就可以获得原点网的艺术家认证。")])]),t._v(" "),e("li",[e("h3",[t._v("2、艺术家认证有什么好处？")]),t._v(" "),e("p",[t._v("认证为原点网的艺术家，您的昵称后方将显示艺术家的认证标识，并且可以制作自己的艺术家名片，这将可能为您带来更多的粉丝以及额外的商业合作。")])]),t._v(" "),e("li",[e("h3",[t._v("3、艺术家认证有费用吗？")]),t._v(" "),e("p",[t._v("艺术家认证是完全免费的。")])]),t._v(" "),e("li",[e("h3",[t._v("4、什么情况下会被取消艺术家认证？")]),t._v(" "),e("p",[t._v("（1） 如被认证的艺术家账户一年之内无任何有效的作品上传，将被自动取消艺术家认证。")]),t._v(" "),e("p",[t._v("（2） 被认证的艺术家在平台内出现任何的违规现象，将有可能随时失去艺术家认证资格。")]),t._v(" "),e("p",[t._v("（3） 被认证的艺术家在社会生活中，出现重大的违法行为，或严重影响自身名誉的事件，以及存在巨大争议的违反社会道德的事件或行为，将有可能随时失去艺术家认证资格。")])])])}]};var p=e("C7Lr")(r,c,!1,function(t){e("2Ldk")},"data-v-3adb93e2",null);s.default=p.exports}});
//# sourceMappingURL=4.bbc4bc44e1f729d6351e.js.map