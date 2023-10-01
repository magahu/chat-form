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
      <p>Los datos de contacto que has ingresado son los siguientes:</p>
      {contactFormReduxState.email ? (
        <p>Email: <b>{contactFormReduxState.email}</b></p>
      ) : (
        ""
      )}
      {contactFormReduxState.cellPhone ? (
        <p>Teléfono celular: <b>{contactFormReduxState.cellPhone}</b></p>
      ) : (
        ""
      )}
    </Fragment>
  );

  return (
    <Fragment>
      <Form>
        <Form.Group>
          <Form.Label><b>Datos de contacto</b></Form.Label>
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
        <Button className="w-100 btn btn-lg mt-4 mb-4" onClick={OnSaveForm}>Guardar</Button>
      </Form>

      {contactFormReduxState.email != "" ||
      contactFormReduxState.cellPhone != "" ? (
        <ChatPromp
          message={messageComponent}
          icon={<LuContact size='20'/>}
        />
      ) : (
        ""
      )}
    </Fragment>
  );
}
export { ContactForm };
