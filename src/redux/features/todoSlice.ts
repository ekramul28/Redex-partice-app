import { createSlice } from "@reduxjs/toolkit";

export interface todoState {
  value: number;
}

const initialState: todoState = {
  value: 0,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export default todoSlice.reducer;
