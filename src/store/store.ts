import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { authSlice } from './auth';

const appReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

export const store = configureStore({
  reducer: appReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof appReducer>;
