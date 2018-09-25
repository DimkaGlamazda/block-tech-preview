$(function () {


	$('[data-js="h-header-bg"]').height($(window).height());
	$('[data-js="h-header-section"] .wrapper').height($(window).height())


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

        setTimeout(function() {
                $('.home-representative-message-section').addClass('view');
        }, 3000);

        $('.h-section-part-1-column img, .h-section-part-1-column a, .h-section-part-1-column p').on('mouseover', function() {
            $(this).parent().addClass('active');    
        })
        $(document).on('mouseout', '.h-section-part-1-column', function () {
            $(this).removeClass('active');    
        });

})