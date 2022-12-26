const addFlashCard = document.querySelector(".addFlashCard");

const flashCardQuestion = document.querySelector(".flashCardQuestion");
const closeBtn = document.querySelector("#closeBtn");
const createCard = document.querySelector("#createBtn");
const questionInput = document.querySelector("#questionInput");
const answerInput = document.querySelector("#answerInput");

const flashBlock = document.querySelector(".flashBlock");

addFlashCard.addEventListener("click", () => {
  flashCardQuestion.style.display = "block";
  flashBlock.style.display = "none";
});

createCard.addEventListener("click", () => {
  if (questionInput.value.trim() == "" && questionInput.value.trim() == "") {
    alert("Question and Answer box cannot be empty");
  } else {
    flashBlock.style.display = "flex";
    flashCardQuestion.style.display = "none";

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("cardBlock");
    flashBlock.appendChild(cardContainer);

    //Flash Card Question
    const questionText = document.createElement("h4");
    questionText.className = "questionValue";
    questionText.innerText = questionInput.value;
    cardContainer.appendChild(questionText);

    //Flash Card Hide
    const showValue = document.createElement("h4");
    showValue.className = "hideValue";
    showValue.innerText = "Show/Hide Value";
    cardContainer.appendChild(showValue);

    //Flash Card Answer
    const answerText = document.createElement("h4");
    answerText.className = "answerValue";
    answerText.innerText = answerInput.value;
    cardContainer.appendChild(answerText);

    //Hide/show click
    showValue.addEventListener("click", showValueFunction);

    function showValueFunction() {
      if (answerText.style.display === "none") {
        answerText.style.display = "block";
      } else {
        answerText.style.display = "none";
      }
    }

    //Edit button
    const editbtn = document.createElement("button");
    editbtn.className = "editBtn";
    editbtn.innerText = "Edit";
    cardContainer.appendChild(editbtn);

    //Edit button click
    editbtn.addEventListener("click", () => {
      flashCardQuestion.style.display = "block";
      flashBlock.style.display = "none";

      questionInput.value = questionText.innerText;
      answerInput.value = answerText.innerText;

      const parent = editbtn.parentElement;
      parent.remove();
    });

    //Delete button
    const deletebtn = document.createElement("button");
    deletebtn.className = "deleteBtn";
    deletebtn.innerText = "Delete";
    cardContainer.appendChild(deletebtn);

    deletebtn.addEventListener("click", () => {
      const parent = deletebtn.parentElement;
      parent.remove();
    });

    questionInput.value = " ";
    answerInput.value = " ";
  }
});

closeBtn.addEventListener("click", () => {
  flashCardQuestion.style.display = "none";
  flashBlock.style.display = "flex";
});
