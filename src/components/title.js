import React, { Component }  from 'react';

export default function Title({children}){
  return (
    <div className='lg:my-3 md:my-2 sm:my-1 my-1 text-2xl text-center'>
      <h1>
      {children}
      </h1>
    </div>
  )

}