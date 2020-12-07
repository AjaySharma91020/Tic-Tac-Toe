import React, { Component } from "react";
import Box from "./Components/Box";
import "./App.css";

const array = new Array(9).fill(null);
class App extends Component {
  constructor() {
    super();
    this.state = {
      isCurrX: true,
      winMessage:"",
    };
  }
  handleRestart() {
    array.fill(null);
    this.setState({
      isCurrX: true,
      winMessage: "",
    });
  }
  findWinner() {
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winCombinations.length; i++) {
      let x = winCombinations[i][0];
      let y = winCombinations[i][1];
      let z = winCombinations[i][2];
      if (array[x] && array[x] === array[y] && array[x] === array[z]) {
        this.setState({
          winMessage:`Winner: ${array[x]}`
        });
        console.log(this.state.winMessage)
       //alert("")
      }
    }
  }
  handleClick = (i) => {
   
    if(this.state.winMessage) return;
    if (array[i]) {
      alert("Position already filled")
      return;
    };
    array[i] = this.state.isCurrX ? "X" : "O";
    this.findWinner();
    this.setState({
      isCurrX: !this.state.isCurrX,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row mt-5 ml-5">
          <div className="col-sm-4">
            <Box arr={array} onClickSquare={this.handleClick} />
          </div>
          <div className="col-sm-4 mt-2">

              <strong>
                {this.state.winMessage
                  ? <div>
                  <div>{this.state.winMessage}</div>
                  <div>{"Please restart the game"}</div>
                  </div>
                  : `Next Player : ${this.state.isCurrX ? "X" : "O"}`}
              </strong>
              <br></br>
            <button
              className="btn btn-success"
              onClick={() => this.handleRestart()}
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    );

    
  }
}

export default App;

/*

why split code ?
c++ -> header and cpp file
java -> packages


1] easier to maintain code
2] easier to debug and test
3] reuse code
*/
