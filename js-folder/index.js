document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const navList = document.getElementById("nav-list");

  mobileMenu.addEventListener("click", function () {
    navList.classList.toggle("active"); // Toggle the 'active' class to show/hide the menu
  });
});
