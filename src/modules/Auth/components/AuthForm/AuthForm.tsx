import { FormFieldWrapper, FormTextInput } from 'components';
import { Formik, FormikProps } from 'formik';
import { mocSignIn, mocSignUp } from 'helpers.ts';
import { useAuthentication } from 'hooks/useAuthentication.ts';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { FC, useState } from 'react';
import {
  SignInForm as SignInFormType,
  SignUpForm as SignUpFormType,
} from 'types';

import {
  signInValidationSchema,
  signUpValidationSchema,
} from '../../validationSchema.ts';
import { AuthFormProps } from './types.ts';

export const AuthForm: FC<AuthFormProps> = ({ isSignUp }) => {
  const { authorizeUser } = useAuthentication();
  const [error, setError] = useState('');

  type FormType = typeof isSignUp extends true
    ? SignUpFormType
    : SignInFormType;

  const initialValues = isSignUp
    ? {
        username: '',
        password: '',
        passwordRepeat: '',
        agreement: false,
      }
    : { username: '', password: '' };

  const handleSubmit = async (values: FormType) => {
    if (isSignUp) {
      await mocSignUp(values);
      authorizeUser();
    } else {
      try {
        await mocSignIn(values);
        authorizeUser();
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    }
  };

  return (
    <div className="w-fit mx-auto px-10">
      {' '}
      <Formik<FormType>
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={
          isSignUp ? signUpValidationSchema : signInValidationSchema
        }
      >
        {({
          values,
          handleChange,
          isSubmitting,
          handleSubmit,
        }: FormikProps<FormType>) => (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {error}
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
            {isSignUp && (
              <>
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
                      checked={(values as SignUpFormType).agreement}
                      onChange={handleChange}
                    />
                    <label htmlFor="agreement" className="mx-2">
                      I agree to everything
                    </label>
                  </>
                </FormFieldWrapper>
              </>
            )}
            <div className="w-full flex justify-center my-3">
              <Button type="submit" disabled={isSubmitting} className="w-fit">
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
