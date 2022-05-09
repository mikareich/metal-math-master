import getExercises from "./getExercises.js";

const formatTime = (time) => {
  const rounded = Math.round(time * 1000) / 1000000;
  return rounded.toFixed(2);
};

window.addEventListener("load", async () => {
  /* In production mode:
  // fetch example evaluation...
  const reportId = new URLSearchParams(window.location.search).get("reportId");

  // search in ls for report
  const reportRaw = localStorage.getItem(reportId);

  // if not found, redirect to index
  if (!reportRaw) window.location.href = "index.html";

  const report = JSON.parse(reportRaw); */

  // in development mode:
  const { default: report } = await import(`./exampleReport.js`);

  // fetch exercise
  const [exercise] = await getExercises(report.exerciseId);

  // render report
  const exerciseDifficultySPAN = document.getElementById("exerciseDifficulty");
  const totalTimeB = document.getElementById("totalTime");
  exerciseDifficultySPAN.innerText = exercise.difficulty;
  totalTimeB.innerText = formatTime(report.totalTime);

  const questionsContainer = document.getElementById("questions");
  console.log(questionsContainer);

  report.questions.forEach((question, index) => {
    const questionContainer = document.createElement("div");
    questionContainer.classList.add("question-container");

    questionContainer.innerHTML = `
        <span class="question-index">${index + 1}.</span>

        <span class="question__equation">
          ${question.equation}=<span class="question__answer question__answer-${
      question.correct ? "correct" : "wrong"
    }">${question.answer}</span>
        </span>
        
        <span class="question__time">${formatTime(question.time)}sec</span>
    `;

    questionsContainer.appendChild(questionContainer);
  });
});
