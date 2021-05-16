import React from "react";
import {Button, chakra, Flex, Heading, Stack} from "@chakra-ui/react";
import MascotHomeIcon from "../util/icons/MascotHomeIcon";
import {signinRedirect} from "../auth/userService";

function Header()
{
    return (
        <chakra.header display="flex" justifyContent="center" padding="1.5% 0">
            <Flex justifyContent="space-between" alignItems="center" width="80%">
                <Flex alignItems="center">
                    <MascotHomeIcon h={8} w={8} marginRight="14px" fill="orange.400"/>
                    <Heading size="lg" color="blue.800">Mascotadopta</Heading>
                </Flex>

                <Stack direction="row" spacing={4}>
                    <Button colorScheme="pink" variant="solid" onClick={signinRedirect}>
                        Inicia sesión
                    </Button>
                    <Button colorScheme="blue" variant="outline">
                        Regístrate
                    </Button>
                </Stack>


                {/*<Menu>
                 <MenuButton
                 as={IconButton}
                 aria-label="Open menu"
                 icon={<HamburgerIcon/>}
                 variant="ghost"
                 />
                 <MenuList>
                 <MenuItem>
                 <Flex>
                 <Box>
                 Search
                 </Box>
                 <Button>Ir</Button>
                 </Flex>
                 </MenuItem>
                 <MenuItem>Download</MenuItem>
                 <MenuItem>Create a Copy</MenuItem>
                 <MenuItem>Mark as Draft</MenuItem>
                 <MenuItem>Delete</MenuItem>
                 <MenuItem>Attend a Workshop</MenuItem>
                 </MenuList>
                 </Menu>*/}


            </Flex>
        </chakra.header>
    );
}

export default Header;
