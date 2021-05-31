import {Page} from "../../util/pagination/Page";
import {PetInfoDto} from "./PetInfo";
import {apiUrl} from "../../util/config";


export async function loadPetsPage(pageNumber: number): Promise<Page<PetInfoDto>>
{
    const petsPageResponse = await fetch(apiUrl + "/pets?page=" + pageNumber);
    if (petsPageResponse.status === 404) return {
        isLast: true,
        content: []
    };

    const petsPageObject = await petsPageResponse.json();
    return {
        isLast: petsPageObject.last,
        content: petsPageObject.content
    };
}
