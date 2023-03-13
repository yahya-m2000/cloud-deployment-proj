import React from "react";
import styled from "styled-components";
import { NavList, MessageContainer } from "./Home";

const Feed = () => {
  const MainContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    /* background-color: lightgrey; */
    position: relative;
    height: 100%;
  `;
  const NavContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    padding-right: 100px;
  `;

  const StyledFeed = styled.div`
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 40px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    justify-content: center;
    height: 100%;
  `;

  const StyledFeedTitle = styled.p`
    color: white;
    padding: 6px;
    border-radius: 10px;
    margin: 20px;
    font-family: "Quicksand";
    font-style: normal;
    font-weight: bold;
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

  //   const FeedContainer = styled.div`
  //     background-color: transparent;
  //     overflow-y: auto; /* Added scrollable property */
  //     margin: auto; /* center the container horizontally and vertically */
  //   `;

  const FeedContainer = styled.div`
    background-color: #1b1b1b;
    padding: 50px 50px 20px 50px;
    height: calc(100vh - 130px); /* set the height of the container */
    overflow-y: auto; /* set overflow-y to auto */
  `;

  const messages = [
    {
      username: "user1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      username: "user2",
      text: "Praesent vitae nisl eu lectus bibendum tristique.",
    },
    {
      username: "user3",
      text: "Suspendisse potenti. Nunc vel quam vitae magna cursus malesuada.",
    },
    {
      username: "user4",
      text: "Cras eget ipsum euismod, eleifend mi a, semper felis.",
    },
    {
      username: "user5",
      text: "Vivamus fringilla mauris eu lorem dapibus consectetur.",
    },
    {
      username: "user6",
      text: "Maecenas ac justo vitae purus imperdiet commodo.",
    },
    {
      username: "user7",
      text: "Donec ac ipsum euismod, faucibus quam eu, finibus est.",
    },
    {
      username: "user8",
      text: "Quisque volutpat lectus non velit placerat vestibulum.",
    },
    {
      username: "user9",
      text: "Nam volutpat sapien a libero tincidunt ultrices.",
    },
    {
      username: "user10",
      text: "Proin viverra nisi sit amet ipsum laoreet, nec euismod purus varius.",
    },
    {
      username: "user11",
      text: "Aliquam in leo eu quam commodo elementum eu sit amet tellus.",
    },
    {
      username: "user12",
      text: "Fusce dapibus ex id felis commodo hendrerit.",
    },
  ];

  const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
  `;

  return (
    <MainContainer>
      <NavContainer>
        <NavList label="Home" />
        <NavList label="Profile" />
        <NavList label="Explore" />
        <NavList label="Messages" />
        <NavList label="Settings" />
      </NavContainer>
      <StyledFeed>
        <TitleContainer>
          <StyledFeedTitle>Friends</StyledFeedTitle>
          <StyledFeedTitle>Trending</StyledFeedTitle>
        </TitleContainer>
        <FeedContainer>
          {messages.map((message, index) => (
            <MessageContainer
              key={index}
              username={message.username}
              text={message.text}
            />
          ))}
        </FeedContainer>
      </StyledFeed>
    </MainContainer>
  );
};

export default Feed;
