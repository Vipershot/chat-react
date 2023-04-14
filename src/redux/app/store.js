import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "../features/chatSlice/chat";

chatReducer;

export const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});
