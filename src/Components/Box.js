import React from "react";
import Square from "./Square";

function Box(props) {
  const array = props.arr;
  return (
    <div>
      <div className="row">
        <Square name={array[0]} index={0} onClickChange={props.onClickSquare} />
        <Square name={array[1]} index={1} onClickChange={props.onClickSquare} />
        <Square name={array[2]} index={2} onClickChange={props.onClickSquare} />
      </div>
      <div className="row">
        <Square name={array[3]} index={3} onClickChange={props.onClickSquare} />
        <Square name={array[4]} index={4} onClickChange={props.onClickSquare} />
        <Square name={array[5]} index={5} onClickChange={props.onClickSquare} />
      </div>
      <div className="row">
        <Square name={array[6]} index={6} onClickChange={props.onClickSquare} />
        <Square name={array[7]} index={7} onClickChange={props.onClickSquare} />
        <Square name={array[8]} index={8} onClickChange={props.onClickSquare} />
      </div>
    </div>
  );
}
export default Box;
