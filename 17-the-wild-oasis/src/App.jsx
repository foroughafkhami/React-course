import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";
// Tagged template literal

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="horizontal">
          <Heading as="h1">The Wild Oasis</Heading>
          <div>
            <Heading as="h2">Check in and out</Heading>
            <Button onClick={() => alert("Check in")}>Check in</Button>
            <Button
              variations="secondary"
              size="small"
              onClick={() => alert("Check out")}
            >
              Check out
            </Button>
          </div>
        </Row>
        <Row>
          <Heading as="h3">Form</Heading>
          <form>
            <Input type="number" placeholder="Number of guests"></Input>
            <Input type="number" placeholder="Number of guests"></Input>
          </form>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
