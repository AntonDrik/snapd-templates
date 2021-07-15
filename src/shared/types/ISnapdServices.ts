import {IServiceStatus} from './Service';
import {ReaderStatus} from './Reader';
import {IMemoryServiceData} from './MemoryData';
import {IAmazonServiceData} from './Amazon';

export interface ISnapdServices {
    camera: IServiceStatus,
    mqtt: IServiceStatus,
    memory: IServiceStatus,
    amazon: IServiceStatus,
    reader: ReaderStatus,
}

export interface ISnapdServicesData {
    mqtt: IServiceStatus,
    camera: IServiceStatus,
    reader: ReaderStatus,
    memory: IMemoryServiceData,
    amazon: IAmazonServiceData,
    // temperatureSensor: ISensorServiceData
}
