import React from "react";
import monkey from "../Style/images/monkey.png";
import { Navbar, Container } from "react-bootstrap";

function Title(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <h1>
            Dance{" "}
            <span>
              <img alt="monkey in the shape of M" src={monkey} />
              onkey
            </span>
          </h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Title;
