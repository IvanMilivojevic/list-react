import styled from "styled-components";

export const StyledP = styled.p`
  background-color: ${props => props.length >= 5 ? "red": "yellow"};
  margin: 10px 0;
  color: blue;
`;

export const StyledChar = styled.span`
  display: inline-block;
  padding: 16px;
  text-align: center;
  margin: 16px;
  border: 1px solid black;
  background-color: ${props => props.length >= 5 ? "red": "yellow"};
  color: white;
`;
