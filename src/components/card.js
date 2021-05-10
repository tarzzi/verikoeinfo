import React from "react"

export default function Card({children}){
  return (
    <div className="items-center p-4 ring-2 ring-red-300 ring-opacity-60">
      {children}
    </div>
  )

}