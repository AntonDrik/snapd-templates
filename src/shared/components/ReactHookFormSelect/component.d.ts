/// <reference types="react" />
import { IReactHookFormSelectProps } from './types/IReactHookFormSelectProps';
export default function ReactHookFormSelect<T>({ name, label, control, defaultValue, children, ...props }: IReactHookFormSelectProps<T>): JSX.Element;
