import "./login.css";
import { useCallback, useEffect } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from "react-router-dom";
import UserDao from "../../daos/UserDAO";
import logo from "../../assets/images/logo.png";

const Login = () => {
  const { user, observeAuthState, loginGoogleWithPopUp, logout, loading } = useAuthStore();
  const navigate = useNavigate();
  
  useEffect(() => {
    observeAuthState();
  }, [observeAuthState]);
  
  useEffect(() => {
    if (user) {
      const newUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL, // photoURL es la propiedad correcta en Firebase
      };
      UserDao.createUser(newUser);
      navigate("/quiz");
    }
  }, [user, navigate]);
  
  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp();
  }, [loginGoogleWithPopUp]);

  const handleLogout = useCallback(() => {
    logout(); // Aquí debes llamar a la función logout desde el store
  }, [logout]);

  if (loading) {
    return <p className="loading-text">Cargando...</p>;
  }

  return (
    <div className="login-wrapper">
      <img src={logo} alt="Logo" className="logo" />
      {user ? (
        <>
          <p className="welcome-text">Bienvenido, {user.displayName}</p>
          <button className="button-logout" onClick={handleLogout}>Cerrar sesión</button>
        </>
      ) : (
        <button onClick={handleLogin}>Iniciar Sesión</button>
      )}
    </div>
  );
  
  
}

export default Login;
