import React, {useEffect, useState} from "react";
import {Box} from "@chakra-ui/react";
import userManager from "../auth/userService";
import {User} from "oidc-client";
import PetsInfoLoader from "./pets/PetsInfoLoader";

// TODO: pagination, responsive, add links in cards and to landing page

function Main()
{
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        userManager.getUser().then((fetchedUser) => {
            setUser(fetchedUser);
        });
    }, []);

    //TODO: remove this
    if (user !== null) console.log(user.access_token);

    return (
        <Box display="flex" justifyContent="space-around" padding={["1.3% 0", "1.5% 0", "1.6% 0", "1.2% 0"]}>
            <PetsInfoLoader/>
        </Box>
    );
}

export default Main;
