import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Cursos } from "../cursos/Cursos";
import App from "../../App";

export function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica si el token está presente al cargar el componente
    redirectIfTokenMissing(); 
  }, []);

  const redirectIfTokenMissing = () => {
    const token = localStorage.getItem("token");
    if (!token) {
    // Redirige al usuario a la página de inicio de sesión si no hay un token válido
      navigate("/"); 
    }
  };

  return (
    <div>
      {/* <App /> Carga todos los componentes de App.jsx */}
      <section className="home-grid">Cards varias</section>
      <section className="courses">
        <Cursos /> {/* Carga el componente Cursos */}
      </section>
    </div>
  );
}