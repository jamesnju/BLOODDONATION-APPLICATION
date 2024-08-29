import Donars from '@/components/component/Donars'
import React from 'react'

async function getDonars(){
  const res = await fetch("http://localhost:5127/api/Donar/GetAllDonars",{
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    },
    next: {tags:["getdonars"]}
  })
  if(!res.ok) throw new Error ("network issues");
  const data = await res.json()
  //console.log(data,"donar")
  if(data){
    return data
  }
}
const page = async() => {
  const allDonars = await getDonars() || [];
      //console.log(data,"donar")

  return (
    <div>
        <Donars allDonars={allDonars}/>
    </div>
  )
}

export default page