import React from "react";
import { Button } from "react-bootstrap";
import Looper from "../classes/Looper";

interface Props {
  mainLoop: Looper;
}

function StartStop(props: Props) {
  return (
    <>
      <Button
        className="start-stop-button"
        variant="primary"
        onClick={() => {
          props.mainLoop.start();
        }}
      >
        <i className="bi bi-play"></i>
      </Button>
      <Button
        className="start-stop-button"
        variant="dark"
        onClick={() => {
          props.mainLoop.stop();
        }}
      >
        <i className="bi bi-stop"></i>
      </Button>
    </>
  );
}

export default StartStop;
