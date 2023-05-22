import React from "react";
import { CardCursos } from "../pages/cursos/components/CardCursos";

import {
  Card,
  Heading,
  SimpleGrid,
  Box,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FaCode } from "react-icons/fa";
import { BsDisplay, BsStack } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { useContext } from "react";
import { UserContext } from "../routers/routes";



export function HomePage() {
  const user = useContext(UserContext);


  return (
    <>
<SimpleGrid spacingX="20px" spacingY="20px" margin={"5"}>
      <Heading as='h3' size='lg' marginStart={"-19"} textAlign={"left"}>
        Bienvenid@ {user?.nombre}
      </Heading>
      </SimpleGrid>
      

      <SimpleGrid spacingX="20px" spacingY="20px">
        {/* Card superior Cursos mejor valorados y comentarios */}

        <SimpleGrid columns={4} w={1400} spacingX="-20px" spacingY="20px">
          <Card w={80}>
            <Box>
              <Heading as="h4" size="md" margin="5">
                Sigue una ruta
              </Heading>
            </Box>
            <Divider />
            <Box>
              <Box>
                <ButtonGroup
                  variant="solid"
                  spacing="6"
                  flexDirection="column"
                  margin={9}
                >
                  <Wrap spacing={3}>
                    <Button alignItems={'center'}><FaCode />&nbsp;Aprende a programar</Button>
                    <Button alignItems={'center'}><BsDisplay />&nbsp;Frontend</Button>
                    <Button alignItems={'center'}><FiServer/>&nbsp;Backend</Button>
                    <Button alignItems={'center'}><BsStack/>&nbsp;Full Stack Developer</Button>
                  </Wrap>
                </ButtonGroup>
              </Box>
            </Box>
          </Card>
          <Card w={80}>
            <Heading as="h4" size="md" margin="5">
              Lenguajes populares
            </Heading>
            <Divider />
          </Card>
          <Card w={80}>
            <Heading as="h4" size="md" margin="5">
              Trabaja con nosotros
            </Heading>
            <Divider />
          </Card>
          <Card w={80}>
            <Heading as="h4" size="md" margin="5">
              Discord
            </Heading>
            <Divider />
          </Card>
        </SimpleGrid>

        <SimpleGrid columns={2} spacingX="30px" spacingY="20px" width={1370}>
          {/* Card cursos */}
          <Card>
            <Box>
              <Heading as="h4" size="md" margin="5">
                Cursos disponibles
              </Heading>
              <Divider />
              <CardCursos />
            </Box>
          </Card>
          <Card>
            {/* Card Discord y Rutas */}
            <Box>
            <Heading as="h4" size="md" margin="5">
              Aqui va otra cosa
            </Heading>
            <Divider />
            </Box>
            
          </Card>
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
}