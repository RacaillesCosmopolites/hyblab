/*
$('[data-popup-close]').keydown(function(e){
        // ESCAPE key pressed
        if (e.keyCode == 27) {
            var targeted_popup_class = jQuery(this).attr('data-popup-close');
            $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

            // un-lock scroll position
            var html = jQuery('html');
            var scrollPosition = html.data('scroll-position');
            html.css('overflow', html.data('previous-overflow'));
            window.scrollTo(scrollPosition[0], scrollPosition[1])

            $(".nav").css("position", "sticky");
     
            e.preventDefault();
        }
    });
*/

$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {

        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
        
        // lock scroll position, but retain settings for later
        var scrollPosition = [
          self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
          self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
        ];
        var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
        html.data('scroll-position', scrollPosition);
        html.data('previous-overflow', html.css('overflow'));
        html.css('overflow', 'hidden');
        window.scrollTo(scrollPosition[0], scrollPosition[1]);

        e.preventDefault();

        // $(".nav").removeAttr("position");
        $(".nav").css("position", "static");
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

        // un-lock scroll position
        var html = jQuery('html');
        var scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1])

        $(".nav").css("position", "sticky");
 
        e.preventDefault();
    });

    /*
    $('[data-popup-close]').keydown(function(e){
        // ESCAPE key pressed
        if (e.keyCode == 27) {
            var targeted_popup_class = jQuery(this).attr('data-popup-close');
            $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

            // un-lock scroll position
            var html = jQuery('html');
            var scrollPosition = html.data('scroll-position');
            html.css('overflow', html.data('previous-overflow'));
            window.scrollTo(scrollPosition[0], scrollPosition[1])

            $(".nav").css("position", "sticky");
     
            e.preventDefault();
        }
    });
    */

});