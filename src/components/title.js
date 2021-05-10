import React from "react"

export default function Title({children}){
  return (
    <div className='my-3 mx-2 p-5 text-2xl text-center'>
      <h1>
      {children}
      </h1>
    </div>
  )

}