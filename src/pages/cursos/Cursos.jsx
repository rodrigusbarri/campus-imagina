import '../cursos/styles/Cursos.css'
import { CardCursos } from "./components/CardCursos";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../components/Header'


export function Cursos() {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {

      navigate("/");
    }
  }, []);




  return (
    <>
    <Header />
    <section>
      <h1 className="cursos-container">Cursos disponibles</h1>
      <CardCursos />
    </section>

    </>
  );
}