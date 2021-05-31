import PetInfo, {PetInfoDto} from "./PetInfo";
import React, {useState} from "react";
import {Box, Button, Flex, Grid, Text} from "@chakra-ui/react";
import {Page} from "../../util/pagination/Page";
import {loadPetsPage} from "./petsService";

export interface PetsInfoContainerProps
{
    initalPetsPage: Page<PetInfoDto>;
}

function PetsInfoContainer(props: PetsInfoContainerProps)
{
    const totalPages = props.initalPetsPage.totalPages;

    const [petsInfo, setPetsInfo] = useState<PetInfoDto[]>([]);
    const [nextPageToLoad, setNextPageToLoad] = useState<number>(totalPages > 1 ? 1 : -1);
    const [isLoadingNewPage, setIsLoadingNewPage] = useState<boolean>(false);

    const initialPetsInfo = props.initalPetsPage.elements;
    if (initialPetsInfo.length === 0)
        return (<Box minHeight="40rem" display="flex" alignItems="center">
            <Text fontSize="4xl">Aún no hay ninguna mascota en adopción ):</Text>
        </Box>);

    const loadNextPage = () => {
        setIsLoadingNewPage(true);
        loadPetsPage(nextPageToLoad).then(newPetsInfo => {
            setPetsInfo(newPetsInfo.elements);
            setNextPageToLoad(prevState => (newPetsInfo.totalPages - 1) > prevState ? prevState + 1 : -1);
            setIsLoadingNewPage(false);
        });
    };

    const mergedPetsInfo = [...initialPetsInfo, ...petsInfo];
    const petsInfoComponents = mergedPetsInfo.map(petInfo => {
        return <PetInfo key={petInfo.id} {...petInfo} />
    });

    return (
        <Flex maxWidth={["80%"]} alignItems="center" flexDir="column">
            <Grid minHeight="40rem" templateColumns="repeat(3, 1fr)" gap={8}>
                {petsInfoComponents}
            </Grid>
            {nextPageToLoad !== -1 &&
             <Button mt={["3.5rem"]} isLoading={isLoadingNewPage} colorScheme="blue" variant="outline"
                     onClick={loadNextPage}>
                 Cargar más mascotas
             </Button>}
        </Flex>
    );
}

export default PetsInfoContainer;
