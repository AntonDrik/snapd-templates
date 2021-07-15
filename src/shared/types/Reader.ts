export enum ReaderControlCommand {
    STOP_READ = '0',
    START_READ = '1',
    CHECK_ALIVE = '2'
}

export enum ReaderMode {
    DETECT_ONLY,
    MAKE_PHOTO
}

export enum ReaderStatusCode {
    NO_ANSWER = '0',
    SUCCESS = '1',
    ERROR = '2',
    ACTIVE = '3',
    INACTIVE = '4',
    NOT_INITIALIZED = '5',
    INIT_SUCCESS_BY = '6',
    INIT_SUCCESS_US = '7'
}

export interface ReaderStatus {
    // specify reader behavior (detect only, detect and make photo)
    mode?: ReaderMode;
    code?: ReaderStatusCode;
    error?: string;
    // specify region (US, BY). Only display info
    region?: string;
}

export const initReaderStatus: ReaderStatus = {
    mode: ReaderMode.MAKE_PHOTO,
    code: ReaderStatusCode.NOT_INITIALIZED
};
