import React from "react";
import { Input, Label, Item } from "native-base";

const ContainerInput = ({nameInput, ...rest}:any) => {
  return (
    <Item floatingLabel>
      <Label>{nameInput}</Label>
      <Input {...rest} />
    </Item>
  );
};

export default ContainerInput
