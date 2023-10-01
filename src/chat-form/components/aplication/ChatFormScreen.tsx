import { Container } from "react-bootstrap";
import { ContactForm } from "../forms/ContactForm";
import { NameForm } from "../forms/NameForm";
import { BirthdayForm } from "../forms/BirthdayForm";
import { Header } from "./Header";
import { FormsHeader } from "../others/FormsHeader";
import { Warning } from "../others/Warning";
import { Footer } from "./Footer";
import { useAppSelector } from "../../core/store/hooks";

const formTitle = "FORMULARIO";

function ChatFormScreen() {
  const isStarted = useAppSelector<boolean>(
    (state) => state.chatForm.startChatForm
  );
  return (
    <Container className="FormsScreen">
      <Header />
      <Container className="FormsContainer">
        { isStarted?
          <Warning/>:<FormsHeader title={formTitle} />
        }
        
        <NameForm />
        <BirthdayForm />
      <ContactForm />
  </Container>
      <Footer/>
    </Container>
  );
}
export { ChatFormScreen };
