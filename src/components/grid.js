import React from "react"

export default function Grid({children}){
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 justify-center items-center gap-x-5 gap-y-2'>
      {children}
    </div>
  )

}