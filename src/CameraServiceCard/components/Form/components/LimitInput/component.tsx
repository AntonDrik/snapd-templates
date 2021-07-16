import React, {useMemo} from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Controller, useFormContext, useWatch} from 'react-hook-form';
import Box from '@material-ui/core/Box';
import Switch from '@material-ui/core/Switch';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {ICameraConfig} from '../../../../../shared/types/ICameraConfig';


export function CameraFormLimitInput(): JSX.Element {

    const {control} = useFormContext<ICameraConfig>();
    const capturingMode = useWatch({control, name: 'capturingMode'});
    const limitCameraMode = useWatch({control, name: 'limitCameraMode'});

    const disabled = useMemo(() => {
        return capturingMode === 'video'
    }, [capturingMode]);

    return <>
        <Box display="flex" flexDirection="row">

            <FormControlLabel
                label="Limit Photoshooting"
                control={
                    <Controller
                        name={'limitCameraMode'}
                        control={control}
                        render={({field: {value, onChange}}) => (
                            <Switch disabled={disabled} checked={value} onChange={onChange}/>
                        )}
                    />
                }
            />

            <Controller
                name={'photoCount'}
                control={control}
                defaultValue={1}
                render={({field: {value, onChange}}) => (
                    <Select
                        value={value}
                        onChange={onChange}
                        disabled={!limitCameraMode || disabled}
                    >
                        {
                            Array.from({length: 10}).map((item, index) => {
                                return <MenuItem key={index + 1} value={index + 1}>{index + 1}</MenuItem>
                            })
                        }
                    </Select>
                )}
            />

        </Box>
    </>
}
