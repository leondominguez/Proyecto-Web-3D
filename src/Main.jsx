import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './pages/login/login-context/AuthContext.jsx'; // Importa el contexto de autenticación
import Quiz from "./pages/logical-components/Quiz.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/login/Login";// Importa el componente de inicio de sesión


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/Home",
    element: <Home />,
  },

  {
    path: "/quiz",
    element: <Quiz />,
  },


]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);