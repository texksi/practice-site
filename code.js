const menuIcon = document.querySelector(".mobile-nav-bar");
const navItems = document.querySelector(".nav-items");

menuIcon.addEventListener("click", () => {
  navItems.classList.toggle("show");
});
