import { FormFieldWrapper, FormTextInput } from 'components';
import { Formik, FormikProps } from 'formik';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { SignUpForm as SignUpFormType } from 'types';

import { signUpValidationSchema } from '../../validationSchema.ts';

export const SignUpForm = () => {
  return (
    <div className="w-fit mx-auto px-10">
      {' '}
      <Formik<SignUpFormType>
        onSubmit={(e) => console.log(e)}
        initialValues={{
          username: '',
          password: '',
          passwordRepeat: '',
          agreement: false,
        }}
        validationSchema={signUpValidationSchema}
      >
        {({
          values,
          handleChange,
          isSubmitting,
          handleSubmit,
        }: FormikProps<SignUpFormType>) => (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <FormFieldWrapper name="username">
              <FormTextInput
                name="username"
                id="username"
                type="text"
                placeholder="Username"
              />
            </FormFieldWrapper>
            <FormFieldWrapper name="password">
              <FormTextInput
                name="password"
                id="password"
                type="password"
                placeholder="Password"
              />
            </FormFieldWrapper>
            <FormFieldWrapper name="passwordRepeat">
              <FormTextInput
                name="passwordRepeat"
                id="passwordRepeat"
                type="password"
                placeholder="Confirm Password"
              />
            </FormFieldWrapper>
            <FormFieldWrapper name="agreement">
              <>
                <Checkbox
                  name="agreement"
                  id="agreement"
                  checked={values.agreement}
                  onChange={handleChange}
                />
                <label htmlFor="agreement" className="mx-2">
                  I agree to everything
                </label>
              </>
            </FormFieldWrapper>
            <div className="w-full flex justify-center my-3">
              <Button type="submit" disabled={isSubmitting} className="w-fit">
                Sign Up
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
