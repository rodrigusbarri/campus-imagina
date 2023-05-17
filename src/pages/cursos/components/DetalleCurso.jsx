import { Heading, Box, Image, Tab, Tabs, TabList, TabPanels, TabPanel,SimpleGrid } from "@chakra-ui/react";
//import { UserApi } from "../../../api/UserApi";
//import { ArrowRightIcon } from "@chakra-ui/icons";
import { PanelMenu } from 'primereact/panelmenu';
import { useLocation } from "react-router-dom";
import ModulosCursos from "../../../components/utils/ModulosCursos";

export function DetalleCurso() {
  //const data = UserApi(import.meta.env.VITE_URL_API_CURSOS);
  //const navigate = useNavigate();
  const { state } = useLocation();



  
    // const bd = data;
    // const mapeado = bd.data?.map( (curso) => {
    //   return {
    //     key: curso.id,
    //     nombre: curso.attributes.nombre,
    //     nivel: curso.attributes.nivel,
    //     descripcion: curso.attributes.descripcion,
    //     modulos: curso.attributes.modulos,
    //     profesor: curso.attributes.profesor,
    //     duracion: curso.attributes.duracion,
    //     likes: curso.attributes.likes,
    //     disponible: curso.attributes.disponible,
    //     imagen: curso.attributes.imagen_url
    //   }

      
    // });

    console.log(state)
  
    

  return (
    <>
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
              <ModulosCursos />
            </TabPanel>
          </TabPanels>
        </Tabs>
        </SimpleGrid>
      </div>
    </>
  );
}
