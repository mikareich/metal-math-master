const exercisesList = document.getElementById("exercisesList");

// load exercises
async function loadExercises() {
  try {
    const response = await fetch("/assets/exercises.json");
    const exercises = await response.json();

    return exercises;
  } catch (error) {
    console.log(error);
    return [];
  }
}

function createExercise(exercise) {
  const li = document.createElement("li");
  li.innerHTML = `
    <li class="exercise-container">
        <a class="exercise__link" href="/exercise.html?id=${exercise.id}">
            <span class="exercise__index">${exercise.id + 1}</span>
            <span class="exercise__operators">a+b</span>
            <span class="exercise__difficulty exercise__difficulty-easy">${
              exercise.difficulty
            }</span>
        </a>
    </li>
  `;
  return li;
}

/** Formats * and / into  */
function formatOperators(operators) {}
