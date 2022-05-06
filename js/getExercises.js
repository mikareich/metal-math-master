/** Loads exercises and formats them into json */
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

export default loadExercises;
