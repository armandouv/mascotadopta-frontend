import PetInfo, {PetInfoDto} from "./PetInfo";
import React, {useState} from "react";
import {Box, Grid, Text} from "@chakra-ui/react";

const testPetInfo: PetInfoDto = {
    createdDate: new Date(),
    isActive: false,
    name: "Cagoncito",
    zipCode: 55070,
    id: 123434,
    type: "Perro",
    imageUrl: "img.png",
    imageAlt: "Perrito"
};

const pets: PetInfoDto[] = Array(9).fill(testPetInfo);

function PetsInfoContainer()
{
    const [petsInfo, setPetsInfo] = useState<PetInfoDto[]>(pets);
    if (petsInfo.length === 0)
        return (<Box minHeight="40rem" display="flex" alignItems="center">
            <Text fontSize="4xl">Aún no hay ninguna mascota en adopción ):</Text>
        </Box>);

    const petInfoComponents = petsInfo.map(petInfo => {
        return <PetInfo key={petInfo.id} {...petInfo} />
    });
    return (
        <Grid minHeight="40rem" maxWidth={["80%"]} templateColumns="repeat(3, 1fr)" gap={8}>
            {petInfoComponents}
        </Grid>
    );
}

export default PetsInfoContainer;
