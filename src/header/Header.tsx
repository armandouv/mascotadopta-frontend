import React from "react";
import {Box, Button, Flex, Heading, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import MascotHomeIcon from "../util/icons/MascotHomeIcon";
import {ChevronDownIcon} from "@chakra-ui/icons";

function Header()
{
    return (
        <header>
            <Flex>
                <Flex>
                    <MascotHomeIcon/>
                    <Heading>Mascotadopta</Heading>
                </Flex>
                <Flex>
                    <Box>
                        Search
                    </Box>
                    <Button>Ir</Button>
                </Flex>
                <Flex>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                            Actions
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </header>
    );
}

export default Header;
