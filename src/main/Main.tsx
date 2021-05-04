import React from "react";
import { Button, Stack } from "@chakra-ui/react";
import {signinRedirect} from "../auth/userService";

function Main()
{
    return (
        <Stack direction="row" spacing={4}>
            <Button colorScheme="pink" variant="solid" onClick={signinRedirect}>
                Inicia sesión
            </Button>
            <Button colorScheme="blue" variant="outline">
                Regístrate
            </Button>
        </Stack>
    );
}

export default Main;
