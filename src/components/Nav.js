import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Phone from "../images/Ui/Phone.svg";
const Navigation = styled.nav`
  padding-top: 2em;
  display: flex;
  justify-content: space-around;
  padding-bottom: 2em;
  width: 100%;
`;
const NavButton = styled.p`
  color: white;
  font-size: 15px;
  @media screen and (min-width: 768px) {
    font-size: 1.1em;
  }
`;
const Div = styled.div`
  display: flex;
  flex-grow: 3;
  font-size: 16px;
  justify-content: space-between;
  padding-right: 16px;
`;
const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
`;

function Nav(props) {
  return (
    <Navigation>
      <Div>
        <StyledLink to="/about">
          <NavButton>About</NavButton>
        </StyledLink>
        <StyledLink to="/services">
          <NavButton>Practice Areas</NavButton>
        </StyledLink>
        <StyledLink to="/contact">
          <NavButton>Contact Me</NavButton>
        </StyledLink>
        <StyledLink to="/">
          <NavButton>
            <Phone />
          </NavButton>
        </StyledLink>
      </Div>
    </Navigation>
  );
}

export default Nav;
