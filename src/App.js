import React, { createContext, useState } from "react";
import CompA from "./Component/CompA";
const lastName = createContext();
const firstName = createContext();

function App() {
  const user = { name: "Asad", loggedIn: "trsdadsdsasaue" };
  const [state, setState] = useState(user);
  const setUser = (user) => {
    setState((prevState) => user);
  };

  const user2 = { name: "Asad", loggedIn: "kmbjjh" };
  const [userLastName, setUserLastName] = useState(user2);

  const setlastName = (user) => {
    setUserLastName((prevState) => user);
  };
  return (
    <>
      <firstName.Provider value={{ state, setUser }}>
        <lastName.Provider value={{ userLastName, setlastName }}>
          <CompA></CompA>
        </lastName.Provider>
      </firstName.Provider>
    </>
  );
}

export default App;
export { firstName, lastName };
