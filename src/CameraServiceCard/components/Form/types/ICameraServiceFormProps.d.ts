import { UseFormReturn } from 'react-hook-form';
import { ICameraConfig } from '../../../../shared/types/ICameraConfig';
export interface ICameraServiceFormProps {
    form: UseFormReturn<ICameraConfig>;
    loading: boolean;
    onSubmit: (data: ICameraConfig) => void;
}
