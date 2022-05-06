/** Loads exercises and formats them into json */
async function getExercises(path = "/assets/exercises.json") {
  try {
    const response = await fetch(path);
    const exercises = await response.json();

    return exercises;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default getExercises;
