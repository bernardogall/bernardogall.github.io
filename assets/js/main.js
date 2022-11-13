(function($) {
//////////////////////////////////////////////////////////////////////////////////////////////////// Change Tittle
window.onunload = changeTitle
window.onblur = changeTitle
window.onfocus = function() {
  document.title = "Bernardo Gall"
}
function changeTitle() {
  document.title = "Get back here dude!"
}
//////////////////////////////////////////////////////////////////////////////////////////////////// Skel
    skel.breakpoints({
        large: '(max-width: 1680px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    $(function() {

        var	$window = $(window),
            $body = $('body'),
            $html = $('html');

        // Disable animations/transitions until the page has loaded.
            $html.addClass('is-loading');

            $window.on('load', function() {
                window.setTimeout(function() {
                    $html.removeClass('is-loading');
                }, 0);
            });

    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > $(window).height()-1) {
                $('.q1').fadeIn();
                $('.q2').fadeIn();
            } else {
                $('.q1').fadeOut();
                $('.q2').fadeOut();
            }
        });
    });
//////////////////////////////////////////////////////////////////////////////////////////////////// Touch mode.
            if (skel.vars.mobile) {

                var $wrapper;

                // Create wrapper.
                    $body.wrapInner('<div id="wrapper" />');
                    $wrapper = $('#wrapper');

                    // Hack: iOS vh bug.
                        if (skel.vars.os == 'ios')
                            $wrapper
                                .css('margin-top', -25)
                                .css('padding-bottom', 25);

                    // Pass scroll event to window.
                        $wrapper.on('scroll', function() {
                            $window.trigger('scroll');
                        });

                // Scrolly.
                    $window.on('load.hl_scrolly', function() {

                        $('.scrolly').scrolly({
                            speed: 1500,
                            parent: $wrapper,
                            pollOnce: true
                        });

                        $window.off('load.hl_scrolly');

                    });

                // Enable touch mode.
                    $html.addClass('is-touch');

            }
            else {

                // Scrolly.
                    $('.scrolly').scrolly({
                        speed: 1500
                    });

            }

        // Fix: Placeholder polyfill.
            $('form').placeholder();

        // Prioritize "important" elements on medium.
            skel.on('+medium -medium', function() {
                $.prioritize(
                    '.important\\28 medium\\29',
                    skel.breakpoint('medium').active
                );
            });

//////////////////////////////////////////////////////////////////////////////////////////////////// Header.
            var $header = $('#header'),
                $headerTitle = $header.find('header'),
                $headerContainer = $header.find('.container');
            // Scrollex.
                skel.on('-small !small', function() {
                    $header.scrollex({
                        terminate: function() {

                            $headerTitle.css('opacity', '');

                        },
                        scroll: function(progress) {

                            // Fade out title as user scrolls down.
                                if (progress > 0.5)
                                    x = 1 - progress;
                                else
                                    x = progress;

                                $headerTitle.css('opacity', Math.max(0, Math.min(1, x * 2)));

                        }
                    });
                });

                skel.on('+small', function() {

                    $header.unscrollex();

                });
//////////////////////////////////////////////////////////////////////////////////////////////////// Main sections.
            $('.main').each(function() {

                var $this = $(this),
                    $primaryImg = $this.find('.image.primary > img'),
                    $bg,
                    options;

                // No primary image? Bail.
                    if ($primaryImg.length == 0)
                        return;

                // Hack: IE8 fallback.
                    if (skel.vars.IEVersion < 9) {

                        $this
                            .css('background-image', 'url("' + $primaryImg.attr('src') + '")')
                            .css('-ms-behavior', 'url("css/ie/backgroundsize.min.htc")');

                        return;

                    }

                // Create bg and append it to body.
                    $bg = $('<div class="main-bg" id="' + $this.attr('id') + '-bg"></div>')
                        .css('background-image', ('url("' + $primaryImg.attr('src') + '")'))
                        .appendTo($body);

                // Scrollex.
                    options = {
                        mode: 'middle',
                        delay: 200,
                        top: '-10vh',
                        bottom: '-10vh'
                    };

                    if (skel.canUse('transition')) {

                        options.init = function() { $bg.removeClass('active'); };
                        options.enter = function() { $bg.addClass('active'); };
                        options.leave = function() { $bg.removeClass('active'); };

                    }
                    else {

                        $bg
                            .css('opacity', 1)
                            .hide();

                        options.init = function() { $bg.fadeOut(0); };
                        options.enter = function() { $bg.fadeIn(400); };
                        options.leave = function() { $bg.fadeOut(400); };

                    }

                    $this.scrollex(options);
            });

    });

})(jQuery);
