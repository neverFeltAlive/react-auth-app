import { SignInForm } from './types';

const REQUEST_TIMEOUT = 300;

const addTimeout = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function mocSignIn(values: SignInForm) {
  await addTimeout(REQUEST_TIMEOUT);

  const correctPassword = localStorage.getItem(values.username);

  if (!correctPassword) throw new Error('User does not exist');
  if (correctPassword !== values.password)
    throw new Error('Password is incorrect');

  return false;
}
export async function mocSignUp(values: SignInForm) {
  await addTimeout(REQUEST_TIMEOUT);
  localStorage.setItem(values.username, values.password);
  return false;
}
