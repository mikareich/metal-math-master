import formatOperators from "./formatOperators.js";
import getExercises from "./getExercises.js";

// render exercises
function createExercise(exercise, index) {
  const li = document.createElement("li");
  li.className = "exercise-container";
  li.innerHTML = `
        <a class="exercise__link" href="/exercise.html?id=${exercise.id}">
              <span class="exercise__index">${index}</span>
              <span class="exercise__operators">${formatOperators(
                exercise.operators.join(", ")
              )}</span>
              <span class="exercise__difficulty exercise__difficulty-${
                exercise.difficulty
              }">${exercise.difficulty}</span>
        </a>
    `;

  return li;
}

const exercisesList = document.getElementById("exercisesList");

window.addEventListener("load", async () => {
  const exercises = await getExercises();

  exercises.forEach((exercise, index) => {
    const li = createExercise(exercise, index + 1);
    exercisesList.appendChild(li);
  });
});
