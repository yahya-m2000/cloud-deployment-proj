import React from "react";
import styled from "styled-components";

const MessageContainer = (props) => {
  const Container = styled.div`
    background-color: #2a2a2a;
    border-radius: 5px;
    width: 600px;
    vertical-align: middle;
    transition: background-color 0.1s ease-in-out;
    padding: 4px;
    margin: 10px;
  `;

  const Icon = styled.div`
    background-color: white;
    margin-left: 10px;
    margin-top: 2px;
    margin-bottom: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  `;

  const UserName = styled.p`
    margin: 0; // reset the margin of <p> tag to 0
    margin-right: 100px;
    margin-left: 10px;
    margin-top: 10px;
    color: white;
    font-family: "Quicksand";
    font-style: normal;
    font-size: 14px;
  `;
  const Text = styled.p`
    margin: 0; // reset the margin of <p> tag to 0
    margin-right: 100px;
    margin-left: 10px;
    margin-top: 4px;
    color: white;
    font-family: "Quicksand";
    font-style: normal;
    font-size: 12px;
  `;

  return (
    <Container>
      <Icon />
      <UserName>{props.username}</UserName>
      <Text>{props.text}</Text>
    </Container>
  );
};

export default MessageContainer;
