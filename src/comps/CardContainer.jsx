import React from 'react'
import Card from './Card'

export default function CardContainer({ timer, reset, toggle, seconds }) {
  return (<div className='gap-2 flex flex-row'>
    <Card iconLink='' cardName='Bombs Remainder' value='5'/>
    <Card iconLink='' cardName='Time Remaining' value={timer} />
    <Card iconLink='' cardName='Board Size' value='10*8'/>
  </div>
  )
}
