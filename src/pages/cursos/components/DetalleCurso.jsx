import { Heading, Box, Image, Tab, Tabs, TabList, TabPanels, TabPanel,SimpleGrid } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

import { UserContext } from "../../../routers/routes";
import { useContext, useEffect } from "react";
import Header from "../../../components/Header";



export function DetalleCurso() {
  const { state } = useLocation();
  const user = useContext(UserContext);
  const navigate = useNavigate();




  useEffect(() => {
    // Verifica si el token está presente al cargar el componente
    redirectIfTokenMissing();
  }, []);

  const redirectIfTokenMissing = () => {
    const token = localStorage.getItem("token");
    if (!token && !user) {
      //Redirige al usuario a la página de inicio de sesión si no hay un token válido
      navigate("/");
    }
  };




    console.log(state)
  
    

  return (
    <>
    <div>
      <Header />
    </div>
      <div>
      <SimpleGrid
          spacing={10}
          templateColumns='initial'
        >
      <Box ></Box>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image w='100%' src={state?.attributes?.imagen_url} alt="Imagen del curso"    />
        </Box>
        <Heading alignContent='center'>{state?.attributes?.nombre}</Heading>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Descripción</Tab>
            <Tab>Módulos</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>{state?.attributes?.descripcion}</p>
            </TabPanel>
            <TabPanel>
              
            </TabPanel>
          </TabPanels>
        </Tabs>
        </SimpleGrid>
      </div>
      <div>
      
      </div>
    </>
  );
}
