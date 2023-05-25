import {
  Button,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  CardHeader,
  Card,
  Heading,
  CardBody,
  CardFooter,
  SimpleGrid,
  Stack,
  ButtonGroup,
  Box,
  VStack,
  Grid,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Wrap,
  Flex,
  Center,
  useColorModeValue,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaCode } from "react-icons/fa";
import { CardRutaContenido } from "./CardRutaContenido";
import { BsDisplay, BsStack } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { UserApi } from "../../../api/UserApi";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Accordion, AccordionTab } from "primereact/accordion";
import { ScrollPanel } from 'primereact/scrollpanel';

export function ModalRuta() {
  const { data, loading, error } = UserApi(import.meta.env.VITE_URL_API_RUTAS);
  const [selectedRuta, setSelectedRuta] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const IconoRuta = selectedRuta?.attributes.icono_ruta;

  const navigate = useNavigate();
  const { state } = useLocation();

  const openModal = (ruta) => {
    setSelectedRuta(ruta);
    onOpen();
  };

  // const goToDetalle = (selectedRuta) => {
  //   navigate("/detalle", { state: selectedRuta });
  // };

  return (
    <>
      <>
        {error && <li>Error: {error}</li>}
        {loading && (
          <li>
            <h1>Loading...</h1>
          </li>
        )}
      </>

      {data?.map((ruta) => (
        <ButtonGroup
          key={ruta?.id}
          variant="solid"
          spacing="6"
          flexDirection="column"
          margin={9}
        >
          <Wrap spacing={3}>
            <Button
              w={"48"}
              alignItems={"center"}
              background={
                ruta?.attributes?.icono_ruta === "FaCode"
                  ? "#68D391"
                  : ruta?.attributes?.icono_ruta === "BsDisplay" ||
                    ruta?.attributes?.icono_ruta === "FiServer"
                  ? "#F6E05E"
                  : ruta?.attributes?.icono_ruta === "BsStack"
                  ? "#E53E3E"
                  : "#C6F6D5"
              }
              onClick={() => openModal(ruta)}
            >
              {ruta?.attributes?.icono_ruta === "FaCode" ? (
                <FaCode />
              ) : ruta?.attributes?.icono_ruta === "FiServer" ? (
                <FiServer />
              ) : ruta?.attributes?.icono_ruta === "BsStack" ? (
                <BsStack />
              ) : ruta?.attributes?.icono_ruta === "BsDisplay" ? (
                <BsDisplay />
              ) : null}
               &nbsp;{ruta.attributes.nombre}
            </Button>
          </Wrap>
        </ButtonGroup>
      ))}

      {/* Modal con la descripción  del curso */}
      <Modal isOpen={isOpen} onClose={onClose} size="6xl" maxW="md">
        <ModalContent>
          <ModalHeader textAlign={"center"} fontSize={"3xl"}>
            Selecciona una hoja de ruta.
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <Box
                maxW={"800px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"md"}
                overflow={"hidden"}
                width={"600px"} // Establece el ancho de la tarjeta aquí
              >
                <Card>
                  <Flex>
                    <Center py={6}>
                      <Box
                        maxW={"800px"}
                        w={"full"}
                        bg={useColorModeValue("white", "gray.800")}
                        boxShadow={"2xl"}
                        rounded={"md"}
                        overflow={"hidden"}
                      >
                        <Box
                          maxW={"800px"}
                          w={"full"}
                          bg={useColorModeValue("white", "gray.800")}
                          boxShadow={"2xl"}
                          rounded={"md"}
                          overflow={"hidden"}
                          width={"600px"} // Establece el ancho de la tarjeta aquí
                        >
                          <Card>
                            <CardHeader>
                              <HStack spacing={4}>
                                <Image
                                  boxSize="150px"
                                  objectFit="cover"
                                  src={selectedRuta?.attributes.imagen_ruta}
                                  alt="Imagen ruta"
                                />
                                <Heading size="2xl">
                                  {selectedRuta?.attributes.nombre}
                                </Heading>
                              </HStack>
                              <Heading size="md">
                                {selectedRuta?.attributes.cursos}
                              </Heading>
                            </CardHeader>
                            <CardBody>
                              <Text>
                                {selectedRuta?.attributes.descripcion}
                              </Text>
                            </CardBody>

                            <Accordion activeIndex={0}>
                              <AccordionTab header="Ver contenido">
                                <VStack spacing={1}>
                                  <Button
                                    size="md"
                                    height="48px"
                                    width="400px"
                                    border="2px"
                                    borderColor="gray.300"
                                  >
                                    {selectedRuta?.attributes.contenido_1}
                                  </Button>
                                  <Button
                                    size="md"
                                    height="48px"
                                    width="400px"
                                    border="2px"
                                    borderColor="gray.300"
                                  >
                                    {selectedRuta?.attributes.contenido_2}
                                  </Button>
                                  <Button
                                    size="md"
                                    height="48px"
                                    width="400px"
                                    border="2px"
                                    borderColor="gray.300"
                                  >
                                    {selectedRuta?.attributes.contenido_3}
                                  </Button>
                                  <Button
                                    size="md"
                                    height="48px"
                                    width="400px"
                                    border="2px"
                                    borderColor="gray.300"
                                  >
                                    {selectedRuta?.attributes.contenido_4}
                                  </Button>
                                  <Button
                                    size="md"
                                    height="48px"
                                    width="400px"
                                    border="2px"
                                    borderColor="gray.300"
                                  >
                                    {selectedRuta?.attributes.contenido_5}
                                  </Button>
                                  <Button
                                    size="md"
                                    height="48px"
                                    width="400px"
                                    border="2px"
                                    borderColor="gray.300"
                                  >
                                    {selectedRuta?.attributes.contenido_6}
                                  </Button>
                                  <Button
                                    size="md"
                                    height="48px"
                                    width="400px"
                                    border="2px"
                                    borderColor="gray.300"
                                  >
                                    {selectedRuta?.attributes.contenido_7}
                                  </Button>
                                  {selectedRuta?.attributes.contenido_8 && (
                                    <Button
                                      size="md"
                                      height="48px"
                                      width="400px"
                                      border="2px"
                                      borderColor="gray.300"
                                    >
                                      {selectedRuta?.attributes.contenido_8}
                                    </Button>
                                  )}
                                  {selectedRuta?.attributes.contenido_9 && (
                                    <Button
                                      size="md"
                                      height="48px"
                                      width="400px"
                                      border="2px"
                                      borderColor="gray.300"
                                    >
                                      {selectedRuta?.attributes.contenido_9}
                                    </Button>
                                  )}
                                  {selectedRuta?.attributes.contenido_10 && (
                                    <Button
                                      size="md"
                                      height="48px"
                                      width="400px"
                                      border="2px"
                                      borderColor="gray.300"
                                    >
                                      {selectedRuta?.attributes.contenido_10}
                                    </Button>
                                  )}
                                  {selectedRuta?.attributes.contenido_11 && (
                                    <Button
                                      size="md"
                                      height="48px"
                                      width="400px"
                                      border="2px"
                                      borderColor="gray.300"
                                    >
                                      {selectedRuta?.attributes.contenido_11}
                                    </Button>
                                  )}
                                </VStack>
                              </AccordionTab>
                            </Accordion>
                          </Card>
                        </Box>
                      </Box>
                    </Center>
                  </Flex>
                </Card>
              </Box>
              <Card>
              <div className="card scrollpanel-demo">
        <div className="flex flex-column md:flex-row gap-5">
          <div className="flex-auto">
            <ScrollPanel
              style={{ width: "100%", height: "400px" }}
              className="custombar1"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                modi.
              </p>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus.
              </p>
            </ScrollPanel>
          </div>
        </div>
      </div>
              </Card>
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Button colorScheme="blue">Iniciar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
