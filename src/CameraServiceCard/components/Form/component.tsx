import React from "react";
import {Controller, FormProvider} from "react-hook-form";
import Box from '@material-ui/core/Box';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import {CameraFormSubmitBtn} from './components/SubmitBtn/component';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import useStyles from './styles';
import {CameraFormLimitInput} from './components/LimitInput/component';
import {FirstPhotoDelayInput} from './components/PhotoDelayInput/component';
import {AdditionalCameraFrom} from './components/AdditionalForm/component';
import GroupBox from '../../../shared/components/GroupBox/component';
import {Spinner} from '../../../shared/components/Spinner/component';
import ReactHookFormSelect from '../../../shared/components/ReactHookFormSelect/component';
import {ICameraServiceFormProps} from './types/ICameraServiceFormProps';


export default function CameraServiceForm(
    {form, loading, onSubmit}: ICameraServiceFormProps
): JSX.Element {

    const classes = useStyles();

    return <>
        <FormProvider {...form}>
            <GroupBox bgcolor="white" caption="Camera settings">

                <form onSubmit={form.handleSubmit(onSubmit)}>
                    {loading && <Spinner/>}

                    <Box className={classes.selectContainer}>
                        <ReactHookFormSelect
                            className={classes.select}
                            name={'selectedCamera'}
                            control={form.control}
                            defaultValue="raspberryHQ"
                            label="Select Camera"
                        >
                            <MenuItem value="raspberryHQ" key="raspberryHQ">RaspberryHQ</MenuItem>
                            <MenuItem value="imagingSource" key="imagingSource">Imaging Source</MenuItem>
                        </ReactHookFormSelect>
                    </Box>

                    <Controller
                        name={'capturingMode'}
                        control={form.control}
                        render={({field: {value, onChange}}) => (
                            <Box className={classes.btnGroupContainer}>
                                <ButtonGroup color="primary">
                                    <Button
                                        style={{width: 150}}
                                        variant={value === 'photo' ? 'contained' : 'outlined'}
                                        onClick={() => onChange('photo')}
                                    >Photo</Button>
                                    <Button
                                        style={{width: 150}}
                                        variant={value === 'video' ? 'contained' : 'outlined'}
                                        onClick={() => onChange('video')}
                                    >Video</Button>
                                </ButtonGroup>
                                <Box mt={1}><FormLabel component="legend">*Capturing mode</FormLabel></Box>
                            </Box>
                        )}
                    />

                    <FormControlLabel
                        label="Don't save photos"
                        control={
                            <Controller
                                name={'debugMode'}
                                control={form.control}
                                render={({field: {value, onChange}}) => (
                                    <Switch
                                        checked={value}
                                        onChange={onChange}
                                    />
                                )}
                            />
                        }
                    />

                    <CameraFormLimitInput/>
                    <FirstPhotoDelayInput/>

                    <Box mt={4}><AdditionalCameraFrom/></Box>

                    <CameraFormSubmitBtn/>
                </form>

            </GroupBox>
        </FormProvider>
    </>
}
