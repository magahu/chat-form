import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../core/store/store";
import { BirthdayFormState, ContactFormState, NameFormState } from "./formInterfaces";
import { initialState } from "./formInitialStates";

export const ChatFormSlice = createSlice({
  name: "CHAT_FORM",
  initialState,
  reducers: {
    setStartChatForm: (
      state,
      action: PayloadAction<{ startChatForm: boolean }>
    ) => {
      const { startChatForm } = action.payload;
      state.startChatForm = startChatForm;
    },
    setNameForm: (
      state,
      action: PayloadAction<NameFormState>
    ) => {
        if(action.payload.name!==undefined) 
        state.nameForm.name = action.payload.name
        if(action.payload.middleName!==undefined) 
        state.nameForm.middleName = action.payload.middleName
        if(action.payload.lastName!==undefined) 
        state.nameForm.lastName = action.payload.lastName
        if(action.payload.surname!==undefined) 
        state.nameForm.surname = action.payload.surname
    },
    setBirthdayDataForm: (
      state,
      action: PayloadAction<BirthdayFormState>
    ) => {
      if(action.payload.day!==undefined)
      state.birthdayForm.day = action.payload.day
      if(action.payload.month!==undefined)
      state.birthdayForm.month = action.payload.month
      if(action.payload.year!==undefined)
      state.birthdayForm.year = action.payload.year
    },
    setContactDataForm: (
      state,
      action: PayloadAction<ContactFormState>
    ) => {
        if(action.payload.email!==undefined)
        state.contactForm.email = action.payload.email
        if(action.payload.cellPhone!==undefined)
        state.contactForm.cellPhone = action.payload.cellPhone
    },
  },
});

export const {
  setStartChatForm,
  setNameForm,
  setBirthdayDataForm,
  setContactDataForm,
} = ChatFormSlice.actions
//checar
//export const selectNameForm = (state: RootState) => state.chatForm

export default ChatFormSlice.reducer
