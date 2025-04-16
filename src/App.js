import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    document.title =  text;}, [text]);
    useEffect(() => {
      setTimeout(() => {setCount(0)}, 5000);
    }
    , [count])
 

  console.log("Component rendering");

  return <div>
  <button onClick={() => setCount(count + 1)}>i have been clicked {count} times</button>
  <input
    type="text"
    value={text}
    onChange={(e) => setText(e.target.value)}
    placeholder="Type something"
  />
  </div>
; 



  // return (
  //   <div>
  //     <button onClick={() => setCount(count + 1)}>
  //       I have been clicked {count} times
  //     </button>
  //     <input
  //       type="text"
  //       value={text}
  //       onChange={(e) => setText(e.target.value)}
  //       placeholder="Type something"
  //     />
  //   </div>
  // );
}
export default App;
