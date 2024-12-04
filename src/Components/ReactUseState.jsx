import React, { useEffect, useState } from "react";

function ReactUseState() {
  // const array = useState(0);
  // const counter = array[0];
  // const setCounter = array[1];

  // array destructuring ...
  // const [counter, setCounter] = useState(0)
  // const [name, setName] = useState("")

  // const handleIncrease = () =>{
  //     setCounter(counter+1)
  // }

  // useState with object state varaible
  const [details, setDetail] = useState({ name: "", counter: 0 });

  const [time, setTime] = useState(0)

  function handleIncrease() {
    setDetail((prev) => ({ 
        ...prev,
        counter: prev.counter + 1 }));
  }
  
  function handleChange(e){
    const {name, value} = e.target;
    setDetail((prev)=>({
        ...prev,
        [name]: value
    }))
  }

  //useEffect
  useEffect(()=>{
    document.title = `${details.counter}: new message`
  }, [details.counter])

  useEffect(()=>{
    const timer = setInterval(()=>{
        setTime(time+1)
        console.log("start of timer")
    }, 1000);

    return ()=>{
        clearInterval(timer)
        console.log("clean useeffect")
    }

  }, [time])

  return (
    <div>
      <input
        type="text"
        name="name"
        value={details.name}
        onChange={handleChange}
      />
      <h2>
        {details.name} has been clicked exactly {details.counter} times
      </h2>
      <button onClick={handleIncrease}>Increase</button>

      <h1>Uses of useefect: {time}</h1>
    </div>
  );
}

export default ReactUseState;
