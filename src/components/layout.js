import "@fontsource/lora"
import "@fontsource/varela"
import React from "react"
import Link from "gatsby-link"
import Header from '../components/header'

export default function Layout({ children }) {
  return (
<>
  <Header />
  <div className='mt-5 text-center'>
    <Link className='border-2 border-gray-400 rounded-2xl px-4 py-2 hover:bg-gray-800 hover:text-white font-bold text-2xl' to='/'>Palaa takaisin</Link>
  </div>
    <div style={{ margin: `3rem 10rem`, padding: `0 1rem` }}>
      {children}
    </div>
</>
  )
}