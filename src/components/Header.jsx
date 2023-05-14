import './styles/Header.css'
import React from 'react';
import { ButtonSidebar } from './utils/ButtonSidebar'
import {
Text, Stack, Input, IconButton, Image, Box 
} from '@chakra-ui/react'
import { Search } from './utils/Search';
import { ButtonPerfil } from './utils/ButtonPerfil';
import { ButtonToggle } from './utils/ButtonToggle';
import logoImagina from '../assets/images/logo-imagina.jpg'

const Header = () => {
  return (
    <header className="header-container">
      <Stack direction="row" spacing={2} align="flex">
        <Box boxSize="sm">
          <Image
            boxSize="50px"
            borderRadius="full"
            src={logoImagina}
            alt="logo Imagina"
          />
        </Box>
        <Search />
        <ButtonSidebar />
        <ButtonPerfil />
        <ButtonToggle />
      </Stack>
    </header>
  );
};

export default Header;
