(function ($) {
  'use strict';

  var $portfolioToggle = $('.portfolio article h2');

  function portfolioToggle (activeItem) {
    activeItem.closest('article').find('figure').slideToggle('slow');
    activeItem.find('a').toggleClass('rotate');
    activeItem.toggleClass('active');
  }

  $portfolioToggle.on('click touchstart', function (e) {
    e.preventDefault();

    var currActive = $portfolioToggle.filter('.active');

    if ($(this).hasClass('active')) {
      portfolioToggle($(this)); // Closes Clicked, Open Item
    } else {
      portfolioToggle(currActive); // Closes Active Item
      portfolioToggle($(this)); // Opens Clicked Item
    }
  });

  function randomClassGen () {
    var classNum = Math.floor(Math.random() * 6) + 1;
    var className = 'gif-' + classNum;
    return className;
  }

  $('header h1').on('click touchstart', function (e) {
    e.preventDefault();

    var bodyClassCurr = $('body').attr('class').length;

    if (bodyClassCurr > 0) {
      $('body').attr('class', '');
    } else {
      $('body').toggleClass(randomClassGen);
    }
  });

  $('.gallery-section').each(function () { // the containers for all your galleries
    $(this).find('figure a').not('.external').magnificPopup({
              // delegate: 'a', // the selector for gallery item
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  });
})(jQuery);
