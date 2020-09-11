import React, { useEffect } from "react";
import cloneDeep from "lodash/cloneDeep";

const ShowGrid = (props) => {
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
    </div>
  );
};
export default ShowGrid;
