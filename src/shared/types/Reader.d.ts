export declare enum ReaderControlCommand {
    STOP_READ = "0",
    START_READ = "1",
    CHECK_ALIVE = "2"
}
export declare enum ReaderMode {
    DETECT_ONLY = 0,
    MAKE_PHOTO = 1
}
export declare enum ReaderStatusCode {
    NO_ANSWER = "0",
    SUCCESS = "1",
    ERROR = "2",
    ACTIVE = "3",
    INACTIVE = "4",
    NOT_INITIALIZED = "5",
    INIT_SUCCESS_BY = "6",
    INIT_SUCCESS_US = "7"
}
export interface ReaderStatus {
    mode?: ReaderMode;
    code?: ReaderStatusCode;
    error?: string;
    region?: string;
}
export declare const initReaderStatus: ReaderStatus;
