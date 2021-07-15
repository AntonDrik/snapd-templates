export declare const CAMERA: {
    readonly WIDTH: {
        readonly title: "Picture width";
        readonly text: " from 800 to 4056";
    };
    readonly HEIGHT: {
        readonly title: "Picture height";
        readonly text: "from 600 to 3040";
    };
    readonly QUALITY: {
        readonly title: "Set JPEG quality from 0 to 100";
        readonly text: "Quality 100 is almost completely uncompressed. 75 is a good all-round value.";
    };
    readonly BRIGHTNESS: {
        readonly title: "Sets the brightness of the image";
        readonly text: "from 0 to 100. 0 is black, 100 is white";
    };
    readonly SHUTTER: {
        readonly title: "Sets the shutter open time to the specified value (in microseconds). Shutter speed limits are as follows:";
        readonly text: "Min-Max (microseconds): 600-2000000 (i.e. 0.6ms-2s)";
    };
    readonly SHARPNESS: {
        readonly title: "Sets the sharpness of the image";
        readonly text: "from -100 to 100";
    };
    readonly CONTRAST: {
        readonly title: "Sets the contrast of the image";
        readonly text: "from -100 to 100";
    };
    readonly SATURATION: {
        readonly title: "Sets the colour saturation of the image";
        readonly text: "from -100 to 100";
    };
    readonly ISO: {
        readonly title: "Sets the ISO to be used for captures";
        readonly text: "from 100 to 800";
    };
    readonly MODE: {
        readonly title: "Mode types";
        readonly text: string;
    };
    readonly DELAY: {
        readonly FIRST_PHOTO: {
            readonly title: "Delay in MS before the camera takes first photo";
        };
        readonly BETWEEN_PHOTOS: {
            readonly title: "Delay in MS";
        };
    };
};
export declare const READER: {};
export declare const SYSTEM: {
    INTERNET: {
        title: string;
    };
};
