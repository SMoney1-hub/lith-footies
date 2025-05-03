// Toggle dark mode
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Product modal logic
const viewButtons = document.querySelectorAll(".view-btn");
const modal = document.getElementById("product-modal");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const modalImg = document.getElementById("modal-img");
const closeModal = document.querySelector(".close");

viewButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".product-card");
    modalTitle.textContent = card.dataset.name;
    modalPrice.textContent = card.dataset.price;
    modalImg.src = card.dataset.img;
    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

