$(function() {
    "use strict";

    function t() {
        e.smoothScroll(), 
        e.headerToggle(), 
        e.headerModal(), 
        e.headerLocation(), 
        e.localnavToggle(), 
        e.accordion(), 
        e.dragscroll(), 
        e.imgToBg(), 
        e.boxTable(), 
        e.feature(), 
        e.pickupSlider(), 
        e.eventSlider(), 
        e.bannerSlider(), 
        e.easyTab(), 
        e.tabColumn(), 
        e.h1TextSizeChange(), 
        e.pagenavEllipse(), 
        e.newsList(), 
        e.newsPager(), 
        e.resize(), 
        e.iPhoneMenubar(), 
        e.pulldown(), 
        e.matchHeightList(), 
        e.topVideoYoutube(), 
        e.topVideo(), 
        e.topVideoLogo()
    }

    var e = {},
        i = {
            window: $(window),
            html: $("html"),
            body: $("body"),
            document: $(".l-document")
        },
        a = {
            winW: i.window.width() || window.innerWidth,
            winH: i.window.height() || window.innerHeight,
            winHMax: i.window.height() || window.innerHeight,
            docW: i.document.outerWidth(),
            docH: i.document.outerHeight(),
            scrollT: 0,
            scrollL: 0,
            breakPoint: 992,
            spFlg: !1,
            reiszeTimer: "",
            scrollTimer: !1,
            queryObj: {}
        };
    e.checkScroll = function() {
        a.scrollT > 90 ? i.body.addClass("js-status-scrolled") : i.body.removeClass("js-status-scrolled")
    }, e.smoothScroll = function() {
        var t = 50;
        $("a[href^=#]").click(function() {
            a.winW >= a.breakPoint && (t = $("header.l-header").height()), $(this).closest(".m-box_tab").length > 0 && (t = 0);
            var e = 400,
                i = $(this).attr("href"),
                s = $("#" == i || "" == i ? "html" : i),
                o = s.offset().top - t;
            return $("body, html").animate({
                scrollTop: o
            }, e, "swing"), !1
        })
    }, e.checkVisible = function() {
        var t = $(".js-action-visible");
        t.each(function() {
            if ($(this).offset().top < Math.ceil(.8 * a.winH) + a.scrollT || a.winH + a.scrollT >= a.docH - 50) {
                var t = $(this);
                t.removeClass("js-action-visible").addClass("js-status-visible"), t.attr("data-visible") && setTimeout(function() {
                    t.addClass("js-status-visibled")
                }, t.attr("data-visible")), t.hasClass("js-action-visible-blend") && setTimeout(function() {
                    t.removeClass("js-action-visible-blend").addClass("js-status-visible-blend")
                }, 500)
            }
        })
    }, e.headerToggle = function() {
        var t = $(".js-action-headertoggle");
        t.off("click").on("click.exceptHeaderModal", function() {
            i.body.toggleClass("js-status-header")
        })
    }, e.headerModal = function() {
        function t() {
            i.body.removeClass("js-status-headermodal").removeAttr("data-headermodal")
        }
        var e = $(".js-action-headermodal"),
            s = $(".js-action-headermodal-close");
        e.off("click").on("click", function() {
            var t = $(this).attr("data-headermodal");
            "more" === t && a.spFlg ? i.body.removeClass("js-status-headermodal").removeAttr("data-headermodal") : i.body.hasClass("js-status-headermodal") && i.body.attr("data-headermodal") === t ? i.body.removeClass("js-status-headermodal") : i.body.addClass("js-status-headermodal").attr("data-headermodal", t)
        }), s.off("click").on("click.exceptHeaderModal", function() {
            t()
        })
    }, e.headerLocation = function() {
        var t = $(".l-header_gnav_list_item");
        if (t.length) {
            var e = location.pathname.split("/")[1];
            "english" == e && (e = location.pathname.split("/")[2]), $(t.selector + "-" + e).addClass("js-status-active")
        }
    }, e.localnavToggle = function() {
        var t = $(".js-action-localnav");
        t.each(function() {
            var t = $(this).find(".js-action-localnav-btn"),
                e = $(this).find(".js-action-localnav-target");
            t.click(function() {
                i.body.hasClass("js-status-localnav") ? (i.body.removeClass("js-status-localnav"), e.slideUp()) : (i.body.addClass("js-status-localnav"), e.slideDown())
            })
        })
    }, e.accordion = function() {
        var t = $(".js-action-accordion");
        t.each(function() {
            var t = $(this),
                e = t.find(".js-action-accordion-title").eq(0),
                i = t.find(".js-action-accordion-body").eq(0);
            e.off(".exceptHeaderModal").on("click.exceptHeaderModal", function() {
                var e = t.attr("data-device"),
                    s = i.find(".js-action-accordion-title"),
                    o = i.find(".js-action-accordion-body");
                return void 0 === e || "sp" === e && a.spFlg || "pc" === e && !a.spFlg ? ($(this).hasClass("js-status-active") ? ($(this).removeClass("js-status-active"), s.removeClass("js-status-active"), o.removeClass("js-status-active"), i.removeClass("js-status-active")) : ($(this).addClass("js-status-active"), i.addClass("js-status-active")), !1) : void 0
            })
        })
    }, 


    e.feature = function() {

        var t = $(".js-action-feature");

        t.each(function() {
            function t(t) {
                a.find("li")
                .removeClass("js-status-active")
                .filter(":not(.bx-clone)")
                .eq(t)
                .addClass("js-status-active"), 
                0 === t ? a.find("li:not(.bx-clone)").eq(o - 1).next().addClass("js-status-active") : t === o - 1 && a.find("li:not(.bx-clone)").eq(0).prev().addClass("js-status-active"), e.stopAuto(), setTimeout(function() {
                    e.startAuto()
                }, 30)
            }

            var e, i = $(this),
                a = $(this).find(".js-action-feature-slider"),
                s = $(this).find(".js-action-feature-controll"),
                o = a.find("li").length,
                n = "";
            i.hasClass("js-action-feature-mresearch") && (n = "mresearch"), 1 >= o ? i.addClass("js-status-alone") : ("mresearch" != n && a.find("li").each(function(t) {
                $(this).find("a").attr("data-index", "0" + (t + 1) + ".")
            }),


             e = a.bxSlider({
                mode: "horizontal",
                auto: !0,
                pause: 5e3,
                minSlides: 2,
                maxSlides: 2,
                nextText: "",
                prevText: "",
                onSliderLoad: function(e) {
                    setTimeout(function() {
                        t(e)
                    }, 30)
                },
                onSliderResize: function(e) {
                    t(e)
                },
                onSlideBefore: function(e, i, a) {
                    t(a)
                },
                onSlideAfter: function() {}
            }), 


             s.off("click").on("click.exceptHeaderModal", "a", function() {
                $(this).hasClass("prev") ? e.goToPrevSlide() : $(this).hasClass("next") && e.goToNextSlide()
            }))
        })
    }, 


    e.pickupSlider = function() {
        var t = $(".js-action-pickupslider");
        t.each(function() {
            var t, e = $(this),
                i = $(this).find(".js-action-pickupslider-slider"),
                a = i.find("li").length;
            1 >= a ? e.addClass("js-status-alone") : (3 >= a && e.addClass("js-status-pcnoslide"), t = i.bxSlider({
                mode: "horizontal",
                auto: !0,
                pause: 5e3,
                minSlides: 1,
                maxSlides: 3,
                slideWidth: 312,
                nextText: "",
                prevText: ""
            }))
        })
    }, 

    e.eventSlider = function() {
        var t = $(".js-action-eventslider");
        t.each(function() {
            var t, e = $(this),
                i = $(this).find(".js-action-eventslider-slider"),
                a = i.find("li").length;
            1 >= a ? e.addClass("js-status-alone") : (2 >= a && e.addClass("js-status-pcnoslide"), t = i.bxSlider({
                mode: "horizontal",
                auto: !1,
                pause: 5e3,
                minSlides: 2,
                maxSlides: 2,
                slideWidth: 265,
                nextText: "",
                prevText: "",
                pager: !1,
                infiniteLoop: !1
            }))
        })
    }, 

    e.bannerSlider = function() {
        var t = $(".js-action-bannerslider");
        t.each(function() {
            var t, e = $(this),
                i = $(this).find(".js-action-bannerslider-slider"),
                a = i.find("li").length;
            if (1 >= a) e.addClass("js-status-alone");
            else {
                t = i.bxSlider({
                    mode: "horizontal",
                    auto: !1,
                    pause: 5e3,
                    minSlides: 1,
                    maxSlides: 4,
                    slideWidth: 264,
                    nextText: '<i class="icon-arrow-right_02"></i>',
                    prevText: '<i class="icon-arrow-left_02"></i>',
                    pager: !1
                });
                var s = e.width(),
                    o = e.find(".bx-wrapper").width();
                s > o ? e.addClass("js-status-full") : 4 == a && 1056 == s && e.addClass("js-status-full")
            }
        })
    }, 

    e.dragscroll = function() {
        var t = $(".js-action-dragscroll");
        t.each(function() {
            var t = !1,
                e = 0,
                i = 0;
            $(this).off("mousedown").on("mousedown", function(a) {
                return t = !0, e = a.pageX, i = a.pageX, !1
            }), $(this).off("mousemove").on("mousemove", function(a) {
                if (t) {
                    i = a.pageX;
                    var s = i - e;
                    $(this).scrollLeft($(this).scrollLeft() - s), e = i
                }
            }), $(this).off("mouseup").on("mouseup", function() {
                t = !1
            }), $(this).off("click").on("click.exceptHeaderModal", "a", function() {
                location.href = $(this).attr("href")
            })
        })
    }, 

    e.imgToBg = function() {
        var t = $(".js-action-imgtobg");
        t.each(function() {
            var t = $(this).find("img"),
                e = t.attr("src");
            "false" !== $(this).attr("data-remove") && t.remove(), $(this).css({
                backgroundImage: "url(" + e + ")"
            })
        })
    }, 

    e.boxTable = function() {
        var t = $(".js-action-boxtable");
        t.each(function() {
            var t = $(this).find(".m-box_table_item").length;
            $(this).addClass("m-box_table-col" + t)
        })
    }, e.easyTab = function() {
        var t = $(".easyTabs");
        t.each(function() {
            function t() {
                setTimeout(function() {
                    e.find("div").removeClass("js-status-active").filter(".active").addClass("js-status-active")
                }, 30)
            }
            var e = $(this);
            var n = new Date();
            var m = n.getMonth();
            if (m <= 2) {
                m = parseInt(m) + parseInt(10);
            } else {
                m = parseInt(m) - parseInt(2);
            }
            var p;
            var pt = /\/event\/$/;
            if (pt.test(location.pathname)) {
                p = ":nth-child(" + m + ")";
            } else {
                p = ":first-child";
            }
            e.easytabs({
                animate: !1,
                tabs: ".m-box_tab > ul > li",
                defaultTab: p
            }), t(), e.off("easytabs:after").on("easytabs:after", function() {
                t()
            })
        })
    }, e.tabColumn = function() {
        var t = $(".js-action-tabcolumn");
        t.each(function() {
            var t = $(this).find("li").length;
            $(this).attr("data-cols", t)
        })
    }, e.h1TextSizeChange = function() {
        var t = $(".m-box_title_hdg");
        t.each(function() {
            var t = $(this).text().length;
            t > 76 ? $(this).addClass("js-status-fs-xxs") : t > 41 ? $(this).addClass("js-status-fs-xs") : t > 20 && $(this).addClass("js-status-fs-s")
        })
    }, e.pagenavEllipse = function() {
        var t = $(".js-action-pagenavellipse");
        t.find("p > span").each(function() {
            var t = $(this).text(),
                e = t.length;
            $(this).attr("data-originaltext", t), e > 14 && $(this).text(t.substr(0, 13) + "...")
        })
    }, e.newsList = function() {
        var t = $(".js-action-news");
        t.each(function() {
            function t() {
                var t = e.find("> li").length;
                s * o >= t && (i.slideUp().remove(), a.fadeIn())
            }
            var e = $(this).find(".js-action-news-list"),
                i = $(this).find(".js-action-news-more"),
                a = $(this).find(".js-action-news-link"),
                s = $(this).attr("data-number") || 5,
                o = 1;
            t(), i.click(function() {
                o += 1, e.find("> li:lt(" + s * o + ")").slideDown(), t()
            })
        })
    }, e.newsPager = function() {
        $(".js-pagination").pagination({
            element: "> ul > li",
            prevText: "PREV",
            nextText: "NEXT",
            ellipsisText: "窶ｦ",
            viewNum: 15,
            pagerNum: 5,
            ellipsis: !0,
            linkInvalid: !0,
            goTop: !1,
            firstLastNav: !1,
            prevNextNav: !0
        })
    }, e.pulldown = function() {
        function t(t, e) {
            var i = t.find("option:selected"),
                a = i.attr("data-href");
            t.prev(".js-action-pulldown-txt").text(i.text()), t.blur(), e && void 0 !== a && "" !== a && (location.href = a)
        }
        var e = $(".js-action-pulldown");
        $(".js-action-pulldown-txt");
        e.each(function() {
            t($(this).find("select"))
        }), e.off("change").on("change", "select", function() {
            t($(this), !0)
        })
    }, e.topVideo = function(t) {
        var e, i = $(".js-action-topvideo"),
            s = i.find("iframe"),
            o = .5625,
            n = t ? 100 : 30;
        i.length && (a.winW < a.breakPoint ? i.css({
            height: a.winH - 50 - 50 - 72
        }) : i.css({
            height: a.winH - 90 - 52
        }), setTimeout(function() {
            e = i.innerHeight() / i.innerWidth(), s.length && (o > e ? s.css({
                top: "50%",
                left: "0",
                width: "100%",
                height: a.winW * o,
                transform: "translateY(-50%)"
            }) : s.css({
                top: "0",
                left: "50%",
                width: a.winH / o,
                height: "100%",
                transform: "translateX(-50%)"
            }))
        }, n))
    }, e.topVideoLogo = function() {
        var t = $(".js-action-topvideo");
        t.length && t.addClass("js-status-fadeout")
    }, e.topVideoYoutube = function() {
        function t() {
            var t = navigator.userAgent.toLowerCase();
            if (null !== t.match(/iphone/i) || null !== t.match(/ipod/i) || null !== t.match(/ipad/i)) {
                var e = t.match(/os (\d+)_(\d+)_?(\d+)?/),
                    i = parseInt(e[1], 10);
                return i
            }
        }

        function i() {
            new YT.Player("video", {
                width: 480,
                height: 270,
                videoId: c,
                playerVars: {
                    controls: 0,
                    disablekb: 0,
                    fs: 0,
                    iv_load_policy: 3,
                    modestbranding: 1,
                    playsinline: 1,
                    rel: 0,
                    showinfo: 0
                },
                events: {
                    onReady: a,
                    onStateChange: s
                }
            })
        }

        function a(t) {
            t.target.mute(), t.target.playVideo(), e.topVideo(!0)
        }

        function s(t) {
            t.data === YT.PlayerState.ENDED && t.target.playVideo()
        }
        var o = $(".js-action-topvideo");
        if (o.length)
            if (t() < 10) o.find("#video").addClass("js-status-ios9");
            else {
                var n = document.createElement("script"),
                    l = document.getElementsByTagName("script")[0],
                    d = ["zLSYFnr_MqE", "3P4WU3bd3jE"],
                    c = d[Math.floor(Math.random() * d.length)];
                n.src = "https://www.youtube.com/iframe_api", l.parentNode.insertBefore(n, l), window.onYouTubeIframeAPIReady = i
            }
    }, e.scroll = function() {
        a.scrollT = i.window.scrollTop(), a.scrollL = i.window.scrollLeft(), a.docH = i.document.outerHeight(), e.checkScroll(), e.checkVisible()
    }, e.resize = function() {
        a.winW = i.window.width() || window.innerWidth, a.winH = i.window.height() || window.innerHeight, a.docW = i.document.outerWidth(), a.docH = i.document.outerHeight();
        var t = window.innerHeight;
        t < a.winHMax ? i.body.removeClass("js-status-nomenubar") : (a.winHMax = t, i.body.addClass("js-status-nomenubar")), a.spFlg = a.winW >= a.breakPoint ? !1 : !0, e.topVideo()
    }, e.iPhoneMenubar = function() {
        var t = $('<div style="position:fixed;height:100vh;"></div>').appendTo(i.document);
        a.winHMax = t.outerHeight(), t.remove()
    }, e.matchHeightList = function() {
        $(".js-match_height").matchHeight(), $(".m-list_common-link > ul > li > a").matchHeight()
    }, t(), window.onpageshow = function(e) {
        e.persisted && t()
    }, i.window.load(function() {
        i.body.addClass("js-status-loaded"), e.scroll(), e.checkVisible(), e.resize()
    }), i.window.resize("load", function() {
        a.resizeTimer !== !1 && clearTimeout(a.resizeTimer), a.resizeTimer = setTimeout(function() {
            e.resize()
        }, 100)
    }), i.window.on("scroll touchmove", function() {
        e.scroll()
    })
});