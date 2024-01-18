$(".home-owl").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  stagePadding: 0,
  smartSpeed: 700,
  dots: false,
  responsiveClass: true,
  responsiveBaseElement: "section",
  margin: 0,
  nav: false,
  navText: ["⇽", "⇾"],
  responsive: {
    0: {
      items: 1,
    },
  },
});

$(".service-owl").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  stagePadding: 0,
  center: false,
  dots: true,
  responsiveClass: true,
  margin: 0,
  nav: true,
  navText: ["⇽", "⇾"],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1400: {
      items: 4,
    },
  },
});

$(".gallery-owl").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 5,
  dots: true,
  autoplayTimeout: 6000,
  smartSpeed: 500,
  center: true,
  autoplayHoverPause: true,
  responsiveClass: true,
  stagePadding: 0,
  responsive: {
    0: {
      items: 1,
    },
    700: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1200: {
      items: 4,
    },
    1500: {
      items: 5,
    },
  },
});

$(".clients-owl").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  smartSpeed: 600,
  dots: false,
  margin: 0,
  center: true,
  stagePadding: 30,
  nav: false,
  responsive: {
    0: {
      items: 1,
      stagePadding: 0,
    },
    700: {
      items: 2,
      stagePadding: 10,
    },
    900: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
});
