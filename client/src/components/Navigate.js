import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Navigate = (props) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(props.route);
  }

  const Button = styled.button`
    justify-content: right;
    font-size: 18px;
    color: white;
    padding: 8px;
    margin: 20px;
    border: none;
    background-color: transparent;
    border-radius: 100px;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: darkgray;
      color: white;
    }

    &:active {
      background-color: lightgrey;
      color: white;
    }
  `;
  return <Button onClick={handleClick}>{props.label}</Button>;
};

export default Navigate;
