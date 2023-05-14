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
  } from "@chakra-ui/react";
  import React from "react";
  import { UserApi } from "../../../api/UserApi";
  import { ArrowRightIcon } from "@chakra-ui/icons";
  
  export function CardCursos() {
    const { data, loading, error } = UserApi("http://localhost:1337/api/cursos");
  
    console.log(data);
  
    return (
      <section>
        <div  className="cursos-container">
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
              <Card key={curso.id}>
                <CardBody>
                  <Image src={curso.attributes.imagen_url} borderRadius="lg" />
                  <Stack mt="4" spacing="3">
                    <Heading as='h3' size='lg'>{curso.attributes.nombre}</Heading>
                      <Text color="black.600" fontSize="md" align="right">
                        Nivel: {curso.attributes.nivel}
                      </Text>
                      <Text color="black.600" fontSize="md" align="right">
                        Duración:{curso.attributes.duracion}
                      </Text>
                    <Text color="black.600" fontSize="sm" align="justify">
                      {curso.attributes.descripcion}
                    </Text>
                    <Text color="black.600" fontSize="sm" align="end">
                      <strong>Profesor</strong> {curso.attributes.profesor}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="10">
                    <Button variant="solid" colorScheme="twitter">
                      Iniciar Curso
                    </Button>
                    {/* <Button variant="solid" colorScheme="blue">
                      Comprar Curso
                      </Button> */}
                  </ButtonGroup>
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
      </section>
    );
  }
  