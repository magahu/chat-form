import { Container } from "react-bootstrap";
import Countdown, { zeroPad } from "react-countdown";

type TimeCounterProps = {
  OnStartForm: (start: boolean) => void;
  millisecondsTime: number;
};

type RendererProps = {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
};

function TimeCounter({ OnStartForm, millisecondsTime }: TimeCounterProps) {
  const renderer = ({ minutes, seconds, completed }: RendererProps) => {
    if (completed) {
      OnStartForm(false);
    } else {
      return (
        <Container className="align-middle  mw-100 mw-100">
        <h1 className="align-middle  mw-100 mw-100">
          {zeroPad(minutes)}:{zeroPad(seconds)}
        </h1>
        </Container>
      );
    }
  };
  return <Countdown date={Date.now() + millisecondsTime} renderer={renderer}/>;
}
export { TimeCounter };
