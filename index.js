// Reveal animation
const sr = ScrollReveal({
  origin: "top",
  distance: "20px",
  duration: 1500,
  reset: true,
});

ScrollReveal().reveal(".container, .cta, .footer, .about-msg", { origin: "bottom" });
ScrollReveal().reveal(".exclusives, .trending, .stories", { origin: "bottom" });

// Navbar 

const navBar = document.getElementById('navBar');
function toggleBtn() {
  navBar.classList.toggle('hidemenu');
}

