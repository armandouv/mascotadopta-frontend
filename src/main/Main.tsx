import React, {useEffect, useState} from "react";
import {Box} from "@chakra-ui/react";
import userManager from "../auth/userService";
import {User} from "oidc-client";
import PetsInfoContainer from "./pets/PetsInfoContainer";

// TODO: pagination, responsive, add links

function Main()
{
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        userManager.getUser().then((fetchedUser) => {
            setUser(fetchedUser);
        });
    }, []);

    return (
        <Box display="flex" justifyContent="space-around" padding={["1.3% 0", "1.5% 0", "1.6% 0", "1.2% 0"]}>
            <PetsInfoContainer/>
        </Box>
    );
}

export default Main;
