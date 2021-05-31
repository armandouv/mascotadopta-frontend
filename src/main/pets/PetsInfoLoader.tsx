import {PetInfoDto} from "./PetInfo";
import React, {useEffect, useState} from "react";
import {Flex, Spinner} from "@chakra-ui/react";
import PetsInfoContainer from "./PetsInfoContainer";
import {loadPetsPage} from "./petsService";
import {Page} from "../../util/pagination/Page";

function PetsInfoLoader()
{
    const [petsInfoPage, setPetsInfoPage] = useState<Page<PetInfoDto> | null>(null);

    useEffect(() => {
        loadPetsPage(0).then(setPetsInfoPage);
    }, []);

    if (!petsInfoPage)
        return (<Flex minHeight="40rem" display="flex" alignItems="center">
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
        </Flex>);

    return <PetsInfoContainer initalPetsPage={petsInfoPage}/>;
}

export default PetsInfoLoader;
