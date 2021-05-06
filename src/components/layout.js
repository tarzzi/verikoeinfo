import "@fontsource/lora"
import "@fontsource/varela"
import React from "react"
import Link from "gatsby-link"
import Header from '../components/header'

export default function Layout({ children }) {
  return (
<>
  <Header />
  <div id='top' className='mt-5 pt-4 text-center'>
    <Link className='border-2 border-gray-400 rounded-2xl px-4 py-2 hover:bg-gray-800 hover:text-white font-bold text-2xl' to='/'>Palaa takaisin</Link>
  </div>
    <div className='lg:mx-12 md:mx-8 sm:mx-6 mx-6'>
      {children}
    </div>
  <div className='text-center text-4xl my-4'>
    <Link to='#top'><span role='img'>⬆</span></Link>
  </div>
</>
  )
}