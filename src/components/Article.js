import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding-left: 2em;
  padding-right: 2em;
  padding-bottom: 2em;
  line-height: 1.5em;
  padding-top: 2em;
`;
const Title = styled.h2`
  font-weight: bold;
  padding-bottom: 1em;
  font-size: 2.3em;
  line-height: 1em;
`;
const Text = styled.p`
  font-size: 1.2em;
  line-height: 1.5em;
`;

function Article(props) {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Text>{props.children}</Text>
    </Wrapper>
  );
}

export default Article;
