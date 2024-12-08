import { images } from "./imagesobj.js";

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("close");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const ul = document.getElementById("ul");

let currentImageIndex = 0;

images.forEach((imgSrc, index) => {
  const li = document.createElement("li");
  li.classList.add("card");
  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = `Image ${index + 1}`;
  li.appendChild(img);
  ul.appendChild(li);

  setTimeout(() => {
    li.classList.add("show");
  }, index * 50);

  li.addEventListener("click", () => {
    openModal(index);
  });
});

function openModal(index) {
  modal.classList.add("show");
  modalImg.src = images[index];
  currentImageIndex = index;
}

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

prevButton.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentImageIndex];
});

nextButton.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  modalImg.src = images[currentImageIndex];
});
