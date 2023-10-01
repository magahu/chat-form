import { Button, Row } from "react-bootstrap";
import Card from "react-bootstrap/esm/Card";
import { FcSurvey } from "react-icons/fc";
import {TfiTimer} from "react-icons/tfi"
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { setStartChatForm } from "../../slices/formReducer";

type HeaderProps = {
  title: string
}

function FormsHeader({title}: HeaderProps) {
  const dispatch = useAppDispatch()
  const isStarted = useAppSelector<boolean>((state) => state.chatForm.startChatForm)
  
  const OnStartForm = (isStarted: boolean) => {
    dispatch(setStartChatForm({ startChatForm: isStarted }));
  }

  return (
    <Card className="mt-4 mb-4 w-100">
      <Card.Header className="m-0 p-2 text-center"><b>{title}</b></Card.Header>
      <Card.Body className="m-0 p-2">
        <Row className="row">
          <div className="col-2">
            <FcSurvey size="80" />
          </div>
          <div className="col">
          
                <Button type="button" className="btn btn-light text-center w-100 mb-2">
                    <TfiTimer/>
                    <small className="m-2">Tienes 5 minutos una vez que empieces!</small>
                </Button>
          
              <Button onClick={()=>OnStartForm(true)} className="btn-lg text-center w-100" disabled={isStarted}>Empezar!</Button>
         
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
}

export { FormsHeader };


