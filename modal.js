const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalImage = document.getElementById("modalImage");
const modalLink = document.getElementById("modalLink");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalText.textContent = card.dataset.text;
    modalImage.src = card.dataset.img;

    if (card.dataset.url) {
      modalLink.href = card.dataset.url;
      modalLink.hidden = false;
    } else {
      modalLink.hidden = true;
    }

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  });
});

// sulkeminen (overlay + nappi)
document.querySelectorAll("[data-close]").forEach(el => {
  el.addEventListener("click", () => closeModal());
});

function closeModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
}

// ESC sulkee
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});