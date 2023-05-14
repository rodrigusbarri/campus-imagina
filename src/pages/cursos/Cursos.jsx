import '../cursos/styles/Cursos.css'
import { CardCursos } from "./components/CardCursos";

export function Cursos() {
  return (
    <section>
      <h1 className="cursos-container">Cursos disponibles</h1>
      <CardCursos />
    </section>
  );
}