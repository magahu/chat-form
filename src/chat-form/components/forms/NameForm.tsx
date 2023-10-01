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
   {nameFormReduxState.name? <p>Hola {nameFormReduxState.name}!</p> : <p>Por favor ingresa tu nombre</p>}
    <p>El contacto que has guardado: <b>{nameFormReduxState.name? nameFormReduxState.name : ''}  {nameFormReduxState.middleName? nameFormReduxState.middleName : ''} {nameFormReduxState.lastName? nameFormReduxState.lastName : ''} {nameFormReduxState.surname? nameFormReduxState.surname : ''}</b></p>
    
</Fragment>
    
  
  return (
    <Fragment>
      <Form>
        <Form.Group>
          <Form.Label><b>Cuál es tu nombre?</b></Form.Label>
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
        <Button onClick={OnSaveForm} className="w-100 btn btn-lg mt-4 mb-4">Guardar</Button>
      </Form>
      {nameFormReduxState.name != "" ||
      nameFormReduxState.middleName != "" || 
      nameFormReduxState.lastName != "" ||
      nameFormReduxState.surname != ""? (
        <ChatPromp
          message={messageComponent}
          icon={<FaUserCheck size='20'/>}
        />
      ) : (
        ""
      )}
    </Fragment>
  );
}
export { NameForm };
