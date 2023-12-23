import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCounter } from "../store/counterReducer";

const CounterPage = () => {
  const [num, setNum] = useState(1);
  const value = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREASE_COUNTER", payload: num });
  };

  return (
    <div className="w-full flex flex-col justify-center gap-3">
      <span className="text-2xl col-span-full">Счетчик</span>
      <div className="w-full flex justify-center items-center gap-4">
        <div>
          <input
            type="number"
            value={num}
            onChange={(e) => setNum(Number(e.target.value))}
          />
        </div>
        <button className="w-8 bg-slate-300 px-2 py-1 rounded-md">-</button>
        <span>{value}</span>
        <button
          className="w-8 bg-slate-300 px-2 py-1 rounded-md"
          onClick={increase}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
