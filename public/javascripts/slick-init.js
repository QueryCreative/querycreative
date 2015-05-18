$(document).ready(function(){
  $('.slider').slick({
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});