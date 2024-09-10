"use client"
import React from 'react'
import Card from "../../../../components/Card"
export type Item= {
  id:string
  date:string
  event:string,
  amount:number
  status:string
} 

const page = () => {
  
  const DATA : Item={
    id:"12345678",
    date:"17.08.2024",
    event:"Electroquest",
    amount:20,
    status:"Pending",
  }

  return (
    <div className='bg-black'>
        <Card id={DATA.id} date={DATA.date} event={DATA.event} amount={DATA.amount} status={DATA.status}/>
    </div>
  )
}

export default page