import "./App.css";
import { useState } from "react";
import Child from "./Child";

function App() {
  const [children, setChildren] = useState([
    {
      car: "",
    },
  ]);

  const changeHandler = (e, index) => {
    let val = e.target.value;
    // child.car = val;
    // console.log(children);
    // console.log(child.car);
    // setShow(child.car);
    children[index] = { car: val };
    setChildren([...children, children[index]]);
  };

  const addHandler = () => {
    if (children.length >= 5) {
      alert("ENOUGH!");
    } else {
      setChildren([...children, { car: "" }]);
    }
  };
  return (
    <div className="App">
      {children.map((child, index) => {
        console.log("child", child);
        return (
          <>
            <Child
              child={child}
              children={children}
              setChildren={setChildren}
              index={index}
              changeHandler={changeHandler}
            />
            {child.car !== "" ? (
              <button onClick={addHandler}>Add</button>
            ) : null}
            <br /> <br />
          </>
        );
      })}
    </div>
  );
}

export default App;
