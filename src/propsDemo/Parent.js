import React from "react";
import { Child } from "./Child";
import PropTypes from "prop-types";

const Parent = (props) => {
  // In place of props we can wrire {name,lastname}
  return (
    <div>
      Parent {props.name} {props.lastname}
      {/* <Child name={props.name} lastname={props.lastname}></Child> */}
      <Child data={props}></Child>
    </div>
  );
};

Parent.propTypes = {};

export default Parent;
