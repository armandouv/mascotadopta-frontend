import React from "react";
import {Box} from "@chakra-ui/react";

export interface PetInfoDto
{
    id: number;
    createdDate: Date;
    type: String;
    isActive: boolean;
    name: string;
    zipCode: number;
}

function PetInfo(props: PetInfoDto)
{
    return (
        <Box borderWidth="1px" borderRadius="lg">
            Nombre: {props.name}
            Publicado el {props.createdDate}
            Tipo: {props.type}
            {props.isActive ? "Disponible" : "Adoptado"}
            Localidad: {props.zipCode}
        </Box>
    );
}

export default PetInfo;
