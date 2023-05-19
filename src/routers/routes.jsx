import { Routes, Route } from "react-router-dom";
import { Cursos } from '../pages/cursos/Cursos';
import { Certificaciones } from '../pages/certificaciones/Certificaciones'
import { Comunidad } from '../pages/comunidad/Comunidad'
import { Empleo } from '../pages/empleo/Empleo'
import { Favoritos } from '../pages/favoritos/Favoritos'
import { Foros } from '../pages/foros/Foros'
import { Novedades } from '../pages/novedades/Novedades'
import { Ruta } from '../pages/ruta/Ruta'
import { LoginPage } from "../components/LoginPage";
import { Home } from "../pages/home/Home";
import { DetalleCurso } from "../pages/cursos/components/DetalleCurso";


export function MyRoutes() {
  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/home" element={<Home />} />
        <Route path="/certificaciones" element={<Certificaciones />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/empleo" element={<Empleo />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/foros" element={<Foros />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/ruta" element={<Ruta />} />
        <Route path="/detalle" element={<DetalleCurso />} />
      </Routes>
  );
}