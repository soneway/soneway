!function t(e,n,i){function a(r,s){if(!n[r]){if(!e[r]){var c="function"==typeof require&&require;if(!s&&c)return c(r,!0);if(o)return o(r,!0);throw new Error("Cannot find module '"+r+"'")}var u=n[r]={exports:{}};e[r][0].call(u.exports,function(t){var n=e[r][1][t];return a(n?n:t)},u,u.exports,t,e,n,i)}return n[r].exports}for(var o="function"==typeof require&&require,r=0;r<i.length;r++)a(i[r]);return a}({1:[function(t,e,n){!function(t){var i=function(){return function(e,n,i,a,o){if(a){var r;switch(e=encodeURIComponent(e||""),n=encodeURIComponent(n||""),i=encodeURIComponent(i||""),a){case"weibosohu":r="http://t.sohu.com/third/post.jsp?url="+e+"&title="+n+"&pic="+i;break;case"weibosina":r="http://service.t.sina.com.cn/share/share.php?title="+n+e+"&pic="+i+"&searchPic=false";break;case"qq":r="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+e+"&title="+n+"&desc="+n+"&summary="+i;break;case"tqq":r="http://v.t.qq.com/share/share.php?url="+e+"&title="+n+"&pic="+i;break;case"renren":r="http://widget.renren.com/dialog/share?resourceUrl="+i+"&srcUrl="+e+"&title="+n+"&description="+n;break;case"baishehui":r="http://bai.sohu.com/share/blank/addbutton.do?link="+e+"&title="+n+"&pic="+i;break;case"douban":r="http://shuo.douban.com/!service/share?href="+e+"&name="+n;break;case"kaixin001":r="http://www.kaixin001.com/rest/records.php?url="+e+"&style=11&content="+n;break;case"163":r="http://t.163.com/article/user/checkLogin.do?info="+n+e;break;case"51":r="http://share.51.com/share/share.php?vaddr="+e+"&title="+n+"&type=8&pic="+i;break;case"txpengyou":r="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?to=pengyou&url="+e+"&title="+n+"&desc="+n+"&summary="+i;break;case"tieba":r="http://tieba.baidu.com/f/commit/share/openShareApi?url="+e+"&title="+n+"&desc="+n}return o?r:t.open(r)}}}();return"object"==typeof n?void(e.exports=i):void(t.share=i)}(window)},{}],2:[function(t,e,n){var i=window.$=t("jq");t("base"),t("ui"),t("scroll");var a={home:t("./index/home"),ui:t("./index/ui"),carousel:t("./index/carousel"),flip:t("./index/flip"),picpager:t("./index/picpager"),piccut:t("./index/piccut"),scroll:t("./index/scroll"),scratchcard:t("./index/scratchcard"),turntable:t("./index/turntable"),share:t("./index/share")};i.panelLoaded=function(t,e){var n=(a[t.attr("id")]||{}).load;"function"==typeof n&&n(t,e)},i.panelUnloaded=function(t){var e=(a[t.attr("id")]||{}).unload;"function"==typeof e&&e(t)}},{"./index/carousel":3,"./index/flip":4,"./index/home":5,"./index/piccut":6,"./index/picpager":7,"./index/scratchcard":8,"./index/scroll":9,"./index/share":10,"./index/turntable":11,"./index/ui":12,base:22,jq:13,scroll:20,ui:23}],3:[function(t,e,n){t("carousel"),n.load=function(t,e){if(e){for(var n="",i=1,a=6;a>i;i++)n+='<img data-title="标题'+i+'" src="img/'+i+'.jpg"/>';$(".carousel").each(function(){$(this).html(n).carousel({isVertical:"1"===this.getAttribute("data-isvertical"),isAutoPlay:!0,isLoop:!0})})}}},{carousel:15}],4:[function(t,e,n){t("flip"),n.load=function(t,e){e&&$(".flip").each(function(){for(var t=this.getAttribute("data-len"),e="",n=0;t>n;n++)e+='<a><p style="background: url(img/'+(n+1)+'.jpg) center center; background-size: cover;" data-title="3d旋转切换示例 '+(n+1)+'"></p></a>';$(this).html(e).flip({isVertical:"1"===this.getAttribute("data-isvertical")})})}},{flip:16}],5:[function(t,e,n){n.load=function(t,e){if(e){var n=t.find(".list"),i="";for(var a in $.fn)i+="<a>"+a+"</a>";n.append(i)}}},{}],6:[function(t,e,n){t("piccut");var i=$(document);n.load=function(t,e){if(e){var n=$(".avator_up").piccut({fileEl:document.getElementById("file")})[0],a=document.getElementById("shower");i.on("click","#btn_cut",function(){a.src=n.getDataURL()})}}},{piccut:17}],7:[function(t,e,n){t("picpager"),n.load=function(t,e){if(e){var n=1;$.getScript("http://app.gd.sohu.com/minisite/xtep/20140530/get.php?vname=rs&act=list&page="+n+"&code=aa1c9153608a7755b7c20e97c0eade27",function(){var t=$(".picpager").picpager({imgData:rs.data.detail.map(function(t){return t.image}),imgAttrName:"image",slideCallback:function(e){e+1===10*n&&$.getScript("http://app.gd.sohu.com/minisite/xtep/20140530/get.php?vname=rs&act=list&page="+ ++n+"&code=aa1c9153608a7755b7c20e97c0eade27",function(){t[0].addItem(rs.data.detail.map(function(t){return t.image}))})}})})}}},{picpager:18}],8:[function(t,e,n){t("scratchcard"),n.load=function(t,e){e&&$(".scratchcard").each(function(){$(this).scratchcard({text:"刮开有奖",imgSrc:"img/4.jpg"})})}},{scratchcard:19}],9:[function(t,e,n){t("scroll"),n.load=function(t,e){e&&$(".scroll").each(function(){$(this).scroll({isVertical:"1"===this.getAttribute("data-isvertical")})})}},{scroll:20}],10:[function(t,e,n){var i=$(document),a=t("share"),o=document.title,r="http://www.sohu.com/upload/images20140108/sohulogo.png",s=location.href;i.on("click",".icon_share a",function(){a(s,o,r,this.getAttribute("data-provider"))})},{share:1}],11:[function(t,e,n){t("turntable");var i=$(document);n.load=function(t,e){if(e){var n=$(".turntable").turntable({count:10})[0];i.on("click",".turntable .btn_start",function(){var t=parseInt(10*Math.random());n.turnToIndex(t,function(){alert(t+1)})})}}},{turntable:21}],12:[function(t,e,n){$.extend(window,t("alert"))},{alert:14}],13:[function(t,e,n){!function(t,i){function a(e){if(this.length=0,"string"==typeof e){if("#"===e[0]){var n=e.slice(1);if(k.test(n)){var i=v.getElementById(n);return i&&(this[this.length++]=i),this}}if("."===e[0]){var a=e.slice(1);if(k.test(a))return o(v.getElementsByClassName(a),this)}if("<"===e[0]&&">"===e[e.length-1]){var r=v.createElement("div");return r.innerHTML=e,o(r.childNodes,this)}return o(v.querySelectorAll(e),this)}return e instanceof g||e===t?(this[this.length++]=e,this):e&&e.length>0?o(e,this):"function"==typeof e?p().ready(e):void 0}function o(t,e){return t?(s(t,function(t){e[e.length++]=t}),e):e}function r(t){return E[t]||(E[t]=new q("(^|\\s)"+t+"(\\s|$)"))}function s(t,e){for(var n=0,i=t.length;i>n;n++)e(t[n])}function c(t,e){var n=t+"-"+e;if(!P[n]){var i=v.createElement(t);$.appendChild(i),P[n]=m(i)[e],$.removeChild(i)}return P[n]}function u(t,e){return p(e===i?t:w.call(t,function(t){return t.matchesSelector(e)}))}function l(t,e,n,a){s(e.split(S),function(e){t.addEventListener(e,a===i?n:function(e){var i=p(e.target).closest(a,t)[0];i&&n.call(i,e)},!1)})}function f(t,e,n){s(e.split(S),function(e){t.removeEventListener(e,n,!1)})}function d(t){var e=v.createEvent("Events");return e.initEvent(t,!0,!0),e}function h(t){var e=[];for(var n in t)e.push(n+"="+t[n]);return e.join("&")}var p=function(t){return new a(t)},v=t.document,g=t.Node,m=t.getComputedStyle,b={}.toString,x=[],C=x.slice,y=x.indexOf,w=x.filter,T="-webkit-",k=/^[\w-]*$/,S=/\s+/g,E={},q=t.RegExp,$=v.body,P={},I=v.head,L=t.XMLHttpRequest,j=Element.prototype;return j.matchesSelector||(j.matchesSelector=j.webkitMatchesSelector||j.msMatchesSelector||j.mozMatchesSelector),s(["Object","Array","Function"],function(t){p["is"+t]=function(e){return b.call(e)==="[object "+t+"]"}}),p.is$=function(t){return t instanceof a},p.extend=function(t){if(t===i)return this;if(1===arguments.length){for(var e in t)this[e]=t[e];return this}return s(C.call(arguments,1),function(e){for(var n in e)t[n]=e[n]}),t},p.fn=a.prototype={constructor:a,forEach:function(t){for(var e=0,n=this.length;n>e;e++)t(this[e],e);return this},each:function(t){return this.forEach(function(e,n){t.call(e,n)})},ready:function(t){var e=v.readyState;return"complete"===e||"loaded"===e||"interactive"===e?t():l(v,"DOMContentLoaded",t),this},filter:function(t){return u(this,t)},siblings:function(t){var e=[];return this.forEach(function(t){s(t.parentNode.children,function(n){n!==t&&e.indexOf(n)<0&&e.push(n)})}),u(e,t)},not:function(t){if(t===i)return this;var e=[];return this.forEach(function(n){!n.matchesSelector(t)&&e.push(n)}),p(e)},find:function(t){var e=[];return this.forEach(function(n){s(n.querySelectorAll(t),function(t){e.indexOf(t)<0&&e.push(t)})}),p(e)},eq:function(t){return p(this[t])},children:function(t){var e=[];return this.forEach(function(t){s(t.children,function(t){e.push(t)})}),u(e,t)},parent:function(t){var e=[];return this.forEach(function(t){var n=t.parentNode;n!==v&&e.indexOf(n)<0&&e.push(n)}),u(e,t)},parents:function(t){var e=[];return this.forEach(function(t){for(;t=t.parentNode;)t!==v&&e.indexOf(t)<0&&e.push(t)}),u(e,t)},closest:function(t,e){for(var n=this[0];n&&!n.matchesSelector(t);){var i=n.parentNode;n=i===v?null:n!==e&&i}return p(n)},index:function(t){return p.is$(t)&&(t=t[0]),t?y.call(this,t):y.call(this[0].parentNode.children,this[0])},html:function(t){return this.prop("innerHTML",t)},text:function(t){return this.prop("textContent",t)},val:function(t){return this.prop("value",t)},attr:function(t,e,n){return this.prop(t,e,!0,n)},prop:function(t,e,n,a){return a===i&&(a=""),"string"==typeof t&&e===i?(t=a+t,n?this[0].getAttribute(t):this[0][t]):this.forEach(function(i){if(p.isObject(t))for(var o in t){var r=t[o];o=a+o,n?i.setAttribute(o,r):i[o]=r}else t=a+t,n?i.setAttribute(t,e):i[t]=e})},data:function(t,e){return this.attr(t,e,"data-")},removeAttr:function(t){return this.forEach(function(e){s(t.split(S),function(t){e.removeAttribute(t)})})},css:function(t,e){if("string"!=typeof t||e!==i)return this.forEach(function(n){var i=n.style;if(p.isObject(t))for(var a in t)i[a]=i[T+a]=t[a];else i[t]=i[T+t]=e});if(this[0]instanceof g){var n=m(this[0]);return n[t]||n[T+t]}},show:function(){return this.forEach(function(t){var e=t.style;return"none"===e.display?e.display=null:void(e.display=c(t.tagName,"display"))})},hide:function(){return this.css("display","none")},append:function(t,e){var n=p.is$(t)?t:p(t);return this.forEach(function(t){n.forEach(function(n){e?t.insertBefore(n,t.firstChild):t.appendChild(n)})})},prepend:function(t){return this.append(t,!0)},appendTo:function(t,e){var n=p.is$(t)?t:p(t);return n.append(this,e),this},prependTo:function(t){return this.appendTo(t,!0)},wrap:function(t){var e=p.is$(t)?t:p(t);return this.forEach(function(t){t.parentNode.insertBefore(e[0],t),e.append(t)})},offset:function(){var e=this[0].getBoundingClientRect();return{left:e.left+t.pageXOffset,top:e.top+t.pageYOffset,width:e.width,height:e.height}},width:function(){var e=this[0];return e===t?t.innerWidth:e.offsetWidth},height:function(){var e=this[0];return e===t?t.innerHeight:e.offsetHeight},is:function(t){return t&&this[0].matchesSelector(t)},addClass:function(t){return this.forEach(function(e){var n=e.className,i=t.split(S).filter(function(t){return!r(t).test(n)});i.length>0&&(e.className=[n].concat(i).join(" ").trim())})},removeClass:function(t){return this.forEach(function(e){if(t===i)return e.className="";var n=e.className;s(t.split(S),function(t){n=n.replace(r(t)," ")}),e.className=n.trim()})},hasClass:function(t){return r(t).test(this[0].className)},toggleClass:function(t){return this.forEach(function(e){var n=p(e);n.hasClass(t)?n.removeClass(t):n.addClass(t)})}},p.fn.extend=function(t){p.extend.call(this,t)},p.fn.extend({bind:function(t,e){return this.forEach(function(n){l(n,t,e)})},unbind:function(t,e){return this.forEach(function(n){f(n,t,e)})},delegate:function(t,e,n){return this.forEach(function(i){l(i,t,n,e)})},on:function(t,e,n){return"function"==typeof e?this.bind(t,e):this.delegate(t,e,n)},off:function(t,e){return this.unbind(t,e)},trigger:function(t){return t=d(t),this.forEach(function(e){e.dispatchEvent(t)})}}),s(["click","touchstart","touchmove","touchend","submit","load","resize","change","select"],function(t){p.fn[t]=function(e){return e?this.bind(t,e):this.trigger(t)}}),p.getScript=function(t,e){var n=/(\.js)$/.test(t),i=v.createElement("script");i.type="text/javascript",i.onload=function(){"function"==typeof e&&e(),!n&&I.removeChild(i)},i.src=t,I.appendChild(i)},p.ajax=function(t){t=p.extend({},p.ajax.defaults,t);var e=new L;e.open(t.type.toUpperCase(),t.url,t.async);var n=t.header||{};n["Content-Type"]=t.contentType;for(var i in n)e.setRequestHeader(i,n[i]);e.onreadystatechange=function(){if(4===e.readyState){if(e.status>=200&&e.status<300||304==e.status){var n=t.success;"function"==typeof n&&n(e)}else{var i=t.error;"function"==typeof i&&i(e)}var a=t.complete;"function"==typeof a&&a(e)}},e.send(h(t.data)||null)},p.ajax.defaults={type:"GET",contentType:"application/x-www-form-urlencoded",async:!0},"object"==typeof n?e.exports=p:void(t.jq=t.$=p)}(window)},{}],14:[function(t,e,n){!function(t){var i='<div id="pi-alert"><div class="pi-box"><h2 class="pi-head"></h2><p class="pi-msg"></p><p><a class="pi-btn-ok"></a></p></div></div><div id="pi-confirm"><div class="pi-box"><h2 class="pi-head"></h2><p class="pi-msg"></p><p><a class="pi-btn-ok"></a><a class="pi-btn-cancel"></a></p></div></div><div id="pi-tooltip"></div>';t(document.body).append(i);var a=function(){function e(){o.addClass("visible");var t=i.onOpen;"function"==typeof t&&t()}function n(){o.removeClass("visible");var t=i.onClose;"function"==typeof t&&t()}var i,o=t("#pi-alert"),r=o.find(".pi-head"),s=o.find(".pi-msg"),c=o.find(".pi-btn-ok");return o.on("click",".pi-btn-ok",function(){if(!c.hasClass("disabled")){n();var t=i.btnOkClick;"function"==typeof t&&t()}}).on("click",function(e){i.isHideOnBgClick&&0===t(e.target).closest(".pi-box").length&&n()}),function(n){"object"!=typeof n&&(n={msg:n}),i=t.extend({},a.defaults,n),r.html(i.head),s.html(i.msg),c.text(i.okTxt),e()}}();a.defaults={head:"提示",msg:"内容",okTxt:"确定",isHideOnBgClick:!1};var o=function(){function e(){a.addClass("visible");var t=i.onOpen;"function"==typeof t&&t()}function n(){a.removeClass("visible");var t=i.onClose;"function"==typeof t&&t()}var i,a=t("#pi-confirm"),r=a.find(".pi-head"),s=a.find(".pi-msg"),c=a.find(".pi-btn-ok"),u=a.find(".pi-btn-cancel");return a.on("click",".pi-btn-ok",function(){if(!c.hasClass("disabled")){n();var t=i.btnOkClick;"function"==typeof t&&t()}}).on("click",".pi-btn-cancel",function(){n();var t=i.btnCancelClick;"function"==typeof t&&t()}).on("click",function(e){i.isHideOnBgClick&&0===t(e.target).closest(".pi-box").length&&n()}),function(n){"object"!=typeof n&&(n={msg:n}),i=t.extend({},o.defaults,n),r.html(i.head),s.html(i.msg),c.text(i.okTxt),u.text(i.cancelTxt),e()}}();o.defaults=t.extend({},a.defaults,{cancelTxt:"取消"});var r=function(){var e,n=t("#pi-tooltip");return function(t,i,a){n.html(t).addClass("visible"),i?n.addClass("ok"):n.removeClass("ok"),clearTimeout(e),e=setTimeout(function(){n.removeClass("visible")},a||2e3)}}(),s={alert:a,confirm:o,tooltip:r};return"object"==typeof n?e.exports=s:void t.extend(window,s)}($)},{}],15:[function(t,e,n){!function(t,e){e.fn.carousel=function(n){return this.each(function(){function i(){if(s=q.children("*"),c=s.length,q.addClass("pi-carousel"+(v?" vertical":"")).html('<div class="pi-wrap"></div>'),o=q.find(".pi-wrap").append(s),r=o[0].style,h=1e3*parseFloat(o.css("transition-duration")),E&&o.append(s[0].outerHTML).prepend(s[c-1].outerHTML),u=o.children("*"),l=u.length,y&&q.append(f=e('<div class="pi-title"></div>')),w){for(var t="",n=0;c>n;n++)t+="<span></span>";var i='<div class="pi-pager">'+t+"</div>";q.append(i),d=q.find(".pi-pager>span")}"function"==typeof T&&T(s),a()}function a(){function n(){p=q.width(),T=q.height(),v?(r.height=T*l+"px",u.css("height",T+"px"),E&&o.css({"margin-top":-T+"px"})):(r.width=p*l+"px",u.css("width",p+"px"),E&&o.css({"margin-left":-p+"px"}))}function i(){b&&(P=setInterval(function(){++D,!E&&D===c&&(D=0),o.removeClass("notrans"),a()},x))}function a(t){var e,n=-D*(v?T:p);if("number"==typeof t)E||(0===D&&t>0||D===c-1&&0>t)&&(t/=S),n+=t;else{var i=s.eq(D);i.length&&("function"==typeof C&&C.call(s,D),s.removeClass("current").eq(D).addClass("current"),y&&f.html(i.attr("data-title")),w&&d.removeClass("selected").eq(D).addClass("selected")),E&&setTimeout(function(){0>D&&$.slideToIndex(c-1,1),D===c&&$.slideToIndex(0,1)},h)}e="translate3d("+(v?"0,"+n+"px,0":n+"px,0,0")+")",o.css({transform:e})}var p,T,P,I,L,j,A,D=k;n(),$.slideToIndex=function(t,e){return"number"!=typeof t?console.log("index应为数字"):(e?o.addClass("notrans"):o.removeClass("notrans"),D=t,void a())},$.prev=function(){--D,!E&&0>D&&(D=c-1),a()},$.next=function(){++D,!E&&D===c&&(D=0),a()},q.on("touchstart",function(t){var e=t.targetTouches?t.targetTouches[0]:t;I=e.pageX,L=e.pageY,j=0,A=!1,o.addClass("notrans"),b&&clearInterval(P)}),q.on("touchmove",function(t){var e=t.targetTouches?t.targetTouches[0]:t,n=e.pageX-I,i=Math.abs(n),o=e.pageY-L,r=Math.abs(o);v?(A||m>i&&r>i)&&(t.preventDefault(),t.stopPropagation(),a(j=o),A=!0):(A||m>r&&i>r)&&(t.preventDefault(),t.stopPropagation(),a(j=n),A=!0)}),q.on("touchend",function(){j>g?(--D,!E&&0>D&&(D=0)):-g>j&&(++D,!E&&D===c&&(D=c-1)),o.removeClass("notrans"),0!==j&&a(),i()}).trigger("touchend"),w&&d.on("click",function(){var t=e(this).index();$.slideToIndex(t)}),t.addEventListener("resize",function(){var t=q.width();t>0&&(n(),a(0))},!1)}var o,r,s,c,u,l,f,d,h,p=e.extend({},e.fn.carousel.defaults,n),v=p.isVertical,g=p.swipThreshold,m=p.swipSpanThreshold,b=p.isAutoPlay,x=p.autoPlayInter,C=p.slideCallback,y=p.isShowTitle,w=p.isShowPager,T=p.inited,k=p.initIndex,S=p.pullRatio,E=p.isLoop,q=e(this),$=this;i()})},e.fn.carousel.defaults={isVertical:!1,swipThreshold:100,swipSpanThreshold:10,isAutoPlay:!0,autoPlayInter:8e3,slideCallback:null,isShowTitle:!0,isShowPager:!0,inited:null,initIndex:0,pullRatio:3,isLoop:!1}}(window,$)},{}],16:[function(t,e,n){!function(t,e){e.fn.flip=function(t){return this.each(function(){function n(){l.addClass("pi-flip"),f.eq(0).addClass("visible"),"function"==typeof u&&u(0),i()}function i(){function t(t){t.style.cssText=""}function n(n){var i;"number"==typeof n?f.each(function(t){var a=e(this);t===v?(i=o?"rotate3d(1,0,0,"+-n+"deg)":"rotate3d(0,1,0,"+n+"deg)",a.css({transform:i})):(i=o?"rotate3d(1,0,0,"+(180-n)+"deg)":"rotate3d(0,1,0,"+-(180-n)+"deg)",a.css({transform:i}))}):(h=!0,e.isFunction(u)&&u(v),f.each(function(t){var a=e(this);t===v?(i=o?"rotate3d(1,0,0,"+-(n?0:-360)+"deg)":"rotate3d(0,1,0,"+(n?0:-360)+"deg)",a.addClass("visible").css({transform:i})):(i=o?"rotate3d(1,0,0,"+-(n?180:-180)+"deg)":"rotate3d(0,1,0,"+(n?180:-180)+"deg)",a.removeClass("visible").css({transform:i}))}),setTimeout(function(){f.addClass("notrans").each(function(){t(this)}),h=!1},g))}var i,a,d,h,p=f.length,v=0,g=1e3*parseFloat(f.css("transition-duration"));l.on("touchstart",function(t){var e=t.targetTouches?t.targetTouches[0]:t;i=e.pageX,a=e.pageY,d=0,f.addClass("notrans")}),l.on("touchmove",function(t){var e=t.targetTouches?t.targetTouches[0]:t,r=e.pageX-i,u=Math.abs(r),l=e.pageY-a,f=Math.abs(l);o?(s>u||f>u)&&(t.preventDefault(),t.stopPropagation(),!h&&n(d=l/c)):(s>f||u>f)&&(t.preventDefault(),t.stopPropagation(),!h&&n(d=r/c))}),l.on("touchend",function(){h||(Math.abs(d)>r?(d>0&&-1===--v?v=p-1:0>d&&++v===p&&(v=0),f.removeClass("notrans"),n(d>0)):0!==d&&(f.eq(v).removeClass("notrans"),t(f[v])))})}var a=e.extend({},e.fn.flip.defaults,t),o=a.isVertical,r=a.swipThreshold,s=a.swipSpanThreshold,c=a.rate,u=a.slideCallback,l=e(this),f=l.children("*");n()})},e.fn.flip.defaults={isVertical:!1,swipThreshold:60,swipSpanThreshold:10,rate:1.3,slideCallback:null}}(window,$)},{}],17:[function(t,e,n){!function(t,e){e.fn.piccut=function(n){var i=t.URL||t.webkitURL;return this.each(function(){function t(){k.addClass("pi-piccut").html('<canvas class="pi-piccut-canvas" width="'+q+'" height="'+$+'" style="width:'+S+'px;"></canvas><canvas class="pi-piccut-mask" width="'+q+'" height="'+$+'" style="width:'+S+'px;"></canvas><p class="pi-piccut-cutter"><b class="pi-piccut-resizer"></b></p>'),o=T.getElementsByClassName("pi-piccut-canvas")[0],r=o.getContext("2d"),s=T.getElementsByClassName("pi-piccut-mask")[0],c=s.getContext("2d"),u=T.getElementsByClassName("pi-piccut-cutter")[0],l=e(u),f=e(T.getElementsByClassName("pi-piccut-resizer")[0]),a()}function a(){function t(){l.css({transform:"translate3d("+o+"px, "+s+"px, 0)",width:u+"px",height:I+"px"}),c.clearRect(0,0,q,$),c.globalCompositeOperation="source-over",c.fillStyle=b,c.fillRect(0,0,q,$),c.globalCompositeOperation="destination-out",c.fillStyle="#fff",c.fillRect(o*w,s*w,u*w,I*w)}var e,n,a,o=h,s=p,u=v,I=g;m.onchange=function(){var e=m.files[0],n=i.createObjectURL(e);h=d.cutX,p=d.cutY,v=d.cutWidth,g=d.cutHeight;var a=new Image;a.src=n,a.onload=function(){var e=a.width,n=a.height;if(x){var i=e/n;i>q/$?e>q&&(e=q,n=e/i):n>$&&(n=$,e=n*i)}r.clearRect(0,0,q,$),r.drawImage(a,(q-e)/2,($-n)/2,e,n),setTimeout(function(){t()},0),k.addClass("on")}},T.getDataURL=function(){if(!m.value)return void alert("请选择图片");var t=r.getImageData(h*w,p*w,v*w,g*w),e=document.createElement("canvas");return e.width=v*w,e.height=g*w,e.getContext("2d").putImageData(t,0,0),e.toDataURL("image/png")},k.on("touchstart",function(t){var i=t.targetTouches[0];e=i.pageX,n=i.pageY}),k.on("touchmove",function(i){if(a){i.preventDefault(),i.stopPropagation();var r=i.targetTouches[0],c=r.pageX-e,l=r.pageY-n;u=v+c,I=g+l,C?(v/I>P?I=u/P:u=I*P,s+I>E&&(I=E-s,u=I*P),o+u>S&&(u=S-o,I=u/P)):(s+I>E&&(I=E-s),o+u>S&&(u=S-o)),y&&I<d.cutHeight&&(I=d.cutHeight),y&&u<d.cutWidth&&(u=d.cutWidth),t()}}),l.on("touchmove",function(i){if(!a){i.preventDefault(),i.stopPropagation();var r=i.targetTouches[0],c=r.pageX-e,l=r.pageY-n;o=h+c,0>o&&(o=0),o+u>S&&(o=S-u),s=p+l,0>s&&(s=0),s+I>E&&(s=E-I),t()}}),k.on("touchend",function(){h=o,p=s,v=u,g=I}),f.on("touchstart",function(){a=!0}),f.on("touchend",function(){a=!1})}var o,r,s,c,u,l,f,d=e.extend({},e.fn.piccut.defaults,n),h=d.cutX,p=d.cutY,v=d.cutWidth,g=d.cutHeight,m=d.fileEl,b=d.layerStyle,x=d.isContain,C=d.isKeepScale,y=d.isMinLimit,w=d.scale,T=this,k=e(T),S=T.offsetWidth,E=T.offsetHeight,q=S*w,$=E*w,P=v/g;void 0===h&&(h=d.cutX=(S-v)/2),void 0===p&&(p=d.cutY=(E-g)/2),t()})},e.fn.piccut.defaults={cutX:void 0,cutY:void 0,cutWidth:320,cutHeight:320,fileEl:null,layerStyle:"rgba(128,128,128,0.7)",isContain:!0,isKeepScale:!0,isMinLimit:!0,scale:1}}(window,$)},{}],18:[function(t,e,n){!function(t,e){e.fn.picpager=function(n){return this.each(function(){function i(){p.addClass("pi-picpager").html('<div class="pi-wrap"><div class="pi-pic"></div><div class="pi-pic"></div><div class="pi-pic"></div></div>'),r=p.find(".pi-wrap"),o=p.find(".pi-pic").each(function(t){e(this).html(h(c[t-1]))}),a()}function a(){function n(t){switch(t){case 1:case-1:b=!0,i(C*t),setTimeout(function(){r.addClass("notrans"),i(0),o.each(function(t){e(this).html(h(c[y+t-1]))}),b=!1},w);break;default:i(0)}"function"==typeof f&&f.call(o,y,t)}function i(t){r.css({transform:"translate3d("+t+"px,0,0)"})}var a,s,m,b,x,C=p.width(),y=0,w=1e3*parseFloat(r.css("transition-duration"));v.slideToIndex=function(t,e){var i;"number"!=typeof t||0>t||t>=g||t===y||(t>y?(i=-1,o.eq(2).html(h(c[t]))):(i=1,o.eq(0).html(h(c[t]))),y=t,e?r.addClass("notrans"):r.removeClass("notrans"),n(i))},v.addItem=function(t){c=c.concat(t),g=c.length},p.on("touchstart",function(t){var e=t.targetTouches?t.targetTouches[0]:t;a=e.pageX,s=e.pageY,m=0,x=!1,r.addClass("notrans")}),p.on("touchmove",function(t){if(b)return t.preventDefault(),void t.stopPropagation();var e=t.targetTouches?t.targetTouches[0]:t,n=e.pageX-a,o=Math.abs(n),r=e.pageY-s,c=Math.abs(r);(x||l>c&&o>c)&&(t.preventDefault(),t.stopPropagation(),(0===y&&n>0||y===g-1&&0>n)&&(n/=d),i(m=n),x=!0)}),p.on("touchend",function(){if(!b){var t;-u>m?++y===g?y=g-1:t=-1:m>u&&(--y<0?y=0:t=1),r.removeClass("notrans"),0!==m&&n(t)}}).trigger("touchend"),t.addEventListener("resize",function(){var t=p.width();t>0&&(C=t)},!1)}var o,r,s=e.extend({},e.fn.picpager.defaults,n),c=s.imgData,u=s.swipThreshold,l=s.swipSpanThreshold,f=s.slideCallback,d=s.pullRatio,h=s.contentFormate,p=e(this),v=this,g=c.length;i()})},e.fn.picpager.defaults={imgData:null,swipThreshold:100,swipSpanThreshold:10,slideCallback:null,pullRatio:3,contentFormate:function(t){return t?'<div style="background: url('+t+') center center no-repeat; background-size: contain; width: 100%; height: 100%;"></div>':""}}}(window,$)},{}],19:[function(t,e,n){!function(t,e){e.fn.scratchcard=function(t){return this.each(function(){function n(){var t='<canvas style="width: 100%; height: 100%;" width="'+x+'" height="'+C+'"></canvas>';b.css({position:"relative","background-image":"url("+g+")","background-size":"100% auto"}).html(t),r=b.find("canvas"),r.css({position:"absolute",top:0,left:0}),u=b.children("canvas")[0].getContext("2d"),i(),a()}function i(){if(u.fillStyle=d,u.fillRect(0,0,x,C),h){u.fillStyle=p,v&&(u.font=v);var t=u.measureText(h).width;u.fillText(h,l.left||(x-t)/2,l.top||C/2+20,x)}}function a(){r.on("touchstart",function(t){var e=b.offset();s=e.left,c=e.top,u.fillStyle="#fff",u.globalCompositeOperation="destination-out",u.beginPath(),o(t)}),r.on("touchmove",function(t){t.preventDefault(),t.stopPropagation(),o(t)}),r.on("touchend",function(t){u.globalCompositeOperation="source-over"})}function o(t){var e=t.targetTouches[0];u.arc((e.pageX-s)*m,(e.pageY-c)*m,f*m,0,2*Math.PI,!0),u.closePath(),u.fill()}var r,s,c,u,l=e.extend({},e.fn.scratchcard.deflunt,t),f=l.fineness,d=l.paintStyle,h=l.text,p=l.fontColor,v=l.font,g=l.imgSrc,m=l.scale,b=e(this),x=b.width()*m,C=b.height()*m;n()})},e.fn.scratchcard.deflunt={fineness:30,paintStyle:"#ccc",text:"",fontColor:"#f00",font:"bold 60px sans-serif",imgSrc:"",scale:1}}(window,$)},{}],20:[function(t,e,n){!function(t,e){e.fn.scroll=function(n){function i(t,e,n){var i=a.abs(t)/e;return i*i*n}var a=t.Math;return this.each(function(){function o(){g.addClass("pi-scroll-item"),r()}function r(){function e(){var t=c?g.height()+parseFloat(g.css("margin-top"))+parseFloat(g.css("margin-bottom")):g.width()+parseFloat(g.css("margin-left"))+parseFloat(g.css("margin-right")),e=c?v.height()-parseFloat(v.css("padding-top"))-parseFloat(v.css("padding-bottom")):v.width()-parseFloat(v.css("padding-left"))-parseFloat(v.css("padding-right"));return t-e}function n(t){t>0?t/=2:-C>t&&(t+=(-t-C)/2);var e="translate3d("+(c?"0,"+(x=t)+"px,0":(x=t)+"px,0,0")+")";g.css({transform:e})}function o(t){var e=c?t.offsetTop-g[0].offsetTop-(v.height()-t.clientHeight)/2:t.offsetLeft-g[0].offsetLeft-(v.width()-t.clientWidth)/2;n(0>e?0:C>e?-e:-C)}var r,s,m,b={},x=0,C=e();v[0].center=o,v.on("touchstart",function(t){var e=t.targetTouches?t.targetTouches[0]:t;b.startTime=t.timeStamp,b.startX=r=e.pageX,b.startY=s=e.pageY,m=x,g.addClass("notrans")}),v.on("touchmove",function(t){var e=t.targetTouches?t.targetTouches[0]:t,i=e.pageX,o=e.pageY,u=i-r,f=a.abs(u),d=o-s,h=a.abs(d),v=t.timeStamp;c?(l>f||h>f)&&(t.preventDefault(),t.stopPropagation(),n(m+d)):(l>h||f>h)&&(t.preventDefault(),t.stopPropagation(),n(m+u)),v-b.startTime>p&&(b.startTime=v,b.startX=i,b.startY=o)}),v.on("touchend",function(t){var e=t.changedTouches?t.changedTouches[0]:t,a=c?e.pageY-b.startY:e.pageX-b.startX,o=t.timeStamp-b.startTime,r=o>u?0:i(a,o,h);r>f&&(r=f),g.removeClass("notrans"),0>a?n(C>-(x-r)?x-r:-C):a>0&&n(0>x+r?x+r:0)}),d&&v.on("click",function(t){o(t.target)}),t.addEventListener("resize",function(){var t=v.width();t>0&&(C=e())},!1)}var s=e.extend({},e.fn.scroll.defaults,n),c=s.isVertical,u=s.timeSpanThreshold,l=s.swipSpanThreshold,f=s.maxScroll,d=s.isAdjust,h=s.reviseRatio,p=s.touchDuration,v=e(this),g=v.children("*");o()})},e.fn.scroll.defaults={isVertical:!1,timeSpanThreshold:300,swipSpanThreshold:10,maxScroll:800,isAdjust:!1,reviseRatio:400,touchDuration:300}}(window,$)},{}],21:[function(t,e,n){!function(t,e){e.fn.turntable=function(t){return this.each(function(){function n(){a=e('<div class="pi-pointer"></div>'),f.addClass("pi-turntable").prepend(a),i()}function i(){var t,e;d.turnToIndex=function(n,i){if(!(n>r||e)){var o=c/1e3+"s "+u,f=s+n/r*360+l+"deg",d="rotateZ("+f+")";a[0].style.cssText="",e=!0,setTimeout(function(){a.css({transform:d});var n=a[0];n.style["-webkit-transition"]="-webkit-transform "+o,n.style.transition="transform "+o,clearTimeout(t),t=setTimeout(function(){"function"==typeof i&&i(),e=!1},c)},40)}}}var a,o=e.extend({},e.fn.turntable.defaults,t),r=o.count,s=o.rotateDeg,c=o.duration,u=o.timeFx,l=o.offset,f=e(this),d=this;n()})},e.fn.turntable.defaults={count:12,rotateDeg:3600,duration:7e3,timeFx:"cubic-bezier(0.42,0,0.25,1)",offset:0}}(window,$)},{}],22:[function(t,e,n){!function(t,e){var n=t.document,i=e(n),a=e(n.body),o=e("#mainbox");e.isShowQrcode=!0,e.isBodyScroll="hidden"!==o.css("overflow"),e.isBodyScroll||(a.addClass("very-high"),t.scrollTo(0,1),a.removeClass("very-high"));var r=navigator.userAgent;e.isMobi=/(iPhone|iPod|iPad|android)/i.test(r),e.isAndroid=/(android)/i.test(r),e.isIos=/(iPhone|iPod|iPad)/i.test(r),e.toggleMask=function(t){t?a.addClass("onmask"):a.removeClass("onmask")},e(function(){setTimeout(function(){a.addClass("loaded")},100),i.on("touchstart","a",function(){e(this).addClass("focus")}),i.on("touchend touchmove","a",function(){e(this).removeClass("focus")}),e.isShowQrcode&&!e.isMobi&&e.getScript("http://img.gd.sohu.com/static/v3/qrcode.js",function(){var t=e("#qrcode");0===t.length&&(t=e('<div id="qrcode"></div>'),a.append(t),new QRCode(t[0],{width:t.width(),height:t.height(),text:location.href})),i.on("click","#qrcode",function(){t.hide()})}),!e.isMobi&&e.getScript("http://img.gd.sohu.com/static/v3/desktouch.js")})}(window,$)},{}],23:[function(t,e,n){!function(t,e){var n=t.document,i=e(n),a=n.body,o=e(a),r=e("#mainbox");e.homeSelector="#home",e.isBodyScroll&&e.isIos&&e(t).on("resize",function(){var t=e("#header,#navbar");return function(){t.css({width:a.offsetWidth+"px"})}}()).trigger("resize"),e.toggleHeader=function(t){t?r.removeClass("offheader"):r.addClass("offheader")},e.toggleNavbar=function(t){t?r.removeClass("offnavbar"):r.addClass("offnavbar")},e.setTitle=function(){var t=e(".roottitle .title");return function(e){e&&t.html(e)}}(),e.setSubtitle=function(){var t=e(".subtitle .title");return function(e){e&&t.html(e)}}(),e.loadPanel=function(){function t(t,n){!n&&t.removeClass("show"),"paneliframe"===t[0].id&&t.html("");var i=e.panelUnloaded;"function"==typeof i&&i(t)}var i=e("#navbar a"),s=n.querySelector(".navbox"),c=e(".panel"),u=1e3*parseFloat(c.css("transition-duration")),l=e.history=[],f=e("#header");e.isLoadAnimation=!0;var d=function(){var t={};return function(n,i){e.isBodyScroll&&(i?t[n]=a.scrollTop:a.scrollTop=t[n]||0)}}(),h=function(){var t={};return function(n,i){var a=n[0].id;n.addClass("show opened"),setTimeout(function(){!i&&d(a)},0);var o=e.panelLoaded;"function"==typeof o&&o(n,!t[a]),t[a]=!0}}();return e.toggleSidebox=function(){var n=e("#sidebox");return function(i){var a=e.history[e.history.length-1];i?(o.addClass("onsidebox"),h(n),t(a,!0)):(o.removeClass("onsidebox"),t(n),h(a,!0))}}(),function(n,a){var o,c;if(void 0===n?(c=l.pop(),o=l[l.length-1]||e(e.homeSelector),n="#"+o[0].id):(o=e(n),o.length>0&&(c=l[l.length-1],l.push(o))),o.length>0){i.length>0&&i.each(function(){for(var t=(this.getAttribute("data-hash")||this.hash).split("|"),a=0,o=t.length;o>a;a++)t[a]===n&&(i.removeClass("selected"),e(this).addClass("selected"),s.center(this))});var p=o.attr("data-role");if("root"===p?(e.setTitle(o.attr("title")),e.toggleNavbar(!0),f.removeClass("onsubtitle")):(e.setSubtitle(o.attr("title")),e.toggleNavbar(!1),f.addClass("onsubtitle")),!c)return void h(o);if("#"+c[0].id!==n){var v=c.attr("data-role");d(c[0].id,1);var g=void 0===a?e.isLoadAnimation:a;if(!g||"root"===p&&"root"===v)return o.addClass("notrans"),c.addClass("notrans"),h(o),void t(c);o.addClass("show"),r.addClass("reflow"),setTimeout(function(){o.removeClass("notrans"),c.removeClass("notrans"),"root"===p?(o.removeClass("subopened"),c.removeClass("opened")):o.hasClass("subopened")?(o.removeClass("subopened"),c.removeClass("opened")):c.addClass("subopened").removeClass("opened"),h(o),setTimeout(function(){setTimeout(function(){r.removeClass("reflow")},400),t(c)},u)},10)}}else console.log(n+"面板未找到")}}(),e(function(){i.on("click",".btn-onsidebox",function(){e.toggleSidebox(1)}),i.on("click",".btn-offsidebox",function(){e.toggleSidebox(0)});var t=e("#paneliframe");0===t.length&&(t=e('<div id="paneliframe" class="panel"></div>'),r.append(t)),i.on("click","a",function(n){var i=this.hash;if(i)return n.preventDefault(),
void e.loadPanel(i);var a=this.getAttribute("data-href"),o=this.getAttribute("data-title");a&&(n.preventDefault(),t.html('<iframe src="'+a+'"></iframe>'),e.setSubtitle(o||"详情"),e.loadPanel("#paneliframe"))}),i.on("click","#btn-goback",function(){e.loadPanel()});var n=e(".navbox");n.length>0&&n.scroll();var a=location.hash;e.loadPanel(a||e.homeSelector)})}(window,$)},{}]},{},[2]);