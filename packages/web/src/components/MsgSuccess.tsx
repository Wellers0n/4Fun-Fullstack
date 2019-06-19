import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 15px 0px;
  align-items: center;
  height: 30px;
`;

const Msg = styled.span`
  font-size: 1.2rem;
  font-family: "Nunito", sans-serif;
  color: green;
  margin: 20px 0px;
`;

const MsgError = ({ msg }: any) => {
  return (
    <Container>
      <Msg>{msg}</Msg>
    </Container>
  );
};

export default MsgError;
