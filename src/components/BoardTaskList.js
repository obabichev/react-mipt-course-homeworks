import React from "react";

import BoardTaskListItem from "./BoardTaskListItem";

import boardTaskList from "../data/boardTaskList";

const { tasks } = boardTaskList;
console.log(tasks);
const BoardTaskList = () => {
  return (
    <>
      {tasks.map((task) => (
        <div key={task._id}>
          <BoardTaskListItem task={task} key={task._id} />
        </div>
      ))}
    </>
  );
};

export default BoardTaskList;
