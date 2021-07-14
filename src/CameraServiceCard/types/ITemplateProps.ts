import {IServiceStatus} from '../../shared/types/Service';
import {UseFormReturn} from 'react-hook-form';
import {ICameraConfig} from '../../shared/types/ICameraConfig';

export interface ICameraServiceCardTemplateProps {
    loading: boolean;
    serviceStatus: IServiceStatus;
    onReloadBtn: () => void;
    onSubmitForm: (data: ICameraConfig) => void;
    form: UseFormReturn<ICameraConfig>
}
