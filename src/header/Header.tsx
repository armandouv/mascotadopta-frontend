import React from "react";
import {Box, Button, Flex, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList, chakra} from "@chakra-ui/react";
import MascotHomeIcon from "../util/icons/MascotHomeIcon";
import {HamburgerIcon} from "@chakra-ui/icons";

function Header()
{
    return (
        <chakra.header display="flex" justifyContent="center" padding="2.5% 0">
            <Flex justifyContent="space-between" alignItems="center" width="92%">
                <Flex>
                    <MascotHomeIcon h={7} w={7} marginRight="12px"/>
                    <Heading size="lg">Mascotadopta</Heading>
                </Flex>

                <Menu>
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
                </Menu>


            </Flex>
        </chakra.header>
    );
}

export default Header;
