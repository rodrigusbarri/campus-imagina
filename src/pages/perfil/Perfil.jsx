import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Box,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../routers/routes";
import Header from "../../components/Header";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export function Perfil() {
  const user = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica si el token está presente al cargar el componente
    redirectIfTokenMissing();
  }, []);

  const redirectIfTokenMissing = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      //Redirige al usuario a la página de inicio de sesión si no hay un token válido
      navigate("/");
    }
  };

  return (
    <div>
      <>
        <Box>
          <Header />
        </Box>
        <Box>
          <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
          >
            <Stack
              spacing={4}
              w={"full"}
              maxW={"xl"}
              bg={useColorModeValue("white", "gray.700")}
              rounded={"xl"}
              boxShadow={"lg"}
              p={6}
              my={12}
            >
              <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
                Perfil de {user?.nombre}
              </Heading>
              <FormControl id="userName">
                <FormLabel>Avatar</FormLabel>
                <Stack direction={["column", "row"]} spacing={6}>
                  <Center>
                    <Avatar size="xl" src={user?.avatar}>
                      <AvatarBadge
                        as={IconButton}
                        size="sm"
                        rounded="full"
                        top="-10px"
                        colorScheme="red"
                        aria-label="remove Image"
                        icon={<SmallCloseIcon />}
                      />
                    </Avatar>
                  </Center>
                  <Center w="full">
                    <Button w="full">Cambiar avatar</Button>
                  </Center>
                </Stack>
              </FormControl>
              <FormControl id="userName" isRequired>
                <FormLabel>Nombre de Usuario</FormLabel>
                <Input
                  defaultValue={user?.username}
                  placeholder="Usuario"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                />
              </FormControl>
              <FormControl id="nombre" isRequired>
                <FormLabel>Nombre</FormLabel>
                <Input
                  defaultValue={user?.nombre}
                  placeholder="nombre"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                />
              </FormControl>
              <FormControl id="apellidos" isRequired>
                <FormLabel>Apellidos</FormLabel>
                <Input
                  defaultValue={user?.apellidos}
                  placeholder="nombre"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  defaultValue={user?.email}
                  placeholder="email@gmail.com"
                  _placeholder={{ color: "gray.500" }}
                  type="email"
                />
              </FormControl>
              <FormControl id="telefono" isRequired>
                <FormLabel>Teléfono</FormLabel>
                <Input
                  defaultValue={user?.telefono}
                  placeholder="Teléfono"
                  _placeholder={{ color: "gray.500" }}
                  type="number"
                />
              </FormControl>
              <FormControl id="pais" isRequired>
                <FormLabel>País</FormLabel>
                <Input
                  defaultValue={user?.pais}
                  placeholder="País"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                />
              </FormControl>
              <FormControl id="provincia" isRequired>
                <FormLabel>Provincia</FormLabel>
                <Input
                  defaultValue={user?.provincia}
                  placeholder="Provincia/Estado"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                />
              </FormControl>
              <FormControl id="ciudad" isRequired>
                <FormLabel>Ciudad</FormLabel>
                <Input
                  defaultValue={user?.ciudad}
                  placeholder="Ciudad"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Contraseña</FormLabel>

                <InputGroup>
                  <Input
                    defaultValue={user?.password}
                    type={showPassword ? "text" : "password"}
                    placeholder="Contraseña"
                    _placeholder={{ color: "gray.500" }}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={6} direction={["column", "row"]}>
                <Button
                  bg={"red.400"}
                  color={"white"}
                  w="full"
                  _hover={{
                    bg: "red.500",
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  w="full"
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Guardar
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </Box>
      </>
    </div>
  );
}
