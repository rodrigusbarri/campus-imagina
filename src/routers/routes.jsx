import { Routes, Route } from "react-router-dom";
import { Cursos } from "../pages/cursos/Cursos";
import { Certificaciones } from "../pages/certificaciones/Certificaciones";
import { Comunidad } from "../pages/comunidad/Comunidad";
import { Empleo } from "../pages/empleo/Empleo";
import { Favoritos } from "../pages/favoritos/Favoritos";
import { Foros } from "../pages/foros/Foros";
import { Novedades } from "../pages/novedades/Novedades";
import { Ruta } from "../pages/ruta/Ruta";
import { LoginPage } from "../components/LoginPage";
import { Home } from "../pages/home/Home";
import { DetalleCurso } from "../pages/cursos/components/DetalleCurso";
import { useState, useEffect, createContext } from "react";
import { Perfil } from "../pages/perfil/Perfil";

export const UserContext = createContext();

export function MyRoutes() {
  //const [user, setUser] = useState(null);
  const userPerfil = JSON.parse(localStorage.getItem('perfil') || '{}');

  const [ user, setUser ] = useState({
    token: localStorage.getItem('token') ? true : false,
    username: userPerfil?.username ? userPerfil?.username : null,
    password: userPerfil?.password ? userPerfil?.password : null,
    email: userPerfil?.email ? userPerfil?.email : null,
    nombre: userPerfil?.nombre ? userPerfil?.nombre : null,
    apellidos: userPerfil?.apellidos ? userPerfil?.apellidos : null,
    direccion: userPerfil?.direccion ? userPerfil?.direccion : null,
    telefono: userPerfil?.telefono ? userPerfil?.telefono : null,
    provincia: userPerfil?.provincia ? userPerfil?.provincia : null,
    pais: userPerfil?.pais ? userPerfil?.pais : null,
    ciudad: userPerfil?.ciudad ? userPerfil?.ciudad : null,
    avatar: userPerfil?.avatar ? userPerfil?.avatar : null,
    fechaNacimiento: userPerfil?.fechaNacimiento ? userPerfil?.fechaNacimiento : null,

  });

  const userData = (usuario) => {
    setUser(usuario);
  };

  return (
    <UserContext.Provider value={user}>
      <Routes>
        <Route path="/" element={<LoginPage userData={userData} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/perfil" element={<Perfil />} />
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
    </UserContext.Provider>
  );
}
