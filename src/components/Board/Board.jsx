import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { turnCheck, winner, checkStatus } from "../../utils";

const Tile = styled.button`
  width: 80px;
  height: 80px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  color: blue;
  font-size: 2.5rem;
`;

const RowWrap = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const [gameOver, setGameOver] = useState(false);
  const [status, setStatus] = useState(checkStatus(gameOver, turn, squares));

  const selectSquare = (square) => {
    if (gameOver || squares[square]) {
      return;
    }

    const mSquares = [...squares];
    mSquares[square] = turn;
    setSquares(mSquares);
  };

  useEffect(() => {
    setGameOver(winner(squares));
    setStatus(checkStatus(gameOver, turn, squares));
    setTurn(turnCheck(squares));
  }, [turn, squares, gameOver]);

  const renderSquare = (i) => (
    <Tile className="square" onClick={() => selectSquare(i)}>
      {squares[i]}
    </Tile>
  );

  const restart = () => {
    setSquares(Array(9).fill(null));
    setTurn("X");
    setGameOver(false);
  };

  return (
    <div>
      <div style={{ paddingBottom: "20px" }}>Status: {status}</div>
      <RowWrap className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </RowWrap>
      <RowWrap className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </RowWrap>
      <RowWrap className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </RowWrap>
      <button onClick={() => restart()}>Restart</button>
    </div>
  );
};
