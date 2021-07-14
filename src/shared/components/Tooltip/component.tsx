import React from "react";
import {Tooltip, Typography} from '@material-ui/core';
import {ITooltipProps} from './types/ITooltipProps';

export default function CustomTooltip(
    {
        children,
        definition
    }: ITooltipProps
): JSX.Element {

    return <>
        <Tooltip
            title={
                <React.Fragment>
                    <Typography color="inherit">{definition.title}</Typography>
                    <span style={{ whiteSpace: 'pre-line' }}>{definition.text}</span>
                </React.Fragment>
            }
        >
            {children}
        </Tooltip>
    </>
}
