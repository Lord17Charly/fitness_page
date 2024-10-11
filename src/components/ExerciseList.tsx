import { fetchExercises } from "./api/exerciseAPI";
import { useEffect } from "react";
import { useState } from "react";
const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const getExercises = async () => {
      const exerciseData = await fetchExercises();
      setExercises(exerciseData);
    };

    getExercises();
  }, []);

  return (
    <div>
      <h1>Lista de Ejercicios</h1>
      <ul>
        {exercises.map((exercise: any) => (
          <li key={exercise.id}>
            {exercise.name} - {exercise.bodyPart}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
