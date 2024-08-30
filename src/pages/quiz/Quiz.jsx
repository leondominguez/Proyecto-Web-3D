import React, { useCallback } from "react";
import "./Quiz.css";
import useQuizStore from '/src/stores/use-quiz-store.js';

const Quiz = () => {
  const { quiz, incrementQuizPercentage } = useQuizStore((state) => ({
    quiz: state.quiz,
    incrementQuizPercentage: state.incrementQuizPercentage,
  }));

  const onHandleButtonNext = useCallback(() => {
    incrementQuizPercentage();
  }, [incrementQuizPercentage]);

  return (
    <div className="quiz-container">
      <h1 className="quiz-header">Hola</h1>
      <p className="quiz-progress">Progreso del Quiz: {quiz.percentageQuizComplete}%</p>
      <button onClick={onHandleButtonNext}>Siguiente</button>
    </div>
  );
};

export default Quiz;

