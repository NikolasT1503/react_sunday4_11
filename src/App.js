import "./App.css";
import {
  Box,
  Button,
  Distribution,
  Text,
  Grommet,
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableHeader,
} from "grommet";
import React from "react";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "16px",
      height: "18px",
    },
  },
};

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cell: 0,
      row: 0,
    };
  }
  render() {
    return (
      <Grommet theme={theme}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell scope="col" border="bottom"></TableCell>
              {["a", "b", "c", "d", "e", "f", "g", "h"].map((item) => (
                <TableCell scope="col" border="bottom" key={item}>
                  <strong>{item}</strong>
                </TableCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((row, i) => (
              <TableRow key={row}>
                <TableCell scope="row">{row}</TableCell>
                {["a", "b", "c", "d", "e", "f", "g", "h"].map((cell, j) => (
                  <TableCell
                    scope="row"
                    key={cell + row}
                    background={(i + j) % 2 === 0 ? "light-3" : "dark-3"}
                    onClick={() => {
                      this.setState({ cell: j, row: i });
                    }}
                  >
                      <Button default alignSelf="stretch">
                        {() => {
                          const r = this.state.row;
                          const c = this.state.cell;
                          console.log(j, c, i, r);
                          if (r === i && c === j) {
                            return "1";
                          }
                          if (r + c == i + j || r - c === i - j) {
                            return "*";
                          }
                          return "";
                        }}
                      </Button>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grommet>
    );
  }
}

export default App;
