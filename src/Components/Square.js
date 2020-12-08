import React from "react";

function Square(props) {
  const { name } = props;
  return (
    <div
      className="square border border-primary"
      onClick={() => props.onClickChange(props.index)}
    >
      {name &&
        (name === "O" ? (
          <span className="icon text-secondary">
            <i className="far fa-circle"></i>
          </span>
        ) : (
          <span className="icon text-danger">
            <i className=" fas fa-times"></i>
          </span>
        ))}
    </div>
  );
}

export default Square;
