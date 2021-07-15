export declare enum ServiceStatusCode {
    NOT_INITIALIZED = 0,
    INITIALIZED = 1,
    ERROR = 2,
    WARNING = 3
}
export interface IServiceStatus {
    code?: ServiceStatusCode;
    caption?: string;
}
export declare const initServiceStatus: IServiceStatus;
