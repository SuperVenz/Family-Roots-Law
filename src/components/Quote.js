import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding-left: 2em;
  p {
    font-weight: bold;
    font-size: 2em;
  }
  padding-bottom: 3em;
`;
const Line = styled.div`
  width: 3em;
  height: 13.5em;
  background: black;
  border: solid black 1px;
`;
const Text = styled.div`
  align-text: center;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 1em;
`;
const Author = styled.div`
  padding-top: 1em;
`;
function Quote(props) {
  return (
    <Wrapper>
      <Line />
      <Text>
        <p>{props.children}</p>
        <Author> -- {props.author}</Author>
      </Text>
    </Wrapper>
  );
}

export default Quote;
