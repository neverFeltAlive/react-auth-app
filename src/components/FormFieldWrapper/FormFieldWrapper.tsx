import { useField } from 'formik';

export const FormFieldWrapper = ({ children, name }) => {
  const [, { error }] = useField(name);
  name === 'agreement' && console.log(error);
  return (
    <div className="my-2 relative">
      {children}
      {error && (
        <small className="absolute bottom-0 left-0 translate-y-[calc(100%+5px)] text-red">
          {error}
        </small>
      )}
    </div>
  );
};
