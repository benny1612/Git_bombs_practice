import CardContainer from "./comps/CardContainer";
import useTimer from "./hooks/useTimer";
import Header from "./comps/Header";
import Board from "./comps/Board";
import { useEffect, useState } from "react";
import RestartButtom from "./comps/RestartButtom";

export default function App() {
  const { timer, seconds, isActive, setIsActive, toggle, reset } = useTimer(180);
  const [newGame, setNewGame] = useState(false);
  useEffect(() => {
    newGame && setIsActive(true)
  },[isActive])
  return (
    <div className="background content-between flex flex-col">
      <Header />
      <CardContainer timer={timer} seconds={seconds}/>
      <p className="bg-[#1a2537] text-[#7f8a9e] text-center border-t-1 border-b-1 border-[#597199] font-bold pt-4 pb-4">
        Locate and neutralize all bombs before time runs out.
      </p>
      <Board/>
      <RestartButtom setNewGame={setNewGame} resetTimer={reset} toggle={toggle}/>
    </div>
  );
}
