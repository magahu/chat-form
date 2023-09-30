import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/esm/Card";
import { FcSurvey } from "react-icons/fc";
import {TfiTimer} from "react-icons/tfi"

function Header() {
  return (
    <Card className="p-0">
      <Card.Header className="m-0 p-4">Titulo formulario</Card.Header>
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
              <Button>Empezar!</Button>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export { Header };
