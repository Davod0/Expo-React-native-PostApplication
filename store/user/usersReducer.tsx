import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { User, mockedUsers } from "../../data";

export type UsersState = {
  list: User[];
  loggedInUser?: User;
};

const initialState: UsersState = {
  list: mockedUsers,
  loggedInUser: mockedUsers[1],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    CreateUser: (state, action: PayloadAction<User>) => {},
  },
});

export const { CreateUser } = usersSlice.actions;
export default usersSlice.reducer;
