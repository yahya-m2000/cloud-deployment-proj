import React from "react";
import styled from "styled-components";
import { Header, Feed } from "../components";

const Home = () => {
  const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #1b1b1b;
  `;

  const MainContent = styled.div`
    display: flex;
    flex: 1;
  `;

  return (
    <HomeContainer>
      <Header />
      <MainContent>
        <Feed />
      </MainContent>
    </HomeContainer>
  );
};

export default Home;
