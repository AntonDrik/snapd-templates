import {IconButtonProps} from '@material-ui/core';
import {IDefaultComponentProps} from '../../../types/IDefaultComponentProps';

export interface ICircularIconButtonProps extends IDefaultComponentProps, IconButtonProps {
    loading: boolean;
    spinnerSize?: number;
}
