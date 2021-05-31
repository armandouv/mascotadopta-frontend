import {Page} from "../../util/pagination/Page";
import {PetInfoDto} from "./PetInfo";
import {apiUrl} from "../../util/config";


export async function loadPetsPage(pageNumber: number): Promise<Page<PetInfoDto>>
{
    const petsPageResponse = await fetch(apiUrl + "/pets?page=" + pageNumber);
    if (petsPageResponse.status === 404) return {
        totalPages: 0,
        elements: []
    };

    const petsPageObject = await petsPageResponse.json();
    return {
        totalPages: petsPageObject.pages,
        elements: petsPageObject.elements
    };
}
