import React from "react";

export const Child3 = (props) => {
  return <div>Child3 {props.data2.name}</div>;
};

// If we need data from parent component we need to get the data step by step.
// From parent to child to child2 to child3
// To deal with this problem we need to use Redux or Context API.
