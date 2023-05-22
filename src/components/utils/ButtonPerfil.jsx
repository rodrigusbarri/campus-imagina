import {
  Icon,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function ButtonPerfil() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    //localStorage.removeItem('username');
    navigate("/");
    props.onClose();
  };

  return (
    <>
      <Menu>
        <MenuButton as={Button} iconSpacing={0} colorScheme="twitter">
          <Icon
            as={FaUser}
            boxSize={5}
            aria-label="Perfil"
            icon={<FaUser />}
            mr={2}
          />
        </MenuButton>
        <MenuList>
          <MenuGroup title="Cuenta">
            <MenuItem onClick={()=>navigate("/perfil")}>Mi perfil</MenuItem>
            <MenuItem>Mis notificaciones</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Mi campus">
            <MenuItem>Mis cursos</MenuItem>
            <MenuItem>Mis rutas</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup>
            <MenuItem onClick={() => handleLogout()}>Cerrar sesión</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  );
}
