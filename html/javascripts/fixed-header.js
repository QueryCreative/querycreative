(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 250) {
                $('#fixed').fadeIn(500);
            } else {
                $('#fixed').fadeOut(500);
            }
        });
    });
})(jQuery);