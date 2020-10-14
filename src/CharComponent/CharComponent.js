import React from "react";
import { StyledChar } from "./../CustomStyles";

const CharComponent = (props) => {
  return (
    <StyledChar onClick={props.click} length={props.length}>
      {props.letter}
    </StyledChar>
  );
};

export default CharComponent;
