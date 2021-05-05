import React, {useEffect, useState} from "react";
import {Box, Button, Stack} from "@chakra-ui/react";
import userManager, {signinRedirect} from "../auth/userService";
import {User} from "oidc-client";

function Main()
{
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        userManager.getUser().then((fetchedUser) => {
            setUser(fetchedUser);
        });
    }, []);

    return (
        <Box>
            <Stack direction="row" spacing={4}>
                <Button colorScheme="pink" variant="solid" onClick={signinRedirect}>
                    Inicia sesión
                </Button>
                <Button colorScheme="blue" variant="outline">
                    Regístrate
                </Button>
            </Stack>
            <Box w="50%">
                {user?.toStorageString()}
            </Box>
        </Box>
    );
}

export default Main;
