import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Input = styled.input`
  width: 350px;
  height: 45px;
  margin-bottom: 15px;
  font-size: 1rem;
  background: white;
  border: none;
  color: #272425;
  box-sizing: border-box;
  border-radius: 0px 100px 100px 0px;
`;

const Icon = styled.i`
  color:#272425;
  font-size: 1.5em;
  height: 45px;
  width: 50px
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px 0px 0px 100px
  background: white;
`;

const InputMain = ({ iconName, ...rest }: any) => {
  return (
    <Container>
      <Icon className={iconName} />
      <Input {...rest} />
    </Container>
  );
};

export default InputMain;
