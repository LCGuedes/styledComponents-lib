import { GlobalStyles } from "../globalStyles";
import AutoInput from "./components/AutoInput";

import styled from "styled-components";

const Container = styled.div`
  background-color: #01599a;
  width: 100%;
  height: 100vh;

  div {
    width: 400px;
    height: 400px;
  }
`;

function App() {
  return (
    <>
    <GlobalStyles />
      <Container>
        <div>
          <AutoInput  />
        </div>
      </Container>
    </>
     
  )
}

export default App
