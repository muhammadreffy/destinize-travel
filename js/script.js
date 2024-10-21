document.addEventListener("DOMContentLoaded", function () {
  function cloneLogoForSmallScreen() {
    if (window.matchMedia("(max-width: 640px)").matches) {
      const partnersLogo = document
        .querySelector(".partners__logo")
        .cloneNode(true);
      document
        .querySelector(".partners__logo_container")
        .appendChild(partnersLogo);
    }
  }

  cloneLogoForSmallScreen();

  window.addEventListener("resize", cloneLogoForSmallScreen);

  const faqBoxs = document.querySelectorAll(".faq__box");

  faqBoxs.forEach((faqBox) => {
    faqBox.addEventListener("click", () => {
      faqBoxs.forEach((item) => {
        if (item !== faqBox) {
          item.classList.remove("faq__box_active");
        }
      });
      faqBox.classList.toggle("faq__box_active");
    });
  });
});
