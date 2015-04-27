﻿(function (window, $) {

    //文档jq对象
    var $doc = $(window.document),
    //全局变量
        global = window.Global = {},
        load = {}, unload = {};

    //alert方法
    window.alert = function alert(str) {
        $.customalert({
            content: str
        });
    };


    //面板显示回调函数
    $.panelLoaded = function ($this, isInit) {
        var loadfn = load[$this.attr('id')];
        $.isFunction(loadfn) && loadfn($this, isInit);
    };

    //面板隐藏回调函数
    $.panelUnloaded = function ($this) {
        var unloadfn = unload[$this.attr('id')];
        $.isFunction(unloadfn) && unloadfn($this);
    };


    //焦点图
    load.panelcarousel = (function () {

        return function ($this, isInit) {
            if (isInit) {
                $('.carousel').each(function () {
                    var len = this.getAttribute('data-len'),
                        part = this.getAttribute('data-part'),
                        html = '';

                    for (var i = 0; i < len; i++) {
                        html += '<a data-title="焦点图示例 ' + (i + 1) + '"><img src="src/images/' + (part ? part + '/' : '') + '' + i + '.jpg"/></a>';
                    }

                    $(this).html(html).carousel({
                        isVertical: this.getAttribute('data-isvertical') === '1',
                        isShowSpinner: false
                    });
                });
            }
        };

    })();


    //3d旋转切换
    load.panelflip = (function () {

        return function ($this, isInit) {
            if (isInit) {
                $('.flip').each(function () {
                    var len = this.getAttribute('data-len'),
                        part = this.getAttribute('data-part'),
                        html = '';

                    for (var i = 0; i < len; i++) {
                        html += '<a><img src="src/images/' + (part ? part + '/' : '') + '' + i + '.jpg"/></a>';
                    }

                    $(this).html(html).flip({
                        isVertical: this.getAttribute('data-isvertical') === '1'
                    });
                });
            }
        };

    })();


    //相册功能
    load.panelpicpager = (function () {

        return function ($this, isInit) {
            if (isInit) {

                $.jsonp('http://img.gd.sohu.com/js/jtool.js', function () {
                    var page = 1,
                        perpage = 10;

                    var proxy = jtool.proxy;

                    //请求数据
                    proxy.pushData({
                        url: 'http://app.gd.sohu.com/minisite/xtep/20140530/get.php?act=list&page=' + page + '&perpage=' + perpage + '&order=' + 0 + '&code=aa1c9153608a7755b7c20e97c0eade27',
                        success: function (rs) {
                            var $picpager = $('.picpager').picpager({
                                imgData: rs.data.detail,
                                imgAttrName: 'image',
                                isShowSpinner: false,
                                slideCallback: function (index) {
                                    if (index + 1 === page * 10) {
                                        page++;

                                        //请求数据
                                        proxy.pushData({
                                            url: 'http://app.gd.sohu.com/minisite/xtep/20140530/get.php?act=list&page=' + page + '&perpage=' + perpage + '&order=' + 0 + '&code=aa1c9153608a7755b7c20e97c0eade27',
                                            success: function (rs) {
                                                $picpager[0].addItem(rs.data.detail);
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    });

                });
            }
        };

    })();


    //自定义滚动
    load.panelscroll = (function () {

        return function ($this, isInit) {
            if (isInit) {
                $('.scroll').each(function () {
                    $(this).scroll({
                        isVertical: this.getAttribute('data-isvertical') === '1'
                    });
                });
            }
        };

    })();


    //扇形特效
    load.panelswatchbook = (function () {

        return function ($this, isInit) {
            if (isInit) {
                $('.swatchbook').each(function () {
                    $(this).swatchbook({
                        angleInc: 25,
                        neighbor: 15,
                        proximity: 80,
                        initIsClosed: true,
                        closeIdx: 12,
                        selectCallback: function (index) {
                            console.log(index);
                        }
                    });
                });
            }
        };

    })();


    //刮刮卡
    load.panelscratchcard = (function () {

        return function ($this, isInit) {
            if (isInit) {
                $('.scratchcard').each(function () {
                    $(this).scratchcard({
                        text: '刮开有奖',
                        imgSrc: 'src/images/1.jpg'
                    });
                });
            }
        };

    })();


    //转盘抽奖
    load.panelturntable = (function () {

        return function ($this, isInit) {
            if (isInit) {
                var turntable = new Turntable({
                    count: 16,
                    pointerEl: document.getElementById('turntable_pointer')
                });

                $doc.on('click', '#turntable_start', function () {
                    var index = parseInt(Math.random() * 16);
                    turntable.doTurn(index, function () {
                        alert(index + 1);
                    });
                });
            }
        };

    })();

})(this, $);