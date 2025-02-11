import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  currentUser: {
    id: number;
    name: string;
    email: string;
  };
}

const initialState: UserState = {
  currentUser: {
    id: 101,
    name: 'Alice Johnson',
    email: 'alice@example.com',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;