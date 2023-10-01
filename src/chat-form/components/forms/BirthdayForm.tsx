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
    <p>Guardamos tu fecha de nacimiento!</p>
    {birthdayFormReduxState.day ? <p>Día: <b>{birthdayFormReduxState.day}</b></p>: ''} 
    {birthdayFormReduxState.month ? <p>Mes: <b>{birthdayFormReduxState.month}</b></p>: ''}
    {birthdayFormReduxState.year ? <p>Año: <b>{birthdayFormReduxState.year}</b></p>:''}
  </Fragment>
  return (
    <Fragment>
      <Form>
        <Form.Group>
          <Form.Label ><b>¿Cual es tu fecha de nacimiento?</b></Form.Label>
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
        <Button onClick={OnSaveForm} className="w-100 btn btn-lg mt-4 mb-4">Guardar</Button>
      </Form>
      {birthdayFormReduxState.day != "" ||
      birthdayFormReduxState.month != "" ||
      birthdayFormReduxState.year? (
        <ChatPromp
          message={messageComponent}
          icon={<FaBirthdayCake size='20'/>}
        />
      ) : (
        ""
      )}
    </Fragment>
  );
}
export { BirthdayForm };
