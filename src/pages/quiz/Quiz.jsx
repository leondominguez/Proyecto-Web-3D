import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";
import useQuizStore from '/src/stores/use-quiz-store.js';
import { useAuth } from '../../context/authContext.jsx'; // Importa el contexto de autenticación

const Quiz = () => {
  const { quiz, incrementQuizPercentage } = useQuizStore((state) => ({
    quiz: state.quiz,
    incrementQuizPercentage: state.incrementQuizPercentage,
  }));

  const { authUser, logout } = useAuth(); // Usa el contexto de autenticación

  const navigate = useNavigate();

  const onHandleButtonNext = useCallback(() => {
    incrementQuizPercentage();
  }, [incrementQuizPercentage]);

  const handleLogout = useCallback(async () => {
    await logout();
    navigate("/");
  }, [logout, navigate]);

  return (
    <div className="quiz-container">
      <h1 className="quiz-header">Hola</h1>
      {authUser && (
        <>
          <p className="welcome-text">Bienvenido, {authUser.displayName}</p>
          <img src={authUser.photoURL} alt="Foto del usuario" className="user-photo" />
        </>
      )}
      <p className="quiz-progress">Progreso del Quiz: {quiz.percentageQuizComplete}%</p>
      <button onClick={onHandleButtonNext}>Siguiente</button>
      <button onClick={handleLogout} className="button-logout">Cerrar sesión</button>
    </div>
  );
};

export default Quiz;