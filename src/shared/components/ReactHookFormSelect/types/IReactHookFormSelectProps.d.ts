import { Control, Path, PathValue } from 'react-hook-form';
import { FormControlProps } from '@material-ui/core';
export interface IReactHookFormSelectProps<T> extends Omit<FormControlProps, 'defaultValue'> {
    name: Path<T>;
    label?: string;
    disabled?: boolean;
    control: Control<T>;
    defaultValue: PathValue<T, Path<T>>;
}
