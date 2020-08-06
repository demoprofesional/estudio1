(function ($) {
  'use strict';

  // Preloader
  $(window).on('load', function () {
    $('#loading-preloader')
      .delay(2000)
      .fadeOut('slow', function () {
        $(this).remove();
      });
  });
})(window.jQuery);

  // 2020 june dentaura preloader
