import { Container } from "react-bootstrap";
import { ContactForm } from "./forms/ContactForm";
import { NameForm } from "./forms/NameForm";
import { BirthdayForm } from "./forms/BirthdayForm";
function BasicFormContainer() {
  return (
    <Container>
      <NameForm/>
      <BirthdayForm/>
      <ContactForm/>
    </Container>
  );
}
export { BasicFormContainer };
