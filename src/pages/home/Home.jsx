import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { HomePage } from "../../components/HomePage";
import '../home/styles/Home.css'

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
      <Header />
      <section className="home-grid">
        <HomePage /> {/* Carga el componente Cursos */}
      </section>
      <section className="courses"></section>
    </div>
  );
}