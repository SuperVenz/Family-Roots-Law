import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Wrapper = styled.div`
  padding-left: 2em;
  padding-bottom: 5em;
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
function Button({ tag, route }) {
  return (
    <Wrapper>
      <Link to={route}>
        <CustomButton>{tag}</CustomButton>
      </Link>
    </Wrapper>
  );
}

export default Button;
