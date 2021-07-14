import React from "react"
import {useFormContext, useWatch} from 'react-hook-form';
import {RaspberryHQPhotoForm} from './RaspberryHQPhotoForm/component';
import {RaspberryHQVideoForm} from './RaspberryHQVideoForm/component';
import {ImagineSourcePhotoForm} from './ImagineSourcePhotoForm/component';
import {ImagineSourceVideoForm} from './ImagineSourceVideoForm/component';
import Box from '@material-ui/core/Box';
import useStyles from '../../styles';
import {Camera, CapturingMode, ICameraConfig} from '../../../../../shared/types/ICameraConfig';


export function AdditionalCameraFrom(): JSX.Element {

    const {control} = useFormContext<ICameraConfig>();
    const camera: Camera = useWatch({control, name: 'selectedCamera'});
    const capturingMode: CapturingMode = useWatch({control, name: 'capturingMode'});

    const classes = useStyles();

    const getForm = () => {
        if (camera === 'raspberryHQ' && capturingMode === 'photo') {
            return <RaspberryHQPhotoForm/>
        }
        if (camera === 'raspberryHQ' && capturingMode === 'video') {
            return <RaspberryHQVideoForm/>
        }
        if (camera === 'imagingSource' && capturingMode === 'photo') {
            return <ImagineSourcePhotoForm/>
        }
        if (camera === 'imagingSource' && capturingMode === 'video') {
            return <ImagineSourceVideoForm/>
        }
    }

    return <>
        <Box className={classes.additionalFormContainer}>
            {getForm()}
        </Box>
    </>
}
