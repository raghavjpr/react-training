import React from "react";
import { Child2 } from "./Child2";

export const Child = (props) => {
  const { name, lastname } = props.data;
  return (
    <div>
      Child {name} {lastname}
      <Child2 data2={props.data}></Child2>
    </div>
  );
};
