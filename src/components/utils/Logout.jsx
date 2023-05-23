import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function Logout(props){
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('perfil');
        navigate("/");
        props.onClose()
    }


    return (  
        <>
        <Button colorScheme="twitter" mr={3} onClick={handleLogout}>
        Salir
        </Button>
        </>
   )
}