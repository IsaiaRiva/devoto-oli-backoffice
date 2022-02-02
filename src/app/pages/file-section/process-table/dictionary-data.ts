
export interface DictionaryData {
    resultCode: number,
    data: {
        importHistoryList: Dictionary[],
        pageSize: number,
        pageNumber: number,
        totalElements: number,
        totalPages: number
    };
}

export type Dictionary = {
    id: number,
    active: boolean,
    status: string,
    errorDescription?: string | null,
    originalFilename: string, // or zipFileName
    backupFilename: string,
    index: string,
    importStartDate: string,
    importEndDate?: string,
};

export const DATA: DictionaryData = {
    resultCode: 1,
    data: {
        importHistoryList: [
            {
                status: "processed",
                originalFilename: "dbNuovoDevotoJunior.zip",
                importStartDate: "10/12/2021 17:43:41",
                importEndDate: "10/12/2021 17:44:19",
                index: "devoto_20211210174340",
                backupFilename: "dbNuovoDevotoJunior_20211210174340.zip",
                active: false,
                errorDescription: null,
                id: 5
            },
            {
                status: "processed",
                originalFilename: "dbNuovoDevotoJunior.zip",
                importStartDate: "10/12/2021 17:35:35",
                importEndDate: "10/12/2021 17:35:43",
                index: "devoto_20211210173535",
                backupFilename: "dbNuovoDevotoJunior_20211210173535.zip",
                active: false,
                errorDescription: null,
                id: 4
            },
            {
                status: "processed",
                originalFilename: "dbNuovoDevotoJunior.zip",
                importStartDate: "10/12/2021 11:05:13",
                importEndDate: "10/12/2021 11:05:38",
                index: "devoto_20211210110513",
                backupFilename: "dbNuovoDevotoJunior_20211210110513.zip",
                active: false,
                errorDescription: null,
                id: 3
            },
            {
                status: "processed",
                originalFilename: "dbNuovoDevotoJunior.zip",
                importStartDate: "09/12/2021 11:56:01",
                importEndDate: "09/12/2021 11:56:17",
                index: "devoto_20211209115601",
                backupFilename: "dbNuovoDevotoJunior_20211209115601.zip",
                active: false,
                errorDescription: null,
                id: 2
            },
            {
                status: "processed",
                originalFilename: "dbNuovoDevotoJunior.zip",
                importStartDate: "09/12/2021 10:35:11",
                importEndDate: "09/12/2021 10:35:31",
                index: "devoto_20211209103511",
                backupFilename: "dbNuovoDevotoJunior_20211209103511.zip",
                active: false,
                errorDescription: null,
                id: 1
            },
        ],
        pageSize: 5,
        pageNumber: 0,
        totalElements: 14,
        totalPages: 3
    }
};

