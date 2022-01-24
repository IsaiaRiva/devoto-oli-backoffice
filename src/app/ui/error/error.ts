export type ErrMsg = {
    resultCode: 0;
    errorManagement: {
        errorCode: string,
        errorDescription: string
    };
} | string;
