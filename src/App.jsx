import React, { useEffect } from 'react'
import CardContainer from './comps/CardContainer'
import useTimer from './hooks/useTimer'

export default function App() {
  const { timer, seconds, isActive, toggle, reset } = useTimer(180)
  return (
    <div className='justify-around flex flex-col'>
      {/* <Header/> */}
      <CardContainer timer={timer} />
      {/* <p></p> */}
      {/* <Board/> */}
      {/* <RestartButtom/> */}
    </div>
  )
}
