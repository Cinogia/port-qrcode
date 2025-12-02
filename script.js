// Scroll Reveal Animation
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Smooth Scroll - Buttons
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// ------------------------------
// VIDEO POP-UP FUNCTIONALITY
// ------------------------------

const videoPopup = document.getElementById("video-popup");
const videoFrame = document.getElementById("video-frame");

const videoURL = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

function openVideoPopup() {
  videoPopup.style.display = "flex";

  // Start autoplay
  videoFrame.src = videoURL;

  // Block background scroll
  document.body.style.overflow = "hidden";
}

function closeVideoPopup() {
  videoPopup.style.display = "none";

  // Stop the video
  videoFrame.src = "";

  // Re-enable scroll
  document.body.style.overflow = "auto";
}

// Close popup clicking outside the video
videoPopup.addEventListener("click", (e) => {
  if (e.target === videoPopup) {
    closeVideoPopup();
  }
});
