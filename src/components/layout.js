import "@fontsource/lora"
import "@fontsource/varela"
import React, { Component }  from 'react';
import Link from "gatsby-link"
import Header from '../components/header'

export default function Layout({ children }) {
  return (
<>
  <Header />
  <div className='text-center mx-auto'>
    <Link className='border-b-2 border-gray-400 w-full block py-2 hover:bg-red-300 hover:text-white font-bold lg:text-2xl md:text-xl sm:text-lg text-lg' to='/'>Palaa takaisin</Link>
  </div>
    <div className='lg:mx-12 md:mx-8 sm:mx-6 mx-6 my-8'>
      {children}
    </div>
  <div className='text-center text-4xl my-4'>
    <Link to='#top'><span role='img'>⬆</span></Link>
  </div>
</>
  )
}