import {
  Box,
  Center,
  Text,
  Stack,
  useColorModeValue,
  Button,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { Accordion, AccordionTab } from "primereact/accordion";

export function CardRutaMenu() {
  return (
    <>
      <Center py={6}>
        <Box
          maxW={"800px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Card>
            <CardHeader>
              <Heading size="md"> De 0 a Dev</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Descripción Hoja de ruta de OpenBootcamp, enfocada en el
                aprendizaje de 0 a desarrollador.
              </Text>
            </CardBody>

            <Accordion activeIndex={0}>
              <AccordionTab header="Aprende a programar">
                <Text>
                  Descripción Hoja de ruta de OpenBootcamp, enfocada en el
                  aprendizaje de 0 a desarrollador.
                </Text>
              </AccordionTab>
              <AccordionTab header="Front -End">
                <p className="m-0">
                  Descripción Hoja de ruta de OpenBootcamp, enfocada en el
                  Front-End.
                </p>
              </AccordionTab>
              <AccordionTab header="Back-End">
                <p className="m-0">
                  Descripción Hoja de ruta de OpenBootcamp, enfocada en el
                  Back-End.
                </p>
              </AccordionTab>
              <AccordionTab header="FullStack">
                <p className="m-0">
                  Descripción Hoja de ruta de OpenBootcamp, enfocada en
                  FullStack.
                </p>
              </AccordionTab>
            </Accordion>

            <CardFooter></CardFooter>
          </Card>
        </Box>
      </Center>
    </>
  );
}
