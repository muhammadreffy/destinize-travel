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
});
