import React from "react";
import {Badge, Box, Heading, Image, LinkBox, LinkOverlay} from "@chakra-ui/react";

export interface PetInfoDto
{
    id: number;
    createdDate: Date;
    type: String;
    isActive: boolean;
    name: string;
    zipCode: number;
    imageUrl: string;
    imageAlt: string;
}

function PetInfo(props: PetInfoDto)
{
    return (
        <LinkBox as="article" maxW="sm"
                 _hover={{transform: "translateY(-2px)", boxShadow: "3px 3px 30px rgb(204, 204, 204)"}}
                 _active={{transition: "all 50ms ease-out", transform: "translateY(-0.5px)"}}
                 transition="all 200ms ease-in"
                 boxShadow="2px 2px 20px rgb(217, 217, 217)"
                 borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={props.imageUrl} alt={props.imageAlt}/>
            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                        {props.isActive ? "Disponible" : "Adoptado"}
                    </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        Publicado el {props.createdDate.toLocaleDateString()}
                    </Box>
                </Box>

                <Heading mt="1"
                         size="md"
                         lineHeight="tight"
                         isTruncated>
                    <LinkOverlay href="#">
                        {props.name}
                    </LinkOverlay>
                </Heading>

                <Box>
                    Tipo: {props.type}
                </Box>

                <Box as="span" color="gray.600" fontSize="sm">
                    Código postal: {props.zipCode}
                </Box>
            </Box>
        </LinkBox>
    );
}

export default PetInfo;
