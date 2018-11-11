var height = jQuery(window).height();
      var headerHeight = jQuery('header').outerHeight();
      var footerHeight = jQuery('.footer').outerHeight();
      var finalHeight = height - headerHeight - footerHeight - 75;
      jQuery('#style').css('min-height', finalHeight);
      jQuery(window).resize(function(){
        var height = jQuery(window).height();
      var headerHeight = jQuery('header').outerHeight();
      var footerHeight = jQuery('.footer').outerHeight();
      var finalHeight = height - headerHeight - footerHeight - 75;
      jQuery('#style').css('min-height', finalHeight);
    });