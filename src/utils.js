export const turnCheck = (squares) => {
  const countX = squares.filter((x) => x === "X").length;
  const countO = squares.filter((o) => o === "O").length;
  return countO === countX ? "X" : "O";
};

export const winner = (squares) => {
  const possWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < possWins.length; i++) {
    const [a, b, c] = possWins[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export const checkStatus = (gameOver, turn, squares) => {
  return gameOver
    ? `${gameOver} wins`
    : squares.every(Boolean)
    ? "Cats Game!"
    : `it's ${turn}'s turn!`;
};
