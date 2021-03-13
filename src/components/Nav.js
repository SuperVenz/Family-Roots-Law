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
`;
const Div = styled.div`
  display: flex;
  flex-grow: 3;
  font-size: 16px;
  justify-content: space-between;
  padding-right: 16px;
`;

function Nav(props) {
  return (
    <Navigation>
      <Div>
        <Link to="/about">
          <NavButton>About</NavButton>
        </Link>
        <Link to="/services">
          <NavButton>Practice Areas</NavButton>
        </Link>
        <Link to="/contact">
          <NavButton>Contact Me</NavButton>
        </Link>
        <Link to="/">
          <NavButton>
            <Phone />
          </NavButton>
        </Link>
      </Div>
    </Navigation>
  );
}

export default Nav;
