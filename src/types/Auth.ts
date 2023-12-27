export interface AuthState {
  isAuthorized: boolean;
}

export interface SignInForm {
  username: string;
  password: string;
}

export interface SignUpForm {
  username: string;
  password: string;
  passwordRepeat: string;
  agreement: boolean;
}
