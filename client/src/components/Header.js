import React from "react";
import styled from "styled-components";

const Header = () => {
  const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    background-color: white;
    margin-bottom: 20px;
  `;

  const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    width: 33.33%;
    justify-content: flex-start;
  `;

  const Text = styled.p`
    font-family: "Lobster";
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: #715aff;

    /* &:hover {
      color: pink;
      transition: color 0.2s ease-in-out;
    }

    &:active {
      color: purple;
    } */
  `;

  const MiddleContainer = styled.div`
    display: flex;
    align-items: center;
    width: 33.33%;
    justify-content: center;
  `;

  const Search = styled.div`
    background-color: lightgray;
    justify-content: left;
    align-items: flex-start;
    justify-items: left;
    padding: 10px 100px;
    border-radius: 20px;
  `;

  const RightContainer = styled.div`
    display: flex;
    align-items: center;
    width: 33.33%;
    justify-content: flex-end;
  `;

  const DropDown = styled.div`
    background-color: white;
    padding: 8px 10px;
    border-radius: 5px;
    width: 100px;
    text-align: center;
  `;

  const SearchText = styled.input`
    font-size: 12px;
    background-color: transparent;
    border: none;
    outline: none;
  `;

  return (
    <HeaderContainer>
      <LeftContainer>
        <Text>Wass</Text>
      </LeftContainer>
      <MiddleContainer>
        <Search>
          <SearchText type="text" placeholder="Search" />
        </Search>
      </MiddleContainer>
      <RightContainer>
        <DropDown></DropDown>
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;
