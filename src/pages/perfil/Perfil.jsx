import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
  } from '@chakra-ui/react';
  import { SmallCloseIcon } from '@chakra-ui/icons';
  import { useContext } from "react";
import { UserContext } from '../../routers/routes';


  
  export function Perfil() {
    const user = useContext(UserContext);
    
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            Perfil de {user?.nombre}
          </Heading>
          <FormControl id="userName">
            <FormLabel>Avatar</FormLabel>
            <Stack direction={['column', 'row']} spacing={6}>
              <Center>
                <Avatar size="xl" src="">
                  <AvatarBadge
                    as={IconButton}
                    size="sm"
                    rounded="full"
                    top="-10px"
                    colorScheme="red"
                    aria-label="remove Image"
                    icon={<SmallCloseIcon />}
                  />
                </Avatar>
              </Center>
              <Center w="full">
                <Button w="full">Cambiar avatar</Button>
              </Center>
            </Stack>
          </FormControl>
          <FormControl id="userName" isRequired>
            <FormLabel>Nombre de Usuario</FormLabel>
            <Input
              placeholder="Usuario"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="nombre" isRequired>
            <FormLabel>Nombre completo</FormLabel>
            <Input
              placeholder="nombre"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
            />
          </FormControl>
          <FormControl id="telefono" isRequired>
            <FormLabel>Teléfono</FormLabel>
            <Input
              placeholder="Teléfono"
              _placeholder={{ color: 'gray.500' }}
              type="number"
            />
          </FormControl>
          <FormControl id="pais" isRequired>
            <FormLabel>País</FormLabel>
            <Input
              placeholder="País"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="provincia" isRequired>
            <FormLabel>Provincia</FormLabel>
            <Input
              placeholder="Provincia/Estado"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="ciudad" isRequired>
            <FormLabel>Ciudad</FormLabel>
            <Input
              placeholder="Ciudad"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Contraseña</FormLabel>
            <Input
              placeholder="password"
              _placeholder={{ color: 'gray.500' }}
              type="password"
            />
          </FormControl>
          <Stack spacing={6} direction={['column', 'row']}>
            <Button
              bg={'red.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'red.500',
              }}>
              Cancelar
            </Button>
            <Button
              bg={'blue.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'blue.500',
              }}>
              Guardar
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }