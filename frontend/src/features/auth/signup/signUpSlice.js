import  { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
    loading:false,
    isAuthenticated:false,
    user:{
        first_name:null,
        last_name:null,
        email:null,
        password:null,
        re_password:null,
    },
    error:''
}

//Create Async Thunk generates pending, fulfilled and reected action types
export const signUpUser = createAsyncThunk('users/createUser', 
  async ({ first_name, last_name, email, password, re_password }) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({ first_name, last_name, email, password, re_password });

    const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/`, body, config);
    return response.data;
  }
);

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUpUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload; // Update user object
      state.error = '';
      state.isAuthenticated=false
    });
    builder.addCase(signUpUser.rejected, (state, action) => {
      state.loading = false;
      state.user = initialState.user;
      state.error = action.error.message;
      state.isAuthenticated=false
    });
  },
});

export default signUpSlice.reducer;