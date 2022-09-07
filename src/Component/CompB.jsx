import React from "react";
import { lastName } from "../App";
const CompB = () => {
  return (
    <lastName.Consumer>
      {(e) => {
        return <div>CompB LastName is Something</div>;
      }}
    </lastName.Consumer>
  );
};

export default CompB;
