import {Flex, Spinner} from "@chakra-ui/react";
import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {SignoutResponse, User} from "oidc-client";

interface AuthProps
{
    callback: () => Promise<User | SignoutResponse>;
}

function AuthProgress(props: AuthProps)
{
    const history = useHistory();
    useEffect(() => {
        props.callback()
             .then(() => history.push('/'));
    }, [history, props]);

    return (
        <Flex minHeight="40rem" justifyContent="space-around" alignItems="center"
              padding={["1.3% 0", "1.5% 0", "1.6% 0", "1.2% 0"]}>
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
        </Flex>
    )
}

export default AuthProgress;
