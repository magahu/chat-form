import { Fragment, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { Button, Form } from "react-bootstrap";
import { setContactDataForm } from "../../slices/formReducer";
import { AnyAction } from "redux";
import { ContactFormState } from "../../slices/formInterfaces";
import { contactFormInitialState } from "../../slices/formInitialStates";
import { ChatPromp } from "../others/ChatPromp";
import { LuContact } from "react-icons/lu";

function ContactForm() {
  const dispatch = useAppDispatch();
  const [contactFormState, setContactFormState] = useState(
    contactFormInitialState
  );
  const contactFormReduxState = useAppSelector(
    (state) => state.chatForm.contactForm
  );

  const handleInputOnChange = (event: AnyAction) => {
    console.log(event.target.value);
    // eslint-disable-next-line no-debugger
    debugger;
    setContactFormState({
      ...contactFormState,
      [event.target.name]: event.target.value,
    });
  };
  const OnSaveForm = () => {
    const filteredContactForm: ContactFormState = {
      email: contactFormState.email ? contactFormState.email : "",
      cellPhone: contactFormState.cellPhone ? contactFormState.cellPhone : "",
    };
    dispatch(setContactDataForm(filteredContactForm));
  };

  const messageComponent = (
    <Fragment>
      <h2>Los datos de contacto que has ingresado son los siguientes:</h2>
      {contactFormReduxState.email ? (
        <h2>Email: {contactFormReduxState.email}</h2>
      ) : (
        ""
      )}
      {contactFormReduxState.cellPhone ? (
        <h2>Teléfono celular: {contactFormReduxState.cellPhone}</h2>
      ) : (
        ""
      )}
    </Fragment>
  );

  return (
    <Fragment>
      <Form>
        <Form.Group>
          <Form.Label>Datos de contacto</Form.Label>
          <Form.Control
            type="text"
            name="email"
            placeholder="Correo"
            onChange={handleInputOnChange}
          />
          <Form.Control
            type="text"
            name="cellPhone"
            placeholder="Celular"
            onChange={handleInputOnChange}
          />
        </Form.Group>
        <Button onClick={OnSaveForm}>Guardar</Button>
      </Form>

      {contactFormReduxState.email != "" ||
      contactFormReduxState.cellPhone != "" ? (
        <ChatPromp
          message={messageComponent}
          icon={<LuContact />}
        />
      ) : (
        ""
      )}
    </Fragment>
  );
}
export { ContactForm };
