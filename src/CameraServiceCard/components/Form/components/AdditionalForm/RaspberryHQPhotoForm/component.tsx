import React from "react";
import {Controller, useFormContext} from 'react-hook-form';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import {isDefined} from 'class-validator';
import Box from '@material-ui/core/Box';
import useStyles from '../../../styles';
import {ICameraConfig} from '../../../../../../shared/types/ICameraConfig';
import ReactHookFormSelect from '../../../../../../shared/components/ReactHookFormSelect/component';
import {ExposureModeArray, FlickerModeArray, SensorModeArray} from '../../../../../../shared/types/Camera';
import CustomTooltip from '../../../../../../shared/components/Tooltip/component';
import {CAMERA as CameraOptionsDefinition} from '../../../../../../shared/OptionsDefinitions';

const sensorModeCaption = [
    'automatic selection',
    '2028x1080, 169:90',
    '2028x1520, 4:3',
    '4056x3040, 4:3',
    '1012x760, 4:3'
];

export function RaspberryHQPhotoForm(): JSX.Element {

    const {control} = useFormContext<ICameraConfig>();

    const classes = useStyles();

    return <>

        <Box className={classes.input}>
            <ReactHookFormSelect
                fullWidth
                name={'raspberryHQPhotoOptions.exposure'}
                label="Exposure"
                control={control}
                defaultValue="default"
            >
                {
                    ExposureModeArray.map((mode) => {
                        return <MenuItem key={mode} value={mode}>{mode}</MenuItem>
                    })
                }
            </ReactHookFormSelect>
        </Box>

        <Box className={classes.input}>
            <ReactHookFormSelect
                fullWidth
                disabled={true}
                name={'raspberryHQPhotoOptions.mode'}
                label="SensorMode"
                control={control}
                defaultValue="3"
            >
                {
                    SensorModeArray.map((mode) => {
                        return <MenuItem key={mode} value={mode}>{sensorModeCaption[mode]}</MenuItem>
                    })
                }
            </ReactHookFormSelect>
        </Box>

        <Box className={classes.input}>
            <Controller
                name={'raspberryHQPhotoOptions.ISO'}
                control={control}
                rules={{
                    min: {value: 100, message: 'Should be >= 100 and <= 800'},
                    max: {value: 800, message: 'Should be >= 100 and <= 800'}
                }}
                render={({field: {value, onChange}, fieldState: {error}}) => (
                    <CustomTooltip definition={CameraOptionsDefinition.ISO}>
                        <TextField
                            value={value ?? ''}
                            onChange={onChange}
                            fullWidth
                            type="number"
                            label="ISO"
                            InputLabelProps={{shrink: true}}
                            error={isDefined(error)}
                            helperText={error?.message}/>
                    </CustomTooltip>
                )}
            />
        </Box>

        <Box className={classes.input}>
            <ReactHookFormSelect
                fullWidth
                name={'raspberryHQPhotoOptions.flicker'}
                label="Flicker"
                control={control}
                defaultValue="off"
            >
                {
                    FlickerModeArray.map((mode) => {
                        return <MenuItem key={mode} value={mode}>{mode}</MenuItem>
                    })
                }
            </ReactHookFormSelect>
        </Box>

        <Box className={classes.input}>
            <Controller
                name={'raspberryHQPhotoOptions.shutter'}
                control={control}
                rules={{
                    min: {value: 600, message: 'Should be >= 600 and <= 2000000'},
                    max: {value: 2000000, message: 'Should be >= 600 and <= 2000000'}
                }}
                render={({field: {value, onChange}, fieldState: {error}}) => (
                    <CustomTooltip definition={CameraOptionsDefinition.SHUTTER}>
                        <TextField
                            value={value ?? ''}
                            onChange={onChange}
                            fullWidth
                            type="number"
                            label="Shutter"
                            InputLabelProps={{shrink: true}}
                            error={isDefined(error)}
                            helperText={error?.message}/>
                    </CustomTooltip>
                )}
            />
        </Box>
    </>
}
