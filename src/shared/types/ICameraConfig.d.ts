import { ExposureMode, FlickerMode, SensorMode } from './Camera';
export declare type CapturingMode = 'video' | 'photo';
export declare type Camera = 'raspberryHQ' | 'imagingSource';
export interface ICamera {
    disabled: boolean;
    debugMode: boolean;
    firstPhotoDelayMs: number;
    photoCount: number;
    limitCameraMode: boolean;
    capturingMode: CapturingMode;
    selectedCamera: Camera;
}
interface IRaspberryHQPhotoOptions {
    exposure?: ExposureMode;
    mode?: SensorMode;
    ISO?: number | string;
    shutter?: number | string;
    flicker?: FlickerMode;
}
interface IRaspberryHQVideoOptions {
    framerate?: number;
    profile?: 'baseline';
}
interface IImagingSourcePhotoOptions {
    preset?: string;
}
interface IImagingSourceVideoOptions {
    framerate?: number;
}
export interface ICameraConfig extends Partial<ICamera> {
    raspberryHQPhotoOptions?: IRaspberryHQPhotoOptions;
    raspberryHQVideoOptions?: IRaspberryHQVideoOptions;
    imagingSourcePhotoOptions?: IImagingSourcePhotoOptions;
    imagingSourceVideoOptions?: IImagingSourceVideoOptions;
}
export {};
