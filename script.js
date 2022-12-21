const addFlashCard = document.querySelector(".addFlashCard");

const flashCardQuestion = document.querySelector(".flashCardQuestion");
const closeBtn = document.querySelector("#closeBtn");
const createCard = document.querySelector("#createBtn");

const flashBlock = document.querySelector(".flashBlock");

addFlashCard.addEventListener("click", () => {
  flashCardQuestion.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  flashCardQuestion.style.display = "none";
});

createCard.addEventListener("click", () => {
  flashBlock.style.display = "flex";
  flashCardQuestion.style.display = "none";
});
