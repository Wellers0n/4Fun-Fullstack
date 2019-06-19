import * as React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 150px;
  height: 40px;
  background: #272425;
  color: white;
  border: 1px solid white;
  font-family: "Nunito", sans-serif;
  font-size: 1em;
  border-radius: 100px;
`;

const ButtonInverse = styled.button`
  width: 150px;
  height: 40px;
  background: white;
  color: #272425;
  border: 1px solid white
  font-family: "Nunito", sans-serif;
  font-size: 1em;
  border-radius: 100px;
`;

const ButtonMain = ({ verse, name, ...rest }: any) => {
  return (
    <div>
      {verse ? (
        <Button {...rest}>{name}</Button>
      ) : (
        <ButtonInverse {...rest}>{name}</ButtonInverse>
      )}
    </div>
  );
};

export default ButtonMain;
