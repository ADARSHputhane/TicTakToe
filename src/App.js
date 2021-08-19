import React, { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helpers";
import "./styles/root.scss";

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  const winner = calculateWinner(current.board);
  const message = winner
    ? `winner is ${winner}`
    : `next player is ${current.isXNext ? "X" : "O"}`;
  console.log(winner);
  const handleSquareClick = (position) => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory((prev) => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((Square, pos) => {
        if (pos === position) {
          return last.isXNext ? "X" : "O";
        }
        return Square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove((prev) => prev + 1);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <n2>{message}</n2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default App;
