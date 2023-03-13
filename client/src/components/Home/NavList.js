import React from "react";
import styled from "styled-components";

const NavList = (props) => {
  const NavCards = styled.div`
    margin-left: 50px;
    border-radius: 5px;
    padding-right: 30px;
    vertical-align: middle;
    transition: background-color 0.1s ease-in-out;

    &:hover {
      background-color: #2a2a2a;
      color: white;
    }
  `;

  const NavText = styled.p`
    margin-right: 100px;
    margin-left: 10px;
    color: white;
    padding: 4px;
    font-family: "Quicksand";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
  `;
  return (
    <NavCards>
      <NavText>{props.label}</NavText>
    </NavCards>
  );
};

export default NavList;
