import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import { Button } from "./ui/Button";
// Tagged template literal
const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 1.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;
const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert("Check in")}>Check in</Button>
        <Button onClick={() => alert("Check out")}>Check out</Button>
        <Input type="number" placeholder="Number of guests"></Input>
        <Input type="number" placeholder="Number of guests"></Input>
      </StyledApp>
    </>
  );
}

export default App;
