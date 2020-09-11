import React, { useEffect } from "react";
import cloneDeep from "lodash/cloneDeep";

const ShowGrid = (props) => {
  const startLife = (grid) => {
    let row = grid.length;
    let col = grid[0].length;

    const currentGen = cloneDeep(props.grid);
    const copyGen = cloneDeep(props.grid);
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

    props.setGrid(copyGen);
  };

  const lineStyle = {
    background: "#4CAF50",
    border: "none",
    color: "white",
    padding: "32px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
  };
  const lineStyle2 = {
    background: "#f44336",
    border: "none",
    color: "white",
    padding: "32px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
  };
  const array = cloneDeep(props.grid);
  useEffect(() => {}, props.grid);

  return (
    <div>
      <table style={{ margin: "10px" }}>
        <tbody>
          {array.map((row, i) => (
            <tr>
              {row.map((e, j) => (
                <td>
                  <button
                    onClick={() => {
                      for (let k = 0; k < props.row; k++) {
                        for (let m = 0; m < props.col; m++) {
                          if (k === i && m === j) {
                            array[k][m] = 1;
                          }
                        }
                      }

                      props.setGrid(array);
                    }}
                    style={props.grid[i][j] ? lineStyle : lineStyle2}
                  ></button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: "center" }}>
        <button
          className="button"
          onClick={() => {
            const interval = 500;
            props.SetStarted(!props.start);
            setInterval(function () {
              if (props.start) {
                startLife(props.grid);
              }
            }, interval);
          }}
        >
          {props.start ? "stop" : "start"}
        </button>
      </div>
    </div>
  );
};
export default ShowGrid;
