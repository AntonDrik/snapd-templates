export enum ServiceStatusCode {
    NOT_INITIALIZED,
    INITIALIZED,
    ERROR,
    WARNING
}

export interface IServiceStatus {
    code?: ServiceStatusCode;
    caption?: string;
}

export const initServiceStatus: IServiceStatus = {
    code: ServiceStatusCode.NOT_INITIALIZED,
    caption: 'Not Initialized'
}
