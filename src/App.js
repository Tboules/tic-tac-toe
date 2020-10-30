import { Board } from "./components/Board/Board";
import styled from "styled-components";

const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <PageWrap className="App">
      <h1>Tic-Tac-Toe</h1>
      <Board />
    </PageWrap>
  );
}

export default App;
