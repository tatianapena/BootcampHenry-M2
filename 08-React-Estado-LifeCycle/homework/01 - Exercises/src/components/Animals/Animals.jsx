import React from "react";
import styled from "styled-components";

const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Buttons = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: #131313ea;
  font-size: 1em;
  color: beige;

  &:hover {
    background-color: #fcff4f;
    color: #131313ea;
  }
`;

export default class Animals extends React.Component {
  render() {
    // const { animals } = this.props;
    return (
      <DivButtons>
        <Buttons>Módulo 1</Buttons>
        <Buttons>Módulo 2</Buttons>
      </DivButtons>
    );
  }
}

// Esto lo exportamos para los tests
export { DivButtons, Buttons };
