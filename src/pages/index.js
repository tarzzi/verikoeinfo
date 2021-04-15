import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import "../styles/global.css"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

export default function Home() {
  return <div>
    <Helmet>

    </Helmet>
    <Header />
    <div className="container-fluid m-2 main">
    Täydellinen verenkuva (TVK) antaa perusverenkuvatutkimusten lisäksi tarkempaa tietoa veren valkosoluista. Tutkimusta käytetään selvittämään verenkuvan muutoksia eri tautitiloissa, kuten mm. anemian, verenvuodon, hemolyysin, vuotohäiriöiden, tulehduksen ja kroonisten tautien yhteydessä. Veren leukosyyttien erittelylaskenta antaa tarkan kuvan eri solutyyppien määräsuhteista.
    </div>
    <Footer />
  </div>
}
