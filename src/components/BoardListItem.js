import React from "react";

const BoardListItem = ({ board }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{board.key}</td>
          <td>{board.title}</td>
          <td>{board.category.value}</td>
          <td>{board.owner.name}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default BoardListItem;
