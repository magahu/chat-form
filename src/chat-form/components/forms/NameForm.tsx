import { Fragment, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { Button, Form } from "react-bootstrap";
import { setNameForm } from "../../slices/formReducer";
import { AnyAction } from "redux";
import { NameFormState } from "../../slices/formInterfaces";
import { ChatPromp } from "../others/ChatPromp";
import {FaUserCheck} from 'react-icons/fa'

function NameForm() {
  const dispatch = useAppDispatch();
  const nameFormInitialState: NameFormState = {
    name: "",
    middleName: "",
    lastName: "",
    surname: "",
  };
  const [nameFormState, setNameFormState] = useState(nameFormInitialState);
  const nameFormReduxState = useAppSelector((state) => state.chatForm.nameForm);

  const handleInputOnChange = (event: AnyAction) => {
    console.log(event.target.value);
    // eslint-disable-next-line no-debugger
    debugger;
    setNameFormState({
      ...nameFormState,
      [event.target.name]: event.target.value,
    });
  };
  const OnSaveForm = () => {
    const filteredNameForm: NameFormState = {
      name: nameFormState.name != null ? nameFormState.name : "",
      middleName:
        nameFormState.middleName != null ? nameFormState.middleName : "",
      lastName: nameFormState.lastName != null ? nameFormState.lastName : "",
      surname: nameFormState.surname != null ? nameFormState.surname : "",
    };
    dispatch(setNameForm(filteredNameForm));
  };
  const messageComponent = <Fragment>
   {nameFormReduxState.name? <h2>Hola {nameFormReduxState.name}!</h2> : <h2>Por favor ingresa tu nombre</h2>}
    <h2>El nombre que has guardado:</h2>
    <h2>{nameFormReduxState.name? nameFormReduxState.name : ''}  {nameFormReduxState.middleName? nameFormReduxState.middleName : ''} {nameFormReduxState.lastName? nameFormReduxState.lastName : ''} {nameFormReduxState.surname? nameFormReduxState.surname : ''}</h2>
</Fragment>
    
  
  return (
    <Fragment>
      <Form>
        <Form.Group>
          <Form.Label>Cuál es tu nombre?</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={handleInputOnChange}
          />
          <Form.Control
            type="text"
            name="middleName"
            placeholder="Segundo Nombre"
            onChange={handleInputOnChange}
          />
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Apellido paterno"
            onChange={handleInputOnChange}
          />
          <Form.Control
            type="text"
            name="surname"
            placeholder="Apellido materno"
            onChange={handleInputOnChange}
          />
        </Form.Group>
        <Button onClick={OnSaveForm}>Guardar</Button>
      </Form>
      <h6>estado: {nameFormState.name}</h6>
      <h6>estado REDUX: {nameFormReduxState.name}</h6>
      {nameFormReduxState.name != "" ||
      nameFormReduxState.middleName != "" || 
      nameFormReduxState.lastName != "" ||
      nameFormReduxState.surname != ""? (
        <ChatPromp
          message={messageComponent}
          icon={<FaUserCheck />}
        />
      ) : (
        ""
      )}
    </Fragment>
  );
}
export { NameForm };
