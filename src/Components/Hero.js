import React from "react";
import AddBtn from "./AddBtn";
import RmvBtn from "./RmvBtn";
import Img from "./Img"

export default function Hero() {
    const [count, setCount] = React.useState(0);
    const [brigadeiros, setBrigadeiro] = React.useState([]);
  
    function addBrigadeiro() {
      setCount(count + 1);
      setBrigadeiro((prevItems) => {
        return [
          ...prevItems,
          <Img />
        ];
      });
    }
  
    function sellBrigadeiro(index) {
      setCount(Math.max(count - 1, 0));
      brigadeiros.splice(index, 1);
    }
  
    return (
      <div className="hero-section">
        <div id="brigadeiros-div">
          <ul>
            {brigadeiros.map((brigadeiroProp) => {
              return (
                <li className="bought-brigadeiro" onClick={sellBrigadeiro}>
                  {brigadeiroProp}
                </li>
              );
            })}
          </ul>
        </div>
  
        <h1> You currently have {count} Brigadeiros </h1>
        <div className="btn">
          <button onClick={addBrigadeiro}>
            Buy Brigadeiro <AddBtn />
          </button>
          <button onClick={sellBrigadeiro}>
            Sell Brigadeiro <RmvBtn />
          </button>
        </div>
      </div>
    );
  }