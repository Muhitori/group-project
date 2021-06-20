import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authService } from '../../services/AuthService';

export const loginAsync = createAsyncThunk(
  'auth/fetchLogin',
  async ({ password, email }) => {
    const { accessToken } = await authService.login({ password, email });
    return { token: accessToken };
  }
);

export const getUserAsync = createAsyncThunk(
  'auth/fetchUser',
  async (token) => {
    const user = await authService.getCurrentUser(token);
    return { user: user[0] };
  }
);

const initialState = {
  token: '',
  currentUser: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuthState: (state) => {
      state = initialState;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.token = action.payload.token;
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.currentUser = { ...action.payload.user };
      });
  },
});

export const { clearAuthState } = authSlice.actions;

export const authReducer = authSlice.reducer;
