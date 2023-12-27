import { InputTextProps } from 'primereact/inputtext';

export interface FormTextInputProps
  extends Omit<InputTextProps, 'value' | 'onChange'> {
  name: string;
}
