import PetInfo, {PetInfoDto} from "./PetInfo";
import React, {useState} from "react";
import {Grid} from "@chakra-ui/react";

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

const pets = Array(10).fill(testPetInfo);

function PetsInfoContainer()
{
    const [petsInfo, setPetsInfo] = useState<PetInfoDto[]>(pets);
    const petInfoComponents = petsInfo.map(petInfo => {
        return <PetInfo key={petInfo.id} {...petInfo} />
    });

    return (
        <Grid maxWidth={["80%"]} templateColumns="repeat(3, 1fr)" gap={8}>
            {petInfoComponents}
        </Grid>
    );
}

export default PetsInfoContainer;
