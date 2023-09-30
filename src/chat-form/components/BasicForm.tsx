// import { useState } from "react";
import { Fragment } from "react";
import {  Form, Button } from "react-bootstrap";
import { BasicForm as BasicFormModel} from "../models/form";


function BasicForm({ formTitle, formFields, formAnswer }: BasicFormModel) {
  // const [userFormInput, setUserFormInput] = useState();
  /*const AnswerToUser = () => {

  }*/
  return (
    <Fragment>
    <Form>
      <Form.Group>
        <Form.Label>{formTitle}</Form.Label>
        {formFields.map((field) => {
          return (
            <Form.Control type="text" placeholder={field}/>
          );
        })}
      </Form.Group>
      <Button>Guardar</Button>
    </Form>
    <h6>
        {formAnswer}
    </h6>
    </Fragment>
  );
}
export { BasicForm };
