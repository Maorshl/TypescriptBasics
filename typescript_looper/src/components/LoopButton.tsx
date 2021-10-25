import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Looper, { SongName } from "../classes/Looper";

interface Props {
  mainLoop: Looper;
  songName: SongName;
  icon: any;
}

function LoopButton(props: Props) {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Button
      className="loop-button"
      variant={isPressed ? "danger" : "success"}
      onClick={() => {
        props.mainLoop.addLoop(props.songName);
        setIsPressed((prevState) => !prevState);
      }}
    >
      <img src={props.icon} alt="musical instrument"></img>
    </Button>
  );
}

export default LoopButton;
