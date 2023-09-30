import { Container } from "react-bootstrap";
import { BasicForm as BasicFormModel } from "../models/form";
import { BasicForm } from "./BasicForm";

type formContainerProps = {
  subForms: BasicFormModel[];
};

function BasicFormContainer({ subForms }: formContainerProps) {
  return (
    <Container>
      {subForms.map((form) => {
        return (
          <BasicForm
            formTitle={form.formTitle}
            formAnswer={form.formAnswer}
            formFields={form.formFields}
          />
        );
      })}
    </Container>
  );
}
export { BasicFormContainer };
