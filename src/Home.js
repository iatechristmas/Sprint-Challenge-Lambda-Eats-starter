import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import pizza from "./Pizza.jpg";

const HomeDiv = styled.div`
  margin: 0 auto 0 auto;
  width: 50%;
  img {
    width: 100%;
  }

  button {
    width: 100%;
    background-color: lightgreen;
    border-radius: 10px;
    font-size: 1.5rem;
    padding: 1%;
  }
`;

const Home = () => {
  const history = useHistory();

  const routeToOrder = () => {
    history.push("/order");
  };

  return (
    <HomeDiv>
      <img src={pizza} alt="" />
      <button onClick={routeToOrder} className="md-button shop-button">
        Click Here To Order!
      </button>
    </HomeDiv>
  );
};

export default Home;
