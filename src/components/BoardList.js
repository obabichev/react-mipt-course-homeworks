import React from "react";

import boardList from "../data/boardList";
import BoardListItem from "./BoardListItem";

console.log(boardList);

const BoardList = () => {
  return (
    <>
      {boardList.map((board) => (
        <div key={board._id}>
          <BoardListItem board={board} key={board._id} />
        </div>
      ))}
    </>
  );
};

export default BoardList;
