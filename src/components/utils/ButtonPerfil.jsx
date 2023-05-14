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
import { FaUser } from "react-icons/fa";

export function ButtonPerfil() {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          iconSpacing={0}
          colorScheme="twitter"
        >
          <Icon as={FaUser} boxSize={5} />
        </MenuButton>
        <MenuList>
          <MenuGroup title="Cuenta">
            <MenuItem>Mi perfil</MenuItem>
            <MenuItem>Mis notificaciones</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Mi campus">
            <MenuItem>Mis cursos</MenuItem>
            <MenuItem>Mis rutas</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  );
}
