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
    CardFooter
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  import { Accordion, AccordionTab } from 'primereact/accordion';

export function CardRutaContenido () {
  return (
    <>


    <Center py={6}>
      <Box
        maxW={'800px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>

        <Card>
    <CardHeader>
      <Heading size='md'> De 0 a Dev</Heading>
    </CardHeader>
    <CardBody>
      <Text>Descripción
Hoja de ruta de OpenBootcamp, enfocada en el aprendizaje de 0 a desarrollador.</Text>
    </CardBody>
    
            <Accordion activeIndex={0}>
                <AccordionTab header="Conceptos de la programación">
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                </AccordionTab>
                <AccordionTab header="Introducción a la programación">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionTab>
                <AccordionTab header="Java Básico">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionTab>
            </Accordion>
        
    <CardFooter>
    
    </CardFooter>
  </Card>
      </Box>
    </Center>
    </>    
  );
}