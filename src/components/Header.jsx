import "./styles/Header.css";
import React from "react";
import { ButtonSidebar } from "./utils/ButtonSidebar";
import { Text, Stack, Input, IconButton, Image, Box,SimpleGrid, useColorModeValue, } from "@chakra-ui/react";
import { Search } from "./utils/Search";
import { ButtonPerfil } from "./utils/ButtonPerfil";
import { ButtonToggle } from "./utils/ButtonToggle";
import logoImagina from "../assets/images/logo-imagina.jpg";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../routers/routes";

const Header = () => {
  const user = useContext(UserContext);
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
    <header className="header-container">
      <Stack direction="row" spacing={2} align="center" bg={useColorModeValue('white', 'gray.800')}  color={useColorModeValue('gray.800', 'white')}>
        <SimpleGrid columns={[2, null, 3]} spacing='-1' margin={'auto'}>
          <Box height="60px" w={'16'} >
            <Image
            margin={'1'}
            marginTop={'-3'}
              alignContent={"center"}
              boxSize="60px"
              borderRadius="full"
              src={logoImagina}
              alt="logo Imagina"
            />
          </Box>
          <Box  height="60px" w={'28'} alignContent={'center'}>
            <Text as='b' fontSize="2xl" margin={'1'}  textAlign={'center'} alignContent={'center'}>
              Imagina
            </Text>
          </Box>
        </SimpleGrid>

        <Search />
        <ButtonSidebar />
        <ButtonPerfil />
        <ButtonToggle />
      </Stack>
    </header>
  );
};

export default Header;
