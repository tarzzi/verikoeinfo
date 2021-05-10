import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"

export default function Tulehdus() {
  return (
    <Layout>
      <h1>Tulehduskokeet (CRP ja LA)</h1>
      <p>

        Kun epäillään tulehdusta, mitataan hyvin usein S-CRP, joka kertoo seerumin tietyn proteiinin pitoisuudesta. Se kohoaa erityisesti bakteeritulehduksien yhteydessä ja voi kertoa myös monista muista sairauksista.
        Tulehduskoe tai -arvo on termi, joka viittaa laboratoriotutkimuksiin, joita käytetään elimistön erilaisten tulehdusprosessien diagnosoinnissa. Yleisimmin käytettyjä tulehduksen mittareita ovat C-reaktiivinen proteiinin mittaaminen eli CRP ja lasko eli LA, kansankielellä ”senkka”. Näiden lisäksi myös muita laboratoriotutkimuksia voidaan käyttää.

        CRP on maksassa syntesoituva, ns. akuutin vaiheen proteiini. Terveillä henkilöillä sitä esiintyy seerumissa hyvin alhaisena pitoisuutena. CRP -pitoisuus veressä kasvaa tulehduksellisen prosessin yhteydessä hyvin nopeasti. Tulehduksen aiheuttajan poistuessa myös veren CRP -pitoisuus alenee nopeasti.

        LA eli lasko kertoo punasolujen laskeutumisnopeudesta ja on epäspesifinen analyysi, jota usein käytetään erilaisten tautitilojen aktiivisuuden osoittamiseen. Joidenkin sairaustilojen (mm. krooniset tulehdukset ja reumataudit) yhteydessä punasolut laskeutuvat verinäytteessä nopeammin. Lasko kasvaa myös iän myötä.

      </p>
      <Grid>
        <Card>
          <h1>CRP</h1>
          <p>
            Viitearvo:
          </p>
        </Card>
        <Card>
          <h1>LA</h1>
          <p>
            Viitearvo:
          </p>
        </Card>

      </Grid>
    </Layout>
  );
}