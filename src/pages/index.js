import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import "../styles/global.css"
import { Helmet } from "react-helmet"
import { withPrefix, Link } from "gatsby"

export default function Home() {
  return <div>
    <Helmet>
      <title>Veriarvot.info</title>
      <script src={withPrefix('doorbell.js')} type="text/javascript" />
    </Helmet>
    <Header />
    <div className='text-center lg:text-3xl md:text-3xl sm:text-2xl py-3 my-1'>Valitse kokeen kategoria, niin näet tarkemmat tiedot</div>
    <div className="grid lg:grid-cols-3 lg:text-3xl md:grid-cols-3 md:text-2xl sm:grid-cols-2 sm:text-2xl grid-cols-2 justify-center items-center transition-all duration-100 bg-white">
        <Link to='/kilpirauhanen' className="border-2 border-gray-400 bg-gray-200 hover:bg-gray-700 hover:text-white py-16 text-center ">Kilpirauhanen</Link>
        <Link to='/maksa'         className="border-2 border-gray-400 bg-gray-200 hover:bg-gray-700 hover:text-white py-16 text-center ">Maksa</Link>
        <Link to='/munuaiset'     className="border-2 border-gray-400 bg-gray-200 hover:bg-gray-700 hover:text-white py-16 text-center ">Munuaiset</Link>
        <Link to='/rasva'         className="border-2 border-gray-400 bg-gray-200 hover:bg-gray-700 hover:text-white py-16 text-center ">Rasva-arvot</Link>
        <Link to='/reuma'         className="border-2 border-gray-400 bg-gray-200 hover:bg-gray-700 hover:text-white py-16 text-center ">Reuma</Link>
        <Link to='/sokeri'        className="border-2 border-gray-400 bg-gray-200 hover:bg-gray-700 hover:text-white py-16 text-center ">Sokeri</Link>
        <Link to='/tulehdus'      className="border-2 border-gray-400 bg-gray-200 hover:bg-gray-700 hover:text-white py-16 text-center ">Tulehdukset</Link>
        <Link to='/verenkuva'     className="border-2 border-gray-400 bg-gray-200 hover:bg-gray-700 hover:text-white py-16 text-center ">Verenkuva</Link>
        <Link to='/virtsa'        className="border-2 border-gray-400 bg-gray-200 hover:bg-gray-700 hover:text-white py-16 text-center ">Virtsa</Link>
    </div>
    <Footer />
  </div>
}
