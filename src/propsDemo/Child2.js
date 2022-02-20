import React from "react";
import { Child3 } from "./Child3";

export const Child2 = (props) => {
  const { name, lastname } = props.data2;
  return (
    <div>
      Child2 {props.data2.name}
      {name} {lastname}
      <Child3 {...props}></Child3>
    </div>
  );
};
