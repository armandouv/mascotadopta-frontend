import React, {useEffect, useState} from "react";
import {Box} from "@chakra-ui/react";
import userManager from "../auth/userService";
import {User} from "oidc-client";
import PetsInfoContainer from "./pets/PetsInfoContainer";

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
            <PetsInfoContainer/>
        </Box>
    );
}

export default Main;
