function carouselReaders() {
    $('.readers-logo').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
        }
    });

};

/*$("body").on("click",".anchor", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top - 70;
    $('body,html').animate({scrollTop: top}, 800);
  });*/

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}

$("body").on("click", "*[data-anchor]", function (event) {
    var id = $(this).data('anchor'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
    event.preventDefault();
});


$(document).ready(function () {


    $(document).on('click', '.js-open', function () {
        $(this).toggleClass('is-active');
        $(this).closest('.hidden-content').find('.ws_stud_js-show-content').slideToggle();
        $(this).closest('.hidden-content').toggleClass('opened');
    });


    $(window).on('resize', function () {
        if ($(window).width() < 991) {
            var sidebarHtml = $('.to-mobile').html();
            $('.mobile-sidebar').html(sidebarHtml);
            $('.to-mobile').remove();
        }
    });

    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });


});
$(function () {

    if (typeof $.fn.owlCarousel != 'undefined') {


        $('.slider-company').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplay: true,
            autoplayTimeout: 2000,
            dots: false,
            navText: [
                "<img src='/images/img/slider-arrow.png'/>",
                "<img src='/images/img/slider-arrow.png'/>"
            ],
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 2
                },
                767: {
                    items: 3
                },
                991: {
                    items: 4
                },
                1300: {
                    items: 5
                },
            }
        });

        $('.slider-certificates, .slider-reviews').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplay: true,
            autoplayTimeout: 30000,
            autoHeight: true,
            dots: false,
            items: 1,
            animateIn: 'fadeIn',
            navText: [
                "<img src='/images/img/slider-arrow.png'/>",
                "<img src='/images/img/slider-arrow.png'/>"
            ]
        });


        $('.web-student-slider').owlCarousel({
            loop: false,
            margin: 0,
            nav: true,
            dots: true,
            autoHeight: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                },
            }
        });

        $('.ctr-team-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplay: true,
            autoplayTimeout: 30000,
            autoWidth: false,
            autoHeight: true,
            animateIn: 'fadeIn',
            dots: false,
            navText: [
                '<i class="fa fa-arrow-left"></i>',
                '<i class="fa fa-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                767: {
                    items: 3
                },
                991: {
                    items: 3
                },
                1300: {
                    items: 4
                },
            }
        });


        $('.ctr-reviews-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplay: true,
            autoplayTimeout: 30000,
            autoHeight: true,
            animateIn: 'fadeIn',
            dots: true,
            navText: [
                '<i class="fa fa-arrow-left"></i>',
                '<i class="fa fa-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                },
            }
        });


        $('.ctr-video-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            autoHeight: true,
            dots: true,
            navText: [
                '<i class="fa fa-arrow-left"></i>',
                '<i class="fa fa-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 2
                },
            }
        });

        $('.action_carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 6000,
            autoHeight: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                },
            }
        });

        $('.konf-slider.web-item').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                },
            }
        });


        $('.blog-slider').owlCarousel({
            loop: true,
            nav: true,
            autoWidth: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 3000,
            //animateIn: 'fadeIn',
            dots: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 6
                },
            }
        });

        $('.gifts .gifts-block').owlCarousel({
            loop: true,
            margin: 0,
            dots: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 5000,
            animateIn: 'fadeIn',
            items: 1,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ]
        });

        $('.blog-inner_blog').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplay: true,
            autoplayTimeout: 8000,
            animateIn: 'fadeIn',
            //  dots: false,
            items: 1,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    nav: false,
                    dots: true,
                },
                1000: {
                    nav: true,
                    dots: false,
                },

            }
        });

        $('.picture-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoWidth: true,
            animateIn: 'fadeIn',
            dots: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 4
                },
            }
        });

        $('.speaker-slider').owlCarousel({
            loop: false,
            mouseDrag: false,
            touchDrag: false,
            margin: 30,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            navText: false,
            animateIn: 'fadeIn',
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                },
            }
        });

        $('.second-picture-slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            navText: [],
            autoplay: true,
            autoplayTimeout: 3000,
            animateIn: 'fadeIn',
            dots: false,
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 6
                },
                1000: {
                    items: 6
                },
            }
        });

        $('.konf-video-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            navText: '',
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                },
            }
        });

        $(window).resize(function () {
                if ($(window).width() <= 1400) {
                    $('.also-slider').owlCarousel({
                        loop: true,
                        margin: 0,
                        nav: true,
                        autoplay: true,
                        autoplayTimeout: 3000,
                        autoHeight: true,
                        dots: false,
                        items: 3,
                        animateIn: 'fadeIn',
                        navText: [
                            "<img src='/images/img/slider-arrow.png'/>",
                            "<img src='/images/img/slider-arrow.png'/>"
                        ],
                        responsive: {
                            0: {
                                items: 1
                            },
                            576: {
                                items: 2
                            },
                            767: {
                                items: 2
                            },
                            991: {
                                items: 3
                            },
                            1199: {
                                items: 3
                            },
                        }
                    });
                }
                else {
                    $('.teachers-slider').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
                    $('.teachers-slider').find('.owl-stage-outer').children().unwrap();
                }
            }
        );


        $('.konf-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                },
            }
        });


        $('.review-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            navText: '',
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                },
            }
        });

        $('.review-type2-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                },
            }
        });

        $('.partners-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            dots: true,
            navText: [''],
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 6
                },
            }
        });

        $('.readers-slider-type2').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplay: true,
            autoplayTimeout: 6000,
            dots: true,
            navText: [''],
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 6
                },
            }
        });
        $('.sky-picture-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplay: true,
            autoplayTimeout: 30000,
            autoWidth: false,
            animateIn: 'fadeIn',
            dots: false,
            center: true,
            navText: [
                '<i class="fa fa-long-arrow-left"></i>',
                '<i class="fa fa-long-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 3
                },
            }
        });

        $('.worker-slider').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            nav: true,
            dots: false,
            navText: ["<img src='images/pic/carousel-arrow.png' />", "<img src='images/pic/carousel-arrow.png'>"],
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 5,
                    nav: true,
                    loop: false
                }
            }
        });

        $('.video_reviews').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplay: true,
            autoplayTimeout: 6000,
            dots: true,
            navText: [''],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2
                },
            }
        });
        $('.teachers-slider-l2').owlCarousel({
            loop: true,
            nav: true,
            center: true,
            navText: [''],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                },
            }
        });

        $('.student-review-slider').owlCarousel({
            loop: true,
            nav: true,
            margin: 30,
            //animateIn: 'fadeIn',
            dots: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2
                },
            }
        });

        $('.program-corporate-slider').owlCarousel({
            loop: true,
            nav: true,
            margin: 30,
            //animateIn: 'fadeIn',
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                },
            }
        });
    }

    if (typeof $.fn.styler != 'undefined') {
        $('.styler, .default-number').styler({
            selectSearch: true
        });
        $('input:not([type="file"]), select').styler();
    }

    $(document).mouseup(function (e) {
        var container = $(".personal-area");
        if (container.has(e.target).length === 0) {
            container.find('.personal-area-menu').removeClass('menu-active');
        }
        var container2 = $(".notification");
        if (container2.has(e.target).length === 0) {
            container2.find('.notification-menu').removeClass('menu-active');
        }
    });


    /*mob menu*/
    $(".hamburger-top").click(function () {
        $(this).toggleClass("is-active");
        $('.mobile--main-menu').slideToggle();
    });

    /*top-nav mob menu*/
    $(".top-nav-hamburger").click(function () {
        $(this).toggleClass("is-active");
        $('.top-nav-mob').slideToggle();
    });
    /*side-bar*/
    $(".side-bar-hamburger").click(function () {
        $('body').toggleClass("nav--active");
        $(this).toggleClass("is-active");
        $('.side-bar').toggleClass('active');
    });

    /*notification-menu*/
    $(".notification").click(function () {
        $('.notification-menu').toggleClass('menu-active');
    });
    /*personal-area-menu*/
    $(".personal-area").click(function () {
        $('.personal-area-menu').toggleClass('menu-active');
    });

    /*course-mob-menu*/
    $(".course-mob-btn").click(function () {
        $('.left-menu-mob').slideToggle();
    });

    if ($('.readers-logo').length) {
        var winWidth = $(window).width();
        $(window).resize(function () {
            if ($(window).width() < 1020) {
                carouselReaders();
            } else {
                $('.readers-logo').owlCarousel('destroy');
            }
        });
        if ($(window).width() < 1020) {
            carouselReaders();
        }
    }

    if (typeof AOS !== 'undefined') {
        if ($(window).width() >= 992) {
            AOS.init();
        } else {
            $('*[data-aos]').removeAttr('data-aos');
        }
        $(window).resize(function () {
            if ($(window).width() <= 992) {
                $('*[data-aos]').removeAttr('data-aos');
            } else {
                AOS.init();
            }
        });
    }
});

/*

$(document).ready(function(){
    $(".top-nav").on("click","a", function (event) {
        if ( $(this).hasClass('tab_link') ){
            return;
        };
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
*/

function getHeight() {
    $('.equalParent').each(function () {
        var maxequalHeight = 0;
        var equalHeight = 0;
        $(this).find('.equalHeight').each(function () {
            equalHeight = $(this).outerHeight();
            if (equalHeight > maxequalHeight) {
                maxequalHeight = equalHeight;
            }
            ;
        });
        $(this).find('.equalHeight').css('height', maxequalHeight);
    });
};
$(window).resize(function () {
    maxequalHeight = 0;
    equalHeight = 0;
    $('.equalHeight').css('height', '');
    getHeight();
});
getHeight();


$(".btn-show").click(function () {
    var itemHeight = $('.courses-description').find('.description-item')[0].scrollHeight;
    if ($('.description-item').hasClass('open')) {
        $('.description-item, .show').removeClass('open');
        $('.courses-description').find('.description-item').css('height', '');
        $(this).text('Развернуть весь текст');
    }
    else {
        $(this).text('Скрыть');
        $('.description-item, .show').addClass('open');
        $('.courses-description').find('.description-item').css('height', itemHeight);
    }
    ;
});


$(document).on('click', '.section-programm .btn-more', function () {
    var itemHeight = $('.section-programm').find('.programs-block-slide')[0].scrollHeight;
    //console.log(itemHeight);
    $('.section-programm').find('.programs-block-slide').css('height', itemHeight);
    $(this).hide();
});

/*stars*/

$(document).on('click', '.close-btn', function () {
    $('.loaderForm').hide();
});

$(document).ready(function () {

    $('.section-blog-inner-content img, .item-glossary img, .lector-info .lector-skills img').each(function () {
        if ($(window).width() < 700) {
            $(this).attr('style', '');
        }

        if (!$(this).hasClass('no-popup')) {
            var src = $(this).attr('src');
            if ($(this).parent()[0].tagName == 'A') {
                $(this).parent().addClass('zoom-gallery')

            } else {
                var newElem = $('<a/>').attr('href', src).addClass('zoom-gallery');
                $(this).wrap(newElem);
            }


        }

    });


    if (typeof $.fn.magnificPopup != 'undefined') {
        $('.zoom-gallery').magnificPopup({
            // delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function (element) {
                    return element.find('img');
                }
            }

        });
    }

    if (typeof $.fn.owlCarousel != 'undefined') {
        // reference for main items
        var slider = $('#slider');
        // reference for thumbnail items
        var thumbnailSlider = $('#thumbnailSlider');
        //transition time in ms
        var duration = 500;

        // carousel function for main slider
        slider.owlCarousel({
            loop: true,
            nav: false,
            mouseDrag: false,
            touchDrag: false,
            animateIn: 'fadeIn',
            navText: false,
            items: 1
        }).on('changed.owl.carousel', function (e) {
            thumbnailSlider.trigger('to.owl.carousel', [e.item.index, duration, true]);
        });

        // carousel function for thumbnail slider
        thumbnailSlider.owlCarousel({
            loop: true,
            center: true, //to display the thumbnail item in center
            nav: false,
            mouseDrag: false,
            touchDrag: false,
            navText: false,
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 3
                }
            }
        })


        //These two are navigation for main items
        $('.slider-right').click(function () {
            slider.trigger('next.owl.carousel');
            thumbnailSlider.trigger('next.owl.carousel');
            return false;
        });
        $('.slider-left').click(function () {
            slider.trigger('prev.owl.carousel');
            thumbnailSlider.trigger('prev.owl.carousel');
            return false;
        });
    }
});
$(document).on('click', '.zoom-gallery img', function () {
    $(".mfp-container").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            $(".mfp-arrow-left").magnificPopup("prev");
        },
        swipeRight: function () {
            $(".mfp-arrow-right").magnificPopup("next");
        },
        threshold: 50
    });
});
/*filter*/
$(".filter-title").click(function () {
    $('.filter-menu').toggleClass('menu-active');
});
$(document).on('click', function (e) {
    if (!$(e.target).closest(".filter").length) {
        $('.filter-menu').removeClass('menu-active');
    }
});
$('.js-catselect > option').each(function () {
    if (!$(this).prop('selected')) {
        var data = '<div class="col-xs-12 col-lg-4 filter-col"><label> <input type="checkbox" class="styler filter-item" data-value="' + $(this).val() + '"><span class="text">' + $(this).text() + '</span></label></div>';
    }

    $(".filter-content").append(data);
});
$('input.filter-item').change(function () {
    if ($(this).is(":checked")) {
        $(this).closest('.filter-col').hide();
        $('.js-catselect > option[value=' + $(this).attr('data-value') + ']').prop('selected', true);
        var text = $(this).closest('.filter-col').find('.text').text();
        $('.filter-list').append('<li><span>' + text + '</span><a class="choice-close" data-value=' + $(this).attr('data-value') + '></a></li>');
    }
    ;
})
$('.filter-list').on('click', '.choice-close', function () {
    $('.filter-item[data-value=' + $(this).attr('data-value') + ']').prop('checked', false).trigger('refresh').closest('.filter-col').show();
    $('.js-catselect > option[value=' + $(this).attr('data-value') + ']').prop('selected', false);
    $(this).closest('li').remove();
});

function fbShare(winWidth, winHeight, url) {
    var postUrl = $('meta[property="og:url"]').attr('content');
    if (url != '') {
        postUrl = url;
    }
    var name = $('meta[property="og:title"]').attr('content');
    var winTop = (screen.height / 2) - (winHeight / 2) - 120;
    var winLeft = (screen.width / 2) - (winWidth / 2);
    console.log(winTop)
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + postUrl, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}

function gplusShare() {
    var postUrl = $('meta[property="og:url"]').attr('content');
    var winTop = (screen.height / 2) - (400 / 2) - 120;
    var winLeft = (screen.width / 2) - (620 / 2);
    window.open('https://plus.google.com/share?url=' + postUrl, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + 620 + ',height=' + 400);
}

function linkedinShare() {
    var postUrl = $('meta[property="og:url"]').attr('content');
    var name = $('meta[property="og:title"]').attr('content');
    var winTop = (screen.height / 2) - (400 / 2) - 120;
    var winLeft = (screen.width / 2) - (620 / 2);
    window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + postUrl, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + 720 + ',height=' + 500);
}

function telegramShare() {
    var postUrl = $('meta[property="og:url"]').attr('content');
    var name = $('meta[property="og:title"]').attr('content');
    var winTop = (screen.height / 2) - (400 / 2) - 120;
    var winLeft = (screen.width / 2) - (620 / 2);
    // https://telegram.me/share/url?url=https://www.obozrevatel.com/economics/poryadok-tehosmotra-v-ukraine-izmenili.htm& text=Как в Европе? Украинцев ждут сюрпризы с техосмотром
    window.open('https://telegram.me/share/url?url=' + postUrl + '&text=' + name, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + 720 + ',height=' + 500);
}

function viberShare() {
    var postUrl = $('meta[property="og:url"]').attr('content');
    var name = $('meta[property="og:title"]').attr('content');
    var winTop = (screen.height / 2) - (400 / 2) - 120;
    var winLeft = (screen.width / 2) - (620 / 2);
    window.open('viber://forward?text=' + name + '%0D%0A' + postUrl, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + 720 + ',height=' + 500);
}

//viber://forward?text=%D0%9A%D0%B0%D0%BA%20%D0%B2%20%D0%95%D0%B2%D1%80%D0%BE%D0%BF%D0%B5%3F%20%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D1%86%D0%B5%D0%B2%20%D0%B6%D0%B4%D1%83%D1%82%20%D1%81%D1%8E%D1%80%D0%BF%D1%80%D0%B8%D0%B7%D1%8B%20%D1%81%20%D1%82%D0%B5%D1%85%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%BE%D0%BC%0D%0Ahttps%3A%2F%2Fwww.obozrevatel.com%2Feconomics%2Fporyadok-tehosmotra-v-ukraine-izmenili.htm
function twitterShare() {
    var postUrl = $('meta[property="og:url"]').attr('content');
    var name = $('meta[property="og:title"]').attr('content');
    var width = 575,
        height = 400,
        left = ($(window).width() - width) / 2,
        top = ($(window).height() - height) / 2,
        opts = 'status=1' +
            ',width=' + width +
            ',height=' + height +
            ',top=' + top +
            ',left=' + left;

    window.open('https://twitter.com/intent/tweet?text=' + name + '&url=' + postUrl, 'twitter', opts);
    return false;
}

var study = {
    'complete': function (lessonBlock) {
        $.ajax(
            {
                url: '/my_study/lesson-part/complete/',
                type: 'post',
                data: 'id=' + lessonBlock + '&' + yii.getCsrfParam() + '=' + yii.getCsrfToken(),
                success: function () {
                    $('.button-complete').remove();
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
                }
            });
    }
};
var course = {
    'addTrial': function (object) {

        $.magnificPopup.open(
            {
                type: 'ajax',
                mainClass: 'my-mfp-slide-bottom',
                //    closeOnContentClick: false,
                modal: true,
                removalDelay: 200,
                overflowY: 'scroll',
                items:
                    {
                        src: '/courses/default/trial-modal/'
                    },
                ajax: {
                    settings: {
                        type: 'GET',
                        data: {
                            object_id: $(object).attr('data-object-id')
                        }
                    }
                }
            });
        return false;

    }

};
var cart =
    {
        'add': function (object) {

            $.ajax(
                {
                    url: '/cart/default/add-to-cart/',
                    type: 'post',
                    data: {
                        object_id: $(object).attr('data-object-id'),
                        object_type: $(object).attr('data-object-type'),
                    },
                    success: function (json) {
                        location.href = '/cart/';
                    },
                    error: function (xhr, ajaxOptions, thrownError) {

                        //alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
                    }
                });
        }
    }


function addRating(object_id, value, url) {
    $.ajax(
        {
            url: url,
            type: 'post',
            data: 'object_id=' + object_id + '&value=' + value + '&' + yii.getCsrfParam() + '=' + yii.getCsrfToken(),
            dataType: 'json',
            success: function (data) {
                if (data.exist) {
                    $.notify({
                        message: 'Вы уже выставляли рейтинг!'
                    }, {
                        delay: 2000,
                        type: 'danger'
                    });
                    $('.active-widget a').removeClass('br-selected');
                    $('.active-widget a').each(function () {

                        if (parseInt($(this).attr('data-rating-value')) <= parseFloat($('.rating p').text())) {

                            $(this).addClass("br-selected");
                        }
                    });
                } else {
                    $('.active-widget a').removeClass('br-selected');
                    $('.active-widget a').each(function () {

                        if (parseInt($(this).attr('data-rating-value')) <= parseFloat(data)) {

                            $(this).addClass("br-selected");
                        }
                    });
                    $('.rating p').text(parseFloat(data));

                    $.notify({
                        message: 'Рейтинг добавлен!'
                    }, {
                        delay: 2000,
                        type: 'success'
                    });
                }


            },
            error: function (xhr, ajaxOptions, thrownError) {
                // alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
}

/*stars*/

$('.active-widget a').hover(function () {
    $('.active-widget a').each(function () {
        if ($(this).hasClass('br-selected')) {
            $(this).removeClass("br-hover").toggleClass('br-selected br-selected1');
        }
    });
    $(this).addClass("br-hover").prevAll().addClass("br-hover");
    return false;
}, function () {
    $('.active-widget a').removeClass("br-hover");
    $('.active-widget a').each(function () {
        if ($(this).hasClass('br-selected1')) {
            $(this).toggleClass('br-selected br-selected1');
        }
    });

});

$('.active-widget a').click(function () {
    $('.active-widget a').removeClass("br-selected").removeClass("br-selected1");
    $(this).addClass("br-selected").prevAll().addClass("br-selected");
    addRating($(this).parent().attr('data-id'), $(this).attr('data-rating-value'), $(this).parent().attr('data-url'));
    return false;
});


// timer
if (typeof jQuery('.clock').countdown === 'function') {
    if (jQuery('#date_vebinar').val() != null) {
        timer = jQuery('#date_vebinar').val();
        jQuery('.clock').countdown(timer, function (event) {
            var day,
                hour,
                minutes;
            //  console.log(event.offset);
            if (event.offset.daysToMonth > 4) {
                day = 'дней';
            } else if (event.offset.daysToMonth <= 4 && event.offset.daysToMonth > 1) {
                day = 'дня';
            } else {
                day = 'день';
            }
            if (event.offset.hours > 4) {
                hour = 'часов';
            } else if (event.offset.hours <= 4 && event.offset.hours > 1) {
                hour = 'часа';
            } else {
                hour = 'час';
            }

            if (event.offset.minutes > 4) {
                minutes = 'минут';
            } else if (event.offset.minutes <= 4 && event.offset.minutes > 1) {
                minutes = 'минуты';
            } else if (event.offset.minutes == 1) {
                minutes = 'минута';
            } else {
                minutes = '';
            }
            var $this = jQuery(this).html(event.strftime(''
                + '<div class="countbs"><span>%D ' + day + '</span></div>'
                + '<div class="countbs"><span>%H ' + hour + ' </span></div>'
                + '<div class="countbs"><span>%M ' + minutes + '</span></div>'));
        });
    }

}


$('.language-choice li').click(function () {
    var $container = $('.tab-content .tab-pane');
    var selector = $(this).attr('data-filter');
    $container.isotope({filter: selector, itemSelector: '.char_item'});
    $('.language-choice li').removeClass('active');
    $(this).addClass("active");
    return false;
});
$(document).on('click', '.login-modal', function () {
    showLoginModal();
});

var vebinar =
    {
        'add': function (object_id, object) {

            if (userLogin) {
                showLoginModal('vebinar', object_id);
            } else {
                $(object).html('<i class="fa fa-spinner fa-pulse fa-fw"></i>');
                $.ajax(
                    {
                        url: '/vebinars/default/add-vebinar/',
                        type: 'post',
                        data: 'object_id=' + object_id + '&' + yii.getCsrfParam() + '=' + yii.getCsrfToken(),
                        dataType: 'json',
                        success: function (json) {
                            if (json.add) {
                                $.notify({
                                    message: 'Вы записались на вебинар!'
                                }, {
                                    delay: 2000,
                                    type: 'success'
                                });
                                $('.vebinar_register-btn').text('Уже участвую');
                            }
                            else if (json.del) {
                                $.notify({
                                    message: 'Вы отписались от вебинара!'
                                }, {
                                    delay: 2000,
                                    type: 'success'
                                });
                                $('.vebinar_register-btn').text('Записаться');
                            }
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            //alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
                        }
                    });
            }
        }
    };

function showLoginModal(type, id) {
    $.magnificPopup.open(
        {
            type: 'ajax',
            mainClass: 'my-mfp-slide-bottom',
            //    closeOnContentClick: false,
            midClick: true,
            modal: true,
            removalDelay: 200,
            overflowY: 'scroll',
            items:
                {
                    src: '/ajax/login-modal/?object=' + type + '&id=' + id
                },
        });
    return false;
}

var conference =
    {
        'addSpecial': function (object_id, objectType) {

            $.magnificPopup.open(
                {
                    type: 'ajax',
                    mainClass: 'my-mfp-zoom-in',
                    midClick: true,
                    modal: true,
                    removalDelay: 200,
                    overflowY: 'scroll',
                    items:
                        {
                            src: '/conference/popup/special-transaction/?id=' + object_id + '&type=' + objectType
                        },
                });
            return false;

        },
        'add': function (object_id, object) {
            if (userLogin) {
                showLoginModal('conference', object_id);
            } else {
                $('.conference-registe-btn').html('<i class="fa fa-spinner fa-pulse fa-fw"></i>');
                $.ajax(
                    {
                        url: '/conference/default/add-conference/',
                        type: 'post',
                        data: 'object_id=' + object_id + '&' + yii.getCsrfParam() + '=' + yii.getCsrfToken(),
                        dataType: 'json',
                        success: function (json) {
                            if (json.add) {
                                $.notify({
                                    message: 'Вы записались на конференцию!'
                                }, {
                                    delay: 2000,
                                    type: 'success'
                                });
                                $('.conference-registe-btn').text('Уже участвую');
                            }
                            else if (json.del) {
                                $.notify({
                                    message: 'Вы отписались от конференции!'
                                }, {
                                    delay: 2000,
                                    type: 'success'
                                });
                                $('.conference-registe-btn').text('Принять участие');
                            }
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            //alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
                        }
                    });
            }
        }
    };
var seminar =
    {
        'add': function (object_id, object) {
            $('.seminar_register_btn').html('<i class="fa fa-spinner fa-pulse fa-fw"></i>');
            $.ajax(
                {
                    url: '/seminars/default/add-seminar/',
                    type: 'post',
                    data: 'object_id=' + object_id + '&' + yii.getCsrfParam() + '=' + yii.getCsrfToken(),
                    dataType: 'json',
                    success: function (json) {
                        loadHide();
                        if (json.add) {
                            $.notify({
                                message: 'Вы записались на семинар!'
                            }, {
                                delay: 2000,
                                type: 'success'
                            });
                            $('.seminar_register_btn').text('Отказаться от участия');
                            //кнопка для онлайн семінара(підписка)
                            $('.pay-seminar').text('Уже участвую');
                        }
                        else if (json.del) {
                            $.notify({
                                message: 'Вы отписались от семинара!'
                            }, {
                                delay: 2000,
                                type: 'success'
                            });
                            $('.seminar_register_btn').text('Принять участие');
                            //кнопка для онлайн семінара(підписка)
                            $('.pay-seminar').text('Зарегистрироваться бесплатно');
                        }
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        //alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
                    }
                });
        }
    };


function initMasketTelephone() {
    var phone = $(".masked-phone");
    var mask_nubmer = $('#mask-number');

    if (phone.length) {

        // phone.loadUtils('/libs/tel-inp/js/utils.js');
        $.fn.intlTelInput.loadUtils("/libs/tel-inp/js/utils.js");

        phone.intlTelInput({
            //    utilsScript: '/libs/tel-inp/js/utils.js',
            initialCountry: 'auto',
            separateDialCode: true,
            hiddenInput: 'international-phone-number',
            customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
                mask = selectedCountryPlaceholder.replace(/[0-9]/g, '9');
                phone.inputmask({"mask": mask, "clearIncomplete": true});
                mask_nubmer.val('+' + selectedCountryData.dialCode);
                selectedCountryPlaceholder = selectedCountryPlaceholder.replace(/[0-9]/g, 'X');
                return selectedCountryPlaceholder;
            },
            geoIpLookup: function (callback) {
                $.get("https://ipinfo.io", function () {
                }, "jsonp").always(function (resp) {


                    var countryCode = (resp && resp.country) ? resp.country : "";
                    callback(countryCode);
                });
            }
        });

    }
};


function messageLink(id, link) {
    if (link != '') {
        $.ajax(
            {
                url: '/account/messages/set-read/',
                method: 'post',
                data: {id: id},
                dataType: 'json',
                success: function (response) {

                }
            });
        window.location.reload(false);
        window.location = link;

    } else {
        window.location = 'javascript:void(0)';
    }
}

$(document).ready(function () {


    var howTostudy = $('#howToStudy');

    if (howTostudy.length) {
        getHowStudy(howTostudy.data('course-id'));
    }
    if (typeof $.fn.inputmask != 'undefined') {
        $('#settingform-birthday').inputmask({"mask": '9999-99-99', "clearIncomplete": true});
    }
    initMasketTelephone();

    /*анімація для переключення мов в глосарії*/
    if (typeof $.fn.isotope != 'undefined') {
        var $container = $('.tab-content .tab-pane');
        var selector = $('.language-choice li:first').attr('data-filter');
        $container.isotope({filter: selector, itemSelector: '.char_item'});
    }

    if (!userLogin) {

        $.ajax(
            {
                url: '/account/messages/main-notify/',
                dataType: 'json',
                success: function (response) {
                    if (response.messages.length > 0) {
                        var listLi = '';
                        $('.notification .notice-container').append($('<div/>').addClass('notice-number').text(response.messages.length));

                        $.each(response.messages, function (index, value) {
                            if (index < 4) {
                                //href="'+(value.link !='' ? value.link : 'javascript:void(0)' )+'"
                                listLi += '<li><a onclick="messageLink(' + value.id + ',\'' + value.link + '\')" href="javascript:void(0)" ><svg viewBox="0 0 97.333336 104.7108" height="104.7108" width="97.333336" xml:space="preserve" id="svg212123" version="1.1"><defs id="defs613"><clipPath id="clipPath1823" clipPathUnits="userSpaceOnUse"><path id="path1621" d="M 0,78.533 H 73 V 0 H 0 Z"/></clipPath></defs><g transform="matrix(1.3333333,0,0,-1.3333333,0,104.7108)" id="g10123"><g id="g12221"><g id="g1421321"><g transform="translate(51.5,32.6131)" id="g20214324"><path id="path22123214" style="fill-opacity:1;fill-rule:nonzero;stroke:none" d="M 0,0 C -0.077,-0.547 0.303,-1.053 0.85,-1.13 H 1 C 1.502,-1.135 1.93,-0.767 2,-0.27 2.1,0.4 4.31,16.32 -1.28,22 -1.667,22.395 -2.3,22.402 -2.695,22.015 -3.09,21.628 -3.097,20.995 -2.71,20.6 2.18,15.64 0,0.15 0,0"/></g><g transform="translate(51.5,32.6131)" id="g2412342"><path id="path2634321" style="stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" d="M 0,0 C -0.077,-0.547 0.303,-1.053 0.85,-1.13 H 1 C 1.502,-1.135 1.93,-0.767 2,-0.27 2.1,0.4 4.31,16.32 -1.28,22 -1.667,22.395 -2.3,22.402 -2.695,22.015 -3.09,21.628 -3.097,20.995 -2.71,20.6 2.18,15.64 0,0.15 0,0 Z"/></g><g transform="translate(65.5,13.4731)" id="g28123124"><path id="path3032423" style="fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 0,0 h -58 c -2.209,0 -4,1.791 -4,4 0,2.209 1.791,4 4,4 h 11 c 0.552,0 1,0.448 1,1 0,0.552 -0.448,1 -1,1 h -6 v 21 c 0,13.255 10.745,24 24,24 13.255,0 24,-10.745 24,-24 V 10 h -31 c -0.552,0 -1,-0.448 -1,-1 0,-0.552 0.448,-1 1,-1 H 0 C 2.209,8 4,6.209 4,4 4,1.791 2.209,0 0,0 m -29,-10 c -4.582,0.002 -8.431,3.446 -8.94,8 h 17.88 c -0.504,-4.558 -4.355,-8.007 -8.94,-8.01 z m 0,71.57 c 2.681,0.002 4.887,-2.111 5,-4.79 -3.301,0.658 -6.699,0.658 -10,0 0.113,2.679 2.319,4.792 5,4.79 M 0,9.99 h -3 v 21 c 0.024,11.733 -7.728,22.063 -19,25.32 0.002,0.037 0.002,0.073 0,0.11 v 0.14 c 0,3.866 -3.134,7 -7,7 -3.866,0 -7,-3.134 -7,-7 v -0.14 c -0.002,-0.037 -0.002,-0.073 0,-0.11 -11.276,-3.258 -19.028,-13.593 -19,-25.33 v -21 h -3 c -3.314,0 -6,-2.686 -6,-6 0,-3.314 2.686,-6 6,-6 h 18.05 c 0.579,-6.048 5.95,-10.481 11.998,-9.902 5.247,0.502 9.4,4.655 9.902,9.902 H 0 c 3.314,0 6,2.686 6,6 0,3.314 -2.686,6 -6,6 z"/></g><g transform="translate(65.5,13.4731)" id="g32234324"><path id="path34234234" style="stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" d="m 0,0 h -58 c -2.209,0 -4,1.791 -4,4 0,2.209 1.791,4 4,4 h 11 c 0.552,0 1,0.448 1,1 0,0.552 -0.448,1 -1,1 h -6 v 21 c 0,13.255 10.745,24 24,24 13.255,0 24,-10.745 24,-24 V 10 h -31 c -0.552,0 -1,-0.448 -1,-1 0,-0.552 0.448,-1 1,-1 H 0 C 2.209,8 4,6.209 4,4 4,1.791 2.209,0 0,0 Z m -29,-10 c -4.582,0.002 -8.431,3.446 -8.94,8 h 17.88 c -0.504,-4.558 -4.355,-8.007 -8.94,-8.01 z m 0,71.57 c 2.681,0.002 4.887,-2.111 5,-4.79 -3.301,0.658 -6.699,0.658 -10,0 0.113,2.679 2.319,4.792 5,4.79 z M 0,9.99 h -3 v 21 c 0.024,11.733 -7.728,22.063 -19,25.32 0.002,0.037 0.002,0.073 0,0.11 v 0.14 c 0,3.866 -3.134,7 -7,7 -3.866,0 -7,-3.134 -7,-7 v -0.14 c -0.002,-0.037 -0.002,-0.073 0,-0.11 -11.276,-3.258 -19.028,-13.593 -19,-25.33 v -21 h -3 c -3.314,0 -6,-2.686 -6,-6 0,-3.314 2.686,-6 6,-6 h 18.05 c 0.579,-6.048 5.95,-10.481 11.998,-9.902 5.247,0.502 9.4,4.655 9.902,9.902 H 0 c 3.314,0 6,2.686 6,6 0,3.314 -2.686,6 -6,6 z"/></g></g></g></g></svg>' + value.heading + '</a></li>';
                            }

                        });
                        $('.notification .notification-menu ul').html(listLi);
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    //alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
                }
            });
    }
});


$(document).on('click', '.p-left-cont-more', function () {
    var id = $(this).attr('data-id');
    $.magnificPopup.open(
        {
            type: 'ajax',
            mainClass: 'my-mfp-zoom-in',
            midClick: true,
            removalDelay: 200,
            overflowY: 'scroll',
            items:
                {
                    src: '/conference/popup/offline-more/?id=' + id
                },
        });
    return false;
});
$(document).on('click', '.text-offert .offert-link', function () {

    $.magnificPopup.open(
        {
            type: 'ajax',
            mainClass: 'my-mfp-zoom-in',
            closeOnBgClick: true,
            removalDelay: 200,
            overflowY: 'scroll',
            modal: true,
            items:
                {
                    src: '/cart/default/offert-text/'
                },
        });
    return false;
});

$(document).on('click', '#offert-link-subscrption', function () {


    $.magnificPopup.open(
        {
            type: 'ajax',
            //   mainClass: 'my-mfp-zoom-in',
            //    removalDelay: 200,
            overflowY: 'scroll',
            closeOnContentClick: false,
            items:
                {
                    src: '/subscription/default/offert-text/',
                    //type:'inline'
                },
        });
    return false;
});

$(document).on('click', '#button-help', function () {
    $.magnificPopup.open(
        {
            type: 'ajax',
            mainClass: 'my-mfp-zoom-in',
            midClick: true,
            modal: true,
            removalDelay: 200,
            overflowY: 'scroll',
            items:
                {
                    src: '/ajax/help-form/'
                },
        });
    return false;
});

$(document).on('click', '.btn-question-modal', function () {
    userId = $(this).data('user-id');
    $.magnificPopup.open(
        {
            type: 'ajax',
            mainClass: 'my-mfp-zoom-in',
            midClick: true,
            modal: true,
            removalDelay: 200,
            overflowY: 'scroll',
            items:
                {
                    src: '/my_study/group/kurator-call/?userId=' + userId
                },
        });
    return false;
});

$(document).on('click', '.online-conf-more-block', function () {
    var id = $(this).attr('data-id');
    $.magnificPopup.open(
        {
            type: 'ajax',
            mainClass: 'my-mfp-zoom-in',
            midClick: true,
            removalDelay: 200,
            overflowY: 'scroll',
            items:
                {
                    src: '/conference/popup/online-more/?id=' + id
                },
        });
    return false;
});

$(document).on('click', '.online-conf-more-block', function () {
    var id = $(this).attr('data-id');
    $.magnificPopup.open(
        {
            type: 'ajax',
            mainClass: 'my-mfp-zoom-in',
            midClick: true,
            removalDelay: 200,
            overflowY: 'scroll',
            items:
                {
                    src: '/conference/popup/online-more/?id=' + id
                },
        });
    return false;
});
$(document).on('click', '#get-sponsor', function () {
    var id = $(this).attr('data-conference-id');
    $.magnificPopup.open(
        {
            type: 'ajax',
            mainClass: 'my-mfp-zoom-in',
            midClick: true,
            modal: true,
            removalDelay: 200,
            overflowY: 'scroll',
            items:
                {
                    src: '/conference/popup/get-sponsor/?id=' + id
                },
        });
    return false;
});

$(document).on('click', '#get-speacker-seminar', function () {
    $.magnificPopup.open(
        {
            type: 'ajax',
            mainClass: 'my-mfp-zoom-in',
            midClick: true,
            modal: true,
            removalDelay: 200,
            overflowY: 'scroll',
            items:
                {
                    src: '/seminars/default/get-speacker/'
                },
        });
    return false;
});


$(document).on('click', '.payment-method a.method', loadShow);
$(document).on('click', '.type-participation-block-bottom a.pay-seminar', loadShow);

$('#formCall form').on('beforeSubmit', loadShow);
$('#subscribe-form form').on('beforeSubmit', loadShow);

$(document).on('pjax:success', function () {
    loadHide()
});

function loadShow() {
    $('.loaderForm').show();
}

function maskElement(element, status) {

    if (status == true) {
        $('<div/>')
            .attr('class', 'smca-modal-loadmask')
            .prependTo(element);
        $('<div class="smca-modal-loadmask-loading"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i></div>').insertAfter($('.smca-modal-loadmask'));
    } else {
        $('.smca-modal-loadmask').remove();
        $('.smca-modal-loadmask-loading').remove();
    }
}

function loadHide() {
    $('.loaderForm').hide();
}

function showThankModal() {
    $.magnificPopup.open(
        {
            type: 'ajax',
            mainClass: 'my-mfp-zoom-in',
            midClick: true,
            removalDelay: 200,
            overflowY: 'scroll',
            items:
                {
                    src: '/site/show-thank-modal/'
                },
        });
    return false;
}

$(document).on('click', '#more-upload', loadMoreComments);


function loadMoreComments() {
    var start = parseInt($('#comments_page_start').val())
    vebinarId = parseInt($('#vebinarId').attr('data-id'));
    $('#comments_page_start').val(start + 1);
    $.ajax({
        url: '/vebinars/default/load-comments/',
        data: {'start': start, 'webinarId': vebinarId},
        method: 'POST',
        success: function (data) {
            $('#reviews .comments_wrap').append(data);
            /* if($('section#service .items .item').length==parseInt($('#count_services').val())){
                 $('#more-upload').hide();
             }*/
        }
    });
}

//передпоказ картинок
$(document).on('change', '.photo-input', function () {

    var input = $(this)[0];
    if (input.files && input.files[0]) {
        if (input.files[0].type.match('image.*')) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.small_img').attr('src', e.target.result);
                //               $('#img_block').find('.image_preview').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);

        } else
            console.log('is not image mime type');
    } else
        console.log('not isset files data or files API not supordet');

});

$(".yakor").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top - 100;

    $('html,body').animate({scrollTop: destination}, 1100);
    return false;
});


function getHowStudy(courseId) {
    $.ajax(
        {
            url: '/courses/default/get-how-study/',
            type: 'get',
            data: 'courseId=' + courseId,
            success: function (response) {

                $('.js-how-study').html(response);

            }

        });
}

/*$(document).ready(function () {
    var source_link = '<p>Подробнее: <a href="' + location.href + '">' + location.href + '</a></p>';
    if (window.getSelection) $('body').bind(
        'copy',
        function () {
            var selection = window.getSelection();
            var range = selection.getRangeAt(0);

            var magic_div = $('<div>').css({
                overflow: 'hidden',
                width: '1px',
                height: '1px',
                position: 'absolute',
                top: '-10000px',
                left: '-10000px'
            });
            magic_div.append(range.cloneContents(), source_link);
            $('body').append(magic_div);

            var cloned_range = range.cloneRange();
            selection.removeAllRanges();

            var new_range = document.createRange();
            new_range.selectNode(magic_div.get(0));
            selection.addRange(new_range);

            window.setTimeout(
                function () {
                    selection.removeAllRanges();
                    selection.addRange(cloned_range);
                    magic_div.remove();
                }, 0
            );
        }
    );
});*/

function getFBShares(page) {
    var shares;

    $.getJSON("https://graph.facebook.com/?ids=" + page, function (data) {
        if (data[page].share) {
            console.log(data[page].share);
            shares = data[page].share.share_count;
            $(".blog-socials .social-item.face .repost").text(shares);
        }
    });
}


$(document).on('click', '.open-answer_link', function () {

    var comment = $(this).parent();
    if (comment.next().hasClass('open')) {
        $(this).removeClass('opened');
        comment.next().removeClass('open');
    } else {
        $(this).addClass('opened');
        comment.next().addClass('open');
    }

});
$(function () {
    $(document).on('click', '.forgot', function () {
        $('#enterModal a[href="#forget"]').tab('show');
    });
});
$(document).ready(function () {
    $(".side-bar.inner-side-bar").hover(function () {
        $(this).toggleClass('opened');
        $('.study_new-wrapper').toggleClass('active');
    });
    if ($(window).width() >= 1200) {
        $(".side-bar").removeClass('active');
        $("body").removeClass('nav--active');
        $(".side-bar-hamburger").removeClass('is-active');
    }


    $(window).resize(function () {
            if ($(window).width() >= 1200) {
                $(".side-bar").removeClass('active');
                $("body").removeClass('nav--active');
                $(".side-bar-hamburger").removeClass('is-active');
            }
        }
    );
    $('.web-tab .curse-block a').click(function () {
        $(this).closest('.curse-block').toggleClass('opened');
    });
});

function animateResultCount(number, target, elem) {
    if (number < target) {
        var interval = setInterval(function () {
            $(elem).text(number + '%');
            $('.progress-block .progress-scale .scale-item').attr('style', 'width:' + number + '%');
            if (number >= target) {
                clearInterval(interval);
                return;
            }
            number++;
        }, 30);
    }
    if (target < number) {
        var interval = setInterval(function () {
            $(elem).text(number + '%');
            $('.progress-block .progress-scale .scale-item').attr('style', 'width:' + number + '%');
            if (target >= number) {
                clearInterval(interval);
                return;
            }
            number--;
        }, 30);
    }
}

/*
function getRating(groupId) {
    $.ajax(
        {
            url: '/my_study/group/get-rating/' + groupId + '/',
            type: 'get',
            dataType: 'json',
            success: function (response) {
                animateResultCount(0, response.rating, '.web-system-business .progress-block p > span');
            }
        });

}*/

function findError() {
    $(document).on('keydown', function (e) {
        e = e || window.event;
        if (e.ctrlKey && e.keyCode == 13) {
            var href = location.href;
            if (window.getSelection) {
                var range = window.getSelection();
                var text = range.toString();
                if (text.length > 255) {
                    alert("Выделеный слишком большой текст");
                    return false;
                }

                $.magnificPopup.open(
                    {
                        type: 'ajax',
                        mainClass: 'my-mfp-zoom-in',
                        midClick: true,
                        modal: true,
                        removalDelay: 200,
                        overflowY: 'scroll',
                        items:
                            {
                                src: '/ajax/find-error/'
                            },
                        ajax: {
                            settings: {
                                type: 'POST',
                                data: {
                                    text: text, href: href
                                }
                            }
                        }
                    });
                return false;
            } else {
                if (document.selection.createRange) {
                    var range = document.selection.createRange();
                    var text = range.text;
                    if (text.length > 255) {
                        alert("Выделеный слишком большой текст");
                        return false;
                    }
                    $.magnificPopup.open(
                        {
                            type: 'ajax',
                            mainClass: 'my-mfp-zoom-in',
                            midClick: true,
                            modal: true,
                            removalDelay: 200,
                            overflowY: 'scroll',
                            items:
                                {
                                    src: '/ajax/find-error/'
                                },
                            ajax: {
                                settings: {
                                    type: 'POST',
                                    data: {
                                        text: text, href: href
                                    }
                                }
                            }
                        });
                    return false;
                }
            }
        }
        return true;
    });

}

$(document).ready(function () {

    var people = $('.order-btn');
    $counter = 0;

    if (people.length > 0) {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop() + $(window).height();
            var offset = people.offset().top;
            if (scroll > offset && $counter == 0) {
                $('.people').css('display', 'block');
                $counter = 1;
            }
            if (window.innerWidth < 1024) {
                var none = $('.people')[0];
                $('.people').css('display', 'none')
            }
        });
    }


    if (typeof AOS !== 'undefined') {
        if ($(window).width() >= 768) {
            AOS.init();
        } else {
            $('*[data-aos]').removeAttr('data-aos');
        }
        $(window).resize(function () {
            if ($(window).width() <= 768) {
                $('*[data-aos]').removeAttr('data-aos');
            } else {
                AOS.init();
            }
        });
    }


    /*collapse questions*/
    $('.questions .item .collapse').click(function () {
        $(this).closest('.questions .item').find('.open').slideToggle();
        $(this).toggleClass('opened');
    })


    if ($(window).width() <= 1400) {

        /* $('.teachers-slider').owlCarousel({
             loop: true,
             margin: 0,
             nav: true,
             autoplay: true,
             autoplayTimeout: 3000,
             autoHeight: true,
             dots: false,
             items: 3,
             animateIn: 'fadeIn',
             navText: [
                 "<img src='/images/img/slider-arrow.png'/>",
                 "<img src='/images/img/slider-arrow.png'/>"
             ],
             responsive: {
                 0: {
                     items: 1
                 },
                 576: {
                     items: 2
                 },
                 768: {
                     items: 3
                 },
                 991: {
                     items: 3
                 },
                 1199: {
                     items: 3
                 },
             }
         });*/

    }
    else {
        $('.teachers-slider').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
        $('.teachers-slider').find('.owl-stage-outer').children().unwrap();
    }


});


// tabs
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


$(window).scroll(function () {
    $('.order-img').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 300) {
            $(this).addClass('animate');
        }
    });
});


$('.program-row .item').click(function () {
    $(this).closest('.program-row .item ').find('ul').slideToggle();
    $(this).toggleClass('opened');
})


$(document).on({
    mouseenter: function () {
        $(this).parent().find('.certificate__item-share').show();
    },
    mouseleave: function () {
        $(this).parent().find('.certificate__item-share').hide();

    }
}, ".certificate__item .certificate__item-link");

$(document).on('click', '.certificate__item .certificate__item-link', function () {

    if ($(this).attr('id') == 'letter') {
        $(this).css({'opacity': 0.3})
        $('#sent').show();
    } else if ($(this).attr('id') == 'color-language') {
        if ($('#language:visible')) {
            $('#language').hide();
            $(this).css({'opacity': 1});
        } else {
            $(this).css({'opacity': 0.3})
            $('#language').show();
        }

    }
});
$(document).on('click', '.certificate__item-letter #close', function () {
    $('.certificate__item .certificate__item-link').css({'opacity': 1})
    $('#sent').hide();
});

