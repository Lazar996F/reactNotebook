import React from 'react';


function Square(props) {
  return (
    <button className="square  padd" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

  export default Square;
