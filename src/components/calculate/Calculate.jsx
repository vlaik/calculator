import { useState } from "react";
import "./calculate.css";

export const Calculate = () => {
  const [val, setVal] = useState("");
  console.log(val);

  const result = () => {
    try {
      setVal(eval(val));
    } catch (error) {
      setVal("Error");
    }
  };

  const backSpace = () => {
    try {
      setVal(val.slice(0, -1));
    } catch (error) {
      setVal("");
    }
  };

  return (
    <div className="main">
      <div className="calculate">
        <input
          value={val}
          onChange={(e) => setVal(e.target)}
          disabled={true}
          className="calculateBar"
          type="text"
        />
        <div className="buttons">
          <div className="numbers">
            <button value={1} onClick={(e) => setVal(val + e.target.value)}>
              1
            </button>
            <button value={2} onClick={(e) => setVal(val + e.target.value)}>
              2
            </button>
            <button value={3} onClick={(e) => setVal(val + e.target.value)}>
              3
            </button>
            <button value={4} onClick={(e) => setVal(val + e.target.value)}>
              4
            </button>
            <button value={5} onClick={(e) => setVal(val + e.target.value)}>
              5
            </button>
            <button value={6} onClick={(e) => setVal(val + e.target.value)}>
              6
            </button>
            <button value={7} onClick={(e) => setVal(val + e.target.value)}>
              7
            </button>
            <button value={8} onClick={(e) => setVal(val + e.target.value)}>
              8
            </button>
            <button value={9} onClick={(e) => setVal(val + e.target.value)}>
              9
            </button>
            <button value={"*"} onClick={(e) => setVal(val + e.target.value)}>
              *
            </button>
            <button value={0} onClick={(e) => setVal(val + e.target.value)}>
              0
            </button>
            <button value={"/"} onClick={(e) => setVal(val + e.target.value)}>
              /
            </button>
          </div>
          <div className="elements">
            <button value={"C"} onClick={() => backSpace()}>
              C/CE
            </button>
            <button value={"-"} onClick={(e) => setVal(val + e.target.value)}>
              -
            </button>
            <button value={"+"} onClick={(e) => setVal(val + e.target.value)}>
              +
            </button>
            <button value={"="} onClick={() => result()}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
