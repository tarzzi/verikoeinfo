import React from "react"
import Layout from "../components/layout"

export default function Kilpirauha() {
  return (
    <Layout>
      <div className="my-8 mx-2">
        <h1>
          Kilpirauhaskokeet (TSH ja T4V)</h1>
        <p>
          Tyreotropiini on aivolisäkkeen erittämä hormoni, joka säätelee kilpirauhasen toimintaa. Tyreotropiini on välttämätön kilpirauhashormonin eli tyroksiinin tuotannolle. Tyreotropiinilla (TSH) on selvä vuorokausivaihtelu. TSH –tutkimus suositellaankin otettavaksi klo 9-12 välillä.
          S-TSH kertoo itse asiassa aivolisäkkeen erittämän tyreotropiinihormonin määrän.
          Yleisimmässä kilpirauhasen vajaatoimintatyypissä, kilpirauhasperäisessä vajaatoiminnassa, TSH:n määrä veressä suurenee. Vajaatoiminnan oireita ovat mm. paleleminen, painon nousu ja ihon kuivuminen.
          TSH:n rinnalla mitataan usein myös kilpirauhasen tuottaman tyroksiinin määrää S-T4V (seerumin vapaana olevan tyroksiinin määrä)
          Kilpirauhasen vajaatoimintaa hoidetaan kilpirauhashormonilla eli tyroksiinilla. Tyroksiini on tärkein kilpirauhashormoni. Kilpirauhasen toiminnallisen tilan arviointia varten käytetään yleisimmin vapaan tyroksiinin määrittämistä (T4V).
          Joskus lisätutkimuksena käytetään myös S-T3V-mittausta, jos epäillään kilpirauhasen toiminnan häiriötä.
        </p>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 justify-center '>
        <div className="my-8 mx-2 items-center">
          <h1>S-TSH | Tyreotropiini </h1>
          <p>Viitearvot<br />
            Lapset 2 – 11v: 0,6 – 6,3 mIU/l<br />
            Lapset 12 – 17v: 0,5 – 4,9 mIU/l<br />
            Aikuiset ≥ 18v: 0,4 – 4,0 mIU/l</p>
          </div>
          <div className="my-8 mx-2">
            <h1>S-T4V | Tyroksiini, vapaa</h1>
          <p>Viitearvot<br />
            Kaikki: 10 – 21 pmol/l</p>
        </div>
        <div className="my-8 mx-2">
          <h1>S-T3V | Trijodityroniini, vapaa</h1>
          <p>Viitearvot<br />
          Kaikki: 3,5-6,5 pmol/l</p>
        </div>
      </div>

    </Layout>
  );
}