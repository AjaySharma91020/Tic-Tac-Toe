import React from "react";

function Square(props) {
  const { name } = props;
  return (
    <div className="square border border-primary" onClick={() => props.onClickChange(props.index)}>
      <div className="py-1 text-center">
        {name &&
          (name === "O" ? (
            <span className="text-secondary">
              <i className="far fa-circle"></i>
            </span>
          ) : (
            <span className="text-danger">
            <i className="fas fa-times"></i>
            </span>
          ))}
      </div>
    </div>
  );
}

export default Square;
