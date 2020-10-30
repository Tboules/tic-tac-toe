import React from "react";
import styled from "styled-components";

export const Board = () => {
  const squares = Array(9).fill(null);

  const selectSquare = (square) => {
    console.log(square);
  };

  const Tile = styled.button`
    width: 80px;
    height: 80px;
    background-color: white;
    border: 1px solid black;
    cursor: pointer;
    color: blue;
  `;

  const renderSquare = (i) => (
    <Tile className="square" onClick={() => selectSquare(i)}>
      {squares[i]}
    </Tile>
  );

  const RowWrap = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
  `;

  return (
    <div>
      <div>Status: </div>
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
      <button>Restart</button>
    </div>
  );
};
