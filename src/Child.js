import React, { useState } from "react";

function Child({ child, children, setChildren, index, changeHandler }) {
  // const [show, setShow] = useState("");

  return (
    <>
      <label for="cars">Choose a car:</label>
      <select name="cars" id="cars" onChange={(e) => changeHandler(e, index)}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
      <br />
      {/* <p>{show}</p> */}
      <br />
    </>
  );
}

export default Child;
