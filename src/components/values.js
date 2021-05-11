import React, { Component }  from 'react';

export default function Values({children}){
  return (
    <div>
      <p className='p-4'>
        {children}
      </p>
    </div>
  )

}
