import React from "react"
import Layout from "../components/layout"

export default function Munuaiset() {
  return (
    <Layout>
      <h1>Munuais- ja nestetasapainokokeet (KREA, K, NA)</h1>
      <p>
        Munuaisten toimintaa voidaan tutkia mittaamalla verestä aineita, jotka erittyvät munuaisten kautta pois. Jos erittyminen on tilapäisen syyn tai munuaistaudin vuoksi häiriintynyt, aineen määrä veressä suurenee. Yleisimmin tarkoitukseen käytetään kreatiniinin mittausta KREA –tutkimuksella, jolla voidaan arvioida munuaisten toimintaa. Kreatiniinipitoisuus voi olla koholla munuaisten akuutissa tai kroonisessa vajaatoiminnassa, munuaisten verenkiertovajauksessa tai esimerkiksi munuaiskiven johdosta.
        Munuaisten toimintaa kuvaava tavallinen koe on P-KREA eli plasmasta tehtävä kreatiniinitesti.
        Yleisimpiä nestetasapainon seurantakokeita ovat natrium (NA) ja kalium (K). Niiden määrittämistä käytetään esim. ripulin, sydänsairauksien ja kohonneen verenpaineen tutkimuksissa.

      </p>

      <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 justify-center '>
        <div className="my-8 mx-2">
          <h1>P-KREA | Kreatiini</h1>
          <p></p>
        </div>
        <div className="my-8 mx-2">
          <h1>U-K | Kalium</h1>
          <p></p>
        </div>
        <div className="my-8 mx-2">
          <h1>U-NA | Natrium </h1>
          <p></p>
        </div>
      </div>
    </Layout>
  );
}