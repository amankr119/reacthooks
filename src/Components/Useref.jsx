import React, {useRef, useState } from "react";

const Useref = () => {
  const [number, setNumber] = useState(0);

  const inputOne = useRef();
  const inputTwo = useRef();
  const changeDivBackground = useRef();
  const count = useRef(0);

  const getBackground = () => {
    changeDivBackground.current.style.cssText = "background:blue;";
  };

  const getNumberBox = () => {
    console.log("Hello");
    console.log(inputOne.current);
    inputOne.current.style.cssText =
      "width: 400px; height:80px; background: gray; border-radius: 5px;";
  };

  const getTextBox = () => {
    console.log("Hello");
    console.log(inputTwo.current);
  };

  const handleClick = () => {
    count.current += 1; // Update the count
    console.log("Count:", count.current);
    // alert(`Count is now: ${count.current}`);
  };

  return (
    <div ref={changeDivBackground}>
      <input type="checkbox" onClick={() => getBackground()} />
      <h3>useRef Exampl</h3>
      <span>By Aman</span>
      <div>
        <input
          ref={inputOne}
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          style={{ width: "250px", background: "pink" }}
        />
      </div>
      <div>
        <input
          ref={inputTwo}
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <h3>Value is: {number}</h3>
      <button type="button" onClick={() => getNumberBox()}>
        Rupees
      </button>
      <button type="button" onClick={() => getTextBox()}>
        Dollars
      </button>
      <button type="button" onClick={()=>handleClick()}>Increase</button>
      <p>{count.current}</p>
    </div>
  );
};

export default Useref;
