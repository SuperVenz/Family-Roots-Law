import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  padding-left: 2em;
  padding-bottom: 7em;
`;
const CustomButton = styled.button`
  padding-top: 0.5em;
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
  return (
    <Wrapper>
      <CustomButton>{tag}</CustomButton>
    </Wrapper>
  );
}

export default Button;
