import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import "../styles/global.css"
import { Helmet } from "react-helmet"
import Link from "gatsby-link"

export default function Home() {
  return <div>
    <Helmet>
      <title>Veriarvot.info</title>
    </Helmet>
    <Header />
    <div className="grid grid-cols-3 grid-rows-3 justify-center items-center text-3xl transition duration-700 bg-white">
        <Link to='/maksa' className="border-2 border-gray-400 bg-gray-200 hover:bg-gray-700 hover:text-white py-16 text-center shadow-none"><p>Maksakokeet</p></Link>
        <Link to='/test' className="border-2 border-gray-400 bg-gray-200 hover:bg-gray-700 hover:text-white py-16 text-center ">Kilpirauhaskokeet</Link>
        <Link to='/test' className="border-2 border-gray-400 bg-gray-200 hover:bg-gray-700 hover:text-white py-16 text-center ">Munuais- ja nestetasapaino</Link>
        <Link to='/test' className="border-2 border-gray-400 bg-gray-200 hover:bg-gray-700 hover:text-white py-16 text-center ">Tulehduskokeet</Link>
        <Link to='/test' className="border-2 border-gray-400 bg-gray-200 hover:bg-gray-700 hover:text-white py-16 text-center ">Rasvakokeet</Link>
        <Link to='/test' className="border-2 border-gray-400 bg-gray-200 hover:bg-gray-700 hover:text-white py-16 text-center ">Sokerikokeet</Link>
        <Link to='/test' className="border-2 border-gray-400 bg-gray-200 hover:bg-gray-700 hover:text-white py-16 text-center ">Reumakokeet</Link>
        <Link to='/test' className="border-2 border-gray-400 bg-gray-200 hover:bg-gray-700 hover:text-white py-16 text-center ">Virtsakokeet</Link>
        <Link to='/test' className="border-2 border-gray-400 bg-gray-200 hover:bg-gray-700 hover:text-white py-16 text-center ">Verenkuvan tutkimukset</Link>
    </div>
  </div>
}
