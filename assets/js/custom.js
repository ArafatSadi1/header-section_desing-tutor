var splide = new Splide(".splide-slider", {
  type: "loop",
  perPage: 3,
  // gap for slider margin
  gap: 30,
  focus: "center",
  perMove: 1,
  // for responsive
  breakpoints: {
    991: {
      gap: 20,
    },
    767: {
      perPage: 1,
    },
  },
});

splide.mount();
