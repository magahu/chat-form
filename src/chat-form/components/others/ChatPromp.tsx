import { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";

type ChatPrompProps ={
    message: ReactNode
    icon: ReactNode
}
function ChatPromp ({message, icon}: ChatPrompProps){
    return(<Container>
        <Col>
        <Row>{icon}</Row>
        <Row>{message}</Row>
        </Col>

    </Container>)
}
export {ChatPromp}