$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    dots: true,
    autoplay: true,
    dotsEach: 1,
    nav: true,
    navSpeed: 700,
    dragEndSpeed: 700,
    dotsSpeed: 700,
    navText: ["", ""],
    autoplayHoverPause: true,
    margin: 700,
    items: 1,
    responsive: {
      0: {
        nav: false,
      },
      1081: {
        nav: true,
      },
    },
  });
});
