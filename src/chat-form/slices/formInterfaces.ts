export interface ChatFormState {
    startChatForm: boolean;
    nameForm: NameFormState;
    contactForm: ContactFormState;
    birthdayForm: BirthdayFormState;
  }
  
  export interface NameFormState {
    name?: string;
    middleName?: string;
    lastName?: string;
    surname?: string;
  }
  
  export interface BirthdayFormState {
    day: string | null;
    month: string | null;
    year: string;
  }
  
  export interface ContactFormState {
    email: string | null;
    cellPhone: string | null;
  }