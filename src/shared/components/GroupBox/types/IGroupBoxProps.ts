import {BoxProps} from '@material-ui/core';
import {ReactNode} from 'react';

export interface IGroupBoxProps extends BoxProps {
    caption: string;
    children: ReactNode;
}
