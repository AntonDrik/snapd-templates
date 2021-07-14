import React from "react";
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import {IServiceCardProps} from './types/IServiceCardProps';

export function ServiceCard({children, width}: IServiceCardProps): JSX.Element {

    return <>
        <Card style={{width: width ?? 320}}>
            <Box>{children}</Box>
        </Card>

    </>
}
