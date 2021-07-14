import React from "react";
import {Controller, useFormContext} from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import {isDefined} from 'class-validator';
import Box from '@material-ui/core/Box';
import useStyles from '../../../styles';
import {ICameraConfig} from '../../../../../../shared/types/ICameraConfig';

export function RaspberryHQVideoForm(): JSX.Element {

    const {control} = useFormContext<ICameraConfig>();

    const classes = useStyles();

    return <>

        <Box className={classes.input}>
            <Controller
                name={'raspberryHQVideoOptions.framerate'}
                control={control}
                rules={{
                    min: {value: 5, message: 'Should be >= 5 and <= 60'},
                    max: {value: 60, message: 'Should be >= 5 and <= 60'}
                }}
                render={({field: {value, onChange}, fieldState: {error}}) => (
                    <TextField
                        value={value ?? ''}
                        onChange={onChange}
                        fullWidth
                        type="number"
                        label="Framerate"
                        InputLabelProps={{shrink: true}}
                        error={isDefined(error)}
                        helperText={error?.message}
                    />
                )}
            />
        </Box>

        <Box className={classes.input}>
            <Controller
                name={'raspberryHQVideoOptions.profile'}
                control={control}
                render={({field: {value, onChange}, fieldState: {error}}) => (
                    <TextField
                        value={value ?? ''}
                        onChange={onChange}
                        fullWidth
                        label="Profile"
                        InputLabelProps={{shrink: true}}
                        error={isDefined(error)}
                        helperText={error?.message}
                    />
                )}
            />
        </Box>
    </>
}
