import React, { useContext } from "react";
import { firstName, lastName } from "../App";
const CompD = () => {
  const firstNamecontex = useContext(firstName);
  const lastNamecontex = useContext(lastName);
  console.log(lastNamecontex)
  return (
    <><button onClick={() => { lastNamecontex.setlastName({name: "ALI KHAN", loggedIn: "something irrrrrrrr relevent"}) }}>
    click to last name to 'ALI KHAN'
    </button>
      <div>
        Component D Renders the following data by using Use Context <br />
        my first name is {firstNamecontex.state.name} and last name is{" "}
        {lastNamecontex.userLastName.name}
      </div><button onClick={() => { firstNamecontex.setUser({name: "BestDevAsad", loggedIn: "trsdadsdsasaue"}) }}>
      click to change asad to 'Best Dev Asad'
      </button>
    </>
  );
};

export default CompD;
