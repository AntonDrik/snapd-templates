import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import {IGroupBoxProps} from './types/IGroupBoxProps';

export default function GroupBox({caption, children, ...rest}: IGroupBoxProps): JSX.Element {

    const classes = useStyles();

    return <>
        <Box className={classes.root} {...rest}>
            <Box className={classes.caption}><Typography>{caption}</Typography></Box>
            {children}
        </Box>
    </>
}
