import React, { useState } from "react";
import { firstName } from "../App";
const CompC = () => {
  return (
    <>
      <div>CompC</div>
      <firstName.Consumer>
        {(e) => {
          return <div>My Name Is {e.state.name}</div>;
        }}
      </firstName.Consumer>
    </>
  );
};

export default CompC;
