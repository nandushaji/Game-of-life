import React, { useState, useEffect } from "react";
import ShowGrid from "./components/ShowGrid";
import RowCol from "./components/RowCol";
import cloneDeep from "lodash/cloneDeep";
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

  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        if (!start) {
          return;
        }
        setGrid(startLife);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [start, grid, setGrid]);
  const startLife = (grid) => {
    let row = grid.length;
    let col = grid[0].length;
    const currentGen = cloneDeep(grid);
    const copyGen = cloneDeep(grid);
    const countNeighbours = (i, j, cGen) => {
      var total = 0;
      for (var xoff = -1; xoff <= 1; xoff++) {
        for (var yoff = -1; yoff <= 1; yoff++) {
          var r = i + xoff;
          var c = j + yoff;
          if (xoff !== 0 || yoff !== 0) {
            if (r > -1 && r < row && c > -1 && c < col) {
              if (cGen[r][c] === 1) {
                total++;
              }
            }
          }
        }
      }
      return total;
    };
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        var n = countNeighbours(i, j, currentGen);

        if (currentGen[i][j] === 1) {
          if (n < 2) {
            copyGen[i][j] = 0;
          } else if (n > 3) {
            copyGen[i][j] = 0;
          }
        } else {
          if (n === 3) {
            copyGen[i][j] = 1;
          }
        }
      }
    }

    setGrid(copyGen);
  };
  return (
    <div className="App-header">
      <h1>Game of life</h1>
      <RowCol setCol={setCol} setRow={setRow} setGrid={setGrid} />
      <ShowGrid grid={grid} row={row} col={col} setGrid={setGrid} />
      <div style={{ textAlign: "center" }}>
        <button
          className="button"
          onClick={() => {
            SetStarted(!start);
          }}
        >
          {start ? "stop" : "start"}
        </button>
      </div>
    </div>
  );
};

export default App;
