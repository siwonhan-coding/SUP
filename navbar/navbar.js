// Custom JavaScript for hamburger menu animation
document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.querySelector(".checkbox");
  const menuItems = document.querySelector(".menu-items");
  checkbox.addEventListener("change", function () {
    menuItems.style.transform = this.checked
      ? "translateY(0)"
      : "translateY(-100%)";
  });
});
