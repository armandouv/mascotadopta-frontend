import {Box, chakra, Flex, Heading} from "@chakra-ui/react";
import React from "react";
import MascotHomeIcon from "../util/icons/MascotHomeIcon";

function Footer()
{
    return (
        <chakra.footer display="flex" alignItems="center" flexDir="column" padding="2.5% 0">

            <Flex>
                <MascotHomeIcon h={4} w={4} marginRight="12px"/>
                <Heading size="md">Mascotadopta</Heading>
            </Flex>

            <Box mt="0.8em" color="gray.600">
                <chakra.strong>Contacto:&nbsp;</chakra.strong>
                mascotadopta@gmail.com
            </Box>
        </chakra.footer>
    );
}

export default Footer;
