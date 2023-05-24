import React from "react";
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
  StackDivider,
  Box,
  Divider,
  Grid,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Wrap,
  Flex,
} from "@chakra-ui/react";
import { FaCode } from "react-icons/fa";
import { CardRutaContenido } from "./CardRutaContenido";
import { CardRutaMenu } from "./CardRutaMenu";
import { BsDisplay, BsStack } from "react-icons/bs";
import { FiServer } from "react-icons/fi";

export function ModalRuta() {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const openModal = () => {
    onOpen();
  };

  return (
    <>
      <Button
        alignItems={"center"}
        background={"#C6F6D5"}
        // key={curso.id}
        onClick={() => openModal()}
      >
        <FaCode />
        &nbsp;Aprende a programar
      </Button>

      {/* Modal con la descripción  del curso */}
      <Modal isOpen={isOpen} onClose={onClose} size="6xl" maxW="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>
            Selecciona la ruta que deseas.
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <Card>
                <Flex>
                  <CardRutaMenu />
                </Flex>
              </Card>

              <Card>
                <CardRutaContenido />
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
