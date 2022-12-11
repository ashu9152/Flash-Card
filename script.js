const addFlashCard = document.querySelector(".addFlashCard");
const addQuestion = document.getElementById("");
const addAnswer = document.getElementById("");
const updateCard = document.getElementById("");
const deleteCard = document.getElementById("");
const flashCardQuestion = document.querySelector(".flashCardQuestion");

addFlashCard.addEventListener("click", () => {
  flashCardQuestion.style.display = "block";
});
