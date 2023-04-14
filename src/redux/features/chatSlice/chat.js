import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    users: [],
    currentMessage: [
      "hola que en que te puedo ayudar",
      "un placer haber podido ser de ayuda",
      "no tengo informacion acerca de eso",
    ],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    setCurrentMessage: (state, action) => {
      state.currentMessage = action.payload;
    },
  },
});

export const { addMessage, addUser, setCurrentMessage } = chatSlice.actions;

export default chatSlice.reducer;
