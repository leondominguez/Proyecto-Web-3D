import "./Login.css";
import { useCallback, useEffect, useState } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from "react-router-dom";
import UserDao from "../../daos/UserDAO";
import logo from "../../assets/images/logo.png";
import Modal from "../../components/global-components/Modal";

const Login = () => {
  const { user, observeAuthState, loginGoogleWithPopUp, logout, loading } = useAuthStore();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    observeAuthState();
  }, [observeAuthState]);

  useEffect(() => {
    if (user) {
      const newUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
      };

      UserDao.checkAndCreateUser(newUser)
        .then((exists) => {
          if (exists) {
            console.log("creado?:", exists);
            setModalMessage("Ya tienes una cuenta.<br />Serás redirigido al Home.");
            //alert("Ya tienes una cuenta. Serás redirigido al sitio de quiz.");
          } else {
            setModalMessage("Cuenta creada exitosamente.<br />Serás redirigido Home");
            //alert("Cuenta creada exitosamente. Serás redirigido al sitio de quiz.");
          }
          console.log("el mensaje de modal es:", modalMessage);
          setShowModal(true);
        })
        .catch((error) => {
          console.error("Error al verificar o crear el usuario:", error);
        });
    }
  }, [user, navigate]);

  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp();
  }, [loginGoogleWithPopUp]);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/Home");
  };

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
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        title="Información de la cuenta"
        message={modalMessage}
      />
    </div>
  );
};

export default Login;