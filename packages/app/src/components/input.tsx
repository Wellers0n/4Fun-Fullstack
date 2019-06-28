import React from "react";
import { Input, Label, Item } from "native-base";

const ContainerInput = ({nameInput, ...rest}:any) => {
  return (
    <Item floatingLabel last>
      <Label style={{color: 'white'}}>{nameInput}</Label>
      <Input style={{color: 'white'}} {...rest} />
    </Item>
  );
}; 

export default ContainerInput
