export const CAMERA = {
    WIDTH: {
        title: 'Picture width',
        text: ' from 800 to 4056'
    },
    HEIGHT: {
        title: 'Picture height',
        text: 'from 600 to 3040'
    },
    QUALITY: {
        title: 'Set JPEG quality from 0 to 100',
        text: 'Quality 100 is almost completely uncompressed. 75 is a good all-round value.'
    },
    BRIGHTNESS: {
        title: 'Sets the brightness of the image',
        text: 'from 0 to 100. 0 is black, 100 is white'
    },
    SHUTTER: {
        title: 'Sets the shutter open time to the specified value (in microseconds). Shutter speed limits are as follows:',
        text: 'Min-Max (microseconds): 600-2000000 (i.e. 0.6ms-2s)'
    },
    SHARPNESS: {
        title: 'Sets the sharpness of the image',
        text: 'from -100 to 100'
    },
    CONTRAST: {
        title: 'Sets the contrast of the image',
        text: 'from -100 to 100'
    },
    SATURATION: {
        title: 'Sets the colour saturation of the image',
        text: 'from -100 to 100'
    },
    ISO: {
        title: 'Sets the ISO to be used for captures',
        text: 'from 100 to 800'
    },
    MODE: {
        title: 'Mode types',
        text: 'MODE: 0 > automatic selection\n' +
            'MODE: 1 > 2028x1080, 169:90, 0.1-50fps\n' +
            'MODE: 2 > 2028x1520, 4:3, 0.1-50fps\n' +
            'MODE: 3 > 4056x3040, 4:3, 0.005-10fps\n' +
            'MODE: 4 > 1012x760, 4:3, 50.1-120fps\n'
    },
    DELAY: {
        FIRST_PHOTO: {
            title: 'Delay in MS before the camera takes first photo'
        },
        BETWEEN_PHOTOS: {
            title: 'Delay in MS'
        }
    }
} as const

export const READER = {}

export const SYSTEM = {
    INTERNET: {
        title: 'Status of the internet connection'
    }
}
