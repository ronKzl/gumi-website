const headerBtn = document.querySelector(".header__opener");
const mobileNav = document.querySelector(".mobile-nav");
const mobileLinks = document.querySelectorAll(".mobile-nav__link");
//state
let isMobileNavOpen = false;

headerBtn.addEventListener("click", () => {
  if (!isMobileNavOpen) {
    isMobileNavOpen = !isMobileNavOpen;
    mobileNav.style.display = "flex";
    document.body.style.overflowY = "hidden";
    headerBtn.textContent = "Close";
    if (window.innerWidth <= 768) {
      mobileNav.style.width = "100%";
    } else {
      mobileNav.style.width = "30%";
    }
  } else {
    isMobileNavOpen = !isMobileNavOpen;
    // mobileNav.style.display = "none";
    document.body.style.overflowY = "auto";
    headerBtn.textContent = "Menu";
    mobileNav.style.width = "0";
  }

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMobileNavOpen = false;
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });
  });
});
// Dynamic adjust nav width on window resizing
window.onresize = () => {
  if (isMobileNavOpen && mobileNav.style.width !== "0px") {
    if (window.innerWidth <= 768) {
      mobileNav.style.width = "100%";
    } else {
      mobileNav.style.width = "30%";
    }
  }
};
