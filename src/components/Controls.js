import React from "react";

export const Controls = (props) => {
  const { prev, next, shuffle } = props;
  return (
    <div className="control">
      <button onClick={prev}>
        <i className="fas fa-backward"></i>
      </button>
      <button>
        <i className="fas fa-play"></i>
      </button>
      <button onClick={next}>
        <i className="fa fa-forward"></i>
      </button>
      <button onClick={shuffle}>
        <i className="fas fa-random"></i>
      </button>
    </div>
  );
};
