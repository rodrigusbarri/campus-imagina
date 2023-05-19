import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
  useToast,
  Modal,
  ModalOverlay,
  useDisclosure,
  HStack,
  InputGroup,
  InputRightElement,
  ModalContent,
  Image,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { UserApi } from "../api/UserApi";
import logoImagina from "../assets/images/logo-imagina.jpg";
import { Formik } from "formik";
import * as Yup from "yup";

export function LoginPage() {
  const data = UserApi(import.meta.env.VITE_URL_API_USUARIOS);
  const [username, setUsername] = useState(""); // Estado para almacenar el valor del nombre de usuario
  const [password, setPassword] = useState(""); // Estado para almacenar el valor de la contraseña
  const [error, setError] = useState(""); // Estado para almacenar el mensaje de error
  const navigate = useNavigate(); // Hook de react-router para la navegación
  const toast = useToast(); // Hook de Chakra UI para mostrar mensajes emergentes
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar el estado de inicio de sesión
  const [rememberMe, setRememberMe] = useState(false); // Estado para controlar el estado del checkbox "Recuérdame"
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPassword, setShowPassword] = useState(false);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  // Creating schema Yup
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("El email es necesario")
      .email("Ingrese un email válido"),
    password: Yup.string()
      .required("Campo necesario")
      .min(8, "La contraseña tiene que tener más de 8 caracteres"),
    nombre: Yup.string().required("Campo necesario").label("Nombre"),
    telefono: Yup.number()
      .required("Campo necesario")
      .integer("Ingrese un número de teléfono"),
    apellidos: Yup.string().required("Campo necesario").label("Apellidos"),
  });

  useEffect(() => {
    // Cargar el estado de "Recuérdame" desde el localStorage al cargar la página
    const rememberMeValue = localStorage.getItem("rememberMe");
    if (rememberMeValue && rememberMeValue === "true") {
      setRememberMe(true);
      const savedUsername = localStorage.getItem("username");
      if (savedUsername) {
        setUsername(savedUsername);
      }
    }
  }, []);

  const handleUsernameChange = (event) => {
    // Actualizar el estado del nombre de usuario al cambiar el valor del campo
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    // Actualizar el estado de la contraseña al cambiar el valor del campo
    setPassword(event.target.value);
  };

  // Función para manejar el envío del formulario de inicio de sesión
  const onSubmit = () => {
    if (!username || !password) {
      // Validar campos vacíos
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (!validateEmail(username)) {
      // Validar nombre de usuario como email válido
      toast({
        title: "Error",
        description:
          "El nombre de usuario debe ser un correo electrónico válido.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (data && data.data) {
      const isValid = data.data.some(
        (usuario) =>
          usuario.attributes.email === username &&
          usuario.attributes.password === password
      );

      if (isValid) {
        // Iniciar sesión exitosamente
        const usuario = data.data.find(
          (usuario) =>
            usuario.attributes.email === username &&
            usuario.attributes.password === password
        );
        localStorage.setItem("token", usuario.attributes.token);
        setIsLoggedIn(true);

        // Almacenar el nombre de usuario si "Recuérdame" está seleccionado
        if (rememberMe) {
          localStorage.setItem("rememberMe", "true");
          localStorage.setItem("username", username);
        } else {
          localStorage.removeItem("rememberMe");
          localStorage.removeItem("username");
        }

        navigate("/home");
      } else {
        // Credenciales inválidas
        setError("Credenciales inválidas");
        toast({
          title: "Error",
          description: "Credenciales inválidas.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  const handleRememberMeChange = (event) => {
    // Actualizar el estado de "Recuérdame" al cambiar el valor del checkbox
    setRememberMe(event.target.checked);
  };

  const handlePasswordKeyDown = (event) => {
    // Manejar el evento cuando se presiona la tecla Enter en el campo de contraseña
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  // Validar si el nombre de usuario es un email válido
  // Por simplicidad, esta función solo verifica si contiene un "@" y al menos un "."
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    // Estructura de la página de inicio de sesión
    <>
      <section>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Image
                boxSize="150px"
                borderRadius="full"
                src={logoImagina}
                alt="logo Imagina"
              />
              <Heading fontSize={"3xl"}>Bienvenidos al Campus Imagina</Heading>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <FormControl>
                <FormErrorMessage>{error}</FormErrorMessage>
              </FormControl>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    value={username}
                    onChange={handleUsernameChange}
                    autoComplete="off"
                    placeholder="email@gmail.com"
                    required
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Contraseña</FormLabel>
                  <Input
                    value={password}
                    onChange={handlePasswordChange}
                    type="password"
                    placeholder="••••••••••"
                    required
                    onKeyDown={handlePasswordKeyDown}
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox
                      isChecked={rememberMe}
                      onChange={handleRememberMeChange}
                    >
                      Recuérdame
                    </Checkbox>
                    <Link color={"blue.400"}>Recordar contraseña</Link>
                  </Stack>
                  <Button colorScheme="blue" onClick={onSubmit}>
                    Iniciar sesión
                  </Button>
                  <Button colorScheme="red" onClick={onOpen}>
                    Registrarse
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </section>
      <section>
        {/* Formularios de Registro en Modal */}
        <Formik
          validationSchema={schema}
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            // Alert con los datos del formulario
            alert(JSON.stringify(values));
            onClose();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
              size="xl"
            >
              <ModalOverlay />
              <ModalContent>
                <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                  <Stack align={"center"}>
                    <Image
                      boxSize="100px"
                      borderRadius="full"
                      src={logoImagina}
                      alt="logo Imagina"
                    />
                    <Heading fontSize={"4xl"} textAlign={"center"}>
                      Formulario de Registro
                    </Heading>
                    <Text fontSize={"lg"} color={"gray.600"}>
                      Regístrate gratis en el campus de Imagina.
                    </Text>
                  </Stack>
                  <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                  >
                    <form noValidate onSubmit={handleSubmit}>
                      <Stack spacing={4}>
                        <HStack>
                          <Box>
                            <FormControl id="firstName" isRequired>
                              <FormLabel>Nombres</FormLabel>
                              <Input
                                type="text"
                                name="nombre"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.nombre}
                                placeholder="Ingrese un nombre."
                                className="form-control inp_text"
                                id="nombre"
                              />

                              <p className="error">
                                {errors.nombre &&
                                  touched.nombre &&
                                  errors.nombre}
                              </p>
                            </FormControl>
                          </Box>
                          <Box>
                            <FormControl id="lastName" isRequired>
                              <FormLabel>Apellidos</FormLabel>
                              <Input
                                type="text"
                                name="apellidos"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.apellidos}
                                placeholder="Ingrese sus apellidos."
                                className="form-control inp_text"
                                id="apellidos"
                              />

                              <p className="error">
                                {errors.apellidos &&
                                  touched.apellidos &&
                                  errors.apellidos}
                              </p>
                            </FormControl>
                          </Box>
                        </HStack>
                        <FormControl id="telefono" isRequired>
                          <FormLabel>Teléfono</FormLabel>
                          <Input
                            type="number"
                            name="telefono"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.telefono}
                            placeholder="Ingrese un número de Teléfono."
                            className="form-control inp_text"
                            id="telefono"
                          />
                          <p className="error">
                            {errors.telefono &&
                              touched.telefono &&
                              errors.telefono}
                          </p>
                        </FormControl>
                        <FormControl id="email" isRequired>
                          <FormLabel>Email</FormLabel>
                          <Input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Ingrese un email válido / usuario"
                            className="form-control inp_text"
                            id="email"
                          />

                          <p className="error">
                            {errors.email && touched.email && errors.email}
                          </p>
                        </FormControl>
                        <FormControl id="password" isRequired>
                          <FormLabel>Contraseña</FormLabel>
                          <InputGroup>
                            <p className="error"></p>
                            <Input
                              type={showPassword ? "text" : "password"}
                              name="password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                              placeholder="Ingrese una contraseña"
                              className="form-control inp_text"
                              id="password"
                            />
                            <p className="error">
                              {errors.password &&
                                touched.password &&
                                errors.password}
                            </p>

                            <InputRightElement h={"full"}>
                              <Button
                                variant={"ghost"}
                                onClick={() =>
                                  setShowPassword(
                                    (showPassword) => !showPassword
                                  )
                                }
                              >
                                {/* {showPassword ? <ViewIcon /> : <ViewOffIcon />} */}
                              </Button>
                            </InputRightElement>
                          </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                          <Button
                            type="submit"
                            loadingText="registrar"
                            size="lg"
                            bg={"blue.400"}
                            color={"white"}
                            _hover={{
                              bg: "blue.500",
                            }}
                          >
                            Registrar
                          </Button>
                        </Stack>
                        <Stack pt={6}>
                          <Text align={"center"}>
                            Ya eres usuario?{" "}
                            <Link color={"blue.400"}>Iniciar sesión</Link>
                          </Text>
                        </Stack>
                      </Stack>
                    </form>
                  </Box>
                </Stack>
              </ModalContent>
            </Modal>
          )}
        </Formik>
      </section>
    </>
  );
}
