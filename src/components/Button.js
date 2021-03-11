import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  padding-top: 0.5em;
  margin: 1em;
  padding-bottom: 0.5em;
  padding-left: 2em;
  padding-right: 2em;
  background-color: #8c6034;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 1.5em;
`;
function Button({ tag }) {
  return <CustomButton>{tag}</CustomButton>;
}

export default Button;
