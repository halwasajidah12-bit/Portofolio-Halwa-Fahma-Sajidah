// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Contact form handling (local mock)
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("alertMessage");

  
// Certificate Zoom Modal
const modal = document.getElementById("certModal");
const modalImg = document.getElementById("certModalImg");
const closeModal = document.querySelector(".close");

document.querySelectorAll(".certificate-card img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

  // small helper to escape HTML
  function escapeHtml(text) {
    var map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return String(text).replace(/[&<>"']/g, function(m) { return map[m]; });
  }

  // Optional: simple typewriter effect on hero subtitle (subtle)
  const heroSub = document.querySelector('.hero-sub');
  if (heroSub) {
    const txt = "Creative Designer & Photographer";
    let i = 0;
    const speed = 40;
    heroSub.textContent = "";
    const typer = setInterval(() => {
      heroSub.textContent += txt.charAt(i);
      i++;
      if (i >= txt.length) clearInterval(typer);
    }, speed);
  }
});
// Initialize AOS
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 900,
    once: true,
  });
});

// ========== Image Zoom View for Portfolio ==========
const imgModal = document.getElementById("imgModal");
const imgModalSrc = document.getElementById("imgModalSrc");
const closeImg = document.querySelector(".close-img");

// Buka modal saat gambar diklik
document.querySelectorAll(".gallery-card img").forEach(img => {
  img.addEventListener("click", () => {
    imgModal.style.display = "block";
    imgModalSrc.src = img.src;
  });
});

// Tutup modal saat klik tombol X
closeImg.addEventListener("click", () => {
  imgModal.style.display = "none";
});

// Tutup modal saat klik di luar gambar
imgModal.addEventListener("click", (e) => {
  if (e.target === imgModal) {
    imgModal.style.display = "none";
  }
});

