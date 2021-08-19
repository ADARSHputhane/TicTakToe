import React from "react";

const StatusMessage = ({ winner, current }) => {
  const nullMovesLeft = current.board.every((el) => el !== null);
  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !nullMovesLeft &&
        `Next player is ${current.isNext ? "X" : "O"}`}
      {!winner && nullMovesLeft && "X and O tied"}
    </h2>
  );
};
export default StatusMessage;
