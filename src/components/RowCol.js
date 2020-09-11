import React from "react";

const RowCol = (props) => {
  return (
    <div>
      <label>Rows:</label>
      <input
        min="1"
        type="number"
        onChange={(e) => {
          props.setRow(e.target.value);
        }}
      ></input>
      <label>Column:</label>
      <input
        min="1"
        type="number"
        onChange={(e) => {
          props.setCol(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default RowCol;
