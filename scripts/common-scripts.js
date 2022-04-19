;
(function ($) {
    $(function () {


        
        var $header = $("header"),
            $clone = $header.before($header.clone().addClass("fixedTop isSticky")),
            $fixedHeader = $('.fixedTop'),
            $headerHeight = $fixedHeader.outerHeight() + 5,
            lastPos = 0;
        $(window).resize(function () {
            $headerHeight = $fixedHeader.outerHeight() + 5;
        });
        $(window).on("scroll", function () {
            $('header:not(.fixedTop)').removeClass('navShown');
            $('header:not(.fixedTop) .nav-wrap').slideUp();

            var fromTop = $(window).scrollTop();
            if (fromTop > $headerHeight * 4) {
                $fixedHeader.css({
                    top: 0
                });

                if (fromTop < lastPos) {
                    $fixedHeader.css('top', '-' + $headerHeight + 'px');
                }
                lastPos = fromTop;


            } else {
                $fixedHeader.css('top', '-' + $headerHeight + 'px');
                $('.fixedTop').removeClass('navShown');
                $('.fixedTop .nav-wrap').slideUp();
                $('.fixedTop').find('.menu-icon-wrap span').text('MENU');
            }
        });





        // Begin input common focus and blur for value.
        $('input:text, input:password,input[type="email"],input[type="tel"],input[type="number"],input[type="search"], textarea').focus(function () {
            if (this.value == this.defaultValue) {
                this.value = '';
            }
        }).blur(function () {
            if (!this.value) {
                this.value = this.defaultValue;
            }
        });
        // Ends input common focus and blur for value.


        $('.menu-icon-wrap').on('click', function () {
            if ($(this).parents('header').find('.menu-icon-wrap span').text() === 'MENU') {
                $(this).parents('header').find('.menu-icon-wrap span').text('CLOSE');
                $(this).parents('header').addClass('navShown');
                $(this).parents('header').find('.nav-wrap').slideDown();
            } else if ($(this).parents('header').find('.menu-icon-wrap span').text() === 'CLOSE') {
                $(this).parents('header').find('.menu-icon-wrap span').text('MENU');
                $(this).parents('header').removeClass('navShown');
                $(this).parents('header').find('.nav-wrap').slideUp();
            }
        });








    }) // End ready function.




})(jQuery);