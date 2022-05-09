/** Loads exercises and formats them into json */
async function getExercises(id = null, path = "/assets/exercises.json") {
  try {
    const response = await fetch(path);
    const exercises = await response.json();

    if (id) return [exercises.find((e) => e.id === id)]; // also return array to stay consistent
    return exercises;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default getExercises;
