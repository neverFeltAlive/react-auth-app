import { Formik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { SignInForm as SignInFormType } from 'types';

export const SignInForm = () => {
  return (
    <Formik<SignInFormType>
      onSubmit={(e) => console.log(e)}
      initialValues={{
        username: '',
        password: '',
      }}
    >
      <InputText></InputText>
    </Formik>
  );
};
