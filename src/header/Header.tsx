import React from "react";
import {Button, chakra, Flex, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack} from "@chakra-ui/react";
import MascotHomeIcon from "../util/icons/MascotHomeIcon";
import {signinRedirect} from "../auth/userService";
import {HamburgerIcon} from "@chakra-ui/icons";

function Header()
{
    return (
        <chakra.header display="flex" justifyContent="center" padding={["1.3% 0", "1.5% 0", "1.6% 0", "1.2% 0"]}>
            <Flex justifyContent="space-between" alignItems="center" width={["94%", "90%", "80%"]}>

                <Flex alignItems="center">
                    <MascotHomeIcon h={[7, 7, 8]} w={[7, 7, 8]} marginRight={["10px", "12px", "14px"]}
                                    fill="orange.400"/>
                    <Heading size="lg" color="blue.800">Mascotadopta</Heading>
                </Flex>

                <Stack direction="row" spacing={4} display={["none", "none", "flex"]}>
                    <Button colorScheme="blue" variant="solid" onClick={signinRedirect}>
                        Inicia sesión
                    </Button>
                    <Button colorScheme="blue" variant="outline">
                        Regístrate
                    </Button>
                </Stack>

                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label="Open menu"
                        icon={<HamburgerIcon/>}
                        variant="ghost"
                        display={[null, null, "none"]}
                    />
                    <MenuList>
                        <MenuItem>Inicia sesión</MenuItem>
                        <MenuItem>Regístrate</MenuItem>
                    </MenuList>
                </Menu>

            </Flex>
        </chakra.header>
    );
}

export default Header;
