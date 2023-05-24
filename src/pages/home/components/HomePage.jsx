import React from "react";
import { CardCursos } from "../../cursos/components/CardCursos";

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
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { FaCode, FaJava } from "react-icons/fa";
import { BsDisplay, BsStack } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { ImHtmlFive2, ImCss3 } from "react-icons/im";
import { useContext } from "react";
import { UserContext } from "../../../routers/routes";
import {
  SiJavascript,
  SiPython,
  SiPhp,
  SiTypescript,
  SiCsharp,
} from "react-icons/si";
import { ModalRuta } from "../../ruta/components/ModalRuta";

export function HomePage() {
  const user = useContext(UserContext);
  const isLoggedIn = useContext(UserContext);

  return (
    <div>
      <>
        <SimpleGrid spacingX="20px" spacingY="20px" margin={"5"}>
          <Heading as="h3" size="lg" marginStart={"-19"} textAlign={"left"}>
            Bienvenid@ {user?.nombre} {user?.apellidos}
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
                    <ModalRuta />
                      <Button alignItems={"center"} background={"#FAF089"}>
                        <BsDisplay />
                        &nbsp;Frontend
                      </Button>
                      <Button alignItems={"center"} background={"#FAF089"}>
                        <FiServer />
                        &nbsp;Backend
                      </Button>
                      <Button alignItems={"center"} colorScheme="red">
                        <BsStack />
                        &nbsp;Full Stack Developer
                      </Button>
                    </Wrap>
                  </ButtonGroup>
                </Box>
              </Box>
            </Card>

            <Card w={80}>
              <Box>
                <Heading as="h4" size="md" margin="5">
                  Lenguajes Populares
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
                      <Button alignItems={"center"} colorScheme="gray">
                        <ImHtmlFive2 />
                        &nbsp;HTML
                      </Button>
                      <Button alignItems={"center"}>
                        <ImCss3 />
                        &nbsp;CSS
                      </Button>
                      <Button alignItems={"center"}>
                        <SiJavascript />
                        &nbsp;JavaScript
                      </Button>
                      <Button alignItems={"center"}>
                        <SiPython />
                        &nbsp;Python
                      </Button>
                      <Button alignItems={"center"}>
                        <SiPhp />
                        &nbsp;PHP
                      </Button>
                      <Button alignItems={"center"}>
                        <FaJava />
                        &nbsp;Java
                      </Button>
                      <Button alignItems={"center"}>
                        <SiTypescript />
                        &nbsp;TypeScript
                      </Button>
                    </Wrap>
                  </ButtonGroup>
                </Box>
              </Box>
            </Card>

            <Card w={80}>
              <Heading as="h4" size="md" margin="5">
                Trabaja con nosotros
              </Heading>
              <Divider />
              <Card>
                <CardBody>
                  <Text>
                    Si eres desarrollador y tienes los conocimientos puedes
                    subir tus cursos en nuestra plataforma y compartir tus
                    conocimientos con otras personas.
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button>Empieza aquí</Button>
                </CardFooter>
              </Card>
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

      <h2>Inicia sesión para ver el contenido</h2>
    </div>
  );
}
