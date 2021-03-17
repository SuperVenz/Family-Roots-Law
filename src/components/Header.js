import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Nav from "./Nav";
import { Link } from "gatsby";
const Wrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 50;
  flex-flow: column nowrap;
  padding-left: 2em;
  padding-top: 2em;
  background: black;
  color: white;
`;
const ContainerTop = styled.div`
  display: flex;
`;
const Text = styled.div`
  margin-left: 1em;
  color: white;
`;
const Title = styled.h2`
  font-weight: bold;
  font-size: 1.2em;
  padding-bottom: 5px;
`;
const Tag = styled.p`
  font-size: 0.7em;
`;
const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
`;

function Header(props) {
  return (
    <Wrapper>
      <StyledLink to="/">
        <ContainerTop>
          <StaticImage
            src="../images/icon.png"
            alt="Tree Logo"
            loading="eager"
            placeholder="blurred"
            layout="fixed"
            width={40}
            height={40}
          />
          <Text>
            <Title>Family Roots Law, A.P.C</Title>
            <Tag>Your Family Legacy and Life Lawyer</Tag>
          </Text>
        </ContainerTop>
      </StyledLink>
      <Nav />
    </Wrapper>
  );
}

export default Header;
