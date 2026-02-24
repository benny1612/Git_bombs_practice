import React from 'react'

export default function RestartButtom({ setNewGame, resetTimer, toggle }) {
  return (
    <button onClick={() => {
        resetTimer()
        toggle()
        setNewGame(true)
    }} className='px-4 py-1 border rounded hover:bg-[#6ca24f] bg-[#436331] text-white'>Restart Game</button>
  )
}
