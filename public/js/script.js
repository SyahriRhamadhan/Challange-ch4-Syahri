$(".owl-carousel").owlCarousel({
  center: true,
  loop: true,
  autoplay: true,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },

    576: {
      items: 2,
    },

    960: {
      items: 2,
    },
  },
});

var owl = $(".owl-carousel");
owl.owlCarousel();

$(".btn-next").click(function () {
  owl.trigger("next.owl.carousel");
});

$(".btn-prev").click(function () {
  owl.trigger("prev.owl.carousel", [300]);
});
