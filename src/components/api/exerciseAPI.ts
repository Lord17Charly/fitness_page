const EXERCISE_API_URL = "https://exercisedb.p.rapidapi.com/exercises";
const API_KEY = "556addc85amsh552af7ded0e1266p1c5e1ejsn69f1a26a2c6a";

export const fetchExercises = async () => {
  try {
    const response = await fetch(EXERCISE_API_URL, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    });

    if (!response.ok) {
      throw new Error("Error fetching exercises");
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
