import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Looper, { SongName } from "../classes/Looper";

interface Props {
  mainLoop: Looper;
  songName: SongName;
  icon: any;
  setPlaying: Function;
  playing: string[];
}

function LoopButton(props: Props) {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Button
      className="loop-button"
      variant={isPressed ? "danger" : "success"}
      onClick={() => {
        // props.mainLoop.addLoop(props.songName);
        if (!isPressed) {
          props.setPlaying((prevState) => {
            return [...prevState, props.songName];
          });
        } else {
          props.setPlaying((prevState: string[]) => {
            const newArray = prevState.filter(
              (song: string) => song !== props.songName
            );
            return newArray;
          });
        }
        setIsPressed((prevState) => !prevState);
      }}
    >
      <img src={props.icon} alt="musical instrument"></img>
    </Button>
  );
}

export default LoopButton;
