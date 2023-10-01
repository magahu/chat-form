import { ChatFormState } from "./formInterfaces";

export const nameFormInitialState = {
  name: "",
  middleName: "",
  lastName: "",
  surname: "",
}

export const birthdayFormInitialState = {
  day: "",
  month: "",
  year: "",
}

export const contactFormInitialState = {
  email: "",
  cellPhone: "",
}

export const initialState: ChatFormState = {
  startChatForm: false,
  nameForm: nameFormInitialState,
  birthdayForm: birthdayFormInitialState,
  contactForm: contactFormInitialState
}

