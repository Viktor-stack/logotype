$(function() {
  $(".slider__inner").slick({
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1130,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $(".news__slider-inner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $("input, select").styler({
  });
  $(".menu__btn").on("click", function() {
    $(".menu__list").slideToggle();
  });
  $(".menu__btn").on("click", function () {
    $('.menu__btn').toggleClass('active');
  });
  
});
