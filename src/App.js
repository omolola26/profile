import React from "react";
import ProfilePhoto from "./Components/Profile/ProfilePhoto";
import FullName from "./Components/Profile/FullName";
import Address from "./Components/Profile/Address";
import "./style.css";

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
