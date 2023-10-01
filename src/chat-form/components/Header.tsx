import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/esm/Card";
import { FcSurvey } from "react-icons/fc";
import {TfiTimer} from "react-icons/tfi"
import { useAppDispatch, useAppSelector } from "../core/store/hooks";
import { setStartChatForm } from "../slices/formReducer";
import Countdown, { zeroPad } from "react-countdown";

type HeaderProps = {
  title: string
}

function Header({title}: HeaderProps) {
  const dispatch = useAppDispatch()
  const isStarted = useAppSelector<boolean>((state) => state.chatForm.startChatForm)
  
  type RendererProps = {
    hours: number
    minutes: number
    seconds: number
    completed: boolean
  }
  const OnStartForm = (isStarted: boolean) => {
    dispatch(setStartChatForm({ startChatForm: isStarted }));

    // eslint-disable-next-line no-debugger
    debugger
     
  }
  const renderer = ({ minutes, seconds, completed }: RendererProps) => {
    if (completed) {
      OnStartForm(false)
    } else {
      return <strong>{zeroPad(minutes)}:{zeroPad(seconds)}</strong>
    }
  };

  return (
    <Card className="p-0">
      <Card.Header className="m-0 p-4">{title}</Card.Header>
      <Card.Body className="m-0 p-4">
        <Row className="row justify-content-center">
          <Col>
            <FcSurvey size="100%" />
          </Col>
          <Col className="row justify-content-around">
            <Row >
                <Button type="button" className="btn btn-light text-center ">
                    <TfiTimer/>
                    <small className="m-2">Tienes 5 minutos una vez que empieces!</small>
                </Button>
            </Row>
            <Row>
              {!isStarted ? <Button onClick={()=>OnStartForm(true)}>Empezar!</Button> : <Countdown date={Date.now() + 10000} renderer={renderer} />}
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export { Header };
