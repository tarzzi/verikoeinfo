import React, { Component }  from 'react';

export default function Ctitle({children}){
  return (
    <div>
      <h1 className='text-center text-gray-900 bg-red-200 font-bold py-3'>
        {children}
      </h1>
    </div>
  )

}
