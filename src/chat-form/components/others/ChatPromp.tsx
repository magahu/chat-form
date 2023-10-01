import { ReactNode } from "react";
import { Container } from "react-bootstrap";
import img from "../../../assets/call-center-agent.png";

type ChatPrompProps = {
  message: ReactNode;
  icon: ReactNode;
};
function ChatPromp({ message, icon }: ChatPrompProps) {
  return (
    <Container className="w-100 row mt-2 mb-4 p-0">
      <Container className="col-2 align-self-center justify-content-center">
        <img src={img} className="callCenterImg mx-auto d-block" />
      </Container>
      <Container className="col-10 chatMessagge m-0">
        <Container className="row w-100">
          <Container className="col-11 pt-2 pb-2">{message}</Container>
          <Container className="col-1  align-self-center justify-content-center">{icon}</Container>
        </Container>
      </Container>
    </Container>
  );
}
export { ChatPromp };
