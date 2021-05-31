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
    const [petsInfo, setPetsInfo] = useState<PetInfoDto[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [isLastPage, setIsLastPage] = useState(props.initalPetsPage.isLast);
    const [isLoadingNewPage, setIsLoadingNewPage] = useState<boolean>(false);

    const initialPetsInfo = props.initalPetsPage.content;
    if (initialPetsInfo.length === 0)
        return (<Box minHeight="40rem" display="flex" alignItems="center">
            <Text fontSize="4xl">Aún no hay ninguna mascota en adopción ):</Text>
        </Box>);

    const loadNextPage = () => {
        setIsLoadingNewPage(true);
        loadPetsPage(currentPage + 1).then(newPetsInfo => {
            setPetsInfo(prevPetsInfo => [...prevPetsInfo, ...newPetsInfo.content]);
            setCurrentPage(prevPage => prevPage + 1);
            setIsLastPage(newPetsInfo.isLast)
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
            {!isLastPage &&
             <Button mt={["3.5rem"]} isLoading={isLoadingNewPage} colorScheme="blue" variant="outline"
                     onClick={loadNextPage}>
                 Cargar más mascotas
             </Button>}
        </Flex>
    );
}

export default PetsInfoContainer;
