import {ReactElement} from 'react';
import {IDefaultComponentProps} from '../../../types/IDefaultComponentProps';

export interface ITooltipProps extends IDefaultComponentProps {
    children: ReactElement;
    definition: {
        title?: string;
        text?: string;
        textArray?: string[];
    }
}
