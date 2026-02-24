import React from 'react'
import Header from './comps/Header'
import Board from './comps/Board'
export default function App() {
  return (
    <>
      <Header/>
      {/* <CardContainer/> */}
      <p className='bg-[#1a2537] text-[#7f8a9e] text-center border-t-1 border-b-1 border-[#597199] font-bold pt-4 pb-4'>Locate and neutralize all bombs before time runs out.</p>
      <Board/>
      {/* <RestartButtom/> */}
    </>
  )
}
