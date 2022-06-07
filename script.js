//$('#carouselFade').carousel();

$('#carouselFade').carousel({
    interval: 5000
  })

  jQuery('#myCarousel').bind('mousewheel', function(e) {
    if(e.originalEvent.wheelDelta /120 > 0) {
        $(this).carousel('next');
    } else {
        $(this).carousel('prev');
    }
});