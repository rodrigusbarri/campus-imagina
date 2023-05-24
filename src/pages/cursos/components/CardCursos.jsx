import {
  Button,
  ButtonGroup,
  Divider,
  Heading,
  Stack,
  Image,
  Text,
  Card,
  CardBody,
  CardFooter,
  SimpleGrid,
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  VStack,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import { UserApi } from "../../../api/UserApi";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";

export function CardCursos() {
  const { data, loading, error } = UserApi(import.meta.env.VITE_URL_API_CURSOS);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCurso, setSelectedCurso] = React.useState(null);
  const navigate = useNavigate();
  const { state } = useLocation();

  const openModal = (curso) => {
    setSelectedCurso(curso);
    onOpen();
  };

  const goToDetalle = (selectedCurso) => {
    navigate("/detalle", { state: selectedCurso });
  };

  return (
    <section>
      <div className="cursos-container">
        <ul>
          {error && <li>Error: {error}</li>}
          {loading && (
            <li>
              <h1>Loading...</h1>
            </li>
          )}
        </ul>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        >
          {data?.map((curso) => (
            <Card
              key={curso.id}
              onClick={() => openModal(curso)}
              cursor="pointer"
              _hover={{ bg: "blue.100" }}
            >
              <CardBody>
                <Image src={curso.attributes.imagen_url} borderRadius="lg" />
                <Stack mt="4" spacing="3">
                  <Heading as="h4" size="md">
                    {curso.attributes.nombre}
                  </Heading>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Text color="black.600" fontSize="md" align="right">
                  Nivel: {curso.attributes.nivel}
                </Text>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
        <section>
          <Stack direction="column">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
              py={10}
              bgPosition="center"
              bgRepeat="no-repeat"
              mb={2}
            >
              <Button
                size="lg"
                rightIcon={<ArrowRightIcon />}
                colorScheme="twitter"
                variant="solid"
                align="center"
              >
                Ver todos los cursos
              </Button>
            </Box>
          </Stack>
        </section>
      </div>

      {/* Modal con la descripción  del curso */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />

        <ModalContent>
          <Image src={selectedCurso?.attributes.imagen_url} borderRadius="lg" />
          <ModalHeader>{selectedCurso?.attributes.nombre}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Contenido adicional del curso */}
            <VStack spacing={4} align="stretch">
              <Text align="justify">
                {selectedCurso?.attributes.descripcion}
              </Text>
              {/* Otros detalles del curso */}

              <Text align="end">
                <Badge colorScheme="green" alignItems="end" fontSize="0.9em">
                  Nivel: {selectedCurso?.attributes.nivel}
                </Badge>
              </Text>

              <Text align={"start"} fontSize="sm">
                Modulos: {selectedCurso?.attributes.modulos}
              </Text>
              <Text align={"start"} fontSize="sm">
                Duración: {selectedCurso?.attributes.duracion}
              </Text>
              <Text align={"start"} fontSize="sm">
                Profesor: {selectedCurso?.attributes.profesor}
              </Text>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => goToDetalle(selectedCurso)}
            >
              Iniciar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </section>
  );
}
