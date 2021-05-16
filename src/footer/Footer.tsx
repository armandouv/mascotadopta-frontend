import {Box, chakra, Flex, Heading} from "@chakra-ui/react";
import React from "react";
import MascotHomeIcon from "../util/icons/MascotHomeIcon";

function Footer()
{
    return (
        <chakra.footer display="flex" justifyContent="center" padding="2.5% 0">
            <Flex justifyContent="space-between" alignItems="center" width="92%">
                <Flex>
                    <MascotHomeIcon h={4} w={4} marginRight="12px"/>
                    <Heading size="md">Mascotadopta</Heading>
                </Flex>

                <Box>
                    Contacto: mascotadopta@gmail.com
                </Box>


            </Flex>
        </chakra.footer>
    );
}

export default Footer;
