import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./features/counterSlice";
import todoReducer from "./features/todoSlice";

export const store = configureStore({
  reducer: {
    //     counter: counterReducer,
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
