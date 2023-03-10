function zoomIn() {
    document.body.style.zoom = "150%"
}

function zoomOut() {
    document.body.style.zoom = "100%"
}
$(document).ready((function() {
        "use strict";
        var t = $(".js-slick");
        t.length && void 0 !== $.fn.slick && t.each((function(t, e) {
            var i = $(e),
                s = function(t) {
                    try {
                        JSON.parse(t)
                    } catch (t) {
                        return !1
                    }
                    return !0
                }(i.attr("data-slick")) ? JSON.parse(i.attr("data-slick")) : {};
            i.imagesLoaded((function() {
                i.slick({
                    prevArrow: '<span class="hgSlickNav-arr hgSlickNav-prev"><svg viewBox="0 0 256 256"><polyline fill="none" stroke="black" stroke-width="16" stroke-linejoin="round" stroke-linecap="round" points="184,16 72,128 184,240"></polyline></svg></span>',
                    nextArrow: '<span class="hgSlickNav-arr hgSlickNav-next"><svg viewBox="0 0 256 256"><polyline fill="none" stroke="black" stroke-width="16" stroke-linejoin="round" stroke-linecap="round" points="72,16 184,128 72,240"></polyline></svg></span>',
                    customPaging: function(t, e) {
                        return $('<button type="button" class="slickBtn" data-role="none" role="button" tabindex="0" />').text(e + 1)
                    },
                    rtl: !(!$("html").is("[dir]") || "rtl" != $("html").attr("dir")),
                    cssEase: "linear"
                })
            })), void 0 !== s.thumbs && s.thumbs && i.on("init", (function(t, e) {
                $(s.appendDots).find("li").each((function(t, i) {
                    var s = e.$slides[t],
                        o = $(s).find(".hg_simple_slider-itemimg").attr("src");
                    $(i).children("button").attr("style", "background-image:url(" + o + ")")
                }))
            }));
            var o = void 0 !== s.fancy && s.fancy;

            function a(t, e, i) {
                var o = $(e.$slider).closest(".kl-slideshow"),
                    a = $(e.$slides[i]).attr("data-color");
                void 0 !== s.appendFancy && "" !== s.appendFancy && (o = $(s.appendFancy)), o.css({
                    backgroundColor: a
                })
            }
            var n = void 0 !== s.activeIndex && "" !== s.activeIndex;

            function r(t) {
                $(s.activeIndex).attr("data-active-slide", t)
            }

            function c(t) {
                $(t.$slider).addClass("slickSlider--activated"), setTimeout((function() {
                    $(t.$slider).removeClass("slickSlider--activated")
                }), 2 * parseInt(t.defaults.autoplaySpeed) - 500)
            }
            i.on("init", (function(t, e) {
                c(e), $(e.$slides[0]).addClass("slick-item--activated"), o && a(0, e, 0), n && r(0)
            })).on("beforeChange", (function(t, e, i, s) {
                e.$slides.removeClass("slick-item--activated"), o && a(0, e, s), n && r(s)
            })).on("afterChange", (function(t, e, i, s) {
                c(e), $(e.$slides[i]).addClass("slick-item--activated")
            }))
        })), $(".timeline-carousel__item-wrapper").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            rtl: !0,
            arrows: !0,
            dots: !1,
            autoplay: !0,
            speed: 1100,
            prevArrow: '<div class="arrow-left"><i class="fa fa-angle-left"></i></div>',
            nextArrow: '<div class="arrow-right"><i class="fa fa-angle-right"></i></div>',
            responsive: [{
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        }), $(".former-carousel__item-wrapper").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            rtl: !0,
            arrows: !1,
            dots: !1,
            autoplay: !0,
            speed: 1100,
            responsive: [{
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        }), $(".numbers-carousel").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            rtl: !0,
            arrows: !0,
            dots: !1,
            autoplay: !0,
            speed: 1100,
            prevArrow: '<div class="arrow-left"><i class="fa fa-angle-left"></i></div>',
            nextArrow: '<div class="arrow-right"><i class="fa fa-angle-right"></i></div>',
            responsive: [{
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
        var e, i = $(".kl-icarousel-container");
        i && (e = i.find(".th-icarousel")) && e.length && void 0 !== $.fn.iCarousel && $.each(e, (function(t, e) {
            var i = $(e),
                s = {
                    easing: "easeInOutQuint",
                    pauseOnHover: !0,
                    timerPadding: 0,
                    timerStroke: 4,
                    timerBarStroke: 0,
                    animationSpeed: 700,
                    nextLabel: "",
                    previousLabel: "",
                    autoPlay: !i.is("[data-autoplay]") || i.data("autoplay"),
                    slides: i.is("[data-slides]") ? i.data("slides") : 7,
                    pauseTime: i.is("[data-timeout]") ? i.data("timeout") : 5e3,
                    perspective: i.is("[data-perspective]") ? i.data("perspective") : 75,
                    slidesSpace: i.is("[data-slidespaces]") ? i.data("slidespaces") : 300,
                    direction: i.is("[data-direction]") ? i.data("direction") : "ltr",
                    timer: i.is("[data-timer]") ? i.data("timer") : "Bar",
                    timerOpacity: i.is("[data-timeropc]") ? i.data("timeropc") : .4,
                    timerDiameter: i.is("[data-timerdim]") ? i.data("timerdim") : 220,
                    keyboardNav: !i.is("[data-keyboard]") || i.data("keyboard"),
                    mouseWheel: !i.is("[data-mousewheel]") || i.data("mousewheel"),
                    timerColor: i.is("[data-timercolor]") ? i.data("timercolor") : "#FFF",
                    timerPosition: i.is("[data-timerpos]") ? i.data("timerpos") : "bottom-center",
                    timerX: i.is("[data-timeroffx]") ? i.data("timeroffx") : 0,
                    timerY: i.is("[data-timeroffy]") ? i.data("timeroffy") : -20
                };
            void 0 !== $.fn.iCarousel && i.imagesLoaded((function() {
                i.iCarousel(s)
            }))
        })), $("#carousel").carousel3d(), $(".nav-tabs a").on("shown.bs.tab", (function(t) {
            console.log(t.target, t.relatedTarget);
            var e = t.relatedTarget.attributes.href.value;
            ! function(t) {
                let e = t.prop("src");
                t.prop("src", e)
            }($(e).find("iframe"))
        })), $(".acc-link").on("click", (function() {
            $(".acc-icons").slideToggle(), $(document).on("click", (function(t) {
                $(t.target).closest(".acc-link, .acc-icons a").length || $(".acc-icons").stop()
            }))
        }));
        try {
            new $.WpkCounter(".counter")
        } catch (t) {
            console.error(t.message)
        }
        $(".btn-show-slider").click((function() {
            $("#mainSlider").toggle("slow"), $(".arrow-hide-slide").toggle(), $(".arrow-show-slide").toggle()
        })), particlesJS("particles-js2", {
            particles: {
                number: {
                    value: 150,
                    density: {
                        enable: !0,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    },
                    image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                    }
                },
                opacity: {
                    value: .5,
                    random: !1,
                    anim: {
                        enable: !1,
                        speed: .5,
                        opacity_min: .1,
                        sync: !1
                    }
                },
                size: {
                    value: 3,
                    random: !0,
                    anim: {
                        enable: !1,
                        speed: 20,
                        size_min: .1,
                        sync: !1
                    }
                },
                line_linked: {
                    enable: !0,
                    distance: 150,
                    color: "#ffffff",
                    opacity: .4,
                    width: 1
                },
                move: {
                    enable: !0,
                    speed: 2,
                    direction: "none",
                    random: !1,
                    straight: !1,
                    out_mode: "out",
                    bounce: !1,
                    attract: {
                        enable: !1,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: !0,
                        mode: "grab"
                    },
                    onclick: {
                        enable: !0,
                        mode: "push"
                    },
                    resize: !0
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: .4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: !0
        }), $(".m-sectorButton").mouseover((function() {
            $(".m-sectorButton").removeClass("-isDisabled"), $(".b-sectors__placeholder").removeClass("-isDisabled"), $(".m-sectorButton").removeClass("-isActive"), $(".m-sectorButton").addClass("-isDisabled"), $(".b-sectors__placeholder").addClass("-isDisabled"), $(".m-sectorButton").children().children(".m-sectorButton__icon").css("display", "block"), $(".m-sectorButton").children().children(".m-sectorButton__icon").css("opacity", "0.5"), $(".m-sectorButton").children().children(".m-sectorButton__icon").css("filter", "grayscale(100%)"), $(this).removeClass("-isDisabled"), $(this).children().children(".m-sectorButton__icon").css("display", "block"), $(this).children().children(".m-sectorButton__icon").css("opacity", "1"), $(this).children().children(".m-sectorButton__icon").css("filter", "none"), $(this).children().children(".m-sectorButton__label").css("display", "none"), $(this).addClass("-isActive");
            var t = $(this).data("img")
        })), $(".m-sectorButton").mouseout((function() {
            $(".m-sectorButton").removeClass("-isDisabled"), $(".b-sectors__placeholder").removeClass("-isDisabled"), $(".m-sectorButton").removeClass("-isActive"), $(".m-sectorButton").children().children(".m-sectorButton__icon").css("display", "none"), $(".m-sectorButton").children().children(".m-sectorButton__label").css("display", "block").css("line-height", "205px")
        }));
        var s = !1,
            o = !1,
            a = !1,
            n = !1,
            r = !1,
            c = !1,
            l = !1;
        $(".radial-menu").on("mousedown touchstart", (function() {
            s ? $(this).find(".menu-item1").css({
                "background-color": "transparent",
                transform: "none"
            }) : $(this).find(".menu-item1").css({
                "background-color": "rgb(0 162 173 / 77%)",
                transform: "translate(0px,125px)"
            }), o ? $(this).find(".menu-item2").css({
                "background-color": "transparent",
                transform: "none"
            }) : $(this).find(".menu-item2").css({
                "background-color": "rgb(0 162 173 / 77%)",
                transform: "translate(60px,105px)"
            }), a ? $(this).find(".menu-item3").css({
                "background-color": "transparent",
                transform: "none"
            }) : $(this).find(".menu-item3").css({
                "background-color": "rgb(0 162 173 / 77%)",
                transform: "translate(105px,60px)"
            }), n ? $(this).find(".menu-item4").css({
                "background-color": "transparent",
                transform: "none"
            }) : $(this).find(".menu-item4").css({
                "background-color": "rgb(0 162 173 / 77%)",
                transform: "translate(125px,0px)"
            }), r ? $(this).find(".menu-item5").css({
                "background-color": "transparent",
                transform: "none"
            }) : $(this).find(".menu-item5").css({
                "background-color": "rgb(0 162 173 / 77%)",
                transform: "translate(105px,-60px)"
            }), c ? $(this).find(".menu-item6").css({
                "background-color": "transparent",
                transform: "none"
            }) : $(this).find(".menu-item6").css({
                "background-color": "rgb(0 162 173 / 77%)",
                transform: "translate(60px,-105px)"
            }), l ? $(this).find(".menu-item7").css({
                "background-color": "transparent",
                transform: "none"
            }) : $(this).find(".menu-item7").css({
                "background-color": "rgb(0 162 173 / 77%)",
                transform: "translate(0px,-125px)"
            }), s = !s, o = !o, a = !a, n = !n, r = !r, c = !c, l = !l
        }))
    })),
    function(t) {
        t.fn.carousel3d = function(e) {
            var s = {
                    carousel_frame: t(this)
                },
                o = s.carousel_frame.children().size(),
                a = s.carousel_frame.height(),
                n = Math.round(a / 2 / Math.tan(Math.PI / o));
            s.carousel_frame.css({
                transform: "rotateX(0deg) translateZ(-" + n + "px)"
            });
            var r = 0,
                c = 0,
                l = 360 / o;

            function d() {
                for (r = l * c, t("#test").text(r + ", " + c + ", "), i = 0; i < o; i++) {
                    var e = c * l + i * l;
                    s.carousel_frame.children("li:eq(" + i + ")").css({
                        transform: "rotateX(" + e + "deg ) translateZ(" + n + "px)"
                    })
                }
                r = 0, 0
            }
            d(), t(".next").on("click", (function() {
                c -= 1, d()
            })), t(".prev").on("click", (function() {
                c += 1, d()
            }))
        }
    }(jQuery);
var root = document.getElementsByTagName("html")[0];

function toggleTheme() {
    "filter:grayscale(100%)" === root.getAttribute("style") ? root.setAttribute("style", "filter:grayscale(0%)") : root.setAttribute("style", "filter:grayscale(100%)")
}

function link() {
    for (var t = document.getElementsByTagName("a"), e = t.length - 1; e >= 0; --e) t[e].toggleAttribute("style", "color: yellow !important;"), t[e].classList.toggle("background-black"), t[e].classList.toggle("yellowicon")
}
var animation_elements = $.find(".animation-element"),
    web_window = $(window);

function check_if_in_view() {
    var t = web_window.height(),
        e = web_window.scrollTop(),
        i = e + t;
    $.each(animation_elements, (function() {
        var t = $(this),
            s = $(t).outerHeight(),
            o = $(t).offset().top;
        o + s >= e && o <= i ? t.addClass("in-view") : t.removeClass("in-view")
    }))
}
$(window).on("scroll resize", (function() {
    check_if_in_view()
})), $(window).trigger("scroll");
var TxtType = function(t, e, i) {
    this.toRotate = e, this.el = t, this.loopNum = 0, this.period = parseInt(i, 10) || 2e3, this.txt = "", this.tick(), this.isDeleting = !1
};
TxtType.prototype.tick = function() {
    var t = this.loopNum % this.toRotate.length,
        e = this.toRotate[t];
    this.isDeleting ? this.txt = e.substring(0, this.txt.length - 1) : this.txt = e.substring(0, this.txt.length + 1), this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
    var i = this,
        s = 200 - 100 * Math.random();
    this.isDeleting && (s /= 2), this.isDeleting || this.txt !== e ? this.isDeleting && "" === this.txt && (this.isDeleting = !1, this.loopNum++, s = 500) : (s = this.period, this.isDeleting = !0), setTimeout((function() {
        i.tick()
    }), s)
}, window.onload = function() {
    for (var t = document.getElementsByClassName("typewrite"), e = 0; e < t.length; e++) {
        var i = t[e].getAttribute("data-type"),
            s = t[e].getAttribute("data-period");
        i && new TxtType(t[e], JSON.parse(i), s)
    }
    var o = document.createElement("style");
    o.type = "text/css", o.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}", document.body.appendChild(o)
};