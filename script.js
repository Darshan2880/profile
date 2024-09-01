function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function() {
  document.body.classList.add("loaded");
  
  // Ensure sections are visible when accessed directly via URL hash
  const section = document.querySelector(location.hash);
  if (section) section.classList.add("visible");
});
function toggleMenu() {
  document.querySelector(".menu-links").classList.toggle("open");
  document.querySelector(".hamburger-icon").classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
  document.body.classList.add("loaded");

  // Ensure sections are visible when accessed directly via URL hash
  const section = document.querySelector(location.hash);
  if (section) section.classList.add("visible");
});
