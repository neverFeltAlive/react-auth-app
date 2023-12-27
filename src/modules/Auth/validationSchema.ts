import { yup } from 'configs';

export const signUpValidationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  passwordRepeat: yup
    .string()
    .required()
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value;
    }),
  agreement: yup.boolean().oneOf([true], 'You must agree to continue'),
});

export const signInValidationSchema = signUpValidationSchema.pick([
  'username',
  'password',
]);
