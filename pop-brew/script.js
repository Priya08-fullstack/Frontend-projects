
/* =========================
   1. NAVBAR SCROLL EFFECT
========================= */
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
  } else {
    nav.style.boxShadow = "none";
  }
});

/* =========================
   2. MENU MODAL (Know More)
========================= */
const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.parentElement;
    const title = card.querySelector("h3").innerText;
    const desc = card.querySelector("p").innerText;
    const imgSrc = card.querySelector("img").src;

    showModal(title, desc, imgSrc);
  });
});

function showModal(title, desc, img) {
  const modal = document.createElement("div");
  modal.className = "modal";

  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <img src="${img}" alt="${title}">
      <h2>${title}</h2>
      <p>${desc}</p>
      <p>Freshly brewed with premium beans ☕</p>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector(".close").onclick = () => modal.remove();
  modal.onclick = e => e.target === modal && modal.remove();
}

/* =========================
   3. FAQ AUTO-CLOSE
========================= */
const allDetails = document.querySelectorAll(".faqs-container details");

allDetails.forEach(detail => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
      allDetails.forEach(d => d !== detail && (d.open = false));
    }
  });
});

/* =========================
   4. CONTACT FORM VALIDATION
========================= */
const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!name || !email || !phone) {
    alert("Please fill all required fields!");
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    alert("Enter a valid 10-digit phone number");
    return;
  }

  alert("🎉 Thank you! Your message has been sent.");
  form.reset();
});
