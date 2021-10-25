import React from "react";
import "../Style/App.css";
// import { useState } from "react";
import Looper, { SongName } from "../classes/Looper.js";
// import Recorder from "../classes/Recorder";
import { Container, Row, Col } from "react-bootstrap";
import LoopButton from "./LoopButton";
import acoustic from "../Style/images/1-acoustic guitar.svg";
import violoncello from "../Style/images/5-violoncello.svg";
import amp from "../Style/images/7-amp.svg";
import conga from "../Style/images/13-conga.svg";
import dj from "../Style/images/29-dj mixer.svg";
import drumSet from "../Style/images/42-drum set.svg";
import bagpipes from "../Style/images/46- bagpipes.svg";
import synthesizer from "../Style/images/30-synthesizer.svg";
import drum from "../Style/images/22-drum.svg";
import Title from "./Title";
import StartStop from "./StartStop";
// import StartStop from "./StartStop";
// import Title from "./Title";

type Song = { name: SongName; icon: any };

type SongNames = Song[];

const songsNames: SongNames = [
  { name: "_1", icon: acoustic },
  { name: "_2", icon: amp },
  { name: "_3", icon: violoncello },
  { name: "_4", icon: dj },
  { name: "_5", icon: drumSet },
  { name: "_6", icon: conga },
  { name: "_7", icon: synthesizer },
  { name: "_8", icon: drum },
  { name: "_9", icon: bagpipes },
];

const App: React.FC = () => {
  const MainLoop: Looper = new Looper();
  return (
    <div className="App">
      <Title />
      <Container>
        <Row lg={3} md={3}>
          {songsNames.map((song: Song, i: number) => {
            return (
              <Col key={`looper-button-${i}`}>
                <LoopButton
                  mainLoop={MainLoop}
                  songName={song.name}
                  icon={song.icon}
                ></LoopButton>
              </Col>
            );
          })}
        </Row>
      </Container>
      <StartStop mainLoop={MainLoop} />
    </div>
  );
};

export default App;
