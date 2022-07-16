import React from "react";
import styled from "styled-components";

const HondaText = () => {
  return (
    <Container>
      <h1>Honda</h1>
      <h1>Civic...</h1>
      <h1>Más que</h1>
      <h1>actitud</h1>
      <BtnContainer>
        <button className="readmore">Detalles</button>
        <button>Contactar</button>
      </BtnContainer>
    </Container>
  );
};

const BtnContainer = styled.div`
  margin-top: 2rem;
  button {
    background: #535657;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #535657;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 17px 16px -11px #ffffff;
      transform: translateY(-5px);
    }
  }

  .readmore {
    color: #535657;
    background: transparent;
    border: 3px solid #535657;
    &:hover {
      box-shadow: 0px 17px 16px -11px #ffffff;
      transform: translateY(-5px);
    }
  }
`;

const Container = styled.div`
  padding: 1rem;
  h1 {
    font-size: 3.5rem;
    font-weight: 900;

    &:nth-of-type(1) {
      color: #c0c0c2;
      font-weight: 700;
    }
    &:nth-of-type(2) {
      color: #c6c7cc;
    }
    &:nth-of-type(3) {
      color: #e6e7ed;
    }
    &:nth-of-type(4) {
      color: #f7f7f7;
    }
  }
`;

export default HondaText;
