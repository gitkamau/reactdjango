import  { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
    activationStatus: null,
    error: null,
  };

export const activateUserAccount = createAsyncThunk('users/verifyActivation', async ({ uid, token }) => {

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ uid, token });

    const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/activation/`, body, config);
    return response.data; 
});

const activateSlice = createSlice({
  name: 'activate',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(activateUserAccount.fulfilled, (state) => {
        state.activationStatus = 'success';
        state.error = null;
      })
      .addCase(activateUserAccount.rejected, (state, action) => {
        state.activationStatus = null;
        state.error = action.payload; 
      });
  },
});


export default activateSlice.reducer;