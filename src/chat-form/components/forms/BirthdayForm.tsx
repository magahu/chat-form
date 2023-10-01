import { Fragment, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { Button, Form } from "react-bootstrap";
import { birthdayFormInitialState } from "../../slices/formInitialStates";
import { BirthdayFormState } from "../../slices/formInterfaces";
import { AnyAction } from "redux";
import { setBirthdayDataForm } from "../../slices/formReducer";
import { ChatPromp } from "../others/ChatPromp";
import {FaBirthdayCake} from "react-icons/fa"

function BirthdayForm() {
  const dispatch = useAppDispatch();
  const [birthdayFormState, setBirthdayFormState] = useState(birthdayFormInitialState);
  const birthdayFormReduxState = useAppSelector((state) => state.chatForm.birthdayForm);

  const handleInputOnChange = (event: AnyAction) => {
    setBirthdayFormState({ ...birthdayFormState, [event.target.name]: event.target.value });
  };
  const OnSaveForm = () => {
    const filteredBirthdayForm: BirthdayFormState = {
      day: birthdayFormState.day ? birthdayFormState.day : '',
      month: birthdayFormState.month ? birthdayFormState.month: '',
      year: birthdayFormInitialState.year ? birthdayFormState.year: ''
    };
    dispatch(setBirthdayDataForm(filteredBirthdayForm))
  };
  const messageComponent = <Fragment>
    <h2>Guardamos tu fecha de nacimiento!</h2>
    {birthdayFormReduxState.day ? <h2>Día: {birthdayFormReduxState.day}</h2>: ''} 
    {birthdayFormReduxState.month ? <h2>Mes: {birthdayFormReduxState.month}</h2>: ''}
    {birthdayFormReduxState.year ? <h2>Año: {birthdayFormReduxState.year}</h2>:''}
  </Fragment>
  return (
    <Fragment>
      <Form>
        <Form.Group>
          <Form.Label>¿Cual es tu fecha de nacimiento?</Form.Label>
          <Form.Control
            type="text"
            name="day"
            placeholder="Día"
            onChange={handleInputOnChange}
          />
          <Form.Control
            type="text"
            name="month"
            placeholder="Mes"
            onChange={handleInputOnChange}
          />
          <Form.Control
            type="text"
            name="year"
            placeholder="Año"
            onChange={handleInputOnChange}
          />
        </Form.Group>
        <Button onClick={OnSaveForm}>Guardar</Button>
      </Form>
      {birthdayFormReduxState.day != "" ||
      birthdayFormReduxState.month != "" ||
      birthdayFormReduxState.year? (
        <ChatPromp
          message={messageComponent}
          icon={<FaBirthdayCake />}
        />
      ) : (
        ""
      )}
    </Fragment>
  );
}
export { BirthdayForm };
