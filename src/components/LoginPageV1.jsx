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
  useToast
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { UserApi } from "../api/UserApi";
//import { useState,useEffect } from "react";


export function LoginPage() {

  const data = UserApi(import.meta.env.VITE_URL_API_USUARIOS);
  const [token, setToken] = useState('');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isLoggedIn,  setIsLoggedIn] = useState(false)
  let mensaje = '';

  

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function onSubmit() {
    const bd = data;
    const mapeado = bd.data.map( (usuario) => {
      return {
        key: usuario.id,
        name: usuario.attributes.email,
        password: usuario.attributes.password,
        token: usuario.attributes.token
      }
    });
    
     const isValid = !!mapeado.find(usuario => usuario.name === username && usuario.password === password);
    // mensaje = isValid ? navigate('/home') : 'Credenciales invalidas';
    // setError(mensaje);
    
   
    if (isValid) {
      const usuario = mapeado.find(usuario => usuario.name === username && usuario.password === password);
      localStorage.setItem('token', usuario.token);
      navigate('/home');
      
      
    } else {
      setError('Credenciales inválidas');
    }
    
   
  }

  return (

    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"3xl"}>Bienvenidos al Campus Imagina</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Si no tienes cuenta registrate <Link to="/registro">aquí.</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <FormControl>
            <FormErrorMessage>
            {/* {error && <Box color="red.500">{error}</Box>} */}
              {error.name && error.name.message}
            </FormErrorMessage>
          </FormControl>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                value={username}
                //onChange={(e) => setEmail(e.target.value)}
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
                //onChange={(e) => setPassword(e.target.value)}
                onChange={handlePasswordChange}
                type="password"
                placeholder="••••••••••"
                required
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Recuerdame</Checkbox>
                <Link color={"blue.400"}>Recordar contraseña.</Link>
              </Stack>

              <Button colorScheme="blue" onClick={e => onSubmit(true)}>
          Iniciar sesión
        </Button>
        {error && <Box color="red.500">{error}</Box>}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
