import "./App.css";
import { useState } from "react";
import { add } from "./action/index";
import { useDispatch } from "react-redux";
import ShowData from "./ShowData";
function App() {
  const [data, setData] = useState(false);
  const dispatch = useDispatch();
  // console.log("value ", reducer.reducers);
  // const info = Object.key(reducer.reducers);
  const clickHandler = () => {
    dispatch(add());
    setData(!data);
  };

  return (
    <>
      <div className="App">
        <button onClick={clickHandler}>click me</button>
      </div>

      {data === true && <ShowData />}
    </>
  );
}

export default App;
