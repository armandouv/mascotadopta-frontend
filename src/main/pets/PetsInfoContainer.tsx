import PetInfo, {PetInfoDto} from "./PetInfo";
import React, {useState} from "react";
import {Grid} from "@chakra-ui/react";

function PetsInfoContainer()
{
    const [petsInfo, setPetsInfo] = useState<PetInfoDto[]>([]);
    const petInfoComponents = petsInfo.map(petInfo => {
        return <PetInfo key={petInfo.id} {...petInfo} />
    });

    return (
        <Grid>
            {petInfoComponents}
        </Grid>
    );
}

export default PetsInfoContainer;
