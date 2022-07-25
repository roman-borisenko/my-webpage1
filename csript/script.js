const imageModal = document.getElementById("imageModal");
imageModal.addEventListener("show.bs.modal", (event) => {
  const button = event.relatedTarget;
  const src = button.getAttribute("src");
  const alt = button.getAttribute("alt");
  const modalImage = imageModal.querySelector("img");

  modalImage.src = src;
  modalImage.alt = alt;
});
