import React from 'react';
export default function Card({children}){
  return (
    <div className="items-center ring-2 ring-red-300 ring-opacity-60 h-full shadow-lg">
      {children}
    </div>
  )

}