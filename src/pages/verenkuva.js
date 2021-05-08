import React from "react"
import Layout from "../components/layout"

export default function Verenkuva() {
  return (
    <Layout>
      <h1>
        Verenkuvan tutkimukset</h1>
      <p>
        Perusverenkuva (PVK) on useita osatutkimuksia sisältävä tutkimus, jossa mitataan veren hemoglobiinipitoisuus ja lasketaan verisolut: valkosolut (leukosyytit), punasolut (erytrosyytit) ja verihiutaleet (trombosyytit). Lisaksi lasketaan punasoluja ja trombosyyttejä kuvaavat indeksit. Tutkimuksella saadaan yleiskuva verisoluista ja hemoglobiinista.

        Perusverenkuva on tutkimuksena hyvin yleinen ja sitä tarvitaan lukuisissa eri tilanteissa. Sen avulla voidaan todeta tai sulkea pois monia eri sairauksia ja tautitiloja. Se tutkitaan herkästi, jos potilaalla on esimerkiksi tulehdusoireita, väsymystä tai esimerkiksi mustelmataipumusta, jonka yhteydessä voi esiintyä anemiaa tai olla liian vähäinen verihiutaleiden määrä. Veren puna- tai valkosolujen muutokset voivat kertoa myös mm. raudan tai jonkin vitamiinin puutteesta.

        Täydellinen verenkuva (TVK) antaa perusverenkuvatutkimusten lisäksi tarkempaa tietoa veren valkosoluista. Tutkimusta käytetään selvittämään verenkuvan muutoksia eri tautitiloissa, kuten mm. anemian, verenvuodon, hemolyysin, vuotohäiriöiden, tulehduksen ja kroonisten tautien yhteydessä. Veren leukosyyttien erittelylaskenta antaa tarkan kuvan eri solutyyppien määräsuhteista.

        Täydellinen verenkuva (B-TVK) sisältää lisäksi valkosolujen erittelylaskennan (B-Diffi) ja verihiutaleiden määrän (B-Trom).

      </p>

      <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 justify-center '>
        <div className="my-8 mx-2">
          <h1>B-Hb | hemoglobiini</h1>
          <p>Viitearvot
            Miehet: 134–167 g/l
            Naiset: 117–155 g/l
            Lasten viitearvot vaihtelevat iän mukaan.
            Vastasyntynyt: 170-200 g/l
            2-3kk: 110-120 g/l
            7v: 130-140 g/l</p>
        </div>
        <div className="my-8 mx-2">
          <h1> B-Hkr | hematokriitti</h1>
          <p>
            Viitearvot:
            Miehet: 39–50 %
            Naiset: 35–46 %
          </p>
        </div>
        <div className="my-8 mx-2">
          <h1> B-Eryt | erytrosyytit eli punasolut</h1>
          <p>
            Viitearvot:
            Miehet: 4,25–5,70 x E12/l
            Naiset: 3,90–5,20 x E12/l
          </p>
        </div>
        <div className="my-8 mx-2">
          <h1> B-Leuk | leukosyytit eli valkosolut</h1>
          <p>Viitearvo:
          Aikuisille: 3.4–8.2 E9/l</p>
        </div>
        <div className="my-8 mx-2">
          <h1>E-MCH | punasolujen hemoglobiinin massa</h1>
          <p>Viitearvo:
            27-33 pg/punasolu</p>
        </div>
        <div className="my-8 mx-2">
          <h1>E-MCHC | punasolujen massakonsentraatio</h1>
          <p>
            Viitearvo:
            320-355 g/l
          </p>
        </div>
        <div className="my-8 mx-2">
          <h1>E-MCV | punasolujen keskitilavuus </h1>
          <p>82-98 fl</p>
        </div>
      </div>
    </Layout>
  );
}