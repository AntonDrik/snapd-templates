import { IServiceStatus } from './Service';
export declare enum AmazonControlCommand {
    CLEAR_QUEUE = "1"
}
export declare enum AmazonStatusCode {
    SUCCESS = "0",
    ERROR = "1",
    UPLOADING = "2",
    WAITING_FOR_UPLOAD = "3",
    NO_ANSWER = "4"
}
export interface AmazonStatus {
    code: AmazonStatusCode;
    caption?: string;
}
export interface IAmazonQueueItem extends AmazonStatus {
    photoName: string;
    photoDate: string;
}
export interface IAmazonQueue {
    queueCount: string;
    queueList: IAmazonQueueItem[];
}
export interface IAmazonServiceData {
    status: IServiceStatus;
    data: IAmazonQueue;
}
export interface AmazonRequestData {
    photoName: string;
    tags: string[];
    formattedDate: string;
    unitName: string;
}
