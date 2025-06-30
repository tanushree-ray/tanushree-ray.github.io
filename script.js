const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.color = "#ffd700";
  });
  link.addEventListener("mouseout", () => {
    link.style.color = "";
  });
});
