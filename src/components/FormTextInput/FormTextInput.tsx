import { useField } from 'formik';
import { InputText } from 'primereact/inputtext';
import { ChangeEvent, FC } from 'react';

import { FormTextInputProps } from './types.ts';

export const FormTextInput: FC<FormTextInputProps> = ({
  name,
  className,
  ...props
}) => {
  const [{ value }, { error }, { setValue }] = useField(name);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <InputText
      name={name}
      className={(className || '') + `${error ? 'p-invalid' : ''}`}
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
};
