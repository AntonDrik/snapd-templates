import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from '@material-ui/core/FormControl';
import {Controller} from "react-hook-form";
import React from "react";
import {IReactHookFormSelectProps} from './types/IReactHookFormSelectProps';

export default function ReactHookFormSelect<T>(
    {
        name,
        label = null,
        control,
        defaultValue,
        children,
        ...props
    }: IReactHookFormSelectProps<T>
): JSX.Element {
    const labelId = `${name}-label`;
    return (
        <FormControl {...props}>
            {label ? <InputLabel id={labelId}>{label}</InputLabel> : null}
            <Controller
                name={name}
                control={control}
                render={({field: {value, onChange}}) => (
                    <Select
                        labelId={labelId}
                        label={label}
                        onChange={onChange}
                        value={value ?? defaultValue}
                    >
                        {children}
                    </Select>
                )}
            />
        </FormControl>
    );
}

