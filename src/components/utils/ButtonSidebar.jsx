import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Stack,
  MenuButton,
  IconButton,
  Menu,
  MenuList,
  useBoolean,
  StackDivider,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import logoImagina from "../../assets/images/logo-imagina.jpg";
import { Logout } from "./Logout";

export function ButtonSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Menu>
        <MenuButton
          ref={btnRef}
          colorScheme="twitter"
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant='solid'
          onClick={onOpen}
        />
      </Menu>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Image
              boxSize="40px"
              borderRadius="full"
              src={logoImagina}
              alt="logo Imagina"
            />
            <Text align="center">Campus Imagina</Text>
          </DrawerHeader>
          <Stack
            divider={<StackDivider borderColor="gray.200" />}
            m="10"
            direction="column"
            spacing={2}
            align='"flex"'
          >
            <Link to="/home" as={<Button />} align="center">
              Inicio
            </Link>
            <Link to="/ruta" as={<Button />} align="center">
              Ruta
            </Link>
            <Link to="/empleo" as={<Button />} align="center">
              Empleo
            </Link>
            <Link to="/cursos" as={<Button />} align="center">
              Cursos
            </Link>
            <Link to="/certificaciones" as={<Button />} align="center">
              Certificaciones
            </Link>
            <Link to="/foros" as={<Button />} align="center">
              Foros
            </Link>
            <Link to="/novedades" as={<Button />} align="center">
              Novedades
            </Link>
            <Link to="/comunidad" as={<Button />} align="center">
              Comunidad
            </Link>
            <Link to="/favoritos" as={<Button />} align="center">
              Favoritos
            </Link>
          </Stack>
          {
              localStorage.getItem('token')
                ? (
                  <Logout onClose={()=>onClose()}/>
                )
                : <Button colorScheme="twitter" mr={3} onClick={onClose}>
                Iniciar Sesión
              </Button>
            }
          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
