import '../home/styles/Home.css'
import { Cursos } from '../cursos/Cursos'
;


export function Home() {
  return (
    <div>
        <section className="home-grid">Cards varias</section>
        <section className="courses">
        <Cursos />
        </section>
    </div>
  );
}