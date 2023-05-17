import '../cursos/styles/Cursos.css'
import { CardCursos } from "./components/CardCursos";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    <section>
      <h1 className="cursos-container">Cursos disponibles</h1>
      <CardCursos />
    </section>
    </>
  );
}