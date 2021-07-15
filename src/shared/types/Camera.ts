export const ExposureModeArray = [
    'default',
    'auto',
    'night',
    'nightpreview',
    'backlight',
    'spotlight',
    'sports',
    'snow',
    'beach',
    'verylong',
    'fixedfps',
    'antishake',
    'fireworks'
] as const;
export type ExposureMode = typeof ExposureModeArray[number];

export const FlickerModeArray = ['default', 'off', 'auto', '50hz', '60hz'] as const;
export type FlickerMode = typeof FlickerModeArray[number];

export const SensorModeArray = [0, 1, 2, 3, 4] as const;
export type SensorMode = typeof SensorModeArray[number];

