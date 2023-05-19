import { useLocation, useNavigate } from "react-router-dom";

export function Validate () {

    const location = useLocation();
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de la sesión
  
    const handleLogout = () => {
      // Lógica para cerrar sesión
      localStorage.removeItem("token"); // Eliminar el token de sesión del almacenamiento local
      setIsLoggedIn(false);
      navigate("/"); // Redirigir al usuario a la página de inicio de sesión 
    };
  
    useEffect(() => {
      // Verificar el estado de la sesión al cargar la página
      const storedToken = localStorage.getItem("token");
  
      if (storedToken) {
        // Validar el token de sesión o realizar acciones adicionales según sea necesario
        validateToken(storedToken)
          .then((isValid) => {
            if (isValid) {
              setIsLoggedIn(true);
            } else {
              setIsLoggedIn(false);
              navigate("/");
            }
          })
          .catch((error) => {
            console.error("Error al validar el token:", error);
            setIsLoggedIn(false);
            navigate("/");
          });
      } else {
        setIsLoggedIn(false);
        navigate("/");
      }
    }, []);
  
    const validateToken = (token) => {
      // Simular una solicitud al servidor para validar el token
      return new Promise((resolve, reject) => {
        // Aquí puedes realizar una solicitud HTTP al servidor con el token y obtener la respuesta
        // Por simplicidad, aquí se simula una respuesta exitosa después de 1 segundo
        setTimeout(() => {
          resolve(true); // El token es válido
          // resolve(false); // El token no es válido
        }, 1000);
      });
    };
  

  return (location,  navigate, isLoggedIn, handleLogout );
}