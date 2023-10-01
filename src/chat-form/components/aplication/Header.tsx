import { Container, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { setStartChatForm } from "../../slices/formReducer";
import { TimeCounter } from "../others/TimeCounter";

const FORMS_TIME = 300000;

function Header() {
  const dispatch = useAppDispatch();
  const isStarted = useAppSelector<boolean>(
    (state) => state.chatForm.startChatForm
  );
  const OnStartForm = (isStarted: boolean) => {
    dispatch(setStartChatForm({ startChatForm: isStarted }));
  };
  return (
    <Container className="text-center w-100 ">
      <Row className="p-3 align-middle  mw-100 mw-100">
        <small className="align-middle text-center align-items-center">Tiempo restante</small>
        {!isStarted? (
          <h1>05:00</h1>
        ) : (
          <TimeCounter
            OnStartForm={OnStartForm}
            millisecondsTime={FORMS_TIME}
          />
        )}
      </Row>
    </Container>
  );
}
export { Header };

