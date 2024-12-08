const hamburgerMenu = document.querySelector(".hamburger-menu");
const slidingMenu = document.getElementById("slidingMenu");
const closeMenu = document.getElementById("closeMenu");

hamburgerMenu.addEventListener("click", () => {
  slidingMenu.classList.add("show");
});

closeMenu.addEventListener("click", () => {
  slidingMenu.classList.remove("show");
});

document.addEventListener("click", (event) => {
  if (!slidingMenu.contains(event.target) && event.target !== hamburgerMenu) {
    slidingMenu.classList.remove("show");
  }
});
