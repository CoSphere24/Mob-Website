$(function () {
    //init 
    init();
    //init wow effects
    new WOW().init();

    //scroll menu
    $(window).scroll(function () {
        init();
    });

    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //init function
    function init() {
        var secondFeature = $('#features').offset().top;
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $('.sticky-navigation').css({"background-color": '#FF5613'});
        } else {
            $('.sticky-navigation').css({"background-color": 'transparent'});
        }
        if (scroll >= secondFeature - 200) {
            $(".mobileScreen").css({'background-position': 'center top'});
        }
        return false;
    }
});
