webpackJsonp([90],{16:function(e,t,n){var i=n(71),o=n(6);e.exports=i(o,{NODE_ENV:'"development"'})},32:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){for(var e=[],t=1;t<=120;t++)e.push({value:t+"",name:t+"岁"});return e}(),o=n(7),a=o.build.assetsPublicPath+o.build.assetsSubDirectory;t.default={static:a,wechat:navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/i),ios:!!navigator.userAgent.match(/(i[^;]+\;(U;)? CPU.+Mac OS X)/),android:navigator.userAgent.indexOf("Android")>-1||navigator.userAgent.indexOf("Linux")>-1,keepAlive:!1,logintype:!1,openid:sessionStorage.getItem("_openid")||"",userid:"",code:"",uinfo:null,uwr:null,goeasy:"",age:i,sex:[{value:"1",name:"男"},{value:"2",name:"女"}],diagnosis:[{value:"1",name:"初诊"},{value:"0",name:"复诊"}],distcodes:[],gps:{lat:"",lon:"",code:"",name:"未定位"},sgps:{lat:"",lon:"",code:"",name:""},pullupConfig:{content:"上拉加载更多",downContent:"松开进行加载",upContent:"上拉加载更多",loadingContent:"加载中...",pullUpHeight:20},orderType:{1:"图文问诊",2:"电话问诊",4:"远程会诊",5:"图文会诊",6:"图文问诊",7:"电话问诊",8:"患者报到",9:"快速问诊",10:"转诊服务",11:"会诊申请","11-5":"图文会诊申请","11-4":"视频会诊申请",12:"团队问诊",13:"送心意",14:"团队vip",15:"家庭医生"},orderState:{10:"待接诊",20:"问诊中",25:"待复诊",30:"已退诊",40:"已完成",50:"已取消"}}},6:function(e,t){e.exports={NODE_ENV:'"production"'}},7:function(e,t,n){(function(t){var i=n(70);e.exports={build:{env:n(6),index:i.resolve(t,"../dist/module/index.html"),assetsRoot:i.resolve(t,"../dist"),assetsSubDirectory:"static/v2",assetsPublicPath:"/",productionSourceMap:!1,productionGzip:!0,productionGzipExtensions:["js","css"],bundleAnalyzerReport:n.i({NODE_ENV:"production"}).npm_config_report,target:"https://weixin.ebaiyihui.com",appid:"wx4ee3ae2857ad1e18"},dev:{appid:"wx0369e0fca6790259",env:n(16),port:8e3,autoOpenBrowser:!0,assetsSubDirectory:"static/v2",assetsPublicPath:"/",proxyTable:{"/d2p":{target:"https://weixin.ebaiyihui.com",secure:!1,changeOrigin:!0,pathRewrite:{"^/d2p":"/d2p"}}},cssSourceMap:!1,target:""}}}).call(t,"/")}},[32]);