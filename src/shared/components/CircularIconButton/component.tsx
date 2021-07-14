import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';
import IconButton from '@material-ui/core/IconButton';
import {ICircularIconButtonProps} from './types/ICircularIconButtonProps';

export function CircularIconButton(
    {
        loading,
        children,
        spinnerSize,
        ...rest
    }: ICircularIconButtonProps
): JSX.Element {

    const classes = useStyles();

    return <>
        <IconButton {...rest}>
            {children}
            {loading && <CircularProgress size={spinnerSize ?? 24} className={classes.circular}/>}
        </IconButton>
    </>
}
