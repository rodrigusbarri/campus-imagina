import '../home/styles/Home.css'
import { Cursos } from '../cursos/Cursos'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



export function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {

      navigate("/");
    }
  }, []);

  return (
    <div>
      <section className="home-grid">Cards varias</section>
      <section className="courses">
        <Cursos />
      </section>
    </div>
  );
}