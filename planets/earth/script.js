/* ===============================
   SECTION FADE-IN ON SCROLL
   Fade + slide animation when
   sections enter the viewport
================================= */

const sections = document.querySelectorAll(".info, .explore");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;

    // Scrolls gallery left anf right
    if (top < window.innerHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});

/* ===============================
   PLANET GALLERY SCROLLING
   Horizontal scroll buttons
================================= */

const gallery = document.getElementById("planetGallery");

// Scroll gallery left or right
function scrollPlanets(direction) {
  const scrollAmount = gallery.offsetWidth * 0.8; // 80% of visible width

  gallery.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}