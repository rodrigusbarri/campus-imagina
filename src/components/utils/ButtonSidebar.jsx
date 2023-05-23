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
  Avatar,
  AvatarBadge,
  Center,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import logoImagina from "../../assets/images/logo-imagina.jpg";
import { Logout } from "./Logout";
import { UserContext } from "../../routers/routes";


export function ButtonSidebar() {
  const user = useContext(UserContext);
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
          variant="solid"
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
            <Grid
              templateColumns="repeat(8, 1fr)"
              gap={1}
              alignItems={"flex-start"}
            >
              <GridItem w="16" h="10">
                <Image
                  boxSize="40px"
                  borderRadius="full"
                  src={logoImagina}
                  alt="logo Imagina"
                />
              </GridItem>
              <GridItem w="60" h="10">
                <Text align="left" textAlign={"left"}>
                  Campus Imagina
                </Text>
              </GridItem>
            </Grid>

            <Stack
              divider={<StackDivider borderColor="gray.200" />}
              m="3"
              direction="column"
              spacing={2}
              align="start"
            >
              <FormControl id="userName">
                <Stack direction={["column"]} spacing={6}>
                  <Center>
                    <Avatar size="xl" src={user?.avatar}></Avatar>
                  </Center>
                </Stack>
                <FormLabel textAlign={"center"}>{user?.username}</FormLabel>
              </FormControl>
            </Stack>
          </DrawerHeader>
          <Stack
            divider={<StackDivider borderColor="gray.200" />}
            m="2"
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
          {localStorage.getItem("token") ? (
            <Logout onClick={() => onClose()} />
          ) : (
            <Button colorScheme="twitter" mr={3} onClick={onClose}>
              Iniciar Sesión
            </Button>
          )}
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
