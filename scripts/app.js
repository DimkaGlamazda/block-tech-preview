$(function () {


    new Video();
    new Slider();





    setTimeout(function() {
        $('.home-representative-message-section').addClass('view');
    }, 3000);

    $('.h-section-part-1-column img, .h-section-part-1-column a, .h-section-part-1-column p').on('mouseover', function() {
        $(this).parent().addClass('active');    
    });

    $(document).on('mouseout', '.h-section-part-1-column', function () {
        $(this).removeClass('active');    
    });

});

var Video = function ()
{
    var w = $(window);
    var bg = $('[data-js="h-header-bg"]');

    if(w.height() > w.width())
    {
        bg.height(w.height());
    }
    else
    {
        bg.width(w.width());
    }

    $('[data-js="h-header-section"] .wrapper').height(w.height());
};


var Slider = function ()
{
    var slider = $('.home-slider');

    slider.bxSlider({
        mode: "horizontal",
        auto: true,
        loop : true,
        pause: 5000,
        minSlides: 2,
        maxSlides: 2,
        controls: false,
        pagerSelector: ".dots",
        autoHover: true
    });

    $(document).on('click', '[aria-hidden="false"] .home-slider-next', function() {
        slider.goToNextSlide();
        return false;
    });

    $(document).on('click', '[aria-hidden="false"] .home-slider-prev', function() {
        slider.goToPrevSlide();
        return false;
    });
};



