import { ReactNode } from 'react';
import { IServiceStatus } from '../../../../../types/Service';
export interface IServiceCardHeaderProps {
    title: string;
    status?: IServiceStatus;
    reloadBtn: ReactNode;
}
