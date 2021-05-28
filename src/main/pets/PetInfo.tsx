import React from "react";
import {Badge, Box, Image} from "@chakra-ui/react";

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
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
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

                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    Nombre: {props.name}
                </Box>

                <Box>
                    Tipo: {props.type}
                </Box>

                <Box as="span" color="gray.600" fontSize="sm">
                    Código postal: {props.zipCode}
                </Box>
            </Box>
        </Box>
    );
}

export default PetInfo;
