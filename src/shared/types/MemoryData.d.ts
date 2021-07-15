import { IServiceStatus } from './Service';
export interface MemoryData {
    size: number;
    available: number;
    warning?: string;
}
export interface IMemoryServiceData {
    status: IServiceStatus;
    data: MemoryData;
}
