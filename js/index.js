import formatOperators from "./formatOperators.js";
import getExercises from "./getExercises.js";

// render exercises
function createExercise(exercise) {
  const li = document.createElement("li");

  li.innerHTML = `
      <li class="exercise-container">
          <a class="exercise__link" href="/exercise.html?id=${exercise.id}">
              <span class="exercise__index">${exercise.id + 1}</span>
              <span class="exercise__operators">${formatOperators(
                exercise.operators.join(", ")
              )}</span>
              <span class="exercise__difficulty exercise__difficulty-${
                exercise.difficulty
              }">${exercise.difficulty}</span>
          </a>
      </li>
    `;

  return li;
}

const exercisesList = document.getElementById("exercisesList");

window.addEventListener("load", async () => {
  const exercises = await getExercises();

  exercises.forEach((exercise) => {
    const li = createExercise(exercise);
    exercisesList.appendChild(li);
  });
});
