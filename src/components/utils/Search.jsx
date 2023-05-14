import {
    Text, Stack, Input, IconButton
    } from '@chakra-ui/react'
    import { SearchIcon } from "@chakra-ui/icons";

export function Search() {
    return(
        <>
        <Input placeholder="Buscar curso...">
 
        </Input>
        <IconButton
          colorScheme="twitter"
          aria-label="Search database"
          icon={<SearchIcon />}
        />
        </>
    )
}