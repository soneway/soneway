require=function t(e,n,i){function a(r,s){if(!n[r]){if(!e[r]){var c="function"==typeof require&&require;if(!s&&c)return c(r,!0);if(o)return o(r,!0);throw new Error("Cannot find module '"+r+"'")}var l=n[r]={exports:{}};e[r][0].call(l.exports,function(t){var n=e[r][1][t];return a(n?n:t)},l,l.exports,t,e,n,i)}return n[r].exports}for(var o="function"==typeof require&&require,r=0;r<i.length;r++)a(i[r]);return a}({1:[function(t,e,n){var i=t("jq");t("base"),t("ui"),t("customalert"),t("scroll"),window.alert=function(t){i.customalert({content:t})},i.panelLoaded=function(t,e){var n=a[t.attr("id")];"function"==typeof n&&n(t,e)},i.panelUnloaded=function(t){var e=(a[t.attr("id")]||{}).unload;"function"==typeof e&&e(t)};var a={carousel:t("./page/carousel.js"),flip:t("./page/flip.js"),picpager:t("./page/picpager.js"),scroll:t("./page/scroll.js"),scratchcard:t("./page/scratchcard.js"),turntable:t("./page/turntable.js"),swatchbook:t("./page/swatchbook.js")}},{"./page/carousel.js":2,"./page/flip.js":3,"./page/picpager.js":4,"./page/scratchcard.js":5,"./page/scroll.js":6,"./page/swatchbook.js":7,"./page/turntable.js":8,base:19,customalert:12,jq:"U94cel",scroll:16,ui:20}],2:[function(t,e,n){t("carousel"),e.exports=function(t,e){if(e){$(".carousel").each(function(){for(var t=this.getAttribute("data-len"),e=this.getAttribute("data-part"),n="",i=0;t>i;i++)n+='<a style="background: url(img/'+(e?e+"/":"")+i+'.jpg) center center no-repeat; background-size: cover;" data-title="焦点图示例 '+(i+1)+'"></a>';$(this).html(n).carousel({isVertical:"1"===this.getAttribute("data-isvertical"),isAutoPlay:!1})});for(var n="",i=0,a=5;a>i;i++)n+='<img src="img/'+i+'.jpg"/>';$("#img_car").html(n).carousel()}},e.exports.unload=function(){console.log("carousel unload")}},{carousel:11}],3:[function(t,e,n){t("flip"),e.exports=function(t,e){e&&$(".flip").each(function(){for(var t=this.getAttribute("data-len"),e=this.getAttribute("data-part"),n="",i=0;t>i;i++)n+='<a><p style="background: url(img/'+(e?e+"/":"")+i+'.jpg) center center no-repeat; background-size: cover;" data-title="3d旋转切换示例 '+(i+1)+'"></p></a>';$(this).html(n).flip({isVertical:"1"===this.getAttribute("data-isvertical")})})}},{flip:13}],4:[function(t,e,n){t("picpager"),e.exports=function(t,e){e&&$.jsonp("http://img.gd.sohu.com/static/v1/jtool.js",function(){var t=1,e=10,n=jtool.proxy;n.pushData({url:"http://app.gd.sohu.com/minisite/xtep/20140530/get.php?act=list&page="+t+"&perpage="+e+"&order=0&code=aa1c9153608a7755b7c20e97c0eade27",success:function(i){var a=$(".picpager").picpager({imgData:i.data.detail,imgAttrName:"image",slideCallback:function(i){i+1===10*t&&(t++,n.pushData({url:"http://app.gd.sohu.com/minisite/xtep/20140530/get.php?act=list&page="+t+"&perpage="+e+"&order=0&code=aa1c9153608a7755b7c20e97c0eade27",success:function(t){a[0].addItem(t.data.detail)}}))}})}})})}},{picpager:14}],5:[function(t,e,n){t("scratchcard"),e.exports=function(t,e){e&&$(".scratchcard").each(function(){$(this).scratchcard({text:"刮开有奖",imgSrc:"img/3.jpg"})})}},{scratchcard:15}],6:[function(t,e,n){t("scroll"),e.exports=function(t,e){e&&$(".scroll").each(function(){$(this).scroll({isVertical:"1"===this.getAttribute("data-isvertical")})})}},{scroll:16}],7:[function(t,e,n){t("swatchbook"),e.exports=function(t,e){e&&$(".swatchbook").each(function(){$(this).swatchbook({angleInc:25,neighbor:15,proximity:80,initIsClosed:!0,closeIdx:12,selectCallback:function(t){console.log(t)}})})}},{swatchbook:17}],8:[function(t,e,n){t("turntable");var i=$(window.document);e.exports=function(t,e){if(e){var n=$(".turntable").turntable({count:10})[0];i.on("click",".turntable .btn_start",function(){var t=parseInt(10*Math.random());n.turnToIndex(t,function(){alert(t+1)})})}}},{turntable:18}],U94cel:[function(t,e,n){(function(t){(function(t,e,n,i){!function(i){var a=function(){function t(t){if(this.length=0,!t)return this;if("string"==typeof t){if("#"===t[0]){var n=t.slice(1);if(p.test(n)){var a=l.getElementById(n);return a&&(this[this.length++]=a),this}}if("."===t[0]){var o=t.slice(1);if(p.test(o))return e(l.getElementsByClassName(o),this)}if("<"===t[0]&&">"===t[t.length-1]){var r=l.createElement("div");return r.innerHTML=t,e(r.childNodes,this)}return e(l.querySelectorAll(t),this)}return t instanceof Node||t===i?(this[this.length++]=t,this):t instanceof NodeList||c.isArray(t)?e(t,this):"function"==typeof t?c().ready(t):void 0}function e(t,e){return t?(n(t,function(t){e[e.length++]=t}),e):e}function n(t,e){for(var n=0,i=t.length;i>n;n++)e(t[n])}function a(t,e){if(void 0===e)return c(t);var i=[];return n(t,function(t){m(t,e)&&i.push(t)}),c(i)}function o(t,e,i,a){n(e.split(v),function(e){void 0===a?t.addEventListener(e,i,!1):t.addEventListener(e,function(e){var n=c(e.target).closest(a,t)[0];n&&i.call(n,e)},!1)})}function r(t,e,i){n(e.split(v),function(e){t.removeEventListener(e,i,!1)})}function s(t,e){var n=l.createEvent("Events");if(n.initEvent(t,!0,!0),e)for(var i in e)void 0===n[i]&&(n[i]=e[i]);return n}var c=function(e){return new t(e)},l=i.document,u={}.toString,f=[],d=f.slice,h=f.indexOf,p=/^[\w-]*$/,v=/\s+/g,g=function(){var t={};return function(e){return t[e]||(t[e]=new RegExp("(^|\\s)"+e+"(\\s|$)"))}}(),m=function(){var t=l.body;return t.matchesSelector?function(t,e){return t.matchesSelector(e)}:t.webkitMatchesSelector?function(t,e){return t.webkitMatchesSelector(e)}:t.msMatchesSelector?function(t,e){return t.msMatchesSelector(e)}:t.mozMatchesSelector?function(t,e){return t.mozMatchesSelector(e)}:void 0}();return n(["Object","Array","Function"],function(t){c["is"+t]=function(e){return u.call(e)==="[object "+t+"]"}}),c.extend=function(t){if(void 0===t)return this;if(1===arguments.length){for(var e in t)this[e]=t[e];return this}return n(d.call(arguments,1),function(e){for(var n in e)t[n]=e[n]}),t},c.fn=t.prototype={constructor:t,forEach:function(t){for(var e=0,n=this.length;n>e;e++)t(this[e],e);return this},each:function(t){return this.forEach(function(e,n){t.call(e,n)})},ready:function(t){var e=l.readyState;return"complete"===e||"loaded"===e||"interactive"===e?t():l.addEventListener("DOMContentLoaded",t,!1),this},filter:function(t){return a(this,t)},siblings:function(t){var e=[];return this.forEach(function(t){var i=t.parentNode;i&&n(i.children,function(n){n!==t&&-1===e.indexOf(n)&&e.push(n)})}),a(e,t)},not:function(t){var e=[];return this.forEach(function(n){!m(n,t)&&e.push(n)}),c(e)},find:function(t){var e=[];return this.forEach(function(i){n(i.querySelectorAll(t),function(t){-1===e.indexOf(t)&&e.push(t)})}),c(e)},eq:function(t){return c(this[t])},children:function(t){var e=[];return this.forEach(function(t){n(t.children,function(t){e.push(t)})}),a(e,t)},parent:function(t){var e=[];return this.forEach(function(t){var n=t.parentNode;n&&n!==l&&-1===e.indexOf(n)&&e.push(n)}),a(e,t)},parents:function(t){var e=[];return this.forEach(function(t){for(var n=t.parentNode;n;)n!==l&&-1===e.indexOf(n)&&e.push(n),n=n.parentNode}),a(e,t)},closest:function(t,e){for(var n=this[0];n&&!m(n,t);){var i=n.parentNode;n=i===l?null:n!==e&&i}return c(n)},index:function(e){return e instanceof t&&(e=e[0]),e?h.call(this,e):h.call(this[0].parentNode.children,this[0])},html:function(t){return void 0===t?this[0].innerHTML:this.forEach(function(e){e.innerHTML=t})},text:function(t){return void 0===t?this[0].textContent:this.forEach(function(e){e.textContent=t})},empty:function(){return this.html("")},val:function(t){return void 0===t?this[0].value:this.forEach(function(e){e.value=t})},attr:function(t,e){return"string"==typeof t&&void 0===e?this[0].getAttribute(t):this.forEach(function(n){if(c.isObject(t))for(var i in t)n.setAttribute(i,t[i]);else n.setAttribute(t,e)})},removeAttr:function(t){return this.forEach(function(e){n(t.split(v),function(t){e.removeAttribute(t)})})},css:function(t,e){if("string"==typeof t&&void 0===e){var n=i.getComputedStyle(this[0]);return n[t]}return this.forEach(function(n){var i=n.style;if(c.isObject(t))for(var a in t)i[a]=t[a];else i[t]=e})},show:function(){return this.forEach(function(t){var e=t.getAttribute("data-display")||"block";"none"===e&&(e="block"),t.style.display=e,t.removeAttribute("data-display")})},hide:function(){return this.forEach(function(t){t.setAttribute("data-display",c(t).css("display")),t.style.display="none"})},fadeIn:function(){return this.forEach(function(t){c(t).removeClass("fade-out").addClass("fade-in")})},fadeOut:function(){return this.forEach(function(t){c(t).removeClass("fade-in").addClass("fade-out")})},append:function(e,n){var i=e instanceof t?e:c(e);return this.forEach(function(t){i.forEach(function(e){n?t.insertBefore(e,t.firstChild):t.appendChild(e)})})},prepend:function(t){return this.append(t,!0)},appendTo:function(e){var n=e instanceof t?e:c(e);n.append(this)},prependTo:function(e){var n=e instanceof t?e:c(e);n.append(this,!0)},offset:function(){var t=this[0];return t===i?{left:0,top:0,right:0,bottom:0,width:i.innerWidth,height:i.innerHeight}:t.getBoundingClientRect()},width:function(){var t=this[0];return t===i?i.innerWidth:t.offsetWidth},height:function(){var t=this[0];return t===i?i.innerHeight:t.offsetHeight},is:function(t){var e=this[0];return t&&m(e,t)},addClass:function(t){return this.forEach(function(e){var i=e.className,a=[];n(t.split(v),function(t){!c(e).hasClass(t)&&a.push(t)}),a.length>0&&(e.className+=(i?" ":"")+a.join(" "))})},removeClass:function(t){return this.forEach(function(e){if(void 0===t)return void(e.className="");var i=e.className;n(t.split(v),function(t){i=i.replace(g(t)," ")}),e.className=i.trim()})},hasClass:function(t){return g(t).test(this[0].className)}},c.fn.extend=function(t){c.extend.call(this,t)},c.fn.extend({bind:function(t,e){return this.forEach(function(n){o(n,t,e)})},unbind:function(t,e){return this.forEach(function(n){r(n,t,e)})},delegate:function(t,e,n){return this.forEach(function(i){o(i,t,n,e)})},on:function(t,e,n){return"function"==typeof e?this.bind(t,e):this.delegate(t,e,n)},off:function(t,e){return this.unbind(t,e)},trigger:function(t,e){return t=s(t,e),this.forEach(function(e){e.dispatchEvent(t)})}}),n(["click","touchstart","touchmove","touchend","submit","load","resize","change","select"],function(t){c.fn[t]=function(e){return e?this.bind(t,e):this.trigger(t)}}),c.jsonp=function(){var t=l.getElementsByTagName("head")[0];return function(e,n){var i=/(\.js)$/.test(e),a=l.createElement("script");a.type="text/javascript",a.onload=function(){"function"==typeof n&&n(),!i&&t.removeChild(a)},a.src=e,t.appendChild(a)}}(),c.ajax=function(){function t(t){var e=[];for(var n in t)e.push(n+"="+t[n]);return e.join("&")}var e={method:"get",async:!0};return function(n){n=c.extend({},e,n);var i=new XMLHttpRequest;i.open(n.method,n.url,n.async);var a=n.header;if(a)for(var o in a)i.setRequestHeader(o,a[o]);i.onreadystatechange=function(){if(4===i.readyState&&200===i.status){var t=n.callback;"function"==typeof t&&t(i.responseText)}},i.send(t(n.data))}}(),c}();return"object"==typeof e?void(t.exports=a):"function"==typeof n?void n(function(){return a}):void(i.jq=i.$=a)}(window),i("undefined"!=typeof $?$:window.$)}).call(t,void 0,void 0,void 0,function(t){e.exports=t})}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],jq:[function(t,e,n){e.exports=t("U94cel")},{}],11:[function(t,e,n){!function(t,e){e.fn.carousel=function(n){return e.fn.carousel.defaults={isVertical:!1,swipThreshold:50,isAutoPlay:!0,autoPlayInter:8e3,slideCallback:null,isShowTitle:!0,isShowPager:!0},this.each(function(){function i(){C.addClass("pi-carousel").html('<div class="pi-carousel-wrap">'+C.html()+"</div>"+(m?'<div class="pi-carousel-title"></div>':"")),o=C.find(".pi-carousel-wrap"),r=o[0].style,s=o.children("*"),c=s.length,d&&C.addClass("vertical"),l=C.find(".pi-carousel-title");var t="";if(b){t+='<div class="pi-carousel-pager">';for(var e=0,n=c;n>e;e++)t+="<span></span>";t+="</div>"}u=C.append(t).find(".pi-carousel-pager span"),a()}function a(){function n(){f=C.width(),m=C.height(),d?(r.height=m*c+"px",s.css("height",m+"px")):(r.width=f*c+"px",s.css("width",f+"px"))}function i(){p&&(b=setInterval(function(){++T===c&&(T=0),a()},v))}function a(t){var e,n=-T*(d?m:f);if("number"==typeof t)0===T&&t>0&&(t/=2),T===c-1&&0>t&&(t/=2),n+=t;else{"function"==typeof g&&g(T);var i=s.removeClass("current").eq(T).addClass("current").attr("data-title");l.removeClass("visible"),i&&setTimeout(function(){l.addClass("visible").html(i)},200),u.removeClass("selected").eq(T).addClass("selected")}e="translate3d("+(d?"0,"+n+"px,0":n+"px,0,0")+")",o.css({"-webkit-transform":e,transform:e})}var f,m,b,x,y,k,T=0;n(),w.slideToIndex=function(t){T=t,a()},w.prev=function(){--T<0&&(T=c-1),a()},w.next=function(){++T===c&&(T=0),a()},C.on("touchstart",function(t){var e=t.targetTouches[0];x=e.pageX,y=e.pageY,k=0,o.removeClass("transform"),p&&clearInterval(b)}),C.on("touchmove",function(t){var e=t.targetTouches[0],n=e.pageX-x,i=e.pageY-y;d?Math.abs(i)>Math.abs(n)&&(t.preventDefault(),t.stopPropagation(),a(k=i)):Math.abs(n)>Math.abs(i)&&(t.preventDefault(),t.stopPropagation(),a(k=n))}),C.on("touchend",function(){k>h&&--T<0&&(T=0),-h>k&&++T===c&&(T=c-1),o.addClass("transform"),0!==k&&a(),i()}).trigger("touchend"),u.on("click",function(){var t=e(this).index();w.slideToIndex(t)}),t.addEventListener("resize",function(){var t=C.width();t>0&&(n(),a(0))},!1)}var o,r,s,c,l,u,f=e.extend({},e.fn.carousel.defaults,n),d=f.isVertical,h=f.swipThreshold,p=f.isAutoPlay,v=f.autoPlayInter,g=f.slideCallback,m=f.isShowTitle,b=f.isShowPager,C=e(this),w=this;i()})}}(window,$)},{}],12:[function(t,e,n){!function(t,e){var n,i,a,o,r,s,c,l,u=t.document,f=e(u),d=e("#customalert");!function(){0===d.length&&(d=e('<div id="customalert"><div class="box"><h1 id="customalert-title">提示</h1><p id="customalert-content">是否转到登陆</p><a id="customalert-btnok" class="btn">确定</a><a id="customalert-btncancel" class="btn">关闭</a></div></div>'),e(u.body).append(d)),n=e("#customalert-title"),i=e("#customalert-content"),a=e("#customalert-btnok"),o=e("#customalert-btncancel")}(),f.on("click","#customalert-btnok",function(){d.removeClass("visible"),"function"==typeof l&&l(),"function"==typeof r&&r()}),f.on("click","#customalert-btncancel",function(){d.removeClass("visible"),"function"==typeof l&&l(),"function"==typeof s&&s()}),e.customalert=function(t){t=t||{};var u=e.extend({},e.customalert.defaults,t),f=u.title,h=u.content,p=u.btnOkText,v=u.btnCancelText,g=u.isAlert;r=u.btnOkClick,s=u.btnCancelClick,c=u.onShow,l=u.onHide,g?d.addClass("alert"):d.removeClass("alert"),f&&n.html(f),h&&i.html(h),p&&a.text(p),v&&o.text(v),d.addClass("visible"),"function"==typeof c&&c()},e.customalert.defaults={title:"提示",content:"内容",btnOkText:"确定",btnOkClick:null,btnCancelText:"取消",btnCancelClick:null,isAlert:!0,onShow:null,onHide:null}}(window,$)},{}],13:[function(t,e,n){!function(t,e){e.fn.flip=function(t){return e.fn.flip.defaults={isVertical:!1,swipThreshold:40,rate:1.3,slideCallback:null},this.each(function(){function n(){l.addClass("pi-flip"),u.eq(0).addClass("visible"),"function"==typeof c&&c(0),i()}function i(){function t(t){t.style.cssText=""}function n(n){var i;"number"==typeof n?u.each(function(t){var a=e(this);t===p?(i=o?"rotate3d(1,0,0,"+-n+"deg)":"rotate3d(0,1,0,"+n+"deg)",a.css({"-webkit-transform":i,transform:i})):(i=o?"rotate3d(1,0,0,"+(180-n)+"deg)":"rotate3d(0,1,0,"+-(180-n)+"deg)",a.css({"-webkit-transform":i,transform:i}))}):(d=!0,e.isFunction(c)&&c(p),u.each(function(t){var a=e(this);t===p?(i=o?"rotate3d(1,0,0,"+-(n?0:-360)+"deg)":"rotate3d(0,1,0,"+(n?0:-360)+"deg)",a.addClass("visible").css({"-webkit-transform":i,transform:i})):(i=o?"rotate3d(1,0,0,"+-(n?180:-180)+"deg)":"rotate3d(0,1,0,"+(n?180:-180)+"deg)",a.removeClass("visible").css({"-webkit-transform":i,transform:i}))}),setTimeout(function(){u.addClass("notrans").each(function(){t(this)}),d=!1},v))}var i,a,f,d,h=u.length,p=0,v=1e3*parseFloat(u.css("transition-duration")||u.css("-webkit-transition-duration"));l.on("touchstart",function(t){if(!d){var e=t.targetTouches[0];i=e.pageX,a=e.pageY,f=0,u.addClass("notrans")}}),l.on("touchmove",function(t){var e=t.targetTouches[0],r=e.pageX-i,c=e.pageY-a;o&&Math.abs(r)<Math.abs(c)&&(t.preventDefault(),t.stopPropagation(),!d&&n(f=c/s)),!o&&Math.abs(r)>Math.abs(c)&&(t.preventDefault(),t.stopPropagation(),!d&&n(f=r/s))}),l.on("touchend",function(e){d||(Math.abs(f)>r?(f>0&&-1===--p&&(p=h-1),0>f&&++p===h&&(p=0),u.removeClass("notrans"),n(f>0)):0!==f&&(u.eq(p).removeClass("notrans"),t(u[p])))})}var a=e.extend({},e.fn.flip.defaults,t),o=a.isVertical,r=a.swipThreshold,s=a.rate,c=a.slideCallback,l=e(this),u=l.children("*");n()})}}(window,$)},{}],14:[function(t,e,n){!function(t,e){e.fn.picpager=function(n){return e.fn.picpager.defaults={imgData:null,imgAttrName:null,swipThreshold:40,slideCallback:null},this.each(function(){function i(){d.addClass("pi-picpager").html('<div class="pi-picpager-wrap"><div class="pi-picpager-pic"></div><div class="pi-picpager-pic"></div><div class="pi-picpager-pic"></div></div>'),r=d.find(".pi-picpager-wrap"),o=d.find(".pi-picpager-pic"),a()}function a(){function n(t){switch(r.removeClass("notrans"),t){case 1:case-1:m=!0;var n="translate3d("+(1===t?"":"-")+b+"px,0,0)";i(r,n),setTimeout(function(){i(r.addClass("notrans"),"translate3d(0,0,0)"),o.each(function(t){a(e(this),C+t-1)}),m=!1},w+100);break;default:i(r,"translate3d(0,0,0)")}"function"==typeof f&&f(C,t)}function i(t,e){t.css({"-webkit-transform":e,transform:e})}function a(t,e){var n=c[e];t.css({"background-image":n?"url("+(l?n[l]:n)+")":"none"})}var s,v,g,m,b=d.width(),C=0,w=1e3*parseFloat(r.css("transition-duration")||r.css("-webkit-transition-duration"));o.each(function(t){a(e(this),t-1)}),h.slideToIndex=function(t){var e;"number"!=typeof t||0>t||t>=p||t===C||(t>C?(e=-1,a(o.eq(2),t)):(e=1,a(o.eq(0),t)),C=t,n(e))},h.addItem=function(t){e.isArray(t)?c=c.concat(t):c.push(t),p=c.length},d.on("touchstart",function(t){var e=t.targetTouches[0];s=e.pageX,v=e.pageY,g=0,r.addClass("notrans")}),d.on("touchmove",function(t){if(m)t.preventDefault(),t.stopPropagation();else{var e=t.targetTouches[0],n=e.pageX-s,a=e.pageY-v;if(Math.abs(n)>Math.abs(a)){t.preventDefault(),t.stopPropagation(),0===C&&n>0&&(n/=2),C===p-1&&0>n&&(n/=2);var o="translate3d("+(g=n)+"px,0,0)";i(r,o)}}}),d.on("touchend",function(){if(!m){var t;g>u&&(--C<0?C=0:t=1),-u>g&&(++C===p?C=p-1:t=-1),0!==g&&n(t)}}).trigger("touchend"),t.addEventListener("resize",function(){var t=d.width();t>0&&(b=t)},!1)}var o,r,s=e.extend({},e.fn.picpager.defaults,n),c=s.imgData,l=s.imgAttrName,u=s.swipThreshold,f=s.slideCallback,d=e(this),h=this,p=c.length;i()})}}(window,$)},{}],15:[function(t,e,n){!function(t,e){e.fn.scratchcard=function(t){return e.fn.scratchcard.deflunt={fineness:15,paintStyle:"#ccc",text:"",fontColor:"#f00",font:"bold 60px sans-serif",imgSrc:"",scale:2},this.each(function(){function n(){var t='<canvas style="width: 100%; height: 100%;" width="'+C+'" height="'+w+'"></canvas>';b.css({position:"relative","background-image":"url("+g+")","background-size":"100% auto"}).html(t),r=b.find("canvas"),r.css({position:"absolute",top:0,left:0}),l=b.children("canvas")[0].getContext("2d"),i(),a()}function i(){if(l.fillStyle=d,l.fillRect(0,0,C,w),h){l.fillStyle=p,v&&(l.font=v);var t=l.measureText(h).width;l.fillText(h,u.left||(C-t)/2,u.top||w/2+20,C)}}function a(){r.on("touchstart",function(t){var e=b.offset();s=e.left,c=e.top,l.fillStyle="#fff",l.globalCompositeOperation="destination-out",l.beginPath(),o(t)}),r.on("touchmove",function(t){t.preventDefault(),t.stopPropagation(),o(t)}),r.on("touchend",function(t){l.globalCompositeOperation="source-over"})}function o(t){var e=t.targetTouches[0];l.arc((e.pageX-s)*m,(e.pageY-c)*m,f*m,0,2*Math.PI,!0),l.closePath(),l.fill()}var r,s,c,l,u=e.extend({},e.fn.scratchcard.deflunt,t),f=u.fineness,d=u.paintStyle,h=u.text,p=u.fontColor,v=u.font,g=u.imgSrc,m=u.scale,b=e(this),C=b.width()*m,w=b.height()*m;n()})}}(window,$)},{}],16:[function(t,e,n){!function(t,e){e.fn.scroll=function(n){return e.fn.scroll.defaults={isVertical:!1,rate:400,timeSpanThreshold:300,maxScroll:400,androidRate:2,isAdjust:!1},this.each(function(){function i(){h.addClass("pi-scroll-item"),a()}function a(){function e(){var t=r?h.height()+parseFloat(h.css("margin-top"))+parseFloat(h.css("margin-bottom")):h.width()+parseFloat(h.css("margin-left"))+parseFloat(h.css("margin-right")),e=r?d.height()-parseFloat(d.css("padding-top"))-parseFloat(d.css("padding-bottom")):d.width()-parseFloat(d.css("padding-left"))-parseFloat(d.css("padding-right"));C=t-e}function n(t){t>0&&(t/=2),-t>C&&(t+=(-t-C)/2);var e="translate3d("+(r?"0,"+(w=t)+"px,0":(w=t)+"px,0,0")+")";h.css({"-webkit-transform":e,transform:e})}function i(t){var e=r?t.offsetTop-h[0].offsetTop-(d.height()-t.clientHeight)/2:t.offsetLeft-h[0].offsetLeft-(d.width()-t.clientWidth)/2;n(0>e?0:C>e?-e:-C)}var a,o,v,g,m,b,C,w=0;e(),d[0].center=i,d.on("touchstart",function(t){var e=t.targetTouches[0];v=t.timeStamp,a=e.pageX,o=e.pageY,m=0,b=w,h.addClass("notrans")}),d.on("touchmove",function(t){var e=t.targetTouches[0],i=e.pageX-a,s=e.pageY-o;r&&Math.abs(i)<Math.abs(s)&&(t.preventDefault(),t.stopPropagation(),n(b+(m=s))),!r&&Math.abs(i)>Math.abs(s)&&(t.preventDefault(),t.stopPropagation(),n(b+(m=i)))}),d.on("touchend",function(t){g=t.timeStamp;var e=g-v,i=e>c?0:m/(p?e/=u:e),a=Math.abs(i)*s;a>l&&(a=l),h.removeClass("notrans"),0>m?n(C>-(w-a)?w-a:-C):m>0&&n(0>w+a?w+a:0)}),f&&d.on("click",function(t){i(t.target)}),t.addEventListener("resize",function(){var t=d.width();t>0&&e()},!1)}var o=e.extend({},e.fn.scroll.defaults,n),r=o.isVertical,s=o.rate,c=o.timeSpanThreshold,l=o.maxScroll,u=o.androidRate,f=o.isAdjust,d=e(this),h=d.children("*"),p=/(android)/i.test(t.navigator.userAgent);i()})}}(window,$)},{}],17:[function(t,e,n){!function(t,e){e.fn.swatchbook=function(t){return e.fn.swatchbook.defaults={centerIdx:6,angleInc:8,proximity:45,neighbor:4,initIsClosed:!1,closeIdx:-1,openAt:-1,selectCallback:null,openDelay:25},this.each(function(){function n(){e.isAndroid2&&C.css({"-webkit-backface-visibility":"visible","backface-visibility":"visible"}),p?c=!0:i(u),g>=0&&x>g&&a(w.eq(g)),s()}function i(t){w.each(function(n){var i=e(this),a="rotateZ("+f*(n-t)+"deg)";setTimeout(function(){i.css({"-webkit-transform":a,transform:a})},n*b)})}function a(t){var e=t.index();e!==y?(w.removeClass("selected"),-1!==v&&e===v?(y=-1,o()):(y=e,t.css({"-webkit-transform":"rotateZ(0deg)",transform:"rotateZ(0deg)"}).addClass("selected"),r(t,e))):e===y&&"function"==typeof m&&m(e)}function o(){c?i(u):w.css({"-webkit-transform":"rotateZ(0deg)",transform:"rotateZ(0deg)"}),c=!c}function r(t,n){var i,a=k[n];a?i=a:(i=t.siblings(),k[n]=i),i.each(function(t){var i=n>t?f*(t-n):t-n===1?d:d+(t-n-1)*h,a="rotateZ("+i+"deg)";e(this).css({"-webkit-transform":a,transform:a})})}function s(){w.on("click",function(){a(e(this))})}var c,l=e.extend({},e.fn.swatchbook.defaults,t),u=l.centerIdx,f=l.angleInc,d=l.proximity,h=l.neighbor,p=l.initIsClosed,v=l.closeIdx,g=l.openAt,m=l.selectCallback,b=l.openDelay,C=e(this),w=C.addClass("sb-container").children("*"),x=w.length,y=-1,k=[];n()})}}(window,$)},{}],18:[function(t,e,n){!function(t,e){e.fn.turntable=function(t){return e.fn.turntable.defaults={count:12,rotateDeg:3600,duration:7e3,timeFx:"cubic-bezier(0.42,0,0.25,1)",offset:0},this.each(function(){function n(){a=e('<div class="pi-turntable-pointer"></div>'),f.addClass("pi-turntable").prepend(a),i()}function i(){var t,e;d.turnToIndex=function(n,i){if(!(n>r||e)){var o=c/1e3+"s "+l,f=s+n/r*360+u+"deg",d="rotateZ("+f+")";a[0].style.cssText="",e=!0,setTimeout(function(){a.css({"-webkit-transition":"-webkit-transform "+o,transition:"transform "+o,"-webkit-transform":d,transform:d}),clearTimeout(t),t=setTimeout(function(){"function"==typeof i&&i(),e=!1},c)},40)}}}var a,o=e.extend({},e.fn.turntable.defaults,t),r=o.count,s=o.rotateDeg,c=o.duration,l=o.timeFx,u=o.offset,f=e(this),d=this;n()})}}(window,$)},{}],19:[function(t,e,n){!function(t,e){var n=t.document,i=e(n),a=e(n.body);a.addClass("very-high"),t.scrollTo(0,1),a.removeClass("very-high"),e.isShowQrcode=!0;var o=navigator.userAgent;e.isMobi=/(iPhone|iPod|iPad|android|windows phone os|iemobile)/i.test(o),e.isAndroid=/(android)/i.test(o),e.isIos=/(iPhone|iPod|iPad)/i.test(o),e.toggleMask=function(){var t=e("#mask");return 0===t.length&&(t=e('<div id="mask"></div>'),a.append(t)),function(e){e?t.addClass("visible"):t.removeClass("visible")}}(),e(function(){i.on("touchstart","a",function(){e(this).addClass("focus")}),i.on("touchend","a",function(){e(this).removeClass("focus")}),e.isShowQrcode&&!e.isMobi&&e.jsonp("http://img.gd.sohu.com/static/v1/qrcode.js",function(){var t=e("#qrcode");0===t.length&&(t=e('<div id="qrcode"></div>'),a.append(t),new QRCode(t[0],{width:t.width(),height:t.height(),text:location.href})),i.on("click","#qrcode",function(){t.fadeOut()})}),!e.isMobi&&e.jsonp("http://img.gd.sohu.com/static/v1/desktouch.js")}),e(t).on("load",function(){a.addClass("loaded")})}(window,$)},{}],20:[function(t,e,n){!function(t,e){function n(t){var n=e.panelUnloaded;"function"==typeof n&&n(t)}var i=t.document,a=e(i),o=i.body,r=e(o),s=e("#mainbox");e.homeSelector="#home";var c=function(){var t={},e="hidden"!==s.css("overflow");return function(n,i){e&&(i?t[n]=o.scrollTop:o.scrollTop=t[n]||0)}}();e.scrollTo=function(t,e,n){function i(){a+=r,n.scrollTop=a,r>0?t>a&&requestAnimationFrame(i):a>t&&requestAnimationFrame(i)}e||(e=20),n||(n=o);var a=n.scrollTop,r=(t-a)/e;r>0?t>a&&requestAnimationFrame(i):a>t&&requestAnimationFrame(i)};var l=function(){var t={};return function(n){var i=e.panelLoaded,a=n[0].id;"function"==typeof i&&i(n,!t[a]),t[a]=!0}}();e.toggleSidebox=function(){var t=e("#sidebox");return function(i){var a=e.history[e.history.length-1];i?(r.addClass("onsidebox"),l(t),n(a)):(r.removeClass("onsidebox"),n(t),l(a))}}(),e.toggleHeader=function(t){t?s.removeClass("offheader"):s.addClass("offheader")},e.toggleNavbar=function(t){t?s.removeClass("offnavbar"):s.addClass("offnavbar")},e.setTitle=function(){var t=e(".roottitle .title");return function(e){e&&t.html(e)}}(),e.setSubtitle=function(){var t=e(".subtitle .title");return function(e){e&&t.html(e)}}(),e.loadPanel=function(){var t=e("#navbar a"),a=i.querySelector(".navbox"),o=e(".panel"),r=1e3*parseFloat(o.css("transition-duration")||o.css("-webkit-transition-duration")),u=e.history=[],f=e("#header");return function(i){var o,d;if(i?(o=e(i),o.length>0&&(d=u[u.length-1],u.push(o))):(d=u.pop(),o=u[u.length-1],i="#"+o.attr("id")),o.length>0){if(t.length>0&&t.each(function(){for(var n=(this.getAttribute("data-hash")||this.hash).split("|"),o=0,r=n.length;r>o;o++)n[o]===i&&(t.removeClass("selected"),e(this).addClass("selected"),a.center(this))}),!d)return o.addClass("show opened"),e.setTitle(o.attr("title")),void l(o);if(c(d.attr("id"),!0),"#"+d.attr("id")!==i){var h=o.attr("data-role"),p=d.attr("data-role");o.addClass("show"),s.addClass("reflow"),setTimeout(function(){"root"===h?(e.setTitle(o.attr("title")),e.toggleNavbar(!0),f.removeClass("onsubtitle"),"root"===p?(o.addClass("notrans"),d.addClass("notrans")):(o.removeClass("notrans"),d.removeClass("notrans")),o.removeClass("subopened").addClass("opened"),d.removeClass("opened")):(e.setSubtitle(o.attr("title")),e.toggleNavbar(!1),f.addClass("onsubtitle"),o.removeClass("notrans"),d.removeClass("notrans"),o.hasClass("subopened")?(o.removeClass("subopened").addClass("opened"),d.removeClass("opened")):(o.addClass("opened"),d.addClass("subopened").removeClass("opened"))),l(o)},10),setTimeout(function(){d.removeClass("show"),c(o.attr("id"),!1),setTimeout(function(){s.removeClass("reflow")},100),"paneliframe"===d.attr("id")&&d.html(""),n(d)},r+20)}}else console.log(i+"面板未找到")}}(),e(function(){a.on("click",".btn-onsidebox",function(){e.toggleSidebox(!0)}),a.on("click",".btn-offsidebox",function(){e.toggleSidebox(!1)});var t=e("#paneliframe");0===t.length&&(t=e('<div id="paneliframe" class="panel"></div>'),s.append(t)),a.on("click","a",function(n){var i=this.hash;if(i)return n.preventDefault(),void e.loadPanel(i);var a=this.getAttribute("data-href"),o=this.getAttribute("data-title");a&&(n.preventDefault(),t.html('<iframe src="'+a+'"></iframe>'),e.setSubtitle(o||"详情"),e.loadPanel("#paneliframe"))}),a.on("click","#btn-goback",function(){e.loadPanel()});var n=e(".navbox");n.length>0&&n.scroll(),e.loadPanel(e.homeSelector);var i=location.hash;i&&setTimeout(function(){e.loadPanel(i)},400)})}(window,$)},{}]},{},[1]);