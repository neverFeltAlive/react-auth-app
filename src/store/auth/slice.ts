import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from 'types';

const initialState: AuthState = {
  isAuthorized: false,
};

export const SLICE_NAME = 'auth';

export const authSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setIsAuthorized: (
      state,
      { payload }: PayloadAction<AuthState['isAuthorized']>
    ) => {
      state.isAuthorized = payload;
    },
  },
});

export const { setIsAuthorized } = authSlice.actions;
