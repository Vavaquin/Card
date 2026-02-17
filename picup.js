
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementById("close-modal");

const images = document.querySelectorAll("#gallerypage img");

modal.style.display = "none";

images.forEach((img) => {
    img.addEventListener("click", () => {
        modal.style.display = "flex"; 
        modalImage.src = img.src; 
        modalImage.alt = img.alt; 
    });
});


closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});


modal.addEventListener("click", (event) => {
    if (event.target === modalImage) {
        modal.style.display = "none";
    }
});




