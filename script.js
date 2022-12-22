const addFlashCard = document.querySelector(".addFlashCard");

const flashCardQuestion = document.querySelector(".flashCardQuestion");
const closeBtn = document.querySelector("#closeBtn");
const createCard = document.querySelector("#createBtn");

const flashBlock = document.querySelector(".flashBlock");
const answerValue = document.querySelector(".answerValue");

addFlashCard.addEventListener("click", () => {
  flashCardQuestion.style.display = "block";
  flashBlock.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  flashCardQuestion.style.display = "none";
  flashBlock.style.display = "flex";
});

createCard.addEventListener("click", () => {
  flashBlock.style.display = "flex";
  flashCardQuestion.style.display = "none";
});

function hideValue() {
  answerValue.style.display = "none";
}
