import React, {useMemo} from "react";
import {Controller, useFormContext, useWatch} from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import {isDefined} from 'class-validator';
import {ICameraConfig} from '../../../../../shared/types/ICameraConfig';
import CustomTooltip from '../../../../../shared/components/Tooltip/component';
import {CAMERA as CameraOptionsDefinition} from '../../../../../shared/OptionsDefinitions';

export function FirstPhotoDelayInput(): JSX.Element {

    const {control} = useFormContext<ICameraConfig>();
    const capturingMode = useWatch({control, name: 'capturingMode'});

    return <>
        <Controller
            name={'firstPhotoDelayMs'}
            control={control}
            rules={{
                min: {value: 0, message: 'Should be >= 0 and <= 10000'},
                max: {value: 10000, message: 'Should be >= 0 and <= 10000'}
            }}
            render={({field: {value, onChange}, fieldState: {error}}) => (
                <CustomTooltip definition={CameraOptionsDefinition.DELAY.FIRST_PHOTO}>
                    <TextField
                        style={{width: 150}}
                        disabled={capturingMode === 'video'}
                        value={value ?? ''}
                        onChange={onChange}
                        type="number"
                        label="First photo delay ms"
                        error={isDefined(error)}
                        helperText={error?.message}/>
                </CustomTooltip>
            )}
        />
    </>
}
