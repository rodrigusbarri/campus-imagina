import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { HomePage } from "../home/components/HomePage";
import "../home/styles/Home.css";
import { UserContext } from "../../routers/routes";

export function Home() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    // Verifica si el token está presente al cargar el componente
    redirectIfTokenMissing();
  }, []);

  const redirectIfTokenMissing = () => {
    const token = localStorage.getItem("token");
    if (!token && !isLoggedIn) {
      //Redirige al usuario a la página de inicio de sesión si no hay un token válido
      navigate("/");
    }
  };


  return (
    <div>
              <div>
          {/* <App /> Carga todos los componentes de App.jsx */}
          <Header />
          <section className="home-grid">
            <HomePage /> {/* Carga el componente Cursos */}
          </section>
          <section className="courses"></section>
        </div>  
    </div>
  );
}
