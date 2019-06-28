import React from "react";
import { Button, Text } from "native-base";

const ContainerInput = ({ nameButton, ...rest }: any) => {
  return (
    <Button {...rest}>
      <Text> {nameButton} </Text>
    </Button>
  );
};

export default ContainerInput;
