import React, { useState, useEffect } from "react";
import ShowGrid from "./components/ShowGrid";
import RowCol from "./components/RowCol";

import "./App.css";

const App = () => {
  const [row, setRow] = useState();
  const [start, SetStarted] = useState(false);
  const [col, setCol] = useState();
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    let initGrid = [];
    for (let i = 0; i < row; i++) {
      initGrid[i] = [];
      for (let j = 0; j < col; j++) {
        initGrid[i][j] = 0;
      }
    }
    setGrid(initGrid);
  }, [row, col]);

  return (
    <div className="App-header">
      <h1>Game of life</h1>
      <RowCol setCol={setCol} setRow={setRow} setGrid={setGrid} />
      <ShowGrid
        grid={grid}
        row={row}
        col={col}
        setGrid={setGrid}
        start={start}
        SetStarted={SetStarted}
      />
    </div>
  );
};

export default App;
